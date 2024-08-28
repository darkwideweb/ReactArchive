import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { motion } from 'framer-motion';
import ExploreIcon from '@mui/icons-material/Explore';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
  },
}));

const ChallengeCard = ({ challenge }) => {
  const [openQuest, setOpenQuest] = useState(false);

  const handleOpenQuest = () => {
    setOpenQuest(true);
  };

  const handleCloseQuest = () => {
    setOpenQuest(false);
  };

  if (!challenge) {
    return (
      <StyledCard elevation={10}>
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Информация о челлендже недоступна
          </Typography>
        </CardContent>
      </StyledCard>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledCard elevation={10}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {challenge.title || 'Название недоступно'}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {challenge.description || 'Описание недоступно'}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Начало: {challenge.startDate || 'Дата начала недоступна'}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Дата завершения: {challenge.endDate || 'Дата завершения недоступна'}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Совет:
          </Typography>
          <Typography variant="body2">
            {challenge.tips || 'Советы недоступны'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExploreIcon />}
            onClick={handleOpenQuest}
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Начать 
          </Button>
        </CardContent>
      </StyledCard>

      <Dialog open={openQuest} onClose={handleCloseQuest}>
        <DialogTitle>Челлендж</DialogTitle>
        <DialogContent>
          {challenge.quest ? (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Задание: {challenge.quest.title || 'Заголовок задания недоступен'}
              </Typography>
              <Typography sx={{ mb: 2 }}>
                {challenge.quest.description || 'Описание задания недоступно'}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Информация о задании недоступна
            </Typography>
          )}
          <Button variant="contained" onClick={() => alert('Поздравляем! Вы завершили задание.')} color="success">
            Завершить 
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQuest} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
};

export default ChallengeCard;