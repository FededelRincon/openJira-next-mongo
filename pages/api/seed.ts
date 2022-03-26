// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { Entry } from '../../models'

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({
            message: 'No tiene acceso a este servicio'
        })
    }
    
    await db.connect();
    //mientras la db esta conectada podemos hacer cualquier tipo de interaccion
    
    await Entry.deleteMany();   //borro lo q haya para q no haya duplicados
    await Entry.insertMany( seedData.entries ); //inserto la semilla  
    
    
    
    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente, El backend se conecto a la base de datos correctamente' })
}