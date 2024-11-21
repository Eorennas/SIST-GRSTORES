import { useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/Images/logo.png'; // Substitua pelo caminho correto da imagem

export default function Register() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const cpfRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const cpf = cpfRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    console.log({ name, email, phone, cpf, password });
    // Adicione a lógica de envio dos dados para o backend aqui
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white bg-cover">
      {/* Seção à esquerda: Imagem da mulher */}
      <div className="flex-1 flex flex-col justify-start items-center relative">
        <div className="absolute top-8 left-8">
          <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            <Link to="/login">
              VOLTAR
            </Link>
          </button>
        </div>
        <img
          src={Logo}
          alt="Mulher"
          className="h-auto max-h-full w-auto"
        />
      </div>

      {/* Seção à direita: Formulário de registro */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-transparent border-gray-600 rounded-2xl p-8 w-[50%]">
          <div className="flex flex-col items-center mb-6">
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Nome"
              />
            </div>
            <div className="mb-8">
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                id="phone"
                ref={phoneRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Telefone"
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                id="cpf"
                ref={cpfRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="CPF"
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                id="password"
                ref={passwordRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Senha"
              />
            </div>
            <div className="flex justify-center py-10">
              <button
                type="submit"
                className="flex justify-center items-center w-[50%] bg-black text-white font-bold py-2 rounded hover:bg-gray-800 transition"
              >
                CADASTRAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
