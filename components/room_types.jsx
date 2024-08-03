import React from 'react';
import Image from 'next/image'

import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';



const RoomType = ({ product }) => {
  const { showCart, setShowCart, setSelectedRoomType, setSelectedProduct } = useStateContext();
    
    
    
    const {
        room_types, slug, name
      } = product;

    
    const cartShow = (item_name) => {
      
      setShowCart(true)
      setSelectedRoomType(item_name)
      setSelectedProduct(name) 
      
    } 
    
      
  return (
    <>
            {room_types?.map((item, i) => (
             
              <div key={i} className="flex justify-center bg-gray-100">
                
                  <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    { item.image ?(<Image className="w-full rounded-lg object-cover object-center" width={300} height={300} src={urlFor(item.image && item.image[0]).url()} alt={slug} />): (<Image className="h-32 sm:w-full rounded-xl object-cover" src='/assets/no_image.jpg' alt={slug} />)}

                    
                    <div>
                      <div className="my-6 flex items-center justify-between px-4">
                        <p className="font-bold text-gray-500">{item.name}</p>
                        
                      </div>

                      <div>
                      <div className="mb-2 mt-12 flex justify-center">
                             <button id="btn_more" className="w-full rounded-lg p-1 px-5 ring-1 hover:bg-cyan-950 hover:text-white" onClick={() => cartShow(item.name)}>BOOK NOW</button>
                         </div>
                      </div>
                      
                    </div>
                  </div>
                
              </div>
            
           
            ))}
        
    </>

    

    
    
    


  )
}

export default RoomType