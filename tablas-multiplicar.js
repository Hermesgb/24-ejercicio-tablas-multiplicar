function multiplicar(tabla, num) {
    for (i = 0; i < 10; i++){
        console.log("TABLA DEL " + tabla);
        console.log("   ");
        for (j = 0; j < 10;j++){
            operacionMultiplicar = tabla * num;
            console.log(tabla + " * " + num + " = " + operacionMultiplicar);
            num++;
        }
        console.log("   ");
        console.log("   ");
        tabla++;
        num = 1;
    }
}

multiplicar(1, 1);
