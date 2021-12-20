import React from "react";
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { getProductsByCategories } from "../ProductData/ProductData";

const NavBar = () => {

  const [categories, setCategories] = useState([])
 

  useEffect(() =>{
    getProductsByCategories().then(categories =>{
      setCategories(categories)
    })
    
  }, [])

  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-primary ">
        <div className="container  ">
          <Link to={'/'} className="navbar-brand text-light ">
            <span>
              <h1>Ventilando La Ropa</h1>
            </span>
          </Link>
          <button
            className=" navbar-toggler text-light btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className=" navbar-nav ">
            <Link to={'/'} className=" nav-link text-light" >CATALOGO</Link>
              <li className="nav-item dropdown">
                <Link to={'/'} className="nav-link dropdown-toggle text-light " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                    PRODUCTOS
                  
                </Link>
                <ul className="dropdown-menu  bg-primary " aria-labelledby="navbarDropdown">
                  {categories.map(cat => <Link key={cat.id} className="dropdown-item text-light text-uppercase" to={`/category/${cat.id}`}>{cat.id}</Link>)}                  
                </ul>
              </li>
            <CartWidget/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
