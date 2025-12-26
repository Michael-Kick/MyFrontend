import React from 'react';

export type BlogSection = {
    title: string;
    paragraphs: Array<string | React.ReactElement>;
    bullets?: React.ReactNode[];
};

interface IBlogContent {
    blogTitle?: string;
    intro?: string;
    sections?: BlogSection[];
    eyebrow?: string;
}

const BlogContent = ({ blogTitle, intro, sections, eyebrow = 'About' }: IBlogContent) => (
    <div className="space-y-8">
        <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">{eyebrow}</p>
            <h1 className="text-4xl font-bold md:text-5xl">{blogTitle}</h1>
            {intro ? (
                <p className="max-w-2xl text-secondary leading-relaxed">{intro}</p>
            ) : null}
        </div>
        <div className="space-y-8">
            {sections?.map((section) => (
                <section key={section.title} className="space-y-3">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <div className="space-y-3 text-secondary leading-relaxed">
                        {section.paragraphs.map((paragraph, index) =>
                            typeof paragraph === 'string' ? (
                                <p key={`${section.title}-paragraph-${index}`}>{paragraph}</p>
                            ) : (
                                <div key={`${section.title}-paragraph-${index}`}>{paragraph}</div>
                            )
                        )}
                    </div>
                    {section.bullets?.length ? (
                        <ul className="space-y-2 list-disc list-inside text-secondary">
                            {section.bullets.map((item, index) => (
                                <li key={`${section.title}-bullet-${index}`}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </section>
            ))}
        </div>
    </div>
);

export default BlogContent;
