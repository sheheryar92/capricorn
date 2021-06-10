import React, { Component } from 'react'
import Product from './Product'


const ProductFeed = ({products}) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:-mt-40 mx-auto'>

{products.slice(0, 4).map( ({title, id, price, description, category, image}) => <Product 
 key={id}
 title={title}
 price={price}
 description={description}
 category={category}
 image={image}
 />

 )}

 <img className='mx-auto  col-span-full ' src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg" alt="" />

<div className='md:col-span-2'>  
{products.slice(4, 5).map( ({title, id, price, description, category, image}) => <Product 
 key={id}
 title={title}
 price={price}
 description={description}
 category={category}
 image={image}
 />

 )}
</div>

{products.slice(5, products.length).map( ({title, id, price, description, category, image}) => <Product 
 key={id}
 title={title}
 price={price}
 description={description}
 category={category}
 image={image}
 />

 )}


        </div>
    )
}

export default ProductFeed
