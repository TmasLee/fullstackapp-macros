'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use('/', _router2.default);

app.set('view engine', 'ejs');

app.listen(_config2.default.port, function listenHandler() {
  console.info('Running on ' + _config2.default.port + '...');
});