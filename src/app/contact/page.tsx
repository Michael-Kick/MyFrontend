"use client";
import React from 'react';
import Headline from "../_components/Headline";
import CustomizedInput from "../_components/CustomizedInput";
import CustomizedButton from '../_components/CustomizedButton';


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

    const onNameChange = () => {
        
    }

    const submitClicked = () => {
        alert("submit")
    }


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
            <div className="mb-2 mt-2">
              <label className="block mb-2 text-text">Your message</label>
              <textarea id="message" rows={3} className="block p-2.5 w-full text-text bg-contrastDark border border-contrastDark rounded-lg focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>
          </div>
          <CustomizedButton text='Submit' onClick={submitClicked}/>
        </div>
    );
};

export default Contact;