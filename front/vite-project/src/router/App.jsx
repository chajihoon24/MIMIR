import "../config/i18n";
import Home from "../pages/Home";
import Page1 from "../pages/page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../contexts/AppProvider";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Page4 from "../pages/Page4";
import Page3 from "../pages/Page3";
import Page2 from "../pages/Page2";
import Test1 from "../pages/Test1";
import Guide from "../pages/Guide";

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    {/*인증 관련 페이지*/}
                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                    </Route>

                    {/*App 페이지*/}
                    <Route element={<AppLayout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                        <Route path="/page4" element={<Page4 />} />
                        <Route path="/test1" element={<Test1 />} />
                        <Route path="/guide" element={<Guide />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
