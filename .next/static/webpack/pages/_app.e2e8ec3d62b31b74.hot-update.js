"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/userData.js":
/*!*************************!*\
  !*** ./lib/userData.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToFavourites\": function() { return /* binding */ addToFavourites; },\n/* harmony export */   \"addToHistory\": function() { return /* binding */ addToHistory; },\n/* harmony export */   \"getFavourites\": function() { return /* binding */ getFavourites; },\n/* harmony export */   \"getHistory\": function() { return /* binding */ getHistory; },\n/* harmony export */   \"removeFromFavourites\": function() { return /* binding */ removeFromFavourites; },\n/* harmony export */   \"removeFromHistory\": function() { return /* binding */ removeFromHistory; }\n/* harmony export */ });\n/* harmony import */ var _authenticate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate */ \"./lib/authenticate.js\");\n\nasync function addToFavourites(id) {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/favourites/\").concat(id), {\n        method: \"PUT\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function removeFromFavourites(id) {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/favourites/\").concat(id), {\n        method: \"DELETE\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function getFavourites() {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    console.log(\"getfavourites -->\", token);\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/favourites\"), {\n        method: \"GET\",\n        headers: {\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    console.log(\"getfavourites -->\", res);\n    if (data.ok) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function addToHistory(id) {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/history/\").concat(id), {\n        method: \"PUT\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function removeFromHistory(id) {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/history/\").concat(id), {\n        method: \"DELETE\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function getHistory() {\n    const token = (0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)();\n    const res = await fetch(\"\".concat(\"http://localhost:9001/api/user\", \"/history\"), {\n        method: \"GET\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"Authorization\": \"JWT \".concat(token)\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEIsaUJBQWlCLE9BQWEsT0FBTlA7UUFDNUI7SUFDSjtJQUVBLE1BQU1RLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtJQUUzQixJQUFJUixJQUFJUyxNQUFNLEtBQUssS0FBSztRQUNwQixPQUFPRjtJQUNYLE9BQU87UUFDSCxPQUFPLEVBQUU7SUFDYixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdXNlckRhdGEuanM/YzRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCIuL2F1dGhlbnRpY2F0ZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9GYXZvdXJpdGVzKGlkKSB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Zhdm91cml0ZXMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEpXVCAke3Rva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvdXJpdGVzKGlkKSB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Zhdm91cml0ZXMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEpXVCAke3Rva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZhdm91cml0ZXMoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0ZmF2b3VyaXRlcyAtLT5cIiwgdG9rZW4pXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vZmF2b3VyaXRlc2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBKV1QgJHt0b2tlbn1gLFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcImdldGZhdm91cml0ZXMgLS0+XCIsIHJlcylcbiAgICBpZiAoZGF0YS5vaykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0hpc3RvcnkoaWQpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vaGlzdG9yeS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgSldUICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRnJvbUhpc3RvcnkoaWQpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vaGlzdG9yeS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgSldUICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeSgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vaGlzdG9yeWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgSldUICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufSJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsImFkZFRvRmF2b3VyaXRlcyIsImlkIiwidG9rZW4iLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwicmVtb3ZlRnJvbUZhdm91cml0ZXMiLCJnZXRGYXZvdXJpdGVzIiwiY29uc29sZSIsImxvZyIsIm9rIiwiYWRkVG9IaXN0b3J5IiwicmVtb3ZlRnJvbUhpc3RvcnkiLCJnZXRIaXN0b3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/userData.js\n"));

/***/ })

});