import styles from '../styles/Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="datosContacto flex flex-col items-start">
                <h6 className={`${styles.h6DatosContacto} font-bold text-2xl pl-1 pb-2`}>DATOS DE CONTACTO</h6>
                <h6 className={`${styles.h6DatosContacto} font-bold text-2xl pl-1 pb-2`}>TEL: + 54 - 11 323-4332</h6>
                <h6 className={`${styles.h6DatosContacto} font-bold text-2xl pl-1 pb-2`}>Email: MATIENZO@hotmail.com</h6>
                <h6 className={`${styles.h6DatosContacto} font-bold text-2xl pl-1 pb-2`}>INSTAGRAM: @Matienzo_</h6>
            </div>

            <div className="redesSociales flex flex-row justify-start pl-4">
                <a href="https://www.facebook.com/" target="_blank">
                    <i className={`${styles.iBrands} fa-brands fa-facebook text-5xl pl-2`} target="_blank"></i>
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                    <i className={`${styles.iBrands} fa-brands fa-instagram text-5xl pl-2 text-red-800`} target="_blank"></i>
                </a>

                <a href="https://web.whatsapp.com/" target="_blank">
                    <i className={`${styles.iBrands} fa-brands fa-whatsapp text-5xl pl-2 text-green-600`} target="_blank"></i>
                </a>
            </div>

            <div>
                <p className="m-0 font-bold pt-2 pl-1 text-black">
                    © Copyright 2025 Matienzo - Todos los derechos reservados.
                    Todos los logos, productos, marcas y nombres aqui utilizados son propiedad registrada.
                </p>
            </div>
        </footer>
    )
}