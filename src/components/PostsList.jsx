import classes from './PostList.module.css';
import Post from "./Post";
import NewPost from './NewPost';
import {useState} from 'react';
import Modal from "./Modal";

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    
    const [enteredBody, setEnteredBody] = useState('')
    const [enterName, setEnteredName] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function nameChangeHandler(e) {
        setEnteredName(e.target.value);
    }

    let modalContent;

    // if (modalIsVisible) {
    //     modalContent =  <Modal onClose={hideModalHandler}> {/*반환값 전달을 원하면 함수이름 () 로 쓰기 ex) hideModalHandler(). 함수전달이면 함수 이름만*/}
    //         <NewPost
    //             onBodyChange={bodyChangeHandler}
    //             onNameChange={nameChangeHandler}
    //         />
    //     </Modal>
    // }

    return (
        <>
            {/*래핑된 콘텐츠의 위치가 표시될 곳을 알려야 함*/}
            {/*모달 안의 NewPost의 내용이 children에 전달됨*/}

            {/*{modalIsVisible ?*/}
            {/*    <Modal onClose={hideModalHandler}> /!*반환값 전달을 원하면 함수이름 () 로 쓰기 ex) hideModalHandler(). 함수전달이면 함수 이름만*!/*/}
            {/*        <NewPost*/}
            {/*            onBodyChange={bodyChangeHandler}*/}
            {/*            onNameChange={nameChangeHandler}*/}
            {/*        />*/}
            {/*    </Modal> : false*/}
            {/*}*/}

            {/*{modalContent}*/}

            {/*modalIsVisible이 true일 때만 출력이 됨*/}
            {modalIsVisible &&
                <Modal onClose={hideModalHandler}> {/*반환값 전달을 원하면 함수이름 () 로 쓰기 ex) hideModalHandler(). 함수전달이면 함수 이름만*/}
                             <NewPost
                                    onBodyChange={bodyChangeHandler}
                                    onNameChange={nameChangeHandler}
                                />
                            </Modal>
            }
            <ul className={classes.post}>
                    {/*App은 PostList를 부르고  PostList는*/}
                    {/*Post 컴포넌트로 auther,  body를 보낸다*/}
                    {/*Post 컴포넌트는 auther,  body를 props로 받아 각 위치에 넣는다*/}
                    <Post auther={enterName} body={enteredBody}/>
                    <Post auther="yoon" body="react is awesome"/>
                </ul>
        </>

    );
}

export default PostsList;