export function Hero() {
  return (
    <section 
      className="relative h-80vh flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Connect with Top Talent & Opportunities
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join 50,000+ companies and 2 million professionals in the leading career marketplace
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta/90 transition">
            Post a Job
          </button>
          <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition border-2 border-white">
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
}