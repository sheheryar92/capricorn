import { useState } from "react";

import Image from "next/image";
import Currency from "react-currency-formatter";

const Max_Rating = 5;
const Min_Rating = 1;

function Product({ title, key, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
  );

  const hasPrime = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white p-10 z-30">

      <p className='absolute top-2 right-10 text-xs text-gray-400 italic' >{category}</p>
       <Image src={image} objectFit="contain" height={200} width={200} />
       <h4 className='my-3'>{title}</h4>
       <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <svg
              className="h-5 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          ))}
      </div>
      <p className='text-xs  my-2 line-clamp-2'>{description}</p>

<div className='mb-5'>
  <Currency quantity={price} />
</div>

{hasPrime && (
  <div className='flex items-center space-x-5 -mt-5'>
    <img className='w-12'
      src="https://png.pngtree.com/png-vector/20190226/ourlarge/pngtree-fire-logo-icon-design-template-vector-png-image_705402.jpg"
      alt=""
    />
  </div>
)}


  <button className='button mt-auto'>Add to basket</button>

    </div>
  );
}

export default Product;
