import React, { useState, useEffect } from "react";
import api from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    nomeProduto: "",
    descricaoProduto: "",
    precoProduto: "",
    categoriaProduto: "",
    marcaProduto: "",
    estoqueProduto: "",
    estoqueMinimoProduto: "",
    imagensProduto: "",
  });

  const [categories, setCategories] = useState<any[]>([]); // Armazenar as categorias aqui

  // Carregar categorias ao abrir o modal
  useEffect(() => {
    if (isOpen) {
      // Carregar categorias da API
      const fetchCategories = async () => {
        try {
          const token = localStorage.getItem("GRtoken");

          if (!token) {
            throw new Error("Token de autenticação não encontrado.");
          }

          const response = await api.get("/categories", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setCategories(response.data.categories); // Armazenar as categorias recebidas da API
        } catch (error) {
          console.error("Erro ao carregar categorias:", error);
        }
      };
      fetchCategories();
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const productData = {
      name: formValues.nomeProduto,
      description: formValues.descricaoProduto,
      price: parseFloat(formValues.precoProduto),
      categoryId: formValues.categoriaProduto,
      brand: formValues.marcaProduto,
      stock: parseInt(formValues.estoqueProduto),
      min_stock: parseInt(formValues.estoqueMinimoProduto),
      images: formValues.imagensProduto.split(","),
    };
  
    try {
      const token = localStorage.getItem("GRtoken");
  
      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }
  
      const response = await api.post("/products", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const createdProduct = response.data; // Presume que o produto criado é retornado
      localStorage.setItem("createdProductId", createdProduct.id); // Salva o ID do produto no localStorage
  
      // Fechar o modal após sucesso
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar produto:", error);
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
          Adicionar Produto
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Nome Produto */}
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

          {/* Campo Descrição Produto */}
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

          {/* Campo Preço Produto */}
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

          {/* Campo Categoria Produto */}
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
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Campo Marca Produto */}
          <div className="mb-4">
            <input
              id="marcaProduto"
              type="text"
              placeholder="Marca"
              value={formValues.marcaProduto}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Estoque Produto */}
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

          {/* Campo Estoque Mínimo Produto */}
          <div className="mb-4">
            <input
              id="estoqueMinimoProduto"
              type="number"
              placeholder="Estoque Mínimo"
              value={formValues.estoqueMinimoProduto}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo URL Imagens Produto */}
          <div className="mb-4">
            <input
              id="imagensProduto"
              type="text"
              placeholder="URLs das imagens (separadas por vírgula)"
              value={formValues.imagensProduto}
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
  );
};

export default ProductModal;
