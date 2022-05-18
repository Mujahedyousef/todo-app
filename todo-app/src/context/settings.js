import React from 'react';

export const settingsContext = React.createContext();

export default function Settings(props){
    const state = {
        displayCompleted: true,
        pageLimit: 3,
        sortField: 'oldest to newest'
    };
    return(
        <settingsContext.Provider value={state}>
            {props.children}
        </settingsContext.Provider>
    )
}
