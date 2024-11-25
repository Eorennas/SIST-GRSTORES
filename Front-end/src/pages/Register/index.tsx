import { useRef, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importe o useNavigate
import Logo from '../../Assets/Images/logo.png'; // Substitua pelo caminho correto da imagem
import api from '../../services/api';

export default function Register() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const cellphoneRef = useRef<HTMLInputElement | null>(null);
  const cpfRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate(); // Inicialize o useNavigate

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const cellphone = cellphoneRef.current?.value || "";
    const cpf = cpfRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    console.log({ name, email, cellphone, cpf, password });

    const data = {
      name,
      email,
      cellphone,
      cpf,
      password,
    };

    try {
      const response = await api.post('/customers', data);
      console.log("Usuário cadastrado:", response.data);
      alert("Cadastro realizado com sucesso!");

      // Redirecione para a página de login
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Por favor, tente novamente.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white bg-cover">
      {/* Seção à esquerda: Imagem */}
      <div className="flex-1 flex flex-col justify-start items-center relative">
        <div className="absolute top-8 left-8">
          <Link to="/login">
            <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              VOLTAR
            </button>
          </Link>
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="h-auto max-h-full w-auto"
        />
      </div>

      {/* Seção à direita: Formulário de registro */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-transparent border-gray-600 rounded-2xl p-8 w-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Nome"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                id="cellphone"
                ref={cellphoneRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Telefone"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                id="cpf"
                ref={cpfRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="CPF"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                id="password"
                ref={passwordRef}
                className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none"
                placeholder="Senha"
                required
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
