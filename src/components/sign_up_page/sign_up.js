import React, { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { RegisterUser } from "../../redux/Actions/registerUserAction";
import { useNavigate } from "react-router-dom";

const StyledError = styled.p`
  text-align: left;
  font-size: 10px;
  color: red;
`;

const UserRegister = ({ RegisterUser, users }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (users.name) {
      navigate("/login");
    }
  }, [users]);

  const passwordValidation = (password) => {
    if (/^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/.test(password) === false) {
      setError((error) => ({
        ...error,
        passwordError:
          "Password must have atleat of 8 characters and special characters.Also can not start with a digit, underscore or special character and must contain at least one digit.",
      }));
    } else {
      setError((error) => ({
        ...error,
        passwordError: "",
      }));
    }
  };

  const confirmPasswordValidation = (confirmPassword) => {
    if (password !== confirmPassword) {
      setError((error) => ({
        ...error,
        confirmPasswordError: "Passwords are not matching",
      }));
    } else {
      setError((error) => ({
        ...error,
        confirmPasswordError: "",
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

  const registerUser = () => {
    if (!userName) {
      setError((error) => ({
        ...error,
        userNameError: "Please add username.",
      }));
    } else if (!password) {
      setError((error) => ({
        ...error,
        passwordError: "Please add password.",
      }));
    } else if (!confirmPassword) {
      setError((error) => ({
        ...error,
        confirmPasswordError: "Please add confirm password.",
      }));
    } else if (
      !error.userNameError &&
      !error.passwordError &&
      !error.confirmPasswordError
    ) {
      RegisterUser(userName, password);
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
                          title={
                            "Password must have length of 8 to 20 aplhanumeric characters and select special characters. The password also can not start with a digit, underscore or special character and must contain at least one digit."
                          }
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
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                          onBlur={(e) => {
                            confirmPasswordValidation(e.target.value);
                          }}
                        />
                        {error && error.confirmPasswordError && (
                          <StyledError>
                            {error.confirmPasswordError}
                          </StyledError>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          onClick={() => registerUser()}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a
                          href="/login"
                          className="text-primary fw-bold"
                          onClick={() => navigate("/login")}
                        >
                          Sign In
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
    users: state.registerUserReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    RegisterUser: (userName, password) =>
      dispatch(RegisterUser(userName, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
