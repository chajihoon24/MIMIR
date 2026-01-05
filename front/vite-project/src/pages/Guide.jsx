function Guide() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-white rounded-xl shadow mb-4 overflow-hidden">
                <div className="m-20  h-full flex flex-col gap-8">
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
                        <div class="flex flex-col gap-14 items-center justify-center">
                            <div className="my-auto">
                                <sp className="title1"> ENGLISH</sp>
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

                        <div class="flex flex-col gap-14 items-center justify-center">
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

                        <div class="flex flex-col gap-14 items-center justify-center">
                            <div className="my-auto">
                                <sp className="basic-text"> Hello. world</sp>
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
        </>
    );
}
export default Guide;
