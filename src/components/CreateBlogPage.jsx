import { useState } from 'react'
import LoadingTimer from './LoadingTimer'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

function CreateBlogPage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [createdPost, setCreatedPost] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setCreatedPost(null)

    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Create request failed with ${response.status}`)
      }

      const post = await response.json()
      setCreatedPost(post)
      setTitle('')
      setBody('')
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  const isSubmitDisabled = loading || !title.trim() || !body.trim()

  return (
    <section className="form-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Create blog</p>
          <h2>Write a new post</h2>
        </div>
        {loading && <LoadingTimer label="Creating blog" />}
      </div>

      <form className="blog-form" onSubmit={handleSubmit}>
        <label>
          Blog title
          <input
            onChange={(event) => setTitle(event.target.value)}
            placeholder="A small but mighty title"
            type="text"
            value={title}
          />
        </label>

        <label>
          Blog body
          <textarea
            onChange={(event) => setBody(event.target.value)}
            placeholder="Write the full blog here..."
            rows="10"
            value={body}
          />
        </label>

        <button disabled={isSubmitDisabled} type="submit">
          Create Blog
        </button>
      </form>

      {error && <p className="status error">{error}</p>}

      {createdPost && (
        <div className="success-card">
          <p className="eyebrow">Created</p>
          <h3>{createdPost.title}</h3>
          <p>Blog #{createdPost.id} is saved. Tiny fireworks, tasteful volume.</p>
          <a href="/read" rel="noopener noreferrer" target="_blank">
            Open reader
          </a>
        </div>
      )}
    </section>
  )
}

export default CreateBlogPage
