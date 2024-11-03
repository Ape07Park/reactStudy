import classes from './PostList.module.css';
import Post from "./Post";
import NewPost from './NewPost';
import { useState } from 'react';

function PostsList() {

    const [enteredBody, setEnteredBody] = useState('')
    const [enterName, setEnteredName] = useState('');

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function nameChangeHandler(e) {
        setEnteredName(e.target.value);
    }

    return (
        <>
        <NewPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHandler}/>
        <ul className={classes.post}>
            {/*App은 PostList를 부르고  PostList는*/}
            {/*Post 컴포넌트로 auther,  body를 보낸다*/}
            {/*Post 컴포넌트는 auther,  body를 props로 받아 각 위치에 넣는다*/}
            <Post auther={enterName} body={enteredBody} />
            <Post auther="yoon" body="react is awesome"/>
        </ul>
         </>
    );
}

export default PostsList;