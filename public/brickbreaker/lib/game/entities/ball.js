ig.module(
  'game.entities.ball'
)
.requires(
  'game.entities.base'
)
.defines(function () {
  EntityBall = EntityBase.extend({

    name: 'ball',
    health: 3,
    isRespawn: true,
    isRandomVxOnRespawn: true,
    animSheet: new ig.AnimationSheet('media/ball.png', 12, 12),
    size: { x: 12, y: 12 },
    radius: 6,
    maxVel: { x: 100, y: 100 },
    friction: { x: 0.50, y: 0.50 },
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.PASSIVE,

    init: function (x, y ,settings) {
      this.parent(x, y, settings);
      this.initX = this.center.x + this.radius;
      this.initY = 2 * this.size.y + this.center.y + this.radius;
      this.setPosition();
      this.setVelocity(this.isRandomVxOnRespawn, this.isRandomVyOnRespawn);
      ig.game.ball = this;
    },

    handleMovementTrace: function (res) {
      if (res.collision.x) {
        this.vel.x = -this.vel.x;
        this.vel.x *= this.friction.x;
        this.setAccelX();
      } else if (res.collision.y) {
        this.vel.y = -this.vel.y;
        this.vel.y *= this.friction.y;
        this.setAccelY()
      }

      this.parent(res);
    },

    respawn: function (from) {
      ig.game.paddle.setPosition();
      this.parent(from);
    },

    getNewCollideVel: function (pos, otherPos, otherSize, axis) {
      var v;

      if (axis === 'x') {
        v = this.maxVel.x;
      } else if (axis === 'y') {
        v = this.maxVel.y;
      } else {
        return 0;
      }

      return pos + this.radius > (otherPos + otherSize / 2) ? v : -v;
    },

    getNewCollideDirection: function (pos, otherPos, otherSize) {
      return pos < otherPos + otherSize ? -1 : 1;
    },

    collideWith: function (obj, axis) {
      if (obj.name === 'death') {
        return;
      } else if (obj.name === 'brick') {
        ig.game.score.change(10);
      }

      if (axis === 'x') {
        this.vel.y = this.getNewCollideVel(this.pos.y, obj.pos.y, obj.size.y, 'y');
        this.vel.x = this.maxVel.x * this.getNewCollideDirection(this.pos.x, obj.pos.x, obj.size.x);
      } else if (axis === 'y') {
        this.vel.x = this.getNewCollideVel(this.pos.x, obj.pos.x, obj.size.x, 'x');
        this.vel.y = this.maxVel.y * this.getNewCollideDirection(this.pos.y, obj.pos.y, obj.size.y);
      }

      this.vel.x *= this.friction.x;
      this.vel.y *= this.friction.y;

      this.setAccelX();
      this.setAccelY();
    }
  });
});