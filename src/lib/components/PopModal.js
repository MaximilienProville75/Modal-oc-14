import React from "react";
import { FiX } from "react-icons/fi";

export const PopUp = (props) => {
  return props.trigger ? (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center`}
    >
      <div
        className={`relative p-6 w-full max-w-xl bg-white rounded-xl border-4 border-purple-500 shadow-lg shadow-purple-500`}
      >
        <button
          className="absolute right-4 top-4 text-3xl text-purple-500 font-extrabold "
          onClick={() => props.setTrigger(false)}
        >
          {!props.closeIcon ? <FiX /> : props.closeIcon}
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};
