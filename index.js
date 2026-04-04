//obtiene el canvas
const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

function drawPoint(x,y,size){
    ctx.fillRect(x - size/2, y - size/2, size, size);
}

//limpiar canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    let tabla= document.getElementById("tabla");
    tabla.innerHTML=`
    <tr>
        <th>Paso</th>
        <th>X</th>
        <th>Y</th>
        <th>Error</th>
    </tr>
    `;
}


//algoritmo de Bresenham
function Bresenham(x0,y0,x1,y1){
    let dx=Math.abs(x1-x0);
    let dy=Math.abs(y1-y0);

    let sx =(x0<x1)? 1:-1;
    let sy =(y0<y1)? 1:-1;

    let err =dx-dy;

    let paso=0;
      while(true){
        //dibujar el punto
        drawPoint(x0,y0,3);
        //guardar los datos en la tabla
        agregarFila(paso,x0,y0,err);
        //condición de fin
        if(x0 === x1 && y0 === y1){
            break;
        }
        let e2 =2*err;

        if(e2 > -dy){
            err -= dy;
            x0 += sx;
        }

        if(e2 < dx){
            err += dx;
            y0 += sy;
        }
        paso++;
    }
}

//agrega una fila a la tabla 
function agregarFila(paso, x, y, err){
    let tabla =document.getElementById("tabla");
    let fila =tabla.insertRow();

    let celdaPaso= fila.insertCell(0);
    let celdaX= fila.insertCell(1);
    let celdaY= fila.insertCell(2);
    let celdaErr= fila.insertCell(3);

    celdaPaso.textContent= paso;
    celdaX.textContent= x;
    celdaY.textContent= y;
    celdaErr.textContent= err;   
}

//funcion principal
function dibujarLinea(){

    //obtener valores
    const x0 = parseInt(document.getElementById("x0").value);
    const y0 = parseInt(document.getElementById("y0").value);
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);

    limpiarCanvas();

    //dibuja puntos inicial y final
    Bresenham(x0,y0,x1,y1);
}