(self.webpackChunk=self.webpackChunk||[]).push([[135],{9755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9669),a=n.n(r);a().interceptors.request.use((function(e){return e.headers["X-Requested-With"]="XMLHttpRequest",e.headers.Accept="application/json",e})),window.axios=a();const s=window.axios},3135:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});n(5666),n(9554),n(4747),n(8674),n(1539);var r=n(9755),a=n(7377),s=n(1222);function i(e,t,n,r,a,s,i){try{var o=e[s](i),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){i(s,r,a,o,u,"next",e)}function u(e){i(s,r,a,o,u,"throw",e)}o(void 0)}))}}var u=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.forEach((function(e){var t=[e.getAttribute("data-url"),e.getAttribute("data-token"),e.innerHTML],n=t[0],i=t[1],u=t[2];e.addEventListener("click",o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.y)("Supprimer",o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,a.nT)(e),t.next=4,r.Z.delete(n,{data:{_token:i}});case 4:return 202===t.sent.status?(0,a.B6)(e.closest(e.getAttribute("data-target"))):(0,a.et)(e,u),t.next=8,(0,s.A)("success","Suppression effectuée avec succès !");case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.error({e:t.t0}),(0,a.et)(e,u),t.next=16,(0,s.A)("error","Désolé une erreur s'est produite !");case 16:case"end":return t.stop()}}),t,null,[[0,10]])}))));case 2:case"end":return t.stop()}}),t)}))))}))}},7377:(e,t,n)=>{"use strict";n.d(t,{B6:()=>r,nT:()=>a,et:()=>s});n(2564),n(9554),n(4747);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=t/1e3;e.style.transition="opacity ".concat(n,"s ease"),e.style.opacity=0,setTimeout((function(){return e.parentNode.removeChild(e)}),t)},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chargement...";e.setAttribute("disabled","disabled"),e.innerHTML='\n        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n        '.concat(t,"\n    ")},s=function(e,t){e.removeAttribute("disabled"),e.innerHTML=t}}}]);