'use client';
import { useEffect, useState } from "react";
import Personas from "../../../Personas";
import PersonaCard from "./PersonaCard";
import styles from "../page.module.css"
function ListaPersonas ({pag, navigation}) {
    const pagina = pag;
    const arrayPersonas = Personas;
    const PERS_POR_PAG = 8;
    const getPersonas = () => {
        let devolver = [];
        let i = PERS_POR_PAG;
        while(i > 0){
            let index = ((pagina * PERS_POR_PAG)- i)
            if(arrayPersonas.Personas.length > index){
                devolver.push(arrayPersonas.Personas[index])
            }
            i--;
        }
        return devolver;
    }
    const [displayPersonas, setDisplayPersonas] = useState([]);
    useEffect(() => {
        setDisplayPersonas(getPersonas());
        
    }, []);
    const lista = displayPersonas.map(person => <PersonaCard props={person}></PersonaCard>);
    return(
        <div className={styles.listaPersonas}>
            <ul className={styles.ulgrid}>{lista}</ul>
        </div>
    )
}
export default ListaPersonas;