import Header from '../../components/Header';
import BackgroundHome from '../../Assets/backgroundHome.jpg';
import ManHome from '../../Assets/manHome.png';

export default function Home() {
    return (
        <div className="relative w-full h-screen">
            {/* Cabeçalho fixo no topo */}
            <Header />

            {/* Container do background e conteúdo */}
            <div
                className="absolute top-15 left-0 w-full h-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${BackgroundHome})` }}
            >
                {/* Texto à esquerda */}
                <div className="ml-36 text-white max-w-lg">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        O ESSENCIAL PARA O HOMEM QUE BUSCA MAIS.
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
        </div>
    );
}
