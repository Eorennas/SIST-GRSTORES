export default function ProductHeader() {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                        🛍️
                    </div>
                    <span className="text-sm font-medium mt-2">sacola</span>
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
                        👤
                    </div>
                    <span className="text-sm font-medium mt-2">identificação</span>
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
                        💳
                    </div>
                    <span className="text-sm font-medium mt-2">pagamento</span>
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center">
                        ✔️
                    </div>
                    <span className="text-sm font-medium mt-2">confirmação</span>
                </div>
            </div>
        </div>
    )
}