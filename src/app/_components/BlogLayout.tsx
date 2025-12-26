import React from 'react';
import BlogContent, { BlogSection } from './BlogContent';
import ButtonLink from "./ButtonLink";

type QuickFact = {
    label: string;
    value: string;
};

type CallToAction = {
    text: string;
    href: string;
};

interface IBlogLayout {
    blogTitle?: string;
    intro?: string;
    sections?: BlogSection[];
    quickFacts?: QuickFact[];
    cta?: CallToAction[];
    eyebrow?: string;
}

const BlogLayout = ({ blogTitle, intro, sections, quickFacts, cta, eyebrow }: IBlogLayout) => {
    return (
        <div className="relative bg-contrast border border-border w-full max-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-md overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80" />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
                <BlogContent blogTitle={blogTitle} intro={intro} sections={sections} eyebrow={eyebrow} />
                {quickFacts?.length ? (
                    <aside className="h-fit rounded-xl border border-border bg-contrastDark p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Quick facts</p>
                        <dl className="mt-4 space-y-4 text-sm text-secondary">
                            {quickFacts.map((fact) => (
                                <div key={fact.label}>
                                    <dt className="font-semibold text-text">{fact.label}</dt>
                                    <dd>{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                ) : null}
            </div>
            {cta?.length ? (
                <div className="relative mt-10 flex flex-wrap gap-3">
                    {cta.map((item) => (
                        <ButtonLink key={item.text} text={item.text} href={item.href} />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default BlogLayout;
