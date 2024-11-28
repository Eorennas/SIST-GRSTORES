import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductHeader from '../../components/ProductHeader';
import Cart from '../../components/Cart';
import api from '../../services/api';

export default function Identification() {
  const { state } = useLocation(); // Pegando o state que foi passado de Checkout
  const { cartItems, subtotal } = state || {}; // Desestruturando as informações
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [country, setCountry] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Receber');
  const navigate = useNavigate();

  // Função para enviar os dados ao backend
  const handleSubmitAddress = async () => {
    try {
      // Obtém o userId do localStorage
      const userId = localStorage.getItem('userId');

      if (!userId) {
        throw new Error('Usuário não autenticado.');
      }

      const response = await api.post('/address', {
        user_id: userId,
        street: address,
        number,
        complement,
        city,
        state: stateAddress,
        zip_code: cep,
        country,
        is_default: true,
      });

      console.log('Endereço enviado com sucesso:', response.data);
    } catch (error: any) {
      console.error('Erro ao enviar o endereço:', error.response?.data?.message || error.message);
    }
  };

  const handleContinue = () => {
    // Primeiro, envia o endereço ao backend
    handleSubmitAddress();

    // Depois, navega para a tela de pagamento
    navigate('/pagamento', {
      state: {
        cartItems,
        subtotal,
        cep,
        address,
        number,
        complement,
        city,
        stateAddress,
        country,
        deliveryOption,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <ProductHeader />
      </div>

      {/* Carrinho de Itens */}
      <div>
        <Cart />
      </div>

      {/* Delivery Options */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">ENTREGA</h2>
        <div className="flex gap-4">
          {['Receber', 'Retirar'].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-full border ${
                deliveryOption === option ? 'border-black' : 'border-gray-300'
              }`}
              onClick={() => setDeliveryOption(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Address Input */}
      {deliveryOption === 'Receber' && (
        <div className="mb-6">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="00000-000"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mt-4">
            Endereço
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Digite seu endereço"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mt-4">
            Número
          </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Número"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mt-4">
            Complemento
          </label>
          <input
            type="text"
            id="complement"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            placeholder="Complemento"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-4">
            Cidade
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cidade"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mt-4">
            Estado
          </label>
          <input
            type="text"
            id="state"
            value={stateAddress}
            onChange={(e) => setStateAddress(e.target.value)}
            placeholder="Estado"
            className="w-full mt-2 p-3 border rounded-lg"
          />
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mt-4">
            País
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="País"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
        <button
          className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
