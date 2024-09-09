import Link from "next/link";
import styles from "../page.module.css"
export default function NavBar ({}) {
    return (
        <>
            <div className={styles.NavBar}>
                <Link href={"/"}>Estadisticas</Link>
                <Link href={"/"}>Contacto</Link>
            </div>
        </>
    );
}