//로그인 페이지의 툴팁 컴포넌트
// 1회성 툴팁입니다.
export function EasyLogin_tooltip() {
    return (
        <div className="absolute ">
            <div
                className="
                                                    absolute left-112 bottom-1 z-10
                                                    bg-gray-800 !text-white px-4 py-2 rounded-xl
                                                    w-[360px]
                                                    opacity-0 scale-95
                                                    group-hover:opacity-100 group-hover:scale-100
                                                    transition-all duration-300 ease-out
                                                    pointer-events-none
                                                "
            >
                <div>로그인이나 회원가입 없이 바로 접속할 수 있습니다 !</div>
                <br></br>
                <div>1. 일반 계정</div>
                <div>2. 운영자 계정</div>
                <div>3. 시스템관리자 계정</div>
                <span
                    className="absolute left-[-8px] top-3/4 -translate-y-1/2
                                                    w-0 h-0
                                                    border-t-8 border-b-8 border-r-8
                                                    border-t-transparent border-b-transparent border-r-gray-800"
                ></span>
            </div>
        </div>
    );
}
