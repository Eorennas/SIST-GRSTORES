import { useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/Images/logo.png';

export default function Register() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const cpfRef = useRef<HTMLInputElement | null>(null);
  const profileRef = useRef<HTMLInputElement | null>(null);
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
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white px-6">
      {/* Botão Voltar e Logo */}
      <div className="flex flex-col items-center sm:items-start gap-10 w-full sm:w-1/2">
        <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">
          <Link
           to={"/"}
           >
            VOLTAR
          </Link>
        </button>
        <div className="">
          <img
            className="w-[70%] mb-40"
            src={Logo} alt="logo" />
        </div>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-1/2 max-w-md gap-6"
      >
        <input
          type="text"
          placeholder="Nome"
          ref={nameRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <input
          type="tel"
          placeholder="Telefone"
          ref={phoneRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <input
          type="text"
          placeholder="CPF"
          ref={cpfRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <input
          type="text"
          placeholder="Perfil"
          ref={profileRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <input
          type="password"
          placeholder="Senha"
          ref={passwordRef}
          className="border-b border-gray-400 outline-none focus:border-black transition p-2"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
