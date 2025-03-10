import React from 'react';

interface CustomizedInputProps {
    labelText:string;
    placeholder:string;
    type:string;
    setValue: (value: string) => void;
}

function CustomizedInput({labelText, placeholder, type, setValue}:CustomizedInputProps) {
    return (
        <div className='mb-2 mt-2'>
            <label className="block mb-2 text-text">{labelText}</label>
            <input type={type}
                   className="bg-contrastDark border border-contrastDark text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                   placeholder={placeholder}
                   onChange={(event) => setValue(event.target.value)}

                   />
        </div>
    );
}

export default CustomizedInput;