import React from 'react';
import styles from './join.scss';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const cx = classNames.bind(styles);

const Join = ({ onEmailChange, emailInput, onPwChange, pwInput, onPwChkChange, pwChkInput}) => {
    return (
        <Card className={cx('card')}>
            <div className={cx('title')}>회원 가입</div>
            <Input type="email" autoFocus placeholder="이메일" className={cx('input','email-input')} fullWidth
            onChange={onEmailChange} value={emailInput}/>
            <Input type="password" placeholder="비밀번호" className={cx('input','password-input')} fullWidth
            onChange={onPwChange} value={pwInput}/>
            <Input type="password" placeholder="비밀번호 재 입력" className={cx('input','password-input')} fullWidth
            onChange={onPwChkChange} value={pwChkInput}/>
            <Button variant="contained" color="primary" size="large" className={cx('button')} fullWidth>
                회원 가입
            </Button>
        </Card>
    );
};

export default Join;