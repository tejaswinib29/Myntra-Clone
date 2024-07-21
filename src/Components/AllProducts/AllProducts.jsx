import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct'

function AllProducts() {

    const [allProducts, setallProducts] = useState([])
    useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data);
        setallProducts(data.products)
      })
      .catch((err) => {
        console.log(err);
      })

    },[])

    return (
        <div className='grid grid-cols-5 border-t-2 border-slate-300'>
            {
                allProducts.map((oneProduct, i) => (
                    <OneProduct key={i}
                    productImage={oneProduct.images[0]}
                    productRating={oneProduct.rating}
                    productBrand={oneProduct.brand}
                    productPrice={oneProduct.price}
                    productName={oneProduct.title}
                    productDiscount={oneProduct.discountPercentage} 
                    />
                ))
            }
        </div>
    );
}

export default AllProducts