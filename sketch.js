let canvas;

let scl = 15;
let rows = 40;
let cols = 40;

let yOff = 369;
let xOff = 369;

let xPos = 0;
let yPos = 0;

let angle = 0;
let pitch = 0.785;
let zoom = -800;

function setup(){
	canvas = createCanvas(800, 800, WEBGL);

	noiseSeed(369);
}

function draw(){
	background(51);

	pointLight(250, 180, 250, 0, -250, 500);

	translate(xPos, rows / 2 * scl + yPos, zoom);
	rotateX(pitch);
	rotateZ(angle);

	keys();

	for (let x = 0 - cols / 2; x < cols - cols / 2; x++){
		for (let y = 0 - rows / 2; y < rows - rows / 2; y++){
			let block = new Block(x, y).show();
		}
	}
}

function getZ(x, y){
	return floor(noise((x - xOff) / 95, (y - yOff) / 95) * 75) * scl;
}

function keys(){
	if (keyIsDown(UP_ARROW)){
		if (keyIsDown(16)){
			yOff += 3;
		} else {
			yOff += 1;
		}
	} else if (keyIsDown(DOWN_ARROW)){
		if (keyIsDown(16)){
			yOff -= 3;
		} else {
			yOff -= 1;
		}
	}

	if (keyIsDown(LEFT_ARROW)){
		if (keyIsDown(16)){
			xOff += 3;
		} else {
			xOff += 1;
		}
	} else if (keyIsDown(RIGHT_ARROW)){
		if (keyIsDown(16)){
			xOff -= 3;
		} else {
			xOff -= 1;
		}
	}

	if (keyIsDown(187)){
		zoom += 25;
	} else if (keyIsDown(189)){
		zoom -= 25;
	}

	if (keyIsDown(69)){
		angle += 0.05;
	} else if (keyIsDown(81)){
		angle -= 0.05;
	}

	if (keyIsDown(87)){
		yPos -= 10;
	} else if (keyIsDown(83)){
		yPos += 10;
	}

	if (keyIsDown(65)){
		xPos -= 10;
	} else if (keyIsDown(68)){
		xPos += 10;
	}

	if (keyIsDown(82)){
		pitch -= 0.03;
	} else if (keyIsDown(70)){
		pitch += 0.03;
	}

	if (keyIsDown(221)){
		cols++;
		rows++;
	} else if (keyIsDown(219)){
		cols--;
		rows--;
	}
}