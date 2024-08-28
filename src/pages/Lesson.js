import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, CircularProgress, Paper, Snackbar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LessonCard from '../components/LessonCard';
import lessonsData from '../data/lessonsData';

const Lessons = () => {
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLessons(lessonsData);
      setLoading(false);
      setShowSnackbar(true); 
    }, 1000);
  }, []);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: 2,
            mb: 4,
          }}
        >
          Доступные уроки по React
        </Typography>
      </motion.div>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress size={80} thickness={5} sx={{ color: 'primary.main' }} />
        </Box>
      ) : (
        <Grid container spacing={6}>
          {lessons.map((lesson, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
  
              <Paper
                elevation={8}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                }}
              >
                <LessonCard {...lesson} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Уроки будут обновляться и добавляться!"
        action={
          <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
            Закрыть
          </Button>
        }
      />
    </Container>
  );
};

export default Lessons;
