import { useLocation } from 'react-router-dom';

interface CartItem {
    img: string;
    title: string;
    quantityProduct: number;
    price: number;
}

export default function Cart() {
    const { state } = useLocation(); // Pegando o state que foi passado de Checkout
    const { cartItems, subtotal } = state || {}; // Desestruturando as informações

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white">

            {/* Carrinho de Itens */}
            <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">Resumo do Pedido</h2>
                <div className="grid grid-cols-4 gap-10">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((item: CartItem, index: number) => (
                            <div key={index} className="flex justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-16 h-16 rounded-md"
                                    />
                                    <div>
                                        <p className="text-xl font-medium text-black">{item.title}</p>
                                        <p className="text-sm">Quantidade: {item.quantityProduct}</p>
                                        <p className="text-sm">Preço: R$ {item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Não há itens no carrinho.</p>
                    )}
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold">Subtotal: R$ {subtotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
