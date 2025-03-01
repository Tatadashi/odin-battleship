/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: darkseagreen;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
  position: relative;
}

dialog {
  margin: auto;
}

#main-menu-modal::backdrop {
  background-color: blueviolet;
}

#menu-modal,
#coin-flip-modal {
  padding-inline: 10px;
  margin-top: 20vh;
}

#coin-flip-modal::backdrop {
  background-color: goldenrod;
}

#coin-flip {
  text-align: center;
}

#choice-container {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

#menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-inline: 30px;
}

#close {
  position: absolute;
  right: 5px;
}

#title {
  font-weight: bolder;
  font-size: 65px;
  text-align: center;
}

#top-section {
  display: flex;
  position: relative;
  justify-content: space-between;
}

.name {
  font-size: xx-large;
  font-style: italic;
  text-decoration: underline pink;
  text-underline-offset: 8px;
  margin-inline: 20px;
}

#announcement {
  font-weight: bold;
  font-size: xx-large;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#menu-button {
  position: fixed;
  top: 5px;
  left: 5px;
}

#restart-button,
#menu-button,
#place-button #turn-button {
  padding-block: 5px;
  max-width: 100px;
  border-radius: 4px;
  background-color: bisque;
}

#turn-button-container {
  display: flex;
  justify-content: center;
}

#board-section {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
}

.board {
  position: relative;
}

#overlay-1,
#overlay-2 {
  visibility: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.overlay:hover {
  cursor: not-allowed;
}

.row {
  display: flex;
  flex-direction: row;
  min-height: 10px;
}

.space {
  background-color: aqua;
  border: black solid 2px;
  border-top: 0px;
  border-left: 0px;
  aspect-ratio: 1 / 1;
  min-width: 30px;
  max-height: 40px;
}

.space.top {
  border-top: black solid 2px;
}

.space.left {
  border-left: black solid 2px;
}

.space.selected {
  background-color: gold;
}

.space.hoverable:hover {
  opacity: 30%;
  background-color: gold;
  cursor: pointer;
}

.space.ship {
  background-color: gray;
}

.space.hit {
  background: repeating-linear-gradient(
    45deg,
    red,
    red 4px,
    aqua 4px,
    aqua 7px
  );
}

.space.miss {
  background: repeating-linear-gradient(
    135deg,
    lightgrey,
    lightgrey 5px,
    white 5px,
    white 10px
  );
}

.space.hit:hover,
.space.miss:hover {
  cursor: not-allowed;
}

#border {
  border-inline: orangered solid 5px;
  height: 100%;
}

#ships-container {
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 10vh;
}

#carrier,
#battleship,
#destroyer,
#submarine,
#patrol-boat {
  display: flex;
  position: absolute;
}

#carrier.vertical,
#battleship.vertical,
#destroyer.vertical,
#submarine.vertical,
#patrol-boat.vertical {
  flex-direction: column;
}

#carrier {
  left: 5vw;
}

#battleship {
  left: 30vw;
}

#destroyer {
  left: 55vw;
}

#submarine {
  left: 72vw;
}

#patrol-boat {
  left: 90vw;
}

#carrier:hover,
#battleship:hover,
#destroyer:hover,
#submarine:hover,
#patrol-boat:hover {
  opacity: 60%;
  cursor: move;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,+BAA+B;EAC/B,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;;;;;;GAMC;AACH;;AAEA;EACE;;;;;;GAMC;AACH;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;;;;EAKE,aAAa;EACb,kBAAkB;AACpB;;AAEA;;;;;EAKE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;;;;;EAKE,YAAY;EACZ,YAAY;AACd","sourcesContent":["body {\n  background-color: darkseagreen;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 5px;\n  position: relative;\n}\n\ndialog {\n  margin: auto;\n}\n\n#main-menu-modal::backdrop {\n  background-color: blueviolet;\n}\n\n#menu-modal,\n#coin-flip-modal {\n  padding-inline: 10px;\n  margin-top: 20vh;\n}\n\n#coin-flip-modal::backdrop {\n  background-color: goldenrod;\n}\n\n#coin-flip {\n  text-align: center;\n}\n\n#choice-container {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-inline: 30px;\n}\n\n#close {\n  position: absolute;\n  right: 5px;\n}\n\n#title {\n  font-weight: bolder;\n  font-size: 65px;\n  text-align: center;\n}\n\n#top-section {\n  display: flex;\n  position: relative;\n  justify-content: space-between;\n}\n\n.name {\n  font-size: xx-large;\n  font-style: italic;\n  text-decoration: underline pink;\n  text-underline-offset: 8px;\n  margin-inline: 20px;\n}\n\n#announcement {\n  font-weight: bold;\n  font-size: xx-large;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#menu-button {\n  position: fixed;\n  top: 5px;\n  left: 5px;\n}\n\n#restart-button,\n#menu-button,\n#place-button #turn-button {\n  padding-block: 5px;\n  max-width: 100px;\n  border-radius: 4px;\n  background-color: bisque;\n}\n\n#turn-button-container {\n  display: flex;\n  justify-content: center;\n}\n\n#board-section {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.board {\n  position: relative;\n}\n\n#overlay-1,\n#overlay-2 {\n  visibility: hidden;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.overlay:hover {\n  cursor: not-allowed;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  min-height: 10px;\n}\n\n.space {\n  background-color: aqua;\n  border: black solid 2px;\n  border-top: 0px;\n  border-left: 0px;\n  aspect-ratio: 1 / 1;\n  min-width: 30px;\n  max-height: 40px;\n}\n\n.space.top {\n  border-top: black solid 2px;\n}\n\n.space.left {\n  border-left: black solid 2px;\n}\n\n.space.selected {\n  background-color: gold;\n}\n\n.space.hoverable:hover {\n  opacity: 30%;\n  background-color: gold;\n  cursor: pointer;\n}\n\n.space.ship {\n  background-color: gray;\n}\n\n.space.hit {\n  background: repeating-linear-gradient(\n    45deg,\n    red,\n    red 4px,\n    aqua 4px,\n    aqua 7px\n  );\n}\n\n.space.miss {\n  background: repeating-linear-gradient(\n    135deg,\n    lightgrey,\n    lightgrey 5px,\n    white 5px,\n    white 10px\n  );\n}\n\n.space.hit:hover,\n.space.miss:hover {\n  cursor: not-allowed;\n}\n\n#border {\n  border-inline: orangered solid 5px;\n  height: 100%;\n}\n\n#ships-container {\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  margin-bottom: 10vh;\n}\n\n#carrier,\n#battleship,\n#destroyer,\n#submarine,\n#patrol-boat {\n  display: flex;\n  position: absolute;\n}\n\n#carrier.vertical,\n#battleship.vertical,\n#destroyer.vertical,\n#submarine.vertical,\n#patrol-boat.vertical {\n  flex-direction: column;\n}\n\n#carrier {\n  left: 5vw;\n}\n\n#battleship {\n  left: 30vw;\n}\n\n#destroyer {\n  left: 55vw;\n}\n\n#submarine {\n  left: 72vw;\n}\n\n#patrol-boat {\n  left: 90vw;\n}\n\n#carrier:hover,\n#battleship:hover,\n#destroyer:hover,\n#submarine:hover,\n#patrol-boat:hover {\n  opacity: 60%;\n  cursor: move;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/otherJs/boardDOM.js":
/*!*********************************!*\
  !*** ./src/otherJs/boardDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAllSpaceClickEvents: () => (/* binding */ addAllSpaceClickEvents),
/* harmony export */   clearBoard: () => (/* binding */ clearBoard),
/* harmony export */   updateBoard: () => (/* binding */ updateBoard)
/* harmony export */ });
/* harmony import */ var _findClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findClass.js */ "./src/otherJs/findClass.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/otherJs/player.js");



function addAllSpaceClickEvents() {
  const board1 = document.getElementById("board-1");
  const board2 = document.getElementById("board-2");

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      addSpaceClick(_player_js__WEBPACK_IMPORTED_MODULE_1__.player1, board1.children[row].children[col], [row, col]);
      addSpaceClick(_player_js__WEBPACK_IMPORTED_MODULE_1__.player2, board2.children[row].children[col], [row, col]);
    }
  }
}

function addSpaceClick(targetPlayer, space, coord) {
  const currentPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(targetPlayer);
  space.classList.add("hoverable");
  space.addEventListener("click", (e) => {
    if (
      targetPlayer.shootable &&
      !targetPlayer.area.board[coord[0]][coord[1]].shot
    ) {
      const turnButton = document.getElementById("turn-button");
      turnButton.style.backgroundColor = "bisque";

      currentPlayer.didAction = true;
      clearBoard(targetPlayer);
      targetPlayer.area.board[coord[0]][coord[1]].selected = true;
      updateBoard(targetPlayer);
    }
  });
}

function updateBoard(player) {
  const boardDiv = document.getElementById(`board-${player.number}`);
  const board = player.area.board;
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const space = board[row][col];

      if (space.selected) {
        boardDiv.children[row].children[col].classList.add("selected");
      }

      if (
        space.occupied &&
        !(0,_findClass_js__WEBPACK_IMPORTED_MODULE_0__.spaceHasClass)(boardDiv, row, col, "ship") &&
        !player.shootable
      ) {
        boardDiv.children[row].children[col].classList.add("ship");
      }

      if (
        space.shot &&
        !space.missed &&
        !(0,_findClass_js__WEBPACK_IMPORTED_MODULE_0__.spaceHasClass)(boardDiv, row, col, "hit")
      ) {
        boardDiv.children[row].children[col].classList.add("hit");
      }

      if (space.missed && !(0,_findClass_js__WEBPACK_IMPORTED_MODULE_0__.spaceHasClass)(boardDiv, row, col, "miss")) {
        boardDiv.children[row].children[col].classList.add("miss");
      }
    }
  }
}

function clearBoard(player) {
  const boardDiv = document.getElementById(`board-${player.number}`);
  const board = player.area.board;

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      board[row][col].selected = false;
      boardDiv.children[row].children[col].classList.remove("selected");
      boardDiv.children[row].children[col].classList.remove("ship");
    }
  }
}




/***/ }),

/***/ "./src/otherJs/classes.js":
/*!********************************!*\
  !*** ./src/otherJs/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  #length;
  #hits;
  constructor(length, name) {
    this.#length = length;
    this.#hits = 0;
    this.sunk = false;
    this.name = name;
  }

  get length() {
    return this.#length;
  }
  get hits() {
    return this.#hits;
  }

  hit() {
    if (!this.sunk) {
      this.#hits++;
      this.#isSunk();
    }
  }
  #isSunk() {
    if (this.#hits === this.#length) {
      this.sunk = true;
    }
  }
}

class Space {
  constructor() {
    this.occupant = null;
    this.occupied = false;
    this.shot = false;
    this.missed = null;
    this.selected = false;
  }
}

class GameBoard {
  #board;
  #shipCount;
  #sunkCount;
  constructor() {
    this.#board = this.createBoard(10);
    this.#shipCount = 0;
    this.#sunkCount = 0;
  }

  get board() {
    return this.#board;
  }

  get shipCount() {
    return this.#shipCount;
  }

  createBoard(boardSize) {
    let arr = new Array(boardSize);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(boardSize);
      for (let j = 0; j < arr.length; j++) {
        arr[i][j] = new Space();
      }
    }

    return arr;
  }
  place(ship, coord, isVertical, shipName) {
    if (
      this.hasRoom(ship, coord, isVertical) &&
      !this.isOccupied(ship, coord, isVertical, shipName)
    ) {
      if (this.doesShipExistOnBoard(shipName)) {
        this.removeShip(shipName);
      }

      for (let i = 0; i < ship.length; i++) {
        if (isVertical) {
          this.#board[coord[0] + i][coord[1]].occupied = true;
          this.#board[coord[0] + i][coord[1]].occupant = ship;
        } else {
          this.#board[coord[0]][coord[1] + i].occupied = true;
          this.#board[coord[0]][coord[1] + i].occupant = ship;
        }
      }

      this.#shipCount++;
      return true;
    }

    return false;
  }
  doesShipExistOnBoard(shipName) {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.#board[row][col].occupied) {
          if (this.#board[row][col].occupant.name === shipName) {
            return true;
          }
        }
      }
    }

    return false;
  }
  removeShip(shipName) {
    this.#shipCount--;
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.#board[row][col].occupied) {
          if (this.#board[row][col].occupant.name === shipName) {
            this.#board[row][col].occupied = false;
            this.#board[row][col].occupant = null;
          }
        }
      }
    }
  }
  hasRoom(ship, coord, isVertical) {
    if (isVertical) {
      if (coord[0] + ship.length > 10) {
        return false;
      }

      return true;
    }

    if (coord[1] + ship.length > 10) {
      return false;
    }

    return true;
  }
  isOccupied(ship, coord, isVertical, shipName) {
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (this.#board[coord[0] + i][coord[1]].occupied) {
          if (this.#board[coord[0] + i][coord[1]].occupant.name !== shipName) {
            return true;
          }
        }
      } else if (this.#board[coord[0]][coord[1] + i].occupied) {
        if (this.#board[coord[0]][coord[1] + i].occupant.name !== shipName) {
          return true;
        }
      }
    }

    return false;
  }
  receiveAttack(coord) {
    if (this.#board[coord[0]][coord[1]].occupied) {
      const ship = this.#board[coord[0]][coord[1]].occupant;
      ship.hit();
      this.#board[coord[0]][coord[1]].missed = false;

      if (ship.sunk) {
        this.#sunkCount++;
      }
    } else {
      this.#board[coord[0]][coord[1]].missed = true;
    }

    this.#board[coord[0]][coord[1]].shot = true;
  }
  hasShips() {
    if (this.#shipCount === this.#sunkCount) {
      return false;
    }

    return true;
  }
}

class Player {
  #isComputer;
  #name;
  #area;
  #number;
  constructor(number, isComputer, name = `Computer ${number}`) {
    this.#number = number;
    this.#isComputer = isComputer;
    this.#name = name;
    this.#area = new GameBoard();
    this.shootable = false;
    this.didAction = false;
    this.hasHit = false;
    this.lastHitCoord = [];
  }

  get number() {
    return this.#number;
  }

  get name() {
    return this.#name;
  }

  get area() {
    return this.#area;
  }

  get isComputer() {
    return this.#isComputer;
  }

  reset() {
    this.#area = new GameBoard();
    this.shootable = false;
    this.didAction = false;
    this.hasHit = false;
    this.lastHitCoord = [];
  }
}




/***/ }),

/***/ "./src/otherJs/coords.js":
/*!*******************************!*\
  !*** ./src/otherJs/coords.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomCoord: () => (/* binding */ getRandomCoord),
/* harmony export */   isOutOfBounds: () => (/* binding */ isOutOfBounds)
/* harmony export */ });
function getRandomCoord() {
  const randomRow = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);

  return [randomRow, randomCol];
}

