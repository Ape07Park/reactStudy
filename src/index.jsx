import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * 전체 어플리케이션의 메인 파일 
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
// render에 jsx 코드를 전달
// <React.StrictMode>: 작성한 코드가 최적의 코드인지를 알려줌, 버전업으로 내가 쓰는 문법의 호완여부도 알려줌
// <App />: App.jsx

// render는 우리가 작성한 jsx코드(컴포넌트) 여기선 App.jsx를 받아 화면에 랜더링함
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
