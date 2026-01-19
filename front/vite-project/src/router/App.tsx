import { lazy, Suspense } from "react";
import { PageLoading } from "../components/loading/Loading";
import { AppProvider } from "../contexts/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import AppLayout from "../layout/AppLayout";

// 인증 관련
const Login = lazy(() => import("../pages/Login"));

// App 페이지
const Dashboard = lazy(() => import("../pages/app/Dashboard"));
const Bookmark = lazy(() => import("../pages/app/Bookmark"));
const Home = lazy(() => import("../pages/Home"));
const Page1 = lazy(() => import("../pages/Page1"));
const Page2 = lazy(() => import("../pages/Page2"));
const Page3 = lazy(() => import("../pages/Page3"));
const Page4 = lazy(() => import("../pages/Page4"));
const Guide = lazy(() => import("../pages/Guide"));
const Test1 = lazy(() => import("../pages/Test1"));

// Test 페이지
const TestMain1600 = lazy(() =>
    import("../pages/test/TestMain").then((m) => ({ default: m.TestMain1600 })),
);
const TestMain1440 = lazy(() =>
    import("../pages/test/TestMain").then((m) => ({ default: m.TestMain1440 })),
);
const TestMainCustom = lazy(() =>
    import("../pages/test/TestMain").then((m) => ({
        default: m.TestMainCustom,
    })),
);
const TestLayout = lazy(() => import("../layout/test/TestLayout"));

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Suspense fallback={<PageLoading />}>
                    <Routes>
                        {/* 인증 페이지 */}
                        <Route element={<AuthLayout />}>
                            <Route path="" element={<Login />} />
                            <Route path="/" element={<Login />} />
                            <Route path="/login" element={<Login />} />
                        </Route>

                        {/* App 페이지 */}
                        <Route element={<AppLayout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/bookmark" element={<Bookmark />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/page1" element={<Page1 />} />
                            <Route path="/page2" element={<Page2 />} />
                            <Route path="/page3" element={<Page3 />} />
                            <Route path="/page4" element={<Page4 />} />
                            <Route path="/test" element={<Test1 />} />
                            <Route path="/guide" element={<Guide />} />
                        </Route>

                        {/* Test 페이지 */}
                        <Route path="/test" element={<TestLayout />}>
                            <Route
                                path="testLayout1600"
                                element={<TestMain1600 />}
                            />
                            <Route
                                path="testLayout1440"
                                element={<TestMain1440 />}
                            />
                            <Route
                                path="testLayoutCustom"
                                element={<TestMainCustom />}
                            />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
