import { useEffect, useMemo, useState } from 'react'
import LoadingTimer from './LoadingTimer'
import BlogCard from './BlogCard'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

function ReadBlogsPage() {
  const [posts, setPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(true)
  const [postsError, setPostsError] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)
  const [selectedPostLoading, setSelectedPostLoading] = useState(false)
  const [selectedPostError, setSelectedPostError] = useState('')
  const [commentsByPostId, setCommentsByPostId] = useState({})
  const [commentRequests, setCommentRequests] = useState({})

  useEffect(() => {
    let ignore = false

    async function fetchPosts() {
      setPostsLoading(true)
      setPostsError('')

      try {
        const response = await fetch(`${API_BASE_URL}/posts`)

        if (!response.ok) {
          throw new Error(`Posts request failed with ${response.status}`)
        }

        const postList = await response.json()

        if (!ignore) {
          setPosts(Array.isArray(postList) ? postList : [])
        }
      } catch (error) {
        if (!ignore) {
          setPostsError(error.message)
        }
      } finally {
        if (!ignore) {
          setPostsLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      ignore = true
    }
  }, [])

  const selectedPostId = selectedPost?.id

  const sortedPosts = useMemo(
    () => [...posts].sort((firstPost, secondPost) => secondPost.id - firstPost.id),
    [posts],
  )

  async function fetchFullPost(postId) {
    setSelectedPostLoading(true)
    setSelectedPostError('')

    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}`)

      if (!response.ok) {
        throw new Error(`Blog request failed with ${response.status}`)
      }

      const post = await response.json()
      setSelectedPost(post)
    } catch (error) {
      setSelectedPostError(error.message)
    } finally {
      setSelectedPostLoading(false)
    }
  }

  async function fetchComments(postId) {
    if (commentsByPostId[postId] || commentRequests[postId]?.loading) {
      return
    }

    setCommentRequests((currentRequests) => ({
      ...currentRequests,
      [postId]: { loading: true, error: '' },
    }))

    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`)

      if (!response.ok) {
        throw new Error(`Comments request failed with ${response.status}`)
      }

      const comments = await response.json()
      setCommentsByPostId((currentComments) => ({
        ...currentComments,
        [postId]: Array.isArray(comments) ? comments : [],
      }))
      setCommentRequests((currentRequests) => ({
        ...currentRequests,
        [postId]: { loading: false, error: '' },
      }))
    } catch (error) {
      setCommentRequests((currentRequests) => ({
        ...currentRequests,
        [postId]: { loading: false, error: error.message },
      }))
    }
  }

  return (
    <>
      <section className="reader-layout">
        <div className="section-heading">
          <div>
            <p className="eyebrow">All blogs</p>
            <h2>Latest posts</h2>
          </div>
          {postsLoading && <LoadingTimer label="Fetching blogs" />}
        </div>

        {postsError && <p className="status error">{postsError}</p>}

        {!postsLoading && !postsError && sortedPosts.length === 0 && (
          <p className="status">No blogs found yet.</p>
        )}

        <div className="blog-grid">
          {sortedPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              isActive={selectedPostId === post.id}
              commentsByPostId={commentsByPostId}
              commentRequests={commentRequests}
              onSelectPost={fetchFullPost}
              onToggleComments={fetchComments}
            />
          ))}
        </div>
      </section>

      <aside className="full-blog">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected blog</p>
            <h2>Full post</h2>
          </div>
          {selectedPostLoading && <LoadingTimer label="Opening blog" />}
        </div>

        {selectedPostError && <p className="status error">{selectedPostError}</p>}

        {!selectedPostLoading && !selectedPost && !selectedPostError && (
          <p className="status">Click a blog card to request and read the full post.</p>
        )}

        {selectedPost && !selectedPostLoading && (
          <article className="full-blog-card">
            <span className="blog-id">#{selectedPost.id}</span>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
          </article>
        )}
      </aside>
    </>
  )
}

export default ReadBlogsPage
