//obtiene el canvas
const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

//limpiar canvas
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

