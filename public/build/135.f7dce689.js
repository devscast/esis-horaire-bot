(self.webpackChunk=self.webpackChunk||[]).push([[135],{9755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9669),o=n.n(r);o().interceptors.request.use((function(e){return e.headers["X-Requested-With"]="XMLHttpRequest",e.headers.Accept="application/json",e})),window.axios=o();const i=window.axios},1222:(e,t,n)=>{"use strict";n.d(t,{y:()=>c,A:()=>d});n(8674),n(1539),n(5666);var r=n(6455),o=n.n(r);function i(e,t,n,r,o,i,s){try{var a=e[i](s),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){i(s,r,o,a,u,"next",e)}function u(e){i(s,r,o,a,u,"throw",e)}a(void 0)}))}}var a=o().mixin({text:"Êtes vous sûr de vouloir effectué cette action ?",showDenyButton:!1,showCancelButton:!0,cancelButtonText:"Annuler"}),u=o().mixin({customClass:{title:"text-bolder",loader:"spinner-border text-primary"},toast:!0,position:"top-end",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,didOpen:function(e){e.addEventListener("mouseenter",o().stopTimer),e.addEventListener("mouseleave",o().resumeTimer)}}),c=function(){var e=s(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fire({confirmButtonText:t}).then((function(e){e.isConfirmed&&n()}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=s(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.fire({icon:t,text:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},3135:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});n(5666),n(9554),n(4747),n(8674),n(1539);var r=n(9755),o=n(7377),i=n(1222);function s(e,t,n,r,o,i,s){try{var a=e[i](s),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}var u=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.forEach((function(e){var t=[e.getAttribute("data-url"),e.getAttribute("data-token"),e.innerHTML],n=t[0],s=t[1],u=t[2];e.addEventListener("click",a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.y)("Supprimer",a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,o.nT)(e),t.next=4,r.Z.delete(n,{data:{_token:s}});case 4:return 202===t.sent.status?(0,o.B6)(e.closest(e.getAttribute("data-target"))):(0,o.et)(e,u),t.next=8,(0,i.A)("success","Suppression effectuée avec succès !");case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.error({e:t.t0}),(0,o.et)(e,u),t.next=16,(0,i.A)("error","Désolé une erreur s'est produite !");case 16:case"end":return t.stop()}}),t,null,[[0,10]])}))));case 2:case"end":return t.stop()}}),t)}))))}))}},7377:(e,t,n)=>{"use strict";n.d(t,{B6:()=>r,nT:()=>o,et:()=>i});n(2564),n(9554),n(4747);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=t/1e3;e.style.transition="opacity ".concat(n,"s ease"),e.style.opacity=0,setTimeout((function(){return e.parentNode.removeChild(e)}),t)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chargement...";e.setAttribute("disabled","disabled"),e.innerHTML='\n        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n        '.concat(t,"\n    ")},i=function(e,t){e.removeAttribute("disabled"),e.innerHTML=t}}}]);