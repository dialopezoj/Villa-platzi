var vp=document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad=aleatorio(1,25);
var xcerdo= aleatorio(0,420);
var ycerdo= aleatorio(0,420);


document.addEventListener("keydown", moverCerdo)
console.log(cantidad);

var teclas ={
    UP:38, DOWN: 40, LEFT: 37, RIGHT: 39
};

var fondo={
    url:"tile.png",
    cargaOK:false
}

var vaca={
    url:"vaca.png",
    cargaOK: false
}

var cerdo={
    url:"cerdo.png",
    cargaOK: false
}

fondo.imagen= new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen= new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen= new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo(){
    fondo.cargaOK=true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK=true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK=true;
    dibujar();
    dibujar();
}


function dibujar(){
    if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK==true){
        for(var v=0;v<cantidad;v++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,7);
            x=x*60;
            y=y*60;
            papel.drawImage(vaca.imagen, x, y);
            }
        }
    if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
    }
}



function moverCerdo(evento){
    var movimiento=20;
    switch (evento.keyCode){
        case teclas.DOWN:
        ycerdo=ycerdo+10;
        dibujar();
        break;
        case teclas.UP:
        ycerdo=ycerdo-10;
        dibujar();
        break;
        case teclas.LEFT:
        xcerdo=xcerdo-10;
        dibujar();
        break;
        case teclas.RIGHT:
        xcerdo=xcerdo+10;
        dibujar();
        break;        
    }
}



function aleatorio(min, max){
    var resultado;
    resultado=Math.floor((Math.random()*(max-min+1))+min);
    return resultado;
}