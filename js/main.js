let botaoInicial = document.querySelector('.yeloowQuizBack');
let userHidden = document.querySelector('#userHidden');


function save(){
    let valorDoNome = document.querySelector('.playerName').value;
    window.localStorage.setItem('userName', valorDoNome);
}
function load(){
    let usuario = document.querySelector('#usuário');
    let nome = window.localStorage.getItem('userName');
    usuario.textContent = nome;
}
function erase(){
    window.localStorage.removeItem('userName');
}

let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Em Stranger Things, quem é o personagem que dá o nome de Demogorgon, como um bicho de estimação?",
    alternativaA : "Mike",
    alternativaB : "Dustin",
    alternativaC : "Will",
    alternativaD : "Eleven",
    correta      : "Dustin",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Em The Big Bang Theory, qual é o nome do Canal de Sheldon?",
    alternativaA : "Aprendendo com bandeiras",
    alternativaB : "Bandeiras européias",
    alternativaC : "Bandeiras Mundiais",
    alternativaD : "Diversão com bandeiras",
    correta      : "Diversão com bandeiras",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual Stormtrooper não consegue cumprir sua missão em Star Wars: O Despertar da Força?",
    alternativaA : "FN-2187",
    alternativaB : "FN-2832",
    alternativaC : "FN-9854",
    alternativaD : "FN-2832",
    correta      : "FN-2187",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Em De Volta para o Futuro, depois que Biff bate o carro do George, ele vai até a casa dele e pega o que da geladeira?",
    alternativaA : "Um suco",
    alternativaB : "Um vinho",
    alternativaC : "Uma lata de cerveja",
    alternativaD : "Um refrigerante",
    correta      : "Uma lata de cerveja",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Em Matrix, quem trai a equipe no primeiro filme?",
    alternativaA : "Niobe",
    alternativaB : "Morpheus",
    alternativaC : "Tank",
    alternativaD : "Cypher",
    correta      : "Cypher",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Em Senhor dos Anéis, quem era o senhor de Dol Guldur na terceira era?",
    alternativaA : "O Imortal",
    alternativaB : "Aragorn",
    alternativaC : "Gandalf",
    alternativaD : "Khamul",
    correta      : "Khamul",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual Pokemon tem uma pena brilhante?",
    alternativaA : "Wartotle",
    alternativaB : "Bulbasaur",
    alternativaC : "Ho-oH",
    alternativaD : "Metapod",
    correta      : "Ho-oH",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual o nome dos filhos de Wanda Maximoff?",
    alternativaA : "Matthew e Dony",
    alternativaB : "Anna e Freddy",
    alternativaC : "Deysy e Charlie",
    alternativaD : "Billy e Tommy",
    correta      : "Billy e Tommy",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Em Dr. Who, quem fundou o Instituto Torchwood?",
    alternativaA : "Dan Lewis",
    alternativaB : "Amy Pond",
    alternativaC : "Rainha Vitória",
    alternativaD : "The Curator",
    correta      : "Rainha Vitória",
}


const q10 = {
    numQuestao   : 10,
    pergunta     : "Em Stark Treck, Qual a cor do uniforme do Capitão Picard?",
    alternativaA : "Azul",
    alternativaB : "Verde",
    alternativaC : "Vinho",
    alternativaD : "Roxo",
    correta      : "Vinho",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0,q1, q2, q3, q4, q5,q6,q7,q8,q9,q10]


let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 1 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            //console.log('Fim do Jogo!')
            window.location.href = "result.html";

            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}