// Functions Needed:
var pg;
var img;
var img2;
var offset = 0;
var offset2 = 0;
var easing = 0.05;
var xpos, ypos, xspeed, yspeed;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(220,20,60);   
  pg = createGraphics(500, 250);

  img =loadImage("Inter2_Letter_A.png");  
  img2 =loadImage("Inter2_Letter_B.png");
}


function draw(){   
fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 100, 5000);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);
 

  // image(img, windowWidth/3, 0);  // Display at full opacity
  var dx = (mouseX-img.width/2) - offset;
  var dy = (mouseY+img2.width/2) - offset2; 
  // var dz = (mouseY+img3.width/2) - offset3;


  offset += dx * easing;
  offset2 /= dy * easing;
  // offset3 += dz * easing

  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);

    tint(255, 127);  // Display at half opacity
    image(img2, offset2, 500);
  //Draw the offscreen buffer to the screen with image()

  // image(img3, offset3, 0; 


  image(pg, windowWidth, windowHeight);
}

// function firstImg () {
//   this.xpos = random(0,windowWidth);
//   this.ypos = random(0,windowHeight);
//   this.xspeed = random(-0.7,0.7);
//   this.yspeed = random(-0.7,0.7);
//   this.display = function () {
//     image(img2, xpos, ypos);
//   }

//   this.move = function() {
//      this.xpos = this.xpos + this.xspeed;
//    if (this.xpos  <= windowWidth/6 || this.xpos >= windowWidth-(windowWidth/6)) {
//        this.xspeed = this.xspeed * -1;
//      }
//      this.ypos = this.ypos + this.yspeed;
//    if (this.ypos <= windowHeight/7 || this.ypos >= windowHeight-(windowHeight/5)) {
//        this.yspeed = this.yspeed * -1;
//      }
//      this.ypos = constrain(this.ypos, windowHeight/7, windowHeight-(windowHeight/5));
//      this.xpos = sconstrain(this.xpos, windowWidth/6, windowWidth-(windowWidth/6));
//    }
// }

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

