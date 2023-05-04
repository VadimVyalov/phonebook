import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/auth/authApi';
import { logIn } from 'redux/auth/operations';
import { setToken } from 'redux/filterSlice';
import { selectTokenLogin } from 'redux/selectors';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  // const token = selectTokenLogin();
  // useEffect(() => {
  //   dispatch(setToken(token));
  // }, [dispatch, token]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );

    login({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    //console.log(data);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
