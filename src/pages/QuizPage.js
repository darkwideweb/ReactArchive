import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';

const QuizPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
        minHeight: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.light',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            transition: 'color 0.4s ease',
            '&:hover': {
              color: 'primary.main',
              textShadow: '0 0 20px rgba(255, 255, 255, 1)',
            },
          }}
        >
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: '100%',
            maxWidth: 800,
            padding: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)',
            },
          }}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <Quiz />
        </Box>
      </motion.div>
    </Container>
  );
};

export default QuizPage;
