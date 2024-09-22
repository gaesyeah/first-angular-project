# protótipo de catalogo de hotéis

Aplicação de front-end, onde estou simplesmente praticando angular pela primeira vez, é apenas um protótipo.

## Como funciona?

é renderizado uma lista de hotéis, e ao clicar em saiba mais o usuário é redirecionado para a pagina do hotel em questão, com mais detalhes sobre o mesmo.

## Possíveis futuras implementações e melhorias

- adicionar um estado e fazer com que o slider do angular material mude o tema da pagina, para white e dark mode
- Mais informações e dados no objeto do hotel;
- Seleção do hotel e implementação de um form, para preenchimento de dados, além de um sistema de pagamento, para que o hotel possa ser comprado (apenas uma simulação);
- Enriquecimento da página, adicionando mais botões, com outras paginas contendo informações a mais e embelezamento no geral, para se parecer mais com uma verdadeira SPA encontrada no mercado.

## Tecnologias utilizadas

Para este projeto, foram as principais utilizadas:

- Angular;
- Angular Material;
- json-server.

## Como rodar em desenvolvimento

Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Rodar o json-server para simular uma api, com o comando: `json-server --watch db.json --port 3000`;
- E por ultimo, rodar o projeto em si com o comando: `ng serve`
