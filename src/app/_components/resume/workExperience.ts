const workExp = [
    {
        companyName: 'Siemens AG',
        companyLink:"https://www.siemens.com/de/de.html",
        activity: 'App Development',
        projectName: 'Cockpit-Tool Mobile',
        description: 'did some stuff there leldid some stuff there lel',
        start_date: new Date(2019, 10, 1),
        end_date: new Date(2020, 9, 1),
        country: 'Germany',
        city: 'Amberg',
        skills: [6, 8]
    },
    {
        companyName: 'Projekt 29 GmbH & Co.KG',
        companyLink:"https://projekt29.de/",
        activity: "Backend Development",
        projectName: 'Privacysoft',
        description: 'did some stuff there leldid some stuff there leldid some stuff there leldid some stuff there lel',
        start_date: new Date(2021, 5, 1),
        end_date: new Date(2022, 10, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [7, 3, 10]
    },
    {
        companyName: 'Universidade do Algarve',
        companyLink:"https://www.ualg.pt/",
        activity: "App/Web Development",
        projectName: 'Milage 2+ Design Revision',
        description: 'did some stuff there leldid some stuff there leldid some stuff there lel',
        start_date: new Date(2022, 2, 1),
        end_date: new Date(2022, 8, 1),
        country: 'Portugal',
        city: 'Faro',
        skills: [2, 1]
    },
    {
        companyName: 'INSYS Icom',
        companyLink:"https://www.insys-icom.com/",
        activity: "Frontend Development",
        projectName: 'Icom Router Management',
        description: 'did some stuff there leldid some stuff there leldid some stuff there lel',
        start_date: new Date(2023, 3, 1),
        end_date: new Date(2024, 4, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [2, 1]
    },
    {
        companyName: 'Landesamt für Finanzen - Finanz IT',
        companyLink:"https://www.lff.bayern.de/themen/finanzit-bayern/",
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


const edu = [
    {
        academicTitle: 'Master of Science \nin \nComputer Science',
        university: 'Ostbayerische Technische Hochschule Regensburg',
        thesisTitle: 'Konzeptionierung und Entwicklung eines KI-basierten Agenten für den Kundensupport',
        description: 'did some stuff there lel',
        start_date: new Date(2021, 10, 1),
        end_date: new Date(2024, 8, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [5, 9]
    },
    {
        academicTitle: 'B. Sc. Information Systems',
        university: 'Ostbayerische Technische Hochschule Regensburg',
        thesisTitle: 'Konzeptionierung und Entwicklung einer Authentifizierungsarchitektur im Smart Grid',
        description: 'did some stuff there lel',
        start_date: new Date(2017, 10, 1),
        end_date: new Date(2021, 8, 1),
        country: 'Germany',
        city: 'Regensburg',
        skills: [7]
    },
]


const resumeObj = {
    work_exp : workExp,
    education : edu
}

export default resumeObj;