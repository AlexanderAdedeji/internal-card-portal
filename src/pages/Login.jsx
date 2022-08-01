import React from "react";
import Logo from "../assets/images/lassralogo.png";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div class="container-fluid" id="login">
      <div className="row">
        <div className="col-md-8 card1"></div>
        <div className="col-md-4 card2">
          <form className="form page-container">
            <div className="row justify-content-center px-3 mb-2">
              {" "}
              <img id="logo" src={Logo} />
            </div>
            <h3 className="text-center heading">Card Tracking Portal</h3>
            <h6 className="msg-info">Please login to your account</h6>
            <div className="form-group">
              {" "}
              <label className="form-control-label text-muted">Username</label>
              <input
                type="text"
                id="email"
                formControlName="email"
                name="email"
                placeholder="email"
                className="form-control"
              />{" "}
            </div>
            <div className="form-group">
              {" "}
              <label className="form-control-label text-muted">Password</label>
              <input
                type="password"
                id="psw"
                formControlName="password"
                name="psw"
                placeholder="Password"
                className="form-control"
              />{" "}
            </div>
            <div className="row justify-content-center px-3">
              <Link to="/home/batches">
                <button
                  type="submit"
                  className="btn-block btn btn-success mt-4 w-100"
                >
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  Login
                </button>
              </Link>
            </div>
            <div className="text-right mt-3 mr-2">
              {/* <a target='_blank' href='http://172.16.2.74:8899/email'>forgot password?</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
