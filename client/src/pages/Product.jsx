import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {ShopContext} from '../context/ShopContext';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';



const Product = () => {
  const {productId} =  useParams()
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item.id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[products])

  return productData ?  (
    <div className='border-t-2 pt-10 transtition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto gap-3 sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item,index)=>(
                      <img onClick={()=>setImage(item)} src={item} key={index} alt='' className='w-[24%] sm:w-full flex-shrink-0 cursor-pointer'/>
                  ))
                }
            </div>
            <div className='w-full sm:w-[80%]'>
                  <img src={image} alt='' className='w-full h-auto '/>
            </div>
        </div>
        {/* Product information */}
        <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                  <FaStar className='w-4 text-yellow-200' />
                  <FaStar className='w-4 text-yellow-200' />
                  <FaStar className='w-4 text-yellow-200' />
                  <FaStar className='w-4 text-yellow-200' />
                  <FaStarHalfAlt className='w-4 text-yellow-200'/>
                  <p className='pl-2'>(124)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'> 
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                      {
                        productData.sizes.map((item, index)=>(
                           <button key={index} onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500': ''}`}>{item}</button>
                        ))
                      }
                  </div>
              </div>
              <button onClick={()=>addToCart(productData.id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product</p>
                  <p>Cash on delivery is available on this product</p>
                  <p>Easy return and exchange policy within 7 days</p>
              </div>
        </div>
      </div>
        {/* Description and Review Section */}
        <div className='mt-20'>
            <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt odio iusto delectus assumenda nesciunt, cupiditate adipisci ipsum, aspernatur provident fugit consectetur excepturi magnam eligendi dolorem! Nulla quis veniam velit, perferendis voluptate et repudiandae a voluptatum reprehenderit veritatis sequi repellat tenetur fugiat eum sint quidem ea quos optio, modi aspernatur?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit ratione nobis eum voluptatum adipisci maxime maiores! Fugiat, aspernatur dolorem optio, temporibus perferendis, necessitatibus veniam at ducimus iste earum veritatis.</p>
            </div>
        </div>
        {/* display related products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product;