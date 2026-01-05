import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import { useAppSetting } from "../contexts/AppSettingContext";

export default function Nav() {
    const { t, i18n } = useTranslation();
    const { language, changeLanguage } = useAppSetting();

    return (
        <>
            {/* 왼쪽 Nav */}

            <nav className="flex basic-text">
                <ul className="flex-grow items-center flex justify-center gap-8">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">Page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page2</Link>
                    </li>
                    <li>
                        <Link to="/page3">Page3</Link>
                    </li>
                    <li>
                        <Link to="/page4">Page4</Link>
                    </li>
                    <li>
                        <Link to="/test1">테스트</Link>
                    </li>
                    <li>
                        <Link to="/guide">가이드</Link>
                    </li>
                </ul>

                {/* 오른쪽 Nav */}

                <ul className="ml-auto flex-grow items-center flex justify-end gap-8 text-[14px] font-medium text-gray-700">
                    <li>
                        <Link to="/others">
                            <div className="platform_letter font-extrabold">
                                <span>플</span>
                                <span>랫</span>
                                <span>폼</span>
                            </div>
                        </Link>
                    </li>

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
                                <div className="ml-4">차지훈 님</div>
                                <div className="ml-4 text-gray-400">
                                    사번 : D410038Q
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <Link to="/login">{t("logout")}</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
