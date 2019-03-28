"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/mobx/index.js");

var _fetch = require("../../kit/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _upload = require("../../kit/upload.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.inject)('counterStore', 'locationStore'), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["province", "city", "area", "title", "desc", "files", "value", "locationStore"], _this.config = {
      navigationBarTitleText: '发布'
    }, _this.onChangeTitle = function (title) {
      _this.setState({ title: title });
    }, _this.onChange = function (files) {
      _this.setState({ files: files });
    }, _this.onImageClick = function (index, file) {
      wx.previewImage({
        current: file.url,
        urls: _this.state.files.map(function (file) {
          return file.url;
        })
      });
    }, _this.onPublish = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var _this$state, title, desc, files, _this$props$locationS, province, city, area, longitude, latitude, actFiles;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, title = _this$state.title, desc = _this$state.desc, files = _this$state.files;
                _this$props$locationS = _this.props.locationStore, province = _this$props$locationS.province, city = _this$props$locationS.city, area = _this$props$locationS.area, longitude = _this$props$locationS.longitude, latitude = _this$props$locationS.latitude;
                _context.next = 4;
                return (0, _upload.multiUpload)(files.map(function (file) {
                  return file.url;
                }));

              case 4:
                actFiles = _context.sent;

                console.log(actFiles);
                (0, _fetch2.default)('product/saveOrUpdate', {
                  title: title,
                  desc: desc,
                  images: actFiles,
                  location: longitude + "," + latitude,
                  province: province,
                  city: city,
                  area: area
                }).then(function () {
                  _index2.default.showToast({ title: '发布成功' });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        title: '',
        desc: '',
        files: []
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$locationStore = this.__props.locationStore,
          province = _props$locationStore.province,
          city = _props$locationStore.city,
          area = _props$locationStore.area;

      Object.assign(this.__state, {
        province: province,
        city: city,
        area: area
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "locationStore": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onPublish", "onChangeTitle", "handleChange", "onChange", "onFail", "onImageClick"], _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));