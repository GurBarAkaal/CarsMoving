// RED CAR
let carImg2x = 50;
let carImg2y = 260;

// ORANGE CAR
let carImgX = 150;
let carImgY = 308;

// BIRD IMG
let birdImgX = 10;
let birdImgY = 100;

// ORANGE CAR
let jKeyDown = false;
let iKeyDown = false;
let kKeyDown = false;
let lKeyDown = false;

//  RED CAR
let aKeyDown = false;
let wKeyDown = false;
let sKeyDown = false;
let dKeyDown = false;

// ROAD LINES
let roadLineO = 15;
let roadLineX = 80;
let roadLineY = 160;
let roadLineZ = 240;
let roadLineQ = 320;
let roadLineU = 400;

// SKY
let skyR = 173;
let skyG = 216;
let skyB = 230;

// SUN
let sunY = 50;

// Track frames gone by
let frame = 0;

// Canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// CAR CODE
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "KeyD") dKeyDown = true;
  if (event.code == "KeyA") aKeyDown = true;
  if (event.code == "KeyW") wKeyDown = true;
  if (event.code == "KeyS") sKeyDown = true;
  if (event.code == "KeyL") lKeyDown = true;
  if (event.code == "KeyJ") jKeyDown = true;
  if (event.code == "KeyI") iKeyDown = true;
  if (event.code == "KeyK") kKeyDown = true;
}

function keyupHandler(event) {
  console.log(event.code);
  if (event.code == "KeyD") dKeyDown = false;
  if (event.code == "KeyA") aKeyDown = false;
  if (event.code == "KeyW") wKeyDown = false;
  if (event.code == "KeyS") sKeyDown = false;
  if (event.code == "KeyL") lKeyDown = false;
  if (event.code == "KeyJ") jKeyDown = false;
  if (event.code == "KeyI") iKeyDown = false;
  if (event.code == "KeyK") kKeyDown = false;
}

// Animation loop
requestAnimationFrame(draw);

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(70, sunY, 30, 0, 2 * Math.PI);
  ctx.fill();

  // SKY

  if (skyR <= 255) {
    skyR += 0.1;
  }

  if (skyG >= 165) {
    skyG -= 0.1;
  }

  if (skyB >= 0) {
    skyB -= 0.1;
  }

  // Sun sets and stops under the pier
  if (sunY <= 120 && frame >= 200) {
    sunY = sunY += 0.5; // or sunY++
  }

  // Mountains
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(200, 80);
  ctx.lineTo(-20, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(200, 80);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(-300, 100);
  ctx.lineTo(-150, 400);
  ctx.lineTo(100, 200);
  ctx.lineTo(-300, 100);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(70, 100);
  ctx.lineTo(-70, 400);
  ctx.lineTo(235, 400);
  ctx.lineTo(70, 100);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 80);
  ctx.lineTo(200, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(400, 140);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(320, 140);
  ctx.lineTo(150, 400);
  ctx.lineTo(480, 400);
  ctx.lineTo(320, 140);
  ctx.fill();
  ctx.stroke();

  // Snow
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(200, 80);
  ctx.lineTo(160, 139);
  ctx.lineTo(250, 160);
  ctx.lineTo(200, 80);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(70, 100);
  ctx.lineTo(40, 165);
  ctx.lineTo(100, 157);
  ctx.lineTo(70, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(320, 140);
  ctx.lineTo(300, 170);
  ctx.lineTo(330, 157);
  ctx.lineTo(320, 140);
  ctx.fill();

  // Grass
  ctx.fillStyle = `green`;
  ctx.fillRect(0, 300, 400, 110);
  // update timing
  frame++;

  // Road
  ctx.fillStyle = `black`;
  ctx.fillRect(0, 325, 400, 55);

  // ROAD LANE

  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineX, 350, 40, 5);
  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineY, 350, 40, 5);
  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineZ, 350, 40, 5);
  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineQ, 350, 40, 5);
  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineU, 350, 40, 5);
  ctx.fillStyle = `Yellow`;
  ctx.fillRect(roadLineO, 350, 40, 5);

  // Draw text
  ctx.font = "10px Monospace";
  ctx.fillStyle = "white";
  ctx.fillText("H. Multani Mountain Scene", 250, 375);

  // Draw cars
  var carImgTwo = document.getElementById("carElTwo");
  ctx.drawImage(carImgTwo, carImg2x, carImg2y, 100, 100);
  var carImg = document.getElementById("carEl");
  ctx.drawImage(carImg, carImgX, carImgY, 90, 90);

  // Birds
  var birds = document.getElementById("birdEl");
  ctx.drawImage(birds, birdImgX, birdImgY, 90, 90);

  // CAR CONTROL
  if (dKeyDown) carImg2x++;
  if (aKeyDown) carImg2x--;
  if (wKeyDown) carImg2y--;
  if (sKeyDown) carImg2y++;
  if (lKeyDown) carImgX++;
  if (jKeyDown) carImgX--;
  if (iKeyDown) carImgY--;
  if (kKeyDown) carImgY++;

  // LINES
  roadLineX = roadLineX - 1;
  roadLineZ = roadLineZ - 1;
  roadLineY = roadLineY - 1;
  roadLineQ = roadLineQ - 1;
  roadLineU = roadLineU - 1;
  roadLineO = roadLineO - 1;
  if (roadLineX < -50) roadLineX = 400;
  if (roadLineY < -50) roadLineY = 400;
  if (roadLineZ < -50) roadLineZ = 400;
  if (roadLineQ < -50) roadLineQ = 400;
  if (roadLineU < -50) roadLineU = 400;
  if (roadLineO < -50) roadLineO = 400;

  // BIRD
  birdImgX = birdImgX + 0.5;
  if (birdImgX > 410) birdImgX = -80;

  requestAnimationFrame(draw);
}
