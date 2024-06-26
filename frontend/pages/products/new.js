// pages/products/new.js

import { useRouter } from 'next/router';
import { useState } from 'react';

const ProductForm = ({ product }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: product ? product.name : '',
    description: product ? product.description : '',
    price: product ? product.price : '',
    category: product ? product.category : 'categoria1',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = product ? `http://localhost:5000/api/products/${product.id}` : 'http://localhost:5000/api/products';

    const method = product ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/');
    } else {
      console.error('Erro ao salvar o produto:', res.status);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>{product ? 'Editar Produto' : 'Novo Produto'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Descrição:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Preço:
          <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" required />
        </label>
        <label>
          Categoria:
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
        </label>
        <button type="submit">{product ? 'Salvar Alterações' : 'Adicionar Produto'}</button>
        <button onClick={() => router.push('/')}>Voltar</button>
      </form>
    </div>
  );
};

export default ProductForm;

export async function getServerSideProps({ query }) {
  const { id } = query;

  if (id) {
    // Lógica para buscar o produto com o ID especificado do backend para edição
    const res = await fetch(`http://localhost:5000/api/products/${id}`);
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  }

  return {
    props: {},
  };
}
