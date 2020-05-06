function Dialog(text, image) {
  let img = undefined;
  let bg = new PIXI.NineSlicePlane(PIXI.loader.resources["img/gui/menu.png"].texture, 4, 4, 4, 4);
  let txt = new PIXI.BitmapText(text, {
    font: 'BetterPixels',
  });
  
  this.position = {
    width: game.screen.width - 2,
    height: 100,
    x: 1,
    y: (game.screen.height - 100) - 1
  }
  
  bg.x = this.position.x;
  bg.y = this.position.y;
  bg.width = this.position.width;
  bg.height = this.position.height;
  if (image == undefined) {
    txt.position.x = this.position.x + 1;
  } else {
    txt.position.x = this.position.x + 51;
    img = new PIXI.Sprite(PIXI.loader.resources[image].texture);
    img.position.x = this.position.x + 1;
    img.position.y = this.position.y + 1;
    img.width = this.position.width - 2;
    img.height = this.position.height - 2;
  }
  txt.position.y = this.position.y + 1;
 // txt.width = this.position.width;
 // txt.height = this.position.height;


  game.stage.addChild(bg,txt);
  if (img != undefined) {
    game.stage.addChild(img);
  }
  
  this.background = bg;
  this.bitmap = txt;
  this.close = function() {
    txt.visible = false;
    bg.visible = false;
    img.visible = false;
  }
}