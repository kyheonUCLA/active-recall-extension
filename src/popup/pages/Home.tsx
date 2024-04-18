import React, { useState, useEffect } from 'react'
import { LuActivitySquare } from "react-icons/lu"

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>("")

  useEffect(() => {
     // Fetch the stored phone number asynchronously
     chrome.storage.local.get("phone", (result) => {
       // Update the state with the fetched phone number
       setPhoneNumber(result.phone || "");
     });
  }, []); // Empty dependency array means this effect runs once on component mount
 
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value } = e.target
    if (value.length == 10) {
      setPhoneNumber(value)
    }
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (phoneNumber.length > 0) {
      await chrome.storage.local.set( { phone: phoneNumber } )
    }
  }

  return (
  <main>
    <section className="flex ml-7 flex-row space-x-5 items-center mt-3 mb-3">
      <LuActivitySquare style={{ transform: 'scale(3)', color: '#BE5BF0' }} />
      <label className="block mb-1 text-sm font-medium text-white">
        MVPM: Minimum Viable Product Manager
      </label>  
    </section>
    <section className="mx-5 mt-2 ">
        <form>
          <label className="block mb-1 text-sm font-medium text-white">
            Phone Number
            </label>
          <input type="tel" placeholder={phoneNumber ? phoneNumber : "1234567890"} onChange={handleOnChange} name="phone" className="bg-gray-600 border border-gray-300 
          text-gray-400 text-sm rounded-sm block w-full px-2.5 py-1">
          </input>     
        </form>
    </section>
    <div className="flex mx-5 mt-4">
      <button onClick={handleOnClick}
        className="text-white bg-purple-500 hover:bg-purple-700 font-medium 
        rounded-lg text-sm px-5 py-1">
        Save
      </button>
    </div>
  </main> 
  )
}



export default Home