let background1;
let charizard;
let venasuar;
let music1;
let music2;
var randomNumber;

let a = 0.0;
let s = 0.0;
function setup() {
  createCanvas(400, 400);
  	randomNumber = Math.round(random(1, 2));
  console.log(randomNumber)
}
function preload(){
  venasuar = createImg('Spr_5b_003_m.png')
  charizard =  createImg('Spr_b_5b_006.png')
  background1 = loadImage('pokemon-battle-background-8.png')
  hilbert = createImg('https://orig00.deviantart.net/cd35/f/2010/236/8/3/pokemon_trainer_red_animated_by_longcat93.gif')
  ele = createAudio('Pokemon DiamondPearlPlatinum - Battle! Champion Cynthia Music (HQ).mp3')
  ele1 = createAudio('Pokemon Champion Cynthia (piano theme).mp3')
  ele2 = createAudio('emerald_0005.wav')
}


function draw() {
  background(220);
  fill('white')
  image(background1, 0, 0, 400, 400)
  
  charizard.position(75,425);
   hilbert.position(305,275);
  venasuar.position(255,320);
  rect(180, 270, 230, 130);
  rect(0, 300, 180, 100);
  rect(180, 200, 375, 55, 20);
  rect(0, 20, 200, 55, 20);
  fill('black')
  fill('black')
  
   line(300, 270, 300, 400);
     line(180, 330, 400, 330);

  textSize(26);
  x = 'What Should'
  y = 'Charizard do?'
   textFont('Georgia');
  textSize(15);
  text('Charizard', 195, 220);
    text('Venasuar', 15, 40);
  text('Lvl 100', 330, 220);
  text('400/400', 330, 250);
  text('Lvl 100', 125, 40);
  text('400/400', 125, 70);
  textSize(10);
  text('HP', 190, 230);
      text('HP', 10, 50);
  fill('#0f0')
  rect(205, 222, 200, 10); 
  rect(25, 42, 170, 10);
  fill('black')
  textSize(26);
  text(x, 10, 330);
    text(y, 10, 363);
  text('Fight', 190, 300);
  text('Bag', 310, 300);
 textSize(26);
  text('Pokemon', 190, 360);
  textSize(26);
  text('Run', 310, 360);
  if(randomNumber == 2){
		ele.play()
  }
  if(randomNumber == 1){
    ele1.play()
  }
}
  function mousePressed() {
  ele2.play()
}


