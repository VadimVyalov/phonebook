import { useAuth } from 'hooks/useAuth';

import Button from '@mui/material/Button';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import { Box, Tooltip, IconButton, Zoom } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //console.log('location :', location);
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <Tooltip
        title="Home page"
        TransitionComponent={Zoom}
        arrow
        placement="bottom-start"
      >
        <IconButton
          sx={{ color: 'icon.menu' }}
          type="link"
          variant={location.pathname === '/' ? 'contained' : 'outlined'}
          onClick={() => navigate('/')}
        >
          <HomeRoundedIcon color="icon.menu" />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Contacts page"
        TransitionComponent={Zoom}
        arrow
        placement="bottom-start"
      >
        <IconButton
          type="button"
          variant={location.pathname === '/contacts' ? 'contained' : 'outlined'}
          onClick={() => navigate('/contacts')}
        >
          <ImportContactsRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
