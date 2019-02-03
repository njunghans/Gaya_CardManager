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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/render.js":
/*!********************************!*\
  !*** ./resources/js/render.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _this4 = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CardView =
/*#__PURE__*/
function () {
  function CardView() {
    var baseWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

    _classCallCheck(this, CardView);

    this.app = new PIXI.Application({
      width: baseWidth,
      height: baseWidth / 0.7159,
      transparent: true
    });
    this.frame = new PIXI.Sprite();
    this.rarityStone = new PIXI.Sprite();
    this.gold = new PIXI.Sprite();
    this.attack = new PIXI.Sprite();
    this.image = new PIXI.Sprite();
    this.defense = new PIXI.Sprite();
    this.title = new PIXI.Text("");
    this.category = new PIXI.Text("");
    this.info = new PIXI.Text("");
    this.goldText = new PIXI.Text("");
    this.attackText = new PIXI.Text("");
    this.defenseText = new PIXI.Text("");
    this.container = new PIXI.Container();
    this.setAttack(PIXI.Texture.fromImage('/data/AttackIcon.png'));
    this.setDefense(PIXI.Texture.fromImage('/data/DefenseIcon.png'));
    this.container.addChild(this.image);
    this.container.filters = [new PIXI.filters.AlphaFilter()];
    this.setFrame(PIXI.Texture.fromImage("/data/Frame.png"));
    this.setGold(PIXI.Texture.fromImage('/data/Gold.png'));
    this.app.stage.addChild(this.container);
    this.app.stage.addChild(this.frame);
    this.app.stage.addChild(this.rarityStone);
    this.app.stage.addChild(this.gold);
    this.app.stage.addChild(this.attack);
    this.app.stage.addChild(this.defense);
    this.app.stage.addChild(this.title);
    this.app.stage.addChild(this.category);
    this.app.stage.addChild(this.info);
    this.app.stage.addChild(this.attackText);
    this.app.stage.addChild(this.defenseText);
    this.app.stage.addChild(this.goldText);
    this.costs = [];
    this.bio_tex = PIXI.Texture.fromImage('/data/ManaCrystalGreen.png');
    this.ene_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlue.png');
    this.par_tex = PIXI.Texture.fromImage('/data/ManaCrystalRed.png');
    this.art_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlack.png');
    this.neu_tex = PIXI.Texture.fromImage('/data/ManaCrystalNeutral.png');
    this.setBaseWidth(baseWidth);
  }

  _createClass(CardView, [{
    key: "setBaseWidth",
    value: function setBaseWidth(baseWidth) {
      this.app.width = baseWidth;
      this.app.height = baseWidth / 0.7159;
      this.frame.width = baseWidth;
      this.frame.height = baseWidth / 0.7159;
      this.frame.x = 0;
      this.frame.y = 0;
      this.rarityStone.width = baseWidth / 7.875;
      this.rarityStone.height = baseWidth / 9;
      this.rarityStone.x = baseWidth / 8.4;
      this.rarityStone.y = baseWidth / 1.1667;
      this.gold.width = baseWidth / 6.848;
      this.gold.height = baseWidth / 6.848;
      this.gold.anchor.x = 0.5;
      this.gold.anchor.y = 0.5;
      this.gold.x = baseWidth / 1.117;
      this.gold.y = baseWidth / 8.873;
      this.attack.x = baseWidth / 11;
      this.attack.y = baseWidth / 0.78;
      this.attack.width = baseWidth / 6.06;
      this.attack.height = baseWidth / 5.43;
      this.attack.anchor.x = 0.5;
      this.attack.anchor.y = 0.5;
      this.defense.x = baseWidth / 1.1;
      this.defense.y = baseWidth / 0.77;
      this.defense.width = baseWidth / 6.85;
      this.defense.height = baseWidth / 5.833;
      this.defense.anchor.x = 0.5;
      this.defense.anchor.y = 0.5;
      var titleStyle = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: 'black',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6
      });
      var categoryStyle = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 28,
        fill: "white",
        stroke: 'black',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6
      });
      var infoStyle = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 18,
        fill: "grey",
        stroke: 'grey',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6
      });
      this.title.style = titleStyle;
      this.title.x = baseWidth / 2.35;
      this.title.y = baseWidth / 6.5;
      this.title.anchor.x = 0.5;
      this.title.anchor.y = 0.5;
      this.category.style = categoryStyle;
      this.category.x = baseWidth / 1.56;
      this.category.y = baseWidth / 1.1;
      this.category.anchor.x = 0.5;
      this.category.anchor.y = 0.5;
      this.info.style = infoStyle;
      this.info.rotation = Math.PI / 2;
      this.info.x = baseWidth / 17;
      this.info.y = baseWidth / 7.5;
      var goldStyle = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fontWeight: 'bold',
        fill: "white",
        stroke: 'black',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6
      });
      this.goldText.style = goldStyle;
      this.goldText.x = baseWidth / 1.12;
      this.goldText.y = baseWidth / 8.87;
      this.goldText.anchor.x = 0.5;
      this.goldText.anchor.y = 0.5;
      this.attackText.style = goldStyle;
      this.attackText.x = baseWidth / 11;
      this.attackText.y = baseWidth / 0.78;
      this.attackText.anchor.x = 0.5;
      this.attackText.anchor.y = 0.5;
      this.defenseText.style = goldStyle;
      this.defenseText.x = baseWidth / 1.1;
      this.defenseText.y = baseWidth / 0.78;
      this.defenseText.anchor.x = 0.5;
      this.defenseText.anchor.y = 0.5;
      this.setImageFrame();
      this.container.filterArea = new PIXI.Rectangle(baseWidth / 7.88, baseWidth / 7.7, baseWidth / 1.31, baseWidth / 1.26);
    }
  }, {
    key: "setTitle",
    value: function setTitle(txt) {
      this.title.text = txt;
      this.title.style = setFontStyle(txt, this.title.style, 200);
    }
  }, {
    key: "setCategory",
    value: function setCategory(txt) {
      this.category.text = txt;
      this.category.style = setFontStyle(txt, this.category.style, 200);
    }
  }, {
    key: "setInfo",
    value: function setInfo(txt) {
      this.info.text = txt;
    }
  }, {
    key: "setGoldText",
    value: function setGoldText(txt) {
      this.goldText.text = txt;
    }
  }, {
    key: "setAttackText",
    value: function setAttackText(txt) {
      this.attackText.text = txt;

      if (txt.length && txt !== '0') {
        this.attack.visible = true;
      } else {
        this.attackText.text = '';
        this.attack.visible = false;
      }
    }
  }, {
    key: "setDefenseText",
    value: function setDefenseText(txt) {
      this.defenseText.text = txt;

      if (txt.length && txt !== '0') {
        this.defense.visible = true;
      } else {
        this.defenseText.text = '';
        this.defense.visible = false;
      }
    }
  }, {
    key: "setRarity",
    value: function setRarity(rarity) {
      if (rarity === 0) {
        this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneCommon.png'));
      } else if (rarity === 1) {
        this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneRare.png'));
      } else if (rarity === 2) {
        this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneEpic.png'));
      } else if (rarity === 3) {
        this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneUnique.png'));
      } else {
        this.setRarityStone(PIXI.Texture.EMPTY);
      }
    }
  }, {
    key: "setFrame",
    value: function setFrame(texture) {
      PIXI.Texture.removeFromCache(this.frame.texture);
      this.frame.texture = texture;
    }
  }, {
    key: "setRarityStone",
    value: function setRarityStone(texture) {
      PIXI.Texture.removeFromCache(this.rarityStone.texture);
      this.rarityStone.texture = texture;
    }
  }, {
    key: "setGold",
    value: function setGold(texture) {
      PIXI.Texture.removeFromCache(this.gold.texture);
      this.gold.texture = texture;
    }
  }, {
    key: "setAttack",
    value: function setAttack(texture) {
      PIXI.Texture.removeFromCache(this.attack.texture);
      this.attack.texture = texture;
    }
  }, {
    key: "setDefense",
    value: function setDefense(texture) {
      PIXI.Texture.removeFromCache(this.defense.texture);
      this.defense.texture = texture;
    }
  }, {
    key: "setImage",
    value: function setImage(texture) {
      PIXI.Texture.removeFromCache(this.image.texture);
      this.image.texture = texture;
    }
  }, {
    key: "setImageFrame",
    value: function setImageFrame() {
      var image_settings = document.getElementsByName("image_settings")[0];

      try {
        var obj = JSON.parse(image_settings.value);
        this.image.width = obj.width * this.app.width / 630;
        this.image.height = obj.height * this.app.width / 630;
        this.image.x = obj.x * this.app.width / 630 + this.image.width * this.image.anchor.x;
        this.image.y = obj.y * this.app.width / 630 + this.image.height * this.image.anchor.y;
        this.image.rotation = obj.rotation;
      } catch (e) {}
    }
  }, {
    key: "setCost",
    value: function setCost(c) {
      var _this = this;

      var costs = this.sortCosts(c);
      this.costs.forEach(function (spr) {
        _this.app.stage.removeChild(spr);
      }, this);
      this.costs = [];
      this.costPos = this.app.width / 1.32;
      this.addCostSprites(costs);
    }
  }, {
    key: "sortCosts",
    value: function sortCosts(c) {
      var _this2 = this;

      var costs = [];
      var neu = {};
      c.forEach(function (e) {
        var d = {};
        d.type = e.id;
        d.cost = e.value;

        if (d.type === "cost_neutral") {
          d.texture = _this2.neu_tex;
        } else if (d.type === "cost_bio") {
          d.texture = _this2.bio_tex;
        } else if (d.type === "cost_par") {
          d.texture = _this2.par_tex;
        } else if (d.type === "cost_art") {
          d.texture = _this2.art_tex;
        } else if (d.type === "cost_ene") {
          d.texture = _this2.ene_tex;
        }

        if (d.type === "cost_neutral") {
          neu = d;
        } else if (d.type !== "cost_gold") {
          costs.push(d);
        }
      }, this);
      costs.sort(function (a, b) {
        return b.cost - a.cost;
      });
      costs.push(neu);
      return costs;
    }
  }, {
    key: "addCostSprites",
    value: function addCostSprites(costs) {
      var _this3 = this;

      costs.forEach(function (c) {
        for (var i = 0; i < c.cost; i++) {
          var s = new PIXI.Sprite();
          s.texture = c.texture;
          s.x = _this3.costPos;
          s.y = _this3.app.width / 13.87;
          s.width = _this3.app.width / 20.2;
          s.height = _this3.app.width / 20.2;
          _this3.costPos -= _this3.app.width / 20;

          _this3.costs.push(s);

          _this3.app.stage.addChild(s);
        }
      }, this);
    }
  }]);

  return CardView;
}();

