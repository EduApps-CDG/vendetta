function GamePad() {
  let get_gamepad = [
    {
      connected: false,
      model: "N/a",
      has_connection: false,
      
      has_a: false,
      has_b: false,
      has_x: false,
      has_y: false,
      has_lb: false,
      has_lt: false,
      has_ls: false,
      has_rb: false,
      has_rt: false,
      has_rs: false,
      has_dpad: false,
      has_start: false,
      has_select: false,
      
      a_pressed: false,
      b_pressed: false,
      x_pressed: false,
      y_pressed: false,
      
      lb_pressed: false,
      lt_pressed: false,
      lt_pressure: 0,
      
      rb_pressed: false,
      rt_pressed: false,
      rt_pressure: 0,
      
      dpad_up_pressed: false,
      dpad_down_pressed: false,
      dpad_left_pressed: false,
      dpad_right_pressed: false,
      
      ls_pressed: false,
      ls_up_pressed: false,
      ls_down_pressed: false,
      ls_left_pressed: false,
      ls_right_pressed: false,
      
      rs_pressed: false,
      rs_up_pressed: false,
      rs_down_pressed: false,
      rs_left_pressed: false,
      rs_right_pressed: false,
      
      start_pressed: false,
      select_pressed: false,
      center_pressed: false
    },
    {},
    {},
    {}
  ]
  
  window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index, e.gamepad.id,
      e.gamepad.buttons.length, e.gamepad.axes.length);
      
    for (var i = 0;!get_gamepad[i].connected; i++) {
      if (i > 3) {
        Notify("No space left for gamepads", {
          type: "warn",
          hint: "Hold {{center_button}} for Gamepad Manager.",
          player: i,
          icon: "img/gui/gamepad_block.png",
          oncenterhold: function() {
            new GamepadManager();
          }
        });
      } else {
        get_gamepad[e.gamepad.index].connected = true;
        gamepad.has_connection = true;
        get_gamepad[e.gamepad.index].model = e.gamepad.id;
      }
    }
  });
  
  window.addEventListener("gamepaddisconnected", function(e) {
    get_gamepad[e.gamepad.index].connected = false;
    
    window.setTimeout(function() {
      if (!get_gamepad[e.gamepad.index].connected) {
        get_gamepad[e.gamepad.index].has_connection = false;
        get_gamepad[e.gamepad.index].model = "N/a";
        
        Notify("Connection lost", {
          type: "info",
          player: e.gamepad.index,
          icon: "img/gui/gamepad_" + e.gamepad.index + ".png"
        });
      }
    },300000);
  });
}