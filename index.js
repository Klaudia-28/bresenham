//obtiene el canvas
const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

//variables globales para escala
let escala = 1;
let maxGlobal = 100;

function drawPoint(x, y, size) {
//dibuja cada punto de la línea en el canvas
    ctx.fillRect(
        (x * escala) - size / 2,
        (canvas.height - y * escala) - size / 2,
        size,
        size
    );
}
//dibujar la escala en el canvas
function dibujarEscala() {
    ctx.font= "10px Arial";
    ctx.fillStyle= "black";

    // eje X 
    for (let i= 0; i <= canvas.width; i+= 50) {
        ctx.fillText(i, i, canvas.height-5);
    }

    // eje Y 
    for (let i= 0; i <= canvas.height; i+= 50) {
        ctx.fillText(i, 5, canvas.height-i);
    }
}

//limpiar canvas
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let tabla= document.getElementById("tabla");
    tabla.innerHTML= `
    <tr>
        <th>Paso</th>
        <th>X</th>
        <th>Y</th>
        <th>Error</th>
    </tr>
    `;
}

/**parte de codigo suministrada por el profesor
 * Implementa el algoritmo de Bresenham para dibujar una línea.
 * @param {number} x0 - Coordenada inicial en X
 * @param {number} y0 - Coordenada inicial en Y
 * @param {number} x1 - Coordenada final en X
 * @param {number} y1 - Coordenada final en Y
 */
//algoritmo de Bresenham
function Bresenham(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);

    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;

    let err = dx - dy;

    let paso = 0;
    while (true) {
        //dibujar el punto
        drawPoint(x0, y0, 3);
        //guardar los datos en la tabla
        agregarFila(paso, x0, y0, err);
        //condición de fin
        if (x0 === x1 && y0 === y1) {
            break;
        }
        let e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
        paso++;
    }
}

//agrega una fila a la tabla 
function agregarFila(paso, x, y, err) {
    let tabla = document.getElementById("tabla");
    let fila = tabla.insertRow();

    let celdaPaso = fila.insertCell(0);
    let celdaX = fila.insertCell(1);
    let celdaY = fila.insertCell(2);
    let celdaErr = fila.insertCell(3);

    celdaPaso.textContent = paso;
    celdaX.textContent = x;
    celdaY.textContent = y;
    celdaErr.textContent = err;
}

//funcion principal
function dibujarLinea() {

    //obtener valores
    const x0 = parseInt(document.getElementById("x0").value);
    const y0 = parseInt(document.getElementById("y0").value);
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);

    limpiarCanvas();
    dibujarEscala();
    //dibuja puntos inicial y final
    Bresenham(x0, y0, x1, y1);
}