import React, { useState } from "react";
import img_src from "../assets/form_art.jpg";

const EwasteCalculator = () => {
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [amountEarned, setAmountEarned] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = calculateAmount(category, model);
    setAmountEarned(amount);
  };

  const calculateAmount = (category, model) => {
    // Implement your calculation logic here.
    // For this example, we'll just return a random number between 10 and 100.
    return Math.floor(Math.random() * 91) + 10;
  };

  return (
    <div className="w-1/2 flex items-center justify-center text-black p-4 rounded-lg  transition duration-300 ease-in-out">
      <div className="w-1/2 p-4">
        <img src={img_src} alt="ewaste" className="max-w-full h-auto" />
      </div>
      <form onSubmit={handleSubmit} className=" w-1/2 p-4 space-y-4">
        <div className="text-left pl-2">
          <label htmlFor="category" className="block font-medium text-black">
            Category of Electronic Waste
          </label>
          <input
            type="text"
            id="category"
            className="w-full p-2 bg-white border rounded text-black placeholder-gray-400 focus:outline-none focus:border-[#1F2937]"
            placeholder="E.g., Smartphone, Laptop, etc."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="text-left pl-2">
          <label htmlFor="model" className="block font-medium text-black">
            Model of the Device
          </label>
          <input
            type="text"
            id="model"
            className="w-full p-2 bg-white border rounded text-black placeholder-gray-400 focus:outline-none focus:border-[#1F2937]"
            placeholder="E.g., iPhone X, MacBook Pro, etc."
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#4763b7] text-[#ffffff] font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Predict Credits Points
        </button>
      </form>
      {/* {amountEarned !== null && (
        <div className="mt-4">
          <p className="font-semibold">Amount Earned: ${amountEarned}</p>
        </div>
      )} */}
    </div>
    
  );
};

export default EwasteCalculator;
