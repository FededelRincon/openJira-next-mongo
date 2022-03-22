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
            description: 'Quisque porttitor quam nisi, vel laoreet massa auctor in. Nam eget ipsum quis ante rhoncus blandit nec ut elit.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Vivamus dapibus pretium elit, quis facilisis lectus dictum ut. Sed imperdiet porta ex in convallis.',
            status: 'in-progress',
            createdAt: Date.now() - 1,
        },
        {
            _id: uuidv4(),
            description: 'Nam libero velit, rutrum non nisi at, efficitur vulputate augue. Sed neque tortor, aliquet facilisis nisi id, gravida.',
            status: 'finished',
            createdAt: Date.now() - 2,
        },
    ],
}


export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            { children }
        </EntriesContext.Provider>
    )
}