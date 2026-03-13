import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home        from './pages/Home'
import About       from './pages/About'
import Expertise   from './pages/Expertise'
import Projects    from './pages/Projects'
import Education   from './pages/Education'
import Awards      from './pages/Awards'
import Contact     from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index          element={<Home />} />
          <Route path="about"   element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="projects"  element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="awards"    element={<Awards />} />
          <Route path="contact"   element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
