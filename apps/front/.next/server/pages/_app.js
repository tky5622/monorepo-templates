/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(() => {
  var exports = {}
  exports.id = 'pages/_app'
  exports.ids = ['pages/_app']
  exports.modules = {
    /***/ './apollo-client.ts':
      /*!**************************!*\
  !*** ./apollo-client.ts ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// ./apollo-client.js\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: "https://api.lens.dev",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFCQUFxQjtBQUV1QztBQUU1RCxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQVksQ0FBQztJQUM5QkcsR0FBRyxFQUFFLHNCQUFzQjtJQUMzQkMsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBvbGxvLWNsaWVudC50cz8zOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vYXBvbGxvLWNsaWVudC5qc1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogJ2h0dHBzOi8vYXBpLmxlbnMuZGV2JyxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo-client.ts\n'
        )

        /***/
      },

    /***/ './src/component/layout/AppHeader.tsx':
      /*!********************************************!*\
  !*** ./src/component/layout/AppHeader.tsx ***!
  \********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "@mantine/core");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../walletConnect/WalletConnectContainer */ "./src/component/walletConnect/WalletConnectContainer.tsx");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__]);\n_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppHeader = ()=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Header, {\n        height: 60,\n        p: "xs",\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletConnect_WalletConnectContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {\n            fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/AppHeader.tsx",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/AppHeader.tsx",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppHeader);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9BcHBIZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDYjtBQUNtRDtBQU01RSxNQUFNRyxTQUFTLEdBQTZCLElBQU07SUFDaEQscUJBQ0UsdUVBQUNILGlEQUFNO1FBQUNJLE1BQU0sRUFBRSxFQUFFO1FBQUVDLENBQUMsRUFBQyxJQUFJO2tCQUN4QixxRkFBQ0gsNkVBQXNCOzs7O3FCQUFHOzs7OztpQkFDbkIsQ0FDVjtBQUNILENBQUM7QUFFRCxpRUFBZUMsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbGF5b3V0L0FwcEhlYWRlci50c3g/ODZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFdhbGxldENvbm5lY3RDb250YWluZXIgZnJvbSAnLi4vd2FsbGV0Q29ubmVjdC9XYWxsZXRDb25uZWN0Q29udGFpbmVyJ1xuXG50eXBlIEFwcEhlYWRlclByb3BzID0ge1xuICAvLyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IEFwcEhlYWRlcjogUmVhY3QuRkM8QXBwSGVhZGVyUHJvcHM+ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWFkZXIgaGVpZ2h0PXs2MH0gcD1cInhzXCI+XG4gICAgICA8V2FsbGV0Q29ubmVjdENvbnRhaW5lciAvPlxuICAgIDwvSGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiV2FsbGV0Q29ubmVjdENvbnRhaW5lciIsIkFwcEhlYWRlciIsImhlaWdodCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/layout/AppHeader.tsx\n'
        )

        /***/
      },

    /***/ './src/component/layout/Layout.tsx':
      /*!*****************************************!*\
  !*** ./src/component/layout/Layout.tsx ***!
  \*****************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "@mantine/core");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletConnect_WalletConnectModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../walletConnect/WalletConnectModal */ "./src/component/walletConnect/WalletConnectModal.tsx");\n/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppHeader */ "./src/component/layout/AppHeader.tsx");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar */ "./src/component/layout/NavBar.tsx");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletConnect_WalletConnectModal__WEBPACK_IMPORTED_MODULE_3__, _AppHeader__WEBPACK_IMPORTED_MODULE_4__]);\n([_walletConnect_WalletConnectModal__WEBPACK_IMPORTED_MODULE_3__, _AppHeader__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.AppShell, {\n        padding: "md",\n        navbar: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, void 0, void 0),\n        header: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, void 0, void 0),\n        styles: (theme)=>({\n                main: {\n                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]\n                }\n            }),\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletConnect_WalletConnectModal__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {\n                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/Layout.tsx",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/Layout.tsx",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNmO0FBQzJDO0FBQ2pDO0FBQ0g7QUFNaEMsTUFBTUssTUFBTSxHQUEwQixDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3RELHFCQUNFLHVFQUFDTixtREFBUTtRQUNQTyxPQUFPLEVBQUMsSUFBSTtRQUNaQyxNQUFNLGdCQUFFLHVFQUFDSiwrQ0FBUyxvQ0FBRztRQUNyQkssTUFBTSxnQkFBRSx1RUFBQ04sa0RBQVMsb0NBQUc7UUFDckJPLE1BQU0sRUFBRSxDQUFDQyxLQUFLLEdBQU07Z0JBQ2xCQyxJQUFJLEVBQUU7b0JBQ0pDLGVBQWUsRUFDYkYsS0FBSyxDQUFDRyxXQUFXLEtBQUssTUFBTSxHQUN4QkgsS0FBSyxDQUFDSSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FDcEJMLEtBQUssQ0FBQ0ksTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjthQUNGOzswQkFFRCx1RUFBQ2YseUVBQWtCOzs7O3lCQUFFO1lBQ3BCSSxRQUFROzs7Ozs7aUJBQ0EsQ0FDWjtBQUNILENBQUM7QUFFRCxpRUFBZUQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbGF5b3V0L0xheW91dC50c3g/OGY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTaGVsbCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgV2FsbGV0Q29ubmVjdE1vZGFsIGZyb20gJy4uL3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdE1vZGFsJ1xuaW1wb3J0IEFwcEhlYWRlciBmcm9tICcuL0FwcEhlYWRlcidcbmltcG9ydCBBcHBOYXZCYXIgZnJvbSAnLi9OYXZCYXInXG5cbnR5cGUgTGF5b3V0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwcFNoZWxsXG4gICAgICBwYWRkaW5nPVwibWRcIlxuICAgICAgbmF2YmFyPXs8QXBwTmF2QmFyIC8+fVxuICAgICAgaGVhZGVyPXs8QXBwSGVhZGVyIC8+fVxuICAgICAgc3R5bGVzPXsodGhlbWUpID0+ICh7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnXG4gICAgICAgICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbOF1cbiAgICAgICAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgICAgICAgfSxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxXYWxsZXRDb25uZWN0TW9kYWwvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwU2hlbGw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiQXBwU2hlbGwiLCJSZWFjdCIsIldhbGxldENvbm5lY3RNb2RhbCIsIkFwcEhlYWRlciIsIkFwcE5hdkJhciIsIkxheW91dCIsImNoaWxkcmVuIiwicGFkZGluZyIsIm5hdmJhciIsImhlYWRlciIsInN0eWxlcyIsInRoZW1lIiwibWFpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiY29sb3JzIiwiZGFyayIsImdyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/layout/Layout.tsx\n'
        )

        /***/
      },

    /***/ './src/component/layout/NavBar.tsx':
      /*!*****************************************!*\
  !*** ./src/component/layout/NavBar.tsx ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "@mantine/core");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AppNavBar = ()=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Navbar, {\n        width: {\n            base: 300\n        },\n        height: 500,\n        p: "xs"\n    }, void 0, false, {\n        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/layout/NavBar.tsx",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xheW91dC9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNiO0FBTXpCLE1BQU1FLFNBQVMsR0FBNkIsSUFBTTtJQUNoRCxxQkFDRSx1RUFBQ0YsaURBQU07UUFBQ0csS0FBSyxFQUFFO1lBQUVDLElBQUksRUFBRSxHQUFHO1NBQUU7UUFBRUMsTUFBTSxFQUFFLEdBQUc7UUFBRUMsQ0FBQyxFQUFDLElBQUk7Ozs7O2lCQUV4QyxDQUNWO0FBQ0gsQ0FBQztBQUVELGlFQUFlSixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9sYXlvdXQvTmF2QmFyLnRzeD8zYzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhciB9IGZyb20gJ0BtYW50aW5lL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgQXBwTmF2QmFyUHJvcHMgPSB7XG4gIC8vIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgQXBwTmF2QmFyOiBSZWFjdC5GQzxBcHBOYXZCYXJQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhciB3aWR0aD17eyBiYXNlOiAzMDAgfX0gaGVpZ2h0PXs1MDB9IHA9XCJ4c1wiPlxuICAgICAgey8qIE5hdmJhciBjb250ZW50ICovfVxuICAgIDwvTmF2YmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcE5hdkJhclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiQXBwTmF2QmFyIiwid2lkdGgiLCJiYXNlIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/layout/NavBar.tsx\n'
        )

        /***/
      },

    /***/ './src/component/walletConnect/WalletConnectContainer.tsx':
      /*!****************************************************************!*\
  !*** ./src/component/walletConnect/WalletConnectContainer.tsx ***!
  \****************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ WalletConnectContainer)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "@mantine/core");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ "@web3modal/react");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_react__WEBPACK_IMPORTED_MODULE_2__]);\n_web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction WalletConnectContainer() {\n    const { address , connector , isConnected  } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { open  } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.useConnectModal)();\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                children: "testestestststtest"\n            }, void 0, false, {\n                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/walletConnect/WalletConnectContainer.tsx",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            isConnected ? /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    address,\n                    connector?.name,\n                    connector?.id\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: open,\n                variant: "gradient",\n                gradient: {\n                    from: "orange",\n                    to: "red"\n                },\n                children: " Connect "\n            }, void 0, false, {\n                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/walletConnect/WalletConnectContainer.tsx",\n                lineNumber: 18,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/walletConnect/WalletConnectContainer.tsx",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDd0I7QUFFaEQsU0FBU0csc0JBQXNCLEdBQUc7SUFDL0MsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLFNBQVMsR0FBRUMsV0FBVyxHQUFFLEdBQUdMLDREQUFVLEVBQUU7SUFDeEQsTUFBTSxFQUFFTSxJQUFJLEdBQUMsR0FBR0wsaUVBQWUsRUFBRTtJQUVqQyxxQkFDRSx1RUFBQ00sS0FBRzs7MEJBQ0YsdUVBQUNDLEdBQUM7MEJBQUMsb0JBQWtCOzs7OztvQkFBSTtZQUN4QkgsV0FBVyxpQkFDVjs7b0JBQ0dGLE9BQU87b0JBQ1BDLFNBQVMsRUFBRUssSUFBSTtvQkFDZkwsU0FBUyxFQUFFTSxFQUFFOzs0QkFDYixpQkFFSix1RUFBQ1gsaURBQU07Z0JBQUNZLE9BQU8sRUFBRUwsSUFBSTtnQkFBQ00sT0FBTyxFQUFDLFVBQVU7Z0JBQUNDLFFBQVEsRUFBRTtvQkFBRUMsSUFBSSxFQUFFLFFBQVE7b0JBQUVDLEVBQUUsRUFBRSxLQUFLO2lCQUFFOzBCQUFFLFdBQVM7Ozs7O29CQUFVOzs7Ozs7WUFFbEcsQ0FDUDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdENvbnRhaW5lci50c3g/NDlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3RNb2RhbCB9IGZyb20gJ0B3ZWIzbW9kYWwvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYWxsZXRDb25uZWN0Q29udGFpbmVyKCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGNvbm5lY3RvciwgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKVxuICBjb25zdCB7IG9wZW59ID0gdXNlQ29ubmVjdE1vZGFsKClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD50ZXN0ZXN0ZXN0c3RzdHRlc3Q8L3A+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2FkZHJlc3N9XG4gICAgICAgICAge2Nvbm5lY3Rvcj8ubmFtZX1cbiAgICAgICAgICB7Y29ubmVjdG9yPy5pZH1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgIDxCdXR0b24gb25DbGljaz17b3Blbn12YXJpYW50PVwiZ3JhZGllbnRcIiBncmFkaWVudD17eyBmcm9tOiAnb3JhbmdlJywgdG86ICdyZWQnIH19PiBDb25uZWN0IDwvQnV0dG9uID5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdE1vZGFsIiwiV2FsbGV0Q29ubmVjdENvbnRhaW5lciIsImFkZHJlc3MiLCJjb25uZWN0b3IiLCJpc0Nvbm5lY3RlZCIsIm9wZW4iLCJkaXYiLCJwIiwibmFtZSIsImlkIiwib25DbGljayIsInZhcmlhbnQiLCJncmFkaWVudCIsImZyb20iLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/walletConnect/WalletConnectContainer.tsx\n'
        )

        /***/
      },

    /***/ './src/component/walletConnect/WalletConnectModal.tsx':
      /*!************************************************************!*\
  !*** ./src/component/walletConnect/WalletConnectModal.tsx ***!
  \************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/ethereum */ "@web3modal/ethereum");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ "@web3modal/react");\n/* harmony import */ var _constant_walletConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/walletConnect */ "./src/constant/walletConnect.ts");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Get projectID at https://cloud.walletconnect.com\n// if (!process.env.NEXT_PUBLIC_PROJECT_ID)\n//   throw new Error(\'You need to provide NEXT_PUBLIC_PROJECT_ID env variable\')\n// Configure web3modal\nconst modalConfig = {\n    projectId: _constant_walletConnect__WEBPACK_IMPORTED_MODULE_3__.WALLET_CONNECT_PROJECT_ID,\n    theme: "dark",\n    accentColor: "default",\n    ethereum: {\n        appName: "web3Modal",\n        autoConnect: true,\n        chains: [\n            _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.chains.mainnet,\n            _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.chains.rinkeby,\n            // chains.avalanche,\n            // chains.avalancheFuji,\n            _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.chains.polygon,\n            _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.chains.polygonMumbai, \n        ],\n        providers: [\n            _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.providers.walletConnectProvider({\n                projectId: _constant_walletConnect__WEBPACK_IMPORTED_MODULE_3__.WALLET_CONNECT_PROJECT_ID\n            }), \n        ]\n    }\n};\nconst WalletConnect = ()=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n        config: modalConfig\n    }, void 0, false, {\n        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/component/walletConnect/WalletConnectModal.tsx",\n        lineNumber: 33,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdE1vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUVYO0FBQzRCO0FBRXhFLG1EQUFtRDtBQUNuRCwyQ0FBMkM7QUFDM0MsK0VBQStFO0FBRS9FLHNCQUFzQjtBQUN0QixNQUFNSSxXQUFXLEdBQWtCO0lBQ2pDQyxTQUFTLEVBQUVGLDhFQUF5QjtJQUNwQ0csS0FBSyxFQUFFLE1BQU07SUFDYkMsV0FBVyxFQUFFLFNBQVM7SUFDdEJDLFFBQVEsRUFBRTtRQUNSQyxPQUFPLEVBQUUsV0FBVztRQUNwQkMsV0FBVyxFQUFFLElBQUk7UUFDakJWLE1BQU0sRUFBRTtZQUNOQSwrREFBYztZQUNkQSwrREFBYztZQUNkLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEJBLCtEQUFjO1lBQ2RBLHFFQUFvQjtTQUNyQjtRQUNEQyxTQUFTLEVBQUU7WUFDVEEsZ0ZBQStCLENBQUM7Z0JBQUVJLFNBQVMsRUFBRUYsOEVBQXlCO2FBQUUsQ0FBQztTQUMxRTtLQUNGO0NBQ0Y7QUFFRCxNQUFNYSxhQUFhLEdBQWEsSUFBTTtJQUNwQyxxQkFBTyx1RUFBQ2QsdURBQVM7UUFBQ2UsTUFBTSxFQUFFYixXQUFXOzs7OztpQkFBSTtBQUMzQyxDQUFDO0FBRUQsaUVBQWVZLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3dhbGxldENvbm5lY3QvV2FsbGV0Q29ubmVjdE1vZGFsLnRzeD9jMzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYWlucywgcHJvdmlkZXJzIH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcmV1bSdcbmltcG9ydCB0eXBlIHsgQ29uZmlnT3B0aW9ucyB9IGZyb20gJ0B3ZWIzbW9kYWwvcmVhY3QnXG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3JlYWN0J1xuaW1wb3J0IHsgV0FMTEVUX0NPTk5FQ1RfUFJPSkVDVF9JRCB9IGZyb20gJy4uLy4uL2NvbnN0YW50L3dhbGxldENvbm5lY3QnXG5cbi8vIEdldCBwcm9qZWN0SUQgYXQgaHR0cHM6Ly9jbG91ZC53YWxsZXRjb25uZWN0LmNvbVxuLy8gaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEKVxuLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCBlbnYgdmFyaWFibGUnKVxuXG4vLyBDb25maWd1cmUgd2ViM21vZGFsXG5jb25zdCBtb2RhbENvbmZpZzogQ29uZmlnT3B0aW9ucyA9IHtcbiAgcHJvamVjdElkOiBXQUxMRVRfQ09OTkVDVF9QUk9KRUNUX0lELFxuICB0aGVtZTogJ2RhcmsnLFxuICBhY2NlbnRDb2xvcjogJ2RlZmF1bHQnLFxuICBldGhlcmV1bToge1xuICAgIGFwcE5hbWU6ICd3ZWIzTW9kYWwnLFxuICAgIGF1dG9Db25uZWN0OiB0cnVlLFxuICAgIGNoYWluczogW1xuICAgICAgY2hhaW5zLm1haW5uZXQsXG4gICAgICBjaGFpbnMucmlua2VieSxcbiAgICAgIC8vIGNoYWlucy5hdmFsYW5jaGUsXG4gICAgICAvLyBjaGFpbnMuYXZhbGFuY2hlRnVqaSxcbiAgICAgIGNoYWlucy5wb2x5Z29uLFxuICAgICAgY2hhaW5zLnBvbHlnb25NdW1iYWksXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIHByb3ZpZGVycy53YWxsZXRDb25uZWN0UHJvdmlkZXIoeyBwcm9qZWN0SWQ6IFdBTExFVF9DT05ORUNUX1BST0pFQ1RfSUQgfSksXG4gICAgXSxcbiAgfSxcbn1cblxuY29uc3QgV2FsbGV0Q29ubmVjdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8V2ViM01vZGFsIGNvbmZpZz17bW9kYWxDb25maWd9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENvbm5lY3RcbiJdLCJuYW1lcyI6WyJjaGFpbnMiLCJwcm92aWRlcnMiLCJXZWIzTW9kYWwiLCJXQUxMRVRfQ09OTkVDVF9QUk9KRUNUX0lEIiwibW9kYWxDb25maWciLCJwcm9qZWN0SWQiLCJ0aGVtZSIsImFjY2VudENvbG9yIiwiZXRoZXJldW0iLCJhcHBOYW1lIiwiYXV0b0Nvbm5lY3QiLCJtYWlubmV0Iiwicmlua2VieSIsInBvbHlnb24iLCJwb2x5Z29uTXVtYmFpIiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwiV2FsbGV0Q29ubmVjdCIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/walletConnect/WalletConnectModal.tsx\n'
        )

        /***/
      },

    /***/ './src/constant/walletConnect.ts':
      /*!***************************************!*\
  !*** ./src/constant/walletConnect.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "WALLET_CONNECT_PROJECT_ID": () => (/* binding */ WALLET_CONNECT_PROJECT_ID)\n/* harmony export */ });\nconst WALLET_CONNECT_PROJECT_ID = "f16771fa6ed9c09e0d301ccd5e4ef2be";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnQvd2FsbGV0Q29ubmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEseUJBQXlCLEdBQUcsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L3dhbGxldENvbm5lY3QudHM/ZmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfUFJPSkVDVF9JRCA9ICdmMTY3NzFmYTZlZDljMDllMGQzMDFjY2Q1ZTRlZjJiZSdcbiJdLCJuYW1lcyI6WyJXQUxMRVRfQ09OTkVDVF9QUk9KRUNUX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constant/walletConnect.ts\n'
        )

        /***/
      },

    /***/ './src/pages/_app.tsx':
      /*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo-client */ "./apollo-client.ts");\n/* harmony import */ var _component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/layout/Layout */ "./src/component/layout/Layout.tsx");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/player.css */ "./src/styles/player.css");\n/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_player_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ "@mantine/core");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__]);\n_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const { 0: colorScheme , 1: setColorScheme  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("dark");\n    const toggleColorScheme = (value)=>setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {\n                        children: "Next"\n                    }, void 0, false, {\n                        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {\n                        name: "viewport",\n                        content: "minimum-scale=1, initial-scale=1, width=device-width"\n                    }, void 0, false, {\n                        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n                client: _apollo_client__WEBPACK_IMPORTED_MODULE_4__["default"],\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.MantineProvider, {\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    theme: {\n                        colorScheme\n                    },\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.ColorSchemeProvider, {\n                        colorScheme: colorScheme,\n                        toggleColorScheme: toggleColorScheme,\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: "/mnt/c/Users/takuya/Documents/monorepo-templates/apps/front/src/pages/_app.tsx",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUduQjtBQUNJO0FBQ1E7QUFDTztBQUNqQjtBQUNEO0FBTVA7QUFFdEIsTUFBTU8sR0FBRyxHQUF1QixDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDNUQsTUFBTSxLQUFDQyxXQUFXLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBYyxNQUFNLENBQUM7SUFFbkUsTUFBTVUsaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBbUIsR0FDNUNGLGNBQWMsQ0FBQ0UsS0FBSyxJQUFLSCxDQUFBQSxXQUFXLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUU7SUFFdEUscUJBQ0U7OzBCQUNFLHVFQUFDVCxrREFBSTs7a0NBQ0gsdUVBQUNhLE9BQUs7a0NBQUMsTUFBSTs7Ozs7aUNBQVE7a0NBQ25CLHVFQUFDQyxNQUFJO3dCQUNIQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFDLHNEQUFzRDs7Ozs7aUNBQzlEOzs7Ozs7eUJBQ0c7MEJBQ1AsdUVBQUNqQiwwREFBYztnQkFBQ0csTUFBTSxFQUFFQSxzREFBTTswQkFDNUIscUZBQUNHLDBEQUFlO29CQUNkWSxnQkFBZ0I7b0JBQ2hCQyxnQkFBZ0I7b0JBQ2hCQyxLQUFLLEVBQUU7d0JBQ0xWLFdBQVc7cUJBQ1o7OEJBRUQscUZBQUNMLDhEQUFtQjt3QkFDbEJLLFdBQVcsRUFBRUEsV0FBVzt3QkFDeEJFLGlCQUFpQixFQUFFQSxpQkFBaUI7a0NBRXBDLHFGQUFDUixnRUFBTTtzQ0FDTCxxRkFBQ0ksU0FBUztnQ0FBRSxHQUFHQyxTQUFTOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3JCOzs7OztpQ0FDVzs7Ozs7NkJBQ047Ozs7O3lCQUNIOztvQkFDaEIsQ0FDSjtBQUNILENBQUM7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vYXBvbGxvLWNsaWVudCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L2xheW91dC9MYXlvdXQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3BsYXllci5jc3MnXG5cbmltcG9ydCB7XG4gIENvbG9yU2NoZW1lLFxuICBDb2xvclNjaGVtZVByb3ZpZGVyLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gJ0BtYW50aW5lL2NvcmUnXG5cbmNvbnN0IEFwcDogTmV4dFBhZ2U8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPignZGFyaycpXG5cbiAgY29uc3QgdG9nZ2xlQ29sb3JTY2hlbWUgPSAodmFsdWU/OiBDb2xvclNjaGVtZSkgPT5cbiAgICBzZXRDb2xvclNjaGVtZSh2YWx1ZSB8fCAoY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8TWFudGluZVByb3ZpZGVyXG4gICAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xuICAgICAgICAgIHdpdGhOb3JtYWxpemVDU1NcbiAgICAgICAgICB0aGVtZT17e1xuICAgICAgICAgICAgY29sb3JTY2hlbWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17Y29sb3JTY2hlbWV9XG4gICAgICAgICAgICB0b2dnbGVDb2xvclNjaGVtZT17dG9nZ2xlQ29sb3JTY2hlbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L01hbnRpbmVQcm92aWRlcj5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJIZWFkIiwidXNlU3RhdGUiLCJjbGllbnQiLCJMYXlvdXQiLCJDb2xvclNjaGVtZVByb3ZpZGVyIiwiTWFudGluZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29sb3JTY2hlbWUiLCJzZXRDb2xvclNjaGVtZSIsInRvZ2dsZUNvbG9yU2NoZW1lIiwidmFsdWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n'
        )

        /***/
      },

    /***/ './src/styles/globals.css':
      /*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
      /***/ () => {
        /***/
      },

    /***/ './src/styles/player.css':
      /*!*******************************!*\
  !*** ./src/styles/player.css ***!
  \*******************************/
      /***/ () => {
        /***/
      },

    /***/ '@apollo/client':
      /*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
      /***/ (module) => {
        'use strict'
        module.exports = require('@apollo/client')

        /***/
      },

    /***/ '@emotion/react/jsx-dev-runtime':
      /*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
      /***/ (module) => {
        'use strict'
        module.exports = require('@emotion/react/jsx-dev-runtime')

        /***/
      },

    /***/ '@mantine/core':
      /*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
      /***/ (module) => {
        'use strict'
        module.exports = require('@mantine/core')

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /***/ (module) => {
        'use strict'
        module.exports = require('next/head')

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        'use strict'
        module.exports = require('react')

        /***/
      },

    /***/ '@web3modal/ethereum':
      /*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
      /***/ (module) => {
        'use strict'
        module.exports = import('@web3modal/ethereum')

        /***/
      },

    /***/ '@web3modal/react':
      /*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
      /***/ (module) => {
        'use strict'
        module.exports = import('@web3modal/react')

        /***/
      },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__('./src/pages/_app.tsx')
  module.exports = __webpack_exports__
})()
