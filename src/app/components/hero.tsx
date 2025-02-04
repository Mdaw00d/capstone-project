'use client'

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import AllProducts from "./AllProducts";


function Hero() {
  
   
  return (
    <section>
      <hr /> {/* Nav2 Ends */}
      {/* dropdown btn 1 */}
      <div className="hidden md:flex relative text-left items-center">
        <Link href="/productlisting" passHref>
          <button
            type="button"
            className="flex mt-4 ml-12 w-44 justify-center gap-x-1.5 rounded-3xl bg-blue-400 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-blue-500"
            id="menu-button"
          >
            All Products
            <svg
              className="-mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        {/* Other dropdown buttons */}
        {/* ... */}
      </div>
      <br />
      <br />
      {/* Banner Starts */}
      <div className="bg-black p-60 pb-32 ml-28 mr-36 rounded-2xl hidden lg:block">
        <Image
          className="ml-[350px] -mt-48 h-[400px] w-[400px] absolute hidden md:block"
          src="/perfume.jpg"
          alt="Perfume"
          width={400}
          height={400}
        />
        <h2 className="text-white -ml-32 -mt-32 font-sans font-normal text-2xl">
          Best Deal Online on PERFUMES
        </h2>
        <h1 className="text-white mt-3 -ml-32 font-semibold text-6xl">Noir.</h1>
        <h2 className="text-white mt-4 -ml-32 text-4xl">UP to 30% OFF</h2>
        <div>
          <div className="bg-white h-2 w-6 mt-20 -ml-32 rounded-2xl"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-20 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-16 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-12 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-8 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-[14px] -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-[-4px] -mt-2"></div>
        </div>
      </div>
      <Image
        className="md:hidden"
        src="https://cdn.create.vista.com/downloads/0d580ee7-3241-41e5-bb21-47ec3df2dc0a_1024.jpeg"
        alt="Banner Image"
        width={1024}
        height={768}
      />
      {/* Heading */}
      <div className="py-16">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5">
          Grab the best deal on
          <span className="text-blue-500"> Perfumes</span>
        </h2>
        <br />
        <div className="bg-blue-500 w-[360px] h-1 ml-5 -mt-3"></div> <hr />
        <h3 className="md:ml-[1250px] font-medium ml-[400px] -mt-9">
          View All
        </h3>
      </div>
      {/* Render AllProducts with unique keys */}
      <AllProducts />
      {/* Heading2 */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5 ">
          {" "}
          Shop From <span className="text-blue-500 ">Top Categeories</span>
        </h2>
        <div className="bg-blue-500 w-80 h-1 ml-5 -mt-[-12px]  "> </div> <hr />
        <h3 className="md:ml-[1250px] ml-[400px] font-medium -mt-9">
          View All{" "}
        </h3>
      </div>
      {/* Photos2 */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-7 gap-y-10  ">
        <div>
          <Image
            className=" transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px]   "
            src="/shirt.jpg"
            alt="Shirts"
            width={850}
            height={200}
          />
          <h4 className="ml-[90px] md:ml-[60px]  font-bold">Shirts</h4>
        </div>
        <div>
          <Image
            className=" transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px] "
            src="/tube.jpg"
            alt="Cosmetics"
            width={850}
            height={200}
          />
          <h4 className="ml-[90px] md:ml-[60px]  font-bold">Cosmetics</h4>
        </div>
        <div>
          <Image
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px]"
            src="/pant.jpg"
            alt="Pants"
            width={850}
            height={200}
          />
          <h4 className="ml-[90px] md:ml-[60px]  font-bold">Pants</h4>
        </div>
        <div>
          <Image
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px] "
            src="/scent.jpg"
            alt="Scents"
            width={850}
            height={200}
          />
          <h4 className="ml-[90px] md:ml-[60px]  font-bold">Scents</h4>
        </div>
        <div>
          <Image
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px]"
            src="/makeup.jpg"
            alt="Makeup"
            width={850}
            height={200}
          />
          <h4 className=" ml-[90px] md:ml-[60px]  font-bold">Makeup</h4>
        </div>
        <div>
          <Image
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px]"
            src="/hoodie.jpg"
            alt="Hoodie"
            width={850}
            height={200}
          />
          <h4 className="ml-[90px] md:ml-[70px]  font-bold">Hoodie</h4>
        </div>
        <div>
          <Image
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] h-[200px] md:-ml-0 ml-28  "
            src="/necklace.jpg"
            alt="Accessories"
            width={850}
            height={200}
          />
          <h4 className="ml-[185px]  md:ml-[60px]  font-bold">Accessories</h4>
        </div>
      </div>
      {/* Heading3 */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5 ">
          {" "}
          Top <span className="text-blue-500">Clothing Brands</span>
        </h2>
        <div className="bg-blue-500 w-80 h-1 mt-3 ml-5  "> </div> <hr />
        <h3 className="md:ml-[1250px] ml-[400px] font-medium -mt-9 ">
          View All{" "}
        </h3>
      </div>
      {/* Photos 3 */}
      <div className=" gap-x-2 ml-16 md:grid md:grid-cols-3 justify-around grid grid-cols-1 ">
        <div>
          <Image
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[300px] h-[200px]  ml-6 "
            src="/brand1.jpg"
            alt="Brand 1"
            width={300}
            height={200}
          />
        </div>

        <div>
          <Image
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[300px] h-[200px]  ml-6"
            src="/brand2.jpg"
            alt="Brand 2"
            width={300}
            height={200}
          />
        </div>

        <div>
          <Image
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[300px] h-[200px]  ml-6"
            src="/brand3.jpg"
            alt="Brand 3"
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-2 mt-10">
        <div className="bg-blue-500 h-2 w-7 rounded-full"></div>

        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2  rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full "></div>
      </div>
      {/* ... */}
    </section>
  );
}

export default Hero;
