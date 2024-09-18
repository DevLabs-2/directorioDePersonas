import Link from "next/link";
import styles from "../page.module.css"
export default function NavBar ({}) {
    return (
        <>
            <div className={styles.navbar}>
                <Link href={"/"}>Home</Link>
                <Link href={"../pages/Estadisticas"}>Estadisticas</Link>
                <Link href={"../pages/Contacto"}>Contacto</Link>
            </div>
        </>
    );
}