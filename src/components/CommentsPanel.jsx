import LoadingTimer from './LoadingTimer'

function CommentsPanel({ comments, onOpen, request }) {
  return (
    <details className="comments-panel" onToggle={(event) => {
      if (event.currentTarget.open) {
        onOpen()
      }
    }}>
      <summary>Comments</summary>

      <div className="comments-list">
        {request?.loading && <LoadingTimer label="Fetching comments" />}
        {request?.error && <p className="status error">{request.error}</p>}
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
