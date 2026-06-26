import { Link } from 'react-router-dom';
import logo from '../assets/CSF.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-csf-dark text-csf-light py-12 relative border-t border-csf-teal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Cyber Shakti Foundation" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-csf-light/80 leading-relaxed max-w-sm">
              Pioneering the future of digital security. Our mission is to
              secure the world's data through innovation and education.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="md:pl-12">
            <h3 className="text-lg font-semibold text-white mb-6">LINKS</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">Home</Link></li>
              <li><Link to="/members" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">Member</Link></li>
              <li><Link to="/events" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">Event</Link></li>
              <li><Link to="/moments" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">Moments</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">CONTACT US</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-csf-bright mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-sm text-csf-light/80 leading-relaxed">
                  8-12-97/2 TNGO's Colony, Hyderabad,<br/>
                  Telangana 500077, India
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-csf-bright mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@cybershaktifoundation.org" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">
                  info@cybershaktifoundation.org
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-csf-bright mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:cybershaktifoundation@gmail.com" className="text-sm text-csf-light/80 hover:text-csf-bright transition-colors">
                  cybershaktifoundation@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-csf-light/60 mb-6 md:mb-0">
            © {new Date().getFullYear()} Cyber Shakti Foundation. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-6 pr-4 md:pr-16">
            <a href="#" className="text-csf-light/60 hover:text-csf-bright transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-csf-light/60 hover:text-csf-bright transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-csf-light/60 hover:text-csf-bright transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.001-2.64-.103-5.116-1.972-6.985-1.869-1.868-4.351-2.898-6.987-2.898-5.448 0-9.891 4.444-9.893 9.892-.001 2.222.651 4.321 1.88 6.136l-1.144 4.187 4.281-1.122zm7.982-10.02c-.313-.674-.643-.687-.938-.7-.282-.012-.605-.012-.919-.012-.313 0-.824.117-1.255.586-.431.469-1.646 1.605-1.646 3.914 0 2.308 1.685 4.542 1.919 4.855.235.312 3.308 5.048 8.01 7.077 1.12.482 1.993.771 2.673.987.49.155 1.803.136 2.477.082.686-.055 2.215-.905 2.529-1.782.313-.878.313-1.63.22-1.782-.094-.156-.353-.25-.824-.484z"/></svg>
        </a>
        <button onClick={scrollToTop} className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </footer>
  );
}
