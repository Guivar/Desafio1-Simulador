/*
Este programa es un simulador de descuento,
le pide al usuario que ingrese un cupon de descuento(dado al inicio para
    efectos del programa)una vez entregado el cupon el usuario se desplegara una lista de 4 prodcutos
    el usuario optara o no por ingresar el cupon, si acepta ingreesarlo se ejecuta un espacio
    para que lo escriba, si lo escribe mal se mostrara el precio del prodcuto sin descuento, si lo ingresa bien, 
    se mostrara el producto que eligio y el precio con y sin descuento, si opta por no poner el cupon, se mostrara el 
    item que selecciono con su precio sin descuento.

    ALGORITMO:
    1.Dar el cupon al usuario
    2.mostrar la lista de productos al usuario
     2.1 Validar si lo que ingreso el usuario es correcto
    3.iniciar una condicional definiendo si el usuario tiene descuento o no.
     3.1 si tiene descuento mostrar el precio del producto con el descuento, si no lo tiene mostrar el precio sin descuento
     3.2 si no lo digita el bucle se repetira
     3.3 si el usuario digita el cupon mostrar el precio original y el precio con el descuento.
     3.4 si el usuario no tiene cupon de descuento el programa mostrara los precios sin descuento


*/

alert('Carga tu descuento con la palabra "promo" y aplicar el cupon para diferentes descuentos');
const Pantalon = 3000;
const Remera = 2000;
const Zapatillas = 12000;
const Buzo = 5000;
let bucle = 0;
while (bucle <1) {
    let cupon = prompt("Tienes un cupon de descuento? ingresalo ahora, de lo contrario escribe cualquier letra o numero y veras nuestros productos ofrecidos")
    let producto = parseInt(prompt("Selecciona un producto, digitando el numero correspondite:\n 1-Pantalon $3000\n 2-Remera $2000\n 3-Zapatillas $12000\n 4-Buzo $5000\n 5-Salir de la tienda."));
    if (cupon === "promo") {

        if (producto > 0 && producto < 6) {
            switch (producto) {
                case 1:
                    porcentaje = Pantalon * 0.20;
                    descuento = Pantalon - porcentaje;
                    alert(`Tu producto cuesta ${Pantalon} el descuento fue de ${porcentaje}, solo deberas pagar un total de  ${descuento}`)
                    break;

                case 2:
                    porcentaje = Remera * 0.25;
                    descuento = Remera - porcentaje;
                    alert(`Tu producto cuesta ${Remera} el descuento fue de ${porcentaje}, solo deberas pagar un total de  ${descuento}`)
                    break;

                case 3:
                    porcentaje = Zapatillas * 0.15;
                    descuento = Zapatillas - porcentaje;
                    alert(`Tu producto cuesta ${Zapatillas} el descuento fue de ${porcentaje}, solo deberas pagar un total de  ${descuento}`)
                    break;

                case 4:
                    porcentaje = Buzo * 0.15;
                    descuento = Buzo - porcentaje;
                    alert(`Tu producto cuesta ${Buzo} el descuento fue de ${porcentaje}, solo deberas pagar un total de  ${descuento}`)
                    break;
            
                default:
                    alert("No ingresaste ningun valor valido, ingresa un valor correcto")
                    break;
            }
        } 
    } else {
        if (producto === 1) {
            alert(`no ingresaste cupon de descuento, tu producto cuesta ${Pantalon}`)
        } else if (producto === 2) {
            alert(`no ingresaste cupon de descuento, tu producto cuesta ${Remera}`)
        } else if (producto === 3) {
            alert(`no ingresaste cupon de descuento, tu producto cuesta ${Zapatillas}`)
        } else if (producto === 4) {
            alert(`no ingresaste cupon de descuento, tu producto cuesta ${Buzo}`)
        }else if(producto===5){
            bucle = bucle+1;
        }else {
            alert("No ingresaste ningun valor valido, ingresa un valor correcto")
            
        }
    }
}