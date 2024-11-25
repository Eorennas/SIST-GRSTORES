import { Link } from "react-router-dom";
import Blusa from "../../Assets/Images/blusas.png";
import Calca from "../../Assets/Images/calca.png";
import Calcado from "../../Assets/Images/calcado.png";
import Bermuda from "../../Assets/Images/bermuda.png";

import Header from '../../components/Header'

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

export default function ProductsGrid() {
    return (
        <div className="absolute w-full h-screen border-0">
            <Header />
            {/* Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-40 mx-10">
                {products.map((product) => (
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
                                        <Link
                                            to={'/compra'}
                                        >
                                            COMPRAR
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
