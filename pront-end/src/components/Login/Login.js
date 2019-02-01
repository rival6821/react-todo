import React from 'react';
import styles from './login.scss';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const m_styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const cx = classNames.bind(styles);

function Login(props){
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container className={cx('login-wrap')}>
                <Grid item xs={12}>
                    <Input type="text" autoFocus placeholder="이메일" className={cx('input','email-input')}/>
                </Grid>
                <Grid item xs={12}>
                    <Input type="password" placeholder="비밀번호" className={cx('input','password-input')}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" size="large" className={classes.button}>
                        로그인
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(m_styles)(Login);