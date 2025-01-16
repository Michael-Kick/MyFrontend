import React from 'react';
import ResumeElement from "./ResumeElement";

const work_exp = [
    {
        companyName : 'Siemens AG',
        activity: 'App Development',
        description : '',
        start_date : new Date(2019, 10, 1),
        end_date : new Date(2020, 9, 1),
        country : 'Germany',
        city : 'Amberg',
        skills: [6,8]
    },
    {
        companyName : 'Projekt 29 GmbH & Co.KG',
        activity: "Backend Development",
        description : '',
        start_date : new Date(2021, 5, 1),
        end_date : new Date(2022, 10, 1),
        country : 'Germany',
        city : 'Regensburg',
        skills: [7,3,10]
    },
    {
        companyName : 'Universidade do Algarve',
        activity: "App Development",
        description : '',
        start_date : new Date(2022, 2, 1),
        end_date : new Date(2022, 8, 1),
        country : 'Portugal',
        city : 'Faro',
        skills: [2,1]
    },
    {
        companyName : 'INSYS Icom',
        activity: "Frontend Development",
        description : '',
        start_date : new Date(2023, 3, 1),
        end_date : new Date(2024, 4, 1),
        country : 'Germany',
        city : 'Regensburg',
        skills: [2,1]
    },
    {
        companyName : 'Finanz IT',
        activity: "ABAP Development",
        description : '',
        start_date : new Date(2024, 9, 1),
        end_date : new Date(2025, 3, 1),
        country : 'Germany',
        city : 'Regensburg',
        skills: [11]
    }
]



function ResumeList() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">My Resume</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Professional Experience</h2>
                <div>
                    {work_exp.map((exp,id) =>
                    <ResumeElement key={id} resumeElement={exp}  />)}
                </div>
            </section>

        </div>
    );
}

export default ResumeList;