function isOutOfBounds(coord, direction) {
  let conclusion;
  switch (direction) {
    case "top":
      conclusion = coord[0] - 1 < 0 || coord[0] - 1 == 9;
      break;
    case "left":
      conclusion = coord[1] - 1 < 0 || coord[1] - 1 == 9;
      break;
    case "bottom":
      conclusion = coord[0] + 1 == 0 || coord[0] + 1 > 9;
      break;
    case "right":
      conclusion = coord[1] + 1 == 0 || coord[1] + 1 > 9;
      break;
  }

  return conclusion;
}




/***/ }),

/***/ "./src/otherJs/dragShips.js":
/*!**********************************!*\
  !*** ./src/otherJs/dragShips.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAllRotateClick: () => (/* binding */ addAllRotateClick),
/* harmony export */   addDragAllShips: () => (/* binding */ addDragAllShips),
/* harmony export */   removeAllShips: () => (/* binding */ removeAllShips),
/* harmony export */   resetShipPositions: () => (/* binding */ resetShipPositions),
/* harmony export */   returnShipLengthBasedOnName: () => (/* binding */ returnShipLengthBasedOnName)
/* harmony export */ });
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDOM */ "./src/otherJs/boardDOM.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/otherJs/classes.js");



function addDragShip(shipDiv, boardDiv, player) {
  let ogOffsetX, ogOffsetY, offsetX, offsetY;
  const move = (e) => {
    shipDiv.style.left = `${e.clientX - offsetX}px`;
    shipDiv.style.top = `${e.clientY - offsetY}px`;
    shipDiv.style.zIndex = 1;
  };

  shipDiv.addEventListener("mousedown", (e) => {
    //top property relative to parent (ships) container, so change relative to body (default) like offset
    const ships = document.getElementById("ships-container");
    ships.style.position = "initial";

    ogOffsetX = shipDiv.offsetLeft;
    ogOffsetY = shipDiv.offsetTop;
    //want offset from shipDiv and clientX, not targetNode (space) and clientX
    offsetX = e.clientX - shipDiv.offsetLeft;
    offsetY = e.clientY - shipDiv.offsetTop;
    shipDiv.style.border = "5px solid red";
    window.addEventListener("mousemove", move);
  });

  shipDiv.addEventListener("mouseup", (e) => {
    window.removeEventListener("mousemove", move);
    shipDiv.style.removeProperty("z-index");
    shipDiv.style.removeProperty("border");

    const topEdgeAndIndex = findNearestYSpaceEdge(
      shipDiv.style.top,
      boardDiv,
      player
    );
    shipDiv.style.top = `${topEdgeAndIndex[0]}px`;

    const leftEdgeAndIndex = findNearestXSpaceEdge(
      shipDiv.style.left,
      boardDiv,
      player
    );
    shipDiv.style.left = `${leftEdgeAndIndex[0]}px`;

    const shipName = shipDiv.getAttribute("id");
    const shipLength = returnShipLengthBasedOnName(shipName);
    const coords = [topEdgeAndIndex[1], leftEdgeAndIndex[1]];
    const isVertical = shipDiv.classList.contains("vertical");
    const isPlaced = player.area.place(
      new _classes__WEBPACK_IMPORTED_MODULE_1__.Ship(shipLength, shipName),
      coords,
      isVertical,
      shipName
    );
    if (!isPlaced) {
      shipDiv.style.top = `${ogOffsetY}px`;
      shipDiv.style.left = `${ogOffsetX}px`;
    }
    (0,_boardDOM__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(player);
    (0,_boardDOM__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(player);

    if (player.area.shipCount === 5) {
      const placeButton = document.getElementById("place-button");
      placeButton.style.backgroundColor = "bisque";
    }
  });
}

function returnShipLengthBasedOnName(shipName) {
  switch (shipName) {
    case "carrier":
      return 5;
    case "battleship":
      return 4;
    case "destroyer":
      return 3;
    case "submarine":
      return 3;
    case "patrol-boat":
      return 2;
  }
}

//when moving ship out of window, slightly off grid
function findNearestXSpaceEdge(offsetX, board) {
  let edgeAndIndex = [];
  const currentShipPos = parseInt(offsetX);
  const row = board.querySelector(".row");
  const firstSpace = row.children[0];
  let currentSpaceLeftEdge = firstSpace.getBoundingClientRect().left;
  let currentSpaceRightEdge = currentSpaceLeftEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceLeftEdge = currentSpaceRightEdge;
    currentSpaceRightEdge = row.children[i].getBoundingClientRect().left;
    if (currentSpaceRightEdge > currentShipPos) {
      edgeAndIndex = findClosestEdge(
        currentShipPos,
        currentSpaceLeftEdge,
        currentSpaceRightEdge,
        i
      );
      return edgeAndIndex;
    }
  }

  //inner spaces have no left border (2px wide) so have to adjust since ship does have left border
  //also right edge since ship "placed" on 2nd to last space's right edge
  edgeAndIndex.push(currentSpaceRightEdge - 2);
  edgeAndIndex.push(9);
  return edgeAndIndex;
}

//when moving ship out of window, slightly off grid
function findNearestYSpaceEdge(offsetY, board) {
  const ships = document.getElementById("ships-container");
  ships.style.position = "initial";

  let edgeAndIndex = [];
  const currentShipPos = parseInt(offsetY);
  const firstSpace = board.children[0];
  let currentSpaceTopEdge = firstSpace.getBoundingClientRect().top;
  let currentSpaceBottomEdge = currentSpaceTopEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceTopEdge = currentSpaceBottomEdge;
    currentSpaceBottomEdge = board.children[i].getBoundingClientRect().top;
    if (currentSpaceBottomEdge > currentShipPos) {
      edgeAndIndex = findClosestEdge(
        currentShipPos,
        currentSpaceTopEdge,
        currentSpaceBottomEdge,
        i
      );
      return edgeAndIndex;
    }
  }

  //inner spaces have no top border (2px wide) so have to adjust since ship does have topp border
  //also bot edge since ship "placed" on 2nd to last space's bot edge
  edgeAndIndex.push(currentSpaceBottomEdge - 2);
  edgeAndIndex.push(9);
  return edgeAndIndex;
}

//inner spaces have no left/top border (2px wide) so have to adjust since ship does have left/top border
function findClosestEdge(
  currentShipPos,
  leftOrTopEdge,
  rightOrBottomEdge,
  spaceIndex
) {
  const edgeAndIndex = [];
  const distanceFromRightOrBottom = rightOrBottomEdge - currentShipPos;
  //9 "feels" closer to middle this way rather than 4 (prob bcz red (5px) border)
  const distanceFromLeftOrTop = currentShipPos - leftOrTopEdge + 9;
  if (distanceFromRightOrBottom < distanceFromLeftOrTop) {
    edgeAndIndex.push(rightOrBottomEdge - 2);
    edgeAndIndex.push(spaceIndex);
    return edgeAndIndex;
  }

  //first col have left border so no need adjusting
  if (spaceIndex === 0 || spaceIndex === 1) {
    edgeAndIndex.push(leftOrTopEdge);
    edgeAndIndex.push(0);
    return edgeAndIndex;
  }

  //spaceIndex - 1 since spaceIndex is if rightOrBottomEdge is set to ship's leftOrTopEdge
  edgeAndIndex.push(leftOrTopEdge - 2);
  edgeAndIndex.push(spaceIndex - 1);
  return edgeAndIndex;
}

function addDragAllShips(boardDiv, player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addDragShip(carrier, boardDiv, player);
  addDragShip(battleship, boardDiv, player);
  addDragShip(destroyer, boardDiv, player);
  addDragShip(submarine, boardDiv, player);
  addDragShip(patrolBoat, boardDiv, player);
}

function removeAllShips() {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  carrier.style.display = "none";
  battleship.style.display = "none";
  destroyer.style.display = "none";
  submarine.style.display = "none";
  patrolBoat.style.display = "none";
}

function resetShipPositions(player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  resetShipH(carrier);
  resetShipH(battleship);
  resetShipH(destroyer);
  resetShipH(submarine);
  resetShipH(patrolBoat);

  const boardDiv = document.getElementById(`board-${player.number}`);
  setAllShipsToH(boardDiv, player);
}

function setAllShipsToH(boardDiv, player) {
  const shipNameList = [
    "carrier",
    "battleship",
    "destroyer",
    "submarine",
    "patrol-boat",
  ];
  for (let i = 0; i < 5; i++) {
    //bcz setRotate deletes and clones, have to reget the id
    const shipDiv = document.getElementById(`${shipNameList[i]}`);
    if (shipDiv.classList.contains("vertical")) {
      setRotate(shipDiv, boardDiv, player);
    }
  }
}

function resetShipH(shipDiv) {
  const shipName = shipDiv.getAttribute("id");
  //empty since it was initially empty and not 0px (top/bot changes ship size)
  shipDiv.style.top = "";

  switch (shipName) {
    case "carrier":
      const carrier = document.getElementById("carrier");
      carrier.style.left = "5vw";
      break;
    case "battleship":
      const battleship = document.getElementById("battleship");
      battleship.style.left = "30vw";
      break;
    case "destroyer":
      const destroyer = document.getElementById("destroyer");
      destroyer.style.left = "55vw";
      break;
    case "submarine":
      const submarine = document.getElementById("submarine");
      submarine.style.left = "72vw";
      break;
    case "patrol-boat":
      const patrolBoat = document.getElementById("patrol-boat");
      patrolBoat.style.left = "90vw";
      break;
  }
}

function resetShipV(shipDiv) {
  const shipName = shipDiv.getAttribute("id");
  const shipsContainer = document.getElementById("ships-container");
  shipsContainer.style.position = "initial";
  shipDiv.style.top = "300px";

  switch (shipName) {
    case "carrier":
      const carrier = document.getElementById("carrier");
      carrier.style.left = "1vw";
      break;
    case "battleship":
      const battleship = document.getElementById("battleship");
      battleship.style.left = "42vw";
      break;
    case "destroyer":
      const destroyer = document.getElementById("destroyer");
      destroyer.style.left = "51vw";
      break;
    case "submarine":
      const submarine = document.getElementById("submarine");
      submarine.style.left = "56vw";
      break;
    case "patrol-boat":
      const patrolBoat = document.getElementById("patrol-boat");
      patrolBoat.style.left = "96vw";
      break;
  }
}

function setRotate(ship, boardDiv, player) {
  const shipName = ship.getAttribute("id");
  const shipLength = returnShipLengthBasedOnName(shipName);

  const isVertical = ship.classList.contains("vertical");
  if (isVertical) {
    ship.classList.remove("vertical");
    resetShipH(ship);
    for (let i = 0; i < shipLength; i++) {
      if (i !== 0) {
        ship.children[i].classList.add("top");
        ship.children[i].classList.remove("left");
      }
    }
  } else {
    ship.classList.add("vertical");
    resetShipV(ship);
    for (let i = 0; i < shipLength; i++) {
      if (i !== 0) {
        ship.children[i].classList.remove("top");
        ship.children[i].classList.add("left");
      }
    }
  }

  const shipsContainer = document.getElementById("ships-container");
  shipsContainer.replaceWith(shipsContainer.cloneNode(true));
  addDragAllShips(boardDiv, player);
  addAllRotateClick(boardDiv, player);
}

function addRotateClick(shipDiv, boardDiv, player) {
  shipDiv.addEventListener("dblclick", (e) => {
    setRotate(shipDiv, boardDiv, player);
  });
}

function addAllRotateClick(boardDiv, player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addRotateClick(carrier, boardDiv, player);
  addRotateClick(battleship, boardDiv, player);
  addRotateClick(destroyer, boardDiv, player);
  addRotateClick(submarine, boardDiv, player);
  addRotateClick(patrolBoat, boardDiv, player);
}




/***/ }),

/***/ "./src/otherJs/findClass.js":
/*!**********************************!*\
  !*** ./src/otherJs/findClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findSelected: () => (/* binding */ findSelected),
/* harmony export */   spaceHasClass: () => (/* binding */ spaceHasClass)
/* harmony export */ });
function findSelected(player) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (player.area.board[row][col].selected === true) {
        return [row, col];
      }
    }
  }
}

function spaceHasClass(boardDiv, row, col, className) {
  const rowsDiv = boardDiv.children;
  if (rowsDiv[row].children[col].classList.contains(`${className}`)) {
    return true;
  }

  return false;
}




/***/ }),

/***/ "./src/otherJs/form.js":
/*!*****************************!*\
  !*** ./src/otherJs/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDynamicPlayerNameInputForm: () => (/* binding */ addDynamicPlayerNameInputForm),
/* harmony export */   addRestartButtonFunctionality: () => (/* binding */ addRestartButtonFunctionality),
/* harmony export */   addReturnButtonFunctonality: () => (/* binding */ addReturnButtonFunctonality),
/* harmony export */   addStartButtonFunctionality: () => (/* binding */ addStartButtonFunctionality)
/* harmony export */ });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/otherJs/modal.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/otherJs/game.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/otherJs/player.js");




function submitStartGameForm(form) {
  const formData = new FormData(form);
  const player1Name = formData.get("player-1-name");
  const player2Name = formData.get("player-2-name");
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");
  const isP1Computer = checkIfComputerWithForm(player1Input, formData);
  const isP2Computer = checkIfComputerWithForm(player2Input, formData);
  (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.createPlayers)(player1Name, player2Name, isP1Computer, isP2Computer);

  const mainMenu = document.getElementById("main-menu-modal");
  mainMenu.close();
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.openCoinFlipModal)();
}

function addStartButtonFunctionality() {
  const startButton = document.getElementById("start-game-button");
  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("main-menu");
    submitStartGameForm(form);
  });
}

function addRestartButtonFunctionality() {
  const menu = document.getElementById("menu-modal");
  menu.close();

  const restartButtons = document.querySelectorAll(".restart-button");
  restartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      restartGame();
    });
  });
}

function restartGame() {
  (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.clearGame)();
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.openCoinFlipModal)();
}

function addReturnButtonFunctonality() {
  const returnButton = document.getElementById("return-home-button");
  returnButton.addEventListener("click", (e) => {
    const mainMenu = document.getElementById("main-menu-modal");
    mainMenu.showModal();
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.clearGame)();
  });
}

function addDynamicPlayerNameInputForm() {
  const modeSelection = document.getElementById("mode-selection");
  modeSelection.addEventListener("change", (e) => {
    const player1Input = document.getElementById("player-1-input");
    const player2Input = document.getElementById("player-2-input");
    switch (modeSelection.value) {
      case "PvP":
        player1Input.style.display = "block";
        player2Input.style.display = "block";
        break;
      case "PvC":
        player1Input.style.display = "block";
        player2Input.style.display = "none";
        break;
      case "CvP":
        player1Input.style.display = "none";
        player2Input.style.display = "block";
        break;
      case "CvC":
        player1Input.style.display = "none";
        player2Input.style.display = "none";
        break;
    }
  });
}

