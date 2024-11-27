import React, { useState, useEffect } from "react";
import Modal from './modal'
import api from "../../services/api";

interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

const AdminCategoryRegistration: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Chama a função para buscar as categorias assim que o componente for montado
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("GRtoken")}`,
        },
      });

      // Logando a resposta para verificar
      console.log(response.data);

      // Atualizando o estado com as categorias recebidas
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Pesquise a categoria"
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

      {/* Tabela */}
      <div className="p-6">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-4 text-left">Nome</th>
              <th className="border border-gray-700 p-4 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category.id}>
                  <td className="border border-gray-700 p-4">{category.name}</td>
                  <td className="border border-gray-700 p-4">{category.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-700 p-4 text-gray-400 text-center"
                  colSpan={2}
                >
                  Nenhuma categoria cadastrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default AdminCategoryRegistration;
