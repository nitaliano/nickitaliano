ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.debug.debug',

	'plugins.impact-splash-loader',

	'game.entities.player',
	'game.levels.test'
)
.defines(function(){

TimesheetGame = ig.Game.extend({
	clearColor: "#fc00fc",
	gravity: 800,

	init: function() {
		// Bind keys
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'jump');
		this.loadLevel(LevelTest);
	}
});

ig.main('#canvas', TimesheetGame, 60, 480, 320, 1, ig.ImpactSplashLoader);
});
