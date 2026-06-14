function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <h1>Bloggit</h1>
      </div>

      <nav className="top-nav" aria-label="Blog sections">
        <a href="/create">
          Create Blog
        </a>
        <a href="/read">
          Read Blogs
        </a>
      </nav>
    </header>
  )
}

export default AppHeader
