import { useState } from 'react'
import Logo from '../Logo';

export default function Navbar() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    console.log('test')
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  return (
    <>
    <nav className="bg-custom-red-800 p-4 w-full fixed">
        <div className="flex items-center justify-between">
                
          <div className="flex items-center">
          <Logo /> 
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Home</a>
            <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
            <a href="#" className="text-white hover:text-gray-400">Services</a>
          </div>
          
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} id="menu-btn" className="text-white focus:outline-none">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
                </button>
            </div>
    
        
    </div>
    
    <div id="mobile-menu" className={`md:hidden bg-custom-red-800 mt-4 ${isMobileMenuVisible ? '' : 'hidden'}`}>
      <a href="#" className="block text-white hover:text-gray-400 p-2 border-b border-[rgba(255,255,255,0.3)] transition">Home</a>
      <a href="#" className="block text-white hover:text-gray-400 p-2 border-b border-[rgba(255,255,255,0.3)] transition">Contact Us</a>
      <a href="#" className="block text-white hover:text-gray-400 p-2">Services</a>
    </div>
    </nav>
    </>
  )
}
