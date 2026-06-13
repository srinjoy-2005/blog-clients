function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <h1>Srinjoy's Blog</h1>
      </div>

      <nav className="top-nav" aria-label="Blog sections">
        <a href="/create" rel="noopener noreferrer" target="_blank">
          Create Blog
        </a>
        <a href="/read" rel="noopener noreferrer" target="_blank">
          Read Blogs
        </a>
      </nav>
    </header>
  )
}

export default AppHeader
