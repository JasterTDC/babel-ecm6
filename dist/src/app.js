'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _account = require('account.js');

var _account2 = _interopRequireDefault(_account);

var _functions = require('functions.js');

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(container) {
    _classCallCheck(this, App);

    this._container = document.getElementById(container);
    this._account = new _account2.default(container, 10);
    this._value = 10;
  }

  _createClass(App, [{
    key: 'getContainer',
    value: function getContainer() {
      return this._container;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this._account.getValue() + 10;
    }
  }, {
    key: 'getSum',
    value: function getSum() {
      return (0, _functions2.default)(10, 20);
    }
  }]);

  return App;
}();
//# sourceMappingURL=app.js.map
