ig.module( 
	'game.main' 
)
.requires(
	'impact.debug.debug',
	
	'impact.game',
	'impact.font',

	'game.levels.title',
	'game.levels.one',
	'game.levels.two'
)
.defines(function(){

var CURRENT_LEVEL = 0;

var LEVELS = {
	0: LevelTitle,
	1: LevelOne,
	2: LevelTwo
};

BrickBreakerTitle = ig.Game.extend({
	clearColor: '#000000',
  font: new ig.Font('media/04b03_black.font.png'),
  label: 'Press X to play!',

	init: function () {
		ig.input.bind(ig.KEY.X, 'start');
		this.loadLevel(LevelTitle);
		CURRENT_LEVEL++;
	},

	draw: function () {
		this.parent();
		this.font.draw(this.label, ig.system.width / 2, ig.system.height / 2, ig.Font.ALIGN.CENTER);
	},

	update: function () {
		if (ig.input.pressed('start')) {
			ig.system.setGame(BrickBreakerGame);
			return;
		}
		this.parent();
	}
});

BrickBreakerGame = ig.Game.extend({	
	clearColor: '#000000',
	gravity: 0,
	offsetLeft: 16,
	
	init: function() {
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
    ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
    this.loadLevel(LevelOne);
    this.screen.x = this.offsetLeft;
	}
});

ig.main('#canvas', BrickBreakerTitle, 60, 320, 480, 1);
});
