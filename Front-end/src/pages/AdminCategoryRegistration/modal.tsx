import React, { useState } from "react";
import api from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoryCreated: (category: { id: string; name: string; description: string }) => void;
}

const CategoryModal: React.FC<ModalProps> = ({ isOpen, onClose, onCategoryCreated }) => {
  const [formValues, setFormValues] = useState({
    nomeCategoria: "",
    descricaoCategoria: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Estruturando o payload para o backend
    const payload = {
      name: formValues.nomeCategoria,
      description: formValues.descricaoCategoria,
    };

    try {
      // Obtenha o token do localStorage
      const token = localStorage.getItem("GRtoken"); // Atualize a chave conforme necessário

      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }

      // Incluindo o token no cabeçalho da requisição
      const response = await api.post("/categories", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Categoria criada com sucesso:", response.data);

      // Passar a nova categoria para o componente pai
      onCategoryCreated(response.data);

      // Fechar o modal após sucesso
      onClose();
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="mb-4">
            <input
              id="nomeCategoria"
              type="text"
              placeholder="Nome"
              value={formValues.nomeCategoria}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Descrição */}
          <div className="mb-4">
            <textarea
              id="descricaoCategoria"
              placeholder="Descrição"
              value={formValues.descricaoCategoria}
              onChange={handleChange}
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
