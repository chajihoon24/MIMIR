import { useState } from "react";
import { BreadCrumb } from "../components/breadcrumb/Breadcrumb";

export default function Template() {
    const tabs = ["대시보드", "인사정보", "로그조회", "재무관리","기관별 시설관리","연도별평가 기록부"];
    const [active, setActive] = useState("대시보드");

    return (
        <div>
            <div className="flex">
                <div className="flex pt-1 px-1 bg-gray-200 w-4/5">
                    <ul className="flex gap-2 pt-40 h-full bg-gray-200 mb-4">
                        {tabs.map((tab) => {
                            const isActive = active === tab;

                            return (
                                <li
                                    key={tab}
                                    className={`
              flex items-center gap-1 px-3 py-1.5
              text-sm cursor-pointer rounded-t-sm font-semibold
              ${
                  isActive
                      ? "bg-white border-b-2 border-gray-400"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
                                    onClick={() => setActive(tab)}
                                >
                                    <span>{tab}</span>
                                    <button
                                        className="ml-1 text-gray-400 hover:text-gray-600 ml-3 mb-1"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // 히스토리 제거 로직
                                        }}
                                    >
                                        ×
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul>
                    <li></li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-wrench-icon lucide-wrench"
                        >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                        </svg>
                    </li>
                    <li></li>
                </ul>
            </div>

            <div className="h-400 bg-white rounded-b-md">
                <div className="flex">
                    <div className="flex pl-8 py-4 text-2xl font-bold">
                        <div>임직원 상세 조회</div>
                    </div>

                    <BreadCrumb
                        className="pl-8 py-4"
                        items={[
                            { label: "대시보드", href: "/dashboard" },
                            { label: "가이드", href: "/guide" },
                            { label: "임직원 상세" },
                        ]}
                    />
                    <div className="ml-auto my-auto pr-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="28px"
                            viewBox="0 -960 960 960"
                            width="28px"
                            fill="#434343"
                        >
                            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                        </svg>
                    </div>
                </div>

                <div className="border-b-[1px] border-gray-300"></div>
            </div>
        </div>
    );
}
