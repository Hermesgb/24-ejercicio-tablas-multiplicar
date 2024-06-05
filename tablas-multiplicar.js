function multiplicar(tabla_max, num_max) {
    var resultadoRetornado = [];
    for (tabla = 0; tabla <= tabla_max; tabla++) {
        resultadoRetornado[tabla] = [];
        for (num = 0; num <= num_max; num++) {
            resultadoRetornado[tabla][num] = [tabla + " x " + num + " = " + (tabla * num)];
        }
    }
    return resultadoRetornado;
}
console.log(multiplicar(10, 10));
