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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return _extendStatics(d, b);
};

function __extends(d, b) {
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
    exports.__assign = _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return _assign.apply(this, arguments);
};

exports.__assign = _assign;
function __rest(s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}

function __metadata(metadataKey, metadataValue) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function (v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
    }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
        }, reject);
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title'
};
exports.cssClasses = cssClasses;
exports.numbers = numbers;
exports.strings = strings;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = exports.isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
var reparentNodes = exports.reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var node = start;
    while (node !== end) {
        var n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
var removeNodes = exports.removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = exports.marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
var nodeMarker = exports.nodeMarker = '<!--' + marker + '-->';
var markerRegex = exports.markerRegex = new RegExp(marker + '|' + nodeMarker);
/**
 * Suffix appended to all bound attribute names.
 */
var boundAttributeSuffix = exports.boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = exports.Template = function Template(result, element) {
    var _this = this;

    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    var _prepareTemplate = function _prepareTemplate(template) {
        var content = template.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        var lastPartIndex = 0;
        while (walker.nextNode()) {
            index++;
            var node = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        var attributes = node.attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondance between part index and attribute index.
                        var count = 0;
                        for (var i = 0; i < attributes.length; i++) {
                            if (attributes[i].value.indexOf(marker) >= 0) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            var stringForPart = result.strings[partIndex];
                            // Find the attribute name
                            var name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            var attributeValue = node.getAttribute(attributeLookupName);
                            var strings = attributeValue.split(markerRegex);
                            _this.parts.push({ type: 'attribute', index: index, name: name, strings: strings });
                            node.removeAttribute(attributeLookupName);
                            partIndex += strings.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        _prepareTemplate(node);
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        var parent = node.parentNode;
                        var _strings = data.split(markerRegex);
                        var lastIndex = _strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (var _i = 0; _i < lastIndex; _i++) {
                            parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);
                            _this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (_strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        } else {
                            node.data = _strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        var _parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            _parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        _this.parts.push({ type: 'node', index: index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        } else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    } else {
                        var _i2 = -1;
                        while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            _this.parts.push({ type: 'node', index: -1 });
                        }
                    }
                }
        }
    };
    _prepareTemplate(element);
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            n.parentNode.removeChild(n);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var isTemplatePartActive = exports.isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
};
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
var createMarker = exports.createMarker = function createMarker() {
    return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var lastAttributeNameRegex = exports.lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) {
            adapter = {};
        }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}();
exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCTopAppBarFoundation = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _constants = __webpack_require__(1);

var _foundation = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_VALUE = 0; /**
                        * @license
                        * Copyright 2018 Google Inc.
                        *
                        * Permission is hereby granted, free of charge, to any person obtaining a copy
                        * of this software and associated documentation files (the "Software"), to deal
                        * in the Software without restriction, including without limitation the rights
                        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        * copies of the Software, and to permit persons to whom the Software is
                        * furnished to do so, subject to the following conditions:
                        *
                        * The above copyright notice and this permission notice shall be included in
                        * all copies or substantial portions of the Software.
                        *
                        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                        * THE SOFTWARE.
                        */

var MDCTopAppBarFoundation = /** @class */function (_super) {
    tslib_1.__extends(MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked_ = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing_ = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop_ = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized_ = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId_ = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
         */
        _this.resizeDebounceId_ = INITIAL_VALUE;
        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
        _this.scrollHandler_ = function () {
            return _this.topAppBarScrollHandler_();
        };
        _this.resizeHandler_ = function () {
            return _this.topAppBarResizeHandler_();
        };
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter_.setStyle('top', '');
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight_;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked_ = false;
        } else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
                this.wasDocked_ = true;
                return true;
            } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
        if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;
            if (Math.abs(offset) >= this.topAppBarHeight_) {
                offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter_.setStyle('top', offset + 'px');
        }
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     */
    MDCTopAppBarFoundation.prototype.topAppBarScrollHandler_ = function () {
        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition_;
        this.lastScrollPosition_ = currentScrollPosition;
        // If the window is being resized the lastScrollPosition_ needs to be updated but the
        // current scroll of the top app bar should stay in the same position.
        if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;
            if (this.currentAppBarOffsetTop_ > 0) {
                this.currentAppBarOffsetTop_ = 0;
            } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }
            this.moveTopAppBar_();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     */
    MDCTopAppBarFoundation.prototype.topAppBarResizeHandler_ = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
                _this.resizeThrottleId_ = INITIAL_VALUE;
                _this.throttledResizeHandler_();
            }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized_ = true;
        if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
        }
        this.resizeDebounceId_ = setTimeout(function () {
            _this.topAppBarScrollHandler_();
            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
        var currentHeight = this.adapter_.getTopAppBarHeight();
        if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
        }
        this.topAppBarScrollHandler_();
    };
    return MDCTopAppBarFoundation;
}(_foundation.MDCTopAppBarBaseFoundation);
exports.MDCTopAppBarFoundation = MDCTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCTopAppBarBaseFoundation = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _foundation = __webpack_require__(4);

var _constants = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MDCTopAppBarBaseFoundation = /** @class */function (_super) {
    tslib_1.__extends(MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
        _this.navClickHandler_ = function () {
            return _this.adapter_.notifyNavigationIconClicked();
        };
        return _this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function get() {
            return _constants.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function get() {
            return _constants.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function get() {
            return _constants.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                setStyle: function setStyle() {
                    return undefined;
                },
                getTopAppBarHeight: function getTopAppBarHeight() {
                    return 0;
                },
                registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() {
                    return undefined;
                },
                deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() {
                    return undefined;
                },
                notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                    return undefined;
                },
                registerScrollHandler: function registerScrollHandler() {
                    return undefined;
                },
                deregisterScrollHandler: function deregisterScrollHandler() {
                    return undefined;
                },
                registerResizeHandler: function registerResizeHandler() {
                    return undefined;
                },
                deregisterResizeHandler: function deregisterResizeHandler() {
                    return undefined;
                },
                getViewportScrollY: function getViewportScrollY() {
                    return 0;
                },
                getTotalActionItems: function getTotalActionItems() {
                    return 0;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTopAppBarBaseFoundation.prototype.init = function () {
        this.initScrollHandler();
        this.initResizeHandler_();
        this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    };
    MDCTopAppBarBaseFoundation.prototype.destroy = function () {
        this.destroyScrollHandler();
        this.destroyResizeHandler_();
        this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    };
    MDCTopAppBarBaseFoundation.prototype.initScrollHandler = function () {
        if (this.scrollHandler_) {
            this.adapter_.registerScrollHandler(this.scrollHandler_);
        }
    };
    MDCTopAppBarBaseFoundation.prototype.destroyScrollHandler = function () {
        if (this.scrollHandler_) {
            this.adapter_.deregisterScrollHandler(this.scrollHandler_);
        }
    };
    MDCTopAppBarBaseFoundation.prototype.initResizeHandler_ = function () {
        if (this.resizeHandler_) {
            this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
    };
    MDCTopAppBarBaseFoundation.prototype.destroyResizeHandler_ = function () {
        if (this.resizeHandler_) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    return MDCTopAppBarBaseFoundation;
}(_foundation.MDCFoundation); /**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */
exports.MDCTopAppBarBaseFoundation = MDCTopAppBarBaseFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCTopAppBarBaseFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isPrimitive = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @license
                                                                                                                                                                                                                                                                               * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                               * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                               * The complete set of authors may be found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                               * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                               * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                               * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                               */
/**
 * @module lit-html
 */


var _directive = __webpack_require__(12);

var _dom = __webpack_require__(2);

var _part = __webpack_require__(13);

var _templateInstance = __webpack_require__(14);

var _templateResult = __webpack_require__(15);

var _template = __webpack_require__(3);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPrimitive = exports.isPrimitive = function isPrimitive(value) {
    return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

var AttributeCommitter = exports.AttributeCommitter = function () {
    function AttributeCommitter(element, name, strings) {
        _classCallCheck(this, AttributeCommitter);

        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (var i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    _createClass(AttributeCommitter, [{
        key: '_createPart',
        value: function _createPart() {
            return new AttributePart(this);
        }
    }, {
        key: '_getValue',
        value: function _getValue() {
            var strings = this.strings;
            var l = strings.length - 1;
            var text = '';
            for (var i = 0; i < l; i++) {
                text += strings[i];
                var part = this.parts[i];
                if (part !== undefined) {
                    var v = part.value;
                    if (v != null && (Array.isArray(v) ||
                    // tslint:disable-next-line:no-any
                    typeof v !== 'string' && v[Symbol.iterator])) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var t = _step.value;

                                text += typeof t === 'string' ? t : String(t);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    } else {
                        text += typeof v === 'string' ? v : String(v);
                    }
                }
            }
            text += strings[l];
            return text;
        }
    }, {
        key: 'commit',
        value: function commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }]);

    return AttributeCommitter;
}();

var AttributePart = exports.AttributePart = function () {
    function AttributePart(comitter) {
        _classCallCheck(this, AttributePart);

        this.value = undefined;
        this.committer = comitter;
    }

    _createClass(AttributePart, [{
        key: 'setValue',
        value: function setValue(value) {
            if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!(0, _directive.isDirective)(value)) {
                    this.committer.dirty = true;
                }
            }
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this.value)) {
                var directive = this.value;
                this.value = _part.noChange;
                directive(this);
            }
            if (this.value === _part.noChange) {
                return;
            }
            this.committer.commit();
        }
    }]);

    return AttributePart;
}();

var NodePart = exports.NodePart = function () {
    function NodePart(options) {
        _classCallCheck(this, NodePart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    _createClass(NodePart, [{
        key: 'appendInto',
        value: function appendInto(container) {
            this.startNode = container.appendChild((0, _template.createMarker)());
            this.endNode = container.appendChild((0, _template.createMarker)());
        }
        /**
         * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
         * its next sibling must be static, unchanging nodes such as those that appear
         * in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'insertAfterNode',
        value: function insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'appendIntoPart',
        value: function appendIntoPart(part) {
            part._insert(this.startNode = (0, _template.createMarker)());
            part._insert(this.endNode = (0, _template.createMarker)());
        }
        /**
         * Appends this part after `ref`
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'insertAfterPart',
        value: function insertAfterPart(ref) {
            ref._insert(this.startNode = (0, _template.createMarker)());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            var value = this._pendingValue;
            if (value === _part.noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this._commitText(value);
                }
            } else if (value instanceof _templateResult.TemplateResult) {
                this._commitTemplateResult(value);
            } else if (value instanceof Node) {
                this._commitNode(value);
            } else if (Array.isArray(value) ||
            // tslint:disable-next-line:no-any
            value[Symbol.iterator]) {
                this._commitIterable(value);
            } else if (value === _part.nothing) {
                this.value = _part.nothing;
                this.clear();
            } else {
                // Fallback, will render the string representation
                this._commitText(value);
            }
        }
    }, {
        key: '_insert',
        value: function _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
    }, {
        key: '_commitNode',
        value: function _commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this._insert(value);
            this.value = value;
        }
    }, {
        key: '_commitText',
        value: function _commitText(value) {
            var node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            if (node === this.endNode.previousSibling && node.nodeType === 3 /* Node.TEXT_NODE */) {
                    // If we only have a single text node between the markers, we can just
                    // set its value, rather than replacing it.
                    // TODO(justinfagnani): Can we just check if this.value is primitive?
                    node.data = value;
                } else {
                this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
            }
            this.value = value;
        }
    }, {
        key: '_commitTemplateResult',
        value: function _commitTemplateResult(value) {
            var template = this.options.templateFactory(value);
            if (this.value instanceof _templateInstance.TemplateInstance && this.value.template === template) {
                this.value.update(value.values);
            } else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                var instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);
                var fragment = instance._clone();
                instance.update(value.values);
                this._commitNode(fragment);
                this.value = instance;
            }
        }
    }, {
        key: '_commitIterable',
        value: function _commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            var itemParts = this.value;
            var partIndex = 0;
            var itemPart = void 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    // Try to reuse an existing part
                    itemPart = itemParts[partIndex];
                    // If no existing part, create a new one
                    if (itemPart === undefined) {
                        itemPart = new NodePart(this.options);
                        itemParts.push(itemPart);
                        if (partIndex === 0) {
                            itemPart.appendIntoPart(this);
                        } else {
                            itemPart.insertAfterPart(itemParts[partIndex - 1]);
                        }
                    }
                    itemPart.setValue(item);
                    itemPart.commit();
                    partIndex++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

            (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }]);

    return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


var BooleanAttributePart = exports.BooleanAttributePart = function () {
    function BooleanAttributePart(element, name, strings) {
        _classCallCheck(this, BooleanAttributePart);

        this.value = undefined;
        this._pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }

    _createClass(BooleanAttributePart, [{
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            if (this._pendingValue === _part.noChange) {
                return;
            }
            var value = !!this._pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                } else {
                    this.element.removeAttribute(this.name);
                }
            }
            this.value = value;
            this._pendingValue = _part.noChange;
        }
    }]);

    return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


var PropertyCommitter = exports.PropertyCommitter = function (_AttributeCommitter) {
    _inherits(PropertyCommitter, _AttributeCommitter);

    function PropertyCommitter(element, name, strings) {
        _classCallCheck(this, PropertyCommitter);

        var _this = _possibleConstructorReturn(this, (PropertyCommitter.__proto__ || Object.getPrototypeOf(PropertyCommitter)).call(this, element, name, strings));

        _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
        return _this;
    }

    _createClass(PropertyCommitter, [{
        key: '_createPart',
        value: function _createPart() {
            return new PropertyPart(this);
        }
    }, {
        key: '_getValue',
        value: function _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return _get(PropertyCommitter.prototype.__proto__ || Object.getPrototypeOf(PropertyCommitter.prototype), '_getValue', this).call(this);
        }
    }, {
        key: 'commit',
        value: function commit() {
            if (this.dirty) {
                this.dirty = false;
                // tslint:disable-next-line:no-any
                this.element[this.name] = this._getValue();
            }
        }
    }]);

    return PropertyCommitter;
}(AttributeCommitter);

var PropertyPart = exports.PropertyPart = function (_AttributePart) {
    _inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
        _classCallCheck(this, PropertyPart);

        return _possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
    }

    return PropertyPart;
}(AttributePart);
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