var card = new CardView();
document.getElementById('render-view').appendChild(card.app.view);
card.app.view.addEventListener('wheel', function (e) {
  try {
    if (!e.ctrlKey) {
      var obj = JSON.parse(image_settings.value);
      obj.width += obj.width * e.deltaY / 360;
      obj.height += obj.height * e.deltaY / 360;
      image_settings.value = JSON.stringify(obj);
      card.setImageFrame();
    } else {
      var _obj = JSON.parse(image_settings.value);

      _obj.rotation += e.deltaY / 360;
      image_settings.value = JSON.stringify(_obj);
      card.setImageFrame();
    }

    e.preventDefault();
  } catch (e) {}
});
card.app.view.addEventListener('mousedown', function (e) {
  card.drag = true;
});
card.app.view.addEventListener('mouseup', function (e) {
  card.drag = false;
});
card.app.view.addEventListener('mousemove', function (e) {
  if (card.drag) {
    try {
      var obj = JSON.parse(image_settings.value);
      obj.x += e.movementX;
      obj.y += e.movementY;
      image_settings.value = JSON.stringify(obj);
      card.setImageFrame();
    } catch (e) {}
  }
});
var name = document.getElementsByName("name")[0];
card.setTitle(name.value);
var card_type = document.getElementsByName("card_type")[0];
var category_text = document.getElementsByName("category_text")[0];
card.setCategory(card_type.value + ', ' + category_text.value);
var rarity = document.getElementsByName("rarity")[0];
card.setRarity(rarity.selectedIndex);
var cost_gold = document.getElementsByName("cost_gold")[0];
card.setGoldText(cost_gold.value);
var image_path = document.getElementsByName("image_path")[0];
card.setImage(PIXI.Texture.fromImage(image_path.value));
var image_settings = document.getElementsByName("image_settings")[0];
card.setImageFrame();
var attack = document.getElementsByName("attack")[0];
card.setAttackText(attack.value);
var shield = document.getElementsByName("shield")[0];
card.setDefenseText(shield.value);
var costs = document.querySelectorAll("[name^=cost_]");
card.setCost(costs);
name.addEventListener('input', function () {
  card.setTitle(name.value);
});
card_type.addEventListener('change', function () {
  card.setCategory(card_type.value + ', ' + category_text.value);
});
category_text.addEventListener('input', function () {
  card.setCategory(card_type.value + ', ' + category_text.value);
});
rarity.addEventListener('change', function () {
  card.setRarity(rarity.selectedIndex);
});
cost_gold.addEventListener('input', function () {
  card.setGoldText(cost_gold.value);
});
image_path.addEventListener('input', function () {
  var texture = PIXI.Texture.fromImage(image_path.value);
  card.setImage(texture);
  texture.on('update', function () {
    image_settings.value = '{"x":0,"y":0,"width":' + card.image.texture.baseTexture.realWidth + ',"height":' + card.image.texture.baseTexture.realHeight + ',"rotation":0}';
    card.setImageFrame();
  });
  texture.update();
});
attack.addEventListener('input', function () {
  card.setAttackText(attack.value);
});
shield.addEventListener('input', function () {
  card.setDefenseText(shield.value);
});
costs.forEach(function (c) {
  c.addEventListener('input', function () {
    card.setCost(costs);
  }, _this4);
});

function setFontStyle(text, style, maxWidth) {
  var maxFontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;
  var minFontSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 18;
  var align = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "center";
  style.fontSize = maxFontSize;
  style.wordWrap = false;
  style.align = align;
  var width = PIXI.TextMetrics.measureText(text, style).width;

  while (width > maxWidth && style.fontSize > minFontSize) {
    style.fontSize -= 1;
    width = PIXI.TextMetrics.measureText(text, style).width;

    if (width > maxWidth && style.fontSize === minFontSize) {
      console.log(width, style.fontSize);
      style.wordWrap = true;
      style.breakWords = true;
      style.wordWrapWidth = maxWidth;
      width = PIXI.TextMetrics.measureText(text, style).width;
    }
  }

  return style;
}

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/render.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ngrippa/workspace/gaya/resources/js/render.js */"./resources/js/render.js");


/***/ })

/******/ });