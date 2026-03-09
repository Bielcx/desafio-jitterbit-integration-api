# Desafio Técnico - API de Integração de Pedidos

Esta é uma API desenvolvida em **Node.js** para realizar o processamento e mapeamento (**Data Mapping**) de pedidos de venda, integrando os dados com um banco de dados **MongoDB Atlas**.

O projeto foca em transformar estruturas de dados em português para um padrão internacional em inglês antes do armazenamento.

## 🚀 Tecnologias Utilizadas
* **Node.js** e **Express** (Framework Web)
* **MongoDB Atlas** (Banco de Dados NoSQL na nuvem)
* **Mongoose** (ODM para modelagem de dados)
* **Dotenv** (Gerenciamento de variáveis de ambiente e segurança)

## 🛠️ Funcionalidades
- **POST `/order`**: Recebe o pedido com campos em português, realiza o mapeamento para inglês e salva no MongoDB.
- **GET `/order/:id`**: Busca um pedido específico pelo `numeroPedido` (orderId).

### 📝 Exemplo de Mapeamento (Data Mapping)

**Entrada (Payload enviado via Postman/Thunder Client):**
```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}