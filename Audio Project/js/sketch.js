//Annabelle Kanchirathingal

var bug = [];
var count = 55;
var squish = 0;
var splat = [];
var state;
var speed;
var score;
var squished;
var isPlaying = false;
var synth, chordLoop, seq;


function preload()
{
	for( var i = 0; i < count; i++)
    {
		bug[i] = new Walker("bugSprite.png", random(30,640), random(30,480), random(3,9), random([-1,1]));
		splat = loadImage("squished.png");
	}

}

function setup() 
{
  createCanvas(640,480);
  imageMode(CENTER);
  state = 0;
  score = 0;
  speed = 4;
  squished = false;
  
  Tone.Transport.bpm.value = 120;
  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = '1m';
  synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
  synth.volume.value = -10;

  Tone.Transport.schedule(function(time)
  { 
	synth.triggerAttackRelease(['C4','E5','G2'],'1n', time);
	synth.triggerAttackRelease(['C3','E3','G4'],'1n', '+3n');
	synth.triggerAttackRelease(['D2','F5','A4'],'1n', '+3n');
	synth.triggerAttackRelease(['A3','C5','A4'],'1n', time);
  });

  if(state == 0)
	Tone.Transport.start();
  
}

function triggerSynth(time)
{
	synth.triggerAttackRelease('A4','8n', time);
}

function synthNotes(time, note)
{
	synth.triggerAttackRelease(note,'8n',time);
}

function mousePressed()
{
	for( var i = 0; i < count; i++)
    {
		bug[i].squish(mouseX, mouseY);
	}
}

function mouseReleased()
{
	for( var i = 0; i < count; i++)
    {
		bug[i].drop();
	}
}


function draw() 
{
	background(255);

	if(state == 0) 
	{
		background(255, 255, 51);
		textSize(70);
		text("Squish Da Bugs", 70, 240);
		textSize(30);
		text("Press Any Key to Start", 155, 310);
	}

	if(state == 1) 
	{
		background(204, 255, 255);
		for(var i = 0; i < count; i++) 
		{
			bug[i].draw();
		}
		time = 20 - round(millis()/1000);
		if(time > 0) 
		{
			textSize(15);
			text("Time: "+ time, 5, 25);
			textSize(15);
			text("Score: "+ score, 5, 55);
		}
		else 
		{
			chordLoop = new Tone.Loop(function(time)
			{ 
				synth.triggerAttackRelease(['d4','e4','e3'],'2n', time);
				synth.triggerAttackRelease(['a3','gb3','c4'],'2n', '+2n');
			}, '8n');
			chordLoop.start(0);	
			state = 2;				
		}
	}

	if(state == 2) 
	{
		background(204, 204, 255);
		textSize(70);
		text("GAME OVER", 80, 240);
		textSize(30);
		text("You Squished "+ score + " bugs!", 145, 310);
	}

}

function keyPressed() 
{
	// play game music
seq = new Tone.Sequence(synthNotes, ['e3','a3','g3'], '8n');
seq.start(0);

state = 1;
}
function Walker(imageName, x, y, speed, moving)
{
	this.spriteSheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = moving;
	this.speed = speed;
	

	this.draw = function()
    {
		
		push();
		translate(this.x,this.y);
		if(this.facing<0){
			scale(-1.0,1.0);
		}

		if(this.moving ==0)
        {
			image(this.spriteSheet, 0, 0, 80, 80, 0, 0, 80, 80);
		}
		else
		{
			if(this.frame ==0)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 80, 0, 80, 80);
			}
			if(this.frame ==1)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 160, 0, 80, 80);
			}
			if(this.frame ==2)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 240, 0, 80, 80);
			}
			if(this.frame ==3)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 320, 0, 80, 80);
			}
			if(this.frame ==4)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 400, 0, 80, 80);
			}
			if(this.frame ==5)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 480, 0, 80, 80);
			}
			if(this.frame ==6)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 560, 0, 80, 80);
			}
			if(this.frame ==7)
            {
				image(this.spriteSheet, 0, 0, 80, 80, 640, 0, 80, 80);
			}

			if(frameCount %6 ==0)
            {
				this.frame = (this.frame+1)%2;
				this.x = this.x + this.moving * this.speed;
				
				if(this.x<30)
                {
					this.moving = 1;
					this.facing = 1;
				}
				if(this.x > width - 30)
                {
					this.moving = -1;
					this.facing = -1;
				}
				if(squish > 3)
                {
					this.x = this.x + this.moving * (this.speed + 3);
				}
			}
			
 		}
		pop();

		this.go = function(direction)
        {
			this.moving = direction;
			this.facing = direction;
		}

		this.stop = function()
        {
			this.moving = 0;
			this.frame = 3;
		}

		this.grab = function(x, y)
        {
			if(this.x-40 < x && x<this.x+40 && this.y-40 < y && y < this.y+40)
            {
				this.stop();
				this.mouseX = x;
				this.mouseY = y;
				this.initialX = this.x;
				this.initialY = this.y;
			}
		}

		this.drag = function(x,y)
        {
			if(this.moving == 0)
            {
				this.x = (x-this.mouseX) + this.initialX;
				this.y = (y-this.mouseY) + this.initialY;
			}
		}

		this.drop = function()
        {
			this.go(this.facing);
		}

		this.squish = function(x,y)
        {
			if((this.x-40<x && x < this.x+40 && this.y-40<y && y<this.y+40) && (this.spriteSheet !== splat)) 
            {
			  this.moving = 0;
			  this.spriteSheet= splat;
			  score++;
			  squish = squish + 1;
			}
		}
	}
}
