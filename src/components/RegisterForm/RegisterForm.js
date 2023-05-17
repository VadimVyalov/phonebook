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
import { useRegistMutation } from 'redux/userAuth/authApi';
import {
  loginValidation,
  passwordValidation,
  emailValidation,
} from '../../services/validation';
import ButtonLink from 'components/ButtonLink/ButtonLink';

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
      reset({ password: '', email: '', name: '' });
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
        Введи реєстраційні дані
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
          // console.log(data);
          toast.promise(regist(data).unwrap(), {
            loading: 'Намагаюсь зареєструвати...',
            success: response => `З реєстрацією ${response?.user?.name}`,
            error: error => `${error?.data?._message}`,
          });
        })}
      >
        <Controller
          control={control}
          name="name"
          rules={loginValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="Логін"
              color="formInput"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              error={!!errors.name?.message}
              helperText={errors?.name?.message}
            />
          )}
        />
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
            width: '180px',
          }}
        >
          Зареєструватися
        </Button>
        <ButtonLink link="/login">
          <Typography variant="subtitle1" component="span">
            Маєш акаунт?{' '}
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: 'blue' }}
          >
            Увійти
          </Typography>
        </ButtonLink>
      </Box>
    </Paper>
  );
};
