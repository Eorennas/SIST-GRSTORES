import { useEffect, useState } from "react";

type CardProps = {
  img: string;
  price: string;
  title: string;
  quantityProduct: number | 0;
  increment :() => void;
  decrement : () => void;
}

export default function CardProductModal({ img, price, title, quantityProduct, increment, decrement }: CardProps) {


  useEffect
  return (
    <div className="flex h-30  w-full">
      <img src={img} className=" h-24  object-contain rounded-lg border-2 border-gray-400 " />
      <div className=" p-2 flex-col ml-5 justify-between">
        <div>
          <p className="font-bold">{title}</p>
          <p className="justify-end">R$ {price}</p>
        </div>
        <div className="flex items-center border ">
          <button
            onClick={decrement}
            className="border-r px-4 py-2 text-sm hover:bg-gray-200">-</button>

          <span className="mx-4 text-sm">{quantityProduct}</span>

          <button
            onClick={increment}
            className="border-l px-4 py-2 text-sm hover:bg-gray-200" >+</button>
        </div>
      </div>
    </div>
  )
}