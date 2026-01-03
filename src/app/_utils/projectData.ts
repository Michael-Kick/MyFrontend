export type Project = {
    slug: string;
    projectName: string;
    activity: string;
    imgUrl: string;
    companyName: string;
    description: string;
    projectSkills: number[];
    year: string;
    role: string;
    impact: string;
    highlights: string[];
    featured?: boolean;
    type?: 'professional' | 'guide';
};

export const projects: Project[] = [
    {
        slug: 'milage-2-plus-design-revision',
        projectName: 'Milage 2+ Design Revision',
        activity: 'Mobile / Frontend Development',
        imgUrl: '/images/ualg.png',
        companyName: 'Universidade do Algarve',
        description: 'Redesigned the mobile learning experience to make navigation and progress tracking clearer.',
        projectSkills: [2, 1],
        year: '2023',
        role: 'UI/UX and Frontend Developer',
        impact: 'Created a cleaner visual hierarchy that helps learners focus on the next action.',
        highlights: [
            'Rebuilt core screens with consistent spacing, typography, and component structure.',
            'Clarified navigation patterns for faster access to lessons and assignments.',
            'Improved the readability of progress states and module summaries.',
        ],
        featured: true,
    },
    {
        slug: 'cockpittool-mobile',
        projectName: 'Cockpittool Mobile',
        activity: 'Mobile Development',
        imgUrl: '/images/Siemens-logo.png',
        companyName: 'Siemens AG',
        description: 'Built a mobile dashboard for project management tracking and status visibility.',
        projectSkills: [6, 8],
        year: '2022',
        role: 'Mobile Developer',
        impact: 'Delivered on-the-go access to milestones, risks, and project health.',
        highlights: [
            'Designed mobile-first status views for quick, in-field decisions.',
            'Mapped complex project data into clear, scannable summaries.',
            'Optimized the UX for rapid check-ins and executive updates.',
        ],
    },
    {
        slug: 'chatbot-customer-support',
        projectName: 'Chatbot Customer Support',
        activity: 'AI Development',
        imgUrl: '/images/insys icom.png',
        companyName: 'Insys Icom',
        description: 'Developed an AI-powered chatbot to handle common customer support requests.',
        projectSkills: [5, 9],
        year: '2024',
        role: 'AI Developer',
        impact: 'Reduced manual triage by automating frequently asked questions.',
        highlights: [
            'Designed intent flows with fallback paths for edge-case handling.',
            'Integrated knowledge sources to improve answer consistency.',
            'Monitored responses to refine handoff to human support.',
        ],
    },
    {
        slug: 'privacysoft',
        projectName: 'Privacysoft',
        activity: 'Backend Development',
        imgUrl: '/images/logo_p29.webp',
        companyName: 'Projekt 29 GmbH & Co. KG',
        description: 'Built backend services for privacy compliance workflows and data handling.',
        projectSkills: [7, 3, 10],
        year: '2021',
        role: 'Backend Developer',
        impact: 'Streamlined compliance operations with reliable data processing.',
        highlights: [
            'Implemented APIs for policy management and compliance tracking.',
            'Improved data validation and processing reliability.',
            'Supported reporting flows for audit-ready exports.',
        ],
    },
    {
        slug: 'pivpn-guide',
        projectName: 'PiVPN Setup Guide',
        activity: 'Home Server / Networking',
        imgUrl: '',
        companyName: 'Personal Project',
        description: 'Secure remote access with WireGuard, static IPs, dynamic DNS, and router forwarding.',
        projectSkills: [],
        year: '2024',
        role: 'Author',
        impact: 'Simplified VPN setup for secure remote access to home network resources.',
        highlights: [
            'Step-by-step WireGuard configuration for optimal security.',
            'Dynamic DNS integration for consistent access.',
            'Router port forwarding best practices.',
        ],
        type: 'guide',
    },
    {
        slug: 'nextcloud-guide',
        projectName: 'Nextcloud Setup Guide',
        activity: 'Home Server / Self-Hosting',
        imgUrl: '',
        companyName: 'Personal Project',
        description: 'Self-hosted cloud storage using Docker and an external SSD for Nextcloud data.',
        projectSkills: [],
        year: '2024',
        role: 'Author',
        impact: 'Enabled private cloud storage with full data ownership and control.',
        highlights: [
            'Docker-based deployment for easy maintenance and updates.',
            'External SSD configuration for expandable storage.',
            'Security hardening and backup strategies.',
        ],
        type: 'guide',
    },
];
