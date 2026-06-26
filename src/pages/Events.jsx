export default function Events() {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-csf-dark tracking-tight mb-4">
            Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-csf-teal to-csf-mint">Events</span>
          </h1>
          <p className="text-xl text-csf-teal/80 max-w-2xl mx-auto">
            Join our upcoming awareness sessions or explore what we've accomplished.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold text-csf-dark mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-csf-bright mr-3 animate-pulse"></span>
              To Be Announced
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-csf-teal/10">
              <div className="p-8">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="space-y-3 mb-8">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                
                {/* Google Map Link Placeholder */}
                <div className="bg-csf-light p-4 rounded-xl border border-csf-mint/30 flex items-center justify-between">
                  <div className="flex items-center text-csf-teal font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Location Map
                  </div>
                  <div className="text-csf-bright text-sm font-semibold hover:underline cursor-pointer">View Map</div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-bold text-csf-dark mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-400 mr-3"></span>
              Already Held
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-100 rounded w-20"></div>
                  </div>
                  <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
