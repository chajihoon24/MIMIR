import bgImg from "../assets/image/arora.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import FindIdModal from "../modal/FindIdMadal";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {

    const [openFindId, setOpenFindId] = useState(false); 
    const [isActive, setIsActive] = useState(false);
    const [param, setParam] = useState("");


    return (
        <div className="relative w-screen h-screen overflow-hidden">



            {/* 배경 이미지 */}
            <img
                src={bgImg}
                alt="background"
                className="w-full h-full object-cover kenburns-bottom isActive"
            />


            {/* 중앙 정렬 레이어 */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isActive ? "swing-out-left-fwd ":" delay-2 opacity-100"}`}>
                <div className="shadow-2xl     bg-gray-800/50
                                backdrop-blur-3xl w-[550px] h-[560px] rounded-xl 
                                flex flex-col items-center scale-in-ver-center relative ">

                    {/* 타이틀 */}
                    <div className="text-fade-in">
                        <div className="absolute slide-top text-gray-50 text-5xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            MIMIR
                        </div>
                    </div>



                    {/* 입력 영역 */}
                    <div className="mt-35 w-full px-16 space-y-6 text-fade-in2 select-none">

                        <div className="fixed right-0 top-0">
                            <div className="text-gray-300 text-xl m-5">
                                
                                <FontAwesomeIcon
                                        icon={faGlobe}
                                    
                                    /></div>
                        </div>

                        
                        {/* ID */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="userId" className="text-gray-200 text-sm">
                                ID
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
                            <label htmlFor="password" className="text-gray-200 text-sm">
                                PASSWORD
                            </label>
                            <input
                                id="password"
                                type="password"
                                autocomplete="off"
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
                        <div className="control-container ml-2 -mt-4">
                        <input
                            id="keep_logged_yn"
                            type="checkbox"
                            className="screen-reader"
                        />

                        <label htmlFor="keep_logged_yn" className="label-box">
                            <span className="check-icon"></span>
                            <span className="ml-3 text-gray-300">로그인 상태 유지</span>
                        </label>
                        </div>

                        {/* LOGIN BUTTON */}
                        <div className="-mt-5 ">
                            <Link to={"/"}>
                                <button
                                    className="w-full h-11 mt-4 rounded-md bg-indigo-600
                                            text-white font-semibold hover:bg-indigo-700
                                            transition-colors "
                                >
                                    LOGIN
                                </button>
                            </Link>

                            <div className="relative group  mt-6">
                                <Link to={"/"}>
                                <button
                                    className="w-full h-11 rounded-md bg-indigo-600
                                            text-white font-semibold hover:bg-indigo-700
                                            transition-colors"
                                >
                                    간편 로그인
                                    </button>
                                </Link>
                                <div className="absolute ">
                                    <div className="
                                                    absolute left-112 bottom-1 z-10
                                                    bg-gray-800 text-white px-4 py-2 rounded-xl
                                                    w-[360px]
                                                    opacity-0 scale-95
                                                    group-hover:opacity-100 group-hover:scale-100
                                                    transition-all duration-300 ease-out
                                                    pointer-events-none
                                                ">
                                        <div>로그인이나 회원가입 없이 바로 접속할 수 있습니다 !</div>
                                        <br></br>
                                        <div>1. 일반 계정</div>
                                        <div>2. 운영자 계정</div>
                                        <div>3. 시스템관리자 계정</div>
                                    <span className="absolute left-[-8px] top-3/4 -translate-y-1/2
                                                    w-0 h-0
                                                    border-t-8 border-b-8 border-r-8
                                                    border-t-transparent border-b-transparent border-r-gray-800">
                                    </span>
                                    </div>
                                    </div>
                                </div>
                        </div>

                        <div className="mt-8 flex w-full gap-10 text-gray-400 select-none">
                            <div onClick={() => {
                                setOpenFindId(true) 
                                setIsActive(true)
                                setParam("FindID")
                            }} className="hover:text-gray-200 transition-colors duration-200 cursor-pointer">아이디 찾기</div>
                            <div  onClick={() => {
                                setOpenFindId(true) 
                                setIsActive(true)
                                setParam("FindPassword")
                            }} className="hover:text-gray-200 transition-colors duration-200 cursor-pointer">비밀번호 찾기</div>
                            <div  onClick={() => {
                                setOpenFindId(true) 
                                setIsActive(true)
                                setParam("SignUp")
                            }} className="hover:text-gray-200 transition-colors duration-200 cursor-pointer">회원가입</div>
                            <div className="ml-auto text-[12px] text-gray-500 tracking-widest">© MIMIR</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <FindIdModal
                open={openFindId}
                param={ param}
                onClose={() => {
                    setOpenFindId(false)
                    setIsActive(false)
                }}
            />


            <footer className="fixed bottom-0 flex w-screen text-center p-4 text-gray-500">
                <div className="mx-auto "> © 2025 MIMIR. All rights reserved.</div>
            </footer>



        </div>
    );
}
