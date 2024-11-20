import React from 'react';

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  {
    name: 'Camiseta básica de algodão peruano manga curta preto M',
    price: 79.99,
    image: '/images/product1.png',
    quantity: 1,
  },
];

const CheckoutPage: React.FC = () => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Progresso */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              🛍️
            </div>
            <span className="text-sm font-medium mt-2">sacola</span>
          </div>
          <div className="w-16 h-px bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
              👤
            </div>
            <span className="text-sm font-medium mt-2">identificação</span>
          </div>
          <div className="w-16 h-px bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
              💳
            </div>
            <span className="text-sm font-medium mt-2">pagamento</span>
          </div>
          <div className="w-16 h-px bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
              ✔️
            </div>
            <span className="text-sm font-medium mt-2">confirmação</span>
          </div>
        </div>
      </div>

      {/* Resumo da Sacola */}
      <h1 className="text-xl font-bold mb-4">sacola</h1>
      <p className="text-gray-600 mb-4">sua sacola tem {cartItems.length} item(s)</p>

      {/* Aviso */}
      <div className="bg-yellow-100 text-yellow-700 p-4 rounded mb-6">
        A sacola não garante a reserva dos produtos. Que tal finalizar seu pedido antes que o estoque acabe?
      </div>

      {/* Itens no Carrinho */}
      <div className="border-b pb-4 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">vendido e entregue por C&A</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 border rounded">-</button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="w-8 text-center border rounded"
                />
                <button className="px-2 py-1 border rounded">+</button>
              </div>
              <p className="text-sm font-bold">R$ {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <button className="text-red-500 text-sm">excluir da sacola</button>
      </div>

      {/* Entrega */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">ENTREGA</h2>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border border-black">
            RECEBER
          </button>
          <button className="px-4 py-2 rounded-full border">RETIRAR</button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Receber {cartItems.length} item(s) em <span className="font-bold">58088090</span>
        </p>
      </div>

      {/* Subtotal */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg">Subtotal</p>
          <p className="text-lg font-bold">R$ {subtotal.toFixed(2)}</p>
        </div>
        <button className="w-full py-3 text-white bg-black rounded-lg font-semibold text-lg hover:bg-gray-800 transition">
          Continuar para identificação
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;