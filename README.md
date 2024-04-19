🎉Desafio Jogo da Memória 🎉
Oie pessoal, tudo bem com vocês? 🦊

No desafio de hoje vamos testar a capacidade de memorização do usuário, implementando um jogo de memória que utiliza as cartas to Pokémon TCG! 💖

Este desafio foca na habilidade de manipular estado, lógica de jogo complexa, e proporcionar uma experiência de usuário interativa e envolvente, tudo isso sem a necessidade de se conectar a uma API externa. Para isso vocês vão precisar baixar as cartas que eu selecionei, no total foram selecionadas 31 cartas, porém sintam-se a vontade para baixarem mais. Eu peguei elas deste site aqui.

Tem um anexo com as cartas para download aqui no Learning Rocks na mesma seção em que vocês estão lendo esse texto, nele estão as 31 cartas e uma carta adicional, que representa o verso de cada carta.

🚀Descrição do Desafio
Desenvolver um jogo de memorização onde o usuário deve encontrar o par da carta selecionada. No início do jogo todas as cartas estarão viradas de costas, quando o usuário clicar numa delas, esta será virada e ficará visível para o usuário; quando ele clicar numa segunda carta esta (e a anterior) ficarão visíveis para o usuário por 1.5s, se ambas as cartas forem idênticas, remove ambas do jogo, caso forem diferentes desvira ambas (deixa o verso visível).
📝Requisitos Funcionais
Tabuleiro Personalizável: A quantidade de cartas em jogo não deve ser fixa no código, ela deve ser parametrizável. Permitir o usuário alterar a quantidade de cartas no jogo é opcional.
Temporizador: Inclua um temporizador que conta o tempo desde o início do jogo até a sua conclusão. O usuário deve tentar completar o jogo no menor tempo possível.
Pontuação e Penalidades: Implemente um sistema de pontuação baseado no número de movimentos realizados e no tempo decorrido. Adicione penalidades por movimentos incorretos (por exemplo, perder pontos ou adicionar segundos ao temporizador). Dica: Pontos= Pontuação Base− (Constante de Decaimento×Tempo em Segundos) e Penalidade = Penalidade Base + (Constante de Decaimento×Tempo em Segundos). Lembrando para não ficar valores negativos ou nulos!
Efeitos Visuais e Sonoros: Inclua efeitos visuais (animações ao virar as cartas, completar um par, etc.) e efeitos sonoros (por exemplo, quando um par é encontrado, quando ocorre um erro, ao vencer o jogo) para tornar o jogo mais envolvente.
Placar de Líderes: Mantenha um placar local com as pontuações mais altas (ou tempos mais rápidos), permitindo ao usuário ver como sua pontuação se compara às anteriores.
(EXTRA) Níveis de Dificuldade: Adicione diferentes níveis de dificuldade ao jogo (por exemplo, fácil, médio, difícil), que podem alterar o tamanho do tabuleiro, o tempo limite para completar o jogo, ou introduzir penalidades mais severas por erros. Uma sugestão legal é adicionar uma dificuldade Hardcore, onde o usuário pode virar uma mesma carta apenas uma quantidade fixa de vezes, por exemplo duas vezes, ou seja, caso ele clicar numa carta, tentar achar o par e errar, na próxima vez que ele clicar nessa carta tem que achar o par, caso contrário game over.
🛠️Requisitos Técnicos
Utilize custom hooks para gerenciamento de estado e efeitos.
A lógica do jogo deve ser claramente separada da interface do usuário.
Assegure que o jogo seja responsivo e possa ser jogado em diferentes dispositivos e tamanhos de tela.
Bônus points para quem propiciar uso do teclado para jogar.
👀Critérios de Avaliação
Todos os requisitos técnicos especificados (com exceção dos bônus points) são obrigatórios, cada requisito funcional poderá receber uma nota entre 0 e 1. O esperado de quem fez todos os requisitos sem os extras é uma nota 5
🎨 Usem a criatividade e procurem apresentar um resultado final que seja agradável não apenas para o usuário, mas também para quem for ler o código (eu 🦊)🎉Desafio Jogo da Memória 🎉
Oie pessoal, tudo bem com vocês? 🦊

