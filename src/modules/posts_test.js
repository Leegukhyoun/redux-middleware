// 액션타입, 액션 생성 함수, 초기값, 리듀서
// 프로미스가 시작, 성공, 실패했을 때 다른 액션을 디스패치
// 각 프로미스가 thunk 함수를 만들어 줘야 한다.
// 리듀서에서 액션에 따라 로딩중, 결과, 에러상태를 변경

import * as postAPI from '../api/posts'     //api폴더 안에있는 posts 안의 모든 함수 postAPI 이름으로 불러오기

//초기값
const initialState = {
    posts : {
        loading : false,
        data : null,
        error : null,
    },
    post : {
        loading : false,
        data : null,
        error : null,
    }
}

// 액션 타입
// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 포스트 하나 조회하기
const GET_POST = "GET_POST"
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk함수 
export const getPosts = () => async dispatch => {
    dispatch({type : GET_POSTS})
    try{
        const posts = await postAPI.getPosts();
        dispatch({type : GET_POSTS_SUCCESS, posts}); //성공
        //dispatch({type : GET_POSTS_SUCCESS, posts : posts}); 를 줄여쓴다 
    }
    catch(e){
        dispatch({type : GET_POSTS_ERROR, error : e});
    }
}
// 하나만 조회하는 함수
export const getPost = (id) => async dispatch => {
    dispatch({type : GET_POST})
    try{
        const post = await postAPI.getPostById(id);
        dispatch({type : GET_POST_SUCCESS, post}); //성공
        //dispatch({type : GET_POST_SUCCESS, post : post}); 를 줄여쓴다 
    }
    catch(e){
        dispatch({type : GET_POST_ERROR, error : e});
    }
}

export default function posts_test(state=initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts : {
                    loading : true,
                    data: null,
                    error : null,
                }
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts : {
                    loading : false,
                    data: action.posts,
                    error : null,
                }
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts : {
                    loading : false,
                    data: null,
                    error : action.error,
                }
            }
        case GET_POST:
            return {
                ...state,
                post : {
                    loading : true,
                    data: null,
                    error : null,
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post : {
                    loading : false,
                    data: action.post,
                    error : null,
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post : {
                    loading : false,
                    data: null,
                    error : action.error,
                }
            }
        default:
            return state;
    }
}