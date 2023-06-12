import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import grayMatter from 'gray-matter';
import getBlogMetadata from '../../components/blog/blogGetMetadata';

import '../../assets/css/blog.css'

const getContent = (post: string) => {
    const content = fs.readFileSync(`./app/blog/posts/${post}.md`, 'utf-8')
    const matterResult = grayMatter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getBlogMetadata();
    return posts.map((post) => ({
        title: post.title
    }))
    //return [{ slug: 'geodns' }] 
}

const PostPage = (props: any) => {
    const postName = props.params.slug
    const post = getContent(postName)
    return (
        <div id='blog_post'>
            <h1>{post.data.title}</h1>
            <p className='date'>{post.data.date}</p>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
}

export default PostPage