/* prettier-ignore-file */
import { Outlet } from "react-router-dom";
import Header from "./Header";

import SideNav from "./SideNav";
import Sidebar from "./Sidebar";
import Content from "./Content";

/*
[구조요약]

header(Nav 포함)
sidebar + Content
footer

header : 페이지 최상단, 네비게이션 바 포함
sidebar : 좌측 사이드바 (사이드 네비게이션) 
Content : 메인 컨텐츠 영역
footer : 페이지 최하단

*/
export default function AppLayout() {
    return (
        <div className="h-screen ">
            <Header />
            <main className="flex flex-col relative w-full h-[calc(100vh-60px)]">
                <div className="flex w-full h-full">
                    <Sidebar />
                    <Content>
                        <Outlet />
                    </Content>
                </div>
            </main>
        </div>
    );
}

// <SideNav></SideNav>

// <MainContent>
//     <Outlet />
// </MainContent>
