import { useEffect, useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import toast from 'react-hot-toast';

import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { useRegistMutation } from 'redux/auth/authApi';
import { loginValidation, passwordValidation } from '../../services/validation';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const [regist] = useRegistMutation();

  const { control, handleSubmit, reset, formState } = useForm();
  const { errors } = useFormState({
    control,
  });
  // const { isDirty, isValid } = formState;
  const { isValid } = formState;
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ password: '', email: '', login: '' });
    }
  }, [formState, reset, isValid]);

  return (
    <>
      <Typography variant="h4" component="h4">
        Зареєструйся
      </Typography>

      <Typography variant="subtitle1" gutterBottom component="p">
        Чтобы получить доступ
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
        onSubmit={handleSubmit(() => {
          toast.promise(regist().unwrap(), {
            loading: 'wait...',
            success: <b>success</b>,
            error: error => `${error?.data?._message}`,
          });
        })}
      >
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="Логин"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={loginValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="Пошта"
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
          }}
        >
          Войти
        </Button>
      </Box>

      <Typography variant="subtitle1" component="span">
        Нету аккаунта?{' '}
      </Typography>
      <Typography variant="subtitle1" component="span" sx={{ color: 'blue' }}>
        Зарегистрируйтесь
      </Typography>
    </>
  );
};
