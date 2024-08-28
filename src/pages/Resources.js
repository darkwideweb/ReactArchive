import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import { motion } from 'framer-motion';

const Resources = () => {
  const theme = useTheme();

  const resources = [
    // Русскоязычные ресурсы
    {
      title: 'Документация React на русском (RU)',
      description: 'Официальная документация React на русском языке.',
      url: 'https://ru.reactjs.org/docs/getting-started.html',
      icon: <CodeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
    },
    {
      title: 'YouTube канал Владилен Минин (RU)',
      description: 'Канал по веб-разработке на русском языке, с большим количеством материалов по React и другим технологиям.',
      url: 'https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw',
      icon: <YouTubeIcon fontSize="large" sx={{ color: theme.palette.error.main }} />,
    },
    {
      title: 'Блог о веб-разработке на Хабре (RU)',
      description: 'Статьи и блоги на тему веб-разработки на русском языке.',
      url: 'https://habr.com/ru/search/?q=веб-разработка',
      icon: <ArticleIcon fontSize="large" sx={{ color: theme.palette.warning.main }} />,
    },

    // Англоязычные ресурсы
    {
      title: 'Официальная документация React (ENG)',
      description: 'Изучите официальные гайды и примеры использования React напрямую от команды разработчиков.',
      url: 'https://reactjs.org/docs/getting-started.html',
      icon: <CodeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
    },
    {
      title: 'YouTube канал Traversy Media (ENG)',
      description: 'Хороший канал по веб-разработке с фокусом на современные технологии, включая React.',
      url: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
      icon: <YouTubeIcon fontSize="large" sx={{ color: theme.palette.error.main }} />,
    },
    {
      title: 'Статьи на Smashing Magazine (ENG)',
      description: 'Полезные статьи и ресурсы по веб-разработке.',
      url: 'https://www.smashingmagazine.com/',
      icon: <ArticleIcon fontSize="large" sx={{ color: theme.palette.warning.main }} />,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          Полезные ресурсы
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6, color: theme.palette.text.secondary }}>
          Ознакомьтесь с подборкой хороших ресурсов по React и веб-разработке, которые помогут в изучении и улучшении навыков.
        </Typography>

        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '16px',
                    background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1c1c1c, #2e2e2e)' : 'linear-gradient(135deg, #f7f9fc, #e3e8ee)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {resource.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color={theme.palette.text.secondary} paragraph sx={{ mb: 2 }}>
                    {resource.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 'auto',
                      background: theme.palette.primary.main,
                      '&:hover': {
                        background: theme.palette.primary.dark,
                      },
                      transition: 'background 0.3s ease-in-out',
                    }}
                  >
                    Перейти 
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Resources;
