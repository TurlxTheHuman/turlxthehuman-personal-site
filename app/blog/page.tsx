
import { useState, useEffect } from 'react'
import '../assets/css/blog.css'
import getBlogMetadata from '../components/blog/blogGetMetadata'
import PostPreviews from '../components/blog/BlogPostPreview';

const Blog = () => {
    const postData = getBlogMetadata();
    const postPreviews = postData.map((post) => (
        <PostPreviews
            key={post.slug}
            slug={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
        />
    ))
    return (
        <section id='blog_page'>
            <h1>Blog Posts</h1>
            <p>Personal projects that I wish to document about.</p>

            <div className='divider' />

            <div className='dual_grid'>
                {postPreviews}
            </div>
        </section>
    )
}

export default Blog