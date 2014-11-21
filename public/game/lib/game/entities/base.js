ig.module(
  'game.entities.base'
)
.requires(
  'impact.entity'
)
.defines(function () {
  EntityBase = ig.Entity.extend({
    init: function (x, y ,settings) {
      this.parent(x, y, settings);

      this.bounds = { 
        top: 0, 
        bottom: ig.system.height - this.size.y,
        left: 0,
        right: ig.system.width - this.size.x
      };

      this.center = {
        x: this.bounds.right / 2,
        y: this.bounds.bottom / 2
      };
    },

    getPosition: function () {
      return {
        x: this.pos.x,
        y: this.pos.y
      };
    },

    setPosition: function (x, y) {
      if (typeof x !== 'number' || typeof y !== 'number') {
        return;
      }
      this.pos.x = x;
      this.pos.y = y;
    },

    hide: function () {
      this.pos.x = this.bounds.left - this.size.x * 2;
      this.pos.y = this.center.y;
    },

    stop: function () {
      this.vel.x = this.vel.y = this.accel.x = this.accel.y = 0;
    },
    
    at: function () {
      return {
        isLeft: this.isLeft(),
        isRight: this.isRight(),
        isTop: this.isTop(),
        isBottom: this.isBottom()
      }
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
    }
  });
});
