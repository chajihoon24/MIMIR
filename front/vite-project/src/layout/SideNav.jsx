import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const sampleArr = [
    "대시보드",
    "인사관리",
    "재고관리",
    "회계재무",
    "입출고관리",
    "시스템관리",
];

function createList(arr) {
    return arr.map((title, index) => (
        <li key={index}>
            <div className="flex py-2 ml-6">
                <div className="text-[16px] cursor-pointer font-bold">
                    {" "}
                    {title}{" "}
                </div>
                <div className="ml-auto p-1 mr-3 text-gray-400">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </li>
    ));
}

export default function SideNav() {
    return (
        <div className="w-[250px] bg-white font-bold text-[16px] text-gray-700  fixed top-[56px] h-[calc(100vh-3.5rem)] flex-col z-50 flex">
            {/*상단*/}
            <div className="flex py-2 pl-6 bg-gray-300 text-white">
                <div className="text-xl">MIMIR</div>
                <div className="ml-2 text-sm text-gray-400 mb-1 mt-auto">
                    corp.
                </div>
                <div className="ml-auto p-1 mr-3 text-gray-500">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>

            {/* 사이드 메뉴 */}
            <ul className="">{createList(sampleArr)}</ul>

            {/* 하단 */}
            <div className=" mt-auto py-3 ml-6 text-gray-500 text-sm">
                <div>made by 차지훈</div>
            </div>
        </div>
    );
}
