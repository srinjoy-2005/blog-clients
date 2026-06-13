import LoadingTimer from './LoadingTimer'

function CommentsPanel({ comments, commentRequest, onToggle }) {
  return (
    <details className="comments-panel" onToggle={onToggle}>
      <summary>Comments</summary>

      <div className="comments-list">
        {commentRequest?.loading && <LoadingTimer label="Fetching comments" />}
        {commentRequest?.error && <p className="status error">{commentRequest.error}</p>}
        {comments?.length === 0 && <p className="muted">No comments yet.</p>}
        {comments?.map((comment) => (
          <div className="comment" key={comment.id}>
            <strong>{comment.commenterUsername}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </details>
  )
}

export default CommentsPanel
