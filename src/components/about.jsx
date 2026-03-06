import styles from '../styles/about.module.css'

export function About() {
    return (
        <section className={styles.sectionAbout}>
            <div className="place-self-center">
                <h1 className="text-5xl">Sobre el mate</h1>
            </div>
            <article class="text-justify flex flex-col items-center">
                <p class="p-5 pb-3 font-bold text-lg">
                    El origen de la yerba mate se encuentra en la región de América del Sur,
                    específicamente en los territorios
                    que hoy en día abarcan partes de países como Argentina, Uruguay, Paraguay y el sur de Brasil
                </p>
                <p class="p-5 pb-3 font-bold text-lg">
                    Los guaraníes, en particular, desempeñaron un papel fundamental en la difusión
                    y el consumo de la yerba mate.
                    Ellos eran uno de los grupos indígenas que habitaban estas tierras y empleaban las hojas de la planta para
                    preparar una bebida que consideraban energizante y beneficiosa para la salud. La bebida se elaboraba
                    infusionando las hojas secas y trituradas de la yerba mate en agua caliente.
                </p>
                <p class="p-5 pb-3 font-bold text-lg">
                    A lo largo de los siglos, su consumo se extendió y se convirtió en una
                    tradición arraigada en la cultura de muchos países de América del Sur, especialmente en Argentina, donde cebar
                    y beber el mate, solo o en compañía, la convirtió en bebida nacional y un elemento importante de la vida
                    cotidiana y la sociabilidad.
                </p>
            </article>

        </section>
    )
}