'use strict';

var sinon  = require('sinon');
var Table = require('cli-table');
var colors = require('colors');
var clog   = require('./index');

describe('c-log, test exports', function() {

  var spy;

  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('.log()', function () {
    var msg = 'log message test';
    sinon.assert.notCalled(spy);
    clog.log(msg);
    sinon.assert.calledWith(spy, '» LOG: '.blueBG, msg);
  });

  it('.info()', function () {
    var msg = 'info message test';
    sinon.assert.notCalled(spy);
    clog.info(msg);
    sinon.assert.calledWith(spy, '» INFO: '.magentaBG, msg);
  });

  it('.warn()', function () {
    var msg = 'warn message test';
    sinon.assert.notCalled(spy);
    clog.warn(msg);
    sinon.assert.calledWith(spy, '» WARN: '.whiteBG.red, msg);
  });

  it('.error()', function () {
    var msg = 'error message test';
    sinon.assert.notCalled(spy);
    clog.error(msg);
    sinon.assert.calledWith(spy, '✘ '.red, msg);
  });

  it('.success()', function () {
    var msg = 'success message test';
    sinon.assert.notCalled(spy);
    clog.success(msg);
    sinon.assert.calledWith(spy, '✔ '.green, msg);
  });

  it('.enjoy()', function () {
    var msg = 'enjoy message test';
    sinon.assert.notCalled(spy);
    clog.enjoy(msg);
    sinon.assert.calledWith(spy, '',msg.rainbow);
  });

  it('.time(), .timeEnd()', function() {
    var msg = 'time id';
    var spyStart = sinon.spy(console, 'time');
    var spyEnd =   sinon.spy(console, 'timeEnd');

    sinon.assert.notCalled(spyStart);
    clog.time(msg);
    sinon.assert.calledWith(spyStart, '» TIMEOUT '.greenBG,msg);

    sinon.assert.notCalled(spyEnd);
    clog.timeEnd(msg);
    sinon.assert.calledWith(spyEnd, '» TIMEOUT '.greenBG,msg);
  });

  it('.table()', function() {

    var persons = [
      { name: 'Dan' },
      { name: 'John' }
    ];
    var tableMock = new Table({
      head: ['(index)'.green, 'name'.cyan],
      chars: {
        'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗',
        'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝',
        'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
        'right': '║' , 'right-mid': '╢' , 'middle': '│'
      }
    });
    tableMock.push([0, 'Dan']);
    tableMock.push([1, 'John']);

    sinon.assert.notCalled(spy);
    clog.table(persons);
    sinon.assert.calledWith(spy, tableMock.toString());
  });

});