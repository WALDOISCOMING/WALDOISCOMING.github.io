/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29,19],{260:function(t,n,e){"use strict";e.r(n),e.d(n,"__extends",(function(){return r})),e.d(n,"__assign",(function(){return l})),e.d(n,"__rest",(function(){return c})),e.d(n,"__decorate",(function(){return v})),e.d(n,"__param",(function(){return d})),e.d(n,"__metadata",(function(){return _})),e.d(n,"__awaiter",(function(){return f})),e.d(n,"__generator",(function(){return m})),e.d(n,"__exportStar",(function(){return h})),e.d(n,"__values",(function(){return x})),e.d(n,"__read",(function(){return k})),e.d(n,"__spread",(function(){return y})),e.d(n,"__spreadArrays",(function(){return C})),e.d(n,"__await",(function(){return S})),e.d(n,"__asyncGenerator",(function(){return w})),e.d(n,"__asyncDelegator",(function(){return P})),e.d(n,"__asyncValues",(function(){return O})),e.d(n,"__makeTemplateObject",(function(){return E})),e.d(n,"__importStar",(function(){return M})),e.d(n,"__importDefault",(function(){return L}));var o=function(t,b){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},o(t,b)};function r(t,b){function n(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}var l=function(){return l=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},l.apply(this,arguments)};function c(s,t){var n={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(n[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(n[p[i]]=s[p[i]])}return n}function v(t,n,e,desc){var o,r=arguments.length,l=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l}function d(t,n){return function(e,o){n(e,o,t)}}function _(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)}function f(t,n,e,o){return new(e||(e=Promise))((function(r,l){function c(t){try{d(o.next(t))}catch(t){l(t)}}function v(t){try{d(o.throw(t))}catch(t){l(t)}}function d(t){t.done?r(t.value):new e((function(n){n(t.value)})).then(c,v)}d((o=o.apply(t,n||[])).next())}))}function m(t,body){var n,e,o,g,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=2&l[0]?e.return:l[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,e=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=r.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=body.call(t,r)}catch(t){l=[6,t],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function h(t,n){for(var p in t)n.hasOwnProperty(p)||(n[p]=t[p])}function x(t){var n="function"==typeof Symbol&&t[Symbol.iterator],i=0;return n?n.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function k(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),l=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return l}function y(){for(var t=[],i=0;i<arguments.length;i++)t=t.concat(k(arguments[i]));return t}function C(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var n=Array(s),e=0;for(i=0;i<t;i++)for(var a=arguments[i],o=0,r=a.length;o<r;o++,e++)n[e]=a[o];return n}function S(t){return this instanceof S?(this.v=t,this):new S(t)}function w(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=e.apply(t,n||[]),q=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(t){g[t]&&(i[t]=function(n){return new Promise((function(a,b){q.push([t,n,a,b])>1||r(t,n)}))})}function r(t,n){try{(e=g[t](n)).value instanceof S?Promise.resolve(e.value.v).then(l,c):v(q[0][2],e)}catch(t){v(q[0][3],t)}var e}function l(t){r("next",t)}function c(t){r("throw",t)}function v(t,n){t(n),q.shift(),q.length&&r(q[0][0],q[0][1])}}function P(t){var i,p;return i={},n("next"),n("throw",(function(t){throw t})),n("return"),i[Symbol.iterator]=function(){return this},i;function n(n,e){i[n]=t[n]?function(o){return(p=!p)?{value:S(t[n](o)),done:"return"===n}:e?e(o):o}:e}}function O(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,n=t[Symbol.asyncIterator];return n?n.call(t):(t=x(t),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i);function e(n){i[n]=t[n]&&function(e){return new Promise((function(o,r){(function(t,n,e,o){Promise.resolve(o).then((function(n){t({value:n,done:e})}),n)})(o,r,(e=t[n](e)).done,e.value)}))}}}function E(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}function M(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function L(t){return t&&t.__esModule?t:{default:t}}},261:function(t,n,e){t.exports={}},263:function(t,n,e){"use strict";e.r(n);e(266);var o=e(22),component=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"page_nav"},[n("ul",{staticClass:"mainmenu"},[n("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[n("n-link",{attrs:{to:"/"}},[n("span",[t._v("Home")])]),t._v(" "),n("ul",{staticClass:"mega__width--fullscreen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"mega__list"},[n("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 01수정필요\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/home-business"}},[n("span",[t._v("Home Business")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-creative-agency"}},[n("span",[t._v("Home Creative Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-design-studio"}},[n("span",[t._v("Home Design Studio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-digital-agency"}},[n("span",[t._v("Home Digital Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[n("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[n("span",[t._v("Home Minimal Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-presentation"}},[n("span",[t._v("Home Presentation")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/home-start-up"}},[n("span",[t._v("Home Start Ups")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-freelancer"}},[n("span",[t._v("Home Freelancer")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-product-landing"}},[n("span",[t._v("Home Product Landing")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-restaurant"}},[n("span",[t._v("Home Restaurant")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[n("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-onepage"}},[n("span",[t._v("Home Onepage")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[n("span",[t._v("Home Minimal Metro Grid")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 03\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/home-landing"}},[n("span",[t._v("Home Landing")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-service"}},[n("span",[t._v("Home Service")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[n("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-corona"}},[n("span",[t._v("Home Corona")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-essential"}},[n("span",[t._v("Home Essential")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-indie-musician"}},[n("span",[t._v("Indie Musician")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-type-hover"}},[n("span",[t._v("Home Portfolio Type Hover")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 04\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[n("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[n("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[n("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[n("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-blog-grid"}},[n("span",[t._v("Home Blog Grid")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[n("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-foodie"}},[n("span",[t._v("Home Foodie")])])],1)])])])])])],1),t._v(" "),n("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[n("n-link",{attrs:{to:"/about-us-01"}},[n("span",[t._v("Pages")])]),t._v(" "),n("ul",{staticClass:"mega__width--fullscreen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"mega__list"},[n("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 01\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about-us-01"}},[n("span",[t._v("About Us 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about-us-02"}},[n("span",[t._v("About Us 02")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about-us-03"}},[n("span",[t._v("About Us 03")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/pricing-plans"}},[n("span",[t._v("Pricing Plans")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/services-classic"}},[n("span",[t._v("Services Classic")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/services-modern"}},[n("span",[t._v("Services Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/services-list"}},[n("span",[t._v("Services List")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/pricing-plans-02"}},[n("span",[t._v("Pricing Plans 02")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 03\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/team-grid"}},[n("span",[t._v("Team Grid")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/team-carousel-01"}},[n("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/team-carousel-02"}},[n("span",[t._v("Our Team Carousel 02")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 04\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/contact-us-modern"}},[n("span",[t._v("Contact Us Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[n("span",[t._v("Contact Us With Map")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/career"}},[n("span",[t._v("Career")])])],1)])])])])])],1),t._v(" "),n("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[n("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[n("span",[t._v("Portfolio")])]),t._v(" "),n("ul",{staticClass:"mega__width--fullscreen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"mega__list"},[n("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO SAMPLES 01\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[n("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[n("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[n("span",[t._v("Portfolio With Caption")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO SAMPLES 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[n("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-02"}},[n("span",[t._v("Portfolio Grid Metro 02")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[n("span",[t._v("Portfolio Ajax Filter")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO DETAILS 01\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[n("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[n("span",[t._v("Portfolio Details")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[n("span",[t._v("Portfolio Details Right")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO DETAILS 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[n("span",[t._v("Left Details - Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[n("span",[t._v("Right Details - Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[n("span",[t._v("Image With Caption")])])],1)])])])])])],1),t._v(" "),n("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[n("n-link",{attrs:{to:""}},[n("span",[t._v("Elements")])]),t._v(" "),n("ul",{staticClass:"mega__width--fullscreen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"mega__list"},[n("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 01\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/element/team"}},[n("span",[t._v("Team")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/testimonial"}},[n("span",[t._v("Testimonial")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/pricing-box"}},[n("span",[t._v("Pricing Box")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/dividers"}},[n("span",[t._v("Dividers")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/element/brand-logo"}},[n("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[n("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[n("span",[t._v("Carousel Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[n("span",[t._v("Call To Action Banner")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 03\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/element/tab"}},[n("span",[t._v("Tab")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/gradation"}},[n("span",[t._v("Gradation")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/message-box"}},[n("span",[t._v("message-box")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/instagram"}},[n("span",[t._v("Instagram")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 04\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[n("span",[t._v("icon-boxes")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/lists"}},[n("span",[t._v("Lists")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/accordion"}},[n("span",[t._v("Accordion")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[n("span",[t._v("Contact & subscribe forms")])])],1)])])])])])],1),t._v(" "),n("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[n("n-link",{attrs:{to:"/blog/blog-creative"}},[n("span",[t._v("Blog")])]),t._v(" "),n("ul",{staticClass:"mega__width--fullscreen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"mega__list"},[n("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 01\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[n("span",[t._v("Blog Creative")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[n("span",[t._v("Blog Standard List")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[n("span",[t._v("Blog Grid Classic")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 02\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[n("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[n("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[n("span",[t._v("Blog Grid Simple")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 03\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[n("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[n("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[n("span",[t._v("Blog Grid Minimal Outline")])])],1)])]),t._v(" "),n("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 04\n                            "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[n("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-details"}},[n("span",[t._v("Blog Details")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[n("span",[t._v("Blog Details Modern Layout")])])],1)])])])])])],1)])])}),[],!1,null,null,null);n.default=component.exports},264:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(260).__importDefault(e(265));n.default=o.default},265:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(260),r=o.__importDefault(e(7));n.default=r.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var n=t,e=n.threshold,o=n.hideScrollUp,r=t.getScrollTop(),l=r>e,c=(r>=t.lastScrollTop||!o)&&l;t.lastScrollTop=r,t.isFixed!==c&&(t.isFixed=c,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var n,e=this.$slots.default;if(!e||!o.__spreadArrays(e)[0])return t();var r=o.__spreadArrays(e)[0],l=t(r.tag,r.data,r.children||r.text);return l.data=l.data||{class:""},"string"==typeof l.data.class&&(l.data.class=l.data.class.split(" ")),Array.isArray(l.data.class)&&(l.data.class=o.__spreadArrays(l.data.class).reduce((function(a,b){var t;return o.__assign(o.__assign({},a),((t={})[b]=!0,t))}),{})),l.data.class=o.__assign(o.__assign({},l.data.class),((n={})[this.headerClass]=!0,n[this.fixedClass]=!!this.isFixed,n)),l.data.class=Object.entries(l.data.class).map((function(t){var n=t[0];return t[1]?n:null})).filter((function(t){return t})).join(" "),l}})},266:function(t,n,e){"use strict";e(261)},323:function(t,n,e){"use strict";e.r(n);var o=e(264),r=e.n(o),l=e(263),c={components:{FixedHeader:r.a,Navigation:l.default},props:["addClass"]},v=(e(521),e(22)),component=Object(v.a)(c,(function(){var t=this,n=t._self._c;return n("fixed-header",[n("header",{staticClass:"br_header header-default header-transparent header-bar position-from--top light-logo--version haeder-fixed-width haeder-fixed-150 headroom--sticky header-mega-menu clearfix",class:t.addClass},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"header__wrapper"},[n("div",{staticClass:"header-left"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/brook-white.png",alt:"Brook Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"manu-hamber hamberger-trigger light-version d-none d-xl-block",on:{click:function(n){return t.$emit("toggleFullpageMenu")}}},[n("div",[n("i")])]),t._v(" "),n("div",{staticClass:"manu-hamber popup-mobile-click d-block light-version d-block d-xl-none",on:{click:function(n){return t.$emit("togglenav")}}},[n("div",[n("i")])])])])])])])])])}),[],!1,null,"502ec88a",null);n.default=component.exports},476:function(t,n,e){t.exports={}},521:function(t,n,e){"use strict";e(476)}}]);