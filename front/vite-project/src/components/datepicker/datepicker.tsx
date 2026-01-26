import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "../icons/Icons";
import { ko } from "date-fns/locale";

registerLocale("ko", ko);
type DateFormatType = "YYYY" | "MM" | "YYYY-MM-DD";

interface SearchDatePickerProps {
    label: string;
    type: DateFormatType;
}

export function SearchDateRangePicker({ label, type }: SearchDatePickerProps) {
    const [selectedBeginDt, setSelectedBeginDt] = useState<Date | null>(
        new Date(),
    );

    /** type별 DatePicker 옵션 매핑 */
    const pickerOptionMap = {
        YYYY: {
            dateFormat: "yyyy",
            showYearPicker: true,
        },
        MM: {
            dateFormat: "yyyy-MM",
            showMonthYearPicker: true,
        },
        "YYYY-MM-DD": {
            dateFormat: "yyyy-MM-dd",
        },
    } as const;

    const pickerOptions = pickerOptionMap[type];

    const [selectedEndDt, setSelectedEndDt] = useState<Date | null>(new Date());

    const handleChange1 = (date: Date | null) => {
        setSelectedBeginDt(date);
    };
    const handleChange2 = (date: Date | null) => {
        setSelectedEndDt(date);
    };

    return (
        <div className="flex items-center mb-[2px]">
            {/* 시작일 */}
            <label className="text-sm font-semibold text-gray-600 w-16">
                {label}
            </label>

            <div className="relative ml-4">
                <DatePicker
                    locale="ko"
                    selected={selectedBeginDt}
                    onChange={handleChange1}
                    dateFormat={pickerOptions.dateFormat}
                    showYearPicker={
                        "showYearPicker" in pickerOptions
                            ? pickerOptions.showYearPicker
                            : undefined
                    }
                    showMonthYearPicker={
                        "showMonthYearPicker" in pickerOptions
                            ? pickerOptions.showMonthYearPicker
                            : undefined
                    }
                    className="w-40 px-2 py-1.5 pr-8 border border-gray-300 rounded text-sm font-normal text-black"
                />

                <IconCalendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            {/* 구분자 */}
            <span className="mx-3 text-gray-600">~</span>

            {/* 종료일 */}
            <div className="relative">
                <DatePicker
                    locale="ko"
                    selected={selectedEndDt}
                    onChange={handleChange2}
                    dateFormat={pickerOptions.dateFormat}
                    showYearPicker={
                        "showYearPicker" in pickerOptions
                            ? pickerOptions.showYearPicker
                            : undefined
                    }
                    showMonthYearPicker={
                        "showMonthYearPicker" in pickerOptions
                            ? pickerOptions.showMonthYearPicker
                            : undefined
                    }
                    className="w-40 px-2 py-1.5 pr-8 border border-gray-300 rounded text-sm font-normal text-black"
                />

                <IconCalendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
}

interface SearchDateCustomPickerProps {
    label: string;
    type: DateFormatType;
}

export function SearchDateCustomPicker({
    label,
    type,
}: SearchDateCustomPickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    /** type별 DatePicker 옵션 매핑 */
    const pickerOptionMap = {
        YYYY: {
            dateFormat: "yyyy",
            showYearPicker: true,
        },
        MM: {
            dateFormat: "yyyy-MM",
            showMonthYearPicker: true,
        },
        "YYYY-MM-DD": {
            dateFormat: "yyyy-MM-dd",
        },
    } as const;

    const pickerOptions = pickerOptionMap[type];

    return (
        <div className="flex items-center mb-[2px]">
            <label className="text-sm font-semibold text-gray-600 w-16">
                {label}
            </label>

            <div className="relative ml-4">
                <DatePicker
                    selected={selectedDate}
                    locale="ko"
                    onChange={setSelectedDate}
                    dateFormat={pickerOptions.dateFormat}
                    showYearPicker={
                        "showYearPicker" in pickerOptions
                            ? pickerOptions.showYearPicker
                            : undefined
                    }
                    showMonthYearPicker={
                        "showMonthYearPicker" in pickerOptions
                            ? pickerOptions.showMonthYearPicker
                            : undefined
                    }
                    className="w-40 px-2 py-1.5 pr-8 border border-gray-300 rounded text-sm font-normal text-black"
                />

                <IconCalendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
}
