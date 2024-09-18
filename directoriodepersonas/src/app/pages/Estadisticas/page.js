'use client'
import NavBar from "@/app/components/NavBar";
import Personas from "../../../../Personas";
import styles from "../../page.module.css"

export default function PersonaScreen({ params }) {
    const personaArray = Personas.Personas;
    const personasConEdades = personaArray.map(persona => ({
        ...persona,
        edad: Number(persona.edad),
      }));
    const edades = personasConEdades.map(persona => persona.edad);
    const edadMaxima = Math.max(...edades);
    console.log(edades)
    const edadMinima = Math.min(...edades);
  
    // Filtrar personas con la edad máxima
    const personasMayores = personasConEdades.filter(persona => persona.edad === edadMaxima);
    console.log(personasMayores)
    // Filtrar personas con la edad mínima
    const personasMenores = personasConEdades.filter(persona => persona.edad === edadMinima);
  
    // Filtrar personas mayores de 35 años
    const personasMayores35 = personasConEdades.filter(persona => persona.edad > 35);
  
    return (
        <div className={styles.page}>
            <NavBar></NavBar>
            <div className={styles.estadisticasContainer}>
            <h2 className={styles.estadisticasHeading}>Personas con más años</h2>
            <ul className={styles.estadisticasList}>
                {personasMayores.map(persona => (
                <li key={persona.id} className={styles.estadisticasListItem}>{`${persona.nombre} ${persona.apellido}, Edad: ${persona.edad}`}</li>
                ))}
            </ul>
        
            <h2 className={styles.estadisticasHeading}>Personas con menos años</h2>
            <ul className={styles.estadisticasList}>
                {personasMenores.map(persona => (
                <li key={persona.id} className={styles.estadisticasListItem}>{`${persona.nombre} ${persona.apellido}, Edad: ${persona.edad}`}</li>
                ))}
            </ul>
        
            <h2 className={styles.estadisticasHeading}>Personas mayores de 35 años</h2>
            <ul className={styles.estadisticasList}>
                {personasMayores35.map(persona => (
                <li key={persona.id} className={styles.estadisticasListItem}>{`${persona.nombre} ${persona.apellido}, Edad: ${persona.edad}`}</li>
                ))}
            </ul>
            </div>
        </div>
      );
    };
    
