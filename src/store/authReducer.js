import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

const emptyState = {
  userId: null,
  isAuthorized: false
};

const authReducer = (state = emptyState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        userId: action.payload,
        isAuthorized: true
      };
    case SIGN_OUT:
      return emptyState;
    default:
      return state;
  }
};

export default authReducer;