var eventOptionsSupported = false;
try {
    var options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart = exports.EventPart = function () {
    function EventPart(element, eventName, eventContext) {
        var _this3 = this;

        _classCallCheck(this, EventPart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this._boundHandleEvent = function (e) {
            return _this3.handleEvent(e);
        };
    }

    _createClass(EventPart, [{
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            if (this._pendingValue === _part.noChange) {
                return;
            }
            var newListener = this._pendingValue;
            var oldListener = this.value;
            var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
            var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            if (shouldAddListener) {
                this._options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            this.value = newListener;
            this._pendingValue = _part.noChange;
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            } else {
                this.value.handleEvent(event);
            }
        }
    }]);

    return EventPart;
}();
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? { capture: o.capture, passive: o.passive, once: o.once } : o.capture);
};
//# sourceMappingURL=parts.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCComponent = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _foundation = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCComponent = /** @class */function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, tslib_1.__spread(args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation.MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
            shouldBubble = false;
        }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData
            });
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}();
exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCComponent;
//# sourceMappingURL=component.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getNormalizedEventCoords = getNormalizedEventCoords;
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    } else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) {
        globalObj = window;
    }
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () {
                return undefined;
            }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                }
            });
        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x,
        y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCFixedTopAppBarFoundation = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _constants = __webpack_require__(1);

var _foundation = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MDCFixedTopAppBarFoundation = /** @class */function (_super) {
    tslib_1.__extends(MDCFixedTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCFixedTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        _this.scrollHandler_ = function () {
            return _this.fixedScrollHandler_();
        };
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     */
    MDCFixedTopAppBarFoundation.prototype.fixedScrollHandler_ = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        } else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(_foundation.MDCTopAppBarFoundation); /**
                                        * @license
                                        * Copyright 2018 Google Inc.
                                        *
                                        * Permission is hereby granted, free of charge, to any person obtaining a copy
                                        * of this software and associated documentation files (the "Software"), to deal
                                        * in the Software without restriction, including without limitation the rights
                                        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                        * copies of the Software, and to permit persons to whom the Software is
                                        * furnished to do so, subject to the following conditions:
                                        *
                                        * The above copyright notice and this permission notice shall be included in
                                        * all copies or substantial portions of the Software.
                                        *
                                        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                        * THE SOFTWARE.
                                        */
exports.MDCFixedTopAppBarFoundation = MDCFixedTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCFixedTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCShortTopAppBarFoundation = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _constants = __webpack_require__(1);

var _foundation = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MDCShortTopAppBarFoundation = /** @class */function (_super) {
    tslib_1.__extends(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function get() {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        if (!this.adapter_.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS)) {
            this.scrollHandler_ = function () {
                return _this.shortAppBarScrollHandler_();
            };
            this.adapter_.registerScrollHandler(this.scrollHandler_);
            this.shortAppBarScrollHandler_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     */
    MDCShortTopAppBarFoundation.prototype.shortAppBarScrollHandler_ = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.adapter_.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
                this.isCollapsed_ = false;
            }
        } else {
            if (!this.isCollapsed_) {
                this.adapter_.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
                this.isCollapsed_ = true;
            }
        }
    };
    return MDCShortTopAppBarFoundation;
}(_foundation.MDCTopAppBarBaseFoundation); /**
                                            * @license
                                            * Copyright 2018 Google Inc.
                                            *
                                            * Permission is hereby granted, free of charge, to any person obtaining a copy
                                            * of this software and associated documentation files (the "Software"), to deal
                                            * in the Software without restriction, including without limitation the rights
                                            * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                            * copies of the Software, and to permit persons to whom the Software is
                                            * furnished to do so, subject to the following conditions:
                                            *
                                            * The above copyright notice and this permission notice shall be included in
                                            * all copies or substantial portions of the Software.
                                            *
                                            * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                            * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                            * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                            * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                            * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                            * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                            * THE SOFTWARE.
                                            */
exports.MDCShortTopAppBarFoundation = MDCShortTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCShortTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any
var directive = exports.directive = function directive(f) {
  return function () {
    var d = f.apply(undefined, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = exports.isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = exports.noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
var nothing = exports.nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/**
 * @module lit-html
 */


var _dom = __webpack_require__(2);

var _template = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance = exports.TemplateInstance = function () {
    function TemplateInstance(template, processor, options) {
        _classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }

    _createClass(TemplateInstance, [{
        key: 'update',
        value: function update(values) {
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var part = _step.value;

                    if (part !== undefined) {
                        part.setValue(values[i]);
                    }
                    i++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _part = _step2.value;

                    if (_part !== undefined) {
                        _part.commit();
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_clone',
        value: function _clone() {
            var _this = this;

            // When using the Custom Elements polyfill, clone the node, rather than
            // importing it, to keep the fragment in the template's document. This
            // leaves the fragment inert so custom elements won't upgrade and
            // potentially modify their contents by creating a polyfilled ShadowRoot
            // while we traverse the tree.
            var fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
            var parts = this.template.parts;
            var partIndex = 0;
            var nodeIndex = 0;
            var _prepareInstance = function _prepareInstance(fragment) {
                // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                // null
                var walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
                var node = walker.nextNode();
                // Loop through all the nodes and parts of a template
                while (partIndex < parts.length && node !== null) {
                    var part = parts[partIndex];
                    // Consecutive Parts may have the same node index, in the case of
                    // multiple bound attributes on an element. So each iteration we either
                    // increment the nodeIndex, if we aren't on a node with a part, or the
                    // partIndex if we are. By not incrementing the nodeIndex when we find a
                    // part, we allow for the next part to be associated with the current
                    // node if neccessasry.
                    if (!(0, _template.isTemplatePartActive)(part)) {
                        _this._parts.push(undefined);
                        partIndex++;
                    } else if (nodeIndex === part.index) {
                        if (part.type === 'node') {
                            var _part2 = _this.processor.handleTextExpression(_this.options);
                            _part2.insertAfterNode(node.previousSibling);
                            _this._parts.push(_part2);
                        } else {
                            var _parts;

                            (_parts = _this._parts).push.apply(_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
                        }
                        partIndex++;
                    } else {
                        nodeIndex++;
                        if (node.nodeName === 'TEMPLATE') {
                            _prepareInstance(node.content);
                        }
                        node = walker.nextNode();
                    }
                }
            };
            _prepareInstance(fragment);
            if (_dom.isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }]);

    return TemplateInstance;
}();
//# sourceMappingURL=template-instance.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SVGTemplateResult = exports.TemplateResult = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/**
 * @module lit-html
 */


var _dom = __webpack_require__(2);

var _template = __webpack_require__(3);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = exports.TemplateResult = function () {
    function TemplateResult(strings, values, type, processor) {
        _classCallCheck(this, TemplateResult);

        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    _createClass(TemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            var endIndex = this.strings.length - 1;
            var html = '';
            for (var i = 0; i < endIndex; i++) {
                var s = this.strings[i];
                // This exec() call does two things:
                // 1) Appends a suffix to the bound attribute name to opt out of special
                // attribute value parsing that IE11 and Edge do, like for style and
                // many SVG attributes. The Template class also appends the same suffix
                // when looking up attributes to create Parts.
                // 2) Adds an unquoted-attribute-safe marker for the first expression in
                // an attribute. Subsequent attribute expressions will use node markers,
                // and this is safe since attributes with multiple expressions are
                // guaranteed to be quoted.
                var match = _template.lastAttributeNameRegex.exec(s);
                if (match) {
                    // We're starting a new bound attribute.
                    // Add the safe attribute suffix, and use unquoted-attribute-safe
                    // marker.
                    html += s.substr(0, match.index) + match[1] + match[2] + _template.boundAttributeSuffix + match[3] + _template.marker;
                } else {
                    // We're either in a bound node, or trailing bound attribute.
                    // Either way, nodeMarker is safe to use.
                    html += s + _template.nodeMarker;
                }
            }
            return html + this.strings[endIndex];
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = document.createElement('template');
            template.innerHTML = this.getHTML();
            return template;
        }
    }]);

    return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


var SVGTemplateResult = exports.SVGTemplateResult = function (_TemplateResult) {
    _inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
        _classCallCheck(this, SVGTemplateResult);

        return _possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
    }

    _createClass(SVGTemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            return '<svg>' + _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
            var content = template.content;
            var svgElement = content.firstChild;
            content.removeChild(svgElement);
            (0, _dom.reparentNodes)(content, svgElement.firstChild);
            return template;
        }
    }]);

    return SVGTemplateResult;
}(TemplateResult);
//# sourceMappingURL=template-result.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templateCaches = undefined;
exports.templateFactory = templateFactory;

var _template = __webpack_require__(3);

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    var template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    var key = result.strings.join(_template.marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template.Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
} /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
var templateCaches = exports.templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(19);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n    <section class="piece">\n      <img @click=', ' class="poster" src="', '" />\n    </section>\n  '], ['\n    <section class="piece">\n      <img @click=', ' class="poster" src="', '" />\n    </section>\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _index = __webpack_require__(20);

var _litHtml = __webpack_require__(27);

var _router = __webpack_require__(30);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Instantiation
var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _index.MDCTopAppBar(topAppBarElement);

var pieces = ['https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/treeWeb.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/colibriDescalzo.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Dragona.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/MCIWeb.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Maiz.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/muerte.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Core1.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Core2.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/smile.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/itzpapalotl.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/ElserManos.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/vuelodePajaro.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/cuento2.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/cuento3.jpg', 'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Campo.jpg'];

function fullScreen(event) {
  var image = event.target;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    }
  }
  event.preventDefault();
}

function itemTemplate(piece) {
  return (0, _litHtml.html)(_templateObject, fullScreen, piece);
}

function homeTemplate(pieces) {
  return (0, _litHtml.html)(_templateObject2, pieces.map(itemTemplate));
}

(0, _litHtml.render)(homeTemplate(pieces), document.querySelector('main'));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(21);

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _component[key];
    }
  });
});

