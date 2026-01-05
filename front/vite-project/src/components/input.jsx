// 체크박스
export function CheckBox1({ id = "", text = "", className = "" }) {
    return (
        <div className={`control-container ml-2 -mt-4 ${className}`}>
            <input id={id} type="checkbox" className="screen-reader" />

            <label htmlFor={id} className="label-box">
                <span className="check-icon"></span>
                <span className="ml-3 !text-gray-300">{text}</span>
            </label>
        </div>
    );
}

export function CheckBox2({ id = "", text = "", className = "" }) {
    return <div className={` ${className}`}></div>;
}
