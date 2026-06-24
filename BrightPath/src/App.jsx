import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Projects from './pages/previous.jsx'
import Landing from './pages/landing.jsx'
import Layout from './pages/layout.jsx'


function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </HashRouter>
  )
}

export default App