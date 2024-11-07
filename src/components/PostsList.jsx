import classes from './PostList.module.css';
import Post from "./Post";
import NewPost from './NewPost';
import {useState} from 'react';
import Modal from "./Modal";

function PostsList({isPosting, onStopPosting}) {
    // const [modalIsVisible, setModalIsVisible] = useState(true)

    // 포스트 목록의 상태 관리
    const [posts, setPosts] = useState([]);

    // 배열에 추가하는 형태로해서 이전의 것이 사라지지 않도록 할 것임
    function addPostHandler(postData) {
        // 새 상태 정의 시 함수 넘길 것, setPosts 실행할 때마다 리엑트에 의해 자동 호출
        // 이전 상태의 스냅샷을 가져오고 거기서 추가 이유는 다른 것들이 엮여 재대로 된 것을 못가져올 수도 있어서
        setPosts((existingPosts) => [postData, ...existingPosts]);

    }

    // function hideModalHandler() {
    //     setModalIsVisible(false);
    // }


    // let modalContent;

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
            {/* 값을 이리저리 여러 컴포넌트에 왔다갔다 하는 이유는 그 값을 원하는 컴포넌트에서 사용하기 위함*/}
            {isPosting && (
                <Modal onClose={onStopPosting}> {/*반환값 전달을 원하면 함수이름 () 로 쓰기 ex) hideModalHandler(). 함수전달이면 함수 이름만*/}
                    <NewPost
                        onCancel={onStopPosting} onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.post}>
                    {/*App은 PostList를 부르고  PostList는*/}
                    {/*Post 컴포넌트로 auther,  body를 보낸다*/}
                    {/*Post 컴포넌트는 auther,  body를 props로 받아 각 위치에 넣는다*/}
                    {/*모든 post 데이터를 Post로 변환*/}
                    {/*원래 key에는 고유값을 넣어야 함 ex) ID 등 */}
                    {posts.map((post) => <Post key={post.body} auther={post.author} body={post.body}/>)}
                </ul>
            )}


            {posts.length === 0 && (<div style={{textAlign: "center", color: 'red'}}>

                    <h2>No posts yet. Please add a new post.</h2>
                </div>
            )}
        </>

    );
}

export default PostsList;