const meuArray = [30, 40, 5, 233, 2049, 3034, 5];
function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));