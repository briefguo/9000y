/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	// document.write(require("./content.js"));


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*# sourceMappingURL=normalize.css.map */\nbody {\n  font: 14px/1.5 Helvetica, Tahoma, Arial, 'Hiragino Sans GB', \"Microsoft YaHei\", SimSun, Heiti, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background: #fff url(" + __webpack_require__(5) + ") 50% top no-repeat;\n}\n@font-face {\n  font-family: \"Source Han Sans\";\n  src: url(\"http://www3.res.meizu.com/static/cn/global/fonts/KaiGenGothicCN-ExtraLight_0e27cdf.eot\");\n  src: url(\"http://www3.res.meizu.com/static/cn/global/fonts/KaiGenGothicCN-ExtraLight_0e27cdf.eot?\") format('embedded-opentype'), url(\"http://www3.res.meizu.com/static/cn/global/fonts/KaiGenGothicCN-ExtraLight_1a18e71.woff\") format('woff'), url(\"http://www3.res.meizu.com/static/cn/global/fonts/KaiGenGothicCN-ExtraLight_1c81514.ttf\") format('truetype'), url(\"http://www3.res.meizu.com/static/cn/global/fonts/KaiGenGothicCN-ExtraLight_f2c91bf.svg\") format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Source Han Sans', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', \"Microsoft YaHei\", SimSun, Heiti, sans-serif;\n}\nsection {\n  padding: 8em 0;\n}\nheader {\n  padding-top: 1em;\n}\nfooter {\n  padding: 3em 0;\n}\nnav li {\n  padding: 1em 1.2em;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.path-nav {\n  padding: 15px 0;\n}\n.path-nav li {\n  padding-right: 10px;\n}\n.list-group li {\n  padding: 2px 0;\n}\n.panel-tag li {\n  padding-right: 20px;\n}\na {\n  text-decoration: none;\n}\n/**\n * flex-direction: row | row-reverse | column | column-reverse;\n * flex-wrap: nowrap | wrap | wrap-reverse;\n * flex-flow: || ;\n * justify-content: flex-start | flex-end | center | space-between | space-around;\n * align-items: flex-start | flex-end | center | baseline | stretch;\n * align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n *\n */\n.container,\n.container-center,\n.container-space-between {\n  width: 1170px;\n  margin: 0 auto;\n}\n.container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -moz-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  -o-flex-flow: row wrap;\n  flex-flow: row wrap;\n}\n.container-center {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n.container-space-between {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.inline {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-flex-flow: row nowrap;\n  -moz-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  -o-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n}\n.column {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: column nowrap;\n  -moz-flex-flow: column nowrap;\n  -ms-flex-flow: column nowrap;\n  -o-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n}\n.title-center {\n  text-align: center;\n  /*margin: 20px 0;*/\n}\na:hover,\na:focus {\n  color: #f46632;\n  outline: none;\n  text-decoration: none;\n}\n.hvr-underline-reveal {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  padding-bottom: 10px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  vertical-align: middle;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-underline-reveal:before {\n  position: absolute;\n  z-index: -1;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  content: \"\";\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n  background: #f56427;\n}\n.hvr-underline-reveal:hover:before,\n.hvr-underline-reveal:focus:before,\n.hvr-underline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n/* Fade */\n.hvr-fade {\n  display: inline-block;\n  overflow: hidden;\n  padding: 6.18px 10px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  vertical-align: middle;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-fade:hover,\n.hvr-fade:focus,\n.hvr-fade:active {\n  color: white;\n  border-radius: 1px;\n  background-color: #ff804c;\n}\n#Logo-nav {\n  width: 60px;\n  height: 45px;\n  opacity: 0.7;\n  border-radius: 2px;\n  background: #ec4c18 url(" + __webpack_require__(6) + ") center no-repeat;\n  background-size: 105%;\n}\n#Logo-footer {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  margin-left: 30px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n  background: #ccc url(" + __webpack_require__(7) + ") center no-repeat;\n  background-size: 80%;\n}\n#active-article {\n  height: 150px;\n  opacity: 0.7;\n}\n#active-article a {\n  color: #333;\n}\n#ContactUs a {\n  color: inherit;\n}\n#Content-contact {\n  height: 500px;\n  background-image: url(" + __webpack_require__(8) + ");\n  background-repeat: no-repeat;\n  background-position: 0 110%;\n}\nsection {\n  background-color: rgba(255, 255, 255, 0.8);\n}\nheader {\n  background-color: rgba(255, 255, 255, 0.8);\n}\nfooter {\n  color: #ccc;\n  background-color: rgba(0, 0, 0, 0.8);\n}\nfooter a {\n  color: inherit;\n}\na {\n  color: rgba(244, 102, 50, 0.8);\n}\n.text-gray {\n  color: #ccc;\n}\n.text-glance {\n  padding-bottom: 30px;\n  color: rgba(244, 102, 50, 0.6);\n}\n.btn-page {\n  display: inline-block;\n  padding: 0.618em 1em;\n  color: rgba(244, 102, 50, 0.8);\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.9);\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\n}\n.CW {\n  font-family: \"impact\";\n  font-size: 11pt;\n  display: inline-block;\n  margin: 10px 0 10px 10px;\n  padding: 0.309em 0.5em;\n  cursor: pointer;\n  letter-spacing: 0.8px;\n  opacity: 0.7;\n  color: #333;\n  /*vertical-align: top;*/\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fd72720b8732cf2038b3f699fae53b46.jpg";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAoCAYAAABAZ4KGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAO+ElEQVRo3s2ZaWxbV3bH/+9xJ0Waq0zTFE3JNrXYkmjKlmVZtqXEiZfEju0P9Zd0CYqZYoB2LJJAgnYwCIIgmA4SPbpo+2FQtAiQZmK0M2MlTeTYFpJ4kURFkqMlWixSEi2RNK2Vi8Sd7/WDTVaUKItxFvR8k3jfued377nnnHsugR9BrFZrAQA5wzBqgiA0JEmq2Wy2kiAIAUEQQoIgSIZh4gzDRFOpVCiZTPoAuBmGcQNYpChq/sewi/iB4NgMw+wlCKJWJBJVSySSEqFQeLKgoABbtmyBWCyGUCgEl8sFm80GQRCgaRqJRAKxWAyhUAiBQACBQADhcPirYDDoCgQC3zAMY6co6uv/F7AWi6WMzWaflEqlR9Rq9QWdTgeNRgOFQgGhUAg+nw82m52XLpqmEYvFEIlEsLS0BI/HA5fLNTgzMzOytLT0PwD+0NLSEv/JYS0WS6NYLL6o1WprS0tLTSUlJZDJZBAKhd/HlnUSjUbx6NEjDA8PY2hoqHV2dvbfKIpq+0lgzWZzlUQi+Vl5eflxo9FYptVqIRKJ1o1jGAYEka06lUohFoshHA4jlUpl/s9ms8HhcMDlcsHj8dZ9BzzedZ/Ph66urpF79+79KRKJvGWz2ZI/CqzZbGZzOJy/LSsr+/O6ujrT7t27s9yTYZhspU8MTiaT8Pl8ePDgAebn5xEMBtfBEASRAZbL5dDr9dBoNOByuesWLpFIYHBwENevX39/bm7u0uXLl4M/KKzZbNarVKo3Gxoa/qqmpibjqmsB14JOTk5icHAQoVAIbDYbTqcTer0eNTU1IEkyoyORSGB5eRmhUAiLi4tYWVmBTCaDyWRCcXFx1lxp3U6nE62tre97vd5LNpstb2DWJqC1O3fuvPzKK69cMBqN4HA4G4ISBAGCIBAMBnHnzh3Y7XYIBAIcPnwYSqUSExMT2LdvH0wmE5RKJZRKJVQqFbZu3YqioiIUFxejuLgYCoUCs7Oz6OvrA5vNhkajyfIGgiAgl8uhVCqNk5OTCqPR2Ga32xnkIRvCNjc3NxiNxn88f/58k1arzWs3PR4PPvnkEywuLuLo0aNoaGiAVCpFZ2cnQqEQ4vE4RkdHsbS0BJIkIRAIwGI9NoEkSfB4PCgUChgMBhAEgc7OTohEImzdunXdfAqFAgBqJiYmFjs6OrqfGdZsNjfU1NT89uzZsw1yuTwv0LGxMVy7dg0qlQqnTp3Cjh07QJIkhoaGMDo6ipdeegm7du1COBzG9PQ0HA4HHjx4gGAwCBaLBbFYnNFJkiS0Wi1isRh6e3tRXFy8LhASBAGZTAaPxyPbvXv3LbvdvvidYZubm/fu2bPnny5cuFC/ZcuWDSFXgw4PD+PmzZsoLy/Hiy++iIKCAgDA8vIybt68mTmrYrE4465yuRzLy8uYnp7G+Pg4vF4vGIaBQCDIBCe1Wo2JiQmEw+HM4q2em8fjIRqNap1O54OOjo6u7wRrNpuVRUVFtvPnz7+gVCrzAh0dHcWXX36Jffv24ejRo1lRemBgADMzM2hsbERBQUEmsvL5fCiVSpSUlKC4uBgSiQQOhwMdHR2YmprCw4cPweVyIZPJkEql4HQ6YTAYMouw2gY2m43x8fFIdXX1H7u6uuinwWaVN3w+/9KxY8fOaTSap65QGtThcODTTz9FXV0dGhoaAPxfqgiFQhgeHkZlZWXWmVsdWVksFqRSKaRSKQKBAGiahsFgwPT0ND7++OP0uUQikcjKzatFJBJBKpWem5ub0wGYzAvWbDYfNxqNFyorK7OM2kgCgQDsdjuCwSACgQCi0Sj4fH7m96GhITAMg7179+bUtzadxGIxFBYWor6+HrW1tfD5fJiYmEBfX9+GxQYAsFis9LwSbCKZQyCVSi/u27evgsvlbuq+NE2ju7sbPB4Pr776KtxuN9ra2hCNRkEQBJaWljA2NobS0lJIpdJNFw54XCXRNI1UKgUulwudToempiYcP34cPB4vnyNFbjYH+WRXj+7atau2qKhoU6MAwO12Y2pqCuXl5SgtLcXp06fhcrlw7do10DSNkZERkCSJqqqqvPSld2j1TqdleXkZBQUF687r6kVKJBIAEM4LlsViGbdv31612g03WkGGYeByuSAUCqHX6wEAOp0O586dg9frxUcffQSn04kDBw5kovJGutL6ZmZm4HA4wGKxsiKu3+/H2NgYdu7ciY1sSyQSWFlZaQcwmxesSCQqLSwszGsHYrEY5ufnUVhYmHXLKSkpwZkzZzA+Po7l5WWUlZUByF03p3fP5/Phiy++QFtbG9xuN0QiUdbO9vb2AgAqKipy6gKA+fl5LCwsOCmK2jTPkhaLhcvj8TTppL7Z+YrFYojFYpDL5RnXYxgGDMNAp9Ph4sWLYLFY6OnpySri10K2t7ejtbUVs7OzOHjwIKqrq7PG3L9/H8PDw6ivr4dYLM65aDRNw+FwYGVl5WY+G8VmGIYGkMwniKSFpukM6FqpqKgAwzD4/PPPAQB1dXUZd52dncXg4CCmpqbA5/Nx4MABGAwGiMVieDwe0DQNhmHgdrtx8+ZNVFRUZHY1lywuLsLpdLYzDHM7L1ibzZZ8880351dWVjIr9jRwHo8HHo+HhYWFdffW9N979uxBLBbDrVu3wOVysXv3bty7dw/Dw8MQiUQ4cOAAdu7cCYnkcbaIRCKIxWLYtm0bPB4Prl69Cr1ej8bGxpzelp5zYGAAHo/nv202W149KzYAhMPhicXFTV0+A6tWqzE+Po5QKJQxeC2wyWQCALS3t6OnpwcKhQK1tbUwGAyZb9Jj2Ww2BAIBvvnmGzAMg127duG5554Dh8PZEHRmZgZff/31f6VSqf/Iy3A8CVDJZHLQ6/UimXz65T9tXFlZGeLxOOx2e86uRNpAk8mE/fv3Y2pqCkVFRdi/f3/W4qS/C4fDmJiYgMvlQlVVFU6cOAE+n7+hhwWDQbS3t3fOzc395rt0LFgAUF9fPxUOh4t1Ol21TCbbsFpJi0gkgkAgQHd3N6LRKDQaTaZruDrIAEBxcTHYbDb6+/shlUozJWA0GsXCwgL6+/tx+/ZtCIVCnDlzBpWVlSBJcsM7cyQSwbVr1/r7+vr+wWazdeYLmoHt6upiqqurJ8Ph8AGDwaDZKIGvnrSwsBByuRx9fX1wOByZTmKufKjX6+H3+3Hr1i3weDzMzs7CbrdjYGAA0WgUVVVVOHLkCNRqdZZn5AJta2vr7+rq+pXNZrv+XUCBNW0Zi8Vy+vDhw2+fPHnSlG/7ZWFhAffu3cP09DQ4HA6USiVkMlkGOpFIIBqNwufzweFwQCqVYvv27ZDJZNi+fTu2bduWuatuBAk8jrw3btzo7+3t/VVLS8szdRjX+avVaj198ODBt1944QWTVCrN/H8z6EePHuHhw4dYWFhAIBBAIpEAQRAgSRJCoRAqlQoqlQoFBQWQSCTryr+1F4PVMjk5ievXr3/ldDrfoijqq2cBzQkLAGaz+cWSkpJfNzQ0NJSWlkIgEOT8OFdwAoB4PI5YLAaSJLNeAXJ9nwswkUiApmmsrKygt7fXZbfbbwcCgTcpinI9K+iGsABgsVh0fD7/FwaD4WRFRYWxqKgIMpkMXC530wC2Gtrv94PH40EikeTM4auveA8ePIDX683kXZfLhZmZmdcoinp/lV21AIQApimKWnd/tVqtJMMwf8bhcHYlk8lphmE+TZeS+bRS93M4nDNyudyk1WpfVqlUEIvFEIlEmaCULt2SySSi0SgikQhCoRBcrscbceLECeh0ug1Bp6am0N3djUAgkInYQqEQY2NjGB0drXzvvfe+tVgsJXK5/I0dO3bUcjgc49LS0m2v19u7srLyO4qixp8sBKlUKm1Go/GXcrkcfr8fIyMjV9xu9yWKombzfhEwm81CAFUkSZax2Ww1h8NRcLlcKYvF4hIE8Rc0Tb9P03Q8Ho/7I5FIIJFIvKNSqXDixAmk27CrYdO73NPTg66uLmi1WhiNRqjVaggEApAkCb/fjw8++ODu5OTkX5aVldmamprOFhUVgSRJhMNhuN1udHV13RgfH/87mqadCoXCdu7cuV+Wl5dn0tf09DRaW1uvTE9PX/rer3gWi4WNx8UJTVFUEgCam5t/vn///t89//zzOdNJGvTu3bvo7e1FfX09ampqcj6CffbZZxgYGPjktddeO7tt27Z1v8/Pz+PKlSs3JiYmvrx48eJv6urq1o3p7OzE1atX38jvie0pkgZ8svtSiUTy1pEjR84eOnToqa8HQ0ND6O3tRVNTE4xGY84FSaVSYBgGVVVVZ9N9rLVjFAoF1Gr1izRNy3O1lAiCgFQqBZfL3f69YdPS3Nx8VKPRWE+dOnW2oqJiwwsFQRBYXFxEd3c3TCbThqDA4xy+sLCAQ4cObVhVPXnb7ayurq4XiUQ5xzy5TSV/EFir1fpzk8n0N42NjaZ0Z3KjYDQ3N4e2tjZwOJysjmQuGRkZwdLSElQqVZaO1XL//n243W5nU1NTfa4xTzohk7FY7JvvBdvc3KwrKCj4+2PHjp2sr6/X53Lb9OTxeBzDw8O4e/fujcnJyV+Xlpb+NhgMNuaqxWmaxszMDHp6en7v9/vvO53OV/bs2WPicDggSTLjNR6PB3fu3LkSCAQ+6u/vL+DxeBckEglIkgRN01heXsa333472dPT8zZFUf/5zLBWq7VKr9e/c/z48ZfTLZi1gGlxu93o6OgYGRwcbI1Go/96+fJl7+uvv/7XH3744b9XVlY2arVaCASCTCHhcrnQ39//+7m5uZ+1tLSEORwOBgcHIZPJTOkiJR6PY3x8/IrP5/uFzWbzs9lsjI6OYsuWLVoOh1ObTCYRCAQ+8fv9V9999933gWd8ebdarVUVFRXvnD59+mW1Wo1oNLpuDEmSiEajGBoaQkdHx598Pt8/22y2r9bo0ZAkeUEoFNbw+XwpwzB0JBKZDYfDHQCutLS0ZIKfxWKpIAhCTxCEEACfYZgwgM9bWlrCa3U++T1KEISvpaUl80rwTLBvvPGGVK1W62Uy2duxWOxlmqazuoVp2Egk0un1eq8mEol/oSgq+jSdVquVXG3YjyHPnGetVquUYRg9gGUASTzOtSSAtMFsAH6KojZtcf5U8r9EHen7Fa2dNQAAAABJRU5ErkJggg=="

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "074e7ef3d034526022b60f829019c108.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);