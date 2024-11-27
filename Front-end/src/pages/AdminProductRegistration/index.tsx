import React, { useState, useEffect } from "react";
import Modal from "./modal"; // Ajuste o caminho conforme necessário
import api from "../../services/api"; // Ajuste o caminho da sua API

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: { name: string } | string; // A categoria pode ser um objeto ou uma string
  brand: string;
  stock: number;
  min_stock: number;
  images: string[];
}

const AdminProductRegistration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nomeProduto: "",
    descricaoProduto: "",
    precoProduto: "",
    categoriaProduto: "",
    estoqueProduto: "",
  });
  const [products, setProducts] = useState<Product[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      name: formValues.nomeProduto,
      description: formValues.descricaoProduto,
      price: parseFloat(formValues.precoProduto),
      categoryId: formValues.categoriaProduto,
      brand: "TechBrand", // Pode ser ajustado conforme necessário
      stock: parseInt(formValues.estoqueProduto),
      min_stock: 5, // Defina conforme necessário
      images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"], // Imagens podem ser ajustadas
    };

    try {
      // Envia os dados do produto para o backend
      await api.post("/products", newProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("GRtoken")}`,
        },
      });
      // Atualiza a lista de produtos
      fetchProducts();
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("GRtoken")}`,
        },
      });

      // Verifique se a resposta já é um array diretamente
      if (Array.isArray(response.data)) {
        setProducts(response.data); // Atualiza os produtos com a resposta
      } else {
        setProducts([]); // Caso a resposta não seja um array, inicializa como array vazio
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    // Chama a função para buscar os produtos assim que o componente for montado
    fetchProducts();
  }, []);

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
              <th className="border border-gray-700 p-4 text-left">Marca</th>
              <th className="border border-gray-700 p-4 text-left">Estoque</th>
              <th className="border border-gray-700 p-4 text-left">Estoque Mínimo</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-700 p-4">{product.name}</td>
                  <td className="border border-gray-700 p-4">{product.description}</td>
                  <td className="border border-gray-700 p-4">{product.price}</td>
                  <td className="border border-gray-700 p-4">
                    {typeof product.category === "object"
                      ? product.category?.name
                      : product.category || "Categoria não disponível"}
                  </td>
                  <td className="border border-gray-700 p-4">{product.brand}</td>
                  <td className="border border-gray-700 p-4">{product.stock}</td>
                  <td className="border border-gray-700 p-4">{product.min_stock}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-700 p-4 text-gray-400 text-center"
                  colSpan={7}
                >
                  Nenhum produto cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AdminProductRegistration;
