'use strict';

var colors = require('colors');
var Table = require('cli-table');
var _ = require('./utils');

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
 * Generate array of object into cli-table and print it
 * keys as table head, value as table rows
 * @param arr
 */
function generateTable(arr) {
  //const word for object indexing
  // Head handling
  var keys = arr.map(function(obj) {
    return Object.keys(obj);
  });
  var head = _.uniq(_.flatten(keys, 0));

  var table = new Table({
    head: ['(index)'.green].concat(head.map(function(str) {
      return str.cyan;
    })),
    chars: {
      'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗',
      'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝',
      'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
      'right': '║' , 'right-mid': '╢' , 'middle': '│'
    }
  });

  // Body handling
  arr.forEach(function(obj, i) {
    var body = [i].concat(head.map(function(key) {
      return obj[key] || ' ';
    }));
    table.push(body);
  });

  // Print it
  console.log(table.toString());
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
 * @param arr
 */
Console.prototype.table = function(arr) {
  return Array.isArray(arr)
    ? generateTable(arr)
    : this.log(arr)
};

/**
 * @export
 */
module.exports = Console;
