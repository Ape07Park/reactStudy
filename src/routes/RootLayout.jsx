import MainHeader from "../components/MainHeader";
import {Outlet} from 'react-router-dom';

 function RootLayout () {
    return (
    <>
        <MainHeader />
        {/* 공통 컴포넌트의 어느 위치에 각 컴포넌트가 랜더링 되어야 하는가 지정 즉중첩된 라우터가 랜더링 되고 삽입될 위치 지정 */}
        <Outlet />

    </>
    );
}

export default RootLayout