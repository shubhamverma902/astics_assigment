import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  DeleteUser,
  GetAllUser,
  GetUsersList,
  SearchUser,
  UserListSort,
} from "../../redux/Actions/userActions";
import Header from "../header/header";
import Table from "react-bootstrap/Table";
import AddUser from "../add_user/add_user";
import styled from "styled-components";
import Edit_user from "../edit_user/edit_user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { CSVLink } from "react-csv";

const StyledModalButton = styled(Button)`
  float: right;
`;

const headers = [
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "gender", key: "gender" },
  { label: "eyeColor", key: "eyeColor" },
  { label: "email", key: "email" },
  { label: "company", key: "company" },
  { label: "phone", key: "phone" },
  { label: "address", key: "address" },
];

const Dashboard = ({
  users,
  GetUsersList,
  userList,
  DeleteUser,
  UserListSort,
  pageCount,
  GetAllUser,
  allUser,
  SearchUser,
}) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [selectedUser, setselectedUser] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    GetUsersList(currentPage);
    GetAllUser();
  }, []);

  return (
    <>
      <Header user={users}></Header>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col lg={6}>
            <input
              type="text"
              value={searchText}
              placeholder={"Search name"}
              className="form-control"
              onChange={(e) => {
                setSearchText(e.target.value);
                if (e.target.value) {
                  SearchUser(e.target.value);
                } else {
                  GetUsersList(currentPage);
                  GetAllUser();
                }
              }}
            />
          </Col>
          <Col lg={6}>
            {allUser && (
              <CSVLink data={allUser} headers={headers}>
                <StyledModalButton className="ml-4">
                  {" "}
                  Download as CSV
                </StyledModalButton>
              </CSVLink>
            )}
            <StyledModalButton
              variant="outline-success"
              onClick={() => setShowAddUserModal(true)}
            >
              Add User
            </StyledModalButton>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th
                onClick={() => {
                  UserListSort("name");
                }}
              >
                name
              </th>
              <th
                onClick={() => {
                  UserListSort("age");
                }}
              >
                age
              </th>
              <th
                onClick={() => {
                  UserListSort("gender");
                }}
              >
                gender
              </th>
              <th
                onClick={() => {
                  UserListSort("eyeColor");
                }}
              >
                eyeColor
              </th>
              <th
                onClick={() => {
                  UserListSort("email");
                }}
              >
                email
              </th>
              <th
                onClick={() => {
                  UserListSort("company");
                }}
              >
                company
              </th>
              <th
                onClick={() => {
                  UserListSort("phone");
                }}
              >
                phone
              </th>
              <th
                onClick={() => {
                  UserListSort("address");
                }}
              >
                address
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.eyeColor}</td>
                      <td>{item.email}</td>
                      <td>{item.company}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          onClick={() => {
                            setShowEditUserModal(true);
                            setselectedUser(item._id);
                          }}
                        />
                        <FontAwesomeIcon
                          className="ml-2"
                          icon={faTrashCan}
                          onClick={() => {
                            DeleteUser(item._id);
                          }}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>

        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          onPageChange={(selected) => {
            setCurrentPage(selected.selected);
            GetUsersList(selected.selected);
          }}
          containerClassName="pagination"
          activeClassName="active"
        />
      </Container>
      <AddUser
        show={showAddUserModal}
        handleClose={() => setShowAddUserModal(false)}
      />
      <Edit_user
        show={showEditUserModal}
        handleClose={() => setShowEditUserModal(false)}
        userId={selectedUser}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.registerUserReducer.users,
    userList: state.userReducer.usersList,
    pageCount: state.userReducer.pageCount,
    allUser: state.userReducer.allUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetUsersList: (pageNo) => dispatch(GetUsersList(pageNo)),
    DeleteUser: (userId) => dispatch(DeleteUser(userId)),
    UserListSort: (key) => dispatch(UserListSort(key)),
    GetAllUser: () => dispatch(GetAllUser()),
    SearchUser: (searchKey) => dispatch(SearchUser(searchKey)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
