import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);  // Configura os produtos com os dados da resposta
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.id}>
              <a href={`/products/${product._id}`}>
                {product.name}
              </a>
            </li>
          ))
        ) : (
          <li>Nenhum produto encontrado</li>
        )}
      </ul>
      <a href={"/products/new"}>
        Novo Produto
      </a>
    </div>
  );
}
