import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-[80%] lg:w-[40%] flex justify-center flex-col items-center py-20">
        <h3 className="text-3xl text-white bg-black py-6 w-full text-center">
          Actions
        </h3>
        <Link
          href="/search_products"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Search Product
        </Link>
        <Link
          href="/"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Add new Product
        </Link>
        <Link
          href="/"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Assets Calculation
        </Link>
        <Link
          href="/"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Transactions Record
        </Link>
        <Link
          href="/"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Create new Transaction
        </Link>
        <Link
          href="/"
          className="text-2xl py-4 w-full text-center border-x-[1px] border-black border-solid border-b-[1px] underline"
        >
          Find low Stock Products
        </Link>
      </div>
    </main>
  );
}
