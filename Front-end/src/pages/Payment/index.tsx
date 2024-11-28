import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';
import ProductHeader from '../../components/ProductHeader';

// Tipo para o item do carrinho
interface CartItem {
  img: string;
  title: string;
  quantityProduct: number;
  price: number;
}

export default function Payment() {
  const { state } = useLocation();
  const { cartItems, subtotal, cep, address, deliveryOption } = state || {};

  const [paymentMethod, setPaymentMethod] = useState('cartao');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const navigate = useNavigate();

  const handleFinalizePurchase = () => {
    if (paymentMethod === 'cartao') {
      const cardData = {
        cardNumber,
        cardExpiry,
        cardCVC,
      };
      localStorage.setItem('paymentCard', JSON.stringify(cardData));
      console.log('Dados do cartão salvos:', cardData);
    }
    alert('Compra finalizada com sucesso!');
    navigate('/concluido');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <ProductHeader />
      </div>

      {/* Carrinho de Itens */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Resumo do Pedido</h2>
        <div className="grid grid-cols-4 gap-10">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: CartItem, index: number) => (
              <div key={index} className="flex justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 rounded-md"
                  />
                  <div>
                    <p className="text-xl font-medium text-black">{item.title}</p>
                    <p className="text-sm">Quantidade: {item.quantityProduct}</p>
                    <p className="text-sm">Preço: R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Não há itens no carrinho.</p>
          )}
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Subtotal: R$ {subtotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Dados de Entrega */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Endereço de Entrega</h2>
        <p className="text-sm">CEP: {cep}</p>
        <p className="text-sm">Endereço: {address}</p>
        <p className="text-sm">Método de Entrega: {deliveryOption}</p>
      </div>

      {/* Opções de Pagamento */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Forma de Pagamento</h2>
        <div className="flex gap-4">
          {['cartao', 'boleto'].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-full border ${
                paymentMethod === option ? 'border-black' : 'border-gray-300'
              }`}
              onClick={() => setPaymentMethod(option)}
            >
              {option === 'cartao' ? 'Cartão de Crédito' : 'Boleto Bancário'}
            </button>
          ))}
        </div>
      </div>

      {/* Dados de Pagamento */}
      {paymentMethod === 'cartao' && (
        <div className="mb-6">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Número do Cartão
          </label>
          <InputMask
            mask="9999 9999 9999 9999"
            value={cardNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}

          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                id="cardNumber"
                placeholder="**** **** **** ****"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            )}
          </InputMask>

          <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mt-4">
            Data de Validade
          </label>
          <InputMask
            mask="99/99"
            value={cardExpiry}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardExpiry(e.target.value)}
          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                id="cardExpiry"
                placeholder="MM/AA"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            )}
          </InputMask>

          <label htmlFor="cardCVC" className="block text-sm font-medium text-gray-700 mt-4">
            Código de Segurança
          </label>
          <InputMask
            mask="999"
            value={cardCVC}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardCVC(e.target.value)}

          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                id="cardCVC"
                placeholder="***"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            )}
          </InputMask>
        </div>
      )}

      {paymentMethod === 'boleto' && (
        <div className="mb-6">
          <p className="text-sm">Você receberá um boleto bancário para realizar o pagamento.</p>
        </div>
      )}

      {/* Botões */}
      <div className="flex justify-between">
        <button
          className="py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
        <button
          className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={handleFinalizePurchase}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
