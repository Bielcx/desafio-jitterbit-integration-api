const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexão com o Banco (MongoDB)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/desafioJitterbit';
mongoose.connect(mongoURI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro de conexão:", err));

// Esquema do Banco (conforme a imagem do desafio)
const orderSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date,
  items: [{
    productId: Number,
    quantity: Number,
    price: Number
  }]
});

const Order = mongoose.model('Order', orderSchema);

// --- ROTA DE CRIAÇÃO (POST) COM MAPPING ---
app.post('/order', async (req, res) => {
  try {
    const data = req.body;

    // Transformação dos dados (Português -> Inglês/Banco)
    const mappedOrder = {
      orderId: data.numeroPedido,
      value: data.valorTotal,
      creationDate: new Date(data.dataCriacao),
      items: data.items.map(item => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const savedOrder = await Order.create(mappedOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: "Erro no processamento", error });
  }
});

// --- ROTA DE BUSCA (GET) ---
app.get('/order/:id', async (req, res) => {
  const order = await Order.findOne({ orderId: req.params.id });
  if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
  res.json(order);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor em http://localhost:${PORT}`));