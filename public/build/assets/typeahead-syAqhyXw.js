import{r as H}from"./vendor-CvAmYFEz.js";var O,C,S,N,Q,z,j,R,V,P,M,W,U;/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */(O={exports:{}}).exports=(C=H(),S={isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(e){return!e||/^\s*$/.test(e)},escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(e){return typeof e=="string"},isNumber:function(e){return typeof e=="number"},isArray:C.isArray,isFunction:C.isFunction,isObject:C.isPlainObject,isUndefined:function(e){return e===void 0},isElement:function(e){return!(!e||e.nodeType!==1)},isJQuery:function(e){return e instanceof C},toStr:function(e){return S.isUndefined(e)||e===null?"":e+""},bind:C.proxy,each:function(e,h){function g(p,v){return h(v,p)}C.each(e,g)},map:C.map,filter:C.grep,every:function(e,h){var g=!0;return e?(C.each(e,function(p,v){return!!(g=h.call(null,v,p,e))&&void 0}),!!g):g},some:function(e,h){var g=!1;return e?(C.each(e,function(p,v){return!(g=h.call(null,v,p,e))&&void 0}),!!g):g},mixin:C.extend,identity:function(e){return e},clone:function(e){return C.extend(!0,{},e)},getIdGenerator:function(){var e=0;return function(){return e++}},templatify:function(e){function h(){return String(e)}return C.isFunction(e)?e:h},defer:function(e){setTimeout(e,0)},debounce:function(e,h,g){var p,v;return function(){var n,d,f=this,y=arguments;return n=function(){p=null,g||(v=e.apply(f,y))},d=g&&!p,clearTimeout(p),p=setTimeout(n,h),d&&(v=e.apply(f,y)),v}},throttle:function(e,h){var g,p,v,n,d,f;return d=0,f=function(){d=new Date,v=null,n=e.apply(g,p)},function(){var y=new Date,x=h-(y-d);return g=this,p=arguments,0>=x?(clearTimeout(v),v=null,d=y,n=e.apply(g,p)):v||(v=setTimeout(f,x)),n}},stringify:function(e){return S.isString(e)?e:JSON.stringify(e)},noop:function(){}},N="0.11.1",Q=function(){function e(p){return(p=S.toStr(p))?p.split(/\s+/):[]}function h(p){return(p=S.toStr(p))?p.split(/\W+/):[]}function g(p){return function(v){return v=S.isArray(v)?v:[].slice.call(arguments,0),function(n){var d=[];return S.each(v,function(f){d=d.concat(p(S.toStr(n[f])))}),d}}}return{nonword:h,whitespace:e,obj:{nonword:g(h),whitespace:g(e)}}}(),z=function(){function e(p){this.maxSize=S.isNumber(p)?p:100,this.reset(),this.maxSize<=0&&(this.set=this.get=C.noop)}function h(){this.head=this.tail=null}function g(p,v){this.key=p,this.val=v,this.prev=this.next=null}return S.mixin(e.prototype,{set:function(p,v){var n,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key],this.size--),(n=this.hash[p])?(n.val=v,this.list.moveToFront(n)):(n=new g(p,v),this.list.add(n),this.hash[p]=n,this.size++)},get:function(p){var v=this.hash[p];return v?(this.list.moveToFront(v),v.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new h}}),S.mixin(h.prototype,{add:function(p){this.head&&(p.next=this.head,this.head.prev=p),this.head=p,this.tail=this.tail||p},remove:function(p){p.prev?p.prev.next=p.next:this.head=p.next,p.next?p.next.prev=p.prev:this.tail=p.prev},moveToFront:function(p){this.remove(p),this.add(p)}}),e}(),j=function(){function e(d,f){this.prefix=["__",d,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+S.escapeRegExChars(this.prefix)),this.ls=f||n,!this.ls&&this._noop()}function h(){return new Date().getTime()}function g(d){return JSON.stringify(S.isUndefined(d)?null:d)}function p(d){return C.parseJSON(d)}function v(d){var f,y,x=[],A=n.length;for(f=0;A>f;f++)(y=n.key(f)).match(d)&&x.push(y.replace(d,""));return x}var n;try{(n=window.localStorage).setItem("~~~","!"),n.removeItem("~~~")}catch{n=null}return S.mixin(e.prototype,{_prefix:function(d){return this.prefix+d},_ttlKey:function(d){return this._prefix(d)+this.ttlKey},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=S.noop},_safeSet:function(d,f){try{this.ls.setItem(d,f)}catch(y){y.name==="QuotaExceededError"&&(this.clear(),this._noop())}},get:function(d){return this.isExpired(d)&&this.remove(d),p(this.ls.getItem(this._prefix(d)))},set:function(d,f,y){return S.isNumber(y)?this._safeSet(this._ttlKey(d),g(h()+y)):this.ls.removeItem(this._ttlKey(d)),this._safeSet(this._prefix(d),g(f))},remove:function(d){return this.ls.removeItem(this._ttlKey(d)),this.ls.removeItem(this._prefix(d)),this},clear:function(){var d,f=v(this.keyMatcher);for(d=f.length;d--;)this.remove(f[d]);return this},isExpired:function(d){var f=p(this.ls.getItem(this._ttlKey(d)));return!!(S.isNumber(f)&&h()>f)}}),e}(),R=function(){function e(n){n=n||{},this.cancelled=!1,this.lastReq=null,this._send=n.transport,this._get=n.limiter?n.limiter(this._get):this._get,this._cache=n.cache===!1?new z(0):v}var h=0,g={},p=6,v=new z(10);return e.setMaxPendingRequests=function(n){p=n},e.resetCache=function(){v.reset()},S.mixin(e.prototype,{_fingerprint:function(n){return(n=n||{}).url+n.type+C.param(n.data||{})},_get:function(n,d){function f(i){d(null,i),u._cache.set(A,i)}function y(){d(!0)}function x(){h--,delete g[A],u.onDeckRequestArgs&&(u._get.apply(u,u.onDeckRequestArgs),u.onDeckRequestArgs=null)}var A,a,u=this;A=this._fingerprint(n),this.cancelled||A!==this.lastReq||((a=g[A])?a.done(f).fail(y):p>h?(h++,g[A]=this._send(n).done(f).fail(y).always(x)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(n,d){var f,y;d=d||C.noop,n=S.isString(n)?{url:n}:n||{},y=this._fingerprint(n),this.cancelled=!1,this.lastReq=y,(f=this._cache.get(y))?d(null,f):this._get(n,d)},cancel:function(){this.cancelled=!0}}),e}(),V=window.SearchIndex=function(){function e(f){(f=f||{}).datumTokenizer&&f.queryTokenizer||C.error("datumTokenizer and queryTokenizer are both required"),this.identify=f.identify||S.stringify,this.datumTokenizer=f.datumTokenizer,this.queryTokenizer=f.queryTokenizer,this.reset()}function h(f){return f=S.filter(f,function(y){return!!y}),S.map(f,function(y){return y.toLowerCase()})}function g(){var f={};return f[d]=[],f[n]={},f}function p(f){for(var y={},x=[],A=0,a=f.length;a>A;A++)y[f[A]]||(y[f[A]]=!0,x.push(f[A]));return x}function v(f,y){var x=0,A=0,a=[];f=f.sort(),y=y.sort();for(var u=f.length,i=y.length;u>x&&i>A;)f[x]<y[A]?x++:(f[x]>y[A]||(a.push(f[x]),x++),A++);return a}var n="c",d="i";return S.mixin(e.prototype,{bootstrap:function(f){this.datums=f.datums,this.trie=f.trie},add:function(f){var y=this;f=S.isArray(f)?f:[f],S.each(f,function(x){var A,a;y.datums[A=y.identify(x)]=x,a=h(y.datumTokenizer(x)),S.each(a,function(u){var i,o,c;for(i=y.trie,o=u.split("");c=o.shift();)(i=i[n][c]||(i[n][c]=g()))[d].push(A)})})},get:function(f){var y=this;return S.map(f,function(x){return y.datums[x]})},search:function(f){var y,x,A=this;return y=h(this.queryTokenizer(f)),S.each(y,function(a){var u,i,o,c;if(x&&x.length===0)return!1;for(u=A.trie,i=a.split("");u&&(o=i.shift());)u=u[n][o];return u&&i.length===0?(c=u[d].slice(0),void(x=x?v(x,c):c)):(x=[],!1)}),x?S.map(p(x),function(a){return A.datums[a]}):[]},all:function(){var f=[];for(var y in this.datums)f.push(this.datums[y]);return f},reset:function(){this.datums={},this.trie=g()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),e}(),P=function(){function e(g){this.url=g.url,this.ttl=g.ttl,this.cache=g.cache,this.prepare=g.prepare,this.transform=g.transform,this.transport=g.transport,this.thumbprint=g.thumbprint,this.storage=new j(g.cacheKey)}var h;return h={data:"data",protocol:"protocol",thumbprint:"thumbprint"},S.mixin(e.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},store:function(g){this.cache&&(this.storage.set(h.data,g,this.ttl),this.storage.set(h.protocol,location.protocol,this.ttl),this.storage.set(h.thumbprint,this.thumbprint,this.ttl))},fromCache:function(){var g,p={};return this.cache?(p.data=this.storage.get(h.data),p.protocol=this.storage.get(h.protocol),p.thumbprint=this.storage.get(h.thumbprint),g=p.thumbprint!==this.thumbprint||p.protocol!==location.protocol,p.data&&!g?p.data:null):null},fromNetwork:function(g){function p(){g(!0)}function v(f){g(null,d.transform(f))}var n,d=this;g&&(n=this.prepare(this._settings()),this.transport(n).fail(p).done(v))},clear:function(){return this.storage.clear(),this}}),e}(),M=function(){function e(h){this.url=h.url,this.prepare=h.prepare,this.transform=h.transform,this.transport=new R({cache:h.cache,limiter:h.limiter,transport:h.transport})}return S.mixin(e.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},get:function(h,g){function p(d,f){g(d?[]:n.transform(f))}var v,n=this;if(g)return h=h||"",v=this.prepare(h,this._settings()),this.transport.get(v,p)},cancelLastRequest:function(){this.transport.cancel()}}),e}(),W=function(){function e(n){var d;return n?(d={url:null,ttl:864e5,cache:!0,cacheKey:null,thumbprint:"",prepare:S.identity,transform:S.identity,transport:null},n=S.isString(n)?{url:n}:n,!(n=S.mixin(d,n)).url&&C.error("prefetch requires url to be set"),n.transform=n.filter||n.transform,n.cacheKey=n.cacheKey||n.url,n.thumbprint=N+n.thumbprint,n.transport=n.transport?v(n.transport):C.ajax,n):null}function h(n){var d;if(n)return d={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:S.identity,transport:null},n=S.isString(n)?{url:n}:n,!(n=S.mixin(d,n)).url&&C.error("remote requires url to be set"),n.transform=n.filter||n.transform,n.prepare=g(n),n.limiter=p(n),n.transport=n.transport?v(n.transport):C.ajax,delete n.replace,delete n.wildcard,delete n.rateLimitBy,delete n.rateLimitWait,n}function g(n){function d(u,i){return i.url=A(i.url,u),i}function f(u,i){return i.url=i.url.replace(a,encodeURIComponent(u)),i}function y(u,i){return i}var x,A,a;return x=n.prepare,A=n.replace,a=n.wildcard,x||(x=A?d:n.wildcard?f:y)}function p(n){function d(a){return function(u){return S.debounce(u,a)}}function f(a){return function(u){return S.throttle(u,a)}}var y,x,A;return y=n.limiter,x=n.rateLimitBy,A=n.rateLimitWait,y||(y=/^throttle$/i.test(x)?f(A):d(A)),y}function v(n){return function(d){function f(A){S.defer(function(){x.resolve(A)})}function y(A){S.defer(function(){x.reject(A)})}var x=C.Deferred();return n(d,f,y),x}}return function(n){var d,f;return d={initialize:!0,identify:S.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null},!(n=S.mixin(d,n||{})).datumTokenizer&&C.error("datumTokenizer is required"),!n.queryTokenizer&&C.error("queryTokenizer is required"),f=n.sorter,n.sorter=f?function(y){return y.sort(f)}:S.identity,n.local=S.isFunction(n.local)?n.local():n.local,n.prefetch=e(n.prefetch),n.remote=h(n.remote),n}}(),U=function(){function e(g){g=W(g),this.sorter=g.sorter,this.identify=g.identify,this.sufficient=g.sufficient,this.local=g.local,this.remote=g.remote?new M(g.remote):null,this.prefetch=g.prefetch?new P(g.prefetch):null,this.index=new V({identify:this.identify,datumTokenizer:g.datumTokenizer,queryTokenizer:g.queryTokenizer}),g.initialize!==!1&&this.initialize()}var h;return h=window&&window.Bloodhound,e.noConflict=function(){return window&&(window.Bloodhound=h),e},e.tokenizers=Q,S.mixin(e.prototype,{__ttAdapter:function(){function g(n,d,f){return v.search(n,d,f)}function p(n,d){return v.search(n,d)}var v=this;return this.remote?g:p},_loadPrefetch:function(){function g(d,f){return d?p.reject():(n.add(f),n.prefetch.store(n.index.serialize()),void p.resolve())}var p,v,n=this;return p=C.Deferred(),this.prefetch?(v=this.prefetch.fromCache())?(this.index.bootstrap(v),p.resolve()):this.prefetch.fromNetwork(g):p.resolve(),p.promise()},_initialize:function(){function g(){p.add(p.local)}var p=this;return this.clear(),(this.initPromise=this._loadPrefetch()).done(g),this.initPromise},initialize:function(g){return!this.initPromise||g?this._initialize():this.initPromise},add:function(g){return this.index.add(g),this},get:function(g){return g=S.isArray(g)?g:[].slice.call(arguments),this.index.get(g)},search:function(g,p,v){function n(y){var x=[];S.each(y,function(A){!S.some(d,function(a){return f.identify(A)===f.identify(a)})&&x.push(A)}),v&&v(x)}var d,f=this;return d=this.sorter(this.index.search(g)),p(this.remote?d.slice():d),this.remote&&d.length<this.sufficient?this.remote.get(g,n):this.remote&&this.remote.cancelLastRequest(),this},all:function(){return this.index.all()},clear:function(){return this.index.reset(),this},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this},clearRemoteCache:function(){return R.resetCache(),this},ttAdapter:function(){return this.__ttAdapter()}}),e}(),U),O.exports=function(e){var h={isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return typeof a=="string"},isNumber:function(a){return typeof a=="number"},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isPlainObject,isUndefined:function(a){return a===void 0},isElement:function(a){return!(!a||a.nodeType!==1)},isJQuery:function(a){return a instanceof e},toStr:function(a){return h.isUndefined(a)||a===null?"":a+""},bind:e.proxy,each:function(a,u){function i(o,c){return u(c,o)}e.each(a,i)},map:e.map,filter:e.grep,every:function(a,u){var i=!0;return a?(e.each(a,function(o,c){return!!(i=u.call(null,c,o,a))&&void 0}),!!i):i},some:function(a,u){var i=!1;return a?(e.each(a,function(o,c){return!(i=u.call(null,c,o,a))&&void 0}),!!i):i},mixin:e.extend,identity:function(a){return a},clone:function(a){return e.extend(!0,{},a)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(a){function u(){return String(a)}return e.isFunction(a)?a:u},defer:function(a){setTimeout(a,0)},debounce:function(a,u,i){var o,c;return function(){var r,t,l=this,_=arguments;return r=function(){o=null,i||(c=a.apply(l,_))},t=i&&!o,clearTimeout(o),o=setTimeout(r,u),t&&(c=a.apply(l,_)),c}},throttle:function(a,u){var i,o,c,r,t,l;return t=0,l=function(){t=new Date,c=null,r=a.apply(i,o)},function(){var _=new Date,s=u-(_-t);return i=this,o=arguments,0>=s?(clearTimeout(c),c=null,t=_,r=a.apply(i,o)):c||(c=setTimeout(l,s)),r}},stringify:function(a){return h.isString(a)?a:JSON.stringify(a)},noop:function(){}},g=function(){function a(r){var t,l;return l=h.mixin({},c,r),{css:(t={css:o(),classes:l,html:u(l),selectors:i(l)}).css,html:t.html,classes:t.classes,selectors:t.selectors,mixin:function(_){h.mixin(_,t)}}}function u(r){return{wrapper:'<span class="'+r.wrapper+'"></span>',menu:'<div class="'+r.menu+'"></div>'}}function i(r){var t={};return h.each(r,function(l,_){t[_]="."+l}),t}function o(){var r={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return h.isMsie()&&h.mixin(r.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),r}var c={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return a}(),p=function(){function a(o){o&&o.el||e.error("EventBus initialized without el"),this.$el=e(o.el)}var u,i;return u="typeahead:",i={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},h.mixin(a.prototype,{_trigger:function(o,c){var r;return r=e.Event(u+o),(c=c||[]).unshift(r),this.$el.trigger.apply(this.$el,c),r},before:function(o){var c;return c=[].slice.call(arguments,1),this._trigger("before"+o,c).isDefaultPrevented()},trigger:function(o){var c;this._trigger(o,[].slice.call(arguments,1)),(c=i[o])&&this._trigger(c,[].slice.call(arguments,1))}}),a}(),v=function(){function a(m,b,w,k){var $;if(!w)return this;for(b=b.split(_),w=k?l(w,k):w,this._callbacks=this._callbacks||{};$=b.shift();)this._callbacks[$]=this._callbacks[$]||{sync:[],async:[]},this._callbacks[$][m].push(w);return this}function u(m,b,w){return a.call(this,"async",m,b,w)}function i(m,b,w){return a.call(this,"sync",m,b,w)}function o(m){var b;if(!this._callbacks)return this;for(m=m.split(_);b=m.shift();)delete this._callbacks[b];return this}function c(m){var b,w,k,$,T;if(!this._callbacks)return this;for(m=m.split(_),k=[].slice.call(arguments,1);(b=m.shift())&&(w=this._callbacks[b]);)$=r(w.sync,this,[b].concat(k)),T=r(w.async,this,[b].concat(k)),$()&&s(T);return this}function r(m,b,w){function k(){for(var $,T=0,q=m.length;!$&&q>T;T+=1)$=m[T].apply(b,w)===!1;return!$}return k}function t(){return window.setImmediate?function(m){setImmediate(function(){m()})}:function(m){setTimeout(function(){m()},0)}}function l(m,b){return m.bind?m.bind(b):function(){m.apply(b,[].slice.call(arguments,0))}}var _=/\s+/,s=t();return{onSync:i,onAsync:u,off:o,trigger:c}}(),n=function(a){function u(o,c,r){for(var t,l=[],_=0,s=o.length;s>_;_++)l.push(h.escapeRegExChars(o[_]));return t=r?"\\b("+l.join("|")+")\\b":"("+l.join("|")+")",c?new RegExp(t):new RegExp(t,"i")}var i={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(o){function c(l){var _,s,m;return(_=t.exec(l.data))&&(m=a.createElement(o.tagName),o.className&&(m.className=o.className),(s=l.splitText(_.index)).splitText(_[0].length),m.appendChild(s.cloneNode(!0)),l.parentNode.replaceChild(m,s)),!!_}function r(l,_){for(var s,m=3,b=0;b<l.childNodes.length;b++)(s=l.childNodes[b]).nodeType===m?b+=_(s)?1:0:r(s,_)}var t;(o=h.mixin({},i,o)).node&&o.pattern&&(o.pattern=h.isArray(o.pattern)?o.pattern:[o.pattern],t=u(o.pattern,o.caseSensitive,o.wordsOnly),r(o.node,c))}}(window.document),d=function(){function a(r,t){(r=r||{}).input||e.error("input is missing"),t.mixin(this),this.$hint=e(r.hint),this.$input=e(r.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=u(this.$input),this._checkLanguageDirection(),this.$hint.length===0&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=h.noop)}function u(r){return e('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:r.css("font-family"),fontSize:r.css("font-size"),fontStyle:r.css("font-style"),fontVariant:r.css("font-variant"),fontWeight:r.css("font-weight"),wordSpacing:r.css("word-spacing"),letterSpacing:r.css("letter-spacing"),textIndent:r.css("text-indent"),textRendering:r.css("text-rendering"),textTransform:r.css("text-transform")}).insertAfter(r)}function i(r,t){return a.normalizeQuery(r)===a.normalizeQuery(t)}function o(r){return r.altKey||r.ctrlKey||r.metaKey||r.shiftKey}var c;return c={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},a.normalizeQuery=function(r){return h.toStr(r).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},h.mixin(a.prototype,v,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(r){var t=c[r.which||r.keyCode];this._managePreventDefault(t,r),t&&this._shouldTrigger(t,r)&&this.trigger(t+"Keyed",r)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(r,t){var l;switch(r){case"up":case"down":l=!o(t);break;default:l=!1}l&&t.preventDefault()},_shouldTrigger:function(r,t){return r!=="tab"||!o(t)},_checkLanguageDirection:function(){var r=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==r&&(this.dir=r,this.$hint.attr("dir",r),this.trigger("langDirChanged",r))},_setQuery:function(r,t){var l,_;_=!!(l=i(r,this.query))&&this.query.length!==r.length,this.query=r,t||l?!t&&_&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},bind:function(){var r,t,l,_,s=this;return r=h.bind(this._onBlur,this),t=h.bind(this._onFocus,this),l=h.bind(this._onKeydown,this),_=h.bind(this._onInput,this),this.$input.on("blur.tt",r).on("focus.tt",t).on("keydown.tt",l),!h.isMsie()||h.isMsie()>9?this.$input.on("input.tt",_):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(m){c[m.which||m.keyCode]||h.defer(h.bind(s._onInput,s,m))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(r,t){this.setInputValue(r),this._setQuery(r,t)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(r){this.$input.val(r),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(r){this.$hint.val(r)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var r,t,l;l=(r=this.getInputValue())!==(t=this.getHint())&&t.indexOf(r)===0,(r===""||!l||this.hasOverflow())&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var r=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=r},isCursorAtEnd:function(){var r,t,l;return r=this.$input.val().length,t=this.$input[0].selectionStart,h.isNumber(t)?t===r:!document.selection||((l=document.selection.createRange()).moveStart("character",-r),r===l.text.length)},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=e("<div>")}}),a}(),f=function(){function a(t,l){(t=t||{}).templates=t.templates||{},t.templates.notFound=t.templates.notFound||t.templates.empty,t.source||e.error("missing source"),t.node||e.error("missing node"),t.name&&!o(t.name)&&e.error("invalid dataset name: "+t.name),l.mixin(this),this.highlight=!!t.highlight,this.name=t.name||r(),this.limit=t.limit||5,this.displayFn=u(t.display||t.displayKey),this.templates=i(t.templates,this.displayFn),this.source=t.source.__ttAdapter?t.source.__ttAdapter():t.source,this.async=h.isUndefined(t.async)?this.source.length>2:!!t.async,this._resetLastSuggestion(),this.$el=e(t.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}function u(t){function l(_){return _[t]}return t=t||h.stringify,h.isFunction(t)?t:l}function i(t,l){function _(s){return e("<div>").text(l(s))}return{notFound:t.notFound&&h.templatify(t.notFound),pending:t.pending&&h.templatify(t.pending),header:t.header&&h.templatify(t.header),footer:t.footer&&h.templatify(t.footer),suggestion:t.suggestion||_}}function o(t){return/^[_a-zA-Z0-9-]+$/.test(t)}var c,r;return c={val:"tt-selectable-display",obj:"tt-selectable-object"},r=h.getIdGenerator(),a.extractData=function(t){var l=e(t);return l.data(c.obj)?{val:l.data(c.val)||"",obj:l.data(c.obj)||null}:null},h.mixin(a.prototype,v,{_overwrite:function(t,l){(l=l||[]).length?this._renderSuggestions(t,l):this.async&&this.templates.pending?this._renderPending(t):!this.async&&this.templates.notFound?this._renderNotFound(t):this._empty(),this.trigger("rendered",this.name,l,!1)},_append:function(t,l){(l=l||[]).length&&this.$lastSuggestion.length?this._appendSuggestions(t,l):l.length?this._renderSuggestions(t,l):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(t),this.trigger("rendered",this.name,l,!0)},_renderSuggestions:function(t,l){var _;_=this._getSuggestionsFragment(t,l),this.$lastSuggestion=_.children().last(),this.$el.html(_).prepend(this._getHeader(t,l)).append(this._getFooter(t,l))},_appendSuggestions:function(t,l){var _,s;s=(_=this._getSuggestionsFragment(t,l)).children().last(),this.$lastSuggestion.after(_),this.$lastSuggestion=s},_renderPending:function(t){var l=this.templates.pending;this._resetLastSuggestion(),l&&this.$el.html(l({query:t,dataset:this.name}))},_renderNotFound:function(t){var l=this.templates.notFound;this._resetLastSuggestion(),l&&this.$el.html(l({query:t,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(t,l){var _,s=this;return _=document.createDocumentFragment(),h.each(l,function(m){var b,w;w=s._injectQuery(t,m),b=e(s.templates.suggestion(w)).data(c.obj,m).data(c.val,s.displayFn(m)).addClass(s.classes.suggestion+" "+s.classes.selectable),_.appendChild(b[0])}),this.highlight&&n({className:this.classes.highlight,node:_,pattern:t}),e(_)},_getFooter:function(t,l){return this.templates.footer?this.templates.footer({query:t,suggestions:l,dataset:this.name}):null},_getHeader:function(t,l){return this.templates.header?this.templates.header({query:t,suggestions:l,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=e()},_injectQuery:function(t,l){return h.isObject(l)?h.mixin({_query:t},l):l},update:function(t){function l(k){b||(b=!0,k=(k||[]).slice(0,s.limit),w=k.length,s._overwrite(t,k),w<s.limit&&s.async&&s.trigger("asyncRequested",t))}function _(k){k=k||[],!m&&w<s.limit&&(s.cancel=e.noop,w+=k.length,s._append(t,k.slice(0,s.limit-w)),s.async&&s.trigger("asyncReceived",t))}var s=this,m=!1,b=!1,w=0;this.cancel(),this.cancel=function(){m=!0,s.cancel=e.noop,s.async&&s.trigger("asyncCanceled",t)},this.source(t,l,_),!b&&l([])},cancel:e.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=e("<div>")}}),a}(),y=function(){function a(u,i){function o(r){var t=c.$node.find(r.node).first();return r.node=t.length?t:e("<div>").appendTo(c.$node),new f(r,i)}var c=this;(u=u||{}).node||e.error("node is required"),i.mixin(this),this.$node=e(u.node),this.query=null,this.datasets=h.map(u.datasets,o)}return h.mixin(a.prototype,v,{_onSelectableClick:function(u){this.trigger("selectableClicked",e(u.currentTarget))},_onRendered:function(u,i,o,c){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",i,o,c)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){function u(i){return i.isEmpty()}return h.every(this.datasets,u)},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var u=this.getActiveSelectable();u&&u.removeClass(this.classes.cursor)},_ensureVisible:function(u){var i,o,c,r;o=(i=u.position().top)+u.outerHeight(!0),c=this.$node.scrollTop(),r=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),0>i?this.$node.scrollTop(c+i):o>r&&this.$node.scrollTop(c+(o-r))},bind:function(){var u,i=this;return u=h.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,u),h.each(this.datasets,function(o){o.onSync("asyncRequested",i._propagate,i).onSync("asyncCanceled",i._propagate,i).onSync("asyncReceived",i._propagate,i).onSync("rendered",i._onRendered,i).onSync("cleared",i._onCleared,i)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(u){this.$node.attr("dir",u)},selectableRelativeToCursor:function(u){var i,o,c;return o=this.getActiveSelectable(),i=this._getSelectables(),(c=-1>(c=((c=(o?i.index(o):-1)+u)+1)%(i.length+1)-1)?i.length-1:c)===-1?null:i.eq(c)},setCursor:function(u){this._removeCursor(),(u=u&&u.first())&&(u.addClass(this.classes.cursor),this._ensureVisible(u))},getSelectableData:function(u){return u&&u.length?f.extractData(u):null},getActiveSelectable:function(){var u=this._getSelectables().filter(this.selectors.cursor).first();return u.length?u:null},getTopSelectable:function(){var u=this._getSelectables().first();return u.length?u:null},update:function(u){function i(c){c.update(u)}var o=u!==this.query;return o&&(this.query=u,h.each(this.datasets,i)),o},empty:function(){function u(i){i.clear()}h.each(this.datasets,u),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){function u(i){i.destroy()}this.$node.off(".tt"),this.$node=e("<div>"),h.each(this.datasets,u)}}),a}(),x=function(){function a(){y.apply(this,[].slice.call(arguments,0))}var u=y.prototype;return h.mixin(a.prototype,y.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),u.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),u.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),u._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),u._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(i){return this.$node.css(i==="ltr"?this.css.ltr:this.css.rtl),u.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),a}(),A=function(){function a(i,o){var c,r,t,l,_,s,m,b,w,k,$;(i=i||{}).input||e.error("missing input"),i.menu||e.error("missing menu"),i.eventBus||e.error("missing event bus"),o.mixin(this),this.eventBus=i.eventBus,this.minLength=h.isNumber(i.minLength)?i.minLength:1,this.input=i.input,this.menu=i.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),c=u(this,"activate","open","_onFocused"),r=u(this,"deactivate","_onBlurred"),t=u(this,"isActive","isOpen","_onEnterKeyed"),l=u(this,"isActive","isOpen","_onTabKeyed"),_=u(this,"isActive","_onEscKeyed"),s=u(this,"isActive","open","_onUpKeyed"),m=u(this,"isActive","open","_onDownKeyed"),b=u(this,"isActive","isOpen","_onLeftKeyed"),w=u(this,"isActive","isOpen","_onRightKeyed"),k=u(this,"_openIfActive","_onQueryChanged"),$=u(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",c,this).onSync("blurred",r,this).onSync("enterKeyed",t,this).onSync("tabKeyed",l,this).onSync("escKeyed",_,this).onSync("upKeyed",s,this).onSync("downKeyed",m,this).onSync("leftKeyed",b,this).onSync("rightKeyed",w,this).onSync("queryChanged",k,this).onSync("whitespaceChanged",$,this).onSync("langDirChanged",this._onLangDirChanged,this)}function u(i){var o=[].slice.call(arguments,1);return function(){var c=[].slice.call(arguments);h.each(o,function(r){return i[r].apply(i,c)})}}return h.mixin(a.prototype,{_hacks:function(){var i,o;i=this.input.$input||e("<div>"),o=this.menu.$node||e("<div>"),i.on("blur.tt",function(c){var r,t,l;r=document.activeElement,t=o.is(r),l=o.has(r).length>0,h.isMsie()&&(t||l)&&(c.preventDefault(),c.stopImmediatePropagation(),h.defer(function(){i.focus()}))}),o.on("mousedown.tt",function(c){c.preventDefault()})},_onSelectableClicked:function(i,o){this.select(o)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(i,o,c,r){this._updateHint(),this.eventBus.trigger("render",c,r,o)},_onAsyncRequested:function(i,o,c){this.eventBus.trigger("asyncrequest",c,o)},_onAsyncCanceled:function(i,o,c){this.eventBus.trigger("asynccancel",c,o)},_onAsyncReceived:function(i,o,c){this.eventBus.trigger("asyncreceive",c,o)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(i,o){var c;(c=this.menu.getActiveSelectable())&&this.select(c)&&o.preventDefault()},_onTabKeyed:function(i,o){var c;(c=this.menu.getActiveSelectable())?this.select(c)&&o.preventDefault():(c=this.menu.getTopSelectable())&&this.autocomplete(c)&&o.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){this.dir==="rtl"&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){this.dir==="ltr"&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(i,o){this._minLengthMet(o)?this.menu.update(o):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(i,o){this.dir!==o&&(this.dir=o,this.menu.setLanguageDirection(o))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(i){return(i=h.isString(i)?i:this.input.getQuery()||"").length>=this.minLength},_updateHint:function(){var i,o,c,r,t,l;i=this.menu.getTopSelectable(),o=this.menu.getSelectableData(i),c=this.input.getInputValue(),!o||h.isBlankString(c)||this.input.hasOverflow()?this.input.clearHint():(r=d.normalizeQuery(c),t=h.escapeRegExChars(r),(l=new RegExp("^(?:"+t+")(.+$)","i").exec(o.val))&&this.input.setHint(c+l[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return!!this.isActive()||!(!this.isEnabled()||this.eventBus.before("active"))&&(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return!this.isActive()||!this.eventBus.before("idle")&&(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0)},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(i){this.input.setQuery(h.toStr(i))},getVal:function(){return this.input.getQuery()},select:function(i){var o=this.menu.getSelectableData(i);return!(!o||this.eventBus.before("select",o.obj)||(this.input.setQuery(o.val,!0),this.eventBus.trigger("select",o.obj),this.close(),0))},autocomplete:function(i){var o,c;return o=this.input.getQuery(),!(!(c=this.menu.getSelectableData(i))||o===c.val||this.eventBus.before("autocomplete",c.obj)||(this.input.setQuery(c.val),this.eventBus.trigger("autocomplete",c.obj),0))},moveCursor:function(i){var o,c,r,t;return o=this.input.getQuery(),c=this.menu.selectableRelativeToCursor(i),t=(r=this.menu.getSelectableData(c))?r.obj:null,!(this._minLengthMet()&&this.menu.update(o)||this.eventBus.before("cursorchange",t)||(this.menu.setCursor(c),r?this.input.setInputValue(r.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",t),0))},destroy:function(){this.input.destroy(),this.menu.destroy()}}),a}();(function(){function a(s,m){s.each(function(){var b,w=e(this);(b=w.data(l.typeahead))&&m(b,w)})}function u(s,m){return s.clone().addClass(m.classes.hint).removeData().css(m.css.hint).css(o(s)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})}function i(s,m){s.data(l.attrs,{dir:s.attr("dir"),autocomplete:s.attr("autocomplete"),spellcheck:s.attr("spellcheck"),style:s.attr("style")}),s.addClass(m.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!s.attr("dir")&&s.attr("dir","auto")}catch{}return s}function o(s){return{backgroundAttachment:s.css("background-attachment"),backgroundClip:s.css("background-clip"),backgroundColor:s.css("background-color"),backgroundImage:s.css("background-image"),backgroundOrigin:s.css("background-origin"),backgroundPosition:s.css("background-position"),backgroundRepeat:s.css("background-repeat"),backgroundSize:s.css("background-size")}}function c(s){var m,b;m=s.data(l.www),b=s.parent().filter(m.selectors.wrapper),h.each(s.data(l.attrs),function(w,k){h.isUndefined(w)?s.removeAttr(k):s.attr(k,w)}),s.removeData(l.typeahead).removeData(l.www).removeData(l.attr).removeClass(m.classes.input),b.length&&(s.detach().insertAfter(b),b.remove())}function r(s){var m;return(m=h.isJQuery(s)||h.isElement(s)?e(s).first():[]).length?m:null}var t,l,_;t=e.fn.typeahead,l={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},_={initialize:function(s,m){function b(){var k,$,T,q,D,I,E,F,L,B,K;h.each(m,function(J){J.highlight=!!s.highlight}),k=e(this),$=e(w.html.wrapper),T=r(s.hint),q=r(s.menu),D=s.hint!==!1&&!T,I=s.menu!==!1&&!q,D&&(T=u(k,w)),I&&(q=e(w.html.menu).css(w.css.menu)),T&&T.val(""),k=i(k,w),(D||I)&&($.css(w.css.wrapper),k.css(D?w.css.input:w.css.inputWithNoHint),k.wrap($).parent().prepend(D?T:null).append(I?q:null)),K=I?x:y,E=new p({el:k}),F=new d({hint:T,input:k},w),L=new K({node:q,datasets:m},w),B=new A({input:F,menu:L,eventBus:E,minLength:s.minLength},w),k.data(l.www,w),k.data(l.typeahead,B)}var w;return m=h.isArray(m)?m:[].slice.call(arguments,1),w=g((s=s||{}).classNames),this.each(b)},isEnabled:function(){var s;return a(this.first(),function(m){s=m.isEnabled()}),s},enable:function(){return a(this,function(s){s.enable()}),this},disable:function(){return a(this,function(s){s.disable()}),this},isActive:function(){var s;return a(this.first(),function(m){s=m.isActive()}),s},activate:function(){return a(this,function(s){s.activate()}),this},deactivate:function(){return a(this,function(s){s.deactivate()}),this},isOpen:function(){var s;return a(this.first(),function(m){s=m.isOpen()}),s},open:function(){return a(this,function(s){s.open()}),this},close:function(){return a(this,function(s){s.close()}),this},select:function(s){var m=!1,b=e(s);return a(this.first(),function(w){m=w.select(b)}),m},autocomplete:function(s){var m=!1,b=e(s);return a(this.first(),function(w){m=w.autocomplete(b)}),m},moveCursor:function(s){var m=!1;return a(this.first(),function(b){m=b.moveCursor(s)}),m},val:function(s){var m;return arguments.length?(a(this,function(b){b.setVal(s)}),this):(a(this.first(),function(b){m=b.getVal()}),m)},destroy:function(){return a(this,function(s,m){c(m),s.destroy()}),this}},e.fn.typeahead=function(s){return _[s]?_[s].apply(this,[].slice.call(arguments,1)):_.initialize.apply(this,arguments)},e.fn.typeahead.noConflict=function(){return e.fn.typeahead=t,this}})()}(H());