No desafio de hoje vamos testar a capacidade de memorização do usuário, implementando um jogo de memória que utiliza as cartas to Pokémon TCG! 💖

Este desafio foca na habilidade de manipular estado, lógica de jogo complexa, e proporcionar uma experiência de usuário interativa e envolvente, tudo isso sem a necessidade de se conectar a uma API externa. Para isso vocês vão precisar baixar as cartas que eu selecionei, no total foram selecionadas 31 cartas, porém sintam-se a vontade para baixarem mais. Eu peguei elas deste site aqui.

Tem um anexo com as cartas para download aqui no Learning Rocks na mesma seção em que vocês estão lendo esse texto, nele estão as 31 cartas e uma carta adicional, que representa o verso de cada carta.

🚀Descrição do Desafio
Desenvolver um jogo de memorização onde o usuário deve encontrar o par da carta selecionada. No início do jogo todas as cartas estarão viradas de costas, quando o usuário clicar numa delas, esta será virada e ficará visível para o usuário; quando ele clicar numa segunda carta esta (e a anterior) ficarão visíveis para o usuário por 1.5s, se ambas as cartas forem idênticas, remove ambas do jogo, caso forem diferentes desvira ambas (deixa o verso visível).
📝Requisitos Funcionais
Tabuleiro Personalizável: A quantidade de cartas em jogo não deve ser fixa no código, ela deve ser parametrizável. Permitir o usuário alterar a quantidade de cartas no jogo é opcional.
Temporizador: Inclua um temporizador que conta o tempo desde o início do jogo até a sua conclusão. O usuário deve tentar completar o jogo no menor tempo possível.
Pontuação e Penalidades: Implemente um sistema de pontuação baseado no número de movimentos realizados e no tempo decorrido. Adicione penalidades por movimentos incorretos (por exemplo, perder pontos ou adicionar segundos ao temporizador). Dica: Pontos= Pontuação Base− (Constante de Decaimento×Tempo em Segundos) e Penalidade = Penalidade Base + (Constante de Decaimento×Tempo em Segundos). Lembrando para não ficar valores negativos ou nulos!
Efeitos Visuais e Sonoros: Inclua efeitos visuais (animações ao virar as cartas, completar um par, etc.) e efeitos sonoros (por exemplo, quando um par é encontrado, quando ocorre um erro, ao vencer o jogo) para tornar o jogo mais envolvente.
Placar de Líderes: Mantenha um placar local com as pontuações mais altas (ou tempos mais rápidos), permitindo ao usuário ver como sua pontuação se compara às anteriores.
(EXTRA) Níveis de Dificuldade: Adicione diferentes níveis de dificuldade ao jogo (por exemplo, fácil, médio, difícil), que podem alterar o tamanho do tabuleiro, o tempo limite para completar o jogo, ou introduzir penalidades mais severas por erros. Uma sugestão legal é adicionar uma dificuldade Hardcore, onde o usuário pode virar uma mesma carta apenas uma quantidade fixa de vezes, por exemplo duas vezes, ou seja, caso ele clicar numa carta, tentar achar o par e errar, na próxima vez que ele clicar nessa carta tem que achar o par, caso contrário game over.
🛠️Requisitos Técnicos
Utilize custom hooks para gerenciamento de estado e efeitos.
A lógica do jogo deve ser claramente separada da interface do usuário.
Assegure que o jogo seja responsivo e possa ser jogado em diferentes dispositivos e tamanhos de tela.
Bônus points para quem propiciar uso do teclado para jogar.
👀Critérios de Avaliação
Todos os requisitos técnicos especificados (com exceção dos bônus points) são obrigatórios, cada requisito funcional poderá receber uma nota entre 0 e 1. O esperado de quem fez todos os requisitos sem os extras é uma nota 5
🎨 Usem a criatividade e procurem apresentar um resultado final que seja agradável não apenas para o usuário, mas também para quem for ler o código (eu 🦊)