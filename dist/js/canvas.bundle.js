/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/1wall.png":
/*!***************************!*\
  !*** ./src/img/1wall.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "155d96d66dffd87eaa25d068dc587948.png");

/***/ }),

/***/ "./src/img/2wall.png":
/*!***************************!*\
  !*** ./src/img/2wall.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d42b09de1f48f56bdbff93c4bed3004b.png");

/***/ }),

/***/ "./src/img/3wall.png":
/*!***************************!*\
  !*** ./src/img/3wall.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f94a576f205495342cb6c6c22125ca21.png");

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/cactus.png":
/*!****************************!*\
  !*** ./src/img/cactus.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "52cb8c95593f1180d7cf132af8efa342.png");

/***/ }),

/***/ "./src/img/cactusf.png":
/*!*****************************!*\
  !*** ./src/img/cactusf.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb83deb2820e192455245d3642523bb3.png");

/***/ }),

/***/ "./src/img/flag.png":
/*!**************************!*\
  !*** ./src/img/flag.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aef67da9d79e4e30fdeb88acce362437.png");

/***/ }),

/***/ "./src/img/knife.png":
/*!***************************!*\
  !*** ./src/img/knife.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "281830f1b0f1568389c150f308af5391.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/img/trees.png":
/*!***************************!*\
  !*** ./src/img/trees.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f3dec386d87eaebf9f75bbf0a36ea80.png");

/***/ }),

/***/ "./src/img/winner.png":
/*!****************************!*\
  !*** ./src/img/winner.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9e9b27208715b6a576a635e864b57c0f.png");

/***/ }),

/***/ "./src/img/woodenarrow.png":
/*!*********************************!*\
  !*** ./src/img/woodenarrow.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2e30db3787b147e92ea6db57bb1f822a.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_3wall_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/3wall.png */ "./src/img/3wall.png");
/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bg.png */ "./src/img/bg.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_trees_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/trees.png */ "./src/img/trees.png");
/* harmony import */ var _img_1wall_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/1wall.png */ "./src/img/1wall.png");
/* harmony import */ var _img_2wall_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/2wall.png */ "./src/img/2wall.png");
/* harmony import */ var _img_winner_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/winner.png */ "./src/img/winner.png");
/* harmony import */ var _img_knife_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/knife.png */ "./src/img/knife.png");
/* harmony import */ var _img_flag_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/flag.png */ "./src/img/flag.png");
/* harmony import */ var _img_cactus_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/cactus.png */ "./src/img/cactus.png");
/* harmony import */ var _img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/cactusf.png */ "./src/img/cactusf.png");
/* harmony import */ var _img_woodenarrow_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/woodenarrow.png */ "./src/img/woodenarrow.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















var c = document.querySelector("canvas");
var ctx = c.getContext("2d");
c.height = "565";
c.width = "1024";
var gravity = 0.8;

var Tree = /*#__PURE__*/function () {
  function Tree(x, y, image, a, b) {
    _classCallCheck(this, Tree);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
    image.width = 400;
    image.height = 450;
    this.image = image;
  }

  _createClass(Tree, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width);
    }
  }]);

  return Tree;
}();

var FlagClass = /*#__PURE__*/function () {
  function FlagClass(x, y, image) {
    _classCallCheck(this, FlagClass);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
    image.width = 420;
    image.height = 160;
    this.image = image;
  }

  _createClass(FlagClass, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width);
    }
  }]);

  return FlagClass;
}();

var Attacker = /*#__PURE__*/function () {
  function Attacker(x, y, image) {
    _classCallCheck(this, Attacker);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    image.width = 120;
    image.height = 100;
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(Attacker, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width);
    }
  }]);

  return Attacker;
}();

