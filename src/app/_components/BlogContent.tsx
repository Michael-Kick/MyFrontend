import React from 'react';

interface IBlogContent {
    blogTitle?:string;
    paragraphs?:any[];
}


const BlogContent = (props:IBlogContent) => (
    <div>
        <h1 className="text-4xl font-bold">{props.blogTitle}</h1>
          <div className="mt-4 text-secondary space-y-4 leading-relaxed">
              {props.paragraphs?.map((p, id) => <p key={id}>{p}</p>)}
          </div>
    </div>

);

export default BlogContent;
