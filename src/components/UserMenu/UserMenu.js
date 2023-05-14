import { useAuth } from 'hooks/useAuth';
import { useLogoutMutation } from 'redux/auth/authApi';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [logout] = useLogoutMutation();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};
