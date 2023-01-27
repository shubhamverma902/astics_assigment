import { REGISTER_USER } from "./actionType";

export const RegisterUser = (name,password) => {
  return {
    type: REGISTER_USER,
    payload: {
      name: name,
      password: password,
    },
  };
};
