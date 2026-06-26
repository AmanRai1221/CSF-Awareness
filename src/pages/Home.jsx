export default function Home() {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-csf-dark tracking-tight mb-4">
            Awareness <span className="text-transparent bg-clip-text bg-gradient-to-r from-csf-teal to-csf-mint">Program</span>
          </h1>
          <p className="text-xl text-csf-teal/80 max-w-2xl mx-auto">
            Empowering individuals with the knowledge to protect themselves in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Details Skeleton */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-csf-teal/10 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-csf-light rounded-xl mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-csf-teal rounded-full opacity-50"></div>
            </div>
            <h2 className="text-2xl font-bold text-csf-dark mb-4">Details</h2>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>

          {/* Goal Skeleton */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-csf-teal/10 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-csf-light rounded-xl mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-csf-mint rounded-full opacity-50"></div>
            </div>
            <h2 className="text-2xl font-bold text-csf-dark mb-4">Goal</h2>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>

          {/* Benefits Skeleton */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-csf-teal/10 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-csf-light rounded-xl mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-csf-bright rounded-full opacity-50"></div>
            </div>
            <h2 className="text-2xl font-bold text-csf-dark mb-4">Benefits</h2>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>

          {/* Conclusion Skeleton */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-csf-teal/10 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-csf-light rounded-xl mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-csf-dark rounded-full opacity-50"></div>
            </div>
            <h2 className="text-2xl font-bold text-csf-dark mb-4">Conclusion</h2>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
