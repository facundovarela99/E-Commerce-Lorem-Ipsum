import styles from '../styles/About.module.css'

export function About() {
    return (
        <div className={`${styles.mainAbout} w-full`}>
            <section>
                <div className="tituloAbout flex flex-row justify-center items-center">
                    <h1 className={styles.h1Title}>UN POCO DE HISTORIA</h1>
                    <img className={styles.libroTitle} src="https://i.postimg.cc/XJMhMsPZ/libro.png" alt="LIBRO" />
                </div>

                <article className="text-justify flex flex-col items-center">
                    <p className={`${styles.pArticle} p-5 pb-3 font-bold text-2xl`}>El origen de la yerba mate se encuentra en la región de América del Sur,
                        específicamente en los territorios
                        que hoy en día abarcan partes de países como Argentina, Uruguay, Paraguay y el sur de Brasil</p>

                    <p className={`${styles.pArticle} p-5 pb-3 font-bold text-2xl`}>Los guaraníes, en particular, desempeñaron un papel fundamental en la difusión
                        y el consumo de la yerba mate.
                        Ellos eran uno de los grupos indígenas que habitaban estas tierras y empleaban las hojas de la planta para
                        preparar una bebida que consideraban energizante y beneficiosa para la salud. La bebida se elaboraba
                        infusionando las hojas secas y trituradas de la yerba mate en agua caliente.</p>

                    <p className={`${styles.pArticle} p-5 pb-3 font-bold text-2xl`}>A lo largo de los siglos, su consumo se extendió y se convirtió en una
                        tradición arraigada en la cultura de muchos países de América del Sur, especialmente en Argentina, donde cebar
                        y beber el mate, solo o en compañía, la convirtió en bebida nacional y un elemento importante de la vida
                        cotidiana y la sociabilidad.</p>

                    <img src="https://i.postimg.cc/KYtfTx9c/MATEFONDO.jpg" alt="" width="600px" />
                </article>
            </section>

            <div className={`${styles.separadorAbout} flex flex-row justify-center pt-5 pb-3`}>
                <hr className={`${styles.hrSeparador} w-3/4`} />
            </div>

            <section className="comoCurarMate">
                <div className="flex flex-row justify-center items-center">
                    <h1 className={`text-center text-4xl m-4 ${styles.tituloCuracion}`}>COMO CURAR EL MATE</h1>
                    <img className={styles.imgTituloCuracion} src="https://i.postimg.cc/VvgHCmkN/red-cross.png" alt="" />
                </div>

                <div className="flex flex-wrap">
                    <ol className="mb-0 w-full md:w-1/2 order-2 md:order-1">
                        <div className="ml-5 font-bold mb-0 pb-3">
                            <li className={`${styles.liPasosCuracion} pb-3`}>Colocar dentro de la calabaza yerba húmeda con agua a temperatura natural durante 24 hs.
                                (puede ser usada).
                            </li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>Pasado ese tiempo vaciar la yerba y raspar la calabaza por dentro con una cuchara, para
                                quitarle el hollejo
                                (membrana fibrosa que se encuentra en el interior de la calabaza).</li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>Repetir al día siguiente con agua tibia y el tercero con agua caliente, sugerimos entre los
                                70 y 80 grados
                                máximo. Cada uno de los días raspamos con la cuchara hasta que no haya nada más que remover.</li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>El mate no debe lavarse.</li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>Luego de ser usado se seca con una servilleta de papel y se deja con otra nueva dentro para
                                que absorba la
                                humedad que pueda haber quedado.</li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>Recomendamos no llenar el mate hasta el tope, es decir, no sobrepasar con agua el punto de
                                contacto de la
                                calabaza con la virola de metal.</li>

                            <li className={`${styles.liPasosCuracion} pb-3`}>La virola solo cumple una función decorativa.</li>
                        </div>
                    </ol>

                    <div className={`w-full md:w-1/2 order-1 md:order-2 ${styles.imagenCuracion}`}>
                    </div>
                </div>
            </section>
        </div>
    )
}