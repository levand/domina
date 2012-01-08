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
  var or__3548__auto____4326 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____4326)) {
    return or__3548__auto____4326
  }else {
    var or__3548__auto____4327 = p["_"];
    if(cljs.core.truth_(or__3548__auto____4327)) {
      return or__3548__auto____4327
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
    var and__3546__auto____4328 = coll;
    if(cljs.core.truth_(and__3546__auto____4328)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____4328
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____4329 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4329)) {
        return or__3548__auto____4329
      }else {
        var or__3548__auto____4330 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____4330)) {
          return or__3548__auto____4330
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
    var and__3546__auto____4331 = coll;
    if(cljs.core.truth_(and__3546__auto____4331)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____4331
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____4332 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4332)) {
        return or__3548__auto____4332
      }else {
        var or__3548__auto____4333 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____4333)) {
          return or__3548__auto____4333
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
    var and__3546__auto____4334 = coll;
    if(cljs.core.truth_(and__3546__auto____4334)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____4334
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____4335 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4335)) {
        return or__3548__auto____4335
      }else {
        var or__3548__auto____4336 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____4336)) {
          return or__3548__auto____4336
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
  var _nth__4343 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4337 = coll;
      if(cljs.core.truth_(and__3546__auto____4337)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____4337
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____4338 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____4338)) {
          return or__3548__auto____4338
        }else {
          var or__3548__auto____4339 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____4339)) {
            return or__3548__auto____4339
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__4344 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4340 = coll;
      if(cljs.core.truth_(and__3546__auto____4340)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____4340
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____4341 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____4341)) {
          return or__3548__auto____4341
        }else {
          var or__3548__auto____4342 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____4342)) {
            return or__3548__auto____4342
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
        return _nth__4343.call(this, coll, n);
      case 3:
        return _nth__4344.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4346 = coll;
    if(cljs.core.truth_(and__3546__auto____4346)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____4346
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____4347 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4347)) {
        return or__3548__auto____4347
      }else {
        var or__3548__auto____4348 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____4348)) {
          return or__3548__auto____4348
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4349 = coll;
    if(cljs.core.truth_(and__3546__auto____4349)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____4349
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____4350 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4350)) {
        return or__3548__auto____4350
      }else {
        var or__3548__auto____4351 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____4351)) {
          return or__3548__auto____4351
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
  var _lookup__4358 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4352 = o;
      if(cljs.core.truth_(and__3546__auto____4352)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____4352
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____4353 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____4353)) {
          return or__3548__auto____4353
        }else {
          var or__3548__auto____4354 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____4354)) {
            return or__3548__auto____4354
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__4359 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4355 = o;
      if(cljs.core.truth_(and__3546__auto____4355)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____4355
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____4356 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____4356)) {
          return or__3548__auto____4356
        }else {
          var or__3548__auto____4357 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____4357)) {
            return or__3548__auto____4357
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
        return _lookup__4358.call(this, o, k);
      case 3:
        return _lookup__4359.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4361 = coll;
    if(cljs.core.truth_(and__3546__auto____4361)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____4361
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____4362 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4362)) {
        return or__3548__auto____4362
      }else {
        var or__3548__auto____4363 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____4363)) {
          return or__3548__auto____4363
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4364 = coll;
    if(cljs.core.truth_(and__3546__auto____4364)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____4364
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____4365 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4365)) {
        return or__3548__auto____4365
      }else {
        var or__3548__auto____4366 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____4366)) {
          return or__3548__auto____4366
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
    var and__3546__auto____4367 = coll;
    if(cljs.core.truth_(and__3546__auto____4367)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____4367
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____4368 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4368)) {
        return or__3548__auto____4368
      }else {
        var or__3548__auto____4369 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____4369)) {
          return or__3548__auto____4369
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
    var and__3546__auto____4370 = coll;
    if(cljs.core.truth_(and__3546__auto____4370)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____4370
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____4371 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4371)) {
        return or__3548__auto____4371
      }else {
        var or__3548__auto____4372 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____4372)) {
          return or__3548__auto____4372
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
    var and__3546__auto____4373 = coll;
    if(cljs.core.truth_(and__3546__auto____4373)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____4373
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____4374 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4374)) {
        return or__3548__auto____4374
      }else {
        var or__3548__auto____4375 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____4375)) {
          return or__3548__auto____4375
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4376 = coll;
    if(cljs.core.truth_(and__3546__auto____4376)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____4376
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____4377 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4377)) {
        return or__3548__auto____4377
      }else {
        var or__3548__auto____4378 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____4378)) {
          return or__3548__auto____4378
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
    var and__3546__auto____4379 = coll;
    if(cljs.core.truth_(and__3546__auto____4379)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____4379
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____4380 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____4380)) {
        return or__3548__auto____4380
      }else {
        var or__3548__auto____4381 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____4381)) {
          return or__3548__auto____4381
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
    var and__3546__auto____4382 = o;
    if(cljs.core.truth_(and__3546__auto____4382)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____4382
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____4383 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4383)) {
        return or__3548__auto____4383
      }else {
        var or__3548__auto____4384 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____4384)) {
          return or__3548__auto____4384
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
    var and__3546__auto____4385 = o;
    if(cljs.core.truth_(and__3546__auto____4385)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____4385
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____4386 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4386)) {
        return or__3548__auto____4386
      }else {
        var or__3548__auto____4387 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____4387)) {
          return or__3548__auto____4387
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
    var and__3546__auto____4388 = o;
    if(cljs.core.truth_(and__3546__auto____4388)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____4388
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____4389 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4389)) {
        return or__3548__auto____4389
      }else {
        var or__3548__auto____4390 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____4390)) {
          return or__3548__auto____4390
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
    var and__3546__auto____4391 = o;
    if(cljs.core.truth_(and__3546__auto____4391)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____4391
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____4392 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4392)) {
        return or__3548__auto____4392
      }else {
        var or__3548__auto____4393 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____4393)) {
          return or__3548__auto____4393
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
  var _reduce__4400 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4394 = coll;
      if(cljs.core.truth_(and__3546__auto____4394)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____4394
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____4395 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____4395)) {
          return or__3548__auto____4395
        }else {
          var or__3548__auto____4396 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____4396)) {
            return or__3548__auto____4396
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__4401 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4397 = coll;
      if(cljs.core.truth_(and__3546__auto____4397)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____4397
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____4398 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____4398)) {
          return or__3548__auto____4398
        }else {
          var or__3548__auto____4399 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____4399)) {
            return or__3548__auto____4399
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
        return _reduce__4400.call(this, coll, f);
      case 3:
        return _reduce__4401.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4403 = o;
    if(cljs.core.truth_(and__3546__auto____4403)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____4403
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____4404 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4404)) {
        return or__3548__auto____4404
      }else {
        var or__3548__auto____4405 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____4405)) {
          return or__3548__auto____4405
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
    var and__3546__auto____4406 = o;
    if(cljs.core.truth_(and__3546__auto____4406)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____4406
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____4407 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4407)) {
        return or__3548__auto____4407
      }else {
        var or__3548__auto____4408 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____4408)) {
          return or__3548__auto____4408
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
    var and__3546__auto____4409 = o;
    if(cljs.core.truth_(and__3546__auto____4409)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____4409
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____4410 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4410)) {
        return or__3548__auto____4410
      }else {
        var or__3548__auto____4411 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____4411)) {
          return or__3548__auto____4411
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
    var and__3546__auto____4412 = o;
    if(cljs.core.truth_(and__3546__auto____4412)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____4412
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____4413 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____4413)) {
        return or__3548__auto____4413
      }else {
        var or__3548__auto____4414 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____4414)) {
          return or__3548__auto____4414
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
    var and__3546__auto____4415 = d;
    if(cljs.core.truth_(and__3546__auto____4415)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____4415
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____4416 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____4416)) {
        return or__3548__auto____4416
      }else {
        var or__3548__auto____4417 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____4417)) {
          return or__3548__auto____4417
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
    var and__3546__auto____4418 = this$;
    if(cljs.core.truth_(and__3546__auto____4418)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____4418
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____4419 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____4419)) {
        return or__3548__auto____4419
      }else {
        var or__3548__auto____4420 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____4420)) {
          return or__3548__auto____4420
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4421 = this$;
    if(cljs.core.truth_(and__3546__auto____4421)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____4421
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____4422 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____4422)) {
        return or__3548__auto____4422
      }else {
        var or__3548__auto____4423 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____4423)) {
          return or__3548__auto____4423
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____4424 = this$;
    if(cljs.core.truth_(and__3546__auto____4424)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____4424
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____4425 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____4425)) {
        return or__3548__auto____4425
      }else {
        var or__3548__auto____4426 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____4426)) {
          return or__3548__auto____4426
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
  var G__4427 = null;
  var G__4427__4428 = function(o, k) {
    return null
  };
  var G__4427__4429 = function(o, k, not_found) {
    return not_found
  };
  G__4427 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4427__4428.call(this, o, k);
      case 3:
        return G__4427__4429.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4427
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
  var G__4431 = null;
  var G__4431__4432 = function(_, f) {
    return f.call(null)
  };
  var G__4431__4433 = function(_, f, start) {
    return start
  };
  G__4431 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4431__4432.call(this, _, f);
      case 3:
        return G__4431__4433.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4431
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
  var G__4435 = null;
  var G__4435__4436 = function(_, n) {
    return null
  };
  var G__4435__4437 = function(_, n, not_found) {
    return not_found
  };
  G__4435 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4435__4436.call(this, _, n);
      case 3:
        return G__4435__4437.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4435
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
  var ci_reduce__4445 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__4439 = cljs.core._nth.call(null, cicoll, 0);
      var n__4440 = 1;
      while(true) {
        if(cljs.core.truth_(n__4440 < cljs.core._count.call(null, cicoll))) {
          var G__4449 = f.call(null, val__4439, cljs.core._nth.call(null, cicoll, n__4440));
          var G__4450 = n__4440 + 1;
          val__4439 = G__4449;
          n__4440 = G__4450;
          continue
        }else {
          return val__4439
        }
        break
      }
    }
  };
  var ci_reduce__4446 = function(cicoll, f, val) {
    var val__4441 = val;
    var n__4442 = 0;
    while(true) {
      if(cljs.core.truth_(n__4442 < cljs.core._count.call(null, cicoll))) {
        var G__4451 = f.call(null, val__4441, cljs.core._nth.call(null, cicoll, n__4442));
        var G__4452 = n__4442 + 1;
        val__4441 = G__4451;
        n__4442 = G__4452;
        continue
      }else {
        return val__4441
      }
      break
    }
  };
  var ci_reduce__4447 = function(cicoll, f, val, idx) {
    var val__4443 = val;
    var n__4444 = idx;
    while(true) {
      if(cljs.core.truth_(n__4444 < cljs.core._count.call(null, cicoll))) {
        var G__4453 = f.call(null, val__4443, cljs.core._nth.call(null, cicoll, n__4444));
        var G__4454 = n__4444 + 1;
        val__4443 = G__4453;
        n__4444 = G__4454;
        continue
      }else {
        return val__4443
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__4445.call(this, cicoll, f);
      case 3:
        return ci_reduce__4446.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__4447.call(this, cicoll, f, val, idx)
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
  var this__4455 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__4468 = null;
  var G__4468__4469 = function(coll, f) {
    var this__4456 = this;
    return cljs.core.ci_reduce.call(null, coll, f, this__4456.a[this__4456.i], this__4456.i + 1)
  };
  var G__4468__4470 = function(coll, f, start) {
    var this__4457 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start, this__4457.i)
  };
  G__4468 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4468__4469.call(this, coll, f);
      case 3:
        return G__4468__4470.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4468
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__4458 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__4459 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__4472 = null;
  var G__4472__4473 = function(coll, n) {
    var this__4460 = this;
    var i__4461 = n + this__4460.i;
    if(cljs.core.truth_(i__4461 < this__4460.a.length)) {
      return this__4460.a[i__4461]
    }else {
      return null
    }
  };
  var G__4472__4474 = function(coll, n, not_found) {
    var this__4462 = this;
    var i__4463 = n + this__4462.i;
    if(cljs.core.truth_(i__4463 < this__4462.a.length)) {
      return this__4462.a[i__4463]
    }else {
      return not_found
    }
  };
  G__4472 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4472__4473.call(this, coll, n);
      case 3:
        return G__4472__4474.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4472
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__4464 = this;
  return this__4464.a.length - this__4464.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__4465 = this;
  return this__4465.a[this__4465.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__4466 = this;
  if(cljs.core.truth_(this__4466.i + 1 < this__4466.a.length)) {
    return new cljs.core.IndexedSeq(this__4466.a, this__4466.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__4467 = this;
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
  var G__4476 = null;
  var G__4476__4477 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__4476__4478 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__4476 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4476__4477.call(this, array, f);
      case 3:
        return G__4476__4478.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4476
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__4480 = null;
  var G__4480__4481 = function(array, k) {
    return array[k]
  };
  var G__4480__4482 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__4480 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4480__4481.call(this, array, k);
      case 3:
        return G__4480__4482.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4480
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__4484 = null;
  var G__4484__4485 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__4484__4486 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__4484 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4484__4485.call(this, array, n);
      case 3:
        return G__4484__4486.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4484
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
  var temp__3698__auto____4488 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____4488)) {
    var s__4489 = temp__3698__auto____4488;
    return cljs.core._first.call(null, s__4489)
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
      var G__4490 = cljs.core.next.call(null, s);
      s = G__4490;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__4491 = cljs.core.seq.call(null, x);
  var n__4492 = 0;
  while(true) {
    if(cljs.core.truth_(s__4491)) {
      var G__4493 = cljs.core.next.call(null, s__4491);
      var G__4494 = n__4492 + 1;
      s__4491 = G__4493;
      n__4492 = G__4494;
      continue
    }else {
      return n__4492
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
  var conj__4495 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__4496 = function() {
    var G__4498__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__4499 = conj.call(null, coll, x);
          var G__4500 = cljs.core.first.call(null, xs);
          var G__4501 = cljs.core.next.call(null, xs);
          coll = G__4499;
          x = G__4500;
          xs = G__4501;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__4498 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4498__delegate.call(this, coll, x, xs)
    };
    G__4498.cljs$lang$maxFixedArity = 2;
    G__4498.cljs$lang$applyTo = function(arglist__4502) {
      var coll = cljs.core.first(arglist__4502);
      var x = cljs.core.first(cljs.core.next(arglist__4502));
      var xs = cljs.core.rest(cljs.core.next(arglist__4502));
      return G__4498__delegate.call(this, coll, x, xs)
    };
    return G__4498
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__4495.call(this, coll, x);
      default:
        return conj__4496.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__4496.cljs$lang$applyTo;
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
  var nth__4503 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__4504 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__4503.call(this, coll, n);
      case 3:
        return nth__4504.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__4506 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__4507 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__4506.call(this, o, k);
      case 3:
        return get__4507.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__4510 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__4511 = function() {
    var G__4513__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__4509 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__4514 = ret__4509;
          var G__4515 = cljs.core.first.call(null, kvs);
          var G__4516 = cljs.core.second.call(null, kvs);
          var G__4517 = cljs.core.nnext.call(null, kvs);
          coll = G__4514;
          k = G__4515;
          v = G__4516;
          kvs = G__4517;
          continue
        }else {
          return ret__4509
        }
        break
      }
    };
    var G__4513 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__4513__delegate.call(this, coll, k, v, kvs)
    };
    G__4513.cljs$lang$maxFixedArity = 3;
    G__4513.cljs$lang$applyTo = function(arglist__4518) {
      var coll = cljs.core.first(arglist__4518);
      var k = cljs.core.first(cljs.core.next(arglist__4518));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4518)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4518)));
      return G__4513__delegate.call(this, coll, k, v, kvs)
    };
    return G__4513
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__4510.call(this, coll, k, v);
      default:
        return assoc__4511.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__4511.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__4520 = function(coll) {
    return coll
  };
  var dissoc__4521 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__4522 = function() {
    var G__4524__delegate = function(coll, k, ks) {
      while(true) {
        var ret__4519 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__4525 = ret__4519;
          var G__4526 = cljs.core.first.call(null, ks);
          var G__4527 = cljs.core.next.call(null, ks);
          coll = G__4525;
          k = G__4526;
          ks = G__4527;
          continue
        }else {
          return ret__4519
        }
        break
      }
    };
    var G__4524 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4524__delegate.call(this, coll, k, ks)
    };
    G__4524.cljs$lang$maxFixedArity = 2;
    G__4524.cljs$lang$applyTo = function(arglist__4528) {
      var coll = cljs.core.first(arglist__4528);
      var k = cljs.core.first(cljs.core.next(arglist__4528));
      var ks = cljs.core.rest(cljs.core.next(arglist__4528));
      return G__4524__delegate.call(this, coll, k, ks)
    };
    return G__4524
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__4520.call(this, coll);
      case 2:
        return dissoc__4521.call(this, coll, k);
      default:
        return dissoc__4522.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__4522.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__319__auto____4529 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____4530 = x__319__auto____4529;
      if(cljs.core.truth_(and__3546__auto____4530)) {
        var and__3546__auto____4531 = x__319__auto____4529.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____4531)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4529))
        }else {
          return and__3546__auto____4531
        }
      }else {
        return and__3546__auto____4530
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____4529)
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
  var disj__4533 = function(coll) {
    return coll
  };
  var disj__4534 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__4535 = function() {
    var G__4537__delegate = function(coll, k, ks) {
      while(true) {
        var ret__4532 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__4538 = ret__4532;
          var G__4539 = cljs.core.first.call(null, ks);
          var G__4540 = cljs.core.next.call(null, ks);
          coll = G__4538;
          k = G__4539;
          ks = G__4540;
          continue
        }else {
          return ret__4532
        }
        break
      }
    };
    var G__4537 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4537__delegate.call(this, coll, k, ks)
    };
    G__4537.cljs$lang$maxFixedArity = 2;
    G__4537.cljs$lang$applyTo = function(arglist__4541) {
      var coll = cljs.core.first(arglist__4541);
      var k = cljs.core.first(cljs.core.next(arglist__4541));
      var ks = cljs.core.rest(cljs.core.next(arglist__4541));
      return G__4537__delegate.call(this, coll, k, ks)
    };
    return G__4537
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__4533.call(this, coll);
      case 2:
        return disj__4534.call(this, coll, k);
      default:
        return disj__4535.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__4535.cljs$lang$applyTo;
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
    var x__319__auto____4542 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____4543 = x__319__auto____4542;
      if(cljs.core.truth_(and__3546__auto____4543)) {
        var and__3546__auto____4544 = x__319__auto____4542.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____4544)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4542))
        }else {
          return and__3546__auto____4544
        }
      }else {
        return and__3546__auto____4543
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__319__auto____4542)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____4545 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____4546 = x__319__auto____4545;
      if(cljs.core.truth_(and__3546__auto____4546)) {
        var and__3546__auto____4547 = x__319__auto____4545.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____4547)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4545))
        }else {
          return and__3546__auto____4547
        }
      }else {
        return and__3546__auto____4546
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__319__auto____4545)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__319__auto____4548 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____4549 = x__319__auto____4548;
    if(cljs.core.truth_(and__3546__auto____4549)) {
      var and__3546__auto____4550 = x__319__auto____4548.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____4550)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4548))
      }else {
        return and__3546__auto____4550
      }
    }else {
      return and__3546__auto____4549
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__319__auto____4548)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__319__auto____4551 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____4552 = x__319__auto____4551;
    if(cljs.core.truth_(and__3546__auto____4552)) {
      var and__3546__auto____4553 = x__319__auto____4551.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____4553)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4551))
      }else {
        return and__3546__auto____4553
      }
    }else {
      return and__3546__auto____4552
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__319__auto____4551)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__319__auto____4554 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____4555 = x__319__auto____4554;
    if(cljs.core.truth_(and__3546__auto____4555)) {
      var and__3546__auto____4556 = x__319__auto____4554.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____4556)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4554))
      }else {
        return and__3546__auto____4556
      }
    }else {
      return and__3546__auto____4555
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__319__auto____4554)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__319__auto____4557 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____4558 = x__319__auto____4557;
      if(cljs.core.truth_(and__3546__auto____4558)) {
        var and__3546__auto____4559 = x__319__auto____4557.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____4559)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4557))
        }else {
          return and__3546__auto____4559
        }
      }else {
        return and__3546__auto____4558
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__319__auto____4557)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__319__auto____4560 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____4561 = x__319__auto____4560;
    if(cljs.core.truth_(and__3546__auto____4561)) {
      var and__3546__auto____4562 = x__319__auto____4560.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____4562)) {
        return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4560))
      }else {
        return and__3546__auto____4562
      }
    }else {
      return and__3546__auto____4561
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__319__auto____4560)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__4563 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__4563.push(key)
  });
  return keys__4563
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
    var x__319__auto____4564 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____4565 = x__319__auto____4564;
      if(cljs.core.truth_(and__3546__auto____4565)) {
        var and__3546__auto____4566 = x__319__auto____4564.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____4566)) {
          return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____4564))
        }else {
          return and__3546__auto____4566
        }
      }else {
        return and__3546__auto____4565
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__319__auto____4564)
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
  var and__3546__auto____4567 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____4567)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____4568 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____4568)) {
        return or__3548__auto____4568
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____4567
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____4569 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____4569)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____4569
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____4570 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____4570)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____4570
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____4571 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____4571)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____4571
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
    var and__3546__auto____4572 = coll;
    if(cljs.core.truth_(and__3546__auto____4572)) {
      var and__3546__auto____4573 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____4573)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____4573
      }
    }else {
      return and__3546__auto____4572
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___4578 = function(x) {
    return true
  };
  var distinct_QMARK___4579 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___4580 = function() {
    var G__4582__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__4574 = cljs.core.set([y, x]);
        var xs__4575 = more;
        while(true) {
          var x__4576 = cljs.core.first.call(null, xs__4575);
          var etc__4577 = cljs.core.next.call(null, xs__4575);
          if(cljs.core.truth_(xs__4575)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__4574, x__4576))) {
              return false
            }else {
              var G__4583 = cljs.core.conj.call(null, s__4574, x__4576);
              var G__4584 = etc__4577;
              s__4574 = G__4583;
              xs__4575 = G__4584;
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
    var G__4582 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4582__delegate.call(this, x, y, more)
    };
    G__4582.cljs$lang$maxFixedArity = 2;
    G__4582.cljs$lang$applyTo = function(arglist__4585) {
      var x = cljs.core.first(arglist__4585);
      var y = cljs.core.first(cljs.core.next(arglist__4585));
      var more = cljs.core.rest(cljs.core.next(arglist__4585));
      return G__4582__delegate.call(this, x, y, more)
    };
    return G__4582
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___4578.call(this, x);
      case 2:
        return distinct_QMARK___4579.call(this, x, y);
      default:
        return distinct_QMARK___4580.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___4580.cljs$lang$applyTo;
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
      var r__4586 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__4586))) {
        return r__4586
      }else {
        if(cljs.core.truth_(r__4586)) {
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
  var sort__4588 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__4589 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__4587 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__4587, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__4587)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__4588.call(this, comp);
      case 2:
        return sort__4589.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__4591 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__4592 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__4591.call(this, keyfn, comp);
      case 3:
        return sort_by__4592.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__4594 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__4595 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__4594.call(this, f, val);
      case 3:
        return reduce__4595.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__4601 = function(f, coll) {
    var temp__3695__auto____4597 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____4597)) {
      var s__4598 = temp__3695__auto____4597;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__4598), cljs.core.next.call(null, s__4598))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__4602 = function(f, val, coll) {
    var val__4599 = val;
    var coll__4600 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__4600)) {
        var G__4604 = f.call(null, val__4599, cljs.core.first.call(null, coll__4600));
        var G__4605 = cljs.core.next.call(null, coll__4600);
        val__4599 = G__4604;
        coll__4600 = G__4605;
        continue
      }else {
        return val__4599
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__4601.call(this, f, val);
      case 3:
        return seq_reduce__4602.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__4606 = null;
  var G__4606__4607 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__4606__4608 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__4606 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4606__4607.call(this, coll, f);
      case 3:
        return G__4606__4608.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4606
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___4610 = function() {
    return 0
  };
  var _PLUS___4611 = function(x) {
    return x
  };
  var _PLUS___4612 = function(x, y) {
    return x + y
  };
  var _PLUS___4613 = function() {
    var G__4615__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, _PLUS_.call(null, x, y), more)
    };
    var G__4615 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4615__delegate.call(this, x, y, more)
    };
    G__4615.cljs$lang$maxFixedArity = 2;
    G__4615.cljs$lang$applyTo = function(arglist__4616) {
      var x = cljs.core.first(arglist__4616);
      var y = cljs.core.first(cljs.core.next(arglist__4616));
      var more = cljs.core.rest(cljs.core.next(arglist__4616));
      return G__4615__delegate.call(this, x, y, more)
    };
    return G__4615
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___4610.call(this);
      case 1:
        return _PLUS___4611.call(this, x);
      case 2:
        return _PLUS___4612.call(this, x, y);
      default:
        return _PLUS___4613.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___4613.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___4617 = function(x) {
    return-x
  };
  var ___4618 = function(x, y) {
    return x - y
  };
  var ___4619 = function() {
    var G__4621__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, _.call(null, x, y), more)
    };
    var G__4621 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4621__delegate.call(this, x, y, more)
    };
    G__4621.cljs$lang$maxFixedArity = 2;
    G__4621.cljs$lang$applyTo = function(arglist__4622) {
      var x = cljs.core.first(arglist__4622);
      var y = cljs.core.first(cljs.core.next(arglist__4622));
      var more = cljs.core.rest(cljs.core.next(arglist__4622));
      return G__4621__delegate.call(this, x, y, more)
    };
    return G__4621
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___4617.call(this, x);
      case 2:
        return ___4618.call(this, x, y);
      default:
        return ___4619.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___4619.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___4623 = function() {
    return 1
  };
  var _STAR___4624 = function(x) {
    return x
  };
  var _STAR___4625 = function(x, y) {
    return x * y
  };
  var _STAR___4626 = function() {
    var G__4628__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, _STAR_.call(null, x, y), more)
    };
    var G__4628 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4628__delegate.call(this, x, y, more)
    };
    G__4628.cljs$lang$maxFixedArity = 2;
    G__4628.cljs$lang$applyTo = function(arglist__4629) {
      var x = cljs.core.first(arglist__4629);
      var y = cljs.core.first(cljs.core.next(arglist__4629));
      var more = cljs.core.rest(cljs.core.next(arglist__4629));
      return G__4628__delegate.call(this, x, y, more)
    };
    return G__4628
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___4623.call(this);
      case 1:
        return _STAR___4624.call(this, x);
      case 2:
        return _STAR___4625.call(this, x, y);
      default:
        return _STAR___4626.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___4626.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___4630 = function(x) {
    return 1 / x
  };
  var _SLASH___4631 = function(x, y) {
    return x / y
  };
  var _SLASH___4632 = function() {
    var G__4634__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__4634 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4634__delegate.call(this, x, y, more)
    };
    G__4634.cljs$lang$maxFixedArity = 2;
    G__4634.cljs$lang$applyTo = function(arglist__4635) {
      var x = cljs.core.first(arglist__4635);
      var y = cljs.core.first(cljs.core.next(arglist__4635));
      var more = cljs.core.rest(cljs.core.next(arglist__4635));
      return G__4634__delegate.call(this, x, y, more)
    };
    return G__4634
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___4630.call(this, x);
      case 2:
        return _SLASH___4631.call(this, x, y);
      default:
        return _SLASH___4632.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___4632.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___4636 = function(x) {
    return true
  };
  var _LT___4637 = function(x, y) {
    return x < y
  };
  var _LT___4638 = function() {
    var G__4640__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4641 = y;
            var G__4642 = cljs.core.first.call(null, more);
            var G__4643 = cljs.core.next.call(null, more);
            x = G__4641;
            y = G__4642;
            more = G__4643;
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
    var G__4640 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4640__delegate.call(this, x, y, more)
    };
    G__4640.cljs$lang$maxFixedArity = 2;
    G__4640.cljs$lang$applyTo = function(arglist__4644) {
      var x = cljs.core.first(arglist__4644);
      var y = cljs.core.first(cljs.core.next(arglist__4644));
      var more = cljs.core.rest(cljs.core.next(arglist__4644));
      return G__4640__delegate.call(this, x, y, more)
    };
    return G__4640
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___4636.call(this, x);
      case 2:
        return _LT___4637.call(this, x, y);
      default:
        return _LT___4638.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___4638.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___4645 = function(x) {
    return true
  };
  var _LT__EQ___4646 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___4647 = function() {
    var G__4649__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_LT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4650 = y;
            var G__4651 = cljs.core.first.call(null, more);
            var G__4652 = cljs.core.next.call(null, more);
            x = G__4650;
            y = G__4651;
            more = G__4652;
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
    var G__4649 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4649__delegate.call(this, x, y, more)
    };
    G__4649.cljs$lang$maxFixedArity = 2;
    G__4649.cljs$lang$applyTo = function(arglist__4653) {
      var x = cljs.core.first(arglist__4653);
      var y = cljs.core.first(cljs.core.next(arglist__4653));
      var more = cljs.core.rest(cljs.core.next(arglist__4653));
      return G__4649__delegate.call(this, x, y, more)
    };
    return G__4649
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___4645.call(this, x);
      case 2:
        return _LT__EQ___4646.call(this, x, y);
      default:
        return _LT__EQ___4647.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___4647.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___4654 = function(x) {
    return true
  };
  var _GT___4655 = function(x, y) {
    return x > y
  };
  var _GT___4656 = function() {
    var G__4658__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4659 = y;
            var G__4660 = cljs.core.first.call(null, more);
            var G__4661 = cljs.core.next.call(null, more);
            x = G__4659;
            y = G__4660;
            more = G__4661;
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
    var G__4658 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4658__delegate.call(this, x, y, more)
    };
    G__4658.cljs$lang$maxFixedArity = 2;
    G__4658.cljs$lang$applyTo = function(arglist__4662) {
      var x = cljs.core.first(arglist__4662);
      var y = cljs.core.first(cljs.core.next(arglist__4662));
      var more = cljs.core.rest(cljs.core.next(arglist__4662));
      return G__4658__delegate.call(this, x, y, more)
    };
    return G__4658
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___4654.call(this, x);
      case 2:
        return _GT___4655.call(this, x, y);
      default:
        return _GT___4656.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___4656.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___4663 = function(x) {
    return true
  };
  var _GT__EQ___4664 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___4665 = function() {
    var G__4667__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_GT__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4668 = y;
            var G__4669 = cljs.core.first.call(null, more);
            var G__4670 = cljs.core.next.call(null, more);
            x = G__4668;
            y = G__4669;
            more = G__4670;
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
    var G__4667 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4667__delegate.call(this, x, y, more)
    };
    G__4667.cljs$lang$maxFixedArity = 2;
    G__4667.cljs$lang$applyTo = function(arglist__4671) {
      var x = cljs.core.first(arglist__4671);
      var y = cljs.core.first(cljs.core.next(arglist__4671));
      var more = cljs.core.rest(cljs.core.next(arglist__4671));
      return G__4667__delegate.call(this, x, y, more)
    };
    return G__4667
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___4663.call(this, x);
      case 2:
        return _GT__EQ___4664.call(this, x, y);
      default:
        return _GT__EQ___4665.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___4665.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__4672 = function(x) {
    return x
  };
  var max__4673 = function(x, y) {
    return x > y ? x : y
  };
  var max__4674 = function() {
    var G__4676__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, max.call(null, x, y), more)
    };
    var G__4676 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4676__delegate.call(this, x, y, more)
    };
    G__4676.cljs$lang$maxFixedArity = 2;
    G__4676.cljs$lang$applyTo = function(arglist__4677) {
      var x = cljs.core.first(arglist__4677);
      var y = cljs.core.first(cljs.core.next(arglist__4677));
      var more = cljs.core.rest(cljs.core.next(arglist__4677));
      return G__4676__delegate.call(this, x, y, more)
    };
    return G__4676
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__4672.call(this, x);
      case 2:
        return max__4673.call(this, x, y);
      default:
        return max__4674.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__4674.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__4678 = function(x) {
    return x
  };
  var min__4679 = function(x, y) {
    return x < y ? x : y
  };
  var min__4680 = function() {
    var G__4682__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, min.call(null, x, y), more)
    };
    var G__4682 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4682__delegate.call(this, x, y, more)
    };
    G__4682.cljs$lang$maxFixedArity = 2;
    G__4682.cljs$lang$applyTo = function(arglist__4683) {
      var x = cljs.core.first(arglist__4683);
      var y = cljs.core.first(cljs.core.next(arglist__4683));
      var more = cljs.core.rest(cljs.core.next(arglist__4683));
      return G__4682__delegate.call(this, x, y, more)
    };
    return G__4682
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__4678.call(this, x);
      case 2:
        return min__4679.call(this, x, y);
      default:
        return min__4680.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__4680.cljs$lang$applyTo;
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
  var rem__4684 = n % d;
  return cljs.core.fix.call(null, (n - rem__4684) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__4685 = cljs.core.quot.call(null, n, d);
  return n - d * q__4685
};
cljs.core.rand = function() {
  var rand = null;
  var rand__4686 = function() {
    return Math.random.call(null)
  };
  var rand__4687 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__4686.call(this);
      case 1:
        return rand__4687.call(this, n)
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
  var _EQ__EQ___4689 = function(x) {
    return true
  };
  var _EQ__EQ___4690 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___4691 = function() {
    var G__4693__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4694 = y;
            var G__4695 = cljs.core.first.call(null, more);
            var G__4696 = cljs.core.next.call(null, more);
            x = G__4694;
            y = G__4695;
            more = G__4696;
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
    var G__4693 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4693__delegate.call(this, x, y, more)
    };
    G__4693.cljs$lang$maxFixedArity = 2;
    G__4693.cljs$lang$applyTo = function(arglist__4697) {
      var x = cljs.core.first(arglist__4697);
      var y = cljs.core.first(cljs.core.next(arglist__4697));
      var more = cljs.core.rest(cljs.core.next(arglist__4697));
      return G__4693__delegate.call(this, x, y, more)
    };
    return G__4693
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___4689.call(this, x);
      case 2:
        return _EQ__EQ___4690.call(this, x, y);
      default:
        return _EQ__EQ___4691.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___4691.cljs$lang$applyTo;
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
  var n__4698 = n;
  var xs__4699 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4700 = xs__4699;
      if(cljs.core.truth_(and__3546__auto____4700)) {
        return n__4698 > 0
      }else {
        return and__3546__auto____4700
      }
    }())) {
      var G__4701 = n__4698 - 1;
      var G__4702 = cljs.core.next.call(null, xs__4699);
      n__4698 = G__4701;
      xs__4699 = G__4702;
      continue
    }else {
      return xs__4699
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__4707 = null;
  var G__4707__4708 = function(coll, n) {
    var temp__3695__auto____4703 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____4703)) {
      var xs__4704 = temp__3695__auto____4703;
      return cljs.core.first.call(null, xs__4704)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__4707__4709 = function(coll, n, not_found) {
    var temp__3695__auto____4705 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____4705)) {
      var xs__4706 = temp__3695__auto____4705;
      return cljs.core.first.call(null, xs__4706)
    }else {
      return not_found
    }
  };
  G__4707 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4707__4708.call(this, coll, n);
      case 3:
        return G__4707__4709.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4707
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___4711 = function() {
    return""
  };
  var str_STAR___4712 = function(x) {
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
  var str_STAR___4713 = function() {
    var G__4715__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__4716 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__4717 = cljs.core.next.call(null, more);
            sb = G__4716;
            more = G__4717;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__4715 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4715__delegate.call(this, x, ys)
    };
    G__4715.cljs$lang$maxFixedArity = 1;
    G__4715.cljs$lang$applyTo = function(arglist__4718) {
      var x = cljs.core.first(arglist__4718);
      var ys = cljs.core.rest(arglist__4718);
      return G__4715__delegate.call(this, x, ys)
    };
    return G__4715
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___4711.call(this);
      case 1:
        return str_STAR___4712.call(this, x);
      default:
        return str_STAR___4713.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___4713.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__4719 = function() {
    return""
  };
  var str__4720 = function(x) {
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
  var str__4721 = function() {
    var G__4723__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__4723 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4723__delegate.call(this, x, ys)
    };
    G__4723.cljs$lang$maxFixedArity = 1;
    G__4723.cljs$lang$applyTo = function(arglist__4724) {
      var x = cljs.core.first(arglist__4724);
      var ys = cljs.core.rest(arglist__4724);
      return G__4723__delegate.call(this, x, ys)
    };
    return G__4723
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__4719.call(this);
      case 1:
        return str__4720.call(this, x);
      default:
        return str__4721.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__4721.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__4725 = function(s, start) {
    return s.substring(start)
  };
  var subs__4726 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__4725.call(this, s, start);
      case 3:
        return subs__4726.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__4728 = function(name) {
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
  var symbol__4729 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__4728.call(this, ns);
      case 2:
        return symbol__4729.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__4731 = function(name) {
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
  var keyword__4732 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__4731.call(this, ns);
      case 2:
        return keyword__4732.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__4734 = cljs.core.seq.call(null, x);
    var ys__4735 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__4734))) {
        return cljs.core.nil_QMARK_.call(null, ys__4735)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__4735))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__4734), cljs.core.first.call(null, ys__4735)))) {
            var G__4736 = cljs.core.next.call(null, xs__4734);
            var G__4737 = cljs.core.next.call(null, ys__4735);
            xs__4734 = G__4736;
            ys__4735 = G__4737;
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
  return cljs.core.reduce.call(null, function(p1__4738_SHARP_, p2__4739_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__4738_SHARP_, cljs.core.hash.call(null, p2__4739_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__4740__4741 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__4740__4741)) {
    var G__4743__4745 = cljs.core.first.call(null, G__4740__4741);
    var vec__4744__4746 = G__4743__4745;
    var key_name__4747 = cljs.core.nth.call(null, vec__4744__4746, 0, null);
    var f__4748 = cljs.core.nth.call(null, vec__4744__4746, 1, null);
    var G__4740__4749 = G__4740__4741;
    var G__4743__4750 = G__4743__4745;
    var G__4740__4751 = G__4740__4749;
    while(true) {
      var vec__4752__4753 = G__4743__4750;
      var key_name__4754 = cljs.core.nth.call(null, vec__4752__4753, 0, null);
      var f__4755 = cljs.core.nth.call(null, vec__4752__4753, 1, null);
      var G__4740__4756 = G__4740__4751;
      var str_name__4757 = cljs.core.name.call(null, key_name__4754);
      obj[str_name__4757] = f__4755;
      var temp__3698__auto____4758 = cljs.core.next.call(null, G__4740__4756);
      if(cljs.core.truth_(temp__3698__auto____4758)) {
        var G__4740__4759 = temp__3698__auto____4758;
        var G__4760 = cljs.core.first.call(null, G__4740__4759);
        var G__4761 = G__4740__4759;
        G__4743__4750 = G__4760;
        G__4740__4751 = G__4761;
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
  var this__4762 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__4763 = this;
  return new cljs.core.List(this__4763.meta, o, coll, this__4763.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__4764 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__4765 = this;
  return this__4765.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__4766 = this;
  return this__4766.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__4767 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__4768 = this;
  return this__4768.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__4769 = this;
  return this__4769.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__4770 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__4771 = this;
  return new cljs.core.List(meta, this__4771.first, this__4771.rest, this__4771.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__4772 = this;
  return this__4772.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__4773 = this;
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__4774 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__4775 = this;
  return new cljs.core.List(this__4775.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__4776 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__4777 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__4778 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__4779 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__4780 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__4781 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__4782 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__4783 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__4784 = this;
  return this__4784.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__4785 = this;
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
  list.cljs$lang$applyTo = function(arglist__4786) {
    var items = cljs.core.seq(arglist__4786);
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
  var this__4787 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__4788 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__4789 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__4790 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__4790.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__4791 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__4792 = this;
  return this__4792.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__4793 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__4793.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__4793.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__4794 = this;
  return this__4794.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__4795 = this;
  return new cljs.core.Cons(meta, this__4795.first, this__4795.rest)
};
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__4796 = null;
  var G__4796__4797 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__4796__4798 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__4796 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4796__4797.call(this, string, f);
      case 3:
        return G__4796__4798.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4796
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__4800 = null;
  var G__4800__4801 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__4800__4802 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__4800 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4800__4801.call(this, string, k);
      case 3:
        return G__4800__4802.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4800
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__4804 = null;
  var G__4804__4805 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__4804__4806 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__4804 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4804__4805.call(this, string, n);
      case 3:
        return G__4804__4806.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4804
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
  var G__4808 = null;
  var G__4808__4809 = function(_, coll) {
    return cljs.core.get.call(null, coll, this.toString())
  };
  var G__4808__4810 = function(_, coll, not_found) {
    return cljs.core.get.call(null, coll, this.toString(), not_found)
  };
  G__4808 = function(_, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4808__4809.call(this, _, coll);
      case 3:
        return G__4808__4810.call(this, _, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4808
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__4812 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__4812
  }else {
    lazy_seq.x = x__4812.call(null);
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
  var this__4813 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__4814 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__4815 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__4816 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__4816.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__4817 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__4818 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__4819 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__4820 = this;
  return this__4820.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__4821 = this;
  return new cljs.core.LazySeq(meta, this__4821.realized, this__4821.x)
};
cljs.core.to_array = function to_array(s) {
  var ary__4822 = cljs.core.array.call(null);
  var s__4823 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__4823))) {
      ary__4822.push(cljs.core.first.call(null, s__4823));
      var G__4824 = cljs.core.next.call(null, s__4823);
      s__4823 = G__4824;
      continue
    }else {
      return ary__4822
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__4825 = s;
  var i__4826 = n;
  var sum__4827 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____4828 = i__4826 > 0;
      if(cljs.core.truth_(and__3546__auto____4828)) {
        return cljs.core.seq.call(null, s__4825)
      }else {
        return and__3546__auto____4828
      }
    }())) {
      var G__4829 = cljs.core.next.call(null, s__4825);
      var G__4830 = i__4826 - 1;
      var G__4831 = sum__4827 + 1;
      s__4825 = G__4829;
      i__4826 = G__4830;
      sum__4827 = G__4831;
      continue
    }else {
      return sum__4827
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
  var concat__4835 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__4836 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__4837 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__4832 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__4832)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__4832), concat.call(null, cljs.core.rest.call(null, s__4832), y))
      }else {
        return y
      }
    })
  };
  var concat__4838 = function() {
    var G__4840__delegate = function(x, y, zs) {
      var cat__4834 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__4833 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__4833)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__4833), cat.call(null, cljs.core.rest.call(null, xys__4833), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__4834.call(null, concat.call(null, x, y), zs)
    };
    var G__4840 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4840__delegate.call(this, x, y, zs)
    };
    G__4840.cljs$lang$maxFixedArity = 2;
    G__4840.cljs$lang$applyTo = function(arglist__4841) {
      var x = cljs.core.first(arglist__4841);
      var y = cljs.core.first(cljs.core.next(arglist__4841));
      var zs = cljs.core.rest(cljs.core.next(arglist__4841));
      return G__4840__delegate.call(this, x, y, zs)
    };
    return G__4840
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__4835.call(this);
      case 1:
        return concat__4836.call(this, x);
      case 2:
        return concat__4837.call(this, x, y);
      default:
        return concat__4838.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__4838.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___4842 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___4843 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___4844 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___4845 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___4846 = function() {
    var G__4848__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__4848 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__4848__delegate.call(this, a, b, c, d, more)
    };
    G__4848.cljs$lang$maxFixedArity = 4;
    G__4848.cljs$lang$applyTo = function(arglist__4849) {
      var a = cljs.core.first(arglist__4849);
      var b = cljs.core.first(cljs.core.next(arglist__4849));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4849)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4849))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4849))));
      return G__4848__delegate.call(this, a, b, c, d, more)
    };
    return G__4848
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___4842.call(this, a);
      case 2:
        return list_STAR___4843.call(this, a, b);
      case 3:
        return list_STAR___4844.call(this, a, b, c);
      case 4:
        return list_STAR___4845.call(this, a, b, c, d);
      default:
        return list_STAR___4846.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___4846.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__4859 = function(f, args) {
    var fixed_arity__4850 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__4850 + 1) <= fixed_arity__4850)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__4860 = function(f, x, args) {
    var arglist__4851 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__4852 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__4851, fixed_arity__4852) <= fixed_arity__4852)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__4851))
      }else {
        return f.cljs$lang$applyTo(arglist__4851)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__4851))
    }
  };
  var apply__4861 = function(f, x, y, args) {
    var arglist__4853 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__4854 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__4853, fixed_arity__4854) <= fixed_arity__4854)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__4853))
      }else {
        return f.cljs$lang$applyTo(arglist__4853)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__4853))
    }
  };
  var apply__4862 = function(f, x, y, z, args) {
    var arglist__4855 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__4856 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__4855, fixed_arity__4856) <= fixed_arity__4856)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__4855))
      }else {
        return f.cljs$lang$applyTo(arglist__4855)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__4855))
    }
  };
  var apply__4863 = function() {
    var G__4865__delegate = function(f, a, b, c, d, args) {
      var arglist__4857 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__4858 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__4857, fixed_arity__4858) <= fixed_arity__4858)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__4857))
        }else {
          return f.cljs$lang$applyTo(arglist__4857)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__4857))
      }
    };
    var G__4865 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__4865__delegate.call(this, f, a, b, c, d, args)
    };
    G__4865.cljs$lang$maxFixedArity = 5;
    G__4865.cljs$lang$applyTo = function(arglist__4866) {
      var f = cljs.core.first(arglist__4866);
      var a = cljs.core.first(cljs.core.next(arglist__4866));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4866)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4866))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4866)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4866)))));
      return G__4865__delegate.call(this, f, a, b, c, d, args)
    };
    return G__4865
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__4859.call(this, f, a);
      case 3:
        return apply__4860.call(this, f, a, b);
      case 4:
        return apply__4861.call(this, f, a, b, c);
      case 5:
        return apply__4862.call(this, f, a, b, c, d);
      default:
        return apply__4863.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__4863.cljs$lang$applyTo;
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
  vary_meta.cljs$lang$applyTo = function(arglist__4867) {
    var obj = cljs.core.first(arglist__4867);
    var f = cljs.core.first(cljs.core.next(arglist__4867));
    var args = cljs.core.rest(cljs.core.next(arglist__4867));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___4868 = function(x) {
    return false
  };
  var not_EQ___4869 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___4870 = function() {
    var G__4872__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__4872 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4872__delegate.call(this, x, y, more)
    };
    G__4872.cljs$lang$maxFixedArity = 2;
    G__4872.cljs$lang$applyTo = function(arglist__4873) {
      var x = cljs.core.first(arglist__4873);
      var y = cljs.core.first(cljs.core.next(arglist__4873));
      var more = cljs.core.rest(cljs.core.next(arglist__4873));
      return G__4872__delegate.call(this, x, y, more)
    };
    return G__4872
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___4868.call(this, x);
      case 2:
        return not_EQ___4869.call(this, x, y);
      default:
        return not_EQ___4870.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___4870.cljs$lang$applyTo;
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
        var G__4874 = pred;
        var G__4875 = cljs.core.next.call(null, coll);
        pred = G__4874;
        coll = G__4875;
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
      var or__3548__auto____4876 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____4876)) {
        return or__3548__auto____4876
      }else {
        var G__4877 = pred;
        var G__4878 = cljs.core.next.call(null, coll);
        pred = G__4877;
        coll = G__4878;
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
    var G__4879 = null;
    var G__4879__4880 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__4879__4881 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__4879__4882 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__4879__4883 = function() {
      var G__4885__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__4885 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__4885__delegate.call(this, x, y, zs)
      };
      G__4885.cljs$lang$maxFixedArity = 2;
      G__4885.cljs$lang$applyTo = function(arglist__4886) {
        var x = cljs.core.first(arglist__4886);
        var y = cljs.core.first(cljs.core.next(arglist__4886));
        var zs = cljs.core.rest(cljs.core.next(arglist__4886));
        return G__4885__delegate.call(this, x, y, zs)
      };
      return G__4885
    }();
    G__4879 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__4879__4880.call(this);
        case 1:
          return G__4879__4881.call(this, x);
        case 2:
          return G__4879__4882.call(this, x, y);
        default:
          return G__4879__4883.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__4879.cljs$lang$maxFixedArity = 2;
    G__4879.cljs$lang$applyTo = G__4879__4883.cljs$lang$applyTo;
    return G__4879
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__4887__delegate = function(args) {
      return x
    };
    var G__4887 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__4887__delegate.call(this, args)
    };
    G__4887.cljs$lang$maxFixedArity = 0;
    G__4887.cljs$lang$applyTo = function(arglist__4888) {
      var args = cljs.core.seq(arglist__4888);
      return G__4887__delegate.call(this, args)
    };
    return G__4887
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__4892 = function() {
    return cljs.core.identity
  };
  var comp__4893 = function(f) {
    return f
  };
  var comp__4894 = function(f, g) {
    return function() {
      var G__4898 = null;
      var G__4898__4899 = function() {
        return f.call(null, g.call(null))
      };
      var G__4898__4900 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__4898__4901 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__4898__4902 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__4898__4903 = function() {
        var G__4905__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__4905 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__4905__delegate.call(this, x, y, z, args)
        };
        G__4905.cljs$lang$maxFixedArity = 3;
        G__4905.cljs$lang$applyTo = function(arglist__4906) {
          var x = cljs.core.first(arglist__4906);
          var y = cljs.core.first(cljs.core.next(arglist__4906));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4906)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4906)));
          return G__4905__delegate.call(this, x, y, z, args)
        };
        return G__4905
      }();
      G__4898 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__4898__4899.call(this);
          case 1:
            return G__4898__4900.call(this, x);
          case 2:
            return G__4898__4901.call(this, x, y);
          case 3:
            return G__4898__4902.call(this, x, y, z);
          default:
            return G__4898__4903.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__4898.cljs$lang$maxFixedArity = 3;
      G__4898.cljs$lang$applyTo = G__4898__4903.cljs$lang$applyTo;
      return G__4898
    }()
  };
  var comp__4895 = function(f, g, h) {
    return function() {
      var G__4907 = null;
      var G__4907__4908 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__4907__4909 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__4907__4910 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__4907__4911 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__4907__4912 = function() {
        var G__4914__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__4914 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__4914__delegate.call(this, x, y, z, args)
        };
        G__4914.cljs$lang$maxFixedArity = 3;
        G__4914.cljs$lang$applyTo = function(arglist__4915) {
          var x = cljs.core.first(arglist__4915);
          var y = cljs.core.first(cljs.core.next(arglist__4915));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4915)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4915)));
          return G__4914__delegate.call(this, x, y, z, args)
        };
        return G__4914
      }();
      G__4907 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__4907__4908.call(this);
          case 1:
            return G__4907__4909.call(this, x);
          case 2:
            return G__4907__4910.call(this, x, y);
          case 3:
            return G__4907__4911.call(this, x, y, z);
          default:
            return G__4907__4912.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__4907.cljs$lang$maxFixedArity = 3;
      G__4907.cljs$lang$applyTo = G__4907__4912.cljs$lang$applyTo;
      return G__4907
    }()
  };
  var comp__4896 = function() {
    var G__4916__delegate = function(f1, f2, f3, fs) {
      var fs__4889 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__4917__delegate = function(args) {
          var ret__4890 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__4889), args);
          var fs__4891 = cljs.core.next.call(null, fs__4889);
          while(true) {
            if(cljs.core.truth_(fs__4891)) {
              var G__4918 = cljs.core.first.call(null, fs__4891).call(null, ret__4890);
              var G__4919 = cljs.core.next.call(null, fs__4891);
              ret__4890 = G__4918;
              fs__4891 = G__4919;
              continue
            }else {
              return ret__4890
            }
            break
          }
        };
        var G__4917 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__4917__delegate.call(this, args)
        };
        G__4917.cljs$lang$maxFixedArity = 0;
        G__4917.cljs$lang$applyTo = function(arglist__4920) {
          var args = cljs.core.seq(arglist__4920);
          return G__4917__delegate.call(this, args)
        };
        return G__4917
      }()
    };
    var G__4916 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__4916__delegate.call(this, f1, f2, f3, fs)
    };
    G__4916.cljs$lang$maxFixedArity = 3;
    G__4916.cljs$lang$applyTo = function(arglist__4921) {
      var f1 = cljs.core.first(arglist__4921);
      var f2 = cljs.core.first(cljs.core.next(arglist__4921));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4921)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4921)));
      return G__4916__delegate.call(this, f1, f2, f3, fs)
    };
    return G__4916
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__4892.call(this);
      case 1:
        return comp__4893.call(this, f1);
      case 2:
        return comp__4894.call(this, f1, f2);
      case 3:
        return comp__4895.call(this, f1, f2, f3);
      default:
        return comp__4896.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__4896.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__4922 = function(f, arg1) {
    return function() {
      var G__4927__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__4927 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__4927__delegate.call(this, args)
      };
      G__4927.cljs$lang$maxFixedArity = 0;
      G__4927.cljs$lang$applyTo = function(arglist__4928) {
        var args = cljs.core.seq(arglist__4928);
        return G__4927__delegate.call(this, args)
      };
      return G__4927
    }()
  };
  var partial__4923 = function(f, arg1, arg2) {
    return function() {
      var G__4929__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__4929 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__4929__delegate.call(this, args)
      };
      G__4929.cljs$lang$maxFixedArity = 0;
      G__4929.cljs$lang$applyTo = function(arglist__4930) {
        var args = cljs.core.seq(arglist__4930);
        return G__4929__delegate.call(this, args)
      };
      return G__4929
    }()
  };
  var partial__4924 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__4931__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__4931 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__4931__delegate.call(this, args)
      };
      G__4931.cljs$lang$maxFixedArity = 0;
      G__4931.cljs$lang$applyTo = function(arglist__4932) {
        var args = cljs.core.seq(arglist__4932);
        return G__4931__delegate.call(this, args)
      };
      return G__4931
    }()
  };
  var partial__4925 = function() {
    var G__4933__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__4934__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__4934 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__4934__delegate.call(this, args)
        };
        G__4934.cljs$lang$maxFixedArity = 0;
        G__4934.cljs$lang$applyTo = function(arglist__4935) {
          var args = cljs.core.seq(arglist__4935);
          return G__4934__delegate.call(this, args)
        };
        return G__4934
      }()
    };
    var G__4933 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__4933__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__4933.cljs$lang$maxFixedArity = 4;
    G__4933.cljs$lang$applyTo = function(arglist__4936) {
      var f = cljs.core.first(arglist__4936);
      var arg1 = cljs.core.first(cljs.core.next(arglist__4936));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4936)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4936))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4936))));
      return G__4933__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__4933
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__4922.call(this, f, arg1);
      case 3:
        return partial__4923.call(this, f, arg1, arg2);
      case 4:
        return partial__4924.call(this, f, arg1, arg2, arg3);
      default:
        return partial__4925.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__4925.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__4937 = function(f, x) {
    return function() {
      var G__4941 = null;
      var G__4941__4942 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__4941__4943 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__4941__4944 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__4941__4945 = function() {
        var G__4947__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__4947 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__4947__delegate.call(this, a, b, c, ds)
        };
        G__4947.cljs$lang$maxFixedArity = 3;
        G__4947.cljs$lang$applyTo = function(arglist__4948) {
          var a = cljs.core.first(arglist__4948);
          var b = cljs.core.first(cljs.core.next(arglist__4948));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4948)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4948)));
          return G__4947__delegate.call(this, a, b, c, ds)
        };
        return G__4947
      }();
      G__4941 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__4941__4942.call(this, a);
          case 2:
            return G__4941__4943.call(this, a, b);
          case 3:
            return G__4941__4944.call(this, a, b, c);
          default:
            return G__4941__4945.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__4941.cljs$lang$maxFixedArity = 3;
      G__4941.cljs$lang$applyTo = G__4941__4945.cljs$lang$applyTo;
      return G__4941
    }()
  };
  var fnil__4938 = function(f, x, y) {
    return function() {
      var G__4949 = null;
      var G__4949__4950 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__4949__4951 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__4949__4952 = function() {
        var G__4954__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__4954 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__4954__delegate.call(this, a, b, c, ds)
        };
        G__4954.cljs$lang$maxFixedArity = 3;
        G__4954.cljs$lang$applyTo = function(arglist__4955) {
          var a = cljs.core.first(arglist__4955);
          var b = cljs.core.first(cljs.core.next(arglist__4955));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4955)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4955)));
          return G__4954__delegate.call(this, a, b, c, ds)
        };
        return G__4954
      }();
      G__4949 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__4949__4950.call(this, a, b);
          case 3:
            return G__4949__4951.call(this, a, b, c);
          default:
            return G__4949__4952.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__4949.cljs$lang$maxFixedArity = 3;
      G__4949.cljs$lang$applyTo = G__4949__4952.cljs$lang$applyTo;
      return G__4949
    }()
  };
  var fnil__4939 = function(f, x, y, z) {
    return function() {
      var G__4956 = null;
      var G__4956__4957 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__4956__4958 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__4956__4959 = function() {
        var G__4961__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__4961 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__4961__delegate.call(this, a, b, c, ds)
        };
        G__4961.cljs$lang$maxFixedArity = 3;
        G__4961.cljs$lang$applyTo = function(arglist__4962) {
          var a = cljs.core.first(arglist__4962);
          var b = cljs.core.first(cljs.core.next(arglist__4962));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4962)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4962)));
          return G__4961__delegate.call(this, a, b, c, ds)
        };
        return G__4961
      }();
      G__4956 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__4956__4957.call(this, a, b);
          case 3:
            return G__4956__4958.call(this, a, b, c);
          default:
            return G__4956__4959.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__4956.cljs$lang$maxFixedArity = 3;
      G__4956.cljs$lang$applyTo = G__4956__4959.cljs$lang$applyTo;
      return G__4956
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__4937.call(this, f, x);
      case 3:
        return fnil__4938.call(this, f, x, y);
      case 4:
        return fnil__4939.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__4965 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____4963 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____4963)) {
        var s__4964 = temp__3698__auto____4963;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__4964)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__4964)))
      }else {
        return null
      }
    })
  };
  return mapi__4965.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____4966 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____4966)) {
      var s__4967 = temp__3698__auto____4966;
      var x__4968 = f.call(null, cljs.core.first.call(null, s__4967));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__4968))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__4967))
      }else {
        return cljs.core.cons.call(null, x__4968, keep.call(null, f, cljs.core.rest.call(null, s__4967)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__4978 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____4975 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____4975)) {
        var s__4976 = temp__3698__auto____4975;
        var x__4977 = f.call(null, idx, cljs.core.first.call(null, s__4976));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__4977))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__4976))
        }else {
          return cljs.core.cons.call(null, x__4977, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__4976)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__4978.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__5023 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__5028 = function() {
        return true
      };
      var ep1__5029 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__5030 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____4985 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____4985)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____4985
          }
        }())
      };
      var ep1__5031 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____4986 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____4986)) {
            var and__3546__auto____4987 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____4987)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____4987
            }
          }else {
            return and__3546__auto____4986
          }
        }())
      };
      var ep1__5032 = function() {
        var G__5034__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____4988 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____4988)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____4988
            }
          }())
        };
        var G__5034 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5034__delegate.call(this, x, y, z, args)
        };
        G__5034.cljs$lang$maxFixedArity = 3;
        G__5034.cljs$lang$applyTo = function(arglist__5035) {
          var x = cljs.core.first(arglist__5035);
          var y = cljs.core.first(cljs.core.next(arglist__5035));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5035)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5035)));
          return G__5034__delegate.call(this, x, y, z, args)
        };
        return G__5034
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__5028.call(this);
          case 1:
            return ep1__5029.call(this, x);
          case 2:
            return ep1__5030.call(this, x, y);
          case 3:
            return ep1__5031.call(this, x, y, z);
          default:
            return ep1__5032.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__5032.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__5024 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__5036 = function() {
        return true
      };
      var ep2__5037 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____4989 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____4989)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____4989
          }
        }())
      };
      var ep2__5038 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____4990 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____4990)) {
            var and__3546__auto____4991 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____4991)) {
              var and__3546__auto____4992 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____4992)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____4992
              }
            }else {
              return and__3546__auto____4991
            }
          }else {
            return and__3546__auto____4990
          }
        }())
      };
      var ep2__5039 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____4993 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____4993)) {
            var and__3546__auto____4994 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____4994)) {
              var and__3546__auto____4995 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____4995)) {
                var and__3546__auto____4996 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____4996)) {
                  var and__3546__auto____4997 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____4997)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____4997
                  }
                }else {
                  return and__3546__auto____4996
                }
              }else {
                return and__3546__auto____4995
              }
            }else {
              return and__3546__auto____4994
            }
          }else {
            return and__3546__auto____4993
          }
        }())
      };
      var ep2__5040 = function() {
        var G__5042__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____4998 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____4998)) {
              return cljs.core.every_QMARK_.call(null, function(p1__4969_SHARP_) {
                var and__3546__auto____4999 = p1.call(null, p1__4969_SHARP_);
                if(cljs.core.truth_(and__3546__auto____4999)) {
                  return p2.call(null, p1__4969_SHARP_)
                }else {
                  return and__3546__auto____4999
                }
              }, args)
            }else {
              return and__3546__auto____4998
            }
          }())
        };
        var G__5042 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5042__delegate.call(this, x, y, z, args)
        };
        G__5042.cljs$lang$maxFixedArity = 3;
        G__5042.cljs$lang$applyTo = function(arglist__5043) {
          var x = cljs.core.first(arglist__5043);
          var y = cljs.core.first(cljs.core.next(arglist__5043));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5043)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5043)));
          return G__5042__delegate.call(this, x, y, z, args)
        };
        return G__5042
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__5036.call(this);
          case 1:
            return ep2__5037.call(this, x);
          case 2:
            return ep2__5038.call(this, x, y);
          case 3:
            return ep2__5039.call(this, x, y, z);
          default:
            return ep2__5040.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__5040.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__5025 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__5044 = function() {
        return true
      };
      var ep3__5045 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____5000 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____5000)) {
            var and__3546__auto____5001 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____5001)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____5001
            }
          }else {
            return and__3546__auto____5000
          }
        }())
      };
      var ep3__5046 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____5002 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____5002)) {
            var and__3546__auto____5003 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____5003)) {
              var and__3546__auto____5004 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____5004)) {
                var and__3546__auto____5005 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____5005)) {
                  var and__3546__auto____5006 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____5006)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____5006
                  }
                }else {
                  return and__3546__auto____5005
                }
              }else {
                return and__3546__auto____5004
              }
            }else {
              return and__3546__auto____5003
            }
          }else {
            return and__3546__auto____5002
          }
        }())
      };
      var ep3__5047 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____5007 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____5007)) {
            var and__3546__auto____5008 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____5008)) {
              var and__3546__auto____5009 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____5009)) {
                var and__3546__auto____5010 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____5010)) {
                  var and__3546__auto____5011 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____5011)) {
                    var and__3546__auto____5012 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____5012)) {
                      var and__3546__auto____5013 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____5013)) {
                        var and__3546__auto____5014 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____5014)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____5014
                        }
                      }else {
                        return and__3546__auto____5013
                      }
                    }else {
                      return and__3546__auto____5012
                    }
                  }else {
                    return and__3546__auto____5011
                  }
                }else {
                  return and__3546__auto____5010
                }
              }else {
                return and__3546__auto____5009
              }
            }else {
              return and__3546__auto____5008
            }
          }else {
            return and__3546__auto____5007
          }
        }())
      };
      var ep3__5048 = function() {
        var G__5050__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____5015 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____5015)) {
              return cljs.core.every_QMARK_.call(null, function(p1__4970_SHARP_) {
                var and__3546__auto____5016 = p1.call(null, p1__4970_SHARP_);
                if(cljs.core.truth_(and__3546__auto____5016)) {
                  var and__3546__auto____5017 = p2.call(null, p1__4970_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____5017)) {
                    return p3.call(null, p1__4970_SHARP_)
                  }else {
                    return and__3546__auto____5017
                  }
                }else {
                  return and__3546__auto____5016
                }
              }, args)
            }else {
              return and__3546__auto____5015
            }
          }())
        };
        var G__5050 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5050__delegate.call(this, x, y, z, args)
        };
        G__5050.cljs$lang$maxFixedArity = 3;
        G__5050.cljs$lang$applyTo = function(arglist__5051) {
          var x = cljs.core.first(arglist__5051);
          var y = cljs.core.first(cljs.core.next(arglist__5051));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5051)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5051)));
          return G__5050__delegate.call(this, x, y, z, args)
        };
        return G__5050
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__5044.call(this);
          case 1:
            return ep3__5045.call(this, x);
          case 2:
            return ep3__5046.call(this, x, y);
          case 3:
            return ep3__5047.call(this, x, y, z);
          default:
            return ep3__5048.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__5048.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__5026 = function() {
    var G__5052__delegate = function(p1, p2, p3, ps) {
      var ps__5018 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__5053 = function() {
          return true
        };
        var epn__5054 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__4971_SHARP_) {
            return p1__4971_SHARP_.call(null, x)
          }, ps__5018)
        };
        var epn__5055 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__4972_SHARP_) {
            var and__3546__auto____5019 = p1__4972_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____5019)) {
              return p1__4972_SHARP_.call(null, y)
            }else {
              return and__3546__auto____5019
            }
          }, ps__5018)
        };
        var epn__5056 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__4973_SHARP_) {
            var and__3546__auto____5020 = p1__4973_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____5020)) {
              var and__3546__auto____5021 = p1__4973_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____5021)) {
                return p1__4973_SHARP_.call(null, z)
              }else {
                return and__3546__auto____5021
              }
            }else {
              return and__3546__auto____5020
            }
          }, ps__5018)
        };
        var epn__5057 = function() {
          var G__5059__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____5022 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____5022)) {
                return cljs.core.every_QMARK_.call(null, function(p1__4974_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__4974_SHARP_, args)
                }, ps__5018)
              }else {
                return and__3546__auto____5022
              }
            }())
          };
          var G__5059 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__5059__delegate.call(this, x, y, z, args)
          };
          G__5059.cljs$lang$maxFixedArity = 3;
          G__5059.cljs$lang$applyTo = function(arglist__5060) {
            var x = cljs.core.first(arglist__5060);
            var y = cljs.core.first(cljs.core.next(arglist__5060));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5060)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5060)));
            return G__5059__delegate.call(this, x, y, z, args)
          };
          return G__5059
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__5053.call(this);
            case 1:
              return epn__5054.call(this, x);
            case 2:
              return epn__5055.call(this, x, y);
            case 3:
              return epn__5056.call(this, x, y, z);
            default:
              return epn__5057.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__5057.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__5052 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5052__delegate.call(this, p1, p2, p3, ps)
    };
    G__5052.cljs$lang$maxFixedArity = 3;
    G__5052.cljs$lang$applyTo = function(arglist__5061) {
      var p1 = cljs.core.first(arglist__5061);
      var p2 = cljs.core.first(cljs.core.next(arglist__5061));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5061)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5061)));
      return G__5052__delegate.call(this, p1, p2, p3, ps)
    };
    return G__5052
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__5023.call(this, p1);
      case 2:
        return every_pred__5024.call(this, p1, p2);
      case 3:
        return every_pred__5025.call(this, p1, p2, p3);
      default:
        return every_pred__5026.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__5026.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__5101 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__5106 = function() {
        return null
      };
      var sp1__5107 = function(x) {
        return p.call(null, x)
      };
      var sp1__5108 = function(x, y) {
        var or__3548__auto____5063 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5063)) {
          return or__3548__auto____5063
        }else {
          return p.call(null, y)
        }
      };
      var sp1__5109 = function(x, y, z) {
        var or__3548__auto____5064 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5064)) {
          return or__3548__auto____5064
        }else {
          var or__3548__auto____5065 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____5065)) {
            return or__3548__auto____5065
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__5110 = function() {
        var G__5112__delegate = function(x, y, z, args) {
          var or__3548__auto____5066 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____5066)) {
            return or__3548__auto____5066
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__5112 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5112__delegate.call(this, x, y, z, args)
        };
        G__5112.cljs$lang$maxFixedArity = 3;
        G__5112.cljs$lang$applyTo = function(arglist__5113) {
          var x = cljs.core.first(arglist__5113);
          var y = cljs.core.first(cljs.core.next(arglist__5113));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5113)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5113)));
          return G__5112__delegate.call(this, x, y, z, args)
        };
        return G__5112
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__5106.call(this);
          case 1:
            return sp1__5107.call(this, x);
          case 2:
            return sp1__5108.call(this, x, y);
          case 3:
            return sp1__5109.call(this, x, y, z);
          default:
            return sp1__5110.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__5110.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__5102 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__5114 = function() {
        return null
      };
      var sp2__5115 = function(x) {
        var or__3548__auto____5067 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5067)) {
          return or__3548__auto____5067
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__5116 = function(x, y) {
        var or__3548__auto____5068 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5068)) {
          return or__3548__auto____5068
        }else {
          var or__3548__auto____5069 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____5069)) {
            return or__3548__auto____5069
          }else {
            var or__3548__auto____5070 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____5070)) {
              return or__3548__auto____5070
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__5117 = function(x, y, z) {
        var or__3548__auto____5071 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5071)) {
          return or__3548__auto____5071
        }else {
          var or__3548__auto____5072 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____5072)) {
            return or__3548__auto____5072
          }else {
            var or__3548__auto____5073 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____5073)) {
              return or__3548__auto____5073
            }else {
              var or__3548__auto____5074 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____5074)) {
                return or__3548__auto____5074
              }else {
                var or__3548__auto____5075 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____5075)) {
                  return or__3548__auto____5075
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__5118 = function() {
        var G__5120__delegate = function(x, y, z, args) {
          var or__3548__auto____5076 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____5076)) {
            return or__3548__auto____5076
          }else {
            return cljs.core.some.call(null, function(p1__4979_SHARP_) {
              var or__3548__auto____5077 = p1.call(null, p1__4979_SHARP_);
              if(cljs.core.truth_(or__3548__auto____5077)) {
                return or__3548__auto____5077
              }else {
                return p2.call(null, p1__4979_SHARP_)
              }
            }, args)
          }
        };
        var G__5120 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5120__delegate.call(this, x, y, z, args)
        };
        G__5120.cljs$lang$maxFixedArity = 3;
        G__5120.cljs$lang$applyTo = function(arglist__5121) {
          var x = cljs.core.first(arglist__5121);
          var y = cljs.core.first(cljs.core.next(arglist__5121));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5121)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5121)));
          return G__5120__delegate.call(this, x, y, z, args)
        };
        return G__5120
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__5114.call(this);
          case 1:
            return sp2__5115.call(this, x);
          case 2:
            return sp2__5116.call(this, x, y);
          case 3:
            return sp2__5117.call(this, x, y, z);
          default:
            return sp2__5118.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__5118.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__5103 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__5122 = function() {
        return null
      };
      var sp3__5123 = function(x) {
        var or__3548__auto____5078 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5078)) {
          return or__3548__auto____5078
        }else {
          var or__3548__auto____5079 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____5079)) {
            return or__3548__auto____5079
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__5124 = function(x, y) {
        var or__3548__auto____5080 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5080)) {
          return or__3548__auto____5080
        }else {
          var or__3548__auto____5081 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____5081)) {
            return or__3548__auto____5081
          }else {
            var or__3548__auto____5082 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____5082)) {
              return or__3548__auto____5082
            }else {
              var or__3548__auto____5083 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____5083)) {
                return or__3548__auto____5083
              }else {
                var or__3548__auto____5084 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____5084)) {
                  return or__3548__auto____5084
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__5125 = function(x, y, z) {
        var or__3548__auto____5085 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____5085)) {
          return or__3548__auto____5085
        }else {
          var or__3548__auto____5086 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____5086)) {
            return or__3548__auto____5086
          }else {
            var or__3548__auto____5087 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____5087)) {
              return or__3548__auto____5087
            }else {
              var or__3548__auto____5088 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____5088)) {
                return or__3548__auto____5088
              }else {
                var or__3548__auto____5089 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____5089)) {
                  return or__3548__auto____5089
                }else {
                  var or__3548__auto____5090 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____5090)) {
                    return or__3548__auto____5090
                  }else {
                    var or__3548__auto____5091 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____5091)) {
                      return or__3548__auto____5091
                    }else {
                      var or__3548__auto____5092 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____5092)) {
                        return or__3548__auto____5092
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
      var sp3__5126 = function() {
        var G__5128__delegate = function(x, y, z, args) {
          var or__3548__auto____5093 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____5093)) {
            return or__3548__auto____5093
          }else {
            return cljs.core.some.call(null, function(p1__4980_SHARP_) {
              var or__3548__auto____5094 = p1.call(null, p1__4980_SHARP_);
              if(cljs.core.truth_(or__3548__auto____5094)) {
                return or__3548__auto____5094
              }else {
                var or__3548__auto____5095 = p2.call(null, p1__4980_SHARP_);
                if(cljs.core.truth_(or__3548__auto____5095)) {
                  return or__3548__auto____5095
                }else {
                  return p3.call(null, p1__4980_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__5128 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5128__delegate.call(this, x, y, z, args)
        };
        G__5128.cljs$lang$maxFixedArity = 3;
        G__5128.cljs$lang$applyTo = function(arglist__5129) {
          var x = cljs.core.first(arglist__5129);
          var y = cljs.core.first(cljs.core.next(arglist__5129));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5129)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5129)));
          return G__5128__delegate.call(this, x, y, z, args)
        };
        return G__5128
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__5122.call(this);
          case 1:
            return sp3__5123.call(this, x);
          case 2:
            return sp3__5124.call(this, x, y);
          case 3:
            return sp3__5125.call(this, x, y, z);
          default:
            return sp3__5126.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__5126.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__5104 = function() {
    var G__5130__delegate = function(p1, p2, p3, ps) {
      var ps__5096 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__5131 = function() {
          return null
        };
        var spn__5132 = function(x) {
          return cljs.core.some.call(null, function(p1__4981_SHARP_) {
            return p1__4981_SHARP_.call(null, x)
          }, ps__5096)
        };
        var spn__5133 = function(x, y) {
          return cljs.core.some.call(null, function(p1__4982_SHARP_) {
            var or__3548__auto____5097 = p1__4982_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____5097)) {
              return or__3548__auto____5097
            }else {
              return p1__4982_SHARP_.call(null, y)
            }
          }, ps__5096)
        };
        var spn__5134 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__4983_SHARP_) {
            var or__3548__auto____5098 = p1__4983_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____5098)) {
              return or__3548__auto____5098
            }else {
              var or__3548__auto____5099 = p1__4983_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____5099)) {
                return or__3548__auto____5099
              }else {
                return p1__4983_SHARP_.call(null, z)
              }
            }
          }, ps__5096)
        };
        var spn__5135 = function() {
          var G__5137__delegate = function(x, y, z, args) {
            var or__3548__auto____5100 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____5100)) {
              return or__3548__auto____5100
            }else {
              return cljs.core.some.call(null, function(p1__4984_SHARP_) {
                return cljs.core.some.call(null, p1__4984_SHARP_, args)
              }, ps__5096)
            }
          };
          var G__5137 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__5137__delegate.call(this, x, y, z, args)
          };
          G__5137.cljs$lang$maxFixedArity = 3;
          G__5137.cljs$lang$applyTo = function(arglist__5138) {
            var x = cljs.core.first(arglist__5138);
            var y = cljs.core.first(cljs.core.next(arglist__5138));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5138)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5138)));
            return G__5137__delegate.call(this, x, y, z, args)
          };
          return G__5137
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__5131.call(this);
            case 1:
              return spn__5132.call(this, x);
            case 2:
              return spn__5133.call(this, x, y);
            case 3:
              return spn__5134.call(this, x, y, z);
            default:
              return spn__5135.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__5135.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__5130 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5130__delegate.call(this, p1, p2, p3, ps)
    };
    G__5130.cljs$lang$maxFixedArity = 3;
    G__5130.cljs$lang$applyTo = function(arglist__5139) {
      var p1 = cljs.core.first(arglist__5139);
      var p2 = cljs.core.first(cljs.core.next(arglist__5139));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5139)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5139)));
      return G__5130__delegate.call(this, p1, p2, p3, ps)
    };
    return G__5130
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__5101.call(this, p1);
      case 2:
        return some_fn__5102.call(this, p1, p2);
      case 3:
        return some_fn__5103.call(this, p1, p2, p3);
      default:
        return some_fn__5104.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__5104.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__5152 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____5140 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5140)) {
        var s__5141 = temp__3698__auto____5140;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__5141)), map.call(null, f, cljs.core.rest.call(null, s__5141)))
      }else {
        return null
      }
    })
  };
  var map__5153 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5142 = cljs.core.seq.call(null, c1);
      var s2__5143 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____5144 = s1__5142;
        if(cljs.core.truth_(and__3546__auto____5144)) {
          return s2__5143
        }else {
          return and__3546__auto____5144
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__5142), cljs.core.first.call(null, s2__5143)), map.call(null, f, cljs.core.rest.call(null, s1__5142), cljs.core.rest.call(null, s2__5143)))
      }else {
        return null
      }
    })
  };
  var map__5154 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5145 = cljs.core.seq.call(null, c1);
      var s2__5146 = cljs.core.seq.call(null, c2);
      var s3__5147 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____5148 = s1__5145;
        if(cljs.core.truth_(and__3546__auto____5148)) {
          var and__3546__auto____5149 = s2__5146;
          if(cljs.core.truth_(and__3546__auto____5149)) {
            return s3__5147
          }else {
            return and__3546__auto____5149
          }
        }else {
          return and__3546__auto____5148
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__5145), cljs.core.first.call(null, s2__5146), cljs.core.first.call(null, s3__5147)), map.call(null, f, cljs.core.rest.call(null, s1__5145), cljs.core.rest.call(null, s2__5146), cljs.core.rest.call(null, s3__5147)))
      }else {
        return null
      }
    })
  };
  var map__5155 = function() {
    var G__5157__delegate = function(f, c1, c2, c3, colls) {
      var step__5151 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__5150 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__5150))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__5150), step.call(null, map.call(null, cljs.core.rest, ss__5150)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__5062_SHARP_) {
        return cljs.core.apply.call(null, f, p1__5062_SHARP_)
      }, step__5151.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__5157 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__5157__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__5157.cljs$lang$maxFixedArity = 4;
    G__5157.cljs$lang$applyTo = function(arglist__5158) {
      var f = cljs.core.first(arglist__5158);
      var c1 = cljs.core.first(cljs.core.next(arglist__5158));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5158)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5158))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5158))));
      return G__5157__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__5157
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__5152.call(this, f, c1);
      case 3:
        return map__5153.call(this, f, c1, c2);
      case 4:
        return map__5154.call(this, f, c1, c2, c3);
      default:
        return map__5155.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__5155.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____5159 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5159)) {
        var s__5160 = temp__3698__auto____5159;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__5160), take.call(null, n - 1, cljs.core.rest.call(null, s__5160)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__5163 = function(n, coll) {
    while(true) {
      var s__5161 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____5162 = n > 0;
        if(cljs.core.truth_(and__3546__auto____5162)) {
          return s__5161
        }else {
          return and__3546__auto____5162
        }
      }())) {
        var G__5164 = n - 1;
        var G__5165 = cljs.core.rest.call(null, s__5161);
        n = G__5164;
        coll = G__5165;
        continue
      }else {
        return s__5161
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__5163.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__5166 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__5167 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__5166.call(this, n);
      case 2:
        return drop_last__5167.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__5169 = cljs.core.seq.call(null, coll);
  var lead__5170 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__5170)) {
      var G__5171 = cljs.core.next.call(null, s__5169);
      var G__5172 = cljs.core.next.call(null, lead__5170);
      s__5169 = G__5171;
      lead__5170 = G__5172;
      continue
    }else {
      return s__5169
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__5175 = function(pred, coll) {
    while(true) {
      var s__5173 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____5174 = s__5173;
        if(cljs.core.truth_(and__3546__auto____5174)) {
          return pred.call(null, cljs.core.first.call(null, s__5173))
        }else {
          return and__3546__auto____5174
        }
      }())) {
        var G__5176 = pred;
        var G__5177 = cljs.core.rest.call(null, s__5173);
        pred = G__5176;
        coll = G__5177;
        continue
      }else {
        return s__5173
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__5175.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____5178 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____5178)) {
      var s__5179 = temp__3698__auto____5178;
      return cljs.core.concat.call(null, s__5179, cycle.call(null, s__5179))
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
  var repeat__5180 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__5181 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__5180.call(this, n);
      case 2:
        return repeat__5181.call(this, n, x)
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
  var repeatedly__5183 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__5184 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__5183.call(this, n);
      case 2:
        return repeatedly__5184.call(this, n, f)
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
  var interleave__5190 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5186 = cljs.core.seq.call(null, c1);
      var s2__5187 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____5188 = s1__5186;
        if(cljs.core.truth_(and__3546__auto____5188)) {
          return s2__5187
        }else {
          return and__3546__auto____5188
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__5186), cljs.core.cons.call(null, cljs.core.first.call(null, s2__5187), interleave.call(null, cljs.core.rest.call(null, s1__5186), cljs.core.rest.call(null, s2__5187))))
      }else {
        return null
      }
    })
  };
  var interleave__5191 = function() {
    var G__5193__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__5189 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__5189))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__5189), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__5189)))
        }else {
          return null
        }
      })
    };
    var G__5193 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5193__delegate.call(this, c1, c2, colls)
    };
    G__5193.cljs$lang$maxFixedArity = 2;
    G__5193.cljs$lang$applyTo = function(arglist__5194) {
      var c1 = cljs.core.first(arglist__5194);
      var c2 = cljs.core.first(cljs.core.next(arglist__5194));
      var colls = cljs.core.rest(cljs.core.next(arglist__5194));
      return G__5193__delegate.call(this, c1, c2, colls)
    };
    return G__5193
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__5190.call(this, c1, c2);
      default:
        return interleave__5191.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__5191.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__5197 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____5195 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____5195)) {
        var coll__5196 = temp__3695__auto____5195;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__5196), cat.call(null, cljs.core.rest.call(null, coll__5196), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__5197.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__5198 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__5199 = function() {
    var G__5201__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__5201 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5201__delegate.call(this, f, coll, colls)
    };
    G__5201.cljs$lang$maxFixedArity = 2;
    G__5201.cljs$lang$applyTo = function(arglist__5202) {
      var f = cljs.core.first(arglist__5202);
      var coll = cljs.core.first(cljs.core.next(arglist__5202));
      var colls = cljs.core.rest(cljs.core.next(arglist__5202));
      return G__5201__delegate.call(this, f, coll, colls)
    };
    return G__5201
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__5198.call(this, f, coll);
      default:
        return mapcat__5199.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__5199.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____5203 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____5203)) {
      var s__5204 = temp__3698__auto____5203;
      var f__5205 = cljs.core.first.call(null, s__5204);
      var r__5206 = cljs.core.rest.call(null, s__5204);
      if(cljs.core.truth_(pred.call(null, f__5205))) {
        return cljs.core.cons.call(null, f__5205, filter.call(null, pred, r__5206))
      }else {
        return filter.call(null, pred, r__5206)
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
  var walk__5208 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__5208.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__5207_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__5207_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__5215 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__5216 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____5209 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5209)) {
        var s__5210 = temp__3698__auto____5209;
        var p__5211 = cljs.core.take.call(null, n, s__5210);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__5211)))) {
          return cljs.core.cons.call(null, p__5211, partition.call(null, n, step, cljs.core.drop.call(null, step, s__5210)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__5217 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____5212 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5212)) {
        var s__5213 = temp__3698__auto____5212;
        var p__5214 = cljs.core.take.call(null, n, s__5213);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__5214)))) {
          return cljs.core.cons.call(null, p__5214, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__5213)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__5214, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__5215.call(this, n, step);
      case 3:
        return partition__5216.call(this, n, step, pad);
      case 4:
        return partition__5217.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__5223 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__5224 = function(m, ks, not_found) {
    var sentinel__5219 = cljs.core.lookup_sentinel;
    var m__5220 = m;
    var ks__5221 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__5221)) {
        var m__5222 = cljs.core.get.call(null, m__5220, cljs.core.first.call(null, ks__5221), sentinel__5219);
        if(cljs.core.truth_(sentinel__5219 === m__5222)) {
          return not_found
        }else {
          var G__5226 = sentinel__5219;
          var G__5227 = m__5222;
          var G__5228 = cljs.core.next.call(null, ks__5221);
          sentinel__5219 = G__5226;
          m__5220 = G__5227;
          ks__5221 = G__5228;
          continue
        }
      }else {
        return m__5220
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__5223.call(this, m, ks);
      case 3:
        return get_in__5224.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__5229, v) {
  var vec__5230__5231 = p__5229;
  var k__5232 = cljs.core.nth.call(null, vec__5230__5231, 0, null);
  var ks__5233 = cljs.core.nthnext.call(null, vec__5230__5231, 1);
  if(cljs.core.truth_(ks__5233)) {
    return cljs.core.assoc.call(null, m, k__5232, assoc_in.call(null, cljs.core.get.call(null, m, k__5232), ks__5233, v))
  }else {
    return cljs.core.assoc.call(null, m, k__5232, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__5234, f, args) {
    var vec__5235__5236 = p__5234;
    var k__5237 = cljs.core.nth.call(null, vec__5235__5236, 0, null);
    var ks__5238 = cljs.core.nthnext.call(null, vec__5235__5236, 1);
    if(cljs.core.truth_(ks__5238)) {
      return cljs.core.assoc.call(null, m, k__5237, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__5237), ks__5238, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__5237, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__5237), args))
    }
  };
  var update_in = function(m, p__5234, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__5234, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__5239) {
    var m = cljs.core.first(arglist__5239);
    var p__5234 = cljs.core.first(cljs.core.next(arglist__5239));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5239)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5239)));
    return update_in__delegate.call(this, m, p__5234, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__5240 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__5265 = null;
  var G__5265__5266 = function(coll, k) {
    var this__5241 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__5265__5267 = function(coll, k, not_found) {
    var this__5242 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__5265 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5265__5266.call(this, coll, k);
      case 3:
        return G__5265__5267.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5265
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__5243 = this;
  var new_array__5244 = cljs.core.aclone.call(null, this__5243.array);
  new_array__5244[k] = v;
  return new cljs.core.Vector(this__5243.meta, new_array__5244)
};
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__5245 = this;
  var new_array__5246 = cljs.core.aclone.call(null, this__5245.array);
  new_array__5246.push(o);
  return new cljs.core.Vector(this__5245.meta, new_array__5246)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__5269 = null;
  var G__5269__5270 = function(v, f) {
    var this__5247 = this;
    return cljs.core.ci_reduce.call(null, this__5247.array, f)
  };
  var G__5269__5271 = function(v, f, start) {
    var this__5248 = this;
    return cljs.core.ci_reduce.call(null, this__5248.array, f, start)
  };
  G__5269 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__5269__5270.call(this, v, f);
      case 3:
        return G__5269__5271.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5269
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__5249 = this;
  if(cljs.core.truth_(this__5249.array.length > 0)) {
    var vector_seq__5250 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__5249.array.length)) {
          return cljs.core.cons.call(null, this__5249.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__5250.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__5251 = this;
  return this__5251.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__5252 = this;
  var count__5253 = this__5252.array.length;
  if(cljs.core.truth_(count__5253 > 0)) {
    return this__5252.array[count__5253 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__5254 = this;
  if(cljs.core.truth_(this__5254.array.length > 0)) {
    var new_array__5255 = cljs.core.aclone.call(null, this__5254.array);
    new_array__5255.pop();
    return new cljs.core.Vector(this__5254.meta, new_array__5255)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__5256 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__5257 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__5258 = this;
  return new cljs.core.Vector(meta, this__5258.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__5259 = this;
  return this__5259.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__5273 = null;
  var G__5273__5274 = function(coll, n) {
    var this__5260 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____5261 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____5261)) {
        return n < this__5260.array.length
      }else {
        return and__3546__auto____5261
      }
    }())) {
      return this__5260.array[n]
    }else {
      return null
    }
  };
  var G__5273__5275 = function(coll, n, not_found) {
    var this__5262 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____5263 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____5263)) {
        return n < this__5262.array.length
      }else {
        return and__3546__auto____5263
      }
    }())) {
      return this__5262.array[n]
    }else {
      return not_found
    }
  };
  G__5273 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5273__5274.call(this, coll, n);
      case 3:
        return G__5273__5275.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5273
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__5264 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__5264.meta)
};
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, cljs.core.array.call(null));
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.Vector.prototype.call = function() {
  var G__5277 = null;
  var G__5277__5278 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__5277__5279 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__5277 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5277__5278.call(this, _, k);
      case 3:
        return G__5277__5279.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5277
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
  vector.cljs$lang$applyTo = function(arglist__5281) {
    var args = cljs.core.seq(arglist__5281);
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
  var this__5282 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__5302 = null;
  var G__5302__5303 = function(coll, k) {
    var this__5283 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__5302__5304 = function(coll, k, not_found) {
    var this__5284 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__5302 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5302__5303.call(this, coll, k);
      case 3:
        return G__5302__5304.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5302
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__5285 = this;
  var v_pos__5286 = this__5285.start + key;
  return new cljs.core.Subvec(this__5285.meta, cljs.core._assoc.call(null, this__5285.v, v_pos__5286, val), this__5285.start, this__5285.end > v_pos__5286 + 1 ? this__5285.end : v_pos__5286 + 1)
};
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__5287 = this;
  return new cljs.core.Subvec(this__5287.meta, cljs.core._assoc_n.call(null, this__5287.v, this__5287.end, o), this__5287.start, this__5287.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__5306 = null;
  var G__5306__5307 = function(coll, f) {
    var this__5288 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__5306__5308 = function(coll, f, start) {
    var this__5289 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__5306 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__5306__5307.call(this, coll, f);
      case 3:
        return G__5306__5308.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5306
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__5290 = this;
  var subvec_seq__5291 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__5290.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__5290.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__5291.call(null, this__5290.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__5292 = this;
  return this__5292.end - this__5292.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__5293 = this;
  return cljs.core._nth.call(null, this__5293.v, this__5293.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__5294 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__5294.start, this__5294.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__5294.meta, this__5294.v, this__5294.start, this__5294.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__5295 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__5296 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__5297 = this;
  return new cljs.core.Subvec(meta, this__5297.v, this__5297.start, this__5297.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__5298 = this;
  return this__5298.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__5310 = null;
  var G__5310__5311 = function(coll, n) {
    var this__5299 = this;
    return cljs.core._nth.call(null, this__5299.v, this__5299.start + n)
  };
  var G__5310__5312 = function(coll, n, not_found) {
    var this__5300 = this;
    return cljs.core._nth.call(null, this__5300.v, this__5300.start + n, not_found)
  };
  G__5310 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5310__5311.call(this, coll, n);
      case 3:
        return G__5310__5312.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5310
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__5301 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__5301.meta)
};
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__5314 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__5315 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__5314.call(this, v, start);
      case 3:
        return subvec__5315.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subvec
}();
cljs.core.Subvec.prototype.call = function() {
  var G__5317 = null;
  var G__5317__5318 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__5317__5319 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__5317 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5317__5318.call(this, _, k);
      case 3:
        return G__5317__5319.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5317
}();
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__5321 = this;
  return false
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, y)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, x), cljs.core.count.call(null, y))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__5322 = array.length;
  var i__5323 = 0;
  while(true) {
    if(cljs.core.truth_(i__5323 < len__5322)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__5323]))) {
        return i__5323
      }else {
        var G__5324 = i__5323 + incr;
        i__5323 = G__5324;
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
  var obj_map_contains_key_QMARK___5326 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___5327 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____5325 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____5325)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____5325
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
        return obj_map_contains_key_QMARK___5326.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___5327.call(this, k, strobj, true_val, false_val)
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
  var this__5330 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__5349 = null;
  var G__5349__5350 = function(coll, k) {
    var this__5331 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__5349__5351 = function(coll, k, not_found) {
    var this__5332 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__5332.strobj, this__5332.strobj[k], not_found)
  };
  G__5349 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5349__5350.call(this, coll, k);
      case 3:
        return G__5349__5351.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5349
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__5333 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__5334 = goog.object.clone.call(null, this__5333.strobj);
    var overwrite_QMARK___5335 = new_strobj__5334.hasOwnProperty(k);
    new_strobj__5334[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___5335)) {
      return new cljs.core.ObjMap(this__5333.meta, this__5333.keys, new_strobj__5334)
    }else {
      var new_keys__5336 = cljs.core.aclone.call(null, this__5333.keys);
      new_keys__5336.push(k);
      return new cljs.core.ObjMap(this__5333.meta, new_keys__5336, new_strobj__5334)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__5333.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__5337 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__5337.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__5338 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__5339 = this;
  if(cljs.core.truth_(this__5339.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__5329_SHARP_) {
      return cljs.core.vector.call(null, p1__5329_SHARP_, this__5339.strobj[p1__5329_SHARP_])
    }, this__5339.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__5340 = this;
  return this__5340.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__5341 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__5342 = this;
  return new cljs.core.ObjMap(meta, this__5342.keys, this__5342.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__5343 = this;
  return this__5343.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__5344 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__5344.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__5345 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____5346 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____5346)) {
      return this__5345.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____5346
    }
  }())) {
    var new_keys__5347 = cljs.core.aclone.call(null, this__5345.keys);
    var new_strobj__5348 = goog.object.clone.call(null, this__5345.strobj);
    new_keys__5347.splice(cljs.core.scan_array.call(null, 1, k, new_keys__5347), 1);
    cljs.core.js_delete.call(null, new_strobj__5348, k);
    return new cljs.core.ObjMap(this__5345.meta, new_keys__5347, new_strobj__5348)
  }else {
    return coll
  }
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, cljs.core.array.call(null), cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.ObjMap.prototype.call = function() {
  var G__5354 = null;
  var G__5354__5355 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__5354__5356 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__5354 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5354__5355.call(this, _, k);
      case 3:
        return G__5354__5356.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5354
}();
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__5358 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__5388 = null;
  var G__5388__5389 = function(coll, k) {
    var this__5359 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__5388__5390 = function(coll, k, not_found) {
    var this__5360 = this;
    var bucket__5361 = this__5360.hashobj[cljs.core.hash.call(null, k)];
    var i__5362 = cljs.core.truth_(bucket__5361) ? cljs.core.scan_array.call(null, 2, k, bucket__5361) : null;
    if(cljs.core.truth_(i__5362)) {
      return bucket__5361[i__5362 + 1]
    }else {
      return not_found
    }
  };
  G__5388 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5388__5389.call(this, coll, k);
      case 3:
        return G__5388__5390.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5388
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__5363 = this;
  var h__5364 = cljs.core.hash.call(null, k);
  var bucket__5365 = this__5363.hashobj[h__5364];
  if(cljs.core.truth_(bucket__5365)) {
    var new_bucket__5366 = cljs.core.aclone.call(null, bucket__5365);
    var new_hashobj__5367 = goog.object.clone.call(null, this__5363.hashobj);
    new_hashobj__5367[h__5364] = new_bucket__5366;
    var temp__3695__auto____5368 = cljs.core.scan_array.call(null, 2, k, new_bucket__5366);
    if(cljs.core.truth_(temp__3695__auto____5368)) {
      var i__5369 = temp__3695__auto____5368;
      new_bucket__5366[i__5369 + 1] = v;
      return new cljs.core.HashMap(this__5363.meta, this__5363.count, new_hashobj__5367)
    }else {
      new_bucket__5366.push(k, v);
      return new cljs.core.HashMap(this__5363.meta, this__5363.count + 1, new_hashobj__5367)
    }
  }else {
    var new_hashobj__5370 = goog.object.clone.call(null, this__5363.hashobj);
    new_hashobj__5370[h__5364] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__5363.meta, this__5363.count + 1, new_hashobj__5370)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__5371 = this;
  var bucket__5372 = this__5371.hashobj[cljs.core.hash.call(null, k)];
  var i__5373 = cljs.core.truth_(bucket__5372) ? cljs.core.scan_array.call(null, 2, k, bucket__5372) : null;
  if(cljs.core.truth_(i__5373)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__5374 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__5375 = this;
  if(cljs.core.truth_(this__5375.count > 0)) {
    var hashes__5376 = cljs.core.js_keys.call(null, this__5375.hashobj);
    return cljs.core.mapcat.call(null, function(p1__5353_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__5375.hashobj[p1__5353_SHARP_]))
    }, hashes__5376)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__5377 = this;
  return this__5377.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__5378 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__5379 = this;
  return new cljs.core.HashMap(meta, this__5379.count, this__5379.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__5380 = this;
  return this__5380.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__5381 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__5381.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__5382 = this;
  var h__5383 = cljs.core.hash.call(null, k);
  var bucket__5384 = this__5382.hashobj[h__5383];
  var i__5385 = cljs.core.truth_(bucket__5384) ? cljs.core.scan_array.call(null, 2, k, bucket__5384) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__5385))) {
    return coll
  }else {
    var new_hashobj__5386 = goog.object.clone.call(null, this__5382.hashobj);
    if(cljs.core.truth_(3 > bucket__5384.length)) {
      cljs.core.js_delete.call(null, new_hashobj__5386, h__5383)
    }else {
      var new_bucket__5387 = cljs.core.aclone.call(null, bucket__5384);
      new_bucket__5387.splice(i__5385, 2);
      new_hashobj__5386[h__5383] = new_bucket__5387
    }
    return new cljs.core.HashMap(this__5382.meta, this__5382.count - 1, new_hashobj__5386)
  }
};
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__5392 = ks.length;
  var i__5393 = 0;
  var out__5394 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__5393 < len__5392)) {
      var G__5395 = i__5393 + 1;
      var G__5396 = cljs.core.assoc.call(null, out__5394, ks[i__5393], vs[i__5393]);
      i__5393 = G__5395;
      out__5394 = G__5396;
      continue
    }else {
      return out__5394
    }
    break
  }
};
cljs.core.HashMap.prototype.call = function() {
  var G__5397 = null;
  var G__5397__5398 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__5397__5399 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__5397 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5397__5398.call(this, _, k);
      case 3:
        return G__5397__5399.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5397
}();
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__5401 = cljs.core.seq.call(null, keyvals);
    var out__5402 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__5401)) {
        var G__5403 = cljs.core.nnext.call(null, in$__5401);
        var G__5404 = cljs.core.assoc.call(null, out__5402, cljs.core.first.call(null, in$__5401), cljs.core.second.call(null, in$__5401));
        in$__5401 = G__5403;
        out__5402 = G__5404;
        continue
      }else {
        return out__5402
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
  hash_map.cljs$lang$applyTo = function(arglist__5405) {
    var keyvals = cljs.core.seq(arglist__5405);
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
      return cljs.core.reduce.call(null, function(p1__5406_SHARP_, p2__5407_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____5408 = p1__5406_SHARP_;
          if(cljs.core.truth_(or__3548__auto____5408)) {
            return or__3548__auto____5408
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__5407_SHARP_)
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
  merge.cljs$lang$applyTo = function(arglist__5409) {
    var maps = cljs.core.seq(arglist__5409);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__5412 = function(m, e) {
        var k__5410 = cljs.core.first.call(null, e);
        var v__5411 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__5410))) {
          return cljs.core.assoc.call(null, m, k__5410, f.call(null, cljs.core.get.call(null, m, k__5410), v__5411))
        }else {
          return cljs.core.assoc.call(null, m, k__5410, v__5411)
        }
      };
      var merge2__5414 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__5412, function() {
          var or__3548__auto____5413 = m1;
          if(cljs.core.truth_(or__3548__auto____5413)) {
            return or__3548__auto____5413
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__5414, maps)
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
  merge_with.cljs$lang$applyTo = function(arglist__5415) {
    var f = cljs.core.first(arglist__5415);
    var maps = cljs.core.rest(arglist__5415);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__5417 = cljs.core.ObjMap.fromObject([], {});
  var keys__5418 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__5418)) {
      var key__5419 = cljs.core.first.call(null, keys__5418);
      var entry__5420 = cljs.core.get.call(null, map, key__5419, "\ufdd0'user/not-found");
      var G__5421 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__5420, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__5417, key__5419, entry__5420) : ret__5417;
      var G__5422 = cljs.core.next.call(null, keys__5418);
      ret__5417 = G__5421;
      keys__5418 = G__5422;
      continue
    }else {
      return ret__5417
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
  var this__5423 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__5436 = null;
  var G__5436__5437 = function(coll, v) {
    var this__5424 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__5436__5438 = function(coll, v, not_found) {
    var this__5425 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__5425.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__5436 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5436__5437.call(this, coll, v);
      case 3:
        return G__5436__5438.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5436
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__5426 = this;
  return new cljs.core.Set(this__5426.meta, cljs.core.assoc.call(null, this__5426.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__5427 = this;
  return cljs.core.keys.call(null, this__5427.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__5428 = this;
  return new cljs.core.Set(this__5428.meta, cljs.core.dissoc.call(null, this__5428.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__5429 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__5430 = this;
  var and__3546__auto____5431 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____5431)) {
    var and__3546__auto____5432 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____5432)) {
      return cljs.core.every_QMARK_.call(null, function(p1__5416_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__5416_SHARP_)
      }, other)
    }else {
      return and__3546__auto____5432
    }
  }else {
    return and__3546__auto____5431
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__5433 = this;
  return new cljs.core.Set(meta, this__5433.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__5434 = this;
  return this__5434.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__5435 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__5435.meta)
};
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.Set.prototype.call = function() {
  var G__5440 = null;
  var G__5440__5441 = function(_, k) {
    return cljs.core._lookup.call(null, this, k)
  };
  var G__5440__5442 = function(_, k, not_found) {
    return cljs.core._lookup.call(null, this, k, not_found)
  };
  G__5440 = function(_, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5440__5441.call(this, _, k);
      case 3:
        return G__5440__5442.call(this, _, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5440
}();
cljs.core.set = function set(coll) {
  var in$__5445 = cljs.core.seq.call(null, coll);
  var out__5446 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__5445)))) {
      var G__5447 = cljs.core.rest.call(null, in$__5445);
      var G__5448 = cljs.core.conj.call(null, out__5446, cljs.core.first.call(null, in$__5445));
      in$__5445 = G__5447;
      out__5446 = G__5448;
      continue
    }else {
      return out__5446
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__5449 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____5450 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____5450)) {
        var e__5451 = temp__3695__auto____5450;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__5451))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__5449, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__5444_SHARP_) {
      var temp__3695__auto____5452 = cljs.core.find.call(null, smap, p1__5444_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____5452)) {
        var e__5453 = temp__3695__auto____5452;
        return cljs.core.second.call(null, e__5453)
      }else {
        return p1__5444_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__5461 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__5454, seen) {
        while(true) {
          var vec__5455__5456 = p__5454;
          var f__5457 = cljs.core.nth.call(null, vec__5455__5456, 0, null);
          var xs__5458 = vec__5455__5456;
          var temp__3698__auto____5459 = cljs.core.seq.call(null, xs__5458);
          if(cljs.core.truth_(temp__3698__auto____5459)) {
            var s__5460 = temp__3698__auto____5459;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__5457))) {
              var G__5462 = cljs.core.rest.call(null, s__5460);
              var G__5463 = seen;
              p__5454 = G__5462;
              seen = G__5463;
              continue
            }else {
              return cljs.core.cons.call(null, f__5457, step.call(null, cljs.core.rest.call(null, s__5460), cljs.core.conj.call(null, seen, f__5457)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__5461.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__5464 = cljs.core.Vector.fromArray([]);
  var s__5465 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__5465))) {
      var G__5466 = cljs.core.conj.call(null, ret__5464, cljs.core.first.call(null, s__5465));
      var G__5467 = cljs.core.next.call(null, s__5465);
      ret__5464 = G__5466;
      s__5465 = G__5467;
      continue
    }else {
      return cljs.core.seq.call(null, ret__5464)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____5468 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____5468)) {
        return or__3548__auto____5468
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__5469 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__5469 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__5469 + 1)
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
    var or__3548__auto____5470 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____5470)) {
      return or__3548__auto____5470
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__5471 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__5471 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__5471)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__5474 = cljs.core.ObjMap.fromObject([], {});
  var ks__5475 = cljs.core.seq.call(null, keys);
  var vs__5476 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____5477 = ks__5475;
      if(cljs.core.truth_(and__3546__auto____5477)) {
        return vs__5476
      }else {
        return and__3546__auto____5477
      }
    }())) {
      var G__5478 = cljs.core.assoc.call(null, map__5474, cljs.core.first.call(null, ks__5475), cljs.core.first.call(null, vs__5476));
      var G__5479 = cljs.core.next.call(null, ks__5475);
      var G__5480 = cljs.core.next.call(null, vs__5476);
      map__5474 = G__5478;
      ks__5475 = G__5479;
      vs__5476 = G__5480;
      continue
    }else {
      return map__5474
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__5483 = function(k, x) {
    return x
  };
  var max_key__5484 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__5485 = function() {
    var G__5487__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__5472_SHARP_, p2__5473_SHARP_) {
        return max_key.call(null, k, p1__5472_SHARP_, p2__5473_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__5487 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5487__delegate.call(this, k, x, y, more)
    };
    G__5487.cljs$lang$maxFixedArity = 3;
    G__5487.cljs$lang$applyTo = function(arglist__5488) {
      var k = cljs.core.first(arglist__5488);
      var x = cljs.core.first(cljs.core.next(arglist__5488));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5488)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5488)));
      return G__5487__delegate.call(this, k, x, y, more)
    };
    return G__5487
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__5483.call(this, k, x);
      case 3:
        return max_key__5484.call(this, k, x, y);
      default:
        return max_key__5485.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__5485.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__5489 = function(k, x) {
    return x
  };
  var min_key__5490 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__5491 = function() {
    var G__5493__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__5481_SHARP_, p2__5482_SHARP_) {
        return min_key.call(null, k, p1__5481_SHARP_, p2__5482_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__5493 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5493__delegate.call(this, k, x, y, more)
    };
    G__5493.cljs$lang$maxFixedArity = 3;
    G__5493.cljs$lang$applyTo = function(arglist__5494) {
      var k = cljs.core.first(arglist__5494);
      var x = cljs.core.first(cljs.core.next(arglist__5494));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5494)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5494)));
      return G__5493__delegate.call(this, k, x, y, more)
    };
    return G__5493
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__5489.call(this, k, x);
      case 3:
        return min_key__5490.call(this, k, x, y);
      default:
        return min_key__5491.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__5491.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__5497 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__5498 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____5495 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5495)) {
        var s__5496 = temp__3698__auto____5495;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__5496), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__5496)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__5497.call(this, n, step);
      case 3:
        return partition_all__5498.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____5500 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____5500)) {
      var s__5501 = temp__3698__auto____5500;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__5501)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__5501), take_while.call(null, pred, cljs.core.rest.call(null, s__5501)))
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
  var this__5502 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__5503 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__5519 = null;
  var G__5519__5520 = function(rng, f) {
    var this__5504 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__5519__5521 = function(rng, f, s) {
    var this__5505 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__5519 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__5519__5520.call(this, rng, f);
      case 3:
        return G__5519__5521.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5519
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__5506 = this;
  var comp__5507 = cljs.core.truth_(this__5506.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__5507.call(null, this__5506.start, this__5506.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__5508 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__5508.end - this__5508.start) / this__5508.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__5509 = this;
  return this__5509.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__5510 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__5510.meta, this__5510.start + this__5510.step, this__5510.end, this__5510.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__5511 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__5512 = this;
  return new cljs.core.Range(meta, this__5512.start, this__5512.end, this__5512.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__5513 = this;
  return this__5513.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__5523 = null;
  var G__5523__5524 = function(rng, n) {
    var this__5514 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__5514.start + n * this__5514.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____5515 = this__5514.start > this__5514.end;
        if(cljs.core.truth_(and__3546__auto____5515)) {
          return cljs.core._EQ_.call(null, this__5514.step, 0)
        }else {
          return and__3546__auto____5515
        }
      }())) {
        return this__5514.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__5523__5525 = function(rng, n, not_found) {
    var this__5516 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__5516.start + n * this__5516.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____5517 = this__5516.start > this__5516.end;
        if(cljs.core.truth_(and__3546__auto____5517)) {
          return cljs.core._EQ_.call(null, this__5516.step, 0)
        }else {
          return and__3546__auto____5517
        }
      }())) {
        return this__5516.start
      }else {
        return not_found
      }
    }
  };
  G__5523 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5523__5524.call(this, rng, n);
      case 3:
        return G__5523__5525.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5523
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__5518 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__5518.meta)
};
cljs.core.range = function() {
  var range = null;
  var range__5527 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__5528 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__5529 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__5530 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__5527.call(this);
      case 1:
        return range__5528.call(this, start);
      case 2:
        return range__5529.call(this, start, end);
      case 3:
        return range__5530.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____5532 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____5532)) {
      var s__5533 = temp__3698__auto____5532;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__5533), take_nth.call(null, n, cljs.core.drop.call(null, n, s__5533)))
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
    var temp__3698__auto____5535 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____5535)) {
      var s__5536 = temp__3698__auto____5535;
      var fst__5537 = cljs.core.first.call(null, s__5536);
      var fv__5538 = f.call(null, fst__5537);
      var run__5539 = cljs.core.cons.call(null, fst__5537, cljs.core.take_while.call(null, function(p1__5534_SHARP_) {
        return cljs.core._EQ_.call(null, fv__5538, f.call(null, p1__5534_SHARP_))
      }, cljs.core.next.call(null, s__5536)));
      return cljs.core.cons.call(null, run__5539, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__5539), s__5536))))
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
  var reductions__5554 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____5550 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____5550)) {
        var s__5551 = temp__3695__auto____5550;
        return reductions.call(null, f, cljs.core.first.call(null, s__5551), cljs.core.rest.call(null, s__5551))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__5555 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____5552 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____5552)) {
        var s__5553 = temp__3698__auto____5552;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__5553)), cljs.core.rest.call(null, s__5553))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__5554.call(this, f, init);
      case 3:
        return reductions__5555.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__5558 = function(f) {
    return function() {
      var G__5563 = null;
      var G__5563__5564 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__5563__5565 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__5563__5566 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__5563__5567 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__5563__5568 = function() {
        var G__5570__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__5570 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5570__delegate.call(this, x, y, z, args)
        };
        G__5570.cljs$lang$maxFixedArity = 3;
        G__5570.cljs$lang$applyTo = function(arglist__5571) {
          var x = cljs.core.first(arglist__5571);
          var y = cljs.core.first(cljs.core.next(arglist__5571));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5571)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5571)));
          return G__5570__delegate.call(this, x, y, z, args)
        };
        return G__5570
      }();
      G__5563 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__5563__5564.call(this);
          case 1:
            return G__5563__5565.call(this, x);
          case 2:
            return G__5563__5566.call(this, x, y);
          case 3:
            return G__5563__5567.call(this, x, y, z);
          default:
            return G__5563__5568.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5563.cljs$lang$maxFixedArity = 3;
      G__5563.cljs$lang$applyTo = G__5563__5568.cljs$lang$applyTo;
      return G__5563
    }()
  };
  var juxt__5559 = function(f, g) {
    return function() {
      var G__5572 = null;
      var G__5572__5573 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__5572__5574 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__5572__5575 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__5572__5576 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__5572__5577 = function() {
        var G__5579__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__5579 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5579__delegate.call(this, x, y, z, args)
        };
        G__5579.cljs$lang$maxFixedArity = 3;
        G__5579.cljs$lang$applyTo = function(arglist__5580) {
          var x = cljs.core.first(arglist__5580);
          var y = cljs.core.first(cljs.core.next(arglist__5580));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5580)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5580)));
          return G__5579__delegate.call(this, x, y, z, args)
        };
        return G__5579
      }();
      G__5572 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__5572__5573.call(this);
          case 1:
            return G__5572__5574.call(this, x);
          case 2:
            return G__5572__5575.call(this, x, y);
          case 3:
            return G__5572__5576.call(this, x, y, z);
          default:
            return G__5572__5577.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5572.cljs$lang$maxFixedArity = 3;
      G__5572.cljs$lang$applyTo = G__5572__5577.cljs$lang$applyTo;
      return G__5572
    }()
  };
  var juxt__5560 = function(f, g, h) {
    return function() {
      var G__5581 = null;
      var G__5581__5582 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__5581__5583 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__5581__5584 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__5581__5585 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__5581__5586 = function() {
        var G__5588__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__5588 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5588__delegate.call(this, x, y, z, args)
        };
        G__5588.cljs$lang$maxFixedArity = 3;
        G__5588.cljs$lang$applyTo = function(arglist__5589) {
          var x = cljs.core.first(arglist__5589);
          var y = cljs.core.first(cljs.core.next(arglist__5589));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5589)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5589)));
          return G__5588__delegate.call(this, x, y, z, args)
        };
        return G__5588
      }();
      G__5581 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__5581__5582.call(this);
          case 1:
            return G__5581__5583.call(this, x);
          case 2:
            return G__5581__5584.call(this, x, y);
          case 3:
            return G__5581__5585.call(this, x, y, z);
          default:
            return G__5581__5586.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5581.cljs$lang$maxFixedArity = 3;
      G__5581.cljs$lang$applyTo = G__5581__5586.cljs$lang$applyTo;
      return G__5581
    }()
  };
  var juxt__5561 = function() {
    var G__5590__delegate = function(f, g, h, fs) {
      var fs__5557 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__5591 = null;
        var G__5591__5592 = function() {
          return cljs.core.reduce.call(null, function(p1__5540_SHARP_, p2__5541_SHARP_) {
            return cljs.core.conj.call(null, p1__5540_SHARP_, p2__5541_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__5557)
        };
        var G__5591__5593 = function(x) {
          return cljs.core.reduce.call(null, function(p1__5542_SHARP_, p2__5543_SHARP_) {
            return cljs.core.conj.call(null, p1__5542_SHARP_, p2__5543_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__5557)
        };
        var G__5591__5594 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__5544_SHARP_, p2__5545_SHARP_) {
            return cljs.core.conj.call(null, p1__5544_SHARP_, p2__5545_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__5557)
        };
        var G__5591__5595 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__5546_SHARP_, p2__5547_SHARP_) {
            return cljs.core.conj.call(null, p1__5546_SHARP_, p2__5547_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__5557)
        };
        var G__5591__5596 = function() {
          var G__5598__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__5548_SHARP_, p2__5549_SHARP_) {
              return cljs.core.conj.call(null, p1__5548_SHARP_, cljs.core.apply.call(null, p2__5549_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__5557)
          };
          var G__5598 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__5598__delegate.call(this, x, y, z, args)
          };
          G__5598.cljs$lang$maxFixedArity = 3;
          G__5598.cljs$lang$applyTo = function(arglist__5599) {
            var x = cljs.core.first(arglist__5599);
            var y = cljs.core.first(cljs.core.next(arglist__5599));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5599)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5599)));
            return G__5598__delegate.call(this, x, y, z, args)
          };
          return G__5598
        }();
        G__5591 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__5591__5592.call(this);
            case 1:
              return G__5591__5593.call(this, x);
            case 2:
              return G__5591__5594.call(this, x, y);
            case 3:
              return G__5591__5595.call(this, x, y, z);
            default:
              return G__5591__5596.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__5591.cljs$lang$maxFixedArity = 3;
        G__5591.cljs$lang$applyTo = G__5591__5596.cljs$lang$applyTo;
        return G__5591
      }()
    };
    var G__5590 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5590__delegate.call(this, f, g, h, fs)
    };
    G__5590.cljs$lang$maxFixedArity = 3;
    G__5590.cljs$lang$applyTo = function(arglist__5600) {
      var f = cljs.core.first(arglist__5600);
      var g = cljs.core.first(cljs.core.next(arglist__5600));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5600)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5600)));
      return G__5590__delegate.call(this, f, g, h, fs)
    };
    return G__5590
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__5558.call(this, f);
      case 2:
        return juxt__5559.call(this, f, g);
      case 3:
        return juxt__5560.call(this, f, g, h);
      default:
        return juxt__5561.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__5561.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__5602 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__5605 = cljs.core.next.call(null, coll);
        coll = G__5605;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__5603 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____5601 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____5601)) {
          return n > 0
        }else {
          return and__3546__auto____5601
        }
      }())) {
        var G__5606 = n - 1;
        var G__5607 = cljs.core.next.call(null, coll);
        n = G__5606;
        coll = G__5607;
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
        return dorun__5602.call(this, n);
      case 2:
        return dorun__5603.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__5608 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__5609 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__5608.call(this, n);
      case 2:
        return doall__5609.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__5611 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__5611), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__5611), 1))) {
      return cljs.core.first.call(null, matches__5611)
    }else {
      return cljs.core.vec.call(null, matches__5611)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__5612 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__5612))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__5612), 1))) {
      return cljs.core.first.call(null, matches__5612)
    }else {
      return cljs.core.vec.call(null, matches__5612)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__5613 = cljs.core.re_find.call(null, re, s);
  var match_idx__5614 = s.search(re);
  var match_str__5615 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__5613)) ? cljs.core.first.call(null, match_data__5613) : match_data__5613;
  var post_match__5616 = cljs.core.subs.call(null, s, match_idx__5614 + cljs.core.count.call(null, match_str__5615));
  if(cljs.core.truth_(match_data__5613)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__5613, re_seq.call(null, re, post_match__5616))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__5617_SHARP_) {
    return print_one.call(null, p1__5617_SHARP_, opts)
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
          var and__3546__auto____5618 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____5618)) {
            var and__3546__auto____5622 = function() {
              var x__319__auto____5619 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____5620 = x__319__auto____5619;
                if(cljs.core.truth_(and__3546__auto____5620)) {
                  var and__3546__auto____5621 = x__319__auto____5619.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____5621)) {
                    return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____5619))
                  }else {
                    return and__3546__auto____5621
                  }
                }else {
                  return and__3546__auto____5620
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__319__auto____5619)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____5622)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____5622
            }
          }else {
            return and__3546__auto____5618
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__319__auto____5623 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____5624 = x__319__auto____5623;
            if(cljs.core.truth_(and__3546__auto____5624)) {
              var and__3546__auto____5625 = x__319__auto____5623.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____5625)) {
                return cljs.core.not.call(null, cljs.core.is_proto_.call(null, x__319__auto____5623))
              }else {
                return and__3546__auto____5625
              }
            }else {
              return and__3546__auto____5624
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__319__auto____5623)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__5626 = cljs.core.first.call(null, objs);
  var sb__5627 = new goog.string.StringBuffer;
  var G__5628__5629 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__5628__5629)) {
    var obj__5630 = cljs.core.first.call(null, G__5628__5629);
    var G__5628__5631 = G__5628__5629;
    while(true) {
      if(cljs.core.truth_(obj__5630 === first_obj__5626)) {
      }else {
        sb__5627.append(" ")
      }
      var G__5632__5633 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__5630, opts));
      if(cljs.core.truth_(G__5632__5633)) {
        var string__5634 = cljs.core.first.call(null, G__5632__5633);
        var G__5632__5635 = G__5632__5633;
        while(true) {
          sb__5627.append(string__5634);
          var temp__3698__auto____5636 = cljs.core.next.call(null, G__5632__5635);
          if(cljs.core.truth_(temp__3698__auto____5636)) {
            var G__5632__5637 = temp__3698__auto____5636;
            var G__5640 = cljs.core.first.call(null, G__5632__5637);
            var G__5641 = G__5632__5637;
            string__5634 = G__5640;
            G__5632__5635 = G__5641;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____5638 = cljs.core.next.call(null, G__5628__5631);
      if(cljs.core.truth_(temp__3698__auto____5638)) {
        var G__5628__5639 = temp__3698__auto____5638;
        var G__5642 = cljs.core.first.call(null, G__5628__5639);
        var G__5643 = G__5628__5639;
        obj__5630 = G__5642;
        G__5628__5631 = G__5643;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__5627)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__5644 = cljs.core.first.call(null, objs);
  var G__5645__5646 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__5645__5646)) {
    var obj__5647 = cljs.core.first.call(null, G__5645__5646);
    var G__5645__5648 = G__5645__5646;
    while(true) {
      if(cljs.core.truth_(obj__5647 === first_obj__5644)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__5649__5650 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__5647, opts));
      if(cljs.core.truth_(G__5649__5650)) {
        var string__5651 = cljs.core.first.call(null, G__5649__5650);
        var G__5649__5652 = G__5649__5650;
        while(true) {
          cljs.core.string_print.call(null, string__5651);
          var temp__3698__auto____5653 = cljs.core.next.call(null, G__5649__5652);
          if(cljs.core.truth_(temp__3698__auto____5653)) {
            var G__5649__5654 = temp__3698__auto____5653;
            var G__5657 = cljs.core.first.call(null, G__5649__5654);
            var G__5658 = G__5649__5654;
            string__5651 = G__5657;
            G__5649__5652 = G__5658;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____5655 = cljs.core.next.call(null, G__5645__5648);
      if(cljs.core.truth_(temp__3698__auto____5655)) {
        var G__5645__5656 = temp__3698__auto____5655;
        var G__5659 = cljs.core.first.call(null, G__5645__5656);
        var G__5660 = G__5645__5656;
        obj__5647 = G__5659;
        G__5645__5648 = G__5660;
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
  pr_str.cljs$lang$applyTo = function(arglist__5661) {
    var objs = cljs.core.seq(arglist__5661);
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
  pr.cljs$lang$applyTo = function(arglist__5662) {
    var objs = cljs.core.seq(arglist__5662);
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
  cljs_core_print.cljs$lang$applyTo = function(arglist__5663) {
    var objs = cljs.core.seq(arglist__5663);
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
  println.cljs$lang$applyTo = function(arglist__5664) {
    var objs = cljs.core.seq(arglist__5664);
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
  prn.cljs$lang$applyTo = function(arglist__5665) {
    var objs = cljs.core.seq(arglist__5665);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__5666 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__5666, "{", ", ", "}", opts, coll)
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
      var temp__3698__auto____5667 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____5667)) {
        var nspc__5668 = temp__3698__auto____5667;
        return cljs.core.str.call(null, nspc__5668, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____5669 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____5669)) {
          var nspc__5670 = temp__3698__auto____5669;
          return cljs.core.str.call(null, nspc__5670, "/")
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
  var pr_pair__5671 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__5671, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__5672 = this;
  var G__5673__5674 = cljs.core.seq.call(null, this__5672.watches);
  if(cljs.core.truth_(G__5673__5674)) {
    var G__5676__5678 = cljs.core.first.call(null, G__5673__5674);
    var vec__5677__5679 = G__5676__5678;
    var key__5680 = cljs.core.nth.call(null, vec__5677__5679, 0, null);
    var f__5681 = cljs.core.nth.call(null, vec__5677__5679, 1, null);
    var G__5673__5682 = G__5673__5674;
    var G__5676__5683 = G__5676__5678;
    var G__5673__5684 = G__5673__5682;
    while(true) {
      var vec__5685__5686 = G__5676__5683;
      var key__5687 = cljs.core.nth.call(null, vec__5685__5686, 0, null);
      var f__5688 = cljs.core.nth.call(null, vec__5685__5686, 1, null);
      var G__5673__5689 = G__5673__5684;
      f__5688.call(null, key__5687, this$, oldval, newval);
      var temp__3698__auto____5690 = cljs.core.next.call(null, G__5673__5689);
      if(cljs.core.truth_(temp__3698__auto____5690)) {
        var G__5673__5691 = temp__3698__auto____5690;
        var G__5698 = cljs.core.first.call(null, G__5673__5691);
        var G__5699 = G__5673__5691;
        G__5676__5683 = G__5698;
        G__5673__5684 = G__5699;
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
  var this__5692 = this;
  return this$.watches = cljs.core.assoc.call(null, this__5692.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__5693 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__5693.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__5694 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__5694.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__5695 = this;
  return this__5695.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__5696 = this;
  return this__5696.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__5697 = this;
  return o === other
};
cljs.core.atom = function() {
  var atom = null;
  var atom__5706 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__5707 = function() {
    var G__5709__delegate = function(x, p__5700) {
      var map__5701__5702 = p__5700;
      var map__5701__5703 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__5701__5702)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__5701__5702) : map__5701__5702;
      var validator__5704 = cljs.core.get.call(null, map__5701__5703, "\ufdd0'validator");
      var meta__5705 = cljs.core.get.call(null, map__5701__5703, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__5705, validator__5704, null)
    };
    var G__5709 = function(x, var_args) {
      var p__5700 = null;
      if(goog.isDef(var_args)) {
        p__5700 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__5709__delegate.call(this, x, p__5700)
    };
    G__5709.cljs$lang$maxFixedArity = 1;
    G__5709.cljs$lang$applyTo = function(arglist__5710) {
      var x = cljs.core.first(arglist__5710);
      var p__5700 = cljs.core.rest(arglist__5710);
      return G__5709__delegate.call(this, x, p__5700)
    };
    return G__5709
  }();
  atom = function(x, var_args) {
    var p__5700 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__5706.call(this, x);
      default:
        return atom__5707.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__5707.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____5711 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____5711)) {
    var validate__5712 = temp__3698__auto____5711;
    if(cljs.core.truth_(validate__5712.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 2934)))));
    }
  }else {
  }
  var old_value__5713 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__5713, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___5714 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___5715 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___5716 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___5717 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___5718 = function() {
    var G__5720__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__5720 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__5720__delegate.call(this, a, f, x, y, z, more)
    };
    G__5720.cljs$lang$maxFixedArity = 5;
    G__5720.cljs$lang$applyTo = function(arglist__5721) {
      var a = cljs.core.first(arglist__5721);
      var f = cljs.core.first(cljs.core.next(arglist__5721));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5721)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5721))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5721)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5721)))));
      return G__5720__delegate.call(this, a, f, x, y, z, more)
    };
    return G__5720
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___5714.call(this, a, f);
      case 3:
        return swap_BANG___5715.call(this, a, f, x);
      case 4:
        return swap_BANG___5716.call(this, a, f, x, y);
      case 5:
        return swap_BANG___5717.call(this, a, f, x, y, z);
      default:
        return swap_BANG___5718.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___5718.cljs$lang$applyTo;
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
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__5722) {
    var iref = cljs.core.first(arglist__5722);
    var f = cljs.core.first(cljs.core.next(arglist__5722));
    var args = cljs.core.rest(cljs.core.next(arglist__5722));
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
  var gensym__5723 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__5724 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__5723.call(this);
      case 1:
        return gensym__5724.call(this, prefix_string)
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
  var this__5726 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__5726.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__5727 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__5727.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__5727.state, this__5727.f)
  }
  return cljs.core.deref.call(null, this__5727.state)
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
  delay.cljs$lang$applyTo = function(arglist__5728) {
    var body = cljs.core.seq(arglist__5728);
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
    var map__5729__5730 = options;
    var map__5729__5731 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__5729__5730)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__5729__5730) : map__5729__5730;
    var keywordize_keys__5732 = cljs.core.get.call(null, map__5729__5731, "\ufdd0'keywordize-keys");
    var keyfn__5733 = cljs.core.truth_(keywordize_keys__5732) ? cljs.core.keyword : cljs.core.str;
    var f__5739 = function thisfn(x) {
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
                var iter__383__auto____5738 = function iter__5734(s__5735) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__5735__5736 = s__5735;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__5735__5736))) {
                        var k__5737 = cljs.core.first.call(null, s__5735__5736);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__5733.call(null, k__5737), thisfn.call(null, x[k__5737])]), iter__5734.call(null, cljs.core.rest.call(null, s__5735__5736)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__383__auto____5738.call(null, cljs.core.js_keys.call(null, x))
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
    return f__5739.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__5740) {
    var x = cljs.core.first(arglist__5740);
    var options = cljs.core.rest(arglist__5740);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__5741 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__5745__delegate = function(args) {
      var temp__3695__auto____5742 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__5741), args);
      if(cljs.core.truth_(temp__3695__auto____5742)) {
        var v__5743 = temp__3695__auto____5742;
        return v__5743
      }else {
        var ret__5744 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__5741, cljs.core.assoc, args, ret__5744);
        return ret__5744
      }
    };
    var G__5745 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__5745__delegate.call(this, args)
    };
    G__5745.cljs$lang$maxFixedArity = 0;
    G__5745.cljs$lang$applyTo = function(arglist__5746) {
      var args = cljs.core.seq(arglist__5746);
      return G__5745__delegate.call(this, args)
    };
    return G__5745
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__5748 = function(f) {
    while(true) {
      var ret__5747 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__5747))) {
        var G__5751 = ret__5747;
        f = G__5751;
        continue
      }else {
        return ret__5747
      }
      break
    }
  };
  var trampoline__5749 = function() {
    var G__5752__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__5752 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__5752__delegate.call(this, f, args)
    };
    G__5752.cljs$lang$maxFixedArity = 1;
    G__5752.cljs$lang$applyTo = function(arglist__5753) {
      var f = cljs.core.first(arglist__5753);
      var args = cljs.core.rest(arglist__5753);
      return G__5752__delegate.call(this, f, args)
    };
    return G__5752
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__5748.call(this, f);
      default:
        return trampoline__5749.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__5749.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__5754 = function() {
    return rand.call(null, 1)
  };
  var rand__5755 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__5754.call(this);
      case 1:
        return rand__5755.call(this, n)
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
    var k__5757 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__5757, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__5757, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___5766 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___5767 = function(h, child, parent) {
    var or__3548__auto____5758 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____5758)) {
      return or__3548__auto____5758
    }else {
      var or__3548__auto____5759 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____5759)) {
        return or__3548__auto____5759
      }else {
        var and__3546__auto____5760 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____5760)) {
          var and__3546__auto____5761 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____5761)) {
            var and__3546__auto____5762 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____5762)) {
              var ret__5763 = true;
              var i__5764 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____5765 = cljs.core.not.call(null, ret__5763);
                  if(cljs.core.truth_(or__3548__auto____5765)) {
                    return or__3548__auto____5765
                  }else {
                    return cljs.core._EQ_.call(null, i__5764, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__5763
                }else {
                  var G__5769 = isa_QMARK_.call(null, h, child.call(null, i__5764), parent.call(null, i__5764));
                  var G__5770 = i__5764 + 1;
                  ret__5763 = G__5769;
                  i__5764 = G__5770;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____5762
            }
          }else {
            return and__3546__auto____5761
          }
        }else {
          return and__3546__auto____5760
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___5766.call(this, h, child);
      case 3:
        return isa_QMARK___5767.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__5771 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__5772 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__5771.call(this, h);
      case 2:
        return parents__5772.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__5774 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__5775 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__5774.call(this, h);
      case 2:
        return ancestors__5775.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__5777 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__5778 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__5777.call(this, h);
      case 2:
        return descendants__5778.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__5788 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3226)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__5789 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3230)))));
    }
    var tp__5783 = "\ufdd0'parents".call(null, h);
    var td__5784 = "\ufdd0'descendants".call(null, h);
    var ta__5785 = "\ufdd0'ancestors".call(null, h);
    var tf__5786 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____5787 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__5783.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__5785.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__5785.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__5783, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__5786.call(null, "\ufdd0'ancestors".call(null, h), tag, td__5784, parent, ta__5785), "\ufdd0'descendants":tf__5786.call(null, "\ufdd0'descendants".call(null, h), parent, ta__5785, tag, td__5784)})
    }();
    if(cljs.core.truth_(or__3548__auto____5787)) {
      return or__3548__auto____5787
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__5788.call(this, h, tag);
      case 3:
        return derive__5789.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__5795 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__5796 = function(h, tag, parent) {
    var parentMap__5791 = "\ufdd0'parents".call(null, h);
    var childsParents__5792 = cljs.core.truth_(parentMap__5791.call(null, tag)) ? cljs.core.disj.call(null, parentMap__5791.call(null, tag), parent) : cljs.core.set([]);
    var newParents__5793 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__5792)) ? cljs.core.assoc.call(null, parentMap__5791, tag, childsParents__5792) : cljs.core.dissoc.call(null, parentMap__5791, tag);
    var deriv_seq__5794 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__5780_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__5780_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__5780_SHARP_), cljs.core.second.call(null, p1__5780_SHARP_)))
    }, cljs.core.seq.call(null, newParents__5793)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__5791.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__5781_SHARP_, p2__5782_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__5781_SHARP_, p2__5782_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__5794))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__5795.call(this, h, tag);
      case 3:
        return underive__5796.call(this, h, tag, parent)
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
  var xprefs__5798 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____5800 = cljs.core.truth_(function() {
    var and__3546__auto____5799 = xprefs__5798;
    if(cljs.core.truth_(and__3546__auto____5799)) {
      return xprefs__5798.call(null, y)
    }else {
      return and__3546__auto____5799
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____5800)) {
    return or__3548__auto____5800
  }else {
    var or__3548__auto____5802 = function() {
      var ps__5801 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__5801) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__5801), prefer_table))) {
          }else {
          }
          var G__5805 = cljs.core.rest.call(null, ps__5801);
          ps__5801 = G__5805;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____5802)) {
      return or__3548__auto____5802
    }else {
      var or__3548__auto____5804 = function() {
        var ps__5803 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__5803) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__5803), y, prefer_table))) {
            }else {
            }
            var G__5806 = cljs.core.rest.call(null, ps__5803);
            ps__5803 = G__5806;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____5804)) {
        return or__3548__auto____5804
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____5807 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____5807)) {
    return or__3548__auto____5807
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__5816 = cljs.core.reduce.call(null, function(be, p__5808) {
    var vec__5809__5810 = p__5808;
    var k__5811 = cljs.core.nth.call(null, vec__5809__5810, 0, null);
    var ___5812 = cljs.core.nth.call(null, vec__5809__5810, 1, null);
    var e__5813 = vec__5809__5810;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__5811))) {
      var be2__5815 = cljs.core.truth_(function() {
        var or__3548__auto____5814 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____5814)) {
          return or__3548__auto____5814
        }else {
          return cljs.core.dominates.call(null, k__5811, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__5813 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__5815), k__5811, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__5811, " and ", cljs.core.first.call(null, be2__5815), ", and neither is preferred"));
      }
      return be2__5815
    }else {
      return null
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__5816)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__5816));
      return cljs.core.second.call(null, best_entry__5816)
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
    var and__3546__auto____5817 = mf;
    if(cljs.core.truth_(and__3546__auto____5817)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____5817
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____5818 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5818)) {
        return or__3548__auto____5818
      }else {
        var or__3548__auto____5819 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____5819)) {
          return or__3548__auto____5819
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5820 = mf;
    if(cljs.core.truth_(and__3546__auto____5820)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____5820
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____5821 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5821)) {
        return or__3548__auto____5821
      }else {
        var or__3548__auto____5822 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____5822)) {
          return or__3548__auto____5822
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5823 = mf;
    if(cljs.core.truth_(and__3546__auto____5823)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____5823
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____5824 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5824)) {
        return or__3548__auto____5824
      }else {
        var or__3548__auto____5825 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____5825)) {
          return or__3548__auto____5825
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5826 = mf;
    if(cljs.core.truth_(and__3546__auto____5826)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____5826
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____5827 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5827)) {
        return or__3548__auto____5827
      }else {
        var or__3548__auto____5828 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____5828)) {
          return or__3548__auto____5828
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5829 = mf;
    if(cljs.core.truth_(and__3546__auto____5829)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____5829
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____5830 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5830)) {
        return or__3548__auto____5830
      }else {
        var or__3548__auto____5831 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____5831)) {
          return or__3548__auto____5831
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5832 = mf;
    if(cljs.core.truth_(and__3546__auto____5832)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____5832
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____5833 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5833)) {
        return or__3548__auto____5833
      }else {
        var or__3548__auto____5834 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____5834)) {
          return or__3548__auto____5834
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5835 = mf;
    if(cljs.core.truth_(and__3546__auto____5835)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____5835
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____5836 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5836)) {
        return or__3548__auto____5836
      }else {
        var or__3548__auto____5837 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____5837)) {
          return or__3548__auto____5837
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._invoke = function _invoke(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____5838 = mf;
    if(cljs.core.truth_(and__3546__auto____5838)) {
      return mf.cljs$core$IMultiFn$_invoke
    }else {
      return and__3546__auto____5838
    }
  }())) {
    return mf.cljs$core$IMultiFn$_invoke(mf, args)
  }else {
    return function() {
      var or__3548__auto____5839 = cljs.core._invoke[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____5839)) {
        return or__3548__auto____5839
      }else {
        var or__3548__auto____5840 = cljs.core._invoke["_"];
        if(cljs.core.truth_(or__3548__auto____5840)) {
          return or__3548__auto____5840
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-invoke", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_invoke = function do_invoke(mf, dispatch_fn, args) {
  var dispatch_val__5841 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__5842 = cljs.core._get_method.call(null, mf, dispatch_val__5841);
  if(cljs.core.truth_(target_fn__5842)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__5841));
  }
  return cljs.core.apply.call(null, target_fn__5842, args)
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
  var this__5843 = this;
  cljs.core.swap_BANG_.call(null, this__5843.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__5843.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__5843.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__5843.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__5844 = this;
  cljs.core.swap_BANG_.call(null, this__5844.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__5844.method_cache, this__5844.method_table, this__5844.cached_hierarchy, this__5844.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__5845 = this;
  cljs.core.swap_BANG_.call(null, this__5845.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__5845.method_cache, this__5845.method_table, this__5845.cached_hierarchy, this__5845.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__5846 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__5846.cached_hierarchy), cljs.core.deref.call(null, this__5846.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__5846.method_cache, this__5846.method_table, this__5846.cached_hierarchy, this__5846.hierarchy)
  }
  var temp__3695__auto____5847 = cljs.core.deref.call(null, this__5846.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____5847)) {
    var target_fn__5848 = temp__3695__auto____5847;
    return target_fn__5848
  }else {
    var temp__3695__auto____5849 = cljs.core.find_and_cache_best_method.call(null, this__5846.name, dispatch_val, this__5846.hierarchy, this__5846.method_table, this__5846.prefer_table, this__5846.method_cache, this__5846.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____5849)) {
      var target_fn__5850 = temp__3695__auto____5849;
      return target_fn__5850
    }else {
      return cljs.core.deref.call(null, this__5846.method_table).call(null, this__5846.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__5851 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__5851.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__5851.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__5851.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__5851.method_cache, this__5851.method_table, this__5851.cached_hierarchy, this__5851.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__5852 = this;
  return cljs.core.deref.call(null, this__5852.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__5853 = this;
  return cljs.core.deref.call(null, this__5853.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = function(mf, args) {
  var this__5854 = this;
  return cljs.core.do_invoke.call(null, mf, this__5854.dispatch_fn, args)
};
cljs.core.MultiFn.prototype.call = function() {
  var G__5855__delegate = function(_, args) {
    return cljs.core._invoke.call(null, this, args)
  };
  var G__5855 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__5855__delegate.call(this, _, args)
  };
  G__5855.cljs$lang$maxFixedArity = 1;
  G__5855.cljs$lang$applyTo = function(arglist__5856) {
    var _ = cljs.core.first(arglist__5856);
    var args = cljs.core.rest(arglist__5856);
    return G__5855__delegate.call(this, _, args)
  };
  return G__5855
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
    var and__3546__auto____2757 = content;
    if(cljs.core.truth_(and__3546__auto____2757)) {
      return content.domina$DomContent$nodes
    }else {
      return and__3546__auto____2757
    }
  }())) {
    return content.domina$DomContent$nodes(content)
  }else {
    return function() {
      var or__3548__auto____2758 = domina.nodes[goog.typeOf.call(null, content)];
      if(cljs.core.truth_(or__3548__auto____2758)) {
        return or__3548__auto____2758
      }else {
        var or__3548__auto____2759 = domina.nodes["_"];
        if(cljs.core.truth_(or__3548__auto____2759)) {
          return or__3548__auto____2759
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____2760 = nodeseq;
    if(cljs.core.truth_(and__3546__auto____2760)) {
      return nodeseq.domina$DomContent$single_node
    }else {
      return and__3546__auto____2760
    }
  }())) {
    return nodeseq.domina$DomContent$single_node(nodeseq)
  }else {
    return function() {
      var or__3548__auto____2761 = domina.single_node[goog.typeOf.call(null, nodeseq)];
      if(cljs.core.truth_(or__3548__auto____2761)) {
        return or__3548__auto____2761
      }else {
        var or__3548__auto____2762 = domina.single_node["_"];
        if(cljs.core.truth_(or__3548__auto____2762)) {
          return or__3548__auto____2762
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
  if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.t2763))) {
    domina.t2763 = function(class_name, by_class) {
      this.class_name = class_name;
      this.by_class = by_class
    };
    domina.t2763.prototype.domina$DomContent$ = true;
    domina.t2763.prototype.domina$DomContent$nodes = function(_) {
      var this__2764 = this;
      return goog.dom.getElementsByClass.call(null, cljs.core.name.call(null, this__2764.class_name))
    };
    domina.t2763.prototype.domina$DomContent$single_node = function(_) {
      var this__2765 = this;
      return goog.dom.getElementByClass.call(null, cljs.core.name.call(null, this__2765.class_name))
    }
  }else {
  }
  return new domina.t2763(class_name, by_class)
};
domina.children = function children(content) {
  return cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__2766_SHARP_) {
    return p1__2766_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__2767_SHARP_, p2__2768_SHARP_) {
    return goog.dom.insertChildAt.call(null, p1__2767_SHARP_, p2__2768_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2770_SHARP_, p2__2769_SHARP_) {
    return goog.dom.insertSiblingBefore.call(null, p2__2769_SHARP_, p1__2770_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2772_SHARP_, p2__2771_SHARP_) {
    return goog.dom.insertSiblingAfter.call(null, p2__2771_SHARP_, p1__2772_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__2774_SHARP_, p2__2773_SHARP_) {
    return goog.dom.replaceNode.call(null, p2__2773_SHARP_, p1__2774_SHARP_)
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
  var s__2775 = goog.style.getStyle.call(null, domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(cljs.core.not.call(null, goog.string.isEmptySafe.call(null, s__2775)))) {
    return s__2775
  }else {
    return null
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function set_style_BANG_(content, name, value) {
  var G__2776__2777 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2776__2777)) {
    var n__2778 = cljs.core.first.call(null, G__2776__2777);
    var G__2776__2779 = G__2776__2777;
    while(true) {
      goog.style.setStyle.call(null, n__2778, cljs.core.name.call(null, name), value);
      var temp__3698__auto____2780 = cljs.core.next.call(null, G__2776__2779);
      if(cljs.core.truth_(temp__3698__auto____2780)) {
        var G__2776__2781 = temp__3698__auto____2780;
        var G__2782 = cljs.core.first.call(null, G__2776__2781);
        var G__2783 = G__2776__2781;
        n__2778 = G__2782;
        G__2776__2779 = G__2783;
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
  var G__2784__2785 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2784__2785)) {
    var n__2786 = cljs.core.first.call(null, G__2784__2785);
    var G__2784__2787 = G__2784__2785;
    while(true) {
      n__2786.setAttribute(cljs.core.name.call(null, name), value);
      var temp__3698__auto____2788 = cljs.core.next.call(null, G__2784__2787);
      if(cljs.core.truth_(temp__3698__auto____2788)) {
        var G__2784__2789 = temp__3698__auto____2788;
        var G__2790 = cljs.core.first.call(null, G__2784__2789);
        var G__2791 = G__2784__2789;
        n__2786 = G__2790;
        G__2784__2787 = G__2791;
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
    var vec__2792__2793 = pair.split(/\s*:\s*/);
    var k__2794 = cljs.core.nth.call(null, vec__2792__2793, 0, null);
    var v__2795 = cljs.core.nth.call(null, vec__2792__2793, 1, null);
    if(cljs.core.truth_(function() {
      var and__3546__auto____2796 = k__2794;
      if(cljs.core.truth_(and__3546__auto____2796)) {
        return v__2795
      }else {
        return and__3546__auto____2796
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__2794.toLowerCase()), v__2795)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.fromObject([], {}), style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  return domina.parse_style_attributes.call(null, domina.attr.call(null, content, "style"))
};
domina.attrs = function attrs(content) {
  var node__2798 = domina.single_node.call(null, content);
  var attrs__2799 = node__2798.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.map.call(null, function(p1__2797_SHARP_) {
    var attr__2800 = attrs__2799.item(p1__2797_SHARP_);
    return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null, attr__2800.nodeName.toLowerCase())], [attr__2800.nodeValue])
  }, cljs.core.range.call(null, attrs__2799.length)))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__2801__2802 = cljs.core.seq.call(null, styles);
  if(cljs.core.truth_(G__2801__2802)) {
    var G__2804__2806 = cljs.core.first.call(null, G__2801__2802);
    var vec__2805__2807 = G__2804__2806;
    var name__2808 = cljs.core.nth.call(null, vec__2805__2807, 0, null);
    var value__2809 = cljs.core.nth.call(null, vec__2805__2807, 1, null);
    var G__2801__2810 = G__2801__2802;
    var G__2804__2811 = G__2804__2806;
    var G__2801__2812 = G__2801__2810;
    while(true) {
      var vec__2813__2814 = G__2804__2811;
      var name__2815 = cljs.core.nth.call(null, vec__2813__2814, 0, null);
      var value__2816 = cljs.core.nth.call(null, vec__2813__2814, 1, null);
      var G__2801__2817 = G__2801__2812;
      domina.set_style_BANG_.call(null, content, name__2815, value__2816);
      var temp__3698__auto____2818 = cljs.core.next.call(null, G__2801__2817);
      if(cljs.core.truth_(temp__3698__auto____2818)) {
        var G__2801__2819 = temp__3698__auto____2818;
        var G__2820 = cljs.core.first.call(null, G__2801__2819);
        var G__2821 = G__2801__2819;
        G__2804__2811 = G__2820;
        G__2801__2812 = G__2821;
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
  var G__2822__2823 = cljs.core.seq.call(null, attrs);
  if(cljs.core.truth_(G__2822__2823)) {
    var G__2825__2827 = cljs.core.first.call(null, G__2822__2823);
    var vec__2826__2828 = G__2825__2827;
    var name__2829 = cljs.core.nth.call(null, vec__2826__2828, 0, null);
    var value__2830 = cljs.core.nth.call(null, vec__2826__2828, 1, null);
    var G__2822__2831 = G__2822__2823;
    var G__2825__2832 = G__2825__2827;
    var G__2822__2833 = G__2822__2831;
    while(true) {
      var vec__2834__2835 = G__2825__2832;
      var name__2836 = cljs.core.nth.call(null, vec__2834__2835, 0, null);
      var value__2837 = cljs.core.nth.call(null, vec__2834__2835, 1, null);
      var G__2822__2838 = G__2822__2833;
      domina.set_attr_BANG_.call(null, content, name__2836, value__2837);
      var temp__3698__auto____2839 = cljs.core.next.call(null, G__2822__2838);
      if(cljs.core.truth_(temp__3698__auto____2839)) {
        var G__2822__2840 = temp__3698__auto____2839;
        var G__2841 = cljs.core.first.call(null, G__2822__2840);
        var G__2842 = G__2822__2840;
        G__2825__2832 = G__2841;
        G__2822__2833 = G__2842;
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
  var G__2843__2844 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2843__2844)) {
    var node__2845 = cljs.core.first.call(null, G__2843__2844);
    var G__2843__2846 = G__2843__2844;
    while(true) {
      goog.dom.classes.add.call(null, node__2845, class$);
      var temp__3698__auto____2847 = cljs.core.next.call(null, G__2843__2846);
      if(cljs.core.truth_(temp__3698__auto____2847)) {
        var G__2843__2848 = temp__3698__auto____2847;
        var G__2849 = cljs.core.first.call(null, G__2843__2848);
        var G__2850 = G__2843__2848;
        node__2845 = G__2849;
        G__2843__2846 = G__2850;
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
  var G__2851__2852 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2851__2852)) {
    var node__2853 = cljs.core.first.call(null, G__2851__2852);
    var G__2851__2854 = G__2851__2852;
    while(true) {
      goog.dom.classes.remove.call(null, node__2853, class$);
      var temp__3698__auto____2855 = cljs.core.next.call(null, G__2851__2854);
      if(cljs.core.truth_(temp__3698__auto____2855)) {
        var G__2851__2856 = temp__3698__auto____2855;
        var G__2857 = cljs.core.first.call(null, G__2851__2856);
        var G__2858 = G__2851__2856;
        node__2853 = G__2857;
        G__2851__2854 = G__2858;
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
  var text__2859 = function(content) {
    return text.call(null, content, true)
  };
  var text__2860 = function(content, normalize) {
    if(cljs.core.truth_(normalize)) {
      return goog.string.trim.call(null, goog.dom.getTextContent.call(null, domina.single_node.call(null, content)))
    }else {
      return goog.dom.getRawTextContent.call(null, domina.single_node.call(null, content))
    }
  };
  text = function(content, normalize) {
    switch(arguments.length) {
      case 1:
        return text__2859.call(this, content);
      case 2:
        return text__2860.call(this, content, normalize)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return text
}();
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__2862__2863 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2862__2863)) {
    var node__2864 = cljs.core.first.call(null, G__2862__2863);
    var G__2862__2865 = G__2862__2863;
    while(true) {
      goog.dom.setTextContent.call(null, node__2864, value);
      var temp__3698__auto____2866 = cljs.core.next.call(null, G__2862__2865);
      if(cljs.core.truth_(temp__3698__auto____2866)) {
        var G__2862__2867 = temp__3698__auto____2866;
        var G__2868 = cljs.core.first.call(null, G__2862__2867);
        var G__2869 = G__2862__2867;
        node__2864 = G__2868;
        G__2862__2865 = G__2869;
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
  var G__2870__2871 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2870__2871)) {
    var node__2872 = cljs.core.first.call(null, G__2870__2871);
    var G__2870__2873 = G__2870__2871;
    while(true) {
      goog.dom.forms.setValue.call(null, node__2872, value);
      var temp__3698__auto____2874 = cljs.core.next.call(null, G__2870__2873);
      if(cljs.core.truth_(temp__3698__auto____2874)) {
        var G__2870__2875 = temp__3698__auto____2874;
        var G__2876 = cljs.core.first.call(null, G__2870__2875);
        var G__2877 = G__2870__2875;
        node__2872 = G__2876;
        G__2870__2873 = G__2877;
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
  var G__2878__2879 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(cljs.core.truth_(G__2878__2879)) {
    var node__2880 = cljs.core.first.call(null, G__2878__2879);
    var G__2878__2881 = G__2878__2879;
    while(true) {
      node__2880.innerHTML = value;
      var temp__3698__auto____2882 = cljs.core.next.call(null, G__2878__2881);
      if(cljs.core.truth_(temp__3698__auto____2882)) {
        var G__2878__2883 = temp__3698__auto____2882;
        var G__2884 = cljs.core.first.call(null, G__2878__2883);
        var G__2885 = G__2878__2883;
        node__2880 = G__2884;
        G__2878__2881 = G__2885;
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
  var parents__2886 = domina.nodes.call(null, parent_content);
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, parents__2886)))) {
    var G__2887__2888 = cljs.core.seq.call(null, domina.nodes.call(null, child_content));
    if(cljs.core.truth_(G__2887__2888)) {
      var child__2889 = cljs.core.first.call(null, G__2887__2888);
      var G__2887__2890 = G__2887__2888;
      while(true) {
        f.call(null, cljs.core.first.call(null, parents__2886), child__2889);
        var temp__3698__auto____2891 = cljs.core.next.call(null, G__2887__2890);
        if(cljs.core.truth_(temp__3698__auto____2891)) {
          var G__2887__2892 = temp__3698__auto____2891;
          var G__2905 = cljs.core.first.call(null, G__2887__2892);
          var G__2906 = G__2887__2892;
          child__2889 = G__2905;
          G__2887__2890 = G__2906;
          continue
        }else {
        }
        break
      }
    }else {
    }
    var G__2893__2895 = cljs.core.seq.call(null, cljs.core.rest.call(null, parents__2886));
    if(cljs.core.truth_(G__2893__2895)) {
      var parent__2896 = cljs.core.first.call(null, G__2893__2895);
      var G__2893__2897 = G__2893__2895;
      while(true) {
        var G__2894__2898 = cljs.core.seq.call(null, domina.nodes.call(null, domina.clone.call(null, child_content)));
        if(cljs.core.truth_(G__2894__2898)) {
          var child__2899 = cljs.core.first.call(null, G__2894__2898);
          var G__2894__2900 = G__2894__2898;
          while(true) {
            f.call(null, parent__2896, child__2899);
            var temp__3698__auto____2901 = cljs.core.next.call(null, G__2894__2900);
            if(cljs.core.truth_(temp__3698__auto____2901)) {
              var G__2894__2902 = temp__3698__auto____2901;
              var G__2907 = cljs.core.first.call(null, G__2894__2902);
              var G__2908 = G__2894__2902;
              child__2899 = G__2907;
              G__2894__2900 = G__2908;
              continue
            }else {
            }
            break
          }
        }else {
        }
        var temp__3698__auto____2903 = cljs.core.next.call(null, G__2893__2897);
        if(cljs.core.truth_(temp__3698__auto____2903)) {
          var G__2893__2904 = temp__3698__auto____2903;
          var G__2909 = cljs.core.first.call(null, G__2893__2904);
          var G__2910 = G__2893__2904;
          parent__2896 = G__2909;
          G__2893__2897 = G__2910;
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
  var lazy_nodelist__2911 = function(nl) {
    return lazy_nodelist.call(null, nl, 0)
  };
  var lazy_nodelist__2912 = function(nl, n) {
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
        return lazy_nodelist__2911.call(this, nl);
      case 2:
        return lazy_nodelist__2912.call(this, nl, n)
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
  var G__2914 = null;
  var G__2914__2915 = function(nodelist, n) {
    return nodelist.item(n)
  };
  var G__2914__2916 = function(nodelist, n, not_found) {
    if(cljs.core.truth_(nodelist.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, nodelist, n)
    }
  };
  G__2914 = function(nodelist, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2914__2915.call(this, nodelist, n);
      case 3:
        return G__2914__2916.call(this, nodelist, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2914
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
    var G__2918 = null;
    var G__2918__2919 = function(nodelist, n) {
      return nodelist.item(n)
    };
    var G__2918__2920 = function(nodelist, n, not_found) {
      if(cljs.core.truth_(nodelist.length <= n)) {
        return not_found
      }else {
        return cljs.core.nth.call(null, nodelist, n)
      }
    };
    G__2918 = function(nodelist, n, not_found) {
      switch(arguments.length) {
        case 2:
          return G__2918__2919.call(this, nodelist, n);
        case 3:
          return G__2918__2920.call(this, nodelist, n, not_found)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return G__2918
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
  var G__2922 = null;
  var G__2922__2923 = function(coll, n) {
    return coll.item(n)
  };
  var G__2922__2924 = function(coll, n, not_found) {
    if(cljs.core.truth_(coll.length <= n)) {
      return not_found
    }else {
      return cljs.core.nth.call(null, coll, n)
    }
  };
  G__2922 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__2922__2923.call(this, coll, n);
      case 3:
        return G__2922__2924.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__2922
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
  var doc__2449 = goog.dom.getOwnerDocument.call(null, node);
  if(cljs.core.truth_(function() {
    var and__3546__auto____2450 = node.selectSingleNode;
    if(cljs.core.truth_(and__3546__auto____2450)) {
      return doc__2449.setProperty
    }else {
      return and__3546__auto____2450
    }
  }())) {
    doc__2449.setProperty("SelectionLanguage", "XPath");
    return technique_1.call(null, node, path)
  }else {
    if(cljs.core.truth_(doc__2449.evaluate)) {
      return technique_2.call(null, null, doc__2449, node, path)
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
    var result__2451 = doc.evaluate(expr, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result__2451.singleNodeValue
  })
};
domina.xpath.select_nodes = function select_nodes(expr, node) {
  return domina.xpath.select_node_STAR_.call(null, expr, node, function(node, expr) {
    return node.selectNodes(expr)
  }, function(resolver, doc, node, expr) {
    var result__2452 = doc.evaluate(expr, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var num_results__2453 = result__2452.snapshotLength;
    var i__2454 = 0;
    var acc__2455 = null;
    while(true) {
      if(cljs.core.truth_(i__2454 < num_results__2453)) {
        var G__2456 = i__2454 + 1;
        var G__2457 = cljs.core.cons.call(null, result__2452.snapshotItem(i__2454), acc__2455);
        i__2454 = G__2456;
        acc__2455 = G__2457;
        continue
      }else {
        return acc__2455
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
  var xpath__2461 = function(expr) {
    return xpath.call(null, domina.xpath.root_element.call(null), expr)
  };
  var xpath__2462 = function(base, expr) {
    if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null, domina.xpath.t2458))) {
      domina.xpath.t2458 = function(expr, base, xpath) {
        this.expr = expr;
        this.base = base;
        this.xpath = xpath
      };
      domina.xpath.t2458.prototype.domina$DomContent$ = true;
      domina.xpath.t2458.prototype.domina$DomContent$nodes = function(_) {
        var this__2459 = this;
        return cljs.core.mapcat.call(null, cljs.core.partial.call(null, domina.xpath.select_nodes, this__2459.expr), domina.nodes.call(null, this__2459.base))
      };
      domina.xpath.t2458.prototype.domina$DomContent$single_node = function(_) {
        var this__2460 = this;
        return cljs.core.first.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.partial.call(null, domina.xpath.select_node, this__2460.expr), domina.nodes.call(null, this__2460.base))))
      }
    }else {
    }
    return new domina.xpath.t2458(expr, base, xpath)
  };
  xpath = function(base, expr) {
    switch(arguments.length) {
      case 1:
        return xpath__2461.call(this, base);
      case 2:
        return xpath__2462.call(this, base, expr)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return xpath
}();
goog.provide("domina.test");
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
  return cljs.core.map.call(null, function(p__2458) {
    var vec__2459__2460 = p__2458;
    var name__2461 = cljs.core.nth.call(null, vec__2459__2460, 0, null);
    var testfn__2462 = cljs.core.nth.call(null, vec__2459__2460, 1, null);
    return cljs.core.Vector.fromArray([name__2461, domina.test.run_test.call(null, testfn__2462)])
  }, cljs.core.deref.call(null, domina.test.tests))
};
domina.test.reset = function reset() {
  return domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/*"))
};
domina.test.standard_fixture = function standard_fixture() {
  return domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>")
};
domina.test.add_test.call(null, "basic xpath selection", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 52))), cljs.core.hash_map("\ufdd0'line", 52))), cljs.core.hash_map("\ufdd0'line", 52))), cljs.core.hash_map("\ufdd0'line", 52)))));
  }
});
domina.test.add_test.call(null, "basic xpath selection (single node)", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, Element, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'instance?", "\ufdd1'js/Element", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 57))), cljs.core.hash_map("\ufdd0'line", 57))), cljs.core.hash_map("\ufdd0'line", 57)))));
  }
});
domina.test.add_test.call(null, "xpath selection with class specification", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 62))), cljs.core.hash_map("\ufdd0'line", 62))), cljs.core.hash_map("\ufdd0'line", 62))), cljs.core.hash_map("\ufdd0'line", 62)))));
  }
});
domina.test.add_test.call(null, "a relative xpath expression", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body/div[@class='d1']"), "p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 67)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "p"), cljs.core.hash_map("\ufdd0'line", 
    68))), cljs.core.hash_map("\ufdd0'line", 67))), cljs.core.hash_map("\ufdd0'line", 67))), cljs.core.hash_map("\ufdd0'line", 67))), cljs.core.hash_map("\ufdd0'line", 67)))));
  }
});
domina.test.add_test.call(null, "extended selection chaining", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p><span>some text</span></p><p><span>more text</span></p></div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, domina.xpath.xpath.call(null, "//body"), "div"), "p"), "span")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'->", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body"), cljs.core.hash_map("\ufdd0'line", 74)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "div"), cljs.core.hash_map("\ufdd0'line", 75)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", 
    "p"), cljs.core.hash_map("\ufdd0'line", 76)), cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "span"), cljs.core.hash_map("\ufdd0'line", 77))), cljs.core.hash_map("\ufdd0'line", 74))), cljs.core.hash_map("\ufdd0'line", 74))), cljs.core.hash_map("\ufdd0'line", 74))), cljs.core.hash_map("\ufdd0'line", 74)))));
  }
});
domina.test.add_test.call(null, "advanced xpath", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[following-sibling::p[@class='p3']]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[following-sibling::p[@class='p3']]"), cljs.core.hash_map("\ufdd0'line", 81))), cljs.core.hash_map("\ufdd0'line", 81))), cljs.core.hash_map("\ufdd0'line", 81))), cljs.core.hash_map("\ufdd0'line", 81)))));
  }
});
domina.test.add_test.call(null, "look up node by id", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.by_id.call(null, "id1")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-id", "id1"), cljs.core.hash_map("\ufdd0'line", 86))), cljs.core.hash_map("\ufdd0'line", 86))), cljs.core.hash_map("\ufdd0'line", 86))), cljs.core.hash_map("\ufdd0'line", 86)))));
  }
});
domina.test.add_test.call(null, "look up nodes by class", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.by_class.call(null, "p3")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'by-class", "p3"), cljs.core.hash_map("\ufdd0'line", 91))), cljs.core.hash_map("\ufdd0'line", 91))), cljs.core.hash_map("\ufdd0'line", 91))), cljs.core.hash_map("\ufdd0'line", 91)))));
  }
});
domina.test.add_test.call(null, "child selection", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.children.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'children", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 96))), cljs.core.hash_map("\ufdd0'line", 96))), cljs.core.hash_map("\ufdd0'line", 96))), cljs.core.hash_map("\ufdd0'line", 96)))));
  }
});
domina.test.add_test.call(null, "clone a single node", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.clone.call(null, domina.single_node.call(null, domina.xpath.xpath.call(null, "//p"))))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'single-node", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 101))), cljs.core.hash_map("\ufdd0'line", 101))), cljs.core.hash_map("\ufdd0'line", 101))), cljs.core.hash_map("\ufdd0'line", 
    101))), cljs.core.hash_map("\ufdd0'line", 101)))));
  }
});
domina.test.add_test.call(null, "clone multiple nodes", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.clone.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p"))))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'clone", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 106))), cljs.core.hash_map("\ufdd0'line", 106))), cljs.core.hash_map("\ufdd0'line", 106))), cljs.core.hash_map("\ufdd0'line", 
    106))), cljs.core.hash_map("\ufdd0'line", 106)))));
  }
});
domina.test.add_test.call(null, "append a single child to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended1'>test</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112))), cljs.core.hash_map("\ufdd0'line", 112)))));
  }
});
domina.test.add_test.call(null, "append multiple children to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 118))), cljs.core.hash_map("\ufdd0'line", 118))), cljs.core.hash_map("\ufdd0'line", 118))), cljs.core.hash_map("\ufdd0'line", 118)))));
  }
});
domina.test.add_test.call(null, "append a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "<span>!!</span>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span"), cljs.core.hash_map("\ufdd0'line", 125))), cljs.core.hash_map("\ufdd0'line", 125))), cljs.core.hash_map("\ufdd0'line", 125))), cljs.core.hash_map("\ufdd0'line", 125)))));
  }
});
domina.test.add_test.call(null, "append multiple children to multiple parents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div/p"), "some <span class='foo'>more</span> text");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div/p/span[@class='foo']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div/p/span[@class='foo']"), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132))), cljs.core.hash_map("\ufdd0'line", 132)))));
  }
});
domina.test.add_test.call(null, "prepend a single child to a single parent", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>2</div><div>3</div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "1", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "1", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[1]"), cljs.core.hash_map("\ufdd0'line", 138))), cljs.core.hash_map("\ufdd0'line", 138))), cljs.core.hash_map("\ufdd0'line", 138)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "2", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[2]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "2", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[2]"), cljs.core.hash_map("\ufdd0'line", 139))), cljs.core.hash_map("\ufdd0'line", 139))), cljs.core.hash_map("\ufdd0'line", 139)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "3", domina.text.call(null, domina.xpath.xpath.call(null, "//body/div[3]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "3", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div[3]"), cljs.core.hash_map("\ufdd0'line", 140))), cljs.core.hash_map("\ufdd0'line", 140))), cljs.core.hash_map("\ufdd0'line", 140)))));
  }
});
domina.test.add_test.call(null, "prepend a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p>2</p></div><div><p>2</p></div>");
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body/div"), "<p>1</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[text()='2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[text()='2']"), cljs.core.hash_map("\ufdd0'line", 146))), cljs.core.hash_map("\ufdd0'line", 146))), cljs.core.hash_map("\ufdd0'line", 146))), cljs.core.hash_map("\ufdd0'line", 146)))));
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
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='testInserts']/p"), cljs.core.hash_map("\ufdd0'line", 158))), cljs.core.hash_map("\ufdd0'line", 158))), cljs.core.hash_map("\ufdd0'line", 158))), cljs.core.hash_map("\ufdd0'line", 158)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/preceding-sibling::*")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 159))), cljs.core.hash_map("\ufdd0'line", 159))), cljs.core.hash_map("\ufdd0'line", 159))), cljs.core.hash_map("\ufdd0'line", 159)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='i2']/following-sibling::*")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160))), cljs.core.hash_map("\ufdd0'line", 160)))));
  }
});
domina.test.add_test.call(null, "Insert a single child to multiple parents", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert1'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='testInserts' id='testInsert2'></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i1'></p>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i3'></p>");
  domina.insert_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='testInserts']"), "<p class='i2'></p>", 1);
  var G__2463__2464 = cljs.core.seq.call(null, cljs.core.Vector.fromArray([domina.xpath.xpath.call(null, "//div[@id='testInsert1']"), domina.xpath.xpath.call(null, "//div[@id='testInsert2']")]));
  if(cljs.core.truth_(G__2463__2464)) {
    var children__2465 = cljs.core.first.call(null, G__2463__2464);
    var G__2463__2466 = G__2463__2464;
    while(true) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__2465, "p")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p"), cljs.core.hash_map("\ufdd0'line", 176))), cljs.core.hash_map("\ufdd0'line", 176))), cljs.core.hash_map("\ufdd0'line", 176))), cljs.core.hash_map("\ufdd0'line", 176)))));
      }
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__2465, "p[@class='i2']/preceding-sibling::*")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/preceding-sibling::*"), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 177))), cljs.core.hash_map("\ufdd0'line", 
        177)))));
      }
      if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, children__2465, "p[@class='i2']/following-sibling::*")))))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "\ufdd1'children", "p[@class='i2']/following-sibling::*"), cljs.core.hash_map("\ufdd0'line", 179))), cljs.core.hash_map("\ufdd0'line", 179))), cljs.core.hash_map("\ufdd0'line", 179))), cljs.core.hash_map("\ufdd0'line", 
        179)))));
      }
      var temp__3698__auto____2467 = cljs.core.next.call(null, G__2463__2466);
      if(cljs.core.truth_(temp__3698__auto____2467)) {
        var G__2463__2468 = temp__3698__auto____2467;
        var G__2469 = cljs.core.first.call(null, G__2463__2468);
        var G__2470 = G__2463__2468;
        children__2465 = G__2469;
        G__2463__2466 = G__2470;
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
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 185))), cljs.core.hash_map("\ufdd0'line", 185))), cljs.core.hash_map("\ufdd0'line", 185))), cljs.core.hash_map("\ufdd0'line", 185)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended1']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended1']"), cljs.core.hash_map("\ufdd0'line", 187))), cljs.core.hash_map("\ufdd0'line", 187))), cljs.core.hash_map("\ufdd0'line", 187))), cljs.core.hash_map("\ufdd0'line", 187)))));
  }
});
domina.test.add_test.call(null, "destroy multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p class='appended2'>app1</p><p class='appended2'>app2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 193))), cljs.core.hash_map("\ufdd0'line", 193))), cljs.core.hash_map("\ufdd0'line", 193))), cljs.core.hash_map("\ufdd0'line", 193)))));
  }
  domina.destroy_BANG_.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/p[@class='appended2']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/p[@class='appended2']"), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195))), cljs.core.hash_map("\ufdd0'line", 195)))));
  }
});
domina.test.add_test.call(null, "detach and reattach a single node", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  var n__2471 = domina.detach_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 201))), cljs.core.hash_map("\ufdd0'line", 201))), cljs.core.hash_map("\ufdd0'line", 201))), cljs.core.hash_map("\ufdd0'line", 201)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"), n__2471);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='p3']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='p3']"), cljs.core.hash_map("\ufdd0'line", 203))), cljs.core.hash_map("\ufdd0'line", 203))), cljs.core.hash_map("\ufdd0'line", 203))), cljs.core.hash_map("\ufdd0'line", 203)))));
  }
});
domina.test.add_test.call(null, "detach and reattach multiple nodes", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  var n__2472 = domina.detach_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 209))), cljs.core.hash_map("\ufdd0'line", 209))), cljs.core.hash_map("\ufdd0'line", 209))), cljs.core.hash_map("\ufdd0'line", 209)))));
  }
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"), n__2472);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 3, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 3, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/p"), cljs.core.hash_map("\ufdd0'line", 211))), cljs.core.hash_map("\ufdd0'line", 211))), cljs.core.hash_map("\ufdd0'line", 211))), cljs.core.hash_map("\ufdd0'line", 211)))));
  }
});
domina.test.add_test.call(null, "clear a node's contents", function() {
  domina.test.reset.call(null);
  domina.test.standard_fixture.call(null);
  domina.destroy_children_BANG_.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']"));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']"), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217))), cljs.core.hash_map("\ufdd0'line", 217)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@class='d1']/*")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@class='d1']/*"), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218))), cljs.core.hash_map("\ufdd0'line", 218)))));
  }
});
domina.test.add_test.call(null, "insert-before! with a single reference and single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before']"), cljs.core.hash_map("\ufdd0'line", 224))), cljs.core.hash_map("\ufdd0'line", 224))), cljs.core.hash_map("\ufdd0'line", 224))), cljs.core.hash_map("\ufdd0'line", 
    224)))));
  }
});
domina.test.add_test.call(null, "insert-before! with a single reference and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>before1</p><p>before2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 230))), cljs.core.hash_map("\ufdd0'line", 230))), cljs.core.hash_map("\ufdd0'line", 230))), cljs.core.hash_map("\ufdd0'line", 
    230)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 231))), cljs.core.hash_map("\ufdd0'line", 
    231)))));
  }
});
domina.test.add_test.call(null, "insert-before! with multiple reference nodes and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_before_BANG_.call(null, domina.nodes.call(null, domina.by_class.call(null, "ref")), "<p>before</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238))), cljs.core.hash_map("\ufdd0'line", 238)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref1']/preceding-sibling::p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239))), cljs.core.hash_map("\ufdd0'line", 239)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref2']/preceding-sibling::p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/preceding-sibling::p"), cljs.core.hash_map("\ufdd0'line", 240))), cljs.core.hash_map("\ufdd0'line", 240))), cljs.core.hash_map("\ufdd0'line", 240))), cljs.core.hash_map("\ufdd0'line", 240)))));
  }
});
domina.test.add_test.call(null, "insert-after! with a single reference and single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>after</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after']"), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 247))), cljs.core.hash_map("\ufdd0'line", 
    247)))));
  }
});
domina.test.add_test.call(null, "insert-after! with a single reference and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='ref'>Some content</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_id.call(null, "ref")), "<p>after1</p><p>after2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 253))), cljs.core.hash_map("\ufdd0'line", 
    253)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 254))), cljs.core.hash_map("\ufdd0'line", 
    254)))));
  }
});
domina.test.add_test.call(null, "insert-after! with multiple reference nodes and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref1'>content1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='ref' id='ref2'>content2</div>");
  domina.insert_after_BANG_.call(null, domina.nodes.call(null, domina.by_class.call(null, "ref")), "<p>after</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 261))), cljs.core.hash_map("\ufdd0'line", 261))), cljs.core.hash_map("\ufdd0'line", 261))), cljs.core.hash_map("\ufdd0'line", 261)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref1']/following-sibling::p")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref1']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262))), cljs.core.hash_map("\ufdd0'line", 262)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//div[@id='ref2']/following-sibling::p")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[@id='ref2']/following-sibling::p"), cljs.core.hash_map("\ufdd0'line", 263))), cljs.core.hash_map("\ufdd0'line", 263))), cljs.core.hash_map("\ufdd0'line", 263))), cljs.core.hash_map("\ufdd0'line", 263)))));
  }
});
domina.test.add_test.call(null, "swap-content! with a single reference node and a single new node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@id='before']"), "<p id='after'>fixed</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 269))), cljs.core.hash_map("\ufdd0'line", 269))), cljs.core.hash_map("\ufdd0'line", 269))), cljs.core.hash_map("\ufdd0'line", 269)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='after']"), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270))), cljs.core.hash_map("\ufdd0'line", 270)))));
  }
});
domina.test.add_test.call(null, "swap-content! with a single reference node and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p id='before'>TYPO</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@id='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@id='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@id='before']"), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276))), cljs.core.hash_map("\ufdd0'line", 276)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277))), cljs.core.hash_map("\ufdd0'line", 277)))));
  }
});
domina.test.add_test.call(null, "swap-content! with multiple reference nodes and multiple new nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='before'>TYPO-1</p></div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='before'>TYPO-2</p></div>");
  domina.swap_content_BANG_.call(null, domina.xpath.xpath.call(null, "//p[@class='before']"), "<p class='after'>fixed1</p><p class='after'>fixed2</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='before']")))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 0, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='before']"), cljs.core.hash_map("\ufdd0'line", 284))), cljs.core.hash_map("\ufdd0'line", 284))), cljs.core.hash_map("\ufdd0'line", 284))), cljs.core.hash_map("\ufdd0'line", 284)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 4, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//p[@class='after']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 4, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[@class='after']"), cljs.core.hash_map("\ufdd0'line", 285))), cljs.core.hash_map("\ufdd0'line", 285))), cljs.core.hash_map("\ufdd0'line", 285))), cljs.core.hash_map("\ufdd0'line", 285)))));
  }
});
domina.test.add_test.call(null, "can retrieve a css property value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), '<div style="background-color: maroon;">Test</div>');
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "maroon", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 292)), "background-color"), cljs.core.hash_map("\ufdd0'line", 292))), cljs.core.hash_map("\ufdd0'line", 292)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "maroon", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "maroon", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 293)), "\ufdd0'background-color"), cljs.core.hash_map("\ufdd0'line", 293))), cljs.core.hash_map("\ufdd0'line", 293)))));
  }
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'no-such-style")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 294)), "\ufdd0'no-such-style"), cljs.core.hash_map("\ufdd0'line", 294))), cljs.core.hash_map("\ufdd0'line", 294)))));
  }
});
domina.test.add_test.call(null, "can retrieve an HTML attribute value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), '<div height="42">Content!</div>');
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 299)), "height"), cljs.core.hash_map("\ufdd0'line", 299))), cljs.core.hash_map("\ufdd0'line", 299)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 300)), "\ufdd0'height"), cljs.core.hash_map("\ufdd0'line", 300))), cljs.core.hash_map("\ufdd0'line", 300)))));
  }
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "\ufdd0'no-such-attr:c")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'nil?", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 301)), "\ufdd0'no-such-attr:c"), cljs.core.hash_map("\ufdd0'line", 301))), cljs.core.hash_map("\ufdd0'line", 301)))));
  }
});
domina.test.add_test.call(null, "can set a css property on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color", "red");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "\ufdd0'background-color", "green");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 308)), "background-color"), cljs.core.hash_map("\ufdd0'line", 308))), cljs.core.hash_map("\ufdd0'line", 308)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "green", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "background-color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "green", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 309)), "background-color"), cljs.core.hash_map("\ufdd0'line", 309))), cljs.core.hash_map("\ufdd0'line", 309)))));
  }
});
domina.test.add_test.call(null, "can set a css property on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_style_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "color", "red");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 315)), "color"), cljs.core.hash_map("\ufdd0'line", 315))), cljs.core.hash_map("\ufdd0'line", 315)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 316)), "color"), cljs.core.hash_map("\ufdd0'line", 316))), cljs.core.hash_map("\ufdd0'line", 316)))));
  }
});
domina.test.add_test.call(null, "can set a html attribute on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width", 42);
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "\ufdd0'width", 42);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 323)), "width"), cljs.core.hash_map("\ufdd0'line", 323))), cljs.core.hash_map("\ufdd0'line", 323)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 324)), "width"), cljs.core.hash_map("\ufdd0'line", 324))), cljs.core.hash_map("\ufdd0'line", 324)))));
  }
});
domina.test.add_test.call(null, "can set a html attribute on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attr_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "width", 42);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 330)), "width"), cljs.core.hash_map("\ufdd0'line", 330))), cljs.core.hash_map("\ufdd0'line", 330)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 331)), "width"), cljs.core.hash_map("\ufdd0'line", 331))), cljs.core.hash_map("\ufdd0'line", 331)))));
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
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'color", "red", "\ufdd0'background-color", "black"), cljs.core.with_meta(cljs.core.list("\ufdd1'styles", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 339))), cljs.core.hash_map("\ufdd0'line", 339))), cljs.core.hash_map("\ufdd0'line", 338)))));
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
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", cljs.core.hash_map("\ufdd0'width", "42", "\ufdd0'height", "24"), cljs.core.with_meta(cljs.core.list("\ufdd1'attrs", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 347))), cljs.core.hash_map("\ufdd0'line", 347))), cljs.core.hash_map("\ufdd0'line", 346)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_styles_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 354)), "background-color"), cljs.core.hash_map("\ufdd0'line", 354))), cljs.core.hash_map("\ufdd0'line", 354)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 355)), "color"), cljs.core.hash_map("\ufdd0'line", 355))), cljs.core.hash_map("\ufdd0'line", 355)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_styles_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'background-color"], {"\ufdd0'color":"red", "\ufdd0'background-color":"black"}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 362)), "background-color"), cljs.core.hash_map("\ufdd0'line", 362))), cljs.core.hash_map("\ufdd0'line", 362)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[1]"), "color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 363)), "color"), cljs.core.hash_map("\ufdd0'line", 363))), cljs.core.hash_map("\ufdd0'line", 363)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "black", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "background-color")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "black", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 364)), "background-color"), cljs.core.hash_map("\ufdd0'line", 364))), cljs.core.hash_map("\ufdd0'line", 364)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "red", domina.style.call(null, domina.xpath.xpath.call(null, "//div[2]"), "color")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "red", cljs.core.with_meta(cljs.core.list("\ufdd1'style", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 365)), "color"), cljs.core.hash_map("\ufdd0'line", 365))), cljs.core.hash_map("\ufdd0'line", 365)))));
  }
});
domina.test.add_test.call(null, "can set multiple HTML attributes on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.set_attrs_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 372)), "width"), cljs.core.hash_map("\ufdd0'line", 372))), cljs.core.hash_map("\ufdd0'line", 372)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div"), "height")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 373)), "height"), cljs.core.hash_map("\ufdd0'line", 373))), cljs.core.hash_map("\ufdd0'line", 373)))));
  }
});
domina.test.add_test.call(null, "can set multiple CSS styles on multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.set_attrs_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), cljs.core.ObjMap.fromObject(["\ufdd0'width", "\ufdd0'height"], {"\ufdd0'width":42, "\ufdd0'height":24}));
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 380)), "width"), cljs.core.hash_map("\ufdd0'line", 380))), cljs.core.hash_map("\ufdd0'line", 380)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[1]"), "height")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 381)), "height"), cljs.core.hash_map("\ufdd0'line", 381))), cljs.core.hash_map("\ufdd0'line", 381)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "42", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "width")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "42", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 382)), "width"), cljs.core.hash_map("\ufdd0'line", 382))), cljs.core.hash_map("\ufdd0'line", 382)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "24", domina.attr.call(null, domina.xpath.xpath.call(null, "//div[2]"), "height")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "24", cljs.core.with_meta(cljs.core.list("\ufdd1'attr", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 383)), "height"), cljs.core.hash_map("\ufdd0'line", 383))), cljs.core.hash_map("\ufdd0'line", 383)))));
  }
});
domina.test.add_test.call(null, "test the has-class? function", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1'>1</div>");
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class2'>2</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 389)), "class1"), cljs.core.hash_map("\ufdd0'line", 389))), cljs.core.hash_map("\ufdd0'line", 389)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 390)), "class2"), cljs.core.hash_map("\ufdd0'line", 390))), cljs.core.hash_map("\ufdd0'line", 390)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 391)), "class2"), cljs.core.hash_map("\ufdd0'line", 391))), cljs.core.hash_map("\ufdd0'line", 391)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 392)), "class1"), cljs.core.hash_map("\ufdd0'line", 392))), cljs.core.hash_map("\ufdd0'line", 392)))));
  }
});
domina.test.add_test.call(null, "can add a CSS class to a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div>");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class2");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 399)), "class1"), cljs.core.hash_map("\ufdd0'line", 399))), cljs.core.hash_map("\ufdd0'line", 399)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 400)), "class2"), cljs.core.hash_map("\ufdd0'line", 400))), cljs.core.hash_map("\ufdd0'line", 400)))));
  }
});
domina.test.add_test.call(null, "can add a CSS class to multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div>1</div><div>2</div>");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  domina.add_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class2");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 407)), "class1"), cljs.core.hash_map("\ufdd0'line", 407))), cljs.core.hash_map("\ufdd0'line", 407)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 408)), "class1"), cljs.core.hash_map("\ufdd0'line", 408))), cljs.core.hash_map("\ufdd0'line", 408)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 409)), "class2"), cljs.core.hash_map("\ufdd0'line", 409))), cljs.core.hash_map("\ufdd0'line", 409)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 410)), "class2"), cljs.core.hash_map("\ufdd0'line", 410))), cljs.core.hash_map("\ufdd0'line", 410)))));
  }
});
domina.test.add_test.call(null, "can remove a CSS class from a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2'>1</div>");
  domina.remove_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 416)), "class1"), cljs.core.hash_map("\ufdd0'line", 416))), cljs.core.hash_map("\ufdd0'line", 416)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 417)), "class2"), cljs.core.hash_map("\ufdd0'line", 417))), cljs.core.hash_map("\ufdd0'line", 417)))));
  }
});
domina.test.add_test.call(null, "can remove a CSS class from a multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
  domina.remove_class_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "class1");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 423)), "class1"), cljs.core.hash_map("\ufdd0'line", 423))), cljs.core.hash_map("\ufdd0'line", 423)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[1]"), "class2")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[1]"), cljs.core.hash_map("\ufdd0'line", 424)), "class2"), cljs.core.hash_map("\ufdd0'line", 424))), cljs.core.hash_map("\ufdd0'line", 424)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, false, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class1")))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", false, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 425)), "class1"), cljs.core.hash_map("\ufdd0'line", 425))), cljs.core.hash_map("\ufdd0'line", 425)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, true, domina.has_class_QMARK_.call(null, domina.xpath.xpath.call(null, "//div[2]"), "class2")))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", true, cljs.core.with_meta(cljs.core.list("\ufdd1'has-class?", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div[2]"), cljs.core.hash_map("\ufdd0'line", 426)), "class2"), cljs.core.hash_map("\ufdd0'line", 426))), cljs.core.hash_map("\ufdd0'line", 426)))));
  }
});
domina.test.add_test.call(null, "can get a list of all css classes for a node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div class='class1 class2 class3'>1</div>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.Vector.fromArray(["class1", "class2", "class3"]), domina.classes.call(null, domina.xpath.xpath.call(null, "//div"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", new cljs.core.Vector(null, ["class1", "class2", "class3"]), cljs.core.with_meta(cljs.core.list("\ufdd1'classes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 431))), cljs.core.hash_map("\ufdd0'line", 431))), cljs.core.hash_map("\ufdd0'line", 431)))));
  }
});
domina.test.add_test.call(null, "can retrieve the text value of a node with normalization.", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p>\n\n   Some text.  \n  </p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some text.", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 436))), cljs.core.hash_map("\ufdd0'line", 436))), cljs.core.hash_map("\ufdd0'line", 436)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Some text.", domina.text.call(null, domina.xpath.xpath.call(null, "//p"), true)))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Some text.", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 437)), true), cljs.core.hash_map("\ufdd0'line", 437))), cljs.core.hash_map("\ufdd0'line", 437)))));
  }
});
domina.test.add_test.call(null, "can set text on a single node", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p></p>");
  domina.set_text_BANG_.call(null, domina.xpath.xpath.call(null, "//p"), "Hello world!");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p"), cljs.core.hash_map("\ufdd0'line", 450))), cljs.core.hash_map("\ufdd0'line", 450))), cljs.core.hash_map("\ufdd0'line", 450)))));
  }
});
domina.test.add_test.call(null, "can set text on a multiple nodes", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<p></p><p></p>");
  domina.set_text_BANG_.call(null, domina.xpath.xpath.call(null, "//p"), "Hello world!");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[1]"), cljs.core.hash_map("\ufdd0'line", 456))), cljs.core.hash_map("\ufdd0'line", 456))), cljs.core.hash_map("\ufdd0'line", 456)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Hello world!", domina.text.call(null, domina.xpath.xpath.call(null, "//p[2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Hello world!", cljs.core.with_meta(cljs.core.list("\ufdd1'text", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//p[2]"), cljs.core.hash_map("\ufdd0'line", 457))), cljs.core.hash_map("\ufdd0'line", 457))), cljs.core.hash_map("\ufdd0'line", 457)))));
  }
});
domina.test.add_test.call(null, "can get a form field value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test' value='Test Value'></input></form>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 462))), cljs.core.hash_map("\ufdd0'line", 462))), cljs.core.hash_map("\ufdd0'line", 462)))));
  }
});
domina.test.add_test.call(null, "can set a form field value", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test'></input></form>");
  domina.set_value_BANG_.call(null, domina.xpath.xpath.call(null, "//input"), "Test Value");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input"), cljs.core.hash_map("\ufdd0'line", 468))), cljs.core.hash_map("\ufdd0'line", 468))), cljs.core.hash_map("\ufdd0'line", 468)))));
  }
});
domina.test.add_test.call(null, "can set multiple form field values", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
  domina.set_value_BANG_.call(null, domina.xpath.xpath.call(null, "//input"), "Test Value");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input[1]"))))) {
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[1]"), cljs.core.hash_map("\ufdd0'line", 474))), cljs.core.hash_map("\ufdd0'line", 474))), cljs.core.hash_map("\ufdd0'line", 474)))));
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, "Test Value", domina.value.call(null, domina.xpath.xpath.call(null, "//input[2]"))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", "Test Value", cljs.core.with_meta(cljs.core.list("\ufdd1'value", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//input[2]"), cljs.core.hash_map("\ufdd0'line", 475))), cljs.core.hash_map("\ufdd0'line", 475))), cljs.core.hash_map("\ufdd0'line", 475)))));
  }
});
domina.test.add_test.call(null, "can get a node's innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div><p class='foobar'>some text</p></div>");
  if(cljs.core.truth_(function() {
    var or__3548__auto____2473 = cljs.core._EQ_.call(null, '<p class="foobar">some text</p>', domina.html.call(null, domina.xpath.xpath.call(null, "//div")));
    if(cljs.core.truth_(or__3548__auto____2473)) {
      return or__3548__auto____2473
    }else {
      return cljs.core._EQ_.call(null, "<P class=foobar>some text</P>", domina.html.call(null, domina.xpath.xpath.call(null, "//div")))
    }
  }())) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'or", cljs.core.with_meta(cljs.core.list("\ufdd1'=", '<p class="foobar">some text</p>', cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 481))), cljs.core.hash_map("\ufdd0'line", 481))), cljs.core.hash_map("\ufdd0'line", 481)), cljs.core.with_meta(cljs.core.list("\ufdd1'=", 
    "<P class=foobar>some text</P>", cljs.core.with_meta(cljs.core.list("\ufdd1'html", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//div"), cljs.core.hash_map("\ufdd0'line", 482))), cljs.core.hash_map("\ufdd0'line", 482))), cljs.core.hash_map("\ufdd0'line", 482))), cljs.core.hash_map("\ufdd0'line", 481)))));
  }
});
domina.test.add_test.call(null, "can set a node's innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div></div>");
  domina.set_html_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "<p class='foobar'>some text</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[@class='foobar']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 1, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 488))), cljs.core.hash_map("\ufdd0'line", 488))), cljs.core.hash_map("\ufdd0'line", 488))), cljs.core.hash_map("\ufdd0'line", 488)))));
  }
});
domina.test.add_test.call(null, "can set multiple node's innerHTML", function() {
  domina.test.reset.call(null);
  domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div></div><div></div>");
  domina.set_html_BANG_.call(null, domina.xpath.xpath.call(null, "//div"), "<p class='foobar'>some text</p>");
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 2, cljs.core.count.call(null, domina.nodes.call(null, domina.xpath.xpath.call(null, "//body/div/p[@class='foobar']")))))) {
    return null
  }else {
    throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'=", 2, cljs.core.with_meta(cljs.core.list("\ufdd1'count", cljs.core.with_meta(cljs.core.list("\ufdd1'nodes", cljs.core.with_meta(cljs.core.list("\ufdd1'xpath", "//body/div/p[@class='foobar']"), cljs.core.hash_map("\ufdd0'line", 494))), cljs.core.hash_map("\ufdd0'line", 494))), cljs.core.hash_map("\ufdd0'line", 494))), cljs.core.hash_map("\ufdd0'line", 494)))));
  }
});
domina.test.report = function report(test_results) {
  domina.test.reset.call(null);
  var G__2474__2475 = cljs.core.seq.call(null, test_results);
  if(cljs.core.truth_(G__2474__2475)) {
    var G__2477__2479 = cljs.core.first.call(null, G__2474__2475);
    var vec__2478__2480 = G__2477__2479;
    var name__2481 = cljs.core.nth.call(null, vec__2478__2480, 0, null);
    var result__2482 = cljs.core.nth.call(null, vec__2478__2480, 1, null);
    var G__2474__2483 = G__2474__2475;
    var G__2477__2484 = G__2477__2479;
    var G__2474__2485 = G__2474__2483;
    while(true) {
      var vec__2486__2487 = G__2477__2484;
      var name__2488 = cljs.core.nth.call(null, vec__2486__2487, 0, null);
      var result__2489 = cljs.core.nth.call(null, vec__2486__2487, 1, null);
      var G__2474__2490 = G__2474__2485;
      var result_div__2491 = domina.single_node.call(null, "<div class='test-result'></div>");
      domina.set_text_BANG_.call(null, result_div__2491, name__2488);
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, result__2489, null)))) {
        domina.add_class_BANG_.call(null, result_div__2491, "failed");
        domina.append_BANG_.call(null, result_div__2491, cljs.core.str.call(null, "<div class='message'>", result__2489, "</div>"))
      }else {
        domina.add_class_BANG_.call(null, result_div__2491, "passed")
      }
      domina.append_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), result_div__2491);
      var temp__3698__auto____2492 = cljs.core.next.call(null, G__2474__2490);
      if(cljs.core.truth_(temp__3698__auto____2492)) {
        var G__2474__2493 = temp__3698__auto____2492;
        var G__2495 = cljs.core.first.call(null, G__2474__2493);
        var G__2496 = G__2474__2493;
        G__2477__2484 = G__2495;
        G__2474__2485 = G__2496;
        continue
      }else {
      }
      break
    }
  }else {
  }
  domina.prepend_BANG_.call(null, domina.xpath.xpath.call(null, "//body"), "<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
  domina.set_text_BANG_.call(null, domina.by_id.call(null, "total-tests"), cljs.core.count.call(null, test_results));
  var failure_count__2494 = cljs.core.count.call(null, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, cljs.core.second, test_results)));
  domina.set_text_BANG_.call(null, domina.by_id.call(null, "total-failures"), failure_count__2494);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, failure_count__2494))) {
    return domina.add_class_BANG_.call(null, domina.by_id.call(null, "test-summary"), "passed")
  }else {
    return domina.add_class_BANG_.call(null, domina.by_id.call(null, "test-summary"), "failed")
  }
};
domina.test.test_results = cljs.core.doall.call(null, domina.test.run_tests.call(null));
domina.test.report.call(null, domina.test.test_results);
