import CommentsPanel from './CommentsPanel'

const BLOG_PREVIEW_LENGTH = 50

function getPreview(text = '') {
  if (text.length <= BLOG_PREVIEW_LENGTH) {
    return text
  }

  return `${text.slice(0, BLOG_PREVIEW_LENGTH).trim()}…`
}

function BlogCard({ comments, commentRequest, isActive, onCommentsOpen, onOpen, post }) {
  return (
    <article className={`blog-card ${isActive ? 'active' : ''}`}>
      <button className="blog-card-button" onClick={onOpen} type="button">
        <span className="blog-id">#{post.id}</span>
        <h3>{post.title}</h3>
        <p>{getPreview(post.body)}</p>
      </button>

      <CommentsPanel comments={comments} onOpen={onCommentsOpen} request={commentRequest} />
    </article>
  )
}

export default BlogCard
