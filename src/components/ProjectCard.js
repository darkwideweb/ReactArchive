import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      elevation={10}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        color: 'text.primary',
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {project.shortDescription} 
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onClick(project)}
        sx={{
          padding: '12px 24px',
          borderRadius: '0 0 15px 15px',
          textTransform: 'none',
        }}
      >
        Подробнее
      </Button>
    </Card>
  </motion.div>
);

export default ProjectCard;
