import { ChangeEvent, useState, useMemo } from 'react';
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";




const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

export const EntryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending')
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo( () => (inputValue.length <= 0 && touched), [inputValue, touched] )


    const onInputValueChanged = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputValue( event.target.value);
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setStatus( event.target.value as any )
        setStatus( event.target.value as EntryStatus )
    }

    const onSave = () => {
        console.log({ inputValue, status });
    }


    return (
        <Layout title="... ... ...">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${ inputValue }`}
                            subheader={`Creada hace: ... minutos `}
                        />
                            <CardContent>
                                <TextField 
                                    sx={{ marginTop: 2, marginBottom: 1}}
                                    fullWidth
                                    // placeholder="Nueva entrada"
                                    autoFocus
                                    multiline
                                    label="Nueva entrada"
                                    value={ inputValue }
                                    onBlur={ () => setTouched( true )}
                                    onChange={ onInputValueChanged }
                                    helperText={ isNotValid && 'Ingrese un valor' }
                                    error={ isNotValid }
                                />

                                {/* RADIO */}
                                <FormControl>
                                    <FormLabel>Estado:</FormLabel>
                                    <RadioGroup
                                        row
                                        value={ status }
                                        onChange={ onStatusChanged }
                                    >
                                        {
                                            validStatus.map( option => (
                                                <FormControlLabel 
                                                    key={ option }
                                                    value={ option }
                                                    control={ <Radio /> }
                                                    label={ capitalize(option) }
                                                />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>

                            </CardContent>
                            
                            <CardActions>
                                <Button
                                    startIcon={ <SaveOutlinedIcon /> }
                                    variant="contained"
                                    fullWidth
                                    onClick={ onSave }
                                    disabled={ inputValue.length <= 0 }
                                >
                                    Save
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton sx={{
                position:'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'error.dark'
            }}>
                <DeleteOutlineOutlinedIcon />
            </IconButton>
            

        </Layout>
    )
}

export default EntryPage;