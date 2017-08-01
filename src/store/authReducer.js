import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

console.log(SIGN_OUT);

const emptyState = {
  userId: null,
  isAuthorized: false
}

const authReducer = (state = emptyState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        userId: action.payload,
        isAuthorized: true
      };
    case SIGN_OUT:
      console.group('SIGN_OUT');
      console.log(action);
      console.log(state);
      console.log(emptyState);
      console.groupEnd();
      return emptyState;
    default:
      return state;
  }
};

export default authReducer;

