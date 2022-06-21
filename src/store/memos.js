// 액션타입
const ADD_MEMO = 'ADD_MEMO';
const DELETE_MEMO = 'DELETE_MEMO';
const CHANGE_TITLE = 'CHANGE_TITLE';
const CHANGE_MEMO = 'CHANGE_MEMO'; 

// 다음부터 추가되는 메모 id
let id = 3;

// 액션함수
export const addMemo = (title, memo) => ({ 
    type : ADD_MEMO, 
    memo : {
        id : id++,
        title,
        memo
    } 
});
export const deleteMemo = (id) => ({ type : DELETE_MEMO, id });
export const changeTitle = (title) => ({ type : CHANGE_TITLE, title });
export const changeMemo = (memo) => ({ type : CHANGE_MEMO, memo });

const initialState = {
    titleInput: "",
    memoInput: "",
    memos : [
        {
            id : 1,
            title : "첫번째 메모입니다",
            memo : "첫번째 메모 내용입니다"
        },
        {
            id : 2,
            title : "두번째 메모",
            memo : "두번째 메모 내용"
        }
    ]
}

// 리듀서함수
const memoReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case ADD_MEMO : 
            return { ...state, memos: state.memos.concat(action.memo)}
        case DELETE_MEMO :
            return { 
                ...state, 
                memos : state.memos.filter( memo => memo.id !== action.id )
            }
        case CHANGE_TITLE :
            return { ...state, titleInput: action.title }
        case CHANGE_MEMO :
            return { ...state, memoInput: action.memo } 
        default :
            return state
    }
}
export default memoReducer;