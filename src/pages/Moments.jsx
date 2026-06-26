export default function Moments() {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-csf-dark tracking-tight mb-4">
            Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-csf-teal to-csf-mint">Moments</span>
          </h1>
          <p className="text-xl text-csf-teal/80 max-w-2xl mx-auto">
            Glimpses from our campaigns, workshops, and community interactions.
          </p>
        </div>

        {/* Masonry or Grid Layout for Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Photo Placeholder */}
          <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-csf-dark/20 group-hover:bg-csf-dark/10 transition-colors"></div>
            <div className="absolute bottom-4 left-4 right-4 h-6 bg-white/50 backdrop-blur rounded w-1/2"></div>
          </div>
          
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-2xl bg-gray-200 relative overflow-hidden group hover:scale-[1.02] transition-transform">
               <div className="absolute inset-0 bg-csf-dark/10 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute flex items-center justify-center inset-0 text-gray-400 font-medium">Photo {item}</div>
            </div>
          ))}
          
          {/* Wide Photo Placeholder */}
          <div className="col-span-2 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 relative overflow-hidden group">
             <div className="absolute flex items-center justify-center inset-0 text-gray-400 font-medium">Wide Photo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
