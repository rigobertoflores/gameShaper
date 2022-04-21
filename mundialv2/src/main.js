
window.addEventListener('load', function () {

let resolution = 0;
	if (screen.width > 575){
		resolution_w = 800
		resolution_h = 600
	}else{
		resolution_w = 675
		resolution_h = 1100
	}
	var game = new Phaser.Game({
		width: resolution_w,
		height: resolution_h,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}