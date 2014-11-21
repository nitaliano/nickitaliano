ig.module( 'game.levels.one' )
.requires( 'impact.image','game.entities.brick','game.entities.paddle','game.entities.ball','game.entities.life','game.entities.death','game.entities.score' )
.defines(function(){
LevelOne=/*JSON[*/{"entities":[{"type":"EntityBrick","x":80,"y":112},{"type":"EntityBrick","x":176,"y":112},{"type":"EntityBrick","x":48,"y":112},{"type":"EntityBrick","x":272,"y":112},{"type":"EntityBrick","x":240,"y":96},{"type":"EntityBrick","x":208,"y":112},{"type":"EntityBrick","x":48,"y":96},{"type":"EntityBrick","x":208,"y":128},{"type":"EntityBrick","x":48,"y":128},{"type":"EntityBrick","x":80,"y":96},{"type":"EntityBrick","x":80,"y":80},{"type":"EntityBrick","x":208,"y":144},{"type":"EntityBrick","x":240,"y":64},{"type":"EntityBrick","x":240,"y":48},{"type":"EntityBrick","x":240,"y":128},{"type":"EntityBrick","x":240,"y":80},{"type":"EntityBrick","x":112,"y":96},{"type":"EntityBrick","x":208,"y":48},{"type":"EntityBrick","x":208,"y":64},{"type":"EntityBrick","x":176,"y":80},{"type":"EntityBrick","x":272,"y":144},{"type":"EntityBrick","x":144,"y":80},{"type":"EntityPaddle","x":675,"y":555},{"type":"EntityBrick","x":112,"y":80},{"type":"EntityBrick","x":48,"y":48},{"type":"EntityBall","x":675,"y":315.5},{"type":"EntityBrick","x":80,"y":144},{"type":"EntityBrick","x":80,"y":128},{"type":"EntityBrick","x":112,"y":128},{"type":"EntityBrick","x":176,"y":144},{"type":"EntityBrick","x":144,"y":144},{"type":"EntityBrick","x":208,"y":96},{"type":"EntityBrick","x":112,"y":144},{"type":"EntityBrick","x":176,"y":64},{"type":"EntityBrick","x":208,"y":80},{"type":"EntityBrick","x":144,"y":96},{"type":"EntityBrick","x":48,"y":144},{"type":"EntityBrick","x":176,"y":48},{"type":"EntityBrick","x":240,"y":144},{"type":"EntityBrick","x":176,"y":96},{"type":"EntityBrick","x":144,"y":112},{"type":"EntityBrick","x":176,"y":128},{"type":"EntityBrick","x":144,"y":128},{"type":"EntityBrick","x":112,"y":112},{"type":"EntityLife","x":20,"y":4},{"type":"EntityDeath","x":116,"y":488},{"type":"EntityDeath","x":212,"y":488},{"type":"EntityDeath","x":196,"y":488},{"type":"EntityDeath","x":164,"y":488},{"type":"EntityDeath","x":180,"y":488},{"type":"EntityDeath","x":276,"y":488},{"type":"EntityDeath","x":260,"y":488},{"type":"EntityDeath","x":244,"y":488},{"type":"EntityDeath","x":228,"y":488},{"type":"EntityDeath","x":292,"y":488},{"type":"EntityDeath","x":132,"y":488},{"type":"EntityDeath","x":20,"y":488},{"type":"EntityDeath","x":100,"y":488},{"type":"EntityDeath","x":148,"y":488},{"type":"EntityDeath","x":68,"y":488},{"type":"EntityDeath","x":52,"y":488},{"type":"EntityDeath","x":36,"y":488},{"type":"EntityDeath","x":84,"y":488},{"type":"EntityScore","x":276,"y":0},{"type":"EntityDeath","x":328,"y":488},{"type":"EntityBrick","x":240,"y":112},{"type":"EntityBrick","x":272,"y":96},{"type":"EntityBrick","x":272,"y":80},{"type":"EntityBrick","x":272,"y":64},{"type":"EntityBrick","x":272,"y":128},{"type":"EntityBrick","x":272,"y":48},{"type":"EntityBrick","x":80,"y":48},{"type":"EntityBrick","x":48,"y":64},{"type":"EntityBrick","x":80,"y":64},{"type":"EntityBrick","x":144,"y":64},{"type":"EntityBrick","x":48,"y":80},{"type":"EntityBrick","x":112,"y":48},{"type":"EntityBrick","x":144,"y":48},{"type":"EntityBrick","x":112,"y":64},{"type":"EntityDeath","x":312,"y":488}],"layer":[{"name":"background","width":22,"height":30,"linkWithCollision":true,"visible":1,"tilesetName":"/media/bg-tile.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]]},{"name":"collision","width":22,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelOneResources=[new ig.Image('/media/bg-tile.png')];
});