import React from "react";

const InputBox = ({ value }) => {
  return (
    <input 
      type="text" 
      value={value} 
      readOnly 
      className="w-full h-20 text-right text-3xl font-bold p-4 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none"
    />
  );
};

export default InputBox;