import { REGISTER_USER} from "../Actions/actionType";

const initialState = {
    users: [],
};

export const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};