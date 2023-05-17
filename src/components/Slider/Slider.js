import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';

import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoTheme, setDarkTheme } from '../../redux/filter/filterSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomizedSlider() {
  const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useSelector(state => state.auth.darkTheme);
  const themeMode = useSelector(state => state.auth.autoTheme);
  console.log(theme);
  const dispatch = useDispatch();

  const [tumb, setTumb] = useState(1);

  useEffect(() => {
    const darkMode = tumb === 0 ? false : tumb === 1 ? systemDarkMode : true;
    dispatch(setDarkTheme(darkMode));
  }, [dispatch, tumb, systemDarkMode]);

  const autoTumb = props => {
    const { children, ...other } = props;

    return (
      <SliderThumb {...other}>
        {children}
        <Brightness6Icon />
      </SliderThumb>
    );
  };
  const lightTumb = props => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <Brightness7Icon />
      </SliderThumb>
    );
  };
  const darkTumb = props => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <Brightness4Icon />
      </SliderThumb>
    );
  };

  return (
    <Box sx={{ width: 50, height: 15, padding: '5px ' }}>
      <Slider
        sx={{
          height: '100%',
          padding: 0,
          '& .MuiSlider-thumb': {
            left:
              tumb === 0
                ? '10% !important'
                : tumb === 1
                ? '50% !important'
                : '90% !important',
            transitionDuration: '500ms',
            color: 'neutral.icon',
            // backgroundColor: blue[200],
            backgroundColor: 'neutral.main',
            width: 25,
            height: 25,
            boxShadow: 'none',

            '&:hover': {
              boxShadow: '0 0 0 4px rgba(58, 133, 137, 0.16)',
            },
            '&::after': { width: 30, height: 30 },
            '&.Mui-focusVisible': { boxShadow: 'none' },
          },

          '& .MuiSlider-track': {
            transitionDuration: '500ms',
            border: 0,
            height: '100%',
          },
        }}
        slots={{
          thumb: tumb === 0 ? lightTumb : tumb === 1 ? autoTumb : darkTumb,
        }}
        onChange={(e, v) => {
          //   console.log(v);
          setTumb(v);
        }}
        defaultValue={1}
        step={1}
        min={0}
        max={2}
        track="inverted"
      />
    </Box>
  );
}
