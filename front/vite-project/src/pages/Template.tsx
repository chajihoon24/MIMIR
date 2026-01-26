import { useState } from "react";
import { PageHeader } from "../components/template/common/PageHeader";
import { SearchInput, SearchSelect } from "../components/input/Input";
import { Link } from "react-router-dom";
import { LinkBtn } from "../components/button/button";
import { SearchForm } from "../components/template/common/SearchForm";
import { SearchDateRangePicker } from "../components/datepicker/datepicker";
import { BtnWrapper } from "../components/template/common/BtnWrapper";

export default function Template() {
    const [isBookmark, setBookmark] = useState(false);

    const [search1, setSearch1] = useState("");

    const [dept, setDept] = useState("");

    const [status, setStatus] = useState("");

    const deptOptions = [
        { label: "인사부", value: "HR" },
        { label: "시설관리부", value: "FM" },
        { label: "행정부", value: "ADM" },
        { label: "개발부", value: "DEV" },
    ];

    const statusOptions = [
        { label: "재직", value: "ACTIVE" },
        { label: "휴직", value: "LEAVE" },
        { label: "퇴직", value: "RESIGNED" },
    ];

    return (
        <div>
            <div className="h-400 bg-white rounded-b-md rounded-t-sm">
                <PageHeader />
                {/*START 조회란============================================================================================== */}
                <SearchForm>
                    <SearchInput
                        label="이름"
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={search1}
                        width="md"
                        onChange={setSearch1}
                    />
                    <SearchSelect
                        label="부서"
                        onChange={setDept}
                        options={deptOptions}
                        value={dept}
                        width="sm"
                        defaultOption="all"
                    />
                    <SearchSelect
                        label="상태"
                        onChange={setStatus}
                        options={statusOptions}
                        value={status}
                        width="sm"
                        defaultOption="select"
                    />
                    <SearchDateRangePicker
                        label="조회 기간"
                        type="YYYY-MM-DD"
                    />
                    <BtnWrapper>
                        <LinkBtn color="basic" text="조회" to={"#"} />
                        <LinkBtn color="basic" text="초기화" to={"#"} />
                    </BtnWrapper>
                </SearchForm>
                {/* END 조회란============================================================================================== */}
                <div className=" flex text-gray-500 text-sm font-semibold">
                    <div className="ml-auto mt-1 mr-4">마지막 조회: 2분 전</div>
                </div>

                <div className="px-4 py-1">
                    <div className="overflow-x-auto border border-gray-400 rounded-sm">
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="px-3 py-2 text-left w-12">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        사번
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        이름
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        부서
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        직급
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        상태
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        입사일
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    {
                                        id: "202401",
                                        name: "홍길동",
                                        dept: "인사팀",
                                        role: "대리",
                                        status: "재직",
                                        joinDate: "2021.03.01",
                                    },
                                    {
                                        id: "202402",
                                        name: "김영희",
                                        dept: "개발팀",
                                        role: "과장",
                                        status: "휴직",
                                        joinDate: "2019.07.15",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                ].map((row) => (
                                    <tr
                                        key={row.id}
                                        className="border-t border-gray-400 hover:bg-gray-50 cursor-pointer"
                                    >
                                        <td className="px-3 py-2">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="px-3 py-2">{row.id}</td>
                                        <td className="px-3 py-2 font-medium text-gray-800">
                                            {row.name}
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.dept}
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.role}
                                        </td>
                                        <td className="px-3 py-2">
                                            <span
                                                className={`px-2 py-0.5 rounded text-xs font-semibold
                  ${
                      row.status === "재직"
                          ? "bg-green-100 text-green-700"
                          : row.status === "휴직"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-600"
                  }
                `}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.joinDate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* 페이지네이션 */}
                <div className="flex items-center justify-between px-8 py-3 text-sm text-gray-600">
                    {/* 왼쪽: 페이지 정보 */}
                    <div>
                        총{" "}
                        <span className="font-semibold text-gray-800">
                            1,254
                        </span>
                        건 ·
                        <span className="ml-1">
                            <span className="font-semibold text-gray-800">
                                1
                            </span>{" "}
                            / 126 페이지
                        </span>
                    </div>

                    {/* 오른쪽: 페이지 버튼 */}
                    <div className="flex items-center gap-1">
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="첫 페이지"
                        >
                            «
                        </button>
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="이전 페이지"
                        >
                            ‹
                        </button>

                        {/* 페이지 숫자 */}
                        <button className="px-3 py-1 rounded border border-blue-600 bg-blue-50 text-blue-600 font-semibold">
                            1
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            2
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            3
                        </button>
                        <span className="px-2 text-gray-400">…</span>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            126
                        </button>

                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="다음 페이지"
                        >
                            ›
                        </button>
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="마지막 페이지"
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
