import React, { useState } from "react";

const AdminProductRegistration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nomeProduto: "",
    descricaoProduto: "",
    precoProduto: "",
    categoriaProduto: "",
    estoqueProduto: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormValues({ nomeProduto: "", descricaoProduto: "", precoProduto: "", categoriaProduto: "", estoqueProduto: "", }); // Resetar formulário
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formValues);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Pesquise o produto"
            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Adicionar Produto
          </button>
        </div>
      </header>

      {/* Tabela */}
      <div className="p-6">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-4 text-left">Nome</th>
              <th className="border border-gray-700 p-4 text-left">Descrição</th>
              <th className="border border-gray-700 p-4 text-left">Preço</th>
              <th className="border border-gray-700 p-4 text-left">Categoria</th>
              <th className="border border-gray-700 p-4 text-left">Estoque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-700 p-4 text-gray-400 text-center"
                colSpan={5}
              >
                Nenhum produto cadastrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-lg w-[400px] p-6 relative shadow-md">
            {/* Botão de Fechar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
            >
              X
            </button>

            {/* Conteúdo do Modal */}
            <h2 className="text-lg font-semibold mb-6 text-center text-white">
              Adicionar Produto
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Campo Nome */}
              <div className="mb-4">
                <input
                  id="nomeProduto"
                  type="text"
                  placeholder="Nome"
                  value={formValues.nomeProduto}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Campo Descrição */}
              <div className="mb-4">
                <textarea
                  id="descricaoProduto"
                  placeholder="Descrição"
                  value={formValues.descricaoProduto}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              {/* Campo Nome */}
              <div className="mb-4">
                <input
                  id="precoProduto"
                  type="number"
                  placeholder="Preço"
                  value={formValues.precoProduto}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Campo Nome */}
              <div className="mb-4">
                <select
                  id="categoriaProduto"
                  value={formValues.categoriaProduto}
                  onChange={handleChange}
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


              {/* Campo Nome */}
              <div className="mb-4">
                <input
                  id="estoqueProduto"
                  type="number"
                  placeholder="Estoque"
                  value={formValues.estoqueProduto}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      )}
    </div>
  );
};

export default AdminProductRegistration;