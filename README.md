# E-commerce Project

## Introdução

Este é um projeto simples de e-commerce que permite aos usuários cadastrarem produtos e adiciona-los a um carrinho de compras. O backend é construído com Node.js e MongoDB, enquanto o frontend utiliza Next.js. Também foi usado uma integração com a AWS para exibir uma imagem hospedada na S3.

Consta no projeto apenas o que consegui implementar nesses últimos dias, pois foi um projeto que criei do zero para o teste da seleção da vaga.

## Tecnologias Utilizadas

- Node.js
- MongoDB
- Next.js
- Docker
- AWS S3

## Arquitetura da Aplicação
```bash
[Usuário] --> [Next.js App] --> [API Gateway] --> [Node.js API] --> [MongoDB]
                                                       |
                                                       V
                                                 [AWS Services]
```                                   
### Explicação do Fluxo
*Usuário:* Interage com a aplicação através do frontend desenvolvido com Next.js, navegando pelos produtos e adicionando itens ao carrinho.

*Next.js App:* Renderiza as interfaces de usuário e consome a API RESTful do backend para obter dados e realizar operações.

*API Gateway:* Gerencia o tráfego de entrada para a API do backend.

*Node.js API:* Implementa lógica de negócios, processa requisições HTTP, realiza operações no banco de dados MongoDB e interage com serviços AWS conforme necessário.

*MongoDB:* Armazena dados persistentes da aplicação de produtos e itens do carrinho.

*AWS Services:* Oferece suporte para armazenamento da imagem usada no produto.

## Instalação

### Pré-requisitos

- Docker

É preciso ter o Docker instalado e executando em sua máquina.

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Jardelsr/ecommerce-project.git
    cd ecommerce-project
    ```

2. Monte as imagens Docker e as inicie para rodas o programa

    ```bash
    docker-compose up --build
    ```

3. Acesse `http://localhost:3000` para ver a aplicação em execução.

### Endpoints da API
```http
GET http://localhost:5000/api/products/ // retorna lista de produtos
POST http://localhost:5000/api/products/ // adiciona um produto no banco
    Body:
    {
        "name": "Nome do produto",
        "description": "Descrição do produto",
        "price": 00.00,
        "category": "Categoria"
    }
GET http://localhost:5000/api/image-url/ // retorna url de imagem na s3
GET http://localhost:5000/api/products/:id // retorna produto pelo id
DELETE http://localhost:5000/api/products/:id // exclui produto pelo id
PUT http://localhost:5000/api/products/:id // edita um produto pelo id
GET http://localhost:5000/api/cart/ // retorna os produtos no carrinho de compras
POST http://localhost:5000/api/cart/add // adiciona produto no carrinho de compras
    Body:
    {
    "productId": "667da5b6757d899bfed90251",  // ID válido de um produto no MongoDB (como string)
    "quantity": 2,                            // Quantidade do produto a adicionar
    "price": 29.99                            // Preço do produto
    }
DELETE http://localhost:5000/api/cart//:id // remove produto do carrinho de compras
```

## Funcionalidades que eu implementaria se houvesse mais tempo

- Registro de usuários para login
- Autenticação JWT e Autorização dos usuários
- Listagem de produtos com paginação e filtros
- Checkout de pagamentos, fazendo integração com Stripe
- Processamento de pedidos
- Migração para popular o banco de dados
- Separar o projeto e diferenciar o painel admnistrativo para gerenciar os produtos das paginas de compra e exibição de produtos

#  Respondendo as perguntas do *O que gostaríamos de ver em seu projeto?* do case técnico:
## Qual a sua participação neste projeto?
Minha participação neste projeto envolveu o planejamento, arquitetura e implementação tanto do frontend quanto do backend. Eu projetei a estrutura da aplicação, implementei funcionalidades principais como o carrinho de compras, integração com MongoDB, e configuração de serviços AWS. Basicamente fiz o projeto todo sozinho.

## Qual seu maior desaﬁo dentro do projeto? (Trazer exemplos do que foi codiﬁcado)
O maior desafio que enfrentei, sem sombra de dúvidas, foi lidar com o pouco tempo de projeto e lidar com o frontend em next.js, pois não estou acostumado a desenvolver pro frontend. Mas como o projeto é simples, consegui superar esse dificuldade.

## Qual era o processo de desenvolvimento? (estrutura, boa prática, design patterns, clean code)
Desenvolvi o projeto fazendo uma estruturação do código em camadas (models, controllers, routes), utilizando MVC como design pattern e focando em utilizar clean code. Também usei git como versionador de código, com branches para desenvolvimento das funcionalidades.

## Como era o processo de gestão do código? (utilizou algum versionador?, tem aprovação do que está subindo?)
Utilizei o git e como fui o único desenvolvedor, eu mesmo aprovei o que subia

## Foram feitos testes automatizados?
Não devido ao pouco tempo que tive. Fiz testes manuais durante o desenvolvimento.

## Tem integração com outras aplicações?
Sim, faz integração com a S3 da AWS

## Qual a arquitetura da aplicação? (micro serviço, monolito, nuvem, on premisse...)
A arquitetura da aplicação foi baseada em uma abordagem monolítica, onde o frontend e o backend são componentes integrados em uma única aplicação

## Além dos desaﬁos do projeto, quais outras tecnologias, processos e frameworks você tem domínio?
Além das tecnologias usadas no projeto, tenho domínio na linguagem PHP e seus frameworks (Symfony, Sonata, CodeIgniter), python, java, javascript e MySQL 
