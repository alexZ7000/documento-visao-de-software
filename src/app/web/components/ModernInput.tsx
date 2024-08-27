import React, { useState } from "react";

interface InputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export default function ModernInput({
    label,
    placeholder = "",
    value = "",
    onChange
}: InputProps) {
    const [focused, setFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^-?\d*$/.test(newValue)) {
            if (onChange) {
                onChange(newValue);
            }
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={focused ? placeholder : ""}
                value={value}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full border-2 transition-all duration-300 border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-600"
            />
            <label
                className={`absolute pointer-events-none left-3 ${focused || value ? "top-1" : "top-2.5"} transform transition-all duration-300 ${
                    focused || value
                        ? "text-xs text-blue-600 -translate-y-5"
                        : "text-base text-gray-500"
                }`}
                style={{ userSelect: "none" }}
            >
                {label}
            </label>
        </div>
    );
}
