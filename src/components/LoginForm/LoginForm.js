import { useLoginMutation } from 'redux/auth/authApi';
import css from './LoginForm.module.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// import TextField from '@mui/material/TextField';
// import Slider from '@mui/material/Slider';
// import { Input } from '@mui/material';

export const LoginForm = () => {
  const [login] = useLoginMutation();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: 'bbc@mail.com', password: 'A123456a' },
  });
  // const { isDirty, isValid } = formState;
  const { isValid } = formState;
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ password: '', email: '' });
    }

    // console.log(formState.errors);

    Object.entries(formState.errors).map(([type, { message }]) =>
      console.log(type, '=>', message)
    );
  }, [formState, reset, isValid]);

  return (
    <form className={css.form} onSubmit={handleSubmit(login)}>
      <label className={css.label}>
        Email
        <input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: 'Mail не заповнено',
            pattern: { value: /^\S+@\S+$/i, message: 'Не вірний формат' },
          })}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Пароль не заповнено',
            max: 10,
            min: 7,
            maxLength: 20,
          })}
        />
      </label>

      <button type="submit">LogIn</button>
      {/* <TextField
        id="outlined-basic"
        label=" Пароль "
        variant="outlined"
        type="password"
        size="small"
        {...register('password', {
          required: 'Пароль не заповнено',
          max: 10,
          min: 7,
          maxLength: 20,
        })}
        className="h-16"
        // classes={{ input: 'h-5' }}

        InputProps={{ className: 'h-5 p-0' }}
        inputProps={{ className: 'p-0' }}

        //componentsProps={{ '.MuiInputBase-input': (className = 'h-5') }}
      />
      <TextField
        id="outlined-basic"
        label=" Телефон "
        variant="outlined"
        type="text"
        size="small"
        {...register('phone', {
          required: 'Телефон не заповнено',
          max: 10,
          min: 7,
          maxLength: 20,
        })}
        // className="h-16"
        InputProps={{ className: 'h-5 p-1' }}
        //  OutlinedInputProps={{ className: 'text-red-500 -top-3' }}
        inputProps={{ className: 'p-2' }}
        InputLabelProps={{ className: 'text-red-500 -top-1 m-1' }}
        //props
        //componentsProps={{ '.MuiInputBase-input': (className = 'h-5') }}
      /> */}
    </form>
  );
};
