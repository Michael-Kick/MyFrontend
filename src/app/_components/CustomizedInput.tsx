import React from 'react';

interface CustomizedInputProps {
    labelText:string;
    placeholder:string;
    type:string;
    setValue: (value: string) => void;
    value?: string;
    disabled?: boolean;
}

function CustomizedInput({labelText, placeholder, type, setValue, value, disabled}:CustomizedInputProps) {
    return (
        <div className="space-y-2">
            <label className="block text-text">{labelText}</label>
            <input type={type}
                   className="bg-contrast border border-border text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 transition-colors placeholder:text-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                   placeholder={placeholder}
                   value={value}
                   onChange={(event) => setValue(event.target.value)}
                   disabled={disabled}
                   />
        </div>
    );
}

export default CustomizedInput;
