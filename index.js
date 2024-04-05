const perguntas = [
  {
    pergunta: "Como se diz 'cuidadora de idosos' em japonês?",
    respostas: [
      "お医者さん (Oishasan)",
      "看護師 (Kangoshi)",
      "介護士 (Kaigo-shi)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual partícula é usada para indicar a pessoa que está recebendo cuidados?",
    respostas: [
      "を (wo)",
      "が (ga)",
      "に (ni)",
    ],
    correta: 0
  },
  {
    pergunta: "Qual verbo é usado para descrever a ação de 'ajudar' em japonês?",
    respostas: [
      "歌う (Utau)",
      "手伝う (Tetsudau)",
      "食べる (Taberu)",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o pronome correto para se referir a uma pessoa idosa em japonês?",
    respostas: [
      "私 (Watashi)",
      "あなた (Anata)",
      "お年寄り (Otosan)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual partícula é usada para indicar posse ou pertencimento em japonês?",
    respostas: [
      "が (ga)",
      "へ (he)",
      "の (no)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a forma correta do verbo 'to listen' em japonês?",
    respostas: [
      "見る (Miru)",
      "聞く (Kiku)",
      "話す (Hanasu)",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a partícula usada para expressar ações em andamento em japonês?",
    respostas: [
      "を (wo)",
      "が (ga)",
      "ています (teimasu)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o adjetivo correto para descrever alguém que é 'paciente' em japonês?",
    respostas: [
      "元気な (Genkina)",
      "優しい (Yasashii)",
      "辛抱強い (Shinbouzuyoi)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a partícula usada para indicar a direção ou destino em japonês?",
    respostas: [
      "へ (he)",
      "で (de)",
      "に (ni)",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta do verbo 'to eat' em japonês?",
    respostas: [
      "食べる (Taberu)",
      "飲む (Nomu)",
      "寝る (Neru)",
    ],
    correta: 0
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
