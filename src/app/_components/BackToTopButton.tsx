"use client";
import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isTicking = false;

        const updateVisibility = () => {
            setIsVisible(window.scrollY > 200);
            isTicking = false;
        };

        const handleScroll = () => {
            if (!isTicking) {
                isTicking = true;
                window.requestAnimationFrame(updateVisibility);
            }
        };

        updateVisibility();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex items-center justify-center">
            <button
                className="px-3 py-1.5 rounded-md bg-primary text-onPrimary text-sm font-medium transition-colors hover:bg-primaryHover"
                onClick={scrollToTop}>
                Back to top
            </button>
        </div>
    );
};

export default BackToTopButton;
