/*Variáveis
        um espaço de memória que você reserva e pode guardar o que quiser á dentro


    3 Jeitos de crias uma variável
        -var / é um jeito antigo - NÃO USE
        -let   -> Agora com let eu posso criar  e depois alterar o valor 
        -const -> O const é uma constante, ou seja se eu criar uma variavel con const eu não consigo alterar o valor depois 
    
        EXEMPLO
const lenon =// Para eu colocar um testo dentro de uma variavel no java script eu preciso colocar uma aspas dulpa "" ou aspas simples ''.
    const numero1 = 100
    const numero2 = 500
    const numeroTotal = numero1 + numero2


    Funções
        Um trecho de código que, só é execultado, quando é chamado.
        
        EXEMPLO
        const abacate = "oi, abacate"
        const pera = "oi, pera"
        const conta = 30 + 20

        console.log(abacate)
        console.log(pera)
        console.log(conta)

         const numero1 = 100
        const numero2 = 500

        function some(){ para cria uma função eu preciso colocar o nome dela na frente, mas para eu chamar uma função eu preciso coocar apenas o nome dela e os parenteses 
        const somatoria = numereo1 + numero2}
        console.log(somatoria)

        soma()

         para cria uma função eu preciso colocar o nome dela na frente, mas para eu chamar uma função eu preciso coocar apenas o nome dela e os parenteses, e eu posso chamar a minha função quantas vezes eu quiser
*/ 


const form = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara-form')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'
}

function hideForm() {
    form.style.left = '-341px'
    form.style.transform = 'translatex(0)'
    mascara.style.visibility = 'hidden'
}

