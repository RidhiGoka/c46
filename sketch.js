var happyBoy, happyBoyimg, blueBallimg;
var canvas;
var input, playButton, titleImg, greeting;
var playerName;
var blueballs = [];

function preload(){
happyBoyimg = loadImage("./Images/boy-happy.png");
blueBallimg = loadImage("./Images/blue-ball.png");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
happyBoy = createSprite( 200, 500, 10, 10);
happyBoy.addImage("happyboy", happyBoyimg);

for(i = 0; i <= 6; i++){
blueballs[i] = createSprite(120 + 200 * [i+10], 50, 10, 10);
blueballs[i].addImage("ball", blueBallimg);
blueballs[i].visible = false;
}


input = createInput("").attribute("placeholder", "Enter your name");
playButton = createButton("Play");
titleImg = createImg("./Images/bubble-shooter.png", "game title");
greeting = createElement("h2");

titleImg.position(120, 50);
input.position(width / 2 - 110, height / 2 - 80);
playButton.position(width / 2 - 90, height / 2 - 20);
greeting.position(width / 2 - 300, height / 2 - 100);

playButton.mousePressed(() => {
    input.hide();
    playButton.hide();
    playerName = input.value();
    greeting.html("Hello " + playerName + "!")
    greeting.position(0,0);
    greeting.style('color', 'black');
    greeting.style('font-size', '100px');
    titleImg.position(0,0);
    happyBoy.visible = false;
    displayBalls();
    


});




}


function draw(){
background("red");
drawSprites(); 

}

function displayBalls(){
    for(i = 0; i <= 6; i++){
    blueballs[i].visible = true;
    blueballs[i].scale = 0.5;
    }

}



