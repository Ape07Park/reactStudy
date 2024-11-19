import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

/**
 * 전체 어플리케이션의 메인 파일
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
// render에 jsx 코드를 전달
// <React.StrictMode>: 작성한 코드가 최적의 코드인지를 알려줌, 버전업으로 내가 쓰는 문법의 호완여부도 알려줌
// <Posts />: Posts.jsx

// createBrowserRouter는 배열을 인자로 받음
const router = createBrowserRouter([//  각 객체가 하나의 경로를 표시
    // path: 경로
    // element: 해당 경로에 랜더링할 컴포넌트
    // children으로 공통레이아웃이 필요한 컴포넌트를 정의, 공통 레이아웃이 계속 따라다님
    {
        path: '/', element: <RootLayout/>, children: [// 라우터 작동할 때마다 loader의 함수 실행
            {
                path: '/', element: <Posts/>, children: [{path: '/create-post', element: <NewPost/>},
                    // 동적 라우트 설정
                    {path: '/:id'}
                ]
            },
        ],
    },

])


// render는 우리가 작성한 jsx코드(컴포넌트) 여기선 Posts.jsx를 받아 화면에 랜더링함
root.render(<React.StrictMode>
    {/*라우팅 활성화 하고 다른 경로의 컴포넌트를 랜더링 할 수 있게 함  */}
    {/* router={} 에  createBrowserRouter를 넣어 라우트 설정 객체 생성 */}
    <RouterProvider router={router}/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
