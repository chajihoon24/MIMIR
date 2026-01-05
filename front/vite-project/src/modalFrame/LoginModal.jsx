import { useState } from "react";
import FindID from "../pages/modal/FindID";
import SignUp from "../pages/modal/SignUp";
import FindPassword from "../pages/modal/FindPassword";

export default function FindIdModal({ open, onClose, param }) {
    return (
        <div
            className={`
          fixed top-0 right-0 w-1/3 h-screen z-50 min-w-[640px] 
          bg-gray-700 flex items-center justify-center
          transform transition-transform duration-600 ease-in-out
          ${open ? "translate-x-0" : "translate-x-[100vw]"}
        `}
        >
            {/* 닫기 버튼 */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 !text-gray-300 hover:text-white transition"
                aria-label="닫기"
            >
                X
            </button>

            {param === "FindID" && <FindID />}
            {param === "FindPassword" && <FindPassword />}
            {param === "SignUp" && <SignUp />}
        </div>
    );
}
