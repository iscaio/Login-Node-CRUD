# > Login Node CRUD API

API RESTful de autenticação e gerenciamento de usuários com Node.js, Express, MongoDB e autenticação via JWT.  
Ideal para projetos que exigem controle de acesso e operações básicas de CRUD.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Json Web Token)
- Dotenv
- Bcrypt
- Nodemon (desenvolvimento)

---

## Estrutura de Pastas

---

```plaintext
📦 Login-Node-CRUD
├── 📁 src
│   ├── 📁 config
│   │   └── db.js                 # Conexão com o MongoDB usando Mongoose
│   ├── 📁 controllers
│   │   ├── auth.controller.js    # Lógica de cadastro e login
│   │   └── user.controller.js    # Lógica de CRUD dos usuários
│   ├── 📁 middlewares
│   │   └── auth.middleware.js    # Middleware para proteger rotas privadas com JWT
│   ├── 📁 models
│   │   └── user.model.js         # Schema do usuário (Mongoose)
│   ├── 📁 routes
│   │   ├── public.routes.js      # Rotas públicas (cadastro, login)
│   │   └── private.routes.js     # Rotas protegidas (CRUD de usuários)
│   └── app.js                    # Arquivo principal da aplicação Express
├── server.js                     # Inicializa e escuta o servidor
├── .env                          # Variáveis de ambiente (MongoDB, JWT_SECRET, etc)
├── .gitignore                    # Ignora node_modules, .env, etc
└── package.json                 # Dependências e scripts do projeto
```

---

## Como Rodar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/iscaio/Login-Node-CRUD.git
cd Login-Node-CRUD
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o arquivo `.env`:**

Crie um arquivo `.env` com:

```env
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
JWT_SECRET=sua_chave_secreta
```

4. **Execute o projeto:**

```bash
npm -- watch server.js
```

---

## Rotas da API (Prefixo: `/api/v1`)

```bash
http://localhost:3000
```

### Públicas

| Método | Rota               | Descrição              |
| ------ | ------------------ | ---------------------- |
| POST   | `/api/v1/cadastro` | Cadastrar novo usuário |
| POST   | `/api/v1/login`    | Autenticar usuário     |

### Privadas (requer token JWT)

| Método | Rota                | Descrição                |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/v1/users`     | Listar todos os usuários |
| GET    | `/api/v1/users/:id` | Obter usuário por ID     |
| PUT    | `/update-user/:id`  | Atualizar usuário        |
| DELETE | `/delete-user/:id`  | Deletar usuário          |

> Use o token JWT no header: `Authorization: Bearer <token>`

---

## Boas Práticas e Sugestões

- **Separação de responsabilidades:** rotas, controladores, modelos e middlewares bem definidos.
- **Segurança:** senhas criptografadas com `bcrypt` e autenticação JWT.
- **Variáveis de ambiente:** nunca exponha sua `JWT_SECRET` ou credenciais do banco.
- **Testes:** Adicionar testes automatizados com Jest ou Supertest. // Proxima atualização

---

## Em Desenvolvimento | Proximas Atualizações

- ✅ CRUD de usuários
- ✅ Autenticação JWT
- 🚧 Sistema de permissões por hierarquia (adm, user)
- 🚧 Testes automatizados
- ✅ Documentação Swagger

---

## ✨ Autor

Feito por [Caio Andrade (@iscaio)](https://github.com/iscaio)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
