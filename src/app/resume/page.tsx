import React from 'react';
import ResumeList from "../_components/resume/ResumeList";

function Resume() {
    return (
        <div className="flex">
            <div className="w-1/4 p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Über mich</h2>
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
    );
}

export default Resume;