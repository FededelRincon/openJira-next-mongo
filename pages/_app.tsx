import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes';







function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={ darkTheme }>
        {/* <ThemeProvider theme={ lightTheme }> */}
            <CssBaseline />
            <Component {...pageProps} />
          
        </ThemeProvider>
    )
}

export default MyApp
