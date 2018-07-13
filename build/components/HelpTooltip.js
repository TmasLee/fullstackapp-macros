'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    background: 'none',
    border: 'none',
    color: 'red',
    padding: '0',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '20px',
    listStyleType: 'none',
    textDecoration: 'none'
  },
  text: {
    width: '450px',
    top: '100%',
    left: '50%',
    marginLeft: '-50px',
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 0',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: '1000'
  },
  link: {
    position: 'absolute',
    fontFamily: 'Arial',
    fontSize: '20px',
    right: '0',
    color: 'rgb(67, 123, 219)'

  }
};

var HelpTooltip = function (_Component) {
  _inherits(HelpTooltip, _Component);

  function HelpTooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HelpTooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelpTooltip.__proto__ || Object.getPrototypeOf(HelpTooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.onHover = function () {
      _this.setState(function (prevState) {
        return { hover: !prevState.hover };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HelpTooltip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var text;
      if (this.state.hover === false) {
        text = null;
      } else if (this.state.hover === true) {
        text = _react2.default.createElement(
          'div',
          { style: styles.text },
          _react2.default.createElement(
            'span',
            null,
            'This app serves as a macronutrients recorder to be used with workout routines. Everyday (starting at midnight) a new day is created, ready to record the new day\'s consumed macros. The previous day and foods eaten is logged into a MySQL database and displayed in the history lists. Searching for a food in the search bar fetches data from the USDA database.'
          ),
          _react2.default.createElement(
            'span',
            null,
            'While this isn\'t personalized to each client visting the website, it\'s a demo of of a a fullstack CRUD application. This app was built with Node.js, Express and MySQL backend and React for the front end with Redux for state management.'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Soon to come are: delete/update buttons for both lists and the ability to easily see foods logged for a specific day. Also some bug fixes, refactoring, and optimization!'
          )
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            style: styles.container,
            onMouseOver: function onMouseOver(e) {
              e.preventDefault();
              _this2.onHover();
            },
            onMouseLeave: function onMouseLeave(e) {
              e.preventDefault();
              _this2.onHover();
            }
          },
          'What is this?',
          text
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://ndb.nal.usda.gov/ndb/search/list?home=true', style: styles.link },
          'Link to USDA database'
        )
      );
    }
  }]);

  return HelpTooltip;
}(_react.Component);

exports.default = HelpTooltip;