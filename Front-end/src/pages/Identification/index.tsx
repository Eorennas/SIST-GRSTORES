interface IdentificationPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Identification() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Receber');

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              🛍️
            </div>
            <span className="text-sm font-medium mt-2">sacola</span>
          </div>
          <div className="w-16 h-px bg-black"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
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

      {/* Delivery Options */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">ENTREGA</h2>
        <div className="flex gap-4">
          <button
            className={px-4 py-2 rounded-full border ${deliveryOption === 'Receber' ? 'border-black' : ''}}
            onClick={() => setDeliveryOption('Receber')}
          >
            RECEBER
          </button>
          <button
            className={px-4 py-2 rounded-full border ${deliveryOption === 'Retirar' ? 'border-black' : ''}}
            onClick={() => setDeliveryOption('Retirar')}
          >
            RETIRAR
          </button>
        </div>
      </div>import React, { useState } from 'react';

interface IdentificationPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Identification() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Receber');

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              🛍️
            </div>
            <span className="text-sm font-medium mt-2">sacola</span>
          </div>
          <div className="w-16 h-px bg-black"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
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

      {/* Delivery Options */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">ENTREGA</h2>
        <div className="flex gap-4">
          <button
            className={px-4 py-2 rounded-full border ${deliveryOption === 'Receber' ? 'border-black' : ''}}
            onClick={() => setDeliveryOption('Receber')}
          >
            RECEBER
          </button>
          <button
            className={px-4 py-2 rounded-full border ${deliveryOption === 'Retirar' ? 'border-black' : ''}}
            onClick={() => setDeliveryOption('Retirar')}
          >
            RETIRAR
          </button>
        </div>
      </div>

      {/* Address Input */}
      {deliveryOption === 'Receber' && (
        <div className="mb-6">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
            Digite seu CEP
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
            Endereço completo
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Digite seu endereço"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          onClick={onPrevious}
        >
          Voltar
        </button>
        <button
          className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={onNext}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

      {/* Address Input */}
      {deliveryOption === 'Receber' && (
        <div className="mb-6">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
            Digite seu CEP
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
            Endereço completo
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Digite seu endereço"
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          onClick={onPrevious}
        >
          Voltar
        </button>
        <button
          className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={onNext}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};