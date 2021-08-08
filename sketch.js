
var gameState=0;
var distance=0;
var form, player, game;
var playerCount, allPlayers, database;
var skis, ski1, ski2, ski3;
var ski1Img,ski2Img,ski3Img, skibg;

function preload() {

  skibg= loadImage("images/Skibg.jpg");
  ski1Img=loadImage("images/Ski1.png");
  ski2Img=loadImage("images/Ski2.png");
  ski3Img=loadImage("images/Ski3.png");
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);
  background("white");
  image(skibg, 0,-displayHeight*4,displayWidth, displayHeight*5);
  database= firebase.database();
  game= new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount===3) {
    game.update(1);
  }
  if(gameState===1) {
    clear();
    game.play();
  }
  if(gameState===2) {
    end();
  }
}