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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: trptx-bilagsslider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar Fragment = wp.element.Fragment;\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InspectorControls = wp.editor.InspectorControls;\n\n\nregisterBlockType('cgb/block-trptx-bilagsslider', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('trptx-bilagsslider - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\ttitle: { type: 'string', default: 'Hva kan du spare med bilagsautomasjon?' },\n\t\tdescription: { type: 'string', default: 'Finn ut hva bilagsautomasjon kan bety for deg og din bedrift ved å bruke kalkulatoren nedenfor til å estimere hvor mye du vil spare i kostnad og tid.' },\n\t\tsliderValue: { type: 'string', default: '1000' },\n\t\ttimeWithoutAutomation: { type: 'string', default: 180 },\n\t\ttimeWithAutomation: { type: 'string', default: 26 },\n\t\tbuttonText: { type: 'string', default: 'Bestill en demo' },\n\t\tbuttonURL: { type: 'string', default: 'https://tripletex.no' }\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className;\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ id: 'trpltx-backend-container' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Preview comes later'\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'tpltx-input-container' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-timewithout' },\n\t\t\t\t\t\t' Tid uten autmasjon:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-timewithout',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.timeWithoutAutomation,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ timeWithoutAutomation: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithoutAutomation: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithoutAutomation: 180 });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-timewith' },\n\t\t\t\t\t\t' Tid med autmasjon:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-timewith',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.timeWithAutomation,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ timeWithAutomation: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithAutomation: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ timeWithAutomation: 26 });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-button-text' },\n\t\t\t\t\t\t' Button text:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-buttton-text',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.buttonText,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ buttonText: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonText: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonText: 'Bestill en demo' });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'input-button-url' },\n\t\t\t\t\t\t' Button url:'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('input', {\n\t\t\t\t\t\tid: 'input-button-url',\n\t\t\t\t\t\ttype: 'text',\n\t\t\t\t\t\tvalue: attributes.buttonURL,\n\t\t\t\t\t\tonChange: function onChange(e) {\n\t\t\t\t\t\t\treturn setAttributes({ buttonURL: e.target.value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tonBlur: function onBlur(e) {\n\t\t\t\t\t\t\tif (e.target.value.replace(/\\s/g, '').length > 0) {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonURL: e.target.value });\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetAttributes({ buttonURL: 'https://tripletex.no' });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement('br', null),\n\t\t\t\t\twp.element.createElement('br', null)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHRycHR4LWJpbGFnc3NsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay10cnB0eC1iaWxhZ3NzbGlkZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ3RycHR4LWJpbGFnc3NsaWRlciAtIENHQiBCbG9jaycpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NoaWVsZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnSHZhIGthbiBkdSBzcGFyZSBtZWQgYmlsYWdzYXV0b21hc2pvbj8nIH0sXG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdGaW5uIHV0IGh2YSBiaWxhZ3NhdXRvbWFzam9uIGthbiBiZXR5IGZvciBkZWcgb2cgZGluIGJlZHJpZnQgdmVkIMOlIGJydWtlIGthbGt1bGF0b3JlbiBuZWRlbmZvciB0aWwgw6UgZXN0aW1lcmUgaHZvciBteWUgZHUgdmlsIHNwYXJlIGkga29zdG5hZCBvZyB0aWQuJyB9LFxuXHRcdHNsaWRlclZhbHVlOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnMTAwMCcgfSxcblx0XHR0aW1lV2l0aG91dEF1dG9tYXRpb246IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6IDE4MCB9LFxuXHRcdHRpbWVXaXRoQXV0b21hdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogMjYgfSxcblx0XHRidXR0b25UZXh0OiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnQmVzdGlsbCBlbiBkZW1vJyB9LFxuXHRcdGJ1dHRvblVSTDogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ2h0dHBzOi8vdHJpcGxldGV4Lm5vJyB9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEZyYWdtZW50LFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgaWQ6ICd0cnBsdHgtYmFja2VuZC1jb250YWluZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnaDEnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J1ByZXZpZXcgY29tZXMgbGF0ZXInXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICd0cGx0eC1pbnB1dC1jb250YWluZXInIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHRcdHsgaHRtbEZvcjogJ2lucHV0LXRpbWV3aXRob3V0JyB9LFxuXHRcdFx0XHRcdFx0JyBUaWQgdXRlbiBhdXRtYXNqb246J1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0XHRpZDogJ2lucHV0LXRpbWV3aXRob3V0Jyxcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpbWVXaXRob3V0QXV0b21hdGlvbixcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhvdXRBdXRvbWF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhvdXRBdXRvbWF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhvdXRBdXRvbWF0aW9uOiAxODAgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0XHR7IGh0bWxGb3I6ICdpbnB1dC10aW1ld2l0aCcgfSxcblx0XHRcdFx0XHRcdCcgVGlkIG1lZCBhdXRtYXNqb246J1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0XHRpZDogJ2lucHV0LXRpbWV3aXRoJyxcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpbWVXaXRoQXV0b21hdGlvbixcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhBdXRvbWF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhBdXRvbWF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGltZVdpdGhBdXRvbWF0aW9uOiAyNiB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHRcdHsgaHRtbEZvcjogJ2lucHV0LWJ1dHRvbi10ZXh0JyB9LFxuXHRcdFx0XHRcdFx0JyBCdXR0b24gdGV4dDonXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRcdGlkOiAnaW5wdXQtYnV0dHRvbi10ZXh0Jyxcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJ1dHRvblRleHQsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvblRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKGUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBidXR0b25UZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVGV4dDogJ0Jlc3RpbGwgZW4gZGVtbycgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0XHR7IGh0bWxGb3I6ICdpbnB1dC1idXR0b24tdXJsJyB9LFxuXHRcdFx0XHRcdFx0JyBCdXR0b24gdXJsOidcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdFx0aWQ6ICdpbnB1dC1idXR0b24tdXJsJyxcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJ1dHRvblVSTCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVVJMOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVVJMOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVVJMOiAnaHR0cHM6Ly90cmlwbGV0ZXgubm8nIH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

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