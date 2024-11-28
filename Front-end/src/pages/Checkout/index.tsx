import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/function';
import ProductHeader from '../../components/ProductHeader';

interface CartItem {
  title: string;
  price: number;
  img: string;
  quantityProduct: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = getFromLocalStorage();
    setCartItems(items || []);
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantityProduct, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Progresso */}
      <div className="flex items-center justify-center mb-6">
        <ProductHeader />
      </div>

      {/* Resumo da Sacola */}
      <h1 className="text-4xl font-bold mb-4">Sacola</h1>
      <p className="text-gray-600 mb-4">sua sacola tem {cartItems.length} item(s)</p>

      {/* Aviso */}
      {/* <div className="bg-yellow-100 text-yellow-700 p-4 rounded mb-6">
        A sacola não garante a reserva dos produtos. Que tal finalizar seu pedido antes que o estoque acabe?
      </div> */}

      {/* Itens no Carrinho */}
      <div className="border-b pb-4 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p className="text-xl font-medium text-black">{item.title}</p>
                <p className="text-sm">Quantidade: {item.quantityProduct}</p>

              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold">R$ {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg">Subtotal</p>
          <p className="text-lg font-bold">R$ {subtotal.toFixed(2)}</p>
        </div>
        <Link
          to="/identificação"
          state={{ cartItems, subtotal }}
          className="flex justify-center w-full py-3 text-white bg-black rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Continuar para identificação
        </Link>
      </div>
    </div>
  );
}
