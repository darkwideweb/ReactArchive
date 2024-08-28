import React, { useState, useEffect, useCallback } from 'react';
import { Button, Typography, Paper, TextField, CircularProgress, LinearProgress, Box, Tooltip, IconButton, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const questions = [
  { question: "Как называется основная библиотека для построения пользовательского интерфейса в JavaScript?", correctAnswer: "react", hint: "Создал Facebook" },
  { question: "Какой хук используется для побочных эффектов в React?", correctAnswer: "useEffect", hint: "Срабатывает после рендеринга" },
  { question: "Какая команда используется для создания нового проекта на React?", correctAnswer: "npx create-react-app", hint: "Начинается с 'npx'" },
  { question: "Какой метод используется для изменения состояния компонента?", correctAnswer: "setState", hint: "Применяется вместе с useState" },
  { question: "Какой файл является точкой входа в React-приложение?", correctAnswer: "index.js", hint: "Находится в корне проекта" },
  { question: "Какой хук позволяет управлять состоянием на уровне функционального компонента?", correctAnswer: "useState", hint: "Используется вместе с React" },
  { question: "Какой метод позволяет передавать данные между компонентами в React?", correctAnswer: "props", hint: "Параметры передаются родительским компонентом" },
  { question: "Что делает метод `componentDidMount` в классовых компонентах?", correctAnswer: "Выполняется после первого рендеринга компонента", hint: "Используется для загрузки данных" },
  { question: "Какой метод жизненного цикла вызывается перед удалением компонента из DOM?", correctAnswer: "componentWillUnmount", hint: "Чистка ресурсов перед удалением" },
  { question: "Какой элемент HTML можно использовать для отображения списка элементов в React?", correctAnswer: "ul или ol", hint: "Используется для отображения упорядоченных или неупорядоченных списков" },
  { question: "Какой метод позволяет изменять свойства объекта в JavaScript?", correctAnswer: "Object.assign", hint: "Метод для копирования свойств" },
  { question: "Какой хук позволяет оптимизировать производительность компонент в React?", correctAnswer: "useMemo", hint: "Используется для мемоизации значений" },
  { question: "Какой элемент React можно использовать для рендеринга HTML внутри компонента?", correctAnswer: "dangerouslySetInnerHTML", hint: "Используется для вставки HTML" },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSubmit = useCallback(() => {
    setIsSubmitting(true);
    const isAnswerCorrect = answer.trim().toLowerCase() === questions[currentQuestionIndex].correctAnswer.toLowerCase();
    
    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        question: questions[currentQuestionIndex].question,
        userAnswer: answer,
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
        isCorrect: isAnswerCorrect,
      }
    ]);

    if (isAnswerCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setAnswer('');
        setIsCorrect(null);
        setTimeLeft(10); 
      } else {
        setIsQuizStarted(false);
        setIsQuizFinished(true);
      }
      setIsSubmitting(false);
    }, 1000);
  }, [answer, currentQuestionIndex]);

  useEffect(() => {
    if (isQuizStarted && timeLeft > 0 && !isSubmitting) {
      const timerId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && !isSubmitting) {
      handleAnswerSubmit();
    }
  }, [timeLeft, isSubmitting, handleAnswerSubmit, isQuizStarted]);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setIsQuizStarted(true);
    setIsQuizFinished(false);
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(10);
  };

  const handleTryAgain = () => {
    handleStartQuiz();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10 }}>
      <AnimatePresence>
        {!isQuizStarted && !isQuizFinished ? (
          <Paper
            elevation={8}
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
              background: 'background.paper',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60vh',
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: 'text.primary' }}>
              Добро пожаловать в викторину!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Проверьте свои знания.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartQuiz}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                borderRadius: '8px',
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
              }}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать викторину
            </Button>
          </Paper>
        ) : isQuizFinished ? (
          <Box mt={5} textAlign="center">
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Викторина завершена!
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, fontSize: '1.25rem', color: 'text.primary' }}>
              Ваш результат: {score} из {questions.length}
            </Typography>
            <Box mt={4} sx={{ textAlign: 'left', maxWidth: 800, margin: '0 auto' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Ваши ответы:
              </Typography>
              {userAnswers.map((answerDetail, index) => (
                <Paper key={index} sx={{ p: 2, mb: 1, backgroundColor: answerDetail.isCorrect ? 'success.light' : 'error.light' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Вопрос: {answerDetail.question}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Ваш ответ: <strong>{answerDetail.userAnswer}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Правильный ответ: <strong>{answerDetail.correctAnswer}</strong>
                  </Typography>
                </Paper>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleTryAgain}
              sx={{
                mt: 4,
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                borderRadius: '8px',
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
              }}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Попробовать снова
            </Button>
          </Box>
        ) : (
          <AnimatePresence>
            {isQuizStarted && (
              <Paper
                elevation={8}
                sx={{
                  padding: 5,
                  borderRadius: 2,
                  boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
                  background: 'background.paper',
                  textAlign: 'center',
                }}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Вопрос {currentQuestionIndex + 1} из {questions.length}
                  </Typography>
                  <Tooltip title={questions[currentQuestionIndex].hint} placement="top" arrow>
                    <IconButton>
                      <HelpOutlineIcon sx={{ color: 'primary.main' }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                  {questions[currentQuestionIndex].question}
                </Typography>
                <TextField
                  label="Ваш ответ"
                  variant="outlined"
                  fullWidth
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: '12px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                  disabled={timeLeft === 0 || isSubmitting}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAnswerSubmit}
                  disabled={timeLeft === 0 || isSubmitting}
                  sx={{
                    mb: 3,
                    width: '100%',
                    py: 2,
                    fontSize: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Отправить'}
                </Button>
                <LinearProgress
                  variant="determinate"
                  value={(timeLeft / 10) * 100} 
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    mb: 2,
                    backgroundColor: 'background.default',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      backgroundColor: timeLeft > 5 ? 'primary.main' : 'error.main',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                  Осталось времени: {timeLeft} секунд
                </Typography>
                {isCorrect !== null && (
                  <Typography
                    variant="h6"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: isCorrect ? 'success.main' : 'error.main',
                      fontWeight: 600,
                    }}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
                        Правильно!
                      </>
                    ) : (
                      <>
                        <ErrorOutlineIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
                        Неправильно! Попробуйте снова.
                      </>
                    )}
                  </Typography>
                )}
              </Paper>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Quiz;