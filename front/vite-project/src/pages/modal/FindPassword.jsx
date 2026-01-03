import { useState } from "react";

export default function FindPassword() {
  const [email, setEmail] = useState(""); // 이메일 입력 상태
  const [result, setResult] = useState(null); // 나중에 결과 저장용

  return (
    <div className="flex flex-col gap-8 w-[420px] mb-[300px] mr-[25%]">
      <div>
        <h2 className="text-5xl text-gray-100 font-bold mb-4">
          비밀번호 찾기
        </h2>
        <p className="text-gray-300 text-[16px]">
          ID을 입력해 주세요.
        </p>
      </div>

      {/* 이메일 입력 */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ID"
        className="
          bg-transparent
          border-b border-gray-400
          text-gray-100
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          py-3
          text-lg
        "
      />
      

      {/* 버튼 */}
      <button
        className="
          mt-6
          bg-white
          text-gray-300
          font-semibold
          py-3
          rounded-xl
          hover:bg-gray-200
          transition
        "
      >
        비밀번호 찾기
      </button>
      <div className="text-gray-400 text-[16px] underline underline-offset-5 cursor-pointer">아이디가 기억나지 않나요?</div>
    </div>
  );
}