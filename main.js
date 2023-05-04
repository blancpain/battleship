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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Press+Start+2P&family=Rubik+Vinyl&family=Sigmar+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --title-ff: \"Sigmar One\", cursive;\n  --main-bgc: #6b7db3;\n  --square-bgc: #ccd9ff;\n}\n\nbody {\n  background-color: var(--main-bgc);\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  gap: 4rem;\n}\n\n#title {\n  font-size: 70px;\n  font-weight: 500;\n  letter-spacing: 6px;\n  font-family: var(--title-ff);\n}\n\n.gameboard-container {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 2rem;\n}\n\n.text-prompt {\n  margin-bottom: 2rem;\n}\n\n#place-ship {\n  color: #c3f92c;\n}\n\n#player-one-board,\n#player-two-board {\n  display: grid;\n  grid-template-columns: repeat(10, 45px);\n  border: 1px solid gray;\n}\n\n#player-two-board .board-square:not(.miss):not(.hit):hover {\n  filter: opacity(65%);\n  cursor: pointer;\n}\n\n.board-square {\n  height: 45px;\n  width: 45px;\n  border: 1px solid gray;\n  background-color: var(--square-bgc);\n}\n\n#new-game-poppup {\n  margin-top: 5rem;\n  position: absolute;\n  align-self: center;\n  z-index: 3;\n  top: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#new-game-poppup span {\n  font-size: 30px;\n  font-weight: 600;\n  padding-bottom: 2rem;\n}\n\nbutton#rotate {\n  margin-bottom: 3rem;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  background-color: purple;\n  color: white;\n  padding: 10px 40px;\n  cursor: pointer;\n  min-width: 150px;\n}\n\n.visibility {\n  visibility: hidden;\n}\n\n.ship {\n  background-color: #000;\n  z-index: 5;\n}\n\n.hit,\n.miss {\n  pointer-events: none;\n}\n\n.hit {\n  background-color: #ff4d4d;\n}\n\n.miss {\n  background-color: lightgreen;\n}\n\n.game-end {\n  pointer-events: none;\n}\n\n.ship-selection {\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n.game-over-poppup {\n  position: fixed;\n  min-width: 500px;\n  min-height: 350px;\n  left: 50%;\n  top: 50%;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  background-color: blue;\n  visibility: hidden;\n  transform: translate(-50%, -50%) scale(0.1);\n  transition: transform 0.4s;\n}\n\n.open-end-game-poppup {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.filter-opened {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 900;\n}\n\nbutton#play-again {\n  margin-bottom: 3rem;\n  font-size: 30px;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  background-color: purple;\n  color: white;\n  padding: 30px 90px;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,QAAQ;EACR,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,2CAA2C;EAC3C,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Press+Start+2P&family=Rubik+Vinyl&family=Sigmar+One&display=swap\");\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --title-ff: \"Sigmar One\", cursive;\n  --main-bgc: #6b7db3;\n  --square-bgc: #ccd9ff;\n}\n\nbody {\n  background-color: var(--main-bgc);\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  gap: 4rem;\n}\n\n#title {\n  font-size: 70px;\n  font-weight: 500;\n  letter-spacing: 6px;\n  font-family: var(--title-ff);\n}\n\n.gameboard-container {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 2rem;\n}\n\n.text-prompt {\n  margin-bottom: 2rem;\n}\n\n#place-ship {\n  color: #c3f92c;\n}\n\n#player-one-board,\n#player-two-board {\n  display: grid;\n  grid-template-columns: repeat(10, 45px);\n  border: 1px solid gray;\n}\n\n#player-two-board .board-square:not(.miss):not(.hit):hover {\n  filter: opacity(65%);\n  cursor: pointer;\n}\n\n.board-square {\n  height: 45px;\n  width: 45px;\n  border: 1px solid gray;\n  background-color: var(--square-bgc);\n}\n\n#new-game-poppup {\n  margin-top: 5rem;\n  position: absolute;\n  align-self: center;\n  z-index: 3;\n  top: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#new-game-poppup span {\n  font-size: 30px;\n  font-weight: 600;\n  padding-bottom: 2rem;\n}\n\nbutton#rotate {\n  margin-bottom: 3rem;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  background-color: purple;\n  color: white;\n  padding: 10px 40px;\n  cursor: pointer;\n  min-width: 150px;\n}\n\n.visibility {\n  visibility: hidden;\n}\n\n.ship {\n  background-color: #000;\n  z-index: 5;\n}\n\n.hit,\n.miss {\n  pointer-events: none;\n}\n\n.hit {\n  background-color: #ff4d4d;\n}\n\n.miss {\n  background-color: lightgreen;\n}\n\n.game-end {\n  pointer-events: none;\n}\n\n.ship-selection {\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n.game-over-poppup {\n  position: fixed;\n  min-width: 500px;\n  min-height: 350px;\n  left: 50%;\n  top: 50%;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  background-color: blue;\n  visibility: hidden;\n  transform: translate(-50%, -50%) scale(0.1);\n  transition: transform 0.4s;\n}\n\n.open-end-game-poppup {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.filter-opened {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 900;\n}\n\nbutton#play-again {\n  margin-bottom: 3rem;\n  font-size: 30px;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  background-color: purple;\n  color: white;\n  padding: 30px 90px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const playerOneBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const playerTwoBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

function Game() {
  const startGame = () => {
    const graphics = (0,_ui__WEBPACK_IMPORTED_MODULE_2__["default"])();
    // reset boards if needed
    playerOneBoard.resetBoard();
    playerOneBoard.resetShips();
    playerTwoBoard.resetBoard();
    playerTwoBoard.resetShips();

    // construct the players and boards
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerOneBoard, playerTwoBoard);
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerTwoBoard, playerOneBoard);
    graphics.buildBoardsUI(playerOneBoard, playerTwoBoard);

    // place ships
    graphics.displayNewGamePoppup();
    graphics.placeShips(playerOneBoard);
    playerTwoBoard.placeShip(2, "horizontal", [0, 0]);

    // play rounds
    graphics.renderMoves(playerOne, playerTwo, playerTwoBoard);
  };

  return { startGame };
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions


function Square(coords, filled) {
  if (typeof Square.currentID === "undefined") {
    Square.currentID = 0;
  } else {
    Square.currentID++;
  }
  const id = Square.currentID;
  return { id, coords, filled };
}

