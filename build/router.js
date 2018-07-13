'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('renderers/server');

var _server2 = _interopRequireDefault(_server);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _serverStore = require('./serverStore');

var _serverStore2 = _interopRequireDefault(_serverStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.get('/alldays', function (req, res) {
  _index2.default.days.getAllDays().then(function (response) {
    res.json(response);
  });
});

router.get('/allfoods', function (req, res) {
  _index2.default.foods.getAllFoods().then(function (response) {
    res.json(response);
  });
});

router.post('/post_day_entry', function (req, res) {
  _index2.default.days.postNewEntry().then(function (response) {
    res.json(response);
  });
});

router.post('/post_food_entry', function (req, res) {
  _index2.default.foods.postFood(req.body).then(function (response) {
    res.json(response);
  });
});

router.post('/addMacrosToCurrent', function (req, res) {
  var macros = req.body.macros;
  var id = req.body.id;
  _index2.default.days.addMacros(macros, id).then(function (response) {
    console.log(response);
    res.send(response);
  });
});

router.get('/getdatetime', function (req, res) {
  _serverStore2.default.dispatch({
    type: 'GET_DATE_TIME',
    data: { date: new Date() }
  });
  res.send();
});

router.get('/getmostrecentday', function (req, res) {
  _index2.default.days.getMostRecent().then(function (response) {
    res.json(response);
  });
});

router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var initialContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _server2.default)();

          case 2:
            initialContent = _context.sent;

            res.render('ejs_index', _extends({}, initialContent));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = router;