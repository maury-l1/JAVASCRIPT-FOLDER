const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]]
const alumno = ["David", "López Fernandez", "DAWe", ("29 /04/ 2003")];


let menu = document.getElementById('menu')
cargaDatos()
cargaNotas()



function cargaDatos() {

    let titulo = document.createElement('h2')
    titulo.textContent = alumno[0] + " " + alumno[1]

    let info = document.createElement('p')
    info.innerHTML = "Curso: " + alumno[2] + "<br>" + "Cumpleaños: " + alumno[3]



    menu.appendChild(titulo)
    menu.appendChild(info)

}

function cargaNotas() {

    let lista = document.createElement('ul')
    lista.setAttribute("id", "lista")
    menu.appendChild(lista)


    for (let m = 0; m < 8; m++) {

        const elementos = document.createElement('li')
        elementos.textContent = modulos[m]

        lista.appendChild(elementos)
        
        for (let i = 0; i < alumnoNotas[m].length; i++) {
            const nota = document.createElement('p')
            nota.innerHTML = "Unidad formativa " + (i + 1) + " : " + alumnoNotas[m][i]
            
            lista.appendChild(nota)
        }
        
    }





}

