ig.module(
  'game.entities.brick'
)
.requires(
  'game.entities.base'
)
.defines(function () {
  EntityBrick = EntityBase.extend({

    name: 'brick',
    animSheet: new ig.AnimationSheet('media/brick.png', 32, 16),
    size: { x: 32, y: 16 },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,

    collideWith: function () {
      this.kill();
    }
  });
});
