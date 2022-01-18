// Codigo del cuadrado
console.group("Cuadrados")
// const LADOCuadrado = 5
// console.log("Los lados del cuadrado miden: " + LADOCuadrado + "cm")

function PERIMETROCuadrado(lado) { 
    return lado * 4
}
// console.log("El perimetro del cuadrado es: " + PERIMETROCuadrado(LADOCuadrado) + "cm")

function AREACuadrado(lado) { 
    return lado * lado
}
// console.log("El Area del cuadrado es: " + AREACuadrado + "cm^2")

console.groupEnd()


// Codigo del triangulo
console.group("Triangulos")
// const LADOTriangulo1 = 6
// const LADOTriangulo2 = 6
// const BASETriangulo = 4

// console.log(
//     "Los lados del triangulo miden: "
//     + LADOTriangulo1
//     + "cm, "
//     + LADOTriangulo2
//     + "cm, "
//     + BASETriangulo
//     + "cm"
// )

// const ALTURATriangulo = 5.5
// console.log("La altura del triangulo es de: " + ALTURATriangulo +"cm")

function PERIMETROTriangulo(lado1, lado2, base) 
{
    return lado1 + lado2 + base
} 
// console.log("El perimetro del triangulo es: " + PERIMETROTriangulo + "cm")

function AREATriangulo(base, altura) {
    return (base*altura) / 2
}
     // console.log("El Area del triangulo es: " + AREATriangulo + "cm^2")

console.groupEnd()

// Codigo del circulo
console.group("Circulo")
// const RADIOCirculo = 4
// const DIAMETROCirculo = RADIOCirculo * 2
const PI = Math.PI
// const CIRCUNFERENCIA = DIAMETROCirculo   * PI
// const AREACirculo = PI * (RADIOCirculo*RADIOCirculo)

// console.log(`El radio del circulo es ${RADIOCirculo}cm`)
// console.log(`El diametro del circulo es ${DIAMETROCirculo}cm`)
// console.log(`PI es ${PI}`)
// console.log(`La circunferencia del circulo es ${CIRCUNFERENCIA}cm`)
// console.log(`El Area del circulo es ${AREACirculo}cm^2`)

function diametroCirculo(radio) {
    return radio * 2
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio)* PI
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd()

// Aqui interacuamos con el HTM

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado").value
    
    const perimetro = PERIMETROCuadrado(input)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado").value
    
    const perimetro = AREACuadrado(input)
    alert(perimetro)

}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("triangulo-lado1").value)
    const lado2 = parseInt(document.getElementById("triangulo-lado2").value)
    const base = parseInt(document.getElementById("triangulo-base").value)

    if (lado1 == lado2) {
        const perimetro = PERIMETROTriangulo(lado1, lado2, base)
        alert(`El perimetro del triangulo es ${perimetro} cm`)
    }
    else {
        alert("Los lados del triangulo no son iguales por tanto no es un triangulo isoceles, por favor vuelve a ingresar los datos")
    }
}
function calcularAltura(lados, base) {
    return Math.sqrt(Math.pow(lados, 2) - Math.pow(base, 2) / 4)
}

function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("triangulo-lado1").value
    const lado2 = document.getElementById("triangulo-lado2").value
    const base = document.getElementById("triangulo-base").value

    if (lado1 == lado2) {
        const altura = calcularAltura(lado1, base)
        alert(`La altura del triangulo es ${altura}`)
    }
    else {
        alert("Los lados del triangulo no son iguales por tanto no es un triangulo isoceles, por favor vuelve a ingresar los datos")
    }
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("triangulo-lado1").value
    const lado2 = document.getElementById("triangulo-lado2").value
    const base = document.getElementById("triangulo-base").value

    if (lado1 == lado2) {
        const altura = calcularAltura(lado1, base)
        const area = base * altura / 2
        alert(`El area del triangulo es ${area} cm^2`)
    }
    else {
        alert("Los lados del triangulo no son iguales por tanto no es un triangulo isoceles, por favor vuelve a ingresar los datos")
    }
}

function calcularPerimetroCirculo() {
    const radio = parseInt(document.getElementById("radio").value)
    const PI = Math.PI
    const perimetro = radio * 2 * PI
    alert("La circunferencia es de "+ perimetro)
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("radio").value)
    const PI = Math.PI
    const area = PI * radio ** 2
}