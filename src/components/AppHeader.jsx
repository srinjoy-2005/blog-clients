import { Link } from 'react-router-dom'

function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <h1>Srinjoy's Blog</h1>
      </div>

      <nav className="top-nav" aria-label="Blog sections">
        <Link to="/create">
          Create Blog
        </Link>
        <Link to="/read">
          Read Blogs
        </Link>
      </nav>
    </header>
  )
}

export default AppHeader
