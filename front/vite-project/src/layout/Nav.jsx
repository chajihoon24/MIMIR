import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import { useAppSetting } from "../contexts/AppSettingContext";

export default function Nav() {
    const { t } = useTranslation();
    const { language, changeLanguage, devModeToggle } = useAppSetting();

    return (
        <>
            {/* 왼쪽 Nav */}

            <nav className="ml-20 justify-between info-txt w-full hidden md:flex">
                <ul className="nav-txt grow items-center flex justify-center gap-8 whitespace-nowrap">
                    <li>
                        <Link to="/dashboard">{t("nav.dashboard")}</Link>
                    </li>
                    <li>
                        <Link to="/page1">{t("nav.bookmarks")}</Link>
                    </li>
                    <li>
                        <Link to="/page2">{t("nav.releases")}</Link>
                    </li>
                    <li>
                        <Link to="/page3">{t("nav.platform")}</Link>
                    </li>
                    <li>
                        <Link to="/test">{t("test_temp")}</Link>
                    </li>
                    <li>
                        <Link to="/guide">{t("nav.guide")}</Link>
                    </li>
                    <li>
                        <Link to="/template">템플릿</Link>
                    </li>
                </ul>

                {/* 오른쪽 Nav */}

                <ul className="ml-auto flex-grow items-center flex justify-end gap-8 text-[14px] whitespace-nowrap">
                    <li>
                        <div className="flex mt-auto">
                            <button
                                className=""
                                onClick={() => {
                                    changeLanguage();

                                    console.debug("change language:", language);
                                }}
                            >
                                {language}
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <div className="relative text-2xl">
                                <FontAwesomeIcon icon={faBell} />
                                <div className="top-[-6px] left-[16px] absolute w-[18px] h-[18px] flex items-center justify-center bg-red-600 text-white rounded-full text-[13px]">
                                    9
                                </div>
                            </div>

                            <div className="ml-4 w-10 h-10 rounded-full bg-blue-300"></div>
                            <Link to="/">
                                <div className="ml-4">
                                    차지훈 {t("nav.sir")}
                                </div>
                                <div className="ml-4 text-gray-400">
                                    {t("nav.employee_id")} : D410038Q
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="mr-8">
                        <Link to="/login">{t("logout")}</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
