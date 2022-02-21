// Condicional

const edad = Number (prompt( 'ingresa tu edad' ));

if ( edad >= 18 ) {
    console.log("Podes entrar a mi bar");
} else {
    console.log("No podes entrar a mi bar");
}

// Condicional anidado

const edad = Number (prompt( 'ingresa tu edad' ));

if ( notaDePF < 6 ){
    console.log("Desaprobaste");
} else if ( notaDePF == 8 ) {
    console.log("Tuviste un buen promedio");
} else { 
    console.log("Re aprobaste loco");
} 

// Operadores &&

const edad = 43;
const altura = 174;

if ( edad > 18 && altura > 170) {
    console.log("Sos mayor de edad");
}
