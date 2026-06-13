import './App.css'
import AppHeader from './components/AppHeader'
import BlogReader from './components/BlogReader'
import CreateBlogPage from './components/CreateBlogPage'
import HomePage from './components/HomePage'

function App() {
  const route = window.location.pathname

  return (
    <main className="app-shell">
      <AppHeader />

      {route === '/create' && <CreateBlogPage />}
      {route === '/read' && <BlogReader />}
      {route !== '/create' && route !== '/read' && <HomePage />}
    </main>
  )
}

export default App
