
export default function Section({mode}) {
 
  

  return (
    <div className={`flex mx-auto p-6  sm:gap-4 justify-center items-stretch ${mode?"bg-gray-700":null}`}>
      {/* Grocery Section */}
      <section className="group bg-green-200 p-6 rounded-lg shadow-sm md:flex select-none cursor-pointer w-1/2 hover:shadow-md transition-all  shadow-gray-500 ">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Groceries</h2>
          <p className="hidden md:inline text-gray-700 text-center lg:text-xl">
            Explore a variety of fresh fruits, vegetables, and daily essentials
            at great prices.
          </p>
          <button className="bg-gray-100 py-2 rounded-3xl text-green-700 font-bold px-6 mt-8 cursor-pointer">
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
          <button className="bg-gray-100 py-2 rounded-3xl text-blue-700 font-bold px-6 mt-8 cursor-pointer">
            Explore
          </button>
        </div>

        <img className=" imageRep" src="/electronic.png" alt="electronic" />
      </section>
    </div>
  );
}
