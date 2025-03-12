import React from 'react';
import BlogContent from './BlogContent';

const thisisMyInhalt: string[] = [
    "tralalala",
    "lorem solo ipsum"
]

const BlogLayout = () => {
    return (
        <div className='bg-contrast w-full max-w-4xl mx-auto p-10 rounded-2xl shadow-md'>
           <BlogContent/>
        </div>
    );
};

export default BlogLayout;