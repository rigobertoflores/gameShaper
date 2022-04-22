
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// field
		const field = this.add.image(408, 741, "field");
		field.scaleX = 1.2;
		field.scaleY = 0.75;

		// stadium
		const stadium = this.add.image(406, 200, "stadium");
		stadium.scaleX = 1.7;
		stadium.scaleY = 2.1;

		// arrow
		const arrow = new PrefabArrow(this, 421, 758);
		this.add.existing(arrow);

		// ball
		const ball = new PrefabBall(this, 421, 798);
		this.add.existing(ball);

		// goalP
		const goalP = this.add.image(422, 375, "goalP");
		goalP.scaleX = 0.35;
		goalP.scaleY = 0.35;

		// arrow (prefab fields)
		arrow.directionC = false;

		this.field = field;
		this.arrow = arrow;
		this.ball = ball;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	field;
	/** @type {PrefabArrow} */
	arrow;
	/** @type {PrefabBall} */
	ball;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.ball.setInteractive();
		this.ball.on('pointerdown',()=>{
			this.ball.y+=5;
		});

	}
	update(){
		this.arrow.PrefabArrow();
		// this.ball.PrefabBall();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
