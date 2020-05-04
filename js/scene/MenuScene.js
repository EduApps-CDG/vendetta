var MenuScene = function() {
  let background;
  
  this.create = function() {
    bg = new PIXI.NineSlicePlane(PIXI.loader.resources["img/gui/menu.png"].texture, 4, 4, 4, 4);
    bg.x = 25;
    bg.y = 25;
    bg.width = game.screen.width - 50;
    bg.height = game.screen.height - 50;
    game.stage.addChild(bg);
    
  }
  this.destroy = function() {}
}