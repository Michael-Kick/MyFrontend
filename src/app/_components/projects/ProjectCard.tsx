import React from 'react';
import SkillTag from "./SkillTag";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../_utils/projectData";

interface ProjectCardProps {
    project: Project;
    variant?: 'default' | 'featured';
}

const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
    const isFeatured = variant === 'featured';
    const logoSize = isFeatured ? 'w-28 h-16' : 'w-24 h-12';
    const titleSize = isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl';
    const containerClasses = [
        'relative h-full rounded-xl border bg-contrast p-6 md:p-7 flex flex-col gap-4 shadow-sm transition-colors transition-transform duration-200',
        'group-hover:bg-contrastDark group-hover:-translate-y-1',
        isFeatured ? 'border-primary shadow-md' : 'border-border',
    ].join(' ');

    return (
        <Link
            href={`/projects/${project.slug}`}
            prefetch={false}
            className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
            <article className={containerClasses}>
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <span className="inline-flex w-fit items-center rounded-full border border-border bg-contrastDark px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">
                            {project.activity}
                        </span>
                        <h3 className={`${titleSize} font-bold`}>{project.projectName}</h3>
                        <p className="text-secondary">{project.companyName}</p>
                    </div>
                    <div className={`flex items-center justify-center rounded-md border border-border bg-contrastDark ${logoSize}`}>
                        <Image
                            src={project.imgUrl}
                            alt={`${project.companyName} logo`}
                            width={140}
                            height={80}
                            quality={80}
                            sizes={isFeatured ? "112px" : "96px"}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                </div>
                <p className="text-secondary leading-relaxed">{project.description}</p>
                <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
                    <div className="flex items-center gap-2">
                        <dt className="font-semibold text-text">Year</dt>
                        <dd>{project.year}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                        <dt className="font-semibold text-text">Role</dt>
                        <dd>{project.role}</dd>
                    </div>
                </dl>
                <div className="rounded-lg border border-border bg-contrastDark px-4 py-3 text-sm text-secondary">
                    <span className="font-semibold text-text">Impact:</span> {project.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.projectSkills.map((skillNum: number, index) => (
                        <SkillTag skillKey={skillNum} key={index} />
                    ))}
                </div>
                <div className="mt-auto inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-primaryHover">
                    View case study <span className="ml-1" aria-hidden>-&gt;</span>
                </div>
            </article>
        </Link>
    );
};

export default ProjectCard;
