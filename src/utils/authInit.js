import authConfig from './authConfig';

const authInit = () => new Promise((resolve, reject) => {
  window.gapi.load('client', () => {
    window.gapi.client.init(authConfig)
      .then(resolve);
   })
})

export default authInit;
