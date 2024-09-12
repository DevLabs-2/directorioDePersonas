'use client';
import { useEffect, useState } from "react";
import Personas from "../../../Personas";
import PersonaCard from "./PersonaCard";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import flecha from "../imgs/flecha.png"
function ListaPersonas ({pag, navigation}) {
    const pagina = pag;
    const arrayPersonas = Personas;
    const PERS_POR_PAG = 20;
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
    }, [pagina]);
    const lista = displayPersonas.map(person => <PersonaCard key={person.id} props={person}></PersonaCard>);
    return(
        <div className={styles.listaPersonas}>
            <ul className={styles.ulgrid}>{lista}</ul>
            {lista.length === 0 && 
            <>
                <h2 style={{marginLeft:"6%", marginTop:"30px"}}>Ups! Parece que no hay más personas</h2>
            </>
            }
        </div>
    )
}
export default ListaPersonas;