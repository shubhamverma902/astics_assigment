import {
  GET_USERS_LIST,
  ADD_USER,
  GET_USER_DETAILS,
  EDIT_USER_DETAILS,
  DELETE_USER,
  USER_LIST_SORT,
  GET_ALL_USER,
  SEARCH_USER,
} from "./actionType";

export const GetUsersList = (pageNo) => {
  return {
    type: GET_USERS_LIST,
    payload: pageNo,
  };
};

export const AddUsers = (userDetails) => {
  return {
    type: ADD_USER,
    payload: userDetails,
  };
};
export const GetUserDetails = (userId) => {
  return {
    type: GET_USER_DETAILS,
    payload: userId,
  };
};
export const EditUserDetails = (userDetails) => {
  return {
    type: EDIT_USER_DETAILS,
    payload: userDetails,
  };
};

export const DeleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const UserListSort = (key) => {
  return {
    type: USER_LIST_SORT,
    payload: key,
  };
};

export const GetAllUser = () => {
  return {
    type: GET_ALL_USER,
  };
};
export const SearchUser = (searchKey) => {
  return {
    type: SEARCH_USER,
    payload: searchKey,
  };
};
