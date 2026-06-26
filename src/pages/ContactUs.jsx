import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden text-gray-700">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Visit Us */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-blue-500/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-csf-light flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-csf-dark mb-4 tracking-wide">Visit Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              8-12-97/2 TNGO's Colony, opp.<br/>
              Shama Tent House, Lane,<br/>
              Hyderabad, Telangana 500077<br/>
              India
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-cyan-500/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-csf-light flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-csf-dark mb-4 tracking-wide">Email Us</h3>
            <a href="mailto:info@cybershaktifoundation.org" className="text-sm text-cyan-600 hover:text-cyan-500 transition-colors mb-3 block font-medium">
              info@cybershaktifoundation.org
            </a>
            <a href="mailto:cybershaktifoundation@gmail.com" className="text-sm text-cyan-600 hover:text-cyan-500 transition-colors block font-medium">
              cybershaktifoundation@gmail.com
            </a>
          </div>

          {/* Follow Us */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-purple-500/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-csf-light flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12c0 1.2-1 2-2 2s-2-.8-2-2 1-2 2-2 2 .8 2 2zM15 12c0 1.2-1 2-2 2s-2-.8-2-2 1-2 2-2 2 .8 2 2zM9 12c0 1.2-1 2-2 2s-2-.8-2-2 1-2 2-2 2 .8 2 2zM21 21H3V3h18v18zM23 1H1v22h22V1z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-csf-dark mb-6 tracking-wide">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                {/* LinkedIn */}
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                {/* Instagram */}
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                {/* YouTube */}
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-csf-dark mb-3 tracking-wider">
            CONNECT <span className="text-purple-600">WITH US</span>
          </h2>
          <p className="text-sm text-gray-600">Stay updated with our latest activities on social media</p>
        </div>

        {/* Social Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* LinkedIn */}
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-[#0077b5]/50 transition-colors">
            <svg className="w-8 h-8 text-[#0077b5] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <h3 className="text-lg font-bold text-csf-dark mb-2">LinkedIn</h3>
            <p className="text-xs text-gray-600 mb-6 flex-grow">Professional updates & insights</p>
            <a href="#" className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[#0077b5] hover:bg-gray-50 transition-colors text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Follow Us
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-[#e1306c]/50 transition-colors">
            <svg className="w-8 h-8 text-[#e1306c] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <h3 className="text-lg font-bold text-csf-dark mb-2">Instagram</h3>
            <p className="text-xs text-gray-600 mb-6 flex-grow">Event highlights & moments</p>
            <a href="#" className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[#e1306c] hover:bg-gray-50 transition-colors text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Follow Us
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-[#25D366]/50 transition-colors">
            <svg className="w-8 h-8 text-[#25D366] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.001-2.64-.103-5.116-1.972-6.985-1.869-1.868-4.351-2.898-6.987-2.898-5.448 0-9.891 4.444-9.893 9.892-.001 2.222.651 4.321 1.88 6.136l-1.144 4.187 4.281-1.122zm7.982-10.02c-.313-.674-.643-.687-.938-.7-.282-.012-.605-.012-.919-.012-.313 0-.824.117-1.255.586-.431.469-1.646 1.605-1.646 3.914 0 2.308 1.685 4.542 1.919 4.855.235.312 3.308 5.048 8.01 7.077 1.12.482 1.993.771 2.673.987.49.155 1.803.136 2.477.082.686-.055 2.215-.905 2.529-1.782.313-.878.313-1.63.22-1.782-.094-.156-.353-.25-.824-.484z"/></svg>
            <h3 className="text-lg font-bold text-csf-dark mb-2">WhatsApp</h3>
            <p className="text-xs text-gray-600 mb-6 flex-grow">Instant updates & community</p>
            <a href="#" className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[#25D366] hover:bg-gray-50 transition-colors text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.001-2.64-.103-5.116-1.972-6.985-1.869-1.868-4.351-2.898-6.987-2.898-5.448 0-9.891 4.444-9.893 9.892-.001 2.222.651 4.321 1.88 6.136l-1.144 4.187 4.281-1.122zm7.982-10.02c-.313-.674-.643-.687-.938-.7-.282-.012-.605-.012-.919-.012-.313 0-.824.117-1.255.586-.431.469-1.646 1.605-1.646 3.914 0 2.308 1.685 4.542 1.919 4.855.235.312 3.308 5.048 8.01 7.077 1.12.482 1.993.771 2.673.987.49.155 1.803.136 2.477.082.686-.055 2.215-.905 2.529-1.782.313-.878.313-1.63.22-1.782-.094-.156-.353-.25-.824-.484z"/></svg>
              Join Group
            </a>
          </div>

          {/* Discord */}
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-csf-teal/10 shadow-xl hover:border-[#5865F2]/50 transition-colors">
            <svg className="w-8 h-8 text-[#5865F2] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            <h3 className="text-lg font-bold text-csf-dark mb-2">Discord</h3>
            <p className="text-xs text-gray-600 mb-6 flex-grow">Tech discussions & help</p>
            <a href="#" className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[#5865F2] hover:bg-gray-50 transition-colors text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              Join Server
            </a>
          </div>
        </div>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Quick Info */}
          <div className="bg-white rounded-xl p-8 border border-csf-teal/10 shadow-xl">
            <h3 className="text-lg font-bold text-csf-dark mb-4 flex items-center">
              <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold mr-3">i</span>
              Quick Info
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We typically respond to inquiries within 24-48 hours during business days. For urgent matters, reach out via social media.
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-xl p-8 border border-csf-teal/10 shadow-xl">
            <h3 className="text-lg font-bold text-csf-dark mb-4 flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Office Hours
            </h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex justify-between"><strong className="text-csf-dark font-medium">Mon - Fri:</strong> <span>10:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><strong className="text-csf-dark font-medium">Saturday:</strong> <span>10:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><strong className="text-csf-dark font-medium">Sunday:</strong> <span>Closed</span></li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl p-8 border border-csf-teal/10 shadow-xl">
            <h3 className="text-lg font-bold text-csf-dark mb-4 flex items-center">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3">?</span>
              FAQ
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Check our <span className="text-cyan-600 cursor-pointer hover:underline">FAQ section</span> for quick answers.
            </p>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-center hover:text-cyan-600 cursor-pointer transition-colors"><svg className="w-3 h-3 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>Membership inquiries</li>
              <li className="flex items-center hover:text-cyan-600 cursor-pointer transition-colors"><svg className="w-3 h-3 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>Event registration</li>
              <li className="flex items-center hover:text-cyan-600 cursor-pointer transition-colors"><svg className="w-3 h-3 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>Partnerships</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-csf-teal/10 shadow-xl mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-csf-dark tracking-wider mb-4">
              GET IN <span className="text-cyan-500">TOUCH</span>
            </h2>
            <p className="text-sm text-gray-600">
              Have a project in mind or want to join our programs? Send us a transmission.
            </p>
          </div>

          <form className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block text-left">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-csf-light border border-csf-teal/20 rounded-lg px-4 py-3 text-csf-dark placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block text-left">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-csf-light border border-csf-teal/20 rounded-lg px-4 py-3 text-csf-dark placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">Subject</label>
              <input 
                type="text" 
                defaultValue="General Inquiry"
                className="w-full bg-csf-light border border-csf-teal/20 rounded-lg px-4 py-3 text-csf-dark placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">Message</label>
              <textarea 
                placeholder="Enter your message..." 
                rows="6"
                className="w-full bg-csf-light border border-csf-teal/20 rounded-lg px-4 py-3 text-csf-dark placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-csf-teal to-csf-mint hover:from-csf-dark hover:to-csf-teal text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/25 tracking-wide mt-4"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
