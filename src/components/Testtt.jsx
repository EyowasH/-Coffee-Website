import React from 'react';

const Footer = () => {
  return (
    <div class="bg-[#f8f9ff] font-[sans-serif] text-[#333] text-[15px]">
    <header class='py-4 px-4 sm:px-10 z-50 min-h-[70px]'>
      <div class='relative flex flex-wrap items-center gap-4'>
        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
        </a>
        <div class='flex ml-auto lg:order-1'>
          <button class='px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800'>Login</button>
          <button id="toggle" class='lg:hidden ml-7'>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <ul id="collapseMenu"
          class='lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:hidden max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-lg:z-50'>
          <li class='max-lg:border-b max-lg:py-2 px-3'>
            <a href='javascript:void(0)'
              class='lg:hover:text-blue-600 text-blue-600 block font-bold transition-all'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-blue-600 block font-bold transition-all'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-blue-600 block font-bold transition-all'>Feature</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-blue-600 block font-bold transition-all'>Blog</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-blue-600 block font-bold transition-all'>About</a>
          </li>
        </ul>
      </div>
    </header>
    <div class="relative">
      <div class="px-4 sm:px-10">
        <div class="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 class="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">Build Landing Pages with Typeform
            Integration</h1>
          <p class="text-base">Embark on a gastronomic journey with our curated dishes, delivered promptly to your
            doorstep. Elevate your dining experience today. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="mt-10">
            <button class='px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800'>Get started
              today</button>
          </div>
        </div>
        <hr class="my-12 border-gray-300" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="https://readymadeui.com/google-logo.svg" class="w-28 mx-auto" alt="google-logo" />
          <img src="https://readymadeui.com/facebook-logo.svg" class="w-28 mx-auto" alt="facebook-logo" />
          <img src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="linkedin-logo" />
          <img src="https://readymadeui.com/pinterest-logo.svg" class="w-28 mx-auto" alt="pinterest-logo" />
        </div>
      </div>
      <img src="https://readymadeui.com/bg-effect.svg" class="absolute inset-0 w-full h-full" />
    </div>

    </div>
  );
};

export default Footer;
