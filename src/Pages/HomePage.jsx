
import React from 'react';
import Header from '../Components/Header/Header';
import Breadcrumbs from '../Components/BreadCrumbs/Breadcrumbs';
import FilterOptions from '../Components/FilterOptions/FilterOptions';
import AllProducts from '../Components/AllProducts/AllProducts';


function HomePage() {
  return (
    <div className=''>
      {/* {header} */}
      < Header />
      {/* {breadcrumbs} */}
      <Breadcrumbs />
      
      <div className='flex flex-row w-[1450px] m-auto'>
        {/* {filteroptions} */}
        < FilterOptions />

        {/* { allproducts } */}
       < AllProducts />

       </div>
      </div>

  )
}

export default HomePage
