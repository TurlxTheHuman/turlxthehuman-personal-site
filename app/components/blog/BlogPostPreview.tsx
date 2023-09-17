import { BlogMetadata } from "./blogMetadata"

const PostPreviews = (props: BlogMetadata) => {
    return (
        <div className='blog_preview_card'>
        <a href={`/blog/${props.slug}`}>
            <h2>{props.title}</h2>
        </a>
            <li>{props.date}</li>
            <p>{props.summary}</p>
            <a className="button" href={'/blog/'+ props.slug}>Read More <span className="fa fa-arrow-right" /></a>
    </div>
    )
}

export default PostPreviews