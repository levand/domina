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
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  this.stack = (new Error).stack || "";
  if(opt_msg) {
    this.message = String(opt_msg)
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
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
  var or__3548__auto____2592 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____2592)) {
    return or__3548__auto____2592
  }else {
    var or__3548__auto____2593 = p["_"];
    if(cljs.core.truth_(or__3548__auto____2593)) {
      return or__3548__auto____2593
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
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2594 = coll;
    if(cljs.core.truth_(and__3546__auto____2594)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____2594
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____2595 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2595)) {
        return or__3548__auto____2595
      }else {
        var or__3548__auto____2596 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____2596)) {
          return or__3548__auto____2596
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
    var and__3546__auto____2597 = coll;
    if(cljs.core.truth_(and__3546__auto____2597)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____2597
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____2598 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2598)) {
        return or__3548__auto____2598
      }else {
        var or__3548__auto____2599 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____2599)) {
          return or__3548__auto____2599
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
    var and__3546__auto____2600 = coll;
    if(cljs.core.truth_(and__3546__auto____2600)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____2600
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____2601 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2601)) {
        return or__3548__auto____2601
      }else {
        var or__3548__auto____2602 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____2602)) {
          return or__3548__auto____2602
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
  var _nth__2609 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2603 = coll;
      if(cljs.core.truth_(and__3546__auto____2603)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____2603
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____2604 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2604)) {
          return or__3548__auto____2604
        }else {
          var or__3548__auto____2605 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____2605)) {
            return or__3548__auto____2605
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__2610 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2606 = coll;
      if(cljs.core.truth_(and__3546__auto____2606)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____2606
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____2607 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2607)) {
          return or__3548__auto____2607
        }else {
          var or__3548__auto____2608 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____2608)) {
            return or__3548__auto____2608
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
        return _nth__2609.call(this, coll, n);
      case 3:
        return _nth__2610.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2612 = coll;
    if(cljs.core.truth_(and__3546__auto____2612)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____2612
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____2613 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2613)) {
        return or__3548__auto____2613
      }else {
        var or__3548__auto____2614 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____2614)) {
          return or__3548__auto____2614
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2615 = coll;
    if(cljs.core.truth_(and__3546__auto____2615)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____2615
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____2616 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2616)) {
        return or__3548__auto____2616
      }else {
        var or__3548__auto____2617 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____2617)) {
          return or__3548__auto____2617
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
  var _lookup__2624 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2618 = o;
      if(cljs.core.truth_(and__3546__auto____2618)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____2618
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____2619 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____2619)) {
          return or__3548__auto____2619
        }else {
          var or__3548__auto____2620 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____2620)) {
            return or__3548__auto____2620
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__2625 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2621 = o;
      if(cljs.core.truth_(and__3546__auto____2621)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____2621
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____2622 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____2622)) {
          return or__3548__auto____2622
        }else {
          var or__3548__auto____2623 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____2623)) {
            return or__3548__auto____2623
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
        return _lookup__2624.call(this, o, k);
      case 3:
        return _lookup__2625.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2627 = coll;
    if(cljs.core.truth_(and__3546__auto____2627)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____2627
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____2628 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2628)) {
        return or__3548__auto____2628
      }else {
        var or__3548__auto____2629 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____2629)) {
          return or__3548__auto____2629
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2630 = coll;
    if(cljs.core.truth_(and__3546__auto____2630)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____2630
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____2631 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2631)) {
        return or__3548__auto____2631
      }else {
        var or__3548__auto____2632 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____2632)) {
          return or__3548__auto____2632
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
    var and__3546__auto____2633 = coll;
    if(cljs.core.truth_(and__3546__auto____2633)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____2633
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____2634 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2634)) {
        return or__3548__auto____2634
      }else {
        var or__3548__auto____2635 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____2635)) {
          return or__3548__auto____2635
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
    var and__3546__auto____2636 = coll;
    if(cljs.core.truth_(and__3546__auto____2636)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____2636
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____2637 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2637)) {
        return or__3548__auto____2637
      }else {
        var or__3548__auto____2638 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____2638)) {
          return or__3548__auto____2638
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
    var and__3546__auto____2639 = coll;
    if(cljs.core.truth_(and__3546__auto____2639)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____2639
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____2640 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2640)) {
        return or__3548__auto____2640
      }else {
        var or__3548__auto____2641 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____2641)) {
          return or__3548__auto____2641
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2642 = coll;
    if(cljs.core.truth_(and__3546__auto____2642)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____2642
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____2643 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2643)) {
        return or__3548__auto____2643
      }else {
        var or__3548__auto____2644 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____2644)) {
          return or__3548__auto____2644
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
    var and__3546__auto____2645 = coll;
    if(cljs.core.truth_(and__3546__auto____2645)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____2645
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____2646 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2646)) {
        return or__3548__auto____2646
      }else {
        var or__3548__auto____2647 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____2647)) {
          return or__3548__auto____2647
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
    var and__3546__auto____2648 = o;
    if(cljs.core.truth_(and__3546__auto____2648)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____2648
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____2649 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2649)) {
        return or__3548__auto____2649
      }else {
        var or__3548__auto____2650 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____2650)) {
          return or__3548__auto____2650
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
    var and__3546__auto____2651 = o;
    if(cljs.core.truth_(and__3546__auto____2651)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____2651
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____2652 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2652)) {
        return or__3548__auto____2652
      }else {
        var or__3548__auto____2653 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____2653)) {
          return or__3548__auto____2653
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
    var and__3546__auto____2654 = o;
    if(cljs.core.truth_(and__3546__auto____2654)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____2654
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____2655 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2655)) {
        return or__3548__auto____2655
      }else {
        var or__3548__auto____2656 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____2656)) {
          return or__3548__auto____2656
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
    var and__3546__auto____2657 = o;
    if(cljs.core.truth_(and__3546__auto____2657)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____2657
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____2658 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2658)) {
        return or__3548__auto____2658
      }else {
        var or__3548__auto____2659 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____2659)) {
          return or__3548__auto____2659
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
  var _reduce__2666 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2660 = coll;
      if(cljs.core.truth_(and__3546__auto____2660)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____2660
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____2661 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2661)) {
          return or__3548__auto____2661
        }else {
          var or__3548__auto____2662 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____2662)) {
            return or__3548__auto____2662
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__2667 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2663 = coll;
      if(cljs.core.truth_(and__3546__auto____2663)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____2663
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____2664 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2664)) {
          return or__3548__auto____2664
        }else {
          var or__3548__auto____2665 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____2665)) {
            return or__3548__auto____2665
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
        return _reduce__2666.call(this, coll, f);
      case 3:
        return _reduce__2667.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2669 = o;
    if(cljs.core.truth_(and__3546__auto____2669)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____2669
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____2670 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2670)) {
        return or__3548__auto____2670
      }else {
        var or__3548__auto____2671 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____2671)) {
          return or__3548__auto____2671
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
    var and__3546__auto____2672 = o;
    if(cljs.core.truth_(and__3546__auto____2672)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____2672
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____2673 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2673)) {
        return or__3548__auto____2673
      }else {
        var or__3548__auto____2674 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____2674)) {
          return or__3548__auto____2674
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
    var and__3546__auto____2675 = o;
    if(cljs.core.truth_(and__3546__auto____2675)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____2675
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____2676 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2676)) {
        return or__3548__auto____2676
      }else {
        var or__3548__auto____2677 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____2677)) {
          return or__3548__auto____2677
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
    var and__3546__auto____2678 = o;
    if(cljs.core.truth_(and__3546__auto____2678)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____2678
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____2679 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2679)) {
        return or__3548__auto____2679
      }else {
        var or__3548__auto____2680 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____2680)) {
          return or__3548__auto____2680
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
    var and__3546__auto____2681 = d;
    if(cljs.core.truth_(and__3546__auto____2681)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____2681
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____2682 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____2682)) {
        return or__3548__auto____2682
      }else {
        var or__3548__auto____2683 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____2683)) {
          return or__3548__auto____2683
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
    var and__3546__auto____2684 = this$;
    if(cljs.core.truth_(and__3546__auto____2684)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____2684
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____2685 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2685)) {
        return or__3548__auto____2685
      }else {
        var or__3548__auto____2686 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____2686)) {
          return or__3548__auto____2686
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2687 = this$;
    if(cljs.core.truth_(and__3546__auto____2687)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____2687
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____2688 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2688)) {
        return or__3548__auto____2688
      }else {
        var or__3548__auto____2689 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____2689)) {
          return or__3548__auto____2689
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2690 = this$;
    if(cljs.core.truth_(and__3546__auto____2690)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____2690
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____2691 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2691)) {
        return or__3548__auto____2691
      }else {
        var or__3548__auto____2692 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____2692)) {
          return or__3548__auto____2692
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
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__2693 = null;
  var G__2693__2694 = function(o, k) {
    return null
  };
  var G__2693__2695 = function(o, k, not_found) {
    return not_found
  };
  G__2693 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2693__2694.call(this, o, k);
      case 3:
        return G__2693__2695.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2693
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
  var G__2697 = null;
  var G__2697__2698 = function(_, f) {
    return f.call(null)
  };
  var G__2697__2699 = function(_, f, start) {
    return start
  };
  G__2697 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2697__2698.call(this, _, f);
      case 3:
        return G__2697__2699.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2697
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
  var G__2701 = null;
  var G__2701__2702 = function(_, n) {
    return null
  };
  var G__2701__2703 = function(_, n, not_found) {
    return not_found
  };
  G__2701 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2701__2702.call(this, _, n);
      case 3:
        return G__2701__2703.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2701
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
  var ci_reduce__2711 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__2705 = cljs.core._nth.call(null, cicoll, 0);
      var n__2706 = 1;
      while(true) {
        if(cljs.core.truth_(n__2706 < cljs.core._count.call(null, cicoll))) {
          var G__2715 = f.call(null, val__2705, cljs.core._nth.call(null, cicoll, n__2706));
          var G__2716 = n__2706 + 1;
          val__2705 = G__2715;
          n__2706 = G__2716;
          continue
        }else {
          return val__2705
        }
        break
      }
    }
  };
  var ci_reduce__2712 = function(cicoll, f, val) {
    var val__2707 = val;
    var n__2708 = 0;
    while(true) {
      if(cljs.core.truth_(n__2708 < cljs.core._count.call(null, cicoll))) {
        var G__2717 = f.call(null, val__2707, cljs.core._nth.call(null, cicoll, n__2708));
        var G__2718 = n__2708 + 1;
        val__2707 = G__2717;
        n__2708 = G__2718;
        continue
      }else {
        return val__2707
      }
      break
    }
  };
  var ci_reduce__2713 = function(cicoll, f, val, idx) {
    var val__2709 = val;
    var n__2710 = idx;
    while(true) {
      if(cljs.core.truth_(n__2710 < cljs.core._count.call(null, cicoll))) {
        var G__2719 = f.call(null, val__2709, cljs.core._nth.call(null, cicoll, n__2710));
        var G__2720 = n__2710 + 1;
        val__2709 = G__2719;
        n__2710 = G__2720;
        continue
      }else {
        return val__2709
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__2711.call(this, cicoll, f);
      case 3:
        return ci_reduce__2712.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__2713.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ci_reduce
}();
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__2721 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__2734 = null;
  var G__2734__2735 = function(coll, f) {
    var this__2722 = this;
    return cljs.core.ci_reduce.call(null, coll, f, this__2722.a[this__2722.i], this__2722.i + 1)
  };
  var G__2734__2736 = function(coll, f, start) {
    var this__2723 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start, this__2723.i)
  };
  G__2734 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2734__2735.call(this, coll, f);
      case 3:
        return G__2734__2736.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2734
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__2724 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__2725 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__2738 = null;
  var G__2738__2739 = function(coll, n) {
    var this__2726 = this;
    var i__2727 = n + this__2726.i;
    if(cljs.core.truth_(i__2727 < this__2726.a.length)) {
      return this__2726.a[i__2727]
    }else {
      return null
    }
  };
  var G__2738__2740 = function(coll, n, not_found) {
    var this__2728 = this;
    var i__2729 = n + this__2728.i;
    if(cljs.core.truth_(i__2729 < this__2728.a.length)) {
      return this__2728.a[i__2729]
    }else {
      return not_found
    }
  };
  G__2738 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2738__2739.call(this, coll, n);
      case 3:
        return G__2738__2740.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2738
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__2730 = this;
  return this__2730.a.length - this__2730.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__2731 = this;
  return this__2731.a[this__2731.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__2732 = this;
  if(cljs.core.truth_(this__2732.i + 1 < this__2732.a.length)) {
    return new cljs.core.IndexedSeq(this__2732.a, this__2732.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__2733 = this;
  return this$
};
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
  var G__2742 = null;
  var G__2742__2743 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__2742__2744 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__2742 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2742__2743.call(this, array, f);
      case 3:
        return G__2742__2744.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2742
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__2746 = null;
  var G__2746__2747 = function(array, k) {
    return array[k]
  };
  var G__2746__2748 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__2746 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2746__2747.call(this, array, k);
      case 3:
        return G__2746__2748.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2746
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__2750 = null;
  var G__2750__2751 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__2750__2752 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__2750 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2750__2751.call(this, array, n);
      case 3:
        return G__2750__2752.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2750
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
  var temp__3698__auto____2754 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____2754)) {
    var s__2755 = temp__3698__auto____2754;
    return cljs.core._first.call(null, s__2755)
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
      var G__2756 = cljs.core.next.call(null, s);
      s = G__2756;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__2757 = cljs.core.seq.call(null, x);
  var n__2758 = 0;
  while(true) {
    if(cljs.core.truth_(s__2757)) {
      var G__2759 = cljs.core.next.call(null, s__2757);
      var G__2760 = n__2758 + 1;
      s__2757 = G__2759;
      n__2758 = G__2760;
      continue
    }else {
      return n__2758
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
  var conj__2761 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__2762 = function() {
    var G__2764__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__2765 = conj.call(null, coll, x);
          var G__2766 = cljs.core.first.call(null, xs);
          var G__2767 = cljs.core.next.call(null, xs);
          coll = G__2765;
          x = G__2766;
          xs = G__2767;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__2764 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2764__delegate.call(this, coll, x, xs)
    };
    G__2764.cljs$lang$maxFixedArity = 2;
    G__2764.cljs$lang$applyTo = function(arglist__2768) {
      var coll = cljs.core.first(arglist__2768);
      var x = cljs.core.first(cljs.core.next(arglist__2768));
      var xs = cljs.core.rest(cljs.core.next(arglist__2768));
      return G__2764__delegate.call(this, coll, x, xs)
    };
    return G__2764
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__2761.call(this, coll, x);
      default:
        return conj__2762.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__2762.cljs$lang$applyTo;
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
  var nth__2769 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__2770 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__2769.call(this, coll, n);
      case 3:
        return nth__2770.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__2772 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__2773 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__2772.call(this, o, k);
      case 3:
        return get__2773.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__2776 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__2777 = function() {
    var G__2779__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__2775 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__2780 = ret__2775;
          var G__2781 = cljs.core.first.call(null, kvs);
          var G__2782 = cljs.core.second.call(null, kvs);
          var G__2783 = cljs.core.nnext.call(null, kvs);
          coll = G__2780;
          k = G__2781;
          v = G__2782;
          kvs = G__2783;
          continue
        }else {
          return ret__2775
        }
        break
      }
    };
    var G__2779 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__2779__delegate.call(this, coll, k, v, kvs)
    };
    G__2779.cljs$lang$maxFixedArity = 3;
    G__2779.cljs$lang$applyTo = function(arglist__2784) {
      var coll = cljs.core.first(arglist__2784);
      var k = cljs.core.first(cljs.core.next(arglist__2784));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2784)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2784)));
      return G__2779__delegate.call(this, coll, k, v, kvs)
    };
    return G__2779
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__2776.call(this, coll, k, v);
      default:
        return assoc__2777.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__2777.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__2786 = function(coll) {
    return coll
  };
  var dissoc__2787 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__2788 = function() {
    var G__2790__delegate = function(coll, k, ks) {
      while(true) {
        var ret__2785 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__2791 = ret__2785;
          var G__2792 = cljs.core.first.call(null, ks);
          var G__2793 = cljs.core.next.call(null, ks);
          coll = G__2791;
          k = G__2792;
          ks = G__2793;
          continue
        }else {
          return ret__2785
        }
        break
      }
    };
    var G__2790 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2790__delegate.call(this, coll, k, ks)
    };
    G__2790.cljs$lang$maxFixedArity = 2;
    G__2790.cljs$lang$applyTo = function(arglist__2794) {
      var coll = cljs.core.first(arglist__2794);
      var k = cljs.core.first(cljs.core.next(arglist__2794));
      var ks = cljs.core.rest(cljs.core.next(arglist__2794));
      return G__2790__delegate.call(this, coll, k, ks)
    };
    return G__2790
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__2786.call(this, coll);
      case 2:
        return dissoc__2787.call(this, coll, k);
      default:
        return dissoc__2788.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__2788.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__319__auto____2795 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2796 = x__319__auto____2795;
      if(cljs.core.truth_(and__3546__auto____2796)) {
        var and__3546__auto____2797 = x__319__auto____2795.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____2797)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2795))
        }else {
          return and__3546__auto____2797
        }
      }else {
        return and__3546__auto____2796
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____2795)
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
  var disj__2799 = function(coll) {
    return coll
  };
  var disj__2800 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__2801 = function() {
    var G__2803__delegate = function(coll, k, ks) {
      while(true) {
        var ret__2798 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__2804 = ret__2798;
          var G__2805 = cljs.core.first.call(null, ks);
          var G__2806 = cljs.core.next.call(null, ks);
          coll = G__2804;
          k = G__2805;
          ks = G__2806;
          continue
        }else {
          return ret__2798
        }
        break
      }
    };
    var G__2803 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2803__delegate.call(this, coll, k, ks)
    };
    G__2803.cljs$lang$maxFixedArity = 2;
    G__2803.cljs$lang$applyTo = function(arglist__2807) {
      var coll = cljs.core.first(arglist__2807);
      var k = cljs.core.first(cljs.core.next(arglist__2807));
      var ks = cljs.core.rest(cljs.core.next(arglist__2807));
      return G__2803__delegate.call(this, coll, k, ks)
    };
    return G__2803
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__2799.call(this, coll);
      case 2:
        return disj__2800.call(this, coll, k);
      default:
        return disj__2801.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__2801.cljs$lang$applyTo;
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
    var x__319__auto____2808 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2809 = x__319__auto____2808;
      if(cljs.core.truth_(and__3546__auto____2809)) {
        var and__3546__auto____2810 = x__319__auto____2808.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____2810)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2808))
        }else {
          return and__3546__auto____2810
        }
      }else {
        return and__3546__auto____2809
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__319__auto____2808)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____2811 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2812 = x__319__auto____2811;
      if(cljs.core.truth_(and__3546__auto____2812)) {
        var and__3546__auto____2813 = x__319__auto____2811.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____2813)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2811))
        }else {
          return and__3546__auto____2813
        }
      }else {
        return and__3546__auto____2812
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__319__auto____2811)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__319__auto____2814 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2815 = x__319__auto____2814;
    if(cljs.core.truth_(and__3546__auto____2815)) {
      var and__3546__auto____2816 = x__319__auto____2814.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____2816)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2814))
      }else {
        return and__3546__auto____2816
      }
    }else {
      return and__3546__auto____2815
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__319__auto____2814)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__319__auto____2817 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2818 = x__319__auto____2817;
    if(cljs.core.truth_(and__3546__auto____2818)) {
      var and__3546__auto____2819 = x__319__auto____2817.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____2819)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2817))
      }else {
        return and__3546__auto____2819
      }
    }else {
      return and__3546__auto____2818
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__319__auto____2817)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__319__auto____2820 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2821 = x__319__auto____2820;
    if(cljs.core.truth_(and__3546__auto____2821)) {
      var and__3546__auto____2822 = x__319__auto____2820.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____2822)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2820))
      }else {
        return and__3546__auto____2822
      }
    }else {
      return and__3546__auto____2821
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__319__auto____2820)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____2823 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2824 = x__319__auto____2823;
      if(cljs.core.truth_(and__3546__auto____2824)) {
        var and__3546__auto____2825 = x__319__auto____2823.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____2825)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2823))
        }else {
          return and__3546__auto____2825
        }
      }else {
        return and__3546__auto____2824
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__319__auto____2823)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__319__auto____2826 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2827 = x__319__auto____2826;
    if(cljs.core.truth_(and__3546__auto____2827)) {
      var and__3546__auto____2828 = x__319__auto____2826.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____2828)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2826))
      }else {
        return and__3546__auto____2828
      }
    }else {
      return and__3546__auto____2827
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__319__auto____2826)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__2829 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__2829.push(key)
  });
  return keys__2829
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
    var x__319__auto____2830 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2831 = x__319__auto____2830;
      if(cljs.core.truth_(and__3546__auto____2831)) {
        var and__3546__auto____2832 = x__319__auto____2830.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____2832)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2830))
        }else {
          return and__3546__auto____2832
        }
      }else {
        return and__3546__auto____2831
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__319__auto____2830)
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
  var and__3546__auto____2833 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2833)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____2834 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____2834)) {
        return or__3548__auto____2834
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____2833
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____2835 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2835)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____2835
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____2836 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2836)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____2836
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____2837 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____2837)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____2837
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
    var and__3546__auto____2838 = coll;
    if(cljs.core.truth_(and__3546__auto____2838)) {
      var and__3546__auto____2839 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____2839)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____2839
      }
    }else {
      return and__3546__auto____2838
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___2844 = function(x) {
    return true
  };
  var distinct_QMARK___2845 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___2846 = function() {
    var G__2848__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__2840 = cljs.core.set([y, x]);
        var xs__2841 = more;
        while(true) {
          var x__2842 = cljs.core.first.call(null, xs__2841);
          var etc__2843 = cljs.core.next.call(null, xs__2841);
          if(cljs.core.truth_(xs__2841)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__2840, x__2842))) {
              return false
            }else {
              var G__2849 = cljs.core.conj.call(null, s__2840, x__2842);
              var G__2850 = etc__2843;
              s__2840 = G__2849;
              xs__2841 = G__2850;
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
    var G__2848 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2848__delegate.call(this, x, y, more)
    };
    G__2848.cljs$lang$maxFixedArity = 2;
    G__2848.cljs$lang$applyTo = function(arglist__2851) {
      var x = cljs.core.first(arglist__2851);
      var y = cljs.core.first(cljs.core.next(arglist__2851));
      var more = cljs.core.rest(cljs.core.next(arglist__2851));
      return G__2848__delegate.call(this, x, y, more)
    };
    return G__2848
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___2844.call(this, x);
      case 2:
        return distinct_QMARK___2845.call(this, x, y);
      default:
        return distinct_QMARK___2846.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2846.cljs$lang$applyTo;
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
      var r__2852 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__2852))) {
        return r__2852
      }else {
        if(cljs.core.truth_(r__2852)) {
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
  var sort__2854 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__2855 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__2853 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__2853, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__2853)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__2854.call(this, comp);
      case 2:
        return sort__2855.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__2857 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__2858 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__2857.call(this, keyfn, comp);
      case 3:
        return sort_by__2858.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__2860 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__2861 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__2860.call(this, f, val);
      case 3:
        return reduce__2861.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__2867 = function(f, coll) {
    var temp__3695__auto____2863 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____2863)) {
      var s__2864 = temp__3695__auto____2863;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__2864), cljs.core.next.call(null, s__2864))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__2868 = function(f, val, coll) {
    var val__2865 = val;
    var coll__2866 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__2866)) {
        var G__2870 = f.call(null, val__2865, cljs.core.first.call(null, coll__2866));
        var G__2871 = cljs.core.next.call(null, coll__2866);
        val__2865 = G__2870;
        coll__2866 = G__2871;
        continue
      }else {
        return val__2865
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__2867.call(this, f, val);
      case 3:
        return seq_reduce__2868.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__2872 = null;
  var G__2872__2873 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__2872__2874 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__2872 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2872__2873.call(this, coll, f);
      case 3:
        return G__2872__2874.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2872
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___2876 = function() {
    return 0
  };
  var _PLUS___2877 = function(x) {
    return x
  };
  var _PLUS___2878 = function(x, y) {
    return x + y
  };
  var _PLUS___2879 = function() {
    var G__2881__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, _PLUS_.call(null, x, y), more)
    };
    var G__2881 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2881__delegate.call(this, x, y, more)
    };
    G__2881.cljs$lang$maxFixedArity = 2;
    G__2881.cljs$lang$applyTo = function(arglist__2882) {
      var x = cljs.core.first(arglist__2882);
      var y = cljs.core.first(cljs.core.next(arglist__2882));
      var more = cljs.core.rest(cljs.core.next(arglist__2882));
      return G__2881__delegate.call(this, x, y, more)
    };
    return G__2881
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___2876.call(this);
      case 1:
        return _PLUS___2877.call(this, x);
      case 2:
        return _PLUS___2878.call(this, x, y);
      default:
        return _PLUS___2879.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___2879.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___2883 = function(x) {
    return-x
  };
  var ___2884 = function(x, y) {
    return x - y
  };
  var ___2885 = function() {
    var G__2887__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, _.call(null, x, y), more)
    };
    var G__2887 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2887__delegate.call(this, x, y, more)
    };
    G__2887.cljs$lang$maxFixedArity = 2;
    G__2887.cljs$lang$applyTo = function(arglist__2888) {
      var x = cljs.core.first(arglist__2888);
      var y = cljs.core.first(cljs.core.next(arglist__2888));
      var more = cljs.core.rest(cljs.core.next(arglist__2888));
      return G__2887__delegate.call(this, x, y, more)
    };
    return G__2887
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___2883.call(this, x);
      case 2:
        return ___2884.call(this, x, y);
      default:
        return ___2885.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___2885.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___2889 = function() {
    return 1
  };
  var _STAR___2890 = function(x) {
    return x
  };
  var _STAR___2891 = function(x, y) {
    return x * y
  };
  var _STAR___2892 = function() {
    var G__2894__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, _STAR_.call(null, x, y), more)
    };
    var G__2894 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2894__delegate.call(this, x, y, more)
    };
    G__2894.cljs$lang$maxFixedArity = 2;
    G__2894.cljs$lang$applyTo = function(arglist__2895) {
      var x = cljs.core.first(arglist__2895);
      var y = cljs.core.first(cljs.core.next(arglist__2895));
      var more = cljs.core.rest(cljs.core.next(arglist__2895));
      return G__2894__delegate.call(this, x, y, more)
    };
    return G__2894
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___2889.call(this);
      case 1:
        return _STAR___2890.call(this, x);
      case 2:
        return _STAR___2891.call(this, x, y);
      default:
        return _STAR___2892.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___2892.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___2896 = function(x) {
    return 1 / x
  };
  var _SLASH___2897 = function(x, y) {
    return x / y
  };
  var _SLASH___2898 = function() {
    var G__2900__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__2900 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2900__delegate.call(this, x, y, more)
    };
    G__2900.cljs$lang$maxFixedArity = 2;
    G__2900.cljs$lang$applyTo = function(arglist__2901) {
      var x = cljs.core.first(arglist__2901);
      var y = cljs.core.first(cljs.core.next(arglist__2901));
      var more = cljs.core.rest(cljs.core.next(arglist__2901));
      return G__2900__delegate.call(this, x, y, more)
    };
    return G__2900
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___2896.call(this, x);
      case 2:
        return _SLASH___2897.call(this, x, y);
      default:
        return _SLASH___2898.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___2898.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___2902 = function(x) {
    return true
  };
  var _LT___2903 = function(x, y) {
    return x < y
  };
  var _LT___2904 = function() {
    var G__2906__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2907 = y;
            var G__2908 = cljs.core.first.call(null, more);
            var G__2909 = cljs.core.next.call(null, more);
            x = G__2907;
            y = G__2908;
            more = G__2909;
            continue
          }else {
            return _LT_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__2906 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2906__delegate.call(this, x, y, more)
    };
    G__2906.cljs$lang$maxFixedArity = 2;
    G__2906.cljs$lang$applyTo = function(arglist__2910) {
      var x = cljs.core.first(arglist__2910);
      var y = cljs.core.first(cljs.core.next(arglist__2910));
      var more = cljs.core.rest(cljs.core.next(arglist__2910));
      return G__2906__delegate.call(this, x, y, more)
    };
    return G__2906
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___2902.call(this, x);
      case 2:
        return _LT___2903.call(this, x, y);
      default:
        return _LT___2904.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___2904.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___2911 = function(x) {
    return true
  };
  var _LT__EQ___2912 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___2913 = function() {
    var G__2915__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2916 = y;
            var G__2917 = cljs.core.first.call(null, more);
            var G__2918 = cljs.core.next.call(null, more);
            x = G__2916;
            y = G__2917;
            more = G__2918;
            continue
          }else {
            return _LT__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__2915 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2915__delegate.call(this, x, y, more)
    };
    G__2915.cljs$lang$maxFixedArity = 2;
    G__2915.cljs$lang$applyTo = function(arglist__2919) {
      var x = cljs.core.first(arglist__2919);
      var y = cljs.core.first(cljs.core.next(arglist__2919));
      var more = cljs.core.rest(cljs.core.next(arglist__2919));
      return G__2915__delegate.call(this, x, y, more)
    };
    return G__2915
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___2911.call(this, x);
      case 2:
        return _LT__EQ___2912.call(this, x, y);
      default:
        return _LT__EQ___2913.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___2913.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___2920 = function(x) {
    return true
  };
  var _GT___2921 = function(x, y) {
    return x > y
  };
  var _GT___2922 = function() {
    var G__2924__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2925 = y;
            var G__2926 = cljs.core.first.call(null, more);
            var G__2927 = cljs.core.next.call(null, more);
            x = G__2925;
            y = G__2926;
            more = G__2927;
            continue
          }else {
            return _GT_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__2924 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2924__delegate.call(this, x, y, more)
    };
    G__2924.cljs$lang$maxFixedArity = 2;
    G__2924.cljs$lang$applyTo = function(arglist__2928) {
      var x = cljs.core.first(arglist__2928);
      var y = cljs.core.first(cljs.core.next(arglist__2928));
      var more = cljs.core.rest(cljs.core.next(arglist__2928));
      return G__2924__delegate.call(this, x, y, more)
    };
    return G__2924
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___2920.call(this, x);
      case 2:
        return _GT___2921.call(this, x, y);
      default:
        return _GT___2922.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___2922.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___2929 = function(x) {
    return true
  };
  var _GT__EQ___2930 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___2931 = function() {
    var G__2933__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2934 = y;
            var G__2935 = cljs.core.first.call(null, more);
            var G__2936 = cljs.core.next.call(null, more);
            x = G__2934;
            y = G__2935;
            more = G__2936;
            continue
          }else {
            return _GT__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__2933 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2933__delegate.call(this, x, y, more)
    };
    G__2933.cljs$lang$maxFixedArity = 2;
    G__2933.cljs$lang$applyTo = function(arglist__2937) {
      var x = cljs.core.first(arglist__2937);
      var y = cljs.core.first(cljs.core.next(arglist__2937));
      var more = cljs.core.rest(cljs.core.next(arglist__2937));
      return G__2933__delegate.call(this, x, y, more)
    };
    return G__2933
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___2929.call(this, x);
      case 2:
        return _GT__EQ___2930.call(this, x, y);
      default:
        return _GT__EQ___2931.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___2931.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__2938 = function(x) {
    return x
  };
  var max__2939 = function(x, y) {
    return x > y ? x : y
  };
  var max__2940 = function() {
    var G__2942__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, max.call(null, x, y), more)
    };
    var G__2942 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2942__delegate.call(this, x, y, more)
    };
    G__2942.cljs$lang$maxFixedArity = 2;
    G__2942.cljs$lang$applyTo = function(arglist__2943) {
      var x = cljs.core.first(arglist__2943);
      var y = cljs.core.first(cljs.core.next(arglist__2943));
      var more = cljs.core.rest(cljs.core.next(arglist__2943));
      return G__2942__delegate.call(this, x, y, more)
    };
    return G__2942
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__2938.call(this, x);
      case 2:
        return max__2939.call(this, x, y);
      default:
        return max__2940.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__2940.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__2944 = function(x) {
    return x
  };
  var min__2945 = function(x, y) {
    return x < y ? x : y
  };
  var min__2946 = function() {
    var G__2948__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, min.call(null, x, y), more)
    };
    var G__2948 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2948__delegate.call(this, x, y, more)
    };
    G__2948.cljs$lang$maxFixedArity = 2;
    G__2948.cljs$lang$applyTo = function(arglist__2949) {
      var x = cljs.core.first(arglist__2949);
      var y = cljs.core.first(cljs.core.next(arglist__2949));
      var more = cljs.core.rest(cljs.core.next(arglist__2949));
      return G__2948__delegate.call(this, x, y, more)
    };
    return G__2948
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__2944.call(this, x);
      case 2:
        return min__2945.call(this, x, y);
      default:
        return min__2946.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__2946.cljs$lang$applyTo;
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
  var rem__2950 = n % d;
  return cljs.core.fix.call(null, (n - rem__2950) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__2951 = cljs.core.quot.call(null, n, d);
  return n - d * q__2951
};
cljs.core.rand = function() {
  var rand = null;
  var rand__2952 = function() {
    return Math.random.call(null)
  };
  var rand__2953 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__2952.call(this);
      case 1:
        return rand__2953.call(this, n)
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
  var _EQ__EQ___2955 = function(x) {
    return true
  };
  var _EQ__EQ___2956 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___2957 = function() {
    var G__2959__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2960 = y;
            var G__2961 = cljs.core.first.call(null, more);
            var G__2962 = cljs.core.next.call(null, more);
            x = G__2960;
            y = G__2961;
            more = G__2962;
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
    var G__2959 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2959__delegate.call(this, x, y, more)
    };
    G__2959.cljs$lang$maxFixedArity = 2;
    G__2959.cljs$lang$applyTo = function(arglist__2963) {
      var x = cljs.core.first(arglist__2963);
      var y = cljs.core.first(cljs.core.next(arglist__2963));
      var more = cljs.core.rest(cljs.core.next(arglist__2963));
      return G__2959__delegate.call(this, x, y, more)
    };
    return G__2959
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___2955.call(this, x);
      case 2:
        return _EQ__EQ___2956.call(this, x, y);
      default:
        return _EQ__EQ___2957.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2957.cljs$lang$applyTo;
  return _EQ__EQ_
}();
cljs.core.pos_QMARK_ = function pos_QMARK_(n) {
  return 0 < n
};
cljs.core.zero_QMARK_ = function zero_QMARK_(n) {
  return 0 === n
};
cljs.core.neg_QMARK_ = function neg_QMARK_(x) {
  return x < 0
};
cljs.core.nthnext = function nthnext(coll, n) {
  var n__2964 = n;
  var xs__2965 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2966 = xs__2965;
      if(cljs.core.truth_(and__3546__auto____2966)) {
        return n__2964 > 0
      }else {
        return and__3546__auto____2966
      }
    }())) {
      var G__2967 = n__2964 - 1;
      var G__2968 = cljs.core.next.call(null, xs__2965);
      n__2964 = G__2967;
      xs__2965 = G__2968;
      continue
    }else {
      return xs__2965
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__2973 = null;
  var G__2973__2974 = function(coll, n) {
    var temp__3695__auto____2969 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____2969)) {
      var xs__2970 = temp__3695__auto____2969;
      return cljs.core.first.call(null, xs__2970)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__2973__2975 = function(coll, n, not_found) {
    var temp__3695__auto____2971 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____2971)) {
      var xs__2972 = temp__3695__auto____2971;
      return cljs.core.first.call(null, xs__2972)
    }else {
      return not_found
    }
  };
  G__2973 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2973__2974.call(this, coll, n);
      case 3:
        return G__2973__2975.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2973
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___2977 = function() {
    return""
  };
  var str_STAR___2978 = function(x) {
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
  var str_STAR___2979 = function() {
    var G__2981__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__2982 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__2983 = cljs.core.next.call(null, more);
            sb = G__2982;
            more = G__2983;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__2981 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__2981__delegate.call(this, x, ys)
    };
    G__2981.cljs$lang$maxFixedArity = 1;
    G__2981.cljs$lang$applyTo = function(arglist__2984) {
      var x = cljs.core.first(arglist__2984);
      var ys = cljs.core.rest(arglist__2984);
      return G__2981__delegate.call(this, x, ys)
    };
    return G__2981
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___2977.call(this);
      case 1:
        return str_STAR___2978.call(this, x);
      default:
        return str_STAR___2979.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___2979.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__2985 = function() {
    return""
  };
  var str__2986 = function(x) {
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
  var str__2987 = function() {
    var G__2989__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__2989 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__2989__delegate.call(this, x, ys)
    };
    G__2989.cljs$lang$maxFixedArity = 1;
    G__2989.cljs$lang$applyTo = function(arglist__2990) {
      var x = cljs.core.first(arglist__2990);
      var ys = cljs.core.rest(arglist__2990);
      return G__2989__delegate.call(this, x, ys)
    };
    return G__2989
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__2985.call(this);
      case 1:
        return str__2986.call(this, x);
      default:
        return str__2987.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__2987.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__2991 = function(s, start) {
    return s.substring(start)
  };
  var subs__2992 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__2991.call(this, s, start);
      case 3:
        return subs__2992.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__2994 = function(name) {
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
  var symbol__2995 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__2994.call(this, ns);
      case 2:
        return symbol__2995.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__2997 = function(name) {
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
  var keyword__2998 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__2997.call(this, ns);
      case 2:
        return keyword__2998.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__3000 = cljs.core.seq.call(null, x);
    var ys__3001 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__3000))) {
        return cljs.core.nil_QMARK_.call(null, ys__3001)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__3001))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__3000), cljs.core.first.call(null, ys__3001)))) {
            var G__3002 = cljs.core.next.call(null, xs__3000);
            var G__3003 = cljs.core.next.call(null, ys__3001);
            xs__3000 = G__3002;
            ys__3001 = G__3003;
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
  return cljs.core.reduce.call(null, function(p1__3004_SHARP_, p2__3005_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__3004_SHARP_, cljs.core.hash.call(null, p2__3005_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__3006__3007 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__3006__3007)) {
    var G__3009__3011 = cljs.core.first.call(null, G__3006__3007);
    var vec__3010__3012 = G__3009__3011;
    var key_name__3013 = cljs.core.nth.call(null, vec__3010__3012, 0, null);
    var f__3014 = cljs.core.nth.call(null, vec__3010__3012, 1, null);
    var G__3006__3015 = G__3006__3007;
    var G__3009__3016 = G__3009__3011;
    var G__3006__3017 = G__3006__3015;
    while(true) {
      var vec__3018__3019 = G__3009__3016;
      var key_name__3020 = cljs.core.nth.call(null, vec__3018__3019, 0, null);
      var f__3021 = cljs.core.nth.call(null, vec__3018__3019, 1, null);
      var G__3006__3022 = G__3006__3017;
      var str_name__3023 = cljs.core.name.call(null, key_name__3020);
      obj[str_name__3023] = f__3021;
      var temp__3698__auto____3024 = cljs.core.next.call(null, G__3006__3022);
      if(cljs.core.truth_(temp__3698__auto____3024)) {
        var G__3006__3025 = temp__3698__auto____3024;
        var G__3026 = cljs.core.first.call(null, G__3006__3025);
        var G__3027 = G__3006__3025;
        G__3009__3016 = G__3026;
        G__3006__3017 = G__3027;
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
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3028 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3029 = this;
  return new cljs.core.List(this__3029.meta, o, coll, this__3029.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3030 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3031 = this;
  return this__3031.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3032 = this;
  return this__3032.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3033 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3034 = this;
  return this__3034.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3035 = this;
  return this__3035.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3036 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3037 = this;
  return new cljs.core.List(meta, this__3037.first, this__3037.rest, this__3037.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3038 = this;
  return this__3038.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3039 = this;
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3040 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3041 = this;
  return new cljs.core.List(this__3041.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3042 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3043 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3044 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3045 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3046 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3047 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3048 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3049 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3050 = this;
  return this__3050.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3051 = this;
  return coll
};
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
  list.cljs$lang$applyTo = function(arglist__3052) {
    var items = cljs.core.seq(arglist__3052);
    return list__delegate.call(this, items)
  };
  return list
}();
cljs.core.Cons = function(meta, first, rest) {
  this.meta = meta;
  this.first = first;
  this.rest = rest
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3053 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3054 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3055 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3056 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3056.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3057 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3058 = this;
  return this__3058.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3059 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__3059.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__3059.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3060 = this;
  return this__3060.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3061 = this;
  return new cljs.core.Cons(meta, this__3061.first, this__3061.rest)
};
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__3062 = null;
  var G__3062__3063 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__3062__3064 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__3062 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3062__3063.call(this, string, f);
      case 3:
        return G__3062__3064.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3062
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__3066 = null;
  var G__3066__3067 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__3066__3068 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__3066 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3066__3067.call(this, string, k);
      case 3:
        return G__3066__3068.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3066
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__3070 = null;
  var G__3070__3071 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__3070__3072 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__3070 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3070__3071.call(this, string, n);
      case 3:
        return G__3070__3072.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3070
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
String["prototype"]["call"] = function() {
  var G__3074 = null;
  var G__3074__3075 = function(_, coll) {
    return cljs.core.get.call(null, coll, this.toString())
  };
  var G__3074__3076 = function(_, coll, not_found) {
    return cljs.core.get.call(null, coll, this.toString(), not_found)
  };
  G__3074 = function(_, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3074__3075.call(this, _, coll);
      case 3:
        return G__3074__3076.call(this, _, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3074
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__3078 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__3078
  }else {
    lazy_seq.x = x__3078.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x) {
  this.meta = meta;
  this.realized = realized;
  this.x = x
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3079 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3080 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3081 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3082 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3082.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3083 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3084 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3085 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3086 = this;
  return this__3086.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3087 = this;
  return new cljs.core.LazySeq(meta, this__3087.realized, this__3087.x)
};
cljs.core.to_array = function to_array(s) {
  var ary__3088 = cljs.core.array.call(null);
  var s__3089 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__3089))) {
      ary__3088.push(cljs.core.first.call(null, s__3089));
      var G__3090 = cljs.core.next.call(null, s__3089);
      s__3089 = G__3090;
      continue
    }else {
      return ary__3088
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__3091 = s;
  var i__3092 = n;
  var sum__3093 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3094 = i__3092 > 0;
      if(cljs.core.truth_(and__3546__auto____3094)) {
        return cljs.core.seq.call(null, s__3091)
      }else {
        return and__3546__auto____3094
      }
    }())) {
      var G__3095 = cljs.core.next.call(null, s__3091);
      var G__3096 = i__3092 - 1;
      var G__3097 = sum__3093 + 1;
      s__3091 = G__3095;
      i__3092 = G__3096;
      sum__3093 = G__3097;
      continue
    }else {
      return sum__3093
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
  var concat__3101 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__3102 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__3103 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__3098 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__3098)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3098), concat.call(null, cljs.core.rest.call(null, s__3098), y))
      }else {
        return y
      }
    })
  };
  var concat__3104 = function() {
    var G__3106__delegate = function(x, y, zs) {
      var cat__3100 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__3099 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__3099)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__3099), cat.call(null, cljs.core.rest.call(null, xys__3099), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__3100.call(null, concat.call(null, x, y), zs)
    };
    var G__3106 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3106__delegate.call(this, x, y, zs)
    };
    G__3106.cljs$lang$maxFixedArity = 2;
    G__3106.cljs$lang$applyTo = function(arglist__3107) {
      var x = cljs.core.first(arglist__3107);
      var y = cljs.core.first(cljs.core.next(arglist__3107));
      var zs = cljs.core.rest(cljs.core.next(arglist__3107));
      return G__3106__delegate.call(this, x, y, zs)
    };
    return G__3106
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__3101.call(this);
      case 1:
        return concat__3102.call(this, x);
      case 2:
        return concat__3103.call(this, x, y);
      default:
        return concat__3104.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__3104.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___3108 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___3109 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___3110 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___3111 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___3112 = function() {
    var G__3114__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__3114 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3114__delegate.call(this, a, b, c, d, more)
    };
    G__3114.cljs$lang$maxFixedArity = 4;
    G__3114.cljs$lang$applyTo = function(arglist__3115) {
      var a = cljs.core.first(arglist__3115);
      var b = cljs.core.first(cljs.core.next(arglist__3115));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3115)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3115))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3115))));
      return G__3114__delegate.call(this, a, b, c, d, more)
    };
    return G__3114
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___3108.call(this, a);
      case 2:
        return list_STAR___3109.call(this, a, b);
      case 3:
        return list_STAR___3110.call(this, a, b, c);
      case 4:
        return list_STAR___3111.call(this, a, b, c, d);
      default:
        return list_STAR___3112.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___3112.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__3125 = function(f, args) {
    var fixed_arity__3116 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__3116 + 1) <= fixed_arity__3116)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__3126 = function(f, x, args) {
    var arglist__3117 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__3118 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3117, fixed_arity__3118) <= fixed_arity__3118)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3117))
      }else {
        return f.cljs$lang$applyTo(arglist__3117)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3117))
    }
  };
  var apply__3127 = function(f, x, y, args) {
    var arglist__3119 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__3120 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3119, fixed_arity__3120) <= fixed_arity__3120)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3119))
      }else {
        return f.cljs$lang$applyTo(arglist__3119)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3119))
    }
  };
  var apply__3128 = function(f, x, y, z, args) {
    var arglist__3121 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__3122 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3121, fixed_arity__3122) <= fixed_arity__3122)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3121))
      }else {
        return f.cljs$lang$applyTo(arglist__3121)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3121))
    }
  };
  var apply__3129 = function() {
    var G__3131__delegate = function(f, a, b, c, d, args) {
      var arglist__3123 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__3124 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3123, fixed_arity__3124) <= fixed_arity__3124)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__3123))
        }else {
          return f.cljs$lang$applyTo(arglist__3123)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3123))
      }
    };
    var G__3131 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__3131__delegate.call(this, f, a, b, c, d, args)
    };
    G__3131.cljs$lang$maxFixedArity = 5;
    G__3131.cljs$lang$applyTo = function(arglist__3132) {
      var f = cljs.core.first(arglist__3132);
      var a = cljs.core.first(cljs.core.next(arglist__3132));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3132)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3132))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3132)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3132)))));
      return G__3131__delegate.call(this, f, a, b, c, d, args)
    };
    return G__3131
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__3125.call(this, f, a);
      case 3:
        return apply__3126.call(this, f, a, b);
      case 4:
        return apply__3127.call(this, f, a, b, c);
      case 5:
        return apply__3128.call(this, f, a, b, c, d);
      default:
        return apply__3129.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__3129.cljs$lang$applyTo;
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
  vary_meta.cljs$lang$applyTo = function(arglist__3133) {
    var obj = cljs.core.first(arglist__3133);
    var f = cljs.core.first(cljs.core.next(arglist__3133));
    var args = cljs.core.rest(cljs.core.next(arglist__3133));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___3134 = function(x) {
    return false
  };
  var not_EQ___3135 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___3136 = function() {
    var G__3138__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__3138 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3138__delegate.call(this, x, y, more)
    };
    G__3138.cljs$lang$maxFixedArity = 2;
    G__3138.cljs$lang$applyTo = function(arglist__3139) {
      var x = cljs.core.first(arglist__3139);
      var y = cljs.core.first(cljs.core.next(arglist__3139));
      var more = cljs.core.rest(cljs.core.next(arglist__3139));
      return G__3138__delegate.call(this, x, y, more)
    };
    return G__3138
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___3134.call(this, x);
      case 2:
        return not_EQ___3135.call(this, x, y);
      default:
        return not_EQ___3136.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___3136.cljs$lang$applyTo;
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
        var G__3140 = pred;
        var G__3141 = cljs.core.next.call(null, coll);
        pred = G__3140;
        coll = G__3141;
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
      var or__3548__auto____3142 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____3142)) {
        return or__3548__auto____3142
      }else {
        var G__3143 = pred;
        var G__3144 = cljs.core.next.call(null, coll);
        pred = G__3143;
        coll = G__3144;
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
    var G__3145 = null;
    var G__3145__3146 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__3145__3147 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__3145__3148 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__3145__3149 = function() {
      var G__3151__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__3151 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__3151__delegate.call(this, x, y, zs)
      };
      G__3151.cljs$lang$maxFixedArity = 2;
      G__3151.cljs$lang$applyTo = function(arglist__3152) {
        var x = cljs.core.first(arglist__3152);
        var y = cljs.core.first(cljs.core.next(arglist__3152));
        var zs = cljs.core.rest(cljs.core.next(arglist__3152));
        return G__3151__delegate.call(this, x, y, zs)
      };
      return G__3151
    }();
    G__3145 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__3145__3146.call(this);
        case 1:
          return G__3145__3147.call(this, x);
        case 2:
          return G__3145__3148.call(this, x, y);
        default:
          return G__3145__3149.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__3145.cljs$lang$maxFixedArity = 2;
    G__3145.cljs$lang$applyTo = G__3145__3149.cljs$lang$applyTo;
    return G__3145
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__3153__delegate = function(args) {
      return x
    };
    var G__3153 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__3153__delegate.call(this, args)
    };
    G__3153.cljs$lang$maxFixedArity = 0;
    G__3153.cljs$lang$applyTo = function(arglist__3154) {
      var args = cljs.core.seq(arglist__3154);
      return G__3153__delegate.call(this, args)
    };
    return G__3153
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__3158 = function() {
    return cljs.core.identity
  };
  var comp__3159 = function(f) {
    return f
  };
  var comp__3160 = function(f, g) {
    return function() {
      var G__3164 = null;
      var G__3164__3165 = function() {
        return f.call(null, g.call(null))
      };
      var G__3164__3166 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__3164__3167 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__3164__3168 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__3164__3169 = function() {
        var G__3171__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__3171 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3171__delegate.call(this, x, y, z, args)
        };
        G__3171.cljs$lang$maxFixedArity = 3;
        G__3171.cljs$lang$applyTo = function(arglist__3172) {
          var x = cljs.core.first(arglist__3172);
          var y = cljs.core.first(cljs.core.next(arglist__3172));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3172)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3172)));
          return G__3171__delegate.call(this, x, y, z, args)
        };
        return G__3171
      }();
      G__3164 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3164__3165.call(this);
          case 1:
            return G__3164__3166.call(this, x);
          case 2:
            return G__3164__3167.call(this, x, y);
          case 3:
            return G__3164__3168.call(this, x, y, z);
          default:
            return G__3164__3169.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3164.cljs$lang$maxFixedArity = 3;
      G__3164.cljs$lang$applyTo = G__3164__3169.cljs$lang$applyTo;
      return G__3164
    }()
  };
  var comp__3161 = function(f, g, h) {
    return function() {
      var G__3173 = null;
      var G__3173__3174 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__3173__3175 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__3173__3176 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__3173__3177 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__3173__3178 = function() {
        var G__3180__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__3180 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3180__delegate.call(this, x, y, z, args)
        };
        G__3180.cljs$lang$maxFixedArity = 3;
        G__3180.cljs$lang$applyTo = function(arglist__3181) {
          var x = cljs.core.first(arglist__3181);
          var y = cljs.core.first(cljs.core.next(arglist__3181));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3181)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3181)));
          return G__3180__delegate.call(this, x, y, z, args)
        };
        return G__3180
      }();
      G__3173 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3173__3174.call(this);
          case 1:
            return G__3173__3175.call(this, x);
          case 2:
            return G__3173__3176.call(this, x, y);
          case 3:
            return G__3173__3177.call(this, x, y, z);
          default:
            return G__3173__3178.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3173.cljs$lang$maxFixedArity = 3;
      G__3173.cljs$lang$applyTo = G__3173__3178.cljs$lang$applyTo;
      return G__3173
    }()
  };
  var comp__3162 = function() {
    var G__3182__delegate = function(f1, f2, f3, fs) {
      var fs__3155 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__3183__delegate = function(args) {
          var ret__3156 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__3155), args);
          var fs__3157 = cljs.core.next.call(null, fs__3155);
          while(true) {
            if(cljs.core.truth_(fs__3157)) {
              var G__3184 = cljs.core.first.call(null, fs__3157).call(null, ret__3156);
              var G__3185 = cljs.core.next.call(null, fs__3157);
              ret__3156 = G__3184;
              fs__3157 = G__3185;
              continue
            }else {
              return ret__3156
            }
            break
          }
        };
        var G__3183 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__3183__delegate.call(this, args)
        };
        G__3183.cljs$lang$maxFixedArity = 0;
        G__3183.cljs$lang$applyTo = function(arglist__3186) {
          var args = cljs.core.seq(arglist__3186);
          return G__3183__delegate.call(this, args)
        };
        return G__3183
      }()
    };
    var G__3182 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3182__delegate.call(this, f1, f2, f3, fs)
    };
    G__3182.cljs$lang$maxFixedArity = 3;
    G__3182.cljs$lang$applyTo = function(arglist__3187) {
      var f1 = cljs.core.first(arglist__3187);
      var f2 = cljs.core.first(cljs.core.next(arglist__3187));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3187)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3187)));
      return G__3182__delegate.call(this, f1, f2, f3, fs)
    };
    return G__3182
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__3158.call(this);
      case 1:
        return comp__3159.call(this, f1);
      case 2:
        return comp__3160.call(this, f1, f2);
      case 3:
        return comp__3161.call(this, f1, f2, f3);
      default:
        return comp__3162.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__3162.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__3188 = function(f, arg1) {
    return function() {
      var G__3193__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__3193 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3193__delegate.call(this, args)
      };
      G__3193.cljs$lang$maxFixedArity = 0;
      G__3193.cljs$lang$applyTo = function(arglist__3194) {
        var args = cljs.core.seq(arglist__3194);
        return G__3193__delegate.call(this, args)
      };
      return G__3193
    }()
  };
  var partial__3189 = function(f, arg1, arg2) {
    return function() {
      var G__3195__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__3195 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3195__delegate.call(this, args)
      };
      G__3195.cljs$lang$maxFixedArity = 0;
      G__3195.cljs$lang$applyTo = function(arglist__3196) {
        var args = cljs.core.seq(arglist__3196);
        return G__3195__delegate.call(this, args)
      };
      return G__3195
    }()
  };
  var partial__3190 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__3197__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__3197 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3197__delegate.call(this, args)
      };
      G__3197.cljs$lang$maxFixedArity = 0;
      G__3197.cljs$lang$applyTo = function(arglist__3198) {
        var args = cljs.core.seq(arglist__3198);
        return G__3197__delegate.call(this, args)
      };
      return G__3197
    }()
  };
  var partial__3191 = function() {
    var G__3199__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__3200__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__3200 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__3200__delegate.call(this, args)
        };
        G__3200.cljs$lang$maxFixedArity = 0;
        G__3200.cljs$lang$applyTo = function(arglist__3201) {
          var args = cljs.core.seq(arglist__3201);
          return G__3200__delegate.call(this, args)
        };
        return G__3200
      }()
    };
    var G__3199 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3199__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__3199.cljs$lang$maxFixedArity = 4;
    G__3199.cljs$lang$applyTo = function(arglist__3202) {
      var f = cljs.core.first(arglist__3202);
      var arg1 = cljs.core.first(cljs.core.next(arglist__3202));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3202)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3202))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3202))));
      return G__3199__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__3199
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__3188.call(this, f, arg1);
      case 3:
        return partial__3189.call(this, f, arg1, arg2);
      case 4:
        return partial__3190.call(this, f, arg1, arg2, arg3);
      default:
        return partial__3191.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__3191.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__3203 = function(f, x) {
    return function() {
      var G__3207 = null;
      var G__3207__3208 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__3207__3209 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__3207__3210 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__3207__3211 = function() {
        var G__3213__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__3213 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3213__delegate.call(this, a, b, c, ds)
        };
        G__3213.cljs$lang$maxFixedArity = 3;
        G__3213.cljs$lang$applyTo = function(arglist__3214) {
          var a = cljs.core.first(arglist__3214);
          var b = cljs.core.first(cljs.core.next(arglist__3214));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3214)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3214)));
          return G__3213__delegate.call(this, a, b, c, ds)
        };
        return G__3213
      }();
      G__3207 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__3207__3208.call(this, a);
          case 2:
            return G__3207__3209.call(this, a, b);
          case 3:
            return G__3207__3210.call(this, a, b, c);
          default:
            return G__3207__3211.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3207.cljs$lang$maxFixedArity = 3;
      G__3207.cljs$lang$applyTo = G__3207__3211.cljs$lang$applyTo;
      return G__3207
    }()
  };
  var fnil__3204 = function(f, x, y) {
    return function() {
      var G__3215 = null;
      var G__3215__3216 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__3215__3217 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__3215__3218 = function() {
        var G__3220__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__3220 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3220__delegate.call(this, a, b, c, ds)
        };
        G__3220.cljs$lang$maxFixedArity = 3;
        G__3220.cljs$lang$applyTo = function(arglist__3221) {
          var a = cljs.core.first(arglist__3221);
          var b = cljs.core.first(cljs.core.next(arglist__3221));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3221)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3221)));
          return G__3220__delegate.call(this, a, b, c, ds)
        };
        return G__3220
      }();
      G__3215 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__3215__3216.call(this, a, b);
          case 3:
            return G__3215__3217.call(this, a, b, c);
          default:
            return G__3215__3218.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3215.cljs$lang$maxFixedArity = 3;
      G__3215.cljs$lang$applyTo = G__3215__3218.cljs$lang$applyTo;
      return G__3215
    }()
  };
  var fnil__3205 = function(f, x, y, z) {
    return function() {
      var G__3222 = null;
      var G__3222__3223 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__3222__3224 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__3222__3225 = function() {
        var G__3227__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__3227 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3227__delegate.call(this, a, b, c, ds)
        };
        G__3227.cljs$lang$maxFixedArity = 3;
        G__3227.cljs$lang$applyTo = function(arglist__3228) {
          var a = cljs.core.first(arglist__3228);
          var b = cljs.core.first(cljs.core.next(arglist__3228));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3228)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3228)));
          return G__3227__delegate.call(this, a, b, c, ds)
        };
        return G__3227
      }();
      G__3222 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__3222__3223.call(this, a, b);
          case 3:
            return G__3222__3224.call(this, a, b, c);
          default:
            return G__3222__3225.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3222.cljs$lang$maxFixedArity = 3;
      G__3222.cljs$lang$applyTo = G__3222__3225.cljs$lang$applyTo;
      return G__3222
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__3203.call(this, f, x);
      case 3:
        return fnil__3204.call(this, f, x, y);
      case 4:
        return fnil__3205.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__3231 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3229 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3229)) {
        var s__3230 = temp__3698__auto____3229;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__3230)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__3230)))
      }else {
        return null
      }
    })
  };
  return mapi__3231.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3232 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3232)) {
      var s__3233 = temp__3698__auto____3232;
      var x__3234 = f.call(null, cljs.core.first.call(null, s__3233));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__3234))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__3233))
      }else {
        return cljs.core.cons.call(null, x__3234, keep.call(null, f, cljs.core.rest.call(null, s__3233)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__3244 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3241 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3241)) {
        var s__3242 = temp__3698__auto____3241;
        var x__3243 = f.call(null, idx, cljs.core.first.call(null, s__3242));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__3243))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__3242))
        }else {
          return cljs.core.cons.call(null, x__3243, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__3242)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__3244.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__3289 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__3294 = function() {
        return true
      };
      var ep1__3295 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__3296 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3251 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3251)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____3251
          }
        }())
      };
      var ep1__3297 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3252 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3252)) {
            var and__3546__auto____3253 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3253)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____3253
            }
          }else {
            return and__3546__auto____3252
          }
        }())
      };
      var ep1__3298 = function() {
        var G__3300__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3254 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3254)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____3254
            }
          }())
        };
        var G__3300 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3300__delegate.call(this, x, y, z, args)
        };
        G__3300.cljs$lang$maxFixedArity = 3;
        G__3300.cljs$lang$applyTo = function(arglist__3301) {
          var x = cljs.core.first(arglist__3301);
          var y = cljs.core.first(cljs.core.next(arglist__3301));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3301)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3301)));
          return G__3300__delegate.call(this, x, y, z, args)
        };
        return G__3300
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__3294.call(this);
          case 1:
            return ep1__3295.call(this, x);
          case 2:
            return ep1__3296.call(this, x, y);
          case 3:
            return ep1__3297.call(this, x, y, z);
          default:
            return ep1__3298.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__3298.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__3290 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__3302 = function() {
        return true
      };
      var ep2__3303 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3255 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3255)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____3255
          }
        }())
      };
      var ep2__3304 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3256 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3256)) {
            var and__3546__auto____3257 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3257)) {
              var and__3546__auto____3258 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3258)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____3258
              }
            }else {
              return and__3546__auto____3257
            }
          }else {
            return and__3546__auto____3256
          }
        }())
      };
      var ep2__3305 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3259 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3259)) {
            var and__3546__auto____3260 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3260)) {
              var and__3546__auto____3261 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____3261)) {
                var and__3546__auto____3262 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____3262)) {
                  var and__3546__auto____3263 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3263)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____3263
                  }
                }else {
                  return and__3546__auto____3262
                }
              }else {
                return and__3546__auto____3261
              }
            }else {
              return and__3546__auto____3260
            }
          }else {
            return and__3546__auto____3259
          }
        }())
      };
      var ep2__3306 = function() {
        var G__3308__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3264 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3264)) {
              return cljs.core.every_QMARK_.call(null, function(p1__3235_SHARP_) {
                var and__3546__auto____3265 = p1.call(null, p1__3235_SHARP_);
                if(cljs.core.truth_(and__3546__auto____3265)) {
                  return p2.call(null, p1__3235_SHARP_)
                }else {
                  return and__3546__auto____3265
                }
              }, args)
            }else {
              return and__3546__auto____3264
            }
          }())
        };
        var G__3308 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3308__delegate.call(this, x, y, z, args)
        };
        G__3308.cljs$lang$maxFixedArity = 3;
        G__3308.cljs$lang$applyTo = function(arglist__3309) {
          var x = cljs.core.first(arglist__3309);
          var y = cljs.core.first(cljs.core.next(arglist__3309));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3309)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3309)));
          return G__3308__delegate.call(this, x, y, z, args)
        };
        return G__3308
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__3302.call(this);
          case 1:
            return ep2__3303.call(this, x);
          case 2:
            return ep2__3304.call(this, x, y);
          case 3:
            return ep2__3305.call(this, x, y, z);
          default:
            return ep2__3306.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__3306.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__3291 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__3310 = function() {
        return true
      };
      var ep3__3311 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3266 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3266)) {
            var and__3546__auto____3267 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3267)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____3267
            }
          }else {
            return and__3546__auto____3266
          }
        }())
      };
      var ep3__3312 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3268 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3268)) {
            var and__3546__auto____3269 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3269)) {
              var and__3546__auto____3270 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3270)) {
                var and__3546__auto____3271 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____3271)) {
                  var and__3546__auto____3272 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3272)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____3272
                  }
                }else {
                  return and__3546__auto____3271
                }
              }else {
                return and__3546__auto____3270
              }
            }else {
              return and__3546__auto____3269
            }
          }else {
            return and__3546__auto____3268
          }
        }())
      };
      var ep3__3313 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3273 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3273)) {
            var and__3546__auto____3274 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3274)) {
              var and__3546__auto____3275 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3275)) {
                var and__3546__auto____3276 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____3276)) {
                  var and__3546__auto____3277 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3277)) {
                    var and__3546__auto____3278 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____3278)) {
                      var and__3546__auto____3279 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____3279)) {
                        var and__3546__auto____3280 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____3280)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____3280
                        }
                      }else {
                        return and__3546__auto____3279
                      }
                    }else {
                      return and__3546__auto____3278
                    }
                  }else {
                    return and__3546__auto____3277
                  }
                }else {
                  return and__3546__auto____3276
                }
              }else {
                return and__3546__auto____3275
              }
            }else {
              return and__3546__auto____3274
            }
          }else {
            return and__3546__auto____3273
          }
        }())
      };
      var ep3__3314 = function() {
        var G__3316__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3281 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3281)) {
              return cljs.core.every_QMARK_.call(null, function(p1__3236_SHARP_) {
                var and__3546__auto____3282 = p1.call(null, p1__3236_SHARP_);
                if(cljs.core.truth_(and__3546__auto____3282)) {
                  var and__3546__auto____3283 = p2.call(null, p1__3236_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____3283)) {
                    return p3.call(null, p1__3236_SHARP_)
                  }else {
                    return and__3546__auto____3283
                  }
                }else {
                  return and__3546__auto____3282
                }
              }, args)
            }else {
              return and__3546__auto____3281
            }
          }())
        };
        var G__3316 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3316__delegate.call(this, x, y, z, args)
        };
        G__3316.cljs$lang$maxFixedArity = 3;
        G__3316.cljs$lang$applyTo = function(arglist__3317) {
          var x = cljs.core.first(arglist__3317);
          var y = cljs.core.first(cljs.core.next(arglist__3317));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3317)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3317)));
          return G__3316__delegate.call(this, x, y, z, args)
        };
        return G__3316
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__3310.call(this);
          case 1:
            return ep3__3311.call(this, x);
          case 2:
            return ep3__3312.call(this, x, y);
          case 3:
            return ep3__3313.call(this, x, y, z);
          default:
            return ep3__3314.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__3314.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__3292 = function() {
    var G__3318__delegate = function(p1, p2, p3, ps) {
      var ps__3284 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__3319 = function() {
          return true
        };
        var epn__3320 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__3237_SHARP_) {
            return p1__3237_SHARP_.call(null, x)
          }, ps__3284)
        };
        var epn__3321 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__3238_SHARP_) {
            var and__3546__auto____3285 = p1__3238_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3285)) {
              return p1__3238_SHARP_.call(null, y)
            }else {
              return and__3546__auto____3285
            }
          }, ps__3284)
        };
        var epn__3322 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__3239_SHARP_) {
            var and__3546__auto____3286 = p1__3239_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3286)) {
              var and__3546__auto____3287 = p1__3239_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____3287)) {
                return p1__3239_SHARP_.call(null, z)
              }else {
                return and__3546__auto____3287
              }
            }else {
              return and__3546__auto____3286
            }
          }, ps__3284)
        };
        var epn__3323 = function() {
          var G__3325__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____3288 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____3288)) {
                return cljs.core.every_QMARK_.call(null, function(p1__3240_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__3240_SHARP_, args)
                }, ps__3284)
              }else {
                return and__3546__auto____3288
              }
            }())
          };
          var G__3325 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3325__delegate.call(this, x, y, z, args)
          };
          G__3325.cljs$lang$maxFixedArity = 3;
          G__3325.cljs$lang$applyTo = function(arglist__3326) {
            var x = cljs.core.first(arglist__3326);
            var y = cljs.core.first(cljs.core.next(arglist__3326));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3326)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3326)));
            return G__3325__delegate.call(this, x, y, z, args)
          };
          return G__3325
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__3319.call(this);
            case 1:
              return epn__3320.call(this, x);
            case 2:
              return epn__3321.call(this, x, y);
            case 3:
              return epn__3322.call(this, x, y, z);
            default:
              return epn__3323.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__3323.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__3318 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3318__delegate.call(this, p1, p2, p3, ps)
    };
    G__3318.cljs$lang$maxFixedArity = 3;
    G__3318.cljs$lang$applyTo = function(arglist__3327) {
      var p1 = cljs.core.first(arglist__3327);
      var p2 = cljs.core.first(cljs.core.next(arglist__3327));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3327)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3327)));
      return G__3318__delegate.call(this, p1, p2, p3, ps)
    };
    return G__3318
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__3289.call(this, p1);
      case 2:
        return every_pred__3290.call(this, p1, p2);
      case 3:
        return every_pred__3291.call(this, p1, p2, p3);
      default:
        return every_pred__3292.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__3292.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__3367 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__3372 = function() {
        return null
      };
      var sp1__3373 = function(x) {
        return p.call(null, x)
      };
      var sp1__3374 = function(x, y) {
        var or__3548__auto____3329 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3329)) {
          return or__3548__auto____3329
        }else {
          return p.call(null, y)
        }
      };
      var sp1__3375 = function(x, y, z) {
        var or__3548__auto____3330 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3330)) {
          return or__3548__auto____3330
        }else {
          var or__3548__auto____3331 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3331)) {
            return or__3548__auto____3331
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__3376 = function() {
        var G__3378__delegate = function(x, y, z, args) {
          var or__3548__auto____3332 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3332)) {
            return or__3548__auto____3332
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__3378 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3378__delegate.call(this, x, y, z, args)
        };
        G__3378.cljs$lang$maxFixedArity = 3;
        G__3378.cljs$lang$applyTo = function(arglist__3379) {
          var x = cljs.core.first(arglist__3379);
          var y = cljs.core.first(cljs.core.next(arglist__3379));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3379)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3379)));
          return G__3378__delegate.call(this, x, y, z, args)
        };
        return G__3378
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__3372.call(this);
          case 1:
            return sp1__3373.call(this, x);
          case 2:
            return sp1__3374.call(this, x, y);
          case 3:
            return sp1__3375.call(this, x, y, z);
          default:
            return sp1__3376.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__3376.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__3368 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__3380 = function() {
        return null
      };
      var sp2__3381 = function(x) {
        var or__3548__auto____3333 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3333)) {
          return or__3548__auto____3333
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__3382 = function(x, y) {
        var or__3548__auto____3334 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3334)) {
          return or__3548__auto____3334
        }else {
          var or__3548__auto____3335 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3335)) {
            return or__3548__auto____3335
          }else {
            var or__3548__auto____3336 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3336)) {
              return or__3548__auto____3336
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__3383 = function(x, y, z) {
        var or__3548__auto____3337 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3337)) {
          return or__3548__auto____3337
        }else {
          var or__3548__auto____3338 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3338)) {
            return or__3548__auto____3338
          }else {
            var or__3548__auto____3339 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____3339)) {
              return or__3548__auto____3339
            }else {
              var or__3548__auto____3340 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____3340)) {
                return or__3548__auto____3340
              }else {
                var or__3548__auto____3341 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3341)) {
                  return or__3548__auto____3341
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__3384 = function() {
        var G__3386__delegate = function(x, y, z, args) {
          var or__3548__auto____3342 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3342)) {
            return or__3548__auto____3342
          }else {
            return cljs.core.some.call(null, function(p1__3245_SHARP_) {
              var or__3548__auto____3343 = p1.call(null, p1__3245_SHARP_);
              if(cljs.core.truth_(or__3548__auto____3343)) {
                return or__3548__auto____3343
              }else {
                return p2.call(null, p1__3245_SHARP_)
              }
            }, args)
          }
        };
        var G__3386 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3386__delegate.call(this, x, y, z, args)
        };
        G__3386.cljs$lang$maxFixedArity = 3;
        G__3386.cljs$lang$applyTo = function(arglist__3387) {
          var x = cljs.core.first(arglist__3387);
          var y = cljs.core.first(cljs.core.next(arglist__3387));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3387)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3387)));
          return G__3386__delegate.call(this, x, y, z, args)
        };
        return G__3386
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__3380.call(this);
          case 1:
            return sp2__3381.call(this, x);
          case 2:
            return sp2__3382.call(this, x, y);
          case 3:
            return sp2__3383.call(this, x, y, z);
          default:
            return sp2__3384.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__3384.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__3369 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__3388 = function() {
        return null
      };
      var sp3__3389 = function(x) {
        var or__3548__auto____3344 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3344)) {
          return or__3548__auto____3344
        }else {
          var or__3548__auto____3345 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3345)) {
            return or__3548__auto____3345
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__3390 = function(x, y) {
        var or__3548__auto____3346 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3346)) {
          return or__3548__auto____3346
        }else {
          var or__3548__auto____3347 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3347)) {
            return or__3548__auto____3347
          }else {
            var or__3548__auto____3348 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3348)) {
              return or__3548__auto____3348
            }else {
              var or__3548__auto____3349 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3349)) {
                return or__3548__auto____3349
              }else {
                var or__3548__auto____3350 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3350)) {
                  return or__3548__auto____3350
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__3391 = function(x, y, z) {
        var or__3548__auto____3351 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3351)) {
          return or__3548__auto____3351
        }else {
          var or__3548__auto____3352 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3352)) {
            return or__3548__auto____3352
          }else {
            var or__3548__auto____3353 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3353)) {
              return or__3548__auto____3353
            }else {
              var or__3548__auto____3354 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3354)) {
                return or__3548__auto____3354
              }else {
                var or__3548__auto____3355 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3355)) {
                  return or__3548__auto____3355
                }else {
                  var or__3548__auto____3356 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____3356)) {
                    return or__3548__auto____3356
                  }else {
                    var or__3548__auto____3357 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____3357)) {
                      return or__3548__auto____3357
                    }else {
                      var or__3548__auto____3358 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____3358)) {
                        return or__3548__auto____3358
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
      var sp3__3392 = function() {
        var G__3394__delegate = function(x, y, z, args) {
          var or__3548__auto____3359 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3359)) {
            return or__3548__auto____3359
          }else {
            return cljs.core.some.call(null, function(p1__3246_SHARP_) {
              var or__3548__auto____3360 = p1.call(null, p1__3246_SHARP_);
              if(cljs.core.truth_(or__3548__auto____3360)) {
                return or__3548__auto____3360
              }else {
                var or__3548__auto____3361 = p2.call(null, p1__3246_SHARP_);
                if(cljs.core.truth_(or__3548__auto____3361)) {
                  return or__3548__auto____3361
                }else {
                  return p3.call(null, p1__3246_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__3394 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3394__delegate.call(this, x, y, z, args)
        };
        G__3394.cljs$lang$maxFixedArity = 3;
        G__3394.cljs$lang$applyTo = function(arglist__3395) {
          var x = cljs.core.first(arglist__3395);
          var y = cljs.core.first(cljs.core.next(arglist__3395));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3395)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3395)));
          return G__3394__delegate.call(this, x, y, z, args)
        };
        return G__3394
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__3388.call(this);
          case 1:
            return sp3__3389.call(this, x);
          case 2:
            return sp3__3390.call(this, x, y);
          case 3:
            return sp3__3391.call(this, x, y, z);
          default:
            return sp3__3392.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__3392.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__3370 = function() {
    var G__3396__delegate = function(p1, p2, p3, ps) {
      var ps__3362 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__3397 = function() {
          return null
        };
        var spn__3398 = function(x) {
          return cljs.core.some.call(null, function(p1__3247_SHARP_) {
            return p1__3247_SHARP_.call(null, x)
          }, ps__3362)
        };
        var spn__3399 = function(x, y) {
          return cljs.core.some.call(null, function(p1__3248_SHARP_) {
            var or__3548__auto____3363 = p1__3248_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3363)) {
              return or__3548__auto____3363
            }else {
              return p1__3248_SHARP_.call(null, y)
            }
          }, ps__3362)
        };
        var spn__3400 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__3249_SHARP_) {
            var or__3548__auto____3364 = p1__3249_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3364)) {
              return or__3548__auto____3364
            }else {
              var or__3548__auto____3365 = p1__3249_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3365)) {
                return or__3548__auto____3365
              }else {
                return p1__3249_SHARP_.call(null, z)
              }
            }
          }, ps__3362)
        };
        var spn__3401 = function() {
          var G__3403__delegate = function(x, y, z, args) {
            var or__3548__auto____3366 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____3366)) {
              return or__3548__auto____3366
            }else {
              return cljs.core.some.call(null, function(p1__3250_SHARP_) {
                return cljs.core.some.call(null, p1__3250_SHARP_, args)
              }, ps__3362)
            }
          };
          var G__3403 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3403__delegate.call(this, x, y, z, args)
          };
          G__3403.cljs$lang$maxFixedArity = 3;
          G__3403.cljs$lang$applyTo = function(arglist__3404) {
            var x = cljs.core.first(arglist__3404);
            var y = cljs.core.first(cljs.core.next(arglist__3404));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3404)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3404)));
            return G__3403__delegate.call(this, x, y, z, args)
          };
          return G__3403
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__3397.call(this);
            case 1:
              return spn__3398.call(this, x);
            case 2:
              return spn__3399.call(this, x, y);
            case 3:
              return spn__3400.call(this, x, y, z);
            default:
              return spn__3401.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__3401.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__3396 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3396__delegate.call(this, p1, p2, p3, ps)
    };
    G__3396.cljs$lang$maxFixedArity = 3;
    G__3396.cljs$lang$applyTo = function(arglist__3405) {
      var p1 = cljs.core.first(arglist__3405);
      var p2 = cljs.core.first(cljs.core.next(arglist__3405));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3405)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3405)));
      return G__3396__delegate.call(this, p1, p2, p3, ps)
    };
    return G__3396
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__3367.call(this, p1);
      case 2:
        return some_fn__3368.call(this, p1, p2);
      case 3:
        return some_fn__3369.call(this, p1, p2, p3);
      default:
        return some_fn__3370.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__3370.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__3418 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3406 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3406)) {
        var s__3407 = temp__3698__auto____3406;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__3407)), map.call(null, f, cljs.core.rest.call(null, s__3407)))
      }else {
        return null
      }
    })
  };
  var map__3419 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3408 = cljs.core.seq.call(null, c1);
      var s2__3409 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3410 = s1__3408;
        if(cljs.core.truth_(and__3546__auto____3410)) {
          return s2__3409
        }else {
          return and__3546__auto____3410
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__3408), cljs.core.first.call(null, s2__3409)), map.call(null, f, cljs.core.rest.call(null, s1__3408), cljs.core.rest.call(null, s2__3409)))
      }else {
        return null
      }
    })
  };
  var map__3420 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3411 = cljs.core.seq.call(null, c1);
      var s2__3412 = cljs.core.seq.call(null, c2);
      var s3__3413 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3414 = s1__3411;
        if(cljs.core.truth_(and__3546__auto____3414)) {
          var and__3546__auto____3415 = s2__3412;
          if(cljs.core.truth_(and__3546__auto____3415)) {
            return s3__3413
          }else {
            return and__3546__auto____3415
          }
        }else {
          return and__3546__auto____3414
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__3411), cljs.core.first.call(null, s2__3412), cljs.core.first.call(null, s3__3413)), map.call(null, f, cljs.core.rest.call(null, s1__3411), cljs.core.rest.call(null, s2__3412), cljs.core.rest.call(null, s3__3413)))
      }else {
        return null
      }
    })
  };
  var map__3421 = function() {
    var G__3423__delegate = function(f, c1, c2, c3, colls) {
      var step__3417 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__3416 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__3416))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__3416), step.call(null, map.call(null, cljs.core.rest, ss__3416)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__3328_SHARP_) {
        return cljs.core.apply.call(null, f, p1__3328_SHARP_)
      }, step__3417.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__3423 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3423__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__3423.cljs$lang$maxFixedArity = 4;
    G__3423.cljs$lang$applyTo = function(arglist__3424) {
      var f = cljs.core.first(arglist__3424);
      var c1 = cljs.core.first(cljs.core.next(arglist__3424));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3424)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3424))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3424))));
      return G__3423__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__3423
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__3418.call(this, f, c1);
      case 3:
        return map__3419.call(this, f, c1, c2);
      case 4:
        return map__3420.call(this, f, c1, c2, c3);
      default:
        return map__3421.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__3421.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____3425 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3425)) {
        var s__3426 = temp__3698__auto____3425;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3426), take.call(null, n - 1, cljs.core.rest.call(null, s__3426)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__3429 = function(n, coll) {
    while(true) {
      var s__3427 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3428 = n > 0;
        if(cljs.core.truth_(and__3546__auto____3428)) {
          return s__3427
        }else {
          return and__3546__auto____3428
        }
      }())) {
        var G__3430 = n - 1;
        var G__3431 = cljs.core.rest.call(null, s__3427);
        n = G__3430;
        coll = G__3431;
        continue
      }else {
        return s__3427
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__3429.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__3432 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__3433 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__3432.call(this, n);
      case 2:
        return drop_last__3433.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__3435 = cljs.core.seq.call(null, coll);
  var lead__3436 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__3436)) {
      var G__3437 = cljs.core.next.call(null, s__3435);
      var G__3438 = cljs.core.next.call(null, lead__3436);
      s__3435 = G__3437;
      lead__3436 = G__3438;
      continue
    }else {
      return s__3435
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__3441 = function(pred, coll) {
    while(true) {
      var s__3439 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3440 = s__3439;
        if(cljs.core.truth_(and__3546__auto____3440)) {
          return pred.call(null, cljs.core.first.call(null, s__3439))
        }else {
          return and__3546__auto____3440
        }
      }())) {
        var G__3442 = pred;
        var G__3443 = cljs.core.rest.call(null, s__3439);
        pred = G__3442;
        coll = G__3443;
        continue
      }else {
        return s__3439
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__3441.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3444 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3444)) {
      var s__3445 = temp__3698__auto____3444;
      return cljs.core.concat.call(null, s__3445, cycle.call(null, s__3445))
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
  var repeat__3446 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__3447 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__3446.call(this, n);
      case 2:
        return repeat__3447.call(this, n, x)
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
  var repeatedly__3449 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__3450 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__3449.call(this, n);
      case 2:
        return repeatedly__3450.call(this, n, f)
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
  var interleave__3456 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3452 = cljs.core.seq.call(null, c1);
      var s2__3453 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3454 = s1__3452;
        if(cljs.core.truth_(and__3546__auto____3454)) {
          return s2__3453
        }else {
          return and__3546__auto____3454
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__3452), cljs.core.cons.call(null, cljs.core.first.call(null, s2__3453), interleave.call(null, cljs.core.rest.call(null, s1__3452), cljs.core.rest.call(null, s2__3453))))
      }else {
        return null
      }
    })
  };
  var interleave__3457 = function() {
    var G__3459__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__3455 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__3455))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__3455), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__3455)))
        }else {
          return null
        }
      })
    };
    var G__3459 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3459__delegate.call(this, c1, c2, colls)
    };
    G__3459.cljs$lang$maxFixedArity = 2;
    G__3459.cljs$lang$applyTo = function(arglist__3460) {
      var c1 = cljs.core.first(arglist__3460);
      var c2 = cljs.core.first(cljs.core.next(arglist__3460));
      var colls = cljs.core.rest(cljs.core.next(arglist__3460));
      return G__3459__delegate.call(this, c1, c2, colls)
    };
    return G__3459
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__3456.call(this, c1, c2);
      default:
        return interleave__3457.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__3457.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__3463 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____3461 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____3461)) {
        var coll__3462 = temp__3695__auto____3461;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__3462), cat.call(null, cljs.core.rest.call(null, coll__3462), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__3463.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__3464 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__3465 = function() {
    var G__3467__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__3467 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3467__delegate.call(this, f, coll, colls)
    };
    G__3467.cljs$lang$maxFixedArity = 2;
    G__3467.cljs$lang$applyTo = function(arglist__3468) {
      var f = cljs.core.first(arglist__3468);
      var coll = cljs.core.first(cljs.core.next(arglist__3468));
      var colls = cljs.core.rest(cljs.core.next(arglist__3468));
      return G__3467__delegate.call(this, f, coll, colls)
    };
    return G__3467
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__3464.call(this, f, coll);
      default:
        return mapcat__3465.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__3465.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3469 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3469)) {
      var s__3470 = temp__3698__auto____3469;
      var f__3471 = cljs.core.first.call(null, s__3470);
      var r__3472 = cljs.core.rest.call(null, s__3470);
      if(cljs.core.truth_(pred.call(null, f__3471))) {
        return cljs.core.cons.call(null, f__3471, filter.call(null, pred, r__3472))
      }else {
        return filter.call(null, pred, r__3472)
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
  var walk__3474 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__3474.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__3473_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__3473_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__3481 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__3482 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3475 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3475)) {
        var s__3476 = temp__3698__auto____3475;
        var p__3477 = cljs.core.take.call(null, n, s__3476);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__3477)))) {
          return cljs.core.cons.call(null, p__3477, partition.call(null, n, step, cljs.core.drop.call(null, step, s__3476)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__3483 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3478 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3478)) {
        var s__3479 = temp__3698__auto____3478;
        var p__3480 = cljs.core.take.call(null, n, s__3479);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__3480)))) {
          return cljs.core.cons.call(null, p__3480, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__3479)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__3480, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__3481.call(this, n, step);
      case 3:
        return partition__3482.call(this, n, step, pad);
      case 4:
        return partition__3483.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__3489 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__3490 = function(m, ks, not_found) {
    var sentinel__3485 = cljs.core.lookup_sentinel;
    var m__3486 = m;
    var ks__3487 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__3487)) {
        var m__3488 = cljs.core.get.call(null, m__3486, cljs.core.first.call(null, ks__3487), sentinel__3485);
        if(cljs.core.truth_(sentinel__3485 === m__3488)) {
          return not_found
        }else {
          var G__3492 = sentinel__3485;
          var G__3493 = m__3488;
          var G__3494 = cljs.core.next.call(null, ks__3487);
          sentinel__3485 = G__3492;
          m__3486 = G__3493;
          ks__3487 = G__3494;
          continue
        }
      }else {
        return m__3486
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__3489.call(this, m, ks);
      case 3:
        return get_in__3490.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__3495, v) {
  var vec__3496__3497 = p__3495;
  var k__3498 = cljs.core.nth.call(null, vec__3496__3497, 0, null);
  var ks__3499 = cljs.core.nthnext.call(null, vec__3496__3497, 1);
  if(cljs.core.truth_(ks__3499)) {
    return cljs.core.assoc.call(null, m, k__3498, assoc_in.call(null, cljs.core.get.call(null, m, k__3498), ks__3499, v))
  }else {
    return cljs.core.assoc.call(null, m, k__3498, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__3500, f, args) {
    var vec__3501__3502 = p__3500;
    var k__3503 = cljs.core.nth.call(null, vec__3501__3502, 0, null);
    var ks__3504 = cljs.core.nthnext.call(null, vec__3501__3502, 1);
    if(cljs.core.truth_(ks__3504)) {
      return cljs.core.assoc.call(null, m, k__3503, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__3503), ks__3504, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__3503, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__3503), args))
    }
  };
  var update_in = function(m, p__3500, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__3500, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__3505) {
    var m = cljs.core.first(arglist__3505);
    var p__3500 = cljs.core.first(cljs.core.next(arglist__3505));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3505)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3505)));
    return update_in__delegate.call(this, m, p__3500, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3506 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3531 = null;
  var G__3531__3532 = function(coll, k) {
    var this__3507 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__3531__3533 = function(coll, k, not_found) {
    var this__3508 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__3531 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3531__3532.call(this, coll, k);
      case 3:
        return G__3531__3533.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3531
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3509 = this;
  var new_array__3510 = cljs.core.aclone.call(null, this__3509.array);
  new_array__3510[k] = v;
  return new cljs.core.Vector(this__3509.meta, new_array__3510)
};
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3511 = this;
  var new_array__3512 = cljs.core.aclone.call(null, this__3511.array);
  new_array__3512.push(o);
  return new cljs.core.Vector(this__3511.meta, new_array__3512)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3535 = null;
  var G__3535__3536 = function(v, f) {
    var this__3513 = this;
    return cljs.core.ci_reduce.call(null, this__3513.array, f)
  };
  var G__3535__3537 = function(v, f, start) {
    var this__3514 = this;
    return cljs.core.ci_reduce.call(null, this__3514.array, f, start)
  };
  G__3535 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3535__3536.call(this, v, f);
      case 3:
        return G__3535__3537.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3535
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3515 = this;
  if(cljs.core.truth_(this__3515.array.length > 0)) {
    var vector_seq__3516 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__3515.array.length)) {
          return cljs.core.cons.call(null, this__3515.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__3516.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3517 = this;
  return this__3517.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3518 = this;
  var count__3519 = this__3518.array.length;
  if(cljs.core.truth_(count__3519 > 0)) {
    return this__3518.array[count__3519 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3520 = this;
  if(cljs.core.truth_(this__3520.array.length > 0)) {
    var new_array__3521 = cljs.core.aclone.call(null, this__3520.array);
    new_array__3521.pop();
    return new cljs.core.Vector(this__3520.meta, new_array__3521)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__3522 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3523 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3524 = this;
  return new cljs.core.Vector(meta, this__3524.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3525 = this;
  return this__3525.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3539 = null;
  var G__3539__3540 = function(coll, n) {
    var this__3526 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____3527 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____3527)) {
        return n < this__3526.array.length
      }else {
        return and__3546__auto____3527
      }
    }())) {
      return this__3526.array[n]
    }else {
      return null
    }
  };
  var G__3539__3541 = function(coll, n, not_found) {
    var this__3528 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____3529 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____3529)) {
        return n < this__3528.array.length
      }else {
        return and__3546__auto____3529
      }
    }())) {
      return this__3528.array[n]
    }else {
      return not_found
    }
  };
  G__3539 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3539__3540.call(this, coll, n);
      case 3:
        return G__3539__3541.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3539
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3530 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__3530.meta)
};
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, cljs.core.array.call(null));
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.Vector.prototype.call = function() {
  var G__3543 = null;
  var G__3543__3544 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3543__3545 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3543 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3543__3544.call(this, _, k);
      case 3:
        return G__3543__3545.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3543
}();
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
  vector.cljs$lang$applyTo = function(arglist__3547) {
    var args = cljs.core.seq(arglist__3547);
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
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3548 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3568 = null;
  var G__3568__3569 = function(coll, k) {
    var this__3549 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__3568__3570 = function(coll, k, not_found) {
    var this__3550 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__3568 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3568__3569.call(this, coll, k);
      case 3:
        return G__3568__3570.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3568
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__3551 = this;
  var v_pos__3552 = this__3551.start + key;
  return new cljs.core.Subvec(this__3551.meta, cljs.core._assoc.call(null, this__3551.v, v_pos__3552, val), this__3551.start, this__3551.end > v_pos__3552 + 1 ? this__3551.end : v_pos__3552 + 1)
};
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3553 = this;
  return new cljs.core.Subvec(this__3553.meta, cljs.core._assoc_n.call(null, this__3553.v, this__3553.end, o), this__3553.start, this__3553.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3572 = null;
  var G__3572__3573 = function(coll, f) {
    var this__3554 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__3572__3574 = function(coll, f, start) {
    var this__3555 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__3572 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3572__3573.call(this, coll, f);
      case 3:
        return G__3572__3574.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3572
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3556 = this;
  var subvec_seq__3557 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__3556.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__3556.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__3557.call(null, this__3556.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3558 = this;
  return this__3558.end - this__3558.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3559 = this;
  return cljs.core._nth.call(null, this__3559.v, this__3559.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3560 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__3560.start, this__3560.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__3560.meta, this__3560.v, this__3560.start, this__3560.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__3561 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3562 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3563 = this;
  return new cljs.core.Subvec(meta, this__3563.v, this__3563.start, this__3563.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3564 = this;
  return this__3564.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3576 = null;
  var G__3576__3577 = function(coll, n) {
    var this__3565 = this;
    return cljs.core._nth.call(null, this__3565.v, this__3565.start + n)
  };
  var G__3576__3578 = function(coll, n, not_found) {
    var this__3566 = this;
    return cljs.core._nth.call(null, this__3566.v, this__3566.start + n, not_found)
  };
  G__3576 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3576__3577.call(this, coll, n);
      case 3:
        return G__3576__3578.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3576
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3567 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__3567.meta)
};
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__3580 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__3581 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__3580.call(this, v, start);
      case 3:
        return subvec__3581.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subvec
}();
cljs.core.Subvec.prototype.call = function() {
  var G__3583 = null;
  var G__3583__3584 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3583__3585 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3583 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3583__3584.call(this, _, k);
      case 3:
        return G__3583__3585.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3583
}();
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__3587 = this;
  return false
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, y)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, x), cljs.core.count.call(null, y))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__3588 = array.length;
  var i__3589 = 0;
  while(true) {
    if(cljs.core.truth_(i__3589 < len__3588)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__3589]))) {
        return i__3589
      }else {
        var G__3590 = i__3589 + incr;
        i__3589 = G__3590;
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
  var obj_map_contains_key_QMARK___3592 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___3593 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3591 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____3591)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____3591
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
        return obj_map_contains_key_QMARK___3592.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___3593.call(this, k, strobj, true_val, false_val)
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
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3596 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3615 = null;
  var G__3615__3616 = function(coll, k) {
    var this__3597 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__3615__3617 = function(coll, k, not_found) {
    var this__3598 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__3598.strobj, this__3598.strobj[k], not_found)
  };
  G__3615 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3615__3616.call(this, coll, k);
      case 3:
        return G__3615__3617.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3615
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3599 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__3600 = goog.object.clone.call(null, this__3599.strobj);
    var overwrite_QMARK___3601 = new_strobj__3600.hasOwnProperty(k);
    new_strobj__3600[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___3601)) {
      return new cljs.core.ObjMap(this__3599.meta, this__3599.keys, new_strobj__3600)
    }else {
      var new_keys__3602 = cljs.core.aclone.call(null, this__3599.keys);
      new_keys__3602.push(k);
      return new cljs.core.ObjMap(this__3599.meta, new_keys__3602, new_strobj__3600)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__3599.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__3603 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__3603.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__3604 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3605 = this;
  if(cljs.core.truth_(this__3605.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__3595_SHARP_) {
      return cljs.core.vector.call(null, p1__3595_SHARP_, this__3605.strobj[p1__3595_SHARP_])
    }, this__3605.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3606 = this;
  return this__3606.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3607 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3608 = this;
  return new cljs.core.ObjMap(meta, this__3608.keys, this__3608.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3609 = this;
  return this__3609.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3610 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__3610.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__3611 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____3612 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____3612)) {
      return this__3611.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____3612
    }
  }())) {
    var new_keys__3613 = cljs.core.aclone.call(null, this__3611.keys);
    var new_strobj__3614 = goog.object.clone.call(null, this__3611.strobj);
    new_keys__3613.splice(cljs.core.scan_array.call(null, 1, k, new_keys__3613), 1);
    cljs.core.js_delete.call(null, new_strobj__3614, k);
    return new cljs.core.ObjMap(this__3611.meta, new_keys__3613, new_strobj__3614)
  }else {
    return coll
  }
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, cljs.core.array.call(null), cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.ObjMap.prototype.call = function() {
  var G__3620 = null;
  var G__3620__3621 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3620__3622 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3620 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3620__3621.call(this, _, k);
      case 3:
        return G__3620__3622.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3620
}();
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3624 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3654 = null;
  var G__3654__3655 = function(coll, k) {
    var this__3625 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__3654__3656 = function(coll, k, not_found) {
    var this__3626 = this;
    var bucket__3627 = this__3626.hashobj[cljs.core.hash.call(null, k)];
    var i__3628 = cljs.core.truth_(bucket__3627) ? cljs.core.scan_array.call(null, 2, k, bucket__3627) : null;
    if(cljs.core.truth_(i__3628)) {
      return bucket__3627[i__3628 + 1]
    }else {
      return not_found
    }
  };
  G__3654 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3654__3655.call(this, coll, k);
      case 3:
        return G__3654__3656.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3654
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3629 = this;
  var h__3630 = cljs.core.hash.call(null, k);
  var bucket__3631 = this__3629.hashobj[h__3630];
  if(cljs.core.truth_(bucket__3631)) {
    var new_bucket__3632 = cljs.core.aclone.call(null, bucket__3631);
    var new_hashobj__3633 = goog.object.clone.call(null, this__3629.hashobj);
    new_hashobj__3633[h__3630] = new_bucket__3632;
    var temp__3695__auto____3634 = cljs.core.scan_array.call(null, 2, k, new_bucket__3632);
    if(cljs.core.truth_(temp__3695__auto____3634)) {
      var i__3635 = temp__3695__auto____3634;
      new_bucket__3632[i__3635 + 1] = v;
      return new cljs.core.HashMap(this__3629.meta, this__3629.count, new_hashobj__3633)
    }else {
      new_bucket__3632.push(k, v);
      return new cljs.core.HashMap(this__3629.meta, this__3629.count + 1, new_hashobj__3633)
    }
  }else {
    var new_hashobj__3636 = goog.object.clone.call(null, this__3629.hashobj);
    new_hashobj__3636[h__3630] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__3629.meta, this__3629.count + 1, new_hashobj__3636)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__3637 = this;
  var bucket__3638 = this__3637.hashobj[cljs.core.hash.call(null, k)];
  var i__3639 = cljs.core.truth_(bucket__3638) ? cljs.core.scan_array.call(null, 2, k, bucket__3638) : null;
  if(cljs.core.truth_(i__3639)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__3640 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3641 = this;
  if(cljs.core.truth_(this__3641.count > 0)) {
    var hashes__3642 = cljs.core.js_keys.call(null, this__3641.hashobj);
    return cljs.core.mapcat.call(null, function(p1__3619_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__3641.hashobj[p1__3619_SHARP_]))
    }, hashes__3642)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3643 = this;
  return this__3643.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3644 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3645 = this;
  return new cljs.core.HashMap(meta, this__3645.count, this__3645.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3646 = this;
  return this__3646.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3647 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__3647.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__3648 = this;
  var h__3649 = cljs.core.hash.call(null, k);
  var bucket__3650 = this__3648.hashobj[h__3649];
  var i__3651 = cljs.core.truth_(bucket__3650) ? cljs.core.scan_array.call(null, 2, k, bucket__3650) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__3651))) {
    return coll
  }else {
    var new_hashobj__3652 = goog.object.clone.call(null, this__3648.hashobj);
    if(cljs.core.truth_(3 > bucket__3650.length)) {
      cljs.core.js_delete.call(null, new_hashobj__3652, h__3649)
    }else {
      var new_bucket__3653 = cljs.core.aclone.call(null, bucket__3650);
      new_bucket__3653.splice(i__3651, 2);
      new_hashobj__3652[h__3649] = new_bucket__3653
    }
    return new cljs.core.HashMap(this__3648.meta, this__3648.count - 1, new_hashobj__3652)
  }
};
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__3658 = ks.length;
  var i__3659 = 0;
  var out__3660 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__3659 < len__3658)) {
      var G__3661 = i__3659 + 1;
      var G__3662 = cljs.core.assoc.call(null, out__3660, ks[i__3659], vs[i__3659]);
      i__3659 = G__3661;
      out__3660 = G__3662;
      continue
    }else {
      return out__3660
    }
    break
  }
};
cljs.core.HashMap.prototype.call = function() {
  var G__3663 = null;
  var G__3663__3664 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3663__3665 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3663 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3663__3664.call(this, _, k);
      case 3:
        return G__3663__3665.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3663
}();
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__3667 = cljs.core.seq.call(null, keyvals);
    var out__3668 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__3667)) {
        var G__3669 = cljs.core.nnext.call(null, in$__3667);
        var G__3670 = cljs.core.assoc.call(null, out__3668, cljs.core.first.call(null, in$__3667), cljs.core.second.call(null, in$__3667));
        in$__3667 = G__3669;
        out__3668 = G__3670;
        continue
      }else {
        return out__3668
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
  hash_map.cljs$lang$applyTo = function(arglist__3671) {
    var keyvals = cljs.core.seq(arglist__3671);
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
      return cljs.core.reduce.call(null, function(p1__3672_SHARP_, p2__3673_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____3674 = p1__3672_SHARP_;
          if(cljs.core.truth_(or__3548__auto____3674)) {
            return or__3548__auto____3674
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__3673_SHARP_)
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
  merge.cljs$lang$applyTo = function(arglist__3675) {
    var maps = cljs.core.seq(arglist__3675);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__3678 = function(m, e) {
        var k__3676 = cljs.core.first.call(null, e);
        var v__3677 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__3676))) {
          return cljs.core.assoc.call(null, m, k__3676, f.call(null, cljs.core.get.call(null, m, k__3676), v__3677))
        }else {
          return cljs.core.assoc.call(null, m, k__3676, v__3677)
        }
      };
      var merge2__3680 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__3678, function() {
          var or__3548__auto____3679 = m1;
          if(cljs.core.truth_(or__3548__auto____3679)) {
            return or__3548__auto____3679
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__3680, maps)
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
  merge_with.cljs$lang$applyTo = function(arglist__3681) {
    var f = cljs.core.first(arglist__3681);
    var maps = cljs.core.rest(arglist__3681);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__3683 = cljs.core.ObjMap.fromObject([], {});
  var keys__3684 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__3684)) {
      var key__3685 = cljs.core.first.call(null, keys__3684);
      var entry__3686 = cljs.core.get.call(null, map, key__3685, "\ufdd0'user/not-found");
      var G__3687 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__3686, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__3683, key__3685, entry__3686) : ret__3683;
      var G__3688 = cljs.core.next.call(null, keys__3684);
      ret__3683 = G__3687;
      keys__3684 = G__3688;
      continue
    }else {
      return ret__3683
    }
    break
  }
};
cljs.core.Set = function(meta, hash_map) {
  this.meta = meta;
  this.hash_map = hash_map
};
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3689 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3702 = null;
  var G__3702__3703 = function(coll, v) {
    var this__3690 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__3702__3704 = function(coll, v, not_found) {
    var this__3691 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__3691.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__3702 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3702__3703.call(this, coll, v);
      case 3:
        return G__3702__3704.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3702
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3692 = this;
  return new cljs.core.Set(this__3692.meta, cljs.core.assoc.call(null, this__3692.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3693 = this;
  return cljs.core.keys.call(null, this__3693.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__3694 = this;
  return new cljs.core.Set(this__3694.meta, cljs.core.dissoc.call(null, this__3694.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3695 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3696 = this;
  var and__3546__auto____3697 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____3697)) {
    var and__3546__auto____3698 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____3698)) {
      return cljs.core.every_QMARK_.call(null, function(p1__3682_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__3682_SHARP_)
      }, other)
    }else {
      return and__3546__auto____3698
    }
  }else {
    return and__3546__auto____3697
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3699 = this;
  return new cljs.core.Set(meta, this__3699.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3700 = this;
  return this__3700.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3701 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__3701.meta)
};
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.Set.prototype.call = function() {
  var G__3706 = null;
  var G__3706__3707 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3706__3708 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3706 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3706__3707.call(this, _, k);
      case 3:
        return G__3706__3708.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3706
}();
cljs.core.set = function set(coll) {
  var in$__3711 = cljs.core.seq.call(null, coll);
  var out__3712 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__3711)))) {
      var G__3713 = cljs.core.rest.call(null, in$__3711);
      var G__3714 = cljs.core.conj.call(null, out__3712, cljs.core.first.call(null, in$__3711));
      in$__3711 = G__3713;
      out__3712 = G__3714;
      continue
    }else {
      return out__3712
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__3715 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____3716 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____3716)) {
        var e__3717 = temp__3695__auto____3716;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__3717))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__3715, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__3710_SHARP_) {
      var temp__3695__auto____3718 = cljs.core.find.call(null, smap, p1__3710_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____3718)) {
        var e__3719 = temp__3695__auto____3718;
        return cljs.core.second.call(null, e__3719)
      }else {
        return p1__3710_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__3727 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__3720, seen) {
        while(true) {
          var vec__3721__3722 = p__3720;
          var f__3723 = cljs.core.nth.call(null, vec__3721__3722, 0, null);
          var xs__3724 = vec__3721__3722;
          var temp__3698__auto____3725 = cljs.core.seq.call(null, xs__3724);
          if(cljs.core.truth_(temp__3698__auto____3725)) {
            var s__3726 = temp__3698__auto____3725;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__3723))) {
              var G__3728 = cljs.core.rest.call(null, s__3726);
              var G__3729 = seen;
              p__3720 = G__3728;
              seen = G__3729;
              continue
            }else {
              return cljs.core.cons.call(null, f__3723, step.call(null, cljs.core.rest.call(null, s__3726), cljs.core.conj.call(null, seen, f__3723)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__3727.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__3730 = cljs.core.Vector.fromArray([]);
  var s__3731 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__3731))) {
      var G__3732 = cljs.core.conj.call(null, ret__3730, cljs.core.first.call(null, s__3731));
      var G__3733 = cljs.core.next.call(null, s__3731);
      ret__3730 = G__3732;
      s__3731 = G__3733;
      continue
    }else {
      return cljs.core.seq.call(null, ret__3730)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____3734 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____3734)) {
        return or__3548__auto____3734
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__3735 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__3735 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__3735 + 1)
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
    var or__3548__auto____3736 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____3736)) {
      return or__3548__auto____3736
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__3737 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__3737 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__3737)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__3740 = cljs.core.ObjMap.fromObject([], {});
  var ks__3741 = cljs.core.seq.call(null, keys);
  var vs__3742 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3743 = ks__3741;
      if(cljs.core.truth_(and__3546__auto____3743)) {
        return vs__3742
      }else {
        return and__3546__auto____3743
      }
    }())) {
      var G__3744 = cljs.core.assoc.call(null, map__3740, cljs.core.first.call(null, ks__3741), cljs.core.first.call(null, vs__3742));
      var G__3745 = cljs.core.next.call(null, ks__3741);
      var G__3746 = cljs.core.next.call(null, vs__3742);
      map__3740 = G__3744;
      ks__3741 = G__3745;
      vs__3742 = G__3746;
      continue
    }else {
      return map__3740
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__3749 = function(k, x) {
    return x
  };
  var max_key__3750 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__3751 = function() {
    var G__3753__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__3738_SHARP_, p2__3739_SHARP_) {
        return max_key.call(null, k, p1__3738_SHARP_, p2__3739_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__3753 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3753__delegate.call(this, k, x, y, more)
    };
    G__3753.cljs$lang$maxFixedArity = 3;
    G__3753.cljs$lang$applyTo = function(arglist__3754) {
      var k = cljs.core.first(arglist__3754);
      var x = cljs.core.first(cljs.core.next(arglist__3754));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3754)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3754)));
      return G__3753__delegate.call(this, k, x, y, more)
    };
    return G__3753
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__3749.call(this, k, x);
      case 3:
        return max_key__3750.call(this, k, x, y);
      default:
        return max_key__3751.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__3751.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__3755 = function(k, x) {
    return x
  };
  var min_key__3756 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__3757 = function() {
    var G__3759__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__3747_SHARP_, p2__3748_SHARP_) {
        return min_key.call(null, k, p1__3747_SHARP_, p2__3748_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__3759 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3759__delegate.call(this, k, x, y, more)
    };
    G__3759.cljs$lang$maxFixedArity = 3;
    G__3759.cljs$lang$applyTo = function(arglist__3760) {
      var k = cljs.core.first(arglist__3760);
      var x = cljs.core.first(cljs.core.next(arglist__3760));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3760)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3760)));
      return G__3759__delegate.call(this, k, x, y, more)
    };
    return G__3759
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__3755.call(this, k, x);
      case 3:
        return min_key__3756.call(this, k, x, y);
      default:
        return min_key__3757.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__3757.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__3763 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__3764 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3761 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3761)) {
        var s__3762 = temp__3698__auto____3761;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__3762), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__3762)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__3763.call(this, n, step);
      case 3:
        return partition_all__3764.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3766 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3766)) {
      var s__3767 = temp__3698__auto____3766;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__3767)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3767), take_while.call(null, pred, cljs.core.rest.call(null, s__3767)))
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
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = function(rng) {
  var this__3768 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__3769 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3785 = null;
  var G__3785__3786 = function(rng, f) {
    var this__3770 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__3785__3787 = function(rng, f, s) {
    var this__3771 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__3785 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__3785__3786.call(this, rng, f);
      case 3:
        return G__3785__3787.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3785
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__3772 = this;
  var comp__3773 = cljs.core.truth_(this__3772.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__3773.call(null, this__3772.start, this__3772.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__3774 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__3774.end - this__3774.start) / this__3774.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__3775 = this;
  return this__3775.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__3776 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__3776.meta, this__3776.start + this__3776.step, this__3776.end, this__3776.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__3777 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__3778 = this;
  return new cljs.core.Range(meta, this__3778.start, this__3778.end, this__3778.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__3779 = this;
  return this__3779.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3789 = null;
  var G__3789__3790 = function(rng, n) {
    var this__3780 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__3780.start + n * this__3780.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3781 = this__3780.start > this__3780.end;
        if(cljs.core.truth_(and__3546__auto____3781)) {
          return cljs.core._EQ_.call(null, this__3780.step, 0)
        }else {
          return and__3546__auto____3781
        }
      }())) {
        return this__3780.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__3789__3791 = function(rng, n, not_found) {
    var this__3782 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__3782.start + n * this__3782.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3783 = this__3782.start > this__3782.end;
        if(cljs.core.truth_(and__3546__auto____3783)) {
          return cljs.core._EQ_.call(null, this__3782.step, 0)
        }else {
          return and__3546__auto____3783
        }
      }())) {
        return this__3782.start
      }else {
        return not_found
      }
    }
  };
  G__3789 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3789__3790.call(this, rng, n);
      case 3:
        return G__3789__3791.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3789
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__3784 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3784.meta)
};
cljs.core.range = function() {
  var range = null;
  var range__3793 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__3794 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__3795 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__3796 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__3793.call(this);
      case 1:
        return range__3794.call(this, start);
      case 2:
        return range__3795.call(this, start, end);
      case 3:
        return range__3796.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3798 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3798)) {
      var s__3799 = temp__3698__auto____3798;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__3799), take_nth.call(null, n, cljs.core.drop.call(null, n, s__3799)))
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
    var temp__3698__auto____3801 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3801)) {
      var s__3802 = temp__3698__auto____3801;
      var fst__3803 = cljs.core.first.call(null, s__3802);
      var fv__3804 = f.call(null, fst__3803);
      var run__3805 = cljs.core.cons.call(null, fst__3803, cljs.core.take_while.call(null, function(p1__3800_SHARP_) {
        return cljs.core._EQ_.call(null, fv__3804, f.call(null, p1__3800_SHARP_))
      }, cljs.core.next.call(null, s__3802)));
      return cljs.core.cons.call(null, run__3805, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__3805), s__3802))))
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
  var reductions__3820 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____3816 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____3816)) {
        var s__3817 = temp__3695__auto____3816;
        return reductions.call(null, f, cljs.core.first.call(null, s__3817), cljs.core.rest.call(null, s__3817))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__3821 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3818 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3818)) {
        var s__3819 = temp__3698__auto____3818;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__3819)), cljs.core.rest.call(null, s__3819))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__3820.call(this, f, init);
      case 3:
        return reductions__3821.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__3824 = function(f) {
    return function() {
      var G__3829 = null;
      var G__3829__3830 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__3829__3831 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__3829__3832 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__3829__3833 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__3829__3834 = function() {
        var G__3836__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__3836 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3836__delegate.call(this, x, y, z, args)
        };
        G__3836.cljs$lang$maxFixedArity = 3;
        G__3836.cljs$lang$applyTo = function(arglist__3837) {
          var x = cljs.core.first(arglist__3837);
          var y = cljs.core.first(cljs.core.next(arglist__3837));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3837)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3837)));
          return G__3836__delegate.call(this, x, y, z, args)
        };
        return G__3836
      }();
      G__3829 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3829__3830.call(this);
          case 1:
            return G__3829__3831.call(this, x);
          case 2:
            return G__3829__3832.call(this, x, y);
          case 3:
            return G__3829__3833.call(this, x, y, z);
          default:
            return G__3829__3834.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3829.cljs$lang$maxFixedArity = 3;
      G__3829.cljs$lang$applyTo = G__3829__3834.cljs$lang$applyTo;
      return G__3829
    }()
  };
  var juxt__3825 = function(f, g) {
    return function() {
      var G__3838 = null;
      var G__3838__3839 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__3838__3840 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__3838__3841 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__3838__3842 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__3838__3843 = function() {
        var G__3845__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__3845 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3845__delegate.call(this, x, y, z, args)
        };
        G__3845.cljs$lang$maxFixedArity = 3;
        G__3845.cljs$lang$applyTo = function(arglist__3846) {
          var x = cljs.core.first(arglist__3846);
          var y = cljs.core.first(cljs.core.next(arglist__3846));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3846)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3846)));
          return G__3845__delegate.call(this, x, y, z, args)
        };
        return G__3845
      }();
      G__3838 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3838__3839.call(this);
          case 1:
            return G__3838__3840.call(this, x);
          case 2:
            return G__3838__3841.call(this, x, y);
          case 3:
            return G__3838__3842.call(this, x, y, z);
          default:
            return G__3838__3843.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3838.cljs$lang$maxFixedArity = 3;
      G__3838.cljs$lang$applyTo = G__3838__3843.cljs$lang$applyTo;
      return G__3838
    }()
  };
  var juxt__3826 = function(f, g, h) {
    return function() {
      var G__3847 = null;
      var G__3847__3848 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__3847__3849 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__3847__3850 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__3847__3851 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__3847__3852 = function() {
        var G__3854__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__3854 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3854__delegate.call(this, x, y, z, args)
        };
        G__3854.cljs$lang$maxFixedArity = 3;
        G__3854.cljs$lang$applyTo = function(arglist__3855) {
          var x = cljs.core.first(arglist__3855);
          var y = cljs.core.first(cljs.core.next(arglist__3855));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3855)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3855)));
          return G__3854__delegate.call(this, x, y, z, args)
        };
        return G__3854
      }();
      G__3847 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3847__3848.call(this);
          case 1:
            return G__3847__3849.call(this, x);
          case 2:
            return G__3847__3850.call(this, x, y);
          case 3:
            return G__3847__3851.call(this, x, y, z);
          default:
            return G__3847__3852.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3847.cljs$lang$maxFixedArity = 3;
      G__3847.cljs$lang$applyTo = G__3847__3852.cljs$lang$applyTo;
      return G__3847
    }()
  };
  var juxt__3827 = function() {
    var G__3856__delegate = function(f, g, h, fs) {
      var fs__3823 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__3857 = null;
        var G__3857__3858 = function() {
          return cljs.core.reduce.call(null, function(p1__3806_SHARP_, p2__3807_SHARP_) {
            return cljs.core.conj.call(null, p1__3806_SHARP_, p2__3807_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__3823)
        };
        var G__3857__3859 = function(x) {
          return cljs.core.reduce.call(null, function(p1__3808_SHARP_, p2__3809_SHARP_) {
            return cljs.core.conj.call(null, p1__3808_SHARP_, p2__3809_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__3823)
        };
        var G__3857__3860 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__3810_SHARP_, p2__3811_SHARP_) {
            return cljs.core.conj.call(null, p1__3810_SHARP_, p2__3811_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__3823)
        };
        var G__3857__3861 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__3812_SHARP_, p2__3813_SHARP_) {
            return cljs.core.conj.call(null, p1__3812_SHARP_, p2__3813_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__3823)
        };
        var G__3857__3862 = function() {
          var G__3864__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__3814_SHARP_, p2__3815_SHARP_) {
              return cljs.core.conj.call(null, p1__3814_SHARP_, cljs.core.apply.call(null, p2__3815_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__3823)
          };
          var G__3864 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3864__delegate.call(this, x, y, z, args)
          };
          G__3864.cljs$lang$maxFixedArity = 3;
          G__3864.cljs$lang$applyTo = function(arglist__3865) {
            var x = cljs.core.first(arglist__3865);
            var y = cljs.core.first(cljs.core.next(arglist__3865));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3865)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3865)));
            return G__3864__delegate.call(this, x, y, z, args)
          };
          return G__3864
        }();
        G__3857 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__3857__3858.call(this);
            case 1:
              return G__3857__3859.call(this, x);
            case 2:
              return G__3857__3860.call(this, x, y);
            case 3:
              return G__3857__3861.call(this, x, y, z);
            default:
              return G__3857__3862.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__3857.cljs$lang$maxFixedArity = 3;
        G__3857.cljs$lang$applyTo = G__3857__3862.cljs$lang$applyTo;
        return G__3857
      }()
    };
    var G__3856 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3856__delegate.call(this, f, g, h, fs)
    };
    G__3856.cljs$lang$maxFixedArity = 3;
    G__3856.cljs$lang$applyTo = function(arglist__3866) {
      var f = cljs.core.first(arglist__3866);
      var g = cljs.core.first(cljs.core.next(arglist__3866));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3866)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3866)));
      return G__3856__delegate.call(this, f, g, h, fs)
    };
    return G__3856
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__3824.call(this, f);
      case 2:
        return juxt__3825.call(this, f, g);
      case 3:
        return juxt__3826.call(this, f, g, h);
      default:
        return juxt__3827.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__3827.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__3868 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__3871 = cljs.core.next.call(null, coll);
        coll = G__3871;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__3869 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3867 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____3867)) {
          return n > 0
        }else {
          return and__3546__auto____3867
        }
      }())) {
        var G__3872 = n - 1;
        var G__3873 = cljs.core.next.call(null, coll);
        n = G__3872;
        coll = G__3873;
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
        return dorun__3868.call(this, n);
      case 2:
        return dorun__3869.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__3874 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__3875 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__3874.call(this, n);
      case 2:
        return doall__3875.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__3877 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__3877), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__3877), 1))) {
      return cljs.core.first.call(null, matches__3877)
    }else {
      return cljs.core.vec.call(null, matches__3877)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__3878 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__3878))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__3878), 1))) {
      return cljs.core.first.call(null, matches__3878)
    }else {
      return cljs.core.vec.call(null, matches__3878)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__3879 = cljs.core.re_find.call(null, re, s);
  var match_idx__3880 = s.search(re);
  var match_str__3881 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__3879)) ? cljs.core.first.call(null, match_data__3879) : match_data__3879;
  var post_match__3882 = cljs.core.subs.call(null, s, match_idx__3880 + cljs.core.count.call(null, match_str__3881));
  if(cljs.core.truth_(match_data__3879)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__3879, re_seq.call(null, re, post_match__3882))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__3883_SHARP_) {
    return print_one.call(null, p1__3883_SHARP_, opts)
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
    if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, "#<undefined>")
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.concat.call(null, cljs.core.truth_(function() {
          var and__3546__auto____3884 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____3884)) {
            var and__3546__auto____3888 = function() {
              var x__319__auto____3885 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____3886 = x__319__auto____3885;
                if(cljs.core.truth_(and__3546__auto____3886)) {
                  var and__3546__auto____3887 = x__319__auto____3885.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____3887)) {
                    return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____3885))
                  }else {
                    return and__3546__auto____3887
                  }
                }else {
                  return and__3546__auto____3886
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____3885)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____3888)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____3888
            }
          }else {
            return and__3546__auto____3884
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__319__auto____3889 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____3890 = x__319__auto____3889;
            if(cljs.core.truth_(and__3546__auto____3890)) {
              var and__3546__auto____3891 = x__319__auto____3889.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____3891)) {
                return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____3889))
              }else {
                return and__3546__auto____3891
              }
            }else {
              return and__3546__auto____3890
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__319__auto____3889)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__3892 = cljs.core.first.call(null, objs);
  var sb__3893 = new goog.string.StringBuffer;
  var G__3894__3895 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__3894__3895)) {
    var obj__3896 = cljs.core.first.call(null, G__3894__3895);
    var G__3894__3897 = G__3894__3895;
    while(true) {
      if(cljs.core.truth_(obj__3896 === first_obj__3892)) {
      }else {
        sb__3893.append(" ")
      }
      var G__3898__3899 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__3896, opts));
      if(cljs.core.truth_(G__3898__3899)) {
        var string__3900 = cljs.core.first.call(null, G__3898__3899);
        var G__3898__3901 = G__3898__3899;
        while(true) {
          sb__3893.append(string__3900);
          var temp__3698__auto____3902 = cljs.core.next.call(null, G__3898__3901);
          if(cljs.core.truth_(temp__3698__auto____3902)) {
            var G__3898__3903 = temp__3698__auto____3902;
            var G__3906 = cljs.core.first.call(null, G__3898__3903);
            var G__3907 = G__3898__3903;
            string__3900 = G__3906;
            G__3898__3901 = G__3907;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____3904 = cljs.core.next.call(null, G__3894__3897);
      if(cljs.core.truth_(temp__3698__auto____3904)) {
        var G__3894__3905 = temp__3698__auto____3904;
        var G__3908 = cljs.core.first.call(null, G__3894__3905);
        var G__3909 = G__3894__3905;
        obj__3896 = G__3908;
        G__3894__3897 = G__3909;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__3893)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__3910 = cljs.core.first.call(null, objs);
  var G__3911__3912 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__3911__3912)) {
    var obj__3913 = cljs.core.first.call(null, G__3911__3912);
    var G__3911__3914 = G__3911__3912;
    while(true) {
      if(cljs.core.truth_(obj__3913 === first_obj__3910)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__3915__3916 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__3913, opts));
      if(cljs.core.truth_(G__3915__3916)) {
        var string__3917 = cljs.core.first.call(null, G__3915__3916);
        var G__3915__3918 = G__3915__3916;
        while(true) {
          cljs.core.string_print.call(null, string__3917);
          var temp__3698__auto____3919 = cljs.core.next.call(null, G__3915__3918);
          if(cljs.core.truth_(temp__3698__auto____3919)) {
            var G__3915__3920 = temp__3698__auto____3919;
            var G__3923 = cljs.core.first.call(null, G__3915__3920);
            var G__3924 = G__3915__3920;
            string__3917 = G__3923;
            G__3915__3918 = G__3924;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____3921 = cljs.core.next.call(null, G__3911__3914);
      if(cljs.core.truth_(temp__3698__auto____3921)) {
        var G__3911__3922 = temp__3698__auto____3921;
        var G__3925 = cljs.core.first.call(null, G__3911__3922);
        var G__3926 = G__3911__3922;
        obj__3913 = G__3925;
        G__3911__3914 = G__3926;
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
  pr_str.cljs$lang$applyTo = function(arglist__3927) {
    var objs = cljs.core.seq(arglist__3927);
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
  pr.cljs$lang$applyTo = function(arglist__3928) {
    var objs = cljs.core.seq(arglist__3928);
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
  cljs_core_print.cljs$lang$applyTo = function(arglist__3929) {
    var objs = cljs.core.seq(arglist__3929);
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
  println.cljs$lang$applyTo = function(arglist__3930) {
    var objs = cljs.core.seq(arglist__3930);
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
  prn.cljs$lang$applyTo = function(arglist__3931) {
    var objs = cljs.core.seq(arglist__3931);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__3932 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__3932, "{", ", ", "}", opts, coll)
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
      var temp__3698__auto____3933 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____3933)) {
        var nspc__3934 = temp__3698__auto____3933;
        return cljs.core.str.call(null, nspc__3934, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____3935 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____3935)) {
          var nspc__3936 = temp__3698__auto____3935;
          return cljs.core.str.call(null, nspc__3936, "/")
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
  var pr_pair__3937 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__3937, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__3938 = this;
  var G__3939__3940 = cljs.core.seq.call(null, this__3938.watches);
  if(cljs.core.truth_(G__3939__3940)) {
    var G__3942__3944 = cljs.core.first.call(null, G__3939__3940);
    var vec__3943__3945 = G__3942__3944;
    var key__3946 = cljs.core.nth.call(null, vec__3943__3945, 0, null);
    var f__3947 = cljs.core.nth.call(null, vec__3943__3945, 1, null);
    var G__3939__3948 = G__3939__3940;
    var G__3942__3949 = G__3942__3944;
    var G__3939__3950 = G__3939__3948;
    while(true) {
      var vec__3951__3952 = G__3942__3949;
      var key__3953 = cljs.core.nth.call(null, vec__3951__3952, 0, null);
      var f__3954 = cljs.core.nth.call(null, vec__3951__3952, 1, null);
      var G__3939__3955 = G__3939__3950;
      f__3954.call(null, key__3953, this$, oldval, newval);
      var temp__3698__auto____3956 = cljs.core.next.call(null, G__3939__3955);
      if(cljs.core.truth_(temp__3698__auto____3956)) {
        var G__3939__3957 = temp__3698__auto____3956;
        var G__3964 = cljs.core.first.call(null, G__3939__3957);
        var G__3965 = G__3939__3957;
        G__3942__3949 = G__3964;
        G__3939__3950 = G__3965;
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
  var this__3958 = this;
  return this$.watches = cljs.core.assoc.call(null, this__3958.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__3959 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__3959.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__3960 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__3960.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__3961 = this;
  return this__3961.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__3962 = this;
  return this__3962.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__3963 = this;
  return o === other
};
cljs.core.atom = function() {
  var atom = null;
  var atom__3972 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__3973 = function() {
    var G__3975__delegate = function(x, p__3966) {
      var map__3967__3968 = p__3966;
      var map__3967__3969 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__3967__3968)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__3967__3968) : map__3967__3968;
      var validator__3970 = cljs.core.get.call(null, map__3967__3969, "\ufdd0'validator");
      var meta__3971 = cljs.core.get.call(null, map__3967__3969, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__3971, validator__3970, null)
    };
    var G__3975 = function(x, var_args) {
      var p__3966 = null;
      if(goog.isDef(var_args)) {
        p__3966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__3975__delegate.call(this, x, p__3966)
    };
    G__3975.cljs$lang$maxFixedArity = 1;
    G__3975.cljs$lang$applyTo = function(arglist__3976) {
      var x = cljs.core.first(arglist__3976);
      var p__3966 = cljs.core.rest(arglist__3976);
      return G__3975__delegate.call(this, x, p__3966)
    };
    return G__3975
  }();
  atom = function(x, var_args) {
    var p__3966 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__3972.call(this, x);
      default:
        return atom__3973.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__3973.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____3977 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____3977)) {
    var validate__3978 = temp__3698__auto____3977;
    if(cljs.core.truth_(validate__3978.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 2934)))));
    }
  }else {
  }
  var old_value__3979 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__3979, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___3980 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___3981 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___3982 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___3983 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___3984 = function() {
    var G__3986__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__3986 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__3986__delegate.call(this, a, f, x, y, z, more)
    };
    G__3986.cljs$lang$maxFixedArity = 5;
    G__3986.cljs$lang$applyTo = function(arglist__3987) {
      var a = cljs.core.first(arglist__3987);
      var f = cljs.core.first(cljs.core.next(arglist__3987));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3987)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3987))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3987)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3987)))));
      return G__3986__delegate.call(this, a, f, x, y, z, more)
    };
    return G__3986
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___3980.call(this, a, f);
      case 3:
        return swap_BANG___3981.call(this, a, f, x);
      case 4:
        return swap_BANG___3982.call(this, a, f, x, y);
      case 5:
        return swap_BANG___3983.call(this, a, f, x, y, z);
      default:
        return swap_BANG___3984.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___3984.cljs$lang$applyTo;
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
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__3988) {
    var iref = cljs.core.first(arglist__3988);
    var f = cljs.core.first(cljs.core.next(arglist__3988));
    var args = cljs.core.rest(cljs.core.next(arglist__3988));
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
  var gensym__3989 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__3990 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__3989.call(this);
      case 1:
        return gensym__3990.call(this, prefix_string)
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
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = function(d) {
  var this__3992 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__3992.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__3993 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__3993.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__3993.state, this__3993.f)
  }
  return cljs.core.deref.call(null, this__3993.state)
};
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
  delay.cljs$lang$applyTo = function(arglist__3994) {
    var body = cljs.core.seq(arglist__3994);
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
    var map__3995__3996 = options;
    var map__3995__3997 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__3995__3996)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__3995__3996) : map__3995__3996;
    var keywordize_keys__3998 = cljs.core.get.call(null, map__3995__3997, "\ufdd0'keywordize-keys");
    var keyfn__3999 = cljs.core.truth_(keywordize_keys__3998) ? cljs.core.keyword : cljs.core.str;
    var f__4005 = function thisfn(x) {
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
                var iter__383__auto____4004 = function iter__4000(s__4001) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__4001__4002 = s__4001;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__4001__4002))) {
                        var k__4003 = cljs.core.first.call(null, s__4001__4002);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__3999.call(null, k__4003), thisfn.call(null, x[k__4003])]), iter__4000.call(null, cljs.core.rest.call(null, s__4001__4002)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__383__auto____4004.call(null, cljs.core.js_keys.call(null, x))
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
    return f__4005.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__4006) {
    var x = cljs.core.first(arglist__4006);
    var options = cljs.core.rest(arglist__4006);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__4007 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__4011__delegate = function(args) {
      var temp__3695__auto____4008 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__4007), args);
      if(cljs.core.truth_(temp__3695__auto____4008)) {
        var v__4009 = temp__3695__auto____4008;
        return v__4009
      }else {
        var ret__4010 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__4007, cljs.core.assoc, args, ret__4010);
        return ret__4010
      }
    };
    var G__4011 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__4011__delegate.call(this, args)
    };
    G__4011.cljs$lang$maxFixedArity = 0;
    G__4011.cljs$lang$applyTo = function(arglist__4012) {
      var args = cljs.core.seq(arglist__4012);
      return G__4011__delegate.call(this, args)
    };
    return G__4011
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__4014 = function(f) {
    while(true) {
      var ret__4013 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__4013))) {
        var G__4017 = ret__4013;
        f = G__4017;
        continue
      }else {
        return ret__4013
      }
      break
    }
  };
  var trampoline__4015 = function() {
    var G__4018__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__4018 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4018__delegate.call(this, f, args)
    };
    G__4018.cljs$lang$maxFixedArity = 1;
    G__4018.cljs$lang$applyTo = function(arglist__4019) {
      var f = cljs.core.first(arglist__4019);
      var args = cljs.core.rest(arglist__4019);
      return G__4018__delegate.call(this, f, args)
    };
    return G__4018
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__4014.call(this, f);
      default:
        return trampoline__4015.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__4015.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__4020 = function() {
    return rand.call(null, 1)
  };
  var rand__4021 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__4020.call(this);
      case 1:
        return rand__4021.call(this, n)
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
    var k__4023 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__4023, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__4023, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___4032 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___4033 = function(h, child, parent) {
    var or__3548__auto____4024 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____4024)) {
      return or__3548__auto____4024
    }else {
      var or__3548__auto____4025 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____4025)) {
        return or__3548__auto____4025
      }else {
        var and__3546__auto____4026 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____4026)) {
          var and__3546__auto____4027 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____4027)) {
            var and__3546__auto____4028 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____4028)) {
              var ret__4029 = true;
              var i__4030 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____4031 = cljs.core.not.call(null, ret__4029);
                  if(cljs.core.truth_(or__3548__auto____4031)) {
                    return or__3548__auto____4031
                  }else {
                    return cljs.core._EQ_.call(null, i__4030, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__4029
                }else {
                  var G__4035 = isa_QMARK_.call(null, h, child.call(null, i__4030), parent.call(null, i__4030));
                  var G__4036 = i__4030 + 1;
                  ret__4029 = G__4035;
                  i__4030 = G__4036;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____4028
            }
          }else {
            return and__3546__auto____4027
          }
        }else {
          return and__3546__auto____4026
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___4032.call(this, h, child);
      case 3:
        return isa_QMARK___4033.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__4037 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__4038 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__4037.call(this, h);
      case 2:
        return parents__4038.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__4040 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__4041 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__4040.call(this, h);
      case 2:
        return ancestors__4041.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__4043 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__4044 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__4043.call(this, h);
      case 2:
        return descendants__4044.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__4054 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3226)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__4055 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3230)))));
    }
    var tp__4049 = "\ufdd0'parents".call(null, h);
    var td__4050 = "\ufdd0'descendants".call(null, h);
    var ta__4051 = "\ufdd0'ancestors".call(null, h);
    var tf__4052 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____4053 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__4049.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__4051.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__4051.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__4049, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__4052.call(null, "\ufdd0'ancestors".call(null, h), tag, td__4050, parent, ta__4051), "\ufdd0'descendants":tf__4052.call(null, "\ufdd0'descendants".call(null, h), parent, ta__4051, tag, td__4050)})
    }();
    if(cljs.core.truth_(or__3548__auto____4053)) {
      return or__3548__auto____4053
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__4054.call(this, h, tag);
      case 3:
        return derive__4055.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__4061 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__4062 = function(h, tag, parent) {
    var parentMap__4057 = "\ufdd0'parents".call(null, h);
    var childsParents__4058 = cljs.core.truth_(parentMap__4057.call(null, tag)) ? cljs.core.disj.call(null, parentMap__4057.call(null, tag), parent) : cljs.core.set([]);
    var newParents__4059 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__4058)) ? cljs.core.assoc.call(null, parentMap__4057, tag, childsParents__4058) : cljs.core.dissoc.call(null, parentMap__4057, tag);
    var deriv_seq__4060 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__4046_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__4046_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__4046_SHARP_), cljs.core.second.call(null, p1__4046_SHARP_)))
    }, cljs.core.seq.call(null, newParents__4059)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__4057.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__4047_SHARP_, p2__4048_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__4047_SHARP_, p2__4048_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__4060))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__4061.call(this, h, tag);
      case 3:
        return underive__4062.call(this, h, tag, parent)
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
  var xprefs__4064 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____4066 = cljs.core.truth_(function() {
    var and__3546__auto____4065 = xprefs__4064;
    if(cljs.core.truth_(and__3546__auto____4065)) {
      return xprefs__4064.call(null, y)
    }else {
      return and__3546__auto____4065
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____4066)) {
    return or__3548__auto____4066
  }else {
    var or__3548__auto____4068 = function() {
      var ps__4067 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__4067) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__4067), prefer_table))) {
          }else {
          }
          var G__4071 = cljs.core.rest.call(null, ps__4067);
          ps__4067 = G__4071;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____4068)) {
      return or__3548__auto____4068
    }else {
      var or__3548__auto____4070 = function() {
        var ps__4069 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__4069) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__4069), y, prefer_table))) {
            }else {
            }
            var G__4072 = cljs.core.rest.call(null, ps__4069);
            ps__4069 = G__4072;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____4070)) {
        return or__3548__auto____4070
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____4073 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____4073)) {
    return or__3548__auto____4073
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__4082 = cljs.core.reduce.call(null, function(be, p__4074) {
    var vec__4075__4076 = p__4074;
    var k__4077 = cljs.core.nth.call(null, vec__4075__4076, 0, null);
    var ___4078 = cljs.core.nth.call(null, vec__4075__4076, 1, null);
    var e__4079 = vec__4075__4076;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__4077))) {
      var be2__4081 = cljs.core.truth_(function() {
        var or__3548__auto____4080 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____4080)) {
          return or__3548__auto____4080
        }else {
          return cljs.core.dominates.call(null, k__4077, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__4079 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__4081), k__4077, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__4077, " and ", cljs.core.first.call(null, be2__4081), ", and neither is preferred"));
      }
      return be2__4081
    }else {
      return null
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__4082)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__4082));
      return cljs.core.second.call(null, best_entry__4082)
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
    var and__3546__auto____4083 = mf;
    if(cljs.core.truth_(and__3546__auto____4083)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____4083
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____4084 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4084)) {
        return or__3548__auto____4084
      }else {
        var or__3548__auto____4085 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____4085)) {
          return or__3548__auto____4085
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4086 = mf;
    if(cljs.core.truth_(and__3546__auto____4086)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____4086
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____4087 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4087)) {
        return or__3548__auto____4087
      }else {
        var or__3548__auto____4088 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____4088)) {
          return or__3548__auto____4088
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4089 = mf;
    if(cljs.core.truth_(and__3546__auto____4089)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____4089
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____4090 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4090)) {
        return or__3548__auto____4090
      }else {
        var or__3548__auto____4091 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____4091)) {
          return or__3548__auto____4091
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4092 = mf;
    if(cljs.core.truth_(and__3546__auto____4092)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____4092
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____4093 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4093)) {
        return or__3548__auto____4093
      }else {
        var or__3548__auto____4094 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____4094)) {
          return or__3548__auto____4094
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4095 = mf;
    if(cljs.core.truth_(and__3546__auto____4095)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____4095
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____4096 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4096)) {
        return or__3548__auto____4096
      }else {
        var or__3548__auto____4097 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____4097)) {
          return or__3548__auto____4097
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4098 = mf;
    if(cljs.core.truth_(and__3546__auto____4098)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____4098
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____4099 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4099)) {
        return or__3548__auto____4099
      }else {
        var or__3548__auto____4100 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____4100)) {
          return or__3548__auto____4100
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4101 = mf;
    if(cljs.core.truth_(and__3546__auto____4101)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____4101
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____4102 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4102)) {
        return or__3548__auto____4102
      }else {
        var or__3548__auto____4103 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____4103)) {
          return or__3548__auto____4103
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._invoke = function _invoke(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4104 = mf;
    if(cljs.core.truth_(and__3546__auto____4104)) {
      return mf.cljs$core$IMultiFn$_invoke
    }else {
      return and__3546__auto____4104
    }
  }())) {
    return mf.cljs$core$IMultiFn$_invoke(mf, args)
  }else {
    return function() {
      var or__3548__auto____4105 = cljs.core._invoke[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4105)) {
        return or__3548__auto____4105
      }else {
        var or__3548__auto____4106 = cljs.core._invoke["_"];
        if(cljs.core.truth_(or__3548__auto____4106)) {
          return or__3548__auto____4106
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-invoke", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_invoke = function do_invoke(mf, dispatch_fn, args) {
  var dispatch_val__4107 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__4108 = cljs.core._get_method.call(null, mf, dispatch_val__4107);
  if(cljs.core.truth_(target_fn__4108)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__4107));
  }
  return cljs.core.apply.call(null, target_fn__4108, args)
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
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = function(mf) {
  var this__4109 = this;
  cljs.core.swap_BANG_.call(null, this__4109.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4109.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4109.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4109.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__4110 = this;
  cljs.core.swap_BANG_.call(null, this__4110.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__4110.method_cache, this__4110.method_table, this__4110.cached_hierarchy, this__4110.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__4111 = this;
  cljs.core.swap_BANG_.call(null, this__4111.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__4111.method_cache, this__4111.method_table, this__4111.cached_hierarchy, this__4111.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__4112 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__4112.cached_hierarchy), cljs.core.deref.call(null, this__4112.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__4112.method_cache, this__4112.method_table, this__4112.cached_hierarchy, this__4112.hierarchy)
  }
  var temp__3695__auto____4113 = cljs.core.deref.call(null, this__4112.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____4113)) {
    var target_fn__4114 = temp__3695__auto____4113;
    return target_fn__4114
  }else {
    var temp__3695__auto____4115 = cljs.core.find_and_cache_best_method.call(null, this__4112.name, dispatch_val, this__4112.hierarchy, this__4112.method_table, this__4112.prefer_table, this__4112.method_cache, this__4112.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____4115)) {
      var target_fn__4116 = temp__3695__auto____4115;
      return target_fn__4116
    }else {
      return cljs.core.deref.call(null, this__4112.method_table).call(null, this__4112.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__4117 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__4117.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__4117.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__4117.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__4117.method_cache, this__4117.method_table, this__4117.cached_hierarchy, this__4117.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__4118 = this;
  return cljs.core.deref.call(null, this__4118.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__4119 = this;
  return cljs.core.deref.call(null, this__4119.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = function(mf, args) {
  var this__4120 = this;
  return cljs.core.do_invoke.call(null, mf, this__4120.dispatch_fn, args)
};
cljs.core.MultiFn.prototype.call = function() {
  var G__4121__delegate = function(_, args) {
    return cljs.core._invoke.call(null, this, args)
  };
  var G__4121 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__4121__delegate.call(this, _, args)
  };
  G__4121.cljs$lang$maxFixedArity = 1;
  G__4121.cljs$lang$applyTo = function(arglist__4122) {
    var _ = cljs.core.first(arglist__4122);
    var args = cljs.core.rest(arglist__4122);
    return G__4121__delegate.call(this, _, args)
  };
  return G__4121
}();
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
domina.DomContent = {};
domina.nodes = function nodes(content) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2436 = content;
    if(cljs.core.truth_(and__3546__auto____2436)) {
      return content.domina$DomContent$nodes
    }else {
      return and__3546__auto____2436
    }
  }())) {
    return content.domina$DomContent$nodes(content)
  }else {
    return function() {
      var or__3548__auto____2437 = domina.nodes[goog.typeOf.call(null, content)];
      if(cljs.core.truth_(or__3548__auto____2437)) {
        return or__3548__auto____2437
      }else {
        var or__3548__auto____2438 = domina.nodes["_"];
        if(cljs.core.truth_(or__3548__auto____2438)) {
          return or__3548__auto____2438
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2439 = nodeseq;
    if(cljs.core.truth_(and__3546__auto____2439)) {
      return nodeseq.domina$DomContent$single_node
    }else {
      return and__3546__auto____2439
    }
  }())) {
    return nodeseq.domina$DomContent$single_node(nodeseq)
  }else {
    return function() {
      var or__3548__auto____2440 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(cljs.core.truth_(or__3548__auto____2440)) {
        return or__3548__auto____2440
      }else {
        var or__3548__auto____2441 = domina.single_node["_"];
        if(cljs.core.truth_(or__3548__auto____2441)) {
          return or__3548__auto____2441
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
  if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.t2442))) {
    domina.t2442 = function(class_name, by_class) {
      this.class_name = class_name;
      this.by_class = by_class
    };
    domina.t2442.prototype.domina$DomContent$ = true;
    domina.t2442.prototype.domina$DomContent$nodes = function(_) {
      var this__2443 = this;
      return goog.dom.getElementsByClass.call(null, cljs.core.name.call(null, this__2443.class_name))
    };
    domina.t2442.prototype.domina$DomContent$single_node = function(_) {
      var this__2444 = this;
      return goog.dom.getElementByClass.call(null, cljs.core.name.call(null, this__2444.class_name))
    }
  }else {
  }
  return new domina.t2442(class_name, by_class)
};
domina.children = function children(content) {
  return cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__2445_SHARP_) {
    return p1__2445_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__2446_SHARP_, p2__2447_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__2446_SHARP_, p2__2447_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2449_SHARP_, p2__2448_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__2448_SHARP_, p1__2449_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2451_SHARP_, p2__2450_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__2450_SHARP_, p1__2451_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2453_SHARP_, p2__2452_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__2452_SHARP_, p1__2453_SHARP_)
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
  var s__2454 = goog.style.getStyle.call(null, domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(cljs.core.not.call(null, goog.string.isEmptySafe.call(null, s__2454)))) {
    return s__2454
  }else {
    return null
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function set_style_BANG_(content, name, value) {
  var G__2455__2456 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2455__2456)) {
    var n__2457 = cljs.core.first.call(null, G__2455__2456);
    var G__2455__2458 = G__2455__2456;
    while(true) {
      goog.style.setStyle.call(null, n__2457, cljs.core.name.call(null, name), value);
      var temp__3698__auto____2459 = cljs.core.next.call(null, G__2455__2458);
      if(cljs.core.truth_(temp__3698__auto____2459)) {
        var G__2455__2460 = temp__3698__auto____2459;
        var G__2461 = cljs.core.first.call(null, G__2455__2460);
        var G__2462 = G__2455__2460;
        n__2457 = G__2461;
        G__2455__2458 = G__2462;
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
  var G__2463__2464 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2463__2464)) {
    var n__2465 = cljs.core.first.call(null, G__2463__2464);
    var G__2463__2466 = G__2463__2464;
    while(true) {
      n__2465.setAttribute(cljs.core.name.call(null, name), value);
      var temp__3698__auto____2467 = cljs.core.next.call(null, G__2463__2466);
      if(cljs.core.truth_(temp__3698__auto____2467)) {
        var G__2463__2468 = temp__3698__auto____2467;
        var G__2469 = cljs.core.first.call(null, G__2463__2468);
        var G__2470 = G__2463__2468;
        n__2465 = G__2469;
        G__2463__2466 = G__2470;
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
    var vec__2471__2472 = pair.split(/\s*:\s*/);
    var k__2473 = cljs.core.nth.call(null, vec__2471__2472, 0, null);
    var v__2474 = cljs.core.nth.call(null, vec__2471__2472, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____2475 = k__2473;
      if(cljs.core.truth_(and__3546__auto____2475)) {
        return v__2474
      }else {
        return and__3546__auto____2475
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__2473.toLowerCase()), v__2474)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  return domina.parse_style_attributes.call(null, domina.attr.call(null, content, "style"))
};
domina.attrs = function attrs(content) {
  var node__2477 = domina.single_node.call(null, content);
  var attrs__2478 = node__2477.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.map.call(null, function(p1__2476_SHARP_) {
    var attr__2479 = attrs__2478.item(p1__2476_SHARP_);
    return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null, attr__2479.nodeName.toLowerCase())], [attr__2479.nodeValue])
  }, cljs.core.range.call(null, attrs__2478.length)))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__2480__2481 = cljs.core.seq.call(null, styles);
  if(cljs.core.truth_(G__2480__2481)) {
    var G__2483__2485 = cljs.core.first.call(null, G__2480__2481);
    var vec__2484__2486 = G__2483__2485;
    var name__2487 = cljs.core.nth.call(null, vec__2484__2486, 0, null);
    var value__2488 = cljs.core.nth.call(null, vec__2484__2486, 1, null);
    var G__2480__2489 = G__2480__2481;
    var G__2483__2490 = G__2483__2485;
    var G__2480__2491 = G__2480__2489;
    while(true) {
      var vec__2492__2493 = G__2483__2490;
      var name__2494 = cljs.core.nth.call(null, vec__2492__2493, 0, null);
      var value__2495 = cljs.core.nth.call(null, vec__2492__2493, 1, null);
      var G__2480__2496 = G__2480__2491;
      domina.set_style_BANG_.call(null, content, name__2494, value__2495);
      var temp__3698__auto____2497 = cljs.core.next.call(null, G__2480__2496);
      if(cljs.core.truth_(temp__3698__auto____2497)) {
        var G__2480__2498 = temp__3698__auto____2497;
        var G__2499 = cljs.core.first.call(null, G__2480__2498);
        var G__2500 = G__2480__2498;
        G__2483__2490 = G__2499;
        G__2480__2491 = G__2500;
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
  var G__2501__2502 = cljs.core.seq.call(null, attrs);
  if(cljs.core.truth_(G__2501__2502)) {
    var G__2504__2506 = cljs.core.first.call(null, G__2501__2502);
    var vec__2505__2507 = G__2504__2506;
    var name__2508 = cljs.core.nth.call(null, vec__2505__2507, 0, null);
    var value__2509 = cljs.core.nth.call(null, vec__2505__2507, 1, null);
    var G__2501__2510 = G__2501__2502;
    var G__2504__2511 = G__2504__2506;
    var G__2501__2512 = G__2501__2510;
    while(true) {
      var vec__2513__2514 = G__2504__2511;
      var name__2515 = cljs.core.nth.call(null, vec__2513__2514, 0, null);
      var value__2516 = cljs.core.nth.call(null, vec__2513__2514, 1, null);
      var G__2501__2517 = G__2501__2512;
      domina.set_attr_BANG_.call(null, content, name__2515, value__2516);
      var temp__3698__auto____2518 = cljs.core.next.call(null, G__2501__2517);
      if(cljs.core.truth_(temp__3698__auto____2518)) {
        var G__2501__2519 = temp__3698__auto____2518;
        var G__2520 = cljs.core.first.call(null, G__2501__2519);
        var G__2521 = G__2501__2519;
        G__2504__2511 = G__2520;
        G__2501__2512 = G__2521;
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
  var G__2522__2523 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2522__2523)) {
    var node__2524 = cljs.core.first.call(null, G__2522__2523);
    var G__2522__2525 = G__2522__2523;
    while(true) {
      goog.dom.classes.add.call(null, node__2524, class$);
      var temp__3698__auto____2526 = cljs.core.next.call(null, G__2522__2525);
      if(cljs.core.truth_(temp__3698__auto____2526)) {
        var G__2522__2527 = temp__3698__auto____2526;
        var G__2528 = cljs.core.first.call(null, G__2522__2527);
        var G__2529 = G__2522__2527;
        node__2524 = G__2528;
        G__2522__2525 = G__2529;
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
  var G__2530__2531 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2530__2531)) {
    var node__2532 = cljs.core.first.call(null, G__2530__2531);
    var G__2530__2533 = G__2530__2531;
    while(true) {
      goog.dom.classes.remove.call(null, node__2532, class$);
      var temp__3698__auto____2534 = cljs.core.next.call(null, G__2530__2533);
      if(cljs.core.truth_(temp__3698__auto____2534)) {
        var G__2530__2535 = temp__3698__auto____2534;
        var G__2536 = cljs.core.first.call(null, G__2530__2535);
        var G__2537 = G__2530__2535;
        node__2532 = G__2536;
        G__2530__2533 = G__2537;
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
  var text__2538 = function(content) {
    return text.call(null, content, true)
  };
  var text__2539 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.dom.getTextContent.call(null, domina.single_node.call(null, content))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node.call(null, content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__2538.call(this, content);
      case 2:
        return text__2539.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__2541__2542 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2541__2542)) {
    var node__2543 = cljs.core.first.call(null, G__2541__2542);
    var G__2541__2544 = G__2541__2542;
    while(true) {
      goog.dom.setTextContent.call(null, node__2543, value);
      var temp__3698__auto____2545 = cljs.core.next.call(null, G__2541__2544);
      if(cljs.core.truth_(temp__3698__auto____2545)) {
        var G__2541__2546 = temp__3698__auto____2545;
        var G__2547 = cljs.core.first.call(null, G__2541__2546);
        var G__2548 = G__2541__2546;
        node__2543 = G__2547;
        G__2541__2544 = G__2548;
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
  var G__2549__2550 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2549__2550)) {
    var node__2551 = cljs.core.first.call(null, G__2549__2550);
    var G__2549__2552 = G__2549__2550;
    while(true) {
      goog.dom.forms.setValue.call(null, node__2551, value);
      var temp__3698__auto____2553 = cljs.core.next.call(null, G__2549__2552);
      if(cljs.core.truth_(temp__3698__auto____2553)) {
        var G__2549__2554 = temp__3698__auto____2553;
        var G__2555 = cljs.core.first.call(null, G__2549__2554);
        var G__2556 = G__2549__2554;
        node__2551 = G__2555;
        G__2549__2552 = G__2556;
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
  var G__2557__2558 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2557__2558)) {
    var node__2559 = cljs.core.first.call(null, G__2557__2558);
    var G__2557__2560 = G__2557__2558;
    while(true) {
      node__2559.innerHTML = value;
      var temp__3698__auto____2561 = cljs.core.next.call(null, G__2557__2560);
      if(cljs.core.truth_(temp__3698__auto____2561)) {
        var G__2557__2562 = temp__3698__auto____2561;
        var G__2563 = cljs.core.first.call(null, G__2557__2562);
        var G__2564 = G__2557__2562;
        node__2559 = G__2563;
        G__2557__2560 = G__2564;
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
  var parents__2565 = domina.nodes.call(null, parent_content);
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, parents__2565)))) {
    var G__2566__2567 = cljs.core.seq.call(null, domina.nodes.call(null, child_content));
    if(cljs.core.truth_(G__2566__2567)) {
      var child__2568 = cljs.core.first.call(null, G__2566__2567);
      var G__2566__2569 = G__2566__2567;
      while(true) {
        f.call(null, cljs.core.first.call(null, parents__2565), child__2568);
        var temp__3698__auto____2570 = cljs.core.next.call(null, G__2566__2569);
        if(cljs.core.truth_(temp__3698__auto____2570)) {
          var G__2566__2571 = temp__3698__auto____2570;
          var G__2584 = cljs.core.first.call(null, G__2566__2571);
          var G__2585 = G__2566__2571;
          child__2568 = G__2584;
          G__2566__2569 = G__2585;
          continue
        }else {
        }
        break
      }
    }else {
    }
    var G__2572__2574 = cljs.core.seq.call(null, cljs.core.rest.call(null, parents__2565));
    if(cljs.core.truth_(G__2572__2574)) {
      var parent__2575 = cljs.core.first.call(null, G__2572__2574);
      var G__2572__2576 = G__2572__2574;
      while(true) {
        var G__2573__2577 = cljs.core.seq.call(null, domina.nodes.call(null, domina.clone.call(null, child_content)));
        if(cljs.core.truth_(G__2573__2577)) {
          var child__2578 = cljs.core.first.call(null, G__2573__2577);
          var G__2573__2579 = G__2573__2577;
          while(true) {
            f.call(null, parent__2575, child__2578);
            var temp__3698__auto____2580 = cljs.core.next.call(null, G__2573__2579);
            if(cljs.core.truth_(temp__3698__auto____2580)) {
              var G__2573__2581 = temp__3698__auto____2580;
              var G__2586 = cljs.core.first.call(null, G__2573__2581);
              var G__2587 = G__2573__2581;
              child__2578 = G__2586;
              G__2573__2579 = G__2587;
              continue
            }else {
            }
            break
          }
        }else {
        }
        var temp__3698__auto____2582 = cljs.core.next.call(null, G__2572__2576);
        if(cljs.core.truth_(temp__3698__auto____2582)) {
          var G__2572__2583 = temp__3698__auto____2582;
          var G__2588 = cljs.core.first.call(null, G__2572__2583);
          var G__2589 = G__2572__2583;
          parent__2575 = G__2588;
          G__2572__2576 = G__2589;
          continue
        }else {
          return null
        }
        break
      }
    }else {
      return null
    }
  }else {
    return null
  }
};
domina.lazy_nodelist = function() {
  var lazy_nodelist = null;
  var lazy_nodelist__2590 = function(nl) {
    return lazy_nodelist.call(null, nl, 0)
  };
  var lazy_nodelist__2591 = function(nl, n) {
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
        return lazy_nodelist__2590.call(this, nl);
      case 2:
        return lazy_nodelist__2591.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return lazy_nodelist
}();
domina.DomContent["_"] = true;
domina.nodes["_"] = function(content) {
  return cljs.core.seq.call(null, content)
};
domina.single_node["_"] = function(content) {
  return cljs.core.first.call(null, content)
};
Node.prototype.domina$DomContent$ = true;
Node.prototype.domina$DomContent$nodes = function(content) {
  return cljs.core.cons.call(null, content)
};
Node.prototype.domina$DomContent$single_node = function(content) {
  return content
};
domina.DomContent["string"] = true;
domina.nodes["string"] = function(s) {
  return cljs.core.cons.call(null, goog.dom.htmlToDocumentFragment.call(null, s))
};
domina.single_node["string"] = function(s) {
  return goog.dom.htmlToDocumentFragment.call(null, s)
};
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = function(nodelist) {
  return domina.lazy_nodelist.call(null, nodelist)
};
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = function() {
  var G__2593 = null;
  var G__2593__2594 = function(nodelist, n) {
    return nodelist.item(n)
  };
  var G__2593__2595 = function(nodelist, n, not_found) {
    if(cljs.core.truth_(nodelist.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, nodelist, n)
    }
  };
  G__2593 = function(nodelist, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2593__2594.call(this, nodelist, n);
      case 3:
        return G__2593__2595.call(this, nodelist, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2593
}();
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = function(nodelist) {
  return nodelist.length
};
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = function(coll) {
  return domina.lazy_nodelist.call(null, coll)
};
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = function() {
  var G__2597 = null;
  var G__2597__2598 = function(coll, n) {
    return coll.item(n)
  };
  var G__2597__2599 = function(coll, n, not_found) {
    if(cljs.core.truth_(coll.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, coll, n)
    }
  };
  G__2597 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2597__2598.call(this, coll, n);
      case 3:
        return G__2597__2599.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2597
}();
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = function(coll) {
  return coll.length
};
goog.provide("domina.xpath");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.dom");
domina.xpath.select_node_STAR_ = function select_node_STAR_(path, node, technique_1, technique_2) {
  var doc__2419 = goog.dom.getOwnerDocument.call(null, node);
  if(cljs.core.truth_(function() {
    var and__3546__auto____2420 = node.selectSingleNode;
    if(cljs.core.truth_(and__3546__auto____2420)) {
      return doc__2419.setProperty
    }else {
      return and__3546__auto____2420
    }
  }())) {
    doc__2419.setProperty("SelectionLanguage", "XPath");
    return technique_1.call(null, node, path)
  }else {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2421 = doc__2419.createNSResolver;
      if(cljs.core.truth_(and__3546__auto____2421)) {
        return doc__2419.evaluate
      }else {
        return and__3546__auto____2421
      }
    }())) {
      var resolver__2422 = doc__2419.createNSResolver(doc__2419.documentElement);
      return technique_2.call(null, resolver__2422, doc__2419, node, path)
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw new domina.xpath.Error("Could not find XPath support in this browser.");
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
    var result__2423 = doc.evaluate(expr, node, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__2423.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__2424 = doc.evaluate(expr, node, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__2425 = result__2424.snapshotLength;
    var i__2426 = 0;
    var acc__2427 = null;
    while(true) {
      if(cljs.core.truth_(i__2426 < num_results__2425)) {
        var G__2428 = i__2426 + 1;
        var G__2429 = cljs.core.cons.call(null, result__2424.snapshotItem(i__2426), acc__2427);
        i__2426 = G__2428;
        acc__2427 = G__2429;
        continue
      }else {
        return acc__2427
      }
      break
    }
  })
};
domina.xpath.xpath = function() {
  var xpath = null;
  var xpath__2433 = function(expr) {
    return xpath.call(null, document, expr)
  };
  var xpath__2434 = function(base, expr) {
    if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.xpath.t2430))) {
      domina.xpath.t2430 = function(expr, base, xpath) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath
      };
      domina.xpath.t2430.prototype.domina$DomContent$ = true;
      domina.xpath.t2430.prototype.domina$DomContent$nodes = function(_) {
        var this__2431 = this;
        return cljs.core.mapcat.call(null, cljs.core.partial.call(null, domina.xpath.select_nodes, this__2431.expr), domina.nodes.call(null, this__2431.base))
      };
      domina.xpath.t2430.prototype.domina$DomContent$single_node = function(_) {
        var this__2432 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.partial.call(null, domina.xpath.select_node, this__2432.expr), domina.nodes.call(null, this__2432.base))))
      }
    }else {
    }
    return new domina.xpath.t2430(expr, base, xpath)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__2433.call(this, base);
      case 2:
        return xpath__2434.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return xpath
}();
goog.provide("domina.test_ie");
goog.require("cljs.core");
goog.require("domina");
goog.require("domina.xpath");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
goog.require("domina");
domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p>\n\n   Some text.  \n  </p>");
domina.test_ie.x = domina.xpath.xpath.call(null, "//p");
domina.test_ie.n = domina.single_node.call(null, domina.test_ie.x);
domina.test_ie.t = domina.text.call(null, domina.test_ie.x);
domina.test_ie.t2 = domina.text.call(null, domina.test_ie.n);
alert.call(null, domina.test_ie.t);
alert.call(null, domina.test_ie.t2);
