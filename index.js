//obtiene el canvas
const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

//limpiar canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

//función para dibujar un punto en el canvas
function drawPoint(x,y,size){
    ctx.fillRect(x-size/2, y-size/2, size, size);
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
    ctx.fillRect(x0, y0, 4);
    ctx.fillRect(x1, y1, 4);
}