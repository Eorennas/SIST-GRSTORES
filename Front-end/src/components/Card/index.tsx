import { Link } from 'react-router-dom'
import Blusa from '../../Assets/Images/blusas.png';
import Calca from '../../Assets/Images/calca.png';
import Calcado from '../../Assets/Images/calcado.png';
import Bermuda from '../../Assets/Images/bermuda.png';
import api from '../../services/api'

export default function Card() {
    return (
        <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-stretch mx-5 sm:mx-10 lg:mx-80 gap-5 sm:gap-8 lg:gap-4">
            <div
                className="relative flex justify-center items-center h-60 sm:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${Blusa})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50"></div>
                <Link to={"/produtos"}>
                    <button className="relative text-white font-semibold text-lg sm:text-2xl w-60 py-2 sm:py-6 border-2 ">
                        BLUSAS
                    </button>
                </Link>
            </div>
            <div
                className="relative flex justify-center items-center h-60 sm:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${Calca})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50 "></div>
                <Link to={"/produtos"}>
                    <button className="relative text-white font-semibold text-lg sm:text-2xl w-60 py-2 sm:py-6 border-2">
                        CALÇAS
                    </button>
                </Link>
            </div>
            <div
                className="relative flex justify-center items-center h-60 sm:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${Calcado})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50"></div>
                <Link to={"/produtos"}>
                    <button className="relative text-white font-semibold text-lg sm:text-2xl w-60 py-2 sm:py-6 border-2">
                        CALÇADOS
                    </button>
                </Link>
            </div>
            <div
                className="relative flex justify-center items-center h-60 sm:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${Bermuda})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50"></div>
                <Link to={"/produtos"}>
                    <button className="relative text-white font-semibold text-lg sm:text-2xl w-60 py-2 sm:py-6 border-2">
                        BERMUDAS
                    </button>
                </Link>
            </div>
        </div>
    );
}
