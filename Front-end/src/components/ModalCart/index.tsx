import { useEffect, useState } from "react";
import CardProductModal from "../CardProductModal";
import { getFromLocalStorage, updateToLocalStorage } from "../../utils/function";


interface HeaderProps {
  click: () => void; 
}


export default function ModalCart({ click }: HeaderProps) {
  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    const data = getFromLocalStorage()
    setProducts(data)
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleIncrement = (index: number) => {
    const updatedProducts:any = [...products];
    updatedProducts[index].quantityProduct += 1;
    setProducts(updatedProducts);
    updateToLocalStorage(updatedProducts); 
  };

  const handleDecrement = (index: number) => {
    const updatedProducts: any = [...products];
  
    if (updatedProducts[index].quantityProduct > 1) {
      updatedProducts[index].quantityProduct -= 1;
      setProducts(updatedProducts);
      updateToLocalStorage(updatedProducts); 
    } else if (updatedProducts[index].quantityProduct === 1) {
      const filteredProducts = updatedProducts.filter((_:any, i:any) => i !== index);
      setProducts(filteredProducts);
      updateToLocalStorage(filteredProducts); 
    }
  };


  return (
    <div onClick={() => click()} className="fixed z-20 w-screen flex justify-end bg-gray-600 bg-opacity-70">

      <div onClick={(e) => e.stopPropagation()} className="flex flex-col m-0 z-20 top-0 w-1/5 p-5 h-screen right-0 bg-white justify-between ">

        <div className="flex justify-between">
          <p className="font-bold">Resumo do Carrinho</p>
          <button className=" font-bold" onClick={() => click()}>x</button>
        </div>
        <div className="flex h-full flex-col py-2">
      {products.map((product:any, index:any) => (
        <div key={index}>
          <CardProductModal 
            quantityProduct={product.quantityProduct} 
            title={product.title} 
            price={product.price} 
            img={product.img}
            increment={() => handleIncrement(index)}
            decrement={() => handleDecrement(index)}
          />
          {index < products.length - 1 && (
            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
          )}
        </div>
      ))}
    </div>

        <button className="bg-black self-center text-white px-10 py-2 hover:bg-gray-800 transition rounded-lg ">
          finalizar o pedido
        </button>

      </div>
    </div>
  )
}