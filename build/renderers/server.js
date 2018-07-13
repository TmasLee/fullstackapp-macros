'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRedux = require('react-redux');

var _serverStore = require('../serverStore');

var _serverStore2 = _interopRequireDefault(_serverStore);

var _App = require('components/Container/App');

var _App2 = _interopRequireDefault(_App);

var _appActions = require('../Actions/appActions');

var appActions = _interopRequireWildcard(_appActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var serverRender = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var preloadedState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _serverStore2.default.dispatch(appActions.getAllDays());

          case 2:
            _context.next = 4;
            return _serverStore2.default.dispatch(appActions.getAllFoods());

          case 4:
            preloadedState = _serverStore2.default.getState();
            return _context.abrupt('return', {
              initialMarkup: _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: _serverStore2.default },
                _react2.default.createElement(_App2.default, null)
              )),
              preloadedState: preloadedState
            });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function serverRender() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = serverRender;