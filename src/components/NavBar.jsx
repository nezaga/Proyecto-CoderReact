import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = (id) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>The Bar Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/category/cocteleras'}>Cocteleras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/category/coladores%20y%20cucharillas'}>Coladores y Cucharillas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/category/vasos%20mezcladores'}>Vasos Mezcladores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/category/vasos'}>Vasos y Copas</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={'/category/vasos'} role="button" data-bs-toggle="dropdown" aria-expanded="false">Vasos y Copas</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={'/category/vasos/vidrio'}>Vidrio</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={'/category/vasos/acrilico'}>Acrílico</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={'/category/vasos/tiki'}>Tiki</Link>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
