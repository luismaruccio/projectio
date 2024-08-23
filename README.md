# Projectio
## Descrição:
O Projectio é uma aplicação para gerenciamento de projetos, que inclui um backend desenvolvido em Ruby on Rails e um frontend desenvolvido em React.

## Estrutura do Projeto
O repositório está organizado da seguinte forma:

- `/back/projectio`: Contém o código-fonte do backend, desenvolvido em Ruby on Rails.
- `/front/projectio`: Contém o código-fonte do frontend, desenvolvido em React.

## Pré-requisitos
- Docker
- Rails
- Node
- Git
  
## Passos para Reproduzir o Projeto
### 1. Clonar o Repositório
```bash
git clone -b dev https://github.com/luismaruccio/projectio.git
cd projectio
```
### 2. Executar o Banco de Dados com Docker
Navegue até o diretório do backend e execute o seguinte comando para iniciar o banco de dados PostgreSQL em um contêiner Docker:

```bash
docker run --name projectio-db -e POSTGRES_USER=projectio -e POSTGRES_PASSWORD=projectio -e POSTGRES_DB=projectio_db -p 5432:5432 -d postgres:latest
```
Isso irá criar e executar um contêiner PostgreSQL com o nome projectio-db.
> Nota: você pode modificar as variáveis `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_DB`

### 3. Configurar as Variáveis de Ambiente no Backend
Navegue para o diretório `back/projectio` e configure as variáveis de ambiente. Crie um arquivo .env na raiz do diretório back/projectio ou exporte as variáveis diretamente no terminal:

```bash
export RAILS_ENV=production
export DATABASE_URL=postgresql://projectio:projectio@localhost:5432/projectio_db
export RAILS_MASTER_KEY=<sua_rails_master_key>
```
> Nota: se você modificou as variáveis `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_DB` deve atualizar o valores no `DATABASE_URL`

### 4. Rodar as Migrações do Banco de Dados
No diretório `back/projectio`, execute as migrações do banco de dados:

```bash
rails db:migrate
```
Certifique-se de substituir backend-image-name pelo nome da imagem Docker do backend.

### 5. Subir o Backend
Ainda no diretório `back/projectio`, execute o servidor Rails:

```bash
rails s -p 3001
```
Isso irá iniciar o servidor Rails na porta 3001.

### 6. Configurar e Subir o Frontend
Navegue para o diretório `front/projectio`, configure as variáveis de ambiente:

```bash
export REACT_APP_API_URL=http://localhost:3001
```
Depois, construa e inicie o servidor do frontend:

```bash
yarn start
```

O frontend estará disponível em http://localhost:3000.

### 7. Testar a Aplicação
Agora, você pode acessar a aplicação nos seguintes endpoints:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
