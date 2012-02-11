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
  var or__3548__auto____7217 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____7217)) {
    return or__3548__auto____7217
  }else {
    var or__3548__auto____7218 = p["_"];
    if(cljs.core.truth_(or__3548__auto____7218)) {
      return or__3548__auto____7218
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
  var _invoke__7525 = function(this$) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7294 = this$;
      if(cljs.core.truth_(and__3546__auto____7294)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7294
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$)
    }else {
      return function() {
        var or__3548__auto____7297 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7297)) {
          return or__3548__auto____7297
        }else {
          var or__3548__auto____7300 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7300)) {
            return or__3548__auto____7300
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__7526 = function(this$, a) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7302 = this$;
      if(cljs.core.truth_(and__3546__auto____7302)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7302
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a)
    }else {
      return function() {
        var or__3548__auto____7306 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7306)) {
          return or__3548__auto____7306
        }else {
          var or__3548__auto____7307 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7307)) {
            return or__3548__auto____7307
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__7527 = function(this$, a, b) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7311 = this$;
      if(cljs.core.truth_(and__3546__auto____7311)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7311
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b)
    }else {
      return function() {
        var or__3548__auto____7315 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7315)) {
          return or__3548__auto____7315
        }else {
          var or__3548__auto____7317 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7317)) {
            return or__3548__auto____7317
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__7528 = function(this$, a, b, c) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7323 = this$;
      if(cljs.core.truth_(and__3546__auto____7323)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7323
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c)
    }else {
      return function() {
        var or__3548__auto____7325 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7325)) {
          return or__3548__auto____7325
        }else {
          var or__3548__auto____7329 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7329)) {
            return or__3548__auto____7329
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__7529 = function(this$, a, b, c, d) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7333 = this$;
      if(cljs.core.truth_(and__3546__auto____7333)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7333
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d)
    }else {
      return function() {
        var or__3548__auto____7337 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7337)) {
          return or__3548__auto____7337
        }else {
          var or__3548__auto____7340 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7340)) {
            return or__3548__auto____7340
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__7530 = function(this$, a, b, c, d, e) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7345 = this$;
      if(cljs.core.truth_(and__3546__auto____7345)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7345
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e)
    }else {
      return function() {
        var or__3548__auto____7349 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7349)) {
          return or__3548__auto____7349
        }else {
          var or__3548__auto____7353 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7353)) {
            return or__3548__auto____7353
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__7531 = function(this$, a, b, c, d, e, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7364 = this$;
      if(cljs.core.truth_(and__3546__auto____7364)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7364
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f)
    }else {
      return function() {
        var or__3548__auto____7368 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7368)) {
          return or__3548__auto____7368
        }else {
          var or__3548__auto____7370 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7370)) {
            return or__3548__auto____7370
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__7532 = function(this$, a, b, c, d, e, f, g) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7375 = this$;
      if(cljs.core.truth_(and__3546__auto____7375)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7375
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g)
    }else {
      return function() {
        var or__3548__auto____7381 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7381)) {
          return or__3548__auto____7381
        }else {
          var or__3548__auto____7382 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7382)) {
            return or__3548__auto____7382
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__7533 = function(this$, a, b, c, d, e, f, g, h) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7387 = this$;
      if(cljs.core.truth_(and__3546__auto____7387)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7387
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h)
    }else {
      return function() {
        var or__3548__auto____7392 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7392)) {
          return or__3548__auto____7392
        }else {
          var or__3548__auto____7393 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7393)) {
            return or__3548__auto____7393
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__7534 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7396 = this$;
      if(cljs.core.truth_(and__3546__auto____7396)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7396
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i)
    }else {
      return function() {
        var or__3548__auto____7400 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7400)) {
          return or__3548__auto____7400
        }else {
          var or__3548__auto____7401 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7401)) {
            return or__3548__auto____7401
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__7535 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7404 = this$;
      if(cljs.core.truth_(and__3546__auto____7404)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7404
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      return function() {
        var or__3548__auto____7409 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7409)) {
          return or__3548__auto____7409
        }else {
          var or__3548__auto____7410 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7410)) {
            return or__3548__auto____7410
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__7536 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7414 = this$;
      if(cljs.core.truth_(and__3546__auto____7414)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7414
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      return function() {
        var or__3548__auto____7440 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7440)) {
          return or__3548__auto____7440
        }else {
          var or__3548__auto____7442 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7442)) {
            return or__3548__auto____7442
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__7537 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7445 = this$;
      if(cljs.core.truth_(and__3546__auto____7445)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7445
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      return function() {
        var or__3548__auto____7448 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7448)) {
          return or__3548__auto____7448
        }else {
          var or__3548__auto____7451 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7451)) {
            return or__3548__auto____7451
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__7538 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7456 = this$;
      if(cljs.core.truth_(and__3546__auto____7456)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7456
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      return function() {
        var or__3548__auto____7459 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7459)) {
          return or__3548__auto____7459
        }else {
          var or__3548__auto____7462 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7462)) {
            return or__3548__auto____7462
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__7539 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7468 = this$;
      if(cljs.core.truth_(and__3546__auto____7468)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7468
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      return function() {
        var or__3548__auto____7470 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7470)) {
          return or__3548__auto____7470
        }else {
          var or__3548__auto____7472 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7472)) {
            return or__3548__auto____7472
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__7540 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7477 = this$;
      if(cljs.core.truth_(and__3546__auto____7477)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7477
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      return function() {
        var or__3548__auto____7479 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7479)) {
          return or__3548__auto____7479
        }else {
          var or__3548__auto____7481 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7481)) {
            return or__3548__auto____7481
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__7541 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7486 = this$;
      if(cljs.core.truth_(and__3546__auto____7486)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7486
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      return function() {
        var or__3548__auto____7511 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7511)) {
          return or__3548__auto____7511
        }else {
          var or__3548__auto____7512 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7512)) {
            return or__3548__auto____7512
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__7542 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7513 = this$;
      if(cljs.core.truth_(and__3546__auto____7513)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7513
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      return function() {
        var or__3548__auto____7514 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7514)) {
          return or__3548__auto____7514
        }else {
          var or__3548__auto____7515 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7515)) {
            return or__3548__auto____7515
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__7543 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7516 = this$;
      if(cljs.core.truth_(and__3546__auto____7516)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7516
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      return function() {
        var or__3548__auto____7517 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7517)) {
          return or__3548__auto____7517
        }else {
          var or__3548__auto____7518 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7518)) {
            return or__3548__auto____7518
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__7544 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7519 = this$;
      if(cljs.core.truth_(and__3546__auto____7519)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7519
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      return function() {
        var or__3548__auto____7520 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7520)) {
          return or__3548__auto____7520
        }else {
          var or__3548__auto____7521 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7521)) {
            return or__3548__auto____7521
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__7545 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7522 = this$;
      if(cljs.core.truth_(and__3546__auto____7522)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____7522
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      return function() {
        var or__3548__auto____7523 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____7523)) {
          return or__3548__auto____7523
        }else {
          var or__3548__auto____7524 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____7524)) {
            return or__3548__auto____7524
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
        return _invoke__7525.call(this, this$);
      case 2:
        return _invoke__7526.call(this, this$, a);
      case 3:
        return _invoke__7527.call(this, this$, a, b);
      case 4:
        return _invoke__7528.call(this, this$, a, b, c);
      case 5:
        return _invoke__7529.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__7530.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__7531.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__7532.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__7533.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__7534.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__7535.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__7536.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__7537.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__7538.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__7539.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__7540.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__7541.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__7542.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__7543.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__7544.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__7545.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _invoke
}();
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7710 = coll;
    if(cljs.core.truth_(and__3546__auto____7710)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____7710
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____7714 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7714)) {
        return or__3548__auto____7714
      }else {
        var or__3548__auto____7715 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____7715)) {
          return or__3548__auto____7715
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
    var and__3546__auto____7724 = coll;
    if(cljs.core.truth_(and__3546__auto____7724)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____7724
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____7726 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7726)) {
        return or__3548__auto____7726
      }else {
        var or__3548__auto____7727 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____7727)) {
          return or__3548__auto____7727
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
    var and__3546__auto____7839 = coll;
    if(cljs.core.truth_(and__3546__auto____7839)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____7839
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____7841 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7841)) {
        return or__3548__auto____7841
      }else {
        var or__3548__auto____7843 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____7843)) {
          return or__3548__auto____7843
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
  var _nth__7862 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7847 = coll;
      if(cljs.core.truth_(and__3546__auto____7847)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____7847
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____7854 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____7854)) {
          return or__3548__auto____7854
        }else {
          var or__3548__auto____7855 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____7855)) {
            return or__3548__auto____7855
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__7863 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7857 = coll;
      if(cljs.core.truth_(and__3546__auto____7857)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____7857
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____7859 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____7859)) {
          return or__3548__auto____7859
        }else {
          var or__3548__auto____7861 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____7861)) {
            return or__3548__auto____7861
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
        return _nth__7862.call(this, coll, n);
      case 3:
        return _nth__7863.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7870 = coll;
    if(cljs.core.truth_(and__3546__auto____7870)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____7870
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____7873 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7873)) {
        return or__3548__auto____7873
      }else {
        var or__3548__auto____7874 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____7874)) {
          return or__3548__auto____7874
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7875 = coll;
    if(cljs.core.truth_(and__3546__auto____7875)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____7875
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____7876 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7876)) {
        return or__3548__auto____7876
      }else {
        var or__3548__auto____7877 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____7877)) {
          return or__3548__auto____7877
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
  var _lookup__7908 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7888 = o;
      if(cljs.core.truth_(and__3546__auto____7888)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____7888
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____7896 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____7896)) {
          return or__3548__auto____7896
        }else {
          var or__3548__auto____7899 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____7899)) {
            return or__3548__auto____7899
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__7909 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____7900 = o;
      if(cljs.core.truth_(and__3546__auto____7900)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____7900
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____7902 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____7902)) {
          return or__3548__auto____7902
        }else {
          var or__3548__auto____7905 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____7905)) {
            return or__3548__auto____7905
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
        return _lookup__7908.call(this, o, k);
      case 3:
        return _lookup__7909.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7915 = coll;
    if(cljs.core.truth_(and__3546__auto____7915)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____7915
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____7918 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7918)) {
        return or__3548__auto____7918
      }else {
        var or__3548__auto____7919 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____7919)) {
          return or__3548__auto____7919
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7921 = coll;
    if(cljs.core.truth_(and__3546__auto____7921)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____7921
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____7924 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7924)) {
        return or__3548__auto____7924
      }else {
        var or__3548__auto____7925 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____7925)) {
          return or__3548__auto____7925
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
    var and__3546__auto____7974 = coll;
    if(cljs.core.truth_(and__3546__auto____7974)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____7974
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____7975 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7975)) {
        return or__3548__auto____7975
      }else {
        var or__3548__auto____7977 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____7977)) {
          return or__3548__auto____7977
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
    var and__3546__auto____7983 = coll;
    if(cljs.core.truth_(and__3546__auto____7983)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____7983
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____7985 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7985)) {
        return or__3548__auto____7985
      }else {
        var or__3548__auto____7986 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____7986)) {
          return or__3548__auto____7986
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
    var and__3546__auto____7991 = coll;
    if(cljs.core.truth_(and__3546__auto____7991)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____7991
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____7994 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____7994)) {
        return or__3548__auto____7994
      }else {
        var or__3548__auto____7995 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____7995)) {
          return or__3548__auto____7995
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____7998 = coll;
    if(cljs.core.truth_(and__3546__auto____7998)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____7998
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____8001 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____8001)) {
        return or__3548__auto____8001
      }else {
        var or__3548__auto____8005 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____8005)) {
          return or__3548__auto____8005
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
    var and__3546__auto____8009 = coll;
    if(cljs.core.truth_(and__3546__auto____8009)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____8009
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____8012 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____8012)) {
        return or__3548__auto____8012
      }else {
        var or__3548__auto____8015 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____8015)) {
          return or__3548__auto____8015
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
    var and__3546__auto____8026 = o;
    if(cljs.core.truth_(and__3546__auto____8026)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____8026
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____8029 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8029)) {
        return or__3548__auto____8029
      }else {
        var or__3548__auto____8032 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____8032)) {
          return or__3548__auto____8032
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
    var and__3546__auto____8034 = o;
    if(cljs.core.truth_(and__3546__auto____8034)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____8034
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____8039 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8039)) {
        return or__3548__auto____8039
      }else {
        var or__3548__auto____8040 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____8040)) {
          return or__3548__auto____8040
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
    var and__3546__auto____8046 = o;
    if(cljs.core.truth_(and__3546__auto____8046)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____8046
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____8048 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8048)) {
        return or__3548__auto____8048
      }else {
        var or__3548__auto____8049 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____8049)) {
          return or__3548__auto____8049
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
    var and__3546__auto____8055 = o;
    if(cljs.core.truth_(and__3546__auto____8055)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____8055
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____8057 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8057)) {
        return or__3548__auto____8057
      }else {
        var or__3548__auto____8058 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____8058)) {
          return or__3548__auto____8058
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
  var _reduce__8080 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____8065 = coll;
      if(cljs.core.truth_(and__3546__auto____8065)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____8065
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____8071 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____8071)) {
          return or__3548__auto____8071
        }else {
          var or__3548__auto____8073 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____8073)) {
            return or__3548__auto____8073
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__8081 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____8074 = coll;
      if(cljs.core.truth_(and__3546__auto____8074)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____8074
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____8076 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____8076)) {
          return or__3548__auto____8076
        }else {
          var or__3548__auto____8078 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____8078)) {
            return or__3548__auto____8078
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
        return _reduce__8080.call(this, coll, f);
      case 3:
        return _reduce__8081.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____8089 = o;
    if(cljs.core.truth_(and__3546__auto____8089)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____8089
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____8091 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8091)) {
        return or__3548__auto____8091
      }else {
        var or__3548__auto____8093 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____8093)) {
          return or__3548__auto____8093
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
    var and__3546__auto____8100 = o;
    if(cljs.core.truth_(and__3546__auto____8100)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____8100
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____8101 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8101)) {
        return or__3548__auto____8101
      }else {
        var or__3548__auto____8105 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____8105)) {
          return or__3548__auto____8105
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
    var and__3546__auto____8117 = o;
    if(cljs.core.truth_(and__3546__auto____8117)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____8117
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____8120 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8120)) {
        return or__3548__auto____8120
      }else {
        var or__3548__auto____8123 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____8123)) {
          return or__3548__auto____8123
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
    var and__3546__auto____8126 = o;
    if(cljs.core.truth_(and__3546__auto____8126)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____8126
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____8127 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____8127)) {
        return or__3548__auto____8127
      }else {
        var or__3548__auto____8128 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____8128)) {
          return or__3548__auto____8128
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
    var and__3546__auto____8137 = d;
    if(cljs.core.truth_(and__3546__auto____8137)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____8137
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____8140 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____8140)) {
        return or__3548__auto____8140
      }else {
        var or__3548__auto____8144 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____8144)) {
          return or__3548__auto____8144
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
    var and__3546__auto____8149 = this$;
    if(cljs.core.truth_(and__3546__auto____8149)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____8149
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____8150 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____8150)) {
        return or__3548__auto____8150
      }else {
        var or__3548__auto____8151 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____8151)) {
          return or__3548__auto____8151
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____8153 = this$;
    if(cljs.core.truth_(and__3546__auto____8153)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____8153
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____8155 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____8155)) {
        return or__3548__auto____8155
      }else {
        var or__3548__auto____8157 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____8157)) {
          return or__3548__auto____8157
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____8158 = this$;
    if(cljs.core.truth_(and__3546__auto____8158)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____8158
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____8159 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____8159)) {
        return or__3548__auto____8159
      }else {
        var or__3548__auto____8160 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____8160)) {
          return or__3548__auto____8160
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
  var G__8206 = null;
  var G__8206__8207 = function(o, k) {
    return null
  };
  var G__8206__8208 = function(o, k, not_found) {
    return not_found
  };
  G__8206 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8206__8207.call(this, o, k);
      case 3:
        return G__8206__8208.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8206
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
  var G__8212 = null;
  var G__8212__8213 = function(_, f) {
    return f.call(null)
  };
  var G__8212__8214 = function(_, f, start) {
    return start
  };
  G__8212 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__8212__8213.call(this, _, f);
      case 3:
        return G__8212__8214.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8212
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
  var G__8228 = null;
  var G__8228__8229 = function(_, n) {
    return null
  };
  var G__8228__8230 = function(_, n, not_found) {
    return not_found
  };
  G__8228 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8228__8229.call(this, _, n);
      case 3:
        return G__8228__8230.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8228
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
  var ci_reduce__8257 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__8247 = cljs.core._nth.call(null, cicoll, 0);
      var n__8248 = 1;
      while(true) {
        if(cljs.core.truth_(n__8248 < cljs.core._count.call(null, cicoll))) {
          var G__8261 = f.call(null, val__8247, cljs.core._nth.call(null, cicoll, n__8248));
          var G__8262 = n__8248 + 1;
          val__8247 = G__8261;
          n__8248 = G__8262;
          continue
        }else {
          return val__8247
        }
        break
      }
    }
  };
  var ci_reduce__8258 = function(cicoll, f, val) {
    var val__8249 = val;
    var n__8250 = 0;
    while(true) {
      if(cljs.core.truth_(n__8250 < cljs.core._count.call(null, cicoll))) {
        var G__8265 = f.call(null, val__8249, cljs.core._nth.call(null, cicoll, n__8250));
        var G__8266 = n__8250 + 1;
        val__8249 = G__8265;
        n__8250 = G__8266;
        continue
      }else {
        return val__8249
      }
      break
    }
  };
  var ci_reduce__8259 = function(cicoll, f, val, idx) {
    var val__8255 = val;
    var n__8256 = idx;
    while(true) {
      if(cljs.core.truth_(n__8256 < cljs.core._count.call(null, cicoll))) {
        var G__8284 = f.call(null, val__8255, cljs.core._nth.call(null, cicoll, n__8256));
        var G__8286 = n__8256 + 1;
        val__8255 = G__8284;
        n__8256 = G__8286;
        continue
      }else {
        return val__8255
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__8257.call(this, cicoll, f);
      case 3:
        return ci_reduce__8258.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__8259.call(this, cicoll, f, val, idx)
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
  var this__8287 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__8314 = null;
  var G__8314__8315 = function(_, f) {
    var this__8289 = this;
    return cljs.core.ci_reduce.call(null, this__8289.a, f, this__8289.a[this__8289.i], this__8289.i + 1)
  };
  var G__8314__8316 = function(_, f, start) {
    var this__8291 = this;
    return cljs.core.ci_reduce.call(null, this__8291.a, f, start, this__8291.i)
  };
  G__8314 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__8314__8315.call(this, _, f);
      case 3:
        return G__8314__8316.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8314
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__8294 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__8296 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__8322 = null;
  var G__8322__8323 = function(coll, n) {
    var this__8298 = this;
    var i__8300 = n + this__8298.i;
    if(cljs.core.truth_(i__8300 < this__8298.a.length)) {
      return this__8298.a[i__8300]
    }else {
      return null
    }
  };
  var G__8322__8324 = function(coll, n, not_found) {
    var this__8301 = this;
    var i__8303 = n + this__8301.i;
    if(cljs.core.truth_(i__8303 < this__8301.a.length)) {
      return this__8301.a[i__8303]
    }else {
      return not_found
    }
  };
  G__8322 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8322__8323.call(this, coll, n);
      case 3:
        return G__8322__8324.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8322
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__8305 = this;
  return this__8305.a.length - this__8305.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__8308 = this;
  return this__8308.a[this__8308.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__8310 = this;
  if(cljs.core.truth_(this__8310.i + 1 < this__8310.a.length)) {
    return new cljs.core.IndexedSeq(this__8310.a, this__8310.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__8312 = this;
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
  var G__8465 = null;
  var G__8465__8466 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__8465__8467 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__8465 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__8465__8466.call(this, array, f);
      case 3:
        return G__8465__8467.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8465
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__8470 = null;
  var G__8470__8471 = function(array, k) {
    return array[k]
  };
  var G__8470__8472 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__8470 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8470__8471.call(this, array, k);
      case 3:
        return G__8470__8472.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8470
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__8474 = null;
  var G__8474__8475 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__8474__8476 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__8474 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8474__8475.call(this, array, n);
      case 3:
        return G__8474__8476.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8474
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
  var temp__3698__auto____8481 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____8481)) {
    var s__8482 = temp__3698__auto____8481;
    return cljs.core._first.call(null, s__8482)
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
      var G__8570 = cljs.core.next.call(null, s);
      s = G__8570;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__8577 = cljs.core.seq.call(null, x);
  var n__8578 = 0;
  while(true) {
    if(cljs.core.truth_(s__8577)) {
      var G__8582 = cljs.core.next.call(null, s__8577);
      var G__8583 = n__8578 + 1;
      s__8577 = G__8582;
      n__8578 = G__8583;
      continue
    }else {
      return n__8578
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
  var conj__8594 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__8595 = function() {
    var G__8602__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__8606 = conj.call(null, coll, x);
          var G__8607 = cljs.core.first.call(null, xs);
          var G__8608 = cljs.core.next.call(null, xs);
          coll = G__8606;
          x = G__8607;
          xs = G__8608;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__8602 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8602__delegate.call(this, coll, x, xs)
    };
    G__8602.cljs$lang$maxFixedArity = 2;
    G__8602.cljs$lang$applyTo = function(arglist__8620) {
      var coll = cljs.core.first(arglist__8620);
      var x = cljs.core.first(cljs.core.next(arglist__8620));
      var xs = cljs.core.rest(cljs.core.next(arglist__8620));
      return G__8602__delegate.call(this, coll, x, xs)
    };
    return G__8602
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__8594.call(this, coll, x);
      default:
        return conj__8595.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__8595.cljs$lang$applyTo;
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
  var nth__8632 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__8633 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__8632.call(this, coll, n);
      case 3:
        return nth__8633.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__8641 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__8642 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__8641.call(this, o, k);
      case 3:
        return get__8642.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__8660 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__8661 = function() {
    var G__8664__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__8648 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__8665 = ret__8648;
          var G__8666 = cljs.core.first.call(null, kvs);
          var G__8668 = cljs.core.second.call(null, kvs);
          var G__8669 = cljs.core.nnext.call(null, kvs);
          coll = G__8665;
          k = G__8666;
          v = G__8668;
          kvs = G__8669;
          continue
        }else {
          return ret__8648
        }
        break
      }
    };
    var G__8664 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__8664__delegate.call(this, coll, k, v, kvs)
    };
    G__8664.cljs$lang$maxFixedArity = 3;
    G__8664.cljs$lang$applyTo = function(arglist__8672) {
      var coll = cljs.core.first(arglist__8672);
      var k = cljs.core.first(cljs.core.next(arglist__8672));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8672)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8672)));
      return G__8664__delegate.call(this, coll, k, v, kvs)
    };
    return G__8664
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__8660.call(this, coll, k, v);
      default:
        return assoc__8661.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__8661.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__8680 = function(coll) {
    return coll
  };
  var dissoc__8682 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__8683 = function() {
    var G__8686__delegate = function(coll, k, ks) {
      while(true) {
        var ret__8676 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__8688 = ret__8676;
          var G__8689 = cljs.core.first.call(null, ks);
          var G__8690 = cljs.core.next.call(null, ks);
          coll = G__8688;
          k = G__8689;
          ks = G__8690;
          continue
        }else {
          return ret__8676
        }
        break
      }
    };
    var G__8686 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8686__delegate.call(this, coll, k, ks)
    };
    G__8686.cljs$lang$maxFixedArity = 2;
    G__8686.cljs$lang$applyTo = function(arglist__8693) {
      var coll = cljs.core.first(arglist__8693);
      var k = cljs.core.first(cljs.core.next(arglist__8693));
      var ks = cljs.core.rest(cljs.core.next(arglist__8693));
      return G__8686__delegate.call(this, coll, k, ks)
    };
    return G__8686
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__8680.call(this, coll);
      case 2:
        return dissoc__8682.call(this, coll, k);
      default:
        return dissoc__8683.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__8683.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__445__auto____8698 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8699 = x__445__auto____8698;
      if(cljs.core.truth_(and__3546__auto____8699)) {
        var and__3546__auto____8701 = x__445__auto____8698.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____8701)) {
          return cljs.core.not.call(null, x__445__auto____8698.hasOwnProperty("cljs$core$IMeta$"))
        }else {
          return and__3546__auto____8701
        }
      }else {
        return and__3546__auto____8699
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____8698)
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
  var disj__8713 = function(coll) {
    return coll
  };
  var disj__8714 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__8715 = function() {
    var G__8717__delegate = function(coll, k, ks) {
      while(true) {
        var ret__8711 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__8719 = ret__8711;
          var G__8720 = cljs.core.first.call(null, ks);
          var G__8721 = cljs.core.next.call(null, ks);
          coll = G__8719;
          k = G__8720;
          ks = G__8721;
          continue
        }else {
          return ret__8711
        }
        break
      }
    };
    var G__8717 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8717__delegate.call(this, coll, k, ks)
    };
    G__8717.cljs$lang$maxFixedArity = 2;
    G__8717.cljs$lang$applyTo = function(arglist__8724) {
      var coll = cljs.core.first(arglist__8724);
      var k = cljs.core.first(cljs.core.next(arglist__8724));
      var ks = cljs.core.rest(cljs.core.next(arglist__8724));
      return G__8717__delegate.call(this, coll, k, ks)
    };
    return G__8717
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__8713.call(this, coll);
      case 2:
        return disj__8714.call(this, coll, k);
      default:
        return disj__8715.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__8715.cljs$lang$applyTo;
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
    var x__445__auto____8730 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8731 = x__445__auto____8730;
      if(cljs.core.truth_(and__3546__auto____8731)) {
        var and__3546__auto____8732 = x__445__auto____8730.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____8732)) {
          return cljs.core.not.call(null, x__445__auto____8730.hasOwnProperty("cljs$core$ICollection$"))
        }else {
          return and__3546__auto____8732
        }
      }else {
        return and__3546__auto____8731
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__445__auto____8730)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____8751 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8759 = x__445__auto____8751;
      if(cljs.core.truth_(and__3546__auto____8759)) {
        var and__3546__auto____8765 = x__445__auto____8751.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____8765)) {
          return cljs.core.not.call(null, x__445__auto____8751.hasOwnProperty("cljs$core$ISet$"))
        }else {
          return and__3546__auto____8765
        }
      }else {
        return and__3546__auto____8759
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__445__auto____8751)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__445__auto____8778 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____8779 = x__445__auto____8778;
    if(cljs.core.truth_(and__3546__auto____8779)) {
      var and__3546__auto____8780 = x__445__auto____8778.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____8780)) {
        return cljs.core.not.call(null, x__445__auto____8778.hasOwnProperty("cljs$core$IAssociative$"))
      }else {
        return and__3546__auto____8780
      }
    }else {
      return and__3546__auto____8779
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__445__auto____8778)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__445__auto____8786 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____8788 = x__445__auto____8786;
    if(cljs.core.truth_(and__3546__auto____8788)) {
      var and__3546__auto____8793 = x__445__auto____8786.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____8793)) {
        return cljs.core.not.call(null, x__445__auto____8786.hasOwnProperty("cljs$core$ISequential$"))
      }else {
        return and__3546__auto____8793
      }
    }else {
      return and__3546__auto____8788
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__445__auto____8786)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__445__auto____8799 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____8801 = x__445__auto____8799;
    if(cljs.core.truth_(and__3546__auto____8801)) {
      var and__3546__auto____8803 = x__445__auto____8799.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____8803)) {
        return cljs.core.not.call(null, x__445__auto____8799.hasOwnProperty("cljs$core$ICounted$"))
      }else {
        return and__3546__auto____8803
      }
    }else {
      return and__3546__auto____8801
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__445__auto____8799)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____8816 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8817 = x__445__auto____8816;
      if(cljs.core.truth_(and__3546__auto____8817)) {
        var and__3546__auto____8819 = x__445__auto____8816.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____8819)) {
          return cljs.core.not.call(null, x__445__auto____8816.hasOwnProperty("cljs$core$IMap$"))
        }else {
          return and__3546__auto____8819
        }
      }else {
        return and__3546__auto____8817
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__445__auto____8816)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__445__auto____8834 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____8835 = x__445__auto____8834;
    if(cljs.core.truth_(and__3546__auto____8835)) {
      var and__3546__auto____8838 = x__445__auto____8834.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____8838)) {
        return cljs.core.not.call(null, x__445__auto____8834.hasOwnProperty("cljs$core$IVector$"))
      }else {
        return and__3546__auto____8838
      }
    }else {
      return and__3546__auto____8835
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__445__auto____8834)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__8841 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__8841.push(key)
  });
  return keys__8841
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
    var x__445__auto____8852 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____8853 = x__445__auto____8852;
      if(cljs.core.truth_(and__3546__auto____8853)) {
        var and__3546__auto____8857 = x__445__auto____8852.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____8857)) {
          return cljs.core.not.call(null, x__445__auto____8852.hasOwnProperty("cljs$core$ISeq$"))
        }else {
          return and__3546__auto____8857
        }
      }else {
        return and__3546__auto____8853
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__445__auto____8852)
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
  var and__3546__auto____8870 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8870)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____8873 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____8873)) {
        return or__3548__auto____8873
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____8870
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____8876 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8876)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____8876
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____8879 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____8879)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____8879
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____8887 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____8887)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____8887
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
    var and__3546__auto____8900 = coll;
    if(cljs.core.truth_(and__3546__auto____8900)) {
      var and__3546__auto____8902 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____8902)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____8902
      }
    }else {
      return and__3546__auto____8900
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___8923 = function(x) {
    return true
  };
  var distinct_QMARK___8924 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___8925 = function() {
    var G__8933__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__8913 = cljs.core.set([y, x]);
        var xs__8915 = more;
        while(true) {
          var x__8917 = cljs.core.first.call(null, xs__8915);
          var etc__8919 = cljs.core.next.call(null, xs__8915);
          if(cljs.core.truth_(xs__8915)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__8913, x__8917))) {
              return false
            }else {
              var G__8936 = cljs.core.conj.call(null, s__8913, x__8917);
              var G__8938 = etc__8919;
              s__8913 = G__8936;
              xs__8915 = G__8938;
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
    var G__8933 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8933__delegate.call(this, x, y, more)
    };
    G__8933.cljs$lang$maxFixedArity = 2;
    G__8933.cljs$lang$applyTo = function(arglist__8944) {
      var x = cljs.core.first(arglist__8944);
      var y = cljs.core.first(cljs.core.next(arglist__8944));
      var more = cljs.core.rest(cljs.core.next(arglist__8944));
      return G__8933__delegate.call(this, x, y, more)
    };
    return G__8933
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___8923.call(this, x);
      case 2:
        return distinct_QMARK___8924.call(this, x, y);
      default:
        return distinct_QMARK___8925.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8925.cljs$lang$applyTo;
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
      var r__8957 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__8957))) {
        return r__8957
      }else {
        if(cljs.core.truth_(r__8957)) {
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
  var sort__8975 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__8976 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__8968 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__8968, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__8968)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__8975.call(this, comp);
      case 2:
        return sort__8976.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__8991 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__8992 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__8991.call(this, keyfn, comp);
      case 3:
        return sort_by__8992.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__9075 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__9076 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__9075.call(this, f, val);
      case 3:
        return reduce__9076.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__9122 = function(f, coll) {
    var temp__3695__auto____9080 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____9080)) {
      var s__9081 = temp__3695__auto____9080;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__9081), cljs.core.next.call(null, s__9081))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__9123 = function(f, val, coll) {
    var val__9120 = val;
    var coll__9121 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__9121)) {
        var G__9141 = f.call(null, val__9120, cljs.core.first.call(null, coll__9121));
        var G__9142 = cljs.core.next.call(null, coll__9121);
        val__9120 = G__9141;
        coll__9121 = G__9142;
        continue
      }else {
        return val__9120
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__9122.call(this, f, val);
      case 3:
        return seq_reduce__9123.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__9145 = null;
  var G__9145__9146 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__9145__9147 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__9145 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__9145__9146.call(this, coll, f);
      case 3:
        return G__9145__9147.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9145
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___9162 = function() {
    return 0
  };
  var _PLUS___9164 = function(x) {
    return x
  };
  var _PLUS___9166 = function(x, y) {
    return x + y
  };
  var _PLUS___9168 = function() {
    var G__9171__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, x + y, more)
    };
    var G__9171 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9171__delegate.call(this, x, y, more)
    };
    G__9171.cljs$lang$maxFixedArity = 2;
    G__9171.cljs$lang$applyTo = function(arglist__9173) {
      var x = cljs.core.first(arglist__9173);
      var y = cljs.core.first(cljs.core.next(arglist__9173));
      var more = cljs.core.rest(cljs.core.next(arglist__9173));
      return G__9171__delegate.call(this, x, y, more)
    };
    return G__9171
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___9162.call(this);
      case 1:
        return _PLUS___9164.call(this, x);
      case 2:
        return _PLUS___9166.call(this, x, y);
      default:
        return _PLUS___9168.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___9168.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___9183 = function(x) {
    return-x
  };
  var ___9184 = function(x, y) {
    return x - y
  };
  var ___9185 = function() {
    var G__9192__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, x - y, more)
    };
    var G__9192 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9192__delegate.call(this, x, y, more)
    };
    G__9192.cljs$lang$maxFixedArity = 2;
    G__9192.cljs$lang$applyTo = function(arglist__9193) {
      var x = cljs.core.first(arglist__9193);
      var y = cljs.core.first(cljs.core.next(arglist__9193));
      var more = cljs.core.rest(cljs.core.next(arglist__9193));
      return G__9192__delegate.call(this, x, y, more)
    };
    return G__9192
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___9183.call(this, x);
      case 2:
        return ___9184.call(this, x, y);
      default:
        return ___9185.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___9185.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___9200 = function() {
    return 1
  };
  var _STAR___9201 = function(x) {
    return x
  };
  var _STAR___9202 = function(x, y) {
    return x * y
  };
  var _STAR___9203 = function() {
    var G__9206__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, x * y, more)
    };
    var G__9206 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9206__delegate.call(this, x, y, more)
    };
    G__9206.cljs$lang$maxFixedArity = 2;
    G__9206.cljs$lang$applyTo = function(arglist__9211) {
      var x = cljs.core.first(arglist__9211);
      var y = cljs.core.first(cljs.core.next(arglist__9211));
      var more = cljs.core.rest(cljs.core.next(arglist__9211));
      return G__9206__delegate.call(this, x, y, more)
    };
    return G__9206
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___9200.call(this);
      case 1:
        return _STAR___9201.call(this, x);
      case 2:
        return _STAR___9202.call(this, x, y);
      default:
        return _STAR___9203.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___9203.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___9214 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___9215 = function(x, y) {
    return _SLASH_.call(null, x, y)
  };
  var _SLASH___9216 = function() {
    var G__9222__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__9222 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9222__delegate.call(this, x, y, more)
    };
    G__9222.cljs$lang$maxFixedArity = 2;
    G__9222.cljs$lang$applyTo = function(arglist__9226) {
      var x = cljs.core.first(arglist__9226);
      var y = cljs.core.first(cljs.core.next(arglist__9226));
      var more = cljs.core.rest(cljs.core.next(arglist__9226));
      return G__9222__delegate.call(this, x, y, more)
    };
    return G__9222
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___9214.call(this, x);
      case 2:
        return _SLASH___9215.call(this, x, y);
      default:
        return _SLASH___9216.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___9216.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___9235 = function(x) {
    return true
  };
  var _LT___9236 = function(x, y) {
    return x < y
  };
  var _LT___9237 = function() {
    var G__9239__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x < y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__9240 = y;
            var G__9241 = cljs.core.first.call(null, more);
            var G__9242 = cljs.core.next.call(null, more);
            x = G__9240;
            y = G__9241;
            more = G__9242;
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
    var G__9239 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9239__delegate.call(this, x, y, more)
    };
    G__9239.cljs$lang$maxFixedArity = 2;
    G__9239.cljs$lang$applyTo = function(arglist__9247) {
      var x = cljs.core.first(arglist__9247);
      var y = cljs.core.first(cljs.core.next(arglist__9247));
      var more = cljs.core.rest(cljs.core.next(arglist__9247));
      return G__9239__delegate.call(this, x, y, more)
    };
    return G__9239
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___9235.call(this, x);
      case 2:
        return _LT___9236.call(this, x, y);
      default:
        return _LT___9237.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___9237.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___9326 = function(x) {
    return true
  };
  var _LT__EQ___9327 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___9328 = function() {
    var G__9334__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x <= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__9335 = y;
            var G__9336 = cljs.core.first.call(null, more);
            var G__9337 = cljs.core.next.call(null, more);
            x = G__9335;
            y = G__9336;
            more = G__9337;
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
    var G__9334 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9334__delegate.call(this, x, y, more)
    };
    G__9334.cljs$lang$maxFixedArity = 2;
    G__9334.cljs$lang$applyTo = function(arglist__9339) {
      var x = cljs.core.first(arglist__9339);
      var y = cljs.core.first(cljs.core.next(arglist__9339));
      var more = cljs.core.rest(cljs.core.next(arglist__9339));
      return G__9334__delegate.call(this, x, y, more)
    };
    return G__9334
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___9326.call(this, x);
      case 2:
        return _LT__EQ___9327.call(this, x, y);
      default:
        return _LT__EQ___9328.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___9328.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___9344 = function(x) {
    return true
  };
  var _GT___9345 = function(x, y) {
    return x > y
  };
  var _GT___9346 = function() {
    var G__9350__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x > y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__9351 = y;
            var G__9352 = cljs.core.first.call(null, more);
            var G__9353 = cljs.core.next.call(null, more);
            x = G__9351;
            y = G__9352;
            more = G__9353;
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
    var G__9350 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9350__delegate.call(this, x, y, more)
    };
    G__9350.cljs$lang$maxFixedArity = 2;
    G__9350.cljs$lang$applyTo = function(arglist__9354) {
      var x = cljs.core.first(arglist__9354);
      var y = cljs.core.first(cljs.core.next(arglist__9354));
      var more = cljs.core.rest(cljs.core.next(arglist__9354));
      return G__9350__delegate.call(this, x, y, more)
    };
    return G__9350
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___9344.call(this, x);
      case 2:
        return _GT___9345.call(this, x, y);
      default:
        return _GT___9346.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___9346.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___9364 = function(x) {
    return true
  };
  var _GT__EQ___9366 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___9367 = function() {
    var G__9372__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x >= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__9376 = y;
            var G__9377 = cljs.core.first.call(null, more);
            var G__9378 = cljs.core.next.call(null, more);
            x = G__9376;
            y = G__9377;
            more = G__9378;
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
    var G__9372 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9372__delegate.call(this, x, y, more)
    };
    G__9372.cljs$lang$maxFixedArity = 2;
    G__9372.cljs$lang$applyTo = function(arglist__9383) {
      var x = cljs.core.first(arglist__9383);
      var y = cljs.core.first(cljs.core.next(arglist__9383));
      var more = cljs.core.rest(cljs.core.next(arglist__9383));
      return G__9372__delegate.call(this, x, y, more)
    };
    return G__9372
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___9364.call(this, x);
      case 2:
        return _GT__EQ___9366.call(this, x, y);
      default:
        return _GT__EQ___9367.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___9367.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__9394 = function(x) {
    return x
  };
  var max__9395 = function(x, y) {
    return x > y ? x : y
  };
  var max__9396 = function() {
    var G__9399__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, x > y ? x : y, more)
    };
    var G__9399 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9399__delegate.call(this, x, y, more)
    };
    G__9399.cljs$lang$maxFixedArity = 2;
    G__9399.cljs$lang$applyTo = function(arglist__9402) {
      var x = cljs.core.first(arglist__9402);
      var y = cljs.core.first(cljs.core.next(arglist__9402));
      var more = cljs.core.rest(cljs.core.next(arglist__9402));
      return G__9399__delegate.call(this, x, y, more)
    };
    return G__9399
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__9394.call(this, x);
      case 2:
        return max__9395.call(this, x, y);
      default:
        return max__9396.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__9396.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__9411 = function(x) {
    return x
  };
  var min__9412 = function(x, y) {
    return x < y ? x : y
  };
  var min__9413 = function() {
    var G__9419__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, x < y ? x : y, more)
    };
    var G__9419 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9419__delegate.call(this, x, y, more)
    };
    G__9419.cljs$lang$maxFixedArity = 2;
    G__9419.cljs$lang$applyTo = function(arglist__9421) {
      var x = cljs.core.first(arglist__9421);
      var y = cljs.core.first(cljs.core.next(arglist__9421));
      var more = cljs.core.rest(cljs.core.next(arglist__9421));
      return G__9419__delegate.call(this, x, y, more)
    };
    return G__9419
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__9411.call(this, x);
      case 2:
        return min__9412.call(this, x, y);
      default:
        return min__9413.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__9413.cljs$lang$applyTo;
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
  var rem__9438 = n % d;
  return cljs.core.fix.call(null, (n - rem__9438) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__9452 = cljs.core.quot.call(null, n, d);
  return n - d * q__9452
};
cljs.core.rand = function() {
  var rand = null;
  var rand__9456 = function() {
    return Math.random.call(null)
  };
  var rand__9457 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__9456.call(this);
      case 1:
        return rand__9457.call(this, n)
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
  var _EQ__EQ___9507 = function(x) {
    return true
  };
  var _EQ__EQ___9508 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___9510 = function() {
    var G__9516__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__9520 = y;
            var G__9521 = cljs.core.first.call(null, more);
            var G__9522 = cljs.core.next.call(null, more);
            x = G__9520;
            y = G__9521;
            more = G__9522;
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
    var G__9516 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9516__delegate.call(this, x, y, more)
    };
    G__9516.cljs$lang$maxFixedArity = 2;
    G__9516.cljs$lang$applyTo = function(arglist__9525) {
      var x = cljs.core.first(arglist__9525);
      var y = cljs.core.first(cljs.core.next(arglist__9525));
      var more = cljs.core.rest(cljs.core.next(arglist__9525));
      return G__9516__delegate.call(this, x, y, more)
    };
    return G__9516
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___9507.call(this, x);
      case 2:
        return _EQ__EQ___9508.call(this, x, y);
      default:
        return _EQ__EQ___9510.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9510.cljs$lang$applyTo;
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
  var n__9536 = n;
  var xs__9537 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9541 = xs__9537;
      if(cljs.core.truth_(and__3546__auto____9541)) {
        return n__9536 > 0
      }else {
        return and__3546__auto____9541
      }
    }())) {
      var G__9548 = n__9536 - 1;
      var G__9549 = cljs.core.next.call(null, xs__9537);
      n__9536 = G__9548;
      xs__9537 = G__9549;
      continue
    }else {
      return xs__9537
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__9563 = null;
  var G__9563__9564 = function(coll, n) {
    var temp__3695__auto____9555 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____9555)) {
      var xs__9556 = temp__3695__auto____9555;
      return cljs.core.first.call(null, xs__9556)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__9563__9565 = function(coll, n, not_found) {
    var temp__3695__auto____9559 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____9559)) {
      var xs__9561 = temp__3695__auto____9559;
      return cljs.core.first.call(null, xs__9561)
    }else {
      return not_found
    }
  };
  G__9563 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9563__9564.call(this, coll, n);
      case 3:
        return G__9563__9565.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9563
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___9575 = function() {
    return""
  };
  var str_STAR___9626 = function(x) {
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
  var str_STAR___9627 = function() {
    var G__9630__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__9632 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__9633 = cljs.core.next.call(null, more);
            sb = G__9632;
            more = G__9633;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__9630 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__9630__delegate.call(this, x, ys)
    };
    G__9630.cljs$lang$maxFixedArity = 1;
    G__9630.cljs$lang$applyTo = function(arglist__9639) {
      var x = cljs.core.first(arglist__9639);
      var ys = cljs.core.rest(arglist__9639);
      return G__9630__delegate.call(this, x, ys)
    };
    return G__9630
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___9575.call(this);
      case 1:
        return str_STAR___9626.call(this, x);
      default:
        return str_STAR___9627.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___9627.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__9644 = function() {
    return""
  };
  var str__9645 = function(x) {
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
  var str__9646 = function() {
    var G__9649__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__9649 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__9649__delegate.call(this, x, ys)
    };
    G__9649.cljs$lang$maxFixedArity = 1;
    G__9649.cljs$lang$applyTo = function(arglist__9650) {
      var x = cljs.core.first(arglist__9650);
      var ys = cljs.core.rest(arglist__9650);
      return G__9649__delegate.call(this, x, ys)
    };
    return G__9649
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__9644.call(this);
      case 1:
        return str__9645.call(this, x);
      default:
        return str__9646.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__9646.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__9654 = function(s, start) {
    return s.substring(start)
  };
  var subs__9655 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__9654.call(this, s, start);
      case 3:
        return subs__9655.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__9664 = function(name) {
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
  var symbol__9665 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__9664.call(this, ns);
      case 2:
        return symbol__9665.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__9667 = function(name) {
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
  var keyword__9668 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__9667.call(this, ns);
      case 2:
        return keyword__9668.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__9678 = cljs.core.seq.call(null, x);
    var ys__9681 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__9678))) {
        return cljs.core.nil_QMARK_.call(null, ys__9681)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__9681))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__9678), cljs.core.first.call(null, ys__9681)))) {
            var G__9692 = cljs.core.next.call(null, xs__9678);
            var G__9693 = cljs.core.next.call(null, ys__9681);
            xs__9678 = G__9692;
            ys__9681 = G__9693;
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
  return cljs.core.reduce.call(null, function(p1__9694_SHARP_, p2__9695_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__9694_SHARP_, cljs.core.hash.call(null, p2__9695_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__9696__9697 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__9696__9697)) {
    var G__9703__9705 = cljs.core.first.call(null, G__9696__9697);
    var vec__9704__9706 = G__9703__9705;
    var key_name__9708 = cljs.core.nth.call(null, vec__9704__9706, 0, null);
    var f__9709 = cljs.core.nth.call(null, vec__9704__9706, 1, null);
    var G__9696__9710 = G__9696__9697;
    var G__9703__9713 = G__9703__9705;
    var G__9696__9715 = G__9696__9710;
    while(true) {
      var vec__9716__9717 = G__9703__9713;
      var key_name__9718 = cljs.core.nth.call(null, vec__9716__9717, 0, null);
      var f__9719 = cljs.core.nth.call(null, vec__9716__9717, 1, null);
      var G__9696__9720 = G__9696__9715;
      var str_name__9722 = cljs.core.name.call(null, key_name__9718);
      obj[str_name__9722] = f__9719;
      var temp__3698__auto____9723 = cljs.core.next.call(null, G__9696__9720);
      if(cljs.core.truth_(temp__3698__auto____9723)) {
        var G__9696__9724 = temp__3698__auto____9723;
        var G__9727 = cljs.core.first.call(null, G__9696__9724);
        var G__9728 = G__9696__9724;
        G__9703__9713 = G__9727;
        G__9696__9715 = G__9728;
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
  var this__9740 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__9743 = this;
  return new cljs.core.List(this__9743.meta, o, coll, this__9743.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__9746 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__9748 = this;
  return this__9748.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__9751 = this;
  return this__9751.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__9752 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9753 = this;
  return this__9753.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9754 = this;
  return this__9754.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9757 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9758 = this;
  return new cljs.core.List(meta, this__9758.first, this__9758.rest, this__9758.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9761 = this;
  return this__9761.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9763 = this;
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
  var this__9852 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__9855 = this;
  return new cljs.core.List(this__9855.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__9856 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__9857 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__9858 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__9860 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__9862 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__9865 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9868 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__9873 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__9879 = this;
  return this__9879.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__9884 = this;
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
  list.cljs$lang$applyTo = function(arglist__9990) {
    var items = cljs.core.seq(arglist__9990);
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
  var this__9997 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__9998 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__9999 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__10001 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__10001.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__10002 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__10003 = this;
  return this__10003.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__10005 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__10005.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__10005.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__10006 = this;
  return this__10006.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__10007 = this;
  return new cljs.core.Cons(meta, this__10007.first, this__10007.rest)
};
cljs.core.Cons;
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__10013 = null;
  var G__10013__10014 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__10013__10015 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__10013 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__10013__10014.call(this, string, f);
      case 3:
        return G__10013__10015.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__10013
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__10043 = null;
  var G__10043__10044 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__10043__10045 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__10043 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__10043__10044.call(this, string, k);
      case 3:
        return G__10043__10045.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__10043
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__10054 = null;
  var G__10054__10055 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__10054__10056 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__10054 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__10054__10055.call(this, string, n);
      case 3:
        return G__10054__10056.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__10054
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
  var G__10063 = null;
  var G__10063__10064 = function(this$, coll) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString())
  };
  var G__10063__10065 = function(this$, coll, not_found) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString(), not_found)
  };
  G__10063 = function(this$, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__10063__10064.call(this, this$, coll);
      case 3:
        return G__10063__10065.call(this, this$, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__10063
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__10067 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__10067
  }else {
    lazy_seq.x = x__10067.call(null);
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
  var this__10088 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__10089 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__10090 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__10093 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__10093.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__10094 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__10095 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__10096 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__10097 = this;
  return this__10097.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__10098 = this;
  return new cljs.core.LazySeq(meta, this__10098.realized, this__10098.x)
};
cljs.core.LazySeq;
cljs.core.to_array = function to_array(s) {
  var ary__10183 = cljs.core.array.call(null);
  var s__10184 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__10184))) {
      ary__10183.push(cljs.core.first.call(null, s__10184));
      var G__10193 = cljs.core.next.call(null, s__10184);
      s__10184 = G__10193;
      continue
    }else {
      return ary__10183
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__10197 = s;
  var i__10198 = n;
  var sum__10200 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____10202 = i__10198 > 0;
      if(cljs.core.truth_(and__3546__auto____10202)) {
        return cljs.core.seq.call(null, s__10197)
      }else {
        return and__3546__auto____10202
      }
    }())) {
      var G__10209 = cljs.core.next.call(null, s__10197);
      var G__10210 = i__10198 - 1;
      var G__10211 = sum__10200 + 1;
      s__10197 = G__10209;
      i__10198 = G__10210;
      sum__10200 = G__10211;
      continue
    }else {
      return sum__10200
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
  var concat__10219 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__10220 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__10221 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__10216 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__10216)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__10216), concat.call(null, cljs.core.rest.call(null, s__10216), y))
      }else {
        return y
      }
    })
  };
  var concat__10222 = function() {
    var G__10226__delegate = function(x, y, zs) {
      var cat__10218 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__10217 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__10217)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__10217), cat.call(null, cljs.core.rest.call(null, xys__10217), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__10218.call(null, concat.call(null, x, y), zs)
    };
    var G__10226 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__10226__delegate.call(this, x, y, zs)
    };
    G__10226.cljs$lang$maxFixedArity = 2;
    G__10226.cljs$lang$applyTo = function(arglist__10231) {
      var x = cljs.core.first(arglist__10231);
      var y = cljs.core.first(cljs.core.next(arglist__10231));
      var zs = cljs.core.rest(cljs.core.next(arglist__10231));
      return G__10226__delegate.call(this, x, y, zs)
    };
    return G__10226
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__10219.call(this);
      case 1:
        return concat__10220.call(this, x);
      case 2:
        return concat__10221.call(this, x, y);
      default:
        return concat__10222.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__10222.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___10241 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___10242 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___10243 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___10244 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___10245 = function() {
    var G__10336__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__10336 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__10336__delegate.call(this, a, b, c, d, more)
    };
    G__10336.cljs$lang$maxFixedArity = 4;
    G__10336.cljs$lang$applyTo = function(arglist__10337) {
      var a = cljs.core.first(arglist__10337);
      var b = cljs.core.first(cljs.core.next(arglist__10337));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10337)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10337))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10337))));
      return G__10336__delegate.call(this, a, b, c, d, more)
    };
    return G__10336
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___10241.call(this, a);
      case 2:
        return list_STAR___10242.call(this, a, b);
      case 3:
        return list_STAR___10243.call(this, a, b, c);
      case 4:
        return list_STAR___10244.call(this, a, b, c, d);
      default:
        return list_STAR___10245.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___10245.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__10375 = function(f, args) {
    var fixed_arity__10342 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__10342 + 1) <= fixed_arity__10342)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__10376 = function(f, x, args) {
    var arglist__10350 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__10351 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__10350, fixed_arity__10351) <= fixed_arity__10351)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__10350))
      }else {
        return f.cljs$lang$applyTo(arglist__10350)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__10350))
    }
  };
  var apply__10377 = function(f, x, y, args) {
    var arglist__10356 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__10357 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__10356, fixed_arity__10357) <= fixed_arity__10357)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__10356))
      }else {
        return f.cljs$lang$applyTo(arglist__10356)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__10356))
    }
  };
  var apply__10378 = function(f, x, y, z, args) {
    var arglist__10369 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__10370 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__10369, fixed_arity__10370) <= fixed_arity__10370)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__10369))
      }else {
        return f.cljs$lang$applyTo(arglist__10369)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__10369))
    }
  };
  var apply__10379 = function() {
    var G__10385__delegate = function(f, a, b, c, d, args) {
      var arglist__10371 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__10373 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__10371, fixed_arity__10373) <= fixed_arity__10373)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__10371))
        }else {
          return f.cljs$lang$applyTo(arglist__10371)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__10371))
      }
    };
    var G__10385 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__10385__delegate.call(this, f, a, b, c, d, args)
    };
    G__10385.cljs$lang$maxFixedArity = 5;
    G__10385.cljs$lang$applyTo = function(arglist__10387) {
      var f = cljs.core.first(arglist__10387);
      var a = cljs.core.first(cljs.core.next(arglist__10387));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10387)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10387))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10387)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10387)))));
      return G__10385__delegate.call(this, f, a, b, c, d, args)
    };
    return G__10385
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__10375.call(this, f, a);
      case 3:
        return apply__10376.call(this, f, a, b);
      case 4:
        return apply__10377.call(this, f, a, b, c);
      case 5:
        return apply__10378.call(this, f, a, b, c, d);
      default:
        return apply__10379.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__10379.cljs$lang$applyTo;
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
  vary_meta.cljs$lang$applyTo = function(arglist__10391) {
    var obj = cljs.core.first(arglist__10391);
    var f = cljs.core.first(cljs.core.next(arglist__10391));
    var args = cljs.core.rest(cljs.core.next(arglist__10391));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___10399 = function(x) {
    return false
  };
  var not_EQ___10400 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___10401 = function() {
    var G__10405__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__10405 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__10405__delegate.call(this, x, y, more)
    };
    G__10405.cljs$lang$maxFixedArity = 2;
    G__10405.cljs$lang$applyTo = function(arglist__10407) {
      var x = cljs.core.first(arglist__10407);
      var y = cljs.core.first(cljs.core.next(arglist__10407));
      var more = cljs.core.rest(cljs.core.next(arglist__10407));
      return G__10405__delegate.call(this, x, y, more)
    };
    return G__10405
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___10399.call(this, x);
      case 2:
        return not_EQ___10400.call(this, x, y);
      default:
        return not_EQ___10401.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___10401.cljs$lang$applyTo;
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
        var G__10543 = pred;
        var G__10544 = cljs.core.next.call(null, coll);
        pred = G__10543;
        coll = G__10544;
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
      var or__3548__auto____10545 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____10545)) {
        return or__3548__auto____10545
      }else {
        var G__10573 = pred;
        var G__10574 = cljs.core.next.call(null, coll);
        pred = G__10573;
        coll = G__10574;
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
    var G__10588 = null;
    var G__10588__10590 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__10588__10591 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__10588__10592 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__10588__10593 = function() {
      var G__10596__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__10596 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__10596__delegate.call(this, x, y, zs)
      };
      G__10596.cljs$lang$maxFixedArity = 2;
      G__10596.cljs$lang$applyTo = function(arglist__10597) {
        var x = cljs.core.first(arglist__10597);
        var y = cljs.core.first(cljs.core.next(arglist__10597));
        var zs = cljs.core.rest(cljs.core.next(arglist__10597));
        return G__10596__delegate.call(this, x, y, zs)
      };
      return G__10596
    }();
    G__10588 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__10588__10590.call(this);
        case 1:
          return G__10588__10591.call(this, x);
        case 2:
          return G__10588__10592.call(this, x, y);
        default:
          return G__10588__10593.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__10588.cljs$lang$maxFixedArity = 2;
    G__10588.cljs$lang$applyTo = G__10588__10593.cljs$lang$applyTo;
    return G__10588
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__10637__delegate = function(args) {
      return x
    };
    var G__10637 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__10637__delegate.call(this, args)
    };
    G__10637.cljs$lang$maxFixedArity = 0;
    G__10637.cljs$lang$applyTo = function(arglist__10640) {
      var args = cljs.core.seq(arglist__10640);
      return G__10637__delegate.call(this, args)
    };
    return G__10637
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__10649 = function() {
    return cljs.core.identity
  };
  var comp__10650 = function(f) {
    return f
  };
  var comp__10651 = function(f, g) {
    return function() {
      var G__10655 = null;
      var G__10655__10656 = function() {
        return f.call(null, g.call(null))
      };
      var G__10655__10657 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__10655__10658 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__10655__10659 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__10655__10660 = function() {
        var G__10677__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__10677 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10677__delegate.call(this, x, y, z, args)
        };
        G__10677.cljs$lang$maxFixedArity = 3;
        G__10677.cljs$lang$applyTo = function(arglist__10679) {
          var x = cljs.core.first(arglist__10679);
          var y = cljs.core.first(cljs.core.next(arglist__10679));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10679)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10679)));
          return G__10677__delegate.call(this, x, y, z, args)
        };
        return G__10677
      }();
      G__10655 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__10655__10656.call(this);
          case 1:
            return G__10655__10657.call(this, x);
          case 2:
            return G__10655__10658.call(this, x, y);
          case 3:
            return G__10655__10659.call(this, x, y, z);
          default:
            return G__10655__10660.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__10655.cljs$lang$maxFixedArity = 3;
      G__10655.cljs$lang$applyTo = G__10655__10660.cljs$lang$applyTo;
      return G__10655
    }()
  };
  var comp__10652 = function(f, g, h) {
    return function() {
      var G__10701 = null;
      var G__10701__10702 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__10701__10703 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__10701__10704 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__10701__10705 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__10701__10706 = function() {
        var G__10708__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__10708 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10708__delegate.call(this, x, y, z, args)
        };
        G__10708.cljs$lang$maxFixedArity = 3;
        G__10708.cljs$lang$applyTo = function(arglist__10709) {
          var x = cljs.core.first(arglist__10709);
          var y = cljs.core.first(cljs.core.next(arglist__10709));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10709)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10709)));
          return G__10708__delegate.call(this, x, y, z, args)
        };
        return G__10708
      }();
      G__10701 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__10701__10702.call(this);
          case 1:
            return G__10701__10703.call(this, x);
          case 2:
            return G__10701__10704.call(this, x, y);
          case 3:
            return G__10701__10705.call(this, x, y, z);
          default:
            return G__10701__10706.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__10701.cljs$lang$maxFixedArity = 3;
      G__10701.cljs$lang$applyTo = G__10701__10706.cljs$lang$applyTo;
      return G__10701
    }()
  };
  var comp__10653 = function() {
    var G__10710__delegate = function(f1, f2, f3, fs) {
      var fs__10645 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__10711__delegate = function(args) {
          var ret__10646 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__10645), args);
          var fs__10647 = cljs.core.next.call(null, fs__10645);
          while(true) {
            if(cljs.core.truth_(fs__10647)) {
              var G__10712 = cljs.core.first.call(null, fs__10647).call(null, ret__10646);
              var G__10713 = cljs.core.next.call(null, fs__10647);
              ret__10646 = G__10712;
              fs__10647 = G__10713;
              continue
            }else {
              return ret__10646
            }
            break
          }
        };
        var G__10711 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__10711__delegate.call(this, args)
        };
        G__10711.cljs$lang$maxFixedArity = 0;
        G__10711.cljs$lang$applyTo = function(arglist__10714) {
          var args = cljs.core.seq(arglist__10714);
          return G__10711__delegate.call(this, args)
        };
        return G__10711
      }()
    };
    var G__10710 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__10710__delegate.call(this, f1, f2, f3, fs)
    };
    G__10710.cljs$lang$maxFixedArity = 3;
    G__10710.cljs$lang$applyTo = function(arglist__10715) {
      var f1 = cljs.core.first(arglist__10715);
      var f2 = cljs.core.first(cljs.core.next(arglist__10715));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10715)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10715)));
      return G__10710__delegate.call(this, f1, f2, f3, fs)
    };
    return G__10710
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__10649.call(this);
      case 1:
        return comp__10650.call(this, f1);
      case 2:
        return comp__10651.call(this, f1, f2);
      case 3:
        return comp__10652.call(this, f1, f2, f3);
      default:
        return comp__10653.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__10653.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__10744 = function(f, arg1) {
    return function() {
      var G__10757__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__10757 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__10757__delegate.call(this, args)
      };
      G__10757.cljs$lang$maxFixedArity = 0;
      G__10757.cljs$lang$applyTo = function(arglist__10758) {
        var args = cljs.core.seq(arglist__10758);
        return G__10757__delegate.call(this, args)
      };
      return G__10757
    }()
  };
  var partial__10745 = function(f, arg1, arg2) {
    return function() {
      var G__10759__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__10759 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__10759__delegate.call(this, args)
      };
      G__10759.cljs$lang$maxFixedArity = 0;
      G__10759.cljs$lang$applyTo = function(arglist__10761) {
        var args = cljs.core.seq(arglist__10761);
        return G__10759__delegate.call(this, args)
      };
      return G__10759
    }()
  };
  var partial__10746 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__10764__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__10764 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__10764__delegate.call(this, args)
      };
      G__10764.cljs$lang$maxFixedArity = 0;
      G__10764.cljs$lang$applyTo = function(arglist__10766) {
        var args = cljs.core.seq(arglist__10766);
        return G__10764__delegate.call(this, args)
      };
      return G__10764
    }()
  };
  var partial__10747 = function() {
    var G__10767__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__10768__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__10768 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__10768__delegate.call(this, args)
        };
        G__10768.cljs$lang$maxFixedArity = 0;
        G__10768.cljs$lang$applyTo = function(arglist__10770) {
          var args = cljs.core.seq(arglist__10770);
          return G__10768__delegate.call(this, args)
        };
        return G__10768
      }()
    };
    var G__10767 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__10767__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__10767.cljs$lang$maxFixedArity = 4;
    G__10767.cljs$lang$applyTo = function(arglist__10771) {
      var f = cljs.core.first(arglist__10771);
      var arg1 = cljs.core.first(cljs.core.next(arglist__10771));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10771)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10771))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10771))));
      return G__10767__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__10767
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__10744.call(this, f, arg1);
      case 3:
        return partial__10745.call(this, f, arg1, arg2);
      case 4:
        return partial__10746.call(this, f, arg1, arg2, arg3);
      default:
        return partial__10747.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__10747.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__10795 = function(f, x) {
    return function() {
      var G__10801 = null;
      var G__10801__10802 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__10801__10803 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__10801__10804 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__10801__10805 = function() {
        var G__10814__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__10814 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10814__delegate.call(this, a, b, c, ds)
        };
        G__10814.cljs$lang$maxFixedArity = 3;
        G__10814.cljs$lang$applyTo = function(arglist__10817) {
          var a = cljs.core.first(arglist__10817);
          var b = cljs.core.first(cljs.core.next(arglist__10817));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10817)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10817)));
          return G__10814__delegate.call(this, a, b, c, ds)
        };
        return G__10814
      }();
      G__10801 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__10801__10802.call(this, a);
          case 2:
            return G__10801__10803.call(this, a, b);
          case 3:
            return G__10801__10804.call(this, a, b, c);
          default:
            return G__10801__10805.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__10801.cljs$lang$maxFixedArity = 3;
      G__10801.cljs$lang$applyTo = G__10801__10805.cljs$lang$applyTo;
      return G__10801
    }()
  };
  var fnil__10796 = function(f, x, y) {
    return function() {
      var G__10822 = null;
      var G__10822__10823 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__10822__10824 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__10822__10825 = function() {
        var G__10831__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__10831 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10831__delegate.call(this, a, b, c, ds)
        };
        G__10831.cljs$lang$maxFixedArity = 3;
        G__10831.cljs$lang$applyTo = function(arglist__10833) {
          var a = cljs.core.first(arglist__10833);
          var b = cljs.core.first(cljs.core.next(arglist__10833));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10833)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10833)));
          return G__10831__delegate.call(this, a, b, c, ds)
        };
        return G__10831
      }();
      G__10822 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__10822__10823.call(this, a, b);
          case 3:
            return G__10822__10824.call(this, a, b, c);
          default:
            return G__10822__10825.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__10822.cljs$lang$maxFixedArity = 3;
      G__10822.cljs$lang$applyTo = G__10822__10825.cljs$lang$applyTo;
      return G__10822
    }()
  };
  var fnil__10798 = function(f, x, y, z) {
    return function() {
      var G__10836 = null;
      var G__10836__10838 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__10836__10839 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__10836__10840 = function() {
        var G__10849__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__10849 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__10849__delegate.call(this, a, b, c, ds)
        };
        G__10849.cljs$lang$maxFixedArity = 3;
        G__10849.cljs$lang$applyTo = function(arglist__10852) {
          var a = cljs.core.first(arglist__10852);
          var b = cljs.core.first(cljs.core.next(arglist__10852));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10852)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10852)));
          return G__10849__delegate.call(this, a, b, c, ds)
        };
        return G__10849
      }();
      G__10836 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__10836__10838.call(this, a, b);
          case 3:
            return G__10836__10839.call(this, a, b, c);
          default:
            return G__10836__10840.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__10836.cljs$lang$maxFixedArity = 3;
      G__10836.cljs$lang$applyTo = G__10836__10840.cljs$lang$applyTo;
      return G__10836
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__10795.call(this, f, x);
      case 3:
        return fnil__10796.call(this, f, x, y);
      case 4:
        return fnil__10798.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__10879 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____10870 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____10870)) {
        var s__10877 = temp__3698__auto____10870;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__10877)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__10877)))
      }else {
        return null
      }
    })
  };
  return mapi__10879.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____10906 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____10906)) {
      var s__10909 = temp__3698__auto____10906;
      var x__10911 = f.call(null, cljs.core.first.call(null, s__10909));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__10911))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__10909))
      }else {
        return cljs.core.cons.call(null, x__10911, keep.call(null, f, cljs.core.rest.call(null, s__10909)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__10949 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____10942 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____10942)) {
        var s__10945 = temp__3698__auto____10942;
        var x__10947 = f.call(null, idx, cljs.core.first.call(null, s__10945));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__10947))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__10945))
        }else {
          return cljs.core.cons.call(null, x__10947, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__10945)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__10949.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__11123 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__11133 = function() {
        return true
      };
      var ep1__11134 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__11135 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____10997 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____10997)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____10997
          }
        }())
      };
      var ep1__11136 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11004 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11004)) {
            var and__3546__auto____11005 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____11005)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____11005
            }
          }else {
            return and__3546__auto____11004
          }
        }())
      };
      var ep1__11137 = function() {
        var G__11147__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____11006 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____11006)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____11006
            }
          }())
        };
        var G__11147 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11147__delegate.call(this, x, y, z, args)
        };
        G__11147.cljs$lang$maxFixedArity = 3;
        G__11147.cljs$lang$applyTo = function(arglist__11152) {
          var x = cljs.core.first(arglist__11152);
          var y = cljs.core.first(cljs.core.next(arglist__11152));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11152)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11152)));
          return G__11147__delegate.call(this, x, y, z, args)
        };
        return G__11147
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__11133.call(this);
          case 1:
            return ep1__11134.call(this, x);
          case 2:
            return ep1__11135.call(this, x, y);
          case 3:
            return ep1__11136.call(this, x, y, z);
          default:
            return ep1__11137.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__11137.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__11124 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__11154 = function() {
        return true
      };
      var ep2__11155 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11012 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11012)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____11012
          }
        }())
      };
      var ep2__11156 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11014 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11014)) {
            var and__3546__auto____11016 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____11016)) {
              var and__3546__auto____11018 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____11018)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____11018
              }
            }else {
              return and__3546__auto____11016
            }
          }else {
            return and__3546__auto____11014
          }
        }())
      };
      var ep2__11157 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11021 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11021)) {
            var and__3546__auto____11023 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____11023)) {
              var and__3546__auto____11026 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____11026)) {
                var and__3546__auto____11028 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____11028)) {
                  var and__3546__auto____11030 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____11030)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____11030
                  }
                }else {
                  return and__3546__auto____11028
                }
              }else {
                return and__3546__auto____11026
              }
            }else {
              return and__3546__auto____11023
            }
          }else {
            return and__3546__auto____11021
          }
        }())
      };
      var ep2__11158 = function() {
        var G__11220__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____11033 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____11033)) {
              return cljs.core.every_QMARK_.call(null, function(p1__10930_SHARP_) {
                var and__3546__auto____11034 = p1.call(null, p1__10930_SHARP_);
                if(cljs.core.truth_(and__3546__auto____11034)) {
                  return p2.call(null, p1__10930_SHARP_)
                }else {
                  return and__3546__auto____11034
                }
              }, args)
            }else {
              return and__3546__auto____11033
            }
          }())
        };
        var G__11220 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11220__delegate.call(this, x, y, z, args)
        };
        G__11220.cljs$lang$maxFixedArity = 3;
        G__11220.cljs$lang$applyTo = function(arglist__11226) {
          var x = cljs.core.first(arglist__11226);
          var y = cljs.core.first(cljs.core.next(arglist__11226));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11226)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11226)));
          return G__11220__delegate.call(this, x, y, z, args)
        };
        return G__11220
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__11154.call(this);
          case 1:
            return ep2__11155.call(this, x);
          case 2:
            return ep2__11156.call(this, x, y);
          case 3:
            return ep2__11157.call(this, x, y, z);
          default:
            return ep2__11158.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__11158.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__11125 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__11231 = function() {
        return true
      };
      var ep3__11232 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11042 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11042)) {
            var and__3546__auto____11043 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____11043)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____11043
            }
          }else {
            return and__3546__auto____11042
          }
        }())
      };
      var ep3__11233 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11049 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11049)) {
            var and__3546__auto____11051 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____11051)) {
              var and__3546__auto____11053 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____11053)) {
                var and__3546__auto____11054 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____11054)) {
                  var and__3546__auto____11056 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____11056)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____11056
                  }
                }else {
                  return and__3546__auto____11054
                }
              }else {
                return and__3546__auto____11053
              }
            }else {
              return and__3546__auto____11051
            }
          }else {
            return and__3546__auto____11049
          }
        }())
      };
      var ep3__11234 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____11060 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____11060)) {
            var and__3546__auto____11063 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____11063)) {
              var and__3546__auto____11066 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____11066)) {
                var and__3546__auto____11067 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____11067)) {
                  var and__3546__auto____11069 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____11069)) {
                    var and__3546__auto____11072 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____11072)) {
                      var and__3546__auto____11073 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____11073)) {
                        var and__3546__auto____11074 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____11074)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____11074
                        }
                      }else {
                        return and__3546__auto____11073
                      }
                    }else {
                      return and__3546__auto____11072
                    }
                  }else {
                    return and__3546__auto____11069
                  }
                }else {
                  return and__3546__auto____11067
                }
              }else {
                return and__3546__auto____11066
              }
            }else {
              return and__3546__auto____11063
            }
          }else {
            return and__3546__auto____11060
          }
        }())
      };
      var ep3__11235 = function() {
        var G__11257__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____11079 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____11079)) {
              return cljs.core.every_QMARK_.call(null, function(p1__10932_SHARP_) {
                var and__3546__auto____11087 = p1.call(null, p1__10932_SHARP_);
                if(cljs.core.truth_(and__3546__auto____11087)) {
                  var and__3546__auto____11089 = p2.call(null, p1__10932_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____11089)) {
                    return p3.call(null, p1__10932_SHARP_)
                  }else {
                    return and__3546__auto____11089
                  }
                }else {
                  return and__3546__auto____11087
                }
              }, args)
            }else {
              return and__3546__auto____11079
            }
          }())
        };
        var G__11257 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11257__delegate.call(this, x, y, z, args)
        };
        G__11257.cljs$lang$maxFixedArity = 3;
        G__11257.cljs$lang$applyTo = function(arglist__11262) {
          var x = cljs.core.first(arglist__11262);
          var y = cljs.core.first(cljs.core.next(arglist__11262));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
          return G__11257__delegate.call(this, x, y, z, args)
        };
        return G__11257
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__11231.call(this);
          case 1:
            return ep3__11232.call(this, x);
          case 2:
            return ep3__11233.call(this, x, y);
          case 3:
            return ep3__11234.call(this, x, y, z);
          default:
            return ep3__11235.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__11235.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__11126 = function() {
    var G__11265__delegate = function(p1, p2, p3, ps) {
      var ps__11090 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__11266 = function() {
          return true
        };
        var epn__11267 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__10933_SHARP_) {
            return p1__10933_SHARP_.call(null, x)
          }, ps__11090)
        };
        var epn__11268 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__10934_SHARP_) {
            var and__3546__auto____11096 = p1__10934_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____11096)) {
              return p1__10934_SHARP_.call(null, y)
            }else {
              return and__3546__auto____11096
            }
          }, ps__11090)
        };
        var epn__11269 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__10936_SHARP_) {
            var and__3546__auto____11105 = p1__10936_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____11105)) {
              var and__3546__auto____11107 = p1__10936_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____11107)) {
                return p1__10936_SHARP_.call(null, z)
              }else {
                return and__3546__auto____11107
              }
            }else {
              return and__3546__auto____11105
            }
          }, ps__11090)
        };
        var epn__11271 = function() {
          var G__11288__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____11109 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____11109)) {
                return cljs.core.every_QMARK_.call(null, function(p1__10938_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__10938_SHARP_, args)
                }, ps__11090)
              }else {
                return and__3546__auto____11109
              }
            }())
          };
          var G__11288 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__11288__delegate.call(this, x, y, z, args)
          };
          G__11288.cljs$lang$maxFixedArity = 3;
          G__11288.cljs$lang$applyTo = function(arglist__11293) {
            var x = cljs.core.first(arglist__11293);
            var y = cljs.core.first(cljs.core.next(arglist__11293));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11293)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11293)));
            return G__11288__delegate.call(this, x, y, z, args)
          };
          return G__11288
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__11266.call(this);
            case 1:
              return epn__11267.call(this, x);
            case 2:
              return epn__11268.call(this, x, y);
            case 3:
              return epn__11269.call(this, x, y, z);
            default:
              return epn__11271.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__11271.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__11265 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__11265__delegate.call(this, p1, p2, p3, ps)
    };
    G__11265.cljs$lang$maxFixedArity = 3;
    G__11265.cljs$lang$applyTo = function(arglist__11300) {
      var p1 = cljs.core.first(arglist__11300);
      var p2 = cljs.core.first(cljs.core.next(arglist__11300));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11300)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11300)));
      return G__11265__delegate.call(this, p1, p2, p3, ps)
    };
    return G__11265
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__11123.call(this, p1);
      case 2:
        return every_pred__11124.call(this, p1, p2);
      case 3:
        return every_pred__11125.call(this, p1, p2, p3);
      default:
        return every_pred__11126.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__11126.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__11639 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__11650 = function() {
        return null
      };
      var sp1__11651 = function(x) {
        return p.call(null, x)
      };
      var sp1__11652 = function(x, y) {
        var or__3548__auto____11317 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11317)) {
          return or__3548__auto____11317
        }else {
          return p.call(null, y)
        }
      };
      var sp1__11653 = function(x, y, z) {
        var or__3548__auto____11320 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11320)) {
          return or__3548__auto____11320
        }else {
          var or__3548__auto____11323 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____11323)) {
            return or__3548__auto____11323
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__11654 = function() {
        var G__11656__delegate = function(x, y, z, args) {
          var or__3548__auto____11326 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____11326)) {
            return or__3548__auto____11326
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__11656 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11656__delegate.call(this, x, y, z, args)
        };
        G__11656.cljs$lang$maxFixedArity = 3;
        G__11656.cljs$lang$applyTo = function(arglist__11658) {
          var x = cljs.core.first(arglist__11658);
          var y = cljs.core.first(cljs.core.next(arglist__11658));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11658)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11658)));
          return G__11656__delegate.call(this, x, y, z, args)
        };
        return G__11656
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__11650.call(this);
          case 1:
            return sp1__11651.call(this, x);
          case 2:
            return sp1__11652.call(this, x, y);
          case 3:
            return sp1__11653.call(this, x, y, z);
          default:
            return sp1__11654.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__11654.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__11640 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__11660 = function() {
        return null
      };
      var sp2__11661 = function(x) {
        var or__3548__auto____11330 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11330)) {
          return or__3548__auto____11330
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__11662 = function(x, y) {
        var or__3548__auto____11404 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11404)) {
          return or__3548__auto____11404
        }else {
          var or__3548__auto____11406 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____11406)) {
            return or__3548__auto____11406
          }else {
            var or__3548__auto____11407 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____11407)) {
              return or__3548__auto____11407
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__11663 = function(x, y, z) {
        var or__3548__auto____11409 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11409)) {
          return or__3548__auto____11409
        }else {
          var or__3548__auto____11411 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____11411)) {
            return or__3548__auto____11411
          }else {
            var or__3548__auto____11419 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____11419)) {
              return or__3548__auto____11419
            }else {
              var or__3548__auto____11422 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____11422)) {
                return or__3548__auto____11422
              }else {
                var or__3548__auto____11427 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____11427)) {
                  return or__3548__auto____11427
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__11664 = function() {
        var G__11671__delegate = function(x, y, z, args) {
          var or__3548__auto____11437 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____11437)) {
            return or__3548__auto____11437
          }else {
            return cljs.core.some.call(null, function(p1__10974_SHARP_) {
              var or__3548__auto____11439 = p1.call(null, p1__10974_SHARP_);
              if(cljs.core.truth_(or__3548__auto____11439)) {
                return or__3548__auto____11439
              }else {
                return p2.call(null, p1__10974_SHARP_)
              }
            }, args)
          }
        };
        var G__11671 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11671__delegate.call(this, x, y, z, args)
        };
        G__11671.cljs$lang$maxFixedArity = 3;
        G__11671.cljs$lang$applyTo = function(arglist__11674) {
          var x = cljs.core.first(arglist__11674);
          var y = cljs.core.first(cljs.core.next(arglist__11674));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11674)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11674)));
          return G__11671__delegate.call(this, x, y, z, args)
        };
        return G__11671
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__11660.call(this);
          case 1:
            return sp2__11661.call(this, x);
          case 2:
            return sp2__11662.call(this, x, y);
          case 3:
            return sp2__11663.call(this, x, y, z);
          default:
            return sp2__11664.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__11664.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__11641 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__11680 = function() {
        return null
      };
      var sp3__11681 = function(x) {
        var or__3548__auto____11442 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11442)) {
          return or__3548__auto____11442
        }else {
          var or__3548__auto____11444 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____11444)) {
            return or__3548__auto____11444
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__11682 = function(x, y) {
        var or__3548__auto____11552 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11552)) {
          return or__3548__auto____11552
        }else {
          var or__3548__auto____11553 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____11553)) {
            return or__3548__auto____11553
          }else {
            var or__3548__auto____11554 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____11554)) {
              return or__3548__auto____11554
            }else {
              var or__3548__auto____11561 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____11561)) {
                return or__3548__auto____11561
              }else {
                var or__3548__auto____11564 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____11564)) {
                  return or__3548__auto____11564
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__11741 = function(x, y, z) {
        var or__3548__auto____11567 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____11567)) {
          return or__3548__auto____11567
        }else {
          var or__3548__auto____11572 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____11572)) {
            return or__3548__auto____11572
          }else {
            var or__3548__auto____11573 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____11573)) {
              return or__3548__auto____11573
            }else {
              var or__3548__auto____11574 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____11574)) {
                return or__3548__auto____11574
              }else {
                var or__3548__auto____11575 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____11575)) {
                  return or__3548__auto____11575
                }else {
                  var or__3548__auto____11576 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____11576)) {
                    return or__3548__auto____11576
                  }else {
                    var or__3548__auto____11577 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____11577)) {
                      return or__3548__auto____11577
                    }else {
                      var or__3548__auto____11578 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____11578)) {
                        return or__3548__auto____11578
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
      var sp3__11742 = function() {
        var G__11752__delegate = function(x, y, z, args) {
          var or__3548__auto____11580 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____11580)) {
            return or__3548__auto____11580
          }else {
            return cljs.core.some.call(null, function(p1__10977_SHARP_) {
              var or__3548__auto____11583 = p1.call(null, p1__10977_SHARP_);
              if(cljs.core.truth_(or__3548__auto____11583)) {
                return or__3548__auto____11583
              }else {
                var or__3548__auto____11585 = p2.call(null, p1__10977_SHARP_);
                if(cljs.core.truth_(or__3548__auto____11585)) {
                  return or__3548__auto____11585
                }else {
                  return p3.call(null, p1__10977_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__11752 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__11752__delegate.call(this, x, y, z, args)
        };
        G__11752.cljs$lang$maxFixedArity = 3;
        G__11752.cljs$lang$applyTo = function(arglist__11758) {
          var x = cljs.core.first(arglist__11758);
          var y = cljs.core.first(cljs.core.next(arglist__11758));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11758)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11758)));
          return G__11752__delegate.call(this, x, y, z, args)
        };
        return G__11752
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__11680.call(this);
          case 1:
            return sp3__11681.call(this, x);
          case 2:
            return sp3__11682.call(this, x, y);
          case 3:
            return sp3__11741.call(this, x, y, z);
          default:
            return sp3__11742.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__11742.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__11642 = function() {
    var G__11762__delegate = function(p1, p2, p3, ps) {
      var ps__11586 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__11763 = function() {
          return null
        };
        var spn__11867 = function(x) {
          return cljs.core.some.call(null, function(p1__10978_SHARP_) {
            return p1__10978_SHARP_.call(null, x)
          }, ps__11586)
        };
        var spn__11868 = function(x, y) {
          return cljs.core.some.call(null, function(p1__10979_SHARP_) {
            var or__3548__auto____11590 = p1__10979_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____11590)) {
              return or__3548__auto____11590
            }else {
              return p1__10979_SHARP_.call(null, y)
            }
          }, ps__11586)
        };
        var spn__11869 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__10994_SHARP_) {
            var or__3548__auto____11594 = p1__10994_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____11594)) {
              return or__3548__auto____11594
            }else {
              var or__3548__auto____11595 = p1__10994_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____11595)) {
                return or__3548__auto____11595
              }else {
                return p1__10994_SHARP_.call(null, z)
              }
            }
          }, ps__11586)
        };
        var spn__11870 = function() {
          var G__11885__delegate = function(x, y, z, args) {
            var or__3548__auto____11597 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____11597)) {
              return or__3548__auto____11597
            }else {
              return cljs.core.some.call(null, function(p1__10995_SHARP_) {
                return cljs.core.some.call(null, p1__10995_SHARP_, args)
              }, ps__11586)
            }
          };
          var G__11885 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__11885__delegate.call(this, x, y, z, args)
          };
          G__11885.cljs$lang$maxFixedArity = 3;
          G__11885.cljs$lang$applyTo = function(arglist__11886) {
            var x = cljs.core.first(arglist__11886);
            var y = cljs.core.first(cljs.core.next(arglist__11886));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11886)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11886)));
            return G__11885__delegate.call(this, x, y, z, args)
          };
          return G__11885
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__11763.call(this);
            case 1:
              return spn__11867.call(this, x);
            case 2:
              return spn__11868.call(this, x, y);
            case 3:
              return spn__11869.call(this, x, y, z);
            default:
              return spn__11870.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__11870.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__11762 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__11762__delegate.call(this, p1, p2, p3, ps)
    };
    G__11762.cljs$lang$maxFixedArity = 3;
    G__11762.cljs$lang$applyTo = function(arglist__11894) {
      var p1 = cljs.core.first(arglist__11894);
      var p2 = cljs.core.first(cljs.core.next(arglist__11894));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11894)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11894)));
      return G__11762__delegate.call(this, p1, p2, p3, ps)
    };
    return G__11762
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__11639.call(this, p1);
      case 2:
        return some_fn__11640.call(this, p1, p2);
      case 3:
        return some_fn__11641.call(this, p1, p2, p3);
      default:
        return some_fn__11642.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__11642.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__11923 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____11898 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____11898)) {
        var s__11899 = temp__3698__auto____11898;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__11899)), map.call(null, f, cljs.core.rest.call(null, s__11899)))
      }else {
        return null
      }
    })
  };
  var map__11924 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__11903 = cljs.core.seq.call(null, c1);
      var s2__11904 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____11906 = s1__11903;
        if(cljs.core.truth_(and__3546__auto____11906)) {
          return s2__11904
        }else {
          return and__3546__auto____11906
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__11903), cljs.core.first.call(null, s2__11904)), map.call(null, f, cljs.core.rest.call(null, s1__11903), cljs.core.rest.call(null, s2__11904)))
      }else {
        return null
      }
    })
  };
  var map__11925 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__11912 = cljs.core.seq.call(null, c1);
      var s2__11913 = cljs.core.seq.call(null, c2);
      var s3__11914 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____11917 = s1__11912;
        if(cljs.core.truth_(and__3546__auto____11917)) {
          var and__3546__auto____11918 = s2__11913;
          if(cljs.core.truth_(and__3546__auto____11918)) {
            return s3__11914
          }else {
            return and__3546__auto____11918
          }
        }else {
          return and__3546__auto____11917
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__11912), cljs.core.first.call(null, s2__11913), cljs.core.first.call(null, s3__11914)), map.call(null, f, cljs.core.rest.call(null, s1__11912), cljs.core.rest.call(null, s2__11913), cljs.core.rest.call(null, s3__11914)))
      }else {
        return null
      }
    })
  };
  var map__11926 = function() {
    var G__11933__delegate = function(f, c1, c2, c3, colls) {
      var step__11922 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__11920 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__11920))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__11920), step.call(null, map.call(null, cljs.core.rest, ss__11920)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__11311_SHARP_) {
        return cljs.core.apply.call(null, f, p1__11311_SHARP_)
      }, step__11922.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__11933 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__11933__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__11933.cljs$lang$maxFixedArity = 4;
    G__11933.cljs$lang$applyTo = function(arglist__11936) {
      var f = cljs.core.first(arglist__11936);
      var c1 = cljs.core.first(cljs.core.next(arglist__11936));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11936)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11936))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11936))));
      return G__11933__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__11933
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__11923.call(this, f, c1);
      case 3:
        return map__11924.call(this, f, c1, c2);
      case 4:
        return map__11925.call(this, f, c1, c2, c3);
      default:
        return map__11926.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__11926.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____11938 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____11938)) {
        var s__11940 = temp__3698__auto____11938;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__11940), take.call(null, n - 1, cljs.core.rest.call(null, s__11940)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__11946 = function(n, coll) {
    while(true) {
      var s__11944 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____11945 = n > 0;
        if(cljs.core.truth_(and__3546__auto____11945)) {
          return s__11944
        }else {
          return and__3546__auto____11945
        }
      }())) {
        var G__12013 = n - 1;
        var G__12014 = cljs.core.rest.call(null, s__11944);
        n = G__12013;
        coll = G__12014;
        continue
      }else {
        return s__11944
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__11946.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__12022 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__12023 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__12022.call(this, n);
      case 2:
        return drop_last__12023.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__12028 = cljs.core.seq.call(null, coll);
  var lead__12029 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__12029)) {
      var G__12041 = cljs.core.next.call(null, s__12028);
      var G__12042 = cljs.core.next.call(null, lead__12029);
      s__12028 = G__12041;
      lead__12029 = G__12042;
      continue
    }else {
      return s__12028
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__12050 = function(pred, coll) {
    while(true) {
      var s__12045 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____12047 = s__12045;
        if(cljs.core.truth_(and__3546__auto____12047)) {
          return pred.call(null, cljs.core.first.call(null, s__12045))
        }else {
          return and__3546__auto____12047
        }
      }())) {
        var G__12051 = pred;
        var G__12052 = cljs.core.rest.call(null, s__12045);
        pred = G__12051;
        coll = G__12052;
        continue
      }else {
        return s__12045
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__12050.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____12054 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____12054)) {
      var s__12055 = temp__3698__auto____12054;
      return cljs.core.concat.call(null, s__12055, cycle.call(null, s__12055))
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
  var repeat__12057 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__12058 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__12057.call(this, n);
      case 2:
        return repeat__12058.call(this, n, x)
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
  var repeatedly__12131 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__12132 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__12131.call(this, n);
      case 2:
        return repeatedly__12132.call(this, n, f)
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
  var interleave__12146 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__12139 = cljs.core.seq.call(null, c1);
      var s2__12140 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____12141 = s1__12139;
        if(cljs.core.truth_(and__3546__auto____12141)) {
          return s2__12140
        }else {
          return and__3546__auto____12141
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__12139), cljs.core.cons.call(null, cljs.core.first.call(null, s2__12140), interleave.call(null, cljs.core.rest.call(null, s1__12139), cljs.core.rest.call(null, s2__12140))))
      }else {
        return null
      }
    })
  };
  var interleave__12147 = function() {
    var G__12149__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__12144 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__12144))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__12144), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__12144)))
        }else {
          return null
        }
      })
    };
    var G__12149 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12149__delegate.call(this, c1, c2, colls)
    };
    G__12149.cljs$lang$maxFixedArity = 2;
    G__12149.cljs$lang$applyTo = function(arglist__12222) {
      var c1 = cljs.core.first(arglist__12222);
      var c2 = cljs.core.first(cljs.core.next(arglist__12222));
      var colls = cljs.core.rest(cljs.core.next(arglist__12222));
      return G__12149__delegate.call(this, c1, c2, colls)
    };
    return G__12149
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__12146.call(this, c1, c2);
      default:
        return interleave__12147.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__12147.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__12229 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____12226 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____12226)) {
        var coll__12227 = temp__3695__auto____12226;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__12227), cat.call(null, cljs.core.rest.call(null, coll__12227), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__12229.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__12231 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__12232 = function() {
    var G__12234__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__12234 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12234__delegate.call(this, f, coll, colls)
    };
    G__12234.cljs$lang$maxFixedArity = 2;
    G__12234.cljs$lang$applyTo = function(arglist__12235) {
      var f = cljs.core.first(arglist__12235);
      var coll = cljs.core.first(cljs.core.next(arglist__12235));
      var colls = cljs.core.rest(cljs.core.next(arglist__12235));
      return G__12234__delegate.call(this, f, coll, colls)
    };
    return G__12234
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__12231.call(this, f, coll);
      default:
        return mapcat__12232.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__12232.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____12236 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____12236)) {
      var s__12237 = temp__3698__auto____12236;
      var f__12238 = cljs.core.first.call(null, s__12237);
      var r__12239 = cljs.core.rest.call(null, s__12237);
      if(cljs.core.truth_(pred.call(null, f__12238))) {
        return cljs.core.cons.call(null, f__12238, filter.call(null, pred, r__12239))
      }else {
        return filter.call(null, pred, r__12239)
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
  var walk__12247 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__12247.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__12245_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__12245_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__12268 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__12269 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____12255 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____12255)) {
        var s__12256 = temp__3698__auto____12255;
        var p__12257 = cljs.core.take.call(null, n, s__12256);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__12257)))) {
          return cljs.core.cons.call(null, p__12257, partition.call(null, n, step, cljs.core.drop.call(null, step, s__12256)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__12270 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____12259 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____12259)) {
        var s__12260 = temp__3698__auto____12259;
        var p__12261 = cljs.core.take.call(null, n, s__12260);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__12261)))) {
          return cljs.core.cons.call(null, p__12261, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__12260)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__12261, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__12268.call(this, n, step);
      case 3:
        return partition__12269.call(this, n, step, pad);
      case 4:
        return partition__12270.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__12286 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__12287 = function(m, ks, not_found) {
    var sentinel__12279 = cljs.core.lookup_sentinel;
    var m__12281 = m;
    var ks__12283 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__12283)) {
        var m__12285 = cljs.core.get.call(null, m__12281, cljs.core.first.call(null, ks__12283), sentinel__12279);
        if(cljs.core.truth_(sentinel__12279 === m__12285)) {
          return not_found
        }else {
          var G__12289 = sentinel__12279;
          var G__12290 = m__12285;
          var G__12291 = cljs.core.next.call(null, ks__12283);
          sentinel__12279 = G__12289;
          m__12281 = G__12290;
          ks__12283 = G__12291;
          continue
        }
      }else {
        return m__12281
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__12286.call(this, m, ks);
      case 3:
        return get_in__12287.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__12293, v) {
  var vec__12294__12295 = p__12293;
  var k__12296 = cljs.core.nth.call(null, vec__12294__12295, 0, null);
  var ks__12297 = cljs.core.nthnext.call(null, vec__12294__12295, 1);
  if(cljs.core.truth_(ks__12297)) {
    return cljs.core.assoc.call(null, m, k__12296, assoc_in.call(null, cljs.core.get.call(null, m, k__12296), ks__12297, v))
  }else {
    return cljs.core.assoc.call(null, m, k__12296, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__12303, f, args) {
    var vec__12304__12306 = p__12303;
    var k__12307 = cljs.core.nth.call(null, vec__12304__12306, 0, null);
    var ks__12308 = cljs.core.nthnext.call(null, vec__12304__12306, 1);
    if(cljs.core.truth_(ks__12308)) {
      return cljs.core.assoc.call(null, m, k__12307, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__12307), ks__12308, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__12307, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__12307), args))
    }
  };
  var update_in = function(m, p__12303, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__12303, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__12315) {
    var m = cljs.core.first(arglist__12315);
    var p__12303 = cljs.core.first(cljs.core.next(arglist__12315));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12315)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12315)));
    return update_in__delegate.call(this, m, p__12303, f, args)
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
  var this__12324 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__12383 = null;
  var G__12383__12384 = function(coll, k) {
    var this__12325 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__12383__12385 = function(coll, k, not_found) {
    var this__12326 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__12383 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12383__12384.call(this, coll, k);
      case 3:
        return G__12383__12385.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12383
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__12339 = this;
  var new_array__12340 = cljs.core.aclone.call(null, this__12339.array);
  new_array__12340[k] = v;
  return new cljs.core.Vector(this__12339.meta, new_array__12340)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = function() {
  var G__12387 = null;
  var G__12387__12388 = function(coll, k) {
    var this__12341 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__12387__12389 = function(coll, k, not_found) {
    var this__12346 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__12387 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12387__12388.call(this, coll, k);
      case 3:
        return G__12387__12389.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12387
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__12347 = this;
  var new_array__12348 = cljs.core.aclone.call(null, this__12347.array);
  new_array__12348.push(o);
  return new cljs.core.Vector(this__12347.meta, new_array__12348)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__12394 = null;
  var G__12394__12395 = function(v, f) {
    var this__12351 = this;
    return cljs.core.ci_reduce.call(null, this__12351.array, f)
  };
  var G__12394__12396 = function(v, f, start) {
    var this__12355 = this;
    return cljs.core.ci_reduce.call(null, this__12355.array, f, start)
  };
  G__12394 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__12394__12395.call(this, v, f);
      case 3:
        return G__12394__12396.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12394
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12356 = this;
  if(cljs.core.truth_(this__12356.array.length > 0)) {
    var vector_seq__12361 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__12356.array.length)) {
          return cljs.core.cons.call(null, this__12356.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__12361.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12362 = this;
  return this__12362.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__12363 = this;
  var count__12364 = this__12363.array.length;
  if(cljs.core.truth_(count__12364 > 0)) {
    return this__12363.array[count__12364 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__12365 = this;
  if(cljs.core.truth_(this__12365.array.length > 0)) {
    var new_array__12367 = cljs.core.aclone.call(null, this__12365.array);
    new_array__12367.pop();
    return new cljs.core.Vector(this__12365.meta, new_array__12367)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__12368 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12369 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12370 = this;
  return new cljs.core.Vector(meta, this__12370.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12371 = this;
  return this__12371.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__12416 = null;
  var G__12416__12417 = function(coll, n) {
    var this__12372 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____12373 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____12373)) {
        return n < this__12372.array.length
      }else {
        return and__3546__auto____12373
      }
    }())) {
      return this__12372.array[n]
    }else {
      return null
    }
  };
  var G__12416__12418 = function(coll, n, not_found) {
    var this__12375 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____12379 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____12379)) {
        return n < this__12375.array.length
      }else {
        return and__3546__auto____12379
      }
    }())) {
      return this__12375.array[n]
    }else {
      return not_found
    }
  };
  G__12416 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12416__12417.call(this, coll, n);
      case 3:
        return G__12416__12418.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12416
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12382 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__12382.meta)
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
  vector.cljs$lang$applyTo = function(arglist__12469) {
    var args = cljs.core.seq(arglist__12469);
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
  var this__12485 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__12554 = null;
  var G__12554__12555 = function(coll, k) {
    var this__12487 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__12554__12556 = function(coll, k, not_found) {
    var this__12489 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__12554 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12554__12555.call(this, coll, k);
      case 3:
        return G__12554__12556.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12554
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__12491 = this;
  var v_pos__12493 = this__12491.start + key;
  return new cljs.core.Subvec(this__12491.meta, cljs.core._assoc.call(null, this__12491.v, v_pos__12493, val), this__12491.start, this__12491.end > v_pos__12493 + 1 ? this__12491.end : v_pos__12493 + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = function() {
  var G__12558 = null;
  var G__12558__12559 = function(coll, k) {
    var this__12495 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__12558__12560 = function(coll, k, not_found) {
    var this__12497 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__12558 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12558__12559.call(this, coll, k);
      case 3:
        return G__12558__12560.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12558
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__12498 = this;
  return new cljs.core.Subvec(this__12498.meta, cljs.core._assoc_n.call(null, this__12498.v, this__12498.end, o), this__12498.start, this__12498.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__12565 = null;
  var G__12565__12567 = function(coll, f) {
    var this__12503 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__12565__12568 = function(coll, f, start) {
    var this__12504 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__12565 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__12565__12567.call(this, coll, f);
      case 3:
        return G__12565__12568.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12565
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12508 = this;
  var subvec_seq__12514 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__12508.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__12508.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__12514.call(null, this__12508.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12515 = this;
  return this__12515.end - this__12515.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__12516 = this;
  return cljs.core._nth.call(null, this__12516.v, this__12516.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__12517 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__12517.start, this__12517.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__12517.meta, this__12517.v, this__12517.start, this__12517.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__12522 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12523 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12527 = this;
  return new cljs.core.Subvec(meta, this__12527.v, this__12527.start, this__12527.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12528 = this;
  return this__12528.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__12590 = null;
  var G__12590__12591 = function(coll, n) {
    var this__12529 = this;
    return cljs.core._nth.call(null, this__12529.v, this__12529.start + n)
  };
  var G__12590__12592 = function(coll, n, not_found) {
    var this__12530 = this;
    return cljs.core._nth.call(null, this__12530.v, this__12530.start + n, not_found)
  };
  G__12590 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12590__12591.call(this, coll, n);
      case 3:
        return G__12590__12592.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12590
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12551 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__12551.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__12615 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__12616 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__12615.call(this, v, start);
      case 3:
        return subvec__12616.call(this, v, start, end)
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
  var this__12633 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__12635 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12637 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12638 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__12638.meta)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__12639 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__12640 = this;
  return cljs.core._first.call(null, this__12640.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__12642 = this;
  var temp__3695__auto____12643 = cljs.core.next.call(null, this__12642.front);
  if(cljs.core.truth_(temp__3695__auto____12643)) {
    var f1__12644 = temp__3695__auto____12643;
    return new cljs.core.PersistentQueueSeq(this__12642.meta, f1__12644, this__12642.rear)
  }else {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__12642.rear))) {
      return cljs.core._empty.call(null, coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__12642.meta, this__12642.rear, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12646 = this;
  return this__12646.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12647 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__12647.front, this__12647.rear)
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
  var this__12660 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__12661 = this;
  if(cljs.core.truth_(this__12661.front)) {
    return new cljs.core.PersistentQueue(this__12661.meta, this__12661.count + 1, this__12661.front, cljs.core.conj.call(null, function() {
      var or__3548__auto____12663 = this__12661.rear;
      if(cljs.core.truth_(or__3548__auto____12663)) {
        return or__3548__auto____12663
      }else {
        return cljs.core.Vector.fromArray([])
      }
    }(), o))
  }else {
    return new cljs.core.PersistentQueue(this__12661.meta, this__12661.count + 1, cljs.core.conj.call(null, this__12661.front, o), cljs.core.Vector.fromArray([]))
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12667 = this;
  var rear__12668 = cljs.core.seq.call(null, this__12667.rear);
  if(cljs.core.truth_(function() {
    var or__3548__auto____12669 = this__12667.front;
    if(cljs.core.truth_(or__3548__auto____12669)) {
      return or__3548__auto____12669
    }else {
      return rear__12668
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__12667.front, cljs.core.seq.call(null, rear__12668))
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12674 = this;
  return this__12674.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__12676 = this;
  return cljs.core._first.call(null, this__12676.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__12678 = this;
  if(cljs.core.truth_(this__12678.front)) {
    var temp__3695__auto____12679 = cljs.core.next.call(null, this__12678.front);
    if(cljs.core.truth_(temp__3695__auto____12679)) {
      var f1__12680 = temp__3695__auto____12679;
      return new cljs.core.PersistentQueue(this__12678.meta, this__12678.count - 1, f1__12680, this__12678.rear)
    }else {
      return new cljs.core.PersistentQueue(this__12678.meta, this__12678.count - 1, cljs.core.seq.call(null, this__12678.rear), cljs.core.Vector.fromArray([]))
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__12682 = this;
  return cljs.core.first.call(null, this__12682.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__12683 = this;
  return cljs.core.rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12686 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12690 = this;
  return new cljs.core.PersistentQueue(meta, this__12690.count, this__12690.front, this__12690.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12693 = this;
  return this__12693.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12694 = this;
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
  var this__12721 = this;
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
  var len__12799 = array.length;
  var i__12800 = 0;
  while(true) {
    if(cljs.core.truth_(i__12800 < len__12799)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__12800]))) {
        return i__12800
      }else {
        var G__12805 = i__12800 + incr;
        i__12800 = G__12805;
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
  var obj_map_contains_key_QMARK___12813 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___12814 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____12810 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____12810)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____12810
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
        return obj_map_contains_key_QMARK___12813.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___12814.call(this, k, strobj, true_val, false_val)
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
  var this__12840 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__12929 = null;
  var G__12929__12930 = function(coll, k) {
    var this__12845 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__12929__12931 = function(coll, k, not_found) {
    var this__12846 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__12846.strobj, this__12846.strobj[k], not_found)
  };
  G__12929 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12929__12930.call(this, coll, k);
      case 3:
        return G__12929__12931.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12929
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__12849 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__12852 = goog.object.clone.call(null, this__12849.strobj);
    var overwrite_QMARK___12854 = new_strobj__12852.hasOwnProperty(k);
    new_strobj__12852[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___12854)) {
      return new cljs.core.ObjMap(this__12849.meta, this__12849.keys, new_strobj__12852)
    }else {
      var new_keys__12858 = cljs.core.aclone.call(null, this__12849.keys);
      new_keys__12858.push(k);
      return new cljs.core.ObjMap(this__12849.meta, new_keys__12858, new_strobj__12852)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__12849.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__12865 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__12865.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = function() {
  var G__12941 = null;
  var G__12941__12943 = function(coll, k) {
    var this__12867 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__12941__12944 = function(coll, k, not_found) {
    var this__12869 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__12941 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12941__12943.call(this, coll, k);
      case 3:
        return G__12941__12944.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12941
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__12872 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__12878 = this;
  if(cljs.core.truth_(this__12878.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__12827_SHARP_) {
      return cljs.core.vector.call(null, p1__12827_SHARP_, this__12878.strobj[p1__12827_SHARP_])
    }, this__12878.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__12880 = this;
  return this__12880.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__12881 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__12886 = this;
  return new cljs.core.ObjMap(meta, this__12886.keys, this__12886.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__12888 = this;
  return this__12888.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__12914 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__12914.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__12919 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____12921 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____12921)) {
      return this__12919.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____12921
    }
  }())) {
    var new_keys__12922 = cljs.core.aclone.call(null, this__12919.keys);
    var new_strobj__12923 = goog.object.clone.call(null, this__12919.strobj);
    new_keys__12922.splice(cljs.core.scan_array.call(null, 1, k, new_keys__12922), 1);
    cljs.core.js_delete.call(null, new_strobj__12923, k);
    return new cljs.core.ObjMap(this__12919.meta, new_keys__12922, new_strobj__12923)
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
  var this__13016 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__13111 = null;
  var G__13111__13113 = function(coll, k) {
    var this__13018 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__13111__13114 = function(coll, k, not_found) {
    var this__13020 = this;
    var bucket__13024 = this__13020.hashobj[cljs.core.hash.call(null, k)];
    var i__13027 = cljs.core.truth_(bucket__13024) ? cljs.core.scan_array.call(null, 2, k, bucket__13024) : null;
    if(cljs.core.truth_(i__13027)) {
      return bucket__13024[i__13027 + 1]
    }else {
      return not_found
    }
  };
  G__13111 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13111__13113.call(this, coll, k);
      case 3:
        return G__13111__13114.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13111
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__13030 = this;
  var h__13033 = cljs.core.hash.call(null, k);
  var bucket__13034 = this__13030.hashobj[h__13033];
  if(cljs.core.truth_(bucket__13034)) {
    var new_bucket__13035 = cljs.core.aclone.call(null, bucket__13034);
    var new_hashobj__13037 = goog.object.clone.call(null, this__13030.hashobj);
    new_hashobj__13037[h__13033] = new_bucket__13035;
    var temp__3695__auto____13041 = cljs.core.scan_array.call(null, 2, k, new_bucket__13035);
    if(cljs.core.truth_(temp__3695__auto____13041)) {
      var i__13043 = temp__3695__auto____13041;
      new_bucket__13035[i__13043 + 1] = v;
      return new cljs.core.HashMap(this__13030.meta, this__13030.count, new_hashobj__13037)
    }else {
      new_bucket__13035.push(k, v);
      return new cljs.core.HashMap(this__13030.meta, this__13030.count + 1, new_hashobj__13037)
    }
  }else {
    var new_hashobj__13051 = goog.object.clone.call(null, this__13030.hashobj);
    new_hashobj__13051[h__13033] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__13030.meta, this__13030.count + 1, new_hashobj__13051)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__13053 = this;
  var bucket__13056 = this__13053.hashobj[cljs.core.hash.call(null, k)];
  var i__13057 = cljs.core.truth_(bucket__13056) ? cljs.core.scan_array.call(null, 2, k, bucket__13056) : null;
  if(cljs.core.truth_(i__13057)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = function() {
  var G__13127 = null;
  var G__13127__13128 = function(coll, k) {
    var this__13062 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__13127__13129 = function(coll, k, not_found) {
    var this__13065 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__13127 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13127__13128.call(this, coll, k);
      case 3:
        return G__13127__13129.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13127
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__13066 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__13068 = this;
  if(cljs.core.truth_(this__13068.count > 0)) {
    var hashes__13072 = cljs.core.js_keys.call(null, this__13068.hashobj).sort();
    return cljs.core.mapcat.call(null, function(p1__12977_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__13068.hashobj[p1__12977_SHARP_]))
    }, hashes__13072)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__13075 = this;
  return this__13075.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__13079 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__13082 = this;
  return new cljs.core.HashMap(meta, this__13082.count, this__13082.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__13085 = this;
  return this__13085.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__13092 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__13092.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__13095 = this;
  var h__13098 = cljs.core.hash.call(null, k);
  var bucket__13099 = this__13095.hashobj[h__13098];
  var i__13106 = cljs.core.truth_(bucket__13099) ? cljs.core.scan_array.call(null, 2, k, bucket__13099) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__13106))) {
    return coll
  }else {
    var new_hashobj__13107 = goog.object.clone.call(null, this__13095.hashobj);
    if(cljs.core.truth_(3 > bucket__13099.length)) {
      cljs.core.js_delete.call(null, new_hashobj__13107, h__13098)
    }else {
      var new_bucket__13110 = cljs.core.aclone.call(null, bucket__13099);
      new_bucket__13110.splice(i__13106, 2);
      new_hashobj__13107[h__13098] = new_bucket__13110
    }
    return new cljs.core.HashMap(this__13095.meta, this__13095.count - 1, new_hashobj__13107)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__13146 = ks.length;
  var i__13181 = 0;
  var out__13182 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__13181 < len__13146)) {
      var G__13185 = i__13181 + 1;
      var G__13188 = cljs.core.assoc.call(null, out__13182, ks[i__13181], vs[i__13181]);
      i__13181 = G__13185;
      out__13182 = G__13188;
      continue
    }else {
      return out__13182
    }
    break
  }
};
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__13192 = cljs.core.seq.call(null, keyvals);
    var out__13195 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__13192)) {
        var G__13204 = cljs.core.nnext.call(null, in$__13192);
        var G__13205 = cljs.core.assoc.call(null, out__13195, cljs.core.first.call(null, in$__13192), cljs.core.second.call(null, in$__13192));
        in$__13192 = G__13204;
        out__13195 = G__13205;
        continue
      }else {
        return out__13195
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
  hash_map.cljs$lang$applyTo = function(arglist__13207) {
    var keyvals = cljs.core.seq(arglist__13207);
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
      return cljs.core.reduce.call(null, function(p1__13211_SHARP_, p2__13212_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____13220 = p1__13211_SHARP_;
          if(cljs.core.truth_(or__3548__auto____13220)) {
            return or__3548__auto____13220
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__13212_SHARP_)
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
  merge.cljs$lang$applyTo = function(arglist__13228) {
    var maps = cljs.core.seq(arglist__13228);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__13235 = function(m, e) {
        var k__13233 = cljs.core.first.call(null, e);
        var v__13234 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__13233))) {
          return cljs.core.assoc.call(null, m, k__13233, f.call(null, cljs.core.get.call(null, m, k__13233), v__13234))
        }else {
          return cljs.core.assoc.call(null, m, k__13233, v__13234)
        }
      };
      var merge2__13241 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__13235, function() {
          var or__3548__auto____13240 = m1;
          if(cljs.core.truth_(or__3548__auto____13240)) {
            return or__3548__auto____13240
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__13241, maps)
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
  merge_with.cljs$lang$applyTo = function(arglist__13247) {
    var f = cljs.core.first(arglist__13247);
    var maps = cljs.core.rest(arglist__13247);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__13257 = cljs.core.ObjMap.fromObject([], {});
  var keys__13258 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__13258)) {
      var key__13261 = cljs.core.first.call(null, keys__13258);
      var entry__13262 = cljs.core.get.call(null, map, key__13261, "\ufdd0'user/not-found");
      var G__13270 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__13262, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__13257, key__13261, entry__13262) : ret__13257;
      var G__13271 = cljs.core.next.call(null, keys__13258);
      ret__13257 = G__13270;
      keys__13258 = G__13271;
      continue
    }else {
      return ret__13257
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
  var this__13284 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__13324 = null;
  var G__13324__13325 = function(coll, v) {
    var this__13285 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__13324__13326 = function(coll, v, not_found) {
    var this__13287 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__13287.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__13324 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13324__13325.call(this, coll, v);
      case 3:
        return G__13324__13326.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13324
}();
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = function() {
  var G__13330 = null;
  var G__13330__13331 = function(coll, k) {
    var this__13290 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__13330__13332 = function(coll, k, not_found) {
    var this__13291 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__13330 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13330__13331.call(this, coll, k);
      case 3:
        return G__13330__13332.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13330
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__13293 = this;
  return new cljs.core.Set(this__13293.meta, cljs.core.assoc.call(null, this__13293.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__13294 = this;
  return cljs.core.keys.call(null, this__13294.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__13295 = this;
  return new cljs.core.Set(this__13295.meta, cljs.core.dissoc.call(null, this__13295.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__13297 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__13301 = this;
  var and__3546__auto____13302 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____13302)) {
    var and__3546__auto____13304 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____13304)) {
      return cljs.core.every_QMARK_.call(null, function(p1__13251_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__13251_SHARP_)
      }, other)
    }else {
      return and__3546__auto____13304
    }
  }else {
    return and__3546__auto____13302
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__13306 = this;
  return new cljs.core.Set(meta, this__13306.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__13310 = this;
  return this__13310.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__13313 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__13313.meta)
};
cljs.core.Set;
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.set = function set(coll) {
  var in$__13402 = cljs.core.seq.call(null, coll);
  var out__13404 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__13402)))) {
      var G__13407 = cljs.core.rest.call(null, in$__13402);
      var G__13408 = cljs.core.conj.call(null, out__13404, cljs.core.first.call(null, in$__13402));
      in$__13402 = G__13407;
      out__13404 = G__13408;
      continue
    }else {
      return out__13404
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__13438 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____13442 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____13442)) {
        var e__13445 = temp__3695__auto____13442;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__13445))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__13438, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__13395_SHARP_) {
      var temp__3695__auto____13448 = cljs.core.find.call(null, smap, p1__13395_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____13448)) {
        var e__13452 = temp__3695__auto____13448;
        return cljs.core.second.call(null, e__13452)
      }else {
        return p1__13395_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__13474 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__13464, seen) {
        while(true) {
          var vec__13466__13467 = p__13464;
          var f__13468 = cljs.core.nth.call(null, vec__13466__13467, 0, null);
          var xs__13469 = vec__13466__13467;
          var temp__3698__auto____13470 = cljs.core.seq.call(null, xs__13469);
          if(cljs.core.truth_(temp__3698__auto____13470)) {
            var s__13471 = temp__3698__auto____13470;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__13468))) {
              var G__13478 = cljs.core.rest.call(null, s__13471);
              var G__13479 = seen;
              p__13464 = G__13478;
              seen = G__13479;
              continue
            }else {
              return cljs.core.cons.call(null, f__13468, step.call(null, cljs.core.rest.call(null, s__13471), cljs.core.conj.call(null, seen, f__13468)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__13474.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__13483 = cljs.core.Vector.fromArray([]);
  var s__13484 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__13484))) {
      var G__13488 = cljs.core.conj.call(null, ret__13483, cljs.core.first.call(null, s__13484));
      var G__13490 = cljs.core.next.call(null, s__13484);
      ret__13483 = G__13488;
      s__13484 = G__13490;
      continue
    }else {
      return cljs.core.seq.call(null, ret__13483)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____13495 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____13495)) {
        return or__3548__auto____13495
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__13501 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__13501 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__13501 + 1)
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
    var or__3548__auto____13515 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____13515)) {
      return or__3548__auto____13515
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__13519 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__13519 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__13519)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__13535 = cljs.core.ObjMap.fromObject([], {});
  var ks__13536 = cljs.core.seq.call(null, keys);
  var vs__13538 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____13540 = ks__13536;
      if(cljs.core.truth_(and__3546__auto____13540)) {
        return vs__13538
      }else {
        return and__3546__auto____13540
      }
    }())) {
      var G__13542 = cljs.core.assoc.call(null, map__13535, cljs.core.first.call(null, ks__13536), cljs.core.first.call(null, vs__13538));
      var G__13544 = cljs.core.next.call(null, ks__13536);
      var G__13545 = cljs.core.next.call(null, vs__13538);
      map__13535 = G__13542;
      ks__13536 = G__13544;
      vs__13538 = G__13545;
      continue
    }else {
      return map__13535
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__13558 = function(k, x) {
    return x
  };
  var max_key__13559 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__13560 = function() {
    var G__13563__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__13530_SHARP_, p2__13532_SHARP_) {
        return max_key.call(null, k, p1__13530_SHARP_, p2__13532_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__13563 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__13563__delegate.call(this, k, x, y, more)
    };
    G__13563.cljs$lang$maxFixedArity = 3;
    G__13563.cljs$lang$applyTo = function(arglist__13570) {
      var k = cljs.core.first(arglist__13570);
      var x = cljs.core.first(cljs.core.next(arglist__13570));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13570)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13570)));
      return G__13563__delegate.call(this, k, x, y, more)
    };
    return G__13563
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__13558.call(this, k, x);
      case 3:
        return max_key__13559.call(this, k, x, y);
      default:
        return max_key__13560.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__13560.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__13577 = function(k, x) {
    return x
  };
  var min_key__13578 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__13579 = function() {
    var G__13585__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__13553_SHARP_, p2__13554_SHARP_) {
        return min_key.call(null, k, p1__13553_SHARP_, p2__13554_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__13585 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__13585__delegate.call(this, k, x, y, more)
    };
    G__13585.cljs$lang$maxFixedArity = 3;
    G__13585.cljs$lang$applyTo = function(arglist__13589) {
      var k = cljs.core.first(arglist__13589);
      var x = cljs.core.first(cljs.core.next(arglist__13589));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13589)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13589)));
      return G__13585__delegate.call(this, k, x, y, more)
    };
    return G__13585
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__13577.call(this, k, x);
      case 3:
        return min_key__13578.call(this, k, x, y);
      default:
        return min_key__13579.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__13579.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__13598 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__13599 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____13596 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____13596)) {
        var s__13597 = temp__3698__auto____13596;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__13597), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__13597)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__13598.call(this, n, step);
      case 3:
        return partition_all__13599.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____13605 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____13605)) {
      var s__13608 = temp__3698__auto____13605;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__13608)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__13608), take_while.call(null, pred, cljs.core.rest.call(null, s__13608)))
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
  var this__13621 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__13622 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__13678 = null;
  var G__13678__13679 = function(rng, f) {
    var this__13625 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__13678__13680 = function(rng, f, s) {
    var this__13626 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__13678 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__13678__13679.call(this, rng, f);
      case 3:
        return G__13678__13680.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13678
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__13627 = this;
  var comp__13628 = cljs.core.truth_(this__13627.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__13628.call(null, this__13627.start, this__13627.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__13630 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__13630.end - this__13630.start) / this__13630.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__13632 = this;
  return this__13632.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__13633 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__13633.meta, this__13633.start + this__13633.step, this__13633.end, this__13633.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__13637 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__13639 = this;
  return new cljs.core.Range(meta, this__13639.start, this__13639.end, this__13639.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__13640 = this;
  return this__13640.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__13712 = null;
  var G__13712__13713 = function(rng, n) {
    var this__13641 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__13641.start + n * this__13641.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____13642 = this__13641.start > this__13641.end;
        if(cljs.core.truth_(and__3546__auto____13642)) {
          return cljs.core._EQ_.call(null, this__13641.step, 0)
        }else {
          return and__3546__auto____13642
        }
      }())) {
        return this__13641.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__13712__13714 = function(rng, n, not_found) {
    var this__13648 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__13648.start + n * this__13648.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____13667 = this__13648.start > this__13648.end;
        if(cljs.core.truth_(and__3546__auto____13667)) {
          return cljs.core._EQ_.call(null, this__13648.step, 0)
        }else {
          return and__3546__auto____13667
        }
      }())) {
        return this__13648.start
      }else {
        return not_found
      }
    }
  };
  G__13712 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13712__13713.call(this, rng, n);
      case 3:
        return G__13712__13714.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13712
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__13668 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__13668.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__13729 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__13730 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__13731 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__13732 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__13729.call(this);
      case 1:
        return range__13730.call(this, start);
      case 2:
        return range__13731.call(this, start, end);
      case 3:
        return range__13732.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____13738 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____13738)) {
      var s__13740 = temp__3698__auto____13738;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__13740), take_nth.call(null, n, cljs.core.drop.call(null, n, s__13740)))
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
    var temp__3698__auto____13757 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____13757)) {
      var s__13760 = temp__3698__auto____13757;
      var fst__13762 = cljs.core.first.call(null, s__13760);
      var fv__13763 = f.call(null, fst__13762);
      var run__13765 = cljs.core.cons.call(null, fst__13762, cljs.core.take_while.call(null, function(p1__13753_SHARP_) {
        return cljs.core._EQ_.call(null, fv__13763, f.call(null, p1__13753_SHARP_))
      }, cljs.core.next.call(null, s__13760)));
      return cljs.core.cons.call(null, run__13765, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__13765), s__13760))))
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
  var reductions__13880 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____13871 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____13871)) {
        var s__13873 = temp__3695__auto____13871;
        return reductions.call(null, f, cljs.core.first.call(null, s__13873), cljs.core.rest.call(null, s__13873))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__13881 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____13877 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____13877)) {
        var s__13878 = temp__3698__auto____13877;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__13878)), cljs.core.rest.call(null, s__13878))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__13880.call(this, f, init);
      case 3:
        return reductions__13881.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__13926 = function(f) {
    return function() {
      var G__13932 = null;
      var G__13932__13933 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__13932__13934 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__13932__13935 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__13932__13936 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__13932__13937 = function() {
        var G__13943__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__13943 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13943__delegate.call(this, x, y, z, args)
        };
        G__13943.cljs$lang$maxFixedArity = 3;
        G__13943.cljs$lang$applyTo = function(arglist__13944) {
          var x = cljs.core.first(arglist__13944);
          var y = cljs.core.first(cljs.core.next(arglist__13944));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13944)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13944)));
          return G__13943__delegate.call(this, x, y, z, args)
        };
        return G__13943
      }();
      G__13932 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13932__13933.call(this);
          case 1:
            return G__13932__13934.call(this, x);
          case 2:
            return G__13932__13935.call(this, x, y);
          case 3:
            return G__13932__13936.call(this, x, y, z);
          default:
            return G__13932__13937.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13932.cljs$lang$maxFixedArity = 3;
      G__13932.cljs$lang$applyTo = G__13932__13937.cljs$lang$applyTo;
      return G__13932
    }()
  };
  var juxt__13927 = function(f, g) {
    return function() {
      var G__13945 = null;
      var G__13945__13946 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__13945__13947 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__13945__13948 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__13945__13949 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__13945__13950 = function() {
        var G__13958__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__13958 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13958__delegate.call(this, x, y, z, args)
        };
        G__13958.cljs$lang$maxFixedArity = 3;
        G__13958.cljs$lang$applyTo = function(arglist__13968) {
          var x = cljs.core.first(arglist__13968);
          var y = cljs.core.first(cljs.core.next(arglist__13968));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13968)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13968)));
          return G__13958__delegate.call(this, x, y, z, args)
        };
        return G__13958
      }();
      G__13945 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13945__13946.call(this);
          case 1:
            return G__13945__13947.call(this, x);
          case 2:
            return G__13945__13948.call(this, x, y);
          case 3:
            return G__13945__13949.call(this, x, y, z);
          default:
            return G__13945__13950.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13945.cljs$lang$maxFixedArity = 3;
      G__13945.cljs$lang$applyTo = G__13945__13950.cljs$lang$applyTo;
      return G__13945
    }()
  };
  var juxt__13928 = function(f, g, h) {
    return function() {
      var G__13969 = null;
      var G__13969__13970 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__13969__13972 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__13969__13973 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__13969__13974 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__13969__13975 = function() {
        var G__13988__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__13988 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13988__delegate.call(this, x, y, z, args)
        };
        G__13988.cljs$lang$maxFixedArity = 3;
        G__13988.cljs$lang$applyTo = function(arglist__13989) {
          var x = cljs.core.first(arglist__13989);
          var y = cljs.core.first(cljs.core.next(arglist__13989));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13989)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13989)));
          return G__13988__delegate.call(this, x, y, z, args)
        };
        return G__13988
      }();
      G__13969 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13969__13970.call(this);
          case 1:
            return G__13969__13972.call(this, x);
          case 2:
            return G__13969__13973.call(this, x, y);
          case 3:
            return G__13969__13974.call(this, x, y, z);
          default:
            return G__13969__13975.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13969.cljs$lang$maxFixedArity = 3;
      G__13969.cljs$lang$applyTo = G__13969__13975.cljs$lang$applyTo;
      return G__13969
    }()
  };
  var juxt__13930 = function() {
    var G__13993__delegate = function(f, g, h, fs) {
      var fs__13922 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__13995 = null;
        var G__13995__13996 = function() {
          return cljs.core.reduce.call(null, function(p1__13801_SHARP_, p2__13802_SHARP_) {
            return cljs.core.conj.call(null, p1__13801_SHARP_, p2__13802_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__13922)
        };
        var G__13995__14028 = function(x) {
          return cljs.core.reduce.call(null, function(p1__13804_SHARP_, p2__13807_SHARP_) {
            return cljs.core.conj.call(null, p1__13804_SHARP_, p2__13807_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__13922)
        };
        var G__13995__14029 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__13809_SHARP_, p2__13810_SHARP_) {
            return cljs.core.conj.call(null, p1__13809_SHARP_, p2__13810_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__13922)
        };
        var G__13995__14030 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__13811_SHARP_, p2__13812_SHARP_) {
            return cljs.core.conj.call(null, p1__13811_SHARP_, p2__13812_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__13922)
        };
        var G__13995__14031 = function() {
          var G__14038__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__13869_SHARP_, p2__13870_SHARP_) {
              return cljs.core.conj.call(null, p1__13869_SHARP_, cljs.core.apply.call(null, p2__13870_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__13922)
          };
          var G__14038 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__14038__delegate.call(this, x, y, z, args)
          };
          G__14038.cljs$lang$maxFixedArity = 3;
          G__14038.cljs$lang$applyTo = function(arglist__14039) {
            var x = cljs.core.first(arglist__14039);
            var y = cljs.core.first(cljs.core.next(arglist__14039));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14039)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14039)));
            return G__14038__delegate.call(this, x, y, z, args)
          };
          return G__14038
        }();
        G__13995 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__13995__13996.call(this);
            case 1:
              return G__13995__14028.call(this, x);
            case 2:
              return G__13995__14029.call(this, x, y);
            case 3:
              return G__13995__14030.call(this, x, y, z);
            default:
              return G__13995__14031.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__13995.cljs$lang$maxFixedArity = 3;
        G__13995.cljs$lang$applyTo = G__13995__14031.cljs$lang$applyTo;
        return G__13995
      }()
    };
    var G__13993 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__13993__delegate.call(this, f, g, h, fs)
    };
    G__13993.cljs$lang$maxFixedArity = 3;
    G__13993.cljs$lang$applyTo = function(arglist__14042) {
      var f = cljs.core.first(arglist__14042);
      var g = cljs.core.first(cljs.core.next(arglist__14042));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14042)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14042)));
      return G__13993__delegate.call(this, f, g, h, fs)
    };
    return G__13993
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__13926.call(this, f);
      case 2:
        return juxt__13927.call(this, f, g);
      case 3:
        return juxt__13928.call(this, f, g, h);
      default:
        return juxt__13930.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__13930.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__14050 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__14058 = cljs.core.next.call(null, coll);
        coll = G__14058;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__14051 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____14044 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____14044)) {
          return n > 0
        }else {
          return and__3546__auto____14044
        }
      }())) {
        var G__14064 = n - 1;
        var G__14065 = cljs.core.next.call(null, coll);
        n = G__14064;
        coll = G__14065;
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
        return dorun__14050.call(this, n);
      case 2:
        return dorun__14051.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__14081 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__14082 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__14081.call(this, n);
      case 2:
        return doall__14082.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__14088 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__14088), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__14088), 1))) {
      return cljs.core.first.call(null, matches__14088)
    }else {
      return cljs.core.vec.call(null, matches__14088)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__14091 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__14091))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__14091), 1))) {
      return cljs.core.first.call(null, matches__14091)
    }else {
      return cljs.core.vec.call(null, matches__14091)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__14104 = cljs.core.re_find.call(null, re, s);
  var match_idx__14105 = s.search(re);
  var match_str__14108 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__14104)) ? cljs.core.first.call(null, match_data__14104) : match_data__14104;
  var post_match__14112 = cljs.core.subs.call(null, s, match_idx__14105 + cljs.core.count.call(null, match_str__14108));
  if(cljs.core.truth_(match_data__14104)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__14104, re_seq.call(null, re, post_match__14112))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__14122_SHARP_) {
    return print_one.call(null, p1__14122_SHARP_, opts)
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
          var and__3546__auto____14164 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____14164)) {
            var and__3546__auto____14177 = function() {
              var x__445__auto____14167 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____14170 = x__445__auto____14167;
                if(cljs.core.truth_(and__3546__auto____14170)) {
                  var and__3546__auto____14172 = x__445__auto____14167.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____14172)) {
                    return cljs.core.not.call(null, x__445__auto____14167.hasOwnProperty("cljs$core$IMeta$"))
                  }else {
                    return and__3546__auto____14172
                  }
                }else {
                  return and__3546__auto____14170
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____14167)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____14177)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____14177
            }
          }else {
            return and__3546__auto____14164
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__445__auto____14184 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____14185 = x__445__auto____14184;
            if(cljs.core.truth_(and__3546__auto____14185)) {
              var and__3546__auto____14187 = x__445__auto____14184.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____14187)) {
                return cljs.core.not.call(null, x__445__auto____14184.hasOwnProperty("cljs$core$IPrintable$"))
              }else {
                return and__3546__auto____14187
              }
            }else {
              return and__3546__auto____14185
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__445__auto____14184)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__14203 = cljs.core.first.call(null, objs);
  var sb__14204 = new goog.string.StringBuffer;
  var G__14205__14206 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__14205__14206)) {
    var obj__14209 = cljs.core.first.call(null, G__14205__14206);
    var G__14205__14210 = G__14205__14206;
    while(true) {
      if(cljs.core.truth_(obj__14209 === first_obj__14203)) {
      }else {
        sb__14204.append(" ")
      }
      var G__14212__14217 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__14209, opts));
      if(cljs.core.truth_(G__14212__14217)) {
        var string__14218 = cljs.core.first.call(null, G__14212__14217);
        var G__14212__14219 = G__14212__14217;
        while(true) {
          sb__14204.append(string__14218);
          var temp__3698__auto____14220 = cljs.core.next.call(null, G__14212__14219);
          if(cljs.core.truth_(temp__3698__auto____14220)) {
            var G__14212__14221 = temp__3698__auto____14220;
            var G__14229 = cljs.core.first.call(null, G__14212__14221);
            var G__14231 = G__14212__14221;
            string__14218 = G__14229;
            G__14212__14219 = G__14231;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____14225 = cljs.core.next.call(null, G__14205__14210);
      if(cljs.core.truth_(temp__3698__auto____14225)) {
        var G__14205__14226 = temp__3698__auto____14225;
        var G__14235 = cljs.core.first.call(null, G__14205__14226);
        var G__14236 = G__14205__14226;
        obj__14209 = G__14235;
        G__14205__14210 = G__14236;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__14204)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__14239 = cljs.core.first.call(null, objs);
  var G__14240__14241 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__14240__14241)) {
    var obj__14244 = cljs.core.first.call(null, G__14240__14241);
    var G__14240__14245 = G__14240__14241;
    while(true) {
      if(cljs.core.truth_(obj__14244 === first_obj__14239)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__14247__14249 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__14244, opts));
      if(cljs.core.truth_(G__14247__14249)) {
        var string__14250 = cljs.core.first.call(null, G__14247__14249);
        var G__14247__14251 = G__14247__14249;
        while(true) {
          cljs.core.string_print.call(null, string__14250);
          var temp__3698__auto____14252 = cljs.core.next.call(null, G__14247__14251);
          if(cljs.core.truth_(temp__3698__auto____14252)) {
            var G__14247__14253 = temp__3698__auto____14252;
            var G__14258 = cljs.core.first.call(null, G__14247__14253);
            var G__14259 = G__14247__14253;
            string__14250 = G__14258;
            G__14247__14251 = G__14259;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____14254 = cljs.core.next.call(null, G__14240__14245);
      if(cljs.core.truth_(temp__3698__auto____14254)) {
        var G__14240__14255 = temp__3698__auto____14254;
        var G__14261 = cljs.core.first.call(null, G__14240__14255);
        var G__14262 = G__14240__14255;
        obj__14244 = G__14261;
        G__14240__14245 = G__14262;
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
  pr_str.cljs$lang$applyTo = function(arglist__14271) {
    var objs = cljs.core.seq(arglist__14271);
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
  pr.cljs$lang$applyTo = function(arglist__14275) {
    var objs = cljs.core.seq(arglist__14275);
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
  cljs_core_print.cljs$lang$applyTo = function(arglist__14277) {
    var objs = cljs.core.seq(arglist__14277);
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
  println.cljs$lang$applyTo = function(arglist__14283) {
    var objs = cljs.core.seq(arglist__14283);
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
  prn.cljs$lang$applyTo = function(arglist__14289) {
    var objs = cljs.core.seq(arglist__14289);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__14316 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__14316, "{", ", ", "}", opts, coll)
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
      var temp__3698__auto____14324 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____14324)) {
        var nspc__14325 = temp__3698__auto____14324;
        return cljs.core.str.call(null, nspc__14325, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____14328 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____14328)) {
          var nspc__14329 = temp__3698__auto____14328;
          return cljs.core.str.call(null, nspc__14329, "/")
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
  var pr_pair__14352 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__14352, "{", ", ", "}", opts, coll)
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
  var this__14449 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__14451 = this;
  var G__14452__14453 = cljs.core.seq.call(null, this__14451.watches);
  if(cljs.core.truth_(G__14452__14453)) {
    var G__14456__14461 = cljs.core.first.call(null, G__14452__14453);
    var vec__14460__14462 = G__14456__14461;
    var key__14463 = cljs.core.nth.call(null, vec__14460__14462, 0, null);
    var f__14464 = cljs.core.nth.call(null, vec__14460__14462, 1, null);
    var G__14452__14465 = G__14452__14453;
    var G__14456__14466 = G__14456__14461;
    var G__14452__14468 = G__14452__14465;
    while(true) {
      var vec__14469__14471 = G__14456__14466;
      var key__14472 = cljs.core.nth.call(null, vec__14469__14471, 0, null);
      var f__14473 = cljs.core.nth.call(null, vec__14469__14471, 1, null);
      var G__14452__14474 = G__14452__14468;
      f__14473.call(null, key__14472, this$, oldval, newval);
      var temp__3698__auto____14476 = cljs.core.next.call(null, G__14452__14474);
      if(cljs.core.truth_(temp__3698__auto____14476)) {
        var G__14452__14477 = temp__3698__auto____14476;
        var G__14508 = cljs.core.first.call(null, G__14452__14477);
        var G__14509 = G__14452__14477;
        G__14456__14466 = G__14508;
        G__14452__14468 = G__14509;
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
  var this__14478 = this;
  return this$.watches = cljs.core.assoc.call(null, this__14478.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__14481 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__14481.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__14483 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__14483.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__14487 = this;
  return this__14487.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__14488 = this;
  return this__14488.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__14489 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__14557 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__14558 = function() {
    var G__14564__delegate = function(x, p__14530) {
      var map__14538__14539 = p__14530;
      var map__14538__14540 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__14538__14539)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__14538__14539) : map__14538__14539;
      var validator__14541 = cljs.core.get.call(null, map__14538__14540, "\ufdd0'validator");
      var meta__14542 = cljs.core.get.call(null, map__14538__14540, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__14542, validator__14541, null)
    };
    var G__14564 = function(x, var_args) {
      var p__14530 = null;
      if(goog.isDef(var_args)) {
        p__14530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__14564__delegate.call(this, x, p__14530)
    };
    G__14564.cljs$lang$maxFixedArity = 1;
    G__14564.cljs$lang$applyTo = function(arglist__14573) {
      var x = cljs.core.first(arglist__14573);
      var p__14530 = cljs.core.rest(arglist__14573);
      return G__14564__delegate.call(this, x, p__14530)
    };
    return G__14564
  }();
  atom = function(x, var_args) {
    var p__14530 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__14557.call(this, x);
      default:
        return atom__14558.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__14558.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____14582 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____14582)) {
    var validate__14583 = temp__3698__auto____14582;
    if(cljs.core.truth_(validate__14583.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3061)))));
    }
  }else {
  }
  var old_value__14585 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__14585, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___14602 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___14603 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___14604 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___14605 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___14606 = function() {
    var G__14612__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__14612 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__14612__delegate.call(this, a, f, x, y, z, more)
    };
    G__14612.cljs$lang$maxFixedArity = 5;
    G__14612.cljs$lang$applyTo = function(arglist__14614) {
      var a = cljs.core.first(arglist__14614);
      var f = cljs.core.first(cljs.core.next(arglist__14614));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14614)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14614))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14614)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14614)))));
      return G__14612__delegate.call(this, a, f, x, y, z, more)
    };
    return G__14612
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___14602.call(this, a, f);
      case 3:
        return swap_BANG___14603.call(this, a, f, x);
      case 4:
        return swap_BANG___14604.call(this, a, f, x, y);
      case 5:
        return swap_BANG___14605.call(this, a, f, x, y, z);
      default:
        return swap_BANG___14606.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___14606.cljs$lang$applyTo;
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
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__14624) {
    var iref = cljs.core.first(arglist__14624);
    var f = cljs.core.first(cljs.core.next(arglist__14624));
    var args = cljs.core.rest(cljs.core.next(arglist__14624));
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
  var gensym__14644 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__14645 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__14644.call(this);
      case 1:
        return gensym__14645.call(this, prefix_string)
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
  var this__14652 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__14652.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__14660 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__14660.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__14660.state, this__14660.f)
  }
  return cljs.core.deref.call(null, this__14660.state)
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
  delay.cljs$lang$applyTo = function(arglist__14663) {
    var body = cljs.core.seq(arglist__14663);
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
    var map__14681__14682 = options;
    var map__14681__14683 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__14681__14682)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__14681__14682) : map__14681__14682;
    var keywordize_keys__14684 = cljs.core.get.call(null, map__14681__14683, "\ufdd0'keywordize-keys");
    var keyfn__14686 = cljs.core.truth_(keywordize_keys__14684) ? cljs.core.keyword : cljs.core.str;
    var f__14704 = function thisfn(x) {
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
                var iter__509__auto____14703 = function iter__14690(s__14691) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__14691__14694 = s__14691;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__14691__14694))) {
                        var k__14702 = cljs.core.first.call(null, s__14691__14694);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__14686.call(null, k__14702), thisfn.call(null, x[k__14702])]), iter__14690.call(null, cljs.core.rest.call(null, s__14691__14694)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__509__auto____14703.call(null, cljs.core.js_keys.call(null, x))
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
    return f__14704.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__14715) {
    var x = cljs.core.first(arglist__14715);
    var options = cljs.core.rest(arglist__14715);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__14717 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__14726__delegate = function(args) {
      var temp__3695__auto____14718 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__14717), args);
      if(cljs.core.truth_(temp__3695__auto____14718)) {
        var v__14719 = temp__3695__auto____14718;
        return v__14719
      }else {
        var ret__14720 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__14717, cljs.core.assoc, args, ret__14720);
        return ret__14720
      }
    };
    var G__14726 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__14726__delegate.call(this, args)
    };
    G__14726.cljs$lang$maxFixedArity = 0;
    G__14726.cljs$lang$applyTo = function(arglist__14728) {
      var args = cljs.core.seq(arglist__14728);
      return G__14726__delegate.call(this, args)
    };
    return G__14726
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__14733 = function(f) {
    while(true) {
      var ret__14729 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__14729))) {
        var G__14736 = ret__14729;
        f = G__14736;
        continue
      }else {
        return ret__14729
      }
      break
    }
  };
  var trampoline__14734 = function() {
    var G__14737__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__14737 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__14737__delegate.call(this, f, args)
    };
    G__14737.cljs$lang$maxFixedArity = 1;
    G__14737.cljs$lang$applyTo = function(arglist__14738) {
      var f = cljs.core.first(arglist__14738);
      var args = cljs.core.rest(arglist__14738);
      return G__14737__delegate.call(this, f, args)
    };
    return G__14737
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__14733.call(this, f);
      default:
        return trampoline__14734.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__14734.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__14740 = function() {
    return rand.call(null, 1)
  };
  var rand__14741 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__14740.call(this);
      case 1:
        return rand__14741.call(this, n)
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
    var k__14775 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__14775, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__14775, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___14879 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___14880 = function(h, child, parent) {
    var or__3548__auto____14797 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____14797)) {
      return or__3548__auto____14797
    }else {
      var or__3548__auto____14802 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____14802)) {
        return or__3548__auto____14802
      }else {
        var and__3546__auto____14806 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____14806)) {
          var and__3546__auto____14807 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____14807)) {
            var and__3546__auto____14864 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____14864)) {
              var ret__14865 = true;
              var i__14866 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____14867 = cljs.core.not.call(null, ret__14865);
                  if(cljs.core.truth_(or__3548__auto____14867)) {
                    return or__3548__auto____14867
                  }else {
                    return cljs.core._EQ_.call(null, i__14866, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__14865
                }else {
                  var G__14888 = isa_QMARK_.call(null, h, child.call(null, i__14866), parent.call(null, i__14866));
                  var G__14889 = i__14866 + 1;
                  ret__14865 = G__14888;
                  i__14866 = G__14889;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____14864
            }
          }else {
            return and__3546__auto____14807
          }
        }else {
          return and__3546__auto____14806
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___14879.call(this, h, child);
      case 3:
        return isa_QMARK___14880.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__14895 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__14896 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__14895.call(this, h);
      case 2:
        return parents__14896.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__14903 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__14905 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__14903.call(this, h);
      case 2:
        return ancestors__14905.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__14919 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__14920 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__14919.call(this, h);
      case 2:
        return descendants__14920.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__14955 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3353)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__14956 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3357)))));
    }
    var tp__14937 = "\ufdd0'parents".call(null, h);
    var td__14938 = "\ufdd0'descendants".call(null, h);
    var ta__14939 = "\ufdd0'ancestors".call(null, h);
    var tf__14944 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____14951 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__14937.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__14939.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__14939.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__14937, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__14944.call(null, "\ufdd0'ancestors".call(null, h), tag, td__14938, parent, ta__14939), "\ufdd0'descendants":tf__14944.call(null, "\ufdd0'descendants".call(null, h), parent, ta__14939, tag, td__14938)})
    }();
    if(cljs.core.truth_(or__3548__auto____14951)) {
      return or__3548__auto____14951
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__14955.call(this, h, tag);
      case 3:
        return derive__14956.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__15022 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__15023 = function(h, tag, parent) {
    var parentMap__14985 = "\ufdd0'parents".call(null, h);
    var childsParents__14986 = cljs.core.truth_(parentMap__14985.call(null, tag)) ? cljs.core.disj.call(null, parentMap__14985.call(null, tag), parent) : cljs.core.set([]);
    var newParents__14988 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__14986)) ? cljs.core.assoc.call(null, parentMap__14985, tag, childsParents__14986) : cljs.core.dissoc.call(null, parentMap__14985, tag);
    var deriv_seq__15015 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__14926_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__14926_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__14926_SHARP_), cljs.core.second.call(null, p1__14926_SHARP_)))
    }, cljs.core.seq.call(null, newParents__14988)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__14985.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__14928_SHARP_, p2__14929_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__14928_SHARP_, p2__14929_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__15015))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__15022.call(this, h, tag);
      case 3:
        return underive__15023.call(this, h, tag, parent)
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
  var xprefs__15044 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____15046 = cljs.core.truth_(function() {
    var and__3546__auto____15045 = xprefs__15044;
    if(cljs.core.truth_(and__3546__auto____15045)) {
      return xprefs__15044.call(null, y)
    }else {
      return and__3546__auto____15045
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____15046)) {
    return or__3548__auto____15046
  }else {
    var or__3548__auto____15050 = function() {
      var ps__15048 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__15048) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__15048), prefer_table))) {
          }else {
          }
          var G__15054 = cljs.core.rest.call(null, ps__15048);
          ps__15048 = G__15054;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____15050)) {
      return or__3548__auto____15050
    }else {
      var or__3548__auto____15052 = function() {
        var ps__15051 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__15051) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__15051), y, prefer_table))) {
            }else {
            }
            var G__15056 = cljs.core.rest.call(null, ps__15051);
            ps__15051 = G__15056;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____15052)) {
        return or__3548__auto____15052
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____15064 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____15064)) {
    return or__3548__auto____15064
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__15087 = cljs.core.reduce.call(null, function(be, p__15068) {
    var vec__15070__15071 = p__15068;
    var k__15075 = cljs.core.nth.call(null, vec__15070__15071, 0, null);
    var ___15077 = cljs.core.nth.call(null, vec__15070__15071, 1, null);
    var e__15078 = vec__15070__15071;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__15075))) {
      var be2__15084 = cljs.core.truth_(function() {
        var or__3548__auto____15082 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____15082)) {
          return or__3548__auto____15082
        }else {
          return cljs.core.dominates.call(null, k__15075, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__15078 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__15084), k__15075, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__15075, " and ", cljs.core.first.call(null, be2__15084), ", and neither is preferred"));
      }
      return be2__15084
    }else {
      return be
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__15087)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__15087));
      return cljs.core.second.call(null, best_entry__15087)
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
    var and__3546__auto____15101 = mf;
    if(cljs.core.truth_(and__3546__auto____15101)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____15101
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____15105 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15105)) {
        return or__3548__auto____15105
      }else {
        var or__3548__auto____15106 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____15106)) {
          return or__3548__auto____15106
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15108 = mf;
    if(cljs.core.truth_(and__3546__auto____15108)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____15108
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____15111 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15111)) {
        return or__3548__auto____15111
      }else {
        var or__3548__auto____15113 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____15113)) {
          return or__3548__auto____15113
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15114 = mf;
    if(cljs.core.truth_(and__3546__auto____15114)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____15114
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____15117 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15117)) {
        return or__3548__auto____15117
      }else {
        var or__3548__auto____15121 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____15121)) {
          return or__3548__auto____15121
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15125 = mf;
    if(cljs.core.truth_(and__3546__auto____15125)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____15125
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____15128 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15128)) {
        return or__3548__auto____15128
      }else {
        var or__3548__auto____15132 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____15132)) {
          return or__3548__auto____15132
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15135 = mf;
    if(cljs.core.truth_(and__3546__auto____15135)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____15135
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____15138 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15138)) {
        return or__3548__auto____15138
      }else {
        var or__3548__auto____15140 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____15140)) {
          return or__3548__auto____15140
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15145 = mf;
    if(cljs.core.truth_(and__3546__auto____15145)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____15145
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____15148 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15148)) {
        return or__3548__auto____15148
      }else {
        var or__3548__auto____15150 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____15150)) {
          return or__3548__auto____15150
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15155 = mf;
    if(cljs.core.truth_(and__3546__auto____15155)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____15155
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____15157 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15157)) {
        return or__3548__auto____15157
      }else {
        var or__3548__auto____15159 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____15159)) {
          return or__3548__auto____15159
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15161 = mf;
    if(cljs.core.truth_(and__3546__auto____15161)) {
      return mf.cljs$core$IMultiFn$_dispatch
    }else {
      return and__3546__auto____15161
    }
  }())) {
    return mf.cljs$core$IMultiFn$_dispatch(mf, args)
  }else {
    return function() {
      var or__3548__auto____15162 = cljs.core._dispatch[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____15162)) {
        return or__3548__auto____15162
      }else {
        var or__3548__auto____15164 = cljs.core._dispatch["_"];
        if(cljs.core.truth_(or__3548__auto____15164)) {
          return or__3548__auto____15164
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__15184 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__15185 = cljs.core._get_method.call(null, mf, dispatch_val__15184);
  if(cljs.core.truth_(target_fn__15185)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__15184));
  }
  return cljs.core.apply.call(null, target_fn__15185, args)
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
  var this__15219 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = function(mf) {
  var this__15221 = this;
  cljs.core.swap_BANG_.call(null, this__15221.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__15221.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__15221.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__15221.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__15229 = this;
  cljs.core.swap_BANG_.call(null, this__15229.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__15229.method_cache, this__15229.method_table, this__15229.cached_hierarchy, this__15229.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__15230 = this;
  cljs.core.swap_BANG_.call(null, this__15230.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__15230.method_cache, this__15230.method_table, this__15230.cached_hierarchy, this__15230.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__15232 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__15232.cached_hierarchy), cljs.core.deref.call(null, this__15232.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__15232.method_cache, this__15232.method_table, this__15232.cached_hierarchy, this__15232.hierarchy)
  }
  var temp__3695__auto____15235 = cljs.core.deref.call(null, this__15232.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____15235)) {
    var target_fn__15270 = temp__3695__auto____15235;
    return target_fn__15270
  }else {
    var temp__3695__auto____15272 = cljs.core.find_and_cache_best_method.call(null, this__15232.name, dispatch_val, this__15232.hierarchy, this__15232.method_table, this__15232.prefer_table, this__15232.method_cache, this__15232.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____15272)) {
      var target_fn__15274 = temp__3695__auto____15272;
      return target_fn__15274
    }else {
      return cljs.core.deref.call(null, this__15232.method_table).call(null, this__15232.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__15275 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__15275.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__15275.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__15275.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__15275.method_cache, this__15275.method_table, this__15275.cached_hierarchy, this__15275.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__15284 = this;
  return cljs.core.deref.call(null, this__15284.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__15289 = this;
  return cljs.core.deref.call(null, this__15289.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = function(mf, args) {
  var this__15292 = this;
  return cljs.core.do_dispatch.call(null, mf, this__15292.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__15315__delegate = function(_, args) {
    return cljs.core._dispatch.call(null, this, args)
  };
  var G__15315 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__15315__delegate.call(this, _, args)
  };
  G__15315.cljs$lang$maxFixedArity = 1;
  G__15315.cljs$lang$applyTo = function(arglist__15316) {
    var _ = cljs.core.first(arglist__15316);
    var args = cljs.core.rest(arglist__15316);
    return G__15315__delegate.call(this, _, args)
  };
  return G__15315
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
goog.provide("domina");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.dom.xml");
goog.require("goog.dom.classes");
goog.require("goog.dom.forms");
goog.require("goog.style");
goog.require("goog.string");
goog.require("cljs.core");
domina.debug = true;
domina.log_debug = function log_debug(mesg) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15790 = domina.debug;
    if(cljs.core.truth_(and__3546__auto____15790)) {
      return cljs.core.not.call(null, cljs.core._EQ_.call(null, window.console, undefined))
    }else {
      return and__3546__auto____15790
    }
  }())) {
    return console.log(mesg)
  }else {
    return null
  }
};
domina.DomContent = {};
domina.nodes = function nodes(content) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15793 = content;
    if(cljs.core.truth_(and__3546__auto____15793)) {
      return content.domina$DomContent$nodes
    }else {
      return and__3546__auto____15793
    }
  }())) {
    return content.domina$DomContent$nodes(content)
  }else {
    return function() {
      var or__3548__auto____15801 = domina.nodes[goog.typeOf.call(null, content)];
      if(cljs.core.truth_(or__3548__auto____15801)) {
        return or__3548__auto____15801
      }else {
        var or__3548__auto____15803 = domina.nodes["_"];
        if(cljs.core.truth_(or__3548__auto____15803)) {
          return or__3548__auto____15803
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____15807 = nodeseq;
    if(cljs.core.truth_(and__3546__auto____15807)) {
      return nodeseq.domina$DomContent$single_node
    }else {
      return and__3546__auto____15807
    }
  }())) {
    return nodeseq.domina$DomContent$single_node(nodeseq)
  }else {
    return function() {
      var or__3548__auto____15811 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(cljs.core.truth_(or__3548__auto____15811)) {
        return or__3548__auto____15811
      }else {
        var or__3548__auto____15812 = domina.single_node["_"];
        if(cljs.core.truth_(or__3548__auto____15812)) {
          return or__3548__auto____15812
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.single-node", nodeseq);
        }
      }
    }().call(null, nodeseq)
  }
};
domina.by_id = function by_id(id) {
  return goog.dom.getElement.call(null, cljs.core.name.call(null, id))
};
domina.by_class = function by_class(class_name) {
  if(cljs.core.truth_(void 0 === domina.t15815)) {
    domina.t15815 = function(class_name, by_class, __meta) {
      this.class_name = class_name;
      this.by_class = by_class;
      this.__meta = __meta
    };
    domina.t15815.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
      return cljs.core.list.call(null, "domina.t15815")
    };
    domina.t15815.prototype.domina$DomContent$ = true;
    domina.t15815.prototype.domina$DomContent$nodes = function(_) {
      var this__15824 = this;
      return goog.dom.getElementsByClass.call(null, cljs.core.name.call(null, this__15824.class_name))
    };
    domina.t15815.prototype.domina$DomContent$single_node = function(_) {
      var this__15828 = this;
      return goog.dom.getElementByClass.call(null, cljs.core.name.call(null, this__15828.class_name))
    };
    domina.t15815.prototype.cljs$core$IMeta$ = true;
    domina.t15815.prototype.cljs$core$IMeta$_meta = function(_) {
      var this__15829 = this;
      return this__15829.__meta
    };
    domina.t15815.prototype.cljs$core$IWithMeta$ = true;
    domina.t15815.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
      var this__15831 = this;
      return new domina.t15815(this__15831.class_name, this__15831.by_class, __meta)
    };
    domina.t15815
  }else {
  }
  return new domina.t15815(class_name, by_class, null)
};
domina.children = function children(content) {
  return cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__15882_SHARP_) {
    return p1__15882_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__15888_SHARP_, p2__15889_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__15888_SHARP_, p2__15889_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__15895_SHARP_, p2__15894_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__15894_SHARP_, p1__15895_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__15912_SHARP_, p2__15911_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__15911_SHARP_, p1__15912_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__15918_SHARP_, p2__15917_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__15917_SHARP_, p1__15918_SHARP_)
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
  var s__15959 = goog.style.getStyle.call(null, domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(cljs.core.not.call(null, goog.string.isEmptySafe.call(null, s__15959)))) {
    return s__15959
  }else {
    return null
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function set_style_BANG_(content, name, value) {
  var G__15969__15970 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__15969__15970)) {
    var n__15971 = cljs.core.first.call(null, G__15969__15970);
    var G__15969__15972 = G__15969__15970;
    while(true) {
      goog.style.setStyle.call(null, n__15971, cljs.core.name.call(null, name), value);
      var temp__3698__auto____15975 = cljs.core.next.call(null, G__15969__15972);
      if(cljs.core.truth_(temp__3698__auto____15975)) {
        var G__15969__15976 = temp__3698__auto____15975;
        var G__15985 = cljs.core.first.call(null, G__15969__15976);
        var G__15986 = G__15969__15976;
        n__15971 = G__15985;
        G__15969__15972 = G__15986;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.set_attr_BANG_ = function set_attr_BANG_(content, name, value) {
  var G__15989__15990 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__15989__15990)) {
    var n__15993 = cljs.core.first.call(null, G__15989__15990);
    var G__15989__15994 = G__15989__15990;
    while(true) {
      n__15993.setAttribute(cljs.core.name.call(null, name), value);
      var temp__3698__auto____15995 = cljs.core.next.call(null, G__15989__15994);
      if(cljs.core.truth_(temp__3698__auto____15995)) {
        var G__15989__15997 = temp__3698__auto____15995;
        var G__16004 = cljs.core.first.call(null, G__15989__15997);
        var G__16005 = G__15989__15997;
        n__15993 = G__16004;
        G__15989__15994 = G__16005;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.parse_style_attributes = function parse_style_attributes(style) {
  return cljs.core.reduce.call(null, function(acc, pair) {
    var vec__16008__16009 = pair.split(/\s*:\s*/);
    var k__16010 = cljs.core.nth.call(null, vec__16008__16009, 0, null);
    var v__16011 = cljs.core.nth.call(null, vec__16008__16009, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____16013 = k__16010;
      if(cljs.core.truth_(and__3546__auto____16013)) {
        return v__16011
      }else {
        return and__3546__auto____16013
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__16010.toLowerCase()), v__16011)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  return domina.parse_style_attributes.call(null, domina.attr.call(null, content, "style"))
};
domina.attrs = function attrs(content) {
  var node__16029 = domina.single_node.call(null, content);
  var attrs__16031 = node__16029.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.map.call(null, function(p1__16025_SHARP_) {
    var attr__16034 = attrs__16031.item(p1__16025_SHARP_);
    return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null, attr__16034.nodeName.toLowerCase())], [attr__16034.nodeValue])
  }, cljs.core.range.call(null, attrs__16031.length)))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__16059__16060 = cljs.core.seq.call(null, styles);
  if(cljs.core.truth_(G__16059__16060)) {
    var G__16064__16067 = cljs.core.first.call(null, G__16059__16060);
    var vec__16066__16068 = G__16064__16067;
    var name__16069 = cljs.core.nth.call(null, vec__16066__16068, 0, null);
    var value__16070 = cljs.core.nth.call(null, vec__16066__16068, 1, null);
    var G__16059__16071 = G__16059__16060;
    var G__16064__16072 = G__16064__16067;
    var G__16059__16073 = G__16059__16071;
    while(true) {
      var vec__16074__16075 = G__16064__16072;
      var name__16076 = cljs.core.nth.call(null, vec__16074__16075, 0, null);
      var value__16078 = cljs.core.nth.call(null, vec__16074__16075, 1, null);
      var G__16059__16079 = G__16059__16073;
      domina.set_style_BANG_.call(null, content, name__16076, value__16078);
      var temp__3698__auto____16082 = cljs.core.next.call(null, G__16059__16079);
      if(cljs.core.truth_(temp__3698__auto____16082)) {
        var G__16059__16086 = temp__3698__auto____16082;
        var G__16090 = cljs.core.first.call(null, G__16059__16086);
        var G__16091 = G__16059__16086;
        G__16064__16072 = G__16090;
        G__16059__16073 = G__16091;
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
  var G__16094__16096 = cljs.core.seq.call(null, attrs);
  if(cljs.core.truth_(G__16094__16096)) {
    var G__16098__16100 = cljs.core.first.call(null, G__16094__16096);
    var vec__16099__16101 = G__16098__16100;
    var name__16103 = cljs.core.nth.call(null, vec__16099__16101, 0, null);
    var value__16105 = cljs.core.nth.call(null, vec__16099__16101, 1, null);
    var G__16094__16106 = G__16094__16096;
    var G__16098__16108 = G__16098__16100;
    var G__16094__16109 = G__16094__16106;
    while(true) {
      var vec__16111__16113 = G__16098__16108;
      var name__16115 = cljs.core.nth.call(null, vec__16111__16113, 0, null);
      var value__16119 = cljs.core.nth.call(null, vec__16111__16113, 1, null);
      var G__16094__16121 = G__16094__16109;
      domina.set_attr_BANG_.call(null, content, name__16115, value__16119);
      var temp__3698__auto____16133 = cljs.core.next.call(null, G__16094__16121);
      if(cljs.core.truth_(temp__3698__auto____16133)) {
        var G__16094__16135 = temp__3698__auto____16133;
        var G__16162 = cljs.core.first.call(null, G__16094__16135);
        var G__16163 = G__16094__16135;
        G__16098__16108 = G__16162;
        G__16094__16109 = G__16163;
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
  var G__16168__16169 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__16168__16169)) {
    var node__16172 = cljs.core.first.call(null, G__16168__16169);
    var G__16168__16173 = G__16168__16169;
    while(true) {
      goog.dom.classes.add.call(null, node__16172, class$);
      var temp__3698__auto____16174 = cljs.core.next.call(null, G__16168__16173);
      if(cljs.core.truth_(temp__3698__auto____16174)) {
        var G__16168__16176 = temp__3698__auto____16174;
        var G__16197 = cljs.core.first.call(null, G__16168__16176);
        var G__16198 = G__16168__16176;
        node__16172 = G__16197;
        G__16168__16173 = G__16198;
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
  var G__16212__16215 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__16212__16215)) {
    var node__16221 = cljs.core.first.call(null, G__16212__16215);
    var G__16212__16222 = G__16212__16215;
    while(true) {
      goog.dom.classes.remove.call(null, node__16221, class$);
      var temp__3698__auto____16223 = cljs.core.next.call(null, G__16212__16222);
      if(cljs.core.truth_(temp__3698__auto____16223)) {
        var G__16212__16224 = temp__3698__auto____16223;
        var G__16227 = cljs.core.first.call(null, G__16212__16224);
        var G__16228 = G__16212__16224;
        node__16221 = G__16227;
        G__16212__16222 = G__16228;
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
  var text__16248 = function(content) {
    return text.call(null, content, true)
  };
  var text__16249 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node.call(null, content)))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node.call(null, content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__16248.call(this, content);
      case 2:
        return text__16249.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__16253__16256 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__16253__16256)) {
    var node__16257 = cljs.core.first.call(null, G__16253__16256);
    var G__16253__16258 = G__16253__16256;
    while(true) {
      goog.dom.setTextContent.call(null, node__16257, value);
      var temp__3698__auto____16259 = cljs.core.next.call(null, G__16253__16258);
      if(cljs.core.truth_(temp__3698__auto____16259)) {
        var G__16253__16260 = temp__3698__auto____16259;
        var G__16271 = cljs.core.first.call(null, G__16253__16260);
        var G__16272 = G__16253__16260;
        node__16257 = G__16271;
        G__16253__16258 = G__16272;
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
  var G__16277__16280 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__16277__16280)) {
    var node__16283 = cljs.core.first.call(null, G__16277__16280);
    var G__16277__16284 = G__16277__16280;
    while(true) {
      goog.dom.forms.setValue.call(null, node__16283, value);
      var temp__3698__auto____16288 = cljs.core.next.call(null, G__16277__16284);
      if(cljs.core.truth_(temp__3698__auto____16288)) {
        var G__16277__16291 = temp__3698__auto____16288;
        var G__16295 = cljs.core.first.call(null, G__16277__16291);
        var G__16296 = G__16277__16291;
        node__16283 = G__16295;
        G__16277__16284 = G__16296;
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
domina.set_html_BANG_ = function set_html_BANG_(content, value) {
  var G__16336__16337 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__16336__16337)) {
    var node__16338 = cljs.core.first.call(null, G__16336__16337);
    var G__16336__16339 = G__16336__16337;
    while(true) {
      node__16338.innerHTML = value;
      var temp__3698__auto____16342 = cljs.core.next.call(null, G__16336__16339);
      if(cljs.core.truth_(temp__3698__auto____16342)) {
        var G__16336__16343 = temp__3698__auto____16342;
        var G__16352 = cljs.core.first.call(null, G__16336__16343);
        var G__16353 = G__16336__16343;
        node__16338 = G__16352;
        G__16336__16339 = G__16353;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.apply_with_cloning = function apply_with_cloning(f, parent_content, child_content) {
  var parents__16438 = domina.nodes.call(null, parent_content);
  var children__16439 = domina.nodes.call(null, child_content);
  var first_child__16450 = function() {
    var frag__16440 = document.createDocumentFragment();
    var G__16441__16442 = cljs.core.seq.call(null, children__16439);
    if(cljs.core.truth_(G__16441__16442)) {
      var child__16443 = cljs.core.first.call(null, G__16441__16442);
      var G__16441__16444 = G__16441__16442;
      while(true) {
        frag__16440.appendChild(child__16443);
        var temp__3698__auto____16445 = cljs.core.next.call(null, G__16441__16444);
        if(cljs.core.truth_(temp__3698__auto____16445)) {
          var G__16441__16449 = temp__3698__auto____16445;
          var G__16454 = cljs.core.first.call(null, G__16441__16449);
          var G__16456 = G__16441__16449;
          child__16443 = G__16454;
          G__16441__16444 = G__16456;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return frag__16440
  }();
  var other_children__16451 = cljs.core.doall.call(null, cljs.core.repeatedly.call(null, cljs.core.count.call(null, parents__16438) - 1, function() {
    return first_child__16450.cloneNode(true)
  }));
  if(cljs.core.truth_(cljs.core.seq.call(null, parents__16438))) {
    f.call(null, cljs.core.first.call(null, parents__16438), first_child__16450);
    return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__16306_SHARP_, p2__16307_SHARP_) {
      return f.call(null, p1__16306_SHARP_, p2__16307_SHARP_)
    }, cljs.core.rest.call(null, parents__16438), other_children__16451))
  }else {
    return null
  }
};
domina.lazy_nodelist = function() {
  var lazy_nodelist = null;
  var lazy_nodelist__16498 = function(nl) {
    return lazy_nodelist.call(null, nl, 0)
  };
  var lazy_nodelist__16499 = function(nl, n) {
    if(cljs.core.truth_(n < nl.length)) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons.call(null, nl.item(n), lazy_nodelist.call(null, nl, n + 1))
      })
    }else {
      return null
    }
  };
  lazy_nodelist = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nodelist__16498.call(this, nl);
      case 2:
        return lazy_nodelist__16499.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return lazy_nodelist
}();
domina.create_wrapper = function create_wrapper(table_level) {
  return document.createElement(cljs.core.truth_(table_level) ? cljs.core.truth_(cljs.core.set(["td", "th"]).call(null, table_level)) ? "tr" : "table" : "div")
};
domina.set_wrapper_html_BANG_ = function set_wrapper_html_BANG_(wrapper, content) {
  if(cljs.core.truth_(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT)) {
    wrapper.innerHTML = cljs.core.str.call(null, "<br>", content);
    return wrapper.removeChild(goog.dom.getFirstElementChild.call(null, wrapper))
  }else {
    return wrapper.innerHTML = content
  }
};
domina.extract_wrapper_dom = function extract_wrapper_dom(wrapper, table_level) {
  var inner_wrapper__16505 = cljs.core.truth_(cljs.core._EQ_.call(null, table_level, "tr")) ? cljs.core.first.call(null, goog.dom.getElementsByTagNameAndClass.call(null, "tbody", null, wrapper)) : wrapper;
  var children__16506 = cljs.core.seq.call(null, goog.dom.getChildren.call(null, inner_wrapper__16505));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, children__16506), 1))) {
    return inner_wrapper__16505.removeChild(goog.dom.getFirstElementChild.call(null, inner_wrapper__16505))
  }else {
    return children__16506
  }
};
domina.string_to_dom = function string_to_dom(content) {
  var vec__16507__16508 = cljs.core.re_find.call(null, /^<(t(head|body|foot|[rhd]))/, content);
  var ___16509 = cljs.core.nth.call(null, vec__16507__16508, 0, null);
  var table_level__16510 = cljs.core.nth.call(null, vec__16507__16508, 1, null);
  var ___16511 = cljs.core.nthnext.call(null, vec__16507__16508, 2);
  var wrapper__16512 = domina.create_wrapper.call(null, table_level__16510);
  domina.set_wrapper_html_BANG_.call(null, wrapper__16512, content);
  return domina.extract_wrapper_dom.call(null, wrapper__16512, table_level__16510)
};
domina.DomContent["_"] = true;
domina.nodes["_"] = function(content) {
  if(cljs.core.truth_(function() {
    var x__6703__auto____16515 = content;
    if(cljs.core.truth_(function() {
      var and__3546__auto____16516 = x__6703__auto____16515;
      if(cljs.core.truth_(and__3546__auto____16516)) {
        var and__3546__auto____16517 = x__6703__auto____16515.cljs$core$ISeqable$;
        if(cljs.core.truth_(and__3546__auto____16517)) {
          var and__3546__auto____16518 = x__6703__auto____16515.hasOwnProperty;
          if(cljs.core.truth_(and__3546__auto____16518)) {
            return cljs.core.not.call(null, x__6703__auto____16515.hasOwnProperty("cljs$core$ISeqable$"))
          }else {
            return and__3546__auto____16518
          }
        }else {
          return and__3546__auto____16517
        }
      }else {
        return and__3546__auto____16516
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, x__6703__auto____16515)
    }
  }())) {
    return cljs.core.seq.call(null, content)
  }else {
    return cljs.core.cons.call(null, content)
  }
};
domina.single_node["_"] = function(content) {
  if(cljs.core.truth_(function() {
    var x__6703__auto____16520 = content;
    if(cljs.core.truth_(function() {
      var and__3546__auto____16521 = x__6703__auto____16520;
      if(cljs.core.truth_(and__3546__auto____16521)) {
        var and__3546__auto____16522 = x__6703__auto____16520.cljs$core$ISeqable$;
        if(cljs.core.truth_(and__3546__auto____16522)) {
          var and__3546__auto____16523 = x__6703__auto____16520.hasOwnProperty;
          if(cljs.core.truth_(and__3546__auto____16523)) {
            return cljs.core.not.call(null, x__6703__auto____16520.hasOwnProperty("cljs$core$ISeqable$"))
          }else {
            return and__3546__auto____16523
          }
        }else {
          return and__3546__auto____16522
        }
      }else {
        return and__3546__auto____16521
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, x__6703__auto____16520)
    }
  }())) {
    return cljs.core.first.call(null, content)
  }else {
    return content
  }
};
domina.DomContent["string"] = true;
domina.nodes["string"] = function(s) {
  return domina.nodes.call(null, domina.string_to_dom.call(null, s))
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
    var G__16543 = null;
    var G__16543__16544 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__16543__16545 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__16543 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__16543__16544.call(this, nodelist, n);
        case 3:
          return G__16543__16545.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__16543
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
    var G__16553 = null;
    var G__16553__16554 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__16553__16555 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__16553 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__16553__16554.call(this, nodelist, n);
        case 3:
          return G__16553__16555.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__16553
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
    var G__16557 = null;
    var G__16557__16558 = function(coll, n) {
      return coll.item(n)
    };
    var G__16557__16559 = function(coll, n, not_found) {
      if(cljs.core.truth_(coll.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, coll, n)
      }
    };
    G__16557 = function(coll, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__16557__16558.call(this, coll, n);
        case 3:
          return G__16557__16559.call(this, coll, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__16557
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
  var doc__15635 = goog.dom.getOwnerDocument.call(null, node);
  if(cljs.core.truth_(function() {
    var and__3546__auto____15636 = node.selectSingleNode;
    if(cljs.core.truth_(and__3546__auto____15636)) {
      return doc__15635.setProperty
    }else {
      return and__3546__auto____15636
    }
  }())) {
    doc__15635.setProperty("SelectionLanguage", "XPath");
    return technique_1.call(null, node, path)
  }else {
    if(cljs.core.truth_(doc__15635.evaluate)) {
      return technique_2.call(null, null, doc__15635, node, path)
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
    var result__15675 = doc.evaluate(expr, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__15675.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__15684 = doc.evaluate(expr, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__15685 = result__15684.snapshotLength;
    var i__15686 = 0;
    var acc__15687 = null;
    while(true) {
      if(cljs.core.truth_(i__15686 < num_results__15685)) {
        var G__15693 = i__15686 + 1;
        var G__15694 = cljs.core.cons.call(null, result__15684.snapshotItem(i__15686), acc__15687);
        i__15686 = G__15693;
        acc__15687 = G__15694;
        continue
      }else {
        return acc__15687
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
  var xpath__15769 = function(expr) {
    return xpath.call(null, domina.xpath.root_element.call(null), expr)
  };
  var xpath__15770 = function(base, expr) {
    if(cljs.core.truth_(void 0 === domina.xpath.t15740)) {
      domina.xpath.t15740 = function(expr, base, xpath, __meta) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath;
        this.__meta = __meta
      };
      domina.xpath.t15740.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
        return cljs.core.list.call(null, "domina.xpath.t15740")
      };
      domina.xpath.t15740.prototype.domina$DomContent$ = true;
      domina.xpath.t15740.prototype.domina$DomContent$nodes = function(_) {
        var this__15761 = this;
        return cljs.core.mapcat.call(null, cljs.core.partial.call(null, domina.xpath.select_nodes, this__15761.expr), domina.nodes.call(null, this__15761.base))
      };
      domina.xpath.t15740.prototype.domina$DomContent$single_node = function(_) {
        var this__15766 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.partial.call(null, domina.xpath.select_node, this__15766.expr), domina.nodes.call(null, this__15766.base))))
      };
      domina.xpath.t15740.prototype.cljs$core$IMeta$ = true;
      domina.xpath.t15740.prototype.cljs$core$IMeta$_meta = function(_) {
        var this__15767 = this;
        return this__15767.__meta
      };
      domina.xpath.t15740.prototype.cljs$core$IWithMeta$ = true;
      domina.xpath.t15740.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
        var this__15768 = this;
        return new domina.xpath.t15740(this__15768.expr, this__15768.base, this__15768.xpath, __meta)
      };
      domina.xpath.t15740
    }else {
    }
    return new domina.xpath.t15740(expr, base, xpath, null)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__15769.call(this, base);
      case 2:
        return xpath__15770.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return xpath
}();
goog.provide("domina.css");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.dom.query");
domina.css.root_element = function root_element() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.css.sel = function() {
  var sel = null;
  var sel__16568 = function(expr) {
    return sel.call(null, domina.css.root_element.call(null), expr)
  };
  var sel__16569 = function(base, expr) {
    if(cljs.core.truth_(void 0 === domina.css.t16563)) {
      domina.css.t16563 = function(expr, base, sel, __meta) {
        this.expr = expr;
        this.base = base;
        this.sel = sel;
        this.__meta = __meta
      };
      domina.css.t16563.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
        return cljs.core.list.call(null, "domina.css.t16563")
      };
      domina.css.t16563.prototype.domina$DomContent$ = true;
      domina.css.t16563.prototype.domina$DomContent$nodes = function(_) {
        var this__16564 = this;
        return cljs.core.mapcat.call(null, function(p1__16561_SHARP_) {
          return goog.dom.query.call(null, this__16564.expr, p1__16561_SHARP_)
        }, domina.nodes.call(null, this__16564.base))
      };
      domina.css.t16563.prototype.domina$DomContent$single_node = function(_) {
        var this__16565 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.mapcat.call(null, function(p1__16562_SHARP_) {
          return goog.dom.query.call(null, this__16565.expr, p1__16562_SHARP_)
        }, domina.nodes.call(null, this__16565.base))))
      };
      domina.css.t16563.prototype.cljs$core$IMeta$ = true;
      domina.css.t16563.prototype.cljs$core$IMeta$_meta = function(_) {
        var this__16566 = this;
        return this__16566.__meta
      };
      domina.css.t16563.prototype.cljs$core$IWithMeta$ = true;
      domina.css.t16563.prototype.cljs$core$IWithMeta$_with_meta = function(_, __meta) {
        var this__16567 = this;
        return new domina.css.t16563(this__16567.expr, this__16567.base, this__16567.sel, __meta)
      };
      domina.css.t16563
    }else {
    }
    return new domina.css.t16563(expr, base, sel, null)
  };
  sel = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return sel__16568.call(this, base);
      case 2:
        return sel__16569.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sel
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
            var G__15342 = parent;
            var G__15343 = child.parentNode;
            parent = G__15342;
            child = G__15343;
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
    var re__15345 = e.relatedTarget;
    var this$__15347 = e.currentTarget;
    if(cljs.core.truth_(function() {
      var and__3546__auto____15349 = cljs.core.not.call(null, re__15345 === this$__15347);
      if(cljs.core.truth_(and__3546__auto____15349)) {
        return cljs.core.not.call(null, domina.events.child_of_QMARK_.call(null, this$__15347, re__15345))
      }else {
        return and__3546__auto____15349
      }
    }())) {
      return func.call(null, e)
    }else {
      return null
    }
  }
};
domina.events.gen_wrapper = function gen_wrapper(event_key, wrapped_key, wrapper_func) {
  var obj__15350 = new Object;
  var wevent__15352 = cljs.core.name.call(null, wrapped_key);
  var event__15354 = cljs.core.name.call(null, event_key);
  obj__15350.wrapped_event = wevent__15352;
  obj__15350.event = event__15354;
  obj__15350.listen = function(elm, func, capture, opt_scope, opt_handler) {
    var callback__15355 = wrapper_func.call(null, func);
    callback__15355.listen = func;
    callback__15355.scope = opt_scope;
    callback__15355.event = event__15354;
    callback__15355.capture = capture;
    if(cljs.core.truth_(domina.events.op_handler)) {
      return opt_handler.listen(elm, wevent__15352, callback__15355, capture)
    }else {
      return goog.events.listen.call(null, elm, wevent__15352, callback__15355, capture)
    }
  };
  obj__15350.unlisten = function(elm, func, capture, opt_scope, opt_handler) {
    var listeners__15358 = cljs.core.truth_(cljs.core._EQ_.call(null, capture, undefined)) ? cljs.core.concat.call(null, goog.events.getListeners.call(null, elm, wevent__15352, false), goog.events.getListeners.call(null, elm, wevent__15352, true)) : goog.events.getListeners.call(null, elm, wevent__15352, capture);
    return cljs.core.dorun.call(null, cljs.core.map.call(null, function(obj) {
      var listener__15359 = obj.listener;
      var lfunc__15360 = listener__15359.listen;
      var scope__15361 = listener__15359.scope;
      var capture__15363 = listener__15359.capture;
      if(cljs.core.truth_(function() {
        var and__3546__auto____15367 = function() {
          var or__3548__auto____15366 = cljs.core.not.call(null, func);
          if(cljs.core.truth_(or__3548__auto____15366)) {
            return or__3548__auto____15366
          }else {
            return cljs.core._EQ_.call(null, lfunc__15360, func)
          }
        }();
        if(cljs.core.truth_(and__3546__auto____15367)) {
          var or__3548__auto____15369 = cljs.core.not.call(null, opt_scope);
          if(cljs.core.truth_(or__3548__auto____15369)) {
            return or__3548__auto____15369
          }else {
            return cljs.core._EQ_.call(null, scope__15361, opt_scope)
          }
        }else {
          return and__3546__auto____15367
        }
      }())) {
        if(cljs.core.truth_(opt_handler)) {
          return opt_handler.unlisten(elm, wevent__15352, listener__15359, capture__15363)
        }else {
          return goog.events.unlisten.call(null, elm, wevent__15352, listener__15359, capture__15363)
        }
      }else {
        return null
      }
    }, listeners__15358))
  };
  return obj__15350
};
domina.events.wrapper_register = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
domina.events.reg_event_wrapper_BANG_ = function reg_event_wrapper_BANG_(event_key, wrapped_key, wrapper_func) {
  return cljs.core.swap_BANG_.call(null, domina.events.wrapper_register, cljs.core.assoc, event_key, domina.events.gen_wrapper.call(null, event_key, wrapped_key, wrapper_func))
};
domina.events.listen_BANG_ = function() {
  var listen_BANG_ = null;
  var listen_BANG___15395 = function(nds, event, func) {
    return listen_BANG_.call(null, nds, event, func, false)
  };
  var listen_BANG___15396 = function(nds, event, func, capture) {
    var wrapper__15388 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
    var G__15389__15390 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__15389__15390)) {
      var node__15391 = cljs.core.first.call(null, G__15389__15390);
      var G__15389__15392 = G__15389__15390;
      while(true) {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__15388))) {
          goog.events.listen.call(null, node__15391, cljs.core.name.call(null, event), func, capture)
        }else {
          goog.events.listenWithWrapper.call(null, node__15391, wrapper__15388, func, capture)
        }
        var temp__3698__auto____15393 = cljs.core.next.call(null, G__15389__15392);
        if(cljs.core.truth_(temp__3698__auto____15393)) {
          var G__15389__15394 = temp__3698__auto____15393;
          var G__15398 = cljs.core.first.call(null, G__15389__15394);
          var G__15399 = G__15389__15394;
          node__15391 = G__15398;
          G__15389__15392 = G__15399;
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
        return listen_BANG___15395.call(this, nds, event, func);
      case 4:
        return listen_BANG___15396.call(this, nds, event, func, capture)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return listen_BANG_
}();
domina.events.unlisten_BANG_ = function() {
  var unlisten_BANG_ = null;
  var unlisten_BANG___15473 = function(nds, event, func) {
    return unlisten_BANG_.call(null, nds, event, func, false)
  };
  var unlisten_BANG___15474 = function(nds, event, func, capture) {
    var wrapper__15445 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
    var G__15446__15447 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__15446__15447)) {
      var node__15451 = cljs.core.first.call(null, G__15446__15447);
      var G__15446__15453 = G__15446__15447;
      while(true) {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__15445))) {
          goog.events.unlisten.call(null, node__15451, cljs.core.name.call(null, event), func, capture)
        }else {
          wrapper__15445.unlisten(node__15451, func, capture)
        }
        var temp__3698__auto____15455 = cljs.core.next.call(null, G__15446__15453);
        if(cljs.core.truth_(temp__3698__auto____15455)) {
          var G__15446__15458 = temp__3698__auto____15455;
          var G__15480 = cljs.core.first.call(null, G__15446__15458);
          var G__15481 = G__15446__15458;
          node__15451 = G__15480;
          G__15446__15453 = G__15481;
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
        return unlisten_BANG___15473.call(this, nds, event, func);
      case 4:
        return unlisten_BANG___15474.call(this, nds, event, func, capture)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return unlisten_BANG_
}();
domina.events.remove_listeners_BANG_ = function() {
  var remove_listeners_BANG___delegate = function(nds, event_list) {
    var G__15488__15490 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
    if(cljs.core.truth_(G__15488__15490)) {
      var node__15493 = cljs.core.first.call(null, G__15488__15490);
      var G__15488__15494 = G__15488__15490;
      while(true) {
        var map_func__15501 = function(node__15493, G__15488__15494) {
          return function(p1__15428_SHARP_) {
            var wrapper__15498 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, p1__15428_SHARP_);
            if(cljs.core.truth_(wrapper__15498)) {
              return wrapper__15498.unlisten(node__15493)
            }else {
              return goog.events.removeAll.call(null, node__15493, cljs.core.name.call(null, p1__15428_SHARP_))
            }
          }
        }(node__15493, G__15488__15494);
        cljs.core.doall.call(null, cljs.core.map.call(null, map_func__15501, event_list));
        var temp__3698__auto____15505 = cljs.core.next.call(null, G__15488__15494);
        if(cljs.core.truth_(temp__3698__auto____15505)) {
          var G__15488__15506 = temp__3698__auto____15505;
          var G__15559 = cljs.core.first.call(null, G__15488__15506);
          var G__15560 = G__15488__15506;
          node__15493 = G__15559;
          G__15488__15494 = G__15560;
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
  remove_listeners_BANG_.cljs$lang$applyTo = function(arglist__15564) {
    var nds = cljs.core.first(arglist__15564);
    var event_list = cljs.core.rest(arglist__15564);
    return remove_listeners_BANG___delegate.call(this, nds, event_list)
  };
  return remove_listeners_BANG_
}();
domina.events.fire_listeners_BANG_ = function fire_listeners_BANG_(nds, event, capture, event_map) {
  var wrapper__15568 = cljs.core.deref.call(null, domina.events.wrapper_register).call(null, event);
  var nevent__15570 = cljs.core.truth_(wrapper__15568) ? wrapper__15568.wrapped_event : cljs.core.name.call(null, event);
  var event_obj__15572 = new goog.events.Event(event_map.call(null, "\ufdd0'type"), event_map.call(null, "\ufdd0'target"));
  event_obj__15572.relatedTarget = event_map.call(null, "\ufdd0'related-target");
  var G__15573__15574 = cljs.core.seq.call(null, domina.nodes.call(null, nds));
  if(cljs.core.truth_(G__15573__15574)) {
    var node__15576 = cljs.core.first.call(null, G__15573__15574);
    var G__15573__15579 = G__15573__15574;
    while(true) {
      goog.events.fireListeners.call(null, node__15576, nevent__15570, capture, event_obj__15572);
      var temp__3698__auto____15580 = cljs.core.next.call(null, G__15573__15579);
      if(cljs.core.truth_(temp__3698__auto____15580)) {
        var G__15573__15581 = temp__3698__auto____15580;
        var G__15596 = cljs.core.first.call(null, G__15573__15581);
        var G__15597 = G__15573__15581;
        node__15576 = G__15596;
        G__15573__15579 = G__15597;
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
goog.provide("domina.test");
goog.require("cljs.core");
goog.require("domina.xpath");
goog.require("domina.css");
goog.require("domina.events");
goog.require("domina");
goog.require("goog.events");
window["tryfn"] = function(f) {
  try {
    return f.call()
  }catch(e) {
    return e
  }
};
domina.test.tests = cljs.core.atom.call(null, cljs.core.Vector.fromArray([]));
domina.test.add_test = function add_test(name, testfn) {
  return cljs.core.swap_BANG_.call(null, domina.test.tests, cljs.core.conj, cljs.core.Vector.fromArray([name, testfn]))
};
domina.test.run_test = function run_test(testfn) {
  return tryfn.call(null, testfn)
};
domina.test.run_tests = function run_tests() {
  return cljs.core.map.call(null, function(p__6592) {
    var vec__6593__6594 = p__6592;
    var name__6595 = cljs.core.nth.call(null, vec__6593__6594, 0, null);
    var testfn__6596 = cljs.core.nth.call(null, vec__6593__6594, 1, null);
    return cljs.core.Vector.fromArray([name__6595, domina.test.run_test.call(null, testfn__6596)])
  }, cljs.core.deref.call(null, domina.test.tests))
};
domina.test.reset = function reset() {
  return domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/*"))
};
domina.test.standard_fixture = function standard_fixture() {
  return domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>")
};
domina.test.add_test.call(null, "basic CSS selection", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.css.sel.call(null, "p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 56))), cljs.core.hash_map("\ufdd0'line", 56))), cljs.core.hash_map("\ufdd0'line", 56))), cljs.core.hash_map("\ufdd0'line", 56)))));
  }
});
domina.test.add_test.call(null, "basic CSS selection (single node)", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, Element, domina.single_node.call(null, domina.css.sel.call(null, "p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'instance?", "\ufdd1'js/Element", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 61))), cljs.core.hash_map("\ufdd0'line", 61))), cljs.core.hash_map("\ufdd0'line", 61)))));
  }
});
domina.test.add_test.call(null, "CSS selection with class specification", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.css.sel.call(null, ".d1")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 66))), cljs.core.hash_map("\ufdd0'line", 66))), cljs.core.hash_map("\ufdd0'line", 66))), cljs.core.hash_map("\ufdd0'line", 66)))));
  }
});
domina.test.add_test.call(null, "a relative CSS selector", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.css.sel.call(null, domina.css.sel.call(null, ".d1"), "p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 71)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 72))), cljs.core.hash_map("\ufdd0'line", 
    71))), cljs.core.hash_map("\ufdd0'line", 71))), cljs.core.hash_map("\ufdd0'line", 71))), cljs.core.hash_map("\ufdd0'line", 71)))));
  }
});
domina.test.add_test.call(null, "extended CSS chaining", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.css.sel.call(null, "body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.css.sel.call(null, domina.css.sel.call(null, domina.css.sel.call(null, domina.css.sel.call(null, "body"), "div"), "p"), "span")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "body"), cljs.core.hash_map("\ufdd0'line", 78)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "div"), cljs.core.hash_map("\ufdd0'line", 79)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", 
    "p"), cljs.core.hash_map("\ufdd0'line", 80)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "span"), cljs.core.hash_map("\ufdd0'line", 81))), cljs.core.hash_map("\ufdd0'line", 78))), cljs.core.hash_map("\ufdd0'line", 78))), cljs.core.hash_map("\ufdd0'line", 78))), cljs.core.hash_map("\ufdd0'line", 78)))));
  }
});
domina.test.add_test.call(null, "basic xpath selection", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 88))), cljs.core.hash_map("\ufdd0'line", 88))), cljs.core.hash_map("\ufdd0'line", 88))), cljs.core.hash_map("\ufdd0'line", 88)))));
  }
});
domina.test.add_test.call(null, "basic xpath selection (single node)", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, Element, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'instance?", "\ufdd1'js/Element", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 93))), cljs.core.hash_map("\ufdd0'line", 93))), cljs.core.hash_map("\ufdd0'line", 93)))));
  }
});
domina.test.add_test.call(null, "xpath selection with class specification", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 98))), cljs.core.hash_map("\ufdd0'line", 98))), cljs.core.hash_map("\ufdd0'line", 98))), cljs.core.hash_map("\ufdd0'line", 98)))));
  }
});
domina.test.add_test.call(null, "a relative xpath expression", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body/div[@class='d1']"), "p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 103)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "p"), cljs.core.hash_map("\ufdd0'line", 
    104))), cljs.core.hash_map("\ufdd0'line", 103))), cljs.core.hash_map("\ufdd0'line", 103))), cljs.core.hash_map("\ufdd0'line", 103))), cljs.core.hash_map("\ufdd0'line", 103)))));
  }
});
domina.test.add_test.call(null, "extended selection chaining", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body"), "div"), "p"), "span")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body"), cljs.core.hash_map("\ufdd0'line", 110)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "div"), cljs.core.hash_map("\ufdd0'line", 111)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", 
    "p"), cljs.core.hash_map("\ufdd0'line", 112)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "span"), cljs.core.hash_map("\ufdd0'line", 113))), cljs.core.hash_map("\ufdd0'line", 110))), cljs.core.hash_map("\ufdd0'line", 110))), cljs.core.hash_map("\ufdd0'line", 110))), cljs.core.hash_map("\ufdd0'line", 110)))));
  }
});
domina.test.add_test.call(null, "advanced xpath", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[following-sibling::p[@class='p3']]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[following-sibling::p[@class='p3']]"), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117)))));
  }
});
domina.test.add_test.call(null, "look up node by id", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.by_id.call(null, "id1")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "id1"), cljs.core.hash_map("\ufdd0'line", 122))), cljs.core.hash_map("\ufdd0'line", 122))), cljs.core.hash_map("\ufdd0'line", 122))), cljs.core.hash_map("\ufdd0'line", 122)))));
  }
});
domina.test.add_test.call(null, "look up nodes by class", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.by_class.call(null, "p3")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-class", "p3"), cljs.core.hash_map("\ufdd0'line", 127))), cljs.core.hash_map("\ufdd0'line", 127))), cljs.core.hash_map("\ufdd0'line", 127))), cljs.core.hash_map("\ufdd0'line", 127)))));
  }
});
domina.test.add_test.call(null, "child selection", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.children.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'children", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132)))));
  }
});
domina.test.add_test.call(null, "clone a single node", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.clone.call(null, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p"))))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 137))), cljs.core.hash_map("\ufdd0'line", 137))), cljs.core.hash_map("\ufdd0'line", 137))), cljs.core.hash_map("\ufdd0'line", 
    137))), cljs.core.hash_map("\ufdd0'line", 137)))));
  }
});
domina.test.add_test.call(null, "clone multiple nodes", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.clone.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p"))))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 
    142))), cljs.core.hash_map("\ufdd0'line", 142)))));
  }
});
domina.test.add_test.call(null, "append a single child to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended1'>test</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 148))), cljs.core.hash_map("\ufdd0'line", 148))), cljs.core.hash_map("\ufdd0'line", 148))), cljs.core.hash_map("\ufdd0'line", 148)))));
  }
});
domina.test.add_test.call(null, "append multiple children to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 154))), cljs.core.hash_map("\ufdd0'line", 154))), cljs.core.hash_map("\ufdd0'line", 154))), cljs.core.hash_map("\ufdd0'line", 154)))));
  }
});
domina.test.add_test.call(null, "append a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "<span>!!</span>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span"), cljs.core.hash_map("\ufdd0'line", 161))), cljs.core.hash_map("\ufdd0'line", 161))), cljs.core.hash_map("\ufdd0'line", 161))), cljs.core.hash_map("\ufdd0'line", 161)))));
  }
});
domina.test.add_test.call(null, "append multiple children to multiple parents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "some <span class='foo'>more</span> text");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span[@class='foo']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span[@class='foo']"), cljs.core.hash_map("\ufdd0'line", 168))), cljs.core.hash_map("\ufdd0'line", 168))), cljs.core.hash_map("\ufdd0'line", 168))), cljs.core.hash_map("\ufdd0'line", 168)))));
  }
});
domina.test.add_test.call(null, "prepend a single child to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>2</div><div>3</div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "1", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "1", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[1]"), cljs.core.hash_map("\ufdd0'line", 174))), cljs.core.hash_map("\ufdd0'line", 174))), cljs.core.hash_map("\ufdd0'line", 174)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "2", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[2]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "2", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[2]"), cljs.core.hash_map("\ufdd0'line", 175))), cljs.core.hash_map("\ufdd0'line", 175))), cljs.core.hash_map("\ufdd0'line", 175)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "3", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[3]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "3", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[3]"), cljs.core.hash_map("\ufdd0'line", 176))), cljs.core.hash_map("\ufdd0'line", 176))), cljs.core.hash_map("\ufdd0'line", 176)))));
  }
});
domina.test.add_test.call(null, "prepend a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p>2</p></div><div><p>2</p></div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div"), "<p>1</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[text()='2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[text()='2']"), cljs.core.hash_map("\ufdd0'line", 182))), cljs.core.hash_map("\ufdd0'line", 182))), cljs.core.hash_map("\ufdd0'line", 182))), cljs.core.hash_map("\ufdd0'line", 182)))));
  }
});
domina.test.add_test.call(null, "Insert a single child to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']/p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='testInserts']/p"), cljs.core.hash_map("\ufdd0'line", 194))), cljs.core.hash_map("\ufdd0'line", 194))), cljs.core.hash_map("\ufdd0'line", 194))), cljs.core.hash_map("\ufdd0'line", 194)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/preceding-sibling::*")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/following-sibling::*")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 196))), cljs.core.hash_map("\ufdd0'line", 196))), cljs.core.hash_map("\ufdd0'line", 196))), cljs.core.hash_map("\ufdd0'line", 196)))));
  }
});
domina.test.add_test.call(null, "Insert a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert1'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert2'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  var G__6708__6710 = cljs.core.seq.call(null, cljs.core.Vector.fromArray([domina.xpath.xpath.call(null, "//div[@id='testInsert1']"), domina.xpath.xpath.call(null, "//div[@id='testInsert2']")]));
  if(cljs.core.truth_(G__6708__6710)) {
    var children__6719 = cljs.core.first.call(null, G__6708__6710);
    var G__6708__6720 = G__6708__6710;
    while(true) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__6719, "p")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p"), cljs.core.hash_map("\ufdd0'line", 212))), cljs.core.hash_map("\ufdd0'line", 212))), cljs.core.hash_map("\ufdd0'line", 212))), cljs.core.hash_map("\ufdd0'line", 212)))));
      }
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__6719, "p[@class='i2']/preceding-sibling::*")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 213))), cljs.core.hash_map("\ufdd0'line", 213))), cljs.core.hash_map("\ufdd0'line", 213))), cljs.core.hash_map("\ufdd0'line", 
        213)))));
      }
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__6719, "p[@class='i2']/following-sibling::*")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 215))), cljs.core.hash_map("\ufdd0'line", 215))), cljs.core.hash_map("\ufdd0'line", 215))), cljs.core.hash_map("\ufdd0'line", 
        215)))));
      }
      var temp__3698__auto____6724 = cljs.core.next.call(null, G__6708__6720);
      if(cljs.core.truth_(temp__3698__auto____6724)) {
        var G__6708__6725 = temp__3698__auto____6724;
        var G__6758 = cljs.core.first.call(null, G__6708__6725);
        var G__6759 = G__6708__6725;
        children__6719 = G__6758;
        G__6708__6720 = G__6759;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
});
domina.test.add_test.call(null, "destroy a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended1'>app1</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 221))), cljs.core.hash_map("\ufdd0'line", 221))), cljs.core.hash_map("\ufdd0'line", 221))), cljs.core.hash_map("\ufdd0'line", 221)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 223))), cljs.core.hash_map("\ufdd0'line", 223))), cljs.core.hash_map("\ufdd0'line", 223))), cljs.core.hash_map("\ufdd0'line", 223)))));
  }
});
domina.test.add_test.call(null, "destroy multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>app1</p><p class='appended2'>app2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 229))), cljs.core.hash_map("\ufdd0'line", 229))), cljs.core.hash_map("\ufdd0'line", 229))), cljs.core.hash_map("\ufdd0'line", 229)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 231)))));
  }
});
domina.test.add_test.call(null, "detach and reattach a single node", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  var n__6764 = domina.detach_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 237))), cljs.core.hash_map("\ufdd0'line", 237))), cljs.core.hash_map("\ufdd0'line", 237))), cljs.core.hash_map("\ufdd0'line", 237)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"), n__6764);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239)))));
  }
});
domina.test.add_test.call(null, "detach and reattach multiple nodes", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  var n__6768 = domina.detach_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 245))), cljs.core.hash_map("\ufdd0'line", 245))), cljs.core.hash_map("\ufdd0'line", 245))), cljs.core.hash_map("\ufdd0'line", 245)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"), n__6768);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 247)))));
  }
});
domina.test.add_test.call(null, "clear a node's contents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.destroy_children_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 253)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/*")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/*"), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254)))));
  }
});
domina.test.add_test.call(null, "insert-before! with a single reference and single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before']"), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 
    260)))));
  }
});
domina.test.add_test.call(null, "insert-before! with a single reference and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before1</p><p>before2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 266))), cljs.core.hash_map("\ufdd0'line", 266))), cljs.core.hash_map("\ufdd0'line", 266))), cljs.core.hash_map("\ufdd0'line", 
    266)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 267))), cljs.core.hash_map("\ufdd0'line", 267))), cljs.core.hash_map("\ufdd0'line", 267))), cljs.core.hash_map("\ufdd0'line", 
    267)))));
  }
});
domina.test.add_test.call(null, "insert-before! with multiple reference nodes and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_class.call(null, "ref")), "<p>before</p>");
  var num_refs__6798 = cljs.core.count.call(null, domina.nodes.call(null, domina.by_class.call(null, "ref")));
  var num_ps__6799 = cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")));
  alert("refs: num_refs__6798");
  alert("refs: num_ps__6799");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 278))), cljs.core.hash_map("\ufdd0'line", 278))), cljs.core.hash_map("\ufdd0'line", 278))), cljs.core.hash_map("\ufdd0'line", 278)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref1']/preceding-sibling::p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 279))), cljs.core.hash_map("\ufdd0'line", 279))), cljs.core.hash_map("\ufdd0'line", 279))), cljs.core.hash_map("\ufdd0'line", 279)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref2']/preceding-sibling::p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 280))), cljs.core.hash_map("\ufdd0'line", 280))), cljs.core.hash_map("\ufdd0'line", 280))), cljs.core.hash_map("\ufdd0'line", 280)))));
  }
});
domina.test.add_test.call(null, "insert-after! with a single reference and single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>after</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after']"), cljs.core.hash_map("\ufdd0'line", 287))), cljs.core.hash_map("\ufdd0'line", 287))), cljs.core.hash_map("\ufdd0'line", 287))), cljs.core.hash_map("\ufdd0'line", 
    287)))));
  }
});
domina.test.add_test.call(null, "insert-after! with a single reference and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>after1</p><p>after2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 293))), cljs.core.hash_map("\ufdd0'line", 293))), cljs.core.hash_map("\ufdd0'line", 293))), cljs.core.hash_map("\ufdd0'line", 
    293)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 294))), cljs.core.hash_map("\ufdd0'line", 294))), cljs.core.hash_map("\ufdd0'line", 294))), cljs.core.hash_map("\ufdd0'line", 
    294)))));
  }
});
domina.test.add_test.call(null, "insert-after! with multiple reference nodes and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_class.call(null, "ref")), "<p>after</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 301))), cljs.core.hash_map("\ufdd0'line", 301))), cljs.core.hash_map("\ufdd0'line", 301))), cljs.core.hash_map("\ufdd0'line", 301)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref1']/following-sibling::p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 302))), cljs.core.hash_map("\ufdd0'line", 302))), cljs.core.hash_map("\ufdd0'line", 302))), cljs.core.hash_map("\ufdd0'line", 302)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref2']/following-sibling::p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 303))), cljs.core.hash_map("\ufdd0'line", 303))), cljs.core.hash_map("\ufdd0'line", 303))), cljs.core.hash_map("\ufdd0'line", 303)))));
  }
});
domina.test.add_test.call(null, "swap-content! with a single reference node and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@id='before']"), "<p id='after'>fixed</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 309))), cljs.core.hash_map("\ufdd0'line", 309))), cljs.core.hash_map("\ufdd0'line", 309))), cljs.core.hash_map("\ufdd0'line", 309)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='after']"), cljs.core.hash_map("\ufdd0'line", 310))), cljs.core.hash_map("\ufdd0'line", 310))), cljs.core.hash_map("\ufdd0'line", 310))), cljs.core.hash_map("\ufdd0'line", 310)))));
  }
});
domina.test.add_test.call(null, "swap-content! with a single reference node and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@id='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 316))), cljs.core.hash_map("\ufdd0'line", 316))), cljs.core.hash_map("\ufdd0'line", 316))), cljs.core.hash_map("\ufdd0'line", 316)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 317))), cljs.core.hash_map("\ufdd0'line", 317))), cljs.core.hash_map("\ufdd0'line", 317))), cljs.core.hash_map("\ufdd0'line", 317)))));
  }
});
domina.test.add_test.call(null, "swap-content! with multiple reference nodes and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='before'>TYPO-1</p></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='before'>TYPO-2</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@class='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='before']"), cljs.core.hash_map("\ufdd0'line", 324))), cljs.core.hash_map("\ufdd0'line", 324))), cljs.core.hash_map("\ufdd0'line", 324))), cljs.core.hash_map("\ufdd0'line", 324)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 4, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 4, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 325))), cljs.core.hash_map("\ufdd0'line", 325))), cljs.core.hash_map("\ufdd0'line", 325))), cljs.core.hash_map("\ufdd0'line", 325)))));
  }
});
domina.test.add_test.call(null, "can retrieve a css property value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), '<div style="background-color: maroon;">Test</div>');
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "maroon", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 332)), "background-color"), cljs.core.hash_map("\ufdd0'line", 332))), cljs.core.hash_map("\ufdd0'line", 332)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "maroon", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 333)), "\ufdd0'background-color"), cljs.core.hash_map("\ufdd0'line", 333))), cljs.core.hash_map("\ufdd0'line", 333)))));
  }
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'no-such-style")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 334)), "\ufdd0'no-such-style"), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334)))));
  }
});
domina.test.add_test.call(null, "can retrieve an HTML attribute value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), '<div height="42">Content!</div>');
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 339)), "height"), cljs.core.hash_map("\ufdd0'line", 339))), cljs.core.hash_map("\ufdd0'line", 339)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 340)), "\ufdd0'height"), cljs.core.hash_map("\ufdd0'line", 340))), cljs.core.hash_map("\ufdd0'line", 340)))));
  }
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'no-such-attr:c")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 341)), "\ufdd0'no-such-attr:c"), cljs.core.hash_map("\ufdd0'line", 341))), cljs.core.hash_map("\ufdd0'line", 341)))));
  }
});
domina.test.add_test.call(null, "can set a css property on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color", "red");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "\ufdd0'background-color", "green");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 348)), "background-color"), cljs.core.hash_map("\ufdd0'line", 348))), cljs.core.hash_map("\ufdd0'line", 348)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "green", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "background-color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "green", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 349)), "background-color"), cljs.core.hash_map("\ufdd0'line", 349))), cljs.core.hash_map("\ufdd0'line", 349)))));
  }
});
domina.test.add_test.call(null, "can set a css property on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "color", "red");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 355)), "color"), cljs.core.hash_map("\ufdd0'line", 355))), cljs.core.hash_map("\ufdd0'line", 355)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 356)), "color"), cljs.core.hash_map("\ufdd0'line", 356))), cljs.core.hash_map("\ufdd0'line", 356)))));
  }
});
domina.test.add_test.call(null, "can set a html attribute on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width", 42);
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "\ufdd0'width", 42);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 363)), "width"), cljs.core.hash_map("\ufdd0'line", 363))), cljs.core.hash_map("\ufdd0'line", 363)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 364)), "width"), cljs.core.hash_map("\ufdd0'line", 364))), cljs.core.hash_map("\ufdd0'line", 364)))));
  }
});
domina.test.add_test.call(null, "can set a html attribute on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "width", 42);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 370)), "width"), cljs.core.hash_map("\ufdd0'line", 370))), cljs.core.hash_map("\ufdd0'line", 370)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 371)), "width"), cljs.core.hash_map("\ufdd0'line", 371))), cljs.core.hash_map("\ufdd0'line", 371)))));
  }
});
domina.test.add_test.call(null, "can get multiple CSS styles from a single node.", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "color", "red");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "background-color", "black");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}), domina.styles.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'color", "red", "\ufdd0'background-color", "black"), cljs.core.with_meta(cljs.core.list("\ufdd1'styles", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 379))), cljs.core.hash_map("\ufdd0'line", 379))), cljs.core.hash_map("\ufdd0'line", 378)))));
  }
});
domina.test.add_test.call(null, "can get multiple HTML attributes from a single node.", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "width", 42);
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "height", 24);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":"42", "\ufdd0'height":"24"}), domina.attrs.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'width", "42", "\ufdd0'height", "24"), cljs.core.with_meta(cljs.core.list("\ufdd1'attrs", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 387))), cljs.core.hash_map("\ufdd0'line", 387))), cljs.core.hash_map("\ufdd0'line", 386)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_styles_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 394)), "background-color"), cljs.core.hash_map("\ufdd0'line", 394))), cljs.core.hash_map("\ufdd0'line", 394)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 395)), "color"), cljs.core.hash_map("\ufdd0'line", 395))), cljs.core.hash_map("\ufdd0'line", 395)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_styles_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 402)), "background-color"), cljs.core.hash_map("\ufdd0'line", 402))), cljs.core.hash_map("\ufdd0'line", 402)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 403)), "color"), cljs.core.hash_map("\ufdd0'line", 403))), cljs.core.hash_map("\ufdd0'line", 403)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 404)), "background-color"), cljs.core.hash_map("\ufdd0'line", 404))), cljs.core.hash_map("\ufdd0'line", 404)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 405)), "color"), cljs.core.hash_map("\ufdd0'line", 405))), cljs.core.hash_map("\ufdd0'line", 405)))));
  }
});
domina.test.add_test.call(null, "can set multiple HTML attributes on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_attrs_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 412)), "width"), cljs.core.hash_map("\ufdd0'line", 412))), cljs.core.hash_map("\ufdd0'line", 412)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "height")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 413)), "height"), cljs.core.hash_map("\ufdd0'line", 413))), cljs.core.hash_map("\ufdd0'line", 413)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attrs_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 420)), "width"), cljs.core.hash_map("\ufdd0'line", 420))), cljs.core.hash_map("\ufdd0'line", 420)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 421)), "height"), cljs.core.hash_map("\ufdd0'line", 421))), cljs.core.hash_map("\ufdd0'line", 421)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 422)), "width"), cljs.core.hash_map("\ufdd0'line", 422))), cljs.core.hash_map("\ufdd0'line", 422)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "height")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 423)), "height"), cljs.core.hash_map("\ufdd0'line", 423))), cljs.core.hash_map("\ufdd0'line", 423)))));
  }
});
domina.test.add_test.call(null, "test the has-class? function", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1'>1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class2'>2</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 429)), "class1"), cljs.core.hash_map("\ufdd0'line", 429))), cljs.core.hash_map("\ufdd0'line", 429)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 430)), "class2"), cljs.core.hash_map("\ufdd0'line", 430))), cljs.core.hash_map("\ufdd0'line", 430)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 431)), "class2"), cljs.core.hash_map("\ufdd0'line", 431))), cljs.core.hash_map("\ufdd0'line", 431)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 432)), "class1"), cljs.core.hash_map("\ufdd0'line", 432))), cljs.core.hash_map("\ufdd0'line", 432)))));
  }
});
domina.test.add_test.call(null, "can add a CSS class to a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class2");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 439)), "class1"), cljs.core.hash_map("\ufdd0'line", 439))), cljs.core.hash_map("\ufdd0'line", 439)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 440)), "class2"), cljs.core.hash_map("\ufdd0'line", 440))), cljs.core.hash_map("\ufdd0'line", 440)))));
  }
});
domina.test.add_test.call(null, "can add a CSS class to multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class2");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 447)), "class1"), cljs.core.hash_map("\ufdd0'line", 447))), cljs.core.hash_map("\ufdd0'line", 447)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 448)), "class1"), cljs.core.hash_map("\ufdd0'line", 448))), cljs.core.hash_map("\ufdd0'line", 448)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 449)), "class2"), cljs.core.hash_map("\ufdd0'line", 449))), cljs.core.hash_map("\ufdd0'line", 449)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 450)), "class2"), cljs.core.hash_map("\ufdd0'line", 450))), cljs.core.hash_map("\ufdd0'line", 450)))));
  }
});
domina.test.add_test.call(null, "can remove a CSS class from a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2'>1</div>");
  domina.remove_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 456)), "class1"), cljs.core.hash_map("\ufdd0'line", 456))), cljs.core.hash_map("\ufdd0'line", 456)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 457)), "class2"), cljs.core.hash_map("\ufdd0'line", 457))), cljs.core.hash_map("\ufdd0'line", 457)))));
  }
});
domina.test.add_test.call(null, "can remove a CSS class from a multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
  domina.remove_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 463)), "class1"), cljs.core.hash_map("\ufdd0'line", 463))), cljs.core.hash_map("\ufdd0'line", 463)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 464)), "class2"), cljs.core.hash_map("\ufdd0'line", 464))), cljs.core.hash_map("\ufdd0'line", 464)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 465)), "class1"), cljs.core.hash_map("\ufdd0'line", 465))), cljs.core.hash_map("\ufdd0'line", 465)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 466)), "class2"), cljs.core.hash_map("\ufdd0'line", 466))), cljs.core.hash_map("\ufdd0'line", 466)))));
  }
});
domina.test.add_test.call(null, "can get a list of all css classes for a node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2 class3'>1</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.Vector.fromArray(["class1", "class2", "class3"]), domina.classes.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", new cljs.core.Vector(null, ["class1", "class2", "class3"]), cljs.core.with_meta(cljs.core.list("\ufdd1'classes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 471))), cljs.core.hash_map("\ufdd0'line", 471))), cljs.core.hash_map("\ufdd0'line", 471)))));
  }
});
domina.test.add_test.call(null, "can retrieve the text value of a node with normalization.", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p>\n\n   Some text.  \n  </p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some text.", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 476))), cljs.core.hash_map("\ufdd0'line", 476))), cljs.core.hash_map("\ufdd0'line", 476)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some text.", domina.text.call(null, domina.xpath.xpath.call(null, "//p"), true)))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 477)), true), cljs.core.hash_map("\ufdd0'line", 477))), cljs.core.hash_map("\ufdd0'line", 477)))));
  }
});
domina.test.add_test.call(null, "can set text on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p></p>");
  domina.set_text_BANG_.call(null, domina.xpath.xpath.call(null, "//p"), "Hello world!");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 490))), cljs.core.hash_map("\ufdd0'line", 490))), cljs.core.hash_map("\ufdd0'line", 490)))));
  }
});
domina.test.add_test.call(null, "can set text on a multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p></p><p></p>");
  domina.set_text_BANG_.call(null, domina.xpath.xpath.call(null, "//p"), "Hello world!");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[1]"), cljs.core.hash_map("\ufdd0'line", 496))), cljs.core.hash_map("\ufdd0'line", 496))), cljs.core.hash_map("\ufdd0'line", 496)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p[2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[2]"), cljs.core.hash_map("\ufdd0'line", 497))), cljs.core.hash_map("\ufdd0'line", 497))), cljs.core.hash_map("\ufdd0'line", 497)))));
  }
});
domina.test.add_test.call(null, "can get a form field value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test' value='Test Value'></input></form>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 502))), cljs.core.hash_map("\ufdd0'line", 502))), cljs.core.hash_map("\ufdd0'line", 502)))));
  }
});
domina.test.add_test.call(null, "can set a form field value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test'></input></form>");
  domina.set_value_BANG_.call(null, domina.xpath.xpath.call(null, "//input"), "Test Value");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 508))), cljs.core.hash_map("\ufdd0'line", 508))), cljs.core.hash_map("\ufdd0'line", 508)))));
  }
});
domina.test.add_test.call(null, "can set multiple form field values", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
  domina.set_value_BANG_.call(null, domina.xpath.xpath.call(null, "//input"), "Test Value");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[1]"), cljs.core.hash_map("\ufdd0'line", 514))), cljs.core.hash_map("\ufdd0'line", 514))), cljs.core.hash_map("\ufdd0'line", 514)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input[2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[2]"), cljs.core.hash_map("\ufdd0'line", 515))), cljs.core.hash_map("\ufdd0'line", 515))), cljs.core.hash_map("\ufdd0'line", 515)))));
  }
});
domina.test.add_test.call(null, "can get a node's innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='foobar'>some text</p></div>");
  if(cljs.core.truth_(function() {
    var or__3548__auto____6935 = cljs.core._EQ_.call(null, '<p class="foobar">some text</p>', domina.html.call(null, domina.xpath.xpath.call(null, "//div")));
    if(cljs.core.truth_(or__3548__auto____6935)) {
      return or__3548__auto____6935
    }else {
      return cljs.core._EQ_.call(null, "<P class=foobar>some text</P>", domina.html.call(null, domina.xpath.xpath.call(null, "//div")))
    }
  }())) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'or", cljs.core.with_meta(cljs.core.list("\ufdd1'=", '<p class="foobar">some text</p>', cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 521))), cljs.core.hash_map("\ufdd0'line", 521))), cljs.core.hash_map("\ufdd0'line", 521)), cljs.core.with_meta(cljs.core.list("\ufdd1'=", 
    "<P class=foobar>some text</P>", cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 521)))));
  }
});
domina.test.add_test.call(null, "can set a node's innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div></div>");
  domina.set_html_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "<p class='foobar'>some text</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[@class='foobar']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528)))));
  }
});
domina.test.add_test.call(null, "can set multiple nodes' innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div></div><div></div>");
  domina.set_html_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "<p class='foobar'>some text</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[@class='foobar']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534)))));
  }
});
domina.test.add_test.call(null, "can get nodes from strings containing cell-level table fragments", function() {
  domina.test.reset.call(null);
  var n__6936 = domina.nodes.call(null, "<td>Cell</td><th>Header</th>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, n__6936), 2))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 539)), 2), cljs.core.hash_map("\ufdd0'line", 539)))));
  }
  var G__6937__6938 = cljs.core.seq.call(null, n__6936);
  if(cljs.core.truth_(G__6937__6938)) {
    var h__6939 = cljs.core.first.call(null, G__6937__6938);
    var G__6937__6940 = G__6937__6938;
    while(true) {
      if(cljs.core.truth_(cljs.core.re_find.call(null, /TableCell/, cljs.core.pr_str.call(null, h__6939)))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1're-find", /TableCell/, cljs.core.with_meta(cljs.core.list("\ufdd1'pr-str", "\ufdd1'h"), cljs.core.hash_map("\ufdd0'line", 541))), cljs.core.hash_map("\ufdd0'line", 541)))));
      }
      var temp__3698__auto____6941 = cljs.core.next.call(null, G__6937__6940);
      if(cljs.core.truth_(temp__3698__auto____6941)) {
        var G__6937__6942 = temp__3698__auto____6941;
        var G__6963 = cljs.core.first.call(null, G__6937__6942);
        var G__6964 = G__6937__6942;
        h__6939 = G__6963;
        G__6937__6940 = G__6964;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
});
domina.test.add_test.call(null, "can get nodes from strings containing row-level table fragments", function() {
  domina.test.reset.call(null);
  var n__6967 = domina.nodes.call(null, "<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, n__6967), 2))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 546)), 2), cljs.core.hash_map("\ufdd0'line", 546)))));
  }
  var G__6970__6973 = cljs.core.seq.call(null, n__6967);
  if(cljs.core.truth_(G__6970__6973)) {
    var h__6974 = cljs.core.first.call(null, G__6970__6973);
    var G__6970__6975 = G__6970__6973;
    while(true) {
      if(cljs.core.truth_(cljs.core.re_find.call(null, /TableRow/, cljs.core.pr_str.call(null, h__6974)))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1're-find", /TableRow/, cljs.core.with_meta(cljs.core.list("\ufdd1'pr-str", "\ufdd1'h"), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 548)))));
      }
      var temp__3698__auto____6976 = cljs.core.next.call(null, G__6970__6975);
      if(cljs.core.truth_(temp__3698__auto____6976)) {
        var G__6970__6977 = temp__3698__auto____6976;
        var G__6987 = cljs.core.first.call(null, G__6970__6977);
        var G__6988 = G__6970__6977;
        h__6974 = G__6987;
        G__6970__6975 = G__6988;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
});
domina.test.add_test.call(null, "can get nodes from strings containing section-level table fragments", function() {
  domina.test.reset.call(null);
  var n__6995 = domina.nodes.call(null, "<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, n__6995), 2))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 553)), 2), cljs.core.hash_map("\ufdd0'line", 553)))));
  }
  var G__6997__6998 = cljs.core.seq.call(null, n__6995);
  if(cljs.core.truth_(G__6997__6998)) {
    var h__6999 = cljs.core.first.call(null, G__6997__6998);
    var G__6997__7000 = G__6997__6998;
    while(true) {
      if(cljs.core.truth_(cljs.core.re_find.call(null, /TableSection/, cljs.core.pr_str.call(null, h__6999)))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1're-find", /TableSection/, cljs.core.with_meta(cljs.core.list("\ufdd1'pr-str", "\ufdd1'h"), cljs.core.hash_map("\ufdd0'line", 555))), cljs.core.hash_map("\ufdd0'line", 555)))));
      }
      var temp__3698__auto____7001 = cljs.core.next.call(null, G__6997__7000);
      if(cljs.core.truth_(temp__3698__auto____7001)) {
        var G__6997__7002 = temp__3698__auto____7001;
        var G__7005 = cljs.core.first.call(null, G__6997__7002);
        var G__7006 = G__6997__7002;
        h__6999 = G__7005;
        G__6997__7000 = G__7006;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
});
domina.test.add_test.call(null, "can trigger a handler on a :mouseover event", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseover", function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  });
  var target__7010 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7010, "\ufdd0'mouseover", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseover", "\ufdd0'target":target__7010}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 563))), cljs.core.hash_map("\ufdd0'line", 563))), cljs.core.hash_map("\ufdd0'line", 563)))));
  }
});
domina.test.add_test.call(null, "can trigger a handler on a :mouseout event", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseout", function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  });
  var target__7031 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7031, "\ufdd0'mouseout", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseout", "\ufdd0'target":target__7031}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 571))), cljs.core.hash_map("\ufdd0'line", 571))), cljs.core.hash_map("\ufdd0'line", 571)))));
  }
});
domina.test.add_test.call(null, "can trigger a handler on a :click event", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'click", function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  });
  var target__7051 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7051, "\ufdd0'click", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'click", "\ufdd0'target":target__7051}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 579))), cljs.core.hash_map("\ufdd0'line", 579))), cljs.core.hash_map("\ufdd0'line", 579)))));
  }
});
domina.test.add_test.call(null, "can trigger a handler on a :mouseenter event", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='parent'><div id='ref'></div></div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseenter", function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  });
  var rtarget__7052 = domina.by_id.call(null, "parent");
  var target__7053 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7053, "\ufdd0'mouseenter", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'related-target", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseenter", "\ufdd0'related-target":rtarget__7052, "\ufdd0'target":target__7053}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 589))), cljs.core.hash_map("\ufdd0'line", 589))), cljs.core.hash_map("\ufdd0'line", 589)))));
  }
});
domina.test.add_test.call(null, "can trigger a handler on a :mouseleave event", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='parent'><div id='ref'></div></div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseleave", function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  });
  var rtarget__7063 = domina.by_id.call(null, "parent");
  var target__7064 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7064, "\ufdd0'mouseleave", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'related-target", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseleave", "\ufdd0'related-target":rtarget__7063, "\ufdd0'target":target__7064}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 599))), cljs.core.hash_map("\ufdd0'line", 599))), cljs.core.hash_map("\ufdd0'line", 599)))));
  }
});
domina.test.add_test.call(null, "can remove-listeners on a :click event", function() {
  var handler__7068 = function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  };
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'click", handler__7068);
  domina.events.remove_listeners_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'click");
  var target__7069 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7069, "\ufdd0'click", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'click", "\ufdd0'target":target__7069}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some content", domina.text.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some content", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 609))), cljs.core.hash_map("\ufdd0'line", 609))), cljs.core.hash_map("\ufdd0'line", 609)))));
  }
});
domina.test.add_test.call(null, "can remove-listeners on a :mouseenter event", function() {
  var handler__7075 = function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  };
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='parent'><div id='ref'>Some content</div></div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseenter", handler__7075);
  domina.events.remove_listeners_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseenter");
  var rtarget__7076 = domina.by_id.call(null, "parent");
  var target__7077 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7077, "\ufdd0'mouseenter", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'related-target", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseenter", "\ufdd0'related-target":rtarget__7076, "\ufdd0'target":target__7077}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some content", domina.text.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some content", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 620))), cljs.core.hash_map("\ufdd0'line", 620))), cljs.core.hash_map("\ufdd0'line", 620)))));
  }
});
domina.test.add_test.call(null, "can unlisten! on a :click event", function() {
  var handler__7083 = function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  };
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'click", handler__7083);
  domina.events.unlisten_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'click", handler__7083);
  var target__7084 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7084, "\ufdd0'click", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'click", "\ufdd0'target":target__7084}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some content", domina.text.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some content", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 630))), cljs.core.hash_map("\ufdd0'line", 630))), cljs.core.hash_map("\ufdd0'line", 630)))));
  }
});
domina.test.add_test.call(null, "can unlisten! on a :mouseenter event", function() {
  var handler__7089 = function() {
    return domina.append_BANG_.call(null, domina.by_id.call(null, "ref"), "<p>Hello world!</p>")
  };
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='parent'><div id='ref'>Some content</div></div>");
  domina.events.listen_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseenter", handler__7089);
  domina.events.unlisten_BANG_.call(null, domina.by_id.call(null, "ref"), "\ufdd0'mouseenter", handler__7089);
  var rtarget__7090 = domina.by_id.call(null, "parent");
  var target__7091 = domina.by_id.call(null, "ref");
  domina.events.fire_listeners_BANG_.call(null, target__7091, "\ufdd0'mouseenter", false, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'related-target", "\ufdd0'target"], {"\ufdd0'type":"\ufdd0'mouseenter", "\ufdd0'related-target":rtarget__7090, "\ufdd0'target":target__7091}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some content", domina.text.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some content", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 641))), cljs.core.hash_map("\ufdd0'line", 641))), cljs.core.hash_map("\ufdd0'line", 641)))));
  }
});
domina.test.add_test.call(null, "can append to a document fragment", function() {
  domina.test.reset.call(null);
  var frag__7117 = document.createDocumentFragment();
  domina.append_BANG_.call(null, frag__7117, "<div>testing</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), frag__7117);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "testing", domina.text.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "testing", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 649))), cljs.core.hash_map("\ufdd0'line", 649))), cljs.core.hash_map("\ufdd0'line", 649)))));
  }
});
domina.test.add_test.call(null, "doesn't clone unless necessary", function() {
  domina.test.reset.call(null);
  var child__7118 = domina.single_node.call(null, "<div>hello</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), child__7118);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, child__7118, domina.single_node.call(null, domina.xpath.xpath.call(null, "//body/div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'child", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div"), cljs.core.hash_map("\ufdd0'line", 656))), cljs.core.hash_map("\ufdd0'line", 656))), cljs.core.hash_map("\ufdd0'line", 656)))));
  }
});
domina.test.report = function report(test_results) {
  domina.test.reset.call(null);
  var G__7121__7122 = cljs.core.seq.call(null, test_results);
  if(cljs.core.truth_(G__7121__7122)) {
    var G__7124__7126 = cljs.core.first.call(null, G__7121__7122);
    var vec__7125__7127 = G__7124__7126;
    var name__7129 = cljs.core.nth.call(null, vec__7125__7127, 0, null);
    var result__7130 = cljs.core.nth.call(null, vec__7125__7127, 1, null);
    var G__7121__7131 = G__7121__7122;
    var G__7124__7132 = G__7124__7126;
    var G__7121__7133 = G__7121__7131;
    while(true) {
      var vec__7134__7135 = G__7124__7132;
      var name__7136 = cljs.core.nth.call(null, vec__7134__7135, 0, null);
      var result__7137 = cljs.core.nth.call(null, vec__7134__7135, 1, null);
      var G__7121__7138 = G__7121__7133;
      var result_div__7139 = domina.single_node.call(null, "<div class='test-result'></div>");
      domina.set_text_BANG_.call(null, result_div__7139, name__7136);
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, result__7137, null)))) {
        domina.add_class_BANG_.call(null, result_div__7139, "failed");
        domina.append_BANG_.call(null, result_div__7139, cljs.core.str.call(null, "<div class='message'>", result__7137, "</div>"))
      }else {
        domina.add_class_BANG_.call(null, result_div__7139, "passed")
      }
      domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), result_div__7139);
      var temp__3698__auto____7140 = cljs.core.next.call(null, G__7121__7138);
      if(cljs.core.truth_(temp__3698__auto____7140)) {
        var G__7121__7143 = temp__3698__auto____7140;
        var G__7163 = cljs.core.first.call(null, G__7121__7143);
        var G__7164 = G__7121__7143;
        G__7124__7132 = G__7163;
        G__7121__7133 = G__7164;
        continue
      }else {
      }
      break
    }
  }else {
  }
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
  domina.set_text_BANG_.call(null, domina.by_id.call(null, "total-tests"), cljs.core.count.call(null, test_results));
  var failure_count__7154 = cljs.core.count.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.second, test_results)));
  domina.set_text_BANG_.call(null, domina.by_id.call(null, "total-failures"), failure_count__7154);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, failure_count__7154))) {
    return domina.add_class_BANG_.call(null, domina.by_id.call(null, "test-summary"), "passed")
  }else {
    return domina.add_class_BANG_.call(null, domina.by_id.call(null, "test-summary"), "failed")
  }
};
domina.test.test_results = cljs.core.doall.call(null, domina.test.run_tests.call(null));
domina.test.report.call(null, domina.test.test_results);
