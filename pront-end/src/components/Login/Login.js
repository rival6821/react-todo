import React from 'react';
import styles from './login.scss';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import logo from '../../img/logo.png';

const cx = classNames.bind(styles);

function Login({ onEmailChange, onPwChange, emailInput, pwInput }){
    return (
        <Card className={cx('card')}>
            <img src={logo} alt={'logo'} className={cx('main-logo')}/>
            <Input type="text" autoFocus placeholder="이메일" className={cx('input','email-input')} fullWidth
            onChange={onEmailChange} value={emailInput}/>
            <Input type="password" placeholder="비밀번호" className={cx('input','password-input')} fullWidth
            onChange={onPwChange} value={pwInput}/>
            <Button variant="contained" color="primary" size="large" className={cx('button')} fullWidth>
                로그인
            </Button>
            <div className={cx('find-password')}>비밀번호를 잊으셧나요?</div>
            <Button variant="contained" size="large" className={cx('button')} 
            fullWidth onClick={()=>{window.location.href="./Join"}}>
                회원가입
            </Button>
        </Card>
    );
};

export default Login;