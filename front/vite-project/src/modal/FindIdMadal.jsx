import { useState } from "react";

export default function FindIdModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);


  return (
      <div         className={`
          fixed top-0 right-0 w-1/3 h-screen z-50 
          bg-gray-700 flex items-center justify-center
          transform transition-transform duration-600 ease-in-out
          ${open ? "translate-x-0" : "translate-x-[100vw]"}
        `}>
      
      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-300 underline underline-offset-4 hover:text-white transition"
        aria-label="닫기"
      >
        X
      </button>

      {/* 컨텐츠 */}
      <div className="flex flex-col gap-8 w-[420px] mb-[300px] mr-[250px]">
        <div>
          <h2 className="text-5xl text-gray-100 font-bold mb-4">
            아이디 찾기
          </h2>
          <p className="text-gray-300 text-[16px]">
            회원가입 시 등록한 이메일(또는 휴대폰 번호)을 입력해 주세요.
          </p>
        </div>

        {/* 인풋 */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 또는 휴대폰 번호"
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
          아이디 찾기
        </button>
      </div>
    </div>
  );
}