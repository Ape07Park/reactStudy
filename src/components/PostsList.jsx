import classes from './PostList.module.css';
import Post from "./Post";
import {useEffect, useState} from 'react';


// async를 붙이면 모든 게 프로미스로 래핑되어 반환됨
function PostsList() {
    // const [modalIsVisible, setModalIsVisible] = useState(true)
    // * 아래의 코드는 리엑트가 상태를 자동으로 갱신할 때마다 컴포넌트 함수가 실행되고 이에 따라 fetch도 계속 실행됨 따라서 안좋음
    //  fetch('http://localhost:8080/posts')
    //      // response.json()으로 json을 자바스크립트 객체로 변환
    //      .then(response => response.json())
    //      .then(data => {
    //          setPosts(data.posts);
    //      })

    // 포스트 목록의 상태 관리
    const [posts, setPosts] = useState([]);
    const [isfetching, setIsfetching] = useState(false);
    const [isOk, setIsOk] = useState(true);
    // 부수 효과를 이용해 jsx 코드에 영향을 주지 않고 UI 랜더링과 관련이 없는 작업을 하는 경우에 사용
    // useEffect : 부수 효과를 래핑하는데 사용함. 효과가 실행되어야 한다고 판단되면 알아서 실행함
    // 첫 인자는 함수를 두 번째 인자는 useEffect 바깥에 있는 것을 받음. useEffect의 발동 조건은 두 번째 인자가 변경될 때마다 작동함. 빈 배열은 의존성이 없다는 뜻 따라서 2번 실행 x
    // []이면 처음 컴포넌트가 랜더링될 때만 효과함수 발동

    // useEffect의 함수가 프로미스를 반환하지 않도록 하기 위해 fetchPosts에 async를 걸음
    // useEffect가 아무것도 반환하지 않거나 클린업 함수만 반환해야 함
    useEffect(() => {
        // 효과 함수 안에 있어 비동기적으로 작동함
        async function fetchPosts() {
            setIsfetching(true);
            const res = await fetch('http://localhost:8080/posts')
            // response.json()으로 json을 자바스크립트 객체로 변환
            const resData = await res.json();
            if(!resData) {
                setIsOk(false);
            }
            setPosts(resData.posts);
            setIsfetching(false);
        }

        fetchPosts();

    }, []);


    // 배열에 추가하는 형태로해서 이전의 것이 사라지지 않도록 할 것임
    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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

            {!isfetching && posts.length > 0 && (
                <ul className={classes.post}>
                    {/*App은 PostList를 부르고  PostList는*/}
                    {/*Post 컴포넌트로 auther,  body를 보낸다*/}
                    {/*Post 컴포넌트는 auther,  body를 props로 받아 각 위치에 넣는다*/}
                    {/*모든 post 데이터를 Post로 변환*/}
                    {/*원래 key에는 고유값을 넣어야 함 ex) ID 등 */}
                    {posts.map((post) => <Post key={post.body} auther={post.author} body={post.body}/>)}
                </ul>
            )}

            {!isfetching && posts.length === 0 && (<div style={{textAlign: "center", color: 'red'}}>

                    <h2>No posts yet. Please add a new post.</h2>
                </div>
            )}

            {isfetching && (
                <div style={{textAlign: "center", color: 'red'}}>
                    <p>Loading posts...</p>
                </div>
                    )}

                    {!isOk &&( <div style={{textAlign: "center", color: 'red'}}>

                        <h2>fail</h2>
                    </div>)}

                </>

            );
            }

            export default PostsList;