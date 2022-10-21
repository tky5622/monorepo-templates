/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo-client.ts":
/*!**************************!*\
  !*** ./apollo-client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// ./apollo-client.js\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://api.lens.dev\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFCQUFxQjtBQUV1QztBQUU1RCxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQVksQ0FBQztJQUM5QkcsR0FBRyxFQUFFLHNCQUFzQjtJQUMzQkMsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBvbGxvLWNsaWVudC50cz8zOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vYXBvbGxvLWNsaWVudC5qc1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogJ2h0dHBzOi8vYXBpLmxlbnMuZGV2JyxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo-client.ts\n");

/***/ }),

/***/ "./src/component/layout/AppHeader.tsx":
/*!********************************************!*\
  !*** ./src/component/layout/AppHeader.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../walletConnect/WalletConnectContainer */ \"./src/component/walletConnect/WalletConnectContainer.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__]);\n_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppHeader = ()=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Header, {\n        height: 60,\n        p: \"xs\",\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/AppHeader.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/AppHeader.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppHeader);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9BcHBIZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDYjtBQUNtRDtBQU83RSxNQUFNRyxTQUFTLEdBQTZCLElBQU07SUFDaEQscUJBQ0UsdUVBQUNILGlEQUFNO1FBQUNJLE1BQU0sRUFBRSxFQUFFO1FBQUVDLENBQUMsRUFBQyxJQUFJO2tCQUN4QixxRkFBQ0gsNkVBQXNCOzs7O3FCQUFFOzs7OztpQkFDbEIsQ0FDVDtBQUNKLENBQUM7QUFFRCxpRUFBZUMsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbGF5b3V0L0FwcEhlYWRlci50c3g/ODZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdhbGxldENvbm5lY3RDb250YWluZXIgZnJvbSAnLi4vd2FsbGV0Q29ubmVjdC9XYWxsZXRDb25uZWN0Q29udGFpbmVyJztcclxuXHJcbnR5cGUgQXBwSGVhZGVyUHJvcHMgPSB7XHJcbiAgLy8gY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5cclxuY29uc3QgQXBwSGVhZGVyOiBSZWFjdC5GQzxBcHBIZWFkZXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgaGVpZ2h0PXs2MH0gcD1cInhzXCI+XHJcbiAgICAgIDxXYWxsZXRDb25uZWN0Q29udGFpbmVyLz5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlciJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsIldhbGxldENvbm5lY3RDb250YWluZXIiLCJBcHBIZWFkZXIiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/layout/AppHeader.tsx\n");

/***/ }),

/***/ "./src/component/layout/Layout.tsx":
/*!*****************************************!*\
  !*** ./src/component/layout/Layout.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppHeader */ \"./src/component/layout/AppHeader.tsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ \"./src/component/layout/NavBar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppHeader__WEBPACK_IMPORTED_MODULE_3__]);\n_AppHeader__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.AppShell, {\n        padding: \"md\",\n        navbar: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n        header: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, void 0, void 0),\n        styles: (theme)=>({\n                main: {\n                    backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[0]\n                }\n            }),\n        children: children\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/Layout.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ2Y7QUFDVTtBQUNIO0FBT2pDLE1BQU1JLE1BQU0sR0FBMEIsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUNwRCxxQkFDRSx1RUFBQ0wsbURBQVE7UUFDUE0sT0FBTyxFQUFDLElBQUk7UUFDWkMsTUFBTSxnQkFBRSx1RUFBQ0osK0NBQVMsb0NBQUU7UUFDcEJLLE1BQU0sZ0JBQUUsdUVBQUNOLGtEQUFTLG9DQUFFO1FBQ3BCTyxNQUFNLEVBQUUsQ0FBQ0MsS0FBSyxHQUFNO2dCQUNsQkMsSUFBSSxFQUFFO29CQUFFQyxlQUFlLEVBQUVGLEtBQUssQ0FBQ0csV0FBVyxLQUFLLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0wsS0FBSyxDQUFDSSxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQUU7YUFDdEc7a0JBRUFYLFFBQVE7Ozs7O2lCQUNBLENBQ1g7QUFDSixDQUFDO0FBRUQsaUVBQWVELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2xheW91dC9MYXlvdXQudHN4PzhmODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwU2hlbGwgfSBmcm9tICdAbWFudGluZS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcEhlYWRlciBmcm9tICcuL0FwcEhlYWRlcic7XHJcbmltcG9ydCBBcHBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5cclxudHlwZSBMYXlvdXRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBTaGVsbFxyXG4gICAgICBwYWRkaW5nPVwibWRcIlxyXG4gICAgICBuYXZiYXI9ezxBcHBOYXZCYXIvPn1cclxuICAgICAgaGVhZGVyPXs8QXBwSGVhZGVyLz59XHJcbiAgICAgIHN0eWxlcz17KHRoZW1lKSA9PiAoe1xyXG4gICAgICAgIG1haW46IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS5jb2xvcnMuZ3JheVswXSB9LFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBTaGVsbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsiQXBwU2hlbGwiLCJSZWFjdCIsIkFwcEhlYWRlciIsIkFwcE5hdkJhciIsIkxheW91dCIsImNoaWxkcmVuIiwicGFkZGluZyIsIm5hdmJhciIsImhlYWRlciIsInN0eWxlcyIsInRoZW1lIiwibWFpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiY29sb3JzIiwiZGFyayIsImdyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/layout/Layout.tsx\n");

