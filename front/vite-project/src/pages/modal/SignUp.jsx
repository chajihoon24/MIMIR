import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState(""); // 이메일
    const [password, setPassword] = useState(""); // 비밀번호
    const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
    const [username, setUsername] = useState(""); // 사용자 이름
    const [result, setResult] = useState(null); // 나중에 결과 저장용

    return (
        <div className="flex flex-col gap-6 w-[420px] mb-[300px] mr-[25%]">
            <h2 className="text-5xl !text-gray-100 font-bold mb-4">회원가입</h2>
            <p className="!text-gray-300 text-[16px] mb-6">
                필요한 정보를 입력하고 회원가입을 진행해 주세요.
            </p>

            {/* 사용자 이름 */}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="이름"
                className="
          bg-transparent
          border-b border-gray-400
          !text-gray-100
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          py-3
          text-lg
        "
            />

            {/* 이메일 */}
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                className="
          bg-transparent
          border-b border-gray-400
          !text-gray-100
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          py-3
          text-lg
        "
            />

            {/* 비밀번호 */}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="
          bg-transparent
          border-b border-gray-400
          !text-gray-100
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          py-3
          text-lg
        "
            />

            {/* 비밀번호 확인 */}
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호 확인"
                className="
          bg-transparent
          border-b border-gray-400
          !text-gray-100
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          py-3
          text-lg
        "
            />

            {/* 회원가입 버튼 */}
            <button
                className="
          mt-6
          !bg-[#1a1a1a]
          !text-gray-300
          font-semibold
          py-3
          rounded-xl
          hover:bg-gray-200
          transition
        "
            >
                회원가입
            </button>
        </div>
    );
}
