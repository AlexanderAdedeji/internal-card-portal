import React from "react";
import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <div id="home">
      <NavBar />

      <div className="body">

        <div className="floating-state">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
