import React from 'react'
// import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full bg-black flex justify-center flex-col items-center">
            {/* <Link href="/"> */}
            <a href="/" className="text-white text-4xl pt-4 font-bold">
                Ahmad Bardana
            </a>
            {/* </Link> */}
            <h2 className="text-white text-xl py-2">
                Stock Managment Application
            </h2>
        </header>
    )
}

export default Header