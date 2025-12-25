import React from 'react';
import BlogLayout from '../_components/BlogLayout';

const aboutMeTitle = "About Me";
const aboutMeParagraphs = [
    "Hello! I'm Michael, a passionate and driven software developer with a love for turning complex problems into elegant, user-friendly solutions. My journey into the world of technology began at a young age, tinkering with computers and trying to understand how they work. This curiosity quickly evolved into a passion for programming, which led me to pursue a formal education in computer science.",
    "Throughout my career and academic projects, I've had the opportunity to work with a diverse range of technologies, from backend systems with Java and Spring Boot to dynamic frontend applications with React and Vue.js. I thrive in collaborative environments where I can share ideas with a team and contribute to a shared vision. Whether it's building a cross-platform mobile app or developing an AI-powered chatbot, I am always eager to learn and push the boundaries of what's possible.",
    "For me, software development is not just a profession; it's a craft. It's about building things that are not only functional and efficient but also intuitive and enjoyable to use. I believe in writing clean, maintainable code and following best practices to create robust and scalable applications.",
    "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying the outdoors. I am always looking for new challenges and opportunities to grow as a developer and as an individual.",
    "Thank you for visiting my portfolio. I hope you enjoy looking at my work as much as I enjoyed creating it."
];

const About = () => {
    return (
        <div>
            <BlogLayout blogTitle={aboutMeTitle} paragraphs={aboutMeParagraphs}/>
        </div>
    );
};

export default About;
