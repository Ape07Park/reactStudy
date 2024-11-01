import classes from './Post.module.css';
import Post from "./Post";

// todo: 여기서 데이터 값을 받아서 순서 없는 리스트 뿌리기
function PostsList() {

    return (
        <ul>
            {/*App은 PostList를 부르고  PostList는*/}
            {/*Post 컴포넌트로 auther,  body를 보낸다*/}
            {/*Post 컴포넌트는 auther,  body를 props로 받아 각 위치에 넣는다*/}
            <Post auther="sungMIn" body="react is good"/>
            <Post auther="yoon" body="react is awesome"/>
        </ul>
    );
}

export default PostsList;