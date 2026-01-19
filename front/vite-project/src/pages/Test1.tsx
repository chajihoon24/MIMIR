import { useState } from "react";
import { BasicBox } from "../components/box";
import { TabItem } from "../components/tabs/tabs.types";
import { Tabs } from "../components/tabs/Tabs";
import { LinkBtn as Btn } from "../components/button/button";

function Test1() {
    type MyTabKey = "info" | "input" | "button" | "checkbox";

    const TABS: readonly TabItem<MyTabKey>[] = [
        { key: "info", label: "정보" },
        { key: "input", label: "Input" },
        { key: "button", label: "Button" },
        { key: "checkbox", label: "Checkbox" },
    ];
    const [activeTab, setActiveTab] = useState<MyTabKey>("info");

    return (
        <div className="flex flex-col gap-4">
            <BasicBox className="h-1/3 p-6 bg-white rounded-xl shadow-md ">
                {/* 탭 버튼 영역 */}
                <Tabs
                    tabs={TABS}
                    value={activeTab}
                    onChange={(key) => {
                        setActiveTab(key);
                    }}
                />

                {/* 콘텐츠 영역 */}
                <div className="relative">
                    <div hidden={activeTab !== "info"} className="space-y-2">
                        <h2 className="text-lg font-semibold">정보</h2>
                        <p className="text-gray-600">인포탭 내용입니다.</p>
                    </div>

                    <div hidden={activeTab !== "input"} className="space-y-2">
                        <h2 className="text-lg font-semibold">Input</h2>
                        <p className="text-gray-600">세팅 탭 내용입니다.</p>
                    </div>

                    <div hidden={activeTab !== "button"} className="space-y-2">
                        <h2 className="text-lg font-semibold text-red-600">
                            Button
                        </h2>
                        <div className="info-txt">
                            버튼은 크기별로 3가지 레벨, 용도에 따라 4가지 색상
                            제공, 옵션은 아래를 참조
                        </div>
                        <div className="info-txt mt-8">
                            - size : 사이즈 속성 파라미터
                        </div>
                        <div className="info-txt">
                            - color : 버튼 색상 속성 파라미터
                        </div>
                        <div className="info-txt">- to : 링크 파라미터</div>
                        <div className="info-txt">- text : 버튼 이름</div>
                        <div className="info-txt mb-8">
                            - disabled : 활성화 여부
                        </div>
                        <div className="flex flex-col space-y-6 w-1/2">
                            <div className="flex justify-evenly">
                                <Btn
                                    size="md"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    disabled
                                    text={"비 활성화"}
                                />
                                <Btn
                                    size="lg"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    disabled
                                    text={"비 활성화"}
                                />
                                <Btn
                                    size="xl"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    disabled
                                    text={"비 활성화"}
                                />
                            </div>
                            <div className="flex justify-evenly">
                                <Btn
                                    size="md"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    text={"기본 버튼"}
                                />
                                <Btn
                                    size="lg"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    text={"기본 버튼"}
                                />
                                <Btn
                                    size="xl"
                                    to="#"
                                    className="mt-auto"
                                    color="black"
                                    text={"기본 버튼"}
                                />
                            </div>
                            <div className="flex justify-evenly">
                                <Btn
                                    size="md"
                                    to="#"
                                    color="basic"
                                    className="mt-auto"
                                    text={"기본 버튼"}
                                />
                                <Btn
                                    size="lg"
                                    to="#"
                                    color="basic"
                                    className="mt-auto"
                                    text={"기본 버튼"}
                                />
                                <Btn
                                    size="xl"
                                    to="#"
                                    color="basic"
                                    className="mt-auto"
                                    text={"기본 버튼"}
                                />
                            </div>
                            {/* 버튼 영역 */}
                            <div className="flex justify-evenly">
                                <Btn
                                    size="md"
                                    color="blue"
                                    to="#"
                                    text="수락 버튼"
                                    className="mt-auto"
                                />
                                <Btn
                                    size="lg"
                                    color="blue"
                                    to="#"
                                    text="수락 버튼"
                                    className="mt-auto"
                                />
                                <Btn
                                    size="xl"
                                    color="blue"
                                    to="#"
                                    text="수락 버튼"
                                    className="mt-auto"
                                />
                            </div>
                            <div className="flex justify-evenly">
                                <div className="flex flex-col">
                                    <Btn
                                        size="md"
                                        color="red"
                                        to="#"
                                        className="mt-auto"
                                        text={"삭제 버튼"}
                                    />
                                    <div className="mx-auto font-bold text-gray-600">
                                        {"< md >"}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <Btn
                                        size="lg"
                                        color="red"
                                        to="#"
                                        className="mt-auto "
                                        text={"삭제 버튼"}
                                    />
                                    <div className="mx-auto font-bold text-gray-600">
                                        {"< lg >"}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <Btn
                                        size="xl"
                                        color="red"
                                        to="#"
                                        className="mt-auto"
                                        text={"삭제 버튼"}
                                    />
                                    <div className="mx-auto font-bold text-gray-600">
                                        {"< xl >"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-sub my-4">
                            ※ 필요 시 옵션을 추가할 수 있음 ( button.type.ts
                            파일에서 기존 코드를 참조해 추가할 것 )
                        </div>
                        <div className="mockup-window border border-base-300 w-1/2">
                            <div className="grid place-content-center border-t border-base-300 bg-black py-20">
                                <div>
                                    <div className="text-white">
                                        {
                                            '<LinkBtn size= " " color= " " to=" # " text={" "} />'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        hidden={activeTab !== "checkbox"}
                        className="space-y-2"
                    >
                        <h2 className="text-lg font-semibold">Checkbox</h2>
                        <div className="info-tit">Checkbox 컴포넌트입니다.</div>
                    </div>
                </div>
            </BasicBox>
        </div>
    );
}

export default Test1;
