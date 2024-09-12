import NavBar from "../../components/NavBar";
import styles from "../page.module.css"

function Contacto(){
    return (
        <>
            <div>
                <NavBar></NavBar>
                <section>
                    <div className={styles.contactContainer}>
                        <h2>Formulario de Contacto</h2>
                        <form>
                            <div className={styles.formGroup}>
                                <label for="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label for="apellido">Apellido:</label>
                                <input type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label for="edad">Edad:</label>
                                <input type="number" id="edad" name="edad" placeholder="Ingresa tu edad"/>
                            </div>
                            <div className={styles.formGroup}>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            
        </>
    )
}
export default Contacto;