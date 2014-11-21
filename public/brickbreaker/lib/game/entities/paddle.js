ig.module(
  'game.entities.paddle'
)
.requires(
  'game.entities.base'
)
.defines(function () {
  EntityPaddle = EntityBase.extend({

    name: 'paddle',
    animSheet: new ig.AnimationSheet('media/paddle.png', 58, 16),
    size: { x: 58, y: 16 },
    maxVel: { x: 100, y: 0 },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,

    init: function (x, y ,settings) {
      this.parent(x, y, settings);
      this.initX = this.center.x + this.size.x / 2;
      this.initY = this.bounds.bottom - this.size.y;
      this.setPosition();
      ig.game.paddle = this;
    },

    update: function () {
      this.move(ig.input.state('left') ? 'left' : ig.input.state('right') ? 'right' : 'stop');
      this.parent();
    },

    handleMovementTrace: function (res) {
      if (res.collision.x) {
        this.stop();
      }
      this.parent(res);
    },

    move: function (state) {
      if (state === 'left') {
        this.vel.x = -this.maxVel.x;
      } else if (state === 'right') {
        this.vel.x = this.maxVel.x;
      } else {
        this.stop();
      }
    }
  });
});
