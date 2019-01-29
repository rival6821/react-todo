// 로그인과 관련
import { createAction, handleActions } from 'react-redux';

import { pender } from 'redux-pender';

//  액션 타입 정의
const ID_INPUT = 'login/ID_INPUT';
const PW_INPUT = 'login/PW_INPUT';
const LOGIN_ACTION = 'login/LOGIN_ACTION';

//  액션 함수 생성
export const inInput = createAction(ID_INPUT, id_value => id_value);
export const pwInput = createAction(PW_INPUT, pw_value => pw_value);
export const loginAction = createAction(LOGIN_ACTION);

// 초기상태
const initialState = {
    id_value : '',
    pw_value : ''
}

//  리듀서 작성
export default handleActions({
    [ID_INPUT] : (state, action) => ({
        ...state,
        id_value : action.id_value,
    }),
    [PW_INPUT] : (state, action) => ({
        ...state,
        id_value : action.pw_value,
    }),
    [LOGIN_ACTION] : (state, action) => ({
        //  로그인 처리 작업
    }),

})(initialState);