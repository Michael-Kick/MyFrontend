import React from 'react';
import BlogContent from './BlogContent';

interface IBlogLayout {
    blogTitle?:string;
    paragraphs?:any[];
}

const BlogLayout = (props:IBlogLayout) => {
    return (
        <div className='bg-contrast border border-border w-full max-w-4xl mx-auto p-10 rounded-2xl shadow-md'>
           <BlogContent blogTitle={props.blogTitle} paragraphs={props.paragraphs}/>
        </div>
    );
};

export default BlogLayout;
