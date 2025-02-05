"use client";
import React, { useState } from 'react';
import Headline from "../_components/Headline";
import CustomizedInput from "../_components/CustomizedInput";
import CustomizedButton from '../_components/CustomizedButton';
import { POST } from '../api/send/route';


interface inputProps {
    label: string;
    placeholder:string;
    type:string;
    onChange: (val:string) => void
}

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const submitClicked = () => {
        alert(process.env)
    }


    const inputProps = [
        {
            label: "First Name",
            placeholder: "Max",
            type: "text",
            onChange: setFirstName
        },
        {
            label: "Last Name",
            placeholder: "Mustermann",
            type: "text",
            onChange: setLastName
        },
        {
            label: "Company",
            placeholder: "My Garage Business",
            type: "text",
            onChange: setCompany
        },
        {
            label: "Phone Number",
            placeholder: "123-45-678",
            type: "tel",
            onChange: setPhoneNumber
        },
        {
            label: "E-Mail address",
            placeholder: "max.mustermann@mygarage.com",
            type: "email",
            onChange: setEmail
        },
    ]

    return (
        <div>
            <Headline text="Contact Me"/>
            {inputProps.map((input:inputProps,id: number) =>
                    <CustomizedInput
                        labelText={input.label}
                        placeholder={input.placeholder}
                        type={input.type}
                        setValue={input.onChange}
                        key={id} 
                        />
                )
            }
            <div className="mb-2 mt-2">
              <label className="block mb-2 text-text">Your message</label>
              <textarea id="message" rows={3} onChange={(e) => setMessage(e.target.value)} 
              className="block p-2.5 w-full text-text bg-contrastDark border border-contrastDark rounded-lg focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>
          </div>
          <CustomizedButton text='Submit' onClick={submitClicked}/>
        </div>
    );
};

export default Contact;