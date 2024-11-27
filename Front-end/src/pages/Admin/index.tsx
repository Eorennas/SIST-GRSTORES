import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Painel do Administrador</h1>

            <div className="flex gap-6">
                {/* Botão de Categorias */}
                <Link to={"/adm/cadastro-category"}>
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
                    >
                        Categorias
                    </button>
                </Link>

                {/* Botão de Produtos */}
                <Link to={"/adm/cadastro-product"}>
                    <button
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 shadow-lg"
                    >
                        Produtos
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
