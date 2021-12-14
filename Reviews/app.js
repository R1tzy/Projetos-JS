/* 
    criando um objeto que vai armazenar todos os dados dos reviews desde
    o id, nome, job, info, img
*/
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "./img/foto1.png",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johson",
        job: "web designer",
        img: "./img/foto2.png",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "./img/foto3.png",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    }
]


// selecionando todos os items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const btnNext = document.querySelector(".btn-next")
const btnPrev = document.querySelector(".btn-prev")
const btnRandom = document.querySelector(".btn-random")


// escolhendo o item que irá iniciar
let currentItem = 0;

// carregando o item de incialização
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
})
btnNext.addEventListener("click", next)
btnPrev.addEventListener("click", previous)
btnRandom.addEventListener("click", random)


// função para mostrar a pessoa
function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// funlão para avançar
function next(){
    currentItem++
    // se chagar a última posição do review ele volta para o início
    if(currentItem == reviews.length){
        currentItem = 0
    }
    showPerson(currentItem)
}

// função para fazer o voltar
function previous(){
    currentItem--
    // se chear a zero ele volta para a última posição do review
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
}

// RANDOM de outro jeito - Melhor para esse momento
function random(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
}


// JEITO DE FAZER O RANDOM QUE EU PENSEI
// function random(){
//     let random = getRandomInt(0,2)
//     currentItem = random
//     showPerson(currentItem)
// }

// function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }