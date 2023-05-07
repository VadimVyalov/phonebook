import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRegistMutation } from 'redux/auth/authApi';

import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [regist] = useRegistMutation();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: 'AAA', email: 'aaa@mail.com', password: 'A123456a' },
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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
    <form className={css.form} onSubmit={handleSubmit(regist)}>
      <label className={css.label}>
        Email
        <input
          type="text"
          placeholder="Name"
          {...register('name', {
            required: 'Name не заповнено',
            pattern: { value: /^\S+$/i, message: 'Не вірний формат' },
          })}
        />
      </label>

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
    </form>
  );
};
