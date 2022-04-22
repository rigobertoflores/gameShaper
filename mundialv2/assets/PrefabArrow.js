
// You can write more code here

/* START OF COMPILED CODE */

class PrefabArrow extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "arrow", frame);

		this.scaleX = 2;
		this.scaleY = 2.3;
		this.angle = -90;
		this.setOrigin(0, 0.5);
		this.tintFill = true;
		this.tintTopLeft = 11914713;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */

		// custom definition props
		this.minDegC = -135;
		this.directionC = false;
	}

	/** @type {number} */
	maxDegC = -45;

	/* START-USER-CODE */

	PrefabArrow(){
		const speedC=2;

		// directionC
		//false-left true-right 
		if(this.directionC){
			if(this.angle > this.maxDegC){	
				this.directionC=false;
				this.angle -= speedC;
			}else{
				this.angle += speedC;
			}
		}else if(!this.directionC){
			if(this.angle < this.minDegC){
				this.directionC=true;
				this.angle += speedC;

			}else{
				this.angle -= speedC;

			}
		} 
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
