export default function Members() {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-csf-dark tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-csf-teal to-csf-mint">Members</span>
          </h1>
          <p className="text-xl text-csf-teal/80 max-w-2xl mx-auto">
            Meet the team and volunteers behind Cyber Shakti Foundation.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-csf-dark mb-8 text-center">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-6 shadow-lg border border-csf-teal/5 flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteers Section */}
        <div>
          <h2 className="text-3xl font-bold text-csf-dark mb-8 text-center">Volunteers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-csf-light rounded-xl p-4 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
