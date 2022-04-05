var bg;
var bgimg ;
var per ;
var canvas;
var linea,linea1,linea2,linea3;
var punto;
var lineaImg,puntoImg,perimg;
var score 
var invisible1,invisible2,invisible3;
function preload(){
    lineaImg= loadImage('linea.png')
  puntoimg =  loadImage('punto.png') 
  bgimg =  loadImage('bg.png') 
}

function setup(){
 punto = createSprite(200,140,200,200);
punto.addImage(puntoimg);
linea1 = createSprite(200,200,200,200);
linea1.addImage(lineaImg);
linea2 = createSprite(200,400,200,200);
linea2.addImage(lineaImg);
linea3 = createSprite(200,600,200,200);
linea3 .addImage(lineaImg);

bg = createSprite(200,200,200,200)
bg.addImage(bgimg)

//per = createSprite(200,600,200,200);
//per .addImage(perimg);

invisible1 = createSprite(200,190,200,200);
invisible2 = createSprite(200,390,200,200);
invisible3 = createSprite(200,490,200,200);
  //    perimg  =  loadImage('per.png')
}

function draw(){
    
                
background('black')

 invisible1.visible =false;
 invisible2.visible =false;
 invisible3.visible =false;
 //function windowResized() {
 //   resizeCanvas(windowWidth, windowHeight);
 // }
 
 if(keyDown('space' )){
  punto.Y=-puntoY+100;


}

drawSprites();
}
