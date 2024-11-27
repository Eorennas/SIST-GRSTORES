import React from "react";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  formValues: {
    nomeProduto: string;
    descricaoProduto: string;
    precoProduto: string;
    categoriaProduto: string;
    estoqueProduto: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ProductModal: React.FC<Modal> = ({
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
          Adicionar Produto
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              id="nomeProduto"
              type="text"
              placeholder="Nome"
              value={formValues.nomeProduto}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="descricaoProduto"
              placeholder="Descrição"
              value={formValues.descricaoProduto}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <input
              id="precoProduto"
              type="number"
              placeholder="Preço"
              value={formValues.precoProduto}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              id="categoriaProduto"
              value={formValues.categoriaProduto}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Selecione uma Categoria
              </option>
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
              <option value="categoria3">Categoria 3</option>
              <option value="categoria4">Categoria 4</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              id="estoqueProduto"
              type="number"
              placeholder="Estoque"
              value={formValues.estoqueProduto}
              onChange={onChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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

export default ProductModal;
