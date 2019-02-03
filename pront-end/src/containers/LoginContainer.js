import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../store/modules/login'
import Login from '../components/Login/Login';

class LoginContainer extends Component {
    onEmailChange = (e) => {
        const { LoginActions } = this.props;
        LoginActions.onEmailChange(e.target.value);
    }
    onPwChange = (e) => {
        const { LoginActions } = this.props;
        LoginActions.onPwChange(e.target.value);
    }
    render() {
        const { email, pw } = this.props;
        return (
            <Login 
                onEmailChange={this.onEmailChange}
                onPwChange={this.onPwChange}
                emailInput={email}
                pwInput={pw}
            />
        );
    }
}

const mapStateToProps = ({ login })=> ({
    email : login.email,
    pw : login.pw
})

const mapDispatchToProps = dispatch => ({
    LoginActions : bindActionCreators(loginActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);