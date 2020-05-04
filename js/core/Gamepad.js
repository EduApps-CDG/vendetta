function GamePad() {
  this.keys = {
    A: 0x01,
    B: 0x02,
    X: 0x03,
    Y: 0x04,
    
    LB: 0x05,
    LT: 0x06,
    RB: 0x07,
    RT: 0x08,
    LS: 0x09,
    RS: 0x0A,
    
    DPAD_UP: 0x0B,
    DPAD_DOWN: 0x0C,
    DPAD_LEFT: 0x0D,
    DPAD_RIGHT: 0x0E,
    
    LS_UP: 0x0F,
    LS_DOWN: 0x10,
    LS_LEFT: 0x11,
    LS_RIGHT: 0x12,
    LS_CENTER: 0x13,
    
    START: 0x14,
    SELECT: 0x15
  };
  let k = 0x00;
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
  ];
  let event = new CustomEvent('e-gamepadevent', {
    a_pressed: get_gamepad[0].a_pressed,
    b_pressed: get_gamepad[0].b_pressed,
    x_pressed: get_gamepad[0].x_pressed,
    y_pressed: get_gamepad[0].y_pressed,
    
    lb_pressed: get_gamepad[0].lb_pressed,
    lt_pressed: get_gamepad[0].lt_pressed,
    ls_pressed: get_gamepad[0].ls_pressed,
    rb_pressed: get_gamepad[0].lb_pressed,
    rt_pressed: get_gamepad[0].lt_pressed,
    rs_pressed: get_gamepad[0].ls_pressed,
    
    start_pressed: get_gamepad[0].start_pressed,
    select_pressed: get_gamepad[0].select_pressed,
    
    ls_up_pressed: get_gamepad[0].ls_up_pressed,
    ls_down_pressed: get_gamepad[0].ls_down_pressed,
    ls_left_pressed: get_gamepad[0].ls_left_pressed,
    ls_right_pressed: get_gamepad[0].ls_right_pressed,
    
    rs_up_pressed: get_gamepad[0].rs_up_pressed,
    rs_down_pressed: get_gamepad[0].rs_down_pressed,
    rs_left_pressed: get_gamepad[0].rs_left_pressed,
    rs_right_pressed: get_gamepad[0].rs_right_pressed,
  });
  
  window.addEventListener('e-gamepadevent', function (e) {
  }, false);
  
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
  
  window.addEventListener("keydown",function(e) {
    if (!get_gamepad[0].connected) {
      get_gamepad[0].model = "Keyboard";
      get_gamepad[0].connected = true;
      get_gamepad[0].has_connection = true;
      get_gamepad[0].has_a = true;
      get_gamepad[0].has_b = true;
      get_gamepad[0].has_x = true;
      get_gamepad[0].has_y = true;
      get_gamepad[0].has_lb = true;
      get_gamepad[0].has_ls = true;
      get_gamepad[0].has_lt = true;
      get_gamepad[0].has_rb = true;
      get_gamepad[0].has_rs =false;
      get_gamepad[0].has_lt = true;
      get_gamepad[0].has_start = true;
      get_gamepad[0].has_dpad = true;
      get_gamepad[0].has_select = true;
    }
    
    switch(e.key) {
      case "Enter":
        get_gamepad[0].start_pressed = true;
        break;
      case " ":
        get_gamepad[0].select_pressed = true;
        break;
      case "w":
        get_gamepad[0].ls_up_pressed = true;
        get_gamepad[0].ls_down_pressed = false;
        break;
      case "s":
        get_gamepad[0].ls_down_pressed = true;
        get_gamepad[0].ls_up_pressed = false;
        break;
      case "a":
        get_gamepad[0].ls_left_pressed = true;
        get_gamepad[0].ls_right_pressed = false;
        break;
      case "d":
        get_gamepad[0].ls_right_pressed = true;
        get_gamepad[0].ls_left_pressed =false;
        break;
      case "h":
        get_gamepad[0].a_pressed = true;
        break;
      case "y":
        get_gamepad[0].x_pressed = true;
        break;
      case "u":
        get_gamepad[0].y_pressed = true;
        break;
      case "j":
        get_gamepad[0].b_pressed = true;
        break;
      case "i":
        get_gamepad[0].lb_pressed = true;
        break;
      case "o":
        get_gamepad[0].lt_pressed = true;
        get_gamepad[0].lt_pressure = 100;
        break;
       case "k":
        get_gamepad[0].rb_pressed = true;
        break;
      case "l":
        get_gamepad[0].lt_pressed = true;
        get_gamepad[0].lt_pressure = 100;
        break;
      case "ArrowUp":
        get_gamepad[0].dpad_up_pressed = true;
        break;
      case "ArrowDown":
        get_gamepad[0].dpad_down_pressed = true;
        break;
      case "ArrowLeft":
        get_gamepad[0].dpad_left_pressed = true;
        break;
      case "ArrowRight":
        get_gamepad[0].dpad_right_pressed = true;
        break;
      default:
        break;
    }
    window.dispatchEvent(event);
  });
  
  window.addEventListener("keyup", function(e) {
    switch (e.key) {
      case "Enter":
        get_gamepad[0].start_pressed = false;
        break;
      case " ":
        get_gamepad[0].select_pressed = false;
        break;
      case "w":
        get_gamepad[0].ls_up_pressed = false;
        break;
      case "s":
        get_gamepad[0].ls_down_pressed = false;
        break;
      case "a":
        get_gamepad[0].ls_left_pressed = false;
        break;
      case "d":
        get_gamepad[0].ls_right_pressed = false;
        break;
      case "h":
        get_gamepad[0].a_pressed = false;
        break;
      case "y":
        get_gamepad[0].x_pressed = false;
        break;
      case "u":
        get_gamepad[0].y_pressed = false;
        break;
      case "j":
        get_gamepad[0].b_pressed = false;
        break;
      case "i":
        get_gamepad[0].lb_pressed = false;
        break;
      case "o":
        get_gamepad[0].lt_pressed = false;
        get_gamepad[0].lt_pressure = 000;
        break;
      case "k":
        get_gamepad[0].rb_pressed = false;
        break;
      case "l":
        get_gamepad[0].lt_pressed = false;
        get_gamepad[0].lt_pressure = 000;
        break;
      case "ArrowUp":
        get_gamepad[0].dpad_up_pressed = false;
        break;
      case "ArrowDown":
        get_gamepad[0].dpad_down_pressed = false;
        break;
      case "ArrowLeft":
        get_gamepad[0].dpad_left_pressed = false;
        break;
      case "ArrowRight":
        get_gamepad[0].dpad_right_pressed = false;
        break;
      default:
        break;
    }
    window.dispatchEvent(event);
  });
  
  this.getGamepad = function(player) {
    return get_gamepad[player];
  }
}