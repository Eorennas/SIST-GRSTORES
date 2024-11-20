import { useState } from 'react';
import { Link } from 'react-router-dom'

interface Product {
  name: string;
  price: number;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
}

const productData: Product = {
  name: 'Camiseta básica de algodão peruano manga curta',
  price: 79.99,
  description:
    'Essa é a quinta peça igual que eu compro para meu marido, as duas últimas peças não são iguais, tamanhos diferentes.',
  colors: [
    { name: 'Preto', hex: '#000000' },
    { name: 'Branco', hex: '#FFFFFF' },
    { name: 'Bege', hex: '#F5F5DC' },
    { name: 'Azul', hex: '#4682B4' },
    { name: 'Verde', hex: '#90EE90' },
    { name: 'Rosa', hex: '#FFC0CB' },
  ],
  sizes: ['PP', 'P', 'M', 'G', 'GG'],
  images: [
    '/images/product1.png',
    '/images/product2.png',
  ],
};

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name);
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = () => {
    setCartItems([...cartItems, { ...productData }]);
    setCartOpen(true);
  };

  return (
    <div className="relative">
      {/* Main Product Page */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {productData.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Produto ${index + 1}`}
              className="w-full rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {productData.name}
          </h1>
          <p className="text-gray-600 mb-4">{productData.description}</p>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            R$ {productData.price.toFixed(2)}
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Escolha a cor:</h3>
            <div className="flex gap-3">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-black' : 'border-gray-300'
                    }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Escolha o tamanho:</h3>
            <div className="flex gap-4">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium ${selectedSize === size
                      ? 'bg-gray-200 border-black'
                      : 'border-gray-300'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full py-3 text-white bg-black rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
            onClick={addToCart}
          >
            Adicionar à Sacola
          </button>
        </div>
      </div>

      {/* Cart Sidebar with Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-start">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setCartOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-96 bg-white h-full shadow-lg z-50 p-6">
            <h2 className="text-lg font-bold mb-4">Resumo da sacola</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between mb-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Cor: {selectedColor}</p>
                    <p className="text-sm text-gray-500">Tamanho: {selectedSize}</p>
                  </div>
                  <p className="text-sm font-bold">R$ {item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mt-4">
              <p className="text-lg font-semibold">
                Total: R$ {cartItems.length * productData.price}
              </p>
              <Link
               to={'/fechar-pedido'}
              >
                <button
                  className="w-full py-3 mt-4 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Fechar o pedido
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};