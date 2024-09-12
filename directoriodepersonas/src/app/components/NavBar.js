import Link from "next/link";
import styles from "../page.module.css"
export default function NavBar ({}) {
    return (
        <>
            <div className={styles.navbar}>
                <Link href={"/Estadisticas"}>Estadisticas</Link>
                <Link href={"/Contacto"}>Contacto</Link>
            </div>
        </>
    );
}