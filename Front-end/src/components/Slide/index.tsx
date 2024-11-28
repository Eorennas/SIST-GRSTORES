import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import api from "../../services/api";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pack from '../../Assets/Images/pack.png';

// Definindo o tipo dos produtos
type Product = {
  id: number;
  name: string;
  price: string;
  images: string;
  createdAt?: string; // Caso a API forneça a data de criação
};

export default function Slide() {
  const [products, setProducts] = useState<Product[]>([]);

  // Função para buscar os produtos da API com o token de autorização
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      const data: Product[] = res.data;

      // Ordenar os produtos por data de criação (se disponível) e limitar a 8 itens
      const sortedProducts = data
        .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
        .slice(0, 8);

      setProducts(sortedProducts);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-10">
      <div className="mx-10">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={4}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="m-2 flex flex-col justify-center mb-14 transform transition-transform duration-300 hover:scale-105"
                  style={{ boxShadow: '1px 1px 3px 3px #898b8f' }}
                >
                  <div>
                    <img
                      src={product?.images || Pack}
                      alt={product.name}
                      className="w-full h-80 object-cover bg-gray-200"
                    />
                    <div className="flex justify-between items-end p-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-black">
                          {product.name}
                        </h3>
                        <p className="text-2xl text-black">R$: {product.price}</p>
                      </div>
                      <div>
                        {/* Link para a página do produto com o ID */}
                        <Link to={`/produto/${product.id}`}>
                          <button className="bg-black text-white px-10 py-2 hover:bg-gray-800 transition rounded-lg">
                            COMPRAR
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center w-full py-10">Carregando produtos...</div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
