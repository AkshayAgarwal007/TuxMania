Mania.Preloader = function(game){
	Mania.GAME_WIDTH = 1366;
	Mania.GAME_HEIGHT = 768; 
};
Mania.Preloader.prototype = {
	preload: function(){

		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Mania.GAME_WIDTH-311)/2, (Mania.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
	
        this.load.image('layer1', 'assets/layer1.png');
    	this.load.image('layer2', 'assets/layer2.png');
    	this.load.image('layer4', 'assets/layer4.png');
        this.load.image('layerr', 'assets/layerr.png');
    	this.load.image('tree', 'assets/tree.png');
    	this.load.image('resume' , 'assets/resume.png');
        this.load.image('logo', 'assets/logo.png');
    	this.load.spritesheet("enemy", "assets/penguinn.png",199,211);
    	this.load.audio('sound2', 'sounds/back_music1.ogg');
    	this.load.image('settings','assets/settings.png');
    	this.load.image('info' , 'assets/info.png');
    	this.load.image('menu','assets/menu.png');
    	this.load.image('mute' , 'assets/mute.png');
    	this.load.image('unmute' , 'assets/unmute.png');
    	this.load.image('gems' , 'assets/gems.png');
    	this.load.image('high_score' , 'assets/high_score.png');    
		this.load.image('unlock','assets/unlock.png');
    	this.load.image('right_btn' , 'assets/right_btn.png');
    	this.load.image('unmute' , 'assets/unmute.png');
    	this.load.image('close_btn' , 'assets/close_btn.png');
    	this.load.image('left_btn' , 'assets/left_btn.png');
        this.load.image('level1', 'assets/level_btn.png');
        this.load.image('resume' , 'assets/resume.png');
        this.load.image('lwindow', 'assets/window.png');
        this.load.image('levels','assets/levels.png');
		this.load.image('main_menu','assets/main_menu.png');
        this.load.image('player', 'assets/character.png');
        this.load.image('counter', 'assets/counter.png');
        this.load.image('replay', 'assets/replay.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('heart', 'assets/heart.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('level_icon', 'assets/level_icon.png');
        this.load.image('dialog', 'assets/dialog_cloud.png');
        this.load.spritesheet('blast','assets/explosion.png',64,64);
        this.load.spritesheet('enem', 'assets/plant.png', 427,496);
        this.load.audio('sound1', 'sounds/swoosh.mp3');
		this.load.audio('sound3', 'sounds/choice.mp3');
		this.load.audio('sound4', 'sounds/disabled.wav');
		this.load.audio('sound5', 'sounds/back_music2.wav');
        
        
	},
	create: function(){
		this.state.start('MainMenu');
	}
};