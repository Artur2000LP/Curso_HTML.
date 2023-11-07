/*
var numero = 20;
var numero2 = 30;
var resultado=numero*numero2;
var resultado1=numero+numero2;
document.write("el producto es: "+resultado + "<br>");
document.write("el producto es: "+resultado1 + "<br>");
*/
/*
var mensaje="Bienbenido a nuestro web";
var noumeroproducto='producto ABC';
var letraSeleccionada='c';
document.write("el producto es: "+resultado + "<br>");
document.write("el producto es: "+resultado1 + "<br>");
*/
/*
var numero1 = 5;
var numero2 = 2;
var numero3 = numero1++ +numero2;

console.log("el producto es: "+resultado3 + "<br>");
*/
/*
document.write("el producto es: "+resultado3 + "<br>");
*/
/*
var numeroa = 5;
var numerob = 2;
var numeroc = ++numeroa +numerob;

document.write("el producto es: "+resultadoc + "<br>");

var cantidad = 0;
vacio =! cantidad;
//vacio = true;
cantidad2 = 2;
vacio2 =! cantidad;
//vacio = falce;
var mensaje ="" ;
mensajevacio =! mensaje;
//mensaje vacio = true;
mensaje = "bienbenido";
mensajevacio =! mensaje

if(condition){

}
if(condition){
    
}


*/

const num = document.getElementById('num');
const resultado = document.getElementById('resultado');

let a = prompt('introdusca el primer numero');
let b = prompt('introdusca el segundo numero');
let c = prompt('introdusca el tercer numero');

num.textContent =`los numeros introduciodos son ${a}, ${b}, ${c}`

if(a>=b && a>=c){
    if(b>c){
        resultado.textContent = `el orden es  ${a}, ${b}, ${c}`
    }else{
        resultado.textContent = `el orden es  ${a}, ${c}, ${b}`
    }
}else
    if(b>=a && b>=c){
        if(a>c){
            resultado.textContent = `el orden es  ${b}, ${a}, ${c}`
        }else{
            resultado.textContent = `el orden es  ${b}, ${c}, ${a}`
        }
    }
else if(c>=a && c>=b){
    if(a>b){
        resultado.textContent = `el orden es  ${c}, ${a}, ${b}`
    }else{
        resultado.textContent = `el orden es  ${c}, ${b}, ${a}`
    }
}





