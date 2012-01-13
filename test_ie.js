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
goog.provide("cybozu.xpath");
(function() {
  var undefined = void 0;
  var defaultConfig = {targetFrame:undefined, exportInstaller:false, useNative:true, useInnerText:true};
  var config;
  if(window.jsxpath) {
    config = window.jsxpath
  }else {
    var scriptElms = document.getElementsByTagName("script");
    var scriptElm = scriptElms[scriptElms.length - 1];
    var scriptSrc = scriptElm.src;
    config = {};
    var scriptSrcMatchResult = scriptSrc.match(/\?(.*)$/);
    if(scriptSrcMatchResult) {
      var configStrings = scriptSrcMatchResult[1].split("&");
      for(var i = 0, l = configStrings.length;i < l;i++) {
        var configString = configStrings[i];
        var configStringSplited = configString.split("=");
        var configName = configStringSplited[0];
        var configValue = configStringSplited[1];
        if(configValue == undefined) {
          configValue == true
        }else {
          if(configValue == "false" || /^-?\d+$/.test(configValue)) {
            configValue = eval(configValue)
          }
        }
        config[configName] = configValue
      }
    }
  }
  for(var n in defaultConfig) {
    if(!(n in config)) {
      config[n] = defaultConfig[n]
    }
  }
  config.hasNative = !!(document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null));
  if(config.hasNative && config.useNative && !config.exportInstaller) {
    return
  }
  var BinaryExpr;
  var FilterExpr;
  var FunctionCall;
  var Literal;
  var NameTest;
  var NodeSet;
  var NodeType;
  var NodeUtil;
  var Number;
  var PathExpr;
  var Step;
  var UnaryExpr;
  var UnionExpr;
  var VariableReference;
  var uai = new function() {
    var ua = navigator.userAgent;
    if(RegExp == undefined) {
      if(ua.indexOf("Opera") >= 0) {
        this.opera = true
      }else {
        if(ua.indexOf("Netscape") >= 0) {
          this.netscape = true
        }else {
          if(ua.indexOf("Mozilla/") == 0) {
            this.mozilla = true
          }else {
            this.unknown = true
          }
        }
      }
      if(ua.indexOf("Gecko/") >= 0) {
        this.gecko = true
      }
      if(ua.indexOf("Win") >= 0) {
        this.windows = true
      }else {
        if(ua.indexOf("Mac") >= 0) {
          this.mac = true
        }else {
          if(ua.indexOf("Linux") >= 0) {
            this.linux = true
          }else {
            if(ua.indexOf("BSD") >= 0) {
              this.bsd = true
            }else {
              if(ua.indexOf("SunOS") >= 0) {
                this.sunos = true
              }
            }
          }
        }
      }
    }else {
      if(/AppleWebKit\/(\d+(?:\.\d+)*)/.test(ua)) {
        this.applewebkit = RegExp.$1;
        if(RegExp.$1.charAt(0) == 4) {
          this.applewebkit2 = true
        }else {
          this.applewebkit3 = true
        }
      }else {
        if(typeof Components == "object" && (/Gecko\/(\d{8})/.test(ua) || navigator.product == "Gecko" && /^(\d{8})$/.test(navigator.productSub))) {
          this.gecko = RegExp.$1
        }
      }
      if(typeof opera == "object" && typeof opera.version == "function") {
        this.opera = opera.version();
        this["opera" + this.opera[0] + this.opera[2]] = true
      }else {
        if(typeof opera == "object" && /Opera[\/ ](\d+\.\d+)/.test(ua)) {
          this.opera = RegExp.$1
        }else {
          if(this.ie) {
          }else {
            if(/Safari\/(\d+(?:\.\d+)*)/.test(ua)) {
              this.safari = RegExp.$1
            }else {
              if(/NetFront\/(\d+(?:\.\d+)*)/.test(ua)) {
                this.netfront = RegExp.$1
              }else {
                if(/Konqueror\/(\d+(?:\.\d+)*)/.test(ua)) {
                  this.konqueror = RegExp.$1
                }else {
                  if(ua.indexOf("(compatible;") < 0 && /^Mozilla\/(\d+\.\d+)/.test(ua)) {
                    this.mozilla = RegExp.$1;
                    if(/\([^(]*rv:(\d+(?:\.\d+)*).*?\)/.test(ua)) {
                      this.mozillarv = RegExp.$1
                    }
                    if(/Firefox\/(\d+(?:\.\d+)*)/.test(ua)) {
                      this.firefox = RegExp.$1
                    }else {
                      if(/Netscape\d?\/(\d+(?:\.\d+)*)/.test(ua)) {
                        this.netscape = RegExp.$1
                      }
                    }
                  }else {
                    this.unknown = true
                  }
                }
              }
            }
          }
        }
      }
      if(ua.indexOf("Win 9x 4.90") >= 0) {
        this.windows = "ME"
      }else {
        if(/Win(?:dows)? ?(NT ?(\d+\.\d+)?|\d+|ME|Vista|XP)/.test(ua)) {
          this.windows = RegExp.$1;
          if(RegExp.$2) {
            this.winnt = RegExp.$2
          }else {
            switch(RegExp.$1) {
              case "2000":
                this.winnt = "5.0";
                break;
              case "XP":
                this.winnt = "5.1";
                break;
              case "Vista":
                this.winnt = "6.0";
                break
            }
          }
        }else {
          if(ua.indexOf("Mac") >= 0) {
            this.mac = true
          }else {
            if(ua.indexOf("Linux") >= 0) {
              this.linux = true
            }else {
              if(/(\w*BSD)/.test(ua)) {
                this.bsd = RegExp.$1
              }else {
                if(ua.indexOf("SunOS") >= 0) {
                  this.sunos = true
                }
              }
            }
          }
        }
      }
    }
  };
  var Lexer = function(source) {
    var proto = Lexer.prototype;
    var tokens = source.match(proto.regs.token);
    for(var i = 0, l = tokens.length;i < l;i++) {
      if(proto.regs.strip.test(tokens[i])) {
        tokens.splice(i, 1)
      }
    }
    for(var n in proto) {
      tokens[n] = proto[n]
    }
    tokens.index = 0;
    return tokens
  };
  Lexer.prototype.regs = {token:/\$?(?:(?![0-9-])[\w-]+:)?(?![0-9-])[\w-]+|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|(?![0-9-])[\w-]+:\*|\s+|./g, strip:/^\s/};
  Lexer.prototype.peek = function(i) {
    return this[this.index + (i || 0)]
  };
  Lexer.prototype.next = function() {
    return this[this.index++]
  };
  Lexer.prototype.back = function() {
    this.index--
  };
  Lexer.prototype.empty = function() {
    return this.length <= this.index
  };
  var Ctx = function(node, position, last) {
    this.node = node;
    this.position = position || 1;
    this.last = last || 1
  };
  var BaseExpr = function() {
  };
  BaseExpr.prototype.number = function(ctx) {
    var exrs = this.evaluate(ctx);
    if(exrs.isNodeSet) {
      return exrs.number()
    }
    return+exrs
  };
  BaseExpr.prototype.string = function(ctx) {
    var exrs = this.evaluate(ctx);
    if(exrs.isNodeSet) {
      return exrs.string()
    }
    return"" + exrs
  };
  BaseExpr.prototype.bool = function(ctx) {
    var exrs = this.evaluate(ctx);
    if(exrs.isNodeSet) {
      return exrs.bool()
    }
    return!!exrs
  };
  var BaseExprHasPredicates = function() {
  };
  BaseExprHasPredicates.parsePredicates = function(lexer, expr) {
    while(lexer.peek() == "[") {
      lexer.next();
      if(lexer.empty()) {
        throw Error("missing predicate expr");
      }
      var predicate = BinaryExpr.parse(lexer);
      expr.predicate(predicate);
      if(lexer.empty()) {
        throw Error("unclosed predicate expr");
      }
      if(lexer.next() != "]") {
        lexer.back();
        throw Error("bad token: " + lexer.next());
      }
    }
  };
  BaseExprHasPredicates.prototype = new BaseExpr;
  BaseExprHasPredicates.prototype.evaluatePredicates = function(nodeset, start) {
    var predicates, predicate, nodes, node, nodeset, position, reverse;
    reverse = this.reverse;
    predicates = this.predicates;
    nodeset.sort();
    for(var i = start || 0, l0 = predicates.length;i < l0;i++) {
      predicate = predicates[i];
      var deleteIndexes = [];
      var nodes = nodeset.list();
      for(var j = 0, l1 = nodes.length;j < l1;j++) {
        position = reverse ? l1 - j : j + 1;
        exrs = predicate.evaluate(new Ctx(nodes[j], position, l1));
        switch(typeof exrs) {
          case "number":
            exrs = position == exrs;
            break;
          case "string":
            exrs = !!exrs;
            break;
          case "object":
            exrs = exrs.bool();
            break
        }
        if(!exrs) {
          deleteIndexes.push(j)
        }
      }
      for(var j = deleteIndexes.length - 1, l1 = 0;j >= l1;j--) {
        nodeset.del(deleteIndexes[j])
      }
    }
    return nodeset
  };
  if(!window.BinaryExpr && window.defaultConfig) {
    window.BinaryExpr = null
  }
  BinaryExpr = function(op, left, right, datatype) {
    this.op = op;
    this.left = left;
    this.right = right;
    this.datatype = BinaryExpr.ops[op][2];
    this.needContextPosition = left.needContextPosition || right.needContextPosition;
    this.needContextNode = left.needContextNode || right.needContextNode;
    if(this.op == "=") {
      if(!right.needContextNode && !right.needContextPosition && right.datatype != "nodeset" && right.datatype != "void" && left.quickAttr) {
        this.quickAttr = true;
        this.attrName = left.attrName;
        this.attrValueExpr = right
      }else {
        if(!left.needContextNode && !left.needContextPosition && left.datatype != "nodeset" && left.datatype != "void" && right.quickAttr) {
          this.quickAttr = true;
          this.attrName = right.attrName;
          this.attrValueExpr = left
        }
      }
    }
  };
  BinaryExpr.compare = function(op, comp, left, right, ctx) {
    var type, lnodes, rnodes, nodes, nodeset, primitive;
    left = left.evaluate(ctx);
    right = right.evaluate(ctx);
    if(left.isNodeSet && right.isNodeSet) {
      lnodes = left.list();
      rnodes = right.list();
      for(var i = 0, l0 = lnodes.length;i < l0;i++) {
        for(var j = 0, l1 = rnodes.length;j < l1;j++) {
          if(comp(NodeUtil.to("string", lnodes[i]), NodeUtil.to("string", rnodes[j]))) {
            return true
          }
        }
      }
      return false
    }
    if(left.isNodeSet || right.isNodeSet) {
      if(left.isNodeSet) {
        nodeset = left, primitive = right
      }else {
        nodeset = right, primitive = left
      }
      nodes = nodeset.list();
      type = typeof primitive;
      for(var i = 0, l = nodes.length;i < l;i++) {
        if(comp(NodeUtil.to(type, nodes[i]), primitive)) {
          return true
        }
      }
      return false
    }
    if(op == "=" || op == "!=") {
      if(typeof left == "boolean" || typeof right == "boolean") {
        return comp(!!left, !!right)
      }
      if(typeof left == "number" || typeof right == "number") {
        return comp(+left, +right)
      }
      return comp(left, right)
    }
    return comp(+left, +right)
  };
  BinaryExpr.ops = {"div":[6, function(left, right, ctx) {
    return left.number(ctx) / right.number(ctx)
  }, "number"], "mod":[6, function(left, right, ctx) {
    return left.number(ctx) % right.number(ctx)
  }, "number"], "*":[6, function(left, right, ctx) {
    return left.number(ctx) * right.number(ctx)
  }, "number"], "+":[5, function(left, right, ctx) {
    return left.number(ctx) + right.number(ctx)
  }, "number"], "-":[5, function(left, right, ctx) {
    return left.number(ctx) - right.number(ctx)
  }, "number"], "<":[4, function(left, right, ctx) {
    return BinaryExpr.compare("<", function(a, b) {
      return a < b
    }, left, right, ctx)
  }, "boolean"], ">":[4, function(left, right, ctx) {
    return BinaryExpr.compare(">", function(a, b) {
      return a > b
    }, left, right, ctx)
  }, "boolean"], "<=":[4, function(left, right, ctx) {
    return BinaryExpr.compare("<=", function(a, b) {
      return a <= b
    }, left, right, ctx)
  }, "boolean"], ">=":[4, function(left, right, ctx) {
    return BinaryExpr.compare(">=", function(a, b) {
      return a >= b
    }, left, right, ctx)
  }, "boolean"], "=":[3, function(left, right, ctx) {
    return BinaryExpr.compare("=", function(a, b) {
      return a == b
    }, left, right, ctx)
  }, "boolean"], "!=":[3, function(left, right, ctx) {
    return BinaryExpr.compare("!=", function(a, b) {
      return a != b
    }, left, right, ctx)
  }, "boolean"], "and":[2, function(left, right, ctx) {
    return left.bool(ctx) && right.bool(ctx)
  }, "boolean"], "or":[1, function(left, right, ctx) {
    return left.bool(ctx) || right.bool(ctx)
  }, "boolean"]};
  BinaryExpr.parse = function(lexer) {
    var op, precedence, info, expr, stack = [], index = lexer.index;
    while(true) {
      if(lexer.empty()) {
        throw Error("missing right expression");
      }
      expr = UnaryExpr.parse(lexer);
      op = lexer.next();
      if(!op) {
        break
      }
      info = this.ops[op];
      precedence = info && info[0];
      if(!precedence) {
        lexer.back();
        break
      }
      while(stack.length && precedence <= this.ops[stack[stack.length - 1]][0]) {
        expr = new BinaryExpr(stack.pop(), stack.pop(), expr)
      }
      stack.push(expr, op)
    }
    while(stack.length) {
      expr = new BinaryExpr(stack.pop(), stack.pop(), expr)
    }
    return expr
  };
  BinaryExpr.prototype = new BaseExpr;
  BinaryExpr.prototype.evaluate = function(ctx) {
    return BinaryExpr.ops[this.op][1](this.left, this.right, ctx)
  };
  BinaryExpr.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "binary: " + this.op + "\n";
    indent += "    ";
    t += this.left.show(indent);
    t += this.right.show(indent);
    return t
  };
  if(!window.UnaryExpr && window.defaultConfig) {
    window.UnaryExpr = null
  }
  UnaryExpr = function(op, expr) {
    this.op = op;
    this.expr = expr;
    this.needContextPosition = expr.needContextPosition;
    this.needContextNode = expr.needContextNode
  };
  UnaryExpr.ops = {"-":1};
  UnaryExpr.parse = function(lexer) {
    var token;
    if(this.ops[lexer.peek()]) {
      return new UnaryExpr(lexer.next(), UnaryExpr.parse(lexer))
    }else {
      return UnionExpr.parse(lexer)
    }
  };
  UnaryExpr.prototype = new BaseExpr;
  UnaryExpr.prototype.datatype = "number";
  UnaryExpr.prototype.evaluate = function(ctx) {
    return-this.expr.number(ctx)
  };
  UnaryExpr.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "unary: " + this.op + "\n";
    indent += "    ";
    t += this.expr.show(indent);
    return t
  };
  if(!window.UnionExpr && window.defaultConfig) {
    window.UnionExpr = null
  }
  UnionExpr = function() {
    this.paths = []
  };
  UnionExpr.ops = {"|":1};
  UnionExpr.parse = function(lexer) {
    var union, expr;
    expr = PathExpr.parse(lexer);
    if(!this.ops[lexer.peek()]) {
      return expr
    }
    union = new UnionExpr;
    union.path(expr);
    while(true) {
      if(!this.ops[lexer.next()]) {
        break
      }
      if(lexer.empty()) {
        throw Error("missing next union location path");
      }
      union.path(PathExpr.parse(lexer))
    }
    lexer.back();
    return union
  };
  UnionExpr.prototype = new BaseExpr;
  UnionExpr.prototype.datatype = "nodeset";
  UnionExpr.prototype.evaluate = function(ctx) {
    var paths = this.paths;
    var nodeset = new NodeSet;
    for(var i = 0, l = paths.length;i < l;i++) {
      var exrs = paths[i].evaluate(ctx);
      if(!exrs.isNodeSet) {
        throw Error("PathExpr must be nodeset");
      }
      nodeset.merge(exrs)
    }
    return nodeset
  };
  UnionExpr.prototype.path = function(path) {
    this.paths.push(path);
    if(path.needContextPosition) {
      this.needContextPosition = true
    }
    if(path.needContextNode) {
      this.needContextNode = true
    }
  };
  UnionExpr.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "union:" + "\n";
    indent += "    ";
    for(var i = 0;i < this.paths.length;i++) {
      t += this.paths[i].show(indent)
    }
    return t
  };
  if(!window.PathExpr && window.defaultConfig) {
    window.PathExpr = null
  }
  PathExpr = function(filter) {
    this.filter = filter;
    this.steps = [];
    this.datatype = filter.datatype;
    this.needContextPosition = filter.needContextPosition;
    this.needContextNode = filter.needContextNode
  };
  PathExpr.ops = {"//":1, "/":1};
  PathExpr.parse = function(lexer) {
    var op, expr, path, token;
    if(this.ops[lexer.peek()]) {
      op = lexer.next();
      token = lexer.peek();
      if(op == "/" && (lexer.empty() || token != "." && token != ".." && token != "@" && token != "*" && !/(?![0-9])[\w]/.test(token))) {
        return FilterExpr.root()
      }
      path = new PathExpr(FilterExpr.root());
      if(lexer.empty()) {
        throw Error("missing next location step");
      }
      expr = Step.parse(lexer);
      path.step(op, expr)
    }else {
      expr = FilterExpr.parse(lexer);
      if(!expr) {
        expr = Step.parse(lexer);
        path = new PathExpr(FilterExpr.context());
        path.step("/", expr)
      }else {
        if(!this.ops[lexer.peek()]) {
          return expr
        }else {
          path = new PathExpr(expr)
        }
      }
    }
    while(true) {
      if(!this.ops[lexer.peek()]) {
        break
      }
      op = lexer.next();
      if(lexer.empty()) {
        throw Error("missing next location step");
      }
      path.step(op, Step.parse(lexer))
    }
    return path
  };
  PathExpr.prototype = new BaseExpr;
  PathExpr.prototype.evaluate = function(ctx) {
    var nodeset = this.filter.evaluate(ctx);
    if(!nodeset.isNodeSet) {
      throw Exception("Filter nodeset must be nodeset type");
    }
    var steps = this.steps;
    for(var i = 0, l0 = steps.length;i < l0 && nodeset.length;i++) {
      var step = steps[i][1];
      var reverse = step.reverse;
      var iter = nodeset.iterator(reverse);
      var prevNodeset = nodeset;
      nodeset = null;
      var node, next;
      if(!step.needContextPosition && step.axis == "following") {
        for(node = iter();next = iter();node = next) {
          if(uai.applewebkit2) {
            var contains = false;
            var ancestor = next;
            do {
              if(ancestor == node) {
                contains = true;
                break
              }
            }while(ancestor = ancestor.parentNode);
            if(!contains) {
              break
            }
          }else {
            try {
              if(!node.contains(next)) {
                break
              }
            }catch(e) {
              if(!(next.compareDocumentPosition(node) & 8)) {
                break
              }
            }
          }
        }
        nodeset = step.evaluate(new Ctx(node))
      }else {
        if(!step.needContextPosition && step.axis == "preceding") {
          node = iter();
          nodeset = step.evaluate(new Ctx(node))
        }else {
          node = iter();
          var j = 0;
          nodeset = step.evaluate(new Ctx(node), false, prevNodeset, j);
          while(node = iter()) {
            j++;
            nodeset.merge(step.evaluate(new Ctx(node), false, prevNodeset, j))
          }
        }
      }
    }
    return nodeset
  };
  PathExpr.prototype.step = function(op, step) {
    step.op = op;
    this.steps.push([op, step]);
    this.quickAttr = false;
    if(this.steps.length == 1) {
      if(op == "/" && step.axis == "attribute") {
        var test = step.test;
        if(!test.notOnlyElement && test.name != "*") {
          this.quickAttr = true;
          this.attrName = test.name
        }
      }
    }
  };
  PathExpr.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "path:" + "\n";
    indent += "    ";
    t += indent + "filter:" + "\n";
    t += this.filter.show(indent + "    ");
    if(this.steps.length) {
      t += indent + "steps:" + "\n";
      indent += "    ";
      for(var i = 0;i < this.steps.length;i++) {
        var step = this.steps[i];
        t += indent + "operator: " + step[0] + "\n";
        t += step[1].show(indent)
      }
    }
    return t
  };
  if(!window.FilterExpr && window.defaultConfig) {
    window.FilterExpr = null
  }
  FilterExpr = function(primary) {
    this.primary = primary;
    this.predicates = [];
    this.datatype = primary.datatype;
    this.needContextPosition = primary.needContextPosition;
    this.needContextNode = primary.needContextNode
  };
  FilterExpr.parse = function(lexer) {
    var expr, filter, token, ch;
    token = lexer.peek();
    ch = token.charAt(0);
    switch(ch) {
      case "$":
        expr = VariableReference.parse(lexer);
        break;
      case "(":
        lexer.next();
        expr = BinaryExpr.parse(lexer);
        if(lexer.empty()) {
          throw Error('unclosed "("');
        }
        if(lexer.next() != ")") {
          lexer.back();
          throw Error("bad token: " + lexer.next());
        }
        break;
      case '"':
      ;
      case "'":
        expr = Literal.parse(lexer);
        break;
      default:
        if(!isNaN(+token)) {
          expr = Number.parse(lexer)
        }else {
          if(NodeType.types[token]) {
            return null
          }else {
            if(/(?![0-9])[\w]/.test(ch) && lexer.peek(1) == "(") {
              expr = FunctionCall.parse(lexer)
            }else {
              return null
            }
          }
        }
        break
    }
    if(lexer.peek() != "[") {
      return expr
    }
    filter = new FilterExpr(expr);
    BaseExprHasPredicates.parsePredicates(lexer, filter);
    return filter
  };
  FilterExpr.root = function() {
    return new FunctionCall("root-node")
  };
  FilterExpr.context = function() {
    return new FunctionCall("context-node")
  };
  FilterExpr.prototype = new BaseExprHasPredicates;
  FilterExpr.prototype.evaluate = function(ctx) {
    var nodeset = this.primary.evaluate(ctx);
    if(!nodeset.isNodeSet) {
      if(this.predicates.length) {
        throw Error("Primary result must be nodeset type " + "if filter have predicate expression");
      }
      return nodeset
    }
    return this.evaluatePredicates(nodeset)
  };
  FilterExpr.prototype.predicate = function(predicate) {
    this.predicates.push(predicate)
  };
  FilterExpr.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "filter: " + "\n";
    indent += "    ";
    t += this.primary.show(indent);
    if(this.predicates.length) {
      t += indent + "predicates: " + "\n";
      indent += "    ";
      for(var i = 0;i < this.predicates.length;i++) {
        t += this.predicates[i].show(indent)
      }
    }
    return t
  };
  if(!window.NodeUtil && window.defaultConfig) {
    window.NodeUtil = null
  }
  NodeUtil = {to:function(valueType, node) {
    var t, type = node.nodeType;
    if(type == 1 && config.useInnerText && !uai.applewebkit2) {
      t = node.textContent;
      t = t == undefined || t == null ? node.innerText : t;
      t = t == undefined || t == null ? "" : t
    }
    if(typeof t != "string") {
      if(type == 9 || type == 1) {
        if(type == 9) {
          node = node.documentElement
        }else {
          node = node.firstChild
        }
        for(t = "", stack = [], i = 0;node;) {
          do {
            if(node.nodeType != 1) {
              t += node.nodeValue
            }
            stack[i++] = node
          }while(node = node.firstChild);
          while(i && !(node = stack[--i].nextSibling)) {
          }
        }
      }else {
        t = node.nodeValue
      }
    }
    switch(valueType) {
      case "number":
        return+t;
      case "boolean":
        return!!t;
      default:
        return t
    }
  }, attrPropMap:{name:"name", "class":"className", dir:"dir", id:"id", name:"name", title:"title"}, attrMatch:function(node, attrName, attrValue) {
    if(!attrName || attrValue == null && node.hasAttribute && node.hasAttribute(attrName) || attrValue != null && node.getAttribute && node.getAttribute(attrName) == attrValue) {
      return true
    }else {
      return false
    }
  }, getDescendantNodes:function(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex) {
    if(prevNodeset) {
      prevNodeset.delDescendant(node, prevIndex)
    }
    if(attrValue && attrName == "id" && node.getElementById) {
      node = node.getElementById(attrValue);
      if(node && test.match(node)) {
        nodeset.push(node)
      }
    }else {
      if(attrValue && attrName == "name" && node.getElementsByName) {
        var nodes = node.getElementsByName(attrValue);
        for(var i = 0, l = nodes.length;i < l;i++) {
          node = nodes[i];
          if(uai.opera ? node.name == attrValue && test.match(node) : test.match(node)) {
            nodeset.push(node)
          }
        }
      }else {
        if(attrValue && attrName == "class" && node.getElementsByClassName) {
          var nodes = node.getElementsByClassName(attrValue);
          for(var i = 0, l = nodes.length;i < l;i++) {
            node = nodes[i];
            if(node.className == attrValue && test.match(node)) {
              nodeset.push(node)
            }
          }
        }else {
          if(test.notOnlyElement) {
            (function(parent) {
              var f = arguments.callee;
              for(var node = parent.firstChild;node;node = node.nextSibling) {
                if(NodeUtil.attrMatch(node, attrName, attrValue)) {
                  if(test.match(node.nodeType)) {
                    nodeset.push(node)
                  }
                }
                f(node)
              }
            })(node)
          }else {
            var name = test.name;
            if(node.getElementsByTagName) {
              var nodes = node.getElementsByTagName(name);
              if(nodes) {
                var i = 0;
                while(node = nodes[i++]) {
                  if(NodeUtil.attrMatch(node, attrName, attrValue)) {
                    nodeset.push(node)
                  }
                }
              }
            }
          }
        }
      }
    }
    return nodeset
  }, getChildNodes:function(test, node, nodeset, attrName, attrValue) {
    for(var node = node.firstChild;node;node = node.nextSibling) {
      if(NodeUtil.attrMatch(node, attrName, attrValue)) {
        if(test.match(node)) {
          nodeset.push(node)
        }
      }
    }
    return nodeset
  }};
  if(!window.Step && window.defaultConfig) {
    window.Step = null
  }
  Step = function(axis, test) {
    this.axis = axis;
    this.reverse = Step.axises[axis][0];
    this.func = Step.axises[axis][1];
    this.test = test;
    this.predicates = [];
    this._quickAttr = Step.axises[axis][2]
  };
  Step.axises = {ancestor:[true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
    while(node = node.parentNode) {
      if(prevNodeset && node.nodeType == 1) {
        prevNodeset.reserveDelByNode(node, prevIndex, true)
      }
      if(test.match(node)) {
        nodeset.unshift(node)
      }
    }
    return nodeset
  }], "ancestor-or-self":[true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
    do {
      if(prevNodeset && node.nodeType == 1) {
        prevNodeset.reserveDelByNode(node, prevIndex, true)
      }
      if(test.match(node)) {
        nodeset.unshift(node)
      }
    }while(node = node.parentNode);
    return nodeset
  }], attribute:[false, function(test, node, nodeset) {
    var attrs = node.attributes;
    if(attrs) {
      if(test.notOnlyElement && test.type == 0 || test.name == "*") {
        for(var i = 0, attr;attr = attrs[i];i++) {
          nodeset.push(attr)
        }
      }else {
        var attr = attrs.getNamedItem(test.name);
        if(attr) {
          nodeset.push(attr)
        }
      }
    }
    return nodeset
  }], child:[false, NodeUtil.getChildNodes, true], descendant:[false, NodeUtil.getDescendantNodes, true], "descendant-or-self":[false, function(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex) {
    if(NodeUtil.attrMatch(node, attrName, attrValue)) {
      if(test.match(node)) {
        nodeset.push(node)
      }
    }
    return NodeUtil.getDescendantNodes(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex)
  }, true], following:[false, function(test, node, nodeset, attrName, attrValue) {
    do {
      var child = node;
      while(child = child.nextSibling) {
        if(NodeUtil.attrMatch(child, attrName, attrValue)) {
          if(test.match(child)) {
            nodeset.push(child)
          }
        }
        nodeset = NodeUtil.getDescendantNodes(test, child, nodeset, attrName, attrValue)
      }
    }while(node = node.parentNode);
    return nodeset
  }, true], "following-sibling":[false, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
    while(node = node.nextSibling) {
      if(prevNodeset && node.nodeType == 1) {
        prevNodeset.reserveDelByNode(node, prevIndex)
      }
      if(test.match(node)) {
        nodeset.push(node)
      }
    }
    return nodeset
  }], namespace:[false, function(test, node, nodeset) {
    return nodeset
  }], parent:[false, function(test, node, nodeset) {
    if(node.nodeType == 9) {
      return nodeset
    }
    if(node.nodeType == 2) {
      nodeset.push(node.ownerElement);
      return nodeset
    }
    var node = node.parentNode;
    if(test.match(node)) {
      nodeset.push(node)
    }
    return nodeset
  }], preceding:[true, function(test, node, nodeset, attrName, attrValue) {
    var parents = [];
    do {
      parents.unshift(node)
    }while(node = node.parentNode);
    for(var i = 1, l0 = parents.length;i < l0;i++) {
      var siblings = [];
      node = parents[i];
      while(node = node.previousSibling) {
        siblings.unshift(node)
      }
      for(var j = 0, l1 = siblings.length;j < l1;j++) {
        node = siblings[j];
        if(NodeUtil.attrMatch(node, attrName, attrValue)) {
          if(test.match(node)) {
            nodeset.push(node)
          }
        }
        nodeset = NodeUtil.getDescendantNodes(test, node, nodeset, attrName, attrValue)
      }
    }
    return nodeset
  }, true], "preceding-sibling":[true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
    while(node = node.previousSibling) {
      if(prevNodeset && node.nodeType == 1) {
        prevNodeset.reserveDelByNode(node, prevIndex, true)
      }
      if(test.match(node)) {
        nodeset.unshift(node)
      }
    }
    return nodeset
  }], self:[false, function(test, node, nodeset) {
    if(test.match(node)) {
      nodeset.push(node)
    }
    return nodeset
  }]};
  Step.parse = function(lexer) {
    var axis, test, step, token;
    if(lexer.peek() == ".") {
      step = this.self();
      lexer.next()
    }else {
      if(lexer.peek() == "..") {
        step = this.parent();
        lexer.next()
      }else {
        if(lexer.peek() == "@") {
          axis = "attribute";
          lexer.next();
          if(lexer.empty()) {
            throw Error("missing attribute name");
          }
        }else {
          if(lexer.peek(1) == "::") {
            if(!/(?![0-9])[\w]/.test(lexer.peek().charAt(0))) {
              throw Error("bad token: " + lexer.next());
            }
            axis = lexer.next();
            lexer.next();
            if(!this.axises[axis]) {
              throw Error("invalid axis: " + axis);
            }
            if(lexer.empty()) {
              throw Error("missing node name");
            }
          }else {
            axis = "child"
          }
        }
        token = lexer.peek();
        if(!/(?![0-9])[\w]/.test(token.charAt(0))) {
          if(token == "*") {
            test = NameTest.parse(lexer)
          }else {
            throw Error("bad token: " + lexer.next());
          }
        }else {
          if(lexer.peek(1) == "(") {
            if(!NodeType.types[token]) {
              throw Error("invalid node type: " + token);
            }
            test = NodeType.parse(lexer)
          }else {
            test = NameTest.parse(lexer)
          }
        }
        step = new Step(axis, test)
      }
    }
    BaseExprHasPredicates.parsePredicates(lexer, step);
    return step
  };
  Step.self = function() {
    return new Step("self", new NodeType("node"))
  };
  Step.parent = function() {
    return new Step("parent", new NodeType("node"))
  };
  Step.prototype = new BaseExprHasPredicates;
  Step.prototype.evaluate = function(ctx, special, prevNodeset, prevIndex) {
    var node = ctx.node;
    var reverse = false;
    if(!special && this.op == "//") {
      if(!this.needContextPosition && this.axis == "child") {
        if(this.quickAttr) {
          var attrValue = this.attrValueExpr ? this.attrValueExpr.string(ctx) : null;
          var nodeset = NodeUtil.getDescendantNodes(this.test, node, new NodeSet, this.attrName, attrValue, prevNodeset, prevIndex);
          nodeset = this.evaluatePredicates(nodeset, 1)
        }else {
          var nodeset = NodeUtil.getDescendantNodes(this.test, node, new NodeSet, null, null, prevNodeset, prevIndex);
          nodeset = this.evaluatePredicates(nodeset)
        }
      }else {
        var step = new Step("descendant-or-self", new NodeType("node"));
        var nodes = step.evaluate(ctx, false, prevNodeset, prevIndex).list();
        var nodeset = null;
        step.op = "/";
        for(var i = 0, l = nodes.length;i < l;i++) {
          if(!nodeset) {
            nodeset = this.evaluate(new Ctx(nodes[i]), true)
          }else {
            nodeset.merge(this.evaluate(new Ctx(nodes[i]), true))
          }
        }
        nodeset = nodeset || new NodeSet
      }
    }else {
      if(this.needContextPosition) {
        prevNodeset = null;
        prevIndex = null
      }
      if(this.quickAttr) {
        var attrValue = this.attrValueExpr ? this.attrValueExpr.string(ctx) : null;
        var nodeset = this.func(this.test, node, new NodeSet, this.attrName, attrValue, prevNodeset, prevIndex);
        nodeset = this.evaluatePredicates(nodeset, 1)
      }else {
        var nodeset = this.func(this.test, node, new NodeSet, null, null, prevNodeset, prevIndex);
        nodeset = this.evaluatePredicates(nodeset)
      }
      if(prevNodeset) {
        prevNodeset.doDel()
      }
    }
    return nodeset
  };
  Step.prototype.predicate = function(predicate) {
    this.predicates.push(predicate);
    if(predicate.needContextPosition || predicate.datatype == "number" || predicate.datatype == "void") {
      this.needContextPosition = true
    }
    if(this._quickAttr && this.predicates.length == 1 && predicate.quickAttr) {
      var attrName = predicate.attrName;
      this.attrName = attrName;
      this.attrValueExpr = predicate.attrValueExpr;
      this.quickAttr = true
    }
  };
  Step.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "step: " + "\n";
    indent += "    ";
    if(this.axis) {
      t += indent + "axis: " + this.axis + "\n"
    }
    t += this.test.show(indent);
    if(this.predicates.length) {
      t += indent + "predicates: " + "\n";
      indent += "    ";
      for(var i = 0;i < this.predicates.length;i++) {
        t += this.predicates[i].show(indent)
      }
    }
    return t
  };
  if(!window.NodeType && window.defaultConfig) {
    window.NodeType = null
  }
  NodeType = function(name, literal) {
    this.name = name;
    this.literal = literal;
    switch(name) {
      case "comment":
        this.type = 8;
        break;
      case "text":
        this.type = 3;
        break;
      case "processing-instruction":
        this.type = 7;
        break;
      case "node":
        this.type = 0;
        break
    }
  };
  NodeType.types = {"comment":1, "text":1, "processing-instruction":1, "node":1};
  NodeType.parse = function(lexer) {
    var type, literal, ch;
    type = lexer.next();
    lexer.next();
    if(lexer.empty()) {
      throw Error("bad nodetype");
    }
    ch = lexer.peek().charAt(0);
    if(ch == '"' || ch == "'") {
      literal = Literal.parse(lexer)
    }
    if(lexer.empty()) {
      throw Error("bad nodetype");
    }
    if(lexer.next() != ")") {
      lexer.back();
      throw Error("bad token " + lexer.next());
    }
    return new NodeType(type, literal)
  };
  NodeType.prototype = new BaseExpr;
  NodeType.prototype.notOnlyElement = true;
  NodeType.prototype.match = function(node) {
    return!this.type || this.type == node.nodeType
  };
  NodeType.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "nodetype: " + this.type + "\n";
    if(this.literal) {
      indent += "    ";
      t += this.literal.show(indent)
    }
    return t
  };
  if(!window.NameTest && window.defaultConfig) {
    window.NameTest = null
  }
  NameTest = function(name) {
    this.name = name.toLowerCase()
  };
  NameTest.parse = function(lexer) {
    if(lexer.peek() != "*" && lexer.peek(1) == ":" && lexer.peek(2) == "*") {
      return new NameTest(lexer.next() + lexer.next() + lexer.next())
    }
    return new NameTest(lexer.next())
  };
  NameTest.prototype = new BaseExpr;
  NameTest.prototype.match = function(node) {
    var type = node.nodeType;
    if(type == 1 || type == 2) {
      if(this.name == "*" || this.name == node.nodeName.toLowerCase()) {
        return true
      }
    }
    return false
  };
  NameTest.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "nametest: " + this.name + "\n";
    return t
  };
  if(!window.VariableReference && window.defaultConfig) {
    window.VariableReference = null
  }
  VariableReference = function(name) {
    this.name = name.substring(1)
  };
  VariableReference.parse = function(lexer) {
    var token = lexer.next();
    if(token.length < 2) {
      throw Error("unnamed variable reference");
    }
    return new VariableReference(token)
  };
  VariableReference.prototype = new BaseExpr;
  VariableReference.prototype.datatype = "void";
  VariableReference.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "variable: " + this.name + "\n";
    return t
  };
  if(!window.Literal && window.defaultConfig) {
    window.Literal = null
  }
  Literal = function(text) {
    this.text = text.substring(1, text.length - 1)
  };
  Literal.parse = function(lexer) {
    var token = lexer.next();
    if(token.length < 2) {
      throw Error("unclosed literal string");
    }
    return new Literal(token)
  };
  Literal.prototype = new BaseExpr;
  Literal.prototype.datatype = "string";
  Literal.prototype.evaluate = function(ctx) {
    return this.text
  };
  Literal.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "literal: " + this.text + "\n";
    return t
  };
  if(!window.Number && window.defaultConfig) {
    window.Number = null
  }
  Number = function(digit) {
    this.digit = +digit
  };
  Number.parse = function(lexer) {
    return new Number(lexer.next())
  };
  Number.prototype = new BaseExpr;
  Number.prototype.datatype = "number";
  Number.prototype.evaluate = function(ctx) {
    return this.digit
  };
  Number.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "number: " + this.digit + "\n";
    return t
  };
  if(!window.FunctionCall && window.defaultConfig) {
    window.FunctionCall = null
  }
  FunctionCall = function(name) {
    var info = FunctionCall.funcs[name];
    if(!info) {
      throw Error(name + " is not a function");
    }
    this.name = name;
    this.func = info[0];
    this.args = [];
    this.datatype = info[1];
    if(info[2]) {
      this.needContextPosition = true
    }
    this.needContextNodeInfo = info[3];
    this.needContextNode = this.needContextNodeInfo[0]
  };
  FunctionCall.funcs = {"context-node":[function() {
    if(arguments.length != 0) {
      throw Error("Function context-node expects ()");
    }
    var ns;
    ns = new NodeSet;
    ns.push(this.node);
    return ns
  }, "nodeset", false, [true]], "root-node":[function() {
    if(arguments.length != 0) {
      throw Error("Function root-node expects ()");
    }
    var ns, ctxn;
    ns = new NodeSet;
    ctxn = this.node;
    if(ctxn.nodeType == 9) {
      ns.push(ctxn)
    }else {
      ns.push(ctxn.ownerDocument)
    }
    return ns
  }, "nodeset", false, []], last:[function() {
    if(arguments.length != 0) {
      throw Error("Function last expects ()");
    }
    return this.last
  }, "number", true, []], position:[function() {
    if(arguments.length != 0) {
      throw Error("Function position expects ()");
    }
    return this.position
  }, "number", true, []], count:[function(ns) {
    if(arguments.length != 1 || !(ns = ns.evaluate(this)).isNodeSet) {
      throw Error("Function count expects (nodeset)");
    }
    return ns.length
  }, "number", false, []], id:[function(s) {
    var ids, ns, i, id, elm, ctxn, doc;
    if(arguments.length != 1) {
      throw Error("Function id expects (object)");
    }
    ctxn = this.node;
    if(ctxn.nodeType == 9) {
      doc = ctxn
    }else {
      doc = ctxn.ownerDocument
    }
    s = s.string(this);
    ids = s.split(/\s+/);
    ns = new NodeSet;
    for(i = 0, l = ids.length;i < l;i++) {
      id = ids[i];
      elm = doc.getElementById(id);
      if(uai.opera && elm && elm.id != id) {
        var elms = doc.getElementsByName(id);
        for(var j = 0, l0 = elms.length;j < l0;j++) {
          elm = elms[j];
          if(elm.id == id) {
            ns.push(elm)
          }
        }
      }else {
        if(elm) {
          ns.push(elm)
        }
      }
    }
    ns.isSorted = false;
    return ns
  }, "nodeset", false, []], "local-name":[function(ns) {
    var nd;
    switch(arguments.length) {
      case 0:
        nd = this.node;
        break;
      case 1:
        if((ns = ns.evaluate(this)).isNodeSet) {
          nd = ns.first();
          break
        }
      ;
      default:
        throw Error("Function local-name expects (nodeset?)");break
    }
    return"" + nd.nodeName.toLowerCase()
  }, "string", false, [true, false]], name:[function(ns) {
    return FunctionCall.funcs["local-name"][0].apply(this, arguments)
  }, "string", false, [true, false]], "namespace-uri":[function(ns) {
    return""
  }, "string", false, [true, false]], string:[function(s) {
    switch(arguments.length) {
      case 0:
        s = NodeUtil.to("string", this.node);
        break;
      case 1:
        s = s.string(this);
        break;
      default:
        throw Error("Function string expects (object?)");break
    }
    return s
  }, "string", false, [true, false]], concat:[function(s1, s2) {
    if(arguments.length < 2) {
      throw Error("Function concat expects (string, string[, ...])");
    }
    for(var t = "", i = 0, l = arguments.length;i < l;i++) {
      t += arguments[i].string(this)
    }
    return t
  }, "string", false, []], "starts-with":[function(s1, s2) {
    if(arguments.length != 2) {
      throw Error("Function starts-with expects (string, string)");
    }
    s1 = s1.string(this);
    s2 = s2.string(this);
    return s1.indexOf(s2) == 0
  }, "boolean", false, []], contains:[function(s1, s2) {
    if(arguments.length != 2) {
      throw Error("Function contains expects (string, string)");
    }
    s1 = s1.string(this);
    s2 = s2.string(this);
    return s1.indexOf(s2) != -1
  }, "boolean", false, []], substring:[function(s, n1, n2) {
    var a1, a2;
    s = s.string(this);
    n1 = n1.number(this);
    switch(arguments.length) {
      case 2:
        n2 = s.length - n1 + 1;
        break;
      case 3:
        n2 = n2.number(this);
        break;
      default:
        throw Error("Function substring expects (string, string)");break
    }
    n1 = Math.round(n1);
    n2 = Math.round(n2);
    a1 = n1 - 1;
    a2 = n1 + n2 - 1;
    if(a2 == Infinity) {
      return s.substring(a1 < 0 ? 0 : a1)
    }else {
      return s.substring(a1 < 0 ? 0 : a1, a2)
    }
  }, "string", false, []], "substring-before":[function(s1, s2) {
    var n;
    if(arguments.length != 2) {
      throw Error("Function substring-before expects (string, string)");
    }
    s1 = s1.string(this);
    s2 = s2.string(this);
    n = s1.indexOf(s2);
    if(n == -1) {
      return""
    }
    return s1.substring(0, n)
  }, "string", false, []], "substring-after":[function(s1, s2) {
    if(arguments.length != 2) {
      throw Error("Function substring-after expects (string, string)");
    }
    s1 = s1.string(this);
    s2 = s2.string(this);
    var n = s1.indexOf(s2);
    if(n == -1) {
      return""
    }
    return s1.substring(n + s2.length)
  }, "string", false, []], "string-length":[function(s) {
    switch(arguments.length) {
      case 0:
        s = NodeUtil.to("string", this.node);
        break;
      case 1:
        s = s.string(this);
        break;
      default:
        throw Error("Function string-length expects (string?)");break
    }
    return s.length
  }, "number", false, [true, false]], "normalize-space":[function(s) {
    switch(arguments.length) {
      case 0:
        s = NodeUtil.to("string", this.node);
        break;
      case 1:
        s = s.string(this);
        break;
      default:
        throw Error("Function normalize-space expects (string?)");break
    }
    return s.replace(/\s+/g, " ").replace(/^ /, "").replace(/ $/, "")
  }, "string", false, [true, false]], translate:[function(s1, s2, s3) {
    if(arguments.length != 3) {
      throw Error("Function translate expects (string, string, string)");
    }
    s1 = s1.string(this);
    s2 = s2.string(this);
    s3 = s3.string(this);
    var map = [];
    for(var i = 0, l = s2.length;i < l;i++) {
      var ch = s2.charAt(i);
      if(!map[ch]) {
        map[ch] = s3.charAt(i) || ""
      }
    }
    for(var t = "", i = 0, l = s1.length;i < l;i++) {
      var ch = s1.charAt(i);
      var replace = map[ch];
      t += replace != undefined ? replace : ch
    }
    return t
  }, "string", false, []], "boolean":[function(b) {
    if(arguments.length != 1) {
      throw Error("Function boolean expects (object)");
    }
    return b.bool(this)
  }, "boolean", false, []], not:[function(b) {
    if(arguments.length != 1) {
      throw Error("Function not expects (object)");
    }
    return!b.bool(this)
  }, "boolean", false, []], "true":[function() {
    if(arguments.length != 0) {
      throw Error("Function true expects ()");
    }
    return true
  }, "boolean", false, []], "false":[function() {
    if(arguments.length != 0) {
      throw Error("Function false expects ()");
    }
    return false
  }, "boolean", false, []], lang:[function(s) {
    return false
  }, "boolean", false, []], number:[function(n) {
    switch(arguments.length) {
      case 0:
        n = NodeUtil.to("number", this.node);
        break;
      case 1:
        n = n.number(this);
        break;
      default:
        throw Error("Function number expects (object?)");break
    }
    return n
  }, "number", false, [true, false]], sum:[function(ns) {
    var nodes, n, i, l;
    if(arguments.length != 1 || !(ns = ns.evaluate(this)).isNodeSet) {
      throw Error("Function sum expects (nodeset)");
    }
    nodes = ns.list();
    n = 0;
    for(i = 0, l = nodes.length;i < l;i++) {
      n += NodeUtil.to("number", nodes[i])
    }
    return n
  }, "number", false, []], floor:[function(n) {
    if(arguments.length != 1) {
      throw Error("Function floor expects (number)");
    }
    n = n.number(this);
    return Math.floor(n)
  }, "number", false, []], ceiling:[function(n) {
    if(arguments.length != 1) {
      throw Error("Function ceiling expects (number)");
    }
    n = n.number(this);
    return Math.ceil(n)
  }, "number", false, []], round:[function(n) {
    if(arguments.length != 1) {
      throw Error("Function round expects (number)");
    }
    n = n.number(this);
    return Math.round(n)
  }, "number", false, []]};
  FunctionCall.parse = function(lexer) {
    var expr, func = new FunctionCall(lexer.next());
    lexer.next();
    while(lexer.peek() != ")") {
      if(lexer.empty()) {
        throw Error("missing function argument list");
      }
      expr = BinaryExpr.parse(lexer);
      func.arg(expr);
      if(lexer.peek() != ",") {
        break
      }
      lexer.next()
    }
    if(lexer.empty()) {
      throw Error("unclosed function argument list");
    }
    if(lexer.next() != ")") {
      lexer.back();
      throw Error("bad token: " + lexer.next());
    }
    return func
  };
  FunctionCall.prototype = new BaseExpr;
  FunctionCall.prototype.evaluate = function(ctx) {
    return this.func.apply(ctx, this.args)
  };
  FunctionCall.prototype.arg = function(arg) {
    this.args.push(arg);
    if(arg.needContextPosition) {
      this.needContextPosition = true
    }
    var args = this.args;
    if(arg.needContextNode) {
      args.needContexNode = true
    }
    this.needContextNode = args.needContextNode || this.needContextNodeInfo[args.length]
  };
  FunctionCall.prototype.show = function(indent) {
    indent = indent || "";
    var t = "";
    t += indent + "function: " + this.name + "\n";
    indent += "    ";
    if(this.args.length) {
      t += indent + "arguments: " + "\n";
      indent += "    ";
      for(var i = 0;i < this.args.length;i++) {
        t += this.args[i].show(indent)
      }
    }
    return t
  };
  var NodeID = {uuid:1, get:function(node) {
    return node.__jsxpath_id__ || (node.__jsxpath_id__ = this.uuid++)
  }};
  if(!window.NodeSet && window.defaultConfig) {
    window.NodeSet = null
  }
  NodeSet = function() {
    this.length = 0;
    this.nodes = [];
    this.seen = {};
    this.idIndexMap = null;
    this.reserveDels = []
  };
  NodeSet.prototype.isNodeSet = true;
  NodeSet.prototype.isSorted = true;
  NodeSet.prototype.merge = function(nodeset) {
    this.isSorted = false;
    if(nodeset.only) {
      return this.push(nodeset.only)
    }
    if(this.only) {
      var only = this.only;
      delete this.only;
      this.push(only);
      this.length--
    }
    var nodes = nodeset.nodes;
    for(var i = 0, l = nodes.length;i < l;i++) {
      this._add(nodes[i])
    }
  };
  NodeSet.prototype.sort = function() {
    if(this.only) {
      return
    }
    if(this.sortOff) {
      return
    }
    if(!this.isSorted) {
      this.isSorted = true;
      this.idIndexMap = null;
      var nodes = this.nodes;
      nodes.sort(function(a, b) {
        if(a == b) {
          return 0
        }
        if(a.compareDocumentPosition) {
          var result = a.compareDocumentPosition(b);
          if(result & 2) {
            return 1
          }
          if(result & 4) {
            return-1
          }
          return 0
        }else {
          var node1 = a, node2 = b, ancestor1 = a, ancestor2 = b, deep1 = 0, deep2 = 0;
          while(ancestor1 = ancestor1.parentNode) {
            deep1++
          }
          while(ancestor2 = ancestor2.parentNode) {
            deep2++
          }
          if(deep1 > deep2) {
            while(deep1-- != deep2) {
              node1 = node1.parentNode
            }
            if(node1 == node2) {
              return 1
            }
          }else {
            if(deep2 > deep1) {
              while(deep2-- != deep1) {
                node2 = node2.parentNode
              }
              if(node1 == node2) {
                return-1
              }
            }
          }
          while((ancestor1 = node1.parentNode) != (ancestor2 = node2.parentNode)) {
            node1 = ancestor1;
            node2 = ancestor2
          }
          while(node1 = node1.nextSibling) {
            if(node1 == node2) {
              return-1
            }
          }
          return 1
        }
      })
    }
  };
  NodeSet.prototype.reserveDelByNodeID = function(id, offset, reverse) {
    var map = this.createIdIndexMap();
    var index;
    if(index = map[id]) {
      if(reverse && this.length - offset - 1 > index || !reverse && offset < index) {
        var obj = {value:index, order:String.fromCharCode(index), toString:function() {
          return this.order
        }, valueOf:function() {
          return this.value
        }};
        this.reserveDels.push(obj)
      }
    }
  };
  NodeSet.prototype.reserveDelByNode = function(node, offset, reverse) {
    this.reserveDelByNodeID(NodeID.get(node), offset, reverse)
  };
  NodeSet.prototype.doDel = function() {
    if(!this.reserveDels.length) {
      return
    }
    if(this.length < 65536) {
      var dels = this.reserveDels.sort(function(a, b) {
        return b - a
      })
    }else {
      var dels = this.reserveDels.sort(function(a, b) {
        return b - a
      })
    }
    for(var i = 0, l = dels.length;i < l;i++) {
      this.del(dels[i])
    }
    this.reserveDels = [];
    this.idIndexMap = null
  };
  NodeSet.prototype.createIdIndexMap = function() {
    if(this.idIndexMap) {
      return this.idIndexMap
    }else {
      var map = this.idIndexMap = {};
      var nodes = this.nodes;
      for(var i = 0, l = nodes.length;i < l;i++) {
        var node = nodes[i];
        var id = NodeID.get(node);
        map[id] = i
      }
      return map
    }
  };
  NodeSet.prototype.del = function(index) {
    this.length--;
    if(this.only) {
      delete this.only
    }else {
      var node = this.nodes.splice(index, 1)[0];
      if(this._first == node) {
        delete this._first;
        delete this._firstSourceIndex;
        delete this._firstSubIndex
      }
      delete this.seen[NodeID.get(node)]
    }
  };
  NodeSet.prototype.delDescendant = function(elm, offset) {
    if(this.only) {
      return
    }
    var nodeType = elm.nodeType;
    if(nodeType != 1 && nodeType != 9) {
      return
    }
    if(uai.applewebkit2) {
      return
    }
    if(!elm.contains) {
      if(nodeType == 1) {
        var _elm = elm;
        elm = {contains:function(node) {
          return node.compareDocumentPosition(_elm) & 8
        }}
      }else {
        elm = {contains:function() {
          return true
        }}
      }
    }
    var nodes = this.nodes;
    for(var i = offset + 1;i < nodes.length;i++) {
      if(elm.contains(nodes[i])) {
        this.del(i);
        i--
      }
    }
  };
  NodeSet.prototype._add = function(node, reverse) {
    var seen = this.seen;
    var id = NodeID.get(node);
    if(seen[id]) {
      return true
    }
    seen[id] = true;
    this.length++;
    if(reverse) {
      this.nodes.unshift(node)
    }else {
      this.nodes.push(node)
    }
  };
  NodeSet.prototype.unshift = function(node) {
    if(!this.length) {
      this.length++;
      this.only = node;
      return
    }
    if(this.only) {
      var only = this.only;
      delete this.only;
      this.unshift(only);
      this.length--
    }
    return this._add(node, true)
  };
  NodeSet.prototype.push = function(node) {
    if(!this.length) {
      this.length++;
      this.only = node;
      return
    }
    if(this.only) {
      var only = this.only;
      delete this.only;
      this.push(only);
      this.length--
    }
    return this._add(node)
  };
  NodeSet.prototype.first = function() {
    if(this.only) {
      return this.only
    }
    if(this.nodes.length > 1) {
      this.sort()
    }
    return this.nodes[0]
  };
  NodeSet.prototype.list = function() {
    if(this.only) {
      return[this.only]
    }
    this.sort();
    return this.nodes
  };
  NodeSet.prototype.string = function() {
    var node = this.only || this.first();
    return node ? NodeUtil.to("string", node) : ""
  };
  NodeSet.prototype.bool = function() {
    return!!(this.length || this.only)
  };
  NodeSet.prototype.number = function() {
    return+this.string()
  };
  NodeSet.prototype.iterator = function(reverse) {
    this.sort();
    var nodeset = this;
    if(!reverse) {
      var count = 0;
      return function() {
        if(nodeset.only && count++ == 0) {
          return nodeset.only
        }
        return nodeset.nodes[count++]
      }
    }else {
      var count = 0;
      return function() {
        var index = nodeset.length - count++ - 1;
        if(nodeset.only && index == 0) {
          return nodeset.only
        }
        return nodeset.nodes[index]
      }
    }
  };
  var install = function(win) {
    win = win || this;
    var doc = win.document;
    var undefined = win.undefined;
    win.XPathExpression = function(expr) {
      if(!expr.length) {
        throw win.Error("no expression");
      }
      var lexer = this.lexer = Lexer(expr);
      if(lexer.empty()) {
        throw win.Error("no expression");
      }
      this.expr = BinaryExpr.parse(lexer);
      if(!lexer.empty()) {
        throw win.Error("bad token: " + lexer.next());
      }
    };
    win.XPathExpression.prototype.evaluate = function(node, type) {
      return new win.XPathResult(this.expr.evaluate(new Ctx(node)), type)
    };
    win.XPathResult = function(value, type) {
      if(type == 0) {
        switch(typeof value) {
          case "object":
            type++;
          case "boolean":
            type++;
          case "string":
            type++;
          case "number":
            type++
        }
      }
      this.resultType = type;
      switch(type) {
        case 1:
          this.numberValue = value.isNodeSet ? value.number() : +value;
          return;
        case 2:
          this.stringValue = value.isNodeSet ? value.string() : "" + value;
          return;
        case 3:
          this.booleanValue = value.isNodeSet ? value.bool() : !!value;
          return;
        case 4:
        ;
        case 5:
        ;
        case 6:
        ;
        case 7:
          this.nodes = value.list();
          this.snapshotLength = value.length;
          this.index = 0;
          this.invalidIteratorState = false;
          break;
        case 8:
        ;
        case 9:
          this.singleNodeValue = value.first();
          return
      }
    };
    win.XPathResult.prototype.iterateNext = function() {
      return this.nodes[this.index++]
    };
    win.XPathResult.prototype.snapshotItem = function(i) {
      return this.nodes[i]
    };
    win.XPathResult.ANY_TYPE = 0;
    win.XPathResult.NUMBER_TYPE = 1;
    win.XPathResult.STRING_TYPE = 2;
    win.XPathResult.BOOLEAN_TYPE = 3;
    win.XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
    win.XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
    win.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
    win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
    win.XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
    win.XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
    doc.createExpression = function(expr) {
      return new win.XPathExpression(expr, null)
    };
    doc.evaluate = function(expr, context, _, type) {
      return doc.createExpression(expr, null).evaluate(context, type)
    }
  };
  var win;
  if(config.targetFrame) {
    var frame = document.getElementById(config.targetFrame);
    if(frame) {
      win = frame.contentWindow
    }
  }
  if(config.exportInstaller) {
    window.install = install
  }
  if(!config.hasNative || !config.useNative) {
    install(win || window)
  }
})();
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
  var or__3548__auto____2601 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____2601)) {
    return or__3548__auto____2601
  }else {
    var or__3548__auto____2602 = p["_"];
    if(cljs.core.truth_(or__3548__auto____2602)) {
      return or__3548__auto____2602
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
    var and__3546__auto____2603 = coll;
    if(cljs.core.truth_(and__3546__auto____2603)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____2603
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____2604 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2604)) {
        return or__3548__auto____2604
      }else {
        var or__3548__auto____2605 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____2605)) {
          return or__3548__auto____2605
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
    var and__3546__auto____2606 = coll;
    if(cljs.core.truth_(and__3546__auto____2606)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____2606
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____2607 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2607)) {
        return or__3548__auto____2607
      }else {
        var or__3548__auto____2608 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____2608)) {
          return or__3548__auto____2608
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
    var and__3546__auto____2609 = coll;
    if(cljs.core.truth_(and__3546__auto____2609)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____2609
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____2610 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2610)) {
        return or__3548__auto____2610
      }else {
        var or__3548__auto____2611 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____2611)) {
          return or__3548__auto____2611
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
  var _nth__2618 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2612 = coll;
      if(cljs.core.truth_(and__3546__auto____2612)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____2612
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____2613 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2613)) {
          return or__3548__auto____2613
        }else {
          var or__3548__auto____2614 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____2614)) {
            return or__3548__auto____2614
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__2619 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2615 = coll;
      if(cljs.core.truth_(and__3546__auto____2615)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____2615
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____2616 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2616)) {
          return or__3548__auto____2616
        }else {
          var or__3548__auto____2617 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____2617)) {
            return or__3548__auto____2617
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
        return _nth__2618.call(this, coll, n);
      case 3:
        return _nth__2619.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2621 = coll;
    if(cljs.core.truth_(and__3546__auto____2621)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____2621
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____2622 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2622)) {
        return or__3548__auto____2622
      }else {
        var or__3548__auto____2623 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____2623)) {
          return or__3548__auto____2623
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2624 = coll;
    if(cljs.core.truth_(and__3546__auto____2624)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____2624
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____2625 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2625)) {
        return or__3548__auto____2625
      }else {
        var or__3548__auto____2626 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____2626)) {
          return or__3548__auto____2626
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
  var _lookup__2633 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2627 = o;
      if(cljs.core.truth_(and__3546__auto____2627)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____2627
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____2628 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____2628)) {
          return or__3548__auto____2628
        }else {
          var or__3548__auto____2629 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____2629)) {
            return or__3548__auto____2629
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__2634 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2630 = o;
      if(cljs.core.truth_(and__3546__auto____2630)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____2630
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____2631 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____2631)) {
          return or__3548__auto____2631
        }else {
          var or__3548__auto____2632 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____2632)) {
            return or__3548__auto____2632
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
        return _lookup__2633.call(this, o, k);
      case 3:
        return _lookup__2634.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2636 = coll;
    if(cljs.core.truth_(and__3546__auto____2636)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____2636
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____2637 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2637)) {
        return or__3548__auto____2637
      }else {
        var or__3548__auto____2638 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____2638)) {
          return or__3548__auto____2638
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2639 = coll;
    if(cljs.core.truth_(and__3546__auto____2639)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____2639
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____2640 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2640)) {
        return or__3548__auto____2640
      }else {
        var or__3548__auto____2641 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____2641)) {
          return or__3548__auto____2641
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
    var and__3546__auto____2642 = coll;
    if(cljs.core.truth_(and__3546__auto____2642)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____2642
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____2643 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2643)) {
        return or__3548__auto____2643
      }else {
        var or__3548__auto____2644 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____2644)) {
          return or__3548__auto____2644
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
    var and__3546__auto____2645 = coll;
    if(cljs.core.truth_(and__3546__auto____2645)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____2645
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____2646 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2646)) {
        return or__3548__auto____2646
      }else {
        var or__3548__auto____2647 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____2647)) {
          return or__3548__auto____2647
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
    var and__3546__auto____2648 = coll;
    if(cljs.core.truth_(and__3546__auto____2648)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____2648
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____2649 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2649)) {
        return or__3548__auto____2649
      }else {
        var or__3548__auto____2650 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____2650)) {
          return or__3548__auto____2650
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2651 = coll;
    if(cljs.core.truth_(and__3546__auto____2651)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____2651
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____2652 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2652)) {
        return or__3548__auto____2652
      }else {
        var or__3548__auto____2653 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____2653)) {
          return or__3548__auto____2653
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
    var and__3546__auto____2654 = coll;
    if(cljs.core.truth_(and__3546__auto____2654)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____2654
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____2655 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____2655)) {
        return or__3548__auto____2655
      }else {
        var or__3548__auto____2656 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____2656)) {
          return or__3548__auto____2656
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
    var and__3546__auto____2657 = o;
    if(cljs.core.truth_(and__3546__auto____2657)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____2657
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____2658 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2658)) {
        return or__3548__auto____2658
      }else {
        var or__3548__auto____2659 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____2659)) {
          return or__3548__auto____2659
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
    var and__3546__auto____2660 = o;
    if(cljs.core.truth_(and__3546__auto____2660)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____2660
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____2661 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2661)) {
        return or__3548__auto____2661
      }else {
        var or__3548__auto____2662 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____2662)) {
          return or__3548__auto____2662
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
    var and__3546__auto____2663 = o;
    if(cljs.core.truth_(and__3546__auto____2663)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____2663
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____2664 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2664)) {
        return or__3548__auto____2664
      }else {
        var or__3548__auto____2665 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____2665)) {
          return or__3548__auto____2665
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
    var and__3546__auto____2666 = o;
    if(cljs.core.truth_(and__3546__auto____2666)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____2666
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____2667 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2667)) {
        return or__3548__auto____2667
      }else {
        var or__3548__auto____2668 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____2668)) {
          return or__3548__auto____2668
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
  var _reduce__2675 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2669 = coll;
      if(cljs.core.truth_(and__3546__auto____2669)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____2669
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____2670 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2670)) {
          return or__3548__auto____2670
        }else {
          var or__3548__auto____2671 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____2671)) {
            return or__3548__auto____2671
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__2676 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2672 = coll;
      if(cljs.core.truth_(and__3546__auto____2672)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____2672
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____2673 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____2673)) {
          return or__3548__auto____2673
        }else {
          var or__3548__auto____2674 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____2674)) {
            return or__3548__auto____2674
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
        return _reduce__2675.call(this, coll, f);
      case 3:
        return _reduce__2676.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2678 = o;
    if(cljs.core.truth_(and__3546__auto____2678)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____2678
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____2679 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2679)) {
        return or__3548__auto____2679
      }else {
        var or__3548__auto____2680 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____2680)) {
          return or__3548__auto____2680
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
    var and__3546__auto____2681 = o;
    if(cljs.core.truth_(and__3546__auto____2681)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____2681
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____2682 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2682)) {
        return or__3548__auto____2682
      }else {
        var or__3548__auto____2683 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____2683)) {
          return or__3548__auto____2683
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
    var and__3546__auto____2684 = o;
    if(cljs.core.truth_(and__3546__auto____2684)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____2684
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____2685 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2685)) {
        return or__3548__auto____2685
      }else {
        var or__3548__auto____2686 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____2686)) {
          return or__3548__auto____2686
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
    var and__3546__auto____2687 = o;
    if(cljs.core.truth_(and__3546__auto____2687)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____2687
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____2688 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____2688)) {
        return or__3548__auto____2688
      }else {
        var or__3548__auto____2689 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____2689)) {
          return or__3548__auto____2689
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
    var and__3546__auto____2690 = d;
    if(cljs.core.truth_(and__3546__auto____2690)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____2690
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____2691 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____2691)) {
        return or__3548__auto____2691
      }else {
        var or__3548__auto____2692 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____2692)) {
          return or__3548__auto____2692
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
    var and__3546__auto____2693 = this$;
    if(cljs.core.truth_(and__3546__auto____2693)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____2693
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____2694 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2694)) {
        return or__3548__auto____2694
      }else {
        var or__3548__auto____2695 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____2695)) {
          return or__3548__auto____2695
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2696 = this$;
    if(cljs.core.truth_(and__3546__auto____2696)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____2696
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____2697 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2697)) {
        return or__3548__auto____2697
      }else {
        var or__3548__auto____2698 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____2698)) {
          return or__3548__auto____2698
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2699 = this$;
    if(cljs.core.truth_(and__3546__auto____2699)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____2699
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____2700 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____2700)) {
        return or__3548__auto____2700
      }else {
        var or__3548__auto____2701 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____2701)) {
          return or__3548__auto____2701
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
  var G__2702 = null;
  var G__2702__2703 = function(o, k) {
    return null
  };
  var G__2702__2704 = function(o, k, not_found) {
    return not_found
  };
  G__2702 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2702__2703.call(this, o, k);
      case 3:
        return G__2702__2704.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2702
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
  var G__2706 = null;
  var G__2706__2707 = function(_, f) {
    return f.call(null)
  };
  var G__2706__2708 = function(_, f, start) {
    return start
  };
  G__2706 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2706__2707.call(this, _, f);
      case 3:
        return G__2706__2708.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2706
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
  var G__2710 = null;
  var G__2710__2711 = function(_, n) {
    return null
  };
  var G__2710__2712 = function(_, n, not_found) {
    return not_found
  };
  G__2710 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2710__2711.call(this, _, n);
      case 3:
        return G__2710__2712.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2710
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
  var ci_reduce__2720 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__2714 = cljs.core._nth.call(null, cicoll, 0);
      var n__2715 = 1;
      while(true) {
        if(cljs.core.truth_(n__2715 < cljs.core._count.call(null, cicoll))) {
          var G__2724 = f.call(null, val__2714, cljs.core._nth.call(null, cicoll, n__2715));
          var G__2725 = n__2715 + 1;
          val__2714 = G__2724;
          n__2715 = G__2725;
          continue
        }else {
          return val__2714
        }
        break
      }
    }
  };
  var ci_reduce__2721 = function(cicoll, f, val) {
    var val__2716 = val;
    var n__2717 = 0;
    while(true) {
      if(cljs.core.truth_(n__2717 < cljs.core._count.call(null, cicoll))) {
        var G__2726 = f.call(null, val__2716, cljs.core._nth.call(null, cicoll, n__2717));
        var G__2727 = n__2717 + 1;
        val__2716 = G__2726;
        n__2717 = G__2727;
        continue
      }else {
        return val__2716
      }
      break
    }
  };
  var ci_reduce__2722 = function(cicoll, f, val, idx) {
    var val__2718 = val;
    var n__2719 = idx;
    while(true) {
      if(cljs.core.truth_(n__2719 < cljs.core._count.call(null, cicoll))) {
        var G__2728 = f.call(null, val__2718, cljs.core._nth.call(null, cicoll, n__2719));
        var G__2729 = n__2719 + 1;
        val__2718 = G__2728;
        n__2719 = G__2729;
        continue
      }else {
        return val__2718
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__2720.call(this, cicoll, f);
      case 3:
        return ci_reduce__2721.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__2722.call(this, cicoll, f, val, idx)
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
  var this__2730 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__2743 = null;
  var G__2743__2744 = function(coll, f) {
    var this__2731 = this;
    return cljs.core.ci_reduce.call(null, coll, f, this__2731.a[this__2731.i], this__2731.i + 1)
  };
  var G__2743__2745 = function(coll, f, start) {
    var this__2732 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start, this__2732.i)
  };
  G__2743 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2743__2744.call(this, coll, f);
      case 3:
        return G__2743__2745.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2743
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__2733 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__2734 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__2747 = null;
  var G__2747__2748 = function(coll, n) {
    var this__2735 = this;
    var i__2736 = n + this__2735.i;
    if(cljs.core.truth_(i__2736 < this__2735.a.length)) {
      return this__2735.a[i__2736]
    }else {
      return null
    }
  };
  var G__2747__2749 = function(coll, n, not_found) {
    var this__2737 = this;
    var i__2738 = n + this__2737.i;
    if(cljs.core.truth_(i__2738 < this__2737.a.length)) {
      return this__2737.a[i__2738]
    }else {
      return not_found
    }
  };
  G__2747 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2747__2748.call(this, coll, n);
      case 3:
        return G__2747__2749.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2747
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__2739 = this;
  return this__2739.a.length - this__2739.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__2740 = this;
  return this__2740.a[this__2740.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__2741 = this;
  if(cljs.core.truth_(this__2741.i + 1 < this__2741.a.length)) {
    return new cljs.core.IndexedSeq(this__2741.a, this__2741.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__2742 = this;
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
  var G__2751 = null;
  var G__2751__2752 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__2751__2753 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__2751 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2751__2752.call(this, array, f);
      case 3:
        return G__2751__2753.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2751
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__2755 = null;
  var G__2755__2756 = function(array, k) {
    return array[k]
  };
  var G__2755__2757 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__2755 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2755__2756.call(this, array, k);
      case 3:
        return G__2755__2757.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2755
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__2759 = null;
  var G__2759__2760 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__2759__2761 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__2759 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2759__2760.call(this, array, n);
      case 3:
        return G__2759__2761.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2759
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
  var temp__3698__auto____2763 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____2763)) {
    var s__2764 = temp__3698__auto____2763;
    return cljs.core._first.call(null, s__2764)
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
      var G__2765 = cljs.core.next.call(null, s);
      s = G__2765;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__2766 = cljs.core.seq.call(null, x);
  var n__2767 = 0;
  while(true) {
    if(cljs.core.truth_(s__2766)) {
      var G__2768 = cljs.core.next.call(null, s__2766);
      var G__2769 = n__2767 + 1;
      s__2766 = G__2768;
      n__2767 = G__2769;
      continue
    }else {
      return n__2767
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
  var conj__2770 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__2771 = function() {
    var G__2773__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__2774 = conj.call(null, coll, x);
          var G__2775 = cljs.core.first.call(null, xs);
          var G__2776 = cljs.core.next.call(null, xs);
          coll = G__2774;
          x = G__2775;
          xs = G__2776;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__2773 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2773__delegate.call(this, coll, x, xs)
    };
    G__2773.cljs$lang$maxFixedArity = 2;
    G__2773.cljs$lang$applyTo = function(arglist__2777) {
      var coll = cljs.core.first(arglist__2777);
      var x = cljs.core.first(cljs.core.next(arglist__2777));
      var xs = cljs.core.rest(cljs.core.next(arglist__2777));
      return G__2773__delegate.call(this, coll, x, xs)
    };
    return G__2773
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__2770.call(this, coll, x);
      default:
        return conj__2771.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__2771.cljs$lang$applyTo;
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
  var nth__2778 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__2779 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__2778.call(this, coll, n);
      case 3:
        return nth__2779.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__2781 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__2782 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__2781.call(this, o, k);
      case 3:
        return get__2782.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__2785 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__2786 = function() {
    var G__2788__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__2784 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__2789 = ret__2784;
          var G__2790 = cljs.core.first.call(null, kvs);
          var G__2791 = cljs.core.second.call(null, kvs);
          var G__2792 = cljs.core.nnext.call(null, kvs);
          coll = G__2789;
          k = G__2790;
          v = G__2791;
          kvs = G__2792;
          continue
        }else {
          return ret__2784
        }
        break
      }
    };
    var G__2788 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__2788__delegate.call(this, coll, k, v, kvs)
    };
    G__2788.cljs$lang$maxFixedArity = 3;
    G__2788.cljs$lang$applyTo = function(arglist__2793) {
      var coll = cljs.core.first(arglist__2793);
      var k = cljs.core.first(cljs.core.next(arglist__2793));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2793)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2793)));
      return G__2788__delegate.call(this, coll, k, v, kvs)
    };
    return G__2788
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__2785.call(this, coll, k, v);
      default:
        return assoc__2786.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__2786.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__2795 = function(coll) {
    return coll
  };
  var dissoc__2796 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__2797 = function() {
    var G__2799__delegate = function(coll, k, ks) {
      while(true) {
        var ret__2794 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__2800 = ret__2794;
          var G__2801 = cljs.core.first.call(null, ks);
          var G__2802 = cljs.core.next.call(null, ks);
          coll = G__2800;
          k = G__2801;
          ks = G__2802;
          continue
        }else {
          return ret__2794
        }
        break
      }
    };
    var G__2799 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2799__delegate.call(this, coll, k, ks)
    };
    G__2799.cljs$lang$maxFixedArity = 2;
    G__2799.cljs$lang$applyTo = function(arglist__2803) {
      var coll = cljs.core.first(arglist__2803);
      var k = cljs.core.first(cljs.core.next(arglist__2803));
      var ks = cljs.core.rest(cljs.core.next(arglist__2803));
      return G__2799__delegate.call(this, coll, k, ks)
    };
    return G__2799
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__2795.call(this, coll);
      case 2:
        return dissoc__2796.call(this, coll, k);
      default:
        return dissoc__2797.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__2797.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__319__auto____2804 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2805 = x__319__auto____2804;
      if(cljs.core.truth_(and__3546__auto____2805)) {
        var and__3546__auto____2806 = x__319__auto____2804.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____2806)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2804))
        }else {
          return and__3546__auto____2806
        }
      }else {
        return and__3546__auto____2805
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____2804)
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
  var disj__2808 = function(coll) {
    return coll
  };
  var disj__2809 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__2810 = function() {
    var G__2812__delegate = function(coll, k, ks) {
      while(true) {
        var ret__2807 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__2813 = ret__2807;
          var G__2814 = cljs.core.first.call(null, ks);
          var G__2815 = cljs.core.next.call(null, ks);
          coll = G__2813;
          k = G__2814;
          ks = G__2815;
          continue
        }else {
          return ret__2807
        }
        break
      }
    };
    var G__2812 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2812__delegate.call(this, coll, k, ks)
    };
    G__2812.cljs$lang$maxFixedArity = 2;
    G__2812.cljs$lang$applyTo = function(arglist__2816) {
      var coll = cljs.core.first(arglist__2816);
      var k = cljs.core.first(cljs.core.next(arglist__2816));
      var ks = cljs.core.rest(cljs.core.next(arglist__2816));
      return G__2812__delegate.call(this, coll, k, ks)
    };
    return G__2812
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__2808.call(this, coll);
      case 2:
        return disj__2809.call(this, coll, k);
      default:
        return disj__2810.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__2810.cljs$lang$applyTo;
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
    var x__319__auto____2817 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2818 = x__319__auto____2817;
      if(cljs.core.truth_(and__3546__auto____2818)) {
        var and__3546__auto____2819 = x__319__auto____2817.cljs$core$ICollection$;
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
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__319__auto____2817)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____2820 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2821 = x__319__auto____2820;
      if(cljs.core.truth_(and__3546__auto____2821)) {
        var and__3546__auto____2822 = x__319__auto____2820.cljs$core$ISet$;
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
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__319__auto____2820)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__319__auto____2823 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2824 = x__319__auto____2823;
    if(cljs.core.truth_(and__3546__auto____2824)) {
      var and__3546__auto____2825 = x__319__auto____2823.cljs$core$IAssociative$;
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
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__319__auto____2823)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__319__auto____2826 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2827 = x__319__auto____2826;
    if(cljs.core.truth_(and__3546__auto____2827)) {
      var and__3546__auto____2828 = x__319__auto____2826.cljs$core$ISequential$;
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
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__319__auto____2826)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__319__auto____2829 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2830 = x__319__auto____2829;
    if(cljs.core.truth_(and__3546__auto____2830)) {
      var and__3546__auto____2831 = x__319__auto____2829.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____2831)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2829))
      }else {
        return and__3546__auto____2831
      }
    }else {
      return and__3546__auto____2830
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__319__auto____2829)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____2832 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2833 = x__319__auto____2832;
      if(cljs.core.truth_(and__3546__auto____2833)) {
        var and__3546__auto____2834 = x__319__auto____2832.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____2834)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2832))
        }else {
          return and__3546__auto____2834
        }
      }else {
        return and__3546__auto____2833
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__319__auto____2832)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__319__auto____2835 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____2836 = x__319__auto____2835;
    if(cljs.core.truth_(and__3546__auto____2836)) {
      var and__3546__auto____2837 = x__319__auto____2835.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____2837)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2835))
      }else {
        return and__3546__auto____2837
      }
    }else {
      return and__3546__auto____2836
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__319__auto____2835)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__2838 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__2838.push(key)
  });
  return keys__2838
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
    var x__319__auto____2839 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____2840 = x__319__auto____2839;
      if(cljs.core.truth_(and__3546__auto____2840)) {
        var and__3546__auto____2841 = x__319__auto____2839.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____2841)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____2839))
        }else {
          return and__3546__auto____2841
        }
      }else {
        return and__3546__auto____2840
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__319__auto____2839)
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
  var and__3546__auto____2842 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2842)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____2843 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____2843)) {
        return or__3548__auto____2843
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____2842
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____2844 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2844)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____2844
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____2845 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____2845)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____2845
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____2846 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____2846)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____2846
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
    var and__3546__auto____2847 = coll;
    if(cljs.core.truth_(and__3546__auto____2847)) {
      var and__3546__auto____2848 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____2848)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____2848
      }
    }else {
      return and__3546__auto____2847
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___2853 = function(x) {
    return true
  };
  var distinct_QMARK___2854 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___2855 = function() {
    var G__2857__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__2849 = cljs.core.set([y, x]);
        var xs__2850 = more;
        while(true) {
          var x__2851 = cljs.core.first.call(null, xs__2850);
          var etc__2852 = cljs.core.next.call(null, xs__2850);
          if(cljs.core.truth_(xs__2850)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__2849, x__2851))) {
              return false
            }else {
              var G__2858 = cljs.core.conj.call(null, s__2849, x__2851);
              var G__2859 = etc__2852;
              s__2849 = G__2858;
              xs__2850 = G__2859;
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
    var G__2857 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2857__delegate.call(this, x, y, more)
    };
    G__2857.cljs$lang$maxFixedArity = 2;
    G__2857.cljs$lang$applyTo = function(arglist__2860) {
      var x = cljs.core.first(arglist__2860);
      var y = cljs.core.first(cljs.core.next(arglist__2860));
      var more = cljs.core.rest(cljs.core.next(arglist__2860));
      return G__2857__delegate.call(this, x, y, more)
    };
    return G__2857
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___2853.call(this, x);
      case 2:
        return distinct_QMARK___2854.call(this, x, y);
      default:
        return distinct_QMARK___2855.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2855.cljs$lang$applyTo;
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
      var r__2861 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__2861))) {
        return r__2861
      }else {
        if(cljs.core.truth_(r__2861)) {
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
  var sort__2863 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__2864 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__2862 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__2862, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__2862)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__2863.call(this, comp);
      case 2:
        return sort__2864.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__2866 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__2867 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__2866.call(this, keyfn, comp);
      case 3:
        return sort_by__2867.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__2869 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__2870 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__2869.call(this, f, val);
      case 3:
        return reduce__2870.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__2876 = function(f, coll) {
    var temp__3695__auto____2872 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____2872)) {
      var s__2873 = temp__3695__auto____2872;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__2873), cljs.core.next.call(null, s__2873))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__2877 = function(f, val, coll) {
    var val__2874 = val;
    var coll__2875 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__2875)) {
        var G__2879 = f.call(null, val__2874, cljs.core.first.call(null, coll__2875));
        var G__2880 = cljs.core.next.call(null, coll__2875);
        val__2874 = G__2879;
        coll__2875 = G__2880;
        continue
      }else {
        return val__2874
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__2876.call(this, f, val);
      case 3:
        return seq_reduce__2877.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__2881 = null;
  var G__2881__2882 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__2881__2883 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__2881 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__2881__2882.call(this, coll, f);
      case 3:
        return G__2881__2883.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2881
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___2885 = function() {
    return 0
  };
  var _PLUS___2886 = function(x) {
    return x
  };
  var _PLUS___2887 = function(x, y) {
    return x + y
  };
  var _PLUS___2888 = function() {
    var G__2890__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, _PLUS_.call(null, x, y), more)
    };
    var G__2890 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2890__delegate.call(this, x, y, more)
    };
    G__2890.cljs$lang$maxFixedArity = 2;
    G__2890.cljs$lang$applyTo = function(arglist__2891) {
      var x = cljs.core.first(arglist__2891);
      var y = cljs.core.first(cljs.core.next(arglist__2891));
      var more = cljs.core.rest(cljs.core.next(arglist__2891));
      return G__2890__delegate.call(this, x, y, more)
    };
    return G__2890
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___2885.call(this);
      case 1:
        return _PLUS___2886.call(this, x);
      case 2:
        return _PLUS___2887.call(this, x, y);
      default:
        return _PLUS___2888.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___2888.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___2892 = function(x) {
    return-x
  };
  var ___2893 = function(x, y) {
    return x - y
  };
  var ___2894 = function() {
    var G__2896__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, _.call(null, x, y), more)
    };
    var G__2896 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2896__delegate.call(this, x, y, more)
    };
    G__2896.cljs$lang$maxFixedArity = 2;
    G__2896.cljs$lang$applyTo = function(arglist__2897) {
      var x = cljs.core.first(arglist__2897);
      var y = cljs.core.first(cljs.core.next(arglist__2897));
      var more = cljs.core.rest(cljs.core.next(arglist__2897));
      return G__2896__delegate.call(this, x, y, more)
    };
    return G__2896
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___2892.call(this, x);
      case 2:
        return ___2893.call(this, x, y);
      default:
        return ___2894.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___2894.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___2898 = function() {
    return 1
  };
  var _STAR___2899 = function(x) {
    return x
  };
  var _STAR___2900 = function(x, y) {
    return x * y
  };
  var _STAR___2901 = function() {
    var G__2903__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, _STAR_.call(null, x, y), more)
    };
    var G__2903 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2903__delegate.call(this, x, y, more)
    };
    G__2903.cljs$lang$maxFixedArity = 2;
    G__2903.cljs$lang$applyTo = function(arglist__2904) {
      var x = cljs.core.first(arglist__2904);
      var y = cljs.core.first(cljs.core.next(arglist__2904));
      var more = cljs.core.rest(cljs.core.next(arglist__2904));
      return G__2903__delegate.call(this, x, y, more)
    };
    return G__2903
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___2898.call(this);
      case 1:
        return _STAR___2899.call(this, x);
      case 2:
        return _STAR___2900.call(this, x, y);
      default:
        return _STAR___2901.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___2901.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___2905 = function(x) {
    return 1 / x
  };
  var _SLASH___2906 = function(x, y) {
    return x / y
  };
  var _SLASH___2907 = function() {
    var G__2909__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__2909 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2909__delegate.call(this, x, y, more)
    };
    G__2909.cljs$lang$maxFixedArity = 2;
    G__2909.cljs$lang$applyTo = function(arglist__2910) {
      var x = cljs.core.first(arglist__2910);
      var y = cljs.core.first(cljs.core.next(arglist__2910));
      var more = cljs.core.rest(cljs.core.next(arglist__2910));
      return G__2909__delegate.call(this, x, y, more)
    };
    return G__2909
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___2905.call(this, x);
      case 2:
        return _SLASH___2906.call(this, x, y);
      default:
        return _SLASH___2907.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___2907.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___2911 = function(x) {
    return true
  };
  var _LT___2912 = function(x, y) {
    return x < y
  };
  var _LT___2913 = function() {
    var G__2915__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2916 = y;
            var G__2917 = cljs.core.first.call(null, more);
            var G__2918 = cljs.core.next.call(null, more);
            x = G__2916;
            y = G__2917;
            more = G__2918;
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
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___2911.call(this, x);
      case 2:
        return _LT___2912.call(this, x, y);
      default:
        return _LT___2913.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___2913.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___2920 = function(x) {
    return true
  };
  var _LT__EQ___2921 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___2922 = function() {
    var G__2924__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2925 = y;
            var G__2926 = cljs.core.first.call(null, more);
            var G__2927 = cljs.core.next.call(null, more);
            x = G__2925;
            y = G__2926;
            more = G__2927;
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
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___2920.call(this, x);
      case 2:
        return _LT__EQ___2921.call(this, x, y);
      default:
        return _LT__EQ___2922.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___2922.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___2929 = function(x) {
    return true
  };
  var _GT___2930 = function(x, y) {
    return x > y
  };
  var _GT___2931 = function() {
    var G__2933__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2934 = y;
            var G__2935 = cljs.core.first.call(null, more);
            var G__2936 = cljs.core.next.call(null, more);
            x = G__2934;
            y = G__2935;
            more = G__2936;
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
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___2929.call(this, x);
      case 2:
        return _GT___2930.call(this, x, y);
      default:
        return _GT___2931.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___2931.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___2938 = function(x) {
    return true
  };
  var _GT__EQ___2939 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___2940 = function() {
    var G__2942__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2943 = y;
            var G__2944 = cljs.core.first.call(null, more);
            var G__2945 = cljs.core.next.call(null, more);
            x = G__2943;
            y = G__2944;
            more = G__2945;
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
    var G__2942 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2942__delegate.call(this, x, y, more)
    };
    G__2942.cljs$lang$maxFixedArity = 2;
    G__2942.cljs$lang$applyTo = function(arglist__2946) {
      var x = cljs.core.first(arglist__2946);
      var y = cljs.core.first(cljs.core.next(arglist__2946));
      var more = cljs.core.rest(cljs.core.next(arglist__2946));
      return G__2942__delegate.call(this, x, y, more)
    };
    return G__2942
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___2938.call(this, x);
      case 2:
        return _GT__EQ___2939.call(this, x, y);
      default:
        return _GT__EQ___2940.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___2940.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__2947 = function(x) {
    return x
  };
  var max__2948 = function(x, y) {
    return x > y ? x : y
  };
  var max__2949 = function() {
    var G__2951__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, max.call(null, x, y), more)
    };
    var G__2951 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2951__delegate.call(this, x, y, more)
    };
    G__2951.cljs$lang$maxFixedArity = 2;
    G__2951.cljs$lang$applyTo = function(arglist__2952) {
      var x = cljs.core.first(arglist__2952);
      var y = cljs.core.first(cljs.core.next(arglist__2952));
      var more = cljs.core.rest(cljs.core.next(arglist__2952));
      return G__2951__delegate.call(this, x, y, more)
    };
    return G__2951
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__2947.call(this, x);
      case 2:
        return max__2948.call(this, x, y);
      default:
        return max__2949.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__2949.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__2953 = function(x) {
    return x
  };
  var min__2954 = function(x, y) {
    return x < y ? x : y
  };
  var min__2955 = function() {
    var G__2957__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, min.call(null, x, y), more)
    };
    var G__2957 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2957__delegate.call(this, x, y, more)
    };
    G__2957.cljs$lang$maxFixedArity = 2;
    G__2957.cljs$lang$applyTo = function(arglist__2958) {
      var x = cljs.core.first(arglist__2958);
      var y = cljs.core.first(cljs.core.next(arglist__2958));
      var more = cljs.core.rest(cljs.core.next(arglist__2958));
      return G__2957__delegate.call(this, x, y, more)
    };
    return G__2957
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__2953.call(this, x);
      case 2:
        return min__2954.call(this, x, y);
      default:
        return min__2955.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__2955.cljs$lang$applyTo;
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
  var rem__2959 = n % d;
  return cljs.core.fix.call(null, (n - rem__2959) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__2960 = cljs.core.quot.call(null, n, d);
  return n - d * q__2960
};
cljs.core.rand = function() {
  var rand = null;
  var rand__2961 = function() {
    return Math.random.call(null)
  };
  var rand__2962 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__2961.call(this);
      case 1:
        return rand__2962.call(this, n)
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
  var _EQ__EQ___2964 = function(x) {
    return true
  };
  var _EQ__EQ___2965 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___2966 = function() {
    var G__2968__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__2969 = y;
            var G__2970 = cljs.core.first.call(null, more);
            var G__2971 = cljs.core.next.call(null, more);
            x = G__2969;
            y = G__2970;
            more = G__2971;
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
    var G__2968 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__2968__delegate.call(this, x, y, more)
    };
    G__2968.cljs$lang$maxFixedArity = 2;
    G__2968.cljs$lang$applyTo = function(arglist__2972) {
      var x = cljs.core.first(arglist__2972);
      var y = cljs.core.first(cljs.core.next(arglist__2972));
      var more = cljs.core.rest(cljs.core.next(arglist__2972));
      return G__2968__delegate.call(this, x, y, more)
    };
    return G__2968
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___2964.call(this, x);
      case 2:
        return _EQ__EQ___2965.call(this, x, y);
      default:
        return _EQ__EQ___2966.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2966.cljs$lang$applyTo;
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
  var n__2973 = n;
  var xs__2974 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____2975 = xs__2974;
      if(cljs.core.truth_(and__3546__auto____2975)) {
        return n__2973 > 0
      }else {
        return and__3546__auto____2975
      }
    }())) {
      var G__2976 = n__2973 - 1;
      var G__2977 = cljs.core.next.call(null, xs__2974);
      n__2973 = G__2976;
      xs__2974 = G__2977;
      continue
    }else {
      return xs__2974
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__2982 = null;
  var G__2982__2983 = function(coll, n) {
    var temp__3695__auto____2978 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____2978)) {
      var xs__2979 = temp__3695__auto____2978;
      return cljs.core.first.call(null, xs__2979)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__2982__2984 = function(coll, n, not_found) {
    var temp__3695__auto____2980 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____2980)) {
      var xs__2981 = temp__3695__auto____2980;
      return cljs.core.first.call(null, xs__2981)
    }else {
      return not_found
    }
  };
  G__2982 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2982__2983.call(this, coll, n);
      case 3:
        return G__2982__2984.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2982
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___2986 = function() {
    return""
  };
  var str_STAR___2987 = function(x) {
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
  var str_STAR___2988 = function() {
    var G__2990__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__2991 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__2992 = cljs.core.next.call(null, more);
            sb = G__2991;
            more = G__2992;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__2990 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__2990__delegate.call(this, x, ys)
    };
    G__2990.cljs$lang$maxFixedArity = 1;
    G__2990.cljs$lang$applyTo = function(arglist__2993) {
      var x = cljs.core.first(arglist__2993);
      var ys = cljs.core.rest(arglist__2993);
      return G__2990__delegate.call(this, x, ys)
    };
    return G__2990
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___2986.call(this);
      case 1:
        return str_STAR___2987.call(this, x);
      default:
        return str_STAR___2988.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___2988.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__2994 = function() {
    return""
  };
  var str__2995 = function(x) {
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
  var str__2996 = function() {
    var G__2998__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__2998 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__2998__delegate.call(this, x, ys)
    };
    G__2998.cljs$lang$maxFixedArity = 1;
    G__2998.cljs$lang$applyTo = function(arglist__2999) {
      var x = cljs.core.first(arglist__2999);
      var ys = cljs.core.rest(arglist__2999);
      return G__2998__delegate.call(this, x, ys)
    };
    return G__2998
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__2994.call(this);
      case 1:
        return str__2995.call(this, x);
      default:
        return str__2996.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__2996.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__3000 = function(s, start) {
    return s.substring(start)
  };
  var subs__3001 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__3000.call(this, s, start);
      case 3:
        return subs__3001.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__3003 = function(name) {
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
  var symbol__3004 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__3003.call(this, ns);
      case 2:
        return symbol__3004.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__3006 = function(name) {
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
  var keyword__3007 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__3006.call(this, ns);
      case 2:
        return keyword__3007.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__3009 = cljs.core.seq.call(null, x);
    var ys__3010 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__3009))) {
        return cljs.core.nil_QMARK_.call(null, ys__3010)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__3010))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__3009), cljs.core.first.call(null, ys__3010)))) {
            var G__3011 = cljs.core.next.call(null, xs__3009);
            var G__3012 = cljs.core.next.call(null, ys__3010);
            xs__3009 = G__3011;
            ys__3010 = G__3012;
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
  return cljs.core.reduce.call(null, function(p1__3013_SHARP_, p2__3014_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__3013_SHARP_, cljs.core.hash.call(null, p2__3014_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__3015__3016 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__3015__3016)) {
    var G__3018__3020 = cljs.core.first.call(null, G__3015__3016);
    var vec__3019__3021 = G__3018__3020;
    var key_name__3022 = cljs.core.nth.call(null, vec__3019__3021, 0, null);
    var f__3023 = cljs.core.nth.call(null, vec__3019__3021, 1, null);
    var G__3015__3024 = G__3015__3016;
    var G__3018__3025 = G__3018__3020;
    var G__3015__3026 = G__3015__3024;
    while(true) {
      var vec__3027__3028 = G__3018__3025;
      var key_name__3029 = cljs.core.nth.call(null, vec__3027__3028, 0, null);
      var f__3030 = cljs.core.nth.call(null, vec__3027__3028, 1, null);
      var G__3015__3031 = G__3015__3026;
      var str_name__3032 = cljs.core.name.call(null, key_name__3029);
      obj[str_name__3032] = f__3030;
      var temp__3698__auto____3033 = cljs.core.next.call(null, G__3015__3031);
      if(cljs.core.truth_(temp__3698__auto____3033)) {
        var G__3015__3034 = temp__3698__auto____3033;
        var G__3035 = cljs.core.first.call(null, G__3015__3034);
        var G__3036 = G__3015__3034;
        G__3018__3025 = G__3035;
        G__3015__3026 = G__3036;
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
  var this__3037 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3038 = this;
  return new cljs.core.List(this__3038.meta, o, coll, this__3038.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3039 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3040 = this;
  return this__3040.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3041 = this;
  return this__3041.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3042 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3043 = this;
  return this__3043.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3044 = this;
  return this__3044.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3045 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3046 = this;
  return new cljs.core.List(meta, this__3046.first, this__3046.rest, this__3046.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3047 = this;
  return this__3047.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3048 = this;
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3049 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3050 = this;
  return new cljs.core.List(this__3050.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3051 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3052 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3053 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3054 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3055 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3056 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3057 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3058 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3059 = this;
  return this__3059.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3060 = this;
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
  list.cljs$lang$applyTo = function(arglist__3061) {
    var items = cljs.core.seq(arglist__3061);
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
  var this__3062 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3063 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3064 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3065 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3065.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3066 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3067 = this;
  return this__3067.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3068 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__3068.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__3068.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3069 = this;
  return this__3069.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3070 = this;
  return new cljs.core.Cons(meta, this__3070.first, this__3070.rest)
};
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__3071 = null;
  var G__3071__3072 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__3071__3073 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__3071 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3071__3072.call(this, string, f);
      case 3:
        return G__3071__3073.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3071
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__3075 = null;
  var G__3075__3076 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__3075__3077 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__3075 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3075__3076.call(this, string, k);
      case 3:
        return G__3075__3077.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3075
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__3079 = null;
  var G__3079__3080 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__3079__3081 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__3079 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3079__3080.call(this, string, n);
      case 3:
        return G__3079__3081.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3079
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
  var G__3083 = null;
  var G__3083__3084 = function(_, coll) {
    return cljs.core.get.call(null, coll, this.toString())
  };
  var G__3083__3085 = function(_, coll, not_found) {
    return cljs.core.get.call(null, coll, this.toString(), not_found)
  };
  G__3083 = function(_, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3083__3084.call(this, _, coll);
      case 3:
        return G__3083__3085.call(this, _, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3083
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__3087 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__3087
  }else {
    lazy_seq.x = x__3087.call(null);
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
  var this__3088 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3089 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3090 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3091 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3091.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3092 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__3093 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__3094 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3095 = this;
  return this__3095.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3096 = this;
  return new cljs.core.LazySeq(meta, this__3096.realized, this__3096.x)
};
cljs.core.to_array = function to_array(s) {
  var ary__3097 = cljs.core.array.call(null);
  var s__3098 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__3098))) {
      ary__3097.push(cljs.core.first.call(null, s__3098));
      var G__3099 = cljs.core.next.call(null, s__3098);
      s__3098 = G__3099;
      continue
    }else {
      return ary__3097
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__3100 = s;
  var i__3101 = n;
  var sum__3102 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3103 = i__3101 > 0;
      if(cljs.core.truth_(and__3546__auto____3103)) {
        return cljs.core.seq.call(null, s__3100)
      }else {
        return and__3546__auto____3103
      }
    }())) {
      var G__3104 = cljs.core.next.call(null, s__3100);
      var G__3105 = i__3101 - 1;
      var G__3106 = sum__3102 + 1;
      s__3100 = G__3104;
      i__3101 = G__3105;
      sum__3102 = G__3106;
      continue
    }else {
      return sum__3102
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
  var concat__3110 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__3111 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__3112 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__3107 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__3107)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3107), concat.call(null, cljs.core.rest.call(null, s__3107), y))
      }else {
        return y
      }
    })
  };
  var concat__3113 = function() {
    var G__3115__delegate = function(x, y, zs) {
      var cat__3109 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__3108 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__3108)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__3108), cat.call(null, cljs.core.rest.call(null, xys__3108), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__3109.call(null, concat.call(null, x, y), zs)
    };
    var G__3115 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3115__delegate.call(this, x, y, zs)
    };
    G__3115.cljs$lang$maxFixedArity = 2;
    G__3115.cljs$lang$applyTo = function(arglist__3116) {
      var x = cljs.core.first(arglist__3116);
      var y = cljs.core.first(cljs.core.next(arglist__3116));
      var zs = cljs.core.rest(cljs.core.next(arglist__3116));
      return G__3115__delegate.call(this, x, y, zs)
    };
    return G__3115
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__3110.call(this);
      case 1:
        return concat__3111.call(this, x);
      case 2:
        return concat__3112.call(this, x, y);
      default:
        return concat__3113.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__3113.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___3117 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___3118 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___3119 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___3120 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___3121 = function() {
    var G__3123__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__3123 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3123__delegate.call(this, a, b, c, d, more)
    };
    G__3123.cljs$lang$maxFixedArity = 4;
    G__3123.cljs$lang$applyTo = function(arglist__3124) {
      var a = cljs.core.first(arglist__3124);
      var b = cljs.core.first(cljs.core.next(arglist__3124));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3124)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3124))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3124))));
      return G__3123__delegate.call(this, a, b, c, d, more)
    };
    return G__3123
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___3117.call(this, a);
      case 2:
        return list_STAR___3118.call(this, a, b);
      case 3:
        return list_STAR___3119.call(this, a, b, c);
      case 4:
        return list_STAR___3120.call(this, a, b, c, d);
      default:
        return list_STAR___3121.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___3121.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__3134 = function(f, args) {
    var fixed_arity__3125 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__3125 + 1) <= fixed_arity__3125)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__3135 = function(f, x, args) {
    var arglist__3126 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__3127 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3126, fixed_arity__3127) <= fixed_arity__3127)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3126))
      }else {
        return f.cljs$lang$applyTo(arglist__3126)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3126))
    }
  };
  var apply__3136 = function(f, x, y, args) {
    var arglist__3128 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__3129 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3128, fixed_arity__3129) <= fixed_arity__3129)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3128))
      }else {
        return f.cljs$lang$applyTo(arglist__3128)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3128))
    }
  };
  var apply__3137 = function(f, x, y, z, args) {
    var arglist__3130 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__3131 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3130, fixed_arity__3131) <= fixed_arity__3131)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3130))
      }else {
        return f.cljs$lang$applyTo(arglist__3130)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__3130))
    }
  };
  var apply__3138 = function() {
    var G__3140__delegate = function(f, a, b, c, d, args) {
      var arglist__3132 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__3133 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__3132, fixed_arity__3133) <= fixed_arity__3133)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__3132))
        }else {
          return f.cljs$lang$applyTo(arglist__3132)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__3132))
      }
    };
    var G__3140 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__3140__delegate.call(this, f, a, b, c, d, args)
    };
    G__3140.cljs$lang$maxFixedArity = 5;
    G__3140.cljs$lang$applyTo = function(arglist__3141) {
      var f = cljs.core.first(arglist__3141);
      var a = cljs.core.first(cljs.core.next(arglist__3141));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3141)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3141))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3141)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3141)))));
      return G__3140__delegate.call(this, f, a, b, c, d, args)
    };
    return G__3140
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__3134.call(this, f, a);
      case 3:
        return apply__3135.call(this, f, a, b);
      case 4:
        return apply__3136.call(this, f, a, b, c);
      case 5:
        return apply__3137.call(this, f, a, b, c, d);
      default:
        return apply__3138.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__3138.cljs$lang$applyTo;
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
  vary_meta.cljs$lang$applyTo = function(arglist__3142) {
    var obj = cljs.core.first(arglist__3142);
    var f = cljs.core.first(cljs.core.next(arglist__3142));
    var args = cljs.core.rest(cljs.core.next(arglist__3142));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___3143 = function(x) {
    return false
  };
  var not_EQ___3144 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___3145 = function() {
    var G__3147__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__3147 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3147__delegate.call(this, x, y, more)
    };
    G__3147.cljs$lang$maxFixedArity = 2;
    G__3147.cljs$lang$applyTo = function(arglist__3148) {
      var x = cljs.core.first(arglist__3148);
      var y = cljs.core.first(cljs.core.next(arglist__3148));
      var more = cljs.core.rest(cljs.core.next(arglist__3148));
      return G__3147__delegate.call(this, x, y, more)
    };
    return G__3147
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___3143.call(this, x);
      case 2:
        return not_EQ___3144.call(this, x, y);
      default:
        return not_EQ___3145.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___3145.cljs$lang$applyTo;
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
        var G__3149 = pred;
        var G__3150 = cljs.core.next.call(null, coll);
        pred = G__3149;
        coll = G__3150;
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
      var or__3548__auto____3151 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____3151)) {
        return or__3548__auto____3151
      }else {
        var G__3152 = pred;
        var G__3153 = cljs.core.next.call(null, coll);
        pred = G__3152;
        coll = G__3153;
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
    var G__3154 = null;
    var G__3154__3155 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__3154__3156 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__3154__3157 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__3154__3158 = function() {
      var G__3160__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__3160 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__3160__delegate.call(this, x, y, zs)
      };
      G__3160.cljs$lang$maxFixedArity = 2;
      G__3160.cljs$lang$applyTo = function(arglist__3161) {
        var x = cljs.core.first(arglist__3161);
        var y = cljs.core.first(cljs.core.next(arglist__3161));
        var zs = cljs.core.rest(cljs.core.next(arglist__3161));
        return G__3160__delegate.call(this, x, y, zs)
      };
      return G__3160
    }();
    G__3154 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__3154__3155.call(this);
        case 1:
          return G__3154__3156.call(this, x);
        case 2:
          return G__3154__3157.call(this, x, y);
        default:
          return G__3154__3158.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__3154.cljs$lang$maxFixedArity = 2;
    G__3154.cljs$lang$applyTo = G__3154__3158.cljs$lang$applyTo;
    return G__3154
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__3162__delegate = function(args) {
      return x
    };
    var G__3162 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__3162__delegate.call(this, args)
    };
    G__3162.cljs$lang$maxFixedArity = 0;
    G__3162.cljs$lang$applyTo = function(arglist__3163) {
      var args = cljs.core.seq(arglist__3163);
      return G__3162__delegate.call(this, args)
    };
    return G__3162
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__3167 = function() {
    return cljs.core.identity
  };
  var comp__3168 = function(f) {
    return f
  };
  var comp__3169 = function(f, g) {
    return function() {
      var G__3173 = null;
      var G__3173__3174 = function() {
        return f.call(null, g.call(null))
      };
      var G__3173__3175 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__3173__3176 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__3173__3177 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__3173__3178 = function() {
        var G__3180__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
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
  var comp__3170 = function(f, g, h) {
    return function() {
      var G__3182 = null;
      var G__3182__3183 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__3182__3184 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__3182__3185 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__3182__3186 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__3182__3187 = function() {
        var G__3189__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__3189 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3189__delegate.call(this, x, y, z, args)
        };
        G__3189.cljs$lang$maxFixedArity = 3;
        G__3189.cljs$lang$applyTo = function(arglist__3190) {
          var x = cljs.core.first(arglist__3190);
          var y = cljs.core.first(cljs.core.next(arglist__3190));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3190)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3190)));
          return G__3189__delegate.call(this, x, y, z, args)
        };
        return G__3189
      }();
      G__3182 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3182__3183.call(this);
          case 1:
            return G__3182__3184.call(this, x);
          case 2:
            return G__3182__3185.call(this, x, y);
          case 3:
            return G__3182__3186.call(this, x, y, z);
          default:
            return G__3182__3187.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3182.cljs$lang$maxFixedArity = 3;
      G__3182.cljs$lang$applyTo = G__3182__3187.cljs$lang$applyTo;
      return G__3182
    }()
  };
  var comp__3171 = function() {
    var G__3191__delegate = function(f1, f2, f3, fs) {
      var fs__3164 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__3192__delegate = function(args) {
          var ret__3165 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__3164), args);
          var fs__3166 = cljs.core.next.call(null, fs__3164);
          while(true) {
            if(cljs.core.truth_(fs__3166)) {
              var G__3193 = cljs.core.first.call(null, fs__3166).call(null, ret__3165);
              var G__3194 = cljs.core.next.call(null, fs__3166);
              ret__3165 = G__3193;
              fs__3166 = G__3194;
              continue
            }else {
              return ret__3165
            }
            break
          }
        };
        var G__3192 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__3192__delegate.call(this, args)
        };
        G__3192.cljs$lang$maxFixedArity = 0;
        G__3192.cljs$lang$applyTo = function(arglist__3195) {
          var args = cljs.core.seq(arglist__3195);
          return G__3192__delegate.call(this, args)
        };
        return G__3192
      }()
    };
    var G__3191 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3191__delegate.call(this, f1, f2, f3, fs)
    };
    G__3191.cljs$lang$maxFixedArity = 3;
    G__3191.cljs$lang$applyTo = function(arglist__3196) {
      var f1 = cljs.core.first(arglist__3196);
      var f2 = cljs.core.first(cljs.core.next(arglist__3196));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3196)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3196)));
      return G__3191__delegate.call(this, f1, f2, f3, fs)
    };
    return G__3191
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__3167.call(this);
      case 1:
        return comp__3168.call(this, f1);
      case 2:
        return comp__3169.call(this, f1, f2);
      case 3:
        return comp__3170.call(this, f1, f2, f3);
      default:
        return comp__3171.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__3171.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__3197 = function(f, arg1) {
    return function() {
      var G__3202__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__3202 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3202__delegate.call(this, args)
      };
      G__3202.cljs$lang$maxFixedArity = 0;
      G__3202.cljs$lang$applyTo = function(arglist__3203) {
        var args = cljs.core.seq(arglist__3203);
        return G__3202__delegate.call(this, args)
      };
      return G__3202
    }()
  };
  var partial__3198 = function(f, arg1, arg2) {
    return function() {
      var G__3204__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__3204 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3204__delegate.call(this, args)
      };
      G__3204.cljs$lang$maxFixedArity = 0;
      G__3204.cljs$lang$applyTo = function(arglist__3205) {
        var args = cljs.core.seq(arglist__3205);
        return G__3204__delegate.call(this, args)
      };
      return G__3204
    }()
  };
  var partial__3199 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__3206__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__3206 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__3206__delegate.call(this, args)
      };
      G__3206.cljs$lang$maxFixedArity = 0;
      G__3206.cljs$lang$applyTo = function(arglist__3207) {
        var args = cljs.core.seq(arglist__3207);
        return G__3206__delegate.call(this, args)
      };
      return G__3206
    }()
  };
  var partial__3200 = function() {
    var G__3208__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__3209__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__3209 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__3209__delegate.call(this, args)
        };
        G__3209.cljs$lang$maxFixedArity = 0;
        G__3209.cljs$lang$applyTo = function(arglist__3210) {
          var args = cljs.core.seq(arglist__3210);
          return G__3209__delegate.call(this, args)
        };
        return G__3209
      }()
    };
    var G__3208 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3208__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__3208.cljs$lang$maxFixedArity = 4;
    G__3208.cljs$lang$applyTo = function(arglist__3211) {
      var f = cljs.core.first(arglist__3211);
      var arg1 = cljs.core.first(cljs.core.next(arglist__3211));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3211)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3211))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3211))));
      return G__3208__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__3208
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__3197.call(this, f, arg1);
      case 3:
        return partial__3198.call(this, f, arg1, arg2);
      case 4:
        return partial__3199.call(this, f, arg1, arg2, arg3);
      default:
        return partial__3200.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__3200.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__3212 = function(f, x) {
    return function() {
      var G__3216 = null;
      var G__3216__3217 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__3216__3218 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__3216__3219 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__3216__3220 = function() {
        var G__3222__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__3222 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3222__delegate.call(this, a, b, c, ds)
        };
        G__3222.cljs$lang$maxFixedArity = 3;
        G__3222.cljs$lang$applyTo = function(arglist__3223) {
          var a = cljs.core.first(arglist__3223);
          var b = cljs.core.first(cljs.core.next(arglist__3223));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3223)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3223)));
          return G__3222__delegate.call(this, a, b, c, ds)
        };
        return G__3222
      }();
      G__3216 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__3216__3217.call(this, a);
          case 2:
            return G__3216__3218.call(this, a, b);
          case 3:
            return G__3216__3219.call(this, a, b, c);
          default:
            return G__3216__3220.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3216.cljs$lang$maxFixedArity = 3;
      G__3216.cljs$lang$applyTo = G__3216__3220.cljs$lang$applyTo;
      return G__3216
    }()
  };
  var fnil__3213 = function(f, x, y) {
    return function() {
      var G__3224 = null;
      var G__3224__3225 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__3224__3226 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__3224__3227 = function() {
        var G__3229__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__3229 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3229__delegate.call(this, a, b, c, ds)
        };
        G__3229.cljs$lang$maxFixedArity = 3;
        G__3229.cljs$lang$applyTo = function(arglist__3230) {
          var a = cljs.core.first(arglist__3230);
          var b = cljs.core.first(cljs.core.next(arglist__3230));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3230)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3230)));
          return G__3229__delegate.call(this, a, b, c, ds)
        };
        return G__3229
      }();
      G__3224 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__3224__3225.call(this, a, b);
          case 3:
            return G__3224__3226.call(this, a, b, c);
          default:
            return G__3224__3227.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3224.cljs$lang$maxFixedArity = 3;
      G__3224.cljs$lang$applyTo = G__3224__3227.cljs$lang$applyTo;
      return G__3224
    }()
  };
  var fnil__3214 = function(f, x, y, z) {
    return function() {
      var G__3231 = null;
      var G__3231__3232 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__3231__3233 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__3231__3234 = function() {
        var G__3236__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__3236 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3236__delegate.call(this, a, b, c, ds)
        };
        G__3236.cljs$lang$maxFixedArity = 3;
        G__3236.cljs$lang$applyTo = function(arglist__3237) {
          var a = cljs.core.first(arglist__3237);
          var b = cljs.core.first(cljs.core.next(arglist__3237));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3237)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3237)));
          return G__3236__delegate.call(this, a, b, c, ds)
        };
        return G__3236
      }();
      G__3231 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__3231__3232.call(this, a, b);
          case 3:
            return G__3231__3233.call(this, a, b, c);
          default:
            return G__3231__3234.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3231.cljs$lang$maxFixedArity = 3;
      G__3231.cljs$lang$applyTo = G__3231__3234.cljs$lang$applyTo;
      return G__3231
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__3212.call(this, f, x);
      case 3:
        return fnil__3213.call(this, f, x, y);
      case 4:
        return fnil__3214.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__3240 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3238 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3238)) {
        var s__3239 = temp__3698__auto____3238;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__3239)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__3239)))
      }else {
        return null
      }
    })
  };
  return mapi__3240.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3241 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3241)) {
      var s__3242 = temp__3698__auto____3241;
      var x__3243 = f.call(null, cljs.core.first.call(null, s__3242));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__3243))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__3242))
      }else {
        return cljs.core.cons.call(null, x__3243, keep.call(null, f, cljs.core.rest.call(null, s__3242)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__3253 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3250 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3250)) {
        var s__3251 = temp__3698__auto____3250;
        var x__3252 = f.call(null, idx, cljs.core.first.call(null, s__3251));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__3252))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__3251))
        }else {
          return cljs.core.cons.call(null, x__3252, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__3251)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__3253.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__3298 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__3303 = function() {
        return true
      };
      var ep1__3304 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__3305 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3260 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3260)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____3260
          }
        }())
      };
      var ep1__3306 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3261 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3261)) {
            var and__3546__auto____3262 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3262)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____3262
            }
          }else {
            return and__3546__auto____3261
          }
        }())
      };
      var ep1__3307 = function() {
        var G__3309__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3263 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3263)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____3263
            }
          }())
        };
        var G__3309 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3309__delegate.call(this, x, y, z, args)
        };
        G__3309.cljs$lang$maxFixedArity = 3;
        G__3309.cljs$lang$applyTo = function(arglist__3310) {
          var x = cljs.core.first(arglist__3310);
          var y = cljs.core.first(cljs.core.next(arglist__3310));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3310)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3310)));
          return G__3309__delegate.call(this, x, y, z, args)
        };
        return G__3309
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__3303.call(this);
          case 1:
            return ep1__3304.call(this, x);
          case 2:
            return ep1__3305.call(this, x, y);
          case 3:
            return ep1__3306.call(this, x, y, z);
          default:
            return ep1__3307.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__3307.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__3299 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__3311 = function() {
        return true
      };
      var ep2__3312 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3264 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3264)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____3264
          }
        }())
      };
      var ep2__3313 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3265 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3265)) {
            var and__3546__auto____3266 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3266)) {
              var and__3546__auto____3267 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3267)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____3267
              }
            }else {
              return and__3546__auto____3266
            }
          }else {
            return and__3546__auto____3265
          }
        }())
      };
      var ep2__3314 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3268 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3268)) {
            var and__3546__auto____3269 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____3269)) {
              var and__3546__auto____3270 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____3270)) {
                var and__3546__auto____3271 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____3271)) {
                  var and__3546__auto____3272 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3272)) {
                    return p2.call(null, z)
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
      var ep2__3315 = function() {
        var G__3317__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3273 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3273)) {
              return cljs.core.every_QMARK_.call(null, function(p1__3244_SHARP_) {
                var and__3546__auto____3274 = p1.call(null, p1__3244_SHARP_);
                if(cljs.core.truth_(and__3546__auto____3274)) {
                  return p2.call(null, p1__3244_SHARP_)
                }else {
                  return and__3546__auto____3274
                }
              }, args)
            }else {
              return and__3546__auto____3273
            }
          }())
        };
        var G__3317 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3317__delegate.call(this, x, y, z, args)
        };
        G__3317.cljs$lang$maxFixedArity = 3;
        G__3317.cljs$lang$applyTo = function(arglist__3318) {
          var x = cljs.core.first(arglist__3318);
          var y = cljs.core.first(cljs.core.next(arglist__3318));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3318)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3318)));
          return G__3317__delegate.call(this, x, y, z, args)
        };
        return G__3317
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__3311.call(this);
          case 1:
            return ep2__3312.call(this, x);
          case 2:
            return ep2__3313.call(this, x, y);
          case 3:
            return ep2__3314.call(this, x, y, z);
          default:
            return ep2__3315.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__3315.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__3300 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__3319 = function() {
        return true
      };
      var ep3__3320 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3275 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3275)) {
            var and__3546__auto____3276 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3276)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____3276
            }
          }else {
            return and__3546__auto____3275
          }
        }())
      };
      var ep3__3321 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3277 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3277)) {
            var and__3546__auto____3278 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3278)) {
              var and__3546__auto____3279 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3279)) {
                var and__3546__auto____3280 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____3280)) {
                  var and__3546__auto____3281 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3281)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____3281
                  }
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
        }())
      };
      var ep3__3322 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____3282 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____3282)) {
            var and__3546__auto____3283 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3283)) {
              var and__3546__auto____3284 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____3284)) {
                var and__3546__auto____3285 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____3285)) {
                  var and__3546__auto____3286 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____3286)) {
                    var and__3546__auto____3287 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____3287)) {
                      var and__3546__auto____3288 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____3288)) {
                        var and__3546__auto____3289 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____3289)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____3289
                        }
                      }else {
                        return and__3546__auto____3288
                      }
                    }else {
                      return and__3546__auto____3287
                    }
                  }else {
                    return and__3546__auto____3286
                  }
                }else {
                  return and__3546__auto____3285
                }
              }else {
                return and__3546__auto____3284
              }
            }else {
              return and__3546__auto____3283
            }
          }else {
            return and__3546__auto____3282
          }
        }())
      };
      var ep3__3323 = function() {
        var G__3325__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____3290 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____3290)) {
              return cljs.core.every_QMARK_.call(null, function(p1__3245_SHARP_) {
                var and__3546__auto____3291 = p1.call(null, p1__3245_SHARP_);
                if(cljs.core.truth_(and__3546__auto____3291)) {
                  var and__3546__auto____3292 = p2.call(null, p1__3245_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____3292)) {
                    return p3.call(null, p1__3245_SHARP_)
                  }else {
                    return and__3546__auto____3292
                  }
                }else {
                  return and__3546__auto____3291
                }
              }, args)
            }else {
              return and__3546__auto____3290
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
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__3319.call(this);
          case 1:
            return ep3__3320.call(this, x);
          case 2:
            return ep3__3321.call(this, x, y);
          case 3:
            return ep3__3322.call(this, x, y, z);
          default:
            return ep3__3323.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__3323.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__3301 = function() {
    var G__3327__delegate = function(p1, p2, p3, ps) {
      var ps__3293 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__3328 = function() {
          return true
        };
        var epn__3329 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__3246_SHARP_) {
            return p1__3246_SHARP_.call(null, x)
          }, ps__3293)
        };
        var epn__3330 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__3247_SHARP_) {
            var and__3546__auto____3294 = p1__3247_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3294)) {
              return p1__3247_SHARP_.call(null, y)
            }else {
              return and__3546__auto____3294
            }
          }, ps__3293)
        };
        var epn__3331 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__3248_SHARP_) {
            var and__3546__auto____3295 = p1__3248_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____3295)) {
              var and__3546__auto____3296 = p1__3248_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____3296)) {
                return p1__3248_SHARP_.call(null, z)
              }else {
                return and__3546__auto____3296
              }
            }else {
              return and__3546__auto____3295
            }
          }, ps__3293)
        };
        var epn__3332 = function() {
          var G__3334__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____3297 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____3297)) {
                return cljs.core.every_QMARK_.call(null, function(p1__3249_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__3249_SHARP_, args)
                }, ps__3293)
              }else {
                return and__3546__auto____3297
              }
            }())
          };
          var G__3334 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3334__delegate.call(this, x, y, z, args)
          };
          G__3334.cljs$lang$maxFixedArity = 3;
          G__3334.cljs$lang$applyTo = function(arglist__3335) {
            var x = cljs.core.first(arglist__3335);
            var y = cljs.core.first(cljs.core.next(arglist__3335));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3335)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3335)));
            return G__3334__delegate.call(this, x, y, z, args)
          };
          return G__3334
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__3328.call(this);
            case 1:
              return epn__3329.call(this, x);
            case 2:
              return epn__3330.call(this, x, y);
            case 3:
              return epn__3331.call(this, x, y, z);
            default:
              return epn__3332.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__3332.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__3327 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3327__delegate.call(this, p1, p2, p3, ps)
    };
    G__3327.cljs$lang$maxFixedArity = 3;
    G__3327.cljs$lang$applyTo = function(arglist__3336) {
      var p1 = cljs.core.first(arglist__3336);
      var p2 = cljs.core.first(cljs.core.next(arglist__3336));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3336)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3336)));
      return G__3327__delegate.call(this, p1, p2, p3, ps)
    };
    return G__3327
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__3298.call(this, p1);
      case 2:
        return every_pred__3299.call(this, p1, p2);
      case 3:
        return every_pred__3300.call(this, p1, p2, p3);
      default:
        return every_pred__3301.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__3301.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__3376 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__3381 = function() {
        return null
      };
      var sp1__3382 = function(x) {
        return p.call(null, x)
      };
      var sp1__3383 = function(x, y) {
        var or__3548__auto____3338 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3338)) {
          return or__3548__auto____3338
        }else {
          return p.call(null, y)
        }
      };
      var sp1__3384 = function(x, y, z) {
        var or__3548__auto____3339 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3339)) {
          return or__3548__auto____3339
        }else {
          var or__3548__auto____3340 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3340)) {
            return or__3548__auto____3340
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__3385 = function() {
        var G__3387__delegate = function(x, y, z, args) {
          var or__3548__auto____3341 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3341)) {
            return or__3548__auto____3341
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__3387 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3387__delegate.call(this, x, y, z, args)
        };
        G__3387.cljs$lang$maxFixedArity = 3;
        G__3387.cljs$lang$applyTo = function(arglist__3388) {
          var x = cljs.core.first(arglist__3388);
          var y = cljs.core.first(cljs.core.next(arglist__3388));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3388)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3388)));
          return G__3387__delegate.call(this, x, y, z, args)
        };
        return G__3387
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__3381.call(this);
          case 1:
            return sp1__3382.call(this, x);
          case 2:
            return sp1__3383.call(this, x, y);
          case 3:
            return sp1__3384.call(this, x, y, z);
          default:
            return sp1__3385.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__3385.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__3377 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__3389 = function() {
        return null
      };
      var sp2__3390 = function(x) {
        var or__3548__auto____3342 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3342)) {
          return or__3548__auto____3342
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__3391 = function(x, y) {
        var or__3548__auto____3343 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3343)) {
          return or__3548__auto____3343
        }else {
          var or__3548__auto____3344 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3344)) {
            return or__3548__auto____3344
          }else {
            var or__3548__auto____3345 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3345)) {
              return or__3548__auto____3345
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__3392 = function(x, y, z) {
        var or__3548__auto____3346 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3346)) {
          return or__3548__auto____3346
        }else {
          var or__3548__auto____3347 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____3347)) {
            return or__3548__auto____3347
          }else {
            var or__3548__auto____3348 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____3348)) {
              return or__3548__auto____3348
            }else {
              var or__3548__auto____3349 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____3349)) {
                return or__3548__auto____3349
              }else {
                var or__3548__auto____3350 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3350)) {
                  return or__3548__auto____3350
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__3393 = function() {
        var G__3395__delegate = function(x, y, z, args) {
          var or__3548__auto____3351 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3351)) {
            return or__3548__auto____3351
          }else {
            return cljs.core.some.call(null, function(p1__3254_SHARP_) {
              var or__3548__auto____3352 = p1.call(null, p1__3254_SHARP_);
              if(cljs.core.truth_(or__3548__auto____3352)) {
                return or__3548__auto____3352
              }else {
                return p2.call(null, p1__3254_SHARP_)
              }
            }, args)
          }
        };
        var G__3395 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3395__delegate.call(this, x, y, z, args)
        };
        G__3395.cljs$lang$maxFixedArity = 3;
        G__3395.cljs$lang$applyTo = function(arglist__3396) {
          var x = cljs.core.first(arglist__3396);
          var y = cljs.core.first(cljs.core.next(arglist__3396));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3396)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3396)));
          return G__3395__delegate.call(this, x, y, z, args)
        };
        return G__3395
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__3389.call(this);
          case 1:
            return sp2__3390.call(this, x);
          case 2:
            return sp2__3391.call(this, x, y);
          case 3:
            return sp2__3392.call(this, x, y, z);
          default:
            return sp2__3393.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__3393.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__3378 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__3397 = function() {
        return null
      };
      var sp3__3398 = function(x) {
        var or__3548__auto____3353 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3353)) {
          return or__3548__auto____3353
        }else {
          var or__3548__auto____3354 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3354)) {
            return or__3548__auto____3354
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__3399 = function(x, y) {
        var or__3548__auto____3355 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3355)) {
          return or__3548__auto____3355
        }else {
          var or__3548__auto____3356 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3356)) {
            return or__3548__auto____3356
          }else {
            var or__3548__auto____3357 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3357)) {
              return or__3548__auto____3357
            }else {
              var or__3548__auto____3358 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3358)) {
                return or__3548__auto____3358
              }else {
                var or__3548__auto____3359 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3359)) {
                  return or__3548__auto____3359
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__3400 = function(x, y, z) {
        var or__3548__auto____3360 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____3360)) {
          return or__3548__auto____3360
        }else {
          var or__3548__auto____3361 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____3361)) {
            return or__3548__auto____3361
          }else {
            var or__3548__auto____3362 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3362)) {
              return or__3548__auto____3362
            }else {
              var or__3548__auto____3363 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3363)) {
                return or__3548__auto____3363
              }else {
                var or__3548__auto____3364 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____3364)) {
                  return or__3548__auto____3364
                }else {
                  var or__3548__auto____3365 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____3365)) {
                    return or__3548__auto____3365
                  }else {
                    var or__3548__auto____3366 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____3366)) {
                      return or__3548__auto____3366
                    }else {
                      var or__3548__auto____3367 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____3367)) {
                        return or__3548__auto____3367
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
      var sp3__3401 = function() {
        var G__3403__delegate = function(x, y, z, args) {
          var or__3548__auto____3368 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____3368)) {
            return or__3548__auto____3368
          }else {
            return cljs.core.some.call(null, function(p1__3255_SHARP_) {
              var or__3548__auto____3369 = p1.call(null, p1__3255_SHARP_);
              if(cljs.core.truth_(or__3548__auto____3369)) {
                return or__3548__auto____3369
              }else {
                var or__3548__auto____3370 = p2.call(null, p1__3255_SHARP_);
                if(cljs.core.truth_(or__3548__auto____3370)) {
                  return or__3548__auto____3370
                }else {
                  return p3.call(null, p1__3255_SHARP_)
                }
              }
            }, args)
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
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__3397.call(this);
          case 1:
            return sp3__3398.call(this, x);
          case 2:
            return sp3__3399.call(this, x, y);
          case 3:
            return sp3__3400.call(this, x, y, z);
          default:
            return sp3__3401.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__3401.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__3379 = function() {
    var G__3405__delegate = function(p1, p2, p3, ps) {
      var ps__3371 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__3406 = function() {
          return null
        };
        var spn__3407 = function(x) {
          return cljs.core.some.call(null, function(p1__3256_SHARP_) {
            return p1__3256_SHARP_.call(null, x)
          }, ps__3371)
        };
        var spn__3408 = function(x, y) {
          return cljs.core.some.call(null, function(p1__3257_SHARP_) {
            var or__3548__auto____3372 = p1__3257_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3372)) {
              return or__3548__auto____3372
            }else {
              return p1__3257_SHARP_.call(null, y)
            }
          }, ps__3371)
        };
        var spn__3409 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__3258_SHARP_) {
            var or__3548__auto____3373 = p1__3258_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____3373)) {
              return or__3548__auto____3373
            }else {
              var or__3548__auto____3374 = p1__3258_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____3374)) {
                return or__3548__auto____3374
              }else {
                return p1__3258_SHARP_.call(null, z)
              }
            }
          }, ps__3371)
        };
        var spn__3410 = function() {
          var G__3412__delegate = function(x, y, z, args) {
            var or__3548__auto____3375 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____3375)) {
              return or__3548__auto____3375
            }else {
              return cljs.core.some.call(null, function(p1__3259_SHARP_) {
                return cljs.core.some.call(null, p1__3259_SHARP_, args)
              }, ps__3371)
            }
          };
          var G__3412 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3412__delegate.call(this, x, y, z, args)
          };
          G__3412.cljs$lang$maxFixedArity = 3;
          G__3412.cljs$lang$applyTo = function(arglist__3413) {
            var x = cljs.core.first(arglist__3413);
            var y = cljs.core.first(cljs.core.next(arglist__3413));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3413)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3413)));
            return G__3412__delegate.call(this, x, y, z, args)
          };
          return G__3412
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__3406.call(this);
            case 1:
              return spn__3407.call(this, x);
            case 2:
              return spn__3408.call(this, x, y);
            case 3:
              return spn__3409.call(this, x, y, z);
            default:
              return spn__3410.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__3410.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__3405 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3405__delegate.call(this, p1, p2, p3, ps)
    };
    G__3405.cljs$lang$maxFixedArity = 3;
    G__3405.cljs$lang$applyTo = function(arglist__3414) {
      var p1 = cljs.core.first(arglist__3414);
      var p2 = cljs.core.first(cljs.core.next(arglist__3414));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3414)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3414)));
      return G__3405__delegate.call(this, p1, p2, p3, ps)
    };
    return G__3405
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__3376.call(this, p1);
      case 2:
        return some_fn__3377.call(this, p1, p2);
      case 3:
        return some_fn__3378.call(this, p1, p2, p3);
      default:
        return some_fn__3379.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__3379.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__3427 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3415 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3415)) {
        var s__3416 = temp__3698__auto____3415;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__3416)), map.call(null, f, cljs.core.rest.call(null, s__3416)))
      }else {
        return null
      }
    })
  };
  var map__3428 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3417 = cljs.core.seq.call(null, c1);
      var s2__3418 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3419 = s1__3417;
        if(cljs.core.truth_(and__3546__auto____3419)) {
          return s2__3418
        }else {
          return and__3546__auto____3419
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__3417), cljs.core.first.call(null, s2__3418)), map.call(null, f, cljs.core.rest.call(null, s1__3417), cljs.core.rest.call(null, s2__3418)))
      }else {
        return null
      }
    })
  };
  var map__3429 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3420 = cljs.core.seq.call(null, c1);
      var s2__3421 = cljs.core.seq.call(null, c2);
      var s3__3422 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3423 = s1__3420;
        if(cljs.core.truth_(and__3546__auto____3423)) {
          var and__3546__auto____3424 = s2__3421;
          if(cljs.core.truth_(and__3546__auto____3424)) {
            return s3__3422
          }else {
            return and__3546__auto____3424
          }
        }else {
          return and__3546__auto____3423
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__3420), cljs.core.first.call(null, s2__3421), cljs.core.first.call(null, s3__3422)), map.call(null, f, cljs.core.rest.call(null, s1__3420), cljs.core.rest.call(null, s2__3421), cljs.core.rest.call(null, s3__3422)))
      }else {
        return null
      }
    })
  };
  var map__3430 = function() {
    var G__3432__delegate = function(f, c1, c2, c3, colls) {
      var step__3426 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__3425 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__3425))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__3425), step.call(null, map.call(null, cljs.core.rest, ss__3425)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__3337_SHARP_) {
        return cljs.core.apply.call(null, f, p1__3337_SHARP_)
      }, step__3426.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__3432 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__3432__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__3432.cljs$lang$maxFixedArity = 4;
    G__3432.cljs$lang$applyTo = function(arglist__3433) {
      var f = cljs.core.first(arglist__3433);
      var c1 = cljs.core.first(cljs.core.next(arglist__3433));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3433)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3433))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3433))));
      return G__3432__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__3432
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__3427.call(this, f, c1);
      case 3:
        return map__3428.call(this, f, c1, c2);
      case 4:
        return map__3429.call(this, f, c1, c2, c3);
      default:
        return map__3430.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__3430.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____3434 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3434)) {
        var s__3435 = temp__3698__auto____3434;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3435), take.call(null, n - 1, cljs.core.rest.call(null, s__3435)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__3438 = function(n, coll) {
    while(true) {
      var s__3436 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3437 = n > 0;
        if(cljs.core.truth_(and__3546__auto____3437)) {
          return s__3436
        }else {
          return and__3546__auto____3437
        }
      }())) {
        var G__3439 = n - 1;
        var G__3440 = cljs.core.rest.call(null, s__3436);
        n = G__3439;
        coll = G__3440;
        continue
      }else {
        return s__3436
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__3438.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__3441 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__3442 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__3441.call(this, n);
      case 2:
        return drop_last__3442.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__3444 = cljs.core.seq.call(null, coll);
  var lead__3445 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__3445)) {
      var G__3446 = cljs.core.next.call(null, s__3444);
      var G__3447 = cljs.core.next.call(null, lead__3445);
      s__3444 = G__3446;
      lead__3445 = G__3447;
      continue
    }else {
      return s__3444
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__3450 = function(pred, coll) {
    while(true) {
      var s__3448 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3449 = s__3448;
        if(cljs.core.truth_(and__3546__auto____3449)) {
          return pred.call(null, cljs.core.first.call(null, s__3448))
        }else {
          return and__3546__auto____3449
        }
      }())) {
        var G__3451 = pred;
        var G__3452 = cljs.core.rest.call(null, s__3448);
        pred = G__3451;
        coll = G__3452;
        continue
      }else {
        return s__3448
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__3450.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3453 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3453)) {
      var s__3454 = temp__3698__auto____3453;
      return cljs.core.concat.call(null, s__3454, cycle.call(null, s__3454))
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
  var repeat__3455 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__3456 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__3455.call(this, n);
      case 2:
        return repeat__3456.call(this, n, x)
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
  var repeatedly__3458 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__3459 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__3458.call(this, n);
      case 2:
        return repeatedly__3459.call(this, n, f)
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
  var interleave__3465 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__3461 = cljs.core.seq.call(null, c1);
      var s2__3462 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____3463 = s1__3461;
        if(cljs.core.truth_(and__3546__auto____3463)) {
          return s2__3462
        }else {
          return and__3546__auto____3463
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__3461), cljs.core.cons.call(null, cljs.core.first.call(null, s2__3462), interleave.call(null, cljs.core.rest.call(null, s1__3461), cljs.core.rest.call(null, s2__3462))))
      }else {
        return null
      }
    })
  };
  var interleave__3466 = function() {
    var G__3468__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__3464 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__3464))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__3464), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__3464)))
        }else {
          return null
        }
      })
    };
    var G__3468 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3468__delegate.call(this, c1, c2, colls)
    };
    G__3468.cljs$lang$maxFixedArity = 2;
    G__3468.cljs$lang$applyTo = function(arglist__3469) {
      var c1 = cljs.core.first(arglist__3469);
      var c2 = cljs.core.first(cljs.core.next(arglist__3469));
      var colls = cljs.core.rest(cljs.core.next(arglist__3469));
      return G__3468__delegate.call(this, c1, c2, colls)
    };
    return G__3468
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__3465.call(this, c1, c2);
      default:
        return interleave__3466.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__3466.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__3472 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____3470 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____3470)) {
        var coll__3471 = temp__3695__auto____3470;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__3471), cat.call(null, cljs.core.rest.call(null, coll__3471), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__3472.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__3473 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__3474 = function() {
    var G__3476__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__3476 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__3476__delegate.call(this, f, coll, colls)
    };
    G__3476.cljs$lang$maxFixedArity = 2;
    G__3476.cljs$lang$applyTo = function(arglist__3477) {
      var f = cljs.core.first(arglist__3477);
      var coll = cljs.core.first(cljs.core.next(arglist__3477));
      var colls = cljs.core.rest(cljs.core.next(arglist__3477));
      return G__3476__delegate.call(this, f, coll, colls)
    };
    return G__3476
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__3473.call(this, f, coll);
      default:
        return mapcat__3474.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__3474.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3478 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3478)) {
      var s__3479 = temp__3698__auto____3478;
      var f__3480 = cljs.core.first.call(null, s__3479);
      var r__3481 = cljs.core.rest.call(null, s__3479);
      if(cljs.core.truth_(pred.call(null, f__3480))) {
        return cljs.core.cons.call(null, f__3480, filter.call(null, pred, r__3481))
      }else {
        return filter.call(null, pred, r__3481)
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
  var walk__3483 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__3483.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__3482_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__3482_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__3490 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__3491 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3484 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3484)) {
        var s__3485 = temp__3698__auto____3484;
        var p__3486 = cljs.core.take.call(null, n, s__3485);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__3486)))) {
          return cljs.core.cons.call(null, p__3486, partition.call(null, n, step, cljs.core.drop.call(null, step, s__3485)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__3492 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3487 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3487)) {
        var s__3488 = temp__3698__auto____3487;
        var p__3489 = cljs.core.take.call(null, n, s__3488);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__3489)))) {
          return cljs.core.cons.call(null, p__3489, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__3488)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__3489, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__3490.call(this, n, step);
      case 3:
        return partition__3491.call(this, n, step, pad);
      case 4:
        return partition__3492.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__3498 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__3499 = function(m, ks, not_found) {
    var sentinel__3494 = cljs.core.lookup_sentinel;
    var m__3495 = m;
    var ks__3496 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__3496)) {
        var m__3497 = cljs.core.get.call(null, m__3495, cljs.core.first.call(null, ks__3496), sentinel__3494);
        if(cljs.core.truth_(sentinel__3494 === m__3497)) {
          return not_found
        }else {
          var G__3501 = sentinel__3494;
          var G__3502 = m__3497;
          var G__3503 = cljs.core.next.call(null, ks__3496);
          sentinel__3494 = G__3501;
          m__3495 = G__3502;
          ks__3496 = G__3503;
          continue
        }
      }else {
        return m__3495
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__3498.call(this, m, ks);
      case 3:
        return get_in__3499.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__3504, v) {
  var vec__3505__3506 = p__3504;
  var k__3507 = cljs.core.nth.call(null, vec__3505__3506, 0, null);
  var ks__3508 = cljs.core.nthnext.call(null, vec__3505__3506, 1);
  if(cljs.core.truth_(ks__3508)) {
    return cljs.core.assoc.call(null, m, k__3507, assoc_in.call(null, cljs.core.get.call(null, m, k__3507), ks__3508, v))
  }else {
    return cljs.core.assoc.call(null, m, k__3507, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__3509, f, args) {
    var vec__3510__3511 = p__3509;
    var k__3512 = cljs.core.nth.call(null, vec__3510__3511, 0, null);
    var ks__3513 = cljs.core.nthnext.call(null, vec__3510__3511, 1);
    if(cljs.core.truth_(ks__3513)) {
      return cljs.core.assoc.call(null, m, k__3512, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__3512), ks__3513, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__3512, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__3512), args))
    }
  };
  var update_in = function(m, p__3509, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__3509, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__3514) {
    var m = cljs.core.first(arglist__3514);
    var p__3509 = cljs.core.first(cljs.core.next(arglist__3514));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3514)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3514)));
    return update_in__delegate.call(this, m, p__3509, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3515 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3540 = null;
  var G__3540__3541 = function(coll, k) {
    var this__3516 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__3540__3542 = function(coll, k, not_found) {
    var this__3517 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__3540 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3540__3541.call(this, coll, k);
      case 3:
        return G__3540__3542.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3540
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3518 = this;
  var new_array__3519 = cljs.core.aclone.call(null, this__3518.array);
  new_array__3519[k] = v;
  return new cljs.core.Vector(this__3518.meta, new_array__3519)
};
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3520 = this;
  var new_array__3521 = cljs.core.aclone.call(null, this__3520.array);
  new_array__3521.push(o);
  return new cljs.core.Vector(this__3520.meta, new_array__3521)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3544 = null;
  var G__3544__3545 = function(v, f) {
    var this__3522 = this;
    return cljs.core.ci_reduce.call(null, this__3522.array, f)
  };
  var G__3544__3546 = function(v, f, start) {
    var this__3523 = this;
    return cljs.core.ci_reduce.call(null, this__3523.array, f, start)
  };
  G__3544 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3544__3545.call(this, v, f);
      case 3:
        return G__3544__3546.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3544
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3524 = this;
  if(cljs.core.truth_(this__3524.array.length > 0)) {
    var vector_seq__3525 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__3524.array.length)) {
          return cljs.core.cons.call(null, this__3524.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__3525.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3526 = this;
  return this__3526.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3527 = this;
  var count__3528 = this__3527.array.length;
  if(cljs.core.truth_(count__3528 > 0)) {
    return this__3527.array[count__3528 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3529 = this;
  if(cljs.core.truth_(this__3529.array.length > 0)) {
    var new_array__3530 = cljs.core.aclone.call(null, this__3529.array);
    new_array__3530.pop();
    return new cljs.core.Vector(this__3529.meta, new_array__3530)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__3531 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3532 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3533 = this;
  return new cljs.core.Vector(meta, this__3533.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3534 = this;
  return this__3534.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3548 = null;
  var G__3548__3549 = function(coll, n) {
    var this__3535 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____3536 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____3536)) {
        return n < this__3535.array.length
      }else {
        return and__3546__auto____3536
      }
    }())) {
      return this__3535.array[n]
    }else {
      return null
    }
  };
  var G__3548__3550 = function(coll, n, not_found) {
    var this__3537 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____3538 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____3538)) {
        return n < this__3537.array.length
      }else {
        return and__3546__auto____3538
      }
    }())) {
      return this__3537.array[n]
    }else {
      return not_found
    }
  };
  G__3548 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3548__3549.call(this, coll, n);
      case 3:
        return G__3548__3550.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3548
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3539 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__3539.meta)
};
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, cljs.core.array.call(null));
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.Vector.prototype.call = function() {
  var G__3552 = null;
  var G__3552__3553 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3552__3554 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3552 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3552__3553.call(this, _, k);
      case 3:
        return G__3552__3554.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3552
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
  vector.cljs$lang$applyTo = function(arglist__3556) {
    var args = cljs.core.seq(arglist__3556);
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
  var this__3557 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3577 = null;
  var G__3577__3578 = function(coll, k) {
    var this__3558 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__3577__3579 = function(coll, k, not_found) {
    var this__3559 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__3577 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3577__3578.call(this, coll, k);
      case 3:
        return G__3577__3579.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3577
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__3560 = this;
  var v_pos__3561 = this__3560.start + key;
  return new cljs.core.Subvec(this__3560.meta, cljs.core._assoc.call(null, this__3560.v, v_pos__3561, val), this__3560.start, this__3560.end > v_pos__3561 + 1 ? this__3560.end : v_pos__3561 + 1)
};
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3562 = this;
  return new cljs.core.Subvec(this__3562.meta, cljs.core._assoc_n.call(null, this__3562.v, this__3562.end, o), this__3562.start, this__3562.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3581 = null;
  var G__3581__3582 = function(coll, f) {
    var this__3563 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__3581__3583 = function(coll, f, start) {
    var this__3564 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__3581 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__3581__3582.call(this, coll, f);
      case 3:
        return G__3581__3583.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3581
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3565 = this;
  var subvec_seq__3566 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__3565.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__3565.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__3566.call(null, this__3565.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3567 = this;
  return this__3567.end - this__3567.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__3568 = this;
  return cljs.core._nth.call(null, this__3568.v, this__3568.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__3569 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__3569.start, this__3569.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__3569.meta, this__3569.v, this__3569.start, this__3569.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__3570 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3571 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3572 = this;
  return new cljs.core.Subvec(meta, this__3572.v, this__3572.start, this__3572.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3573 = this;
  return this__3573.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3585 = null;
  var G__3585__3586 = function(coll, n) {
    var this__3574 = this;
    return cljs.core._nth.call(null, this__3574.v, this__3574.start + n)
  };
  var G__3585__3587 = function(coll, n, not_found) {
    var this__3575 = this;
    return cljs.core._nth.call(null, this__3575.v, this__3575.start + n, not_found)
  };
  G__3585 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3585__3586.call(this, coll, n);
      case 3:
        return G__3585__3587.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3585
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3576 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__3576.meta)
};
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__3589 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__3590 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__3589.call(this, v, start);
      case 3:
        return subvec__3590.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subvec
}();
cljs.core.Subvec.prototype.call = function() {
  var G__3592 = null;
  var G__3592__3593 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3592__3594 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3592 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3592__3593.call(this, _, k);
      case 3:
        return G__3592__3594.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3592
}();
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__3596 = this;
  return false
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, y)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, x), cljs.core.count.call(null, y))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__3597 = array.length;
  var i__3598 = 0;
  while(true) {
    if(cljs.core.truth_(i__3598 < len__3597)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__3598]))) {
        return i__3598
      }else {
        var G__3599 = i__3598 + incr;
        i__3598 = G__3599;
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
  var obj_map_contains_key_QMARK___3601 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___3602 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3600 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____3600)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____3600
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
        return obj_map_contains_key_QMARK___3601.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___3602.call(this, k, strobj, true_val, false_val)
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
  var this__3605 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3624 = null;
  var G__3624__3625 = function(coll, k) {
    var this__3606 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__3624__3626 = function(coll, k, not_found) {
    var this__3607 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__3607.strobj, this__3607.strobj[k], not_found)
  };
  G__3624 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3624__3625.call(this, coll, k);
      case 3:
        return G__3624__3626.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3624
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3608 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__3609 = goog.object.clone.call(null, this__3608.strobj);
    var overwrite_QMARK___3610 = new_strobj__3609.hasOwnProperty(k);
    new_strobj__3609[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___3610)) {
      return new cljs.core.ObjMap(this__3608.meta, this__3608.keys, new_strobj__3609)
    }else {
      var new_keys__3611 = cljs.core.aclone.call(null, this__3608.keys);
      new_keys__3611.push(k);
      return new cljs.core.ObjMap(this__3608.meta, new_keys__3611, new_strobj__3609)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__3608.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__3612 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__3612.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__3613 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3614 = this;
  if(cljs.core.truth_(this__3614.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__3604_SHARP_) {
      return cljs.core.vector.call(null, p1__3604_SHARP_, this__3614.strobj[p1__3604_SHARP_])
    }, this__3614.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3615 = this;
  return this__3615.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3616 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3617 = this;
  return new cljs.core.ObjMap(meta, this__3617.keys, this__3617.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3618 = this;
  return this__3618.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3619 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__3619.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__3620 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____3621 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____3621)) {
      return this__3620.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____3621
    }
  }())) {
    var new_keys__3622 = cljs.core.aclone.call(null, this__3620.keys);
    var new_strobj__3623 = goog.object.clone.call(null, this__3620.strobj);
    new_keys__3622.splice(cljs.core.scan_array.call(null, 1, k, new_keys__3622), 1);
    cljs.core.js_delete.call(null, new_strobj__3623, k);
    return new cljs.core.ObjMap(this__3620.meta, new_keys__3622, new_strobj__3623)
  }else {
    return coll
  }
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, cljs.core.array.call(null), cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.ObjMap.prototype.call = function() {
  var G__3629 = null;
  var G__3629__3630 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3629__3631 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3629 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3629__3630.call(this, _, k);
      case 3:
        return G__3629__3631.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3629
}();
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__3633 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3663 = null;
  var G__3663__3664 = function(coll, k) {
    var this__3634 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__3663__3665 = function(coll, k, not_found) {
    var this__3635 = this;
    var bucket__3636 = this__3635.hashobj[cljs.core.hash.call(null, k)];
    var i__3637 = cljs.core.truth_(bucket__3636) ? cljs.core.scan_array.call(null, 2, k, bucket__3636) : null;
    if(cljs.core.truth_(i__3637)) {
      return bucket__3636[i__3637 + 1]
    }else {
      return not_found
    }
  };
  G__3663 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3663__3664.call(this, coll, k);
      case 3:
        return G__3663__3665.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3663
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__3638 = this;
  var h__3639 = cljs.core.hash.call(null, k);
  var bucket__3640 = this__3638.hashobj[h__3639];
  if(cljs.core.truth_(bucket__3640)) {
    var new_bucket__3641 = cljs.core.aclone.call(null, bucket__3640);
    var new_hashobj__3642 = goog.object.clone.call(null, this__3638.hashobj);
    new_hashobj__3642[h__3639] = new_bucket__3641;
    var temp__3695__auto____3643 = cljs.core.scan_array.call(null, 2, k, new_bucket__3641);
    if(cljs.core.truth_(temp__3695__auto____3643)) {
      var i__3644 = temp__3695__auto____3643;
      new_bucket__3641[i__3644 + 1] = v;
      return new cljs.core.HashMap(this__3638.meta, this__3638.count, new_hashobj__3642)
    }else {
      new_bucket__3641.push(k, v);
      return new cljs.core.HashMap(this__3638.meta, this__3638.count + 1, new_hashobj__3642)
    }
  }else {
    var new_hashobj__3645 = goog.object.clone.call(null, this__3638.hashobj);
    new_hashobj__3645[h__3639] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__3638.meta, this__3638.count + 1, new_hashobj__3645)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__3646 = this;
  var bucket__3647 = this__3646.hashobj[cljs.core.hash.call(null, k)];
  var i__3648 = cljs.core.truth_(bucket__3647) ? cljs.core.scan_array.call(null, 2, k, bucket__3647) : null;
  if(cljs.core.truth_(i__3648)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__3649 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3650 = this;
  if(cljs.core.truth_(this__3650.count > 0)) {
    var hashes__3651 = cljs.core.js_keys.call(null, this__3650.hashobj);
    return cljs.core.mapcat.call(null, function(p1__3628_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__3650.hashobj[p1__3628_SHARP_]))
    }, hashes__3651)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3652 = this;
  return this__3652.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3653 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3654 = this;
  return new cljs.core.HashMap(meta, this__3654.count, this__3654.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3655 = this;
  return this__3655.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3656 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__3656.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__3657 = this;
  var h__3658 = cljs.core.hash.call(null, k);
  var bucket__3659 = this__3657.hashobj[h__3658];
  var i__3660 = cljs.core.truth_(bucket__3659) ? cljs.core.scan_array.call(null, 2, k, bucket__3659) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__3660))) {
    return coll
  }else {
    var new_hashobj__3661 = goog.object.clone.call(null, this__3657.hashobj);
    if(cljs.core.truth_(3 > bucket__3659.length)) {
      cljs.core.js_delete.call(null, new_hashobj__3661, h__3658)
    }else {
      var new_bucket__3662 = cljs.core.aclone.call(null, bucket__3659);
      new_bucket__3662.splice(i__3660, 2);
      new_hashobj__3661[h__3658] = new_bucket__3662
    }
    return new cljs.core.HashMap(this__3657.meta, this__3657.count - 1, new_hashobj__3661)
  }
};
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__3667 = ks.length;
  var i__3668 = 0;
  var out__3669 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__3668 < len__3667)) {
      var G__3670 = i__3668 + 1;
      var G__3671 = cljs.core.assoc.call(null, out__3669, ks[i__3668], vs[i__3668]);
      i__3668 = G__3670;
      out__3669 = G__3671;
      continue
    }else {
      return out__3669
    }
    break
  }
};
cljs.core.HashMap.prototype.call = function() {
  var G__3672 = null;
  var G__3672__3673 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3672__3674 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3672 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3672__3673.call(this, _, k);
      case 3:
        return G__3672__3674.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3672
}();
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__3676 = cljs.core.seq.call(null, keyvals);
    var out__3677 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__3676)) {
        var G__3678 = cljs.core.nnext.call(null, in$__3676);
        var G__3679 = cljs.core.assoc.call(null, out__3677, cljs.core.first.call(null, in$__3676), cljs.core.second.call(null, in$__3676));
        in$__3676 = G__3678;
        out__3677 = G__3679;
        continue
      }else {
        return out__3677
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
  hash_map.cljs$lang$applyTo = function(arglist__3680) {
    var keyvals = cljs.core.seq(arglist__3680);
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
      return cljs.core.reduce.call(null, function(p1__3681_SHARP_, p2__3682_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____3683 = p1__3681_SHARP_;
          if(cljs.core.truth_(or__3548__auto____3683)) {
            return or__3548__auto____3683
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__3682_SHARP_)
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
  merge.cljs$lang$applyTo = function(arglist__3684) {
    var maps = cljs.core.seq(arglist__3684);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__3687 = function(m, e) {
        var k__3685 = cljs.core.first.call(null, e);
        var v__3686 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__3685))) {
          return cljs.core.assoc.call(null, m, k__3685, f.call(null, cljs.core.get.call(null, m, k__3685), v__3686))
        }else {
          return cljs.core.assoc.call(null, m, k__3685, v__3686)
        }
      };
      var merge2__3689 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__3687, function() {
          var or__3548__auto____3688 = m1;
          if(cljs.core.truth_(or__3548__auto____3688)) {
            return or__3548__auto____3688
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__3689, maps)
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
  merge_with.cljs$lang$applyTo = function(arglist__3690) {
    var f = cljs.core.first(arglist__3690);
    var maps = cljs.core.rest(arglist__3690);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__3692 = cljs.core.ObjMap.fromObject([], {});
  var keys__3693 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__3693)) {
      var key__3694 = cljs.core.first.call(null, keys__3693);
      var entry__3695 = cljs.core.get.call(null, map, key__3694, "\ufdd0'user/not-found");
      var G__3696 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__3695, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__3692, key__3694, entry__3695) : ret__3692;
      var G__3697 = cljs.core.next.call(null, keys__3693);
      ret__3692 = G__3696;
      keys__3693 = G__3697;
      continue
    }else {
      return ret__3692
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
  var this__3698 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__3711 = null;
  var G__3711__3712 = function(coll, v) {
    var this__3699 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__3711__3713 = function(coll, v, not_found) {
    var this__3700 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__3700.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__3711 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3711__3712.call(this, coll, v);
      case 3:
        return G__3711__3713.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3711
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__3701 = this;
  return new cljs.core.Set(this__3701.meta, cljs.core.assoc.call(null, this__3701.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__3702 = this;
  return cljs.core.keys.call(null, this__3702.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__3703 = this;
  return new cljs.core.Set(this__3703.meta, cljs.core.dissoc.call(null, this__3703.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__3704 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__3705 = this;
  var and__3546__auto____3706 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____3706)) {
    var and__3546__auto____3707 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____3707)) {
      return cljs.core.every_QMARK_.call(null, function(p1__3691_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__3691_SHARP_)
      }, other)
    }else {
      return and__3546__auto____3707
    }
  }else {
    return and__3546__auto____3706
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__3708 = this;
  return new cljs.core.Set(meta, this__3708.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__3709 = this;
  return this__3709.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__3710 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__3710.meta)
};
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.Set.prototype.call = function() {
  var G__3715 = null;
  var G__3715__3716 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__3715__3717 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__3715 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3715__3716.call(this, _, k);
      case 3:
        return G__3715__3717.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3715
}();
cljs.core.set = function set(coll) {
  var in$__3720 = cljs.core.seq.call(null, coll);
  var out__3721 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__3720)))) {
      var G__3722 = cljs.core.rest.call(null, in$__3720);
      var G__3723 = cljs.core.conj.call(null, out__3721, cljs.core.first.call(null, in$__3720));
      in$__3720 = G__3722;
      out__3721 = G__3723;
      continue
    }else {
      return out__3721
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__3724 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____3725 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____3725)) {
        var e__3726 = temp__3695__auto____3725;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__3726))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__3724, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__3719_SHARP_) {
      var temp__3695__auto____3727 = cljs.core.find.call(null, smap, p1__3719_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____3727)) {
        var e__3728 = temp__3695__auto____3727;
        return cljs.core.second.call(null, e__3728)
      }else {
        return p1__3719_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__3736 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__3729, seen) {
        while(true) {
          var vec__3730__3731 = p__3729;
          var f__3732 = cljs.core.nth.call(null, vec__3730__3731, 0, null);
          var xs__3733 = vec__3730__3731;
          var temp__3698__auto____3734 = cljs.core.seq.call(null, xs__3733);
          if(cljs.core.truth_(temp__3698__auto____3734)) {
            var s__3735 = temp__3698__auto____3734;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__3732))) {
              var G__3737 = cljs.core.rest.call(null, s__3735);
              var G__3738 = seen;
              p__3729 = G__3737;
              seen = G__3738;
              continue
            }else {
              return cljs.core.cons.call(null, f__3732, step.call(null, cljs.core.rest.call(null, s__3735), cljs.core.conj.call(null, seen, f__3732)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__3736.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__3739 = cljs.core.Vector.fromArray([]);
  var s__3740 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__3740))) {
      var G__3741 = cljs.core.conj.call(null, ret__3739, cljs.core.first.call(null, s__3740));
      var G__3742 = cljs.core.next.call(null, s__3740);
      ret__3739 = G__3741;
      s__3740 = G__3742;
      continue
    }else {
      return cljs.core.seq.call(null, ret__3739)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____3743 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____3743)) {
        return or__3548__auto____3743
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__3744 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__3744 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__3744 + 1)
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
    var or__3548__auto____3745 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____3745)) {
      return or__3548__auto____3745
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__3746 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__3746 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__3746)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__3749 = cljs.core.ObjMap.fromObject([], {});
  var ks__3750 = cljs.core.seq.call(null, keys);
  var vs__3751 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____3752 = ks__3750;
      if(cljs.core.truth_(and__3546__auto____3752)) {
        return vs__3751
      }else {
        return and__3546__auto____3752
      }
    }())) {
      var G__3753 = cljs.core.assoc.call(null, map__3749, cljs.core.first.call(null, ks__3750), cljs.core.first.call(null, vs__3751));
      var G__3754 = cljs.core.next.call(null, ks__3750);
      var G__3755 = cljs.core.next.call(null, vs__3751);
      map__3749 = G__3753;
      ks__3750 = G__3754;
      vs__3751 = G__3755;
      continue
    }else {
      return map__3749
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__3758 = function(k, x) {
    return x
  };
  var max_key__3759 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__3760 = function() {
    var G__3762__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__3747_SHARP_, p2__3748_SHARP_) {
        return max_key.call(null, k, p1__3747_SHARP_, p2__3748_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__3762 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3762__delegate.call(this, k, x, y, more)
    };
    G__3762.cljs$lang$maxFixedArity = 3;
    G__3762.cljs$lang$applyTo = function(arglist__3763) {
      var k = cljs.core.first(arglist__3763);
      var x = cljs.core.first(cljs.core.next(arglist__3763));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3763)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3763)));
      return G__3762__delegate.call(this, k, x, y, more)
    };
    return G__3762
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__3758.call(this, k, x);
      case 3:
        return max_key__3759.call(this, k, x, y);
      default:
        return max_key__3760.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__3760.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__3764 = function(k, x) {
    return x
  };
  var min_key__3765 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__3766 = function() {
    var G__3768__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__3756_SHARP_, p2__3757_SHARP_) {
        return min_key.call(null, k, p1__3756_SHARP_, p2__3757_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__3768 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3768__delegate.call(this, k, x, y, more)
    };
    G__3768.cljs$lang$maxFixedArity = 3;
    G__3768.cljs$lang$applyTo = function(arglist__3769) {
      var k = cljs.core.first(arglist__3769);
      var x = cljs.core.first(cljs.core.next(arglist__3769));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3769)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3769)));
      return G__3768__delegate.call(this, k, x, y, more)
    };
    return G__3768
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__3764.call(this, k, x);
      case 3:
        return min_key__3765.call(this, k, x, y);
      default:
        return min_key__3766.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__3766.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__3772 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__3773 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3770 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3770)) {
        var s__3771 = temp__3698__auto____3770;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__3771), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__3771)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__3772.call(this, n, step);
      case 3:
        return partition_all__3773.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3775 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3775)) {
      var s__3776 = temp__3698__auto____3775;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__3776)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__3776), take_while.call(null, pred, cljs.core.rest.call(null, s__3776)))
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
  var this__3777 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__3778 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__3794 = null;
  var G__3794__3795 = function(rng, f) {
    var this__3779 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__3794__3796 = function(rng, f, s) {
    var this__3780 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__3794 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__3794__3795.call(this, rng, f);
      case 3:
        return G__3794__3796.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3794
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__3781 = this;
  var comp__3782 = cljs.core.truth_(this__3781.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__3782.call(null, this__3781.start, this__3781.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__3783 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__3783.end - this__3783.start) / this__3783.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__3784 = this;
  return this__3784.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__3785 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__3785.meta, this__3785.start + this__3785.step, this__3785.end, this__3785.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__3786 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__3787 = this;
  return new cljs.core.Range(meta, this__3787.start, this__3787.end, this__3787.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__3788 = this;
  return this__3788.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__3798 = null;
  var G__3798__3799 = function(rng, n) {
    var this__3789 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__3789.start + n * this__3789.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3790 = this__3789.start > this__3789.end;
        if(cljs.core.truth_(and__3546__auto____3790)) {
          return cljs.core._EQ_.call(null, this__3789.step, 0)
        }else {
          return and__3546__auto____3790
        }
      }())) {
        return this__3789.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__3798__3800 = function(rng, n, not_found) {
    var this__3791 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__3791.start + n * this__3791.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3792 = this__3791.start > this__3791.end;
        if(cljs.core.truth_(and__3546__auto____3792)) {
          return cljs.core._EQ_.call(null, this__3791.step, 0)
        }else {
          return and__3546__auto____3792
        }
      }())) {
        return this__3791.start
      }else {
        return not_found
      }
    }
  };
  G__3798 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__3798__3799.call(this, rng, n);
      case 3:
        return G__3798__3800.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__3798
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__3793 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__3793.meta)
};
cljs.core.range = function() {
  var range = null;
  var range__3802 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__3803 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__3804 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__3805 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__3802.call(this);
      case 1:
        return range__3803.call(this, start);
      case 2:
        return range__3804.call(this, start, end);
      case 3:
        return range__3805.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____3807 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3807)) {
      var s__3808 = temp__3698__auto____3807;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__3808), take_nth.call(null, n, cljs.core.drop.call(null, n, s__3808)))
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
    var temp__3698__auto____3810 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____3810)) {
      var s__3811 = temp__3698__auto____3810;
      var fst__3812 = cljs.core.first.call(null, s__3811);
      var fv__3813 = f.call(null, fst__3812);
      var run__3814 = cljs.core.cons.call(null, fst__3812, cljs.core.take_while.call(null, function(p1__3809_SHARP_) {
        return cljs.core._EQ_.call(null, fv__3813, f.call(null, p1__3809_SHARP_))
      }, cljs.core.next.call(null, s__3811)));
      return cljs.core.cons.call(null, run__3814, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__3814), s__3811))))
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
  var reductions__3829 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____3825 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____3825)) {
        var s__3826 = temp__3695__auto____3825;
        return reductions.call(null, f, cljs.core.first.call(null, s__3826), cljs.core.rest.call(null, s__3826))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__3830 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____3827 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____3827)) {
        var s__3828 = temp__3698__auto____3827;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__3828)), cljs.core.rest.call(null, s__3828))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__3829.call(this, f, init);
      case 3:
        return reductions__3830.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__3833 = function(f) {
    return function() {
      var G__3838 = null;
      var G__3838__3839 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__3838__3840 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__3838__3841 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__3838__3842 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__3838__3843 = function() {
        var G__3845__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
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
  var juxt__3834 = function(f, g) {
    return function() {
      var G__3847 = null;
      var G__3847__3848 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__3847__3849 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__3847__3850 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__3847__3851 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__3847__3852 = function() {
        var G__3854__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
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
  var juxt__3835 = function(f, g, h) {
    return function() {
      var G__3856 = null;
      var G__3856__3857 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__3856__3858 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__3856__3859 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__3856__3860 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__3856__3861 = function() {
        var G__3863__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__3863 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__3863__delegate.call(this, x, y, z, args)
        };
        G__3863.cljs$lang$maxFixedArity = 3;
        G__3863.cljs$lang$applyTo = function(arglist__3864) {
          var x = cljs.core.first(arglist__3864);
          var y = cljs.core.first(cljs.core.next(arglist__3864));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3864)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3864)));
          return G__3863__delegate.call(this, x, y, z, args)
        };
        return G__3863
      }();
      G__3856 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__3856__3857.call(this);
          case 1:
            return G__3856__3858.call(this, x);
          case 2:
            return G__3856__3859.call(this, x, y);
          case 3:
            return G__3856__3860.call(this, x, y, z);
          default:
            return G__3856__3861.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__3856.cljs$lang$maxFixedArity = 3;
      G__3856.cljs$lang$applyTo = G__3856__3861.cljs$lang$applyTo;
      return G__3856
    }()
  };
  var juxt__3836 = function() {
    var G__3865__delegate = function(f, g, h, fs) {
      var fs__3832 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__3866 = null;
        var G__3866__3867 = function() {
          return cljs.core.reduce.call(null, function(p1__3815_SHARP_, p2__3816_SHARP_) {
            return cljs.core.conj.call(null, p1__3815_SHARP_, p2__3816_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__3832)
        };
        var G__3866__3868 = function(x) {
          return cljs.core.reduce.call(null, function(p1__3817_SHARP_, p2__3818_SHARP_) {
            return cljs.core.conj.call(null, p1__3817_SHARP_, p2__3818_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__3832)
        };
        var G__3866__3869 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__3819_SHARP_, p2__3820_SHARP_) {
            return cljs.core.conj.call(null, p1__3819_SHARP_, p2__3820_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__3832)
        };
        var G__3866__3870 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__3821_SHARP_, p2__3822_SHARP_) {
            return cljs.core.conj.call(null, p1__3821_SHARP_, p2__3822_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__3832)
        };
        var G__3866__3871 = function() {
          var G__3873__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__3823_SHARP_, p2__3824_SHARP_) {
              return cljs.core.conj.call(null, p1__3823_SHARP_, cljs.core.apply.call(null, p2__3824_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__3832)
          };
          var G__3873 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__3873__delegate.call(this, x, y, z, args)
          };
          G__3873.cljs$lang$maxFixedArity = 3;
          G__3873.cljs$lang$applyTo = function(arglist__3874) {
            var x = cljs.core.first(arglist__3874);
            var y = cljs.core.first(cljs.core.next(arglist__3874));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3874)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3874)));
            return G__3873__delegate.call(this, x, y, z, args)
          };
          return G__3873
        }();
        G__3866 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__3866__3867.call(this);
            case 1:
              return G__3866__3868.call(this, x);
            case 2:
              return G__3866__3869.call(this, x, y);
            case 3:
              return G__3866__3870.call(this, x, y, z);
            default:
              return G__3866__3871.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__3866.cljs$lang$maxFixedArity = 3;
        G__3866.cljs$lang$applyTo = G__3866__3871.cljs$lang$applyTo;
        return G__3866
      }()
    };
    var G__3865 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__3865__delegate.call(this, f, g, h, fs)
    };
    G__3865.cljs$lang$maxFixedArity = 3;
    G__3865.cljs$lang$applyTo = function(arglist__3875) {
      var f = cljs.core.first(arglist__3875);
      var g = cljs.core.first(cljs.core.next(arglist__3875));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3875)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3875)));
      return G__3865__delegate.call(this, f, g, h, fs)
    };
    return G__3865
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__3833.call(this, f);
      case 2:
        return juxt__3834.call(this, f, g);
      case 3:
        return juxt__3835.call(this, f, g, h);
      default:
        return juxt__3836.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__3836.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__3877 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__3880 = cljs.core.next.call(null, coll);
        coll = G__3880;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__3878 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____3876 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____3876)) {
          return n > 0
        }else {
          return and__3546__auto____3876
        }
      }())) {
        var G__3881 = n - 1;
        var G__3882 = cljs.core.next.call(null, coll);
        n = G__3881;
        coll = G__3882;
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
        return dorun__3877.call(this, n);
      case 2:
        return dorun__3878.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__3883 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__3884 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__3883.call(this, n);
      case 2:
        return doall__3884.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__3886 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__3886), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__3886), 1))) {
      return cljs.core.first.call(null, matches__3886)
    }else {
      return cljs.core.vec.call(null, matches__3886)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__3887 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__3887))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__3887), 1))) {
      return cljs.core.first.call(null, matches__3887)
    }else {
      return cljs.core.vec.call(null, matches__3887)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__3888 = cljs.core.re_find.call(null, re, s);
  var match_idx__3889 = s.search(re);
  var match_str__3890 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__3888)) ? cljs.core.first.call(null, match_data__3888) : match_data__3888;
  var post_match__3891 = cljs.core.subs.call(null, s, match_idx__3889 + cljs.core.count.call(null, match_str__3890));
  if(cljs.core.truth_(match_data__3888)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__3888, re_seq.call(null, re, post_match__3891))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__3892_SHARP_) {
    return print_one.call(null, p1__3892_SHARP_, opts)
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
          var and__3546__auto____3893 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____3893)) {
            var and__3546__auto____3897 = function() {
              var x__319__auto____3894 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____3895 = x__319__auto____3894;
                if(cljs.core.truth_(and__3546__auto____3895)) {
                  var and__3546__auto____3896 = x__319__auto____3894.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____3896)) {
                    return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____3894))
                  }else {
                    return and__3546__auto____3896
                  }
                }else {
                  return and__3546__auto____3895
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____3894)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____3897)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____3897
            }
          }else {
            return and__3546__auto____3893
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__319__auto____3898 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____3899 = x__319__auto____3898;
            if(cljs.core.truth_(and__3546__auto____3899)) {
              var and__3546__auto____3900 = x__319__auto____3898.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____3900)) {
                return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____3898))
              }else {
                return and__3546__auto____3900
              }
            }else {
              return and__3546__auto____3899
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__319__auto____3898)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__3901 = cljs.core.first.call(null, objs);
  var sb__3902 = new goog.string.StringBuffer;
  var G__3903__3904 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__3903__3904)) {
    var obj__3905 = cljs.core.first.call(null, G__3903__3904);
    var G__3903__3906 = G__3903__3904;
    while(true) {
      if(cljs.core.truth_(obj__3905 === first_obj__3901)) {
      }else {
        sb__3902.append(" ")
      }
      var G__3907__3908 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__3905, opts));
      if(cljs.core.truth_(G__3907__3908)) {
        var string__3909 = cljs.core.first.call(null, G__3907__3908);
        var G__3907__3910 = G__3907__3908;
        while(true) {
          sb__3902.append(string__3909);
          var temp__3698__auto____3911 = cljs.core.next.call(null, G__3907__3910);
          if(cljs.core.truth_(temp__3698__auto____3911)) {
            var G__3907__3912 = temp__3698__auto____3911;
            var G__3915 = cljs.core.first.call(null, G__3907__3912);
            var G__3916 = G__3907__3912;
            string__3909 = G__3915;
            G__3907__3910 = G__3916;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____3913 = cljs.core.next.call(null, G__3903__3906);
      if(cljs.core.truth_(temp__3698__auto____3913)) {
        var G__3903__3914 = temp__3698__auto____3913;
        var G__3917 = cljs.core.first.call(null, G__3903__3914);
        var G__3918 = G__3903__3914;
        obj__3905 = G__3917;
        G__3903__3906 = G__3918;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__3902)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__3919 = cljs.core.first.call(null, objs);
  var G__3920__3921 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__3920__3921)) {
    var obj__3922 = cljs.core.first.call(null, G__3920__3921);
    var G__3920__3923 = G__3920__3921;
    while(true) {
      if(cljs.core.truth_(obj__3922 === first_obj__3919)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__3924__3925 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__3922, opts));
      if(cljs.core.truth_(G__3924__3925)) {
        var string__3926 = cljs.core.first.call(null, G__3924__3925);
        var G__3924__3927 = G__3924__3925;
        while(true) {
          cljs.core.string_print.call(null, string__3926);
          var temp__3698__auto____3928 = cljs.core.next.call(null, G__3924__3927);
          if(cljs.core.truth_(temp__3698__auto____3928)) {
            var G__3924__3929 = temp__3698__auto____3928;
            var G__3932 = cljs.core.first.call(null, G__3924__3929);
            var G__3933 = G__3924__3929;
            string__3926 = G__3932;
            G__3924__3927 = G__3933;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____3930 = cljs.core.next.call(null, G__3920__3923);
      if(cljs.core.truth_(temp__3698__auto____3930)) {
        var G__3920__3931 = temp__3698__auto____3930;
        var G__3934 = cljs.core.first.call(null, G__3920__3931);
        var G__3935 = G__3920__3931;
        obj__3922 = G__3934;
        G__3920__3923 = G__3935;
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
  pr_str.cljs$lang$applyTo = function(arglist__3936) {
    var objs = cljs.core.seq(arglist__3936);
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
  pr.cljs$lang$applyTo = function(arglist__3937) {
    var objs = cljs.core.seq(arglist__3937);
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
  cljs_core_print.cljs$lang$applyTo = function(arglist__3938) {
    var objs = cljs.core.seq(arglist__3938);
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
  println.cljs$lang$applyTo = function(arglist__3939) {
    var objs = cljs.core.seq(arglist__3939);
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
  prn.cljs$lang$applyTo = function(arglist__3940) {
    var objs = cljs.core.seq(arglist__3940);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__3941 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__3941, "{", ", ", "}", opts, coll)
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
      var temp__3698__auto____3942 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____3942)) {
        var nspc__3943 = temp__3698__auto____3942;
        return cljs.core.str.call(null, nspc__3943, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____3944 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____3944)) {
          var nspc__3945 = temp__3698__auto____3944;
          return cljs.core.str.call(null, nspc__3945, "/")
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
  var pr_pair__3946 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__3946, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__3947 = this;
  var G__3948__3949 = cljs.core.seq.call(null, this__3947.watches);
  if(cljs.core.truth_(G__3948__3949)) {
    var G__3951__3953 = cljs.core.first.call(null, G__3948__3949);
    var vec__3952__3954 = G__3951__3953;
    var key__3955 = cljs.core.nth.call(null, vec__3952__3954, 0, null);
    var f__3956 = cljs.core.nth.call(null, vec__3952__3954, 1, null);
    var G__3948__3957 = G__3948__3949;
    var G__3951__3958 = G__3951__3953;
    var G__3948__3959 = G__3948__3957;
    while(true) {
      var vec__3960__3961 = G__3951__3958;
      var key__3962 = cljs.core.nth.call(null, vec__3960__3961, 0, null);
      var f__3963 = cljs.core.nth.call(null, vec__3960__3961, 1, null);
      var G__3948__3964 = G__3948__3959;
      f__3963.call(null, key__3962, this$, oldval, newval);
      var temp__3698__auto____3965 = cljs.core.next.call(null, G__3948__3964);
      if(cljs.core.truth_(temp__3698__auto____3965)) {
        var G__3948__3966 = temp__3698__auto____3965;
        var G__3973 = cljs.core.first.call(null, G__3948__3966);
        var G__3974 = G__3948__3966;
        G__3951__3958 = G__3973;
        G__3948__3959 = G__3974;
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
  var this__3967 = this;
  return this$.watches = cljs.core.assoc.call(null, this__3967.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__3968 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__3968.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__3969 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__3969.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__3970 = this;
  return this__3970.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__3971 = this;
  return this__3971.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__3972 = this;
  return o === other
};
cljs.core.atom = function() {
  var atom = null;
  var atom__3981 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__3982 = function() {
    var G__3984__delegate = function(x, p__3975) {
      var map__3976__3977 = p__3975;
      var map__3976__3978 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__3976__3977)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__3976__3977) : map__3976__3977;
      var validator__3979 = cljs.core.get.call(null, map__3976__3978, "\ufdd0'validator");
      var meta__3980 = cljs.core.get.call(null, map__3976__3978, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__3980, validator__3979, null)
    };
    var G__3984 = function(x, var_args) {
      var p__3975 = null;
      if(goog.isDef(var_args)) {
        p__3975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__3984__delegate.call(this, x, p__3975)
    };
    G__3984.cljs$lang$maxFixedArity = 1;
    G__3984.cljs$lang$applyTo = function(arglist__3985) {
      var x = cljs.core.first(arglist__3985);
      var p__3975 = cljs.core.rest(arglist__3985);
      return G__3984__delegate.call(this, x, p__3975)
    };
    return G__3984
  }();
  atom = function(x, var_args) {
    var p__3975 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__3981.call(this, x);
      default:
        return atom__3982.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__3982.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____3986 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____3986)) {
    var validate__3987 = temp__3698__auto____3986;
    if(cljs.core.truth_(validate__3987.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 2934)))));
    }
  }else {
  }
  var old_value__3988 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__3988, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___3989 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___3990 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___3991 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___3992 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___3993 = function() {
    var G__3995__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__3995 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__3995__delegate.call(this, a, f, x, y, z, more)
    };
    G__3995.cljs$lang$maxFixedArity = 5;
    G__3995.cljs$lang$applyTo = function(arglist__3996) {
      var a = cljs.core.first(arglist__3996);
      var f = cljs.core.first(cljs.core.next(arglist__3996));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3996)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3996))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3996)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3996)))));
      return G__3995__delegate.call(this, a, f, x, y, z, more)
    };
    return G__3995
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___3989.call(this, a, f);
      case 3:
        return swap_BANG___3990.call(this, a, f, x);
      case 4:
        return swap_BANG___3991.call(this, a, f, x, y);
      case 5:
        return swap_BANG___3992.call(this, a, f, x, y, z);
      default:
        return swap_BANG___3993.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___3993.cljs$lang$applyTo;
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
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__3997) {
    var iref = cljs.core.first(arglist__3997);
    var f = cljs.core.first(cljs.core.next(arglist__3997));
    var args = cljs.core.rest(cljs.core.next(arglist__3997));
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
  var gensym__3998 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__3999 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__3998.call(this);
      case 1:
        return gensym__3999.call(this, prefix_string)
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
  var this__4001 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__4001.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__4002 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__4002.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__4002.state, this__4002.f)
  }
  return cljs.core.deref.call(null, this__4002.state)
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
  delay.cljs$lang$applyTo = function(arglist__4003) {
    var body = cljs.core.seq(arglist__4003);
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
    var map__4004__4005 = options;
    var map__4004__4006 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__4004__4005)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__4004__4005) : map__4004__4005;
    var keywordize_keys__4007 = cljs.core.get.call(null, map__4004__4006, "\ufdd0'keywordize-keys");
    var keyfn__4008 = cljs.core.truth_(keywordize_keys__4007) ? cljs.core.keyword : cljs.core.str;
    var f__4014 = function thisfn(x) {
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
                var iter__383__auto____4013 = function iter__4009(s__4010) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__4010__4011 = s__4010;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__4010__4011))) {
                        var k__4012 = cljs.core.first.call(null, s__4010__4011);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__4008.call(null, k__4012), thisfn.call(null, x[k__4012])]), iter__4009.call(null, cljs.core.rest.call(null, s__4010__4011)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__383__auto____4013.call(null, cljs.core.js_keys.call(null, x))
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
    return f__4014.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__4015) {
    var x = cljs.core.first(arglist__4015);
    var options = cljs.core.rest(arglist__4015);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__4016 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__4020__delegate = function(args) {
      var temp__3695__auto____4017 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__4016), args);
      if(cljs.core.truth_(temp__3695__auto____4017)) {
        var v__4018 = temp__3695__auto____4017;
        return v__4018
      }else {
        var ret__4019 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__4016, cljs.core.assoc, args, ret__4019);
        return ret__4019
      }
    };
    var G__4020 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__4020__delegate.call(this, args)
    };
    G__4020.cljs$lang$maxFixedArity = 0;
    G__4020.cljs$lang$applyTo = function(arglist__4021) {
      var args = cljs.core.seq(arglist__4021);
      return G__4020__delegate.call(this, args)
    };
    return G__4020
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__4023 = function(f) {
    while(true) {
      var ret__4022 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__4022))) {
        var G__4026 = ret__4022;
        f = G__4026;
        continue
      }else {
        return ret__4022
      }
      break
    }
  };
  var trampoline__4024 = function() {
    var G__4027__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__4027 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4027__delegate.call(this, f, args)
    };
    G__4027.cljs$lang$maxFixedArity = 1;
    G__4027.cljs$lang$applyTo = function(arglist__4028) {
      var f = cljs.core.first(arglist__4028);
      var args = cljs.core.rest(arglist__4028);
      return G__4027__delegate.call(this, f, args)
    };
    return G__4027
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__4023.call(this, f);
      default:
        return trampoline__4024.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__4024.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__4029 = function() {
    return rand.call(null, 1)
  };
  var rand__4030 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__4029.call(this);
      case 1:
        return rand__4030.call(this, n)
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
    var k__4032 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__4032, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__4032, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___4041 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___4042 = function(h, child, parent) {
    var or__3548__auto____4033 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____4033)) {
      return or__3548__auto____4033
    }else {
      var or__3548__auto____4034 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____4034)) {
        return or__3548__auto____4034
      }else {
        var and__3546__auto____4035 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____4035)) {
          var and__3546__auto____4036 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____4036)) {
            var and__3546__auto____4037 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____4037)) {
              var ret__4038 = true;
              var i__4039 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____4040 = cljs.core.not.call(null, ret__4038);
                  if(cljs.core.truth_(or__3548__auto____4040)) {
                    return or__3548__auto____4040
                  }else {
                    return cljs.core._EQ_.call(null, i__4039, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__4038
                }else {
                  var G__4044 = isa_QMARK_.call(null, h, child.call(null, i__4039), parent.call(null, i__4039));
                  var G__4045 = i__4039 + 1;
                  ret__4038 = G__4044;
                  i__4039 = G__4045;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____4037
            }
          }else {
            return and__3546__auto____4036
          }
        }else {
          return and__3546__auto____4035
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___4041.call(this, h, child);
      case 3:
        return isa_QMARK___4042.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__4046 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__4047 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__4046.call(this, h);
      case 2:
        return parents__4047.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__4049 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__4050 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__4049.call(this, h);
      case 2:
        return ancestors__4050.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__4052 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__4053 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__4052.call(this, h);
      case 2:
        return descendants__4053.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__4063 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3226)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__4064 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3230)))));
    }
    var tp__4058 = "\ufdd0'parents".call(null, h);
    var td__4059 = "\ufdd0'descendants".call(null, h);
    var ta__4060 = "\ufdd0'ancestors".call(null, h);
    var tf__4061 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____4062 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__4058.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__4060.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__4060.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__4058, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__4061.call(null, "\ufdd0'ancestors".call(null, h), tag, td__4059, parent, ta__4060), "\ufdd0'descendants":tf__4061.call(null, "\ufdd0'descendants".call(null, h), parent, ta__4060, tag, td__4059)})
    }();
    if(cljs.core.truth_(or__3548__auto____4062)) {
      return or__3548__auto____4062
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__4063.call(this, h, tag);
      case 3:
        return derive__4064.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__4070 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__4071 = function(h, tag, parent) {
    var parentMap__4066 = "\ufdd0'parents".call(null, h);
    var childsParents__4067 = cljs.core.truth_(parentMap__4066.call(null, tag)) ? cljs.core.disj.call(null, parentMap__4066.call(null, tag), parent) : cljs.core.set([]);
    var newParents__4068 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__4067)) ? cljs.core.assoc.call(null, parentMap__4066, tag, childsParents__4067) : cljs.core.dissoc.call(null, parentMap__4066, tag);
    var deriv_seq__4069 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__4055_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__4055_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__4055_SHARP_), cljs.core.second.call(null, p1__4055_SHARP_)))
    }, cljs.core.seq.call(null, newParents__4068)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__4066.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__4056_SHARP_, p2__4057_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__4056_SHARP_, p2__4057_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__4069))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__4070.call(this, h, tag);
      case 3:
        return underive__4071.call(this, h, tag, parent)
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
  var xprefs__4073 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____4075 = cljs.core.truth_(function() {
    var and__3546__auto____4074 = xprefs__4073;
    if(cljs.core.truth_(and__3546__auto____4074)) {
      return xprefs__4073.call(null, y)
    }else {
      return and__3546__auto____4074
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____4075)) {
    return or__3548__auto____4075
  }else {
    var or__3548__auto____4077 = function() {
      var ps__4076 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__4076) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__4076), prefer_table))) {
          }else {
          }
          var G__4080 = cljs.core.rest.call(null, ps__4076);
          ps__4076 = G__4080;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____4077)) {
      return or__3548__auto____4077
    }else {
      var or__3548__auto____4079 = function() {
        var ps__4078 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__4078) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__4078), y, prefer_table))) {
            }else {
            }
            var G__4081 = cljs.core.rest.call(null, ps__4078);
            ps__4078 = G__4081;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____4079)) {
        return or__3548__auto____4079
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____4082 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____4082)) {
    return or__3548__auto____4082
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__4091 = cljs.core.reduce.call(null, function(be, p__4083) {
    var vec__4084__4085 = p__4083;
    var k__4086 = cljs.core.nth.call(null, vec__4084__4085, 0, null);
    var ___4087 = cljs.core.nth.call(null, vec__4084__4085, 1, null);
    var e__4088 = vec__4084__4085;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__4086))) {
      var be2__4090 = cljs.core.truth_(function() {
        var or__3548__auto____4089 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____4089)) {
          return or__3548__auto____4089
        }else {
          return cljs.core.dominates.call(null, k__4086, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__4088 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__4090), k__4086, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__4086, " and ", cljs.core.first.call(null, be2__4090), ", and neither is preferred"));
      }
      return be2__4090
    }else {
      return null
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__4091)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__4091));
      return cljs.core.second.call(null, best_entry__4091)
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
    var and__3546__auto____4092 = mf;
    if(cljs.core.truth_(and__3546__auto____4092)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____4092
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____4093 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4093)) {
        return or__3548__auto____4093
      }else {
        var or__3548__auto____4094 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____4094)) {
          return or__3548__auto____4094
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4095 = mf;
    if(cljs.core.truth_(and__3546__auto____4095)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____4095
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____4096 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4096)) {
        return or__3548__auto____4096
      }else {
        var or__3548__auto____4097 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____4097)) {
          return or__3548__auto____4097
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4098 = mf;
    if(cljs.core.truth_(and__3546__auto____4098)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____4098
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____4099 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4099)) {
        return or__3548__auto____4099
      }else {
        var or__3548__auto____4100 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____4100)) {
          return or__3548__auto____4100
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4101 = mf;
    if(cljs.core.truth_(and__3546__auto____4101)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____4101
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____4102 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4102)) {
        return or__3548__auto____4102
      }else {
        var or__3548__auto____4103 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____4103)) {
          return or__3548__auto____4103
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4104 = mf;
    if(cljs.core.truth_(and__3546__auto____4104)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____4104
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____4105 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4105)) {
        return or__3548__auto____4105
      }else {
        var or__3548__auto____4106 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____4106)) {
          return or__3548__auto____4106
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4107 = mf;
    if(cljs.core.truth_(and__3546__auto____4107)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____4107
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____4108 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4108)) {
        return or__3548__auto____4108
      }else {
        var or__3548__auto____4109 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____4109)) {
          return or__3548__auto____4109
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4110 = mf;
    if(cljs.core.truth_(and__3546__auto____4110)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____4110
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____4111 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4111)) {
        return or__3548__auto____4111
      }else {
        var or__3548__auto____4112 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____4112)) {
          return or__3548__auto____4112
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._invoke = function _invoke(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4113 = mf;
    if(cljs.core.truth_(and__3546__auto____4113)) {
      return mf.cljs$core$IMultiFn$_invoke
    }else {
      return and__3546__auto____4113
    }
  }())) {
    return mf.cljs$core$IMultiFn$_invoke(mf, args)
  }else {
    return function() {
      var or__3548__auto____4114 = cljs.core._invoke[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____4114)) {
        return or__3548__auto____4114
      }else {
        var or__3548__auto____4115 = cljs.core._invoke["_"];
        if(cljs.core.truth_(or__3548__auto____4115)) {
          return or__3548__auto____4115
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-invoke", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_invoke = function do_invoke(mf, dispatch_fn, args) {
  var dispatch_val__4116 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__4117 = cljs.core._get_method.call(null, mf, dispatch_val__4116);
  if(cljs.core.truth_(target_fn__4117)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__4116));
  }
  return cljs.core.apply.call(null, target_fn__4117, args)
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
  var this__4118 = this;
  cljs.core.swap_BANG_.call(null, this__4118.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4118.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4118.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__4118.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__4119 = this;
  cljs.core.swap_BANG_.call(null, this__4119.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__4119.method_cache, this__4119.method_table, this__4119.cached_hierarchy, this__4119.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__4120 = this;
  cljs.core.swap_BANG_.call(null, this__4120.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__4120.method_cache, this__4120.method_table, this__4120.cached_hierarchy, this__4120.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__4121 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__4121.cached_hierarchy), cljs.core.deref.call(null, this__4121.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__4121.method_cache, this__4121.method_table, this__4121.cached_hierarchy, this__4121.hierarchy)
  }
  var temp__3695__auto____4122 = cljs.core.deref.call(null, this__4121.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____4122)) {
    var target_fn__4123 = temp__3695__auto____4122;
    return target_fn__4123
  }else {
    var temp__3695__auto____4124 = cljs.core.find_and_cache_best_method.call(null, this__4121.name, dispatch_val, this__4121.hierarchy, this__4121.method_table, this__4121.prefer_table, this__4121.method_cache, this__4121.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____4124)) {
      var target_fn__4125 = temp__3695__auto____4124;
      return target_fn__4125
    }else {
      return cljs.core.deref.call(null, this__4121.method_table).call(null, this__4121.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__4126 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__4126.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__4126.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__4126.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__4126.method_cache, this__4126.method_table, this__4126.cached_hierarchy, this__4126.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__4127 = this;
  return cljs.core.deref.call(null, this__4127.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__4128 = this;
  return cljs.core.deref.call(null, this__4128.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = function(mf, args) {
  var this__4129 = this;
  return cljs.core.do_invoke.call(null, mf, this__4129.dispatch_fn, args)
};
cljs.core.MultiFn.prototype.call = function() {
  var G__4130__delegate = function(_, args) {
    return cljs.core._invoke.call(null, this, args)
  };
  var G__4130 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__4130__delegate.call(this, _, args)
  };
  G__4130.cljs$lang$maxFixedArity = 1;
  G__4130.cljs$lang$applyTo = function(arglist__4131) {
    var _ = cljs.core.first(arglist__4131);
    var args = cljs.core.rest(arglist__4131);
    return G__4130__delegate.call(this, _, args)
  };
  return G__4130
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
    var and__3546__auto____2434 = content;
    if(cljs.core.truth_(and__3546__auto____2434)) {
      return content.domina$DomContent$nodes
    }else {
      return and__3546__auto____2434
    }
  }())) {
    return content.domina$DomContent$nodes(content)
  }else {
    return function() {
      var or__3548__auto____2435 = domina.nodes[goog.typeOf.call(null, content)];
      if(cljs.core.truth_(or__3548__auto____2435)) {
        return or__3548__auto____2435
      }else {
        var or__3548__auto____2436 = domina.nodes["_"];
        if(cljs.core.truth_(or__3548__auto____2436)) {
          return or__3548__auto____2436
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2437 = nodeseq;
    if(cljs.core.truth_(and__3546__auto____2437)) {
      return nodeseq.domina$DomContent$single_node
    }else {
      return and__3546__auto____2437
    }
  }())) {
    return nodeseq.domina$DomContent$single_node(nodeseq)
  }else {
    return function() {
      var or__3548__auto____2438 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(cljs.core.truth_(or__3548__auto____2438)) {
        return or__3548__auto____2438
      }else {
        var or__3548__auto____2439 = domina.single_node["_"];
        if(cljs.core.truth_(or__3548__auto____2439)) {
          return or__3548__auto____2439
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
  if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.t2440))) {
    domina.t2440 = function(class_name, by_class) {
      this.class_name = class_name;
      this.by_class = by_class
    };
    domina.t2440.prototype.domina$DomContent$ = true;
    domina.t2440.prototype.domina$DomContent$nodes = function(_) {
      var this__2441 = this;
      return goog.dom.getElementsByClass.call(null, cljs.core.name.call(null, this__2441.class_name))
    };
    domina.t2440.prototype.domina$DomContent$single_node = function(_) {
      var this__2442 = this;
      return goog.dom.getElementByClass.call(null, cljs.core.name.call(null, this__2442.class_name))
    }
  }else {
  }
  return new domina.t2440(class_name, by_class)
};
domina.children = function children(content) {
  return cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__2443_SHARP_) {
    return p1__2443_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__2444_SHARP_, p2__2445_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__2444_SHARP_, p2__2445_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2447_SHARP_, p2__2446_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__2446_SHARP_, p1__2447_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2449_SHARP_, p2__2448_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__2448_SHARP_, p1__2449_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2451_SHARP_, p2__2450_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__2450_SHARP_, p1__2451_SHARP_)
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
  var s__2452 = goog.style.getStyle.call(null, domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(cljs.core.not.call(null, goog.string.isEmptySafe.call(null, s__2452)))) {
    return s__2452
  }else {
    return null
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function set_style_BANG_(content, name, value) {
  var G__2453__2454 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2453__2454)) {
    var n__2455 = cljs.core.first.call(null, G__2453__2454);
    var G__2453__2456 = G__2453__2454;
    while(true) {
      goog.style.setStyle.call(null, n__2455, cljs.core.name.call(null, name), value);
      var temp__3698__auto____2457 = cljs.core.next.call(null, G__2453__2456);
      if(cljs.core.truth_(temp__3698__auto____2457)) {
        var G__2453__2458 = temp__3698__auto____2457;
        var G__2459 = cljs.core.first.call(null, G__2453__2458);
        var G__2460 = G__2453__2458;
        n__2455 = G__2459;
        G__2453__2456 = G__2460;
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
  var G__2461__2462 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2461__2462)) {
    var n__2463 = cljs.core.first.call(null, G__2461__2462);
    var G__2461__2464 = G__2461__2462;
    while(true) {
      n__2463.setAttribute(cljs.core.name.call(null, name), value);
      var temp__3698__auto____2465 = cljs.core.next.call(null, G__2461__2464);
      if(cljs.core.truth_(temp__3698__auto____2465)) {
        var G__2461__2466 = temp__3698__auto____2465;
        var G__2467 = cljs.core.first.call(null, G__2461__2466);
        var G__2468 = G__2461__2466;
        n__2463 = G__2467;
        G__2461__2464 = G__2468;
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
    var vec__2469__2470 = pair.split(/\s*:\s*/);
    var k__2471 = cljs.core.nth.call(null, vec__2469__2470, 0, null);
    var v__2472 = cljs.core.nth.call(null, vec__2469__2470, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____2473 = k__2471;
      if(cljs.core.truth_(and__3546__auto____2473)) {
        return v__2472
      }else {
        return and__3546__auto____2473
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__2471.toLowerCase()), v__2472)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  return domina.parse_style_attributes.call(null, domina.attr.call(null, content, "style"))
};
domina.attrs = function attrs(content) {
  var node__2475 = domina.single_node.call(null, content);
  var attrs__2476 = node__2475.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.map.call(null, function(p1__2474_SHARP_) {
    var attr__2477 = attrs__2476.item(p1__2474_SHARP_);
    return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null, attr__2477.nodeName.toLowerCase())], [attr__2477.nodeValue])
  }, cljs.core.range.call(null, attrs__2476.length)))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__2478__2479 = cljs.core.seq.call(null, styles);
  if(cljs.core.truth_(G__2478__2479)) {
    var G__2481__2483 = cljs.core.first.call(null, G__2478__2479);
    var vec__2482__2484 = G__2481__2483;
    var name__2485 = cljs.core.nth.call(null, vec__2482__2484, 0, null);
    var value__2486 = cljs.core.nth.call(null, vec__2482__2484, 1, null);
    var G__2478__2487 = G__2478__2479;
    var G__2481__2488 = G__2481__2483;
    var G__2478__2489 = G__2478__2487;
    while(true) {
      var vec__2490__2491 = G__2481__2488;
      var name__2492 = cljs.core.nth.call(null, vec__2490__2491, 0, null);
      var value__2493 = cljs.core.nth.call(null, vec__2490__2491, 1, null);
      var G__2478__2494 = G__2478__2489;
      domina.set_style_BANG_.call(null, content, name__2492, value__2493);
      var temp__3698__auto____2495 = cljs.core.next.call(null, G__2478__2494);
      if(cljs.core.truth_(temp__3698__auto____2495)) {
        var G__2478__2496 = temp__3698__auto____2495;
        var G__2497 = cljs.core.first.call(null, G__2478__2496);
        var G__2498 = G__2478__2496;
        G__2481__2488 = G__2497;
        G__2478__2489 = G__2498;
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
  var G__2499__2500 = cljs.core.seq.call(null, attrs);
  if(cljs.core.truth_(G__2499__2500)) {
    var G__2502__2504 = cljs.core.first.call(null, G__2499__2500);
    var vec__2503__2505 = G__2502__2504;
    var name__2506 = cljs.core.nth.call(null, vec__2503__2505, 0, null);
    var value__2507 = cljs.core.nth.call(null, vec__2503__2505, 1, null);
    var G__2499__2508 = G__2499__2500;
    var G__2502__2509 = G__2502__2504;
    var G__2499__2510 = G__2499__2508;
    while(true) {
      var vec__2511__2512 = G__2502__2509;
      var name__2513 = cljs.core.nth.call(null, vec__2511__2512, 0, null);
      var value__2514 = cljs.core.nth.call(null, vec__2511__2512, 1, null);
      var G__2499__2515 = G__2499__2510;
      domina.set_attr_BANG_.call(null, content, name__2513, value__2514);
      var temp__3698__auto____2516 = cljs.core.next.call(null, G__2499__2515);
      if(cljs.core.truth_(temp__3698__auto____2516)) {
        var G__2499__2517 = temp__3698__auto____2516;
        var G__2518 = cljs.core.first.call(null, G__2499__2517);
        var G__2519 = G__2499__2517;
        G__2502__2509 = G__2518;
        G__2499__2510 = G__2519;
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
  var G__2520__2521 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2520__2521)) {
    var node__2522 = cljs.core.first.call(null, G__2520__2521);
    var G__2520__2523 = G__2520__2521;
    while(true) {
      goog.dom.classes.add.call(null, node__2522, class$);
      var temp__3698__auto____2524 = cljs.core.next.call(null, G__2520__2523);
      if(cljs.core.truth_(temp__3698__auto____2524)) {
        var G__2520__2525 = temp__3698__auto____2524;
        var G__2526 = cljs.core.first.call(null, G__2520__2525);
        var G__2527 = G__2520__2525;
        node__2522 = G__2526;
        G__2520__2523 = G__2527;
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
  var G__2528__2529 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2528__2529)) {
    var node__2530 = cljs.core.first.call(null, G__2528__2529);
    var G__2528__2531 = G__2528__2529;
    while(true) {
      goog.dom.classes.remove.call(null, node__2530, class$);
      var temp__3698__auto____2532 = cljs.core.next.call(null, G__2528__2531);
      if(cljs.core.truth_(temp__3698__auto____2532)) {
        var G__2528__2533 = temp__3698__auto____2532;
        var G__2534 = cljs.core.first.call(null, G__2528__2533);
        var G__2535 = G__2528__2533;
        node__2530 = G__2534;
        G__2528__2531 = G__2535;
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
  var text__2536 = function(content) {
    return text.call(null, content, true)
  };
  var text__2537 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node.call(null, content)))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node.call(null, content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__2536.call(this, content);
      case 2:
        return text__2537.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__2539__2540 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2539__2540)) {
    var node__2541 = cljs.core.first.call(null, G__2539__2540);
    var G__2539__2542 = G__2539__2540;
    while(true) {
      goog.dom.setTextContent.call(null, node__2541, value);
      var temp__3698__auto____2543 = cljs.core.next.call(null, G__2539__2542);
      if(cljs.core.truth_(temp__3698__auto____2543)) {
        var G__2539__2544 = temp__3698__auto____2543;
        var G__2545 = cljs.core.first.call(null, G__2539__2544);
        var G__2546 = G__2539__2544;
        node__2541 = G__2545;
        G__2539__2542 = G__2546;
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
  var G__2547__2548 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2547__2548)) {
    var node__2549 = cljs.core.first.call(null, G__2547__2548);
    var G__2547__2550 = G__2547__2548;
    while(true) {
      goog.dom.forms.setValue.call(null, node__2549, value);
      var temp__3698__auto____2551 = cljs.core.next.call(null, G__2547__2550);
      if(cljs.core.truth_(temp__3698__auto____2551)) {
        var G__2547__2552 = temp__3698__auto____2551;
        var G__2553 = cljs.core.first.call(null, G__2547__2552);
        var G__2554 = G__2547__2552;
        node__2549 = G__2553;
        G__2547__2550 = G__2554;
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
  var G__2555__2556 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2555__2556)) {
    var node__2557 = cljs.core.first.call(null, G__2555__2556);
    var G__2555__2558 = G__2555__2556;
    while(true) {
      node__2557.innerHTML = value;
      var temp__3698__auto____2559 = cljs.core.next.call(null, G__2555__2558);
      if(cljs.core.truth_(temp__3698__auto____2559)) {
        var G__2555__2560 = temp__3698__auto____2559;
        var G__2561 = cljs.core.first.call(null, G__2555__2560);
        var G__2562 = G__2555__2560;
        node__2557 = G__2561;
        G__2555__2558 = G__2562;
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
  var parents__2563 = domina.nodes.call(null, parent_content);
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, parents__2563)))) {
    var G__2564__2565 = cljs.core.seq.call(null, domina.nodes.call(null, child_content));
    if(cljs.core.truth_(G__2564__2565)) {
      var child__2566 = cljs.core.first.call(null, G__2564__2565);
      var G__2564__2567 = G__2564__2565;
      while(true) {
        f.call(null, cljs.core.first.call(null, parents__2563), child__2566);
        var temp__3698__auto____2568 = cljs.core.next.call(null, G__2564__2567);
        if(cljs.core.truth_(temp__3698__auto____2568)) {
          var G__2564__2569 = temp__3698__auto____2568;
          var G__2582 = cljs.core.first.call(null, G__2564__2569);
          var G__2583 = G__2564__2569;
          child__2566 = G__2582;
          G__2564__2567 = G__2583;
          continue
        }else {
        }
        break
      }
    }else {
    }
    var G__2570__2572 = cljs.core.seq.call(null, cljs.core.rest.call(null, parents__2563));
    if(cljs.core.truth_(G__2570__2572)) {
      var parent__2573 = cljs.core.first.call(null, G__2570__2572);
      var G__2570__2574 = G__2570__2572;
      while(true) {
        var G__2571__2575 = cljs.core.seq.call(null, domina.nodes.call(null, domina.clone.call(null, child_content)));
        if(cljs.core.truth_(G__2571__2575)) {
          var child__2576 = cljs.core.first.call(null, G__2571__2575);
          var G__2571__2577 = G__2571__2575;
          while(true) {
            f.call(null, parent__2573, child__2576);
            var temp__3698__auto____2578 = cljs.core.next.call(null, G__2571__2577);
            if(cljs.core.truth_(temp__3698__auto____2578)) {
              var G__2571__2579 = temp__3698__auto____2578;
              var G__2584 = cljs.core.first.call(null, G__2571__2579);
              var G__2585 = G__2571__2579;
              child__2576 = G__2584;
              G__2571__2577 = G__2585;
              continue
            }else {
            }
            break
          }
        }else {
        }
        var temp__3698__auto____2580 = cljs.core.next.call(null, G__2570__2574);
        if(cljs.core.truth_(temp__3698__auto____2580)) {
          var G__2570__2581 = temp__3698__auto____2580;
          var G__2586 = cljs.core.first.call(null, G__2570__2581);
          var G__2587 = G__2570__2581;
          parent__2573 = G__2586;
          G__2570__2574 = G__2587;
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
  var lazy_nodelist__2588 = function(nl) {
    return lazy_nodelist.call(null, nl, 0)
  };
  var lazy_nodelist__2589 = function(nl, n) {
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
        return lazy_nodelist__2588.call(this, nl);
      case 2:
        return lazy_nodelist__2589.call(this, nl, n)
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
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = function(content) {
  return cljs.core.cons.call(null, content)
};
Element.prototype.domina$DomContent$single_node = function(content) {
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
  var G__2591 = null;
  var G__2591__2592 = function(nodelist, n) {
    return nodelist.item(n)
  };
  var G__2591__2593 = function(nodelist, n, not_found) {
    if(cljs.core.truth_(nodelist.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, nodelist, n)
    }
  };
  G__2591 = function(nodelist, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2591__2592.call(this, nodelist, n);
      case 3:
        return G__2591__2593.call(this, nodelist, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2591
}();
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = function(nodelist) {
  return nodelist.length
};
if(cljs.core.truth_(window.StaticNodeList)) {
  StaticNodeList.prototype.cljs$core$ISeqable$ = true;
  StaticNodeList.prototype.cljs$core$ISeqable$_seq = function(nodelist) {
    return domina.lazy_nodelist.call(null, nodelist)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$ = true;
  StaticNodeList.prototype.cljs$core$IIndexed$_nth = function() {
    var G__2595 = null;
    var G__2595__2596 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__2595__2597 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__2595 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__2595__2596.call(this, nodelist, n);
        case 3:
          return G__2595__2597.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__2595
  }();
  StaticNodeList.prototype.cljs$core$ICounted$ = true;
  StaticNodeList.prototype.cljs$core$ICounted$_count = function(nodelist) {
    return nodelist.length
  }
}else {
}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = function(coll) {
  return domina.lazy_nodelist.call(null, coll)
};
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = function() {
  var G__2599 = null;
  var G__2599__2600 = function(coll, n) {
    return coll.item(n)
  };
  var G__2599__2601 = function(coll, n, not_found) {
    if(cljs.core.truth_(coll.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, coll, n)
    }
  };
  G__2599 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2599__2600.call(this, coll, n);
      case 3:
        return G__2599__2601.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2599
}();
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = function(coll) {
  return coll.length
};
goog.provide("domina.xpath");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.dom");
goog.require("cybozu.xpath");
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
    if(cljs.core.truth_(doc__2419.evaluate)) {
      return technique_2.call(null, null, doc__2419, node, path)
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
    var result__2421 = doc.evaluate(expr, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__2421.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__2422 = doc.evaluate(expr, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__2423 = result__2422.snapshotLength;
    var i__2424 = 0;
    var acc__2425 = null;
    while(true) {
      if(cljs.core.truth_(i__2424 < num_results__2423)) {
        var G__2426 = i__2424 + 1;
        var G__2427 = cljs.core.cons.call(null, result__2422.snapshotItem(i__2424), acc__2425);
        i__2424 = G__2426;
        acc__2425 = G__2427;
        continue
      }else {
        return acc__2425
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
  var xpath__2431 = function(expr) {
    return xpath.call(null, domina.xpath.root_element.call(null), expr)
  };
  var xpath__2432 = function(base, expr) {
    if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.xpath.t2428))) {
      domina.xpath.t2428 = function(expr, base, xpath) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath
      };
      domina.xpath.t2428.prototype.domina$DomContent$ = true;
      domina.xpath.t2428.prototype.domina$DomContent$nodes = function(_) {
        var this__2429 = this;
        return cljs.core.mapcat.call(null, cljs.core.partial.call(null, domina.xpath.select_nodes, this__2429.expr), domina.nodes.call(null, this__2429.base))
      };
      domina.xpath.t2428.prototype.domina$DomContent$single_node = function(_) {
        var this__2430 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.partial.call(null, domina.xpath.select_node, this__2430.expr), domina.nodes.call(null, this__2430.base))))
      }
    }else {
    }
    return new domina.xpath.t2428(expr, base, xpath)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__2431.call(this, base);
      case 2:
        return xpath__2432.call(this, base, expr)
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
