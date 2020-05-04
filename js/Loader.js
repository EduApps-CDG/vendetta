var Loader = {
  text: undefined,
  
  preload: function() {
    PIXI.loader.add([
          "img/logo.png"
        ]).on("progress", Loader.progress).load(presetup);
  },
  
  load: function() {
    Loader.text = new PIXI.Text(0 + "%", { font: '8px monospace', fill: 'black', align: 'left' });
    Loader.text.position.set((game.screen.width / 2) - (((Loader.text.text.length + 2) * 8) / 2), 420 - 32);
    game.stage.addChild(Loader.text);
    
    PIXI.loader.add([
          "img/bg/menu.png",
          "img/gui/press-start.png",
          "img/gui/title.candidate1.png",
          "img/gui/title.candidate2.png",
          "img/gui/title.candidate3.png",
          "img/gui/title.candidate4.png",
          "img/gui/title.candidate5.png",
          "img/gui/menu.png",
          "img/rpgmaker.png"
        ]).on("progress", Loader.progress).load(setup);
  },
  
  progress: function(loader,resource) {
    if (Loader.text == undefined) {
    } else {
      Loader.text.text = loader.progress + "%";
      Loader.text.position.set((game.screen.width / 2) - (((Loader.text.text.length + 2) * 8) / 2), 420 - 32);
    }
  },
}