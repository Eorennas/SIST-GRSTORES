import React from 'react';

interface AdicionarProjetoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdicionarProjetoModal: React.FC<AdicionarProjetoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4 text-center">Adicionar Projetos</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nomeProjeto" className="block text-sm font-medium text-gray-700">
              Nome do Projeto
            </label>
            <input
              id="nomeProjeto"
              type="text"
              placeholder="Nome do Projeto"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="descricaoProjeto" className="block text-sm font-medium text-gray-700">
              Descrição do Projeto
            </label>
            <textarea
              id="descricaoProjeto"
              placeholder="Descrição do Projeto"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdicionarProjetoModal;
