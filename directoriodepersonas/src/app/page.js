'use client'; 
import { useEffect, useState } from 'react';
import ListaPersonas from './components/ListaPersonas';
import styles from "./page.module.css"
import PasadorPag from './components/PasadorPagina';

function Home() {
  const [pag, setPag] = useState(1);
  useEffect(() => {
    console.log(pag)
  },[pag])
  return (
    <div className={styles.page}>
      <ListaPersonas pag={pag}></ListaPersonas>
      <PasadorPag pag={pag} setPag={setPag}></PasadorPag>
    </div>
  );
}

export default Home;
