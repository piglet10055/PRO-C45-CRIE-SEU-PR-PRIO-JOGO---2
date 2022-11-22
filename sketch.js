var robson,robsonImg
var pao
var alface
var bacteria
var presunto
var sanduiche
var telaDeFundo

function preload()
{
	robsonImg = loadImage("robson.png");
	pao = loadImage("pao.png");
	presunto = loadImage("presuntinho.png");
	bacteria = loadImage("bacteria.png");
	alface = loadImage("alface.png");
	sanduiche = loadImage("sanduiche.png");
	telaDeFundo = loadImage("backGround.jpeg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	//Crie os Corpos aqui.


	robson = createSprite(100,100 );
	robson.addImage(robsonImg)
	robson.scale = 0.394046

	
}


function draw() {
  rectMode(CENTER);
  background(telaDeFundo);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		robson.y -= 5
	}

	if(keyIsDown(DOWN_ARROW)){
		robson.y += 5
	}

	if(keyIsDown(LEFT_ARROW)){
		robson.x -= 5
	}

	if(keyIsDown(RIGHT_ARROW)){
		robson.velocityX += 5
	}
}

