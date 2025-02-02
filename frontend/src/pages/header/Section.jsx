import { useState } from 'react';

export default function Section() {
  const [T, setT] = useState('');
  const [C, setC] = useState('');
  const SubmitFetch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/post');
      if (!response.ok) {
        // Handle non-2xx status codes
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex mx-auto p-6  sm:gap-4 justify-center items-stretch">
      {/* Grocery Section */}
      <section className="group bg-green-200 p-6 rounded-lg shadow-sm md:flex select-none cursor-pointer w-1/2 hover:shadow-md transition-all  shadow-gray-500">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Groceries</h2>
          <p className="hidden md:inline text-gray-700 text-center lg:text-xl">
            Explore a variety of fresh fruits, vegetables, and daily essentials
            at great prices.
          </p>
          <button className="bg-gray-100 py-2 rounded-3xl text-green-700 font-bold px-6 mt-8 ">
            Explore
          </button>
        </div>
        <img className="imageRep" src="/grocery.png" alt="grocery" />
      </section>

      {/* Electronics Section */}
      <section className="bg-blue-200 p-6 rounded-lg shadow-sm md:flex select-none cursor-pointer w-1/2 hover:shadow-md transition-all shadow-gray-500" >
        <div className="flex flex-col justfy-center items-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 ">Electronics</h2>
          <p className="hidden md:inline text-gray-700 text-center lg:text-xl">
            Discover the latest gadgets, smartphones, and home appliances with
            top deals.
          </p>
          <button className="bg-gray-100 py-2 rounded-3xl text-blue-700 font-bold px-6 mt-8 ">
            Explore
          </button>
        </div>

        <img className=" imageRep" src="/electronic.png" alt="electronic" />
      </section>
    </div>
  );
}
