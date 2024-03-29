const perguntas = [
  {
    pergunta: "Qual é o nome do mapa principal de League of Legends?",
    respostas: [
      "Summoner's Rift",
      "Summoner's Drift",
      "Casa da Rito Gomes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o objetivo principal em Summoner's Rift?",
    respostas: [
      "Fazer a play e mostrar maestria",
      "Tiltar os inimigos e os aliados",
      "Destruir o Nexus inimigo",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do evento anual que celebra o aniversário de League of Legends?",
    respostas: [
      "Worlds",
      "All-Stars",
      "Leagueiversary",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da empresa responsável pelo desenvolvimento de League of Legends?",
    respostas: [
      "Blizzard",
      "Riot Games",
      "Valve",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do campeonato mundial de League of Legends?",
    respostas: [
      "International Championship",
      "Worlds",
      "CBLOL",
    ],
    correta: 1
  },
  {
    pergunta: "Quantas rotas principais existem em Summoner's Rift?",
    respostas: [
      "2",
      "3",
      "mid",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do monstro épico localizado no rio em Summoner's Rift?",
    respostas: [
      "Dragon",
      "Baronzin",
      "Banguela",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do modo de jogo onde os jogadores devem destruir a base inimiga enquanto controlam um único campeão?",
    respostas: [
      "LoL",
      "LoL",
      "LoL",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do torneio regional norte-americano de League of Legends?",
    respostas: [
      "LCS",
      "LCK",
      "ADC",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do evento que introduz skins temáticas e modos de jogo exclusivos por tempo limitado?",
    respostas: [
      "April Fools' Day",
      "Lux Day's",
      "Snowdown Showdown",
    ],
    correta: 2
  },
];
  
  // querySeletor pega o que é do HTML
  const quiz =document.querySelector('#quiz') 
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //for = loop ou repetição
  //const = quando n muda o valor
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //let = quando quer mudar o valor 
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      
      //indexOf = ver o índice daquele conteúdo
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //onchange = quando há alguma mudança
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        if(corretas.size == totalDePerguntas){
          alert("parabens")
        }

      } 
    
      //appendChild = coloca um valor dentro d outro
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem) 
  }