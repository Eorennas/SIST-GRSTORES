import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import ManFooter from '../../Assets/Images/manFooter.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Limpa erros anteriores
        setLoading(true); // Inicia o estado de carregamento

        try {
            const response = await axios.post('/login', {
                email,
                password,
            });

            const { token, user } = response.data; // Supondo que a API retorne um token e dados do usuário
            console.log('Login bem-sucedido:', user);

            // Salve o token no localStorage (ou em outra solução de armazenamento)
            localStorage.setItem('token', token);

            // Redirecione para outra página após login bem-sucedido
            navigate('/dashboard');
        } catch (err: any) {
            console.error('Erro ao fazer login:', err);
            setError(err.response?.data?.message || 'Erro ao autenticar');
        } finally {
            setLoading(false); // Finaliza o estado de carregamento
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black bg-cover">
            {/* Seção à esquerda: Imagem do homem */}
            <div className="flex-1 flex flex-col justify-start items-center relative">
                <div className="absolute top-8 left-8">
                    <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                        <Link to="/">VOLTAR</Link>
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
                            <FaUser className="w-20 h-20 text-black" />
                        </div>
                        <h2 className="text-2xl font-bold mt-4">LOGIN</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        {/* Exibe mensagens de erro */}
                        {error && (
                            <div className="text-red-500 mb-4">{error}</div>
                        )}
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="email">
                                Digite seu email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
                                placeholder="Seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center py-10">
                            <button
                                type="submit"
                                className="flex justify-center items-center w-[50%] bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                                disabled={loading}
                            >
                                {loading ? 'CARREGANDO...' : 'ENTRAR'}
                            </button>
                        </div>
                        <div className="flex justify-between">
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
