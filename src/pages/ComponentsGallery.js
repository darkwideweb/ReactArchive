import React from 'react';
import { 
  Container, Typography, Box, Grid, Paper, Divider, Button, Card, CardContent, Tooltip, 
  IconButton, Drawer, List, ListItem, ListItemText, Snackbar, Switch, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, AppBar, Toolbar, Avatar, Chip, CircularProgress, 
  Alert, Tabs, Tab, Badge, Accordion, AccordionSummary, AccordionDetails, Breadcrumbs, TextField, 
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AvatarIcon from '@mui/icons-material/AccountCircle';
import ChipIcon from '@mui/icons-material/Label';
import CircularProgressIcon from '@mui/icons-material/Autorenew';
import AlertIcon from '@mui/icons-material/Warning';
import TabsIcon from '@mui/icons-material/Tab';
import BadgeIcon from '@mui/icons-material/Notifications';
import BreadcrumbsIcon from '@mui/icons-material/Explore';
import TextFieldIcon from '@mui/icons-material/TextFields';
import DialogIcon from '@mui/icons-material/ChatBubble';
import { motion } from 'framer-motion';
import ButtonIcon from '@mui/icons-material/TouchApp';
import CardIcon from '@mui/icons-material/CreditCard';
import TypographyIcon from '@mui/icons-material/TextFields';
import SwitchIcon from '@mui/icons-material/SwitchRight';
import TableIcon from '@mui/icons-material/TableChart';
import SnackbarIcon from '@mui/icons-material/NotificationsActive';
import CloseIcon from '@mui/icons-material/Close';
import AppBarIcon from '@mui/icons-material/Apps';
import DrawerIcon from '@mui/icons-material/Storage';
import { useTheme } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const ComponentsGallery = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  const componentStyles = {
    paper: {
      p: 3,
      textAlign: 'center',
      borderRadius: '16px',
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
      transition: 'all 0.3s ease-in-out',
    },
    icon: {
      fontSize: 50,
      mb: 2,
    },
    button: {
      marginTop: 2,
    },
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Галерея компонентов
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
            Добро пожаловать в галерею компонентов Material-UI! Вы найдете примеры популярных компонентов для ваших React-проектов.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Button */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Кнопка для взаимодействия с пользователем" placement="top">
                  <ButtonIcon sx={{ ...componentStyles.icon, color: theme.palette.primary.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Button</Typography>
                <Typography variant="body2" color="textSecondary">
                  Используйте кнопки для выполнения действий, таких как отправка формы.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button variant="contained" color="primary" sx={componentStyles.button}>Пример кнопки</Button>
              </Paper>
            </motion.div>
          </Grid>

          {/* Card */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Карточка для структурированного контента" placement="top">
                  <CardIcon sx={{ ...componentStyles.icon, color: theme.palette.secondary.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Card</Typography>
                <Typography variant="body2" color="textSecondary">
                  Карточки помогают структурировать контент, как текст или изображения.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">Пример карточки</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Это пример карточки с текстом.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </motion.div>
          </Grid>

          {/* Typography */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Типографика для оформления текста" placement="top">
                  <TypographyIcon sx={{ ...componentStyles.icon, color: theme.palette.text.primary }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Typography</Typography>
                <Typography variant="body2" color="textSecondary">
                  Используйте Typography для стилизации текста в приложении.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6">Это заголовок H6</Typography>
                <Typography variant="body2" color="textSecondary">
                  Пример текста, оформленного с использованием Typography.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Switch */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Переключатель" placement="top">
                  <SwitchIcon sx={{ ...componentStyles.icon, color: theme.palette.success.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Switch</Typography>
                <Typography variant="body2" color="textSecondary">
                  Переключатели меняют состояние элементов между включено и выключено.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Switch defaultChecked />
              </Paper>
            </motion.div>
          </Grid>

          {/* Table */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Таблица для данных" placement="top">
                  <TableIcon sx={{ ...componentStyles.icon, color: theme.palette.info.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Table</Typography>
                <Typography variant="body2" color="textSecondary">
                  Таблицы отображают данные в строках и столбцах.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <TableContainer component={Paper}>
                  <Table aria-label="Пример таблицы">
                    <TableHead>
                      <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Значение</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Пример 1</TableCell>
                        <TableCell align="right">123</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Пример 2</TableCell>
                        <TableCell align="right">456</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </motion.div>
          </Grid>

          {/* Snackbar */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Snackbar для уведомлений" placement="top">
                  <SnackbarIcon sx={{ ...componentStyles.icon, color: theme.palette.error.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Snackbar</Typography>
                <Typography variant="body2" color="textSecondary">
                  Snackbar отображает кратковременные уведомления.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button variant="contained" color="error" onClick={handleSnackbarOpen} sx={componentStyles.button}>
                  Показать Snackbar
                </Button>
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={handleSnackbarClose}
                  message="Это пример Snackbar"
                  action={
                    <IconButton size="small" aria-label="закрыть" color="inherit" onClick={handleSnackbarClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  }
                />
              </Paper>
            </motion.div>
          </Grid>

          {/* AppBar */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="AppBar для навигации" placement="top">
                  <AppBarIcon sx={{ ...componentStyles.icon, color: theme.palette.primary.dark }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>AppBar</Typography>
                <Typography variant="body2" color="textSecondary">
                  AppBar используется для заголовков и навигации в приложениях.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" component="div">
                      Пример AppBar
                    </Typography>
                  </Toolbar>
                </AppBar>
              </Paper>
            </motion.div>
          </Grid>

          {/* Avatar */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Аватар пользователя" placement="top">
                  <AvatarIcon sx={{ ...componentStyles.icon, color: theme.palette.primary.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Avatar</Typography>
                <Typography variant="body2" color="textSecondary">
                  Аватары отображают изображения пользователей.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
              </Paper>
            </motion.div>
          </Grid>

          {/* Chip */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Метка или чип" placement="top">
                  <ChipIcon sx={{ ...componentStyles.icon, color: theme.palette.success.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Chip</Typography>
                <Typography variant="body2" color="textSecondary">
                  Чипы используются для отображения информации или действий.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Chip label="Пример чипа" color="primary" />
              </Paper>
            </motion.div>
          </Grid>

          {/* CircularProgress */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Круговой индикатор прогресса" placement="top">
                  <CircularProgressIcon sx={{ ...componentStyles.icon, color: theme.palette.info.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>CircularProgress</Typography>
                <Typography variant="body2" color="textSecondary">
                  Круговой индикатор отображает прогресс операции.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <CircularProgress color="secondary" />
              </Paper>
            </motion.div>
          </Grid>

          {/* Alert */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Оповещение" placement="top">
                  <AlertIcon sx={{ ...componentStyles.icon, color: theme.palette.error.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Alert</Typography>
                <Typography variant="body2" color="textSecondary">
                  Alerts отображают важные сообщения.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Alert severity="error">Это пример Alert с сообщением об ошибке.</Alert>
              </Paper>
            </motion.div>
          </Grid>

          {/* Tabs */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Вкладки для переключения содержимого" placement="top">
                  <TabsIcon sx={{ ...componentStyles.icon, color: theme.palette.primary.dark }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Tabs</Typography>
                <Typography variant="body2" color="textSecondary">
                  Вкладки позволяют переключаться между разделами контента.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Tabs value={0} aria-label="Пример вкладок">
                  <Tab label="Вкладка 1" />
                  <Tab label="Вкладка 2" />
                </Tabs>
              </Paper>
            </motion.div>
          </Grid>

          {/* Badge */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Значок с количеством уведомлений" placement="top">
                  <BadgeIcon sx={{ ...componentStyles.icon, color: theme.palette.warning.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Badge</Typography>
                <Typography variant="body2" color="textSecondary">
                  Badge используется для отображения количества уведомлений.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Badge badgeContent={4} color="primary">
                  <IconButton>
                    <BadgeIcon />
                  </IconButton>
                </Badge>
              </Paper>
            </motion.div>
          </Grid>

          {/* Accordion */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Аккордеон для скрытия и отображения содержимого" placement="top">
                  <ExpandMoreIcon sx={{ ...componentStyles.icon, color: theme.palette.text.primary }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Accordion</Typography>
                <Typography variant="body2" color="textSecondary">
                  Аккордеоны позволяют скрывать и отображать содержимое.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Пример аккордеона</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Это содержимое аккордеона, которое можно скрывать или отображать.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </motion.div>
          </Grid>

          {/* Drawer */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Drawer для боковой панели" placement="top">
                  <DrawerIcon sx={{ ...componentStyles.icon, color: theme.palette.warning.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Drawer</Typography>
                <Typography variant="body2" color="textSecondary">
                  Drawer предоставляет навигацию через боковую панель.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button variant="contained" color="warning" onClick={toggleDrawer(true)} sx={componentStyles.button}>
                  Открыть Drawer
                </Button>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                  <Box sx={{ width: 250 }} role="presentation">
                    <List>
                      {['Элемент 1', 'Элемент 2', 'Элемент 3'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </Paper>
            </motion.div>
          </Grid>

          {/* Rating */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
              <Tooltip title="Рейтинг" placement="top">
             <Rating sx={{ ...componentStyles.icon, color: theme.palette.warning.main }} />
             </Tooltip>
            <Typography variant="h5" gutterBottom>Rating</Typography>
            <Typography variant="body2" color="textSecondary">
              Rating позволяет пользователям оценивать контент, используя звезды.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Rating name="simple-controlled" value={4} />
            </Paper>
            </motion.div>
         </Grid>

          {/* Pagination */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Пагинация" placement="top">
                  <TypographyIcon sx={{ ...componentStyles.icon, color: theme.palette.info.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Pagination</Typography>
                <Typography variant="body2" color="textSecondary">
                  Пагинация используется для навигации между страницами.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Pagination count={10} variant="outlined" color="primary" />
              </Paper>
            </motion.div>
          </Grid>

          {/* LinearProgress */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Линейный индикатор прогресса" placement="top">
                  <LinearProgress sx={{ ...componentStyles.icon }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Linear Progress</Typography>
                <Typography variant="body2" color="textSecondary">
                  Линейный индикатор показывает прогресс выполнения задачи.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <LinearProgress variant="determinate" value={50} />
              </Paper>
            </motion.div>
          </Grid>

          {/* SpeedDial */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Speed Dial" placement="top">
                  <SpeedDialIcon sx={{ ...componentStyles.icon }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Speed Dial</Typography>
                <Typography variant="body2" color="textSecondary">
                  Speed Dial предоставляет быстрый доступ к действиям.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <SpeedDial
                  ariaLabel="SpeedDial example"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon />}
                >
                  <SpeedDialAction key="1" icon={<ButtonIcon />} tooltipTitle="Действие 1" />
                  <SpeedDialAction key="2" icon={<ButtonIcon />} tooltipTitle="Действие 2" />
                </SpeedDial>
              </Paper>
            </motion.div>
          </Grid>

          {/* Breadcrumbs */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Хлебные крошки для навигации" placement="top">
                  <BreadcrumbsIcon sx={{ ...componentStyles.icon, color: theme.palette.primary.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Breadcrumbs</Typography>
                <Typography variant="body2" color="textSecondary">
                  Хлебные крошки помогают пользователям ориентироваться в структуре сайта или приложения.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Breadcrumbs aria-label="breadcrumb">
                  <Button color="inherit">Главная</Button>
                  <Button color="inherit">Категория</Button>
                  <Typography color="textPrimary">Текущая страница</Typography>
                </Breadcrumbs>
              </Paper>
            </motion.div>
          </Grid>

          {/* TextField */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Текстовое поле для ввода" placement="top">
                  <TextFieldIcon sx={{ ...componentStyles.icon, color: theme.palette.text.primary }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>TextField</Typography>
                <Typography variant="body2" color="textSecondary">
                  Используйте текстовые поля для ввода текста от пользователя.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <TextField
                  label="Пример текстового поля"
                  variant="outlined"
                  fullWidth
                  placeholder="Введите текст"
                />
              </Paper>
            </motion.div>
          </Grid>

          {/* Dialog */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Диалоговое окно для взаимодействия" placement="top">
                  <DialogIcon sx={{ ...componentStyles.icon, color: theme.palette.info.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Dialog</Typography>
                <Typography variant="body2" color="textSecondary">
                  Диалоговые окна используются для получения подтверждений или отображения информации.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                  Открыть диалог
                </Button>
                <Dialog open={dialogOpen} onClose={handleDialogClose}>
                  <DialogTitle>Пример диалога</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Это пример диалогового окна с текстом и кнопками.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                      Закрыть
                    </Button>
                  </DialogActions>
                </Dialog>
              </Paper>
            </motion.div>
          </Grid>

          {/* Chip with Avatar */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Чип с аватаром" placement="top">
                  <ChipIcon sx={{ ...componentStyles.icon, color: theme.palette.success.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Chip with Avatar</Typography>
                <Typography variant="body2" color="textSecondary">
                  Чипы помогают представлять информацию в компактном виде, можно использовать их с аватарами.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Chip
                  avatar={<Avatar alt="User" src="/static/images/avatar/1.jpg" />}
                  label="Чип с аватаром"
                  variant="outlined"
                />
              </Paper>
            </motion.div>
          </Grid>

          {/* Tooltip */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper elevation={6} sx={componentStyles.paper}>
                <Tooltip title="Всплывающая подсказка" placement="top">
                  <TypographyIcon sx={{ ...componentStyles.icon, color: theme.palette.success.main }} />
                </Tooltip>
                <Typography variant="h5" gutterBottom>Tooltip</Typography>
                <Typography variant="body2" color="textSecondary">
                  Всплывающие подсказки предоставляют дополнительную информацию.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Tooltip title="Наведите на меня">
                  <Button variant="contained" color="primary">Кнопка с подсказкой</Button>
                </Tooltip>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ComponentsGallery;
