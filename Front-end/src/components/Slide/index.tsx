import { Swiper, SwiperSlide } from "swiper/react";

const ProductSlider = () => {
  const products = [
    { id: 1, title: "Kit 3 T-shirts", price: "R$150,00", image: "../../Assets/blusa.jpg" },
    { id: 2, title: "Kit 2 T-shirts", price: "R$85,00", image: "../../Assets/calca.jpg" },
    { id: 3, title: "Kit 3 T-shirts", price: "R$170,00", image: "../../Assets/calcado.jpg" },
    { id: 4, title: "T-shirt Básica", price: "R$45,00", image: "../../Assets/bermuda.jpg" },
  ];

  return (
    <div className="py-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
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
                COMPRAR
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
