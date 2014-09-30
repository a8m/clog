'use strict';

var colors = require('colors');

/**
 * @type Object
 */
var levels = {
  log:      { name: '» LOG: '.blueBG,         cmd: false      },
  info:     { name: '» INFO: '.magentaBG,     cmd: false      },
  warn:     { name: '» WARN: '.whiteBG.red,   cmd: false      },
  error:    { name: '✘ '.red,                 cmd: false      },
  success:  { name: '✔ '.green,               cmd: false      },
  time:     { name: "» TIMEOUT ".greenBG,     cmd: 'time'     },
  timeEnd:  { name: "» TIMEOUT ".greenBG,     cmd: 'timeEnd'  },
  enjoy:    { name: "",                       cmd: false      }
};

/**
 * Make sure that message pass as a string
 * @param msg
 * @returns {String}
 */
function message(msg) {
  return typeof msg !== 'string'
    ? JSON.stringify(msg)
    : msg;
}

/**
 * @constructor
 */
function Console() {

  for(var key in levels) {
     this[key] = (function(val) {
       return function(msg) {
         msg = message(msg);
         //fn arguments
         var args = [val.name, val.name ? msg : msg['rainbow']];
         var cmd = val.cmd || 'log';
         //apply fn
         console[cmd].apply(console, args);
       };
     })(levels[key])
  }
}

/**
 * @export
 */
module.exports = Console;
