import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import githubAuthConfig from '../../utils/githubAuthConfig';
import axios from 'axios';
import qs from 'qs';
import request from 'request';

class AuthForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            some: false
        };
    }

    onSubmit = (e) => {
      e.preventDefault();
      handler(e, null, (data) => {
        console.log(data);
      })
    }

    render() {
        const { value } = this.props;
        const { some } = this.state;

        return (
          <form className="AuthForm" onSubmit={this.onSubmit}>
            Authorization:
            <input
              className="text-input"
              type="text"
              ref={input => this.username = input}
              placeholder="username"
            />
            <input
              className="text-input"
              type="password"
              ref={input => this.password = input}
              placeholder="password"
            />
            <button type="submit" className="btn">Signin</button>
          </form>
        );
    }
}

AuthForm.propTypes = {
};

export default AuthForm;

function handler(event, context, callback) {
    const config = {
      client_id: '5653eed98c79b937104d',
      client_secret: '9174099cdbe16350446b7a34b68e47e9c4b598b4',
      url: 'http://localhost:3000',
      allowedOrigins: ['http://localhost:3000/'],
      redirectUri: 'http://localhost:3000/',
      providers: {
        github: '/auth/github'
      }
    };


    // Retrieve the request, more details about the event variable later
    const headers = event.headers;
    const body = event.body;
    const origin = headers.origin || headers.Origin;

    // Check for malicious request
    if (!config.allowedOrigins.includes(origin)) {
        throw new Error(`${headers.origin} is not an allowed origin.`);
    }

    const url = 'https://github.com/login/oauth/access_token';
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            code: body.code,
            client_id: config.clientId,
            client_secret: config.clientSecret,
            redirect_uri: config.redirectUri,
        }),
    };

    // Request to GitHub with the given code
    request(url, options, function(err, response) {
        if (err) {
            callback({ success: false, error: err });
            return;
        }

        callback(null, {
            success: true,
            // Access token should be stored in response.body
            body: JSON.parse(response.body),
        });
    });
};