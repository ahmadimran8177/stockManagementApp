import React from 'react'
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[80%] lg:w-[40%] flex justify-center flex-col items-center py-[12rem]">
                <h3 className="text-3xl text-white bg-black py-6 w-full text-center">
                    Search Product
                </h3>
                <Link
                    href="/search_products/by_title"
                    className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
                >
                    By Title
                </Link>
                <Link
                    href="/search_products/by_categories"
                    className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
                >
                    By Categories
                </Link>
            </div>
        </div>
    )
}

export default page