const lista1 = [
    100,
    200,
    500,
    4000000000,
]

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i]
    // }

    //recibe una funcion como argumento
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length

    return promedioLista

}

function calcularMediana(lista) {

    let mediana
    const sortedList = lista.sort((a, b) => a - b)
    const mitadLista = parseInt(sortedList.length / 2)

    if (esPar(sortedList.length)) {

        const elemento1 = sortedList[mitadLista - 1]
        const elemento2 = sortedList[mitadLista]

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])

        return mediana = promedioElemento1y2

    } else {

        return mediana = sortedList[mitadLista]
    }


}


