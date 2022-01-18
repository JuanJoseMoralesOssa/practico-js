const precioOriginal = 100
const descuento = 15

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function onClickButtonPriceDiscount() {
    const price = document.getElementById("price").value
    const discount = document.getElementById("discount").value

    const precioConDescuento = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("ResultP").innerHTML = `El precion con descuento son $ ${precioConDescuento}`
}
