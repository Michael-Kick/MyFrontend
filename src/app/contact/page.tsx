"use client";
import React, {useState} from 'react';
import Headline from "../_components/Headline";
import CustomizedInput from "../_components/CustomizedInput";
import CustomizedButton from '../_components/CustomizedButton';


interface inputProps {
    label: string;
    placeholder: string;
    type: string;
    onChange: (val: string) => void,
    error?: string;
}

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [topic, setTopic] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    async function submitClicked() {
        let newErrors: { [key: string]: string } = {};

        // Validation
        if (!firstName) newErrors.firstName = "First Name is required.";
        if (!lastName) newErrors.lastName = "Last Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!topic) newErrors.topic = "Subject is required.";
        if (!message) newErrors.message = "Message is required.";

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        // If errors exist, update state and return early
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear errors if validation passes

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName,
                message: message,
                subject: topic,
            })
        });

        const data = await response.json();
        console.log(data);
    }


    const inputProps = [
        {
            label: "First Name*",
            placeholder: "John",
            type: "text",
            onChange: setFirstName,
            error: errors.firstName,
        },
        {
            label: "Last Name*",
            placeholder: "Doe",
            type: "text",
            onChange: setLastName,
            error: errors.lastName,
        },
        {
            label: "Company",
            placeholder: "Acme Inc.",
            type: "text",
            onChange: setCompany,
        },
        {
            label: "Phone Number",
            placeholder: "+1 234 567 890",
            type: "tel",
            onChange: setPhoneNumber,
        },
        {
            label: "Email*",
            placeholder: "john.doe@example.com",
            type: "email",
            onChange: setEmail,
            error: errors.email,
        },
        {
            label: "Subject*",
            placeholder: "New Project Idea",
            type: "text",
            onChange: setTopic,
            error: errors.topic,
        },
    ];

    return (
        <div>
            <Headline text="Contact Me"/>
            {inputProps.map((input: inputProps, id: number) => (
                <div key={id}>
                    <CustomizedInput
                        labelText={input.label}
                        placeholder={input.placeholder}
                        type={input.type}
                        setValue={input.onChange}
                        key={id}
                    />
                    {input.error && <p className="text-danger text-sm">{input.error}</p>}
                </div>)
            )
            }
            <div className="mb-2 mt-2">
                <label className="block mb-2 text-text">Message*</label>
                <textarea id="message" rows={3} onChange={(e) => setMessage(e.target.value)}
                          className="block p-2.5 w-full text-text bg-contrast border border-border rounded-lg focus:ring-primary focus:border-primary transition-colors placeholder:text-secondary/80"
                          placeholder="Leave a comment..."></textarea>
                {errors.message && <p className="text-danger text-sm">{errors.message}</p>}
            </div>
            <CustomizedButton text='Submit' onClick={submitClicked}/>
        </div>
    );
};

export default Contact;
