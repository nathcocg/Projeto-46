var w1, w2, w3, w4, w5, w6, w7, w8, w9, s, edges, spb1, spb3, spb3, spb4, spb5, r1, r2, e1, e2, e3, e4, e5, e6, e7, eM;
var bgImg, sImg, s2Img, spbImg, rImg, e1I, e2I, e3I, e4I, e5I, e6I, e7I;

function preload() {
  bgImg = loadImage("./assets/bg.png");
  sImg = loadImage("./assets/sonicdireita.png");
  s2Img = loadImage("./assets/sonicesquerda.png");
  spbImg = loadImage("./assets/spb.png");
  rImg = loadImage("./assets/robotleft.png");
  e1I = loadImage("./assets/blue.png");
  e2I = loadImage("./assets/gold.png");
  e3I = loadImage("./assets/pink.png");
  e4I = loadImage("./assets/purple.png");
  e5I = loadImage("./assets/red.png");
  e6I = loadImage("./assets/silver.png");
  e7I = loadImage("./assets/green.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  s = createSprite(width/12*0.5, height-50);
  s.addImage("sonicdireita", sImg);
  s.addImage("sonicesquerda", s2Img);
  s.scale = 0.6;
  s.velocityY = 0;
  
  w1 = createSprite(width/4+50, height-85, width/4, height/35);
  w1.shapeColor = "lightBlue";
  w2 = createSprite(width/8*6, height-85, width/6, height/35);
  w2.shapeColor = "lightBlue";
  w3 = createSprite(width/2, height-220, width/2, height/35);
  w3.shapeColor = "lightBlue";
  w4 = createSprite(width/4*3.5, height-335, width/5, height/35);
  w4.shapeColor = "lightBlue";
  w5 = createSprite(width/4*1, height-335, width/5.5, height/35);
  w5.shapeColor = "lightBlue";
  w6 = createSprite(width/6.5*0.58, height-220, width/7, height/35);
  w6.shapeColor = "lightBlue";
  w7 = createSprite(width/6.5-0.5, height-285, width/70, height/7);
  w7.shapeColor = "lightBlue";
  w8 = createSprite(width/4*2.1, height-650, width/4*3, height/35);
  w8.shapeColor = "lightBlue";
  w9 = createSprite(width/5*2.8, height-430, width/5, height/35);
  w9.shapeColor = "lightBlue";
  
  
  edges = createEdgeSprites();

  spb1 = createSprite(width/12*2, height-25);
  spb1.addImage(spbImg);
  spb1.scale = 0.2;
  spb2 = createSprite(width/4+150, height-115);
  spb2.addImage(spbImg);
  spb2.scale = 0.18;
  spb3 = createSprite(width/4+405, height-35);
  spb3.addImage(spbImg);
  spb3.scale = 0.2;
  spb4 = createSprite(width/4*3.5, height-370);
  spb4.addImage(spbImg);
  spb4.scale = 0.2;
  spb5 = createSprite(width/4*1, height-370);
  spb5.addImage(spbImg);
  spb5.scale = 0.2;

  r1 = createSprite(width/2, height-275);
  r1.addImage(rImg);
  r1.scale = 0.25;
  r2 = createSprite(width/4*2.1, height-705);
  r2.addImage(rImg);
  r2.scale = 0.25;
  
  e1 = createSprite(width/12*2.8, height-25);
  e1.addImage(e1I);
  e1.scale = 0.022;
  e2 = createSprite(width/4-50, height-120);
  e2.addImage(e2I);
  e2.scale = 0.03;
  e3 = createSprite(width/2-200, height-260);
  e3.addImage(e3I);
  e3.scale = 0.05;
  e4 = createSprite(width/5*2.8-5, height-465);
  e4.addImage(e4I);
  e4.scale = 0.02;
  e5 = createSprite(width/5*0.5-35, height-450);
  e5.addImage(e5I);
  e5.scale = 0.04;
  e6 = createSprite(width/4*2.5, height-685);
  e6.addImage(e6I);
  e6.scale = 0.07;
}

function draw() {
  background(bgImg);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    s.x = s.x + 5;
    s.changeImage("sonicdireita");
  }
  if(keyIsDown(LEFT_ARROW)){
    s.x = s.x - 5;
    s.changeImage("sonicesquerda");
  }
  if(keyIsDown(UP_ARROW)&& s.y>=height-480){
    s.velocityY = - 5;
  }

  s.velocityY = s.velocityY + 0.8;
  
  s.collide(w1);
  s.collide(w2);
  s.collide(w3);
  s.collide(w4);
  s.collide(w5);
  s.collide(w6);
  s.collide(w7);
  s.collide(w8);
  s.collide(w9);
  s.collide(edges);


}
