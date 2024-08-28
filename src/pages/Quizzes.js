import React, { useState } from 'react';
import {
  Container, Typography, Box, Grid, Paper, Button, LinearProgress, Tooltip,
  List, ListItem, ListItemText, ListItemIcon, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';

const quizzes = [
  {
    title: 'Advanced React Quiz',
    description: 'Закрепите свои знания о работе с классами, контекстом и жизненным циклом компонентов.',
    difficulty: 'Продвинутый',
    questions: [
      {
        question: 'Что такое Context API?',
        options: ['API для управления состоянием', 'API для HTTP-запросов', 'API для маршрутизации'],
        answer: 'API для управления состоянием',
        hint: 'Context API помогает передавать данные через дерево компонентов.'
      },
      {
        question: 'Какой метод используется для получения текущего значения context?',
        options: ['useContext()', 'getContext()', 'contextValue()'],
        answer: 'useContext()',
        hint: 'Этот хук используется в функциональных компонентах.'
      },
      {
        question: 'Какой метод вызывается при удалении компонента из DOM?',
        options: ['componentWillUnmount', 'componentDidUpdate', 'componentDidMount'],
        answer: 'componentWillUnmount',
        hint: 'Этот метод используется для очистки перед удалением компонента.'
      },
      {
        question: 'Что делает метод componentDidUpdate?',
        options: ['Вызывается после обновления компонента', 'Инициализирует компонент', 'Возвращает JSX'],
        answer: 'Вызывается после обновления компонента',
        hint: 'Этот метод полезен для обработки изменений в компоненте после его обновления.'
      },
      {
        question: 'Какой метод используется для захвата ошибок в компонентах?',
        options: ['componentDidCatch', 'getDerivedStateFromError', 'componentWillCatch'],
        answer: 'componentDidCatch',
        hint: 'Этот метод используется для отлова ошибок в компоненте и его потомках.'
      }
    ]
  },
  {
    title: 'React Basics Quiz',
    description: 'Проверьте свои знания основ React: JSX, компоненты, свойства и состояние.',
    difficulty: 'Начальный',
    questions: [
      {
        question: 'Что такое JSX?',
        options: ['JavaScript XML', 'JavaScript Extension', 'JSON Extension'],
        answer: 'JavaScript XML',
        hint: 'JSX выглядит как HTML, но это JavaScript.'
      },
      {
        question: 'Какой метод используется для обновления состояния компонента?',
        options: ['setState()', 'updateState()', 'modifyState()'],
        answer: 'setState()',
        hint: 'Этот метод вызывается для изменения состояния компонента.'
      },
      {
        question: 'Что такое компоненты в React?',
        options: ['Повторно используемые части интерфейса', 'Типы данных', 'Методы'],
        answer: 'Повторно используемые части интерфейса',
        hint: 'Компоненты можно использовать повторно в разных частях приложения.'
      },
      {
        question: 'Какой хук используется для управления состоянием в функциональных компонентах?',
        options: ['useState()', 'useEffect()', 'useReducer()'],
        answer: 'useState()',
        hint: 'Этот хук позволяет добавлять состояние в функциональные компоненты.'
      },
      {
        question: 'Что делает функция render в классовом компоненте?',
        options: ['Возвращает JSX для рендеринга', 'Изменяет состояние компонента', 'Инициализирует компонент'],
        answer: 'Возвращает JSX для рендеринга',
        hint: 'Функция render определяет, что будет отображаться на экране.'
      }
    ]
  },
  {
    title: 'React Hooks Quiz',
    description: 'Узнайте больше о работе с хуками, такими как useState, useEffect и другими.',
    difficulty: 'Средний',
    questions: [
      {
        question: 'Какой хук используется для управления состоянием в функциональных компонентах?',
        options: ['useState()', 'useEffect()', 'useReducer()'],
        answer: 'useState()',
        hint: 'Этот хук позволяет добавлять состояние в функциональные компоненты.'
      },
      {
        question: 'Какой хук используется для выполнения побочных эффектов?',
        options: ['useEffect()', 'useMemo()', 'useCallback()'],
        answer: 'useEffect()',
        hint: 'Этот хук выполняет эффекты после рендера компонента.'
      },
      {
        question: 'Какой хук используется для мемоизации значений?',
        options: ['useMemo()', 'useState()', 'useEffect()'],
        answer: 'useMemo()',
        hint: 'Этот хук предотвращает ненужные повторные вычисления.'
      },
      {
        question: 'Какой хук используется для кэширования функций?',
        options: ['useCallback()', 'useRef()', 'useContext()'],
        answer: 'useCallback()',
        hint: 'Этот хук возвращает мемоизированную версию функции.'
      },
      {
        question: 'Какой хук используется для управления ссылками на DOM элементы?',
        options: ['useRef()', 'useState()', 'useEffect()'],
        answer: 'useRef()',
        hint: 'Этот хук возвращает мутабельный объект, который сохраняет своё значение между рендерами.'
      }
    ]
  }
];

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [hint, setHint] = useState('');
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [quizProgress, setQuizProgress] = useState(0);

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setQuizResults([]);
    setQuizProgress(0); 
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    setQuizResults([...quizResults, {
      question: currentQuestion.question,
      userAnswer: selectedOption,
      correctAnswer: currentQuestion.answer,
      correct: isCorrect
    }]);
    setSelectedOption(null);

    const nextQuestionIndex = currentQuestionIndex + 1;
    const newProgress = ((nextQuestionIndex + 1) / selectedQuiz.questions.length) * 100;
    setQuizProgress(newProgress);

    if (nextQuestionIndex < selectedQuiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsResultOpen(true);
    }
  };

  const handleOpenHint = () => {
    setHint(selectedQuiz.questions[currentQuestionIndex].hint);
    setIsHintOpen(true);
  };

  const handleCloseHint = () => {
    setIsHintOpen(false);
  };

  const handleCloseResult = () => {
    setIsResultOpen(false);
    setSelectedQuiz(null);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Интерактивные викторины
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          Пройдите интерактивные викторины, чтобы закрепить знания по React и проверить свои навыки. 
        </Typography>

        <Grid container spacing={4}>
          {quizzes.map((quiz, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    position: 'relative',
                    borderRadius: '16px',
                    background: 'background.paper',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <QuizIcon fontSize="large" color="primary" />
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                    {quiz.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {quiz.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Сложность: {quiz.difficulty}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={selectedQuiz?.title === quiz.title ? quizProgress : 0} 
                    sx={{ mt: 2, mb: 2 }}
                  />
                  <Tooltip title="Начать викторину" arrow>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleStartQuiz(quiz)}
                      sx={{ mt: 'auto' }}
                    >
                      Начать
                    </Button>
                  </Tooltip>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {selectedQuiz && (
          <Dialog open={Boolean(selectedQuiz)} onClose={() => setSelectedQuiz(null)} fullWidth>
            <DialogTitle>{selectedQuiz.title}</DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6">
                  {selectedQuiz.questions[currentQuestionIndex].question}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={quizProgress} 
                  sx={{ mb: 2 }}
                />
                <List>
                  {selectedQuiz.questions[currentQuestionIndex].options.map((option, idx) => (
                    <ListItem
                      button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      sx={{ bgcolor: selectedOption === option ? 'action.selected' : 'transparent' }}
                    >
                      <ListItemText primary={option} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleOpenHint}
                    sx={{ mr: 2 }}
                  >
                    <HelpOutlineIcon sx={{ mr: 1 }} /> Подсказка
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                  >
                    Следующий вопрос
                  </Button>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedQuiz(null)}>Закрыть</Button>
            </DialogActions>
          </Dialog>
        )}

        <Dialog open={isHintOpen} onClose={handleCloseHint}>
          <DialogTitle>Подсказка</DialogTitle>
          <DialogContent>
            <Typography>{hint}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseHint}>Закрыть</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={isResultOpen} onClose={handleCloseResult}>
          <DialogTitle>Результаты викторины</DialogTitle>
          <DialogContent>
            <List>
              {quizResults.map((result, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    {result.correct ? (
                      <CheckCircleIcon sx={{ color: 'success.main' }} />
                    ) : (
                      <CancelIcon sx={{ color: 'error.main' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={result.question}
                    secondary={`Ваш ответ: ${result.userAnswer}. Правильный ответ: ${result.correctAnswer}`}
                  />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseResult} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Quizzes;