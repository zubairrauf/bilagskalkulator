/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: trptx-bilagsslider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar Fragment = wp.element.Fragment;\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InspectorControls = wp.editor.InspectorControls;\n\n\nregisterBlockType('cgb/block-trptx-bilagsslider', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Bilagskalkulator'), // Block title.\n\ticon: 'calculator', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\ttitle: { type: 'string', default: 'Hva kan du spare med bilagsautomasjon?' },\n\t\tdescription: { type: 'string', default: 'Finn ut hva bilagsautomasjon kan bety for deg og din bedrift ved å bruke kalkulatoren nedenfor til å estimere hvor mye du vil spare i kostnad og tid.' },\n\t\tsliderValue: { type: 'string', default: '1000' },\n\t\ttimeWithoutAutomation: { type: 'string', default: 180 },\n\t\ttimeWithAutomation: { type: 'string', default: 26 },\n\t\tbuttonText: { type: 'string', default: 'Bestill en demo' },\n\t\tbuttonURL: { type: 'string', default: 'https://tripletex.no' }\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className;\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ id: 'trpltx-backend-container' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Preview comes later'\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'tpltx-input-container' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-timewithout' },\n\t\t\t\t\t\t' Tid uten autmasjon:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-timewithout',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.timeWithoutAutomation,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ timeWithoutAutomation: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithoutAutomation: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithoutAutomation: 180 });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-timewith' },\n\t\t\t\t\t\t' Tid med autmasjon:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-timewith',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.timeWithAutomation,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ timeWithAutomation: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithAutomation: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithAutomation: 26 });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-button-text' },\n\t\t\t\t\t\t' Button text:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-buttton-text',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.buttonText,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ buttonText: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonText: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonText: 'Bestill en demo' });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-button-url' },\n\t\t\t\t\t\t' Button url:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-button-url',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.buttonURL,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ buttonURL: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonURL: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonURL: 'https://tripletex.no' });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHRycHR4LWJpbGFnc3NsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay10cnB0eC1iaWxhZ3NzbGlkZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ0JpbGFnc2thbGt1bGF0b3InKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdjYWxjdWxhdG9yJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdIdmEga2FuIGR1IHNwYXJlIG1lZCBiaWxhZ3NhdXRvbWFzam9uPycgfSxcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ0Zpbm4gdXQgaHZhIGJpbGFnc2F1dG9tYXNqb24ga2FuIGJldHkgZm9yIGRlZyBvZyBkaW4gYmVkcmlmdCB2ZWQgw6UgYnJ1a2Uga2Fsa3VsYXRvcmVuIG5lZGVuZm9yIHRpbCDDpSBlc3RpbWVyZSBodm9yIG15ZSBkdSB2aWwgc3BhcmUgaSBrb3N0bmFkIG9nIHRpZC4nIH0sXG5cdFx0c2xpZGVyVmFsdWU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcxMDAwJyB9LFxuXHRcdHRpbWVXaXRob3V0QXV0b21hdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogMTgwIH0sXG5cdFx0dGltZVdpdGhBdXRvbWF0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAyNiB9LFxuXHRcdGJ1dHRvblRleHQ6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdCZXN0aWxsIGVuIGRlbW8nIH0sXG5cdFx0YnV0dG9uVVJMOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnaHR0cHM6Ly90cmlwbGV0ZXgubm8nIH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBpZDogJ3RycGx0eC1iYWNrZW5kLWNvbnRhaW5lcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMScsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnUHJldmlldyBjb21lcyBsYXRlcidcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RwbHR4LWlucHV0LWNvbnRhaW5lcicgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdFx0eyBodG1sRm9yOiAnaW5wdXQtdGltZXdpdGhvdXQnIH0sXG5cdFx0XHRcdFx0XHQnIFRpZCB1dGVuIGF1dG1hc2pvbjonXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRcdGlkOiAnaW5wdXQtdGltZXdpdGhvdXQnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGltZVdpdGhvdXRBdXRvbWF0aW9uLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aG91dEF1dG9tYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKGUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aG91dEF1dG9tYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aG91dEF1dG9tYXRpb246IDE4MCB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHRcdHsgaHRtbEZvcjogJ2lucHV0LXRpbWV3aXRoJyB9LFxuXHRcdFx0XHRcdFx0JyBUaWQgbWVkIGF1dG1hc2pvbjonXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRcdGlkOiAnaW5wdXQtdGltZXdpdGgnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGltZVdpdGhBdXRvbWF0aW9uLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aEF1dG9tYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKGUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aEF1dG9tYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0aW1lV2l0aEF1dG9tYXRpb246IDI2IH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdFx0eyBodG1sRm9yOiAnaW5wdXQtYnV0dG9uLXRleHQnIH0sXG5cdFx0XHRcdFx0XHQnIEJ1dHRvbiB0ZXh0Oidcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdFx0aWQ6ICdpbnB1dC1idXR0dG9uLXRleHQnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYnV0dG9uVGV4dCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVGV4dDogZS50YXJnZXQudmFsdWUgfSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGJ1dHRvblRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBidXR0b25UZXh0OiAnQmVzdGlsbCBlbiBkZW1vJyB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHRcdHsgaHRtbEZvcjogJ2lucHV0LWJ1dHRvbi11cmwnIH0sXG5cdFx0XHRcdFx0XHQnIEJ1dHRvbiB1cmw6J1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0XHRpZDogJ2lucHV0LWJ1dHRvbi11cmwnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYnV0dG9uVVJMLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBidXR0b25VUkw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKGUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBidXR0b25VUkw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBidXR0b25VUkw6ICdodHRwczovL3RyaXBsZXRleC5ubycgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);