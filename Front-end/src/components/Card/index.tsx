export default function Card() {
    return (
        <div className="shadow-sm pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-stretch mx-5 sm:mx-10 lg:mx-80 gap-5 sm:gap-8 lg:gap-10">
            <div className="shadow py-20 px-10 sm:py-28 sm:px-20 lg:py-40 lg:px-20 border-2 flex justify-center items-center">
                <button className="w-32 sm:w-60 px-4 py-2 sm:py-6 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    BLUSAS
                </button>
            </div>
            <div className="shadow py-20 px-10 sm:py-28 sm:px-20 lg:py-40 lg:px-20 border-2 flex justify-center items-center">
                <button className="w-32 sm:w-60 px-4 py-2 sm:py-6 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    CALÇAS
                </button>
            </div>
            <div className="shadow py-20 px-10 sm:py-28 sm:px-20 lg:py-40 lg:px-20 border-2 flex justify-center items-center">
                <button className="w-32 sm:w-60 px-4 py-2 sm:py-6 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    CALÇADOS
                </button>
            </div>
            <div className="shadow py-20 px-10 sm:py-28 sm:px-20 lg:py-40 lg:px-20 border-2 flex justify-center items-center">
                <button className="w-32 sm:w-60 px-4 py-2 sm:py-6 bg-white text-black font-semibold shadow hover:bg-gray-200 transition border-2">
                    BERMUDAS
                </button>
            </div>
        </div>
    );
}
