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
import { loginValidation, passwordValidation } from '../../services/validation';
import { useLoginMutation } from 'redux/auth/authApi';

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
      <Typography variant="h4" component="h4">
        Войдите
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
        onSubmit={handleSubmit(data => {
          toast.promise(login(data).unwrap(), {
            loading: 'wait...',
            success: <b>success</b>,
            error: error => `${error?.data?._message}`,
          });
        })}

        // onSubmit={handleSubmit(data => {
        //   console.log(data);
        // })}
      >
        <Controller
          control={control}
          name="email"
          rules={loginValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              color="formInput"
              label="Логин"
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
    </Paper>
  );
};
// eslint-disable-next-line
{
  /* <Controller
          control={control}
          name="phone"
          rules={phoneValidation}
          defaultValue={''}
          render={({ field: { value, onChange } }) => (
            <InputMask
              mask="(099)-999-99-99"
              value={value}
              onChange={e => onChange(e)}
            >
              {Props => (
                <CustomTextField
                  {...Props}
                  label="Телефон"
                  type="tel"
                  fullWidth={true}
                  //   margin="normal"
                  error={!!errors.phone?.message}
                  helperText={errors?.phone?.message}
                />
              )}
            </InputMask>
          )}
        /> */
}
