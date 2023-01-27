import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import styled from "styled-components";
import { AddUsers } from "../../redux/Actions/userActions";

const StyledError = styled.p`
  text-align: center;
  font-size: 14px;
  color: red;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const StyledRequiredMark = styled.a`
  color: red !important;
`;

function AddUser({ show, handleClose, AddUsers }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const addUser = async () => {
    if (
      !name ||
      !age ||
      !gender ||
      !eyeColor ||
      !email ||
      !company ||
      !phone ||
      !address
    ) {
      setError("Please enter all required feilds");
    } else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false) {
      setError("Please enter valid email");
    } else {
      function dec2hex(dec) {
        return dec.toString(16).padStart(2, "0");
      }

      function generateId(len) {
        var arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join("");
      }
      setError("");
      let userDetails = {
        _id: generateId(24),
        name,
        age,
        gender,
        eyeColor,
        email,
        company,
        phone,
        address,
      };
      await AddUsers(userDetails);
      handleClose();
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <Form>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>
                Name <StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Age<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER AGE"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Gender<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER GENDER"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Eye Color<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER EYE COLOR"
                onChange={(e) => {
                  setEyeColor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Email<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="ENTER EMAIL"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Company<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER COMPANY"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Phone<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER PHONE"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Address<StyledRequiredMark>*</StyledRequiredMark>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ENTER ADDRESS"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </div>
        {error && <StyledError>{error}</StyledError>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addUser}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.registerUserReducer.users,
    userList: state.userReducer.usersList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddUsers: (userDetails) => dispatch(AddUsers(userDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
