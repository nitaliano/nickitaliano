ig.module(
  'game.entities.life'
)
.requires(
  'game.entities.base'
)
.defines(function () {
  EntityLife = EntityBase.extend({

    name: 'life',
    animSheet: new ig.AnimationSheet('media/lives.png', 27, 8),
    size: { x: 27, y: 8 },

    init: function (x, y ,settings) {
      this.parent(x, y, settings);

      this.numOfLives = {
        0: null,
        1: 'one',
        2: 'half',
        3: 'full'
      };

      this.addAnim('full', 1, [0]);
      this.addAnim('half', 1, [1]);
      this.addAnim('one', 1, [2]);

      ig.game.life = this;
    },

    change: function (numOfLives) {
      if (numOfLives < 0 || numOfLives > 3) {
        numOfLives = 0;
      }
      this.currentAnim = this.anims[this.numOfLives[numOfLives]];
    }
  });
});