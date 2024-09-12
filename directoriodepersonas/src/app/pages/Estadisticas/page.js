'use client'
import Personas from "../../../../../Personas";

export default function PersonaScreen({ params }) {
    
    
    return (
        <div>
            <Link href={`/`} className={styles.backButton} style={{marginTop: '1rem', marginLeft: '1rem'}}> <Image src={flecha} alt='FlechaIzq' className={styles.arrow} id={styles.arrowRotate}></Image> Atrás</Link>
           
            <div className={styles.personaContainer}>
                <h1>{`${persona.nombre} ${persona.apellido}`}</h1>
                <p>Email: {persona.email}</p>
                <p>Edad: {persona.edad}</p>
            </div>
        </div>
    );
}