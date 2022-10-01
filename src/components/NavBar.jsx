import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const NavBar = (id) => {
    
    // Se define array de categorías. Al momento de querer modificar, quitar o agregar alguna se debe hacer desde acá.
    const categoriesArray = [
        {link: "/category/cocteleras", name: "Cocteleras" },
        {link: "/category/coladores%20y%20cucharillas", name: "Coladores y Cucharillas" },
        {link: "/category/vasos%20mezcladores", name: "Vasos Mezcladores" },
        {link: "/category/vasos", name: "Vasos y Copas" }
    ]

    // Traigo del contexto la función para contar el total de items del carrito
    const { cartTotal } =  useContext(CartContext)
    // Asigno una variable al resultado de la función para agregarla en el widget
    const totalItems = cartTotal();

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
                            {categoriesArray.map(cat => (<li key={cat.name} className="nav-item"><Link className="nav-link active" aria-current="page" to={cat.link}>{cat.name}</Link></li>))}
                        </ul>
                    </div>
                    {totalItems === 0 ? "" : <CartWidget/>}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
