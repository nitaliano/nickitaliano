ig.module(
	'game.entities.player'
)
.requires(
	'game.entities.base'
)
.defines(function(){

	EntityPlayer = EntityBase.extend({
		size: {x: 25, y: 55},
		offset: {x: 12, y: 4},
		
		maxVel: {x: 1000, y: 1200},
		friction: {x: 1200, y: 10},
		
		animSheet: new ig.AnimationSheet('media/mullet-man-sheet-small.png', 58, 60),	
		
		flip: false,
		accelGround: 1200,
		accelAir: 600,
		jump: 500,	
		
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			
			this.addAnim( 'idle', 1, [2] );
			this.addAnim( 'run', 0.07, [0, 1, 2, 3, 4, 5, 6, 7] );
			this.addAnim( 'jump', 1, [6] );

			ig.game.player = this;
		},
		
		
		update: function() {
			var accel = this.standing ? this.accelGround : this.accelAir;

			if( ig.input.state('left') ) {
				this.accel.x = -accel;
				this.flip = true;
			}
			else if( ig.input.state('right') ) {
				this.accel.x = accel;
				this.flip = false;
			}
			else {
				this.accel.x = 0;
			}

			if( this.standing && ig.input.pressed('jump') ) {
				this.vel.y = -this.jump;
			}

			if( this.vel.y < 0 ) {
				this.currentAnim = this.anims.jump;
			}
			else if( this.vel.x != 0 ) {
				this.currentAnim = this.anims.run;
			}
			else {
				this.currentAnim = this.anims.idle;
			}
			
			this.currentAnim.flip.x = this.flip;
			
			this.parent();
		}
	});
});