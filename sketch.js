var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    boxImg = loadImage("unnamed.jpg");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites() 
    //create 4 different surfaces



    //create box sprite and give velocity
    Box = createSprite(400,300,30,30);
    Box.addImage(boxImg);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
}