var Platfrom = /*#__PURE__*/function () {
  function Platfrom(x, y, image) {
    _classCallCheck(this, Platfrom);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(Platfrom, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platfrom;
}();

var genericObject = /*#__PURE__*/function () {
  function genericObject(x, y, image) {
    _classCallCheck(this, genericObject);

    this.position = {
      x: x,
      y: y
    };
    image.width = c.height;
    this.image = image;
  }

  _createClass(genericObject, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return genericObject;
}();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = bgs(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: bgs(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: bgs(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: bgs(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: bgs(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSpirte = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.currentSpirte, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSpirte === this.sprites.stand.right || this.currentSpirte === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSpirte === this.sprites.run.right || this.currentSpirte === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.draw();

      if (this.position.y + this.height + this.velocity.y <= c.height) {
        this.velocity.y += gravity;
      } //   else {
      //     this.velocity.y = 0;
      // }

    }
  }]);

  return Player;
}();

function bgs(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var player = new Player();
var flag = [new FlagClass(20600, 60, bgs(_img_flag_png__WEBPACK_IMPORTED_MODULE_11__["default"]))];
var platfroms = [new Platfrom(-1, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(340, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(679, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(1020, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(1361, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(2000, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(2500, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(3000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(3050, 250, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(3500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(3700, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4100, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(5000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(5500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(6000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(6500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(6800, 260, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(7100, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(7500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8800, 400, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(9300, 350, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(9700, 270, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(10200, 270, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(10600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(10900, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(11300, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(11600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(12000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(12600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(13000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(13500, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(14000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(14600, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(15000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(15600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(15900, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(16500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17300, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17700, 280, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(17600, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(18000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(18400, 289, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(18600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(19000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(19600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(20000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(20500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(30000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"]))];
var attackers = [new Attacker(11600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(12000, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(12100, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(12600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(13000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(13500, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(14000, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(14600, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(15000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(15600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(15900, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(16500, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(17000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(17300, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(17600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(18000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(18600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(19000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(19600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(20000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(20200, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"]))];
var background = [new genericObject(-1, -1, bgs(_img_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"])), new genericObject(10000, -1, bgs(_img_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]))];
var trees = [new Tree(200, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(1023, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(2047, 110, bgs(tree)),
// new Tree(3070, 150, bgs(tree)),
// new Tree(300, 120, bgs(Arrow)),
new Tree(4800, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(6139, 110, bgs(tree)),
new Tree(7300, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(7830, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(9208, 110, bgs(tree)),
new Tree(10500, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(11500, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(20750, 90, bgs(_img_winner_png__WEBPACK_IMPORTED_MODULE_9__["default"])) // new genericObject(12278, -1, bgs(bg))
];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrolloffset = 0;

function init() {
  player = new Player();
  platfroms = [new Platfrom(-1, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(340, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(679, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(1020, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(1361, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(2000, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(2500, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(3000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(3050, 250, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(3500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(3700, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4100, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(4500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(5000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(5500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(6000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(6500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(6800, 260, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(7100, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(7500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8000, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8500, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(8800, 400, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(9300, 350, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(9700, 270, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(10200, 270, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(10600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(10900, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(11300, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(11600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(12000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(12600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(13000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(13500, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(14000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(14600, 470, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(15000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(15600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(15900, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(16500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17300, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(17700, 280, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(17600, 470, bgs(_img_1wall_png__WEBPACK_IMPORTED_MODULE_7__["default"])), new Platfrom(18000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(18400, 289, bgs(_img_2wall_png__WEBPACK_IMPORTED_MODULE_8__["default"])), new Platfrom(18600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(19000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(19600, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(20000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(20500, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new Platfrom(30000, 470, bgs(_img_3wall_png__WEBPACK_IMPORTED_MODULE_0__["default"]))];
  attackers = attackers = [new Attacker(11600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(12000, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(12100, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(12600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(13000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(13500, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(14000, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(14600, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(15000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(15600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(15900, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(16500, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(17000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(17300, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"])), new Attacker(17600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(18000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(18600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(19000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(19600, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(20000, 380, bgs(_img_cactus_png__WEBPACK_IMPORTED_MODULE_12__["default"])), new Attacker(20200, -4, bgs(_img_cactusf_png__WEBPACK_IMPORTED_MODULE_13__["default"]))];
  flag = [new FlagClass(20600, 60, bgs(_img_flag_png__WEBPACK_IMPORTED_MODULE_11__["default"]))];
  background = [new genericObject(-1, -1, bgs(_img_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"])), new genericObject(10000, -1, bgs(_img_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]))];
  trees = [new Tree(200, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(1023, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(2047, 110, bgs(tree)),
  // new Tree(3070, 150, bgs(tree)),
  // new Tree(3193, 150, bgs(tree)),
  new Tree(4800, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(6139, 110, bgs(tree)),
  new Tree(7300, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(7830, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), // new Tree(9208, 110, bgs(tree)),
  new Tree(10500, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(11500, 150, bgs(_img_trees_png__WEBPACK_IMPORTED_MODULE_6__["default"])), new Tree(20750, 90, bgs(_img_winner_png__WEBPACK_IMPORTED_MODULE_9__["default"])) // new genericObject(12278, -1, bgs(bg))
  ];
  scrolloffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, c.width, c.height);
  c.fillRect = 'white';
  attackers.forEach(function (attacker) {
    attacker.draw();
  });
  platfroms.forEach(function (platfrom) {
    platfrom.draw();
  });
  background.forEach(function (genericObject) {
    genericObject.draw();
  });
  trees.forEach(function (tree) {
    tree.draw();
  });
  attackers.forEach(function (tre) {
    tre.draw();
  });
  flag.forEach(function (fla) {
    fla.draw();
  }); // player.draw();

  platfroms.forEach(function (platfrom) {
    platfrom.draw();

    if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrolloffset == 0 && player.position.x > 0) {
      player.velocity.x = -5;
    } else if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = 5;
    } else {
      player.velocity.x = 0;

      if (keys.left.pressed && scrolloffset > 0) {
        platfroms.forEach(function (platfrom) {
          platfrom.position.x += 0.24;
          scrolloffset -= 0.001;
        });
        background.forEach(function (genericObject) {
          genericObject.position.x += 0.24;
        });
        trees.forEach(function (tree) {
          tree.position.x += 0.24;
        });
        attackers.forEach(function (tre) {
          tre.position.x += 0.24;
        });
        flag.forEach(function (fla) {
          fla.position.x += 0.24;
        });
      } else {
        if (keys.right.pressed) {
          platfroms.forEach(function (platfrom) {
            platfrom.position.x -= 0.24;
            scrolloffset += 0.001;
          });
          background.forEach(function (genericObject) {
            genericObject.position.x -= 0.24;
          });
          trees.forEach(function (tree) {
            tree.position.x -= 0.24;
          });
          attackers.forEach(function (tre) {
            tre.position.x -= 0.24;
          });
          flag.forEach(function (fla) {
            fla.position.x -= 0.24;
          });
        }
      }
    }
  }); // win 

  console.log(scrolloffset); // if(scrolloffset > )

  flag.forEach(function (fla) {
    if (scrolloffset >= 4457.2) {
      player.position.x = fla.position.x;
      player.velocity.x = 0;
      platfroms.velocity.x = 0;
      background.velocity.x = 0;
    }
  }); // lose

  if (player.position.y > c.height) {
    init();
    console.log("Game Over");
  }

  player.update();
  platfroms.forEach(function (platfrom) {
    if (player.position.y + player.height <= platfrom.position.y && player.position.y + player.height + player.velocity.y >= platfrom.position.y && player.position.x <= platfrom.position.x + platfrom.width && player.position.x + player.width >= platfrom.position.x) {
      player.velocity.y = 0;
    }

    if (player.position.y <= -1) {
      player.position.y = -1;
    }
  });
  attackers.forEach(function (atk) {
    if (player.position.x + 100 >= atk.position.x) {
      atk.velocity.x = -5;
    }

    if (player.position.y + player.height <= atk.position.y && player.position.y + player.height + player.velocity.y >= atk.position.y && player.position.x <= atk.position.x + atk.width && player.position.x + player.width >= atk.position.x) {
      init();
    }

    if (player.position.x + player.width >= atk.position.x && player.position.x <= atk.position.x + atk.width && player.position.y + player.height >= atk.position.y && player.position.y <= atk.position.y + atk.height) {
      init();
    }
  });

  if (player.position.y <= 0) {
    player.position.y = 5;
    player.velocity.y = 1;
  }
}

animate();
addEventListener('keydown', function (_ref) {
  var key = _ref.key;
  console.log(key);

  switch (key) {
    case 'w':
      player.velocity.y -= 19;
      break;

    case 'd':
      keys.right.pressed = true;
      player.currentSpirte = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 'a':
      keys.left.pressed = setInterval(true, 1000);
      player.currentSpirte = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 's':
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;
  console.log(key);

  switch (key) {
    case 'w':
      break;

    case 'd':
      keys.right.pressed = false;
      player.currentSpirte = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 'a':
      keys.left.pressed = false;
      player.currentSpirte = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 's':
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map