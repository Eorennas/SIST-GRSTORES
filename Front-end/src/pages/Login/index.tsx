import { Link } from 'react-router-dom';
import ManFooter from '../../Assets/Images/manFooter.png';
import { FaUser } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-black bg-cover">
            {/* Seção à esquerda: Imagem do homem */}
            <div className="flex-1 flex flex-col justify-start items-center relative">
                <div className="absolute top-8 left-8">
                    <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                        <Link to="/">
                            VOLTAR
                        </Link>
                    </button>
                </div>
                <img
                    src={ManFooter}
                    alt="Homem"
                    className="h-auto max-h-full w-auto"
                />
            </div>

            {/* Seção à direita: Formulário de login */}
            <div className="flex-1 flex justify-center items-center">
                <div className="bg-transparent border-2 border-gray-600 rounded-2xl p-8 w-[50%] text-white">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-white rounded-full p-4">
                            <FaUser
                                className='w-20 h-20 text-black' />
                        </div>
                        <h2 className="text-2xl font-bold mt-4">LOGIN</h2>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="email">
                                Digite seu email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
                                placeholder="Seu email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="password">
                                Digite sua senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
                                placeholder="Sua senha"
                            />
                        </div>
                        <div className='flex justify-center py-10'>
                            <button
                                type="submit"
                                className="flex justify-center items-center w-[50%] bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                            >
                                ENTRAR
                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <Link
                                to="/registro"
                                className="items-center mt-4 text-sm text-gray-400 hover:text-white transition"
                            >
                                Fazer cadastro
                            </Link>
                            <Link
                                to="/recuperar-senha"
                                className="items-center mt-4 text-sm text-gray-400 hover:text-white transition"
                            >
                                Recuperar senha
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
