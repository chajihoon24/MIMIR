import { useAuth } from "../contexts/AuthContext";
import { useAppSetting } from "../contexts/AppSettingContext";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { SentryErrorButton } from "./test/sentryTest";

function Home() {
    const userInfo = useAuth();
    const { name, tel } = userInfo;

    const appSettings = useAppSetting();
    const { theme, language } = appSettings;

    const noticeArr = [
        {
            type: "[공지]",
            content: "전직원 연말정산 공지의 건",
            date: "2025-12-25",
        },
        {
            type: "[공지]",
            content: "사내 보안 정책 변경 안내",
            date: "2025-12-20",
        },
        { type: "[공지]", content: "연말 휴무 일정 안내", date: "2025-12-18" },
        {
            type: "[시스템]",
            content: "실재고 갱신 관련 오류 패치",
            date: "2025-12-12",
        },
        {
            type: "[시스템]",
            content: "로그인 세션 안정화 작업",
            date: "2025-12-10",
        },
    ];

    return (
        <>
            <div className="flex gap-8 h-1/3 min-h-[150px] w-2/3">
                <div className="bg-gray-800  text-gray-100 shadow-md w-1/3 rounded-md flex ">
                    <div className="text-2xl font-bold m-4">오늘 주문</div>
                    <SentryErrorButton />
                    <div className="font-bold text-4xl ml-auto mt-auto p-8">
                        24
                    </div>
                </div>
                <div className="bg-white shadow-md w-1/3 rounded-md flex text-gray-700">
                    <div className="text-2xl font-bold m-4">이번주 주문</div>
                    <div className="font-bold text-4xl ml-auto mt-auto p-8">
                        134
                    </div>
                </div>
                <div className="bg-white shadow-md w-1/3 rounded-md flex text-gray-700">
                    <div className="text-2xl font-bold m-4">이번달 주문</div>
                    <div className="font-bold text-4xl ml-auto mt-auto p-8">
                        349
                    </div>
                </div>
            </div>

            {/* 공지사항 컨테이너 */}
            <div className="flex mt-10">
                <div className="flex flex-col bg-white shadow-md rounded-md h-1/3 min-h-[250px] w-1/2">
                    <div className="text-xl font-bold text-gray-700 flex">
                        <div className="ml-5 p-3">공지사항</div>
                        <div className="font-normal ml-auto mt-5 mb-1 mr-6 text-[16px] text-gray-300 cursor-pointer">
                            more
                            <div className="inline">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    size="sm"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-300 border-t-[1px] mx-3" />

                    <ul className="text-[16px] text-gray-700">
                        {noticeArr.map((item, idx) => (
                            <li key={idx} className="ml-6 my-3">
                                <div className="flex">
                                    <span className="font-bold">
                                        {item.type}
                                    </span>
                                    <span className="ml-4">{item.content}</span>
                                    <span className="ml-auto mr-5 text-gray-400">
                                        {item.date}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="ml-8 flex flex-col bg-white shadow-md rounded-md h-1/3 min-h-[250px] w-1/2"></div>
            </div>

            {/* <div className="mt-10 flex flex-col items-center justify-center bg-white shadow-md rounded-md w-[300px]">
                <div>이름 : {name}</div>
                <div>전화번호 : {tel}</div>
                <div>Home</div>
                <div>테마: {theme}</div>
                <div>언어: {language}</div>
            </div> */}
        </>
    );
}

export default Home;
