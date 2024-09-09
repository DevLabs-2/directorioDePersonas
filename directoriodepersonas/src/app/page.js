'use client'; 
import { useEffect, useState } from 'react';
import ListaPersonas from './components/ListaPersonas';
import styles from "./page.module.css"
import PasadorPag from './components/PasadorPagina';
import NavBar from './components/NavBar';

function Home() {
  const [pag, setPag] = useState(1);
  const pagSetter = (arg) => {
    if(arg > 0){
      setPag(arg)
    }
  }
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <ListaPersonas pag={pag}></ListaPersonas>
      <PasadorPag pag={pag} setPag={pagSetter}></PasadorPag>
    </div>
  );
}

export default Home;
