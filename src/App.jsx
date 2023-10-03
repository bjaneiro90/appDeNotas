import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import { Header } from './components/header'
import { Footer } from './components/footer'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { NewNotePage } from './pages/NewNotePage'
import { NoteByID } from './pages/NoteByID'
import { Categories } from './pages/Categories'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
     <main>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/users" element={<RegisterPage/>} />
          <Route path="/users/login" element={<LoginPage/>} />
          <Route path="/notes" element={<NewNotePage/>} />
          <Route path="/notes/:id" element={<NoteByID/>} />
          <Route path="/category" element={<Categories/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      <Footer/>
     </main>
  )
}

export default App
