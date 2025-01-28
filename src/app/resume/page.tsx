import React from 'react';
import ResumeList from "../_components/resume/ResumeList";

function Resume() {
    return (
        <div className="grid-rows-2">
            <h1 className="text-6xl font-bold flex justify-start ps-6 pt-10 pb-10">My Resume</h1>
            <div className='flex gap-20 p-6'>
                <div className="flex flex-col max-w-72 pt-6">
                    <h2 className="text-3xl font-semibold mb-10">Über mich</h2>
                    <p className="text-gray-700 mb-4">
                        Hier kannst du deine persönlichen Details wie Name, Beruf, Kontaktinformationen und eine kurze
                        Beschreibung angeben.
                    </p>
                    <ul className="space-y-2">
                        <li><span className="font-bold">E-Mail:</span> deine.email@example.com</li>
                        <li><span className="font-bold">Telefon:</span> +49 123 456 789</li>
                        <li><span className="font-bold">Adresse:</span> Musterstraße 123, 12345 Musterstadt</li>
                        <li><span className="font-bold">LinkedIn:</span> <a href="#"
                                                                            className="text-blue-500 hover:underline">linkedin.com/in/deinprofil</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-6">
                    <ResumeList/>
                </div>
            </div>


        </div>
    );
}

export default Resume;