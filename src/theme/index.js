import createTheme from '@mui/material/styles/createTheme';

const font = "'DM Serif Display', serif";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4b4b4b'
        },
        secondary: {
            main: '#FAF4EF'
        }
    },
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
        h5: {
            fontSize: '1.625rem',
            lineHeight: '1.625rem',
            color: '#4B4B4B',
            fontWeight: '400',
        },
        subtitle1: {
            color: '#737373',
            fontFamily: 'Roboto',
            fontSize: '0.71875rem',
            lineHeight: '0.8625rem'
        },
        subtitle2: {
            fontSize: '1.25rem',
            lineHeight: '1.25rem',
            color: '#737373',
            fontWeight: '400',
        },
        body1: {
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: '500'
        },
        button: {
            fontSize: 20,
            fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
        }
    }
})

export default theme;