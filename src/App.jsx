import logo from './logo.svg';
import './App.css';
import Post from './components/Post';

// jsx 코드를 반환하기만 함
// 여기있는 걸 리엑트 컴포넌트라고 함, 컴포넌트는 jsx 코드를 반환하는 함수
// 리엑트의 시작은 html을 반환하는 함수를 작성하는 것에서 시작함

// app.jsx는 최상위 컴포넌트(rootComponent)의 역할을 할 것임 즉 main 함수 역할임

// Post의 jsx를 반환
// 대문자로 시작하는 태그를 커스텀 컴포넌트로 인식함
function App() {
  return (
    <Post/>
  );
}

export default App;
