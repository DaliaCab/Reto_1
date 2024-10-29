//^[()`~^*/?`[()^+`-
//~()#[$()/~()%\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\{()*~¡[$[{(
//)¡[()?=[]`\¬]()¿()[{;+[$__~()`~]=\]+~

//^E `O^*/A`E ^U`-O
// #E$ /O %IE] }UE E{=O¿ =$A%A!A]¡O ¿ `¬^O E{=O AU^E]=A ^I{ *O¡E$E{
//¡E A=E]`I¬] ¿ E{;UE$__~ `O]=I]UO

//Solo hay una letra con acento, una vocal con tilde: ó ¬

//ME COMPLACE MUCHO
//VER LO BIEN QUE ESTOY TRABAJANDO Y CÓMO ESTO AUMENTA MIS PODERES
//DE ATENCIÓN Y ESFUERZO CONTINUO

//% = B
// { = S
// ¿ = Y
// ^ = M
//¡ = D
//# = V
//$ = R
//= = T
//} = Q
// ! = J
//F = ;
//Z = _
//¬ = Ó
//] = N

// a ?
// e [
// i \
// o ~
// u + 

//YA TENIENDO TODOS LOS CARACTERES HAGO UN MAPEO PARA CORRER Y REEMPLAZAR EN EL MSJ CIFRADO

function descifrarMensaje(mensajeCifrado) {
    const mapeo = {
        
        '?': 'A',
        '%': 'B',
        '`': 'C',
        '¡': 'D',
        '[': 'E',
        ';': 'F',
        '-': 'H',
        '$': 'R',
        '\\': 'I',
        '!': 'J',
        '/': 'L',
        '^': 'M',
        ']': 'N',
        '()': ' ',
        '~': 'O',
        '¬': 'Ó',
        '*': 'P',
        '}': 'Q',
        '{': 'S',
        '=': 'T',
        '+': 'U',
        '#': 'V',
        '¿': 'Y',
        '_': 'Z',
    };

    let mensajeDescifrado = '';

    for (let i = 0; i < mensajeCifrado.length; i++) {
        let caracter = mensajeCifrado[i];
        if (mapeo[caracter] !== undefined) {
            mensajeDescifrado += mapeo[caracter];
        } else {
            mensajeDescifrado += caracter; // Agrega el carácter original si no hay reemplazo
        }
    }

    return mensajeDescifrado;
}

// Texto cifrado 
const mensajeCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";

// Mensaje descifrado
const mensajeDescifrado = descifrarMensaje(mensajeCifrado);
console.log(mensajeDescifrado);