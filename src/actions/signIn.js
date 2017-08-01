import { SIGN_IN } from './actionTypes';

const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export default signIn;
