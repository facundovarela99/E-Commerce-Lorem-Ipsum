import styles from '../styles/Home.module.css'
import { useNavigate } from 'react-router-dom'

export function HomeContainer({ productos }) {

    const navigate = useNavigate();

    const productosDestacados = [];
    for (const prod of productos) {
        if (prod.nombre === 'Termo Stanley clásico' || prod.nombre === 'Yerba Grito Sagrado' || prod.nombre === 'Mate mundialista') {
            productosDestacados.push(prod)
        }
    }


    return (
        <main>
            <section className={`${styles.seccionTitulos} flex flex-col items-start pl-5 pt-2`}>

                <div className={`${styles.tituloGrande} w-1/2 text-center`}>
                    <h2 className={`${styles.preparoUnos} font-bold text-white`}>PREPARO UNOS</h2>
                    <h2 className={`${styles.mates} font-bold text-white`}>MATES</h2>
                    <h2 className={`${styles.luego} font-bold text-white`}>LUEGO</h2>
                    <h2 className={`${styles.existo} font-bold text-white`}>EXISTO</h2>
                </div>

                <div className={`${styles.subtitulo} flex flex-col w-full`}>

                    <div className={`w-1/2 flex flex-row ${styles.separador} justify-center items-center pb-3`}>
                        <hr className={styles.hr1} />
                        <span className="px-3 font-bold text-white">X</span>
                        <hr className={styles.hr1} />
                    </div>

                    <div className="w-1/2 text-center">
                        <h3 className="text-white font-light">
                            DESCUBRÍ LO MEJOR PARA TU MOMENTO DE MATE
                        </h3>
                    </div>

                </div>

            </section>
            {productosDestacados.length > 0 && (
                <section className={`${styles.productosDestacados} w-full`}>

                    <div className={`${styles.tituloDestacados} text-white text-center font-bold`}>
                        <h3 className={`${styles.h3_prodDest} text-2xl`}>PRODUCTOS DESTACADOS</h3>
                    </div>

                    <div className={`${styles.imagenesDestacados} pt-5 pb-5 flex flex-row justify-center flex-wrap gap-x-5 gap-y-4`}>

                        <div className={`${styles.div1ImgDest} flex flex-col items-center bg-blue-100 rounded shadow`}>
                            <button onClick={() => navigate(`/producto/${productosDestacados[0].id}`)} className={`${styles.btnTermo} mt-4`}>
                                <img className={styles.imgDestTermo} src={productosDestacados[0].url} alt="Termo" />
                            </button>
                            <p className={`${styles.pTermo} pt-4 text-3xl`}>TERMO CLASICO STANLEY</p>
                        </div>

                        <div className={`${styles.div2ImgDest} flex flex-col items-center bg-blue-100 rounded shadow`}>
                            <button onClick={() => navigate(`/producto/${productosDestacados[1].id}`)} className={`${styles.btnYerba} mt-4`}>
                                <img className={styles.imgDestYerba} src={productosDestacados[1].url} alt="Yerba" />
                            </button>
                            <p className={`${styles.pYerba} pt-4 text-3xl`}>YERBA ORIGEN</p>
                        </div>

                        <div className={`${styles.div3ImgDest} flex flex-col items-center bg-blue-100 rounded shadow`}>
                            <button onClick={() => navigate(`/producto/${productosDestacados[2].id}`)} className={`${styles.btnMate} mt-4`}>
                                <img className={styles.imgDestMate} src={productosDestacados[2].url} alt="Mate" />
                            </button>
                            <p className={`${styles.pMate} pt-4 text-3xl`}>MATE MUNDIALISTA</p>
                        </div>

                    </div>

                </section>
            )}
            <section className={`${styles.guiaPreparacionMate} w-full`}>

                <div className={`${styles.tituloGuia} text-white text-center pt-3 pb-3 font-bold`}>
                    <h3 className="text-2xl">COMO PREPARAR UN BUEN MATE</h3>
                </div>

                <div className="p-5">

                    <div className={`${styles.bordeado} flex flex-wrap justify-around items-center pb-3`}>

                        <div className="w-full md:w-1/2">
                            <iframe
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/I5JOt0B6iS8?si=9zzPuu-4Yd3WM2nB"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>

                        <div className="listaPasos w-full md:w-1/2">

                            <ol className="flex flex-col text-white items-center">
                                <h4 className={`${styles.h4Pasos} text-center`}>PASOS A SEGUIR:</h4>

                                <li>
                                    <p className={`${styles.pPasos}`}>CALENTAR EL AGUA A 75-80°C</p>
                                </li>

                                <li>
                                    <p className={`${styles.pPasos}`}>LLENAR EL MATE CON 3/4 DE YERBA</p>
                                </li>

                                <li>
                                    <p className={`${styles.pPasos}`}>SACUDIR TAPANDO LA BOCA Y ACOMODAR LA YERBA</p>
                                </li>

                                <li>
                                    <p className={`${styles.pPasos}`}>ECHAR AGUA TIBIA EN EL ESPACIO VACÍO PARA INFLAR LA YERBA</p>
                                </li>

                                <li>
                                    <p className={`${styles.pPasos}`}>CEBAR EL MATE Y DISFRUTAR</p>
                                </li>
                            </ol>

                            <div className="text-center">
                                <button className={`${styles.btnParaMas} text-white no-underline p-1`} onClick={()=> navigate('/about')}>
                                    Click aqui para más
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </main>
    )
}