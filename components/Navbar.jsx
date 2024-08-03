import React from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Navbar = () => {

  return (
    <div className='main-container '>

   
    <div className="h-15 bg-grey-100 min-w-screen shadow-lg">
    
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">

            <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                <Link href="/" className="mr-5 font-medium hover:text-gray-900">Home</Link>
                <Link href="#_" className="mr-5 font-medium hover:text-gray-900">About</Link>
                
            </nav>
            <a
                className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
                <Image src='/assets/got-logo.jpg' width={100} height={90} className="h-12 rounded-lg shadow-lg ring-1 ring-blu p-1" alt="gotmaldives" />
            </a>
            <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                <a href="#_" className="mr-5 font-medium hover:text-gray-900">Contact Us</a>
                {/* <a href="#_"
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                    Sign Up
                </a> */}
            </div>
        </div>
    </header>
    
</div>
</div>
  )
}

export default Navbar