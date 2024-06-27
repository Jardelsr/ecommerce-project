import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
      fetchProduct();
    }
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/image-url/`);
        setImageUrl(response.data.url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };
    fetchImageUrl();
  }, [id]);

  const handleEdit = () => {
    router.push(`/products/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      router.push('/'); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => router.push('/')}>Voltar</button>
    </div>
  );
}
