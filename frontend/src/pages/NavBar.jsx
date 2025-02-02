import { useState } from 'react';
import { CircleUser, Menu, ShoppingBag, X } from 'lucide-react';
const Topics = () => {
  return (
    <>
      <a href="#" className="text-gray-700 hover:text-blue-500">
        Home
      </a>
      <a href="#" className="text-gray-700 hover:text-blue-500">
        About
      </a>
      <a href="#" className="text-gray-700 hover:text-blue-500">
        Services
      </a>
      <a href="#" className="text-gray-700 hover:text-blue-500">
        Contact
      </a>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-2 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex  items-center text-2xl font-semibold font-serif">
          {/* <img src=''   className="h-16 w-auto"/>     */}
          <ShoppingBag size={30} />
          <span>E-Shopper</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Topics />
        </div>

        <div className="flex ">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-5 flex items-center ">
            <CircleUser size={26} />
            <span className="hidden md:inline">Sign In</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg z-40 flex flex-col space-y-4">
          <Topics />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
