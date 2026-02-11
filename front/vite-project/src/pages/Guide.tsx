import { BasicBox, TestBox } from "../components/box";
import { BreadCrumb } from "../components/breadcrumb/Breadcrumb";

function Guide() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-white rounded-xl shadow mb-4 overflow-hidden">
                <div className="m-15  h-full flex flex-col gap-8">
                    <BreadCrumb
                        items={[
                            { label: "대시보드", href: "/dashboard" },
                            { label: "가이드", href: "/guide" },
                            { label: "상세" },
                        ]}
                    />
                    {/* 개요 */}
                    <div className="title1 ">컴포넌트 가이드</div>
                    <div className="basic-text">
                        <div className="">
                            <div className="">
                                통일된 디자인 패턴 유지를 위해 컴포넌트를 최대한
                                활용합니다.
                            </div>
                            <div className="">
                                필요 시 신규 컴포넌트를 생성하며, 기존에 정의된
                                컴포넌트나 커스텀 Tailwind 설정은 임의로
                                수정하지 않습니다.
                            </div>
                        </div>
                        <div>
                            <div className="text-[18px] font-bold text-gray-600 m-3">
                                [ 유의 사항 ]
                            </div>
                            <div className=" ">
                                <div className="">
                                    - 컴포넌트는 1회성 여부와 관계없이, 부모
                                    컴포넌트의 구조 가독성을 현저히 저해할 경우
                                    컴포넌트로 분리합니다.
                                </div>
                                <div className="">
                                    - 특이 케이스의 경우 별도의 커스텀 Tailwind
                                    정의를 추가하지 않고, JSX에 직접 명시하여
                                    구현합니다.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[18px] font-bold text-gray-600 m-3">
                                [ 디자인 컨셉 ]
                            </div>
                            <div className="">
                                <div className="">
                                    - 앱 사용을 고려하지 않은 비반응형 레이아웃
                                </div>
                                <div className="">
                                    - ERP 특성상 실용성을 고려한 모던·심플
                                    디자인 패턴
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[18px] font-bold text-gray-600 m-3">
                                [ 주요 스펙 ]
                            </div>
                            <div className=" ">
                                <div className="">- tailwind : 4.1.18 v </div>
                                <div className="">
                                    - tailwind-merge : 3.4.0 v
                                </div>
                                <div className="">- pretendard</div>
                            </div>
                        </div>
                    </div>

                    <div className="my-16"></div>

                    {/* text-종류 */}
                    <div className="title2">텍스트</div>
                    <hr className="-my-5 mb-20 w-full"></hr>
                    <div className="flex w-full gap-28">
                        <div className="flex flex-col gap-14 items-center justify-center">
                            <div className="my-auto">
                                <span className="title1"> ENGLISH</span>
                                <div className="title1 mt-4">한글</div>
                            </div>
                            <div className="mt-auto text-xl text-gray-700 font-bold">
                                " title1 "
                            </div>
                            <div>
                                <div className="basic-text">size : 48px </div>
                                <div className="basic-text">weight : 700 </div>
                                <div className="basic-text">
                                    light-color : #1e2939{" "}
                                </div>
                                <div className="basic-text">
                                    dark-color : 미정{" "}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-14 items-center justify-center">
                            <div className="my-auto">
                                <div className="title2"> ENGLISH</div>
                                <div className="title2 mt-4">한글</div>
                            </div>
                            <div className="mt-auto text-xl text-gray-700 font-bold">
                                " title2 "
                            </div>
                            <div>
                                <div className="basic-text">size : 30px </div>
                                <div className="basic-text">weight : 700 </div>
                                <div className="basic-text">
                                    light-color : #364153{" "}
                                </div>
                                <div className="basic-text">
                                    dark-color : 미정{" "}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-14 items-center justify-center">
                            <div className="my-auto">
                                <span className="basic-text">
                                    {" "}
                                    Hello. world
                                </span>
                                <div className="basic-text">안녕하세요.</div>
                            </div>
                            <div className="mt-auto text-xl text-gray-700 font-bold">
                                " basic-text "
                            </div>
                            <div>
                                <div className="basic-text">size : 16px </div>
                                <div className="basic-text">weight : 400 </div>
                                <div className="basic-text">
                                    light-color : #4a5565{" "}
                                </div>
                                <div className="basic-text">
                                    dark-color : 미정{" "}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-16"></div>
                    <div className="title2">버튼, 인풋창</div>
                    <hr className="-my-5 mb-20 w-full"></hr>
                    <div></div>
                </div>
            </div>
            <div className=""></div>

            {/* 라이트 모드 */}
            <BasicBox className="relative h-[35px]">
                <div className="flex  gap-2 w-400 ">
                    <div className="w-[450px]">BasicBox</div>
                </div>
            </BasicBox>

            <TestBox className="h-[1500px] bg-white flex flex-col">
                <BreadCrumb></BreadCrumb>
                <h1 className="">컴포넌트 가이드라인 (H1)</h1>
                <h2>계층의 이해 (H2)</h2>
                <h3>애플리케이션 프레임워크 (H3)</h3>
                <div className="info-wrapper">
                    <div className="info-tit">웹서버 Web Server (tit)</div>
                    <div className="info-txt w-200">
                        일반적으로 라이브러리나 프레임워크는 특정 업무나 기술에
                        특화된 목표 가지고 만들어진다. 그래서 프레임워크란
                        애플리케이션 특정 부분에서 주로 동작하는 한가지 기술에
                        집중된다.
                    </div>
                </div>
                <div className="info-wrapper">
                    <div className="info-tit">참조용 구현 (tit)</div>
                    <div className="info-txt w-200">
                        자바 서블랫과 JSP 규격의 '참조용 구현'으로 평가되고 있는
                        버전과 소스코드 버전 둘 모두를 아파치 웹 사이트에서 얻을
                        수 있다. 
                    </div>
                </div>
                <h3>색의 3요소</h3>
                <div className="info-tit">웹서버 Web Server</div>
                <div className="info-txt w-200">
                    자바 서블랫과 JSP 규격의 '참조용 구현'으로 평가되고 있는
                    톰캣은, 개발자들의 개방적 협력 작업의 산물로 바이너리 버전과
                    소스코드 버전 둘 모두를 아파치 웹 사이트에서 얻을 수 있다. 
                </div>
            </TestBox>

            {/* 다크모드 */}
            <BasicBox className="gap-8 h-[1400px] mt-4 bg-[#262931] items-center justify-center flex-wrap">
                <button
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                    className="group bg-gray-700 rounded-xl p-4 text-gray-300 shadow-sm shadow-gray-950/55 cursor-pointer hover:bg-gray-800 transition"
                >
                    <div>테스트 버튼</div>
                    <div>안녕하세요. 저는 홍길동입니다.</div>

                    <div
                        className="
                    title2 inline-block mt-8 text-white
                    leading-none
                    transition-transform duration-200 ease-out
                    origin-center
                    
                  "
                    >
                        Download
                    </div>
                    <div>for Free!</div>
                    <div>7.1.0v</div>
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">
                            Press ESC key or click the button below to close
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <div className="border-t-[1px] border-gray-500 w-[400px] "></div>

                <button className="hover:text-gray-200 hover:bg-blue-500 text-blue-950  cursor-pointer transition  shadow-sm shadow-gray-950/55 bg-blue-400 rounded-xl px-7 py-2">
                    <div className="text-xl font-bold ">예약 하기</div>
                </button>
                <div className="basic-text text-gray-200 leading-relaxed">
                    <div className="">
                        <span className="font-bold">[ 주의사항 ]</span>
                        <br />
                        색의 계층 구조는 주로 색의 3속성
                        <span className="text-blue-400 font-bold">
                            {" "}
                            (색상, 명도, 채도){" "}
                        </span>
                        을 기준으로 체계화합니다.
                        <br />
                        색상의 이름에 합의하기 위해 우리에게 필요한 시간
                    </div>
                    <div className="text-gray-100 opacity-50 font-extralight mt-4">
                        ※&nbsp;&nbsp; 수강료는 예고 없이 인상될 수 있습니다.
                    </div>
                    <div className="bg-[#15151b] gap-4 w-full h-[300px] mt-3 rounded-lg flex flex-col items-center justify-center basic-text text-gray-200 ">
                        <div className="-mt-5 -mb-3">국민연금</div>
                        <progress
                            className="progress progress-info w-56"
                            value="15"
                            max="100"
                        ></progress>
                        <div className="-mb-3">고용보험</div>
                        <progress
                            className="progress progress-info w-56"
                            value="60"
                            max="100"
                        ></progress>
                        <div className="-mb-3">건강보험</div>
                        <progress
                            className="progress progress-info w-56"
                            value="30"
                            max="100"
                        ></progress>
                        <div className="-mb-3">산재보험</div>
                        <progress
                            className="progress progress-info w-56"
                            value="70"
                            max="100"
                        ></progress>
                    </div>
                    <div className="mt-1 ml-[340px] font-extralight text-gray-100 opacity-50 mt">
                        자료제공 : 국민연금공단
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span className="inline-block align-middle ms-1 w-[400px] ml-4">
                            두 번 탭하여 Google에서 검색합니다. 신고하기. 취소.
                            확인. 삭제. 인기 검색어.재 구글은 미국 캘리포니아
                            주에 있는 빌딩을 본사로 사용합니다.
                        </span>
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span className="inline-block align-middle ms-1 w-[400px] ml-4">
                            1월 9일 - 1월 16일로 한 주 연기되었으니 일정 혼동
                            없으시도록 꼭 참고하여 주세요.
                        </span>
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span className="inline-block align-middle ms-1 w-[400px] ml-4">
                            정부 고시에 따라 국민연금 및 건강보험 보험료 요율이
                            인상되면서, 2026년 1월분 급여부터 급여 공제 금액에
                            일부 변동이 생기게 되어 미리 안내드립니다.
                        </span>
                    </div>
                </div>
            </BasicBox>
            <BasicBox>
                <div className="title1">비쥬얼 컨셉</div>
                <div className="title2">Concept Color</div>

                <div className="color_container">
                    <div className="colorSample smart_blue">#0466c8</div>
                    <div className="colorSample steel_azure">#0353a4</div>
                    <div className="colorSample regal_navy">#023e7d</div>
                    <div className="colorSample prussian_blue1">#002855</div>
                    <div className="colorSample prussian_blue2">#001845</div>
                </div>

                <div className="color_container">
                    <div className="colorSample prussian_blue3">#001233</div>
                    <div className="colorSample twilight_indigo">#33415c</div>
                    <div className="colorSample blue_slate">#5c677d</div>
                    <div className="colorSample slate_grey">#7d8597</div>
                    <div className="colorSample cool_steel">#979dac</div>
                </div>
            </BasicBox>
        </>
    );
}
export default Guide;
