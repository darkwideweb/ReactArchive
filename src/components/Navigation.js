import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Tooltip, Menu, MenuItem, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7, Home, School, Quiz, Book, Code as ReactIcon, Favorite as FavoriteIcon, GitHub, Email, Telegram } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Navigation = ({ toggleTheme, currentTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
    toast.info(
      `Тема изменена на ${currentTheme === 'dark' ? 'светлую' : 'тёмную'}`,
      { autoClose: 3000, position: 'top-right' }
    );
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: currentTheme === 'dark'
          ? 'linear-gradient(135deg, #0d47a1, #1976d2)'
          : 'linear-gradient(135deg, #42a5f5, #64b5f6)',
        boxShadow: currentTheme === 'dark'
          ? '0 8px 16px rgba(0, 0, 0, 0.8)'
          : '0 8px 16px rgba(0, 150, 255, 0.4)',
        transition: 'background 0.5s ease',
        borderRadius: '0 0 15px 15px',
      }}
    >
      <Toolbar
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ display: 'flex', justifyContent: 'space-between', padding: { xs: '8px 16px', sm: '10px 24px' } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ cursor: 'pointer' }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              background: currentTheme === 'dark'
                ? 'linear-gradient(45deg, #bbdefb, #2196f3)'
                : 'linear-gradient(45deg, #0d47a1, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite',
              '@keyframes gradientShift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
            }}
          >
            React Archive
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { to: "/", label: "Главная", icon: <Home /> },
            { to: "/lessons", label: "Уроки", icon: <School /> },
            { to: "/quiz", label: "Тест", icon: <Quiz /> },
            { to: "/docs", label: "Документация", icon: <Book /> },
            { to: "/code-editor", label: "Редактор кода", icon: <ReactIcon /> }, 
          ].map(({ to, label, icon }) => (
            <Tooltip key={to} title={label} arrow>
              <Button
                color="inherit"
                component={Link}
                to={to}
                startIcon={icon}
                sx={{
                  mx: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s',
                    backgroundColor: currentTheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                  },
                  transition: 'all 0.3s ease',
                  '&:active': {
                    transform: 'scale(0.9)',
                  },
                }}
              >
                {label}
              </Button>
            </Tooltip>
          ))}

          <Tooltip title="Переключить тему" arrow>
            <IconButton
              color="inherit"
              onClick={handleThemeToggle}
              component={motion.div}
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              sx={{
                '&:hover': {
                  color: currentTheme === 'dark' ? '#ffeb3b' : '#ff5722',
                },
              }}
            >
              {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Мои Контакты" arrow>
            <IconButton
              onClick={handleMenuOpen}
              sx={{ ml: 2, p: 0 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
              >
                <FavoriteIcon sx={{ fontSize: 32, color: currentTheme === 'dark' ? '#e91e63' : '#d81b60' }} />
              </motion.div>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: currentTheme === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
                boxShadow: currentTheme === 'dark'
                  ? '0px 10px 20px rgba(0, 0, 0, 0.7)'
                  : '0px 10px 20px rgba(0, 150, 255, 0.2)',
                borderRadius: '12px',
              },
            }}
          >
            <MenuItem disabled>
              Привет! Меня зовут Никита - я создатель этого учебника. Мои контакты:
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="https://t.me/darkwidewebs" target="_blank">
              <Telegram sx={{ mr: 1, color: currentTheme === 'dark' ? '#0088cc' : '#1976d2' }} />
              Telegram
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="mailto:nshtukaturov100@gmail.com">
              <Email sx={{ mr: 1, color: currentTheme === 'dark' ? '#dd2c00' : '#1976d2' }} />
              Email
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="https://github.com/darkwideweb" target="_blank">
              <GitHub sx={{ mr: 1, color: currentTheme === 'dark' ? '#ffffff' : '#1976d2' }} />
              GitHub
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
