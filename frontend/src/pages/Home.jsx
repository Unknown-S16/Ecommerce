import React from "react";
import { Link } from "react-router-dom";


function Card({ children, className }) {
    return <div className={`bg-white shadow rounded-xl p-4 ${className}`}>{children}</div>;
  }
  
 
  
  function Button({ children, onClick, className }) {
    return (
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
export default function Home() {
  return (
    <Card className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the E-commerce App</h1>
      <p className="mt-2">Discover our products and shop with ease.</p>
      <Link to="/products">
        <Button className="mt-4">Shop Now</Button>
      </Link>
    </Card>
  );
}
