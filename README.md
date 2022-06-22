# Arruma memes
É um projeto o objetivo de adicionar categorias em imagens e/ou videos, renderizar em cliente, podendo também editar categorias e favoritos em cliente. Projeto pessoal criado unicamente com fins educacionais<br/>
Para usar esse projeto: 
- Clone o repositório em sua máquina
- Com o [Node.js](https://nodejs.org/en/), digite `npm install` para baixar todas as dependências
- Na pasta `server` crie o seu arquivo `.env` contendo `DATABASE_URL` que contenha uma string que redirecione para o seu banco de dados postgres seguindo o formato:
```
postgresql://[USER]:[PASSWORD]@[ROOT]:[PORT]/[DATABASE]
```
- Ainda na pasta de servidor execute `npx prisma db push`
- Adicione os memes que queira ver em execução

ATENÇÃO: O PROJETO AINDA ESTÁ LONGE DE FICAR FINALIZADO<br>
Caso queira contribuir dê seu fork e crie uma pull request