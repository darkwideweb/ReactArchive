import React, { useState, useMemo } from 'react';
import { Grid, Paper, Typography, TextField, Divider, IconButton, Box, useTheme, Tooltip, Card, CardContent, CardActionArea, ListItemIcon } from '@mui/material';
import { Link as LinkIcon, OpenInNew, Code, Extension, School, Api, DesignServices, Web, VideoLibrary, MenuBook, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const categories = {
  'Основы': [
    { title: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html', icon: <School />, description: 'Официальная документация по React.' },
    { title: 'Material-UI Documentation', link: 'https://mui.com/getting-started/usage/', icon: <Code />, description: 'Руководство по использованию Material-UI.' },
    { title: 'JavaScript Guide', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', icon: <Code />, description: 'Основы языка JavaScript от MDN.' },
    { title: 'HTML Guide', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <Code />, description: 'Документация по HTML от MDN.' },
    { title: 'CSS Guide', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <Code />, description: 'Руководство по CSS от MDN.' },
    { title: 'JavaScript.ru', link: 'https://learn.javascript.ru/', icon: <School />, description: 'Русскоязычный учебник по JavaScript.' },
  ],
  'Расширения': [
    { title: 'MDN Web Docs', link: 'https://developer.mozilla.org/', icon: <Extension />, description: 'Всеобъемлющая документация по веб-технологиям.' },
    { title: 'React Router Documentation', link: 'https://reactrouter.com/', icon: <Web />, description: 'Документация по React Router для маршрутизации.' },
    { title: 'Redux Documentation', link: 'https://redux.js.org/', icon: <Code />, description: 'Официальная документация по Redux.' },
    { title: 'Next.js Documentation', link: 'https://nextjs.org/docs', icon: <Web />, description: 'Документация по фреймворку Next.js.' },
    { title: 'Технологии Веб-разработки', link: 'https://web.dev/', icon: <Web />, description: 'Сборник статей и гайдов по современным технологиям веб-разработки.' },
  ],
  'Инструменты и ресурсы': [
    { title: 'Postman', link: 'https://www.postman.com/', icon: <Api />, description: 'Инструмент для тестирования API.' },
    { title: 'Figma', link: 'https://www.figma.com/', icon: <DesignServices />, description: 'Платформа для дизайна интерфейсов.' },
    { title: 'Stack Overflow', link: 'https://stackoverflow.com/', icon: <School />, description: 'Крупнейшее сообщество разработчиков.' },
    { title: 'GitHub', link: 'https://github.com/', icon: <GitHub />, description: 'Платформа для размещения и управления проектами.' },
    { title: 'Visual Studio Code', link: 'https://code.visualstudio.com/', icon: <Code />, description: 'Популярный редактор кода.' },
    { title: 'CodePen', link: 'https://codepen.io/', icon: <Web />, description: 'Онлайн редактор кода для веб-разработчиков.' },
  ],
  'Обучающие курсы': [
    { title: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/', icon: <School />, description: 'Бесплатные курсы по программированию.' },
    { title: 'Codecademy', link: 'https://www.codecademy.com/', icon: <School />, description: 'Интерактивное обучение кодированию.' },
    { title: 'Udemy', link: 'https://www.udemy.com/', icon: <School />, description: 'Курсы по разработке от профессионалов.' },
    { title: 'Coursera', link: 'https://www.coursera.org/', icon: <MenuBook />, description: 'Курсы от ведущих университетов.' },
    { title: 'Frontend Masters', link: 'https://frontendmasters.com/', icon: <School />, description: 'Курсы для опытных frontend разработчиков.' },
    { title: 'YouTube Каналы по программированию', link: 'https://www.youtube.com/results?search_query=программирование', icon: <VideoLibrary />, description: 'Популярные каналы на YouTube по программированию.' },
  ],
  'Книги': [
    { title: 'Руководство для начинающих по HTML и CSS', link: '../books/Руководство для начинающих по HTML и CSS.pdf', icon: <MenuBook />, description: 'Введение в HTML и CSS для начинающих.' },
    { title: 'JavaScript с нуля', link: '../books/JavaScript с нуля.pdf', icon: <MenuBook />, description: 'Основы JavaScript для начинающих.' },
    { title: 'Web на практике', link: '../books/Web на практике.pdf', icon: <MenuBook />, description: 'Практическое руководство по веб-разработке.' },
  ]
};

const Documentation = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const filteredDocs = useMemo(() => Object.entries(categories).reduce((acc, [category, docs]) => {
    const filtered = docs.filter(doc => doc.title.toLowerCase().includes(search.toLowerCase()));
    if (filtered.length) acc[category] = filtered;
    return acc;
  }, {}), [search]);

  return (
    <Paper
      elevation={8}
      sx={{
        padding: 4,
        margin: '20px auto',
        maxWidth: 1200,
        backgroundColor: theme.palette.background.default,
        borderRadius: '16px',
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: '700',
          mb: 4,
          color: theme.palette.primary.main,
        }}
      >
        Полезные ресурсы для Frontend разработки
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 5,
          borderRadius: 3,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.dark,
            },
          },
        }}
      />
      {Object.keys(filteredDocs).length > 0 ? (
        Object.entries(filteredDocs).map(([category, docs]) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                color: theme.palette.primary.main,
              }}
            >
              {category}
            </Typography>
            <Grid container spacing={2}>
              {docs.map((doc, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      borderRadius: '12px',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                      transition: 'box-shadow 0.3s',
                      '&:hover': {
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                      },
                      backgroundColor: theme.palette.background.paper,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CardActionArea
                      component="a"
                      href={doc.link}
                      target="_blank"
                      sx={{ p: 2, flexGrow: 1, display: 'flex', alignItems: 'center' }}
                    >
                      <Tooltip title={doc.description}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <ListItemIcon sx={{ minWidth: '40px', color: theme.palette.primary.main }}>
                            {doc.icon || <LinkIcon />}
                          </ListItemIcon>
                          <CardContent sx={{ p: 0, flexGrow: 1 }}>
                            <Typography variant="h6" component="div" sx={{ fontSize: '1rem', color: theme.palette.text.primary }}>
                              {doc.title}
                            </Typography>
                          </CardContent>
                          <IconButton edge="end" aria-label="open" sx={{ color: theme.palette.text.secondary }}>
                            <OpenInNew />
                          </IconButton>
                        </Box>
                      </Tooltip>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ my: 3 }} />
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          Нет результатов для "{search}"
        </Typography>
      )}
    </Paper>
  );
};

export default Documentation;