class Block {

	constructor(x, y){
		this.pos = createVector(x, y);
	}

	show(){
		this.front();
		this.back();
		this.left();
		this.right();
		this.top();
	}

	front(){
		fill(79, 52, 22);

		if (this.pos.y >= cols - cols / 2 - 1){
			return;
		}

		let amt = (floor(getZ(this.pos.x, this.pos.y)) - floor(getZ(this.pos.x, this.pos.y + 1))) / scl;

		if (amt > 0){
			for (let i = 0; i < amt; i++){
				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);

				endShape();
			}
		}
	}

	back(){
		fill(79, 52, 22);

		if (this.pos.y <= 0 - cols / 2){
			return;
		}

		let amt = (floor(getZ(this.pos.x, this.pos.y)) - floor(getZ(this.pos.x, this.pos.y - 1))) / scl;

		if (amt > 0){
			for (let i = 0; i < amt; i++){
				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);

				endShape();
			}
		}
	}

	left(){
		fill(79, 52, 22);

		if (this.pos.x <= 0 - cols / 2){
			return;
		}

		let amt = (floor(getZ(this.pos.x, this.pos.y)) - floor(getZ(this.pos.x - 1, this.pos.y))) / scl;

		if (amt > 0){
			for (let i = 0; i < amt; i++){
				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl * i);

				endShape();
			}
		}
	}

	right(){
		fill(79, 52, 22);

		if (this.pos.x >= rows - cols / 2 - 1){
			return;
		}

		let amt = (floor(getZ(this.pos.x, this.pos.y)) - floor(getZ(this.pos.x + 1, this.pos.y))) / scl;

		if (amt > 0){
			for (let i = 0; i < amt; i++){
				beginShape(QUADS);

				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl - scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) - scl * i);

				endShape();
			}
		}
	}

	top(){
		if (noise((this.pos.x - xOff), (this.pos.y - yOff)) * 33 % 1 > 0.995){
			this.tree();
		} else {
			if (noise((this.pos.x - xOff), (this.pos.y - yOff)) * 33 % 1 > 0.955 && noise((this.pos.x - xOff), (this.pos.y - yOff)) * 33 % 1 < 0.985){
				this.grass();
			}

			fill(100, 163, 20);

			beginShape(QUADS);

			vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y));
			vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y));
			vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y));
			vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y));

			endShape();
		}
	}

	grass(){
		fill(34, 89, 16);

		push();

		noStroke();

		translate(this.pos.x * scl + scl / 2, this.pos.y * scl + scl / 2, getZ(this.pos.x, this.pos.y) + 4);

		box(1, 1, 8);

		pop();
	}

	tree(){
		fill(117, 95, 42);

		for (let i = 0; i < 7; i++){
			if (i < 4){
				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);

				endShape();

				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);

				endShape();

				beginShape(QUADS);

				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl * i);

				endShape();

				beginShape(QUADS);

				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
				vertex(this.pos.x * scl + scl, this.pos.y * scl + scl, getZ(this.pos.x, this.pos.y) + scl * i);

				endShape();
			} else if (i == 4){
				fill(34, 89, 16);

				for (let k = -2; k <= 2; k++){
					for (let l = -2; l <= 2; l++){
						if (k == 0 && l == 0){
							continue;
						}

						beginShape(QUADS);

						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

						endShape();
					}
				}

				for (let k = -2; k <= 2; k++){
						beginShape(QUADS);

						vertex(this.pos.x * scl + scl * k, this.pos.y * scl - scl * 2, getZ(this.pos.x, this.pos.y) + scl + scl * i);
						vertex(this.pos.x * scl + scl * k, this.pos.y * scl - scl * 2, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl - scl * 2, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl - scl * 2, getZ(this.pos.x, this.pos.y) + scl + scl * i);

						endShape();
				}

				for (let k = -2; k <= 2; k++){
						beginShape(QUADS);

						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * 3, getZ(this.pos.x, this.pos.y) + scl + scl * i);
						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * 3, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * 3, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * 3, getZ(this.pos.x, this.pos.y) + scl + scl * i);

						endShape();
				}

				for (let l = -2; l <= 2; l++){
					beginShape(QUADS);

					vertex(this.pos.x * scl - scl * 2, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl - scl * 2, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl - scl * 2, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl - scl * 2, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

					endShape();
				}

				for (let l = -2; l <= 2; l++){
					beginShape(QUADS);

					vertex(this.pos.x * scl + scl * 3, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl * 3, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * 3, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * 3, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

					endShape();
				}
			} else if (i == 5){
				fill(34, 89, 16);

				for (let k = -2; k <= 2; k++){
					for (let l = -2; l <= 2; l++){
						if (k > -2 && k < 2 && l > -2 && l < 2){
							continue;
						}

						beginShape(QUADS);

						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

						endShape();
					}
				}

				for (let k = -1; k <= 1; k++){
					beginShape(QUADS);

					vertex(this.pos.x * scl + scl * k, this.pos.y * scl - scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * k, this.pos.y * scl - scl, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl - scl, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl - scl, getZ(this.pos.x, this.pos.y) + scl + scl * i);

					endShape();
				}

				for (let k = -1; k <= 1; k++){
					beginShape(QUADS);

					vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * 2, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * 2, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * 2, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * 2, getZ(this.pos.x, this.pos.y) + scl + scl * i);

					endShape();
				}

				for (let l = -1; l <= 1; l++){
					beginShape(QUADS);

					vertex(this.pos.x * scl - scl, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl - scl, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl - scl, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl - scl, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

					endShape();
				}

				for (let l = -1; l <= 1; l++){
					beginShape(QUADS);

					vertex(this.pos.x * scl + scl * 2, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
					vertex(this.pos.x * scl + scl * 2, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * 2, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl + scl * i);
					vertex(this.pos.x * scl + scl * 2, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

					endShape();
				}
			} else if (i == 6){
				for (let k = -1; k <= 1; k++){
					for (let l = -1; l <= 1; l++){
						beginShape(QUADS);

						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);
						vertex(this.pos.x * scl + scl + scl * k, this.pos.y * scl + scl * l, getZ(this.pos.x, this.pos.y) + scl * i);

						endShape();
					}
				}
			}
		}
	}

}