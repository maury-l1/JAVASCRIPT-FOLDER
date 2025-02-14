//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
const master = [];
const userCombi = [];
var intento = 0;
var aciertos = 0;
let coloresIntrod = [];


function init() {
    //1. Genera el código random del master
    while (master.length < 4) {
        let indice = Math.floor(Math.random() * COLORS.length);
        let valRandom = COLORS[indice]
        master.push(valRandom)
    }
    console.log(coloresIntrod)
    console.log(master)
    //2. Crea todas las filas según el número de intentos.

    let contenedor = document.getElementById("Result")

    for (let x = 0; x < MAX_INTENTOS; x++) {
        let filaRsultado=document.createElement("div");
        filaRsultado.className="rowResult w100 flex wrap";
        filaRsultado.id="resultado"+x;
        filaRsultado.innerHTML +=ROW_RESULT
      //  contenedor.innerHTML += ROW_RESULT
      contenedor.appendChild(filaRsultado);
    }
    coloresIntrod=document.querySelectorAll(`#resultado${intento} .celUserCombi`);
}




/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    const cajaTexto = document.getElementById('combiText')
    
    if (userCombi.length < MAX_COMBI_COLORES) {

        cajaTexto.value += " " + color;
        userCombi.push(color)
        coloresIntrod[userCombi.length-1].id = color
    }
    console.log(userCombi)
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {

    let info = document.getElementById("info")
    if (userCombi.length < 4){

        info.textContent = "Elige 4 colores!"
    }
    if (userCombi.length = 4){

        if (userCombi.toString() === master.toString()){
            info.textContent = "Has ganado"
        }else{
            info.textContent = "Intenta de nuevo"
            intento++
            
                }
    }
    coloresIntrod=document.querySelectorAll(`#resultado${intento} .celUserCombi`);
    }


/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    <div>`;