import { useState, useEffect } from 'react'; // Importing React hooks
import { Menu, X, Briefcase } from 'lucide-react'; // Importing icons from lucide-react

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isScrolled, setIsScrolled] = useState(false); // Scroll detection state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Update state based on scroll position
    };
    window.addEventListener('scroll', handleScroll); // Add scroll listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-black/70 shadow-md' : 'bg-black/40'
      }`}
      style={{ borderRadius: '0 0 20px 20px' }} // Rectangle style with rounded bottom corners
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Briefcase className="h-8 w-8 text-white" />
            <span className="text-2xl font-semibold text-white">JobBoard</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-primary transition">
              Post Jobs
            </a>
            <a href="#" className="text-white hover:text-primary transition">
              Find Jobs
            </a>
            <a href="#" className="text-white hover:text-primary transition">
              Pricing
            </a>
            <button className="bg-primary text-white px-4 py-2 rounded-md shadow hover:bg-primary-dark transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-black/70 text-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 py-4">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                Post Jobs
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                Find Jobs
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                Pricing
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-center bg-primary rounded-md hover:bg-primary-dark transition"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}