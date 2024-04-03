import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value,
    });
    console.log(register);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:4200/api/hope/register`, register)
      .then((response) => {
        console.log(response);
        navigate("/login");
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <br />
        <div className="container h-100" style={{ backgroundColor: "#00BBBB" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              onChange={inputChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3g"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              onChange={inputChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Phone
                            </label>
                            <input
                              type="phone"
                              className="form-control"
                              name="phone"
                              onChange={inputChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Username
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="username"
                              onChange={inputChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="pasword"
                              onChange={inputChange}
                            />
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      
                    </div>
                  </div> */}
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3o"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={(event) => {
                              handleSubmit(event);
                            }}
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <Link to={'/login'}>
                  <a href="#!" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                  </Link>
                </p>
                      </form>
                    </div>
                    <div
                      className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                      style={{ backgroundColor: "#7ee0e0" }}
                    >
                      <img src="/register.jpg" className="img-fluid" alt="" />
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

export default Register;
