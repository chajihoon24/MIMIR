import bgImg from "../assets/image/arora.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FindIdModal from "../modalFrame/LoginModal";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginBtn } from "../components/button";
import { EasyLogin_tooltip } from "../components/tooltip";
import { CheckBox1 } from "../components/input";
import { useTranslation } from "react-i18next";
import { useAppSetting } from "../contexts/AppSettingContext";

export default function Login() {
    const [openModal, setOpenModal] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [param, setParam] = useState("");
    const [disabled, setDisabled] = useState(true);
    const { t } = useTranslation();
    const { language, changeLanguage } = useAppSetting();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisabled(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="relative w-screen h-screen overflow-hidden ">
            {/* 배경 이미지 */}
            <img
                src={bgImg}
                alt="background"
                className="w-full h-full object-cover kenburns-bottom isActive"
            />

            {/* 중앙 정렬 레이어 */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isActive ? "swing-out-left-fwd " : " delay-2 opacity-100"} ${disabled ? "pointer-events-none" : ""}`}
            >
                <div
                    className="shadow-2xl     bg-gray-800/50
                                backdrop-blur-3xl w-[550px] h-[560px] rounded-xl 
                                flex flex-col items-center scale-in-ver-center relative "
                >
                    {/* 타이틀 */}
                    <div className="text-fade-in">
                        <div className="absolute slide-top !text-gray-50 text-5xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            MIMIR
                        </div>
                    </div>

                    {/* 입력 영역 */}
                    <div className="mt-35 w-full px-16 space-y-6 text-fade-in2 select-none">
                        <div className="fixed right-0 top-0">
                            <button className="text-gray-300 text-xl m-5">
                                <FontAwesomeIcon
                                    icon={faGlobe}
                                    onClick={() => {
                                        changeLanguage();

                                        console.debug(
                                            "change language:",
                                            language
                                        );
                                    }}
                                />
                            </button>
                        </div>
                        {/* ID */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="userId"
                                className="!text-gray-200 text-sm"
                            >
                                {t("id")}
                            </label>
                            <input
                                id="userId"
                                type="text"
                                autocomplete="off"
                                placeholder="아이디를 입력하세요"
                                className="    h-11
                                                rounded-md
                                                px-3
                                                bg-white/10
                                                text-gray-100
                                                placeholder-gray-400
                                                backdrop-blur-sm
                                                outline-none
                                                border border-white/20
                                                focus:border-indigo-400
                                                focus:ring-2
                                                focus:ring-indigo-500/50
                                                transition
                                            "
                            />
                        </div>
                        {/* PASSWORD */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="password"
                                className="!text-gray-200 text-sm"
                            >
                                {t("password")}
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className="    h-11
                                                rounded-md
                                                px-3
                                                bg-white/10
                                                text-gray-100
                                                placeholder-gray-400
                                                backdrop-blur-sm
                                                outline-none
                                                border border-white/20
                                                focus:border-indigo-400
                                                focus:ring-2
                                                focus:ring-indigo-500/50
                                                transition
                                            "
                            />
                        </div>
                        <CheckBox1
                            className="my-2"
                            id="keep_logged_yn"
                            text={t("remember_id")}
                        />
                        {/* LOGIN BUTTON */}
                        <div className="mt-5 ">
                            <LoginBtn text={t("login")} to="/home" />
                            <div className="relative group  mt-6">
                                <LoginBtn text={t("quick_login")} to="/home" />
                                <EasyLogin_tooltip />
                            </div>
                        </div>
                        <div className="mt-8 flex w-full gap-10 !text-gray-400 select-none">
                            <div
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsActive(true);
                                    setParam("FindID");
                                }}
                                className="hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                            >
                                {t("find_id")}
                            </div>
                            <div
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsActive(true);
                                    setParam("FindPassword");
                                }}
                                className="hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                            >
                                {t("find_password")}
                            </div>
                            <div
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsActive(true);
                                    setParam("SignUp");
                                }}
                                className="hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                            >
                                {t("sign_up")}
                            </div>
                            <div className="ml-auto text-[12px] !text-gray-500 tracking-widest">
                                © MIMIR
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FindIdModal
                open={openModal}
                param={param}
                onClose={() => {
                    setOpenModal(false);
                    setIsActive(false);
                }}
            />

            <footer className="fixed bottom-0 flex w-screen text-center p-4 text-gray-500">
                <div className="mx-auto ">
                    {" "}
                    © 2025 MIMIR. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
