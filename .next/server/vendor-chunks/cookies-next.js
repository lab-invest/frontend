"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookies-next";
exports.ids = ["vendor-chunks/cookies-next"];
exports.modules = {

/***/ "(ssr)/./node_modules/cookies-next/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/cookies-next/lib/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;\nvar cookie_1 = __webpack_require__(/*! cookie */ \"(ssr)/./node_modules/cookie/index.js\");\nvar isClientSide = function () { return typeof window !== 'undefined'; };\nvar isCookiesFromAppRouter = function (cookieStore) {\n    if (!cookieStore)\n        return false;\n    return ('getAll' in cookieStore &&\n        'set' in cookieStore &&\n        typeof cookieStore.getAll === 'function' &&\n        typeof cookieStore.set === 'function');\n};\nvar isContextFromAppRouter = function (context) {\n    return ((!!(context === null || context === void 0 ? void 0 : context.req) && 'cookies' in context.req && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.req.cookies)) ||\n        (!!(context === null || context === void 0 ? void 0 : context.res) && 'cookies' in context.res && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.res.cookies)) ||\n        (!!(context === null || context === void 0 ? void 0 : context.cookies) && isCookiesFromAppRouter(context.cookies())));\n};\nvar transformAppRouterCookies = function (cookies) {\n    var _cookies = {};\n    cookies.getAll().forEach(function (_a) {\n        var name = _a.name, value = _a.value;\n        _cookies[name] = value;\n    });\n    return _cookies;\n};\nvar stringify = function (value) {\n    try {\n        if (typeof value === 'string') {\n            return value;\n        }\n        var stringifiedValue = JSON.stringify(value);\n        return stringifiedValue;\n    }\n    catch (e) {\n        return value;\n    }\n};\nvar decode = function (str) {\n    if (!str)\n        return str;\n    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n};\nvar getCookies = function (options) {\n    if (isContextFromAppRouter(options)) {\n        if (options === null || options === void 0 ? void 0 : options.req) {\n            return transformAppRouterCookies(options.req.cookies);\n        }\n        if (options === null || options === void 0 ? void 0 : options.cookies) {\n            return transformAppRouterCookies(options.cookies());\n        }\n    }\n    var req;\n    // DefaultOptions['req] can be casted here because is narrowed by using the fn: isContextFromAppRouter\n    if (options)\n        req = options.req;\n    if (!isClientSide()) {\n        // if cookie-parser is used in project get cookies from ctx.req.cookies\n        // if cookie-parser isn't used in project get cookies from ctx.req.headers.cookie\n        if (req && req.cookies)\n            return req.cookies;\n        if (req && req.headers.cookie)\n            return (0, cookie_1.parse)(req.headers.cookie);\n        return {};\n    }\n    var _cookies = {};\n    var documentCookies = document.cookie ? document.cookie.split('; ') : [];\n    for (var i = 0, len = documentCookies.length; i < len; i++) {\n        var cookieParts = documentCookies[i].split('=');\n        var _cookie = cookieParts.slice(1).join('=');\n        var name_1 = cookieParts[0];\n        _cookies[name_1] = _cookie;\n    }\n    return _cookies;\n};\nexports.getCookies = getCookies;\nvar getCookie = function (key, options) {\n    var _cookies = (0, exports.getCookies)(options);\n    var value = _cookies[key];\n    if (value === undefined)\n        return undefined;\n    return decode(value);\n};\nexports.getCookie = getCookie;\nvar setCookie = function (key, data, options) {\n    if (isContextFromAppRouter(options)) {\n        var req = options.req, res = options.res, cookiesFn = options.cookies, restOptions = __rest(options, [\"req\", \"res\", \"cookies\"]);\n        var payload = __assign({ name: key, value: stringify(data) }, restOptions);\n        if (req) {\n            req.cookies.set(payload);\n        }\n        if (res) {\n            res.cookies.set(payload);\n        }\n        if (cookiesFn) {\n            cookiesFn().set(payload);\n        }\n        return;\n    }\n    var _cookieOptions;\n    var _req;\n    var _res;\n    if (options) {\n        // DefaultOptions can be casted here because the AppRouterMiddlewareOptions is narrowed using the fn: isContextFromAppRouter\n        var _a = options, req = _a.req, res = _a.res, _options = __rest(_a, [\"req\", \"res\"]);\n        _req = req;\n        _res = res;\n        _cookieOptions = _options;\n    }\n    var cookieStr = (0, cookie_1.serialize)(key, stringify(data), __assign({ path: '/' }, _cookieOptions));\n    if (!isClientSide()) {\n        if (_res && _req) {\n            var currentCookies = _res.getHeader('Set-Cookie');\n            if (!Array.isArray(currentCookies)) {\n                currentCookies = !currentCookies ? [] : [String(currentCookies)];\n            }\n            _res.setHeader('Set-Cookie', currentCookies.concat(cookieStr));\n            if (_req && _req.cookies) {\n                var _cookies = _req.cookies;\n                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));\n            }\n            if (_req && _req.headers && _req.headers.cookie) {\n                var _cookies = (0, cookie_1.parse)(_req.headers.cookie);\n                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));\n                _req.headers.cookie = Object.entries(_cookies).reduce(function (accum, item) {\n                    return accum.concat(\"\".concat(item[0], \"=\").concat(item[1], \";\"));\n                }, '');\n            }\n        }\n    }\n    else {\n        document.cookie = cookieStr;\n    }\n};\nexports.setCookie = setCookie;\nvar deleteCookie = function (key, options) {\n    return (0, exports.setCookie)(key, '', __assign(__assign({}, options), { maxAge: -1 }));\n};\nexports.deleteCookie = deleteCookie;\nvar hasCookie = function (key, options) {\n    if (!key)\n        return false;\n    var cookie = (0, exports.getCookies)(options);\n    return cookie.hasOwnProperty(key);\n};\nexports.hasCookie = hasCookie;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29va2llcy1uZXh0L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCLEdBQUcsa0JBQWtCO0FBQ3JHLGVBQWUsbUJBQU8sQ0FBQyxvREFBUTtBQUMvQixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckUsa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEYsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsK0RBQStELGNBQWMsWUFBWTtBQUN6RjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nvb2tpZXMtbmV4dC9saWIvaW5kZXguanM/NDZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0Nvb2tpZSA9IGV4cG9ydHMuZGVsZXRlQ29va2llID0gZXhwb3J0cy5zZXRDb29raWUgPSBleHBvcnRzLmdldENvb2tpZSA9IGV4cG9ydHMuZ2V0Q29va2llcyA9IHZvaWQgMDtcbnZhciBjb29raWVfMSA9IHJlcXVpcmUoXCJjb29raWVcIik7XG52YXIgaXNDbGllbnRTaWRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7IH07XG52YXIgaXNDb29raWVzRnJvbUFwcFJvdXRlciA9IGZ1bmN0aW9uIChjb29raWVTdG9yZSkge1xuICAgIGlmICghY29va2llU3RvcmUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKCdnZXRBbGwnIGluIGNvb2tpZVN0b3JlICYmXG4gICAgICAgICdzZXQnIGluIGNvb2tpZVN0b3JlICYmXG4gICAgICAgIHR5cGVvZiBjb29raWVTdG9yZS5nZXRBbGwgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdHlwZW9mIGNvb2tpZVN0b3JlLnNldCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xudmFyIGlzQ29udGV4dEZyb21BcHBSb3V0ZXIgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiAoKCEhKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5yZXEpICYmICdjb29raWVzJyBpbiBjb250ZXh0LnJlcSAmJiBpc0Nvb2tpZXNGcm9tQXBwUm91dGVyKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5yZXEuY29va2llcykpIHx8XG4gICAgICAgICghIShjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHQucmVzKSAmJiAnY29va2llcycgaW4gY29udGV4dC5yZXMgJiYgaXNDb29raWVzRnJvbUFwcFJvdXRlcihjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHQucmVzLmNvb2tpZXMpKSB8fFxuICAgICAgICAoISEoY29udGV4dCA9PT0gbnVsbCB8fCBjb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZXh0LmNvb2tpZXMpICYmIGlzQ29va2llc0Zyb21BcHBSb3V0ZXIoY29udGV4dC5jb29raWVzKCkpKSk7XG59O1xudmFyIHRyYW5zZm9ybUFwcFJvdXRlckNvb2tpZXMgPSBmdW5jdGlvbiAoY29va2llcykge1xuICAgIHZhciBfY29va2llcyA9IHt9O1xuICAgIGNvb2tpZXMuZ2V0QWxsKCkuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICBfY29va2llc1tuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBfY29va2llcztcbn07XG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyaW5naWZpZWRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVkVmFsdWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoIXN0cilcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyglWzAtOUEtWl17Mn0pKy9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xufTtcbnZhciBnZXRDb29raWVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoaXNDb250ZXh0RnJvbUFwcFJvdXRlcihvcHRpb25zKSkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlcSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUFwcFJvdXRlckNvb2tpZXMob3B0aW9ucy5yZXEuY29va2llcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jb29raWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtQXBwUm91dGVyQ29va2llcyhvcHRpb25zLmNvb2tpZXMoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcTtcbiAgICAvLyBEZWZhdWx0T3B0aW9uc1sncmVxXSBjYW4gYmUgY2FzdGVkIGhlcmUgYmVjYXVzZSBpcyBuYXJyb3dlZCBieSB1c2luZyB0aGUgZm46IGlzQ29udGV4dEZyb21BcHBSb3V0ZXJcbiAgICBpZiAob3B0aW9ucylcbiAgICAgICAgcmVxID0gb3B0aW9ucy5yZXE7XG4gICAgaWYgKCFpc0NsaWVudFNpZGUoKSkge1xuICAgICAgICAvLyBpZiBjb29raWUtcGFyc2VyIGlzIHVzZWQgaW4gcHJvamVjdCBnZXQgY29va2llcyBmcm9tIGN0eC5yZXEuY29va2llc1xuICAgICAgICAvLyBpZiBjb29raWUtcGFyc2VyIGlzbid0IHVzZWQgaW4gcHJvamVjdCBnZXQgY29va2llcyBmcm9tIGN0eC5yZXEuaGVhZGVycy5jb29raWVcbiAgICAgICAgaWYgKHJlcSAmJiByZXEuY29va2llcylcbiAgICAgICAgICAgIHJldHVybiByZXEuY29va2llcztcbiAgICAgICAgaWYgKHJlcSAmJiByZXEuaGVhZGVycy5jb29raWUpXG4gICAgICAgICAgICByZXR1cm4gKDAsIGNvb2tpZV8xLnBhcnNlKShyZXEuaGVhZGVycy5jb29raWUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHZhciBfY29va2llcyA9IHt9O1xuICAgIHZhciBkb2N1bWVudENvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZG9jdW1lbnRDb29raWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjb29raWVQYXJ0cyA9IGRvY3VtZW50Q29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICB2YXIgX2Nvb2tpZSA9IGNvb2tpZVBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGNvb2tpZVBhcnRzWzBdO1xuICAgICAgICBfY29va2llc1tuYW1lXzFdID0gX2Nvb2tpZTtcbiAgICB9XG4gICAgcmV0dXJuIF9jb29raWVzO1xufTtcbmV4cG9ydHMuZ2V0Q29va2llcyA9IGdldENvb2tpZXM7XG52YXIgZ2V0Q29va2llID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgIHZhciBfY29va2llcyA9ICgwLCBleHBvcnRzLmdldENvb2tpZXMpKG9wdGlvbnMpO1xuICAgIHZhciB2YWx1ZSA9IF9jb29raWVzW2tleV07XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGRlY29kZSh2YWx1ZSk7XG59O1xuZXhwb3J0cy5nZXRDb29raWUgPSBnZXRDb29raWU7XG52YXIgc2V0Q29va2llID0gZnVuY3Rpb24gKGtleSwgZGF0YSwgb3B0aW9ucykge1xuICAgIGlmIChpc0NvbnRleHRGcm9tQXBwUm91dGVyKG9wdGlvbnMpKSB7XG4gICAgICAgIHZhciByZXEgPSBvcHRpb25zLnJlcSwgcmVzID0gb3B0aW9ucy5yZXMsIGNvb2tpZXNGbiA9IG9wdGlvbnMuY29va2llcywgcmVzdE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wicmVxXCIsIFwicmVzXCIsIFwiY29va2llc1wiXSk7XG4gICAgICAgIHZhciBwYXlsb2FkID0gX19hc3NpZ24oeyBuYW1lOiBrZXksIHZhbHVlOiBzdHJpbmdpZnkoZGF0YSkgfSwgcmVzdE9wdGlvbnMpO1xuICAgICAgICBpZiAocmVxKSB7XG4gICAgICAgICAgICByZXEuY29va2llcy5zZXQocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgcmVzLmNvb2tpZXMuc2V0KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29raWVzRm4pIHtcbiAgICAgICAgICAgIGNvb2tpZXNGbigpLnNldChwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBfY29va2llT3B0aW9ucztcbiAgICB2YXIgX3JlcTtcbiAgICB2YXIgX3JlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAvLyBEZWZhdWx0T3B0aW9ucyBjYW4gYmUgY2FzdGVkIGhlcmUgYmVjYXVzZSB0aGUgQXBwUm91dGVyTWlkZGxld2FyZU9wdGlvbnMgaXMgbmFycm93ZWQgdXNpbmcgdGhlIGZuOiBpc0NvbnRleHRGcm9tQXBwUm91dGVyXG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMsIHJlcSA9IF9hLnJlcSwgcmVzID0gX2EucmVzLCBfb3B0aW9ucyA9IF9fcmVzdChfYSwgW1wicmVxXCIsIFwicmVzXCJdKTtcbiAgICAgICAgX3JlcSA9IHJlcTtcbiAgICAgICAgX3JlcyA9IHJlcztcbiAgICAgICAgX2Nvb2tpZU9wdGlvbnMgPSBfb3B0aW9ucztcbiAgICB9XG4gICAgdmFyIGNvb2tpZVN0ciA9ICgwLCBjb29raWVfMS5zZXJpYWxpemUpKGtleSwgc3RyaW5naWZ5KGRhdGEpLCBfX2Fzc2lnbih7IHBhdGg6ICcvJyB9LCBfY29va2llT3B0aW9ucykpO1xuICAgIGlmICghaXNDbGllbnRTaWRlKCkpIHtcbiAgICAgICAgaWYgKF9yZXMgJiYgX3JlcSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRDb29raWVzID0gX3Jlcy5nZXRIZWFkZXIoJ1NldC1Db29raWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjdXJyZW50Q29va2llcykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29va2llcyA9ICFjdXJyZW50Q29va2llcyA/IFtdIDogW1N0cmluZyhjdXJyZW50Q29va2llcyldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3Jlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjdXJyZW50Q29va2llcy5jb25jYXQoY29va2llU3RyKSk7XG4gICAgICAgICAgICBpZiAoX3JlcSAmJiBfcmVxLmNvb2tpZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2Nvb2tpZXMgPSBfcmVxLmNvb2tpZXM7XG4gICAgICAgICAgICAgICAgZGF0YSA9PT0gJycgPyBkZWxldGUgX2Nvb2tpZXNba2V5XSA6IChfY29va2llc1trZXldID0gc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfcmVxICYmIF9yZXEuaGVhZGVycyAmJiBfcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jb29raWVzID0gKDAsIGNvb2tpZV8xLnBhcnNlKShfcmVxLmhlYWRlcnMuY29va2llKTtcbiAgICAgICAgICAgICAgICBkYXRhID09PSAnJyA/IGRlbGV0ZSBfY29va2llc1trZXldIDogKF9jb29raWVzW2tleV0gPSBzdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIF9yZXEuaGVhZGVycy5jb29raWUgPSBPYmplY3QuZW50cmllcyhfY29va2llcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0uY29uY2F0KFwiXCIuY29uY2F0KGl0ZW1bMF0sIFwiPVwiKS5jb25jYXQoaXRlbVsxXSwgXCI7XCIpKTtcbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcbiAgICB9XG59O1xuZXhwb3J0cy5zZXRDb29raWUgPSBzZXRDb29raWU7XG52YXIgZGVsZXRlQ29va2llID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgIHJldHVybiAoMCwgZXhwb3J0cy5zZXRDb29raWUpKGtleSwgJycsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBtYXhBZ2U6IC0xIH0pKTtcbn07XG5leHBvcnRzLmRlbGV0ZUNvb2tpZSA9IGRlbGV0ZUNvb2tpZTtcbnZhciBoYXNDb29raWUgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFrZXkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB2YXIgY29va2llID0gKDAsIGV4cG9ydHMuZ2V0Q29va2llcykob3B0aW9ucyk7XG4gICAgcmV0dXJuIGNvb2tpZS5oYXNPd25Qcm9wZXJ0eShrZXkpO1xufTtcbmV4cG9ydHMuaGFzQ29va2llID0gaGFzQ29va2llO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cookies-next/lib/index.js\n");

/***/ })

};
;