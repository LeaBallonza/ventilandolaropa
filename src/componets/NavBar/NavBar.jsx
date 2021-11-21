import React from "react";


const NavBar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary ">
        <div class="container justify-content-between ">
          <a class="navbar-brand text-light " href="#">
            <span>
              <h1>Ventilando La Ropa</h1>
            </span>
          </a>
          <button
            class=" navbar-toggler text-light btn btn-primary  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-light"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class=" navbar-nav ">
              <a class="nav-link active text-light " aria-current="page" href="#">
                <h6>
                PRODUCTOS
                </h6>
              </a>
              <a class="nav-link active text-light" aria-current="page" href="#">
              <h6>
                CONTACTO
                </h6>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
