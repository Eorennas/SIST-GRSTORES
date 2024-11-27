import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Definindo o tipo dos produtos
type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function PagProduct() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
    const [products, setProducts] = useState<Product[]>([]); // Estado para todos os produtos
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Estado para produtos filtrados

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        const token = localStorage.getItem("GRtoken"); // Obtém o token do localStorage

        if (!token) {
            console.error("Token não encontrado.");
            return;
        }

        try {
            const response = await api.get("/products", {
                headers: {
                    Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
                },
            });
            setProducts(response.data); // Define os produtos no estado
            setFilteredProducts(response.data); // Inicializa os produtos filtrados com todos
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
        }
    };

    // Carregar os produtos ao montar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    // Função para filtrar produtos
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="absolute w-full h-screen border-0">
            <Header />

            {/* Barra de pesquisa e filtro */}
            <div className="flex justify-center items-center mt-40 mx-10">
                <input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-400 rounded-l-md px-4 py-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            {/* Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="m-2 flex flex-col justify-center mb-14">
                            <div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover mb-4 bg-gray-200"
                                />
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800">
                                            {product.name}
                                        </h3>
                                        <p className="text-2xl text-gray-600">{product.price}</p>
                                    </div>
                                    <div>
                                        <Link to={"/compra"}>
                                            <button className="bg-black text-white px-10 py-2 hover:bg-gray-800 transition">
                                                COMPRAR
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center w-full py-10">Carregando produtos...</div>
                )}
            </div>

            <Footer />
        </div>
    );
}
