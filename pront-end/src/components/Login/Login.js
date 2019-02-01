import React from 'react';
import styles from './login.scss';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import logo from '../../img/logo.png';

const m_styles = () => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display:'block',
    marginTop:'30px',
  },
  card: {
    width:'100%',
    maxWidth:'500px',
    margin: '0 auto',
    marginTop:'30px',
    padding:'50px',
  },
});

const cx = classNames.bind(styles);

function Login(props){
    const { classes } = props;
    
    return (
        <Card className={classes.card}>
            <img src={logo} alt={'logo'} className={cx('main-logo')}/>
            <Input type="text" autoFocus placeholder="이메일" className={cx('input','email-input')} fullWidth/>
            <Input type="password" placeholder="비밀번호" className={cx('input','password-input')} fullWidth/>
            <Button variant="contained" color="primary" size="large" className={classes.button} fullWidth>
                로그인
            </Button>
            <div className={cx('find-password')}>비밀번호를 잊으셧나요?</div>
            <Button variant="contained" size="large" className={classes.button} fullWidth onClick={()=>{window.location.href="./Join"}}>
                회원가입
            </Button>
        </Card>
    );
};

export default withStyles(m_styles)(Login);