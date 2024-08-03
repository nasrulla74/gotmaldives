import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='main-container'>
      <footer className="bg-white dark:bg-gray-900">
    <div className="py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
                <Image className="h-12 rounded-lg shadow-lg ring-1 ring-blu p-1 mb-5" src="/assets/got-logo.jpg" width={100} height={90} alt="got logo"/>
            </a>

        </div>
{/* 
        <hr className="my-10 border-gray-200 dark:border-gray-700" /> */}

        <div className="flex flex-col items-center  sm:flex-row sm:justify-between bg-[#005991] p-6 text-white">
            <p className="text-sm">© Copyright 2024. All Rights Reserved. Got Maldives Pvt. Ltd.</p>

            <div className="flex mt-2 -mx-2 sm:mt-0">
                <a href="#" className="mx-2 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                <a href="#" className="mx-2 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                
            </div>
        </div>
    </div>
</footer>    

</div>
  )
}

export default Footer