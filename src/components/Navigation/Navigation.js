import {
  HomeRounded,
  ImportContactsRounded,
  PersonAddAlt1Rounded,
} from '@mui/icons-material';
import { Box, Tooltip, IconButton, Zoom } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <Tooltip
        title="Домашня сторінка"
        TransitionComponent={Zoom}
        arrow
        placement="bottom-start"
      >
        <IconButton
          sx={{
            border: '1px solid',
            borderColor: () =>
              location.pathname === '/' ? 'icon.border' : 'transparent',

            '&:hover': {
              border: '1px solid',
              borderColor: 'icon.border',
            },
          }}
          type="link"
          onClick={() => navigate('/')}
        >
          <HomeRounded color="icon.menu" />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Список контактів"
        TransitionComponent={Zoom}
        arrow
        placement="bottom-start"
      >
        <IconButton
          sx={{
            border: '1px solid',
            borderColor: () =>
              location.pathname === '/contacts' ? 'icon.border' : 'transparent',
            '&:hover': {
              border: '1px solid',
              borderColor: 'icon.border',
            },
          }}
          type="link"
          onClick={() => navigate('/contacts')}
        >
          <ImportContactsRounded />
        </IconButton>
      </Tooltip>
      {isLoggedIn && (
        <Tooltip
          title="Додати контакт"
          TransitionComponent={Zoom}
          arrow
          placement="bottom-start"
        >
          <IconButton
            sx={{
              border: '1px solid',
              borderColor: () =>
                location.pathname === '/addContacts'
                  ? 'icon.border'
                  : 'transparent',

              '&:hover': {
                border: '1px solid',
                borderColor: 'icon.border',
              },
            }}
            type="button"
            onClick={() => navigate('/addContacts')}
          >
            <PersonAddAlt1Rounded />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
