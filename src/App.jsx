import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Members from './pages/Members'
import Events from './pages/Events'
import Moments from './pages/Moments'
import ContactUs from './pages/ContactUs'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-csf-light font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
