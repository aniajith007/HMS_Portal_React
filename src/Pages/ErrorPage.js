import React from "react";
import { useLocation } from "react-router-dom";
import 'animate.css';

const ErrorPage = () => {
  const location = useLocation();
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 class="text-9xl font-extrabold text-white tracking-widest animate__animated animate-pulse">404</h1>
        <div class="bg-[#ffffff] px-2 text-sm rounded rotate-12 absolute">
          {location.state.message}
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            {<span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <a href={"/"+location.state.link}>Go Login</a>
            </span>}
          </a>
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;