var _foundation = __webpack_require__(6);

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foundation[key];
    }
  });
});

var _foundation2 = __webpack_require__(10);

Object.keys(_foundation2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foundation2[key];
    }
  });
});

var _foundation3 = __webpack_require__(11);

Object.keys(_foundation3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foundation3[key];
    }
  });
});

var _foundation4 = __webpack_require__(5);

Object.keys(_foundation4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foundation4[key];
    }
  });
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCTopAppBar = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _component = __webpack_require__(8);

var _component2 = __webpack_require__(22);

var _constants = __webpack_require__(1);

var _foundation = __webpack_require__(10);

var _foundation2 = __webpack_require__(11);

var _foundation3 = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MDCTopAppBar = /** @class */function (_super) {
    tslib_1.__extends(MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) {
            rippleFactory = function rippleFactory(el) {
                return _component2.MDCRipple.attachTo(el);
            };
        }
        this.navIcon_ = this.root_.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon_) {
            icons.push(this.navIcon_);
        }
        this.iconRipples_ = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget_ = window;
    };
    MDCTopAppBar.prototype.destroy = function () {
        this.iconRipples_.forEach(function (iconRipple) {
            return iconRipple.destroy();
        });
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.foundation_.destroyScrollHandler();
        this.scrollTarget_ = target;
        // Initialize scroll handler on the new scroll target
        this.foundation_.initScrollHandler();
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function hasClass(className) {
                return _this.root_.classList.contains(className);
            },
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            setStyle: function setStyle(property, value) {
                return _this.root_.style.setProperty(property, value);
            },
            getTopAppBarHeight: function getTopAppBarHeight() {
                return _this.root_.clientHeight;
            },
            registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(evtType, handler) {
                if (_this.navIcon_) {
                    _this.navIcon_.addEventListener(evtType, handler);
                }
            },
            deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(evtType, handler) {
                if (_this.navIcon_) {
                    _this.navIcon_.removeEventListener(evtType, handler);
                }
            },
            notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                return _this.emit(_constants.strings.NAVIGATION_EVENT, {});
            },
            registerScrollHandler: function registerScrollHandler(handler) {
                return _this.scrollTarget_.addEventListener('scroll', handler);
            },
            deregisterScrollHandler: function deregisterScrollHandler(handler) {
                return _this.scrollTarget_.removeEventListener('scroll', handler);
            },
            registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
            },
            deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
            },
            getViewportScrollY: function getViewportScrollY() {
                var win = _this.scrollTarget_;
                var el = _this.scrollTarget_;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function getTotalActionItems() {
                return _this.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
            }
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root_.classList.contains(_constants.cssClasses.SHORT_CLASS)) {
            foundation = new _foundation2.MDCShortTopAppBarFoundation(adapter);
        } else if (this.root_.classList.contains(_constants.cssClasses.FIXED_CLASS)) {
            foundation = new _foundation.MDCFixedTopAppBarFoundation(adapter);
        } else {
            foundation = new _foundation3.MDCTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(_component.MDCComponent); /**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */
exports.MDCTopAppBar = MDCTopAppBar;
//# sourceMappingURL=component.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCRipple = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _component = __webpack_require__(8);

var _index = __webpack_require__(23);

var _foundation = __webpack_require__(25);

var _util = __webpack_require__(9);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MDCRipple = /** @class */function (_super) {
    tslib_1.__extends(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) {
            opts = { isUnbounded: undefined };
        }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function addClass(className) {
                return instance.root_.classList.add(className);
            },
            browserSupportsCssVars: function browserSupportsCssVars() {
                return util.supportsCssVariables(window);
            },
            computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
            },
            containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
            },
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
            },
            deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function getWindowPageOffset() {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            isSurfaceActive: function isSurfaceActive() {
                return _index.ponyfill.matches(instance.root_, ':active');
            },
            isSurfaceDisabled: function isSurfaceDisabled() {
                return Boolean(instance.disabled);
            },
            isUnbounded: function isUnbounded() {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, util.applyPassive());
            },
            registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
            },
            updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function get() {
            return Boolean(this.unbounded_);
        },
        set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation.MDCRippleFoundation(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_component.MDCComponent); /**
                             * @license
                             * Copyright 2016 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */
exports.MDCRipple = MDCRipple;
//# sourceMappingURL=component.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ponyfill = undefined;

var _ponyfill = __webpack_require__(24);

var ponyfill = _interopRequireWildcard(_ponyfill);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.ponyfill = ponyfill;
//# sourceMappingURL=index.js.map
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closest = closest;
exports.matches = matches;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MDCRippleFoundation = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _foundation = __webpack_require__(4);

var _constants = __webpack_require__(26);

