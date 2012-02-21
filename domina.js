var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.DEBUG = true;
goog.LOCALE = "en";
goog.evalWorksForGlobals_ = null;
goog.provide = function(name) {
  if(!COMPILED) {
    if(goog.getObjectByName(name) && !goog.implicitNamespaces_[name]) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    var namespace = name;
    while(namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      goog.implicitNamespaces_[namespace] = true
    }
  }
  goog.exportPath_(name)
};
goog.setTestOnly = function(opt_message) {
  if(COMPILED && !goog.DEBUG) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + opt_message ? ": " + opt_message : ".");
  }
};
if(!COMPILED) {
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if(!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0])
  }
  for(var part;parts.length && (part = parts.shift());) {
    if(!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object
    }else {
      if(cur[part]) {
        cur = cur[part]
      }else {
        cur = cur[part] = {}
      }
    }
  }
};
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for(var part;part = parts.shift();) {
    if(goog.isDefAndNotNull(cur[part])) {
      cur = cur[part]
    }else {
      return null
    }
  }
  return cur
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for(var x in obj) {
    global[x] = obj[x]
  }
};
goog.addDependency = function(relPath, provides, requires) {
  if(!COMPILED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for(var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      if(!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {}
      }
      deps.pathToNames[path][provide] = true
    }
    for(var j = 0;require = requires[j];j++) {
      if(!(path in deps.requires)) {
        deps.requires[path] = {}
      }
      deps.requires[path][require] = true
    }
  }
};
goog.require = function(rule) {
  if(!COMPILED) {
    if(goog.getObjectByName(rule)) {
      return
    }
    var path = goog.getPathFromDeps_(rule);
    if(path) {
      goog.included_[path] = true;
      goog.writeScripts_()
    }else {
      var errorMessage = "goog.require could not find: " + rule;
      if(goog.global.console) {
        goog.global.console["error"](errorMessage)
      }
      throw Error(errorMessage);
    }
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.identityFunction = function(var_args) {
  return arguments[0]
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    return ctor.instance_ || (ctor.instance_ = new ctor)
  }
};
if(!COMPILED) {
  goog.included_ = {};
  goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc
  };
  goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return
    }else {
      if(!goog.inHtmlDocument_()) {
        return
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("script");
    for(var i = scripts.length - 1;i >= 0;--i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if(src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return
      }
    }
  };
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if(!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true
    }
  };
  goog.writeScriptTag_ = function(src) {
    if(goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write('<script type="text/javascript" src="' + src + '"></' + "script>");
      return true
    }else {
      return false
    }
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if(path in deps.written) {
        return
      }
      if(path in deps.visited) {
        if(!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path)
        }
        return
      }
      deps.visited[path] = true;
      if(path in deps.requires) {
        for(var requireName in deps.requires[path]) {
          if(requireName in deps.nameToPath) {
            visitNode(deps.nameToPath[requireName])
          }else {
            if(!goog.getObjectByName(requireName)) {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if(!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path)
      }
    }
    for(var path in goog.included_) {
      if(!deps.written[path]) {
        visitNode(path)
      }
    }
    for(var i = 0;i < scripts.length;i++) {
      if(scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i])
      }else {
        throw Error("Undefined script input");
      }
    }
  };
  goog.getPathFromDeps_ = function(rule) {
    if(rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule]
    }else {
      return null
    }
  };
  goog.findBasePath_();
  if(!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js")
  }
}
goog.typeOf = function(value) {
  var s = typeof value;
  if(s == "object") {
    if(value) {
      if(value instanceof Array) {
        return"array"
      }else {
        if(value instanceof Object) {
          return s
        }
      }
      var className = Object.prototype.toString.call(value);
      if(className == "[object Window]") {
        return"object"
      }
      if(className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(s == "function" && typeof value.call == "undefined") {
      return"object"
    }
  }
  return s
};
goog.propertyIsEnumerableCustom_ = function(object, propName) {
  if(propName in object) {
    for(var key in object) {
      if(key == propName && Object.prototype.hasOwnProperty.call(object, propName)) {
        return true
      }
    }
  }
  return false
};
goog.propertyIsEnumerable_ = function(object, propName) {
  if(object instanceof Object) {
    return Object.prototype.propertyIsEnumerable.call(object, propName)
  }else {
    return goog.propertyIsEnumerableCustom_(object, propName)
  }
};
goog.isDef = function(val) {
  return val !== undefined
};
goog.isNull = function(val) {
  return val === null
};
goog.isDefAndNotNull = function(val) {
  return val != null
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array"
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number"
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function"
};
goog.isString = function(val) {
  return typeof val == "string"
};
goog.isBoolean = function(val) {
  return typeof val == "boolean"
};
goog.isNumber = function(val) {
  return typeof val == "number"
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function"
};
goog.isObject = function(val) {
  var type = goog.typeOf(val);
  return type == "object" || type == "array" || type == "function"
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(obj) {
  if("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_)
  }
  try {
    delete obj[goog.UID_PROPERTY_]
  }catch(ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.cloneObject(obj[key])
    }
    return clone
  }
  return obj
};
Object.prototype.clone;
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments)
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  var context = selfObj || goog.global;
  if(arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(context, newArgs)
    }
  }else {
    return function() {
      return fn.apply(context, arguments)
    }
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if(Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_
  }else {
    goog.bind = goog.bindJs_
  }
  return goog.bind.apply(null, arguments)
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs.unshift.apply(newArgs, args);
    return fn.apply(this, newArgs)
  }
};
goog.mixin = function(target, source) {
  for(var x in source) {
    target[x] = source[x]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(script) {
  if(goog.global.execScript) {
    goog.global.execScript(script, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if(typeof goog.global["_et_"] != "undefined") {
          delete goog.global["_et_"];
          goog.evalWorksForGlobals_ = true
        }else {
          goog.evalWorksForGlobals_ = false
        }
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(script)
      }else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("script");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for(var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]))
    }
    return mapped.join("-")
  };
  var rename;
  if(goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts
  }else {
    rename = function(a) {
      return a
    }
  }
  if(opt_modifier) {
    return className + "-" + rename(opt_modifier)
  }else {
    return rename(className)
  }
};
goog.setCssNameMapping = function(mapping, style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = style
};
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for(var key in values) {
    var value = ("" + values[key]).replace(/\$/g, "$$$$");
    str = str.replace(new RegExp("\\{\\$" + key + "\\}", "gi"), value)
  }
  return str
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo)
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if(caller.superClass_) {
    return caller.superClass_.constructor.apply(me, Array.prototype.slice.call(arguments, 1))
  }
  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for(var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if(ctor.prototype[opt_methodName] === caller) {
      foundCaller = true
    }else {
      if(foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args)
      }
    }
  }
  if(me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args)
  }else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global)
};
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  this.stack = (new Error).stack || "";
  if(opt_msg) {
    this.message = String(opt_msg)
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0
};
goog.string.endsWith = function(str, suffix) {
  var l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l
};
goog.string.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0
};
goog.string.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0
};
goog.string.subs = function(str, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var replacement = String(arguments[i]).replace(/\$/g, "$$$$");
    str = str.replace(/\%s/, replacement)
  }
  return str
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(str) {
  return/^[\s\xa0]*$/.test(str)
};
goog.string.isEmptySafe = function(str) {
  return goog.string.isEmpty(goog.string.makeSafe(str))
};
goog.string.isBreakingWhitespace = function(str) {
  return!/[^\t\n\r ]/.test(str)
};
goog.string.isAlpha = function(str) {
  return!/[^a-zA-Z]/.test(str)
};
goog.string.isNumeric = function(str) {
  return!/[^0-9]/.test(str)
};
goog.string.isAlphaNumeric = function(str) {
  return!/[^a-zA-Z0-9]/.test(str)
};
goog.string.isSpace = function(ch) {
  return ch == " "
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd"
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.trim = function(str) {
  return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(str1, str2) {
  var test1 = String(str1).toLowerCase();
  var test2 = String(str2).toLowerCase();
  if(test1 < test2) {
    return-1
  }else {
    if(test1 == test2) {
      return 0
    }else {
      return 1
    }
  }
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(str1, str2) {
  if(str1 == str2) {
    return 0
  }
  if(!str1) {
    return-1
  }
  if(!str2) {
    return 1
  }
  var tokens1 = str1.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var tokens2 = str2.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var count = Math.min(tokens1.length, tokens2.length);
  for(var i = 0;i < count;i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if(a != b) {
      var num1 = parseInt(a, 10);
      if(!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if(!isNaN(num2) && num1 - num2) {
          return num1 - num2
        }
      }
      return a < b ? -1 : 1
    }
  }
  if(tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length
  }
  return str1 < str2 ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(str) {
  str = String(str);
  if(!goog.string.encodeUriRegExp_.test(str)) {
    return encodeURIComponent(str)
  }
  return str
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if(opt_isLikelyToContainHtmlChars) {
    return str.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }else {
    if(!goog.string.allRe_.test(str)) {
      return str
    }
    if(str.indexOf("&") != -1) {
      str = str.replace(goog.string.amperRe_, "&amp;")
    }
    if(str.indexOf("<") != -1) {
      str = str.replace(goog.string.ltRe_, "&lt;")
    }
    if(str.indexOf(">") != -1) {
      str = str.replace(goog.string.gtRe_, "&gt;")
    }
    if(str.indexOf('"') != -1) {
      str = str.replace(goog.string.quotRe_, "&quot;")
    }
    return str
  }
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(str) {
  if(goog.string.contains(str, "&")) {
    if("document" in goog.global && !goog.string.contains(str, "<")) {
      return goog.string.unescapeEntitiesUsingDom_(str)
    }else {
      return goog.string.unescapePureXmlEntities_(str)
    }
  }
  return str
};
goog.string.unescapeEntitiesUsingDom_ = function(str) {
  var el = goog.global["document"]["createElement"]("div");
  el["innerHTML"] = "<pre>x" + str + "</pre>";
  if(el["firstChild"][goog.string.NORMALIZE_FN_]) {
    el["firstChild"][goog.string.NORMALIZE_FN_]()
  }
  str = el["firstChild"]["firstChild"]["nodeValue"].slice(1);
  el["innerHTML"] = "";
  return goog.string.canonicalizeNewlines(str)
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if(entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if(!isNaN(n)) {
            return String.fromCharCode(n)
          }
        }
        return s
    }
  })
};
goog.string.NORMALIZE_FN_ = "normalize";
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml)
};
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for(var i = 0;i < length;i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if(str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1)
    }
  }
  return str
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(str.length > chars) {
    str = str.substring(0, chars - 3) + "..."
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(opt_trailingChars) {
    if(opt_trailingChars > chars) {
      opt_trailingChars = chars
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint)
  }else {
    if(str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos)
    }
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  if(s.quote) {
    return s.quote()
  }else {
    var sb = ['"'];
    for(var i = 0;i < s.length;i++) {
      var ch = s.charAt(i);
      var cc = ch.charCodeAt(0);
      sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch))
    }
    sb.push('"');
    return sb.join("")
  }
};
goog.string.escapeString = function(str) {
  var sb = [];
  for(var i = 0;i < str.length;i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i))
  }
  return sb.join("")
};
goog.string.escapeChar = function(c) {
  if(c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c]
  }
  if(c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c]
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if(cc > 31 && cc < 127) {
    rv = c
  }else {
    if(cc < 256) {
      rv = "\\x";
      if(cc < 16 || cc > 256) {
        rv += "0"
      }
    }else {
      rv = "\\u";
      if(cc < 4096) {
        rv += "0"
      }
    }
    rv += cc.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[c] = rv
};
goog.string.toMap = function(s) {
  var rv = {};
  for(var i = 0;i < s.length;i++) {
    rv[s.charAt(i)] = true
  }
  return rv
};
goog.string.contains = function(s, ss) {
  return s.indexOf(ss) != -1
};
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if(index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength)
  }
  return resultStr
};
goog.string.remove = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "");
  return s.replace(re, "")
};
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "")
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(string, length) {
  return(new Array(length + 1)).join(string)
};
goog.string.padNumber = function(num, length, opt_precision) {
  var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if(index == -1) {
    index = s.length
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj)
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(version1, version2) {
  var order = 0;
  var v1Subs = goog.string.trim(String(version1)).split(".");
  var v2Subs = goog.string.trim(String(version2)).split(".");
  var subCount = Math.max(v1Subs.length, v2Subs.length);
  for(var subIdx = 0;order == 0 && subIdx < subCount;subIdx++) {
    var v1Sub = v1Subs[subIdx] || "";
    var v2Sub = v2Subs[subIdx] || "";
    var v1CompParser = new RegExp("(\\d*)(\\D*)", "g");
    var v2CompParser = new RegExp("(\\d*)(\\D*)", "g");
    do {
      var v1Comp = v1CompParser.exec(v1Sub) || ["", "", ""];
      var v2Comp = v2CompParser.exec(v2Sub) || ["", "", ""];
      if(v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break
      }
      var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2])
    }while(order == 0)
  }
  return order
};
goog.string.compareElements_ = function(left, right) {
  if(left < right) {
    return-1
  }else {
    if(left > right) {
      return 1
    }
  }
  return 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(str) {
  var result = 0;
  for(var i = 0;i < str.length;++i) {
    result = 31 * result + str.charCodeAt(i);
    result %= goog.string.HASHCODE_MAX_
  }
  return result
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(str) {
  var num = Number(str);
  if(num == 0 && goog.string.isEmpty(str)) {
    return NaN
  }
  return num
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(str) {
  return goog.string.toCamelCaseCache_[str] || (goog.string.toCamelCaseCache_[str] = String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(str) {
  return goog.string.toSelectorCaseCache_[str] || (goog.string.toSelectorCaseCache_[str] = String(str).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.string");
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  messageArgs.shift();
  this.messagePattern = messagePattern
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if(givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs
  }else {
    if(defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs
    }
  }
  throw new goog.asserts.AssertionError("" + message, args || []);
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return condition
};
goog.asserts.fail = function(opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("instanceof check failed.", null, opt_message, Array.prototype.slice.call(arguments, 3))
  }
};
goog.provide("goog.array");
goog.provide("goog.array.ArrayLike");
goog.require("goog.asserts");
goog.NATIVE_ARRAY_PROTOTYPES = true;
goog.array.ArrayLike;
goog.array.peek = function(array) {
  return array[array.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr, obj, opt_fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.indexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i < arr.length;i++) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr, obj, fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  if(fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex)
  }
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.lastIndexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i >= 0;i--) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.forEachRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;--i) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = [];
  var resLength = 0;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      var val = arr2[i];
      if(f.call(opt_obj, val, i, arr)) {
        res[resLength++] = val
      }
    }
  }
  return res
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.map.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = new Array(l);
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      res[i] = f.call(opt_obj, arr2[i], i, arr)
    }
  }
  return res
};
goog.array.reduce = function(arr, f, val, opt_obj) {
  if(arr.reduce) {
    if(opt_obj) {
      return arr.reduce(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduce(f, val)
    }
  }
  var rval = val;
  goog.array.forEach(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.reduceRight = function(arr, f, val, opt_obj) {
  if(arr.reduceRight) {
    if(opt_obj) {
      return arr.reduceRight(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduceRight(f, val)
    }
  }
  var rval = val;
  goog.array.forEachRight(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.some.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return true
    }
  }
  return false
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.every.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
      return false
    }
  }
  return true
};
goog.array.find = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndex = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.findRight = function(arr, f, opt_obj) {
  var i = goog.array.findIndexRight(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndexRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;i--) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.contains = function(arr, obj) {
  return goog.array.indexOf(arr, obj) >= 0
};
goog.array.isEmpty = function(arr) {
  return arr.length == 0
};
goog.array.clear = function(arr) {
  if(!goog.isArray(arr)) {
    for(var i = arr.length - 1;i >= 0;i--) {
      delete arr[i]
    }
  }
  arr.length = 0
};
goog.array.insert = function(arr, obj) {
  if(!goog.array.contains(arr, obj)) {
    arr.push(obj)
  }
};
goog.array.insertAt = function(arr, obj, opt_i) {
  goog.array.splice(arr, opt_i, 0, obj)
};
goog.array.insertArrayAt = function(arr, elementsToAdd, opt_i) {
  goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd)
};
goog.array.insertBefore = function(arr, obj, opt_obj2) {
  var i;
  if(arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) {
    arr.push(obj)
  }else {
    goog.array.insertAt(arr, obj, i)
  }
};
goog.array.remove = function(arr, obj) {
  var i = goog.array.indexOf(arr, obj);
  var rv;
  if(rv = i >= 0) {
    goog.array.removeAt(arr, i)
  }
  return rv
};
goog.array.removeAt = function(arr, i) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.call(arr, i, 1).length == 1
};
goog.array.removeIf = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  if(i >= 0) {
    goog.array.removeAt(arr, i);
    return true
  }
  return false
};
goog.array.concat = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(arr) {
  if(goog.isArray(arr)) {
    return goog.array.concat(arr)
  }else {
    var rv = [];
    for(var i = 0, len = arr.length;i < len;i++) {
      rv[i] = arr[i]
    }
    return rv
  }
};
goog.array.toArray = function(object) {
  if(goog.isArray(object)) {
    return goog.array.concat(object)
  }
  return goog.array.clone(object)
};
goog.array.extend = function(arr1, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var arr2 = arguments[i];
    var isArrayLike;
    if(goog.isArray(arr2) || (isArrayLike = goog.isArrayLike(arr2)) && arr2.hasOwnProperty("callee")) {
      arr1.push.apply(arr1, arr2)
    }else {
      if(isArrayLike) {
        var len1 = arr1.length;
        var len2 = arr2.length;
        for(var j = 0;j < len2;j++) {
          arr1[len1 + j] = arr2[j]
        }
      }else {
        arr1.push(arr2)
      }
    }
  }
};
goog.array.splice = function(arr, index, howMany, var_args) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr, goog.array.slice(arguments, 1))
};
goog.array.slice = function(arr, start, opt_end) {
  goog.asserts.assert(arr.length != null);
  if(arguments.length <= 2) {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start)
  }else {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start, opt_end)
  }
};
goog.array.removeDuplicates = function(arr, opt_rv) {
  var returnArray = opt_rv || arr;
  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while(cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = goog.isObject(current) ? "o" + goog.getUid(current) : (typeof current).charAt(0) + current;
    if(!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current
    }
  }
  returnArray.length = cursorInsert
};
goog.array.binarySearch = function(arr, target, opt_compareFn) {
  return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target)
};
goog.array.binarySelect = function(arr, evaluator, opt_obj) {
  return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj)
};
goog.array.binarySearch_ = function(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
  var left = 0;
  var right = arr.length;
  var found;
  while(left < right) {
    var middle = left + right >> 1;
    var compareResult;
    if(isEvaluator) {
      compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr)
    }else {
      compareResult = compareFn(opt_target, arr[middle])
    }
    if(compareResult > 0) {
      left = middle + 1
    }else {
      right = middle;
      found = !compareResult
    }
  }
  return found ? left : ~left
};
goog.array.sort = function(arr, opt_compareFn) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.sort.call(arr, opt_compareFn || goog.array.defaultCompare)
};
goog.array.stableSort = function(arr, opt_compareFn) {
  for(var i = 0;i < arr.length;i++) {
    arr[i] = {index:i, value:arr[i]}
  }
  var valueCompareFn = opt_compareFn || goog.array.defaultCompare;
  function stableCompareFn(obj1, obj2) {
    return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index
  }
  goog.array.sort(arr, stableCompareFn);
  for(var i = 0;i < arr.length;i++) {
    arr[i] = arr[i].value
  }
};
goog.array.sortObjectsByKey = function(arr, key, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  goog.array.sort(arr, function(a, b) {
    return compare(a[key], b[key])
  })
};
goog.array.isSorted = function(arr, opt_compareFn, opt_strict) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  for(var i = 1;i < arr.length;i++) {
    var compareResult = compare(arr[i - 1], arr[i]);
    if(compareResult > 0 || compareResult == 0 && opt_strict) {
      return false
    }
  }
  return true
};
goog.array.equals = function(arr1, arr2, opt_equalsFn) {
  if(!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
    return false
  }
  var l = arr1.length;
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  for(var i = 0;i < l;i++) {
    if(!equalsFn(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
};
goog.array.compare = function(arr1, arr2, opt_equalsFn) {
  return goog.array.equals(arr1, arr2, opt_equalsFn)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  if(index < 0) {
    goog.array.insertAt(array, value, -(index + 1));
    return true
  }
  return false
};
goog.array.binaryRemove = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  return index >= 0 ? goog.array.removeAt(array, index) : false
};
goog.array.bucket = function(array, sorter) {
  var buckets = {};
  for(var i = 0;i < array.length;i++) {
    var value = array[i];
    var key = sorter(value, i, array);
    if(goog.isDef(key)) {
      var bucket = buckets[key] || (buckets[key] = []);
      bucket.push(value)
    }
  }
  return buckets
};
goog.array.repeat = function(value, n) {
  var array = [];
  for(var i = 0;i < n;i++) {
    array[i] = value
  }
  return array
};
goog.array.flatten = function(var_args) {
  var result = [];
  for(var i = 0;i < arguments.length;i++) {
    var element = arguments[i];
    if(goog.isArray(element)) {
      result.push.apply(result, goog.array.flatten.apply(null, element))
    }else {
      result.push(element)
    }
  }
  return result
};
goog.array.rotate = function(array, n) {
  goog.asserts.assert(array.length != null);
  if(array.length) {
    n %= array.length;
    if(n > 0) {
      goog.array.ARRAY_PROTOTYPE_.unshift.apply(array, array.splice(-n, n))
    }else {
      if(n < 0) {
        goog.array.ARRAY_PROTOTYPE_.push.apply(array, array.splice(0, -n))
      }
    }
  }
  return array
};
goog.array.zip = function(var_args) {
  if(!arguments.length) {
    return[]
  }
  var result = [];
  for(var i = 0;true;i++) {
    var value = [];
    for(var j = 0;j < arguments.length;j++) {
      var arr = arguments[j];
      if(i >= arr.length) {
        return result
      }
      value.push(arr[i])
    }
    result.push(value)
  }
};
goog.array.shuffle = function(arr, opt_randFn) {
  var randFn = opt_randFn || Math.random;
  for(var i = arr.length - 1;i > 0;i--) {
    var j = Math.floor(randFn() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp
  }
};
goog.provide("goog.userAgent");
goog.require("goog.string");
goog.userAgent.ASSUME_IE = false;
goog.userAgent.ASSUME_GECKO = false;
goog.userAgent.ASSUME_WEBKIT = false;
goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
goog.userAgent.ASSUME_OPERA = false;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global["navigator"] ? goog.global["navigator"].userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global["navigator"]
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = false;
  goog.userAgent.detectedIe_ = false;
  goog.userAgent.detectedWebkit_ = false;
  goog.userAgent.detectedMobile_ = false;
  goog.userAgent.detectedGecko_ = false;
  var ua;
  if(!goog.userAgent.BROWSER_KNOWN_ && (ua = goog.userAgent.getUserAgentString())) {
    var navigator = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = ua.indexOf("Opera") == 0;
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && ua.indexOf("MSIE") != -1;
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && ua.indexOf("WebKit") != -1;
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && ua.indexOf("Mobile") != -1;
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && navigator.product == "Gecko"
  }
};
if(!goog.userAgent.BROWSER_KNOWN_) {
  goog.userAgent.init_()
}
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = false;
goog.userAgent.ASSUME_WINDOWS = false;
goog.userAgent.ASSUME_LINUX = false;
goog.userAgent.ASSUME_X11 = false;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator()["appVersion"] || "", "X11")
};
if(!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_()
}
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var version = "", re;
  if(goog.userAgent.OPERA && goog.global["opera"]) {
    var operaVersion = goog.global["opera"].version;
    version = typeof operaVersion == "function" ? operaVersion() : operaVersion
  }else {
    if(goog.userAgent.GECKO) {
      re = /rv\:([^\);]+)(\)|;)/
    }else {
      if(goog.userAgent.IE) {
        re = /MSIE\s+([^\);]+)(\)|;)/
      }else {
        if(goog.userAgent.WEBKIT) {
          re = /WebKit\/(\S+)/
        }
      }
    }
    if(re) {
      var arr = re.exec(goog.userAgent.getUserAgentString());
      version = arr ? arr[1] : ""
    }
  }
  if(goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if(docMode > parseFloat(version)) {
      return String(docMode)
    }
  }
  return version
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(version) {
  return goog.userAgent.isVersionCache_[version] || (goog.userAgent.isVersionCache_[version] = goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0)
};
goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isVersion("9"), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isVersion("9") || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.provide("goog.dom.TagName");
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.provide("goog.dom.classes");
goog.require("goog.array");
goog.dom.classes.set = function(element, className) {
  element.className = className
};
goog.dom.classes.get = function(element) {
  var className = element.className;
  return className && typeof className.split == "function" ? className.split(/\s+/) : []
};
goog.dom.classes.add = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.add_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.remove = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.remove_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.add_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < args.length;i++) {
    if(!goog.array.contains(classes, args[i])) {
      classes.push(args[i]);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.remove_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < classes.length;i++) {
    if(goog.array.contains(args, classes[i])) {
      goog.array.splice(classes, i--, 1);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.swap = function(element, fromClass, toClass) {
  var classes = goog.dom.classes.get(element);
  var removed = false;
  for(var i = 0;i < classes.length;i++) {
    if(classes[i] == fromClass) {
      goog.array.splice(classes, i--, 1);
      removed = true
    }
  }
  if(removed) {
    classes.push(toClass);
    element.className = classes.join(" ")
  }
  return removed
};
goog.dom.classes.addRemove = function(element, classesToRemove, classesToAdd) {
  var classes = goog.dom.classes.get(element);
  if(goog.isString(classesToRemove)) {
    goog.array.remove(classes, classesToRemove)
  }else {
    if(goog.isArray(classesToRemove)) {
      goog.dom.classes.remove_(classes, classesToRemove)
    }
  }
  if(goog.isString(classesToAdd) && !goog.array.contains(classes, classesToAdd)) {
    classes.push(classesToAdd)
  }else {
    if(goog.isArray(classesToAdd)) {
      goog.dom.classes.add_(classes, classesToAdd)
    }
  }
  element.className = classes.join(" ")
};
goog.dom.classes.has = function(element, className) {
  return goog.array.contains(goog.dom.classes.get(element), className)
};
goog.dom.classes.enable = function(element, className, enabled) {
  if(enabled) {
    goog.dom.classes.add(element, className)
  }else {
    goog.dom.classes.remove(element, className)
  }
};
goog.dom.classes.toggle = function(element, className) {
  var add = !goog.dom.classes.has(element, className);
  goog.dom.classes.enable(element, className, add);
  return add
};
goog.provide("goog.math.Coordinate");
goog.math.Coordinate = function(opt_x, opt_y) {
  this.x = goog.isDef(opt_x) ? opt_x : 0;
  this.y = goog.isDef(opt_y) ? opt_y : 0
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
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.provide("goog.math.Size");
goog.math.Size = function(width, height) {
  this.width = width;
  this.height = height
};
goog.math.Size.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.width == b.width && a.height == b.height
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
  return(this.width + this.height) * 2
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
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height
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
goog.math.Size.prototype.scale = function(s) {
  this.width *= s;
  this.height *= s;
  return this
};
goog.math.Size.prototype.scaleToFit = function(target) {
  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s)
};
goog.provide("goog.object");
goog.object.forEach = function(obj, f, opt_obj) {
  for(var key in obj) {
    f.call(opt_obj, obj[key], key, obj)
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key]
    }
  }
  return res
};
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj)
  }
  return res
};
goog.object.some = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      return true
    }
  }
  return false
};
goog.object.every = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(!f.call(opt_obj, obj[key], key, obj)) {
      return false
    }
  }
  return true
};
goog.object.getCount = function(obj) {
  var rv = 0;
  for(var key in obj) {
    rv++
  }
  return rv
};
goog.object.getAnyKey = function(obj) {
  for(var key in obj) {
    return key
  }
};
goog.object.getAnyValue = function(obj) {
  for(var key in obj) {
    return obj[key]
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val)
};
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = obj[key]
  }
  return res
};
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = key
  }
  return res
};
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;
  for(var i = isArrayLike ? 0 : 1;i < keys.length;i++) {
    obj = obj[keys[i]];
    if(!goog.isDef(obj)) {
      break
    }
  }
  return obj
};
goog.object.containsKey = function(obj, key) {
  return key in obj
};
goog.object.containsValue = function(obj, val) {
  for(var key in obj) {
    if(obj[key] == val) {
      return true
    }
  }
  return false
};
goog.object.findKey = function(obj, f, opt_this) {
  for(var key in obj) {
    if(f.call(opt_this, obj[key], key, obj)) {
      return key
    }
  }
  return undefined
};
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key]
};
goog.object.isEmpty = function(obj) {
  for(var key in obj) {
    return false
  }
  return true
};
goog.object.clear = function(obj) {
  for(var i in obj) {
    delete obj[i]
  }
};
goog.object.remove = function(obj, key) {
  var rv;
  if(rv = key in obj) {
    delete obj[key]
  }
  return rv
};
goog.object.add = function(obj, key, val) {
  if(key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val)
};
goog.object.get = function(obj, key, opt_val) {
  if(key in obj) {
    return obj[key]
  }
  return opt_val
};
goog.object.set = function(obj, key, value) {
  obj[key] = value
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value
};
goog.object.clone = function(obj) {
  var res = {};
  for(var key in obj) {
    res[key] = obj[key]
  }
  return res
};
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key])
    }
    return clone
  }
  return obj
};
goog.object.transpose = function(obj) {
  var transposed = {};
  for(var key in obj) {
    transposed[obj[key]] = key
  }
  return transposed
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  var key, source;
  for(var i = 1;i < arguments.length;i++) {
    source = arguments[i];
    for(key in source) {
      target[key] = source[key]
    }
    for(var j = 0;j < goog.object.PROTOTYPE_FIELDS_.length;j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if(Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
};
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(argLength % 2) {
    throw Error("Uneven number of arguments");
  }
  var rv = {};
  for(var i = 0;i < argLength;i += 2) {
    rv[arguments[i]] = arguments[i + 1]
  }
  return rv
};
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  var rv = {};
  for(var i = 0;i < argLength;i++) {
    rv[arguments[i]] = true
  }
  return rv
};
goog.provide("goog.dom");
goog.provide("goog.dom.DomHelper");
goog.provide("goog.dom.NodeType");
goog.require("goog.array");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classes");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.ASSUME_QUIRKS_MODE = false;
goog.dom.ASSUME_STANDARDS_MODE = false;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.defaultDomHelper_;
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(element) {
  return goog.isString(element) ? document.getElementById(element) : element
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
};
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if(goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className)
  }else {
    if(parent.getElementsByClassName) {
      return parent.getElementsByClassName(className)
    }
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el)
};
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if(goog.dom.canUseQuerySelector_(parent)) {
    retVal = parent.querySelector("." + className)
  }else {
    retVal = goog.dom.getElementsByClass(className, opt_el)[0]
  }
  return retVal || null
};
goog.dom.canUseQuerySelector_ = function(parent) {
  return parent.querySelectorAll && parent.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? opt_tag.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query)
  }
  if(opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if(tagName) {
      var arrayLike = {};
      var len = 0;
      for(var i = 0, el;el = els[i];i++) {
        if(tagName == el.nodeName) {
          arrayLike[len++] = el
        }
      }
      arrayLike.length = len;
      return arrayLike
    }else {
      return els
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if(opt_class) {
    var arrayLike = {};
    var len = 0;
    for(var i = 0, el;el = els[i];i++) {
      var className = el.className;
      if(typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el
      }
    }
    arrayLike.length = len;
    return arrayLike
  }else {
    return els
  }
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if(key == "style") {
      element.style.cssText = val
    }else {
      if(key == "class") {
        element.className = val
      }else {
        if(key == "for") {
          element.htmlFor = val
        }else {
          if(key in goog.dom.DIRECT_ATTRIBUTE_MAP_) {
            element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val)
          }else {
            element[key] = val
          }
        }
      }
    }
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "rowspan":"rowSpan", "valign":"vAlign", "height":"height", "width":"width", "usemap":"useMap", "frameborder":"frameBorder", "maxlength":"maxLength", "type":"type"};
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window)
};
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    if(typeof win.innerHeight == "undefined") {
      win = window
    }
    var innerHeight = win.innerHeight;
    var scrollHeight = win.document.documentElement.scrollHeight;
    if(win == win.top) {
      if(scrollHeight < innerHeight) {
        innerHeight -= 15
      }
    }
    return new goog.math.Size(win.innerWidth, innerHeight)
  }
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if(doc) {
    var vh = goog.dom.getViewportSize_(win).height;
    var body = doc.body;
    var docEl = doc.documentElement;
    if(goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight
    }else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if(docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight
      }
      if(sh > vh) {
        height = sh > oh ? sh : oh
      }else {
        height = sh < oh ? sh : oh
      }
    }
  }
  return height
};
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(doc) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body
};
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window
};
goog.dom.getWindow_ = function(doc) {
  return doc.parentWindow || doc.defaultView
};
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(doc, args) {
  var tagName = args[0];
  var attributes = args[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
    var tagNameArr = ["<", tagName];
    if(attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"')
    }
    if(attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
      var clone = {};
      goog.object.extend(clone, attributes);
      attributes = clone;
      delete attributes.type
    }
    tagNameArr.push(">");
    tagName = tagNameArr.join("")
  }
  var element = doc.createElement(tagName);
  if(attributes) {
    if(goog.isString(attributes)) {
      element.className = attributes
    }else {
      if(goog.isArray(attributes)) {
        goog.dom.classes.add.apply(null, [element].concat(attributes))
      }else {
        goog.dom.setProperties(element, attributes)
      }
    }
  }
  if(args.length > 2) {
    goog.dom.append_(doc, element, args, 2)
  }
  return element
};
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if(child) {
      parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child)
    }
  }
  for(var i = startIndex;i < args.length;i++) {
    var arg = args[i];
    if(goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.clone(arg) : arg, childHandler)
    }else {
      childHandler(arg)
    }
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(name) {
  return document.createElement(name)
};
goog.dom.createTextNode = function(content) {
  return document.createTextNode(content)
};
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var rowHtml = ["<tr>"];
  for(var i = 0;i < columns;i++) {
    rowHtml.push(fillWithNbsp ? "<td>&nbsp;</td>" : "<td></td>")
  }
  rowHtml.push("</tr>");
  rowHtml = rowHtml.join("");
  var totalHtml = ["<table>"];
  for(i = 0;i < rows;i++) {
    totalHtml.push(rowHtml)
  }
  totalHtml.push("</table>");
  var elem = doc.createElement(goog.dom.TagName.DIV);
  elem.innerHTML = totalHtml.join("");
  return elem.removeChild(elem.firstChild)
};
goog.dom.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(document, htmlString)
};
goog.dom.htmlToDocumentFragment_ = function(doc, htmlString) {
  var tempDiv = doc.createElement("div");
  if(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    tempDiv.innerHTML = "<br>" + htmlString;
    tempDiv.removeChild(tempDiv.firstChild)
  }else {
    tempDiv.innerHTML = htmlString
  }
  if(tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(tempDiv.firstChild)
  }else {
    var fragment = doc.createDocumentFragment();
    while(tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild)
    }
    return fragment
  }
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(doc) {
  if(goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE
  }
  return doc.compatMode == "CSS1Compat"
};
goog.dom.canHaveChildren = function(node) {
  if(node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false
  }
  switch(node.tagName) {
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
      return false
  }
  return true
};
goog.dom.appendChild = function(parent, child) {
  parent.appendChild(child)
};
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1)
};
goog.dom.removeChildren = function(node) {
  var child;
  while(child = node.firstChild) {
    node.removeChild(child)
  }
};
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode)
  }
};
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
};
goog.dom.insertChildAt = function(parent, child, index) {
  parent.insertBefore(child, parent.childNodes[index] || null)
};
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null
};
goog.dom.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if(parent) {
    parent.replaceChild(newNode, oldNode)
  }
};
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if(parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(element.removeNode) {
      return element.removeNode(false)
    }else {
      while(child = element.firstChild) {
        parent.insertBefore(child, element)
      }
      return goog.dom.removeNode(element)
    }
  }
};
goog.dom.getChildren = function(element) {
  if(goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) {
    return element.children
  }
  return goog.array.filter(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(node) {
  if(node.firstElementChild != undefined) {
    return node.firstElementChild
  }
  return goog.dom.getNextElementNode_(node.firstChild, true)
};
goog.dom.getLastElementChild = function(node) {
  if(node.lastElementChild != undefined) {
    return node.lastElementChild
  }
  return goog.dom.getNextElementNode_(node.lastChild, false)
};
goog.dom.getNextElementSibling = function(node) {
  if(node.nextElementSibling != undefined) {
    return node.nextElementSibling
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true)
};
goog.dom.getPreviousElementSibling = function(node) {
  if(node.previousElementSibling != undefined) {
    return node.previousElementSibling
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false)
};
goog.dom.getNextElementNode_ = function(node, forward) {
  while(node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling
  }
  return node
};
goog.dom.getNextNode = function(node) {
  if(!node) {
    return null
  }
  if(node.firstChild) {
    return node.firstChild
  }
  while(node && !node.nextSibling) {
    node = node.parentNode
  }
  return node ? node.nextSibling : null
};
goog.dom.getPreviousNode = function(node) {
  if(!node) {
    return null
  }
  if(!node.previousSibling) {
    return node.parentNode
  }
  node = node.previousSibling;
  while(node && node.lastChild) {
    node = node.lastChild
  }
  return node
};
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0
};
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj
};
goog.dom.contains = function(parent, descendant) {
  if(parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant)
  }
  if(typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16)
  }
  while(descendant && parent != descendant) {
    descendant = descendant.parentNode
  }
  return descendant == parent
};
goog.dom.compareNodeOrder = function(node1, node2) {
  if(node1 == node2) {
    return 0
  }
  if(node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1
  }
  if("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if(isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex
    }else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if(parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2)
      }
      if(!isElement1 && goog.dom.contains(parent1, node2)) {
        return-1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2)
      }
      if(!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1)
      }
      return(isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex)
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2)
};
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if(parent == node) {
    return-1
  }
  var sibling = node;
  while(sibling.parentNode != parent) {
    sibling = sibling.parentNode
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode)
};
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while(s = s.previousSibling) {
    if(s == node1) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if(!count) {
    return null
  }else {
    if(count == 1) {
      return arguments[0]
    }
  }
  var paths = [];
  var minLength = Infinity;
  for(i = 0;i < count;i++) {
    var ancestors = [];
    var node = arguments[i];
    while(node) {
      ancestors.unshift(node);
      node = node.parentNode
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length)
  }
  var output = null;
  for(i = 0;i < minLength;i++) {
    var first = paths[0][i];
    for(var j = 1;j < count;j++) {
      if(first != paths[j][i]) {
        return output
      }
    }
    output = first
  }
  return output
};
goog.dom.getOwnerDocument = function(node) {
  return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document
};
goog.dom.getFrameContentDocument = function(frame) {
  var doc;
  if(goog.userAgent.WEBKIT) {
    doc = frame.document || frame.contentWindow.document
  }else {
    doc = frame.contentDocument || frame.contentWindow.document
  }
  return doc
};
goog.dom.getFrameContentWindow = function(frame) {
  return frame.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(frame))
};
goog.dom.setTextContent = function(element, text) {
  if("textContent" in element) {
    element.textContent = text
  }else {
    if(element.firstChild && element.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      while(element.lastChild != element.firstChild) {
        element.removeChild(element.lastChild)
      }
      element.firstChild.data = text
    }else {
      goog.dom.removeChildren(element);
      var doc = goog.dom.getOwnerDocument(element);
      element.appendChild(doc.createTextNode(text))
    }
  }
};
goog.dom.getOuterHtml = function(element) {
  if("outerHTML" in element) {
    return element.outerHTML
  }else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = doc.createElement("div");
    div.appendChild(element.cloneNode(true));
    return div.innerHTML
  }
};
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined
};
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv
};
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if(root != null) {
    for(var i = 0, child;child = root.childNodes[i];i++) {
      if(p(child)) {
        rv.push(child);
        if(findOne) {
          return true
        }
      }
      if(goog.dom.findNodes_(child, p, rv, findOne)) {
        return true
      }
    }
  }
  return false
};
goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
goog.dom.isFocusableTabIndex = function(element) {
  var attrNode = element.getAttributeNode("tabindex");
  if(attrNode && attrNode.specified) {
    var index = element.tabIndex;
    return goog.isNumber(index) && index >= 0
  }
  return false
};
goog.dom.setFocusableTabIndex = function(element, enable) {
  if(enable) {
    element.tabIndex = 0
  }else {
    element.removeAttribute("tabIndex")
  }
};
goog.dom.getTextContent = function(node) {
  var textContent;
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in node) {
    textContent = goog.string.canonicalizeNewlines(node.innerText)
  }else {
    var buf = [];
    goog.dom.getTextContent_(node, buf, true);
    textContent = buf.join("")
  }
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  if(!goog.userAgent.IE) {
    textContent = textContent.replace(/ +/g, " ")
  }
  if(textContent != " ") {
    textContent = textContent.replace(/^\s*/, "")
  }
  return textContent
};
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("")
};
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if(node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  }else {
    if(node.nodeType == goog.dom.NodeType.TEXT) {
      if(normalizeWhitespace) {
        buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
      }else {
        buf.push(node.nodeValue)
      }
    }else {
      if(node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName])
      }else {
        var child = node.firstChild;
        while(child) {
          goog.dom.getTextContent_(child, buf, normalizeWhitespace);
          child = child.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length
};
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while(node && node != root) {
    var cur = node;
    while(cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur))
    }
    node = node.parentNode
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur;
  while(stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if(cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    }else {
      if(cur.nodeType == goog.dom.NodeType.TEXT) {
        var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        pos += text.length
      }else {
        if(cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length
        }else {
          for(var i = cur.childNodes.length - 1;i >= 0;i--) {
            stack.push(cur.childNodes[i])
          }
        }
      }
    }
  }
  if(goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur
  }
  return cur
};
goog.dom.isNodeList = function(val) {
  if(val && typeof val.length == "number") {
    if(goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string"
    }else {
      if(goog.isFunction(val)) {
        return typeof val.item == "function"
      }
    }
  }
  return false
};
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class) {
  var tagName = opt_tag ? opt_tag.toUpperCase() : null;
  return goog.dom.getAncestor(element, function(node) {
    return(!tagName || node.nodeName == tagName) && (!opt_class || goog.dom.classes.has(node, opt_class))
  }, true)
};
goog.dom.getAncestorByClass = function(element, opt_class) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, opt_class)
};
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if(!opt_includeNode) {
    element = element.parentNode
  }
  var ignoreSearchSteps = opt_maxSearchSteps == null;
  var steps = 0;
  while(element && (ignoreSearchSteps || steps <= opt_maxSearchSteps)) {
    if(matcher(element)) {
      return element
    }
    element = element.parentNode;
    steps++
  }
  return null
};
goog.dom.DomHelper = function(opt_document) {
  this.document_ = opt_document || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(element) {
  if(goog.isString(element)) {
    return this.document_.getElementById(element)
  }else {
    return element
  }
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc)
};
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.Appendable;
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(name) {
  return this.document_.createElement(name)
};
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(content)
};
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(this.document_, htmlString)
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
goog.provide("goog.functions");
goog.functions.constant = function(retValue) {
  return function() {
    return retValue
  }
};
goog.functions.FALSE = goog.functions.constant(false);
goog.functions.TRUE = goog.functions.constant(true);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function(opt_returnValue, var_args) {
  return opt_returnValue
};
goog.functions.error = function(message) {
  return function() {
    throw Error(message);
  }
};
goog.functions.lock = function(f) {
  return function() {
    return f.call(this)
  }
};
goog.functions.withReturnValue = function(f, retValue) {
  return goog.functions.sequence(f, goog.functions.constant(retValue))
};
goog.functions.compose = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    if(length) {
      result = functions[length - 1].apply(this, arguments)
    }
    for(var i = length - 2;i >= 0;i--) {
      result = functions[i].call(this, result)
    }
    return result
  }
};
goog.functions.sequence = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    for(var i = 0;i < length;i++) {
      result = functions[i].apply(this, arguments)
    }
    return result
  }
};
goog.functions.and = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for(var i = 0;i < length;i++) {
      if(!functions[i].apply(this, arguments)) {
        return false
      }
    }
    return true
  }
};
goog.functions.or = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for(var i = 0;i < length;i++) {
      if(functions[i].apply(this, arguments)) {
        return true
      }
    }
    return false
  }
};
goog.functions.not = function(f) {
  return function() {
    return!f.apply(this, arguments)
  }
};
goog.functions.create = function(constructor, var_args) {
  var temp = function() {
  };
  temp.prototype = constructor.prototype;
  var obj = new temp;
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj
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
goog.provide("goog.dom.query");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.functions");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.query = function() {
  var cssCaseBug = goog.userAgent.WEBKIT && goog.dom.getDocument().compatMode == "BackCompat";
  var childNodesName = !!goog.dom.getDocument().firstChild["children"] ? "children" : "childNodes";
  var specials = ">~+";
  var caseSensitive = false;
  var getQueryParts = function(query) {
    if(specials.indexOf(query.slice(-1)) >= 0) {
      query += " * "
    }else {
      query += " "
    }
    var ts = function(s, e) {
      return goog.string.trim(query.slice(s, e))
    };
    var queryParts = [];
    var inBrackets = -1, inParens = -1, inMatchFor = -1, inPseudo = -1, inClass = -1, inId = -1, inTag = -1, lc = "", cc = "", pStart;
    var x = 0, ql = query.length, currentPart = null, cp = null;
    var endTag = function() {
      if(inTag >= 0) {
        var tv = inTag == x ? null : ts(inTag, x);
        if(specials.indexOf(tv) < 0) {
          currentPart.tag = tv
        }else {
          currentPart.oper = tv
        }
        inTag = -1
      }
    };
    var endId = function() {
      if(inId >= 0) {
        currentPart.id = ts(inId, x).replace(/\\/g, "");
        inId = -1
      }
    };
    var endClass = function() {
      if(inClass >= 0) {
        currentPart.classes.push(ts(inClass + 1, x).replace(/\\/g, ""));
        inClass = -1
      }
    };
    var endAll = function() {
      endId();
      endTag();
      endClass()
    };
    var endPart = function() {
      endAll();
      if(inPseudo >= 0) {
        currentPart.pseudos.push({name:ts(inPseudo + 1, x)})
      }
      currentPart.loops = currentPart.pseudos.length || currentPart.attrs.length || currentPart.classes.length;
      currentPart.oquery = currentPart.query = ts(pStart, x);
      currentPart.otag = currentPart.tag = currentPart.oper ? null : currentPart.tag || "*";
      if(currentPart.tag) {
        currentPart.tag = currentPart.tag.toUpperCase()
      }
      if(queryParts.length && queryParts[queryParts.length - 1].oper) {
        currentPart.infixOper = queryParts.pop();
        currentPart.query = currentPart.infixOper.query + " " + currentPart.query
      }
      queryParts.push(currentPart);
      currentPart = null
    };
    for(;lc = cc, cc = query.charAt(x), x < ql;x++) {
      if(lc == "\\") {
        continue
      }
      if(!currentPart) {
        pStart = x;
        currentPart = {query:null, pseudos:[], attrs:[], classes:[], tag:null, oper:null, id:null, getTag:function() {
          return caseSensitive ? this.otag : this.tag
        }};
        inTag = x
      }
      if(inBrackets >= 0) {
        if(cc == "]") {
          if(!cp.attr) {
            cp.attr = ts(inBrackets + 1, x)
          }else {
            cp.matchFor = ts(inMatchFor || inBrackets + 1, x)
          }
          var cmf = cp.matchFor;
          if(cmf) {
            if(cmf.charAt(0) == '"' || cmf.charAt(0) == "'") {
              cp.matchFor = cmf.slice(1, -1)
            }
          }
          currentPart.attrs.push(cp);
          cp = null;
          inBrackets = inMatchFor = -1
        }else {
          if(cc == "=") {
            var addToCc = "|~^$*".indexOf(lc) >= 0 ? lc : "";
            cp.type = addToCc + cc;
            cp.attr = ts(inBrackets + 1, x - addToCc.length);
            inMatchFor = x + 1
          }
        }
      }else {
        if(inParens >= 0) {
          if(cc == ")") {
            if(inPseudo >= 0) {
              cp.value = ts(inParens + 1, x)
            }
            inPseudo = inParens = -1
          }
        }else {
          if(cc == "#") {
            endAll();
            inId = x + 1
          }else {
            if(cc == ".") {
              endAll();
              inClass = x
            }else {
              if(cc == ":") {
                endAll();
                inPseudo = x
              }else {
                if(cc == "[") {
                  endAll();
                  inBrackets = x;
                  cp = {}
                }else {
                  if(cc == "(") {
                    if(inPseudo >= 0) {
                      cp = {name:ts(inPseudo + 1, x), value:null};
                      currentPart.pseudos.push(cp)
                    }
                    inParens = x
                  }else {
                    if(cc == " " && lc != cc) {
                      endPart()
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return queryParts
  };
  var agree = function(first, second) {
    if(!first) {
      return second
    }
    if(!second) {
      return first
    }
    return function() {
      return first.apply(window, arguments) && second.apply(window, arguments)
    }
  };
  function getArr(i, opt_arr) {
    var r = opt_arr || [];
    if(i) {
      r.push(i)
    }
    return r
  }
  var isElement = function(n) {
    return 1 == n.nodeType
  };
  var blank = "";
  var getAttr = function(elem, attr) {
    if(!elem) {
      return blank
    }
    if(attr == "class") {
      return elem.className || blank
    }
    if(attr == "for") {
      return elem.htmlFor || blank
    }
    if(attr == "style") {
      return elem.style.cssText || blank
    }
    return(caseSensitive ? elem.getAttribute(attr) : elem.getAttribute(attr, 2)) || blank
  };
  var attrs = {"*=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr).indexOf(value) >= 0
    }
  }, "^=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr).indexOf(value) == 0
    }
  }, "$=":function(attr, value) {
    var tval = " " + value;
    return function(elem) {
      var ea = " " + getAttr(elem, attr);
      return ea.lastIndexOf(value) == ea.length - value.length
    }
  }, "~=":function(attr, value) {
    var tval = " " + value + " ";
    return function(elem) {
      var ea = " " + getAttr(elem, attr) + " ";
      return ea.indexOf(tval) >= 0
    }
  }, "|=":function(attr, value) {
    value = " " + value;
    return function(elem) {
      var ea = " " + getAttr(elem, attr);
      return ea == value || ea.indexOf(value + "-") == 0
    }
  }, "=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr) == value
    }
  }};
  var noNextElementSibling = typeof goog.dom.getDocument().firstChild.nextElementSibling == "undefined";
  var nSibling = !noNextElementSibling ? "nextElementSibling" : "nextSibling";
  var pSibling = !noNextElementSibling ? "previousElementSibling" : "previousSibling";
  var simpleNodeTest = noNextElementSibling ? isElement : goog.functions.TRUE;
  var _lookLeft = function(node) {
    while(node = node[pSibling]) {
      if(simpleNodeTest(node)) {
        return false
      }
    }
    return true
  };
  var _lookRight = function(node) {
    while(node = node[nSibling]) {
      if(simpleNodeTest(node)) {
        return false
      }
    }
    return true
  };
  var getNodeIndex = function(node) {
    var root = node.parentNode;
    var i = 0, tret = root[childNodesName], ci = node["_i"] || -1, cl = root["_l"] || -1;
    if(!tret) {
      return-1
    }
    var l = tret.length;
    if(cl == l && ci >= 0 && cl >= 0) {
      return ci
    }
    root["_l"] = l;
    ci = -1;
    var te = root["firstElementChild"] || root["firstChild"];
    for(;te;te = te[nSibling]) {
      if(simpleNodeTest(te)) {
        te["_i"] = ++i;
        if(node === te) {
          ci = i
        }
      }
    }
    return ci
  };
  var isEven = function(elem) {
    return!(getNodeIndex(elem) % 2)
  };
  var isOdd = function(elem) {
    return getNodeIndex(elem) % 2
  };
  var pseudos = {"checked":function(name, condition) {
    return function(elem) {
      return elem.checked || elem.attributes["checked"]
    }
  }, "first-child":function() {
    return _lookLeft
  }, "last-child":function() {
    return _lookRight
  }, "only-child":function(name, condition) {
    return function(node) {
      if(!_lookLeft(node)) {
        return false
      }
      if(!_lookRight(node)) {
        return false
      }
      return true
    }
  }, "empty":function(name, condition) {
    return function(elem) {
      var cn = elem.childNodes;
      var cnl = elem.childNodes.length;
      for(var x = cnl - 1;x >= 0;x--) {
        var nt = cn[x].nodeType;
        if(nt === 1 || nt == 3) {
          return false
        }
      }
      return true
    }
  }, "contains":function(name, condition) {
    var cz = condition.charAt(0);
    if(cz == '"' || cz == "'") {
      condition = condition.slice(1, -1)
    }
    return function(elem) {
      return elem.innerHTML.indexOf(condition) >= 0
    }
  }, "not":function(name, condition) {
    var p = getQueryParts(condition)[0];
    var ignores = {el:1};
    if(p.tag != "*") {
      ignores.tag = 1
    }
    if(!p.classes.length) {
      ignores.classes = 1
    }
    var ntf = getSimpleFilterFunc(p, ignores);
    return function(elem) {
      return!ntf(elem)
    }
  }, "nth-child":function(name, condition) {
    function pi(n) {
      return parseInt(n, 10)
    }
    if(condition == "odd") {
      return isOdd
    }else {
      if(condition == "even") {
        return isEven
      }
    }
    if(condition.indexOf("n") != -1) {
      var tparts = condition.split("n", 2);
      var pred = tparts[0] ? tparts[0] == "-" ? -1 : pi(tparts[0]) : 1;
      var idx = tparts[1] ? pi(tparts[1]) : 0;
      var lb = 0, ub = -1;
      if(pred > 0) {
        if(idx < 0) {
          idx = idx % pred && pred + idx % pred
        }else {
          if(idx > 0) {
            if(idx >= pred) {
              lb = idx - idx % pred
            }
            idx = idx % pred
          }
        }
      }else {
        if(pred < 0) {
          pred *= -1;
          if(idx > 0) {
            ub = idx;
            idx = idx % pred
          }
        }
      }
      if(pred > 0) {
        return function(elem) {
          var i = getNodeIndex(elem);
          return i >= lb && (ub < 0 || i <= ub) && i % pred == idx
        }
      }else {
        condition = idx
      }
    }
    var ncount = pi(condition);
    return function(elem) {
      return getNodeIndex(elem) == ncount
    }
  }};
  var defaultGetter = goog.userAgent.IE ? function(cond) {
    var clc = cond.toLowerCase();
    if(clc == "class") {
      cond = "className"
    }
    return function(elem) {
      return caseSensitive ? elem.getAttribute(cond) : elem[cond] || elem[clc]
    }
  } : function(cond) {
    return function(elem) {
      return elem && elem.getAttribute && elem.hasAttribute(cond)
    }
  };
  var getSimpleFilterFunc = function(query, ignores) {
    if(!query) {
      return goog.functions.TRUE
    }
    ignores = ignores || {};
    var ff = null;
    if(!ignores.el) {
      ff = agree(ff, isElement)
    }
    if(!ignores.tag) {
      if(query.tag != "*") {
        ff = agree(ff, function(elem) {
          return elem && elem.tagName == query.getTag()
        })
      }
    }
    if(!ignores.classes) {
      goog.array.forEach(query.classes, function(cname, idx, arr) {
        var re = new RegExp("(?:^|\\s)" + cname + "(?:\\s|$)");
        ff = agree(ff, function(elem) {
          return re.test(elem.className)
        });
        ff.count = idx
      })
    }
    if(!ignores.pseudos) {
      goog.array.forEach(query.pseudos, function(pseudo) {
        var pn = pseudo.name;
        if(pseudos[pn]) {
          ff = agree(ff, pseudos[pn](pn, pseudo.value))
        }
      })
    }
    if(!ignores.attrs) {
      goog.array.forEach(query.attrs, function(attr) {
        var matcher;
        var a = attr.attr;
        if(attr.type && attrs[attr.type]) {
          matcher = attrs[attr.type](a, attr.matchFor)
        }else {
          if(a.length) {
            matcher = defaultGetter(a)
          }
        }
        if(matcher) {
          ff = agree(ff, matcher)
        }
      })
    }
    if(!ignores.id) {
      if(query.id) {
        ff = agree(ff, function(elem) {
          return!!elem && elem.id == query.id
        })
      }
    }
    if(!ff) {
      if(!("default" in ignores)) {
        ff = goog.functions.TRUE
      }
    }
    return ff
  };
  var nextSiblingIterator = function(filterFunc) {
    return function(node, ret, bag) {
      while(node = node[nSibling]) {
        if(noNextElementSibling && !isElement(node)) {
          continue
        }
        if((!bag || _isUnique(node, bag)) && filterFunc(node)) {
          ret.push(node)
        }
        break
      }
      return ret
    }
  };
  var nextSiblingsIterator = function(filterFunc) {
    return function(root, ret, bag) {
      var te = root[nSibling];
      while(te) {
        if(simpleNodeTest(te)) {
          if(bag && !_isUnique(te, bag)) {
            break
          }
          if(filterFunc(te)) {
            ret.push(te)
          }
        }
        te = te[nSibling]
      }
      return ret
    }
  };
  var _childElements = function(filterFunc) {
    filterFunc = filterFunc || goog.functions.TRUE;
    return function(root, ret, bag) {
      var te, x = 0, tret = root[childNodesName];
      while(te = tret[x++]) {
        if(simpleNodeTest(te) && (!bag || _isUnique(te, bag)) && filterFunc(te, x)) {
          ret.push(te)
        }
      }
      return ret
    }
  };
  var _isDescendant = function(node, root) {
    var pn = node.parentNode;
    while(pn) {
      if(pn == root) {
        break
      }
      pn = pn.parentNode
    }
    return!!pn
  };
  var _getElementsFuncCache = {};
  var getElementsFunc = function(query) {
    var retFunc = _getElementsFuncCache[query.query];
    if(retFunc) {
      return retFunc
    }
    var io = query.infixOper;
    var oper = io ? io.oper : "";
    var filterFunc = getSimpleFilterFunc(query, {el:1});
    var qt = query.tag;
    var wildcardTag = "*" == qt;
    var ecs = goog.dom.getDocument()["getElementsByClassName"];
    if(!oper) {
      if(query.id) {
        filterFunc = !query.loops && wildcardTag ? goog.functions.TRUE : getSimpleFilterFunc(query, {el:1, id:1});
        retFunc = function(root, arr) {
          var te = goog.dom.getDomHelper(root).getElement(query.id);
          if(!te || !filterFunc(te)) {
            return
          }
          if(9 == root.nodeType) {
            return getArr(te, arr)
          }else {
            if(_isDescendant(te, root)) {
              return getArr(te, arr)
            }
          }
        }
      }else {
        if(ecs && /\{\s*\[native code\]\s*\}/.test(String(ecs)) && query.classes.length && !cssCaseBug) {
          filterFunc = getSimpleFilterFunc(query, {el:1, classes:1, id:1});
          var classesString = query.classes.join(" ");
          retFunc = function(root, arr) {
            var ret = getArr(0, arr), te, x = 0;
            var tret = root.getElementsByClassName(classesString);
            while(te = tret[x++]) {
              if(filterFunc(te, root)) {
                ret.push(te)
              }
            }
            return ret
          }
        }else {
          if(!wildcardTag && !query.loops) {
            retFunc = function(root, arr) {
              var ret = getArr(0, arr), te, x = 0;
              var tret = root.getElementsByTagName(query.getTag());
              while(te = tret[x++]) {
                ret.push(te)
              }
              return ret
            }
          }else {
            filterFunc = getSimpleFilterFunc(query, {el:1, tag:1, id:1});
            retFunc = function(root, arr) {
              var ret = getArr(0, arr), te, x = 0;
              var tret = root.getElementsByTagName(query.getTag());
              while(te = tret[x++]) {
                if(filterFunc(te, root)) {
                  ret.push(te)
                }
              }
              return ret
            }
          }
        }
      }
    }else {
      var skipFilters = {el:1};
      if(wildcardTag) {
        skipFilters.tag = 1
      }
      filterFunc = getSimpleFilterFunc(query, skipFilters);
      if("+" == oper) {
        retFunc = nextSiblingIterator(filterFunc)
      }else {
        if("~" == oper) {
          retFunc = nextSiblingsIterator(filterFunc)
        }else {
          if(">" == oper) {
            retFunc = _childElements(filterFunc)
          }
        }
      }
    }
    return _getElementsFuncCache[query.query] = retFunc
  };
  var filterDown = function(root, queryParts) {
    var candidates = getArr(root), qp, x, te, qpl = queryParts.length, bag, ret;
    for(var i = 0;i < qpl;i++) {
      ret = [];
      qp = queryParts[i];
      x = candidates.length - 1;
      if(x > 0) {
        bag = {};
        ret.nozip = true
      }
      var gef = getElementsFunc(qp);
      for(var j = 0;te = candidates[j];j++) {
        gef(te, ret, bag)
      }
      if(!ret.length) {
        break
      }
      candidates = ret
    }
    return ret
  };
  var _queryFuncCacheDOM = {}, _queryFuncCacheQSA = {};
  var getStepQueryFunc = function(query) {
    var qparts = getQueryParts(goog.string.trim(query));
    if(qparts.length == 1) {
      var tef = getElementsFunc(qparts[0]);
      return function(root) {
        var r = tef(root, []);
        if(r) {
          r.nozip = true
        }
        return r
      }
    }
    return function(root) {
      return filterDown(root, qparts)
    }
  };
  var qsa = "querySelectorAll";
  var qsaAvail = !!goog.dom.getDocument()[qsa] && (!goog.userAgent.WEBKIT || goog.userAgent.isVersion("526"));
  var getQueryFunc = function(query, opt_forceDOM) {
    if(qsaAvail) {
      var qsaCached = _queryFuncCacheQSA[query];
      if(qsaCached && !opt_forceDOM) {
        return qsaCached
      }
    }
    var domCached = _queryFuncCacheDOM[query];
    if(domCached) {
      return domCached
    }
    var qcz = query.charAt(0);
    var nospace = -1 == query.indexOf(" ");
    if(query.indexOf("#") >= 0 && nospace) {
      opt_forceDOM = true
    }
    var useQSA = qsaAvail && !opt_forceDOM && specials.indexOf(qcz) == -1 && (!goog.userAgent.IE || query.indexOf(":") == -1) && !(cssCaseBug && query.indexOf(".") >= 0) && query.indexOf(":contains") == -1 && query.indexOf("|=") == -1;
    if(useQSA) {
      var tq = specials.indexOf(query.charAt(query.length - 1)) >= 0 ? query + " *" : query;
      return _queryFuncCacheQSA[query] = function(root) {
        try {
          if(!(9 == root.nodeType || nospace)) {
            throw"";
          }
          var r = root[qsa](tq);
          if(goog.userAgent.IE) {
            r.commentStrip = true
          }else {
            r.nozip = true
          }
          return r
        }catch(e) {
          return getQueryFunc(query, true)(root)
        }
      }
    }else {
      var parts = query.split(/\s*,\s*/);
      return _queryFuncCacheDOM[query] = parts.length < 2 ? getStepQueryFunc(query) : function(root) {
        var pindex = 0, ret = [], tp;
        while(tp = parts[pindex++]) {
          ret = ret.concat(getStepQueryFunc(tp)(root))
        }
        return ret
      }
    }
  };
  var _zipIdx = 0;
  var _nodeUID = goog.userAgent.IE ? function(node) {
    if(caseSensitive) {
      return node.getAttribute("_uid") || node.setAttribute("_uid", ++_zipIdx) || _zipIdx
    }else {
      return node.uniqueID
    }
  } : function(node) {
    return node["_uid"] || (node["_uid"] = ++_zipIdx)
  };
  var _isUnique = function(node, bag) {
    if(!bag) {
      return 1
    }
    var id = _nodeUID(node);
    if(!bag[id]) {
      return bag[id] = 1
    }
    return 0
  };
  var _zipIdxName = "_zipIdx";
  var _zip = function(arr) {
    if(arr && arr.nozip) {
      return arr
    }
    var ret = [];
    if(!arr || !arr.length) {
      return ret
    }
    if(arr[0]) {
      ret.push(arr[0])
    }
    if(arr.length < 2) {
      return ret
    }
    _zipIdx++;
    if(goog.userAgent.IE && caseSensitive) {
      var szidx = _zipIdx + "";
      arr[0].setAttribute(_zipIdxName, szidx);
      for(var x = 1, te;te = arr[x];x++) {
        if(arr[x].getAttribute(_zipIdxName) != szidx) {
          ret.push(te)
        }
        te.setAttribute(_zipIdxName, szidx)
      }
    }else {
      if(goog.userAgent.IE && arr.commentStrip) {
        try {
          for(var x = 1, te;te = arr[x];x++) {
            if(isElement(te)) {
              ret.push(te)
            }
          }
        }catch(e) {
        }
      }else {
        if(arr[0]) {
          arr[0][_zipIdxName] = _zipIdx
        }
        for(var x = 1, te;te = arr[x];x++) {
          if(arr[x][_zipIdxName] != _zipIdx) {
            ret.push(te)
          }
          te[_zipIdxName] = _zipIdx
        }
      }
    }
    return ret
  };
  var query = function(query, root) {
    if(!query) {
      return[]
    }
    if(query.constructor == Array) {
      return query
    }
    if(!goog.isString(query)) {
      return[query]
    }
    if(goog.isString(root)) {
      root = goog.dom.getElement(root);
      if(!root) {
        return[]
      }
    }
    root = root || goog.dom.getDocument();
    var od = root.ownerDocument || root.documentElement;
    caseSensitive = root.contentType && root.contentType == "application/xml" || goog.userAgent.OPERA && (root.doctype || od.toString() == "[object XMLDocument]") || !!od && (goog.userAgent.IE ? od.xml : root.xmlVersion || od.xmlVersion);
    var r = getQueryFunc(query)(root);
    if(r && r.nozip) {
      return r
    }
    return _zip(r)
  };
  query.pseudos = pseudos;
  return query
}();
goog.exportSymbol("goog.dom.query", goog.dom.query);
goog.exportSymbol("goog.dom.query.pseudos", goog.dom.query.pseudos);
goog.provide("goog.userAgent.jscript");
goog.require("goog.string");
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = false;
goog.userAgent.jscript.init_ = function() {
  var hasScriptEngine = "ScriptEngine" in goog.global;
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = hasScriptEngine && goog.global["ScriptEngine"]() == "JScript";
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global["ScriptEngineMajorVersion"]() + "." + goog.global["ScriptEngineMinorVersion"]() + "." + goog.global["ScriptEngineBuildVersion"]() : "0"
};
if(!goog.userAgent.jscript.ASSUME_NO_JSCRIPT) {
  goog.userAgent.jscript.init_()
}
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? false : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(version) {
  return goog.string.compareVersions(goog.userAgent.jscript.VERSION, version) >= 0
};
goog.provide("goog.string.StringBuffer");
goog.require("goog.userAgent.jscript");
goog.string.StringBuffer = function(opt_a1, var_args) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  if(opt_a1 != null) {
    this.append.apply(this, arguments)
  }
};
goog.string.StringBuffer.prototype.set = function(s) {
  this.clear();
  this.append(s)
};
if(goog.userAgent.jscript.HAS_JSCRIPT) {
  goog.string.StringBuffer.prototype.bufferLength_ = 0;
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    if(opt_a2 == null) {
      this.buffer_[this.bufferLength_++] = a1
    }else {
      this.buffer_.push.apply(this.buffer_, arguments);
      this.bufferLength_ = this.buffer_.length
    }
    return this
  }
}else {
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    this.buffer_ += a1;
    if(opt_a2 != null) {
      for(var i = 1;i < arguments.length;i++) {
        this.buffer_ += arguments[i]
      }
    }
    return this
  }
}
goog.string.StringBuffer.prototype.clear = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    this.buffer_.length = 0;
    this.bufferLength_ = 0
  }else {
    this.buffer_ = ""
  }
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var str = this.buffer_.join("");
    this.clear();
    if(str) {
      this.append(str)
    }
    return str
  }else {
    return this.buffer_
  }
};
goog.provide("goog.events.EventWrapper");
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.provide("goog.events.BrowserFeature");
goog.require("goog.userAgent");
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isVersion("9"), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.provide("goog.disposable.IDisposable");
goog.disposable.IDisposable = function() {
};
goog.disposable.IDisposable.prototype.dispose;
goog.disposable.IDisposable.prototype.isDisposed;
goog.provide("goog.Disposable");
goog.provide("goog.dispose");
goog.require("goog.disposable.IDisposable");
goog.Disposable = function() {
  if(goog.Disposable.ENABLE_MONITORING) {
    goog.Disposable.instances_[goog.getUid(this)] = this
  }
};
goog.Disposable.ENABLE_MONITORING = false;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var ret = [];
  for(var id in goog.Disposable.instances_) {
    if(goog.Disposable.instances_.hasOwnProperty(id)) {
      ret.push(goog.Disposable.instances_[Number(id)])
    }
  }
  return ret
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = false;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
    if(goog.Disposable.ENABLE_MONITORING) {
      var uid = goog.getUid(this);
      if(!goog.Disposable.instances_.hasOwnProperty(uid)) {
        throw Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
      }
      delete goog.Disposable.instances_[uid]
    }
  }
};
goog.Disposable.prototype.disposeInternal = function() {
};
goog.dispose = function(obj) {
  if(obj && typeof obj.dispose == "function") {
    obj.dispose()
  }
};
goog.provide("goog.events.Event");
goog.require("goog.Disposable");
goog.events.Event = function(type, opt_target) {
  goog.Disposable.call(this);
  this.type = type;
  this.target = opt_target;
  this.currentTarget = this.target
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = false;
goog.events.Event.prototype.returnValue_ = true;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = true
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = false
};
goog.events.Event.stopPropagation = function(e) {
  e.stopPropagation()
};
goog.events.Event.preventDefault = function(e) {
  e.preventDefault()
};
goog.provide("goog.events.EventType");
goog.require("goog.userAgent");
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
MESSAGE:"message", CONNECT:"connect"};
goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object
};
goog.reflect.sinkValue = new Function("a", "return a");
goog.provide("goog.events.BrowserEvent");
goog.provide("goog.events.BrowserEvent.MouseButton");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventType");
goog.require("goog.reflect");
goog.require("goog.userAgent");
goog.events.BrowserEvent = function(opt_e, opt_currentTarget) {
  if(opt_e) {
    this.init(opt_e, opt_currentTarget)
  }
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.currentTarget;
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
goog.events.BrowserEvent.prototype.ctrlKey = false;
goog.events.BrowserEvent.prototype.altKey = false;
goog.events.BrowserEvent.prototype.shiftKey = false;
goog.events.BrowserEvent.prototype.metaKey = false;
goog.events.BrowserEvent.prototype.state;
goog.events.BrowserEvent.prototype.platformModifierKey = false;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(e, opt_currentTarget) {
  var type = this.type = e.type;
  goog.events.Event.call(this, type);
  this.target = e.target || e.srcElement;
  this.currentTarget = opt_currentTarget;
  var relatedTarget = e.relatedTarget;
  if(relatedTarget) {
    if(goog.userAgent.GECKO) {
      try {
        goog.reflect.sinkValue(relatedTarget.nodeName)
      }catch(err) {
        relatedTarget = null
      }
    }
  }else {
    if(type == goog.events.EventType.MOUSEOVER) {
      relatedTarget = e.fromElement
    }else {
      if(type == goog.events.EventType.MOUSEOUT) {
        relatedTarget = e.toElement
      }
    }
  }
  this.relatedTarget = relatedTarget;
  this.offsetX = e.offsetX !== undefined ? e.offsetX : e.layerX;
  this.offsetY = e.offsetY !== undefined ? e.offsetY : e.layerY;
  this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
  this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
  this.screenX = e.screenX || 0;
  this.screenY = e.screenY || 0;
  this.button = e.button;
  this.keyCode = e.keyCode || 0;
  this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
  this.ctrlKey = e.ctrlKey;
  this.altKey = e.altKey;
  this.shiftKey = e.shiftKey;
  this.metaKey = e.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
  this.state = e.state;
  this.event_ = e;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(button) {
  if(!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
    if(this.type == "click") {
      return button == goog.events.BrowserEvent.MouseButton.LEFT
    }else {
      return!!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[button])
    }
  }else {
    return this.event_.button == button
  }
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  if(this.event_.stopPropagation) {
    this.event_.stopPropagation()
  }else {
    this.event_.cancelBubble = true
  }
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var be = this.event_;
  if(!be.preventDefault) {
    be.returnValue = false;
    if(goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        var VK_F1 = 112;
        var VK_F12 = 123;
        if(be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
          be.keyCode = -1
        }
      }catch(ex) {
      }
    }
  }else {
    be.preventDefault()
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.event_ = null;
  this.target = null;
  this.currentTarget = null;
  this.relatedTarget = null
};
goog.provide("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.math.Box = function(top, right, bottom, left) {
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left
};
goog.math.Box.boundingBox = function(var_args) {
  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);
  for(var i = 1;i < arguments.length;i++) {
    var coord = arguments[i];
    box.top = Math.min(box.top, coord.y);
    box.right = Math.max(box.right, coord.x);
    box.bottom = Math.max(box.bottom, coord.y);
    box.left = Math.min(box.left, coord.x)
  }
  return box
};
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left)
};
if(goog.DEBUG) {
  goog.math.Box.prototype.toString = function() {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  }
}
goog.math.Box.prototype.contains = function(other) {
  return goog.math.Box.contains(this, other)
};
goog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {
  if(goog.isObject(top)) {
    this.top -= top.top;
    this.right += top.right;
    this.bottom += top.bottom;
    this.left -= top.left
  }else {
    this.top -= top;
    this.right += opt_right;
    this.bottom += opt_bottom;
    this.left -= opt_left
  }
  return this
};
goog.math.Box.prototype.expandToInclude = function(box) {
  this.left = Math.min(this.left, box.left);
  this.top = Math.min(this.top, box.top);
  this.right = Math.max(this.right, box.right);
  this.bottom = Math.max(this.bottom, box.bottom)
};
goog.math.Box.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
};
goog.math.Box.contains = function(box, other) {
  if(!box || !other) {
    return false
  }
  if(other instanceof goog.math.Box) {
    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom
  }
  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom
};
goog.math.Box.distance = function(box, coord) {
  if(coord.x >= box.left && coord.x <= box.right) {
    if(coord.y >= box.top && coord.y <= box.bottom) {
      return 0
    }
    return coord.y < box.top ? box.top - coord.y : coord.y - box.bottom
  }
  if(coord.y >= box.top && coord.y <= box.bottom) {
    return coord.x < box.left ? box.left - coord.x : coord.x - box.right
  }
  return goog.math.Coordinate.distance(coord, new goog.math.Coordinate(coord.x < box.left ? box.left : box.right, coord.y < box.top ? box.top : box.bottom))
};
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
};
goog.math.Box.intersectsWithPadding = function(a, b, padding) {
  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding
};
goog.provide("goog.math.Rect");
goog.require("goog.math.Box");
goog.require("goog.math.Size");
goog.math.Rect = function(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.width = w;
  this.height = h
};
goog.math.Rect.prototype.clone = function() {
  return new goog.math.Rect(this.left, this.top, this.width, this.height)
};
goog.math.Rect.prototype.toBox = function() {
  var right = this.left + this.width;
  var bottom = this.top + this.height;
  return new goog.math.Box(this.top, right, bottom, this.left)
};
goog.math.Rect.createFromBox = function(box) {
  return new goog.math.Rect(box.left, box.top, box.right - box.left, box.bottom - box.top)
};
if(goog.DEBUG) {
  goog.math.Rect.prototype.toString = function() {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  }
}
goog.math.Rect.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
};
goog.math.Rect.prototype.intersection = function(rect) {
  var x0 = Math.max(this.left, rect.left);
  var x1 = Math.min(this.left + this.width, rect.left + rect.width);
  if(x0 <= x1) {
    var y0 = Math.max(this.top, rect.top);
    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
    if(y0 <= y1) {
      this.left = x0;
      this.top = y0;
      this.width = x1 - x0;
      this.height = y1 - y0;
      return true
    }
  }
  return false
};
goog.math.Rect.intersection = function(a, b) {
  var x0 = Math.max(a.left, b.left);
  var x1 = Math.min(a.left + a.width, b.left + b.width);
  if(x0 <= x1) {
    var y0 = Math.max(a.top, b.top);
    var y1 = Math.min(a.top + a.height, b.top + b.height);
    if(y0 <= y1) {
      return new goog.math.Rect(x0, y0, x1 - x0, y1 - y0)
    }
  }
  return null
};
goog.math.Rect.intersects = function(a, b) {
  return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
};
goog.math.Rect.prototype.intersects = function(rect) {
  return goog.math.Rect.intersects(this, rect)
};
goog.math.Rect.difference = function(a, b) {
  var intersection = goog.math.Rect.intersection(a, b);
  if(!intersection || !intersection.height || !intersection.width) {
    return[a.clone()]
  }
  var result = [];
  var top = a.top;
  var height = a.height;
  var ar = a.left + a.width;
  var ab = a.top + a.height;
  var br = b.left + b.width;
  var bb = b.top + b.height;
  if(b.top > a.top) {
    result.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top));
    top = b.top;
    height -= b.top - a.top
  }
  if(bb < ab) {
    result.push(new goog.math.Rect(a.left, bb, a.width, ab - bb));
    height = bb - top
  }
  if(b.left > a.left) {
    result.push(new goog.math.Rect(a.left, top, b.left - a.left, height))
  }
  if(br < ar) {
    result.push(new goog.math.Rect(br, top, ar - br, height))
  }
  return result
};
goog.math.Rect.prototype.difference = function(rect) {
  return goog.math.Rect.difference(this, rect)
};
goog.math.Rect.prototype.boundingRect = function(rect) {
  var right = Math.max(this.left + this.width, rect.left + rect.width);
  var bottom = Math.max(this.top + this.height, rect.top + rect.height);
  this.left = Math.min(this.left, rect.left);
  this.top = Math.min(this.top, rect.top);
  this.width = right - this.left;
  this.height = bottom - this.top
};
goog.math.Rect.boundingRect = function(a, b) {
  if(!a || !b) {
    return null
  }
  var clone = a.clone();
  clone.boundingRect(b);
  return clone
};
goog.math.Rect.prototype.contains = function(another) {
  if(another instanceof goog.math.Rect) {
    return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height
  }else {
    return another.x >= this.left && another.x <= this.left + this.width && another.y >= this.top && another.y <= this.top + this.height
  }
};
goog.math.Rect.prototype.getSize = function() {
  return new goog.math.Size(this.width, this.height)
};
goog.provide("goog.style");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.style.setStyle = function(element, style, opt_value) {
  if(goog.isString(style)) {
    goog.style.setStyle_(element, opt_value, style)
  }else {
    goog.object.forEach(style, goog.partial(goog.style.setStyle_, element))
  }
};
goog.style.setStyle_ = function(element, value, style) {
  element.style[goog.string.toCamelCase(style)] = value
};
goog.style.getStyle = function(element, property) {
  return element.style[goog.string.toCamelCase(property)] || ""
};
goog.style.getComputedStyle = function(element, property) {
  var doc = goog.dom.getOwnerDocument(element);
  if(doc.defaultView && doc.defaultView.getComputedStyle) {
    var styles = doc.defaultView.getComputedStyle(element, null);
    if(styles) {
      return styles[property] || styles.getPropertyValue(property)
    }
  }
  return""
};
goog.style.getCascadedStyle = function(element, style) {
  return element.currentStyle ? element.currentStyle[style] : null
};
goog.style.getStyle_ = function(element, style) {
  return goog.style.getComputedStyle(element, style) || goog.style.getCascadedStyle(element, style) || element.style[style]
};
goog.style.getComputedPosition = function(element) {
  return goog.style.getStyle_(element, "position")
};
goog.style.getBackgroundColor = function(element) {
  return goog.style.getStyle_(element, "backgroundColor")
};
goog.style.getComputedOverflowX = function(element) {
  return goog.style.getStyle_(element, "overflowX")
};
goog.style.getComputedOverflowY = function(element) {
  return goog.style.getStyle_(element, "overflowY")
};
goog.style.getComputedZIndex = function(element) {
  return goog.style.getStyle_(element, "zIndex")
};
goog.style.getComputedTextAlign = function(element) {
  return goog.style.getStyle_(element, "textAlign")
};
goog.style.getComputedCursor = function(element) {
  return goog.style.getStyle_(element, "cursor")
};
goog.style.setPosition = function(el, arg1, opt_arg2) {
  var x, y;
  var buggyGeckoSubPixelPos = goog.userAgent.GECKO && (goog.userAgent.MAC || goog.userAgent.X11) && goog.userAgent.isVersion("1.9");
  if(arg1 instanceof goog.math.Coordinate) {
    x = arg1.x;
    y = arg1.y
  }else {
    x = arg1;
    y = opt_arg2
  }
  el.style.left = goog.style.getPixelStyleValue_(x, buggyGeckoSubPixelPos);
  el.style.top = goog.style.getPixelStyleValue_(y, buggyGeckoSubPixelPos)
};
goog.style.getPosition = function(element) {
  return new goog.math.Coordinate(element.offsetLeft, element.offsetTop)
};
goog.style.getClientViewportElement = function(opt_node) {
  var doc;
  if(opt_node) {
    if(opt_node.nodeType == goog.dom.NodeType.DOCUMENT) {
      doc = opt_node
    }else {
      doc = goog.dom.getOwnerDocument(opt_node)
    }
  }else {
    doc = goog.dom.getDocument()
  }
  if(goog.userAgent.IE && !goog.userAgent.isVersion(9) && !goog.dom.getDomHelper(doc).isCss1CompatMode()) {
    return doc.body
  }
  return doc.documentElement
};
goog.style.getBoundingClientRect_ = function(el) {
  var rect = el.getBoundingClientRect();
  if(goog.userAgent.IE) {
    var doc = el.ownerDocument;
    rect.left -= doc.documentElement.clientLeft + doc.body.clientLeft;
    rect.top -= doc.documentElement.clientTop + doc.body.clientTop
  }
  return rect
};
goog.style.getOffsetParent = function(element) {
  if(goog.userAgent.IE) {
    return element.offsetParent
  }
  var doc = goog.dom.getOwnerDocument(element);
  var positionStyle = goog.style.getStyle_(element, "position");
  var skipStatic = positionStyle == "fixed" || positionStyle == "absolute";
  for(var parent = element.parentNode;parent && parent != doc;parent = parent.parentNode) {
    positionStyle = goog.style.getStyle_(parent, "position");
    skipStatic = skipStatic && positionStyle == "static" && parent != doc.documentElement && parent != doc.body;
    if(!skipStatic && (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight || positionStyle == "fixed" || positionStyle == "absolute")) {
      return parent
    }
  }
  return null
};
goog.style.getVisibleRectForElement = function(element) {
  var visibleRect = new goog.math.Box(0, Infinity, Infinity, 0);
  var dom = goog.dom.getDomHelper(element);
  var body = dom.getDocument().body;
  var scrollEl = dom.getDocumentScrollElement();
  var inContainer;
  for(var el = element;el = goog.style.getOffsetParent(el);) {
    if((!goog.userAgent.IE || el.clientWidth != 0) && (!goog.userAgent.WEBKIT || el.clientHeight != 0 || el != body) && (el.scrollWidth != el.clientWidth || el.scrollHeight != el.clientHeight) && goog.style.getStyle_(el, "overflow") != "visible") {
      var pos = goog.style.getPageOffset(el);
      var client = goog.style.getClientLeftTop(el);
      pos.x += client.x;
      pos.y += client.y;
      visibleRect.top = Math.max(visibleRect.top, pos.y);
      visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.x);
      inContainer = inContainer || el != scrollEl
    }
  }
  var scrollX = scrollEl.scrollLeft, scrollY = scrollEl.scrollTop;
  if(goog.userAgent.WEBKIT) {
    visibleRect.left += scrollX;
    visibleRect.top += scrollY
  }else {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY)
  }
  if(!inContainer || goog.userAgent.WEBKIT) {
    visibleRect.right += scrollX;
    visibleRect.bottom += scrollY
  }
  var winSize = dom.getViewportSize();
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null
};
goog.style.scrollIntoContainerView = function(element, container, opt_center) {
  var elementPos = goog.style.getPageOffset(element);
  var containerPos = goog.style.getPageOffset(container);
  var containerBorder = goog.style.getBorderBox(container);
  var relX = elementPos.x - containerPos.x - containerBorder.left;
  var relY = elementPos.y - containerPos.y - containerBorder.top;
  var spaceX = container.clientWidth - element.offsetWidth;
  var spaceY = container.clientHeight - element.offsetHeight;
  if(opt_center) {
    container.scrollLeft += relX - spaceX / 2;
    container.scrollTop += relY - spaceY / 2
  }else {
    container.scrollLeft += Math.min(relX, Math.max(relX - spaceX, 0));
    container.scrollTop += Math.min(relY, Math.max(relY - spaceY, 0))
  }
};
goog.style.getClientLeftTop = function(el) {
  if(goog.userAgent.GECKO && !goog.userAgent.isVersion("1.9")) {
    var left = parseFloat(goog.style.getComputedStyle(el, "borderLeftWidth"));
    if(goog.style.isRightToLeft(el)) {
      var scrollbarWidth = el.offsetWidth - el.clientWidth - left - parseFloat(goog.style.getComputedStyle(el, "borderRightWidth"));
      left += scrollbarWidth
    }
    return new goog.math.Coordinate(left, parseFloat(goog.style.getComputedStyle(el, "borderTopWidth")))
  }
  return new goog.math.Coordinate(el.clientLeft, el.clientTop)
};
goog.style.getPageOffset = function(el) {
  var box, doc = goog.dom.getOwnerDocument(el);
  var positionStyle = goog.style.getStyle_(el, "position");
  var BUGGY_GECKO_BOX_OBJECT = goog.userAgent.GECKO && doc.getBoxObjectFor && !el.getBoundingClientRect && positionStyle == "absolute" && (box = doc.getBoxObjectFor(el)) && (box.screenX < 0 || box.screenY < 0);
  var pos = new goog.math.Coordinate(0, 0);
  var viewportElement = goog.style.getClientViewportElement(doc);
  if(el == viewportElement) {
    return pos
  }
  if(el.getBoundingClientRect) {
    box = goog.style.getBoundingClientRect_(el);
    var scrollCoord = goog.dom.getDomHelper(doc).getDocumentScroll();
    pos.x = box.left + scrollCoord.x;
    pos.y = box.top + scrollCoord.y
  }else {
    if(doc.getBoxObjectFor && !BUGGY_GECKO_BOX_OBJECT) {
      box = doc.getBoxObjectFor(el);
      var vpBox = doc.getBoxObjectFor(viewportElement);
      pos.x = box.screenX - vpBox.screenX;
      pos.y = box.screenY - vpBox.screenY
    }else {
      var parent = el;
      do {
        pos.x += parent.offsetLeft;
        pos.y += parent.offsetTop;
        if(parent != el) {
          pos.x += parent.clientLeft || 0;
          pos.y += parent.clientTop || 0
        }
        if(goog.userAgent.WEBKIT && goog.style.getComputedPosition(parent) == "fixed") {
          pos.x += doc.body.scrollLeft;
          pos.y += doc.body.scrollTop;
          break
        }
        parent = parent.offsetParent
      }while(parent && parent != el);
      if(goog.userAgent.OPERA || goog.userAgent.WEBKIT && positionStyle == "absolute") {
        pos.y -= doc.body.offsetTop
      }
      for(parent = el;(parent = goog.style.getOffsetParent(parent)) && parent != doc.body && parent != viewportElement;) {
        pos.x -= parent.scrollLeft;
        if(!goog.userAgent.OPERA || parent.tagName != "TR") {
          pos.y -= parent.scrollTop
        }
      }
    }
  }
  return pos
};
goog.style.getPageOffsetLeft = function(el) {
  return goog.style.getPageOffset(el).x
};
goog.style.getPageOffsetTop = function(el) {
  return goog.style.getPageOffset(el).y
};
goog.style.getFramedPageOffset = function(el, relativeWin) {
  var position = new goog.math.Coordinate(0, 0);
  var currentWin = goog.dom.getWindow(goog.dom.getOwnerDocument(el));
  var currentEl = el;
  do {
    var offset = currentWin == relativeWin ? goog.style.getPageOffset(currentEl) : goog.style.getClientPosition(currentEl);
    position.x += offset.x;
    position.y += offset.y
  }while(currentWin && currentWin != relativeWin && (currentEl = currentWin.frameElement) && (currentWin = currentWin.parent));
  return position
};
goog.style.translateRectForAnotherFrame = function(rect, origBase, newBase) {
  if(origBase.getDocument() != newBase.getDocument()) {
    var body = origBase.getDocument().body;
    var pos = goog.style.getFramedPageOffset(body, newBase.getWindow());
    pos = goog.math.Coordinate.difference(pos, goog.style.getPageOffset(body));
    if(goog.userAgent.IE && !origBase.isCss1CompatMode()) {
      pos = goog.math.Coordinate.difference(pos, origBase.getDocumentScroll())
    }
    rect.left += pos.x;
    rect.top += pos.y
  }
};
goog.style.getRelativePosition = function(a, b) {
  var ap = goog.style.getClientPosition(a);
  var bp = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(ap.x - bp.x, ap.y - bp.y)
};
goog.style.getClientPosition = function(el) {
  var pos = new goog.math.Coordinate;
  if(el.nodeType == goog.dom.NodeType.ELEMENT) {
    if(el.getBoundingClientRect) {
      var box = goog.style.getBoundingClientRect_(el);
      pos.x = box.left;
      pos.y = box.top
    }else {
      var scrollCoord = goog.dom.getDomHelper(el).getDocumentScroll();
      var pageCoord = goog.style.getPageOffset(el);
      pos.x = pageCoord.x - scrollCoord.x;
      pos.y = pageCoord.y - scrollCoord.y
    }
  }else {
    var isAbstractedEvent = goog.isFunction(el.getBrowserEvent);
    var targetEvent = el;
    if(el.targetTouches) {
      targetEvent = el.targetTouches[0]
    }else {
      if(isAbstractedEvent && el.getBrowserEvent().targetTouches) {
        targetEvent = el.getBrowserEvent().targetTouches[0]
      }
    }
    pos.x = targetEvent.clientX;
    pos.y = targetEvent.clientY
  }
  return pos
};
goog.style.setPageOffset = function(el, x, opt_y) {
  var cur = goog.style.getPageOffset(el);
  if(x instanceof goog.math.Coordinate) {
    opt_y = x.y;
    x = x.x
  }
  var dx = x - cur.x;
  var dy = opt_y - cur.y;
  goog.style.setPosition(el, el.offsetLeft + dx, el.offsetTop + dy)
};
goog.style.setSize = function(element, w, opt_h) {
  var h;
  if(w instanceof goog.math.Size) {
    h = w.height;
    w = w.width
  }else {
    if(opt_h == undefined) {
      throw Error("missing height argument");
    }
    h = opt_h
  }
  goog.style.setWidth(element, w);
  goog.style.setHeight(element, h)
};
goog.style.getPixelStyleValue_ = function(value, round) {
  if(typeof value == "number") {
    value = (round ? Math.round(value) : value) + "px"
  }
  return value
};
goog.style.setHeight = function(element, height) {
  element.style.height = goog.style.getPixelStyleValue_(height, true)
};
goog.style.setWidth = function(element, width) {
  element.style.width = goog.style.getPixelStyleValue_(width, true)
};
goog.style.getSize = function(element) {
  if(goog.style.getStyle_(element, "display") != "none") {
    return new goog.math.Size(element.offsetWidth, element.offsetHeight)
  }
  var style = element.style;
  var originalDisplay = style.display;
  var originalVisibility = style.visibility;
  var originalPosition = style.position;
  style.visibility = "hidden";
  style.position = "absolute";
  style.display = "inline";
  var originalWidth = element.offsetWidth;
  var originalHeight = element.offsetHeight;
  style.display = originalDisplay;
  style.position = originalPosition;
  style.visibility = originalVisibility;
  return new goog.math.Size(originalWidth, originalHeight)
};
goog.style.getBounds = function(element) {
  var o = goog.style.getPageOffset(element);
  var s = goog.style.getSize(element);
  return new goog.math.Rect(o.x, o.y, s.width, s.height)
};
goog.style.toCamelCase = function(selector) {
  return goog.string.toCamelCase(String(selector))
};
goog.style.toSelectorCase = function(selector) {
  return goog.string.toSelectorCase(selector)
};
goog.style.getOpacity = function(el) {
  var style = el.style;
  var result = "";
  if("opacity" in style) {
    result = style.opacity
  }else {
    if("MozOpacity" in style) {
      result = style.MozOpacity
    }else {
      if("filter" in style) {
        var match = style.filter.match(/alpha\(opacity=([\d.]+)\)/);
        if(match) {
          result = String(match[1] / 100)
        }
      }
    }
  }
  return result == "" ? result : Number(result)
};
goog.style.setOpacity = function(el, alpha) {
  var style = el.style;
  if("opacity" in style) {
    style.opacity = alpha
  }else {
    if("MozOpacity" in style) {
      style.MozOpacity = alpha
    }else {
      if("filter" in style) {
        if(alpha === "") {
          style.filter = ""
        }else {
          style.filter = "alpha(opacity=" + alpha * 100 + ")"
        }
      }
    }
  }
};
goog.style.setTransparentBackgroundImage = function(el, src) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + 'src="' + src + '", sizingMethod="crop")'
  }else {
    style.backgroundImage = "url(" + src + ")";
    style.backgroundPosition = "top left";
    style.backgroundRepeat = "no-repeat"
  }
};
goog.style.clearTransparentBackgroundImage = function(el) {
  var style = el.style;
  if("filter" in style) {
    style.filter = ""
  }else {
    style.backgroundImage = "none"
  }
};
goog.style.showElement = function(el, display) {
  el.style.display = display ? "" : "none"
};
goog.style.isElementShown = function(el) {
  return el.style.display != "none"
};
goog.style.installStyles = function(stylesString, opt_node) {
  var dh = goog.dom.getDomHelper(opt_node);
  var styleSheet = null;
  if(goog.userAgent.IE) {
    styleSheet = dh.getDocument().createStyleSheet();
    goog.style.setStyles(styleSheet, stylesString)
  }else {
    var head = dh.getElementsByTagNameAndClass("head")[0];
    if(!head) {
      var body = dh.getElementsByTagNameAndClass("body")[0];
      head = dh.createDom("head");
      body.parentNode.insertBefore(head, body)
    }
    styleSheet = dh.createDom("style");
    goog.style.setStyles(styleSheet, stylesString);
    dh.appendChild(head, styleSheet)
  }
  return styleSheet
};
goog.style.uninstallStyles = function(styleSheet) {
  var node = styleSheet.ownerNode || styleSheet.owningElement || styleSheet;
  goog.dom.removeNode(node)
};
goog.style.setStyles = function(element, stylesString) {
  if(goog.userAgent.IE) {
    element.cssText = stylesString
  }else {
    var propToSet = goog.userAgent.WEBKIT ? "innerText" : "innerHTML";
    element[propToSet] = stylesString
  }
};
goog.style.setPreWrap = function(el) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.whiteSpace = "pre";
    style.wordWrap = "break-word"
  }else {
    if(goog.userAgent.GECKO) {
      style.whiteSpace = "-moz-pre-wrap"
    }else {
      style.whiteSpace = "pre-wrap"
    }
  }
};
goog.style.setInlineBlock = function(el) {
  var style = el.style;
  style.position = "relative";
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.zoom = "1";
    style.display = "inline"
  }else {
    if(goog.userAgent.GECKO) {
      style.display = goog.userAgent.isVersion("1.9a") ? "inline-block" : "-moz-inline-box"
    }else {
      style.display = "inline-block"
    }
  }
};
goog.style.isRightToLeft = function(el) {
  return"rtl" == goog.style.getStyle_(el, "direction")
};
goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null;
goog.style.isUnselectable = function(el) {
  if(goog.style.unselectableStyle_) {
    return el.style[goog.style.unselectableStyle_].toLowerCase() == "none"
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      return el.getAttribute("unselectable") == "on"
    }
  }
  return false
};
goog.style.setUnselectable = function(el, unselectable, opt_noRecurse) {
  var descendants = !opt_noRecurse ? el.getElementsByTagName("*") : null;
  var name = goog.style.unselectableStyle_;
  if(name) {
    var value = unselectable ? "none" : "";
    el.style[name] = value;
    if(descendants) {
      for(var i = 0, descendant;descendant = descendants[i];i++) {
        descendant.style[name] = value
      }
    }
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      var value = unselectable ? "on" : "";
      el.setAttribute("unselectable", value);
      if(descendants) {
        for(var i = 0, descendant;descendant = descendants[i];i++) {
          descendant.setAttribute("unselectable", value)
        }
      }
    }
  }
};
goog.style.getBorderBoxSize = function(element) {
  return new goog.math.Size(element.offsetWidth, element.offsetHeight)
};
goog.style.setBorderBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right;
      style.pixelHeight = size.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom
    }else {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "border-box")
  }
};
goog.style.getContentBoxSize = function(element) {
  var doc = goog.dom.getOwnerDocument(element);
  var ieCurrentStyle = goog.userAgent.IE && element.currentStyle;
  if(ieCurrentStyle && goog.dom.getDomHelper(doc).isCss1CompatMode() && ieCurrentStyle.width != "auto" && ieCurrentStyle.height != "auto" && !ieCurrentStyle.boxSizing) {
    var width = goog.style.getIePixelValue_(element, ieCurrentStyle.width, "width", "pixelWidth");
    var height = goog.style.getIePixelValue_(element, ieCurrentStyle.height, "height", "pixelHeight");
    return new goog.math.Size(width, height)
  }else {
    var borderBoxSize = goog.style.getBorderBoxSize(element);
    var paddingBox = goog.style.getPaddingBox(element);
    var borderBox = goog.style.getBorderBox(element);
    return new goog.math.Size(borderBoxSize.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right, borderBoxSize.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom)
  }
};
goog.style.setContentBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }else {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width + borderBox.left + paddingBox.left + paddingBox.right + borderBox.right;
      style.pixelHeight = size.height + borderBox.top + paddingBox.top + paddingBox.bottom + borderBox.bottom
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "content-box")
  }
};
goog.style.setBoxSizingSize_ = function(element, size, boxSizing) {
  var style = element.style;
  if(goog.userAgent.GECKO) {
    style.MozBoxSizing = boxSizing
  }else {
    if(goog.userAgent.WEBKIT) {
      style.WebkitBoxSizing = boxSizing
    }else {
      style.boxSizing = boxSizing
    }
  }
  style.width = size.width + "px";
  style.height = size.height + "px"
};
goog.style.getIePixelValue_ = function(element, value, name, pixelName) {
  if(/^\d+px?$/.test(value)) {
    return parseInt(value, 10)
  }else {
    var oldStyleValue = element.style[name];
    var oldRuntimeValue = element.runtimeStyle[name];
    element.runtimeStyle[name] = element.currentStyle[name];
    element.style[name] = value;
    var pixelValue = element.style[pixelName];
    element.style[name] = oldStyleValue;
    element.runtimeStyle[name] = oldRuntimeValue;
    return pixelValue
  }
};
goog.style.getIePixelDistance_ = function(element, propName) {
  return goog.style.getIePixelValue_(element, goog.style.getCascadedStyle(element, propName), "left", "pixelLeft")
};
goog.style.getBox_ = function(element, stylePrefix) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelDistance_(element, stylePrefix + "Left");
    var right = goog.style.getIePixelDistance_(element, stylePrefix + "Right");
    var top = goog.style.getIePixelDistance_(element, stylePrefix + "Top");
    var bottom = goog.style.getIePixelDistance_(element, stylePrefix + "Bottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, stylePrefix + "Left");
    var right = goog.style.getComputedStyle(element, stylePrefix + "Right");
    var top = goog.style.getComputedStyle(element, stylePrefix + "Top");
    var bottom = goog.style.getComputedStyle(element, stylePrefix + "Bottom");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getPaddingBox = function(element) {
  return goog.style.getBox_(element, "padding")
};
goog.style.getMarginBox = function(element) {
  return goog.style.getBox_(element, "margin")
};
goog.style.ieBorderWidthKeywords_ = {"thin":2, "medium":4, "thick":6};
goog.style.getIePixelBorder_ = function(element, prop) {
  if(goog.style.getCascadedStyle(element, prop + "Style") == "none") {
    return 0
  }
  var width = goog.style.getCascadedStyle(element, prop + "Width");
  if(width in goog.style.ieBorderWidthKeywords_) {
    return goog.style.ieBorderWidthKeywords_[width]
  }
  return goog.style.getIePixelValue_(element, width, "left", "pixelLeft")
};
goog.style.getBorderBox = function(element) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelBorder_(element, "borderLeft");
    var right = goog.style.getIePixelBorder_(element, "borderRight");
    var top = goog.style.getIePixelBorder_(element, "borderTop");
    var bottom = goog.style.getIePixelBorder_(element, "borderBottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, "borderLeftWidth");
    var right = goog.style.getComputedStyle(element, "borderRightWidth");
    var top = goog.style.getComputedStyle(element, "borderTopWidth");
    var bottom = goog.style.getComputedStyle(element, "borderBottomWidth");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getFontFamily = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  var font = "";
  if(doc.body.createTextRange) {
    var range = doc.body.createTextRange();
    range.moveToElementText(el);
    try {
      font = range.queryCommandValue("FontName")
    }catch(e) {
      font = ""
    }
  }
  if(!font) {
    font = goog.style.getStyle_(el, "fontFamily")
  }
  var fontsArray = font.split(",");
  if(fontsArray.length > 1) {
    font = fontsArray[0]
  }
  return goog.string.stripQuotes(font, "\"'")
};
goog.style.lengthUnitRegex_ = /[^\d]+$/;
goog.style.getLengthUnits = function(value) {
  var units = value.match(goog.style.lengthUnitRegex_);
  return units && units[0] || null
};
goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {"cm":1, "in":1, "mm":1, "pc":1, "pt":1};
goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {"em":1, "ex":1};
goog.style.getFontSize = function(el) {
  var fontSize = goog.style.getStyle_(el, "fontSize");
  var sizeUnits = goog.style.getLengthUnits(fontSize);
  if(fontSize && "px" == sizeUnits) {
    return parseInt(fontSize, 10)
  }
  if(goog.userAgent.IE) {
    if(sizeUnits in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(el, fontSize, "left", "pixelLeft")
    }else {
      if(el.parentNode && el.parentNode.nodeType == goog.dom.NodeType.ELEMENT && sizeUnits in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
        var parentElement = el.parentNode;
        var parentSize = goog.style.getStyle_(parentElement, "fontSize");
        return goog.style.getIePixelValue_(parentElement, fontSize == parentSize ? "1em" : fontSize, "left", "pixelLeft")
      }
    }
  }
  var sizeElement = goog.dom.createDom("span", {"style":"visibility:hidden;position:absolute;" + "line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(el, sizeElement);
  fontSize = sizeElement.offsetHeight;
  goog.dom.removeNode(sizeElement);
  return fontSize
};
goog.style.parseStyleAttribute = function(value) {
  var result = {};
  goog.array.forEach(value.split(/\s*;\s*/), function(pair) {
    var keyValue = pair.split(/\s*:\s*/);
    if(keyValue.length == 2) {
      result[goog.string.toCamelCase(keyValue[0].toLowerCase())] = keyValue[1]
    }
  });
  return result
};
goog.style.toStyleAttribute = function(obj) {
  var buffer = [];
  goog.object.forEach(obj, function(value, key) {
    buffer.push(goog.string.toSelectorCase(key), ":", value, ";")
  });
  return buffer.join("")
};
goog.style.setFloat = function(el, value) {
  el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = value
};
goog.style.getFloat = function(el) {
  return el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
};
goog.style.getScrollbarWidth = function() {
  var mockElement = goog.dom.createElement("div");
  mockElement.style.cssText = "visibility:hidden;overflow:scroll;" + "position:absolute;top:0;width:100px;height:100px";
  goog.dom.appendChild(goog.dom.getDocument().body, mockElement);
  var width = mockElement.offsetWidth - mockElement.clientWidth;
  goog.dom.removeNode(mockElement);
  return width
};
goog.provide("goog.iter");
goog.provide("goog.iter.Iterator");
goog.provide("goog.iter.StopIteration");
goog.require("goog.array");
goog.require("goog.asserts");
goog.iter.Iterable;
if("StopIteration" in goog.global) {
  goog.iter.StopIteration = goog.global["StopIteration"]
}else {
  goog.iter.StopIteration = Error("StopIteration")
}
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this
};
goog.iter.toIterator = function(iterable) {
  if(iterable instanceof goog.iter.Iterator) {
    return iterable
  }
  if(typeof iterable.__iterator__ == "function") {
    return iterable.__iterator__(false)
  }
  if(goog.isArrayLike(iterable)) {
    var i = 0;
    var newIter = new goog.iter.Iterator;
    newIter.next = function() {
      while(true) {
        if(i >= iterable.length) {
          throw goog.iter.StopIteration;
        }
        if(!(i in iterable)) {
          i++;
          continue
        }
        return iterable[i++]
      }
    };
    return newIter
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(iterable, f, opt_obj) {
  if(goog.isArrayLike(iterable)) {
    try {
      goog.array.forEach(iterable, f, opt_obj)
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }else {
    iterable = goog.iter.toIterator(iterable);
    try {
      while(true) {
        f.call(opt_obj, iterable.next(), undefined, iterable)
      }
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }
};
goog.iter.filter = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(f.call(opt_obj, val, undefined, iterable)) {
        return val
      }
    }
  };
  return newIter
};
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  var start = 0;
  var stop = startOrStop;
  var step = opt_step || 1;
  if(arguments.length > 1) {
    start = startOrStop;
    stop = opt_stop
  }
  if(step == 0) {
    throw Error("Range step argument must not be zero");
  }
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    if(step > 0 && start >= stop || step < 0 && start <= stop) {
      throw goog.iter.StopIteration;
    }
    var rv = start;
    start += step;
    return rv
  };
  return newIter
};
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator)
};
goog.iter.map = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      return f.call(opt_obj, val, undefined, iterable)
    }
  };
  return newIter
};
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  var rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val)
  });
  return rval
};
goog.iter.some = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return true
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return false
};
goog.iter.every = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(!f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return true
};
goog.iter.chain = function(var_args) {
  var args = arguments;
  var length = args.length;
  var i = 0;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    try {
      if(i >= length) {
        throw goog.iter.StopIteration;
      }
      var current = goog.iter.toIterator(args[i]);
      return current.next()
    }catch(ex) {
      if(ex !== goog.iter.StopIteration || i >= length) {
        throw ex;
      }else {
        i++;
        return this.next()
      }
    }
  };
  return newIter
};
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var dropping = true;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(dropping && f.call(opt_obj, val, undefined, iterable)) {
        continue
      }else {
        dropping = false
      }
      return val
    }
  };
  return newIter
};
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var taking = true;
  newIter.next = function() {
    while(true) {
      if(taking) {
        var val = iterable.next();
        if(f.call(opt_obj, val, undefined, iterable)) {
          return val
        }else {
          taking = false
        }
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return newIter
};
goog.iter.toArray = function(iterable) {
  if(goog.isArrayLike(iterable)) {
    return goog.array.toArray(iterable)
  }
  iterable = goog.iter.toIterator(iterable);
  var array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val)
  });
  return array
};
goog.iter.equals = function(iterable1, iterable2) {
  iterable1 = goog.iter.toIterator(iterable1);
  iterable2 = goog.iter.toIterator(iterable2);
  var b1, b2;
  try {
    while(true) {
      b1 = b2 = false;
      var val1 = iterable1.next();
      b1 = true;
      var val2 = iterable2.next();
      b2 = true;
      if(val1 != val2) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }else {
      if(b1 && !b2) {
        return false
      }
      if(!b2) {
        try {
          val2 = iterable2.next();
          return false
        }catch(ex1) {
          if(ex1 !== goog.iter.StopIteration) {
            throw ex1;
          }
          return true
        }
      }
    }
  }
  return false
};
goog.iter.nextOrValue = function(iterable, defaultValue) {
  try {
    return goog.iter.toIterator(iterable).next()
  }catch(e) {
    if(e != goog.iter.StopIteration) {
      throw e;
    }
    return defaultValue
  }
};
goog.iter.product = function(var_args) {
  var someArrayEmpty = goog.array.some(arguments, function(arr) {
    return!arr.length
  });
  if(someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator
  }
  var iter = new goog.iter.Iterator;
  var arrays = arguments;
  var indicies = goog.array.repeat(0, arrays.length);
  iter.next = function() {
    if(indicies) {
      var retVal = goog.array.map(indicies, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex]
      });
      for(var i = indicies.length - 1;i >= 0;i--) {
        goog.asserts.assert(indicies);
        if(indicies[i] < arrays[i].length - 1) {
          indicies[i]++;
          break
        }
        if(i == 0) {
          indicies = null;
          break
        }
        indicies[i] = 0
      }
      return retVal
    }
    throw goog.iter.StopIteration;
  };
  return iter
};
goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if(typeof col.getCount == "function") {
    return col.getCount()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return col.length
  }
  return goog.object.getCount(col)
};
goog.structs.getValues = function(col) {
  if(typeof col.getValues == "function") {
    return col.getValues()
  }
  if(goog.isString(col)) {
    return col.split("")
  }
  if(goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(col[i])
    }
    return rv
  }
  return goog.object.getValues(col)
};
goog.structs.getKeys = function(col) {
  if(typeof col.getKeys == "function") {
    return col.getKeys()
  }
  if(typeof col.getValues == "function") {
    return undefined
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(i)
    }
    return rv
  }
  return goog.object.getKeys(col)
};
goog.structs.contains = function(col, val) {
  if(typeof col.contains == "function") {
    return col.contains(val)
  }
  if(typeof col.containsValue == "function") {
    return col.containsValue(val)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.contains(col, val)
  }
  return goog.object.containsValue(col, val)
};
goog.structs.isEmpty = function(col) {
  if(typeof col.isEmpty == "function") {
    return col.isEmpty()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.isEmpty(col)
  }
  return goog.object.isEmpty(col)
};
goog.structs.clear = function(col) {
  if(typeof col.clear == "function") {
    col.clear()
  }else {
    if(goog.isArrayLike(col)) {
      goog.array.clear(col)
    }else {
      goog.object.clear(col)
    }
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if(typeof col.forEach == "function") {
    col.forEach(f, opt_obj)
  }else {
    if(goog.isArrayLike(col) || goog.isString(col)) {
      goog.array.forEach(col, f, opt_obj)
    }else {
      var keys = goog.structs.getKeys(col);
      var values = goog.structs.getValues(col);
      var l = values.length;
      for(var i = 0;i < l;i++) {
        f.call(opt_obj, values[i], keys && keys[i], col)
      }
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if(typeof col.filter == "function") {
    return col.filter(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.filter(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i]
      }
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i])
      }
    }
  }
  return rv
};
goog.structs.map = function(col, f, opt_obj) {
  if(typeof col.map == "function") {
    return col.map(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.map(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col)
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col)
    }
  }
  return rv
};
goog.structs.some = function(col, f, opt_obj) {
  if(typeof col.some == "function") {
    return col.some(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.some(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true
    }
  }
  return false
};
goog.structs.every = function(col, f, opt_obj) {
  if(typeof col.every == "function") {
    return col.every(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.every(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false
    }
  }
  return true
};
goog.provide("goog.structs.Map");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
goog.require("goog.object");
goog.require("goog.structs");
goog.structs.Map = function(opt_map, var_args) {
  this.map_ = {};
  this.keys_ = [];
  var argLength = arguments.length;
  if(argLength > 1) {
    if(argLength % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var i = 0;i < argLength;i += 2) {
      this.set(arguments[i], arguments[i + 1])
    }
  }else {
    if(opt_map) {
      this.addAll(opt_map)
    }
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  var rv = [];
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    rv.push(this.map_[key])
  }
  return rv
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(key) {
  return goog.structs.Map.hasKey_(this.map_, key)
};
goog.structs.Map.prototype.containsValue = function(val) {
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    if(goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) {
      return true
    }
  }
  return false
};
goog.structs.Map.prototype.equals = function(otherMap, opt_equalityFn) {
  if(this === otherMap) {
    return true
  }
  if(this.count_ != otherMap.getCount()) {
    return false
  }
  var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var key, i = 0;key = this.keys_[i];i++) {
    if(!equalityFn(this.get(key), otherMap.get(key))) {
      return false
    }
  }
  return true
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return this.count_ == 0
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.keys_.length = 0;
  this.count_ = 0;
  this.version_ = 0
};
goog.structs.Map.prototype.remove = function(key) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    delete this.map_[key];
    this.count_--;
    this.version_++;
    if(this.keys_.length > 2 * this.count_) {
      this.cleanupKeysArray_()
    }
    return true
  }
  return false
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(goog.structs.Map.hasKey_(this.map_, key)) {
        this.keys_[destIndex++] = key
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
  if(this.count_ != this.keys_.length) {
    var seen = {};
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(!goog.structs.Map.hasKey_(seen, key)) {
        this.keys_[destIndex++] = key;
        seen[key] = 1
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
};
goog.structs.Map.prototype.get = function(key, opt_val) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    return this.map_[key]
  }
  return opt_val
};
goog.structs.Map.prototype.set = function(key, value) {
  if(!goog.structs.Map.hasKey_(this.map_, key)) {
    this.count_++;
    this.keys_.push(key);
    this.version_++
  }
  this.map_[key] = value
};
goog.structs.Map.prototype.addAll = function(map) {
  var keys, values;
  if(map instanceof goog.structs.Map) {
    keys = map.getKeys();
    values = map.getValues()
  }else {
    keys = goog.object.getKeys(map);
    values = goog.object.getValues(map)
  }
  for(var i = 0;i < keys.length;i++) {
    this.set(keys[i], values[i])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  var transposed = new goog.structs.Map;
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    var value = this.map_[key];
    transposed.set(value, key)
  }
  return transposed
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  var obj = {};
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    obj[key] = this.map_[key]
  }
  return obj
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(true)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(false)
};
goog.structs.Map.prototype.__iterator__ = function(opt_keys) {
  this.cleanupKeysArray_();
  var i = 0;
  var keys = this.keys_;
  var map = this.map_;
  var version = this.version_;
  var selfObj = this;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      if(version != selfObj.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(i >= keys.length) {
        throw goog.iter.StopIteration;
      }
      var key = keys[i++];
      return opt_keys ? key : map[key]
    }
  };
  return newIter
};
goog.structs.Map.hasKey_ = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
};
goog.provide("goog.dom.forms");
goog.require("goog.structs.Map");
goog.dom.forms.getFormDataMap = function(form) {
  var map = new goog.structs.Map;
  goog.dom.forms.getFormDataHelper_(form, map, goog.dom.forms.addFormDataToMap_);
  return map
};
goog.dom.forms.getFormDataString = function(form) {
  var sb = [];
  goog.dom.forms.getFormDataHelper_(form, sb, goog.dom.forms.addFormDataToStringBuffer_);
  return sb.join("&")
};
goog.dom.forms.getFormDataHelper_ = function(form, result, fnAppend) {
  var els = form.elements;
  for(var el, i = 0;el = els[i];i++) {
    if(el.disabled || el.tagName.toLowerCase() == "fieldset") {
      continue
    }
    var name = el.name;
    var type = el.type.toLowerCase();
    switch(type) {
      case "file":
      ;
      case "submit":
      ;
      case "reset":
      ;
      case "button":
        break;
      case "select-multiple":
        var values = goog.dom.forms.getValue(el);
        if(values != null) {
          for(var value, j = 0;value = values[j];j++) {
            fnAppend(result, name, value)
          }
        }
        break;
      default:
        var value = goog.dom.forms.getValue(el);
        if(value != null) {
          fnAppend(result, name, value)
        }
    }
  }
  var inputs = form.getElementsByTagName("input");
  for(var input, i = 0;input = inputs[i];i++) {
    if(input.form == form && input.type.toLowerCase() == "image") {
      name = input.name;
      fnAppend(result, name, input.value);
      fnAppend(result, name + ".x", "0");
      fnAppend(result, name + ".y", "0")
    }
  }
};
goog.dom.forms.addFormDataToMap_ = function(map, name, value) {
  var array = map.get(name);
  if(!array) {
    array = [];
    map.set(name, array)
  }
  array.push(value)
};
goog.dom.forms.addFormDataToStringBuffer_ = function(sb, name, value) {
  sb.push(encodeURIComponent(name) + "=" + encodeURIComponent(value))
};
goog.dom.forms.hasFileInput = function(form) {
  var els = form.elements;
  for(var el, i = 0;el = els[i];i++) {
    if(!el.disabled && el.type && el.type.toLowerCase() == "file") {
      return true
    }
  }
  return false
};
goog.dom.forms.setDisabled = function(el, disabled) {
  if(el.tagName == "FORM") {
    var els = el.elements;
    for(var i = 0;el = els[i];i++) {
      goog.dom.forms.setDisabled(el, disabled)
    }
  }else {
    if(disabled == true) {
      el.blur()
    }
    el.disabled = disabled
  }
};
goog.dom.forms.focusAndSelect = function(el) {
  el.focus();
  if(el.select) {
    el.select()
  }
};
goog.dom.forms.hasValue = function(el) {
  var value = goog.dom.forms.getValue(el);
  return!!value
};
goog.dom.forms.hasValueByName = function(form, name) {
  var value = goog.dom.forms.getValueByName(form, name);
  return!!value
};
goog.dom.forms.getValue = function(el) {
  var type = el.type;
  if(!goog.isDef(type)) {
    return null
  }
  switch(type.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return goog.dom.forms.getInputChecked_(el);
    case "select-one":
      return goog.dom.forms.getSelectSingle_(el);
    case "select-multiple":
      return goog.dom.forms.getSelectMultiple_(el);
    default:
      return goog.isDef(el.value) ? el.value : null
  }
};
goog.dom.$F = goog.dom.forms.getValue;
goog.dom.forms.getValueByName = function(form, name) {
  var els = form.elements[name];
  if(els.type) {
    return goog.dom.forms.getValue(els)
  }else {
    for(var i = 0;i < els.length;i++) {
      var val = goog.dom.forms.getValue(els[i]);
      if(val) {
        return val
      }
    }
    return null
  }
};
goog.dom.forms.getInputChecked_ = function(el) {
  return el.checked ? el.value : null
};
goog.dom.forms.getSelectSingle_ = function(el) {
  var selectedIndex = el.selectedIndex;
  return selectedIndex >= 0 ? el.options[selectedIndex].value : null
};
goog.dom.forms.getSelectMultiple_ = function(el) {
  var values = [];
  for(var option, i = 0;option = el.options[i];i++) {
    if(option.selected) {
      values.push(option.value)
    }
  }
  return values.length ? values : null
};
goog.dom.forms.setValue = function(el, opt_value) {
  var type = el.type;
  if(goog.isDef(type)) {
    switch(type.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        goog.dom.forms.setInputChecked_(el, opt_value);
        break;
      case "select-one":
        goog.dom.forms.setSelectSingle_(el, opt_value);
        break;
      case "select-multiple":
        goog.dom.forms.setSelectMultiple_(el, opt_value);
        break;
      default:
        el.value = goog.isDefAndNotNull(opt_value) ? opt_value : ""
    }
  }
};
goog.dom.forms.setInputChecked_ = function(el, opt_value) {
  el.checked = opt_value ? "checked" : null
};
goog.dom.forms.setSelectSingle_ = function(el, opt_value) {
  el.selectedIndex = -1;
  if(goog.isString(opt_value)) {
    for(var option, i = 0;option = el.options[i];i++) {
      if(option.value == opt_value) {
        option.selected = true;
        break
      }
    }
  }
};
goog.dom.forms.setSelectMultiple_ = function(el, opt_value) {
  if(goog.isString(opt_value)) {
    opt_value = [opt_value]
  }
  for(var option, i = 0;option = el.options[i];i++) {
    option.selected = false;
    if(opt_value) {
      for(var value, j = 0;value = opt_value[j];j++) {
        if(option.value == value) {
          option.selected = true
        }
      }
    }
  }
};
goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.debug.EntryPointMonitor = function() {
};
goog.debug.EntryPointMonitor.prototype.wrap;
goog.debug.EntryPointMonitor.prototype.unwrap;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback
};
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  var transformer = goog.bind(monitor.wrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var transformer = goog.bind(monitor.unwrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.provide("goog.debug.errorHandlerWeakDep");
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(fn, opt_tracers) {
  return fn
}};
goog.provide("goog.events.Listener");
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.isFunctionListener_;
goog.events.Listener.prototype.listener;
goog.events.Listener.prototype.proxy;
goog.events.Listener.prototype.src;
goog.events.Listener.prototype.type;
goog.events.Listener.prototype.capture;
goog.events.Listener.prototype.handler;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = false;
goog.events.Listener.prototype.callOnce = false;
goog.events.Listener.prototype.init = function(listener, proxy, src, type, capture, opt_handler) {
  if(goog.isFunction(listener)) {
    this.isFunctionListener_ = true
  }else {
    if(listener && listener.handleEvent && goog.isFunction(listener.handleEvent)) {
      this.isFunctionListener_ = false
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = listener;
  this.proxy = proxy;
  this.src = src;
  this.type = type;
  this.capture = !!capture;
  this.handler = opt_handler;
  this.callOnce = false;
  this.key = ++goog.events.Listener.counter_;
  this.removed = false
};
goog.events.Listener.prototype.handleEvent = function(eventObject) {
  if(this.isFunctionListener_) {
    return this.listener.call(this.handler || this.src, eventObject)
  }
  return this.listener.handleEvent.call(this.listener, eventObject)
};
goog.provide("goog.structs.SimplePool");
goog.require("goog.Disposable");
goog.structs.SimplePool = function(initialCount, maxCount) {
  goog.Disposable.call(this);
  this.maxCount_ = maxCount;
  this.freeQueue_ = [];
  this.createInitial_(initialCount)
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
goog.structs.SimplePool.prototype.createObjectFn_ = null;
goog.structs.SimplePool.prototype.disposeObjectFn_ = null;
goog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {
  this.createObjectFn_ = createObjectFn
};
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(disposeObjectFn) {
  this.disposeObjectFn_ = disposeObjectFn
};
goog.structs.SimplePool.prototype.getObject = function() {
  if(this.freeQueue_.length) {
    return this.freeQueue_.pop()
  }
  return this.createObject()
};
goog.structs.SimplePool.prototype.releaseObject = function(obj) {
  if(this.freeQueue_.length < this.maxCount_) {
    this.freeQueue_.push(obj)
  }else {
    this.disposeObject(obj)
  }
};
goog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {
  if(initialCount > this.maxCount_) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var i = 0;i < initialCount;i++) {
    this.freeQueue_.push(this.createObject())
  }
};
goog.structs.SimplePool.prototype.createObject = function() {
  if(this.createObjectFn_) {
    return this.createObjectFn_()
  }else {
    return{}
  }
};
goog.structs.SimplePool.prototype.disposeObject = function(obj) {
  if(this.disposeObjectFn_) {
    this.disposeObjectFn_(obj)
  }else {
    if(goog.isObject(obj)) {
      if(goog.isFunction(obj.dispose)) {
        obj.dispose()
      }else {
        for(var i in obj) {
          delete obj[i]
        }
      }
    }
  }
};
goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  var freeQueue = this.freeQueue_;
  while(freeQueue.length) {
    this.disposeObject(freeQueue.pop())
  }
  delete this.freeQueue_
};
goog.provide("goog.events.pools");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Listener");
goog.require("goog.structs.SimplePool");
goog.require("goog.userAgent.jscript");
goog.events.ASSUME_GOOD_GC = false;
goog.events.pools.getObject;
goog.events.pools.releaseObject;
goog.events.pools.getArray;
goog.events.pools.releaseArray;
goog.events.pools.getProxy;
goog.events.pools.setProxyCallbackFunction;
goog.events.pools.releaseProxy;
goog.events.pools.getListener;
goog.events.pools.releaseListener;
goog.events.pools.getEvent;
goog.events.pools.releaseEvent;
(function() {
  var BAD_GC = !goog.events.ASSUME_GOOD_GC && goog.userAgent.jscript.HAS_JSCRIPT && !goog.userAgent.jscript.isVersion("5.7");
  function getObject() {
    return{count_:0, remaining_:0}
  }
  function getArray() {
    return[]
  }
  var proxyCallbackFunction;
  goog.events.pools.setProxyCallbackFunction = function(cb) {
    proxyCallbackFunction = cb
  };
  function getProxy() {
    var f = function(eventObject) {
      return proxyCallbackFunction.call(f.src, f.key, eventObject)
    };
    return f
  }
  function getListener() {
    return new goog.events.Listener
  }
  function getEvent() {
    return new goog.events.BrowserEvent
  }
  if(!BAD_GC) {
    goog.events.pools.getObject = getObject;
    goog.events.pools.releaseObject = goog.nullFunction;
    goog.events.pools.getArray = getArray;
    goog.events.pools.releaseArray = goog.nullFunction;
    goog.events.pools.getProxy = getProxy;
    goog.events.pools.releaseProxy = goog.nullFunction;
    goog.events.pools.getListener = getListener;
    goog.events.pools.releaseListener = goog.nullFunction;
    goog.events.pools.getEvent = getEvent;
    goog.events.pools.releaseEvent = goog.nullFunction
  }else {
    goog.events.pools.getObject = function() {
      return objectPool.getObject()
    };
    goog.events.pools.releaseObject = function(obj) {
      objectPool.releaseObject(obj)
    };
    goog.events.pools.getArray = function() {
      return arrayPool.getObject()
    };
    goog.events.pools.releaseArray = function(obj) {
      arrayPool.releaseObject(obj)
    };
    goog.events.pools.getProxy = function() {
      return proxyPool.getObject()
    };
    goog.events.pools.releaseProxy = function(obj) {
      proxyPool.releaseObject(getProxy())
    };
    goog.events.pools.getListener = function() {
      return listenerPool.getObject()
    };
    goog.events.pools.releaseListener = function(obj) {
      listenerPool.releaseObject(obj)
    };
    goog.events.pools.getEvent = function() {
      return eventPool.getObject()
    };
    goog.events.pools.releaseEvent = function(obj) {
      eventPool.releaseObject(obj)
    };
    var OBJECT_POOL_INITIAL_COUNT = 0;
    var OBJECT_POOL_MAX_COUNT = 600;
    var objectPool = new goog.structs.SimplePool(OBJECT_POOL_INITIAL_COUNT, OBJECT_POOL_MAX_COUNT);
    objectPool.setCreateObjectFn(getObject);
    var ARRAY_POOL_INITIAL_COUNT = 0;
    var ARRAY_POOL_MAX_COUNT = 600;
    var arrayPool = new goog.structs.SimplePool(ARRAY_POOL_INITIAL_COUNT, ARRAY_POOL_MAX_COUNT);
    arrayPool.setCreateObjectFn(getArray);
    var HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT = 0;
    var HANDLE_EVENT_PROXY_POOL_MAX_COUNT = 600;
    var proxyPool = new goog.structs.SimplePool(HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT, HANDLE_EVENT_PROXY_POOL_MAX_COUNT);
    proxyPool.setCreateObjectFn(getProxy);
    var LISTENER_POOL_INITIAL_COUNT = 0;
    var LISTENER_POOL_MAX_COUNT = 600;
    var listenerPool = new goog.structs.SimplePool(LISTENER_POOL_INITIAL_COUNT, LISTENER_POOL_MAX_COUNT);
    listenerPool.setCreateObjectFn(getListener);
    var EVENT_POOL_INITIAL_COUNT = 0;
    var EVENT_POOL_MAX_COUNT = 600;
    var eventPool = new goog.structs.SimplePool(EVENT_POOL_INITIAL_COUNT, EVENT_POOL_MAX_COUNT);
    eventPool.setCreateObjectFn(getEvent)
  }
})();
goog.provide("goog.events");
goog.require("goog.array");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.debug.errorHandlerWeakDep");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Event");
goog.require("goog.events.EventWrapper");
goog.require("goog.events.pools");
goog.require("goog.object");
goog.require("goog.userAgent");
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.requiresSyntheticEventPropagation_;
goog.events.listen = function(src, type, listener, opt_capt, opt_handler) {
  if(!type) {
    throw Error("Invalid event type");
  }else {
    if(goog.isArray(type)) {
      for(var i = 0;i < type.length;i++) {
        goog.events.listen(src, type[i], listener, opt_capt, opt_handler)
      }
      return null
    }else {
      var capture = !!opt_capt;
      var map = goog.events.listenerTree_;
      if(!(type in map)) {
        map[type] = goog.events.pools.getObject()
      }
      map = map[type];
      if(!(capture in map)) {
        map[capture] = goog.events.pools.getObject();
        map.count_++
      }
      map = map[capture];
      var srcUid = goog.getUid(src);
      var listenerArray, listenerObj;
      map.remaining_++;
      if(!map[srcUid]) {
        listenerArray = map[srcUid] = goog.events.pools.getArray();
        map.count_++
      }else {
        listenerArray = map[srcUid];
        for(var i = 0;i < listenerArray.length;i++) {
          listenerObj = listenerArray[i];
          if(listenerObj.listener == listener && listenerObj.handler == opt_handler) {
            if(listenerObj.removed) {
              break
            }
            return listenerArray[i].key
          }
        }
      }
      var proxy = goog.events.pools.getProxy();
      proxy.src = src;
      listenerObj = goog.events.pools.getListener();
      listenerObj.init(listener, proxy, src, type, capture, opt_handler);
      var key = listenerObj.key;
      proxy.key = key;
      listenerArray.push(listenerObj);
      goog.events.listeners_[key] = listenerObj;
      if(!goog.events.sources_[srcUid]) {
        goog.events.sources_[srcUid] = goog.events.pools.getArray()
      }
      goog.events.sources_[srcUid].push(listenerObj);
      if(src.addEventListener) {
        if(src == goog.global || !src.customEvent_) {
          src.addEventListener(type, proxy, capture)
        }
      }else {
        src.attachEvent(goog.events.getOnString_(type), proxy)
      }
      return key
    }
  }
};
goog.events.listenOnce = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.listenOnce(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var key = goog.events.listen(src, type, listener, opt_capt, opt_handler);
  var listenerObj = goog.events.listeners_[key];
  listenerObj.callOnce = true;
  return key
};
goog.events.listenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.listen(src, listener, opt_capt, opt_handler)
};
goog.events.unlisten = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.unlisten(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(!listenerArray) {
    return false
  }
  for(var i = 0;i < listenerArray.length;i++) {
    if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
      return goog.events.unlistenByKey(listenerArray[i].key)
    }
  }
  return false
};
goog.events.unlistenByKey = function(key) {
  if(!goog.events.listeners_[key]) {
    return false
  }
  var listener = goog.events.listeners_[key];
  if(listener.removed) {
    return false
  }
  var src = listener.src;
  var type = listener.type;
  var proxy = listener.proxy;
  var capture = listener.capture;
  if(src.removeEventListener) {
    if(src == goog.global || !src.customEvent_) {
      src.removeEventListener(type, proxy, capture)
    }
  }else {
    if(src.detachEvent) {
      src.detachEvent(goog.events.getOnString_(type), proxy)
    }
  }
  var srcUid = goog.getUid(src);
  var listenerArray = goog.events.listenerTree_[type][capture][srcUid];
  if(goog.events.sources_[srcUid]) {
    var sourcesArray = goog.events.sources_[srcUid];
    goog.array.remove(sourcesArray, listener);
    if(sourcesArray.length == 0) {
      delete goog.events.sources_[srcUid]
    }
  }
  listener.removed = true;
  listenerArray.needsCleanup_ = true;
  goog.events.cleanUp_(type, capture, srcUid, listenerArray);
  delete goog.events.listeners_[key];
  return true
};
goog.events.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.unlisten(src, listener, opt_capt, opt_handler)
};
goog.events.cleanUp_ = function(type, capture, srcUid, listenerArray) {
  if(!listenerArray.locked_) {
    if(listenerArray.needsCleanup_) {
      for(var oldIndex = 0, newIndex = 0;oldIndex < listenerArray.length;oldIndex++) {
        if(listenerArray[oldIndex].removed) {
          var proxy = listenerArray[oldIndex].proxy;
          proxy.src = null;
          goog.events.pools.releaseProxy(proxy);
          goog.events.pools.releaseListener(listenerArray[oldIndex]);
          continue
        }
        if(oldIndex != newIndex) {
          listenerArray[newIndex] = listenerArray[oldIndex]
        }
        newIndex++
      }
      listenerArray.length = newIndex;
      listenerArray.needsCleanup_ = false;
      if(newIndex == 0) {
        goog.events.pools.releaseArray(listenerArray);
        delete goog.events.listenerTree_[type][capture][srcUid];
        goog.events.listenerTree_[type][capture].count_--;
        if(goog.events.listenerTree_[type][capture].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type][capture]);
          delete goog.events.listenerTree_[type][capture];
          goog.events.listenerTree_[type].count_--
        }
        if(goog.events.listenerTree_[type].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type]);
          delete goog.events.listenerTree_[type]
        }
      }
    }
  }
};
goog.events.removeAll = function(opt_obj, opt_type, opt_capt) {
  var count = 0;
  var noObj = opt_obj == null;
  var noType = opt_type == null;
  var noCapt = opt_capt == null;
  opt_capt = !!opt_capt;
  if(!noObj) {
    var srcUid = goog.getUid(opt_obj);
    if(goog.events.sources_[srcUid]) {
      var sourcesArray = goog.events.sources_[srcUid];
      for(var i = sourcesArray.length - 1;i >= 0;i--) {
        var listener = sourcesArray[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    }
  }else {
    goog.object.forEach(goog.events.sources_, function(listeners) {
      for(var i = listeners.length - 1;i >= 0;i--) {
        var listener = listeners[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    })
  }
  return count
};
goog.events.getListeners = function(obj, type, capture) {
  return goog.events.getListeners_(obj, type, capture) || []
};
goog.events.getListeners_ = function(obj, type, capture) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      map = map[capture];
      var objUid = goog.getUid(obj);
      if(map[objUid]) {
        return map[objUid]
      }
    }
  }
  return null
};
goog.events.getListener = function(src, type, listener, opt_capt, opt_handler) {
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(listenerArray) {
    for(var i = 0;i < listenerArray.length;i++) {
      if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
        return listenerArray[i]
      }
    }
  }
  return null
};
goog.events.hasListener = function(obj, opt_type, opt_capture) {
  var objUid = goog.getUid(obj);
  var listeners = goog.events.sources_[objUid];
  if(listeners) {
    var hasType = goog.isDef(opt_type);
    var hasCapture = goog.isDef(opt_capture);
    if(hasType && hasCapture) {
      var map = goog.events.listenerTree_[opt_type];
      return!!map && !!map[opt_capture] && objUid in map[opt_capture]
    }else {
      if(!(hasType || hasCapture)) {
        return true
      }else {
        return goog.array.some(listeners, function(listener) {
          return hasType && listener.type == opt_type || hasCapture && listener.capture == opt_capture
        })
      }
    }
  }
  return false
};
goog.events.expose = function(e) {
  var str = [];
  for(var key in e) {
    if(e[key] && e[key].id) {
      str.push(key + " = " + e[key] + " (" + e[key].id + ")")
    }else {
      str.push(key + " = " + e[key])
    }
  }
  return str.join("\n")
};
goog.events.getOnString_ = function(type) {
  if(type in goog.events.onStringMap_) {
    return goog.events.onStringMap_[type]
  }
  return goog.events.onStringMap_[type] = goog.events.onString_ + type
};
goog.events.fireListeners = function(obj, type, capture, eventObject) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      return goog.events.fireListeners_(map[capture], obj, type, capture, eventObject)
    }
  }
  return true
};
goog.events.fireListeners_ = function(map, obj, type, capture, eventObject) {
  var retval = 1;
  var objUid = goog.getUid(obj);
  if(map[objUid]) {
    map.remaining_--;
    var listenerArray = map[objUid];
    if(!listenerArray.locked_) {
      listenerArray.locked_ = 1
    }else {
      listenerArray.locked_++
    }
    try {
      var length = listenerArray.length;
      for(var i = 0;i < length;i++) {
        var listener = listenerArray[i];
        if(listener && !listener.removed) {
          retval &= goog.events.fireListener(listener, eventObject) !== false
        }
      }
    }finally {
      listenerArray.locked_--;
      goog.events.cleanUp_(type, capture, objUid, listenerArray)
    }
  }
  return Boolean(retval)
};
goog.events.fireListener = function(listener, eventObject) {
  var rv = listener.handleEvent(eventObject);
  if(listener.callOnce) {
    goog.events.unlistenByKey(listener.key)
  }
  return rv
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(src, e) {
  var type = e.type || e;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  if(goog.isString(e)) {
    e = new goog.events.Event(e, src)
  }else {
    if(!(e instanceof goog.events.Event)) {
      var oldEvent = e;
      e = new goog.events.Event(type, src);
      goog.object.extend(e, oldEvent)
    }else {
      e.target = e.target || src
    }
  }
  var rv = 1, ancestors;
  map = map[type];
  var hasCapture = true in map;
  var targetsMap;
  if(hasCapture) {
    ancestors = [];
    for(var parent = src;parent;parent = parent.getParentEventTarget()) {
      ancestors.push(parent)
    }
    targetsMap = map[true];
    targetsMap.remaining_ = targetsMap.count_;
    for(var i = ancestors.length - 1;!e.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
      e.currentTarget = ancestors[i];
      rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, true, e) && e.returnValue_ != false
    }
  }
  var hasBubble = false in map;
  if(hasBubble) {
    targetsMap = map[false];
    targetsMap.remaining_ = targetsMap.count_;
    if(hasCapture) {
      for(var i = 0;!e.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
        e.currentTarget = ancestors[i];
        rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, false, e) && e.returnValue_ != false
      }
    }else {
      for(var current = src;!e.propagationStopped_ && current && targetsMap.remaining_;current = current.getParentEventTarget()) {
        e.currentTarget = current;
        rv &= goog.events.fireListeners_(targetsMap, current, e.type, false, e) && e.returnValue_ != false
      }
    }
  }
  return Boolean(rv)
};
goog.events.protectBrowserEventEntryPoint = function(errorHandler) {
  goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(key, opt_evt) {
  if(!goog.events.listeners_[key]) {
    return true
  }
  var listener = goog.events.listeners_[key];
  var type = listener.type;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  map = map[type];
  var retval, targetsMap;
  if(goog.events.synthesizeEventPropagation_()) {
    var ieEvent = opt_evt || goog.getObjectByName("window.event");
    var hasCapture = true in map;
    var hasBubble = false in map;
    if(hasCapture) {
      if(goog.events.isMarkedIeEvent_(ieEvent)) {
        return true
      }
      goog.events.markIeEvent_(ieEvent)
    }
    var evt = goog.events.pools.getEvent();
    evt.init(ieEvent, this);
    retval = true;
    try {
      if(hasCapture) {
        var ancestors = goog.events.pools.getArray();
        for(var parent = evt.currentTarget;parent;parent = parent.parentNode) {
          ancestors.push(parent)
        }
        targetsMap = map[true];
        targetsMap.remaining_ = targetsMap.count_;
        for(var i = ancestors.length - 1;!evt.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
          evt.currentTarget = ancestors[i];
          retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, true, evt)
        }
        if(hasBubble) {
          targetsMap = map[false];
          targetsMap.remaining_ = targetsMap.count_;
          for(var i = 0;!evt.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
            evt.currentTarget = ancestors[i];
            retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, false, evt)
          }
        }
      }else {
        retval = goog.events.fireListener(listener, evt)
      }
    }finally {
      if(ancestors) {
        ancestors.length = 0;
        goog.events.pools.releaseArray(ancestors)
      }
      evt.dispose();
      goog.events.pools.releaseEvent(evt)
    }
    return retval
  }
  var be = new goog.events.BrowserEvent(opt_evt, this);
  try {
    retval = goog.events.fireListener(listener, be)
  }finally {
    be.dispose()
  }
  return retval
};
goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_);
goog.events.markIeEvent_ = function(e) {
  var useReturnValue = false;
  if(e.keyCode == 0) {
    try {
      e.keyCode = -1;
      return
    }catch(ex) {
      useReturnValue = true
    }
  }
  if(useReturnValue || e.returnValue == undefined) {
    e.returnValue = true
  }
};
goog.events.isMarkedIeEvent_ = function(e) {
  return e.keyCode < 0 || e.returnValue != undefined
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(identifier) {
  return identifier + "_" + goog.events.uniqueIdCounter_++
};
goog.events.synthesizeEventPropagation_ = function() {
  if(goog.events.requiresSyntheticEventPropagation_ === undefined) {
    goog.events.requiresSyntheticEventPropagation_ = goog.userAgent.IE && !goog.global["addEventListener"]
  }
  return goog.events.requiresSyntheticEventPropagation_
};
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
});
goog.provide("goog.dom.xml");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.dom.xml.MAX_XML_SIZE_KB = 2 * 1024;
goog.dom.xml.MAX_ELEMENT_DEPTH = 256;
goog.dom.xml.createDocument = function(opt_rootTagName, opt_namespaceUri) {
  if(opt_namespaceUri && !opt_rootTagName) {
    throw Error("Can't create document with namespace and no root tag");
  }
  if(document.implementation && document.implementation.createDocument) {
    return document.implementation.createDocument(opt_namespaceUri || "", opt_rootTagName || "", null)
  }else {
    if(typeof ActiveXObject != "undefined") {
      var doc = goog.dom.xml.createMsXmlDocument_();
      if(doc) {
        if(opt_rootTagName) {
          doc.appendChild(doc.createNode(goog.dom.NodeType.ELEMENT, opt_rootTagName, opt_namespaceUri || ""))
        }
        return doc
      }
    }
  }
  throw Error("Your browser does not support creating new documents");
};
goog.dom.xml.loadXml = function(xml) {
  if(typeof DOMParser != "undefined") {
    return(new DOMParser).parseFromString(xml, "application/xml")
  }else {
    if(typeof ActiveXObject != "undefined") {
      var doc = goog.dom.xml.createMsXmlDocument_();
      doc.loadXML(xml);
      return doc
    }
  }
  throw Error("Your browser does not support loading xml documents");
};
goog.dom.xml.serialize = function(xml) {
  if(typeof XMLSerializer != "undefined") {
    return(new XMLSerializer).serializeToString(xml)
  }
  var text = xml.xml;
  if(text) {
    return text
  }
  throw Error("Your browser does not support serializing XML documents");
};
goog.dom.xml.selectSingleNode = function(node, path) {
  if(typeof node.selectSingleNode != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if(typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath")
    }
    return node.selectSingleNode(path)
  }else {
    if(document.implementation.hasFeature("XPath", "3.0")) {
      var doc = goog.dom.getOwnerDocument(node);
      var resolver = doc.createNSResolver(doc.documentElement);
      var result = doc.evaluate(path, node, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue
    }
  }
  return null
};
goog.dom.xml.selectNodes = function(node, path) {
  if(typeof node.selectNodes != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if(typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath")
    }
    return node.selectNodes(path)
  }else {
    if(document.implementation.hasFeature("XPath", "3.0")) {
      var doc = goog.dom.getOwnerDocument(node);
      var resolver = doc.createNSResolver(doc.documentElement);
      var nodes = doc.evaluate(path, node, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      var results = [];
      var count = nodes.snapshotLength;
      for(var i = 0;i < count;i++) {
        results.push(nodes.snapshotItem(i))
      }
      return results
    }else {
      return[]
    }
  }
};
goog.dom.xml.createMsXmlDocument_ = function() {
  var doc = new ActiveXObject("MSXML2.DOMDocument");
  if(doc) {
    doc.resolveExternals = false;
    doc.validateOnParse = false;
    try {
      doc.setProperty("ProhibitDTD", true);
      doc.setProperty("MaxXMLSize", goog.dom.xml.MAX_XML_SIZE_KB);
      doc.setProperty("MaxElementDepth", goog.dom.xml.MAX_ELEMENT_DEPTH)
    }catch(e) {
    }
  }
  return doc
};
goog.provide("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
goog.require("goog.object");
goog.require("goog.array");
cljs.core._STAR_print_fn_STAR_ = function _STAR_print_fn_STAR_(_) {
  throw new Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function truth_(x) {
  return x != null && x !== false
};
cljs.core.type_satisfies_ = function type_satisfies_(p, x) {
  var or__3548__auto____6407 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____6407)) {
    return or__3548__auto____6407
  }else {
    var or__3548__auto____6408 = p["_"];
    if(cljs.core.truth_(or__3548__auto____6408)) {
      return or__3548__auto____6408
    }else {
      return false
    }
  }
};
cljs.core.is_proto_ = function is_proto_(x) {
  return x.constructor.prototype === x
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function missing_protocol(proto, obj) {
  return Error.call(null, "No protocol method " + proto + " defined for type " + goog.typeOf.call(null, obj) + ": " + obj)
};
cljs.core.aclone = function aclone(array_like) {
  return Array.prototype.slice.call(array_like)
};
cljs.core.array = function array(var_args) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.aget = function aget(array, i) {
  return array[i]
};
cljs.core.aset = function aset(array, i, val) {
  return array[i] = val
};
cljs.core.alength = function alength(array) {
  return array.length
};
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var _invoke = null;
  var _invoke__6745 = function(this$) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6436 = this$;
      if(cljs.core.truth_(and__3546__auto____6436)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6436
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$)
    }else {
      return function() {
        var or__3548__auto____6442 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6442)) {
          return or__3548__auto____6442
        }else {
          var or__3548__auto____6444 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6444)) {
            return or__3548__auto____6444
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__6747 = function(this$, a) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6448 = this$;
      if(cljs.core.truth_(and__3546__auto____6448)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6448
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a)
    }else {
      return function() {
        var or__3548__auto____6454 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6454)) {
          return or__3548__auto____6454
        }else {
          var or__3548__auto____6456 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6456)) {
            return or__3548__auto____6456
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__6749 = function(this$, a, b) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6460 = this$;
      if(cljs.core.truth_(and__3546__auto____6460)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6460
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b)
    }else {
      return function() {
        var or__3548__auto____6464 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6464)) {
          return or__3548__auto____6464
        }else {
          var or__3548__auto____6466 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6466)) {
            return or__3548__auto____6466
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__6751 = function(this$, a, b, c) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6470 = this$;
      if(cljs.core.truth_(and__3546__auto____6470)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6470
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c)
    }else {
      return function() {
        var or__3548__auto____6474 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6474)) {
          return or__3548__auto____6474
        }else {
          var or__3548__auto____6478 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6478)) {
            return or__3548__auto____6478
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__6753 = function(this$, a, b, c, d) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6482 = this$;
      if(cljs.core.truth_(and__3546__auto____6482)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6482
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d)
    }else {
      return function() {
        var or__3548__auto____6486 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6486)) {
          return or__3548__auto____6486
        }else {
          var or__3548__auto____6489 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6489)) {
            return or__3548__auto____6489
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__6755 = function(this$, a, b, c, d, e) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6492 = this$;
      if(cljs.core.truth_(and__3546__auto____6492)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6492
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e)
    }else {
      return function() {
        var or__3548__auto____6496 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6496)) {
          return or__3548__auto____6496
        }else {
          var or__3548__auto____6509 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6509)) {
            return or__3548__auto____6509
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__6757 = function(this$, a, b, c, d, e, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6513 = this$;
      if(cljs.core.truth_(and__3546__auto____6513)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6513
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f)
    }else {
      return function() {
        var or__3548__auto____6517 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6517)) {
          return or__3548__auto____6517
        }else {
          var or__3548__auto____6521 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6521)) {
            return or__3548__auto____6521
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__6759 = function(this$, a, b, c, d, e, f, g) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6525 = this$;
      if(cljs.core.truth_(and__3546__auto____6525)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6525
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g)
    }else {
      return function() {
        var or__3548__auto____6529 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6529)) {
          return or__3548__auto____6529
        }else {
          var or__3548__auto____6533 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6533)) {
            return or__3548__auto____6533
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__6761 = function(this$, a, b, c, d, e, f, g, h) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6559 = this$;
      if(cljs.core.truth_(and__3546__auto____6559)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6559
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h)
    }else {
      return function() {
        var or__3548__auto____6591 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6591)) {
          return or__3548__auto____6591
        }else {
          var or__3548__auto____6592 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6592)) {
            return or__3548__auto____6592
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__6762 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6597 = this$;
      if(cljs.core.truth_(and__3546__auto____6597)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6597
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i)
    }else {
      return function() {
        var or__3548__auto____6600 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6600)) {
          return or__3548__auto____6600
        }else {
          var or__3548__auto____6603 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6603)) {
            return or__3548__auto____6603
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__6763 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6606 = this$;
      if(cljs.core.truth_(and__3546__auto____6606)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6606
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      return function() {
        var or__3548__auto____6609 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6609)) {
          return or__3548__auto____6609
        }else {
          var or__3548__auto____6611 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6611)) {
            return or__3548__auto____6611
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__6764 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6615 = this$;
      if(cljs.core.truth_(and__3546__auto____6615)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6615
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      return function() {
        var or__3548__auto____6617 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6617)) {
          return or__3548__auto____6617
        }else {
          var or__3548__auto____6620 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6620)) {
            return or__3548__auto____6620
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__6765 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6622 = this$;
      if(cljs.core.truth_(and__3546__auto____6622)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6622
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      return function() {
        var or__3548__auto____6625 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6625)) {
          return or__3548__auto____6625
        }else {
          var or__3548__auto____6627 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6627)) {
            return or__3548__auto____6627
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__6766 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6630 = this$;
      if(cljs.core.truth_(and__3546__auto____6630)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6630
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      return function() {
        var or__3548__auto____6633 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6633)) {
          return or__3548__auto____6633
        }else {
          var or__3548__auto____6636 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6636)) {
            return or__3548__auto____6636
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__6767 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6639 = this$;
      if(cljs.core.truth_(and__3546__auto____6639)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6639
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      return function() {
        var or__3548__auto____6641 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6641)) {
          return or__3548__auto____6641
        }else {
          var or__3548__auto____6643 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6643)) {
            return or__3548__auto____6643
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__6768 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6645 = this$;
      if(cljs.core.truth_(and__3546__auto____6645)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6645
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      return function() {
        var or__3548__auto____6647 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6647)) {
          return or__3548__auto____6647
        }else {
          var or__3548__auto____6649 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6649)) {
            return or__3548__auto____6649
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__6769 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6663 = this$;
      if(cljs.core.truth_(and__3546__auto____6663)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6663
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      return function() {
        var or__3548__auto____6674 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6674)) {
          return or__3548__auto____6674
        }else {
          var or__3548__auto____6675 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6675)) {
            return or__3548__auto____6675
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__6770 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6678 = this$;
      if(cljs.core.truth_(and__3546__auto____6678)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6678
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      return function() {
        var or__3548__auto____6681 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6681)) {
          return or__3548__auto____6681
        }else {
          var or__3548__auto____6683 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6683)) {
            return or__3548__auto____6683
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__6771 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6687 = this$;
      if(cljs.core.truth_(and__3546__auto____6687)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6687
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      return function() {
        var or__3548__auto____6690 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6690)) {
          return or__3548__auto____6690
        }else {
          var or__3548__auto____6692 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6692)) {
            return or__3548__auto____6692
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__6772 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6697 = this$;
      if(cljs.core.truth_(and__3546__auto____6697)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6697
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      return function() {
        var or__3548__auto____6699 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6699)) {
          return or__3548__auto____6699
        }else {
          var or__3548__auto____6701 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6701)) {
            return or__3548__auto____6701
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__6773 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6706 = this$;
      if(cljs.core.truth_(and__3546__auto____6706)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____6706
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      return function() {
        var or__3548__auto____6725 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____6725)) {
          return or__3548__auto____6725
        }else {
          var or__3548__auto____6726 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____6726)) {
            return or__3548__auto____6726
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
  };
  _invoke = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    switch(arguments.length) {
      case 1:
        return _invoke__6745.call(this, this$);
      case 2:
        return _invoke__6747.call(this, this$, a);
      case 3:
        return _invoke__6749.call(this, this$, a, b);
      case 4:
        return _invoke__6751.call(this, this$, a, b, c);
      case 5:
        return _invoke__6753.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__6755.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__6757.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__6759.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__6761.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__6762.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__6763.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__6764.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__6765.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__6766.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__6767.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__6768.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__6769.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__6770.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__6771.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__6772.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__6773.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _invoke
}();
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6836 = coll;
    if(cljs.core.truth_(and__3546__auto____6836)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____6836
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____6839 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6839)) {
        return or__3548__auto____6839
      }else {
        var or__3548__auto____6841 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____6841)) {
          return or__3548__auto____6841
        }else {
          throw cljs.core.missing_protocol.call(null, "ICounted.-count", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function _empty(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6851 = coll;
    if(cljs.core.truth_(and__3546__auto____6851)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____6851
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____6852 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6852)) {
        return or__3548__auto____6852
      }else {
        var or__3548__auto____6853 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____6853)) {
          return or__3548__auto____6853
        }else {
          throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ICollection = {};
cljs.core._conj = function _conj(coll, o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6857 = coll;
    if(cljs.core.truth_(and__3546__auto____6857)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____6857
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____6858 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6858)) {
        return or__3548__auto____6858
      }else {
        var or__3548__auto____6859 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____6859)) {
          return or__3548__auto____6859
        }else {
          throw cljs.core.missing_protocol.call(null, "ICollection.-conj", coll);
        }
      }
    }().call(null, coll, o)
  }
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var _nth = null;
  var _nth__6923 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6907 = coll;
      if(cljs.core.truth_(and__3546__auto____6907)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____6907
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____6911 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____6911)) {
          return or__3548__auto____6911
        }else {
          var or__3548__auto____6913 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____6913)) {
            return or__3548__auto____6913
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__6924 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6920 = coll;
      if(cljs.core.truth_(and__3546__auto____6920)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____6920
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____6921 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____6921)) {
          return or__3548__auto____6921
        }else {
          var or__3548__auto____6922 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____6922)) {
            return or__3548__auto____6922
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n, not_found)
    }
  };
  _nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return _nth__6923.call(this, coll, n);
      case 3:
        return _nth__6924.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6938 = coll;
    if(cljs.core.truth_(and__3546__auto____6938)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____6938
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____6939 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6939)) {
        return or__3548__auto____6939
      }else {
        var or__3548__auto____6941 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____6941)) {
          return or__3548__auto____6941
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6944 = coll;
    if(cljs.core.truth_(and__3546__auto____6944)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____6944
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____6946 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6946)) {
        return or__3548__auto____6946
      }else {
        var or__3548__auto____6948 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____6948)) {
          return or__3548__auto____6948
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var _lookup = null;
  var _lookup__6972 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6959 = o;
      if(cljs.core.truth_(and__3546__auto____6959)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____6959
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____6961 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____6961)) {
          return or__3548__auto____6961
        }else {
          var or__3548__auto____6963 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____6963)) {
            return or__3548__auto____6963
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__6973 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____6965 = o;
      if(cljs.core.truth_(and__3546__auto____6965)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____6965
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____6967 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____6967)) {
          return or__3548__auto____6967
        }else {
          var or__3548__auto____6970 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____6970)) {
            return or__3548__auto____6970
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k, not_found)
    }
  };
  _lookup = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return _lookup__6972.call(this, o, k);
      case 3:
        return _lookup__6973.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6981 = coll;
    if(cljs.core.truth_(and__3546__auto____6981)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____6981
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____6984 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6984)) {
        return or__3548__auto____6984
      }else {
        var or__3548__auto____6985 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____6985)) {
          return or__3548__auto____6985
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6987 = coll;
    if(cljs.core.truth_(and__3546__auto____6987)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____6987
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____6991 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6991)) {
        return or__3548__auto____6991
      }else {
        var or__3548__auto____6992 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____6992)) {
          return or__3548__auto____6992
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", coll);
        }
      }
    }().call(null, coll, k, v)
  }
};
cljs.core.IMap = {};
cljs.core._dissoc = function _dissoc(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____6996 = coll;
    if(cljs.core.truth_(and__3546__auto____6996)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____6996
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____6999 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____6999)) {
        return or__3548__auto____6999
      }else {
        var or__3548__auto____7000 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____7000)) {
          return or__3548__auto____7000
        }else {
          throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core.ISet = {};
cljs.core._disjoin = function _disjoin(coll, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7004 = coll;
    if(cljs.core.truth_(and__3546__auto____7004)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____7004
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____7008 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7008)) {
        return or__3548__auto____7008
      }else {
        var or__3548__auto____7010 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____7010)) {
          return or__3548__auto____7010
        }else {
          throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", coll);
        }
      }
    }().call(null, coll, v)
  }
};
cljs.core.IStack = {};
cljs.core._peek = function _peek(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7018 = coll;
    if(cljs.core.truth_(and__3546__auto____7018)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____7018
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____7019 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7019)) {
        return or__3548__auto____7019
      }else {
        var or__3548__auto____7020 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____7020)) {
          return or__3548__auto____7020
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7021 = coll;
    if(cljs.core.truth_(and__3546__auto____7021)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____7021
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____7025 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7025)) {
        return or__3548__auto____7025
      }else {
        var or__3548__auto____7027 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____7027)) {
          return or__3548__auto____7027
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-pop", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IVector = {};
cljs.core._assoc_n = function _assoc_n(coll, n, val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7042 = coll;
    if(cljs.core.truth_(and__3546__auto____7042)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____7042
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____7046 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7046)) {
        return or__3548__auto____7046
      }else {
        var or__3548__auto____7047 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____7047)) {
          return or__3548__auto____7047
        }else {
          throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", coll);
        }
      }
    }().call(null, coll, n, val)
  }
};
cljs.core.IDeref = {};
cljs.core._deref = function _deref(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7055 = o;
    if(cljs.core.truth_(and__3546__auto____7055)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____7055
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____7059 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7059)) {
        return or__3548__auto____7059
      }else {
        var or__3548__auto____7061 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____7061)) {
          return or__3548__auto____7061
        }else {
          throw cljs.core.missing_protocol.call(null, "IDeref.-deref", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function _deref_with_timeout(o, msec, timeout_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7068 = o;
    if(cljs.core.truth_(and__3546__auto____7068)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____7068
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____7070 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7070)) {
        return or__3548__auto____7070
      }else {
        var or__3548__auto____7072 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____7072)) {
          return or__3548__auto____7072
        }else {
          throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", o);
        }
      }
    }().call(null, o, msec, timeout_val)
  }
};
cljs.core.IMeta = {};
cljs.core._meta = function _meta(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7079 = o;
    if(cljs.core.truth_(and__3546__auto____7079)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____7079
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____7082 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7082)) {
        return or__3548__auto____7082
      }else {
        var or__3548__auto____7084 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____7084)) {
          return or__3548__auto____7084
        }else {
          throw cljs.core.missing_protocol.call(null, "IMeta.-meta", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function _with_meta(o, meta) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7093 = o;
    if(cljs.core.truth_(and__3546__auto____7093)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____7093
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____7095 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7095)) {
        return or__3548__auto____7095
      }else {
        var or__3548__auto____7097 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____7097)) {
          return or__3548__auto____7097
        }else {
          throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", o);
        }
      }
    }().call(null, o, meta)
  }
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var _reduce = null;
  var _reduce__7181 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7163 = coll;
      if(cljs.core.truth_(and__3546__auto____7163)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____7163
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____7165 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____7165)) {
          return or__3548__auto____7165
        }else {
          var or__3548__auto____7167 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____7167)) {
            return or__3548__auto____7167
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__7182 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7172 = coll;
      if(cljs.core.truth_(and__3546__auto____7172)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____7172
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____7179 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____7179)) {
          return or__3548__auto____7179
        }else {
          var or__3548__auto____7180 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____7180)) {
            return or__3548__auto____7180
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f, start)
    }
  };
  _reduce = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return _reduce__7181.call(this, coll, f);
      case 3:
        return _reduce__7182.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7191 = o;
    if(cljs.core.truth_(and__3546__auto____7191)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____7191
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____7193 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7193)) {
        return or__3548__auto____7193
      }else {
        var or__3548__auto____7195 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____7195)) {
          return or__3548__auto____7195
        }else {
          throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", o);
        }
      }
    }().call(null, o, other)
  }
};
cljs.core.IHash = {};
cljs.core._hash = function _hash(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7209 = o;
    if(cljs.core.truth_(and__3546__auto____7209)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____7209
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____7210 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7210)) {
        return or__3548__auto____7210
      }else {
        var or__3548__auto____7211 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____7211)) {
          return or__3548__auto____7211
        }else {
          throw cljs.core.missing_protocol.call(null, "IHash.-hash", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISeqable = {};
cljs.core._seq = function _seq(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7219 = o;
    if(cljs.core.truth_(and__3546__auto____7219)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____7219
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____7222 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7222)) {
        return or__3548__auto____7222
      }else {
        var or__3548__auto____7224 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____7224)) {
          return or__3548__auto____7224
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function _pr_seq(o, opts) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7231 = o;
    if(cljs.core.truth_(and__3546__auto____7231)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____7231
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____7236 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____7236)) {
        return or__3548__auto____7236
      }else {
        var or__3548__auto____7238 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____7238)) {
          return or__3548__auto____7238
        }else {
          throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", o);
        }
      }
    }().call(null, o, opts)
  }
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function _realized_QMARK_(d) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7243 = d;
    if(cljs.core.truth_(and__3546__auto____7243)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____7243
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____7247 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____7247)) {
        return or__3548__auto____7247
      }else {
        var or__3548__auto____7248 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____7248)) {
          return or__3548__auto____7248
        }else {
          throw cljs.core.missing_protocol.call(null, "IPending.-realized?", d);
        }
      }
    }().call(null, d)
  }
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function _notify_watches(this$, oldval, newval) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7309 = this$;
    if(cljs.core.truth_(and__3546__auto____7309)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____7309
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____7310 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____7310)) {
        return or__3548__auto____7310
      }else {
        var or__3548__auto____7311 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____7311)) {
          return or__3548__auto____7311
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7312 = this$;
    if(cljs.core.truth_(and__3546__auto____7312)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____7312
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____7313 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____7313)) {
        return or__3548__auto____7313
      }else {
        var or__3548__auto____7314 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____7314)) {
          return or__3548__auto____7314
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7315 = this$;
    if(cljs.core.truth_(and__3546__auto____7315)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____7315
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____7316 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____7316)) {
        return or__3548__auto____7316
      }else {
        var or__3548__auto____7317 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____7317)) {
          return or__3548__auto____7317
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", this$);
        }
      }
    }().call(null, this$, key)
  }
};
cljs.core.identical_QMARK_ = function identical_QMARK_(x, y) {
  return x === y
};
cljs.core._EQ_ = function _EQ_(x, y) {
  return cljs.core._equiv.call(null, x, y)
};
cljs.core.nil_QMARK_ = function nil_QMARK_(x) {
  return x === null
};
cljs.core.type = function type(x) {
  return x.constructor
};
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = function(this$) {
  return cljs.core.list.call(null, "#<", cljs.core.str.call(null, this$), ">")
};
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__7355 = null;
  var G__7355__7356 = function(o, k) {
    return null
  };
  var G__7355__7357 = function(o, k, not_found) {
    return not_found
  };
  G__7355 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7355__7356.call(this, o, k);
      case 3:
        return G__7355__7357.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7355
}();
cljs.core.IAssociative["null"] = true;
cljs.core._assoc["null"] = function(_, k, v) {
  return cljs.core.hash_map.call(null, k, v)
};
cljs.core.ICollection["null"] = true;
cljs.core._conj["null"] = function(_, o) {
  return cljs.core.list.call(null, o)
};
cljs.core.IReduce["null"] = true;
cljs.core._reduce["null"] = function() {
  var G__7363 = null;
  var G__7363__7364 = function(_, f) {
    return f.call(null)
  };
  var G__7363__7365 = function(_, f, start) {
    return start
  };
  G__7363 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__7363__7364.call(this, _, f);
      case 3:
        return G__7363__7365.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7363
}();
cljs.core.IPrintable["null"] = true;
cljs.core._pr_seq["null"] = function(o) {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = true;
cljs.core._disjoin["null"] = function(_, v) {
  return null
};
cljs.core.ICounted["null"] = true;
cljs.core._count["null"] = function(_) {
  return 0
};
cljs.core.IStack["null"] = true;
cljs.core._peek["null"] = function(_) {
  return null
};
cljs.core._pop["null"] = function(_) {
  return null
};
cljs.core.ISeq["null"] = true;
cljs.core._first["null"] = function(_) {
  return null
};
cljs.core._rest["null"] = function(_) {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = true;
cljs.core._equiv["null"] = function(_, o) {
  return cljs.core.nil_QMARK_.call(null, o)
};
cljs.core.IWithMeta["null"] = true;
cljs.core._with_meta["null"] = function(_, meta) {
  return null
};
cljs.core.IMeta["null"] = true;
cljs.core._meta["null"] = function(_) {
  return null
};
cljs.core.IIndexed["null"] = true;
cljs.core._nth["null"] = function() {
  var G__7371 = null;
  var G__7371__7372 = function(_, n) {
    return null
  };
  var G__7371__7373 = function(_, n, not_found) {
    return not_found
  };
  G__7371 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7371__7372.call(this, _, n);
      case 3:
        return G__7371__7373.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7371
}();
cljs.core.IEmptyableCollection["null"] = true;
cljs.core._empty["null"] = function(_) {
  return null
};
cljs.core.IMap["null"] = true;
cljs.core._dissoc["null"] = function(_, k) {
  return null
};
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  return o.toString() === other.toString()
};
cljs.core.IHash["number"] = true;
cljs.core._hash["number"] = function(o) {
  return o
};
cljs.core.IEquiv["number"] = true;
cljs.core._equiv["number"] = function(x, o) {
  return x === o
};
cljs.core.IHash["boolean"] = true;
cljs.core._hash["boolean"] = function(o) {
  return o === true ? 1 : 0
};
cljs.core.IHash["function"] = true;
cljs.core._hash["function"] = function(o) {
  return goog.getUid.call(null, o)
};
cljs.core.inc = function inc(x) {
  return x + 1
};
cljs.core.ci_reduce = function() {
  var ci_reduce = null;
  var ci_reduce__7405 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__7393 = cljs.core._nth.call(null, cicoll, 0);
      var n__7394 = 1;
      while(true) {
        if(cljs.core.truth_(n__7394 < cljs.core._count.call(null, cicoll))) {
          var G__7409 = f.call(null, val__7393, cljs.core._nth.call(null, cicoll, n__7394));
          var G__7410 = n__7394 + 1;
          val__7393 = G__7409;
          n__7394 = G__7410;
          continue
        }else {
          return val__7393
        }
        break
      }
    }
  };
  var ci_reduce__7406 = function(cicoll, f, val) {
    var val__7399 = val;
    var n__7400 = 0;
    while(true) {
      if(cljs.core.truth_(n__7400 < cljs.core._count.call(null, cicoll))) {
        var G__7412 = f.call(null, val__7399, cljs.core._nth.call(null, cicoll, n__7400));
        var G__7413 = n__7400 + 1;
        val__7399 = G__7412;
        n__7400 = G__7413;
        continue
      }else {
        return val__7399
      }
      break
    }
  };
  var ci_reduce__7407 = function(cicoll, f, val, idx) {
    var val__7403 = val;
    var n__7404 = idx;
    while(true) {
      if(cljs.core.truth_(n__7404 < cljs.core._count.call(null, cicoll))) {
        var G__7416 = f.call(null, val__7403, cljs.core._nth.call(null, cicoll, n__7404));
        var G__7417 = n__7404 + 1;
        val__7403 = G__7416;
        n__7404 = G__7417;
        continue
      }else {
        return val__7403
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__7405.call(this, cicoll, f);
      case 3:
        return ci_reduce__7406.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__7407.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ci_reduce
}();
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i
};
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__7543 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__7594 = null;
  var G__7594__7597 = function(_, f) {
    var this__7545 = this;
    return cljs.core.ci_reduce.call(null, this__7545.a, f, this__7545.a[this__7545.i], this__7545.i + 1)
  };
  var G__7594__7598 = function(_, f, start) {
    var this__7547 = this;
    return cljs.core.ci_reduce.call(null, this__7547.a, f, start, this__7547.i)
  };
  G__7594 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__7594__7597.call(this, _, f);
      case 3:
        return G__7594__7598.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7594
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__7553 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__7555 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__7609 = null;
  var G__7609__7610 = function(coll, n) {
    var this__7558 = this;
    var i__7576 = n + this__7558.i;
    if(cljs.core.truth_(i__7576 < this__7558.a.length)) {
      return this__7558.a[i__7576]
    }else {
      return null
    }
  };
  var G__7609__7611 = function(coll, n, not_found) {
    var this__7579 = this;
    var i__7580 = n + this__7579.i;
    if(cljs.core.truth_(i__7580 < this__7579.a.length)) {
      return this__7579.a[i__7580]
    }else {
      return not_found
    }
  };
  G__7609 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7609__7610.call(this, coll, n);
      case 3:
        return G__7609__7611.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7609
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__7582 = this;
  return this__7582.a.length - this__7582.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__7587 = this;
  return this__7587.a[this__7587.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__7588 = this;
  if(cljs.core.truth_(this__7588.i + 1 < this__7588.a.length)) {
    return new cljs.core.IndexedSeq(this__7588.a, this__7588.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__7591 = this;
  return this$
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function prim_seq(prim, i) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, prim.length))) {
    return null
  }else {
    return new cljs.core.IndexedSeq(prim, i)
  }
};
cljs.core.array_seq = function array_seq(array, i) {
  return cljs.core.prim_seq.call(null, array, i)
};
cljs.core.IReduce["array"] = true;
cljs.core._reduce["array"] = function() {
  var G__7618 = null;
  var G__7618__7619 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__7618__7620 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__7618 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__7618__7619.call(this, array, f);
      case 3:
        return G__7618__7620.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7618
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__7642 = null;
  var G__7642__7645 = function(array, k) {
    return array[k]
  };
  var G__7642__7647 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__7642 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7642__7645.call(this, array, k);
      case 3:
        return G__7642__7647.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7642
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__7649 = null;
  var G__7649__7650 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__7649__7651 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__7649 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7649__7650.call(this, array, n);
      case 3:
        return G__7649__7651.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7649
}();
cljs.core.ICounted["array"] = true;
cljs.core._count["array"] = function(a) {
  return a.length
};
cljs.core.ISeqable["array"] = true;
cljs.core._seq["array"] = function(array) {
  return cljs.core.array_seq.call(null, array, 0)
};
cljs.core.seq = function seq(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core._seq.call(null, coll)
  }else {
    return null
  }
};
cljs.core.first = function first(coll) {
  var temp__3698__auto____7655 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____7655)) {
    var s__7656 = temp__3698__auto____7655;
    return cljs.core._first.call(null, s__7656)
  }else {
    return null
  }
};
cljs.core.rest = function rest(coll) {
  return cljs.core._rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.next = function next(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core.seq.call(null, cljs.core.rest.call(null, coll))
  }else {
    return null
  }
};
cljs.core.second = function second(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.ffirst = function ffirst(coll) {
  return cljs.core.first.call(null, cljs.core.first.call(null, coll))
};
cljs.core.nfirst = function nfirst(coll) {
  return cljs.core.next.call(null, cljs.core.first.call(null, coll))
};
cljs.core.fnext = function fnext(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.nnext = function nnext(coll) {
  return cljs.core.next.call(null, cljs.core.next.call(null, coll))
};
cljs.core.last = function last(s) {
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s))) {
      var G__7660 = cljs.core.next.call(null, s);
      s = G__7660;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__7663 = cljs.core.seq.call(null, x);
  var n__7664 = 0;
  while(true) {
    if(cljs.core.truth_(s__7663)) {
      var G__7667 = cljs.core.next.call(null, s__7663);
      var G__7668 = n__7664 + 1;
      s__7663 = G__7667;
      n__7664 = G__7668;
      continue
    }else {
      return n__7664
    }
    break
  }
};
cljs.core.IEquiv["_"] = true;
cljs.core._equiv["_"] = function(x, o) {
  return x === o
};
cljs.core.not = function not(x) {
  if(cljs.core.truth_(x)) {
    return false
  }else {
    return true
  }
};
cljs.core.conj = function() {
  var conj = null;
  var conj__7670 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__7672 = function() {
    var G__7676__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__7678 = conj.call(null, coll, x);
          var G__7680 = cljs.core.first.call(null, xs);
          var G__7681 = cljs.core.next.call(null, xs);
          coll = G__7678;
          x = G__7680;
          xs = G__7681;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__7676 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7676__delegate.call(this, coll, x, xs)
    };
    G__7676.cljs$lang$maxFixedArity = 2;
    G__7676.cljs$lang$applyTo = function(arglist__7688) {
      var coll = cljs.core.first(arglist__7688);
      var x = cljs.core.first(cljs.core.next(arglist__7688));
      var xs = cljs.core.rest(cljs.core.next(arglist__7688));
      return G__7676__delegate.call(this, coll, x, xs)
    };
    return G__7676
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__7670.call(this, coll, x);
      default:
        return conj__7672.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__7672.cljs$lang$applyTo;
  return conj
}();
cljs.core.empty = function empty(coll) {
  return cljs.core._empty.call(null, coll)
};
cljs.core.count = function count(coll) {
  return cljs.core._count.call(null, coll)
};
cljs.core.nth = function() {
  var nth = null;
  var nth__7779 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__7780 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__7779.call(this, coll, n);
      case 3:
        return nth__7780.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__7796 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__7797 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__7796.call(this, o, k);
      case 3:
        return get__7797.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__7815 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__7816 = function() {
    var G__7819__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__7809 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__7824 = ret__7809;
          var G__7825 = cljs.core.first.call(null, kvs);
          var G__7826 = cljs.core.second.call(null, kvs);
          var G__7827 = cljs.core.nnext.call(null, kvs);
          coll = G__7824;
          k = G__7825;
          v = G__7826;
          kvs = G__7827;
          continue
        }else {
          return ret__7809
        }
        break
      }
    };
    var G__7819 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__7819__delegate.call(this, coll, k, v, kvs)
    };
    G__7819.cljs$lang$maxFixedArity = 3;
    G__7819.cljs$lang$applyTo = function(arglist__7836) {
      var coll = cljs.core.first(arglist__7836);
      var k = cljs.core.first(cljs.core.next(arglist__7836));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7836)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7836)));
      return G__7819__delegate.call(this, coll, k, v, kvs)
    };
    return G__7819
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__7815.call(this, coll, k, v);
      default:
        return assoc__7816.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__7816.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__7847 = function(coll) {
    return coll
  };
  var dissoc__7848 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__7849 = function() {
    var G__7852__delegate = function(coll, k, ks) {
      while(true) {
        var ret__7841 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__7853 = ret__7841;
          var G__7854 = cljs.core.first.call(null, ks);
          var G__7855 = cljs.core.next.call(null, ks);
          coll = G__7853;
          k = G__7854;
          ks = G__7855;
          continue
        }else {
          return ret__7841
        }
        break
      }
    };
    var G__7852 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7852__delegate.call(this, coll, k, ks)
    };
    G__7852.cljs$lang$maxFixedArity = 2;
    G__7852.cljs$lang$applyTo = function(arglist__7856) {
      var coll = cljs.core.first(arglist__7856);
      var k = cljs.core.first(cljs.core.next(arglist__7856));
      var ks = cljs.core.rest(cljs.core.next(arglist__7856));
      return G__7852__delegate.call(this, coll, k, ks)
    };
    return G__7852
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__7847.call(this, coll);
      case 2:
        return dissoc__7848.call(this, coll, k);
      default:
        return dissoc__7849.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__7849.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__445__auto____7860 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____7861 = x__445__auto____7860;
      if(cljs.core.truth_(and__3546__auto____7861)) {
        var and__3546__auto____7862 = x__445__auto____7860.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____7862)) {
          return cljs.core.not.call(null, x__445__auto____7860.hasOwnProperty("cljs$core$IMeta$"))
        }else {
          return and__3546__auto____7862
        }
      }else {
        return and__3546__auto____7861
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____7860)
    }
  }())) {
    return cljs.core._meta.call(null, o)
  }else {
    return null
  }
};
cljs.core.peek = function peek(coll) {
  return cljs.core._peek.call(null, coll)
};
cljs.core.pop = function pop(coll) {
  return cljs.core._pop.call(null, coll)
};
cljs.core.disj = function() {
  var disj = null;
  var disj__7870 = function(coll) {
    return coll
  };
  var disj__7871 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__7872 = function() {
    var G__7884__delegate = function(coll, k, ks) {
      while(true) {
        var ret__7869 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__7886 = ret__7869;
          var G__7887 = cljs.core.first.call(null, ks);
          var G__7888 = cljs.core.next.call(null, ks);
          coll = G__7886;
          k = G__7887;
          ks = G__7888;
          continue
        }else {
          return ret__7869
        }
        break
      }
    };
    var G__7884 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7884__delegate.call(this, coll, k, ks)
    };
    G__7884.cljs$lang$maxFixedArity = 2;
    G__7884.cljs$lang$applyTo = function(arglist__7889) {
      var coll = cljs.core.first(arglist__7889);
      var k = cljs.core.first(cljs.core.next(arglist__7889));
      var ks = cljs.core.rest(cljs.core.next(arglist__7889));
      return G__7884__delegate.call(this, coll, k, ks)
    };
    return G__7884
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__7870.call(this, coll);
      case 2:
        return disj__7871.call(this, coll, k);
      default:
        return disj__7872.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__7872.cljs$lang$applyTo;
  return disj
}();
cljs.core.hash = function hash(o) {
  return cljs.core._hash.call(null, o)
};
cljs.core.empty_QMARK_ = function empty_QMARK_(coll) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.coll_QMARK_ = function coll_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____7898 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____7899 = x__445__auto____7898;
      if(cljs.core.truth_(and__3546__auto____7899)) {
        var and__3546__auto____7901 = x__445__auto____7898.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____7901)) {
          return cljs.core.not.call(null, x__445__auto____7898.hasOwnProperty("cljs$core$ICollection$"))
        }else {
          return and__3546__auto____7901
        }
      }else {
        return and__3546__auto____7899
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__445__auto____7898)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____7913 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____7915 = x__445__auto____7913;
      if(cljs.core.truth_(and__3546__auto____7915)) {
        var and__3546__auto____7917 = x__445__auto____7913.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____7917)) {
          return cljs.core.not.call(null, x__445__auto____7913.hasOwnProperty("cljs$core$ISet$"))
        }else {
          return and__3546__auto____7917
        }
      }else {
        return and__3546__auto____7915
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__445__auto____7913)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__445__auto____7952 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____7954 = x__445__auto____7952;
    if(cljs.core.truth_(and__3546__auto____7954)) {
      var and__3546__auto____7956 = x__445__auto____7952.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____7956)) {
        return cljs.core.not.call(null, x__445__auto____7952.hasOwnProperty("cljs$core$IAssociative$"))
      }else {
        return and__3546__auto____7956
      }
    }else {
      return and__3546__auto____7954
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__445__auto____7952)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__445__auto____7960 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____7961 = x__445__auto____7960;
    if(cljs.core.truth_(and__3546__auto____7961)) {
      var and__3546__auto____7962 = x__445__auto____7960.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____7962)) {
        return cljs.core.not.call(null, x__445__auto____7960.hasOwnProperty("cljs$core$ISequential$"))
      }else {
        return and__3546__auto____7962
      }
    }else {
      return and__3546__auto____7961
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__445__auto____7960)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__445__auto____7965 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____7967 = x__445__auto____7965;
    if(cljs.core.truth_(and__3546__auto____7967)) {
      var and__3546__auto____7968 = x__445__auto____7965.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____7968)) {
        return cljs.core.not.call(null, x__445__auto____7965.hasOwnProperty("cljs$core$ICounted$"))
      }else {
        return and__3546__auto____7968
      }
    }else {
      return and__3546__auto____7967
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__445__auto____7965)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____7969 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____7970 = x__445__auto____7969;
      if(cljs.core.truth_(and__3546__auto____7970)) {
        var and__3546__auto____7972 = x__445__auto____7969.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____7972)) {
          return cljs.core.not.call(null, x__445__auto____7969.hasOwnProperty("cljs$core$IMap$"))
        }else {
          return and__3546__auto____7972
        }
      }else {
        return and__3546__auto____7970
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__445__auto____7969)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__445__auto____7977 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____7978 = x__445__auto____7977;
    if(cljs.core.truth_(and__3546__auto____7978)) {
      var and__3546__auto____7985 = x__445__auto____7977.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____7985)) {
        return cljs.core.not.call(null, x__445__auto____7977.hasOwnProperty("cljs$core$IVector$"))
      }else {
        return and__3546__auto____7985
      }
    }else {
      return and__3546__auto____7978
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__445__auto____7977)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__7987 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__7987.push(key)
  });
  return keys__7987
};
cljs.core.js_delete = function js_delete(obj, key) {
  return delete obj[key]
};
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
cljs.core.false_QMARK_ = function false_QMARK_(x) {
  return x === false
};
cljs.core.true_QMARK_ = function true_QMARK_(x) {
  return x === true
};
cljs.core.undefined_QMARK_ = function undefined_QMARK_(x) {
  return void 0 === x
};
cljs.core.instance_QMARK_ = function instance_QMARK_(t, o) {
  return o != null && (o instanceof t || o.constructor === t || t === Object)
};
cljs.core.seq_QMARK_ = function seq_QMARK_(s) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, s))) {
    return false
  }else {
    var x__445__auto____7998 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8000 = x__445__auto____7998;
      if(cljs.core.truth_(and__3546__auto____8000)) {
        var and__3546__auto____8016 = x__445__auto____7998.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____8016)) {
          return cljs.core.not.call(null, x__445__auto____7998.hasOwnProperty("cljs$core$ISeq$"))
        }else {
          return and__3546__auto____8016
        }
      }else {
        return and__3546__auto____8000
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__445__auto____7998)
    }
  }
};
cljs.core.boolean$ = function boolean$(x) {
  if(cljs.core.truth_(x)) {
    return true
  }else {
    return false
  }
};
cljs.core.string_QMARK_ = function string_QMARK_(x) {
  var and__3546__auto____8021 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8021)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____8024 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____8024)) {
        return or__3548__auto____8024
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____8021
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____8026 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8026)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____8026
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____8033 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8033)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____8033
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____8039 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____8039)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____8039
  }
};
cljs.core.contains_QMARK_ = function contains_QMARK_(coll, v) {
  if(cljs.core.truth_(cljs.core._lookup.call(null, coll, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)) {
    return false
  }else {
    return true
  }
};
cljs.core.find = function find(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____8046 = coll;
    if(cljs.core.truth_(and__3546__auto____8046)) {
      var and__3546__auto____8047 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____8047)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____8047
      }
    }else {
      return and__3546__auto____8046
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___8068 = function(x) {
    return true
  };
  var distinct_QMARK___8069 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___8070 = function() {
    var G__8109__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__8059 = cljs.core.set([y, x]);
        var xs__8061 = more;
        while(true) {
          var x__8062 = cljs.core.first.call(null, xs__8061);
          var etc__8064 = cljs.core.next.call(null, xs__8061);
          if(cljs.core.truth_(xs__8061)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__8059, x__8062))) {
              return false
            }else {
              var G__8112 = cljs.core.conj.call(null, s__8059, x__8062);
              var G__8114 = etc__8064;
              s__8059 = G__8112;
              xs__8061 = G__8114;
              continue
            }
          }else {
            return true
          }
          break
        }
      }else {
        return false
      }
    };
    var G__8109 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8109__delegate.call(this, x, y, more)
    };
    G__8109.cljs$lang$maxFixedArity = 2;
    G__8109.cljs$lang$applyTo = function(arglist__8116) {
      var x = cljs.core.first(arglist__8116);
      var y = cljs.core.first(cljs.core.next(arglist__8116));
      var more = cljs.core.rest(cljs.core.next(arglist__8116));
      return G__8109__delegate.call(this, x, y, more)
    };
    return G__8109
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___8068.call(this, x);
      case 2:
        return distinct_QMARK___8069.call(this, x, y);
      default:
        return distinct_QMARK___8070.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8070.cljs$lang$applyTo;
  return distinct_QMARK_
}();
cljs.core.compare = function compare(x, y) {
  return goog.array.defaultCompare.call(null, x, y)
};
cljs.core.fn__GT_comparator = function fn__GT_comparator(f) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, f, cljs.core.compare))) {
    return cljs.core.compare
  }else {
    return function(x, y) {
      var r__8123 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__8123))) {
        return r__8123
      }else {
        if(cljs.core.truth_(r__8123)) {
          return-1
        }else {
          if(cljs.core.truth_(f.call(null, y, x))) {
            return 1
          }else {
            return 0
          }
        }
      }
    }
  }
};
cljs.core.sort = function() {
  var sort = null;
  var sort__8135 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__8136 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__8134 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__8134, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__8134)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__8135.call(this, comp);
      case 2:
        return sort__8136.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__8143 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__8144 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__8143.call(this, keyfn, comp);
      case 3:
        return sort_by__8144.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__8153 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__8154 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__8153.call(this, f, val);
      case 3:
        return reduce__8154.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__8163 = function(f, coll) {
    var temp__3695__auto____8158 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____8158)) {
      var s__8159 = temp__3695__auto____8158;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__8159), cljs.core.next.call(null, s__8159))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__8164 = function(f, val, coll) {
    var val__8161 = val;
    var coll__8162 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__8162)) {
        var G__8167 = f.call(null, val__8161, cljs.core.first.call(null, coll__8162));
        var G__8168 = cljs.core.next.call(null, coll__8162);
        val__8161 = G__8167;
        coll__8162 = G__8168;
        continue
      }else {
        return val__8161
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__8163.call(this, f, val);
      case 3:
        return seq_reduce__8164.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__8175 = null;
  var G__8175__8176 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__8175__8177 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__8175 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__8175__8176.call(this, coll, f);
      case 3:
        return G__8175__8177.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8175
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___8185 = function() {
    return 0
  };
  var _PLUS___8186 = function(x) {
    return x
  };
  var _PLUS___8187 = function(x, y) {
    return x + y
  };
  var _PLUS___8188 = function() {
    var G__8190__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, x + y, more)
    };
    var G__8190 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8190__delegate.call(this, x, y, more)
    };
    G__8190.cljs$lang$maxFixedArity = 2;
    G__8190.cljs$lang$applyTo = function(arglist__8219) {
      var x = cljs.core.first(arglist__8219);
      var y = cljs.core.first(cljs.core.next(arglist__8219));
      var more = cljs.core.rest(cljs.core.next(arglist__8219));
      return G__8190__delegate.call(this, x, y, more)
    };
    return G__8190
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___8185.call(this);
      case 1:
        return _PLUS___8186.call(this, x);
      case 2:
        return _PLUS___8187.call(this, x, y);
      default:
        return _PLUS___8188.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___8188.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___8227 = function(x) {
    return-x
  };
  var ___8228 = function(x, y) {
    return x - y
  };
  var ___8229 = function() {
    var G__8236__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, x - y, more)
    };
    var G__8236 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8236__delegate.call(this, x, y, more)
    };
    G__8236.cljs$lang$maxFixedArity = 2;
    G__8236.cljs$lang$applyTo = function(arglist__8240) {
      var x = cljs.core.first(arglist__8240);
      var y = cljs.core.first(cljs.core.next(arglist__8240));
      var more = cljs.core.rest(cljs.core.next(arglist__8240));
      return G__8236__delegate.call(this, x, y, more)
    };
    return G__8236
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___8227.call(this, x);
      case 2:
        return ___8228.call(this, x, y);
      default:
        return ___8229.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___8229.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___8263 = function() {
    return 1
  };
  var _STAR___8264 = function(x) {
    return x
  };
  var _STAR___8265 = function(x, y) {
    return x * y
  };
  var _STAR___8266 = function() {
    var G__8269__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, x * y, more)
    };
    var G__8269 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8269__delegate.call(this, x, y, more)
    };
    G__8269.cljs$lang$maxFixedArity = 2;
    G__8269.cljs$lang$applyTo = function(arglist__8270) {
      var x = cljs.core.first(arglist__8270);
      var y = cljs.core.first(cljs.core.next(arglist__8270));
      var more = cljs.core.rest(cljs.core.next(arglist__8270));
      return G__8269__delegate.call(this, x, y, more)
    };
    return G__8269
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___8263.call(this);
      case 1:
        return _STAR___8264.call(this, x);
      case 2:
        return _STAR___8265.call(this, x, y);
      default:
        return _STAR___8266.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___8266.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___8280 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___8283 = function(x, y) {
    return _SLASH_.call(null, x, y)
  };
  var _SLASH___8284 = function() {
    var G__8286__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__8286 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8286__delegate.call(this, x, y, more)
    };
    G__8286.cljs$lang$maxFixedArity = 2;
    G__8286.cljs$lang$applyTo = function(arglist__8288) {
      var x = cljs.core.first(arglist__8288);
      var y = cljs.core.first(cljs.core.next(arglist__8288));
      var more = cljs.core.rest(cljs.core.next(arglist__8288));
      return G__8286__delegate.call(this, x, y, more)
    };
    return G__8286
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___8280.call(this, x);
      case 2:
        return _SLASH___8283.call(this, x, y);
      default:
        return _SLASH___8284.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___8284.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___8299 = function(x) {
    return true
  };
  var _LT___8301 = function(x, y) {
    return x < y
  };
  var _LT___8302 = function() {
    var G__8305__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x < y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__8312 = y;
            var G__8313 = cljs.core.first.call(null, more);
            var G__8314 = cljs.core.next.call(null, more);
            x = G__8312;
            y = G__8313;
            more = G__8314;
            continue
          }else {
            return y < cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__8305 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8305__delegate.call(this, x, y, more)
    };
    G__8305.cljs$lang$maxFixedArity = 2;
    G__8305.cljs$lang$applyTo = function(arglist__8315) {
      var x = cljs.core.first(arglist__8315);
      var y = cljs.core.first(cljs.core.next(arglist__8315));
      var more = cljs.core.rest(cljs.core.next(arglist__8315));
      return G__8305__delegate.call(this, x, y, more)
    };
    return G__8305
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___8299.call(this, x);
      case 2:
        return _LT___8301.call(this, x, y);
      default:
        return _LT___8302.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___8302.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___8326 = function(x) {
    return true
  };
  var _LT__EQ___8327 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___8328 = function() {
    var G__8334__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x <= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__8335 = y;
            var G__8336 = cljs.core.first.call(null, more);
            var G__8337 = cljs.core.next.call(null, more);
            x = G__8335;
            y = G__8336;
            more = G__8337;
            continue
          }else {
            return y <= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__8334 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8334__delegate.call(this, x, y, more)
    };
    G__8334.cljs$lang$maxFixedArity = 2;
    G__8334.cljs$lang$applyTo = function(arglist__8343) {
      var x = cljs.core.first(arglist__8343);
      var y = cljs.core.first(cljs.core.next(arglist__8343));
      var more = cljs.core.rest(cljs.core.next(arglist__8343));
      return G__8334__delegate.call(this, x, y, more)
    };
    return G__8334
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___8326.call(this, x);
      case 2:
        return _LT__EQ___8327.call(this, x, y);
      default:
        return _LT__EQ___8328.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___8328.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___8355 = function(x) {
    return true
  };
  var _GT___8475 = function(x, y) {
    return x > y
  };
  var _GT___8476 = function() {
    var G__8478__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x > y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__8479 = y;
            var G__8480 = cljs.core.first.call(null, more);
            var G__8481 = cljs.core.next.call(null, more);
            x = G__8479;
            y = G__8480;
            more = G__8481;
            continue
          }else {
            return y > cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__8478 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8478__delegate.call(this, x, y, more)
    };
    G__8478.cljs$lang$maxFixedArity = 2;
    G__8478.cljs$lang$applyTo = function(arglist__8482) {
      var x = cljs.core.first(arglist__8482);
      var y = cljs.core.first(cljs.core.next(arglist__8482));
      var more = cljs.core.rest(cljs.core.next(arglist__8482));
      return G__8478__delegate.call(this, x, y, more)
    };
    return G__8478
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___8355.call(this, x);
      case 2:
        return _GT___8475.call(this, x, y);
      default:
        return _GT___8476.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___8476.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___8491 = function(x) {
    return true
  };
  var _GT__EQ___8492 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___8493 = function() {
    var G__8496__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x >= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__8497 = y;
            var G__8498 = cljs.core.first.call(null, more);
            var G__8499 = cljs.core.next.call(null, more);
            x = G__8497;
            y = G__8498;
            more = G__8499;
            continue
          }else {
            return y >= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__8496 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8496__delegate.call(this, x, y, more)
    };
    G__8496.cljs$lang$maxFixedArity = 2;
    G__8496.cljs$lang$applyTo = function(arglist__8500) {
      var x = cljs.core.first(arglist__8500);
      var y = cljs.core.first(cljs.core.next(arglist__8500));
      var more = cljs.core.rest(cljs.core.next(arglist__8500));
      return G__8496__delegate.call(this, x, y, more)
    };
    return G__8496
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___8491.call(this, x);
      case 2:
        return _GT__EQ___8492.call(this, x, y);
      default:
        return _GT__EQ___8493.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___8493.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__8501 = function(x) {
    return x
  };
  var max__8502 = function(x, y) {
    return x > y ? x : y
  };
  var max__8503 = function() {
    var G__8508__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, x > y ? x : y, more)
    };
    var G__8508 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8508__delegate.call(this, x, y, more)
    };
    G__8508.cljs$lang$maxFixedArity = 2;
    G__8508.cljs$lang$applyTo = function(arglist__8509) {
      var x = cljs.core.first(arglist__8509);
      var y = cljs.core.first(cljs.core.next(arglist__8509));
      var more = cljs.core.rest(cljs.core.next(arglist__8509));
      return G__8508__delegate.call(this, x, y, more)
    };
    return G__8508
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__8501.call(this, x);
      case 2:
        return max__8502.call(this, x, y);
      default:
        return max__8503.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__8503.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__8525 = function(x) {
    return x
  };
  var min__8526 = function(x, y) {
    return x < y ? x : y
  };
  var min__8527 = function() {
    var G__8534__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, x < y ? x : y, more)
    };
    var G__8534 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8534__delegate.call(this, x, y, more)
    };
    G__8534.cljs$lang$maxFixedArity = 2;
    G__8534.cljs$lang$applyTo = function(arglist__8539) {
      var x = cljs.core.first(arglist__8539);
      var y = cljs.core.first(cljs.core.next(arglist__8539));
      var more = cljs.core.rest(cljs.core.next(arglist__8539));
      return G__8534__delegate.call(this, x, y, more)
    };
    return G__8534
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__8525.call(this, x);
      case 2:
        return min__8526.call(this, x, y);
      default:
        return min__8527.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__8527.cljs$lang$applyTo;
  return min
}();
cljs.core.fix = function fix(q) {
  if(cljs.core.truth_(q >= 0)) {
    return Math.floor.call(null, q)
  }else {
    return Math.ceil.call(null, q)
  }
};
cljs.core.mod = function mod(n, d) {
  return n % d
};
cljs.core.quot = function quot(n, d) {
  var rem__8580 = n % d;
  return cljs.core.fix.call(null, (n - rem__8580) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__8631 = cljs.core.quot.call(null, n, d);
  return n - d * q__8631
};
cljs.core.rand = function() {
  var rand = null;
  var rand__8634 = function() {
    return Math.random.call(null)
  };
  var rand__8635 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__8634.call(this);
      case 1:
        return rand__8635.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, n))
};
cljs.core.bit_xor = function bit_xor(x, y) {
  return x ^ y
};
cljs.core.bit_and = function bit_and(x, y) {
  return x & y
};
cljs.core.bit_or = function bit_or(x, y) {
  return x | y
};
cljs.core.bit_and_not = function bit_and_not(x, y) {
  return x & ~y
};
cljs.core.bit_clear = function bit_clear(x, n) {
  return x & ~(1 << n)
};
cljs.core.bit_flip = function bit_flip(x, n) {
  return x ^ 1 << n
};
cljs.core.bit_not = function bit_not(x) {
  return~x
};
cljs.core.bit_set = function bit_set(x, n) {
  return x | 1 << n
};
cljs.core.bit_test = function bit_test(x, n) {
  return(x & 1 << n) != 0
};
cljs.core.bit_shift_left = function bit_shift_left(x, n) {
  return x << n
};
cljs.core.bit_shift_right = function bit_shift_right(x, n) {
  return x >> n
};
cljs.core._EQ__EQ_ = function() {
  var _EQ__EQ_ = null;
  var _EQ__EQ___8667 = function(x) {
    return true
  };
  var _EQ__EQ___8668 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___8669 = function() {
    var G__8671__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__8672 = y;
            var G__8673 = cljs.core.first.call(null, more);
            var G__8674 = cljs.core.next.call(null, more);
            x = G__8672;
            y = G__8673;
            more = G__8674;
            continue
          }else {
            return _EQ__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__8671 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8671__delegate.call(this, x, y, more)
    };
    G__8671.cljs$lang$maxFixedArity = 2;
    G__8671.cljs$lang$applyTo = function(arglist__8676) {
      var x = cljs.core.first(arglist__8676);
      var y = cljs.core.first(cljs.core.next(arglist__8676));
      var more = cljs.core.rest(cljs.core.next(arglist__8676));
      return G__8671__delegate.call(this, x, y, more)
    };
    return G__8671
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___8667.call(this, x);
      case 2:
        return _EQ__EQ___8668.call(this, x, y);
      default:
        return _EQ__EQ___8669.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8669.cljs$lang$applyTo;
  return _EQ__EQ_
}();
cljs.core.pos_QMARK_ = function pos_QMARK_(n) {
  return n > 0
};
cljs.core.zero_QMARK_ = function zero_QMARK_(n) {
  return n === 0
};
cljs.core.neg_QMARK_ = function neg_QMARK_(x) {
  return x < 0
};
cljs.core.nthnext = function nthnext(coll, n) {
  var n__8689 = n;
  var xs__8690 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____8691 = xs__8690;
      if(cljs.core.truth_(and__3546__auto____8691)) {
        return n__8689 > 0
      }else {
        return and__3546__auto____8691
      }
    }())) {
      var G__8692 = n__8689 - 1;
      var G__8693 = cljs.core.next.call(null, xs__8690);
      n__8689 = G__8692;
      xs__8690 = G__8693;
      continue
    }else {
      return xs__8690
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__8701 = null;
  var G__8701__8702 = function(coll, n) {
    var temp__3695__auto____8697 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____8697)) {
      var xs__8698 = temp__3695__auto____8697;
      return cljs.core.first.call(null, xs__8698)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__8701__8703 = function(coll, n, not_found) {
    var temp__3695__auto____8699 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____8699)) {
      var xs__8700 = temp__3695__auto____8699;
      return cljs.core.first.call(null, xs__8700)
    }else {
      return not_found
    }
  };
  G__8701 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8701__8702.call(this, coll, n);
      case 3:
        return G__8701__8703.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8701
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___8710 = function() {
    return""
  };
  var str_STAR___8711 = function(x) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
      return""
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return x.toString()
      }else {
        return null
      }
    }
  };
  var str_STAR___8712 = function() {
    var G__8714__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__8715 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__8716 = cljs.core.next.call(null, more);
            sb = G__8715;
            more = G__8716;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__8714 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__8714__delegate.call(this, x, ys)
    };
    G__8714.cljs$lang$maxFixedArity = 1;
    G__8714.cljs$lang$applyTo = function(arglist__8723) {
      var x = cljs.core.first(arglist__8723);
      var ys = cljs.core.rest(arglist__8723);
      return G__8714__delegate.call(this, x, ys)
    };
    return G__8714
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___8710.call(this);
      case 1:
        return str_STAR___8711.call(this, x);
      default:
        return str_STAR___8712.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___8712.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__8828 = function() {
    return""
  };
  var str__8829 = function(x) {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, x))) {
      return x.substring(2, x.length)
    }else {
      if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, x))) {
        return cljs.core.str_STAR_.call(null, ":", x.substring(2, x.length))
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
          return""
        }else {
          if(cljs.core.truth_("\ufdd0'else")) {
            return x.toString()
          }else {
            return null
          }
        }
      }
    }
  };
  var str__8830 = function() {
    var G__8840__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__8840 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__8840__delegate.call(this, x, ys)
    };
    G__8840.cljs$lang$maxFixedArity = 1;
    G__8840.cljs$lang$applyTo = function(arglist__8841) {
      var x = cljs.core.first(arglist__8841);
      var ys = cljs.core.rest(arglist__8841);
      return G__8840__delegate.call(this, x, ys)
    };
    return G__8840
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__8828.call(this);
      case 1:
        return str__8829.call(this, x);
      default:
        return str__8830.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__8830.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__8846 = function(s, start) {
    return s.substring(start)
  };
  var subs__8847 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__8846.call(this, s, start);
      case 3:
        return subs__8847.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__8852 = function(name) {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, name))) {
      name
    }else {
      if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, name))) {
        cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, name, 2))
      }else {
      }
    }
    return cljs.core.str_STAR_.call(null, "\ufdd1", "'", name)
  };
  var symbol__8853 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__8852.call(this, ns);
      case 2:
        return symbol__8853.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__8863 = function(name) {
    if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, name))) {
      return name
    }else {
      if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, name))) {
        return cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, name, 2))
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          return cljs.core.str_STAR_.call(null, "\ufdd0", "'", name)
        }else {
          return null
        }
      }
    }
  };
  var keyword__8864 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__8863.call(this, ns);
      case 2:
        return keyword__8864.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__8875 = cljs.core.seq.call(null, x);
    var ys__8877 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__8875))) {
        return cljs.core.nil_QMARK_.call(null, ys__8877)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__8877))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__8875), cljs.core.first.call(null, ys__8877)))) {
            var G__8878 = cljs.core.next.call(null, xs__8875);
            var G__8879 = cljs.core.next.call(null, ys__8877);
            xs__8875 = G__8878;
            ys__8877 = G__8879;
            continue
          }else {
            if(cljs.core.truth_("\ufdd0'else")) {
              return false
            }else {
              return null
            }
          }
        }
      }
      break
    }
  }() : null)
};
cljs.core.hash_combine = function hash_combine(seed, hash) {
  return seed ^ hash + 2654435769 + (seed << 6) + (seed >> 2)
};
cljs.core.hash_coll = function hash_coll(coll) {
  return cljs.core.reduce.call(null, function(p1__8882_SHARP_, p2__8884_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__8882_SHARP_, cljs.core.hash.call(null, p2__8884_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__8895__8896 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__8895__8896)) {
    var G__8900__8934 = cljs.core.first.call(null, G__8895__8896);
    var vec__8902__8935 = G__8900__8934;
    var key_name__8936 = cljs.core.nth.call(null, vec__8902__8935, 0, null);
    var f__8938 = cljs.core.nth.call(null, vec__8902__8935, 1, null);
    var G__8895__8939 = G__8895__8896;
    var G__8900__8941 = G__8900__8934;
    var G__8895__8942 = G__8895__8939;
    while(true) {
      var vec__8943__8945 = G__8900__8941;
      var key_name__8947 = cljs.core.nth.call(null, vec__8943__8945, 0, null);
      var f__8950 = cljs.core.nth.call(null, vec__8943__8945, 1, null);
      var G__8895__8951 = G__8895__8942;
      var str_name__8953 = cljs.core.name.call(null, key_name__8947);
      obj[str_name__8953] = f__8950;
      var temp__3698__auto____8955 = cljs.core.next.call(null, G__8895__8951);
      if(cljs.core.truth_(temp__3698__auto____8955)) {
        var G__8895__8957 = temp__3698__auto____8955;
        var G__8986 = cljs.core.first.call(null, G__8895__8957);
        var G__8988 = G__8895__8957;
        G__8900__8941 = G__8986;
        G__8895__8942 = G__8988;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return obj
};
cljs.core.List = function(meta, first, rest, count) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.count = count
};
cljs.core.List.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__8994 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__8995 = this;
  return new cljs.core.List(this__8995.meta, o, coll, this__8995.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__8998 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__9000 = this;
  return this__9000.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__9005 = this;
  return this__9005.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__9008 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9014 = this;
  return this__9014.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9019 = this;
  return this__9019.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9026 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9031 = this;
  return new cljs.core.List(meta, this__9031.first, this__9031.rest, this__9031.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9037 = this;
  return this__9037.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9040 = this;
  return cljs.core.List.EMPTY
};
cljs.core.List;
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__9064 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__9065 = this;
  return new cljs.core.List(this__9065.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__9066 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__9067 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__9068 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__9071 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9072 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9073 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9074 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9075 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9076 = this;
  return this__9076.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9088 = this;
  return coll
};
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reverse = function reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
cljs.core.list = function() {
  var list__delegate = function(items) {
    return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, items))
  };
  var list = function(var_args) {
    var items = null;
    if(goog.isDef(var_args)) {
      items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return list__delegate.call(this, items)
  };
  list.cljs$lang$maxFixedArity = 0;
  list.cljs$lang$applyTo = function(arglist__9106) {
    var items = cljs.core.seq(arglist__9106);
    return list__delegate.call(this, items)
  };
  return list
}();
cljs.core.Cons = function(meta, first, rest) {
  this.meta = meta;
  this.first = first;
  this.rest = rest
};
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__9124 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__9126 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9128 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9129 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__9129.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__9131 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9133 = this;
  return this__9133.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9135 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__9135.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__9135.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9136 = this;
  return this__9136.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9138 = this;
  return new cljs.core.Cons(meta, this__9138.first, this__9138.rest)
};
cljs.core.Cons;
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__9164 = null;
  var G__9164__9165 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__9164__9166 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__9164 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__9164__9165.call(this, string, f);
      case 3:
        return G__9164__9166.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9164
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__9170 = null;
  var G__9170__9171 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__9170__9172 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__9170 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9170__9171.call(this, string, k);
      case 3:
        return G__9170__9172.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9170
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__9174 = null;
  var G__9174__9175 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__9174__9176 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__9174 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9174__9175.call(this, string, n);
      case 3:
        return G__9174__9176.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9174
}();
cljs.core.ICounted["string"] = true;
cljs.core._count["string"] = function(s) {
  return s.length
};
cljs.core.ISeqable["string"] = true;
cljs.core._seq["string"] = function(string) {
  return cljs.core.prim_seq.call(null, string, 0)
};
cljs.core.IHash["string"] = true;
cljs.core._hash["string"] = function(o) {
  return goog.string.hashCode.call(null, o)
};
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = function() {
  var G__9183 = null;
  var G__9183__9187 = function(this$, coll) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString())
  };
  var G__9183__9188 = function(this$, coll, not_found) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString(), not_found)
  };
  G__9183 = function(this$, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9183__9187.call(this, this$, coll);
      case 3:
        return G__9183__9188.call(this, this$, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9183
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__9208 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__9208
  }else {
    lazy_seq.x = x__9208.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x) {
  this.meta = meta;
  this.realized = realized;
  this.x = x
};
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__9216 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__9217 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9218 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9219 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__9219.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__9220 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9221 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9222 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9224 = this;
  return this__9224.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9226 = this;
  return new cljs.core.LazySeq(meta, this__9226.realized, this__9226.x)
};
cljs.core.LazySeq;
cljs.core.to_array = function to_array(s) {
  var ary__9269 = cljs.core.array.call(null);
  var s__9270 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__9270))) {
      ary__9269.push(cljs.core.first.call(null, s__9270));
      var G__9279 = cljs.core.next.call(null, s__9270);
      s__9270 = G__9279;
      continue
    }else {
      return ary__9269
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__9285 = s;
  var i__9286 = n;
  var sum__9287 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9288 = i__9286 > 0;
      if(cljs.core.truth_(and__3546__auto____9288)) {
        return cljs.core.seq.call(null, s__9285)
      }else {
        return and__3546__auto____9288
      }
    }())) {
      var G__9291 = cljs.core.next.call(null, s__9285);
      var G__9292 = i__9286 - 1;
      var G__9293 = sum__9287 + 1;
      s__9285 = G__9291;
      i__9286 = G__9292;
      sum__9287 = G__9293;
      continue
    }else {
      return sum__9287
    }
    break
  }
};
cljs.core.spread = function spread(arglist) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, arglist))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.next.call(null, arglist)))) {
      return cljs.core.seq.call(null, cljs.core.first.call(null, arglist))
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, arglist), spread.call(null, cljs.core.next.call(null, arglist)))
      }else {
        return null
      }
    }
  }
};
cljs.core.concat = function() {
  var concat = null;
  var concat__9336 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__9337 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__9338 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__9319 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__9319)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__9319), concat.call(null, cljs.core.rest.call(null, s__9319), y))
      }else {
        return y
      }
    })
  };
  var concat__9339 = function() {
    var G__9342__delegate = function(x, y, zs) {
      var cat__9335 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__9329 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__9329)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__9329), cat.call(null, cljs.core.rest.call(null, xys__9329), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__9335.call(null, concat.call(null, x, y), zs)
    };
    var G__9342 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9342__delegate.call(this, x, y, zs)
    };
    G__9342.cljs$lang$maxFixedArity = 2;
    G__9342.cljs$lang$applyTo = function(arglist__9343) {
      var x = cljs.core.first(arglist__9343);
      var y = cljs.core.first(cljs.core.next(arglist__9343));
      var zs = cljs.core.rest(cljs.core.next(arglist__9343));
      return G__9342__delegate.call(this, x, y, zs)
    };
    return G__9342
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__9336.call(this);
      case 1:
        return concat__9337.call(this, x);
      case 2:
        return concat__9338.call(this, x, y);
      default:
        return concat__9339.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__9339.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___9352 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___9353 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___9354 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___9355 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___9356 = function() {
    var G__9358__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__9358 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__9358__delegate.call(this, a, b, c, d, more)
    };
    G__9358.cljs$lang$maxFixedArity = 4;
    G__9358.cljs$lang$applyTo = function(arglist__9360) {
      var a = cljs.core.first(arglist__9360);
      var b = cljs.core.first(cljs.core.next(arglist__9360));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9360)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9360))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9360))));
      return G__9358__delegate.call(this, a, b, c, d, more)
    };
    return G__9358
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___9352.call(this, a);
      case 2:
        return list_STAR___9353.call(this, a, b);
      case 3:
        return list_STAR___9354.call(this, a, b, c);
      case 4:
        return list_STAR___9355.call(this, a, b, c, d);
      default:
        return list_STAR___9356.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___9356.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__9394 = function(f, args) {
    var fixed_arity__9365 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__9365 + 1) <= fixed_arity__9365)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__9395 = function(f, x, args) {
    var arglist__9371 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__9372 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__9371, fixed_arity__9372) <= fixed_arity__9372)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__9371))
      }else {
        return f.cljs$lang$applyTo(arglist__9371)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__9371))
    }
  };
  var apply__9396 = function(f, x, y, args) {
    var arglist__9376 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__9377 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__9376, fixed_arity__9377) <= fixed_arity__9377)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__9376))
      }else {
        return f.cljs$lang$applyTo(arglist__9376)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__9376))
    }
  };
  var apply__9397 = function(f, x, y, z, args) {
    var arglist__9381 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__9382 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__9381, fixed_arity__9382) <= fixed_arity__9382)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__9381))
      }else {
        return f.cljs$lang$applyTo(arglist__9381)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__9381))
    }
  };
  var apply__9398 = function() {
    var G__9405__delegate = function(f, a, b, c, d, args) {
      var arglist__9389 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__9390 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__9389, fixed_arity__9390) <= fixed_arity__9390)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__9389))
        }else {
          return f.cljs$lang$applyTo(arglist__9389)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__9389))
      }
    };
    var G__9405 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__9405__delegate.call(this, f, a, b, c, d, args)
    };
    G__9405.cljs$lang$maxFixedArity = 5;
    G__9405.cljs$lang$applyTo = function(arglist__9406) {
      var f = cljs.core.first(arglist__9406);
      var a = cljs.core.first(cljs.core.next(arglist__9406));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9406)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9406))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9406)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9406)))));
      return G__9405__delegate.call(this, f, a, b, c, d, args)
    };
    return G__9405
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__9394.call(this, f, a);
      case 3:
        return apply__9395.call(this, f, a, b);
      case 4:
        return apply__9396.call(this, f, a, b, c);
      case 5:
        return apply__9397.call(this, f, a, b, c, d);
      default:
        return apply__9398.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__9398.cljs$lang$applyTo;
  return apply
}();
cljs.core.vary_meta = function() {
  var vary_meta__delegate = function(obj, f, args) {
    return cljs.core.with_meta.call(null, obj, cljs.core.apply.call(null, f, cljs.core.meta.call(null, obj), args))
  };
  var vary_meta = function(obj, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return vary_meta__delegate.call(this, obj, f, args)
  };
  vary_meta.cljs$lang$maxFixedArity = 2;
  vary_meta.cljs$lang$applyTo = function(arglist__9412) {
    var obj = cljs.core.first(arglist__9412);
    var f = cljs.core.first(cljs.core.next(arglist__9412));
    var args = cljs.core.rest(cljs.core.next(arglist__9412));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___9422 = function(x) {
    return false
  };
  var not_EQ___9423 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___9424 = function() {
    var G__9426__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__9426 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9426__delegate.call(this, x, y, more)
    };
    G__9426.cljs$lang$maxFixedArity = 2;
    G__9426.cljs$lang$applyTo = function(arglist__9429) {
      var x = cljs.core.first(arglist__9429);
      var y = cljs.core.first(cljs.core.next(arglist__9429));
      var more = cljs.core.rest(cljs.core.next(arglist__9429));
      return G__9426__delegate.call(this, x, y, more)
    };
    return G__9426
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___9422.call(this, x);
      case 2:
        return not_EQ___9423.call(this, x, y);
      default:
        return not_EQ___9424.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___9424.cljs$lang$applyTo;
  return not_EQ_
}();
cljs.core.not_empty = function not_empty(coll) {
  if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
    return coll
  }else {
    return null
  }
};
cljs.core.every_QMARK_ = function every_QMARK_(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.seq.call(null, coll)))) {
      return true
    }else {
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, coll)))) {
        var G__9432 = pred;
        var G__9433 = cljs.core.next.call(null, coll);
        pred = G__9432;
        coll = G__9433;
        continue
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          return false
        }else {
          return null
        }
      }
    }
    break
  }
};
cljs.core.not_every_QMARK_ = function not_every_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.every_QMARK_.call(null, pred, coll))
};
cljs.core.some = function some(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var or__3548__auto____9441 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____9441)) {
        return or__3548__auto____9441
      }else {
        var G__9455 = pred;
        var G__9457 = cljs.core.next.call(null, coll);
        pred = G__9455;
        coll = G__9457;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.not_any_QMARK_ = function not_any_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.some.call(null, pred, coll))
};
cljs.core.even_QMARK_ = function even_QMARK_(n) {
  if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null, n))) {
    return(n & 1) === 0
  }else {
    throw new Error(cljs.core.str.call(null, "Argument must be an integer: ", n));
  }
};
cljs.core.odd_QMARK_ = function odd_QMARK_(n) {
  return cljs.core.not.call(null, cljs.core.even_QMARK_.call(null, n))
};
cljs.core.identity = function identity(x) {
  return x
};
cljs.core.complement = function complement(f) {
  return function() {
    var G__9482 = null;
    var G__9482__9485 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__9482__9486 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__9482__9487 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__9482__9488 = function() {
      var G__9491__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__9491 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__9491__delegate.call(this, x, y, zs)
      };
      G__9491.cljs$lang$maxFixedArity = 2;
      G__9491.cljs$lang$applyTo = function(arglist__9492) {
        var x = cljs.core.first(arglist__9492);
        var y = cljs.core.first(cljs.core.next(arglist__9492));
        var zs = cljs.core.rest(cljs.core.next(arglist__9492));
        return G__9491__delegate.call(this, x, y, zs)
      };
      return G__9491
    }();
    G__9482 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__9482__9485.call(this);
        case 1:
          return G__9482__9486.call(this, x);
        case 2:
          return G__9482__9487.call(this, x, y);
        default:
          return G__9482__9488.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__9482.cljs$lang$maxFixedArity = 2;
    G__9482.cljs$lang$applyTo = G__9482__9488.cljs$lang$applyTo;
    return G__9482
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__9501__delegate = function(args) {
      return x
    };
    var G__9501 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__9501__delegate.call(this, args)
    };
    G__9501.cljs$lang$maxFixedArity = 0;
    G__9501.cljs$lang$applyTo = function(arglist__9502) {
      var args = cljs.core.seq(arglist__9502);
      return G__9501__delegate.call(this, args)
    };
    return G__9501
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__9577 = function() {
    return cljs.core.identity
  };
  var comp__9578 = function(f) {
    return f
  };
  var comp__9579 = function(f, g) {
    return function() {
      var G__9584 = null;
      var G__9584__9585 = function() {
        return f.call(null, g.call(null))
      };
      var G__9584__9586 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__9584__9587 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__9584__9588 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__9584__9589 = function() {
        var G__9593__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__9593 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9593__delegate.call(this, x, y, z, args)
        };
        G__9593.cljs$lang$maxFixedArity = 3;
        G__9593.cljs$lang$applyTo = function(arglist__9594) {
          var x = cljs.core.first(arglist__9594);
          var y = cljs.core.first(cljs.core.next(arglist__9594));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9594)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9594)));
          return G__9593__delegate.call(this, x, y, z, args)
        };
        return G__9593
      }();
      G__9584 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__9584__9585.call(this);
          case 1:
            return G__9584__9586.call(this, x);
          case 2:
            return G__9584__9587.call(this, x, y);
          case 3:
            return G__9584__9588.call(this, x, y, z);
          default:
            return G__9584__9589.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9584.cljs$lang$maxFixedArity = 3;
      G__9584.cljs$lang$applyTo = G__9584__9589.cljs$lang$applyTo;
      return G__9584
    }()
  };
  var comp__9580 = function(f, g, h) {
    return function() {
      var G__9598 = null;
      var G__9598__9599 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__9598__9600 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__9598__9601 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__9598__9602 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__9598__9603 = function() {
        var G__9622__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__9622 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9622__delegate.call(this, x, y, z, args)
        };
        G__9622.cljs$lang$maxFixedArity = 3;
        G__9622.cljs$lang$applyTo = function(arglist__9623) {
          var x = cljs.core.first(arglist__9623);
          var y = cljs.core.first(cljs.core.next(arglist__9623));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9623)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9623)));
          return G__9622__delegate.call(this, x, y, z, args)
        };
        return G__9622
      }();
      G__9598 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__9598__9599.call(this);
          case 1:
            return G__9598__9600.call(this, x);
          case 2:
            return G__9598__9601.call(this, x, y);
          case 3:
            return G__9598__9602.call(this, x, y, z);
          default:
            return G__9598__9603.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9598.cljs$lang$maxFixedArity = 3;
      G__9598.cljs$lang$applyTo = G__9598__9603.cljs$lang$applyTo;
      return G__9598
    }()
  };
  var comp__9582 = function() {
    var G__9625__delegate = function(f1, f2, f3, fs) {
      var fs__9565 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__9626__delegate = function(args) {
          var ret__9572 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__9565), args);
          var fs__9574 = cljs.core.next.call(null, fs__9565);
          while(true) {
            if(cljs.core.truth_(fs__9574)) {
              var G__9627 = cljs.core.first.call(null, fs__9574).call(null, ret__9572);
              var G__9628 = cljs.core.next.call(null, fs__9574);
              ret__9572 = G__9627;
              fs__9574 = G__9628;
              continue
            }else {
              return ret__9572
            }
            break
          }
        };
        var G__9626 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__9626__delegate.call(this, args)
        };
        G__9626.cljs$lang$maxFixedArity = 0;
        G__9626.cljs$lang$applyTo = function(arglist__9630) {
          var args = cljs.core.seq(arglist__9630);
          return G__9626__delegate.call(this, args)
        };
        return G__9626
      }()
    };
    var G__9625 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__9625__delegate.call(this, f1, f2, f3, fs)
    };
    G__9625.cljs$lang$maxFixedArity = 3;
    G__9625.cljs$lang$applyTo = function(arglist__9631) {
      var f1 = cljs.core.first(arglist__9631);
      var f2 = cljs.core.first(cljs.core.next(arglist__9631));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9631)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9631)));
      return G__9625__delegate.call(this, f1, f2, f3, fs)
    };
    return G__9625
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__9577.call(this);
      case 1:
        return comp__9578.call(this, f1);
      case 2:
        return comp__9579.call(this, f1, f2);
      case 3:
        return comp__9580.call(this, f1, f2, f3);
      default:
        return comp__9582.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__9582.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__9638 = function(f, arg1) {
    return function() {
      var G__9647__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__9647 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__9647__delegate.call(this, args)
      };
      G__9647.cljs$lang$maxFixedArity = 0;
      G__9647.cljs$lang$applyTo = function(arglist__9649) {
        var args = cljs.core.seq(arglist__9649);
        return G__9647__delegate.call(this, args)
      };
      return G__9647
    }()
  };
  var partial__9640 = function(f, arg1, arg2) {
    return function() {
      var G__9650__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__9650 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__9650__delegate.call(this, args)
      };
      G__9650.cljs$lang$maxFixedArity = 0;
      G__9650.cljs$lang$applyTo = function(arglist__9652) {
        var args = cljs.core.seq(arglist__9652);
        return G__9650__delegate.call(this, args)
      };
      return G__9650
    }()
  };
  var partial__9642 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__9653__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__9653 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__9653__delegate.call(this, args)
      };
      G__9653.cljs$lang$maxFixedArity = 0;
      G__9653.cljs$lang$applyTo = function(arglist__9654) {
        var args = cljs.core.seq(arglist__9654);
        return G__9653__delegate.call(this, args)
      };
      return G__9653
    }()
  };
  var partial__9644 = function() {
    var G__9655__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__9656__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__9656 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__9656__delegate.call(this, args)
        };
        G__9656.cljs$lang$maxFixedArity = 0;
        G__9656.cljs$lang$applyTo = function(arglist__9657) {
          var args = cljs.core.seq(arglist__9657);
          return G__9656__delegate.call(this, args)
        };
        return G__9656
      }()
    };
    var G__9655 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__9655__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__9655.cljs$lang$maxFixedArity = 4;
    G__9655.cljs$lang$applyTo = function(arglist__9658) {
      var f = cljs.core.first(arglist__9658);
      var arg1 = cljs.core.first(cljs.core.next(arglist__9658));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9658)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9658))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9658))));
      return G__9655__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__9655
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__9638.call(this, f, arg1);
      case 3:
        return partial__9640.call(this, f, arg1, arg2);
      case 4:
        return partial__9642.call(this, f, arg1, arg2, arg3);
      default:
        return partial__9644.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__9644.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__9668 = function(f, x) {
    return function() {
      var G__9674 = null;
      var G__9674__9678 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__9674__9679 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__9674__9680 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__9674__9681 = function() {
        var G__9688__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__9688 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9688__delegate.call(this, a, b, c, ds)
        };
        G__9688.cljs$lang$maxFixedArity = 3;
        G__9688.cljs$lang$applyTo = function(arglist__9691) {
          var a = cljs.core.first(arglist__9691);
          var b = cljs.core.first(cljs.core.next(arglist__9691));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9691)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9691)));
          return G__9688__delegate.call(this, a, b, c, ds)
        };
        return G__9688
      }();
      G__9674 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__9674__9678.call(this, a);
          case 2:
            return G__9674__9679.call(this, a, b);
          case 3:
            return G__9674__9680.call(this, a, b, c);
          default:
            return G__9674__9681.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9674.cljs$lang$maxFixedArity = 3;
      G__9674.cljs$lang$applyTo = G__9674__9681.cljs$lang$applyTo;
      return G__9674
    }()
  };
  var fnil__9669 = function(f, x, y) {
    return function() {
      var G__9695 = null;
      var G__9695__9697 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__9695__9698 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__9695__9699 = function() {
        var G__9719__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__9719 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9719__delegate.call(this, a, b, c, ds)
        };
        G__9719.cljs$lang$maxFixedArity = 3;
        G__9719.cljs$lang$applyTo = function(arglist__9721) {
          var a = cljs.core.first(arglist__9721);
          var b = cljs.core.first(cljs.core.next(arglist__9721));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9721)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9721)));
          return G__9719__delegate.call(this, a, b, c, ds)
        };
        return G__9719
      }();
      G__9695 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__9695__9697.call(this, a, b);
          case 3:
            return G__9695__9698.call(this, a, b, c);
          default:
            return G__9695__9699.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9695.cljs$lang$maxFixedArity = 3;
      G__9695.cljs$lang$applyTo = G__9695__9699.cljs$lang$applyTo;
      return G__9695
    }()
  };
  var fnil__9670 = function(f, x, y, z) {
    return function() {
      var G__9723 = null;
      var G__9723__9724 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__9723__9725 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__9723__9726 = function() {
        var G__9728__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__9728 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9728__delegate.call(this, a, b, c, ds)
        };
        G__9728.cljs$lang$maxFixedArity = 3;
        G__9728.cljs$lang$applyTo = function(arglist__9729) {
          var a = cljs.core.first(arglist__9729);
          var b = cljs.core.first(cljs.core.next(arglist__9729));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9729)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9729)));
          return G__9728__delegate.call(this, a, b, c, ds)
        };
        return G__9728
      }();
      G__9723 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__9723__9724.call(this, a, b);
          case 3:
            return G__9723__9725.call(this, a, b, c);
          default:
            return G__9723__9726.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9723.cljs$lang$maxFixedArity = 3;
      G__9723.cljs$lang$applyTo = G__9723__9726.cljs$lang$applyTo;
      return G__9723
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__9668.call(this, f, x);
      case 3:
        return fnil__9669.call(this, f, x, y);
      case 4:
        return fnil__9670.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__9744 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____9737 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____9737)) {
        var s__9743 = temp__3698__auto____9737;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__9743)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__9743)))
      }else {
        return null
      }
    })
  };
  return mapi__9744.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____9745 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____9745)) {
      var s__9746 = temp__3698__auto____9745;
      var x__9747 = f.call(null, cljs.core.first.call(null, s__9746));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__9747))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__9746))
      }else {
        return cljs.core.cons.call(null, x__9747, keep.call(null, f, cljs.core.rest.call(null, s__9746)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__9757 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____9754 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____9754)) {
        var s__9755 = temp__3698__auto____9754;
        var x__9756 = f.call(null, idx, cljs.core.first.call(null, s__9755));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__9756))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__9755))
        }else {
          return cljs.core.cons.call(null, x__9756, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__9755)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__9757.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__9901 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__9907 = function() {
        return true
      };
      var ep1__9908 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__9909 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9777 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9777)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____9777
          }
        }())
      };
      var ep1__9910 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9778 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9778)) {
            var and__3546__auto____9779 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____9779)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____9779
            }
          }else {
            return and__3546__auto____9778
          }
        }())
      };
      var ep1__9911 = function() {
        var G__9922__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____9780 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____9780)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____9780
            }
          }())
        };
        var G__9922 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9922__delegate.call(this, x, y, z, args)
        };
        G__9922.cljs$lang$maxFixedArity = 3;
        G__9922.cljs$lang$applyTo = function(arglist__9924) {
          var x = cljs.core.first(arglist__9924);
          var y = cljs.core.first(cljs.core.next(arglist__9924));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9924)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9924)));
          return G__9922__delegate.call(this, x, y, z, args)
        };
        return G__9922
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__9907.call(this);
          case 1:
            return ep1__9908.call(this, x);
          case 2:
            return ep1__9909.call(this, x, y);
          case 3:
            return ep1__9910.call(this, x, y, z);
          default:
            return ep1__9911.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__9911.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__9902 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__9926 = function() {
        return true
      };
      var ep2__9927 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9781 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9781)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____9781
          }
        }())
      };
      var ep2__9928 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9782 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9782)) {
            var and__3546__auto____9783 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____9783)) {
              var and__3546__auto____9784 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____9784)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____9784
              }
            }else {
              return and__3546__auto____9783
            }
          }else {
            return and__3546__auto____9782
          }
        }())
      };
      var ep2__9929 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9785 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9785)) {
            var and__3546__auto____9786 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____9786)) {
              var and__3546__auto____9787 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____9787)) {
                var and__3546__auto____9788 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____9788)) {
                  var and__3546__auto____9789 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____9789)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____9789
                  }
                }else {
                  return and__3546__auto____9788
                }
              }else {
                return and__3546__auto____9787
              }
            }else {
              return and__3546__auto____9786
            }
          }else {
            return and__3546__auto____9785
          }
        }())
      };
      var ep2__9930 = function() {
        var G__9944__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____9790 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____9790)) {
              return cljs.core.every_QMARK_.call(null, function(p1__9748_SHARP_) {
                var and__3546__auto____9791 = p1.call(null, p1__9748_SHARP_);
                if(cljs.core.truth_(and__3546__auto____9791)) {
                  return p2.call(null, p1__9748_SHARP_)
                }else {
                  return and__3546__auto____9791
                }
              }, args)
            }else {
              return and__3546__auto____9790
            }
          }())
        };
        var G__9944 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9944__delegate.call(this, x, y, z, args)
        };
        G__9944.cljs$lang$maxFixedArity = 3;
        G__9944.cljs$lang$applyTo = function(arglist__9945) {
          var x = cljs.core.first(arglist__9945);
          var y = cljs.core.first(cljs.core.next(arglist__9945));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9945)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9945)));
          return G__9944__delegate.call(this, x, y, z, args)
        };
        return G__9944
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__9926.call(this);
          case 1:
            return ep2__9927.call(this, x);
          case 2:
            return ep2__9928.call(this, x, y);
          case 3:
            return ep2__9929.call(this, x, y, z);
          default:
            return ep2__9930.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__9930.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__9903 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__9949 = function() {
        return true
      };
      var ep3__9950 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9792 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9792)) {
            var and__3546__auto____9793 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____9793)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____9793
            }
          }else {
            return and__3546__auto____9792
          }
        }())
      };
      var ep3__9951 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9794 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9794)) {
            var and__3546__auto____9795 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____9795)) {
              var and__3546__auto____9796 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____9796)) {
                var and__3546__auto____9797 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____9797)) {
                  var and__3546__auto____9798 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____9798)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____9798
                  }
                }else {
                  return and__3546__auto____9797
                }
              }else {
                return and__3546__auto____9796
              }
            }else {
              return and__3546__auto____9795
            }
          }else {
            return and__3546__auto____9794
          }
        }())
      };
      var ep3__9952 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____9799 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____9799)) {
            var and__3546__auto____9800 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____9800)) {
              var and__3546__auto____9801 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____9801)) {
                var and__3546__auto____9802 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____9802)) {
                  var and__3546__auto____9803 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____9803)) {
                    var and__3546__auto____9804 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____9804)) {
                      var and__3546__auto____9805 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____9805)) {
                        var and__3546__auto____9806 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____9806)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____9806
                        }
                      }else {
                        return and__3546__auto____9805
                      }
                    }else {
                      return and__3546__auto____9804
                    }
                  }else {
                    return and__3546__auto____9803
                  }
                }else {
                  return and__3546__auto____9802
                }
              }else {
                return and__3546__auto____9801
              }
            }else {
              return and__3546__auto____9800
            }
          }else {
            return and__3546__auto____9799
          }
        }())
      };
      var ep3__9953 = function() {
        var G__9970__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____9807 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____9807)) {
              return cljs.core.every_QMARK_.call(null, function(p1__9749_SHARP_) {
                var and__3546__auto____9808 = p1.call(null, p1__9749_SHARP_);
                if(cljs.core.truth_(and__3546__auto____9808)) {
                  var and__3546__auto____9809 = p2.call(null, p1__9749_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____9809)) {
                    return p3.call(null, p1__9749_SHARP_)
                  }else {
                    return and__3546__auto____9809
                  }
                }else {
                  return and__3546__auto____9808
                }
              }, args)
            }else {
              return and__3546__auto____9807
            }
          }())
        };
        var G__9970 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9970__delegate.call(this, x, y, z, args)
        };
        G__9970.cljs$lang$maxFixedArity = 3;
        G__9970.cljs$lang$applyTo = function(arglist__9978) {
          var x = cljs.core.first(arglist__9978);
          var y = cljs.core.first(cljs.core.next(arglist__9978));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9978)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9978)));
          return G__9970__delegate.call(this, x, y, z, args)
        };
        return G__9970
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__9949.call(this);
          case 1:
            return ep3__9950.call(this, x);
          case 2:
            return ep3__9951.call(this, x, y);
          case 3:
            return ep3__9952.call(this, x, y, z);
          default:
            return ep3__9953.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__9953.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__9904 = function() {
    var G__9979__delegate = function(p1, p2, p3, ps) {
      var ps__9810 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__9980 = function() {
          return true
        };
        var epn__9981 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__9750_SHARP_) {
            return p1__9750_SHARP_.call(null, x)
          }, ps__9810)
        };
        var epn__9982 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__9751_SHARP_) {
            var and__3546__auto____9811 = p1__9751_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____9811)) {
              return p1__9751_SHARP_.call(null, y)
            }else {
              return and__3546__auto____9811
            }
          }, ps__9810)
        };
        var epn__9983 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__9752_SHARP_) {
            var and__3546__auto____9812 = p1__9752_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____9812)) {
              var and__3546__auto____9813 = p1__9752_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____9813)) {
                return p1__9752_SHARP_.call(null, z)
              }else {
                return and__3546__auto____9813
              }
            }else {
              return and__3546__auto____9812
            }
          }, ps__9810)
        };
        var epn__9984 = function() {
          var G__9988__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____9891 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____9891)) {
                return cljs.core.every_QMARK_.call(null, function(p1__9753_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__9753_SHARP_, args)
                }, ps__9810)
              }else {
                return and__3546__auto____9891
              }
            }())
          };
          var G__9988 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__9988__delegate.call(this, x, y, z, args)
          };
          G__9988.cljs$lang$maxFixedArity = 3;
          G__9988.cljs$lang$applyTo = function(arglist__10106) {
            var x = cljs.core.first(arglist__10106);
            var y = cljs.core.first(cljs.core.next(arglist__10106));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10106)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10106)));
            return G__9988__delegate.call(this, x, y, z, args)
          };
          return G__9988
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__9980.call(this);
            case 1:
              return epn__9981.call(this, x);
            case 2:
              return epn__9982.call(this, x, y);
            case 3:
              return epn__9983.call(this, x, y, z);
            default:
              return epn__9984.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__9984.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__9979 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__9979__delegate.call(this, p1, p2, p3, ps)
    };
    G__9979.cljs$lang$maxFixedArity = 3;
    G__9979.cljs$lang$applyTo = function(arglist__10111) {
      var p1 = cljs.core.first(arglist__10111);
      var p2 = cljs.core.first(cljs.core.next(arglist__10111));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10111)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10111)));
      return G__9979__delegate.call(this, p1, p2, p3, ps)
    };
    return G__9979
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__9901.call(this, p1);
      case 2:
        return every_pred__9902.call(this, p1, p2);
      case 3:
        return every_pred__9903.call(this, p1, p2, p3);
      default:
        return every_pred__9904.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__9904.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__10205 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__10210 = function() {
        return null
      };
      var sp1__10211 = function(x) {
        return p.call(null, x)
      };
      var sp1__10212 = function(x, y) {
        var or__3548__auto____10123 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10123)) {
          return or__3548__auto____10123
        }else {
          return p.call(null, y)
        }
      };
      var sp1__10213 = function(x, y, z) {
        var or__3548__auto____10124 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10124)) {
          return or__3548__auto____10124
        }else {
          var or__3548__auto____10125 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____10125)) {
            return or__3548__auto____10125
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__10214 = function() {
        var G__10343__delegate = function(x, y, z, args) {
          var or__3548__auto____10126 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____10126)) {
            return or__3548__auto____10126
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__10343 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10343__delegate.call(this, x, y, z, args)
        };
        G__10343.cljs$lang$maxFixedArity = 3;
        G__10343.cljs$lang$applyTo = function(arglist__10347) {
          var x = cljs.core.first(arglist__10347);
          var y = cljs.core.first(cljs.core.next(arglist__10347));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10347)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10347)));
          return G__10343__delegate.call(this, x, y, z, args)
        };
        return G__10343
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__10210.call(this);
          case 1:
            return sp1__10211.call(this, x);
          case 2:
            return sp1__10212.call(this, x, y);
          case 3:
            return sp1__10213.call(this, x, y, z);
          default:
            return sp1__10214.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__10214.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__10206 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__10351 = function() {
        return null
      };
      var sp2__10352 = function(x) {
        var or__3548__auto____10127 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10127)) {
          return or__3548__auto____10127
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__10353 = function(x, y) {
        var or__3548__auto____10128 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10128)) {
          return or__3548__auto____10128
        }else {
          var or__3548__auto____10129 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____10129)) {
            return or__3548__auto____10129
          }else {
            var or__3548__auto____10130 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____10130)) {
              return or__3548__auto____10130
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__10354 = function(x, y, z) {
        var or__3548__auto____10131 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10131)) {
          return or__3548__auto____10131
        }else {
          var or__3548__auto____10132 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____10132)) {
            return or__3548__auto____10132
          }else {
            var or__3548__auto____10133 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____10133)) {
              return or__3548__auto____10133
            }else {
              var or__3548__auto____10134 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____10134)) {
                return or__3548__auto____10134
              }else {
                var or__3548__auto____10136 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____10136)) {
                  return or__3548__auto____10136
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__10355 = function() {
        var G__10362__delegate = function(x, y, z, args) {
          var or__3548__auto____10139 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____10139)) {
            return or__3548__auto____10139
          }else {
            return cljs.core.some.call(null, function(p1__9771_SHARP_) {
              var or__3548__auto____10150 = p1.call(null, p1__9771_SHARP_);
              if(cljs.core.truth_(or__3548__auto____10150)) {
                return or__3548__auto____10150
              }else {
                return p2.call(null, p1__9771_SHARP_)
              }
            }, args)
          }
        };
        var G__10362 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10362__delegate.call(this, x, y, z, args)
        };
        G__10362.cljs$lang$maxFixedArity = 3;
        G__10362.cljs$lang$applyTo = function(arglist__10365) {
          var x = cljs.core.first(arglist__10365);
          var y = cljs.core.first(cljs.core.next(arglist__10365));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10365)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10365)));
          return G__10362__delegate.call(this, x, y, z, args)
        };
        return G__10362
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__10351.call(this);
          case 1:
            return sp2__10352.call(this, x);
          case 2:
            return sp2__10353.call(this, x, y);
          case 3:
            return sp2__10354.call(this, x, y, z);
          default:
            return sp2__10355.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__10355.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__10207 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__10395 = function() {
        return null
      };
      var sp3__10398 = function(x) {
        var or__3548__auto____10155 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10155)) {
          return or__3548__auto____10155
        }else {
          var or__3548__auto____10157 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____10157)) {
            return or__3548__auto____10157
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__10400 = function(x, y) {
        var or__3548__auto____10159 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10159)) {
          return or__3548__auto____10159
        }else {
          var or__3548__auto____10160 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____10160)) {
            return or__3548__auto____10160
          }else {
            var or__3548__auto____10162 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____10162)) {
              return or__3548__auto____10162
            }else {
              var or__3548__auto____10167 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____10167)) {
                return or__3548__auto____10167
              }else {
                var or__3548__auto____10168 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____10168)) {
                  return or__3548__auto____10168
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__10401 = function(x, y, z) {
        var or__3548__auto____10170 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____10170)) {
          return or__3548__auto____10170
        }else {
          var or__3548__auto____10172 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____10172)) {
            return or__3548__auto____10172
          }else {
            var or__3548__auto____10174 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____10174)) {
              return or__3548__auto____10174
            }else {
              var or__3548__auto____10176 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____10176)) {
                return or__3548__auto____10176
              }else {
                var or__3548__auto____10177 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____10177)) {
                  return or__3548__auto____10177
                }else {
                  var or__3548__auto____10178 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____10178)) {
                    return or__3548__auto____10178
                  }else {
                    var or__3548__auto____10184 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____10184)) {
                      return or__3548__auto____10184
                    }else {
                      var or__3548__auto____10185 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____10185)) {
                        return or__3548__auto____10185
                      }else {
                        return p3.call(null, z)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      var sp3__10403 = function() {
        var G__10485__delegate = function(x, y, z, args) {
          var or__3548__auto____10186 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____10186)) {
            return or__3548__auto____10186
          }else {
            return cljs.core.some.call(null, function(p1__9772_SHARP_) {
              var or__3548__auto____10190 = p1.call(null, p1__9772_SHARP_);
              if(cljs.core.truth_(or__3548__auto____10190)) {
                return or__3548__auto____10190
              }else {
                var or__3548__auto____10191 = p2.call(null, p1__9772_SHARP_);
                if(cljs.core.truth_(or__3548__auto____10191)) {
                  return or__3548__auto____10191
                }else {
                  return p3.call(null, p1__9772_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__10485 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10485__delegate.call(this, x, y, z, args)
        };
        G__10485.cljs$lang$maxFixedArity = 3;
        G__10485.cljs$lang$applyTo = function(arglist__10489) {
          var x = cljs.core.first(arglist__10489);
          var y = cljs.core.first(cljs.core.next(arglist__10489));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10489)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10489)));
          return G__10485__delegate.call(this, x, y, z, args)
        };
        return G__10485
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__10395.call(this);
          case 1:
            return sp3__10398.call(this, x);
          case 2:
            return sp3__10400.call(this, x, y);
          case 3:
            return sp3__10401.call(this, x, y, z);
          default:
            return sp3__10403.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__10403.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__10208 = function() {
    var G__10649__delegate = function(p1, p2, p3, ps) {
      var ps__10194 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__10650 = function() {
          return null
        };
        var spn__10651 = function(x) {
          return cljs.core.some.call(null, function(p1__9773_SHARP_) {
            return p1__9773_SHARP_.call(null, x)
          }, ps__10194)
        };
        var spn__10652 = function(x, y) {
          return cljs.core.some.call(null, function(p1__9774_SHARP_) {
            var or__3548__auto____10195 = p1__9774_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____10195)) {
              return or__3548__auto____10195
            }else {
              return p1__9774_SHARP_.call(null, y)
            }
          }, ps__10194)
        };
        var spn__10653 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__9775_SHARP_) {
            var or__3548__auto____10198 = p1__9775_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____10198)) {
              return or__3548__auto____10198
            }else {
              var or__3548__auto____10199 = p1__9775_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____10199)) {
                return or__3548__auto____10199
              }else {
                return p1__9775_SHARP_.call(null, z)
              }
            }
          }, ps__10194)
        };
        var spn__10654 = function() {
          var G__10657__delegate = function(x, y, z, args) {
            var or__3548__auto____10201 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____10201)) {
              return or__3548__auto____10201
            }else {
              return cljs.core.some.call(null, function(p1__9776_SHARP_) {
                return cljs.core.some.call(null, p1__9776_SHARP_, args)
              }, ps__10194)
            }
          };
          var G__10657 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__10657__delegate.call(this, x, y, z, args)
          };
          G__10657.cljs$lang$maxFixedArity = 3;
          G__10657.cljs$lang$applyTo = function(arglist__10658) {
            var x = cljs.core.first(arglist__10658);
            var y = cljs.core.first(cljs.core.next(arglist__10658));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10658)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10658)));
            return G__10657__delegate.call(this, x, y, z, args)
          };
          return G__10657
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__10650.call(this);
            case 1:
              return spn__10651.call(this, x);
            case 2:
              return spn__10652.call(this, x, y);
            case 3:
              return spn__10653.call(this, x, y, z);
            default:
              return spn__10654.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__10654.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__10649 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__10649__delegate.call(this, p1, p2, p3, ps)
    };
    G__10649.cljs$lang$maxFixedArity = 3;
    G__10649.cljs$lang$applyTo = function(arglist__10660) {
      var p1 = cljs.core.first(arglist__10660);
      var p2 = cljs.core.first(cljs.core.next(arglist__10660));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10660)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10660)));
      return G__10649__delegate.call(this, p1, p2, p3, ps)
    };
    return G__10649
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__10205.call(this, p1);
      case 2:
        return some_fn__10206.call(this, p1, p2);
      case 3:
        return some_fn__10207.call(this, p1, p2, p3);
      default:
        return some_fn__10208.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__10208.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__10699 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____10670 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____10670)) {
        var s__10671 = temp__3698__auto____10670;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__10671)), map.call(null, f, cljs.core.rest.call(null, s__10671)))
      }else {
        return null
      }
    })
  };
  var map__10700 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__10673 = cljs.core.seq.call(null, c1);
      var s2__10674 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____10676 = s1__10673;
        if(cljs.core.truth_(and__3546__auto____10676)) {
          return s2__10674
        }else {
          return and__3546__auto____10676
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__10673), cljs.core.first.call(null, s2__10674)), map.call(null, f, cljs.core.rest.call(null, s1__10673), cljs.core.rest.call(null, s2__10674)))
      }else {
        return null
      }
    })
  };
  var map__10701 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__10679 = cljs.core.seq.call(null, c1);
      var s2__10680 = cljs.core.seq.call(null, c2);
      var s3__10682 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____10683 = s1__10679;
        if(cljs.core.truth_(and__3546__auto____10683)) {
          var and__3546__auto____10684 = s2__10680;
          if(cljs.core.truth_(and__3546__auto____10684)) {
            return s3__10682
          }else {
            return and__3546__auto____10684
          }
        }else {
          return and__3546__auto____10683
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__10679), cljs.core.first.call(null, s2__10680), cljs.core.first.call(null, s3__10682)), map.call(null, f, cljs.core.rest.call(null, s1__10679), cljs.core.rest.call(null, s2__10680), cljs.core.rest.call(null, s3__10682)))
      }else {
        return null
      }
    })
  };
  var map__10702 = function() {
    var G__10712__delegate = function(f, c1, c2, c3, colls) {
      var step__10692 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__10686 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__10686))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__10686), step.call(null, map.call(null, cljs.core.rest, ss__10686)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__10120_SHARP_) {
        return cljs.core.apply.call(null, f, p1__10120_SHARP_)
      }, step__10692.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__10712 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__10712__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__10712.cljs$lang$maxFixedArity = 4;
    G__10712.cljs$lang$applyTo = function(arglist__10715) {
      var f = cljs.core.first(arglist__10715);
      var c1 = cljs.core.first(cljs.core.next(arglist__10715));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10715)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10715))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10715))));
      return G__10712__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__10712
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__10699.call(this, f, c1);
      case 3:
        return map__10700.call(this, f, c1, c2);
      case 4:
        return map__10701.call(this, f, c1, c2, c3);
      default:
        return map__10702.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__10702.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____10722 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____10722)) {
        var s__10723 = temp__3698__auto____10722;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__10723), take.call(null, n - 1, cljs.core.rest.call(null, s__10723)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__10737 = function(n, coll) {
    while(true) {
      var s__10726 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____10735 = n > 0;
        if(cljs.core.truth_(and__3546__auto____10735)) {
          return s__10726
        }else {
          return and__3546__auto____10735
        }
      }())) {
        var G__10739 = n - 1;
        var G__10740 = cljs.core.rest.call(null, s__10726);
        n = G__10739;
        coll = G__10740;
        continue
      }else {
        return s__10726
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__10737.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__10745 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__10746 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__10745.call(this, n);
      case 2:
        return drop_last__10746.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__10751 = cljs.core.seq.call(null, coll);
  var lead__10754 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__10754)) {
      var G__10755 = cljs.core.next.call(null, s__10751);
      var G__10756 = cljs.core.next.call(null, lead__10754);
      s__10751 = G__10755;
      lead__10754 = G__10756;
      continue
    }else {
      return s__10751
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__10762 = function(pred, coll) {
    while(true) {
      var s__10760 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____10761 = s__10760;
        if(cljs.core.truth_(and__3546__auto____10761)) {
          return pred.call(null, cljs.core.first.call(null, s__10760))
        }else {
          return and__3546__auto____10761
        }
      }())) {
        var G__10765 = pred;
        var G__10766 = cljs.core.rest.call(null, s__10760);
        pred = G__10765;
        coll = G__10766;
        continue
      }else {
        return s__10760
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__10762.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____10769 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____10769)) {
      var s__10771 = temp__3698__auto____10769;
      return cljs.core.concat.call(null, s__10771, cycle.call(null, s__10771))
    }else {
      return null
    }
  })
};
cljs.core.split_at = function split_at(n, coll) {
  return cljs.core.Vector.fromArray([cljs.core.take.call(null, n, coll), cljs.core.drop.call(null, n, coll)])
};
cljs.core.repeat = function() {
  var repeat = null;
  var repeat__10778 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__10779 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__10778.call(this, n);
      case 2:
        return repeat__10779.call(this, n, x)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return repeat
}();
cljs.core.replicate = function replicate(n, x) {
  return cljs.core.take.call(null, n, cljs.core.repeat.call(null, x))
};
cljs.core.repeatedly = function() {
  var repeatedly = null;
  var repeatedly__10784 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__10785 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__10784.call(this, n);
      case 2:
        return repeatedly__10785.call(this, n, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return repeatedly
}();
cljs.core.iterate = function iterate(f, x) {
  return cljs.core.cons.call(null, x, new cljs.core.LazySeq(null, false, function() {
    return iterate.call(null, f, f.call(null, x))
  }))
};
cljs.core.interleave = function() {
  var interleave = null;
  var interleave__10898 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__10790 = cljs.core.seq.call(null, c1);
      var s2__10791 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____10792 = s1__10790;
        if(cljs.core.truth_(and__3546__auto____10792)) {
          return s2__10791
        }else {
          return and__3546__auto____10792
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__10790), cljs.core.cons.call(null, cljs.core.first.call(null, s2__10791), interleave.call(null, cljs.core.rest.call(null, s1__10790), cljs.core.rest.call(null, s2__10791))))
      }else {
        return null
      }
    })
  };
  var interleave__10899 = function() {
    var G__10905__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__10895 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__10895))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__10895), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__10895)))
        }else {
          return null
        }
      })
    };
    var G__10905 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__10905__delegate.call(this, c1, c2, colls)
    };
    G__10905.cljs$lang$maxFixedArity = 2;
    G__10905.cljs$lang$applyTo = function(arglist__10915) {
      var c1 = cljs.core.first(arglist__10915);
      var c2 = cljs.core.first(cljs.core.next(arglist__10915));
      var colls = cljs.core.rest(cljs.core.next(arglist__10915));
      return G__10905__delegate.call(this, c1, c2, colls)
    };
    return G__10905
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__10898.call(this, c1, c2);
      default:
        return interleave__10899.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__10899.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__10935 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____10932 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____10932)) {
        var coll__10934 = temp__3695__auto____10932;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__10934), cat.call(null, cljs.core.rest.call(null, coll__10934), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__10935.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__10949 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__10950 = function() {
    var G__10952__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__10952 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__10952__delegate.call(this, f, coll, colls)
    };
    G__10952.cljs$lang$maxFixedArity = 2;
    G__10952.cljs$lang$applyTo = function(arglist__10955) {
      var f = cljs.core.first(arglist__10955);
      var coll = cljs.core.first(cljs.core.next(arglist__10955));
      var colls = cljs.core.rest(cljs.core.next(arglist__10955));
      return G__10952__delegate.call(this, f, coll, colls)
    };
    return G__10952
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__10949.call(this, f, coll);
      default:
        return mapcat__10950.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__10950.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____10958 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____10958)) {
      var s__10961 = temp__3698__auto____10958;
      var f__10965 = cljs.core.first.call(null, s__10961);
      var r__10966 = cljs.core.rest.call(null, s__10961);
      if(cljs.core.truth_(pred.call(null, f__10965))) {
        return cljs.core.cons.call(null, f__10965, filter.call(null, pred, r__10966))
      }else {
        return filter.call(null, pred, r__10966)
      }
    }else {
      return null
    }
  })
};
cljs.core.remove = function remove(pred, coll) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, pred), coll)
};
cljs.core.tree_seq = function tree_seq(branch_QMARK_, children, root) {
  var walk__10987 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__10987.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__10979_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__10979_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__11076 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__11077 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____11058 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____11058)) {
        var s__11059 = temp__3698__auto____11058;
        var p__11060 = cljs.core.take.call(null, n, s__11059);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__11060)))) {
          return cljs.core.cons.call(null, p__11060, partition.call(null, n, step, cljs.core.drop.call(null, step, s__11059)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__11078 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____11065 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____11065)) {
        var s__11067 = temp__3698__auto____11065;
        var p__11068 = cljs.core.take.call(null, n, s__11067);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__11068)))) {
          return cljs.core.cons.call(null, p__11068, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__11067)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__11068, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__11076.call(this, n, step);
      case 3:
        return partition__11077.call(this, n, step, pad);
      case 4:
        return partition__11078.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__11092 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__11135 = function(m, ks, not_found) {
    var sentinel__11085 = cljs.core.lookup_sentinel;
    var m__11086 = m;
    var ks__11087 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__11087)) {
        var m__11088 = cljs.core.get.call(null, m__11086, cljs.core.first.call(null, ks__11087), sentinel__11085);
        if(cljs.core.truth_(sentinel__11085 === m__11088)) {
          return not_found
        }else {
          var G__11137 = sentinel__11085;
          var G__11138 = m__11088;
          var G__11139 = cljs.core.next.call(null, ks__11087);
          sentinel__11085 = G__11137;
          m__11086 = G__11138;
          ks__11087 = G__11139;
          continue
        }
      }else {
        return m__11086
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__11092.call(this, m, ks);
      case 3:
        return get_in__11135.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__11142, v) {
  var vec__11144__11145 = p__11142;
  var k__11148 = cljs.core.nth.call(null, vec__11144__11145, 0, null);
  var ks__11150 = cljs.core.nthnext.call(null, vec__11144__11145, 1);
  if(cljs.core.truth_(ks__11150)) {
    return cljs.core.assoc.call(null, m, k__11148, assoc_in.call(null, cljs.core.get.call(null, m, k__11148), ks__11150, v))
  }else {
    return cljs.core.assoc.call(null, m, k__11148, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__11159, f, args) {
    var vec__11161__11162 = p__11159;
    var k__11165 = cljs.core.nth.call(null, vec__11161__11162, 0, null);
    var ks__11167 = cljs.core.nthnext.call(null, vec__11161__11162, 1);
    if(cljs.core.truth_(ks__11167)) {
      return cljs.core.assoc.call(null, m, k__11165, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__11165), ks__11167, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__11165, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__11165), args))
    }
  };
  var update_in = function(m, p__11159, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__11159, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__11171) {
    var m = cljs.core.first(arglist__11171);
    var p__11159 = cljs.core.first(cljs.core.next(arglist__11171));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11171)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11171)));
    return update_in__delegate.call(this, m, p__11159, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11176 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__11263 = null;
  var G__11263__11264 = function(coll, k) {
    var this__11177 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__11263__11266 = function(coll, k, not_found) {
    var this__11179 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__11263 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11263__11264.call(this, coll, k);
      case 3:
        return G__11263__11266.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11263
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__11181 = this;
  var new_array__11182 = cljs.core.aclone.call(null, this__11181.array);
  new_array__11182[k] = v;
  return new cljs.core.Vector(this__11181.meta, new_array__11182)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = function() {
  var G__11271 = null;
  var G__11271__11273 = function(coll, k) {
    var this__11184 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__11271__11274 = function(coll, k, not_found) {
    var this__11185 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__11271 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11271__11273.call(this, coll, k);
      case 3:
        return G__11271__11274.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11271
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__11186 = this;
  var new_array__11192 = cljs.core.aclone.call(null, this__11186.array);
  new_array__11192.push(o);
  return new cljs.core.Vector(this__11186.meta, new_array__11192)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__11286 = null;
  var G__11286__11288 = function(v, f) {
    var this__11199 = this;
    return cljs.core.ci_reduce.call(null, this__11199.array, f)
  };
  var G__11286__11289 = function(v, f, start) {
    var this__11200 = this;
    return cljs.core.ci_reduce.call(null, this__11200.array, f, start)
  };
  G__11286 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__11286__11288.call(this, v, f);
      case 3:
        return G__11286__11289.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11286
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__11201 = this;
  if(cljs.core.truth_(this__11201.array.length > 0)) {
    var vector_seq__11204 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__11201.array.length)) {
          return cljs.core.cons.call(null, this__11201.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__11204.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__11205 = this;
  return this__11205.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__11212 = this;
  var count__11213 = this__11212.array.length;
  if(cljs.core.truth_(count__11213 > 0)) {
    return this__11212.array[count__11213 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__11214 = this;
  if(cljs.core.truth_(this__11214.array.length > 0)) {
    var new_array__11215 = cljs.core.aclone.call(null, this__11214.array);
    new_array__11215.pop();
    return new cljs.core.Vector(this__11214.meta, new_array__11215)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__11217 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__11235 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__11240 = this;
  return new cljs.core.Vector(meta, this__11240.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__11242 = this;
  return this__11242.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__11340 = null;
  var G__11340__11373 = function(coll, n) {
    var this__11243 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11249 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____11249)) {
        return n < this__11243.array.length
      }else {
        return and__3546__auto____11249
      }
    }())) {
      return this__11243.array[n]
    }else {
      return null
    }
  };
  var G__11340__11443 = function(coll, n, not_found) {
    var this__11253 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11254 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____11254)) {
        return n < this__11253.array.length
      }else {
        return and__3546__auto____11254
      }
    }())) {
      return this__11253.array[n]
    }else {
      return not_found
    }
  };
  G__11340 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11340__11373.call(this, coll, n);
      case 3:
        return G__11340__11443.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11340
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__11258 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__11258.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, cljs.core.array.call(null));
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.vec = function vec(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.Vector.EMPTY, coll)
};
cljs.core.vector = function() {
  var vector__delegate = function(args) {
    return cljs.core.vec.call(null, args)
  };
  var vector = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return vector__delegate.call(this, args)
  };
  vector.cljs$lang$maxFixedArity = 0;
  vector.cljs$lang$applyTo = function(arglist__11457) {
    var args = cljs.core.seq(arglist__11457);
    return vector__delegate.call(this, args)
  };
  return vector
}();
cljs.core.Subvec = function(meta, v, start, end) {
  this.meta = meta;
  this.v = v;
  this.start = start;
  this.end = end
};
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11472 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__11527 = null;
  var G__11527__11529 = function(coll, k) {
    var this__11473 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__11527__11530 = function(coll, k, not_found) {
    var this__11474 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__11527 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11527__11529.call(this, coll, k);
      case 3:
        return G__11527__11530.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11527
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__11475 = this;
  var v_pos__11477 = this__11475.start + key;
  return new cljs.core.Subvec(this__11475.meta, cljs.core._assoc.call(null, this__11475.v, v_pos__11477, val), this__11475.start, this__11475.end > v_pos__11477 + 1 ? this__11475.end : v_pos__11477 + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = function() {
  var G__11611 = null;
  var G__11611__11612 = function(coll, k) {
    var this__11479 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__11611__11613 = function(coll, k, not_found) {
    var this__11480 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__11611 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11611__11612.call(this, coll, k);
      case 3:
        return G__11611__11613.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11611
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__11483 = this;
  return new cljs.core.Subvec(this__11483.meta, cljs.core._assoc_n.call(null, this__11483.v, this__11483.end, o), this__11483.start, this__11483.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__11619 = null;
  var G__11619__11620 = function(coll, f) {
    var this__11485 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__11619__11621 = function(coll, f, start) {
    var this__11487 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__11619 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__11619__11620.call(this, coll, f);
      case 3:
        return G__11619__11621.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11619
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__11489 = this;
  var subvec_seq__11491 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__11489.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__11489.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__11491.call(null, this__11489.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__11495 = this;
  return this__11495.end - this__11495.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__11497 = this;
  return cljs.core._nth.call(null, this__11497.v, this__11497.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__11500 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__11500.start, this__11500.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__11500.meta, this__11500.v, this__11500.start, this__11500.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__11504 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__11506 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__11511 = this;
  return new cljs.core.Subvec(meta, this__11511.v, this__11511.start, this__11511.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__11513 = this;
  return this__11513.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__11633 = null;
  var G__11633__11634 = function(coll, n) {
    var this__11517 = this;
    return cljs.core._nth.call(null, this__11517.v, this__11517.start + n)
  };
  var G__11633__11635 = function(coll, n, not_found) {
    var this__11519 = this;
    return cljs.core._nth.call(null, this__11519.v, this__11519.start + n, not_found)
  };
  G__11633 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11633__11634.call(this, coll, n);
      case 3:
        return G__11633__11635.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11633
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__11521 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__11521.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__11651 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__11653 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__11651.call(this, v, start);
      case 3:
        return subvec__11653.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subvec
}();
cljs.core.PersistentQueueSeq = function(meta, front, rear) {
  this.meta = meta;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__11665 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11670 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__11672 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__11674 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__11674.meta)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__11676 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__11678 = this;
  return cljs.core._first.call(null, this__11678.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__11680 = this;
  var temp__3695__auto____11682 = cljs.core.next.call(null, this__11680.front);
  if(cljs.core.truth_(temp__3695__auto____11682)) {
    var f1__11683 = temp__3695__auto____11682;
    return new cljs.core.PersistentQueueSeq(this__11680.meta, f1__11683, this__11680.rear)
  }else {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__11680.rear))) {
      return cljs.core._empty.call(null, coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__11680.meta, this__11680.rear, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__11685 = this;
  return this__11685.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__11687 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__11687.front, this__11687.rear)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(meta, count, front, rear) {
  this.meta = meta;
  this.count = count;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11714 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__11715 = this;
  if(cljs.core.truth_(this__11715.front)) {
    return new cljs.core.PersistentQueue(this__11715.meta, this__11715.count + 1, this__11715.front, cljs.core.conj.call(null, function() {
      var or__3548__auto____11716 = this__11715.rear;
      if(cljs.core.truth_(or__3548__auto____11716)) {
        return or__3548__auto____11716
      }else {
        return cljs.core.Vector.fromArray([])
      }
    }(), o))
  }else {
    return new cljs.core.PersistentQueue(this__11715.meta, this__11715.count + 1, cljs.core.conj.call(null, this__11715.front, o), cljs.core.Vector.fromArray([]))
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__11721 = this;
  var rear__11722 = cljs.core.seq.call(null, this__11721.rear);
  if(cljs.core.truth_(function() {
    var or__3548__auto____11723 = this__11721.front;
    if(cljs.core.truth_(or__3548__auto____11723)) {
      return or__3548__auto____11723
    }else {
      return rear__11722
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__11721.front, cljs.core.seq.call(null, rear__11722))
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__11725 = this;
  return this__11725.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__11729 = this;
  return cljs.core._first.call(null, this__11729.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__11731 = this;
  if(cljs.core.truth_(this__11731.front)) {
    var temp__3695__auto____11733 = cljs.core.next.call(null, this__11731.front);
    if(cljs.core.truth_(temp__3695__auto____11733)) {
      var f1__11734 = temp__3695__auto____11733;
      return new cljs.core.PersistentQueue(this__11731.meta, this__11731.count - 1, f1__11734, this__11731.rear)
    }else {
      return new cljs.core.PersistentQueue(this__11731.meta, this__11731.count - 1, cljs.core.seq.call(null, this__11731.rear), cljs.core.Vector.fromArray([]))
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__11738 = this;
  return cljs.core.first.call(null, this__11738.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__11740 = this;
  return cljs.core.rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__11746 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__11748 = this;
  return new cljs.core.PersistentQueue(meta, this__11748.count, this__11748.front, this__11748.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__11751 = this;
  return this__11751.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__11759 = this;
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.Vector.fromArray([]));
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__11790 = this;
  return false
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, y)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, x), cljs.core.count.call(null, y))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__11805 = array.length;
  var i__11806 = 0;
  while(true) {
    if(cljs.core.truth_(i__11806 < len__11805)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__11806]))) {
        return i__11806
      }else {
        var G__11807 = i__11806 + incr;
        i__11806 = G__11807;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.obj_map_contains_key_QMARK_ = function() {
  var obj_map_contains_key_QMARK_ = null;
  var obj_map_contains_key_QMARK___11813 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___11814 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____11811 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____11811)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____11811
      }
    }())) {
      return true_val
    }else {
      return false_val
    }
  };
  obj_map_contains_key_QMARK_ = function(k, strobj, true_val, false_val) {
    switch(arguments.length) {
      case 2:
        return obj_map_contains_key_QMARK___11813.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___11814.call(this, k, strobj, true_val, false_val)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return obj_map_contains_key_QMARK_
}();
cljs.core.ObjMap = function(meta, keys, strobj) {
  this.meta = meta;
  this.keys = keys;
  this.strobj = strobj
};
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11835 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__11889 = null;
  var G__11889__11891 = function(coll, k) {
    var this__11838 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__11889__11892 = function(coll, k, not_found) {
    var this__11839 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__11839.strobj, this__11839.strobj[k], not_found)
  };
  G__11889 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11889__11891.call(this, coll, k);
      case 3:
        return G__11889__11892.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11889
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__11842 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__11843 = goog.object.clone.call(null, this__11842.strobj);
    var overwrite_QMARK___11844 = new_strobj__11843.hasOwnProperty(k);
    new_strobj__11843[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___11844)) {
      return new cljs.core.ObjMap(this__11842.meta, this__11842.keys, new_strobj__11843)
    }else {
      var new_keys__11846 = cljs.core.aclone.call(null, this__11842.keys);
      new_keys__11846.push(k);
      return new cljs.core.ObjMap(this__11842.meta, new_keys__11846, new_strobj__11843)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__11842.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__11854 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__11854.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = function() {
  var G__11905 = null;
  var G__11905__11907 = function(coll, k) {
    var this__11856 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__11905__11908 = function(coll, k, not_found) {
    var this__11857 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__11905 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11905__11907.call(this, coll, k);
      case 3:
        return G__11905__11908.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11905
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__11859 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__11860 = this;
  if(cljs.core.truth_(this__11860.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__11823_SHARP_) {
      return cljs.core.vector.call(null, p1__11823_SHARP_, this__11860.strobj[p1__11823_SHARP_])
    }, this__11860.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__11862 = this;
  return this__11862.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__11863 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__11864 = this;
  return new cljs.core.ObjMap(meta, this__11864.keys, this__11864.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__11865 = this;
  return this__11865.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__11867 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__11867.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__11869 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____11871 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____11871)) {
      return this__11869.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____11871
    }
  }())) {
    var new_keys__11875 = cljs.core.aclone.call(null, this__11869.keys);
    var new_strobj__11876 = goog.object.clone.call(null, this__11869.strobj);
    new_keys__11875.splice(cljs.core.scan_array.call(null, 1, k, new_keys__11875), 1);
    cljs.core.js_delete.call(null, new_strobj__11876, k);
    return new cljs.core.ObjMap(this__11869.meta, new_keys__11875, new_strobj__11876)
  }else {
    return coll
  }
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, cljs.core.array.call(null), cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__11996 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__12062 = null;
  var G__12062__12063 = function(coll, k) {
    var this__12004 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__12062__12064 = function(coll, k, not_found) {
    var this__12005 = this;
    var bucket__12006 = this__12005.hashobj[cljs.core.hash.call(null, k)];
    var i__12007 = cljs.core.truth_(bucket__12006) ? cljs.core.scan_array.call(null, 2, k, bucket__12006) : null;
    if(cljs.core.truth_(i__12007)) {
      return bucket__12006[i__12007 + 1]
    }else {
      return not_found
    }
  };
  G__12062 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12062__12063.call(this, coll, k);
      case 3:
        return G__12062__12064.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12062
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__12008 = this;
  var h__12009 = cljs.core.hash.call(null, k);
  var bucket__12010 = this__12008.hashobj[h__12009];
  if(cljs.core.truth_(bucket__12010)) {
    var new_bucket__12011 = cljs.core.aclone.call(null, bucket__12010);
    var new_hashobj__12012 = goog.object.clone.call(null, this__12008.hashobj);
    new_hashobj__12012[h__12009] = new_bucket__12011;
    var temp__3695__auto____12014 = cljs.core.scan_array.call(null, 2, k, new_bucket__12011);
    if(cljs.core.truth_(temp__3695__auto____12014)) {
      var i__12015 = temp__3695__auto____12014;
      new_bucket__12011[i__12015 + 1] = v;
      return new cljs.core.HashMap(this__12008.meta, this__12008.count, new_hashobj__12012)
    }else {
      new_bucket__12011.push(k, v);
      return new cljs.core.HashMap(this__12008.meta, this__12008.count + 1, new_hashobj__12012)
    }
  }else {
    var new_hashobj__12018 = goog.object.clone.call(null, this__12008.hashobj);
    new_hashobj__12018[h__12009] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__12008.meta, this__12008.count + 1, new_hashobj__12018)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__12021 = this;
  var bucket__12022 = this__12021.hashobj[cljs.core.hash.call(null, k)];
  var i__12023 = cljs.core.truth_(bucket__12022) ? cljs.core.scan_array.call(null, 2, k, bucket__12022) : null;
  if(cljs.core.truth_(i__12023)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = function() {
  var G__12167 = null;
  var G__12167__12168 = function(coll, k) {
    var this__12024 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__12167__12169 = function(coll, k, not_found) {
    var this__12025 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__12167 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12167__12168.call(this, coll, k);
      case 3:
        return G__12167__12169.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12167
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__12026 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12030 = this;
  if(cljs.core.truth_(this__12030.count > 0)) {
    var hashes__12033 = cljs.core.js_keys.call(null, this__12030.hashobj).sort();
    return cljs.core.mapcat.call(null, function(p1__11980_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__12030.hashobj[p1__11980_SHARP_]))
    }, hashes__12033)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12034 = this;
  return this__12034.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12035 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12037 = this;
  return new cljs.core.HashMap(meta, this__12037.count, this__12037.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12040 = this;
  return this__12040.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12042 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__12042.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__12046 = this;
  var h__12049 = cljs.core.hash.call(null, k);
  var bucket__12050 = this__12046.hashobj[h__12049];
  var i__12053 = cljs.core.truth_(bucket__12050) ? cljs.core.scan_array.call(null, 2, k, bucket__12050) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__12053))) {
    return coll
  }else {
    var new_hashobj__12056 = goog.object.clone.call(null, this__12046.hashobj);
    if(cljs.core.truth_(3 > bucket__12050.length)) {
      cljs.core.js_delete.call(null, new_hashobj__12056, h__12049)
    }else {
      var new_bucket__12060 = cljs.core.aclone.call(null, bucket__12050);
      new_bucket__12060.splice(i__12053, 2);
      new_hashobj__12056[h__12049] = new_bucket__12060
    }
    return new cljs.core.HashMap(this__12046.meta, this__12046.count - 1, new_hashobj__12056)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__12190 = ks.length;
  var i__12191 = 0;
  var out__12192 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__12191 < len__12190)) {
      var G__12193 = i__12191 + 1;
      var G__12194 = cljs.core.assoc.call(null, out__12192, ks[i__12191], vs[i__12191]);
      i__12191 = G__12193;
      out__12192 = G__12194;
      continue
    }else {
      return out__12192
    }
    break
  }
};
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__12197 = cljs.core.seq.call(null, keyvals);
    var out__12198 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__12197)) {
        var G__12201 = cljs.core.nnext.call(null, in$__12197);
        var G__12202 = cljs.core.assoc.call(null, out__12198, cljs.core.first.call(null, in$__12197), cljs.core.second.call(null, in$__12197));
        in$__12197 = G__12201;
        out__12198 = G__12202;
        continue
      }else {
        return out__12198
      }
      break
    }
  };
  var hash_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return hash_map__delegate.call(this, keyvals)
  };
  hash_map.cljs$lang$maxFixedArity = 0;
  hash_map.cljs$lang$applyTo = function(arglist__12207) {
    var keyvals = cljs.core.seq(arglist__12207);
    return hash_map__delegate.call(this, keyvals)
  };
  return hash_map
}();
cljs.core.keys = function keys(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, hash_map))
};
cljs.core.vals = function vals(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, hash_map))
};
cljs.core.merge = function() {
  var merge__delegate = function(maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      return cljs.core.reduce.call(null, function(p1__12211_SHARP_, p2__12212_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____12225 = p1__12211_SHARP_;
          if(cljs.core.truth_(or__3548__auto____12225)) {
            return or__3548__auto____12225
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__12212_SHARP_)
      }, maps)
    }else {
      return null
    }
  };
  var merge = function(var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return merge__delegate.call(this, maps)
  };
  merge.cljs$lang$maxFixedArity = 0;
  merge.cljs$lang$applyTo = function(arglist__12230) {
    var maps = cljs.core.seq(arglist__12230);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__12241 = function(m, e) {
        var k__12237 = cljs.core.first.call(null, e);
        var v__12238 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__12237))) {
          return cljs.core.assoc.call(null, m, k__12237, f.call(null, cljs.core.get.call(null, m, k__12237), v__12238))
        }else {
          return cljs.core.assoc.call(null, m, k__12237, v__12238)
        }
      };
      var merge2__12246 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__12241, function() {
          var or__3548__auto____12242 = m1;
          if(cljs.core.truth_(or__3548__auto____12242)) {
            return or__3548__auto____12242
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__12246, maps)
    }else {
      return null
    }
  };
  var merge_with = function(f, var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return merge_with__delegate.call(this, f, maps)
  };
  merge_with.cljs$lang$maxFixedArity = 1;
  merge_with.cljs$lang$applyTo = function(arglist__12256) {
    var f = cljs.core.first(arglist__12256);
    var maps = cljs.core.rest(arglist__12256);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__12263 = cljs.core.ObjMap.fromObject([], {});
  var keys__12264 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__12264)) {
      var key__12265 = cljs.core.first.call(null, keys__12264);
      var entry__12266 = cljs.core.get.call(null, map, key__12265, "\ufdd0'user/not-found");
      var G__12271 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__12266, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__12263, key__12265, entry__12266) : ret__12263;
      var G__12272 = cljs.core.next.call(null, keys__12264);
      ret__12263 = G__12271;
      keys__12264 = G__12272;
      continue
    }else {
      return ret__12263
    }
    break
  }
};
cljs.core.Set = function(meta, hash_map) {
  this.meta = meta;
  this.hash_map = hash_map
};
cljs.core.Set.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Set")
};
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__12286 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__12392 = null;
  var G__12392__12393 = function(coll, v) {
    var this__12289 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__12392__12394 = function(coll, v, not_found) {
    var this__12290 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__12290.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__12392 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12392__12393.call(this, coll, v);
      case 3:
        return G__12392__12394.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12392
}();
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = function() {
  var G__12398 = null;
  var G__12398__12399 = function(coll, k) {
    var this__12293 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__12398__12400 = function(coll, k, not_found) {
    var this__12294 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__12398 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12398__12399.call(this, coll, k);
      case 3:
        return G__12398__12400.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12398
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__12295 = this;
  return new cljs.core.Set(this__12295.meta, cljs.core.assoc.call(null, this__12295.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12297 = this;
  return cljs.core.keys.call(null, this__12297.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__12299 = this;
  return new cljs.core.Set(this__12299.meta, cljs.core.dissoc.call(null, this__12299.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12302 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12304 = this;
  var and__3546__auto____12338 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____12338)) {
    var and__3546__auto____12340 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____12340)) {
      return cljs.core.every_QMARK_.call(null, function(p1__12260_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__12260_SHARP_)
      }, other)
    }else {
      return and__3546__auto____12340
    }
  }else {
    return and__3546__auto____12338
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12343 = this;
  return new cljs.core.Set(meta, this__12343.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12369 = this;
  return this__12369.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12370 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__12370.meta)
};
cljs.core.Set;
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.set = function set(coll) {
  var in$__12419 = cljs.core.seq.call(null, coll);
  var out__12420 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__12419)))) {
      var G__12424 = cljs.core.rest.call(null, in$__12419);
      var G__12425 = cljs.core.conj.call(null, out__12420, cljs.core.first.call(null, in$__12419));
      in$__12419 = G__12424;
      out__12420 = G__12425;
      continue
    }else {
      return out__12420
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__12427 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____12430 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____12430)) {
        var e__12432 = temp__3695__auto____12430;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__12432))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__12427, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__12418_SHARP_) {
      var temp__3695__auto____12437 = cljs.core.find.call(null, smap, p1__12418_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____12437)) {
        var e__12438 = temp__3695__auto____12437;
        return cljs.core.second.call(null, e__12438)
      }else {
        return p1__12418_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__12468 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__12454, seen) {
        while(true) {
          var vec__12455__12457 = p__12454;
          var f__12458 = cljs.core.nth.call(null, vec__12455__12457, 0, null);
          var xs__12459 = vec__12455__12457;
          var temp__3698__auto____12460 = cljs.core.seq.call(null, xs__12459);
          if(cljs.core.truth_(temp__3698__auto____12460)) {
            var s__12461 = temp__3698__auto____12460;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__12458))) {
              var G__12473 = cljs.core.rest.call(null, s__12461);
              var G__12474 = seen;
              p__12454 = G__12473;
              seen = G__12474;
              continue
            }else {
              return cljs.core.cons.call(null, f__12458, step.call(null, cljs.core.rest.call(null, s__12461), cljs.core.conj.call(null, seen, f__12458)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__12468.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__12476 = cljs.core.Vector.fromArray([]);
  var s__12477 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__12477))) {
      var G__12479 = cljs.core.conj.call(null, ret__12476, cljs.core.first.call(null, s__12477));
      var G__12480 = cljs.core.next.call(null, s__12477);
      ret__12476 = G__12479;
      s__12477 = G__12480;
      continue
    }else {
      return cljs.core.seq.call(null, ret__12476)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____12483 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____12483)) {
        return or__3548__auto____12483
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__12485 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__12485 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__12485 + 1)
      }
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw new Error(cljs.core.str.call(null, "Doesn't support name: ", x));
      }else {
        return null
      }
    }
  }
};
cljs.core.namespace = function namespace(x) {
  if(cljs.core.truth_(function() {
    var or__3548__auto____12498 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____12498)) {
      return or__3548__auto____12498
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__12500 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__12500 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__12500)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__12516 = cljs.core.ObjMap.fromObject([], {});
  var ks__12517 = cljs.core.seq.call(null, keys);
  var vs__12518 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____12519 = ks__12517;
      if(cljs.core.truth_(and__3546__auto____12519)) {
        return vs__12518
      }else {
        return and__3546__auto____12519
      }
    }())) {
      var G__12520 = cljs.core.assoc.call(null, map__12516, cljs.core.first.call(null, ks__12517), cljs.core.first.call(null, vs__12518));
      var G__12521 = cljs.core.next.call(null, ks__12517);
      var G__12522 = cljs.core.next.call(null, vs__12518);
      map__12516 = G__12520;
      ks__12517 = G__12521;
      vs__12518 = G__12522;
      continue
    }else {
      return map__12516
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__12533 = function(k, x) {
    return x
  };
  var max_key__12534 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__12535 = function() {
    var G__12539__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__12514_SHARP_, p2__12515_SHARP_) {
        return max_key.call(null, k, p1__12514_SHARP_, p2__12515_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__12539 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__12539__delegate.call(this, k, x, y, more)
    };
    G__12539.cljs$lang$maxFixedArity = 3;
    G__12539.cljs$lang$applyTo = function(arglist__12541) {
      var k = cljs.core.first(arglist__12541);
      var x = cljs.core.first(cljs.core.next(arglist__12541));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12541)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12541)));
      return G__12539__delegate.call(this, k, x, y, more)
    };
    return G__12539
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__12533.call(this, k, x);
      case 3:
        return max_key__12534.call(this, k, x, y);
      default:
        return max_key__12535.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__12535.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__12542 = function(k, x) {
    return x
  };
  var min_key__12543 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__12544 = function() {
    var G__12546__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__12523_SHARP_, p2__12525_SHARP_) {
        return min_key.call(null, k, p1__12523_SHARP_, p2__12525_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__12546 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__12546__delegate.call(this, k, x, y, more)
    };
    G__12546.cljs$lang$maxFixedArity = 3;
    G__12546.cljs$lang$applyTo = function(arglist__12547) {
      var k = cljs.core.first(arglist__12547);
      var x = cljs.core.first(cljs.core.next(arglist__12547));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12547)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12547)));
      return G__12546__delegate.call(this, k, x, y, more)
    };
    return G__12546
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__12542.call(this, k, x);
      case 3:
        return min_key__12543.call(this, k, x, y);
      default:
        return min_key__12544.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__12544.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__12590 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__12591 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____12548 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____12548)) {
        var s__12549 = temp__3698__auto____12548;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__12549), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__12549)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__12590.call(this, n, step);
      case 3:
        return partition_all__12591.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____12657 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____12657)) {
      var s__12659 = temp__3698__auto____12657;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__12659)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__12659), take_while.call(null, pred, cljs.core.rest.call(null, s__12659)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.Range = function(meta, start, end, step) {
  this.meta = meta;
  this.start = start;
  this.end = end;
  this.step = step
};
cljs.core.Range.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = function(rng) {
  var this__12698 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__12702 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__12887 = null;
  var G__12887__12890 = function(rng, f) {
    var this__12703 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__12887__12891 = function(rng, f, s) {
    var this__12704 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__12887 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__12887__12890.call(this, rng, f);
      case 3:
        return G__12887__12891.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12887
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__12705 = this;
  var comp__12706 = cljs.core.truth_(this__12705.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__12706.call(null, this__12705.start, this__12705.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__12707 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__12707.end - this__12707.start) / this__12707.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__12708 = this;
  return this__12708.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__12709 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__12709.meta, this__12709.start + this__12709.step, this__12709.end, this__12709.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__12714 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__12715 = this;
  return new cljs.core.Range(meta, this__12715.start, this__12715.end, this__12715.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__12716 = this;
  return this__12716.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__12893 = null;
  var G__12893__12894 = function(rng, n) {
    var this__12717 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__12717.start + n * this__12717.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____12719 = this__12717.start > this__12717.end;
        if(cljs.core.truth_(and__3546__auto____12719)) {
          return cljs.core._EQ_.call(null, this__12717.step, 0)
        }else {
          return and__3546__auto____12719
        }
      }())) {
        return this__12717.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__12893__12895 = function(rng, n, not_found) {
    var this__12784 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__12784.start + n * this__12784.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____12786 = this__12784.start > this__12784.end;
        if(cljs.core.truth_(and__3546__auto____12786)) {
          return cljs.core._EQ_.call(null, this__12784.step, 0)
        }else {
          return and__3546__auto____12786
        }
      }())) {
        return this__12784.start
      }else {
        return not_found
      }
    }
  };
  G__12893 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12893__12894.call(this, rng, n);
      case 3:
        return G__12893__12895.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12893
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__12880 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__12880.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__12903 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__12904 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__12905 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__12906 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__12903.call(this);
      case 1:
        return range__12904.call(this, start);
      case 2:
        return range__12905.call(this, start, end);
      case 3:
        return range__12906.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____12912 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____12912)) {
      var s__12913 = temp__3698__auto____12912;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__12913), take_nth.call(null, n, cljs.core.drop.call(null, n, s__12913)))
    }else {
      return null
    }
  })
};
cljs.core.split_with = function split_with(pred, coll) {
  return cljs.core.Vector.fromArray([cljs.core.take_while.call(null, pred, coll), cljs.core.drop_while.call(null, pred, coll)])
};
cljs.core.partition_by = function partition_by(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____12923 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____12923)) {
      var s__12924 = temp__3698__auto____12923;
      var fst__12925 = cljs.core.first.call(null, s__12924);
      var fv__12926 = f.call(null, fst__12925);
      var run__12927 = cljs.core.cons.call(null, fst__12925, cljs.core.take_while.call(null, function(p1__12914_SHARP_) {
        return cljs.core._EQ_.call(null, fv__12926, f.call(null, p1__12914_SHARP_))
      }, cljs.core.next.call(null, s__12924)));
      return cljs.core.cons.call(null, run__12927, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__12927), s__12924))))
    }else {
      return null
    }
  })
};
cljs.core.frequencies = function frequencies(coll) {
  return cljs.core.reduce.call(null, function(counts, x) {
    return cljs.core.assoc.call(null, counts, x, cljs.core.get.call(null, counts, x, 0) + 1)
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.reductions = function() {
  var reductions = null;
  var reductions__12951 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____12944 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____12944)) {
        var s__12945 = temp__3695__auto____12944;
        return reductions.call(null, f, cljs.core.first.call(null, s__12945), cljs.core.rest.call(null, s__12945))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__12952 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____12948 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____12948)) {
        var s__12949 = temp__3698__auto____12948;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__12949)), cljs.core.rest.call(null, s__12949))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__12951.call(this, f, init);
      case 3:
        return reductions__12952.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__12971 = function(f) {
    return function() {
      var G__12981 = null;
      var G__12981__12982 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__12981__12983 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__12981__12984 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__12981__12985 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__12981__12986 = function() {
        var G__12988__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__12988 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__12988__delegate.call(this, x, y, z, args)
        };
        G__12988.cljs$lang$maxFixedArity = 3;
        G__12988.cljs$lang$applyTo = function(arglist__12992) {
          var x = cljs.core.first(arglist__12992);
          var y = cljs.core.first(cljs.core.next(arglist__12992));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12992)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12992)));
          return G__12988__delegate.call(this, x, y, z, args)
        };
        return G__12988
      }();
      G__12981 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__12981__12982.call(this);
          case 1:
            return G__12981__12983.call(this, x);
          case 2:
            return G__12981__12984.call(this, x, y);
          case 3:
            return G__12981__12985.call(this, x, y, z);
          default:
            return G__12981__12986.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__12981.cljs$lang$maxFixedArity = 3;
      G__12981.cljs$lang$applyTo = G__12981__12986.cljs$lang$applyTo;
      return G__12981
    }()
  };
  var juxt__12973 = function(f, g) {
    return function() {
      var G__12994 = null;
      var G__12994__12995 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__12994__12997 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__12994__12999 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__12994__13000 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__12994__13001 = function() {
        var G__13006__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__13006 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13006__delegate.call(this, x, y, z, args)
        };
        G__13006.cljs$lang$maxFixedArity = 3;
        G__13006.cljs$lang$applyTo = function(arglist__13008) {
          var x = cljs.core.first(arglist__13008);
          var y = cljs.core.first(cljs.core.next(arglist__13008));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13008)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13008)));
          return G__13006__delegate.call(this, x, y, z, args)
        };
        return G__13006
      }();
      G__12994 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__12994__12995.call(this);
          case 1:
            return G__12994__12997.call(this, x);
          case 2:
            return G__12994__12999.call(this, x, y);
          case 3:
            return G__12994__13000.call(this, x, y, z);
          default:
            return G__12994__13001.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__12994.cljs$lang$maxFixedArity = 3;
      G__12994.cljs$lang$applyTo = G__12994__13001.cljs$lang$applyTo;
      return G__12994
    }()
  };
  var juxt__12975 = function(f, g, h) {
    return function() {
      var G__13009 = null;
      var G__13009__13010 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__13009__13011 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__13009__13012 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__13009__13013 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__13009__13014 = function() {
        var G__13024__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__13024 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13024__delegate.call(this, x, y, z, args)
        };
        G__13024.cljs$lang$maxFixedArity = 3;
        G__13024.cljs$lang$applyTo = function(arglist__13028) {
          var x = cljs.core.first(arglist__13028);
          var y = cljs.core.first(cljs.core.next(arglist__13028));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13028)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13028)));
          return G__13024__delegate.call(this, x, y, z, args)
        };
        return G__13024
      }();
      G__13009 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13009__13010.call(this);
          case 1:
            return G__13009__13011.call(this, x);
          case 2:
            return G__13009__13012.call(this, x, y);
          case 3:
            return G__13009__13013.call(this, x, y, z);
          default:
            return G__13009__13014.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13009.cljs$lang$maxFixedArity = 3;
      G__13009.cljs$lang$applyTo = G__13009__13014.cljs$lang$applyTo;
      return G__13009
    }()
  };
  var juxt__12979 = function() {
    var G__13030__delegate = function(f, g, h, fs) {
      var fs__12966 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__13032 = null;
        var G__13032__13033 = function() {
          return cljs.core.reduce.call(null, function(p1__12933_SHARP_, p2__12934_SHARP_) {
            return cljs.core.conj.call(null, p1__12933_SHARP_, p2__12934_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__12966)
        };
        var G__13032__13034 = function(x) {
          return cljs.core.reduce.call(null, function(p1__12935_SHARP_, p2__12936_SHARP_) {
            return cljs.core.conj.call(null, p1__12935_SHARP_, p2__12936_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__12966)
        };
        var G__13032__13035 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__12937_SHARP_, p2__12938_SHARP_) {
            return cljs.core.conj.call(null, p1__12937_SHARP_, p2__12938_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__12966)
        };
        var G__13032__13036 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__12939_SHARP_, p2__12940_SHARP_) {
            return cljs.core.conj.call(null, p1__12939_SHARP_, p2__12940_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__12966)
        };
        var G__13032__13037 = function() {
          var G__13101__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__12941_SHARP_, p2__12942_SHARP_) {
              return cljs.core.conj.call(null, p1__12941_SHARP_, cljs.core.apply.call(null, p2__12942_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__12966)
          };
          var G__13101 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__13101__delegate.call(this, x, y, z, args)
          };
          G__13101.cljs$lang$maxFixedArity = 3;
          G__13101.cljs$lang$applyTo = function(arglist__13102) {
            var x = cljs.core.first(arglist__13102);
            var y = cljs.core.first(cljs.core.next(arglist__13102));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13102)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13102)));
            return G__13101__delegate.call(this, x, y, z, args)
          };
          return G__13101
        }();
        G__13032 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__13032__13033.call(this);
            case 1:
              return G__13032__13034.call(this, x);
            case 2:
              return G__13032__13035.call(this, x, y);
            case 3:
              return G__13032__13036.call(this, x, y, z);
            default:
              return G__13032__13037.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__13032.cljs$lang$maxFixedArity = 3;
        G__13032.cljs$lang$applyTo = G__13032__13037.cljs$lang$applyTo;
        return G__13032
      }()
    };
    var G__13030 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__13030__delegate.call(this, f, g, h, fs)
    };
    G__13030.cljs$lang$maxFixedArity = 3;
    G__13030.cljs$lang$applyTo = function(arglist__13107) {
      var f = cljs.core.first(arglist__13107);
      var g = cljs.core.first(cljs.core.next(arglist__13107));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13107)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13107)));
      return G__13030__delegate.call(this, f, g, h, fs)
    };
    return G__13030
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__12971.call(this, f);
      case 2:
        return juxt__12973.call(this, f, g);
      case 3:
        return juxt__12975.call(this, f, g, h);
      default:
        return juxt__12979.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__12979.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__13115 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__13118 = cljs.core.next.call(null, coll);
        coll = G__13118;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__13116 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____13113 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____13113)) {
          return n > 0
        }else {
          return and__3546__auto____13113
        }
      }())) {
        var G__13119 = n - 1;
        var G__13120 = cljs.core.next.call(null, coll);
        n = G__13119;
        coll = G__13120;
        continue
      }else {
        return null
      }
      break
    }
  };
  dorun = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return dorun__13115.call(this, n);
      case 2:
        return dorun__13116.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__13131 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__13132 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__13131.call(this, n);
      case 2:
        return doall__13132.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__13143 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__13143), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__13143), 1))) {
      return cljs.core.first.call(null, matches__13143)
    }else {
      return cljs.core.vec.call(null, matches__13143)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__13153 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__13153))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__13153), 1))) {
      return cljs.core.first.call(null, matches__13153)
    }else {
      return cljs.core.vec.call(null, matches__13153)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__13168 = cljs.core.re_find.call(null, re, s);
  var match_idx__13170 = s.search(re);
  var match_str__13225 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__13168)) ? cljs.core.first.call(null, match_data__13168) : match_data__13168;
  var post_match__13226 = cljs.core.subs.call(null, s, match_idx__13170 + cljs.core.count.call(null, match_str__13225));
  if(cljs.core.truth_(match_data__13168)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__13168, re_seq.call(null, re, post_match__13226))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__13232_SHARP_) {
    return print_one.call(null, p1__13232_SHARP_, opts)
  }, coll))), cljs.core.Vector.fromArray([end]))
};
cljs.core.string_print = function string_print(x) {
  cljs.core._STAR_print_fn_STAR_.call(null, x);
  return null
};
cljs.core.flush = function flush() {
  return null
};
cljs.core.pr_seq = function pr_seq(obj, opts) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, obj))) {
    return cljs.core.list.call(null, "nil")
  }else {
    if(cljs.core.truth_(void 0 === obj)) {
      return cljs.core.list.call(null, "#<undefined>")
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.concat.call(null, cljs.core.truth_(function() {
          var and__3546__auto____13234 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____13234)) {
            var and__3546__auto____13238 = function() {
              var x__445__auto____13235 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____13236 = x__445__auto____13235;
                if(cljs.core.truth_(and__3546__auto____13236)) {
                  var and__3546__auto____13237 = x__445__auto____13235.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____13237)) {
                    return cljs.core.not.call(null, x__445__auto____13235.hasOwnProperty("cljs$core$IMeta$"))
                  }else {
                    return and__3546__auto____13237
                  }
                }else {
                  return and__3546__auto____13236
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____13235)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____13238)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____13238
            }
          }else {
            return and__3546__auto____13234
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__445__auto____13239 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____13240 = x__445__auto____13239;
            if(cljs.core.truth_(and__3546__auto____13240)) {
              var and__3546__auto____13241 = x__445__auto____13239.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____13241)) {
                return cljs.core.not.call(null, x__445__auto____13239.hasOwnProperty("cljs$core$IPrintable$"))
              }else {
                return and__3546__auto____13241
              }
            }else {
              return and__3546__auto____13240
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__445__auto____13239)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__13270 = cljs.core.first.call(null, objs);
  var sb__13271 = new goog.string.StringBuffer;
  var G__13272__13273 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__13272__13273)) {
    var obj__13275 = cljs.core.first.call(null, G__13272__13273);
    var G__13272__13277 = G__13272__13273;
    while(true) {
      if(cljs.core.truth_(obj__13275 === first_obj__13270)) {
      }else {
        sb__13271.append(" ")
      }
      var G__13278__13279 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__13275, opts));
      if(cljs.core.truth_(G__13278__13279)) {
        var string__13281 = cljs.core.first.call(null, G__13278__13279);
        var G__13278__13282 = G__13278__13279;
        while(true) {
          sb__13271.append(string__13281);
          var temp__3698__auto____13283 = cljs.core.next.call(null, G__13278__13282);
          if(cljs.core.truth_(temp__3698__auto____13283)) {
            var G__13278__13284 = temp__3698__auto____13283;
            var G__13298 = cljs.core.first.call(null, G__13278__13284);
            var G__13299 = G__13278__13284;
            string__13281 = G__13298;
            G__13278__13282 = G__13299;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____13292 = cljs.core.next.call(null, G__13272__13277);
      if(cljs.core.truth_(temp__3698__auto____13292)) {
        var G__13272__13293 = temp__3698__auto____13292;
        var G__13302 = cljs.core.first.call(null, G__13272__13293);
        var G__13303 = G__13272__13293;
        obj__13275 = G__13302;
        G__13272__13277 = G__13303;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__13271)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__13314 = cljs.core.first.call(null, objs);
  var G__13315__13316 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__13315__13316)) {
    var obj__13317 = cljs.core.first.call(null, G__13315__13316);
    var G__13315__13318 = G__13315__13316;
    while(true) {
      if(cljs.core.truth_(obj__13317 === first_obj__13314)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__13319__13324 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__13317, opts));
      if(cljs.core.truth_(G__13319__13324)) {
        var string__13325 = cljs.core.first.call(null, G__13319__13324);
        var G__13319__13326 = G__13319__13324;
        while(true) {
          cljs.core.string_print.call(null, string__13325);
          var temp__3698__auto____13328 = cljs.core.next.call(null, G__13319__13326);
          if(cljs.core.truth_(temp__3698__auto____13328)) {
            var G__13319__13331 = temp__3698__auto____13328;
            var G__13351 = cljs.core.first.call(null, G__13319__13331);
            var G__13352 = G__13319__13331;
            string__13325 = G__13351;
            G__13319__13326 = G__13352;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____13335 = cljs.core.next.call(null, G__13315__13318);
      if(cljs.core.truth_(temp__3698__auto____13335)) {
        var G__13315__13336 = temp__3698__auto____13335;
        var G__13363 = cljs.core.first.call(null, G__13315__13336);
        var G__13365 = G__13315__13336;
        obj__13317 = G__13363;
        G__13315__13318 = G__13365;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.newline = function newline(opts) {
  cljs.core.string_print.call(null, "\n");
  if(cljs.core.truth_(cljs.core.get.call(null, opts, "\ufdd0'flush-on-newline"))) {
    return cljs.core.flush.call(null)
  }else {
    return null
  }
};
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = function pr_opts() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var pr_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr_str__delegate.call(this, objs)
  };
  pr_str.cljs$lang$maxFixedArity = 0;
  pr_str.cljs$lang$applyTo = function(arglist__13386) {
    var objs = cljs.core.seq(arglist__13386);
    return pr_str__delegate.call(this, objs)
  };
  return pr_str
}();
cljs.core.pr = function() {
  var pr__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr__delegate.call(this, objs)
  };
  pr.cljs$lang$maxFixedArity = 0;
  pr.cljs$lang$applyTo = function(arglist__13388) {
    var objs = cljs.core.seq(arglist__13388);
    return pr__delegate.call(this, objs)
  };
  return pr
}();
cljs.core.print = function() {
  var cljs_core_print__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var cljs_core_print = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return cljs_core_print__delegate.call(this, objs)
  };
  cljs_core_print.cljs$lang$maxFixedArity = 0;
  cljs_core_print.cljs$lang$applyTo = function(arglist__13396) {
    var objs = cljs.core.seq(arglist__13396);
    return cljs_core_print__delegate.call(this, objs)
  };
  return cljs_core_print
}();
cljs.core.println = function() {
  var println__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var println = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println__delegate.call(this, objs)
  };
  println.cljs$lang$maxFixedArity = 0;
  println.cljs$lang$applyTo = function(arglist__13405) {
    var objs = cljs.core.seq(arglist__13405);
    return println__delegate.call(this, objs)
  };
  return println
}();
cljs.core.prn = function() {
  var prn__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var prn = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn__delegate.call(this, objs)
  };
  prn.cljs$lang$maxFixedArity = 0;
  prn.cljs$lang$applyTo = function(arglist__13417) {
    var objs = cljs.core.seq(arglist__13417);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__13436 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__13436, "{", ", ", "}", opts, coll)
};
cljs.core.IPrintable["number"] = true;
cljs.core._pr_seq["number"] = function(n, opts) {
  return cljs.core.list.call(null, cljs.core.str.call(null, n))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["boolean"] = true;
cljs.core._pr_seq["boolean"] = function(bool, opts) {
  return cljs.core.list.call(null, cljs.core.str.call(null, bool))
};
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.IPrintable["string"] = true;
cljs.core._pr_seq["string"] = function(obj, opts) {
  if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, obj))) {
    return cljs.core.list.call(null, cljs.core.str.call(null, ":", function() {
      var temp__3698__auto____13472 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____13472)) {
        var nspc__13473 = temp__3698__auto____13472;
        return cljs.core.str.call(null, nspc__13473, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____13477 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____13477)) {
          var nspc__13479 = temp__3698__auto____13477;
          return cljs.core.str.call(null, nspc__13479, "/")
        }else {
          return null
        }
      }(), cljs.core.name.call(null, obj)))
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.list.call(null, cljs.core.truth_("\ufdd0'readably".call(null, opts)) ? goog.string.quote.call(null, obj) : obj)
      }else {
        return null
      }
    }
  }
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["array"] = true;
cljs.core._pr_seq["array"] = function(a, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", opts, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.list.call(null, "()")
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__13534 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__13534, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = function(this$) {
  var this__13560 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__13561 = this;
  var G__13562__13563 = cljs.core.seq.call(null, this__13561.watches);
  if(cljs.core.truth_(G__13562__13563)) {
    var G__13566__13568 = cljs.core.first.call(null, G__13562__13563);
    var vec__13567__13569 = G__13566__13568;
    var key__13570 = cljs.core.nth.call(null, vec__13567__13569, 0, null);
    var f__13571 = cljs.core.nth.call(null, vec__13567__13569, 1, null);
    var G__13562__13572 = G__13562__13563;
    var G__13566__13574 = G__13566__13568;
    var G__13562__13575 = G__13562__13572;
    while(true) {
      var vec__13577__13578 = G__13566__13574;
      var key__13580 = cljs.core.nth.call(null, vec__13577__13578, 0, null);
      var f__13581 = cljs.core.nth.call(null, vec__13577__13578, 1, null);
      var G__13562__13582 = G__13562__13575;
      f__13581.call(null, key__13580, this$, oldval, newval);
      var temp__3698__auto____13583 = cljs.core.next.call(null, G__13562__13582);
      if(cljs.core.truth_(temp__3698__auto____13583)) {
        var G__13562__13621 = temp__3698__auto____13583;
        var G__13824 = cljs.core.first.call(null, G__13562__13621);
        var G__13825 = G__13562__13621;
        G__13566__13574 = G__13824;
        G__13562__13575 = G__13825;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = function(this$, key, f) {
  var this__13628 = this;
  return this$.watches = cljs.core.assoc.call(null, this__13628.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__13766 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__13766.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__13770 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__13770.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__13773 = this;
  return this__13773.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__13775 = this;
  return this__13775.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__13783 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__13844 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__13845 = function() {
    var G__13847__delegate = function(x, p__13828) {
      var map__13829__13830 = p__13828;
      var map__13829__13832 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__13829__13830)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__13829__13830) : map__13829__13830;
      var validator__13833 = cljs.core.get.call(null, map__13829__13832, "\ufdd0'validator");
      var meta__13836 = cljs.core.get.call(null, map__13829__13832, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__13836, validator__13833, null)
    };
    var G__13847 = function(x, var_args) {
      var p__13828 = null;
      if(goog.isDef(var_args)) {
        p__13828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__13847__delegate.call(this, x, p__13828)
    };
    G__13847.cljs$lang$maxFixedArity = 1;
    G__13847.cljs$lang$applyTo = function(arglist__13850) {
      var x = cljs.core.first(arglist__13850);
      var p__13828 = cljs.core.rest(arglist__13850);
      return G__13847__delegate.call(this, x, p__13828)
    };
    return G__13847
  }();
  atom = function(x, var_args) {
    var p__13828 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__13844.call(this, x);
      default:
        return atom__13845.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__13845.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____13851 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____13851)) {
    var validate__13852 = temp__3698__auto____13851;
    if(cljs.core.truth_(validate__13852.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3061)))));
    }
  }else {
  }
  var old_value__13858 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__13858, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___13878 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___13879 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___13880 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___13881 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___13882 = function() {
    var G__13890__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__13890 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__13890__delegate.call(this, a, f, x, y, z, more)
    };
    G__13890.cljs$lang$maxFixedArity = 5;
    G__13890.cljs$lang$applyTo = function(arglist__13891) {
      var a = cljs.core.first(arglist__13891);
      var f = cljs.core.first(cljs.core.next(arglist__13891));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13891)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13891))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13891)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13891)))));
      return G__13890__delegate.call(this, a, f, x, y, z, more)
    };
    return G__13890
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___13878.call(this, a, f);
      case 3:
        return swap_BANG___13879.call(this, a, f, x);
      case 4:
        return swap_BANG___13880.call(this, a, f, x, y);
      case 5:
        return swap_BANG___13881.call(this, a, f, x, y, z);
      default:
        return swap_BANG___13882.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___13882.cljs$lang$applyTo;
  return swap_BANG_
}();
cljs.core.compare_and_set_BANG_ = function compare_and_set_BANG_(a, oldval, newval) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, a.state, oldval))) {
    cljs.core.reset_BANG_.call(null, a, newval);
    return true
  }else {
    return false
  }
};
cljs.core.deref = function deref(o) {
  return cljs.core._deref.call(null, o)
};
cljs.core.set_validator_BANG_ = function set_validator_BANG_(iref, val) {
  return iref.validator = val
};
cljs.core.get_validator = function get_validator(iref) {
  return iref.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var alter_meta_BANG___delegate = function(iref, f, args) {
    return iref.meta = cljs.core.apply.call(null, f, iref.meta, args)
  };
  var alter_meta_BANG_ = function(iref, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__13899) {
    var iref = cljs.core.first(arglist__13899);
    var f = cljs.core.first(cljs.core.next(arglist__13899));
    var args = cljs.core.rest(cljs.core.next(arglist__13899));
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  return alter_meta_BANG_
}();
cljs.core.reset_meta_BANG_ = function reset_meta_BANG_(iref, m) {
  return iref.meta = m
};
cljs.core.add_watch = function add_watch(iref, key, f) {
  return cljs.core._add_watch.call(null, iref, key, f)
};
cljs.core.remove_watch = function remove_watch(iref, key) {
  return cljs.core._remove_watch.call(null, iref, key)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var gensym = null;
  var gensym__13904 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__13905 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__13904.call(this);
      case 1:
        return gensym__13905.call(this, prefix_string)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return gensym
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(f, state) {
  this.f = f;
  this.state = state
};
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = function(d) {
  var this__13909 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__13909.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__13910 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__13910.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__13910.state, this__13910.f)
  }
  return cljs.core.deref.call(null, this__13910.state)
};
cljs.core.Delay;
cljs.core.delay = function() {
  var delay__delegate = function(body) {
    return new cljs.core.Delay(function() {
      return cljs.core.apply.call(null, cljs.core.identity, body)
    }, cljs.core.atom.call(null, null))
  };
  var delay = function(var_args) {
    var body = null;
    if(goog.isDef(var_args)) {
      body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return delay__delegate.call(this, body)
  };
  delay.cljs$lang$maxFixedArity = 0;
  delay.cljs$lang$applyTo = function(arglist__13918) {
    var body = cljs.core.seq(arglist__13918);
    return delay__delegate.call(this, body)
  };
  return delay
}();
cljs.core.delay_QMARK_ = function delay_QMARK_(x) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, x)
};
cljs.core.force = function force(x) {
  if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null, x))) {
    return cljs.core.deref.call(null, x)
  }else {
    return x
  }
};
cljs.core.realized_QMARK_ = function realized_QMARK_(d) {
  return cljs.core._realized_QMARK_.call(null, d)
};
cljs.core.js__GT_clj = function() {
  var js__GT_clj__delegate = function(x, options) {
    var map__13928__13929 = options;
    var map__13928__13930 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__13928__13929)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__13928__13929) : map__13928__13929;
    var keywordize_keys__13931 = cljs.core.get.call(null, map__13928__13930, "\ufdd0'keywordize-keys");
    var keyfn__13932 = cljs.core.truth_(keywordize_keys__13931) ? cljs.core.keyword : cljs.core.str;
    var f__13941 = function thisfn(x) {
      if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null, x))) {
        return cljs.core.doall.call(null, cljs.core.map.call(null, thisfn, x))
      }else {
        if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null, x))) {
          return cljs.core.into.call(null, cljs.core.empty.call(null, x), cljs.core.map.call(null, thisfn, x))
        }else {
          if(cljs.core.truth_(goog.isArray.call(null, x))) {
            return cljs.core.vec.call(null, cljs.core.map.call(null, thisfn, x))
          }else {
            if(cljs.core.truth_(goog.isObject.call(null, x))) {
              return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), function() {
                var iter__509__auto____13940 = function iter__13934(s__13935) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__13935__13937 = s__13935;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__13935__13937))) {
                        var k__13938 = cljs.core.first.call(null, s__13935__13937);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__13932.call(null, k__13938), thisfn.call(null, x[k__13938])]), iter__13934.call(null, cljs.core.rest.call(null, s__13935__13937)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__509__auto____13940.call(null, cljs.core.js_keys.call(null, x))
              }())
            }else {
              if(cljs.core.truth_("\ufdd0'else")) {
                return x
              }else {
                return null
              }
            }
          }
        }
      }
    };
    return f__13941.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__13952) {
    var x = cljs.core.first(arglist__13952);
    var options = cljs.core.rest(arglist__13952);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__13959 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__14002__delegate = function(args) {
      var temp__3695__auto____13962 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__13959), args);
      if(cljs.core.truth_(temp__3695__auto____13962)) {
        var v__13963 = temp__3695__auto____13962;
        return v__13963
      }else {
        var ret__13967 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__13959, cljs.core.assoc, args, ret__13967);
        return ret__13967
      }
    };
    var G__14002 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__14002__delegate.call(this, args)
    };
    G__14002.cljs$lang$maxFixedArity = 0;
    G__14002.cljs$lang$applyTo = function(arglist__14005) {
      var args = cljs.core.seq(arglist__14005);
      return G__14002__delegate.call(this, args)
    };
    return G__14002
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__14015 = function(f) {
    while(true) {
      var ret__14007 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__14007))) {
        var G__14021 = ret__14007;
        f = G__14021;
        continue
      }else {
        return ret__14007
      }
      break
    }
  };
  var trampoline__14016 = function() {
    var G__14022__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__14022 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__14022__delegate.call(this, f, args)
    };
    G__14022.cljs$lang$maxFixedArity = 1;
    G__14022.cljs$lang$applyTo = function(arglist__14024) {
      var f = cljs.core.first(arglist__14024);
      var args = cljs.core.rest(arglist__14024);
      return G__14022__delegate.call(this, f, args)
    };
    return G__14022
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__14015.call(this, f);
      default:
        return trampoline__14016.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__14016.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__14030 = function() {
    return rand.call(null, 1)
  };
  var rand__14031 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__14030.call(this);
      case 1:
        return rand__14031.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return Math.floor(Math.random() * n)
};
cljs.core.rand_nth = function rand_nth(coll) {
  return cljs.core.nth.call(null, coll, cljs.core.rand_int.call(null, cljs.core.count.call(null, coll)))
};
cljs.core.group_by = function group_by(f, coll) {
  return cljs.core.reduce.call(null, function(ret, x) {
    var k__14058 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__14058, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__14058, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___14102 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___14103 = function(h, child, parent) {
    var or__3548__auto____14080 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____14080)) {
      return or__3548__auto____14080
    }else {
      var or__3548__auto____14082 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____14082)) {
        return or__3548__auto____14082
      }else {
        var and__3546__auto____14084 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____14084)) {
          var and__3546__auto____14088 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____14088)) {
            var and__3546__auto____14089 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____14089)) {
              var ret__14090 = true;
              var i__14091 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____14094 = cljs.core.not.call(null, ret__14090);
                  if(cljs.core.truth_(or__3548__auto____14094)) {
                    return or__3548__auto____14094
                  }else {
                    return cljs.core._EQ_.call(null, i__14091, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__14090
                }else {
                  var G__14111 = isa_QMARK_.call(null, h, child.call(null, i__14091), parent.call(null, i__14091));
                  var G__14113 = i__14091 + 1;
                  ret__14090 = G__14111;
                  i__14091 = G__14113;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____14089
            }
          }else {
            return and__3546__auto____14088
          }
        }else {
          return and__3546__auto____14084
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___14102.call(this, h, child);
      case 3:
        return isa_QMARK___14103.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__14125 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__14126 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__14125.call(this, h);
      case 2:
        return parents__14126.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__14132 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__14133 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__14132.call(this, h);
      case 2:
        return ancestors__14133.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__14153 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__14154 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__14153.call(this, h);
      case 2:
        return descendants__14154.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__14173 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3353)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__14174 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3357)))));
    }
    var tp__14167 = "\ufdd0'parents".call(null, h);
    var td__14168 = "\ufdd0'descendants".call(null, h);
    var ta__14169 = "\ufdd0'ancestors".call(null, h);
    var tf__14170 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____14171 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__14167.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__14169.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__14169.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__14167, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__14170.call(null, "\ufdd0'ancestors".call(null, h), tag, td__14168, parent, ta__14169), "\ufdd0'descendants":tf__14170.call(null, "\ufdd0'descendants".call(null, h), parent, ta__14169, tag, td__14168)})
    }();
    if(cljs.core.truth_(or__3548__auto____14171)) {
      return or__3548__auto____14171
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__14173.call(this, h, tag);
      case 3:
        return derive__14174.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__14219 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__14221 = function(h, tag, parent) {
    var parentMap__14190 = "\ufdd0'parents".call(null, h);
    var childsParents__14191 = cljs.core.truth_(parentMap__14190.call(null, tag)) ? cljs.core.disj.call(null, parentMap__14190.call(null, tag), parent) : cljs.core.set([]);
    var newParents__14192 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__14191)) ? cljs.core.assoc.call(null, parentMap__14190, tag, childsParents__14191) : cljs.core.dissoc.call(null, parentMap__14190, tag);
    var deriv_seq__14193 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__14156_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__14156_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__14156_SHARP_), cljs.core.second.call(null, p1__14156_SHARP_)))
    }, cljs.core.seq.call(null, newParents__14192)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__14190.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__14163_SHARP_, p2__14164_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__14163_SHARP_, p2__14164_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__14193))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__14219.call(this, h, tag);
      case 3:
        return underive__14221.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return underive
}();
cljs.core.reset_cache = function reset_cache(method_cache, method_table, cached_hierarchy, hierarchy) {
  cljs.core.swap_BANG_.call(null, method_cache, function(_) {
    return cljs.core.deref.call(null, method_table)
  });
  return cljs.core.swap_BANG_.call(null, cached_hierarchy, function(_) {
    return cljs.core.deref.call(null, hierarchy)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(x, y, prefer_table) {
  var xprefs__14234 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____14237 = cljs.core.truth_(function() {
    var and__3546__auto____14235 = xprefs__14234;
    if(cljs.core.truth_(and__3546__auto____14235)) {
      return xprefs__14234.call(null, y)
    }else {
      return and__3546__auto____14235
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____14237)) {
    return or__3548__auto____14237
  }else {
    var or__3548__auto____14283 = function() {
      var ps__14281 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__14281) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__14281), prefer_table))) {
          }else {
          }
          var G__14291 = cljs.core.rest.call(null, ps__14281);
          ps__14281 = G__14291;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____14283)) {
      return or__3548__auto____14283
    }else {
      var or__3548__auto____14288 = function() {
        var ps__14286 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__14286) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__14286), y, prefer_table))) {
            }else {
            }
            var G__14294 = cljs.core.rest.call(null, ps__14286);
            ps__14286 = G__14294;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____14288)) {
        return or__3548__auto____14288
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____14302 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____14302)) {
    return or__3548__auto____14302
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__14328 = cljs.core.reduce.call(null, function(be, p__14313) {
    var vec__14315__14316 = p__14313;
    var k__14317 = cljs.core.nth.call(null, vec__14315__14316, 0, null);
    var ___14318 = cljs.core.nth.call(null, vec__14315__14316, 1, null);
    var e__14319 = vec__14315__14316;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__14317))) {
      var be2__14326 = cljs.core.truth_(function() {
        var or__3548__auto____14324 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____14324)) {
          return or__3548__auto____14324
        }else {
          return cljs.core.dominates.call(null, k__14317, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__14319 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__14326), k__14317, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__14317, " and ", cljs.core.first.call(null, be2__14326), ", and neither is preferred"));
      }
      return be2__14326
    }else {
      return be
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__14328)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__14328));
      return cljs.core.second.call(null, best_entry__14328)
    }else {
      cljs.core.reset_cache.call(null, method_cache, method_table, cached_hierarchy, hierarchy);
      return find_and_cache_best_method.call(null, name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy)
    }
  }else {
    return null
  }
};
cljs.core.IMultiFn = {};
cljs.core._reset = function _reset(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14337 = mf;
    if(cljs.core.truth_(and__3546__auto____14337)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____14337
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____14341 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14341)) {
        return or__3548__auto____14341
      }else {
        var or__3548__auto____14343 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____14343)) {
          return or__3548__auto____14343
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14344 = mf;
    if(cljs.core.truth_(and__3546__auto____14344)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____14344
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____14346 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14346)) {
        return or__3548__auto____14346
      }else {
        var or__3548__auto____14347 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____14347)) {
          return or__3548__auto____14347
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14350 = mf;
    if(cljs.core.truth_(and__3546__auto____14350)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____14350
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____14351 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14351)) {
        return or__3548__auto____14351
      }else {
        var or__3548__auto____14352 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____14352)) {
          return or__3548__auto____14352
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14355 = mf;
    if(cljs.core.truth_(and__3546__auto____14355)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____14355
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____14357 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14357)) {
        return or__3548__auto____14357
      }else {
        var or__3548__auto____14358 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____14358)) {
          return or__3548__auto____14358
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14360 = mf;
    if(cljs.core.truth_(and__3546__auto____14360)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____14360
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____14361 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14361)) {
        return or__3548__auto____14361
      }else {
        var or__3548__auto____14365 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____14365)) {
          return or__3548__auto____14365
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14464 = mf;
    if(cljs.core.truth_(and__3546__auto____14464)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____14464
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____14465 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14465)) {
        return or__3548__auto____14465
      }else {
        var or__3548__auto____14466 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____14466)) {
          return or__3548__auto____14466
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14467 = mf;
    if(cljs.core.truth_(and__3546__auto____14467)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____14467
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____14468 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14468)) {
        return or__3548__auto____14468
      }else {
        var or__3548__auto____14469 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____14469)) {
          return or__3548__auto____14469
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____14473 = mf;
    if(cljs.core.truth_(and__3546__auto____14473)) {
      return mf.cljs$core$IMultiFn$_dispatch
    }else {
      return and__3546__auto____14473
    }
  }())) {
    return mf.cljs$core$IMultiFn$_dispatch(mf, args)
  }else {
    return function() {
      var or__3548__auto____14475 = cljs.core._dispatch[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____14475)) {
        return or__3548__auto____14475
      }else {
        var or__3548__auto____14476 = cljs.core._dispatch["_"];
        if(cljs.core.truth_(or__3548__auto____14476)) {
          return or__3548__auto____14476
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__14480 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__14481 = cljs.core._get_method.call(null, mf, dispatch_val__14480);
  if(cljs.core.truth_(target_fn__14481)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__14480));
  }
  return cljs.core.apply.call(null, target_fn__14481, args)
};
cljs.core.MultiFn = function(name, dispatch_fn, default_dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  this.name = name;
  this.dispatch_fn = dispatch_fn;
  this.default_dispatch_val = default_dispatch_val;
  this.hierarchy = hierarchy;
  this.method_table = method_table;
  this.prefer_table = prefer_table;
  this.method_cache = method_cache;
  this.cached_hierarchy = cached_hierarchy
};
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = function(this$) {
  var this__14526 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = function(mf) {
  var this__14529 = this;
  cljs.core.swap_BANG_.call(null, this__14529.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__14529.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__14529.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__14529.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__14532 = this;
  cljs.core.swap_BANG_.call(null, this__14532.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__14532.method_cache, this__14532.method_table, this__14532.cached_hierarchy, this__14532.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__14535 = this;
  cljs.core.swap_BANG_.call(null, this__14535.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__14535.method_cache, this__14535.method_table, this__14535.cached_hierarchy, this__14535.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__14604 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__14604.cached_hierarchy), cljs.core.deref.call(null, this__14604.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__14604.method_cache, this__14604.method_table, this__14604.cached_hierarchy, this__14604.hierarchy)
  }
  var temp__3695__auto____14613 = cljs.core.deref.call(null, this__14604.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____14613)) {
    var target_fn__14614 = temp__3695__auto____14613;
    return target_fn__14614
  }else {
    var temp__3695__auto____14615 = cljs.core.find_and_cache_best_method.call(null, this__14604.name, dispatch_val, this__14604.hierarchy, this__14604.method_table, this__14604.prefer_table, this__14604.method_cache, this__14604.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____14615)) {
      var target_fn__14616 = temp__3695__auto____14615;
      return target_fn__14616
    }else {
      return cljs.core.deref.call(null, this__14604.method_table).call(null, this__14604.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__14618 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__14618.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__14618.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__14618.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__14618.method_cache, this__14618.method_table, this__14618.cached_hierarchy, this__14618.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__14622 = this;
  return cljs.core.deref.call(null, this__14622.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__14624 = this;
  return cljs.core.deref.call(null, this__14624.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = function(mf, args) {
  var this__14634 = this;
  return cljs.core.do_dispatch.call(null, mf, this__14634.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__14657__delegate = function(_, args) {
    return cljs.core._dispatch.call(null, this, args)
  };
  var G__14657 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__14657__delegate.call(this, _, args)
  };
  G__14657.cljs$lang$maxFixedArity = 1;
  G__14657.cljs$lang$applyTo = function(arglist__14660) {
    var _ = cljs.core.first(arglist__14660);
    var args = cljs.core.rest(arglist__14660);
    return G__14657__delegate.call(this, _, args)
  };
  return G__14657
}();
cljs.core.MultiFn.prototype.apply = function(_, args) {
  return cljs.core._dispatch.call(null, this, args)
};
cljs.core.remove_all_methods = function remove_all_methods(multifn) {
  return cljs.core._reset.call(null, multifn)
};
cljs.core.remove_method = function remove_method(multifn, dispatch_val) {
  return cljs.core._remove_method.call(null, multifn, dispatch_val)
};
cljs.core.prefer_method = function prefer_method(multifn, dispatch_val_x, dispatch_val_y) {
  return cljs.core._prefer_method.call(null, multifn, dispatch_val_x, dispatch_val_y)
};
cljs.core.methods$ = function methods$(multifn) {
  return cljs.core._methods.call(null, multifn)
};
cljs.core.get_method = function get_method(multifn, dispatch_val) {
  return cljs.core._get_method.call(null, multifn, dispatch_val)
};
cljs.core.prefers = function prefers(multifn) {
  return cljs.core._prefers.call(null, multifn)
};
goog.provide("clojure.string");
goog.require("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
clojure.string.seq_reverse = function seq_reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
clojure.string.reverse = function reverse(s) {
  return s.split("").reverse().join("")
};
clojure.string.replace = function replace(s, match, replacement) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, match))) {
    return s.replace(new RegExp(goog.string.regExpEscape.call(null, match), "g"), replacement)
  }else {
    if(cljs.core.truth_(match.hasOwnProperty("source"))) {
      return s.replace(new RegExp(match.source, "g"), replacement)
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw cljs.core.str.call(null, "Invalid match arg: ", match);
      }else {
        return null
      }
    }
  }
};
clojure.string.replace_first = function replace_first(s, match, replacement) {
  return s.replace(match, replacement)
};
clojure.string.join = function() {
  var join = null;
  var join__14703 = function(coll) {
    return cljs.core.apply.call(null, cljs.core.str, coll)
  };
  var join__14704 = function(separator, coll) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, separator, coll))
  };
  join = function(separator, coll) {
    switch(arguments.length) {
      case 1:
        return join__14703.call(this, separator);
      case 2:
        return join__14704.call(this, separator, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return join
}();
clojure.string.upper_case = function upper_case(s) {
  return s.toUpperCase()
};
clojure.string.lower_case = function lower_case(s) {
  return s.toLowerCase()
};
clojure.string.capitalize = function capitalize(s) {
  if(cljs.core.truth_(cljs.core.count.call(null, s) < 2)) {
    return clojure.string.upper_case.call(null, s)
  }else {
    return cljs.core.str.call(null, clojure.string.upper_case.call(null, cljs.core.subs.call(null, s, 0, 1)), clojure.string.lower_case.call(null, cljs.core.subs.call(null, s, 1)))
  }
};
clojure.string.split = function() {
  var split = null;
  var split__14734 = function(s, re) {
    return cljs.core.vec.call(null, cljs.core.str.call(null, s).split(re))
  };
  var split__14735 = function(s, re, limit) {
    if(cljs.core.truth_(limit < 1)) {
      return cljs.core.vec.call(null, cljs.core.str.call(null, s).split(re))
    }else {
      var s__14722 = s;
      var limit__14723 = limit;
      var parts__14724 = cljs.core.Vector.fromArray([]);
      while(true) {
        if(cljs.core.truth_(cljs.core._EQ_.call(null, limit__14723, 1))) {
          return cljs.core.conj.call(null, parts__14724, s__14722)
        }else {
          var temp__3695__auto____14725 = cljs.core.re_find.call(null, re, s__14722);
          if(cljs.core.truth_(temp__3695__auto____14725)) {
            var m__14726 = temp__3695__auto____14725;
            var index__14727 = s__14722.indexOf(m__14726);
            var G__14739 = s__14722.substring(index__14727 + cljs.core.count.call(null, m__14726));
            var G__14740 = limit__14723 - 1;
            var G__14741 = cljs.core.conj.call(null, parts__14724, s__14722.substring(0, index__14727));
            s__14722 = G__14739;
            limit__14723 = G__14740;
            parts__14724 = G__14741;
            continue
          }else {
            return cljs.core.conj.call(null, parts__14724, s__14722)
          }
        }
        break
      }
    }
  };
  split = function(s, re, limit) {
    switch(arguments.length) {
      case 2:
        return split__14734.call(this, s, re);
      case 3:
        return split__14735.call(this, s, re, limit)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return split
}();
clojure.string.split_lines = function split_lines(s) {
  return clojure.string.split.call(null, s, /\n|\r\n/)
};
clojure.string.trim = function trim(s) {
  return goog.string.trim.call(null, s)
};
clojure.string.triml = function triml(s) {
  return goog.string.trimLeft.call(null, s)
};
clojure.string.trimr = function trimr(s) {
  return goog.string.trimRight.call(null, s)
};
clojure.string.trim_newline = function trim_newline(s) {
  var index__14760 = s.length;
  while(true) {
    if(cljs.core.truth_(index__14760 === 0)) {
      return""
    }else {
      var ch__14761 = cljs.core.get.call(null, s, index__14760 - 1);
      if(cljs.core.truth_(function() {
        var or__3548__auto____14762 = cljs.core._EQ_.call(null, ch__14761, "\n");
        if(cljs.core.truth_(or__3548__auto____14762)) {
          return or__3548__auto____14762
        }else {
          return cljs.core._EQ_.call(null, ch__14761, "\r")
        }
      }())) {
        var G__14765 = index__14760 - 1;
        index__14760 = G__14765;
        continue
      }else {
        return s.substring(0, index__14760)
      }
    }
    break
  }
};
clojure.string.blank_QMARK_ = function blank_QMARK_(s) {
  var s__14767 = cljs.core.str.call(null, s);
  if(cljs.core.truth_(function() {
    var or__3548__auto____14768 = cljs.core.not.call(null, s__14767);
    if(cljs.core.truth_(or__3548__auto____14768)) {
      return or__3548__auto____14768
    }else {
      var or__3548__auto____14770 = cljs.core._EQ_.call(null, "", s__14767);
      if(cljs.core.truth_(or__3548__auto____14770)) {
        return or__3548__auto____14770
      }else {
        return cljs.core.re_matches.call(null, /\s+/, s__14767)
      }
    }
  }())) {
    return true
  }else {
    return false
  }
};
clojure.string.escape = function escape(s, cmap) {
  var buffer__14773 = new goog.string.StringBuffer;
  var length__14775 = s.length;
  var index__14776 = 0;
  while(true) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, length__14775, index__14776))) {
      return buffer__14773.toString()
    }else {
      var ch__14779 = s.charAt(index__14776);
      var temp__3695__auto____14783 = cljs.core.get.call(null, cmap, ch__14779);
      if(cljs.core.truth_(temp__3695__auto____14783)) {
        var replacement__14784 = temp__3695__auto____14783;
        buffer__14773.append(cljs.core.str.call(null, replacement__14784))
      }else {
        buffer__14773.append(ch__14779)
      }
      var G__14792 = index__14776 + 1;
      index__14776 = G__14792;
      continue
    }
    break
  }
};
goog.provide("domina.support");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.events");
var div__5893 = document.createElement("div");
var test_html__5894 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div__5893.innerHTML = test_html__5894;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null, div__5893.firstChild.nodeType, 3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null, div__5893.getElementsByTagName("tbody").length, 0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null, div__5893.getElementsByTagName("link").length, 0);
goog.provide("domina");
goog.require("cljs.core");
goog.require("domina.support");
goog.require("goog.dom.classes");
goog.require("goog.events");
goog.require("goog.dom.xml");
goog.require("goog.dom.forms");
goog.require("goog.dom");
goog.require("goog.string");
goog.require("clojure.string");
goog.require("goog.style");
goog.require("cljs.core");
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__5954 = cljs.core.Vector.fromArray([1, "<select multiple='multiple'>", "</select>"]);
var table_section_wrapper__5955 = cljs.core.Vector.fromArray([1, "<table>", "</table>"]);
var cell_wrapper__5956 = cljs.core.Vector.fromArray([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col", "\ufdd0'default", "tfoot", "caption", "optgroup", "legend", "area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], {"col":cljs.core.Vector.fromArray([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":cljs.core.Vector.fromArray([0, "", ""]), "tfoot":table_section_wrapper__5955, "caption":table_section_wrapper__5955, "optgroup":opt_wrapper__5954, "legend":cljs.core.Vector.fromArray([1, "<fieldset>", "</fieldset>"]), 
"area":cljs.core.Vector.fromArray([1, "<map>", "</map>"]), "td":cell_wrapper__5956, "thead":table_section_wrapper__5955, "th":cell_wrapper__5956, "option":opt_wrapper__5954, "tbody":table_section_wrapper__5955, "tr":cljs.core.Vector.fromArray([2, "<table><tbody>", "</tbody></table>"]), "colgroup":table_section_wrapper__5955});
domina.remove_extraneous_tbody_BANG_ = function remove_extraneous_tbody_BANG_(div, html) {
  var no_tbody_QMARK___5959 = cljs.core.not.call(null, cljs.core.re_find.call(null, domina.re_tbody, html));
  var tbody__5963 = cljs.core.truth_(function() {
    var and__3546__auto____5960 = cljs.core._EQ_.call(null, domina.tag_name, "table");
    if(cljs.core.truth_(and__3546__auto____5960)) {
      return no_tbody_QMARK___5959
    }else {
      return and__3546__auto____5960
    }
  }()) ? function() {
    var and__3546__auto____5961 = div.firstChild;
    if(cljs.core.truth_(and__3546__auto____5961)) {
      return div.firstChild.childNodes
    }else {
      return and__3546__auto____5961
    }
  }() : cljs.core.truth_(function() {
    var and__3546__auto____5962 = cljs.core._EQ_.call(null, domina.start_wrap, "<table>");
    if(cljs.core.truth_(and__3546__auto____5962)) {
      return no_tbody_QMARK___5959
    }else {
      return and__3546__auto____5962
    }
  }()) ? div.childNodes : cljs.core.Vector.fromArray([]);
  var G__5964__5965 = cljs.core.seq.call(null, tbody__5963);
  if(cljs.core.truth_(G__5964__5965)) {
    var child__5966 = cljs.core.first.call(null, G__5964__5965);
    var G__5964__5967 = G__5964__5965;
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____5968 = cljs.core._EQ_.call(null, child__5966.nodeName, "tbody");
        if(cljs.core.truth_(and__3546__auto____5968)) {
          return cljs.core._EQ_.call(null, child__5966.childNodes.length, 0)
        }else {
          return and__3546__auto____5968
        }
      }())) {
        child__5966.parentNode.removeChild(child__5966)
      }else {
      }
      var temp__3698__auto____5969 = cljs.core.next.call(null, G__5964__5967);
      if(cljs.core.truth_(temp__3698__auto____5969)) {
        var G__5964__5970 = temp__3698__auto____5969;
        var G__5973 = cljs.core.first.call(null, G__5964__5970);
        var G__5974 = G__5964__5970;
        child__5966 = G__5973;
        G__5964__5967 = G__5974;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
domina.restore_leading_whitespace_BANG_ = function restore_leading_whitespace_BANG_(div, html) {
  return div.insertBefore(document.createTextNode(cljs.core.first.call(null, cljs.core.re_find.call(null, domina.re_leading_whitespace, html))), div.firstChild)
};
domina.html_to_dom = function html_to_dom(html) {
  var html__5976 = clojure.string.replace.call(null, html, domina.re_xhtml_tag, "<$1></$2>");
  var tag_name__5977 = cljs.core.str.call(null, cljs.core.second.call(null, cljs.core.re_find.call(null, domina.re_tag_name, html__5976))).toLowerCase();
  var vec__5975__5978 = cljs.core.get.call(null, domina.wrap_map, tag_name__5977, "\ufdd0'default".call(null, domina.wrap_map));
  var depth__5979 = cljs.core.nth.call(null, vec__5975__5978, 0, null);
  var start_wrap__5980 = cljs.core.nth.call(null, vec__5975__5978, 1, null);
  var end_wrap__5981 = cljs.core.nth.call(null, vec__5975__5978, 2, null);
  var div__5985 = function() {
    var wrapper__5983 = function() {
      var div__5982 = document.createElement("div");
      div__5982.innerHTML = cljs.core.str.call(null, start_wrap__5980, html__5976, end_wrap__5981);
      return div__5982
    }();
    var level__5984 = depth__5979;
    while(true) {
      if(cljs.core.truth_(level__5984 > 0)) {
        var G__5987 = wrapper__5983.lastChild;
        var G__5988 = level__5984 - 1;
        wrapper__5983 = G__5987;
        level__5984 = G__5988;
        continue
      }else {
        return wrapper__5983
      }
      break
    }
  }();
  if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)) {
    domina.remove_extraneous_tbody_BANG_.call(null, div__5985, html__5976)
  }else {
  }
  if(cljs.core.truth_(function() {
    var and__3546__auto____5986 = cljs.core.not.call(null, domina.support.leading_whitespace_QMARK_);
    if(cljs.core.truth_(and__3546__auto____5986)) {
      return cljs.core.re_find.call(null, domina.re_leading_whitespace, html__5976)
    }else {
      return and__3546__auto____5986
    }
  }())) {
    domina.restore_leading_whitespace_BANG_.call(null, div__5985, html__5976)
  }else {
  }
  return div__5985.childNodes
};
domina.string_to_dom = function string_to_dom(s) {
  if(cljs.core.truth_(cljs.core.re_find.call(null, domina.re_html, s))) {
    return domina.html_to_dom.call(null, s)
  }else {
    return document.createTextNode(s)
  }
};
domina.DomContent = {};
domina.nodes = function nodes(content) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5989 = content;
    if(cljs.core.truth_(and__3546__auto____5989)) {
      return content.domina$DomContent$nodes
    }else {
      return and__3546__auto____5989
    }
  }())) {
    return content.domina$DomContent$nodes(content)
  }else {
    return function() {
      var or__3548__auto____5990 = domina.nodes[goog.typeOf.call(null, content)];
      if(cljs.core.truth_(or__3548__auto____5990)) {
        return or__3548__auto____5990
      }else {
        var or__3548__auto____5991 = domina.nodes["_"];
        if(cljs.core.truth_(or__3548__auto____5991)) {
          return or__3548__auto____5991
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5992 = nodeseq;
    if(cljs.core.truth_(and__3546__auto____5992)) {
      return nodeseq.domina$DomContent$single_node
    }else {
      return and__3546__auto____5992
    }
  }())) {
    return nodeseq.domina$DomContent$single_node(nodeseq)
  }else {
    return function() {
      var or__3548__auto____5993 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(cljs.core.truth_(or__3548__auto____5993)) {
        return or__3548__auto____5993
      }else {
        var or__3548__auto____5994 = domina.single_node["_"];
        if(cljs.core.truth_(or__3548__auto____5994)) {
          return or__3548__auto____5994
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.single-node", nodeseq);
        }
      }
    }().call(null, nodeseq)
  }
};
domina._STAR_debug_STAR_ = true;
domina.log_debug = function log_debug(mesg) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5996 = domina._STAR_debug_STAR_;
    if(cljs.core.truth_(and__3546__auto____5996)) {
      return cljs.core.not.call(null, cljs.core._EQ_.call(null, window.console, undefined))
    }else {
      return and__3546__auto____5996
    }
  }())) {
    return console.log(mesg)
  }else {
    return null
  }
};
domina.by_id = function by_id(id) {
  return goog.dom.getElement.call(null, cljs.core.name.call(null, id))
};
domina.by_class = function by_class(class_name) {
  if(cljs.core.truth_(void 0 === domina.t5998)) {
    domina.t5998 = function(class_name, by_class, __meta) {
      this.class_name = class_name;
      this.by_class = by_class;
      this.__meta = __meta
    };
    domina.t5998.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
      return cljs.core.list.call(null, "domina.t5998")
    };
    domina.t5998.prototype.domina$DomContent$ = true;
    domina.t5998.prototype.domina$DomContent$nodes = function(_) {
      var this__5999 = this;
      return domina.normalize_seq.call(null, goog.dom.getElementsByClass.call(null, cljs.core.name.call(null, this__5999.class_name)))
    };
    domina.t5998.prototype.domina$DomContent$single_node = function(_) {
      var this__6000 = this;
      return domina.normalize_seq.call(null, goog.dom.getElementByClass.call(null, cljs.core.name.call(null, this__6000.class_name)))
    };
    domina.t5998.prototype.cljs$core$IMeta$ = true;
    domina.t5998.prototype.cljs$core$IMeta$_meta = function(_) {
      var this__6001 = this;
      return this__6001.__meta
    };
    domina.t5998.prototype.cljs$core$IWithMeta$ = true;
    domina.t5998.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
      var this__6002 = this;
      return new domina.t5998(this__6002.class_name, this__6002.by_class, __meta)
    };
    domina.t5998
  }else {
  }
  return new domina.t5998(class_name, by_class, null)
};
domina.children = function children(content) {
  return cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__6003_SHARP_) {
    return p1__6003_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__6004_SHARP_, p2__6005_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__6004_SHARP_, p2__6005_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6007_SHARP_, p2__6006_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__6006_SHARP_, p1__6007_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6009_SHARP_, p2__6008_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__6008_SHARP_, p1__6009_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6011_SHARP_, p2__6010_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__6010_SHARP_, p1__6011_SHARP_)
  }, old_content, new_content);
  return old_content
};
domina.detach_BANG_ = function detach_BANG_(content) {
  return cljs.core.doall.call(null, cljs.core.map.call(null, goog.dom.removeNode, domina.nodes.call(null, content)))
};
domina.destroy_BANG_ = function destroy_BANG_(content) {
  return cljs.core.dorun.call(null, cljs.core.map.call(null, goog.dom.removeNode, domina.nodes.call(null, content)))
};
domina.destroy_children_BANG_ = function destroy_children_BANG_(content) {
  cljs.core.dorun.call(null, cljs.core.map.call(null, goog.dom.removeChildren, domina.nodes.call(null, content)));
  return content
};
domina.style = function style(content, name) {
  var s__6012 = goog.style.getStyle.call(null, domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null, s__6012))) {
    return null
  }else {
    return s__6012
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function() {
  var set_style_BANG___delegate = function(content, name, value) {
    var G__6013__6014 = cljs.core.seq.call(null, domina.nodes.call(null, content));
    if(cljs.core.truth_(G__6013__6014)) {
      var n__6015 = cljs.core.first.call(null, G__6013__6014);
      var G__6013__6016 = G__6013__6014;
      while(true) {
        goog.style.setStyle.call(null, n__6015, cljs.core.name.call(null, name), cljs.core.apply.call(null, cljs.core.str, value));
        var temp__3698__auto____6017 = cljs.core.next.call(null, G__6013__6016);
        if(cljs.core.truth_(temp__3698__auto____6017)) {
          var G__6013__6018 = temp__3698__auto____6017;
          var G__6019 = cljs.core.first.call(null, G__6013__6018);
          var G__6020 = G__6013__6018;
          n__6015 = G__6019;
          G__6013__6016 = G__6020;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return content
  };
  var set_style_BANG_ = function(content, name, var_args) {
    var value = null;
    if(goog.isDef(var_args)) {
      value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return set_style_BANG___delegate.call(this, content, name, value)
  };
  set_style_BANG_.cljs$lang$maxFixedArity = 2;
  set_style_BANG_.cljs$lang$applyTo = function(arglist__6021) {
    var content = cljs.core.first(arglist__6021);
    var name = cljs.core.first(cljs.core.next(arglist__6021));
    var value = cljs.core.rest(cljs.core.next(arglist__6021));
    return set_style_BANG___delegate.call(this, content, name, value)
  };
  return set_style_BANG_
}();
domina.set_attr_BANG_ = function() {
  var set_attr_BANG___delegate = function(content, name, value) {
    var G__6022__6023 = cljs.core.seq.call(null, domina.nodes.call(null, content));
    if(cljs.core.truth_(G__6022__6023)) {
      var n__6024 = cljs.core.first.call(null, G__6022__6023);
      var G__6022__6025 = G__6022__6023;
      while(true) {
        n__6024.setAttribute(cljs.core.name.call(null, name), cljs.core.apply.call(null, cljs.core.str, value));
        var temp__3698__auto____6026 = cljs.core.next.call(null, G__6022__6025);
        if(cljs.core.truth_(temp__3698__auto____6026)) {
          var G__6022__6027 = temp__3698__auto____6026;
          var G__6028 = cljs.core.first.call(null, G__6022__6027);
          var G__6029 = G__6022__6027;
          n__6024 = G__6028;
          G__6022__6025 = G__6029;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return content
  };
  var set_attr_BANG_ = function(content, name, var_args) {
    var value = null;
    if(goog.isDef(var_args)) {
      value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return set_attr_BANG___delegate.call(this, content, name, value)
  };
  set_attr_BANG_.cljs$lang$maxFixedArity = 2;
  set_attr_BANG_.cljs$lang$applyTo = function(arglist__6030) {
    var content = cljs.core.first(arglist__6030);
    var name = cljs.core.first(cljs.core.next(arglist__6030));
    var value = cljs.core.rest(cljs.core.next(arglist__6030));
    return set_attr_BANG___delegate.call(this, content, name, value)
  };
  return set_attr_BANG_
}();
domina.parse_style_attributes = function parse_style_attributes(style) {
  return cljs.core.reduce.call(null, function(acc, pair) {
    var vec__6031__6032 = pair.split(/\s*:\s*/);
    var k__6033 = cljs.core.nth.call(null, vec__6031__6032, 0, null);
    var v__6034 = cljs.core.nth.call(null, vec__6031__6032, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____6035 = k__6033;
      if(cljs.core.truth_(and__3546__auto____6035)) {
        return v__6034
      }else {
        return and__3546__auto____6035
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__6033.toLowerCase()), v__6034)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  var style__6037 = domina.attr.call(null, content, "style");
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, style__6037))) {
    return domina.parse_style_attributes.call(null, style__6037)
  }else {
    if(cljs.core.truth_(style__6037.cssText)) {
      return domina.parse_style_attributes.call(null, style__6037.cssText)
    }else {
      return null
    }
  }
};
domina.attrs = function attrs(content) {
  var node__6038 = domina.single_node.call(null, content);
  var attrs__6039 = node__6038.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, function(p1__6036_SHARP_) {
    var attr__6040 = attrs__6039.item(p1__6036_SHARP_);
    var value__6041 = attr__6040.nodeValue;
    if(cljs.core.truth_(function() {
      var and__3546__auto____6042 = cljs.core.not_EQ_.call(null, null, value__6041);
      if(cljs.core.truth_(and__3546__auto____6042)) {
        return cljs.core.not_EQ_.call(null, "", value__6041)
      }else {
        return and__3546__auto____6042
      }
    }())) {
      return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null, attr__6040.nodeName.toLowerCase())], [attr__6040.nodeValue])
    }else {
      return null
    }
  }, cljs.core.range.call(null, attrs__6039.length))))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__6043__6044 = cljs.core.seq.call(null, styles);
  if(cljs.core.truth_(G__6043__6044)) {
    var G__6046__6048 = cljs.core.first.call(null, G__6043__6044);
    var vec__6047__6049 = G__6046__6048;
    var name__6050 = cljs.core.nth.call(null, vec__6047__6049, 0, null);
    var value__6051 = cljs.core.nth.call(null, vec__6047__6049, 1, null);
    var G__6043__6052 = G__6043__6044;
    var G__6046__6053 = G__6046__6048;
    var G__6043__6054 = G__6043__6052;
    while(true) {
      var vec__6055__6056 = G__6046__6053;
      var name__6057 = cljs.core.nth.call(null, vec__6055__6056, 0, null);
      var value__6058 = cljs.core.nth.call(null, vec__6055__6056, 1, null);
      var G__6043__6059 = G__6043__6054;
      domina.set_style_BANG_.call(null, content, name__6057, value__6058);
      var temp__3698__auto____6060 = cljs.core.next.call(null, G__6043__6059);
      if(cljs.core.truth_(temp__3698__auto____6060)) {
        var G__6043__6061 = temp__3698__auto____6060;
        var G__6063 = cljs.core.first.call(null, G__6043__6061);
        var G__6064 = G__6043__6061;
        G__6046__6053 = G__6063;
        G__6043__6054 = G__6064;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.set_attrs_BANG_ = function set_attrs_BANG_(content, attrs) {
  var G__6065__6066 = cljs.core.seq.call(null, attrs);
  if(cljs.core.truth_(G__6065__6066)) {
    var G__6068__6070 = cljs.core.first.call(null, G__6065__6066);
    var vec__6069__6071 = G__6068__6070;
    var name__6072 = cljs.core.nth.call(null, vec__6069__6071, 0, null);
    var value__6073 = cljs.core.nth.call(null, vec__6069__6071, 1, null);
    var G__6065__6074 = G__6065__6066;
    var G__6068__6075 = G__6068__6070;
    var G__6065__6076 = G__6065__6074;
    while(true) {
      var vec__6077__6078 = G__6068__6075;
      var name__6079 = cljs.core.nth.call(null, vec__6077__6078, 0, null);
      var value__6080 = cljs.core.nth.call(null, vec__6077__6078, 1, null);
      var G__6065__6081 = G__6065__6076;
      domina.set_attr_BANG_.call(null, content, name__6079, value__6080);
      var temp__3698__auto____6082 = cljs.core.next.call(null, G__6065__6081);
      if(cljs.core.truth_(temp__3698__auto____6082)) {
        var G__6065__6083 = temp__3698__auto____6082;
        var G__6084 = cljs.core.first.call(null, G__6065__6083);
        var G__6085 = G__6065__6083;
        G__6068__6075 = G__6084;
        G__6065__6076 = G__6085;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.has_class_QMARK_ = function has_class_QMARK_(content, class$) {
  return goog.dom.classes.has.call(null, domina.single_node.call(null, content), class$)
};
domina.add_class_BANG_ = function add_class_BANG_(content, class$) {
  var G__6087__6088 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__6087__6088)) {
    var node__6089 = cljs.core.first.call(null, G__6087__6088);
    var G__6087__6090 = G__6087__6088;
    while(true) {
      goog.dom.classes.add.call(null, node__6089, class$);
      var temp__3698__auto____6091 = cljs.core.next.call(null, G__6087__6090);
      if(cljs.core.truth_(temp__3698__auto____6091)) {
        var G__6087__6092 = temp__3698__auto____6091;
        var G__6093 = cljs.core.first.call(null, G__6087__6092);
        var G__6094 = G__6087__6092;
        node__6089 = G__6093;
        G__6087__6090 = G__6094;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.remove_class_BANG_ = function remove_class_BANG_(content, class$) {
  var G__6095__6096 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__6095__6096)) {
    var node__6097 = cljs.core.first.call(null, G__6095__6096);
    var G__6095__6098 = G__6095__6096;
    while(true) {
      goog.dom.classes.remove.call(null, node__6097, class$);
      var temp__3698__auto____6099 = cljs.core.next.call(null, G__6095__6098);
      if(cljs.core.truth_(temp__3698__auto____6099)) {
        var G__6095__6100 = temp__3698__auto____6099;
        var G__6101 = cljs.core.first.call(null, G__6095__6100);
        var G__6102 = G__6095__6100;
        node__6097 = G__6101;
        G__6095__6098 = G__6102;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.classes = function classes(content) {
  return cljs.core.seq.call(null, goog.dom.classes.get.call(null, domina.single_node.call(null, content)))
};
domina.text = function() {
  var text = null;
  var text__6103 = function(content) {
    return text.call(null, content, true)
  };
  var text__6104 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node.call(null, content)))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node.call(null, content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__6103.call(this, content);
      case 2:
        return text__6104.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__6106__6107 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__6106__6107)) {
    var node__6108 = cljs.core.first.call(null, G__6106__6107);
    var G__6106__6109 = G__6106__6107;
    while(true) {
      goog.dom.setTextContent.call(null, node__6108, value);
      var temp__3698__auto____6110 = cljs.core.next.call(null, G__6106__6109);
      if(cljs.core.truth_(temp__3698__auto____6110)) {
        var G__6106__6111 = temp__3698__auto____6110;
        var G__6112 = cljs.core.first.call(null, G__6106__6111);
        var G__6113 = G__6106__6111;
        node__6108 = G__6112;
        G__6106__6109 = G__6113;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.value = function value(content) {
  return goog.dom.forms.getValue.call(null, domina.single_node.call(null, content))
};
domina.set_value_BANG_ = function set_value_BANG_(content, value) {
  var G__6115__6116 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__6115__6116)) {
    var node__6117 = cljs.core.first.call(null, G__6115__6116);
    var G__6115__6118 = G__6115__6116;
    while(true) {
      goog.dom.forms.setValue.call(null, node__6117, value);
      var temp__3698__auto____6119 = cljs.core.next.call(null, G__6115__6118);
      if(cljs.core.truth_(temp__3698__auto____6119)) {
        var G__6115__6120 = temp__3698__auto____6119;
        var G__6121 = cljs.core.first.call(null, G__6115__6120);
        var G__6122 = G__6115__6120;
        node__6117 = G__6121;
        G__6115__6118 = G__6122;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.html = function html(content) {
  return domina.single_node.call(null, content).innerHTML
};
domina.set_html_BANG_ = function set_html_BANG_(content, html_string) {
  var allows_inner_html_QMARK___6126 = cljs.core.not.call(null, cljs.core.re_find.call(null, domina.re_no_inner_html, html_string));
  var leading_whitespace_QMARK___6127 = cljs.core.re_find.call(null, domina.re_leading_whitespace, html_string);
  var tag_name__6128 = cljs.core.str.call(null, cljs.core.second.call(null, cljs.core.re_find.call(null, domina.re_tag_name, html_string))).toLowerCase();
  var special_tag_QMARK___6129 = cljs.core.contains_QMARK_.call(null, domina.wrap_map, tag_name__6128);
  var fallback__6130 = function(p1__6123_SHARP_) {
    return domina.append_BANG_.call(null, domina.destroy_children_BANG_.call(null, content), p1__6123_SHARP_)
  };
  if(cljs.core.truth_(function() {
    var and__3546__auto____6131 = allows_inner_html_QMARK___6126;
    if(cljs.core.truth_(and__3546__auto____6131)) {
      var and__3546__auto____6133 = function() {
        var or__3548__auto____6132 = domina.support.leading_whitespace_QMARK_;
        if(cljs.core.truth_(or__3548__auto____6132)) {
          return or__3548__auto____6132
        }else {
          return cljs.core.not.call(null, leading_whitespace_QMARK___6127)
        }
      }();
      if(cljs.core.truth_(and__3546__auto____6133)) {
        return cljs.core.not.call(null, special_tag_QMARK___6129)
      }else {
        return and__3546__auto____6133
      }
    }else {
      return and__3546__auto____6131
    }
  }())) {
    var value__6134 = clojure.string.replace.call(null, html_string, domina.re_xhtml_tag, "<$1></$2>");
    try {
      var G__6137__6138 = cljs.core.seq.call(null, domina.nodes.call(null, content));
      if(cljs.core.truth_(G__6137__6138)) {
        var node__6139 = cljs.core.first.call(null, G__6137__6138);
        var G__6137__6140 = G__6137__6138;
        while(true) {
          goog.events.removeAll.call(null, node__6139);
          node__6139.innerHTML = value__6134;
          var temp__3698__auto____6141 = cljs.core.next.call(null, G__6137__6140);
          if(cljs.core.truth_(temp__3698__auto____6141)) {
            var G__6137__6142 = temp__3698__auto____6141;
            var G__6143 = cljs.core.first.call(null, G__6137__6142);
            var G__6144 = G__6137__6142;
            node__6139 = G__6143;
            G__6137__6140 = G__6144;
            continue
          }else {
          }
          break
        }
      }else {
      }
    }catch(e6135) {
      if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, domina.Exception, e6135))) {
        var e__6136 = e6135;
        fallback__6130.call(null, value__6134)
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          throw e6135;
        }else {
        }
      }
    }
  }else {
    fallback__6130.call(null, html_string)
  }
  return content
};
domina.apply_with_cloning = function apply_with_cloning(f, parent_content, child_content) {
  var parents__6145 = domina.nodes.call(null, parent_content);
  var children__6146 = domina.nodes.call(null, child_content);
  var first_child__6154 = function() {
    var frag__6147 = document.createDocumentFragment();
    var G__6148__6149 = cljs.core.seq.call(null, children__6146);
    if(cljs.core.truth_(G__6148__6149)) {
      var child__6150 = cljs.core.first.call(null, G__6148__6149);
      var G__6148__6151 = G__6148__6149;
      while(true) {
        frag__6147.appendChild(child__6150);
        var temp__3698__auto____6152 = cljs.core.next.call(null, G__6148__6151);
        if(cljs.core.truth_(temp__3698__auto____6152)) {
          var G__6148__6153 = temp__3698__auto____6152;
          var G__6156 = cljs.core.first.call(null, G__6148__6153);
          var G__6157 = G__6148__6153;
          child__6150 = G__6156;
          G__6148__6151 = G__6157;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return frag__6147
  }();
  var other_children__6155 = cljs.core.doall.call(null, cljs.core.repeatedly.call(null, cljs.core.count.call(null, parents__6145) - 1, function() {
    return first_child__6154.cloneNode(true)
  }));
  if(cljs.core.truth_(cljs.core.seq.call(null, parents__6145))) {
    f.call(null, cljs.core.first.call(null, parents__6145), first_child__6154);
    return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__6124_SHARP_, p2__6125_SHARP_) {
      return f.call(null, p1__6124_SHARP_, p2__6125_SHARP_)
    }, cljs.core.rest.call(null, parents__6145), other_children__6155))
  }else {
    return null
  }
};
domina.lazy_nl_via_item = function() {
  var lazy_nl_via_item = null;
  var lazy_nl_via_item__6158 = function(nl) {
    return lazy_nl_via_item.call(null, nl, 0)
  };
  var lazy_nl_via_item__6159 = function(nl, n) {
    if(cljs.core.truth_(n < nl.length)) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons.call(null, nl.item(n), lazy_nl_via_item.call(null, nl, n + 1))
      })
    }else {
      return null
    }
  };
  lazy_nl_via_item = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_item__6158.call(this, nl);
      case 2:
        return lazy_nl_via_item__6159.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return lazy_nl_via_item
}();
domina.lazy_nl_via_array_ref = function() {
  var lazy_nl_via_array_ref = null;
  var lazy_nl_via_array_ref__6161 = function(nl) {
    return lazy_nl_via_array_ref.call(null, nl, 0)
  };
  var lazy_nl_via_array_ref__6162 = function(nl, n) {
    if(cljs.core.truth_(n < nl.length)) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons.call(null, nl[n], lazy_nl_via_array_ref.call(null, nl, n + 1))
      })
    }else {
      return null
    }
  };
  lazy_nl_via_array_ref = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_array_ref__6161.call(this, nl);
      case 2:
        return lazy_nl_via_array_ref__6162.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return lazy_nl_via_array_ref
}();
domina.lazy_nodelist = function lazy_nodelist(nl) {
  if(cljs.core.truth_(nl.item)) {
    return domina.lazy_nl_via_item.call(null, nl)
  }else {
    return domina.lazy_nl_via_array_ref.call(null, nl)
  }
};
domina.normalize_seq = function normalize_seq(list_thing) {
  if(cljs.core.truth_(function() {
    var x__5944__auto____6164 = list_thing;
    if(cljs.core.truth_(function() {
      var and__3546__auto____6165 = x__5944__auto____6164;
      if(cljs.core.truth_(and__3546__auto____6165)) {
        var and__3546__auto____6166 = x__5944__auto____6164.cljs$core$ISeqable$;
        if(cljs.core.truth_(and__3546__auto____6166)) {
          var and__3546__auto____6167 = x__5944__auto____6164.hasOwnProperty;
          if(cljs.core.truth_(and__3546__auto____6167)) {
            return cljs.core.not.call(null, x__5944__auto____6164.hasOwnProperty("cljs$core$ISeqable$"))
          }else {
            return and__3546__auto____6167
          }
        }else {
          return and__3546__auto____6166
        }
      }else {
        return and__3546__auto____6165
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, x__5944__auto____6164)
    }
  }())) {
    return cljs.core.seq.call(null, list_thing)
  }else {
    if(cljs.core.truth_(list_thing.length)) {
      return domina.lazy_nodelist.call(null, list_thing)
    }else {
      if(cljs.core.truth_("\ufdd0'default")) {
        return cljs.core.cons.call(null, list_thing)
      }else {
        return null
      }
    }
  }
};
domina.DomContent["_"] = true;
domina.nodes["_"] = function(content) {
  if(cljs.core.truth_(function() {
    var x__5944__auto____6168 = content;
    if(cljs.core.truth_(function() {
      var and__3546__auto____6169 = x__5944__auto____6168;
      if(cljs.core.truth_(and__3546__auto____6169)) {
        var and__3546__auto____6170 = x__5944__auto____6168.cljs$core$ISeqable$;
        if(cljs.core.truth_(and__3546__auto____6170)) {
          var and__3546__auto____6171 = x__5944__auto____6168.hasOwnProperty;
          if(cljs.core.truth_(and__3546__auto____6171)) {
            return cljs.core.not.call(null, x__5944__auto____6168.hasOwnProperty("cljs$core$ISeqable$"))
          }else {
            return and__3546__auto____6171
          }
        }else {
          return and__3546__auto____6170
        }
      }else {
        return and__3546__auto____6169
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, x__5944__auto____6168)
    }
  }())) {
    return cljs.core.seq.call(null, content)
  }else {
    if(cljs.core.truth_(content.length)) {
      return domina.lazy_nodelist.call(null, content)
    }else {
      if(cljs.core.truth_("\ufdd0'default")) {
        return cljs.core.cons.call(null, content)
      }else {
        return null
      }
    }
  }
};
domina.single_node["_"] = function(content) {
  if(cljs.core.truth_(function() {
    var x__5944__auto____6172 = content;
    if(cljs.core.truth_(function() {
      var and__3546__auto____6173 = x__5944__auto____6172;
      if(cljs.core.truth_(and__3546__auto____6173)) {
        var and__3546__auto____6174 = x__5944__auto____6172.cljs$core$ISeqable$;
        if(cljs.core.truth_(and__3546__auto____6174)) {
          var and__3546__auto____6175 = x__5944__auto____6172.hasOwnProperty;
          if(cljs.core.truth_(and__3546__auto____6175)) {
            return cljs.core.not.call(null, x__5944__auto____6172.hasOwnProperty("cljs$core$ISeqable$"))
          }else {
            return and__3546__auto____6175
          }
        }else {
          return and__3546__auto____6174
        }
      }else {
        return and__3546__auto____6173
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, x__5944__auto____6172)
    }
  }())) {
    return cljs.core.first.call(null, content)
  }else {
    if(cljs.core.truth_(content.length)) {
      return content.item(0)
    }else {
      if(cljs.core.truth_("\ufdd0'default")) {
        return content
      }else {
        return null
      }
    }
  }
};
domina.DomContent["string"] = true;
domina.nodes["string"] = function(s) {
  return cljs.core.doall.call(null, domina.nodes.call(null, domina.string_to_dom.call(null, s)))
};
domina.single_node["string"] = function(s) {
  return domina.single_node.call(null, domina.string_to_dom.call(null, s))
};
if(cljs.core.truth_(typeof NodeList != "undefined")) {
  NodeList.prototype.cljs$core$ISeqable$ = true;
  NodeList.prototype.cljs$core$ISeqable$_seq = function(nodelist) {
    return domina.lazy_nodelist.call(null, nodelist)
  };
  NodeList.prototype.cljs$core$IIndexed$ = true;
  NodeList.prototype.cljs$core$IIndexed$_nth = function() {
    var G__6176 = null;
    var G__6176__6177 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__6176__6178 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__6176 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__6176__6177.call(this, nodelist, n);
        case 3:
          return G__6176__6178.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__6176
  }();
  NodeList.prototype.cljs$core$ICounted$ = true;
  NodeList.prototype.cljs$core$ICounted$_count = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof StaticNodeList != "undefined")) {
  StaticNodeList.prototype.cljs$core$ISeqable$ = true;
  StaticNodeList.prototype.cljs$core$ISeqable$_seq = function(nodelist) {
    return domina.lazy_nodelist.call(null, nodelist)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$ = true;
  StaticNodeList.prototype.cljs$core$IIndexed$_nth = function() {
    var G__6180 = null;
    var G__6180__6181 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__6180__6182 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__6180 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__6180__6181.call(this, nodelist, n);
        case 3:
          return G__6180__6182.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__6180
  }();
  StaticNodeList.prototype.cljs$core$ICounted$ = true;
  StaticNodeList.prototype.cljs$core$ICounted$_count = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof HTMLCollection != "undefined")) {
  HTMLCollection.prototype.cljs$core$ISeqable$ = true;
  HTMLCollection.prototype.cljs$core$ISeqable$_seq = function(coll) {
    return domina.lazy_nodelist.call(null, coll)
  };
  HTMLCollection.prototype.cljs$core$IIndexed$ = true;
  HTMLCollection.prototype.cljs$core$IIndexed$_nth = function() {
    var G__6184 = null;
    var G__6184__6185 = function(coll, n) {
      return coll.item(n)
    };
    var G__6184__6186 = function(coll, n, not_found) {
      if(cljs.core.truth_(coll.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, coll, n)
      }
    };
    G__6184 = function(coll, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__6184__6185.call(this, coll, n);
        case 3:
          return G__6184__6186.call(this, coll, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__6184
  }();
  HTMLCollection.prototype.cljs$core$ICounted$ = true;
  HTMLCollection.prototype.cljs$core$ICounted$_count = function(coll) {
    return coll.length
  }
}else {
}
;goog.provide("domina.xpath");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.dom");
domina.xpath.select_node_STAR_ = function select_node_STAR_(path, node, technique_1, technique_2) {
  var doc__5895 = goog.dom.getOwnerDocument.call(null, node);
  if(cljs.core.truth_(function() {
    var and__3546__auto____5896 = node.selectSingleNode;
    if(cljs.core.truth_(and__3546__auto____5896)) {
      return doc__5895.setProperty
    }else {
      return and__3546__auto____5896
    }
  }())) {
    doc__5895.setProperty("SelectionLanguage", "XPath");
    return technique_1.call(null, node, path)
  }else {
    if(cljs.core.truth_(doc__5895.evaluate)) {
      return technique_2.call(null, null, doc__5895, node, path)
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw new Error("Could not find XPath support in this browser.");
      }else {
        return null
      }
    }
  }
};
domina.xpath.select_node = function select_node(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectSingleNode(expr)
  }, function(resolver, doc, node, expr) {
    var result__5903 = doc.evaluate(expr, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__5903.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__5904 = doc.evaluate(expr, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__5905 = result__5904.snapshotLength;
    var i__5906 = 0;
    var acc__5907 = null;
    while(true) {
      if(cljs.core.truth_(i__5906 < num_results__5905)) {
        var G__5908 = i__5906 + 1;
        var G__5909 = cljs.core.cons.call(null, result__5904.snapshotItem(i__5906), acc__5907);
        i__5906 = G__5908;
        acc__5907 = G__5909;
        continue
      }else {
        return acc__5907
      }
      break
    }
  })
};
domina.xpath.root_element = function root_element() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.xpath.xpath = function() {
  var xpath = null;
  var xpath__5915 = function(expr) {
    return xpath.call(null, domina.xpath.root_element.call(null), expr)
  };
  var xpath__5917 = function(base, expr) {
    if(cljs.core.truth_(void 0 === domina.xpath.t5910)) {
      domina.xpath.t5910 = function(expr, base, xpath, __meta) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath;
        this.__meta = __meta
      };
      domina.xpath.t5910.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
        return cljs.core.list.call(null, "domina.xpath.t5910")
      };
      domina.xpath.t5910.prototype.domina$DomContent$ = true;
      domina.xpath.t5910.prototype.domina$DomContent$nodes = function(_) {
        var this__5911 = this;
        return cljs.core.mapcat.call(null, cljs.core.partial.call(null, domina.xpath.select_nodes, this__5911.expr), domina.nodes.call(null, this__5911.base))
      };
      domina.xpath.t5910.prototype.domina$DomContent$single_node = function(_) {
        var this__5912 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.partial.call(null, domina.xpath.select_node, this__5912.expr), domina.nodes.call(null, this__5912.base))))
      };
      domina.xpath.t5910.prototype.cljs$core$IMeta$ = true;
      domina.xpath.t5910.prototype.cljs$core$IMeta$_meta = function(_) {
        var this__5913 = this;
        return this__5913.__meta
      };
      domina.xpath.t5910.prototype.cljs$core$IWithMeta$ = true;
      domina.xpath.t5910.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
        var this__5914 = this;
        return new domina.xpath.t5910(this__5914.expr, this__5914.base, this__5914.xpath, __meta)
      };
      domina.xpath.t5910
    }else {
    }
    return new domina.xpath.t5910(expr, base, xpath, null)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__5915.call(this, base);
      case 2:
        return xpath__5917.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return xpath
}();
goog.provide("domina.events");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.events");
domina.events.child_of_QMARK_ = function child_of_QMARK_(parent, child) {
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, child))) {
      return false
    }else {
      if(cljs.core.truth_(parent === child)) {
        return false
      }else {
        if(cljs.core.truth_(child.parentNode === parent)) {
          return true
        }else {
          if(cljs.core.truth_("\ufdd0'else")) {
            var G__5807 = parent;
            var G__5808 = child.parentNode;
            parent = G__5807;
            child = G__5808;
            continue
          }else {
            return null
          }
        }
      }
    }
    break
  }
};
domina.events.mouse_enter_leave = function mouse_enter_leave(func) {
  return function(e) {
    var re__5813 = e.relatedTarget;
    var this$__5814 = e.currentTarget;
    if(cljs.core.truth_(function() {
      var and__3546__auto____5815 = cljs.core.not.call(null, re__5813 === this$__5814);
      if(cljs.core.truth_(and__3546__auto____5815)) {
        return cljs.core.not.call(null, domina.events.child_of_QMARK_.call(null, this$__5814, re__5813))
      }else {
        return and__3546__auto____5815
      }
    }())) {
      return func.call(null, e)
    }else {
      return null
    }
  }
};
domina.events.gen_wrapper = function gen_wrapper(event_key, wrapped_key, wrapper_func) {
  var obj__5819 = new Object;
  var wevent__5820 = cljs.core.name.call(null, wrapped_key);
  var event__5821 = cljs.core.name.call(null, event_key);
  obj__5819.wrapped_event = wevent__5820;
  obj__5819.event = event__5821;
  obj__5819.listen = function(elm, func, capture, opt_scope, opt_handler) {
    var callback__5822 = wrapper_func.call(null, func);
    callback__5822.listen = func;
    callback__5822.scope = opt_scope;
    callback__5822.event = event__5821;
    callback__5822.capture = capture;
    if(cljs.core.truth_(domina.events.op_handler)) {
      return opt_handler.listen(elm, wevent__5820, callback__5822, capture)
    }else {
      return goog.events.listen.call(null, elm, wevent__5820, callback__5822, capture)
    }
  };
  obj__5819.unlisten = function(elm, func, capture, opt_scope, opt_handler) {
    var listeners__5833 = cljs.core.truth_(cljs.core._EQ_.call(null, capture, undefined)) ? cljs.core.concat.call(null, goog.events.getListeners.call(null, elm, wevent__5820, false), goog.events.getListeners.call(null, elm, wevent__5820, true)) : goog.events.getListeners.call(null, elm, wevent__5820, capture);
    return cljs.core.dorun.call(null, cljs.core.map.call(null, function(obj) {
      var listener__5836 = obj.listener;
      var lfunc__5838 = listener__5836.listen;
      var scope__5840 = listener__5836.scope;
      var capture__5842 = listener__5836.capture;
      if(cljs.core.truth_(function() {
        var and__3546__auto____5844 = function() {
          var or__3548__auto____5843 = cljs.core.not.call(null, func);
          if(cljs.core.truth_(or__3548__auto____5843)) {
            return or__3548__auto____5843
          }else {
            return cljs.core._EQ_.call(null, lfunc__5838, func)
          }
        }();
        if(cljs.core.truth_(and__3546__auto____5844)) {
          var or__3548__auto____5845 = cljs.core.not.call(null, opt_scope);
          if(cljs.core.truth_(or__3548__auto____5845)) {
            return or__3548__auto____5845
          }else {
            return cljs.core._EQ_.call(null, scope__5840, opt_scope)
          }
        }else {
          return and__3546__auto____5844
        }
      }())) {
        if(cljs.core.truth_(opt_handler)) {
          return opt_handler.unlisten(elm, wevent__5820, listener__5836, capture__5842)
        }else {
          return goog.events.unlisten.call(null, elm, wevent__5820, listener__5836, capture__5842)
        }
      }else {
        return null
      }
    }, listeners__5833))
  };
  return obj__5819
};
domina.events.wrapper_register = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
domina.events.reg_event_wrapper_BANG_ = function reg_event_wrapper_BANG_(event_key, wrapped_key, wrapper_func) {
  return cljs.core.swap_BANG_.call(null, domina.events.wrapper_register, cljs.core.assoc, event_key, domina.events.gen_wrapper.call(null, event_key, wrapped_key, wrapper_func))
};
domina.events.listen_BANG_ = function() {
  var listen_BANG_ = null;
  var listen_BANG___5853 = function(nds, event, func) {
    return listen_BANG_.call(null, nds, event, func, false)
  };
  var listen_BANG___5854 = function(nds, event, func, capture) {
    var wrapper__5846 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
    var G__5847__5848 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__5847__5848)) {
      var node__5849 = cljs.core.first.call(null, G__5847__5848);
      var G__5847__5850 = G__5847__5848;
      while(true) {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__5846))) {
          goog.events.listen.call(null, node__5849, cljs.core.name.call(null, event), func, capture)
        }else {
          goog.events.listenWithWrapper.call(null, node__5849, wrapper__5846, func, capture)
        }
        var temp__3698__auto____5851 = cljs.core.next.call(null, G__5847__5850);
        if(cljs.core.truth_(temp__3698__auto____5851)) {
          var G__5847__5852 = temp__3698__auto____5851;
          var G__5856 = cljs.core.first.call(null, G__5847__5852);
          var G__5857 = G__5847__5852;
          node__5849 = G__5856;
          G__5847__5850 = G__5857;
          continue
        }else {
          return null
        }
        break
      }
    }else {
      return null
    }
  };
  listen_BANG_ = function(nds, event, func, capture) {
    switch(arguments.length) {
      case 3:
        return listen_BANG___5853.call(this, nds, event, func);
      case 4:
        return listen_BANG___5854.call(this, nds, event, func, capture)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return listen_BANG_
}();
domina.events.unlisten_BANG_ = function() {
  var unlisten_BANG_ = null;
  var unlisten_BANG___5866 = function(nds, event, func) {
    return unlisten_BANG_.call(null, nds, event, func, false)
  };
  var unlisten_BANG___5867 = function(nds, event, func, capture) {
    var wrapper__5859 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
    var G__5860__5861 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__5860__5861)) {
      var node__5862 = cljs.core.first.call(null, G__5860__5861);
      var G__5860__5863 = G__5860__5861;
      while(true) {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__5859))) {
          goog.events.unlisten.call(null, node__5862, cljs.core.name.call(null, event), func, capture)
        }else {
          wrapper__5859.unlisten(node__5862, func, capture)
        }
        var temp__3698__auto____5864 = cljs.core.next.call(null, G__5860__5863);
        if(cljs.core.truth_(temp__3698__auto____5864)) {
          var G__5860__5865 = temp__3698__auto____5864;
          var G__5869 = cljs.core.first.call(null, G__5860__5865);
          var G__5870 = G__5860__5865;
          node__5862 = G__5869;
          G__5860__5863 = G__5870;
          continue
        }else {
          return null
        }
        break
      }
    }else {
      return null
    }
  };
  unlisten_BANG_ = function(nds, event, func, capture) {
    switch(arguments.length) {
      case 3:
        return unlisten_BANG___5866.call(this, nds, event, func);
      case 4:
        return unlisten_BANG___5867.call(this, nds, event, func, capture)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return unlisten_BANG_
}();
domina.events.remove_listeners_BANG_ = function() {
  var remove_listeners_BANG___delegate = function(nds, event_list) {
    var G__5871__5872 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__5871__5872)) {
      var node__5873 = cljs.core.first.call(null, G__5871__5872);
      var G__5871__5874 = G__5871__5872;
      while(true) {
        var map_func__5876 = function(node__5873, G__5871__5874) {
          return function(p1__5858_SHARP_) {
            var wrapper__5875 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, p1__5858_SHARP_);
            if(cljs.core.truth_(wrapper__5875)) {
              return wrapper__5875.unlisten(node__5873)
            }else {
              return goog.events.removeAll.call(null, node__5873, cljs.core.name.call(null, p1__5858_SHARP_))
            }
          }
        }(node__5873, G__5871__5874);
        cljs.core.doall.call(null, cljs.core.map.call(null, map_func__5876, event_list));
        var temp__3698__auto____5877 = cljs.core.next.call(null, G__5871__5874);
        if(cljs.core.truth_(temp__3698__auto____5877)) {
          var G__5871__5878 = temp__3698__auto____5877;
          var G__5879 = cljs.core.first.call(null, G__5871__5878);
          var G__5880 = G__5871__5878;
          node__5873 = G__5879;
          G__5871__5874 = G__5880;
          continue
        }else {
          return null
        }
        break
      }
    }else {
      return null
    }
  };
  var remove_listeners_BANG_ = function(nds, var_args) {
    var event_list = null;
    if(goog.isDef(var_args)) {
      event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return remove_listeners_BANG___delegate.call(this, nds, event_list)
  };
  remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
  remove_listeners_BANG_.cljs$lang$applyTo = function(arglist__5881) {
    var nds = cljs.core.first(arglist__5881);
    var event_list = cljs.core.rest(arglist__5881);
    return remove_listeners_BANG___delegate.call(this, nds, event_list)
  };
  return remove_listeners_BANG_
}();
domina.events.fire_listeners_BANG_ = function fire_listeners_BANG_(nds, event, capture, event_map) {
  var wrapper__5882 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
  var nevent__5883 = cljs.core.truth_(wrapper__5882) ? wrapper__5882.wrapped_event : cljs.core.name.call(null, event);
  var event_obj__5884 = new goog.events.Event(event_map.call(null, "\ufdd0'type"), event_map.call(null, "\ufdd0'target"));
  event_obj__5884.relatedTarget = event_map.call(null, "\ufdd0'related-target");
  var G__5885__5886 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
  if(cljs.core.truth_(G__5885__5886)) {
    var node__5887 = cljs.core.first.call(null, G__5885__5886);
    var G__5885__5888 = G__5885__5886;
    while(true) {
      goog.events.fireListeners.call(null, node__5887, nevent__5883, capture, event_obj__5884);
      var temp__3698__auto____5889 = cljs.core.next.call(null, G__5885__5888);
      if(cljs.core.truth_(temp__3698__auto____5889)) {
        var G__5885__5890 = temp__3698__auto____5889;
        var G__5891 = cljs.core.first.call(null, G__5885__5890);
        var G__5892 = G__5885__5890;
        node__5887 = G__5891;
        G__5885__5888 = G__5892;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
domina.events.reg_event_wrapper_BANG_.call(null, "\ufdd0'mouseenter", "\ufdd0'mouseover", domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null, "\ufdd0'mouseleave", "\ufdd0'mouseout", domina.events.mouse_enter_leave);
goog.provide("domina.css");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.dom.query");
domina.css.root_element = function root_element() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.css.sel = function() {
  var sel = null;
  var sel__5800 = function(expr) {
    return sel.call(null, domina.css.root_element.call(null), expr)
  };
  var sel__5801 = function(base, expr) {
    if(cljs.core.truth_(void 0 === domina.css.t5771)) {
      domina.css.t5771 = function(expr, base, sel, __meta) {
        this.expr = expr;
        this.base = base;
        this.sel = sel;
        this.__meta = __meta
      };
      domina.css.t5771.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
        return cljs.core.list.call(null, "domina.css.t5771")
      };
      domina.css.t5771.prototype.domina$DomContent$ = true;
      domina.css.t5771.prototype.domina$DomContent$nodes = function(_) {
        var this__5794 = this;
        return cljs.core.mapcat.call(null, function(p1__5759_SHARP_) {
          return goog.dom.query.call(null, this__5794.expr, p1__5759_SHARP_)
        }, domina.nodes.call(null, this__5794.base))
      };
      domina.css.t5771.prototype.domina$DomContent$single_node = function(_) {
        var this__5795 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.mapcat.call(null, function(p1__5760_SHARP_) {
          return goog.dom.query.call(null, this__5795.expr, p1__5760_SHARP_)
        }, domina.nodes.call(null, this__5795.base))))
      };
      domina.css.t5771.prototype.cljs$core$IMeta$ = true;
      domina.css.t5771.prototype.cljs$core$IMeta$_meta = function(_) {
        var this__5796 = this;
        return this__5796.__meta
      };
      domina.css.t5771.prototype.cljs$core$IWithMeta$ = true;
      domina.css.t5771.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
        var this__5797 = this;
        return new domina.css.t5771(this__5797.expr, this__5797.base, this__5797.sel, __meta)
      };
      domina.css.t5771
    }else {
    }
    return new domina.css.t5771(expr, base, sel, null)
  };
  sel = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return sel__5800.call(this, base);
      case 2:
        return sel__5801.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sel
}();
