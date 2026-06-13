import LoadingTimer from './LoadingTimer'

function FullBlog({ error, loading, post }) {
  return (
    <aside className="full-blog">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected blog</p>
          <h2>Full post</h2>
        </div>
        {loading && <LoadingTimer label="Opening blog" />}
      </div>

      {error && <p className="status error">{error}</p>}

      {!loading && !post && !error && (
        <p className="status">Click a blog card to request and read the full post.</p>
      )}

      {post && !loading && (
        <article className="full-blog-card">
          <span className="blog-id">#{post.id}</span>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      )}
    </aside>
  )
}

export default FullBlog
