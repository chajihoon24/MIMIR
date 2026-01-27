import { useState } from "react";
import { BasicBox } from "../components/box";
import { TabItem } from "../components/tabs/tabs.types";
import { Tabs } from "../components/tabs/Tabs";
import { LinkBtn as Btn } from "../components/button/button";
import { cn } from "../config/tailwind-merge";
import {
    SearchDateCustomPicker,
    SearchDateRangePicker,
} from "../components/datepicker/datepicker";
import { FormInput } from "@/components/input/Input";
import { Checkbox } from "@/components/checkbox/Checkbox";

function Test1() {
    let [input1, setInput1] = useState({ A: "", B: "", C: "", D: "", E: "" });
    let [check1, setCheck1] = useState(false);
    let [check2, setCheck2] = useState(false);
    let [check3, setCheck3] = useState(false);

    type MyTabKey = "info" | "input" | "button" | "checkbox" | "datePicker";

    const TABS: readonly TabItem<MyTabKey>[] = [
        { key: "info", label: "정보" },
        { key: "input", label: "Input" },
        { key: "button", label: "Button" },
        { key: "checkbox", label: "Checkbox" },
        { key: "datePicker", label: "DatePicker" },
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
                        <span
                            className={cn(
                                "loading loading-spinner text-info w-40 h-40 border-2",
                            )}
                        ></span>
                    </div>

                    <div hidden={activeTab !== "input"} className="space-y-2">
                        <h2 className="text-lg font-semibold">Input</h2>
                        <p className="text-gray-600">세팅 탭 내용입니다.</p>
                        <FormInput
                            label="성명"
                            type="text"
                            width="lg"
                            placeholder="성명을 입력해주세요"
                            required
                        />
                        <FormInput
                            label="사번"
                            type="text"
                            width="lg"
                            placeholder="사번을 입력해주세요"
                        />
                        <FormInput
                            label="이메일"
                            type="text"
                            width="lg"
                            placeholder="이메일을 입력해주세요"
                        />
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
                        <Checkbox
                            label="이용약관 동의 (필수)"
                            checked={check1}
                            onChange={setCheck1}
                        />
                        <Checkbox
                            label="개인정보 수집 및 이용 동의 (필수)"
                            checked={check2}
                            onChange={setCheck2}
                        />
                        <Checkbox
                            label="마케팅 정보 수신 동의 (선택)"
                            checked={check3}
                            onChange={setCheck3}
                        />
                    </div>

                    <div
                        hidden={activeTab !== "datePicker"}
                        className="space-y-4"
                    >
                        <h2 className="text-lg font-semibold">DatePicker</h2>

                        <p className="info-txt">
                            날짜 및 기간 선택을 위한 공통 DatePicker
                            컴포넌트입니다. 검색 조건, 조회 조건 화면에서
                            사용됩니다.
                        </p>

                        {/* ===== 단일 날짜 ===== */}
                        <div className="p-4 space-y-2">
                            <h3 className="text-sm font-semibold">
                                단일 날짜 선택
                            </h3>

                            <p className="info-txt text-gray-500">
                                연 / 월 / 일 중 선택 타입에 따라 하나의 날짜를
                                선택합니다.
                            </p>

                            <div className="flex flex-col gap-2">
                                <SearchDateCustomPicker
                                    label="년도"
                                    type="YYYY"
                                />
                                <SearchDateCustomPicker
                                    label="월별"
                                    type="MM"
                                />
                                <SearchDateCustomPicker
                                    label="일자"
                                    type="YYYY-MM-DD"
                                />
                            </div>
                        </div>

                        {/* ===== 기간 선택 ===== */}
                        <div className="border-t border-gray-300 p-4 space-y-2">
                            <h3 className="text-sm font-semibold">기간 선택</h3>

                            <p className="info-txt text-gray-500">
                                시작일 ~ 종료일 형태의 조회 기간 선택에
                                사용됩니다.
                            </p>

                            <SearchDateRangePicker
                                label="조회 기간 (년도)"
                                type="YYYY"
                            />
                            <SearchDateRangePicker
                                label="조회 기간 (월별)"
                                type="MM"
                            />
                            <SearchDateRangePicker
                                label="조회 기간 (일별)"
                                type="YYYY-MM-DD"
                            />
                        </div>

                        {/* ===== 사용 가이드 ===== */}
                        <div className="bg-gray-50 border-t border-gray-300 p-4">
                            <h3 className="text-sm font-semibold mb-2">
                                사용 가이드
                            </h3>

                            <ul className="info-txt space-y-1 list-disc list-inside">
                                <li>
                                    검색 조건 영역에서는 단일 날짜 또는 기간
                                    선택 중 하나를 사용합니다.
                                </li>
                                <li>
                                    서버 전송 시 Date 객체는 문자열 포맷으로
                                    변환해야 합니다.
                                </li>
                                <li>
                                    기본 포맷은{" "}
                                    <code className="px-1 bg-white border rounded">
                                        YYYY-MM-DD
                                    </code>{" "}
                                    입니다.
                                </li>
                                <li>
                                    아이콘 클릭은 입력창과 동일하게 동작합니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BasicBox>
        </div>
    );
}

export default Test1;
