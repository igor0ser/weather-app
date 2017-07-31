// import gapi from './gapi';

const clientId = '120482129915-8vdsduc4v35gfge4r2aqmsu3omr1943o.apps.googleusercontent.com';

const clientSecret = 'aOifAJ7ZnOICe675vnp1CmOj';

function start() {
  // 2. Initialize the JavaScript client library.
  window.gapi.client.init({
    'apiKey': 'AIzaSyBzpMH-jcBs5LN6cHe7SIWan-Fg4FHhpVE',
    // clientId and scope are optional if auth is not required.
    'clientId': '120482129915-8vdsduc4v35gfge4r2aqmsu3omr1943o.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    console.log('Initialize and make the API request.');
    // 3. Initialize and make the API request.
    return window.gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.

const g = () => window.gapi.load('client', start);

export default g;
