import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import api from "../../services/api";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Definindo o tipo dos produtos
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function Slide() {
  const [products, setProducts] = useState<Product[]>([]);

  // Função para buscar os produtos da API com o token de autorização
  const fetchProducts = async () => {
    const token = localStorage.getItem("GRtoken"); // Obtém o token do localStorage

    if (!token) {
      console.error("Token não encontrado");
      return; // Caso o token não exista, você pode decidir o que fazer
    }

    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho da requisição
        },
      });
      const data: Product[] = response.data; // Supondo que os dados dos produtos estão na resposta
      setProducts(data); // Armazena os produtos no estado
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Chama a função para buscar os produtos assim que o componente for montado
  }, []);

  return (
    <div className="py-10">
      <div className="mx-10">
        <Swiper
          modules={[Pagination, Navigation]} // Módulos do Swiper
          slidesPerView={4}
          loop={true} // Ativa loop infinito
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide em telas pequenas
            768: { slidesPerView: 2 }, // 2 slides em telas médias
            1024: { slidesPerView: 4 }, // 3 slides em telas grandes
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <SwiperSlide key={product.id}>
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
