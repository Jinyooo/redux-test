function Memo({memo, onDeleteMemo}) {
    return (
        <div>
            <p>
                제목 : {memo.title} 
                <button onClick={() => { onDeleteMemo(memo.id) }}>X</button>
            </p>
            <p>내용 : {memo.memo}</p>
        </div>
    );
}

function MemoList(props) {
    const { 
        titleInput, 
        memoInput, 
        memos, 
        onChangeTitle, 
        onChangeMemo, 
        onAddMemo, 
        onDeleteMemo
    } = props;

    const onTitleChange = (e) => {
        onChangeTitle(e.target.value)
    }
    const onMemoChange = (e) => {
        onChangeMemo(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onAddMemo(titleInput, memoInput);
        onChangeTitle("");
        onChangeMemo("");
    }
    return (
        <div>
            <h1>메모하는 공간입니다</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={titleInput} onChange={onTitleChange}/> <br/>
                <textarea value={memoInput} onChange={onMemoChange}/> <br/>
                <button type='submit'>입력</button>
            </form>

            <hr />
            {
                memos.map( memo => (
                    <Memo 
                        memo={memo}
                        key={memo.id}
                        onDeleteMemo={onDeleteMemo}
                    />
                ))
            }
            
            

        </div>
    );
}

export default MemoList;