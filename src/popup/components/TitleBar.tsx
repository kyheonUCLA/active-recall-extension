import React, { FC } from "react";
import {FaLightbulb} from "react-icons/fa"
import { LuActivitySquare } from "react-icons/lu"

// <FaLightbulb style={{ transform: 'scale(2.5)', color: '#BE5BF0' }} />
const TitleBar: FC = () => {
  return (
    <section className="flex ml-7 flex-row space-x-5 items-center mt-3 mb-3">
      <LuActivitySquare style={{ transform: 'scale(3)', color: '#BE5BF0' }} />
      <label className="block mb-1 text-sm font-medium text-white">
        MVPM: Minimum Viable Product Manager
      </label>
    </section>
  )
}

export default TitleBar;