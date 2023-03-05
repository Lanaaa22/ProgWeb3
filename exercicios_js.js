/* Exercício 1 */
window.alert('Exercício 1')

var idade_atual = window.prompt('Qual sua idade?')
var idade_maxima = window.prompt('qual sua estimativa de idade?')
var lanche = idade_maxima - idade_atual
window.alert("Você precisará de" + lanche + "lanches para durar até a velhice de" + idade_maxima + "anos")

/* Exercício 2 */
window.alert('Exercício 2')

var raio_do_circulo = window.prompt('Qual é o raio do círculo?')
comprimento = 2 * Math.PI * raio_do_circulo
area  = Math.PI * raio_do_circulo **2
window.alert("A circunferência tem" + comprimento)
window.alert("A área é " + area )

/* Exercício 3  */
window.alert('Exercício 3')

var idioma = window.prompt('fr para frances, es para espanhol e qualquer coisa para inglês: ')

if (idioma == 'fr') {
    alert('Bonjour tout le monde!')
}

else if (idioma == 'es') {
    alert('ola, Mundo!')

}

else {
    alert('Hello, World')
}





