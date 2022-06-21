import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MemoList from '../components/MemoList';
import { addMemo, changeMemo, changeTitle, deleteMemo } from '../store/memos';

function MemoContainer(props) {
    const { titleInput, memoInput, memos } = useSelector( (state) => (
        {
            titleInput: state.memoReducer.titleInput,
            memoInput: state.memoReducer.memoInput,
            memos: state.memoReducer.memos 
        }
    ))

    const dispatch = useDispatch();

    const onChangeTitle = useCallback( (title)=>dispatch(changeTitle(title)) );
    const onChangeMemo = useCallback( (memo)=>dispatch(changeMemo(memo)) );
    const onAddMemo = useCallback( (title, memo) => dispatch(addMemo(title, memo)) ); 
    const onDeleteMemo = useCallback( (id)=>dispatch(deleteMemo(id)) );

    return (
        <div>
            <MemoList titleInput={titleInput} memoInput={memoInput} 
                memos={memos} onChangeTitle={onChangeTitle} onChangeMemo={onChangeMemo}
                onAddMemo={onAddMemo} onDeleteMemo={onDeleteMemo}
            />
        </div>
    );
}

export default MemoContainer;