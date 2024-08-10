import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Img from '../../../public/default.jpg'

export default async function page({ searchParams }) {

  const brand = searchParams.brand;
  const lot = searchParams.lot;
  const size = searchParams.size;
  const condition = searchParams.condition;
  const warehouse = searchParams.warehouse;
  const stock = searchParams.stock;
  const color = searchParams.color;
  const print = searchParams.print;
  const weight = searchParams.weight;
  const border = searchParams.border;

  let query;
  if (brand) {
    if (!query) {
      query = `brand=${brand}`
    } else {
      query = `${query}&brand=${brand}`
    }
  };
  if (lot) {
    if (!query) {
      query = `lot=${lot}`
    } else {
      query = `${query}&lot=${lot}`
    }
  };
  if (condition) {
    if (!query) {
      query = `condition=${condition}`
    } else {
      query = `${query}&condition=${condition}`
    }
  };
  if (print) {
    if (!query) {
      query = `print=${print}`
    } else {
      query = `${query}&print=${print}`
    }
  };
  if (warehouse) {
    if (!query) {
      query = `warehouse=${warehouse}`
    } else {
      query = `${query}&warehouse=${warehouse}`
    }
  };
  if (size) {
    if (!query) {
      query = `size=${size}`
    } else {
      query = `${query}&size=${size}`
    }
  };
  if (stock) {
    if (!query) {
      query = `stock=${stock}`
    } else {
      query = `${query}&stock=${stock}`
    }
  };
  if (color) {
    if (!query) {
      query = `color=${color}`
    } else {
      query = `${query}&color=${color}`
    }
  };
  if (weight) {
    if (!query) {
      query = `weight=${weight}`
    } else {
      query = `${query}&weight=${weight}`
    }
  }; if (border) {
    if (!query) {
      query = `border=${border}`
    } else {
      query = `${query}&border=${border}`
    }
  };

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const { fetchedProducts } = await fetch(
    `${serverUrl}/api/get_products_by_field?${query}`
  )
    .then((response) => response.json())
    .then((data) => data);

  return (
    <div className='w-full flex justify-center items-center my-4'>
      <div className='w-[90%] lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 gap-2'>
        {fetchedProducts?.map((product) => (

          <Link href={`/product/${product?._id}`} className='flex flex-col items-center'>
            <Image className='mt-4' src={Img} width="2000" height="2000" />
            <h3 className='w-full text-left my-6'>Title : {product?.title}</h3>
            <h3 className='w-full text-left'>Stock : {product?.stock}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}