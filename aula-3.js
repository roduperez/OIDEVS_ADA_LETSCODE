var altura = 0
var base = 0
var area =0

function areaRetangulo(altura,base){

    area=(base * altura)

console.log('Área do Retângulo'+'(' + altura + ',' + base + '): ' + area)
}

areaRetangulo(15,7)


var numerocerto = 0

function parIMpar(numerocerto){

    if (numerocerto < 0) {console.log('Número ' + numerocerto + ' é negativo!')}
    if (numerocerto > 0) {console.log('Número ' + numerocerto + ' é positivo!')}
    if (numerocerto === 0) {cconsole.log('Número ' + numerocerto + ' é zero!')}

}

parIMpar(3)

var n = 0

function parOUimpar(n){

    if (n%2 == 0){
        console.log('Número ' + n + ' é Par')
    }
    else
        {console.log('Número ' + n + ' é Ímpar')}
}

parOUimpar(7)