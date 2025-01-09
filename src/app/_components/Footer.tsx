"use client";
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface SocialLink {
    icon: React.ReactNode;
    href: string;
}

const socialLinks: SocialLink[] = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/michael-kick-38281620b' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/is_that_micha' },
    { icon: <FaGithub />, href: 'https://github.com/Michael-Kick' },
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
        <footer>
            <div className="social-links">
                {socialLinks.map((link) => (
                    <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </Link>
                ))}
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Michael Kick. All Rights Reserved.
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