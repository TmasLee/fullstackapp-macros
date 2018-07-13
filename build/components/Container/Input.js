'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _inputformActions = require('Actions/inputformActions');

var inputformActions = _interopRequireWildcard(_inputformActions);

var _appActions = require('Actions/appActions');

var appActions = _interopRequireWildcard(_appActions);

var _FoodSearchBar = require('../Presentational/FoodSearchBar');

var _FoodSearchBar2 = _interopRequireDefault(_FoodSearchBar);

var _MacrosCounter = require('../Presentational/MacrosCounter');

var _MacrosCounter2 = _interopRequireDefault(_MacrosCounter);

var _SubmitBtn = require('../Presentational/SubmitBtn');

var _SubmitBtn2 = _interopRequireDefault(_SubmitBtn);

var _ServingsDropdown = require('../Presentational/ServingsDropdown');

var _ServingsDropdown2 = _interopRequireDefault(_ServingsDropdown);

var _FoodFactory = require('../FoodFactory');

var _FoodFactory2 = _interopRequireDefault(_FoodFactory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Forms can be tricky with redux. It can be hard to determine how it would be split into 
 * presentational/container components. Here I chose to split every part of the form up for cleaner code.
 */

var styles = {
  errorMsg: {
    color: 'red'
  },
  form: {
    position: 'relative',
    display: 'inline-block',
    top: '570px',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearchBarChange = function (event) {
      var newQuery = event.target.value;
      _this.props.dispatch(inputformActions.changeQuery(newQuery));
      _this.props.dispatch(inputformActions.fetchQueryResults(newQuery));
    }, _this.handleFoodLinkClick = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, name) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.props.dispatch(inputformActions.fetchFoodNutrition(id, name));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.calculateTotalMacros = function (macros, servings) {
      var entryMacros = macros.map(function (nutrient) {
        var value = parseInt(nutrient) * servings;
        if (isNaN(value)) {
          return 0;
        }
        return value;
      });
      _this.storeMacros(entryMacros);
    }, _this.storeMacros = function (macros) {
      _this.props.dispatch(inputformActions.storeEntryMacros(macros));
    }, _this.getServings = function (e) {
      var servings = e.target.value;
      _this.props.dispatch(inputformActions.getServings(servings));
      _this.calculateTotalMacros(_this.props.foodMacros, servings);
    }, _this.handleSubmitBtn = function (e) {
      e.preventDefault();

      // catch nothing entered error msg for submit button


      var newFoodEntry = new _FoodFactory2.default(_this.props.query, _this.props.entryMacros);
      var macros = _this.props.entryMacros;

      _this.props.dispatch(appActions.addMacrosToCurrent(macros, _this.props.currentDay[0].id));
      _this.props.dispatch(appActions.getMostRecentDay());
      _this.props.dispatch(appActions.postFood(newFoodEntry));
      _this.props.dispatch(appActions.getAllFoods());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          query = _props.query,
          queryResults = _props.queryResults,
          entryMacros = _props.entryMacros,
          errorMsg = _props.errorMsg,
          currentTime = _props.currentTime;


      if (errorMsg) {
        var error = _react2.default.createElement(
          'div',
          { style: styles.errorMsg },
          errorMsg
        );
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.form },
          error,
          currentTime,
          _react2.default.createElement(_FoodSearchBar2.default, {
            handleSearchBarChange: this.handleSearchBarChange,
            query: query,
            queryResults: queryResults,
            handleFoodLinkClick: this.handleFoodLinkClick
          }),
          _react2.default.createElement(_ServingsDropdown2.default, { getServings: this.getServings }),
          _react2.default.createElement(_MacrosCounter2.default, { entryMacros: entryMacros }),
          _react2.default.createElement(_SubmitBtn2.default, { handleSubmitBtn: this.handleSubmitBtn })
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    query: state.inputForm.query,
    queryResults: state.inputForm.queryResults,
    foodMacros: state.inputForm.foodMacros,
    entryMacros: state.inputForm.entryMacros,
    allDays: state.app.allDays,
    allFoods: state.app.allFoods,
    currentDay: state.app.currentDay,
    errorMsg: state.errors.errorMsg
  };
})(Input);