function Gameboard() {
  const allShips = [];
  const missedShots = [];

  const buildBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push(Square([i, j], false));
      }
    }
    return board;
  };

  const board = buildBoard();

  // helper function to determine if square is currently filled
  const isSquareFilled = (coords) => {
    const correspondingSquare = board.find(
      (sq) => sq.coords.toString() === coords.toString()
    );
    return correspondingSquare.filled;
  };

  // helper function to fill square
  const fillSquare = (coords) => {
    const correspondingSquare = board.find(
      (sq) => sq.coords.toString() === coords.toString()
    );
    correspondingSquare.filled = true;
  };

  // helper function to fetch corresponding square
  const getSquare = (coords) =>
    board.find((sq) => sq.coords.toString() === coords.toString());

  // helper function to fetch coords given a square id
  const getCoords = (squareID) => {
    const square = board.find((sq) => sq.id.toString() === squareID.toString());
    return square.coords;
  };

  // helper function to get square given an id
  const getSquareGivenID = (input) =>
    board.find((sq) => sq.id.toString() === input.toString());

  // helper function to find ship given a coordinate
  const findShip = (coords) => {
    for (let i = 0; i < allShips.length; i++) {
      const ship = allShips[i];
      const shipLocation = ship.getLocation();

      for (let j = 0; j < shipLocation.length; j++) {
        const coordinate = shipLocation[j];

        if (coordinate.toString() === coords.toString()) {
          return ship;
        }
      }
    }
    return null;
  };

  const placeShip = (length, orientation, coords) => {
    const shipLocation = [];
    let isPlacementLegal = true;

    // if ship is vertical Y coord stays the same and we only increment X
    if (orientation === "vertical") {
      let coordX = coords[0];
      for (let i = 0; i < length; i++) {
        // check if out of bounds
        if (coordX < 0 || coordX > 9) return null;

        const coordinates = [coordX, coords[1]];
        shipLocation.push(coordinates);
        coordX += 1;
      }
      // if ship is horizontal X coord stays the same and we only increment Y
    } else if (orientation === "horizontal") {
      let coordY = coords[1];
      for (let i = 0; i < length; i++) {
        // check if out of bounds
        if (coordY < 0 || coordY > 9) return null;

        const coordinates = [coords[0], coordY];
        shipLocation.push(coordinates);
        coordY += 1;
      }
    }

    // check potential overlaps
    shipLocation.forEach((coordinate) => {
      if (isSquareFilled(coordinate)) isPlacementLegal = false;
    });
    if (!isPlacementLegal) return null;

    // if no overlaps we create the ship and fill the squares
    shipLocation.forEach((coordinate) => fillSquare(coordinate));
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, shipLocation);
    allShips.push(newShip);

    return newShip;
  };

  const resetShips = () => {
    allShips.length = 0;
  };

  const resetBoard = () => {
    board.forEach((square) => {
      // eslint-disable-next-line no-param-reassign
      square.filled = false;
    });
  };

  const receiveAttack = (coords) => {
    if (!isSquareFilled(coords)) {
      missedShots.push(getSquare(coords));
      return getSquare(coords).filled;
    }
    const targetedShip = findShip(coords);
    targetedShip.hit();

    return getSquare(coords).filled;
  };

  // check if all ships are sunk
  const shipsSunk = () => allShips.every((ship) => ship.isSunk());

  const getShipLocations = () => {
    const shipLocationIDs = [];

    allShips.forEach((ship) => {
      const shipLocation = ship.getLocation();

      shipLocation.forEach((coord) => {
        shipLocationIDs.push(getSquare(coord).id);
      });
    });

    return shipLocationIDs;
  };

  return {
    placeShip,
    receiveAttack,
    shipsSunk,
    allShips,
    missedShots,
    findShip,
    getSquare,
    board,
    getShipLocations,
    getCoords,
    getSquareGivenID,
    resetBoard,
    resetShips,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(ownBoard, enemyBoard) {
  const moves = new Set();
  let wins = 0;

  const getWins = () => wins;
  // eslint-disable-next-line no-plusplus
  const incrementWins = () => wins++;

  const makeMove = (coords) => {
    const targetedSquare = enemyBoard.getSquare(coords);
    if (!moves.has(targetedSquare)) {
      enemyBoard.receiveAttack(coords);
      moves.add(targetedSquare);
    }
    return targetedSquare.filled;
  };

  const makeMoveAI = () => {
    let foundMove = false;
    let targetedSquare;
    while (!foundMove && moves.size < 100) {
      const randomNum = Math.floor(Math.random() * 100);
      const randomSquare = enemyBoard.getSquareGivenID(randomNum);

      if (!moves.has(randomSquare)) {
        enemyBoard.receiveAttack(enemyBoard.getCoords(randomNum));
        moves.add(randomSquare);
        foundMove = true;
        targetedSquare = randomSquare;
      }
    }
    return targetedSquare;
  };

  const checkWin = () => {
    if (enemyBoard.shipsSunk()) {
      incrementWins();
      return true;
    }
    return false;
  };

  return { makeMove, makeMoveAI, moves, getWins, checkWin };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, location) {
  const getLength = () => length;
  let health = length;
  let sunk = false;
  let hits = 0;

  const isSunk = () => sunk;
  const getHits = () => hits;
  const getLocation = () => location;

  const hit = () => {
    health -= 1;
    hits += 1;
    if (health <= 0) {
      sunk = true;
    }
  };

  return { getLength, getHits, getLocation, hit, isSunk };
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphicsController)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


function GraphicsController() {
  const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // ui containers
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");
  const newGamePoppup = document.querySelector("#new-game-poppup");
  const boardsContainer = document.querySelector(".gameboard-container");
  const rotateBtn = document.querySelector("#rotate");
  rotateBtn.value = "horizontal";
  const endGamePoppup = document.querySelector(".game-over-poppup");
  const endGameBgcFilter = document.querySelector("#filter");
  const playAgainBtn = document.querySelector("#play-again");

  const buildBoardsUI = (playerOneBoard, playerTwoBoard) => {
    for (let i = 0; i < playerOneBoard.board.length; i += 1) {
      const squareID = playerOneBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerOneBoardUI.appendChild(newSquare);
      playerOneBoardUI.classList.add("visibility");
    }

    for (let i = 0; i < playerTwoBoard.board.length; i += 1) {
      const squareID = playerTwoBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerTwoBoardUI.appendChild(newSquare);
      playerTwoBoardUI.classList.add("visibility");
    }
  };

  const displayNewGamePoppup = () => {
    boardsContainer.removeChild(playerOneBoardUI);
    boardsContainer.removeChild(playerTwoBoardUI);
    newGamePoppup.appendChild(playerOneBoardUI);
    playerOneBoardUI.classList.remove("visibility");
  };

  const resetGame = () => {
    while (playerOneBoardUI.hasChildNodes()) {
      playerOneBoardUI.removeChild(playerOneBoardUI.lastChild);
    }
    while (playerTwoBoardUI.hasChildNodes()) {
      playerTwoBoardUI.removeChild(playerTwoBoardUI.lastChild);
    }
    newGamePoppup.classList.remove("visibility");
    playerTwoBoardUI.classList.toggle("game-end");
    playerOneBoardUI.style.pointerEvents = "all";
    rotateBtn.value = "horizontal";
  };

  const handleRotateBtnClick = () => {
    rotateBtn.value =
      rotateBtn.value === "horizontal" ? "vertical" : "horizontal";
  };

  const handleEndGame = () => {
    playerTwoBoardUI.classList.toggle("game-end");
    resetGame();
    game.startGame();
  };

  const renderMoves = (playerOne, playerTwo, playerTwoBoard) => {
    playerTwoBoardUI.childNodes.forEach((square) => {
      square.addEventListener("click", () => {
        const squareCoords = playerTwoBoard.getCoords(square.dataset.index);
        const isHit = playerOne.makeMove(squareCoords);
        if (isHit === true) {
          square.classList.add("hit");
        } else if (isHit === false) {
          square.classList.add("miss");
        }

        // check if player won on last move
        if (playerOne.checkWin()) {
          endGameBgcFilter.classList.toggle("filter-opened");
          endGamePoppup.classList.add("open-end-game-poppup");
          playAgainBtn.addEventListener("click", handleEndGame);
          // playerTwoBoardUI.classList.toggle("game-end");
          // resetGame();
          // game.startGame();
          return null;
        }

        // player has moved so we call makeMove for the AI
        const computerMove = playerTwo.makeMoveAI();
        playerOneBoardUI.childNodes.forEach((node) => {
          if (Number(node.dataset.index) === Number(computerMove.id)) {
            if (computerMove.filled) node.classList.add("hit");
            else if (!computerMove.filled) node.classList.add("miss");
          }
        });

        // check if computer won on last move
        if (playerTwo.checkWin()) {
          endGameBgcFilter.classList.toggle("filter-opened");
          endGamePoppup.classList.add("open-end-game-poppup");
          // playerTwoBoardUI.classList.toggle("game-end");
          // resetGame();
          // game.startGame();
          playAgainBtn.addEventListener("click", handleEndGame);
          return null;
        }
      });
    });
  };

  // helper to check if squares are on the same row
  const isInSameRow = (index1, index2, rowSize) =>
    Math.floor(index1 / rowSize) === Math.floor(index2 / rowSize);

  // helper to check if squares are on the same col
  const isInSameCol = (index1, index2, colSize) =>
    index1 % colSize === index2 % colSize;

  // helper to check if ship can be placed in hovered area
  const canPlaceShip = (index, length, orientation, gridSquares) => {
    for (let i = 0; i < length; i += 1) {
      const hoverIndex =
        orientation === "horizontal" ? index + i : index + i * 10;
      if (
        hoverIndex < 0 ||
        hoverIndex >= 100 ||
        gridSquares[hoverIndex].classList.contains("ship") ||
        (orientation === "horizontal" && !isInSameRow(index, hoverIndex, 10)) ||
        (orientation === "vertical" && !isInSameCol(index, hoverIndex, 10))
      ) {
        return false;
      }
    }
    return true;
  };

  // helper to update ship placement text prompt
  const updatePrompt = (index) => {
    if (index === 0) return "Carrier";
    if (index === 1) return "Battleship";
    if (index === 2) return "Destroyer";
    if (index === 3) return "Submarine";
    if (index === 4) return "Patrol Boat";
  };

  const placeShips = (board) => {
    // add rotate btn event listener
    rotateBtn.addEventListener("click", handleRotateBtnClick);

    const shipLengths = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;
    const gridSquares = playerOneBoardUI.children;
    const textPrompt = document.querySelector("#place-ship");
    textPrompt.textContent = updatePrompt(currentShipIndex);

    // mouse enter handler
    const handleMouseEnter = () => (e) => {
      const index = Number(e.target.dataset.index);
      for (let i = 0; i < shipLengths[currentShipIndex]; i += 1) {
        const hoverIndex =
          rotateBtn.value === "horizontal" ? index + i : index + i * 10;
        if (
          hoverIndex >= 0 &&
          hoverIndex < 100 &&
          !gridSquares[hoverIndex].classList.contains("ship")
        ) {
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10))
          ) {
            gridSquares[hoverIndex].classList.add("ship-selection");
          }
        }
      }
    };

    // mouse leave handler
    const handleMouseLeave = () => (e) => {
      const index = Number(e.target.dataset.index);
      for (let i = 0; i < shipLengths[currentShipIndex]; i += 1) {
        const hoverIndex =
          rotateBtn.value === "horizontal" ? index + i : index + i * 10;
        if (
          hoverIndex >= 0 &&
          hoverIndex < 100 &&
          !gridSquares[hoverIndex].classList.contains("ship")
        ) {
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10))
          ) {
            gridSquares[hoverIndex].classList.remove("ship-selection");
          }
        }
      }
    };

    // click event handler
    const handleClicks = () => (e) => {
      const index = Number(e.target.dataset.index);
      const coords = board.getCoords(index);
      const orientation = rotateBtn.value;
      const shipLength = shipLengths[currentShipIndex];
      if (canPlaceShip(index, shipLength, orientation, gridSquares)) {
        board.placeShip(shipLength, orientation, coords);
        for (let i = 0; i < shipLength; i += 1) {
          const hoverIndex =
            orientation === "horizontal" ? index + i : index + i * 10;
          if (
            hoverIndex >= 0 &&
            hoverIndex < 100 &&
            !gridSquares[hoverIndex].classList.contains("ship")
          ) {
            if (
              (orientation === "horizontal" &&
                isInSameRow(index, hoverIndex, 10)) ||
              (orientation === "vertical" && isInSameCol(index, hoverIndex, 10))
            ) {
              gridSquares[hoverIndex].classList.add("ship");
              gridSquares[hoverIndex].classList.remove("ship-selection");
            }
          }
        }
        if (currentShipIndex === shipLengths.length - 1) {
          // remove rotate btn event listener so that it
          // doesn't persist accross games
          rotateBtn.removeEventListener("click", handleRotateBtnClick);

          // update UI
          newGamePoppup.removeChild(playerOneBoardUI);
          newGamePoppup.classList.add("visibility");
          boardsContainer.appendChild(playerOneBoardUI);
          boardsContainer.appendChild(playerTwoBoardUI);
          playerOneBoardUI.classList.remove("visibility");
          playerTwoBoardUI.classList.remove("visibility");
          playerOneBoardUI.style.pointerEvents = "none";
          return null;
        }
        currentShipIndex += 1;
        textPrompt.textContent = updatePrompt(currentShipIndex);
      }
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const gridSquare of gridSquares) {
      // listeners
      gridSquare.addEventListener(
        "mouseenter",
        handleMouseEnter(currentShipIndex)
      );
      gridSquare.addEventListener(
        "mouseleave",
        handleMouseLeave(currentShipIndex)
      );
      gridSquare.addEventListener("click", handleClicks(currentShipIndex));
    }
  };

  return {
    displayNewGamePoppup,
    buildBoardsUI,
    renderMoves,
    placeShips,
  };
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



