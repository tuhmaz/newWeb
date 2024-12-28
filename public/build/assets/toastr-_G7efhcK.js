import{r as A,g as G}from"./vendor-CvAmYFEz.js";var I,O,M={exports:{}};O=function(a){return function(){var i,v,C,b=0,y="error",B="info",F="success",P="warning",D={clear:function(t,e){var n=c();i||p(n),x(t,n,e)||function(l){for(var s=i.children(),d=s.length-1;d>=0;d--)x(a(s[d]),l)}(n)},remove:function(t){var e=c();i||p(e),t&&a(":focus",t).length===0?w(t):i.children().length&&i.remove()},error:function(t,e,n){return m({type:y,iconClass:c().iconClasses.error,message:t,optionsOverride:n,title:e})},getContainer:p,info:function(t,e,n){return m({type:B,iconClass:c().iconClasses.info,message:t,optionsOverride:n,title:e})},options:{},subscribe:function(t){v=t},success:function(t,e,n){return m({type:F,iconClass:c().iconClasses.success,message:t,optionsOverride:n,title:e})},version:"2.1.4",warning:function(t,e,n){return m({type:P,iconClass:c().iconClasses.warning,message:t,optionsOverride:n,title:e})}};return D;function p(t,e){return t||(t=c()),(i=a("#"+t.containerId)).length||e&&(i=function(n){return(i=a("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(a(n.target)),i}(t)),i}function x(t,e,n){var l=!(!n||!n.force)&&n.force;return!(!t||!l&&a(":focus",t).length!==0||(t[e.hideMethod]({duration:e.hideDuration,easing:e.hideEasing,complete:function(){w(t)}}),0))}function H(t){v&&v(t)}function m(t){var e=c(),n=t.iconClass||e.iconClass;if(t.optionsOverride!==void 0&&(e=a.extend(e,t.optionsOverride),n=t.optionsOverride.iconClass||n),!function(o,h){if(o.preventDuplicates){if(h.message===C)return!0;C=h.message}return!1}(e,t)){b++,i=p(e,!0);var l=null,s=a("<div/>"),d=a("<div/>"),E=a("<div/>"),T=a("<div/>"),f=a(e.closeHtml),r={intervalId:null,hideEta:null,maxHideTime:null},u={toastId:b,state:"visible",startTime:new Date,options:e,map:t};return t.iconClass&&s.addClass(e.toastClass).addClass(n),function(){if(t.title){var o=t.title;e.escapeHtml&&(o=k(t.title)),d.append(o).addClass(e.titleClass),s.append(d)}}(),function(){if(t.message){var o=t.message;e.escapeHtml&&(o=k(t.message)),E.append(o).addClass(e.messageClass),s.append(E)}}(),e.closeButton&&(f.addClass(e.closeClass).attr("role","button"),s.prepend(f)),e.progressBar&&(T.addClass(e.progressClass),s.prepend(T)),e.rtl&&s.addClass("rtl"),e.newestOnTop?i.prepend(s):i.append(s),function(){var o="";switch(t.iconClass){case"toast-success":case"toast-info":o="polite";break;default:o="assertive"}s.attr("aria-live",o)}(),s.hide(),s[e.showMethod]({duration:e.showDuration,easing:e.showEasing,complete:e.onShown}),e.timeOut>0&&(l=setTimeout(g,e.timeOut),r.maxHideTime=parseFloat(e.timeOut),r.hideEta=new Date().getTime()+r.maxHideTime,e.progressBar&&(r.intervalId=setInterval(q,10))),e.closeOnHover&&s.hover(j,S),!e.onclick&&e.tapToDismiss&&s.click(g),e.closeButton&&f&&f.click(function(o){o.stopPropagation?o.stopPropagation():o.cancelBubble!==void 0&&o.cancelBubble!==!0&&(o.cancelBubble=!0),e.onCloseClick&&e.onCloseClick(o),g(!0)}),e.onclick&&s.click(function(o){e.onclick(o),g()}),H(u),e.debug&&console&&console.log(u),s}function k(o){return o==null&&(o=""),o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(o){var h=o&&e.closeMethod!==!1?e.closeMethod:e.hideMethod,Q=o&&e.closeDuration!==!1?e.closeDuration:e.hideDuration,z=o&&e.closeEasing!==!1?e.closeEasing:e.hideEasing;if(!a(":focus",s).length||o)return clearTimeout(r.intervalId),s[h]({duration:Q,easing:z,complete:function(){w(s),clearTimeout(l),e.onHidden&&u.state!=="hidden"&&e.onHidden(),u.state="hidden",u.endTime=new Date,H(u)}})}function S(){(e.timeOut>0||e.extendedTimeOut>0)&&(l=setTimeout(g,e.extendedTimeOut),r.maxHideTime=parseFloat(e.extendedTimeOut),r.hideEta=new Date().getTime()+r.maxHideTime)}function j(){clearTimeout(l),r.hideEta=0,s.stop(!0,!0)[e.showMethod]({duration:e.showDuration,easing:e.showEasing})}function q(){var o=(r.hideEta-new Date().getTime())/r.maxHideTime*100;T.width(o+"%")}}function c(){return a.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},D.options)}function w(t){i||(i=p()),t.is(":visible")||(t.remove(),t=null,i.children().length===0&&(i.remove(),C=void 0))}}()},(I=M).exports?I.exports=O(A()):window.toastr=O(window.jQuery);const J=G(M.exports);try{window.toastr=J}catch{}
