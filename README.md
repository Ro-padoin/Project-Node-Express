<h1> Projeto Node Express || Talker Manager </h1>

<br/>

## Descricao do Projeto

Projeto desenvolvido no bloco 22 - Modulo 3 - Desenvolvimento em BackEnd na turma 17 - Trybe. </br>

Desenvolver uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes. 

<br/>

## Desenvolvimento

Desenvolver alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo `fs`.

O arquivo `talker.json` (fornecido pela Trybe) será utilizado como base para fazer as requisições da API. As operações de **leitura** e **escrita** dos requisitos **devem** ser feitas nesse arquivo usando os métodos da biblioteca `fs`. Com exceção da rota `/login`.

Todo o desenvolvimento se encontra na raiz deste projeto, na pasta "helpers" e no arquivo "index.js".

<br/>

## Habilidades desenvolvidas

* Realizar operações assíncronas utilizando callbacks;
* Realizar operações assíncronas utilizando Promises;
* Ler e escrever arquivos localmente com NodeJS;
* Escrever seus próprios scripts que criam e consomem Promises;
* Reescrever código que usa callbacks para que use Promises;
* Realizar chamadas de funções de forma consciente;
* Entender os conceitos básicos de como o JavaScript funciona;
* Detectar e solucionar problemas no código de forma mais objetiva;
* Entender a diferença entre execução síncrona e assíncrona;
* Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
* Escrever APIs utilizando Node e Express;
* Entender a estrutura de uma aplicação Express e como organizar seu código;
* Criar rotas e aplicar middlewares.

<br/>

## Tecnologias utilizadas

* Node.js v16;
* Express;
* Insomnia;
* Nodemon;
* Lint;
* Npm;
* Javascript.

<br/>

## Execução da Aplicação

Para executar a aplicação no navegador, você precisa:

- Clonar o repositório para maquina local, utilizando o comando no terminal:
  git@github.com:Ro-padoin/Project-Node-Express.git

- Npm run dev: para executar o nodemon.

- Npm run restore: caso a response de leitura do arquivo 'talker.json' 
retorne um array vazio.

- Utilizar a ferramenta API Rest Client de sua preferencia para testar as rotas (usei Insomnia).

Observação: Node versão 16.

<br/>

## Requisitos e critérios avaliados:

<br/>

### Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

#### Os seguintes pontos serão avaliados:

- O endpoint deverá retornar um código de `status 200` com o token gerado e o seguinte corpo: { "token": "7mqaVRXJSp886CGr" }.

- O endpoint deve retornar um token aleatório a cada vez que for acessado.

### Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

As regras de validação são:
- o campo `email` é obrigatório;
- o campo `email` deve ter um email válido;
- o campo `password` é obrigatório;
- o campo `password` deve ter pelo menos 6 caracteres.
 
#### Os seguintes pontos serão avaliados:

- Caso o campo `email` não seja passado ou esteja vazio, retorne um código de `status 400` com o seguinte corpo: {  "message": "O campo \"email\" é obrigatório" }.

- Caso o email passado não seja válido, retorne um código de `status 400` com o seguinte corpo: { "message": "O \"email\" deve ter o formato \"email@email.com\"" }.

- Caso o campo `password` não seja passado ou esteja vazio retorne um código de `status 400` com o seguinte corpo: { "message": "O campo \"password\" é obrigatório"}.

- Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400` com o seguinte corpo: { "message": "O \"password\" deve ter pelo menos 6 caracteres"}

<br/>

### Crie o endpoint GET `/talker`

#### Os seguintes pontos serão avaliados:

- O endpoint deve o retornar o `status 200` e um array com todas as pessoas palestrantes cadastradas.
- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o `status 200`.

<br/>

### Crie o endpoint GET `/talker/:id`

- O endpoint deve retornar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/talker/1` deve retornar o objeto com os dados referentes ao talker cadastrado no id especificado na rota.

- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint deve retornar o `status 404` com { "message": "Pessoa palestrante não encontrada" }.

<br/>

### Crie o endpoint POST `/talker`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo. O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo: { "message": "Token não encontrado" }.

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo: { "message": "Token inválido" }

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo: { "message": "O campo \"name\" é obrigatório" }.

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo: { "message": "O \"name\" deve ter pelo menos 3 caracteres" }.

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo: { "message": "O campo \"age\" é obrigatório" }

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo: { "message": "A pessoa palestrante deve ser maior de idade" }.

- O campo `talk` deverá ser um objeto com as seguintes chaves:

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.
    - Caso a data não respeite o formato, retorne `status 400`, com o seguinte corpo: { "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\"" }.

  - A chave `rate` deve ser um inteiro de 1 à 5. Caso contrário retorne `status 400`, com o seguinte corpo: { "message": "O campo \"rate\" deve ser um inteiro de 1 à 5" }.


  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias. 

  - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo: { "message": "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios" }.

- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

### Crie o endpoint PUT `/talker/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O endpoint terá que realizar todas as validações, referentes a token e campos de cadastro, contidas da rota `POST /talker`.


### Crie o endpoint DELETE `/talker/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

- A requisição deve ter o token de autenticação nos headers, no campo `authorization` e realizar as validações referentes ao token contidas na rota `POST /talker`.

### Crie o endpoint GET `/talker/search?q=searchTerm`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o objeto do(s) palestrante(s) que satisfaçam a busca `search` do endpoint.

- A requisição deve ter o token de autenticação nos headers, no campo `authorization` e realizar as validações referentes ao token contidas na rota `POST /talker`.

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

<br/>

## Colaboradores

Projeto realizado individualmente.

<br/>

## Status

Finalizado.

<br/>

## Desempenho

100% nos requisitos totais.
