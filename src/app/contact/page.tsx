import React from 'react';
import Headline from "../_components/Headline";
import CustomizedInput from "../_components/CustomizedInput";


interface inputProps {
    label: string;
    placeholder:string;
    type:string;
}

const inputProps = [
    {
        label: "First Name",
        placeholder: "Max",
        type: "text",
    },
    {
        label: "Last Name",
        placeholder: "Mustermann",
        type: "text",
    },
    {
        label: "Company",
        placeholder: "My Garage Business",
        type: "text",
    },
    {
        label: "Phone Number",
        placeholder: "123-45-678",
        type: "tel",
    },
    {
        label: "E-Mail address",
        placeholder: "max.mustermann@mygarage.com",
        type: "email",
    },
]



const Contact = () => {
    return (
        <div>
            <Headline text="Contact Me"/>
            {inputProps.map((input:inputProps,id ) =>
                    <CustomizedInput
                        labelText={input.label}
                        placeholder={input.placeholder}
                        type={input.type}
                        key={id} />
                )
            }
        </div>
    );
};

export default Contact;