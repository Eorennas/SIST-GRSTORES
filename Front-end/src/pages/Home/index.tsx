import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Card from '../../components/Card';
import ContactFooter from '../../components/ContactFooter';
import Footer from '../../components/Footer';
import BackgroundHome from '../../Assets/Images/backgroundHome.jpg';
import ManHome from '../../Assets/Images/manHome.png';
import api from '../../services/api';
import ModalCart from '../../components/ModalCart';


export default function Home() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [categories, setCategories] = useState([]); // Estado para armazenar as categorias

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    useEffect(() => {
        // Função para buscar categorias da API usando Axios
        const fetchCategories = async () => {

            try {
                const response = await api.get('/categories')

                setCategories(response.data.categories); // Armazena as categorias no estado
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        };

        fetchCategories();
    }, []); // O array vazio [] garante que a função execute uma vez após o componente ser montado

   
    return (
        <>

            
            <div className="absolute w-full h-screen border-0">

                {/* Cabeçalho fixo no topo */}
                <Header />

                {/* Container do background e conteúdo */}
                <div
                    className="absolute top-15 left-0 w-full h-full bg-cover bg-center flex items-center border-0"
                    style={{ backgroundImage: `url(${BackgroundHome})` }}
                >
                    {/* Texto à esquerda */}
                    <div className="ml-36 text-white max-w-lg">
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            O ESSENCIAL <br /> PARA O HOMEM <br /> QUE BUSCA MAIS.
                        </h1>
                        <Link to={"/produtos"}>
                            <button className="mt-5 px-6 py-2 bg-white text-black text-2xl font-semibold shadow hover:bg-gray-200 transition rounded-lg">
                                COMPRAR
                            </button>
                        </Link>
                    </div>

                    {/* Homem à direita */}
                    <div className="absolute bottom-12 right-0 h-[90%] lg:h-[95%]">
                        <img
                            src={ManHome}
                            alt="Man"
                            className="h-full object-contain"
                        />
                    </div>
                </div>
          

            <div className="flex justify-center items-center mt-[calc(100vh)] p-10 gap-10">
                {categories.length > 0 ? (
                    categories?.map((category:any) => (
                        <Link to={`/produtos/${category.id}`} key={category.id}>
                            <button className="w-40 px-4 py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transform transition-transform duration-300 hover:scale-105 border-2 rounded-lg">
                                {category.name}
                            </button>
                        </Link>
                    ))
                ) : (
                    <div className="text-center w-full py-10">Nenhuma categoria encontrada.</div>
                )}
            </div>

            <div>
                <Slide />
            </div>
            {/* <div>
                <Card />
            </div> */}
            <div>
                <ContactFooter />
            </div>
            <div>
                <Footer />
            </div>
        </div>

       </>
    );
}
