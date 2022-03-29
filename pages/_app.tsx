import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';



import { lightTheme, darkTheme } from '../themes';



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SnackbarProvider maxSnack={3}>
            <EntriesProvider>
                <UIProvider>
                    <ThemeProvider theme={ darkTheme }>
                    {/* <ThemeProvider theme={ lightTheme }> */}
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </UIProvider>
            </EntriesProvider>
        </SnackbarProvider>

    )
}

export default MyApp
