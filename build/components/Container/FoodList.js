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

var _FoodItemList = require('../Presentational/FoodItemList');

var _FoodItemList2 = _interopRequireDefault(_FoodItemList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  list: {
    position: 'absolute',
    width: '65%',
    height: '520px',
    bottom: '30px',
    left: '20%',
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
};

var FoodList = function (_Component) {
  _inherits(FoodList, _Component);

  function FoodList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FoodList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FoodList.__proto__ || Object.getPrototypeOf(FoodList)).call.apply(_ref, [this].concat(args))), _this), _this.handleQuickAdd = function (food) {
      var macros = [food.calories, food.protein, food.fat, food.carbs];
      _this.props.dispatch(appActions.addMacrosToCurrent(macros, _this.props.currentDay[0].id));
    }, _this.handleDelete = function (food) {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FoodList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // if (prevProps.allFoods !== this.props.allFoods){
      //   this.props.dispatch(appActions.getAllFoods());
      // }
      if (prevProps.allFoods.length !== this.props.allFoods.length) {
        console.log('should update all foods');
        this.props.dispatch(appActions.getAllFoods());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.list },
        _react2.default.createElement(_FoodItemList2.default, {
          allFoods: this.props.allFoods ? this.props.allFoods : [],
          handleQuickAdd: this.handleQuickAdd })
      );
    }
  }]);

  return FoodList;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    allFoods: state.app.allFoods
  };
})(FoodList);