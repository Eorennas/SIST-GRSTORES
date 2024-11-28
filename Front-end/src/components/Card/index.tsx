import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

// Tipo para as categorias
type Category = {
    id: string;
    name: string;
    image: string; // Imagem associada à categoria
};

export default function Card() {
    const [categories, setCategories] = useState<Category[]>([]); // Estado para armazenar as categorias

    useEffect(() => {
        // Função para buscar categorias da API
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories');
                setCategories(response.data.categories); // Armazena as categorias no estado
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-stretch mx-5 sm:mx-10 lg:mx-80 gap-5 sm:gap-8 lg:gap-4">
            {categories.length > 0 ? (
                categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative flex justify-center items-center h-60 sm:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105"
                        style={{
                            backgroundImage: `url(${category.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <Link to={`/produtos/categoria/${category.id}`}>
                            <button className="relative text-white font-semibold text-lg sm:text-2xl w-60 py-2 sm:py-6 border-2">
                                {category.name.toUpperCase()}
                            </button>
                        </Link>
                    </div>
                ))
            ) : (
                <div className="text-center w-full py-10">Nenhuma categoria encontrada.</div>
            )}
        </div>
    );
}
