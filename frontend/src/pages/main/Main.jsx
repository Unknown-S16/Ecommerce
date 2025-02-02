import { useEffect, useRef, useState } from "react";
import Groceries from "../sections/G-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Main() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  let isDragging = false, startX, scrollLeft;

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });

        // If reached the end, reset to start
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll on button click
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 250, behavior: "smooth" });
    }
  };

  // Drag to scroll
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  const dragScroll = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full" 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Title */}
      <div className="px-6 py-2 bg-red-400 border border-red-600 w-full">
        <h1 className="text-white text-xl font-bold">What's Special</h1>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 p-4 no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={dragScroll}
      >
        {Groceries.map((item) => (
          <div key={item.id} className="min-w-[200px] bg-white p-4 shadow-md rounded-lg select-none">
            <img src={item.image} alt={item.name} className="nodrag rounded-3xl bg-white p-2 " />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <p className="text-yellow-500">⭐ {item.rating}</p>
          </div>
        ))}
      </div>

      {/* Left Button */}
      {isHovered && (
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft />
        </button>
      )}

      {/* Right Button */}
      {isHovered && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
          onClick={() => scroll(1)}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
