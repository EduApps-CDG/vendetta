var MenuScene = function() {
  let bg,select;
  let selection = 0;
  
  let saveHP = parseInt(Save.getValue("Player.hp"));
  let saveMHP = parseInt(Save.getValue("Player.hpMax"));
  let saveMP = parseInt(Save.getValue("Player.mp"));
  let saveMMP = parseInt(Save.getValue("Player.mpMax"));
  let saveLVL = parseInt(Save.getValue("Player.level"));
  let saveMAP = parseInt(Save.getValue("Location.name"));
  
  this.create = function() {
    bg = new PIXI.NineSlicePlane(PIXI.loader.resources["img/gui/menu.png"].texture, 4, 4, 4, 4);
    bg.x = 25;
    bg.y = 25;
    bg.width = game.screen.width - 50;
    bg.height = game.screen.height - 50;
    
    
    const state1 = new PIXI.BitmapText('New Game', {
      font: 'BetterPixels',
      align: 'center',
    });
    state1.anchor.set(0.5);
    state1.position.x = game.screen.width / 2;
    state1.position.y = 50;
    
    const state2 = new PIXI.BitmapText('Load Game', {
      font: 'BetterPixels',
      align: 'center',
    });
    state2.anchor.set(0.5);
    state2.position.x = game.screen.width / 2;
    state2.position.y = 100;
    
    const hpinfo = new PIXI.BitmapText('HP: ' + saveHP + '/' + saveMHP, {
      font: 'BetterPixels',
    });
    hpinfo.position.x = 100;
    hpinfo.position.y = game.screen.height - 75;
    
    const mpinfo = new PIXI.BitmapText('MP: ' + saveMP + '/' + saveMMP, {
      font: 'BetterPixels',
    });
    mpinfo.position.x = 100;
    mpinfo.position.y = game.screen.height - 50;
    
    const lvlinfo = new PIXI.BitmapText('LVL: ' + saveLVL, {
      font: 'BetterPixels',
    });
    lvlinfo.position.x = game.screen.width - 100;
    lvlinfo.position.y = game.screen.height - 63;
    
    const mapinfo = new PIXI.BitmapText('' + saveMAP, {
      font: 'BetterPixels',
      align: 'center',
    });
    mapinfo.anchor.set(0.5);
    mapinfo.position.x = game.screen.width / 2;
    mapinfo.position.y = game.screen.height - 63;
    
    select = new PIXI.Sprite(PIXI.loader.resources["img/gui/selection.png"].texture);
    select.position.x = 345;
    select.position.y = 45;
    
    game.stage.addChild(bg,state1,state2,hpinfo,mpinfo,lvlinfo,mapinfo,select);
    
  }
  
  this.keyDown = function(e) {
    if (get_gamepad[0].ls_down_pressed) {
      if (selection == 0) {
        select.position.y = 95;
        
        selection = 1;
      } else {
        select.position.y = 45;
        
        selection = 0;
      }
    } else if (get_gamepad[0].ls_up_pressed) {
      if (selection == 0) {
        select.position.y = 95;
    
        selection = 1;
      } else {
        select.position.y = 45;
    
        selection = 0;
      }
    } else if (get_gamepad[0].dpad_down_pressed) {
      if (selection == 0) {
        select.position.y = 95;
    
        selection = 1;
      } else {
        select.position.y = 45;
    
        selection = 0;
      }
    } else if (get_gamepad[0].dpad_up_pressed) {
      if (selection == 0) {
        select.position.y = 95;
    
        selection = 1;
      } else {
        select.position.y = 45;
    
        selection = 0;
      }
    } else if (get_gamepad[0].start_pressed) {
      if (selection == 0) {
        new Transition(1,new Prologue());
      } else {
        
      }
    }
  }
  
  this.destroy = function() {}
}