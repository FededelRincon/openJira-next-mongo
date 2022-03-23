import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { FC } from 'react';
import { Entry } from '../../interfaces'


interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props> = ({ entry }) => {



    return (
        <Card 
            sx={{ marginBottom: 1}}
            // eventos de drag
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whitespace: 'pre-line' }}>{ entry.description }</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2'}}>
                    <Typography variant='body2'>hace 30 min</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
