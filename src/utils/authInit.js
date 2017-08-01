import authConfig from './authConfig';

const authInit = () => new Promise((resolve) => {
  window.gapi.load('client', () => {
    window.gapi.client.init(authConfig)
      .then(resolve);
  });
});

export default authInit;
