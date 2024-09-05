'use client';
import React from 'react';
import styles from '../page.module.css'

function PersonaCard({ props }) {
    return (
        <div className={styles.personaCard}>
            <h2>{props.nombre} {props.apellido}</h2>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Edad:</strong> {props.edad}</p>
        </div>
    );
}

export default PersonaCard;