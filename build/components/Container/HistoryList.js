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

var _DayHistoryList = require('../Presentational/DayHistoryList');

var _DayHistoryList2 = _interopRequireDefault(_DayHistoryList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  history: {
    position: 'absolute',
    width: '65%',
    height: '500px',
    top: '30px',
    left: '20%',
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
};

var HistoryList = function (_Component) {
  _inherits(HistoryList, _Component);

  function HistoryList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HistoryList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HistoryList.__proto__ || Object.getPrototypeOf(HistoryList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dayToDisplay: null
    }, _this.handleClick = function (day) {
      console.log(day);
      _this.setState({
        showDayInfo: day.day_obj
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HistoryList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.currentDay !== null) {
        if (prevProps.currentDay !== this.props.currentDay) {
          console.log('should update day history');
          this.props.dispatch(appActions.getAllDays());
        }
      }
      if (prevProps.allDays.length !== this.props.allDays.length) {
        this.props.dispatch(appActions.getAllDays());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.history },
        _react2.default.createElement(_DayHistoryList2.default, {
          allDays: this.props.allDays ? this.props.allDays : [],
          handleClick: this.handleClick
        })
      );
    }
  }]);

  return HistoryList;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    allDays: state.app.allDays,
    currentDay: state.app.currentDay
  };
})(HistoryList);