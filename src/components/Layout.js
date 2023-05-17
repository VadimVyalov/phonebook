import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppHead } from './AppHead/AppHead';
import { Suspense } from 'react';
import { Paper, Box } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <Box
        // color="neutral"
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          backgroundColor: 'background.vieport',
          paddingTop: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400,
            minWidth: 280,
            //gap: 3,
            height: 'fit-content',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <AppHead />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <Toaster position="top-center" reverseOrder={false} />
        </Paper>
      </Box>
    </>
  );
};
