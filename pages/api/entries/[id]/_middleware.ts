import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';



export function middleware ( req: NextRequest, ev:NextFetchEvent) {

    // if(req.page.name === '/api/entries') return NextResponse.next();

    const id = req.page.params?.id || '' ;   

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$'); //al no podes usar los modelos de mongoose, este es el equivalente a isValidObjectId

    if( !checkMongoIDRegExp.test( id )) {
        
        // return res.status(400).json({ message: 'El id no es valido ' + id }) //esto no funciona en los middlewares de next...
        return new Response( JSON.stringify({ message: 'El id no es valido ' + id }), {
            status: 400,
            headers:{
                'Content-Type':'application/json'
            }
        })
    }




    return NextResponse.next();

}