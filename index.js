const perguntas = [
    {
      pergunta: "Qual é o plural de 'book'?",
      respostas: [
        "books",
        "bookies",
        "bookses",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta do verbo 'to be' na terceira pessoa do singular no presente simples?",
      respostas: [
        "am",
        "are",
        "is",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a preposição correta para indicar posse?",
      respostas: [
        "in",
        "at",
        "of",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta do superlativo de 'good'?",
      respostas: [
        "gooder",
        "more good",
        "best",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta do comparativo de 'far'?",
      respostas: [
        "farther",
        "more far",
        "farrer",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tempo verbal utilizado para expressar ações concluídas em um momento específico no passado?",
      respostas: [
        "present perfect",
        "past continuous",
        "simple past",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta da frase negativa na terceira pessoa do singular no presente simples do verbo 'to do'?",
      respostas: [
        "He don't",
        "He doesn't",
        "He didn't",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o pronome possessivo para 'she'?",
      respostas: [
        "her",
        "hers",
        "she's",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta do verbo 'to eat' na terceira pessoa do plural no presente simples?",
      respostas: [
        "eat",
        "eats",
        "ate",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a conjunção correta para adicionar uma ideia similar?",
      respostas: [
        "but",
        "and",
        "so",
      ],
      correta: 1
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
      } 
    
      //appendChild = coloca um valor dentro d outro
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem) 
  }