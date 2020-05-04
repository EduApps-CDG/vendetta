function Transition(time,scene) {
  var screenFadeContainer = new PIXI.Container();
  screenFadeContainer.scale.x = screenFadeContainer.scale.y = 1;
  game.stage.addChild(screenFadeContainer);
  var fullSceenCover = new rectangle(0, 0, 800, 420, 0x000000, 0xFFFFFF, 0 );
  var t = time / 2;
  fullSceenCover.alpha = 0.00;
  screenFadeContainer.addChild(fullSceenCover);
  addOne();
  /*while (fullSceenCover.alpha < 1) {
    (function(a) {
    })(fullSceenCover.alpha += 0.01);
  }*/
  function addOne() {
    setTimeout(function() {
      fullSceenCover.alpha += 0.01;
      if (fullSceenCover.alpha < 1) {
        addOne();
      } else {
        killScene();
        removeOne();
        startScene(scene);
      }
    }, t);
  }
  
  function removeOne() {
    setTimeout(function() {
      fullSceenCover.alpha -= 0.01;
      if (fullSceenCover.alpha != 0) {
        removeOne();
      }
    }, t);
  }
  
  function rectangle( x, y, width, height, backgroundColor, borderColor, borderWidth ) {
    var box = new PIXI.Graphics();
    box.beginFill(backgroundColor);
    box.lineStyle(borderWidth , borderColor);
    box.drawRect(0, 0, width - borderWidth, height - borderWidth);
    box.endFill();
    box.position.x = x + borderWidth/2;
    box.position.y = y + borderWidth/2;
    return box;
  };
}