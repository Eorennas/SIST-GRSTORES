import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que rola a página para o topo ao mudar de rota
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, [pathname]); // Executa quando o pathname muda

  return null; // Não renderiza nada
};

export default ScrollToTop;
