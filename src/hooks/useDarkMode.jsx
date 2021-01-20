import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = (drkmode) => {
    const [darkMode, useDarkMode] = useLocalStorage('darkmode', drkmode)

    useEffect(() => {
        const body = document.querySelector('body'); 
        if(darkMode){
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, useDarkMode]
}