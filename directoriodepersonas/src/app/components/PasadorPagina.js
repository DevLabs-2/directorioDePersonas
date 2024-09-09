'use client';
import React, { useEffect, useState } from 'react';
import styles from '../page.module.css'
import flecha from '../imgs/flecha.png'
function PasadorPag({ pag, setPag }) {
    const [inputValue, setInputValue] = useState(pag);
    useEffect(() => {
        setPag(inputValue);
    },[inputValue])
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    const handleArrowPress = (dir) => {
        setInputValue(inputValue + dir)
    }
    return (
        <div className={styles.pasador}>
            <img src={flecha} onClick={() => handleArrowPress(-1)} className={styles.arrow}></img>
            <input type='text' onChange={handleInputChange}  value={inputValue}></input>
            <img src={flecha} onClick={() => handleArrowPress(1)} className={styles.arrow}></img>
        </div>
    );
}

export default PasadorPag;