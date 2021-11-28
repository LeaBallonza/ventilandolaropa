import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary ">
        <div className="container justify-content-between ">
          <a className="navbar-brand text-light " href="/#">
            <span>
              <h1>Ventilando La Ropa</h1>
            </span>
          </a>
          <button
            className=" navbar-toggler text-light btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className=" navbar-nav ">
              <a className="nav-link active text-light " aria-current="page" href="/#">
                <h6>
                PRODUCTOS
                </h6>
              </a>
              <a className="nav-link active text-light" aria-current="page" href="/#">
                <h6>
                  CONTACTO
                </h6>
              </a>
              <CartWidget />
          </div>
            </div>         
        </div>        
      </nav>
    </div>
  );
};

export default NavBar;
