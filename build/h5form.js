/* h5form v0.2.3
 * homepage: http://gucong3000.github.io/h5form/
 */
!function(a){"use strict";window.jQuery?a(jQuery):window.seajs?seajs.use(["jquery"],a):a()}(function(a){"use strict";!function(b,c){var d=b.document,e=d.querySelector?d.documentMode:7,f=d.scripts||d.querySelector("script"),g=d.documentElement.children[0],h="uniqueID"in d,i=b.h5form||{},j=b.seajs,k,l;function m(a){return a=d.createElement(a),g.insertBefore(a,g.firstChild),a}function n(a,c,d){b.addEventListener(a,c,d)}function o(a,b){k||(k=m("style"));var c=a+"{"+b+"}";try{k.appendChild(d.createTextNode(c))}catch(e){try{k.styleSheet.addRule(a,b)}catch(e){k.styleSheet.cssText+=c}}}function p(a,b){return"boolean"==typeof a[b]?a[b]:!!a.attributes[b]}function q(a){return a&&/^submit$/i.test(a.type)&&a.form&&!(p(a,"formNoValidate")||p(a.form,"noValidate"))}function r(a,b){b=b||"focus",a&&a[b]&&setTimeout(function(){a[b]()},0)}function s(a){return f?f.replace(/[^\/]+$/,a):void 0}f=f[f.length-1];try{i=i||eval.call(b,f.innerHTML)||{}}catch(t){}f=f.getAttribute("src",2)||"";try{n("invalid",function(b){b.cancelBubble||(b.preventDefault(),a&&(b.stopPropagation(),b.stopImmediatePropagation(),a(b.target).trigger("invalid")))},!0),d.querySelector(":invalid"),l=!0}catch(t){}l?e&&h||setTimeout(function(){n("click",function(a){var b=a.target;a.defaultPrevented||1!==a.which||!q(b)||b.form.checkValidity()||(a.preventDefault(),r(b.form.querySelector(":invalid:not(:disabled)")))},!1)},10):(a&&a.extend(a.expr[":"],{invalid:function(a){return a.validity&&!a.validity.valid},valid:function(a){return a.validity&&a.validity.valid}}),d.attachEvent("onclick",function(){var a=event,b=a.returnValue,d=a.srcElement,e=d.form,f,g,h,i;if((b||b===c)&&q(d)){for(i=0,g=e.elements;i<g.length;i++)h=g[i],h.validity&&!h.validity.valid&&(f||(f=!0,r(h)),r(h,"checkValidity"));f&&(a.returnValue=!f)}})),e&&(9>e?(i.htc=j?j.data.dir+"h5form.htc":i.htc||s("h5form.htc"),i.htc&&o("form,input,select,textarea","behavior: url("+i.htc.replace(/^\w+:\/\/[^/]+/,"")+");")):h&&(j?j.use(["h5form.el"]):(!b.ValidityState||/^\[.*\]$/.test(b.ValidityState))&&(i.js=i.js||s("h5form.el.js"),i.js&&(m("script").src=i.js))))}(window)});