import { HashLink as Link } from 'react-router-hash-link';

import './SubNavBar.css';



export const SubNavBar = () => {

    return (
        <header id="subNavBar" className="bg-headerE">
            <div className="bg-navbarE">
                <div className="containerE">
                    <div className="navbarE">
                        <nav className="navbar-navE">
                            <Link className='nav-linkE' to={`/search`}><i>Buscar</i></Link>
                            <Link className='nav-linkE' to={`/ganache`}><i>Ganache</i></Link>
                            <Link className='nav-linkE' to={`/buttercream`}><i>Buttercream</i></Link>
                            <Link className='nav-linkE' to={`/allcakes`}><i>Productos</i></Link>
                        </nav>
                        <Link to={`/homePage#Home`} className="navbar-brandE">
                            <img src="../assets/logo-letra.png" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}