/***/ }),

/***/ "./src/component/layout/NavBar.tsx":
/*!*****************************************!*\
  !*** ./src/component/layout/NavBar.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AppNavBar = ()=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Navbar, {\n        width: {\n            base: 300\n        },\n        height: 500,\n        p: \"xs\"\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/NavBar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNiO0FBTzFCLE1BQU1FLFNBQVMsR0FBNkIsSUFBTTtJQUNoRCxxQkFDRSx1RUFBQ0YsaURBQU07UUFBQ0csS0FBSyxFQUFFO1lBQUVDLElBQUksRUFBRSxHQUFHO1NBQUU7UUFBRUMsTUFBTSxFQUFFLEdBQUc7UUFBRUMsQ0FBQyxFQUFDLElBQUk7Ozs7O2lCQUFnQyxDQUNqRjtBQUNKLENBQUM7QUFFRCxpRUFBZUosU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbGF5b3V0L05hdkJhci50c3g/M2M0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgQXBwTmF2QmFyUHJvcHMgPSB7XHJcbiAgLy8gY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5cclxuY29uc3QgQXBwTmF2QmFyOiBSZWFjdC5GQzxBcHBOYXZCYXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgd2lkdGg9e3sgYmFzZTogMzAwIH19IGhlaWdodD17NTAwfSBwPVwieHNcIj57LyogTmF2YmFyIGNvbnRlbnQgKi99PC9OYXZiYXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2QmFyIl0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiQXBwTmF2QmFyIiwid2lkdGgiLCJiYXNlIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/layout/NavBar.tsx\n");

/***/ }),

