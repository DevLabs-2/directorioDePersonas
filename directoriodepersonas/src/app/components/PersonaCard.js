'use client';
import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';

function PersonaCard({ props }) {
    return (
        <div className={styles.personaCard}>
            <Link key={props.id} href={`../pages/persona/${props.id}`} passHref>
                    <h2>{props.nombre} {props.apellido}</h2>
                    <p><strong>Email:</strong> {props.email}</p>
                    <p><strong>Edad:</strong> {props.edad}</p>
            </Link>
        </div>
        
        
    );
}

export default PersonaCard;