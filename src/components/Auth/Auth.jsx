import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authInit from '../../utils/authInit';
import signIn from '../../actions/signIn';
import signOut from '../../actions/signOut';


class Auth extends PureComponent {
  state = {
    readyToSignIn: false
  }

  componentDidMount() {
    authInit()
      .then(() => {
        this.GoogleAuth = window.gapi.auth2.getAuthInstance();
        this.setState({ readyToSignIn: true });
      })
  }

  onSignInClick = () => {
    this.GoogleAuth.signIn().then(() => {
      const userId = this.GoogleAuth.currentUser.get().El;
      this.props.signIn(userId);
    });
  }

  onSignOutClick = () => {
    this.GoogleAuth.signOut().then(() => {
      console.log(arguments);
      console.log('was sign outed');
      this.props.signOut();
    });
  }

  render() {
    const { readyToSignIn } = this.state;
    const { isAuthorized } = this.props;

    const onBtnClick = isAuthorized ?
      this.onSignOutClick : this.onSignInClick;
    const btnText = isAuthorized ? 'Sign out' : 'Sign in';

    return readyToSignIn ? (
        <button
          className="btn"
          onClick={onBtnClick}
        >
          {btnText}
        </button>
    ) : (
      <span>Loading...</span>
    );
  }
}

Auth.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default connect(
  ({ auth: { isAuthorized } }) => ({ isAuthorized }),
  { signIn, signOut }
)(Auth);
