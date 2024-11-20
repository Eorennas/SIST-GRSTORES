import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Blusa from "../../Assets/Images/blusas.png";
import Calca from "../../Assets/Images/calca.png";
import Calcado from "../../Assets/Images/calcado.png";
import Bermuda from "../../Assets/Images/bermuda.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
];

export default function Slide() {
    return (
        <div className="py-10">
            <Swiper
                modules={[Pagination, Navigation]} // Módulos do Swiper
                slidesPerView={4}
                loop={true} // Ativa loop infinito
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1 }, // 1 slide em telas pequenas
                    768: { slidesPerView: 2 }, // 2 slides em telas médias
                    1024: { slidesPerView: 3 }, // 3 slides em telas grandes
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-gray-100 p-4 m-14 shadow-md flex flex-col items-center mb-14">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {product.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{product.price}</p>
                            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
                                <Link
                                 to={'/compra'}
                                >
                                COMPRAR
                                </Link>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
