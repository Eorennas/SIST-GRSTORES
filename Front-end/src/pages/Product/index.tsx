import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import Slide from "../../components/Slide/index";
import Card from "../../components/Card/index";
import Footer from "../../components/Footer/index";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
  stock: number;
  category: {
    id: string;
    name: string;
    description: string;
  };
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`, {});
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div className="text-center py-10">Carregando...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Produto não encontrado.</div>;
  }

  return (
    <div className="relative p-4 min-h-screen bg-gray-200">
      <button className="text-white border bg-black border-gray-400 px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
        <Link to="/">VOLTAR</Link>
      </button>

      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto bg-white rounded-lg shadow-md mt-6 overflow-hidden">
        {/* Imagem do Produto */}
        <div className="flex flex-col p-10 gap-4 lg:w-1/2">
          {product.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={product.name}
              className="rounded-lg object-contain h-11/12 h-96"
            />
          ))}
        </div>

        {/* Detalhes do Produto */}
        <div className="flex flex-col w-full lg:w-1/2 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Marca: <strong>{product.brand}</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Estoque disponível: <strong>{product.stock}</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Categoria: <strong>{product.category.name}</strong>
          </p>
          <button className="bg-black align-self-end text-white px-10 py-2 hover:bg-gray-800 transition rounded-lg ">
            Adicionar ao Carrinho
          </button>
        </div>

      </div>
      <div>
        <Slide />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
