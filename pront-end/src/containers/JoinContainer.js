import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as joinActions from '../store/modules/join'
import Join from '../components/Join/Join';

class JoinContainer extends Component {
    onEmailChange = (e) => {
        const { JoinActions } = this.props;
        JoinActions.onEmailChange(e.target.value);
    }
    onPwChange = (e) => {
        const { JoinActions } = this.props;
        JoinActions.onPwChange(e.target.value);
    }
    onPwChkChange = (e) => {
        const { JoinActions } = this.props;
        JoinActions.onPwChkChange(e.target.value);
    }
    render() {
        const { email, pw, pwchk } = this.props;
        return (
            <Join 
                onEmailChange={this.onEmailChange}
                onPwChange={this.onPwChange}
                onPwChkChange={this.onPwChkChange}
                emailInput={email}
                pwInput={pw}
                pwChkInput={pwchk}
            />
        );
    }
}

const mapStateToProps = ({ join })=> ({
    email : join.email,
    pw : join.pw,
    pwchk : join.pwchk
})

const mapDispatchToProps = dispatch => ({
    JoinActions : bindActionCreators(joinActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinContainer);