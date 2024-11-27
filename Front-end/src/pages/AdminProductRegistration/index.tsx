import React, { useState } from "react";
import Modal from "./modal"; // Ajuste o caminho conforme necessário

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
    setFormValues({
      nomeProduto: "",
      descricaoProduto: "",
      precoProduto: "",
      categoriaProduto: "",
      estoqueProduto: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Adicionar Produto
        </button>
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        formValues={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdminProductRegistration;
