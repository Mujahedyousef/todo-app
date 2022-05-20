import React from 'react';
import { useState } from 'react';
export const SettingContext = React.createContext();

export default function StateProvider(props) {
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPages, setItemPerPages] = useState(3);
    const state = {
        list,
        incomplete,
        currentPage,
        itemsPerPages,
        setList,
        setIncomplete,
        setCurrentPage,
        setItemPerPages
    
    }
    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider>
    )
}