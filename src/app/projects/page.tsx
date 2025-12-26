import React from 'react';
import ProjectList from "../_components/projects/ProjectList";
import ProjectCard from "../_components/projects/ProjectCard";
import ButtonLink from "../_components/ButtonLink";
import { projects } from "../_utils/projectData";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore my portfolio of software development projects including mobile apps, AI solutions, and full-stack applications.',
    openGraph: {
        title: 'Projects | Michael Kick',
        description: 'Explore my portfolio of software development projects including mobile apps, AI solutions, and full-stack applications.',
    },
};

const Projects = () => {
    const featuredProject = projects.find((project) => project.featured) ?? projects[0];
    const moreProjects = projects.filter((project) => project.slug !== featuredProject.slug);

    return (
        <div className="w-full space-y-12">
            <section className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80"/>
                <div className="relative max-w-3xl space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Projects</p>
                    <h1 className="text-4xl font-bold md:text-5xl">Selected work that balances clarity and scale.</h1>
                    <p className="text-secondary leading-relaxed">
                        A curated set of projects spanning mobile UX, AI-assisted support, and backend platforms.
                        Each case study focuses on measurable clarity, reliability, and maintainable systems.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ButtonLink text="Contact me" href="/contact" />
                        <ButtonLink text="View resume" href="/resume" />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">Featured project</h2>
                    <p className="text-secondary">The most representative project to start with.</p>
                </div>
                <ProjectCard project={featuredProject} variant="featured" />
            </section>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">More projects</h2>
                    <p className="text-secondary">A wider look at the range of work and technical depth.</p>
                </div>
                <ProjectList projects={moreProjects} />
            </section>
        </div>
    );
};

export default Projects;
