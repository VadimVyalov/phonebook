import { Typography, Paper } from '@mui/material';

export default function Home() {
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
      <Typography variant="h4" component="h4">
        Task manager welcome page
      </Typography>
    </Paper>
  );
}
