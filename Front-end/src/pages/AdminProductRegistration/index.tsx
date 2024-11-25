import React, { useState } from "react";

const AdminProductRegistration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nomeCategoria: "",
    descricaoCategoria: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormValues({ nomeCategoria: "", descricaoCategoria: "" }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de submissão pode ser implementada aqui
    console.log("Dados do formulário:", formValues);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Pesquise aqui o nome da categoria"
            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Adicionar Categoria
          </button>
        </div>
      </header>

      {/* Table */}
      <div className="p-6">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-4 text-left">Nome</th>
              <th className="border border-gray-700 p-4 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-700 p-4 text-gray-400 text-center"
                colSpan={2}
              >
                Nenhuma categoria cadastrada.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              X
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              Adicionar Categoria
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nomeCategoria"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome da Categoria
                </label>
                <input
                  id="nomeCategoria"
                  type="text"
                  placeholder="Nome da Categoria"
                  value={formValues.nomeCategoria}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="descricaoCategoria"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descrição da Categoria
                </label>
                <textarea
                  id="descricaoCategoria"
                  placeholder="Descrição da Categoria"
                  value={formValues.descricaoCategoria}
                  onChange={handleChange}
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
      )}
    </div>
  );
};

export default AdminProductRegistration;
