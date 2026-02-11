import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/color.css";
import "./css/text.css";
import "./css/layout/layout.css";
import App from "./router/App";
import "pretendard/dist/web/static/pretendard.css";
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://438762a31e2c114b1e978975f54af3e3@o4510865506435072.ingest.us.sentry.io/4510865508204544",

    // 개인 식별 정보(PII) 전송을 허용 ex) IP, 쿠키, 사용자 정보
    sendDefaultPii: true,
    integrations: [Sentry.browserTracingIntegration()],
    // Enable logs to be sent to Sentry
    enableLogs: true,
    tracesSampleRate: 1.0,
    tracePropagationTargets: [
        /^http:\/\/localhost:8080/,
        /^https:\/\/api.myservice.com/,
    ],
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
