const lista = [3, 6, 8, 5, 5, 7];

function prodImpar() {
    let nums = 1; 
    
    for (let i = 0; i < lista.length; i++) { 
        if (lista[i] % 2 !== 0) { 
            nums *= lista[i]; 
        }
    }
    
    return nums;
}

console.log(prodImpar()); 