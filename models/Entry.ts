import mongoose, { Model, Schema} from 'mongoose';
import { Entry } from '../interfaces';



export interface IEntry extends Entry {
    //si quisiera agregar algo q solo va a usar este modelo, puedo hacerlo desde aca
}

const entrySchema = new Schema({
    description: { type: String, required: true, },
    createdAt: { type: Number, },
    status: { 
        type: String, 
        enum: {
            values: ['pending' , 'in-progress' , 'finished'],
            message: '{VALUE} no es un estado permitido'
        }
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema) //osea crea el entrySchema con nombre Entry, si lo tenes creado usalo, sino crealo 

// para comprobar el modelo
// const entry = new EntryModel();
// entry.status = 'in-progress'

export default EntryModel;