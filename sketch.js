var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var select_sprites;
var pontos = 0;
var stat = "Play";
var Lgroup;
var apples;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  Lgroup = new Group();
  apples = new Group();
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.depth = 10
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites(); 
   if (stat == "Play"){
     select_sprites = Math.round(random(1,3));
     if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }

if(rabbit.isTouching(apples)){
  pontos++;
  appless.DestroyEach();
}
   }
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

 

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

text("Pontos:"+ pontos,325,350);
}

function createApples() {
apple = createSprite(random(50, 350),-10, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
apple.depth = 3
apples.add(apple)
}

function createOrange() {
orangeL = createSprite(random(50, 350),-10, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
orangeL.depth = 3
}

function createRed() {
redL = createSprite(random(50, 350),-10, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  redL.depth = 3
}

