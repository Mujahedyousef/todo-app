import React from 'react';
import { useState,useEffect } from 'react';
export const SettingContext = React.createContext();

export default function StateProvider(props) {
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [showComplete, setShowComplete] = useState(true)
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
        setItemPerPages,
        showComplete,
        setShowComplete

    }
    useEffect(() => {
        const infoItem = JSON.parse(localStorage.getItem('list'));
        if (infoItem) {
         setList(infoItem);
        }
    },[]);
    
    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider>
    )
}