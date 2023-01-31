(()=>{"use strict";var n={62:(n,o,e)=>{e.d(o,{Z:()=>A});var t=e(537),r=e.n(t),a=e(645),i=e.n(a)()(r());i.push([n.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n    margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n    list-style: none;\n}\n\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n    scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n        scroll-behavior: auto;\n    }\n\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}","",{version:3,sources:["webpack://./src/Assets/CSS/Reset.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;;;IAGI,sBAAsB;AAC1B;;AAEA,0BAA0B;AAC1B;;;;;;;;;;IAUI,SAAS;AACb;;AAEA,2GAA2G;AAC3G;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA,2BAA2B;AAC3B;IACI,uBAAuB;AAC3B;;AAEA,2BAA2B;AAC3B;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA,0DAA0D;AAC1D;IACI,8BAA8B;AAClC;;;AAGA,oCAAoC;AACpC;;IAEI,eAAe;IACf,cAAc;AAClB;;AAEA,yCAAyC;AACzC;;;;IAII,aAAa;AACjB;;AAEA,gGAAgG;AAChG;IACI;QACI,qBAAqB;IACzB;;IAEA;;;QAGI,qCAAqC;QACrC,uCAAuC;QACvC,sCAAsC;QACtC,gCAAgC;IACpC;AACJ",sourcesContent:["/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n    margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n    list-style: none;\n}\n\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n    scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n        scroll-behavior: auto;\n    }\n\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}"],sourceRoot:""}]);const A=i},998:(n,o,e)=>{e.d(o,{Z:()=>p});var t=e(537),r=e.n(t),a=e(645),i=e.n(a),A=e(667),l=e.n(A),s=new URL(e(907),e.b),c=i()(r()),d=l()(s);c.push([n.id,':root {\n    --font-family: -apple-system, system-ui, "Segoe UI", Roboto, Noto, Oxygen-Sans, Ubuntu, Cantrell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    --background: #354F8B;\n    --title: #D0A040;\n    --grid-background: #0F265D;\n    --cell-hover: #D0A040;\n    --button:#0F265D;\n\n}\n\n@font-face {\n    font-family: \'font\';\n    src: url('+d+");\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody,\nhtml {\n    min-height: 100vh;\n    font-family: var(--font-family);\n    scroll-behavior: smooth;\n    background-color: var(--background);\n    box-sizing: border-box;\n}\n\n.container {\n    min-width: 990px;\n    max-width: 1080px;\n    margin: 0 auto;\n}\n\n.title {\n    font-family: 'font', var(--font-family);\n    font-size: 3rem;\n    font-weight: bolder;\n    color: var(--title);\n    text-align: center;\n    padding-top: 50px;\n}\n\n.display-text{\n    text-align: center;\n    font-size: 1.4rem;\n    font-family: 'font', var(--font-family);\n    color: var(--title);\n    padding-top: 50px;\n    display: none;\n}\n\n.player-new {\n    font-size: 1.4rem;\n    font-family: 'font', var(--font-family);\n    margin: 0 auto;\n    align-items: center;\n    padding-top: 100px;\n    display: flex;\n    gap: 50px;\n    flex-direction: column;\n}\n.player-new *{\n    color: var(--title);\n    text-align: center;\n}\n\n.player-new input{\n    border: 3px solid var(--cell-hover);\n}\n.player-new button,\n.restart,\n.start{\n    padding: 5px 30px;\n    background-color: var(--button);\n}\n\n.restart,\n.start{\n    display: none;\n    color: var(--title);\n    font-size: 1.1rem;\n    font-family: 'font', var(--font-family);\n    margin: 50px auto;\n}\n.battlefield {\n    padding-top: 50px;\n    display: flex;\n    gap: 100px;\n    justify-content: center;\n}\n\n.grid-one,\n.grid-two {\n    height: max-content;\n    display: none;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    background-color: var(--grid-background);\n\n\n}\n\n.grid-one *,\n.grid-two * {\n    border: 4px solid var(--background);\n}\n\n.grid-one *:hover,\n.grid-two *:hover {\n    border: 4px solid var(--cell-hover);\n}\n\n\n\n\n\n.color-primary-0 {\n    color: #354F8B\n}\n\n/* Main Primary color */\n.color-primary-1 {\n    color: #7B90BF\n}\n\n.color-primary-2 {\n    color: #5068A0\n}\n\n.color-primary-3 {\n    color: #203A76\n}\n\n.color-primary-4 {\n    color: #0F265D\n}\n\n.color-secondary-1-0 {\n    color: #D04440\n}\n\n/* Main Secondary color (1) */\n.color-secondary-1-1 {\n    color: #FF9D9B\n}\n\n.color-secondary-1-2 {\n    color: #EF6C69\n}\n\n.color-secondary-1-3 {\n    color: #B02522\n}\n\n.color-secondary-1-4 {\n    color: #8A0B08\n}\n\n.color-secondary-2-0 {\n    color: #33A43A\n}\n\n/* Main Secondary color (2) */\n.color-secondary-2-1 {\n    color: #81D687\n}\n\n.color-secondary-2-2 {\n    color: #53BC59\n}\n\n.color-secondary-2-3 {\n    color: #1A8A22\n}\n\n.color-secondary-2-4 {\n    color: #066D0D\n}\n\n.color-complement-0 {\n    color: #D0A040\n}\n\n/* Main Complement color */\n.color-complement-1 {\n    color: #FFDE9B\n}\n\n.color-complement-2 {\n    color: #EFC269\n}\n\n.color-complement-3 {\n    color: #B08022\n}\n\n.color-complement-4 {\n    color: #8A5F08\n}","",{version:3,sources:["webpack://./src/Assets/CSS/Style.css"],names:[],mappings:"AAAA;IACI,wLAAwL;IACxL,qBAAqB;IACrB,gBAAgB;IAChB,0BAA0B;IAC1B,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,4CAAoC;IACpC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,+BAA+B;IAC/B,uBAAuB;IACvB,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,uCAAuC;IACvC,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,uCAAuC;IACvC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,uCAAuC;IACvC,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC;AACA;;;IAGI,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,uCAAuC;IACvC,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,wCAAwC;;;AAG5C;;AAEA;;IAEI,mCAAmC;AACvC;;AAEA;;IAEI,mCAAmC;AACvC;;;;;;AAMA;IACI;AACJ;;AAEA,uBAAuB;AACvB;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA,6BAA6B;AAC7B;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA,6BAA6B;AAC7B;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA,0BAA0B;AAC1B;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ",sourcesContent:[":root {\n    --font-family: -apple-system, system-ui, \"Segoe UI\", Roboto, Noto, Oxygen-Sans, Ubuntu, Cantrell, \"Helvetica Neue\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    --background: #354F8B;\n    --title: #D0A040;\n    --grid-background: #0F265D;\n    --cell-hover: #D0A040;\n    --button:#0F265D;\n\n}\n\n@font-face {\n    font-family: 'font';\n    src: url('../Font/PressStart2P.ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody,\nhtml {\n    min-height: 100vh;\n    font-family: var(--font-family);\n    scroll-behavior: smooth;\n    background-color: var(--background);\n    box-sizing: border-box;\n}\n\n.container {\n    min-width: 990px;\n    max-width: 1080px;\n    margin: 0 auto;\n}\n\n.title {\n    font-family: 'font', var(--font-family);\n    font-size: 3rem;\n    font-weight: bolder;\n    color: var(--title);\n    text-align: center;\n    padding-top: 50px;\n}\n\n.display-text{\n    text-align: center;\n    font-size: 1.4rem;\n    font-family: 'font', var(--font-family);\n    color: var(--title);\n    padding-top: 50px;\n    display: none;\n}\n\n.player-new {\n    font-size: 1.4rem;\n    font-family: 'font', var(--font-family);\n    margin: 0 auto;\n    align-items: center;\n    padding-top: 100px;\n    display: flex;\n    gap: 50px;\n    flex-direction: column;\n}\n.player-new *{\n    color: var(--title);\n    text-align: center;\n}\n\n.player-new input{\n    border: 3px solid var(--cell-hover);\n}\n.player-new button,\n.restart,\n.start{\n    padding: 5px 30px;\n    background-color: var(--button);\n}\n\n.restart,\n.start{\n    display: none;\n    color: var(--title);\n    font-size: 1.1rem;\n    font-family: 'font', var(--font-family);\n    margin: 50px auto;\n}\n.battlefield {\n    padding-top: 50px;\n    display: flex;\n    gap: 100px;\n    justify-content: center;\n}\n\n.grid-one,\n.grid-two {\n    height: max-content;\n    display: none;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    background-color: var(--grid-background);\n\n\n}\n\n.grid-one *,\n.grid-two * {\n    border: 4px solid var(--background);\n}\n\n.grid-one *:hover,\n.grid-two *:hover {\n    border: 4px solid var(--cell-hover);\n}\n\n\n\n\n\n.color-primary-0 {\n    color: #354F8B\n}\n\n/* Main Primary color */\n.color-primary-1 {\n    color: #7B90BF\n}\n\n.color-primary-2 {\n    color: #5068A0\n}\n\n.color-primary-3 {\n    color: #203A76\n}\n\n.color-primary-4 {\n    color: #0F265D\n}\n\n.color-secondary-1-0 {\n    color: #D04440\n}\n\n/* Main Secondary color (1) */\n.color-secondary-1-1 {\n    color: #FF9D9B\n}\n\n.color-secondary-1-2 {\n    color: #EF6C69\n}\n\n.color-secondary-1-3 {\n    color: #B02522\n}\n\n.color-secondary-1-4 {\n    color: #8A0B08\n}\n\n.color-secondary-2-0 {\n    color: #33A43A\n}\n\n/* Main Secondary color (2) */\n.color-secondary-2-1 {\n    color: #81D687\n}\n\n.color-secondary-2-2 {\n    color: #53BC59\n}\n\n.color-secondary-2-3 {\n    color: #1A8A22\n}\n\n.color-secondary-2-4 {\n    color: #066D0D\n}\n\n.color-complement-0 {\n    color: #D0A040\n}\n\n/* Main Complement color */\n.color-complement-1 {\n    color: #FFDE9B\n}\n\n.color-complement-2 {\n    color: #EFC269\n}\n\n.color-complement-3 {\n    color: #B08022\n}\n\n.color-complement-4 {\n    color: #8A5F08\n}"],sourceRoot:""}]);const p=c},645:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var e="",t=void 0!==o[5];return o[4]&&(e+="@supports (".concat(o[4],") {")),o[2]&&(e+="@media ".concat(o[2]," {")),t&&(e+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),e+=n(o),t&&(e+="}"),o[2]&&(e+="}"),o[4]&&(e+="}"),e})).join("")},o.i=function(n,e,t,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var l=this[A][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),o.push(c))}},o}},667:n=>{n.exports=function(n,o){return o||(o={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),o.hash&&(n+=o.hash),/["'() \t\n]|(%20)/.test(n)||o.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var o=n[1],e=n[3];if(!e)return o;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(r," */");return[o].concat([a]).join("\n")}return[o].join("\n")}},379:n=>{var o=[];function e(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var l=n[A],s=t.base?l[0]+t.base:l[0],c=a[s]||0,d="".concat(s," ").concat(c);a[s]=c+1;var p=e(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)o[p].references++,o[p].updater(u);else{var m=r(u,t);t.byIndex=A,o.splice(A,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,o){var e=o.domAPI(o);return e.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;e.update(n=o)}else e.remove()}}n.exports=function(n,r){var a=t(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);o[A].references--}for(var l=t(n,r),s=0;s<a.length;s++){var c=e(a[s]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}a=l}}},569:n=>{var o={};n.exports=function(n,e){var t=function(n){if(void 0===o[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}o[n]=e}return o[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},565:(n,o,e)=>{n.exports=function(n){var o=e.nc;o&&n.setAttribute("nonce",o)}},795:n=>{n.exports=function(n){var o=n.insertStyleElement(n);return{update:function(e){!function(n,o,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,r&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(t,n,o.options)}(o,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}},907:(n,o,e)=>{n.exports=e.p+"PressStart2P.ttf"}},o={};function e(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return e.d(o,{a:o}),o},e.d=(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var o=e.g.document;if(!n&&o&&(o.currentScript&&(n=o.currentScript.src),!n)){var t=o.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{const n={hit(){this.sunk||(this.hits++,this.isSunk())},isSunk(){this.length===this.hits&&(this.sunk=!0)}},o=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object.assign(Object.create(n),{length:o,hits:0,sunk:!1})},t={placeShip(n,o,e,t){if(0<=o&&o<10&&0<=e&&e<10&&(!(n.length-1+o>9||e>9)||"x"!==t&&"X"!==t)&&(!(o>9||n.length-1+e>9)||"y"!==t&&"Y"!==t)){if("x"===t||"X"===t){for(let t=0;t<n.length;t++)if(this.GameBoardData[e][o+t])return}else if("y"===t||"Y"===t)for(let t=0;t<n.length;t++)if(this.GameBoardData[e+t][o])return;if("x"===t||"X"===t)for(let t=0;t<n.length;t++)this.GameBoardData[e][o+t]=n;else if("y"===t||"Y"===t)for(let t=0;t<n.length;t++)this.GameBoardData[e+t][o]=n;this.Ships.push(n)}},receiveAttack(n,o){this.GameBoardData[o][n]?(this.GameBoardData[o][n].hit(),this.GameBoardData[o][n]="Hit"):this.GameBoardData[o][n]="Miss"},allSunk(){let n=0;return this.Ships.forEach((o=>{o.sunk&&n++})),this.Ships.length===n}},r=()=>Object.assign(Object.create(t),{GameBoardData:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],Ships:[]}),a={attack(n,o,e){return!this.AlreadyAttacked(n,o,e)&&(e.receiveAttack(n,o),!0)},RandomAttack(n){let o=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());return this.attack(o,e,n)},AlreadyAttacked(n,o,e){switch(e.GameBoardData[o][n]){case 0:return!1;case"Hit":case"Miss":return!0}}},i=()=>Object.assign(Object.create(a),{});let A={subscriptions:{GameBoardOne:[],GameBoardTwo:[]},subscribe:function(n,o){this.subscriptions[n]=this.subscriptions[n]||[],this.subscriptions[n].push(o)},unsubscribe:function(n,o){if(this.subscriptions[n]){const e=this.subscriptions.indexOf(o);-1!==e&&this.subscriptions[n].splice(e,1)}},publish:function(n,o){this.subscriptions[n]&&this.subscriptions[n].forEach((n=>{n(o)}))}};(function(){const n=document.querySelector(".name"),o=document.querySelector(".player-new"),e=document.querySelector(".grid-one"),t=document.querySelector(".grid-two"),r=document.querySelector(".display-text"),a=document.querySelector(".restart"),i=document.querySelector(".start"),l=document.querySelectorAll(".grid-one div"),s=document.querySelectorAll(".grid-two div");function c(n,o,e){document.addEventListener(n,(n=>{n.target.matches(o)&&e(n)}))}c("click",".new-game",(function(){o.style.display="none",e.style.display="grid",r.style.display="block",r.textContent=`Place your Ships Captain ${n.value}`,a.style.display="block",i.style.display="block"})),c("click",".restart",(function(){e.style.display="none",t.style.display="none",r.style.display="none",a.style.display="none",i.style.display="none",o.style.display="flex"})),c("click",".start",(function(){i.style.display="none",t.style.display="grid"})),A.subscribe("GameBoardOne",(function(n){console.log(n);for(let o=0;o<10;o++)for(let e=0;e<10;e++)"object"==typeof n[o][e]&&(l[Number(`${o}${e}`)].style.backgroundColor="#8A5F08")})),A.subscribe("GameBoardTwo",(function(n){for(let o=0;o<10;o++)for(let e=0;e<10;e++)"object"==typeof n[o][e]&&(s[Number(`${o}${e}`)].style.backgroundColor="#8A5F08")}))})(),function(){i(),i();let n=r(),e=r(),t=o(5),a=o(4),l=o(3),s=o(3),c=o(2),d=o(5),p=o(4),u=o(3),m=o(3),f=o(2);n.placeShip(t,0,0,"y"),n.placeShip(a,4,5,"y"),n.placeShip(l,2,2,"y"),n.placeShip(s,6,5,"x"),n.placeShip(c,7,6,"x"),e.placeShip(d,2,0,"x"),e.placeShip(p,0,9,"x"),e.placeShip(u,9,7,"Y"),e.placeShip(m,0,4,"x"),e.placeShip(f,5,6,"x"),A.publish("GameBoardOne",n.GameBoardData),A.publish("GameBoardTwo",e.GameBoardData)}();var l=e(379),s=e.n(l),c=e(795),d=e.n(c),p=e(569),u=e.n(p),m=e(565),f=e.n(m),C=e(216),h=e.n(C),B=e(589),y=e.n(B),g=e(62),I={};I.styleTagTransform=y(),I.setAttributes=f(),I.insert=u().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=h(),s()(g.Z,I),g.Z&&g.Z.locals&&g.Z.locals;var b=e(998),v={};v.styleTagTransform=y(),v.setAttributes=f(),v.insert=u().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=h(),s()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals})()})();
//# sourceMappingURL=mainb3912e571b6dc8f65ed8.bundle.js.map