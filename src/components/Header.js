const Header = () => {
  return (
    <header >
      <div className="flex items-center  flex-grow bg-amazon_blue p-6 ">
        <div className="items-center flex flex-grow sm:flex-grow-0 px-3">
          <h2
            className="cursor-pointer  "
            style={{ color: "white ", fontSize: 24 }}
          >
            CapricornStyle.pk
          </h2>
        </div>

{/* serch */}
<div className='text-align-center  items-center bg-yellow-400 hover:bg-yellow-500 flex sm:flex hidden item-center flex-grow cursor-pointer h-10 rounded-md '>
    
    <input className='flex-grow w-6 h-full p-2 rounded-l-md flex-shrink px-4 focus:outline-none' type="text"  />

    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
  </div>





<div className='text-white flex items-center text-xs px-4 space-x-6 text-center'>
  <div  className='link'>
    <p className='font-extrabold md:text-sm'>hello</p>
    <p className='font-extrabold md:text-sm'>Account & List</p>
  </div>
<div className='link'>
  <p className='font-extrabold md:text-sm'>Returens</p>
  <p className='font-extrabold md:text-sm'>& order</p>
</div>

<div className='link  flex relative'>

<span className='absolute left-7 right-0 w-5 h-5 bg-yellow-500 rounded-full text-center text-black md:left-7 font-bold' >0</span>

<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
<p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p>
</div>

</div>








      </div>



      <div className='bg-amazon_blue-light text-white flex p-2 pl-6 text-center space-x-6'> 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 link" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
  <p className=' link'>Men</p>
  <p className=' link'>Women</p>
  <p className=' link'>kids</p>
  <p className=' link'>Jewelery</p>
  <p className=' link hidden lg:inline'>Electronics</p>
  <p className=' link hidden lg:inline'>Cosmatics</p>
  <p className=' link hidden lg:inline'>Bags</p>
  <p className=' link hidden lg:inline'>Shoes</p>

      </div>

    </header>
  );
};

export default Header;
