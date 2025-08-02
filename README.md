# Login-Node-CRUD

API RESTful em Node.js com Express, MongoDB e autenticação JWT.

## Funcionalidades

- Cadastro de usuários com senha criptografada
- Login com geração de token JWT
- Listagem, atualização e remoção de usuários
- Rotas públicas e privadas protegidas por autenticação

## Tecnologias

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- Bcrypt

## Como rodar o projeto

1. **Clone o repositório**

   ```
   git clone https://github.com/iscaio/Login-Node-CRUD.git
   cd Login-Node-CRUD
   ```

2. **Instale as dependências**

   ```
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto com:

   ```
   MONGODB_URI=seu_mongodb_uri
   JWT_SECRET=sua_chave_secreta
   ```

4. **Inicie o servidor**
   ```
   npm start
   ```
   O servidor irá rodar na porta 3000 por padrão.

## Rotas principais

- `POST /api/register` — Cadastro de usuário
- `POST /api/login` — Login e geração de token

### Rotas privadas (necessário JWT no header Authorization)

- `GET /api/list-users` — Listar todos os usuários
- `GET /api/list-user/:id` — Buscar usuário por ID
- `PATCH /api/update-user/:id` — Atualizar usuário por ID
- `DELETE /api/delete-user/:id` — Remover usuário por ID

## Observações

- Para acessar rotas privadas, inclua o token JWT no header `Authorization`.
- Não exponha sua chave JWT ou URI do banco de dados publicamente.

---

Feito por [Caio Andrade](https://github.com/iscaio)
