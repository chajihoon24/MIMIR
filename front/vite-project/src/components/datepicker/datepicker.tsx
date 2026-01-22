import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "../icons/Icons";

interface SearchDatePickerProps {
    label: string;
}

export function SearchDatePicker({ label }: SearchDatePickerProps) {
    const [selectedBeginDt, setSelectedBeginDt] = useState<Date | null>(
        new Date(),
    );

    const [selectedEndDt, setSelectedEndDt] = useState<Date | null>(new Date());

    const handleChange1 = (date: Date | null) => {
        setSelectedBeginDt(date);
    };
    const handleChange2 = (date: Date | null) => {
        setSelectedEndDt(date);
    };

    return (
        <div className="flex mb-[2px]">
            <div className="h-[32px]">
                <label className="my-auto text-sm font-semibold text-gray-600 w-16 ">
                    {label}
                    <DatePicker
                        id="startDt"
                        selected={selectedBeginDt}
                        onChange={handleChange1}
                        dateFormat="yyyy-MM-dd"
                        className="w-40 ml-12 px-2 py-1.5 border border-gray-300 rounded text-sm font-normal text-black"
                    />
                    {
                        <IconCalendar className="absolute left-58 bottom-[29px]" />
                    }
                </label>
            </div>
            <div className="my-auto text-gray-600 ml-4">~</div>
            <div className="h-[32px]">
                <label className="my-auto text-sm font-semibold text-gray-600 w-16">
                    <DatePicker
                        id="startDt"
                        selected={selectedEndDt}
                        onChange={handleChange2}
                        dateFormat="yyyy-MM-dd"
                        className="w-40 ml-4 px-2 py-1.5 border border-gray-300 rounded text-sm font-normal text-black"
                    />
                    {
                        <IconCalendar className="absolute left-37 bottom-[29px]" />
                    }
                </label>
            </div>
        </div>
    );
}
