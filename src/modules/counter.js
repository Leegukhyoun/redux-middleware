// 액션 타입, 액션 생성 함수, 초기값, 리듀서
// 초기값
const initialState = 0;

// 액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";


// 액션 생성 함수  - 액션을 리턴해주는 함수
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
}

// 리듀서 작성
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE :
            return state + 1;
        case DECREASE :
            return state - 1;
        default :
            return state;
    }
}