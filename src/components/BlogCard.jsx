import CommentsPanel from './CommentsPanel'

const BLOG_PREVIEW_LENGTH = 140

function getPreview(text = '') {
  if (text.length <= BLOG_PREVIEW_LENGTH) {
    return text
  }

  return `${text.slice(0, BLOG_PREVIEW_LENGTH).trim()}…`
}

function BlogCard({ post, isActive, commentsByPostId, commentRequests, onSelectPost, onToggleComments }) {
  const comments = commentsByPostId[post.id]
  const commentRequest = commentRequests[post.id]

  return (
    <article className={`blog-card ${isActive ? 'active' : ''}`}>
      <button
        className="blog-card-button"
        onClick={() => onSelectPost(post.id)}
        type="button"
      >
        <span className="blog-id">#{post.id}</span>
        <h3>{post.title}</h3>
        <p>{getPreview(post.body)}</p>
      </button>

      <CommentsPanel
        postId={post.id}
        comments={comments}
        commentRequest={commentRequest}
        onToggle={(event) => {
          if (event.currentTarget.open) {
            onToggleComments(post.id)
          }
        }}
      />
    </article>
  )
}

export default BlogCard
