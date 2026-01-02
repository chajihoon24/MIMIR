import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import SideNav from "./SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function AppLayout() {
    return (
        <div className="relative">
            <Header /> {/*Nav가 포함됨*/}
            <div className="flex relative">
                <SideNav></SideNav>
                <MainContent>
                    <Outlet />
                </MainContent>
            </div>
            <Footer />
        </div>
    );
}
