import React from 'react';
import Link from "next/link";
import { notFound } from "next/navigation";
import SkillTag from "../../_components/projects/SkillTag";
import ButtonLink from "../../_components/ButtonLink";
import { projects } from "../../_utils/projectData";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.projectName,
        description: project.description,
        openGraph: {
            title: `${project.projectName} | Michael Kick`,
            description: project.description,
        },
    };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="w-full space-y-10">
            <Link
                href="/projects"
                prefetch={false}
                className="inline-flex items-center text-sm text-secondary transition-colors hover:text-primary"
            >
                <span aria-hidden className="mr-2">&lt;-</span>
                Back to projects
            </Link>

            <section className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80"/>
                <div className="relative space-y-4">
                    <span className="inline-flex w-fit items-center rounded-full border border-border bg-contrastDark px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">
                        {project.activity}
                    </span>
                    <h1 className="text-4xl font-bold md:text-5xl">{project.projectName}</h1>
                    <p className="text-secondary">{project.companyName}</p>
                    <p className="max-w-2xl text-secondary leading-relaxed">{project.description}</p>
                </div>
                <div className="relative mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-secondary">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-text">Year</span>
                        <span>{project.year}</span>
                    </div>
                    {project.role && (
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-text">Role</span>
                            <span>{project.role}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-text">Focus</span>
                        <span>{project.activity}</span>
                    </div>
                </div>
                {project.impact && (
                    <div className="relative mt-6 rounded-lg border border-border bg-contrastDark px-4 py-4 text-sm text-secondary">
                        <span className="font-semibold text-text">Impact:</span> {project.impact}
                    </div>
                )}
            </section>

            <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
                <div className="space-y-8">
                    {project.highlights.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold">Highlights</h2>
                            <ul className="mt-3 space-y-2 list-disc list-inside text-secondary">
                                {project.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.projectSkills.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold">Tools and skills</h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.projectSkills.map((skillNum: number, index) => (
                                    <SkillTag skillKey={skillNum} key={index} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <aside className="h-fit rounded-xl border border-border bg-contrastDark p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Project facts</p>
                    <dl className="mt-4 space-y-4 text-sm text-secondary">
                        <div>
                            <dt className="font-semibold text-text">Company</dt>
                            <dd>{project.companyName}</dd>
                        </div>
                        {project.role && (
                            <div>
                                <dt className="font-semibold text-text">Role</dt>
                                <dd>{project.role}</dd>
                            </div>
                        )}
                        <div>
                            <dt className="font-semibold text-text">Year</dt>
                            <dd>{project.year}</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-text">Focus</dt>
                            <dd>{project.activity}</dd>
                        </div>
                    </dl>
                </aside>
            </section>

            <section className="flex flex-wrap gap-3">
                <ButtonLink text="Contact me" href="/contact" />
                <ButtonLink text="Back to projects" href="/projects" />
            </section>
        </div>
    );
};

export default ProjectPage;
