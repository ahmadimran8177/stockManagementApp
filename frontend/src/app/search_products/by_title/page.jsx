"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
export default function ProfileForm() {
  const [title, setTitle] = useState("");
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const timerRef = useRef(null);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  async function onSubmit() {
    try {
      if (title === "") {
        throw new Error("Enter title");
      } else {
        const { fetchedProducts } = await fetch(
          `${serverUrl}/api/get_products_by_title?title=${title}`
        )
          .then((response) => response.json())
          .then((data) => data);
        setFetchedProduct(fetchedProducts);

      }
    } catch (error) {
      setFetchedProduct(null);
      console.log(error);
    }
  }

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(onSubmit, 1000);
  }, [title]);

  return (
    <>
      <form
        className="w-full flex justify-center items-center">
        <div className="w-[90%] lg:w-[60%] py-6">
          <input type="text" name="title" placeholder="Product title" onChange={(e) => {
            setTitle(e.target.value);
          }} className="border-[#808080] border-solid border-[1px] w-full p-2 rounded outline-none" />
        </div>
      </form>
      <div className='flex justify-center items-center w-full'>
        <div className='w-[90%] lg:w-[60%] pb-10 space-y-2 flex justify-center items-center flex-col'>
          {fetchedProduct?.map((product) => (
            <Link href={`/product/${product?._id}`} className='w-full border-black border-[1px] border-solid p-2'>{product?.title}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
