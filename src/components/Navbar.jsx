import { Link, NavLink } from "react-router-dom";
import logo from '../assets/CSF.png'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-csf-dark/95 backdrop-blur shadow-lg border-b border-csf-teal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-csf-mint hover:text-csf-bright transition-colors">
              <img src={logo} alt="cyber shakti" className="h-14 w-auto" />
              {/* Cyber Shakti<span className="text-csf-light text-lg ml-2 font-normal">Foundation</span> */}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => `transition-colors font-medium text-sm tracking-wide ${isActive ? 'text-csf-bright border-b-2 border-csf-bright pb-1' : 'text-csf-light hover:text-csf-bright'}`}>HOME</NavLink>
            <NavLink to="/members" className={({ isActive }) => `transition-colors font-medium text-sm tracking-wide ${isActive ? 'text-csf-bright border-b-2 border-csf-bright pb-1' : 'text-csf-light hover:text-csf-bright'}`}>MEMBERS</NavLink>
            <NavLink to="/events" className={({ isActive }) => `transition-colors font-medium text-sm tracking-wide ${isActive ? 'text-csf-bright border-b-2 border-csf-bright pb-1' : 'text-csf-light hover:text-csf-bright'}`}>EVENTS</NavLink>
            <NavLink to="/moments" className={({ isActive }) => `transition-colors font-medium text-sm tracking-wide ${isActive ? 'text-csf-bright border-b-2 border-csf-bright pb-1' : 'text-csf-light hover:text-csf-bright'}`}>MOMENTS</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `transition-colors font-medium text-sm tracking-wide ${isActive ? 'text-csf-bright border-b-2 border-csf-bright pb-1' : 'text-csf-light hover:text-csf-bright'}`}>CONTACT</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
