import { useEffect, useRef, useState } from "react";
import Action from './Action.jsx';
import DownArrow from '/down-arrow.png';
import UpArrow from '/up-arrow.png';

const Comment = ({ 
    comment,
    handleInsertNode,
    handleEditNode,
    handleDeleteNode
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => { 
        setExpand(!expand); 
        setShowInput(true); 
    };

    const onAddComment = () => {
        if(editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput('');
        }

        if (editMode) setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    }

    return (
    <div>
        <div className={comment.id === 1 ? 'inputContainer' : 'commentContainer'}>
            {comment.id === 1 ? (
            <>
            <input
            type='text'
            className='inputContainer__input first_input'
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='type...'
            />
            <Action
            className='reply comment'
            type='COMMENT'
            handleClick={onAddComment}
            />
            </>
            ) : (
                <>

                <span contentEditable={editMode}
                suppressContentEditableWarning={editMode}
                style={{ wordWrap: 'break-word'}}
                ref={inputRef}
                >{comment.name}</span>

                <div style={{ display: 'flex', marginTop: '5px' }}>
                {editMode ? (
                    <>
                    <Action className= 'reply' type='SAVE' 
                    handleClick={onAddComment}
                    />
                    <Action className= 'reply' type='CANCEL' 
                    handleClick={() => {
                        if(inputRef.current)
                            inputRef.current.innerText = comment.name;
                        setEditMode(false);}}
                    />
                    </>
                ) : (
                    <>
                    <Action className= 'reply' 
                    type={
                        <>
                          {expand ? (
                            <img src={UpArrow} width="10px" height="10px" />

                          ) : (
                            <img src={DownArrow} width="10px" height="10px" />
                          )}{" "}
                          REPLY
                        </>
                      }
                    handleClick={handleNewComment}/>
                    <Action className= 'reply' type='EDIT' handleClick={() => {setEditMode(true);}}/>
                    <Action className= 'reply' type='DELETE'
                    handleClick={handleDelete}
                    />
                    </>
                )}
                    
                </div>
                </>
            )}
        </div>

        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
            {showInput && (
                <div className='inputContainer'>
                    <input
                        type='text'
                        className='inputContainer__input'
                        autoFocus
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Action className='reply' type='REPLY' handleClick={onAddComment}/>
                    <Action className='reply' type='CANCEL' handleClick={() => { 
                        setShowInput(false);
                        if(!comment?.items?.length) setExpand(false);
                     }}/>
                </div>
            )}
        

            {comment?.items?.map((cmnt) => {
            return(
            <Comment key ={cmnt.id}
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={cmnt}/>
            );
        })}
        </div>
    </div>
    );
};

export default Comment;