// 로그인과 관련
import { createAction, handleActions } from 'redux-actions';

//import { pender } from 'redux-pender';

//  액션 타입 정의
const EMAIL_INPUT = 'join/EMAIL_INPUT';
const PW_INPUT = 'join/PW_INPUT';
const PWCHK_INPUT = 'join/PWCHK_INPUT';
const JOIN_ACTION = 'join/JOIN_ACTION';

//  액션 함수 생성
export const onEmailChange = createAction(EMAIL_INPUT, email => email);
export const onPwChange = createAction(PW_INPUT, pw => pw);
export const onPwChkChange = createAction(PWCHK_INPUT, pwchk => pwchk);
export const joinAction = createAction(JOIN_ACTION);

// 초기상태
const initialState = {
    email : '',
    pw : '',
    pwchk:''
}

//  리듀서 작성
export default handleActions({
    [EMAIL_INPUT] : (state, action) => ({
        ...state,
        email : action.payload
    }),
    [PW_INPUT] : (state, action) => ({
        ...state,
        pw : action.payload
    }),
    [PWCHK_INPUT] : (state, action) => ({
        ...state,
        pwchk : action.payload
    }),
}, initialState);