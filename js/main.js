let game,actual_scene = 1;
let container
var gamepad;

window.onload = function() {
  $.when(
    $.getScript("js/Loader.js"),
    $.getScript("js/core/Gamepad.js"),
    $.getScript("js/core/Save.js"),
    $.getScript("js/core/Transition.js"),
    $.getScript("js/core/Dialog.js"),
    
    $.getScript("js/scene/MainMenuScene.js"),
    $.getScript("js/scene/MenuScene.js"),
    $.getScript("js/scene/Prologue.js"),
    
    $.getScript("js/game/History.js"),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    main();
  });
}

function main() {
  //initialize game
  game = new PIXI.Application({
    width: 800,
    height: 420,
    antialias: true
  });
  
  game.view.style.display = "block";
  game.view.style.height = "100%";
  game.renderer.backgroundColor = 0xFFFFFF;
  
  document.getElementById("wrapper").appendChild(game.view);
  
  gamepad = new GamePad();
  //load all resources
  Loader.preload();
}

function presetup() {
  container = new PIXI.Container();
  let logo = new PIXI.Sprite(PIXI.loader.resources["img/logo.png"].texture);
  
  logo.x = -logo.width / 2;
  logo.y = -logo.height / 2;
  container.x = game.screen.width / 2;
  container.y = game.screen.height / 2;
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;
  
  game.stage.addChild(container);
  container.addChild(logo);
  Loader.load();
}

function setup() {
  Transition(1, new MainMenuScene());
}

function startScene(scene) {
  game.renderer.backgroundColor = 0x000000;
  scene.create();
  actual_scene = scene;
  window.addEventListener('keydown',actual_scene.keyDown, false);
  window.addEventListener('keyup',actual_scene.keyUp, false);
}

function killScene() {
  if (actual_scene == 1) {
    container.destroy();
    container = null;
    Loader.text.destroy();
  } else if (actual_scene == undefined) {
    
  } else {
    actual_scene.destroy();
    window.removeEventListener('keydown', actual_scene.keyDown, false);
    window.removeEventListener('keyup', actual_scene.keyDown, false);
    for (var i = game.stage.children.length - 1; i >= 0; i--) {
      game.stage.removeChild(game.stage.children[i]);
    }
    actual_scene = undefined;
  }
}