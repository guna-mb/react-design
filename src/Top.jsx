
import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Top() {
  return (
  
    <nav className='bg-gray-800 p-6 sticky top-0 '>
      <div className='flex justify-around mt-2 items-center'>
       
          <div className='relative order-2 md:order-1 flex items-center'>
            <a href='/' className='text-white text-xl font-bold  border-4  py-4 px-6 '>
              <span className='block '>EN</span>
              <span >GM</span>
            </a>
          </div>
          

          <ul className='relative order-1 md:order-2 md:flex gap-6'>
            <li>
            <a href='/' className='text-white hover:text-yellow-300'>
              Home
            </a>
            </li>
            <li>
            <a href='/' className='text-white hover:text-yellow-300'>
              Services
            </a>
            </li>
            <li>
            <a href='/' className='text-white hover:text-yellow-300'>
              Work
            </a>
            </li>
            <li>
            <a href='/' className='text-white hover:text-yellow-300'>
              About
            </a>
            </li>
            <li>
            <a href='/' className='text-white hover:text-yellow-300'>
              Blog
            </a>
            </li>
            <li>
            <a href='/' className='text-white hover:text-yellow-300 '>
              Contact
            </a>
            </li>
            </ul>
            
            <div className='relative order-3 md:flex gap-3'>
      
              <a>
                <CiLinkedin className='size-6 lg:size-8 text-white hover:text-blue-300 ' />
                </a>
                <a>
                <CiTwitter  className='size-6 lg:size-8 text-white hover:text-blue-300 ' />
                </a>
                <a>
                <CiFacebook className='size-6 lg:size-8 text-white hover:text-blue-300 ' />
                </a>
            </div>


          
              
          
           
      </div>
    </nav>
    

  );
}

export default Top;
