import { useEffect } from "react";


interface HeaderProps {
  click: () => void; // Ensure `click` is a function
}


export default function ModalCart({ click }: HeaderProps) {
  useEffect(() => {
    // Bloquear o scroll da página de trás ao abrir o modal
    document.body.style.overflow = 'hidden';

    // Limpar o estilo quando o modal for fechado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div onClick={() => click()} className="fixed z-20 w-screen flex justify-end bg-gray-600 bg-opacity-70">

      <div onClick={(e) => e.stopPropagation()} className="flex flex-col m-0 z-20 top-0 w-2/6 p-5 h-screen right-0 bg-white justify-between ">

        <div className="flex justify-between">
          <p className="font-bold">Resumo do Carrinho</p>
          <button className=" font-bold px-5" onClick={() => click()}>X</button>
        </div>

        <button className="bg-black self-center text-white px-10 py-2 hover:bg-gray-800 transition rounded-lg ">
          fechar o pedido
        </button>

      </div>
    </div>
  )
}