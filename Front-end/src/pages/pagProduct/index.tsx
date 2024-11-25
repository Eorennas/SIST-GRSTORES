import { Link } from "react-router-dom";
import { useState } from "react"; // Importando useState para gerenciar o estado
import Blusa from "../../Assets/Images/blusas.png";
import Calca from "../../Assets/Images/calca.png";
import Calcado from "../../Assets/Images/calcado.png";
import Bermuda from "../../Assets/Images/bermuda.png";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Definindo o tipo dos produtos
type Product = {
    id: number;
    title: string;
    price: string;
    image: string;
};

// Definindo os dados dos produtos
const products: Product[] = [
    { id: 1, title: "Kit 3 T-shirts", price: "R$150,00", image: Blusa },
    { id: 2, title: "Kit 2 T-shirts", price: "R$85,00", image: Calca },
    { id: 3, title: "Kit 3 T-shirts", price: "R$170,00", image: Calcado },
    { id: 4, title: "T-shirt Básica", price: "R$45,00", image: Bermuda },
    { id: 5, title: "Kit 3 T-shirts", price: "R$150,00", image: Blusa },
    { id: 6, title: "Kit 2 T-shirts", price: "R$85,00", image: Calca },
    { id: 7, title: "Kit 3 T-shirts", price: "R$170,00", image: Calcado },
    { id: 8, title: "T-shirt Básica", price: "R$45,00", image: Bermuda },
];

export default function PagProduct() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
    const [filteredProducts, setFilteredProducts] = useState(products); // Estado para produtos filtrados

    // Função para filtrar produtos
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(term)
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
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col items-center">
                        <div className="mb-20">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-80 object-cover mb-4"
                            />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        {product.title}
                                    </h3>
                                    <p className="text-2xl text-gray-600">{product.price}</p>
                                </div>
                                <div>
                                    <button className="bg-black text-white px-10 py-2 hover:bg-gray-800 transition">
                                        <Link to={'/compra'}>COMPRAR</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
