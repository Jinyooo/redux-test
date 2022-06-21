import { combineReducers } from "redux";
import memoReducer from "./memos";

const rootReducer = combineReducers({
    memoReducer
});

export default rootReducer;