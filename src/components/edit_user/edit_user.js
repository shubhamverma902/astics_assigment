import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  EditUserDetails,
  GetUserDetails,
} from "../../redux/Actions/userActions";

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

function EditUser({
  show,
  handleClose,
  GetUserDetails,
  userId,
  userDetails,
  EditUserDetails,
}) {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    GetUserDetails(userId);
  }, [userId]);

  useEffect(() => {
    // let user={...userDetails}
    if (userDetails?.length) {
      setId(userDetails[0]._id);
      setName(userDetails[0].name);
      setAge(userDetails[0].age);
      setGender(userDetails[0].gender);
      setEyeColor(userDetails[0].eyeColor);
      setEmail(userDetails[0].email);
      setCompany(userDetails[0].company);
      setPhone(userDetails[0].phone);
      setAddress(userDetails[0].address);
      setError(userDetails[0].error);
    }
  }, [userDetails]);

  const editUser = async () => {
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
      setError("");
      let userDetails = {
        _id,
        name,
        age,
        gender,
        eyeColor,
        email,
        company,
        phone,
        address,
      };
      await EditUserDetails(userDetails);
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
                value={name}
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
                value={age}
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
                value={gender}
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
                value={eyeColor}
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
                type="text"
                value={email}
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
                value={company}
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
                value={phone}
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
                value={address}
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
        <Button variant="primary" onClick={editUser}>
          Edit User
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.registerUserReducer.users,
    userList: state.userReducer.usersList,
    userDetails: state.userReducer.userDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetUserDetails: (userId) => dispatch(GetUserDetails(userId)),
    EditUserDetails: (userDetails) => dispatch(EditUserDetails(userDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
