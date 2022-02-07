/* 1 ejercicio */
console.log("Hola Mundo!!");

/* 2 ejercicio */
let nombre = "Carolina";
if (nombre) {
console.log("Bienvenida Sr(a): "+ nombre)};

/* 3 ejercicio */
let costoProducto = 50000;
let impuesto = 0.10;
let domicilio = 2000;

let valorSubtotal = costoProducto + (costoProducto * impuesto);
let valorTotal = valorSubtotal + domicilio;

console.log("El costo inicial es de: $"+costoProducto + " pesos");
console.log("El valor subtotal es de: $"+ valorSubtotal + " pesos");
console.log("El valor total es de: $"+ valorTotal+ " pesos");


/* 4 ejercicio
declarar variable costo inicial 
si el producto es menor a 30000 no tendra descuento 
si el producto es igual o superior a 30000 e inferior a 100000 tendra un descuento del 5% 
si el producto es = o superior a 1000000 el descuento sera de 10%
imprimir valoe inicial
y valor final,, incluido el descuento*/

let costoinicial = 60000;
let descuento1 = .05;
let descuento2 = .10;

let producto1 = costoinicial - (costoinicial * descuento1);
let producto2 = costoinicial - (costoinicial * descuento2);

console.log( "Valor inicial $"+ costoinicial );

if (costoinicial <= 30000){
console.log("No tiene descuento")
}

else if (costoinicial > 30000 && costoinicial < 100000){
console.log("El valor final es de: $" + producto1);
}
else if (costoinicial >= 100000) {
console.log("El valor final es de: $" + producto2);}
