import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Quisque porttitor quam nisi, vel laoreet massa auctor in. Nam eget ipsum quis ante rhoncus blandit nec ut elit.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'In-Progress: Vivamus dapibus pretium elit, quis facilisis lectus dictum ut. Sed imperdiet porta ex in convallis.',
            status: 'in-progress',
            createdAt: Date.now() - 1,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Nam libero velit, rutrum non nisi at, efficitur vulputate augue. Sed neque tortor, aliquet facilisis nisi id, gravida.',
            status: 'finished',
            createdAt: Date.now() - 2,
        },
    ],
}


export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );


    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({
            type: '[Entry] - Add-Entry', 
            payload: newEntry,
        })
    }



    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
}