var s;
var scl = 20;
var food;
var phase = 2;

let score = 0;
let level = 1;

var bg;

var background1;
var serial;
var portName = 'COM5';

function setup()
{
   createCanvas(600, 600);
   bg = loadImage('applebg.png');
   
   
   crashed = new Tone.NoiseSynth();
   freeverb = new Tone.Freeverb().toMaster();
	freeverb.roomSize = .2;
	crashed.connect(freeverb); 
   pitchShift = new Tone.PitchShift().toMaster();
   hit = new Tone.Player("media/hit.mp3").connect(pitchShift);
   background1 = new Tone.Player("media/background1.wav").connect(pitchShift);
  
   s = new Snake();
   frameRate(8);
   pickLocation();

   serial = new p5.SerialPort();
   serial.open(portName);
   
}


function pickLocation()
{
   var cols = floor(width/scl);
   var rows = floor(height/scl);

   var foodX = floor(random(cols)) * scl;
   var foodY = floor(random(rows)) * scl;

   for (var i = 0; i < s.tail.length; i++) {
      if ((foodX === s.tail[i].x) && (foodY === s.tail[i].y)) {
         foodX = floor(random(cols)) * scl;
         foodY = floor(random(rows)) * scl;

         i = 0;
      }
   }
   
   food = createVector(foodX, foodY);
}

function clicked()
{
   if(mouseIsPressed)
   {
      click = true;
   }
   else
   {
      click = false;
   }
   return false;
}

function draw()
{
   background(bg);
   if(s.eat(food))
   {
      pickLocation();
   }
   s.death();
   s.update();
   s.show();
   if(phase == 2)
   {
     
      
      textFont('Courier New');
      textSize(75);
      fill(255, 255, 255);
      text("SNAKE", 177, 100);
      fill(255);
      textSize(22);
      text("Play Game", 240, 430);
      fill(0, 255, 21, 70);
      rect(230, 400, 140, 50);
      if(mouseX >= 230 && mouseX <= 330 && mouseY >= 400 && mouseY <=450 && click == true)
      {
         
         phase = 0;
         synth = new Tone.Synth().toMaster();
         notes = ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]];
         synth.volume.value = -7;
         Tone.Transport.bpm.value = 130;
         seq = new Tone.Sequence((time, note) => {synth.triggerAttackRelease(note, 0.1 , time);},notes).start();
         Tone.Transport.start();
      }
   }
   if(phase == 0);
   {
     
      textSize(20);
      fill(219, 80, 21);
      textFont("Courier New");
      textStyle(BOLD);
      text("Score: " + score, 20, 580);
      if(score > 2)
      {
         frameRate(10);
      }
      if(score > 5)
      {
         frameRate(15);
      }
      if(score > 10)
      {
         frameRate(20);
      }
      if(score > 15)
      {
         frameRate(25);
      }
      if(score > 20)
      {
         frameRate(30);
      }
   }

   if(phase == 1)
   {
      
      textSize(75);
      fill(255);
      textFont('Courier New');
      text("GAME OVER", 93, 100);
      if(score == 1)
      {
         fill(219, 80, 21);
         textSize(50);
         text("You ate " + score + " apple!", 55, 440);
      }
      else
      {
         fill(219, 80, 21);
      textSize(50);
      text("You ate " + score + " apples!", 55, 440);
      }
      textSize(30);
      fill(255);
      text("refresh to play again", 100, 500); 
   
   }
   fill(255, 0, 0);
   rect(food.x, food.y, scl, scl);

   clicked();
  
}

function keyPressed()
{
   if(keyCode == UP_ARROW)
   {
      s.dir(0, -1);
   }
   else if(keyCode == DOWN_ARROW)
   {
      s.dir(0, 1);
   }
   else if(keyCode == RIGHT_ARROW)
   {
      s.dir(1, 0);
   }
   else if(keyCode == LEFT_ARROW)
   {
      s.dir(-1, 0);
   }
}

function Snake()
{
   this.x = 0;
   this.y = 0;
   this.xspeed = 1;
   this.yspeed = 0;
   this.total = 0;
   this.tail = [];

   this.eat = function(pos)
   {
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1)
      {
         this.total++;
         score = score +1;
         hit.start();
         return true;
      }
      else
      { 
         return false;
      }
   }

   this.dir = function(x, y)
   {
      this.xspeed = x;
      this.yspeed = y;
      
   }

   this.death = function()
   {
      for(var i = 0; i < this.tail.length; i++)
      {
         var pos = this.tail[i];
         var d = dist(this.x, this.y, pos.x, pos.y);
         if(d < 1)
         {
            this.total = 0;
            this.tail = [];
            //game.stop();
            seq.stop();
            Tone.Transport.stop();
            crashed.triggerAttackRelease("12n");
            background1.start();
            phase = 1;
         }
      }
   }

   this.update = function()
   {
      if(this.total === this.tail.length)
      {
         for(var i = 0; i < this.tail.length-1; i++)
         {
            this.tail[i] = this.tail[i+1];
         }
      }

      this.tail[this.total-1] = createVector(this.x, this.y);

      this.x = this.x + this.xspeed*scl;
      this.y = this.y + this.yspeed*scl;

      this.x = constrain(this.x, 0, width-scl);
      this.y = constrain(this.y, 0, height-scl);
   }

   this.show = function()
   {
      fill(109, 163, 77);
      for(var i = 0; i < this.tail.length; i++)
      {
         rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      noStroke();
      fill(109, 163, 77);
      rect(this.x, this.y, scl, scl);
   }
}
