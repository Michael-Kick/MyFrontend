import React from 'react';
import WorkElement from "./WorkElement";
import EducationElement from "./EducationElement";

const work_exp = [
    {
        companyName: 'Siemens AG',
        activity: 'App Development',
        projectName: 'Cockpit-Tool Mobile',
        description: '',
        start_date: new Date(2019, 10, 1),
        end_date: new Date(2020, 9, 1),
        country: 'Germany',
        city: 'Amberg',
        skills: [6, 8]
    },
    {
        companyName: 'Projekt 29 GmbH & Co.KG',
        activity: "Backend Development",
        projectName: 'Privacysoft',
        description: '',
        start_date: new Date(2021, 5, 1),
        end_date: new Date(2022, 10, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [7, 3, 10]
    },
    {
        companyName: 'Universidade do Algarve',
        activity: "App/Web Development",
        projectName: 'Milage 2+ Design Revision',
        description: '',
        start_date: new Date(2022, 2, 1),
        end_date: new Date(2022, 8, 1),
        country: 'Portugal',
        city: 'Faro',
        skills: [2, 1]
    },
    {
        companyName: 'INSYS Icom',
        activity: "Frontend Development",
        projectName: 'Icom Router Management',
        description: '',
        start_date: new Date(2023, 3, 1),
        end_date: new Date(2024, 4, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [2, 1]
    },
    {
        companyName: 'Finanz IT',
        activity: "ABAP Development",
        projectName: 'VIVA Bezügeabrechnung',
        description: '',
        start_date: new Date(2024, 9, 1),
        end_date: new Date(2025, 3, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [11]
    }
]

const education = [
    {
        academicTitle: 'M. Sc. Computer Science',
        university: 'Ostbayerische Technische Hochschule Regensburg',
        thesisTitle: 'Konzeptionierung und Entwicklung eines KI-basierten Agenten für den Kundensupport',
        description: 'did some stuff there lel',
        start_date : new Date(2021, 10, 1),
        end_date : new Date(2024, 8, 1),
        country : 'Germany',
        city : 'Regensburg',
        skills: [5 ,9]
    },
    {
        academicTitle: 'B. Sc. Information Systems',
        university: 'Ostbayerische Technische Hochschule Regensburg',
        thesisTitle: 'Konzeptionierung und Entwicklung einer Authentifizierungsarchitektur im Smart Grid',
        description: 'did some stuff there lel',
        start_date : new Date(2017, 10, 1),
        end_date : new Date(2021, 8, 1),
        country : 'Germany',
        city : 'Regensburg',
        skills: [7]
    },
]


function ResumeList() {
    return (
        <div>
            <section className="mb-8">
                <div className="flex gap-20 justify-evenly">
                    <div>
                        <h2 className="text-3xl font-semibold mb-10">Professional Experience</h2>
                        {work_exp.map((exp, id) =>
                        <div className='mb-10'>
                            <WorkElement key={id} resumeElement={exp}/>
                        </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-10">Education</h2>
                        {education.map((edu, id) =>
                        <div className='mb-10'>
                            <EducationElement key={id} educationElement={edu}/>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ResumeList;