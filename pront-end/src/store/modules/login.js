// 로그인과 관련
import { createAction, handleActions } from 'redux-actions';

//import { pender } from 'redux-pender';

//  액션 타입 정의
const ID_INPUT = 'login/ID_INPUT';
const PW_INPUT = 'login/PW_INPUT';
const LOGIN_ACTION = 'login/LOGIN_ACTION';

//  액션 함수 생성
export const onEmailChange = createAction(ID_INPUT, email => email);
export const onPwChange = createAction(PW_INPUT, pw => pw);
export const loginAction = createAction(LOGIN_ACTION);

// 초기상태
const initialState = {
    email : '',
    pw : ''
}

//  리듀서 작성
export default handleActions({
    [ID_INPUT] : (state, action) => ({
        ...state,
        email : action.email,
    }),
    [PW_INPUT] : (state, action) => ({
        ...state,
        pw : action.pw,
    }),
}, initialState);