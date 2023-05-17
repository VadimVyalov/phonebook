import { useEffect, useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import toast from 'react-hot-toast';

import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Button,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { emailValidation, passwordValidation } from '../../services/validation';
import { useLoginMutation } from 'redux/userAuth/authApi';
import ButtonLink from 'components/ButtonLink/ButtonLink';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const [login] = useLoginMutation();
  const { control, handleSubmit, formState, reset } = useForm();
  const { errors } = useFormState({
    control,
  });

  const { isValid } = formState;
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ password: '', email: '' });
    }
  }, [formState, reset, isValid]);

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
      <Typography variant="h6" component="h2">
        Щоб отримати доступ
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="p">
        Введіть пошту і пароль
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
        }}
        component="form"
        onSubmit={handleSubmit(data => {
          toast.promise(login(data).unwrap(), {
            loading: 'Намагаюсь увійти...',
            success: response => `З поверненням ${response?.user?.name}`,
            error: error => `Щось пішло не так ${error?.data?._message}`,
          });
        })}

        // onSubmit={handleSubmit(data => {
        //   console.log(data);
        // })}
      >
        <Controller
          control={control}
          name="email"
          rules={emailValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="Пошта"
              color="formInput"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              error={!!errors.email?.message}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="Пароль"
              color="formInput"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
            width: '100px',
          }}
        >
          Увійти
        </Button>
        <ButtonLink link="/register">
          <Typography variant="subtitle1" component="span">
            Нема акаунту?{' '}
          </Typography>

          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: 'blue' }}
          >
            Зареєструйся.
          </Typography>
        </ButtonLink>
      </Box>
    </Paper>
  );
};
