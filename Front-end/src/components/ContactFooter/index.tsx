import BackgroundContacts from '../../Assets/backgroundContacts.png';
import ManFooter from '../../Assets/manFooter.png';

export default function ContactFooter() {
    return (
        <div className="relative w-full h-[90vh]">

            {/* Fundo com imagem de fundo */}
            <div
                className="absolute top-60 left-0 w-full h-full bg-cover bg-center flex"
                style={{ backgroundImage: `url(${BackgroundContacts})` }}
            >
                {/* Homem à esquerda */}
                <div className="absolute top-14 right-[40%] h-full w-[70%] flex items-end">
                    <img
                        src={ManFooter}
                        alt="Man"
                        className="h-[140%] w-auto object-contain"
                    />
                </div>

                {/* Texto à direita */}
                <div className="flex flex-col justify-center items-center absolute right-10 lg:right-80 bottom-40 text-white max-w-lg text-left">
                    <h1 className="text-center text-4xl lg:text-7xl font-bold leading-tight mb-5">
                        GR STORES SUA MELHOR VERSÃO.
                    </h1>
                    <p className="text-center text-sm lg:text-base mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <button className="mt-5 px-10 py-4 bg-white text-black font-semibold shadow hover:bg-gray-200 transition flex items-center">
                        <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                        WHATSAPP
                    </button>
                </div>
            </div>
        </div>
    );
}
