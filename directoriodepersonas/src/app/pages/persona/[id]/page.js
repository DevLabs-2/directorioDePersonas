'use client'
import Personas from "../../../../../Personas";
import styles from "../../../page.module.css"
import Link from "next/link";
import Image from "next/image";
import flecha from '../../../imgs/flecha.png'

export default function PersonaScreen({ params }) {
    const arraypersonas = Personas.Personas;
    console.log(arraypersonas)
    const persona = arraypersonas.find(p => p.id === params.id);
    
    return (
        <>
            <div className={styles.page}>
                <Link href={`/`} className={styles.backButton} style={{marginTop: '1rem', marginLeft: '-110rem'}}> <Image src={flecha} alt='FlechaIzq' className={styles.arrow} id={styles.arrowRotate}></Image> Atrás</Link>
            
                <div className={styles.personaContainer}>
                    <h1>{`${persona.nombre} ${persona.apellido}`}</h1>
                    <p>Email: {persona.email}</p>
                    <p>Edad: {persona.edad}</p>
                </div>
            </div>
        </>
        
    );
}