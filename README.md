# Desafio Técnico - API de Integração de Pedidos

Esta é uma API desenvolvida em **Node.js** para realizar o processamento e mapeamento (Data Mapping) de pedidos de venda, integrando os dados com um banco de dados **MongoDB Atlas**.

## 🚀 Tecnologias Utilizadas
* **Node.js** e **Express** (Backend)
* **MongoDB Atlas** (Banco de Dados NoSQL)
* **Mongoose** (Modelagem de dados)
* **Dotenv** (Segurança de variáveis de ambiente)

## 🛠️ Funcionalidades
- **POST /order**: Recebe o pedido em português, realiza o mapeamento dos campos para inglês e salva no banco.
- **GET /order/:id**: Busca um pedido específico pelo ID.

## 📋 Como Rodar o Projeto
1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Crie um arquivo `.env` na raiz e adicione sua `MONGO_URI`.
4. Inicie o servidor com `node server.js`.

---
Desenvolvido por **Gabriel Cavalcanti**