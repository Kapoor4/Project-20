var bgImage;
var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouseimg4;


function preload() {
    bgImage = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(800,700,50,50);
    cat.addAnimation("cat1",catimg1);
    cat.scale = 0.18;

    mouse = createSprite(200,670,50,50);
    mouse.addImage(mouseimg1);
    mouse.scale = 0.2;

}

function draw() {

    background(bgImage);
    
    keyPressed();

    if (cat.x-mouse.x<(cat.width-mouse.width)/2 ){

        cat.addAnimation("cat3", catimg3);
        cat.changeAnimation("cat3");
        mouse.addAnimation("mouse3", mouseimg3)
        mouse.changeAnimation("mouse3");

    }

    

    drawSprites();
}


function keyPressed(){

  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouse2", mouseimg2)
      mouse.changeAnimation("mouse2");
      mouse.x = mouse.x+3;
  }

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("cat2", catimg2)
    cat.changeAnimation("cat2");
    cat.x = cat.x-3;
}

}
