'use client'; 
import ListaPersonas from './components/ListaPersonas';
import styles from "./page.module.css"

function Home() {
  return (
    <div className={styles.page}>
      <ListaPersonas pag={2}></ListaPersonas>
    </div>
  );
}

export default Home;
