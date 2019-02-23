// 로그인과 관련
import { createAction, handleActions } from 'redux-actions';

//import { pender } from 'redux-pender';

//  액션 타입 정의
const ADD_INPUT_OPEN = 'list/ID_INPUT';

//  액션 함수 생성
export const addInputOpen = createAction(ADD_INPUT_OPEN, input_open => input_open);

// 초기상태
const initialState = {
    input_open : false,

}

//  리듀서 작성
export default handleActions({
    [ADD_INPUT_OPEN] : (state, action) => ({
        ...state,
        input_open : action.payload
    }),
}, initialState);