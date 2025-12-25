"use client";
import Link from 'next/link';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import {useState, useEffect} from 'react';

interface SocialLink {
    icon: React.ReactNode;
    href: string;
}

const socialLinks: SocialLink[] = [
    {icon: <FaLinkedin/>, href: 'https://www.linkedin.com/in/michael-kick-38281620b'},
    {icon: <FaInstagram/>, href: 'https://www.instagram.com/is_that_micha'},
    {icon: <FaGithub/>, href: 'https://github.com/Michael-Kick'},
];

const Footer: React.FC = () => {
    const [showToTopButton, setShowToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowToTopButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer
            className="w-full z-50 bottom-0 bg-contrast border-t border-border py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-secondary">
            <div className="flex items-center">
                {socialLinks.map((link) => (
                    <Link
                        className="flex items-center justify-center px-3 text-text hover:text-primary transition-colors"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {link.icon}
                    </Link>
                ))}
            </div>
            <div className="flex items-center text-sm sm:text-base text-center">
                &copy; {new Date().getFullYear()} Michael Kick. All Rights Reserved.
            </div>
            {showToTopButton && (
                <button
                    className="sm:ml-4 px-3 py-1.5 rounded-md bg-primary text-onPrimary text-sm font-medium transition-colors hover:bg-primaryHover"
                    onClick={scrollToTop}>
                    Back to top
                </button>
            )}
        </footer>
    );
};

export default Footer;
