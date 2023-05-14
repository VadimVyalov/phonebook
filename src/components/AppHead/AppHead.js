import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import css from './AppBar.module.css';

import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';

import { Tooltip, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Zoom from '@mui/material/Zoom';
import { setDarkTheme } from 'redux/filterSlice';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Button from '@mui/material/Button';
import { useLogoutMutation } from 'redux/auth/authApi';

export const AppHead = () => {
  const { isLoggedIn, user } = useAuth();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.auth.darkTheme);
  return (
    // <header className={css.header}>
    //   <Tooltip
    //     title={darkTheme ? 'dark mode OFF' : 'dark mode ON'}
    //     TransitionComponent={Zoom}
    //     arrow
    //     placement="right"
    //   >
    //     <IconButton onClick={() => dispatch(setDarkTheme(!darkTheme))}>
    //       {darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
    //     </IconButton>
    //   </Tooltip>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>

    <AppBar position="static" color="inherit" sx={{ p: 0 }}>
      <Toolbar sx={{ p: 0, m: 0 }}>
        <Tooltip
          title={darkTheme ? 'dark mode OFF' : 'dark mode ON'}
          TransitionComponent={Zoom}
          arrow
          placement="bottom-start"
        >
          <IconButton onClick={() => dispatch(setDarkTheme(!darkTheme))}>
            {darkTheme ? (
              <Brightness7Icon sx={{ color: 'icon.darkMode' }} />
            ) : (
              <Brightness4Icon sx={{ color: 'icon.darkMode' }} />
            )}
          </IconButton>
        </Tooltip>

        <Navigation />

        {isLoggedIn && (
          <Tooltip
            title="Logout"
            TransitionComponent={Zoom}
            arrow
            placement="bottom-start"
          >
            <IconButton
              type="button"
              variant="contained"
              onClick={() => logout()}
            >
              <LogoutRoundedIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};
