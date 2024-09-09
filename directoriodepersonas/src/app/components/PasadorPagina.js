'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
        setInputValue(parseInt(inputValue) + parseInt(dir))
    }
    return (
        <div className={styles.pasador}>
            <Image src={flecha} alt='FlechaIzq' onClick={() => handleArrowPress(-1)} className={styles.arrow} id={styles.arrowRotate}></Image>
            <input type='text' onChange={handleInputChange} value={pag} className={styles.inputPag}></input>
            <Image src={flecha} alt='FlechaDer' onClick={() => handleArrowPress(1)} className={styles.arrow}></Image>
        </div>
    );
}

export default PasadorPag;