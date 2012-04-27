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
goog.provide("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
goog.require("goog.object");
goog.require("goog.array");
cljs.core._STAR_unchecked_if_STAR_ = false;
cljs.core._STAR_print_fn_STAR_ = function _STAR_print_fn_STAR_(_) {
  throw new Error("No *print-fn* fn set for evaluation environment");
};
void 0;
void 0;
void 0;
cljs.core.truth_ = function truth_(x) {
  return x != null && x !== false
};
cljs.core.type_satisfies_ = function type_satisfies_(p, x) {
  var or__3548__auto____9067 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____9067)) {
    return or__3548__auto____9067
  }else {
    var or__3548__auto____9069 = p["_"];
    if(cljs.core.truth_(or__3548__auto____9069)) {
      return or__3548__auto____9069
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
  return Error("No protocol method " + proto + " defined for type " + goog.typeOf.call(null, obj) + ": " + obj)
};
cljs.core.aclone = function aclone(array_like) {
  return Array.prototype.slice.call(array_like)
};
cljs.core.array = function array(var_args) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.make_array = function make_array(n) {
  return new Array(n)
};
void 0;
cljs.core.aget = function() {
  var aget = null;
  var aget__2 = function(array, i) {
    return array[i]
  };
  var aget__3 = function() {
    var G__9102__delegate = function(array, i, idxs) {
      return cljs.core.apply.__3(aget, aget.call(null, array, i), idxs)
    };
    var G__9102 = function(array, i, var_args) {
      var idxs = null;
      if(goog.isDef(var_args)) {
        idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__9102__delegate.call(this, array, i, idxs)
    };
    G__9102.cljs$lang$maxFixedArity = 2;
    G__9102.cljs$lang$applyTo = function(arglist__9104) {
      var array = cljs.core.first(arglist__9104);
      var i = cljs.core.first(cljs.core.next(arglist__9104));
      var idxs = cljs.core.rest(cljs.core.next(arglist__9104));
      return G__9102__delegate.call(this, array, i, idxs)
    };
    return G__9102
  }();
  aget = function(array, i, var_args) {
    var idxs = var_args;
    switch(arguments.length) {
      case 2:
        return aget__2.call(this, array, i);
      default:
        return aget__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  aget.cljs$lang$maxFixedArity = 2;
  aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
  aget.__2 = aget__2;
  aget.__3 = aget__3;
  return aget
}();
cljs.core.aset = function aset(array, i, val) {
  return array[i] = val
};
cljs.core.alength = function alength(array) {
  return array.length
};
void 0;
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var _invoke = null;
  var _invoke__1 = function(this$) {
    if(function() {
      var and__3546__auto____9119 = this$;
      if(and__3546__auto____9119) {
        return this$.cljs$core$IFn$_invoke__1
      }else {
        return and__3546__auto____9119
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__1(this$)
    }else {
      return function() {
        var or__3548__auto____9121 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9121) {
          return or__3548__auto____9121
        }else {
          var or__3548__auto____9123 = cljs.core._invoke["_"];
          if(or__3548__auto____9123) {
            return or__3548__auto____9123
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__2 = function(this$, a) {
    if(function() {
      var and__3546__auto____9146 = this$;
      if(and__3546__auto____9146) {
        return this$.cljs$core$IFn$_invoke__2
      }else {
        return and__3546__auto____9146
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__2(this$, a)
    }else {
      return function() {
        var or__3548__auto____9150 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9150) {
          return or__3548__auto____9150
        }else {
          var or__3548__auto____9153 = cljs.core._invoke["_"];
          if(or__3548__auto____9153) {
            return or__3548__auto____9153
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__3 = function(this$, a, b) {
    if(function() {
      var and__3546__auto____9157 = this$;
      if(and__3546__auto____9157) {
        return this$.cljs$core$IFn$_invoke__3
      }else {
        return and__3546__auto____9157
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__3(this$, a, b)
    }else {
      return function() {
        var or__3548__auto____9163 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9163) {
          return or__3548__auto____9163
        }else {
          var or__3548__auto____9165 = cljs.core._invoke["_"];
          if(or__3548__auto____9165) {
            return or__3548__auto____9165
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__4 = function(this$, a, b, c) {
    if(function() {
      var and__3546__auto____9169 = this$;
      if(and__3546__auto____9169) {
        return this$.cljs$core$IFn$_invoke__4
      }else {
        return and__3546__auto____9169
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__4(this$, a, b, c)
    }else {
      return function() {
        var or__3548__auto____9174 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9174) {
          return or__3548__auto____9174
        }else {
          var or__3548__auto____9177 = cljs.core._invoke["_"];
          if(or__3548__auto____9177) {
            return or__3548__auto____9177
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__5 = function(this$, a, b, c, d) {
    if(function() {
      var and__3546__auto____9181 = this$;
      if(and__3546__auto____9181) {
        return this$.cljs$core$IFn$_invoke__5
      }else {
        return and__3546__auto____9181
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__5(this$, a, b, c, d)
    }else {
      return function() {
        var or__3548__auto____9185 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9185) {
          return or__3548__auto____9185
        }else {
          var or__3548__auto____9188 = cljs.core._invoke["_"];
          if(or__3548__auto____9188) {
            return or__3548__auto____9188
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__6 = function(this$, a, b, c, d, e) {
    if(function() {
      var and__3546__auto____9193 = this$;
      if(and__3546__auto____9193) {
        return this$.cljs$core$IFn$_invoke__6
      }else {
        return and__3546__auto____9193
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__6(this$, a, b, c, d, e)
    }else {
      return function() {
        var or__3548__auto____9197 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9197) {
          return or__3548__auto____9197
        }else {
          var or__3548__auto____9200 = cljs.core._invoke["_"];
          if(or__3548__auto____9200) {
            return or__3548__auto____9200
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__7 = function(this$, a, b, c, d, e, f) {
    if(function() {
      var and__3546__auto____9203 = this$;
      if(and__3546__auto____9203) {
        return this$.cljs$core$IFn$_invoke__7
      }else {
        return and__3546__auto____9203
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__7(this$, a, b, c, d, e, f)
    }else {
      return function() {
        var or__3548__auto____9206 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9206) {
          return or__3548__auto____9206
        }else {
          var or__3548__auto____9209 = cljs.core._invoke["_"];
          if(or__3548__auto____9209) {
            return or__3548__auto____9209
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__8 = function(this$, a, b, c, d, e, f, g) {
    if(function() {
      var and__3546__auto____9212 = this$;
      if(and__3546__auto____9212) {
        return this$.cljs$core$IFn$_invoke__8
      }else {
        return and__3546__auto____9212
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__8(this$, a, b, c, d, e, f, g)
    }else {
      return function() {
        var or__3548__auto____9215 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9215) {
          return or__3548__auto____9215
        }else {
          var or__3548__auto____9218 = cljs.core._invoke["_"];
          if(or__3548__auto____9218) {
            return or__3548__auto____9218
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__9 = function(this$, a, b, c, d, e, f, g, h) {
    if(function() {
      var and__3546__auto____9221 = this$;
      if(and__3546__auto____9221) {
        return this$.cljs$core$IFn$_invoke__9
      }else {
        return and__3546__auto____9221
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__9(this$, a, b, c, d, e, f, g, h)
    }else {
      return function() {
        var or__3548__auto____9225 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9225) {
          return or__3548__auto____9225
        }else {
          var or__3548__auto____9227 = cljs.core._invoke["_"];
          if(or__3548__auto____9227) {
            return or__3548__auto____9227
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__10 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(function() {
      var and__3546__auto____9229 = this$;
      if(and__3546__auto____9229) {
        return this$.cljs$core$IFn$_invoke__10
      }else {
        return and__3546__auto____9229
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__10(this$, a, b, c, d, e, f, g, h, i)
    }else {
      return function() {
        var or__3548__auto____9231 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9231) {
          return or__3548__auto____9231
        }else {
          var or__3548__auto____9233 = cljs.core._invoke["_"];
          if(or__3548__auto____9233) {
            return or__3548__auto____9233
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__11 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(function() {
      var and__3546__auto____9235 = this$;
      if(and__3546__auto____9235) {
        return this$.cljs$core$IFn$_invoke__11
      }else {
        return and__3546__auto____9235
      }
    }()) {
      return this$.cljs$core$IFn$_invoke__11(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      return function() {
        var or__3548__auto____9263 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3548__auto____9263) {
          return or__3548__auto____9263
        }else {
          var or__3548__auto____9266 = cljs.core._invoke["_"];
          if(or__3548__auto____9266) {
            return or__3548__auto____9266
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__12 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9340 = this$;
      if(cljs.core.truth_(and__3546__auto____9340)) {
        return this$.cljs$core$IFn$_invoke__12
      }else {
        return and__3546__auto____9340
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__12(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      return function() {
        var or__3548__auto____9345 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9345)) {
          return or__3548__auto____9345
        }else {
          var or__3548__auto____9347 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9347)) {
            return or__3548__auto____9347
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__13 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9351 = this$;
      if(cljs.core.truth_(and__3546__auto____9351)) {
        return this$.cljs$core$IFn$_invoke__13
      }else {
        return and__3546__auto____9351
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__13(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      return function() {
        var or__3548__auto____9355 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9355)) {
          return or__3548__auto____9355
        }else {
          var or__3548__auto____9357 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9357)) {
            return or__3548__auto____9357
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__14 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9359 = this$;
      if(cljs.core.truth_(and__3546__auto____9359)) {
        return this$.cljs$core$IFn$_invoke__14
      }else {
        return and__3546__auto____9359
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__14(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      return function() {
        var or__3548__auto____9361 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9361)) {
          return or__3548__auto____9361
        }else {
          var or__3548__auto____9363 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9363)) {
            return or__3548__auto____9363
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__15 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9365 = this$;
      if(cljs.core.truth_(and__3546__auto____9365)) {
        return this$.cljs$core$IFn$_invoke__15
      }else {
        return and__3546__auto____9365
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__15(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      return function() {
        var or__3548__auto____9367 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9367)) {
          return or__3548__auto____9367
        }else {
          var or__3548__auto____9369 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9369)) {
            return or__3548__auto____9369
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__16 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9373 = this$;
      if(cljs.core.truth_(and__3546__auto____9373)) {
        return this$.cljs$core$IFn$_invoke__16
      }else {
        return and__3546__auto____9373
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__16(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      return function() {
        var or__3548__auto____9378 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9378)) {
          return or__3548__auto____9378
        }else {
          var or__3548__auto____9381 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9381)) {
            return or__3548__auto____9381
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__17 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9385 = this$;
      if(cljs.core.truth_(and__3546__auto____9385)) {
        return this$.cljs$core$IFn$_invoke__17
      }else {
        return and__3546__auto____9385
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__17(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      return function() {
        var or__3548__auto____9389 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9389)) {
          return or__3548__auto____9389
        }else {
          var or__3548__auto____9392 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9392)) {
            return or__3548__auto____9392
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__18 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9397 = this$;
      if(cljs.core.truth_(and__3546__auto____9397)) {
        return this$.cljs$core$IFn$_invoke__18
      }else {
        return and__3546__auto____9397
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__18(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      return function() {
        var or__3548__auto____9401 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9401)) {
          return or__3548__auto____9401
        }else {
          var or__3548__auto____9403 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9403)) {
            return or__3548__auto____9403
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__19 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9408 = this$;
      if(cljs.core.truth_(and__3546__auto____9408)) {
        return this$.cljs$core$IFn$_invoke__19
      }else {
        return and__3546__auto____9408
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__19(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      return function() {
        var or__3548__auto____9411 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9411)) {
          return or__3548__auto____9411
        }else {
          var or__3548__auto____9414 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9414)) {
            return or__3548__auto____9414
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__20 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9417 = this$;
      if(cljs.core.truth_(and__3546__auto____9417)) {
        return this$.cljs$core$IFn$_invoke__20
      }else {
        return and__3546__auto____9417
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__20(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      return function() {
        var or__3548__auto____9420 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9420)) {
          return or__3548__auto____9420
        }else {
          var or__3548__auto____9422 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9422)) {
            return or__3548__auto____9422
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__21 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____9427 = this$;
      if(cljs.core.truth_(and__3546__auto____9427)) {
        return this$.cljs$core$IFn$_invoke__21
      }else {
        return and__3546__auto____9427
      }
    }())) {
      return this$.cljs$core$IFn$_invoke__21(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      return function() {
        var or__3548__auto____9433 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____9433)) {
          return or__3548__auto____9433
        }else {
          var or__3548__auto____9435 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____9435)) {
            return or__3548__auto____9435
          }else {
            throw cljs.core.missing_protocol("IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
  };
  _invoke = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    switch(arguments.length) {
      case 1:
        return _invoke__1.call(this, this$);
      case 2:
        return _invoke__2.call(this, this$, a);
      case 3:
        return _invoke__3.call(this, this$, a, b);
      case 4:
        return _invoke__4.call(this, this$, a, b, c);
      case 5:
        return _invoke__5.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__6.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__7.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__8.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__9.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__10.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__11.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__12.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__13.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__14.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__15.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__16.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__17.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__18.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__19.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__20.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__21.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _invoke.__1 = _invoke__1;
  _invoke.__2 = _invoke__2;
  _invoke.__3 = _invoke__3;
  _invoke.__4 = _invoke__4;
  _invoke.__5 = _invoke__5;
  _invoke.__6 = _invoke__6;
  _invoke.__7 = _invoke__7;
  _invoke.__8 = _invoke__8;
  _invoke.__9 = _invoke__9;
  _invoke.__10 = _invoke__10;
  _invoke.__11 = _invoke__11;
  _invoke.__12 = _invoke__12;
  _invoke.__13 = _invoke__13;
  _invoke.__14 = _invoke__14;
  _invoke.__15 = _invoke__15;
  _invoke.__16 = _invoke__16;
  _invoke.__17 = _invoke__17;
  _invoke.__18 = _invoke__18;
  _invoke.__19 = _invoke__19;
  _invoke.__20 = _invoke__20;
  _invoke.__21 = _invoke__21;
  return _invoke
}();
void 0;
void 0;
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(function() {
    var and__3546__auto____9975 = coll;
    if(cljs.core.truth_(and__3546__auto____9975)) {
      return coll.cljs$core$ICounted$_count__1
    }else {
      return and__3546__auto____9975
    }
  }()) {
    return coll.cljs$core$ICounted$_count__1(coll)
  }else {
    return function() {
      var or__3548__auto____10012 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10012) {
        return or__3548__auto____10012
      }else {
        var or__3548__auto____10014 = cljs.core._count["_"];
        if(or__3548__auto____10014) {
          return or__3548__auto____10014
        }else {
          throw cljs.core.missing_protocol("ICounted.-count", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function _empty(coll) {
  if(function() {
    var and__3546__auto____10037 = coll;
    if(cljs.core.truth_(and__3546__auto____10037)) {
      return coll.cljs$core$IEmptyableCollection$_empty__1
    }else {
      return and__3546__auto____10037
    }
  }()) {
    return coll.cljs$core$IEmptyableCollection$_empty__1(coll)
  }else {
    return function() {
      var or__3548__auto____10044 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10044) {
        return or__3548__auto____10044
      }else {
        var or__3548__auto____10046 = cljs.core._empty["_"];
        if(or__3548__auto____10046) {
          return or__3548__auto____10046
        }else {
          throw cljs.core.missing_protocol("IEmptyableCollection.-empty", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ICollection = {};
cljs.core._conj = function _conj(coll, o) {
  if(function() {
    var and__3546__auto____10068 = coll;
    if(and__3546__auto____10068) {
      return coll.cljs$core$ICollection$_conj__2
    }else {
      return and__3546__auto____10068
    }
  }()) {
    return coll.cljs$core$ICollection$_conj__2(coll, o)
  }else {
    return function() {
      var or__3548__auto____10075 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10075) {
        return or__3548__auto____10075
      }else {
        var or__3548__auto____10077 = cljs.core._conj["_"];
        if(or__3548__auto____10077) {
          return or__3548__auto____10077
        }else {
          throw cljs.core.missing_protocol("ICollection.-conj", coll);
        }
      }
    }().call(null, coll, o)
  }
};
void 0;
void 0;
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var _nth = null;
  var _nth__2 = function(coll, n) {
    if(function() {
      var and__3546__auto____10103 = coll;
      if(cljs.core.truth_(and__3546__auto____10103)) {
        return coll.cljs$core$IIndexed$_nth__2
      }else {
        return and__3546__auto____10103
      }
    }()) {
      return coll.cljs$core$IIndexed$_nth__2(coll, n)
    }else {
      return function() {
        var or__3548__auto____10110 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(or__3548__auto____10110) {
          return or__3548__auto____10110
        }else {
          var or__3548__auto____10113 = cljs.core._nth["_"];
          if(or__3548__auto____10113) {
            return or__3548__auto____10113
          }else {
            throw cljs.core.missing_protocol("IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__3 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____10118 = coll;
      if(and__3546__auto____10118) {
        return coll.cljs$core$IIndexed$_nth__3
      }else {
        return and__3546__auto____10118
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth__3(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____10122 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____10122)) {
          return or__3548__auto____10122
        }else {
          var or__3548__auto____10124 = cljs.core._nth["_"];
          if(or__3548__auto____10124) {
            return or__3548__auto____10124
          }else {
            throw cljs.core.missing_protocol("IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n, not_found)
    }
  };
  _nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return _nth__2.call(this, coll, n);
      case 3:
        return _nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _nth.__2 = _nth__2;
  _nth.__3 = _nth__3;
  return _nth
}();
void 0;
void 0;
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10154 = coll;
    if(cljs.core.truth_(and__3546__auto____10154)) {
      return coll.cljs$core$ISeq$_first__1
    }else {
      return and__3546__auto____10154
    }
  }())) {
    return coll.cljs$core$ISeq$_first__1(coll)
  }else {
    return function() {
      var or__3548__auto____10161 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____10161)) {
        return or__3548__auto____10161
      }else {
        var or__3548__auto____10164 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____10164)) {
          return or__3548__auto____10164
        }else {
          throw cljs.core.missing_protocol("ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(function() {
    var and__3546__auto____10168 = coll;
    if(and__3546__auto____10168) {
      return coll.cljs$core$ISeq$_rest__1
    }else {
      return and__3546__auto____10168
    }
  }()) {
    return coll.cljs$core$ISeq$_rest__1(coll)
  }else {
    return function() {
      var or__3548__auto____10173 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10173) {
        return or__3548__auto____10173
      }else {
        var or__3548__auto____10176 = cljs.core._rest["_"];
        if(or__3548__auto____10176) {
          return or__3548__auto____10176
        }else {
          throw cljs.core.missing_protocol("ISeq.-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var _lookup = null;
  var _lookup__2 = function(o, k) {
    if(function() {
      var and__3546__auto____10207 = o;
      if(and__3546__auto____10207) {
        return o.cljs$core$ILookup$_lookup__2
      }else {
        return and__3546__auto____10207
      }
    }()) {
      return o.cljs$core$ILookup$_lookup__2(o, k)
    }else {
      return function() {
        var or__3548__auto____10214 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(or__3548__auto____10214) {
          return or__3548__auto____10214
        }else {
          var or__3548__auto____10217 = cljs.core._lookup["_"];
          if(or__3548__auto____10217) {
            return or__3548__auto____10217
          }else {
            throw cljs.core.missing_protocol("ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__3 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____10221 = o;
      if(cljs.core.truth_(and__3546__auto____10221)) {
        return o.cljs$core$ILookup$_lookup__3
      }else {
        return and__3546__auto____10221
      }
    }())) {
      return o.cljs$core$ILookup$_lookup__3(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____10225 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____10225)) {
          return or__3548__auto____10225
        }else {
          var or__3548__auto____10229 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____10229)) {
            return or__3548__auto____10229
          }else {
            throw cljs.core.missing_protocol("ILookup.-lookup", o);
          }
        }
      }().call(null, o, k, not_found)
    }
  };
  _lookup = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return _lookup__2.call(this, o, k);
      case 3:
        return _lookup__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _lookup.__2 = _lookup__2;
  _lookup.__3 = _lookup__3;
  return _lookup
}();
void 0;
void 0;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10259 = coll;
    if(and__3546__auto____10259) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK___2
    }else {
      return and__3546__auto____10259
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK___2(coll, k)
  }else {
    return function() {
      var or__3548__auto____10264 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____10264)) {
        return or__3548__auto____10264
      }else {
        var or__3548__auto____10267 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____10267)) {
          return or__3548__auto____10267
        }else {
          throw cljs.core.missing_protocol("IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(function() {
    var and__3546__auto____10271 = coll;
    if(and__3546__auto____10271) {
      return coll.cljs$core$IAssociative$_assoc__3
    }else {
      return and__3546__auto____10271
    }
  }()) {
    return coll.cljs$core$IAssociative$_assoc__3(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____10273 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10273) {
        return or__3548__auto____10273
      }else {
        var or__3548__auto____10276 = cljs.core._assoc["_"];
        if(or__3548__auto____10276) {
          return or__3548__auto____10276
        }else {
          throw cljs.core.missing_protocol("IAssociative.-assoc", coll);
        }
      }
    }().call(null, coll, k, v)
  }
};
void 0;
void 0;
cljs.core.IMap = {};
cljs.core._dissoc = function _dissoc(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10300 = coll;
    if(and__3546__auto____10300) {
      return coll.cljs$core$IMap$_dissoc__2
    }else {
      return and__3546__auto____10300
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc__2(coll, k)
  }else {
    return function() {
      var or__3548__auto____10302 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10302) {
        return or__3548__auto____10302
      }else {
        var or__3548__auto____10305 = cljs.core._dissoc["_"];
        if(or__3548__auto____10305) {
          return or__3548__auto____10305
        }else {
          throw cljs.core.missing_protocol("IMap.-dissoc", coll);
        }
      }
    }().call(null, coll, k)
  }
};
void 0;
void 0;
cljs.core.IMapEntry = {};
cljs.core._key = function _key(coll) {
  if(function() {
    var and__3546__auto____10323 = coll;
    if(cljs.core.truth_(and__3546__auto____10323)) {
      return coll.cljs$core$IMapEntry$_key__1
    }else {
      return and__3546__auto____10323
    }
  }()) {
    return coll.cljs$core$IMapEntry$_key__1(coll)
  }else {
    return function() {
      var or__3548__auto____10328 = cljs.core._key[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10328) {
        return or__3548__auto____10328
      }else {
        var or__3548__auto____10331 = cljs.core._key["_"];
        if(or__3548__auto____10331) {
          return or__3548__auto____10331
        }else {
          throw cljs.core.missing_protocol("IMapEntry.-key", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._val = function _val(coll) {
  if(function() {
    var and__3546__auto____10338 = coll;
    if(cljs.core.truth_(and__3546__auto____10338)) {
      return coll.cljs$core$IMapEntry$_val__1
    }else {
      return and__3546__auto____10338
    }
  }()) {
    return coll.cljs$core$IMapEntry$_val__1(coll)
  }else {
    return function() {
      var or__3548__auto____10345 = cljs.core._val[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10345) {
        return or__3548__auto____10345
      }else {
        var or__3548__auto____10349 = cljs.core._val["_"];
        if(cljs.core.truth_(or__3548__auto____10349)) {
          return or__3548__auto____10349
        }else {
          throw cljs.core.missing_protocol("IMapEntry.-val", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ISet = {};
cljs.core._disjoin = function _disjoin(coll, v) {
  if(function() {
    var and__3546__auto____10512 = coll;
    if(cljs.core.truth_(and__3546__auto____10512)) {
      return coll.cljs$core$ISet$_disjoin__2
    }else {
      return and__3546__auto____10512
    }
  }()) {
    return coll.cljs$core$ISet$_disjoin__2(coll, v)
  }else {
    return function() {
      var or__3548__auto____10517 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10517) {
        return or__3548__auto____10517
      }else {
        var or__3548__auto____10801 = cljs.core._disjoin["_"];
        if(or__3548__auto____10801) {
          return or__3548__auto____10801
        }else {
          throw cljs.core.missing_protocol("ISet.-disjoin", coll);
        }
      }
    }().call(null, coll, v)
  }
};
void 0;
void 0;
cljs.core.IStack = {};
cljs.core._peek = function _peek(coll) {
  if(function() {
    var and__3546__auto____10816 = coll;
    if(and__3546__auto____10816) {
      return coll.cljs$core$IStack$_peek__1
    }else {
      return and__3546__auto____10816
    }
  }()) {
    return coll.cljs$core$IStack$_peek__1(coll)
  }else {
    return function() {
      var or__3548__auto____10818 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10818) {
        return or__3548__auto____10818
      }else {
        var or__3548__auto____10819 = cljs.core._peek["_"];
        if(or__3548__auto____10819) {
          return or__3548__auto____10819
        }else {
          throw cljs.core.missing_protocol("IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(function() {
    var and__3546__auto____10822 = coll;
    if(and__3546__auto____10822) {
      return coll.cljs$core$IStack$_pop__1
    }else {
      return and__3546__auto____10822
    }
  }()) {
    return coll.cljs$core$IStack$_pop__1(coll)
  }else {
    return function() {
      var or__3548__auto____10823 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(or__3548__auto____10823) {
        return or__3548__auto____10823
      }else {
        var or__3548__auto____10824 = cljs.core._pop["_"];
        if(or__3548__auto____10824) {
          return or__3548__auto____10824
        }else {
          throw cljs.core.missing_protocol("IStack.-pop", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IVector = {};
cljs.core._assoc_n = function _assoc_n(coll, n, val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10837 = coll;
    if(cljs.core.truth_(and__3546__auto____10837)) {
      return coll.cljs$core$IVector$_assoc_n__3
    }else {
      return and__3546__auto____10837
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n__3(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____10863 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____10863)) {
        return or__3548__auto____10863
      }else {
        var or__3548__auto____10865 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____10865)) {
          return or__3548__auto____10865
        }else {
          throw cljs.core.missing_protocol("IVector.-assoc-n", coll);
        }
      }
    }().call(null, coll, n, val)
  }
};
void 0;
void 0;
cljs.core.IDeref = {};
cljs.core._deref = function _deref(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10876 = o;
    if(and__3546__auto____10876) {
      return o.cljs$core$IDeref$_deref__1
    }else {
      return and__3546__auto____10876
    }
  }())) {
    return o.cljs$core$IDeref$_deref__1(o)
  }else {
    return function() {
      var or__3548__auto____10877 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____10877)) {
        return or__3548__auto____10877
      }else {
        var or__3548__auto____10880 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____10880)) {
          return or__3548__auto____10880
        }else {
          throw cljs.core.missing_protocol("IDeref.-deref", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function _deref_with_timeout(o, msec, timeout_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10897 = o;
    if(and__3546__auto____10897) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout__3
    }else {
      return and__3546__auto____10897
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout__3(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____10903 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____10903)) {
        return or__3548__auto____10903
      }else {
        var or__3548__auto____10909 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____10909)) {
          return or__3548__auto____10909
        }else {
          throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout", o);
        }
      }
    }().call(null, o, msec, timeout_val)
  }
};
void 0;
void 0;
cljs.core.IMeta = {};
cljs.core._meta = function _meta(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10921 = o;
    if(and__3546__auto____10921) {
      return o.cljs$core$IMeta$_meta__1
    }else {
      return and__3546__auto____10921
    }
  }())) {
    return o.cljs$core$IMeta$_meta__1(o)
  }else {
    return function() {
      var or__3548__auto____10925 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____10925)) {
        return or__3548__auto____10925
      }else {
        var or__3548__auto____10929 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____10929)) {
          return or__3548__auto____10929
        }else {
          throw cljs.core.missing_protocol("IMeta.-meta", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.IWithMeta = {};
cljs.core._with_meta = function _with_meta(o, meta) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____10944 = o;
    if(cljs.core.truth_(and__3546__auto____10944)) {
      return o.cljs$core$IWithMeta$_with_meta__2
    }else {
      return and__3546__auto____10944
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta__2(o, meta)
  }else {
    return function() {
      var or__3548__auto____10957 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____10957)) {
        return or__3548__auto____10957
      }else {
        var or__3548__auto____10958 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____10958)) {
          return or__3548__auto____10958
        }else {
          throw cljs.core.missing_protocol("IWithMeta.-with-meta", o);
        }
      }
    }().call(null, o, meta)
  }
};
void 0;
void 0;
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var _reduce = null;
  var _reduce__2 = function(coll, f) {
    if(function() {
      var and__3546__auto____10965 = coll;
      if(and__3546__auto____10965) {
        return coll.cljs$core$IReduce$_reduce__2
      }else {
        return and__3546__auto____10965
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce__2(coll, f)
    }else {
      return function() {
        var or__3548__auto____10966 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(or__3548__auto____10966) {
          return or__3548__auto____10966
        }else {
          var or__3548__auto____10968 = cljs.core._reduce["_"];
          if(or__3548__auto____10968) {
            return or__3548__auto____10968
          }else {
            throw cljs.core.missing_protocol("IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__3 = function(coll, f, start) {
    if(function() {
      var and__3546__auto____10969 = coll;
      if(and__3546__auto____10969) {
        return coll.cljs$core$IReduce$_reduce__3
      }else {
        return and__3546__auto____10969
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce__3(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____10970 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(or__3548__auto____10970) {
          return or__3548__auto____10970
        }else {
          var or__3548__auto____10971 = cljs.core._reduce["_"];
          if(or__3548__auto____10971) {
            return or__3548__auto____10971
          }else {
            throw cljs.core.missing_protocol("IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f, start)
    }
  };
  _reduce = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return _reduce__2.call(this, coll, f);
      case 3:
        return _reduce__3.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _reduce.__2 = _reduce__2;
  _reduce.__3 = _reduce__3;
  return _reduce
}();
void 0;
void 0;
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(function() {
    var and__3546__auto____10986 = o;
    if(and__3546__auto____10986) {
      return o.cljs$core$IEquiv$_equiv__2
    }else {
      return and__3546__auto____10986
    }
  }()) {
    return o.cljs$core$IEquiv$_equiv__2(o, other)
  }else {
    return function() {
      var or__3548__auto____10987 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(or__3548__auto____10987) {
        return or__3548__auto____10987
      }else {
        var or__3548__auto____10989 = cljs.core._equiv["_"];
        if(or__3548__auto____10989) {
          return or__3548__auto____10989
        }else {
          throw cljs.core.missing_protocol("IEquiv.-equiv", o);
        }
      }
    }().call(null, o, other)
  }
};
void 0;
void 0;
cljs.core.IHash = {};
cljs.core._hash = function _hash(o) {
  if(function() {
    var and__3546__auto____11004 = o;
    if(and__3546__auto____11004) {
      return o.cljs$core$IHash$_hash__1
    }else {
      return and__3546__auto____11004
    }
  }()) {
    return o.cljs$core$IHash$_hash__1(o)
  }else {
    return function() {
      var or__3548__auto____11010 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(or__3548__auto____11010) {
        return or__3548__auto____11010
      }else {
        var or__3548__auto____11012 = cljs.core._hash["_"];
        if(or__3548__auto____11012) {
          return or__3548__auto____11012
        }else {
          throw cljs.core.missing_protocol("IHash.-hash", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.ISeqable = {};
cljs.core._seq = function _seq(o) {
  if(function() {
    var and__3546__auto____11044 = o;
    if(and__3546__auto____11044) {
      return o.cljs$core$ISeqable$_seq__1
    }else {
      return and__3546__auto____11044
    }
  }()) {
    return o.cljs$core$ISeqable$_seq__1(o)
  }else {
    return function() {
      var or__3548__auto____11045 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(or__3548__auto____11045) {
        return or__3548__auto____11045
      }else {
        var or__3548__auto____11048 = cljs.core._seq["_"];
        if(or__3548__auto____11048) {
          return or__3548__auto____11048
        }else {
          throw cljs.core.missing_protocol("ISeqable.-seq", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.ISequential = {};
void 0;
void 0;
cljs.core.IList = {};
void 0;
void 0;
cljs.core.IRecord = {};
void 0;
void 0;
cljs.core.IReversible = {};
cljs.core._rseq = function _rseq(coll) {
  if(function() {
    var and__3546__auto____11058 = coll;
    if(and__3546__auto____11058) {
      return coll.cljs$core$IReversible$_rseq__1
    }else {
      return and__3546__auto____11058
    }
  }()) {
    return coll.cljs$core$IReversible$_rseq__1(coll)
  }else {
    return function() {
      var or__3548__auto____11060 = cljs.core._rseq[goog.typeOf.call(null, coll)];
      if(or__3548__auto____11060) {
        return or__3548__auto____11060
      }else {
        var or__3548__auto____11062 = cljs.core._rseq["_"];
        if(or__3548__auto____11062) {
          return or__3548__auto____11062
        }else {
          throw cljs.core.missing_protocol("IReversible.-rseq", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IPrintable = {};
cljs.core._pr_seq = function _pr_seq(o, opts) {
  if(function() {
    var and__3546__auto____11073 = o;
    if(and__3546__auto____11073) {
      return o.cljs$core$IPrintable$_pr_seq__2
    }else {
      return and__3546__auto____11073
    }
  }()) {
    return o.cljs$core$IPrintable$_pr_seq__2(o, opts)
  }else {
    return function() {
      var or__3548__auto____11078 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(or__3548__auto____11078) {
        return or__3548__auto____11078
      }else {
        var or__3548__auto____11079 = cljs.core._pr_seq["_"];
        if(or__3548__auto____11079) {
          return or__3548__auto____11079
        }else {
          throw cljs.core.missing_protocol("IPrintable.-pr-seq", o);
        }
      }
    }().call(null, o, opts)
  }
};
void 0;
void 0;
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function _realized_QMARK_(d) {
  if(function() {
    var and__3546__auto____11095 = d;
    if(and__3546__auto____11095) {
      return d.cljs$core$IPending$_realized_QMARK___1
    }else {
      return and__3546__auto____11095
    }
  }()) {
    return d.cljs$core$IPending$_realized_QMARK___1(d)
  }else {
    return function() {
      var or__3548__auto____11098 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(or__3548__auto____11098) {
        return or__3548__auto____11098
      }else {
        var or__3548__auto____11099 = cljs.core._realized_QMARK_["_"];
        if(or__3548__auto____11099) {
          return or__3548__auto____11099
        }else {
          throw cljs.core.missing_protocol("IPending.-realized?", d);
        }
      }
    }().call(null, d)
  }
};
void 0;
void 0;
cljs.core.IWatchable = {};
cljs.core._notify_watches = function _notify_watches(this$, oldval, newval) {
  if(function() {
    var and__3546__auto____11110 = this$;
    if(and__3546__auto____11110) {
      return this$.cljs$core$IWatchable$_notify_watches__3
    }else {
      return and__3546__auto____11110
    }
  }()) {
    return this$.cljs$core$IWatchable$_notify_watches__3(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____11112 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(or__3548__auto____11112) {
        return or__3548__auto____11112
      }else {
        var or__3548__auto____11114 = cljs.core._notify_watches["_"];
        if(or__3548__auto____11114) {
          return or__3548__auto____11114
        }else {
          throw cljs.core.missing_protocol("IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(function() {
    var and__3546__auto____11115 = this$;
    if(and__3546__auto____11115) {
      return this$.cljs$core$IWatchable$_add_watch__3
    }else {
      return and__3546__auto____11115
    }
  }()) {
    return this$.cljs$core$IWatchable$_add_watch__3(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____11117 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(or__3548__auto____11117) {
        return or__3548__auto____11117
      }else {
        var or__3548__auto____11119 = cljs.core._add_watch["_"];
        if(or__3548__auto____11119) {
          return or__3548__auto____11119
        }else {
          throw cljs.core.missing_protocol("IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(function() {
    var and__3546__auto____11129 = this$;
    if(and__3546__auto____11129) {
      return this$.cljs$core$IWatchable$_remove_watch__2
    }else {
      return and__3546__auto____11129
    }
  }()) {
    return this$.cljs$core$IWatchable$_remove_watch__2(this$, key)
  }else {
    return function() {
      var or__3548__auto____11130 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(or__3548__auto____11130) {
        return or__3548__auto____11130
      }else {
        var or__3548__auto____11133 = cljs.core._remove_watch["_"];
        if(or__3548__auto____11133) {
          return or__3548__auto____11133
        }else {
          throw cljs.core.missing_protocol("IWatchable.-remove-watch", this$);
        }
      }
    }().call(null, this$, key)
  }
};
void 0;
cljs.core.identical_QMARK_ = function identical_QMARK_(x, y) {
  return x === y
};
void 0;
void 0;
cljs.core._EQ_ = function() {
  var _EQ_ = null;
  var _EQ___1 = function(x) {
    return true
  };
  var _EQ___2 = function(x, y) {
    return cljs.core._equiv(x, y)
  };
  var _EQ___3 = function() {
    var G__11173__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(cljs.core._equiv(x, y))) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__11176 = y;
            var G__11177 = cljs.core.first(more);
            var G__11178 = cljs.core.next(more);
            x = G__11176;
            y = G__11177;
            more = G__11178;
            continue
          }else {
            return cljs.core._equiv(y, cljs.core.first(more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__11173 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__11173__delegate.call(this, x, y, more)
    };
    G__11173.cljs$lang$maxFixedArity = 2;
    G__11173.cljs$lang$applyTo = function(arglist__11181) {
      var x = cljs.core.first(arglist__11181);
      var y = cljs.core.first(cljs.core.next(arglist__11181));
      var more = cljs.core.rest(cljs.core.next(arglist__11181));
      return G__11173__delegate.call(this, x, y, more)
    };
    return G__11173
  }();
  _EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ___1.call(this, x);
      case 2:
        return _EQ___2.call(this, x, y);
      default:
        return _EQ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ_.cljs$lang$maxFixedArity = 2;
  _EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
  _EQ_.__1 = _EQ___1;
  _EQ_.__2 = _EQ___2;
  _EQ_.__3 = _EQ___3;
  return _EQ_
}();
cljs.core.nil_QMARK_ = function nil_QMARK_(x) {
  return x === null
};
cljs.core.type = function type(x) {
  if(function() {
    var or__3548__auto____11183 = x === null;
    if(or__3548__auto____11183) {
      return or__3548__auto____11183
    }else {
      return void 0 === x
    }
  }()) {
    return null
  }else {
    return x.constructor
  }
};
void 0;
void 0;
void 0;
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__11196 = null;
  var G__11196__2 = function(o, k) {
    return null
  };
  var G__11196__3 = function(o, k, not_found) {
    return not_found
  };
  G__11196 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11196__2.call(this, o, k);
      case 3:
        return G__11196__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11196
}();
cljs.core.IAssociative["null"] = true;
cljs.core._assoc["null"] = function(_, k, v) {
  return cljs.core.hash_map(k, v)
};
cljs.core.ICollection["null"] = true;
cljs.core._conj["null"] = function(_, o) {
  return cljs.core.list(o)
};
cljs.core.IReduce["null"] = true;
cljs.core._reduce["null"] = function() {
  var G__11203 = null;
  var G__11203__2 = function(_, f) {
    return f.call(null)
  };
  var G__11203__3 = function(_, f, start) {
    return start
  };
  G__11203 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__11203__2.call(this, _, f);
      case 3:
        return G__11203__3.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11203
}();
cljs.core.IPrintable["null"] = true;
cljs.core._pr_seq["null"] = function(o) {
  return cljs.core.list("nil")
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
  return cljs.core.list()
};
cljs.core.IEquiv["null"] = true;
cljs.core._equiv["null"] = function(_, o) {
  return o === null
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
  var G__11208 = null;
  var G__11208__2 = function(_, n) {
    return null
  };
  var G__11208__3 = function(_, n, not_found) {
    return not_found
  };
  G__11208 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11208__2.call(this, _, n);
      case 3:
        return G__11208__3.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11208
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
Date.prototype.cljs$core$IEquiv$_equiv__2 = function(o, other) {
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
  var ci_reduce__2 = function(cicoll, f) {
    if(cljs.core._EQ_.__2(0, cljs.core._count(cicoll))) {
      return f.call(null)
    }else {
      var val__11220 = cljs.core._nth.__2(cicoll, 0);
      var n__11221 = 1;
      while(true) {
        if(n__11221 < cljs.core._count(cicoll)) {
          var G__11235 = f.call(null, val__11220, cljs.core._nth.__2(cicoll, n__11221));
          var G__11236 = n__11221 + 1;
          val__11220 = G__11235;
          n__11221 = G__11236;
          continue
        }else {
          return val__11220
        }
        break
      }
    }
  };
  var ci_reduce__3 = function(cicoll, f, val) {
    var val__11223 = val;
    var n__11224 = 0;
    while(true) {
      if(n__11224 < cljs.core._count(cicoll)) {
        var G__11238 = f.call(null, val__11223, cljs.core._nth.__2(cicoll, n__11224));
        var G__11239 = n__11224 + 1;
        val__11223 = G__11238;
        n__11224 = G__11239;
        continue
      }else {
        return val__11223
      }
      break
    }
  };
  var ci_reduce__4 = function(cicoll, f, val, idx) {
    var val__11225 = val;
    var n__11226 = idx;
    while(true) {
      if(n__11226 < cljs.core._count(cicoll)) {
        var G__11241 = f.call(null, val__11225, cljs.core._nth.__2(cicoll, n__11226));
        var G__11242 = n__11226 + 1;
        val__11225 = G__11241;
        n__11226 = G__11242;
        continue
      }else {
        return val__11225
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__2.call(this, cicoll, f);
      case 3:
        return ci_reduce__3.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__4.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ci_reduce.__2 = ci_reduce__2;
  ci_reduce.__3 = ci_reduce__3;
  ci_reduce.__4 = ci_reduce__4;
  return ci_reduce
}();
void 0;
void 0;
void 0;
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i
};
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__11243 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__11244 = this;
  return cljs.core.cons(o, coll)
};
cljs.core.IndexedSeq.prototype.toString = function() {
  var this__11245 = this;
  var this$__11247 = this;
  return cljs.core.pr_str(this$__11247)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__2 = function(_, f) {
  var this__11268 = this;
  return cljs.core.ci_reduce.__4(this__11268.a, f, this__11268.a[this__11268.i], this__11268.i + 1)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__3 = function(_, f, start) {
  var this__11272 = this;
  return cljs.core.ci_reduce.__4(this__11272.a, f, start, this__11272.i)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq__1 = function(this$) {
  var this__11275 = this;
  return this$
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count__1 = function(_) {
  var this__11277 = this;
  return this__11277.a.length - this__11277.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first__1 = function(_) {
  var this__11278 = this;
  return this__11278.a[this__11278.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest__1 = function(_) {
  var this__11279 = this;
  if(this__11279.i + 1 < this__11279.a.length) {
    return new cljs.core.IndexedSeq(this__11279.a, this__11279.i + 1)
  }else {
    return cljs.core.list()
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__11280 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__2 = function(coll, n) {
  var this__11281 = this;
  var i__11282 = n + this__11281.i;
  if(i__11282 < this__11281.a.length) {
    return this__11281.a[i__11282]
  }else {
    return null
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__3 = function(coll, n, not_found) {
  var this__11284 = this;
  var i__11286 = n + this__11284.i;
  if(i__11286 < this__11284.a.length) {
    return this__11284.a[i__11286]
  }else {
    return not_found
  }
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function prim_seq(prim, i) {
  if(cljs.core._EQ_.__2(0, prim.length)) {
    return null
  }else {
    return new cljs.core.IndexedSeq(prim, i)
  }
};
cljs.core.array_seq = function array_seq(array, i) {
  return cljs.core.prim_seq(array, i)
};
cljs.core.IReduce["array"] = true;
cljs.core._reduce["array"] = function() {
  var G__11333 = null;
  var G__11333__2 = function(array, f) {
    return cljs.core.ci_reduce.__2(array, f)
  };
  var G__11333__3 = function(array, f, start) {
    return cljs.core.ci_reduce.__3(array, f, start)
  };
  G__11333 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__11333__2.call(this, array, f);
      case 3:
        return G__11333__3.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11333
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__11336 = null;
  var G__11336__2 = function(array, k) {
    return array[k]
  };
  var G__11336__3 = function(array, k, not_found) {
    return cljs.core._nth.__3(array, k, not_found)
  };
  G__11336 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11336__2.call(this, array, k);
      case 3:
        return G__11336__3.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11336
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__11338 = null;
  var G__11338__2 = function(array, n) {
    if(n < array.length) {
      return array[n]
    }else {
      return null
    }
  };
  var G__11338__3 = function(array, n, not_found) {
    if(n < array.length) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__11338 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__11338__2.call(this, array, n);
      case 3:
        return G__11338__3.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__11338
}();
cljs.core.ICounted["array"] = true;
cljs.core._count["array"] = function(a) {
  return a.length
};
cljs.core.ISeqable["array"] = true;
cljs.core._seq["array"] = function(array) {
  return cljs.core.array_seq(array, 0)
};
cljs.core.seq = function seq(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core._seq(coll)
  }else {
    return null
  }
};
cljs.core.first = function first(coll) {
  var temp__3698__auto____11352 = cljs.core.seq(coll);
  if(cljs.core.truth_(temp__3698__auto____11352)) {
    var s__11354 = temp__3698__auto____11352;
    return cljs.core._first(s__11354)
  }else {
    return null
  }
};
cljs.core.rest = function rest(coll) {
  return cljs.core._rest(cljs.core.seq(coll))
};
cljs.core.next = function next(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core.seq(cljs.core.rest(coll))
  }else {
    return null
  }
};
cljs.core.second = function second(coll) {
  return cljs.core.first(cljs.core.next(coll))
};
cljs.core.ffirst = function ffirst(coll) {
  return cljs.core.first(cljs.core.first(coll))
};
cljs.core.nfirst = function nfirst(coll) {
  return cljs.core.next(cljs.core.first(coll))
};
cljs.core.fnext = function fnext(coll) {
  return cljs.core.first(cljs.core.next(coll))
};
cljs.core.nnext = function nnext(coll) {
  return cljs.core.next(cljs.core.next(coll))
};
cljs.core.last = function last(s) {
  while(true) {
    if(cljs.core.truth_(cljs.core.next(s))) {
      var G__11489 = cljs.core.next(s);
      s = G__11489;
      continue
    }else {
      return cljs.core.first(s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__11493 = cljs.core.seq(x);
  var n__11494 = 0;
  while(true) {
    if(cljs.core.truth_(s__11493)) {
      var G__11500 = cljs.core.next(s__11493);
      var G__11501 = n__11494 + 1;
      s__11493 = G__11500;
      n__11494 = G__11501;
      continue
    }else {
      return n__11494
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
  var conj__2 = function(coll, x) {
    return cljs.core._conj(coll, x)
  };
  var conj__3 = function() {
    var G__11516__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__11518 = conj.call(null, coll, x);
          var G__11519 = cljs.core.first(xs);
          var G__11520 = cljs.core.next(xs);
          coll = G__11518;
          x = G__11519;
          xs = G__11520;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__11516 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__11516__delegate.call(this, coll, x, xs)
    };
    G__11516.cljs$lang$maxFixedArity = 2;
    G__11516.cljs$lang$applyTo = function(arglist__11522) {
      var coll = cljs.core.first(arglist__11522);
      var x = cljs.core.first(cljs.core.next(arglist__11522));
      var xs = cljs.core.rest(cljs.core.next(arglist__11522));
      return G__11516__delegate.call(this, coll, x, xs)
    };
    return G__11516
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__2.call(this, coll, x);
      default:
        return conj__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
  conj.__2 = conj__2;
  conj.__3 = conj__3;
  return conj
}();
cljs.core.empty = function empty(coll) {
  return cljs.core._empty(coll)
};
cljs.core.count = function count(coll) {
  return cljs.core._count(coll)
};
cljs.core.nth = function() {
  var nth = null;
  var nth__2 = function(coll, n) {
    return cljs.core._nth.__2(coll, Math.floor(n))
  };
  var nth__3 = function(coll, n, not_found) {
    return cljs.core._nth.__3(coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__2.call(this, coll, n);
      case 3:
        return nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  nth.__2 = nth__2;
  nth.__3 = nth__3;
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__2 = function(o, k) {
    return cljs.core._lookup.__2(o, k)
  };
  var get__3 = function(o, k, not_found) {
    return cljs.core._lookup.__3(o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__2.call(this, o, k);
      case 3:
        return get__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get.__2 = get__2;
  get.__3 = get__3;
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__3 = function(coll, k, v) {
    return cljs.core._assoc(coll, k, v)
  };
  var assoc__4 = function() {
    var G__11561__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__11550 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__11563 = ret__11550;
          var G__11564 = cljs.core.first(kvs);
          var G__11565 = cljs.core.second(kvs);
          var G__11566 = cljs.core.nnext(kvs);
          coll = G__11563;
          k = G__11564;
          v = G__11565;
          kvs = G__11566;
          continue
        }else {
          return ret__11550
        }
        break
      }
    };
    var G__11561 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__11561__delegate.call(this, coll, k, v, kvs)
    };
    G__11561.cljs$lang$maxFixedArity = 3;
    G__11561.cljs$lang$applyTo = function(arglist__11569) {
      var coll = cljs.core.first(arglist__11569);
      var k = cljs.core.first(cljs.core.next(arglist__11569));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11569)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11569)));
      return G__11561__delegate.call(this, coll, k, v, kvs)
    };
    return G__11561
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__3.call(this, coll, k, v);
      default:
        return assoc__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
  assoc.__3 = assoc__3;
  assoc.__4 = assoc__4;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__1 = function(coll) {
    return coll
  };
  var dissoc__2 = function(coll, k) {
    return cljs.core._dissoc(coll, k)
  };
  var dissoc__3 = function() {
    var G__11595__delegate = function(coll, k, ks) {
      while(true) {
        var ret__11588 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__11598 = ret__11588;
          var G__11599 = cljs.core.first(ks);
          var G__11600 = cljs.core.next(ks);
          coll = G__11598;
          k = G__11599;
          ks = G__11600;
          continue
        }else {
          return ret__11588
        }
        break
      }
    };
    var G__11595 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__11595__delegate.call(this, coll, k, ks)
    };
    G__11595.cljs$lang$maxFixedArity = 2;
    G__11595.cljs$lang$applyTo = function(arglist__11601) {
      var coll = cljs.core.first(arglist__11601);
      var k = cljs.core.first(cljs.core.next(arglist__11601));
      var ks = cljs.core.rest(cljs.core.next(arglist__11601));
      return G__11595__delegate.call(this, coll, k, ks)
    };
    return G__11595
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__1.call(this, coll);
      case 2:
        return dissoc__2.call(this, coll, k);
      default:
        return dissoc__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
  dissoc.__1 = dissoc__1;
  dissoc.__2 = dissoc__2;
  dissoc.__3 = dissoc__3;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta(o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__462__auto____11613 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11615 = x__462__auto____11613;
      if(cljs.core.truth_(and__3546__auto____11615)) {
        var and__3546__auto____11616 = x__462__auto____11613.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____11616)) {
          return cljs.core.not(x__462__auto____11613.hasOwnProperty("cljs$core$IMeta$"))
        }else {
          return and__3546__auto____11616
        }
      }else {
        return and__3546__auto____11615
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.IMeta, x__462__auto____11613)
    }
  }())) {
    return cljs.core._meta(o)
  }else {
    return null
  }
};
cljs.core.peek = function peek(coll) {
  return cljs.core._peek(coll)
};
cljs.core.pop = function pop(coll) {
  return cljs.core._pop(coll)
};
cljs.core.disj = function() {
  var disj = null;
  var disj__1 = function(coll) {
    return coll
  };
  var disj__2 = function(coll, k) {
    return cljs.core._disjoin(coll, k)
  };
  var disj__3 = function() {
    var G__11645__delegate = function(coll, k, ks) {
      while(true) {
        var ret__11638 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__11652 = ret__11638;
          var G__11653 = cljs.core.first(ks);
          var G__11654 = cljs.core.next(ks);
          coll = G__11652;
          k = G__11653;
          ks = G__11654;
          continue
        }else {
          return ret__11638
        }
        break
      }
    };
    var G__11645 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__11645__delegate.call(this, coll, k, ks)
    };
    G__11645.cljs$lang$maxFixedArity = 2;
    G__11645.cljs$lang$applyTo = function(arglist__11660) {
      var coll = cljs.core.first(arglist__11660);
      var k = cljs.core.first(cljs.core.next(arglist__11660));
      var ks = cljs.core.rest(cljs.core.next(arglist__11660));
      return G__11645__delegate.call(this, coll, k, ks)
    };
    return G__11645
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__1.call(this, coll);
      case 2:
        return disj__2.call(this, coll, k);
      default:
        return disj__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
  disj.__1 = disj__1;
  disj.__2 = disj__2;
  disj.__3 = disj__3;
  return disj
}();
cljs.core.hash = function hash(o) {
  return cljs.core._hash(o)
};
cljs.core.empty_QMARK_ = function empty_QMARK_(coll) {
  return cljs.core.not(cljs.core.seq(coll))
};
cljs.core.coll_QMARK_ = function coll_QMARK_(x) {
  if(x === null) {
    return false
  }else {
    var x__462__auto____11676 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11677 = x__462__auto____11676;
      if(cljs.core.truth_(and__3546__auto____11677)) {
        var and__3546__auto____11678 = x__462__auto____11676.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____11678)) {
          return cljs.core.not(x__462__auto____11676.hasOwnProperty("cljs$core$ICollection$"))
        }else {
          return and__3546__auto____11678
        }
      }else {
        return and__3546__auto____11677
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.ICollection, x__462__auto____11676)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(x === null) {
    return false
  }else {
    var x__462__auto____11689 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11735 = x__462__auto____11689;
      if(cljs.core.truth_(and__3546__auto____11735)) {
        var and__3546__auto____11737 = x__462__auto____11689.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____11737)) {
          return cljs.core.not(x__462__auto____11689.hasOwnProperty("cljs$core$ISet$"))
        }else {
          return and__3546__auto____11737
        }
      }else {
        return and__3546__auto____11735
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.ISet, x__462__auto____11689)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__462__auto____11752 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____11753 = x__462__auto____11752;
    if(cljs.core.truth_(and__3546__auto____11753)) {
      var and__3546__auto____11754 = x__462__auto____11752.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____11754)) {
        return cljs.core.not(x__462__auto____11752.hasOwnProperty("cljs$core$IAssociative$"))
      }else {
        return and__3546__auto____11754
      }
    }else {
      return and__3546__auto____11753
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.IAssociative, x__462__auto____11752)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__462__auto____11766 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____11768 = x__462__auto____11766;
    if(cljs.core.truth_(and__3546__auto____11768)) {
      var and__3546__auto____11769 = x__462__auto____11766.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____11769)) {
        return cljs.core.not(x__462__auto____11766.hasOwnProperty("cljs$core$ISequential$"))
      }else {
        return and__3546__auto____11769
      }
    }else {
      return and__3546__auto____11768
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.ISequential, x__462__auto____11766)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__462__auto____11784 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____11786 = x__462__auto____11784;
    if(cljs.core.truth_(and__3546__auto____11786)) {
      var and__3546__auto____11787 = x__462__auto____11784.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____11787)) {
        return cljs.core.not(x__462__auto____11784.hasOwnProperty("cljs$core$ICounted$"))
      }else {
        return and__3546__auto____11787
      }
    }else {
      return and__3546__auto____11786
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.ICounted, x__462__auto____11784)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(x === null) {
    return false
  }else {
    var x__462__auto____11795 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11797 = x__462__auto____11795;
      if(cljs.core.truth_(and__3546__auto____11797)) {
        var and__3546__auto____11800 = x__462__auto____11795.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____11800)) {
          return cljs.core.not(x__462__auto____11795.hasOwnProperty("cljs$core$IMap$"))
        }else {
          return and__3546__auto____11800
        }
      }else {
        return and__3546__auto____11797
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.IMap, x__462__auto____11795)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__462__auto____11816 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____11817 = x__462__auto____11816;
    if(cljs.core.truth_(and__3546__auto____11817)) {
      var and__3546__auto____11818 = x__462__auto____11816.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____11818)) {
        return cljs.core.not(x__462__auto____11816.hasOwnProperty("cljs$core$IVector$"))
      }else {
        return and__3546__auto____11818
      }
    }else {
      return and__3546__auto____11817
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.IVector, x__462__auto____11816)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__11890 = [];
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__11890.push(key)
  });
  return keys__11890
};
cljs.core.js_delete = function js_delete(obj, key) {
  return delete obj[key]
};
cljs.core.lookup_sentinel = cljs.core.js_obj();
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
  if(s === null) {
    return false
  }else {
    var x__462__auto____11903 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11904 = x__462__auto____11903;
      if(cljs.core.truth_(and__3546__auto____11904)) {
        var and__3546__auto____11905 = x__462__auto____11903.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____11905)) {
          return cljs.core.not(x__462__auto____11903.hasOwnProperty("cljs$core$ISeq$"))
        }else {
          return and__3546__auto____11905
        }
      }else {
        return and__3546__auto____11904
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.ISeq, x__462__auto____11903)
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
  var and__3546__auto____11922 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____11922)) {
    return cljs.core.not(function() {
      var or__3548__auto____11925 = cljs.core._EQ_.__2(x.charAt(0), "\ufdd0");
      if(or__3548__auto____11925) {
        return or__3548__auto____11925
      }else {
        return cljs.core._EQ_.__2(x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____11922
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____11938 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____11938)) {
    return cljs.core._EQ_.__2(x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____11938
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____11943 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____11943)) {
    return cljs.core._EQ_.__2(x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____11943
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.ifn_QMARK_ = function ifn_QMARK_(f) {
  var or__3548__auto____11956 = cljs.core.fn_QMARK_(f);
  if(or__3548__auto____11956) {
    return or__3548__auto____11956
  }else {
    var x__462__auto____11959 = f;
    if(cljs.core.truth_(function() {
      var and__3546__auto____11960 = x__462__auto____11959;
      if(cljs.core.truth_(and__3546__auto____11960)) {
        var and__3546__auto____11962 = x__462__auto____11959.cljs$core$IFn$;
        if(cljs.core.truth_(and__3546__auto____11962)) {
          return cljs.core.not(x__462__auto____11959.hasOwnProperty("cljs$core$IFn$"))
        }else {
          return and__3546__auto____11962
        }
      }else {
        return and__3546__auto____11960
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_(cljs.core.IFn, x__462__auto____11959)
    }
  }
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____12017 = cljs.core.number_QMARK_(n);
  if(and__3546__auto____12017) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____12017
  }
};
cljs.core.contains_QMARK_ = function contains_QMARK_(coll, v) {
  if(cljs.core._lookup.__3(coll, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
    return false
  }else {
    return true
  }
};
cljs.core.find = function find(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____12064 = coll;
    if(cljs.core.truth_(and__3546__auto____12064)) {
      var and__3546__auto____12068 = cljs.core.associative_QMARK_(coll);
      if(and__3546__auto____12068) {
        return cljs.core.contains_QMARK_(coll, k)
      }else {
        return and__3546__auto____12068
      }
    }else {
      return and__3546__auto____12064
    }
  }())) {
    return cljs.core.PersistentVector.fromArray([k, cljs.core._lookup.__2(coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___1 = function(x) {
    return true
  };
  var distinct_QMARK___2 = function(x, y) {
    return cljs.core.not(cljs.core._EQ_.__2(x, y))
  };
  var distinct_QMARK___3 = function() {
    var G__12084__delegate = function(x, y, more) {
      if(cljs.core.not(cljs.core._EQ_.__2(x, y))) {
        var s__12073 = cljs.core.set([y, x]);
        var xs__12075 = more;
        while(true) {
          var x__12076 = cljs.core.first(xs__12075);
          var etc__12077 = cljs.core.next(xs__12075);
          if(cljs.core.truth_(xs__12075)) {
            if(cljs.core.contains_QMARK_(s__12073, x__12076)) {
              return false
            }else {
              var G__12089 = cljs.core.conj.__2(s__12073, x__12076);
              var G__12090 = etc__12077;
              s__12073 = G__12089;
              xs__12075 = G__12090;
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
    var G__12084 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12084__delegate.call(this, x, y, more)
    };
    G__12084.cljs$lang$maxFixedArity = 2;
    G__12084.cljs$lang$applyTo = function(arglist__12091) {
      var x = cljs.core.first(arglist__12091);
      var y = cljs.core.first(cljs.core.next(arglist__12091));
      var more = cljs.core.rest(cljs.core.next(arglist__12091));
      return G__12084__delegate.call(this, x, y, more)
    };
    return G__12084
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___1.call(this, x);
      case 2:
        return distinct_QMARK___2.call(this, x, y);
      default:
        return distinct_QMARK___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
  distinct_QMARK_.__1 = distinct_QMARK___1;
  distinct_QMARK_.__2 = distinct_QMARK___2;
  distinct_QMARK_.__3 = distinct_QMARK___3;
  return distinct_QMARK_
}();
cljs.core.compare = function compare(x, y) {
  return goog.array.defaultCompare.call(null, x, y)
};
cljs.core.fn__GT_comparator = function fn__GT_comparator(f) {
  if(cljs.core._EQ_.__2(f, cljs.core.compare)) {
    return cljs.core.compare
  }else {
    return function(x, y) {
      var r__12098 = f.call(null, x, y);
      if(cljs.core.number_QMARK_(r__12098)) {
        return r__12098
      }else {
        if(cljs.core.truth_(r__12098)) {
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
void 0;
cljs.core.sort = function() {
  var sort = null;
  var sort__1 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__2 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq(coll))) {
      var a__12111 = cljs.core.to_array(coll);
      goog.array.stableSort.call(null, a__12111, cljs.core.fn__GT_comparator(comp));
      return cljs.core.seq(a__12111)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__1.call(this, comp);
      case 2:
        return sort__2.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort.__1 = sort__1;
  sort.__2 = sort__2;
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__2 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__3 = function(keyfn, comp, coll) {
    return cljs.core.sort.__2(function(x, y) {
      return cljs.core.fn__GT_comparator(comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__2.call(this, keyfn, comp);
      case 3:
        return sort_by__3.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort_by.__2 = sort_by__2;
  sort_by.__3 = sort_by__3;
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__2 = function(f, coll) {
    return cljs.core._reduce.__2(coll, f)
  };
  var reduce__3 = function(f, val, coll) {
    return cljs.core._reduce.__3(coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__2.call(this, f, val);
      case 3:
        return reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reduce.__2 = reduce__2;
  reduce.__3 = reduce__3;
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__2 = function(f, coll) {
    var temp__3695__auto____12224 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3695__auto____12224)) {
      var s__12233 = temp__3695__auto____12224;
      return cljs.core.reduce.__3(f, cljs.core.first(s__12233), cljs.core.next(s__12233))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__3 = function(f, val, coll) {
    var val__12235 = val;
    var coll__12237 = cljs.core.seq(coll);
    while(true) {
      if(cljs.core.truth_(coll__12237)) {
        var G__12284 = f.call(null, val__12235, cljs.core.first(coll__12237));
        var G__12285 = cljs.core.next(coll__12237);
        val__12235 = G__12284;
        coll__12237 = G__12285;
        continue
      }else {
        return val__12235
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__2.call(this, f, val);
      case 3:
        return seq_reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  seq_reduce.__2 = seq_reduce__2;
  seq_reduce.__3 = seq_reduce__3;
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__12291 = null;
  var G__12291__2 = function(coll, f) {
    return cljs.core.seq_reduce.__2(f, coll)
  };
  var G__12291__3 = function(coll, f, start) {
    return cljs.core.seq_reduce.__3(f, start, coll)
  };
  G__12291 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__12291__2.call(this, coll, f);
      case 3:
        return G__12291__3.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12291
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___0 = function() {
    return 0
  };
  var _PLUS___1 = function(x) {
    return x
  };
  var _PLUS___2 = function(x, y) {
    return x + y
  };
  var _PLUS___3 = function() {
    var G__12310__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(_PLUS_, x + y, more)
    };
    var G__12310 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12310__delegate.call(this, x, y, more)
    };
    G__12310.cljs$lang$maxFixedArity = 2;
    G__12310.cljs$lang$applyTo = function(arglist__12330) {
      var x = cljs.core.first(arglist__12330);
      var y = cljs.core.first(cljs.core.next(arglist__12330));
      var more = cljs.core.rest(cljs.core.next(arglist__12330));
      return G__12310__delegate.call(this, x, y, more)
    };
    return G__12310
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___0.call(this);
      case 1:
        return _PLUS___1.call(this, x);
      case 2:
        return _PLUS___2.call(this, x, y);
      default:
        return _PLUS___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
  _PLUS_.__0 = _PLUS___0;
  _PLUS_.__1 = _PLUS___1;
  _PLUS_.__2 = _PLUS___2;
  _PLUS_.__3 = _PLUS___3;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___1 = function(x) {
    return-x
  };
  var ___2 = function(x, y) {
    return x - y
  };
  var ___3 = function() {
    var G__12331__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(_, x - y, more)
    };
    var G__12331 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12331__delegate.call(this, x, y, more)
    };
    G__12331.cljs$lang$maxFixedArity = 2;
    G__12331.cljs$lang$applyTo = function(arglist__12332) {
      var x = cljs.core.first(arglist__12332);
      var y = cljs.core.first(cljs.core.next(arglist__12332));
      var more = cljs.core.rest(cljs.core.next(arglist__12332));
      return G__12331__delegate.call(this, x, y, more)
    };
    return G__12331
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___1.call(this, x);
      case 2:
        return ___2.call(this, x, y);
      default:
        return ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
  _.__1 = ___1;
  _.__2 = ___2;
  _.__3 = ___3;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___0 = function() {
    return 1
  };
  var _STAR___1 = function(x) {
    return x
  };
  var _STAR___2 = function(x, y) {
    return x * y
  };
  var _STAR___3 = function() {
    var G__12333__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(_STAR_, x * y, more)
    };
    var G__12333 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12333__delegate.call(this, x, y, more)
    };
    G__12333.cljs$lang$maxFixedArity = 2;
    G__12333.cljs$lang$applyTo = function(arglist__12334) {
      var x = cljs.core.first(arglist__12334);
      var y = cljs.core.first(cljs.core.next(arglist__12334));
      var more = cljs.core.rest(cljs.core.next(arglist__12334));
      return G__12333__delegate.call(this, x, y, more)
    };
    return G__12333
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___0.call(this);
      case 1:
        return _STAR___1.call(this, x);
      case 2:
        return _STAR___2.call(this, x, y);
      default:
        return _STAR___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
  _STAR_.__0 = _STAR___0;
  _STAR_.__1 = _STAR___1;
  _STAR_.__2 = _STAR___2;
  _STAR_.__3 = _STAR___3;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___1 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___2 = function(x, y) {
    return x / y
  };
  var _SLASH___3 = function() {
    var G__12335__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(_SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__12335 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12335__delegate.call(this, x, y, more)
    };
    G__12335.cljs$lang$maxFixedArity = 2;
    G__12335.cljs$lang$applyTo = function(arglist__12336) {
      var x = cljs.core.first(arglist__12336);
      var y = cljs.core.first(cljs.core.next(arglist__12336));
      var more = cljs.core.rest(cljs.core.next(arglist__12336));
      return G__12335__delegate.call(this, x, y, more)
    };
    return G__12335
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___1.call(this, x);
      case 2:
        return _SLASH___2.call(this, x, y);
      default:
        return _SLASH___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
  _SLASH_.__1 = _SLASH___1;
  _SLASH_.__2 = _SLASH___2;
  _SLASH_.__3 = _SLASH___3;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___1 = function(x) {
    return true
  };
  var _LT___2 = function(x, y) {
    return x < y
  };
  var _LT___3 = function() {
    var G__12337__delegate = function(x, y, more) {
      while(true) {
        if(x < y) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__12340 = y;
            var G__12341 = cljs.core.first(more);
            var G__12342 = cljs.core.next(more);
            x = G__12340;
            y = G__12341;
            more = G__12342;
            continue
          }else {
            return y < cljs.core.first(more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__12337 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12337__delegate.call(this, x, y, more)
    };
    G__12337.cljs$lang$maxFixedArity = 2;
    G__12337.cljs$lang$applyTo = function(arglist__12343) {
      var x = cljs.core.first(arglist__12343);
      var y = cljs.core.first(cljs.core.next(arglist__12343));
      var more = cljs.core.rest(cljs.core.next(arglist__12343));
      return G__12337__delegate.call(this, x, y, more)
    };
    return G__12337
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___1.call(this, x);
      case 2:
        return _LT___2.call(this, x, y);
      default:
        return _LT___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
  _LT_.__1 = _LT___1;
  _LT_.__2 = _LT___2;
  _LT_.__3 = _LT___3;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___1 = function(x) {
    return true
  };
  var _LT__EQ___2 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___3 = function() {
    var G__12346__delegate = function(x, y, more) {
      while(true) {
        if(x <= y) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__12349 = y;
            var G__12350 = cljs.core.first(more);
            var G__12351 = cljs.core.next(more);
            x = G__12349;
            y = G__12350;
            more = G__12351;
            continue
          }else {
            return y <= cljs.core.first(more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__12346 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12346__delegate.call(this, x, y, more)
    };
    G__12346.cljs$lang$maxFixedArity = 2;
    G__12346.cljs$lang$applyTo = function(arglist__12353) {
      var x = cljs.core.first(arglist__12353);
      var y = cljs.core.first(cljs.core.next(arglist__12353));
      var more = cljs.core.rest(cljs.core.next(arglist__12353));
      return G__12346__delegate.call(this, x, y, more)
    };
    return G__12346
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___1.call(this, x);
      case 2:
        return _LT__EQ___2.call(this, x, y);
      default:
        return _LT__EQ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
  _LT__EQ_.__1 = _LT__EQ___1;
  _LT__EQ_.__2 = _LT__EQ___2;
  _LT__EQ_.__3 = _LT__EQ___3;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___1 = function(x) {
    return true
  };
  var _GT___2 = function(x, y) {
    return x > y
  };
  var _GT___3 = function() {
    var G__12394__delegate = function(x, y, more) {
      while(true) {
        if(x > y) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__12397 = y;
            var G__12398 = cljs.core.first(more);
            var G__12399 = cljs.core.next(more);
            x = G__12397;
            y = G__12398;
            more = G__12399;
            continue
          }else {
            return y > cljs.core.first(more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__12394 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12394__delegate.call(this, x, y, more)
    };
    G__12394.cljs$lang$maxFixedArity = 2;
    G__12394.cljs$lang$applyTo = function(arglist__12400) {
      var x = cljs.core.first(arglist__12400);
      var y = cljs.core.first(cljs.core.next(arglist__12400));
      var more = cljs.core.rest(cljs.core.next(arglist__12400));
      return G__12394__delegate.call(this, x, y, more)
    };
    return G__12394
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___1.call(this, x);
      case 2:
        return _GT___2.call(this, x, y);
      default:
        return _GT___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
  _GT_.__1 = _GT___1;
  _GT_.__2 = _GT___2;
  _GT_.__3 = _GT___3;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___1 = function(x) {
    return true
  };
  var _GT__EQ___2 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___3 = function() {
    var G__12421__delegate = function(x, y, more) {
      while(true) {
        if(x >= y) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__12425 = y;
            var G__12426 = cljs.core.first(more);
            var G__12427 = cljs.core.next(more);
            x = G__12425;
            y = G__12426;
            more = G__12427;
            continue
          }else {
            return y >= cljs.core.first(more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__12421 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12421__delegate.call(this, x, y, more)
    };
    G__12421.cljs$lang$maxFixedArity = 2;
    G__12421.cljs$lang$applyTo = function(arglist__12433) {
      var x = cljs.core.first(arglist__12433);
      var y = cljs.core.first(cljs.core.next(arglist__12433));
      var more = cljs.core.rest(cljs.core.next(arglist__12433));
      return G__12421__delegate.call(this, x, y, more)
    };
    return G__12421
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___1.call(this, x);
      case 2:
        return _GT__EQ___2.call(this, x, y);
      default:
        return _GT__EQ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
  _GT__EQ_.__1 = _GT__EQ___1;
  _GT__EQ_.__2 = _GT__EQ___2;
  _GT__EQ_.__3 = _GT__EQ___3;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__1 = function(x) {
    return x
  };
  var max__2 = function(x, y) {
    return x > y ? x : y
  };
  var max__3 = function() {
    var G__12477__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(max, x > y ? x : y, more)
    };
    var G__12477 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12477__delegate.call(this, x, y, more)
    };
    G__12477.cljs$lang$maxFixedArity = 2;
    G__12477.cljs$lang$applyTo = function(arglist__12495) {
      var x = cljs.core.first(arglist__12495);
      var y = cljs.core.first(cljs.core.next(arglist__12495));
      var more = cljs.core.rest(cljs.core.next(arglist__12495));
      return G__12477__delegate.call(this, x, y, more)
    };
    return G__12477
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__1.call(this, x);
      case 2:
        return max__2.call(this, x, y);
      default:
        return max__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
  max.__1 = max__1;
  max.__2 = max__2;
  max.__3 = max__3;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__1 = function(x) {
    return x
  };
  var min__2 = function(x, y) {
    return x < y ? x : y
  };
  var min__3 = function() {
    var G__12497__delegate = function(x, y, more) {
      return cljs.core.reduce.__3(min, x < y ? x : y, more)
    };
    var G__12497 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12497__delegate.call(this, x, y, more)
    };
    G__12497.cljs$lang$maxFixedArity = 2;
    G__12497.cljs$lang$applyTo = function(arglist__12498) {
      var x = cljs.core.first(arglist__12498);
      var y = cljs.core.first(cljs.core.next(arglist__12498));
      var more = cljs.core.rest(cljs.core.next(arglist__12498));
      return G__12497__delegate.call(this, x, y, more)
    };
    return G__12497
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__1.call(this, x);
      case 2:
        return min__2.call(this, x, y);
      default:
        return min__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
  min.__1 = min__1;
  min.__2 = min__2;
  min.__3 = min__3;
  return min
}();
cljs.core.fix = function fix(q) {
  if(q >= 0) {
    return Math.floor.call(null, q)
  }else {
    return Math.ceil.call(null, q)
  }
};
cljs.core.mod = function mod(n, d) {
  return n % d
};
cljs.core.quot = function quot(n, d) {
  var rem__12507 = n % d;
  return cljs.core.fix((n - rem__12507) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__12508 = cljs.core.quot(n, d);
  return n - d * q__12508
};
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return Math.random.call(null)
  };
  var rand__1 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.__0 = rand__0;
  rand.__1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return cljs.core.fix(cljs.core.rand.__1(n))
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
  var _EQ__EQ___1 = function(x) {
    return true
  };
  var _EQ__EQ___2 = function(x, y) {
    return cljs.core._equiv(x, y)
  };
  var _EQ__EQ___3 = function() {
    var G__12549__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next(more))) {
            var G__12553 = y;
            var G__12554 = cljs.core.first(more);
            var G__12555 = cljs.core.next(more);
            x = G__12553;
            y = G__12554;
            more = G__12555;
            continue
          }else {
            return _EQ__EQ_.call(null, y, cljs.core.first(more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__12549 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__12549__delegate.call(this, x, y, more)
    };
    G__12549.cljs$lang$maxFixedArity = 2;
    G__12549.cljs$lang$applyTo = function(arglist__12558) {
      var x = cljs.core.first(arglist__12558);
      var y = cljs.core.first(cljs.core.next(arglist__12558));
      var more = cljs.core.rest(cljs.core.next(arglist__12558));
      return G__12549__delegate.call(this, x, y, more)
    };
    return G__12549
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___1.call(this, x);
      case 2:
        return _EQ__EQ___2.call(this, x, y);
      default:
        return _EQ__EQ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
  _EQ__EQ_.__1 = _EQ__EQ___1;
  _EQ__EQ_.__2 = _EQ__EQ___2;
  _EQ__EQ_.__3 = _EQ__EQ___3;
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
  var n__12576 = n;
  var xs__12577 = cljs.core.seq(coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____12578 = xs__12577;
      if(cljs.core.truth_(and__3546__auto____12578)) {
        return n__12576 > 0
      }else {
        return and__3546__auto____12578
      }
    }())) {
      var G__12581 = n__12576 - 1;
      var G__12582 = cljs.core.next(xs__12577);
      n__12576 = G__12581;
      xs__12577 = G__12582;
      continue
    }else {
      return xs__12577
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__12590 = null;
  var G__12590__2 = function(coll, n) {
    var temp__3695__auto____12585 = cljs.core.nthnext(coll, n);
    if(cljs.core.truth_(temp__3695__auto____12585)) {
      var xs__12587 = temp__3695__auto____12585;
      return cljs.core.first(xs__12587)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__12590__3 = function(coll, n, not_found) {
    var temp__3695__auto____12588 = cljs.core.nthnext(coll, n);
    if(cljs.core.truth_(temp__3695__auto____12588)) {
      var xs__12589 = temp__3695__auto____12588;
      return cljs.core.first(xs__12589)
    }else {
      return not_found
    }
  };
  G__12590 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__12590__2.call(this, coll, n);
      case 3:
        return G__12590__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__12590
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___0 = function() {
    return""
  };
  var str_STAR___1 = function(x) {
    if(x === null) {
      return""
    }else {
      if("\ufdd0'else") {
        return x.toString()
      }else {
        return null
      }
    }
  };
  var str_STAR___2 = function() {
    var G__12665__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__12667 = sb.append(str_STAR_.call(null, cljs.core.first(more)));
            var G__12668 = cljs.core.next(more);
            sb = G__12667;
            more = G__12668;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__12665 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__12665__delegate.call(this, x, ys)
    };
    G__12665.cljs$lang$maxFixedArity = 1;
    G__12665.cljs$lang$applyTo = function(arglist__12670) {
      var x = cljs.core.first(arglist__12670);
      var ys = cljs.core.rest(arglist__12670);
      return G__12665__delegate.call(this, x, ys)
    };
    return G__12665
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___0.call(this);
      case 1:
        return str_STAR___1.call(this, x);
      default:
        return str_STAR___2.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
  str_STAR_.__0 = str_STAR___0;
  str_STAR_.__1 = str_STAR___1;
  str_STAR_.__2 = str_STAR___2;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__0 = function() {
    return""
  };
  var str__1 = function(x) {
    if(cljs.core.symbol_QMARK_(x)) {
      return x.substring(2, x.length)
    }else {
      if(cljs.core.keyword_QMARK_(x)) {
        return cljs.core.str_STAR_(":", x.substring(2, x.length))
      }else {
        if(x === null) {
          return""
        }else {
          if("\ufdd0'else") {
            return x.toString()
          }else {
            return null
          }
        }
      }
    }
  };
  var str__2 = function() {
    var G__12690__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__12693 = sb.append(str.call(null, cljs.core.first(more)));
            var G__12694 = cljs.core.next(more);
            sb = G__12693;
            more = G__12694;
            continue
          }else {
            return cljs.core.str_STAR_.__1(sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str.call(null, x)), ys)
    };
    var G__12690 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__12690__delegate.call(this, x, ys)
    };
    G__12690.cljs$lang$maxFixedArity = 1;
    G__12690.cljs$lang$applyTo = function(arglist__12697) {
      var x = cljs.core.first(arglist__12697);
      var ys = cljs.core.rest(arglist__12697);
      return G__12690__delegate.call(this, x, ys)
    };
    return G__12690
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__0.call(this);
      case 1:
        return str__1.call(this, x);
      default:
        return str__2.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
  str.__0 = str__0;
  str.__1 = str__1;
  str.__2 = str__2;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__2 = function(s, start) {
    return s.substring(start)
  };
  var subs__3 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__2.call(this, s, start);
      case 3:
        return subs__3.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subs.__2 = subs__2;
  subs.__3 = subs__3;
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__1 = function(name) {
    if(cljs.core.symbol_QMARK_(name)) {
      name
    }else {
      if(cljs.core.keyword_QMARK_(name)) {
        cljs.core.str_STAR_("\ufdd1", "'", cljs.core.subs.__2(name, 2))
      }else {
      }
    }
    return cljs.core.str_STAR_("\ufdd1", "'", name)
  };
  var symbol__2 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_(ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__1.call(this, ns);
      case 2:
        return symbol__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  symbol.__1 = symbol__1;
  symbol.__2 = symbol__2;
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__1 = function(name) {
    if(cljs.core.keyword_QMARK_(name)) {
      return name
    }else {
      if(cljs.core.symbol_QMARK_(name)) {
        return cljs.core.str_STAR_("\ufdd0", "'", cljs.core.subs.__2(name, 2))
      }else {
        if("\ufdd0'else") {
          return cljs.core.str_STAR_("\ufdd0", "'", name)
        }else {
          return null
        }
      }
    }
  };
  var keyword__2 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_(ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__1.call(this, ns);
      case 2:
        return keyword__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  keyword.__1 = keyword__1;
  keyword.__2 = keyword__2;
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$(cljs.core.sequential_QMARK_(y) ? function() {
    var xs__12710 = cljs.core.seq(x);
    var ys__12711 = cljs.core.seq(y);
    while(true) {
      if(xs__12710 === null) {
        return ys__12711 === null
      }else {
        if(ys__12711 === null) {
          return false
        }else {
          if(cljs.core._EQ_.__2(cljs.core.first(xs__12710), cljs.core.first(ys__12711))) {
            var G__12834 = cljs.core.next(xs__12710);
            var G__12835 = cljs.core.next(ys__12711);
            xs__12710 = G__12834;
            ys__12711 = G__12835;
            continue
          }else {
            if("\ufdd0'else") {
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
  return cljs.core.reduce.__3(function(p1__12838_SHARP_, p2__12839_SHARP_) {
    return cljs.core.hash_combine(p1__12838_SHARP_, cljs.core.hash(p2__12839_SHARP_))
  }, cljs.core.hash(cljs.core.first(coll)), cljs.core.next(coll))
};
void 0;
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__12844__12845 = cljs.core.seq(fn_map);
  if(cljs.core.truth_(G__12844__12845)) {
    var G__12847__12849 = cljs.core.first(G__12844__12845);
    var vec__12848__12850 = G__12847__12849;
    var key_name__12851 = cljs.core.nth.__3(vec__12848__12850, 0, null);
    var f__12852 = cljs.core.nth.__3(vec__12848__12850, 1, null);
    var G__12844__12853 = G__12844__12845;
    var G__12847__12854 = G__12847__12849;
    var G__12844__12855 = G__12844__12853;
    while(true) {
      var vec__12856__12857 = G__12847__12854;
      var key_name__12858 = cljs.core.nth.__3(vec__12856__12857, 0, null);
      var f__12859 = cljs.core.nth.__3(vec__12856__12857, 1, null);
      var G__12844__12860 = G__12844__12855;
      var str_name__12861 = cljs.core.name(key_name__12858);
      obj[str_name__12861] = f__12859;
      var temp__3698__auto____12864 = cljs.core.next(G__12844__12860);
      if(cljs.core.truth_(temp__3698__auto____12864)) {
        var G__12844__12865 = temp__3698__auto____12864;
        var G__12876 = cljs.core.first(G__12844__12865);
        var G__12877 = G__12844__12865;
        G__12847__12854 = G__12876;
        G__12844__12855 = G__12877;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__12940 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__12942 = this;
  return new cljs.core.List(this__12942.meta, o, coll, this__12942.count + 1)
};
cljs.core.List.prototype.toString = function() {
  var this__12945 = this;
  var this$__12946 = this;
  return cljs.core.pr_str(this$__12946)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__12948 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__12992 = this;
  return this__12992.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__12994 = this;
  return this__12994.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__12996 = this;
  return cljs.core._rest(coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__12997 = this;
  return this__12997.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__13000 = this;
  return this__13000.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__13002 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__13005 = this;
  return new cljs.core.List(meta, this__13005.first, this__13005.rest, this__13005.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__13006 = this;
  return this__13006.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__13008 = this;
  return cljs.core.List.EMPTY
};
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__13105 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__13106 = this;
  return new cljs.core.List(this__13106.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.toString = function() {
  var this__13108 = this;
  var this$__13109 = this;
  return cljs.core.pr_str(this$__13109)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__13111 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__13113 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__13115 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__13117 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__13118 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__13120 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__13121 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__13122 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__13126 = this;
  return this__13126.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__13127 = this;
  return coll
};
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_ = function reversible_QMARK_(coll) {
  var x__462__auto____13140 = coll;
  if(cljs.core.truth_(function() {
    var and__3546__auto____13141 = x__462__auto____13140;
    if(cljs.core.truth_(and__3546__auto____13141)) {
      var and__3546__auto____13143 = x__462__auto____13140.cljs$core$IReversible$;
      if(cljs.core.truth_(and__3546__auto____13143)) {
        return cljs.core.not(x__462__auto____13140.hasOwnProperty("cljs$core$IReversible$"))
      }else {
        return and__3546__auto____13143
      }
    }else {
      return and__3546__auto____13141
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.IReversible, x__462__auto____13140)
  }
};
cljs.core.rseq = function rseq(coll) {
  return cljs.core._rseq(coll)
};
cljs.core.reverse = function reverse(coll) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, coll)
};
cljs.core.list = function() {
  var list__delegate = function(items) {
    return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse(items))
  };
  var list = function(var_args) {
    var items = null;
    if(goog.isDef(var_args)) {
      items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return list__delegate.call(this, items)
  };
  list.cljs$lang$maxFixedArity = 0;
  list.cljs$lang$applyTo = function(arglist__13175) {
    var items = cljs.core.seq(arglist__13175);
    return list__delegate.call(this, items)
  };
  return list
}();
cljs.core.Cons = function(meta, first, rest) {
  this.meta = meta;
  this.first = first;
  this.rest = rest
};
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__13176 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__13177 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.toString = function() {
  var this__13179 = this;
  var this$__13182 = this;
  return cljs.core.pr_str(this$__13182)
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__13183 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__13185 = this;
  return this__13185.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__13186 = this;
  if(this__13186.rest === null) {
    return cljs.core.List.EMPTY
  }else {
    return this__13186.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__13188 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__13189 = this;
  return new cljs.core.Cons(meta, this__13189.first, this__13189.rest)
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__13192 = this;
  return this__13192.meta
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__13193 = this;
  return cljs.core.with_meta(cljs.core.List.EMPTY, this__13193.meta)
};
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.list_QMARK_ = function list_QMARK_(x) {
  var x__462__auto____13208 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____13209 = x__462__auto____13208;
    if(cljs.core.truth_(and__3546__auto____13209)) {
      var and__3546__auto____13210 = x__462__auto____13208.cljs$core$IList$;
      if(cljs.core.truth_(and__3546__auto____13210)) {
        return cljs.core.not(x__462__auto____13208.hasOwnProperty("cljs$core$IList$"))
      }else {
        return and__3546__auto____13210
      }
    }else {
      return and__3546__auto____13209
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_(cljs.core.IList, x__462__auto____13208)
  }
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__13240 = null;
  var G__13240__2 = function(string, f) {
    return cljs.core.ci_reduce.__2(string, f)
  };
  var G__13240__3 = function(string, f, start) {
    return cljs.core.ci_reduce.__3(string, f, start)
  };
  G__13240 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__13240__2.call(this, string, f);
      case 3:
        return G__13240__3.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13240
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__13243 = null;
  var G__13243__2 = function(string, k) {
    return cljs.core._nth.__2(string, k)
  };
  var G__13243__3 = function(string, k, not_found) {
    return cljs.core._nth.__3(string, k, not_found)
  };
  G__13243 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13243__2.call(this, string, k);
      case 3:
        return G__13243__3.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13243
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__13248 = null;
  var G__13248__2 = function(string, n) {
    if(n < cljs.core._count(string)) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__13248__3 = function(string, n, not_found) {
    if(n < cljs.core._count(string)) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__13248 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13248__2.call(this, string, n);
      case 3:
        return G__13248__3.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13248
}();
cljs.core.ICounted["string"] = true;
cljs.core._count["string"] = function(s) {
  return s.length
};
cljs.core.ISeqable["string"] = true;
cljs.core._seq["string"] = function(string) {
  return cljs.core.prim_seq(string, 0)
};
cljs.core.IHash["string"] = true;
cljs.core._hash["string"] = function(o) {
  return goog.string.hashCode.call(null, o)
};
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = function() {
  var G__13267 = null;
  var G__13267__2 = function(tsym13258, coll) {
    var tsym13258__13261 = this;
    var this$__13262 = tsym13258__13261;
    return cljs.core.get.__2(coll, this$__13262.toString())
  };
  var G__13267__3 = function(tsym13259, coll, not_found) {
    var tsym13259__13264 = this;
    var this$__13265 = tsym13259__13264;
    return cljs.core.get.__3(coll, this$__13265.toString(), not_found)
  };
  G__13267 = function(tsym13259, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__13267__2.call(this, tsym13259, coll);
      case 3:
        return G__13267__3.call(this, tsym13259, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__13267
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.count(args) < 2) {
    return cljs.core.get.__2(args[0], s)
  }else {
    return cljs.core.get.__3(args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__13279 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__13279
  }else {
    lazy_seq.x = x__13279.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x) {
  this.meta = meta;
  this.realized = realized;
  this.x = x
};
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__13295 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__13315 = this;
  return cljs.core.cons(o, coll)
};
cljs.core.LazySeq.prototype.toString = function() {
  var this__13317 = this;
  var this$__13319 = this;
  return cljs.core.pr_str(this$__13319)
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__13323 = this;
  return cljs.core.seq(cljs.core.lazy_seq_value(coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__13324 = this;
  return cljs.core.first(cljs.core.lazy_seq_value(coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__13326 = this;
  return cljs.core.rest(cljs.core.lazy_seq_value(coll))
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__13331 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__13332 = this;
  return new cljs.core.LazySeq(meta, this__13332.realized, this__13332.x)
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__13333 = this;
  return this__13333.meta
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__13336 = this;
  return cljs.core.with_meta(cljs.core.List.EMPTY, this__13336.meta)
};
cljs.core.LazySeq;
cljs.core.to_array = function to_array(s) {
  var ary__13346 = [];
  var s__13348 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq(s__13348))) {
      ary__13346.push(cljs.core.first(s__13348));
      var G__13352 = cljs.core.next(s__13348);
      s__13348 = G__13352;
      continue
    }else {
      return ary__13346
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__13359 = s;
  var i__13360 = n;
  var sum__13361 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____13363 = i__13360 > 0;
      if(and__3546__auto____13363) {
        return cljs.core.seq(s__13359)
      }else {
        return and__3546__auto____13363
      }
    }())) {
      var G__13415 = cljs.core.next(s__13359);
      var G__13416 = i__13360 - 1;
      var G__13417 = sum__13361 + 1;
      s__13359 = G__13415;
      i__13360 = G__13416;
      sum__13361 = G__13417;
      continue
    }else {
      return sum__13361
    }
    break
  }
};
cljs.core.spread = function spread(arglist) {
  if(arglist === null) {
    return null
  }else {
    if(cljs.core.next(arglist) === null) {
      return cljs.core.seq(cljs.core.first(arglist))
    }else {
      if("\ufdd0'else") {
        return cljs.core.cons(cljs.core.first(arglist), spread.call(null, cljs.core.next(arglist)))
      }else {
        return null
      }
    }
  }
};
cljs.core.concat = function() {
  var concat = null;
  var concat__0 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__2 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__13427 = cljs.core.seq(x);
      if(cljs.core.truth_(s__13427)) {
        return cljs.core.cons(cljs.core.first(s__13427), concat.call(null, cljs.core.rest(s__13427), y))
      }else {
        return y
      }
    })
  };
  var concat__3 = function() {
    var G__13441__delegate = function(x, y, zs) {
      var cat__13435 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__13433 = cljs.core.seq(xys);
          if(cljs.core.truth_(xys__13433)) {
            return cljs.core.cons(cljs.core.first(xys__13433), cat.call(null, cljs.core.rest(xys__13433), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first(zs), cljs.core.next(zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__13435.call(null, concat.call(null, x, y), zs)
    };
    var G__13441 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__13441__delegate.call(this, x, y, zs)
    };
    G__13441.cljs$lang$maxFixedArity = 2;
    G__13441.cljs$lang$applyTo = function(arglist__13447) {
      var x = cljs.core.first(arglist__13447);
      var y = cljs.core.first(cljs.core.next(arglist__13447));
      var zs = cljs.core.rest(cljs.core.next(arglist__13447));
      return G__13441__delegate.call(this, x, y, zs)
    };
    return G__13441
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__0.call(this);
      case 1:
        return concat__1.call(this, x);
      case 2:
        return concat__2.call(this, x, y);
      default:
        return concat__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
  concat.__0 = concat__0;
  concat.__1 = concat__1;
  concat.__2 = concat__2;
  concat.__3 = concat__3;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___1 = function(args) {
    return cljs.core.seq(args)
  };
  var list_STAR___2 = function(a, args) {
    return cljs.core.cons(a, args)
  };
  var list_STAR___3 = function(a, b, args) {
    return cljs.core.cons(a, cljs.core.cons(b, args))
  };
  var list_STAR___4 = function(a, b, c, args) {
    return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, args)))
  };
  var list_STAR___5 = function() {
    var G__13471__delegate = function(a, b, c, d, more) {
      return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.spread(more)))))
    };
    var G__13471 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__13471__delegate.call(this, a, b, c, d, more)
    };
    G__13471.cljs$lang$maxFixedArity = 4;
    G__13471.cljs$lang$applyTo = function(arglist__13473) {
      var a = cljs.core.first(arglist__13473);
      var b = cljs.core.first(cljs.core.next(arglist__13473));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13473)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13473))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13473))));
      return G__13471__delegate.call(this, a, b, c, d, more)
    };
    return G__13471
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___1.call(this, a);
      case 2:
        return list_STAR___2.call(this, a, b);
      case 3:
        return list_STAR___3.call(this, a, b, c);
      case 4:
        return list_STAR___4.call(this, a, b, c, d);
      default:
        return list_STAR___5.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
  list_STAR_.__1 = list_STAR___1;
  list_STAR_.__2 = list_STAR___2;
  list_STAR_.__3 = list_STAR___3;
  list_STAR_.__4 = list_STAR___4;
  list_STAR_.__5 = list_STAR___5;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__2 = function(f, args) {
    var fixed_arity__13477 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.bounded_count(args, fixed_arity__13477 + 1) <= fixed_arity__13477) {
        return f.apply(f, cljs.core.to_array(args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array(args))
    }
  };
  var apply__3 = function(f, x, args) {
    var arglist__13481 = cljs.core.list_STAR_.__2(x, args);
    var fixed_arity__13488 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.bounded_count(arglist__13481, fixed_arity__13488) <= fixed_arity__13488) {
        return f.apply(f, cljs.core.to_array(arglist__13481))
      }else {
        return f.cljs$lang$applyTo(arglist__13481)
      }
    }else {
      return f.apply(f, cljs.core.to_array(arglist__13481))
    }
  };
  var apply__4 = function(f, x, y, args) {
    var arglist__13511 = cljs.core.list_STAR_.__3(x, y, args);
    var fixed_arity__13512 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.bounded_count(arglist__13511, fixed_arity__13512) <= fixed_arity__13512) {
        return f.apply(f, cljs.core.to_array(arglist__13511))
      }else {
        return f.cljs$lang$applyTo(arglist__13511)
      }
    }else {
      return f.apply(f, cljs.core.to_array(arglist__13511))
    }
  };
  var apply__5 = function(f, x, y, z, args) {
    var arglist__13513 = cljs.core.list_STAR_.__4(x, y, z, args);
    var fixed_arity__13514 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.bounded_count(arglist__13513, fixed_arity__13514) <= fixed_arity__13514) {
        return f.apply(f, cljs.core.to_array(arglist__13513))
      }else {
        return f.cljs$lang$applyTo(arglist__13513)
      }
    }else {
      return f.apply(f, cljs.core.to_array(arglist__13513))
    }
  };
  var apply__6 = function() {
    var G__13534__delegate = function(f, a, b, c, d, args) {
      var arglist__13516 = cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.spread(args)))));
      var fixed_arity__13517 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.bounded_count(arglist__13516, fixed_arity__13517) <= fixed_arity__13517) {
          return f.apply(f, cljs.core.to_array(arglist__13516))
        }else {
          return f.cljs$lang$applyTo(arglist__13516)
        }
      }else {
        return f.apply(f, cljs.core.to_array(arglist__13516))
      }
    };
    var G__13534 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__13534__delegate.call(this, f, a, b, c, d, args)
    };
    G__13534.cljs$lang$maxFixedArity = 5;
    G__13534.cljs$lang$applyTo = function(arglist__13542) {
      var f = cljs.core.first(arglist__13542);
      var a = cljs.core.first(cljs.core.next(arglist__13542));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13542)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542)))));
      return G__13534__delegate.call(this, f, a, b, c, d, args)
    };
    return G__13534
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__2.call(this, f, a);
      case 3:
        return apply__3.call(this, f, a, b);
      case 4:
        return apply__4.call(this, f, a, b, c);
      case 5:
        return apply__5.call(this, f, a, b, c, d);
      default:
        return apply__6.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
  apply.__2 = apply__2;
  apply.__3 = apply__3;
  apply.__4 = apply__4;
  apply.__5 = apply__5;
  apply.__6 = apply__6;
  return apply
}();
cljs.core.vary_meta = function() {
  var vary_meta__delegate = function(obj, f, args) {
    return cljs.core.with_meta(obj, cljs.core.apply.__3(f, cljs.core.meta(obj), args))
  };
  var vary_meta = function(obj, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return vary_meta__delegate.call(this, obj, f, args)
  };
  vary_meta.cljs$lang$maxFixedArity = 2;
  vary_meta.cljs$lang$applyTo = function(arglist__13561) {
    var obj = cljs.core.first(arglist__13561);
    var f = cljs.core.first(cljs.core.next(arglist__13561));
    var args = cljs.core.rest(cljs.core.next(arglist__13561));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___1 = function(x) {
    return false
  };
  var not_EQ___2 = function(x, y) {
    return cljs.core.not(cljs.core._EQ_.__2(x, y))
  };
  var not_EQ___3 = function() {
    var G__13565__delegate = function(x, y, more) {
      return cljs.core.not(cljs.core.apply.__4(cljs.core._EQ_, x, y, more))
    };
    var G__13565 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__13565__delegate.call(this, x, y, more)
    };
    G__13565.cljs$lang$maxFixedArity = 2;
    G__13565.cljs$lang$applyTo = function(arglist__13567) {
      var x = cljs.core.first(arglist__13567);
      var y = cljs.core.first(cljs.core.next(arglist__13567));
      var more = cljs.core.rest(cljs.core.next(arglist__13567));
      return G__13565__delegate.call(this, x, y, more)
    };
    return G__13565
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___1.call(this, x);
      case 2:
        return not_EQ___2.call(this, x, y);
      default:
        return not_EQ___3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
  not_EQ_.__1 = not_EQ___1;
  not_EQ_.__2 = not_EQ___2;
  not_EQ_.__3 = not_EQ___3;
  return not_EQ_
}();
cljs.core.not_empty = function not_empty(coll) {
  if(cljs.core.truth_(cljs.core.seq(coll))) {
    return coll
  }else {
    return null
  }
};
cljs.core.every_QMARK_ = function every_QMARK_(pred, coll) {
  while(true) {
    if(cljs.core.seq(coll) === null) {
      return true
    }else {
      if(cljs.core.truth_(pred.call(null, cljs.core.first(coll)))) {
        var G__13592 = pred;
        var G__13593 = cljs.core.next(coll);
        pred = G__13592;
        coll = G__13593;
        continue
      }else {
        if("\ufdd0'else") {
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
  return cljs.core.not(cljs.core.every_QMARK_(pred, coll))
};
cljs.core.some = function some(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.seq(coll))) {
      var or__3548__auto____13605 = pred.call(null, cljs.core.first(coll));
      if(cljs.core.truth_(or__3548__auto____13605)) {
        return or__3548__auto____13605
      }else {
        var G__13612 = pred;
        var G__13613 = cljs.core.next(coll);
        pred = G__13612;
        coll = G__13613;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.not_any_QMARK_ = function not_any_QMARK_(pred, coll) {
  return cljs.core.not(cljs.core.some(pred, coll))
};
cljs.core.even_QMARK_ = function even_QMARK_(n) {
  if(cljs.core.integer_QMARK_(n)) {
    return(n & 1) === 0
  }else {
    throw new Error(cljs.core.str("Argument must be an integer: ", n));
  }
};
cljs.core.odd_QMARK_ = function odd_QMARK_(n) {
  return cljs.core.not(cljs.core.even_QMARK_(n))
};
cljs.core.identity = function identity(x) {
  return x
};
cljs.core.complement = function complement(f) {
  return function() {
    var G__13644 = null;
    var G__13644__0 = function() {
      return cljs.core.not(f.call(null))
    };
    var G__13644__1 = function(x) {
      return cljs.core.not(f.call(null, x))
    };
    var G__13644__2 = function(x, y) {
      return cljs.core.not(f.call(null, x, y))
    };
    var G__13644__3 = function() {
      var G__13645__delegate = function(x, y, zs) {
        return cljs.core.not(cljs.core.apply.__4(f, x, y, zs))
      };
      var G__13645 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__13645__delegate.call(this, x, y, zs)
      };
      G__13645.cljs$lang$maxFixedArity = 2;
      G__13645.cljs$lang$applyTo = function(arglist__13647) {
        var x = cljs.core.first(arglist__13647);
        var y = cljs.core.first(cljs.core.next(arglist__13647));
        var zs = cljs.core.rest(cljs.core.next(arglist__13647));
        return G__13645__delegate.call(this, x, y, zs)
      };
      return G__13645
    }();
    G__13644 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__13644__0.call(this);
        case 1:
          return G__13644__1.call(this, x);
        case 2:
          return G__13644__2.call(this, x, y);
        default:
          return G__13644__3.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__13644.cljs$lang$maxFixedArity = 2;
    G__13644.cljs$lang$applyTo = G__13644__3.cljs$lang$applyTo;
    return G__13644
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__13655__delegate = function(args) {
      return x
    };
    var G__13655 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__13655__delegate.call(this, args)
    };
    G__13655.cljs$lang$maxFixedArity = 0;
    G__13655.cljs$lang$applyTo = function(arglist__13658) {
      var args = cljs.core.seq(arglist__13658);
      return G__13655__delegate.call(this, args)
    };
    return G__13655
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__0 = function() {
    return cljs.core.identity
  };
  var comp__1 = function(f) {
    return f
  };
  var comp__2 = function(f, g) {
    return function() {
      var G__13676 = null;
      var G__13676__0 = function() {
        return f.call(null, g.call(null))
      };
      var G__13676__1 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__13676__2 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__13676__3 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__13676__4 = function() {
        var G__13802__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.__5(g, x, y, z, args))
        };
        var G__13802 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13802__delegate.call(this, x, y, z, args)
        };
        G__13802.cljs$lang$maxFixedArity = 3;
        G__13802.cljs$lang$applyTo = function(arglist__13803) {
          var x = cljs.core.first(arglist__13803);
          var y = cljs.core.first(cljs.core.next(arglist__13803));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13803)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13803)));
          return G__13802__delegate.call(this, x, y, z, args)
        };
        return G__13802
      }();
      G__13676 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13676__0.call(this);
          case 1:
            return G__13676__1.call(this, x);
          case 2:
            return G__13676__2.call(this, x, y);
          case 3:
            return G__13676__3.call(this, x, y, z);
          default:
            return G__13676__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13676.cljs$lang$maxFixedArity = 3;
      G__13676.cljs$lang$applyTo = G__13676__4.cljs$lang$applyTo;
      return G__13676
    }()
  };
  var comp__3 = function(f, g, h) {
    return function() {
      var G__13804 = null;
      var G__13804__0 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__13804__1 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__13804__2 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__13804__3 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__13804__4 = function() {
        var G__13805__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.__5(h, x, y, z, args)))
        };
        var G__13805 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13805__delegate.call(this, x, y, z, args)
        };
        G__13805.cljs$lang$maxFixedArity = 3;
        G__13805.cljs$lang$applyTo = function(arglist__13806) {
          var x = cljs.core.first(arglist__13806);
          var y = cljs.core.first(cljs.core.next(arglist__13806));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13806)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13806)));
          return G__13805__delegate.call(this, x, y, z, args)
        };
        return G__13805
      }();
      G__13804 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__13804__0.call(this);
          case 1:
            return G__13804__1.call(this, x);
          case 2:
            return G__13804__2.call(this, x, y);
          case 3:
            return G__13804__3.call(this, x, y, z);
          default:
            return G__13804__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13804.cljs$lang$maxFixedArity = 3;
      G__13804.cljs$lang$applyTo = G__13804__4.cljs$lang$applyTo;
      return G__13804
    }()
  };
  var comp__4 = function() {
    var G__13807__delegate = function(f1, f2, f3, fs) {
      var fs__13665 = cljs.core.reverse(cljs.core.list_STAR_.__4(f1, f2, f3, fs));
      return function() {
        var G__13808__delegate = function(args) {
          var ret__13666 = cljs.core.apply.__2(cljs.core.first(fs__13665), args);
          var fs__13668 = cljs.core.next(fs__13665);
          while(true) {
            if(cljs.core.truth_(fs__13668)) {
              var G__13810 = cljs.core.first(fs__13668).call(null, ret__13666);
              var G__13811 = cljs.core.next(fs__13668);
              ret__13666 = G__13810;
              fs__13668 = G__13811;
              continue
            }else {
              return ret__13666
            }
            break
          }
        };
        var G__13808 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__13808__delegate.call(this, args)
        };
        G__13808.cljs$lang$maxFixedArity = 0;
        G__13808.cljs$lang$applyTo = function(arglist__13813) {
          var args = cljs.core.seq(arglist__13813);
          return G__13808__delegate.call(this, args)
        };
        return G__13808
      }()
    };
    var G__13807 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__13807__delegate.call(this, f1, f2, f3, fs)
    };
    G__13807.cljs$lang$maxFixedArity = 3;
    G__13807.cljs$lang$applyTo = function(arglist__13814) {
      var f1 = cljs.core.first(arglist__13814);
      var f2 = cljs.core.first(cljs.core.next(arglist__13814));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13814)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13814)));
      return G__13807__delegate.call(this, f1, f2, f3, fs)
    };
    return G__13807
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__0.call(this);
      case 1:
        return comp__1.call(this, f1);
      case 2:
        return comp__2.call(this, f1, f2);
      case 3:
        return comp__3.call(this, f1, f2, f3);
      default:
        return comp__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
  comp.__0 = comp__0;
  comp.__1 = comp__1;
  comp.__2 = comp__2;
  comp.__3 = comp__3;
  comp.__4 = comp__4;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__2 = function(f, arg1) {
    return function() {
      var G__13829__delegate = function(args) {
        return cljs.core.apply.__3(f, arg1, args)
      };
      var G__13829 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__13829__delegate.call(this, args)
      };
      G__13829.cljs$lang$maxFixedArity = 0;
      G__13829.cljs$lang$applyTo = function(arglist__13831) {
        var args = cljs.core.seq(arglist__13831);
        return G__13829__delegate.call(this, args)
      };
      return G__13829
    }()
  };
  var partial__3 = function(f, arg1, arg2) {
    return function() {
      var G__13834__delegate = function(args) {
        return cljs.core.apply.__4(f, arg1, arg2, args)
      };
      var G__13834 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__13834__delegate.call(this, args)
      };
      G__13834.cljs$lang$maxFixedArity = 0;
      G__13834.cljs$lang$applyTo = function(arglist__13835) {
        var args = cljs.core.seq(arglist__13835);
        return G__13834__delegate.call(this, args)
      };
      return G__13834
    }()
  };
  var partial__4 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__13837__delegate = function(args) {
        return cljs.core.apply.__5(f, arg1, arg2, arg3, args)
      };
      var G__13837 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__13837__delegate.call(this, args)
      };
      G__13837.cljs$lang$maxFixedArity = 0;
      G__13837.cljs$lang$applyTo = function(arglist__13842) {
        var args = cljs.core.seq(arglist__13842);
        return G__13837__delegate.call(this, args)
      };
      return G__13837
    }()
  };
  var partial__5 = function() {
    var G__13843__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__13844__delegate = function(args) {
          return cljs.core.apply.__5(f, arg1, arg2, arg3, cljs.core.concat.__2(more, args))
        };
        var G__13844 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__13844__delegate.call(this, args)
        };
        G__13844.cljs$lang$maxFixedArity = 0;
        G__13844.cljs$lang$applyTo = function(arglist__13851) {
          var args = cljs.core.seq(arglist__13851);
          return G__13844__delegate.call(this, args)
        };
        return G__13844
      }()
    };
    var G__13843 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__13843__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__13843.cljs$lang$maxFixedArity = 4;
    G__13843.cljs$lang$applyTo = function(arglist__13854) {
      var f = cljs.core.first(arglist__13854);
      var arg1 = cljs.core.first(cljs.core.next(arglist__13854));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13854)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13854))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13854))));
      return G__13843__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__13843
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__2.call(this, f, arg1);
      case 3:
        return partial__3.call(this, f, arg1, arg2);
      case 4:
        return partial__4.call(this, f, arg1, arg2, arg3);
      default:
        return partial__5.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
  partial.__2 = partial__2;
  partial.__3 = partial__3;
  partial.__4 = partial__4;
  partial.__5 = partial__5;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__2 = function(f, x) {
    return function() {
      var G__13898 = null;
      var G__13898__1 = function(a) {
        return f.call(null, a === null ? x : a)
      };
      var G__13898__2 = function(a, b) {
        return f.call(null, a === null ? x : a, b)
      };
      var G__13898__3 = function(a, b, c) {
        return f.call(null, a === null ? x : a, b, c)
      };
      var G__13898__4 = function() {
        var G__13904__delegate = function(a, b, c, ds) {
          return cljs.core.apply.__5(f, a === null ? x : a, b, c, ds)
        };
        var G__13904 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13904__delegate.call(this, a, b, c, ds)
        };
        G__13904.cljs$lang$maxFixedArity = 3;
        G__13904.cljs$lang$applyTo = function(arglist__13907) {
          var a = cljs.core.first(arglist__13907);
          var b = cljs.core.first(cljs.core.next(arglist__13907));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13907)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13907)));
          return G__13904__delegate.call(this, a, b, c, ds)
        };
        return G__13904
      }();
      G__13898 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__13898__1.call(this, a);
          case 2:
            return G__13898__2.call(this, a, b);
          case 3:
            return G__13898__3.call(this, a, b, c);
          default:
            return G__13898__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13898.cljs$lang$maxFixedArity = 3;
      G__13898.cljs$lang$applyTo = G__13898__4.cljs$lang$applyTo;
      return G__13898
    }()
  };
  var fnil__3 = function(f, x, y) {
    return function() {
      var G__13910 = null;
      var G__13910__2 = function(a, b) {
        return f.call(null, a === null ? x : a, b === null ? y : b)
      };
      var G__13910__3 = function(a, b, c) {
        return f.call(null, a === null ? x : a, b === null ? y : b, c)
      };
      var G__13910__4 = function() {
        var G__13915__delegate = function(a, b, c, ds) {
          return cljs.core.apply.__5(f, a === null ? x : a, b === null ? y : b, c, ds)
        };
        var G__13915 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13915__delegate.call(this, a, b, c, ds)
        };
        G__13915.cljs$lang$maxFixedArity = 3;
        G__13915.cljs$lang$applyTo = function(arglist__13917) {
          var a = cljs.core.first(arglist__13917);
          var b = cljs.core.first(cljs.core.next(arglist__13917));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13917)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13917)));
          return G__13915__delegate.call(this, a, b, c, ds)
        };
        return G__13915
      }();
      G__13910 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__13910__2.call(this, a, b);
          case 3:
            return G__13910__3.call(this, a, b, c);
          default:
            return G__13910__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13910.cljs$lang$maxFixedArity = 3;
      G__13910.cljs$lang$applyTo = G__13910__4.cljs$lang$applyTo;
      return G__13910
    }()
  };
  var fnil__4 = function(f, x, y, z) {
    return function() {
      var G__13920 = null;
      var G__13920__2 = function(a, b) {
        return f.call(null, a === null ? x : a, b === null ? y : b)
      };
      var G__13920__3 = function(a, b, c) {
        return f.call(null, a === null ? x : a, b === null ? y : b, c === null ? z : c)
      };
      var G__13920__4 = function() {
        var G__13926__delegate = function(a, b, c, ds) {
          return cljs.core.apply.__5(f, a === null ? x : a, b === null ? y : b, c === null ? z : c, ds)
        };
        var G__13926 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__13926__delegate.call(this, a, b, c, ds)
        };
        G__13926.cljs$lang$maxFixedArity = 3;
        G__13926.cljs$lang$applyTo = function(arglist__13927) {
          var a = cljs.core.first(arglist__13927);
          var b = cljs.core.first(cljs.core.next(arglist__13927));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13927)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13927)));
          return G__13926__delegate.call(this, a, b, c, ds)
        };
        return G__13926
      }();
      G__13920 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__13920__2.call(this, a, b);
          case 3:
            return G__13920__3.call(this, a, b, c);
          default:
            return G__13920__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__13920.cljs$lang$maxFixedArity = 3;
      G__13920.cljs$lang$applyTo = G__13920__4.cljs$lang$applyTo;
      return G__13920
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__2.call(this, f, x);
      case 3:
        return fnil__3.call(this, f, x, y);
      case 4:
        return fnil__4.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  fnil.__2 = fnil__2;
  fnil.__3 = fnil__3;
  fnil.__4 = fnil__4;
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__13940 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____13935 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____13935)) {
        var s__13937 = temp__3698__auto____13935;
        return cljs.core.cons(f.call(null, idx, cljs.core.first(s__13937)), mpi.call(null, idx + 1, cljs.core.rest(s__13937)))
      }else {
        return null
      }
    })
  };
  return mapi__13940.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____14063 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____14063)) {
      var s__14065 = temp__3698__auto____14063;
      var x__14066 = f.call(null, cljs.core.first(s__14065));
      if(x__14066 === null) {
        return keep.call(null, f, cljs.core.rest(s__14065))
      }else {
        return cljs.core.cons(x__14066, keep.call(null, f, cljs.core.rest(s__14065)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__14096 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____14089 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____14089)) {
        var s__14091 = temp__3698__auto____14089;
        var x__14093 = f.call(null, idx, cljs.core.first(s__14091));
        if(x__14093 === null) {
          return kpi.call(null, idx + 1, cljs.core.rest(s__14091))
        }else {
          return cljs.core.cons(x__14093, kpi.call(null, idx + 1, cljs.core.rest(s__14091)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__14096.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__1 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__0 = function() {
        return true
      };
      var ep1__1 = function(x) {
        return cljs.core.boolean$(p.call(null, x))
      };
      var ep1__2 = function(x, y) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14136 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14136)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____14136
          }
        }())
      };
      var ep1__3 = function(x, y, z) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14141 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14141)) {
            var and__3546__auto____14145 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____14145)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____14145
            }
          }else {
            return and__3546__auto____14141
          }
        }())
      };
      var ep1__4 = function() {
        var G__14430__delegate = function(x, y, z, args) {
          return cljs.core.boolean$(function() {
            var and__3546__auto____14154 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____14154)) {
              return cljs.core.every_QMARK_(p, args)
            }else {
              return and__3546__auto____14154
            }
          }())
        };
        var G__14430 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14430__delegate.call(this, x, y, z, args)
        };
        G__14430.cljs$lang$maxFixedArity = 3;
        G__14430.cljs$lang$applyTo = function(arglist__14433) {
          var x = cljs.core.first(arglist__14433);
          var y = cljs.core.first(cljs.core.next(arglist__14433));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14433)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14433)));
          return G__14430__delegate.call(this, x, y, z, args)
        };
        return G__14430
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__0.call(this);
          case 1:
            return ep1__1.call(this, x);
          case 2:
            return ep1__2.call(this, x, y);
          case 3:
            return ep1__3.call(this, x, y, z);
          default:
            return ep1__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
      ep1.__0 = ep1__0;
      ep1.__1 = ep1__1;
      ep1.__2 = ep1__2;
      ep1.__3 = ep1__3;
      ep1.__4 = ep1__4;
      return ep1
    }()
  };
  var every_pred__2 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__0 = function() {
        return true
      };
      var ep2__1 = function(x) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14160 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14160)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____14160
          }
        }())
      };
      var ep2__2 = function(x, y) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14166 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14166)) {
            var and__3546__auto____14168 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____14168)) {
              var and__3546__auto____14169 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____14169)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____14169
              }
            }else {
              return and__3546__auto____14168
            }
          }else {
            return and__3546__auto____14166
          }
        }())
      };
      var ep2__3 = function(x, y, z) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14172 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14172)) {
            var and__3546__auto____14173 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____14173)) {
              var and__3546__auto____14174 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____14174)) {
                var and__3546__auto____14176 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____14176)) {
                  var and__3546__auto____14177 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____14177)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____14177
                  }
                }else {
                  return and__3546__auto____14176
                }
              }else {
                return and__3546__auto____14174
              }
            }else {
              return and__3546__auto____14173
            }
          }else {
            return and__3546__auto____14172
          }
        }())
      };
      var ep2__4 = function() {
        var G__14449__delegate = function(x, y, z, args) {
          return cljs.core.boolean$(function() {
            var and__3546__auto____14184 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____14184)) {
              return cljs.core.every_QMARK_(function(p1__14076_SHARP_) {
                var and__3546__auto____14188 = p1.call(null, p1__14076_SHARP_);
                if(cljs.core.truth_(and__3546__auto____14188)) {
                  return p2.call(null, p1__14076_SHARP_)
                }else {
                  return and__3546__auto____14188
                }
              }, args)
            }else {
              return and__3546__auto____14184
            }
          }())
        };
        var G__14449 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14449__delegate.call(this, x, y, z, args)
        };
        G__14449.cljs$lang$maxFixedArity = 3;
        G__14449.cljs$lang$applyTo = function(arglist__14453) {
          var x = cljs.core.first(arglist__14453);
          var y = cljs.core.first(cljs.core.next(arglist__14453));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14453)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14453)));
          return G__14449__delegate.call(this, x, y, z, args)
        };
        return G__14449
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__0.call(this);
          case 1:
            return ep2__1.call(this, x);
          case 2:
            return ep2__2.call(this, x, y);
          case 3:
            return ep2__3.call(this, x, y, z);
          default:
            return ep2__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
      ep2.__0 = ep2__0;
      ep2.__1 = ep2__1;
      ep2.__2 = ep2__2;
      ep2.__3 = ep2__3;
      ep2.__4 = ep2__4;
      return ep2
    }()
  };
  var every_pred__3 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__0 = function() {
        return true
      };
      var ep3__1 = function(x) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14192 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14192)) {
            var and__3546__auto____14193 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____14193)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____14193
            }
          }else {
            return and__3546__auto____14192
          }
        }())
      };
      var ep3__2 = function(x, y) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14195 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14195)) {
            var and__3546__auto____14196 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____14196)) {
              var and__3546__auto____14199 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____14199)) {
                var and__3546__auto____14200 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____14200)) {
                  var and__3546__auto____14201 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____14201)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____14201
                  }
                }else {
                  return and__3546__auto____14200
                }
              }else {
                return and__3546__auto____14199
              }
            }else {
              return and__3546__auto____14196
            }
          }else {
            return and__3546__auto____14195
          }
        }())
      };
      var ep3__3 = function(x, y, z) {
        return cljs.core.boolean$(function() {
          var and__3546__auto____14204 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____14204)) {
            var and__3546__auto____14207 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____14207)) {
              var and__3546__auto____14210 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____14210)) {
                var and__3546__auto____14211 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____14211)) {
                  var and__3546__auto____14214 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____14214)) {
                    var and__3546__auto____14215 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____14215)) {
                      var and__3546__auto____14216 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____14216)) {
                        var and__3546__auto____14219 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____14219)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____14219
                        }
                      }else {
                        return and__3546__auto____14216
                      }
                    }else {
                      return and__3546__auto____14215
                    }
                  }else {
                    return and__3546__auto____14214
                  }
                }else {
                  return and__3546__auto____14211
                }
              }else {
                return and__3546__auto____14210
              }
            }else {
              return and__3546__auto____14207
            }
          }else {
            return and__3546__auto____14204
          }
        }())
      };
      var ep3__4 = function() {
        var G__14480__delegate = function(x, y, z, args) {
          return cljs.core.boolean$(function() {
            var and__3546__auto____14226 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____14226)) {
              return cljs.core.every_QMARK_(function(p1__14078_SHARP_) {
                var and__3546__auto____14231 = p1.call(null, p1__14078_SHARP_);
                if(cljs.core.truth_(and__3546__auto____14231)) {
                  var and__3546__auto____14234 = p2.call(null, p1__14078_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____14234)) {
                    return p3.call(null, p1__14078_SHARP_)
                  }else {
                    return and__3546__auto____14234
                  }
                }else {
                  return and__3546__auto____14231
                }
              }, args)
            }else {
              return and__3546__auto____14226
            }
          }())
        };
        var G__14480 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14480__delegate.call(this, x, y, z, args)
        };
        G__14480.cljs$lang$maxFixedArity = 3;
        G__14480.cljs$lang$applyTo = function(arglist__14485) {
          var x = cljs.core.first(arglist__14485);
          var y = cljs.core.first(cljs.core.next(arglist__14485));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14485)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14485)));
          return G__14480__delegate.call(this, x, y, z, args)
        };
        return G__14480
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__0.call(this);
          case 1:
            return ep3__1.call(this, x);
          case 2:
            return ep3__2.call(this, x, y);
          case 3:
            return ep3__3.call(this, x, y, z);
          default:
            return ep3__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
      ep3.__0 = ep3__0;
      ep3.__1 = ep3__1;
      ep3.__2 = ep3__2;
      ep3.__3 = ep3__3;
      ep3.__4 = ep3__4;
      return ep3
    }()
  };
  var every_pred__4 = function() {
    var G__14486__delegate = function(p1, p2, p3, ps) {
      var ps__14239 = cljs.core.list_STAR_.__4(p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__0 = function() {
          return true
        };
        var epn__1 = function(x) {
          return cljs.core.every_QMARK_(function(p1__14079_SHARP_) {
            return p1__14079_SHARP_.call(null, x)
          }, ps__14239)
        };
        var epn__2 = function(x, y) {
          return cljs.core.every_QMARK_(function(p1__14081_SHARP_) {
            var and__3546__auto____14243 = p1__14081_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____14243)) {
              return p1__14081_SHARP_.call(null, y)
            }else {
              return and__3546__auto____14243
            }
          }, ps__14239)
        };
        var epn__3 = function(x, y, z) {
          return cljs.core.every_QMARK_(function(p1__14083_SHARP_) {
            var and__3546__auto____14340 = p1__14083_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____14340)) {
              var and__3546__auto____14342 = p1__14083_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____14342)) {
                return p1__14083_SHARP_.call(null, z)
              }else {
                return and__3546__auto____14342
              }
            }else {
              return and__3546__auto____14340
            }
          }, ps__14239)
        };
        var epn__4 = function() {
          var G__14494__delegate = function(x, y, z, args) {
            return cljs.core.boolean$(function() {
              var and__3546__auto____14345 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____14345)) {
                return cljs.core.every_QMARK_(function(p1__14084_SHARP_) {
                  return cljs.core.every_QMARK_(p1__14084_SHARP_, args)
                }, ps__14239)
              }else {
                return and__3546__auto____14345
              }
            }())
          };
          var G__14494 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__14494__delegate.call(this, x, y, z, args)
          };
          G__14494.cljs$lang$maxFixedArity = 3;
          G__14494.cljs$lang$applyTo = function(arglist__14498) {
            var x = cljs.core.first(arglist__14498);
            var y = cljs.core.first(cljs.core.next(arglist__14498));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14498)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14498)));
            return G__14494__delegate.call(this, x, y, z, args)
          };
          return G__14494
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__0.call(this);
            case 1:
              return epn__1.call(this, x);
            case 2:
              return epn__2.call(this, x, y);
            case 3:
              return epn__3.call(this, x, y, z);
            default:
              return epn__4.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
        epn.__0 = epn__0;
        epn.__1 = epn__1;
        epn.__2 = epn__2;
        epn.__3 = epn__3;
        epn.__4 = epn__4;
        return epn
      }()
    };
    var G__14486 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__14486__delegate.call(this, p1, p2, p3, ps)
    };
    G__14486.cljs$lang$maxFixedArity = 3;
    G__14486.cljs$lang$applyTo = function(arglist__14500) {
      var p1 = cljs.core.first(arglist__14500);
      var p2 = cljs.core.first(cljs.core.next(arglist__14500));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14500)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14500)));
      return G__14486__delegate.call(this, p1, p2, p3, ps)
    };
    return G__14486
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__1.call(this, p1);
      case 2:
        return every_pred__2.call(this, p1, p2);
      case 3:
        return every_pred__3.call(this, p1, p2, p3);
      default:
        return every_pred__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
  every_pred.__1 = every_pred__1;
  every_pred.__2 = every_pred__2;
  every_pred.__3 = every_pred__3;
  every_pred.__4 = every_pred__4;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__1 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__0 = function() {
        return null
      };
      var sp1__1 = function(x) {
        return p.call(null, x)
      };
      var sp1__2 = function(x, y) {
        var or__3548__auto____14506 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14506)) {
          return or__3548__auto____14506
        }else {
          return p.call(null, y)
        }
      };
      var sp1__3 = function(x, y, z) {
        var or__3548__auto____14509 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14509)) {
          return or__3548__auto____14509
        }else {
          var or__3548__auto____14510 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____14510)) {
            return or__3548__auto____14510
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__4 = function() {
        var G__14688__delegate = function(x, y, z, args) {
          var or__3548__auto____14512 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____14512)) {
            return or__3548__auto____14512
          }else {
            return cljs.core.some(p, args)
          }
        };
        var G__14688 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14688__delegate.call(this, x, y, z, args)
        };
        G__14688.cljs$lang$maxFixedArity = 3;
        G__14688.cljs$lang$applyTo = function(arglist__14690) {
          var x = cljs.core.first(arglist__14690);
          var y = cljs.core.first(cljs.core.next(arglist__14690));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14690)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14690)));
          return G__14688__delegate.call(this, x, y, z, args)
        };
        return G__14688
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__0.call(this);
          case 1:
            return sp1__1.call(this, x);
          case 2:
            return sp1__2.call(this, x, y);
          case 3:
            return sp1__3.call(this, x, y, z);
          default:
            return sp1__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
      sp1.__0 = sp1__0;
      sp1.__1 = sp1__1;
      sp1.__2 = sp1__2;
      sp1.__3 = sp1__3;
      sp1.__4 = sp1__4;
      return sp1
    }()
  };
  var some_fn__2 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__0 = function() {
        return null
      };
      var sp2__1 = function(x) {
        var or__3548__auto____14515 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14515)) {
          return or__3548__auto____14515
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__2 = function(x, y) {
        var or__3548__auto____14516 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14516)) {
          return or__3548__auto____14516
        }else {
          var or__3548__auto____14518 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____14518)) {
            return or__3548__auto____14518
          }else {
            var or__3548__auto____14519 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____14519)) {
              return or__3548__auto____14519
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__3 = function(x, y, z) {
        var or__3548__auto____14522 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14522)) {
          return or__3548__auto____14522
        }else {
          var or__3548__auto____14523 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____14523)) {
            return or__3548__auto____14523
          }else {
            var or__3548__auto____14524 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____14524)) {
              return or__3548__auto____14524
            }else {
              var or__3548__auto____14526 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____14526)) {
                return or__3548__auto____14526
              }else {
                var or__3548__auto____14527 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____14527)) {
                  return or__3548__auto____14527
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__4 = function() {
        var G__14704__delegate = function(x, y, z, args) {
          var or__3548__auto____14529 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____14529)) {
            return or__3548__auto____14529
          }else {
            return cljs.core.some(function(p1__14113_SHARP_) {
              var or__3548__auto____14530 = p1.call(null, p1__14113_SHARP_);
              if(cljs.core.truth_(or__3548__auto____14530)) {
                return or__3548__auto____14530
              }else {
                return p2.call(null, p1__14113_SHARP_)
              }
            }, args)
          }
        };
        var G__14704 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14704__delegate.call(this, x, y, z, args)
        };
        G__14704.cljs$lang$maxFixedArity = 3;
        G__14704.cljs$lang$applyTo = function(arglist__14707) {
          var x = cljs.core.first(arglist__14707);
          var y = cljs.core.first(cljs.core.next(arglist__14707));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14707)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14707)));
          return G__14704__delegate.call(this, x, y, z, args)
        };
        return G__14704
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__0.call(this);
          case 1:
            return sp2__1.call(this, x);
          case 2:
            return sp2__2.call(this, x, y);
          case 3:
            return sp2__3.call(this, x, y, z);
          default:
            return sp2__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
      sp2.__0 = sp2__0;
      sp2.__1 = sp2__1;
      sp2.__2 = sp2__2;
      sp2.__3 = sp2__3;
      sp2.__4 = sp2__4;
      return sp2
    }()
  };
  var some_fn__3 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__0 = function() {
        return null
      };
      var sp3__1 = function(x) {
        var or__3548__auto____14533 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14533)) {
          return or__3548__auto____14533
        }else {
          var or__3548__auto____14535 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____14535)) {
            return or__3548__auto____14535
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__2 = function(x, y) {
        var or__3548__auto____14569 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14569)) {
          return or__3548__auto____14569
        }else {
          var or__3548__auto____14573 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____14573)) {
            return or__3548__auto____14573
          }else {
            var or__3548__auto____14576 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____14576)) {
              return or__3548__auto____14576
            }else {
              var or__3548__auto____14580 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____14580)) {
                return or__3548__auto____14580
              }else {
                var or__3548__auto____14582 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____14582)) {
                  return or__3548__auto____14582
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__3 = function(x, y, z) {
        var or__3548__auto____14585 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____14585)) {
          return or__3548__auto____14585
        }else {
          var or__3548__auto____14587 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____14587)) {
            return or__3548__auto____14587
          }else {
            var or__3548__auto____14588 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____14588)) {
              return or__3548__auto____14588
            }else {
              var or__3548__auto____14589 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____14589)) {
                return or__3548__auto____14589
              }else {
                var or__3548__auto____14613 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____14613)) {
                  return or__3548__auto____14613
                }else {
                  var or__3548__auto____14614 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____14614)) {
                    return or__3548__auto____14614
                  }else {
                    var or__3548__auto____14615 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____14615)) {
                      return or__3548__auto____14615
                    }else {
                      var or__3548__auto____14616 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____14616)) {
                        return or__3548__auto____14616
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
      var sp3__4 = function() {
        var G__14729__delegate = function(x, y, z, args) {
          var or__3548__auto____14617 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____14617)) {
            return or__3548__auto____14617
          }else {
            return cljs.core.some(function(p1__14114_SHARP_) {
              var or__3548__auto____14618 = p1.call(null, p1__14114_SHARP_);
              if(cljs.core.truth_(or__3548__auto____14618)) {
                return or__3548__auto____14618
              }else {
                var or__3548__auto____14619 = p2.call(null, p1__14114_SHARP_);
                if(cljs.core.truth_(or__3548__auto____14619)) {
                  return or__3548__auto____14619
                }else {
                  return p3.call(null, p1__14114_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__14729 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__14729__delegate.call(this, x, y, z, args)
        };
        G__14729.cljs$lang$maxFixedArity = 3;
        G__14729.cljs$lang$applyTo = function(arglist__14734) {
          var x = cljs.core.first(arglist__14734);
          var y = cljs.core.first(cljs.core.next(arglist__14734));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14734)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14734)));
          return G__14729__delegate.call(this, x, y, z, args)
        };
        return G__14729
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__0.call(this);
          case 1:
            return sp3__1.call(this, x);
          case 2:
            return sp3__2.call(this, x, y);
          case 3:
            return sp3__3.call(this, x, y, z);
          default:
            return sp3__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
      sp3.__0 = sp3__0;
      sp3.__1 = sp3__1;
      sp3.__2 = sp3__2;
      sp3.__3 = sp3__3;
      sp3.__4 = sp3__4;
      return sp3
    }()
  };
  var some_fn__4 = function() {
    var G__14737__delegate = function(p1, p2, p3, ps) {
      var ps__14622 = cljs.core.list_STAR_.__4(p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__0 = function() {
          return null
        };
        var spn__1 = function(x) {
          return cljs.core.some(function(p1__14115_SHARP_) {
            return p1__14115_SHARP_.call(null, x)
          }, ps__14622)
        };
        var spn__2 = function(x, y) {
          return cljs.core.some(function(p1__14117_SHARP_) {
            var or__3548__auto____14623 = p1__14117_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____14623)) {
              return or__3548__auto____14623
            }else {
              return p1__14117_SHARP_.call(null, y)
            }
          }, ps__14622)
        };
        var spn__3 = function(x, y, z) {
          return cljs.core.some(function(p1__14120_SHARP_) {
            var or__3548__auto____14624 = p1__14120_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____14624)) {
              return or__3548__auto____14624
            }else {
              var or__3548__auto____14625 = p1__14120_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____14625)) {
                return or__3548__auto____14625
              }else {
                return p1__14120_SHARP_.call(null, z)
              }
            }
          }, ps__14622)
        };
        var spn__4 = function() {
          var G__14746__delegate = function(x, y, z, args) {
            var or__3548__auto____14626 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____14626)) {
              return or__3548__auto____14626
            }else {
              return cljs.core.some(function(p1__14123_SHARP_) {
                return cljs.core.some(p1__14123_SHARP_, args)
              }, ps__14622)
            }
          };
          var G__14746 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__14746__delegate.call(this, x, y, z, args)
          };
          G__14746.cljs$lang$maxFixedArity = 3;
          G__14746.cljs$lang$applyTo = function(arglist__14750) {
            var x = cljs.core.first(arglist__14750);
            var y = cljs.core.first(cljs.core.next(arglist__14750));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14750)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14750)));
            return G__14746__delegate.call(this, x, y, z, args)
          };
          return G__14746
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__0.call(this);
            case 1:
              return spn__1.call(this, x);
            case 2:
              return spn__2.call(this, x, y);
            case 3:
              return spn__3.call(this, x, y, z);
            default:
              return spn__4.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
        spn.__0 = spn__0;
        spn.__1 = spn__1;
        spn.__2 = spn__2;
        spn.__3 = spn__3;
        spn.__4 = spn__4;
        return spn
      }()
    };
    var G__14737 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__14737__delegate.call(this, p1, p2, p3, ps)
    };
    G__14737.cljs$lang$maxFixedArity = 3;
    G__14737.cljs$lang$applyTo = function(arglist__14751) {
      var p1 = cljs.core.first(arglist__14751);
      var p2 = cljs.core.first(cljs.core.next(arglist__14751));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14751)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14751)));
      return G__14737__delegate.call(this, p1, p2, p3, ps)
    };
    return G__14737
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__1.call(this, p1);
      case 2:
        return some_fn__2.call(this, p1, p2);
      case 3:
        return some_fn__3.call(this, p1, p2, p3);
      default:
        return some_fn__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
  some_fn.__1 = some_fn__1;
  some_fn.__2 = some_fn__2;
  some_fn.__3 = some_fn__3;
  some_fn.__4 = some_fn__4;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____14755 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____14755)) {
        var s__14756 = temp__3698__auto____14755;
        return cljs.core.cons(f.call(null, cljs.core.first(s__14756)), map.call(null, f, cljs.core.rest(s__14756)))
      }else {
        return null
      }
    })
  };
  var map__3 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__14763 = cljs.core.seq(c1);
      var s2__14764 = cljs.core.seq(c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____14766 = s1__14763;
        if(cljs.core.truth_(and__3546__auto____14766)) {
          return s2__14764
        }else {
          return and__3546__auto____14766
        }
      }())) {
        return cljs.core.cons(f.call(null, cljs.core.first(s1__14763), cljs.core.first(s2__14764)), map.call(null, f, cljs.core.rest(s1__14763), cljs.core.rest(s2__14764)))
      }else {
        return null
      }
    })
  };
  var map__4 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__14775 = cljs.core.seq(c1);
      var s2__14776 = cljs.core.seq(c2);
      var s3__14777 = cljs.core.seq(c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____14778 = s1__14775;
        if(cljs.core.truth_(and__3546__auto____14778)) {
          var and__3546__auto____14779 = s2__14776;
          if(cljs.core.truth_(and__3546__auto____14779)) {
            return s3__14777
          }else {
            return and__3546__auto____14779
          }
        }else {
          return and__3546__auto____14778
        }
      }())) {
        return cljs.core.cons(f.call(null, cljs.core.first(s1__14775), cljs.core.first(s2__14776), cljs.core.first(s3__14777)), map.call(null, f, cljs.core.rest(s1__14775), cljs.core.rest(s2__14776), cljs.core.rest(s3__14777)))
      }else {
        return null
      }
    })
  };
  var map__5 = function() {
    var G__14820__delegate = function(f, c1, c2, c3, colls) {
      var step__14808 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__14781 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.every_QMARK_(cljs.core.identity, ss__14781)) {
            return cljs.core.cons(map.call(null, cljs.core.first, ss__14781), step.call(null, map.call(null, cljs.core.rest, ss__14781)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__14502_SHARP_) {
        return cljs.core.apply.__2(f, p1__14502_SHARP_)
      }, step__14808.call(null, cljs.core.conj(colls, c3, c2, c1)))
    };
    var G__14820 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__14820__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__14820.cljs$lang$maxFixedArity = 4;
    G__14820.cljs$lang$applyTo = function(arglist__14822) {
      var f = cljs.core.first(arglist__14822);
      var c1 = cljs.core.first(cljs.core.next(arglist__14822));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14822)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
      return G__14820__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__14820
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__2.call(this, f, c1);
      case 3:
        return map__3.call(this, f, c1, c2);
      case 4:
        return map__4.call(this, f, c1, c2, c3);
      default:
        return map__5.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
  map.__2 = map__2;
  map.__3 = map__3;
  map.__4 = map__4;
  map.__5 = map__5;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(n > 0) {
      var temp__3698__auto____14823 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____14823)) {
        var s__14824 = temp__3698__auto____14823;
        return cljs.core.cons(cljs.core.first(s__14824), take.call(null, n - 1, cljs.core.rest(s__14824)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__14829 = function(n, coll) {
    while(true) {
      var s__14827 = cljs.core.seq(coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____14828 = n > 0;
        if(and__3546__auto____14828) {
          return s__14827
        }else {
          return and__3546__auto____14828
        }
      }())) {
        var G__14835 = n - 1;
        var G__14836 = cljs.core.rest(s__14827);
        n = G__14835;
        coll = G__14836;
        continue
      }else {
        return s__14827
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__14829.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__1 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__2 = function(n, s) {
    return cljs.core.map.__3(function(x, _) {
      return x
    }, s, cljs.core.drop(n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__1.call(this, n);
      case 2:
        return drop_last__2.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  drop_last.__1 = drop_last__1;
  drop_last.__2 = drop_last__2;
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__14842 = cljs.core.seq(coll);
  var lead__14843 = cljs.core.seq(cljs.core.drop(n, coll));
  while(true) {
    if(cljs.core.truth_(lead__14843)) {
      var G__14848 = cljs.core.next(s__14842);
      var G__14849 = cljs.core.next(lead__14843);
      s__14842 = G__14848;
      lead__14843 = G__14849;
      continue
    }else {
      return s__14842
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__14855 = function(pred, coll) {
    while(true) {
      var s__14852 = cljs.core.seq(coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____14853 = s__14852;
        if(cljs.core.truth_(and__3546__auto____14853)) {
          return pred.call(null, cljs.core.first(s__14852))
        }else {
          return and__3546__auto____14853
        }
      }())) {
        var G__14860 = pred;
        var G__14861 = cljs.core.rest(s__14852);
        pred = G__14860;
        coll = G__14861;
        continue
      }else {
        return s__14852
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__14855.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____14906 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____14906)) {
      var s__14907 = temp__3698__auto____14906;
      return cljs.core.concat.__2(s__14907, cycle.call(null, s__14907))
    }else {
      return null
    }
  })
};
cljs.core.split_at = function split_at(n, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take(n, coll), cljs.core.drop(n, coll)])
};
cljs.core.repeat = function() {
  var repeat = null;
  var repeat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons(x, repeat.call(null, x))
    })
  };
  var repeat__2 = function(n, x) {
    return cljs.core.take(n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__1.call(this, n);
      case 2:
        return repeat__2.call(this, n, x)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeat.__1 = repeat__1;
  repeat.__2 = repeat__2;
  return repeat
}();
cljs.core.replicate = function replicate(n, x) {
  return cljs.core.take(n, cljs.core.repeat.__1(x))
};
cljs.core.repeatedly = function() {
  var repeatedly = null;
  var repeatedly__1 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons(f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__2 = function(n, f) {
    return cljs.core.take(n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__1.call(this, n);
      case 2:
        return repeatedly__2.call(this, n, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeatedly.__1 = repeatedly__1;
  repeatedly.__2 = repeatedly__2;
  return repeatedly
}();
cljs.core.iterate = function iterate(f, x) {
  return cljs.core.cons(x, new cljs.core.LazySeq(null, false, function() {
    return iterate.call(null, f, f.call(null, x))
  }))
};
cljs.core.interleave = function() {
  var interleave = null;
  var interleave__2 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__14934 = cljs.core.seq(c1);
      var s2__14935 = cljs.core.seq(c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____14936 = s1__14934;
        if(cljs.core.truth_(and__3546__auto____14936)) {
          return s2__14935
        }else {
          return and__3546__auto____14936
        }
      }())) {
        return cljs.core.cons(cljs.core.first(s1__14934), cljs.core.cons(cljs.core.first(s2__14935), interleave.call(null, cljs.core.rest(s1__14934), cljs.core.rest(s2__14935))))
      }else {
        return null
      }
    })
  };
  var interleave__3 = function() {
    var G__14949__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__14941 = cljs.core.map.__2(cljs.core.seq, cljs.core.conj(colls, c2, c1));
        if(cljs.core.every_QMARK_(cljs.core.identity, ss__14941)) {
          return cljs.core.concat.__2(cljs.core.map.__2(cljs.core.first, ss__14941), cljs.core.apply.__2(interleave, cljs.core.map.__2(cljs.core.rest, ss__14941)))
        }else {
          return null
        }
      })
    };
    var G__14949 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__14949__delegate.call(this, c1, c2, colls)
    };
    G__14949.cljs$lang$maxFixedArity = 2;
    G__14949.cljs$lang$applyTo = function(arglist__14951) {
      var c1 = cljs.core.first(arglist__14951);
      var c2 = cljs.core.first(cljs.core.next(arglist__14951));
      var colls = cljs.core.rest(cljs.core.next(arglist__14951));
      return G__14949__delegate.call(this, c1, c2, colls)
    };
    return G__14949
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__2.call(this, c1, c2);
      default:
        return interleave__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
  interleave.__2 = interleave__2;
  interleave.__3 = interleave__3;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop(1, cljs.core.interleave.__2(cljs.core.repeat.__1(sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__14999 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____14997 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3695__auto____14997)) {
        var coll__14998 = temp__3695__auto____14997;
        return cljs.core.cons(cljs.core.first(coll__14998), cat.call(null, cljs.core.rest(coll__14998), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq(colls))) {
          return cat.call(null, cljs.core.first(colls), cljs.core.rest(colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__14999.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__2 = function(f, coll) {
    return cljs.core.flatten1(cljs.core.map.__2(f, coll))
  };
  var mapcat__3 = function() {
    var G__15086__delegate = function(f, coll, colls) {
      return cljs.core.flatten1(cljs.core.apply.__4(cljs.core.map, f, coll, colls))
    };
    var G__15086 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__15086__delegate.call(this, f, coll, colls)
    };
    G__15086.cljs$lang$maxFixedArity = 2;
    G__15086.cljs$lang$applyTo = function(arglist__15089) {
      var f = cljs.core.first(arglist__15089);
      var coll = cljs.core.first(cljs.core.next(arglist__15089));
      var colls = cljs.core.rest(cljs.core.next(arglist__15089));
      return G__15086__delegate.call(this, f, coll, colls)
    };
    return G__15086
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__2.call(this, f, coll);
      default:
        return mapcat__3.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
  mapcat.__2 = mapcat__2;
  mapcat.__3 = mapcat__3;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____15144 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____15144)) {
      var s__15145 = temp__3698__auto____15144;
      var f__15147 = cljs.core.first(s__15145);
      var r__15148 = cljs.core.rest(s__15145);
      if(cljs.core.truth_(pred.call(null, f__15147))) {
        return cljs.core.cons(f__15147, filter.call(null, pred, r__15148))
      }else {
        return filter.call(null, pred, r__15148)
      }
    }else {
      return null
    }
  })
};
cljs.core.remove = function remove(pred, coll) {
  return cljs.core.filter(cljs.core.complement(pred), coll)
};
cljs.core.tree_seq = function tree_seq(branch_QMARK_, children, root) {
  var walk__15175 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons(node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.__2(walk, children.call(null, node)) : null)
    })
  };
  return walk__15175.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter(function(p1__15161_SHARP_) {
    return cljs.core.not(cljs.core.sequential_QMARK_(p1__15161_SHARP_))
  }, cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.__3(cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__2 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____15197 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____15197)) {
        var s__15198 = temp__3698__auto____15197;
        var p__15202 = cljs.core.take(n, s__15198);
        if(cljs.core._EQ_.__2(n, cljs.core.count(p__15202))) {
          return cljs.core.cons(p__15202, partition.call(null, n, step, cljs.core.drop(step, s__15198)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__4 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____15210 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____15210)) {
        var s__15213 = temp__3698__auto____15210;
        var p__15214 = cljs.core.take(n, s__15213);
        if(cljs.core._EQ_.__2(n, cljs.core.count(p__15214))) {
          return cljs.core.cons(p__15214, partition.call(null, n, step, pad, cljs.core.drop(step, s__15213)))
        }else {
          return cljs.core.list(cljs.core.take(n, cljs.core.concat.__2(p__15214, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__2.call(this, n, step);
      case 3:
        return partition__3.call(this, n, step, pad);
      case 4:
        return partition__4.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition.__2 = partition__2;
  partition.__3 = partition__3;
  partition.__4 = partition__4;
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__2 = function(m, ks) {
    return cljs.core.reduce.__3(cljs.core.get, m, ks)
  };
  var get_in__3 = function(m, ks, not_found) {
    var sentinel__15227 = cljs.core.lookup_sentinel;
    var m__15228 = m;
    var ks__15229 = cljs.core.seq(ks);
    while(true) {
      if(cljs.core.truth_(ks__15229)) {
        var m__15231 = cljs.core.get.__3(m__15228, cljs.core.first(ks__15229), sentinel__15227);
        if(sentinel__15227 === m__15231) {
          return not_found
        }else {
          var G__15374 = sentinel__15227;
          var G__15375 = m__15231;
          var G__15376 = cljs.core.next(ks__15229);
          sentinel__15227 = G__15374;
          m__15228 = G__15375;
          ks__15229 = G__15376;
          continue
        }
      }else {
        return m__15228
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__2.call(this, m, ks);
      case 3:
        return get_in__3.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get_in.__2 = get_in__2;
  get_in.__3 = get_in__3;
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__15380, v) {
  var vec__15381__15383 = p__15380;
  var k__15384 = cljs.core.nth.__3(vec__15381__15383, 0, null);
  var ks__15385 = cljs.core.nthnext(vec__15381__15383, 1);
  if(cljs.core.truth_(ks__15385)) {
    return cljs.core.assoc.__3(m, k__15384, assoc_in.call(null, cljs.core.get.__2(m, k__15384), ks__15385, v))
  }else {
    return cljs.core.assoc.__3(m, k__15384, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__15394, f, args) {
    var vec__15395__15396 = p__15394;
    var k__15397 = cljs.core.nth.__3(vec__15395__15396, 0, null);
    var ks__15398 = cljs.core.nthnext(vec__15395__15396, 1);
    if(cljs.core.truth_(ks__15398)) {
      return cljs.core.assoc.__3(m, k__15397, cljs.core.apply.__5(update_in, cljs.core.get.__2(m, k__15397), ks__15398, f, args))
    }else {
      return cljs.core.assoc.__3(m, k__15397, cljs.core.apply.__3(f, cljs.core.get.__2(m, k__15397), args))
    }
  };
  var update_in = function(m, p__15394, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__15394, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__15407) {
    var m = cljs.core.first(arglist__15407);
    var p__15394 = cljs.core.first(cljs.core.next(arglist__15407));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15407)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15407)));
    return update_in__delegate.call(this, m, p__15394, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__15416 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__2 = function(coll, k) {
  var this__15420 = this;
  return cljs.core._nth.__3(coll, k, null)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__3 = function(coll, k, not_found) {
  var this__15422 = this;
  return cljs.core._nth.__3(coll, k, not_found)
};
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc__3 = function(coll, k, v) {
  var this__15424 = this;
  var new_array__15427 = cljs.core.aclone(this__15424.array);
  new_array__15427[k] = v;
  return new cljs.core.Vector(this__15424.meta, new_array__15427)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = function() {
  var G__15513 = null;
  var G__15513__2 = function(tsym15429, k) {
    var this__15432 = this;
    var tsym15429__15434 = this;
    var coll__15435 = tsym15429__15434;
    return cljs.core._lookup.__2(coll__15435, k)
  };
  var G__15513__3 = function(tsym15431, k, not_found) {
    var this__15437 = this;
    var tsym15431__15438 = this;
    var coll__15440 = tsym15431__15438;
    return cljs.core._lookup.__3(coll__15440, k, not_found)
  };
  G__15513 = function(tsym15431, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__15513__2.call(this, tsym15431, k);
      case 3:
        return G__15513__3.call(this, tsym15431, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__15513
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__15445 = this;
  var new_array__15448 = cljs.core.aclone(this__15445.array);
  new_array__15448.push(o);
  return new cljs.core.Vector(this__15445.meta, new_array__15448)
};
cljs.core.Vector.prototype.toString = function() {
  var this__15452 = this;
  var this$__15454 = this;
  return cljs.core.pr_str(this$__15454)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__2 = function(v, f) {
  var this__15455 = this;
  return cljs.core.ci_reduce.__2(this__15455.array, f)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__3 = function(v, f, start) {
  var this__15469 = this;
  return cljs.core.ci_reduce.__3(this__15469.array, f, start)
};
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__15470 = this;
  if(this__15470.array.length > 0) {
    var vector_seq__15475 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < this__15470.array.length) {
          return cljs.core.cons(this__15470.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__15475.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__15476 = this;
  return this__15476.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__15477 = this;
  var count__15478 = this__15477.array.length;
  if(count__15478 > 0) {
    return this__15477.array[count__15478 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__15480 = this;
  if(this__15480.array.length > 0) {
    var new_array__15482 = cljs.core.aclone(this__15480.array);
    new_array__15482.pop();
    return new cljs.core.Vector(this__15480.meta, new_array__15482)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n__3 = function(coll, n, val) {
  var this__15484 = this;
  return cljs.core._assoc(coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__15487 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__15490 = this;
  return new cljs.core.Vector(meta, this__15490.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__15494 = this;
  return this__15494.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__2 = function(coll, n) {
  var this__15502 = this;
  if(function() {
    var and__3546__auto____15504 = 0 <= n;
    if(and__3546__auto____15504) {
      return n < this__15502.array.length
    }else {
      return and__3546__auto____15504
    }
  }()) {
    return this__15502.array[n]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__3 = function(coll, n, not_found) {
  var this__15505 = this;
  if(function() {
    var and__3546__auto____15506 = 0 <= n;
    if(and__3546__auto____15506) {
      return n < this__15505.array.length
    }else {
      return and__3546__auto____15506
    }
  }()) {
    return this__15505.array[n]
  }else {
    return not_found
  }
};
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__15498 = this;
  return cljs.core.with_meta(cljs.core.Vector.EMPTY, this__15498.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, []);
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.tail_off = function tail_off(pv) {
  var cnt__15633 = pv.cnt;
  if(cnt__15633 < 32) {
    return 0
  }else {
    return cnt__15633 - 1 >> 5 << 5
  }
};
cljs.core.new_path = function new_path(level, node) {
  var ll__15638 = level;
  var ret__15639 = node;
  while(true) {
    if(ll__15638 === 0) {
      return ret__15639
    }else {
      var embed__15640 = ret__15639;
      var r__15642 = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE);
      var ___15643 = r__15642[0] = embed__15640;
      var G__15647 = ll__15638 - 5;
      var G__15648 = r__15642;
      ll__15638 = G__15647;
      ret__15639 = G__15648;
      continue
    }
    break
  }
};
cljs.core.push_tail = function push_tail(pv, level, parent, tailnode) {
  var ret__15650 = cljs.core.aclone(parent);
  var subidx__15652 = pv.cnt - 1 >> level & 31;
  if(5 === level) {
    ret__15650[subidx__15652] = tailnode;
    return ret__15650
  }else {
    var temp__3695__auto____15654 = parent[subidx__15652];
    if(cljs.core.truth_(temp__3695__auto____15654)) {
      var child__15655 = temp__3695__auto____15654;
      var node_to_insert__15657 = push_tail.call(null, pv, level - 5, child__15655, tailnode);
      var ___15658 = ret__15650[subidx__15652] = node_to_insert__15657;
      return ret__15650
    }else {
      var node_to_insert__15660 = cljs.core.new_path(level - 5, tailnode);
      var ___15661 = ret__15650[subidx__15652] = node_to_insert__15660;
      return ret__15650
    }
  }
};
cljs.core.array_for = function array_for(pv, i) {
  if(function() {
    var and__3546__auto____15666 = 0 <= i;
    if(and__3546__auto____15666) {
      return i < pv.cnt
    }else {
      return and__3546__auto____15666
    }
  }()) {
    if(i >= cljs.core.tail_off(pv)) {
      return pv.tail
    }else {
      var node__15670 = pv.root;
      var level__15671 = pv.shift;
      while(true) {
        if(level__15671 > 0) {
          var G__15680 = node__15670[i >> level__15671 & 31];
          var G__15681 = level__15671 - 5;
          node__15670 = G__15680;
          level__15671 = G__15681;
          continue
        }else {
          return node__15670
        }
        break
      }
    }
  }else {
    throw new Error(cljs.core.str("No item ", i, " in vector of length ", pv.cnt));
  }
};
cljs.core.do_assoc = function do_assoc(pv, level, node, i, val) {
  var ret__15684 = cljs.core.aclone(node);
  if(level === 0) {
    ret__15684[i & 31] = val;
    return ret__15684
  }else {
    var subidx__15687 = i >> level & 31;
    var ___15689 = ret__15684[subidx__15687] = do_assoc.call(null, pv, level - 5, node[subidx__15687], i, val);
    return ret__15684
  }
};
cljs.core.pop_tail = function pop_tail(pv, level, node) {
  var subidx__15699 = pv.cnt - 2 >> level & 31;
  if(level > 5) {
    var new_child__15700 = pop_tail.call(null, pv, level - 5, node[subidx__15699]);
    if(function() {
      var and__3546__auto____15701 = new_child__15700 === null;
      if(and__3546__auto____15701) {
        return subidx__15699 === 0
      }else {
        return and__3546__auto____15701
      }
    }()) {
      return null
    }else {
      var ret__15702 = cljs.core.aclone(node);
      var ___15703 = ret__15702[subidx__15699] = new_child__15700;
      return ret__15702
    }
  }else {
    if(subidx__15699 === 0) {
      return null
    }else {
      if("\ufdd0'else") {
        var ret__15704 = cljs.core.aclone(node);
        var ___15705 = ret__15704[subidx__15699] = null;
        return ret__15704
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentVector = function(meta, cnt, shift, root, tail) {
  this.meta = meta;
  this.cnt = cnt;
  this.shift = shift;
  this.root = root;
  this.tail = tail
};
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__15769 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__2 = function(coll, k) {
  var this__15772 = this;
  return cljs.core._nth.__3(coll, k, null)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__3 = function(coll, k, not_found) {
  var this__15774 = this;
  return cljs.core._nth.__3(coll, k, not_found)
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc__3 = function(coll, k, v) {
  var this__15775 = this;
  if(function() {
    var and__3546__auto____15776 = 0 <= k;
    if(and__3546__auto____15776) {
      return k < this__15775.cnt
    }else {
      return and__3546__auto____15776
    }
  }()) {
    if(cljs.core.tail_off(coll) <= k) {
      var new_tail__15778 = cljs.core.aclone(this__15775.tail);
      new_tail__15778[k & 31] = v;
      return new cljs.core.PersistentVector(this__15775.meta, this__15775.cnt, this__15775.shift, this__15775.root, new_tail__15778)
    }else {
      return new cljs.core.PersistentVector(this__15775.meta, this__15775.cnt, this__15775.shift, cljs.core.do_assoc(coll, this__15775.shift, this__15775.root, k, v), this__15775.tail)
    }
  }else {
    if(k === this__15775.cnt) {
      return cljs.core._conj(coll, v)
    }else {
      if("\ufdd0'else") {
        throw new Error(cljs.core.str("Index ", k, " out of bounds  [0,", this__15775.cnt, "]"));
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = function() {
  var G__15944 = null;
  var G__15944__2 = function(tsym15779, k) {
    var this__15781 = this;
    var tsym15779__15782 = this;
    var coll__15783 = tsym15779__15782;
    return cljs.core._lookup.__2(coll__15783, k)
  };
  var G__15944__3 = function(tsym15780, k, not_found) {
    var this__15784 = this;
    var tsym15780__15785 = this;
    var coll__15786 = tsym15780__15785;
    return cljs.core._lookup.__3(coll__15786, k, not_found)
  };
  G__15944 = function(tsym15780, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__15944__2.call(this, tsym15780, k);
      case 3:
        return G__15944__3.call(this, tsym15780, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__15944
}();
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__15787 = this;
  if(this__15787.cnt - cljs.core.tail_off(coll) < 32) {
    var new_tail__15788 = cljs.core.aclone(this__15787.tail);
    new_tail__15788.push(o);
    return new cljs.core.PersistentVector(this__15787.meta, this__15787.cnt + 1, this__15787.shift, this__15787.root, new_tail__15788)
  }else {
    var root_overflow_QMARK___15789 = this__15787.cnt >> 5 > 1 << this__15787.shift;
    var new_shift__15790 = root_overflow_QMARK___15789 ? this__15787.shift + 5 : this__15787.shift;
    var new_root__15792 = root_overflow_QMARK___15789 ? function() {
      var n_r__15791 = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE);
      n_r__15791[0] = this__15787.root;
      n_r__15791[1] = cljs.core.new_path(this__15787.shift, this__15787.tail);
      return n_r__15791
    }() : cljs.core.push_tail(coll, this__15787.shift, this__15787.root, this__15787.tail);
    return new cljs.core.PersistentVector(this__15787.meta, this__15787.cnt + 1, new_shift__15790, new_root__15792, [o])
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key__1 = function(coll) {
  var this__15793 = this;
  return cljs.core._nth.__2(coll, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val__1 = function(coll) {
  var this__15794 = this;
  return cljs.core._nth.__2(coll, 1)
};
cljs.core.PersistentVector.prototype.toString = function() {
  var this__15795 = this;
  var this$__15796 = this;
  return cljs.core.pr_str(this$__15796)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__2 = function(v, f) {
  var this__15797 = this;
  return cljs.core.ci_reduce.__2(v, f)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__3 = function(v, f, start) {
  var this__15798 = this;
  return cljs.core.ci_reduce.__3(v, f, start)
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__15800 = this;
  if(this__15800.cnt > 0) {
    var vector_seq__15804 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < this__15800.cnt) {
          return cljs.core.cons(cljs.core._nth.__2(coll, i), vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__15804.call(null, 0)
  }else {
    return null
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__15805 = this;
  return this__15805.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__15808 = this;
  if(this__15808.cnt > 0) {
    return cljs.core._nth.__2(coll, this__15808.cnt - 1)
  }else {
    return null
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__15843 = this;
  if(this__15843.cnt === 0) {
    throw new Error("Can't pop empty vector");
  }else {
    if(1 === this__15843.cnt) {
      return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this__15843.meta)
    }else {
      if(1 < this__15843.cnt - cljs.core.tail_off(coll)) {
        return new cljs.core.PersistentVector(this__15843.meta, this__15843.cnt - 1, this__15843.shift, this__15843.root, cljs.core.aclone(this__15843.tail))
      }else {
        if("\ufdd0'else") {
          var new_tail__15844 = cljs.core.array_for(coll, this__15843.cnt - 2);
          var nr__15846 = cljs.core.pop_tail(this__15843.shift, this__15843.root);
          var new_root__15921 = nr__15846 === null ? cljs.core.PersistentVector.EMPTY_NODE : nr__15846;
          var cnt_1__15922 = this__15843.cnt - 1;
          if(function() {
            var and__3546__auto____15925 = 5 < this__15843.shift;
            if(and__3546__auto____15925) {
              return new_root__15921[1] === null
            }else {
              return and__3546__auto____15925
            }
          }()) {
            return new cljs.core.PersistentVector(this__15843.meta, cnt_1__15922, this__15843.shift - 5, new_root__15921[0], new_tail__15844)
          }else {
            return new cljs.core.PersistentVector(this__15843.meta, cnt_1__15922, this__15843.shift, new_root__15921, new_tail__15844)
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n__3 = function(coll, n, val) {
  var this__15928 = this;
  return cljs.core._assoc(coll, n, val)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__15929 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__15930 = this;
  return new cljs.core.PersistentVector(meta, this__15930.cnt, this__15930.shift, this__15930.root, this__15930.tail)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__15932 = this;
  return this__15932.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__2 = function(coll, n) {
  var this__15933 = this;
  return cljs.core.array_for(coll, n)[n & 31]
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__3 = function(coll, n, not_found) {
  var this__15935 = this;
  if(function() {
    var and__3546__auto____15936 = 0 <= n;
    if(and__3546__auto____15936) {
      return n < this__15935.cnt
    }else {
      return and__3546__auto____15936
    }
  }()) {
    return cljs.core._nth.__2(coll, n)
  }else {
    return not_found
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__15931 = this;
  return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY, this__15931.meta)
};
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.make_array(32);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, []);
cljs.core.PersistentVector.fromArray = function(xs) {
  return cljs.core.into(cljs.core.PersistentVector.EMPTY, xs)
};
cljs.core.vec = function vec(coll) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.PersistentVector.EMPTY, coll)
};
cljs.core.vector = function() {
  var vector__delegate = function(args) {
    return cljs.core.vec(args)
  };
  var vector = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return vector__delegate.call(this, args)
  };
  vector.cljs$lang$maxFixedArity = 0;
  vector.cljs$lang$applyTo = function(arglist__16145) {
    var args = cljs.core.seq(arglist__16145);
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__16149 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__2 = function(coll, k) {
  var this__16151 = this;
  return cljs.core._nth.__3(coll, k, null)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__3 = function(coll, k, not_found) {
  var this__16152 = this;
  return cljs.core._nth.__3(coll, k, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc__3 = function(coll, key, val) {
  var this__16153 = this;
  var v_pos__16156 = this__16153.start + key;
  return new cljs.core.Subvec(this__16153.meta, cljs.core._assoc(this__16153.v, v_pos__16156, val), this__16153.start, this__16153.end > v_pos__16156 + 1 ? this__16153.end : v_pos__16156 + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = function() {
  var G__16268 = null;
  var G__16268__2 = function(tsym16158, k) {
    var this__16160 = this;
    var tsym16158__16162 = this;
    var coll__16163 = tsym16158__16162;
    return cljs.core._lookup.__2(coll__16163, k)
  };
  var G__16268__3 = function(tsym16159, k, not_found) {
    var this__16164 = this;
    var tsym16159__16166 = this;
    var coll__16167 = tsym16159__16166;
    return cljs.core._lookup.__3(coll__16167, k, not_found)
  };
  G__16268 = function(tsym16159, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__16268__2.call(this, tsym16159, k);
      case 3:
        return G__16268__3.call(this, tsym16159, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__16268
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__16168 = this;
  return new cljs.core.Subvec(this__16168.meta, cljs.core._assoc_n(this__16168.v, this__16168.end, o), this__16168.start, this__16168.end + 1)
};
cljs.core.Subvec.prototype.toString = function() {
  var this__16169 = this;
  var this$__16170 = this;
  return cljs.core.pr_str(this$__16170)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__2 = function(coll, f) {
  var this__16174 = this;
  return cljs.core.ci_reduce.__2(coll, f)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__3 = function(coll, f, start) {
  var this__16176 = this;
  return cljs.core.ci_reduce.__3(coll, f, start)
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__16236 = this;
  var subvec_seq__16237 = function subvec_seq(i) {
    if(cljs.core._EQ_.__2(i, this__16236.end)) {
      return null
    }else {
      return cljs.core.cons(cljs.core._nth.__2(this__16236.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__16237.call(null, this__16236.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__16238 = this;
  return this__16238.end - this__16238.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__16239 = this;
  return cljs.core._nth.__2(this__16239.v, this__16239.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__16241 = this;
  if(cljs.core._EQ_.__2(this__16241.start, this__16241.end)) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__16241.meta, this__16241.v, this__16241.start, this__16241.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n__3 = function(coll, n, val) {
  var this__16243 = this;
  return cljs.core._assoc(coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__16245 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__16246 = this;
  return new cljs.core.Subvec(meta, this__16246.v, this__16246.start, this__16246.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__16248 = this;
  return this__16248.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__2 = function(coll, n) {
  var this__16255 = this;
  return cljs.core._nth.__2(this__16255.v, this__16255.start + n)
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__3 = function(coll, n, not_found) {
  var this__16258 = this;
  return cljs.core._nth.__3(this__16258.v, this__16258.start + n, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__16252 = this;
  return cljs.core.with_meta(cljs.core.Vector.EMPTY, this__16252.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__2 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count(v))
  };
  var subvec__3 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__2.call(this, v, start);
      case 3:
        return subvec__3.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subvec.__2 = subvec__2;
  subvec.__3 = subvec__3;
  return subvec
}();
cljs.core.PersistentQueueSeq = function(meta, front, rear) {
  this.meta = meta;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__16299 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__16302 = this;
  return cljs.core.cons(o, coll)
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  var this__16304 = this;
  var this$__16305 = this;
  return cljs.core.pr_str(this$__16305)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__16307 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__16310 = this;
  return cljs.core._first(this__16310.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__16314 = this;
  var temp__3695__auto____16316 = cljs.core.next(this__16314.front);
  if(cljs.core.truth_(temp__3695__auto____16316)) {
    var f1__16319 = temp__3695__auto____16316;
    return new cljs.core.PersistentQueueSeq(this__16314.meta, f1__16319, this__16314.rear)
  }else {
    if(this__16314.rear === null) {
      return cljs.core._empty(coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__16314.meta, this__16314.rear, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__16321 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__16324 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__16324.front, this__16324.rear)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__16325 = this;
  return this__16325.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__16326 = this;
  return cljs.core.with_meta(cljs.core.List.EMPTY, this__16326.meta)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(meta, count, front, rear) {
  this.meta = meta;
  this.count = count;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__16393 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__16396 = this;
  if(cljs.core.truth_(this__16396.front)) {
    return new cljs.core.PersistentQueue(this__16396.meta, this__16396.count + 1, this__16396.front, cljs.core.conj.__2(function() {
      var or__3548__auto____16398 = this__16396.rear;
      if(cljs.core.truth_(or__3548__auto____16398)) {
        return or__3548__auto____16398
      }else {
        return cljs.core.PersistentVector.fromArray([])
      }
    }(), o))
  }else {
    return new cljs.core.PersistentQueue(this__16396.meta, this__16396.count + 1, cljs.core.conj.__2(this__16396.front, o), cljs.core.PersistentVector.fromArray([]))
  }
};
cljs.core.PersistentQueue.prototype.toString = function() {
  var this__16403 = this;
  var this$__16405 = this;
  return cljs.core.pr_str(this$__16405)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__16407 = this;
  var rear__16409 = cljs.core.seq(this__16407.rear);
  if(cljs.core.truth_(function() {
    var or__3548__auto____16411 = this__16407.front;
    if(cljs.core.truth_(or__3548__auto____16411)) {
      return or__3548__auto____16411
    }else {
      return rear__16409
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__16407.front, cljs.core.seq(rear__16409))
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__16413 = this;
  return this__16413.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek__1 = function(coll) {
  var this__16414 = this;
  return cljs.core._first(this__16414.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop__1 = function(coll) {
  var this__16416 = this;
  if(cljs.core.truth_(this__16416.front)) {
    var temp__3695__auto____16418 = cljs.core.next(this__16416.front);
    if(cljs.core.truth_(temp__3695__auto____16418)) {
      var f1__16420 = temp__3695__auto____16418;
      return new cljs.core.PersistentQueue(this__16416.meta, this__16416.count - 1, f1__16420, this__16416.rear)
    }else {
      return new cljs.core.PersistentQueue(this__16416.meta, this__16416.count - 1, cljs.core.seq(this__16416.rear), cljs.core.PersistentVector.fromArray([]))
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first__1 = function(coll) {
  var this__16423 = this;
  return cljs.core.first(this__16423.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest__1 = function(coll) {
  var this__16425 = this;
  return cljs.core.rest(cljs.core.seq(coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__16427 = this;
  return cljs.core.equiv_sequential(coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__16430 = this;
  return new cljs.core.PersistentQueue(meta, this__16430.count, this__16430.front, this__16430.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__16431 = this;
  return this__16431.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__16433 = this;
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.fromArray([]));
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv__2 = function(o, other) {
  var this__16555 = this;
  return false
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$(cljs.core.map_QMARK_(y) ? cljs.core._EQ_.__2(cljs.core.count(x), cljs.core.count(y)) ? cljs.core.every_QMARK_(cljs.core.identity, cljs.core.map.__2(function(xkv) {
    return cljs.core._EQ_.__2(cljs.core.get.__3(y, cljs.core.first(xkv), cljs.core.never_equiv), cljs.core.second(xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__16576 = array.length;
  var i__16578 = 0;
  while(true) {
    if(i__16578 < len__16576) {
      if(cljs.core._EQ_.__2(k, array[i__16578])) {
        return i__16578
      }else {
        var G__16584 = i__16578 + incr;
        i__16578 = G__16584;
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
  var obj_map_contains_key_QMARK___2 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___4 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____16589 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____16589)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____16589
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
        return obj_map_contains_key_QMARK___2.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___4.call(this, k, strobj, true_val, false_val)
    }
    throw"Invalid arity: " + arguments.length;
  };
  obj_map_contains_key_QMARK_.__2 = obj_map_contains_key_QMARK___2;
  obj_map_contains_key_QMARK_.__4 = obj_map_contains_key_QMARK___4;
  return obj_map_contains_key_QMARK_
}();
cljs.core.obj_map_compare_keys = function obj_map_compare_keys(a, b) {
  var a__16612 = cljs.core.hash(a);
  var b__16613 = cljs.core.hash(b);
  if(a__16612 < b__16613) {
    return-1
  }else {
    if(a__16612 > b__16613) {
      return 1
    }else {
      if("\ufdd0'else") {
        return 0
      }else {
        return null
      }
    }
  }
};
cljs.core.ObjMap = function(meta, keys, strobj) {
  this.meta = meta;
  this.keys = keys;
  this.strobj = strobj
};
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__16624 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__2 = function(coll, k) {
  var this__16626 = this;
  return cljs.core._lookup.__3(coll, k, null)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__3 = function(coll, k, not_found) {
  var this__16629 = this;
  return cljs.core.obj_map_contains_key_QMARK_.__4(k, this__16629.strobj, this__16629.strobj[k], not_found)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc__3 = function(coll, k, v) {
  var this__16631 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__16633 = goog.object.clone.call(null, this__16631.strobj);
    var overwrite_QMARK___16635 = new_strobj__16633.hasOwnProperty(k);
    new_strobj__16633[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___16635)) {
      return new cljs.core.ObjMap(this__16631.meta, this__16631.keys, new_strobj__16633)
    }else {
      var new_keys__16636 = cljs.core.aclone(this__16631.keys);
      new_keys__16636.push(k);
      return new cljs.core.ObjMap(this__16631.meta, new_keys__16636, new_strobj__16633)
    }
  }else {
    return cljs.core.with_meta(cljs.core.into(cljs.core.hash_map(k, v), cljs.core.seq(coll)), this__16631.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = function(coll, k) {
  var this__16712 = this;
  return cljs.core.obj_map_contains_key_QMARK_.__2(k, this__16712.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = function() {
  var G__16779 = null;
  var G__16779__2 = function(tsym16713, k) {
    var this__16717 = this;
    var tsym16713__16721 = this;
    var coll__16723 = tsym16713__16721;
    return cljs.core._lookup.__2(coll__16723, k)
  };
  var G__16779__3 = function(tsym16715, k, not_found) {
    var this__16725 = this;
    var tsym16715__16727 = this;
    var coll__16729 = tsym16715__16727;
    return cljs.core._lookup.__3(coll__16729, k, not_found)
  };
  G__16779 = function(tsym16715, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__16779__2.call(this, tsym16715, k);
      case 3:
        return G__16779__3.call(this, tsym16715, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__16779
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj__2 = function(coll, entry) {
  var this__16732 = this;
  if(cljs.core.vector_QMARK_(entry)) {
    return cljs.core._assoc(coll, cljs.core._nth.__2(entry, 0), cljs.core._nth.__2(entry, 1))
  }else {
    return cljs.core.reduce.__3(cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.toString = function() {
  var this__16735 = this;
  var this$__16736 = this;
  return cljs.core.pr_str(this$__16736)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__16740 = this;
  if(this__16740.keys.length > 0) {
    return cljs.core.map.__2(function(p1__16608_SHARP_) {
      return cljs.core.vector(p1__16608_SHARP_, this__16740.strobj[p1__16608_SHARP_])
    }, this__16740.keys.sort(cljs.core.obj_map_compare_keys))
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__16747 = this;
  return this__16747.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__16751 = this;
  return cljs.core.equiv_map(coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__16755 = this;
  return new cljs.core.ObjMap(meta, this__16755.keys, this__16755.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__16757 = this;
  return this__16757.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__16759 = this;
  return cljs.core.with_meta(cljs.core.ObjMap.EMPTY, this__16759.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc__2 = function(coll, k) {
  var this__16762 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____16765 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____16765)) {
      return this__16762.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____16765
    }
  }())) {
    var new_keys__16766 = cljs.core.aclone(this__16762.keys);
    var new_strobj__16767 = goog.object.clone.call(null, this__16762.strobj);
    new_keys__16766.splice(cljs.core.scan_array(1, k, new_keys__16766), 1);
    cljs.core.js_delete(new_strobj__16767, k);
    return new cljs.core.ObjMap(this__16762.meta, new_keys__16766, new_strobj__16767)
  }else {
    return coll
  }
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], cljs.core.js_obj());
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__16888 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__2 = function(coll, k) {
  var this__16889 = this;
  return cljs.core._lookup.__3(coll, k, null)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__3 = function(coll, k, not_found) {
  var this__16894 = this;
  var bucket__16896 = this__16894.hashobj[cljs.core.hash(k)];
  var i__16900 = cljs.core.truth_(bucket__16896) ? cljs.core.scan_array(2, k, bucket__16896) : null;
  if(cljs.core.truth_(i__16900)) {
    return bucket__16896[i__16900 + 1]
  }else {
    return not_found
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc__3 = function(coll, k, v) {
  var this__16902 = this;
  var h__16903 = cljs.core.hash(k);
  var bucket__16905 = this__16902.hashobj[h__16903];
  if(cljs.core.truth_(bucket__16905)) {
    var new_bucket__16910 = cljs.core.aclone(bucket__16905);
    var new_hashobj__16913 = goog.object.clone.call(null, this__16902.hashobj);
    new_hashobj__16913[h__16903] = new_bucket__16910;
    var temp__3695__auto____16918 = cljs.core.scan_array(2, k, new_bucket__16910);
    if(cljs.core.truth_(temp__3695__auto____16918)) {
      var i__16920 = temp__3695__auto____16918;
      new_bucket__16910[i__16920 + 1] = v;
      return new cljs.core.HashMap(this__16902.meta, this__16902.count, new_hashobj__16913)
    }else {
      new_bucket__16910.push(k, v);
      return new cljs.core.HashMap(this__16902.meta, this__16902.count + 1, new_hashobj__16913)
    }
  }else {
    var new_hashobj__16925 = goog.object.clone.call(null, this__16902.hashobj);
    new_hashobj__16925[h__16903] = [k, v];
    return new cljs.core.HashMap(this__16902.meta, this__16902.count + 1, new_hashobj__16925)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = function(coll, k) {
  var this__16930 = this;
  var bucket__16933 = this__16930.hashobj[cljs.core.hash(k)];
  var i__16936 = cljs.core.truth_(bucket__16933) ? cljs.core.scan_array(2, k, bucket__16933) : null;
  if(cljs.core.truth_(i__16936)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = function() {
  var G__17052 = null;
  var G__17052__2 = function(tsym16940, k) {
    var this__16943 = this;
    var tsym16940__16946 = this;
    var coll__16947 = tsym16940__16946;
    return cljs.core._lookup.__2(coll__16947, k)
  };
  var G__17052__3 = function(tsym16941, k, not_found) {
    var this__16949 = this;
    var tsym16941__16952 = this;
    var coll__16953 = tsym16941__16952;
    return cljs.core._lookup.__3(coll__16953, k, not_found)
  };
  G__17052 = function(tsym16941, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__17052__2.call(this, tsym16941, k);
      case 3:
        return G__17052__3.call(this, tsym16941, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__17052
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj__2 = function(coll, entry) {
  var this__16956 = this;
  if(cljs.core.vector_QMARK_(entry)) {
    return cljs.core._assoc(coll, cljs.core._nth.__2(entry, 0), cljs.core._nth.__2(entry, 1))
  }else {
    return cljs.core.reduce.__3(cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.toString = function() {
  var this__16968 = this;
  var this$__16970 = this;
  return cljs.core.pr_str(this$__16970)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__16975 = this;
  if(this__16975.count > 0) {
    var hashes__16978 = cljs.core.js_keys(this__16975.hashobj).sort();
    return cljs.core.mapcat.__2(function(p1__16801_SHARP_) {
      return cljs.core.map.__2(cljs.core.vec, cljs.core.partition.__2(2, this__16975.hashobj[p1__16801_SHARP_]))
    }, hashes__16978)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__16991 = this;
  return this__16991.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__16996 = this;
  return cljs.core.equiv_map(coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__17000 = this;
  return new cljs.core.HashMap(meta, this__17000.count, this__17000.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__17001 = this;
  return this__17001.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__17019 = this;
  return cljs.core.with_meta(cljs.core.HashMap.EMPTY, this__17019.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc__2 = function(coll, k) {
  var this__17023 = this;
  var h__17024 = cljs.core.hash(k);
  var bucket__17026 = this__17023.hashobj[h__17024];
  var i__17027 = cljs.core.truth_(bucket__17026) ? cljs.core.scan_array(2, k, bucket__17026) : null;
  if(cljs.core.not(i__17027)) {
    return coll
  }else {
    var new_hashobj__17029 = goog.object.clone.call(null, this__17023.hashobj);
    if(3 > bucket__17026.length) {
      cljs.core.js_delete(new_hashobj__17029, h__17024)
    }else {
      var new_bucket__17032 = cljs.core.aclone(bucket__17026);
      new_bucket__17032.splice(i__17027, 2);
      new_hashobj__17029[h__17024] = new_bucket__17032
    }
    return new cljs.core.HashMap(this__17023.meta, this__17023.count - 1, new_hashobj__17029)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj());
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__17077 = ks.length;
  var i__17078 = 0;
  var out__17079 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(i__17078 < len__17077) {
      var G__17082 = i__17078 + 1;
      var G__17084 = cljs.core.assoc.__3(out__17079, ks[i__17078], vs[i__17078]);
      i__17078 = G__17082;
      out__17079 = G__17084;
      continue
    }else {
      return out__17079
    }
    break
  }
};
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__17089 = cljs.core.seq(keyvals);
    var out__17090 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__17089)) {
        var G__17094 = cljs.core.nnext(in$__17089);
        var G__17095 = cljs.core.assoc.__3(out__17090, cljs.core.first(in$__17089), cljs.core.second(in$__17089));
        in$__17089 = G__17094;
        out__17090 = G__17095;
        continue
      }else {
        return out__17090
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
  hash_map.cljs$lang$applyTo = function(arglist__17098) {
    var keyvals = cljs.core.seq(arglist__17098);
    return hash_map__delegate.call(this, keyvals)
  };
  return hash_map
}();
cljs.core.keys = function keys(hash_map) {
  return cljs.core.seq(cljs.core.map.__2(cljs.core.first, hash_map))
};
cljs.core.key = function key(map_entry) {
  return cljs.core._key(map_entry)
};
cljs.core.vals = function vals(hash_map) {
  return cljs.core.seq(cljs.core.map.__2(cljs.core.second, hash_map))
};
cljs.core.val = function val(map_entry) {
  return cljs.core._val(map_entry)
};
cljs.core.merge = function() {
  var merge__delegate = function(maps) {
    if(cljs.core.truth_(cljs.core.some(cljs.core.identity, maps))) {
      return cljs.core.reduce.__2(function(p1__17116_SHARP_, p2__17118_SHARP_) {
        return cljs.core.conj.__2(function() {
          var or__3548__auto____17128 = p1__17116_SHARP_;
          if(cljs.core.truth_(or__3548__auto____17128)) {
            return or__3548__auto____17128
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__17118_SHARP_)
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
  merge.cljs$lang$applyTo = function(arglist__17137) {
    var maps = cljs.core.seq(arglist__17137);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some(cljs.core.identity, maps))) {
      var merge_entry__17149 = function(m, e) {
        var k__17145 = cljs.core.first(e);
        var v__17146 = cljs.core.second(e);
        if(cljs.core.contains_QMARK_(m, k__17145)) {
          return cljs.core.assoc.__3(m, k__17145, f.call(null, cljs.core.get.__2(m, k__17145), v__17146))
        }else {
          return cljs.core.assoc.__3(m, k__17145, v__17146)
        }
      };
      var merge2__17152 = function(m1, m2) {
        return cljs.core.reduce.__3(merge_entry__17149, function() {
          var or__3548__auto____17151 = m1;
          if(cljs.core.truth_(or__3548__auto____17151)) {
            return or__3548__auto____17151
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq(m2))
      };
      return cljs.core.reduce.__2(merge2__17152, maps)
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
  merge_with.cljs$lang$applyTo = function(arglist__17166) {
    var f = cljs.core.first(arglist__17166);
    var maps = cljs.core.rest(arglist__17166);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__17176 = cljs.core.ObjMap.fromObject([], {});
  var keys__17177 = cljs.core.seq(keyseq);
  while(true) {
    if(cljs.core.truth_(keys__17177)) {
      var key__17180 = cljs.core.first(keys__17177);
      var entry__17181 = cljs.core.get.__3(map, key__17180, "\ufdd0'user/not-found");
      var G__17188 = cljs.core.not_EQ_.__2(entry__17181, "\ufdd0'user/not-found") ? cljs.core.assoc.__3(ret__17176, key__17180, entry__17181) : ret__17176;
      var G__17189 = cljs.core.next(keys__17177);
      ret__17176 = G__17188;
      keys__17177 = G__17189;
      continue
    }else {
      return ret__17176
    }
    break
  }
};
cljs.core.Set = function(meta, hash_map) {
  this.meta = meta;
  this.hash_map = hash_map
};
cljs.core.Set.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Set")
};
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash__1 = function(coll) {
  var this__17199 = this;
  return cljs.core.hash_coll(coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__2 = function(coll, v) {
  var this__17201 = this;
  return cljs.core._lookup.__3(coll, v, null)
};
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__3 = function(coll, v, not_found) {
  var this__17204 = this;
  if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__17204.hash_map, v))) {
    return v
  }else {
    return not_found
  }
};
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = function() {
  var G__17264 = null;
  var G__17264__2 = function(tsym17208, k) {
    var this__17210 = this;
    var tsym17208__17213 = this;
    var coll__17214 = tsym17208__17213;
    return cljs.core._lookup.__2(coll__17214, k)
  };
  var G__17264__3 = function(tsym17209, k, not_found) {
    var this__17215 = this;
    var tsym17209__17219 = this;
    var coll__17222 = tsym17209__17219;
    return cljs.core._lookup.__3(coll__17222, k, not_found)
  };
  G__17264 = function(tsym17209, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__17264__2.call(this, tsym17209, k);
      case 3:
        return G__17264__3.call(this, tsym17209, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__17264
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj__2 = function(coll, o) {
  var this__17223 = this;
  return new cljs.core.Set(this__17223.meta, cljs.core.assoc.__3(this__17223.hash_map, o, null))
};
cljs.core.Set.prototype.toString = function() {
  var this__17224 = this;
  var this$__17235 = this;
  return cljs.core.pr_str(this$__17235)
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
  var this__17237 = this;
  return cljs.core.keys(this__17237.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin__2 = function(coll, v) {
  var this__17239 = this;
  return new cljs.core.Set(this__17239.meta, cljs.core.dissoc.__2(this__17239.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count__1 = function(coll) {
  var this__17242 = this;
  return cljs.core.count(cljs.core.seq(coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv__2 = function(coll, other) {
  var this__17245 = this;
  var and__3546__auto____17246 = cljs.core.set_QMARK_(other);
  if(and__3546__auto____17246) {
    var and__3546__auto____17248 = cljs.core._EQ_.__2(cljs.core.count(coll), cljs.core.count(other));
    if(and__3546__auto____17248) {
      return cljs.core.every_QMARK_(function(p1__17169_SHARP_) {
        return cljs.core.contains_QMARK_(coll, p1__17169_SHARP_)
      }, other)
    }else {
      return and__3546__auto____17248
    }
  }else {
    return and__3546__auto____17246
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta__2 = function(coll, meta) {
  var this__17253 = this;
  return new cljs.core.Set(meta, this__17253.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta__1 = function(coll) {
  var this__17255 = this;
  return this__17255.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(coll) {
  var this__17259 = this;
  return cljs.core.with_meta(cljs.core.Set.EMPTY, this__17259.meta)
};
cljs.core.Set;
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map());
cljs.core.set = function set(coll) {
  var in$__17398 = cljs.core.seq(coll);
  var out__17399 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.not(cljs.core.empty_QMARK_(in$__17398))) {
      var G__17404 = cljs.core.rest(in$__17398);
      var G__17405 = cljs.core.conj.__2(out__17399, cljs.core.first(in$__17398));
      in$__17398 = G__17404;
      out__17399 = G__17405;
      continue
    }else {
      return out__17399
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.vector_QMARK_(coll)) {
    var n__17408 = cljs.core.count(coll);
    return cljs.core.reduce.__3(function(v, i) {
      var temp__3695__auto____17411 = cljs.core.find(smap, cljs.core.nth.__2(v, i));
      if(cljs.core.truth_(temp__3695__auto____17411)) {
        var e__17412 = temp__3695__auto____17411;
        return cljs.core.assoc.__3(v, i, cljs.core.second(e__17412))
      }else {
        return v
      }
    }, coll, cljs.core.take(n__17408, cljs.core.iterate(cljs.core.inc, 0)))
  }else {
    return cljs.core.map.__2(function(p1__17396_SHARP_) {
      var temp__3695__auto____17413 = cljs.core.find(smap, p1__17396_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____17413)) {
        var e__17414 = temp__3695__auto____17413;
        return cljs.core.second(e__17414)
      }else {
        return p1__17396_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__17837 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__17793, seen) {
        while(true) {
          var vec__17796__17797 = p__17793;
          var f__17799 = cljs.core.nth.__3(vec__17796__17797, 0, null);
          var xs__17800 = vec__17796__17797;
          var temp__3698__auto____17801 = cljs.core.seq(xs__17800);
          if(cljs.core.truth_(temp__3698__auto____17801)) {
            var s__17802 = temp__3698__auto____17801;
            if(cljs.core.contains_QMARK_(seen, f__17799)) {
              var G__17843 = cljs.core.rest(s__17802);
              var G__17844 = seen;
              p__17793 = G__17843;
              seen = G__17844;
              continue
            }else {
              return cljs.core.cons(f__17799, step.call(null, cljs.core.rest(s__17802), cljs.core.conj.__2(seen, f__17799)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__17837.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__17847 = cljs.core.PersistentVector.fromArray([]);
  var s__17848 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next(s__17848))) {
      var G__17851 = cljs.core.conj.__2(ret__17847, cljs.core.first(s__17848));
      var G__17852 = cljs.core.next(s__17848);
      ret__17847 = G__17851;
      s__17848 = G__17852;
      continue
    }else {
      return cljs.core.seq(ret__17847)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.string_QMARK_(x)) {
    return x
  }else {
    if(function() {
      var or__3548__auto____17856 = cljs.core.keyword_QMARK_(x);
      if(or__3548__auto____17856) {
        return or__3548__auto____17856
      }else {
        return cljs.core.symbol_QMARK_(x)
      }
    }()) {
      var i__17858 = x.lastIndexOf("/");
      if(i__17858 < 0) {
        return cljs.core.subs.__2(x, 2)
      }else {
        return cljs.core.subs.__2(x, i__17858 + 1)
      }
    }else {
      if("\ufdd0'else") {
        throw new Error(cljs.core.str("Doesn't support name: ", x));
      }else {
        return null
      }
    }
  }
};
cljs.core.namespace = function namespace(x) {
  if(function() {
    var or__3548__auto____17879 = cljs.core.keyword_QMARK_(x);
    if(or__3548__auto____17879) {
      return or__3548__auto____17879
    }else {
      return cljs.core.symbol_QMARK_(x)
    }
  }()) {
    var i__17885 = x.lastIndexOf("/");
    if(i__17885 > -1) {
      return cljs.core.subs.__3(x, 2, i__17885)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str("Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__17916 = cljs.core.ObjMap.fromObject([], {});
  var ks__17917 = cljs.core.seq(keys);
  var vs__17919 = cljs.core.seq(vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____17922 = ks__17917;
      if(cljs.core.truth_(and__3546__auto____17922)) {
        return vs__17919
      }else {
        return and__3546__auto____17922
      }
    }())) {
      var G__17932 = cljs.core.assoc.__3(map__17916, cljs.core.first(ks__17917), cljs.core.first(vs__17919));
      var G__17933 = cljs.core.next(ks__17917);
      var G__17934 = cljs.core.next(vs__17919);
      map__17916 = G__17932;
      ks__17917 = G__17933;
      vs__17919 = G__17934;
      continue
    }else {
      return map__17916
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__2 = function(k, x) {
    return x
  };
  var max_key__3 = function(k, x, y) {
    if(k.call(null, x) > k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var max_key__4 = function() {
    var G__17951__delegate = function(k, x, y, more) {
      return cljs.core.reduce.__3(function(p1__17909_SHARP_, p2__17911_SHARP_) {
        return max_key.call(null, k, p1__17909_SHARP_, p2__17911_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__17951 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__17951__delegate.call(this, k, x, y, more)
    };
    G__17951.cljs$lang$maxFixedArity = 3;
    G__17951.cljs$lang$applyTo = function(arglist__17952) {
      var k = cljs.core.first(arglist__17952);
      var x = cljs.core.first(cljs.core.next(arglist__17952));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17952)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17952)));
      return G__17951__delegate.call(this, k, x, y, more)
    };
    return G__17951
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__2.call(this, k, x);
      case 3:
        return max_key__3.call(this, k, x, y);
      default:
        return max_key__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
  max_key.__2 = max_key__2;
  max_key.__3 = max_key__3;
  max_key.__4 = max_key__4;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__2 = function(k, x) {
    return x
  };
  var min_key__3 = function(k, x, y) {
    if(k.call(null, x) < k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var min_key__4 = function() {
    var G__17965__delegate = function(k, x, y, more) {
      return cljs.core.reduce.__3(function(p1__17937_SHARP_, p2__17938_SHARP_) {
        return min_key.call(null, k, p1__17937_SHARP_, p2__17938_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__17965 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__17965__delegate.call(this, k, x, y, more)
    };
    G__17965.cljs$lang$maxFixedArity = 3;
    G__17965.cljs$lang$applyTo = function(arglist__17967) {
      var k = cljs.core.first(arglist__17967);
      var x = cljs.core.first(cljs.core.next(arglist__17967));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17967)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17967)));
      return G__17965__delegate.call(this, k, x, y, more)
    };
    return G__17965
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__2.call(this, k, x);
      case 3:
        return min_key__3.call(this, k, x, y);
      default:
        return min_key__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
  min_key.__2 = min_key__2;
  min_key.__3 = min_key__3;
  min_key.__4 = min_key__4;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__2 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____17973 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____17973)) {
        var s__17975 = temp__3698__auto____17973;
        return cljs.core.cons(cljs.core.take(n, s__17975), partition_all.call(null, n, step, cljs.core.drop(step, s__17975)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__2.call(this, n, step);
      case 3:
        return partition_all__3.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition_all.__2 = partition_all__2;
  partition_all.__3 = partition_all__3;
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____17984 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____17984)) {
      var s__17986 = temp__3698__auto____17984;
      if(cljs.core.truth_(pred.call(null, cljs.core.first(s__17986)))) {
        return cljs.core.cons(cljs.core.first(s__17986), take_while.call(null, pred, cljs.core.rest(s__17986)))
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash__1 = function(rng) {
  var this__18007 = this;
  return cljs.core.hash_coll(rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj__2 = function(rng, o) {
  var this__18010 = this;
  return cljs.core.cons(o, rng)
};
cljs.core.Range.prototype.toString = function() {
  var this__18011 = this;
  var this$__18012 = this;
  return cljs.core.pr_str(this$__18012)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__2 = function(rng, f) {
  var this__18013 = this;
  return cljs.core.ci_reduce.__2(rng, f)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__3 = function(rng, f, s) {
  var this__18014 = this;
  return cljs.core.ci_reduce.__3(rng, f, s)
};
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq__1 = function(rng) {
  var this__18018 = this;
  var comp__18019 = this__18018.step > 0 ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__18019.call(null, this__18018.start, this__18018.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count__1 = function(rng) {
  var this__18021 = this;
  if(cljs.core.not(cljs.core._seq(rng))) {
    return 0
  }else {
    return Math["ceil"]((this__18021.end - this__18021.start) / this__18021.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first__1 = function(rng) {
  var this__18023 = this;
  return this__18023.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest__1 = function(rng) {
  var this__18025 = this;
  if(cljs.core.truth_(cljs.core._seq(rng))) {
    return new cljs.core.Range(this__18025.meta, this__18025.start + this__18025.step, this__18025.end, this__18025.step)
  }else {
    return cljs.core.list()
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv__2 = function(rng, other) {
  var this__18026 = this;
  return cljs.core.equiv_sequential(rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta__2 = function(rng, meta) {
  var this__18027 = this;
  return new cljs.core.Range(meta, this__18027.start, this__18027.end, this__18027.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta__1 = function(rng) {
  var this__18029 = this;
  return this__18029.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__2 = function(rng, n) {
  var this__18030 = this;
  if(n < cljs.core._count(rng)) {
    return this__18030.start + n * this__18030.step
  }else {
    if(function() {
      var and__3546__auto____18032 = this__18030.start > this__18030.end;
      if(and__3546__auto____18032) {
        return cljs.core._EQ_.__2(this__18030.step, 0)
      }else {
        return and__3546__auto____18032
      }
    }()) {
      return this__18030.start
    }else {
      throw new Error("Index out of bounds");
    }
  }
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__3 = function(rng, n, not_found) {
  var this__18033 = this;
  if(n < cljs.core._count(rng)) {
    return this__18033.start + n * this__18033.step
  }else {
    if(function() {
      var and__3546__auto____18035 = this__18033.start > this__18033.end;
      if(and__3546__auto____18035) {
        return cljs.core._EQ_.__2(this__18033.step, 0)
      }else {
        return and__3546__auto____18035
      }
    }()) {
      return this__18033.start
    }else {
      return not_found
    }
  }
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty__1 = function(rng) {
  var this__18038 = this;
  return cljs.core.with_meta(cljs.core.List.EMPTY, this__18038.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__0 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__1 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__2 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__3 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__0.call(this);
      case 1:
        return range__1.call(this, start);
      case 2:
        return range__2.call(this, start, end);
      case 3:
        return range__3.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  range.__0 = range__0;
  range.__1 = range__1;
  range.__2 = range__2;
  range.__3 = range__3;
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____18076 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____18076)) {
      var s__18078 = temp__3698__auto____18076;
      return cljs.core.cons(cljs.core.first(s__18078), take_nth.call(null, n, cljs.core.drop(n, s__18078)))
    }else {
      return null
    }
  })
};
cljs.core.split_with = function split_with(pred, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred, coll), cljs.core.drop_while(pred, coll)])
};
cljs.core.partition_by = function partition_by(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____18086 = cljs.core.seq(coll);
    if(cljs.core.truth_(temp__3698__auto____18086)) {
      var s__18087 = temp__3698__auto____18086;
      var fst__18088 = cljs.core.first(s__18087);
      var fv__18089 = f.call(null, fst__18088);
      var run__18091 = cljs.core.cons(fst__18088, cljs.core.take_while(function(p1__18083_SHARP_) {
        return cljs.core._EQ_.__2(fv__18089, f.call(null, p1__18083_SHARP_))
      }, cljs.core.next(s__18087)));
      return cljs.core.cons(run__18091, partition_by.call(null, f, cljs.core.seq(cljs.core.drop(cljs.core.count(run__18091), s__18087))))
    }else {
      return null
    }
  })
};
cljs.core.frequencies = function frequencies(coll) {
  return cljs.core.reduce.__3(function(counts, x) {
    return cljs.core.assoc.__3(counts, x, cljs.core.get.__3(counts, x, 0) + 1)
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.reductions = function() {
  var reductions = null;
  var reductions__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____18253 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3695__auto____18253)) {
        var s__18254 = temp__3695__auto____18253;
        return reductions.call(null, f, cljs.core.first(s__18254), cljs.core.rest(s__18254))
      }else {
        return cljs.core.list(f.call(null))
      }
    })
  };
  var reductions__3 = function(f, init, coll) {
    return cljs.core.cons(init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____18255 = cljs.core.seq(coll);
      if(cljs.core.truth_(temp__3698__auto____18255)) {
        var s__18256 = temp__3698__auto____18255;
        return reductions.call(null, f, f.call(null, init, cljs.core.first(s__18256)), cljs.core.rest(s__18256))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__2.call(this, f, init);
      case 3:
        return reductions__3.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reductions.__2 = reductions__2;
  reductions.__3 = reductions__3;
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__1 = function(f) {
    return function() {
      var G__18277 = null;
      var G__18277__0 = function() {
        return cljs.core.vector(f.call(null))
      };
      var G__18277__1 = function(x) {
        return cljs.core.vector(f.call(null, x))
      };
      var G__18277__2 = function(x, y) {
        return cljs.core.vector(f.call(null, x, y))
      };
      var G__18277__3 = function(x, y, z) {
        return cljs.core.vector(f.call(null, x, y, z))
      };
      var G__18277__4 = function() {
        var G__18278__delegate = function(x, y, z, args) {
          return cljs.core.vector(cljs.core.apply.__5(f, x, y, z, args))
        };
        var G__18278 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__18278__delegate.call(this, x, y, z, args)
        };
        G__18278.cljs$lang$maxFixedArity = 3;
        G__18278.cljs$lang$applyTo = function(arglist__18279) {
          var x = cljs.core.first(arglist__18279);
          var y = cljs.core.first(cljs.core.next(arglist__18279));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18279)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18279)));
          return G__18278__delegate.call(this, x, y, z, args)
        };
        return G__18278
      }();
      G__18277 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__18277__0.call(this);
          case 1:
            return G__18277__1.call(this, x);
          case 2:
            return G__18277__2.call(this, x, y);
          case 3:
            return G__18277__3.call(this, x, y, z);
          default:
            return G__18277__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__18277.cljs$lang$maxFixedArity = 3;
      G__18277.cljs$lang$applyTo = G__18277__4.cljs$lang$applyTo;
      return G__18277
    }()
  };
  var juxt__2 = function(f, g) {
    return function() {
      var G__18280 = null;
      var G__18280__0 = function() {
        return cljs.core.vector(f.call(null), g.call(null))
      };
      var G__18280__1 = function(x) {
        return cljs.core.vector(f.call(null, x), g.call(null, x))
      };
      var G__18280__2 = function(x, y) {
        return cljs.core.vector(f.call(null, x, y), g.call(null, x, y))
      };
      var G__18280__3 = function(x, y, z) {
        return cljs.core.vector(f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__18280__4 = function() {
        var G__18281__delegate = function(x, y, z, args) {
          return cljs.core.vector(cljs.core.apply.__5(f, x, y, z, args), cljs.core.apply.__5(g, x, y, z, args))
        };
        var G__18281 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__18281__delegate.call(this, x, y, z, args)
        };
        G__18281.cljs$lang$maxFixedArity = 3;
        G__18281.cljs$lang$applyTo = function(arglist__18282) {
          var x = cljs.core.first(arglist__18282);
          var y = cljs.core.first(cljs.core.next(arglist__18282));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18282)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18282)));
          return G__18281__delegate.call(this, x, y, z, args)
        };
        return G__18281
      }();
      G__18280 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__18280__0.call(this);
          case 1:
            return G__18280__1.call(this, x);
          case 2:
            return G__18280__2.call(this, x, y);
          case 3:
            return G__18280__3.call(this, x, y, z);
          default:
            return G__18280__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__18280.cljs$lang$maxFixedArity = 3;
      G__18280.cljs$lang$applyTo = G__18280__4.cljs$lang$applyTo;
      return G__18280
    }()
  };
  var juxt__3 = function(f, g, h) {
    return function() {
      var G__18283 = null;
      var G__18283__0 = function() {
        return cljs.core.vector(f.call(null), g.call(null), h.call(null))
      };
      var G__18283__1 = function(x) {
        return cljs.core.vector(f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__18283__2 = function(x, y) {
        return cljs.core.vector(f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__18283__3 = function(x, y, z) {
        return cljs.core.vector(f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__18283__4 = function() {
        var G__18285__delegate = function(x, y, z, args) {
          return cljs.core.vector(cljs.core.apply.__5(f, x, y, z, args), cljs.core.apply.__5(g, x, y, z, args), cljs.core.apply.__5(h, x, y, z, args))
        };
        var G__18285 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__18285__delegate.call(this, x, y, z, args)
        };
        G__18285.cljs$lang$maxFixedArity = 3;
        G__18285.cljs$lang$applyTo = function(arglist__18286) {
          var x = cljs.core.first(arglist__18286);
          var y = cljs.core.first(cljs.core.next(arglist__18286));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18286)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18286)));
          return G__18285__delegate.call(this, x, y, z, args)
        };
        return G__18285
      }();
      G__18283 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__18283__0.call(this);
          case 1:
            return G__18283__1.call(this, x);
          case 2:
            return G__18283__2.call(this, x, y);
          case 3:
            return G__18283__3.call(this, x, y, z);
          default:
            return G__18283__4.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__18283.cljs$lang$maxFixedArity = 3;
      G__18283.cljs$lang$applyTo = G__18283__4.cljs$lang$applyTo;
      return G__18283
    }()
  };
  var juxt__4 = function() {
    var G__18287__delegate = function(f, g, h, fs) {
      var fs__18276 = cljs.core.list_STAR_.__4(f, g, h, fs);
      return function() {
        var G__18288 = null;
        var G__18288__0 = function() {
          return cljs.core.reduce.__3(function(p1__18120_SHARP_, p2__18121_SHARP_) {
            return cljs.core.conj.__2(p1__18120_SHARP_, p2__18121_SHARP_.call(null))
          }, cljs.core.PersistentVector.fromArray([]), fs__18276)
        };
        var G__18288__1 = function(x) {
          return cljs.core.reduce.__3(function(p1__18123_SHARP_, p2__18124_SHARP_) {
            return cljs.core.conj.__2(p1__18123_SHARP_, p2__18124_SHARP_.call(null, x))
          }, cljs.core.PersistentVector.fromArray([]), fs__18276)
        };
        var G__18288__2 = function(x, y) {
          return cljs.core.reduce.__3(function(p1__18159_SHARP_, p2__18160_SHARP_) {
            return cljs.core.conj.__2(p1__18159_SHARP_, p2__18160_SHARP_.call(null, x, y))
          }, cljs.core.PersistentVector.fromArray([]), fs__18276)
        };
        var G__18288__3 = function(x, y, z) {
          return cljs.core.reduce.__3(function(p1__18161_SHARP_, p2__18163_SHARP_) {
            return cljs.core.conj.__2(p1__18161_SHARP_, p2__18163_SHARP_.call(null, x, y, z))
          }, cljs.core.PersistentVector.fromArray([]), fs__18276)
        };
        var G__18288__4 = function() {
          var G__18290__delegate = function(x, y, z, args) {
            return cljs.core.reduce.__3(function(p1__18164_SHARP_, p2__18252_SHARP_) {
              return cljs.core.conj.__2(p1__18164_SHARP_, cljs.core.apply.__5(p2__18252_SHARP_, x, y, z, args))
            }, cljs.core.PersistentVector.fromArray([]), fs__18276)
          };
          var G__18290 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__18290__delegate.call(this, x, y, z, args)
          };
          G__18290.cljs$lang$maxFixedArity = 3;
          G__18290.cljs$lang$applyTo = function(arglist__18291) {
            var x = cljs.core.first(arglist__18291);
            var y = cljs.core.first(cljs.core.next(arglist__18291));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18291)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18291)));
            return G__18290__delegate.call(this, x, y, z, args)
          };
          return G__18290
        }();
        G__18288 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__18288__0.call(this);
            case 1:
              return G__18288__1.call(this, x);
            case 2:
              return G__18288__2.call(this, x, y);
            case 3:
              return G__18288__3.call(this, x, y, z);
            default:
              return G__18288__4.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__18288.cljs$lang$maxFixedArity = 3;
        G__18288.cljs$lang$applyTo = G__18288__4.cljs$lang$applyTo;
        return G__18288
      }()
    };
    var G__18287 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__18287__delegate.call(this, f, g, h, fs)
    };
    G__18287.cljs$lang$maxFixedArity = 3;
    G__18287.cljs$lang$applyTo = function(arglist__18292) {
      var f = cljs.core.first(arglist__18292);
      var g = cljs.core.first(cljs.core.next(arglist__18292));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18292)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18292)));
      return G__18287__delegate.call(this, f, g, h, fs)
    };
    return G__18287
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__1.call(this, f);
      case 2:
        return juxt__2.call(this, f, g);
      case 3:
        return juxt__3.call(this, f, g, h);
      default:
        return juxt__4.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
  juxt.__1 = juxt__1;
  juxt.__2 = juxt__2;
  juxt.__3 = juxt__3;
  juxt.__4 = juxt__4;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__1 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq(coll))) {
        var G__18296 = cljs.core.next(coll);
        coll = G__18296;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__2 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____18293 = cljs.core.seq(coll);
        if(cljs.core.truth_(and__3546__auto____18293)) {
          return n > 0
        }else {
          return and__3546__auto____18293
        }
      }())) {
        var G__18299 = n - 1;
        var G__18300 = cljs.core.next(coll);
        n = G__18299;
        coll = G__18300;
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
        return dorun__1.call(this, n);
      case 2:
        return dorun__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dorun.__1 = dorun__1;
  dorun.__2 = dorun__2;
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__1 = function(coll) {
    cljs.core.dorun.__1(coll);
    return coll
  };
  var doall__2 = function(n, coll) {
    cljs.core.dorun.__2(n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__1.call(this, n);
      case 2:
        return doall__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  doall.__1 = doall__1;
  doall.__2 = doall__2;
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__18301 = re.exec(s);
  if(cljs.core._EQ_.__2(cljs.core.first(matches__18301), s)) {
    if(cljs.core._EQ_.__2(cljs.core.count(matches__18301), 1)) {
      return cljs.core.first(matches__18301)
    }else {
      return cljs.core.vec(matches__18301)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__18307 = re.exec(s);
  if(matches__18307 === null) {
    return null
  }else {
    if(cljs.core._EQ_.__2(cljs.core.count(matches__18307), 1)) {
      return cljs.core.first(matches__18307)
    }else {
      return cljs.core.vec(matches__18307)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__18436 = cljs.core.re_find(re, s);
  var match_idx__18437 = s.search(re);
  var match_str__18439 = cljs.core.coll_QMARK_(match_data__18436) ? cljs.core.first(match_data__18436) : match_data__18436;
  var post_match__18440 = cljs.core.subs.__2(s, match_idx__18437 + cljs.core.count(match_str__18439));
  if(match_data__18436) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons(match_data__18436, re_seq.call(null, re, post_match__18440))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  var vec__18474__18475 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/, s);
  var ___18476 = cljs.core.nth.__3(vec__18474__18475, 0, null);
  var flags__18477 = cljs.core.nth.__3(vec__18474__18475, 1, null);
  var pattern__18478 = cljs.core.nth.__3(vec__18474__18475, 2, null);
  return new RegExp(pattern__18478, flags__18477)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat(cljs.core.PersistentVector.fromArray([begin]), cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep]), cljs.core.map.__2(function(p1__18473_SHARP_) {
    return print_one.call(null, p1__18473_SHARP_, opts)
  }, coll))), cljs.core.PersistentVector.fromArray([end]))
};
cljs.core.string_print = function string_print(x) {
  cljs.core._STAR_print_fn_STAR_(x);
  return null
};
cljs.core.flush = function flush() {
  return null
};
cljs.core.pr_seq = function pr_seq(obj, opts) {
  if(obj === null) {
    return cljs.core.list("nil")
  }else {
    if(void 0 === obj) {
      return cljs.core.list("#<undefined>")
    }else {
      if("\ufdd0'else") {
        return cljs.core.concat.__2(cljs.core.truth_(function() {
          var and__3546__auto____18485 = cljs.core.get.__2(opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____18485)) {
            var and__3546__auto____18489 = function() {
              var x__462__auto____18486 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____18487 = x__462__auto____18486;
                if(cljs.core.truth_(and__3546__auto____18487)) {
                  var and__3546__auto____18488 = x__462__auto____18486.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____18488)) {
                    return cljs.core.not(x__462__auto____18486.hasOwnProperty("cljs$core$IMeta$"))
                  }else {
                    return and__3546__auto____18488
                  }
                }else {
                  return and__3546__auto____18487
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_(cljs.core.IMeta, x__462__auto____18486)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____18489)) {
              return cljs.core.meta(obj)
            }else {
              return and__3546__auto____18489
            }
          }else {
            return and__3546__auto____18485
          }
        }()) ? cljs.core.concat(cljs.core.PersistentVector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta(obj), opts), cljs.core.PersistentVector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__462__auto____18490 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____18491 = x__462__auto____18490;
            if(cljs.core.truth_(and__3546__auto____18491)) {
              var and__3546__auto____18492 = x__462__auto____18490.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____18492)) {
                return cljs.core.not(x__462__auto____18490.hasOwnProperty("cljs$core$IPrintable$"))
              }else {
                return and__3546__auto____18492
              }
            }else {
              return and__3546__auto____18491
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_(cljs.core.IPrintable, x__462__auto____18490)
          }
        }()) ? cljs.core._pr_seq(obj, opts) : cljs.core.list("#<", cljs.core.str.__1(obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_sb = function pr_sb(objs, opts) {
  var first_obj__18507 = cljs.core.first(objs);
  var sb__18524 = new goog.string.StringBuffer;
  var G__18525__18526 = cljs.core.seq(objs);
  if(cljs.core.truth_(G__18525__18526)) {
    var obj__18527 = cljs.core.first(G__18525__18526);
    var G__18525__18528 = G__18525__18526;
    while(true) {
      if(obj__18527 === first_obj__18507) {
      }else {
        sb__18524.append(" ")
      }
      var G__18529__18530 = cljs.core.seq(cljs.core.pr_seq(obj__18527, opts));
      if(cljs.core.truth_(G__18529__18530)) {
        var string__18531 = cljs.core.first(G__18529__18530);
        var G__18529__18532 = G__18529__18530;
        while(true) {
          sb__18524.append(string__18531);
          var temp__3698__auto____18533 = cljs.core.next(G__18529__18532);
          if(cljs.core.truth_(temp__3698__auto____18533)) {
            var G__18529__18534 = temp__3698__auto____18533;
            var G__18551 = cljs.core.first(G__18529__18534);
            var G__18552 = G__18529__18534;
            string__18531 = G__18551;
            G__18529__18532 = G__18552;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____18535 = cljs.core.next(G__18525__18528);
      if(cljs.core.truth_(temp__3698__auto____18535)) {
        var G__18525__18536 = temp__3698__auto____18535;
        var G__18555 = cljs.core.first(G__18525__18536);
        var G__18556 = G__18525__18536;
        obj__18527 = G__18555;
        G__18525__18528 = G__18556;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return sb__18524
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  return cljs.core.str.__1(cljs.core.pr_sb(objs, opts))
};
cljs.core.prn_str_with_opts = function prn_str_with_opts(objs, opts) {
  var sb__18561 = cljs.core.pr_sb(objs, opts);
  sb__18561.append("\n");
  return cljs.core.str.__1(sb__18561)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__18563 = cljs.core.first(objs);
  var G__18564__18565 = cljs.core.seq(objs);
  if(cljs.core.truth_(G__18564__18565)) {
    var obj__18567 = cljs.core.first(G__18564__18565);
    var G__18564__18568 = G__18564__18565;
    while(true) {
      if(obj__18567 === first_obj__18563) {
      }else {
        cljs.core.string_print(" ")
      }
      var G__18570__18571 = cljs.core.seq(cljs.core.pr_seq(obj__18567, opts));
      if(cljs.core.truth_(G__18570__18571)) {
        var string__18573 = cljs.core.first(G__18570__18571);
        var G__18570__18574 = G__18570__18571;
        while(true) {
          cljs.core.string_print(string__18573);
          var temp__3698__auto____18575 = cljs.core.next(G__18570__18574);
          if(cljs.core.truth_(temp__3698__auto____18575)) {
            var G__18570__18576 = temp__3698__auto____18575;
            var G__18585 = cljs.core.first(G__18570__18576);
            var G__18586 = G__18570__18576;
            string__18573 = G__18585;
            G__18570__18574 = G__18586;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____18578 = cljs.core.next(G__18564__18568);
      if(cljs.core.truth_(temp__3698__auto____18578)) {
        var G__18564__18580 = temp__3698__auto____18578;
        var G__18588 = cljs.core.first(G__18564__18580);
        var G__18589 = G__18564__18580;
        obj__18567 = G__18588;
        G__18564__18568 = G__18589;
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
  cljs.core.string_print("\n");
  if(cljs.core.truth_(cljs.core.get.__2(opts, "\ufdd0'flush-on-newline"))) {
    return cljs.core.flush()
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
    return cljs.core.pr_str_with_opts(objs, cljs.core.pr_opts())
  };
  var pr_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr_str__delegate.call(this, objs)
  };
  pr_str.cljs$lang$maxFixedArity = 0;
  pr_str.cljs$lang$applyTo = function(arglist__18629) {
    var objs = cljs.core.seq(arglist__18629);
    return pr_str__delegate.call(this, objs)
  };
  return pr_str
}();
cljs.core.prn_str = function() {
  var prn_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts(objs, cljs.core.pr_opts())
  };
  var prn_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn_str__delegate.call(this, objs)
  };
  prn_str.cljs$lang$maxFixedArity = 0;
  prn_str.cljs$lang$applyTo = function(arglist__18632) {
    var objs = cljs.core.seq(arglist__18632);
    return prn_str__delegate.call(this, objs)
  };
  return prn_str
}();
cljs.core.pr = function() {
  var pr__delegate = function(objs) {
    return cljs.core.pr_with_opts(objs, cljs.core.pr_opts())
  };
  var pr = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr__delegate.call(this, objs)
  };
  pr.cljs$lang$maxFixedArity = 0;
  pr.cljs$lang$applyTo = function(arglist__18637) {
    var objs = cljs.core.seq(arglist__18637);
    return pr__delegate.call(this, objs)
  };
  return pr
}();
cljs.core.print = function() {
  var cljs_core_print__delegate = function(objs) {
    return cljs.core.pr_with_opts(objs, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", false))
  };
  var cljs_core_print = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return cljs_core_print__delegate.call(this, objs)
  };
  cljs_core_print.cljs$lang$maxFixedArity = 0;
  cljs_core_print.cljs$lang$applyTo = function(arglist__18646) {
    var objs = cljs.core.seq(arglist__18646);
    return cljs_core_print__delegate.call(this, objs)
  };
  return cljs_core_print
}();
cljs.core.print_str = function() {
  var print_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts(objs, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", false))
  };
  var print_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return print_str__delegate.call(this, objs)
  };
  print_str.cljs$lang$maxFixedArity = 0;
  print_str.cljs$lang$applyTo = function(arglist__18652) {
    var objs = cljs.core.seq(arglist__18652);
    return print_str__delegate.call(this, objs)
  };
  return print_str
}();
cljs.core.println = function() {
  var println__delegate = function(objs) {
    cljs.core.pr_with_opts(objs, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", false));
    return cljs.core.newline(cljs.core.pr_opts())
  };
  var println = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println__delegate.call(this, objs)
  };
  println.cljs$lang$maxFixedArity = 0;
  println.cljs$lang$applyTo = function(arglist__18656) {
    var objs = cljs.core.seq(arglist__18656);
    return println__delegate.call(this, objs)
  };
  return println
}();
cljs.core.println_str = function() {
  var println_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts(objs, cljs.core.assoc.__3(cljs.core.pr_opts(), "\ufdd0'readably", false))
  };
  var println_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println_str__delegate.call(this, objs)
  };
  println_str.cljs$lang$maxFixedArity = 0;
  println_str.cljs$lang$applyTo = function(arglist__18660) {
    var objs = cljs.core.seq(arglist__18660);
    return println_str__delegate.call(this, objs)
  };
  return println_str
}();
cljs.core.prn = function() {
  var prn__delegate = function(objs) {
    cljs.core.pr_with_opts(objs, cljs.core.pr_opts());
    return cljs.core.newline(cljs.core.pr_opts())
  };
  var prn = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn__delegate.call(this, objs)
  };
  prn.cljs$lang$maxFixedArity = 0;
  prn.cljs$lang$applyTo = function(arglist__18666) {
    var objs = cljs.core.seq(arglist__18666);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  var pr_pair__18672 = function(keyval) {
    return cljs.core.pr_sequential(cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential(pr_pair__18672, "{", ", ", "}", opts, coll)
};
cljs.core.IPrintable["number"] = true;
cljs.core._pr_seq["number"] = function(n, opts) {
  return cljs.core.list(cljs.core.str.__1(n))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["boolean"] = true;
cljs.core._pr_seq["boolean"] = function(bool, opts) {
  return cljs.core.list(cljs.core.str.__1(bool))
};
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.IPrintable["string"] = true;
cljs.core._pr_seq["string"] = function(obj, opts) {
  if(cljs.core.keyword_QMARK_(obj)) {
    return cljs.core.list(cljs.core.str(":", function() {
      var temp__3698__auto____18695 = cljs.core.namespace(obj);
      if(cljs.core.truth_(temp__3698__auto____18695)) {
        var nspc__18705 = temp__3698__auto____18695;
        return cljs.core.str(nspc__18705, "/")
      }else {
        return null
      }
    }(), cljs.core.name(obj)))
  }else {
    if(cljs.core.symbol_QMARK_(obj)) {
      return cljs.core.list(cljs.core.str(function() {
        var temp__3698__auto____18729 = cljs.core.namespace(obj);
        if(cljs.core.truth_(temp__3698__auto____18729)) {
          var nspc__18730 = temp__3698__auto____18729;
          return cljs.core.str(nspc__18730, "/")
        }else {
          return null
        }
      }(), cljs.core.name(obj)))
    }else {
      if("\ufdd0'else") {
        return cljs.core.list(cljs.core.truth_("\ufdd0'readably".call(null, opts)) ? goog.string.quote.call(null, obj) : obj)
      }else {
        return null
      }
    }
  }
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["array"] = true;
cljs.core._pr_seq["array"] = function(a, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "#<Array [", ", ", "]>", opts, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["function"] = true;
cljs.core._pr_seq["function"] = function(this$) {
  return cljs.core.list("#<", cljs.core.str.__1(this$), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.list("()")
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  return cljs.core.pr_sequential(cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq__2 = function(coll, opts) {
  var pr_pair__18751 = function(keyval) {
    return cljs.core.pr_sequential(cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential(pr_pair__18751, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash__1 = function(this$) {
  var this__18758 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches__3 = function(this$, oldval, newval) {
  var this__18774 = this;
  var G__18887__18891 = cljs.core.seq(this__18774.watches);
  if(G__18887__18891) {
    var G__18921__18923 = cljs.core.first(G__18887__18891);
    var vec__18922__18924 = G__18921__18923;
    var key__18925 = cljs.core.nth.__3(vec__18922__18924, 0, null);
    var f__18926 = cljs.core.nth.__3(vec__18922__18924, 1, null);
    var G__18887__18927 = G__18887__18891;
    var G__18921__18928 = G__18921__18923;
    var G__18887__18929 = G__18887__18927;
    while(true) {
      var vec__18931__18932 = G__18921__18928;
      var key__18933 = cljs.core.nth.__3(vec__18931__18932, 0, null);
      var f__18934 = cljs.core.nth.__3(vec__18931__18932, 1, null);
      var G__18887__18935 = G__18887__18929;
      f__18934.call(null, key__18933, this$, oldval, newval);
      var temp__3698__auto____18937 = cljs.core.next(G__18887__18935);
      if(temp__3698__auto____18937) {
        var G__18887__18939 = temp__3698__auto____18937;
        var G__19000 = cljs.core.first(G__18887__18939);
        var G__19001 = G__18887__18939;
        G__18921__18928 = G__19000;
        G__18887__18929 = G__19001;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch__3 = function(this$, key, f) {
  var this__18941 = this;
  return this$.watches = cljs.core.assoc.__3(this__18941.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch__2 = function(this$, key) {
  var this__18951 = this;
  return this$.watches = cljs.core.dissoc.__2(this__18951.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq__2 = function(a, opts) {
  var this__18953 = this;
  return cljs.core.concat(cljs.core.PersistentVector.fromArray(["#<Atom: "]), cljs.core._pr_seq(this__18953.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta__1 = function(_) {
  var this__18954 = this;
  return this__18954.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref__1 = function(_) {
  var this__18955 = this;
  return this__18955.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv__2 = function(o, other) {
  var this__18956 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__1 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__2 = function() {
    var G__19025__delegate = function(x, p__19008) {
      var map__19018__19019 = p__19008;
      var map__19018__19020 = cljs.core.seq_QMARK_(map__19018__19019) ? cljs.core.apply.__2(cljs.core.hash_map, map__19018__19019) : map__19018__19019;
      var validator__19022 = cljs.core.get.__2(map__19018__19020, "\ufdd0'validator");
      var meta__19023 = cljs.core.get.__2(map__19018__19020, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__19023, validator__19022, null)
    };
    var G__19025 = function(x, var_args) {
      var p__19008 = null;
      if(goog.isDef(var_args)) {
        p__19008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__19025__delegate.call(this, x, p__19008)
    };
    G__19025.cljs$lang$maxFixedArity = 1;
    G__19025.cljs$lang$applyTo = function(arglist__19026) {
      var x = cljs.core.first(arglist__19026);
      var p__19008 = cljs.core.rest(arglist__19026);
      return G__19025__delegate.call(this, x, p__19008)
    };
    return G__19025
  }();
  atom = function(x, var_args) {
    var p__19008 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__1.call(this, x);
      default:
        return atom__2.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
  atom.__1 = atom__1;
  atom.__2 = atom__2;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____19044 = a.validator;
  if(temp__3698__auto____19044) {
    var validate__19045 = temp__3698__auto____19044;
    if(validate__19045.call(null, new_value)) {
    }else {
      throw new Error(cljs.core.str("Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3400)))));
    }
  }else {
  }
  var old_value__19047 = a.state;
  a.state = new_value;
  cljs.core._notify_watches(a, old_value__19047, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___2 = function(a, f) {
    return cljs.core.reset_BANG_(a, f.call(null, a.state))
  };
  var swap_BANG___3 = function(a, f, x) {
    return cljs.core.reset_BANG_(a, f.call(null, a.state, x))
  };
  var swap_BANG___4 = function(a, f, x, y) {
    return cljs.core.reset_BANG_(a, f.call(null, a.state, x, y))
  };
  var swap_BANG___5 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_(a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___6 = function() {
    var G__19066__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_(a, cljs.core.apply(f, a.state, x, y, z, more))
    };
    var G__19066 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__19066__delegate.call(this, a, f, x, y, z, more)
    };
    G__19066.cljs$lang$maxFixedArity = 5;
    G__19066.cljs$lang$applyTo = function(arglist__19068) {
      var a = cljs.core.first(arglist__19068);
      var f = cljs.core.first(cljs.core.next(arglist__19068));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19068)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068)))));
      return G__19066__delegate.call(this, a, f, x, y, z, more)
    };
    return G__19066
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___2.call(this, a, f);
      case 3:
        return swap_BANG___3.call(this, a, f, x);
      case 4:
        return swap_BANG___4.call(this, a, f, x, y);
      case 5:
        return swap_BANG___5.call(this, a, f, x, y, z);
      default:
        return swap_BANG___6.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
  swap_BANG_.__2 = swap_BANG___2;
  swap_BANG_.__3 = swap_BANG___3;
  swap_BANG_.__4 = swap_BANG___4;
  swap_BANG_.__5 = swap_BANG___5;
  swap_BANG_.__6 = swap_BANG___6;
  return swap_BANG_
}();
cljs.core.compare_and_set_BANG_ = function compare_and_set_BANG_(a, oldval, newval) {
  if(cljs.core._EQ_.__2(a.state, oldval)) {
    cljs.core.reset_BANG_(a, newval);
    return true
  }else {
    return false
  }
};
cljs.core.deref = function deref(o) {
  return cljs.core._deref(o)
};
cljs.core.set_validator_BANG_ = function set_validator_BANG_(iref, val) {
  return iref.validator = val
};
cljs.core.get_validator = function get_validator(iref) {
  return iref.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var alter_meta_BANG___delegate = function(iref, f, args) {
    return iref.meta = cljs.core.apply.__3(f, iref.meta, args)
  };
  var alter_meta_BANG_ = function(iref, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__19081) {
    var iref = cljs.core.first(arglist__19081);
    var f = cljs.core.first(cljs.core.next(arglist__19081));
    var args = cljs.core.rest(cljs.core.next(arglist__19081));
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  return alter_meta_BANG_
}();
cljs.core.reset_meta_BANG_ = function reset_meta_BANG_(iref, m) {
  return iref.meta = m
};
cljs.core.add_watch = function add_watch(iref, key, f) {
  return cljs.core._add_watch(iref, key, f)
};
cljs.core.remove_watch = function remove_watch(iref, key) {
  return cljs.core._remove_watch(iref, key)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var gensym = null;
  var gensym__0 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__1 = function(prefix_string) {
    if(cljs.core.gensym_counter === null) {
      cljs.core.gensym_counter = cljs.core.atom.__1(0)
    }else {
    }
    return cljs.core.symbol.__1(cljs.core.str(prefix_string, cljs.core.swap_BANG_.__2(cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__0.call(this);
      case 1:
        return gensym__1.call(this, prefix_string)
    }
    throw"Invalid arity: " + arguments.length;
  };
  gensym.__0 = gensym__0;
  gensym.__1 = gensym__1;
  return gensym
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(state, f) {
  this.state = state;
  this.f = f
};
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK___1 = function(d) {
  var this__19113 = this;
  return"\ufdd0'done".call(null, cljs.core.deref(this__19113.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref__1 = function(_) {
  var this__19114 = this;
  return"\ufdd0'value".call(null, cljs.core.swap_BANG_.__2(this__19114.state, function(p__19115) {
    var curr_state__19116 = p__19115;
    var curr_state__19117 = cljs.core.seq_QMARK_(curr_state__19116) ? cljs.core.apply.__2(cljs.core.hash_map, curr_state__19116) : curr_state__19116;
    var done__19118 = cljs.core.get.__2(curr_state__19117, "\ufdd0'done");
    if(cljs.core.truth_(done__19118)) {
      return curr_state__19117
    }else {
      return cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":true, "\ufdd0'value":this__19114.f.call(null)})
    }
  }))
};
cljs.core.Delay;
cljs.core.delay_QMARK_ = function delay_QMARK_(x) {
  return cljs.core.instance_QMARK_(cljs.core.Delay, x)
};
cljs.core.force = function force(x) {
  if(cljs.core.delay_QMARK_(x)) {
    return cljs.core.deref(x)
  }else {
    return x
  }
};
cljs.core.realized_QMARK_ = function realized_QMARK_(d) {
  return cljs.core._realized_QMARK_(d)
};
cljs.core.js__GT_clj = function() {
  var js__GT_clj__delegate = function(x, options) {
    var map__19130__19157 = options;
    var map__19130__19159 = cljs.core.seq_QMARK_(map__19130__19157) ? cljs.core.apply.__2(cljs.core.hash_map, map__19130__19157) : map__19130__19157;
    var keywordize_keys__19160 = cljs.core.get.__2(map__19130__19159, "\ufdd0'keywordize-keys");
    var keyfn__19186 = cljs.core.truth_(keywordize_keys__19160) ? cljs.core.keyword : cljs.core.str;
    var f__19211 = function thisfn(x) {
      if(cljs.core.seq_QMARK_(x)) {
        return cljs.core.doall.__1(cljs.core.map.__2(thisfn, x))
      }else {
        if(cljs.core.coll_QMARK_(x)) {
          return cljs.core.into(cljs.core.empty(x), cljs.core.map.__2(thisfn, x))
        }else {
          if(cljs.core.truth_(goog.isArray.call(null, x))) {
            return cljs.core.vec(cljs.core.map.__2(thisfn, x))
          }else {
            if(cljs.core.type(x) === Object) {
              return cljs.core.into(cljs.core.ObjMap.fromObject([], {}), function() {
                var iter__536__auto____19206 = function iter__19194(s__19195) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__19195__19197 = s__19195;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq(s__19195__19197))) {
                        var k__19200 = cljs.core.first(s__19195__19197);
                        return cljs.core.cons(cljs.core.PersistentVector.fromArray([keyfn__19186.call(null, k__19200), thisfn.call(null, x[k__19200])]), iter__19194.call(null, cljs.core.rest(s__19195__19197)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__536__auto____19206.call(null, cljs.core.js_keys(x))
              }())
            }else {
              if("\ufdd0'else") {
                return x
              }else {
                return null
              }
            }
          }
        }
      }
    };
    return f__19211.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__19239) {
    var x = cljs.core.first(arglist__19239);
    var options = cljs.core.rest(arglist__19239);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__19248 = cljs.core.atom.__1(cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__19258__delegate = function(args) {
      var temp__3695__auto____19252 = cljs.core.get.__2(cljs.core.deref(mem__19248), args);
      if(cljs.core.truth_(temp__3695__auto____19252)) {
        var v__19256 = temp__3695__auto____19252;
        return v__19256
      }else {
        var ret__19257 = cljs.core.apply.__2(f, args);
        cljs.core.swap_BANG_.__4(mem__19248, cljs.core.assoc, args, ret__19257);
        return ret__19257
      }
    };
    var G__19258 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__19258__delegate.call(this, args)
    };
    G__19258.cljs$lang$maxFixedArity = 0;
    G__19258.cljs$lang$applyTo = function(arglist__19262) {
      var args = cljs.core.seq(arglist__19262);
      return G__19258__delegate.call(this, args)
    };
    return G__19258
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__1 = function(f) {
    while(true) {
      var ret__19272 = f.call(null);
      if(cljs.core.fn_QMARK_(ret__19272)) {
        var G__19274 = ret__19272;
        f = G__19274;
        continue
      }else {
        return ret__19272
      }
      break
    }
  };
  var trampoline__2 = function() {
    var G__19275__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.__2(f, args)
      })
    };
    var G__19275 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__19275__delegate.call(this, f, args)
    };
    G__19275.cljs$lang$maxFixedArity = 1;
    G__19275.cljs$lang$applyTo = function(arglist__19276) {
      var f = cljs.core.first(arglist__19276);
      var args = cljs.core.rest(arglist__19276);
      return G__19275__delegate.call(this, f, args)
    };
    return G__19275
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__1.call(this, f);
      default:
        return trampoline__2.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
  trampoline.__1 = trampoline__1;
  trampoline.__2 = trampoline__2;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return rand.call(null, 1)
  };
  var rand__1 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.__0 = rand__0;
  rand.__1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return Math.floor(Math.random() * n)
};
cljs.core.rand_nth = function rand_nth(coll) {
  return cljs.core.nth.__2(coll, cljs.core.rand_int(cljs.core.count(coll)))
};
cljs.core.group_by = function group_by(f, coll) {
  return cljs.core.reduce.__3(function(ret, x) {
    var k__19303 = f.call(null, x);
    return cljs.core.assoc.__3(ret, k__19303, cljs.core.conj.__2(cljs.core.get.__3(ret, k__19303, cljs.core.PersistentVector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.__1(cljs.core.make_hierarchy());
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___2 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref(cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___3 = function(h, child, parent) {
    var or__3548__auto____19343 = cljs.core._EQ_.__2(child, parent);
    if(or__3548__auto____19343) {
      return or__3548__auto____19343
    }else {
      var or__3548__auto____19384 = cljs.core.contains_QMARK_("\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(or__3548__auto____19384) {
        return or__3548__auto____19384
      }else {
        var and__3546__auto____19385 = cljs.core.vector_QMARK_(parent);
        if(and__3546__auto____19385) {
          var and__3546__auto____19386 = cljs.core.vector_QMARK_(child);
          if(and__3546__auto____19386) {
            var and__3546__auto____19387 = cljs.core._EQ_.__2(cljs.core.count(parent), cljs.core.count(child));
            if(and__3546__auto____19387) {
              var ret__19404 = true;
              var i__19405 = 0;
              while(true) {
                if(function() {
                  var or__3548__auto____19406 = cljs.core.not(ret__19404);
                  if(or__3548__auto____19406) {
                    return or__3548__auto____19406
                  }else {
                    return cljs.core._EQ_.__2(i__19405, cljs.core.count(parent))
                  }
                }()) {
                  return ret__19404
                }else {
                  var G__19416 = isa_QMARK_.call(null, h, child.call(null, i__19405), parent.call(null, i__19405));
                  var G__19417 = i__19405 + 1;
                  ret__19404 = G__19416;
                  i__19405 = G__19417;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____19387
            }
          }else {
            return and__3546__auto____19386
          }
        }else {
          return and__3546__auto____19385
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___2.call(this, h, child);
      case 3:
        return isa_QMARK___3.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  isa_QMARK_.__2 = isa_QMARK___2;
  isa_QMARK_.__3 = isa_QMARK___3;
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__1 = function(tag) {
    return parents.call(null, cljs.core.deref(cljs.core.global_hierarchy), tag)
  };
  var parents__2 = function(h, tag) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__1.call(this, h);
      case 2:
        return parents__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  parents.__1 = parents__1;
  parents.__2 = parents__2;
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__1 = function(tag) {
    return ancestors.call(null, cljs.core.deref(cljs.core.global_hierarchy), tag)
  };
  var ancestors__2 = function(h, tag) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__1.call(this, h);
      case 2:
        return ancestors__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ancestors.__1 = ancestors__1;
  ancestors.__2 = ancestors__2;
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__1 = function(tag) {
    return descendants.call(null, cljs.core.deref(cljs.core.global_hierarchy), tag)
  };
  var descendants__2 = function(h, tag) {
    return cljs.core.not_empty(cljs.core.get.__2("\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__1.call(this, h);
      case 2:
        return descendants__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  descendants.__1 = descendants__1;
  descendants.__2 = descendants__2;
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__2 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace(parent))) {
    }else {
      throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3684)))));
    }
    cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__3 = function(h, tag, parent) {
    if(cljs.core.not_EQ_.__2(tag, parent)) {
    }else {
      throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3688)))));
    }
    var tp__19468 = "\ufdd0'parents".call(null, h);
    var td__19469 = "\ufdd0'descendants".call(null, h);
    var ta__19470 = "\ufdd0'ancestors".call(null, h);
    var tf__19473 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.__3(function(ret, k) {
        return cljs.core.assoc.__3(ret, k, cljs.core.reduce.__3(cljs.core.conj, cljs.core.get.__3(targets, k, cljs.core.set([])), cljs.core.cons(target, targets.call(null, target))))
      }, m, cljs.core.cons(source, sources.call(null, source)))
    };
    var or__3548__auto____19535 = cljs.core.contains_QMARK_(tp__19468.call(null, tag), parent) ? null : function() {
      if(cljs.core.contains_QMARK_(ta__19470.call(null, tag), parent)) {
        throw new Error(cljs.core.str(tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.contains_QMARK_(ta__19470.call(null, parent), tag)) {
        throw new Error(cljs.core.str("Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.__3("\ufdd0'parents".call(null, h), tag, cljs.core.conj.__2(cljs.core.get.__3(tp__19468, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__19473.call(null, "\ufdd0'ancestors".call(null, h), tag, td__19469, parent, ta__19470), "\ufdd0'descendants":tf__19473.call(null, "\ufdd0'descendants".call(null, h), parent, ta__19470, tag, td__19469)})
    }();
    if(cljs.core.truth_(or__3548__auto____19535)) {
      return or__3548__auto____19535
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__2.call(this, h, tag);
      case 3:
        return derive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  derive.__2 = derive__2;
  derive.__3 = derive__3;
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__2 = function(tag, parent) {
    cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__3 = function(h, tag, parent) {
    var parentMap__19554 = "\ufdd0'parents".call(null, h);
    var childsParents__19555 = cljs.core.truth_(parentMap__19554.call(null, tag)) ? cljs.core.disj.__2(parentMap__19554.call(null, tag), parent) : cljs.core.set([]);
    var newParents__19556 = cljs.core.truth_(cljs.core.not_empty(childsParents__19555)) ? cljs.core.assoc.__3(parentMap__19554, tag, childsParents__19555) : cljs.core.dissoc.__2(parentMap__19554, tag);
    var deriv_seq__19563 = cljs.core.flatten(cljs.core.map.__2(function(p1__19435_SHARP_) {
      return cljs.core.cons(cljs.core.first(p1__19435_SHARP_), cljs.core.interpose(cljs.core.first(p1__19435_SHARP_), cljs.core.second(p1__19435_SHARP_)))
    }, cljs.core.seq(newParents__19556)));
    if(cljs.core.contains_QMARK_(parentMap__19554.call(null, tag), parent)) {
      return cljs.core.reduce.__3(function(p1__19438_SHARP_, p2__19440_SHARP_) {
        return cljs.core.apply.__3(cljs.core.derive, p1__19438_SHARP_, p2__19440_SHARP_)
      }, cljs.core.make_hierarchy(), cljs.core.partition.__2(2, deriv_seq__19563))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__2.call(this, h, tag);
      case 3:
        return underive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  underive.__2 = underive__2;
  underive.__3 = underive__3;
  return underive
}();
cljs.core.reset_cache = function reset_cache(method_cache, method_table, cached_hierarchy, hierarchy) {
  cljs.core.swap_BANG_.__2(method_cache, function(_) {
    return cljs.core.deref(method_table)
  });
  return cljs.core.swap_BANG_.__2(cached_hierarchy, function(_) {
    return cljs.core.deref(hierarchy)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(x, y, prefer_table) {
  var xprefs__19593 = cljs.core.deref(prefer_table).call(null, x);
  var or__3548__auto____19598 = cljs.core.truth_(function() {
    var and__3546__auto____19596 = xprefs__19593;
    if(cljs.core.truth_(and__3546__auto____19596)) {
      return xprefs__19593.call(null, y)
    }else {
      return and__3546__auto____19596
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____19598)) {
    return or__3548__auto____19598
  }else {
    var or__3548__auto____19602 = function() {
      var ps__19600 = cljs.core.parents.__1(y);
      while(true) {
        if(cljs.core.count(ps__19600) > 0) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first(ps__19600), prefer_table))) {
          }else {
          }
          var G__19638 = cljs.core.rest(ps__19600);
          ps__19600 = G__19638;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____19602)) {
      return or__3548__auto____19602
    }else {
      var or__3548__auto____19628 = function() {
        var ps__19612 = cljs.core.parents.__1(x);
        while(true) {
          if(cljs.core.count(ps__19612) > 0) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first(ps__19612), y, prefer_table))) {
            }else {
            }
            var G__19642 = cljs.core.rest(ps__19612);
            ps__19612 = G__19642;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____19628)) {
        return or__3548__auto____19628
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____19647 = cljs.core.prefers_STAR_(x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____19647)) {
    return or__3548__auto____19647
  }else {
    return cljs.core.isa_QMARK_.__2(x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__19669 = cljs.core.reduce.__3(function(be, p__19653) {
    var vec__19654__19655 = p__19653;
    var k__19656 = cljs.core.nth.__3(vec__19654__19655, 0, null);
    var ___19657 = cljs.core.nth.__3(vec__19654__19655, 1, null);
    var e__19658 = vec__19654__19655;
    if(cljs.core.isa_QMARK_.__2(dispatch_val, k__19656)) {
      var be2__19664 = cljs.core.truth_(function() {
        var or__3548__auto____19662 = be === null;
        if(or__3548__auto____19662) {
          return or__3548__auto____19662
        }else {
          return cljs.core.dominates(k__19656, cljs.core.first(be), prefer_table)
        }
      }()) ? e__19658 : be;
      if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__19664), k__19656, prefer_table))) {
      }else {
        throw new Error(cljs.core.str("Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__19656, " and ", cljs.core.first(be2__19664), ", and neither is preferred"));
      }
      return be2__19664
    }else {
      return be
    }
  }, null, cljs.core.deref(method_table));
  if(cljs.core.truth_(best_entry__19669)) {
    if(cljs.core._EQ_.__2(cljs.core.deref(cached_hierarchy), cljs.core.deref(hierarchy))) {
      cljs.core.swap_BANG_.__4(method_cache, cljs.core.assoc, dispatch_val, cljs.core.second(best_entry__19669));
      return cljs.core.second(best_entry__19669)
    }else {
      cljs.core.reset_cache(method_cache, method_table, cached_hierarchy, hierarchy);
      return find_and_cache_best_method.call(null, name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy)
    }
  }else {
    return null
  }
};
void 0;
cljs.core.IMultiFn = {};
cljs.core._reset = function _reset(mf) {
  if(function() {
    var and__3546__auto____19713 = mf;
    if(and__3546__auto____19713) {
      return mf.cljs$core$IMultiFn$_reset__1
    }else {
      return and__3546__auto____19713
    }
  }()) {
    return mf.cljs$core$IMultiFn$_reset__1(mf)
  }else {
    return function() {
      var or__3548__auto____19716 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(or__3548__auto____19716) {
        return or__3548__auto____19716
      }else {
        var or__3548__auto____19719 = cljs.core._reset["_"];
        if(or__3548__auto____19719) {
          return or__3548__auto____19719
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19720 = mf;
    if(and__3546__auto____19720) {
      return mf.cljs$core$IMultiFn$_add_method__3
    }else {
      return and__3546__auto____19720
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method__3(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____19750 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19750)) {
        return or__3548__auto____19750
      }else {
        var or__3548__auto____19752 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____19752)) {
          return or__3548__auto____19752
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19758 = mf;
    if(cljs.core.truth_(and__3546__auto____19758)) {
      return mf.cljs$core$IMultiFn$_remove_method__2
    }else {
      return and__3546__auto____19758
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method__2(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____19759 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19759)) {
        return or__3548__auto____19759
      }else {
        var or__3548__auto____19760 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____19760)) {
          return or__3548__auto____19760
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19762 = mf;
    if(cljs.core.truth_(and__3546__auto____19762)) {
      return mf.cljs$core$IMultiFn$_prefer_method__3
    }else {
      return and__3546__auto____19762
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method__3(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____19763 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19763)) {
        return or__3548__auto____19763
      }else {
        var or__3548__auto____19764 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____19764)) {
          return or__3548__auto____19764
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19767 = mf;
    if(cljs.core.truth_(and__3546__auto____19767)) {
      return mf.cljs$core$IMultiFn$_get_method__2
    }else {
      return and__3546__auto____19767
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method__2(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____19844 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19844)) {
        return or__3548__auto____19844
      }else {
        var or__3548__auto____19845 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____19845)) {
          return or__3548__auto____19845
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19846 = mf;
    if(cljs.core.truth_(and__3546__auto____19846)) {
      return mf.cljs$core$IMultiFn$_methods__1
    }else {
      return and__3546__auto____19846
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods__1(mf)
  }else {
    return function() {
      var or__3548__auto____19847 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19847)) {
        return or__3548__auto____19847
      }else {
        var or__3548__auto____19848 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____19848)) {
          return or__3548__auto____19848
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19849 = mf;
    if(cljs.core.truth_(and__3546__auto____19849)) {
      return mf.cljs$core$IMultiFn$_prefers__1
    }else {
      return and__3546__auto____19849
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers__1(mf)
  }else {
    return function() {
      var or__3548__auto____19850 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19850)) {
        return or__3548__auto____19850
      }else {
        var or__3548__auto____19851 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____19851)) {
          return or__3548__auto____19851
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____19852 = mf;
    if(cljs.core.truth_(and__3546__auto____19852)) {
      return mf.cljs$core$IMultiFn$_dispatch__2
    }else {
      return and__3546__auto____19852
    }
  }())) {
    return mf.cljs$core$IMultiFn$_dispatch__2(mf, args)
  }else {
    return function() {
      var or__3548__auto____19853 = cljs.core._dispatch[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____19853)) {
        return or__3548__auto____19853
      }else {
        var or__3548__auto____19854 = cljs.core._dispatch["_"];
        if(cljs.core.truth_(or__3548__auto____19854)) {
          return or__3548__auto____19854
        }else {
          throw cljs.core.missing_protocol("IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
void 0;
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__19891 = cljs.core.apply.__2(dispatch_fn, args);
  var target_fn__19892 = cljs.core._get_method(mf, dispatch_val__19891);
  if(cljs.core.truth_(target_fn__19892)) {
  }else {
    throw new Error(cljs.core.str("No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__19891));
  }
  return cljs.core.apply.__2(target_fn__19892, args)
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
  return cljs.core.list("cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash__1 = function(this$) {
  var this__19894 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset__1 = function(mf) {
  var this__19895 = this;
  cljs.core.swap_BANG_.__2(this__19895.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this__19895.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this__19895.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.__2(this__19895.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method__3 = function(mf, dispatch_val, method) {
  var this__19897 = this;
  cljs.core.swap_BANG_.__4(this__19897.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache(this__19897.method_cache, this__19897.method_table, this__19897.cached_hierarchy, this__19897.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method__2 = function(mf, dispatch_val) {
  var this__19903 = this;
  cljs.core.swap_BANG_.__3(this__19903.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache(this__19903.method_cache, this__19903.method_table, this__19903.cached_hierarchy, this__19903.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method__2 = function(mf, dispatch_val) {
  var this__19904 = this;
  if(cljs.core._EQ_.__2(cljs.core.deref(this__19904.cached_hierarchy), cljs.core.deref(this__19904.hierarchy))) {
  }else {
    cljs.core.reset_cache(this__19904.method_cache, this__19904.method_table, this__19904.cached_hierarchy, this__19904.hierarchy)
  }
  var temp__3695__auto____19906 = cljs.core.deref(this__19904.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____19906)) {
    var target_fn__19907 = temp__3695__auto____19906;
    return target_fn__19907
  }else {
    var temp__3695__auto____19908 = cljs.core.find_and_cache_best_method(this__19904.name, dispatch_val, this__19904.hierarchy, this__19904.method_table, this__19904.prefer_table, this__19904.method_cache, this__19904.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____19908)) {
      var target_fn__19909 = temp__3695__auto____19908;
      return target_fn__19909
    }else {
      return cljs.core.deref(this__19904.method_table).call(null, this__19904.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method__3 = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__19910 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x, dispatch_val_y, this__19910.prefer_table))) {
    throw new Error(cljs.core.str("Preference conflict in multimethod '", this__19910.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.__2(this__19910.prefer_table, function(old) {
    return cljs.core.assoc.__3(old, dispatch_val_x, cljs.core.conj.__2(cljs.core.get.__3(old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache(this__19910.method_cache, this__19910.method_table, this__19910.cached_hierarchy, this__19910.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods__1 = function(mf) {
  var this__19915 = this;
  return cljs.core.deref(this__19915.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers__1 = function(mf) {
  var this__19916 = this;
  return cljs.core.deref(this__19916.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch__2 = function(mf, args) {
  var this__19917 = this;
  return cljs.core.do_dispatch(mf, this__19917.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__19931__delegate = function(_, args) {
    return cljs.core._dispatch(this, args)
  };
  var G__19931 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__19931__delegate.call(this, _, args)
  };
  G__19931.cljs$lang$maxFixedArity = 1;
  G__19931.cljs$lang$applyTo = function(arglist__19932) {
    var _ = cljs.core.first(arglist__19932);
    var args = cljs.core.rest(arglist__19932);
    return G__19931__delegate.call(this, _, args)
  };
  return G__19931
}();
cljs.core.MultiFn.prototype.apply = function(_, args) {
  return cljs.core._dispatch(this, args)
};
cljs.core.remove_all_methods = function remove_all_methods(multifn) {
  return cljs.core._reset(multifn)
};
cljs.core.remove_method = function remove_method(multifn, dispatch_val) {
  return cljs.core._remove_method(multifn, dispatch_val)
};
cljs.core.prefer_method = function prefer_method(multifn, dispatch_val_x, dispatch_val_y) {
  return cljs.core._prefer_method(multifn, dispatch_val_x, dispatch_val_y)
};
cljs.core.methods$ = function methods$(multifn) {
  return cljs.core._methods(multifn)
};
cljs.core.get_method = function get_method(multifn, dispatch_val) {
  return cljs.core._get_method(multifn, dispatch_val)
};
cljs.core.prefers = function prefers(multifn) {
  return cljs.core._prefers(multifn)
};
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
goog.provide("clojure.string");
goog.require("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
clojure.string.seq_reverse = function seq_reverse(coll) {
  return cljs.core.reduce.__3(cljs.core.conj, cljs.core.List.EMPTY, coll)
};
clojure.string.reverse = function reverse(s) {
  return s.split("").reverse().join("")
};
clojure.string.replace = function replace(s, match, replacement) {
  if(cljs.core.string_QMARK_(match)) {
    return s.replace(new RegExp(goog.string.regExpEscape.call(null, match), "g"), replacement)
  }else {
    if(cljs.core.truth_(match.hasOwnProperty("source"))) {
      return s.replace(new RegExp(match.source, "g"), replacement)
    }else {
      if("\ufdd0'else") {
        throw cljs.core.str("Invalid match arg: ", match);
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
  var join__1 = function(coll) {
    return cljs.core.apply.__2(cljs.core.str, coll)
  };
  var join__2 = function(separator, coll) {
    return cljs.core.apply.__2(cljs.core.str, cljs.core.interpose(separator, coll))
  };
  join = function(separator, coll) {
    switch(arguments.length) {
      case 1:
        return join__1.call(this, separator);
      case 2:
        return join__2.call(this, separator, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  join.__1 = join__1;
  join.__2 = join__2;
  return join
}();
clojure.string.upper_case = function upper_case(s) {
  return s.toUpperCase()
};
clojure.string.lower_case = function lower_case(s) {
  return s.toLowerCase()
};
clojure.string.capitalize = function capitalize(s) {
  if(cljs.core.count(s) < 2) {
    return clojure.string.upper_case(s)
  }else {
    return cljs.core.str(clojure.string.upper_case(cljs.core.subs.__3(s, 0, 1)), clojure.string.lower_case(cljs.core.subs.__2(s, 1)))
  }
};
clojure.string.split = function() {
  var split = null;
  var split__2 = function(s, re) {
    return cljs.core.vec(cljs.core.str.__1(s).split(re))
  };
  var split__3 = function(s, re, limit) {
    if(limit < 1) {
      return cljs.core.vec(cljs.core.str.__1(s).split(re))
    }else {
      var s__21462 = s;
      var limit__21463 = limit;
      var parts__21464 = cljs.core.PersistentVector.fromArray([]);
      while(true) {
        if(cljs.core._EQ_.__2(limit__21463, 1)) {
          return cljs.core.conj.__2(parts__21464, s__21462)
        }else {
          var temp__3695__auto____21465 = cljs.core.re_find(re, s__21462);
          if(cljs.core.truth_(temp__3695__auto____21465)) {
            var m__21466 = temp__3695__auto____21465;
            var index__21467 = s__21462.indexOf(m__21466);
            var G__21471 = s__21462.substring(index__21467 + cljs.core.count(m__21466));
            var G__21472 = limit__21463 - 1;
            var G__21473 = cljs.core.conj.__2(parts__21464, s__21462.substring(0, index__21467));
            s__21462 = G__21471;
            limit__21463 = G__21472;
            parts__21464 = G__21473;
            continue
          }else {
            return cljs.core.conj.__2(parts__21464, s__21462)
          }
        }
        break
      }
    }
  };
  split = function(s, re, limit) {
    switch(arguments.length) {
      case 2:
        return split__2.call(this, s, re);
      case 3:
        return split__3.call(this, s, re, limit)
    }
    throw"Invalid arity: " + arguments.length;
  };
  split.__2 = split__2;
  split.__3 = split__3;
  return split
}();
clojure.string.split_lines = function split_lines(s) {
  return clojure.string.split.__2(s, /\n|\r\n/)
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
  var index__21474 = s.length;
  while(true) {
    if(index__21474 === 0) {
      return""
    }else {
      var ch__21475 = cljs.core.get.__2(s, index__21474 - 1);
      if(function() {
        var or__3548__auto____21476 = cljs.core._EQ_.__2(ch__21475, "\n");
        if(or__3548__auto____21476) {
          return or__3548__auto____21476
        }else {
          return cljs.core._EQ_.__2(ch__21475, "\r")
        }
      }()) {
        var G__21480 = index__21474 - 1;
        index__21474 = G__21480;
        continue
      }else {
        return s.substring(0, index__21474)
      }
    }
    break
  }
};
clojure.string.blank_QMARK_ = function blank_QMARK_(s) {
  var s__21481 = cljs.core.str.__1(s);
  if(cljs.core.truth_(function() {
    var or__3548__auto____21482 = cljs.core.not(s__21481);
    if(or__3548__auto____21482) {
      return or__3548__auto____21482
    }else {
      var or__3548__auto____21483 = cljs.core._EQ_.__2("", s__21481);
      if(or__3548__auto____21483) {
        return or__3548__auto____21483
      }else {
        return cljs.core.re_matches(/\s+/, s__21481)
      }
    }
  }())) {
    return true
  }else {
    return false
  }
};
clojure.string.escape = function escape(s, cmap) {
  var buffer__21487 = new goog.string.StringBuffer;
  var length__21488 = s.length;
  var index__21489 = 0;
  while(true) {
    if(cljs.core._EQ_.__2(length__21488, index__21489)) {
      return buffer__21487.toString()
    }else {
      var ch__21490 = s.charAt(index__21489);
      var temp__3695__auto____21491 = cljs.core.get.__2(cmap, ch__21490);
      if(cljs.core.truth_(temp__3695__auto____21491)) {
        var replacement__21492 = temp__3695__auto____21491;
        buffer__21487.append(cljs.core.str.__1(replacement__21492))
      }else {
        buffer__21487.append(ch__21490)
      }
      var G__21495 = index__21489 + 1;
      index__21489 = G__21495;
      continue
    }
    break
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
goog.provide("goog.events.EventWrapper");
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
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
goog.provide("domina.support");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.events");
var div__21456 = document.createElement("div");
var test_html__21457 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div__21456.innerHTML = test_html__21457;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.__2(div__21456.firstChild.nodeType, 3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.__2(div__21456.getElementsByTagName("tbody").length, 0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.__2(div__21456.getElementsByTagName("link").length, 0);
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
var opt_wrapper__20767 = cljs.core.PersistentVector.fromArray([1, "<select multiple='multiple'>", "</select>"]);
var table_section_wrapper__20768 = cljs.core.PersistentVector.fromArray([1, "<table>", "</table>"]);
var cell_wrapper__20769 = cljs.core.PersistentVector.fromArray([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col", "\ufdd0'default", "tfoot", "caption", "optgroup", "legend", "area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], {"col":cljs.core.PersistentVector.fromArray([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":cljs.core.PersistentVector.fromArray([0, "", ""]), "tfoot":table_section_wrapper__20768, "caption":table_section_wrapper__20768, "optgroup":opt_wrapper__20767, "legend":cljs.core.PersistentVector.fromArray([1, 
"<fieldset>", "</fieldset>"]), "area":cljs.core.PersistentVector.fromArray([1, "<map>", "</map>"]), "td":cell_wrapper__20769, "thead":table_section_wrapper__20768, "th":cell_wrapper__20769, "option":opt_wrapper__20767, "tbody":table_section_wrapper__20768, "tr":cljs.core.PersistentVector.fromArray([2, "<table><tbody>", "</tbody></table>"]), "colgroup":table_section_wrapper__20768});
domina.remove_extraneous_tbody_BANG_ = function remove_extraneous_tbody_BANG_(div, html) {
  var no_tbody_QMARK___20780 = cljs.core.not(cljs.core.re_find(domina.re_tbody, html));
  var tbody__20785 = function() {
    var and__3546__auto____20781 = cljs.core._EQ_.__2(domina.tag_name, "table");
    if(and__3546__auto____20781) {
      return no_tbody_QMARK___20780
    }else {
      return and__3546__auto____20781
    }
  }() ? function() {
    var and__3546__auto____20783 = div.firstChild;
    if(cljs.core.truth_(and__3546__auto____20783)) {
      return div.firstChild.childNodes
    }else {
      return and__3546__auto____20783
    }
  }() : function() {
    var and__3546__auto____20784 = cljs.core._EQ_.__2(domina.start_wrap, "<table>");
    if(and__3546__auto____20784) {
      return no_tbody_QMARK___20780
    }else {
      return and__3546__auto____20784
    }
  }() ? div.childNodes : cljs.core.PersistentVector.fromArray([]);
  var G__20786__20787 = cljs.core.seq(tbody__20785);
  if(cljs.core.truth_(G__20786__20787)) {
    var child__20788 = cljs.core.first(G__20786__20787);
    var G__20786__20789 = G__20786__20787;
    while(true) {
      if(function() {
        var and__3546__auto____20790 = cljs.core._EQ_.__2(child__20788.nodeName, "tbody");
        if(and__3546__auto____20790) {
          return cljs.core._EQ_.__2(child__20788.childNodes.length, 0)
        }else {
          return and__3546__auto____20790
        }
      }()) {
        child__20788.parentNode.removeChild(child__20788)
      }else {
      }
      var temp__3698__auto____20900 = cljs.core.next(G__20786__20789);
      if(cljs.core.truth_(temp__3698__auto____20900)) {
        var G__20786__20901 = temp__3698__auto____20900;
        var G__20909 = cljs.core.first(G__20786__20901);
        var G__20910 = G__20786__20901;
        child__20788 = G__20909;
        G__20786__20789 = G__20910;
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
  return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace, html))), div.firstChild)
};
domina.html_to_dom = function html_to_dom(html) {
  var html__20912 = clojure.string.replace(html, domina.re_xhtml_tag, "<$1></$2>");
  var tag_name__20913 = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name, html__20912))).toLowerCase();
  var vec__20911__20914 = cljs.core.get.__3(domina.wrap_map, tag_name__20913, "\ufdd0'default".call(null, domina.wrap_map));
  var depth__20915 = cljs.core.nth.__3(vec__20911__20914, 0, null);
  var start_wrap__20916 = cljs.core.nth.__3(vec__20911__20914, 1, null);
  var end_wrap__20917 = cljs.core.nth.__3(vec__20911__20914, 2, null);
  var div__20921 = function() {
    var wrapper__20919 = function() {
      var div__20918 = document.createElement("div");
      div__20918.innerHTML = cljs.core.str(start_wrap__20916, html__20912, end_wrap__20917);
      return div__20918
    }();
    var level__20920 = depth__20915;
    while(true) {
      if(level__20920 > 0) {
        var G__20924 = wrapper__20919.lastChild;
        var G__20925 = level__20920 - 1;
        wrapper__20919 = G__20924;
        level__20920 = G__20925;
        continue
      }else {
        return wrapper__20919
      }
      break
    }
  }();
  if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)) {
    domina.remove_extraneous_tbody_BANG_(div__20921, html__20912)
  }else {
  }
  if(cljs.core.truth_(function() {
    var and__3546__auto____20922 = cljs.core.not(domina.support.leading_whitespace_QMARK_);
    if(and__3546__auto____20922) {
      return cljs.core.re_find(domina.re_leading_whitespace, html__20912)
    }else {
      return and__3546__auto____20922
    }
  }())) {
    domina.restore_leading_whitespace_BANG_(div__20921, html__20912)
  }else {
  }
  return div__20921.childNodes
};
domina.string_to_dom = function string_to_dom(s) {
  if(cljs.core.truth_(cljs.core.re_find(domina.re_html, s))) {
    return domina.html_to_dom(s)
  }else {
    return document.createTextNode(s)
  }
};
void 0;
domina.DomContent = {};
domina.nodes = function nodes(content) {
  if(function() {
    var and__3546__auto____20930 = content;
    if(and__3546__auto____20930) {
      return content.domina$DomContent$nodes__1
    }else {
      return and__3546__auto____20930
    }
  }()) {
    return content.domina$DomContent$nodes__1(content)
  }else {
    return function() {
      var or__3548__auto____20931 = domina.nodes[goog.typeOf.call(null, content)];
      if(or__3548__auto____20931) {
        return or__3548__auto____20931
      }else {
        var or__3548__auto____20932 = domina.nodes["_"];
        if(or__3548__auto____20932) {
          return or__3548__auto____20932
        }else {
          throw cljs.core.missing_protocol("DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(function() {
    var and__3546__auto____20933 = nodeseq;
    if(and__3546__auto____20933) {
      return nodeseq.domina$DomContent$single_node__1
    }else {
      return and__3546__auto____20933
    }
  }()) {
    return nodeseq.domina$DomContent$single_node__1(nodeseq)
  }else {
    return function() {
      var or__3548__auto____20934 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(or__3548__auto____20934) {
        return or__3548__auto____20934
      }else {
        var or__3548__auto____20935 = domina.single_node["_"];
        if(or__3548__auto____20935) {
          return or__3548__auto____20935
        }else {
          throw cljs.core.missing_protocol("DomContent.single-node", nodeseq);
        }
      }
    }().call(null, nodeseq)
  }
};
void 0;
domina._STAR_debug_STAR_ = true;
domina.log_debug = function log_debug(mesg) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____20985 = domina._STAR_debug_STAR_;
    if(cljs.core.truth_(and__3546__auto____20985)) {
      return cljs.core.not(cljs.core._EQ_.__2(window.console, undefined))
    }else {
      return and__3546__auto____20985
    }
  }())) {
    return console.log(mesg)
  }else {
    return null
  }
};
domina.log = function log(mesg) {
  if(cljs.core.truth_(window.console)) {
    return console.log(mesg)
  }else {
    return null
  }
};
domina.by_id = function by_id(id) {
  return goog.dom.getElement.call(null, cljs.core.name(id))
};
void 0;
domina.by_class = function by_class(class_name) {
  if(void 0 === domina.t21031) {
    domina.t21031 = function(class_name, by_class, __meta__321__auto__) {
      this.class_name = class_name;
      this.by_class = by_class;
      this.__meta__321__auto__ = __meta__321__auto__
    };
    domina.t21031.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
      return cljs.core.list("domina.t21031")
    };
    domina.t21031.prototype.domina$DomContent$ = true;
    domina.t21031.prototype.domina$DomContent$nodes__1 = function(_) {
      var this__21033 = this;
      return domina.normalize_seq(goog.dom.getElementsByClass.call(null, cljs.core.name(this__21033.class_name)))
    };
    domina.t21031.prototype.domina$DomContent$single_node__1 = function(_) {
      var this__21035 = this;
      return domina.normalize_seq(goog.dom.getElementByClass.call(null, cljs.core.name(this__21035.class_name)))
    };
    domina.t21031.prototype.cljs$core$IMeta$ = true;
    domina.t21031.prototype.cljs$core$IMeta$_meta__1 = function(___322__auto__) {
      var this__21037 = this;
      return this__21037.__meta__321__auto__
    };
    domina.t21031.prototype.cljs$core$IWithMeta$ = true;
    domina.t21031.prototype.cljs$core$IWithMeta$_with_meta__2 = function(___322__auto__, __meta__321__auto__) {
      var this__21039 = this;
      return new domina.t21031(this__21039.class_name, this__21039.by_class, __meta__321__auto__)
    };
    domina.t21031
  }else {
  }
  return new domina.t21031(class_name, by_class, null)
};
domina.children = function children(content) {
  return cljs.core.mapcat.__2(goog.dom.getChildren, domina.nodes(content))
};
domina.clone = function clone(content) {
  return cljs.core.map.__2(function(p1__21048_SHARP_) {
    return p1__21048_SHARP_.cloneNode(true)
  }, domina.nodes(content))
};
void 0;
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning(goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning(function(p1__21056_SHARP_, p2__21058_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__21056_SHARP_, p2__21058_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_(parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning(function(p1__21079_SHARP_, p2__21078_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__21078_SHARP_, p1__21079_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning(function(p1__21081_SHARP_, p2__21080_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__21080_SHARP_, p1__21081_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning(function(p1__21109_SHARP_, p2__21107_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__21107_SHARP_, p1__21109_SHARP_)
  }, old_content, new_content);
  return old_content
};
domina.detach_BANG_ = function detach_BANG_(content) {
  return cljs.core.doall.__1(cljs.core.map.__2(goog.dom.removeNode, domina.nodes(content)))
};
domina.destroy_BANG_ = function destroy_BANG_(content) {
  return cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeNode, domina.nodes(content)))
};
domina.destroy_children_BANG_ = function destroy_children_BANG_(content) {
  cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeChildren, domina.nodes(content)));
  return content
};
domina.style = function style(content, name) {
  var s__21112 = goog.style.getStyle.call(null, domina.single_node(content), cljs.core.name(name));
  if(cljs.core.truth_(clojure.string.blank_QMARK_(s__21112))) {
    return null
  }else {
    return s__21112
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node(content).getAttribute(cljs.core.name(name))
};
domina.set_style_BANG_ = function() {
  var set_style_BANG___delegate = function(content, name, value) {
    var G__21116__21117 = cljs.core.seq(domina.nodes(content));
    if(cljs.core.truth_(G__21116__21117)) {
      var n__21118 = cljs.core.first(G__21116__21117);
      var G__21116__21119 = G__21116__21117;
      while(true) {
        goog.style.setStyle.call(null, n__21118, cljs.core.name(name), cljs.core.apply.__2(cljs.core.str, value));
        var temp__3698__auto____21120 = cljs.core.next(G__21116__21119);
        if(cljs.core.truth_(temp__3698__auto____21120)) {
          var G__21116__21121 = temp__3698__auto____21120;
          var G__21127 = cljs.core.first(G__21116__21121);
          var G__21128 = G__21116__21121;
          n__21118 = G__21127;
          G__21116__21119 = G__21128;
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
  set_style_BANG_.cljs$lang$applyTo = function(arglist__21129) {
    var content = cljs.core.first(arglist__21129);
    var name = cljs.core.first(cljs.core.next(arglist__21129));
    var value = cljs.core.rest(cljs.core.next(arglist__21129));
    return set_style_BANG___delegate.call(this, content, name, value)
  };
  return set_style_BANG_
}();
domina.set_attr_BANG_ = function() {
  var set_attr_BANG___delegate = function(content, name, value) {
    var G__21130__21131 = cljs.core.seq(domina.nodes(content));
    if(cljs.core.truth_(G__21130__21131)) {
      var n__21132 = cljs.core.first(G__21130__21131);
      var G__21130__21133 = G__21130__21131;
      while(true) {
        n__21132.setAttribute(cljs.core.name(name), cljs.core.apply.__2(cljs.core.str, value));
        var temp__3698__auto____21134 = cljs.core.next(G__21130__21133);
        if(cljs.core.truth_(temp__3698__auto____21134)) {
          var G__21130__21135 = temp__3698__auto____21134;
          var G__21139 = cljs.core.first(G__21130__21135);
          var G__21140 = G__21130__21135;
          n__21132 = G__21139;
          G__21130__21133 = G__21140;
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
  set_attr_BANG_.cljs$lang$applyTo = function(arglist__21142) {
    var content = cljs.core.first(arglist__21142);
    var name = cljs.core.first(cljs.core.next(arglist__21142));
    var value = cljs.core.rest(cljs.core.next(arglist__21142));
    return set_attr_BANG___delegate.call(this, content, name, value)
  };
  return set_attr_BANG_
}();
domina.remove_attr_BANG_ = function remove_attr_BANG_(content, name) {
  var G__21144__21145 = cljs.core.seq(domina.nodes(content));
  if(cljs.core.truth_(G__21144__21145)) {
    var n__21146 = cljs.core.first(G__21144__21145);
    var G__21144__21147 = G__21144__21145;
    while(true) {
      n__21146.removeAttribute(cljs.core.name(name));
      var temp__3698__auto____21151 = cljs.core.next(G__21144__21147);
      if(cljs.core.truth_(temp__3698__auto____21151)) {
        var G__21144__21152 = temp__3698__auto____21151;
        var G__21158 = cljs.core.first(G__21144__21152);
        var G__21159 = G__21144__21152;
        n__21146 = G__21158;
        G__21144__21147 = G__21159;
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
  return cljs.core.reduce.__3(function(acc, pair) {
    var vec__21166__21167 = pair.split(/\s*:\s*/);
    var k__21168 = cljs.core.nth.__3(vec__21166__21167, 0, null);
    var v__21169 = cljs.core.nth.__3(vec__21166__21167, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____21170 = k__21168;
      if(cljs.core.truth_(and__3546__auto____21170)) {
        return v__21169
      }else {
        return and__3546__auto____21170
      }
    }())) {
      return cljs.core.assoc.__3(acc, cljs.core.keyword.__1(k__21168.toLowerCase()), v__21169)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  var style__21174 = domina.attr(content, "style");
  if(cljs.core.string_QMARK_(style__21174)) {
    return domina.parse_style_attributes(style__21174)
  }else {
    if(cljs.core.truth_(style__21174.cssText)) {
      return domina.parse_style_attributes(style__21174.cssText)
    }else {
      return null
    }
  }
};
domina.attrs = function attrs(content) {
  var node__21188 = domina.single_node(content);
  var attrs__21189 = node__21188.attributes;
  return cljs.core.reduce.__2(cljs.core.conj, cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(function(p1__21173_SHARP_) {
    var attr__21191 = attrs__21189.item(p1__21173_SHARP_);
    var value__21193 = attr__21191.nodeValue;
    if(function() {
      var and__3546__auto____21196 = cljs.core.not_EQ_.__2(null, value__21193);
      if(and__3546__auto____21196) {
        return cljs.core.not_EQ_.__2("", value__21193)
      }else {
        return and__3546__auto____21196
      }
    }()) {
      return cljs.core.HashMap.fromArrays([cljs.core.keyword.__1(attr__21191.nodeName.toLowerCase())], [attr__21191.nodeValue])
    }else {
      return null
    }
  }, cljs.core.range.__1(attrs__21189.length))))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__21206__21208 = cljs.core.seq(styles);
  if(cljs.core.truth_(G__21206__21208)) {
    var G__21211__21213 = cljs.core.first(G__21206__21208);
    var vec__21212__21214 = G__21211__21213;
    var name__21215 = cljs.core.nth.__3(vec__21212__21214, 0, null);
    var value__21216 = cljs.core.nth.__3(vec__21212__21214, 1, null);
    var G__21206__21217 = G__21206__21208;
    var G__21211__21218 = G__21211__21213;
    var G__21206__21219 = G__21206__21217;
    while(true) {
      var vec__21220__21221 = G__21211__21218;
      var name__21222 = cljs.core.nth.__3(vec__21220__21221, 0, null);
      var value__21223 = cljs.core.nth.__3(vec__21220__21221, 1, null);
      var G__21206__21224 = G__21206__21219;
      domina.set_style_BANG_(content, name__21222, value__21223);
      var temp__3698__auto____21227 = cljs.core.next(G__21206__21224);
      if(cljs.core.truth_(temp__3698__auto____21227)) {
        var G__21206__21228 = temp__3698__auto____21227;
        var G__21233 = cljs.core.first(G__21206__21228);
        var G__21234 = G__21206__21228;
        G__21211__21218 = G__21233;
        G__21206__21219 = G__21234;
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
  var G__21235__21236 = cljs.core.seq(attrs);
  if(cljs.core.truth_(G__21235__21236)) {
    var G__21238__21240 = cljs.core.first(G__21235__21236);
    var vec__21239__21241 = G__21238__21240;
    var name__21242 = cljs.core.nth.__3(vec__21239__21241, 0, null);
    var value__21243 = cljs.core.nth.__3(vec__21239__21241, 1, null);
    var G__21235__21244 = G__21235__21236;
    var G__21238__21245 = G__21238__21240;
    var G__21235__21246 = G__21235__21244;
    while(true) {
      var vec__21247__21248 = G__21238__21245;
      var name__21249 = cljs.core.nth.__3(vec__21247__21248, 0, null);
      var value__21250 = cljs.core.nth.__3(vec__21247__21248, 1, null);
      var G__21235__21251 = G__21235__21246;
      domina.set_attr_BANG_(content, name__21249, value__21250);
      var temp__3698__auto____21252 = cljs.core.next(G__21235__21251);
      if(cljs.core.truth_(temp__3698__auto____21252)) {
        var G__21235__21253 = temp__3698__auto____21252;
        var G__21256 = cljs.core.first(G__21235__21253);
        var G__21257 = G__21235__21253;
        G__21238__21245 = G__21256;
        G__21235__21246 = G__21257;
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
  return goog.dom.classes.has.call(null, domina.single_node(content), class$)
};
domina.add_class_BANG_ = function add_class_BANG_(content, class$) {
  var G__21262__21264 = cljs.core.seq(domina.nodes(content));
  if(cljs.core.truth_(G__21262__21264)) {
    var node__21266 = cljs.core.first(G__21262__21264);
    var G__21262__21267 = G__21262__21264;
    while(true) {
      goog.dom.classes.add.call(null, node__21266, class$);
      var temp__3698__auto____21282 = cljs.core.next(G__21262__21267);
      if(cljs.core.truth_(temp__3698__auto____21282)) {
        var G__21262__21283 = temp__3698__auto____21282;
        var G__21286 = cljs.core.first(G__21262__21283);
        var G__21287 = G__21262__21283;
        node__21266 = G__21286;
        G__21262__21267 = G__21287;
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
  var G__21288__21289 = cljs.core.seq(domina.nodes(content));
  if(cljs.core.truth_(G__21288__21289)) {
    var node__21290 = cljs.core.first(G__21288__21289);
    var G__21288__21291 = G__21288__21289;
    while(true) {
      goog.dom.classes.remove.call(null, node__21290, class$);
      var temp__3698__auto____21292 = cljs.core.next(G__21288__21291);
      if(cljs.core.truth_(temp__3698__auto____21292)) {
        var G__21288__21293 = temp__3698__auto____21292;
        var G__21296 = cljs.core.first(G__21288__21293);
        var G__21297 = G__21288__21293;
        node__21290 = G__21296;
        G__21288__21291 = G__21297;
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
  return cljs.core.seq(goog.dom.classes.get.call(null, domina.single_node(content)))
};
domina.text = function() {
  var text = null;
  var text__1 = function(content) {
    return text.call(null, content, true)
  };
  var text__2 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node(content)))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node(content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__1.call(this, content);
      case 2:
        return text__2.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  text.__1 = text__1;
  text.__2 = text__2;
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__21300__21310 = cljs.core.seq(domina.nodes(content));
  if(cljs.core.truth_(G__21300__21310)) {
    var node__21311 = cljs.core.first(G__21300__21310);
    var G__21300__21312 = G__21300__21310;
    while(true) {
      goog.dom.setTextContent.call(null, node__21311, value);
      var temp__3698__auto____21313 = cljs.core.next(G__21300__21312);
      if(cljs.core.truth_(temp__3698__auto____21313)) {
        var G__21300__21314 = temp__3698__auto____21313;
        var G__21320 = cljs.core.first(G__21300__21314);
        var G__21321 = G__21300__21314;
        node__21311 = G__21320;
        G__21300__21312 = G__21321;
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
  return goog.dom.forms.getValue.call(null, domina.single_node(content))
};
domina.set_value_BANG_ = function set_value_BANG_(content, value) {
  var G__21327__21329 = cljs.core.seq(domina.nodes(content));
  if(cljs.core.truth_(G__21327__21329)) {
    var node__21330 = cljs.core.first(G__21327__21329);
    var G__21327__21331 = G__21327__21329;
    while(true) {
      goog.dom.forms.setValue.call(null, node__21330, value);
      var temp__3698__auto____21332 = cljs.core.next(G__21327__21331);
      if(cljs.core.truth_(temp__3698__auto____21332)) {
        var G__21327__21333 = temp__3698__auto____21332;
        var G__21336 = cljs.core.first(G__21327__21333);
        var G__21337 = G__21327__21333;
        node__21330 = G__21336;
        G__21327__21331 = G__21337;
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
  return domina.single_node(content).innerHTML
};
domina.replace_children_BANG_ = function replace_children_BANG_(content, inner_content) {
  return domina.append_BANG_(domina.destroy_children_BANG_(content), inner_content)
};
domina.set_inner_html_BANG_ = function set_inner_html_BANG_(content, html_string) {
  var allows_inner_html_QMARK___21341 = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html, html_string));
  var leading_whitespace_QMARK___21342 = cljs.core.re_find(domina.re_leading_whitespace, html_string);
  var tag_name__21343 = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name, html_string))).toLowerCase();
  var special_tag_QMARK___21344 = cljs.core.contains_QMARK_(domina.wrap_map, tag_name__21343);
  if(cljs.core.truth_(function() {
    var and__3546__auto____21345 = allows_inner_html_QMARK___21341;
    if(cljs.core.truth_(and__3546__auto____21345)) {
      var and__3546__auto____21347 = function() {
        var or__3548__auto____21346 = domina.support.leading_whitespace_QMARK_;
        if(cljs.core.truth_(or__3548__auto____21346)) {
          return or__3548__auto____21346
        }else {
          return cljs.core.not(leading_whitespace_QMARK___21342)
        }
      }();
      if(cljs.core.truth_(and__3546__auto____21347)) {
        return cljs.core.not(special_tag_QMARK___21344)
      }else {
        return and__3546__auto____21347
      }
    }else {
      return and__3546__auto____21345
    }
  }())) {
    var value__21348 = clojure.string.replace(html_string, domina.re_xhtml_tag, "<$1></$2>");
    try {
      var G__21351__21352 = cljs.core.seq(domina.nodes(content));
      if(cljs.core.truth_(G__21351__21352)) {
        var node__21353 = cljs.core.first(G__21351__21352);
        var G__21351__21354 = G__21351__21352;
        while(true) {
          goog.events.removeAll.call(null, node__21353);
          node__21353.innerHTML = value__21348;
          var temp__3698__auto____21355 = cljs.core.next(G__21351__21354);
          if(cljs.core.truth_(temp__3698__auto____21355)) {
            var G__21351__21356 = temp__3698__auto____21355;
            var G__21363 = cljs.core.first(G__21351__21356);
            var G__21364 = G__21351__21356;
            node__21353 = G__21363;
            G__21351__21354 = G__21364;
            continue
          }else {
          }
          break
        }
      }else {
      }
    }catch(e21349) {
      if(cljs.core.instance_QMARK_(domina.Exception, e21349)) {
        var e__21350 = e21349;
        domina.replace_children_BANG_(content, value__21348)
      }else {
        if("\ufdd0'else") {
          throw e21349;
        }else {
        }
      }
    }
  }else {
    domina.replace_children_BANG_(content, html_string)
  }
  return content
};
domina.set_html_BANG_ = function set_html_BANG_(content, inner_content) {
  if(cljs.core.string_QMARK_(inner_content)) {
    return domina.set_inner_html_BANG_(content, inner_content)
  }else {
    return domina.replace_children_BANG_(content, inner_content)
  }
};
domina.get_data = function() {
  var get_data = null;
  var get_data__2 = function(node, key) {
    return get_data.call(null, node, key, false)
  };
  var get_data__3 = function(node, key, bubble) {
    var m__21368 = domina.single_node(node).__domina_data;
    var value__21369 = cljs.core.truth_(m__21368) ? cljs.core.get.__2(m__21368, key) : null;
    if(cljs.core.truth_(function() {
      var and__3546__auto____21370 = bubble;
      if(cljs.core.truth_(and__3546__auto____21370)) {
        return value__21369 === null
      }else {
        return and__3546__auto____21370
      }
    }())) {
      var temp__3698__auto____21371 = domina.single_node(node).parentNode;
      if(cljs.core.truth_(temp__3698__auto____21371)) {
        var parent__21378 = temp__3698__auto____21371;
        return get_data.call(null, parent__21378, key, true)
      }else {
        return null
      }
    }else {
      return value__21369
    }
  };
  get_data = function(node, key, bubble) {
    switch(arguments.length) {
      case 2:
        return get_data__2.call(this, node, key);
      case 3:
        return get_data__3.call(this, node, key, bubble)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get_data.__2 = get_data__2;
  get_data.__3 = get_data__3;
  return get_data
}();
domina.set_data_BANG_ = function set_data_BANG_(node, key, value) {
  var m__21387 = function() {
    var or__3548__auto____21386 = domina.single_node(node).__domina_data;
    if(cljs.core.truth_(or__3548__auto____21386)) {
      return or__3548__auto____21386
    }else {
      return cljs.core.ObjMap.fromObject([], {})
    }
  }();
  return domina.single_node(node).__domina_data = cljs.core.assoc.__3(m__21387, key, value)
};
domina.apply_with_cloning = function apply_with_cloning(f, parent_content, child_content) {
  var parents__21389 = domina.nodes(parent_content);
  var children__21390 = domina.nodes(child_content);
  var first_child__21398 = function() {
    var frag__21391 = document.createDocumentFragment();
    var G__21392__21393 = cljs.core.seq(children__21390);
    if(cljs.core.truth_(G__21392__21393)) {
      var child__21394 = cljs.core.first(G__21392__21393);
      var G__21392__21395 = G__21392__21393;
      while(true) {
        frag__21391.appendChild(child__21394);
        var temp__3698__auto____21396 = cljs.core.next(G__21392__21395);
        if(cljs.core.truth_(temp__3698__auto____21396)) {
          var G__21392__21397 = temp__3698__auto____21396;
          var G__21402 = cljs.core.first(G__21392__21397);
          var G__21403 = G__21392__21397;
          child__21394 = G__21402;
          G__21392__21395 = G__21403;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return frag__21391
  }();
  var other_children__21399 = cljs.core.doall.__1(cljs.core.repeatedly.__2(cljs.core.count(parents__21389) - 1, function() {
    return first_child__21398.cloneNode(true)
  }));
  if(cljs.core.truth_(cljs.core.seq(parents__21389))) {
    f.call(null, cljs.core.first(parents__21389), first_child__21398);
    return cljs.core.doall.__1(cljs.core.map.__3(function(p1__21384_SHARP_, p2__21385_SHARP_) {
      return f.call(null, p1__21384_SHARP_, p2__21385_SHARP_)
    }, cljs.core.rest(parents__21389), other_children__21399))
  }else {
    return null
  }
};
domina.lazy_nl_via_item = function() {
  var lazy_nl_via_item = null;
  var lazy_nl_via_item__1 = function(nl) {
    return lazy_nl_via_item.call(null, nl, 0)
  };
  var lazy_nl_via_item__2 = function(nl, n) {
    if(n < nl.length) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons(nl.item(n), lazy_nl_via_item.call(null, nl, n + 1))
      })
    }else {
      return null
    }
  };
  lazy_nl_via_item = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_item__1.call(this, nl);
      case 2:
        return lazy_nl_via_item__2.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  lazy_nl_via_item.__1 = lazy_nl_via_item__1;
  lazy_nl_via_item.__2 = lazy_nl_via_item__2;
  return lazy_nl_via_item
}();
domina.lazy_nl_via_array_ref = function() {
  var lazy_nl_via_array_ref = null;
  var lazy_nl_via_array_ref__1 = function(nl) {
    return lazy_nl_via_array_ref.call(null, nl, 0)
  };
  var lazy_nl_via_array_ref__2 = function(nl, n) {
    if(n < nl.length) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons(nl[n], lazy_nl_via_array_ref.call(null, nl, n + 1))
      })
    }else {
      return null
    }
  };
  lazy_nl_via_array_ref = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_array_ref__1.call(this, nl);
      case 2:
        return lazy_nl_via_array_ref__2.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  lazy_nl_via_array_ref.__1 = lazy_nl_via_array_ref__1;
  lazy_nl_via_array_ref.__2 = lazy_nl_via_array_ref__2;
  return lazy_nl_via_array_ref
}();
domina.lazy_nodelist = function lazy_nodelist(nl) {
  if(cljs.core.truth_(nl.item)) {
    return domina.lazy_nl_via_item.__1(nl)
  }else {
    return domina.lazy_nl_via_array_ref.__1(nl)
  }
};
domina.array_like_QMARK_ = function array_like_QMARK_(obj) {
  var and__3546__auto____21408 = obj;
  if(cljs.core.truth_(and__3546__auto____21408)) {
    var and__3546__auto____21409 = obj.length;
    if(cljs.core.truth_(and__3546__auto____21409)) {
      var or__3548__auto____21410 = obj.indexOf;
      if(cljs.core.truth_(or__3548__auto____21410)) {
        return or__3548__auto____21410
      }else {
        return obj.item
      }
    }else {
      return and__3546__auto____21409
    }
  }else {
    return and__3546__auto____21408
  }
};
domina.normalize_seq = function normalize_seq(list_thing) {
  if(list_thing === null) {
    return cljs.core.List.EMPTY
  }else {
    if(cljs.core.truth_(function() {
      var x__7979__auto____21414 = list_thing;
      if(cljs.core.truth_(function() {
        var and__3546__auto____21415 = x__7979__auto____21414;
        if(cljs.core.truth_(and__3546__auto____21415)) {
          var and__3546__auto____21416 = x__7979__auto____21414.cljs$core$ISeqable$;
          if(cljs.core.truth_(and__3546__auto____21416)) {
            var and__3546__auto____21417 = x__7979__auto____21414.hasOwnProperty;
            if(cljs.core.truth_(and__3546__auto____21417)) {
              return cljs.core.not(x__7979__auto____21414.hasOwnProperty("cljs$core$ISeqable$"))
            }else {
              return and__3546__auto____21417
            }
          }else {
            return and__3546__auto____21416
          }
        }else {
          return and__3546__auto____21415
        }
      }())) {
        return true
      }else {
        return cljs.core.type_satisfies_(cljs.core.ISeqable, x__7979__auto____21414)
      }
    }())) {
      return cljs.core.seq(list_thing)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_(list_thing))) {
        return domina.lazy_nodelist(list_thing)
      }else {
        if("\ufdd0'default") {
          return cljs.core.cons(list_thing)
        }else {
          return null
        }
      }
    }
  }
};
domina.DomContent["_"] = true;
domina.nodes["_"] = function(content) {
  if(content === null) {
    return cljs.core.List.EMPTY
  }else {
    if(cljs.core.truth_(function() {
      var x__7979__auto____21426 = content;
      if(cljs.core.truth_(function() {
        var and__3546__auto____21427 = x__7979__auto____21426;
        if(cljs.core.truth_(and__3546__auto____21427)) {
          var and__3546__auto____21428 = x__7979__auto____21426.cljs$core$ISeqable$;
          if(cljs.core.truth_(and__3546__auto____21428)) {
            var and__3546__auto____21429 = x__7979__auto____21426.hasOwnProperty;
            if(cljs.core.truth_(and__3546__auto____21429)) {
              return cljs.core.not(x__7979__auto____21426.hasOwnProperty("cljs$core$ISeqable$"))
            }else {
              return and__3546__auto____21429
            }
          }else {
            return and__3546__auto____21428
          }
        }else {
          return and__3546__auto____21427
        }
      }())) {
        return true
      }else {
        return cljs.core.type_satisfies_(cljs.core.ISeqable, x__7979__auto____21426)
      }
    }())) {
      return cljs.core.seq(content)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_(content))) {
        return domina.lazy_nodelist(content)
      }else {
        if("\ufdd0'default") {
          return cljs.core.cons(content)
        }else {
          return null
        }
      }
    }
  }
};
domina.single_node["_"] = function(content) {
  if(content === null) {
    return null
  }else {
    if(cljs.core.truth_(function() {
      var x__7979__auto____21430 = content;
      if(cljs.core.truth_(function() {
        var and__3546__auto____21431 = x__7979__auto____21430;
        if(cljs.core.truth_(and__3546__auto____21431)) {
          var and__3546__auto____21432 = x__7979__auto____21430.cljs$core$ISeqable$;
          if(cljs.core.truth_(and__3546__auto____21432)) {
            var and__3546__auto____21433 = x__7979__auto____21430.hasOwnProperty;
            if(cljs.core.truth_(and__3546__auto____21433)) {
              return cljs.core.not(x__7979__auto____21430.hasOwnProperty("cljs$core$ISeqable$"))
            }else {
              return and__3546__auto____21433
            }
          }else {
            return and__3546__auto____21432
          }
        }else {
          return and__3546__auto____21431
        }
      }())) {
        return true
      }else {
        return cljs.core.type_satisfies_(cljs.core.ISeqable, x__7979__auto____21430)
      }
    }())) {
      return cljs.core.first(content)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_(content))) {
        return content.item(0)
      }else {
        if("\ufdd0'default") {
          return content
        }else {
          return null
        }
      }
    }
  }
};
domina.DomContent["string"] = true;
domina.nodes["string"] = function(s) {
  return cljs.core.doall.__1(domina.nodes(domina.string_to_dom(s)))
};
domina.single_node["string"] = function(s) {
  return domina.single_node(domina.string_to_dom(s))
};
if(cljs.core.truth_(typeof NodeList != "undefined")) {
  NodeList.prototype.cljs$core$ISeqable$ = true;
  NodeList.prototype.cljs$core$ISeqable$_seq__1 = function(nodelist) {
    return domina.lazy_nodelist(nodelist)
  };
  NodeList.prototype.cljs$core$IIndexed$ = true;
  NodeList.prototype.cljs$core$IIndexed$_nth__2 = function(nodelist, n) {
    return nodelist.item(n)
  };
  NodeList.prototype.cljs$core$IIndexed$_nth__3 = function(nodelist, n, not_found) {
    if(nodelist.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.__2(nodelist, n)
    }
  };
  NodeList.prototype.cljs$core$ICounted$ = true;
  NodeList.prototype.cljs$core$ICounted$_count__1 = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof StaticNodeList != "undefined")) {
  StaticNodeList.prototype.cljs$core$ISeqable$ = true;
  StaticNodeList.prototype.cljs$core$ISeqable$_seq__1 = function(nodelist) {
    return domina.lazy_nodelist(nodelist)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$ = true;
  StaticNodeList.prototype.cljs$core$IIndexed$_nth__2 = function(nodelist, n) {
    return nodelist.item(n)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$_nth__3 = function(nodelist, n, not_found) {
    if(nodelist.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.__2(nodelist, n)
    }
  };
  StaticNodeList.prototype.cljs$core$ICounted$ = true;
  StaticNodeList.prototype.cljs$core$ICounted$_count__1 = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof HTMLCollection != "undefined")) {
  HTMLCollection.prototype.cljs$core$ISeqable$ = true;
  HTMLCollection.prototype.cljs$core$ISeqable$_seq__1 = function(coll) {
    return domina.lazy_nodelist(coll)
  };
  HTMLCollection.prototype.cljs$core$IIndexed$ = true;
  HTMLCollection.prototype.cljs$core$IIndexed$_nth__2 = function(coll, n) {
    return coll.item(n)
  };
  HTMLCollection.prototype.cljs$core$IIndexed$_nth__3 = function(coll, n, not_found) {
    if(coll.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.__2(coll, n)
    }
  };
  HTMLCollection.prototype.cljs$core$ICounted$ = true;
  HTMLCollection.prototype.cljs$core$ICounted$_count__1 = function(coll) {
    return coll.length
  }
}else {
}
;goog.provide("domina.events");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.object");
goog.require("goog.events");
void 0;
domina.events.Event = {};
domina.events.prevent_default = function prevent_default(evt) {
  if(function() {
    var and__3546__auto____19942 = evt;
    if(and__3546__auto____19942) {
      return evt.domina$events$Event$prevent_default__1
    }else {
      return and__3546__auto____19942
    }
  }()) {
    return evt.domina$events$Event$prevent_default__1(evt)
  }else {
    return function() {
      var or__3548__auto____19943 = domina.events.prevent_default[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19943) {
        return or__3548__auto____19943
      }else {
        var or__3548__auto____19945 = domina.events.prevent_default["_"];
        if(or__3548__auto____19945) {
          return or__3548__auto____19945
        }else {
          throw cljs.core.missing_protocol("Event.prevent-default", evt);
        }
      }
    }().call(null, evt)
  }
};
domina.events.stop_propagation = function stop_propagation(evt) {
  if(function() {
    var and__3546__auto____19947 = evt;
    if(and__3546__auto____19947) {
      return evt.domina$events$Event$stop_propagation__1
    }else {
      return and__3546__auto____19947
    }
  }()) {
    return evt.domina$events$Event$stop_propagation__1(evt)
  }else {
    return function() {
      var or__3548__auto____19948 = domina.events.stop_propagation[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19948) {
        return or__3548__auto____19948
      }else {
        var or__3548__auto____19950 = domina.events.stop_propagation["_"];
        if(or__3548__auto____19950) {
          return or__3548__auto____19950
        }else {
          throw cljs.core.missing_protocol("Event.stop-propagation", evt);
        }
      }
    }().call(null, evt)
  }
};
domina.events.target = function target(evt) {
  if(function() {
    var and__3546__auto____19952 = evt;
    if(and__3546__auto____19952) {
      return evt.domina$events$Event$target__1
    }else {
      return and__3546__auto____19952
    }
  }()) {
    return evt.domina$events$Event$target__1(evt)
  }else {
    return function() {
      var or__3548__auto____19956 = domina.events.target[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19956) {
        return or__3548__auto____19956
      }else {
        var or__3548__auto____19957 = domina.events.target["_"];
        if(or__3548__auto____19957) {
          return or__3548__auto____19957
        }else {
          throw cljs.core.missing_protocol("Event.target", evt);
        }
      }
    }().call(null, evt)
  }
};
domina.events.current_target = function current_target(evt) {
  if(function() {
    var and__3546__auto____19958 = evt;
    if(and__3546__auto____19958) {
      return evt.domina$events$Event$current_target__1
    }else {
      return and__3546__auto____19958
    }
  }()) {
    return evt.domina$events$Event$current_target__1(evt)
  }else {
    return function() {
      var or__3548__auto____19960 = domina.events.current_target[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19960) {
        return or__3548__auto____19960
      }else {
        var or__3548__auto____19962 = domina.events.current_target["_"];
        if(or__3548__auto____19962) {
          return or__3548__auto____19962
        }else {
          throw cljs.core.missing_protocol("Event.current-target", evt);
        }
      }
    }().call(null, evt)
  }
};
domina.events.event_type = function event_type(evt) {
  if(function() {
    var and__3546__auto____19966 = evt;
    if(and__3546__auto____19966) {
      return evt.domina$events$Event$event_type__1
    }else {
      return and__3546__auto____19966
    }
  }()) {
    return evt.domina$events$Event$event_type__1(evt)
  }else {
    return function() {
      var or__3548__auto____19970 = domina.events.event_type[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19970) {
        return or__3548__auto____19970
      }else {
        var or__3548__auto____19972 = domina.events.event_type["_"];
        if(or__3548__auto____19972) {
          return or__3548__auto____19972
        }else {
          throw cljs.core.missing_protocol("Event.event-type", evt);
        }
      }
    }().call(null, evt)
  }
};
domina.events.raw_event = function raw_event(evt) {
  if(function() {
    var and__3546__auto____19980 = evt;
    if(and__3546__auto____19980) {
      return evt.domina$events$Event$raw_event__1
    }else {
      return and__3546__auto____19980
    }
  }()) {
    return evt.domina$events$Event$raw_event__1(evt)
  }else {
    return function() {
      var or__3548__auto____19985 = domina.events.raw_event[goog.typeOf.call(null, evt)];
      if(or__3548__auto____19985) {
        return or__3548__auto____19985
      }else {
        var or__3548__auto____19987 = domina.events.raw_event["_"];
        if(or__3548__auto____19987) {
          return or__3548__auto____19987
        }else {
          throw cljs.core.missing_protocol("Event.raw-event", evt);
        }
      }
    }().call(null, evt)
  }
};
void 0;
domina.events.builtin_events = cljs.core.set(cljs.core.map.__2(cljs.core.keyword, goog.object.getValues.call(null, goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = function find_builtin_type(evt_type) {
  if(cljs.core.contains_QMARK_(domina.events.builtin_events, evt_type)) {
    return cljs.core.name(evt_type)
  }else {
    return evt_type
  }
};
domina.events.create_listener_function = function create_listener_function(f) {
  return function(evt) {
    f.call(null, function() {
      if(void 0 === domina.events.t20168) {
        domina.events.t20168 = function(evt, f, create_listener_function, __meta__321__auto__) {
          this.evt = evt;
          this.f = f;
          this.create_listener_function = create_listener_function;
          this.__meta__321__auto__ = __meta__321__auto__
        };
        domina.events.t20168.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
          return cljs.core.list("domina.events.t20168")
        };
        domina.events.t20168.prototype.cljs$core$ILookup$ = true;
        domina.events.t20168.prototype.cljs$core$ILookup$_lookup__2 = function(o, k) {
          var this__20172 = this;
          var temp__3695__auto____20174 = this__20172.evt[k];
          if(temp__3695__auto____20174) {
            var val__20175 = temp__3695__auto____20174;
            return val__20175
          }else {
            return this__20172.evt[cljs.core.name(k)]
          }
        };
        domina.events.t20168.prototype.cljs$core$ILookup$_lookup__3 = function(o, k, not_found) {
          var this__20176 = this;
          var or__3548__auto____20177 = cljs.core._lookup.__2(o, k);
          if(or__3548__auto____20177) {
            return or__3548__auto____20177
          }else {
            return not_found
          }
        };
        domina.events.t20168.prototype.domina$events$Event$ = true;
        domina.events.t20168.prototype.domina$events$Event$prevent_default__1 = function(_) {
          var this__20179 = this;
          return this__20179.evt.preventDefault()
        };
        domina.events.t20168.prototype.domina$events$Event$stop_propagation__1 = function(_) {
          var this__20180 = this;
          return this__20180.evt.stopPropagation()
        };
        domina.events.t20168.prototype.domina$events$Event$target__1 = function(_) {
          var this__20181 = this;
          return this__20181.evt.target
        };
        domina.events.t20168.prototype.domina$events$Event$current_target__1 = function(_) {
          var this__20183 = this;
          return this__20183.evt.currentTarget
        };
        domina.events.t20168.prototype.domina$events$Event$event_type__1 = function(_) {
          var this__20185 = this;
          return this__20185.evt.type
        };
        domina.events.t20168.prototype.domina$events$Event$raw_event__1 = function(_) {
          var this__20186 = this;
          return this__20186.evt
        };
        domina.events.t20168.prototype.cljs$core$IMeta$ = true;
        domina.events.t20168.prototype.cljs$core$IMeta$_meta__1 = function(___322__auto__) {
          var this__20187 = this;
          return this__20187.__meta__321__auto__
        };
        domina.events.t20168.prototype.cljs$core$IWithMeta$ = true;
        domina.events.t20168.prototype.cljs$core$IWithMeta$_with_meta__2 = function(___322__auto__, __meta__321__auto__) {
          var this__20188 = this;
          return new domina.events.t20168(this__20188.evt, this__20188.f, this__20188.create_listener_function, __meta__321__auto__)
        };
        domina.events.t20168
      }else {
      }
      return new domina.events.t20168(evt, f, create_listener_function, null)
    }());
    return true
  }
};
domina.events.listen_internal_BANG_ = function listen_internal_BANG_(content, type, listener, capture, once) {
  var f__20206 = domina.events.create_listener_function(listener);
  var t__20209 = domina.events.find_builtin_type(type);
  return cljs.core.doall.__1(function() {
    var iter__536__auto____20234 = function iter__20229(s__20230) {
      return new cljs.core.LazySeq(null, false, function() {
        var s__20230__20231 = s__20230;
        while(true) {
          if(cljs.core.truth_(cljs.core.seq(s__20230__20231))) {
            var node__20232 = cljs.core.first(s__20230__20231);
            return cljs.core.cons(cljs.core.truth_(once) ? goog.events.listenOnce.call(null, node__20232, t__20209, f__20206, capture) : goog.events.listen.call(null, node__20232, t__20209, f__20206, capture), iter__20229.call(null, cljs.core.rest(s__20230__20231)))
          }else {
            return null
          }
          break
        }
      })
    };
    return iter__536__auto____20234.call(null, domina.nodes(content))
  }())
};
domina.events.listen_BANG_ = function() {
  var listen_BANG_ = null;
  var listen_BANG___2 = function(type, listener) {
    return listen_BANG_.call(null, domina.events.root_element, type, listener)
  };
  var listen_BANG___3 = function(content, type, listener) {
    return domina.events.listen_internal_BANG_(content, type, listener, false, false)
  };
  listen_BANG_ = function(content, type, listener) {
    switch(arguments.length) {
      case 2:
        return listen_BANG___2.call(this, content, type);
      case 3:
        return listen_BANG___3.call(this, content, type, listener)
    }
    throw"Invalid arity: " + arguments.length;
  };
  listen_BANG_.__2 = listen_BANG___2;
  listen_BANG_.__3 = listen_BANG___3;
  return listen_BANG_
}();
domina.events.capture_BANG_ = function() {
  var capture_BANG_ = null;
  var capture_BANG___2 = function(type, listener) {
    return capture_BANG_.call(null, domina.events.root_element, type, listener)
  };
  var capture_BANG___3 = function(content, type, listener) {
    return domina.events.listen_internal_BANG_(content, type, listener, true, false)
  };
  capture_BANG_ = function(content, type, listener) {
    switch(arguments.length) {
      case 2:
        return capture_BANG___2.call(this, content, type);
      case 3:
        return capture_BANG___3.call(this, content, type, listener)
    }
    throw"Invalid arity: " + arguments.length;
  };
  capture_BANG_.__2 = capture_BANG___2;
  capture_BANG_.__3 = capture_BANG___3;
  return capture_BANG_
}();
domina.events.listen_once_BANG_ = function() {
  var listen_once_BANG_ = null;
  var listen_once_BANG___2 = function(type, listener) {
    return listen_once_BANG_.call(null, domina.events.root_element, type, listener)
  };
  var listen_once_BANG___3 = function(content, type, listener) {
    return domina.events.listen_internal_BANG_(content, type, listener, false, true)
  };
  listen_once_BANG_ = function(content, type, listener) {
    switch(arguments.length) {
      case 2:
        return listen_once_BANG___2.call(this, content, type);
      case 3:
        return listen_once_BANG___3.call(this, content, type, listener)
    }
    throw"Invalid arity: " + arguments.length;
  };
  listen_once_BANG_.__2 = listen_once_BANG___2;
  listen_once_BANG_.__3 = listen_once_BANG___3;
  return listen_once_BANG_
}();
domina.events.capture_once_BANG_ = function() {
  var capture_once_BANG_ = null;
  var capture_once_BANG___2 = function(type, listener) {
    return capture_once_BANG_.call(null, domina.events.root_element, type, listener)
  };
  var capture_once_BANG___3 = function(content, type, listener) {
    return domina.events.listen_internal_BANG_(content, type, listener, true, true)
  };
  capture_once_BANG_ = function(content, type, listener) {
    switch(arguments.length) {
      case 2:
        return capture_once_BANG___2.call(this, content, type);
      case 3:
        return capture_once_BANG___3.call(this, content, type, listener)
    }
    throw"Invalid arity: " + arguments.length;
  };
  capture_once_BANG_.__2 = capture_once_BANG___2;
  capture_once_BANG_.__3 = capture_once_BANG___3;
  return capture_once_BANG_
}();
domina.events.unlisten_BANG_ = function() {
  var unlisten_BANG_ = null;
  var unlisten_BANG___0 = function() {
    return unlisten_BANG_.call(null, domina.events.root_element)
  };
  var unlisten_BANG___1 = function(content) {
    var G__20271__20272 = cljs.core.seq(domina.nodes(content));
    if(cljs.core.truth_(G__20271__20272)) {
      var node__20273 = cljs.core.first(G__20271__20272);
      var G__20271__20274 = G__20271__20272;
      while(true) {
        goog.events.removeAll.call(null, node__20273);
        var temp__3698__auto____20275 = cljs.core.next(G__20271__20274);
        if(cljs.core.truth_(temp__3698__auto____20275)) {
          var G__20271__20276 = temp__3698__auto____20275;
          var G__20302 = cljs.core.first(G__20271__20276);
          var G__20303 = G__20271__20276;
          node__20273 = G__20302;
          G__20271__20274 = G__20303;
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
  var unlisten_BANG___2 = function(content, type) {
    var type__20278 = domina.events.find_builtin_type(type);
    return goog.events.removeAll.call(null, domina.events.node, type__20278)
  };
  unlisten_BANG_ = function(content, type) {
    switch(arguments.length) {
      case 0:
        return unlisten_BANG___0.call(this);
      case 1:
        return unlisten_BANG___1.call(this, content);
      case 2:
        return unlisten_BANG___2.call(this, content, type)
    }
    throw"Invalid arity: " + arguments.length;
  };
  unlisten_BANG_.__0 = unlisten_BANG___0;
  unlisten_BANG_.__1 = unlisten_BANG___1;
  unlisten_BANG_.__2 = unlisten_BANG___2;
  return unlisten_BANG_
}();
domina.events.ancestor_nodes = function() {
  var ancestor_nodes = null;
  var ancestor_nodes__1 = function(n) {
    return ancestor_nodes.call(null, n, cljs.core.cons(n))
  };
  var ancestor_nodes__2 = function(n, so_far) {
    while(true) {
      var temp__3695__auto____20311 = n.parentNode;
      if(cljs.core.truth_(temp__3695__auto____20311)) {
        var parent__20312 = temp__3695__auto____20311;
        var G__20318 = parent__20312;
        var G__20319 = cljs.core.cons(parent__20312, so_far);
        n = G__20318;
        so_far = G__20319;
        continue
      }else {
        return so_far
      }
      break
    }
  };
  ancestor_nodes = function(n, so_far) {
    switch(arguments.length) {
      case 1:
        return ancestor_nodes__1.call(this, n);
      case 2:
        return ancestor_nodes__2.call(this, n, so_far)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ancestor_nodes.__1 = ancestor_nodes__1;
  ancestor_nodes.__2 = ancestor_nodes__2;
  return ancestor_nodes
}();
domina.events.dispatch_browser_BANG_ = function dispatch_browser_BANG_(source, evt) {
  var ancestors__20327 = domina.events.ancestor_nodes.__1(domina.single_node(source));
  var G__20328__20449 = cljs.core.seq(ancestors__20327);
  if(cljs.core.truth_(G__20328__20449)) {
    var n__20450 = cljs.core.first(G__20328__20449);
    var G__20328__20451 = G__20328__20449;
    while(true) {
      if(cljs.core.truth_(n__20450.propagationStopped)) {
      }else {
        evt.currentTarget = n__20450;
        goog.events.fireListeners.call(null, n__20450, evt.type, true, evt)
      }
      var temp__3698__auto____20452 = cljs.core.next(G__20328__20451);
      if(cljs.core.truth_(temp__3698__auto____20452)) {
        var G__20328__20453 = temp__3698__auto____20452;
        var G__20480 = cljs.core.first(G__20328__20453);
        var G__20481 = G__20328__20453;
        n__20450 = G__20480;
        G__20328__20451 = G__20481;
        continue
      }else {
      }
      break
    }
  }else {
  }
  var G__20456__20459 = cljs.core.seq(cljs.core.reverse(ancestors__20327));
  if(cljs.core.truth_(G__20456__20459)) {
    var n__20461 = cljs.core.first(G__20456__20459);
    var G__20456__20462 = G__20456__20459;
    while(true) {
      if(cljs.core.truth_(n__20461.propagationStopped)) {
      }else {
        evt.currentTarget = n__20461;
        goog.events.fireListeners.call(null, n__20461, evt.type, false, evt)
      }
      var temp__3698__auto____20465 = cljs.core.next(G__20456__20462);
      if(cljs.core.truth_(temp__3698__auto____20465)) {
        var G__20456__20466 = temp__3698__auto____20465;
        var G__20490 = cljs.core.first(G__20456__20466);
        var G__20492 = G__20456__20466;
        n__20461 = G__20490;
        G__20456__20462 = G__20492;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return evt.returnValue_
};
domina.events.dispatch_event_target_BANG_ = function dispatch_event_target_BANG_(source, evt) {
  return goog.events.dispatchEvent.call(null, source, evt)
};
domina.events.is_event_target_QMARK_ = function is_event_target_QMARK_(o) {
  var and__3546__auto____20496 = o.getParentEventTarget;
  if(cljs.core.truth_(and__3546__auto____20496)) {
    return o.dispatchEvent
  }else {
    return and__3546__auto____20496
  }
};
domina.events.dispatch_BANG_ = function() {
  var dispatch_BANG_ = null;
  var dispatch_BANG___2 = function(type, evt_map) {
    return dispatch_BANG_.call(null, domina.events.root_element, type, evt_map)
  };
  var dispatch_BANG___3 = function(source, type, evt_map) {
    var evt__20501 = new goog.events.Event(domina.events.find_builtin_type(type));
    var G__20502__20503 = cljs.core.seq(evt_map);
    if(cljs.core.truth_(G__20502__20503)) {
      var G__20505__20509 = cljs.core.first(G__20502__20503);
      var vec__20507__20510 = G__20505__20509;
      var k__20511 = cljs.core.nth.__3(vec__20507__20510, 0, null);
      var v__20512 = cljs.core.nth.__3(vec__20507__20510, 1, null);
      var G__20502__20513 = G__20502__20503;
      var G__20505__20514 = G__20505__20509;
      var G__20502__20515 = G__20502__20513;
      while(true) {
        var vec__20516__20520 = G__20505__20514;
        var k__20522 = cljs.core.nth.__3(vec__20516__20520, 0, null);
        var v__20523 = cljs.core.nth.__3(vec__20516__20520, 1, null);
        var G__20502__20525 = G__20502__20515;
        evt__20501[k__20522] = v__20523;
        var temp__3698__auto____20528 = cljs.core.next(G__20502__20525);
        if(cljs.core.truth_(temp__3698__auto____20528)) {
          var G__20502__20529 = temp__3698__auto____20528;
          var G__20543 = cljs.core.first(G__20502__20529);
          var G__20544 = G__20502__20529;
          G__20505__20514 = G__20543;
          G__20502__20515 = G__20544;
          continue
        }else {
        }
        break
      }
    }else {
    }
    if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source))) {
      return domina.events.dispatch_event_target_BANG_(source, evt__20501)
    }else {
      return domina.events.dispatch_browser_BANG_(source, evt__20501)
    }
  };
  dispatch_BANG_ = function(source, type, evt_map) {
    switch(arguments.length) {
      case 2:
        return dispatch_BANG___2.call(this, source, type);
      case 3:
        return dispatch_BANG___3.call(this, source, type, evt_map)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dispatch_BANG_.__2 = dispatch_BANG___2;
  dispatch_BANG_.__3 = dispatch_BANG___3;
  return dispatch_BANG_
}();
domina.events.unlisten_by_key_BANG_ = function unlisten_by_key_BANG_(key) {
  return goog.events.unlistenByKey.call(null, key)
};
domina.events.get_listeners = function get_listeners(content, type) {
  var type__20556 = domina.events.find_builtin_type(type);
  return cljs.core.mapcat.__2(function(p1__20548_SHARP_) {
    return goog.events.getListeners.call(null, p1__20548_SHARP_, type__20556, false)
  }, domina.nodes(content))
};
goog.provide("domina.xpath");
goog.require("cljs.core");
goog.require("domina");
goog.require("goog.dom");
domina.xpath.select_node_STAR_ = function select_node_STAR_(path, node, technique_1, technique_2) {
  var doc__20580 = goog.dom.getOwnerDocument.call(null, node);
  if(cljs.core.truth_(function() {
    var and__3546__auto____20585 = node.selectSingleNode;
    if(cljs.core.truth_(and__3546__auto____20585)) {
      return doc__20580.setProperty
    }else {
      return and__3546__auto____20585
    }
  }())) {
    doc__20580.setProperty("SelectionLanguage", "XPath");
    return technique_1.call(null, node, path)
  }else {
    if(cljs.core.truth_(doc__20580.evaluate)) {
      return technique_2.call(null, null, doc__20580, node, path)
    }else {
      if("\ufdd0'else") {
        throw new Error("Could not find XPath support in this browser.");
      }else {
        return null
      }
    }
  }
};
domina.xpath.select_node = function select_node(expr, node) {
  return domina.xpath.select_node_STAR_(expr, node, function(node, expr) {
    return node.selectSingleNode(expr)
  }, function(resolver, doc, node, expr) {
    var result__20602 = doc.evaluate(expr, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__20602.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_(expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__20609 = doc.evaluate(expr, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__20610 = result__20609.snapshotLength;
    var i__20612 = 0;
    var acc__20613 = null;
    while(true) {
      if(i__20612 < num_results__20610) {
        var G__20624 = i__20612 + 1;
        var G__20625 = cljs.core.cons(result__20609.snapshotItem(i__20612), acc__20613);
        i__20612 = G__20624;
        acc__20613 = G__20625;
        continue
      }else {
        return acc__20613
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
  var xpath__1 = function(expr) {
    return xpath.call(null, domina.xpath.root_element(), expr)
  };
  var xpath__2 = function(base, expr) {
    if(void 0 === domina.xpath.t20649) {
      domina.xpath.t20649 = function(expr, base, xpath, __meta__321__auto__) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath;
        this.__meta__321__auto__ = __meta__321__auto__
      };
      domina.xpath.t20649.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
        return cljs.core.list("domina.xpath.t20649")
      };
      domina.xpath.t20649.prototype.domina$DomContent$ = true;
      domina.xpath.t20649.prototype.domina$DomContent$nodes__1 = function(_) {
        var this__20660 = this;
        return cljs.core.mapcat.__2(cljs.core.partial.__2(domina.xpath.select_nodes, this__20660.expr), domina.nodes(this__20660.base))
      };
      domina.xpath.t20649.prototype.domina$DomContent$single_node__1 = function(_) {
        var this__20663 = this;
        return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(cljs.core.partial.__2(domina.xpath.select_node, this__20663.expr), domina.nodes(this__20663.base))))
      };
      domina.xpath.t20649.prototype.cljs$core$IMeta$ = true;
      domina.xpath.t20649.prototype.cljs$core$IMeta$_meta__1 = function(___322__auto__) {
        var this__20681 = this;
        return this__20681.__meta__321__auto__
      };
      domina.xpath.t20649.prototype.cljs$core$IWithMeta$ = true;
      domina.xpath.t20649.prototype.cljs$core$IWithMeta$_with_meta__2 = function(___322__auto__, __meta__321__auto__) {
        var this__20694 = this;
        return new domina.xpath.t20649(this__20694.expr, this__20694.base, this__20694.xpath, __meta__321__auto__)
      };
      domina.xpath.t20649
    }else {
    }
    return new domina.xpath.t20649(expr, base, xpath, null)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__1.call(this, base);
      case 2:
        return xpath__2.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  xpath.__1 = xpath__1;
  xpath.__2 = xpath__2;
  return xpath
}();
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
goog.provide("domina.css");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.dom.query");
domina.css.root_element = function root_element() {
  return goog.dom.getElementsByTagNameAndClass.call(null, "html")[0]
};
domina.css.sel = function() {
  var sel = null;
  var sel__1 = function(expr) {
    return sel.call(null, domina.css.root_element(), expr)
  };
  var sel__2 = function(base, expr) {
    if(void 0 === domina.css.t21498) {
      domina.css.t21498 = function(expr, base, sel, __meta__321__auto__) {
        this.expr = expr;
        this.base = base;
        this.sel = sel;
        this.__meta__321__auto__ = __meta__321__auto__
      };
      domina.css.t21498.cljs$core$IPrintable$_pr_seq = function(this__377__auto__) {
        return cljs.core.list("domina.css.t21498")
      };
      domina.css.t21498.prototype.domina$DomContent$ = true;
      domina.css.t21498.prototype.domina$DomContent$nodes__1 = function(_) {
        var this__21499 = this;
        return cljs.core.mapcat.__2(function(p1__21496_SHARP_) {
          return domina.normalize_seq(goog.dom.query.call(null, this__21499.expr, p1__21496_SHARP_))
        }, domina.nodes(this__21499.base))
      };
      domina.css.t21498.prototype.domina$DomContent$single_node__1 = function(_) {
        var this__21500 = this;
        return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.mapcat.__2(function(p1__21497_SHARP_) {
          return domina.normalize_seq(goog.dom.query.call(null, this__21500.expr, p1__21497_SHARP_))
        }, domina.nodes(this__21500.base))))
      };
      domina.css.t21498.prototype.cljs$core$IMeta$ = true;
      domina.css.t21498.prototype.cljs$core$IMeta$_meta__1 = function(___322__auto__) {
        var this__21501 = this;
        return this__21501.__meta__321__auto__
      };
      domina.css.t21498.prototype.cljs$core$IWithMeta$ = true;
      domina.css.t21498.prototype.cljs$core$IWithMeta$_with_meta__2 = function(___322__auto__, __meta__321__auto__) {
        var this__21502 = this;
        return new domina.css.t21498(this__21502.expr, this__21502.base, this__21502.sel, __meta__321__auto__)
      };
      domina.css.t21498
    }else {
    }
    return new domina.css.t21498(expr, base, sel, null)
  };
  sel = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return sel__1.call(this, base);
      case 2:
        return sel__2.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sel.__1 = sel__1;
  sel.__2 = sel__2;
  return sel
}();
goog.provide("domina.test");
goog.require("cljs.core");
goog.require("domina.xpath");
goog.require("domina.css");
goog.require("domina");
goog.require("domina.events");
goog.require("goog.events");
window["tryfn"] = function(f) {
  try {
    return f.call()
  }catch(e) {
    if(e == "fail hard") {
      throw e;
    }else {
      return e
    }
  }
};
domina.test.tests = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
domina.test.add_test = function add_test(name, testfn) {
  return cljs.core.swap_BANG_.__3(domina.test.tests, cljs.core.conj, cljs.core.PersistentVector.fromArray([name, testfn]))
};
domina.test.run_test = function run_test(testfn) {
  return tryfn(testfn)
};
domina.test.run_named = function run_named(n) {
  return cljs.core.map.__2(function(p__7702) {
    var vec__7703__7704 = p__7702;
    var name__7705 = cljs.core.nth.__3(vec__7703__7704, 0, null);
    var testfn__7706 = cljs.core.nth.__3(vec__7703__7704, 1, null);
    return cljs.core.PersistentVector.fromArray([name__7705, domina.test.run_test(testfn__7706)])
  }, cljs.core.filter(function(p__7707) {
    var vec__7708__7709 = p__7707;
    var name__7710 = cljs.core.nth.__3(vec__7708__7709, 0, null);
    var ___7711 = cljs.core.nth.__3(vec__7708__7709, 1, null);
    return cljs.core._EQ_.__2(name__7710, n)
  }, cljs.core.deref(domina.test.tests)))
};
domina.test.run_tests = function run_tests() {
  return cljs.core.map.__2(function(p__7713) {
    var vec__7714__7715 = p__7713;
    var name__7716 = cljs.core.nth.__3(vec__7714__7715, 0, null);
    var testfn__7717 = cljs.core.nth.__3(vec__7714__7715, 1, null);
    return cljs.core.PersistentVector.fromArray([name__7716, domina.test.run_test(testfn__7717)])
  }, cljs.core.deref(domina.test.tests))
};
domina.test.reset = function reset() {
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/*"));
  return domina.events.unlisten_BANG_.call(null, domina.xpath.xpath.call(null, "//*"))
};
domina.test.standard_fixture = function standard_fixture() {
  return domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>")
};
domina.test.add_test("basic CSS selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.css.sel.__1("p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70))), cljs.core.hash_map("\ufdd0'line", 70)))));
  }
});
domina.test.add_test("basic CSS selection (single node)", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core.not(domina.single_node.call(null, domina.css.sel.__1("p")) === null)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75))), cljs.core.hash_map("\ufdd0'line", 75)))));
  }
});
domina.test.add_test("CSS selection with class specification", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.css.sel.__1(".d1"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80))), cljs.core.hash_map("\ufdd0'line", 80)))));
  }
});
domina.test.add_test("a relative CSS selector", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__1(".d1"), "p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", ".d1"), cljs.core.hash_map("\ufdd0'line", 85)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "p"), cljs.core.hash_map("\ufdd0'line", 86))), cljs.core.hash_map("\ufdd0'line", 85))), 
    cljs.core.hash_map("\ufdd0'line", 85))), cljs.core.hash_map("\ufdd0'line", 85))), cljs.core.hash_map("\ufdd0'line", 85)))));
  }
});
domina.test.add_test("extended CSS chaining", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.css.sel.__1("body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"), "div"), "p"), "span"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "body"), cljs.core.hash_map("\ufdd0'line", 92)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "div"), cljs.core.hash_map("\ufdd0'line", 93)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", 
    "p"), cljs.core.hash_map("\ufdd0'line", 94)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "span"), cljs.core.hash_map("\ufdd0'line", 95))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92))), cljs.core.hash_map("\ufdd0'line", 92)))));
  }
});
domina.test.add_test("basic xpath selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102))), cljs.core.hash_map("\ufdd0'line", 102)))));
  }
});
domina.test.add_test("basic xpath selection (single node)", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core.not(domina.single_node.call(null, domina.xpath.xpath.call(null, "//p")) === null)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107))), cljs.core.hash_map("\ufdd0'line", 107)))));
  }
});
domina.test.add_test("xpath selection with class specification", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112)))));
  }
});
domina.test.add_test("a relative xpath expression", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body/div[@class='d1']"), "p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 117)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "p"), cljs.core.hash_map("\ufdd0'line", 118))), cljs.core.hash_map("\ufdd0'line", 
    117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117))), cljs.core.hash_map("\ufdd0'line", 117)))));
  }
});
domina.test.add_test("extended selection chaining", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body"), "./div"), "./p"), "./span"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body"), cljs.core.hash_map("\ufdd0'line", 124)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "./div"), cljs.core.hash_map("\ufdd0'line", 125)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", 
    "./p"), cljs.core.hash_map("\ufdd0'line", 126)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "./span"), cljs.core.hash_map("\ufdd0'line", 127))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124))), cljs.core.hash_map("\ufdd0'line", 124)))));
  }
});
domina.test.add_test("advanced xpath", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[following-sibling::p[@class='p3']]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[following-sibling::p[@class='p3']]"), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131))), cljs.core.hash_map("\ufdd0'line", 131)))));
  }
});
domina.test.add_test("look up node by id", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.by_id.call(null, "id1"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "id1"), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136))), cljs.core.hash_map("\ufdd0'line", 136)))));
  }
});
domina.test.add_test("look up node by id with context", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.css.sel.__1("body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"), "div"), "p"), "span"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "body"), cljs.core.hash_map("\ufdd0'line", 142)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "div"), cljs.core.hash_map("\ufdd0'line", 143)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", 
    "p"), cljs.core.hash_map("\ufdd0'line", 144)), cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "span"), cljs.core.hash_map("\ufdd0'line", 145))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142))), cljs.core.hash_map("\ufdd0'line", 142)))));
  }
});
domina.test.add_test("look up nodes by class", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.by_class.call(null, "p3"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-class", "p3"), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150))), cljs.core.hash_map("\ufdd0'line", 150)))));
  }
});
domina.test.add_test("child selection", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.children.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'children", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155))), cljs.core.hash_map("\ufdd0'line", 155)))));
  }
});
domina.test.add_test("clone a single node", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.clone.call(null, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), 
    cljs.core.hash_map("\ufdd0'line", 160)))));
  }
});
domina.test.add_test("clone multiple nodes", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.clone.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 165))), cljs.core.hash_map("\ufdd0'line", 
    165)))));
  }
});
domina.test.add_test("append a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended1'>test</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171))), cljs.core.hash_map("\ufdd0'line", 171)))));
  }
});
domina.test.add_test("append multiple children to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177)))));
  }
});
domina.test.add_test("append a single child to multiple parents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "<span>!!</span>");
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span"), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184))), cljs.core.hash_map("\ufdd0'line", 184)))));
  }
});
domina.test.add_test("append multiple children to multiple parents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body/div/p"), "some <span class='foo'>more</span> text");
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div/p/span[@class='foo']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span[@class='foo']"), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191))), cljs.core.hash_map("\ufdd0'line", 191)))));
  }
});
domina.test.add_test("prepend a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div>2</div><div>3</div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div>1</div>");
  if(cljs.core._EQ_.__2("1", domina.text.call(null, domina.xpath.xpath.__1("//body/div[1]")))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "1", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[1]"), cljs.core.hash_map("\ufdd0'line", 197))), cljs.core.hash_map("\ufdd0'line", 197))), cljs.core.hash_map("\ufdd0'line", 197)))));
  }
  if(cljs.core._EQ_.__2("2", domina.text.call(null, domina.xpath.xpath.__1("//body/div[2]")))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "2", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[2]"), cljs.core.hash_map("\ufdd0'line", 198))), cljs.core.hash_map("\ufdd0'line", 198))), cljs.core.hash_map("\ufdd0'line", 198)))));
  }
  if(cljs.core._EQ_.__2("3", domina.text.call(null, domina.xpath.xpath.__1("//body/div[3]")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "3", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[3]"), cljs.core.hash_map("\ufdd0'line", 199))), cljs.core.hash_map("\ufdd0'line", 199))), cljs.core.hash_map("\ufdd0'line", 199)))));
  }
});
domina.test.add_test("prepend a single child to multiple parents", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div><p>2</p></div><div><p>2</p></div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.__1("//body/div"), "<p>1</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/div/p[text()='2']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[text()='2']"), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205))), cljs.core.hash_map("\ufdd0'line", 205)))));
  }
});
domina.test.add_test("Insert a single child to a single parent", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div class='testInserts'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']/p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='testInserts']/p"), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//p[@class='i2']/preceding-sibling::*"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//p[@class='i2']/following-sibling::*"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219))), cljs.core.hash_map("\ufdd0'line", 219)))));
  }
});
domina.test.add_test("Insert a single child to multiple parents", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div class='testInserts' id='testInsert1'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<div class='testInserts' id='testInsert2'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  var G__7992__7993 = cljs.core.seq(cljs.core.PersistentVector.fromArray([domina.xpath.xpath.__1("//div[@id='testInsert1']"), domina.xpath.xpath.__1("//div[@id='testInsert2']")]));
  if(cljs.core.truth_(G__7992__7993)) {
    var children__7994 = cljs.core.first(G__7992__7993);
    var G__7992__8001 = G__7992__7993;
    while(true) {
      if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__2(children__7994, "p"))))) {
      }else {
        throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p"), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235))), cljs.core.hash_map("\ufdd0'line", 235)))));
      }
      if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__2(children__7994, "p[@class='i2']/preceding-sibling::*"))))) {
      }else {
        throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236))), cljs.core.hash_map("\ufdd0'line", 236)))));
      }
      if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__2(children__7994, "p[@class='i2']/following-sibling::*"))))) {
      }else {
        throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238)))));
      }
      var temp__3698__auto____8002 = cljs.core.next(G__7992__8001);
      if(cljs.core.truth_(temp__3698__auto____8002)) {
        var G__7992__8003 = temp__3698__auto____8002;
        var G__8024 = cljs.core.first(G__7992__8003);
        var G__8025 = G__7992__8003;
        children__7994 = G__8024;
        G__7992__8001 = G__8025;
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
domina.test.add_test("destroy a single node", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<p class='appended1'>app1</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244))), cljs.core.hash_map("\ufdd0'line", 244)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes.call(null, domina.xpath.xpath.__1("//body/p[@class='appended1']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246))), cljs.core.hash_map("\ufdd0'line", 246)))));
  }
});
domina.test.add_test("destroy multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//body"), "<p class='appended2'>app1</p><p class='appended2'>app2</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/p[@class='appended2']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252))), cljs.core.hash_map("\ufdd0'line", 252)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.__1("//body/p[@class='appended2']"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/p[@class='appended2']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254)))));
  }
});
domina.test.add_test("detach and reattach a single node", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  var n__8097 = domina.detach_BANG_.call(null, domina.xpath.xpath.__1("//p[@class='p3']"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='p3']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260))), cljs.core.hash_map("\ufdd0'line", 260)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"), n__8097);
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='p3']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262)))));
  }
});
domina.test.add_test("detach and reattach multiple nodes", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  var n__8111 = domina.detach_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']/p"));
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268))), cljs.core.hash_map("\ufdd0'line", 268)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"), n__8111);
  if(cljs.core._EQ_.__2(3, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270)))));
  }
});
domina.test.add_test("clear a node's contents", function() {
  domina.test.reset();
  domina.test.standard_fixture();
  domina.destroy_children_BANG_.call(null, domina.xpath.xpath.__1("//div[@class='d1']"));
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276)))));
  }
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/*"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/*"), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277)))));
  }
});
domina.test.add_test("insert-before! with a single reference and single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_(domina.nodes(domina.by_id("ref")), "<p>before</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before']"), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283))), cljs.core.hash_map("\ufdd0'line", 283)))));
  }
});
domina.test.add_test("insert-before! with a single reference and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_(domina.nodes(domina.by_id("ref")), "<p>before1</p><p>before2</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 289))), cljs.core.hash_map("\ufdd0'line", 
    289)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 290))), cljs.core.hash_map("\ufdd0'line", 
    290)))));
  }
});
domina.test.add_test("insert-before! with multiple reference nodes and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_before_BANG_(domina.nodes(domina.by_class("ref")), "<p>before</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297))), cljs.core.hash_map("\ufdd0'line", 297)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/preceding-sibling::p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298))), cljs.core.hash_map("\ufdd0'line", 298)))));
  }
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/preceding-sibling::p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299)))));
  }
});
domina.test.add_test("insert-after! with a single reference and single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_(domina.nodes(domina.by_id("ref")), "<p>after</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after']"), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305))), cljs.core.hash_map("\ufdd0'line", 305)))));
  }
});
domina.test.add_test("insert-after! with a single reference and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_(domina.nodes(domina.by_id("ref")), "<p>after1</p><p>after2</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 311))), cljs.core.hash_map("\ufdd0'line", 
    311)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 312))), cljs.core.hash_map("\ufdd0'line", 
    312)))));
  }
});
domina.test.add_test("insert-after! with multiple reference nodes and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_after_BANG_(domina.nodes(domina.by_class("ref")), "<p>after</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319))), cljs.core.hash_map("\ufdd0'line", 319)))));
  }
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/following-sibling::p"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320))), cljs.core.hash_map("\ufdd0'line", 320)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/following-sibling::p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321))), cljs.core.hash_map("\ufdd0'line", 321)))));
  }
});
domina.test.add_test("swap-content! with a single reference node and a single new node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"), "<p id='after'>fixed</p>");
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327))), cljs.core.hash_map("\ufdd0'line", 327)))));
  }
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='after']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='after']"), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328))), cljs.core.hash_map("\ufdd0'line", 328)))));
  }
});
domina.test.add_test("swap-content! with a single reference node and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334))), cljs.core.hash_map("\ufdd0'line", 334)))));
  }
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335))), cljs.core.hash_map("\ufdd0'line", 335)))));
  }
});
domina.test.add_test("swap-content! with multiple reference nodes and multiple new nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='before'>TYPO-1</p></div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='before'>TYPO-2</p></div>");
  domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@class='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core._EQ_.__2(0, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='before']"))))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='before']"), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342))), cljs.core.hash_map("\ufdd0'line", 342)))));
  }
  if(cljs.core._EQ_.__2(4, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 4, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343))), cljs.core.hash_map("\ufdd0'line", 343)))));
  }
});
domina.test.add_test("can retrieve a css property value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), '<div style="background-color: maroon;">Test</div>');
  if(cljs.core._EQ_.__2("maroon", domina.style(domina.xpath.xpath.__1("//div"), "background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 350)), "background-color"), cljs.core.hash_map("\ufdd0'line", 350))), cljs.core.hash_map("\ufdd0'line", 350)))));
  }
  if(cljs.core._EQ_.__2("maroon", domina.style(domina.xpath.xpath.__1("//div"), "\ufdd0'background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 351)), "\ufdd0'background-color"), cljs.core.hash_map("\ufdd0'line", 351))), cljs.core.hash_map("\ufdd0'line", 351)))));
  }
  if(domina.style(domina.xpath.xpath.__1("//div"), "\ufdd0'no-such-style") === null) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 352)), "\ufdd0'no-such-style"), cljs.core.hash_map("\ufdd0'line", 352))), cljs.core.hash_map("\ufdd0'line", 352)))));
  }
});
domina.test.add_test("can retrieve an HTML attribute value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), '<div height="42">Content!</div>');
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "height"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 357)), "height"), cljs.core.hash_map("\ufdd0'line", 357))), cljs.core.hash_map("\ufdd0'line", 357)))));
  }
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "\ufdd0'height"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 358)), "\ufdd0'height"), cljs.core.hash_map("\ufdd0'line", 358))), cljs.core.hash_map("\ufdd0'line", 358)))));
  }
  if(domina.attr(domina.xpath.xpath.__1("//div"), "\ufdd0'no-such-attr:c") === null) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 359)), "\ufdd0'no-such-attr:c"), cljs.core.hash_map("\ufdd0'line", 359))), cljs.core.hash_map("\ufdd0'line", 359)))));
  }
});
domina.test.add_test("can set a css property on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div[1]"), "background-color", "red");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'background-color", "green");
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 366)), "background-color"), cljs.core.hash_map("\ufdd0'line", 366))), cljs.core.hash_map("\ufdd0'line", 366)))));
  }
  if(cljs.core._EQ_.__2("green", domina.style(domina.xpath.xpath.__1("//div[2]"), "background-color"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "green", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 367)), "background-color"), cljs.core.hash_map("\ufdd0'line", 367))), cljs.core.hash_map("\ufdd0'line", 367)))));
  }
});
domina.test.add_test("can set a css property on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "color", "red");
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 373)), "color"), cljs.core.hash_map("\ufdd0'line", 373))), cljs.core.hash_map("\ufdd0'line", 373)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[2]"), "color"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 374)), "color"), cljs.core.hash_map("\ufdd0'line", 374))), cljs.core.hash_map("\ufdd0'line", 374)))));
  }
});
domina.test.add_test("can set a html attribute on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[1]"), "width", 42);
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'width", 42);
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[1]"), "width"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 381)), "width"), cljs.core.hash_map("\ufdd0'line", 381))), cljs.core.hash_map("\ufdd0'line", 381)))));
  }
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[2]"), "width"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 382)), "width"), cljs.core.hash_map("\ufdd0'line", 382))), cljs.core.hash_map("\ufdd0'line", 382)))));
  }
});
domina.test.add_test("can remove an html attribute from a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div width='42'>1</div><div width='42'>2</div>");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[1]"), "width");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[2]"), "\ufdd0'width");
  if(domina.attr(domina.xpath.xpath.__1("//div[1]"), "width") === null) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 389)), "width"), cljs.core.hash_map("\ufdd0'line", 389))), cljs.core.hash_map("\ufdd0'line", 389)))));
  }
  if(domina.attr(domina.xpath.xpath.__1("//div[2]"), "width") === null) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 390)), "width"), cljs.core.hash_map("\ufdd0'line", 390))), cljs.core.hash_map("\ufdd0'line", 390)))));
  }
});
domina.test.add_test("can remove an html attribute from multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div width='42'>1</div><div width='42'>2</div>");
  domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div"), "width");
  if(domina.attr(domina.xpath.xpath.__1("//div[1]"), "width") === null) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 396)), "width"), cljs.core.hash_map("\ufdd0'line", 396))), cljs.core.hash_map("\ufdd0'line", 396)))));
  }
  if(domina.attr(domina.xpath.xpath.__1("//div[2]"), "width") === null) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 397)), "width"), cljs.core.hash_map("\ufdd0'line", 397))), cljs.core.hash_map("\ufdd0'line", 397)))));
  }
});
domina.test.add_test("can get multiple CSS styles from a single node.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "color", "red");
  domina.set_style_BANG_(domina.xpath.xpath.__1("//div"), "background-color", "black");
  if(cljs.core._EQ_.__2(cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}), domina.styles(domina.xpath.xpath.__1("//div")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'color", "red", "\ufdd0'background-color", "black"), cljs.core.with_meta(cljs.core.list("\ufdd1'styles", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 405))), cljs.core.hash_map("\ufdd0'line", 405))), cljs.core.hash_map("\ufdd0'line", 404)))));
  }
});
domina.test.add_test("can get multiple HTML attributes from a single node.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"), "width", 42);
  domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"), "height", 24);
  var attributes__8565 = domina.attrs(domina.xpath.xpath.__1("//div"));
  if(cljs.core._EQ_.__2("42", "\ufdd0'width".call(null, attributes__8565))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd0'width", "\ufdd1'attributes"), cljs.core.hash_map("\ufdd0'line", 413))), cljs.core.hash_map("\ufdd0'line", 413)))));
  }
  if(cljs.core._EQ_.__2("24", "\ufdd0'height".call(null, attributes__8565))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd0'height", "\ufdd1'attributes"), cljs.core.hash_map("\ufdd0'line", 414))), cljs.core.hash_map("\ufdd0'line", 414)))));
  }
});
domina.test.add_test("can set multiple CSS styles on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div"), "background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 421)), "background-color"), cljs.core.hash_map("\ufdd0'line", 421))), cljs.core.hash_map("\ufdd0'line", 421)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div"), "color"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 422)), "color"), cljs.core.hash_map("\ufdd0'line", 422))), cljs.core.hash_map("\ufdd0'line", 422)))));
  }
});
domina.test.add_test("can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div[1]"), "background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 429)), "background-color"), cljs.core.hash_map("\ufdd0'line", 429))), cljs.core.hash_map("\ufdd0'line", 429)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[1]"), "color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 430)), "color"), cljs.core.hash_map("\ufdd0'line", 430))), cljs.core.hash_map("\ufdd0'line", 430)))));
  }
  if(cljs.core._EQ_.__2("black", domina.style(domina.xpath.xpath.__1("//div[2]"), "background-color"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 431)), "background-color"), cljs.core.hash_map("\ufdd0'line", 431))), cljs.core.hash_map("\ufdd0'line", 431)))));
  }
  if(cljs.core._EQ_.__2("red", domina.style(domina.xpath.xpath.__1("//div[2]"), "color"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 432)), "color"), cljs.core.hash_map("\ufdd0'line", 432))), cljs.core.hash_map("\ufdd0'line", 432)))));
  }
});
domina.test.add_test("can set multiple HTML attributes on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div"), "width"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 439)), "width"), cljs.core.hash_map("\ufdd0'line", 439))), cljs.core.hash_map("\ufdd0'line", 439)))));
  }
  if(cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div"), "height"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 440)), "height"), cljs.core.hash_map("\ufdd0'line", 440))), cljs.core.hash_map("\ufdd0'line", 440)))));
  }
});
domina.test.add_test("can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[1]"), "width"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 447)), "width"), cljs.core.hash_map("\ufdd0'line", 447))), cljs.core.hash_map("\ufdd0'line", 447)))));
  }
  if(cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div[1]"), "height"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 448)), "height"), cljs.core.hash_map("\ufdd0'line", 448))), cljs.core.hash_map("\ufdd0'line", 448)))));
  }
  if(cljs.core._EQ_.__2("42", domina.attr(domina.xpath.xpath.__1("//div[2]"), "width"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 449)), "width"), cljs.core.hash_map("\ufdd0'line", 449))), cljs.core.hash_map("\ufdd0'line", 449)))));
  }
  if(cljs.core._EQ_.__2("24", domina.attr(domina.xpath.xpath.__1("//div[2]"), "height"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 450)), "height"), cljs.core.hash_map("\ufdd0'line", 450))), cljs.core.hash_map("\ufdd0'line", 450)))));
  }
});
domina.test.add_test("test the has-class? function", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1'>1</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class2'>2</div>");
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 456)), "class1"), cljs.core.hash_map("\ufdd0'line", 456))), cljs.core.hash_map("\ufdd0'line", 456)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 457)), "class2"), cljs.core.hash_map("\ufdd0'line", 457))), cljs.core.hash_map("\ufdd0'line", 457)))));
  }
  if(cljs.core._EQ_.__2(false, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 458)), "class2"), cljs.core.hash_map("\ufdd0'line", 458))), cljs.core.hash_map("\ufdd0'line", 458)))));
  }
  if(cljs.core._EQ_.__2(false, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 459)), "class1"), cljs.core.hash_map("\ufdd0'line", 459))), cljs.core.hash_map("\ufdd0'line", 459)))));
  }
});
domina.test.add_test("can add a CSS class to a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div>");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class2");
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 466)), "class1"), cljs.core.hash_map("\ufdd0'line", 466))), cljs.core.hash_map("\ufdd0'line", 466)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class2"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 467)), "class2"), cljs.core.hash_map("\ufdd0'line", 467))), cljs.core.hash_map("\ufdd0'line", 467)))));
  }
});
domina.test.add_test("can add a CSS class to multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div>1</div><div>2</div>");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  domina.add_class_BANG_(domina.xpath.xpath.__1("//div"), "class2");
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 474)), "class1"), cljs.core.hash_map("\ufdd0'line", 474))), cljs.core.hash_map("\ufdd0'line", 474)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 475)), "class1"), cljs.core.hash_map("\ufdd0'line", 475))), cljs.core.hash_map("\ufdd0'line", 475)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 476)), "class2"), cljs.core.hash_map("\ufdd0'line", 476))), cljs.core.hash_map("\ufdd0'line", 476)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 477)), "class2"), cljs.core.hash_map("\ufdd0'line", 477))), cljs.core.hash_map("\ufdd0'line", 477)))));
  }
});
domina.test.add_test("can remove a CSS class from a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2'>1</div>");
  domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  if(cljs.core._EQ_.__2(false, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 483)), "class1"), cljs.core.hash_map("\ufdd0'line", 483))), cljs.core.hash_map("\ufdd0'line", 483)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"), "class2"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 484)), "class2"), cljs.core.hash_map("\ufdd0'line", 484))), cljs.core.hash_map("\ufdd0'line", 484)))));
  }
});
domina.test.add_test("can remove a CSS class from a multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
  domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"), "class1");
  if(cljs.core._EQ_.__2(false, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 490)), "class1"), cljs.core.hash_map("\ufdd0'line", 490))), cljs.core.hash_map("\ufdd0'line", 490)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"), "class2"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 491)), "class2"), cljs.core.hash_map("\ufdd0'line", 491))), cljs.core.hash_map("\ufdd0'line", 491)))));
  }
  if(cljs.core._EQ_.__2(false, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class1"))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 492)), "class1"), cljs.core.hash_map("\ufdd0'line", 492))), cljs.core.hash_map("\ufdd0'line", 492)))));
  }
  if(cljs.core._EQ_.__2(true, domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"), "class2"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 493)), "class2"), cljs.core.hash_map("\ufdd0'line", 493))), cljs.core.hash_map("\ufdd0'line", 493)))));
  }
});
domina.test.add_test("can get a list of all css classes for a node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div class='class1 class2 class3'>1</div>");
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["class1", "class2", "class3"]), domina.classes(domina.xpath.xpath.__1("//div")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["class1", "class2", "class3"]), cljs.core.with_meta(cljs.core.list("\ufdd1'classes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 498))), cljs.core.hash_map("\ufdd0'line", 498))), cljs.core.hash_map("\ufdd0'line", 498)))));
  }
});
domina.test.add_test("can retrieve the text value of a node with normalization.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p>\n\n   Some text.  \n  </p>");
  if(cljs.core._EQ_.__2("Some text.", domina.text.__1(domina.xpath.xpath.__1("//p")))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 503))), cljs.core.hash_map("\ufdd0'line", 503))), cljs.core.hash_map("\ufdd0'line", 503)))));
  }
  if(cljs.core._EQ_.__2("Some text.", domina.text.__2(domina.xpath.xpath.__1("//p"), true))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 504)), true), cljs.core.hash_map("\ufdd0'line", 504))), cljs.core.hash_map("\ufdd0'line", 504)))));
  }
});
domina.test.add_test("can retrieve the text value of a node without normalization.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p>\n\n   Some text.  \n  </p>");
  if(cljs.core._EQ_.__2("\n\n   Some text.  \n  ", domina.text.__2(domina.xpath.xpath.__1("//p"), false))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\n\n   Some text.  \n  ", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 510)), false), cljs.core.hash_map("\ufdd0'line", 510))), cljs.core.hash_map("\ufdd0'line", 510)))));
  }
});
domina.test.add_test("can set text on a single node", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p></p>");
  domina.set_text_BANG_(domina.xpath.xpath.__1("//p"), "Hello world!");
  if(cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 516))), cljs.core.hash_map("\ufdd0'line", 516))), cljs.core.hash_map("\ufdd0'line", 516)))));
  }
});
domina.test.add_test("can set text on a multiple nodes", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<p></p><p></p>");
  domina.set_text_BANG_(domina.xpath.xpath.__1("//p"), "Hello world!");
  if(cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p[1]")))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[1]"), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522))), cljs.core.hash_map("\ufdd0'line", 522)))));
  }
  if(cljs.core._EQ_.__2("Hello world!", domina.text.__1(domina.xpath.xpath.__1("//p[2]")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[2]"), cljs.core.hash_map("\ufdd0'line", 523))), cljs.core.hash_map("\ufdd0'line", 523))), cljs.core.hash_map("\ufdd0'line", 523)))));
  }
});
domina.test.add_test("can get a form field value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test' value='Test Value'></input></form>");
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528))), cljs.core.hash_map("\ufdd0'line", 528)))));
  }
});
domina.test.add_test("can set a form field value", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test'></input></form>");
  domina.set_value_BANG_(domina.xpath.xpath.__1("//input"), "Test Value");
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534))), cljs.core.hash_map("\ufdd0'line", 534)))));
  }
});
domina.test.add_test("can set multiple form field values", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
  domina.set_value_BANG_(domina.xpath.xpath.__1("//input"), "Test Value");
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input[1]")))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[1]"), cljs.core.hash_map("\ufdd0'line", 540))), cljs.core.hash_map("\ufdd0'line", 540))), cljs.core.hash_map("\ufdd0'line", 540)))));
  }
  if(cljs.core._EQ_.__2("Test Value", domina.value(domina.xpath.xpath.__1("//input[2]")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[2]"), cljs.core.hash_map("\ufdd0'line", 541))), cljs.core.hash_map("\ufdd0'line", 541))), cljs.core.hash_map("\ufdd0'line", 541)))));
  }
});
domina.test.add_test("can get a node's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><p class='foobar'>some text</p></div>");
  if(function() {
    var or__3548__auto____8718 = cljs.core._EQ_.__2('<p class="foobar">some text</p>', domina.html(domina.xpath.xpath.__1("//div")));
    if(or__3548__auto____8718) {
      return or__3548__auto____8718
    }else {
      return cljs.core._EQ_.__2("<P class=foobar>some text</P>", domina.html(domina.xpath.xpath.__1("//div")))
    }
  }()) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'or", cljs.core.with_meta(cljs.core.list("\ufdd1'=", '<p class="foobar">some text</p>', cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 547))), cljs.core.hash_map("\ufdd0'line", 547))), cljs.core.hash_map("\ufdd0'line", 547)), cljs.core.with_meta(cljs.core.list("\ufdd1'=", "<P class=foobar>some text</P>", 
    cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 548))), cljs.core.hash_map("\ufdd0'line", 547)))));
  }
});
domina.test.add_test("can set a node's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), "<p class='foobar'>some text</p>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554))), cljs.core.hash_map("\ufdd0'line", 554)))));
  }
});
domina.test.add_test("can set a node's innerHTML to non-string content", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), domina.nodes("<p class='foobar'>some text</p>"));
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560))), cljs.core.hash_map("\ufdd0'line", 560)))));
  }
});
domina.test.add_test("can set multiple nodes' innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div><div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), "<p class='foobar'>some text</p>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566))), cljs.core.hash_map("\ufdd0'line", 566)))));
  }
});
domina.test.add_test("can set multiple nodes' innerHTML to non-string content", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div></div><div></div>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//div"), domina.nodes("<p class='foobar'>some text</p>"));
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572))), cljs.core.hash_map("\ufdd0'line", 572)))));
  }
});
domina.test.add_test("can set a table's innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<table></table>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//table"), "<tr class='foobar'><th>some</th><td>text</td></tr>");
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/table/tr[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578))), cljs.core.hash_map("\ufdd0'line", 578)))));
  }
});
domina.test.add_test("can set multiple tables' innerHTML", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<table></table><table></table>");
  domina.set_html_BANG_(domina.xpath.xpath.__1("//table"), "<tr class='foobar'><th>some</th><td>text</td></tr>");
  if(cljs.core._EQ_.__2(2, cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/table/tr[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584))), cljs.core.hash_map("\ufdd0'line", 584)))));
  }
});
domina.test.add_test("can get nodes from strings containing cell-level table fragments", function() {
  domina.test.reset();
  var n__8785 = domina.nodes("<td>Cell</td><th>Header</th>");
  if(cljs.core._EQ_.__2(cljs.core.count(n__8785), 2)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 589)), 2), cljs.core.hash_map("\ufdd0'line", 589)))));
  }
  if(cljs.core._EQ_.__2("TD", cljs.core.first(n__8785).tagName)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TD", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 590)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 590))), cljs.core.hash_map("\ufdd0'line", 590)))));
  }
  if(cljs.core._EQ_.__2("TH", cljs.core.second(n__8785).tagName)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TH", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 591)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 591))), cljs.core.hash_map("\ufdd0'line", 591)))));
  }
});
domina.test.add_test("can get nodes from strings containing row-level table fragments", function() {
  domina.test.reset();
  var n__8789 = domina.nodes("<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");
  if(cljs.core._EQ_.__2(cljs.core.count(n__8789), 2)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 596)), 2), cljs.core.hash_map("\ufdd0'line", 596)))));
  }
  if(cljs.core._EQ_.__2("TR", cljs.core.first(n__8789).tagName)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TR", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 597)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 597))), cljs.core.hash_map("\ufdd0'line", 597)))));
  }
  if(cljs.core._EQ_.__2("TR", cljs.core.second(n__8789).tagName)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TR", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 598)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 598))), cljs.core.hash_map("\ufdd0'line", 598)))));
  }
});
domina.test.add_test("can get nodes from strings containing section-level table fragments", function() {
  domina.test.reset();
  var n__8811 = domina.nodes("<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");
  if(cljs.core._EQ_.__2(cljs.core.count(n__8811), 2)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.with_meta(cljs.core.list("\ufdd1'count", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 603)), 2), cljs.core.hash_map("\ufdd0'line", 603)))));
  }
  if(cljs.core._EQ_.__2("THEAD", cljs.core.first(n__8811).tagName)) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "THEAD", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'first", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 604)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 604))), cljs.core.hash_map("\ufdd0'line", 604)))));
  }
  if(cljs.core._EQ_.__2("TBODY", cljs.core.second(n__8811).tagName)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "TBODY", cljs.core.with_meta(cljs.core.list("\ufdd1'.", cljs.core.with_meta(cljs.core.list("\ufdd1'second", "\ufdd1'n"), cljs.core.hash_map("\ufdd0'line", 605)), "\ufdd1'-tagName"), cljs.core.hash_map("\ufdd0'line", 605))), cljs.core.hash_map("\ufdd0'line", 605)))));
  }
});
domina.test.add_test("can add and retrieve a listener", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(e) {
    return cljs.core.reset_BANG_(domina.test.clicked, true)
  });
  if(cljs.core._EQ_.__2(1, cljs.core.count(domina.events.get_listeners(domina.css.sel.__1("#mybutton"), "\ufdd0'click")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'get-listeners", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "#mybutton"), cljs.core.hash_map("\ufdd0'line", 615)), "\ufdd0'click"), cljs.core.hash_map("\ufdd0'line", 615))), cljs.core.hash_map("\ufdd0'line", 615))), cljs.core.hash_map("\ufdd0'line", 615)))));
  }
});
domina.test.simulate_click_event = function simulate_click_event(el) {
  var el__8821 = domina.single_node(el);
  var document__8822 = window.document;
  if(cljs.core.truth_(el__8821.click)) {
    return el__8821.click()
  }else {
    if(cljs.core.truth_(document__8822.createEvent)) {
      var e__8824 = document__8822.createEvent("MouseEvents");
      e__8824.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      return el__8821.dispatchEvent(e__8824)
    }else {
      if("\ufdd0'default") {
        throw"Unable to simulate click event";
      }else {
        return null
      }
    }
  }
};
domina.test.add_test("can listen for a browser event", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var clicked__8830 = cljs.core.atom.__1(false);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(e) {
    return cljs.core.reset_BANG_(clicked__8830, true)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.truth_(cljs.core.deref(clicked__8830))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked"))));
  }
});
domina.test.add_test("can extract string keys from an event using keyword accessors", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var coords__8832 = cljs.core.atom.__1(null);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", function(e) {
    return cljs.core.reset_BANG_(coords__8832, cljs.core.PersistentVector.fromArray(["\ufdd0'clientX".call(null, e), "\ufdd0'clientY".call(null, e)]))
  });
  domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", cljs.core.ObjMap.fromObject(["clientX", "clientY"], {"clientX":42, "clientY":42}));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([42, 42]), cljs.core.deref(coords__8832))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec([42, 42]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'coords")), cljs.core.hash_map("\ufdd0'line", 652)))));
  }
});
domina.test.add_test("can dispatch an event, execute default action is true", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  var clicked__8835 = cljs.core.atom.__1(false);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(e) {
    return cljs.core.reset_BANG_(clicked__8835, true)
  });
  var default$__8837 = domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "click", cljs.core.ObjMap.fromObject([], {}));
  if(cljs.core.truth_(cljs.core.deref(clicked__8835))) {
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked"))));
  }
  if(cljs.core.truth_(default$__8837)) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str("\ufdd1'default")));
  }
});
domina.test.add_test("can prevent the default action on an event", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<button id='mybutton'>Text</button>");
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(e) {
    return domina.events.prevent_default(e)
  });
  if(cljs.core.not(domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "click", cljs.core.ObjMap.fromObject([], {})))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.with_meta(cljs.core.list("\ufdd1'dispatch!", cljs.core.with_meta(cljs.core.list("\ufdd1'sel", "#mybutton"), cljs.core.hash_map("\ufdd0'line", 672)), "click", cljs.core.hash_map()), cljs.core.hash_map("\ufdd0'line", 672))), cljs.core.hash_map("\ufdd0'line", 672)))));
  }
});
domina.test.add_test("capture and bubble listeners are triggered in the correct order.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8883 = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__3(clicked__8883, cljs.core.conj, "\ufdd0'listened")
  });
  domina.events.capture_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__3(clicked__8883, cljs.core.conj, "\ufdd0'captured")
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["\ufdd0'captured", "\ufdd0'listened"]), cljs.core.deref(clicked__8883))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["\ufdd0'captured", "\ufdd0'listened"]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 683)))));
  }
});
domina.test.add_test("current-target is correct when capturing custom events", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var actual_elements__8900 = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
  var body__8902 = domina.single_node(domina.css.sel.__1("body"));
  var button__8903 = domina.single_node(domina.css.sel.__1("button"));
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'foobar", function(p1__8880_SHARP_) {
    return cljs.core.swap_BANG_.__3(actual_elements__8900, cljs.core.conj, domina.events.current_target(p1__8880_SHARP_))
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("button"), "\ufdd0'foobar", function(p1__8882_SHARP_) {
    return cljs.core.swap_BANG_.__3(actual_elements__8900, cljs.core.conj, domina.events.current_target(p1__8882_SHARP_))
  });
  domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'foobar", cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"data"}));
  if(cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([button__8903, body__8902]), cljs.core.deref(actual_elements__8900))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.vec(["\ufdd1'button", "\ufdd1'body"]), cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'actual-elements")), cljs.core.hash_map("\ufdd0'line", 698)))));
  }
});
domina.test.add_test("can stop event propagation in the capture phase.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8907 = cljs.core.atom.__1(false);
  domina.events.capture_BANG_.__3(domina.css.sel.__1("div"), "\ufdd0'click", function(p1__8899_SHARP_) {
    return domina.events.stop_propagation(p1__8899_SHARP_)
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function() {
    return cljs.core.reset_BANG_(clicked__8907, true)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.not(cljs.core.deref(clicked__8907))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 709)))));
  }
});
domina.test.add_test("can stop event propagation in the bubble phase.", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8921 = cljs.core.atom.__1(false);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function(e) {
    return cljs.core.reset_BANG_(clicked__8921, true)
  });
  domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"), "\ufdd0'click", function(e) {
    return domina.events.stop_propagation(e)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core.not(cljs.core.deref(clicked__8921))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'not", cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 722)))));
  }
});
domina.test.add_test("listen-once triggers only once", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8942 = cljs.core.atom.__1(0);
  domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(clicked__8942, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(clicked__8942))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 733)))));
  }
});
domina.test.add_test("listen-once triggers only once", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8947 = cljs.core.atom.__1(0);
  domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(clicked__8947, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(clicked__8947))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 744)))));
  }
});
domina.test.add_test("can unlisten generically", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8973 = cljs.core.atom.__1(0);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(clicked__8973, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__1(domina.css.sel.__1("body"));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(clicked__8973))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 756)))));
  }
});
domina.test.add_test("can unlisten narrowed by type", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8995 = cljs.core.atom.__1(0);
  domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(clicked__8995, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"), "\ufdd0'foobar");
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"), "\ufdd0'click");
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(2, cljs.core.deref(clicked__8995))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 770)))));
  }
});
domina.test.add_test("can unlisten by key", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div><button id='mybutton'>Text</button></div>");
  var clicked__8997 = cljs.core.atom.__1(0);
  var keys__8998 = domina.events.listen_BANG_.__3(domina.css.sel.__1("body"), "\ufdd0'click", function() {
    return cljs.core.swap_BANG_.__2(clicked__8997, cljs.core.inc)
  });
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  domina.events.unlisten_by_key_BANG_(cljs.core.first(keys__8998));
  domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
  if(cljs.core._EQ_.__2(1, cljs.core.deref(clicked__8997))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'clicked")), cljs.core.hash_map("\ufdd0'line", 782)))));
  }
});
domina.test.add_test("can send and listen for custom events with custom data", function() {
  domina.test.reset();
  var worked__9000 = cljs.core.atom.__1(false);
  domina.events.listen_BANG_.__2("\ufdd0'foobar", function(evt) {
    if(cljs.core._EQ_.__2("data", "\ufdd0'some".call(null, evt))) {
      return cljs.core.reset_BANG_(worked__9000, true)
    }else {
      return null
    }
  });
  domina.events.dispatch_BANG_.__2("\ufdd0'foobar", cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"data"}));
  if(cljs.core.truth_(cljs.core.deref(worked__9000))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.list("\ufdd1'clojure.core/deref", "\ufdd1'worked"))));
  }
});
domina.test.add_test("doesn't clone unless necessary", function() {
  domina.test.reset();
  var child__9003 = domina.single_node("<div>hello</div>");
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), child__9003);
  if(cljs.core._EQ_.__2(child__9003, domina.single_node(domina.xpath.xpath.__1("//body/div")))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'child", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div"), cljs.core.hash_map("\ufdd0'line", 799))), cljs.core.hash_map("\ufdd0'line", 799))), cljs.core.hash_map("\ufdd0'line", 799)))));
  }
});
domina.test.add_test("test that data works", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='testingdata'>hello</div>");
  var data__9027 = cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"complex data"});
  domina.set_data_BANG_(domina.by_id("testingdata"), "\ufdd0'my-impeccable-data", data__9027);
  if(cljs.core._EQ_.__2(data__9027, domina.get_data.__2(domina.by_id("testingdata"), "\ufdd0'my-impeccable-data"))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'data", cljs.core.with_meta(cljs.core.list("\ufdd1'get-data", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "testingdata"), cljs.core.hash_map("\ufdd0'line", 807)), "\ufdd0'my-impeccable-data"), cljs.core.hash_map("\ufdd0'line", 807))), cljs.core.hash_map("\ufdd0'line", 807)))));
  }
});
domina.test.add_test("test that data works with bubbling", function() {
  domina.test.reset();
  domina.append_BANG_(domina.xpath.xpath.__1("//body"), "<div id='outerdata'><div id='innerdata'>hello</div></div>");
  var data__9033 = cljs.core.ObjMap.fromObject(["\ufdd0'some"], {"\ufdd0'some":"complex data"});
  domina.set_data_BANG_(domina.by_id("outerdata"), "\ufdd0'my-impeccable-data", data__9033);
  if(cljs.core._EQ_.__2(data__9033, domina.get_data.__3(domina.by_id("innerdata"), "\ufdd0'my-impeccable-data", true))) {
    return null
  }else {
    throw new Error(cljs.core.str("Assert failed: ", cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\ufdd1'=", "\ufdd1'data", cljs.core.with_meta(cljs.core.list("\ufdd1'get-data", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "innerdata"), cljs.core.hash_map("\ufdd0'line", 816)), "\ufdd0'my-impeccable-data", true), cljs.core.hash_map("\ufdd0'line", 816))), cljs.core.hash_map("\ufdd0'line", 816)))));
  }
});
domina.test.report = function report(test_results) {
  domina.test.reset();
  var G__9035__9036 = cljs.core.seq(test_results);
  if(cljs.core.truth_(G__9035__9036)) {
    var G__9038__9040 = cljs.core.first(G__9035__9036);
    var vec__9039__9041 = G__9038__9040;
    var name__9042 = cljs.core.nth.__3(vec__9039__9041, 0, null);
    var result__9043 = cljs.core.nth.__3(vec__9039__9041, 1, null);
    var G__9035__9044 = G__9035__9036;
    var G__9038__9045 = G__9038__9040;
    var G__9035__9046 = G__9035__9044;
    while(true) {
      var vec__9047__9048 = G__9038__9045;
      var name__9049 = cljs.core.nth.__3(vec__9047__9048, 0, null);
      var result__9050 = cljs.core.nth.__3(vec__9047__9048, 1, null);
      var G__9035__9051 = G__9035__9046;
      var result_div__9052 = domina.single_node("<div class='test-result'></div>");
      domina.set_text_BANG_(result_div__9052, name__9049);
      if(cljs.core.not(cljs.core._EQ_.__2(result__9050, null))) {
        domina.add_class_BANG_(result_div__9052, "failed");
        domina.append_BANG_(result_div__9052, cljs.core.str("<div class='message'>", result__9050, "</div>"))
      }else {
        domina.add_class_BANG_(result_div__9052, "passed")
      }
      domina.append_BANG_(domina.xpath.xpath.__1("//body"), result_div__9052);
      var temp__3698__auto____9053 = cljs.core.next(G__9035__9051);
      if(cljs.core.truth_(temp__3698__auto____9053)) {
        var G__9035__9054 = temp__3698__auto____9053;
        var G__9059 = cljs.core.first(G__9035__9054);
        var G__9060 = G__9035__9054;
        G__9038__9045 = G__9059;
        G__9035__9046 = G__9060;
        continue
      }else {
      }
      break
    }
  }else {
  }
  domina.prepend_BANG_(domina.xpath.xpath.__1("//body"), "<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
  domina.set_text_BANG_(domina.by_id("total-tests"), cljs.core.count(test_results));
  var failure_count__9055 = cljs.core.count(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_), cljs.core.map.__2(cljs.core.second, test_results)));
  domina.set_text_BANG_(domina.by_id("total-failures"), failure_count__9055);
  if(cljs.core._EQ_.__2(0, failure_count__9055)) {
    return domina.add_class_BANG_(domina.by_id("test-summary"), "passed")
  }else {
    return domina.add_class_BANG_(domina.by_id("test-summary"), "failed")
  }
};
domina.test.test_results = cljs.core.doall.__1(domina.test.run_tests());
domina.test.report(domina.test.test_results);
