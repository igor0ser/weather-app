import { SIGN_OUT } from './actionTypes';

const signOut = () => {
  console.log(' signOut dispatched');
  console.log('SIGN_OUT');
  return ({
  type: SIGN_OUT
})};

export default signOut;
