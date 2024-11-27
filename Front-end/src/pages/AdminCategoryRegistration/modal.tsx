import React from 'react';

interface AdicionarProjetoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdicionarProjetoModal: React.FC<AdicionarProjetoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 relative shadow-md">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {/* Conteúdo do Modal */}
        <h2 className="text-lg font-semibold mb-4 text-center">Adicionar Projetos</h2>
        <form>
          {/* Campo Nome */}
          <div className="mb-4">
            <input
              id="nomeProjeto"
              type="text"
              placeholder="Nome do Projeto"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Descrição */}
          <div className="mb-4">
            <input
              id="descricaoProjeto"
              type="text"
              placeholder="Descrição do Projeto"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão Salvar */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdicionarProjetoModal;
