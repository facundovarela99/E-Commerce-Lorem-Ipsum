import styles from '../styles/Navbar.module.css'
import logo from "../assets/logo_mate.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { CartWidget } from './CartWidget.jsx';
import { getCategorias } from '../firebase/db.js';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        const categorias = async () => {
            const categoriasObtenidas = await getCategorias();

            setCategorias(categoriasObtenidas);
        };
        categorias();
    }, [])


    return (
        <div className={`navbar bg-base-100 shadow-sm ${styles.navbar} py-3`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><button onClick={()=>navigate('/')}>Home</button></li>
                        <li>
                            <a>Categorias</a>
                            <ul className="p-2">
                                {categorias.map(categoria => (
                                    <li key={categoria}><button onClick={()=>navigate(`/categoria/${categoria}`)}>{categoria}</button></li>
                                ))}
                            </ul>
                        </li>
                        <li><button onClick={()=>navigate('/about')}>About</button></li>
                    </ul>
                </div>
                <button>
                    <Link to={'/'} className='flex items-center'>
                        <img className={styles.logoNavbar} src={logo} alt="Logo página inicio" />
                        <p className={`text-3xl ${styles.tituloNavbar}`}>MATIENZO</p>
                    </Link>
                </button>
            </div>
            <div className="navbar-center hidden lg:flex w-3/5 flex justify-center">
                <ul className="menu menu-horizontal w-full flex justify-evenly">
                    <li><button className={styles.btnNavbar} onClick={()=>navigate('/')}>Home</button></li>
                    <li><button className={styles.btnNavbar} onClick={()=>navigate('/products')}>Productos</button></li>
                    <li>
                        <details>
                            <summary className={styles.btnNavbar}>Categorias</summary>
                            <ul className="p-2 bg-base-100 w-96 z-1 grid grid-cols-2">
                                {categorias.map(categoria => (
                                    <li key={categoria}><button onClick={()=>navigate(`/categoria/${categoria}`)}>{categoria}</button></li>
                                ))}
                            </ul>
                        </details>
                    </li>
                    <li><button className={styles.btnNavbar} onClick={()=>navigate('/about')}>About</button></li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}