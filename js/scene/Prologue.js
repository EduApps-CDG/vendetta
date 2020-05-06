function Prologue() {
  let dialog;
  let id = 0;
  this.create = function() {
    dialog = new Dialog(History.main[id]);
  }
  
  this.keyDown = function(e) {
    if (get_gamepad[0].a_pressed) {
      id++;
      if (id > 1) {
        dialog.close();
        Transition(1, new ProloguePart2());
      } else {
        dialog.bitmap.text = History.main[id];
      }
    }
  }
  
  this.destroy = function() {}
}