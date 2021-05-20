/*! For license information please see poi-onfido-failed.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,r){return(()=>{var o={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var r=n("react"),o=n.n(r),s=n("../../../node_modules/prop-types/index.js"),a=n("../../../node_modules/classnames/index.js"),i=n.n(a),c=n("@deriv/components"),p=n("@deriv/shared");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.children,n=e.className,r=e.full_width,s=e.icon,a=e.icon_row,l=e.message,u=e.text;return o().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":r}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},o().createElement("div",{className:i()("account-management__message-content",d({},"".concat(n,"__message-content"),n))},s&&o().createElement("div",{className:i()("account-management__message-icon",d({},"".concat(n,"__message-icon"),n))},s),a&&o().createElement("div",null,a),o().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",d({},"".concat(n,"__message"),n))},l),u&&o().createElement("div",{className:"account-management__text-container"},o().createElement(c.Text,{className:i()(d({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},u)),t))};l.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.string};const u=l},"./Components/poa-continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n("@deriv/components"),o=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(r.ButtonLink,{to:"/"},a().createElement(r.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,o.localize)("Continue trading")))}},"./Components/poa-continue-trading-button/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n("./Components/poa-continue-trading-button/continue-trading-button.jsx").M},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===s)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var r=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=r}},s={};function a(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>l});var e=a("react"),t=a.n(e),n=a("../../../node_modules/prop-types/index.js"),r=a("@deriv/components"),o=a("@deriv/shared"),s=a("@deriv/translations"),c=a("./Components/icon-message-content/index.js"),p=a("./Components/poa-continue-trading-button/index.js"),d=function(e){var n=e.suspected,a=t().useContext(o.PlatformContext).is_dashboard;return a&&n&&(c.default,s.Localize,r.StaticUrl,r.Icon,p.Z),t().createElement(c.default,{message:(0,s.localize)("Proof of identity verification failed"),text:(0,s.localize)("We were unable to verify your document automatically. We will try to verify your document manually. Please check back in 1-3 days."),icon:a?t().createElement(r.Icon,{icon:"IcPoiFailedDashboard",width:237,height:128}):t().createElement(r.Icon,{icon:"IcPoiFailed",size:128}),className:"account-management-dashboard"},a&&t().createElement(p.Z,null))};d.propTypes={suspected:n.PropTypes.bool};const l=d})(),i.default})()}));