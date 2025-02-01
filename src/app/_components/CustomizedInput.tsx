import React from 'react';

interface CustomizedInputProps {
    labelText:string;
    placeholder:string;
    type:string;
    onChange?: () => {};
}

function CustomizedInput({labelText, placeholder, type, onChange}:CustomizedInputProps) {
    return (
        <div className='mb-2 mt-2'>
            <label className="block mb-2 text-text">{labelText}</label>
            <input type={type}
                   className="bg-contrastDark border border-contrastDark text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                   placeholder={placeholder}
                   onChange={onChange}
                   />
        </div>
    );
}

export default CustomizedInput;