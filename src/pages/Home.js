import { Typography, Paper } from '@mui/material';

export default function Home() {
  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        borderRadius: 0,
        mt: 1,
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h5" component="h2" align="center">
        Менеджер контактів
      </Typography>
      <Typography variant="subtitle1" component="p">
        От вийшла така апка з мінімалістичним дизайном, зате є світла і темна
        теми.
      </Typography>
      <Typography variant="subtitle1" component="p">
        Для оформлення використана бібліотека Material Ui, обробка даних форм
        виконана на 'react-hook-form'. Всі поля мають валідацію.
      </Typography>
      <Typography variant="subtitle1" component="p">
        Робота з сервером побудована на RTKQ
      </Typography>
      <Typography variant="subtitle1" component="p">
        Реєстрація і авторизація виконана за допомогою token аутентифікації з
        збереженням тимчасових ключів аутентифікації в LocalStorage з допомогою
        Persist
      </Typography>
      <Typography variant="subtitle1" component="p">
        Всі стани запитів оброблються і виводяться у вигляді спливаючих
        повідомлень за допомогою 'react-hot-toast'
      </Typography>
    </Paper>
  );
}