var _util = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Activation events registered on the root element of each instance for activation
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */function (_super) {
    tslib_1.__extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) {
            return _this.activate_(e);
        };
        _this.deactivateHandler_ = function () {
            return _this.deactivate_();
        };
        _this.focusHandler_ = function () {
            return _this.handleFocus();
        };
        _this.blurHandler_ = function () {
            return _this.handleBlur();
        };
        _this.resizeHandler_ = function () {
            return _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function get() {
            return _constants.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function get() {
            return _constants.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function get() {
            return _constants.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function get() {
            return {
                addClass: function addClass() {
                    return undefined;
                },
                browserSupportsCssVars: function browserSupportsCssVars() {
                    return true;
                },
                computeBoundingRect: function computeBoundingRect() {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                containsEventTarget: function containsEventTarget() {
                    return true;
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                    return undefined;
                },
                deregisterInteractionHandler: function deregisterInteractionHandler() {
                    return undefined;
                },
                deregisterResizeHandler: function deregisterResizeHandler() {
                    return undefined;
                },
                getWindowPageOffset: function getWindowPageOffset() {
                    return { x: 0, y: 0 };
                },
                isSurfaceActive: function isSurfaceActive() {
                    return true;
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                    return true;
                },
                isUnbounded: function isUnbounded() {
                    return true;
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                    return undefined;
                },
                registerInteractionHandler: function registerInteractionHandler() {
                    return undefined;
                },
                registerResizeHandler: function registerResizeHandler() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                updateCssVariable: function updateCssVariable() {
                    return undefined;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_1 = _a.ROOT,
                UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_2 = _a.ROOT,
                UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        } else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
            return _this.adapter_.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _b.FG_DEACTIVATION,
            FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(),
                startPoint = _c.startPoint,
                endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () {
            return _this.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_,
            activationEvent = _a.activationEvent,
            wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        } else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize_ / 2,
            y: startPoint.y - this.initialSize_ / 2
        };
        var endPoint = {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_,
            hasDeactivationUXRun = _a.hasDeactivationUXRun,
            isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants.numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () {
            return _this.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib_1.__assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                return _this.animateDeactivation_(state);
            });
            this.resetActivationState_();
        } else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer,
            wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function getBoundedRadius() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _a.VAR_FG_SIZE,
            VAR_LEFT = _a.VAR_LEFT,
            VAR_TOP = _a.VAR_TOP,
            VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_foundation.MDCFoundation);
exports.MDCRippleFoundation = MDCRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

exports.default = MDCRippleFoundation;
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = exports.cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = exports.strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top'
};
var numbers = exports.numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.html = exports.Template = exports.isTemplatePartActive = exports.createMarker = exports.TemplateResult = exports.SVGTemplateResult = exports.TemplateInstance = exports.templateFactory = exports.templateCaches = exports.render = exports.parts = exports.PropertyPart = exports.PropertyCommitter = exports.NodePart = exports.isPrimitive = exports.EventPart = exports.BooleanAttributePart = exports.AttributePart = exports.AttributeCommitter = exports.nothing = exports.noChange = exports.reparentNodes = exports.removeNodes = exports.isDirective = exports.directive = exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = undefined;

var _defaultTemplateProcessor = __webpack_require__(28);

Object.defineProperty(exports, 'DefaultTemplateProcessor', {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, 'defaultTemplateProcessor', {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});

var _directive = __webpack_require__(12);

Object.defineProperty(exports, 'directive', {
  enumerable: true,
  get: function get() {
    return _directive.directive;
  }
});
Object.defineProperty(exports, 'isDirective', {
  enumerable: true,
  get: function get() {
    return _directive.isDirective;
  }
});

var _dom = __webpack_require__(2);

Object.defineProperty(exports, 'removeNodes', {
  enumerable: true,
  get: function get() {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, 'reparentNodes', {
  enumerable: true,
  get: function get() {
    return _dom.reparentNodes;
  }
});

var _part = __webpack_require__(13);

Object.defineProperty(exports, 'noChange', {
  enumerable: true,
  get: function get() {
    return _part.noChange;
  }
});
Object.defineProperty(exports, 'nothing', {
  enumerable: true,
  get: function get() {
    return _part.nothing;
  }
});

var _parts = __webpack_require__(7);

Object.defineProperty(exports, 'AttributeCommitter', {
  enumerable: true,
  get: function get() {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, 'AttributePart', {
  enumerable: true,
  get: function get() {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, 'BooleanAttributePart', {
  enumerable: true,
  get: function get() {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, 'EventPart', {
  enumerable: true,
  get: function get() {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, 'isPrimitive', {
  enumerable: true,
  get: function get() {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, 'NodePart', {
  enumerable: true,
  get: function get() {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, 'PropertyCommitter', {
  enumerable: true,
  get: function get() {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, 'PropertyPart', {
  enumerable: true,
  get: function get() {
    return _parts.PropertyPart;
  }
});

var _render = __webpack_require__(29);

Object.defineProperty(exports, 'parts', {
  enumerable: true,
  get: function get() {
    return _render.parts;
  }
});
Object.defineProperty(exports, 'render', {
  enumerable: true,
  get: function get() {
    return _render.render;
  }
});

var _templateFactory = __webpack_require__(16);

Object.defineProperty(exports, 'templateCaches', {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, 'templateFactory', {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateFactory;
  }
});

var _templateInstance = __webpack_require__(14);

Object.defineProperty(exports, 'TemplateInstance', {
  enumerable: true,
  get: function get() {
    return _templateInstance.TemplateInstance;
  }
});

var _templateResult = __webpack_require__(15);

Object.defineProperty(exports, 'SVGTemplateResult', {
  enumerable: true,
  get: function get() {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, 'TemplateResult', {
  enumerable: true,
  get: function get() {
    return _templateResult.TemplateResult;
  }
});

var _template = __webpack_require__(3);

Object.defineProperty(exports, 'createMarker', {
  enumerable: true,
  get: function get() {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, 'isTemplatePartActive', {
  enumerable: true,
  get: function get() {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, 'Template', {
  enumerable: true,
  get: function get() {
    return _template.Template;
  }
});

// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
var html = exports.html = function html(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
var svg = exports.svg = function svg(strings) {
  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);
};
//# sourceMappingURL=lit-html.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _parts = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates Parts when a template is instantiated.
 */
var DefaultTemplateProcessor = exports.DefaultTemplateProcessor = function () {
    function DefaultTemplateProcessor() {
        _classCallCheck(this, DefaultTemplateProcessor);
    }

    _createClass(DefaultTemplateProcessor, [{
        key: 'handleAttributeExpressions',

        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        value: function handleAttributeExpressions(element, name, strings, options) {
            var prefix = name[0];
            if (prefix === '.') {
                var _comitter = new _parts.PropertyCommitter(element, name.slice(1), strings);
                return _comitter.parts;
            }
            if (prefix === '@') {
                return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
            }
            var comitter = new _parts.AttributeCommitter(element, name, strings);
            return comitter.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */

    }, {
        key: 'handleTextExpression',
        value: function handleTextExpression(options) {
            return new _parts.NodePart(options);
        }
    }]);

    return DefaultTemplateProcessor;
}();

var defaultTemplateProcessor = exports.defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = undefined;

var _dom = __webpack_require__(2);

var _parts = __webpack_require__(7);

var _templateFactory = __webpack_require__(16);

var parts = exports.parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */
var render = exports.render = function render(result, container, options) {
  var part = parts.get(container);
  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({ templateFactory: _templateFactory.templateFactory }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
  Basic router that calls a callback whenever the location is updated.

  Example:

      import { installRouter } from 'pwa-helpers/router.js';

      installRouter((location) => handleNavigation(location));

  For example, if you're using this router in a Redux-connected component,
  you could dispatch an action in the callback:

      import { installRouter } from 'pwa-helpers/router.js';
      import { navigate } from '../actions/app.js';

      installRouter((location) => store.dispatch(navigate(location)))

  If you need to force a navigation to a new location programmatically, you can
  do so by pushing a new state using the History API, and then manually
  calling the callback with the new location:

      window.history.pushState({}, '', '/new-route');
      handleNavigation(window.location);

  Optionally, you can use the second argument to read the event that caused the
  navigation. For example, you may want to scroll to top only after a link click.

      installRouter((location, event) => {
        // Only scroll to top on link clicks, not popstate events.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
        handleNavigation(location);
      });
*/
var installRouter = exports.installRouter = function installRouter(locationUpdatedCallback) {
    document.body.addEventListener('click', function (e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
        var anchor = e.composedPath().filter(function (n) {
            return n.tagName === 'A';
        })[0];
        if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;
        var href = anchor.href;
        if (!href || href.indexOf('mailto:') !== -1) return;
        var location = window.location;
        var origin = location.origin || location.protocol + '//' + location.host;
        if (href.indexOf(origin) !== 0) return;
        e.preventDefault();
        if (href !== location.href) {
            window.history.pushState({}, '', href);
            locationUpdatedCallback(location, e);
        }
    });
    window.addEventListener('popstate', function (e) {
        return locationUpdatedCallback(window.location, e);
    });
    locationUpdatedCallback(window.location, null /* event */);
};
//# sourceMappingURL=router.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTJhNjMzYThlYjgwMzEwYzRiNmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc3RhbmRhcmQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc2hvcnQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wd2EtaGVscGVycy9yb3V0ZXIuanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiX19yZXN0IiwiX19kZWNvcmF0ZSIsIl9fcGFyYW0iLCJfX21ldGFkYXRhIiwiX19hd2FpdGVyIiwiX19nZW5lcmF0b3IiLCJfX2V4cG9ydFN0YXIiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsIl9fc3ByZWFkIiwiX19hd2FpdCIsIl9fYXN5bmNHZW5lcmF0b3IiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiX19pbXBvcnRTdGFyIiwiX19pbXBvcnREZWZhdWx0IiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJtZXRhZGF0YUtleSIsIm1ldGFkYXRhVmFsdWUiLCJtZXRhZGF0YSIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwibSIsImV4cG9ydHMiLCJvIiwiYXIiLCJlcnJvciIsImNvbmNhdCIsImFzeW5jSXRlcmF0b3IiLCJxIiwiYSIsInJlc3VtZSIsInNldHRsZSIsImZ1bGZpbGwiLCJzaGlmdCIsImNvb2tlZCIsInJhdyIsIm1vZCIsIl9fZXNNb2R1bGUiLCJrIiwiZGVmYXVsdCIsImNzc0NsYXNzZXMiLCJGSVhFRF9DTEFTUyIsIkZJWEVEX1NDUk9MTEVEX0NMQVNTIiwiU0hPUlRfQ0xBU1MiLCJTSE9SVF9DT0xMQVBTRURfQ0xBU1MiLCJTSE9SVF9IQVNfQUNUSU9OX0lURU1fQ0xBU1MiLCJudW1iZXJzIiwiREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVMiLCJNQVhfVE9QX0FQUF9CQVJfSEVJR0hUIiwic3RyaW5ncyIsIkFDVElPTl9JVEVNX1NFTEVDVE9SIiwiTkFWSUdBVElPTl9FVkVOVCIsIk5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUiIsIlJPT1RfU0VMRUNUT1IiLCJUSVRMRV9TRUxFQ1RPUiIsImlzQ0VQb2x5ZmlsbCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwidW5kZWZpbmVkIiwicG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayIsInJlcGFyZW50Tm9kZXMiLCJjb250YWluZXIiLCJzdGFydCIsImVuZCIsImJlZm9yZSIsIm5vZGUiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsInJlbW92ZU5vZGVzIiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInJlbW92ZUNoaWxkIiwibWFya2VyIiwiU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwibm9kZU1hcmtlciIsIm1hcmtlclJlZ2V4IiwiUmVnRXhwIiwiYm91bmRBdHRyaWJ1dGVTdWZmaXgiLCJUZW1wbGF0ZSIsImVsZW1lbnQiLCJwYXJ0cyIsImluZGV4IiwicGFydEluZGV4Iiwibm9kZXNUb1JlbW92ZSIsIl9wcmVwYXJlVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImNvbnRlbnQiLCJ3YWxrZXIiLCJkb2N1bWVudCIsImNyZWF0ZVRyZWVXYWxrZXIiLCJsYXN0UGFydEluZGV4IiwibmV4dE5vZGUiLCJjdXJyZW50Tm9kZSIsIm5vZGVUeXBlIiwiaGFzQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJjb3VudCIsInN0cmluZ0ZvclBhcnQiLCJuYW1lIiwibGFzdEF0dHJpYnV0ZU5hbWVSZWdleCIsImV4ZWMiLCJhdHRyaWJ1dGVMb29rdXBOYW1lIiwidG9Mb3dlckNhc2UiLCJhdHRyaWJ1dGVWYWx1ZSIsImdldEF0dHJpYnV0ZSIsInNwbGl0IiwidHlwZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRhZ05hbWUiLCJkYXRhIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImxhc3RJbmRleCIsImNyZWF0ZU1hcmtlciIsImNyZWF0ZVRleHROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwiaXNUZW1wbGF0ZVBhcnRBY3RpdmUiLCJwYXJ0IiwiY3JlYXRlQ29tbWVudCIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiaW5pdCIsImRlc3Ryb3kiLCJ0c2xpYl8xIiwiSU5JVElBTF9WQUxVRSIsIk1EQ1RvcEFwcEJhckZvdW5kYXRpb24iLCJfc3VwZXIiLCJfdGhpcyIsIndhc0RvY2tlZF8iLCJpc0RvY2tlZFNob3dpbmdfIiwiY3VycmVudEFwcEJhck9mZnNldFRvcF8iLCJpc0N1cnJlbnRseUJlaW5nUmVzaXplZF8iLCJyZXNpemVUaHJvdHRsZUlkXyIsInJlc2l6ZURlYm91bmNlSWRfIiwibGFzdFNjcm9sbFBvc2l0aW9uXyIsImdldFZpZXdwb3J0U2Nyb2xsWSIsInRvcEFwcEJhckhlaWdodF8iLCJnZXRUb3BBcHBCYXJIZWlnaHQiLCJzY3JvbGxIYW5kbGVyXyIsInRvcEFwcEJhclNjcm9sbEhhbmRsZXJfIiwicmVzaXplSGFuZGxlcl8iLCJ0b3BBcHBCYXJSZXNpemVIYW5kbGVyXyIsInNldFN0eWxlIiwiY2hlY2tGb3JVcGRhdGVfIiwib2Zmc2NyZWVuQm91bmRhcnlUb3AiLCJoYXNBbnlQaXhlbHNPZmZzY3JlZW4iLCJoYXNBbnlQaXhlbHNPbnNjcmVlbiIsInBhcnRpYWxseVNob3dpbmciLCJtb3ZlVG9wQXBwQmFyXyIsIm9mZnNldCIsImFicyIsImN1cnJlbnRTY3JvbGxQb3NpdGlvbiIsIm1heCIsImRpZmYiLCJzZXRUaW1lb3V0IiwidGhyb3R0bGVkUmVzaXplSGFuZGxlcl8iLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50SGVpZ2h0IiwiTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24iLCJkZWZhdWx0QWRhcHRlciIsIm5hdkNsaWNrSGFuZGxlcl8iLCJub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJTY3JvbGxIYW5kbGVyIiwiZGVyZWdpc3RlclNjcm9sbEhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImdldFRvdGFsQWN0aW9uSXRlbXMiLCJpbml0U2Nyb2xsSGFuZGxlciIsImluaXRSZXNpemVIYW5kbGVyXyIsImRlc3Ryb3lTY3JvbGxIYW5kbGVyIiwiZGVzdHJveVJlc2l6ZUhhbmRsZXJfIiwiaXNQcmltaXRpdmUiLCJBdHRyaWJ1dGVDb21taXR0ZXIiLCJkaXJ0eSIsIl9jcmVhdGVQYXJ0IiwiQXR0cmlidXRlUGFydCIsImwiLCJ0ZXh0IiwiaXNBcnJheSIsInNldEF0dHJpYnV0ZSIsIl9nZXRWYWx1ZSIsImNvbWl0dGVyIiwiY29tbWl0dGVyIiwibm9DaGFuZ2UiLCJkaXJlY3RpdmUiLCJjb21taXQiLCJOb2RlUGFydCIsIm9wdGlvbnMiLCJfcGVuZGluZ1ZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJyZWYiLCJfaW5zZXJ0IiwiX2NvbW1pdFRleHQiLCJUZW1wbGF0ZVJlc3VsdCIsIl9jb21taXRUZW1wbGF0ZVJlc3VsdCIsIk5vZGUiLCJfY29tbWl0Tm9kZSIsIl9jb21taXRJdGVyYWJsZSIsIm5vdGhpbmciLCJjbGVhciIsInRlbXBsYXRlRmFjdG9yeSIsIlRlbXBsYXRlSW5zdGFuY2UiLCJ1cGRhdGUiLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsInByb2Nlc3NvciIsImZyYWdtZW50IiwiX2Nsb25lIiwiaXRlbVBhcnRzIiwiaXRlbVBhcnQiLCJpdGVtIiwiYXBwZW5kSW50b1BhcnQiLCJpbnNlcnRBZnRlclBhcnQiLCJzZXRWYWx1ZSIsIkJvb2xlYW5BdHRyaWJ1dGVQYXJ0IiwiRXJyb3IiLCJQcm9wZXJ0eUNvbW1pdHRlciIsInNpbmdsZSIsIlByb3BlcnR5UGFydCIsImV2ZW50T3B0aW9uc1N1cHBvcnRlZCIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lIiwiRXZlbnRQYXJ0IiwiZXZlbnROYW1lIiwiZXZlbnRDb250ZXh0IiwiX2JvdW5kSGFuZGxlRXZlbnQiLCJoYW5kbGVFdmVudCIsIm5ld0xpc3RlbmVyIiwib2xkTGlzdGVuZXIiLCJzaG91bGRSZW1vdmVMaXN0ZW5lciIsIm9uY2UiLCJwYXNzaXZlIiwic2hvdWxkQWRkTGlzdGVuZXIiLCJfb3B0aW9ucyIsImdldE9wdGlvbnMiLCJldmVudCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwiYXJncyIsIl9pIiwicm9vdF8iLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXRpYWxTeW5jV2l0aERPTSIsImF0dGFjaFRvIiwiX2FyZ3MiLCJsaXN0ZW4iLCJldnRUeXBlIiwiaGFuZGxlciIsInVubGlzdGVuIiwiZW1pdCIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJldnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImFwcGx5UGFzc2l2ZSIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJmb3JjZVJlZnJlc2giLCJDU1MiLCJzdXBwb3J0c0Nzc1ZhcnMiLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkXzEiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZUV2ZW50IiwiTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uIiwid2FzU2Nyb2xsZWRfIiwiZml4ZWRTY3JvbGxIYW5kbGVyXyIsImN1cnJlbnRTY3JvbGwiLCJNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24iLCJpc0NvbGxhcHNlZF8iLCJzaG9ydEFwcEJhclNjcm9sbEhhbmRsZXJfIiwiZGlyZWN0aXZlcyIsIldlYWtNYXAiLCJzZXQiLCJpc0RpcmVjdGl2ZSIsImhhcyIsIl9wYXJ0cyIsImNsb25lTm9kZSIsImltcG9ydE5vZGUiLCJub2RlSW5kZXgiLCJfcHJlcGFyZUluc3RhbmNlIiwiaGFuZGxlVGV4dEV4cHJlc3Npb24iLCJpbnNlcnRBZnRlck5vZGUiLCJoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyIsIm5vZGVOYW1lIiwiYWRvcHROb2RlIiwidXBncmFkZSIsImVuZEluZGV4IiwiaHRtbCIsIm1hdGNoIiwic3Vic3RyIiwiaW5uZXJIVE1MIiwiZ2V0SFRNTCIsIlNWR1RlbXBsYXRlUmVzdWx0Iiwic3ZnRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJ0ZW1wbGF0ZUNhY2hlIiwidGVtcGxhdGVDYWNoZXMiLCJzdHJpbmdzQXJyYXkiLCJrZXlTdHJpbmciLCJNYXAiLCJqb2luIiwiZ2V0VGVtcGxhdGVFbGVtZW50IiwidG9wQXBwQmFyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3BBcHBCYXIiLCJNRENUb3BBcHBCYXIiLCJwaWVjZXMiLCJmdWxsU2NyZWVuIiwiaW1hZ2UiLCJmdWxsc2NyZWVuRWxlbWVudCIsImV4aXRGdWxsc2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJwcmV2ZW50RGVmYXVsdCIsIml0ZW1UZW1wbGF0ZSIsInBpZWNlIiwiaG9tZVRlbXBsYXRlIiwibWFwIiwicmlwcGxlRmFjdG9yeSIsImVsIiwiTURDUmlwcGxlIiwibmF2SWNvbl8iLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpY29uUmlwcGxlc18iLCJpY29uIiwicmlwcGxlIiwidW5ib3VuZGVkIiwic2Nyb2xsVGFyZ2V0XyIsImZvckVhY2giLCJpY29uUmlwcGxlIiwic2V0U2Nyb2xsVGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJwcm9wZXJ0eSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGllbnRIZWlnaHQiLCJ3aW4iLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInV0aWwiLCJkaXNhYmxlZCIsIm9wdHMiLCJpc1VuYm91bmRlZCIsImNyZWF0ZUFkYXB0ZXIiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZ2V0V2luZG93UGFnZU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaXNTdXJmYWNlQWN0aXZlIiwicG9ueWZpbGwiLCJtYXRjaGVzIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJCb29sZWFuIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJ2YXJOYW1lIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZF8iLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJsYXlvdXQiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiZGF0YXNldCIsInNldFVuYm91bmRlZCIsImNsb3Nlc3QiLCJzZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJuYXRpdmVNYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJmZ1NjYWxlXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdGlhbFNpemVfIiwibGF5b3V0RnJhbWVfIiwibWF4UmFkaXVzXyIsInVuYm91bmRlZENvb3Jkc18iLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmlnaHQiLCJib3R0b20iLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJfYSIsIlJPT1RfMSIsIlJPT1QiLCJVTkJPVU5ERURfMSIsIlVOQk9VTkRFRCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheW91dEludGVybmFsXyIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJST09UXzIiLCJVTkJPVU5ERURfMiIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJCR19GT0NVU0VEIiwiYWN0aXZhdGlvbkV2ZW50IiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJpc0FjdGl2YXRlZCIsImlzUHJvZ3JhbW1hdGljIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsInJpcHBsZVN0cmluZ3MiLCJrZXlzIiwiYWN0aXZhdGlvblN0YXRlIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnQiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc1NhbWVJbnRlcmFjdGlvbiIsImhhc0FjdGl2YXRlZENoaWxkIiwic29tZSIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwia2V5Q29kZSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIl9iIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsIl9jIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsImFjdGl2YXRpb25IYXNFbmRlZCIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN0YXRlIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJtYXhEaW0iLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJQQURESU5HIiwiZmxvb3IiLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwiVkFSX0ZHX1NJWkUiLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0NBTEUiLCJyb3VuZCIsIkRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciIsImRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciIsInJlbmRlciIsInN2ZyIsInByZWZpeCIsImFwcGVuZEludG8iLCJpbnN0YWxsUm91dGVyIiwibG9jYXRpb25VcGRhdGVkQ2FsbGJhY2siLCJkZWZhdWx0UHJldmVudGVkIiwiYnV0dG9uIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFuY2hvciIsImNvbXBvc2VkUGF0aCIsImZpbHRlciIsImhhc0F0dHJpYnV0ZSIsImhyZWYiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInByb3RvY29sIiwiaG9zdCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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QixDQUFsQztBQUNIO0FBQ0osS0FyQkQ7QUFzQkFxRixXQUFPaUwsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0M7QUFBQSxlQUFLMFMsd0JBQXdCM2QsT0FBT3NlLFFBQS9CLEVBQXlDM2pCLENBQXpDLENBQUw7QUFBQSxLQUFwQztBQUNBZ2pCLDRCQUF3QjNkLE9BQU9zZSxRQUEvQixFQUF5QyxJQUF6QyxDQUE4QyxXQUE5QztBQUNILENBekJNO0FBMEJQLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMmE2MzNhOGViODAzMTBjNGI2YyIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgRklYRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkJyxcbiAgICBGSVhFRF9TQ1JPTExFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tZml4ZWQtc2Nyb2xsZWQnLFxuICAgIFNIT1JUX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydCcsXG4gICAgU0hPUlRfQ09MTEFQU0VEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydC1jb2xsYXBzZWQnLFxuICAgIFNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtaGFzLWFjdGlvbi1pdGVtJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUzogMTAwLFxuICAgIE1BWF9UT1BfQVBQX0JBUl9IRUlHSFQ6IDEyOCxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fSVRFTV9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtJyxcbiAgICBOQVZJR0FUSU9OX0VWRU5UOiAnTURDVG9wQXBwQmFyOm5hdicsXG4gICAgTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fbmF2aWdhdGlvbi1pY29uJyxcbiAgICBST09UX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcicsXG4gICAgVElUTEVfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX190aXRsZScsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvY29uc3RhbnRzLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBUcnVlIGlmIHRoZSBjdXN0b20gZWxlbWVudHMgcG9seWZpbGwgaXMgaW4gdXNlLlxuICovXG5leHBvcnQgY29uc3QgaXNDRVBvbHlmaWxsID0gd2luZG93LmN1c3RvbUVsZW1lbnRzICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlXG4gKiBgYmVmb3JlTm9kZWAuIElmIGBiZWZvcmVOb2RlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGVcbiAqIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCwgYmVmb3JlID0gbnVsbCkgPT4ge1xuICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlLCBiZWZvcmUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGZyb20gYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9IChjb250YWluZXIsIHN0YXJ0Tm9kZSwgZW5kTm9kZSA9IG51bGwpID0+IHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5leHBvcnQgY29uc3QgbWFya2VyUmVnZXggPSBuZXcgUmVnRXhwKGAke21hcmtlcn18JHtub2RlTWFya2VyfWApO1xuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8qKlxuICogQW4gdXBkYXRlYWJsZSBUZW1wbGF0ZSB0aGF0IHRyYWNrcyB0aGUgbG9jYXRpb24gb2YgZHluYW1pYyBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgY29uc3QgX3ByZXBhcmVUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAgICAgICAvLyBudWxsXG4gICAgICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGxhc3QgaW5kZXggYXNzb2NpYXRlZCB3aXRoIGEgcGFydC4gV2UgdHJ5IHRvIGRlbGV0ZVxuICAgICAgICAgICAgLy8gdW5uZWNlc3Nhcnkgbm9kZXMsIGJ1dCB3ZSBuZXZlciB3YW50IHRvIGFzc29jaWF0ZSB0d28gZGlmZmVyZW50IHBhcnRzXG4gICAgICAgICAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgICAgICAgICBsZXQgbGFzdFBhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGFuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV0udmFsdWUuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gcmVzdWx0LnN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoc3RyaW5nRm9yUGFydClbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlbXBsYXRlUmVzdWx0I2dldEhUTUwgdG8gb3B0IG91dCBvZiBzcGVjaWFsIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTG9va3VwTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnYXR0cmlidXRlJywgaW5kZXgsIG5hbWUsIHN0cmluZ3MgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlcGFyZVRlbXBsYXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChzdHJpbmdzW2ldID09PSAnJykgPyBjcmVhdGVNYXJrZXIoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiArK2luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSBtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBhcmUgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgaW5kZXggPT09IGxhc3RQYXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhcnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBuZXh0U2libGluZywga2VlcCB0aGlzIG5vZGUgc28gd2UgaGF2ZSBhbiBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IC0xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfcHJlcGFyZVRlbXBsYXRlKGVsZW1lbnQpO1xuICAgICAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vLyBBbGxvd3MgYGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpYCB0byBiZSByZW5hbWVkIGZvciBhXG4vLyBzbWFsbCBtYW51YWwgc2l6ZS1zYXZpbmdzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMFxuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9IC8oWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0pKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXFx4MDlcXHgwYVxceDBjXFx4MGRcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbnVtYmVycyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIElOSVRJQUxfVkFMVUUgPSAwO1xudmFyIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0b3AgYXBwIGJhciB3YXMgZG9ja2VkIGluIHRoZSBwcmV2aW91cyBzY3JvbGwgaGFuZGxlciBpdGVyYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53YXNEb2NrZWRfID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdG9wIGFwcCBiYXIgaXMgZG9ja2VkIGluIHRoZSBmdWxseSBzaG93biBwb3NpdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmlzRG9ja2VkU2hvd2luZ18gPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFyaWFibGUgZm9yIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB0b3AgYXBwIGJhclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXNlZCB0byBwcmV2ZW50IHRoZSB0b3AgYXBwIGJhciBmcm9tIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGR1cmluZyByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIHRocm90dGxlIHRoZSByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGltZW91dCB0aGF0J3MgdXNlZCB0byBkZWJvdW5jZSB0b2dnbGluZyB0aGUgaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfIHZhcmlhYmxlIGFmdGVyIGEgcmVzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIF90aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBfdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgICAgX3RoaXMudG9wQXBwQmFySGVpZ2h0XyA9IF90aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICBfdGhpcy5zY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRvcEFwcEJhclNjcm9sbEhhbmRsZXJfKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudG9wQXBwQmFyUmVzaXplSGFuZGxlcl8oKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBET00gbmVlZHMgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRm9yVXBkYXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNjcmVlbkJvdW5kYXJ5VG9wID0gLXRoaXMudG9wQXBwQmFySGVpZ2h0XztcbiAgICAgICAgdmFyIGhhc0FueVBpeGVsc09mZnNjcmVlbiA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPCAwO1xuICAgICAgICB2YXIgaGFzQW55UGl4ZWxzT25zY3JlZW4gPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID4gb2Zmc2NyZWVuQm91bmRhcnlUb3A7XG4gICAgICAgIHZhciBwYXJ0aWFsbHlTaG93aW5nID0gaGFzQW55UGl4ZWxzT2Zmc2NyZWVuICYmIGhhc0FueVBpeGVsc09uc2NyZWVuO1xuICAgICAgICAvLyBJZiBpdCdzIHBhcnRpYWxseSBzaG93aW5nLCBpdCBjYW4ndCBiZSBkb2NrZWQuXG4gICAgICAgIGlmIChwYXJ0aWFsbHlTaG93aW5nKSB7XG4gICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBwcmV2aW91c2x5IGRvY2tlZCBhbmQgbm90IHBhcnRpYWxseSBzaG93aW5nLCBpdCdzIG5vdyBkb2NrZWQuXG4gICAgICAgICAgICBpZiAoIXRoaXMud2FzRG9ja2VkXykge1xuICAgICAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzRG9ja2VkU2hvd2luZ18gIT09IGhhc0FueVBpeGVsc09uc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvY2tlZFNob3dpbmdfID0gaGFzQW55UGl4ZWxzT25zY3JlZW47XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRpYWxseVNob3dpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBtb3ZlIHRoZSB0b3AgYXBwIGJhciBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUubW92ZVRvcEFwcEJhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9yVXBkYXRlXygpKSB7XG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0b3AgYXBwIGJhciBpcyBmdWxseSBoaWRkZW4gd2UgdXNlIHRoZSBtYXggcG90ZW50aWFsIHRvcCBhcHAgYmFyIGhlaWdodCBhcyBvdXIgb2Zmc2V0XG4gICAgICAgICAgICAvLyBzbyB0aGUgdG9wIGFwcCBiYXIgZG9lc24ndCBzaG93IGlmIHRoZSB3aW5kb3cgcmVzaXplcyBhbmQgdGhlIG5ldyBoZWlnaHQgPiB0aGUgb2xkIGhlaWdodC5cbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldCkgPj0gdGhpcy50b3BBcHBCYXJIZWlnaHRfKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gLW51bWJlcnMuTUFYX1RPUF9BUFBfQkFSX0hFSUdIVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RvcCcsIG9mZnNldCArICdweCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgdGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSB0b3AgYXBwIGJhci5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS50b3BBcHBCYXJTY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IE1hdGgubWF4KHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCksIDApO1xuICAgICAgICB2YXIgZGlmZiA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiAtIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uXztcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fID0gY3VycmVudFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAvLyBJZiB0aGUgd2luZG93IGlzIGJlaW5nIHJlc2l6ZWQgdGhlIGxhc3RTY3JvbGxQb3NpdGlvbl8gbmVlZHMgdG8gYmUgdXBkYXRlZCBidXQgdGhlXG4gICAgICAgIC8vIGN1cnJlbnQgc2Nyb2xsIG9mIHRoZSB0b3AgYXBwIGJhciBzaG91bGQgc3RheSBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyAtPSBkaWZmO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfKSA+IHRoaXMudG9wQXBwQmFySGVpZ2h0Xykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAtdGhpcy50b3BBcHBCYXJIZWlnaHRfO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9wQXBwQmFyXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb3AgYXBwIGJhciByZXNpemUgaGFuZGxlciB0aGF0IHRocm90dGxlL2RlYm91bmNlIGZ1bmN0aW9ucyB0aGF0IGV4ZWN1dGUgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS50b3BBcHBCYXJSZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhyb3R0bGUgcmVzaXplIGV2ZW50cyAxMCBwL3NcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6ZVRocm90dGxlSWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICAgICAgICAgIF90aGlzLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfKCk7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZURlYm91bmNlSWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVEZWJvdW5jZUlkXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudG9wQXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTtcbiAgICAgICAgICAgIF90aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRocm90dGxlZCBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHRvcCBhcHAgYmFyIHNjcm9sbGVkIHZhbHVlcyBpZiB0aGVcbiAgICAgKiB0b3AgYXBwIGJhciBoZWlnaHQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS50aHJvdHRsZWRSZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICBpZiAodGhpcy50b3BBcHBCYXJIZWlnaHRfICE9PSBjdXJyZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSB0b3AgYXBwIGJhciBoYXMgYSBkaWZmZXJlbnQgaGVpZ2h0IGRlcGVuZGluZyBvbiB0aGUgc2NyZWVuIHdpZHRoLCB0aGlzXG4gICAgICAgICAgICAvLyB3aWxsIGVuc3VyZSB0aGF0IHRoZSB0b3AgYXBwIGJhciByZW1haW5zIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlmXG4gICAgICAgICAgICAvLyBjb21wbGV0ZWx5IGhpZGRlbiBhbmQgYSByZXNpemUgbWFrZXMgdGhlIHRvcCBhcHAgYmFyIGEgZGlmZmVyZW50IGhlaWdodC5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gdGhpcy50b3BBcHBCYXJIZWlnaHRfIC0gY3VycmVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudG9wQXBwQmFySGVpZ2h0XyA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3BBcHBCYXJTY3JvbGxIYW5kbGVyXygpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9zdGFuZGFyZC9mb3VuZGF0aW9uLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYXZDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8ubm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkKCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVG9wQXBwQmFyQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUb3BBcHBCYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJOYXZpZ2F0aW9uSWNvbkludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJOYXZpZ2F0aW9uSWNvbkludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJTY3JvbGxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VG90YWxBY3Rpb25JdGVtczogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsSGFuZGxlcigpO1xuICAgICAgICB0aGlzLmluaXRSZXNpemVIYW5kbGVyXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyTmF2aWdhdGlvbkljb25JbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5uYXZDbGlja0hhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveVJlc2l6ZUhhbmRsZXJfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMubmF2Q2xpY2tIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdFNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXJfKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3lTY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXRSZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplSGFuZGxlcl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveVJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZvdW5kYXRpb24uanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgQXR0cmlidXRlUGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiB2W1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGNvbWl0dGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyID0gY29taXR0ZXI7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAgICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgICAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXR0ZXIuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGludG8gYSBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dCBzaWJsaW5nLiBCb3RoIGByZWZgIGFuZFxuICAgICAqIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXMgc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhclxuICAgICAqIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlck5vZGUocmVmKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG9QYXJ0KHBhcnQpIHtcbiAgICAgICAgcGFydC5faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICBwYXJ0Ll9pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBhZnRlciBgcmVmYFxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZikge1xuICAgICAgICByZWYuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgICAgIHJlZi5lbmROb2RlID0gdGhpcy5zdGFydE5vZGU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgICAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICAgIH1cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbn1cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG50cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG59XG5jYXRjaCAoX2UpIHtcbn1cbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgICAgICB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgIHsgY2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZSB9IDpcbiAgICAgICAgby5jYXB0dXJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnRzLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydHMuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbnZhciBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBvcHRpb25hbCBhcmd1bWVudCBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG4gICAgZnVuY3Rpb24gTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWRhcHRlcikgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIHZhcmlhYmxlIGZvciB0aGUgcHJldmlvdXMgc2Nyb2xsIGl0ZXJhdGlvbiB0b3AgYXBwIGJhciBzdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMud2FzU2Nyb2xsZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNjcm9sbEhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZml4ZWRTY3JvbGxIYW5kbGVyXygpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBoYW5kbGVyIGZvciBhcHBseWluZy9yZW1vdmluZyB0aGUgbW9kaWZpZXIgY2xhc3Mgb24gdGhlIGZpeGVkIHRvcCBhcHAgYmFyLlxuICAgICAqL1xuICAgIE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZml4ZWRTY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YXNTY3JvbGxlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRklYRURfU0NST0xMRURfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMud2FzU2Nyb2xsZWRfID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2FzU2Nyb2xsZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX1NDUk9MTEVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1Njcm9sbGVkXyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc0NvbGxhcHNlZF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZSwgXCJpc0NvbGxhcHNlZFwiLCB7XG4gICAgICAgIC8vIFB1YmxpYyB2aXNpYmlsaXR5IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0VG90YWxBY3Rpb25JdGVtcygpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0hPUlRfQ09MTEFQU0VEX0NMQVNTKSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNob3J0QXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTsgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMuc2Nyb2xsSGFuZGxlcl8pO1xuICAgICAgICAgICAgdGhpcy5zaG9ydEFwcEJhclNjcm9sbEhhbmRsZXJfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgYXBwbHlpbmcvcmVtb3ZpbmcgdGhlIGNvbGxhcHNlZCBtb2RpZmllciBjbGFzcyBvbiB0aGUgc2hvcnQgdG9wIGFwcCBiYXIuXG4gICAgICovXG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zaG9ydEFwcEJhclNjcm9sbEhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDw9IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkXykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZF8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uO1xufShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3Nob3J0L2ZvdW5kYXRpb24uanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgc28gdGhhdCBsaXQtaHRtbCB3aWxsIGNhbGwgdGhlIGZ1bmN0aW9uXG4gKiBkdXJpbmcgdGVtcGxhdGUgcmVuZGVyaW5nLCByYXRoZXIgdGhhbiBwYXNzaW5nIGFzIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge2RpcmVjdGl2ZSwgaHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xuICpcbiAqIGNvbnN0IGltbXV0YWJsZSA9IGRpcmVjdGl2ZSgodikgPT4gKHBhcnQpID0+IHtcbiAqICAgaWYgKHBhcnQudmFsdWUgIT09IHYpIHtcbiAqICAgICBwYXJ0LnNldFZhbHVlKHYpXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoZikgPT4gKCguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGQ7XG59KTtcbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNDRVBvbHlmaWxsIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwcm9jZXNzb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gV2hlbiB1c2luZyB0aGUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxsLCBjbG9uZSB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gaW1wb3J0aW5nIGl0LCB0byBrZWVwIHRoZSBmcmFnbWVudCBpbiB0aGUgdGVtcGxhdGUncyBkb2N1bWVudC4gVGhpc1xuICAgICAgICAvLyBsZWF2ZXMgdGhlIGZyYWdtZW50IGluZXJ0IHNvIGN1c3RvbSBlbGVtZW50cyB3b24ndCB1cGdyYWRlIGFuZFxuICAgICAgICAvLyBwb3RlbnRpYWxseSBtb2RpZnkgdGhlaXIgY29udGVudHMgYnkgY3JlYXRpbmcgYSBwb2x5ZmlsbGVkIFNoYWRvd1Jvb3RcbiAgICAgICAgLy8gd2hpbGUgd2UgdHJhdmVyc2UgdGhlIHRyZWUuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSA6XG4gICAgICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IF9wcmVwYXJlSW5zdGFuY2UgPSAoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgICAgICAgIC8vIG51bGxcbiAgICAgICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoICYmIG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAvLyBDb25zZWN1dGl2ZSBQYXJ0cyBtYXkgaGF2ZSB0aGUgc2FtZSBub2RlIGluZGV4LCBpbiB0aGUgY2FzZSBvZlxuICAgICAgICAgICAgICAgIC8vIG11bHRpcGxlIGJvdW5kIGF0dHJpYnV0ZXMgb24gYW4gZWxlbWVudC4gU28gZWFjaCBpdGVyYXRpb24gd2UgZWl0aGVyXG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBub2RlSW5kZXgsIGlmIHdlIGFyZW4ndCBvbiBhIG5vZGUgd2l0aCBhIHBhcnQsIG9yIHRoZVxuICAgICAgICAgICAgICAgIC8vIHBhcnRJbmRleCBpZiB3ZSBhcmUuIEJ5IG5vdCBpbmNyZW1lbnRpbmcgdGhlIG5vZGVJbmRleCB3aGVuIHdlIGZpbmQgYVxuICAgICAgICAgICAgICAgIC8vIHBhcnQsIHdlIGFsbG93IGZvciB0aGUgbmV4dCBwYXJ0IHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIC8vIG5vZGUgaWYgbmVjY2Vzc2FzcnkuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlSW5kZXggPT09IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKG5vZGUsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZXBhcmVJbnN0YW5jZShub2RlLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF9wcmVwYXJlSW5zdGFuY2UoZnJhZ21lbnQpO1xuICAgICAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWluc3RhbmNlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgcmVwYXJlbnROb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGJvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwcm9jZXNzb3IpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRIVE1MKCkge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaHRtbCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAgICAgICAvLyBUaGlzIGV4ZWMoKSBjYWxsIGRvZXMgdHdvIHRoaW5nczpcbiAgICAgICAgICAgIC8vIDEpIEFwcGVuZHMgYSBzdWZmaXggdG8gdGhlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgICAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAgICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdGUgUGFydHMuXG4gICAgICAgICAgICAvLyAyKSBBZGRzIGFuIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlIG1hcmtlciBmb3IgdGhlIGZpcnN0IGV4cHJlc3Npb24gaW5cbiAgICAgICAgICAgIC8vIGFuIGF0dHJpYnV0ZS4gU3Vic2VxdWVudCBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMgd2lsbCB1c2Ugbm9kZSBtYXJrZXJzLFxuICAgICAgICAgICAgLy8gYW5kIHRoaXMgaXMgc2FmZSBzaW5jZSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZXhwcmVzc2lvbnMgYXJlXG4gICAgICAgICAgICAvLyBndWFyYW50ZWVkIHRvIGJlIHF1b3RlZC5cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UncmUgc3RhcnRpbmcgYSBuZXcgYm91bmQgYXR0cmlidXRlLlxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc2FmZSBhdHRyaWJ1dGUgc3VmZml4LCBhbmQgdXNlIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlXG4gICAgICAgICAgICAgICAgLy8gbWFya2VyLlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpICsgbWF0Y2hbMV0gKyBtYXRjaFsyXSArXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgbWF0Y2hbM10gKyBtYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdyZSBlaXRoZXIgaW4gYSBib3VuZCBub2RlLCBvciB0cmFpbGluZyBib3VuZCBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgICAgLy8gRWl0aGVyIHdheSwgbm9kZU1hcmtlciBpcyBzYWZlIHRvIHVzZS5cbiAgICAgICAgICAgICAgICBodG1sICs9IHMgKyBub2RlTWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sICsgdGhpcy5zdHJpbmdzW2VuZEluZGV4XTtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtcmVzdWx0LmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtcmVzdWx0LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgbWFya2VyLCBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCkge1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAgIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtZmFjdG9yeS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJidW5kbGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTURDVG9wQXBwQmFyIH0gZnJvbSAnQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2luZGV4J1xuaW1wb3J0IHsgaHRtbCwgcmVuZGVyIH0gZnJvbSAnbGl0LWh0bWwnXG5pbXBvcnQgeyBpbnN0YWxsUm91dGVyIH0gZnJvbSAncHdhLWhlbHBlcnMvcm91dGVyJ1xuXG4vLyBJbnN0YW50aWF0aW9uXG5jb25zdCB0b3BBcHBCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy10b3AtYXBwLWJhcicpXG5jb25zdCB0b3BBcHBCYXIgPSBuZXcgTURDVG9wQXBwQmFyKHRvcEFwcEJhckVsZW1lbnQpXG5cbmNvbnN0IHBpZWNlcyA9IFtcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi90cmVlV2ViLmpwZycsXG4gICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm9vbmlsL2Jvb25pbC5hcnQvZ2gtcGFnZXMvaW1hZ2VzL2dhbGxlcmllcy9pbGx1c3RyYXRpb24vY29saWJyaURlc2NhbHpvLmpwZycsXG4gICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm9vbmlsL2Jvb25pbC5hcnQvZ2gtcGFnZXMvaW1hZ2VzL2dhbGxlcmllcy9pbGx1c3RyYXRpb24vRHJhZ29uYS5qcGcnLFxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jvb25pbC9ib29uaWwuYXJ0L2doLXBhZ2VzL2ltYWdlcy9nYWxsZXJpZXMvaWxsdXN0cmF0aW9uL01DSVdlYi5qcGcnLFxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jvb25pbC9ib29uaWwuYXJ0L2doLXBhZ2VzL2ltYWdlcy9nYWxsZXJpZXMvaWxsdXN0cmF0aW9uL01haXouanBnJyxcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi9tdWVydGUuanBnJyxcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi9Db3JlMS5qcGcnLFxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jvb25pbC9ib29uaWwuYXJ0L2doLXBhZ2VzL2ltYWdlcy9nYWxsZXJpZXMvaWxsdXN0cmF0aW9uL0NvcmUyLmpwZycsXG4gICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm9vbmlsL2Jvb25pbC5hcnQvZ2gtcGFnZXMvaW1hZ2VzL2dhbGxlcmllcy9pbGx1c3RyYXRpb24vc21pbGUuanBnJyxcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi9pdHpwYXBhbG90bC5qcGcnLFxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jvb25pbC9ib29uaWwuYXJ0L2doLXBhZ2VzL2ltYWdlcy9nYWxsZXJpZXMvaWxsdXN0cmF0aW9uL0Vsc2VyTWFub3MuanBnJyxcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi92dWVsb2RlUGFqYXJvLmpwZycsXG4gICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm9vbmlsL2Jvb25pbC5hcnQvZ2gtcGFnZXMvaW1hZ2VzL2dhbGxlcmllcy9pbGx1c3RyYXRpb24vY3VlbnRvMi5qcGcnLFxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jvb25pbC9ib29uaWwuYXJ0L2doLXBhZ2VzL2ltYWdlcy9nYWxsZXJpZXMvaWxsdXN0cmF0aW9uL2N1ZW50bzMuanBnJyxcbiAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib29uaWwvYm9vbmlsLmFydC9naC1wYWdlcy9pbWFnZXMvZ2FsbGVyaWVzL2lsbHVzdHJhdGlvbi9DYW1wby5qcGcnXG5dXG5cbmZ1bmN0aW9uIGZ1bGxTY3JlZW4gKGV2ZW50KSB7XG4gIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0XG4gIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKClcbiAgfSBlbHNlIHtcbiAgICBpZiAoaW1hZ2UucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGltYWdlLnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICB9XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxufVxuXG5mdW5jdGlvbiBpdGVtVGVtcGxhdGUgKHBpZWNlKSB7XG4gIHJldHVybiBodG1sYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGllY2VcIj5cbiAgICAgIDxpbWcgQGNsaWNrPSR7ZnVsbFNjcmVlbn0gY2xhc3M9XCJwb3N0ZXJcIiBzcmM9XCIke3BpZWNlfVwiIC8+XG4gICAgPC9zZWN0aW9uPlxuICBgXG59XG5cbmZ1bmN0aW9uIGhvbWVUZW1wbGF0ZSAocGllY2VzKSB7XG4gIHJldHVybiBodG1sYFxuICAgICR7cGllY2VzLm1hcChpdGVtVGVtcGxhdGUpfVxuICBgXG59XG5cbnJlbmRlcihob21lVGVtcGxhdGUocGllY2VzKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9maXhlZC9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvcnQvZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3N0YW5kYXJkL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9pbmRleC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9maXhlZC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4vc2hvcnQvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbnZhciBNRENUb3BBcHBCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RvcEFwcEJhcihyb290KTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5KSB7XG4gICAgICAgIGlmIChyaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgcmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gTURDUmlwcGxlLmF0dGFjaFRvKGVsKTsgfTsgfVxuICAgICAgICB0aGlzLm5hdkljb25fID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gR2V0IGFsbCBpY29ucyBpbiB0aGUgdG9vbGJhciBhbmQgaW5zdGFudGlhdGUgdGhlIHJpcHBsZXNcbiAgICAgICAgdmFyIGljb25zID0gW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikpO1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgaWNvbnMucHVzaCh0aGlzLm5hdkljb25fKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmljb25SaXBwbGVzXyA9IGljb25zLm1hcChmdW5jdGlvbiAoaWNvbikge1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZUZhY3RvcnkoaWNvbik7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB3aW5kb3c7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWNvblJpcHBsZXNfLmZvckVhY2goZnVuY3Rpb24gKGljb25SaXBwbGUpIHsgcmV0dXJuIGljb25SaXBwbGUuZGVzdHJveSgpOyB9KTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLnNldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHNjcm9sbCBoYW5kbGVyIGZyb20gdGhlIHByZXZpb3VzIHNjcm9sbCB0YXJnZXRcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95U2Nyb2xsSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB0YXJnZXQ7XG4gICAgICAgIC8vIEluaXRpYWxpemUgc2Nyb2xsIGhhbmRsZXIgb24gdGhlIG5ldyBzY3JvbGwgdGFyZ2V0XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdFNjcm9sbEhhbmRsZXIoKTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgZ2V0VG9wQXBwQmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGllbnRIZWlnaHQ7IH0sXG4gICAgICAgICAgICByZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5uYXZJY29uXy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyTmF2aWdhdGlvbkljb25JbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdkljb25fLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLk5BVklHQVRJT05fRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnNjcm9sbFRhcmdldF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnNjcm9sbFRhcmdldF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB3aW4gPSBfdGhpcy5zY3JvbGxUYXJnZXRfO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLnNjcm9sbFRhcmdldF87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gd2luLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvdGFsQWN0aW9uSXRlbXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikubGVuZ3RoOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB2YXIgZm91bmRhdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpKSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kYXRpb247XG4gICAgfTtcbiAgICByZXR1cm4gTURDVG9wQXBwQmFyO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RvcEFwcEJhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvY29tcG9uZW50LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9pbmRleCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9ueWZpbGwubWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsJztcbmV4cG9ydCB7IHBvbnlmaWxsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9pbmRleC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wJyk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIgfSBmcm9tICcuL3BhcnRzLmpzJztcbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgICAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICByZXR1cm4gY29taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXJ0cyBmb3IgYSB0ZXh0LXBvc2l0aW9uIGJpbmRpbmcuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgICAqL1xuICAgIGhhbmRsZVRleHRFeHByZXNzaW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBhIFRlbXBsYXRlUmVzdWx0IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlXG4gKiAgICAgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydChPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5IH0sIG9wdGlvbnMpKSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgcGFydC5jb21taXQoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9yZW5kZXIuanMiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLyoqXG4gIEJhc2ljIHJvdXRlciB0aGF0IGNhbGxzIGEgY2FsbGJhY2sgd2hlbmV2ZXIgdGhlIGxvY2F0aW9uIGlzIHVwZGF0ZWQuXG5cbiAgRXhhbXBsZTpcblxuICAgICAgaW1wb3J0IHsgaW5zdGFsbFJvdXRlciB9IGZyb20gJ3B3YS1oZWxwZXJzL3JvdXRlci5qcyc7XG5cbiAgICAgIGluc3RhbGxSb3V0ZXIoKGxvY2F0aW9uKSA9PiBoYW5kbGVOYXZpZ2F0aW9uKGxvY2F0aW9uKSk7XG5cbiAgRm9yIGV4YW1wbGUsIGlmIHlvdSdyZSB1c2luZyB0aGlzIHJvdXRlciBpbiBhIFJlZHV4LWNvbm5lY3RlZCBjb21wb25lbnQsXG4gIHlvdSBjb3VsZCBkaXNwYXRjaCBhbiBhY3Rpb24gaW4gdGhlIGNhbGxiYWNrOlxuXG4gICAgICBpbXBvcnQgeyBpbnN0YWxsUm91dGVyIH0gZnJvbSAncHdhLWhlbHBlcnMvcm91dGVyLmpzJztcbiAgICAgIGltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9hcHAuanMnO1xuXG4gICAgICBpbnN0YWxsUm91dGVyKChsb2NhdGlvbikgPT4gc3RvcmUuZGlzcGF0Y2gobmF2aWdhdGUobG9jYXRpb24pKSlcblxuICBJZiB5b3UgbmVlZCB0byBmb3JjZSBhIG5hdmlnYXRpb24gdG8gYSBuZXcgbG9jYXRpb24gcHJvZ3JhbW1hdGljYWxseSwgeW91IGNhblxuICBkbyBzbyBieSBwdXNoaW5nIGEgbmV3IHN0YXRlIHVzaW5nIHRoZSBIaXN0b3J5IEFQSSwgYW5kIHRoZW4gbWFudWFsbHlcbiAgY2FsbGluZyB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgbmV3IGxvY2F0aW9uOlxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL25ldy1yb3V0ZScpO1xuICAgICAgaGFuZGxlTmF2aWdhdGlvbih3aW5kb3cubG9jYXRpb24pO1xuXG4gIE9wdGlvbmFsbHksIHlvdSBjYW4gdXNlIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcmVhZCB0aGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhlXG4gIG5hdmlnYXRpb24uIEZvciBleGFtcGxlLCB5b3UgbWF5IHdhbnQgdG8gc2Nyb2xsIHRvIHRvcCBvbmx5IGFmdGVyIGEgbGluayBjbGljay5cblxuICAgICAgaW5zdGFsbFJvdXRlcigobG9jYXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIE9ubHkgc2Nyb2xsIHRvIHRvcCBvbiBsaW5rIGNsaWNrcywgbm90IHBvcHN0YXRlIGV2ZW50cy5cbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlTmF2aWdhdGlvbihsb2NhdGlvbik7XG4gICAgICB9KTtcbiovXG5leHBvcnQgY29uc3QgaW5zdGFsbFJvdXRlciA9IChsb2NhdGlvblVwZGF0ZWRDYWxsYmFjaykgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCB8fCBlLmJ1dHRvbiAhPT0gMCB8fFxuICAgICAgICAgICAgZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBhbmNob3IgPSBlLmNvbXBvc2VkUGF0aCgpLmZpbHRlcihuID0+IG4udGFnTmFtZSA9PT0gJ0EnKVswXTtcbiAgICAgICAgaWYgKCFhbmNob3IgfHwgYW5jaG9yLnRhcmdldCB8fFxuICAgICAgICAgICAgYW5jaG9yLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fFxuICAgICAgICAgICAgYW5jaG9yLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuaHJlZjtcbiAgICAgICAgaWYgKCFocmVmIHx8IGhyZWYuaW5kZXhPZignbWFpbHRvOicpICE9PSAtMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IGxvY2F0aW9uLm9yaWdpbiB8fCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKG9yaWdpbikgIT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGhyZWYgIT09IGxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGhyZWYpO1xuICAgICAgICAgICAgbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sobG9jYXRpb24sIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZSA9PiBsb2NhdGlvblVwZGF0ZWRDYWxsYmFjayh3aW5kb3cubG9jYXRpb24sIGUpKTtcbiAgICBsb2NhdGlvblVwZGF0ZWRDYWxsYmFjayh3aW5kb3cubG9jYXRpb24sIG51bGwgLyogZXZlbnQgKi8pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHdhLWhlbHBlcnMvcm91dGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==