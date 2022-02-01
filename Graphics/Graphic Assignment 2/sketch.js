var lineColor = [0, 0, 0];
var click = false;
var lineSize = 3;

function setup() {
	createCanvas(700, 500);
	background(0, 0, 30, 30);
}

function clicked(){
	if(mouseIsPressed){
		click = true;
	}
	else{
		click = false;
	}
	return false;
}

function draw() {
	stroke(255, 255 , 255);
	strokeWeight(1);
	
    // Red Palette
    fill(255, 0, 0);
	rect(0, 0, 20, 20);
    
    // Orange Palette
	fill(240, 135, 50);
	rect(0, 20, 20, 20); 
    
    // Yellow Palette
	fill(255, 250, 74);
	rect(0, 40, 20, 20); 
    
    // Green Palette
	fill(120, 240, 60);
	rect(0, 60, 20, 20);
    
    // Light Blue Palette
	fill(115, 250, 250);
	rect(0, 80, 20, 20); 
    
    // Blue Palette
	fill(0, 70, 250);
	rect(0, 100, 20, 20);
    
    // Pink Palette
	fill(233, 93, 250);
	rect(0, 120, 20, 20); 
    
    // Brown Palette
	fill(120, 70, 20);
	rect(0, 140, 20, 20); 
    
    // White Palette
	fill(255, 255, 255);
	rect(0, 160, 20, 20);
    
    // Black Palette
	fill(0, 0, 0);
	rect(0, 180, 20, 20);
    
    // Brush Size Elipses
	fill(255, 255, 255);
	ellipse(12, 215, 10, 10); //Small
    
	fill(255, 255, 255);
	ellipse(12, 235, 15, 15); //Medium
    
	fill(255, 255, 255);
	ellipse(12, 260, 20, 20); //Large

	if(mouseX >= 0 && mouseX <=20 && mouseY >= 0 && mouseY <= 20 && click == true){
		lineColor = [255, 0, 0]; //Set Color to Red
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 20 && mouseY <= 40 && click == true){
		lineColor = [240, 135, 50]; //Set Color to Orange
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 40 && mouseY <= 60 && click == true){
		lineColor = [255, 250, 74]; //Set Color to Yellow
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 60 && mouseY <= 80 && click == true){
		lineColor = [120, 240, 60]; //Set Color to Green
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 80 && mouseY <= 100 && click == true){
		lineColor = [115, 250, 250]; //Set Color to LightBlue
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 100 && mouseY <= 120 && click == true){
		lineColor = [0, 70, 250]; //Set Color to Blue
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 120 && mouseY <= 140 && click == true){
		lineColor = [233, 93, 250]; //Set Color to Pink
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 140 && mouseY <= 160 && click == true){
		lineColor = [120, 70, 20]; //Set Color to Pink
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 160 && mouseY <= 180 && click == true){
		lineColor = [255, 255, 255]; //Set Color to White
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 180 && mouseY <= 200 && click == true){
		lineColor = [0, 0, 0]; //Set Color to Black
	}

	if(mouseX >= 0 && mouseX <=20 && mouseY >= 210 && mouseY <= 221 && click == true){
		lineSize = 1; //Set lineSize to 1;
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 227 && mouseY <= 245 && click == true){
		lineSize = 3; //Set lineSize to 3;
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 250 && mouseY <= 270 && click == true){
		lineSize = 5; //Set lineSize to 5;
	}
	if(mouseIsPressed){
		stroke(lineColor);
		strokeWeight(lineSize);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
	
	clicked();

	// Below is for troubleshooting:
	// print(mouseX, mouseY);
	// print("Click = " + click);
	// print("Line Color = " + lineColor);
	// print("Line Size = " + lineSize);
}
