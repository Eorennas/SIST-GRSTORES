import { useEffect, useState } from "react";

type CardProps = {
  img: string;
  price: string;
  title: string;
  quantityProduct: number | 0;
}

export default function CardProductModal({ img, price, title, quantityProduct }: CardProps) {
  const [quantity, setQuantity] = useState<number>(quantityProduct);

  // Função para incrementar a quantidade
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Função para decrementar a quantidade
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

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

          <span className="mx-4 text-sm">{quantity}</span>

          <button
            onClick={increment}
            className="border-l px-4 py-2 text-sm hover:bg-gray-200" >+</button>
        </div>
      </div>
    </div>
  )
}