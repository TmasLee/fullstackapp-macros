'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _appActions = require('Actions/appActions');

var appActions = _interopRequireWildcard(_appActions);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _HistoryList = require('./HistoryList');

var _HistoryList2 = _interopRequireDefault(_HistoryList);

var _FoodList = require('./FoodList');

var _FoodList2 = _interopRequireDefault(_FoodList);

var _DayFactory = require('../DayFactory');

var _DayFactory2 = _interopRequireDefault(_DayFactory);

var _HelpTooltip = require('../HelpTooltip');

var _HelpTooltip2 = _interopRequireDefault(_HelpTooltip);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(appActions.getAllDays());
      this.props.dispatch(appActions.getAllFoods());
      if (!this.props.currentDay) {
        this.props.dispatch(appActions.getMostRecentDay());
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.date.toLocaleTimeString === '00:00:00 AM' || !this.props.currentDay) {
        this.props.dispatch(appActions.postNewDay());
        var newDay = new _DayFactory2.default();
        this.props.dispatch(appActions.createNewDay(newDay));
        this.props.dispatch(appActions.getAllDays());
        this.props.dispatch(appActions.getMostRecentDay());
      }
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.props.dispatch(appActions.getDateTime());
    }
  }, {
    key: 'render',
    value: function render() {
      var date = this.props.date;

      var dateObj = new Date(date);
      var currentTime = dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HistoryList2.default, null),
        _react2.default.createElement(_HelpTooltip2.default, null),
        _react2.default.createElement(_FoodList2.default, null),
        _react2.default.createElement(_Input2.default, { currentTime: currentTime })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    date: state.app.date,
    currentDay: state.app.currentDay,
    allDays: state.app.allDays,
    allFoods: state.app.allFoods,
    errorMsg: state.errors.errorMsg
  };
})(App);

/** 
 *  - combine actions? too many calls made
 *  Add Later:
 *  - Time error
 *  - food history for each day
 *  - delete buttons on lists
 *  - visuals/single svg with all displays --> animations
*/