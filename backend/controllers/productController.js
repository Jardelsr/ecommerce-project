const Product = require('../models/Product');

// Obtém todos os produtos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cria um novo produto
const createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtém um produto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualiza um produto
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deleta um produto
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { getSignedUrl } = require('../services/s3Service');

const getImageUrl = (req, res) => {
  const key = process.env.AWS_IMAGE_KEY;
  const bucketName = process.env.AWS_BUCKET_NAME;

  try {
    const url = getSignedUrl(bucketName, key);
    res.json({ url });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar a URL da imagem', error });
  }
};

module.exports = {
  getAllProducts,
  getImageUrl,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
