import createTheme from '@mui/material/styles/createTheme';

const font = "'DM Serif Display', serif";

const theme = createTheme({
    typography: {
        fontFamily: font,
        h1: {
            fontSize: 36,
            color: '#4B4B4B',
            fontWeight: '400',
            lineHeight: '34.42px'
        },
        h2: {
            fontSize: '1.875rem',
            color: '#4B4B4B',
            fontWeight: '400',
            lineHeight: '1.875rem'
        },
        subtitle1: {
            color: '#737373',
            fontFamily: 'Roboto',
            fontSize: '0.71875rem',
            lineHeight: '0.8625rem'
        }
    }
})

export default theme;