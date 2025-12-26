import React from 'react';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import BackToTopButton from "./BackToTopButton";

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    {icon: <FaLinkedin/>, href: 'https://www.linkedin.com/in/michael-kick-38281620b', label: 'LinkedIn'},
    {icon: <FaInstagram/>, href: 'https://www.instagram.com/is_that_micha', label: 'Instagram'},
    {icon: <FaGithub/>, href: 'https://github.com/Michael-Kick', label: 'GitHub'},
];

const Footer: React.FC = () => {
    return (
        <footer
            className="w-full z-50 bottom-0 bg-contrast border-t border-border py-6 px-4 flex flex-col items-center justify-center gap-3 text-secondary text-center">
            <div className="flex items-center justify-center">
                {socialLinks.map((link) => (
                    <a
                        className="flex items-center justify-center px-3 text-text hover:text-primary transition-colors"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}>
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className="flex items-center justify-center text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Michael Kick. All Rights Reserved.
            </div>
            <BackToTopButton />
        </footer>
    );
};

export default Footer;
