import React from "react";
import DP from "../assets/avatar.jpg";

const SingleMember = () => {
  return (
    <>
      <div className="w-full max-w-sm bg-[#1f2937] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  animate__animated animate__flipInX ">
        <div className="flex flex-col items-center pb-10">
          <img
            className="hover:scale-90 duration-300 ease-in-out mt-2 mb-3 w-24 h-24 rounded-full shadow-lg"
            src={DP}
            alt="Bonnie"
          />
          <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
            Shreyas Waykar
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Website Team Head
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleMember;