function checkIfComputerWithForm(player, formData) {
  const mode = formData.get("mode");
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");

  switch (mode) {
    case "PvP":
      return false;
    case "PvC":
      if (player === player1Input) {
        return false;
      }
      return true;
    case "CvP":
      if (player === player2Input) {
        return false;
      }
      return true;
    case "CvC":
      return true;
  }
}




/***/ }),

/***/ "./src/otherJs/game.js":
/*!*****************************!*\
  !*** ./src/otherJs/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearGame: () => (/* binding */ clearGame),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _boardDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDOM.js */ "./src/otherJs/boardDOM.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/otherJs/player.js");
/* harmony import */ var _coords_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coords.js */ "./src/otherJs/coords.js");
/* harmony import */ var _findClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findClass.js */ "./src/otherJs/findClass.js");
/* harmony import */ var _dragShips_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragShips.js */ "./src/otherJs/dragShips.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes.js */ "./src/otherJs/classes.js");







function startTurn(player) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${player.name}'s Turn`;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.backgroundColor = "lightgray";

  const targetPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(player);
  player.shootable = false;
  targetPlayer.shootable = true;
  player.didAction = false;
  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(player);
  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(targetPlayer);
  showAndHideOverlay(player, targetPlayer);

  if (player.isComputer) {
    computerShoot(targetPlayer);
  }
}

function showAndHideOverlay(currentPlayer, targetPlayer) {
  const currentPlayerOverlay = document.getElementById(
    `overlay-${currentPlayer.number}`
  );
  const targetPlayerOverlay = document.getElementById(
    `overlay-${targetPlayer.number}`
  );
  currentPlayerOverlay.style.visibility = "visible";
  targetPlayerOverlay.style.visibility = "hidden";
}

function computerShoot(targetPlayer) {
  const computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(targetPlayer);
  if (computer.hasHit || computer.lastHitCoord.length > 0) {
    //idk what the problem cause is, so hardcoded solution (maybe fixed accidently, but not risking it)
    if (
      computer.lastHitCoord.length > 0 == false &&
      targetPlayer.area.hasShips()
    ) {
      computer.hasHit = false;
      startTurn(targetPlayer);
      return;
    }
    computerShootAdjacent(
      targetPlayer,
      computer.lastHitCoord[computer.lastHitCoord.length - 1]
    );
    return;
  }

  let randomCoord = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.getRandomCoord)();
  while (targetPlayer.area.board[randomCoord[0]][randomCoord[1]].shot) {
    randomCoord = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.getRandomCoord)();
  }
  shoot(targetPlayer, randomCoord);
}

function computerShootAdjacent(targetPlayer, coord) {
  if (!(0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.isOutOfBounds)(coord, "top")) {
    if (!targetPlayer.area.board[coord[0] - 1][coord[1]].shot) {
      shoot(targetPlayer, [coord[0] - 1, coord[1]]);
      return;
    }
  }

  if (!(0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.isOutOfBounds)(coord, "left")) {
    if (!targetPlayer.area.board[coord[0]][coord[1] - 1].shot) {
      shoot(targetPlayer, [coord[0], coord[1] - 1]);
      return;
    }
  }

  if (!(0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.isOutOfBounds)(coord, "bottom")) {
    if (!targetPlayer.area.board[coord[0] + 1][coord[1]].shot) {
      shoot(targetPlayer, [coord[0] + 1, coord[1]]);
      return;
    }
  }

  if (!(0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.isOutOfBounds)(coord, "right")) {
    if (!targetPlayer.area.board[coord[0]][coord[1] + 1].shot) {
      shoot(targetPlayer, [coord[0], coord[1] + 1]);
      return;
    }
  }

  //no more adjacent spaces to shoot
  const computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(targetPlayer);
  computer.lastHitCoord.pop();
  computerShoot(targetPlayer);
}

function shoot(targetPlayer, coord) {
  const currentPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(targetPlayer);
  targetPlayer.area.receiveAttack(coord);
  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(targetPlayer);

  if (!targetPlayer.area.hasShips()) {
    endGame(currentPlayer, targetPlayer);
    return;
  }

  if (!targetPlayer.area.board[coord[0]][coord[1]].missed) {
    currentPlayer.lastHitCoord.push(coord);
    currentPlayer.hasHit = true;
    startTurn(currentPlayer);
  } else {
    currentPlayer.hasHit = false;
    startTurn(targetPlayer);
  }
}

function endGame(winner, loser) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${winner.name} Wins!`;

  const winnerOverlay = document.getElementById(`overlay-${winner.number}`);
  winnerOverlay.style.visibility = "hidden";

  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(winner);
  loser.shootable = false;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.display = "none";

  const turnButtonContainer = document.getElementById("turn-button-container");
  const restartButton = turnButtonContainer.querySelector(".restart-button");
  restartButton.style.display = "block";
}

function clearGame() {
  _player_js__WEBPACK_IMPORTED_MODULE_1__.player1.reset();
  _player_js__WEBPACK_IMPORTED_MODULE_1__.player2.reset();
  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(_player_js__WEBPACK_IMPORTED_MODULE_1__.player1);
  (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(_player_js__WEBPACK_IMPORTED_MODULE_1__.player2);
  const boardDiv1 = document.getElementById(`board-1`);
  const boardDiv2 = document.getElementById(`board-2`);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      boardDiv1.children[row].children[col].classList.remove("miss");
      boardDiv1.children[row].children[col].classList.remove("hit");
      boardDiv2.children[row].children[col].classList.remove("miss");
      boardDiv2.children[row].children[col].classList.remove("hit");
    }
  }
}

function endTurn(player) {
  const targetPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(player);
  const coord = (0,_findClass_js__WEBPACK_IMPORTED_MODULE_3__.findSelected)(targetPlayer);
  shoot(targetPlayer, coord);
}

function addEndTurnClick() {
  const turnButton = document.getElementById("turn-button");

  turnButton.addEventListener("click", (e) => {
    const currentPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findCurrentPlayer)();
    const targetPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(currentPlayer);
    if (currentPlayer.didAction && targetPlayer.area.hasShips()) {
      endTurn(currentPlayer);
    }
  });
}

function startGame(firstPlayer) {
  const player1Title = document.getElementById("player-1");
  const player2Title = document.getElementById("player-2");
  player1Title.textContent = `${_player_js__WEBPACK_IMPORTED_MODULE_1__.player1.name}`;
  player2Title.textContent = `${_player_js__WEBPACK_IMPORTED_MODULE_1__.player2.name}`;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.display = "none";
  const turnButtonContainer = document.getElementById("turn-button-container");
  const restartButton = turnButtonContainer.querySelector(".restart-button");
  restartButton.style.display = "none";

  addPlaceTurnClick();
  placeTurn(firstPlayer);
}

function placeTurn(player) {
  if (player.isComputer) {
    computerRandomPlaceAll(player);

    const otherPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(player);
    if (otherPlayer.area.shipCount === 5) {
      const turnButton = document.getElementById("turn-button");
      turnButton.style.display = "block";
      const placeButton = document.getElementById("place-button");
      placeButton.style.display = "none";
      (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.addAllSpaceClickEvents)();
      addEndTurnClick();
      (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.removeAllShips)();
      startTurn(otherPlayer);
      return;
    }

    (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(player);
    placeTurn(otherPlayer);
    return;
  }

  const announcement = document.getElementById("announcement");
  announcement.textContent = `${player.name}'s Turn`;

  const placeButton = document.getElementById("place-button");
  placeButton.style.backgroundColor = "lightgray";

  const boardDiv = document.getElementById(`board-${player.number}`);
  (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.addDragAllShips)(boardDiv, player);
  (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.addAllRotateClick)(boardDiv, player);

  const otherPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(player);
  showAndHideOverlay(otherPlayer, player);

  //getCurrent checks which player is shootable
  player.shootable = false;
  otherPlayer.shootable = true;
}

function computerRandomPlaceAll(computer) {
  computerRandomPlace(computer, "carrier");
  computerRandomPlace(computer, "battleship");
  computerRandomPlace(computer, "destroyer");
  computerRandomPlace(computer, "submarine");
  computerRandomPlace(computer, "patrol-boat");
}

function computerRandomPlace(computer, shipName) {
  const shipLength = (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.returnShipLengthBasedOnName)(shipName);
  let randomCoord = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.getRandomCoord)();
  const random = Math.floor(Math.random() * 2);
  const isVertical = random === 0 ? true : false;
  let hasPlaced = computer.area.place(
    new _classes_js__WEBPACK_IMPORTED_MODULE_5__.Ship(shipLength, shipName),
    randomCoord,
    isVertical,
    shipName
  );

  while (!hasPlaced) {
    randomCoord = (0,_coords_js__WEBPACK_IMPORTED_MODULE_2__.getRandomCoord)();
    hasPlaced = computer.area.place(
      new _classes_js__WEBPACK_IMPORTED_MODULE_5__.Ship(shipLength, shipName),
      randomCoord,
      isVertical,
      shipName
    );
  }
}

function addPlaceTurnClick() {
  const shipsContainer = document.getElementById("ships-container");
  const placeButton = document.getElementById("place-button");
  placeButton.addEventListener("click", (e) => {
    const currentPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findCurrentPlayer)();
    const otherPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.findOtherPlayer)(currentPlayer);
    if (currentPlayer.area.shipCount === 5) {
      //otherPlayer has placed already
      if (otherPlayer.area.shipCount === 5) {
        const turnButton = document.getElementById("turn-button");
        turnButton.style.display = "block";
        placeButton.style.display = "none";
        (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.addAllSpaceClickEvents)();
        addEndTurnClick();
        (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.removeAllShips)();
        startTurn(otherPlayer);
        return;
      }

      //replace gets rid of event listener
      (0,_dragShips_js__WEBPACK_IMPORTED_MODULE_4__.resetShipPositions)(currentPlayer);
      shipsContainer.replaceWith(shipsContainer.cloneNode(true));
      (0,_boardDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(currentPlayer);
      placeTurn(otherPlayer);
    }
  });
}




/***/ }),

/***/ "./src/otherJs/modal.js":
/*!******************************!*\
  !*** ./src/otherJs/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCloseButtonFunctionality: () => (/* binding */ addCloseButtonFunctionality),
/* harmony export */   addMenuButtonFunctionality: () => (/* binding */ addMenuButtonFunctionality),
/* harmony export */   disableMostEscModal: () => (/* binding */ disableMostEscModal),
/* harmony export */   openCoinFlipModal: () => (/* binding */ openCoinFlipModal)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/otherJs/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/otherJs/game.js");



function addCloseButtonFunctionality() {
  const menuModal = document.getElementById("menu-modal");
  const closeButton = document.getElementById("close");
  closeButton.addEventListener("click", (e) => {
    menuModal.close();
  });
}

function addMenuButtonFunctionality() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", (e) => {
    const menu = document.getElementById("menu-modal");
    menu.showModal();
  });
}

function openCoinFlipModal() {
  const coinFlipModal = document.getElementById("coin-flip-modal");
  coinFlipModal.showModal();

  const announcement = document.getElementById("coin-flip-announcement");
  announcement.textContent = "Heads or Tails?";
  showCoinFlipButtons();

  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.chooseRandomPlayer)();
  const hiddenResult = chooseRandomCoinFlipResult();
  if (player.isComputer) {
    const coinFlipChampion = coinFlipResult(player, chooseRandomCoinFlipResult(), hiddenResult);
    determineTurnOrder(coinFlipChampion);
  } else {
    addCoinFlipClick(player, hiddenResult);
  }
}

function chooseRandomCoinFlipResult() {
  const randomNumber = Math.floor(Math.random() * 2);
  return randomNumber === 0 ? "Heads" : "Tails";
}

function showTurnChoiceButtons() {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");
  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  headsButton.style.display = "none";
  tailsButton.style.display = "none";
  firstButton.style.display = "block";
  secondButton.style.display = "block";
}

function determineTurnOrder(coinFlipChampion) {
  const prompt = document.getElementById("coin-chooser");
  prompt.textContent = `Player: ${coinFlipChampion.name}`;
  const announcement = document.getElementById("coin-flip-announcement");
  announcement.textContent = "Choose your preferred order";
  showTurnChoiceButtons();

  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  const otherPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.findOtherPlayer)(coinFlipChampion);

  if (coinFlipChampion.isComputer) {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(coinFlipChampion);
    } else {
      (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(otherPlayer);
    }
    const coinFlipModal = document.getElementById('coin-flip-modal');
    coinFlipModal.close();
    return;
  }

  firstButton.addEventListener("click", (e) => {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(coinFlipChampion);
  });

  secondButton.addEventListener("click", (e) => {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(otherPlayer);
  });
}

function showCoinFlipButtons() {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");
  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  headsButton.style.display = "block";
  tailsButton.style.display = "block";
  firstButton.style.display = "none";
  secondButton.style.display = "none";
}

function addCoinFlipClick(player, result) {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");

  headsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const coinFlipWinner = coinFlipResult(player, "Heads", result);
    determineTurnOrder(coinFlipWinner);
  });

  tailsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const coinFlipWinner = coinFlipResult(player, "Tails", result);
    determineTurnOrder(coinFlipWinner);
  });
}

function coinFlipResult(player, guess, result) {
  const otherPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.findOtherPlayer)(player);
  return guess === result ? player : otherPlayer;
}

function disableMostEscModal() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const menuModal = document.getElementById("menu-modal");
      menuModal.close();
      e.preventDefault();
    }
  });
}




/***/ }),

/***/ "./src/otherJs/player.js":
/*!*******************************!*\
  !*** ./src/otherJs/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseRandomPlayer: () => (/* binding */ chooseRandomPlayer),
/* harmony export */   createPlayers: () => (/* binding */ createPlayers),
/* harmony export */   findCurrentPlayer: () => (/* binding */ findCurrentPlayer),
/* harmony export */   findOtherPlayer: () => (/* binding */ findOtherPlayer),
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   player2: () => (/* binding */ player2)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/otherJs/classes.js");


function createPlayers(name1, name2, isComputer1, isComputer2) {
  if (name1 == "") {
    name1 = "Player 1";
  }

  if (name2 == "") {
    name2 = "Player 2";
  }

  if (isComputer1) {
    player1 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player(1, true);
  } else {
    player1 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player(1, false, `${name1}`);
  }

  if (isComputer2) {
    player2 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player(2, true);
  } else {
    player2 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Player(2, false, `${name2}`);
  }
}

function chooseRandomPlayer() {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const player = randomNumber === 1 ? player1 : player2;
  const coinChooser = document.getElementById("coin-chooser");
  coinChooser.textContent = `Player: ${player.name}`;

  return player;
}

function findCurrentPlayer() {
  if (player1.shootable) {
    return player2;
  } else {
    return player1;
  }
}

function findOtherPlayer(currentPlayer) {
  let otherPlayer = player1;
  if (currentPlayer.number === 1) {
    otherPlayer = player2;
  }

  return otherPlayer;
}

