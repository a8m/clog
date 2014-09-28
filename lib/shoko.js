'use strict';

var colors = require('colors');

//console levels
var levels = {
  log:      { name: '» LOG: '.blueBG, msg: message },
  info:     { name: '» INFO: '.magentaBG, msg: message },
  warn:     { name: '» WARN: '.whiteBG.red, msg: message },
  error:    { name: '✘ '.red, msg: message },
  success:  { name: '✔ '.green, msg: message }
//  debug:    true
};

function message(msg) {
  msg = typeof msg !== 'string' ? '' : msg;
  return msg
}

function Console() {

  for(var level in levels) {
     this[level] = (function(level) {
       return function(msg) {
         var args = [levels[level].name, levels[level].msg(msg)];
         console.log.apply(console, args);
       };
     })(level)
  }

}

var a = new Console
a.log("ing out on a lot of other cool symbols and stuff that's made using them.");
a.info("ing out on a lot of other cool symbols and stuff that's made using them.");
a.warn("ing out on a lot of other cool symbols and stuff that's made using them.");
a.success("ing out on a lot of other cool symbols and stuff that's made using them.");
a.error("ing out on a lot of other cool symbols and stuff that's made using them.");
