import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main key={pathname} className="flex-1 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
