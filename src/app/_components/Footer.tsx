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
            className="w-full z-50 bottom-0 bg-contrastDark h-12 flex justify-center">
            <div className="flex items-stretch">
                {socialLinks.map((link) => (
                    <Link
                        className="flex items-center justify-center"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {link.icon}
                    </Link>
                ))}
            </div>
            <div className="flex items-stretch">
                <div className="flex items-center justify-center">
                    &copy; {new Date().getFullYear()} Michael Kick. All Rights Reserved.
                </div>
            </div>
            {showToTopButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    Zurück nach oben
                </button>
            )}
        </footer>
    );
};

export default Footer;