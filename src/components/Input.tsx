import React, { FC } from "react";

const Input: FC = () => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  return (
    <section className="mx-5 mt-2 ">
      <form>
        <label className="block mb-1 text-sm font-medium text-white">
          URL
          </label>
        <input type="text" className="bg-gray-600 border border-gray-300 
        text-gray-900 text-sm rounded-sm block w-full px-2.5 py-1">
        </input>     
      </form>
    </section>
  )
}

export default Input;