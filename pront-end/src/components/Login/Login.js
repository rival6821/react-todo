import React from 'react';
import styles from './login.scss';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <Grid container spacing={24} className={cx('login-wrap')}>
            <Input type="text" autoFocus placeholder="이메일" className={cx('input','email-input')}/>
            <Input type="password" placeholder="비밀번호" className={cx('input','password-input')}/>
            <button>로그인</button>
        </Grid>
    );
};

export default Login;