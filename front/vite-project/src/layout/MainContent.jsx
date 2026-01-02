import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function MainContent({ children }) {
    return (
        <>
            <main className="ml-[255px] mt-1 flex-1 flex-gr overflow-auto  min-h-[1200px]">
                <div className="flex py-[10px] pl-6 bg-white text-gray-700 text-xl shadow-md font-extrabold">
                    <div className="">대시보드</div>
                    <div className=" ml-5">
                        <FontAwesomeIcon icon={faBookmark} size="sm" />
                    </div>
                </div>

                <div className="flex-1 min-h-[1200px] mx-6 mt-5">
                    {children}
                </div>
            </main>
        </>
    );
}
