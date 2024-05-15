import React from "react";
import error from "../assets/404error.png";
import page from "../assets/pageNotfound.png";

function PageNotFound() {
  return (
    <div>
      <h1 className="text-4xl  mt-5 mb-2 ">Uhhh hoo!!!</h1>
      <h1 className="text-3xl">Page Not Found</h1>
      <div className="flex ">
        <img src={page} alt="error" class="w-100 h-100  ml-20 " />
        <img src={error} alt="404" class="w-100 h-100  ml-20 " />
      </div>
      <div className="flex justify-center">
        <a
          href="/home"
          className="block w-96 h-auto pt-2 pb-2 mb-5 rounded-xl  bg-cyan-600 hover:bg-blue-500 text-black text-xl hover:text-white text-center leading-30 transition duration-300 ease-in-out"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
