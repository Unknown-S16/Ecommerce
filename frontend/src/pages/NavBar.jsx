import { useState } from 'react';
import * as Lucide from 'lucide-react';


const Navbar = ({ mode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const current = mode ? "bg-gray-900 text-gray-400 font-bold": "text-gray-500 bg-white font-bold"; 
  const hoverEffect = mode ? "hover:text-white hover:border-white transistion-all ease-in-out duration-100 border-transparent border-l-4 pl-1.5":  "hover:text-black hover:border-black transistion-all ease-in-out duration-100 border-transparent border-l-4 pl-1.5";

  const Topics = () => {
  
    return (
      <>
        <a href="#" className={`${current} ${hoverEffect}`}>
          Home
        </a>
        <a href="#" className={`${current} ${hoverEffect}`}>
          About
        </a>
        <a href="#" className={`${current} ${hoverEffect}`}>
          Services
        </a>
        <a href="#" className={`${current} ${hoverEffect}`}>
          Contact
        </a>
      </>
    );
  };
  

  const ToggleTheme = () => {
    setMode(!mode)
  }
  return (
    <nav className={`${mode ? "bg-gray-900 text-white" : "bg-white"} shadow-md p-2 px-6`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex  items-center text-2xl font-semibold font-serif">
          <Lucide.ShoppingBag size={30} />
          <div className='hide400'>E-Shopper</div>
        </div>

        <div className={`hidden md:flex space-x-6 `}>
          <Topics />
        </div>

        <div className="flex gap-2">
          <button onClick={ToggleTheme} className={`flex gap-1 items-center rounded-2xl ${mode?"bg-gray-700":"bg-gray-200"} px-4 m-0`}>  {mode ? <><Lucide.Sun size={15} /><Lucide.ToggleRight size={30} /></> : <><Lucide.Moon size={15} /><Lucide.ToggleLeft size={30} /></>}
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Lucide.X size={26} /> : <Lucide.Menu size={26} />}
          </button>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl gap-2 ml-5 flex items-center ">
            <Lucide.CircleUser size={26} />
            <span className="hidden md:inline">Sign In</span>
          </button>
        </div>
      </div>


      {isOpen && (
        <div className={`absolute top-16 left-0 w-full p-4 shadow-lg z-40 flex flex-col space-y-4 ${current} md:hidden`}>
          <Topics />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
