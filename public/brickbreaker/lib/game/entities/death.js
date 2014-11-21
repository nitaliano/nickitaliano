ig.module(
  'game.entities.death'
)
.requires(
  'impact.entity'
)
.defines(function () {
  EntityDeath = ig.Entity.extend({

    name: 'death',
    animSheet: new ig.AnimationSheet('media/ball.png', 12, 12),
    size: { x: 12, y: 12 },
    type: ig.Entity.TYPE.NONE,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.FIXED,

    init: function (x, y ,settings) {
      this.parent(x, y, settings);
      this.addAnim('default', 1, [0]);
      this.currentAnim = this.anims.default;
    },

    collideWith: function (obj) {
      if (obj) {
        if (obj.isRespawn) {
          obj.respawn(this);
        } else {
          obj.kill();
        }
      }
    }
  });
});