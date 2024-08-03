import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';



const Facilities = ({ product }) => {
    
    
    const {
      facilities
      } = product;
    
      
  return (
    <>
            {facilities?.map((item, i) => (
                    <div key={i} className="flex gap-2 justify-between">
                    

                      
                        <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 m-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                          <div className="mt-px">{item}</div>
                        </div>
                       
                      
                  </div>
                  
                  // <div key={i} className="grid grid-cols-1 gap-8 text-nowrap text-center sm:grid-cols-2 md:grid-cols-3 m-2">
                  //     {/* <div>
                  //       <span className="flex-nowrap rounded-xl px-3 shadow-lg ring-2 hover:ring-purple-600 hover:bg-slate-200">Water-Villa dsdsd asd asdasd</span>
                  //     </div> */}

                  //     <div className="flex gap-2">
                  //       <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  //         <div className="mt-px">{item}</div>
                  //       </div>
                       
                  //     </div>
                     
                  // </div>
                  
            ))}
        
    </>

    

    
    
    


  )
}

export default Facilities