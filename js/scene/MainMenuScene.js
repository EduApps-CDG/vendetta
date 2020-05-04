function MainMenuScene() {
  let selection = 0;
  let background;
  let title;
  let pressStart;
  let pressStart_on = false;
  let start_speed = 500;
  let start_just_pressed = false;
  
  this.create = function() {
   // var texture2 = new PIXI.Texture(landscapeTexture, new PIXI.Rectangle(0, 100, 960, 50));
    
    // new sprite
    background = new PIXI.Sprite(PIXI.loader.resources["img/bg/menu.png"].texture);
    pressStart = new PIXI.Sprite(PIXI.loader.resources["img/gui/press-start.png"].texture);
    title = new PIXI.Sprite(PIXI.loader.resources["img/gui/title.candidate1.png"].texture);
    
    pressStart.animation = {
      looper: window.setInterval(function() {
        if (pressStart_on) {
          pressStart.alpha = 0;
          pressStart_on = false;
        } else {
          pressStart.alpha = 1;
          pressStart_on = true;
        }
        if (start_just_pressed) {
          start_speed = 250;
        }
      },start_speed),
      loop:true
    }
    
    background.anchor.x = 0;
    background.anchor.y = 0;
    
    background.position.x = 0;
    background.position.y = 0;
    background.height = 420;
    
    title.height /= 2;
    title.width /= 2;
    title.position.x = (800 / 2) - (title.width / 2);
    
    pressStart.position.x = (800 / 2) - (pressStart.width / 2);
    pressStart.position.y = 250;
    
    game.stage.addChild(background,pressStart,title);
    
    if (gamepad.getGamePad(0).start_pressed) {
      
    }
  }
  
  this.destroy = function() {
    
  }
  
  this.keyDown(e) {
    if(e.start_pressed) {
      start_just_pressed = true;
      alert("yes");
    }
  }
}