import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostsList from './components/PostsList';

// jsx 코드를 반환하기만 함
// 여기있는 걸 리엑트 컴포넌트라고 함, 컴포넌트는 jsx 코드를 반환하는 함수
// 리엑트의 시작은 html을 반환하는 함수를 작성하는 것에서 시작함

// app.jsx는 최상위 컴포넌트(rootComponent)의 역할을 할 것임 즉 main 함수 역할임

// Post의 jsx를 반환
// 대문자로 시작하는 태그를 커스텀 컴포넌트로 인식함



function App() {

    // 최상위 컴포넌트가 무조건 1개 필요함. 빈태그도 가능
// 여러 번 연속해서 사용할 땐 상위 컴포넌트로 감싸야함
    return (
        // 추가된 컴포넌트 하나당 한번 실행. 재사용이 아님
        <main>
            {/*<Post auther="sungMIn" body="react is good"/>*/}
            {/*<Post auther="yoon" body="react is awesome"/>*/}
            {/*<Post/>*/}

            <PostsList />
        </main>

    );


}

export default App;
