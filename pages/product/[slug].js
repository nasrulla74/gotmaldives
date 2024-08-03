import Facilities from "../../components/Facilities";
import RoomType from "../../components/room_types";
import { client, urlFor } from "../../src/sanity/lib/client";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
// import { Product } from '../../components';
import { PiCheckCircleDuotone } from "react-icons/pi";
import BookingForm from "../../components/BookingForm";
import { useStateContext } from "../../context/StateContext";


const ProductDetails = ({ products, product }) => {
  const {
    image,
    name,
    airport_distance,
    location,
    transfer_types,
    no_of_rooms,
    about,
  } = product;
  const [index, setIndex] = useState(0);

  const { showCart, setShowCart} = useStateContext();

  
  

  return (
    <>
    <div>
      <div className="product-detail-container lg:justify-center">
        <div>
          <div className="">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className=" hidden xl:block ring-1 ring-gray-900 rounded-lg content-center">
          <img src="/assets/map_maldives.jpg" className="p-2 rounded-lg  object-center" alt="map_maldives" />
          <div className="m-4 flex justify-center">
          <button id="btn_more" className="w-full rounded-lg p-1 px-5 py-2 ring-1  hover:bg-cyan-950 hover:text-white" >ABOUT MALDIVES</button>
          </div>
        </div>
        


        

         
      </div>

      <div className="bg-white mt-4 px-6 pb-8 pt-7 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10 lg:justify-center">
          <div className="">
            <div className="m-2">
              <span className="sm:text-2xl md:text-3xl">{name}</span>
            </div>
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    
                    <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    
                    <p className="ml-4">
                      Location :
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {location}
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center">
                  <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    <p className="ml-4">
                      Distance from Airport :
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {airport_distance}
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center">
                  <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    <p className="ml-4">
                      Number of Rooms:
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {no_of_rooms}
                      </span>
                    </p>
                  </li>
                </ul>
                <p>
                  {about}
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Want to more information?</p>
                {/* <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>

      <div className="shadow-xl ring-1 ring-gray-900 my-10 mt-20 bg-slate-100">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">Available Room Types</p>
            </div>
            <div className="flex-wrap justify-center gap-3 sm:flex px-6 pb-8">
              <RoomType product={product} />
              {/* {products?.map((product) => <RoomType key={product._id} product={product} />)} */}
            </div>
      </div>

      <div className="shadow-xl ring-1 ring-gray-900 my-20 bg-slate-100">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">Faciliteis</p>
            </div>
            <div className="flex-wrap justify-center gap-3 sm:flex px-6 pb-8">
              <Facilities product={product} />
              {/* {products?.map((product) => <Facilities key={product._id} product={product} />)} */}
            </div>
      </div>
      

      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
    </div>
    <div>
    {showCart && <BookingForm />}
    </div>
    </>

  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  

  return {
    props: { products, product },
  };
};

export default ProductDetails;
