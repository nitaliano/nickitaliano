ig.module(
  'game.entities.score'
)
.requires(
  'impact.font',
  'impact.entity'
)
.defines(function () {
  EntityScore = ig.Entity.extend({
    
    name: 'score',
    font: new ig.Font('media/04b03.font.png'),
    label: 'Score: ',
    offsetTop: 6,
    offsetRight: 40,
    marginSize: 4,
    score: 0,

    init: function (x, y ,settings) {
      this.parent(x, y, settings);
      this.viewportWidth = ig.system.width - this.offsetRight;
      ig.game.score = this;
    },

    draw: function () {
      this.parent();
      this.font.draw(this.label + this.score, this.getRightOffset(), this.offsetTop);
    },

    getRightOffset: function () {
      return this.viewportWidth - this.marginRight();
    },

    marginRight: function () {
      return (this.score.toString().length - 1) * this.marginSize;
    },

    change: function (score) {
      if (typeof score !== 'number') {
        return;
      }
      this.score += score;
    }
  });
});