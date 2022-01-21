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

    const resultP = document.getElementById("ResultP").innerHTML = `El precio con descuento son $ ${precioConDescuento}`
}


const coupons = [
    {
        name: "TU_eres_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
]

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("price")
    const priceValue = inputPrice.value
    
    const inputCoupon = document.getElementById("cupon")
    const couponValue = inputCoupon.value
  
    let descuento
  
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue
    }
    
    const userCoupon = coupons.find(isCouponValueValid)

    if (!userCoupon) {
        alert("El cupón " + userCoupon + "no es válido")
    } else {
        const descuento = userCoupon.discount
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento
    }}
