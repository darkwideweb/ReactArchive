import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Container, Typography, Grid, Paper, Button, Card, CardContent, Box, LinearProgress, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Info as InfoIcon, School as SchoolIcon, ArrowForward as ArrowForwardIcon, EmojiEvents as EmojiEventsIcon } from '@mui/icons-material';

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = '   Добро пожаловать в интерактивный учебник';
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const currentIndexRef = useRef(0);

  const sections = [
    { title: 'Галерея компонентов', description: 'Откройте для себя примеры использования различных React-компонентов с Material UI.', link: '/components' },
    { title: 'Интерактивные викторины', description: 'Проверьте свои знания, проходя увлекательные викторины по React.', link: '/quizzes' },
    { title: 'Полезные ресурсы', description: 'Доступ к актуальным и полезным ресурсам по React и веб-разработке.', link: '/resources' },
    { title: 'Проектные работы', description: 'Идея и реализация для первого проекта на React.', link: '/project-labs' },
    { title: 'Интерактивный IDE', description: 'Попробуйте написание и тестирование кода прямо в браузере.', link: '/code-editor' },
    { title: 'Креативные челленджи', description: 'Примите участие в креативных челленджах.', link: '/creative-challenges' },
  ];

  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setProgress(Math.min(parseInt(savedProgress, 10), 100));
    }

    const typeTitle = () => {
      if (currentIndexRef.current < fullTitle.length) {
        setTypedTitle((prev) => prev + fullTitle.charAt(currentIndexRef.current));
        currentIndexRef.current += 1;
      }
    };

    const typingInterval = setInterval(typeTitle, 50);
    return () => clearInterval(typingInterval);
  }, [fullTitle]);

  const handleSectionVisit = useCallback(() => {
    setProgress((prevProgress) => {
      const newProgress = Math.min(prevProgress + 10, 100);
      localStorage.setItem('progress', newProgress);
      return newProgress;
    });
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        backgroundColor: 'background.paper',
        padding: { xs: '20px', sm: '30px', md: '40px' },
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: 'spring', stiffness: 70 }}
        whileHover={{ scale: 1.05 }}
        style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}
      >
        <Typography
          variant={isSmDown ? 'h4' : 'h2'}
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            textShadow: '4px 4px 10px rgba(0,0,0,0.3)',
            mb: 3,
            fontFamily: "'Roboto Slab', serif",
            whiteSpace: 'pre-wrap',
            transition: 'color 0.5s, text-shadow 0.5s',
            background: 'linear-gradient(90deg, #42a5f5, #1976d2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
            '&:hover': {
              color: 'primary.main',
              textShadow: '5px 5px 15px rgba(0,0,0,0.4)',
            },
          }}
        >
          {typedTitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            fontFamily: "'Open Sans', sans-serif",
            transition: 'color 0.5s, transform 0.3s',
            '&:hover': {
              color: 'text.primary',
              transform: 'translateY(-5px)',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <EmojiEventsIcon
            sx={{
              verticalAlign: 'middle',
              mr: 1,
              fontSize: 'inherit',
              color: 'primary.main',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'rotate(20deg)',
                color: 'secondary.main',
              },
            }}
          />
          Исследуйте и учитесь в собственном темпе
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={10} md={8}>
          <Box>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 14,
                  borderRadius: 8,
                  backgroundColor: '#f5f5f5',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 8,
                    backgroundColor: 'primary.main',
                    backgroundImage: 'linear-gradient(90deg, #42a5f5, #64b5f6)',
                    boxShadow: `0 0 8px 0 rgba(66, 165, 245, 0.5)`,
                    transition: 'width 0.8s ease-in-out, background-color 0.5s',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      backgroundImage: 'linear-gradient(90deg, #ef5350, #e57373)',
                    },
                  },
                }}
              />
            </motion.div>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s, text-shadow 0.3s',
                  '&:hover': {
                    color: 'primary.main',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
                  },
                }}
              >
                Прогресс: {progress}%
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            elevation={12}
            sx={{
              padding: { xs: 2, sm: 3 },
              mb: 4,
              textAlign: 'center',
              background: 'background.paper',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              },
            }}
          >
            <InfoIcon sx={{ fontSize: 60, color: 'text.primary', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontFamily: "'Roboto Slab', serif" }}>
              О проекте
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              Этот проект представляет собой интерактивный учебник для изучения React. Здесь вы найдете уроки, викторины, задачи, челленджи и др., которые помогут вам укрепить знания в React и веб-разработке.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/docs"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 2,
                padding: '12px 24px',
                borderRadius: '50px',
                backgroundImage: 'linear-gradient(45deg, #42a5f5 30%, #64b5f6 90%)',
                boxShadow: '0 4px 10px rgba(66, 165, 245, 0.3)',
                transition: 'background-image 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundImage: 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)',
                  boxShadow: '0 6px 15px rgba(66, 165, 245, 0.5)',
                },
              }}
            >
              Посмотреть документацию
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            elevation={12}
            sx={{
              padding: { xs: 2, sm: 3 },
              mb: 4,
              textAlign: 'center',
              background: 'background.paper',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              },
            }}
          >
            <SchoolIcon sx={{ fontSize: 60, color: 'text.primary', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontFamily: "'Roboto Slab', serif" }}>
              Уроки
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              Я старался продумать каждый урок, добавляя к ним различные примеры и вопросы для самоконтроля. В первую очередь этот учебник я выстраивал под себя, но очень надеюсь, что он поможет и другим.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/lessons"
              endIcon={<ArrowForwardIcon />}
              onClick={handleSectionVisit}
              sx={{
                mt: 2,
                padding: '12px 24px',
                borderRadius: '50px',
                backgroundImage: 'linear-gradient(45deg, #42a5f5 30%, #64b5f6 90%)',
                boxShadow: '0 4px 10px rgba(66, 165, 245, 0.3)',
                transition: 'background-image 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundImage: 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)',
                  boxShadow: '0 6px 15px rgba(66, 165, 245, 0.5)',
                },
              }}
            >
              Начать уроки
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} lg={4} key={section.title}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              sx={{
                mb: 4,
                padding: 0,
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 30px 50px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: 'text.primary',
                    fontFamily: "'Roboto Slab', serif",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {section.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={section.link}
                  onClick={handleSectionVisit}
                  sx={{
                    mt: 2,
                    padding: '10px 20px',
                    borderRadius: '50px',
                    backgroundImage: 'linear-gradient(45deg, #42a5f5 30%, #64b5f6 90%)',
                    boxShadow: '0 4px 10px rgba(66, 165, 245, 0.3)',
                    transition: 'background-image 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      backgroundImage: 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)',
                      boxShadow: '0 6px 15px rgba(66, 165, 245, 0.5)',
                    },
                  }}
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

