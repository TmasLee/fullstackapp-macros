'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  listItem: {
    listStyleType: 'none'

  },
  link: {
    textDecoration: 'none'

  }
};

var FoodLink = function FoodLink(_ref) {
  var name = _ref.name,
      ndbno = _ref.ndbno,
      _onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'li',
      { style: styles.listItem },
      _react2.default.createElement(
        'a',
        {
          href: '',
          style: styles.link,
          onClick: function onClick(e) {
            e.preventDefault();
            _onClick(ndbno, name);
          }
        },
        name
      )
    )
  );
};

FoodLink.propTypes = {
  name: _propTypes2.default.string.isRequired,
  ndbno: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = FoodLink;