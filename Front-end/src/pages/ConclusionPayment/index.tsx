import { useNavigate } from 'react-router-dom';
import ProductHeader from '../../components/ProductHeader';

export default function Conclusion() {
  const navigate = useNavigate();

  const finishBuy = () => {
    localStorage.removeItem('carts')
    navigate('/')
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <ProductHeader />
      </div>

      {/* Mensagem de Conclusão */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Compra Concluída!</h1>
        <p className="text-lg text-gray-700">
          Sua compra foi realizada com sucesso. Obrigado por escolher nossa loja!
        </p>
      </div>

      {/* Botão para Página Inicial */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => finishBuy()}
          className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Voltar à Página Inicial
        </button>
      </div>
    </div>
  );
}
