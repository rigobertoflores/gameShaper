
// You can write more code here

/* START OF COMPILED CODE */

class PrefabBall extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "ball", frame);

		this.scaleX = 1.5;
		this.scaleY = 1.5;

		/* START-USER-CTR-CODE */
		// Write your code here.
		
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	
		PrefabBall(){
			this.scene.physics.add.existing(this)
			this.scene.physics.world.setBounds(0,0,800,1080,true,true)
			this.body.gravity.y=30;
			this.body.collideWorldBounds=true;

		}
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
