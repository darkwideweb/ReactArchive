import React, { useState } from 'react';
import { Container, Typography, Grid, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Box, Stack, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProjectCard from './ProjectCard';  
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion'; 

const labs = [
  {
    id: 1,
    name: 'Трекер Задач',
    description: 'Простой трекер задач с использованием React и Redux для эффективного управления задачами. Приложение поддерживает создание, редактирование и удаление задач с сохранением данных в локальном хранилище.',
    tasks: [
      { id: 1, name: 'Создать компоненты для отображения задач' },
      { id: 2, name: 'Настроить Redux для управления состоянием' },
      { id: 3, name: 'Реализовать функционал добавления задач' },
      { id: 4, name: 'Реализовать функционал редактирования задач' },
      { id: 5, name: 'Настроить локальное хранилище для сохранения данных' }
    ],
    techStack: ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'TailwindCSS']
  },
  {
    id: 2,
    name: 'Магазин на React',
    description: 'Онлайн-магазин с функциональностью корзины и оформления заказа. Приложение позволяет добавлять товары в корзину, просматривать их и оформлять заказ.',
    tasks: [
      { id: 1, name: 'Создать главную страницу магазина' },
      { id: 2, name: 'Реализовать компонент корзины' },
      { id: 3, name: 'Настроить функционал добавления товаров в корзину' },
      { id: 4, name: 'Реализовать оформление заказа' },
      { id: 5, name: 'Интегрировать TailwindCSS для стилизации' }
    ],
    techStack: ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'TailwindCSS']
  },
  {
    id: 3,
    name: 'Социальная сеть на React',
    description: 'Мини-социальная сеть с возможностью создавать посты, комментировать и взаимодействовать с другими пользователями. Приложение поддерживает систему лайков и уведомлений.',
    tasks: [
      { id: 1, name: 'Создать компонент для постов' },
      { id: 2, name: 'Реализовать функционал комментариев' },
      { id: 3, name: 'Настроить Redux для управления состоянием постов' },
      { id: 4, name: 'Добавить лайки к постам' },
      { id: 5, name: 'Реализовать систему уведомлений' }
    ],
    techStack: ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript']
  }
];

const technologyIcons = {
  React: <FaReact size={40} color="#61DBFB" />,
  HTML5: <FaHtml5 size={40} color="#E34F26" />,
  CSS3: <FaCss3Alt size={40} color="#1572B6" />,
  JavaScript: <FaJsSquare size={40} color="#F0DB4F" />,
  Redux: <SiRedux size={40} color="#764ABC" />,
  TailwindCSS: <SiTailwindcss size={40} color="#38B2AC" />,
};

const ProjectDetails = ({ lab, onClose }) => (
  <Dialog open={Boolean(lab)} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {lab?.name}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          color: 'background.paper',
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Описание:
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        {lab?.description}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Задачи:
      </Typography>
      <List sx={{ mb: 3 }}>
        {lab?.tasks.map(task => (
          <ListItem key={task.id} sx={{ display: 'list-item' }}>
            <ListItemText primary={task.name} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Стек:
      </Typography>
      <Stack direction="row" spacing={2}>
        {lab?.techStack.map((tech) => (
          <Box key={tech} sx={{ textAlign: 'center' }}>
            <motion.div whileHover={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.3 }}>
              {technologyIcons[tech]}
            </motion.div>
            <Typography variant="caption" sx={{ mt: 1 }}>
              {tech}
            </Typography>
          </Box>
        ))}
      </Stack>
    </DialogContent>
  </Dialog>
);

const ProjectLabs = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
  };

  const handleCloseDetails = () => {
    setSelectedLab(null);
  };

  return (
    <Container sx={{ mt: 4, backgroundColor: 'background.paper', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', mb: 4 }}>
        Проектные работы
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {labs.map((lab) => (
          <Grid item xs={12} sm={6} md={4} key={lab.id}>
            <ProjectCard project={lab} onClick={() => handleLabClick(lab)} />
          </Grid>
        ))}
      </Grid>

      <ProjectDetails lab={selectedLab} onClose={handleCloseDetails} />
    </Container>
  );
};

export default ProjectLabs;