const game = (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLOztBQUUxQixhQUFhLGlEQUFJO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDIwMCZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVJ1YmlrK1ZpbnlsJmZhbWlseT1TaWdtYXIrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdGl0bGUtZmY6IFxcXCJTaWdtYXIgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIC0tbWFpbi1iZ2M6ICM2YjdkYjM7XFxuICAtLXNxdWFyZS1iZ2M6ICNjY2Q5ZmY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZmKTtcXG59XFxuXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udGV4dC1wcm9tcHQge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI3BsYWNlLXNoaXAge1xcbiAgY29sb3I6ICNjM2Y5MmM7XFxufVxcblxcbiNwbGF5ZXItb25lLWJvYXJkLFxcbiNwbGF5ZXItdHdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDVweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4jcGxheWVyLXR3by1ib2FyZCAuYm9hcmQtc3F1YXJlOm5vdCgubWlzcyk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIGZpbHRlcjogb3BhY2l0eSg2NSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNxdWFyZS1iZ2MpO1xcbn1cXG5cXG4jbmV3LWdhbWUtcG9wcHVwIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXctZ2FtZS1wb3BwdXAgc3BhbiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbmJ1dHRvbiNyb3RhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbi52aXNpYmlsaXR5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi5oaXQsXFxuLm1pc3Mge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGQ0ZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmdhbWUtZW5kIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XFxufVxcblxcbi5nYW1lLW92ZXItcG9wcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxufVxcblxcbi5vcGVuLWVuZC1nYW1lLXBvcHB1cCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5maWx0ZXItb3BlbmVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDkwMDtcXG59XFxuXFxuYnV0dG9uI3BsYXktYWdhaW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDMwcHggOTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDIwMCZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVJ1YmlrK1ZpbnlsJmZhbWlseT1TaWdtYXIrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdGl0bGUtZmY6IFxcXCJTaWdtYXIgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIC0tbWFpbi1iZ2M6ICM2YjdkYjM7XFxuICAtLXNxdWFyZS1iZ2M6ICNjY2Q5ZmY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZmKTtcXG59XFxuXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udGV4dC1wcm9tcHQge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI3BsYWNlLXNoaXAge1xcbiAgY29sb3I6ICNjM2Y5MmM7XFxufVxcblxcbiNwbGF5ZXItb25lLWJvYXJkLFxcbiNwbGF5ZXItdHdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDVweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4jcGxheWVyLXR3by1ib2FyZCAuYm9hcmQtc3F1YXJlOm5vdCgubWlzcyk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIGZpbHRlcjogb3BhY2l0eSg2NSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNxdWFyZS1iZ2MpO1xcbn1cXG5cXG4jbmV3LWdhbWUtcG9wcHVwIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXctZ2FtZS1wb3BwdXAgc3BhbiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbmJ1dHRvbiNyb3RhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbi52aXNpYmlsaXR5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi5oaXQsXFxuLm1pc3Mge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGQ0ZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmdhbWUtZW5kIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XFxufVxcblxcbi5nYW1lLW92ZXItcG9wcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxufVxcblxcbi5vcGVuLWVuZC1nYW1lLXBvcHB1cCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5maWx0ZXItb3BlbmVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDkwMDtcXG59XFxuXFxuYnV0dG9uI3BsYXktYWdhaW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDMwcHggOTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IEdyYXBoaWNzQ29udHJvbGxlciBmcm9tIFwiLi91aVwiO1xuXG5jb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyYXBoaWNzID0gR3JhcGhpY3NDb250cm9sbGVyKCk7XG4gICAgLy8gcmVzZXQgYm9hcmRzIGlmIG5lZWRlZFxuICAgIHBsYXllck9uZUJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5yZXNldFNoaXBzKCk7XG4gICAgcGxheWVyVHdvQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIHBsYXllclR3b0JvYXJkLnJlc2V0U2hpcHMoKTtcblxuICAgIC8vIGNvbnN0cnVjdCB0aGUgcGxheWVycyBhbmQgYm9hcmRzXG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKHBsYXllck9uZUJvYXJkLCBwbGF5ZXJUd29Cb2FyZCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKHBsYXllclR3b0JvYXJkLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgZ3JhcGhpY3MuYnVpbGRCb2FyZHNVSShwbGF5ZXJPbmVCb2FyZCwgcGxheWVyVHdvQm9hcmQpO1xuXG4gICAgLy8gcGxhY2Ugc2hpcHNcbiAgICBncmFwaGljcy5kaXNwbGF5TmV3R2FtZVBvcHB1cCgpO1xuICAgIGdyYXBoaWNzLnBsYWNlU2hpcHMocGxheWVyT25lQm9hcmQpO1xuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgyLCBcImhvcml6b250YWxcIiwgWzAsIDBdKTtcblxuICAgIC8vIHBsYXkgcm91bmRzXG4gICAgZ3JhcGhpY3MucmVuZGVyTW92ZXMocGxheWVyT25lLCBwbGF5ZXJUd28sIHBsYXllclR3b0JvYXJkKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydEdhbWUgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gU3F1YXJlKGNvb3JkcywgZmlsbGVkKSB7XG4gIGlmICh0eXBlb2YgU3F1YXJlLmN1cnJlbnRJRCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIFNxdWFyZS5jdXJyZW50SUQgPSAwO1xuICB9IGVsc2Uge1xuICAgIFNxdWFyZS5jdXJyZW50SUQrKztcbiAgfVxuICBjb25zdCBpZCA9IFNxdWFyZS5jdXJyZW50SUQ7XG4gIHJldHVybiB7IGlkLCBjb29yZHMsIGZpbGxlZCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGFsbFNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG5cbiAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkLnB1c2goU3F1YXJlKFtpLCBqXSwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3F1YXJlIGlzIGN1cnJlbnRseSBmaWxsZWRcbiAgY29uc3QgaXNTcXVhcmVGaWxsZWQgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgY29ycmVzcG9uZGluZ1NxdWFyZSA9IGJvYXJkLmZpbmQoXG4gICAgICAoc3EpID0+IHNxLmNvb3Jkcy50b1N0cmluZygpID09PSBjb29yZHMudG9TdHJpbmcoKVxuICAgICk7XG4gICAgcmV0dXJuIGNvcnJlc3BvbmRpbmdTcXVhcmUuZmlsbGVkO1xuICB9O1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0byBmaWxsIHNxdWFyZVxuICBjb25zdCBmaWxsU3F1YXJlID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdTcXVhcmUgPSBib2FyZC5maW5kKFxuICAgICAgKHNxKSA9PiBzcS5jb29yZHMudG9TdHJpbmcoKSA9PT0gY29vcmRzLnRvU3RyaW5nKClcbiAgICApO1xuICAgIGNvcnJlc3BvbmRpbmdTcXVhcmUuZmlsbGVkID0gdHJ1ZTtcbiAgfTtcblxuICAvLyBoZWxwZXIgZnVuY3Rpb24gdG8gZmV0Y2ggY29ycmVzcG9uZGluZyBzcXVhcmVcbiAgY29uc3QgZ2V0U3F1YXJlID0gKGNvb3JkcykgPT5cbiAgICBib2FyZC5maW5kKChzcSkgPT4gc3EuY29vcmRzLnRvU3RyaW5nKCkgPT09IGNvb3Jkcy50b1N0cmluZygpKTtcblxuICAvLyBoZWxwZXIgZnVuY3Rpb24gdG8gZmV0Y2ggY29vcmRzIGdpdmVuIGEgc3F1YXJlIGlkXG4gIGNvbnN0IGdldENvb3JkcyA9IChzcXVhcmVJRCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLmZpbmQoKHNxKSA9PiBzcS5pZC50b1N0cmluZygpID09PSBzcXVhcmVJRC50b1N0cmluZygpKTtcbiAgICByZXR1cm4gc3F1YXJlLmNvb3JkcztcbiAgfTtcblxuICAvLyBoZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNxdWFyZSBnaXZlbiBhbiBpZFxuICBjb25zdCBnZXRTcXVhcmVHaXZlbklEID0gKGlucHV0KSA9PlxuICAgIGJvYXJkLmZpbmQoKHNxKSA9PiBzcS5pZC50b1N0cmluZygpID09PSBpbnB1dC50b1N0cmluZygpKTtcblxuICAvLyBoZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBzaGlwIGdpdmVuIGEgY29vcmRpbmF0ZVxuICBjb25zdCBmaW5kU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwID0gYWxsU2hpcHNbaV07XG4gICAgICBjb25zdCBzaGlwTG9jYXRpb24gPSBzaGlwLmdldExvY2F0aW9uKCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcExvY2F0aW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBzaGlwTG9jYXRpb25bal07XG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT0gY29vcmRzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICByZXR1cm4gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbiwgY29vcmRzKSA9PiB7XG4gICAgY29uc3Qgc2hpcExvY2F0aW9uID0gW107XG4gICAgbGV0IGlzUGxhY2VtZW50TGVnYWwgPSB0cnVlO1xuXG4gICAgLy8gaWYgc2hpcCBpcyB2ZXJ0aWNhbCBZIGNvb3JkIHN0YXlzIHRoZSBzYW1lIGFuZCB3ZSBvbmx5IGluY3JlbWVudCBYXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBjb29yZFggPSBjb29yZHNbMF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgaWYgKGNvb3JkWCA8IDAgfHwgY29vcmRYID4gOSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbY29vcmRYLCBjb29yZHNbMV1dO1xuICAgICAgICBzaGlwTG9jYXRpb24ucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIGNvb3JkWCArPSAxO1xuICAgICAgfVxuICAgICAgLy8gaWYgc2hpcCBpcyBob3Jpem9udGFsIFggY29vcmQgc3RheXMgdGhlIHNhbWUgYW5kIHdlIG9ubHkgaW5jcmVtZW50IFlcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgbGV0IGNvb3JkWSA9IGNvb3Jkc1sxXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICBpZiAoY29vcmRZIDwgMCB8fCBjb29yZFkgPiA5KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtjb29yZHNbMF0sIGNvb3JkWV07XG4gICAgICAgIHNoaXBMb2NhdGlvbi5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29vcmRZICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgcG90ZW50aWFsIG92ZXJsYXBzXG4gICAgc2hpcExvY2F0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChpc1NxdWFyZUZpbGxlZChjb29yZGluYXRlKSkgaXNQbGFjZW1lbnRMZWdhbCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICghaXNQbGFjZW1lbnRMZWdhbCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBpZiBubyBvdmVybGFwcyB3ZSBjcmVhdGUgdGhlIHNoaXAgYW5kIGZpbGwgdGhlIHNxdWFyZXNcbiAgICBzaGlwTG9jYXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4gZmlsbFNxdWFyZShjb29yZGluYXRlKSk7XG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoLCBzaGlwTG9jYXRpb24pO1xuICAgIGFsbFNoaXBzLnB1c2gobmV3U2hpcCk7XG5cbiAgICByZXR1cm4gbmV3U2hpcDtcbiAgfTtcblxuICBjb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICAgIGFsbFNoaXBzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgc3F1YXJlLmZpbGxlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgaWYgKCFpc1NxdWFyZUZpbGxlZChjb29yZHMpKSB7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGdldFNxdWFyZShjb29yZHMpKTtcbiAgICAgIHJldHVybiBnZXRTcXVhcmUoY29vcmRzKS5maWxsZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldGVkU2hpcCA9IGZpbmRTaGlwKGNvb3Jkcyk7XG4gICAgdGFyZ2V0ZWRTaGlwLmhpdCgpO1xuXG4gICAgcmV0dXJuIGdldFNxdWFyZShjb29yZHMpLmZpbGxlZDtcbiAgfTtcblxuICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgY29uc3Qgc2hpcHNTdW5rID0gKCkgPT4gYWxsU2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldFNoaXBMb2NhdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcExvY2F0aW9uSURzID0gW107XG5cbiAgICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzaGlwTG9jYXRpb24gPSBzaGlwLmdldExvY2F0aW9uKCk7XG5cbiAgICAgIHNoaXBMb2NhdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBzaGlwTG9jYXRpb25JRHMucHVzaChnZXRTcXVhcmUoY29vcmQpLmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBMb2NhdGlvbklEcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBzU3VuayxcbiAgICBhbGxTaGlwcyxcbiAgICBtaXNzZWRTaG90cyxcbiAgICBmaW5kU2hpcCxcbiAgICBnZXRTcXVhcmUsXG4gICAgYm9hcmQsXG4gICAgZ2V0U2hpcExvY2F0aW9ucyxcbiAgICBnZXRDb29yZHMsXG4gICAgZ2V0U3F1YXJlR2l2ZW5JRCxcbiAgICByZXNldEJvYXJkLFxuICAgIHJlc2V0U2hpcHMsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIob3duQm9hcmQsIGVuZW15Qm9hcmQpIHtcbiAgY29uc3QgbW92ZXMgPSBuZXcgU2V0KCk7XG4gIGxldCB3aW5zID0gMDtcblxuICBjb25zdCBnZXRXaW5zID0gKCkgPT4gd2lucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGNvbnN0IGluY3JlbWVudFdpbnMgPSAoKSA9PiB3aW5zKys7XG5cbiAgY29uc3QgbWFrZU1vdmUgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ZWRTcXVhcmUgPSBlbmVteUJvYXJkLmdldFNxdWFyZShjb29yZHMpO1xuICAgIGlmICghbW92ZXMuaGFzKHRhcmdldGVkU3F1YXJlKSkge1xuICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICBtb3Zlcy5hZGQodGFyZ2V0ZWRTcXVhcmUpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0ZWRTcXVhcmUuZmlsbGVkO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VNb3ZlQUkgPSAoKSA9PiB7XG4gICAgbGV0IGZvdW5kTW92ZSA9IGZhbHNlO1xuICAgIGxldCB0YXJnZXRlZFNxdWFyZTtcbiAgICB3aGlsZSAoIWZvdW5kTW92ZSAmJiBtb3Zlcy5zaXplIDwgMTAwKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gZW5lbXlCb2FyZC5nZXRTcXVhcmVHaXZlbklEKHJhbmRvbU51bSk7XG5cbiAgICAgIGlmICghbW92ZXMuaGFzKHJhbmRvbVNxdWFyZSkpIHtcbiAgICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGVuZW15Qm9hcmQuZ2V0Q29vcmRzKHJhbmRvbU51bSkpO1xuICAgICAgICBtb3Zlcy5hZGQocmFuZG9tU3F1YXJlKTtcbiAgICAgICAgZm91bmRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdGFyZ2V0ZWRTcXVhcmUgPSByYW5kb21TcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRlZFNxdWFyZTtcbiAgfTtcblxuICBjb25zdCBjaGVja1dpbiA9ICgpID0+IHtcbiAgICBpZiAoZW5lbXlCb2FyZC5zaGlwc1N1bmsoKSkge1xuICAgICAgaW5jcmVtZW50V2lucygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4geyBtYWtlTW92ZSwgbWFrZU1vdmVBSSwgbW92ZXMsIGdldFdpbnMsIGNoZWNrV2luIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbG9jYXRpb24pIHtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc3VuaztcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4gbG9jYXRpb247XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhlYWx0aCAtPSAxO1xuICAgIGhpdHMgKz0gMTtcbiAgICBpZiAoaGVhbHRoIDw9IDApIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGdldEhpdHMsIGdldExvY2F0aW9uLCBoaXQsIGlzU3VuayB9O1xufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFwaGljc0NvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IGdhbWUgPSBHYW1lKCk7XG4gIC8vIHVpIGNvbnRhaW5lcnNcbiAgY29uc3QgcGxheWVyT25lQm9hcmRVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLW9uZS1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmRVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLXR3by1ib2FyZFwiKTtcbiAgY29uc3QgbmV3R2FtZVBvcHB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWdhbWUtcG9wcHVwXCIpO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZC1jb250YWluZXJcIik7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm90YXRlXCIpO1xuICByb3RhdGVCdG4udmFsdWUgPSBcImhvcml6b250YWxcIjtcbiAgY29uc3QgZW5kR2FtZVBvcHB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVyLXBvcHB1cFwiKTtcbiAgY29uc3QgZW5kR2FtZUJnY0ZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyXCIpO1xuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXktYWdhaW5cIik7XG5cbiAgY29uc3QgYnVpbGRCb2FyZHNVSSA9IChwbGF5ZXJPbmVCb2FyZCwgcGxheWVyVHdvQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZUJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmVJRCA9IHBsYXllck9uZUJvYXJkLmJvYXJkW2ldLmlkO1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1NxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtc3F1YXJlXCIpO1xuICAgICAgbmV3U3F1YXJlLmRhdGFzZXQuaW5kZXggPSBzcXVhcmVJRDtcbiAgICAgIHBsYXllck9uZUJvYXJkVUkuYXBwZW5kQ2hpbGQobmV3U3F1YXJlKTtcbiAgICAgIHBsYXllck9uZUJvYXJkVUkuY2xhc3NMaXN0LmFkZChcInZpc2liaWxpdHlcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUd29Cb2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlSUQgPSBwbGF5ZXJUd29Cb2FyZC5ib2FyZFtpXS5pZDtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNxdWFyZVwiKTtcbiAgICAgIG5ld1NxdWFyZS5kYXRhc2V0LmluZGV4ID0gc3F1YXJlSUQ7XG4gICAgICBwbGF5ZXJUd29Cb2FyZFVJLmFwcGVuZENoaWxkKG5ld1NxdWFyZSk7XG4gICAgICBwbGF5ZXJUd29Cb2FyZFVJLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmlsaXR5XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5TmV3R2FtZVBvcHB1cCA9ICgpID0+IHtcbiAgICBib2FyZHNDb250YWluZXIucmVtb3ZlQ2hpbGQocGxheWVyT25lQm9hcmRVSSk7XG4gICAgYm9hcmRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBsYXllclR3b0JvYXJkVUkpO1xuICAgIG5ld0dhbWVQb3BwdXAuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRVSSk7XG4gICAgcGxheWVyT25lQm9hcmRVSS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJpbGl0eVwiKTtcbiAgfTtcblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHBsYXllck9uZUJvYXJkVUkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBwbGF5ZXJPbmVCb2FyZFVJLnJlbW92ZUNoaWxkKHBsYXllck9uZUJvYXJkVUkubGFzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKHBsYXllclR3b0JvYXJkVUkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBwbGF5ZXJUd29Cb2FyZFVJLnJlbW92ZUNoaWxkKHBsYXllclR3b0JvYXJkVUkubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbmV3R2FtZVBvcHB1cC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJpbGl0eVwiKTtcbiAgICBwbGF5ZXJUd29Cb2FyZFVJLmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLWVuZFwiKTtcbiAgICBwbGF5ZXJPbmVCb2FyZFVJLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICAgIHJvdGF0ZUJ0bi52YWx1ZSA9IFwiaG9yaXpvbnRhbFwiO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJvdGF0ZUJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIHJvdGF0ZUJ0bi52YWx1ZSA9XG4gICAgICByb3RhdGVCdG4udmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5kR2FtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJUd29Cb2FyZFVJLmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLWVuZFwiKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBnYW1lLnN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1vdmVzID0gKHBsYXllck9uZSwgcGxheWVyVHdvLCBwbGF5ZXJUd29Cb2FyZCkgPT4ge1xuICAgIHBsYXllclR3b0JvYXJkVUkuY2hpbGROb2Rlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBwbGF5ZXJUd29Cb2FyZC5nZXRDb29yZHMoc3F1YXJlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBjb25zdCBpc0hpdCA9IHBsYXllck9uZS5tYWtlTW92ZShzcXVhcmVDb29yZHMpO1xuICAgICAgICBpZiAoaXNIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiBwbGF5ZXIgd29uIG9uIGxhc3QgbW92ZVxuICAgICAgICBpZiAocGxheWVyT25lLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICBlbmRHYW1lQmdjRmlsdGVyLmNsYXNzTGlzdC50b2dnbGUoXCJmaWx0ZXItb3BlbmVkXCIpO1xuICAgICAgICAgIGVuZEdhbWVQb3BwdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tZW5kLWdhbWUtcG9wcHVwXCIpO1xuICAgICAgICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRW5kR2FtZSk7XG4gICAgICAgICAgLy8gcGxheWVyVHdvQm9hcmRVSS5jbGFzc0xpc3QudG9nZ2xlKFwiZ2FtZS1lbmRcIik7XG4gICAgICAgICAgLy8gcmVzZXRHYW1lKCk7XG4gICAgICAgICAgLy8gZ2FtZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsYXllciBoYXMgbW92ZWQgc28gd2UgY2FsbCBtYWtlTW92ZSBmb3IgdGhlIEFJXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IHBsYXllclR3by5tYWtlTW92ZUFJKCk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkVUkuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKE51bWJlcihub2RlLmRhdGFzZXQuaW5kZXgpID09PSBOdW1iZXIoY29tcHV0ZXJNb3ZlLmlkKSkge1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVyTW92ZS5maWxsZWQpIG5vZGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCFjb21wdXRlck1vdmUuZmlsbGVkKSBub2RlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY29tcHV0ZXIgd29uIG9uIGxhc3QgbW92ZVxuICAgICAgICBpZiAocGxheWVyVHdvLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICBlbmRHYW1lQmdjRmlsdGVyLmNsYXNzTGlzdC50b2dnbGUoXCJmaWx0ZXItb3BlbmVkXCIpO1xuICAgICAgICAgIGVuZEdhbWVQb3BwdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tZW5kLWdhbWUtcG9wcHVwXCIpO1xuICAgICAgICAgIC8vIHBsYXllclR3b0JvYXJkVUkuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtZW5kXCIpO1xuICAgICAgICAgIC8vIHJlc2V0R2FtZSgpO1xuICAgICAgICAgIC8vIGdhbWUuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFbmRHYW1lKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gaGVscGVyIHRvIGNoZWNrIGlmIHNxdWFyZXMgYXJlIG9uIHRoZSBzYW1lIHJvd1xuICBjb25zdCBpc0luU2FtZVJvdyA9IChpbmRleDEsIGluZGV4Miwgcm93U2l6ZSkgPT5cbiAgICBNYXRoLmZsb29yKGluZGV4MSAvIHJvd1NpemUpID09PSBNYXRoLmZsb29yKGluZGV4MiAvIHJvd1NpemUpO1xuXG4gIC8vIGhlbHBlciB0byBjaGVjayBpZiBzcXVhcmVzIGFyZSBvbiB0aGUgc2FtZSBjb2xcbiAgY29uc3QgaXNJblNhbWVDb2wgPSAoaW5kZXgxLCBpbmRleDIsIGNvbFNpemUpID0+XG4gICAgaW5kZXgxICUgY29sU2l6ZSA9PT0gaW5kZXgyICUgY29sU2l6ZTtcblxuICAvLyBoZWxwZXIgdG8gY2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGluIGhvdmVyZWQgYXJlYVxuICBjb25zdCBjYW5QbGFjZVNoaXAgPSAoaW5kZXgsIGxlbmd0aCwgb3JpZW50YXRpb24sIGdyaWRTcXVhcmVzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaG92ZXJJbmRleCA9XG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGluZGV4ICsgaSA6IGluZGV4ICsgaSAqIDEwO1xuICAgICAgaWYgKFxuICAgICAgICBob3ZlckluZGV4IDwgMCB8fFxuICAgICAgICBob3ZlckluZGV4ID49IDEwMCB8fFxuICAgICAgICBncmlkU3F1YXJlc1tob3ZlckluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpIHx8XG4gICAgICAgIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgIWlzSW5TYW1lUm93KGluZGV4LCBob3ZlckluZGV4LCAxMCkpIHx8XG4gICAgICAgIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmICFpc0luU2FtZUNvbChpbmRleCwgaG92ZXJJbmRleCwgMTApKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gaGVscGVyIHRvIHVwZGF0ZSBzaGlwIHBsYWNlbWVudCB0ZXh0IHByb21wdFxuICBjb25zdCB1cGRhdGVQcm9tcHQgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHJldHVybiBcIkNhcnJpZXJcIjtcbiAgICBpZiAoaW5kZXggPT09IDEpIHJldHVybiBcIkJhdHRsZXNoaXBcIjtcbiAgICBpZiAoaW5kZXggPT09IDIpIHJldHVybiBcIkRlc3Ryb3llclwiO1xuICAgIGlmIChpbmRleCA9PT0gMykgcmV0dXJuIFwiU3VibWFyaW5lXCI7XG4gICAgaWYgKGluZGV4ID09PSA0KSByZXR1cm4gXCJQYXRyb2wgQm9hdFwiO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgICAvLyBhZGQgcm90YXRlIGJ0biBldmVudCBsaXN0ZW5lclxuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUm90YXRlQnRuQ2xpY2spO1xuXG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgbGV0IGN1cnJlbnRTaGlwSW5kZXggPSAwO1xuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gcGxheWVyT25lQm9hcmRVSS5jaGlsZHJlbjtcbiAgICBjb25zdCB0ZXh0UHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZS1zaGlwXCIpO1xuICAgIHRleHRQcm9tcHQudGV4dENvbnRlbnQgPSB1cGRhdGVQcm9tcHQoY3VycmVudFNoaXBJbmRleCk7XG5cbiAgICAvLyBtb3VzZSBlbnRlciBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbY3VycmVudFNoaXBJbmRleF07IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBob3ZlckluZGV4ID1cbiAgICAgICAgICByb3RhdGVCdG4udmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiID8gaW5kZXggKyBpIDogaW5kZXggKyBpICogMTA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBob3ZlckluZGV4ID49IDAgJiZcbiAgICAgICAgICBob3ZlckluZGV4IDwgMTAwICYmXG4gICAgICAgICAgIWdyaWRTcXVhcmVzW2hvdmVySW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHJvdGF0ZUJ0bi52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIgJiZcbiAgICAgICAgICAgICAgaXNJblNhbWVSb3coaW5kZXgsIGhvdmVySW5kZXgsIDEwKSkgfHxcbiAgICAgICAgICAgIChyb3RhdGVCdG4udmFsdWUgPT09IFwidmVydGljYWxcIiAmJlxuICAgICAgICAgICAgICBpc0luU2FtZUNvbChpbmRleCwgaG92ZXJJbmRleCwgMTApKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZ3JpZFNxdWFyZXNbaG92ZXJJbmRleF0uY2xhc3NMaXN0LmFkZChcInNoaXAtc2VsZWN0aW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBtb3VzZSBsZWF2ZSBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbY3VycmVudFNoaXBJbmRleF07IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBob3ZlckluZGV4ID1cbiAgICAgICAgICByb3RhdGVCdG4udmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiID8gaW5kZXggKyBpIDogaW5kZXggKyBpICogMTA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBob3ZlckluZGV4ID49IDAgJiZcbiAgICAgICAgICBob3ZlckluZGV4IDwgMTAwICYmXG4gICAgICAgICAgIWdyaWRTcXVhcmVzW2hvdmVySW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHJvdGF0ZUJ0bi52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIgJiZcbiAgICAgICAgICAgICAgaXNJblNhbWVSb3coaW5kZXgsIGhvdmVySW5kZXgsIDEwKSkgfHxcbiAgICAgICAgICAgIChyb3RhdGVCdG4udmFsdWUgPT09IFwidmVydGljYWxcIiAmJlxuICAgICAgICAgICAgICBpc0luU2FtZUNvbChpbmRleCwgaG92ZXJJbmRleCwgMTApKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZ3JpZFNxdWFyZXNbaG92ZXJJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtc2VsZWN0aW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjbGljayBldmVudCBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tzID0gKCkgPT4gKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ2V0Q29vcmRzKGluZGV4KTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gcm90YXRlQnRuLnZhbHVlO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBMZW5ndGhzW2N1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgaWYgKGNhblBsYWNlU2hpcChpbmRleCwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIGdyaWRTcXVhcmVzKSkge1xuICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIGNvb3Jkcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaG92ZXJJbmRleCA9XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBpbmRleCArIGkgOiBpbmRleCArIGkgKiAxMDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBob3ZlckluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGhvdmVySW5kZXggPCAxMDAgJiZcbiAgICAgICAgICAgICFncmlkU3F1YXJlc1tob3ZlckluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiZcbiAgICAgICAgICAgICAgICBpc0luU2FtZVJvdyhpbmRleCwgaG92ZXJJbmRleCwgMTApKSB8fFxuICAgICAgICAgICAgICAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiAmJiBpc0luU2FtZUNvbChpbmRleCwgaG92ZXJJbmRleCwgMTApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGdyaWRTcXVhcmVzW2hvdmVySW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICBncmlkU3F1YXJlc1tob3ZlckluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1zZWxlY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50U2hpcEluZGV4ID09PSBzaGlwTGVuZ3Rocy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIHJvdGF0ZSBidG4gZXZlbnQgbGlzdGVuZXIgc28gdGhhdCBpdFxuICAgICAgICAgIC8vIGRvZXNuJ3QgcGVyc2lzdCBhY2Nyb3NzIGdhbWVzXG4gICAgICAgICAgcm90YXRlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSb3RhdGVCdG5DbGljayk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgVUlcbiAgICAgICAgICBuZXdHYW1lUG9wcHVwLnJlbW92ZUNoaWxkKHBsYXllck9uZUJvYXJkVUkpO1xuICAgICAgICAgIG5ld0dhbWVQb3BwdXAuY2xhc3NMaXN0LmFkZChcInZpc2liaWxpdHlcIik7XG4gICAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkVUkpO1xuICAgICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZFVJKTtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFVJLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmlsaXR5XCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkVUkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2liaWxpdHlcIik7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmRVSS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNoaXBJbmRleCArPSAxO1xuICAgICAgICB0ZXh0UHJvbXB0LnRleHRDb250ZW50ID0gdXBkYXRlUHJvbXB0KGN1cnJlbnRTaGlwSW5kZXgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGdyaWRTcXVhcmUgb2YgZ3JpZFNxdWFyZXMpIHtcbiAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcIm1vdXNlZW50ZXJcIixcbiAgICAgICAgaGFuZGxlTW91c2VFbnRlcihjdXJyZW50U2hpcEluZGV4KVxuICAgICAgKTtcbiAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJtb3VzZWxlYXZlXCIsXG4gICAgICAgIGhhbmRsZU1vdXNlTGVhdmUoY3VycmVudFNoaXBJbmRleClcbiAgICAgICk7XG4gICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja3MoY3VycmVudFNoaXBJbmRleCkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlOZXdHYW1lUG9wcHVwLFxuICAgIGJ1aWxkQm9hcmRzVUksXG4gICAgcmVuZGVyTW92ZXMsXG4gICAgcGxhY2VTaGlwcyxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9