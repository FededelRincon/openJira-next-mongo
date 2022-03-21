import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // background: {
        //     default: grey[400],
        // },
        // primary: {
        //     main: '#4a148c'
        // },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red[400]
        },

    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation : 0, 
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
});