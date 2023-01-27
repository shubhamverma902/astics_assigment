import React, { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledError = styled.p`
  text-align: left;
  font-size: 10px;
  color: red;
`;

const UserLogin = ({ user }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const passwordValidation = (password) => {
    if (!password) {
      setError((error) => ({
        ...error,
        passwordError: "Please add password.",
      }));
    } else {
      setError((error) => ({
        ...error,
        passwordError: "",
      }));
    }
  };

  const userNameValidation = (userName) => {
    if (!userName) {
      setError((error) => ({
        ...error,
        userNameError: "Please add username.",
      }));
    } else {
      setError((error) => ({
        ...error,
        userNameError: "",
      }));
    }
  };

  const loginUser = () => {
    if(!userName){
        setError((error) => ({
            ...error,
            userNameError: "Please add username.",
          }));
    }
    else if(user.name!==userName){
        setError((error) => ({
            ...error,
            userNameError: "Username is not correct.",
          }));
    }
    if (!password) {
        setError((error) => ({
          ...error,
          passwordError: "Please add password.",
        }));
      } else if(user.password!==password){
        setError((error) => ({
            ...error,
            passwordError: "Password is not correct.",
          }));
    }
    if(user.name===userName&&user.password===password){
        localStorage.setItem("login",true)
        navigate("/dashboard")
    }
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                          onBlur={(e) => {
                            userNameValidation(e.target.value);
                          }}
                        />

                        {error && error.userNameError && (
                          <StyledError>{error.userNameError}</StyledError>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          onBlur={(e) => {
                            passwordValidation(e.target.value);
                          }}
                        />
                        {error && error.passwordError && (
                          <StyledError>{error.passwordError}</StyledError>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" onClick={() => loginUser()}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account??{" "}
                        <a
                          className="text-primary fw-bold"
                          onClick={() => navigate("/register")}
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.registerUserReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
