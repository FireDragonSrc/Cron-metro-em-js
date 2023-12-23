let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer(){
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer();
  }
  function updateTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('timer').innerText = formattedTime;
  }

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
/*
function escope(x){
    if(typeof(x) !== 'number') return x;
    if(x % 3 === 0 && x % 5 === 0)return 'fizzbuzz';
    if(x % 3 === 0) return 'fizz';
    if(x % 5 === 0) return 'buzz';
    return x;
}
for(let i = 0; i < 100; i++) {
    console.log(i, escope(i));
}
-------------------------------------------------------
function ePaisagem(l, a) {
    let total = l > a ? true : false;
}
//
function comparacao(num1, num2){
    let numeros = num1 > num2 ? `${num1} é o maior numero` : `${num2} é o maior numero`;
    console.log(numeros);
}
comparacao(10,8);
//

let div = document.querySelector('.div');
let ps = div.querySelectorAll('p');
const estilos = getComputedStyle(document.body);
const background = estilos.backgroundColor;
for(let p of ps){
    p.style.backgroundColor = background;
}
//
const container = document.querySelector('.container');
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
let p = document.createElement('p');
let div = document.createElement('div');
let footer = document.createElement('footer');
let section = document.createElement('section');

let texto = document.createTextNode(elementos[0].texto);
let texto2 = document.createTextNode(elementos[1].texto);
let texto3 = document.createTextNode(elementos[2].texto);
let texto4 = document.createTextNode(elementos[3].texto); 

p.appendChild(texto);
div.appendChild(texto2);
footer.appendChild(texto3);
section.appendChild(texto4);

elementos[0].tag = p;
elementos[1].tag = div;
elementos[2].tag = footer;
elementos[3].tag = section;

container.appendChild(elementos[0].tag);
container.appendChild(elementos[1].tag);
container.appendChild(elementos[2].tag);
container.appendChild(elementos[3].tag);

const btnSwitch = document.querySelector('.but');

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
let a = 1;
let b = 2;
let c = 3;
[a, b, c] = [3, 2, 1];
console.log(a, b, c);

const numeros = [0, 1 , 2, 3, 4];
const [zero, um, dois, ...outros] = numeros;
console.log(zero);
const pessoa = {
    nome:'manuelu',
    idade:40,
    endereco:{
        rua:"Av Brazil 321"
    }
}
const { nome } = pessoa;
console.log(nome);
const {endereco: {rua}} = pessoa;
console.log(rua);
*/