/***/ "./src/component/walletConnect/WalletConnectContainer.tsx":
/*!****************************************************************!*\
  !*** ./src/component/walletConnect/WalletConnectContainer.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WalletConnectContainer)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__]);\n_web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction WalletConnectContainer() {\n    const { address , connector , isConnected  } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    return isConnected ? /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            address,\n            connector?.name,\n            connector?.id\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {}, void 0, false, {\n        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/walletConnect/WalletConnectContainer.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTREO0FBRzdDLFNBQVNFLHNCQUFzQixHQUFHO0lBQy9DLE1BQU0sRUFBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUVDLFdBQVcsR0FBRSxHQUFHSiw0REFBVSxFQUFFO0lBRXhELE9BQU9JLFdBQVcsaUJBQ2hCOztZQUNDRixPQUFPO1lBQUVDLFNBQVMsRUFBRUUsSUFBSTtZQUFFRixTQUFTLEVBQUVHLEVBQUU7O29CQUNyQyxpQkFFSCx1RUFBQ1AsMkRBQWE7Ozs7WUFBRyxDQUNsQjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdENvbnRhaW5lci50c3g/NDlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0QnV0dG9uLCB1c2VBY2NvdW50IH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYWxsZXRDb25uZWN0Q29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHsgYWRkcmVzcywgY29ubmVjdG9yLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpXHJcblxyXG4gIHJldHVybiBpc0Nvbm5lY3RlZCA/IChcclxuICAgIDw+XHJcbiAgICB7YWRkcmVzc317Y29ubmVjdG9yPy5uYW1lfXtjb25uZWN0b3I/LmlkfVxyXG4gICAgPC8+XHJcbiAgKSA6IChcclxuICAgIDxDb25uZWN0QnV0dG9uIC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkNvbm5lY3RCdXR0b24iLCJ1c2VBY2NvdW50IiwiV2FsbGV0Q29ubmVjdENvbnRhaW5lciIsImFkZHJlc3MiLCJjb25uZWN0b3IiLCJpc0Nvbm5lY3RlZCIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/walletConnect/WalletConnectContainer.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo-client */ \"./apollo-client.ts\");\n/* harmony import */ var _component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/layout/Layout */ \"./src/component/layout/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/player.css */ \"./src/styles/player.css\");\n/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_player_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__]);\n_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const { 0: colorScheme , 1: setColorScheme  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"dark\");\n    const toggleColorScheme = (value)=>setColorScheme(value || (colorScheme === \"dark\" ? \"light\" : \"dark\"));\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n                client: _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.MantineProvider, {\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    theme: {\n                        colorScheme\n                    },\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.ColorSchemeProvider, {\n                        colorScheme: colorScheme,\n                        toggleColorScheme: toggleColorScheme,\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUduQjtBQUNJO0FBQ1E7QUFDTztBQUNqQjtBQUNEO0FBT1A7QUFFdEIsTUFBTU8sR0FBRyxHQUF1QixDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDNUQsTUFBTSxLQUFDQyxXQUFXLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBYyxNQUFNLENBQUM7SUFFbkUsTUFBTVUsaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBbUIsR0FDNUNGLGNBQWMsQ0FBQ0UsS0FBSyxJQUFLSCxDQUFBQSxXQUFXLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUU7SUFFdEUscUJBQ0U7OzBCQUNFLHVFQUFDVCxrREFBSTs7a0NBQ0gsdUVBQUNhLE9BQUs7a0NBQUMsTUFBSTs7Ozs7aUNBQVE7a0NBQ25CLHVFQUFDQyxNQUFJO3dCQUNIQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFDLHNEQUFzRDs7Ozs7aUNBQzlEOzs7Ozs7eUJBQ0c7MEJBQ1AsdUVBQUNqQiwwREFBYztnQkFBQ0csTUFBTSxFQUFFQSxzREFBTTswQkFDNUIscUZBQUNHLDBEQUFlO29CQUNkWSxnQkFBZ0I7b0JBQ2hCQyxnQkFBZ0I7b0JBQ2hCQyxLQUFLLEVBQUU7d0JBQ0xWLFdBQVc7cUJBQ1o7OEJBRUQscUZBQUNMLDhEQUFtQjt3QkFDbEJLLFdBQVcsRUFBRUEsV0FBVzt3QkFDeEJFLGlCQUFpQixFQUFFQSxpQkFBaUI7a0NBRXBDLHFGQUFDUixnRUFBTTtzQ0FDTCxxRkFBQ0ksU0FBUztnQ0FBRSxHQUFHQyxTQUFTOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3JCOzs7OztpQ0FDVzs7Ozs7NkJBQ047Ozs7O3lCQUNIOztvQkFDaEIsQ0FDSjtBQUNILENBQUM7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2Fwb2xsby1jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L2xheW91dC9MYXlvdXQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9wbGF5ZXIuY3NzJ1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29sb3JTY2hlbWUsXHJcbiAgQ29sb3JTY2hlbWVQcm92aWRlcixcclxuICBNYW50aW5lUHJvdmlkZXJcclxufSBmcm9tICdAbWFudGluZS9jb3JlJ1xyXG5cclxuY29uc3QgQXBwOiBOZXh0UGFnZTxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yU2NoZW1lLCBzZXRDb2xvclNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4oJ2RhcmsnKVxyXG5cclxuICBjb25zdCB0b2dnbGVDb2xvclNjaGVtZSA9ICh2YWx1ZT86IENvbG9yU2NoZW1lKSA9PlxyXG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXh0PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgPE1hbnRpbmVQcm92aWRlclxyXG4gICAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xyXG4gICAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xyXG4gICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgY29sb3JTY2hlbWUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjb2xvclNjaGVtZX1cclxuICAgICAgICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8L0NvbG9yU2NoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XHJcbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJIZWFkIiwidXNlU3RhdGUiLCJjbGllbnQiLCJMYXlvdXQiLCJDb2xvclNjaGVtZVByb3ZpZGVyIiwiTWFudGluZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29sb3JTY2hlbWUiLCJzZXRDb2xvclNjaGVtZSIsInRvZ2dsZUNvbG9yU2NoZW1lIiwidmFsdWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/player.css":
/*!*******************************!*\
  !*** ./src/styles/player.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();