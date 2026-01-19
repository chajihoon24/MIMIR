import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/color.css";
import "./css/text.css";
import "./css/layout/layout.css";
import App from "./router/App";
import "pretendard/dist/web/static/pretendard.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
