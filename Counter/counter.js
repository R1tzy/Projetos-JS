let cont = 0

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn") 
// seleciona todos os botões


// usa o forEach para percorrer todos os botões
btns.forEach(function (btn){
    // adiciona ao event list o botão
    // chama a função clicque
    btn.addEventListener("click", function (e){
        /* na função clique, cria uma variável e coloca
         em uma lista desse jeito ['btn', 'decrease', value: 'btn decrease'] os botões
         */
        const style = e.currentTarget.classList

        // Fazendo o incremento, decremento e reset
        // olha qual é o conteúdo do btn
        if (style.contains("decrease")){
            // conteúdo do botão for "decrease" ele faz decremento
            cont--
        }else if (style.contains("increment")){
            // conteúdo do botão for "decrease" ele faz incremento
            cont++
        }else{
            // se não coloca o cont = 0
            cont = 0
        }

        // Fazendo a mudança de cor com base no valor do cont
        if(cont>0){
            value.style.color = "green"
        }else if(cont<0){
            value.style.color = "red"
        }else{
            value.style.color = "#222"
        }

        // pega o conteúdo e coloca igual ao cont
        value.textContent = cont
    })
})
