import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

import { lightTheme, darkTheme } from '../themes';



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UIProvider>
                <ThemeProvider theme={ darkTheme }>
                {/* <ThemeProvider theme={ lightTheme }> */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UIProvider>

        </EntriesProvider>
    )
}

export default MyApp
