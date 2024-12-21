import React, { useState, useEffect } from 'react'; // Importing React hooks
import { Home, Info, Wrench, LineChart, BookOpen, Phone } from 'lucide-react'; 

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const navItems = [
    { icon: Home, label: 'Home' }, 
    { icon: Info, label: 'About' }, 
    { icon: Wrench, label: 'Skills' }, 
    { icon: LineChart, label: 'Projects' }, 
    { icon: BookOpen, label: 'Blogs' }, 
    { icon: Phone, label: 'Contact' }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Navigation container */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 p-4 rounded-full mx-4 my-4 shadow-lg">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left profile logo */}
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgcMEee73gyaRLrh8YAtbu5m4pqNFfTSxgg&s"
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Center navigation links for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
