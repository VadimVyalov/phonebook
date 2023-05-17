import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function ButtonLink({ link, children }) {
  const navigate = useNavigate();
  return (
    <Link
      component="button"
      variant="body2"
      underline="none"
      color="inherit"
      onClick={() => navigate(link)}
    >
      {children}
    </Link>
  );
}
