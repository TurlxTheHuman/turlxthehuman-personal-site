import fs from 'fs';
import grayMatter from 'gray-matter';
import { BlogMetadata } from './blogMetadata';

const getBlogMetadata = (): BlogMetadata[] => {
    const files = fs.readdirSync('./app/blog/posts')
    const markdownPosts = files.filter((post) => post.endsWith('.md'))

    // Metadata
    const posts = markdownPosts.map((fileName) => {
        const post = fs.readFileSync(`./app/blog/posts/${fileName}`, 'utf-8')
        const metadata = grayMatter(post)
        return {
            title: metadata.data.title,
            summary: metadata.data.summary,
            date: metadata.data.date,
            slug: fileName.replace('.md', ''),
        };
    });

    return posts;
}

export default getBlogMetadata;