import { combineReducers } from "redux";    //여러개의 모듈을 하나로 합쳐 사용한다
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter, posts });
export default rootReducer;