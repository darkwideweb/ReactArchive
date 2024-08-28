import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const LessonCard = ({ title, description, topic, theory, codeExamples, questions }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const theme = useTheme();

    const handleDialogOpen = () => setDialogOpen(true);
    const handleDialogClose = () => setDialogOpen(false);

    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ margin: '20px auto', perspective: 1000 }}
        >
            <Card
                sx={{
                    maxWidth: 420,
                    margin: 'auto',
                    borderRadius: '20px',
                    boxShadow: `${theme.shadows[10]}, 0 10px 30px rgba(0, 0, 0, 0.2)`,
                    background: `linear-gradient(145deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 100%)`,
                    padding: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        zIndex: 0,
                        opacity: 0.08,
                    }}
                />
                <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: '700',
                            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '1.4rem', 
                            mb: 2,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mt: 1,
                            textAlign: 'justify',
                            padding: '12px',
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '12px',
                            boxShadow: theme.shadows[5],
                            lineHeight: 1.7,
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleDialogOpen}
                        sx={{
                            borderRadius: '30px',
                            padding: '14px 0',
                            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                            color: theme.palette.getContrastText(theme.palette.primary.main),
                            '&:hover': {
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                            },
                            transition: 'background-image 0.3s, box-shadow 0.3s',
                        }}
                    >
                        Подробнее
                    </Button>
                </Box>
            </Card>

            <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
                    {title}
                </DialogTitle>
                <DialogContent sx={{ padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                        Тема: {topic}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
                        {description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: theme.palette.text.secondary }}>
                        {theory}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                        Примеры кода:
                    </Typography>
                    {codeExamples.map((example, index) => (
                        <Typography
                            key={index}
                            variant="body2"
                            sx={{
                                mt: 2,
                                whiteSpace: 'pre-wrap',
                                backgroundColor: theme.palette.background.paper,
                                padding: '16px',
                                borderRadius: '12px',
                                boxShadow: theme.shadows[6],
                                lineHeight: 1.7,
                                fontFamily: 'Courier, monospace',
                                overflowX: 'auto',
                            }}
                        >
                            {example}
                        </Typography>
                    ))}
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                        Вопросы для самопроверки:
                    </Typography>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.primary }}>
                                    {`Q${index + 1}: ${question}`}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: theme.palette.background.default }}>
                    <Button
                        onClick={handleDialogClose}
                        sx={{
                            color: theme.palette.text.secondary,
                            '&:hover': {
                                color: theme.palette.primary.main,
                            },
                        }}
                    >
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </motion.div>
    );
};

export default LessonCard;
