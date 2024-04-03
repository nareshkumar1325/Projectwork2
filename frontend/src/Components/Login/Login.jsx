import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState([]);
  const inputChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4200/api/hope/login`, login).then((res) => {
      console.log(res);
      sessionStorage.setItem("token", res.data.token);
      // sessionStorage.setItem("userRole", res.data.userRole);
      if(res===200){
      toast.success(
        "Loggedin Successfully", {
          style: {
            border: '1px solid #007117',
            padding: '16px',
            color: '#007117',
          },
          iconTheme: {
            primary: '#007117',
            secondary: '#ECF4EC',
          },
        }
      )
      } navigate("/")
      window.location.reload();
    }
    ).catch((error)=>{
      console.log(error);
      toast.error("Somenthing went wrong.",
      // {
      //   style: {
      //     border: '1px solid #713200',
      //     padding: '16px',
      //     color: '#713200',
      //   },
      //   iconTheme: {
      //     primary: '#713200',
      //     secondary: '#FFFAEE',
      //   },
      // }
      )
      
    })
    
  };

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
           style: {
              background: "red",
            },
          },
        }}
      />

      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <br />
                    <img
                      src="/loginn.jpg"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">
                            <img
                              src="/logo_transparent.png"
                              style={{ width: "300px" }}
                              alt=""
                            />
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="username"
                            onChange={inputChange}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name="password"
                            onChange={inputChange}
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(event) => {
                              handleSubmit(event);
                            }}
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
