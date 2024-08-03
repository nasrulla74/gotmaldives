

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineWifi } from "react-icons/ai";
import { AiOutlineCoffee } from "react-icons/ai";
import { MdOutlineRoomService } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { TbSpeedboat } from "react-icons/tb";

import { urlFor } from '../lib/client';


const Product = ({ product: { image, name, slug  } }) => {
  return (
    <div>
     
   
     <div className="border-spacing-2 rounded-xl p-3 shadow-xl ring-1 hover:opacity-50 sm:flex-shrink-0">
        {image ? 
         <Image className="h-48 w-full rounded-xl object-cover sm:w-60" width={300} height={300}  src={urlFor(image && image[0]).url()} alt={slug} />
        // <Image className="h-48 w-full rounded-xl object-cover sm:w-60" src={image} alt={slug} />

        : 
        <Image className="h-48 w-full rounded-xl object-cover sm:w-60" width={300} height={300} src='/assets/no_image.jpg' alt={slug} />

      }
        
        <div className="min-h-20 sm:max-w-60">
          <div className="mx-1 mt-3 justify-center">
            <p className="text-center">{name}</p>
          </div>
        </div>

        <div className="mx-1 my-12 flex justify-center">
          <span className='w-8 h-8'
            ><AiOutlineWifi/>
          </span>

          <span className='w-8 h-8'
            ><AiOutlineCoffee/>
          </span>
          <span className='w-8 h-8'
            ><MdOutlineRoomService/>
          </span>
          <span className='w-8 h-8'
            ><IoRestaurantOutline/>
          </span>
          <span className='w-8 h-8'
            ><TbSpeedboat/>
          </span>
        </div>

        <div className="mb-2 mt-12 flex justify-center">
        <Link href={`/product/${slug.current}`}>
          <button id="btn_more" className="w-full rounded-lg p-1 px-5 ring-1 hover:bg-cyan-950 hover:text-white">MORE</button>
        </Link>
          
        </div>
      </div>

    </div>

    


  )
}

export default Product