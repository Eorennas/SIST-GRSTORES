import Swal from "sweetalert2";
type CardProps = {
  img: string;
  price: string;
  title: string;
  quantityProduct: number | 0;
}

export const saveToLocalStorage = (newProduct:CardProps) => {
  // Recupera os produtos existentes no localStorage
  const product:any = localStorage.getItem("carts") 
  const storedProducts:CardProps[] = JSON.parse(product) || [];

  // Verifica se o produto já existe no array
  const existingProductIndex = storedProducts.findIndex(
    (product:CardProps) =>
      product.title === newProduct.title &&
      product.price === newProduct.price &&
      product.img === newProduct.img
  );

  if (existingProductIndex !== -1) {
    // Produto já existe: aumenta a quantidade
    storedProducts[existingProductIndex].quantityProduct += newProduct.quantityProduct;
  } else {
    // Produto não existe: adiciona ao array
    storedProducts.push(newProduct);
  }

  // Salva o array atualizado no localStorage
  localStorage.setItem("carts", JSON.stringify(storedProducts));
  const showPopup = () => {
    Swal.fire({
      title: 'Adicionado ao carrinho',
      toast: true,
      position: 'top-right',
      icon: 'check',
      iconColor: '#FFF',
      background: '#ffff',
      color: '#000',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      showCloseButton: true,
    });
  }
  showPopup()
};

export const getFromLocalStorage = () => {
  const data:any = localStorage.getItem("carts")
  // Recupera os produtos armazenados no localStorage
  const storedProducts = JSON.parse(data) || [];

  // Exibe no console para visualização (opcional)
  console.log("Retrieved carts:", storedProducts);

  return storedProducts; // Retorna o array de produtos
};

export const getTotalItemCart = () => {
  const data:any = localStorage.getItem("carts")
  // Recupera os produtos armazenados no localStorage
  const storedProducts = JSON.parse(data) || [];

  // Exibe no console para visualização (opcional)
  console.log("Retrieved carts:", storedProducts);

  return storedProducts.length; // Retorna o array de produtos
};

