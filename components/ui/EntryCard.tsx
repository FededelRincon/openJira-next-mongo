import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { DragEvent, FC, useContext } from 'react';

import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces'


interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext)
    const router = useRouter();

    const onDragStart = ( event:DragEvent ) => {
        event.dataTransfer.setData('text', entry._id);

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    const onClick = () => {
        router.push(`/entries/${ entry._id }`)
    }

    return (
        <Card 
            onClick={ onClick }
            sx={{ marginBottom: 1}}
            // eventos de drag
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
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
