import {
  IconButton,
  ListItem,
  ListItemText,
  CircularProgress,
  Tooltip,
  Zoom,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number, onDelete, isLoading }) => {
  return (
    <ListItem
      sx={{
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        pr: 5,
        pt: '2px',
        pb: '2px',
        '.MuiListItemSecondaryAction-root': { right: 4 },
      }}
      disablePadding={true}
      divider={true}
      secondaryAction={
        <Tooltip
          title="Видалити контакт"
          TransitionComponent={Zoom}
          arrow
          placement="top-end"
        >
          <IconButton
            sx={{
              border: '1px solid transparent',
              '&:hover': {
                border: '1px solid#ff0000',
              },
            }}
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(id)}
          >
            <DeleteIcon />
            {isLoading && (
              <CircularProgress
                size={38}
                sx={{
                  color: '#ff0000',
                  position: 'absolute',
                  zIndex: 1,
                }}
              />
            )}
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemText
        sx={{
          overflow: 'hidden',
          '	.MuiListItemText-primary': {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },
        }}
        primary={name}
      />
      <ListItemText
        sx={{
          width: '130px',
          whiteSpace: 'nowrap',
          flexGrow: 0,
          flexShrink: 0,
          '.MuiTypography-root': { letterSpacing: 1 },
        }}
        primary={number}
      />
    </ListItem>
  );
};
