import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, IconButton, AppBar, Toolbar, Zoom } from '@mui/material';
import { Brightness4, Brightness7, LogoutRounded } from '@mui/icons-material';
import { useLogoutMutation } from 'redux/userAuth/authApi';
import { selectTheme, setDarkTheme } from 'redux/theme/themeSlice';

export const AppHead = () => {
  const { isLoggedIn } = useAuth();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <AppBar position="static" color="inherit" sx={{ p: 0 }}>
      <Toolbar sx={{ p: 0, m: 0 }}>
        <Tooltip
          title={
            theme.darkTheme ? 'Ввімкнути світлу тему' : 'Ввімкнути темну тему'
          }
          TransitionComponent={Zoom}
          arrow
          placement="bottom-start"
        >
          <IconButton
            sx={{
              border: '1px solid',
              borderColor: 'transparent',

              '&:hover': {
                border: '1px solid',
                borderColor: 'icon.border',
              },
            }}
            onClick={() => dispatch(setDarkTheme(!theme.darkTheme))}
          >
            {theme.darkTheme ? (
              <Brightness7 sx={{ color: 'icon.darkMode' }} />
            ) : (
              <Brightness4 sx={{ color: 'icon.darkMode' }} />
            )}
          </IconButton>
        </Tooltip>

        <Navigation />

        {isLoggedIn && (
          <Tooltip
            title="Вийти"
            TransitionComponent={Zoom}
            arrow
            placement="bottom-start"
          >
            <IconButton
              sx={{
                border: '1px solid',
                borderColor: 'transparent',

                '&:hover': {
                  border: '1px solid',
                  borderColor: 'icon.border',
                },
              }}
              type="button"
              variant="contained"
              onClick={() => logout()}
            >
              <LogoutRounded />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};
