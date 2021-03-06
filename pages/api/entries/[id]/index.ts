import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = 
    | { message: string }
    | IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    // const { id } = req.query;   

    // if( !mongoose.isValidObjectId( id )) {
    //     return res.status(400).json({ message: 'El id no es valido ' + id })
    // }
    
    switch ( req.method ) {
        case 'GET':
            return getEntry( req, res );            
            
        case 'PUT':
            return updateEntry( req, res );            

        case 'DELETE': 
            return deleteEntry( req, res );
            
        default:
            return res.status(400).json({ message: 'El Metodo no existe' })
    }
}

const getEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;   

    await db.connect();
    const entryDBToShow = await Entry.findById( id );
    await db.disconnect();
    
    if ( !entryDBToShow ) {
        return res.status(400).json({message: 'No hay entrada con ese id ' + id });
    }
    
    return res.status(200).json( entryDBToShow );
}



const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;   

    await db.connect();
    
    const entryToUpdate = await Entry.findById( id );
    
    if ( !entryToUpdate ) {
        await db.disconnect();
        return res.status(400).json({message: 'No hay entrada con ese id ' + id });
    }
    
    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body

    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } )
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
        
        await db.disconnect()

        res.status(200).json( updatedEntry! );

    } catch (error: any) {
        console.log(error);
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message } )        
    }
}


const deleteEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    console.log('entre en el api/entries/id/index.ts')
    const { id } = req.query;   

    await db.connect();
    const entryDBTodelete = await Entry.findByIdAndDelete( id );
    await db.disconnect();

    console.log('estoy antes del if en  api/entries/id/index.ts')

    if ( !entryDBTodelete ) {
        return res.status(400).json({message: 'No hay entrada con ese id ' + id });
    }
    
    return res.status(200).json( entryDBTodelete );

}