
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

		// trabajo_estadiov5
		const trabajo_estadiov5 = this.add.image(422, 338, "trabajo estadiov5");

		// trabajo_estadiov2
		const trabajo_estadiov2 = this.add.image(341, 567, "trabajo estadiov2");
		trabajo_estadiov2.visible = false;

		this.trabajo_estadiov5 = trabajo_estadiov5;
		this.trabajo_estadiov2 = trabajo_estadiov2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	trabajo_estadiov5;
	/** @type {Phaser.GameObjects.Image} */
	trabajo_estadiov2;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}
	update(){
		let resolution = 0;
	if (screen.width < 575){
    this.trabajo_estadiov5.visible=false;
	 this.trabajo_estadiov2.visible=true;
	console.log("saaa1111111111aaaa")

	}	
	else{
    this.trabajo_estadiov5.visible=true;
    this.trabajo_estadiov2.visible=false;
		console.log("saaaaaaa")
	}





	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
