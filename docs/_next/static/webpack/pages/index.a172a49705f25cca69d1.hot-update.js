webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ChartContainer.js":
/*!**************************************!*\
  !*** ./components/ChartContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _ScaleToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScaleToggle */ \"./components/ScaleToggle.js\");\n\n\nvar _jsxFileName = \"/home/russell/projects/covid-19-dash/components/ChartContainer.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ChartContainer = function ChartContainer(_ref) {\n  var _ref$bars = _ref.bars,\n      bars = _ref$bars === void 0 ? [] : _ref$bars,\n      _ref$lines = _ref.lines,\n      lines = _ref$lines === void 0 ? [] : _ref$lines,\n      _ref$dataKeyX = _ref.dataKeyX,\n      dataKeyX = _ref$dataKeyX === void 0 ? \"date_string\" : _ref$dataKeyX,\n      _ref$dataSource = _ref.dataSource,\n      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,\n      title = _ref.title,\n      syncId = _ref.syncId,\n      xAxisScale = _ref.xAxisScale;\n  return __jsx(\"div\", {\n    className: \"tl dib chart-container w-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(\"span\", {\n    className: \"relative top--64\",\n    id: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }), __jsx(\"div\", {\n    className: \"tl pv8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, title)), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"ResponsiveContainer\"], {\n    width: \"95%\",\n    height: 400,\n    className: \"mt16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }\n  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"ComposedChart\"], {\n    data: dataSource,\n    syncId: syncId,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, bars.length + lines.length > 1 && __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], {\n    layout: \"horizontal\",\n    align: \"center\",\n    verticalAlign: \"top\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"CartesianGrid\"], {\n    vertical: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 6\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"XAxis\"], {\n    dataKey: dataKeyX,\n    scale: xAxisScale,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 6\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"YAxis\"], {\n    type: \"number\",\n    domain: [0, 'auto'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 6\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 6\n    }\n  }), bars.map(function (bar) {\n    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"Bar\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: bar.dataKey\n    }, bar, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }\n    }));\n  }), lines.map(function (line) {\n    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__[\"Line\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: line.dataKey\n    }, line, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 7\n      }\n    }));\n  }))));\n};\n\n_c = ChartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydENvbnRhaW5lci5qcz8zM2ZlIl0sIm5hbWVzIjpbIkNoYXJ0Q29udGFpbmVyIiwiYmFycyIsImxpbmVzIiwiZGF0YUtleVgiLCJkYXRhU291cmNlIiwidGl0bGUiLCJzeW5jSWQiLCJ4QXhpc1NjYWxlIiwibGVuZ3RoIiwibWFwIiwiYmFyIiwiZGF0YUtleSIsImxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQVFqQjtBQUFBLHVCQVBMQyxJQU9LO0FBQUEsTUFQTEEsSUFPSywwQkFQRSxFQU9GO0FBQUEsd0JBTkxDLEtBTUs7QUFBQSxNQU5MQSxLQU1LLDJCQU5HLEVBTUg7QUFBQSwyQkFMTEMsUUFLSztBQUFBLE1BTExBLFFBS0ssOEJBTE0sYUFLTjtBQUFBLDZCQUpMQyxVQUlLO0FBQUEsTUFKTEEsVUFJSyxnQ0FKUSxFQUlSO0FBQUEsTUFITEMsS0FHSyxRQUhMQSxLQUdLO0FBQUEsTUFGTEMsTUFFSyxRQUZMQSxNQUVLO0FBQUEsTUFETEMsVUFDSyxRQURMQSxVQUNLO0FBQ0wsU0FDQztBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQW1DLE1BQUUsRUFBRUYsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQSxLQURGLENBREQsQ0FGRCxFQU9DLE1BQUMsNERBQUQ7QUFBcUIsU0FBSyxFQUFDLEtBQTNCO0FBQWlDLFVBQU0sRUFBRSxHQUF6QztBQUE4QyxhQUFTLEVBQUMsTUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBZSxRQUFJLEVBQUVELFVBQXJCO0FBQWlDLFVBQU0sRUFBRUUsTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxJQUFJLENBQUNPLE1BQUwsR0FBY04sS0FBSyxDQUFDTSxNQUFyQixHQUErQixDQUEvQixJQUNBLE1BQUMsK0NBQUQ7QUFDQyxVQUFNLEVBQUMsWUFEUjtBQUVDLFNBQUssRUFBQyxRQUZQO0FBR0MsaUJBQWEsRUFBQyxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVFDLE1BQUMsc0RBQUQ7QUFBZSxZQUFRLEVBQUUsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0MsTUFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBRUwsUUFBaEI7QUFBMEIsU0FBSyxFQUFFSSxVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEQsRUFVQyxNQUFDLDhDQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZELEVBV0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsRUFZRU4sSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLFdBQ1osTUFBQyw0Q0FBRDtBQUFLLFNBQUcsRUFBRUEsR0FBRyxDQUFDQztBQUFkLE9BQTJCRCxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQSxHQUFaLENBWkYsRUFlRVIsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0csSUFBRDtBQUFBLFdBQ1YsTUFBQyw2Q0FBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDRDtBQUFoQixPQUE2QkMsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURVO0FBQUEsR0FBVixDQWZGLENBREQsQ0FQRCxDQUREO0FBK0JBLENBeENEOztLQUFNWixjO0FBMENTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0Q29tcG9zZWRDaGFydCwgQmFyLCBMaW5lLFxuXHRYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsXG5cdFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIExlZ2VuZFxufSBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCBTY2FsZVRvZ2dsZSBmcm9tICcuL1NjYWxlVG9nZ2xlJztcblxuXG5jb25zdCBDaGFydENvbnRhaW5lciA9ICh7XG5cdGJhcnMgPSBbXSxcblx0bGluZXMgPSBbXSxcblx0ZGF0YUtleVggPSBcImRhdGVfc3RyaW5nXCIsXG5cdGRhdGFTb3VyY2UgPSBbXSxcblx0dGl0bGUsXG5cdHN5bmNJZCxcblx0eEF4aXNTY2FsZSxcbn0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRsIGRpYiBjaGFydC1jb250YWluZXIgdy0xMDBcIj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0tNjRcIiBpZD17dGl0bGV9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRsIHB2OFwiPlxuXHRcdFx0XHQ8c3Ryb25nPlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9zdHJvbmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiOTUlXCIgaGVpZ2h0PXs0MDB9IGNsYXNzTmFtZT1cIm10MTZcIj5cblx0XHRcdFx0PENvbXBvc2VkQ2hhcnQgZGF0YT17ZGF0YVNvdXJjZX0gc3luY0lkPXtzeW5jSWR9ID5cblx0XHRcdFx0XHR7KGJhcnMubGVuZ3RoICsgbGluZXMubGVuZ3RoKSA+IDEgJiYgKFxuXHRcdFx0XHRcdFx0PExlZ2VuZFxuXHRcdFx0XHRcdFx0XHRsYXlvdXQ9XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRcdFx0YWxpZ249XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduPVwidG9wXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Q2FydGVzaWFuR3JpZCB2ZXJ0aWNhbD17ZmFsc2V9IC8+XG5cdFx0XHRcdFx0PFhBeGlzIGRhdGFLZXk9e2RhdGFLZXlYfSBzY2FsZT17eEF4aXNTY2FsZX0gLz5cblx0XHRcdFx0XHQ8WUF4aXMgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WzAsICdhdXRvJ119IC8+XG5cdFx0XHRcdFx0PFRvb2x0aXAgLz5cblx0XHRcdFx0XHR7YmFycy5tYXAoYmFyID0+IChcblx0XHRcdFx0XHRcdDxCYXIga2V5PXtiYXIuZGF0YUtleX0gey4uLmJhcn0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHR7bGluZXMubWFwKChsaW5lKSA9PiAoXG5cdFx0XHRcdFx0XHQ8TGluZSBrZXk9e2xpbmUuZGF0YUtleX0gey4uLmxpbmV9IC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQ29tcG9zZWRDaGFydD5cblx0XHRcdDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChartContainer.js\n");

/***/ })

})