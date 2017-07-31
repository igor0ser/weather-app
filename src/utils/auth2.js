// import gapi from './gapi';

const clientId = '120482129915-8vdsduc4v35gfge4r2aqmsu3omr1943o.apps.googleusercontent.com';

const clientSecret = 'aOifAJ7ZnOICe675vnp1CmOj';
const apiKey = 'AIzaSyBzpMH-jcBs5LN6cHe7SIWan-Fg4FHhpVE'
var GoogleAuth; // Google Auth object.
function initClient() {
  window.gapi.client.init({
    clientSecret: clientSecret,
      'apiKey': apiKey,
      'clientId': clientId,
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
    console.log('aaa ooo ');
      GoogleAuth = window.gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  }).catch(error => console.log(error));
}

const g = () => window.gapi.load('client', start);

export default g;
