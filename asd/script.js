const tablero = document.getElementById('tablero')
tablero.classList.add ('tablero')

function init (){

    crearTabl()

}

function crearTabl() {

    for (let fila = 0; fila < 8; fila++){    

        for (let col = 0; col < 8; col++){
            
            const casilla = document.createElement('div')
            casilla.classList.add ('casillas')

            if (fila < 2){
                casilla.textContent = 'O'   
            }

            if (fila > 5) {
                casilla.textContent = "X"
            }

            if ((fila+col)%2 === 0){
            casilla.classList.add ('casillaN')
            }else{
            casilla.classList.add ('casillaB')
            }
            tablero.appendChild(casilla);

        }

        

    }

}