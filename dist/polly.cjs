"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");
var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");
var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));
var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));
var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _repeat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/repeat"));
var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));
var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));
var _endsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/ends-with"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _lastIndexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/last-index-of"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));
var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));
var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/parse-int"));
var _parseInt3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));
var _parseFloat2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/parse-float"));
var _parseFloat3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-float"));
var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));
var _create = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/create"));
var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));
var _toStringTag = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol/to-string-tag"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));
var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));
var _url = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/url"));
var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));
var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));
var _isNan = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-nan"));
var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));
var _setPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of"));
var _sort = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));
var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));
var _reverse = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reverse"));
var _findIndex = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find-index"));
var _splice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/splice"));
var _isInteger = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-integer"));
var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));
var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));
var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));
var _getOwnPropertyNames = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-names"));
const _excluded = ["$metadata"],
  _excluded2 = ["headers", "query"],
  _excluded3 = ["preferredFile"],
  _excluded4 = ["assign"];
function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context111, _context112; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty2(_context111 = ownKeys(Object(source), !0)).call(_context111, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty2(_context112 = ownKeys(Object(source))).call(_context112, function (key) { _Object$defineProperty2(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
(() => {
  var e = {
      890: (e, t, n) => {
        "use strict";

        n.d(t, {
          E: () => r
        }), e = n.hmd(e);
        const r = () => {
          try {
            return e.require && n(Object(function () {
              var e = new Error("Cannot find module 'aws-crt'");
              throw e.code = "MODULE_NOT_FOUND", e;
            }())) ? ["md/crt-avail"] : null;
          } catch (e) {
            return null;
          }
        };
      },
      932: (e, t, n) => {
        "use strict";

        const r = n(501),
          s = n(844),
          o = n(192);
        e.exports = {
          XMLParser: s,
          XMLValidator: r,
          XMLBuilder: o
        };
      },
      849: (e, t) => {
        "use strict";

        const n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
          r = "[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
          s = new RegExp("^" + r + "$");
        t.isExist = function (e) {
          return void 0 !== e;
        }, t.isEmptyObject = function (e) {
          return 0 === (0, _keys.default)(e).length;
        }, t.merge = function (e, t, n) {
          if (t) {
            const r = (0, _keys.default)(t),
              s = r.length;
            for (let o = 0; o < s; o++) e[r[o]] = "strict" === n ? [t[r[o]]] : t[r[o]];
          }
        }, t.getValue = function (e) {
          return t.isExist(e) ? e : "";
        }, t.isName = function (e) {
          return !(null == s.exec(e));
        }, t.getAllMatches = function (e, t) {
          const n = [];
          let r = t.exec(e);
          for (; r;) {
            const s = [];
            s.startIndex = t.lastIndex - r[0].length;
            const o = r.length;
            for (let e = 0; e < o; e++) s.push(r[e]);
            n.push(s), r = t.exec(e);
          }
          return n;
        }, t.nameRegexp = r;
      },
      501: (e, t, n) => {
        "use strict";

        const r = n(849),
          s = {
            allowBooleanAttributes: !1,
            unpairedTags: []
          };
        function o(e) {
          return " " === e || "\t" === e || "\n" === e || "\r" === e;
        }
        function i(e, t) {
          const n = t;
          for (; t < e.length; t++) if ("?" != e[t] && " " != e[t]) ;else {
            const r = e.substr(n, t - n);
            if (t > 5 && "xml" === r) return f("InvalidXml", "XML declaration allowed only at the start of the document.", m(e, t));
            if ("?" == e[t] && ">" == e[t + 1]) {
              t++;
              break;
            }
          }
          return t;
        }
        function a(e, t) {
          if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
            for (t += 3; t < e.length; t++) if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
              t += 2;
              break;
            }
          } else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
            let n = 1;
            for (t += 8; t < e.length; t++) if ("<" === e[t]) n++;else if (">" === e[t] && (n--, 0 === n)) break;
          } else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7]) for (t += 8; t < e.length; t++) if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
            t += 2;
            break;
          }
          return t;
        }
        t.validate = function (e, t) {
          t = (0, _assign.default)({}, s, t);
          const n = [];
          let c = !1,
            l = !1;
          "\ufeff" === e[0] && (e = e.substr(1));
          for (let s = 0; s < e.length; s++) if ("<" === e[s] && "?" === e[s + 1]) {
            if (s += 2, s = i(e, s), s.err) return s;
          } else {
            if ("<" !== e[s]) {
              if (o(e[s])) continue;
              return f("InvalidChar", "char '" + e[s] + "' is not expected.", m(e, s));
            }
            {
              let g = s;
              if (s++, "!" === e[s]) {
                s = a(e, s);
                continue;
              }
              {
                let y = !1;
                "/" === e[s] && (y = !0, s++);
                let w = "";
                for (; s < e.length && ">" !== e[s] && " " !== e[s] && "\t" !== e[s] && "\n" !== e[s] && "\r" !== e[s]; s++) w += e[s];
                if (w = (0, _trim.default)(w).call(w), "/" === w[w.length - 1] && (w = w.substring(0, w.length - 1), s--), u = w, !r.isName(u)) {
                  let t;
                  return t = 0 === (0, _trim.default)(w).call(w).length ? "Invalid space after '<'." : "Tag '" + w + "' is an invalid name.", f("InvalidTag", t, m(e, s));
                }
                const b = d(e, s);
                if (!1 === b) return f("InvalidAttr", "Attributes for '" + w + "' have open quote.", m(e, s));
                let E = b.value;
                if (s = b.index, "/" === E[E.length - 1]) {
                  const n = s - E.length;
                  E = E.substring(0, E.length - 1);
                  const r = p(E, t);
                  if (!0 !== r) return f(r.err.code, r.err.msg, m(e, n + r.err.line));
                  c = !0;
                } else if (y) {
                  if (!b.tagClosed) return f("InvalidTag", "Closing tag '" + w + "' doesn't have proper closing.", m(e, s));
                  if ((0, _trim.default)(E).call(E).length > 0) return f("InvalidTag", "Closing tag '" + w + "' can't have attributes or invalid starting.", m(e, g));
                  {
                    const t = n.pop();
                    if (w !== t.tagName) {
                      let n = m(e, t.tagStartPos);
                      return f("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + w + "'.", m(e, g));
                    }
                    0 == n.length && (l = !0);
                  }
                } else {
                  var _context;
                  const r = p(E, t);
                  if (!0 !== r) return f(r.err.code, r.err.msg, m(e, s - E.length + r.err.line));
                  if (!0 === l) return f("InvalidXml", "Multiple possible root nodes found.", m(e, s));
                  -1 !== (0, _indexOf.default)(_context = t.unpairedTags).call(_context, w) || n.push({
                    tagName: w,
                    tagStartPos: g
                  }), c = !0;
                }
                for (s++; s < e.length; s++) if ("<" === e[s]) {
                  if ("!" === e[s + 1]) {
                    s++, s = a(e, s);
                    continue;
                  }
                  if ("?" !== e[s + 1]) break;
                  if (s = i(e, ++s), s.err) return s;
                } else if ("&" === e[s]) {
                  const t = h(e, s);
                  if (-1 == t) return f("InvalidChar", "char '&' is not expected.", m(e, s));
                  s = t;
                } else if (!0 === l && !o(e[s])) return f("InvalidXml", "Extra text at the end", m(e, s));
                "<" === e[s] && s--;
              }
            }
          }
          var u;
          return c ? 1 == n.length ? f("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", m(e, n[0].tagStartPos)) : !(n.length > 0) || f("InvalidXml", "Invalid '" + (0, _stringify.default)((0, _map.default)(n).call(n, e => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
            line: 1,
            col: 1
          }) : f("InvalidXml", "Start tag expected.", 1);
        };
        const c = '"',
          l = "'";
        function d(e, t) {
          let n = "",
            r = "",
            s = !1;
          for (; t < e.length; t++) {
            if (e[t] === c || e[t] === l) "" === r ? r = e[t] : r !== e[t] || (r = "");else if (">" === e[t] && "" === r) {
              s = !0;
              break;
            }
            n += e[t];
          }
          return "" === r && {
            value: n,
            index: t,
            tagClosed: s
          };
        }
        const u = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
        function p(e, t) {
          const n = r.getAllMatches(e, u),
            s = {};
          for (let e = 0; e < n.length; e++) {
            if (0 === n[e][1].length) return f("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", y(n[e]));
            if (void 0 !== n[e][3] && void 0 === n[e][4]) return f("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", y(n[e]));
            if (void 0 === n[e][3] && !t.allowBooleanAttributes) return f("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", y(n[e]));
            const r = n[e][2];
            if (!g(r)) return f("InvalidAttr", "Attribute '" + r + "' is an invalid name.", y(n[e]));
            if (s.hasOwnProperty(r)) return f("InvalidAttr", "Attribute '" + r + "' is repeated.", y(n[e]));
            s[r] = 1;
          }
          return !0;
        }
        function h(e, t) {
          if (";" === e[++t]) return -1;
          if ("#" === e[t]) return function (e, t) {
            let n = /\d/;
            for ("x" === e[t] && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
              if (";" === e[t]) return t;
              if (!e[t].match(n)) break;
            }
            return -1;
          }(e, ++t);
          let n = 0;
          for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
            if (";" === e[t]) break;
            return -1;
          }
          return t;
        }
        function f(e, t, n) {
          return {
            err: {
              code: e,
              msg: t,
              line: n.line || n,
              col: n.col
            }
          };
        }
        function g(e) {
          return r.isName(e);
        }
        function m(e, t) {
          const n = e.substring(0, t).split(/\r?\n/);
          return {
            line: n.length,
            col: n[n.length - 1].length + 1
          };
        }
        function y(e) {
          return e.startIndex + e[1].length;
        }
      },
      192: (e, t, n) => {
        "use strict";

        const r = n(592),
          s = {
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: "  ",
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function (e, t) {
              return t;
            },
            attributeValueProcessor: function (e, t) {
              return t;
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [{
              regex: new RegExp("&", "g"),
              val: "&amp;"
            }, {
              regex: new RegExp(">", "g"),
              val: "&gt;"
            }, {
              regex: new RegExp("<", "g"),
              val: "&lt;"
            }, {
              regex: new RegExp("'", "g"),
              val: "&apos;"
            }, {
              regex: new RegExp('"', "g"),
              val: "&quot;"
            }],
            processEntities: !0,
            stopNodes: []
          };
        function o(e) {
          this.options = (0, _assign.default)({}, s, e), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () {
            return !1;
          } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = c), this.processTextOrObjNode = i, this.options.format ? (this.indentate = a, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
            return "";
          }, this.tagEndChar = ">", this.newLine = "");
        }
        function i(e, t, n) {
          const r = this.j2x(e, n + 1);
          return void 0 !== e[this.options.textNodeName] && 1 === (0, _keys.default)(e).length ? this.buildTextValNode(e[this.options.textNodeName], t, r.attrStr, n) : this.buildObjectNode(r.val, t, r.attrStr, n);
        }
        function a(e) {
          var _context2;
          return (0, _repeat.default)(_context2 = this.options.indentBy).call(_context2, e);
        }
        function c(e) {
          return !!(0, _startsWith.default)(e).call(e, this.options.attributeNamePrefix) && e.substr(this.attrPrefixLen);
        }
        o.prototype.build = function (e) {
          return this.options.preserveOrder ? r(e, this.options) : ((0, _isArray.default)(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
            [this.options.arrayNodeName]: e
          }), this.j2x(e, 0).val);
        }, o.prototype.j2x = function (e, t) {
          let n = "",
            r = "";
          for (let s in e) if (void 0 === e[s]) ;else if (null === e[s]) "?" === s[0] ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar;else if (e[s] instanceof Date) r += this.buildTextValNode(e[s], s, "", t);else if ("object" != typeof e[s]) {
            const o = this.isAttribute(s);
            if (o) n += this.buildAttrPairStr(o, "" + e[s]);else if (s === this.options.textNodeName) {
              let t = this.options.tagValueProcessor(s, "" + e[s]);
              r += this.replaceEntitiesValue(t);
            } else r += this.buildTextValNode(e[s], s, "", t);
          } else if ((0, _isArray.default)(e[s])) {
            const n = e[s].length;
            for (let o = 0; o < n; o++) {
              const n = e[s][o];
              void 0 === n || (null === n ? "?" === s[0] ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar : r += "object" == typeof n ? this.processTextOrObjNode(n, s, t) : this.buildTextValNode(n, s, "", t));
            }
          } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
            const t = (0, _keys.default)(e[s]),
              r = t.length;
            for (let o = 0; o < r; o++) n += this.buildAttrPairStr(t[o], "" + e[s][t[o]]);
          } else r += this.processTextOrObjNode(e[s], s, t);
          return {
            attrStr: n,
            val: r
          };
        }, o.prototype.buildAttrPairStr = function (e, t) {
          return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && "true" === t ? " " + e : " " + e + '="' + t + '"';
        }, o.prototype.buildObjectNode = function (e, t, n, r) {
          if ("" === e) return "?" === t[0] ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
          {
            let s = "</" + t + this.tagEndChar,
              o = "";
            return "?" === t[0] && (o = "?", s = ""), n && -1 === (0, _indexOf.default)(e).call(e, "<") ? this.indentate(r) + "<" + t + n + o + ">" + e + s : !1 !== this.options.commentPropName && t === this.options.commentPropName && 0 === o.length ? this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(r) + "<" + t + n + o + this.tagEndChar + e + this.indentate(r) + s;
          }
        }, o.prototype.closeTag = function (e) {
          var _context3;
          let t = "";
          return -1 !== (0, _indexOf.default)(_context3 = this.options.unpairedTags).call(_context3, e) ? this.options.suppressUnpairedNode || (t = "/") : t = this.options.suppressEmptyNode ? "/" : `></${e}`, t;
        }, o.prototype.buildTextValNode = function (e, t, n, r) {
          if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) return this.indentate(r) + `<![CDATA[${e}]]>` + this.newLine;
          if (!1 !== this.options.commentPropName && t === this.options.commentPropName) return this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine;
          if ("?" === t[0]) return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
          {
            let s = this.options.tagValueProcessor(t, e);
            return s = this.replaceEntitiesValue(s), "" === s ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + s + "</" + t + this.tagEndChar;
          }
        }, o.prototype.replaceEntitiesValue = function (e) {
          if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
            const n = this.options.entities[t];
            e = e.replace(n.regex, n.val);
          }
          return e;
        }, e.exports = o;
      },
      592: e => {
        function t(e, i, a, c) {
          let l = "",
            d = !1;
          for (let u = 0; u < e.length; u++) {
            var _context4;
            const p = e[u],
              h = n(p);
            let f = "";
            if (f = 0 === a.length ? h : `${a}.${h}`, h === i.textNodeName) {
              let e = p[h];
              s(f, i) || (e = i.tagValueProcessor(h, e), e = o(e, i)), d && (l += c), l += e, d = !1;
              continue;
            }
            if (h === i.cdataPropName) {
              d && (l += c), l += `<![CDATA[${p[h][0][i.textNodeName]}]]>`, d = !1;
              continue;
            }
            if (h === i.commentPropName) {
              l += c + `\x3c!--${p[h][0][i.textNodeName]}--\x3e`, d = !0;
              continue;
            }
            if ("?" === h[0]) {
              const e = r(p[":@"], i),
                t = "?xml" === h ? "" : c;
              let n = p[h][0][i.textNodeName];
              n = 0 !== n.length ? " " + n : "", l += t + `<${h}${n}${e}?>`, d = !0;
              continue;
            }
            let g = c;
            "" !== g && (g += i.indentBy);
            const m = c + `<${h}${r(p[":@"], i)}`,
              y = t(p[h], i, f, g);
            -1 !== (0, _indexOf.default)(_context4 = i.unpairedTags).call(_context4, h) ? i.suppressUnpairedNode ? l += m + ">" : l += m + "/>" : y && 0 !== y.length || !i.suppressEmptyNode ? y && (0, _endsWith.default)(y).call(y, ">") ? l += m + `>${y}${c}</${h}>` : (l += m + ">", y && "" !== c && ((0, _includes.default)(y).call(y, "/>") || (0, _includes.default)(y).call(y, "</")) ? l += c + i.indentBy + y + c : l += y, l += `</${h}>`) : l += m + "/>", d = !0;
          }
          return l;
        }
        function n(e) {
          const t = (0, _keys.default)(e);
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (":@" !== n) return n;
          }
        }
        function r(e, t) {
          let n = "";
          if (e && !t.ignoreAttributes) for (let r in e) {
            let s = t.attributeValueProcessor(r, e[r]);
            s = o(s, t), !0 === s && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${s}"`;
          }
          return n;
        }
        function s(e, t) {
          let n = (e = e.substr(0, e.length - t.textNodeName.length - 1)).substr((0, _lastIndexOf.default)(e).call(e, ".") + 1);
          for (let r in t.stopNodes) if (t.stopNodes[r] === e || t.stopNodes[r] === "*." + n) return !0;
          return !1;
        }
        function o(e, t) {
          if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
            const r = t.entities[n];
            e = e.replace(r.regex, r.val);
          }
          return e;
        }
        e.exports = function (e, n) {
          let r = "";
          return n.format && n.indentBy.length > 0 && (r = "\n"), t(e, n, "", r);
        };
      },
      780: e => {
        const t = RegExp("^\\s([a-zA-z0-0]+)[ \t](['\"])([^&]+)\\2");
        function n(e, n) {
          const r = t.exec(e);
          r && (n[r[1]] = {
            regx: RegExp(`&${r[1]};`, "g"),
            val: r[3]
          });
        }
        e.exports = function (e, t) {
          const r = {};
          if ("O" !== e[t + 3] || "C" !== e[t + 4] || "T" !== e[t + 5] || "Y" !== e[t + 6] || "P" !== e[t + 7] || "E" !== e[t + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
          {
            t += 9;
            let s = 1,
              o = !1,
              i = !1,
              a = !1,
              c = "";
            for (; t < e.length; t++) if ("<" !== e[t] || a) {
              if (">" === e[t]) {
                if (a ? "-" === e[t - 1] && "-" === e[t - 2] && (a = !1, s--) : (i && (n(c, r), i = !1), s--), 0 === s) break;
              } else "[" === e[t] ? o = !0 : c += e[t];
            } else {
              if (o && "!" === e[t + 1] && "E" === e[t + 2] && "N" === e[t + 3] && "T" === e[t + 4] && "I" === e[t + 5] && "T" === e[t + 6] && "Y" === e[t + 7]) t += 7, i = !0;else if (o && "!" === e[t + 1] && "E" === e[t + 2] && "L" === e[t + 3] && "E" === e[t + 4] && "M" === e[t + 5] && "E" === e[t + 6] && "N" === e[t + 7] && "T" === e[t + 8]) t += 8;else if (o && "!" === e[t + 1] && "A" === e[t + 2] && "T" === e[t + 3] && "T" === e[t + 4] && "L" === e[t + 5] && "I" === e[t + 6] && "S" === e[t + 7] && "T" === e[t + 8]) t += 8;else if (o && "!" === e[t + 1] && "N" === e[t + 2] && "O" === e[t + 3] && "T" === e[t + 4] && "A" === e[t + 5] && "T" === e[t + 6] && "I" === e[t + 7] && "O" === e[t + 8] && "N" === e[t + 9]) t += 9;else {
                if ("!" !== e[t + 1] || "-" !== e[t + 2] || "-" !== e[t + 3]) throw new Error("Invalid DOCTYPE");
                a = !0;
              }
              s++, c = "";
            }
            if (0 !== s) throw new Error("Unclosed DOCTYPE");
          }
          return {
            entities: r,
            i: t
          };
        };
      },
      745: (e, t) => {
        const n = {
          preserveOrder: !1,
          attributeNamePrefix: "@_",
          attributesGroupName: !1,
          textNodeName: "#text",
          ignoreAttributes: !0,
          removeNSPrefix: !1,
          allowBooleanAttributes: !1,
          parseTagValue: !0,
          parseAttributeValue: !1,
          trimValues: !0,
          cdataPropName: !1,
          numberParseOptions: {
            hex: !0,
            leadingZeros: !0,
            eNotation: !0
          },
          tagValueProcessor: function (e, t) {
            return t;
          },
          attributeValueProcessor: function (e, t) {
            return t;
          },
          stopNodes: [],
          alwaysCreateTextNode: !1,
          isArray: () => !1,
          commentPropName: !1,
          unpairedTags: [],
          processEntities: !0,
          htmlEntities: !1,
          ignoreDeclaration: !1,
          ignorePiTags: !1,
          transformTagName: !1,
          transformAttributeName: !1
        };
        t.buildOptions = function (e) {
          return (0, _assign.default)({}, n, e);
        }, t.defaultOptions = n;
      },
      78: (e, t, n) => {
        "use strict";

        const r = n(849),
          s = n(311),
          o = n(780),
          i = n(153);
        function a(e) {
          const t = (0, _keys.default)(e);
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            this.lastEntities[r] = {
              regex: new RegExp("&" + r + ";", "g"),
              val: e[r]
            };
          }
        }
        function c(e, t, n, r, s, o, i) {
          if (void 0 !== e && (this.options.trimValues && !r && (e = (0, _trim.default)(e).call(e)), e.length > 0)) {
            i || (e = this.replaceEntitiesValue(e));
            const r = this.options.tagValueProcessor(t, e, n, s, o);
            return null == r ? e : typeof r != typeof e || r !== e ? r : this.options.trimValues || (0, _trim.default)(e).call(e) === e ? b(e, this.options.parseTagValue, this.options.numberParseOptions) : e;
          }
        }
        function l(e) {
          if (this.options.removeNSPrefix) {
            const t = e.split(":"),
              n = "/" === e.charAt(0) ? "/" : "";
            if ("xmlns" === t[0]) return "";
            2 === t.length && (e = n + t[1]);
          }
          return e;
        }
        "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, r.nameRegexp);
        const d = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
        function u(e, t) {
          if (!this.options.ignoreAttributes && "string" == typeof e) {
            const n = r.getAllMatches(e, d),
              s = n.length,
              o = {};
            for (let e = 0; e < s; e++) {
              const r = this.resolveNameSpace(n[e][1]);
              let s = n[e][4],
                i = this.options.attributeNamePrefix + r;
              if (r.length) if (this.options.transformAttributeName && (i = this.options.transformAttributeName(i)), "__proto__" === i && (i = "#__proto__"), void 0 !== s) {
                this.options.trimValues && (s = (0, _trim.default)(s).call(s)), s = this.replaceEntitiesValue(s);
                const e = this.options.attributeValueProcessor(r, s, t);
                o[i] = null == e ? s : typeof e != typeof s || e !== s ? e : b(s, this.options.parseAttributeValue, this.options.numberParseOptions);
              } else this.options.allowBooleanAttributes && (o[i] = !0);
            }
            if (!(0, _keys.default)(o).length) return;
            if (this.options.attributesGroupName) {
              const e = {};
              return e[this.options.attributesGroupName] = o, e;
            }
            return o;
          }
        }
        const p = function (e) {
            e = e.replace(/\r\n?/g, "\n");
            const t = new s("!xml");
            let n = t,
              r = "",
              i = "";
            for (let a = 0; a < e.length; a++) if ("<" === e[a]) {
              if ("/" === e[a + 1]) {
                var _context5;
                const t = m(e, ">", a, "Closing Tag is not closed.");
                let s = (0, _trim.default)(_context5 = e.substring(a + 2, t)).call(_context5);
                if (this.options.removeNSPrefix) {
                  const e = (0, _indexOf.default)(s).call(s, ":");
                  -1 !== e && (s = s.substr(e + 1));
                }
                this.options.transformTagName && (s = this.options.transformTagName(s)), n && (r = this.saveTextToParentTag(r, n, i)), i = i.substr(0, (0, _lastIndexOf.default)(i).call(i, ".")), n = this.tagsNodeStack.pop(), r = "", a = t;
              } else if ("?" === e[a + 1]) {
                let t = y(e, a, !1, "?>");
                if (!t) throw new Error("Pi Tag is not closed.");
                if (r = this.saveTextToParentTag(r, n, i), this.options.ignoreDeclaration && "?xml" === t.tagName || this.options.ignorePiTags) ;else {
                  const e = new s(t.tagName);
                  e.add(this.options.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && (e[":@"] = this.buildAttributesMap(t.tagExp, i)), n.addChild(e);
                }
                a = t.closeIndex + 1;
              } else if ("!--" === e.substr(a + 1, 3)) {
                const t = m(e, "--\x3e", a + 4, "Comment is not closed.");
                if (this.options.commentPropName) {
                  const s = e.substring(a + 4, t - 2);
                  r = this.saveTextToParentTag(r, n, i), n.add(this.options.commentPropName, [{
                    [this.options.textNodeName]: s
                  }]);
                }
                a = t;
              } else if ("!D" === e.substr(a + 1, 2)) {
                const t = o(e, a);
                this.docTypeEntities = t.entities, a = t.i;
              } else if ("![" === e.substr(a + 1, 2)) {
                const t = m(e, "]]>", a, "CDATA is not closed.") - 2,
                  s = e.substring(a + 9, t);
                if (r = this.saveTextToParentTag(r, n, i), this.options.cdataPropName) n.add(this.options.cdataPropName, [{
                  [this.options.textNodeName]: s
                }]);else {
                  let e = this.parseTextData(s, n.tagname, i, !0, !1, !0);
                  null == e && (e = ""), n.add(this.options.textNodeName, e);
                }
                a = t + 2;
              } else {
                var _context6;
                let o = y(e, a, this.options.removeNSPrefix),
                  c = o.tagName,
                  l = o.tagExp,
                  d = o.attrExpPresent,
                  u = o.closeIndex;
                this.options.transformTagName && (c = this.options.transformTagName(c)), n && r && "!xml" !== n.tagname && (r = this.saveTextToParentTag(r, n, i, !1)), c !== t.tagname && (i += i ? "." + c : c);
                const p = n;
                if (p && -1 !== (0, _indexOf.default)(_context6 = this.options.unpairedTags).call(_context6, p.tagname) && (n = this.tagsNodeStack.pop()), this.isItStopNode(this.options.stopNodes, i, c)) {
                  var _context7;
                  let t = "";
                  if (l.length > 0 && (0, _lastIndexOf.default)(l).call(l, "/") === l.length - 1) a = o.closeIndex;else if (-1 !== (0, _indexOf.default)(_context7 = this.options.unpairedTags).call(_context7, c)) a = o.closeIndex;else {
                    const n = this.readStopNodeData(e, c, u + 1);
                    if (!n) throw new Error(`Unexpected end of ${c}`);
                    a = n.i, t = n.tagContent;
                  }
                  const r = new s(c);
                  c !== l && d && (r[":@"] = this.buildAttributesMap(l, i)), t && (t = this.parseTextData(t, c, i, !0, d, !0, !0)), i = i.substr(0, (0, _lastIndexOf.default)(i).call(i, ".")), r.add(this.options.textNodeName, t), n.addChild(r);
                } else {
                  if (l.length > 0 && (0, _lastIndexOf.default)(l).call(l, "/") === l.length - 1) {
                    "/" === c[c.length - 1] ? (c = c.substr(0, c.length - 1), l = c) : l = l.substr(0, l.length - 1), this.options.transformTagName && (c = this.options.transformTagName(c));
                    const e = new s(c);
                    c !== l && d && (e[":@"] = this.buildAttributesMap(l, i)), i = i.substr(0, (0, _lastIndexOf.default)(i).call(i, ".")), n.addChild(e);
                  } else {
                    const e = new s(c);
                    this.tagsNodeStack.push(n), c !== l && d && (e[":@"] = this.buildAttributesMap(l, i)), n.addChild(e), n = e;
                  }
                  r = "", a = u;
                }
              }
            } else r += e[a];
            return t.child;
          },
          h = function (e) {
            if (this.options.processEntities) {
              for (let t in this.docTypeEntities) {
                const n = this.docTypeEntities[t];
                e = e.replace(n.regx, n.val);
              }
              for (let t in this.lastEntities) {
                const n = this.lastEntities[t];
                e = e.replace(n.regex, n.val);
              }
              if (this.options.htmlEntities) for (let t in this.htmlEntities) {
                const n = this.htmlEntities[t];
                e = e.replace(n.regex, n.val);
              }
              e = e.replace(this.ampEntity.regex, this.ampEntity.val);
            }
            return e;
          };
        function f(e, t, n, r) {
          return e && (void 0 === r && (r = 0 === (0, _keys.default)(t.child).length), void 0 !== (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && 0 !== (0, _keys.default)(t[":@"]).length, r)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e;
        }
        function g(e, t, n) {
          const r = "*." + n;
          for (const n in e) {
            const s = e[n];
            if (r === s || t === s) return !0;
          }
          return !1;
        }
        function m(e, t, n, r) {
          const s = (0, _indexOf.default)(e).call(e, t, n);
          if (-1 === s) throw new Error(r);
          return s + t.length - 1;
        }
        function y(e, t, n, r = ">") {
          const s = function (e, t, n = ">") {
            let r,
              s = "";
            for (let o = t; o < e.length; o++) {
              let t = e[o];
              if (r) t === r && (r = "");else if ('"' === t || "'" === t) r = t;else if (t === n[0]) {
                if (!n[1]) return {
                  data: s,
                  index: o
                };
                if (e[o + 1] === n[1]) return {
                  data: s,
                  index: o
                };
              } else "\t" === t && (t = " ");
              s += t;
            }
          }(e, t + 1, r);
          if (!s) return;
          let o = s.data;
          const i = s.index,
            a = o.search(/\s/);
          let c = o,
            l = !0;
          if (-1 !== a && (c = o.substr(0, a).replace(/\s\s*$/, ""), o = o.substr(a + 1)), n) {
            const e = (0, _indexOf.default)(c).call(c, ":");
            -1 !== e && (c = c.substr(e + 1), l = c !== s.data.substr(e + 1));
          }
          return {
            tagName: c,
            tagExp: o,
            closeIndex: i,
            attrExpPresent: l
          };
        }
        function w(e, t, n) {
          const r = n;
          let s = 1;
          for (; n < e.length; n++) if ("<" === e[n]) if ("/" === e[n + 1]) {
            var _context8;
            const o = m(e, ">", n, `${t} is not closed`);
            if ((0, _trim.default)(_context8 = e.substring(n + 2, o)).call(_context8) === t && (s--, 0 === s)) return {
              tagContent: e.substring(r, n),
              i: o
            };
            n = o;
          } else if ("?" === e[n + 1]) n = m(e, "?>", n + 1, "StopNode is not closed.");else if ("!--" === e.substr(n + 1, 3)) n = m(e, "--\x3e", n + 3, "StopNode is not closed.");else if ("![" === e.substr(n + 1, 2)) n = m(e, "]]>", n, "StopNode is not closed.") - 2;else {
            const r = y(e, n, ">");
            r && ((r && r.tagName) === t && "/" !== r.tagExp[r.tagExp.length - 1] && s++, n = r.closeIndex);
          }
        }
        function b(e, t, n) {
          if (t && "string" == typeof e) {
            const t = (0, _trim.default)(e).call(e);
            return "true" === t || "false" !== t && i(e, n);
          }
          return r.isExist(e) ? e : "";
        }
        e.exports = class {
          constructor(e) {
            this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
              apos: {
                regex: /&(apos|#39|#x27);/g,
                val: "'"
              },
              gt: {
                regex: /&(gt|#62|#x3E);/g,
                val: ">"
              },
              lt: {
                regex: /&(lt|#60|#x3C);/g,
                val: "<"
              },
              quot: {
                regex: /&(quot|#34|#x22);/g,
                val: '"'
              }
            }, this.ampEntity = {
              regex: /&(amp|#38|#x26);/g,
              val: "&"
            }, this.htmlEntities = {
              space: {
                regex: /&(nbsp|#160);/g,
                val: " "
              },
              cent: {
                regex: /&(cent|#162);/g,
                val: "¢"
              },
              pound: {
                regex: /&(pound|#163);/g,
                val: "£"
              },
              yen: {
                regex: /&(yen|#165);/g,
                val: "¥"
              },
              euro: {
                regex: /&(euro|#8364);/g,
                val: "€"
              },
              copyright: {
                regex: /&(copy|#169);/g,
                val: "©"
              },
              reg: {
                regex: /&(reg|#174);/g,
                val: "®"
              },
              inr: {
                regex: /&(inr|#8377);/g,
                val: "₹"
              }
            }, this.addExternalEntities = a, this.parseXml = p, this.parseTextData = c, this.resolveNameSpace = l, this.buildAttributesMap = u, this.isItStopNode = g, this.replaceEntitiesValue = h, this.readStopNodeData = w, this.saveTextToParentTag = f;
          }
        };
      },
      844: (e, t, n) => {
        const {
            buildOptions: r
          } = n(745),
          s = n(78),
          {
            prettify: o
          } = n(997),
          i = n(501);
        e.exports = class {
          constructor(e) {
            this.externalEntities = {}, this.options = r(e);
          }
          parse(e, t) {
            if ("string" == typeof e) ;else {
              if (!e.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
              e = e.toString();
            }
            if (t) {
              !0 === t && (t = {});
              const n = i.validate(e, t);
              if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
            }
            const n = new s(this.options);
            n.addExternalEntities(this.externalEntities);
            const r = n.parseXml(e);
            return this.options.preserveOrder || void 0 === r ? r : o(r, this.options);
          }
          addEntity(e, t) {
            if (-1 !== (0, _indexOf.default)(t).call(t, "&")) throw new Error("Entity value can't have '&'");
            if (-1 !== (0, _indexOf.default)(e).call(e, "&") || -1 !== (0, _indexOf.default)(e).call(e, ";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
            if ("&" === t) throw new Error("An entity with value '&' is not permitted");
            this.externalEntities[e] = t;
          }
        };
      },
      997: (e, t) => {
        "use strict";

        function n(e, t, i) {
          let a;
          const c = {};
          for (let l = 0; l < e.length; l++) {
            const d = e[l],
              u = r(d);
            let p = "";
            if (p = void 0 === i ? u : i + "." + u, u === t.textNodeName) void 0 === a ? a = d[u] : a += "" + d[u];else {
              if (void 0 === u) continue;
              if (d[u]) {
                let e = n(d[u], t, p);
                const r = o(e, t);
                d[":@"] ? s(e, d[":@"], p, t) : 1 !== (0, _keys.default)(e).length || void 0 === e[t.textNodeName] || t.alwaysCreateTextNode ? 0 === (0, _keys.default)(e).length && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], void 0 !== c[u] && c.hasOwnProperty(u) ? ((0, _isArray.default)(c[u]) || (c[u] = [c[u]]), c[u].push(e)) : t.isArray(u, p, r) ? c[u] = [e] : c[u] = e;
              }
            }
          }
          return "string" == typeof a ? a.length > 0 && (c[t.textNodeName] = a) : void 0 !== a && (c[t.textNodeName] = a), c;
        }
        function r(e) {
          const t = (0, _keys.default)(e);
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (":@" !== n) return n;
          }
        }
        function s(e, t, n, r) {
          if (t) {
            const s = (0, _keys.default)(t),
              o = s.length;
            for (let i = 0; i < o; i++) {
              const o = s[i];
              r.isArray(o, n + "." + o, !0, !0) ? e[o] = [t[o]] : e[o] = t[o];
            }
          }
        }
        function o(e, t) {
          const n = (0, _keys.default)(e).length;
          return !!(0 === n || 1 === n && e[t.textNodeName]);
        }
        t.prettify = function (e, t) {
          return n(e, t);
        };
      },
      311: e => {
        "use strict";

        e.exports = class {
          constructor(e) {
            this.tagname = e, this.child = [], this[":@"] = {};
          }
          add(e, t) {
            "__proto__" === e && (e = "#__proto__"), this.child.push({
              [e]: t
            });
          }
          addChild(e) {
            "__proto__" === e.tagname && (e.tagname = "#__proto__"), e[":@"] && (0, _keys.default)(e[":@"]).length > 0 ? this.child.push({
              [e.tagname]: e.child,
              ":@": e[":@"]
            }) : this.child.push({
              [e.tagname]: e.child
            });
          }
        };
      },
      562: e => {
        "use strict";

        function t(e) {
          return "number" == typeof e || !!/^0x[0-9a-f]+$/i.test(e) || /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e);
        }
        function n(e, t) {
          return "constructor" === t && "function" == typeof e[t] || "__proto__" === t;
        }
        e.exports = function (e, r) {
          var _context9, _context10, _context11, _context13, _context18, _context19, _context20, _context24, _context25;
          r || (r = {});
          var s = {
            bools: {},
            strings: {},
            unknownFn: null
          };
          "function" == typeof r.unknown && (s.unknownFn = r.unknown), "boolean" == typeof r.boolean && r.boolean ? s.allBools = !0 : (0, _forEach.default)(_context9 = (0, _filter.default)(_context10 = (0, _concat.default)(_context11 = []).call(_context11, r.boolean)).call(_context10, Boolean)).call(_context9, function (e) {
            s.bools[e] = !0;
          });
          var o = {};
          function i(e) {
            var _context12;
            return (0, _some.default)(_context12 = o[e]).call(_context12, function (e) {
              return s.bools[e];
            });
          }
          (0, _forEach.default)(_context13 = (0, _keys.default)(r.alias || {})).call(_context13, function (e) {
            var _context14, _context15;
            o[e] = (0, _concat.default)(_context14 = []).call(_context14, r.alias[e]), (0, _forEach.default)(_context15 = o[e]).call(_context15, function (t) {
              var _context16, _context17;
              o[t] = (0, _concat.default)(_context16 = [e]).call(_context16, (0, _filter.default)(_context17 = o[e]).call(_context17, function (e) {
                return t !== e;
              }));
            });
          }), (0, _forEach.default)(_context18 = (0, _filter.default)(_context19 = (0, _concat.default)(_context20 = []).call(_context20, r.string)).call(_context19, Boolean)).call(_context18, function (e) {
            var _context21, _context22;
            s.strings[e] = !0, o[e] && (0, _forEach.default)(_context21 = (0, _concat.default)(_context22 = []).call(_context22, o[e])).call(_context21, function (e) {
              s.strings[e] = !0;
            });
          });
          var a = r.default || {},
            c = {
              _: []
            };
          function l(e, t, r) {
            for (var o = e, i = 0; i < t.length - 1; i++) {
              var a = t[i];
              if (n(o, a)) return;
              void 0 === o[a] && (o[a] = {}), o[a] !== Object.prototype && o[a] !== Number.prototype && o[a] !== String.prototype || (o[a] = {}), o[a] === Array.prototype && (o[a] = []), o = o[a];
            }
            var c = t[t.length - 1];
            n(o, c) || (o !== Object.prototype && o !== Number.prototype && o !== String.prototype || (o = {}), o === Array.prototype && (o = []), void 0 === o[c] || s.bools[c] || "boolean" == typeof o[c] ? o[c] = r : (0, _isArray.default)(o[c]) ? o[c].push(r) : o[c] = [o[c], r]);
          }
          function d(e, n, r) {
            if (!r || !s.unknownFn || function (e, t) {
              return s.allBools && /^--[^=]+$/.test(t) || s.strings[e] || s.bools[e] || o[e];
            }(e, r) || !1 !== s.unknownFn(r)) {
              var _context23;
              var i = !s.strings[e] && t(n) ? Number(n) : n;
              l(c, e.split("."), i), (0, _forEach.default)(_context23 = o[e] || []).call(_context23, function (e) {
                l(c, e.split("."), i);
              });
            }
          }
          (0, _forEach.default)(_context24 = (0, _keys.default)(s.bools)).call(_context24, function (e) {
            d(e, void 0 !== a[e] && a[e]);
          });
          var u = [];
          -1 !== (0, _indexOf.default)(e).call(e, "--") && (u = (0, _slice.default)(e).call(e, (0, _indexOf.default)(e).call(e, "--") + 1), e = (0, _slice.default)(e).call(e, 0, (0, _indexOf.default)(e).call(e, "--")));
          for (var p = 0; p < e.length; p++) {
            var h,
              f,
              g = e[p];
            if (/^--.+=/.test(g)) {
              var m = g.match(/^--([^=]+)=([\s\S]*)$/);
              h = m[1];
              var y = m[2];
              s.bools[h] && (y = "false" !== y), d(h, y, g);
            } else if (/^--no-.+/.test(g)) d(h = g.match(/^--no-(.+)/)[1], !1, g);else if (/^--.+/.test(g)) h = g.match(/^--(.+)/)[1], void 0 === (f = e[p + 1]) || /^(-|--)[^-]/.test(f) || s.bools[h] || s.allBools || o[h] && i(h) ? /^(true|false)$/.test(f) ? (d(h, "true" === f, g), p += 1) : d(h, !s.strings[h] || "", g) : (d(h, f, g), p += 1);else if (/^-[^-]+/.test(g)) {
              for (var w = (0, _slice.default)(g).call(g, 1, -1).split(""), b = !1, E = 0; E < w.length; E++) if ("-" !== (f = (0, _slice.default)(g).call(g, E + 2))) {
                if (/[A-Za-z]/.test(w[E]) && "=" === f[0]) {
                  d(w[E], (0, _slice.default)(f).call(f, 1), g), b = !0;
                  break;
                }
                if (/[A-Za-z]/.test(w[E]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(f)) {
                  d(w[E], f, g), b = !0;
                  break;
                }
                if (w[E + 1] && w[E + 1].match(/\W/)) {
                  d(w[E], (0, _slice.default)(g).call(g, E + 2), g), b = !0;
                  break;
                }
                d(w[E], !s.strings[w[E]] || "", g);
              } else d(w[E], f, g);
              h = (0, _slice.default)(g).call(g, -1)[0], b || "-" === h || (!e[p + 1] || /^(-|--)[^-]/.test(e[p + 1]) || s.bools[h] || o[h] && i(h) ? e[p + 1] && /^(true|false)$/.test(e[p + 1]) ? (d(h, "true" === e[p + 1], g), p += 1) : d(h, !s.strings[h] || "", g) : (d(h, e[p + 1], g), p += 1));
            } else if (s.unknownFn && !1 === s.unknownFn(g) || c._.push(s.strings._ || !t(g) ? g : Number(g)), r.stopEarly) {
              c._.push.apply(c._, (0, _slice.default)(e).call(e, p + 1));
              break;
            }
          }
          return (0, _forEach.default)(_context25 = (0, _keys.default)(a)).call(_context25, function (e) {
            var _context26, _context27;
            var t, n, r;
            t = c, n = e.split("."), r = t, (0, _forEach.default)(_context26 = (0, _slice.default)(n).call(n, 0, -1)).call(_context26, function (e) {
              r = r[e] || {};
            }), n[n.length - 1] in r || (l(c, e.split("."), a[e]), (0, _forEach.default)(_context27 = o[e] || []).call(_context27, function (t) {
              l(c, t.split("."), a[e]);
            }));
          }), r["--"] ? c["--"] = (0, _slice.default)(u).call(u) : (0, _forEach.default)(u).call(u, function (e) {
            c._.push(e);
          }), c;
        };
      },
      153: e => {
        const t = /^[-+]?0x[a-fA-F0-9]+$/,
          n = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
        !_parseInt2.default && _parseInt3.default && (Number.parseInt = _parseInt3.default), !_parseFloat2.default && _parseFloat3.default && (Number.parseFloat = _parseFloat3.default);
        const r = {
          hex: !0,
          leadingZeros: !0,
          decimalPoint: ".",
          eNotation: !0
        };
        e.exports = function (e, s = {}) {
          if (s = (0, _assign.default)({}, r, s), !e || "string" != typeof e) return e;
          let o = (0, _trim.default)(e).call(e);
          if (void 0 !== s.skipLike && s.skipLike.test(o)) return e;
          if (s.hex && t.test(o)) return (0, _parseInt2.default)(o, 16);
          {
            const t = n.exec(o);
            if (t) {
              const n = t[1],
                r = t[2];
              let a = (i = t[3]) && -1 !== (0, _indexOf.default)(i).call(i, ".") ? ("." === (i = i.replace(/0+$/, "")) ? i = "0" : "." === i[0] ? i = "0" + i : "." === i[i.length - 1] && (i = i.substr(0, i.length - 1)), i) : i;
              const c = t[4] || t[6];
              if (!s.leadingZeros && r.length > 0 && n && "." !== o[2]) return e;
              if (!s.leadingZeros && r.length > 0 && !n && "." !== o[1]) return e;
              {
                const t = Number(o),
                  i = "" + t;
                return -1 !== i.search(/[eE]/) || c ? s.eNotation ? t : e : -1 !== (0, _indexOf.default)(o).call(o, ".") ? "0" === i && "" === a || i === a || n && i === "-" + a ? t : e : r ? a === i || n + a === i ? t : e : o === i || o === n + i ? t : e;
              }
            }
            return e;
          }
          var i;
        };
      }
    },
    t = {};
  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var o = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r](o, o.exports, n), o.loaded = !0, o.exports;
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {
      a: t
    }), t;
  }, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && (0, _defineProperty3.default)(e, r, {
      enumerable: !0,
      get: t[r]
    });
  }, n.hmd = e => ((e = (0, _create.default)(e)).children || (e.children = []), (0, _defineProperty3.default)(e, "exports", {
    enumerable: !0,
    set: () => {
      throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
    }
  }), e), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof _symbol.default && _toStringTag.default && (0, _defineProperty3.default)(e, _toStringTag.default, {
      value: "Module"
    }), (0, _defineProperty3.default)(e, "__esModule", {
      value: !0
    });
  };
  var r = {};
  (() => {
    "use strict";

    n.r(r);
    var e = {};
    n.r(e), n.d(e, {
      isVirtualHostableS3Bucket: () => zs,
      parseArn: () => Ws,
      partition: () => _s
    });
    var t,
      s = {};
    n.r(s), n.d(s, {
      aws: () => e,
      booleanEquals: () => Bs,
      getAttr: () => Vs,
      isSet: () => Ks,
      isValidHostLabel: () => qs,
      not: () => Hs,
      parseURL: () => Ys,
      stringEquals: () => Qs,
      substring: () => eo,
      uriEncode: () => to
    }), function (e) {
      e.ENV = "env", e.CONFIG = "shared config entry";
    }(t || (t = {}));
    const o = (e, t, n) => {
        if (t in e) {
          if ("true" === e[t]) return !0;
          if ("false" === e[t]) return !1;
          throw new Error(`Cannot load ${n} "${t}". Expected "true" or "false", got ${e[t]}.`);
        }
      },
      i = {
        environmentVariableSelector: e => o(e, "AWS_USE_DUALSTACK_ENDPOINT", t.ENV),
        configFileSelector: e => o(e, "use_dualstack_endpoint", t.CONFIG),
        default: !1
      },
      a = {
        environmentVariableSelector: e => o(e, "AWS_USE_FIPS_ENDPOINT", t.ENV),
        configFileSelector: e => o(e, "use_fips_endpoint", t.CONFIG),
        default: !1
      },
      c = {
        environmentVariableSelector: e => e.AWS_REGION,
        configFileSelector: e => e.region,
        default: () => {
          throw new Error("Region is missing");
        }
      },
      l = {
        preferredFile: "credentials"
      },
      d = e => "string" == typeof e && ((0, _startsWith.default)(e).call(e, "fips-") || (0, _endsWith.default)(e).call(e, "-fips")),
      u = e => {
        var _context28;
        return d(e) ? (0, _includes.default)(_context28 = ["fips-aws-global", "aws-fips"]).call(_context28, e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e;
      },
      p = e => {
        const {
          region: t,
          useFipsEndpoint: n
        } = e;
        if (!t) throw new Error("Region is missing");
        return _objectSpread(_objectSpread({}, e), {}, {
          region: async () => {
            if ("string" == typeof t) return u(t);
            const e = await t();
            return u(e);
          },
          useFipsEndpoint: async () => {
            const e = "string" == typeof t ? t : await t();
            return !!d(e) || ("function" != typeof n ? _promise.default.resolve(!!n) : n());
          }
        });
      };
    var h, f;
    (f = h || (h = {}))[f.HEADER = 0] = "HEADER", f[f.TRAILER = 1] = "TRAILER";
    class g {
      constructor(e) {
        var _context29;
        this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== (0, _slice.default)(_context29 = e.protocol).call(_context29, -1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/";
      }
      static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers;
      }
      clone() {
        var _context30;
        const e = new g(_objectSpread(_objectSpread({}, this), {}, {
          headers: _objectSpread({}, this.headers)
        }));
        var t;
        return e.query && (e.query = (t = e.query, (0, _reduce.default)(_context30 = (0, _keys.default)(t)).call(_context30, (e, n) => {
          const r = t[n];
          return _objectSpread(_objectSpread({}, e), {}, {
            [n]: (0, _isArray.default)(r) ? [...r] : r
          });
        }, {}))), e;
      }
    }
    class m {
      constructor(e) {
        this.statusCode = e.statusCode, this.headers = e.headers || {}, this.body = e.body;
      }
      static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "number" == typeof t.statusCode && "object" == typeof t.headers;
      }
    }
    const y = "content-length",
      w = {
        step: "build",
        tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
        name: "contentLengthMiddleware",
        override: !0
      },
      b = e => ({
        applyToStack: t => {
          var n;
          t.add((n = e.bodyLengthChecker, e => async t => {
            const r = t.request;
            if (g.isInstance(r)) {
              var _context31, _context32;
              const {
                body: e,
                headers: t
              } = r;
              if (e && -1 === (0, _indexOf.default)(_context31 = (0, _map.default)(_context32 = (0, _keys.default)(t)).call(_context32, e => e.toLowerCase())).call(_context31, y)) try {
                const t = n(e);
                r.headers = _objectSpread(_objectSpread({}, r.headers), {}, {
                  [y]: String(t)
                });
              } catch (e) {}
            }
            return e(_objectSpread(_objectSpread({}, t), {}, {
              request: r
            }));
          }), w);
        }
      }),
      E = (e, t) => (n, r) => async r => {
        const {
          response: s
        } = await n(r);
        try {
          return {
            response: s,
            output: await t(s, e)
          };
        } catch (e) {
          throw (0, _defineProperty3.default)(e, "$response", {
            value: s
          }), e;
        }
      },
      S = (e, t) => (n, r) => async s => {
        var _r$endpointV;
        const o = (_r$endpointV = r.endpointV2) !== null && _r$endpointV !== void 0 && _r$endpointV.url && e.urlParser ? async () => e.urlParser(r.endpointV2.url) : e.endpoint;
        if (!o) throw new Error("No valid endpoint provider available.");
        const i = await t(s.input, _objectSpread(_objectSpread({}, e), {}, {
          endpoint: o
        }));
        return n(_objectSpread(_objectSpread({}, s), {}, {
          request: i
        }));
      },
      x = {
        name: "deserializerMiddleware",
        step: "deserialize",
        tags: ["DESERIALIZER"],
        override: !0
      },
      v = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: !0
      };
    function T(e, t, n) {
      return {
        applyToStack: r => {
          r.add(E(e, n), x), r.add(S(e, t), v);
        }
      };
    }
    const A = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
      P = /(\d+\.){3}\d+/,
      I = /\.\./,
      k = (e, t, n) => {
        const r = async () => {
          var _n$e;
          const r = (_n$e = n[e]) !== null && _n$e !== void 0 ? _n$e : n[t];
          return "function" == typeof r ? r() : r;
        };
        return "endpoint" === e || "endpoint" === t ? async () => {
          const e = await r();
          if (e && "object" == typeof e) {
            if ("url" in e) return e.url.href;
            if ("hostname" in e) {
              const {
                protocol: t,
                hostname: n,
                port: r,
                path: s
              } = e;
              return `${t}//${n}${r ? ":" + r : ""}${s}`;
            }
          }
          return e;
        } : r;
      },
      R = async (e, t, n) => {
        var _t$getEndpointParamet;
        const r = {},
          s = (t === null || t === void 0 ? void 0 : (_t$getEndpointParamet = t.getEndpointParameterInstructions) === null || _t$getEndpointParamet === void 0 ? void 0 : _t$getEndpointParamet.call(t)) || {};
        for (const [t, o] of (0, _entries.default)(s)) switch (o.type) {
          case "staticContextParams":
            r[t] = o.value;
            break;
          case "contextParams":
            r[t] = e[o.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            r[t] = await k(o.name, t, n)();
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + (0, _stringify.default)(o));
        }
        return 0 === (0, _keys.default)(s).length && (0, _assign.default)(r, n), "s3" === String(n.serviceId).toLowerCase() && (await (async e => {
          var _context34;
          const t = (e === null || e === void 0 ? void 0 : e.Bucket) || "";
          if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), (e => {
            var _context33;
            const [t, n, r, s, o, i] = e.split(":"),
              a = "arn" === t && e.split(":").length >= 6,
              c = 5 === (0, _filter.default)(_context33 = [t, n, r, o, i]).call(_context33, Boolean).length;
            if (a && !c) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
            return !!("arn" === t && n && r && o && i);
          })(t)) {
            if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
          } else n = t, (!A.test(n) || P.test(n) || I.test(n) || -1 !== (0, _indexOf.default)(t).call(t, ".") && !(0, _startsWith.default)(_context34 = String(e.Endpoint)).call(_context34, "http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
          var n;
          return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e;
        })(r)), r;
      },
      N = {
        step: "serialize",
        tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
        name: "endpointV2Middleware",
        override: !0,
        relation: "before",
        toMiddleware: v.name
      },
      C = (e, t) => ({
        applyToStack: n => {
          n.addRelativeTo((({
            config: e,
            instructions: t
          }) => (n, r) => async s => {
            var _o$properties, _r$authSchemes;
            const o = await (async (e, t, n, r) => {
              const s = await R(e, t, n);
              if ("function" != typeof n.endpointProvider) throw new Error("config.endpointProvider is not set.");
              return n.endpointProvider(s, r);
            })(s.input, {
              getEndpointParameterInstructions: () => t
            }, _objectSpread({}, e), r);
            r.endpointV2 = o, r.authSchemes = (_o$properties = o.properties) === null || _o$properties === void 0 ? void 0 : _o$properties.authSchemes;
            const i = (_r$authSchemes = r.authSchemes) === null || _r$authSchemes === void 0 ? void 0 : _r$authSchemes[0];
            return i && (r.signing_region = i.signingRegion, r.signing_service = i.signingName), n(_objectSpread({}, s));
          })({
            config: e,
            instructions: t
          }), N);
        }
      }),
      O = e => {
        if ("function" == typeof e) return e;
        const t = _promise.default.resolve(e);
        return () => t;
      },
      $ = e => {
        if ("string" == typeof e) return $(new _url.default(e));
        const {
          hostname: t,
          pathname: n,
          port: r,
          protocol: s,
          search: o
        } = e;
        let i;
        return o && (i = function (e) {
          const t = {};
          if (e = e.replace(/^\?/, "")) for (const n of e.split("&")) {
            let [e, r = null] = n.split("=");
            e = decodeURIComponent(e), r && (r = decodeURIComponent(r)), e in t ? (0, _isArray.default)(t[e]) ? t[e].push(r) : t[e] = [t[e], r] : t[e] = r;
          }
          return t;
        }(o)), {
          hostname: t,
          port: r ? (0, _parseInt3.default)(r) : void 0,
          protocol: s,
          path: n,
          query: i
        };
      },
      _ = e => {
        var _e$tls, _e$useDualstackEndpoi, _e$useFipsEndpoint;
        const t = (_e$tls = e.tls) !== null && _e$tls !== void 0 ? _e$tls : !0,
          {
            endpoint: n
          } = e,
          r = null != n ? async () => (e => "object" == typeof e ? "url" in e ? $(e.url) : e : $(e))(await O(n)()) : void 0,
          s = !!n;
        return _objectSpread(_objectSpread({}, e), {}, {
          endpoint: r,
          tls: t,
          isCustomEndpoint: s,
          useDualstackEndpoint: O((_e$useDualstackEndpoi = e.useDualstackEndpoint) !== null && _e$useDualstackEndpoi !== void 0 ? _e$useDualstackEndpoi : !1),
          useFipsEndpoint: O((_e$useFipsEndpoint = e.useFipsEndpoint) !== null && _e$useFipsEndpoint !== void 0 ? _e$useFipsEndpoint : !1)
        });
      },
      D = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: ["HOST"],
        override: !0
      },
      F = e => ({
        applyToStack: t => {
          t.add((e => t => async n => {
            if (!g.isInstance(n.request)) return t(n);
            const {
                request: r
              } = n,
              {
                handlerProtocol: s = ""
              } = e.requestHandler.metadata || {};
            if ((0, _indexOf.default)(s).call(s, "h2") >= 0 && !r.headers[":authority"]) delete r.headers.host, r.headers[":authority"] = "";else if (!r.headers.host) {
              let e = r.hostname;
              null != r.port && (e += `:${r.port}`), r.headers.host = e;
            }
            return t(n);
          })(e), D);
        }
      }),
      j = {
        name: "loggerMiddleware",
        tags: ["LOGGER"],
        step: "initialize",
        override: !0
      },
      M = e => ({
        applyToStack: e => {
          e.add((e, t) => async n => {
            const r = await e(n),
              {
                clientName: s,
                commandName: o,
                logger: i,
                inputFilterSensitiveLog: a,
                outputFilterSensitiveLog: c,
                dynamoDbDocumentClientOptions: l = {}
              } = t,
              {
                overrideInputFilterSensitiveLog: d,
                overrideOutputFilterSensitiveLog: u
              } = l;
            if (!i) return r;
            if ("function" == typeof i.info) {
              const _r$output = r.output,
                {
                  $metadata: e
                } = _r$output,
                t = (0, _objectWithoutProperties2.default)(_r$output, _excluded);
              i.info({
                clientName: s,
                commandName: o,
                input: (d !== null && d !== void 0 ? d : a)(n.input),
                output: (u !== null && u !== void 0 ? u : c)(t),
                metadata: e
              });
            }
            return r;
          }, j);
        }
      }),
      L = "X-Amzn-Trace-Id",
      U = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: !0,
        priority: "low"
      },
      q = e => ({
        applyToStack: t => {
          t.add((e => t => async n => {
            const {
              request: r
            } = n;
            if (!g.isInstance(r) || "node" !== e.runtime || r.headers.hasOwnProperty(L)) return t(n);
            const s = process.env.AWS_LAMBDA_FUNCTION_NAME,
              o = process.env._X_AMZN_TRACE_ID,
              i = e => "string" == typeof e && e.length > 0;
            return i(s) && i(o) && (r.headers[L] = o), t(_objectSpread(_objectSpread({}, n), {}, {
              request: r
            }));
          })(e), U);
        }
      });
    var z, W;
    (W = z || (z = {})).STANDARD = "standard", W.ADAPTIVE = "adaptive";
    const B = "STANDARD",
      V = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
      K = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"],
      H = [500, 502, 503, 504],
      G = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
      J = e => {
        var _e$$metadata, _e$$retryable;
        return 429 === ((_e$$metadata = e.$metadata) === null || _e$$metadata === void 0 ? void 0 : _e$$metadata.httpStatusCode) || (0, _includes.default)(V).call(V, e.name) || 1 == ((_e$$retryable = e.$retryable) === null || _e$$retryable === void 0 ? void 0 : _e$$retryable.throttling);
      },
      X = e => {
        var _e$$metadata2;
        return (0, _includes.default)(K).call(K, e.name) || (0, _includes.default)(G).call(G, (e === null || e === void 0 ? void 0 : e.code) || "") || (0, _includes.default)(H).call(H, ((_e$$metadata2 = e.$metadata) === null || _e$$metadata2 === void 0 ? void 0 : _e$$metadata2.httpStatusCode) || 0);
      };
    class Z {
      constructor(e) {
        var _e$beta, _e$minCapacity, _e$minFillRate, _e$scaleConstant, _e$smooth;
        this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = (_e$beta = e === null || e === void 0 ? void 0 : e.beta) !== null && _e$beta !== void 0 ? _e$beta : .7, this.minCapacity = (_e$minCapacity = e === null || e === void 0 ? void 0 : e.minCapacity) !== null && _e$minCapacity !== void 0 ? _e$minCapacity : 1, this.minFillRate = (_e$minFillRate = e === null || e === void 0 ? void 0 : e.minFillRate) !== null && _e$minFillRate !== void 0 ? _e$minFillRate : .5, this.scaleConstant = (_e$scaleConstant = e === null || e === void 0 ? void 0 : e.scaleConstant) !== null && _e$scaleConstant !== void 0 ? _e$scaleConstant : .4, this.smooth = (_e$smooth = e === null || e === void 0 ? void 0 : e.smooth) !== null && _e$smooth !== void 0 ? _e$smooth : .8;
        const t = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return (0, _now.default)() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(e) {
        if (this.enabled) {
          if (this.refillTokenBucket(), e > this.currentCapacity) {
            const t = (e - this.currentCapacity) / this.fillRate * 1e3;
            await new _promise.default(e => (0, _setTimeout2.default)(e, t));
          }
          this.currentCapacity = this.currentCapacity - e;
        }
      }
      refillTokenBucket() {
        const e = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) return void (this.lastTimestamp = e);
        const t = (e - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e;
      }
      updateClientSendingRate(e) {
        let t;
        if (this.updateMeasuredRate(), J(e)) {
          const e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
          this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket();
        } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
        const n = Math.min(t, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(n);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(e) {
        return this.getPrecise(e * this.beta);
      }
      cubicSuccess(e) {
        return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = !0;
      }
      updateTokenBucketRate(e) {
        this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const e = this.getCurrentTimeInSeconds(),
          t = Math.floor(2 * e) / 2;
        if (this.requestCount++, t > this.lastTxRateBucket) {
          const e = this.requestCount / (t - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(e * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t;
        }
      }
      getPrecise(e) {
        return (0, _parseFloat3.default)(e.toFixed(8));
      }
    }
    class Y {
      constructor(e) {
        this.maxAttemptsProvider = e, this.mode = z.STANDARD, this.retryToken = ((e, t, n, r) => {
          var _r$retryCost, _r$timeoutRetryCost, _r$retryBackoffStrate;
          const s = e,
            o = (_r$retryCost = r === null || r === void 0 ? void 0 : r.retryCost) !== null && _r$retryCost !== void 0 ? _r$retryCost : 5,
            i = (_r$timeoutRetryCost = r === null || r === void 0 ? void 0 : r.timeoutRetryCost) !== null && _r$timeoutRetryCost !== void 0 ? _r$timeoutRetryCost : 10,
            a = (_r$retryBackoffStrate = r === null || r === void 0 ? void 0 : r.retryBackoffStrategy) !== null && _r$retryBackoffStrate !== void 0 ? _r$retryBackoffStrate : (() => {
              let e = 100;
              return {
                computeNextBackoffDelay: t => Math.floor(Math.min(2e4, Math.random() * 2 ** t * e)),
                setDelayBase: t => {
                  e = t;
                }
              };
            })();
          let c,
            l = e,
            d = Math.min(2e4, t),
            u = n !== null && n !== void 0 ? n : 0;
          const p = e => "TRANSIENT" === e ? i : o,
            h = e => p(e) <= l;
          return {
            getRetryCount: () => u,
            getRetryDelay: () => d,
            getLastRetryCost: () => c,
            hasRetryTokens: h,
            getRetryTokenCount: e => {
              const t = e.errorType;
              if (!h(t)) throw new Error("No retry token available");
              const n = p(t),
                r = "THROTTLING" === t ? 500 : 100;
              a.setDelayBase(r);
              const s = a.computeNextBackoffDelay(u);
              if (e.retryAfterHint) {
                const t = e.retryAfterHint.getTime() - (0, _now.default)();
                d = Math.max(t || 0, s);
              } else d = s;
              return u++, c = n, l -= n, n;
            },
            releaseRetryTokens: e => {
              l += e !== null && e !== void 0 ? e : 1, l = Math.min(l, s);
            }
          };
        })(500, 100), this.maxAttemptsProvider = e;
      }
      async acquireInitialRetryToken(e) {
        return this.retryToken;
      }
      async refreshRetryTokenForRetry(e, t) {
        const n = await this.getMaxAttempts();
        if (this.shouldRetry(e, t, n)) return e.getRetryTokenCount(t), e;
        throw new Error("No retry token available");
      }
      recordSuccess(e) {
        this.retryToken.releaseRetryTokens(e.getLastRetryCost());
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (e) {
          return console.warn("Max attempts provider could not resolve. Using default of 3"), 3;
        }
      }
      shouldRetry(e, t, n) {
        return e.getRetryCount() < n && e.hasRetryTokens(t.errorType) && this.isRetryableError(t.errorType);
      }
      isRetryableError(e) {
        return "THROTTLING" === e || "TRANSIENT" === e;
      }
    }
    class Q {
      constructor(e, t) {
        this.maxAttemptsProvider = e, this.mode = z.ADAPTIVE;
        const {
          rateLimiter: n
        } = t !== null && t !== void 0 ? t : {};
        this.rateLimiter = n !== null && n !== void 0 ? n : new Z(), this.standardRetryStrategy = new Y(e);
      }
      async acquireInitialRetryToken(e) {
        return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e);
      }
      async refreshRetryTokenForRetry(e, t) {
        return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
      }
      recordSuccess(e) {
        this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e);
      }
    }
    const ee = "AWS_MAX_ATTEMPTS",
      te = "max_attempts",
      ne = {
        environmentVariableSelector: e => {
          const t = e[ee];
          if (!t) return;
          const n = (0, _parseInt3.default)(t);
          if ((0, _isNan.default)(n)) throw new Error(`Environment variable ${ee} mast be a number, got "${t}"`);
          return n;
        },
        configFileSelector: e => {
          const t = e[te];
          if (!t) return;
          const n = (0, _parseInt3.default)(t);
          if ((0, _isNan.default)(n)) throw new Error(`Shared config file entry ${te} mast be a number, got "${t}"`);
          return n;
        },
        default: 3
      },
      re = e => {
        var _e$maxAttempts;
        const {
            retryStrategy: t
          } = e,
          n = O((_e$maxAttempts = e.maxAttempts) !== null && _e$maxAttempts !== void 0 ? _e$maxAttempts : 3);
        return _objectSpread(_objectSpread({}, e), {}, {
          maxAttempts: n,
          retryStrategy: async () => t || ((await O(e.retryMode)()) === z.ADAPTIVE ? new Q(n) : new Y(n))
        });
      },
      se = {
        environmentVariableSelector: e => e.AWS_RETRY_MODE,
        configFileSelector: e => e.retry_mode,
        default: B
      },
      oe = require("crypto");
    var ie = n.n(oe);
    const ae = new Uint8Array(256);
    let ce = ae.length;
    function le() {
      return ce > ae.length - 16 && (ie().randomFillSync(ae), ce = 0), (0, _slice.default)(ae).call(ae, ce, ce += 16);
    }
    const de = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
      ue = [];
    for (let e = 0; e < 256; ++e) ue.push((e + 256).toString(16).substr(1));
    const pe = function (e, t = 0) {
        const n = (ue[e[t + 0]] + ue[e[t + 1]] + ue[e[t + 2]] + ue[e[t + 3]] + "-" + ue[e[t + 4]] + ue[e[t + 5]] + "-" + ue[e[t + 6]] + ue[e[t + 7]] + "-" + ue[e[t + 8]] + ue[e[t + 9]] + "-" + ue[e[t + 10]] + ue[e[t + 11]] + ue[e[t + 12]] + ue[e[t + 13]] + ue[e[t + 14]] + ue[e[t + 15]]).toLowerCase();
        if (!function (e) {
          return "string" == typeof e && de.test(e);
        }(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      },
      he = function (e, t, n) {
        const r = (e = e || {}).random || (e.rng || le)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return pe(r);
      },
      fe = e => {
        const t = {
            errorType: ge(e)
          },
          n = we(e.$response);
        return n && (t.retryAfterHint = n), t;
      },
      ge = e => J(e) ? "THROTTLING" : X(e) ? "TRANSIENT" : (e => {
        var _e$$metadata3;
        if (void 0 !== ((_e$$metadata3 = e.$metadata) === null || _e$$metadata3 === void 0 ? void 0 : _e$$metadata3.httpStatusCode)) {
          const t = e.$metadata.httpStatusCode;
          return 500 <= t && t <= 599 && !X(e);
        }
        return !1;
      })(e) ? "SERVER_ERROR" : "CLIENT_ERROR",
      me = {
        name: "retryMiddleware",
        tags: ["RETRY"],
        step: "finalizeRequest",
        priority: "high",
        override: !0
      },
      ye = e => ({
        applyToStack: t => {
          t.add((e => (t, n) => async r => {
            let s = await e.retryStrategy();
            const o = await e.maxAttempts();
            if (!(e => void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess)(s)) return s !== null && s !== void 0 && s.mode && (n.userAgent = [...(n.userAgent || []), ["cfg/retry-mode", s.mode]]), s.retry(t, r);
            {
              let e = await s.acquireInitialRetryToken(n.partition_id),
                a = new Error(),
                c = 0,
                l = 0;
              const {
                request: d
              } = r;
              for (g.isInstance(d) && (d.headers["amz-sdk-invocation-id"] = he());;) try {
                g.isInstance(d) && (d.headers["amz-sdk-request"] = `attempt=${c + 1}; max=${o}`);
                const {
                  response: n,
                  output: i
                } = await t(r);
                return s.recordSuccess(e), i.$metadata.attempts = c + 1, i.$metadata.totalRetryDelay = l, {
                  response: n,
                  output: i
                };
              } catch (t) {
                const n = fe(t);
                a = (i = t) instanceof Error ? i : i instanceof Object ? (0, _assign.default)(new Error(), i) : "string" == typeof i ? new Error(i) : new Error(`AWS SDK error wrapper for ${i}`);
                try {
                  e = await s.refreshRetryTokenForRetry(e, n);
                } catch (e) {
                  throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = c + 1, a.$metadata.totalRetryDelay = l, a;
                }
                c = e.getRetryCount();
                const r = e.getRetryDelay();
                l += r, await new _promise.default(e => (0, _setTimeout2.default)(e, r));
              }
            }
            var i;
          })(e), me);
        }
      }),
      we = e => {
        var _context35;
        if (!m.isInstance(e)) return;
        const t = (0, _find.default)(_context35 = (0, _keys.default)(e.headers)).call(_context35, e => "retry-after" === e.toLowerCase());
        if (!t) return;
        const n = e.headers[t],
          r = Number(n);
        return (0, _isNan.default)(r) ? new Date(n) : new Date(1e3 * r);
      };
    class be extends Error {
      constructor(e, t = !0) {
        super(e), this.tryNextLink = t, this.name = "ProviderError", (0, _setPrototypeOf.default)(this, be.prototype);
      }
      static from(e, t = !0) {
        return (0, _assign.default)(new this(e.message, t), e);
      }
    }
    class Ee extends be {
      constructor(e, t = !0) {
        super(e, t), this.tryNextLink = t, this.name = "CredentialsProviderError", (0, _setPrototypeOf.default)(this, Ee.prototype);
      }
    }
    class Se extends be {
      constructor(e, t = !0) {
        super(e, t), this.tryNextLink = t, this.name = "TokenProviderError", (0, _setPrototypeOf.default)(this, Se.prototype);
      }
    }
    function xe(...e) {
      return () => {
        let t = _promise.default.reject(new be("No providers in chain"));
        for (const n of e) t = t.catch(e => {
          if (e !== null && e !== void 0 && e.tryNextLink) return n();
          throw e;
        });
        return t;
      };
    }
    const ve = (e, t, n) => {
        let r,
          s,
          o,
          i = !1;
        const a = async () => {
          s || (s = e());
          try {
            r = await s, o = !0, i = !1;
          } finally {
            s = void 0;
          }
          return r;
        };
        return void 0 === t ? async e => (o && !(e !== null && e !== void 0 && e.forceRefresh) || (r = await a()), r) : async e => (o && !(e !== null && e !== void 0 && e.forceRefresh) || (r = await a()), i ? r : n && !n(r) ? (i = !0, r) : t(r) ? (await a(), r) : r);
      },
      Te = {},
      Ae = {};
    for (let e = 0; e < 256; e++) {
      let t = e.toString(16).toLowerCase();
      1 === t.length && (t = `0${t}`), Te[e] = t, Ae[t] = e;
    }
    function Pe(e) {
      let t = "";
      for (let n = 0; n < e.byteLength; n++) t += Te[e[n]];
      return t;
    }
    const Ie = e => "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e),
      ke = require("buffer"),
      Re = (e, t = 0, n = e.byteLength - t) => {
        if (!Ie(e)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
        return ke.Buffer.from(e, t, n);
      },
      Ne = (e, t) => {
        if ("string" != typeof e) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
        return t ? ke.Buffer.from(e, t) : ke.Buffer.from(e);
      },
      Ce = e => {
        const t = Ne(e, "utf8");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      },
      Oe = e => "string" == typeof e ? Ce(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
      $e = e => Re(e.buffer, e.byteOffset, e.byteLength).toString("utf8"),
      _e = "X-Amz-Date",
      De = "X-Amz-Signature",
      Fe = "X-Amz-Security-Token",
      je = "authorization",
      Me = _e.toLowerCase(),
      Le = [je, Me, "date"],
      Ue = De.toLowerCase(),
      qe = "x-amz-content-sha256",
      ze = Fe.toLowerCase(),
      We = {
        authorization: !0,
        "cache-control": !0,
        connection: !0,
        expect: !0,
        from: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        pragma: !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        "user-agent": !0,
        "x-amzn-trace-id": !0
      },
      Be = /^proxy-/,
      Ve = /^sec-/,
      Ke = "AWS4-HMAC-SHA256",
      He = "AWS4-HMAC-SHA256-PAYLOAD",
      Ge = "aws4_request",
      Je = {},
      Xe = [],
      Ze = (e, t, n) => `${e}/${t}/${n}/${Ge}`,
      Ye = (e, t, n) => {
        const r = new e(t);
        return r.update(Oe(n)), r.digest();
      },
      Qe = ({
        headers: e
      }, t, n) => {
        const r = {};
        for (const s of (0, _sort.default)(_context36 = (0, _keys.default)(e)).call(_context36)) {
          var _context36, _context37;
          if (null == e[s]) continue;
          const o = s.toLowerCase();
          (o in We || (t === null || t === void 0 ? void 0 : t.has(o)) || Be.test(o) || Ve.test(o)) && (!n || n && !n.has(o)) || (r[o] = (0, _trim.default)(_context37 = e[s]).call(_context37).replace(/\s+/g, " "));
        }
        return r;
      },
      et = e => encodeURIComponent(e).replace(/[!'()*]/g, tt),
      tt = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      nt = async ({
        headers: e,
        body: t
      }, n) => {
        for (const t of (0, _keys.default)(e)) if (t.toLowerCase() === qe) return e[t];
        if (null == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        if ("string" == typeof t || ArrayBuffer.isView(t) || Ie(t)) {
          const e = new n();
          return e.update(Oe(t)), Pe(await e.digest());
        }
        return "UNSIGNED-PAYLOAD";
      },
      rt = _ref => {
        let {
            headers: e,
            query: t
          } = _ref,
          n = (0, _objectWithoutProperties2.default)(_ref, _excluded2);
        return _objectSpread(_objectSpread({}, n), {}, {
          headers: _objectSpread({}, e),
          query: t ? st(t) : void 0
        });
      },
      st = e => {
        var _context38;
        return (0, _reduce.default)(_context38 = (0, _keys.default)(e)).call(_context38, (t, n) => {
          const r = e[n];
          return _objectSpread(_objectSpread({}, t), {}, {
            [n]: (0, _isArray.default)(r) ? [...r] : r
          });
        }, {});
      },
      ot = e => {
        e = "function" == typeof e.clone ? e.clone() : rt(e);
        for (const t of (0, _keys.default)(e.headers)) (0, _indexOf.default)(Le).call(Le, t.toLowerCase()) > -1 && delete e.headers[t];
        return e;
      };
    class it {
      constructor({
        applyChecksum: e,
        credentials: t,
        region: n,
        service: r,
        sha256: s,
        uriEscapePath: o = !0
      }) {
        this.service = r, this.sha256 = s, this.uriEscapePath = o, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = O(n), this.credentialProvider = O(t);
      }
      async presign(e, t = {}) {
        const {
            signingDate: n = new Date(),
            expiresIn: r = 3600,
            unsignableHeaders: s,
            unhoistableHeaders: o,
            signableHeaders: i,
            signingRegion: a,
            signingService: c
          } = t,
          l = await this.credentialProvider();
        this.validateResolvedCredentials(l);
        const d = a !== null && a !== void 0 ? a : await this.regionProvider(),
          {
            longDate: u,
            shortDate: p
          } = at(n);
        if (r > 604800) return _promise.default.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        const h = Ze(p, d, c !== null && c !== void 0 ? c : this.service),
          f = ((e, t = {}) => {
            const {
              headers: n,
              query: r = {}
            } = "function" == typeof e.clone ? e.clone() : rt(e);
            for (const e of (0, _keys.default)(n)) {
              var _t$unhoistableHeaders;
              const s = e.toLowerCase();
              "x-amz-" !== (0, _slice.default)(s).call(s, 0, 6) || ((_t$unhoistableHeaders = t.unhoistableHeaders) === null || _t$unhoistableHeaders === void 0 ? void 0 : _t$unhoistableHeaders.has(s)) || (r[e] = n[e], delete n[e]);
            }
            return _objectSpread(_objectSpread({}, e), {}, {
              headers: n,
              query: r
            });
          })(ot(e), {
            unhoistableHeaders: o
          });
        l.sessionToken && (f.query[Fe] = l.sessionToken), f.query["X-Amz-Algorithm"] = Ke, f.query["X-Amz-Credential"] = `${l.accessKeyId}/${h}`, f.query[_e] = u, f.query["X-Amz-Expires"] = r.toString(10);
        const g = Qe(f, s, i);
        return f.query["X-Amz-SignedHeaders"] = ct(g), f.query[De] = await this.getSignature(u, h, this.getSigningKey(l, d, p, c), this.createCanonicalRequest(f, g, await nt(e, this.sha256))), f;
      }
      async sign(e, t) {
        return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : this.signRequest(e, t);
      }
      async signEvent({
        headers: e,
        payload: t
      }, {
        signingDate: n = new Date(),
        priorSignature: r,
        signingRegion: s,
        signingService: o
      }) {
        const i = s !== null && s !== void 0 ? s : await this.regionProvider(),
          {
            shortDate: a,
            longDate: c
          } = at(n),
          l = Ze(a, i, o !== null && o !== void 0 ? o : this.service),
          d = await nt({
            headers: {},
            body: t
          }, this.sha256),
          u = new this.sha256();
        u.update(e);
        const p = Pe(await u.digest()),
          h = [He, c, l, r, p, d].join("\n");
        return this.signString(h, {
          signingDate: n,
          signingRegion: i,
          signingService: o
        });
      }
      async signString(e, {
        signingDate: t = new Date(),
        signingRegion: n,
        signingService: r
      } = {}) {
        const s = await this.credentialProvider();
        this.validateResolvedCredentials(s);
        const o = n !== null && n !== void 0 ? n : await this.regionProvider(),
          {
            shortDate: i
          } = at(t),
          a = new this.sha256(await this.getSigningKey(s, o, i, r));
        return a.update(Oe(e)), Pe(await a.digest());
      }
      async signRequest(e, {
        signingDate: t = new Date(),
        signableHeaders: n,
        unsignableHeaders: r,
        signingRegion: s,
        signingService: o
      } = {}) {
        const i = await this.credentialProvider();
        this.validateResolvedCredentials(i);
        const a = s !== null && s !== void 0 ? s : await this.regionProvider(),
          c = ot(e),
          {
            longDate: l,
            shortDate: d
          } = at(t),
          u = Ze(d, a, o !== null && o !== void 0 ? o : this.service);
        c.headers[Me] = l, i.sessionToken && (c.headers[ze] = i.sessionToken);
        const p = await nt(c, this.sha256);
        !((e, t) => {
          e = e.toLowerCase();
          for (const n of (0, _keys.default)(t)) if (e === n.toLowerCase()) return !0;
          return !1;
        })(qe, c.headers) && this.applyChecksum && (c.headers[qe] = p);
        const h = Qe(c, r, n),
          f = await this.getSignature(l, u, this.getSigningKey(i, a, d, o), this.createCanonicalRequest(c, h, p));
        return c.headers[je] = `${Ke} Credential=${i.accessKeyId}/${u}, SignedHeaders=${ct(h)}, Signature=${f}`, c;
      }
      createCanonicalRequest(e, t, n) {
        var _context39;
        const r = (0, _sort.default)(_context39 = (0, _keys.default)(t)).call(_context39);
        return `${e.method}\n${this.getCanonicalPath(e)}\n${(({
          query: e = {}
        }) => {
          var _context43;
          const t = [],
            n = {};
          for (const r of (0, _sort.default)(_context40 = (0, _keys.default)(e)).call(_context40)) {
            var _context40, _context41, _context42;
            if (r.toLowerCase() === Ue) continue;
            t.push(r);
            const s = e[r];
            "string" == typeof s ? n[r] = `${et(r)}=${et(s)}` : (0, _isArray.default)(s) && (n[r] = (0, _reduce.default)(_context41 = (0, _sort.default)(_context42 = (0, _slice.default)(s).call(s, 0)).call(_context42)).call(_context41, (e, t) => (0, _concat.default)(e).call(e, [`${et(r)}=${et(t)}`]), []).join("&"));
          }
          return (0, _filter.default)(_context43 = (0, _map.default)(t).call(t, e => n[e])).call(_context43, e => e).join("&");
        })(e)}\n${(0, _map.default)(r).call(r, e => `${e}:${t[e]}`).join("\n")}\n\n${r.join(";")}\n${n}`;
      }
      async createStringToSign(e, t, n) {
        const r = new this.sha256();
        r.update(Oe(n));
        const s = await r.digest();
        return `${Ke}\n${e}\n${t}\n${Pe(s)}`;
      }
      getCanonicalPath({
        path: e
      }) {
        if (this.uriEscapePath) {
          const t = [];
          for (const n of e.split("/")) 0 !== (n === null || n === void 0 ? void 0 : n.length) && "." !== n && (".." === n ? t.pop() : t.push(n));
          const n = `${e !== null && e !== void 0 && (0, _startsWith.default)(e).call(e, "/") ? "/" : ""}${t.join("/")}${t.length > 0 && e !== null && e !== void 0 && (0, _endsWith.default)(e).call(e, "/") ? "/" : ""}`;
          return encodeURIComponent(n).replace(/%2F/g, "/");
        }
        return e;
      }
      async getSignature(e, t, n, r) {
        const s = await this.createStringToSign(e, t, r),
          o = new this.sha256(await n);
        return o.update(Oe(s)), Pe(await o.digest());
      }
      getSigningKey(e, t, n, r) {
        return (async (e, t, n, r, s) => {
          const o = `${n}:${r}:${s}:${Pe(await Ye(e, t.secretAccessKey, t.accessKeyId))}:${t.sessionToken}`;
          if (o in Je) return Je[o];
          for (Xe.push(o); Xe.length > 50;) delete Je[Xe.shift()];
          let i = `AWS4${t.secretAccessKey}`;
          for (const t of [n, r, s, Ge]) i = await Ye(e, i, t);
          return Je[o] = i;
        })(this.sha256, e, n, t, r || this.service);
      }
      validateResolvedCredentials(e) {
        if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw new Error("Resolved credential object is not valid");
      }
    }
    const at = e => {
        const t = (n = e, (e => "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? Number(e) ? new Date(1e3 * Number(e)) : new Date(e) : e)(n).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
        var n;
        return {
          longDate: t,
          shortDate: (0, _slice.default)(t).call(t, 0, 8)
        };
      },
      ct = e => {
        var _context44;
        return (0, _sort.default)(_context44 = (0, _keys.default)(e)).call(_context44).join(";");
      },
      lt = e => {
        const t = e.credentials ? dt(e.credentials) : e.credentialDefaultProvider(e),
          {
            signingEscapePath: n = !0,
            systemClockOffset: r = e.systemClockOffset || 0,
            sha256: s
          } = e;
        let o;
        return o = e.signer ? O(e.signer) : e.regionInfoProvider ? () => O(e.region)().then(async t => [(await e.regionInfoProvider(t, {
          useFipsEndpoint: await e.useFipsEndpoint(),
          useDualstackEndpoint: await e.useDualstackEndpoint()
        })) || {}, t]).then(([r, o]) => {
          const {
            signingRegion: i,
            signingService: a
          } = r;
          e.signingRegion = e.signingRegion || i || o, e.signingName = e.signingName || a || e.serviceId;
          const c = _objectSpread(_objectSpread({}, e), {}, {
            credentials: t,
            region: e.signingRegion,
            service: e.signingName,
            sha256: s,
            uriEscapePath: n
          });
          return new (e.signerConstructor || it)(c);
        }) : async r => {
          const o = (r = (0, _assign.default)({}, {
              name: "sigv4",
              signingName: e.signingName || e.defaultSigningName,
              signingRegion: await O(e.region)(),
              properties: {}
            }, r)).signingRegion,
            i = r.signingName;
          e.signingRegion = e.signingRegion || o, e.signingName = e.signingName || i || e.serviceId;
          const a = _objectSpread(_objectSpread({}, e), {}, {
            credentials: t,
            region: e.signingRegion,
            service: e.signingName,
            sha256: s,
            uriEscapePath: n
          });
          return new (e.signerConstructor || it)(a);
        }, _objectSpread(_objectSpread({}, e), {}, {
          systemClockOffset: r,
          signingEscapePath: n,
          credentials: t,
          signer: o
        });
      },
      dt = e => "function" == typeof e ? ve(e, e => void 0 !== e.expiration && e.expiration.getTime() - (0, _now.default)() < 3e5, e => void 0 !== e.expiration) : O(e),
      ut = e => new Date((0, _now.default)() + e),
      pt = (e, t) => {
        const n = Date.parse(e);
        return ((e, t) => Math.abs(ut(t).getTime() - e) >= 3e5)(n, t) ? n - (0, _now.default)() : t;
      },
      ht = e => {
        var _e$headers$date, _e$headers, _e$headers2;
        return m.isInstance(e) ? (_e$headers$date = (_e$headers = e.headers) === null || _e$headers === void 0 ? void 0 : _e$headers.date) !== null && _e$headers$date !== void 0 ? _e$headers$date : (_e$headers2 = e.headers) === null || _e$headers2 === void 0 ? void 0 : _e$headers2.Date : void 0;
      },
      ft = {
        name: "awsAuthMiddleware",
        tags: ["SIGNATURE", "AWSAUTH"],
        relation: "after",
        toMiddleware: "retryMiddleware",
        override: !0
      },
      gt = e => ({
        applyToStack: t => {
          t.addRelativeTo((e => (t, n) => async function (r) {
            var _n$endpointV, _n$endpointV$properti, _n$endpointV$properti2, _s$signingRegionSet;
            if (!g.isInstance(r.request)) return t(r);
            const s = (_n$endpointV = n.endpointV2) === null || _n$endpointV === void 0 ? void 0 : (_n$endpointV$properti = _n$endpointV.properties) === null || _n$endpointV$properti === void 0 ? void 0 : (_n$endpointV$properti2 = _n$endpointV$properti.authSchemes) === null || _n$endpointV$properti2 === void 0 ? void 0 : _n$endpointV$properti2[0],
              o = "sigv4a" === (s === null || s === void 0 ? void 0 : s.name) ? s === null || s === void 0 ? void 0 : (_s$signingRegionSet = s.signingRegionSet) === null || _s$signingRegionSet === void 0 ? void 0 : _s$signingRegionSet.join(",") : void 0,
              i = await e.signer(s),
              a = await t(_objectSpread(_objectSpread({}, r), {}, {
                request: await i.sign(r.request, {
                  signingDate: ut(e.systemClockOffset),
                  signingRegion: o || n.signing_region,
                  signingService: n.signing_service
                })
              })).catch(t => {
                var _t$ServerTime;
                const n = (_t$ServerTime = t.ServerTime) !== null && _t$ServerTime !== void 0 ? _t$ServerTime : ht(t.$response);
                throw n && (e.systemClockOffset = pt(n, e.systemClockOffset)), t;
              }),
              c = ht(a.response);
            return c && (e.systemClockOffset = pt(c, e.systemClockOffset)), a;
          })(e), ft);
        }
      });
    function mt(e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        customUserAgent: "string" == typeof e.customUserAgent ? [[e.customUserAgent]] : e.customUserAgent
      });
    }
    const yt = "user-agent",
      wt = "x-amz-user-agent",
      bt = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
      Et = ([e, t]) => {
        var _context45, _context46;
        const n = (0, _indexOf.default)(e).call(e, "/"),
          r = e.substring(0, n);
        let s = e.substring(n + 1);
        return "api" === r && (s = s.toLowerCase()), (0, _map.default)(_context45 = (0, _filter.default)(_context46 = [r, s, t]).call(_context46, e => e && e.length > 0)).call(_context45, e => e === null || e === void 0 ? void 0 : e.replace(bt, "_")).join("/");
      },
      St = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: ["SET_USER_AGENT", "USER_AGENT"],
        override: !0
      },
      xt = e => ({
        applyToStack: t => {
          var n;
          t.add((n = e, (e, t) => async r => {
            var _t$userAgent, _context47, _n2, _n2$customUserAgent;
            const {
              request: s
            } = r;
            if (!g.isInstance(s)) return e(r);
            const {
                headers: o
              } = s,
              i = (t === null || t === void 0 ? void 0 : (_t$userAgent = t.userAgent) === null || _t$userAgent === void 0 ? void 0 : (0, _map.default)(_t$userAgent).call(_t$userAgent, Et)) || [],
              a = (0, _map.default)(_context47 = await n.defaultUserAgentProvider()).call(_context47, Et),
              c = ((_n2 = n) === null || _n2 === void 0 ? void 0 : (_n2$customUserAgent = _n2.customUserAgent) === null || _n2$customUserAgent === void 0 ? void 0 : (0, _map.default)(_n2$customUserAgent).call(_n2$customUserAgent, Et)) || [],
              l = [...a, ...i, ...c].join(" "),
              d = [...(0, _filter.default)(a).call(a, e => (0, _startsWith.default)(e).call(e, "aws-sdk-")), ...c].join(" ");
            return "browser" !== n.runtime ? (d && (o[wt] = o[wt] ? `${o[yt]} ${d}` : d), o[yt] = l) : o[wt] = l, e(_objectSpread(_objectSpread({}, r), {}, {
              request: s
            }));
          }), St);
        }
      });
    class vt {
      trace() {}
      debug() {}
      info() {}
      warn() {}
      error() {}
    }
    const Tt = () => {
        let e = [],
          t = [];
        const n = new _set.default(),
          r = n => ((0, _forEach.default)(e).call(e, e => {
            n.add(e.middleware, _objectSpread({}, e));
          }), (0, _forEach.default)(t).call(t, e => {
            n.addRelativeTo(e.middleware, _objectSpread({}, e));
          }), n),
          s = e => {
            var _context48, _context49, _context50;
            const t = [];
            return (0, _forEach.default)(_context48 = e.before).call(_context48, e => {
              0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...s(e));
            }), t.push(e), (0, _forEach.default)(_context49 = (0, _reverse.default)(_context50 = e.after).call(_context50)).call(_context49, e => {
              0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...s(e));
            }), t;
          },
          o = (n = !1) => {
            var _context51, _context52;
            const r = [],
              o = [],
              i = {};
            (0, _forEach.default)(e).call(e, e => {
              const t = _objectSpread(_objectSpread({}, e), {}, {
                before: [],
                after: []
              });
              t.name && (i[t.name] = t), r.push(t);
            }), (0, _forEach.default)(t).call(t, e => {
              const t = _objectSpread(_objectSpread({}, e), {}, {
                before: [],
                after: []
              });
              t.name && (i[t.name] = t), o.push(t);
            }), (0, _forEach.default)(o).call(o, e => {
              if (e.toMiddleware) {
                const t = i[e.toMiddleware];
                if (void 0 === t) {
                  if (n) return;
                  throw new Error(`${e.toMiddleware} is not found when adding ${e.name || "anonymous"} middleware ${e.relation} ${e.toMiddleware}`);
                }
                "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e);
              }
            });
            const a = (0, _reduce.default)(_context51 = (0, _map.default)(_context52 = (c = r, (0, _sort.default)(c).call(c, (e, t) => At[t.step] - At[e.step] || Pt[t.priority || "normal"] - Pt[e.priority || "normal"]))).call(_context52, s)).call(_context51, (e, t) => (e.push(...t), e), []);
            var c;
            return a;
          },
          i = {
            add: (t, r = {}) => {
              const {
                  name: s,
                  override: o
                } = r,
                i = _objectSpread({
                  step: "initialize",
                  priority: "normal",
                  middleware: t
                }, r);
              if (s) {
                if (n.has(s)) {
                  if (!o) throw new Error(`Duplicate middleware name '${s}'`);
                  const t = (0, _findIndex.default)(e).call(e, e => e.name === s),
                    n = e[t];
                  if (n.step !== i.step || n.priority !== i.priority) throw new Error(`"${s}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by same-name middleware with ${i.priority} priority in ${i.step} step.`);
                  (0, _splice.default)(e).call(e, t, 1);
                }
                n.add(s);
              }
              e.push(i);
            },
            addRelativeTo: (e, r) => {
              const {
                  name: s,
                  override: o
                } = r,
                i = _objectSpread({
                  middleware: e
                }, r);
              if (s) {
                if (n.has(s)) {
                  if (!o) throw new Error(`Duplicate middleware name '${s}'`);
                  const e = (0, _findIndex.default)(t).call(t, e => e.name === s),
                    n = t[e];
                  if (n.toMiddleware !== i.toMiddleware || n.relation !== i.relation) throw new Error(`"${s}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by same-name middleware ${i.relation} "${i.toMiddleware}" middleware.`);
                  (0, _splice.default)(t).call(t, e, 1);
                }
                n.add(s);
              }
              t.push(i);
            },
            clone: () => r(Tt()),
            use: e => {
              e.applyToStack(i);
            },
            remove: r => "string" == typeof r ? (r => {
              let s = !1;
              const o = e => !e.name || e.name !== r || (s = !0, n.delete(r), !1);
              return e = (0, _filter.default)(e).call(e, o), t = (0, _filter.default)(t).call(t, o), s;
            })(r) : (r => {
              let s = !1;
              const o = e => e.middleware !== r || (s = !0, e.name && n.delete(e.name), !1);
              return e = (0, _filter.default)(e).call(e, o), t = (0, _filter.default)(t).call(t, o), s;
            })(r),
            removeByTag: r => {
              let s = !1;
              const o = e => {
                const {
                  tags: t,
                  name: o
                } = e;
                return !t || !(0, _includes.default)(t).call(t, r) || (o && n.delete(o), s = !0, !1);
              };
              return e = (0, _filter.default)(e).call(e, o), t = (0, _filter.default)(t).call(t, o), s;
            },
            concat: e => {
              const t = r(Tt());
              return t.use(e), t;
            },
            applyToStack: r,
            identify: () => {
              var _context53;
              return (0, _map.default)(_context53 = o(!0)).call(_context53, e => e.name + ": " + (e.tags || []).join(","));
            },
            resolve: (e, t) => {
              for (const n of (0, _reverse.default)(_context54 = (0, _map.default)(_context55 = o()).call(_context55, e => e.middleware)).call(_context54)) {
                var _context54, _context55;
                e = n(e, t);
              }
              return e;
            }
          };
        return i;
      },
      At = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1
      },
      Pt = {
        high: 3,
        normal: 2,
        low: 1
      };
    class It {
      constructor(e) {
        this.middlewareStack = Tt(), this.config = e;
      }
      send(e, t, n) {
        const r = "function" != typeof t ? t : void 0,
          s = "function" == typeof t ? t : n,
          o = e.resolveMiddleware(this.middlewareStack, this.config, r);
        if (!s) return o(e).then(e => e.output);
        o(e).then(e => s(null, e.output), e => s(e)).catch(() => {});
      }
      destroy() {
        this.config.requestHandler.destroy && this.config.requestHandler.destroy();
      }
    }
    class kt {
      constructor() {
        this.middlewareStack = Tt();
      }
    }
    const Rt = "***SensitiveInformation***",
      Nt = Math.ceil(2 ** 127 * (2 - 2 ** -23)),
      Ct = e => {
        const t = (e => {
          if (null != e) {
            if ("string" == typeof e) {
              const t = (0, _parseFloat3.default)(e);
              if (!(0, _isNan.default)(t)) return String(t) !== String(e) && Wt.warn(zt(`Expected number but observed string: ${e}`)), t;
            }
            if ("number" == typeof e) return e;
            throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
          }
        })(e);
        if (void 0 !== t && !(0, _isNan.default)(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > Nt) throw new TypeError(`Expected 32-bit float, got ${e}`);
        return t;
      },
      Ot = e => {
        if (null != e) {
          if ((0, _isInteger.default)(e) && !(0, _isNan.default)(e)) return e;
          throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
        }
      },
      $t = e => _t(e, 32),
      _t = (e, t) => {
        const n = Ot(e);
        if (void 0 !== n && Dt(n, t) !== n) throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
        return n;
      },
      Dt = (e, t) => {
        switch (t) {
          case 32:
            return Int32Array.of(e)[0];
          case 16:
            return Int16Array.of(e)[0];
          case 8:
            return Int8Array.of(e)[0];
        }
      },
      Ft = (e, t) => {
        if (null == e) {
          if (t) throw new TypeError(`Expected a non-null value for ${t}`);
          throw new TypeError("Expected a non-null value");
        }
        return e;
      },
      jt = e => {
        if (null == e) return;
        if ("object" == typeof e && !(0, _isArray.default)(e)) return e;
        const t = (0, _isArray.default)(e) ? "array" : typeof e;
        throw new TypeError(`Expected object, got ${t}: ${e}`);
      },
      Mt = e => {
        if (null != e) {
          var _context56;
          if ("string" == typeof e) return e;
          if ((0, _includes.default)(_context56 = ["boolean", "number", "bigint"]).call(_context56, typeof e)) return Wt.warn(zt(`Expected string, got ${typeof e}: ${e}`)), String(e);
          throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
        }
      },
      Lt = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
      Ut = e => {
        const t = e.match(Lt);
        if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
        return (0, _parseFloat3.default)(e);
      },
      qt = e => $t("string" == typeof e ? Ut(e) : e),
      zt = e => {
        var _context57, _context58;
        return (0, _filter.default)(_context57 = (0, _slice.default)(_context58 = String(new TypeError(e).stack || e).split("\n")).call(_context58, 0, 5)).call(_context57, e => !(0, _includes.default)(e).call(e, "stackTraceWarning")).join("\n");
      },
      Wt = {
        warn: console.warn
      },
      Bt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      Vt = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
      Kt = e => {
        if (null == e) return;
        if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
        const t = Vt.exec(e);
        if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
        const [n, r, s, o, i, a, c, l, d] = t,
          u = (e => (e => _t(e, 16))("string" == typeof e ? Ut(e) : e))(en(r)),
          p = Zt(s, "month", 1, 12),
          h = Zt(o, "day", 1, 31),
          f = Ht(u, p, h, {
            hours: i,
            minutes: a,
            seconds: c,
            fractionalMilliseconds: l
          });
        return "Z" != d.toUpperCase() && f.setTime(f.getTime() - Qt(d)), f;
      },
      Ht = (e, t, n, r) => {
        const s = t - 1;
        return Jt(e, s, n), new Date(Date.UTC(e, s, n, Zt(r.hours, "hour", 0, 23), Zt(r.minutes, "minute", 0, 59), Zt(r.seconds, "seconds", 0, 60), Yt(r.fractionalMilliseconds)));
      },
      Gt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Jt = (e, t, n) => {
        let r = Gt[t];
        if (1 === t && Xt(e) && (r = 29), n > r) throw new TypeError(`Invalid day for ${Bt[t]} in ${e}: ${n}`);
      },
      Xt = e => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0),
      Zt = (e, t, n, r) => {
        const s = (e => (e => _t(e, 8))("string" == typeof e ? Ut(e) : e))(en(e));
        if (s < n || s > r) throw new TypeError(`${t} must be between ${n} and ${r}, inclusive`);
        return s;
      },
      Yt = e => null == e ? 0 : 1e3 * (e => Ct("string" == typeof e ? Ut(e) : e))("0." + e),
      Qt = e => {
        const t = e[0];
        let n = 1;
        if ("+" == t) n = 1;else {
          if ("-" != t) throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
          n = -1;
        }
        return n * (60 * Number(e.substring(1, 3)) + Number(e.substring(4, 6))) * 60 * 1e3;
      },
      en = e => {
        let t = 0;
        for (; t < e.length - 1 && "0" === e.charAt(t);) t++;
        return 0 === t ? e : (0, _slice.default)(e).call(e, t);
      };
    class tn extends Error {
      constructor(e) {
        super(e.message), (0, _setPrototypeOf.default)(this, tn.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
      }
    }
    const nn = (e, t = {}) => {
        var _context59, _context60;
        (0, _forEach.default)(_context59 = (0, _filter.default)(_context60 = (0, _entries.default)(t)).call(_context60, ([, e]) => void 0 !== e)).call(_context59, ([t, n]) => {
          null != e[t] && "" !== e[t] || (e[t] = n);
        });
        const n = e.message || e.Message || "UnknownError";
        return e.message = n, delete e.Message, e;
      },
      rn = ({
        output: e,
        parsedBody: t,
        exceptionCtor: n,
        errorCode: r
      }) => {
        const s = sn(e),
          o = s.httpStatusCode ? s.httpStatusCode + "" : void 0,
          i = new n({
            name: (t === null || t === void 0 ? void 0 : t.code) || (t === null || t === void 0 ? void 0 : t.Code) || r || o || "UnknownError",
            $fault: "client",
            $metadata: s
          });
        throw nn(i, t);
      },
      sn = e => {
        var _ref2, _e$headers$xAmznReq;
        return {
          httpStatusCode: e.statusCode,
          requestId: (_ref2 = (_e$headers$xAmznReq = e.headers["x-amzn-requestid"]) !== null && _e$headers$xAmznReq !== void 0 ? _e$headers$xAmznReq : e.headers["x-amzn-request-id"]) !== null && _ref2 !== void 0 ? _ref2 : e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"]
        };
      },
      on = e => {
        switch (e) {
          case "standard":
          case "cross-region":
            return {
              retryMode: "standard",
              connectionTimeout: 3100
            };
          case "in-region":
            return {
              retryMode: "standard",
              connectionTimeout: 1100
            };
          case "mobile":
            return {
              retryMode: "standard",
              connectionTimeout: 3e4
            };
          default:
            return {};
        }
      };
    let an = !1;
    const cn = e => {
      e && !an && (0, _parseInt3.default)(e.substring(1, (0, _indexOf.default)(e).call(e, "."))) < 14 && (an = !0);
    };
    function ln(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    const dn = e => {
        const t = "#text";
        for (const n in e) e.hasOwnProperty(n) && void 0 !== e[n][t] ? e[n] = e[n][t] : "object" == typeof e[n] && null !== e[n] && (e[n] = dn(e[n]));
        return e;
      },
      un = function () {
        const e = (0, _getPrototypeOf.default)(this).constructor,
          t = new ((0, _bind.default)(Function).apply(String, [null, ...arguments]))();
        return (0, _setPrototypeOf.default)(t, e.prototype), t;
      };
    function pn(e, t, n) {
      let r, s, o;
      if (void 0 === t && void 0 === n) r = {}, o = e;else {
        if (r = e, "function" == typeof t) return s = t, o = n, hn(r, s, o);
        o = t;
      }
      for (const e of (0, _keys.default)(o)) {
        if (!(0, _isArray.default)(o[e])) {
          r[e] = o[e];
          continue;
        }
        let [t, n] = o[e];
        if ("function" == typeof n) {
          let s;
          const o = void 0 === t && null != (s = n()),
            i = "function" == typeof t && !!t(void 0) || "function" != typeof t && !!t;
          o ? r[e] = s : i && (r[e] = n());
        } else {
          const s = void 0 === t && null != n,
            o = "function" == typeof t && !!t(n) || "function" != typeof t && !!t;
          (s || o) && (r[e] = n);
        }
      }
      return r;
    }
    un.prototype = (0, _create.default)(String.prototype, {
      constructor: {
        value: un,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0, _setPrototypeOf.default)(un, String);
    const hn = (e, t, n) => {
      var _context61;
      return pn(e, (0, _reduce.default)(_context61 = (0, _entries.default)(n)).call(_context61, (e, [n, r]) => ((0, _isArray.default)(r) ? e[n] = r : e[n] = "function" == typeof r ? [t, r()] : [t, r], e), {}));
    };
    class fn extends tn {
      constructor(e) {
        super(e), (0, _setPrototypeOf.default)(this, fn.prototype);
      }
    }
    class gn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "ExpiredTokenException",
          $fault: "client"
        }, e)), this.name = "ExpiredTokenException", this.$fault = "client", (0, _setPrototypeOf.default)(this, gn.prototype);
      }
    }
    class mn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "MalformedPolicyDocumentException",
          $fault: "client"
        }, e)), this.name = "MalformedPolicyDocumentException", this.$fault = "client", (0, _setPrototypeOf.default)(this, mn.prototype);
      }
    }
    class yn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "PackedPolicyTooLargeException",
          $fault: "client"
        }, e)), this.name = "PackedPolicyTooLargeException", this.$fault = "client", (0, _setPrototypeOf.default)(this, yn.prototype);
      }
    }
    class wn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "RegionDisabledException",
          $fault: "client"
        }, e)), this.name = "RegionDisabledException", this.$fault = "client", (0, _setPrototypeOf.default)(this, wn.prototype);
      }
    }
    class bn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "IDPRejectedClaimException",
          $fault: "client"
        }, e)), this.name = "IDPRejectedClaimException", this.$fault = "client", (0, _setPrototypeOf.default)(this, bn.prototype);
      }
    }
    class En extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidIdentityTokenException",
          $fault: "client"
        }, e)), this.name = "InvalidIdentityTokenException", this.$fault = "client", (0, _setPrototypeOf.default)(this, En.prototype);
      }
    }
    class Sn extends fn {
      constructor(e) {
        super(_objectSpread({
          name: "IDPCommunicationErrorException",
          $fault: "client"
        }, e)), this.name = "IDPCommunicationErrorException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Sn.prototype);
      }
    }
    const xn = e => _objectSpread({}, e),
      vn = e => _objectSpread({}, e),
      Tn = e => _objectSpread({}, e),
      An = e => _objectSpread({}, e);
    var Pn = n(932);
    const In = async (e, t) => {
        const n = e.body,
          r = Wn(n.Error, t),
          s = new gn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      kn = async (e, t) => {
        const n = e.body,
          r = Bn(n.Error, t),
          s = new Sn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      Rn = async (e, t) => {
        const n = e.body,
          r = Vn(n.Error, t),
          s = new bn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      Nn = async (e, t) => {
        const n = e.body,
          r = Kn(n.Error, t),
          s = new En(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      Cn = async (e, t) => {
        const n = e.body,
          r = Hn(n.Error, t),
          s = new mn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      On = async (e, t) => {
        const n = e.body,
          r = Gn(n.Error, t),
          s = new yn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      $n = async (e, t) => {
        const n = e.body,
          r = Jn(n.Error, t),
          s = new wn(_objectSpread({
            $metadata: Xn(e)
          }, r));
        return nn(s, n);
      },
      _n = (e, t) => {
        const n = {};
        if (null != e.RoleArn && (n.RoleArn = e.RoleArn), null != e.RoleSessionName && (n.RoleSessionName = e.RoleSessionName), null != e.PolicyArns) {
          var _e$PolicyArns, _context62;
          const r = Fn(e.PolicyArns, t);
          0 === ((_e$PolicyArns = e.PolicyArns) === null || _e$PolicyArns === void 0 ? void 0 : _e$PolicyArns.length) && (n.PolicyArns = []), (0, _forEach.default)(_context62 = (0, _entries.default)(r)).call(_context62, ([e, t]) => {
            n[`PolicyArns.${e}`] = t;
          });
        }
        if (null != e.Policy && (n.Policy = e.Policy), null != e.DurationSeconds && (n.DurationSeconds = e.DurationSeconds), null != e.Tags) {
          var _e$Tags, _context63;
          const r = Un(e.Tags, t);
          0 === ((_e$Tags = e.Tags) === null || _e$Tags === void 0 ? void 0 : _e$Tags.length) && (n.Tags = []), (0, _forEach.default)(_context63 = (0, _entries.default)(r)).call(_context63, ([e, t]) => {
            n[`Tags.${e}`] = t;
          });
        }
        if (null != e.TransitiveTagKeys) {
          var _e$TransitiveTagKeys, _context64;
          const r = Ln(e.TransitiveTagKeys, t);
          0 === ((_e$TransitiveTagKeys = e.TransitiveTagKeys) === null || _e$TransitiveTagKeys === void 0 ? void 0 : _e$TransitiveTagKeys.length) && (n.TransitiveTagKeys = []), (0, _forEach.default)(_context64 = (0, _entries.default)(r)).call(_context64, ([e, t]) => {
            n[`TransitiveTagKeys.${e}`] = t;
          });
        }
        return null != e.ExternalId && (n.ExternalId = e.ExternalId), null != e.SerialNumber && (n.SerialNumber = e.SerialNumber), null != e.TokenCode && (n.TokenCode = e.TokenCode), null != e.SourceIdentity && (n.SourceIdentity = e.SourceIdentity), n;
      },
      Dn = (e, t) => {
        const n = {};
        if (null != e.RoleArn && (n.RoleArn = e.RoleArn), null != e.RoleSessionName && (n.RoleSessionName = e.RoleSessionName), null != e.WebIdentityToken && (n.WebIdentityToken = e.WebIdentityToken), null != e.ProviderId && (n.ProviderId = e.ProviderId), null != e.PolicyArns) {
          var _e$PolicyArns2, _context65;
          const r = Fn(e.PolicyArns, t);
          0 === ((_e$PolicyArns2 = e.PolicyArns) === null || _e$PolicyArns2 === void 0 ? void 0 : _e$PolicyArns2.length) && (n.PolicyArns = []), (0, _forEach.default)(_context65 = (0, _entries.default)(r)).call(_context65, ([e, t]) => {
            n[`PolicyArns.${e}`] = t;
          });
        }
        return null != e.Policy && (n.Policy = e.Policy), null != e.DurationSeconds && (n.DurationSeconds = e.DurationSeconds), n;
      },
      Fn = (e, t) => {
        const n = {};
        let r = 1;
        for (const s of e) {
          var _context66;
          if (null === s) continue;
          const e = jn(s, t);
          (0, _forEach.default)(_context66 = (0, _entries.default)(e)).call(_context66, ([e, t]) => {
            n[`member.${r}.${e}`] = t;
          }), r++;
        }
        return n;
      },
      jn = (e, t) => {
        const n = {};
        return null != e.arn && (n.arn = e.arn), n;
      },
      Mn = (e, t) => {
        const n = {};
        return null != e.Key && (n.Key = e.Key), null != e.Value && (n.Value = e.Value), n;
      },
      Ln = (e, t) => {
        const n = {};
        let r = 1;
        for (const t of e) null !== t && (n[`member.${r}`] = t, r++);
        return n;
      },
      Un = (e, t) => {
        const n = {};
        let r = 1;
        for (const t of e) {
          var _context67;
          if (null === t) continue;
          const e = Mn(t);
          (0, _forEach.default)(_context67 = (0, _entries.default)(e)).call(_context67, ([e, t]) => {
            n[`member.${r}.${e}`] = t;
          }), r++;
        }
        return n;
      },
      qn = (e, t) => {
        const n = {
          AssumedRoleId: void 0,
          Arn: void 0
        };
        return void 0 !== e.AssumedRoleId && (n.AssumedRoleId = Mt(e.AssumedRoleId)), void 0 !== e.Arn && (n.Arn = Mt(e.Arn)), n;
      },
      zn = (e, t) => {
        const n = {
          AccessKeyId: void 0,
          SecretAccessKey: void 0,
          SessionToken: void 0,
          Expiration: void 0
        };
        return void 0 !== e.AccessKeyId && (n.AccessKeyId = Mt(e.AccessKeyId)), void 0 !== e.SecretAccessKey && (n.SecretAccessKey = Mt(e.SecretAccessKey)), void 0 !== e.SessionToken && (n.SessionToken = Mt(e.SessionToken)), void 0 !== e.Expiration && (n.Expiration = Ft(Kt(e.Expiration))), n;
      },
      Wn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Bn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Vn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Kn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Hn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Gn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Jn = (e, t) => {
        const n = {
          message: void 0
        };
        return void 0 !== e.message && (n.message = Mt(e.message)), n;
      },
      Xn = e => {
        var _ref3, _e$headers$xAmznReq2;
        return {
          httpStatusCode: e.statusCode,
          requestId: (_ref3 = (_e$headers$xAmznReq2 = e.headers["x-amzn-requestid"]) !== null && _e$headers$xAmznReq2 !== void 0 ? _e$headers$xAmznReq2 : e.headers["x-amzn-request-id"]) !== null && _ref3 !== void 0 ? _ref3 : e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"]
        };
      },
      Zn = async (e, t, n, r, s) => {
        const {
            hostname: o,
            protocol: i = "https",
            port: a,
            path: c
          } = await e.endpoint(),
          l = {
            protocol: i,
            hostname: o,
            port: a,
            method: "POST",
            path: (0, _endsWith.default)(c).call(c, "/") ? (0, _slice.default)(c).call(c, 0, -1) + n : c + n,
            headers: t
          };
        return void 0 !== r && (l.hostname = r), void 0 !== s && (l.body = s), new g(l);
      },
      Yn = (e, t) => ((e, t) => ((e = new Uint8Array(), t) => e instanceof Uint8Array ? _promise.default.resolve(e) : t.streamCollector(e) || _promise.default.resolve(new Uint8Array()))(e, t).then(e => t.utf8Encoder(e)))(e, t).then(e => {
        if (e.length) {
          const t = new Pn.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: !0,
            ignoreAttributes: !1,
            ignoreDeclaration: !0,
            parseTagValue: !1,
            trimValues: !1,
            tagValueProcessor: (e, t) => "" === (0, _trim.default)(t).call(t) && (0, _includes.default)(t).call(t, "\n") ? "" : void 0
          });
          t.addEntity("#xD", "\r"), t.addEntity("#10", "\n");
          const n = t.parse(e),
            r = "#text",
            s = (0, _keys.default)(n)[0],
            o = n[s];
          return o[r] && (o[s] = o[r], delete o[r]), dn(o);
        }
        return {};
      }),
      Qn = async (e, t) => {
        var _n$Error$message;
        const n = await Yn(e, t);
        return n.Error && (n.Error.message = (_n$Error$message = n.Error.message) !== null && _n$Error$message !== void 0 ? _n$Error$message : n.Error.Message), n;
      },
      er = e => {
        var _context68;
        return (0, _map.default)(_context68 = (0, _entries.default)(e)).call(_context68, ([e, t]) => ln(e) + "=" + ln(t)).join("&");
      },
      tr = (e, t) => {
        var _t$Error;
        return void 0 !== ((_t$Error = t.Error) === null || _t$Error === void 0 ? void 0 : _t$Error.Code) ? t.Error.Code : 404 == e.statusCode ? "NotFound" : void 0;
      };
    class nr extends kt {
      constructor(e) {
        super(), this.input = e;
      }
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: {
            type: "builtInParams",
            name: "useGlobalEndpoint"
          },
          UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
          },
          Endpoint: {
            type: "builtInParams",
            name: "endpoint"
          },
          Region: {
            type: "builtInParams",
            name: "region"
          },
          UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
          }
        };
      }
      resolveMiddleware(e, t, n) {
        this.middlewareStack.use(T(t, this.serialize, this.deserialize)), this.middlewareStack.use(C(t, nr.getEndpointParameterInstructions())), this.middlewareStack.use(gt(t));
        const r = (0, _concat.default)(e).call(e, this.middlewareStack),
          {
            logger: s
          } = t,
          o = {
            logger: s,
            clientName: "STSClient",
            commandName: "AssumeRoleCommand",
            inputFilterSensitiveLog: xn,
            outputFilterSensitiveLog: vn
          },
          {
            requestHandler: i
          } = t;
        return r.resolve(e => i.handle(e.request, n || {}), o);
      }
      serialize(e, t) {
        return (async (e, t) => {
          let n;
          return n = er(_objectSpread(_objectSpread({}, _n(e, t)), {}, {
            Action: "AssumeRole",
            Version: "2011-06-15"
          })), Zn(t, {
            "content-type": "application/x-www-form-urlencoded"
          }, "/", void 0, n);
        })(e, t);
      }
      deserialize(e, t) {
        return (async (e, t) => {
          if (e.statusCode >= 300) return (async (e, t) => {
            const n = _objectSpread(_objectSpread({}, e), {}, {
                body: await Qn(e.body, t)
              }),
              r = tr(e, n.body);
            switch (r) {
              case "ExpiredTokenException":
              case "com.amazonaws.sts#ExpiredTokenException":
                throw await In(n, t);
              case "MalformedPolicyDocument":
              case "com.amazonaws.sts#MalformedPolicyDocumentException":
                throw await Cn(n, t);
              case "PackedPolicyTooLarge":
              case "com.amazonaws.sts#PackedPolicyTooLargeException":
                throw await On(n, t);
              case "RegionDisabledException":
              case "com.amazonaws.sts#RegionDisabledException":
                throw await $n(n, t);
              default:
                const s = n.body;
                rn({
                  output: e,
                  parsedBody: s.Error,
                  exceptionCtor: fn,
                  errorCode: r
                });
            }
          })(e, t);
          let n = {};
          n = ((e, t) => {
            const n = {
              Credentials: void 0,
              AssumedRoleUser: void 0,
              PackedPolicySize: void 0,
              SourceIdentity: void 0
            };
            return void 0 !== e.Credentials && (n.Credentials = zn(e.Credentials, t)), void 0 !== e.AssumedRoleUser && (n.AssumedRoleUser = qn(e.AssumedRoleUser)), void 0 !== e.PackedPolicySize && (n.PackedPolicySize = qt(e.PackedPolicySize)), void 0 !== e.SourceIdentity && (n.SourceIdentity = Mt(e.SourceIdentity)), n;
          })((await Yn(e.body, t)).AssumeRoleResult, t);
          const r = _objectSpread({
            $metadata: Xn(e)
          }, n);
          return _promise.default.resolve(r);
        })(e, t);
      }
    }
    class rr extends kt {
      constructor(e) {
        super(), this.input = e;
      }
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: {
            type: "builtInParams",
            name: "useGlobalEndpoint"
          },
          UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
          },
          Endpoint: {
            type: "builtInParams",
            name: "endpoint"
          },
          Region: {
            type: "builtInParams",
            name: "region"
          },
          UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
          }
        };
      }
      resolveMiddleware(e, t, n) {
        this.middlewareStack.use(T(t, this.serialize, this.deserialize)), this.middlewareStack.use(C(t, rr.getEndpointParameterInstructions()));
        const r = (0, _concat.default)(e).call(e, this.middlewareStack),
          {
            logger: s
          } = t,
          o = {
            logger: s,
            clientName: "STSClient",
            commandName: "AssumeRoleWithWebIdentityCommand",
            inputFilterSensitiveLog: Tn,
            outputFilterSensitiveLog: An
          },
          {
            requestHandler: i
          } = t;
        return r.resolve(e => i.handle(e.request, n || {}), o);
      }
      serialize(e, t) {
        return (async (e, t) => {
          let n;
          return n = er(_objectSpread(_objectSpread({}, Dn(e, t)), {}, {
            Action: "AssumeRoleWithWebIdentity",
            Version: "2011-06-15"
          })), Zn(t, {
            "content-type": "application/x-www-form-urlencoded"
          }, "/", void 0, n);
        })(e, t);
      }
      deserialize(e, t) {
        return (async (e, t) => {
          if (e.statusCode >= 300) return (async (e, t) => {
            const n = _objectSpread(_objectSpread({}, e), {}, {
                body: await Qn(e.body, t)
              }),
              r = tr(e, n.body);
            switch (r) {
              case "ExpiredTokenException":
              case "com.amazonaws.sts#ExpiredTokenException":
                throw await In(n, t);
              case "IDPCommunicationError":
              case "com.amazonaws.sts#IDPCommunicationErrorException":
                throw await kn(n, t);
              case "IDPRejectedClaim":
              case "com.amazonaws.sts#IDPRejectedClaimException":
                throw await Rn(n, t);
              case "InvalidIdentityToken":
              case "com.amazonaws.sts#InvalidIdentityTokenException":
                throw await Nn(n, t);
              case "MalformedPolicyDocument":
              case "com.amazonaws.sts#MalformedPolicyDocumentException":
                throw await Cn(n, t);
              case "PackedPolicyTooLarge":
              case "com.amazonaws.sts#PackedPolicyTooLargeException":
                throw await On(n, t);
              case "RegionDisabledException":
              case "com.amazonaws.sts#RegionDisabledException":
                throw await $n(n, t);
              default:
                const s = n.body;
                rn({
                  output: e,
                  parsedBody: s.Error,
                  exceptionCtor: fn,
                  errorCode: r
                });
            }
          })(e, t);
          let n = {};
          n = ((e, t) => {
            const n = {
              Credentials: void 0,
              SubjectFromWebIdentityToken: void 0,
              AssumedRoleUser: void 0,
              PackedPolicySize: void 0,
              Provider: void 0,
              Audience: void 0,
              SourceIdentity: void 0
            };
            return void 0 !== e.Credentials && (n.Credentials = zn(e.Credentials, t)), void 0 !== e.SubjectFromWebIdentityToken && (n.SubjectFromWebIdentityToken = Mt(e.SubjectFromWebIdentityToken)), void 0 !== e.AssumedRoleUser && (n.AssumedRoleUser = qn(e.AssumedRoleUser)), void 0 !== e.PackedPolicySize && (n.PackedPolicySize = qt(e.PackedPolicySize)), void 0 !== e.Provider && (n.Provider = Mt(e.Provider)), void 0 !== e.Audience && (n.Audience = Mt(e.Audience)), void 0 !== e.SourceIdentity && (n.SourceIdentity = Mt(e.SourceIdentity)), n;
          })((await Yn(e.body, t)).AssumeRoleWithWebIdentityResult, t);
          const r = _objectSpread({
            $metadata: Xn(e)
          }, n);
          return _promise.default.resolve(r);
        })(e, t);
      }
    }
    const sr = "us-east-1",
      or = e => "function" != typeof e ? void 0 === e ? sr : e : async () => {
        try {
          return await e();
        } catch (e) {
          return sr;
        }
      },
      ir = (e, t) => {
        let n, r;
        return async (s, o) => {
          if (r = s, !n) {
            const {
              logger: s,
              region: o,
              requestHandler: i
            } = e;
            n = new t(_objectSpread({
              logger: s,
              credentialDefaultProvider: () => async () => r,
              region: or(o || e.region)
            }, i ? {
              requestHandler: i
            } : {}));
          }
          const {
            Credentials: i
          } = await n.send(new nr(o));
          if (!i || !i.AccessKeyId || !i.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${o.RoleArn}`);
          return {
            accessKeyId: i.AccessKeyId,
            secretAccessKey: i.SecretAccessKey,
            sessionToken: i.SessionToken,
            expiration: i.Expiration
          };
        };
      },
      ar = (e, t) => {
        let n;
        return async r => {
          if (!n) {
            const {
              logger: r,
              region: s,
              requestHandler: o
            } = e;
            n = new t(_objectSpread({
              logger: r,
              region: or(s || e.region)
            }, o ? {
              requestHandler: o
            } : {}));
          }
          const {
            Credentials: s
          } = await n.send(new rr(r));
          if (!s || !s.AccessKeyId || !s.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${r.RoleArn}`);
          return {
            accessKeyId: s.AccessKeyId,
            secretAccessKey: s.SecretAccessKey,
            sessionToken: s.SessionToken,
            expiration: s.Expiration
          };
        };
      },
      cr = () => async () => {
        const e = process.env.AWS_ACCESS_KEY_ID,
          t = process.env.AWS_SECRET_ACCESS_KEY,
          n = process.env.AWS_SESSION_TOKEN,
          r = process.env.AWS_CREDENTIAL_EXPIRATION;
        if (e && t) return _objectSpread(_objectSpread({
          accessKeyId: e,
          secretAccessKey: t
        }, n && {
          sessionToken: n
        }), r && {
          expiration: new Date(r)
        });
        throw new Ee("Unable to find environment variable credentials.");
      },
      lr = require("os"),
      dr = require("path"),
      ur = () => {
        const {
          HOME: e,
          USERPROFILE: t,
          HOMEPATH: n,
          HOMEDRIVE: r = `C:${dr.sep}`
        } = process.env;
        return e || t || (n ? `${r}${n}` : (0, lr.homedir)());
      },
      pr = "AWS_PROFILE",
      hr = e => e.profile || process.env[pr] || "default",
      fr = e => {
        const t = (0, oe.createHash)("sha1").update(e).digest("hex");
        return (0, dr.join)(ur(), ".aws", "sso", "cache", `${t}.json`);
      },
      gr = require("fs"),
      {
        readFile: mr
      } = gr.promises,
      yr = async e => {
        const t = fr(e),
          n = await mr(t, "utf8");
        return JSON.parse(n);
      },
      wr = () => process.env.AWS_CONFIG_FILE || (0, dr.join)(ur(), ".aws", "config"),
      br = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, dr.join)(ur(), ".aws", "credentials"),
      Er = /^profile\s(["'])?([^\1]+)\1$/,
      Sr = e => {
        var _context69, _context70;
        return (0, _reduce.default)(_context69 = (0, _filter.default)(_context70 = (0, _entries.default)(e)).call(_context70, ([e]) => Er.test(e))).call(_context69, (e, [t, n]) => _objectSpread(_objectSpread({}, e), {}, {
          [Er.exec(t)[2]]: n
        }), _objectSpread({}, e.default && {
          default: e.default
        }));
      },
      xr = ["__proto__", "profile __proto__"],
      vr = e => {
        const t = {};
        let n;
        for (let r of e.split(/\r?\n/)) {
          var _context71;
          if (r = (0, _trim.default)(_context71 = r.split(/(^|\s)[;#]/)[0]).call(_context71), "[" === r[0] && "]" === r[r.length - 1]) {
            if (n = r.substring(1, r.length - 1), (0, _includes.default)(xr).call(xr, n)) throw new Error(`Found invalid profile name "${n}"`);
          } else if (n) {
            const e = (0, _indexOf.default)(r).call(r, "="),
              s = 0,
              o = r.length - 1;
            if (-1 !== e && e !== s && e !== o) {
              var _context72, _context73;
              const [s, o] = [(0, _trim.default)(_context72 = r.substring(0, e)).call(_context72), (0, _trim.default)(_context73 = r.substring(e + 1)).call(_context73)];
              t[n] = t[n] || {}, t[n][s] = o;
            }
          }
        }
        return t;
      },
      {
        readFile: Tr
      } = gr.promises,
      Ar = {},
      Pr = e => (Ar[e] || (Ar[e] = Tr(e, "utf8")), Ar[e]),
      Ir = () => ({}),
      kr = async (e = {}) => {
        const {
            filepath: t = br(),
            configFilepath: n = wr()
          } = e,
          r = await _promise.default.all([Pr(n).then(vr).then(Sr).catch(Ir), Pr(t).then(vr).catch(Ir)]);
        return {
          configFile: r[0],
          credentialsFile: r[1]
        };
      },
      Rr = /^sso-session\s(["'])?([^\1]+)\1$/,
      Nr = e => {
        var _context74, _context75;
        return (0, _reduce.default)(_context74 = (0, _filter.default)(_context75 = (0, _entries.default)(e)).call(_context75, ([e]) => Rr.test(e))).call(_context74, (e, [t, n]) => _objectSpread(_objectSpread({}, e), {}, {
          [Rr.exec(t)[2]]: n
        }), {});
      },
      Cr = () => ({}),
      Or = async (e = {}) => {
        var _e$configFilepath;
        return Pr((_e$configFilepath = e.configFilepath) !== null && _e$configFilepath !== void 0 ? _e$configFilepath : wr()).then(vr).then(Nr).catch(Cr);
      },
      $r = async e => {
        const t = await kr(e);
        return _objectSpread(_objectSpread({}, t.configFile), t.credentialsFile);
      },
      _r = require("url"),
      Dr = require("http");
    function Fr(e) {
      return new _promise.default((t, n) => {
        var _e$hostname;
        const r = (0, Dr.request)(_objectSpread(_objectSpread({
          method: "GET"
        }, e), {}, {
          hostname: (_e$hostname = e.hostname) === null || _e$hostname === void 0 ? void 0 : _e$hostname.replace(/^\[(.+)\]$/, "$1")
        }));
        r.on("error", e => {
          n((0, _assign.default)(new be("Unable to connect to instance metadata service"), e)), r.destroy();
        }), r.on("timeout", () => {
          n(new be("TimeoutError from instance metadata service")), r.destroy();
        }), r.on("response", e => {
          const {
            statusCode: s = 400
          } = e;
          (s < 200 || 300 <= s) && (n((0, _assign.default)(new be("Error response received from instance metadata service"), {
            statusCode: s
          })), r.destroy());
          const o = [];
          e.on("data", e => {
            o.push(e);
          }), e.on("end", () => {
            var _context76;
            t((0, _concat.default)(_context76 = ke.Buffer).call(_context76, o)), r.destroy();
          });
        }), r.end();
      });
    }
    const jr = e => Boolean(e) && "object" == typeof e && "string" == typeof e.AccessKeyId && "string" == typeof e.SecretAccessKey && "string" == typeof e.Token && "string" == typeof e.Expiration,
      Mr = e => ({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration)
      }),
      Lr = ({
        maxRetries: e = 0,
        timeout: t = 1e3
      }) => ({
        maxRetries: e,
        timeout: t
      }),
      Ur = (e, t) => {
        let n = e();
        for (let r = 0; r < t; r++) n = n.catch(e);
        return n;
      },
      qr = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
      zr = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
      Wr = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
      Br = (e = {}) => {
        const {
          timeout: t,
          maxRetries: n
        } = Lr(e);
        return () => Ur(async () => {
          const e = await Gr(),
            n = JSON.parse(await Vr(t, e));
          if (!jr(n)) throw new Ee("Invalid response received from instance metadata service.");
          return Mr(n);
        }, n);
      },
      Vr = async (e, t) => (process.env[Wr] && (t.headers = _objectSpread(_objectSpread({}, t.headers), {}, {
        Authorization: process.env[Wr]
      })), (await Fr(_objectSpread(_objectSpread({}, t), {}, {
        timeout: e
      }))).toString()),
      Kr = {
        localhost: !0,
        "127.0.0.1": !0
      },
      Hr = {
        "http:": !0,
        "https:": !0
      },
      Gr = async () => {
        if (process.env[zr]) return {
          hostname: "169.254.170.2",
          path: process.env[zr]
        };
        if (process.env[qr]) {
          const e = (0, _r.parse)(process.env[qr]);
          if (!e.hostname || !(e.hostname in Kr)) throw new Ee(`${e.hostname} is not a valid container metadata service hostname`, !1);
          if (!e.protocol || !(e.protocol in Hr)) throw new Ee(`${e.protocol} is not a valid container metadata service protocol`, !1);
          return _objectSpread(_objectSpread({}, e), {}, {
            port: e.port ? (0, _parseInt3.default)(e.port, 10) : void 0
          });
        }
        throw new Ee(`The container metadata credential provider cannot be used unless the ${zr} or ${qr} environment variable is set`, !1);
      },
      Jr = ({
        environmentVariableSelector: e,
        configFileSelector: t,
        default: n
      }, r = {}) => {
        return ve(xe((s = e, async () => {
          try {
            const e = s(process.env);
            if (void 0 === e) throw new Error();
            return e;
          } catch (e) {
            throw new Ee(e.message || `Cannot load config from environment variables with getter: ${s}`);
          }
        }), ((e, _ref4 = {}) => {
          let {
              preferredFile: t = "config"
            } = _ref4,
            n = (0, _objectWithoutProperties2.default)(_ref4, _excluded3);
          return async () => {
            const r = hr(n),
              {
                configFile: s,
                credentialsFile: o
              } = await kr(n),
              i = o[r] || {},
              a = s[r] || {},
              c = "config" === t ? _objectSpread(_objectSpread({}, i), a) : _objectSpread(_objectSpread({}, a), i);
            try {
              const t = e(c);
              if (void 0 === t) throw new Error();
              return t;
            } catch (t) {
              throw new Ee(t.message || `Cannot load config for profile ${r} in SDK configuration files with getter: ${e}`);
            }
          };
        })(t, r), (e => {
          return "function" == typeof e ? async () => await e() : (t = e, () => _promise.default.resolve(t));
          var t;
        })(n)));
        var s;
      };
    var Xr;
    !function (e) {
      e.IPv4 = "http://169.254.169.254", e.IPv6 = "http://[fd00:ec2::254]";
    }(Xr || (Xr = {}));
    const Zr = {
      environmentVariableSelector: e => e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
      configFileSelector: e => e.ec2_metadata_service_endpoint,
      default: void 0
    };
    var Yr;
    !function (e) {
      e.IPv4 = "IPv4", e.IPv6 = "IPv6";
    }(Yr || (Yr = {}));
    const Qr = {
        environmentVariableSelector: e => e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,
        configFileSelector: e => e.ec2_metadata_service_endpoint_mode,
        default: Yr.IPv4
      },
      es = async () => $((await ts()) || (await ns())),
      ts = async () => Jr(Zr)(),
      ns = async () => {
        const e = await Jr(Qr)();
        switch (e) {
          case Yr.IPv4:
            return Xr.IPv4;
          case Yr.IPv6:
            return Xr.IPv6;
          default:
            throw new Error(`Unsupported endpoint mode: ${e}. Select from ${(0, _values.default)(Yr)}`);
        }
      },
      rs = (e, t) => {
        var _e$originalExpiration;
        const n = 300 + Math.floor(300 * Math.random()),
          r = new Date((0, _now.default)() + 1e3 * n);
        t.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html");
        const s = (_e$originalExpiration = e.originalExpiration) !== null && _e$originalExpiration !== void 0 ? _e$originalExpiration : e.expiration;
        return _objectSpread(_objectSpread(_objectSpread({}, e), s ? {
          originalExpiration: s
        } : {}), {}, {
          expiration: r
        });
      },
      ss = "/latest/meta-data/iam/security-credentials/",
      os = (e = {}) => ((e, t = {}) => {
        const n = (t === null || t === void 0 ? void 0 : t.logger) || console;
        let r;
        return async () => {
          let t;
          try {
            t = await e(), t.expiration && t.expiration.getTime() < (0, _now.default)() && (t = rs(t, n));
          } catch (e) {
            if (!r) throw e;
            n.warn("Credential renew failed: ", e), t = rs(r, n);
          }
          return r = t, t;
        };
      })(is(e), {
        logger: e.logger
      }),
      is = e => {
        let t = !1;
        const {
            timeout: n,
            maxRetries: r
          } = Lr(e),
          s = async (e, n) => {
            var _context77;
            const r = (0, _trim.default)(_context77 = await Ur(async () => {
              let e;
              try {
                e = await cs(n);
              } catch (e) {
                throw 401 === e.statusCode && (t = !1), e;
              }
              return e;
            }, e)).call(_context77);
            return Ur(async () => {
              let e;
              try {
                e = await ls(r, n);
              } catch (e) {
                throw 401 === e.statusCode && (t = !1), e;
              }
              return e;
            }, e);
          };
        return async () => {
          const e = await es();
          if (t) return s(r, _objectSpread(_objectSpread({}, e), {}, {
            timeout: n
          }));
          {
            let o;
            try {
              o = (await as(_objectSpread(_objectSpread({}, e), {}, {
                timeout: n
              }))).toString();
            } catch (o) {
              var _context78;
              if (400 === (o === null || o === void 0 ? void 0 : o.statusCode)) throw (0, _assign.default)(o, {
                message: "EC2 Metadata token request returned error"
              });
              return ("TimeoutError" === o.message || (0, _includes.default)(_context78 = [403, 404, 405]).call(_context78, o.statusCode)) && (t = !0), s(r, _objectSpread(_objectSpread({}, e), {}, {
                timeout: n
              }));
            }
            return s(r, _objectSpread(_objectSpread({}, e), {}, {
              headers: {
                "x-aws-ec2-metadata-token": o
              },
              timeout: n
            }));
          }
        };
      },
      as = async e => Fr(_objectSpread(_objectSpread({}, e), {}, {
        path: "/latest/api/token",
        method: "PUT",
        headers: {
          "x-aws-ec2-metadata-token-ttl-seconds": "21600"
        }
      })),
      cs = async e => (await Fr(_objectSpread(_objectSpread({}, e), {}, {
        path: ss
      }))).toString(),
      ls = async (e, t) => {
        const n = JSON.parse((await Fr(_objectSpread(_objectSpread({}, t), {}, {
          path: ss + e
        }))).toString());
        if (!jr(n)) throw new Ee("Invalid response received from instance metadata service.");
        return Mr(n);
      },
      ds = require("child_process"),
      us = require("util"),
      ps = (e = {}) => async () => {
        const t = await $r(e);
        return (async (e, t) => {
          const n = t[e];
          if (!t[e]) throw new Ee(`Profile ${e} could not be found in shared credentials file.`);
          {
            const t = n.credential_process;
            if (void 0 === t) throw new Ee(`Profile ${e} did not contain credential_process.`);
            {
              const n = (0, us.promisify)(ds.exec);
              try {
                const {
                  stdout: r
                } = await n(t);
                let s;
                try {
                  s = JSON.parse((0, _trim.default)(r).call(r));
                } catch (_unused) {
                  throw Error(`Profile ${e} credential_process returned invalid JSON.`);
                }
                return ((e, t) => {
                  if (1 !== t.Version) throw Error(`Profile ${e} credential_process did not return Version 1.`);
                  if (void 0 === t.AccessKeyId || void 0 === t.SecretAccessKey) throw Error(`Profile ${e} credential_process returned invalid credentials.`);
                  if (t.Expiration) {
                    const n = new Date();
                    if (new Date(t.Expiration) < n) throw Error(`Profile ${e} credential_process returned expired credentials.`);
                  }
                  return _objectSpread(_objectSpread({
                    accessKeyId: t.AccessKeyId,
                    secretAccessKey: t.SecretAccessKey
                  }, t.SessionToken && {
                    sessionToken: t.SessionToken
                  }), t.Expiration && {
                    expiration: new Date(t.Expiration)
                  });
                })(e, s);
              } catch (e) {
                throw new Ee(e.message);
              }
            }
          }
        })(hr(e), t);
      },
      hs = e => e && ("string" == typeof e.sso_start_url || "string" == typeof e.sso_account_id || "string" == typeof e.sso_session || "string" == typeof e.sso_region || "string" == typeof e.sso_role_name);
    class fs {
      constructor(e, t) {
        this.algorithmIdentifier = e, this.secret = t, this.reset();
      }
      update(e, t) {
        this.hash.update(Oe(gs(e, t)));
      }
      digest() {
        return _promise.default.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? (0, oe.createHmac)(this.algorithmIdentifier, gs(this.secret)) : (0, oe.createHash)(this.algorithmIdentifier);
      }
    }
    function gs(e, t) {
      return ke.Buffer.isBuffer(e) ? e : "string" == typeof e ? Ne(e, t) : ArrayBuffer.isView(e) ? Re(e.buffer, e.byteOffset, e.byteLength) : Re(e);
    }
    const ms = require("https"),
      ys = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
      ws = e => {
        const t = {};
        for (const n of (0, _keys.default)(e)) {
          const r = e[n];
          t[n] = (0, _isArray.default)(r) ? r.join(",") : r;
        }
        return t;
      },
      bs = require("stream");
    function Es(e, t) {
      t instanceof bs.Readable ? t.pipe(e) : t ? e.end(Buffer.from(t)) : e.end();
    }
    class Ss {
      constructor(e) {
        this.metadata = {
          handlerProtocol: "http/1.1"
        }, this.configProvider = new _promise.default((t, n) => {
          "function" == typeof e ? e().then(e => {
            t(this.resolveDefaultConfig(e));
          }).catch(n) : t(this.resolveDefaultConfig(e));
        });
      }
      resolveDefaultConfig(e) {
        const {
          connectionTimeout: t,
          socketTimeout: n,
          httpAgent: r,
          httpsAgent: s
        } = e || {};
        return {
          connectionTimeout: t,
          socketTimeout: n,
          httpAgent: r || new Dr.Agent({
            keepAlive: !0,
            maxSockets: 50
          }),
          httpsAgent: s || new ms.Agent({
            keepAlive: !0,
            maxSockets: 50
          })
        };
      }
      destroy() {
        var _this$config, _this$config$httpAgen, _this$config2, _this$config2$httpsAg;
        (_this$config = this.config) !== null && _this$config !== void 0 && (_this$config$httpAgen = _this$config.httpAgent) !== null && _this$config$httpAgen !== void 0 && _this$config$httpAgen.destroy(), (_this$config2 = this.config) === null || _this$config2 === void 0 ? void 0 : (_this$config2$httpsAg = _this$config2.httpsAgent) === null || _this$config2$httpsAg === void 0 ? void 0 : _this$config2$httpsAg.destroy();
      }
      async handle(e, {
        abortSignal: t
      } = {}) {
        return this.config || (this.config = await this.configProvider), new _promise.default((n, r) => {
          if (!this.config) throw new Error("Node HTTP request handler config is not resolved");
          if (t !== null && t !== void 0 && t.aborted) {
            const e = new Error("Request aborted");
            return e.name = "AbortError", void r(e);
          }
          const s = "https:" === e.protocol,
            o = function (e) {
              const t = [];
              for (let n of (0, _sort.default)(_context79 = (0, _keys.default)(e)).call(_context79)) {
                var _context79;
                const r = e[n];
                if (n = et(n), (0, _isArray.default)(r)) for (let e = 0, s = r.length; e < s; e++) t.push(`${n}=${et(r[e])}`);else {
                  let e = n;
                  (r || "string" == typeof r) && (e += `=${et(r)}`), t.push(e);
                }
              }
              return t.join("&");
            }(e.query || {}),
            i = {
              headers: e.headers,
              host: e.hostname,
              method: e.method,
              path: o ? `${e.path}?${o}` : e.path,
              port: e.port,
              agent: s ? this.config.httpsAgent : this.config.httpAgent
            },
            a = (s ? ms.request : Dr.request)(i, e => {
              const t = new m({
                statusCode: e.statusCode || -1,
                headers: ws(e.headers),
                body: e
              });
              n({
                response: t
              });
            });
          a.on("error", e => {
            (0, _includes.default)(ys).call(ys, e.code) ? r((0, _assign.default)(e, {
              name: "TimeoutError"
            })) : r(e);
          }), ((e, t, n = 0) => {
            n && e.on("socket", r => {
              if (r.connecting) {
                const s = (0, _setTimeout2.default)(() => {
                  e.destroy(), t((0, _assign.default)(new Error(`Socket timed out without establishing a connection within ${n} ms`), {
                    name: "TimeoutError"
                  }));
                }, n);
                r.on("connect", () => {
                  clearTimeout(s);
                });
              }
            });
          })(a, r, this.config.connectionTimeout), ((e, t, n = 0) => {
            e.setTimeout(n, () => {
              e.destroy(), t((0, _assign.default)(new Error(`Connection timed out after ${n} ms`), {
                name: "TimeoutError"
              }));
            });
          })(a, r, this.config.socketTimeout), t && (t.onabort = () => {
            a.abort();
            const e = new Error("Request aborted");
            e.name = "AbortError", r(e);
          }), function (e, t) {
            "100-continue" === (t.headers.Expect || t.headers.expect) ? e.on("continue", () => {
              Es(e, t.body);
            }) : Es(e, t.body);
          }(a, e);
        });
      }
    }
    require("http2");
    class xs extends bs.Writable {
      constructor() {
        super(...arguments), this.bufferedBytes = [];
      }
      _write(e, t, n) {
        this.bufferedBytes.push(e), n();
      }
    }
    const vs = e => new _promise.default((t, n) => {
        const r = new xs();
        e.pipe(r), e.on("error", e => {
          r.end(), n(e);
        }), r.on("error", n), r.on("finish", function () {
          const e = new Uint8Array((0, _concat.default)(Buffer).call(Buffer, this.bufferedBytes));
          t(e);
        });
      }),
      Ts = e => {
        if (!e) return 0;
        if ("string" == typeof e) return Buffer.from(e).length;
        if ("number" == typeof e.byteLength) return e.byteLength;
        if ("number" == typeof e.size) return e.size;
        if ("string" == typeof e.path || Buffer.isBuffer(e.path)) return (0, gr.lstatSync)(e.path).size;
        if ("number" == typeof e.fd) return (0, gr.fstatSync)(e.fd).size;
        throw new Error(`Body Length computation failed for ${e}`);
      },
      As = require("process");
    var Ps = n(890);
    const Is = ({
        serviceId: e,
        clientVersion: t
      }) => {
        const n = [["aws-sdk-js", t], [`os/${(0, lr.platform)()}`, (0, lr.release)()], ["lang/js"], ["md/nodejs", `${As.versions.node}`]],
          r = (0, Ps.E)();
        r && n.push(r), e && n.push([`api/${e}`, t]), As.env.AWS_EXECUTION_ENV && n.push([`exec-env/${As.env.AWS_EXECUTION_ENV}`]);
        const s = Jr({
          environmentVariableSelector: e => e.AWS_SDK_UA_APP_ID,
          configFileSelector: e => e["sdk-ua-app-id"],
          default: void 0
        })();
        let o;
        return async () => {
          if (!o) {
            const e = await s;
            o = e ? [...n, [`app/${e}`]] : [...n];
          }
          return o;
        };
      },
      ks = /^[A-Za-z0-9+/]*={0,2}$/,
      Rs = e => {
        if (3 * e.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
        if (!ks.exec(e)) throw new TypeError("Invalid base64 string.");
        const t = Ne(e, "base64");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      },
      Ns = e => Re(e.buffer, e.byteOffset, e.byteLength).toString("base64"),
      Cs = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}}],"version":"1.1"}'),
      {
        partitions: Os
      } = Cs,
      $s = (0, _find.default)(Os).call(Os, e => "aws" === e.id),
      _s = e => {
        for (const t of Os) {
          const {
            regions: n,
            outputs: r
          } = t;
          for (const [t, s] of (0, _entries.default)(n)) if (t === e) return _objectSpread(_objectSpread({}, r), s);
        }
        for (const t of Os) {
          const {
            regionRegex: n,
            outputs: r
          } = t;
          if (new RegExp(n).test(e)) return _objectSpread({}, r);
        }
        if (!$s) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
        return _objectSpread({}, $s.outputs);
      },
      Ds = "endpoints";
    function Fs(e) {
      var _context80;
      return "object" != typeof e || null == e ? e : "ref" in e ? `$${Fs(e.ref)}` : "fn" in e ? `${e.fn}(${(0, _map.default)(_context80 = e.argv || []).call(_context80, Fs).join(", ")})` : (0, _stringify.default)(e, null, 2);
    }
    class js extends Error {
      constructor(e) {
        super(e), this.name = "EndpointError";
      }
    }
    const Ms = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
      Ls = e => Ms.test(e) || (0, _startsWith.default)(e).call(e, "[") && (0, _endsWith.default)(e).call(e, "]"),
      Us = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
      qs = (e, t = !1) => {
        if (!t) return Us.test(e);
        const n = e.split(".");
        for (const e of n) if (!qs(e)) return !1;
        return !0;
      },
      zs = (e, t = !1) => {
        if (t) {
          for (const t of e.split(".")) if (!zs(t)) return !1;
          return !0;
        }
        return !(!qs(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || Ls(e));
      },
      Ws = e => {
        var _context81;
        const t = e.split(":");
        if (t.length < 6) return null;
        const [n, r, s, o, i, ...a] = t;
        return "arn" !== n || "" === r || "" === s || "" === a[0] ? null : {
          partition: r,
          service: s,
          region: o,
          accountId: i,
          resourceId: (0, _includes.default)(_context81 = a[0]).call(_context81, "/") ? a[0].split("/") : a
        };
      },
      Bs = (e, t) => e === t,
      Vs = (e, t) => {
        var _context82;
        return (0, _reduce.default)(_context82 = (e => {
          const t = e.split("."),
            n = [];
          for (const r of t) {
            const t = (0, _indexOf.default)(r).call(r, "[");
            if (-1 !== t) {
              if ((0, _indexOf.default)(r).call(r, "]") !== r.length - 1) throw new js(`Path: '${e}' does not end with ']'`);
              const s = (0, _slice.default)(r).call(r, t + 1, -1);
              if ((0, _isNan.default)((0, _parseInt3.default)(s))) throw new js(`Invalid array index: '${s}' in path: '${e}'`);
              0 !== t && n.push((0, _slice.default)(r).call(r, 0, t)), n.push(s);
            } else n.push(r);
          }
          return n;
        })(t)).call(_context82, (n, r) => {
          if ("object" != typeof n) throw new js(`Index '${r}' in '${t}' not found in '${(0, _stringify.default)(e)}'`);
          return (0, _isArray.default)(n) ? n[(0, _parseInt3.default)(r)] : n[r];
        }, e);
      },
      Ks = e => null != e,
      Hs = e => !e;
    var Gs, Js, Xs;
    !function (e) {
      e.HEADER = "header", e.QUERY = "query";
    }(Gs || (Gs = {})), function (e) {
      e.AAAA = "AAAA", e.A = "A";
    }(Js || (Js = {})), function (e) {
      e.HTTP = "http", e.HTTPS = "https";
    }(Xs || (Xs = {}));
    const Zs = {
        [Xs.HTTP]: 80,
        [Xs.HTTPS]: 443
      },
      Ys = e => {
        var _context84;
        const t = (() => {
          try {
            if (e instanceof _url.default) return e;
            if ("object" == typeof e && "hostname" in e) {
              var _context83;
              const {
                  hostname: t,
                  port: n,
                  protocol: r = "",
                  path: s = "",
                  query: o = {}
                } = e,
                i = new _url.default(`${r}//${t}${n ? `:${n}` : ""}${s}`);
              return i.search = (0, _map.default)(_context83 = (0, _entries.default)(o)).call(_context83, ([e, t]) => `${e}=${t}`).join("&"), i;
            }
            return new _url.default(e);
          } catch (e) {
            return null;
          }
        })();
        if (!t) return console.error(`Unable to parse ${(0, _stringify.default)(e)} as a whatwg URL.`), null;
        const n = t.href,
          {
            host: r,
            hostname: s,
            pathname: o,
            protocol: i,
            search: a
          } = t;
        if (a) return null;
        const c = (0, _slice.default)(i).call(i, 0, -1);
        if (!(0, _includes.default)(_context84 = (0, _values.default)(Xs)).call(_context84, c)) return null;
        const l = Ls(s);
        return {
          scheme: c,
          authority: `${r}${(0, _includes.default)(n).call(n, `${r}:${Zs[c]}`) || "string" == typeof e && (0, _includes.default)(e).call(e, `${r}:${Zs[c]}`) ? `:${Zs[c]}` : ""}`,
          path: o,
          normalizedPath: (0, _endsWith.default)(o).call(o, "/") ? o : `${o}/`,
          isIp: l
        };
      },
      Qs = (e, t) => e === t,
      eo = (e, t, n, r) => t >= n || e.length < n ? null : r ? e.substring(e.length - n, e.length - t) : e.substring(t, n),
      to = e => encodeURIComponent(e).replace(/[!*'()]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
      no = (e, t) => {
        const n = [],
          r = _objectSpread(_objectSpread({}, t.endpointParams), t.referenceRecord);
        let s = 0;
        for (; s < e.length;) {
          const t = (0, _indexOf.default)(e).call(e, "{", s);
          if (-1 === t) {
            n.push((0, _slice.default)(e).call(e, s));
            break;
          }
          n.push((0, _slice.default)(e).call(e, s, t));
          const o = (0, _indexOf.default)(e).call(e, "}", t);
          if (-1 === o) {
            n.push((0, _slice.default)(e).call(e, t));
            break;
          }
          "{" === e[t + 1] && "}" === e[o + 1] && (n.push((0, _slice.default)(e).call(e, t + 1, o)), s = o + 2);
          const i = e.substring(t + 1, o);
          if ((0, _includes.default)(i).call(i, "#")) {
            const [e, t] = i.split("#");
            n.push(Vs(r[e], t));
          } else n.push(r[i]);
          s = o + 1;
        }
        return n.join("");
      },
      ro = (e, t, n) => {
        if ("string" == typeof e) return no(e, n);
        if (e.fn) return so(e, n);
        if (e.ref) return (({
          ref: e
        }, t) => _objectSpread(_objectSpread({}, t.endpointParams), t.referenceRecord)[e])(e, n);
        throw new js(`'${t}': ${String(e)} is not a string, function or reference.`);
      },
      so = ({
        fn: e,
        argv: t
      }, n) => {
        var _context86;
        const r = (0, _map.default)(t).call(t, e => {
          var _context85;
          return (0, _includes.default)(_context85 = ["boolean", "number"]).call(_context85, typeof e) ? e : ro(e, "arg", n);
        });
        return (0, _reduce.default)(_context86 = e.split(".")).call(_context86, (e, t) => e[t], s)(...r);
      },
      oo = (_ref5, n) => {
        var _n$logger, _n$logger$debug;
        let {
            assign: e
          } = _ref5,
          t = (0, _objectWithoutProperties2.default)(_ref5, _excluded4);
        if (e && e in n.referenceRecord) throw new js(`'${e}' is already defined in Reference Record.`);
        const r = so(t, n);
        return (_n$logger = n.logger) !== null && _n$logger !== void 0 && (_n$logger$debug = _n$logger.debug) !== null && _n$logger$debug !== void 0 && _n$logger$debug.call(_n$logger, Ds, `evaluateCondition: ${Fs(t)} = ${Fs(r)}`), _objectSpread({
          result: "" === r || !!r
        }, null != e && {
          toAssign: {
            name: e,
            value: r
          }
        });
      },
      io = (e = [], t) => {
        const n = {};
        for (const r of e) {
          var _t$logger, _t$logger$debug, _t$logger2;
          const {
            result: e,
            toAssign: s
          } = oo(r, _objectSpread(_objectSpread({}, t), {}, {
            referenceRecord: _objectSpread(_objectSpread({}, t.referenceRecord), n)
          }));
          if (!e) return {
            result: e
          };
          s && (n[s.name] = s.value, (_t$logger = t.logger) === null || _t$logger === void 0 ? void 0 : (_t$logger$debug = (_t$logger2 = _t$logger).debug) === null || _t$logger$debug === void 0 ? void 0 : _t$logger$debug.call(_t$logger2, Ds, `assign: ${s.name} := ${Fs(s.value)}`));
        }
        return {
          result: !0,
          referenceRecord: n
        };
      },
      ao = (e, t) => {
        var _context87;
        return (0, _reduce.default)(_context87 = (0, _entries.default)(e)).call(_context87, (e, [n, r]) => _objectSpread(_objectSpread({}, e), {}, {
          [n]: (0, _map.default)(r).call(r, e => {
            const r = ro(e, "Header value entry", t);
            if ("string" != typeof r) throw new js(`Header '${n}' value '${r}' is not a string`);
            return r;
          })
        }), {});
      },
      co = (e, t) => {
        if ((0, _isArray.default)(e)) return (0, _map.default)(e).call(e, e => co(e, t));
        switch (typeof e) {
          case "string":
            return no(e, t);
          case "object":
            if (null === e) throw new js(`Unexpected endpoint property: ${e}`);
            return lo(e, t);
          case "boolean":
            return e;
          default:
            throw new js("Unexpected endpoint property type: " + typeof e);
        }
      },
      lo = (e, t) => {
        var _context88;
        return (0, _reduce.default)(_context88 = (0, _entries.default)(e)).call(_context88, (e, [n, r]) => _objectSpread(_objectSpread({}, e), {}, {
          [n]: co(r, t)
        }), {});
      },
      uo = (e, t) => {
        const n = ro(e, "Endpoint URL", t);
        if ("string" == typeof n) try {
          return new _url.default(n);
        } catch (e) {
          throw console.error(`Failed to construct URL with ${n}`, e), e;
        }
        throw new js("Endpoint URL must be a string, got " + typeof n);
      },
      po = (e, t) => {
        var _t$logger3, _t$logger3$debug;
        const {
            conditions: n,
            endpoint: r
          } = e,
          {
            result: s,
            referenceRecord: o
          } = io(n, t);
        if (!s) return;
        const i = _objectSpread(_objectSpread({}, t), {}, {
            referenceRecord: _objectSpread(_objectSpread({}, t.referenceRecord), o)
          }),
          {
            url: a,
            properties: c,
            headers: l
          } = r;
        return (_t$logger3 = t.logger) !== null && _t$logger3 !== void 0 && (_t$logger3$debug = _t$logger3.debug) !== null && _t$logger3$debug !== void 0 && _t$logger3$debug.call(_t$logger3, Ds, `Resolving endpoint from template: ${Fs(r)}`), _objectSpread(_objectSpread(_objectSpread({}, null != l && {
          headers: ao(l, i)
        }), null != c && {
          properties: lo(c, i)
        }), {}, {
          url: uo(a, i)
        });
      },
      ho = (e, t) => {
        const {
            conditions: n,
            error: r
          } = e,
          {
            result: s,
            referenceRecord: o
          } = io(n, t);
        if (s) throw new js(ro(r, "Error", _objectSpread(_objectSpread({}, t), {}, {
          referenceRecord: _objectSpread(_objectSpread({}, t.referenceRecord), o)
        })));
      },
      fo = (e, t) => {
        const {
            conditions: n,
            rules: r
          } = e,
          {
            result: s,
            referenceRecord: o
          } = io(n, t);
        if (s) return go(r, _objectSpread(_objectSpread({}, t), {}, {
          referenceRecord: _objectSpread(_objectSpread({}, t.referenceRecord), o)
        }));
      },
      go = (e, t) => {
        for (const n of e) if ("endpoint" === n.type) {
          const e = po(n, t);
          if (e) return e;
        } else if ("error" === n.type) ho(n, t);else {
          if ("tree" !== n.type) throw new js(`Unknown endpoint rule: ${n}`);
          {
            const e = fo(n, t);
            if (e) return e;
          }
        }
        throw new js("Rules evaluation failed");
      },
      mo = (e, t) => {
        var _t$logger4, _t$logger4$debug, _context89, _context90, _context91, _context92, _t$endpointParams, _t$logger5, _t$logger5$debug;
        const {
            endpointParams: n,
            logger: r
          } = t,
          {
            parameters: s,
            rules: o
          } = e;
        (_t$logger4 = t.logger) === null || _t$logger4 === void 0 ? void 0 : (_t$logger4$debug = _t$logger4.debug) === null || _t$logger4$debug === void 0 ? void 0 : _t$logger4$debug.call(_t$logger4, Ds, `Initial EndpointParams: ${Fs(n)}`);
        const i = (0, _map.default)(_context89 = (0, _filter.default)(_context90 = (0, _entries.default)(s)).call(_context90, ([, e]) => null != e.default)).call(_context89, ([e, t]) => [e, t.default]);
        if (i.length > 0) for (const [e, t] of i) {
          var _n$e2;
          n[e] = (_n$e2 = n[e]) !== null && _n$e2 !== void 0 ? _n$e2 : t;
        }
        const a = (0, _map.default)(_context91 = (0, _filter.default)(_context92 = (0, _entries.default)(s)).call(_context92, ([, e]) => e.required)).call(_context91, ([e]) => e);
        for (const e of a) if (null == n[e]) throw new js(`Missing required parameter: '${e}'`);
        const c = go(o, {
          endpointParams: n,
          logger: r,
          referenceRecord: {}
        });
        if ((_t$endpointParams = t.endpointParams) !== null && _t$endpointParams !== void 0 && _t$endpointParams.Endpoint) try {
          const e = new _url.default(t.endpointParams.Endpoint),
            {
              protocol: n,
              port: r
            } = e;
          c.url.protocol = n, c.url.port = r;
        } catch (e) {}
        return (_t$logger5 = t.logger) !== null && _t$logger5 !== void 0 && (_t$logger5$debug = _t$logger5.debug) !== null && _t$logger5$debug !== void 0 && _t$logger5$debug.call(_t$logger5, Ds, `Resolved endpoint: ${Fs(c)}`), c;
      },
      yo = "required",
      wo = "fn",
      bo = "argv",
      Eo = "ref",
      So = "PartitionResult",
      xo = "tree",
      vo = "error",
      To = "endpoint",
      Ao = {
        [yo]: !1,
        type: "String"
      },
      Po = {
        [yo]: !0,
        default: !1,
        type: "Boolean"
      },
      Io = {
        [Eo]: "Endpoint"
      },
      ko = {
        [wo]: "booleanEquals",
        [bo]: [{
          [Eo]: "UseFIPS"
        }, !0]
      },
      Ro = {
        [wo]: "booleanEquals",
        [bo]: [{
          [Eo]: "UseDualStack"
        }, !0]
      },
      No = {},
      Co = {
        [wo]: "booleanEquals",
        [bo]: [!0, {
          [wo]: "getAttr",
          [bo]: [{
            [Eo]: So
          }, "supportsFIPS"]
        }]
      },
      Oo = {
        [wo]: "booleanEquals",
        [bo]: [!0, {
          [wo]: "getAttr",
          [bo]: [{
            [Eo]: So
          }, "supportsDualStack"]
        }]
      },
      $o = [Io],
      _o = [ko],
      Do = [Ro],
      Fo = {
        version: "1.0",
        parameters: {
          Region: Ao,
          UseDualStack: Po,
          UseFIPS: Po,
          Endpoint: Ao
        },
        rules: [{
          conditions: [{
            [wo]: "aws.partition",
            [bo]: [{
              [Eo]: "Region"
            }],
            assign: So
          }],
          type: xo,
          rules: [{
            conditions: [{
              [wo]: "isSet",
              [bo]: $o
            }, {
              [wo]: "parseURL",
              [bo]: $o,
              assign: "url"
            }],
            type: xo,
            rules: [{
              conditions: _o,
              error: "Invalid Configuration: FIPS and custom endpoint are not supported",
              type: vo
            }, {
              type: xo,
              rules: [{
                conditions: Do,
                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: vo
              }, {
                endpoint: {
                  url: Io,
                  properties: No,
                  headers: No
                },
                type: To
              }]
            }]
          }, {
            conditions: [ko, Ro],
            type: xo,
            rules: [{
              conditions: [Co, Oo],
              type: xo,
              rules: [{
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: No,
                  headers: No
                },
                type: To
              }]
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: vo
            }]
          }, {
            conditions: _o,
            type: xo,
            rules: [{
              conditions: [Co],
              type: xo,
              rules: [{
                type: xo,
                rules: [{
                  endpoint: {
                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                    properties: No,
                    headers: No
                  },
                  type: To
                }]
              }]
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: vo
            }]
          }, {
            conditions: Do,
            type: xo,
            rules: [{
              conditions: [Oo],
              type: xo,
              rules: [{
                endpoint: {
                  url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: No,
                  headers: No
                },
                type: To
              }]
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: vo
            }]
          }, {
            endpoint: {
              url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
              properties: No,
              headers: No
            },
            type: To
          }]
        }]
      },
      jo = (e, t = {}) => mo(Fo, {
        endpointParams: e,
        logger: t.logger
      }),
      Mo = "AWS_REGION",
      Lo = "AWS_DEFAULT_REGION",
      Uo = ["in-region", "cross-region", "mobile", "standard", "legacy"],
      qo = {
        environmentVariableSelector: e => e.AWS_DEFAULTS_MODE,
        configFileSelector: e => e.defaults_mode,
        default: "legacy"
      },
      zo = ({
        region: e = Jr(c),
        defaultsMode: t = Jr(qo)
      } = {}) => ve(async () => {
        const n = "function" == typeof t ? await t() : t;
        switch (n === null || n === void 0 ? void 0 : n.toLowerCase()) {
          case "auto":
            return Wo(e);
          case "in-region":
          case "cross-region":
          case "mobile":
          case "standard":
          case "legacy":
            return _promise.default.resolve(n === null || n === void 0 ? void 0 : n.toLocaleLowerCase());
          case void 0:
            return _promise.default.resolve("legacy");
          default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${Uo.join(", ")}, got ${n}`);
        }
      }),
      Wo = async e => {
        if (e) {
          const t = "function" == typeof e ? await e() : e,
            n = await Bo();
          return n ? t === n ? "in-region" : "cross-region" : "standard";
        }
        return "standard";
      },
      Bo = async () => {
        var _process$env$Mo;
        if (process.env.AWS_EXECUTION_ENV && (process.env[Mo] || process.env[Lo])) return (_process$env$Mo = process.env[Mo]) !== null && _process$env$Mo !== void 0 ? _process$env$Mo : process.env[Lo];
        if (!process.env.AWS_EC2_METADATA_DISABLED) try {
          const e = await es();
          return (await Fr(_objectSpread(_objectSpread({}, e), {}, {
            path: "/latest/meta-data/placement/region"
          }))).toString();
        } catch (e) {}
      };
    class Vo extends It {
      constructor(e) {
        var _n$useDualstackEndpoi, _n$useFipsEndpoint;
        const t = (n = (e => {
          var _e$bodyLengthChecker, _e$defaultUserAgentPr, _e$maxAttempts2, _e$region, _e$requestHandler, _e$retryMode, _e$sha, _e$streamCollector, _e$useDualstackEndpoi2, _e$useFipsEndpoint2;
          cn(process.version);
          const t = zo(e),
            n = () => t().then(on),
            r = (e => {
              var _e$base64Decoder, _e$base64Encoder, _e$disableHostPrefix, _e$endpointProvider, _e$logger, _e$serviceId, _e$urlParser, _e$utf8Decoder, _e$utf8Encoder;
              return {
                apiVersion: "2019-06-10",
                base64Decoder: (_e$base64Decoder = e === null || e === void 0 ? void 0 : e.base64Decoder) !== null && _e$base64Decoder !== void 0 ? _e$base64Decoder : Rs,
                base64Encoder: (_e$base64Encoder = e === null || e === void 0 ? void 0 : e.base64Encoder) !== null && _e$base64Encoder !== void 0 ? _e$base64Encoder : Ns,
                disableHostPrefix: (_e$disableHostPrefix = e === null || e === void 0 ? void 0 : e.disableHostPrefix) !== null && _e$disableHostPrefix !== void 0 ? _e$disableHostPrefix : !1,
                endpointProvider: (_e$endpointProvider = e === null || e === void 0 ? void 0 : e.endpointProvider) !== null && _e$endpointProvider !== void 0 ? _e$endpointProvider : jo,
                logger: (_e$logger = e === null || e === void 0 ? void 0 : e.logger) !== null && _e$logger !== void 0 ? _e$logger : new vt(),
                serviceId: (_e$serviceId = e === null || e === void 0 ? void 0 : e.serviceId) !== null && _e$serviceId !== void 0 ? _e$serviceId : "SSO",
                urlParser: (_e$urlParser = e === null || e === void 0 ? void 0 : e.urlParser) !== null && _e$urlParser !== void 0 ? _e$urlParser : $,
                utf8Decoder: (_e$utf8Decoder = e === null || e === void 0 ? void 0 : e.utf8Decoder) !== null && _e$utf8Decoder !== void 0 ? _e$utf8Decoder : Ce,
                utf8Encoder: (_e$utf8Encoder = e === null || e === void 0 ? void 0 : e.utf8Encoder) !== null && _e$utf8Encoder !== void 0 ? _e$utf8Encoder : $e
              };
            })(e);
          return _objectSpread(_objectSpread(_objectSpread({}, r), e), {}, {
            runtime: "node",
            defaultsMode: t,
            bodyLengthChecker: (_e$bodyLengthChecker = e === null || e === void 0 ? void 0 : e.bodyLengthChecker) !== null && _e$bodyLengthChecker !== void 0 ? _e$bodyLengthChecker : Ts,
            defaultUserAgentProvider: (_e$defaultUserAgentPr = e === null || e === void 0 ? void 0 : e.defaultUserAgentProvider) !== null && _e$defaultUserAgentPr !== void 0 ? _e$defaultUserAgentPr : Is({
              serviceId: r.serviceId,
              clientVersion: "3.279.0"
            }),
            maxAttempts: (_e$maxAttempts2 = e === null || e === void 0 ? void 0 : e.maxAttempts) !== null && _e$maxAttempts2 !== void 0 ? _e$maxAttempts2 : Jr(ne),
            region: (_e$region = e === null || e === void 0 ? void 0 : e.region) !== null && _e$region !== void 0 ? _e$region : Jr(c, l),
            requestHandler: (_e$requestHandler = e === null || e === void 0 ? void 0 : e.requestHandler) !== null && _e$requestHandler !== void 0 ? _e$requestHandler : new Ss(n),
            retryMode: (_e$retryMode = e === null || e === void 0 ? void 0 : e.retryMode) !== null && _e$retryMode !== void 0 ? _e$retryMode : Jr(_objectSpread(_objectSpread({}, se), {}, {
              default: async () => (await n()).retryMode || B
            })),
            sha256: (_e$sha = e === null || e === void 0 ? void 0 : e.sha256) !== null && _e$sha !== void 0 ? _e$sha : (0, _bind.default)(fs).call(fs, null, "sha256"),
            streamCollector: (_e$streamCollector = e === null || e === void 0 ? void 0 : e.streamCollector) !== null && _e$streamCollector !== void 0 ? _e$streamCollector : vs,
            useDualstackEndpoint: (_e$useDualstackEndpoi2 = e === null || e === void 0 ? void 0 : e.useDualstackEndpoint) !== null && _e$useDualstackEndpoi2 !== void 0 ? _e$useDualstackEndpoi2 : Jr(i),
            useFipsEndpoint: (_e$useFipsEndpoint2 = e === null || e === void 0 ? void 0 : e.useFipsEndpoint) !== null && _e$useFipsEndpoint2 !== void 0 ? _e$useFipsEndpoint2 : Jr(a)
          });
        })(e), _objectSpread(_objectSpread({}, n), {}, {
          useDualstackEndpoint: (_n$useDualstackEndpoi = n.useDualstackEndpoint) !== null && _n$useDualstackEndpoi !== void 0 ? _n$useDualstackEndpoi : !1,
          useFipsEndpoint: (_n$useFipsEndpoint = n.useFipsEndpoint) !== null && _n$useFipsEndpoint !== void 0 ? _n$useFipsEndpoint : !1,
          defaultSigningName: "awsssoportal"
        }));
        var n;
        const r = p(t),
          s = _(r),
          o = mt(re(s));
        super(o), this.config = o, this.middlewareStack.use(ye(this.config)), this.middlewareStack.use(b(this.config)), this.middlewareStack.use(F(this.config)), this.middlewareStack.use(M(this.config)), this.middlewareStack.use(q(this.config)), this.middlewareStack.use(xt(this.config));
      }
      destroy() {
        super.destroy();
      }
    }
    class Ko extends tn {
      constructor(e) {
        super(e), (0, _setPrototypeOf.default)(this, Ko.prototype);
      }
    }
    class Ho extends Ko {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidRequestException",
          $fault: "client"
        }, e)), this.name = "InvalidRequestException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Ho.prototype);
      }
    }
    class Go extends Ko {
      constructor(e) {
        super(_objectSpread({
          name: "ResourceNotFoundException",
          $fault: "client"
        }, e)), this.name = "ResourceNotFoundException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Go.prototype);
      }
    }
    class Jo extends Ko {
      constructor(e) {
        super(_objectSpread({
          name: "TooManyRequestsException",
          $fault: "client"
        }, e)), this.name = "TooManyRequestsException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Jo.prototype);
      }
    }
    class Xo extends Ko {
      constructor(e) {
        super(_objectSpread({
          name: "UnauthorizedException",
          $fault: "client"
        }, e)), this.name = "UnauthorizedException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Xo.prototype);
      }
    }
    const Zo = e => _objectSpread(_objectSpread({}, e), e.accessToken && {
        accessToken: Rt
      }),
      Yo = e => _objectSpread(_objectSpread(_objectSpread({}, e), e.secretAccessKey && {
        secretAccessKey: Rt
      }), e.sessionToken && {
        sessionToken: Rt
      }),
      Qo = e => _objectSpread(_objectSpread({}, e), e.roleCredentials && {
        roleCredentials: Yo(e.roleCredentials)
      }),
      ei = pn,
      ti = async (e, t) => {
        const n = ei({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Ho(_objectSpread({
          $metadata: oi(e)
        }, n));
        return nn(s, e.body);
      },
      ni = async (e, t) => {
        const n = ei({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Go(_objectSpread({
          $metadata: oi(e)
        }, n));
        return nn(s, e.body);
      },
      ri = async (e, t) => {
        const n = ei({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Jo(_objectSpread({
          $metadata: oi(e)
        }, n));
        return nn(s, e.body);
      },
      si = async (e, t) => {
        const n = ei({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Xo(_objectSpread({
          $metadata: oi(e)
        }, n));
        return nn(s, e.body);
      },
      oi = e => {
        var _ref6, _e$headers$xAmznReq3;
        return {
          httpStatusCode: e.statusCode,
          requestId: (_ref6 = (_e$headers$xAmznReq3 = e.headers["x-amzn-requestid"]) !== null && _e$headers$xAmznReq3 !== void 0 ? _e$headers$xAmznReq3 : e.headers["x-amzn-request-id"]) !== null && _ref6 !== void 0 ? _ref6 : e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"]
        };
      },
      ii = e => {
        var _context93, _context94;
        return !(null == e || "" === e || (0, _includes.default)(_context93 = (0, _getOwnPropertyNames.default)(e)).call(_context93, "length") && 0 == e.length || (0, _includes.default)(_context94 = (0, _getOwnPropertyNames.default)(e)).call(_context94, "size") && 0 == e.size);
      },
      ai = (e, t) => ((e, t) => ((e = new Uint8Array(), t) => e instanceof Uint8Array ? _promise.default.resolve(e) : t.streamCollector(e) || _promise.default.resolve(new Uint8Array()))(e, t).then(e => t.utf8Encoder(e)))(e, t).then(e => e.length ? JSON.parse(e) : {}),
      ci = async (e, t) => {
        var _n$message;
        const n = await ai(e, t);
        return n.message = (_n$message = n.message) !== null && _n$message !== void 0 ? _n$message : n.Message, n;
      },
      li = (e, t) => {
        var _context95;
        const n = e => {
            let t = e;
            return "number" == typeof t && (t = t.toString()), (0, _indexOf.default)(t).call(t, ",") >= 0 && (t = t.split(",")[0]), (0, _indexOf.default)(t).call(t, ":") >= 0 && (t = t.split(":")[0]), (0, _indexOf.default)(t).call(t, "#") >= 0 && (t = t.split("#")[1]), t;
          },
          r = (s = e.headers, "x-amzn-errortype", (0, _find.default)(_context95 = (0, _keys.default)(s)).call(_context95, e => e.toLowerCase() === "x-amzn-errortype".toLowerCase()));
        var s;
        return void 0 !== r ? n(e.headers[r]) : void 0 !== t.code ? n(t.code) : void 0 !== t.__type ? n(t.__type) : void 0;
      };
    class di extends kt {
      constructor(e) {
        super(), this.input = e;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
          },
          Endpoint: {
            type: "builtInParams",
            name: "endpoint"
          },
          Region: {
            type: "builtInParams",
            name: "region"
          },
          UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
          }
        };
      }
      resolveMiddleware(e, t, n) {
        this.middlewareStack.use(T(t, this.serialize, this.deserialize)), this.middlewareStack.use(C(t, di.getEndpointParameterInstructions()));
        const r = (0, _concat.default)(e).call(e, this.middlewareStack),
          {
            logger: s
          } = t,
          o = {
            logger: s,
            clientName: "SSOClient",
            commandName: "GetRoleCredentialsCommand",
            inputFilterSensitiveLog: Zo,
            outputFilterSensitiveLog: Qo
          },
          {
            requestHandler: i
          } = t;
        return r.resolve(e => i.handle(e.request, n || {}), o);
      }
      serialize(e, t) {
        return (async (e, t) => {
          const {
              hostname: n,
              protocol: r = "https",
              port: s,
              path: o
            } = await t.endpoint(),
            i = ei({}, ii, {
              "x-amz-sso_bearer_token": e.accessToken
            }),
            a = `${o !== null && o !== void 0 && (0, _endsWith.default)(o).call(o, "/") ? (0, _slice.default)(o).call(o, 0, -1) : o || ""}/federation/credentials`,
            c = ei({
              role_name: [, Ft(e.roleName, "roleName")],
              account_id: [, Ft(e.accountId, "accountId")]
            });
          return new g({
            protocol: r,
            hostname: n,
            port: s,
            method: "GET",
            headers: i,
            path: a,
            query: c,
            body: void 0
          });
        })(e, t);
      }
      deserialize(e, t) {
        return (async (e, t) => {
          if (200 !== e.statusCode && e.statusCode >= 300) return (async (e, t) => {
            const n = _objectSpread(_objectSpread({}, e), {}, {
                body: await ci(e.body, t)
              }),
              r = li(e, n.body);
            switch (r) {
              case "InvalidRequestException":
              case "com.amazonaws.sso#InvalidRequestException":
                throw await ti(n, t);
              case "ResourceNotFoundException":
              case "com.amazonaws.sso#ResourceNotFoundException":
                throw await ni(n, t);
              case "TooManyRequestsException":
              case "com.amazonaws.sso#TooManyRequestsException":
                throw await ri(n, t);
              case "UnauthorizedException":
              case "com.amazonaws.sso#UnauthorizedException":
                throw await si(n, t);
              default:
                const s = n.body;
                rn({
                  output: e,
                  parsedBody: s,
                  exceptionCtor: Ko,
                  errorCode: r
                });
            }
          })(e, t);
          const n = ei({
              $metadata: oi(e)
            }),
            r = Ft(jt(await ai(e.body, t)), "body");
          return null != r.roleCredentials && (n.roleCredentials = ((e, t) => ({
            accessKeyId: Mt(e.accessKeyId),
            expiration: Ot(e.expiration),
            secretAccessKey: Mt(e.secretAccessKey),
            sessionToken: Mt(e.sessionToken)
          }))(r.roleCredentials)), n;
        })(e, t);
      }
    }
    const ui = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
    class pi extends tn {
      constructor(e) {
        super(e), (0, _setPrototypeOf.default)(this, pi.prototype);
      }
    }
    class hi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "AccessDeniedException",
          $fault: "client"
        }, e)), this.name = "AccessDeniedException", this.$fault = "client", (0, _setPrototypeOf.default)(this, hi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class fi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "AuthorizationPendingException",
          $fault: "client"
        }, e)), this.name = "AuthorizationPendingException", this.$fault = "client", (0, _setPrototypeOf.default)(this, fi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class gi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "ExpiredTokenException",
          $fault: "client"
        }, e)), this.name = "ExpiredTokenException", this.$fault = "client", (0, _setPrototypeOf.default)(this, gi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class mi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "InternalServerException",
          $fault: "server"
        }, e)), this.name = "InternalServerException", this.$fault = "server", (0, _setPrototypeOf.default)(this, mi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class yi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidClientException",
          $fault: "client"
        }, e)), this.name = "InvalidClientException", this.$fault = "client", (0, _setPrototypeOf.default)(this, yi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class wi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidGrantException",
          $fault: "client"
        }, e)), this.name = "InvalidGrantException", this.$fault = "client", (0, _setPrototypeOf.default)(this, wi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class bi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidRequestException",
          $fault: "client"
        }, e)), this.name = "InvalidRequestException", this.$fault = "client", (0, _setPrototypeOf.default)(this, bi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class Ei extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidScopeException",
          $fault: "client"
        }, e)), this.name = "InvalidScopeException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Ei.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class Si extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "SlowDownException",
          $fault: "client"
        }, e)), this.name = "SlowDownException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Si.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class xi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "UnauthorizedClientException",
          $fault: "client"
        }, e)), this.name = "UnauthorizedClientException", this.$fault = "client", (0, _setPrototypeOf.default)(this, xi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    class vi extends pi {
      constructor(e) {
        super(_objectSpread({
          name: "UnsupportedGrantTypeException",
          $fault: "client"
        }, e)), this.name = "UnsupportedGrantTypeException", this.$fault = "client", (0, _setPrototypeOf.default)(this, vi.prototype), this.error = e.error, this.error_description = e.error_description;
      }
    }
    const Ti = e => _objectSpread({}, e),
      Ai = e => _objectSpread({}, e),
      Pi = pn,
      Ii = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new hi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      ki = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new fi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Ri = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new gi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Ni = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new mi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Ci = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new yi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Oi = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new wi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      $i = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new bi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      _i = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new Ei(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Di = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new Si(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Fi = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new xi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      ji = async (e, t) => {
        const n = Pi({}),
          r = e.body;
        null != r.error && (n.error = Mt(r.error)), null != r.error_description && (n.error_description = Mt(r.error_description));
        const s = new vi(_objectSpread({
          $metadata: Li(e)
        }, n));
        return nn(s, e.body);
      },
      Mi = (e, t) => {
        var _context96;
        return (0, _map.default)(_context96 = (0, _filter.default)(e).call(e, e => null != e)).call(_context96, e => e);
      },
      Li = e => {
        var _ref7, _e$headers$xAmznReq4;
        return {
          httpStatusCode: e.statusCode,
          requestId: (_ref7 = (_e$headers$xAmznReq4 = e.headers["x-amzn-requestid"]) !== null && _e$headers$xAmznReq4 !== void 0 ? _e$headers$xAmznReq4 : e.headers["x-amzn-request-id"]) !== null && _ref7 !== void 0 ? _ref7 : e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"]
        };
      },
      Ui = (e, t) => ((e, t) => ((e = new Uint8Array(), t) => e instanceof Uint8Array ? _promise.default.resolve(e) : t.streamCollector(e) || _promise.default.resolve(new Uint8Array()))(e, t).then(e => t.utf8Encoder(e)))(e, t).then(e => e.length ? JSON.parse(e) : {}),
      qi = async (e, t) => {
        var _n$message2;
        const n = await Ui(e, t);
        return n.message = (_n$message2 = n.message) !== null && _n$message2 !== void 0 ? _n$message2 : n.Message, n;
      },
      zi = (e, t) => {
        var _context97;
        const n = e => {
            let t = e;
            return "number" == typeof t && (t = t.toString()), (0, _indexOf.default)(t).call(t, ",") >= 0 && (t = t.split(",")[0]), (0, _indexOf.default)(t).call(t, ":") >= 0 && (t = t.split(":")[0]), (0, _indexOf.default)(t).call(t, "#") >= 0 && (t = t.split("#")[1]), t;
          },
          r = (s = e.headers, "x-amzn-errortype", (0, _find.default)(_context97 = (0, _keys.default)(s)).call(_context97, e => e.toLowerCase() === "x-amzn-errortype".toLowerCase()));
        var s;
        return void 0 !== r ? n(e.headers[r]) : void 0 !== t.code ? n(t.code) : void 0 !== t.__type ? n(t.__type) : void 0;
      };
    class Wi extends kt {
      constructor(e) {
        super(), this.input = e;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
          },
          Endpoint: {
            type: "builtInParams",
            name: "endpoint"
          },
          Region: {
            type: "builtInParams",
            name: "region"
          },
          UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
          }
        };
      }
      resolveMiddleware(e, t, n) {
        this.middlewareStack.use(T(t, this.serialize, this.deserialize)), this.middlewareStack.use(C(t, Wi.getEndpointParameterInstructions()));
        const r = (0, _concat.default)(e).call(e, this.middlewareStack),
          {
            logger: s
          } = t,
          o = {
            logger: s,
            clientName: "SSOOIDCClient",
            commandName: "CreateTokenCommand",
            inputFilterSensitiveLog: Ti,
            outputFilterSensitiveLog: Ai
          },
          {
            requestHandler: i
          } = t;
        return r.resolve(e => i.handle(e.request, n || {}), o);
      }
      serialize(e, t) {
        return (async (e, t) => {
          const {
              hostname: n,
              protocol: r = "https",
              port: s,
              path: o
            } = await t.endpoint(),
            i = `${o !== null && o !== void 0 && (0, _endsWith.default)(o).call(o, "/") ? (0, _slice.default)(o).call(o, 0, -1) : o || ""}/token`;
          let a;
          return a = (0, _stringify.default)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, null != e.clientId && {
            clientId: e.clientId
          }), null != e.clientSecret && {
            clientSecret: e.clientSecret
          }), null != e.code && {
            code: e.code
          }), null != e.deviceCode && {
            deviceCode: e.deviceCode
          }), null != e.grantType && {
            grantType: e.grantType
          }), null != e.redirectUri && {
            redirectUri: e.redirectUri
          }), null != e.refreshToken && {
            refreshToken: e.refreshToken
          }), null != e.scope && {
            scope: Mi(e.scope)
          })), new g({
            protocol: r,
            hostname: n,
            port: s,
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            path: i,
            body: a
          });
        })(e, t);
      }
      deserialize(e, t) {
        return (async (e, t) => {
          if (200 !== e.statusCode && e.statusCode >= 300) return (async (e, t) => {
            const n = _objectSpread(_objectSpread({}, e), {}, {
                body: await qi(e.body, t)
              }),
              r = zi(e, n.body);
            switch (r) {
              case "AccessDeniedException":
              case "com.amazonaws.ssooidc#AccessDeniedException":
                throw await Ii(n, t);
              case "AuthorizationPendingException":
              case "com.amazonaws.ssooidc#AuthorizationPendingException":
                throw await ki(n, t);
              case "ExpiredTokenException":
              case "com.amazonaws.ssooidc#ExpiredTokenException":
                throw await Ri(n, t);
              case "InternalServerException":
              case "com.amazonaws.ssooidc#InternalServerException":
                throw await Ni(n, t);
              case "InvalidClientException":
              case "com.amazonaws.ssooidc#InvalidClientException":
                throw await Ci(n, t);
              case "InvalidGrantException":
              case "com.amazonaws.ssooidc#InvalidGrantException":
                throw await Oi(n, t);
              case "InvalidRequestException":
              case "com.amazonaws.ssooidc#InvalidRequestException":
                throw await $i(n, t);
              case "InvalidScopeException":
              case "com.amazonaws.ssooidc#InvalidScopeException":
                throw await _i(n, t);
              case "SlowDownException":
              case "com.amazonaws.ssooidc#SlowDownException":
                throw await Di(n, t);
              case "UnauthorizedClientException":
              case "com.amazonaws.ssooidc#UnauthorizedClientException":
                throw await Fi(n, t);
              case "UnsupportedGrantTypeException":
              case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                throw await ji(n, t);
              default:
                const s = n.body;
                rn({
                  output: e,
                  parsedBody: s,
                  exceptionCtor: pi,
                  errorCode: r
                });
            }
          })(e, t);
          const n = Pi({
              $metadata: Li(e)
            }),
            r = Ft(jt(await Ui(e.body, t)), "body");
          return null != r.accessToken && (n.accessToken = Mt(r.accessToken)), null != r.expiresIn && (n.expiresIn = $t(r.expiresIn)), null != r.idToken && (n.idToken = Mt(r.idToken)), null != r.refreshToken && (n.refreshToken = Mt(r.refreshToken)), null != r.tokenType && (n.tokenType = Mt(r.tokenType)), n;
        })(e, t);
      }
    }
    const Bi = "required",
      Vi = "fn",
      Ki = "argv",
      Hi = "ref",
      Gi = "PartitionResult",
      Ji = "tree",
      Xi = "error",
      Zi = "endpoint",
      Yi = {
        [Bi]: !1,
        type: "String"
      },
      Qi = {
        [Bi]: !0,
        default: !1,
        type: "Boolean"
      },
      ea = {
        [Hi]: "Endpoint"
      },
      ta = {
        [Vi]: "booleanEquals",
        [Ki]: [{
          [Hi]: "UseFIPS"
        }, !0]
      },
      na = {
        [Vi]: "booleanEquals",
        [Ki]: [{
          [Hi]: "UseDualStack"
        }, !0]
      },
      ra = {},
      sa = {
        [Vi]: "booleanEquals",
        [Ki]: [!0, {
          [Vi]: "getAttr",
          [Ki]: [{
            [Hi]: Gi
          }, "supportsFIPS"]
        }]
      },
      oa = {
        [Vi]: "booleanEquals",
        [Ki]: [!0, {
          [Vi]: "getAttr",
          [Ki]: [{
            [Hi]: Gi
          }, "supportsDualStack"]
        }]
      },
      ia = [ea],
      aa = [ta],
      ca = [na],
      la = {
        version: "1.0",
        parameters: {
          Region: Yi,
          UseDualStack: Qi,
          UseFIPS: Qi,
          Endpoint: Yi
        },
        rules: [{
          conditions: [{
            [Vi]: "aws.partition",
            [Ki]: [{
              [Hi]: "Region"
            }],
            assign: Gi
          }],
          type: Ji,
          rules: [{
            conditions: [{
              [Vi]: "isSet",
              [Ki]: ia
            }, {
              [Vi]: "parseURL",
              [Ki]: ia,
              assign: "url"
            }],
            type: Ji,
            rules: [{
              conditions: aa,
              error: "Invalid Configuration: FIPS and custom endpoint are not supported",
              type: Xi
            }, {
              type: Ji,
              rules: [{
                conditions: ca,
                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: Xi
              }, {
                endpoint: {
                  url: ea,
                  properties: ra,
                  headers: ra
                },
                type: Zi
              }]
            }]
          }, {
            conditions: [ta, na],
            type: Ji,
            rules: [{
              conditions: [sa, oa],
              type: Ji,
              rules: [{
                endpoint: {
                  url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: ra,
                  headers: ra
                },
                type: Zi
              }]
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: Xi
            }]
          }, {
            conditions: aa,
            type: Ji,
            rules: [{
              conditions: [sa],
              type: Ji,
              rules: [{
                type: Ji,
                rules: [{
                  endpoint: {
                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                    properties: ra,
                    headers: ra
                  },
                  type: Zi
                }]
              }]
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: Xi
            }]
          }, {
            conditions: ca,
            type: Ji,
            rules: [{
              conditions: [oa],
              type: Ji,
              rules: [{
                endpoint: {
                  url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: ra,
                  headers: ra
                },
                type: Zi
              }]
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: Xi
            }]
          }, {
            endpoint: {
              url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
              properties: ra,
              headers: ra
            },
            type: Zi
          }]
        }]
      },
      da = (e, t = {}) => mo(la, {
        endpointParams: e,
        logger: t.logger
      });
    class ua extends It {
      constructor(e) {
        var _n$useDualstackEndpoi2, _n$useFipsEndpoint2;
        const t = (n = (e => {
          var _e$bodyLengthChecker2, _e$defaultUserAgentPr2, _e$maxAttempts3, _e$region2, _e$requestHandler2, _e$retryMode2, _e$sha2, _e$streamCollector2, _e$useDualstackEndpoi3, _e$useFipsEndpoint3;
          cn(process.version);
          const t = zo(e),
            n = () => t().then(on),
            r = (e => {
              var _e$base64Decoder2, _e$base64Encoder2, _e$disableHostPrefix2, _e$endpointProvider2, _e$logger2, _e$serviceId2, _e$urlParser2, _e$utf8Decoder2, _e$utf8Encoder2;
              return {
                apiVersion: "2019-06-10",
                base64Decoder: (_e$base64Decoder2 = e === null || e === void 0 ? void 0 : e.base64Decoder) !== null && _e$base64Decoder2 !== void 0 ? _e$base64Decoder2 : Rs,
                base64Encoder: (_e$base64Encoder2 = e === null || e === void 0 ? void 0 : e.base64Encoder) !== null && _e$base64Encoder2 !== void 0 ? _e$base64Encoder2 : Ns,
                disableHostPrefix: (_e$disableHostPrefix2 = e === null || e === void 0 ? void 0 : e.disableHostPrefix) !== null && _e$disableHostPrefix2 !== void 0 ? _e$disableHostPrefix2 : !1,
                endpointProvider: (_e$endpointProvider2 = e === null || e === void 0 ? void 0 : e.endpointProvider) !== null && _e$endpointProvider2 !== void 0 ? _e$endpointProvider2 : da,
                logger: (_e$logger2 = e === null || e === void 0 ? void 0 : e.logger) !== null && _e$logger2 !== void 0 ? _e$logger2 : new vt(),
                serviceId: (_e$serviceId2 = e === null || e === void 0 ? void 0 : e.serviceId) !== null && _e$serviceId2 !== void 0 ? _e$serviceId2 : "SSO OIDC",
                urlParser: (_e$urlParser2 = e === null || e === void 0 ? void 0 : e.urlParser) !== null && _e$urlParser2 !== void 0 ? _e$urlParser2 : $,
                utf8Decoder: (_e$utf8Decoder2 = e === null || e === void 0 ? void 0 : e.utf8Decoder) !== null && _e$utf8Decoder2 !== void 0 ? _e$utf8Decoder2 : Ce,
                utf8Encoder: (_e$utf8Encoder2 = e === null || e === void 0 ? void 0 : e.utf8Encoder) !== null && _e$utf8Encoder2 !== void 0 ? _e$utf8Encoder2 : $e
              };
            })(e);
          return _objectSpread(_objectSpread(_objectSpread({}, r), e), {}, {
            runtime: "node",
            defaultsMode: t,
            bodyLengthChecker: (_e$bodyLengthChecker2 = e === null || e === void 0 ? void 0 : e.bodyLengthChecker) !== null && _e$bodyLengthChecker2 !== void 0 ? _e$bodyLengthChecker2 : Ts,
            defaultUserAgentProvider: (_e$defaultUserAgentPr2 = e === null || e === void 0 ? void 0 : e.defaultUserAgentProvider) !== null && _e$defaultUserAgentPr2 !== void 0 ? _e$defaultUserAgentPr2 : Is({
              serviceId: r.serviceId,
              clientVersion: "3.279.0"
            }),
            maxAttempts: (_e$maxAttempts3 = e === null || e === void 0 ? void 0 : e.maxAttempts) !== null && _e$maxAttempts3 !== void 0 ? _e$maxAttempts3 : Jr(ne),
            region: (_e$region2 = e === null || e === void 0 ? void 0 : e.region) !== null && _e$region2 !== void 0 ? _e$region2 : Jr(c, l),
            requestHandler: (_e$requestHandler2 = e === null || e === void 0 ? void 0 : e.requestHandler) !== null && _e$requestHandler2 !== void 0 ? _e$requestHandler2 : new Ss(n),
            retryMode: (_e$retryMode2 = e === null || e === void 0 ? void 0 : e.retryMode) !== null && _e$retryMode2 !== void 0 ? _e$retryMode2 : Jr(_objectSpread(_objectSpread({}, se), {}, {
              default: async () => (await n()).retryMode || B
            })),
            sha256: (_e$sha2 = e === null || e === void 0 ? void 0 : e.sha256) !== null && _e$sha2 !== void 0 ? _e$sha2 : (0, _bind.default)(fs).call(fs, null, "sha256"),
            streamCollector: (_e$streamCollector2 = e === null || e === void 0 ? void 0 : e.streamCollector) !== null && _e$streamCollector2 !== void 0 ? _e$streamCollector2 : vs,
            useDualstackEndpoint: (_e$useDualstackEndpoi3 = e === null || e === void 0 ? void 0 : e.useDualstackEndpoint) !== null && _e$useDualstackEndpoi3 !== void 0 ? _e$useDualstackEndpoi3 : Jr(i),
            useFipsEndpoint: (_e$useFipsEndpoint3 = e === null || e === void 0 ? void 0 : e.useFipsEndpoint) !== null && _e$useFipsEndpoint3 !== void 0 ? _e$useFipsEndpoint3 : Jr(a)
          });
        })(e), _objectSpread(_objectSpread({}, n), {}, {
          useDualstackEndpoint: (_n$useDualstackEndpoi2 = n.useDualstackEndpoint) !== null && _n$useDualstackEndpoi2 !== void 0 ? _n$useDualstackEndpoi2 : !1,
          useFipsEndpoint: (_n$useFipsEndpoint2 = n.useFipsEndpoint) !== null && _n$useFipsEndpoint2 !== void 0 ? _n$useFipsEndpoint2 : !1,
          defaultSigningName: "awsssooidc"
        }));
        var n;
        const r = p(t),
          s = _(r),
          o = mt(re(s));
        super(o), this.config = o, this.middlewareStack.use(ye(this.config)), this.middlewareStack.use(b(this.config)), this.middlewareStack.use(F(this.config)), this.middlewareStack.use(M(this.config)), this.middlewareStack.use(q(this.config)), this.middlewareStack.use(xt(this.config));
      }
      destroy() {
        super.destroy();
      }
    }
    const pa = {},
      ha = e => {
        if (e.expiration && e.expiration.getTime() < (0, _now.default)()) throw new Se(`Token is expired. ${ui}`, !1);
      },
      fa = (e, t, n = !1) => {
        if (void 0 === t) throw new Se(`Value not present for '${e}' in SSO Token${n ? ". Cannot refresh" : ""}. ${ui}`, !1);
      },
      {
        writeFile: ga
      } = gr.promises,
      ma = new Date(0),
      ya = (e = {}) => async () => {
        const t = await $r(e),
          n = hr(e),
          r = t[n];
        if (!r) throw new Se(`Profile '${n}' could not be found in shared credentials file.`, !1);
        if (!r.sso_session) throw new Se(`Profile '${n}' is missing required property 'sso_session'.`);
        const s = r.sso_session,
          o = (await Or(e))[s];
        if (!o) throw new Se(`Sso session '${s}' could not be found in shared credentials file.`, !1);
        for (const e of ["sso_start_url", "sso_region"]) if (!o[e]) throw new Se(`Sso session '${s}' is missing required property '${e}'.`, !1);
        o.sso_start_url;
        const i = o.sso_region;
        let a;
        try {
          a = await yr(s);
        } catch (e) {
          throw new Se(`The SSO session token associated with profile=${n} was not found or is invalid. ${ui}`, !1);
        }
        fa("accessToken", a.accessToken), fa("expiresAt", a.expiresAt);
        const {
            accessToken: c,
            expiresAt: l
          } = a,
          d = {
            token: c,
            expiration: new Date(l)
          };
        if (d.expiration.getTime() - (0, _now.default)() > 3e5) return d;
        if ((0, _now.default)() - ma.getTime() < 3e4) return ha(d), d;
        fa("clientId", a.clientId, !0), fa("clientSecret", a.clientSecret, !0), fa("refreshToken", a.refreshToken, !0);
        try {
          ma.setTime((0, _now.default)());
          const e = await ((e, t) => {
            const n = (e => {
              if (pa[e]) return pa[e];
              const t = new ua({
                region: e
              });
              return pa[e] = t, t;
            })(t);
            return n.send(new Wi({
              clientId: e.clientId,
              clientSecret: e.clientSecret,
              refreshToken: e.refreshToken,
              grantType: "refresh_token"
            }));
          })(a, i);
          fa("accessToken", e.accessToken), fa("expiresIn", e.expiresIn);
          const t = new Date((0, _now.default)() + 1e3 * e.expiresIn);
          try {
            await ((e, t) => {
              const n = fr(e),
                r = (0, _stringify.default)(t, null, 2);
              return ga(n, r);
            })(s, _objectSpread(_objectSpread({}, a), {}, {
              accessToken: e.accessToken,
              expiresAt: t.toISOString(),
              refreshToken: e.refreshToken
            }));
          } catch (e) {}
          return {
            token: e.accessToken,
            expiration: t
          };
        } catch (e) {
          return ha(d), d;
        }
      },
      wa = !1,
      ba = async ({
        ssoStartUrl: e,
        ssoSession: t,
        ssoAccountId: n,
        ssoRegion: r,
        ssoRoleName: s,
        ssoClient: o,
        profile: i
      }) => {
        let a;
        const c = "To refresh this SSO session run aws sso login with the corresponding profile.";
        if (t) try {
          const e = await ya({
            profile: i
          })();
          a = {
            accessToken: e.token,
            expiresAt: new Date(e.expiration).toISOString()
          };
        } catch (e) {
          throw new Ee(e.message, wa);
        } else try {
          a = await yr(e);
        } catch (e) {
          throw new Ee(`The SSO session associated with this profile is invalid. ${c}`, wa);
        }
        if (new Date(a.expiresAt).getTime() - (0, _now.default)() <= 9e5) throw new Ee(`The SSO session associated with this profile has expired. ${c}`, wa);
        const {
            accessToken: l
          } = a,
          d = o || new Vo({
            region: r
          });
        let u;
        try {
          u = await d.send(new di({
            accountId: n,
            roleName: s,
            accessToken: l
          }));
        } catch (e) {
          throw Ee.from(e, wa);
        }
        const {
          roleCredentials: {
            accessKeyId: p,
            secretAccessKey: h,
            sessionToken: f,
            expiration: g
          } = {}
        } = u;
        if (!(p && h && f && g)) throw new Ee("SSO returns an invalid temporary credential.", wa);
        return {
          accessKeyId: p,
          secretAccessKey: h,
          sessionToken: f,
          expiration: new Date(g)
        };
      },
      Ea = e => {
        const {
          sso_start_url: t,
          sso_account_id: n,
          sso_region: r,
          sso_role_name: s
        } = e;
        if (!(t && n && r && s)) throw new Ee(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${(0, _keys.default)(e).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, !1);
        return e;
      },
      Sa = (e = {}) => async () => {
        const {
            ssoStartUrl: t,
            ssoAccountId: n,
            ssoRegion: r,
            ssoRoleName: s,
            ssoClient: o,
            ssoSession: i
          } = e,
          a = hr(e);
        if (t || n || r || s || i) {
          if (t && n && r && s) return ba({
            ssoStartUrl: t,
            ssoSession: i,
            ssoAccountId: n,
            ssoRegion: r,
            ssoRoleName: s,
            ssoClient: o,
            profile: a
          });
          throw new Ee('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
        }
        {
          const n = (await $r(e))[a];
          if (!n) throw new Ee(`Profile ${a} was not found.`);
          if (!hs(n)) throw new Ee(`Profile ${a} is not configured with SSO credentials.`);
          if (n !== null && n !== void 0 && n.sso_session) {
            const s = (await Or(e))[n.sso_session],
              o = ` configurations in profile ${a} and sso-session ${n.sso_session}`;
            if (r && r !== s.sso_region) throw new Ee("Conflicting SSO region" + o, !1);
            if (t && t !== s.sso_start_url) throw new Ee("Conflicting SSO start_url" + o, !1);
            n.sso_region = s.sso_region, n.sso_start_url = s.sso_start_url;
          }
          const {
            sso_start_url: s,
            sso_account_id: i,
            sso_region: c,
            sso_role_name: l,
            sso_session: d
          } = Ea(n);
          return ba({
            ssoStartUrl: s,
            ssoSession: d,
            ssoAccountId: i,
            ssoRegion: c,
            ssoRoleName: l,
            ssoClient: o,
            profile: a
          });
        }
      },
      xa = e => {
        var _context98;
        return Boolean(e) && "object" == typeof e && "string" == typeof e.aws_access_key_id && "string" == typeof e.aws_secret_access_key && (0, _indexOf.default)(_context98 = ["undefined", "string"]).call(_context98, typeof e.aws_session_token) > -1;
      },
      va = e => _promise.default.resolve({
        accessKeyId: e.aws_access_key_id,
        secretAccessKey: e.aws_secret_access_key,
        sessionToken: e.aws_session_token
      }),
      Ta = (e = {}) => async () => Aa(e),
      Aa = e => {
        var _e$webIdentityTokenFi, _e$roleArn, _e$roleSessionName;
        const t = (_e$webIdentityTokenFi = e === null || e === void 0 ? void 0 : e.webIdentityTokenFile) !== null && _e$webIdentityTokenFi !== void 0 ? _e$webIdentityTokenFi : process.env.AWS_WEB_IDENTITY_TOKEN_FILE,
          n = (_e$roleArn = e === null || e === void 0 ? void 0 : e.roleArn) !== null && _e$roleArn !== void 0 ? _e$roleArn : process.env.AWS_ROLE_ARN,
          r = (_e$roleSessionName = e === null || e === void 0 ? void 0 : e.roleSessionName) !== null && _e$roleSessionName !== void 0 ? _e$roleSessionName : process.env.AWS_ROLE_SESSION_NAME;
        if (!t || !n) throw new Ee("Web identity configuration not specified");
        return (e => () => {
          const {
            roleArn: t,
            roleSessionName: n,
            webIdentityToken: r,
            providerId: s,
            policyArns: o,
            policy: i,
            durationSeconds: a,
            roleAssumerWithWebIdentity: c
          } = e;
          if (!c) throw new Ee(`Role Arn '${t}' needs to be assumed with web identity, but no role assumption callback was provided.`, !1);
          return c({
            RoleArn: t,
            RoleSessionName: n !== null && n !== void 0 ? n : `aws-sdk-js-session-${(0, _now.default)()}`,
            WebIdentityToken: r,
            ProviderId: s,
            PolicyArns: o,
            Policy: i,
            DurationSeconds: a
          });
        })(_objectSpread(_objectSpread({}, e), {}, {
          webIdentityToken: (0, gr.readFileSync)(t, {
            encoding: "ascii"
          }),
          roleArn: n,
          roleSessionName: r
        }))();
      },
      Pa = async (e, t, n, r = {}) => {
        var _context99, _context100, _context101;
        const s = t[e];
        if ((0, _keys.default)(r).length > 0 && xa(s)) return va(s);
        if (o = s, Boolean(o) && "object" == typeof o && "string" == typeof o.role_arn && (0, _indexOf.default)(_context99 = ["undefined", "string"]).call(_context99, typeof o.role_session_name) > -1 && (0, _indexOf.default)(_context100 = ["undefined", "string"]).call(_context100, typeof o.external_id) > -1 && (0, _indexOf.default)(_context101 = ["undefined", "string"]).call(_context101, typeof o.mfa_serial) > -1 && ((e => "string" == typeof e.source_profile && void 0 === e.credential_source)(o) || (e => "string" == typeof e.credential_source && void 0 === e.source_profile)(o))) return (async (e, t, n, r = {}) => {
          const s = t[e];
          if (!n.roleAssumer) throw new Ee(`Profile ${e} requires a role to be assumed, but no role assumption callback was provided.`, !1);
          const {
            source_profile: o
          } = s;
          if (o && o in r) throw new Ee(`Detected a cycle attempting to resolve credentials for profile ${hr(n)}. Profiles visited: ` + (0, _keys.default)(r).join(", "), !1);
          const i = o ? Pa(o, t, n, _objectSpread(_objectSpread({}, r), {}, {
              [o]: !0
            })) : ((e, t) => {
              const n = {
                EcsContainer: Br,
                Ec2InstanceMetadata: os,
                Environment: cr
              };
              if (e in n) return n[e]();
              throw new Ee(`Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`);
            })(s.credential_source, e)(),
            a = {
              RoleArn: s.role_arn,
              RoleSessionName: s.role_session_name || `aws-sdk-js-${(0, _now.default)()}`,
              ExternalId: s.external_id
            },
            {
              mfa_serial: c
            } = s;
          if (c) {
            if (!n.mfaCodeProvider) throw new Ee(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`, !1);
            a.SerialNumber = c, a.TokenCode = await n.mfaCodeProvider(c);
          }
          const l = await i;
          return n.roleAssumer(l, a);
        })(e, t, n, r);
        var o;
        if (xa(s)) return va(s);
        if ((e => {
          var _context102;
          return Boolean(e) && "object" == typeof e && "string" == typeof e.web_identity_token_file && "string" == typeof e.role_arn && (0, _indexOf.default)(_context102 = ["undefined", "string"]).call(_context102, typeof e.role_session_name) > -1;
        })(s)) return (async (e, t) => Ta({
          webIdentityTokenFile: e.web_identity_token_file,
          roleArn: e.role_arn,
          roleSessionName: e.role_session_name,
          roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity
        })())(s, n);
        if ((e => Boolean(e) && "object" == typeof e && "string" == typeof e.credential_process)(s)) return (async (e, t) => ps(_objectSpread(_objectSpread({}, e), {}, {
          profile: t
        }))())(n, e);
        if (hs(s)) return (e => {
          const {
            sso_start_url: t,
            sso_account_id: n,
            sso_session: r,
            sso_region: s,
            sso_role_name: o
          } = Ea(e);
          return Sa({
            ssoStartUrl: t,
            ssoAccountId: n,
            ssoSession: r,
            ssoRegion: s,
            ssoRoleName: o
          })();
        })(s);
        throw new Ee(`Profile ${e} could not be found or parsed in shared credentials file.`);
      },
      Ia = (e = {}) => ve(xe(...(e.profile || process.env[pr] ? [] : [cr()]), Sa(e), ((e = {}) => async () => {
        const t = await $r(e);
        return Pa(hr(e), t, e);
      })(e), ps(e), Ta(e), (e => process.env[zr] || process.env[qr] ? Br(e) : process.env.AWS_EC2_METADATA_DISABLED ? async () => {
        throw new Ee("EC2 Instance Metadata Service access disabled");
      } : os(e))(e), async () => {
        throw new Ee("Could not load credentials from any providers", !1);
      }), e => void 0 !== e.expiration && e.expiration.getTime() - (0, _now.default)() < 3e5, e => void 0 !== e.expiration),
      ka = "required",
      Ra = "type",
      Na = "fn",
      Ca = "argv",
      Oa = "ref",
      $a = "properties",
      _a = "headers",
      Da = "PartitionResult",
      Fa = "tree",
      ja = "booleanEquals",
      Ma = "stringEquals",
      La = "sigv4",
      Ua = "us-east-1",
      qa = "endpoint",
      za = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
      Wa = "error",
      Ba = "getAttr",
      Va = {
        [ka]: !1,
        [Ra]: "String"
      },
      Ka = {
        [ka]: !0,
        default: !1,
        [Ra]: "Boolean"
      },
      Ha = {
        [Oa]: "Region"
      },
      Ga = {
        [Oa]: "UseFIPS"
      },
      Ja = {
        [Oa]: "UseDualStack"
      },
      Xa = {
        [Na]: "isSet",
        [Ca]: [{
          [Oa]: "Endpoint"
        }]
      },
      Za = {
        [Oa]: "Endpoint"
      },
      Ya = {
        url: "https://sts.amazonaws.com",
        [$a]: {
          authSchemes: [{
            name: La,
            signingRegion: Ua,
            signingName: "sts"
          }]
        },
        [_a]: {}
      },
      Qa = {},
      ec = {
        conditions: [{
          [Na]: Ma,
          [Ca]: [Ha, "aws-global"]
        }],
        [qa]: Ya,
        [Ra]: qa
      },
      tc = {
        [Na]: ja,
        [Ca]: [Ga, !0]
      },
      nc = {
        [Na]: ja,
        [Ca]: [Ja, !0]
      },
      rc = {
        [Na]: ja,
        [Ca]: [!0, {
          [Na]: Ba,
          [Ca]: [{
            [Oa]: Da
          }, "supportsFIPS"]
        }]
      },
      sc = {
        [Oa]: Da
      },
      oc = {
        [Na]: ja,
        [Ca]: [!0, {
          [Na]: Ba,
          [Ca]: [sc, "supportsDualStack"]
        }]
      },
      ic = {
        url: za,
        [$a]: {},
        [_a]: {}
      },
      ac = [tc],
      cc = [nc],
      lc = {
        version: "1.0",
        parameters: {
          Region: Va,
          UseDualStack: Ka,
          UseFIPS: Ka,
          Endpoint: Va,
          UseGlobalEndpoint: Ka
        },
        rules: [{
          conditions: [{
            [Na]: "aws.partition",
            [Ca]: [Ha],
            assign: Da
          }],
          [Ra]: Fa,
          rules: [{
            conditions: [{
              [Na]: ja,
              [Ca]: [{
                [Oa]: "UseGlobalEndpoint"
              }, !0]
            }, {
              [Na]: ja,
              [Ca]: [Ga, !1]
            }, {
              [Na]: ja,
              [Ca]: [Ja, !1]
            }, {
              [Na]: "not",
              [Ca]: [Xa]
            }],
            [Ra]: Fa,
            rules: [{
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "ap-northeast-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "ap-south-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "ap-southeast-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "ap-southeast-2"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, ec, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "ca-central-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "eu-central-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "eu-north-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "eu-west-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "eu-west-2"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "eu-west-3"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "sa-east-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, Ua]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "us-east-2"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "us-west-1"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              conditions: [{
                [Na]: Ma,
                [Ca]: [Ha, "us-west-2"]
              }],
              endpoint: Ya,
              [Ra]: qa
            }, {
              endpoint: {
                url: za,
                [$a]: {
                  authSchemes: [{
                    name: La,
                    signingRegion: "{Region}",
                    signingName: "sts"
                  }]
                },
                [_a]: Qa
              },
              [Ra]: qa
            }]
          }, {
            conditions: [Xa, {
              [Na]: "parseURL",
              [Ca]: [Za],
              assign: "url"
            }],
            [Ra]: Fa,
            rules: [{
              conditions: ac,
              error: "Invalid Configuration: FIPS and custom endpoint are not supported",
              [Ra]: Wa
            }, {
              [Ra]: Fa,
              rules: [{
                conditions: cc,
                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                [Ra]: Wa
              }, {
                endpoint: {
                  url: Za,
                  [$a]: Qa,
                  [_a]: Qa
                },
                [Ra]: qa
              }]
            }]
          }, {
            conditions: [tc, nc],
            [Ra]: Fa,
            rules: [{
              conditions: [rc, oc],
              [Ra]: Fa,
              rules: [{
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  [$a]: Qa,
                  [_a]: Qa
                },
                [Ra]: qa
              }]
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              [Ra]: Wa
            }]
          }, {
            conditions: ac,
            [Ra]: Fa,
            rules: [{
              conditions: [rc],
              [Ra]: Fa,
              rules: [{
                [Ra]: Fa,
                rules: [{
                  conditions: [{
                    [Na]: Ma,
                    [Ca]: ["aws-us-gov", {
                      [Na]: Ba,
                      [Ca]: [sc, "name"]
                    }]
                  }],
                  endpoint: ic,
                  [Ra]: qa
                }, {
                  endpoint: {
                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                    [$a]: Qa,
                    [_a]: Qa
                  },
                  [Ra]: qa
                }]
              }]
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              [Ra]: Wa
            }]
          }, {
            conditions: cc,
            [Ra]: Fa,
            rules: [{
              conditions: [oc],
              [Ra]: Fa,
              rules: [{
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  [$a]: Qa,
                  [_a]: Qa
                },
                [Ra]: qa
              }]
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              [Ra]: Wa
            }]
          }, {
            [Ra]: Fa,
            rules: [ec, {
              endpoint: ic,
              [Ra]: qa
            }]
          }]
        }]
      },
      dc = (e, t = {}) => mo(lc, {
        endpointParams: e,
        logger: t.logger
      });
    class uc extends It {
      constructor(e) {
        var _n$useDualstackEndpoi3, _n$useFipsEndpoint3, _n$useGlobalEndpoint;
        const t = (n = (e => {
          var _e$bodyLengthChecker3, _e$credentialDefaultP, _e$defaultUserAgentPr3, _e$maxAttempts4, _e$region3, _e$requestHandler3, _e$retryMode3, _e$sha3, _e$streamCollector3, _e$useDualstackEndpoi4, _e$useFipsEndpoint4;
          cn(process.version);
          const t = zo(e),
            n = () => t().then(on),
            r = (e => {
              var _e$base64Decoder3, _e$base64Encoder3, _e$disableHostPrefix3, _e$endpointProvider3, _e$logger3, _e$serviceId3, _e$urlParser3, _e$utf8Decoder3, _e$utf8Encoder3;
              return {
                apiVersion: "2011-06-15",
                base64Decoder: (_e$base64Decoder3 = e === null || e === void 0 ? void 0 : e.base64Decoder) !== null && _e$base64Decoder3 !== void 0 ? _e$base64Decoder3 : Rs,
                base64Encoder: (_e$base64Encoder3 = e === null || e === void 0 ? void 0 : e.base64Encoder) !== null && _e$base64Encoder3 !== void 0 ? _e$base64Encoder3 : Ns,
                disableHostPrefix: (_e$disableHostPrefix3 = e === null || e === void 0 ? void 0 : e.disableHostPrefix) !== null && _e$disableHostPrefix3 !== void 0 ? _e$disableHostPrefix3 : !1,
                endpointProvider: (_e$endpointProvider3 = e === null || e === void 0 ? void 0 : e.endpointProvider) !== null && _e$endpointProvider3 !== void 0 ? _e$endpointProvider3 : dc,
                logger: (_e$logger3 = e === null || e === void 0 ? void 0 : e.logger) !== null && _e$logger3 !== void 0 ? _e$logger3 : new vt(),
                serviceId: (_e$serviceId3 = e === null || e === void 0 ? void 0 : e.serviceId) !== null && _e$serviceId3 !== void 0 ? _e$serviceId3 : "STS",
                urlParser: (_e$urlParser3 = e === null || e === void 0 ? void 0 : e.urlParser) !== null && _e$urlParser3 !== void 0 ? _e$urlParser3 : $,
                utf8Decoder: (_e$utf8Decoder3 = e === null || e === void 0 ? void 0 : e.utf8Decoder) !== null && _e$utf8Decoder3 !== void 0 ? _e$utf8Decoder3 : Ce,
                utf8Encoder: (_e$utf8Encoder3 = e === null || e === void 0 ? void 0 : e.utf8Encoder) !== null && _e$utf8Encoder3 !== void 0 ? _e$utf8Encoder3 : $e
              };
            })(e);
          return _objectSpread(_objectSpread(_objectSpread({}, r), e), {}, {
            runtime: "node",
            defaultsMode: t,
            bodyLengthChecker: (_e$bodyLengthChecker3 = e === null || e === void 0 ? void 0 : e.bodyLengthChecker) !== null && _e$bodyLengthChecker3 !== void 0 ? _e$bodyLengthChecker3 : Ts,
            credentialDefaultProvider: (_e$credentialDefaultP = e === null || e === void 0 ? void 0 : e.credentialDefaultProvider) !== null && _e$credentialDefaultP !== void 0 ? _e$credentialDefaultP : (s = Ia, e => s(_objectSpread({
              roleAssumer: ir(e, e.stsClientCtor),
              roleAssumerWithWebIdentity: ar(e, e.stsClientCtor)
            }, e))),
            defaultUserAgentProvider: (_e$defaultUserAgentPr3 = e === null || e === void 0 ? void 0 : e.defaultUserAgentProvider) !== null && _e$defaultUserAgentPr3 !== void 0 ? _e$defaultUserAgentPr3 : Is({
              serviceId: r.serviceId,
              clientVersion: "3.279.0"
            }),
            maxAttempts: (_e$maxAttempts4 = e === null || e === void 0 ? void 0 : e.maxAttempts) !== null && _e$maxAttempts4 !== void 0 ? _e$maxAttempts4 : Jr(ne),
            region: (_e$region3 = e === null || e === void 0 ? void 0 : e.region) !== null && _e$region3 !== void 0 ? _e$region3 : Jr(c, l),
            requestHandler: (_e$requestHandler3 = e === null || e === void 0 ? void 0 : e.requestHandler) !== null && _e$requestHandler3 !== void 0 ? _e$requestHandler3 : new Ss(n),
            retryMode: (_e$retryMode3 = e === null || e === void 0 ? void 0 : e.retryMode) !== null && _e$retryMode3 !== void 0 ? _e$retryMode3 : Jr(_objectSpread(_objectSpread({}, se), {}, {
              default: async () => (await n()).retryMode || B
            })),
            sha256: (_e$sha3 = e === null || e === void 0 ? void 0 : e.sha256) !== null && _e$sha3 !== void 0 ? _e$sha3 : (0, _bind.default)(fs).call(fs, null, "sha256"),
            streamCollector: (_e$streamCollector3 = e === null || e === void 0 ? void 0 : e.streamCollector) !== null && _e$streamCollector3 !== void 0 ? _e$streamCollector3 : vs,
            useDualstackEndpoint: (_e$useDualstackEndpoi4 = e === null || e === void 0 ? void 0 : e.useDualstackEndpoint) !== null && _e$useDualstackEndpoi4 !== void 0 ? _e$useDualstackEndpoi4 : Jr(i),
            useFipsEndpoint: (_e$useFipsEndpoint4 = e === null || e === void 0 ? void 0 : e.useFipsEndpoint) !== null && _e$useFipsEndpoint4 !== void 0 ? _e$useFipsEndpoint4 : Jr(a)
          });
          var s;
        })(e), _objectSpread(_objectSpread({}, n), {}, {
          useDualstackEndpoint: (_n$useDualstackEndpoi3 = n.useDualstackEndpoint) !== null && _n$useDualstackEndpoi3 !== void 0 ? _n$useDualstackEndpoi3 : !1,
          useFipsEndpoint: (_n$useFipsEndpoint3 = n.useFipsEndpoint) !== null && _n$useFipsEndpoint3 !== void 0 ? _n$useFipsEndpoint3 : !1,
          useGlobalEndpoint: (_n$useGlobalEndpoint = n.useGlobalEndpoint) !== null && _n$useGlobalEndpoint !== void 0 ? _n$useGlobalEndpoint : !1,
          defaultSigningName: "sts"
        }));
        var n;
        const r = p(t),
          s = _(r),
          o = mt(((e, {
            stsClientCtor: t
          }) => lt(_objectSpread(_objectSpread({}, e), {}, {
            stsClientCtor: t
          })))(re(s), {
            stsClientCtor: uc
          }));
        super(o), this.config = o, this.middlewareStack.use(ye(this.config)), this.middlewareStack.use(b(this.config)), this.middlewareStack.use(F(this.config)), this.middlewareStack.use(M(this.config)), this.middlewareStack.use(q(this.config)), this.middlewareStack.use(xt(this.config));
      }
      destroy() {
        super.destroy();
      }
    }
    const pc = (e, t) => t ? class extends e {
        constructor(e) {
          super(e);
          for (const e of t) this.middlewareStack.use(e);
        }
      } : e,
      hc = (e = {}, t) => ir(e, pc(uc, t)),
      fc = (e = {}, t) => ar(e, pc(uc, t)),
      gc = "The stream has already been transformed.",
      mc = e => {
        var _e$__proto__, _e$__proto__$construc;
        if (!(e instanceof bs.Readable)) throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${(e === null || e === void 0 ? void 0 : (_e$__proto__ = e.__proto__) === null || _e$__proto__ === void 0 ? void 0 : (_e$__proto__$construc = _e$__proto__.constructor) === null || _e$__proto__$construc === void 0 ? void 0 : _e$__proto__$construc.name) || e}`);
        let t = !1;
        const n = async () => {
          if (t) throw new Error(gc);
          return t = !0, await vs(e);
        };
        return (0, _assign.default)(e, {
          transformToByteArray: n,
          transformToString: async e => {
            const t = await n();
            return void 0 === e || Buffer.isEncoding(e) ? Re(t.buffer, t.byteOffset, t.byteLength).toString(e) : new us.TextDecoder(e).decode(t);
          },
          transformToWebStream: () => {
            if (t) throw new Error(gc);
            if (null !== e.readableFlowing) throw new Error("The stream has been consumed by other callbacks.");
            if ("function" != typeof bs.Readable.toWeb) throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            return t = !0, bs.Readable.toWeb(e);
          }
        });
      },
      yc = "required",
      wc = "fn",
      bc = "argv",
      Ec = "ref",
      Sc = "isSet",
      xc = "tree",
      vc = "error",
      Tc = "endpoint",
      Ac = "PartitionResult",
      Pc = {
        [yc]: !1,
        type: "String"
      },
      Ic = {
        [yc]: !0,
        default: !1,
        type: "Boolean"
      },
      kc = {
        [Ec]: "Endpoint"
      },
      Rc = {
        [wc]: "booleanEquals",
        [bc]: [{
          [Ec]: "UseFIPS"
        }, !0]
      },
      Nc = {
        [wc]: "booleanEquals",
        [bc]: [{
          [Ec]: "UseDualStack"
        }, !0]
      },
      Cc = {},
      Oc = {
        [wc]: "booleanEquals",
        [bc]: [!0, {
          [wc]: "getAttr",
          [bc]: [{
            [Ec]: Ac
          }, "supportsFIPS"]
        }]
      },
      $c = {
        [wc]: "booleanEquals",
        [bc]: [!0, {
          [wc]: "getAttr",
          [bc]: [{
            [Ec]: Ac
          }, "supportsDualStack"]
        }]
      },
      _c = [Rc],
      Dc = [Nc],
      Fc = [{
        [Ec]: "Region"
      }],
      jc = {
        version: "1.0",
        parameters: {
          Region: Pc,
          UseDualStack: Ic,
          UseFIPS: Ic,
          Endpoint: Pc
        },
        rules: [{
          conditions: [{
            [wc]: Sc,
            [bc]: [kc]
          }],
          type: xc,
          rules: [{
            conditions: _c,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: vc
          }, {
            type: xc,
            rules: [{
              conditions: Dc,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: vc
            }, {
              endpoint: {
                url: kc,
                properties: Cc,
                headers: Cc
              },
              type: Tc
            }]
          }]
        }, {
          type: xc,
          rules: [{
            conditions: [{
              [wc]: Sc,
              [bc]: Fc
            }],
            type: xc,
            rules: [{
              conditions: [{
                [wc]: "aws.partition",
                [bc]: Fc,
                assign: Ac
              }],
              type: xc,
              rules: [{
                conditions: [Rc, Nc],
                type: xc,
                rules: [{
                  conditions: [Oc, $c],
                  type: xc,
                  rules: [{
                    type: xc,
                    rules: [{
                      endpoint: {
                        url: "https://polly-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: Cc,
                        headers: Cc
                      },
                      type: Tc
                    }]
                  }]
                }, {
                  error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                  type: vc
                }]
              }, {
                conditions: _c,
                type: xc,
                rules: [{
                  conditions: [Oc],
                  type: xc,
                  rules: [{
                    type: xc,
                    rules: [{
                      endpoint: {
                        url: "https://polly-fips.{Region}.{PartitionResult#dnsSuffix}",
                        properties: Cc,
                        headers: Cc
                      },
                      type: Tc
                    }]
                  }]
                }, {
                  error: "FIPS is enabled but this partition does not support FIPS",
                  type: vc
                }]
              }, {
                conditions: Dc,
                type: xc,
                rules: [{
                  conditions: [$c],
                  type: xc,
                  rules: [{
                    type: xc,
                    rules: [{
                      endpoint: {
                        url: "https://polly.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: Cc,
                        headers: Cc
                      },
                      type: Tc
                    }]
                  }]
                }, {
                  error: "DualStack is enabled but this partition does not support DualStack",
                  type: vc
                }]
              }, {
                type: xc,
                rules: [{
                  endpoint: {
                    url: "https://polly.{Region}.{PartitionResult#dnsSuffix}",
                    properties: Cc,
                    headers: Cc
                  },
                  type: Tc
                }]
              }]
            }]
          }, {
            error: "Invalid Configuration: Missing Region",
            type: vc
          }]
        }]
      },
      Mc = (e, t = {}) => mo(jc, {
        endpointParams: e,
        logger: t.logger
      });
    class Lc extends It {
      constructor(e) {
        var _n$useDualstackEndpoi4, _n$useFipsEndpoint4;
        const t = (n = (e => {
          var _e$bodyLengthChecker4, _e$credentialDefaultP2, _e$defaultUserAgentPr4, _e$maxAttempts5, _e$region4, _e$requestHandler4, _e$retryMode4, _e$sdkStreamMixin, _e$sha4, _e$streamCollector4, _e$useDualstackEndpoi5, _e$useFipsEndpoint5;
          cn(process.version);
          const t = zo(e),
            n = () => t().then(on),
            r = (e => {
              var _e$base64Decoder4, _e$base64Encoder4, _e$disableHostPrefix4, _e$endpointProvider4, _e$logger4, _e$serviceId4, _e$urlParser4, _e$utf8Decoder4, _e$utf8Encoder4;
              return {
                apiVersion: "2016-06-10",
                base64Decoder: (_e$base64Decoder4 = e === null || e === void 0 ? void 0 : e.base64Decoder) !== null && _e$base64Decoder4 !== void 0 ? _e$base64Decoder4 : Rs,
                base64Encoder: (_e$base64Encoder4 = e === null || e === void 0 ? void 0 : e.base64Encoder) !== null && _e$base64Encoder4 !== void 0 ? _e$base64Encoder4 : Ns,
                disableHostPrefix: (_e$disableHostPrefix4 = e === null || e === void 0 ? void 0 : e.disableHostPrefix) !== null && _e$disableHostPrefix4 !== void 0 ? _e$disableHostPrefix4 : !1,
                endpointProvider: (_e$endpointProvider4 = e === null || e === void 0 ? void 0 : e.endpointProvider) !== null && _e$endpointProvider4 !== void 0 ? _e$endpointProvider4 : Mc,
                logger: (_e$logger4 = e === null || e === void 0 ? void 0 : e.logger) !== null && _e$logger4 !== void 0 ? _e$logger4 : new vt(),
                serviceId: (_e$serviceId4 = e === null || e === void 0 ? void 0 : e.serviceId) !== null && _e$serviceId4 !== void 0 ? _e$serviceId4 : "Polly",
                urlParser: (_e$urlParser4 = e === null || e === void 0 ? void 0 : e.urlParser) !== null && _e$urlParser4 !== void 0 ? _e$urlParser4 : $,
                utf8Decoder: (_e$utf8Decoder4 = e === null || e === void 0 ? void 0 : e.utf8Decoder) !== null && _e$utf8Decoder4 !== void 0 ? _e$utf8Decoder4 : Ce,
                utf8Encoder: (_e$utf8Encoder4 = e === null || e === void 0 ? void 0 : e.utf8Encoder) !== null && _e$utf8Encoder4 !== void 0 ? _e$utf8Encoder4 : $e
              };
            })(e);
          return _objectSpread(_objectSpread(_objectSpread({}, r), e), {}, {
            runtime: "node",
            defaultsMode: t,
            bodyLengthChecker: (_e$bodyLengthChecker4 = e === null || e === void 0 ? void 0 : e.bodyLengthChecker) !== null && _e$bodyLengthChecker4 !== void 0 ? _e$bodyLengthChecker4 : Ts,
            credentialDefaultProvider: (_e$credentialDefaultP2 = e === null || e === void 0 ? void 0 : e.credentialDefaultProvider) !== null && _e$credentialDefaultP2 !== void 0 ? _e$credentialDefaultP2 : (s = Ia, e => s(_objectSpread({
              roleAssumer: hc(e),
              roleAssumerWithWebIdentity: fc(e)
            }, e))),
            defaultUserAgentProvider: (_e$defaultUserAgentPr4 = e === null || e === void 0 ? void 0 : e.defaultUserAgentProvider) !== null && _e$defaultUserAgentPr4 !== void 0 ? _e$defaultUserAgentPr4 : Is({
              serviceId: r.serviceId,
              clientVersion: "3.279.0"
            }),
            maxAttempts: (_e$maxAttempts5 = e === null || e === void 0 ? void 0 : e.maxAttempts) !== null && _e$maxAttempts5 !== void 0 ? _e$maxAttempts5 : Jr(ne),
            region: (_e$region4 = e === null || e === void 0 ? void 0 : e.region) !== null && _e$region4 !== void 0 ? _e$region4 : Jr(c, l),
            requestHandler: (_e$requestHandler4 = e === null || e === void 0 ? void 0 : e.requestHandler) !== null && _e$requestHandler4 !== void 0 ? _e$requestHandler4 : new Ss(n),
            retryMode: (_e$retryMode4 = e === null || e === void 0 ? void 0 : e.retryMode) !== null && _e$retryMode4 !== void 0 ? _e$retryMode4 : Jr(_objectSpread(_objectSpread({}, se), {}, {
              default: async () => (await n()).retryMode || B
            })),
            sdkStreamMixin: (_e$sdkStreamMixin = e === null || e === void 0 ? void 0 : e.sdkStreamMixin) !== null && _e$sdkStreamMixin !== void 0 ? _e$sdkStreamMixin : mc,
            sha256: (_e$sha4 = e === null || e === void 0 ? void 0 : e.sha256) !== null && _e$sha4 !== void 0 ? _e$sha4 : (0, _bind.default)(fs).call(fs, null, "sha256"),
            streamCollector: (_e$streamCollector4 = e === null || e === void 0 ? void 0 : e.streamCollector) !== null && _e$streamCollector4 !== void 0 ? _e$streamCollector4 : vs,
            useDualstackEndpoint: (_e$useDualstackEndpoi5 = e === null || e === void 0 ? void 0 : e.useDualstackEndpoint) !== null && _e$useDualstackEndpoi5 !== void 0 ? _e$useDualstackEndpoi5 : Jr(i),
            useFipsEndpoint: (_e$useFipsEndpoint5 = e === null || e === void 0 ? void 0 : e.useFipsEndpoint) !== null && _e$useFipsEndpoint5 !== void 0 ? _e$useFipsEndpoint5 : Jr(a)
          });
          var s;
        })(e), _objectSpread(_objectSpread({}, n), {}, {
          useDualstackEndpoint: (_n$useDualstackEndpoi4 = n.useDualstackEndpoint) !== null && _n$useDualstackEndpoi4 !== void 0 ? _n$useDualstackEndpoi4 : !1,
          useFipsEndpoint: (_n$useFipsEndpoint4 = n.useFipsEndpoint) !== null && _n$useFipsEndpoint4 !== void 0 ? _n$useFipsEndpoint4 : !1,
          defaultSigningName: "polly"
        }));
        var n;
        const r = p(t),
          s = _(r),
          o = re(s),
          d = mt(lt(o));
        super(d), this.config = d, this.middlewareStack.use(ye(this.config)), this.middlewareStack.use(b(this.config)), this.middlewareStack.use(F(this.config)), this.middlewareStack.use(M(this.config)), this.middlewareStack.use(q(this.config)), this.middlewareStack.use(gt(this.config)), this.middlewareStack.use(xt(this.config));
      }
      destroy() {
        super.destroy();
      }
    }
    class Uc extends tn {
      constructor(e) {
        super(e), (0, _setPrototypeOf.default)(this, Uc.prototype);
      }
    }
    class qc extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "LexiconNotFoundException",
          $fault: "client"
        }, e)), this.name = "LexiconNotFoundException", this.$fault = "client", (0, _setPrototypeOf.default)(this, qc.prototype);
      }
    }
    class zc extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "ServiceFailureException",
          $fault: "server"
        }, e)), this.name = "ServiceFailureException", this.$fault = "server", (0, _setPrototypeOf.default)(this, zc.prototype);
      }
    }
    var Wc, Bc, Vc, Kc, Hc, Gc, Jc, Xc;
    !function (e) {
      e.NEURAL = "neural", e.STANDARD = "standard";
    }(Wc || (Wc = {})), function (e) {
      e.ar_AE = "ar-AE", e.arb = "arb", e.ca_ES = "ca-ES", e.cmn_CN = "cmn-CN", e.cy_GB = "cy-GB", e.da_DK = "da-DK", e.de_AT = "de-AT", e.de_DE = "de-DE", e.en_AU = "en-AU", e.en_GB = "en-GB", e.en_GB_WLS = "en-GB-WLS", e.en_IN = "en-IN", e.en_NZ = "en-NZ", e.en_US = "en-US", e.en_ZA = "en-ZA", e.es_ES = "es-ES", e.es_MX = "es-MX", e.es_US = "es-US", e.fi_FI = "fi-FI", e.fr_CA = "fr-CA", e.fr_FR = "fr-FR", e.hi_IN = "hi-IN", e.is_IS = "is-IS", e.it_IT = "it-IT", e.ja_JP = "ja-JP", e.ko_KR = "ko-KR", e.nb_NO = "nb-NO", e.nl_NL = "nl-NL", e.pl_PL = "pl-PL", e.pt_BR = "pt-BR", e.pt_PT = "pt-PT", e.ro_RO = "ro-RO", e.ru_RU = "ru-RU", e.sv_SE = "sv-SE", e.tr_TR = "tr-TR", e.yue_CN = "yue-CN";
    }(Bc || (Bc = {})), function (e) {
      e.Female = "Female", e.Male = "Male";
    }(Vc || (Vc = {})), function (e) {
      e.Aditi = "Aditi", e.Adriano = "Adriano", e.Amy = "Amy", e.Andres = "Andres", e.Aria = "Aria", e.Arlet = "Arlet", e.Arthur = "Arthur", e.Astrid = "Astrid", e.Ayanda = "Ayanda", e.Bianca = "Bianca", e.Brian = "Brian", e.Camila = "Camila", e.Carla = "Carla", e.Carmen = "Carmen", e.Celine = "Celine", e.Chantal = "Chantal", e.Conchita = "Conchita", e.Cristiano = "Cristiano", e.Daniel = "Daniel", e.Dora = "Dora", e.Elin = "Elin", e.Emma = "Emma", e.Enrique = "Enrique", e.Ewa = "Ewa", e.Filiz = "Filiz", e.Gabrielle = "Gabrielle", e.Geraint = "Geraint", e.Giorgio = "Giorgio", e.Gwyneth = "Gwyneth", e.Hala = "Hala", e.Hannah = "Hannah", e.Hans = "Hans", e.Hiujin = "Hiujin", e.Ida = "Ida", e.Ines = "Ines", e.Ivy = "Ivy", e.Jacek = "Jacek", e.Jan = "Jan", e.Joanna = "Joanna", e.Joey = "Joey", e.Justin = "Justin", e.Kajal = "Kajal", e.Karl = "Karl", e.Kazuha = "Kazuha", e.Kendra = "Kendra", e.Kevin = "Kevin", e.Kimberly = "Kimberly", e.Laura = "Laura", e.Lea = "Lea", e.Liam = "Liam", e.Liv = "Liv", e.Lotte = "Lotte", e.Lucia = "Lucia", e.Lupe = "Lupe", e.Mads = "Mads", e.Maja = "Maja", e.Marlene = "Marlene", e.Mathieu = "Mathieu", e.Matthew = "Matthew", e.Maxim = "Maxim", e.Mia = "Mia", e.Miguel = "Miguel", e.Mizuki = "Mizuki", e.Naja = "Naja", e.Nicole = "Nicole", e.Ola = "Ola", e.Olivia = "Olivia", e.Pedro = "Pedro", e.Penelope = "Penelope", e.Raveena = "Raveena", e.Remi = "Remi", e.Ricardo = "Ricardo", e.Ruben = "Ruben", e.Russell = "Russell", e.Ruth = "Ruth", e.Salli = "Salli", e.Seoyeon = "Seoyeon", e.Sergio = "Sergio", e.Stephen = "Stephen", e.Suvi = "Suvi", e.Takumi = "Takumi", e.Tatyana = "Tatyana", e.Thiago = "Thiago", e.Tomoko = "Tomoko", e.Vicki = "Vicki", e.Vitoria = "Vitoria", e.Zeina = "Zeina", e.Zhiyu = "Zhiyu";
    }(Kc || (Kc = {}));
    class Zc extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "EngineNotSupportedException",
          $fault: "client"
        }, e)), this.name = "EngineNotSupportedException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Zc.prototype);
      }
    }
    !function (e) {
      e.JSON = "json", e.MP3 = "mp3", e.OGG_VORBIS = "ogg_vorbis", e.PCM = "pcm";
    }(Hc || (Hc = {})), function (e) {
      e.SENTENCE = "sentence", e.SSML = "ssml", e.VISEME = "viseme", e.WORD = "word";
    }(Gc || (Gc = {})), function (e) {
      e.COMPLETED = "completed", e.FAILED = "failed", e.IN_PROGRESS = "inProgress", e.SCHEDULED = "scheduled";
    }(Jc || (Jc = {})), function (e) {
      e.SSML = "ssml", e.TEXT = "text";
    }(Xc || (Xc = {}));
    class Yc extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidSampleRateException",
          $fault: "client"
        }, e)), this.name = "InvalidSampleRateException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Yc.prototype);
      }
    }
    class Qc extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "InvalidSsmlException",
          $fault: "client"
        }, e)), this.name = "InvalidSsmlException", this.$fault = "client", (0, _setPrototypeOf.default)(this, Qc.prototype);
      }
    }
    class el extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "LanguageNotSupportedException",
          $fault: "client"
        }, e)), this.name = "LanguageNotSupportedException", this.$fault = "client", (0, _setPrototypeOf.default)(this, el.prototype);
      }
    }
    class tl extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "MarksNotSupportedForFormatException",
          $fault: "client"
        }, e)), this.name = "MarksNotSupportedForFormatException", this.$fault = "client", (0, _setPrototypeOf.default)(this, tl.prototype);
      }
    }
    class nl extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "SsmlMarksNotSupportedForTextTypeException",
          $fault: "client"
        }, e)), this.name = "SsmlMarksNotSupportedForTextTypeException", this.$fault = "client", (0, _setPrototypeOf.default)(this, nl.prototype);
      }
    }
    class rl extends Uc {
      constructor(e) {
        super(_objectSpread({
          name: "TextLengthExceededException",
          $fault: "client"
        }, e)), this.name = "TextLengthExceededException", this.$fault = "client", (0, _setPrototypeOf.default)(this, rl.prototype);
      }
    }
    const sl = e => _objectSpread({}, e),
      ol = e => _objectSpread({}, e),
      il = pn,
      al = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Zc(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      cl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Yc(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      ll = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new Qc(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      dl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new el(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      ul = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new qc(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      pl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new tl(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      hl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new zc(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      fl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new nl(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      gl = async (e, t) => {
        const n = il({}),
          r = e.body;
        null != r.message && (n.message = Mt(r.message));
        const s = new rl(_objectSpread({
          $metadata: wl(e)
        }, n));
        return nn(s, e.body);
      },
      ml = (e, t) => {
        var _context103;
        return (0, _map.default)(_context103 = (0, _filter.default)(e).call(e, e => null != e)).call(_context103, e => e);
      },
      yl = (e, t) => {
        var _context104;
        return (0, _map.default)(_context104 = (0, _filter.default)(e).call(e, e => null != e)).call(_context104, e => e);
      },
      wl = e => {
        var _ref8, _e$headers$xAmznReq5;
        return {
          httpStatusCode: e.statusCode,
          requestId: (_ref8 = (_e$headers$xAmznReq5 = e.headers["x-amzn-requestid"]) !== null && _e$headers$xAmznReq5 !== void 0 ? _e$headers$xAmznReq5 : e.headers["x-amzn-request-id"]) !== null && _ref8 !== void 0 ? _ref8 : e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"]
        };
      },
      bl = (e, t) => ((e, t) => ((e = new Uint8Array(), t) => e instanceof Uint8Array ? _promise.default.resolve(e) : t.streamCollector(e) || _promise.default.resolve(new Uint8Array()))(e, t).then(e => t.utf8Encoder(e)))(e, t).then(e => e.length ? JSON.parse(e) : {}),
      El = async (e, t) => {
        var _n$message3;
        const n = await bl(e, t);
        return n.message = (_n$message3 = n.message) !== null && _n$message3 !== void 0 ? _n$message3 : n.Message, n;
      },
      Sl = (e, t) => {
        var _context105;
        const n = e => {
            let t = e;
            return "number" == typeof t && (t = t.toString()), (0, _indexOf.default)(t).call(t, ",") >= 0 && (t = t.split(",")[0]), (0, _indexOf.default)(t).call(t, ":") >= 0 && (t = t.split(":")[0]), (0, _indexOf.default)(t).call(t, "#") >= 0 && (t = t.split("#")[1]), t;
          },
          r = (s = e.headers, "x-amzn-errortype", (0, _find.default)(_context105 = (0, _keys.default)(s)).call(_context105, e => e.toLowerCase() === "x-amzn-errortype".toLowerCase()));
        var s;
        return void 0 !== r ? n(e.headers[r]) : void 0 !== t.code ? n(t.code) : void 0 !== t.__type ? n(t.__type) : void 0;
      };
    class xl extends kt {
      constructor(e) {
        super(), this.input = e;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
          },
          Endpoint: {
            type: "builtInParams",
            name: "endpoint"
          },
          Region: {
            type: "builtInParams",
            name: "region"
          },
          UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
          }
        };
      }
      resolveMiddleware(e, t, n) {
        this.middlewareStack.use(T(t, this.serialize, this.deserialize)), this.middlewareStack.use(C(t, xl.getEndpointParameterInstructions()));
        const r = (0, _concat.default)(e).call(e, this.middlewareStack),
          {
            logger: s
          } = t,
          o = {
            logger: s,
            clientName: "PollyClient",
            commandName: "SynthesizeSpeechCommand",
            inputFilterSensitiveLog: sl,
            outputFilterSensitiveLog: ol
          },
          {
            requestHandler: i
          } = t;
        return r.resolve(e => i.handle(e.request, n || {}), o);
      }
      serialize(e, t) {
        return (async (e, t) => {
          const {
              hostname: n,
              protocol: r = "https",
              port: s,
              path: o
            } = await t.endpoint(),
            i = `${o !== null && o !== void 0 && (0, _endsWith.default)(o).call(o, "/") ? (0, _slice.default)(o).call(o, 0, -1) : o || ""}/v1/speech`;
          let a;
          return a = (0, _stringify.default)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, null != e.Engine && {
            Engine: e.Engine
          }), null != e.LanguageCode && {
            LanguageCode: e.LanguageCode
          }), null != e.LexiconNames && {
            LexiconNames: ml(e.LexiconNames)
          }), null != e.OutputFormat && {
            OutputFormat: e.OutputFormat
          }), null != e.SampleRate && {
            SampleRate: e.SampleRate
          }), null != e.SpeechMarkTypes && {
            SpeechMarkTypes: yl(e.SpeechMarkTypes)
          }), null != e.Text && {
            Text: e.Text
          }), null != e.TextType && {
            TextType: e.TextType
          }), null != e.VoiceId && {
            VoiceId: e.VoiceId
          })), new g({
            protocol: r,
            hostname: n,
            port: s,
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            path: i,
            body: a
          });
        })(e, t);
      }
      deserialize(e, t) {
        return (async (e, t) => {
          if (200 !== e.statusCode && e.statusCode >= 300) return (async (e, t) => {
            const n = _objectSpread(_objectSpread({}, e), {}, {
                body: await El(e.body, t)
              }),
              r = Sl(e, n.body);
            switch (r) {
              case "EngineNotSupportedException":
              case "com.amazonaws.polly#EngineNotSupportedException":
                throw await al(n, t);
              case "InvalidSampleRateException":
              case "com.amazonaws.polly#InvalidSampleRateException":
                throw await cl(n, t);
              case "InvalidSsmlException":
              case "com.amazonaws.polly#InvalidSsmlException":
                throw await ll(n, t);
              case "LanguageNotSupportedException":
              case "com.amazonaws.polly#LanguageNotSupportedException":
                throw await dl(n, t);
              case "LexiconNotFoundException":
              case "com.amazonaws.polly#LexiconNotFoundException":
                throw await ul(n, t);
              case "MarksNotSupportedForFormatException":
              case "com.amazonaws.polly#MarksNotSupportedForFormatException":
                throw await pl(n, t);
              case "ServiceFailureException":
              case "com.amazonaws.polly#ServiceFailureException":
                throw await hl(n, t);
              case "SsmlMarksNotSupportedForTextTypeException":
              case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
                throw await fl(n, t);
              case "TextLengthExceededException":
              case "com.amazonaws.polly#TextLengthExceededException":
                throw await gl(n, t);
              default:
                const s = n.body;
                rn({
                  output: e,
                  parsedBody: s,
                  exceptionCtor: Uc,
                  errorCode: r
                });
            }
          })(e, t);
          const n = il({
              $metadata: wl(e),
              ContentType: [, e.headers["content-type"]],
              RequestCharacters: [() => void 0 !== e.headers["x-amzn-requestcharacters"], () => qt(e.headers["x-amzn-requestcharacters"])]
            }),
            r = e.body;
          return t.sdkStreamMixin(r), n.AudioStream = r, n;
        })(e, t);
      }
    }
    const vl = require("fs/promises");
    var Tl = n(562);
    (async () => {
      var _context106, _context107, _context109, _context110;
      const e = await (async () => {
          const e = await (0, vl.readFile)("./config.json", "utf8");
          return JSON.parse(e);
        })(),
        t = {
          region: e.aws.region,
          credentials: {
            accessKeyId: e.aws.accessKeyId,
            secretAccessKey: e.aws.secretAccessKey,
            sessionToken: e.aws.sessionToken
          }
        };
      console.log("The config file was loaded.");
      const n = Tl((0, _slice.default)(_context106 = process.argv).call(_context106, 2), {
        string: ["mp3", "text", "wav"],
        alias: {
          mp3: "o",
          text: "t",
          wav: "w"
        }
      });
      let r = e.defaultLanguage;
      if ((0, _startsWith.default)(_context107 = n.text).call(_context107, "!")) for (const t of (0, _keys.default)(e.presets)) {
        var _context108;
        if ((0, _startsWith.default)(_context108 = n.text).call(_context108, `!${t}`)) {
          r = t;
          break;
        }
      }
      const s = e.presets[r],
        o = e.prefix + ((0, _startsWith.default)(_context109 = n.text).call(_context109, "!") ? (0, _slice.default)(_context110 = n.text).call(_context110, r.length + 1) : n.text) + e.suffix,
        i = n.mp3,
        a = n.wav;
      if (!o || !i || !a) throw new Error("Missing arguments.");
      console.log("The arguments were parsed."), await (async ({
        text: e,
        mp3: t,
        wav: n,
        voiceId: r,
        languageCode: s,
        engine: o,
        awsConfig: i
      }) => {
        console.log("The synthesizeSpeech function was called."), console.log(`text: ${e}, mp3: ${t}, wav: ${n}, voiceId: ${r}, languageCode: ${s}, engine: ${o}`);
        const a = new Lc(i),
          c = new xl({
            Text: e,
            TextType: "ssml",
            OutputFormat: "mp3",
            SampleRate: "8000",
            VoiceId: r,
            Engine: o,
            LanguageCode: s
          }),
          l = await a.send(c);
        await (0, vl.writeFile)(t, l.AudioStream), (0, ds.spawn)("lame", ["--decode", t, "-b", "8000", n]).on("close", async () => {
          await (0, vl.rm)(t), console.log("The mp3 file was deleted.");
        });
      })({
        text: o,
        mp3: i,
        wav: a,
        voiceId: s.voiceId,
        languageCode: s.languageCode,
        engine: s.engine,
        awsConfig: t
      });
    })().then();
  })(), module.exports = r;
})();
