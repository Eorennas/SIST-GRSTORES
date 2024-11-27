import React from "react";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  formValues: { nomeCategoria: string; descricaoCategoria: string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CategoryModal: React.FC<Modal> = ({
  isOpen,
  onClose,
  formValues,
  onChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg w-[400px] p-6 relative shadow-md">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        >
          X
        </button>

        {/* Conteúdo do Modal */}
        <h2 className="text-lg font-semibold mb-6 text-center text-white">
          Adicionar Categoria
        </h2>
        <form onSubmit={onSubmit}>
          {/* Campo Nome */}
          <div className="mb-4">
            <input
              id="nomeCategoria"
              type="text"
              placeholder="Nome"
              value={formValues.nomeCategoria}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Descrição */}
          <div className="mb-4">
            <textarea
              id="descricaoCategoria"
              placeholder="Descrição"
              value={formValues.descricaoCategoria}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Botão Salvar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
