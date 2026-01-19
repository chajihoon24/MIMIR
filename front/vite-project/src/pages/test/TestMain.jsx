import { LinkBtn } from "../../components/button";
import { useState } from "react";

export function TestMain1600() {
    return (
        <>
            <div className="flex-shrink-0 bg-blue-200 w-[100rem] h-full mx-auto flex flex-col justify-center items-center">
                <h2 className="">Main Layout</h2>
                <div className="info-txt">너비 : 1600px(고정, 표준)</div>
                <div className="info-txt">높이 : 1050px(고정)</div>
                <div className="flex gap-6 mt-4 mb-60">
                    {" "}
                    <LinkBtn
                        to={"/test/testLayout1440"}
                        text="레이아웃 1440px"
                    ></LinkBtn>
                    <LinkBtn
                        to={"/test/testLayoutCustom"}
                        text="레이아웃 커스텀"
                    ></LinkBtn>
                </div>
            </div>
        </>
    );
}
export function TestMain1440() {
    return (
        <>
            <div className="flex-shrink-0 bg-blue-200 w-[90rem] h-full mx-auto flex flex-col justify-center items-center">
                <h2 className="">Main Layout</h2>
                <div className="info-txt">너비 : 1440px(고정, 표준)</div>
                <div className="info-txt">높이 : 1050px(고정)</div>
                <div className="flex gap-6 mt-4 mb-60">
                    {" "}
                    <LinkBtn
                        to={"/test/testLayout1600"}
                        text="레이아웃 1600px"
                    ></LinkBtn>
                    <LinkBtn
                        to={"/test/testLayoutCustom"}
                        text="레이아웃 커스텀"
                    ></LinkBtn>
                </div>
            </div>
        </>
    );
}

export function TestMainCustom() {
    const [width, setWidth] = useState(1500);

    return (
        <div
            className="flex-shrink-0 bg-blue-200 h-full mx-auto flex flex-col justify-center items-center"
            style={{ width: `${width}px` }}
        >
            <h2>Main Layout</h2>

            <div className="info-txt">
                너비 :
                <input
                    className="ml-2 p-1 border-0 text-right border-b-2 border-black w-20 bg-blue-200"
                    type="number"
                    min={400}
                    max={2000}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                />
                px
            </div>

            <div className="info-txt">높이 : 1050px(고정)</div>
            <div className="flex gap-6 mt-4 mb-60">
                {" "}
                <LinkBtn
                    to={"/test/testLayout1600"}
                    text="레이아웃 1600px"
                ></LinkBtn>
                <LinkBtn
                    to={"/test/testLayout1440"}
                    text="레이아웃 1440px"
                ></LinkBtn>
            </div>
        </div>
    );
}
