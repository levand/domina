var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.evalWorksForGlobals_ = null;
goog.provide = function(a) {
  if(!COMPILED) {
    if(goog.getObjectByName(a) && !goog.implicitNamespaces_[a]) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    for(var b = a;b = b.substring(0, b.lastIndexOf("."));) {
      goog.implicitNamespaces_[b] = !0
    }
  }
  goog.exportPath_(a)
};
goog.setTestOnly = function(a) {
  if(COMPILED && !goog.DEBUG) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
if(!COMPILED) {
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
  for(var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
  }
};
goog.getObjectByName = function(a, b) {
  for(var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if(goog.isDefAndNotNull(d[e])) {
      d = d[e]
    }else {
      return null
    }
  }
  return d
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for(d in a) {
    c[d] = a[d]
  }
};
goog.addDependency = function(a, b, c) {
  if(!COMPILED) {
    for(var d, a = a.replace(/\\/g, "/"), e = goog.dependencies_, f = 0;d = b[f];f++) {
      e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0
    }
    for(d = 0;b = c[d];d++) {
      a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0
    }
  }
};
goog.require = function(a) {
  if(!COMPILED && !goog.getObjectByName(a)) {
    var b = goog.getPathFromDeps_(a);
    if(b) {
      goog.included_[b] = !0, goog.writeScripts_()
    }else {
      throw a = "goog.require could not find: " + a, goog.global.console && goog.global.console.error(a), Error(a);
    }
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(a) {
  return a
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    return a.instance_ || (a.instance_ = new a)
  }
};
if(!COMPILED) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var a = goog.global.document;
    return"undefined" != typeof a && "write" in a
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {
          var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
          if("base.js" == c.substr(d - 7, 7)) {
            goog.basePath = c.substr(0, d - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(a) {
    var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0)
  }, goog.writeScriptTag_ = function(a) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + a + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function a(e) {
      if(!(e in d.written)) {
        if(!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
          for(var g in d.requires[e]) {
            if(g in d.nameToPath) {
              a(d.nameToPath[g])
            }else {
              if(!goog.getObjectByName(g)) {
                throw Error("Undefined nameToPath for " + g);
              }
            }
          }
        }
        e in c || (c[e] = !0, b.push(e))
      }
    }
    var b = [], c = {}, d = goog.dependencies_, e;
    for(e in goog.included_) {
      d.written[e] || a(e)
    }
    for(e = 0;e < b.length;e++) {
      if(b[e]) {
        goog.importScript_(goog.basePath + b[e])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(a) {
    return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
  }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")
}
goog.typeOf = function(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
};
goog.propertyIsEnumerableCustom_ = function(a, b) {
  if(b in a) {
    for(var c in a) {
      if(c == b && Object.prototype.hasOwnProperty.call(a, b)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(a, b) {
  return a instanceof Object ? Object.prototype.propertyIsEnumerable.call(a, b) : goog.propertyIsEnumerableCustom_(a, b)
};
goog.isDef = function(a) {
  return void 0 !== a
};
goog.isNull = function(a) {
  return null === a
};
goog.isDefAndNotNull = function(a) {
  return null != a
};
goog.isArray = function(a) {
  return"array" == goog.typeOf(a)
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return"array" == b || "object" == b && "number" == typeof a.length
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear
};
goog.isString = function(a) {
  return"string" == typeof a
};
goog.isBoolean = function(a) {
  return"boolean" == typeof a
};
goog.isNumber = function(a) {
  return"number" == typeof a
};
goog.isFunction = function(a) {
  return"function" == goog.typeOf(a)
};
goog.isObject = function(a) {
  a = goog.typeOf(a);
  return"object" == a || "array" == a || "function" == a
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_]
  }catch(b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if("object" == b || "array" == b) {
    if(a.clone) {
      return a.clone()
    }
    var b = "array" == b ? [] : {}, c;
    for(c in a) {
      b[c] = goog.cloneObject(a[c])
    }
    return b
  }
  return a
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments)
};
goog.bindJs_ = function(a, b, c) {
  var d = b || goog.global;
  if(2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, e);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
};
goog.bind = function(a, b, c) {
  goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
};
goog.mixin = function(a, b) {
  for(var c in b) {
    a[c] = b[c]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(a) {
  if(goog.global.execScript) {
    goog.global.execScript(a, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(null == goog.evalWorksForGlobals_) {
        goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(a)
      }else {
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a
  }, d;
  d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : function(a) {
    for(var a = a.split("-"), b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]))
    }
    return b.join("-")
  } : function(a) {
    return a
  };
  return b ? a + "-" + d(b) : d(a)
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b
};
goog.getMsg = function(a, b) {
  var c = b || {}, d;
  for(d in c) {
    var e = ("" + c[d]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
  }
  return a
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c)
};
goog.exportProperty = function(a, b, c) {
  a[b] = c
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if(d.superClass_) {
    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if(g.prototype[b] === d) {
      f = !0
    }else {
      if(f) {
        return g.prototype[b].apply(a, e)
      }
    }
  }
  if(a[b] === d) {
    return a.constructor.prototype[b].apply(a, e)
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global)
};
goog.string = {};
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0)
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length))
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length))
};
goog.string.subs = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(a) {
  return/^[\s\xa0]*$/.test(a)
};
goog.string.isEmptySafe = function(a) {
  return goog.string.isEmpty(goog.string.makeSafe(a))
};
goog.string.isBreakingWhitespace = function(a) {
  return!/[^\t\n\r ]/.test(a)
};
goog.string.isAlpha = function(a) {
  return!/[^a-zA-Z]/.test(a)
};
goog.string.isNumeric = function(a) {
  return!/[^0-9]/.test(a)
};
goog.string.isAlphaNumeric = function(a) {
  return!/[^a-zA-Z0-9]/.test(a)
};
goog.string.isSpace = function(a) {
  return" " == a
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = ("" + a).toLowerCase(), d = ("" + b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0;f < e;f++) {
    var g = c[f], h = d[f];
    if(g != h) {
      c = parseInt(g, 10);
      return!isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(a) {
  a = "" + a;
  return!goog.string.encodeUriRegExp_.test(a) ? encodeURIComponent(a) : a
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(a, b) {
  if(b) {
    return a.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }
  if(!goog.string.allRe_.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(goog.string.amperRe_, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(goog.string.ltRe_, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(goog.string.gtRe_, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(goog.string.quotRe_, "&quot;"));
  return a
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? "document" in goog.global && !goog.string.contains(a, "<") ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a
};
goog.string.unescapeEntitiesUsingDom_ = function(a) {
  var b = goog.global.document.createElement("div");
  b.innerHTML = "<pre>x" + a + "</pre>";
  if(b.firstChild[goog.string.NORMALIZE_FN_]) {
    b.firstChild[goog.string.NORMALIZE_FN_]()
  }
  a = b.firstChild.firstChild.nodeValue.slice(1);
  b.innerHTML = "";
  return goog.string.canonicalizeNewlines(a)
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if(!isNaN(d)) {
            return String.fromCharCode(d)
          }
        }
        return a
    }
  })
};
goog.string.NORMALIZE_FN_ = "normalize";
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
};
goog.string.stripQuotes = function(a, b) {
  for(var c = b.length, d = 0;d < c;d++) {
    var e = 1 == c ? b : b.charAt(d);
    if(a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1)
    }
  }
  return a
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if(d) {
    d > b && (d = b);
    var e = a.length - d, a = a.substring(0, b - d) + "..." + a.substring(e)
  }else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e))
  }
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d))
  }
  b.push('"');
  return b.join("")
};
goog.string.escapeString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    b[c] = goog.string.escapeChar(a.charAt(c))
  }
  return b.join("")
};
goog.string.escapeChar = function(a) {
  if(a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a]
  }
  if(a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a]
  }
  var b = a, c = a.charCodeAt(0);
  if(31 < c && 127 > c) {
    b = a
  }else {
    if(256 > c) {
      if(b = "\\x", 16 > c || 256 < c) {
        b += "0"
      }
    }else {
      b = "\\u", 4096 > c && (b += "0")
    }
    b += c.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[a] = b
};
goog.string.toMap = function(a) {
  for(var b = {}, c = 0;c < a.length;c++) {
    b[a.charAt(c)] = !0
  }
  return b
};
goog.string.contains = function(a, b) {
  return-1 != a.indexOf(b)
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d
};
goog.string.remove = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "");
  return a.replace(c, "")
};
goog.string.removeAll = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "")
};
goog.string.regExpEscape = function(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(a, b) {
  return Array(b + 1).join(a)
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : "" + a;
  c = a.indexOf(".");
  if(-1 == c) {
    c = a.length
  }
  return goog.string.repeat("0", Math.max(0, b - c)) + a
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : "" + a
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(a, b) {
  for(var c = 0, d = goog.string.trim("" + a).split("."), e = goog.string.trim("" + b).split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", j = RegExp("(\\d*)(\\D*)", "g"), k = RegExp("(\\d*)(\\D*)", "g");
    do {
      var l = j.exec(h) || ["", "", ""], m = k.exec(i) || ["", "", ""];
      if(0 == l[0].length && 0 == m[0].length) {
        break
      }
      var c = 0 == l[1].length ? 0 : parseInt(l[1], 10), o = 0 == m[1].length ? 0 : parseInt(m[1], 10), c = goog.string.compareElements_(c, o) || goog.string.compareElements_(0 == l[2].length, 0 == m[2].length) || goog.string.compareElements_(l[2], m[2])
    }while(0 == c)
  }
  return c
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_
  }
  return b
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmpty(a) ? NaN : b
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(a) {
  return goog.string.toCamelCaseCache_[a] || (goog.string.toCamelCaseCache_[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(a) {
  return goog.string.toSelectorCaseCache_[a] || (goog.string.toSelectorCaseCache_[a] = ("" + a).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.debug = {};
goog.debug.Error = function(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = "" + a
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if(c) {
    var e = e + (": " + c), f = d
  }else {
    a && (e += ": " + a, f = b)
  }
  throw new goog.asserts.AssertionError("" + e, f || []);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.fail = function(a, b) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  goog.asserts.ENABLE_ASSERTS && !(a instanceof b) && goog.asserts.doAssertFailure_("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = !0;
goog.array.peek = function(a) {
  return a[a.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.lastIndexOf(b, c)
  }
  for(;0 <= c;c--) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
goog.array.forEachRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;--d) {
    d in e && b.call(c, e[d], d, a)
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
goog.array.reduce = function(a, b, c, d) {
  if(a.reduce) {
    return d ? a.reduce(goog.bind(b, d), c) : a.reduce(b, c)
  }
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.reduceRight = function(a, b, c, d) {
  if(a.reduceRight) {
    return d ? a.reduceRight(goog.bind(b, d), c) : a.reduceRight(b, c)
  }
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return!1
    }
  }
  return!0
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndex = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return f
    }
  }
  return-1
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndexRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;d--) {
    if(d in e && b.call(c, e[d], d, a)) {
      return d
    }
  }
  return-1
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b)
};
goog.array.isEmpty = function(a) {
  return 0 == a.length
};
goog.array.clear = function(a) {
  if(!goog.isArray(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b)
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b)
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b)
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d)
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1
};
goog.array.concat = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(a) {
  if(goog.isArray(a)) {
    return goog.array.concat(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
};
goog.array.toArray = function(a) {
  return goog.isArray(a) ? goog.array.concat(a) : goog.array.clone(a)
};
goog.array.extend = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(goog.isArray(d) || (e = goog.isArrayLike(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, g = d.length, h = 0;h < g;h++) {
          a[f + h] = d[h]
        }
      }else {
        a.push(d)
      }
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1))
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c)
};
goog.array.removeDuplicates = function(a, b) {
  for(var c = b || a, d = {}, e = 0, f = 0;f < a.length;) {
    var g = a[f++], h = goog.isObject(g) ? "o" + goog.getUid(g) : (typeof g).charAt(0) + g;
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
  }
  c.length = e
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b)
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c)
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for(var f = 0, g = a.length, h;f < g;) {
    var i = f + g >> 1, j;
    j = c ? b.call(e, a[i], i, a) : b(d, a[i]);
    0 < j ? f = i + 1 : (g = i, h = !j)
  }
  return h ? f : ~f
};
goog.array.sort = function(a, b) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.sort.call(a, b || goog.array.defaultCompare)
};
goog.array.stableSort = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || goog.array.defaultCompare;
  goog.array.sort(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
};
goog.array.sortObjectsByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(a[b], c[b])
  })
};
goog.array.isSorted = function(a, b, c) {
  for(var b = b || goog.array.defaultCompare, d = 1;d < a.length;d++) {
    var e = b(a[d - 1], a[d]);
    if(0 < e || 0 == e && c) {
      return!1
    }
  }
  return!0
};
goog.array.equals = function(a, b, c) {
  if(!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return!1
  }
  for(var d = a.length, c = c || goog.array.defaultCompareEquality, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return!1
    }
  }
  return!0
};
goog.array.compare = function(a, b, c) {
  return goog.array.equals(a, b, c)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1
};
goog.array.bucket = function(a, b) {
  for(var c = {}, d = 0;d < a.length;d++) {
    var e = a[d], f = b(e, d, a);
    goog.isDef(f) && (c[f] || (c[f] = [])).push(e)
  }
  return c
};
goog.array.repeat = function(a, b) {
  for(var c = [], d = 0;d < b;d++) {
    c[d] = a
  }
  return c
};
goog.array.flatten = function(a) {
  for(var b = [], c = 0;c < arguments.length;c++) {
    var d = arguments[c];
    goog.isArray(d) ? b.push.apply(b, goog.array.flatten.apply(null, d)) : b.push(d)
  }
  return b
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
  return a
};
goog.array.zip = function(a) {
  if(!arguments.length) {
    return[]
  }
  for(var b = [], c = 0;;c++) {
    for(var d = [], e = 0;e < arguments.length;e++) {
      var f = arguments[e];
      if(c >= f.length) {
        return b
      }
      d.push(f[c])
    }
    b.push(d)
  }
};
goog.array.shuffle = function(a, b) {
  for(var c = b || Math.random, d = a.length - 1;0 < d;d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f
  }
};
goog.object = {};
goog.object.forEach = function(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    d[e] = b.call(c, a[e], e, a)
  }
  return d
};
goog.object.some = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return!0
    }
  }
  return!1
};
goog.object.every = function(a, b, c) {
  for(var d in a) {
    if(!b.call(c, a[d], d, a)) {
      return!1
    }
  }
  return!0
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
};
goog.object.getAnyKey = function(a) {
  for(var b in a) {
    return b
  }
};
goog.object.getAnyValue = function(a) {
  for(var b in a) {
    return a[b]
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b)
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
};
goog.object.getValueByKeys = function(a, b) {
  for(var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && !(a = a[d[c]], !goog.isDef(a));c++) {
  }
  return a
};
goog.object.containsKey = function(a, b) {
  return b in a
};
goog.object.containsValue = function(a, b) {
  for(var c in a) {
    if(a[c] == b) {
      return!0
    }
  }
  return!1
};
goog.object.findKey = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return d
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return(b = goog.object.findKey(a, b, c)) && a[b]
};
goog.object.isEmpty = function(a) {
  for(var b in a) {
    return!1
  }
  return!0
};
goog.object.clear = function(a) {
  for(var b in a) {
    delete a[b]
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
};
goog.object.add = function(a, b, c) {
  if(b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c)
};
goog.object.get = function(a, b, c) {
  return b in a ? a[b] : c
};
goog.object.set = function(a, b, c) {
  a[b] = c
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c
};
goog.object.clone = function(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if("object" == b || "array" == b) {
    if(a.clone) {
      return a.clone()
    }
    var b = "array" == b ? [] : {}, c;
    for(c in a) {
      b[c] = goog.object.unsafeClone(a[c])
    }
    return b
  }
  return a
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
};
goog.object.PROTOTYPE_FIELDS_ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
goog.object.extend = function(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < goog.object.PROTOTYPE_FIELDS_.length;f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(b % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0
  }
  return c
};
goog.userAgent = {};
goog.userAgent.jscript = {};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = !1;
goog.userAgent.jscript.init_ = function() {
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = "ScriptEngine" in goog.global && "JScript" == goog.global.ScriptEngine();
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global.ScriptEngineMajorVersion() + "." + goog.global.ScriptEngineMinorVersion() + "." + goog.global.ScriptEngineBuildVersion() : "0"
};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT || goog.userAgent.jscript.init_();
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? !1 : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(a) {
  return 0 <= goog.string.compareVersions(goog.userAgent.jscript.VERSION, a)
};
goog.string.StringBuffer = function(a, b) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  null != a && this.append.apply(this, arguments)
};
goog.string.StringBuffer.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
goog.userAgent.jscript.HAS_JSCRIPT ? (goog.string.StringBuffer.prototype.bufferLength_ = 0, goog.string.StringBuffer.prototype.append = function(a, b, c) {
  null == b ? this.buffer_[this.bufferLength_++] = a : (this.buffer_.push.apply(this.buffer_, arguments), this.bufferLength_ = this.buffer_.length);
  return this
}) : goog.string.StringBuffer.prototype.append = function(a, b, c) {
  this.buffer_ += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.buffer_ += arguments[d]
    }
  }
  return this
};
goog.string.StringBuffer.prototype.clear = function() {
  goog.userAgent.jscript.HAS_JSCRIPT ? this.bufferLength_ = this.buffer_.length = 0 : this.buffer_ = ""
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var a = this.buffer_.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.buffer_
};
var cljs = {core:{}};
cljs.core._STAR_unchecked_if_STAR_ = !1;
cljs.core._STAR_print_fn_STAR_ = function() {
  throw Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function(a) {
  return null != a && !1 !== a
};
cljs.core.type_satisfies_ = function(a, b) {
  var c = a[goog.typeOf.call(null, b)];
  if(cljs.core.truth_(c)) {
    return c
  }
  c = a._;
  return cljs.core.truth_(c) ? c : !1
};
cljs.core.is_proto_ = function(a) {
  return a.constructor.prototype === a
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function(a, b) {
  return Error("No protocol method " + a + " defined for type " + goog.typeOf.call(null, b) + ": " + b)
};
cljs.core.aclone = function(a) {
  return Array.prototype.slice.call(a)
};
cljs.core.array = function(a) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.make_array = function(a) {
  return Array(a)
};
cljs.core.aget = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.apply.__3(a, a.call(null, b, c), g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.apply.__3(a, a.call(null, c, f), b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return a[d];
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__2 = function(a, b) {
    return a[b]
  };
  a.__3 = b;
  return a
}();
cljs.core.aset = function(a, b, c) {
  return a[b] = c
};
cljs.core.alength = function(a) {
  return a.length
};
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var a = null, b = function(a) {
    if(a ? a.cljs$core$IFn$_invoke__1 : a) {
      a = a.cljs$core$IFn$_invoke__1(a)
    }else {
      var b;
      b = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!b && (b = cljs.core._invoke._, !b)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = b.call(null, a)
    }
    return a
  }, c = function(a, b) {
    var c;
    if(a ? a.cljs$core$IFn$_invoke__2 : a) {
      c = a.cljs$core$IFn$_invoke__2(a, b)
    }else {
      c = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!c && (c = cljs.core._invoke._, !c)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      c = c.call(null, a, b)
    }
    return c
  }, d = function(a, b, c) {
    if(a ? a.cljs$core$IFn$_invoke__3 : a) {
      a = a.cljs$core$IFn$_invoke__3(a, b, c)
    }else {
      var d;
      d = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!d && (d = cljs.core._invoke._, !d)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = d.call(null, a, b, c)
    }
    return a
  }, e = function(a, b, c, d) {
    if(a ? a.cljs$core$IFn$_invoke__4 : a) {
      a = a.cljs$core$IFn$_invoke__4(a, b, c, d)
    }else {
      var e;
      e = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!e && (e = cljs.core._invoke._, !e)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = e.call(null, a, b, c, d)
    }
    return a
  }, f = function(a, b, c, d, e) {
    if(a ? a.cljs$core$IFn$_invoke__5 : a) {
      a = a.cljs$core$IFn$_invoke__5(a, b, c, d, e)
    }else {
      var f;
      f = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!f && (f = cljs.core._invoke._, !f)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = f.call(null, a, b, c, d, e)
    }
    return a
  }, g = function(a, b, c, d, e, f) {
    if(a ? a.cljs$core$IFn$_invoke__6 : a) {
      a = a.cljs$core$IFn$_invoke__6(a, b, c, d, e, f)
    }else {
      var g;
      g = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!g && (g = cljs.core._invoke._, !g)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = g.call(null, a, b, c, d, e, f)
    }
    return a
  }, h = function(a, b, c, d, e, f, g) {
    if(a ? a.cljs$core$IFn$_invoke__7 : a) {
      a = a.cljs$core$IFn$_invoke__7(a, b, c, d, e, f, g)
    }else {
      var h;
      h = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!h && (h = cljs.core._invoke._, !h)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = h.call(null, a, b, c, d, e, f, g)
    }
    return a
  }, i = function(a, b, c, d, e, f, g, h) {
    if(a ? a.cljs$core$IFn$_invoke__8 : a) {
      a = a.cljs$core$IFn$_invoke__8(a, b, c, d, e, f, g, h)
    }else {
      var i;
      i = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!i && (i = cljs.core._invoke._, !i)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = i.call(null, a, b, c, d, e, f, g, h)
    }
    return a
  }, j = function(a, b, c, d, e, f, g, h, i) {
    if(a ? a.cljs$core$IFn$_invoke__9 : a) {
      a = a.cljs$core$IFn$_invoke__9(a, b, c, d, e, f, g, h, i)
    }else {
      var j;
      j = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!j && (j = cljs.core._invoke._, !j)) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = j.call(null, a, b, c, d, e, f, g, h, i)
    }
    return a
  }, k = function(a, b, c, d, e, f, g, h, i, j) {
    if(cljs.core.truth_(a ? a.cljs$core$IFn$_invoke__10 : a)) {
      a = a.cljs$core$IFn$_invoke__10(a, b, c, d, e, f, g, h, i, j)
    }else {
      var m;
      m = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(m) && (m = cljs.core._invoke._, !cljs.core.truth_(m))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = m.call(null, a, b, c, d, e, f, g, h, i, j)
    }
    return a
  }, l = function(a, b, c, d, e, f, g, h, i, j, m) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__11 : a)) {
      a = a.cljs$core$IFn$_invoke__11(a, b, c, d, e, f, g, h, i, j, m)
    }else {
      var k;
      k = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(k) && (k = cljs.core._invoke._, !cljs.core.truth_(k))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = k.call(null, a, b, c, d, e, f, g, h, i, j, m)
    }
    return a
  }, m = function(a, b, c, d, e, f, g, h, i, j, m, k) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__12 : a)) {
      a = a.cljs$core$IFn$_invoke__12(a, b, c, d, e, f, g, h, i, j, m, k)
    }else {
      var l;
      l = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(l) && (l = cljs.core._invoke._, !cljs.core.truth_(l))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = l.call(null, a, b, c, d, e, f, g, h, i, j, m, k)
    }
    return a
  }, o = function(a, b, c, d, e, f, g, h, i, j, m, k, l) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__13 : a)) {
      a = a.cljs$core$IFn$_invoke__13(a, b, c, d, e, f, g, h, i, j, m, k, l)
    }else {
      var o;
      o = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(o) && (o = cljs.core._invoke._, !cljs.core.truth_(o))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = o.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l)
    }
    return a
  }, n = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__14 : a)) {
      a = a.cljs$core$IFn$_invoke__14(a, b, c, d, e, f, g, h, i, j, m, k, l, o)
    }else {
      var n;
      n = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(n) && (n = cljs.core._invoke._, !cljs.core.truth_(n))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = n.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o)
    }
    return a
  }, r = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__15 : a)) {
      a = a.cljs$core$IFn$_invoke__15(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n)
    }else {
      var q;
      q = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(q) && (q = cljs.core._invoke._, !cljs.core.truth_(q))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = q.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n)
    }
    return a
  }, z = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__16 : a)) {
      a = a.cljs$core$IFn$_invoke__16(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q)
    }else {
      var r;
      r = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(r) && (r = cljs.core._invoke._, !cljs.core.truth_(r))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = r.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q)
    }
    return a
  }, M = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__17 : a)) {
      a = a.cljs$core$IFn$_invoke__17(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r)
    }else {
      var u;
      u = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(u) && (u = cljs.core._invoke._, !cljs.core.truth_(u))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = u.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r)
    }
    return a
  }, E = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__18 : a)) {
      a = a.cljs$core$IFn$_invoke__18(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u)
    }else {
      var z;
      z = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(z) && (z = cljs.core._invoke._, !cljs.core.truth_(z))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = z.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u)
    }
    return a
  }, D = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__19 : a)) {
      a = a.cljs$core$IFn$_invoke__19(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z)
    }else {
      var D;
      D = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(D) && (D = cljs.core._invoke._, !cljs.core.truth_(D))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = D.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z)
    }
    return a
  }, F = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__20 : a)) {
      a = a.cljs$core$IFn$_invoke__20(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D)
    }else {
      var E;
      E = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(E) && (E = cljs.core._invoke._, !cljs.core.truth_(E))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = E.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D)
    }
    return a
  }, N = function(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D, E) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke__21 : a)) {
      a = a.cljs$core$IFn$_invoke__21(a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D, E)
    }else {
      var F;
      F = cljs.core._invoke[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(F) && (F = cljs.core._invoke._, !cljs.core.truth_(F))) {
        throw cljs.core.missing_protocol("IFn.-invoke", a);
      }
      a = F.call(null, a, b, c, d, e, f, g, h, i, j, m, k, l, o, n, q, r, u, z, D, E)
    }
    return a
  }, a = function(a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L, u, O, P, R) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, p);
      case 3:
        return d.call(this, a, p, s);
      case 4:
        return e.call(this, a, p, s, v);
      case 5:
        return f.call(this, a, p, s, v, x);
      case 6:
        return g.call(this, a, p, s, v, x, y);
      case 7:
        return h.call(this, a, p, s, v, x, y, A);
      case 8:
        return i.call(this, a, p, s, v, x, y, A, B);
      case 9:
        return j.call(this, a, p, s, v, x, y, A, B, C);
      case 10:
        return k.call(this, a, p, s, v, x, y, A, B, C, w);
      case 11:
        return l.call(this, a, p, s, v, x, y, A, B, C, w, H);
      case 12:
        return m.call(this, a, p, s, v, x, y, A, B, C, w, H, G);
      case 13:
        return o.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I);
      case 14:
        return n.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J);
      case 15:
        return r.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K);
      case 16:
        return z.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q);
      case 17:
        return M.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L);
      case 18:
        return E.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L, u);
      case 19:
        return D.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L, u, O);
      case 20:
        return F.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L, u, O, P);
      case 21:
        return N.call(this, a, p, s, v, x, y, A, B, C, w, H, G, I, J, K, q, L, u, O, P, R)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  a.__5 = f;
  a.__6 = g;
  a.__7 = h;
  a.__8 = i;
  a.__9 = j;
  a.__10 = k;
  a.__11 = l;
  a.__12 = m;
  a.__13 = o;
  a.__14 = n;
  a.__15 = r;
  a.__16 = z;
  a.__17 = M;
  a.__18 = E;
  a.__19 = D;
  a.__20 = F;
  a.__21 = N;
  return a
}();
cljs.core.ICounted = {};
cljs.core._count = function(a) {
  if(a ? a.cljs$core$ICounted$_count__1 : a) {
    a = a.cljs$core$ICounted$_count__1(a)
  }else {
    var b;
    b = cljs.core._count[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._count._, !b)) {
      throw cljs.core.missing_protocol("ICounted.-count", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function(a) {
  if(cljs.core.truth_(a ? a.cljs$core$IEmptyableCollection$_empty__1 : a)) {
    a = a.cljs$core$IEmptyableCollection$_empty__1(a)
  }else {
    var b;
    b = cljs.core._empty[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._empty._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("IEmptyableCollection.-empty", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ICollection = {};
cljs.core._conj = function(a, b) {
  var c;
  if(cljs.core.truth_(a ? a.cljs$core$ICollection$_conj__2 : a)) {
    c = a.cljs$core$ICollection$_conj__2(a, b)
  }else {
    c = cljs.core._conj[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._conj._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("ICollection.-conj", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var a = null, b = function(a, b) {
    var c;
    if(cljs.core.truth_(a ? a.cljs$core$IIndexed$_nth__2 : a)) {
      c = a.cljs$core$IIndexed$_nth__2(a, b)
    }else {
      c = cljs.core._nth[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(c) && (c = cljs.core._nth._, !cljs.core.truth_(c))) {
        throw cljs.core.missing_protocol("IIndexed.-nth", a);
      }
      c = c.call(null, a, b)
    }
    return c
  }, c = function(a, b, c) {
    if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IIndexed$_nth__3 : a)) {
      a = a.cljs$core$IIndexed$_nth__3(a, b, c)
    }else {
      var g;
      g = cljs.core._nth[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(g) && (g = cljs.core._nth._, !cljs.core.truth_(g))) {
        throw cljs.core.missing_protocol("IIndexed.-nth", a);
      }
      a = g.call(null, a, b, c)
    }
    return a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.ISeq = {};
cljs.core._first = function(a) {
  if(cljs.core.truth_(a) ? a.cljs$core$ISeq$_first__1 : a) {
    a = a.cljs$core$ISeq$_first__1(a)
  }else {
    var b;
    b = cljs.core._first[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._first._, !b)) {
      throw cljs.core.missing_protocol("ISeq.-first", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._rest = function(a) {
  if(a ? a.cljs$core$ISeq$_rest__1 : a) {
    a = a.cljs$core$ISeq$_rest__1(a)
  }else {
    var b;
    b = cljs.core._rest[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._rest._, !b)) {
      throw cljs.core.missing_protocol("ISeq.-rest", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var a = null, b = function(a, b) {
    var c;
    if(cljs.core.truth_(a ? a.cljs$core$ILookup$_lookup__2 : a)) {
      c = a.cljs$core$ILookup$_lookup__2(a, b)
    }else {
      c = cljs.core._lookup[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(c) && (c = cljs.core._lookup._, !cljs.core.truth_(c))) {
        throw cljs.core.missing_protocol("ILookup.-lookup", a);
      }
      c = c.call(null, a, b)
    }
    return c
  }, c = function(a, b, c) {
    if(cljs.core.truth_(a) ? a.cljs$core$ILookup$_lookup__3 : a) {
      a = a.cljs$core$ILookup$_lookup__3(a, b, c)
    }else {
      var g;
      g = cljs.core._lookup[goog.typeOf.call(null, a)];
      if(!g && (g = cljs.core._lookup._, !g)) {
        throw cljs.core.missing_protocol("ILookup.-lookup", a);
      }
      a = g.call(null, a, b, c)
    }
    return a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function(a, b) {
  var c;
  if(cljs.core.truth_(a) ? a.cljs$core$IAssociative$_contains_key_QMARK___2 : a) {
    c = a.cljs$core$IAssociative$_contains_key_QMARK___2(a, b)
  }else {
    c = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._contains_key_QMARK_._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("IAssociative.-contains-key?", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._assoc = function(a, b, c) {
  if(cljs.core.truth_(a ? a.cljs$core$IAssociative$_assoc__3 : a)) {
    a = a.cljs$core$IAssociative$_assoc__3(a, b, c)
  }else {
    var d;
    d = cljs.core._assoc[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._assoc._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol("IAssociative.-assoc", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IMap = {};
cljs.core._dissoc = function(a, b) {
  var c;
  if(cljs.core.truth_(a ? a.cljs$core$IMap$_dissoc__2 : a)) {
    c = a.cljs$core$IMap$_dissoc__2(a, b)
  }else {
    c = cljs.core._dissoc[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._dissoc._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("IMap.-dissoc", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IMapEntry = {};
cljs.core._key = function(a) {
  if(a ? a.cljs$core$IMapEntry$_key__1 : a) {
    a = a.cljs$core$IMapEntry$_key__1(a)
  }else {
    var b;
    b = cljs.core._key[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._key._, !b)) {
      throw cljs.core.missing_protocol("IMapEntry.-key", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._val = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMapEntry$_val__1 : a)) {
    a = a.cljs$core$IMapEntry$_val__1(a)
  }else {
    var b;
    b = cljs.core._val[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._val._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("IMapEntry.-val", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ISet = {};
cljs.core._disjoin = function(a, b) {
  var c;
  if(cljs.core.truth_(a) ? a.cljs$core$ISet$_disjoin__2 : a) {
    c = a.cljs$core$ISet$_disjoin__2(a, b)
  }else {
    c = cljs.core._disjoin[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._disjoin._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("ISet.-disjoin", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IStack = {};
cljs.core._peek = function(a) {
  if(cljs.core.truth_(a ? a.cljs$core$IStack$_peek__1 : a)) {
    a = a.cljs$core$IStack$_peek__1(a)
  }else {
    var b;
    b = cljs.core._peek[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._peek._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("IStack.-peek", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._pop = function(a) {
  if(cljs.core.truth_(a) ? a.cljs$core$IStack$_pop__1 : a) {
    a = a.cljs$core$IStack$_pop__1(a)
  }else {
    var b;
    b = cljs.core._pop[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._pop._, !b)) {
      throw cljs.core.missing_protocol("IStack.-pop", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IVector = {};
cljs.core._assoc_n = function(a, b, c) {
  if(a ? a.cljs$core$IVector$_assoc_n__3 : a) {
    a = a.cljs$core$IVector$_assoc_n__3(a, b, c)
  }else {
    var d;
    d = cljs.core._assoc_n[goog.typeOf.call(null, a)];
    if(!d && (d = cljs.core._assoc_n._, !d)) {
      throw cljs.core.missing_protocol("IVector.-assoc-n", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IDeref = {};
cljs.core._deref = function(a) {
  if(cljs.core.truth_(a) ? a.cljs$core$IDeref$_deref__1 : a) {
    a = a.cljs$core$IDeref$_deref__1(a)
  }else {
    var b;
    b = cljs.core._deref[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._deref._, !b)) {
      throw cljs.core.missing_protocol("IDeref.-deref", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function(a, b, c) {
  if(cljs.core.truth_(a) ? a.cljs$core$IDerefWithTimeout$_deref_with_timeout__3 : a) {
    a = a.cljs$core$IDerefWithTimeout$_deref_with_timeout__3(a, b, c)
  }else {
    var d;
    d = cljs.core._deref_with_timeout[goog.typeOf.call(null, a)];
    if(!d && (d = cljs.core._deref_with_timeout._, !d)) {
      throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IMeta = {};
cljs.core._meta = function(a) {
  if(a ? a.cljs$core$IMeta$_meta__1 : a) {
    a = a.cljs$core$IMeta$_meta__1(a)
  }else {
    var b;
    b = cljs.core._meta[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._meta._, !b)) {
      throw cljs.core.missing_protocol("IMeta.-meta", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function(a, b) {
  var c;
  if(a ? a.cljs$core$IWithMeta$_with_meta__2 : a) {
    c = a.cljs$core$IWithMeta$_with_meta__2(a, b)
  }else {
    c = cljs.core._with_meta[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._with_meta._, !c)) {
      throw cljs.core.missing_protocol("IWithMeta.-with-meta", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var a = null, b = function(a, b) {
    var c;
    if(cljs.core.truth_(a ? a.cljs$core$IReduce$_reduce__2 : a)) {
      c = a.cljs$core$IReduce$_reduce__2(a, b)
    }else {
      c = cljs.core._reduce[goog.typeOf.call(null, a)];
      if(!cljs.core.truth_(c) && (c = cljs.core._reduce._, !cljs.core.truth_(c))) {
        throw cljs.core.missing_protocol("IReduce.-reduce", a);
      }
      c = c.call(null, a, b)
    }
    return c
  }, c = function(a, b, c) {
    if(cljs.core.truth_(a) ? a.cljs$core$IReduce$_reduce__3 : a) {
      a = a.cljs$core$IReduce$_reduce__3(a, b, c)
    }else {
      var g;
      g = cljs.core._reduce[goog.typeOf.call(null, a)];
      if(!g && (g = cljs.core._reduce._, !g)) {
        throw cljs.core.missing_protocol("IReduce.-reduce", a);
      }
      a = g.call(null, a, b, c)
    }
    return a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IEquiv$_equiv__2 : a)) {
    c = a.cljs$core$IEquiv$_equiv__2(a, b)
  }else {
    c = cljs.core._equiv[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._equiv._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("IEquiv.-equiv", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IHash = {};
cljs.core._hash = function(a) {
  if(a ? a.cljs$core$IHash$_hash__1 : a) {
    a = a.cljs$core$IHash$_hash__1(a)
  }else {
    var b;
    b = cljs.core._hash[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._hash._, !b)) {
      throw cljs.core.missing_protocol("IHash.-hash", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ISeqable = {};
cljs.core._seq = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ISeqable$_seq__1 : a)) {
    a = a.cljs$core$ISeqable$_seq__1(a)
  }else {
    var b;
    b = cljs.core._seq[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._seq._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("ISeqable.-seq", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = function(a) {
  if(a ? a.cljs$core$IReversible$_rseq__1 : a) {
    a = a.cljs$core$IReversible$_rseq__1(a)
  }else {
    var b;
    b = cljs.core._rseq[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._rseq._, !b)) {
      throw cljs.core.missing_protocol("IReversible.-rseq", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function(a, b) {
  var c;
  if(a ? a.cljs$core$IPrintable$_pr_seq__2 : a) {
    c = a.cljs$core$IPrintable$_pr_seq__2(a, b)
  }else {
    c = cljs.core._pr_seq[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._pr_seq._, !c)) {
      throw cljs.core.missing_protocol("IPrintable.-pr-seq", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function(a) {
  if(a ? a.cljs$core$IPending$_realized_QMARK___1 : a) {
    a = a.cljs$core$IPending$_realized_QMARK___1(a)
  }else {
    var b;
    b = cljs.core._realized_QMARK_[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._realized_QMARK_._, !b)) {
      throw cljs.core.missing_protocol("IPending.-realized?", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IWatchable$_notify_watches__3 : a)) {
    a = a.cljs$core$IWatchable$_notify_watches__3(a, b, c)
  }else {
    var d;
    d = cljs.core._notify_watches[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._notify_watches._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol("IWatchable.-notify-watches", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._add_watch = function(a, b, c) {
  if(cljs.core.truth_(a) ? a.cljs$core$IWatchable$_add_watch__3 : a) {
    a = a.cljs$core$IWatchable$_add_watch__3(a, b, c)
  }else {
    var d;
    d = cljs.core._add_watch[goog.typeOf.call(null, a)];
    if(!d && (d = cljs.core._add_watch._, !d)) {
      throw cljs.core.missing_protocol("IWatchable.-add-watch", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._remove_watch = function(a, b) {
  var c;
  if(cljs.core.truth_(a ? a.cljs$core$IWatchable$_remove_watch__2 : a)) {
    c = a.cljs$core$IWatchable$_remove_watch__2(a, b)
  }else {
    c = cljs.core._remove_watch[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._remove_watch._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("IWatchable.-remove-watch", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.identical_QMARK_ = function(a, b) {
  return a === b
};
cljs.core._EQ_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core._equiv(a, b)
  }, c = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(cljs.core.truth_(cljs.core._equiv(a, b))) {
          if(cljs.core.truth_(cljs.core.next(c))) {
            a = b, b = cljs.core.first(c), c = cljs.core.next(c)
          }else {
            return cljs.core._equiv(b, cljs.core.first(c))
          }
        }else {
          return!1
        }
      }
    }, b = function(b, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, c, i)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, c, e, b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.nil_QMARK_ = function(a) {
  return null === a
};
cljs.core.type = function(a) {
  var b = null === a;
  return(b ? b : void 0 === a) ? null : a.constructor
};
cljs.core.IHash["null"] = !0;
cljs.core._hash["null"] = function() {
  return 0
};
cljs.core.ILookup["null"] = !0;
cljs.core._lookup["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IAssociative["null"] = !0;
cljs.core._assoc["null"] = function(a, b, c) {
  return cljs.core.hash_map(b, c)
};
cljs.core.ICollection["null"] = !0;
cljs.core._conj["null"] = function(a, b) {
  return cljs.core.list(b)
};
cljs.core.IReduce["null"] = !0;
cljs.core._reduce["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(null);
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IPrintable["null"] = !0;
cljs.core._pr_seq["null"] = function() {
  return cljs.core.list("nil")
};
cljs.core.ISet["null"] = !0;
cljs.core._disjoin["null"] = function() {
  return null
};
cljs.core.ICounted["null"] = !0;
cljs.core._count["null"] = function() {
  return 0
};
cljs.core.IStack["null"] = !0;
cljs.core._peek["null"] = function() {
  return null
};
cljs.core._pop["null"] = function() {
  return null
};
cljs.core.ISeq["null"] = !0;
cljs.core._first["null"] = function() {
  return null
};
cljs.core._rest["null"] = function() {
  return cljs.core.list()
};
cljs.core.IEquiv["null"] = !0;
cljs.core._equiv["null"] = function(a, b) {
  return null === b
};
cljs.core.IWithMeta["null"] = !0;
cljs.core._with_meta["null"] = function() {
  return null
};
cljs.core.IMeta["null"] = !0;
cljs.core._meta["null"] = function() {
  return null
};
cljs.core.IIndexed["null"] = !0;
cljs.core._nth["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IEmptyableCollection["null"] = !0;
cljs.core._empty["null"] = function() {
  return null
};
cljs.core.IMap["null"] = !0;
cljs.core._dissoc["null"] = function() {
  return null
};
Date.prototype.cljs$core$IEquiv$ = !0;
Date.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return a.toString() === b.toString()
};
cljs.core.IHash.number = !0;
cljs.core._hash.number = function(a) {
  return a
};
cljs.core.IEquiv.number = !0;
cljs.core._equiv.number = function(a, b) {
  return a === b
};
cljs.core.IHash["boolean"] = !0;
cljs.core._hash["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
cljs.core.IHash["function"] = !0;
cljs.core._hash["function"] = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.inc = function(a) {
  return a + 1
};
cljs.core.ci_reduce = function() {
  var a = null, b = function(a, b) {
    if(cljs.core._EQ_.__2(0, cljs.core._count(a))) {
      return b.call(null)
    }
    for(var c = cljs.core._nth.__2(a, 0), d = 1;;) {
      if(d < cljs.core._count(a)) {
        c = b.call(null, c, cljs.core._nth.__2(a, d)), d += 1
      }else {
        return c
      }
    }
  }, c = function(a, b, c) {
    for(var d = 0;;) {
      if(d < cljs.core._count(a)) {
        c = b.call(null, c, cljs.core._nth.__2(a, d)), d += 1
      }else {
        return c
      }
    }
  }, d = function(a, b, c, d) {
    for(;;) {
      if(d < cljs.core._count(a)) {
        c = b.call(null, c, cljs.core._nth.__2(a, d)), d += 1
      }else {
        return c
      }
    }
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  return a
}();
cljs.core.IndexedSeq = function(a, b) {
  this.a = a;
  this.i = b
};
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.cons(b, a)
};
cljs.core.IndexedSeq.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__2 = function(a, b) {
  return cljs.core.ci_reduce.__4(this.a, b, this.a[this.i], this.i + 1)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__3 = function(a, b, c) {
  return cljs.core.ci_reduce.__4(this.a, b, c, this.i)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return a
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.a.length - this.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first__1 = function() {
  return this.a[this.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest__1 = function() {
  return this.i + 1 < this.a.length ? new cljs.core.IndexedSeq(this.a, this.i + 1) : cljs.core.list()
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
  var c = b + this.i;
  return c < this.a.length ? this.a[c] : null
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
  a = b + this.i;
  return a < this.a.length ? this.a[a] : c
};
cljs.core.prim_seq = function(a, b) {
  return cljs.core._EQ_.__2(0, a.length) ? null : new cljs.core.IndexedSeq(a, b)
};
cljs.core.array_seq = function(a, b) {
  return cljs.core.prim_seq(a, b)
};
cljs.core.IReduce.array = !0;
cljs.core._reduce.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.__2(a, c);
      case 3:
        return cljs.core.ci_reduce.__3(a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.array = !0;
cljs.core._lookup.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return cljs.core._nth.__3(a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.array = !0;
cljs.core._nth.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : null;
      case 3:
        return c < a.length ? a[c] : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.array = !0;
cljs.core._count.array = function(a) {
  return a.length
};
cljs.core.ISeqable.array = !0;
cljs.core._seq.array = function(a) {
  return cljs.core.array_seq(a, 0)
};
cljs.core.seq = function(a) {
  return cljs.core.truth_(a) ? cljs.core._seq(a) : null
};
cljs.core.first = function(a) {
  a = cljs.core.seq(a);
  return cljs.core.truth_(a) ? cljs.core._first(a) : null
};
cljs.core.rest = function(a) {
  return cljs.core._rest(cljs.core.seq(a))
};
cljs.core.next = function(a) {
  return cljs.core.truth_(a) ? cljs.core.seq(cljs.core.rest(a)) : null
};
cljs.core.second = function(a) {
  return cljs.core.first(cljs.core.next(a))
};
cljs.core.ffirst = function(a) {
  return cljs.core.first(cljs.core.first(a))
};
cljs.core.nfirst = function(a) {
  return cljs.core.next(cljs.core.first(a))
};
cljs.core.fnext = function(a) {
  return cljs.core.first(cljs.core.next(a))
};
cljs.core.nnext = function(a) {
  return cljs.core.next(cljs.core.next(a))
};
cljs.core.last = function(a) {
  for(;;) {
    if(cljs.core.truth_(cljs.core.next(a))) {
      a = cljs.core.next(a)
    }else {
      return cljs.core.first(a)
    }
  }
};
cljs.core.ICounted._ = !0;
cljs.core._count._ = function(a) {
  for(var a = cljs.core.seq(a), b = 0;;) {
    if(cljs.core.truth_(a)) {
      a = cljs.core.next(a), b += 1
    }else {
      return b
    }
  }
};
cljs.core.IEquiv._ = !0;
cljs.core._equiv._ = function(a, b) {
  return a === b
};
cljs.core.not = function(a) {
  return cljs.core.truth_(a) ? !1 : !0
};
cljs.core.conj = function() {
  var a = null, b = function(a, b) {
    return cljs.core._conj(a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(d)) {
          b = a.call(null, b, c), c = cljs.core.first(d), d = cljs.core.next(d)
        }else {
          return a.call(null, b, c)
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.empty = function(a) {
  return cljs.core._empty(a)
};
cljs.core.count = function(a) {
  return cljs.core._count(a)
};
cljs.core.nth = function() {
  var a = null, b = function(a, b) {
    return cljs.core._nth.__2(a, Math.floor(b))
  }, c = function(a, b, c) {
    return cljs.core._nth.__3(a, Math.floor(b), c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.get = function() {
  var a = null, b = function(a, b) {
    return cljs.core._lookup.__2(a, b)
  }, c = function(a, b, c) {
    return cljs.core._lookup.__3(a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.assoc = function() {
  var a = null, b = function(a, b, c) {
    return cljs.core._assoc(a, b, c)
  }, c = function() {
    var b = function(b, c, d, e) {
      for(;;) {
        if(b = a.call(null, b, c, d), cljs.core.truth_(e)) {
          c = cljs.core.first(e), d = cljs.core.second(e), e = cljs.core.nnext(e)
        }else {
          return b
        }
      }
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, c, e, i, a)
    };
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__3 = b;
  a.__4 = c;
  return a
}();
cljs.core.dissoc = function() {
  var a = null, b = function(a, b) {
    return cljs.core._dissoc(a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first(d), d = cljs.core.next(d)
        }else {
          return b
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function(a) {
    return a
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.with_meta = function(a, b) {
  return cljs.core._with_meta(a, b)
};
cljs.core.meta = function(a) {
  return cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(a)) {
        var b = a.cljs$core$IMeta$;
        return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IMeta$")) : b
      }
      return a
    }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IMeta, a)
  }()) ? cljs.core._meta(a) : null
};
cljs.core.peek = function(a) {
  return cljs.core._peek(a)
};
cljs.core.pop = function(a) {
  return cljs.core._pop(a)
};
cljs.core.disj = function() {
  var a = null, b = function(a, b) {
    return cljs.core._disjoin(a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first(d), d = cljs.core.next(d)
        }else {
          return b
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function(a) {
    return a
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.hash = function(a) {
  return cljs.core._hash(a)
};
cljs.core.empty_QMARK_ = function(a) {
  return cljs.core.not(cljs.core.seq(a))
};
cljs.core.coll_QMARK_ = function(a) {
  return null === a ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ICollection$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ICollection$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ICollection, a)
};
cljs.core.set_QMARK_ = function(a) {
  return null === a ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISet$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISet$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISet, a)
};
cljs.core.associative_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IAssociative$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IAssociative$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IAssociative, a)
};
cljs.core.sequential_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISequential$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISequential$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISequential, a)
};
cljs.core.counted_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ICounted$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ICounted$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ICounted, a)
};
cljs.core.map_QMARK_ = function(a) {
  return null === a ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IMap$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IMap$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IMap, a)
};
cljs.core.vector_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IVector$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IVector$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IVector, a)
};
cljs.core.js_obj = function() {
  return{}
};
cljs.core.js_keys = function(a) {
  var b = [];
  goog.object.forEach.call(null, a, function(a, d) {
    return b.push(d)
  });
  return b
};
cljs.core.js_delete = function(a, b) {
  return delete a[b]
};
cljs.core.lookup_sentinel = cljs.core.js_obj();
cljs.core.false_QMARK_ = function(a) {
  return!1 === a
};
cljs.core.true_QMARK_ = function(a) {
  return!0 === a
};
cljs.core.undefined_QMARK_ = function(a) {
  return void 0 === a
};
cljs.core.instance_QMARK_ = function(a, b) {
  return null != b && (b instanceof a || b.constructor === a || a === Object)
};
cljs.core.seq_QMARK_ = function(a) {
  return null === a ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISeq$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISeq$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISeq, a)
};
cljs.core.boolean$ = function(a) {
  return cljs.core.truth_(a) ? !0 : !1
};
cljs.core.string_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core.not(function() {
    var b = cljs.core._EQ_.__2(a.charAt(0), "\ufdd0");
    return b ? b : cljs.core._EQ_.__2(a.charAt(0), "\ufdd1")
  }()) : b
};
cljs.core.keyword_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core._EQ_.__2(a.charAt(0), "\ufdd0") : b
};
cljs.core.symbol_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core._EQ_.__2(a.charAt(0), "\ufdd1") : b
};
cljs.core.number_QMARK_ = function(a) {
  return goog.isNumber.call(null, a)
};
cljs.core.fn_QMARK_ = function(a) {
  return goog.isFunction.call(null, a)
};
cljs.core.ifn_QMARK_ = function(a) {
  var b = cljs.core.fn_QMARK_(a);
  return b ? b : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IFn$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IFn$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IFn, a)
};
cljs.core.integer_QMARK_ = function(a) {
  var b = cljs.core.number_QMARK_(a);
  return b ? a == a.toFixed() : b
};
cljs.core.contains_QMARK_ = function(a, b) {
  return cljs.core._lookup.__3(a, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? !1 : !0
};
cljs.core.find = function(a, b) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var c = cljs.core.associative_QMARK_(a);
      return c ? cljs.core.contains_QMARK_(a, b) : c
    }
    return a
  }()) ? cljs.core.PersistentVector.fromArray([b, cljs.core._lookup.__2(a, b)]) : null
};
cljs.core.distinct_QMARK_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core.not(cljs.core._EQ_.__2(a, b))
  }, c = function() {
    var a = function(a, b, c) {
      if(cljs.core.not(cljs.core._EQ_.__2(a, b))) {
        a = cljs.core.set([b, a]);
        for(b = c;;) {
          var d = cljs.core.first(b), c = cljs.core.next(b);
          if(cljs.core.truth_(b)) {
            if(cljs.core.contains_QMARK_(a, d)) {
              return!1
            }
            a = cljs.core.conj.__2(a, d);
            b = c
          }else {
            return!0
          }
        }
      }else {
        return!1
      }
    }, b = function(b, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, c, i)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, c, e, b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.compare = function(a, b) {
  return goog.array.defaultCompare.call(null, a, b)
};
cljs.core.fn__GT_comparator = function(a) {
  return cljs.core._EQ_.__2(a, cljs.core.compare) ? cljs.core.compare : function(b, c) {
    var d = a.call(null, b, c);
    return cljs.core.number_QMARK_(d) ? d : cljs.core.truth_(d) ? -1 : cljs.core.truth_(a.call(null, c, b)) ? 1 : 0
  }
};
cljs.core.sort = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.compare, b)
  }, c = function(a, b) {
    if(cljs.core.truth_(cljs.core.seq(b))) {
      var c = cljs.core.to_array(b);
      goog.array.stableSort.call(null, c, cljs.core.fn__GT_comparator(a));
      return cljs.core.seq(c)
    }
    return cljs.core.List.EMPTY
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.sort_by = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, cljs.core.compare, c)
  }, c = function(a, b, c) {
    return cljs.core.sort.__2(function(c, f) {
      return cljs.core.fn__GT_comparator(b).call(null, a.call(null, c), a.call(null, f))
    }, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.reduce = function() {
  var a = null, b = function(a, b) {
    return cljs.core._reduce.__2(b, a)
  }, c = function(a, b, c) {
    return cljs.core._reduce.__3(c, a, b)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.seq_reduce = function() {
  var a = null, b = function(a, b) {
    var c = cljs.core.seq(b);
    return cljs.core.truth_(c) ? cljs.core.reduce.__3(a, cljs.core.first(c), cljs.core.next(c)) : a.call(null)
  }, c = function(a, b, c) {
    for(c = cljs.core.seq(c);;) {
      if(cljs.core.truth_(c)) {
        b = a.call(null, b, cljs.core.first(c)), c = cljs.core.next(c)
      }else {
        return b
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.IReduce._ = !0;
cljs.core._reduce._ = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.seq_reduce.__2(c, a);
      case 3:
        return cljs.core.seq_reduce.__3(c, d, a)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core._PLUS_ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, b + c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, c + f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__0 = function() {
    return 0
  };
  a.__1 = function(a) {
    return a
  };
  a.__2 = function(a, b) {
    return a + b
  };
  a.__3 = b;
  return a
}();
cljs.core._ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, b - c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, c - f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__1 = function(a) {
    return-a
  };
  a.__2 = function(a, b) {
    return a - b
  };
  a.__3 = b;
  return a
}();
cljs.core._STAR_ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, b * c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, c * f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__0 = function() {
    return 1
  };
  a.__1 = function(a) {
    return a
  };
  a.__2 = function(a, b) {
    return a * b
  };
  a.__3 = b;
  return a
}();
cljs.core._SLASH_ = function() {
  var a = null, b = function(b) {
    return a.call(null, 1, b)
  }, c = function() {
    var b = function(b, c, d) {
      var h = null;
      goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, a.call(null, b, c), h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, a.call(null, c, d), b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return a / e;
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = function(a, b) {
    return a / b
  };
  a.__3 = c;
  return a
}();
cljs.core._LT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a < b) {
          if(cljs.core.truth_(cljs.core.next(c))) {
            a = b, b = cljs.core.first(c), c = cljs.core.next(c)
          }else {
            return b < cljs.core.first(c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = function(a, b) {
    return a < b
  };
  a.__3 = b;
  return a
}();
cljs.core._LT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a <= b) {
          if(cljs.core.truth_(cljs.core.next(c))) {
            a = b, b = cljs.core.first(c), c = cljs.core.next(c)
          }else {
            return b <= cljs.core.first(c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = function(a, b) {
    return a <= b
  };
  a.__3 = b;
  return a
}();
cljs.core._GT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a > b) {
          if(cljs.core.truth_(cljs.core.next(c))) {
            a = b, b = cljs.core.first(c), c = cljs.core.next(c)
          }else {
            return b > cljs.core.first(c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = function(a, b) {
    return a > b
  };
  a.__3 = b;
  return a
}();
cljs.core._GT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a >= b) {
          if(cljs.core.truth_(cljs.core.next(c))) {
            a = b, b = cljs.core.first(c), c = cljs.core.next(c)
          }else {
            return b >= cljs.core.first(c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = function(a, b) {
    return a >= b
  };
  a.__3 = b;
  return a
}();
cljs.core.dec = function(a) {
  return a - 1
};
cljs.core.max = function() {
  var a = null, b = function(a, b) {
    return a > b ? a : b
  }, c = function() {
    var b = function(b, c, d) {
      var h = null;
      goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, b > c ? b : c, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, c > d ? c : d, b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function(a) {
    return a
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.min = function() {
  var a = null, b = function(a, b) {
    return a < b ? a : b
  }, c = function() {
    var b = function(b, c, d) {
      var h = null;
      goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.__3(a, b < c ? b : c, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.__3(a, c < d ? c : d, b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function(a) {
    return a
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.fix = function(a) {
  return 0 <= a ? Math.floor.call(null, a) : Math.ceil.call(null, a)
};
cljs.core.mod = function(a, b) {
  return a % b
};
cljs.core.quot = function(a, b) {
  return cljs.core.fix((a - a % b) / b)
};
cljs.core.rem = function(a, b) {
  var c = cljs.core.quot(a, b);
  return a - b * c
};
cljs.core.rand = function() {
  var a = null, b = function() {
    return Math.random.call(null)
  }, c = function(b) {
    return b * a.call(null)
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__0 = b;
  a.__1 = c;
  return a
}();
cljs.core.rand_int = function(a) {
  return cljs.core.fix(cljs.core.rand.__1(a))
};
cljs.core.bit_xor = function(a, b) {
  return a ^ b
};
cljs.core.bit_and = function(a, b) {
  return a & b
};
cljs.core.bit_or = function(a, b) {
  return a | b
};
cljs.core.bit_and_not = function(a, b) {
  return a & ~b
};
cljs.core.bit_clear = function(a, b) {
  return a & ~(1 << b)
};
cljs.core.bit_flip = function(a, b) {
  return a ^ 1 << b
};
cljs.core.bit_not = function(a) {
  return~a
};
cljs.core.bit_set = function(a, b) {
  return a | 1 << b
};
cljs.core.bit_test = function(a, b) {
  return 0 != (a & 1 << b)
};
cljs.core.bit_shift_left = function(a, b) {
  return a << b
};
cljs.core.bit_shift_right = function(a, b) {
  return a >> b
};
cljs.core._EQ__EQ_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core._equiv(a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(a.call(null, b, c))) {
          if(cljs.core.truth_(cljs.core.next(d))) {
            b = c, c = cljs.core.first(d), d = cljs.core.next(d)
          }else {
            return a.call(null, c, cljs.core.first(d))
          }
        }else {
          return!1
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = function() {
    return!0
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.pos_QMARK_ = function(a) {
  return 0 < a
};
cljs.core.zero_QMARK_ = function(a) {
  return 0 === a
};
cljs.core.neg_QMARK_ = function(a) {
  return 0 > a
};
cljs.core.nthnext = function(a, b) {
  for(var c = b, d = cljs.core.seq(a);;) {
    if(cljs.core.truth_(function() {
      var a = d;
      return cljs.core.truth_(a) ? 0 < c : a
    }())) {
      var e = c - 1, f = cljs.core.next(d), c = e, d = f
    }else {
      return d
    }
  }
};
cljs.core.IIndexed._ = !0;
cljs.core._nth._ = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = cljs.core.nthnext(a, c);
        if(cljs.core.truth_(e)) {
          e = cljs.core.first(e)
        }else {
          throw Error("Index out of bounds");
        }
        return e;
      case 3:
        return e = cljs.core.nthnext(a, c), e = cljs.core.truth_(e) ? cljs.core.first(e) : d, e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.str_STAR_ = function() {
  var a = null, b = function(a) {
    return null === a ? "" : a.toString()
  }, c = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first(c))), e = cljs.core.next(c), b = d, c = e
          }else {
            return a.call(null, b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return b.call(this, a);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__0 = function() {
    return""
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.str = function() {
  var a = null, b = function(a) {
    return cljs.core.symbol_QMARK_(a) ? a.substring(2, a.length) : cljs.core.keyword_QMARK_(a) ? cljs.core.str_STAR_(":", a.substring(2, a.length)) : null === a ? "" : a.toString()
  }, c = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first(c))), e = cljs.core.next(c), b = d, c = e
          }else {
            return cljs.core.str_STAR_.__1(b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return b.call(this, a);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__0 = function() {
    return""
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.subs = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = function(a, c) {
    return a.substring(c)
  };
  a.__3 = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
cljs.core.symbol = function() {
  var a = null, b = function(a) {
    cljs.core.symbol_QMARK_(a) || cljs.core.keyword_QMARK_(a) && cljs.core.str_STAR_("\ufdd1", "'", cljs.core.subs.__2(a, 2));
    return cljs.core.str_STAR_("\ufdd1", "'", a)
  }, c = function(b, c) {
    return a.call(null, cljs.core.str_STAR_(b, "/", c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.keyword = function() {
  var a = null, b = function(a) {
    return cljs.core.keyword_QMARK_(a) ? a : cljs.core.symbol_QMARK_(a) ? cljs.core.str_STAR_("\ufdd0", "'", cljs.core.subs.__2(a, 2)) : cljs.core.str_STAR_("\ufdd0", "'", a)
  }, c = function(b, c) {
    return a.call(null, cljs.core.str_STAR_(b, "/", c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.equiv_sequential = function(a, b) {
  return cljs.core.boolean$(cljs.core.sequential_QMARK_(b) ? function() {
    for(var c = cljs.core.seq(a), d = cljs.core.seq(b);;) {
      if(null === c) {
        return null === d
      }
      if(null !== d && cljs.core._EQ_.__2(cljs.core.first(c), cljs.core.first(d))) {
        c = cljs.core.next(c), d = cljs.core.next(d)
      }else {
        return!1
      }
    }
  }() : null)
};
cljs.core.hash_combine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
};
cljs.core.hash_coll = function(a) {
  return cljs.core.reduce.__3(function(a, c) {
    return cljs.core.hash_combine(a, cljs.core.hash(c))
  }, cljs.core.hash(cljs.core.first(a)), cljs.core.next(a))
};
cljs.core.extend_object_BANG_ = function(a, b) {
  var c = cljs.core.seq(b);
  if(cljs.core.truth_(c)) {
    var d = cljs.core.first(c);
    cljs.core.nth.__3(d, 0, null);
    for(cljs.core.nth.__3(d, 1, null);;) {
      var e = d, d = cljs.core.nth.__3(e, 0, null), e = cljs.core.nth.__3(e, 1, null), d = cljs.core.name(d);
      a[d] = e;
      c = cljs.core.next(c);
      if(cljs.core.truth_(c)) {
        d = c, c = cljs.core.first(d), e = d, d = c, c = e
      }else {
        break
      }
    }
  }
  return a
};
cljs.core.List = function(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d
};
cljs.core.List.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = !0;
cljs.core.List.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.List.prototype.cljs$core$ISequential$ = !0;
cljs.core.List.prototype.cljs$core$ICollection$ = !0;
cljs.core.List.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return new cljs.core.List(this.meta, b, a, this.count + 1)
};
cljs.core.List.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = !0;
cljs.core.List.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return a
};
cljs.core.List.prototype.cljs$core$ICounted$ = !0;
cljs.core.List.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.count
};
cljs.core.List.prototype.cljs$core$IStack$ = !0;
cljs.core.List.prototype.cljs$core$IStack$_peek__1 = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop__1 = function(a) {
  return cljs.core._rest(a)
};
cljs.core.List.prototype.cljs$core$ISeq$ = !0;
cljs.core.List.prototype.cljs$core$ISeq$_first__1 = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest__1 = function() {
  return this.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = !0;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.List(b, this.first, this.rest, this.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = !0;
cljs.core.List.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.List.EMPTY
};
cljs.core.List.prototype.cljs$core$IList$ = !0;
cljs.core.EmptyList = function(a) {
  this.meta = a
};
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return new cljs.core.List(this.meta, b, null, 1)
};
cljs.core.EmptyList.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq__1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count__1 = function() {
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek__1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop__1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first__1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest__1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.EmptyList(b)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(a) {
  return a
};
cljs.core.EmptyList.prototype.cljs$core$IList$ = !0;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IReversible$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IReversible$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IReversible, a)
};
cljs.core.rseq = function(a) {
  return cljs.core._rseq(a)
};
cljs.core.reverse = function(a) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, a)
};
cljs.core.list = function() {
  var a = function(a) {
    return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse(a))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.Cons = function(a, b, c) {
  this.meta = a;
  this.first = b;
  this.rest = c
};
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$IHash$ = !0;
cljs.core.Cons.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = !0;
cljs.core.Cons.prototype.cljs$core$ICollection$ = !0;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return new cljs.core.Cons(null, b, a)
};
cljs.core.Cons.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return a
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = !0;
cljs.core.Cons.prototype.cljs$core$ISeq$_first__1 = function() {
  return this.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest__1 = function() {
  return null === this.rest ? cljs.core.List.EMPTY : this.rest
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.Cons(b, this.first, this.rest)
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = !0;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.List.EMPTY, this.meta)
};
cljs.core.Cons.prototype.cljs$core$IList$ = !0;
cljs.core.cons = function(a, b) {
  return new cljs.core.Cons(null, a, b)
};
cljs.core.list_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IList$;
      return cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$IList$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IList, a)
};
cljs.core.IReduce.string = !0;
cljs.core._reduce.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.__2(a, c);
      case 3:
        return cljs.core.ci_reduce.__3(a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.string = !0;
cljs.core._lookup.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.__2(a, c);
      case 3:
        return cljs.core._nth.__3(a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.string = !0;
cljs.core._nth.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < cljs.core._count(a) ? a.charAt(c) : null;
      case 3:
        return c < cljs.core._count(a) ? a.charAt(c) : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.string = !0;
cljs.core._count.string = function(a) {
  return a.length
};
cljs.core.ISeqable.string = !0;
cljs.core._seq.string = function(a) {
  return cljs.core.prim_seq(a, 0)
};
cljs.core.IHash.string = !0;
cljs.core._hash.string = function(a) {
  return goog.string.hashCode.call(null, a)
};
String.prototype.cljs$core$IFn$ = !0;
String.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.get.__2(c, this.toString());
      case 3:
        return cljs.core.get.__3(c, this.toString(), d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
String.prototype.apply = function(a, b) {
  return 2 > cljs.core.count(b) ? cljs.core.get.__2(b[0], a) : cljs.core.get.__3(b[0], a, b[1])
};
cljs.core.lazy_seq_value = function(a) {
  var b = a.x;
  if(cljs.core.truth_(a.realized)) {
    return b
  }
  a.x = b.call(null);
  a.realized = !0;
  return a.x
};
cljs.core.LazySeq = function(a, b, c) {
  this.meta = a;
  this.realized = b;
  this.x = c
};
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.cons(b, a)
};
cljs.core.LazySeq.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return cljs.core.seq(cljs.core.lazy_seq_value(a))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first__1 = function(a) {
  return cljs.core.first(cljs.core.lazy_seq_value(a))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest__1 = function(a) {
  return cljs.core.rest(cljs.core.lazy_seq_value(a))
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.LazySeq(b, this.realized, this.x)
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.List.EMPTY, this.meta)
};
cljs.core.to_array = function(a) {
  for(var b = [];;) {
    if(cljs.core.truth_(cljs.core.seq(a))) {
      b.push(cljs.core.first(a)), a = cljs.core.next(a)
    }else {
      return b
    }
  }
};
cljs.core.bounded_count = function(a, b) {
  for(var c = a, d = b, e = 0;;) {
    if(cljs.core.truth_(function() {
      var a = 0 < d;
      return a ? cljs.core.seq(c) : a
    }())) {
      var f = cljs.core.next(c), g = d - 1, e = e + 1, c = f, d = g
    }else {
      return e
    }
  }
};
cljs.core.spread = function spread(b) {
  return null === b ? null : null === cljs.core.next(b) ? cljs.core.seq(cljs.core.first(b)) : cljs.core.cons(cljs.core.first(b), spread.call(null, cljs.core.next(b)))
};
cljs.core.concat = function() {
  var a = null, b = function() {
    return new cljs.core.LazySeq(null, !1, function() {
      return null
    })
  }, c = function(a) {
    return new cljs.core.LazySeq(null, !1, function() {
      return a
    })
  }, d = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq(b);
      return cljs.core.truth_(d) ? cljs.core.cons(cljs.core.first(d), a.call(null, cljs.core.rest(d), c)) : c
    })
  }, e = function() {
    var b = function(b, c, d) {
      return function l(a, b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = cljs.core.seq(a);
          return cljs.core.truth_(c) ? cljs.core.cons(cljs.core.first(c), l.call(null, cljs.core.rest(c), b)) : cljs.core.truth_(b) ? l.call(null, cljs.core.first(b), cljs.core.next(b)) : null
        })
      }.call(null, a.call(null, b, c), d)
    }, c = function(a, c, d) {
      var e = null;
      goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, e)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, d, a)
    };
    return c
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, g);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__0 = b;
  a.__1 = c;
  a.__2 = d;
  a.__3 = e;
  return a
}();
cljs.core.list_STAR_ = function() {
  var a = null, b = function(a) {
    return cljs.core.seq(a)
  }, c = function(a, b) {
    return cljs.core.cons(a, b)
  }, d = function(a, b, c) {
    return cljs.core.cons(a, cljs.core.cons(b, c))
  }, e = function(a, b, c, d) {
    return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, d)))
  }, f = function() {
    var a = function(a, b, c, d, e) {
      var f = null;
      goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.spread(f)))))
    };
    a.cljs$lang$maxFixedArity = 4;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), e = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(a))));
      return cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.cons(e, cljs.core.spread(a)))))
    };
    return a
  }(), a = function(a, h, i, j, k) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, h);
      case 3:
        return d.call(this, a, h, i);
      case 4:
        return e.call(this, a, h, i, j);
      default:
        return f.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  a.__5 = f;
  return a
}();
cljs.core.apply = function() {
  var a = null, b = function(a, b) {
    var c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.bounded_count(b, c + 1) <= c ? a.apply(a, cljs.core.to_array(b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array(b))
  }, c = function(a, b, c) {
    b = cljs.core.list_STAR_.__2(b, c);
    c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.bounded_count(b, c) <= c ? a.apply(a, cljs.core.to_array(b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array(b))
  }, d = function(a, b, c, d) {
    b = cljs.core.list_STAR_.__3(b, c, d);
    c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.bounded_count(b, c) <= c ? a.apply(a, cljs.core.to_array(b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array(b))
  }, e = function(a, b, c, d, e) {
    b = cljs.core.list_STAR_.__4(b, c, d, e);
    c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.bounded_count(b, c) <= c ? a.apply(a, cljs.core.to_array(b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array(b))
  }, f = function() {
    var a = function(a, b, c, d, e, f) {
      b = cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.cons(e, cljs.core.spread(f)))));
      c = a.cljs$lang$maxFixedArity;
      return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.bounded_count(b, c) <= c ? a.apply(a, cljs.core.to_array(b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array(b))
    }, b = function(b, c, d, e, f, h) {
      var n = null;
      goog.isDef(h) && (n = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return a.call(this, b, c, d, e, f, n)
    };
    b.cljs$lang$maxFixedArity = 5;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), f = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), h = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b))))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b)))));
      return a.call(this, c, d, e, f, h, b)
    };
    return b
  }(), a = function(a, h, i, j, k, l) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, h);
      case 3:
        return c.call(this, a, h, i);
      case 4:
        return d.call(this, a, h, i, j);
      case 5:
        return e.call(this, a, h, i, j, k);
      default:
        return f.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  a.__5 = e;
  a.__6 = f;
  return a
}();
cljs.core.vary_meta = function() {
  var a = function(a, c, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return cljs.core.with_meta(a, cljs.core.apply.__3(c, cljs.core.meta(a), e))
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = function(a) {
    var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
    return cljs.core.with_meta(c, cljs.core.apply.__3(d, cljs.core.meta(c), a))
  };
  return a
}();
cljs.core.not_EQ_ = function() {
  var a = null, b = function() {
    return!1
  }, c = function(a, b) {
    return cljs.core.not(cljs.core._EQ_.__2(a, b))
  }, d = function() {
    var a = function(a, b, c) {
      var d = null;
      goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.not(cljs.core.apply.__4(cljs.core._EQ_, a, b, d))
    };
    a.cljs$lang$maxFixedArity = 2;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return cljs.core.not(cljs.core.apply.__4(cljs.core._EQ_, b, c, a))
    };
    return a
  }(), a = function(a, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, f);
      default:
        return d.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = d.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  return a
}();
cljs.core.not_empty = function(a) {
  return cljs.core.truth_(cljs.core.seq(a)) ? a : null
};
cljs.core.every_QMARK_ = function(a, b) {
  for(;;) {
    if(null === cljs.core.seq(b)) {
      return!0
    }
    if(cljs.core.truth_(a.call(null, cljs.core.first(b)))) {
      var c = a, d = cljs.core.next(b), a = c, b = d
    }else {
      return!1
    }
  }
};
cljs.core.not_every_QMARK_ = function(a, b) {
  return cljs.core.not(cljs.core.every_QMARK_(a, b))
};
cljs.core.some = function(a, b) {
  for(;;) {
    if(cljs.core.truth_(cljs.core.seq(b))) {
      var c = a.call(null, cljs.core.first(b));
      if(cljs.core.truth_(c)) {
        return c
      }
      var c = a, d = cljs.core.next(b), a = c, b = d
    }else {
      return null
    }
  }
};
cljs.core.not_any_QMARK_ = function(a, b) {
  return cljs.core.not(cljs.core.some(a, b))
};
cljs.core.even_QMARK_ = function(a) {
  if(cljs.core.integer_QMARK_(a)) {
    return 0 === (a & 1)
  }
  throw Error(cljs.core.str("Argument must be an integer: ", a));
};
cljs.core.odd_QMARK_ = function(a) {
  return cljs.core.not(cljs.core.even_QMARK_(a))
};
cljs.core.identity = function(a) {
  return a
};
cljs.core.complement = function(a) {
  return function() {
    var b = null, c = function() {
      var b = function(b, c, d) {
        var h = null;
        goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
        return cljs.core.not(cljs.core.apply.__4(a, b, c, h))
      };
      b.cljs$lang$maxFixedArity = 2;
      b.cljs$lang$applyTo = function(b) {
        var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
        return cljs.core.not(cljs.core.apply.__4(a, c, d, b))
      };
      return b
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return cljs.core.not(a.call(null));
        case 1:
          return cljs.core.not(a.call(null, b));
        case 2:
          return cljs.core.not(a.call(null, b, e));
        default:
          return c.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = c.cljs$lang$applyTo;
    return b
  }()
};
cljs.core.constantly = function(a) {
  return function() {
    var b = function(b) {
      goog.isDef(b) && cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
      return a
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      cljs.core.seq(b);
      return a
    };
    return b
  }()
};
cljs.core.comp = function() {
  var a = null, b = function() {
    return cljs.core.identity
  }, c = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, e, h) {
          var i = null;
          goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return a.call(null, cljs.core.apply.__5(b, c, d, e, i))
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(c) {
          var d = cljs.core.first(c), e = cljs.core.first(cljs.core.next(c)), h = cljs.core.first(cljs.core.next(cljs.core.next(c))), c = cljs.core.rest(cljs.core.next(cljs.core.next(c)));
          return a.call(null, cljs.core.apply.__5(b, d, e, h, c))
        };
        return c
      }(), c = function(c, e, h, m) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null));
          case 1:
            return a.call(null, b.call(null, c));
          case 2:
            return a.call(null, b.call(null, c, e));
          case 3:
            return a.call(null, b.call(null, c, e, h));
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function() {
        var d = function(d, e, i, j) {
          var k = null;
          goog.isDef(j) && (k = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return a.call(null, b.call(null, cljs.core.apply.__5(c, d, e, i, k)))
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(d) {
          var e = cljs.core.first(d), i = cljs.core.first(cljs.core.next(d)), j = cljs.core.first(cljs.core.next(cljs.core.next(d))), d = cljs.core.rest(cljs.core.next(cljs.core.next(d)));
          return a.call(null, b.call(null, cljs.core.apply.__5(c, e, i, j, d)))
        };
        return d
      }(), d = function(d, i, m, o) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null, c.call(null)));
          case 1:
            return a.call(null, b.call(null, c.call(null, d)));
          case 2:
            return a.call(null, b.call(null, c.call(null, d, i)));
          case 3:
            return a.call(null, b.call(null, c.call(null, d, i, m)));
          default:
            return e.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.reverse(cljs.core.list_STAR_.__4(a, b, c, d));
      return function() {
        var a = function(a) {
          for(var a = cljs.core.apply.__2(cljs.core.first(e), a), b = cljs.core.next(e);;) {
            if(cljs.core.truth_(b)) {
              a = cljs.core.first(b).call(null, a), b = cljs.core.next(b)
            }else {
              return a
            }
          }
        }, b = function(b) {
          var c = null;
          goog.isDef(b) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return a.call(this, c)
        };
        b.cljs$lang$maxFixedArity = 0;
        b.cljs$lang$applyTo = function(b) {
          b = cljs.core.seq(b);
          return a.call(this, b)
        };
        return b
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a;
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__0 = b;
  a.__1 = function(a) {
    return a
  };
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  return a
}();
cljs.core.partial = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = function(c) {
        var d = null;
        goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.__3(a, b, d)
      };
      c.cljs$lang$maxFixedArity = 0;
      c.cljs$lang$applyTo = function(c) {
        c = cljs.core.seq(c);
        return cljs.core.apply.__3(a, b, c)
      };
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = function(d) {
        var e = null;
        goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.__4(a, b, c, e)
      };
      d.cljs$lang$maxFixedArity = 0;
      d.cljs$lang$applyTo = function(d) {
        d = cljs.core.seq(d);
        return cljs.core.apply.__4(a, b, c, d)
      };
      return d
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var e = function(e) {
        var j = null;
        goog.isDef(e) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.__5(a, b, c, d, j)
      };
      e.cljs$lang$maxFixedArity = 0;
      e.cljs$lang$applyTo = function(e) {
        e = cljs.core.seq(e);
        return cljs.core.apply.__5(a, b, c, d, e)
      };
      return e
    }()
  }, e = function() {
    var a = function(a, b, c, d, e) {
      return function() {
        var f = function(f) {
          return cljs.core.apply.__5(a, b, c, d, cljs.core.concat.__2(e, f))
        }, g = function(a) {
          var b = null;
          goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return f.call(this, b)
        };
        g.cljs$lang$maxFixedArity = 0;
        g.cljs$lang$applyTo = function(a) {
          a = cljs.core.seq(a);
          return f.call(this, a)
        };
        return g
      }()
    }, b = function(b, c, d, e, g) {
      var m = null;
      goog.isDef(g) && (m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, c, d, e, m)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a.call(this, c, d, e, g, b)
    };
    return b
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  a.__5 = e;
  return a
}();
cljs.core.fnil = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, g, h) {
          var i = null;
          goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return cljs.core.apply.__5(a, null === c ? b : c, d, g, i)
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(c) {
          var d = cljs.core.first(c), g = cljs.core.first(cljs.core.next(c)), h = cljs.core.first(cljs.core.next(cljs.core.next(c))), c = cljs.core.rest(cljs.core.next(cljs.core.next(c)));
          return cljs.core.apply.__5(a, null === d ? b : d, g, h, c)
        };
        return c
      }(), c = function(c, g, k, l) {
        switch(arguments.length) {
          case 1:
            return a.call(null, null === c ? b : c);
          case 2:
            return a.call(null, null === c ? b : c, g);
          case 3:
            return a.call(null, null === c ? b : c, g, k);
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = null, i = function() {
        var d = function(d, h, i, j) {
          var n = null;
          goog.isDef(j) && (n = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return cljs.core.apply.__5(a, null === d ? b : d, null === h ? c : h, i, n)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(d) {
          var h = cljs.core.first(d), i = cljs.core.first(cljs.core.next(d)), j = cljs.core.first(cljs.core.next(cljs.core.next(d))), d = cljs.core.rest(cljs.core.next(cljs.core.next(d)));
          return cljs.core.apply.__5(a, null === h ? b : h, null === i ? c : i, j, d)
        };
        return d
      }(), d = function(d, h, l, m) {
        switch(arguments.length) {
          case 2:
            return a.call(null, null === d ? b : d, null === h ? c : h);
          case 3:
            return a.call(null, null === d ? b : d, null === h ? c : h, l);
          default:
            return i.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = i.cljs$lang$applyTo;
      return d
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var i = null, j = function() {
        var i = function(i, j, n, l) {
          return cljs.core.apply.__5(a, null === i ? b : i, null === j ? c : j, null === n ? d : n, l)
        }, j = function(a, b, c, d) {
          var e = null;
          goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return i.call(this, a, b, c, e)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return i.call(this, b, c, d, a)
        };
        return j
      }(), i = function(i, l, m, o) {
        switch(arguments.length) {
          case 2:
            return a.call(null, null === i ? b : i, null === l ? c : l);
          case 3:
            return a.call(null, null === i ? b : i, null === l ? c : l, null === m ? d : m);
          default:
            return j.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      i.cljs$lang$maxFixedArity = 3;
      i.cljs$lang$applyTo = j.cljs$lang$applyTo;
      return i
    }()
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  return a
}();
cljs.core.map_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq(f);
      return cljs.core.truth_(g) ? cljs.core.cons(a.call(null, b, cljs.core.first(g)), d.call(null, b + 1, cljs.core.rest(g))) : null
    })
  }.call(null, 0, b)
};
cljs.core.keep = function keep(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq(c);
    if(cljs.core.truth_(d)) {
      var e = b.call(null, cljs.core.first(d));
      return null === e ? keep.call(null, b, cljs.core.rest(d)) : cljs.core.cons(e, keep.call(null, b, cljs.core.rest(d)))
    }
    return null
  })
};
cljs.core.keep_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq(f);
      if(cljs.core.truth_(g)) {
        var h = a.call(null, b, cljs.core.first(g));
        return null === h ? d.call(null, b + 1, cljs.core.rest(g)) : cljs.core.cons(h, d.call(null, b + 1, cljs.core.rest(g)))
      }
      return null
    })
  }.call(null, 0, b)
};
cljs.core.every_pred = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function(b) {
        return cljs.core.boolean$(a.call(null, b))
      }, d = function(b, c) {
        return cljs.core.boolean$(function() {
          var d = a.call(null, b);
          return cljs.core.truth_(d) ? a.call(null, c) : d
        }())
      }, e = function(b, c, d) {
        return cljs.core.boolean$(function() {
          var e = a.call(null, b);
          return cljs.core.truth_(e) ? (e = a.call(null, c), cljs.core.truth_(e) ? a.call(null, d) : e) : e
        }())
      }, k = function() {
        var c = function(c, d, e, h) {
          return cljs.core.boolean$(function() {
            var i = b.call(null, c, d, e);
            return cljs.core.truth_(i) ? cljs.core.every_QMARK_(a, h) : i
          }())
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            return k.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = k.cljs$lang$applyTo;
      b.__0 = function() {
        return!0
      };
      b.__1 = c;
      b.__2 = d;
      b.__3 = e;
      b.__4 = k;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c) {
        return cljs.core.boolean$(function() {
          var d = a.call(null, c);
          return cljs.core.truth_(d) ? b.call(null, c) : d
        }())
      }, e = function(c, d) {
        return cljs.core.boolean$(function() {
          var e = a.call(null, c);
          return cljs.core.truth_(e) && (e = a.call(null, d), cljs.core.truth_(e)) ? (e = b.call(null, c), cljs.core.truth_(e) ? b.call(null, d) : e) : e
        }())
      }, k = function(c, d, e) {
        return cljs.core.boolean$(function() {
          var h = a.call(null, c);
          return cljs.core.truth_(h) && (h = a.call(null, d), cljs.core.truth_(h) && (h = a.call(null, e), cljs.core.truth_(h) && (h = b.call(null, c), cljs.core.truth_(h)))) ? (h = b.call(null, d), cljs.core.truth_(h) ? b.call(null, e) : h) : h
        }())
      }, l = function() {
        var d = function(d, e, i, j) {
          return cljs.core.boolean$(function() {
            var m = c.call(null, d, e, i);
            return cljs.core.truth_(m) ? cljs.core.every_QMARK_(function(c) {
              var d = a.call(null, c);
              return cljs.core.truth_(d) ? b.call(null, c) : d
            }, j) : m
          }())
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), c = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return k.call(this, a, b, c);
          default:
            return l.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = l.cljs$lang$applyTo;
      c.__0 = function() {
        return!0
      };
      c.__1 = d;
      c.__2 = e;
      c.__3 = k;
      c.__4 = l;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d) {
        return cljs.core.boolean$(function() {
          var e = a.call(null, d);
          return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
        }())
      }, k = function(d, e) {
        return cljs.core.boolean$(function() {
          var i = a.call(null, d);
          return cljs.core.truth_(i) && (i = b.call(null, d), cljs.core.truth_(i) && (i = c.call(null, d), cljs.core.truth_(i) && (i = a.call(null, e), cljs.core.truth_(i)))) ? (i = b.call(null, e), cljs.core.truth_(i) ? c.call(null, e) : i) : i
        }())
      }, l = function(d, e, i) {
        return cljs.core.boolean$(function() {
          var j = a.call(null, d);
          return cljs.core.truth_(j) && (j = b.call(null, d), cljs.core.truth_(j) && (j = c.call(null, d), cljs.core.truth_(j) && (j = a.call(null, e), cljs.core.truth_(j) && (j = b.call(null, e), cljs.core.truth_(j) && (j = c.call(null, e), cljs.core.truth_(j) && (j = a.call(null, i), cljs.core.truth_(j))))))) ? (j = b.call(null, i), cljs.core.truth_(j) ? c.call(null, i) : j) : j
        }())
      }, m = function() {
        var e = function(e, j, m, l) {
          return cljs.core.boolean$(function() {
            var k = d.call(null, e, j, m);
            return cljs.core.truth_(k) ? cljs.core.every_QMARK_(function(d) {
              var e = a.call(null, d);
              return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
            }, l) : k
          }())
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e.call(this, b, c, d, a)
        };
        return j
      }(), d = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return e.call(this, a);
          case 2:
            return k.call(this, a, b);
          case 3:
            return l.call(this, a, b, c);
          default:
            return m.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = m.cljs$lang$applyTo;
      d.__0 = function() {
        return!0
      };
      d.__1 = e;
      d.__2 = k;
      d.__3 = l;
      d.__4 = m;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.__4(a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.every_QMARK_(function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.every_QMARK_(function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? c.call(null, b) : d
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.every_QMARK_(function(d) {
            var e = d.call(null, a);
            return cljs.core.truth_(e) ? (e = d.call(null, b), cljs.core.truth_(e) ? d.call(null, c) : e) : e
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            return cljs.core.boolean$(function() {
              var g = a.call(null, b, c, d);
              return cljs.core.truth_(g) ? cljs.core.every_QMARK_(function(a) {
                return cljs.core.every_QMARK_(a, f)
              }, e) : g
            }())
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b.call(this, c, d, e, a)
          };
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return!0;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        a.__0 = function() {
          return!0
        };
        a.__1 = b;
        a.__2 = c;
        a.__3 = d;
        a.__4 = f;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  return a
}();
cljs.core.some_fn = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function(b) {
        return a.call(null, b)
      }, d = function(b, c) {
        var d = a.call(null, b);
        return cljs.core.truth_(d) ? d : a.call(null, c)
      }, e = function(b, c, d) {
        b = a.call(null, b);
        if(cljs.core.truth_(b)) {
          return b
        }
        c = a.call(null, c);
        return cljs.core.truth_(c) ? c : a.call(null, d)
      }, k = function() {
        var c = function(c, d, e, h) {
          c = b.call(null, c, d, e);
          return cljs.core.truth_(c) ? c : cljs.core.some(a, h)
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            return k.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = k.cljs$lang$applyTo;
      b.__0 = function() {
        return null
      };
      b.__1 = c;
      b.__2 = d;
      b.__3 = e;
      b.__4 = k;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c) {
        var d = a.call(null, c);
        return cljs.core.truth_(d) ? d : b.call(null, c)
      }, e = function(c, d) {
        var e = a.call(null, c);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = a.call(null, d);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, c);
        return cljs.core.truth_(e) ? e : b.call(null, d)
      }, k = function(c, d, e) {
        var h = a.call(null, c);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, d);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, e);
        if(cljs.core.truth_(h)) {
          return h
        }
        c = b.call(null, c);
        if(cljs.core.truth_(c)) {
          return c
        }
        d = b.call(null, d);
        return cljs.core.truth_(d) ? d : b.call(null, e)
      }, l = function() {
        var d = function(d, e, i, j) {
          d = c.call(null, d, e, i);
          return cljs.core.truth_(d) ? d : cljs.core.some(function(c) {
            var d = a.call(null, c);
            return cljs.core.truth_(d) ? d : b.call(null, c)
          }, j)
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), c = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return k.call(this, a, b, c);
          default:
            return l.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = l.cljs$lang$applyTo;
      c.__0 = function() {
        return null
      };
      c.__1 = d;
      c.__2 = e;
      c.__3 = k;
      c.__4 = l;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d) {
        var e = a.call(null, d);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, d);
        return cljs.core.truth_(e) ? e : c.call(null, d)
      }, k = function(d, e) {
        var i = a.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = c.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = a.call(null, e);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, e);
        return cljs.core.truth_(i) ? i : c.call(null, e)
      }, l = function(d, e, i) {
        var j = a.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        j = b.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        d = c.call(null, d);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = a.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = b.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        e = c.call(null, e);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = a.call(null, i);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, i);
        return cljs.core.truth_(e) ? e : c.call(null, i)
      }, m = function() {
        var e = function(e, j, k, m) {
          e = d.call(null, e, j, k);
          return cljs.core.truth_(e) ? e : cljs.core.some(function(d) {
            var e = a.call(null, d);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = b.call(null, d);
            return cljs.core.truth_(e) ? e : c.call(null, d)
          }, m)
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e.call(this, b, c, d, a)
        };
        return j
      }(), d = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return e.call(this, a);
          case 2:
            return k.call(this, a, b);
          case 3:
            return l.call(this, a, b, c);
          default:
            return m.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = m.cljs$lang$applyTo;
      d.__0 = function() {
        return null
      };
      d.__1 = e;
      d.__2 = k;
      d.__3 = l;
      d.__4 = m;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.__4(a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.some(function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.some(function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? d : c.call(null, b)
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.some(function(d) {
            var e = d.call(null, a);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = d.call(null, b);
            return cljs.core.truth_(e) ? e : d.call(null, c)
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            b = a.call(null, b, c, d);
            return cljs.core.truth_(b) ? b : cljs.core.some(function(a) {
              return cljs.core.some(a, f)
            }, e)
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b.call(this, c, d, e, a)
          };
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return null;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        a.__0 = function() {
          return null
        };
        a.__1 = b;
        a.__2 = c;
        a.__3 = d;
        a.__4 = f;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  return a
}();
cljs.core.map = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq(c);
      return cljs.core.truth_(d) ? cljs.core.cons(b.call(null, cljs.core.first(d)), a.call(null, b, cljs.core.rest(d))) : null
    })
  }, c = function(b, c, d) {
    return new cljs.core.LazySeq(null, !1, function() {
      var e = cljs.core.seq(c), j = cljs.core.seq(d);
      return cljs.core.truth_(cljs.core.truth_(e) ? j : e) ? cljs.core.cons(b.call(null, cljs.core.first(e), cljs.core.first(j)), a.call(null, b, cljs.core.rest(e), cljs.core.rest(j))) : null
    })
  }, d = function(b, c, d, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var j = cljs.core.seq(c), k = cljs.core.seq(d), l = cljs.core.seq(e);
      return cljs.core.truth_(cljs.core.truth_(j) ? cljs.core.truth_(k) ? l : k : j) ? cljs.core.cons(b.call(null, cljs.core.first(j), cljs.core.first(k), cljs.core.first(l)), a.call(null, b, cljs.core.rest(j), cljs.core.rest(k), cljs.core.rest(l))) : null
    })
  }, e = function() {
    var b = function(b, c, d, e, f) {
      return a.call(null, function(a) {
        return cljs.core.apply.__2(b, a)
      }, function o(b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = a.call(null, cljs.core.seq, b);
          return cljs.core.every_QMARK_(cljs.core.identity, c) ? cljs.core.cons(a.call(null, cljs.core.first, c), o.call(null, a.call(null, cljs.core.rest, c))) : null
        })
      }.call(null, cljs.core.conj(f, e, d, c)))
    }, c = function(a, c, d, e, g) {
      var m = null;
      goog.isDef(g) && (m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, a, c, d, e, m)
    };
    c.cljs$lang$maxFixedArity = 4;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(a))));
      return b.call(this, c, d, e, g, a)
    };
    return c
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  a.__5 = e;
  return a
}();
cljs.core.take = function take(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    if(0 < b) {
      var d = cljs.core.seq(c);
      return cljs.core.truth_(d) ? cljs.core.cons(cljs.core.first(d), take.call(null, b - 1, cljs.core.rest(d))) : null
    }
    return null
  })
};
cljs.core.drop = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq(b);
      if(cljs.core.truth_(function() {
        var b = 0 < a;
        return b ? c : b
      }())) {
        var g = a - 1, h = cljs.core.rest(c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  })
};
cljs.core.drop_last = function() {
  var a = null, b = function(b) {
    return a.call(null, 1, b)
  }, c = function(a, b) {
    return cljs.core.map.__3(function(a) {
      return a
    }, b, cljs.core.drop(a, b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.take_last = function(a, b) {
  for(var c = cljs.core.seq(b), d = cljs.core.seq(cljs.core.drop(a, b));;) {
    if(cljs.core.truth_(d)) {
      c = cljs.core.next(c), d = cljs.core.next(d)
    }else {
      return c
    }
  }
};
cljs.core.drop_while = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq(b);
      if(cljs.core.truth_(function() {
        var b = c;
        return cljs.core.truth_(b) ? a.call(null, cljs.core.first(c)) : b
      }())) {
        var g = a, h = cljs.core.rest(c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  })
};
cljs.core.cycle = function cycle(b) {
  return new cljs.core.LazySeq(null, !1, function() {
    var c = cljs.core.seq(b);
    return cljs.core.truth_(c) ? cljs.core.concat.__2(c, cycle.call(null, c)) : null
  })
};
cljs.core.split_at = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take(a, b), cljs.core.drop(a, b)])
};
cljs.core.repeat = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons(b, a.call(null, b))
    })
  }, c = function(b, c) {
    return cljs.core.take(b, a.call(null, c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.replicate = function(a, b) {
  return cljs.core.take(a, cljs.core.repeat.__1(b))
};
cljs.core.repeatedly = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons(b.call(null), a.call(null, b))
    })
  }, c = function(b, c) {
    return cljs.core.take(b, a.call(null, c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.iterate = function iterate(b, c) {
  return cljs.core.cons(c, new cljs.core.LazySeq(null, !1, function() {
    return iterate.call(null, b, b.call(null, c))
  }))
};
cljs.core.interleave = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq(b), g = cljs.core.seq(c);
      return cljs.core.truth_(cljs.core.truth_(f) ? g : f) ? cljs.core.cons(cljs.core.first(f), cljs.core.cons(cljs.core.first(g), a.call(null, cljs.core.rest(f), cljs.core.rest(g)))) : null
    })
  }, c = function() {
    var b = function(b, c, d) {
      return new cljs.core.LazySeq(null, !1, function() {
        var e = cljs.core.map.__2(cljs.core.seq, cljs.core.conj(d, c, b));
        return cljs.core.every_QMARK_(cljs.core.identity, e) ? cljs.core.concat.__2(cljs.core.map.__2(cljs.core.first, e), cljs.core.apply.__2(a, cljs.core.map.__2(cljs.core.rest, e))) : null
      })
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.interpose = function(a, b) {
  return cljs.core.drop(1, cljs.core.interleave.__2(cljs.core.repeat.__1(a), b))
};
cljs.core.flatten1 = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq(a);
      return cljs.core.truth_(f) ? cljs.core.cons(cljs.core.first(f), c.call(null, cljs.core.rest(f), e)) : cljs.core.truth_(cljs.core.seq(e)) ? c.call(null, cljs.core.first(e), cljs.core.rest(e)) : null
    })
  }.call(null, null, a)
};
cljs.core.mapcat = function() {
  var a = null, b = function(a, b) {
    return cljs.core.flatten1(cljs.core.map.__2(a, b))
  }, c = function() {
    var a = function(a, b, c) {
      var d = null;
      goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.flatten1(cljs.core.apply.__4(cljs.core.map, a, b, d))
    };
    a.cljs$lang$maxFixedArity = 2;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return cljs.core.flatten1(cljs.core.apply.__4(cljs.core.map, b, c, a))
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.filter = function filter(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq(c);
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first(d), d = cljs.core.rest(d);
      return cljs.core.truth_(b.call(null, e)) ? cljs.core.cons(e, filter.call(null, b, d)) : filter.call(null, b, d)
    }
    return null
  })
};
cljs.core.remove = function(a, b) {
  return cljs.core.filter(cljs.core.complement(a), b)
};
cljs.core.tree_seq = function(a, b, c) {
  return function e(c) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons(c, cljs.core.truth_(a.call(null, c)) ? cljs.core.mapcat.__2(e, b.call(null, c)) : null)
    })
  }.call(null, c)
};
cljs.core.flatten = function(a) {
  return cljs.core.filter(function(a) {
    return cljs.core.not(cljs.core.sequential_QMARK_(a))
  }, cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_, cljs.core.seq, a)))
};
cljs.core.into = function(a, b) {
  return cljs.core.reduce.__3(cljs.core._conj, a, b)
};
cljs.core.partition = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, b, c)
  }, c = function(b, c, d) {
    return new cljs.core.LazySeq(null, !1, function() {
      var h = cljs.core.seq(d);
      if(cljs.core.truth_(h)) {
        var i = cljs.core.take(b, h);
        return cljs.core._EQ_.__2(b, cljs.core.count(i)) ? cljs.core.cons(i, a.call(null, b, c, cljs.core.drop(c, h))) : null
      }
      return null
    })
  }, d = function(b, c, d, h) {
    return new cljs.core.LazySeq(null, !1, function() {
      var i = cljs.core.seq(h);
      if(cljs.core.truth_(i)) {
        var j = cljs.core.take(b, i);
        return cljs.core._EQ_.__2(b, cljs.core.count(j)) ? cljs.core.cons(j, a.call(null, b, c, d, cljs.core.drop(c, i))) : cljs.core.list(cljs.core.take(b, cljs.core.concat.__2(j, d)))
      }
      return null
    })
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  return a
}();
cljs.core.get_in = function() {
  var a = null, b = function(a, b) {
    return cljs.core.reduce.__3(cljs.core.get, a, b)
  }, c = function(a, b, c) {
    for(var g = cljs.core.lookup_sentinel, b = cljs.core.seq(b);;) {
      if(cljs.core.truth_(b)) {
        a = cljs.core.get.__3(a, cljs.core.first(b), g);
        if(g === a) {
          return c
        }
        b = cljs.core.next(b)
      }else {
        return a
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.assoc_in = function assoc_in(b, c, d) {
  var e = cljs.core.nth.__3(c, 0, null), c = cljs.core.nthnext(c, 1);
  return cljs.core.truth_(c) ? cljs.core.assoc.__3(b, e, assoc_in.call(null, cljs.core.get.__2(b, e), c, d)) : cljs.core.assoc.__3(b, e, d)
};
cljs.core.update_in = function() {
  var a = function(a, d, e, f) {
    var g = cljs.core.nth.__3(d, 0, null), d = cljs.core.nthnext(d, 1);
    return cljs.core.truth_(d) ? cljs.core.assoc.__3(a, g, cljs.core.apply.__5(b, cljs.core.get.__2(a, g), d, e, f)) : cljs.core.assoc.__3(a, g, cljs.core.apply.__3(e, cljs.core.get.__2(a, g), f))
  }, b = function(b, d, e, f) {
    var g = null;
    goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
    return a.call(this, b, d, e, g)
  };
  b.cljs$lang$maxFixedArity = 3;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
    return a.call(this, d, e, f, b)
  };
  return b
}();
cljs.core.Vector = function(a, b) {
  this.meta = a;
  this.array = b
};
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = !0;
cljs.core.Vector.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = !0;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._nth.__3(a, b, null)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  return cljs.core._nth.__3(a, b, c)
};
cljs.core.Vector.prototype.cljs$core$IAssociative$ = !0;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc__3 = function(a, b, c) {
  a = cljs.core.aclone(this.array);
  a[b] = c;
  return new cljs.core.Vector(this.meta, a)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = !0;
cljs.core.Vector.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = !0;
cljs.core.Vector.prototype.cljs$core$ICollection$ = !0;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  var c = cljs.core.aclone(this.array);
  c.push(b);
  return new cljs.core.Vector(this.meta, c)
};
cljs.core.Vector.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = !0;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__2 = function(a, b) {
  return cljs.core.ci_reduce.__2(this.array, b)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__3 = function(a, b, c) {
  return cljs.core.ci_reduce.__3(this.array, b, c)
};
cljs.core.Vector.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq__1 = function() {
  var a = this;
  return 0 < a.array.length ? function c(d) {
    return new cljs.core.LazySeq(null, !1, function() {
      return d < a.array.length ? cljs.core.cons(a.array[d], c.call(null, d + 1)) : null
    })
  }.call(null, 0) : null
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = !0;
cljs.core.Vector.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = !0;
cljs.core.Vector.prototype.cljs$core$IStack$_peek__1 = function() {
  var a = this.array.length;
  return 0 < a ? this.array[a - 1] : null
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop__1 = function() {
  if(0 < this.array.length) {
    var a = cljs.core.aclone(this.array);
    a.pop();
    return new cljs.core.Vector(this.meta, a)
  }
  throw Error("Can't pop empty vector");
};
cljs.core.Vector.prototype.cljs$core$IVector$ = !0;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n__3 = function(a, b, c) {
  return cljs.core._assoc(a, b, c)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.Vector(b, this.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = !0;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
  var c = 0 <= b;
  return(c ? b < this.array.length : c) ? this.array[b] : null
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
  return((a = 0 <= b) ? b < this.array.length : a) ? this.array[b] : c
};
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, []);
cljs.core.Vector.fromArray = function(a) {
  return new cljs.core.Vector(null, a)
};
cljs.core.tail_off = function(a) {
  a = a.cnt;
  return 32 > a ? 0 : a - 1 >> 5 << 5
};
cljs.core.new_path = function(a, b) {
  for(var c = a, d = b;;) {
    if(0 === c) {
      return d
    }
    var e = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE);
    e[0] = d;
    d = e;
    c -= 5
  }
};
cljs.core.push_tail = function push_tail(b, c, d, e) {
  var f = cljs.core.aclone(d), g = b.cnt - 1 >> c & 31;
  5 === c ? f[g] = e : (d = d[g], b = cljs.core.truth_(d) ? push_tail.call(null, b, c - 5, d, e) : cljs.core.new_path(c - 5, e), f[g] = b);
  return f
};
cljs.core.array_for = function(a, b) {
  var c = 0 <= b;
  if(c ? b < a.cnt : c) {
    if(b >= cljs.core.tail_off(a)) {
      return a.tail
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c[b >> d & 31], d = e
      }else {
        return c
      }
    }
  }else {
    throw Error(cljs.core.str("No item ", b, " in vector of length ", a.cnt));
  }
};
cljs.core.do_assoc = function do_assoc(b, c, d, e, f) {
  var g = cljs.core.aclone(d);
  if(0 === c) {
    g[e & 31] = f
  }else {
    var h = e >> c & 31;
    g[h] = do_assoc.call(null, b, c - 5, d[h], e, f)
  }
  return g
};
cljs.core.pop_tail = function pop_tail(b, c, d) {
  var e = b.cnt - 2 >> c & 31;
  if(5 < c) {
    b = pop_tail.call(null, b, c - 5, d[e]);
    if((c = null === b) ? 0 === e : c) {
      return null
    }
    d = cljs.core.aclone(d);
    d[e] = b;
    return d
  }
  if(0 === e) {
    return null
  }
  d = cljs.core.aclone(d);
  d[e] = null;
  return d
};
cljs.core.PersistentVector = function(a, b, c, d, e) {
  this.meta = a;
  this.cnt = b;
  this.shift = c;
  this.root = d;
  this.tail = e
};
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._nth.__3(a, b, null)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  return cljs.core._nth.__3(a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc__3 = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.cnt : d) {
    return cljs.core.tail_off(a) <= b ? (a = cljs.core.aclone(this.tail), a[b & 31] = c, new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, this.root, a)) : new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, cljs.core.do_assoc(a, this.shift, this.root, b, c), this.tail)
  }
  if(b === this.cnt) {
    return cljs.core._conj(a, c)
  }
  throw Error(cljs.core.str("Index ", b, " out of bounds  [0,", this.cnt, "]"));
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = !0;
cljs.core.PersistentVector.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  if(32 > this.cnt - cljs.core.tail_off(a)) {
    var c = cljs.core.aclone(this.tail);
    c.push(b);
    return new cljs.core.PersistentVector(this.meta, this.cnt + 1, this.shift, this.root, c)
  }
  var d = this.cnt >> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  d ? (d = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE), d[0] = this.root, d[1] = cljs.core.new_path(this.shift, this.tail)) : d = cljs.core.push_tail(a, this.shift, this.root, this.tail);
  return new cljs.core.PersistentVector(this.meta, this.cnt + 1, c, d, [b])
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key__1 = function(a) {
  return cljs.core._nth.__2(a, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val__1 = function(a) {
  return cljs.core._nth.__2(a, 1)
};
cljs.core.PersistentVector.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__2 = function(a, b) {
  return cljs.core.ci_reduce.__2(a, b)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__3 = function(a, b, c) {
  return cljs.core.ci_reduce.__3(a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  var b = this;
  return 0 < b.cnt ? function d(e) {
    return new cljs.core.LazySeq(null, !1, function() {
      return e < b.cnt ? cljs.core.cons(cljs.core._nth.__2(a, e), d.call(null, e + 1)) : null
    })
  }.call(null, 0) : null
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek__1 = function(a) {
  return 0 < this.cnt ? cljs.core._nth.__2(a, this.cnt - 1) : null
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop__1 = function(a) {
  if(0 === this.cnt) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.cnt) {
    return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this.meta)
  }
  if(1 < this.cnt - cljs.core.tail_off(a)) {
    return new cljs.core.PersistentVector(this.meta, this.cnt - 1, this.shift, this.root, cljs.core.aclone(this.tail))
  }
  var a = cljs.core.array_for(a, this.cnt - 2), b = cljs.core.pop_tail(this.shift, this.root), b = null === b ? cljs.core.PersistentVector.EMPTY_NODE : b, c = this.cnt - 1, d = 5 < this.shift;
  return(d ? null === b[1] : d) ? new cljs.core.PersistentVector(this.meta, c, this.shift - 5, b[0], a) : new cljs.core.PersistentVector(this.meta, c, this.shift, b, a)
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n__3 = function(a, b, c) {
  return cljs.core._assoc(a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.PersistentVector(b, this.cnt, this.shift, this.root, this.tail)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
  return cljs.core.array_for(a, b)[b & 31]
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.cnt : d) ? cljs.core._nth.__2(a, b) : c
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY, this.meta)
};
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.make_array(32);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, []);
cljs.core.PersistentVector.fromArray = function(a) {
  return cljs.core.into(cljs.core.PersistentVector.EMPTY, a)
};
cljs.core.vec = function(a) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.PersistentVector.EMPTY, a)
};
cljs.core.vector = function() {
  var a = function(a) {
    var c = null;
    goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return cljs.core.vec(c)
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = function(a) {
    a = cljs.core.seq(a);
    return cljs.core.vec(a)
  };
  return a
}();
cljs.core.Subvec = function(a, b, c, d) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d
};
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = !0;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = !0;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._nth.__3(a, b, null)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  return cljs.core._nth.__3(a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = !0;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc__3 = function(a, b, c) {
  a = this.start + b;
  return new cljs.core.Subvec(this.meta, cljs.core._assoc(this.v, a, c), this.start, this.end > a + 1 ? this.end : a + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = !0;
cljs.core.Subvec.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return new cljs.core.Subvec(this.meta, cljs.core._assoc_n(this.v, this.end, b), this.start, this.end + 1)
};
cljs.core.Subvec.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = !0;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__2 = function(a, b) {
  return cljs.core.ci_reduce.__2(a, b)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__3 = function(a, b, c) {
  return cljs.core.ci_reduce.__3(a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq__1 = function() {
  var a = this;
  return function c(d) {
    return cljs.core._EQ_.__2(d, a.end) ? null : cljs.core.cons(cljs.core._nth.__2(a.v, d), new cljs.core.LazySeq(null, !1, function() {
      return c.call(null, d + 1)
    }))
  }.call(null, a.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.end - this.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = !0;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek__1 = function() {
  return cljs.core._nth.__2(this.v, this.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop__1 = function() {
  if(cljs.core._EQ_.__2(this.start, this.end)) {
    throw Error("Can't pop empty vector");
  }
  return new cljs.core.Subvec(this.meta, this.v, this.start, this.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = !0;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n__3 = function(a, b, c) {
  return cljs.core._assoc(a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.Subvec(b, this.v, this.start, this.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = !0;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
  return cljs.core._nth.__2(this.v, this.start + b)
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
  return cljs.core._nth.__3(this.v, this.start + b, c)
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.subvec = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, cljs.core.count(b))
  }, c = function(a, b, c) {
    return new cljs.core.Subvec(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.PersistentQueueSeq = function(a, b, c) {
  this.meta = a;
  this.front = b;
  this.rear = c
};
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.cons(b, a)
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return a
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first__1 = function() {
  return cljs.core._first(this.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest__1 = function(a) {
  var b = cljs.core.next(this.front);
  return cljs.core.truth_(b) ? new cljs.core.PersistentQueueSeq(this.meta, b, this.rear) : null === this.rear ? cljs.core._empty(a) : new cljs.core.PersistentQueueSeq(this.meta, this.rear, null)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.PersistentQueueSeq(b, this.front, this.rear)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.List.EMPTY, this.meta)
};
cljs.core.PersistentQueue = function(a, b, c, d) {
  this.meta = a;
  this.count = b;
  this.front = c;
  this.rear = d
};
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  var c = this;
  return cljs.core.truth_(c.front) ? new cljs.core.PersistentQueue(c.meta, c.count + 1, c.front, cljs.core.conj.__2(function() {
    var a = c.rear;
    return cljs.core.truth_(a) ? a : cljs.core.PersistentVector.fromArray([])
  }(), b)) : new cljs.core.PersistentQueue(c.meta, c.count + 1, cljs.core.conj.__2(c.front, b), cljs.core.PersistentVector.fromArray([]))
};
cljs.core.PersistentQueue.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq__1 = function() {
  var a = this, b = cljs.core.seq(a.rear);
  return cljs.core.truth_(function() {
    var c = a.front;
    return cljs.core.truth_(c) ? c : b
  }()) ? new cljs.core.PersistentQueueSeq(null, a.front, cljs.core.seq(b)) : cljs.core.List.EMPTY
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek__1 = function() {
  return cljs.core._first(this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop__1 = function(a) {
  return cljs.core.truth_(this.front) ? (a = cljs.core.next(this.front), cljs.core.truth_(a) ? new cljs.core.PersistentQueue(this.meta, this.count - 1, a, this.rear) : new cljs.core.PersistentQueue(this.meta, this.count - 1, cljs.core.seq(this.rear), cljs.core.PersistentVector.fromArray([]))) : a
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first__1 = function() {
  return cljs.core.first(this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest__1 = function(a) {
  return cljs.core.rest(cljs.core.seq(a))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.PersistentQueue(b, this.count, this.front, this.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.fromArray([]));
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = !0;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv__2 = function() {
  return!1
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function(a, b) {
  return cljs.core.boolean$(cljs.core.map_QMARK_(b) ? cljs.core._EQ_.__2(cljs.core.count(a), cljs.core.count(b)) ? cljs.core.every_QMARK_(cljs.core.identity, cljs.core.map.__2(function(a) {
    return cljs.core._EQ_.__2(cljs.core.get.__3(b, cljs.core.first(a), cljs.core.never_equiv), cljs.core.second(a))
  }, a)) : null : null)
};
cljs.core.scan_array = function(a, b, c) {
  for(var d = c.length, e = 0;;) {
    if(e < d) {
      if(cljs.core._EQ_.__2(b, c[e])) {
        return e
      }
      e += a
    }else {
      return null
    }
  }
};
cljs.core.obj_map_contains_key_QMARK_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, !0, !1)
  }, c = function(a, b, c, g) {
    return cljs.core.truth_(function() {
      var c = goog.isString.call(null, a);
      return cljs.core.truth_(c) ? b.hasOwnProperty(a) : c
    }()) ? c : g
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__4 = c;
  return a
}();
cljs.core.obj_map_compare_keys = function(a, b) {
  var c = cljs.core.hash(a), d = cljs.core.hash(b);
  return c < d ? -1 : c > d ? 1 : 0
};
cljs.core.ObjMap = function(a, b, c) {
  this.meta = a;
  this.keys = b;
  this.strobj = c
};
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._lookup.__3(a, b, null)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  return cljs.core.obj_map_contains_key_QMARK_.__4(b, this.strobj, this.strobj[b], c)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc__3 = function(a, b, c) {
  if(cljs.core.truth_(goog.isString.call(null, b))) {
    var a = goog.object.clone.call(null, this.strobj), d = a.hasOwnProperty(b);
    a[b] = c;
    if(cljs.core.truth_(d)) {
      return new cljs.core.ObjMap(this.meta, this.keys, a)
    }
    c = cljs.core.aclone(this.keys);
    c.push(b);
    return new cljs.core.ObjMap(this.meta, c, a)
  }
  return cljs.core.with_meta(cljs.core.into(cljs.core.hash_map(b, c), cljs.core.seq(a)), this.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = function(a, b) {
  return cljs.core.obj_map_contains_key_QMARK_.__2(b, this.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = !0;
cljs.core.ObjMap.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.vector_QMARK_(b) ? cljs.core._assoc(a, cljs.core._nth.__2(b, 0), cljs.core._nth.__2(b, 1)) : cljs.core.reduce.__3(cljs.core._conj, a, b)
};
cljs.core.ObjMap.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq__1 = function() {
  var a = this;
  return 0 < a.keys.length ? cljs.core.map.__2(function(b) {
    return cljs.core.vector(b, a.strobj[b])
  }, a.keys.sort(cljs.core.obj_map_compare_keys)) : null
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_map(a, b)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.ObjMap(b, this.keys, this.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.ObjMap.EMPTY, this.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc__2 = function(a, b) {
  var c = this;
  if(cljs.core.truth_(function() {
    var a = goog.isString.call(null, b);
    return cljs.core.truth_(a) ? c.strobj.hasOwnProperty(b) : a
  }())) {
    var d = cljs.core.aclone(c.keys), e = goog.object.clone.call(null, c.strobj);
    d.splice(cljs.core.scan_array(1, b, d), 1);
    cljs.core.js_delete(e, b);
    return new cljs.core.ObjMap(c.meta, d, e)
  }
  return a
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], cljs.core.js_obj());
cljs.core.ObjMap.fromObject = function(a, b) {
  return new cljs.core.ObjMap(null, a, b)
};
cljs.core.HashMap = function(a, b, c) {
  this.meta = a;
  this.count = b;
  this.hashobj = c
};
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = !0;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = !0;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._lookup.__3(a, b, null)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  a = this.hashobj[cljs.core.hash(b)];
  b = cljs.core.truth_(a) ? cljs.core.scan_array(2, b, a) : null;
  return cljs.core.truth_(b) ? a[b + 1] : c
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = !0;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc__3 = function(a, b, c) {
  var a = cljs.core.hash(b), d = this.hashobj[a];
  if(cljs.core.truth_(d)) {
    var d = cljs.core.aclone(d), e = goog.object.clone.call(null, this.hashobj);
    e[a] = d;
    a = cljs.core.scan_array(2, b, d);
    if(cljs.core.truth_(a)) {
      return d[a + 1] = c, new cljs.core.HashMap(this.meta, this.count, e)
    }
    d.push(b, c);
    return new cljs.core.HashMap(this.meta, this.count + 1, e)
  }
  d = goog.object.clone.call(null, this.hashobj);
  d[a] = [b, c];
  return new cljs.core.HashMap(this.meta, this.count + 1, d)
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = function(a, b) {
  var c = this.hashobj[cljs.core.hash(b)], c = cljs.core.truth_(c) ? cljs.core.scan_array(2, b, c) : null;
  return cljs.core.truth_(c) ? !0 : !1
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = !0;
cljs.core.HashMap.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = !0;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.vector_QMARK_(b) ? cljs.core._assoc(a, cljs.core._nth.__2(b, 0), cljs.core._nth.__2(b, 1)) : cljs.core.reduce.__3(cljs.core._conj, a, b)
};
cljs.core.HashMap.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = !0;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq__1 = function() {
  var a = this;
  if(0 < a.count) {
    var b = cljs.core.js_keys(a.hashobj).sort();
    return cljs.core.mapcat.__2(function(b) {
      return cljs.core.map.__2(cljs.core.vec, cljs.core.partition.__2(2, a.hashobj[b]))
    }, b)
  }
  return null
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = !0;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count__1 = function() {
  return this.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = !0;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_map(a, b)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.HashMap(b, this.count, this.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = !0;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.HashMap.EMPTY, this.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = !0;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc__2 = function(a, b) {
  var c = cljs.core.hash(b), d = this.hashobj[c], e = cljs.core.truth_(d) ? cljs.core.scan_array(2, b, d) : null;
  if(cljs.core.not(e)) {
    return a
  }
  var f = goog.object.clone.call(null, this.hashobj);
  3 > d.length ? cljs.core.js_delete(f, c) : (d = cljs.core.aclone(d), d.splice(e, 2), f[c] = d);
  return new cljs.core.HashMap(this.meta, this.count - 1, f)
};
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj());
cljs.core.HashMap.fromArrays = function(a, b) {
  for(var c = a.length, d = 0, e = cljs.core.HashMap.EMPTY;;) {
    if(d < c) {
      var f = d + 1, e = cljs.core.assoc.__3(e, a[d], b[d]), d = f
    }else {
      return e
    }
  }
};
cljs.core.hash_map = function() {
  var a = function(a) {
    for(var a = cljs.core.seq(a), b = cljs.core.HashMap.EMPTY;;) {
      if(cljs.core.truth_(a)) {
        var e = cljs.core.nnext(a), b = cljs.core.assoc.__3(b, cljs.core.first(a), cljs.core.second(a)), a = e
      }else {
        return b
      }
    }
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.keys = function(a) {
  return cljs.core.seq(cljs.core.map.__2(cljs.core.first, a))
};
cljs.core.key = function(a) {
  return cljs.core._key(a)
};
cljs.core.vals = function(a) {
  return cljs.core.seq(cljs.core.map.__2(cljs.core.second, a))
};
cljs.core.val = function(a) {
  return cljs.core._val(a)
};
cljs.core.merge = function() {
  var a = function(a) {
    return cljs.core.truth_(cljs.core.some(cljs.core.identity, a)) ? cljs.core.reduce.__2(function(a, b) {
      return cljs.core.conj.__2(cljs.core.truth_(a) ? a : cljs.core.ObjMap.fromObject([], {}), b)
    }, a) : null
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.merge_with = function() {
  var a = function(a, b) {
    if(cljs.core.truth_(cljs.core.some(cljs.core.identity, b))) {
      var e = function(b, d) {
        var e = cljs.core.first(d), i = cljs.core.second(d);
        return cljs.core.contains_QMARK_(b, e) ? cljs.core.assoc.__3(b, e, a.call(null, cljs.core.get.__2(b, e), i)) : cljs.core.assoc.__3(b, e, i)
      };
      return cljs.core.reduce.__2(function(a, b) {
        return cljs.core.reduce.__3(e, cljs.core.truth_(a) ? a : cljs.core.ObjMap.fromObject([], {}), cljs.core.seq(b))
      }, b)
    }
    return null
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
cljs.core.select_keys = function(a, b) {
  for(var c = cljs.core.ObjMap.fromObject([], {}), d = cljs.core.seq(b);;) {
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first(d), f = cljs.core.get.__3(a, e, "\ufdd0'user/not-found"), c = cljs.core.not_EQ_.__2(f, "\ufdd0'user/not-found") ? cljs.core.assoc.__3(c, e, f) : c, d = cljs.core.next(d)
    }else {
      return c
    }
  }
};
cljs.core.Set = function(a, b) {
  this.meta = a;
  this.hash_map = b
};
cljs.core.Set.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Set")
};
cljs.core.Set.prototype.cljs$core$IHash$ = !0;
cljs.core.Set.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = !0;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__2 = function(a, b) {
  return cljs.core._lookup.__3(a, b, null)
};
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__3 = function(a, b, c) {
  return cljs.core.truth_(cljs.core._contains_key_QMARK_(this.hash_map, b)) ? b : c
};
cljs.core.Set.prototype.cljs$core$IFn$ = !0;
cljs.core.Set.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.__2(this, c);
      case 3:
        return cljs.core._lookup.__3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = !0;
cljs.core.Set.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return new cljs.core.Set(this.meta, cljs.core.assoc.__3(this.hash_map, b, null))
};
cljs.core.Set.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq__1 = function() {
  return cljs.core.keys(this.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = !0;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin__2 = function(a, b) {
  return new cljs.core.Set(this.meta, cljs.core.dissoc.__2(this.hash_map, b))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = !0;
cljs.core.Set.prototype.cljs$core$ICounted$_count__1 = function(a) {
  return cljs.core.count(cljs.core.seq(a))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  var c = cljs.core.set_QMARK_(b);
  return c ? (c = cljs.core._EQ_.__2(cljs.core.count(a), cljs.core.count(b))) ? cljs.core.every_QMARK_(function(b) {
    return cljs.core.contains_QMARK_(a, b)
  }, b) : c : c
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.Set(b, this.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = !0;
cljs.core.Set.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.Set.EMPTY, this.meta)
};
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map());
cljs.core.set = function(a) {
  for(var a = cljs.core.seq(a), b = cljs.core.Set.EMPTY;;) {
    if(cljs.core.not(cljs.core.empty_QMARK_(a))) {
      var c = cljs.core.rest(a), b = cljs.core.conj.__2(b, cljs.core.first(a)), a = c
    }else {
      return b
    }
  }
};
cljs.core.replace = function(a, b) {
  if(cljs.core.vector_QMARK_(b)) {
    var c = cljs.core.count(b);
    return cljs.core.reduce.__3(function(b, c) {
      var f = cljs.core.find(a, cljs.core.nth.__2(b, c));
      return cljs.core.truth_(f) ? cljs.core.assoc.__3(b, c, cljs.core.second(f)) : b
    }, b, cljs.core.take(c, cljs.core.iterate(cljs.core.inc, 0)))
  }
  return cljs.core.map.__2(function(b) {
    var c = cljs.core.find(a, b);
    return cljs.core.truth_(c) ? cljs.core.second(c) : b
  }, b)
};
cljs.core.distinct = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      return function(a, d) {
        for(;;) {
          var e = a, i = cljs.core.nth.__3(e, 0, null), e = cljs.core.seq(e);
          if(cljs.core.truth_(e)) {
            if(cljs.core.contains_QMARK_(d, i)) {
              i = cljs.core.rest(e), e = d, a = i, d = e
            }else {
              return cljs.core.cons(i, c.call(null, cljs.core.rest(e), cljs.core.conj.__2(d, i)))
            }
          }else {
            return null
          }
        }
      }.call(null, a, e)
    })
  }.call(null, a, cljs.core.set([]))
};
cljs.core.butlast = function(a) {
  for(var b = cljs.core.PersistentVector.fromArray([]);;) {
    if(cljs.core.truth_(cljs.core.next(a))) {
      b = cljs.core.conj.__2(b, cljs.core.first(a)), a = cljs.core.next(a)
    }else {
      return cljs.core.seq(b)
    }
  }
};
cljs.core.name = function(a) {
  if(cljs.core.string_QMARK_(a)) {
    return a
  }
  var b = cljs.core.keyword_QMARK_(a);
  if(b ? b : cljs.core.symbol_QMARK_(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? cljs.core.subs.__2(a, 2) : cljs.core.subs.__2(a, b + 1)
  }
  throw Error(cljs.core.str("Doesn't support name: ", a));
};
cljs.core.namespace = function(a) {
  var b = cljs.core.keyword_QMARK_(a);
  if(b ? b : cljs.core.symbol_QMARK_(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? cljs.core.subs.__3(a, 2, b) : null
  }
  throw Error(cljs.core.str("Doesn't support namespace: ", a));
};
cljs.core.zipmap = function(a, b) {
  for(var c = cljs.core.ObjMap.fromObject([], {}), d = cljs.core.seq(a), e = cljs.core.seq(b);;) {
    if(cljs.core.truth_(function() {
      var a = d;
      return cljs.core.truth_(a) ? e : a
    }())) {
      var c = cljs.core.assoc.__3(c, cljs.core.first(d), cljs.core.first(e)), f = cljs.core.next(d), g = cljs.core.next(e), d = f, e = g
    }else {
      return c
    }
  }
};
cljs.core.max_key = function() {
  var a = null, b = function(a, b, c) {
    return a.call(null, b) > a.call(null, c) ? b : c
  }, c = function() {
    var b = function(b, c, d, e) {
      return cljs.core.reduce.__3(function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), e)
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, c, e, i, a)
    };
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__2 = function(a, b) {
    return b
  };
  a.__3 = b;
  a.__4 = c;
  return a
}();
cljs.core.min_key = function() {
  var a = null, b = function(a, b, c) {
    return a.call(null, b) < a.call(null, c) ? b : c
  }, c = function() {
    var b = function(b, c, d, e) {
      return cljs.core.reduce.__3(function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), e)
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, c, e, i, a)
    };
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__2 = function(a, b) {
    return b
  };
  a.__3 = b;
  a.__4 = c;
  return a
}();
cljs.core.partition_all = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, b, c)
  }, c = function(b, c, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq(f);
      return cljs.core.truth_(g) ? cljs.core.cons(cljs.core.take(b, g), a.call(null, b, c, cljs.core.drop(c, g))) : null
    })
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.take_while = function take_while(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq(c);
    return cljs.core.truth_(d) ? cljs.core.truth_(b.call(null, cljs.core.first(d))) ? cljs.core.cons(cljs.core.first(d), take_while.call(null, b, cljs.core.rest(d))) : null : null
  })
};
cljs.core.Range = function(a, b, c, d) {
  this.meta = a;
  this.start = b;
  this.end = c;
  this.step = d
};
cljs.core.Range.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = !0;
cljs.core.Range.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return cljs.core.hash_coll(a)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = !0;
cljs.core.Range.prototype.cljs$core$ICollection$ = !0;
cljs.core.Range.prototype.cljs$core$ICollection$_conj__2 = function(a, b) {
  return cljs.core.cons(b, a)
};
cljs.core.Range.prototype.toString = function() {
  return cljs.core.pr_str(this)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = !0;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__2 = function(a, b) {
  return cljs.core.ci_reduce.__2(a, b)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__3 = function(a, b, c) {
  return cljs.core.ci_reduce.__3(a, b, c)
};
cljs.core.Range.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
  return cljs.core.truth_((0 < this.step ? cljs.core._LT_ : cljs.core._GT_).call(null, this.start, this.end)) ? a : null
};
cljs.core.Range.prototype.cljs$core$ICounted$ = !0;
cljs.core.Range.prototype.cljs$core$ICounted$_count__1 = function(a) {
  return cljs.core.not(cljs.core._seq(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
cljs.core.Range.prototype.cljs$core$ISeq$ = !0;
cljs.core.Range.prototype.cljs$core$ISeq$_first__1 = function() {
  return this.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest__1 = function(a) {
  return cljs.core.truth_(cljs.core._seq(a)) ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step) : cljs.core.list()
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return cljs.core.equiv_sequential(a, b)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
  return new cljs.core.Range(b, this.start, this.end, this.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = !0;
cljs.core.Range.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
  if(b < cljs.core._count(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? cljs.core._EQ_.__2(this.step, 0) : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
  c = b < cljs.core._count(a) ? this.start + b * this.step : ((a = this.start > this.end) ? cljs.core._EQ_.__2(this.step, 0) : a) ? this.start : c;
  return c
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty__1 = function() {
  return cljs.core.with_meta(cljs.core.List.EMPTY, this.meta)
};
cljs.core.range = function() {
  var a = null, b = function() {
    return a.call(null, 0, Number.MAX_VALUE, 1)
  }, c = function(b) {
    return a.call(null, 0, b, 1)
  }, d = function(b, c) {
    return a.call(null, b, c, 1)
  }, e = function(a, b, c) {
    return new cljs.core.Range(null, a, b, c)
  }, a = function(a, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, g);
      case 3:
        return e.call(this, a, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__0 = b;
  a.__1 = c;
  a.__2 = d;
  a.__3 = e;
  return a
}();
cljs.core.take_nth = function take_nth(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq(c);
    return cljs.core.truth_(d) ? cljs.core.cons(cljs.core.first(d), take_nth.call(null, b, cljs.core.drop(b, d))) : null
  })
};
cljs.core.split_with = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while(a, b), cljs.core.drop_while(a, b)])
};
cljs.core.partition_by = function partition_by(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq(c);
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first(d), f = b.call(null, e), e = cljs.core.cons(e, cljs.core.take_while(function(c) {
        return cljs.core._EQ_.__2(f, b.call(null, c))
      }, cljs.core.next(d)));
      return cljs.core.cons(e, partition_by.call(null, b, cljs.core.seq(cljs.core.drop(cljs.core.count(e), d))))
    }
    return null
  })
};
cljs.core.frequencies = function(a) {
  return cljs.core.reduce.__3(function(a, c) {
    return cljs.core.assoc.__3(a, c, cljs.core.get.__3(a, c, 0) + 1)
  }, cljs.core.ObjMap.fromObject([], {}), a)
};
cljs.core.reductions = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq(c);
      return cljs.core.truth_(f) ? a.call(null, b, cljs.core.first(f), cljs.core.rest(f)) : cljs.core.list(b.call(null))
    })
  }, c = function(b, c, f) {
    return cljs.core.cons(c, new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq(f);
      return cljs.core.truth_(g) ? a.call(null, b, b.call(null, c, cljs.core.first(g)), cljs.core.rest(g)) : null
    }))
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.juxt = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function() {
        var b = function(b, c, d, e) {
          var g = null;
          goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return cljs.core.vector(cljs.core.apply.__5(a, b, c, d, g))
        };
        b.cljs$lang$maxFixedArity = 3;
        b.cljs$lang$applyTo = function(b) {
          var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
          return cljs.core.vector(cljs.core.apply.__5(a, c, d, e, b))
        };
        return b
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector(a.call(null));
          case 1:
            return cljs.core.vector(a.call(null, b));
          case 2:
            return cljs.core.vector(a.call(null, b, d));
          case 3:
            return cljs.core.vector(a.call(null, b, d, e));
          default:
            return c.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = c.cljs$lang$applyTo;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, e, h) {
          return cljs.core.vector(cljs.core.apply.__5(a, c, d, e, h), cljs.core.apply.__5(b, c, d, e, h))
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), c = function(c, e, h, m) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector(a.call(null), b.call(null));
          case 1:
            return cljs.core.vector(a.call(null, c), b.call(null, c));
          case 2:
            return cljs.core.vector(a.call(null, c, e), b.call(null, c, e));
          case 3:
            return cljs.core.vector(a.call(null, c, e, h), b.call(null, c, e, h));
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function() {
        var d = function(d, e, i, j) {
          return cljs.core.vector(cljs.core.apply.__5(a, d, e, i, j), cljs.core.apply.__5(b, d, e, i, j), cljs.core.apply.__5(c, d, e, i, j))
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), d = function(d, i, m, o) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector(a.call(null), b.call(null), c.call(null));
          case 1:
            return cljs.core.vector(a.call(null, d), b.call(null, d), c.call(null, d));
          case 2:
            return cljs.core.vector(a.call(null, d, i), b.call(null, d, i), c.call(null, d, i));
          case 3:
            return cljs.core.vector(a.call(null, d, i, m), b.call(null, d, i, m), c.call(null, d, i, m));
          default:
            return e.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.__4(a, b, c, d);
      return function() {
        var a = null, b = function() {
          return cljs.core.reduce.__3(function(a, b) {
            return cljs.core.conj.__2(a, b.call(null))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, c = function(a) {
          return cljs.core.reduce.__3(function(b, c) {
            return cljs.core.conj.__2(b, c.call(null, a))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, d = function(a, b) {
          return cljs.core.reduce.__3(function(c, d) {
            return cljs.core.conj.__2(c, d.call(null, a, b))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, f = function(a, b, c) {
          return cljs.core.reduce.__3(function(d, e) {
            return cljs.core.conj.__2(d, e.call(null, a, b, c))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, g = function() {
          var a = function(a, b, c, d) {
            return cljs.core.reduce.__3(function(e, f) {
              return cljs.core.conj.__2(e, cljs.core.apply.__5(f, a, b, c, d))
            }, cljs.core.PersistentVector.fromArray([]), e)
          }, b = function(b, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return a.call(this, b, c, d, f)
          };
          b.cljs$lang$maxFixedArity = 3;
          b.cljs$lang$applyTo = function(b) {
            var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
            return a.call(this, c, d, e, b)
          };
          return b
        }(), a = function(a, e, h, i) {
          switch(arguments.length) {
            case 0:
              return b.call(this);
            case 1:
              return c.call(this, a);
            case 2:
              return d.call(this, a, e);
            case 3:
              return f.call(this, a, e, h);
            default:
              return g.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = g.cljs$lang$applyTo;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  a.__3 = d;
  a.__4 = e;
  return a
}();
cljs.core.dorun = function() {
  var a = null, b = function(a) {
    for(;;) {
      if(cljs.core.truth_(cljs.core.seq(a))) {
        a = cljs.core.next(a)
      }else {
        return null
      }
    }
  }, c = function(a, b) {
    for(;;) {
      if(cljs.core.truth_(function() {
        var c = cljs.core.seq(b);
        return cljs.core.truth_(c) ? 0 < a : c
      }())) {
        var c = a - 1, g = cljs.core.next(b), a = c, b = g
      }else {
        return null
      }
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.doall = function() {
  var a = null, b = function(a) {
    cljs.core.dorun.__1(a);
    return a
  }, c = function(a, b) {
    cljs.core.dorun.__2(a, b);
    return b
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.re_matches = function(a, b) {
  var c = a.exec(b);
  return cljs.core._EQ_.__2(cljs.core.first(c), b) ? cljs.core._EQ_.__2(cljs.core.count(c), 1) ? cljs.core.first(c) : cljs.core.vec(c) : null
};
cljs.core.re_find = function(a, b) {
  var c = a.exec(b);
  return null === c ? null : cljs.core._EQ_.__2(cljs.core.count(c), 1) ? cljs.core.first(c) : cljs.core.vec(c)
};
cljs.core.re_seq = function re_seq(b, c) {
  var d = cljs.core.re_find(b, c), e = c.search(b), f = cljs.core.coll_QMARK_(d) ? cljs.core.first(d) : d, g = cljs.core.subs.__2(c, e + cljs.core.count(f));
  return cljs.core.truth_(d) ? new cljs.core.LazySeq(null, !1, function() {
    return cljs.core.cons(d, re_seq.call(null, b, g))
  }) : null
};
cljs.core.re_pattern = function(a) {
  var b = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  cljs.core.nth.__3(b, 0, null);
  a = cljs.core.nth.__3(b, 1, null);
  b = cljs.core.nth.__3(b, 2, null);
  return RegExp(b, a)
};
cljs.core.pr_sequential = function(a, b, c, d, e, f) {
  return cljs.core.concat(cljs.core.PersistentVector.fromArray([b]), cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([c]), cljs.core.map.__2(function(b) {
    return a.call(null, b, e)
  }, f))), cljs.core.PersistentVector.fromArray([d]))
};
cljs.core.string_print = function(a) {
  cljs.core._STAR_print_fn_STAR_(a);
  return null
};
cljs.core.flush = function() {
  return null
};
cljs.core.pr_seq = function pr_seq(b, c) {
  return null === b ? cljs.core.list("nil") : void 0 === b ? cljs.core.list("#<undefined>") : cljs.core.concat.__2(cljs.core.truth_(function() {
    var d = cljs.core.get.__2(c, "\ufdd0'meta");
    return cljs.core.truth_(d) ? (d = function() {
      return cljs.core.truth_(function() {
        if(cljs.core.truth_(b)) {
          var c = b.cljs$core$IMeta$;
          return cljs.core.truth_(c) ? cljs.core.not(b.hasOwnProperty("cljs$core$IMeta$")) : c
        }
        return b
      }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IMeta, b)
    }(), cljs.core.truth_(d) ? cljs.core.meta(b) : d) : d
  }()) ? cljs.core.concat(cljs.core.PersistentVector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta(b), c), cljs.core.PersistentVector.fromArray([" "])) : null, cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(b)) {
        var c = b.cljs$core$IPrintable$;
        return cljs.core.truth_(c) ? cljs.core.not(b.hasOwnProperty("cljs$core$IPrintable$")) : c
      }
      return b
    }()) ? !0 : cljs.core.type_satisfies_(cljs.core.IPrintable, b)
  }()) ? cljs.core._pr_seq(b, c) : cljs.core.list("#<", cljs.core.str.__1(b), ">"))
};
cljs.core.pr_sb = function(a, b) {
  var c = cljs.core.first(a), d = new goog.string.StringBuffer, e = cljs.core.seq(a);
  if(cljs.core.truth_(e)) {
    for(var f = cljs.core.first(e);;) {
      f !== c && d.append(" ");
      var g = cljs.core.seq(cljs.core.pr_seq(f, b));
      if(cljs.core.truth_(g)) {
        for(f = cljs.core.first(g);;) {
          if(d.append(f), f = cljs.core.next(g), cljs.core.truth_(f)) {
            g = f, f = cljs.core.first(g)
          }else {
            break
          }
        }
      }
      e = cljs.core.next(e);
      if(cljs.core.truth_(e)) {
        f = e, e = cljs.core.first(f), g = f, f = e, e = g
      }else {
        break
      }
    }
  }
  return d
};
cljs.core.pr_str_with_opts = function(a, b) {
  return cljs.core.str.__1(cljs.core.pr_sb(a, b))
};
cljs.core.prn_str_with_opts = function(a, b) {
  var c = cljs.core.pr_sb(a, b);
  c.append("\n");
  return cljs.core.str.__1(c)
};
cljs.core.pr_with_opts = function(a, b) {
  var c = cljs.core.first(a), d = cljs.core.seq(a);
  if(cljs.core.truth_(d)) {
    for(var e = cljs.core.first(d);;) {
      e !== c && cljs.core.string_print(" ");
      var f = cljs.core.seq(cljs.core.pr_seq(e, b));
      if(cljs.core.truth_(f)) {
        for(e = cljs.core.first(f);;) {
          if(cljs.core.string_print(e), e = cljs.core.next(f), cljs.core.truth_(e)) {
            f = e, e = cljs.core.first(f)
          }else {
            break
          }
        }
      }
      d = cljs.core.next(d);
      if(cljs.core.truth_(d)) {
        e = d, d = cljs.core.first(e), f = e, e = d, d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.newline = function(a) {
  cljs.core.string_print("\n");
  return cljs.core.truth_(cljs.core.get.__2(a, "\ufdd0'flush-on-newline")) ? cljs.core.flush() : null
};
cljs.core._STAR_flush_on_newline_STAR_ = !0;
cljs.core._STAR_print_readably_STAR_ = !0;
cljs.core._STAR_print_meta_STAR_ = !1;
cljs.core._STAR_print_dup_STAR_ = !1;
cljs.core.pr_opts = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var a = function(a) {
    var c = null;
    goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return cljs.core.pr_str_with_opts(c, cljs.core.pr_opts())
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = function(a) {
    a = cljs.core.seq(a);
    return cljs.core.pr_str_with_opts(a, cljs.core.pr_opts())
  };
  return a
}();
cljs.core.prn_str = function() {
  var a = function(a) {
    var c = null;
    goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return cljs.core.prn_str_with_opts(c, cljs.core.pr_opts())
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = function(a) {
    a = cljs.core.seq(a);
    return cljs.core.prn_str_with_opts(a, cljs.core.pr_opts())
  };
  return a
}();
cljs.core.pr = function() {
  var a = function(a) {
    var c = null;
    goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return cljs.core.pr_with_opts(c, cljs.core.pr_opts())
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = function(a) {
    a = cljs.core.seq(a);
    return cljs.core.pr_with_opts(a, cljs.core.pr_opts())
  };
  return a
}();
cljs.core.print = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts(a, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.print_str = function() {
  var a = function(a) {
    return cljs.core.pr_str_with_opts(a, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.println = function() {
  var a = function(a) {
    cljs.core.pr_with_opts(a, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", !1));
    return cljs.core.newline(cljs.core.pr_opts())
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.println_str = function() {
  var a = function(a) {
    return cljs.core.prn_str_with_opts(a, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.prn = function() {
  var a = function(a) {
    cljs.core.pr_with_opts(a, cljs.core.pr_opts());
    return cljs.core.newline(cljs.core.pr_opts())
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(function(a) {
    return cljs.core.pr_sequential(cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.IPrintable.number = !0;
cljs.core._pr_seq.number = function(a) {
  return cljs.core.list(cljs.core.str.__1(a))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable["boolean"] = !0;
cljs.core._pr_seq["boolean"] = function(a) {
  return cljs.core.list(cljs.core.str.__1(a))
};
cljs.core.Set.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "#{", " ", "}", b, a)
};
cljs.core.IPrintable.string = !0;
cljs.core._pr_seq.string = function(a, b) {
  return cljs.core.keyword_QMARK_(a) ? cljs.core.list(cljs.core.str(":", function() {
    var b = cljs.core.namespace(a);
    return cljs.core.truth_(b) ? cljs.core.str(b, "/") : null
  }(), cljs.core.name(a))) : cljs.core.symbol_QMARK_(a) ? cljs.core.list(cljs.core.str(function() {
    var b = cljs.core.namespace(a);
    return cljs.core.truth_(b) ? cljs.core.str(b, "/") : null
  }(), cljs.core.name(a))) : cljs.core.list(cljs.core.truth_("\ufdd0'readably".call(null, b)) ? goog.string.quote.call(null, a) : a)
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = !0;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable.array = !0;
cljs.core._pr_seq.array = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "#<Array [", ", ", "]>", b, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable["function"] = !0;
cljs.core._pr_seq["function"] = function(a) {
  return cljs.core.list("#<", cljs.core.str.__1(a), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq__2 = function() {
  return cljs.core.list("()")
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.pr_sequential(function(a) {
    return cljs.core.pr_sequential(cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.Atom = function(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.validator = c;
  this.watches = d
};
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = !0;
cljs.core.Atom.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = !0;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches__3 = function(a, b, c) {
  var d = cljs.core.seq(this.watches);
  if(cljs.core.truth_(d)) {
    var e = cljs.core.first(d);
    cljs.core.nth.__3(e, 0, null);
    for(cljs.core.nth.__3(e, 1, null);;) {
      var f = e, e = cljs.core.nth.__3(f, 0, null), f = cljs.core.nth.__3(f, 1, null);
      f.call(null, e, a, b, c);
      d = cljs.core.next(d);
      if(cljs.core.truth_(d)) {
        e = d, d = cljs.core.first(e), f = e, e = d, d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch__3 = function(a, b, c) {
  return a.watches = cljs.core.assoc.__3(this.watches, b, c)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch__2 = function(a, b) {
  return a.watches = cljs.core.dissoc.__2(this.watches, b)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, b) {
  return cljs.core.concat(cljs.core.PersistentVector.fromArray(["#<Atom: "]), cljs.core._pr_seq(this.state, b), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = !0;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta__1 = function() {
  return this.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = !0;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref__1 = function() {
  return this.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv__2 = function(a, b) {
  return a === b
};
cljs.core.atom = function() {
  var a = null, b = function(a) {
    return new cljs.core.Atom(a, null, null, null)
  }, c = function() {
    var a = function(a, b) {
      var c = cljs.core.seq_QMARK_(b) ? cljs.core.apply.__2(cljs.core.hash_map, b) : b, d = cljs.core.get.__2(c, "\ufdd0'validator"), c = cljs.core.get.__2(c, "\ufdd0'meta");
      return new cljs.core.Atom(a, c, d, null)
    }, b = function(b, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return a.call(this, b, e)
    };
    b.cljs$lang$maxFixedArity = 1;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), b = cljs.core.rest(b);
      return a.call(this, c, b)
    };
    return b
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.reset_BANG_ = function(a, b) {
  var c = a.validator;
  if(cljs.core.truth_(c) && !cljs.core.truth_(c.call(null, b))) {
    throw Error(cljs.core.str("Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3400)))));
  }
  c = a.state;
  a.state = b;
  cljs.core._notify_watches(a, c, b);
  return b
};
cljs.core.swap_BANG_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core.reset_BANG_(a, b.call(null, a.state))
  }, c = function(a, b, c) {
    return cljs.core.reset_BANG_(a, b.call(null, a.state, c))
  }, d = function(a, b, c, d) {
    return cljs.core.reset_BANG_(a, b.call(null, a.state, c, d))
  }, e = function(a, b, c, d, e) {
    return cljs.core.reset_BANG_(a, b.call(null, a.state, c, d, e))
  }, f = function() {
    var a = function(a, b, c, d, e, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return cljs.core.reset_BANG_(a, cljs.core.apply(b, a.state, c, d, e, g))
    };
    a.cljs$lang$maxFixedArity = 5;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), e = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), f = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(a))))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(a)))));
      return cljs.core.reset_BANG_(b, cljs.core.apply(c, b.state, d, e, f, a))
    };
    return a
  }(), a = function(a, h, i, j, k, l) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, h);
      case 3:
        return c.call(this, a, h, i);
      case 4:
        return d.call(this, a, h, i, j);
      case 5:
        return e.call(this, a, h, i, j, k);
      default:
        return f.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.__2 = b;
  a.__3 = c;
  a.__4 = d;
  a.__5 = e;
  a.__6 = f;
  return a
}();
cljs.core.compare_and_set_BANG_ = function(a, b, c) {
  return cljs.core._EQ_.__2(a.state, b) ? (cljs.core.reset_BANG_(a, c), !0) : !1
};
cljs.core.deref = function(a) {
  return cljs.core._deref(a)
};
cljs.core.set_validator_BANG_ = function(a, b) {
  return a.validator = b
};
cljs.core.get_validator = function(a) {
  return a.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var a = function(a, c, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.meta = cljs.core.apply.__3(c, a.meta, e)
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = function(a) {
    var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
    return c.meta = cljs.core.apply.__3(d, c.meta, a)
  };
  return a
}();
cljs.core.reset_meta_BANG_ = function(a, b) {
  return a.meta = b
};
cljs.core.add_watch = function(a, b, c) {
  return cljs.core._add_watch(a, b, c)
};
cljs.core.remove_watch = function(a, b) {
  return cljs.core._remove_watch(a, b)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var a = null, b = function() {
    return a.call(null, "G__")
  }, c = function(a) {
    if(null === cljs.core.gensym_counter) {
      cljs.core.gensym_counter = cljs.core.atom.__1(0)
    }
    return cljs.core.symbol.__1(cljs.core.str(a, cljs.core.swap_BANG_.__2(cljs.core.gensym_counter, cljs.core.inc)))
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__0 = b;
  a.__1 = c;
  return a
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(a, b) {
  this.state = a;
  this.f = b
};
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = !0;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK___1 = function() {
  return"\ufdd0'done".call(null, cljs.core.deref(this.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = !0;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref__1 = function() {
  var a = this;
  return"\ufdd0'value".call(null, cljs.core.swap_BANG_.__2(a.state, function(b) {
    var b = cljs.core.seq_QMARK_(b) ? cljs.core.apply.__2(cljs.core.hash_map, b) : b, c = cljs.core.get.__2(b, "\ufdd0'done");
    return cljs.core.truth_(c) ? b : cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":!0, "\ufdd0'value":a.f.call(null)})
  }))
};
cljs.core.delay_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_(cljs.core.Delay, a)
};
cljs.core.force = function(a) {
  return cljs.core.delay_QMARK_(a) ? cljs.core.deref(a) : a
};
cljs.core.realized_QMARK_ = function(a) {
  return cljs.core._realized_QMARK_(a)
};
cljs.core.js__GT_clj = function() {
  var a = function(a, b) {
    var e = cljs.core.seq_QMARK_(b) ? cljs.core.apply.__2(cljs.core.hash_map, b) : b, e = cljs.core.get.__2(e, "\ufdd0'keywordize-keys"), f = cljs.core.truth_(e) ? cljs.core.keyword : cljs.core.str;
    return function h(a) {
      return cljs.core.seq_QMARK_(a) ? cljs.core.doall.__1(cljs.core.map.__2(h, a)) : cljs.core.coll_QMARK_(a) ? cljs.core.into(cljs.core.empty(a), cljs.core.map.__2(h, a)) : cljs.core.truth_(goog.isArray.call(null, a)) ? cljs.core.vec(cljs.core.map.__2(h, a)) : cljs.core.type(a) === Object ? cljs.core.into(cljs.core.ObjMap.fromObject([], {}), function() {
        return function k(b) {
          return new cljs.core.LazySeq(null, !1, function() {
            for(;;) {
              if(cljs.core.truth_(cljs.core.seq(b))) {
                var c = cljs.core.first(b);
                return cljs.core.cons(cljs.core.PersistentVector.fromArray([f.call(null, c), h.call(null, a[c])]), k.call(null, cljs.core.rest(b)))
              }
              return null
            }
          })
        }.call(null, cljs.core.js_keys(a))
      }()) : a
    }.call(null, a)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
cljs.core.memoize = function(a) {
  var b = cljs.core.atom.__1(cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var c = function(c) {
      var d = cljs.core.get.__2(cljs.core.deref(b), c);
      if(cljs.core.truth_(d)) {
        return d
      }
      d = cljs.core.apply.__2(a, c);
      cljs.core.swap_BANG_.__4(b, cljs.core.assoc, c, d);
      return d
    }, d = function(a) {
      var b = null;
      goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b)
    };
    d.cljs$lang$maxFixedArity = 0;
    d.cljs$lang$applyTo = function(a) {
      a = cljs.core.seq(a);
      return c.call(this, a)
    };
    return d
  }()
};
cljs.core.trampoline = function() {
  var a = null, b = function(a) {
    for(;;) {
      if(a = a.call(null), !cljs.core.fn_QMARK_(a)) {
        return a
      }
    }
  }, c = function() {
    var b = function(b, c) {
      return a.call(null, function() {
        return cljs.core.apply.__2(b, c)
      })
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.rand = function() {
  var a = null, b = function() {
    return a.call(null, 1)
  }, c = function(a) {
    return Math.random() * a
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__0 = b;
  a.__1 = c;
  return a
}();
cljs.core.rand_int = function(a) {
  return Math.floor(Math.random() * a)
};
cljs.core.rand_nth = function(a) {
  return cljs.core.nth.__2(a, cljs.core.rand_int(cljs.core.count(a)))
};
cljs.core.group_by = function(a, b) {
  return cljs.core.reduce.__3(function(b, d) {
    var e = a.call(null, d);
    return cljs.core.assoc.__3(b, e, cljs.core.conj.__2(cljs.core.get.__3(b, e, cljs.core.PersistentVector.fromArray([])), d))
  }, cljs.core.ObjMap.fromObject([], {}), b)
};
cljs.core.make_hierarchy = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.__1(cljs.core.make_hierarchy());
cljs.core.isa_QMARK_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, cljs.core.deref(cljs.core.global_hierarchy), b, c)
  }, c = function(b, c, f) {
    var g = cljs.core._EQ_.__2(c, f);
    if(g || (g = cljs.core.contains_QMARK_("\ufdd0'ancestors".call(null, b).call(null, c), f))) {
      return g
    }
    if(g = cljs.core.vector_QMARK_(f)) {
      if(g = cljs.core.vector_QMARK_(c)) {
        if(g = cljs.core._EQ_.__2(cljs.core.count(f), cljs.core.count(c))) {
          for(var g = !0, h = 0;;) {
            var i = cljs.core.not(g);
            if(i ? i : cljs.core._EQ_.__2(h, cljs.core.count(f))) {
              return g
            }
            g = a.call(null, b, c.call(null, h), f.call(null, h));
            h += 1
          }
        }else {
          return g
        }
      }else {
        return g
      }
    }else {
      return g
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.parents = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref(cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'parents".call(null, a), b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.ancestors = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref(cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'ancestors".call(null, a), b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.descendants = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref(cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'descendants".call(null, a), b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
cljs.core.derive = function() {
  var a = null, b = function(b, c) {
    if(!cljs.core.truth_(cljs.core.namespace(c))) {
      throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3684)))));
    }
    cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy, a, b, c);
    return null
  }, c = function(a, b, c) {
    if(!cljs.core.not_EQ_.__2(b, c)) {
      throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3688)))));
    }
    var g = "\ufdd0'parents".call(null, a), h = "\ufdd0'descendants".call(null, a), i = "\ufdd0'ancestors".call(null, a), j = function(a, b, c, d, e) {
      return cljs.core.reduce.__3(function(a, b) {
        return cljs.core.assoc.__3(a, b, cljs.core.reduce.__3(cljs.core.conj, cljs.core.get.__3(e, b, cljs.core.set([])), cljs.core.cons(d, e.call(null, d))))
      }, a, cljs.core.cons(b, c.call(null, b)))
    };
    if(cljs.core.contains_QMARK_(g.call(null, b), c)) {
      b = null
    }else {
      if(cljs.core.contains_QMARK_(i.call(null, b), c)) {
        throw Error(cljs.core.str(b, "already has", c, "as ancestor"));
      }
      if(cljs.core.contains_QMARK_(i.call(null, c), b)) {
        throw Error(cljs.core.str("Cyclic derivation:", c, "has", b, "as ancestor"));
      }
      b = cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.__3("\ufdd0'parents".call(null, a), b, cljs.core.conj.__2(cljs.core.get.__3(g, b, cljs.core.set([])), c)), "\ufdd0'ancestors":j.call(null, "\ufdd0'ancestors".call(null, a), b, h, c, i), "\ufdd0'descendants":j.call(null, "\ufdd0'descendants".call(null, a), c, i, b, h)})
    }
    return b ? b : a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.underive = function() {
  var a = null, b = function(b, c) {
    cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy, a, b, c);
    return null
  }, c = function(a, b, c) {
    var g = "\ufdd0'parents".call(null, a), h = g.call(null, b) ? cljs.core.disj.__2(g.call(null, b), c) : cljs.core.set([]), h = cljs.core.not_empty(h) ? cljs.core.assoc.__3(g, b, h) : cljs.core.dissoc.__2(g, b), h = cljs.core.flatten(cljs.core.map.__2(function(a) {
      return cljs.core.cons(cljs.core.first(a), cljs.core.interpose(cljs.core.first(a), cljs.core.second(a)))
    }, cljs.core.seq(h)));
    return cljs.core.contains_QMARK_(g.call(null, b), c) ? cljs.core.reduce.__3(function(a, b) {
      return cljs.core.apply.__3(cljs.core.derive, a, b)
    }, cljs.core.make_hierarchy(), cljs.core.partition.__2(2, h)) : a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
cljs.core.reset_cache = function(a, b, c, d) {
  cljs.core.swap_BANG_.__2(a, function() {
    return cljs.core.deref(b)
  });
  return cljs.core.swap_BANG_.__2(c, function() {
    return cljs.core.deref(d)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(b, c, d) {
  var e = cljs.core.deref(d).call(null, b);
  if((e = cljs.core.truth_(cljs.core.truth_(e) ? e.call(null, c) : e) ? !0 : null) || (e = function() {
    for(var e = cljs.core.parents.__1(c);;) {
      if(0 < cljs.core.count(e)) {
        cljs.core.truth_(prefers_STAR_.call(null, b, cljs.core.first(e), d)), e = cljs.core.rest(e)
      }else {
        return null
      }
    }
  }())) {
    return e
  }
  return(e = function() {
    for(var e = cljs.core.parents.__1(b);;) {
      if(0 < cljs.core.count(e)) {
        prefers_STAR_.call(null, cljs.core.first(e), c, d), e = cljs.core.rest(e)
      }else {
        return null
      }
    }
  }()) ? e : !1
};
cljs.core.dominates = function(a, b, c) {
  return(c = cljs.core.prefers_STAR_(a, b, c)) ? c : cljs.core.isa_QMARK_.__2(a, b)
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(b, c, d, e, f, g, h) {
  var i = cljs.core.reduce.__3(function(d, e) {
    var g = cljs.core.nth.__3(e, 0, null);
    cljs.core.nth.__3(e, 1, null);
    if(cljs.core.isa_QMARK_.__2(c, g)) {
      var h = cljs.core.truth_(function() {
        var b = null === d;
        return b ? b : cljs.core.dominates(g, cljs.core.first(d), f)
      }()) ? e : d;
      if(!cljs.core.truth_(cljs.core.dominates(cljs.core.first(h), g, f))) {
        throw Error(cljs.core.str("Multiple methods in multimethod '", b, "' match dispatch value: ", c, " -> ", g, " and ", cljs.core.first(h), ", and neither is preferred"));
      }
      return h
    }
    return d
  }, null, cljs.core.deref(e));
  if(cljs.core.truth_(i)) {
    if(cljs.core._EQ_.__2(cljs.core.deref(h), cljs.core.deref(d))) {
      return cljs.core.swap_BANG_.__4(g, cljs.core.assoc, c, cljs.core.second(i)), cljs.core.second(i)
    }
    cljs.core.reset_cache(g, e, h, d);
    return find_and_cache_best_method.call(null, b, c, d, e, f, g, h)
  }
  return null
};
cljs.core.IMultiFn = {};
cljs.core._reset = function(a) {
  if(a ? a.cljs$core$IMultiFn$_reset__1 : a) {
    a = a.cljs$core$IMultiFn$_reset__1(a)
  }else {
    var b;
    b = cljs.core._reset[goog.typeOf.call(null, a)];
    if(!b && (b = cljs.core._reset._, !b)) {
      throw cljs.core.missing_protocol("IMultiFn.-reset", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._add_method = function(a, b, c) {
  if(a ? a.cljs$core$IMultiFn$_add_method__3 : a) {
    a = a.cljs$core$IMultiFn$_add_method__3(a, b, c)
  }else {
    var d;
    d = cljs.core._add_method[goog.typeOf.call(null, a)];
    if(!d && (d = cljs.core._add_method._, !d)) {
      throw cljs.core.missing_protocol("IMultiFn.-add-method", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._remove_method = function(a, b) {
  var c;
  if(a ? a.cljs$core$IMultiFn$_remove_method__2 : a) {
    c = a.cljs$core$IMultiFn$_remove_method__2(a, b)
  }else {
    c = cljs.core._remove_method[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._remove_method._, !c)) {
      throw cljs.core.missing_protocol("IMultiFn.-remove-method", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._prefer_method = function(a, b, c) {
  if(a ? a.cljs$core$IMultiFn$_prefer_method__3 : a) {
    a = a.cljs$core$IMultiFn$_prefer_method__3(a, b, c)
  }else {
    var d;
    d = cljs.core._prefer_method[goog.typeOf.call(null, a)];
    if(!d && (d = cljs.core._prefer_method._, !d)) {
      throw cljs.core.missing_protocol("IMultiFn.-prefer-method", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._get_method = function(a, b) {
  var c;
  if(a ? a.cljs$core$IMultiFn$_get_method__2 : a) {
    c = a.cljs$core$IMultiFn$_get_method__2(a, b)
  }else {
    c = cljs.core._get_method[goog.typeOf.call(null, a)];
    if(!c && (c = cljs.core._get_method._, !c)) {
      throw cljs.core.missing_protocol("IMultiFn.-get-method", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._methods = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_methods__1 : a)) {
    a = a.cljs$core$IMultiFn$_methods__1(a)
  }else {
    var b;
    b = cljs.core._methods[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._methods._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("IMultiFn.-methods", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._prefers = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_prefers__1 : a)) {
    a = a.cljs$core$IMultiFn$_prefers__1(a)
  }else {
    var b;
    b = cljs.core._prefers[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._prefers._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol("IMultiFn.-prefers", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._dispatch = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_dispatch__2 : a)) {
    c = a.cljs$core$IMultiFn$_dispatch__2(a, b)
  }else {
    c = cljs.core._dispatch[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._dispatch._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol("IMultiFn.-dispatch", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.do_dispatch = function(a, b, c) {
  b = cljs.core.apply.__2(b, c);
  a = cljs.core._get_method(a, b);
  if(!cljs.core.truth_(a)) {
    throw Error(cljs.core.str("No method in multimethod '", cljs.core.name, "' for dispatch value: ", b));
  }
  return cljs.core.apply.__2(a, c)
};
cljs.core.MultiFn = function(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.dispatch_fn = b;
  this.default_dispatch_val = c;
  this.hierarchy = d;
  this.method_table = e;
  this.prefer_table = f;
  this.method_cache = g;
  this.cached_hierarchy = h
};
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list("cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = !0;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash__1 = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = !0;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset__1 = function(a) {
  cljs.core.swap_BANG_.__2(this.method_table, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this.method_cache, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this.prefer_table, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this.cached_hierarchy, function() {
    return null
  });
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method__3 = function(a, b, c) {
  cljs.core.swap_BANG_.__4(this.method_table, cljs.core.assoc, b, c);
  cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method__2 = function(a, b) {
  cljs.core.swap_BANG_.__3(this.method_table, cljs.core.dissoc, b);
  cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method__2 = function(a, b) {
  cljs.core._EQ_.__2(cljs.core.deref(this.cached_hierarchy), cljs.core.deref(this.hierarchy)) || cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  var c = cljs.core.deref(this.method_cache).call(null, b);
  return c ? c : (c = cljs.core.find_and_cache_best_method(this.name, b, this.hierarchy, this.method_table, this.prefer_table, this.method_cache, this.cached_hierarchy)) ? c : cljs.core.deref(this.method_table).call(null, this.default_dispatch_val)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method__3 = function(a, b, c) {
  if(cljs.core.prefers_STAR_(b, c, this.prefer_table)) {
    throw Error(cljs.core.str("Preference conflict in multimethod '", this.name, "': ", c, " is already preferred to ", b));
  }
  cljs.core.swap_BANG_.__2(this.prefer_table, function(a) {
    return cljs.core.assoc.__3(a, b, cljs.core.conj.__2(cljs.core.get.__3(a, b, cljs.core.set([])), c))
  });
  return cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods__1 = function() {
  return cljs.core.deref(this.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers__1 = function() {
  return cljs.core.deref(this.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch__2 = function(a, b) {
  return cljs.core.do_dispatch(a, this.dispatch_fn, b)
};
cljs.core.MultiFn.prototype.call = function() {
  var a = function(a, c) {
    var d = null;
    goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return cljs.core._dispatch(this, d)
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = function(a) {
    cljs.core.first(a);
    a = cljs.core.rest(a);
    return cljs.core._dispatch(this, a)
  };
  return a
}();
cljs.core.MultiFn.prototype.apply = function(a, b) {
  return cljs.core._dispatch(this, b)
};
cljs.core.remove_all_methods = function(a) {
  return cljs.core._reset(a)
};
cljs.core.remove_method = function(a, b) {
  return cljs.core._remove_method(a, b)
};
cljs.core.prefer_method = function(a, b, c) {
  return cljs.core._prefer_method(a, b, c)
};
cljs.core.methods$ = function(a) {
  return cljs.core._methods(a)
};
cljs.core.get_method = function(a, b) {
  return cljs.core._get_method(a, b)
};
cljs.core.prefers = function(a) {
  return cljs.core._prefers(a)
};
goog.dom = {};
goog.dom.classes = {};
goog.dom.classes.set = function(a, b) {
  a.className = b
};
goog.dom.classes.get = function(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
};
goog.dom.classes.add = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.add_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.remove = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.remove_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.add_ = function(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    goog.array.contains(a, b[d]) || (a.push(b[d]), c++)
  }
  return c == b.length
};
goog.dom.classes.remove_ = function(a, b) {
  for(var c = 0, d = 0;d < a.length;d++) {
    goog.array.contains(b, a[d]) && (goog.array.splice(a, d--, 1), c++)
  }
  return c == b.length
};
goog.dom.classes.swap = function(a, b, c) {
  for(var d = goog.dom.classes.get(a), e = !1, f = 0;f < d.length;f++) {
    d[f] == b && (goog.array.splice(d, f--, 1), e = !0)
  }
  if(e) {
    d.push(c), a.className = d.join(" ")
  }
  return e
};
goog.dom.classes.addRemove = function(a, b, c) {
  var d = goog.dom.classes.get(a);
  goog.isString(b) ? goog.array.remove(d, b) : goog.isArray(b) && goog.dom.classes.remove_(d, b);
  goog.isString(c) && !goog.array.contains(d, c) ? d.push(c) : goog.isArray(c) && goog.dom.classes.add_(d, c);
  a.className = d.join(" ")
};
goog.dom.classes.has = function(a, b) {
  return goog.array.contains(goog.dom.classes.get(a), b)
};
goog.dom.classes.enable = function(a, b, c) {
  c ? goog.dom.classes.add(a, b) : goog.dom.classes.remove(a, b)
};
goog.dom.classes.toggle = function(a, b) {
  var c = !goog.dom.classes.has(a, b);
  goog.dom.classes.enable(a, b, c);
  return c
};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global.navigator ? goog.global.navigator.userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global.navigator
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = !1;
  goog.userAgent.detectedIe_ = !1;
  goog.userAgent.detectedWebkit_ = !1;
  goog.userAgent.detectedMobile_ = !1;
  goog.userAgent.detectedGecko_ = !1;
  var a;
  if(!goog.userAgent.BROWSER_KNOWN_ && (a = goog.userAgent.getUserAgentString())) {
    var b = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = 0 == a.indexOf("Opera");
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("MSIE");
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("WebKit");
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && -1 != a.indexOf("Mobile");
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && "Gecko" == b.product
  }
};
goog.userAgent.BROWSER_KNOWN_ || goog.userAgent.init_();
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var a = goog.userAgent.getNavigator();
  return a && a.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator().appVersion || "", "X11")
};
goog.userAgent.PLATFORM_KNOWN_ || goog.userAgent.initPlatform_();
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var a = "", b;
  goog.userAgent.OPERA && goog.global.opera ? (a = goog.global.opera.version, a = "function" == typeof a ? a() : a) : (goog.userAgent.GECKO ? b = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? b = /MSIE\s+([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (b = /WebKit\/(\S+)/), b && (a = (a = b.exec(goog.userAgent.getUserAgentString())) ? a[1] : ""));
  return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b > parseFloat(a)) ? "" + b : a
};
goog.userAgent.getDocumentMode_ = function() {
  var a = goog.global.document;
  return a ? a.documentMode : void 0
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(a, b) {
  return goog.string.compareVersions(a, b)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(a) {
  return goog.userAgent.isVersionCache_[a] || (goog.userAgent.isVersionCache_[a] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a))
};
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isVersion("9"), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isVersion("9") || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.math = {};
goog.math.Coordinate = function(a, b) {
  this.x = goog.isDef(a) ? a : 0;
  this.y = goog.isDef(b) ? b : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
if(goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return"(" + this.x + ", " + this.y + ")"
  }
}
goog.math.Coordinate.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return Math.sqrt(c * c + d * d)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return c * c + d * d
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.math.Size = function(a, b) {
  this.width = a;
  this.height = b
};
goog.math.Size.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
if(goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return"(" + this.width + " x " + this.height + ")"
  }
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return 2 * (this.width + this.height)
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(a) {
  return this.width <= a.width && this.height <= a.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
goog.math.Size.prototype.scaleToFit = function(a) {
  return this.scale(this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height)
};
goog.dom.ASSUME_QUIRKS_MODE = !1;
goog.dom.ASSUME_STANDARDS_MODE = !1;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(a) {
  return a ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(a) {
  return goog.isString(a) ? document.getElementById(a) : a
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(document, a, b, c)
};
goog.dom.getElementsByClass = function(a, b) {
  var c = b || document;
  return goog.dom.canUseQuerySelector_(c) ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : goog.dom.getElementsByTagNameAndClass_(document, "*", a, b)
};
goog.dom.getElementByClass = function(a, b) {
  var c = b || document, d = null;
  return(d = goog.dom.canUseQuerySelector_(c) ? c.querySelector("." + a) : goog.dom.getElementsByClass(a, b)[0]) || null
};
goog.dom.canUseQuerySelector_ = function(a) {
  return a.querySelectorAll && a.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(a) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, e = 0, f = 0, g;g = a[f];f++) {
        b == g.nodeName && (d[e++] = g)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(f = e = 0;g = a[f];f++) {
      b = g.className, "function" == typeof b.split && goog.array.contains(b.split(/\s+/), c) && (d[e++] = g)
    }
    d.length = e;
    return d
  }
  return a
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(a, b) {
  goog.object.forEach(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[d], b) : a[d] = b
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
goog.dom.getViewportSize = function(a) {
  return goog.dom.getViewportSize_(a || window)
};
goog.dom.getViewportSize_ = function(a) {
  var b = a.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new goog.math.Size(a.innerWidth, b)
  }
  a = goog.dom.isCss1CompatMode_(b) ? b.documentElement : b.body;
  return new goog.math.Size(a.clientWidth, a.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(a) {
  var b = a.document, c = 0;
  if(b) {
    var a = goog.dom.getViewportSize_(a).height, c = b.body, d = b.documentElement;
    if(goog.dom.isCss1CompatMode_(b) && d.scrollHeight) {
      c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight
    }else {
      var b = d.scrollHeight, e = d.offsetHeight;
      if(d.clientHeight != e) {
        b = c.scrollHeight, e = c.offsetHeight
      }
      c = b > a ? b > e ? b : e : b < e ? b : e
    }
  }
  return c
};
goog.dom.getPageScroll = function(a) {
  return goog.dom.getDomHelper((a || goog.global || window).document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(a) {
  var b = goog.dom.getDocumentScrollElement_(a), a = goog.dom.getWindow_(a);
  return new goog.math.Coordinate(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(a) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(a) ? a.documentElement : a.body
};
goog.dom.getWindow = function(a) {
  return a ? goog.dom.getWindow_(a) : window
};
goog.dom.getWindow_ = function(a) {
  return a.parentWindow || a.defaultView
};
goog.dom.createDom = function(a, b, c) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(a, b) {
  var c = b[0], d = b[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', goog.string.htmlEscape(d.name), '"');
    if(d.type) {
      c.push(' type="', goog.string.htmlEscape(d.type), '"');
      var e = {};
      goog.object.extend(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    goog.isString(d) ? c.className = d : goog.isArray(d) ? goog.dom.classes.add.apply(null, [c].concat(d)) : goog.dom.setProperties(c, d)
  }
  2 < b.length && goog.dom.append_(a, c, b, 2);
  return c
};
goog.dom.append_ = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild(goog.isString(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    goog.isArrayLike(f) && !goog.dom.isNodeLike(f) ? goog.array.forEach(goog.dom.isNodeList(f) ? goog.array.clone(f) : f, e) : e(f)
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(a) {
  return document.createElement(a)
};
goog.dom.createTextNode = function(a) {
  return document.createTextNode(a)
};
goog.dom.createTable = function(a, b, c) {
  return goog.dom.createTable_(document, a, b, !!c)
};
goog.dom.createTable_ = function(a, b, c, d) {
  for(var e = ["<tr>"], f = 0;f < c;f++) {
    e.push(d ? "<td>&nbsp;</td>" : "<td></td>")
  }
  e.push("</tr>");
  e = e.join("");
  c = ["<table>"];
  for(f = 0;f < b;f++) {
    c.push(e)
  }
  c.push("</table>");
  a = a.createElement(goog.dom.TagName.DIV);
  a.innerHTML = c.join("");
  return a.removeChild(a.firstChild)
};
goog.dom.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(document, a)
};
goog.dom.htmlToDocumentFragment_ = function(a, b) {
  var c = a.createElement("div");
  goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(var d = a.createDocumentFragment();c.firstChild;) {
    d.appendChild(c.firstChild)
  }
  return d
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(a) {
  return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode
};
goog.dom.canHaveChildren = function(a) {
  if(a.nodeType != goog.dom.NodeType.ELEMENT) {
    return!1
  }
  switch(a.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return!1
  }
  return!0
};
goog.dom.appendChild = function(a, b) {
  a.appendChild(b)
};
goog.dom.append = function(a, b) {
  goog.dom.append_(goog.dom.getOwnerDocument(a), a, arguments, 1)
};
goog.dom.removeChildren = function(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
};
goog.dom.insertSiblingBefore = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
};
goog.dom.insertSiblingAfter = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
goog.dom.insertChildAt = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null)
};
goog.dom.removeNode = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
goog.dom.replaceNode = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
};
goog.dom.flattenElement = function(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(a.removeNode) {
      return a.removeNode(!1)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return goog.dom.removeNode(a)
  }
};
goog.dom.getChildren = function(a) {
  return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : goog.array.filter(a.childNodes, function(a) {
    return a.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : goog.dom.getNextElementNode_(a.firstChild, !0)
};
goog.dom.getLastElementChild = function(a) {
  return void 0 != a.lastElementChild ? a.lastElementChild : goog.dom.getNextElementNode_(a.lastChild, !1)
};
goog.dom.getNextElementSibling = function(a) {
  return void 0 != a.nextElementSibling ? a.nextElementSibling : goog.dom.getNextElementNode_(a.nextSibling, !0)
};
goog.dom.getPreviousElementSibling = function(a) {
  return void 0 != a.previousElementSibling ? a.previousElementSibling : goog.dom.getNextElementNode_(a.previousSibling, !1)
};
goog.dom.getNextElementNode_ = function(a, b) {
  for(;a && a.nodeType != goog.dom.NodeType.ELEMENT;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
};
goog.dom.getNextNode = function(a) {
  if(!a) {
    return null
  }
  if(a.firstChild) {
    return a.firstChild
  }
  for(;a && !a.nextSibling;) {
    a = a.parentNode
  }
  return a ? a.nextSibling : null
};
goog.dom.getPreviousNode = function(a) {
  if(!a) {
    return null
  }
  if(!a.previousSibling) {
    return a.parentNode
  }
  for(a = a.previousSibling;a && a.lastChild;) {
    a = a.lastChild
  }
  return a
};
goog.dom.isNodeLike = function(a) {
  return goog.isObject(a) && 0 < a.nodeType
};
goog.dom.isWindow = function(a) {
  return goog.isObject(a) && a.window == a
};
goog.dom.contains = function(a, b) {
  if(a.contains && b.nodeType == goog.dom.NodeType.ELEMENT) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
goog.dom.compareNodeOrder = function(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = a.nodeType == goog.dom.NodeType.ELEMENT, d = b.nodeType == goog.dom.NodeType.ELEMENT;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? goog.dom.compareSiblingOrder_(a, b) : !c && goog.dom.contains(e, b) ? -1 * goog.dom.compareParentsDescendantNodeIe_(a, b) : !d && goog.dom.contains(f, a) ? goog.dom.compareParentsDescendantNodeIe_(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
  }
  d = goog.dom.getOwnerDocument(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(goog.global.Range.START_TO_END, d)
};
goog.dom.compareParentsDescendantNodeIe_ = function(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return goog.dom.compareSiblingOrder_(d, a)
};
goog.dom.compareSiblingOrder_ = function(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return null
  }
  var d = [], e = Infinity;
  for(b = 0;b < c;b++) {
    for(var f = [], g = arguments[b];g;) {
      f.unshift(g), g = g.parentNode
    }
    d.push(f);
    e = Math.min(e, f.length)
  }
  f = null;
  for(b = 0;b < e;b++) {
    for(var g = d[0][b], h = 1;h < c;h++) {
      if(g != d[h][b]) {
        return f
      }
    }
    f = g
  }
  return f
};
goog.dom.getOwnerDocument = function(a) {
  return a.nodeType == goog.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document
};
goog.dom.getFrameContentDocument = function(a) {
  return goog.userAgent.WEBKIT ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
};
goog.dom.getFrameContentWindow = function(a) {
  return a.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(a))
};
goog.dom.setTextContent = function(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      goog.dom.removeChildren(a);
      var c = goog.dom.getOwnerDocument(a);
      a.appendChild(c.createTextNode(b))
    }
  }
};
goog.dom.getOuterHtml = function(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = goog.dom.getOwnerDocument(a).createElement("div");
  b.appendChild(a.cloneNode(!0));
  return b.innerHTML
};
goog.dom.findNode = function(a, b) {
  var c = [];
  return goog.dom.findNodes_(a, b, c, !0) ? c[0] : void 0
};
goog.dom.findNodes = function(a, b) {
  var c = [];
  goog.dom.findNodes_(a, b, c, !1);
  return c
};
goog.dom.findNodes_ = function(a, b, c, d) {
  if(null != a) {
    for(var e = 0, f;f = a.childNodes[e];e++) {
      if(b(f) && (c.push(f), d) || goog.dom.findNodes_(f, b, c, d)) {
        return!0
      }
    }
  }
  return!1
};
goog.dom.TAGS_TO_IGNORE_ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
goog.dom.PREDEFINED_TAG_VALUES_ = {IMG:" ", BR:"\n"};
goog.dom.isFocusableTabIndex = function(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, goog.isNumber(a) && 0 <= a) : !1
};
goog.dom.setFocusableTabIndex = function(a, b) {
  b ? a.tabIndex = 0 : a.removeAttribute("tabIndex")
};
goog.dom.getTextContent = function(a) {
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in a) {
    a = goog.string.canonicalizeNewlines(a.innerText)
  }else {
    var b = [];
    goog.dom.getTextContent_(a, b, !0);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  goog.userAgent.IE || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
};
goog.dom.getRawTextContent = function(a) {
  var b = [];
  goog.dom.getTextContent_(a, b, !1);
  return b.join("")
};
goog.dom.getTextContent_ = function(a, b, c) {
  if(!(a.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
    if(a.nodeType == goog.dom.NodeType.TEXT) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          goog.dom.getTextContent_(a, b, c), a = a.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(a) {
  return goog.dom.getTextContent(a).length
};
goog.dom.getNodeTextOffset = function(a, b) {
  for(var c = b || goog.dom.getOwnerDocument(a).body, d = [];a && a != c;) {
    for(var e = a;e = e.previousSibling;) {
      d.unshift(goog.dom.getTextContent(e))
    }
    a = a.parentNode
  }
  return goog.string.trimLeft(d.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(a, b, c) {
  for(var a = [a], d = 0, e;0 < a.length && d < b;) {
    if(e = a.pop(), !(e.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
      if(e.nodeType == goog.dom.NodeType.TEXT) {
        var f = e.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "), d = d + f.length
      }else {
        if(e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          d += goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName].length
        }else {
          for(f = e.childNodes.length - 1;0 <= f;f--) {
            a.push(e.childNodes[f])
          }
        }
      }
    }
  }
  if(goog.isObject(c)) {
    c.remainder = e ? e.nodeValue.length + b - d - 1 : 0, c.node = e
  }
  return e
};
goog.dom.isNodeList = function(a) {
  if(a && "number" == typeof a.length) {
    if(goog.isObject(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(goog.isFunction(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
};
goog.dom.getAncestorByTagNameAndClass = function(a, b, c) {
  var d = b ? b.toUpperCase() : null;
  return goog.dom.getAncestor(a, function(a) {
    return(!d || a.nodeName == d) && (!c || goog.dom.classes.has(a, c))
  }, !0)
};
goog.dom.getAncestorByClass = function(a, b) {
  return goog.dom.getAncestorByTagNameAndClass(a, null, b)
};
goog.dom.getAncestor = function(a, b, c, d) {
  if(!c) {
    a = a.parentNode
  }
  for(var c = null == d, e = 0;a && (c || e <= d);) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    e++
  }
  return null
};
goog.dom.DomHelper = function(a) {
  this.document_ = a || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(a) {
  this.document_ = a
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(a) {
  return goog.isString(a) ? this.document_.getElementById(a) : a
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, a, b, c)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(a, b) {
  return goog.dom.getElementsByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.getElementByClass = function(a, b) {
  return goog.dom.getElementByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(a) {
  return goog.dom.getViewportSize(a || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.DomHelper.prototype.createDom = function(a, b, c) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(a) {
  return this.document_.createElement(a)
};
goog.dom.DomHelper.prototype.createTextNode = function(a) {
  return this.document_.createTextNode(a)
};
goog.dom.DomHelper.prototype.createTable = function(a, b, c) {
  return goog.dom.createTable_(this.document_, a, b, !!c)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(this.document_, a)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
var clojure = {string:{}};
clojure.string.seq_reverse = function(a) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, a)
};
clojure.string.reverse = function(a) {
  return a.split("").reverse().join("")
};
clojure.string.replace = function(a, b, c) {
  if(cljs.core.string_QMARK_(b)) {
    return a.replace(RegExp(goog.string.regExpEscape.call(null, b), "g"), c)
  }
  if(cljs.core.truth_(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  throw cljs.core.str("Invalid match arg: ", b);
};
clojure.string.replace_first = function(a, b, c) {
  return a.replace(b, c)
};
clojure.string.join = function() {
  var a = null, b = function(a) {
    return cljs.core.apply.__2(cljs.core.str, a)
  }, c = function(a, b) {
    return cljs.core.apply.__2(cljs.core.str, cljs.core.interpose(a, b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
clojure.string.upper_case = function(a) {
  return a.toUpperCase()
};
clojure.string.lower_case = function(a) {
  return a.toLowerCase()
};
clojure.string.capitalize = function(a) {
  return 2 > cljs.core.count(a) ? clojure.string.upper_case(a) : cljs.core.str(clojure.string.upper_case(cljs.core.subs.__3(a, 0, 1)), clojure.string.lower_case(cljs.core.subs.__2(a, 1)))
};
clojure.string.split = function() {
  var a = null, b = function(a, b) {
    return cljs.core.vec(cljs.core.str.__1(a).split(b))
  }, c = function(a, b, c) {
    if(1 > c) {
      return cljs.core.vec(cljs.core.str.__1(a).split(b))
    }
    for(var g = cljs.core.PersistentVector.fromArray([]);;) {
      if(cljs.core._EQ_.__2(c, 1)) {
        return cljs.core.conj.__2(g, a)
      }
      var h = cljs.core.re_find(b, a);
      if(cljs.core.truth_(h)) {
        var i = h, h = a.indexOf(i), i = a.substring(h + cljs.core.count(i)), c = c - 1, g = cljs.core.conj.__2(g, a.substring(0, h)), a = i
      }else {
        return cljs.core.conj.__2(g, a)
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
clojure.string.split_lines = function(a) {
  return clojure.string.split.__2(a, /\n|\r\n/)
};
clojure.string.trim = function(a) {
  return goog.string.trim.call(null, a)
};
clojure.string.triml = function(a) {
  return goog.string.trimLeft.call(null, a)
};
clojure.string.trimr = function(a) {
  return goog.string.trimRight.call(null, a)
};
clojure.string.trim_newline = function(a) {
  for(var b = a.length;;) {
    if(0 === b) {
      return""
    }
    var c = cljs.core.get.__2(a, b - 1), d = cljs.core._EQ_.__2(c, "\n");
    if(d ? d : cljs.core._EQ_.__2(c, "\r")) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
};
clojure.string.blank_QMARK_ = function(a) {
  var b = cljs.core.str.__1(a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not(b);
    return a ? a : (a = cljs.core._EQ_.__2("", b)) ? a : cljs.core.re_matches(/\s+/, b)
  }()) ? !0 : !1
};
clojure.string.escape = function(a, b) {
  for(var c = new goog.string.StringBuffer, d = a.length, e = 0;;) {
    if(cljs.core._EQ_.__2(d, e)) {
      return c.toString()
    }
    var f = a.charAt(e), g = cljs.core.get.__2(b, f);
    cljs.core.truth_(g) ? c.append(cljs.core.str.__1(g)) : c.append(f);
    e += 1
  }
};
goog.dom.xml = {};
goog.dom.xml.MAX_XML_SIZE_KB = 2048;
goog.dom.xml.MAX_ELEMENT_DEPTH = 256;
goog.dom.xml.createDocument = function(a, b) {
  if(b && !a) {
    throw Error("Can't create document with namespace and no root tag");
  }
  if(document.implementation && document.implementation.createDocument) {
    return document.implementation.createDocument(b || "", a || "", null)
  }
  if("undefined" != typeof ActiveXObject) {
    var c = goog.dom.xml.createMsXmlDocument_();
    if(c) {
      return a && c.appendChild(c.createNode(goog.dom.NodeType.ELEMENT, a, b || "")), c
    }
  }
  throw Error("Your browser does not support creating new documents");
};
goog.dom.xml.loadXml = function(a) {
  if("undefined" != typeof DOMParser) {
    return(new DOMParser).parseFromString(a, "application/xml")
  }
  if("undefined" != typeof ActiveXObject) {
    var b = goog.dom.xml.createMsXmlDocument_();
    b.loadXML(a);
    return b
  }
  throw Error("Your browser does not support loading xml documents");
};
goog.dom.xml.serialize = function(a) {
  if("undefined" != typeof XMLSerializer) {
    return(new XMLSerializer).serializeToString(a)
  }
  if(a = a.xml) {
    return a
  }
  throw Error("Your browser does not support serializing XML documents");
};
goog.dom.xml.selectSingleNode = function(a, b) {
  if("undefined" != typeof a.selectSingleNode) {
    var c = goog.dom.getOwnerDocument(a);
    "undefined" != typeof c.setProperty && c.setProperty("SelectionLanguage", "XPath");
    return a.selectSingleNode(b)
  }
  if(document.implementation.hasFeature("XPath", "3.0")) {
    var c = goog.dom.getOwnerDocument(a), d = c.createNSResolver(c.documentElement);
    return c.evaluate(b, a, d, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  }
  return null
};
goog.dom.xml.selectNodes = function(a, b) {
  if("undefined" != typeof a.selectNodes) {
    var c = goog.dom.getOwnerDocument(a);
    "undefined" != typeof c.setProperty && c.setProperty("SelectionLanguage", "XPath");
    return a.selectNodes(b)
  }
  if(document.implementation.hasFeature("XPath", "3.0")) {
    for(var c = goog.dom.getOwnerDocument(a), d = c.createNSResolver(c.documentElement), c = c.evaluate(b, a, d, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), d = [], e = c.snapshotLength, f = 0;f < e;f++) {
      d.push(c.snapshotItem(f))
    }
    return d
  }
  return[]
};
goog.dom.xml.createMsXmlDocument_ = function() {
  var a = new ActiveXObject("MSXML2.DOMDocument");
  if(a) {
    a.resolveExternals = !1;
    a.validateOnParse = !1;
    try {
      a.setProperty("ProhibitDTD", !0), a.setProperty("MaxXMLSize", goog.dom.xml.MAX_XML_SIZE_KB), a.setProperty("MaxElementDepth", goog.dom.xml.MAX_ELEMENT_DEPTH)
    }catch(b) {
    }
  }
  return a
};
goog.math.Box = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
};
goog.math.Box.boundingBox = function(a) {
  for(var b = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), c = 1;c < arguments.length;c++) {
    var d = arguments[c];
    b.top = Math.min(b.top, d.y);
    b.right = Math.max(b.right, d.x);
    b.bottom = Math.max(b.bottom, d.y);
    b.left = Math.min(b.left, d.x)
  }
  return b
};
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left)
};
if(goog.DEBUG) {
  goog.math.Box.prototype.toString = function() {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  }
}
goog.math.Box.prototype.contains = function(a) {
  return goog.math.Box.contains(this, a)
};
goog.math.Box.prototype.expand = function(a, b, c, d) {
  goog.isObject(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
goog.math.Box.prototype.expandToInclude = function(a) {
  this.left = Math.min(this.left, a.left);
  this.top = Math.min(this.top, a.top);
  this.right = Math.max(this.right, a.right);
  this.bottom = Math.max(this.bottom, a.bottom)
};
goog.math.Box.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
};
goog.math.Box.contains = function(a, b) {
  return!a || !b ? !1 : b instanceof goog.math.Box ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom
};
goog.math.Box.distance = function(a, b) {
  return b.x >= a.left && b.x <= a.right ? b.y >= a.top && b.y <= a.bottom ? 0 : b.y < a.top ? a.top - b.y : b.y - a.bottom : b.y >= a.top && b.y <= a.bottom ? b.x < a.left ? a.left - b.x : b.x - a.right : goog.math.Coordinate.distance(b, new goog.math.Coordinate(b.x < a.left ? a.left : a.right, b.y < a.top ? a.top : a.bottom))
};
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
};
goog.math.Box.intersectsWithPadding = function(a, b, c) {
  return a.left <= b.right + c && b.left <= a.right + c && a.top <= b.bottom + c && b.top <= a.bottom + c
};
goog.math.Rect = function(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
};
goog.math.Rect.prototype.clone = function() {
  return new goog.math.Rect(this.left, this.top, this.width, this.height)
};
goog.math.Rect.prototype.toBox = function() {
  return new goog.math.Box(this.top, this.left + this.width, this.top + this.height, this.left)
};
goog.math.Rect.createFromBox = function(a) {
  return new goog.math.Rect(a.left, a.top, a.right - a.left, a.bottom - a.top)
};
if(goog.DEBUG) {
  goog.math.Rect.prototype.toString = function() {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  }
}
goog.math.Rect.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
};
goog.math.Rect.prototype.intersection = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if(b <= c) {
    var d = Math.max(this.top, a.top), a = Math.min(this.top + this.height, a.top + a.height);
    if(d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
    }
  }
  return!1
};
goog.math.Rect.intersection = function(a, b) {
  var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
  if(c <= d) {
    var e = Math.max(a.top, b.top), f = Math.min(a.top + a.height, b.top + b.height);
    if(e <= f) {
      return new goog.math.Rect(c, e, d - c, f - e)
    }
  }
  return null
};
goog.math.Rect.intersects = function(a, b) {
  return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
};
goog.math.Rect.prototype.intersects = function(a) {
  return goog.math.Rect.intersects(this, a)
};
goog.math.Rect.difference = function(a, b) {
  var c = goog.math.Rect.intersection(a, b);
  if(!c || !c.height || !c.width) {
    return[a.clone()]
  }
  var c = [], d = a.top, e = a.height, f = a.left + a.width, g = a.top + a.height, h = b.left + b.width, i = b.top + b.height;
  if(b.top > a.top) {
    c.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top
  }
  i < g && (c.push(new goog.math.Rect(a.left, i, a.width, g - i)), e = i - d);
  b.left > a.left && c.push(new goog.math.Rect(a.left, d, b.left - a.left, e));
  h < f && c.push(new goog.math.Rect(h, d, f - h, e));
  return c
};
goog.math.Rect.prototype.difference = function(a) {
  return goog.math.Rect.difference(this, a)
};
goog.math.Rect.prototype.boundingRect = function(a) {
  var b = Math.max(this.left + this.width, a.left + a.width), c = Math.max(this.top + this.height, a.top + a.height);
  this.left = Math.min(this.left, a.left);
  this.top = Math.min(this.top, a.top);
  this.width = b - this.left;
  this.height = c - this.top
};
goog.math.Rect.boundingRect = function(a, b) {
  if(!a || !b) {
    return null
  }
  var c = a.clone();
  c.boundingRect(b);
  return c
};
goog.math.Rect.prototype.contains = function(a) {
  return a instanceof goog.math.Rect ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
goog.math.Rect.prototype.getSize = function() {
  return new goog.math.Size(this.width, this.height)
};
goog.style = {};
goog.style.setStyle = function(a, b, c) {
  goog.isString(b) ? goog.style.setStyle_(a, c, b) : goog.object.forEach(b, goog.partial(goog.style.setStyle_, a))
};
goog.style.setStyle_ = function(a, b, c) {
  a.style[goog.string.toCamelCase(c)] = b
};
goog.style.getStyle = function(a, b) {
  return a.style[goog.string.toCamelCase(b)] || ""
};
goog.style.getComputedStyle = function(a, b) {
  var c = goog.dom.getOwnerDocument(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) : ""
};
goog.style.getCascadedStyle = function(a, b) {
  return a.currentStyle ? a.currentStyle[b] : null
};
goog.style.getStyle_ = function(a, b) {
  return goog.style.getComputedStyle(a, b) || goog.style.getCascadedStyle(a, b) || a.style[b]
};
goog.style.getComputedPosition = function(a) {
  return goog.style.getStyle_(a, "position")
};
goog.style.getBackgroundColor = function(a) {
  return goog.style.getStyle_(a, "backgroundColor")
};
goog.style.getComputedOverflowX = function(a) {
  return goog.style.getStyle_(a, "overflowX")
};
goog.style.getComputedOverflowY = function(a) {
  return goog.style.getStyle_(a, "overflowY")
};
goog.style.getComputedZIndex = function(a) {
  return goog.style.getStyle_(a, "zIndex")
};
goog.style.getComputedTextAlign = function(a) {
  return goog.style.getStyle_(a, "textAlign")
};
goog.style.getComputedCursor = function(a) {
  return goog.style.getStyle_(a, "cursor")
};
goog.style.setPosition = function(a, b, c) {
  var d, e = goog.userAgent.GECKO && (goog.userAgent.MAC || goog.userAgent.X11) && goog.userAgent.isVersion("1.9");
  b instanceof goog.math.Coordinate ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = goog.style.getPixelStyleValue_(d, e);
  a.style.top = goog.style.getPixelStyleValue_(b, e)
};
goog.style.getPosition = function(a) {
  return new goog.math.Coordinate(a.offsetLeft, a.offsetTop)
};
goog.style.getClientViewportElement = function(a) {
  a = a ? a.nodeType == goog.dom.NodeType.DOCUMENT ? a : goog.dom.getOwnerDocument(a) : goog.dom.getDocument();
  return goog.userAgent.IE && !goog.userAgent.isVersion(9) && !goog.dom.getDomHelper(a).isCss1CompatMode() ? a.body : a.documentElement
};
goog.style.getBoundingClientRect_ = function(a) {
  var b = a.getBoundingClientRect();
  if(goog.userAgent.IE) {
    a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
  }
  return b
};
goog.style.getOffsetParent = function(a) {
  if(goog.userAgent.IE) {
    return a.offsetParent
  }
  for(var b = goog.dom.getOwnerDocument(a), c = goog.style.getStyle_(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = goog.style.getStyle_(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c)) {
      return a
    }
  }
  return null
};
goog.style.getVisibleRectForElement = function(a) {
  for(var b = new goog.math.Box(0, Infinity, Infinity, 0), c = goog.dom.getDomHelper(a), d = c.getDocument().body, e = c.getDocumentScrollElement(), f;a = goog.style.getOffsetParent(a);) {
    if((!goog.userAgent.IE || 0 != a.clientWidth) && (!goog.userAgent.WEBKIT || 0 != a.clientHeight || a != d) && (a.scrollWidth != a.clientWidth || a.scrollHeight != a.clientHeight) && "visible" != goog.style.getStyle_(a, "overflow")) {
      var g = goog.style.getPageOffset(a), h = goog.style.getClientLeftTop(a);
      g.x += h.x;
      g.y += h.y;
      b.top = Math.max(b.top, g.y);
      b.right = Math.min(b.right, g.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
      b.left = Math.max(b.left, g.x);
      f = f || a != e
    }
  }
  d = e.scrollLeft;
  e = e.scrollTop;
  goog.userAgent.WEBKIT ? (b.left += d, b.top += e) : (b.left = Math.max(b.left, d), b.top = Math.max(b.top, e));
  if(!f || goog.userAgent.WEBKIT) {
    b.right += d, b.bottom += e
  }
  c = c.getViewportSize();
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, e + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
};
goog.style.scrollIntoContainerView = function(a, b, c) {
  var d = goog.style.getPageOffset(a), e = goog.style.getPageOffset(b), f = goog.style.getBorderBox(b), g = d.x - e.x - f.left, d = d.y - e.y - f.top, e = b.clientWidth - a.offsetWidth, a = b.clientHeight - a.offsetHeight;
  c ? (b.scrollLeft += g - e / 2, b.scrollTop += d - a / 2) : (b.scrollLeft += Math.min(g, Math.max(g - e, 0)), b.scrollTop += Math.min(d, Math.max(d - a, 0)))
};
goog.style.getClientLeftTop = function(a) {
  if(goog.userAgent.GECKO && !goog.userAgent.isVersion("1.9")) {
    var b = parseFloat(goog.style.getComputedStyle(a, "borderLeftWidth"));
    if(goog.style.isRightToLeft(a)) {
      var c = a.offsetWidth - a.clientWidth - b - parseFloat(goog.style.getComputedStyle(a, "borderRightWidth")), b = b + c
    }
    return new goog.math.Coordinate(b, parseFloat(goog.style.getComputedStyle(a, "borderTopWidth")))
  }
  return new goog.math.Coordinate(a.clientLeft, a.clientTop)
};
goog.style.getPageOffset = function(a) {
  var b, c = goog.dom.getOwnerDocument(a), d = goog.style.getStyle_(a, "position"), e = goog.userAgent.GECKO && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new goog.math.Coordinate(0, 0), g = goog.style.getClientViewportElement(c);
  if(a == g) {
    return f
  }
  if(a.getBoundingClientRect) {
    b = goog.style.getBoundingClientRect_(a), a = goog.dom.getDomHelper(c).getDocumentScroll(), f.x = b.left + a.x, f.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        f.x += b.offsetLeft;
        f.y += b.offsetTop;
        b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
        if(goog.userAgent.WEBKIT && "fixed" == goog.style.getComputedPosition(b)) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(goog.userAgent.OPERA || goog.userAgent.WEBKIT && "absolute" == d) {
        f.y -= c.body.offsetTop
      }
      for(b = a;(b = goog.style.getOffsetParent(b)) && b != c.body && b != g;) {
        if(f.x -= b.scrollLeft, !goog.userAgent.OPERA || "TR" != b.tagName) {
          f.y -= b.scrollTop
        }
      }
    }
  }
  return f
};
goog.style.getPageOffsetLeft = function(a) {
  return goog.style.getPageOffset(a).x
};
goog.style.getPageOffsetTop = function(a) {
  return goog.style.getPageOffset(a).y
};
goog.style.getFramedPageOffset = function(a, b) {
  var c = new goog.math.Coordinate(0, 0), d = goog.dom.getWindow(goog.dom.getOwnerDocument(a)), e = a;
  do {
    var f = d == b ? goog.style.getPageOffset(e) : goog.style.getClientPosition(e);
    c.x += f.x;
    c.y += f.y
  }while(d && d != b && (e = d.frameElement) && (d = d.parent));
  return c
};
goog.style.translateRectForAnotherFrame = function(a, b, c) {
  if(b.getDocument() != c.getDocument()) {
    var d = b.getDocument().body, c = goog.style.getFramedPageOffset(d, c.getWindow()), c = goog.math.Coordinate.difference(c, goog.style.getPageOffset(d));
    goog.userAgent.IE && !b.isCss1CompatMode() && (c = goog.math.Coordinate.difference(c, b.getDocumentScroll()));
    a.left += c.x;
    a.top += c.y
  }
};
goog.style.getRelativePosition = function(a, b) {
  var c = goog.style.getClientPosition(a), d = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(c.x - d.x, c.y - d.y)
};
goog.style.getClientPosition = function(a) {
  var b = new goog.math.Coordinate;
  if(a.nodeType == goog.dom.NodeType.ELEMENT) {
    if(a.getBoundingClientRect) {
      a = goog.style.getBoundingClientRect_(a), b.x = a.left, b.y = a.top
    }else {
      var c = goog.dom.getDomHelper(a).getDocumentScroll(), a = goog.style.getPageOffset(a);
      b.x = a.x - c.x;
      b.y = a.y - c.y
    }
  }else {
    var c = goog.isFunction(a.getBrowserEvent), d = a;
    a.targetTouches ? d = a.targetTouches[0] : c && a.getBrowserEvent().targetTouches && (d = a.getBrowserEvent().targetTouches[0]);
    b.x = d.clientX;
    b.y = d.clientY
  }
  return b
};
goog.style.setPageOffset = function(a, b, c) {
  var d = goog.style.getPageOffset(a);
  if(b instanceof goog.math.Coordinate) {
    c = b.y, b = b.x
  }
  goog.style.setPosition(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
};
goog.style.setSize = function(a, b, c) {
  if(b instanceof goog.math.Size) {
    c = b.height, b = b.width
  }else {
    if(void 0 == c) {
      throw Error("missing height argument");
    }
  }
  goog.style.setWidth(a, b);
  goog.style.setHeight(a, c)
};
goog.style.getPixelStyleValue_ = function(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
};
goog.style.setHeight = function(a, b) {
  a.style.height = goog.style.getPixelStyleValue_(b, !0)
};
goog.style.setWidth = function(a, b) {
  a.style.width = goog.style.getPixelStyleValue_(b, !0)
};
goog.style.getSize = function(a) {
  if("none" != goog.style.getStyle_(a, "display")) {
    return new goog.math.Size(a.offsetWidth, a.offsetHeight)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  var f = a.offsetWidth, a = a.offsetHeight;
  b.display = c;
  b.position = e;
  b.visibility = d;
  return new goog.math.Size(f, a)
};
goog.style.getBounds = function(a) {
  var b = goog.style.getPageOffset(a), a = goog.style.getSize(a);
  return new goog.math.Rect(b.x, b.y, a.width, a.height)
};
goog.style.toCamelCase = function(a) {
  return goog.string.toCamelCase("" + a)
};
goog.style.toSelectorCase = function(a) {
  return goog.string.toSelectorCase(a)
};
goog.style.getOpacity = function(a) {
  var b = a.style, a = "";
  "opacity" in b ? a = b.opacity : "MozOpacity" in b ? a = b.MozOpacity : "filter" in b && (b = b.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = "" + b[1] / 100);
  return"" == a ? a : Number(a)
};
goog.style.setOpacity = function(a, b) {
  var c = a.style;
  if("opacity" in c) {
    c.opacity = b
  }else {
    if("MozOpacity" in c) {
      c.MozOpacity = b
    }else {
      if("filter" in c) {
        c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")"
      }
    }
  }
};
goog.style.setTransparentBackgroundImage = function(a, b) {
  var c = a.style;
  goog.userAgent.IE && !goog.userAgent.isVersion("8") ? c.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + b + '", sizingMethod="crop")' : (c.backgroundImage = "url(" + b + ")", c.backgroundPosition = "top left", c.backgroundRepeat = "no-repeat")
};
goog.style.clearTransparentBackgroundImage = function(a) {
  a = a.style;
  "filter" in a ? a.filter = "" : a.backgroundImage = "none"
};
goog.style.showElement = function(a, b) {
  a.style.display = b ? "" : "none"
};
goog.style.isElementShown = function(a) {
  return"none" != a.style.display
};
goog.style.installStyles = function(a, b) {
  var c = goog.dom.getDomHelper(b), d = null;
  if(goog.userAgent.IE) {
    d = c.getDocument().createStyleSheet(), goog.style.setStyles(d, a)
  }else {
    var e = c.getElementsByTagNameAndClass("head")[0];
    e || (d = c.getElementsByTagNameAndClass("body")[0], e = c.createDom("head"), d.parentNode.insertBefore(e, d));
    d = c.createDom("style");
    goog.style.setStyles(d, a);
    c.appendChild(e, d)
  }
  return d
};
goog.style.uninstallStyles = function(a) {
  goog.dom.removeNode(a.ownerNode || a.owningElement || a)
};
goog.style.setStyles = function(a, b) {
  goog.userAgent.IE ? a.cssText = b : a[goog.userAgent.WEBKIT ? "innerText" : "innerHTML"] = b
};
goog.style.setPreWrap = function(a) {
  a = a.style;
  goog.userAgent.IE && !goog.userAgent.isVersion("8") ? (a.whiteSpace = "pre", a.wordWrap = "break-word") : a.whiteSpace = goog.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap"
};
goog.style.setInlineBlock = function(a) {
  a = a.style;
  a.position = "relative";
  goog.userAgent.IE && !goog.userAgent.isVersion("8") ? (a.zoom = "1", a.display = "inline") : a.display = goog.userAgent.GECKO ? goog.userAgent.isVersion("1.9a") ? "inline-block" : "-moz-inline-box" : "inline-block"
};
goog.style.isRightToLeft = function(a) {
  return"rtl" == goog.style.getStyle_(a, "direction")
};
goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null;
goog.style.isUnselectable = function(a) {
  return goog.style.unselectableStyle_ ? "none" == a.style[goog.style.unselectableStyle_].toLowerCase() : goog.userAgent.IE || goog.userAgent.OPERA ? "on" == a.getAttribute("unselectable") : !1
};
goog.style.setUnselectable = function(a, b, c) {
  var c = !c ? a.getElementsByTagName("*") : null, d = goog.style.unselectableStyle_;
  if(d) {
    if(b = b ? "none" : "", a.style[d] = b, c) {
      for(var a = 0, e;e = c[a];a++) {
        e.style[d] = b
      }
    }
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;e = c[a];a++) {
          e.setAttribute("unselectable", b)
        }
      }
    }
  }
};
goog.style.getBorderBoxSize = function(a) {
  return new goog.math.Size(a.offsetWidth, a.offsetHeight)
};
goog.style.setBorderBoxSize = function(a, b) {
  var c = goog.dom.getOwnerDocument(a), d = goog.dom.getDomHelper(c).isCss1CompatMode();
  if(goog.userAgent.IE && (!d || !goog.userAgent.isVersion("8"))) {
    if(c = a.style, d) {
      var d = goog.style.getPaddingBox(a), e = goog.style.getBorderBox(a);
      c.pixelWidth = b.width - e.left - d.left - d.right - e.right;
      c.pixelHeight = b.height - e.top - d.top - d.bottom - e.bottom
    }else {
      c.pixelWidth = b.width, c.pixelHeight = b.height
    }
  }else {
    goog.style.setBoxSizingSize_(a, b, "border-box")
  }
};
goog.style.getContentBoxSize = function(a) {
  var b = goog.dom.getOwnerDocument(a), c = goog.userAgent.IE && a.currentStyle;
  if(c && goog.dom.getDomHelper(b).isCss1CompatMode() && "auto" != c.width && "auto" != c.height && !c.boxSizing) {
    return b = goog.style.getIePixelValue_(a, c.width, "width", "pixelWidth"), a = goog.style.getIePixelValue_(a, c.height, "height", "pixelHeight"), new goog.math.Size(b, a)
  }
  c = goog.style.getBorderBoxSize(a);
  b = goog.style.getPaddingBox(a);
  a = goog.style.getBorderBox(a);
  return new goog.math.Size(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
};
goog.style.setContentBoxSize = function(a, b) {
  var c = goog.dom.getOwnerDocument(a), d = goog.dom.getDomHelper(c).isCss1CompatMode();
  if(goog.userAgent.IE && (!d || !goog.userAgent.isVersion("8"))) {
    if(c = a.style, d) {
      c.pixelWidth = b.width, c.pixelHeight = b.height
    }else {
      var d = goog.style.getPaddingBox(a), e = goog.style.getBorderBox(a);
      c.pixelWidth = b.width + e.left + d.left + d.right + e.right;
      c.pixelHeight = b.height + e.top + d.top + d.bottom + e.bottom
    }
  }else {
    goog.style.setBoxSizingSize_(a, b, "content-box")
  }
};
goog.style.setBoxSizingSize_ = function(a, b, c) {
  a = a.style;
  goog.userAgent.GECKO ? a.MozBoxSizing = c : goog.userAgent.WEBKIT ? a.WebkitBoxSizing = c : a.boxSizing = c;
  a.width = b.width + "px";
  a.height = b.height + "px"
};
goog.style.getIePixelValue_ = function(a, b, c, d) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var e = a.style[c], f = a.runtimeStyle[c];
  a.runtimeStyle[c] = a.currentStyle[c];
  a.style[c] = b;
  b = a.style[d];
  a.style[c] = e;
  a.runtimeStyle[c] = f;
  return b
};
goog.style.getIePixelDistance_ = function(a, b) {
  return goog.style.getIePixelValue_(a, goog.style.getCascadedStyle(a, b), "left", "pixelLeft")
};
goog.style.getBox_ = function(a, b) {
  if(goog.userAgent.IE) {
    var c = goog.style.getIePixelDistance_(a, b + "Left"), d = goog.style.getIePixelDistance_(a, b + "Right"), e = goog.style.getIePixelDistance_(a, b + "Top"), f = goog.style.getIePixelDistance_(a, b + "Bottom");
    return new goog.math.Box(e, d, f, c)
  }
  c = goog.style.getComputedStyle(a, b + "Left");
  d = goog.style.getComputedStyle(a, b + "Right");
  e = goog.style.getComputedStyle(a, b + "Top");
  f = goog.style.getComputedStyle(a, b + "Bottom");
  return new goog.math.Box(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
};
goog.style.getPaddingBox = function(a) {
  return goog.style.getBox_(a, "padding")
};
goog.style.getMarginBox = function(a) {
  return goog.style.getBox_(a, "margin")
};
goog.style.ieBorderWidthKeywords_ = {thin:2, medium:4, thick:6};
goog.style.getIePixelBorder_ = function(a, b) {
  if("none" == goog.style.getCascadedStyle(a, b + "Style")) {
    return 0
  }
  var c = goog.style.getCascadedStyle(a, b + "Width");
  return c in goog.style.ieBorderWidthKeywords_ ? goog.style.ieBorderWidthKeywords_[c] : goog.style.getIePixelValue_(a, c, "left", "pixelLeft")
};
goog.style.getBorderBox = function(a) {
  if(goog.userAgent.IE) {
    var b = goog.style.getIePixelBorder_(a, "borderLeft"), c = goog.style.getIePixelBorder_(a, "borderRight"), d = goog.style.getIePixelBorder_(a, "borderTop"), a = goog.style.getIePixelBorder_(a, "borderBottom");
    return new goog.math.Box(d, c, a, b)
  }
  b = goog.style.getComputedStyle(a, "borderLeftWidth");
  c = goog.style.getComputedStyle(a, "borderRightWidth");
  d = goog.style.getComputedStyle(a, "borderTopWidth");
  a = goog.style.getComputedStyle(a, "borderBottomWidth");
  return new goog.math.Box(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
};
goog.style.getFontFamily = function(a) {
  var b = goog.dom.getOwnerDocument(a), c = "";
  if(b.body.createTextRange) {
    b = b.body.createTextRange();
    b.moveToElementText(a);
    try {
      c = b.queryCommandValue("FontName")
    }catch(d) {
      c = ""
    }
  }
  c || (c = goog.style.getStyle_(a, "fontFamily"));
  a = c.split(",");
  1 < a.length && (c = a[0]);
  return goog.string.stripQuotes(c, "\"'")
};
goog.style.lengthUnitRegex_ = /[^\d]+$/;
goog.style.getLengthUnits = function(a) {
  return(a = a.match(goog.style.lengthUnitRegex_)) && a[0] || null
};
goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {cm:1, "in":1, mm:1, pc:1, pt:1};
goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {em:1, ex:1};
goog.style.getFontSize = function(a) {
  var b = goog.style.getStyle_(a, "fontSize"), c = goog.style.getLengthUnits(b);
  if(b && "px" == c) {
    return parseInt(b, 10)
  }
  if(goog.userAgent.IE) {
    if(c in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(a, b, "left", "pixelLeft")
    }
    if(a.parentNode && a.parentNode.nodeType == goog.dom.NodeType.ELEMENT && c in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
      return a = a.parentNode, c = goog.style.getStyle_(a, "fontSize"), goog.style.getIePixelValue_(a, b == c ? "1em" : b, "left", "pixelLeft")
    }
  }
  c = goog.dom.createDom("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(a, c);
  b = c.offsetHeight;
  goog.dom.removeNode(c);
  return b
};
goog.style.parseStyleAttribute = function(a) {
  var b = {};
  goog.array.forEach(a.split(/\s*;\s*/), function(a) {
    a = a.split(/\s*:\s*/);
    2 == a.length && (b[goog.string.toCamelCase(a[0].toLowerCase())] = a[1])
  });
  return b
};
goog.style.toStyleAttribute = function(a) {
  var b = [];
  goog.object.forEach(a, function(a, d) {
    b.push(goog.string.toSelectorCase(d), ":", a, ";")
  });
  return b.join("")
};
goog.style.setFloat = function(a, b) {
  a.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = b
};
goog.style.getFloat = function(a) {
  return a.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
};
goog.style.getScrollbarWidth = function() {
  var a = goog.dom.createElement("div");
  a.style.cssText = "visibility:hidden;overflow:scroll;position:absolute;top:0;width:100px;height:100px";
  goog.dom.appendChild(goog.dom.getDocument().body, a);
  var b = a.offsetWidth - a.clientWidth;
  goog.dom.removeNode(a);
  return b
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration");
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function() {
  return this
};
goog.iter.toIterator = function(a) {
  if(a instanceof goog.iter.Iterator) {
    return a
  }
  if("function" == typeof a.__iterator__) {
    return a.__iterator__(!1)
  }
  if(goog.isArrayLike(a)) {
    var b = 0, c = new goog.iter.Iterator;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw goog.iter.StopIteration;
        }
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(a, b, c) {
  if(goog.isArrayLike(a)) {
    try {
      goog.array.forEach(a, b, c)
    }catch(d) {
      if(d !== goog.iter.StopIteration) {
        throw d;
      }
    }
  }else {
    a = goog.iter.toIterator(a);
    try {
      for(;;) {
        b.call(c, a.next(), void 0, a)
      }
    }catch(e) {
      if(e !== goog.iter.StopIteration) {
        throw e;
      }
    }
  }
};
goog.iter.filter = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(b.call(c, d, void 0, a)) {
        return d
      }
    }
  };
  return d
};
goog.iter.range = function(a, b, c) {
  var d = 0, e = a, f = c || 1;
  1 < arguments.length && (d = a, e = b);
  if(0 == f) {
    throw Error("Range step argument must not be zero");
  }
  var g = new goog.iter.Iterator;
  g.next = function() {
    if(0 < f && d >= e || 0 > f && d <= e) {
      throw goog.iter.StopIteration;
    }
    var a = d;
    d += f;
    return a
  };
  return g
};
goog.iter.join = function(a, b) {
  return goog.iter.toArray(a).join(b)
};
goog.iter.map = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      return b.call(c, d, void 0, a)
    }
  };
  return d
};
goog.iter.reduce = function(a, b, c, d) {
  var e = c;
  goog.iter.forEach(a, function(a) {
    e = b.call(d, e, a)
  });
  return e
};
goog.iter.some = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(b.call(c, a.next(), void 0, a)) {
        return!0
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!1
};
goog.iter.every = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(!b.call(c, a.next(), void 0, a)) {
        return!1
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!0
};
goog.iter.chain = function(a) {
  var b = arguments, c = b.length, d = 0, e = new goog.iter.Iterator;
  e.next = function() {
    try {
      if(d >= c) {
        throw goog.iter.StopIteration;
      }
      return goog.iter.toIterator(b[d]).next()
    }catch(a) {
      if(a !== goog.iter.StopIteration || d >= c) {
        throw a;
      }
      d++;
      return this.next()
    }
  };
  return e
};
goog.iter.dropWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(!e || !b.call(c, d, void 0, a)) {
        return e = !1, d
      }
    }
  };
  return d
};
goog.iter.takeWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      if(e) {
        var d = a.next();
        if(b.call(c, d, void 0, a)) {
          return d
        }
        e = !1
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return d
};
goog.iter.toArray = function(a) {
  if(goog.isArrayLike(a)) {
    return goog.array.toArray(a)
  }
  var a = goog.iter.toIterator(a), b = [];
  goog.iter.forEach(a, function(a) {
    b.push(a)
  });
  return b
};
goog.iter.equals = function(a, b) {
  var a = goog.iter.toIterator(a), b = goog.iter.toIterator(b), c, d;
  try {
    for(;;) {
      c = d = !1;
      var e = a.next();
      c = !0;
      var f = b.next();
      d = !0;
      if(e != f) {
        break
      }
    }
  }catch(g) {
    if(g !== goog.iter.StopIteration) {
      throw g;
    }
    if(c && !d) {
      return!1
    }
    if(!d) {
      try {
        b.next()
      }catch(h) {
        if(h !== goog.iter.StopIteration) {
          throw h;
        }
        return!0
      }
    }
  }
  return!1
};
goog.iter.nextOrValue = function(a, b) {
  try {
    return goog.iter.toIterator(a).next()
  }catch(c) {
    if(c != goog.iter.StopIteration) {
      throw c;
    }
    return b
  }
};
goog.iter.product = function(a) {
  if(goog.array.some(arguments, function(a) {
    return!a.length
  }) || !arguments.length) {
    return new goog.iter.Iterator
  }
  var b = new goog.iter.Iterator, c = arguments, d = goog.array.repeat(0, c.length);
  b.next = function() {
    if(d) {
      for(var a = goog.array.map(d, function(a, b) {
        return c[b][a]
      }), b = d.length - 1;0 <= b;b--) {
        goog.asserts.assert(d);
        if(d[b] < c[b].length - 1) {
          d[b]++;
          break
        }
        if(0 == b) {
          d = null;
          break
        }
        d[b] = 0
      }
      return a
    }
    throw goog.iter.StopIteration;
  };
  return b
};
goog.structs = {};
goog.structs.getCount = function(a) {
  return"function" == typeof a.getCount ? a.getCount() : goog.isArrayLike(a) || goog.isString(a) ? a.length : goog.object.getCount(a)
};
goog.structs.getValues = function(a) {
  if("function" == typeof a.getValues) {
    return a.getValues()
  }
  if(goog.isString(a)) {
    return a.split("")
  }
  if(goog.isArrayLike(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return goog.object.getValues(a)
};
goog.structs.getKeys = function(a) {
  if("function" == typeof a.getKeys) {
    return a.getKeys()
  }
  if("function" != typeof a.getValues) {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return goog.object.getKeys(a)
  }
};
goog.structs.contains = function(a, b) {
  return"function" == typeof a.contains ? a.contains(b) : "function" == typeof a.containsValue ? a.containsValue(b) : goog.isArrayLike(a) || goog.isString(a) ? goog.array.contains(a, b) : goog.object.containsValue(a, b)
};
goog.structs.isEmpty = function(a) {
  return"function" == typeof a.isEmpty ? a.isEmpty() : goog.isArrayLike(a) || goog.isString(a) ? goog.array.isEmpty(a) : goog.object.isEmpty(a)
};
goog.structs.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : goog.isArrayLike(a) ? goog.array.clear(a) : goog.object.clear(a)
};
goog.structs.forEach = function(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      goog.array.forEach(a, b, c)
    }else {
      for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a)
      }
    }
  }
};
goog.structs.filter = function(a, b, c) {
  if("function" == typeof a.filter) {
    return a.filter(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.filter(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      b.call(c, f[h], e[h], a) && (d[e[h]] = f[h])
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      b.call(c, f[h], void 0, a) && d.push(f[h])
    }
  }
  return d
};
goog.structs.map = function(a, b, c) {
  if("function" == typeof a.map) {
    return a.map(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.map(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      d[e[h]] = b.call(c, f[h], e[h], a)
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      d[h] = b.call(c, f[h], void 0, a)
    }
  }
  return d
};
goog.structs.some = function(a, b, c) {
  if("function" == typeof a.some) {
    return a.some(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.some(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(b.call(c, e[g], d && d[g], a)) {
      return!0
    }
  }
  return!1
};
goog.structs.every = function(a, b, c) {
  if("function" == typeof a.every) {
    return a.every(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.every(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(!b.call(c, e[g], d && d[g], a)) {
      return!1
    }
  }
  return!0
};
goog.structs.Map = function(a, b) {
  this.map_ = {};
  this.keys_ = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.addAll(a)
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  for(var a = [], b = 0;b < this.keys_.length;b++) {
    a.push(this.map_[this.keys_[b]])
  }
  return a
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a)
};
goog.structs.Map.prototype.containsValue = function(a) {
  for(var b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    if(goog.structs.Map.hasKey_(this.map_, c) && this.map_[c] == a) {
      return!0
    }
  }
  return!1
};
goog.structs.Map.prototype.equals = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.count_ != a.getCount()) {
    return!1
  }
  var c = b || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var d, e = 0;d = this.keys_[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return 0 == this.count_
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0
};
goog.structs.Map.prototype.remove = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    for(var a = 0, b = 0;a < this.keys_.length;) {
      var c = this.keys_[a];
      goog.structs.Map.hasKey_(this.map_, c) && (this.keys_[b++] = c);
      a++
    }
    this.keys_.length = b
  }
  if(this.count_ != this.keys_.length) {
    for(var d = {}, b = a = 0;a < this.keys_.length;) {
      c = this.keys_[a], goog.structs.Map.hasKey_(d, c) || (this.keys_[b++] = c, d[c] = 1), a++
    }
    this.keys_.length = b
  }
};
goog.structs.Map.prototype.get = function(a, b) {
  return goog.structs.Map.hasKey_(this.map_, a) ? this.map_[a] : b
};
goog.structs.Map.prototype.set = function(a, b) {
  goog.structs.Map.hasKey_(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
  this.map_[a] = b
};
goog.structs.Map.prototype.addAll = function(a) {
  var b;
  a instanceof goog.structs.Map ? (b = a.getKeys(), a = a.getValues()) : (b = goog.object.getKeys(a), a = goog.object.getValues(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  for(var a = new goog.structs.Map, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a.set(this.map_[c], c)
  }
  return a
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  for(var a = {}, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a[c] = this.map_[c]
  }
  return a
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(!0)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(!1)
};
goog.structs.Map.prototype.__iterator__ = function(a) {
  this.cleanupKeysArray_();
  var b = 0, c = this.keys_, d = this.map_, e = this.version_, f = this, g = new goog.iter.Iterator;
  g.next = function() {
    for(;;) {
      if(e != f.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw goog.iter.StopIteration;
      }
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
goog.structs.Map.hasKey_ = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};
goog.dom.forms = {};
goog.dom.forms.getFormDataMap = function(a) {
  var b = new goog.structs.Map;
  goog.dom.forms.getFormDataHelper_(a, b, goog.dom.forms.addFormDataToMap_);
  return b
};
goog.dom.forms.getFormDataString = function(a) {
  var b = [];
  goog.dom.forms.getFormDataHelper_(a, b, goog.dom.forms.addFormDataToStringBuffer_);
  return b.join("&")
};
goog.dom.forms.getFormDataHelper_ = function(a, b, c) {
  for(var d = a.elements, e, f = 0;e = d[f];f++) {
    if(!(e.disabled || "fieldset" == e.tagName.toLowerCase())) {
      var g = e.name;
      switch(e.type.toLowerCase()) {
        case "file":
        ;
        case "submit":
        ;
        case "reset":
        ;
        case "button":
          break;
        case "select-multiple":
          e = goog.dom.forms.getValue(e);
          if(null != e) {
            for(var h, i = 0;h = e[i];i++) {
              c(b, g, h)
            }
          }
          break;
        default:
          h = goog.dom.forms.getValue(e), null != h && c(b, g, h)
      }
    }
  }
  d = a.getElementsByTagName("input");
  for(f = 0;e = d[f];f++) {
    if(e.form == a && "image" == e.type.toLowerCase()) {
      g = e.name, c(b, g, e.value), c(b, g + ".x", "0"), c(b, g + ".y", "0")
    }
  }
};
goog.dom.forms.addFormDataToMap_ = function(a, b, c) {
  var d = a.get(b);
  d || (d = [], a.set(b, d));
  d.push(c)
};
goog.dom.forms.addFormDataToStringBuffer_ = function(a, b, c) {
  a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
};
goog.dom.forms.hasFileInput = function(a) {
  for(var a = a.elements, b, c = 0;b = a[c];c++) {
    if(!b.disabled && b.type && "file" == b.type.toLowerCase()) {
      return!0
    }
  }
  return!1
};
goog.dom.forms.setDisabled = function(a, b) {
  if("FORM" == a.tagName) {
    for(var c = a.elements, d = 0;a = c[d];d++) {
      goog.dom.forms.setDisabled(a, b)
    }
  }else {
    !0 == b && a.blur(), a.disabled = b
  }
};
goog.dom.forms.focusAndSelect = function(a) {
  a.focus();
  a.select && a.select()
};
goog.dom.forms.hasValue = function(a) {
  return!!goog.dom.forms.getValue(a)
};
goog.dom.forms.hasValueByName = function(a, b) {
  return!!goog.dom.forms.getValueByName(a, b)
};
goog.dom.forms.getValue = function(a) {
  var b = a.type;
  if(!goog.isDef(b)) {
    return null
  }
  switch(b.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return goog.dom.forms.getInputChecked_(a);
    case "select-one":
      return goog.dom.forms.getSelectSingle_(a);
    case "select-multiple":
      return goog.dom.forms.getSelectMultiple_(a);
    default:
      return goog.isDef(a.value) ? a.value : null
  }
};
goog.dom.$F = goog.dom.forms.getValue;
goog.dom.forms.getValueByName = function(a, b) {
  var c = a.elements[b];
  if(c.type) {
    return goog.dom.forms.getValue(c)
  }
  for(var d = 0;d < c.length;d++) {
    var e = goog.dom.forms.getValue(c[d]);
    if(e) {
      return e
    }
  }
  return null
};
goog.dom.forms.getInputChecked_ = function(a) {
  return a.checked ? a.value : null
};
goog.dom.forms.getSelectSingle_ = function(a) {
  var b = a.selectedIndex;
  return 0 <= b ? a.options[b].value : null
};
goog.dom.forms.getSelectMultiple_ = function(a) {
  for(var b = [], c, d = 0;c = a.options[d];d++) {
    c.selected && b.push(c.value)
  }
  return b.length ? b : null
};
goog.dom.forms.setValue = function(a, b) {
  var c = a.type;
  if(goog.isDef(c)) {
    switch(c.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        goog.dom.forms.setInputChecked_(a, b);
        break;
      case "select-one":
        goog.dom.forms.setSelectSingle_(a, b);
        break;
      case "select-multiple":
        goog.dom.forms.setSelectMultiple_(a, b);
        break;
      default:
        a.value = goog.isDefAndNotNull(b) ? b : ""
    }
  }
};
goog.dom.forms.setInputChecked_ = function(a, b) {
  a.checked = b ? "checked" : null
};
goog.dom.forms.setSelectSingle_ = function(a, b) {
  a.selectedIndex = -1;
  if(goog.isString(b)) {
    for(var c, d = 0;c = a.options[d];d++) {
      if(c.value == b) {
        c.selected = !0;
        break
      }
    }
  }
};
goog.dom.forms.setSelectMultiple_ = function(a, b) {
  goog.isString(b) && (b = [b]);
  for(var c, d = 0;c = a.options[d];d++) {
    if(c.selected = !1, b) {
      for(var e, f = 0;e = b[f];f++) {
        if(c.value == e) {
          c.selected = !0
        }
      }
    }
  }
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.register = function(a) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = a
};
goog.debug.entryPointRegistry.monitorAll = function(a) {
  for(var a = goog.bind(a.wrap, a), b = 0;b < goog.debug.entryPointRegistry.refList_.length;b++) {
    goog.debug.entryPointRegistry.refList_[b](a)
  }
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(a) {
  for(var a = goog.bind(a.unwrap, a), b = 0;b < goog.debug.entryPointRegistry.refList_.length;b++) {
    goog.debug.entryPointRegistry.refList_[b](a)
  }
};
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(a) {
  return a
}};
goog.events = {};
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isVersion("9"), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.disposable = {};
goog.disposable.IDisposable = function() {
};
goog.Disposable = function() {
  goog.Disposable.ENABLE_MONITORING && (goog.Disposable.instances_[goog.getUid(this)] = this)
};
goog.Disposable.ENABLE_MONITORING = !1;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var a = [], b;
  for(b in goog.Disposable.instances_) {
    goog.Disposable.instances_.hasOwnProperty(b) && a.push(goog.Disposable.instances_[Number(b)])
  }
  return a
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.ENABLE_MONITORING)) {
    var a = goog.getUid(this);
    if(!goog.Disposable.instances_.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete goog.Disposable.instances_[a]
  }
};
goog.Disposable.prototype.disposeInternal = function() {
};
goog.dispose = function(a) {
  a && "function" == typeof a.dispose && a.dispose()
};
goog.events.Event = function(a, b) {
  goog.Disposable.call(this);
  this.type = a;
  this.currentTarget = this.target = b
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = !1;
goog.events.Event.prototype.returnValue_ = !0;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = !0
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = !1
};
goog.events.Event.stopPropagation = function(a) {
  a.stopPropagation()
};
goog.events.Event.preventDefault = function(a) {
  a.preventDefault()
};
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
MESSAGE:"message", CONNECT:"connect"};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b
};
goog.reflect.sinkValue = new Function("a", "return a");
goog.events.BrowserEvent = function(a, b) {
  a && this.init(a, b)
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = !1;
goog.events.BrowserEvent.prototype.altKey = !1;
goog.events.BrowserEvent.prototype.shiftKey = !1;
goog.events.BrowserEvent.prototype.metaKey = !1;
goog.events.BrowserEvent.prototype.platformModifierKey = !1;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(a, b) {
  var c = this.type = a.type;
  goog.events.Event.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(goog.userAgent.GECKO) {
      try {
        goog.reflect.sinkValue(d.nodeName)
      }catch(e) {
        d = null
      }
    }
  }else {
    if(c == goog.events.EventType.MOUSEOVER) {
      d = a.fromElement
    }else {
      if(c == goog.events.EventType.MOUSEOUT) {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.event_ = a;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(a) {
  return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == a : "click" == this.type ? a == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[a])
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var a = this.event_;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.event_ = null
};
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function() {
};
goog.events.EventWrapper.prototype.unlisten = function() {
};
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = !1;
goog.events.Listener.prototype.callOnce = !1;
goog.events.Listener.prototype.init = function(a, b, c, d, e, f) {
  if(goog.isFunction(a)) {
    this.isFunctionListener_ = !0
  }else {
    if(a && a.handleEvent && goog.isFunction(a.handleEvent)) {
      this.isFunctionListener_ = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.handler = f;
  this.callOnce = !1;
  this.key = ++goog.events.Listener.counter_;
  this.removed = !1
};
goog.events.Listener.prototype.handleEvent = function(a) {
  return this.isFunctionListener_ ? this.listener.call(this.handler || this.src, a) : this.listener.handleEvent.call(this.listener, a)
};
goog.structs.SimplePool = function(a, b) {
  goog.Disposable.call(this);
  this.maxCount_ = b;
  this.freeQueue_ = [];
  this.createInitial_(a)
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
goog.structs.SimplePool.prototype.createObjectFn_ = null;
goog.structs.SimplePool.prototype.disposeObjectFn_ = null;
goog.structs.SimplePool.prototype.setCreateObjectFn = function(a) {
  this.createObjectFn_ = a
};
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(a) {
  this.disposeObjectFn_ = a
};
goog.structs.SimplePool.prototype.getObject = function() {
  return this.freeQueue_.length ? this.freeQueue_.pop() : this.createObject()
};
goog.structs.SimplePool.prototype.releaseObject = function(a) {
  this.freeQueue_.length < this.maxCount_ ? this.freeQueue_.push(a) : this.disposeObject(a)
};
goog.structs.SimplePool.prototype.createInitial_ = function(a) {
  if(a > this.maxCount_) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var b = 0;b < a;b++) {
    this.freeQueue_.push(this.createObject())
  }
};
goog.structs.SimplePool.prototype.createObject = function() {
  return this.createObjectFn_ ? this.createObjectFn_() : {}
};
goog.structs.SimplePool.prototype.disposeObject = function(a) {
  if(this.disposeObjectFn_) {
    this.disposeObjectFn_(a)
  }else {
    if(goog.isObject(a)) {
      if(goog.isFunction(a.dispose)) {
        a.dispose()
      }else {
        for(var b in a) {
          delete a[b]
        }
      }
    }
  }
};
goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  for(var a = this.freeQueue_;a.length;) {
    this.disposeObject(a.pop())
  }
  delete this.freeQueue_
};
goog.events.pools = {};
goog.events.ASSUME_GOOD_GC = !1;
(function() {
  function a() {
    return{count_:0, remaining_:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = function(b) {
      return g.call(a.src, a.key, b)
    };
    return a
  }
  function d() {
    return new goog.events.Listener
  }
  function e() {
    return new goog.events.BrowserEvent
  }
  var f = !goog.events.ASSUME_GOOD_GC && goog.userAgent.jscript.HAS_JSCRIPT && !goog.userAgent.jscript.isVersion("5.7"), g;
  goog.events.pools.setProxyCallbackFunction = function(a) {
    g = a
  };
  if(f) {
    goog.events.pools.getObject = function() {
      return h.getObject()
    };
    goog.events.pools.releaseObject = function(a) {
      h.releaseObject(a)
    };
    goog.events.pools.getArray = function() {
      return i.getObject()
    };
    goog.events.pools.releaseArray = function(a) {
      i.releaseObject(a)
    };
    goog.events.pools.getProxy = function() {
      return j.getObject()
    };
    goog.events.pools.releaseProxy = function() {
      j.releaseObject(c())
    };
    goog.events.pools.getListener = function() {
      return k.getObject()
    };
    goog.events.pools.releaseListener = function(a) {
      k.releaseObject(a)
    };
    goog.events.pools.getEvent = function() {
      return l.getObject()
    };
    goog.events.pools.releaseEvent = function(a) {
      l.releaseObject(a)
    };
    var h = new goog.structs.SimplePool(0, 600);
    h.setCreateObjectFn(a);
    var i = new goog.structs.SimplePool(0, 600);
    i.setCreateObjectFn(b);
    var j = new goog.structs.SimplePool(0, 600);
    j.setCreateObjectFn(c);
    var k = new goog.structs.SimplePool(0, 600);
    k.setCreateObjectFn(d);
    var l = new goog.structs.SimplePool(0, 600);
    l.setCreateObjectFn(e)
  }else {
    goog.events.pools.getObject = a, goog.events.pools.releaseObject = goog.nullFunction, goog.events.pools.getArray = b, goog.events.pools.releaseArray = goog.nullFunction, goog.events.pools.getProxy = c, goog.events.pools.releaseProxy = goog.nullFunction, goog.events.pools.getListener = d, goog.events.pools.releaseListener = goog.nullFunction, goog.events.pools.getEvent = e, goog.events.pools.releaseEvent = goog.nullFunction
  }
})();
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.listen = function(a, b, c, d, e) {
  if(b) {
    if(goog.isArray(b)) {
      for(var f = 0;f < b.length;f++) {
        goog.events.listen(a, b[f], c, d, e)
      }
      return null
    }
    var d = !!d, g = goog.events.listenerTree_;
    b in g || (g[b] = goog.events.pools.getObject());
    g = g[b];
    d in g || (g[d] = goog.events.pools.getObject(), g.count_++);
    var g = g[d], h = goog.getUid(a), i;
    g.remaining_++;
    if(g[h]) {
      i = g[h];
      for(f = 0;f < i.length;f++) {
        if(g = i[f], g.listener == c && g.handler == e) {
          if(g.removed) {
            break
          }
          return i[f].key
        }
      }
    }else {
      i = g[h] = goog.events.pools.getArray(), g.count_++
    }
    f = goog.events.pools.getProxy();
    f.src = a;
    g = goog.events.pools.getListener();
    g.init(c, f, a, b, d, e);
    c = g.key;
    f.key = c;
    i.push(g);
    goog.events.listeners_[c] = g;
    goog.events.sources_[h] || (goog.events.sources_[h] = goog.events.pools.getArray());
    goog.events.sources_[h].push(g);
    a.addEventListener ? (a == goog.global || !a.customEvent_) && a.addEventListener(b, f, d) : a.attachEvent(goog.events.getOnString_(b), f);
    return c
  }
  throw Error("Invalid event type");
};
goog.events.listenOnce = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.listenOnce(a, b[f], c, d, e)
    }
    return null
  }
  a = goog.events.listen(a, b, c, d, e);
  goog.events.listeners_[a].callOnce = !0;
  return a
};
goog.events.listenWithWrapper = function(a, b, c, d, e) {
  b.listen(a, c, d, e)
};
goog.events.unlisten = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.unlisten(a, b[f], c, d, e)
    }
    return null
  }
  d = !!d;
  a = goog.events.getListeners_(a, b, d);
  if(!a) {
    return!1
  }
  for(f = 0;f < a.length;f++) {
    if(a[f].listener == c && a[f].capture == d && a[f].handler == e) {
      return goog.events.unlistenByKey(a[f].key)
    }
  }
  return!1
};
goog.events.unlistenByKey = function(a) {
  if(!goog.events.listeners_[a]) {
    return!1
  }
  var b = goog.events.listeners_[a];
  if(b.removed) {
    return!1
  }
  var c = b.src, d = b.type, e = b.proxy, f = b.capture;
  c.removeEventListener ? (c == goog.global || !c.customEvent_) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(goog.events.getOnString_(d), e);
  c = goog.getUid(c);
  e = goog.events.listenerTree_[d][f][c];
  if(goog.events.sources_[c]) {
    var g = goog.events.sources_[c];
    goog.array.remove(g, b);
    0 == g.length && delete goog.events.sources_[c]
  }
  b.removed = !0;
  e.needsCleanup_ = !0;
  goog.events.cleanUp_(d, f, c, e);
  delete goog.events.listeners_[a];
  return!0
};
goog.events.unlistenWithWrapper = function(a, b, c, d, e) {
  b.unlisten(a, c, d, e)
};
goog.events.cleanUp_ = function(a, b, c, d) {
  if(!d.locked_ && d.needsCleanup_) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].removed) {
        var g = d[e].proxy;
        g.src = null;
        goog.events.pools.releaseProxy(g);
        goog.events.pools.releaseListener(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.needsCleanup_ = !1;
    0 == f && (goog.events.pools.releaseArray(d), delete goog.events.listenerTree_[a][b][c], goog.events.listenerTree_[a][b].count_--, 0 == goog.events.listenerTree_[a][b].count_ && (goog.events.pools.releaseObject(goog.events.listenerTree_[a][b]), delete goog.events.listenerTree_[a][b], goog.events.listenerTree_[a].count_--), 0 == goog.events.listenerTree_[a].count_ && (goog.events.pools.releaseObject(goog.events.listenerTree_[a]), delete goog.events.listenerTree_[a]))
  }
};
goog.events.removeAll = function(a, b, c) {
  var d = 0, e = null == b, f = null == c, c = !!c;
  if(null == a) {
    goog.object.forEach(goog.events.sources_, function(a) {
      for(var g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    })
  }else {
    if(a = goog.getUid(a), goog.events.sources_[a]) {
      for(var a = goog.events.sources_[a], g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    }
  }
  return d
};
goog.events.getListeners = function(a, b, c) {
  return goog.events.getListeners_(a, b, c) || []
};
goog.events.getListeners_ = function(a, b, c) {
  var d = goog.events.listenerTree_;
  return b in d && (d = d[b], c in d && (d = d[c], a = goog.getUid(a), d[a])) ? d[a] : null
};
goog.events.getListener = function(a, b, c, d, e) {
  d = !!d;
  if(a = goog.events.getListeners_(a, b, d)) {
    for(b = 0;b < a.length;b++) {
      if(a[b].listener == c && a[b].capture == d && a[b].handler == e) {
        return a[b]
      }
    }
  }
  return null
};
goog.events.hasListener = function(a, b, c) {
  var a = goog.getUid(a), d = goog.events.sources_[a];
  if(d) {
    var e = goog.isDef(b), f = goog.isDef(c);
    return e && f ? (d = goog.events.listenerTree_[b], !!d && !!d[c] && a in d[c]) : !e && !f ? !0 : goog.array.some(d, function(a) {
      return e && a.type == b || f && a.capture == c
    })
  }
  return!1
};
goog.events.expose = function(a) {
  var b = [], c;
  for(c in a) {
    a[c] && a[c].id ? b.push(c + " = " + a[c] + " (" + a[c].id + ")") : b.push(c + " = " + a[c])
  }
  return b.join("\n")
};
goog.events.getOnString_ = function(a) {
  return a in goog.events.onStringMap_ ? goog.events.onStringMap_[a] : goog.events.onStringMap_[a] = goog.events.onString_ + a
};
goog.events.fireListeners = function(a, b, c, d) {
  var e = goog.events.listenerTree_;
  return b in e && (e = e[b], c in e) ? goog.events.fireListeners_(e[c], a, b, c, d) : !0
};
goog.events.fireListeners_ = function(a, b, c, d, e) {
  var f = 1, b = goog.getUid(b);
  if(a[b]) {
    a.remaining_--;
    a = a[b];
    a.locked_ ? a.locked_++ : a.locked_ = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.removed && (f &= !1 !== goog.events.fireListener(i, e))
      }
    }finally {
      a.locked_--, goog.events.cleanUp_(c, d, b, a)
    }
  }
  return Boolean(f)
};
goog.events.fireListener = function(a, b) {
  var c = a.handleEvent(b);
  a.callOnce && goog.events.unlistenByKey(a.key);
  return c
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(a, b) {
  var c = b.type || b, d = goog.events.listenerTree_;
  if(!(c in d)) {
    return!0
  }
  if(goog.isString(b)) {
    b = new goog.events.Event(b, a)
  }else {
    if(b instanceof goog.events.Event) {
      b.target = b.target || a
    }else {
      var e = b, b = new goog.events.Event(c, a);
      goog.object.extend(b, e)
    }
  }
  var e = 1, f, d = d[c], c = !0 in d, g;
  if(c) {
    f = [];
    for(g = a;g;g = g.getParentEventTarget()) {
      f.push(g)
    }
    g = d[!0];
    g.remaining_ = g.count_;
    for(var h = f.length - 1;!b.propagationStopped_ && 0 <= h && g.remaining_;h--) {
      b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !0, b) && !1 != b.returnValue_
    }
  }
  if(!1 in d) {
    if(g = d[!1], g.remaining_ = g.count_, c) {
      for(h = 0;!b.propagationStopped_ && h < f.length && g.remaining_;h++) {
        b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !1, b) && !1 != b.returnValue_
      }
    }else {
      for(d = a;!b.propagationStopped_ && d && g.remaining_;d = d.getParentEventTarget()) {
        b.currentTarget = d, e &= goog.events.fireListeners_(g, d, b.type, !1, b) && !1 != b.returnValue_
      }
    }
  }
  return Boolean(e)
};
goog.events.protectBrowserEventEntryPoint = function(a) {
  goog.events.handleBrowserEvent_ = a.protectEntryPoint(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(a, b) {
  if(!goog.events.listeners_[a]) {
    return!0
  }
  var c = goog.events.listeners_[a], d = c.type, e = goog.events.listenerTree_;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, g;
  if(goog.events.synthesizeEventPropagation_()) {
    f = b || goog.getObjectByName("window.event");
    var h = !0 in e, i = !1 in e;
    if(h) {
      if(goog.events.isMarkedIeEvent_(f)) {
        return!0
      }
      goog.events.markIeEvent_(f)
    }
    var j = goog.events.pools.getEvent();
    j.init(f, this);
    f = !0;
    try {
      if(h) {
        for(var k = goog.events.pools.getArray(), l = j.currentTarget;l;l = l.parentNode) {
          k.push(l)
        }
        g = e[!0];
        g.remaining_ = g.count_;
        for(var m = k.length - 1;!j.propagationStopped_ && 0 <= m && g.remaining_;m--) {
          j.currentTarget = k[m], f &= goog.events.fireListeners_(g, k[m], d, !0, j)
        }
        if(i) {
          g = e[!1];
          g.remaining_ = g.count_;
          for(m = 0;!j.propagationStopped_ && m < k.length && g.remaining_;m++) {
            j.currentTarget = k[m], f &= goog.events.fireListeners_(g, k[m], d, !1, j)
          }
        }
      }else {
        f = goog.events.fireListener(c, j)
      }
    }finally {
      if(k) {
        k.length = 0, goog.events.pools.releaseArray(k)
      }
      j.dispose();
      goog.events.pools.releaseEvent(j)
    }
    return f
  }
  d = new goog.events.BrowserEvent(b, this);
  try {
    f = goog.events.fireListener(c, d)
  }finally {
    d.dispose()
  }
  return f
};
goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_);
goog.events.markIeEvent_ = function(a) {
  var b = !1;
  if(0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return
    }catch(c) {
      b = !0
    }
  }
  if(b || void 0 == a.returnValue) {
    a.returnValue = !0
  }
};
goog.events.isMarkedIeEvent_ = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(a) {
  return a + "_" + goog.events.uniqueIdCounter_++
};
goog.events.synthesizeEventPropagation_ = function() {
  if(void 0 === goog.events.requiresSyntheticEventPropagation_) {
    goog.events.requiresSyntheticEventPropagation_ = goog.userAgent.IE && !goog.global.addEventListener
  }
  return goog.events.requiresSyntheticEventPropagation_
};
goog.debug.entryPointRegistry.register(function(a) {
  goog.events.handleBrowserEvent_ = a(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
});
var domina = {support:{}}, div__21175 = document.createElement("div"), test_html__21176 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div__21175.innerHTML = test_html__21176;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.__2(div__21175.firstChild.nodeType, 3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.__2(div__21175.getElementsByTagName("tbody").length, 0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.__2(div__21175.getElementsByTagName("link").length, 0);
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__20033 = cljs.core.PersistentVector.fromArray([1, "<select multiple='multiple'>", "</select>"]), table_section_wrapper__20034 = cljs.core.PersistentVector.fromArray([1, "<table>", "</table>"]), cell_wrapper__20035 = cljs.core.PersistentVector.fromArray([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
domina.wrap_map = cljs.core.ObjMap.fromObject("col,\ufdd0'default,tfoot,caption,optgroup,legend,area,td,thead,th,option,tbody,tr,colgroup".split(","), {col:cljs.core.PersistentVector.fromArray([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":cljs.core.PersistentVector.fromArray([0, "", ""]), tfoot:table_section_wrapper__20034, caption:table_section_wrapper__20034, optgroup:opt_wrapper__20033, legend:cljs.core.PersistentVector.fromArray([1, "<fieldset>", "</fieldset>"]), 
area:cljs.core.PersistentVector.fromArray([1, "<map>", "</map>"]), td:cell_wrapper__20035, thead:table_section_wrapper__20034, th:cell_wrapper__20035, option:opt_wrapper__20033, tbody:table_section_wrapper__20034, tr:cljs.core.PersistentVector.fromArray([2, "<table><tbody>", "</tbody></table>"]), colgroup:table_section_wrapper__20034});
domina.remove_extraneous_tbody_BANG_ = function(a, b) {
  var c = cljs.core.not(cljs.core.re_find(domina.re_tbody, b)), d = function() {
    var a = cljs.core._EQ_.__2(domina.tag_name, "table");
    return a ? c : a
  }() ? function() {
    var b = a.firstChild;
    return cljs.core.truth_(b) ? a.firstChild.childNodes : b
  }() : function() {
    var a = cljs.core._EQ_.__2(domina.start_wrap, "<table>");
    return a ? c : a
  }() ? a.childNodes : cljs.core.PersistentVector.fromArray([]);
  if(d = cljs.core.seq(d)) {
    for(var e = cljs.core.first(d);;) {
      if(function() {
        var a = cljs.core._EQ_.__2(e.nodeName, "tbody");
        return a ? cljs.core._EQ_.__2(e.childNodes.length, 0) : a
      }() && e.parentNode.removeChild(e), d = cljs.core.next(d)) {
        var f = d, e = d = cljs.core.first(f), d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
domina.restore_leading_whitespace_BANG_ = function(a, b) {
  return a.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace, b))), a.firstChild)
};
domina.html_to_dom = function(a) {
  var b = clojure.string.replace(a, domina.re_xhtml_tag, "<$1></$2>"), a = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name, b))).toLowerCase(), a = cljs.core.get.__3(domina.wrap_map, a, "\ufdd0'default".call(null, domina.wrap_map)), c = cljs.core.nth.__3(a, 0, null), d = cljs.core.nth.__3(a, 1, null), e = cljs.core.nth.__3(a, 2, null), a = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = cljs.core.str(d, b, e);
    for(var g = c;;) {
      if(0 < g) {
        g -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  cljs.core.truth_(domina.support.extraneous_tbody_QMARK_) && domina.remove_extraneous_tbody_BANG_(a, b);
  cljs.core.truth_(function() {
    var a = cljs.core.not(domina.support.leading_whitespace_QMARK_);
    return a ? cljs.core.re_find(domina.re_leading_whitespace, b) : a
  }()) && domina.restore_leading_whitespace_BANG_(a, b);
  return a.childNodes
};
domina.string_to_dom = function(a) {
  return cljs.core.truth_(cljs.core.re_find(domina.re_html, a)) ? domina.html_to_dom(a) : document.createTextNode(a)
};
domina.DomContent = {};
domina.nodes = function(a) {
  if(a ? a.domina$DomContent$nodes__1 : a) {
    a = a.domina$DomContent$nodes__1(a)
  }else {
    var b;
    b = domina.nodes[goog.typeOf.call(null, a)];
    if(!b && (b = domina.nodes._, !b)) {
      throw cljs.core.missing_protocol("DomContent.nodes", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.single_node = function(a) {
  if(a ? a.domina$DomContent$single_node__1 : a) {
    a = a.domina$DomContent$single_node__1(a)
  }else {
    var b;
    b = domina.single_node[goog.typeOf.call(null, a)];
    if(!b && (b = domina.single_node._, !b)) {
      throw cljs.core.missing_protocol("DomContent.single-node", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina._STAR_debug_STAR_ = !0;
domina.log_debug = function(a) {
  return cljs.core.truth_(function() {
    var a = domina._STAR_debug_STAR_;
    return cljs.core.truth_(a) ? cljs.core.not(cljs.core._EQ_.__2(window.console, void 0)) : a
  }()) ? console.log(a) : null
};
domina.log = function(a) {
  return cljs.core.truth_(window.console) ? console.log(a) : null
};
domina.by_id = function(a) {
  return goog.dom.getElement.call(null, cljs.core.name(a))
};
domina.by_class = function by_class(b) {
  if(void 0 === domina.t20241) {
    domina.t20241 = function(b, d, e) {
      this.class_name = b;
      this.by_class = d;
      this.__meta__321__auto__ = e
    }, domina.t20241.cljs$core$IPrintable$_pr_seq = function() {
      return cljs.core.list("domina.t20241")
    }, domina.t20241.prototype.domina$DomContent$ = !0, domina.t20241.prototype.domina$DomContent$nodes__1 = function() {
      return domina.normalize_seq(goog.dom.getElementsByClass.call(null, cljs.core.name(this.class_name)))
    }, domina.t20241.prototype.domina$DomContent$single_node__1 = function() {
      return domina.normalize_seq(goog.dom.getElementByClass.call(null, cljs.core.name(this.class_name)))
    }, domina.t20241.prototype.cljs$core$IMeta$ = !0, domina.t20241.prototype.cljs$core$IMeta$_meta__1 = function() {
      return this.__meta__321__auto__
    }, domina.t20241.prototype.cljs$core$IWithMeta$ = !0, domina.t20241.prototype.cljs$core$IWithMeta$_with_meta__2 = function(b, d) {
      return new domina.t20241(this.class_name, this.by_class, d)
    }
  }
  return new domina.t20241(b, by_class, null)
};
domina.children = function(a) {
  return cljs.core.mapcat.__2(goog.dom.getChildren, domina.nodes(a))
};
domina.clone = function(a) {
  return cljs.core.map.__2(function(a) {
    return a.cloneNode(!0)
  }, domina.nodes(a))
};
domina.append_BANG_ = function(a, b) {
  domina.apply_with_cloning(goog.dom.appendChild, a, b);
  return a
};
domina.insert_BANG_ = function(a, b, c) {
  domina.apply_with_cloning(function(a, b) {
    return goog.dom.insertChildAt.call(null, a, b, c)
  }, a, b);
  return a
};
domina.prepend_BANG_ = function(a, b) {
  domina.insert_BANG_(a, b, 0);
  return a
};
domina.insert_before_BANG_ = function(a, b) {
  domina.apply_with_cloning(function(a, b) {
    return goog.dom.insertSiblingBefore.call(null, b, a)
  }, a, b);
  return a
};
domina.insert_after_BANG_ = function(a, b) {
  domina.apply_with_cloning(function(a, b) {
    return goog.dom.insertSiblingAfter.call(null, b, a)
  }, a, b);
  return a
};
domina.swap_content_BANG_ = function(a, b) {
  domina.apply_with_cloning(function(a, b) {
    return goog.dom.replaceNode.call(null, b, a)
  }, a, b);
  return a
};
domina.detach_BANG_ = function(a) {
  return cljs.core.doall.__1(cljs.core.map.__2(goog.dom.removeNode, domina.nodes(a)))
};
domina.destroy_BANG_ = function(a) {
  return cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeNode, domina.nodes(a)))
};
domina.destroy_children_BANG_ = function(a) {
  cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeChildren, domina.nodes(a)));
  return a
};
domina.style = function(a, b) {
  var c = goog.style.getStyle.call(null, domina.single_node(a), cljs.core.name(b));
  return cljs.core.truth_(clojure.string.blank_QMARK_(c)) ? null : c
};
domina.attr = function(a, b) {
  return domina.single_node(a).getAttribute(cljs.core.name(b))
};
domina.set_style_BANG_ = function() {
  var a = function(a, b, e) {
    var f = cljs.core.seq(domina.nodes(a));
    if(cljs.core.truth_(f)) {
      for(var g = cljs.core.first(f);;) {
        if(goog.style.setStyle.call(null, g, cljs.core.name(b), cljs.core.apply.__2(cljs.core.str, e)), g = cljs.core.next(f), cljs.core.truth_(g)) {
          f = g, g = cljs.core.first(f)
        }else {
          break
        }
      }
    }
    return a
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
domina.set_attr_BANG_ = function() {
  var a = function(a, b, e) {
    var f = cljs.core.seq(domina.nodes(a));
    if(cljs.core.truth_(f)) {
      for(var g = cljs.core.first(f);;) {
        if(g.setAttribute(cljs.core.name(b), cljs.core.apply.__2(cljs.core.str, e)), g = cljs.core.next(f), cljs.core.truth_(g)) {
          f = g, g = cljs.core.first(f)
        }else {
          break
        }
      }
    }
    return a
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
domina.remove_attr_BANG_ = function(a, b) {
  var c = cljs.core.seq(domina.nodes(a));
  if(cljs.core.truth_(c)) {
    for(var d = cljs.core.first(c);;) {
      if(d.removeAttribute(cljs.core.name(b)), d = cljs.core.next(c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first(c)
      }else {
        break
      }
    }
  }
  return a
};
domina.parse_style_attributes = function(a) {
  return cljs.core.reduce.__3(function(a, c) {
    var d = c.split(/\s*:\s*/), e = cljs.core.nth.__3(d, 0, null), d = cljs.core.nth.__3(d, 1, null);
    return cljs.core.truth_(cljs.core.truth_(e) ? d : e) ? cljs.core.assoc.__3(a, cljs.core.keyword.__1(e.toLowerCase()), d) : a
  }, cljs.core.ObjMap.fromObject([], {}), a.split(/\s*;\s*/))
};
domina.styles = function(a) {
  a = domina.attr(a, "style");
  return cljs.core.string_QMARK_(a) ? domina.parse_style_attributes(a) : cljs.core.truth_(a.cssText) ? domina.parse_style_attributes(a.cssText) : null
};
domina.attrs = function(a) {
  var b = domina.single_node(a).attributes;
  return cljs.core.reduce.__2(cljs.core.conj, cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(function(a) {
    var a = b.item(a), d = a.nodeValue, e = cljs.core.not_EQ_.__2(null, d);
    return(e ? cljs.core.not_EQ_.__2("", d) : e) ? cljs.core.HashMap.fromArrays([cljs.core.keyword.__1(a.nodeName.toLowerCase())], [a.nodeValue]) : null
  }, cljs.core.range.__1(b.length))))
};
domina.set_styles_BANG_ = function(a, b) {
  var c = cljs.core.seq(b);
  if(cljs.core.truth_(c)) {
    var d = cljs.core.first(c);
    cljs.core.nth.__3(d, 0, null);
    for(cljs.core.nth.__3(d, 1, null);;) {
      var e = d, d = cljs.core.nth.__3(e, 0, null), e = cljs.core.nth.__3(e, 1, null);
      domina.set_style_BANG_(a, d, e);
      c = cljs.core.next(c);
      if(cljs.core.truth_(c)) {
        d = c, c = cljs.core.first(d), e = d, d = c, c = e
      }else {
        break
      }
    }
  }
  return a
};
domina.set_attrs_BANG_ = function(a, b) {
  var c = cljs.core.seq(b);
  if(cljs.core.truth_(c)) {
    var d = cljs.core.first(c);
    cljs.core.nth.__3(d, 0, null);
    for(cljs.core.nth.__3(d, 1, null);;) {
      var e = d, d = cljs.core.nth.__3(e, 0, null), e = cljs.core.nth.__3(e, 1, null);
      domina.set_attr_BANG_(a, d, e);
      c = cljs.core.next(c);
      if(cljs.core.truth_(c)) {
        d = c, c = cljs.core.first(d), e = d, d = c, c = e
      }else {
        break
      }
    }
  }
  return a
};
domina.has_class_QMARK_ = function(a, b) {
  return goog.dom.classes.has.call(null, domina.single_node(a), b)
};
domina.add_class_BANG_ = function(a, b) {
  var c = cljs.core.seq(domina.nodes(a));
  if(cljs.core.truth_(c)) {
    for(var d = cljs.core.first(c);;) {
      if(goog.dom.classes.add.call(null, d, b), d = cljs.core.next(c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first(c)
      }else {
        break
      }
    }
  }
  return a
};
domina.remove_class_BANG_ = function(a, b) {
  var c = cljs.core.seq(domina.nodes(a));
  if(cljs.core.truth_(c)) {
    for(var d = cljs.core.first(c);;) {
      if(goog.dom.classes.remove.call(null, d, b), d = cljs.core.next(c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first(c)
      }else {
        break
      }
    }
  }
  return a
};
domina.classes = function(a) {
  return cljs.core.seq(goog.dom.classes.get.call(null, domina.single_node(a)))
};
domina.text = function() {
  var a = null, b = function(b) {
    return a.call(null, b, !0)
  }, c = function(a, b) {
    return cljs.core.truth_(b) ? goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node(a))) : goog.dom.getRawTextContent.call(null, domina.single_node(a))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
domina.set_text_BANG_ = function(a, b) {
  var c = cljs.core.seq(domina.nodes(a));
  if(cljs.core.truth_(c)) {
    for(var d = cljs.core.first(c);;) {
      if(goog.dom.setTextContent.call(null, d, b), d = cljs.core.next(c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first(c)
      }else {
        break
      }
    }
  }
  return a
};
domina.value = function(a) {
  return goog.dom.forms.getValue.call(null, domina.single_node(a))
};
domina.set_value_BANG_ = function(a, b) {
  var c = cljs.core.seq(domina.nodes(a));
  if(cljs.core.truth_(c)) {
    for(var d = cljs.core.first(c);;) {
      if(goog.dom.forms.setValue.call(null, d, b), d = cljs.core.next(c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first(c)
      }else {
        break
      }
    }
  }
  return a
};
domina.html = function(a) {
  return domina.single_node(a).innerHTML
};
domina.replace_children_BANG_ = function(a, b) {
  return domina.append_BANG_(domina.destroy_children_BANG_(a), b)
};
domina.set_inner_html_BANG_ = function(a, b) {
  var c = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html, b)), d = cljs.core.re_find(domina.re_leading_whitespace, b), e = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name, b))).toLowerCase(), f = cljs.core.contains_QMARK_(domina.wrap_map, e);
  if(cljs.core.truth_(function() {
    if(cljs.core.truth_(c)) {
      var a;
      a = domina.support.leading_whitespace_QMARK_;
      a = cljs.core.truth_(a) ? a : cljs.core.not(d);
      return cljs.core.truth_(a) ? cljs.core.not(f) : a
    }
    return c
  }())) {
    e = clojure.string.replace(b, domina.re_xhtml_tag, "<$1></$2>");
    try {
      var g = cljs.core.seq(domina.nodes(a));
      if(cljs.core.truth_(g)) {
        for(var h = cljs.core.first(g);;) {
          goog.events.removeAll.call(null, h);
          h.innerHTML = e;
          var i = cljs.core.next(g);
          if(cljs.core.truth_(i)) {
            var j = i, k = cljs.core.first(j), h = k, g = j
          }else {
            break
          }
        }
      }
    }catch(l) {
      if(cljs.core.instance_QMARK_(domina.Exception, l)) {
        domina.replace_children_BANG_(a, e)
      }else {
        throw l;
      }
    }
  }else {
    domina.replace_children_BANG_(a, b)
  }
  return a
};
domina.set_html_BANG_ = function(a, b) {
  return cljs.core.string_QMARK_(b) ? domina.set_inner_html_BANG_(a, b) : domina.replace_children_BANG_(a, b)
};
domina.get_data = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, !1)
  }, c = function(b, c, f) {
    var g = domina.single_node(b).__domina_data, g = cljs.core.truth_(g) ? cljs.core.get.__2(g, c) : null;
    return cljs.core.truth_(cljs.core.truth_(f) ? null === g : f) ? (b = domina.single_node(b).parentNode, cljs.core.truth_(b) ? a.call(null, b, c, !0) : null) : g
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.set_data_BANG_ = function(a, b, c) {
  var d;
  d = domina.single_node(a).__domina_data;
  d = cljs.core.truth_(d) ? d : cljs.core.ObjMap.fromObject([], {});
  return domina.single_node(a).__domina_data = cljs.core.assoc.__3(d, b, c)
};
domina.apply_with_cloning = function(a, b, c) {
  var b = domina.nodes(b), d = domina.nodes(c), e = function() {
    var a = document.createDocumentFragment(), b = cljs.core.seq(d);
    if(cljs.core.truth_(b)) {
      for(var c = cljs.core.first(b);;) {
        if(a.appendChild(c), c = cljs.core.next(b), cljs.core.truth_(c)) {
          b = c, c = cljs.core.first(b)
        }else {
          break
        }
      }
    }
    return a
  }(), c = cljs.core.doall.__1(cljs.core.repeatedly.__2(cljs.core.count(b) - 1, function() {
    return e.cloneNode(!0)
  }));
  return cljs.core.truth_(cljs.core.seq(b)) ? (a.call(null, cljs.core.first(b), e), cljs.core.doall.__1(cljs.core.map.__3(function(b, c) {
    return a.call(null, b, c)
  }, cljs.core.rest(b), c))) : null
};
domina.lazy_nl_via_item = function() {
  var a = null, b = function(b) {
    return a.call(null, b, 0)
  }, c = function(b, c) {
    return c < b.length ? new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons(b.item(c), a.call(null, b, c + 1))
    }) : null
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
domina.lazy_nl_via_array_ref = function() {
  var a = null, b = function(b) {
    return a.call(null, b, 0)
  }, c = function(b, c) {
    return c < b.length ? new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons(b[c], a.call(null, b, c + 1))
    }) : null
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
domina.lazy_nodelist = function(a) {
  return cljs.core.truth_(a.item) ? domina.lazy_nl_via_item.__1(a) : domina.lazy_nl_via_array_ref.__1(a)
};
domina.array_like_QMARK_ = function(a) {
  if(cljs.core.truth_(a)) {
    var b = a.length;
    return cljs.core.truth_(b) ? (b = a.indexOf, cljs.core.truth_(b) ? b : a.item) : b
  }
  return a
};
domina.normalize_seq = function(a) {
  return null === a ? cljs.core.List.EMPTY : cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(a)) {
        var b = a.cljs$core$ISeqable$;
        return cljs.core.truth_(b) ? (b = a.hasOwnProperty, cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISeqable$")) : b) : b
      }
      return a
    }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISeqable, a)
  }()) ? cljs.core.seq(a) : cljs.core.truth_(domina.array_like_QMARK_(a)) ? domina.lazy_nodelist(a) : cljs.core.cons(a)
};
domina.DomContent._ = !0;
domina.nodes._ = function(a) {
  return null === a ? cljs.core.List.EMPTY : cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(a)) {
        var b = a.cljs$core$ISeqable$;
        return cljs.core.truth_(b) ? (b = a.hasOwnProperty, cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISeqable$")) : b) : b
      }
      return a
    }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISeqable, a)
  }()) ? cljs.core.seq(a) : cljs.core.truth_(domina.array_like_QMARK_(a)) ? domina.lazy_nodelist(a) : cljs.core.cons(a)
};
domina.single_node._ = function(a) {
  return null === a ? null : cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(a)) {
        var b = a.cljs$core$ISeqable$;
        return cljs.core.truth_(b) ? (b = a.hasOwnProperty, cljs.core.truth_(b) ? cljs.core.not(a.hasOwnProperty("cljs$core$ISeqable$")) : b) : b
      }
      return a
    }()) ? !0 : cljs.core.type_satisfies_(cljs.core.ISeqable, a)
  }()) ? cljs.core.first(a) : cljs.core.truth_(domina.array_like_QMARK_(a)) ? a.item(0) : a
};
domina.DomContent.string = !0;
domina.nodes.string = function(a) {
  return cljs.core.doall.__1(domina.nodes(domina.string_to_dom(a)))
};
domina.single_node.string = function(a) {
  return domina.single_node(domina.string_to_dom(a))
};
if(cljs.core.truth_("undefined" != typeof NodeList)) {
  NodeList.prototype.cljs$core$ISeqable$ = !0, NodeList.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
    return domina.lazy_nodelist(a)
  }, NodeList.prototype.cljs$core$IIndexed$ = !0, NodeList.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
    return a.item(b)
  }, NodeList.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
    return a.length <= b ? c : cljs.core.nth.__2(a, b)
  }, NodeList.prototype.cljs$core$ICounted$ = !0, NodeList.prototype.cljs$core$ICounted$_count__1 = function(a) {
    return a.length
  }
}
if(cljs.core.truth_("undefined" != typeof StaticNodeList)) {
  StaticNodeList.prototype.cljs$core$ISeqable$ = !0, StaticNodeList.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
    return domina.lazy_nodelist(a)
  }, StaticNodeList.prototype.cljs$core$IIndexed$ = !0, StaticNodeList.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
    return a.item(b)
  }, StaticNodeList.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
    return a.length <= b ? c : cljs.core.nth.__2(a, b)
  }, StaticNodeList.prototype.cljs$core$ICounted$ = !0, StaticNodeList.prototype.cljs$core$ICounted$_count__1 = function(a) {
    return a.length
  }
}
if(cljs.core.truth_("undefined" != typeof HTMLCollection)) {
  HTMLCollection.prototype.cljs$core$ISeqable$ = !0, HTMLCollection.prototype.cljs$core$ISeqable$_seq__1 = function(a) {
    return domina.lazy_nodelist(a)
  }, HTMLCollection.prototype.cljs$core$IIndexed$ = !0, HTMLCollection.prototype.cljs$core$IIndexed$_nth__2 = function(a, b) {
    return a.item(b)
  }, HTMLCollection.prototype.cljs$core$IIndexed$_nth__3 = function(a, b, c) {
    return a.length <= b ? c : cljs.core.nth.__2(a, b)
  }, HTMLCollection.prototype.cljs$core$ICounted$ = !0, HTMLCollection.prototype.cljs$core$ICounted$_count__1 = function(a) {
    return a.length
  }
}
;domina.events = {};
domina.events.Event = {};
domina.events.prevent_default = function(a) {
  if(a ? a.domina$events$Event$prevent_default__1 : a) {
    a = a.domina$events$Event$prevent_default__1(a)
  }else {
    var b;
    b = domina.events.prevent_default[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.prevent_default._, !b)) {
      throw cljs.core.missing_protocol("Event.prevent-default", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.stop_propagation = function(a) {
  if(a ? a.domina$events$Event$stop_propagation__1 : a) {
    a = a.domina$events$Event$stop_propagation__1(a)
  }else {
    var b;
    b = domina.events.stop_propagation[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.stop_propagation._, !b)) {
      throw cljs.core.missing_protocol("Event.stop-propagation", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.target = function(a) {
  if(a ? a.domina$events$Event$target__1 : a) {
    a = a.domina$events$Event$target__1(a)
  }else {
    var b;
    b = domina.events.target[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.target._, !b)) {
      throw cljs.core.missing_protocol("Event.target", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.current_target = function(a) {
  if(a ? a.domina$events$Event$current_target__1 : a) {
    a = a.domina$events$Event$current_target__1(a)
  }else {
    var b;
    b = domina.events.current_target[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.current_target._, !b)) {
      throw cljs.core.missing_protocol("Event.current-target", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.event_type = function(a) {
  if(a ? a.domina$events$Event$event_type__1 : a) {
    a = a.domina$events$Event$event_type__1(a)
  }else {
    var b;
    b = domina.events.event_type[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.event_type._, !b)) {
      throw cljs.core.missing_protocol("Event.event-type", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.raw_event = function(a) {
  if(a ? a.domina$events$Event$raw_event__1 : a) {
    a = a.domina$events$Event$raw_event__1(a)
  }else {
    var b;
    b = domina.events.raw_event[goog.typeOf.call(null, a)];
    if(!b && (b = domina.events.raw_event._, !b)) {
      throw cljs.core.missing_protocol("Event.raw-event", a);
    }
    a = b.call(null, a)
  }
  return a
};
domina.events.builtin_events = cljs.core.set(cljs.core.map.__2(cljs.core.keyword, goog.object.getValues.call(null, goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = function(a) {
  return cljs.core.contains_QMARK_(domina.events.builtin_events, a) ? cljs.core.name(a) : a
};
domina.events.create_listener_function = function create_listener_function(b) {
  return function(c) {
    b.call(null, function() {
      if(void 0 === domina.events.t19566) {
        domina.events.t19566 = function(b, c, f, g) {
          this.evt = b;
          this.f = c;
          this.create_listener_function = f;
          this.__meta__321__auto__ = g
        }, domina.events.t19566.cljs$core$IPrintable$_pr_seq = function() {
          return cljs.core.list("domina.events.t19566")
        }, domina.events.t19566.prototype.cljs$core$ILookup$ = !0, domina.events.t19566.prototype.cljs$core$ILookup$_lookup__2 = function(b, c) {
          var f = this.evt[c];
          return cljs.core.truth_(f) ? f : this.evt[cljs.core.name(c)]
        }, domina.events.t19566.prototype.cljs$core$ILookup$_lookup__3 = function(b, c, f) {
          b = cljs.core._lookup.__2(b, c);
          return cljs.core.truth_(b) ? b : f
        }, domina.events.t19566.prototype.domina$events$Event$ = !0, domina.events.t19566.prototype.domina$events$Event$prevent_default__1 = function() {
          return this.evt.preventDefault()
        }, domina.events.t19566.prototype.domina$events$Event$stop_propagation__1 = function() {
          return this.evt.stopPropagation()
        }, domina.events.t19566.prototype.domina$events$Event$target__1 = function() {
          return this.evt.target
        }, domina.events.t19566.prototype.domina$events$Event$current_target__1 = function() {
          return this.evt.currentTarget
        }, domina.events.t19566.prototype.domina$events$Event$event_type__1 = function() {
          return this.evt.type
        }, domina.events.t19566.prototype.domina$events$Event$raw_event__1 = function() {
          return this.evt
        }, domina.events.t19566.prototype.cljs$core$IMeta$ = !0, domina.events.t19566.prototype.cljs$core$IMeta$_meta__1 = function() {
          return this.__meta__321__auto__
        }, domina.events.t19566.prototype.cljs$core$IWithMeta$ = !0, domina.events.t19566.prototype.cljs$core$IWithMeta$_with_meta__2 = function(b, c) {
          return new domina.events.t19566(this.evt, this.f, this.create_listener_function, c)
        }
      }
      return new domina.events.t19566(c, b, create_listener_function, null)
    }());
    return!0
  }
};
domina.events.listen_internal_BANG_ = function(a, b, c, d, e) {
  var f = domina.events.create_listener_function(c), g = domina.events.find_builtin_type(b);
  return cljs.core.doall.__1(function() {
    return function i(a) {
      return new cljs.core.LazySeq(null, !1, function() {
        for(;;) {
          if(cljs.core.truth_(cljs.core.seq(a))) {
            var b = cljs.core.first(a);
            return cljs.core.cons(cljs.core.truth_(e) ? goog.events.listenOnce.call(null, b, g, f, d) : goog.events.listen.call(null, b, g, f, d), i.call(null, cljs.core.rest(a)))
          }
          return null
        }
      })
    }.call(null, domina.nodes(a))
  }())
};
domina.events.listen_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, domina.events.root_element, b, c)
  }, c = function(a, b, c) {
    return domina.events.listen_internal_BANG_(a, b, c, !1, !1)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.events.capture_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, domina.events.root_element, b, c)
  }, c = function(a, b, c) {
    return domina.events.listen_internal_BANG_(a, b, c, !0, !1)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.events.listen_once_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, domina.events.root_element, b, c)
  }, c = function(a, b, c) {
    return domina.events.listen_internal_BANG_(a, b, c, !1, !0)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.events.capture_once_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, domina.events.root_element, b, c)
  }, c = function(a, b, c) {
    return domina.events.listen_internal_BANG_(a, b, c, !0, !0)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.events.unlisten_BANG_ = function() {
  var a = null, b = function() {
    return a.call(null, domina.events.root_element)
  }, c = function(a) {
    var b = cljs.core.seq(domina.nodes(a));
    if(b) {
      for(a = cljs.core.first(b);;) {
        if(goog.events.removeAll.call(null, a), a = cljs.core.next(b)) {
          b = a, a = cljs.core.first(b)
        }else {
          return null
        }
      }
    }else {
      return null
    }
  }, d = function(a, b) {
    var c = domina.events.find_builtin_type(b);
    return goog.events.removeAll.call(null, domina.events.node, c)
  }, a = function(a, f) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__0 = b;
  a.__1 = c;
  a.__2 = d;
  return a
}();
domina.events.ancestor_nodes = function() {
  var a = null, b = function(b) {
    return a.call(null, b, cljs.core.cons(b))
  }, c = function(a, b) {
    for(;;) {
      var c = a.parentNode;
      if(cljs.core.truth_(c)) {
        var g = c, c = g, g = cljs.core.cons(g, b), a = c, b = g
      }else {
        return b
      }
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
domina.events.dispatch_browser_BANG_ = function(a, b) {
  var c = domina.events.ancestor_nodes.__1(domina.single_node(a)), d = cljs.core.seq(c);
  if(cljs.core.truth_(d)) {
    for(var e = cljs.core.first(d);;) {
      if(!cljs.core.truth_(e.propagationStopped)) {
        b.currentTarget = e, goog.events.fireListeners.call(null, e, b.type, !0, b)
      }
      e = cljs.core.next(d);
      if(cljs.core.truth_(e)) {
        d = e, e = cljs.core.first(d)
      }else {
        break
      }
    }
  }
  e = cljs.core.seq(cljs.core.reverse(c));
  if(cljs.core.truth_(e)) {
    for(c = cljs.core.first(e);;) {
      if(!cljs.core.truth_(c.propagationStopped)) {
        b.currentTarget = c, goog.events.fireListeners.call(null, c, b.type, !1, b)
      }
      c = cljs.core.next(e);
      if(cljs.core.truth_(c)) {
        e = c, c = cljs.core.first(e)
      }else {
        break
      }
    }
  }
  return b.returnValue_
};
domina.events.dispatch_event_target_BANG_ = function(a, b) {
  return goog.events.dispatchEvent.call(null, a, b)
};
domina.events.is_event_target_QMARK_ = function(a) {
  var b = a.getParentEventTarget;
  return cljs.core.truth_(b) ? a.dispatchEvent : b
};
domina.events.dispatch_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, domina.events.root_element, b, c)
  }, c = function(a, b, c) {
    b = new goog.events.Event(domina.events.find_builtin_type(b));
    c = cljs.core.seq(c);
    if(cljs.core.truth_(c)) {
      var g = cljs.core.first(c);
      cljs.core.nth.__3(g, 0, null);
      for(cljs.core.nth.__3(g, 1, null);;) {
        var h = g, g = cljs.core.nth.__3(h, 0, null), h = cljs.core.nth.__3(h, 1, null);
        b[g] = h;
        c = cljs.core.next(c);
        if(cljs.core.truth_(c)) {
          g = c, c = cljs.core.first(g), h = g, g = c, c = h
        }else {
          break
        }
      }
    }
    return cljs.core.truth_(domina.events.is_event_target_QMARK_(a)) ? domina.events.dispatch_event_target_BANG_(a, b) : domina.events.dispatch_browser_BANG_(a, b)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__2 = b;
  a.__3 = c;
  return a
}();
domina.events.unlisten_by_key_BANG_ = function(a) {
  return goog.events.unlistenByKey.call(null, a)
};
domina.events.get_listeners = function(a, b) {
  var c = domina.events.find_builtin_type(b);
  return cljs.core.mapcat.__2(function(a) {
    return goog.events.getListeners.call(null, a, c, !1)
  }, domina.nodes(a))
};
domina.xpath = {};
domina.xpath.select_node_STAR_ = function(a, b, c, d) {
  var e = goog.dom.getOwnerDocument.call(null, b);
  if(cljs.core.truth_(function() {
    var a = b.selectSingleNode;
    return cljs.core.truth_(a) ? e.setProperty : a
  }())) {
    return e.setProperty("SelectionLanguage", "XPath"), c.call(null, b, a)
  }
  if(cljs.core.truth_(e.evaluate)) {
    return d.call(null, null, e, b, a)
  }
  throw Error("Could not find XPath support in this browser.");
};
domina.xpath.select_node = function(a, b) {
  return domina.xpath.select_node_STAR_(a, b, function(a, b) {
    return a.selectSingleNode(b)
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  })
};
domina.xpath.select_nodes = function(a, b) {
  return domina.xpath.select_node_STAR_(a, b, function(a, b) {
    return a.selectNodes(b)
  }, function(a, b, e, f) {
    for(var a = b.evaluate(f, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), b = a.snapshotLength, e = 0, g = null;;) {
      if(e < b) {
        f = e + 1, g = cljs.core.cons(a.snapshotItem(e), g), e = f
      }else {
        return g
      }
    }
  })
};
domina.xpath.root_element = function() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.xpath.xpath = function() {
  var a = null, b = function(b) {
    return a.call(null, domina.xpath.root_element(), b)
  }, c = function(b, c) {
    if(void 0 === domina.xpath.t19921) {
      domina.xpath.t19921 = function(a, b, c, d) {
        this.expr = a;
        this.base = b;
        this.xpath = c;
        this.__meta__321__auto__ = d
      }, domina.xpath.t19921.cljs$core$IPrintable$_pr_seq = function() {
        return cljs.core.list("domina.xpath.t19921")
      }, domina.xpath.t19921.prototype.domina$DomContent$ = !0, domina.xpath.t19921.prototype.domina$DomContent$nodes__1 = function() {
        return cljs.core.mapcat.__2(cljs.core.partial.__2(domina.xpath.select_nodes, this.expr), domina.nodes(this.base))
      }, domina.xpath.t19921.prototype.domina$DomContent$single_node__1 = function() {
        return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(cljs.core.partial.__2(domina.xpath.select_node, this.expr), domina.nodes(this.base))))
      }, domina.xpath.t19921.prototype.cljs$core$IMeta$ = !0, domina.xpath.t19921.prototype.cljs$core$IMeta$_meta__1 = function() {
        return this.__meta__321__auto__
      }, domina.xpath.t19921.prototype.cljs$core$IWithMeta$ = !0, domina.xpath.t19921.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
        return new domina.xpath.t19921(this.expr, this.base, this.xpath, b)
      }
    }
    return new domina.xpath.t19921(c, b, a, null)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
goog.functions = {};
goog.functions.constant = function(a) {
  return function() {
    return a
  }
};
goog.functions.FALSE = goog.functions.constant(!1);
goog.functions.TRUE = goog.functions.constant(!0);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function(a) {
  return a
};
goog.functions.error = function(a) {
  return function() {
    throw Error(a);
  }
};
goog.functions.lock = function(a) {
  return function() {
    return a.call(this)
  }
};
goog.functions.withReturnValue = function(a, b) {
  return goog.functions.sequence(a, goog.functions.constant(b))
};
goog.functions.compose = function(a) {
  var b = arguments, c = b.length;
  return function() {
    var a;
    c && (a = b[c - 1].apply(this, arguments));
    for(var e = c - 2;0 <= e;e--) {
      a = b[e].call(this, a)
    }
    return a
  }
};
goog.functions.sequence = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments)
    }
    return a
  }
};
goog.functions.and = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a = 0;a < c;a++) {
      if(!b[a].apply(this, arguments)) {
        return!1
      }
    }
    return!0
  }
};
goog.functions.or = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a = 0;a < c;a++) {
      if(b[a].apply(this, arguments)) {
        return!0
      }
    }
    return!1
  }
};
goog.functions.not = function(a) {
  return function() {
    return!a.apply(this, arguments)
  }
};
goog.functions.create = function(a, b) {
  var c = function() {
  };
  c.prototype = a.prototype;
  c = new c;
  a.apply(c, Array.prototype.slice.call(arguments, 1));
  return c
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
goog.dom.query = function() {
  function a(a, b) {
    var c = b || [];
    a && c.push(a);
    return c
  }
  var b = goog.userAgent.WEBKIT && "BackCompat" == goog.dom.getDocument().compatMode, c = goog.dom.getDocument().firstChild.children ? "children" : "childNodes", d = !1, e = function(a) {
    for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", b = function(b, c) {
      return goog.string.trim(a.slice(b, c))
    }, c = [], e = -1, f = -1, g = -1, h = -1, i = -1, j = -1, k = -1, m = "", l = "", o, n = 0, r = a.length, t = null, p = null, s = function() {
      if(0 <= j) {
        t.id = b(j, n).replace(/\\/g, ""), j = -1
      }
      if(0 <= k) {
        var a = k == n ? null : b(k, n);
        0 > ">~+".indexOf(a) ? t.tag = a : t.oper = a;
        k = -1
      }
      0 <= i && (t.classes.push(b(i + 1, n).replace(/\\/g, "")), i = -1)
    };m = l, l = a.charAt(n), n < r;n++) {
      if("\\" != m) {
        if(t || (o = n, t = {query:null, pseudos:[], attrs:[], classes:[], tag:null, oper:null, id:null, getTag:function() {
          return d ? this.otag : this.tag
        }}, k = n), 0 <= e) {
          if("]" == l) {
            p.attr ? p.matchFor = b(g || e + 1, n) : p.attr = b(e + 1, n);
            if((e = p.matchFor) && ('"' == e.charAt(0) || "'" == e.charAt(0))) {
              p.matchFor = e.slice(1, -1)
            }
            t.attrs.push(p);
            p = null;
            e = g = -1
          }else {
            if("=" == l) {
              g = 0 <= "|~^$*".indexOf(m) ? m : "", p.type = g + l, p.attr = b(e + 1, n - g.length), g = n + 1
            }
          }
        }else {
          if(0 <= f) {
            if(")" == l) {
              if(0 <= h) {
                p.value = b(f + 1, n)
              }
              h = f = -1
            }
          }else {
            if("#" == l) {
              s(), j = n + 1
            }else {
              if("." == l) {
                s(), i = n
              }else {
                if(":" == l) {
                  s(), h = n
                }else {
                  if("[" == l) {
                    s(), e = n, p = {}
                  }else {
                    if("(" == l) {
                      0 <= h && (p = {name:b(h + 1, n), value:null}, t.pseudos.push(p)), f = n
                    }else {
                      if(" " == l && m != l) {
                        s();
                        0 <= h && t.pseudos.push({name:b(h + 1, n)});
                        t.loops = t.pseudos.length || t.attrs.length || t.classes.length;
                        t.oquery = t.query = b(o, n);
                        t.otag = t.tag = t.oper ? null : t.tag || "*";
                        if(t.tag) {
                          t.tag = t.tag.toUpperCase()
                        }
                        if(c.length && c[c.length - 1].oper) {
                          t.infixOper = c.pop(), t.query = t.infixOper.query + " " + t.query
                        }
                        c.push(t);
                        t = null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return c
  }, f = function(a, b) {
    return!a ? b : !b ? a : function() {
      return a.apply(window, arguments) && b.apply(window, arguments)
    }
  }, g = function(a) {
    return 1 == a.nodeType
  }, h = function(a, b) {
    return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (d ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
  }, i = {"*=":function(a, b) {
    return function(c) {
      return 0 <= h(c, a).indexOf(b)
    }
  }, "^=":function(a, b) {
    return function(c) {
      return 0 == h(c, a).indexOf(b)
    }
  }, "$=":function(a, b) {
    return function(c) {
      c = " " + h(c, a);
      return c.lastIndexOf(b) == c.length - b.length
    }
  }, "~=":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + h(b, a) + " ").indexOf(c)
    }
  }, "|=":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + h(c, a);
      return c == b || 0 == c.indexOf(b + "-")
    }
  }, "=":function(a, b) {
    return function(c) {
      return h(c, a) == b
    }
  }}, j = "undefined" == typeof goog.dom.getDocument().firstChild.nextElementSibling, k = !j ? "nextElementSibling" : "nextSibling", l = !j ? "previousElementSibling" : "previousSibling", m = j ? g : goog.functions.TRUE, o = function(a) {
    for(;a = a[l];) {
      if(m(a)) {
        return!1
      }
    }
    return!0
  }, n = function(a) {
    for(;a = a[k];) {
      if(m(a)) {
        return!1
      }
    }
    return!0
  }, r = function(a) {
    var b = a.parentNode, d = 0, e = b[c], f = a._i || -1, g = b._l || -1;
    if(!e) {
      return-1
    }
    e = e.length;
    if(g == e && 0 <= f && 0 <= g) {
      return f
    }
    b._l = e;
    f = -1;
    for(b = b.firstElementChild || b.firstChild;b;b = b[k]) {
      if(m(b)) {
        b._i = ++d, a === b && (f = d)
      }
    }
    return f
  }, z = function(a) {
    return!(r(a) % 2)
  }, M = function(a) {
    return r(a) % 2
  }, E = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked
    }
  }, "first-child":function() {
    return o
  }, "last-child":function() {
    return n
  }, "only-child":function() {
    return function(a) {
      return!o(a) || !n(a) ? !1 : !0
    }
  }, empty:function() {
    return function(a) {
      for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
        var c = b[a].nodeType;
        if(1 === c || 3 == c) {
          return!1
        }
      }
      return!0
    }
  }, contains:function(a, b) {
    var c = b.charAt(0);
    if('"' == c || "'" == c) {
      b = b.slice(1, -1)
    }
    return function(a) {
      return 0 <= a.innerHTML.indexOf(b)
    }
  }, not:function(a, b) {
    var c = e(b)[0], d = {el:1};
    if("*" != c.tag) {
      d.tag = 1
    }
    if(!c.classes.length) {
      d.classes = 1
    }
    var f = F(c, d);
    return function(a) {
      return!f(a)
    }
  }, "nth-child":function(a, b) {
    if("odd" == b) {
      return M
    }
    if("even" == b) {
      return z
    }
    if(-1 != b.indexOf("n")) {
      var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, e = c[1] ? parseInt(c[1], 10) : 0, f = 0, g = -1;
      0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (g = e, e %= d));
      if(0 < d) {
        return function(a) {
          a = r(a);
          return a >= f && (0 > g || a <= g) && a % d == e
        }
      }
      b = e
    }
    var h = parseInt(b, 10);
    return function(a) {
      return r(a) == h
    }
  }}, D = goog.userAgent.IE ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return d ? c.getAttribute(a) : c[a] || c[b]
    }
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a)
    }
  }, F = function(a, b) {
    if(!a) {
      return goog.functions.TRUE
    }
    var b = b || {}, c = null;
    b.el || (c = f(c, g));
    b.tag || "*" != a.tag && (c = f(c, function(b) {
      return b && b.tagName == a.getTag()
    }));
    b.classes || goog.array.forEach(a.classes, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = f(c, function(a) {
        return d.test(a.className)
      });
      c.count = b
    });
    b.pseudos || goog.array.forEach(a.pseudos, function(a) {
      var b = a.name;
      E[b] && (c = f(c, E[b](b, a.value)))
    });
    b.attrs || goog.array.forEach(a.attrs, function(a) {
      var b, d = a.attr;
      a.type && i[a.type] ? b = i[a.type](d, a.matchFor) : d.length && (b = D(d));
      b && (c = f(c, b))
    });
    b.id || a.id && (c = f(c, function(b) {
      return!!b && b.id == a.id
    }));
    if(!c && !("default" in b)) {
      c = goog.functions.TRUE
    }
    return c
  }, N = function(a) {
    return function(b, c, d) {
      for(;b = b[k];) {
        if(!j || g(b)) {
          (!d || G(b, d)) && a(b) && c.push(b);
          break
        }
      }
      return c
    }
  }, Q = function(a) {
    return function(b, c, d) {
      for(b = b[k];b;) {
        if(m(b)) {
          if(d && !G(b, d)) {
            break
          }
          a(b) && c.push(b)
        }
        b = b[k]
      }
      return c
    }
  }, p = function(a) {
    a = a || goog.functions.TRUE;
    return function(b, d, e) {
      for(var f = 0, g = b[c];b = g[f++];) {
        m(b) && (!e || G(b, e)) && a(b, f) && d.push(b)
      }
      return d
    }
  }, s = {}, v = function(c) {
    var d = s[c.query];
    if(d) {
      return d
    }
    var e = c.infixOper, e = e ? e.oper : "", f = F(c, {el:1}), g = "*" == c.tag, h = goog.dom.getDocument().getElementsByClassName;
    if(e) {
      h = {el:1};
      if(g) {
        h.tag = 1
      }
      f = F(c, h);
      "+" == e ? d = N(f) : "~" == e ? d = Q(f) : ">" == e && (d = p(f))
    }else {
      if(c.id) {
        f = !c.loops && g ? goog.functions.TRUE : F(c, {el:1, id:1}), d = function(b, d) {
          var e = goog.dom.getDomHelper(b).getElement(c.id);
          if(e && f(e)) {
            if(9 == b.nodeType) {
              return a(e, d)
            }
            for(var g = e.parentNode;g && !(g == b);) {
              g = g.parentNode
            }
            if(g) {
              return a(e, d)
            }
          }
        }
      }else {
        if(h && /\{\s*\[native code\]\s*\}/.test("" + h) && c.classes.length && !b) {
          var f = F(c, {el:1, classes:1, id:1}), i = c.classes.join(" "), d = function(b, c) {
            for(var d = a(0, c), e, g = 0, h = b.getElementsByClassName(i);e = h[g++];) {
              f(e, b) && d.push(e)
            }
            return d
          }
        }else {
          !g && !c.loops ? d = function(b, d) {
            for(var e = a(0, d), f, g = 0, h = b.getElementsByTagName(c.getTag());f = h[g++];) {
              e.push(f)
            }
            return e
          } : (f = F(c, {el:1, tag:1, id:1}), d = function(b, d) {
            for(var e = a(0, d), g, h = 0, i = b.getElementsByTagName(c.getTag());g = i[h++];) {
              f(g, b) && e.push(g)
            }
            return e
          })
        }
      }
    }
    return s[c.query] = d
  }, x = {}, y = {}, A = function(b) {
    var c = e(goog.string.trim(b));
    if(1 == c.length) {
      var d = v(c[0]);
      return function(a) {
        if(a = d(a, [])) {
          a.nozip = !0
        }
        return a
      }
    }
    return function(b) {
      for(var b = a(b), d, e, f = c.length, g, h, i = 0;i < f;i++) {
        h = [];
        d = c[i];
        e = b.length - 1;
        if(0 < e) {
          g = {}, h.nozip = !0
        }
        e = v(d);
        for(var j = 0;d = b[j];j++) {
          e(d, h, g)
        }
        if(!h.length) {
          break
        }
        b = h
      }
      return h
    }
  }, B = !!goog.dom.getDocument().querySelectorAll && (!goog.userAgent.WEBKIT || goog.userAgent.isVersion("526")), C = function(a, c) {
    if(B) {
      var d = y[a];
      if(d && !c) {
        return d
      }
    }
    if(d = x[a]) {
      return d
    }
    var d = a.charAt(0), e = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && e && (c = !0);
    if(B && !c && -1 == ">~+".indexOf(d) && (!goog.userAgent.IE || -1 == a.indexOf(":")) && !(b && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
      var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
      return y[a] = function(b) {
        try {
          if(!(9 == b.nodeType || e)) {
            throw"";
          }
          var c = b.querySelectorAll(f);
          goog.userAgent.IE ? c.commentStrip = !0 : c.nozip = !0;
          return c
        }catch(d) {
          return C(a, !0)(b)
        }
      }
    }
    var g = a.split(/\s*,\s*/);
    return x[a] = 2 > g.length ? A(a) : function(a) {
      for(var b = 0, c = [], d;d = g[b++];) {
        c = c.concat(A(d)(a))
      }
      return c
    }
  }, w = 0, H = goog.userAgent.IE ? function(a) {
    return d ? a.getAttribute("_uid") || a.setAttribute("_uid", ++w) || w : a.uniqueID
  } : function(a) {
    return a._uid || (a._uid = ++w)
  }, G = function(a, b) {
    if(!b) {
      return 1
    }
    var c = H(a);
    return!b[c] ? b[c] = 1 : 0
  }, I = function(a) {
    if(a && a.nozip) {
      return a
    }
    var b = [];
    if(!a || !a.length) {
      return b
    }
    a[0] && b.push(a[0]);
    if(2 > a.length) {
      return b
    }
    w++;
    if(goog.userAgent.IE && d) {
      var c = w + "";
      a[0].setAttribute("_zipIdx", c);
      for(var e = 1, f;f = a[e];e++) {
        a[e].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
      }
    }else {
      if(goog.userAgent.IE && a.commentStrip) {
        try {
          for(e = 1;f = a[e];e++) {
            g(f) && b.push(f)
          }
        }catch(h) {
        }
      }else {
        a[0] && (a[0]._zipIdx = w);
        for(e = 1;f = a[e];e++) {
          a[e]._zipIdx != w && b.push(f), f._zipIdx = w
        }
      }
    }
    return b
  }, J = function(a, b) {
    if(!a) {
      return[]
    }
    if(a.constructor == Array) {
      return a
    }
    if(!goog.isString(a)) {
      return[a]
    }
    if(goog.isString(b) && (b = goog.dom.getElement(b), !b)) {
      return[]
    }
    var b = b || goog.dom.getDocument(), c = b.ownerDocument || b.documentElement;
    d = b.contentType && "application/xml" == b.contentType || goog.userAgent.OPERA && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (goog.userAgent.IE ? c.xml : b.xmlVersion || c.xmlVersion);
    return(c = C(a)(b)) && c.nozip ? c : I(c)
  };
  J.pseudos = E;
  return J
}();
goog.exportSymbol("goog.dom.query", goog.dom.query);
goog.exportSymbol("goog.dom.query.pseudos", goog.dom.query.pseudos);
domina.css = {};
domina.css.root_element = function() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.css.sel = function() {
  var a = null, b = function(b) {
    return a.call(null, domina.css.root_element(), b)
  }, c = function(b, c) {
    if(void 0 === domina.css.t21374) {
      domina.css.t21374 = function(a, b, c, d) {
        this.expr = a;
        this.base = b;
        this.sel = c;
        this.__meta__321__auto__ = d
      }, domina.css.t21374.cljs$core$IPrintable$_pr_seq = function() {
        return cljs.core.list("domina.css.t21374")
      }, domina.css.t21374.prototype.domina$DomContent$ = !0, domina.css.t21374.prototype.domina$DomContent$nodes__1 = function() {
        var a = this;
        return cljs.core.mapcat.__2(function(b) {
          return domina.normalize_seq(goog.dom.query.call(null, a.expr, b))
        }, domina.nodes(a.base))
      }, domina.css.t21374.prototype.domina$DomContent$single_node__1 = function() {
        var a = this;
        return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.mapcat.__2(function(b) {
          return domina.normalize_seq(goog.dom.query.call(null, a.expr, b))
        }, domina.nodes(a.base))))
      }, domina.css.t21374.prototype.cljs$core$IMeta$ = !0, domina.css.t21374.prototype.cljs$core$IMeta$_meta__1 = function() {
        return this.__meta__321__auto__
      }, domina.css.t21374.prototype.cljs$core$IWithMeta$ = !0, domina.css.t21374.prototype.cljs$core$IWithMeta$_with_meta__2 = function(a, b) {
        return new domina.css.t21374(this.expr, this.base, this.sel, b)
      }
    }
    return new domina.css.t21374(c, b, a, null)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.__1 = b;
  a.__2 = c;
  return a
}();
domina.test = {};
window.tryfn = function(a) {
  try {
    return a.call()
  }catch(b) {
    if("fail hard" == b) {
      throw b;
    }
    return b
  }
};
domina.test.tests = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
domina.test.add_test = function(a, b) {
  return cljs.core.swap_BANG_.__3(domina.test.tests, cljs.core.conj, cljs.core.PersistentVector.fromArray([a, b]))
};
domina.test.run_test = function(a) {
  return tryfn(a)
};
domina.test.run_named = function(a) {
  return cljs.core.map.__2(function(a) {
    var c = cljs.core.nth.__3(a, 0, null), a = cljs.core.nth.__3(a, 1, null);
    return cljs.core.PersistentVector.fromArray([c, domina.test.run_test(a)])
  }, cljs.core.filter(function(b) {
    var c = cljs.core.nth.__3(b, 0, null);
    cljs.core.nth.__3(b, 1, null);
    return cljs.core._EQ_.__2(c, a)
  }, cljs.core.deref(domina.test.tests)))
};
domina.test.run_tests = function() {
  return cljs.core.map.__2(function(a) {
    var b = cljs.core.nth.__3(a, 0, null), a = cljs.core.nth.__3(a, 1, null);
    return cljs.core.PersistentVector.fromArray([b, domina.test.run_test(a)])
  }, cljs.core.deref(domina.test.tests))
};
domina.test.reset = function() {
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/*"));
  return domina.events.unlisten_BANG_.call(null, domina.xpath.xpath.call(null, "//*"))
};
domina.test.standard_fixture = function() {
  return domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>")
};
domina.test.add_test("basic CSS selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.css.sel.__1("p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70)))));
});
domina.test.add_test("basic CSS selection (single node)", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core.not(null === domina.single_node.call(null, domina.css.sel.__1("p")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75)))));
});
domina.test.add_test("CSS selection with class specification", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.css.sel.__1(".d1"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80)))));
});
domina.test.add_test("a relative CSS selector", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__1(".d1"), "p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 85)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 86))), cljs.core.hash_map("\ufdd0'line", 85))), cljs.core.hash_map("\ufdd0'line", 
  85))), cljs.core.hash_map("\ufdd0'line", 85))), cljs.core.hash_map("\ufdd0'line", 85)))));
});
domina.test.add_test("extended CSS chaining", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.css.sel.__1("body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"), "div"), "p"), "span"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "body"), cljs.core.hash_map("\ufdd0'line", 92)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "div"), cljs.core.hash_map("\ufdd0'line", 93)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", 
  "p"), cljs.core.hash_map("\ufdd0'line", 94)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "span"), cljs.core.hash_map("\ufdd0'line", 95))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92)))));
});
domina.test.add_test("basic xpath selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102)))));
});
domina.test.add_test("basic xpath selection (single node)", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core.not(null === domina.single_node.call(null, domina.xpath.xpath.call(null, "//p")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107)))));
});
domina.test.add_test("xpath selection with class specification", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112)))));
});
domina.test.add_test("a relative xpath expression", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body/div[@class='d1']"), "p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 117)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "p"), cljs.core.hash_map("\ufdd0'line", 118))), cljs.core.hash_map("\ufdd0'line", 
  117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117)))));
});
domina.test.add_test("extended selection chaining", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body"), "./div"), "./p"), "./span"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body"), cljs.core.hash_map("\ufdd0'line", 124)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "./div"), cljs.core.hash_map("\ufdd0'line", 125)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", 
  "./p"), cljs.core.hash_map("\ufdd0'line", 126)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "./span"), cljs.core.hash_map("\ufdd0'line", 127))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124)))));
});
domina.test.add_test("advanced xpath", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[following-sibling::p[@class='p3']]"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[following-sibling::p[@class='p3']]"), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131)))));
});
domina.test.add_test("look up node by id", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.by_id.call(null, "id1"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "id1"), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136)))));
});
domina.test.add_test("look up node by id with context", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.css.sel.__1("body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"), "div"), "p"), "span"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "body"), cljs.core.hash_map("\ufdd0'line", 142)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "div"), cljs.core.hash_map("\ufdd0'line", 143)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", 
  "p"), cljs.core.hash_map("\ufdd0'line", 144)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "span"), cljs.core.hash_map("\ufdd0'line", 145))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142)))));
});
domina.test.add_test("look up nodes by class", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.by_class.call(null, "p3"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-class", "p3"), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150)))));
});
domina.test.add_test("child selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.children.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'children", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155)))));
});
domina.test.add_test("clone a single node", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.clone.call(null, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 
  160)))));
});
domina.test.add_test("clone multiple nodes", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.clone.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 
  165)))));
});
domina.test.add_test("append a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended1'>test</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171)))));
});
domina.test.add_test("append multiple children to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177)))));
});
domina.test.add_test("append a single child to multiple parents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "<span>!!</span>");
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span"), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184)))));
});
domina.test.add_test("append multiple children to multiple parents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "some <span class='foo'>more</span> text");
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span[@class='foo']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span[@class='foo']"), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191)))));
});
domina.test.add_test("prepend a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>2</div><div>3</div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  if(!cljs.core._EQ_.__2("1", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[1]")))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "1", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[1]"), cljs.core.hash_map("\ufdd0'line", 197))), cljs.core.hash_map("\ufdd0'line", 197))), cljs.core.hash_map("\ufdd0'line", 197)))));
  }
  if(!cljs.core._EQ_.__2("2", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[2]")))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "2", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[2]"), cljs.core.hash_map("\ufdd0'line", 198))), cljs.core.hash_map("\ufdd0'line", 198))), cljs.core.hash_map("\ufdd0'line", 198)))));
  }
  if(cljs.core._EQ_.__2("3", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[3]")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "3", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[3]"), cljs.core.hash_map("\ufdd0'line", 199))), cljs.core.hash_map("\ufdd0'line", 199))), cljs.core.hash_map("\ufdd0'line", 199)))));
});
domina.test.add_test("prepend a single child to multiple parents", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p>2</p></div><div><p>2</p></div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div"), "<p>1</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[text()='2']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[text()='2']"), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205)))));
});
domina.test.add_test("Insert a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  if(!cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']/p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='testInserts']/p"), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217)))));
  }
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/preceding-sibling::*"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/following-sibling::*"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219)))));
});
domina.test.add_test("Insert a single child to multiple parents", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert1'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert2'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  var a = cljs.core.seq(cljs.core.PersistentVector.fromArray([domina.xpath.xpath.call(null, "//div[@id='testInsert1']"), domina.xpath.xpath.call(null, "//div[@id='testInsert2']")]));
  if(cljs.core.truth_(a)) {
    for(var b = cljs.core.first(a);;) {
      if(!cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, b, "p"))))) {
        throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p"), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235)))));
      }
      if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, b, "p[@class='i2']/preceding-sibling::*"))))) {
        throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236)))));
      }
      if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, b, "p[@class='i2']/following-sibling::*"))))) {
        throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238)))));
      }
      b = cljs.core.next(a);
      if(cljs.core.truth_(b)) {
        a = b, b = cljs.core.first(a)
      }else {
        return null
      }
    }
  }else {
    return null
  }
});
domina.test.add_test("destroy a single node", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<p class='appended1'>app1</p>");
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246)))));
});
domina.test.add_test("destroy multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<p class='appended2'>app1</p><p class='appended2'>app2</p>");
  if(!cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended2']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.__1("//body/p[@class='appended2']"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended2']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254)))));
});
domina.test.add_test("detach and reattach a single node", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  var a = domina.detach_BANG_.call(null, domina.xpath.xpath.__1("//p[@class='p3']"));
  if(!cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//p[@class='p3']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"), a);
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//p[@class='p3']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262)))));
});
domina.test.add_test("detach and reattach multiple nodes", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  var a = domina.detach_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']/p"));
  if(!cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@class='d1']/p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"), a);
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@class='d1']/p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270)))));
});
domina.test.add_test("clear a node's contents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.destroy_children_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"));
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@class='d1']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276)))));
  }
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@class='d1']/*"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/*"), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277)))));
});
domina.test.add_test("insert-before! with a single reference and single new node", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before']"), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283)))));
});
domina.test.add_test("insert-before! with a single reference and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before1</p><p>before2</p>");
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 
    289)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 
  290)))));
});
domina.test.add_test("insert-before! with multiple reference nodes and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_before_BANG_.call(null, domina.nodes(domina.by_class.call(null, "ref")), "<p>before</p>");
  if(!cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297)))));
  }
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/preceding-sibling::p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298)))));
  }
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/preceding-sibling::p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299)))));
});
domina.test.add_test("insert-after! with a single reference and single new node", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes(domina.by_id("ref")), "<p>after</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after']"), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305)))));
});
domina.test.add_test("insert-after! with a single reference and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes(domina.by_id("ref")), "<p>after1</p><p>after2</p>");
  if(!cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 
    311)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 
  312)))));
});
domina.test.add_test("insert-after! with multiple reference nodes and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_after_BANG_.call(null, domina.nodes(domina.by_class("ref")), "<p>after</p>");
  if(!cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319)))));
  }
  if(!cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/following-sibling::p"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/following-sibling::p"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321)))));
});
domina.test.add_test("swap-content! with a single reference node and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"), "<p id='after'>fixed</p>");
  if(!cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='after']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='after']"), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328)))));
});
domina.test.add_test("swap-content! with a single reference node and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(!cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334)))));
  }
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335)))));
});
domina.test.add_test("swap-content! with multiple reference nodes and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='before'>TYPO-1</p></div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='before'>TYPO-2</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@class='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(!cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='before']"))))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='before']"), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342)))));
  }
  if(cljs.core._EQ_.__2(4, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 4, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343)))));
});
domina.test.add_test("can retrieve a css property value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), '<div style="background-color: maroon;">Test</div>');
  if(!cljs.core._EQ_.__2("maroon", domina.style(domina.xpath.xpath.__1("//div"), "background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 350)), "background-color"), cljs.core.hash_map("\ufdd0'line", 350))), cljs.core.hash_map("\ufdd0'line", 350)))));
  }
  if(!cljs.core._EQ_.__2("maroon", domina.style(domina.xpath.xpath.__1("//div"), "\ufdd0'background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 351)), "\ufdd0'background-color"), cljs.core.hash_map("\ufdd0'line", 351))), cljs.core.hash_map("\ufdd0'line", 351)))));
  }
  if(null === domina.style(domina.xpath.xpath.__1("//div"), "\ufdd0'no-such-style")) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 352)), "\ufdd0'no-such-style"), cljs.core.hash_map("\ufdd0'line", 352))), cljs.core.hash_map("\ufdd0'line", 352)))));
});
domina.test.add_test("can retrieve an HTML attribute value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), '<div height="42">Content!</div>');
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "height"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 357)), "height"), cljs.core.hash_map("\ufdd0'line", 357))), cljs.core.hash_map("\ufdd0'line", 357)))));
  }
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "\ufdd0'height"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 358)), "\ufdd0'height"), cljs.core.hash_map("\ufdd0'line", 358))), cljs.core.hash_map("\ufdd0'line", 358)))));
  }
  if(null === domina.attr(domina.xpath.xpath.__1("//div"), "\ufdd0'no-such-attr:c")) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 359)), "\ufdd0'no-such-attr:c"), cljs.core.hash_map("\ufdd0'line", 359))), cljs.core.hash_map("\ufdd0'line", 359)))));
});
domina.test.add_test("can set a css property on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div[1]"), "background-color", "red");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'background-color", "green");
  if(!cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 366)), "background-color"), cljs.core.hash_map("\ufdd0'line", 366))), cljs.core.hash_map("\ufdd0'line", 366)))));
  }
  if(cljs.core._EQ_.__2("green", domina.style(domina.xpath.xpath.__1("//div[2]"), "background-color"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "green", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 367)), "background-color"), cljs.core.hash_map("\ufdd0'line", 367))), cljs.core.hash_map("\ufdd0'line", 367)))));
});
domina.test.add_test("can set a css property on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "color", "red");
  if(!cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 373)), "color"), cljs.core.hash_map("\ufdd0'line", 373))), cljs.core.hash_map("\ufdd0'line", 373)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[2]"), "color"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 374)), "color"), cljs.core.hash_map("\ufdd0'line", 374))), cljs.core.hash_map("\ufdd0'line", 374)))));
});
domina.test.add_test("can set a html attribute on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[1]"), "width", 42);
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'width", 42);
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[1]"), "width"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 381)), "width"), cljs.core.hash_map("\ufdd0'line", 381))), cljs.core.hash_map("\ufdd0'line", 381)))));
  }
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[2]"), "width"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 382)), "width"), cljs.core.hash_map("\ufdd0'line", 382))), cljs.core.hash_map("\ufdd0'line", 382)))));
});
domina.test.add_test("can remove an html attribute from a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div width='42'>1</div><div width='42'>2</div>");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[1]"), "width");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'width");
  if(null !== domina.attr(domina.xpath.xpath.__1("//div[1]"), "width")) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 389)), "width"), cljs.core.hash_map("\ufdd0'line", 389))), cljs.core.hash_map("\ufdd0'line", 389)))));
  }
  if(null === domina.attr(domina.xpath.xpath.__1("//div[2]"), "width")) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 390)), "width"), cljs.core.hash_map("\ufdd0'line", 390))), cljs.core.hash_map("\ufdd0'line", 390)))));
});
domina.test.add_test("can remove an html attribute from multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div width='42'>1</div><div width='42'>2</div>");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div"), "width");
  if(null !== domina.attr(domina.xpath.xpath.__1("//div[1]"), "width")) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 396)), "width"), cljs.core.hash_map("\ufdd0'line", 396))), cljs.core.hash_map("\ufdd0'line", 396)))));
  }
  if(null === domina.attr(domina.xpath.xpath.__1("//div[2]"), "width")) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 397)), "width"), cljs.core.hash_map("\ufdd0'line", 397))), cljs.core.hash_map("\ufdd0'line", 397)))));
});
domina.test.add_test("can get multiple CSS styles from a single node.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "color", "red");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "background-color", "black");
  if(cljs.core._EQ_.__2(cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}), domina.styles(domina.xpath.xpath.__1("//div")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'color", "red", "\ufdd0'background-color", "black"), cljs.core.with_meta(cljs.core.list("\ufdd1'styles", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 405))), cljs.core.hash_map("\ufdd0'line", 405))), cljs.core.hash_map("\ufdd0'line", 404)))));
});
domina.test.add_test("can get multiple HTML attributes from a single node.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"), "width", 42);
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"), "height", 24);
  var a = domina.attrs(domina.xpath.xpath.__1("//div"));
  if(!cljs.core._EQ_.__2("42", "\ufdd0'width".call(null, a))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd0'width", "\ufdd1'attributes"), cljs.core.hash_map("\ufdd0'line", 413))), cljs.core.hash_map("\ufdd0'line", 413)))));
  }
  if(cljs.core._EQ_.__2("24", "\ufdd0'height".call(null, a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd0'height", "\ufdd1'attributes"), cljs.core.hash_map("\ufdd0'line", 414))), cljs.core.hash_map("\ufdd0'line", 414)))));
});
domina.test.add_test("can set multiple CSS styles on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(!cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div"), "background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 421)), "background-color"), cljs.core.hash_map("\ufdd0'line", 421))), cljs.core.hash_map("\ufdd0'line", 421)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div"), "color"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 422)), "color"), cljs.core.hash_map("\ufdd0'line", 422))), cljs.core.hash_map("\ufdd0'line", 422)))));
});
domina.test.add_test("can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(!cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div[1]"), "background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 429)), "background-color"), cljs.core.hash_map("\ufdd0'line", 429))), cljs.core.hash_map("\ufdd0'line", 429)))));
  }
  if(!cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 430)), "color"), cljs.core.hash_map("\ufdd0'line", 430))), cljs.core.hash_map("\ufdd0'line", 430)))));
  }
  if(!cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div[2]"), "background-color"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 431)), "background-color"), cljs.core.hash_map("\ufdd0'line", 431))), cljs.core.hash_map("\ufdd0'line", 431)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[2]"), "color"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 432)), "color"), cljs.core.hash_map("\ufdd0'line", 432))), cljs.core.hash_map("\ufdd0'line", 432)))));
});
domina.test.add_test("can set multiple HTML attributes on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "width"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 439)), "width"), cljs.core.hash_map("\ufdd0'line", 439))), cljs.core.hash_map("\ufdd0'line", 439)))));
  }
  if(cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div"), "height"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 440)), "height"), cljs.core.hash_map("\ufdd0'line", 440))), cljs.core.hash_map("\ufdd0'line", 440)))));
});
domina.test.add_test("can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[1]"), "width"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 447)), "width"), cljs.core.hash_map("\ufdd0'line", 447))), cljs.core.hash_map("\ufdd0'line", 447)))));
  }
  if(!cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div[1]"), "height"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 448)), "height"), cljs.core.hash_map("\ufdd0'line", 448))), cljs.core.hash_map("\ufdd0'line", 448)))));
  }
  if(!cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[2]"), "width"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 449)), "width"), cljs.core.hash_map("\ufdd0'line", 449))), cljs.core.hash_map("\ufdd0'line", 449)))));
  }
  if(cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div[2]"), "height"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 450)), "height"), cljs.core.hash_map("\ufdd0'line", 450))), cljs.core.hash_map("\ufdd0'line", 450)))));
});
domina.test.add_test("test the has-class? function", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1'>1</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class2'>2</div>");
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 456)), "class1"), cljs.core.hash_map("\ufdd0'line", 456))), cljs.core.hash_map("\ufdd0'line", 456)))));
  }
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 457)), "class2"), cljs.core.hash_map("\ufdd0'line", 457))), cljs.core.hash_map("\ufdd0'line", 457)))));
  }
  if(!cljs.core._EQ_.__2(!1, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !1, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 458)), "class2"), cljs.core.hash_map("\ufdd0'line", 458))), cljs.core.hash_map("\ufdd0'line", 458)))));
  }
  if(cljs.core._EQ_.__2(!1, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !1, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 459)), "class1"), cljs.core.hash_map("\ufdd0'line", 459))), cljs.core.hash_map("\ufdd0'line", 459)))));
});
domina.test.add_test("can add a CSS class to a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class2");
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 466)), "class1"), cljs.core.hash_map("\ufdd0'line", 466))), cljs.core.hash_map("\ufdd0'line", 466)))));
  }
  if(cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class2"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 467)), "class2"), cljs.core.hash_map("\ufdd0'line", 467))), cljs.core.hash_map("\ufdd0'line", 467)))));
});
domina.test.add_test("can add a CSS class to multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class2");
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 474)), "class1"), cljs.core.hash_map("\ufdd0'line", 474))), cljs.core.hash_map("\ufdd0'line", 474)))));
  }
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 475)), "class1"), cljs.core.hash_map("\ufdd0'line", 475))), cljs.core.hash_map("\ufdd0'line", 475)))));
  }
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 476)), "class2"), cljs.core.hash_map("\ufdd0'line", 476))), cljs.core.hash_map("\ufdd0'line", 476)))));
  }
  if(cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 477)), "class2"), cljs.core.hash_map("\ufdd0'line", 477))), cljs.core.hash_map("\ufdd0'line", 477)))));
});
domina.test.add_test("can remove a CSS class from a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2'>1</div>");
  domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  if(!cljs.core._EQ_.__2(!1, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !1, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 483)), "class1"), cljs.core.hash_map("\ufdd0'line", 483))), cljs.core.hash_map("\ufdd0'line", 483)))));
  }
  if(cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class2"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 484)), "class2"), cljs.core.hash_map("\ufdd0'line", 484))), cljs.core.hash_map("\ufdd0'line", 484)))));
});
domina.test.add_test("can remove a CSS class from a multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
  domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  if(!cljs.core._EQ_.__2(!1, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !1, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 490)), "class1"), cljs.core.hash_map("\ufdd0'line", 490))), cljs.core.hash_map("\ufdd0'line", 490)))));
  }
  if(!cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 491)), "class2"), cljs.core.hash_map("\ufdd0'line", 491))), cljs.core.hash_map("\ufdd0'line", 491)))));
  }
  if(!cljs.core._EQ_.__2(!1, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !1, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 492)), "class1"), cljs.core.hash_map("\ufdd0'line", 492))), cljs.core.hash_map("\ufdd0'line", 492)))));
  }
  if(cljs.core._EQ_.__2(!0, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", !0, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 493)), "class2"), cljs.core.hash_map("\ufdd0'line", 493))), cljs.core.hash_map("\ufdd0'line", 493)))));
});
domina.test.add_test("can get a list of all css classes for a node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2 class3'>1</div>");
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["class1", "class2", "class3"]), domina.classes(domina.xpath.xpath.__1("//div")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["class1", "class2", "class3"]), cljs.core.with_meta(cljs.core.list("\ufdd1'classes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 498))), cljs.core.hash_map("\ufdd0'line", 498))), cljs.core.hash_map("\ufdd0'line", 498)))));
});
domina.test.add_test("can retrieve the text value of a node with normalization.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p>\n\n   Some text.  \n  </p>");
  if(!cljs.core._EQ_.__2("Some text.", domina.text.__1(domina.xpath.xpath.__1("//p")))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 503))), cljs.core.hash_map("\ufdd0'line", 503))), cljs.core.hash_map("\ufdd0'line", 503)))));
  }
  if(cljs.core._EQ_.__2("Some text.", domina.text.__2(domina.xpath.xpath.__1("//p"), !0))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 504)), !0), cljs.core.hash_map("\ufdd0'line", 504))), cljs.core.hash_map("\ufdd0'line", 504)))));
});
domina.test.add_test("can retrieve the text value of a node without normalization.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p>\n\n   Some text.  \n  </p>");
  if(cljs.core._EQ_.__2("\n\n   Some text.  \n  ", domina.text.__2(domina.xpath.xpath.__1("//p"), !1))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\n\n   Some text.  \n  ", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 510)), !1), cljs.core.hash_map("\ufdd0'line", 510))), cljs.core.hash_map("\ufdd0'line", 510)))));
});
domina.test.add_test("can set text on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p></p>");
  domina.set_text_BANG_(domina.xpath.xpath.__1("//p"), "Hello world!");
  if(cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 516))), cljs.core.hash_map("\ufdd0'line", 516))), cljs.core.hash_map("\ufdd0'line", 516)))));
});
domina.test.add_test("can set text on a multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p></p><p></p>");
  domina.set_text_BANG_(domina.xpath.xpath.__1("//p"), "Hello world!");
  if(!cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p[1]")))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[1]"), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522)))));
  }
  if(cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p[2]")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[2]"), cljs.core.hash_map("\ufdd0'line", 523))), cljs.core.hash_map("\ufdd0'line", 523))), cljs.core.hash_map("\ufdd0'line", 523)))));
});
domina.test.add_test("can get a form field value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test' value='Test Value'></input></form>");
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528)))));
});
domina.test.add_test("can set a form field value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test'></input></form>");
  domina.set_value_BANG_(domina.xpath.xpath.__1("//input"), "Test Value");
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534)))));
});
domina.test.add_test("can set multiple form field values", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
  domina.set_value_BANG_(domina.xpath.xpath.__1("//input"), "Test Value");
  if(!cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input[1]")))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[1]"), cljs.core.hash_map("\ufdd0'line", 540))), cljs.core.hash_map("\ufdd0'line", 540))), cljs.core.hash_map("\ufdd0'line", 540)))));
  }
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input[2]")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[2]"), cljs.core.hash_map("\ufdd0'line", 541))), cljs.core.hash_map("\ufdd0'line", 541))), cljs.core.hash_map("\ufdd0'line", 541)))));
});
domina.test.add_test("can get a node's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='foobar'>some text</p></div>");
  var a = cljs.core._EQ_.__2('<p class="foobar">some text</p>', domina.html(domina.xpath.xpath.__1("//div")));
  if(a ? a : cljs.core._EQ_.__2("<P class=foobar>some text</P>", domina.html(domina.xpath.xpath.__1("//div")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'or", cljs.core.with_meta(cljs.core.list("\ufdd1'=", '<p class="foobar">some text</p>', cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 547))), cljs.core.hash_map("\ufdd0'line", 547))), cljs.core.hash_map("\ufdd0'line", 547)), cljs.core.with_meta(cljs.core.list("\ufdd1'=", "<P class=foobar>some text</P>", 
  cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 547)))));
});
domina.test.add_test("can set a node's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), "<p class='foobar'>some text</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554)))));
});
domina.test.add_test("can set a node's innerHTML to non-string content", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), domina.nodes("<p class='foobar'>some text</p>"));
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560)))));
});
domina.test.add_test("can set multiple nodes' innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div><div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), "<p class='foobar'>some text</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566)))));
});
domina.test.add_test("can set multiple nodes' innerHTML to non-string content", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div><div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), domina.nodes("<p class='foobar'>some text</p>"));
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572)))));
});
domina.test.add_test("can set a table's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<table></table>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//table"), "<tr class='foobar'><th>some</th><td>text</td></tr>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/table/tr[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578)))));
});
domina.test.add_test("can set multiple tables' innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<table></table><table></table>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//table"), "<tr class='foobar'><th>some</th><td>text</td></tr>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/table/tr[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584)))));
});
domina.test.add_test("can get nodes from strings containing cell-level table fragments", function() {
  domina.test.reset();
  var a = domina.nodes("<td>Cell</td><th>Header</th>");
  if(!cljs.core._EQ_.__2(cljs.core.count(a), 2)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 589)), 2), cljs.core.hash_map("\ufdd0'line", 589)))));
  }
  if(!cljs.core._EQ_.__2("TD", cljs.core.first(a).tagName)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TD", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 590)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 590))), cljs.core.hash_map("\ufdd0'line", 590)))));
  }
  if(cljs.core._EQ_.__2("TH", cljs.core.second(a).tagName)) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TH", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 591)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 591))), cljs.core.hash_map("\ufdd0'line", 591)))));
});
domina.test.add_test("can get nodes from strings containing row-level table fragments", function() {
  domina.test.reset();
  var a = domina.nodes("<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");
  if(!cljs.core._EQ_.__2(cljs.core.count(a), 2)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 596)), 2), cljs.core.hash_map("\ufdd0'line", 596)))));
  }
  if(!cljs.core._EQ_.__2("TR", cljs.core.first(a).tagName)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TR", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 597)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 597))), cljs.core.hash_map("\ufdd0'line", 597)))));
  }
  if(cljs.core._EQ_.__2("TR", cljs.core.second(a).tagName)) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TR", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 598)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 598))), cljs.core.hash_map("\ufdd0'line", 598)))));
});
domina.test.add_test("can get nodes from strings containing section-level table fragments", function() {
  domina.test.reset();
  var a = domina.nodes("<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");
  if(!cljs.core._EQ_.__2(cljs.core.count(a), 2)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 603)), 2), cljs.core.hash_map("\ufdd0'line", 603)))));
  }
  if(!cljs.core._EQ_.__2("THEAD", cljs.core.first(a).tagName)) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "THEAD", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 604)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 604))), cljs.core.hash_map("\ufdd0'line", 604)))));
  }
  if(cljs.core._EQ_.__2("TBODY", cljs.core.second(a).tagName)) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TBODY", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 605)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 605))), cljs.core.hash_map("\ufdd0'line", 605)))));
});
domina.test.add_test("can add and retrieve a listener", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(domina.test.clicked, !0)
  });
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.events.get_listeners(domina.css.sel.__1("#mybutton"), "\ufdd0'click")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'get-listeners", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "#mybutton"), cljs.core.hash_map("\ufdd0'line", 615)), "\ufdd0'click"), cljs.core.hash_map("\ufdd0'line", 615))), cljs.core.hash_map("\ufdd0'line", 615))), cljs.core.hash_map("\ufdd0'line", 615)))));
});
domina.test.simulate_click_event = function(a) {
  var a = domina.single_node(a), b = window.document;
  if(cljs.core.truth_(a.click)) {
    return a.click()
  }
  if(cljs.core.truth_(b.createEvent)) {
    return b = b.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
  }
  throw"Unable to simulate click event";
};
domina.test.add_test("can listen for a browser event", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var a = cljs.core.atom.__1(!1);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(a, !0)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.truth_(cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked"))));
});
domina.test.add_test("can extract string keys from an event using keyword accessors", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var a = cljs.core.atom.__1(null);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", function(b) {
    return cljs.core.reset_BANG_(a, cljs.core.PersistentVector.fromArray(["\ufdd0'clientX".call(null, b), "\ufdd0'clientY".call(null, b)]))
  });
  domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", cljs.core.ObjMap.fromObject(["clientX", "clientY"], {clientX:42, clientY:42}));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([42, 42]), cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec([42, 42]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'coords")), cljs.core.hash_map("\ufdd0'line", 652)))));
});
domina.test.add_test("can dispatch an event, execute default action is true", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var a = cljs.core.atom.__1(!1);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(a, !0)
  });
  var b = domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "click", cljs.core.ObjMap.fromObject([], {}));
  if(!cljs.core.truth_(cljs.core.deref(a))) {
    throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked"))));
  }
  if(cljs.core.truth_(b)) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str("\ufdd1'default")));
});
domina.test.add_test("can prevent the default action on an event", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(a) {
    return domina.events.prevent_default(a)
  });
  if(cljs.core.not(domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "click", cljs.core.ObjMap.fromObject([], {})))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'dispatch!", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "#mybutton"), cljs.core.hash_map("\ufdd0'line", 672)), "click", cljs.core.hash_map()), cljs.core.hash_map("\ufdd0'line", 672))), cljs.core.hash_map("\ufdd0'line", 672)))));
});
domina.test.add_test("capture and bubble listeners are triggered in the correct order.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__3(a, cljs.core.conj, "\ufdd0'listened")
  });
  domina.events.capture_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__3(a, cljs.core.conj, "\ufdd0'captured")
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["\ufdd0'captured", "\ufdd0'listened"]), cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["\ufdd0'captured", "\ufdd0'listened"]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 683)))));
});
domina.test.add_test("current-target is correct when capturing custom events", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([])), b = domina.single_node(domina.css.sel.__1("body")), c = domina.single_node(domina.css.sel.__1("button"));
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'foobar", function(b) {
    return cljs.core.swap_BANG_.__3(a, cljs.core.conj, domina.events.current_target(b))
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("button"), "\ufdd0'foobar", function(b) {
    return cljs.core.swap_BANG_.__3(a, cljs.core.conj, domina.events.current_target(b))
  });
  domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"data"}));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([c, b]), cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["\ufdd1'button", "\ufdd1'body"]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'actual-elements")), cljs.core.hash_map("\ufdd0'line", 698)))));
});
domina.test.add_test("can stop event propagation in the capture phase.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(!1);
  domina.events.capture_BANG_.__3(domina.css.sel.__1("div"), "\ufdd0'click", function(a) {
    return domina.events.stop_propagation(a)
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(a, !0)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.not(cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 709)))));
});
domina.test.add_test("can stop event propagation in the bubble phase.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(!1);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(a, !0)
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(a) {
    return domina.events.stop_propagation(a)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.not(cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 722)))));
});
domina.test.add_test("listen-once triggers only once", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(0);
  domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(a, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 733)))));
});
domina.test.add_test("listen-once triggers only once", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(0);
  domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(a, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 744)))));
});
domina.test.add_test("can unlisten generically", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(0);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(a, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__1(domina.css.sel.__1("body"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 756)))));
});
domina.test.add_test("can unlisten narrowed by type", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(0);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(a, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"), "\ufdd0'foobar");
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"), "\ufdd0'click");
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(2, cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 770)))));
});
domina.test.add_test("can unlisten by key", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var a = cljs.core.atom.__1(0), b = domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(a, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_by_key_BANG_(cljs.core.first(b));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 782)))));
});
domina.test.add_test("can send and listen for custom events with custom data", function() {
  domina.test.reset();
  var a = cljs.core.atom.__1(!1);
  domina.events.listen_BANG_.__2("\ufdd0'foobar", function(b) {
    return cljs.core._EQ_.__2("data", "\ufdd0'some".call(null, b)) ? cljs.core.reset_BANG_(a, !0) : null
  });
  domina.events.dispatch_BANG_.__2("\ufdd0'foobar", cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"data"}));
  if(cljs.core.truth_(cljs.core.deref(a))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'worked"))));
});
domina.test.add_test("doesn't clone unless necessary", function() {
  domina.test.reset();
  var a = domina.single_node("<div>hello</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), a);
  if(cljs.core._EQ_.__2(a, domina.single_node(domina.xpath.xpath.__1("//body/div")))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'child", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div"), cljs.core.hash_map("\ufdd0'line", 799))), cljs.core.hash_map("\ufdd0'line", 799))), cljs.core.hash_map("\ufdd0'line", 799)))));
});
domina.test.add_test("test that data works", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='testingdata'>hello</div>");
  var a = cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"complex data"});
  domina.set_data_BANG_(domina.by_id("testingdata"), "\ufdd0'my-impeccable-data", a);
  if(cljs.core._EQ_.__2(a, domina.get_data.__2(domina.by_id("testingdata"), "\ufdd0'my-impeccable-data"))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'data", cljs.core.with_meta(cljs.core.list("\ufdd1'get-data", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "testingdata"), cljs.core.hash_map("\ufdd0'line", 807)), "\ufdd0'my-impeccable-data"), cljs.core.hash_map("\ufdd0'line", 807))), cljs.core.hash_map("\ufdd0'line", 807)))));
});
domina.test.add_test("test that data works with bubbling", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='outerdata'><div id='innerdata'>hello</div></div>");
  var a = cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"complex data"});
  domina.set_data_BANG_(domina.by_id("outerdata"), "\ufdd0'my-impeccable-data", a);
  if(cljs.core._EQ_.__2(a, domina.get_data.__3(domina.by_id("innerdata"), "\ufdd0'my-impeccable-data", !0))) {
    return null
  }
  throw Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'data", cljs.core.with_meta(cljs.core.list("\ufdd1'get-data", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "innerdata"), cljs.core.hash_map("\ufdd0'line", 816)), "\ufdd0'my-impeccable-data", !0), cljs.core.hash_map("\ufdd0'line", 816))), cljs.core.hash_map("\ufdd0'line", 816)))));
});
domina.test.report = function(a) {
  domina.test.reset();
  var b = cljs.core.seq(a);
  if(cljs.core.truth_(b)) {
    var c = cljs.core.first(b);
    cljs.core.nth.__3(c, 0, null);
    for(cljs.core.nth.__3(c, 1, null);;) {
      var d = c, c = cljs.core.nth.__3(d, 0, null), d = cljs.core.nth.__3(d, 1, null), e = domina.single_node("<div class='test-result'></div>");
      domina.set_text_BANG_(e, c);
      cljs.core.not(cljs.core._EQ_.__2(d, null)) ? (domina.add_class_BANG_(e, "failed"), domina.append_BANG_(e, cljs.core.str("<div class='message'>", d, "</div>"))) : domina.add_class_BANG_(e, "passed");
      domina.append_BANG_(domina.xpath.xpath.__1("//body"), e);
      c = cljs.core.next(b);
      if(cljs.core.truth_(c)) {
        b = c, c = cljs.core.first(b)
      }else {
        break
      }
    }
  }
  domina.prepend_BANG_(domina.xpath.xpath.__1("//body"), "<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
  domina.set_text_BANG_(domina.by_id("total-tests"), cljs.core.count(a));
  a = cljs.core.count(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(cljs.core.second, a)));
  domina.set_text_BANG_(domina.by_id("total-failures"), a);
  return cljs.core._EQ_.__2(0, a) ? domina.add_class_BANG_(domina.by_id("test-summary"), "passed") : domina.add_class_BANG_(domina.by_id("test-summary"), "failed")
};
domina.test.test_results = cljs.core.doall.__1(domina.test.run_tests());
domina.test.report(domina.test.test_results);
