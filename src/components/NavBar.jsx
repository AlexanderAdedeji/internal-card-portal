import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
           Card Collection
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <Link to="/home/batches">
                <li class="nav-item">
                  {" "}
                  <span class="nav-link active" aria-current="page">
                    Batches
                  </span>
                </li>
              </Link>

              <Link to="/home/relocation-request">
                <li class="nav-item">
                  {" "}
                  <span class="nav-link active" aria-current="page">
                    Relocation Requests
                  </span>
                </li>
              </Link>

              <Link to="/home/delivery-request">
                <li class="nav-item">
                  {" "}
                  <span class="nav-link active" aria-current="page">
                    Delivery Request
                  </span>
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
