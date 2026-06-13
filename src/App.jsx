import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AppHeader from './components/AppHeader'
import CreateBlogPage from './components/CreateBlogPage'
import ReadBlogsPage from './components/ReadBlogsPage'

function App() {
  return (
    <main className="app-shell">
      <AppHeader />

      <Routes>
        <Route path="/" element={<Navigate to="/read" replace />} />
        <Route path="/read" element={<ReadBlogsPage />} />
        <Route path="/create" element={<CreateBlogPage />} />
      </Routes>
    </main>
  )
}

export default App