let player1;
let player2;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _otherJs_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otherJs/form.js */ "./src/otherJs/form.js");
/* harmony import */ var _otherJs_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otherJs/modal.js */ "./src/otherJs/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function addAllButtonFunctionality() {
  (0,_otherJs_form_js__WEBPACK_IMPORTED_MODULE_0__.addStartButtonFunctionality)();
  (0,_otherJs_form_js__WEBPACK_IMPORTED_MODULE_0__.addRestartButtonFunctionality)();
  (0,_otherJs_form_js__WEBPACK_IMPORTED_MODULE_0__.addReturnButtonFunctonality)();
  (0,_otherJs_modal_js__WEBPACK_IMPORTED_MODULE_1__.addCloseButtonFunctionality)();
  (0,_otherJs_modal_js__WEBPACK_IMPORTED_MODULE_1__.addMenuButtonFunctionality)();
}

//initial setup
addAllButtonFunctionality();
(0,_otherJs_form_js__WEBPACK_IMPORTED_MODULE_0__.addDynamicPlayerNameInputForm)();
(0,_otherJs_modal_js__WEBPACK_IMPORTED_MODULE_1__.disableMostEscModal)();

const mainMenu = document.getElementById("main-menu-modal");
mainMenu.showModal();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9C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Qjs7QUFFQTtBQUNBO0FBQ0EsK0VBQTZCO0FBQzdCLHNFQUFtQjs7QUFFbkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb3RoZXJKcy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb3RoZXJKcy9jbGFzc2VzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9vdGhlckpzL2Nvb3Jkcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb3RoZXJKcy9kcmFnU2hpcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL290aGVySnMvZmluZENsYXNzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9vdGhlckpzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL290aGVySnMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb3RoZXJKcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb3RoZXJKcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZ2FwOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGlhbG9nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jbWFpbi1tZW51LW1vZGFsOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbiNtZW51LW1vZGFsLFxuI2NvaW4tZmxpcC1tb2RhbCB7XG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4jY29pbi1mbGlwLW1vZGFsOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuI2NvaW4tZmxpcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Nob2ljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmctaW5saW5lOiAzMHB4O1xufVxuXG4jY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbiN0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdG9wLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHBpbms7XG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogOHB4O1xuICBtYXJnaW4taW5saW5lOiAyMHB4O1xufVxuXG4jYW5ub3VuY2VtZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtZW51LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuI3Jlc3RhcnQtYnV0dG9uLFxuI21lbnUtYnV0dG9uLFxuI3BsYWNlLWJ1dHRvbiAjdHVybi1idXR0b24ge1xuICBwYWRkaW5nLWJsb2NrOiA1cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xufVxuXG4jdHVybi1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNib2FyZC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jb3ZlcmxheS0xLFxuI292ZXJsYXktMiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ub3ZlcmxheTpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xufVxuXG4uc3BhY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItbGVmdDogMHB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zcGFjZS50b3Age1xuICBib3JkZXItdG9wOiBibGFjayBzb2xpZCAycHg7XG59XG5cbi5zcGFjZS5sZWZ0IHtcbiAgYm9yZGVyLWxlZnQ6IGJsYWNrIHNvbGlkIDJweDtcbn1cblxuLnNwYWNlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn1cblxuLnNwYWNlLmhvdmVyYWJsZTpob3ZlciB7XG4gIG9wYWNpdHk6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BhY2Uuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5zcGFjZS5oaXQge1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJlZCxcbiAgICByZWQgNHB4LFxuICAgIGFxdWEgNHB4LFxuICAgIGFxdWEgN3B4XG4gICk7XG59XG5cbi5zcGFjZS5taXNzIHtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgbGlnaHRncmV5LFxuICAgIGxpZ2h0Z3JleSA1cHgsXG4gICAgd2hpdGUgNXB4LFxuICAgIHdoaXRlIDEwcHhcbiAgKTtcbn1cblxuLnNwYWNlLmhpdDpob3Zlcixcbi5zcGFjZS5taXNzOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuI2JvcmRlciB7XG4gIGJvcmRlci1pbmxpbmU6IG9yYW5nZXJlZCBzb2xpZCA1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3NoaXBzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG5cbiNjYXJyaWVyLFxuI2JhdHRsZXNoaXAsXG4jZGVzdHJveWVyLFxuI3N1Ym1hcmluZSxcbiNwYXRyb2wtYm9hdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2NhcnJpZXIudmVydGljYWwsXG4jYmF0dGxlc2hpcC52ZXJ0aWNhbCxcbiNkZXN0cm95ZXIudmVydGljYWwsXG4jc3VibWFyaW5lLnZlcnRpY2FsLFxuI3BhdHJvbC1ib2F0LnZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2NhcnJpZXIge1xuICBsZWZ0OiA1dnc7XG59XG5cbiNiYXR0bGVzaGlwIHtcbiAgbGVmdDogMzB2dztcbn1cblxuI2Rlc3Ryb3llciB7XG4gIGxlZnQ6IDU1dnc7XG59XG5cbiNzdWJtYXJpbmUge1xuICBsZWZ0OiA3MnZ3O1xufVxuXG4jcGF0cm9sLWJvYXQge1xuICBsZWZ0OiA5MHZ3O1xufVxuXG4jY2Fycmllcjpob3ZlcixcbiNiYXR0bGVzaGlwOmhvdmVyLFxuI2Rlc3Ryb3llcjpob3ZlcixcbiNzdWJtYXJpbmU6aG92ZXIsXG4jcGF0cm9sLWJvYXQ6aG92ZXIge1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogbW92ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRTs7Ozs7O0dBTUM7QUFDSDs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7O0VBS0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICBnYXA6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI21haW4tbWVudS1tb2RhbDo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuI21lbnUtbW9kYWwsXFxuI2NvaW4tZmxpcC1tb2RhbCB7XFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxufVxcblxcbiNjb2luLWZsaXAtbW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuI2NvaW4tZmxpcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaG9pY2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDMwcHg7XFxufVxcblxcbiNjbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogNjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBwaW5rO1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA4cHg7XFxuICBtYXJnaW4taW5saW5lOiAyMHB4O1xcbn1cXG5cXG4jYW5ub3VuY2VtZW50IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1idXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcblxcbiNyZXN0YXJ0LWJ1dHRvbixcXG4jbWVudS1idXR0b24sXFxuI3BsYWNlLWJ1dHRvbiAjdHVybi1idXR0b24ge1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuI3R1cm4tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNib2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNvdmVybGF5LTEsXFxuI292ZXJsYXktMiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ub3ZlcmxheTpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuXFxuLnNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG4gIGJvcmRlci10b3A6IDBweDtcXG4gIGJvcmRlci1sZWZ0OiAwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuXFxuLnNwYWNlLnRvcCB7XFxuICBib3JkZXItdG9wOiBibGFjayBzb2xpZCAycHg7XFxufVxcblxcbi5zcGFjZS5sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiBibGFjayBzb2xpZCAycHg7XFxufVxcblxcbi5zcGFjZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4uc3BhY2UuaG92ZXJhYmxlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDMwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcGFjZS5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zcGFjZS5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgNDVkZWcsXFxuICAgIHJlZCxcXG4gICAgcmVkIDRweCxcXG4gICAgYXF1YSA0cHgsXFxuICAgIGFxdWEgN3B4XFxuICApO1xcbn1cXG5cXG4uc3BhY2UubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMzVkZWcsXFxuICAgIGxpZ2h0Z3JleSxcXG4gICAgbGlnaHRncmV5IDVweCxcXG4gICAgd2hpdGUgNXB4LFxcbiAgICB3aGl0ZSAxMHB4XFxuICApO1xcbn1cXG5cXG4uc3BhY2UuaGl0OmhvdmVyLFxcbi5zcGFjZS5taXNzOmhvdmVyIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbiNib3JkZXIge1xcbiAgYm9yZGVyLWlubGluZTogb3JhbmdlcmVkIHNvbGlkIDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NoaXBzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4jY2FycmllcixcXG4jYmF0dGxlc2hpcCxcXG4jZGVzdHJveWVyLFxcbiNzdWJtYXJpbmUsXFxuI3BhdHJvbC1ib2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNjYXJyaWVyLnZlcnRpY2FsLFxcbiNiYXR0bGVzaGlwLnZlcnRpY2FsLFxcbiNkZXN0cm95ZXIudmVydGljYWwsXFxuI3N1Ym1hcmluZS52ZXJ0aWNhbCxcXG4jcGF0cm9sLWJvYXQudmVydGljYWwge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NhcnJpZXIge1xcbiAgbGVmdDogNXZ3O1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICBsZWZ0OiAzMHZ3O1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gIGxlZnQ6IDU1dnc7XFxufVxcblxcbiNzdWJtYXJpbmUge1xcbiAgbGVmdDogNzJ2dztcXG59XFxuXFxuI3BhdHJvbC1ib2F0IHtcXG4gIGxlZnQ6IDkwdnc7XFxufVxcblxcbiNjYXJyaWVyOmhvdmVyLFxcbiNiYXR0bGVzaGlwOmhvdmVyLFxcbiNkZXN0cm95ZXI6aG92ZXIsXFxuI3N1Ym1hcmluZTpob3ZlcixcXG4jcGF0cm9sLWJvYXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogNjAlO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNwYWNlSGFzQ2xhc3MgfSBmcm9tIFwiLi9maW5kQ2xhc3MuanNcIjtcbmltcG9ydCB7IGZpbmRPdGhlclBsYXllciwgcGxheWVyMSwgcGxheWVyMiB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRBbGxTcGFjZUNsaWNrRXZlbnRzKCkge1xuICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLTFcIik7XG4gIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtMlwiKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGFkZFNwYWNlQ2xpY2socGxheWVyMSwgYm9hcmQxLmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSwgW3JvdywgY29sXSk7XG4gICAgICBhZGRTcGFjZUNsaWNrKHBsYXllcjIsIGJvYXJkMi5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0sIFtyb3csIGNvbF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTcGFjZUNsaWNrKHRhcmdldFBsYXllciwgc3BhY2UsIGNvb3JkKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBmaW5kT3RoZXJQbGF5ZXIodGFyZ2V0UGxheWVyKTtcbiAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImhvdmVyYWJsZVwiKTtcbiAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0UGxheWVyLnNob290YWJsZSAmJlxuICAgICAgIXRhcmdldFBsYXllci5hcmVhLmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2hvdFxuICAgICkge1xuICAgICAgY29uc3QgdHVybkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybi1idXR0b25cIik7XG4gICAgICB0dXJuQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmlzcXVlXCI7XG5cbiAgICAgIGN1cnJlbnRQbGF5ZXIuZGlkQWN0aW9uID0gdHJ1ZTtcbiAgICAgIGNsZWFyQm9hcmQodGFyZ2V0UGxheWVyKTtcbiAgICAgIHRhcmdldFBsYXllci5hcmVhLmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdXBkYXRlQm9hcmQodGFyZ2V0UGxheWVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQtJHtwbGF5ZXIubnVtYmVyfWApO1xuICBjb25zdCBib2FyZCA9IHBsYXllci5hcmVhLmJvYXJkO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IHNwYWNlID0gYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgICBpZiAoc3BhY2Uuc2VsZWN0ZWQpIHtcbiAgICAgICAgYm9hcmREaXYuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBzcGFjZS5vY2N1cGllZCAmJlxuICAgICAgICAhc3BhY2VIYXNDbGFzcyhib2FyZERpdiwgcm93LCBjb2wsIFwic2hpcFwiKSAmJlxuICAgICAgICAhcGxheWVyLnNob290YWJsZVxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkRGl2LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBzcGFjZS5zaG90ICYmXG4gICAgICAgICFzcGFjZS5taXNzZWQgJiZcbiAgICAgICAgIXNwYWNlSGFzQ2xhc3MoYm9hcmREaXYsIHJvdywgY29sLCBcImhpdFwiKVxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkRGl2LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BhY2UubWlzc2VkICYmICFzcGFjZUhhc0NsYXNzKGJvYXJkRGl2LCByb3csIGNvbCwgXCJtaXNzXCIpKSB7XG4gICAgICAgIGJvYXJkRGl2LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQtJHtwbGF5ZXIubnVtYmVyfWApO1xuICBjb25zdCBib2FyZCA9IHBsYXllci5hcmVhLmJvYXJkO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgYm9hcmRbcm93XVtjb2xdLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBib2FyZERpdi5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgYm9hcmREaXYuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBhZGRBbGxTcGFjZUNsaWNrRXZlbnRzLCB1cGRhdGVCb2FyZCwgY2xlYXJCb2FyZCB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gICNsZW5ndGg7XG4gICNoaXRzO1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUpIHtcbiAgICB0aGlzLiNsZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy4jaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgfVxuICBnZXQgaGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0cztcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuc3Vuaykge1xuICAgICAgdGhpcy4jaGl0cysrO1xuICAgICAgdGhpcy4jaXNTdW5rKCk7XG4gICAgfVxuICB9XG4gICNpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuI2hpdHMgPT09IHRoaXMuI2xlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU3BhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9jY3VwYW50ID0gbnVsbDtcbiAgICB0aGlzLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5zaG90ID0gZmFsc2U7XG4gICAgdGhpcy5taXNzZWQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAjYm9hcmQ7XG4gICNzaGlwQ291bnQ7XG4gICNzdW5rQ291bnQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2JvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgxMCk7XG4gICAgdGhpcy4jc2hpcENvdW50ID0gMDtcbiAgICB0aGlzLiNzdW5rQ291bnQgPSAwO1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIGdldCBzaGlwQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBDb3VudDtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKGJvYXJkU2l6ZSkge1xuICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoYm9hcmRTaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyW2ldID0gbmV3IEFycmF5KGJvYXJkU2l6ZSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICBhcnJbaV1bal0gPSBuZXcgU3BhY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIHBsYWNlKHNoaXAsIGNvb3JkLCBpc1ZlcnRpY2FsLCBzaGlwTmFtZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuaGFzUm9vbShzaGlwLCBjb29yZCwgaXNWZXJ0aWNhbCkgJiZcbiAgICAgICF0aGlzLmlzT2NjdXBpZWQoc2hpcCwgY29vcmQsIGlzVmVydGljYWwsIHNoaXBOYW1lKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMuZG9lc1NoaXBFeGlzdE9uQm9hcmQoc2hpcE5hbWUpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIHRoaXMuI2JvYXJkW2Nvb3JkWzBdICsgaV1bY29vcmRbMV1dLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiNib2FyZFtjb29yZFswXSArIGldW2Nvb3JkWzFdXS5vY2N1cGFudCA9IHNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4jYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdICsgaV0ub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuI2JvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXSArIGldLm9jY3VwYW50ID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwQ291bnQrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBkb2VzU2hpcEV4aXN0T25Cb2FyZChzaGlwTmFtZSkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtyb3ddW2NvbF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy4jYm9hcmRbcm93XVtjb2xdLm9jY3VwYW50Lm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVtb3ZlU2hpcChzaGlwTmFtZSkge1xuICAgIHRoaXMuI3NoaXBDb3VudC0tO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtyb3ddW2NvbF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy4jYm9hcmRbcm93XVtjb2xdLm9jY3VwYW50Lm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZFtyb3ddW2NvbF0ub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkW3Jvd11bY29sXS5vY2N1cGFudCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhc1Jvb20oc2hpcCwgY29vcmQsIGlzVmVydGljYWwpIHtcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgaWYgKGNvb3JkWzBdICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb29yZFsxXSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc09jY3VwaWVkKHNoaXAsIGNvb3JkLCBpc1ZlcnRpY2FsLCBzaGlwTmFtZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW2Nvb3JkWzBdICsgaV1bY29vcmRbMV1dLm9jY3VwaWVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuI2JvYXJkW2Nvb3JkWzBdICsgaV1bY29vcmRbMV1dLm9jY3VwYW50Lm5hbWUgIT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdICsgaV0ub2NjdXBpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXSArIGldLm9jY3VwYW50Lm5hbWUgIT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGlmICh0aGlzLiNib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLm9jY3VwaWVkKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy4jYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXS5vY2N1cGFudDtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICB0aGlzLiNib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLm1pc3NlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgIHRoaXMuI3N1bmtDb3VudCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLm1pc3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXS5zaG90ID0gdHJ1ZTtcbiAgfVxuICBoYXNTaGlwcygpIHtcbiAgICBpZiAodGhpcy4jc2hpcENvdW50ID09PSB0aGlzLiNzdW5rQ291bnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAjaXNDb21wdXRlcjtcbiAgI25hbWU7XG4gICNhcmVhO1xuICAjbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGlzQ29tcHV0ZXIsIG5hbWUgPSBgQ29tcHV0ZXIgJHtudW1iZXJ9YCkge1xuICAgIHRoaXMuI251bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLiNpc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNhcmVhID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMuc2hvb3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaWRBY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMubGFzdEhpdENvb3JkID0gW107XG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNudW1iZXI7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCBhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLiNhcmVhO1xuICB9XG5cbiAgZ2V0IGlzQ29tcHV0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQ29tcHV0ZXI7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLiNhcmVhID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMuc2hvb3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaWRBY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMubGFzdEhpdENvb3JkID0gW107XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIgfTtcbiIsImZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkKCkge1xuICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICByZXR1cm4gW3JhbmRvbVJvdywgcmFuZG9tQ29sXTtcbn1cblxuZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyhjb29yZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb25jbHVzaW9uO1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgIGNvbmNsdXNpb24gPSBjb29yZFswXSAtIDEgPCAwIHx8IGNvb3JkWzBdIC0gMSA9PSA5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIGNvbmNsdXNpb24gPSBjb29yZFsxXSAtIDEgPCAwIHx8IGNvb3JkWzFdIC0gMSA9PSA5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgY29uY2x1c2lvbiA9IGNvb3JkWzBdICsgMSA9PSAwIHx8IGNvb3JkWzBdICsgMSA+IDk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGNvbmNsdXNpb24gPSBjb29yZFsxXSArIDEgPT0gMCB8fCBjb29yZFsxXSArIDEgPiA5O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IHsgZ2V0UmFuZG9tQ29vcmQsIGlzT3V0T2ZCb3VuZHMgfTtcbiIsImltcG9ydCB7IHVwZGF0ZUJvYXJkLCBjbGVhckJvYXJkIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmZ1bmN0aW9uIGFkZERyYWdTaGlwKHNoaXBEaXYsIGJvYXJkRGl2LCBwbGF5ZXIpIHtcbiAgbGV0IG9nT2Zmc2V0WCwgb2dPZmZzZXRZLCBvZmZzZXRYLCBvZmZzZXRZO1xuICBjb25zdCBtb3ZlID0gKGUpID0+IHtcbiAgICBzaGlwRGl2LnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFggLSBvZmZzZXRYfXB4YDtcbiAgICBzaGlwRGl2LnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WSAtIG9mZnNldFl9cHhgO1xuICAgIHNoaXBEaXYuc3R5bGUuekluZGV4ID0gMTtcbiAgfTtcblxuICBzaGlwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAvL3RvcCBwcm9wZXJ0eSByZWxhdGl2ZSB0byBwYXJlbnQgKHNoaXBzKSBjb250YWluZXIsIHNvIGNoYW5nZSByZWxhdGl2ZSB0byBib2R5IChkZWZhdWx0KSBsaWtlIG9mZnNldFxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcy1jb250YWluZXJcIik7XG4gICAgc2hpcHMuc3R5bGUucG9zaXRpb24gPSBcImluaXRpYWxcIjtcblxuICAgIG9nT2Zmc2V0WCA9IHNoaXBEaXYub2Zmc2V0TGVmdDtcbiAgICBvZ09mZnNldFkgPSBzaGlwRGl2Lm9mZnNldFRvcDtcbiAgICAvL3dhbnQgb2Zmc2V0IGZyb20gc2hpcERpdiBhbmQgY2xpZW50WCwgbm90IHRhcmdldE5vZGUgKHNwYWNlKSBhbmQgY2xpZW50WFxuICAgIG9mZnNldFggPSBlLmNsaWVudFggLSBzaGlwRGl2Lm9mZnNldExlZnQ7XG4gICAgb2Zmc2V0WSA9IGUuY2xpZW50WSAtIHNoaXBEaXYub2Zmc2V0VG9wO1xuICAgIHNoaXBEaXYuc3R5bGUuYm9yZGVyID0gXCI1cHggc29saWQgcmVkXCI7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZSk7XG4gIH0pO1xuXG4gIHNoaXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlKTtcbiAgICBzaGlwRGl2LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiei1pbmRleFwiKTtcbiAgICBzaGlwRGl2LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyXCIpO1xuXG4gICAgY29uc3QgdG9wRWRnZUFuZEluZGV4ID0gZmluZE5lYXJlc3RZU3BhY2VFZGdlKFxuICAgICAgc2hpcERpdi5zdHlsZS50b3AsXG4gICAgICBib2FyZERpdixcbiAgICAgIHBsYXllclxuICAgICk7XG4gICAgc2hpcERpdi5zdHlsZS50b3AgPSBgJHt0b3BFZGdlQW5kSW5kZXhbMF19cHhgO1xuXG4gICAgY29uc3QgbGVmdEVkZ2VBbmRJbmRleCA9IGZpbmROZWFyZXN0WFNwYWNlRWRnZShcbiAgICAgIHNoaXBEaXYuc3R5bGUubGVmdCxcbiAgICAgIGJvYXJkRGl2LFxuICAgICAgcGxheWVyXG4gICAgKTtcbiAgICBzaGlwRGl2LnN0eWxlLmxlZnQgPSBgJHtsZWZ0RWRnZUFuZEluZGV4WzBdfXB4YDtcblxuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcmV0dXJuU2hpcExlbmd0aEJhc2VkT25OYW1lKHNoaXBOYW1lKTtcbiAgICBjb25zdCBjb29yZHMgPSBbdG9wRWRnZUFuZEluZGV4WzFdLCBsZWZ0RWRnZUFuZEluZGV4WzFdXTtcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gc2hpcERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb25zdCBpc1BsYWNlZCA9IHBsYXllci5hcmVhLnBsYWNlKFxuICAgICAgbmV3IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpLFxuICAgICAgY29vcmRzLFxuICAgICAgaXNWZXJ0aWNhbCxcbiAgICAgIHNoaXBOYW1lXG4gICAgKTtcbiAgICBpZiAoIWlzUGxhY2VkKSB7XG4gICAgICBzaGlwRGl2LnN0eWxlLnRvcCA9IGAke29nT2Zmc2V0WX1weGA7XG4gICAgICBzaGlwRGl2LnN0eWxlLmxlZnQgPSBgJHtvZ09mZnNldFh9cHhgO1xuICAgIH1cbiAgICBjbGVhckJvYXJkKHBsYXllcik7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyKTtcblxuICAgIGlmIChwbGF5ZXIuYXJlYS5zaGlwQ291bnQgPT09IDUpIHtcbiAgICAgIGNvbnN0IHBsYWNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZS1idXR0b25cIik7XG4gICAgICBwbGFjZUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJpc3F1ZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHVyblNoaXBMZW5ndGhCYXNlZE9uTmFtZShzaGlwTmFtZSkge1xuICBzd2l0Y2ggKHNoaXBOYW1lKSB7XG4gICAgY2FzZSBcImNhcnJpZXJcIjpcbiAgICAgIHJldHVybiA1O1xuICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICByZXR1cm4gNDtcbiAgICBjYXNlIFwiZGVzdHJveWVyXCI6XG4gICAgICByZXR1cm4gMztcbiAgICBjYXNlIFwic3VibWFyaW5lXCI6XG4gICAgICByZXR1cm4gMztcbiAgICBjYXNlIFwicGF0cm9sLWJvYXRcIjpcbiAgICAgIHJldHVybiAyO1xuICB9XG59XG5cbi8vd2hlbiBtb3Zpbmcgc2hpcCBvdXQgb2Ygd2luZG93LCBzbGlnaHRseSBvZmYgZ3JpZFxuZnVuY3Rpb24gZmluZE5lYXJlc3RYU3BhY2VFZGdlKG9mZnNldFgsIGJvYXJkKSB7XG4gIGxldCBlZGdlQW5kSW5kZXggPSBbXTtcbiAgY29uc3QgY3VycmVudFNoaXBQb3MgPSBwYXJzZUludChvZmZzZXRYKTtcbiAgY29uc3Qgcm93ID0gYm9hcmQucXVlcnlTZWxlY3RvcihcIi5yb3dcIik7XG4gIGNvbnN0IGZpcnN0U3BhY2UgPSByb3cuY2hpbGRyZW5bMF07XG4gIGxldCBjdXJyZW50U3BhY2VMZWZ0RWRnZSA9IGZpcnN0U3BhY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgbGV0IGN1cnJlbnRTcGFjZVJpZ2h0RWRnZSA9IGN1cnJlbnRTcGFjZUxlZnRFZGdlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjdXJyZW50U3BhY2VMZWZ0RWRnZSA9IGN1cnJlbnRTcGFjZVJpZ2h0RWRnZTtcbiAgICBjdXJyZW50U3BhY2VSaWdodEVkZ2UgPSByb3cuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBpZiAoY3VycmVudFNwYWNlUmlnaHRFZGdlID4gY3VycmVudFNoaXBQb3MpIHtcbiAgICAgIGVkZ2VBbmRJbmRleCA9IGZpbmRDbG9zZXN0RWRnZShcbiAgICAgICAgY3VycmVudFNoaXBQb3MsXG4gICAgICAgIGN1cnJlbnRTcGFjZUxlZnRFZGdlLFxuICAgICAgICBjdXJyZW50U3BhY2VSaWdodEVkZ2UsXG4gICAgICAgIGlcbiAgICAgICk7XG4gICAgICByZXR1cm4gZWRnZUFuZEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8vaW5uZXIgc3BhY2VzIGhhdmUgbm8gbGVmdCBib3JkZXIgKDJweCB3aWRlKSBzbyBoYXZlIHRvIGFkanVzdCBzaW5jZSBzaGlwIGRvZXMgaGF2ZSBsZWZ0IGJvcmRlclxuICAvL2Fsc28gcmlnaHQgZWRnZSBzaW5jZSBzaGlwIFwicGxhY2VkXCIgb24gMm5kIHRvIGxhc3Qgc3BhY2UncyByaWdodCBlZGdlXG4gIGVkZ2VBbmRJbmRleC5wdXNoKGN1cnJlbnRTcGFjZVJpZ2h0RWRnZSAtIDIpO1xuICBlZGdlQW5kSW5kZXgucHVzaCg5KTtcbiAgcmV0dXJuIGVkZ2VBbmRJbmRleDtcbn1cblxuLy93aGVuIG1vdmluZyBzaGlwIG91dCBvZiB3aW5kb3csIHNsaWdodGx5IG9mZiBncmlkXG5mdW5jdGlvbiBmaW5kTmVhcmVzdFlTcGFjZUVkZ2Uob2Zmc2V0WSwgYm9hcmQpIHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBzLWNvbnRhaW5lclwiKTtcbiAgc2hpcHMuc3R5bGUucG9zaXRpb24gPSBcImluaXRpYWxcIjtcblxuICBsZXQgZWRnZUFuZEluZGV4ID0gW107XG4gIGNvbnN0IGN1cnJlbnRTaGlwUG9zID0gcGFyc2VJbnQob2Zmc2V0WSk7XG4gIGNvbnN0IGZpcnN0U3BhY2UgPSBib2FyZC5jaGlsZHJlblswXTtcbiAgbGV0IGN1cnJlbnRTcGFjZVRvcEVkZ2UgPSBmaXJzdFNwYWNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgbGV0IGN1cnJlbnRTcGFjZUJvdHRvbUVkZ2UgPSBjdXJyZW50U3BhY2VUb3BFZGdlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjdXJyZW50U3BhY2VUb3BFZGdlID0gY3VycmVudFNwYWNlQm90dG9tRWRnZTtcbiAgICBjdXJyZW50U3BhY2VCb3R0b21FZGdlID0gYm9hcmQuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGlmIChjdXJyZW50U3BhY2VCb3R0b21FZGdlID4gY3VycmVudFNoaXBQb3MpIHtcbiAgICAgIGVkZ2VBbmRJbmRleCA9IGZpbmRDbG9zZXN0RWRnZShcbiAgICAgICAgY3VycmVudFNoaXBQb3MsXG4gICAgICAgIGN1cnJlbnRTcGFjZVRvcEVkZ2UsXG4gICAgICAgIGN1cnJlbnRTcGFjZUJvdHRvbUVkZ2UsXG4gICAgICAgIGlcbiAgICAgICk7XG4gICAgICByZXR1cm4gZWRnZUFuZEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8vaW5uZXIgc3BhY2VzIGhhdmUgbm8gdG9wIGJvcmRlciAoMnB4IHdpZGUpIHNvIGhhdmUgdG8gYWRqdXN0IHNpbmNlIHNoaXAgZG9lcyBoYXZlIHRvcHAgYm9yZGVyXG4gIC8vYWxzbyBib3QgZWRnZSBzaW5jZSBzaGlwIFwicGxhY2VkXCIgb24gMm5kIHRvIGxhc3Qgc3BhY2UncyBib3QgZWRnZVxuICBlZGdlQW5kSW5kZXgucHVzaChjdXJyZW50U3BhY2VCb3R0b21FZGdlIC0gMik7XG4gIGVkZ2VBbmRJbmRleC5wdXNoKDkpO1xuICByZXR1cm4gZWRnZUFuZEluZGV4O1xufVxuXG4vL2lubmVyIHNwYWNlcyBoYXZlIG5vIGxlZnQvdG9wIGJvcmRlciAoMnB4IHdpZGUpIHNvIGhhdmUgdG8gYWRqdXN0IHNpbmNlIHNoaXAgZG9lcyBoYXZlIGxlZnQvdG9wIGJvcmRlclxuZnVuY3Rpb24gZmluZENsb3Nlc3RFZGdlKFxuICBjdXJyZW50U2hpcFBvcyxcbiAgbGVmdE9yVG9wRWRnZSxcbiAgcmlnaHRPckJvdHRvbUVkZ2UsXG4gIHNwYWNlSW5kZXhcbikge1xuICBjb25zdCBlZGdlQW5kSW5kZXggPSBbXTtcbiAgY29uc3QgZGlzdGFuY2VGcm9tUmlnaHRPckJvdHRvbSA9IHJpZ2h0T3JCb3R0b21FZGdlIC0gY3VycmVudFNoaXBQb3M7XG4gIC8vOSBcImZlZWxzXCIgY2xvc2VyIHRvIG1pZGRsZSB0aGlzIHdheSByYXRoZXIgdGhhbiA0IChwcm9iIGJjeiByZWQgKDVweCkgYm9yZGVyKVxuICBjb25zdCBkaXN0YW5jZUZyb21MZWZ0T3JUb3AgPSBjdXJyZW50U2hpcFBvcyAtIGxlZnRPclRvcEVkZ2UgKyA5O1xuICBpZiAoZGlzdGFuY2VGcm9tUmlnaHRPckJvdHRvbSA8IGRpc3RhbmNlRnJvbUxlZnRPclRvcCkge1xuICAgIGVkZ2VBbmRJbmRleC5wdXNoKHJpZ2h0T3JCb3R0b21FZGdlIC0gMik7XG4gICAgZWRnZUFuZEluZGV4LnB1c2goc3BhY2VJbmRleCk7XG4gICAgcmV0dXJuIGVkZ2VBbmRJbmRleDtcbiAgfVxuXG4gIC8vZmlyc3QgY29sIGhhdmUgbGVmdCBib3JkZXIgc28gbm8gbmVlZCBhZGp1c3RpbmdcbiAgaWYgKHNwYWNlSW5kZXggPT09IDAgfHwgc3BhY2VJbmRleCA9PT0gMSkge1xuICAgIGVkZ2VBbmRJbmRleC5wdXNoKGxlZnRPclRvcEVkZ2UpO1xuICAgIGVkZ2VBbmRJbmRleC5wdXNoKDApO1xuICAgIHJldHVybiBlZGdlQW5kSW5kZXg7XG4gIH1cblxuICAvL3NwYWNlSW5kZXggLSAxIHNpbmNlIHNwYWNlSW5kZXggaXMgaWYgcmlnaHRPckJvdHRvbUVkZ2UgaXMgc2V0IHRvIHNoaXAncyBsZWZ0T3JUb3BFZGdlXG4gIGVkZ2VBbmRJbmRleC5wdXNoKGxlZnRPclRvcEVkZ2UgLSAyKTtcbiAgZWRnZUFuZEluZGV4LnB1c2goc3BhY2VJbmRleCAtIDEpO1xuICByZXR1cm4gZWRnZUFuZEluZGV4O1xufVxuXG5mdW5jdGlvbiBhZGREcmFnQWxsU2hpcHMoYm9hcmREaXYsIHBsYXllcikge1xuICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJyaWVyXCIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVzaGlwXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llclwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtYXJpbmVcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdHJvbC1ib2F0XCIpO1xuICBhZGREcmFnU2hpcChjYXJyaWVyLCBib2FyZERpdiwgcGxheWVyKTtcbiAgYWRkRHJhZ1NoaXAoYmF0dGxlc2hpcCwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZERyYWdTaGlwKGRlc3Ryb3llciwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZERyYWdTaGlwKHN1Ym1hcmluZSwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZERyYWdTaGlwKHBhdHJvbEJvYXQsIGJvYXJkRGl2LCBwbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxTaGlwcygpIHtcbiAgY29uc3QgY2FycmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FycmllclwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlc2hpcFwiKTtcbiAgY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZXJcIik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWFyaW5lXCIpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgY2Fycmllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGJhdHRsZXNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkZXN0cm95ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzdWJtYXJpbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwYXRyb2xCb2F0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gcmVzZXRTaGlwUG9zaXRpb25zKHBsYXllcikge1xuICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJyaWVyXCIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVzaGlwXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llclwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtYXJpbmVcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdHJvbC1ib2F0XCIpO1xuICByZXNldFNoaXBIKGNhcnJpZXIpO1xuICByZXNldFNoaXBIKGJhdHRsZXNoaXApO1xuICByZXNldFNoaXBIKGRlc3Ryb3llcik7XG4gIHJlc2V0U2hpcEgoc3VibWFyaW5lKTtcbiAgcmVzZXRTaGlwSChwYXRyb2xCb2F0KTtcblxuICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZC0ke3BsYXllci5udW1iZXJ9YCk7XG4gIHNldEFsbFNoaXBzVG9IKGJvYXJkRGl2LCBwbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxTaGlwc1RvSChib2FyZERpdiwgcGxheWVyKSB7XG4gIGNvbnN0IHNoaXBOYW1lTGlzdCA9IFtcbiAgICBcImNhcnJpZXJcIixcbiAgICBcImJhdHRsZXNoaXBcIixcbiAgICBcImRlc3Ryb3llclwiLFxuICAgIFwic3VibWFyaW5lXCIsXG4gICAgXCJwYXRyb2wtYm9hdFwiLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIC8vYmN6IHNldFJvdGF0ZSBkZWxldGVzIGFuZCBjbG9uZXMsIGhhdmUgdG8gcmVnZXQgdGhlIGlkXG4gICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXBOYW1lTGlzdFtpXX1gKTtcbiAgICBpZiAoc2hpcERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xuICAgICAgc2V0Um90YXRlKHNoaXBEaXYsIGJvYXJkRGl2LCBwbGF5ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFNoaXBIKHNoaXBEaXYpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwRGl2LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAvL2VtcHR5IHNpbmNlIGl0IHdhcyBpbml0aWFsbHkgZW1wdHkgYW5kIG5vdCAwcHggKHRvcC9ib3QgY2hhbmdlcyBzaGlwIHNpemUpXG4gIHNoaXBEaXYuc3R5bGUudG9wID0gXCJcIjtcblxuICBzd2l0Y2ggKHNoaXBOYW1lKSB7XG4gICAgY2FzZSBcImNhcnJpZXJcIjpcbiAgICAgIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnJpZXJcIik7XG4gICAgICBjYXJyaWVyLnN0eWxlLmxlZnQgPSBcIjV2d1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJhdHRsZXNoaXBcIjpcbiAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZXNoaXBcIik7XG4gICAgICBiYXR0bGVzaGlwLnN0eWxlLmxlZnQgPSBcIjMwdndcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgIGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgZGVzdHJveWVyLnN0eWxlLmxlZnQgPSBcIjU1dndcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWJtYXJpbmVcIjpcbiAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWFyaW5lXCIpO1xuICAgICAgc3VibWFyaW5lLnN0eWxlLmxlZnQgPSBcIjcydndcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwYXRyb2wtYm9hdFwiOlxuICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICBwYXRyb2xCb2F0LnN0eWxlLmxlZnQgPSBcIjkwdndcIjtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2hpcFYoc2hpcERpdikge1xuICBjb25zdCBzaGlwTmFtZSA9IHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcy1jb250YWluZXJcIik7XG4gIHNoaXBzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJpbml0aWFsXCI7XG4gIHNoaXBEaXYuc3R5bGUudG9wID0gXCIzMDBweFwiO1xuXG4gIHN3aXRjaCAoc2hpcE5hbWUpIHtcbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgY29uc3QgY2FycmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FycmllclwiKTtcbiAgICAgIGNhcnJpZXIuc3R5bGUubGVmdCA9IFwiMXZ3XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgIGJhdHRsZXNoaXAuc3R5bGUubGVmdCA9IFwiNDJ2d1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRlc3Ryb3llclwiOlxuICAgICAgY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZXJcIik7XG4gICAgICBkZXN0cm95ZXIuc3R5bGUubGVmdCA9IFwiNTF2d1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtYXJpbmVcIik7XG4gICAgICBzdWJtYXJpbmUuc3R5bGUubGVmdCA9IFwiNTZ2d1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBhdHJvbC1ib2F0XCI6XG4gICAgICBjb25zdCBwYXRyb2xCb2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgIHBhdHJvbEJvYXQuc3R5bGUubGVmdCA9IFwiOTZ2d1wiO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Um90YXRlKHNoaXAsIGJvYXJkRGl2LCBwbGF5ZXIpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gcmV0dXJuU2hpcExlbmd0aEJhc2VkT25OYW1lKHNoaXBOYW1lKTtcblxuICBjb25zdCBpc1ZlcnRpY2FsID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcbiAgaWYgKGlzVmVydGljYWwpIHtcbiAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICByZXNldFNoaXBIKHNoaXApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBzaGlwLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG4gICAgICAgIHNoaXAuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImxlZnRcIik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgIHJlc2V0U2hpcFYoc2hpcCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHNoaXAuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcInRvcFwiKTtcbiAgICAgICAgc2hpcC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHMtY29udGFpbmVyXCIpO1xuICBzaGlwc0NvbnRhaW5lci5yZXBsYWNlV2l0aChzaGlwc0NvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICBhZGREcmFnQWxsU2hpcHMoYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZEFsbFJvdGF0ZUNsaWNrKGJvYXJkRGl2LCBwbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRSb3RhdGVDbGljayhzaGlwRGl2LCBib2FyZERpdiwgcGxheWVyKSB7XG4gIHNoaXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2V0Um90YXRlKHNoaXBEaXYsIGJvYXJkRGl2LCBwbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsUm90YXRlQ2xpY2soYm9hcmREaXYsIHBsYXllcikge1xuICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJyaWVyXCIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVzaGlwXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llclwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtYXJpbmVcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdHJvbC1ib2F0XCIpO1xuICBhZGRSb3RhdGVDbGljayhjYXJyaWVyLCBib2FyZERpdiwgcGxheWVyKTtcbiAgYWRkUm90YXRlQ2xpY2soYmF0dGxlc2hpcCwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZFJvdGF0ZUNsaWNrKGRlc3Ryb3llciwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZFJvdGF0ZUNsaWNrKHN1Ym1hcmluZSwgYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZFJvdGF0ZUNsaWNrKHBhdHJvbEJvYXQsIGJvYXJkRGl2LCBwbGF5ZXIpO1xufVxuXG5leHBvcnQge1xuICBhZGREcmFnQWxsU2hpcHMsXG4gIHJlbW92ZUFsbFNoaXBzLFxuICByZXNldFNoaXBQb3NpdGlvbnMsXG4gIHJldHVyblNoaXBMZW5ndGhCYXNlZE9uTmFtZSxcbiAgYWRkQWxsUm90YXRlQ2xpY2ssXG59O1xuIiwiZnVuY3Rpb24gZmluZFNlbGVjdGVkKHBsYXllcikge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGlmIChwbGF5ZXIuYXJlYS5ib2FyZFtyb3ddW2NvbF0uc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNwYWNlSGFzQ2xhc3MoYm9hcmREaXYsIHJvdywgY29sLCBjbGFzc05hbWUpIHtcbiAgY29uc3Qgcm93c0RpdiA9IGJvYXJkRGl2LmNoaWxkcmVuO1xuICBpZiAocm93c0Rpdltyb3ddLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmNvbnRhaW5zKGAke2NsYXNzTmFtZX1gKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBmaW5kU2VsZWN0ZWQsIHNwYWNlSGFzQ2xhc3MgfTtcbiIsImltcG9ydCB7IG9wZW5Db2luRmxpcE1vZGFsIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcbmltcG9ydCB7IGNsZWFyR2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVBsYXllcnMgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuZnVuY3Rpb24gc3VibWl0U3RhcnRHYW1lRm9ybShmb3JtKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICBjb25zdCBwbGF5ZXIxTmFtZSA9IGZvcm1EYXRhLmdldChcInBsYXllci0xLW5hbWVcIik7XG4gIGNvbnN0IHBsYXllcjJOYW1lID0gZm9ybURhdGEuZ2V0KFwicGxheWVyLTItbmFtZVwiKTtcbiAgY29uc3QgcGxheWVyMUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItMS1uYW1lXCIpO1xuICBjb25zdCBwbGF5ZXIySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0yLW5hbWVcIik7XG4gIGNvbnN0IGlzUDFDb21wdXRlciA9IGNoZWNrSWZDb21wdXRlcldpdGhGb3JtKHBsYXllcjFJbnB1dCwgZm9ybURhdGEpO1xuICBjb25zdCBpc1AyQ29tcHV0ZXIgPSBjaGVja0lmQ29tcHV0ZXJXaXRoRm9ybShwbGF5ZXIySW5wdXQsIGZvcm1EYXRhKTtcbiAgY3JlYXRlUGxheWVycyhwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUsIGlzUDFDb21wdXRlciwgaXNQMkNvbXB1dGVyKTtcblxuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51LW1vZGFsXCIpO1xuICBtYWluTWVudS5jbG9zZSgpO1xuICBvcGVuQ29pbkZsaXBNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGRTdGFydEJ1dHRvbkZ1bmN0aW9uYWxpdHkoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcbiAgICBzdWJtaXRTdGFydEdhbWVGb3JtKGZvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzdGFydEJ1dHRvbkZ1bmN0aW9uYWxpdHkoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbW9kYWxcIik7XG4gIG1lbnUuY2xvc2UoKTtcblxuICBjb25zdCByZXN0YXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdGFydC1idXR0b25cIik7XG4gIHJlc3RhcnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlc3RhcnRHYW1lKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgY2xlYXJHYW1lKCk7XG4gIG9wZW5Db2luRmxpcE1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFJldHVybkJ1dHRvbkZ1bmN0b25hbGl0eSgpIHtcbiAgY29uc3QgcmV0dXJuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXR1cm4taG9tZS1idXR0b25cIik7XG4gIHJldHVybkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51LW1vZGFsXCIpO1xuICAgIG1haW5NZW51LnNob3dNb2RhbCgpO1xuICAgIGNsZWFyR2FtZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRHluYW1pY1BsYXllck5hbWVJbnB1dEZvcm0oKSB7XG4gIGNvbnN0IG1vZGVTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGUtc2VsZWN0aW9uXCIpO1xuICBtb2RlU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIxSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0xLWlucHV0XCIpO1xuICAgIGNvbnN0IHBsYXllcjJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLTItaW5wdXRcIik7XG4gICAgc3dpdGNoIChtb2RlU2VsZWN0aW9uLnZhbHVlKSB7XG4gICAgICBjYXNlIFwiUHZQXCI6XG4gICAgICAgIHBsYXllcjFJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwbGF5ZXIySW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiUHZDXCI6XG4gICAgICAgIHBsYXllcjFJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwbGF5ZXIySW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDdlBcIjpcbiAgICAgICAgcGxheWVyMUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcGxheWVyMklucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkN2Q1wiOlxuICAgICAgICBwbGF5ZXIxSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwbGF5ZXIySW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmQ29tcHV0ZXJXaXRoRm9ybShwbGF5ZXIsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG1vZGUgPSBmb3JtRGF0YS5nZXQoXCJtb2RlXCIpO1xuICBjb25zdCBwbGF5ZXIxSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0xLW5hbWVcIik7XG4gIGNvbnN0IHBsYXllcjJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLTItbmFtZVwiKTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIFwiUHZQXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSBcIlB2Q1wiOlxuICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMUlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgXCJDdlBcIjpcbiAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjJJbnB1dCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFwiQ3ZDXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBhZGRTdGFydEJ1dHRvbkZ1bmN0aW9uYWxpdHksXG4gIGFkZFJlc3RhcnRCdXR0b25GdW5jdGlvbmFsaXR5LFxuICBhZGRSZXR1cm5CdXR0b25GdW5jdG9uYWxpdHksXG4gIGFkZER5bmFtaWNQbGF5ZXJOYW1lSW5wdXRGb3JtLFxufTtcbiIsImltcG9ydCB7IHVwZGF0ZUJvYXJkLCBjbGVhckJvYXJkLCBhZGRBbGxTcGFjZUNsaWNrRXZlbnRzIH0gZnJvbSBcIi4vYm9hcmRET00uanNcIjtcbmltcG9ydCB7XG4gIGZpbmRPdGhlclBsYXllcixcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgZmluZEN1cnJlbnRQbGF5ZXIsXG59IGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQ29vcmQsIGlzT3V0T2ZCb3VuZHMgfSBmcm9tIFwiLi9jb29yZHMuanNcIjtcbmltcG9ydCB7IGZpbmRTZWxlY3RlZCB9IGZyb20gXCIuL2ZpbmRDbGFzcy5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkRHJhZ0FsbFNoaXBzLFxuICByZW1vdmVBbGxTaGlwcyxcbiAgcmVzZXRTaGlwUG9zaXRpb25zLFxuICByZXR1cm5TaGlwTGVuZ3RoQmFzZWRPbk5hbWUsXG4gIGFkZEFsbFJvdGF0ZUNsaWNrLFxufSBmcm9tIFwiLi9kcmFnU2hpcHMuanNcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0VHVybihwbGF5ZXIpIHtcbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbm5vdW5jZW1lbnRcIik7XG4gIGFubm91bmNlbWVudC50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIFR1cm5gO1xuXG4gIGNvbnN0IHR1cm5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cm4tYnV0dG9uXCIpO1xuICB0dXJuQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCI7XG5cbiAgY29uc3QgdGFyZ2V0UGxheWVyID0gZmluZE90aGVyUGxheWVyKHBsYXllcik7XG4gIHBsYXllci5zaG9vdGFibGUgPSBmYWxzZTtcbiAgdGFyZ2V0UGxheWVyLnNob290YWJsZSA9IHRydWU7XG4gIHBsYXllci5kaWRBY3Rpb24gPSBmYWxzZTtcbiAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgY2xlYXJCb2FyZCh0YXJnZXRQbGF5ZXIpO1xuICBzaG93QW5kSGlkZU92ZXJsYXkocGxheWVyLCB0YXJnZXRQbGF5ZXIpO1xuXG4gIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgIGNvbXB1dGVyU2hvb3QodGFyZ2V0UGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QW5kSGlkZU92ZXJsYXkoY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYG92ZXJsYXktJHtjdXJyZW50UGxheWVyLm51bWJlcn1gXG4gICk7XG4gIGNvbnN0IHRhcmdldFBsYXllck92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgb3ZlcmxheS0ke3RhcmdldFBsYXllci5udW1iZXJ9YFxuICApO1xuICBjdXJyZW50UGxheWVyT3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIHRhcmdldFBsYXllck92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyU2hvb3QodGFyZ2V0UGxheWVyKSB7XG4gIGNvbnN0IGNvbXB1dGVyID0gZmluZE90aGVyUGxheWVyKHRhcmdldFBsYXllcik7XG4gIGlmIChjb21wdXRlci5oYXNIaXQgfHwgY29tcHV0ZXIubGFzdEhpdENvb3JkLmxlbmd0aCA+IDApIHtcbiAgICAvL2lkayB3aGF0IHRoZSBwcm9ibGVtIGNhdXNlIGlzLCBzbyBoYXJkY29kZWQgc29sdXRpb24gKG1heWJlIGZpeGVkIGFjY2lkZW50bHksIGJ1dCBub3Qgcmlza2luZyBpdClcbiAgICBpZiAoXG4gICAgICBjb21wdXRlci5sYXN0SGl0Q29vcmQubGVuZ3RoID4gMCA9PSBmYWxzZSAmJlxuICAgICAgdGFyZ2V0UGxheWVyLmFyZWEuaGFzU2hpcHMoKVxuICAgICkge1xuICAgICAgY29tcHV0ZXIuaGFzSGl0ID0gZmFsc2U7XG4gICAgICBzdGFydFR1cm4odGFyZ2V0UGxheWVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29tcHV0ZXJTaG9vdEFkamFjZW50KFxuICAgICAgdGFyZ2V0UGxheWVyLFxuICAgICAgY29tcHV0ZXIubGFzdEhpdENvb3JkW2NvbXB1dGVyLmxhc3RIaXRDb29yZC5sZW5ndGggLSAxXVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgd2hpbGUgKHRhcmdldFBsYXllci5hcmVhLmJvYXJkW3JhbmRvbUNvb3JkWzBdXVtyYW5kb21Db29yZFsxXV0uc2hvdCkge1xuICAgIHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgfVxuICBzaG9vdCh0YXJnZXRQbGF5ZXIsIHJhbmRvbUNvb3JkKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJTaG9vdEFkamFjZW50KHRhcmdldFBsYXllciwgY29vcmQpIHtcbiAgaWYgKCFpc091dE9mQm91bmRzKGNvb3JkLCBcInRvcFwiKSkge1xuICAgIGlmICghdGFyZ2V0UGxheWVyLmFyZWEuYm9hcmRbY29vcmRbMF0gLSAxXVtjb29yZFsxXV0uc2hvdCkge1xuICAgICAgc2hvb3QodGFyZ2V0UGxheWVyLCBbY29vcmRbMF0gLSAxLCBjb29yZFsxXV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNPdXRPZkJvdW5kcyhjb29yZCwgXCJsZWZ0XCIpKSB7XG4gICAgaWYgKCF0YXJnZXRQbGF5ZXIuYXJlYS5ib2FyZFtjb29yZFswXV1bY29vcmRbMV0gLSAxXS5zaG90KSB7XG4gICAgICBzaG9vdCh0YXJnZXRQbGF5ZXIsIFtjb29yZFswXSwgY29vcmRbMV0gLSAxXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFpc091dE9mQm91bmRzKGNvb3JkLCBcImJvdHRvbVwiKSkge1xuICAgIGlmICghdGFyZ2V0UGxheWVyLmFyZWEuYm9hcmRbY29vcmRbMF0gKyAxXVtjb29yZFsxXV0uc2hvdCkge1xuICAgICAgc2hvb3QodGFyZ2V0UGxheWVyLCBbY29vcmRbMF0gKyAxLCBjb29yZFsxXV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNPdXRPZkJvdW5kcyhjb29yZCwgXCJyaWdodFwiKSkge1xuICAgIGlmICghdGFyZ2V0UGxheWVyLmFyZWEuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdICsgMV0uc2hvdCkge1xuICAgICAgc2hvb3QodGFyZ2V0UGxheWVyLCBbY29vcmRbMF0sIGNvb3JkWzFdICsgMV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vbm8gbW9yZSBhZGphY2VudCBzcGFjZXMgdG8gc2hvb3RcbiAgY29uc3QgY29tcHV0ZXIgPSBmaW5kT3RoZXJQbGF5ZXIodGFyZ2V0UGxheWVyKTtcbiAgY29tcHV0ZXIubGFzdEhpdENvb3JkLnBvcCgpO1xuICBjb21wdXRlclNob290KHRhcmdldFBsYXllcik7XG59XG5cbmZ1bmN0aW9uIHNob290KHRhcmdldFBsYXllciwgY29vcmQpIHtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGZpbmRPdGhlclBsYXllcih0YXJnZXRQbGF5ZXIpO1xuICB0YXJnZXRQbGF5ZXIuYXJlYS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgdXBkYXRlQm9hcmQodGFyZ2V0UGxheWVyKTtcblxuICBpZiAoIXRhcmdldFBsYXllci5hcmVhLmhhc1NoaXBzKCkpIHtcbiAgICBlbmRHYW1lKGN1cnJlbnRQbGF5ZXIsIHRhcmdldFBsYXllcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0YXJnZXRQbGF5ZXIuYXJlYS5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLm1pc3NlZCkge1xuICAgIGN1cnJlbnRQbGF5ZXIubGFzdEhpdENvb3JkLnB1c2goY29vcmQpO1xuICAgIGN1cnJlbnRQbGF5ZXIuaGFzSGl0ID0gdHJ1ZTtcbiAgICBzdGFydFR1cm4oY3VycmVudFBsYXllcik7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllci5oYXNIaXQgPSBmYWxzZTtcbiAgICBzdGFydFR1cm4odGFyZ2V0UGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lciwgbG9zZXIpIHtcbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbm5vdW5jZW1lbnRcIik7XG4gIGFubm91bmNlbWVudC50ZXh0Q29udGVudCA9IGAke3dpbm5lci5uYW1lfSBXaW5zIWA7XG5cbiAgY29uc3Qgd2lubmVyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvdmVybGF5LSR7d2lubmVyLm51bWJlcn1gKTtcbiAgd2lubmVyT3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICB1cGRhdGVCb2FyZCh3aW5uZXIpO1xuICBsb3Nlci5zaG9vdGFibGUgPSBmYWxzZTtcblxuICBjb25zdCB0dXJuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJuLWJ1dHRvblwiKTtcbiAgdHVybkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgY29uc3QgdHVybkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybi1idXR0b24tY29udGFpbmVyXCIpO1xuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gdHVybkJ1dHRvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnV0dG9uXCIpO1xuICByZXN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyR2FtZSgpIHtcbiAgcGxheWVyMS5yZXNldCgpO1xuICBwbGF5ZXIyLnJlc2V0KCk7XG4gIGNsZWFyQm9hcmQocGxheWVyMSk7XG4gIGNsZWFyQm9hcmQocGxheWVyMik7XG4gIGNvbnN0IGJvYXJkRGl2MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZC0xYCk7XG4gIGNvbnN0IGJvYXJkRGl2MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZC0yYCk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBib2FyZERpdjEuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgYm9hcmREaXYxLmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgYm9hcmREaXYyLmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIGJvYXJkRGl2Mi5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kVHVybihwbGF5ZXIpIHtcbiAgY29uc3QgdGFyZ2V0UGxheWVyID0gZmluZE90aGVyUGxheWVyKHBsYXllcik7XG4gIGNvbnN0IGNvb3JkID0gZmluZFNlbGVjdGVkKHRhcmdldFBsYXllcik7XG4gIHNob290KHRhcmdldFBsYXllciwgY29vcmQpO1xufVxuXG5mdW5jdGlvbiBhZGRFbmRUdXJuQ2xpY2soKSB7XG4gIGNvbnN0IHR1cm5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cm4tYnV0dG9uXCIpO1xuXG4gIHR1cm5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGZpbmRDdXJyZW50UGxheWVyKCk7XG4gICAgY29uc3QgdGFyZ2V0UGxheWVyID0gZmluZE90aGVyUGxheWVyKGN1cnJlbnRQbGF5ZXIpO1xuICAgIGlmIChjdXJyZW50UGxheWVyLmRpZEFjdGlvbiAmJiB0YXJnZXRQbGF5ZXIuYXJlYS5oYXNTaGlwcygpKSB7XG4gICAgICBlbmRUdXJuKGN1cnJlbnRQbGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShmaXJzdFBsYXllcikge1xuICBjb25zdCBwbGF5ZXIxVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0xXCIpO1xuICBjb25zdCBwbGF5ZXIyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0yXCIpO1xuICBwbGF5ZXIxVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIxLm5hbWV9YDtcbiAgcGxheWVyMlRpdGxlLnRleHRDb250ZW50ID0gYCR7cGxheWVyMi5uYW1lfWA7XG5cbiAgY29uc3QgdHVybkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybi1idXR0b25cIik7XG4gIHR1cm5CdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCB0dXJuQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJuLWJ1dHRvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IHJlc3RhcnRCdXR0b24gPSB0dXJuQnV0dG9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idXR0b25cIik7XG4gIHJlc3RhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGFkZFBsYWNlVHVybkNsaWNrKCk7XG4gIHBsYWNlVHVybihmaXJzdFBsYXllcik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVHVybihwbGF5ZXIpIHtcbiAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZUFsbChwbGF5ZXIpO1xuXG4gICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBmaW5kT3RoZXJQbGF5ZXIocGxheWVyKTtcbiAgICBpZiAob3RoZXJQbGF5ZXIuYXJlYS5zaGlwQ291bnQgPT09IDUpIHtcbiAgICAgIGNvbnN0IHR1cm5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cm4tYnV0dG9uXCIpO1xuICAgICAgdHVybkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgY29uc3QgcGxhY2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNlLWJ1dHRvblwiKTtcbiAgICAgIHBsYWNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZEFsbFNwYWNlQ2xpY2tFdmVudHMoKTtcbiAgICAgIGFkZEVuZFR1cm5DbGljaygpO1xuICAgICAgcmVtb3ZlQWxsU2hpcHMoKTtcbiAgICAgIHN0YXJ0VHVybihvdGhlclBsYXllcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJCb2FyZChwbGF5ZXIpO1xuICAgIHBsYWNlVHVybihvdGhlclBsYXllcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbm5vdW5jZW1lbnRcIik7XG4gIGFubm91bmNlbWVudC50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIFR1cm5gO1xuXG4gIGNvbnN0IHBsYWNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZS1idXR0b25cIik7XG4gIHBsYWNlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCI7XG5cbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQtJHtwbGF5ZXIubnVtYmVyfWApO1xuICBhZGREcmFnQWxsU2hpcHMoYm9hcmREaXYsIHBsYXllcik7XG4gIGFkZEFsbFJvdGF0ZUNsaWNrKGJvYXJkRGl2LCBwbGF5ZXIpO1xuXG4gIGNvbnN0IG90aGVyUGxheWVyID0gZmluZE90aGVyUGxheWVyKHBsYXllcik7XG4gIHNob3dBbmRIaWRlT3ZlcmxheShvdGhlclBsYXllciwgcGxheWVyKTtcblxuICAvL2dldEN1cnJlbnQgY2hlY2tzIHdoaWNoIHBsYXllciBpcyBzaG9vdGFibGVcbiAgcGxheWVyLnNob290YWJsZSA9IGZhbHNlO1xuICBvdGhlclBsYXllci5zaG9vdGFibGUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclJhbmRvbVBsYWNlQWxsKGNvbXB1dGVyKSB7XG4gIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIsIFwiY2FycmllclwiKTtcbiAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlciwgXCJiYXR0bGVzaGlwXCIpO1xuICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyLCBcImRlc3Ryb3llclwiKTtcbiAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlciwgXCJzdWJtYXJpbmVcIik7XG4gIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIsIFwicGF0cm9sLWJvYXRcIik7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIsIHNoaXBOYW1lKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSByZXR1cm5TaGlwTGVuZ3RoQmFzZWRPbk5hbWUoc2hpcE5hbWUpO1xuICBsZXQgcmFuZG9tQ29vcmQgPSBnZXRSYW5kb21Db29yZCgpO1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IHJhbmRvbSA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgbGV0IGhhc1BsYWNlZCA9IGNvbXB1dGVyLmFyZWEucGxhY2UoXG4gICAgbmV3IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpLFxuICAgIHJhbmRvbUNvb3JkLFxuICAgIGlzVmVydGljYWwsXG4gICAgc2hpcE5hbWVcbiAgKTtcblxuICB3aGlsZSAoIWhhc1BsYWNlZCkge1xuICAgIHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICBoYXNQbGFjZWQgPSBjb21wdXRlci5hcmVhLnBsYWNlKFxuICAgICAgbmV3IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpLFxuICAgICAgcmFuZG9tQ29vcmQsXG4gICAgICBpc1ZlcnRpY2FsLFxuICAgICAgc2hpcE5hbWVcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBsYWNlVHVybkNsaWNrKCkge1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHMtY29udGFpbmVyXCIpO1xuICBjb25zdCBwbGFjZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhY2UtYnV0dG9uXCIpO1xuICBwbGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZmluZEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBjb25zdCBvdGhlclBsYXllciA9IGZpbmRPdGhlclBsYXllcihjdXJyZW50UGxheWVyKTtcbiAgICBpZiAoY3VycmVudFBsYXllci5hcmVhLnNoaXBDb3VudCA9PT0gNSkge1xuICAgICAgLy9vdGhlclBsYXllciBoYXMgcGxhY2VkIGFscmVhZHlcbiAgICAgIGlmIChvdGhlclBsYXllci5hcmVhLnNoaXBDb3VudCA9PT0gNSkge1xuICAgICAgICBjb25zdCB0dXJuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJuLWJ1dHRvblwiKTtcbiAgICAgICAgdHVybkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwbGFjZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGFkZEFsbFNwYWNlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgYWRkRW5kVHVybkNsaWNrKCk7XG4gICAgICAgIHJlbW92ZUFsbFNoaXBzKCk7XG4gICAgICAgIHN0YXJ0VHVybihvdGhlclBsYXllcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy9yZXBsYWNlIGdldHMgcmlkIG9mIGV2ZW50IGxpc3RlbmVyXG4gICAgICByZXNldFNoaXBQb3NpdGlvbnMoY3VycmVudFBsYXllcik7XG4gICAgICBzaGlwc0NvbnRhaW5lci5yZXBsYWNlV2l0aChzaGlwc0NvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgY2xlYXJCb2FyZChjdXJyZW50UGxheWVyKTtcbiAgICAgIHBsYWNlVHVybihvdGhlclBsYXllcik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY2xlYXJHYW1lLCBzdGFydEdhbWUgfTtcbiIsImltcG9ydCB7IGNob29zZVJhbmRvbVBsYXllciwgZmluZE90aGVyUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmZ1bmN0aW9uIGFkZENsb3NlQnV0dG9uRnVuY3Rpb25hbGl0eSgpIHtcbiAgY29uc3QgbWVudU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW1vZGFsXCIpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1lbnVNb2RhbC5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudUJ1dHRvbkZ1bmN0aW9uYWxpdHkoKSB7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbW9kYWxcIik7XG4gICAgbWVudS5zaG93TW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Db2luRmxpcE1vZGFsKCkge1xuICBjb25zdCBjb2luRmxpcE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2luLWZsaXAtbW9kYWxcIik7XG4gIGNvaW5GbGlwTW9kYWwuc2hvd01vZGFsKCk7XG5cbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2luLWZsaXAtYW5ub3VuY2VtZW50XCIpO1xuICBhbm5vdW5jZW1lbnQudGV4dENvbnRlbnQgPSBcIkhlYWRzIG9yIFRhaWxzP1wiO1xuICBzaG93Q29pbkZsaXBCdXR0b25zKCk7XG5cbiAgY29uc3QgcGxheWVyID0gY2hvb3NlUmFuZG9tUGxheWVyKCk7XG4gIGNvbnN0IGhpZGRlblJlc3VsdCA9IGNob29zZVJhbmRvbUNvaW5GbGlwUmVzdWx0KCk7XG4gIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgIGNvbnN0IGNvaW5GbGlwQ2hhbXBpb24gPSBjb2luRmxpcFJlc3VsdChwbGF5ZXIsIGNob29zZVJhbmRvbUNvaW5GbGlwUmVzdWx0KCksIGhpZGRlblJlc3VsdCk7XG4gICAgZGV0ZXJtaW5lVHVybk9yZGVyKGNvaW5GbGlwQ2hhbXBpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENvaW5GbGlwQ2xpY2socGxheWVyLCBoaWRkZW5SZXN1bHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVJhbmRvbUNvaW5GbGlwUmVzdWx0KCkge1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgcmV0dXJuIHJhbmRvbU51bWJlciA9PT0gMCA/IFwiSGVhZHNcIiA6IFwiVGFpbHNcIjtcbn1cblxuZnVuY3Rpb24gc2hvd1R1cm5DaG9pY2VCdXR0b25zKCkge1xuICBjb25zdCBoZWFkc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZHNcIik7XG4gIGNvbnN0IHRhaWxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWlsc1wiKTtcbiAgY29uc3QgZmlyc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0XCIpO1xuICBjb25zdCBzZWNvbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZFwiKTtcbiAgaGVhZHNCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0YWlsc0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGZpcnN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHNlY29uZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVUdXJuT3JkZXIoY29pbkZsaXBDaGFtcGlvbikge1xuICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvaW4tY2hvb3NlclwiKTtcbiAgcHJvbXB0LnRleHRDb250ZW50ID0gYFBsYXllcjogJHtjb2luRmxpcENoYW1waW9uLm5hbWV9YDtcbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2luLWZsaXAtYW5ub3VuY2VtZW50XCIpO1xuICBhbm5vdW5jZW1lbnQudGV4dENvbnRlbnQgPSBcIkNob29zZSB5b3VyIHByZWZlcnJlZCBvcmRlclwiO1xuICBzaG93VHVybkNob2ljZUJ1dHRvbnMoKTtcblxuICBjb25zdCBmaXJzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3RcIik7XG4gIGNvbnN0IHNlY29uZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kXCIpO1xuICBjb25zdCBvdGhlclBsYXllciA9IGZpbmRPdGhlclBsYXllcihjb2luRmxpcENoYW1waW9uKTtcblxuICBpZiAoY29pbkZsaXBDaGFtcGlvbi5pc0NvbXB1dGVyKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMCkge1xuICAgICAgc3RhcnRHYW1lKGNvaW5GbGlwQ2hhbXBpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEdhbWUob3RoZXJQbGF5ZXIpO1xuICAgIH1cbiAgICBjb25zdCBjb2luRmxpcE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvaW4tZmxpcC1tb2RhbCcpO1xuICAgIGNvaW5GbGlwTW9kYWwuY2xvc2UoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXJzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzdGFydEdhbWUoY29pbkZsaXBDaGFtcGlvbik7XG4gIH0pO1xuXG4gIHNlY29uZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzdGFydEdhbWUob3RoZXJQbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvaW5GbGlwQnV0dG9ucygpIHtcbiAgY29uc3QgaGVhZHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRzXCIpO1xuICBjb25zdCB0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFpbHNcIik7XG4gIGNvbnN0IGZpcnN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdFwiKTtcbiAgY29uc3Qgc2Vjb25kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRcIik7XG4gIGhlYWRzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHRhaWxzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGZpcnN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc2Vjb25kQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gYWRkQ29pbkZsaXBDbGljayhwbGF5ZXIsIHJlc3VsdCkge1xuICBjb25zdCBoZWFkc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZHNcIik7XG4gIGNvbnN0IHRhaWxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWlsc1wiKTtcblxuICBoZWFkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29pbkZsaXBXaW5uZXIgPSBjb2luRmxpcFJlc3VsdChwbGF5ZXIsIFwiSGVhZHNcIiwgcmVzdWx0KTtcbiAgICBkZXRlcm1pbmVUdXJuT3JkZXIoY29pbkZsaXBXaW5uZXIpO1xuICB9KTtcblxuICB0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29pbkZsaXBXaW5uZXIgPSBjb2luRmxpcFJlc3VsdChwbGF5ZXIsIFwiVGFpbHNcIiwgcmVzdWx0KTtcbiAgICBkZXRlcm1pbmVUdXJuT3JkZXIoY29pbkZsaXBXaW5uZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29pbkZsaXBSZXN1bHQocGxheWVyLCBndWVzcywgcmVzdWx0KSB7XG4gIGNvbnN0IG90aGVyUGxheWVyID0gZmluZE90aGVyUGxheWVyKHBsYXllcik7XG4gIHJldHVybiBndWVzcyA9PT0gcmVzdWx0ID8gcGxheWVyIDogb3RoZXJQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVNb3N0RXNjTW9kYWwoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY29uc3QgbWVudU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW1vZGFsXCIpO1xuICAgICAgbWVudU1vZGFsLmNsb3NlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgYWRkQ2xvc2VCdXR0b25GdW5jdGlvbmFsaXR5LFxuICBhZGRNZW51QnV0dG9uRnVuY3Rpb25hbGl0eSxcbiAgb3BlbkNvaW5GbGlwTW9kYWwsXG4gIGRpc2FibGVNb3N0RXNjTW9kYWwsXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJzKG5hbWUxLCBuYW1lMiwgaXNDb21wdXRlcjEsIGlzQ29tcHV0ZXIyKSB7XG4gIGlmIChuYW1lMSA9PSBcIlwiKSB7XG4gICAgbmFtZTEgPSBcIlBsYXllciAxXCI7XG4gIH1cblxuICBpZiAobmFtZTIgPT0gXCJcIikge1xuICAgIG5hbWUyID0gXCJQbGF5ZXIgMlwiO1xuICB9XG5cbiAgaWYgKGlzQ29tcHV0ZXIxKSB7XG4gICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoMSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoMSwgZmFsc2UsIGAke25hbWUxfWApO1xuICB9XG5cbiAgaWYgKGlzQ29tcHV0ZXIyKSB7XG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoMiwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoMiwgZmFsc2UsIGAke25hbWUyfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVJhbmRvbVBsYXllcigpIHtcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICBjb25zdCBwbGF5ZXIgPSByYW5kb21OdW1iZXIgPT09IDEgPyBwbGF5ZXIxIDogcGxheWVyMjtcbiAgY29uc3QgY29pbkNob29zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvaW4tY2hvb3NlclwiKTtcbiAgY29pbkNob29zZXIudGV4dENvbnRlbnQgPSBgUGxheWVyOiAke3BsYXllci5uYW1lfWA7XG5cbiAgcmV0dXJuIHBsYXllcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1cnJlbnRQbGF5ZXIoKSB7XG4gIGlmIChwbGF5ZXIxLnNob290YWJsZSkge1xuICAgIHJldHVybiBwbGF5ZXIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGF5ZXIxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRPdGhlclBsYXllcihjdXJyZW50UGxheWVyKSB7XG4gIGxldCBvdGhlclBsYXllciA9IHBsYXllcjE7XG4gIGlmIChjdXJyZW50UGxheWVyLm51bWJlciA9PT0gMSkge1xuICAgIG90aGVyUGxheWVyID0gcGxheWVyMjtcbiAgfVxuXG4gIHJldHVybiBvdGhlclBsYXllcjtcbn1cblxubGV0IHBsYXllcjE7XG5sZXQgcGxheWVyMjtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUGxheWVycyxcbiAgY2hvb3NlUmFuZG9tUGxheWVyLFxuICBmaW5kQ3VycmVudFBsYXllcixcbiAgZmluZE90aGVyUGxheWVyLFxuICBwbGF5ZXIxLFxuICBwbGF5ZXIyLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGFkZFN0YXJ0QnV0dG9uRnVuY3Rpb25hbGl0eSxcbiAgYWRkUmVzdGFydEJ1dHRvbkZ1bmN0aW9uYWxpdHksXG4gIGFkZFJldHVybkJ1dHRvbkZ1bmN0b25hbGl0eSxcbiAgYWRkRHluYW1pY1BsYXllck5hbWVJbnB1dEZvcm0sXG59IGZyb20gXCIuL290aGVySnMvZm9ybS5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkQ2xvc2VCdXR0b25GdW5jdGlvbmFsaXR5LFxuICBhZGRNZW51QnV0dG9uRnVuY3Rpb25hbGl0eSxcbiAgZGlzYWJsZU1vc3RFc2NNb2RhbCxcbn0gZnJvbSBcIi4vb3RoZXJKcy9tb2RhbC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gYWRkQWxsQnV0dG9uRnVuY3Rpb25hbGl0eSgpIHtcbiAgYWRkU3RhcnRCdXR0b25GdW5jdGlvbmFsaXR5KCk7XG4gIGFkZFJlc3RhcnRCdXR0b25GdW5jdGlvbmFsaXR5KCk7XG4gIGFkZFJldHVybkJ1dHRvbkZ1bmN0b25hbGl0eSgpO1xuICBhZGRDbG9zZUJ1dHRvbkZ1bmN0aW9uYWxpdHkoKTtcbiAgYWRkTWVudUJ1dHRvbkZ1bmN0aW9uYWxpdHkoKTtcbn1cblxuLy9pbml0aWFsIHNldHVwXG5hZGRBbGxCdXR0b25GdW5jdGlvbmFsaXR5KCk7XG5hZGREeW5hbWljUGxheWVyTmFtZUlucHV0Rm9ybSgpO1xuZGlzYWJsZU1vc3RFc2NNb2RhbCgpO1xuXG5jb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51LW1vZGFsXCIpO1xubWFpbk1lbnUuc2hvd01vZGFsKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=