import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Card from '../../components/Card';
import ContactFooter from '../../components/ContactFooter';
import Footer from '../../components/Footer';
import BackgroundHome from '../../Assets/backgroundHome.jpg';
import ManHome from '../../Assets/manHome.png';

export default function Home() {
    return (
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
                    <button className="mt-5 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition">
                        COMPRAR
                    </button>
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
                <button className="w-40 px-4 py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    BLUSAS
                </button>
                <button className="w-40 px-4  py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    CALÇAS
                </button>
                <button className="w-40 px-4  py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    CALÇADOS
                </button>
                <button className="w-40 px-4  py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    BERMUDAS
                </button>
            </div>
            <div>
                <Slide />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <ContactFooter />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
