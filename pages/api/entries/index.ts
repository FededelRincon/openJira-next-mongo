import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
    | { message: string }
    | IEntry[]
    | IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET': //para leer
            return getEntries ( res );

        case 'POST': //para crear
            return postEntry( req, res )

        default: 
            return res.status(400).json({ message: 'EndPoint no existe' });
    }


}

//Para leer de la base de datos
const getEntries = async ( res: NextApiResponse<Data> ) => {

    await db.connect();
    
    const entries = await Entry.find().sort({ createdAt: 'ascending' });

    await db.disconnect();

    res.status(200).json( entries );
}

//Para crear una entrada en la base de datos
const postEntry = async ( req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { description = '' } = req.body;
    
    const newEntry = new Entry ({
        description,
        createdAt: Date.now(),
        //status viene como default en 'pending'
    })

    try {
        await db.connect();
        await newEntry.save()
        await db.disconnect();

        return res.status(201).json( newEntry );

    } catch (error) {
        await db.disconnect();
        console.log(error)

        return res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor'})
    }
    
}