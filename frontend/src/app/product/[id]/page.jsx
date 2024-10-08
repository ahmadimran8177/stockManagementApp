import React from 'react'
import Image from 'next/image'
import Img from '../../../../public/default.jpg'

const page = async ({ params: { id } }) => {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    const { fetchedProduct } = await fetch(
        `${serverUrl}/api/get_products/${id}`
    )
        .then((response) => response.json())
        .then((data) => data);
    return (
        <div className='w-full flex justify-center items-center py-10'>
            <div className=' flex flex-col justify-center items-center w-[90%] md:w-[60%] lg:w-[40%]'>
                <Image className='mt-4' src={`https://res.cloudinary.com/diy5tmoq8/image/upload/v1723660770/ahmad%20bardana%20products/${fetchedProduct?.imageUrl}`} width="2000" height="2000" alt='Product Image' />
                <h3 className='py-2 text-left w-full'>Title : {fetchedProduct?.title}</h3>
                <h3 className='text-left w-full'>Stock : {fetchedProduct?.stock}</h3>
            </div>
        </div>
    )
}

export default page