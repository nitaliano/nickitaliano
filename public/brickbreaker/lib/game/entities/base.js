ig.module(
  'game.entities.base'
)
.requires(
  'impact.entity'
)
.defines(function () {
  EntityBase = ig.Entity.extend({

    health: 0,
    initX: 0,
    initY: 0,
    isRespawn: false,
    isRandomVxOnRespawn: false,
    isRandomVyOnRespawn: false,

    init: function (x, y ,settings) {
      this.parent(x, y, settings);

      this.bounds = { 
        top: 6 * 16, 
        bottom: ig.system.height - 16,
        left: 16,
        right: ig.system.width - this.size.x - 16 
      };

      this.center = {
        x: this.bounds.right / 2,
        y: this.bounds.bottom / 2
      };

      this.addAnim('default', 1, [0]);
    },

    generateRandomDirection: function () {
      return (new Date()).getTime() % 2 === 0 ? 1 : -1;
    },

    setVelocity: function (x, y) {
      if (typeof x === 'boolean' && x === true) {
        x = this.generateRandomDirection() * this.maxVel.x;
      }

      if (typeof y === 'boolean' && y === true) {
        y = this.generateRandomDirection() * this.maxVel.y;
      }

      this.vel.x = x ? x : this.maxVel.x;
      this.vel.y = y ? y : this.maxVel.y;
    },

    setPosition: function (x, y) {
      this.pos.x = x ? x : this.initX;
      this.pos.y = y ? y : this.initY;
    },

    setAccelX: function () {
      this.accel.x = this.vel.x / ig.system.tick;
    },

    setAccelY: function () {
      this.accel.y = this.vel.y / ig.system.tick;
    },

    stop: function () {
      this.vel.x = this.vel.y = this.accel.x = this.accel.y = 0;
    },

    isTop: function () {
      return this.pos.y <= this.bounds.top;
    },

    isBottom: function () {
      return this.pos.y >= this.bounds.bottom;
    },

    isLeft: function () {
      return this.pos.x <= this.bounds.left;
    },

    isRight: function () {
      return this.pos.x >= this.bounds.right;
    },

    respawn: function (from) {
      this.stop();
      this.receiveDamage(1, from);
      this.updateLife(this.health);

      if (this.isRespawn && this.health > 0) {
        this.setPosition();
        this.setVelocity(this.isRandomVxOnRespawn, this.isRandomVyOnRespawn);
      }
    },

    updateLife: function (numOfLives) {
      ig.game.life.change(numOfLives);
    }
  });
});