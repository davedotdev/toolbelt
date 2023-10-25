/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@sudodevnull/datastar@0.1.11/dist/datastar.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e){return e instanceof HTMLElement||e instanceof SVGElement?e:null}function t(){throw new Error("Cycle detected")}const o=Symbol.for("preact-signals"),n=1,r=2,s=4,i=8,a=32;function c(){d++}function l(){if(d>1)return void d--;let e,t=!1;for(;void 0!==f;){let o=f;for(f=void 0,p++;void 0!==o;){const n=o._nextBatchedEffect;if(o._nextBatchedEffect=void 0,o._flags&=~r,!(o._flags&i)&&_(o))try{o._callback()}catch(o){t||(e=o,t=!0)}o=n}}if(p=0,d--,t)throw e}let u,f,d=0,p=0,h=0;function m(e){if(void 0===u)return;let t=e._node;return void 0===t||t._target!==u?(t={_version:0,_source:e,_prevSource:u._sources,_nextSource:void 0,_target:u,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:t},void 0!==u._sources&&(u._sources._nextSource=t),u._sources=t,e._node=t,u._flags&a&&e._subscribe(t),t):-1===t._version?(t._version=0,void 0!==t._nextSource&&(t._nextSource._prevSource=t._prevSource,void 0!==t._prevSource&&(t._prevSource._nextSource=t._nextSource),t._prevSource=u._sources,t._nextSource=void 0,u._sources._nextSource=t,u._sources=t),t):void 0}function g(e){this._value=e,this._version=0,this._node=void 0,this._targets=void 0}function v(e){return new g(e)}function _(e){for(let t=e._sources;void 0!==t;t=t._nextSource)if(t._source._version!==t._version||!t._source._refresh()||t._source._version!==t._version)return!0;return!1}function y(e){for(let t=e._sources;void 0!==t;t=t._nextSource){const o=t._source._node;if(void 0!==o&&(t._rollbackNode=o),t._source._node=t,t._version=-1,void 0===t._nextSource){e._sources=t;break}}}function b(e){let t,o=e._sources;for(;void 0!==o;){const e=o._prevSource;-1===o._version?(o._source._unsubscribe(o),void 0!==e&&(e._nextSource=o._nextSource),void 0!==o._nextSource&&(o._nextSource._prevSource=e)):t=o,o._source._node=o._rollbackNode,void 0!==o._rollbackNode&&(o._rollbackNode=void 0),o=e}e._sources=t}function w(e){g.call(this,void 0),this._compute=e,this._sources=void 0,this._globalVersion=h-1,this._flags=s}function E(e){return new w(e)}function x(e){const t=e._cleanup;if(e._cleanup=void 0,"function"==typeof t){c();const o=u;u=void 0;try{t()}catch(t){throw e._flags&=~n,e._flags|=i,S(e),t}finally{u=o,l()}}}function S(e){for(let t=e._sources;void 0!==t;t=t._nextSource)t._source._unsubscribe(t);e._compute=void 0,e._sources=void 0,x(e)}function N(e){if(u!==this)throw new Error("Out-of-order effect");b(this),u=e,this._flags&=~n,this._flags&i&&S(this),l()}function T(e){this._compute=e,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=a}function k(e){const t=new T(e);try{t._callback()}catch(e){throw t._dispose(),e}return t._dispose.bind(t)}g.prototype.brand=o,g.prototype._refresh=function(){return!0},g.prototype._subscribe=function(e){this._targets!==e&&void 0===e._prevTarget&&(e._nextTarget=this._targets,void 0!==this._targets&&(this._targets._prevTarget=e),this._targets=e)},g.prototype._unsubscribe=function(e){if(void 0!==this._targets){const t=e._prevTarget,o=e._nextTarget;void 0!==t&&(t._nextTarget=o,e._prevTarget=void 0),void 0!==o&&(o._prevTarget=t,e._nextTarget=void 0),e===this._targets&&(this._targets=o)}},g.prototype.subscribe=function(e){const t=this;return k((function(){const o=t.value,n=this._flags&a;this._flags&=~a;try{e(o)}finally{this._flags|=n}}))},g.prototype.valueOf=function(){return this.value},g.prototype.toString=function(){return this.value+""},g.prototype.toJSON=function(){return this.value},g.prototype.peek=function(){return this._value},Object.defineProperty(g.prototype,"value",{get(){const e=m(this);return void 0!==e&&(e._version=this._version),this._value},set(e){if(u instanceof w&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this._value){p>100&&t(),this._value=e,this._version++,h++,c();try{for(let e=this._targets;void 0!==e;e=e._nextTarget)e._target._notify()}finally{l()}}}}),w.prototype=new g,w.prototype._refresh=function(){if(this._flags&=~r,this._flags&n)return!1;if((this._flags&(s|a))===a||(this._flags&=~s,this._globalVersion===h))return!0;if(this._globalVersion=h,this._flags|=n,this._version>0&&!_(this))return this._flags&=~n,!0;const e=u;try{y(this),u=this;const e=this._compute();(16&this._flags||this._value!==e||0===this._version)&&(this._value=e,this._flags&=-17,this._version++)}catch(e){this._value=e,this._flags|=16,this._version++}return u=e,b(this),this._flags&=~n,!0},w.prototype._subscribe=function(e){if(void 0===this._targets){this._flags|=s|a;for(let e=this._sources;void 0!==e;e=e._nextSource)e._source._subscribe(e)}g.prototype._subscribe.call(this,e)},w.prototype._unsubscribe=function(e){if(void 0!==this._targets&&(g.prototype._unsubscribe.call(this,e),void 0===this._targets)){this._flags&=~a;for(let e=this._sources;void 0!==e;e=e._nextSource)e._source._unsubscribe(e)}},w.prototype._notify=function(){if(!(this._flags&r)){this._flags|=s|r;for(let e=this._targets;void 0!==e;e=e._nextTarget)e._target._notify()}},w.prototype.peek=function(){if(this._refresh()||t(),16&this._flags)throw this._value;return this._value},Object.defineProperty(w.prototype,"value",{get(){this._flags&n&&t();const e=m(this);if(this._refresh(),void 0!==e&&(e._version=this._version),16&this._flags)throw this._value;return this._value}}),T.prototype._callback=function(){const e=this._start();try{if(this._flags&i||void 0===this._compute)return;const e=this._compute();"function"==typeof e&&(this._cleanup=e)}finally{e()}},T.prototype._start=function(){this._flags&n&&t(),this._flags|=n,this._flags&=~i,x(this),y(this),c();const e=u;return u=this,N.bind(this,e)},T.prototype._notify=function(){this._flags&r||(this._flags|=r,this._nextBatchedEffect=f,f=this)},T.prototype._dispose=function(){this._flags|=i,this._flags&n||S(this)};class L{get value(){return $(this)}set value(e){!function(e){if(d>0)return e();c();try{return e()}finally{l()}}((()=>A(this,e)))}peek(){return $(this,{peek:!0})}}const M=e=>Object.assign(new L,Object.entries(e).reduce(((e,[t,o])=>{if(["value","peek"].some((e=>e===t)))throw new Error(`${t} is a reserved property name`);return"object"!=typeof o||null===o||Array.isArray(o)?e[t]=v(o):e[t]=M(o),e}),{})),A=(e,t)=>Object.keys(t).forEach((o=>e[o].value=t[o])),$=(e,{peek:t=!1}={})=>Object.entries(e).reduce(((e,[o,n])=>(n instanceof g?e[o]=t?n.peek():n.value:n instanceof L&&(e[o]=$(n,{peek:t})),e)),{});function H(e,t){if("object"!=typeof t||Array.isArray(t)||!t)return JSON.parse(JSON.stringify(t));if("object"==typeof t&&void 0!==t.toJSON&&"function"==typeof t.toJSON)return t.toJSON();let o=e;return"object"!=typeof e&&(o={...t}),Object.keys(t).forEach((e=>{o.hasOwnProperty(e)||(o[e]=t[e]),null===t[e]?delete o[e]:o[e]=H(o[e],t[e])})),o}const C=(e,t,o)=>new RegExp(`(?<whole>\\${e}(?<${t}>[a-zA-Z_$][0-9a-zA-Z_$]*))${o}`,"g"),O=[{name:"SignalProcessor",description:"Replacing $signal with ctx.store.signal.value",regexp:C("$","signal",""),replacer:e=>{const{signal:t}=e;return`ctx.store.${t}.value`}},{name:"ActionProcessor",description:"Replacing @action(args) with ctx.actions.action(ctx, args)",regexp:C("@","action","(?<call>\\((?<args>.*)\\))?"),replacer:({action:e,args:t})=>`ctx.actions.${e}(ctx, ${t||""})`},{name:"RefProcessor",description:"Replacing #foo with ctx.refs.foo",regexp:C("~","ref",""),replacer:({ref:e})=>`data.refs.${e}`}],R=[{prefix:"mergeStore",description:"Setup the global store",onLoad:e=>{const t=e.expressionFn(e);e.mergeStore(t)}},{prefix:"ref",description:"Sets the value of the element",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,bypassExpressionFunctionCreation:!0,preprocessors:new Set([]),onLoad:e=>{const{el:t,expression:o}=e;return e.refs[o]=t,()=>delete e.refs[o]}}];class P{plugins=[];store=M({});actions={};refs={};reactivity={signal:v,computed:E,effect:k};missingIDNext=0;removals=new Map;constructor(e={},...t){if(this.actions=Object.assign(this.actions,e),!(t=[...R,...t]).length)throw new Error("No plugins provided");const o=new Set;for(const e of t){if(e.requiredPluginPrefixes)for(const t of e.requiredPluginPrefixes)if(!o.has(t))throw new Error(`Plugin ${e.prefix} requires plugin ${t}`);this.plugins.push(e),o.add(e.prefix)}}run(){this.plugins.forEach((e=>{e.onGlobalInit&&e.onGlobalInit({actions:this.actions,refs:this.refs,reactivity:this.reactivity,mergeStore:this.mergeStore.bind(this),store:this.store})})),this.applyPlugins(document.body)}cleanupElementRemovals(e){const t=this.removals.get(e);if(t){for(const e of t)e();this.removals.delete(e)}}mergeStore(e){const t=H(this.store.value,e);this.store=M(t)}signalByName(e){return this.store.value[e]}applyPlugins(t){const o=new Set;this.plugins.forEach(((n,r)=>{F(t,(t=>{0===r&&this.cleanupElementRemovals(t);const s=e(t);if(s){if(s.id){s.style.viewTransitionName=s.id}if(!s.id&&"BODY"!==s.tagName){const e=(this.missingIDNext++).toString(16).padStart(8,"0");s.id=`ds${e}`}for(const e in s.dataset){let t=s.dataset[e]||"";if(!e.startsWith(n.prefix))continue;if(o.clear(),n.allowedTags&&!n.allowedTags.has(s.tagName.toLowerCase()))throw new Error(`Tag '${s.tagName}' is not allowed for plugin '${e}', allowed tags are: ${[[...n.allowedTags].map((e=>`'${e}'`))].join(", ")}`);let r=e.slice(n.prefix.length),[i,...a]=r.split(".");if(n.mustHaveEmptyKey&&i.length>0)throw new Error(`Attribute '${e}' must have empty key`);if(n.mustNotEmptyKey&&0===i.length)throw new Error(`Attribute '${e}' must have non-empty key`);i.length&&(i=i[0].toLowerCase()+i.slice(1));const c=a.map((e=>{const[t,...o]=e.split("_");return{label:t,args:o}}));if(n.allowedModifiers)for(const e of c)if(!n.allowedModifiers.has(e.label))throw new Error(`Modifier '${e.label}' is not allowed`);const l=new Map;for(const e of c)l.set(e.label,e.args);if(n.mustHaveEmptyExpression&&t.length)throw new Error(`Attribute '${e}' must have empty expression`);if(n.mustNotEmptyExpression&&!t.length)throw new Error(`Attribute '${e}' must have non-empty expression`);const u=[...O,...n.preprocessors||[]];for(const e of u){if(o.has(e))continue;o.add(e);const n=[...t.matchAll(e.regexp)];if(n.length)for(const o of n){if(!o.groups)continue;const{groups:n}=o,{whole:r}=n;t=t.replace(r,e.replacer(n))}}const{store:f,reactivity:d,actions:p,refs:h}=this,m={store:f,mergeStore:this.mergeStore.bind(this),applyPlugins:this.applyPlugins.bind(this),actions:p,refs:h,reactivity:d,el:s,key:i,expression:t,expressionFn:()=>{throw new Error("Expression function not created")},modifiers:l};if(!n.bypassExpressionFunctionCreation&&!n.mustHaveEmptyExpression&&t.length){const e=`return ${t}`;try{const t=new Function("ctx",e);m.expressionFn=t}catch{return void console.error(`Error evaluating expression '${e}' on ${s.id?`#${s.id}`:s.tagName}`)}}const g=n.onLoad(m);g&&(this.removals.has(s)||this.removals.set(s,new Set),this.removals.get(s).add(g))}}}))}))}}function F(e,t){if(e)for(t(e),e=e.firstElementChild;e;)F(e,t),e=e.nextElementSibling}const j=["change","input","keydown"],I="DOMContentLoaded",D=[{prefix:"bind",description:"Sets the value of the element",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:e=>e.reactivity.effect((()=>{const t=(e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase())))(e.key),o=e.expressionFn(e);e.el.setAttribute(t,`${o}`)}))},{prefix:"model",description:"Sets the value of the element",mustHaveEmptyKey:!0,allowedTags:new Set(["input","textarea","select"]),bypassExpressionFunctionCreation:!0,onLoad:e=>{const{store:t,el:o,expression:n}=e,r=t[n];return e.reactivity.effect((()=>{if(!("value"in o))throw new Error("Element does not have value property");o.value=`${r.value}`;const e=()=>{const e=r.value;if("number"==typeof e)r.value=Number(o.value);else if("string"==typeof e)r.value=o.value;else{if("boolean"!=typeof e)throw new Error("Unsupported type");r.value=!!o.value}};return e(),j.forEach((t=>{o.addEventListener(t,e)})),()=>{j.forEach((t=>{o.removeEventListener(t,e)}))}}))}},{prefix:"text",description:"Sets the textContent of the element",mustHaveEmptyKey:!0,onLoad:e=>{const{el:t,expressionFn:o}=e;if(!(t instanceof HTMLElement))throw new Error("Element is not HTMLElement");return e.reactivity.effect((()=>{t.textContent=`${o(e)}`}))}},{prefix:"focus",description:"Sets the focus of the element",mustHaveEmptyKey:!0,mustHaveEmptyExpression:!0,onLoad:e=>(e.el.tabIndex||e.el.setAttribute("tabindex","0"),e.el.focus(),e.el.scrollIntoView({block:"center",inline:"center"}),()=>e.el.blur())},{prefix:"on",description:"Sets the event listener of the element",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,allowedModifiers:new Set(["once","passive","capture","debounce","throttle"]),onLoad:e=>{const{el:t,key:o,expressionFn:n}=e;let r=()=>{n(e)};const s=e.modifiers.get("debounce");if(s){const e=V(s),t=K(s,"leading",!1),o=K(s,"noTrail",!0);r=function(e,t,o=!1,n=!0){let r;const s=()=>r&&clearTimeout(r);return function(...i){s(),o&&!r&&e(...i),r=setTimeout((()=>{n&&e(...i),s()}),t)}}(r,e,t,o)}const i=e.modifiers.get("throttle");if(i){const e=V(i),t=K(i,"noLead",!0),o=K(i,"noTrail",!0);r=function(e,t,o=!0,n=!1){let r=!1,s=null;return function(...i){r?s=i:(r=!0,o?e(...i):s=i,setTimeout((()=>{n&&s&&(e(...s),s=null),r=!1}),t))}}(r,e,t,o)}const a={capture:!0,passive:!1,once:!1};if(e.modifiers.has("capture")||(a.capture=!1),e.modifiers.has("passive")&&(a.passive=!0),e.modifiers.has("once")&&(a.once=!0),"load"===o)return document.addEventListener(I,r,a),()=>{document.removeEventListener(I,r)};const c=o.toLowerCase();return t.addEventListener(c,r,a),()=>{t.removeEventListener(c,r)}}}];function V(e){if(!e||0===e?.length)return 0;for(const t of e){if(t.endsWith("ms"))return Number(t.replace("ms",""));if(t.endsWith("s"))return 1e3*Number(t.replace("s",""));try{return parseFloat(t)}catch{}}return 0}function K(e,t,o=!1){return!!e&&(e.includes(t)||o)}const q=new WeakSet;function B(e,t,o={}){let n;e instanceof Document&&(e=e.documentElement),n="string"==typeof t?function(e){const t=e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(t.match(/<\/html>/)||t.match(/<\/head>/)||t.match(/<\/body>/)){const o=oe.parseFromString(e,"text/html");if(t.match(/<\/html>/))return q.add(o),o;{let e=o.firstChild;return e?(q.add(e),e):null}}{const t=oe.parseFromString(`<body><template>${e}</template></body>`,"text/html").body.querySelector("template")?.content;if(!t)throw new Error("content is null");return q.add(t),t}}(t):t;const r=function(e){if(null==e)return document.createElement("div");if(q.has(e))return e;if(e instanceof Node){const t=document.createElement("div");return t.append(e),t}{const t=document.createElement("div");for(const o of[...e])t.append(o);return t}}(n),s=function(e,t,o){return{target:e,newContent:t,config:o,morphStyle:o.morphStyle,ignoreActive:o.ignoreActive,idMap:ue(e,t),deadIds:new Set,callbacks:Object.assign({beforeNodeAdded:z,afterNodeAdded:z,beforeNodeMorphed:z,afterNodeMorphed:z,beforeNodeRemoved:z,afterNodeRemoved:z},o.callbacks),head:Object.assign({style:"merge",shouldPreserve:e=>"true"===e.getAttribute("im-preserve"),shouldReAppend:e=>"true"===e.getAttribute("im-re-append"),shouldRemove:z,afterHeadMorphed:z},o.head)}}(e,r,o);return U(e,r,s)}function U(e,t,o){if(o.head.block){const n=e.querySelector("head"),r=t.querySelector("head");if(n&&r){const s=Z(r,n,o);return void Promise.all(s).then((()=>{U(e,t,Object.assign(o,{head:{block:!1,ignore:!0}}))}))}}if("innerHTML"===o.morphStyle)return W(t,e,o),e.children;if("outerHTML"===o.morphStyle||null==o.morphStyle){const n=function(e,t,o){let n=e.firstChild,r=n,s=0;for(;n;){let e=ne(n,t,o);e>s&&(r=n,s=e),n=n.nextSibling}return r}(t,e,o);if(!n)throw new Error("Could not find best match");const r=n?.previousSibling,s=n?.nextSibling,i=J(e,n,o);return n?function(e,t,o){const n=[],r=[];for(;e;)n.push(e),e=e.previousSibling;for(;n.length>0;){const e=n.pop();r.push(e),t?.parentElement?.insertBefore(e,t)}for(r.push(t);o;)n.push(o),r.push(o),o=o.nextSibling;for(;n.length;)t?.parentElement?.insertBefore(n.pop(),t.nextSibling);return r}(r,i,s):[]}throw"Do not understand how to morph style "+o.morphStyle}function J(e,t,o){if(!o.ignoreActive||e!==document.activeElement){if(null==t){if(!1===o.callbacks.beforeNodeRemoved(e))return;return e.remove(),void o.callbacks.afterNodeRemoved(e)}if(Y(e,t))return!1===o.callbacks.beforeNodeMorphed(e,t)?void 0:(e instanceof HTMLHeadElement&&o.head.ignore||(t instanceof HTMLHeadElement&&e instanceof HTMLHeadElement&&"morph"!==o.head.style?Z(t,e,o):(function(e,t){let o=e.nodeType;if(1===o){for(const o of e.attributes)t.getAttribute(o.name)!==o.value&&t.setAttribute(o.name,o.value);for(const o of t.attributes)e.hasAttribute(o.name)||t.removeAttribute(o.name)}if((o===Node.COMMENT_NODE||o===Node.TEXT_NODE)&&t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),e instanceof HTMLInputElement&&t instanceof HTMLInputElement&&"file"!==e.type)t.value=e.value||"",G(e,t,"value"),G(e,t,"checked"),G(e,t,"disabled");else if(e instanceof HTMLOptionElement)G(e,t,"selected");else if(e instanceof HTMLTextAreaElement&&t instanceof HTMLTextAreaElement){const o=e.value;o!==t.value&&(t.value=o),t.firstChild&&t.firstChild.nodeValue!==o&&(t.firstChild.nodeValue=o)}}(t,e),W(t,e,o))),o.callbacks.afterNodeMorphed(e,t),e);if(!1===o.callbacks.beforeNodeRemoved(e)||!1===o.callbacks.beforeNodeAdded(t))return;if(!e.parentElement)throw new Error("oldNode has no parentElement");return e.parentElement.replaceChild(t,e),o.callbacks.afterNodeAdded(t),o.callbacks.afterNodeRemoved(e),t}}function W(e,t,o){let n,r=e.firstChild,s=t.firstChild;for(;r;){if(n=r,r=n.nextSibling,null==s){if(!1===o.callbacks.beforeNodeAdded(n))return;t.appendChild(n),o.callbacks.afterNodeAdded(n),ae(o,n);continue}if(X(n,s,o)){J(s,n,o),s=s.nextSibling,ae(o,n);continue}let i=ee(e,t,n,s,o);if(i){s=Q(s,i,o),J(i,n,o),ae(o,n);continue}let a=te(e,n,s,o);if(a)s=Q(s,a,o),J(a,n,o),ae(o,n);else{if(!1===o.callbacks.beforeNodeAdded(n))return;t.insertBefore(n,s),o.callbacks.afterNodeAdded(n),ae(o,n)}}for(;null!==s;){let e=s;s=s.nextSibling,re(e,o)}}function G(e,t,o){const n=e.getAttribute(o);n!==t.getAttribute(o)&&(n?t.setAttribute(o,n):t.removeAttribute(o))}function Z(e,t,o){const n=[],r=[],s=[],i=[],a=o.head.style,c=new Map;for(const t of e.children)c.set(t.outerHTML,t);for(const e of t.children){let t=c.has(e.outerHTML),n=o.head.shouldReAppend(e),l=o.head.shouldPreserve(e);t||l?n?r.push(e):(c.delete(e.outerHTML),s.push(e)):"append"===a?n&&(r.push(e),i.push(e)):!1!==o.head.shouldRemove(e)&&r.push(e)}i.push(...c.values()),console.log("to append: ",i);const l=[];for(const e of i){console.log("adding: ",e);const r=document.createRange().createContextualFragment(e.outerHTML).firstChild;if(!r)throw new Error("could not create new element from: "+e.outerHTML);if(console.log(r),o.callbacks.beforeNodeAdded(r)){if(r.hasAttribute("href")||r.hasAttribute("src")){let e;const t=new Promise((t=>{e=t}));r.addEventListener("load",(function(){e(void 0)})),l.push(t)}t.appendChild(r),o.callbacks.afterNodeAdded(r),n.push(r)}}for(const e of r)!1!==o.callbacks.beforeNodeRemoved(e)&&(t.removeChild(e),o.callbacks.afterNodeRemoved(e));return o.head.afterHeadMorphed(t,{added:n,kept:s,removed:r}),l}function z(){}function X(e,t,o){return!(!e||!t)&&(e.nodeType===t.nodeType&&e.tagName===t.tagName&&(!(!e?.id?.length||e.id!==t.id)||ce(o,e,t)>0))}function Y(e,t){return!(!e||!t)&&(e.nodeType===t.nodeType&&e.tagName===t.tagName)}function Q(e,t,o){for(;e!==t;){const t=e;if(e=e?.nextSibling,!t)throw new Error("tempNode is null");re(t,o)}return ae(o,t),t.nextSibling}function ee(e,t,o,n,r){const s=ce(r,o,t);let i=null;if(s>0){i=n;let t=0;for(;null!=i;){if(X(o,i,r))return i;if(t+=ce(r,i,e),t>s)return null;i=i.nextSibling}}return i}function te(e,t,o,n){let r=o,s=t.nextSibling,i=0;for(;r&&s;){if(ce(n,r,e)>0)return null;if(Y(t,r))return r;if(Y(s,r)&&(i++,s=s.nextSibling,i>=2))return null;r=r.nextSibling}return r}const oe=new DOMParser;function ne(e,t,o){return Y(e,t)?.5+ce(o,e,t):0}function re(e,t){ae(t,e),!1!==t.callbacks.beforeNodeRemoved(e)&&(e.remove(),t.callbacks.afterNodeRemoved(e))}function se(e,t){return!e.deadIds.has(t)}function ie(e,t,o){return e.idMap.get(o)?.has(t)||!1}function ae(e,t){const o=e.idMap.get(t);if(o)for(const t of o)e.deadIds.add(t)}function ce(e,t,o){const n=e.idMap.get(t);if(!n)return 0;let r=0;for(const t of n)se(e,t)&&ie(e,t,o)&&++r;return r}function le(e,t){const o=e.parentElement,n=e.querySelectorAll("[id]");for(const e of n){let n=e;for(;n!==o&&n;){let o=t.get(n);null==o&&(o=new Set,t.set(n,o)),o.add(e.id),n=n.parentElement}}}function ue(e,t){const o=new Map;return le(e,o),le(t,o),o}const fe="get",de=["get","post","put","patch","delete"].reduce(((t,o)=>(t[o]=async t=>async function(t,o){const{el:n,store:r}=o,s=r.fetch.elementURLs[n.id];if(!s)throw new Error(`No signal for ${t}`);n.classList.add(_e);const i=new URL(s.value,window.location.origin),a=new Headers;a.append(pe,ye),a.append(he,me);const c=r.fetch.headers.value;if(c)for(const e in c){const t=c[e];a.append(e,t)}const l={...r};delete l.fetch;const u=JSON.stringify(l),f={method:t,headers:a};if(t===fe){const e=new URLSearchParams(i.search);e.append("datastar",u),i.search=e.toString()}else f.body=u;const d=await fetch(i,f),p=await d.text();if(!d.ok){if(!(d.status>=300&&d.status<400))throw new Error("Response was not ok and wasn't a redirect, can't merge.");let e=p;return e.startsWith("/")&&(e=window.location.origin+e),console.log(`Redirecting to ${e}`),void window.location.replace(e)}if(d.headers.get(he)!==ye)throw new Error("Response is not HTML and wasn't a redirect, can't merge.");(function(t,o,n="morph"){const{el:r}=t,s=[...xe.parseFromString(o,ye).body.children];for(let o=0;o<s.length;o++){const i=s[o];if(!(i instanceof Element))throw new Error("Not an element");const a=e(i),c=i.getAttribute("id"),l=0===o,u=!!c?.length;let f;if(l&&!u)f=[r];else{if(!u)throw new Error("No id");const e=a?.dataset?.[be]||`#${c}`;f=document.querySelectorAll(e)||[]}if(!f)throw new Error("No target element");for(const e of f){const o=a?.dataset?.[we];switch(o&&(n=o),n){case"morph":B(e,i),t.applyPlugins(e);continue;case"inner":e.innerHTML=i.innerHTML;break;case"outer":e.outerHTML=i.outerHTML;break;case"prepend":e.prepend(i);break;case"append":e.append(i);break;case"before":e.before(i);break;case"after":e.after(i);break;case"delete":e.remove();break;default:throw new Error("Invalid merge mode")}t.applyPlugins(i)}}})(o,p),n.classList.remove(_e)}(o,t),t)),{}),pe="Accept",he="Content-Type",me="application/json",ge="datastar",ve=`${ge}-indicator`,_e=`${ge}-request`,ye="text/html",be="fragmentSelector",we="fragmentSwap",Ee=[{prefix:"header",description:"Sets the header of the fetch request",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:e=>{const t=e.store.fetch.headers,o=e.key[0].toUpperCase()+e.key.slice(1);return t[o]=e.reactivity.computed((()=>e.expressionFn(e))),()=>{delete t[o]}}},{prefix:"fetchUrl",description:"Sets the fetch url",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,onGlobalInit:({mergeStore:e})=>{const t=document.createElement("style");t.innerHTML=`\n.${ve}{\n opacity:0;\n}\n.${_e} .${ve}{\n opacity:1;\n transition: opacity 300ms ease-in;\n}\n.${_e}.${ve}{\n opacity:1;\n transition: opacity 300s ease-in;\n}\n`,document.head.appendChild(t);const o=new Headers;o.append(pe,ye),o.append(he,me),e({fetch:{headers:{},elementURLs:{}}})},onLoad:e=>e.reactivity.effect((()=>{const t=e.reactivity.computed((()=>`${e.expressionFn(e)}`));return e.store.fetch.elementURLs[e.el.id]=t,()=>{delete e.store.fetch.elementURLs[e.el.id]}}))},{prefix:"sse",description:"Sets the value of the element",mustHaveEmptyKey:!0,onLoad:e=>{if("string"!=typeof e.expressionFn(e))throw new Error("SSE url must be a string");return()=>{}}}];const xe=new DOMParser;const Se="display",Ne="none",Te="important",ke={prefix:"show",description:"Sets the display of the element",allowedModifiers:new Set([Te]),onLoad:e=>{const{el:t,modifiers:o,expressionFn:n}=e;return k((()=>{const r=!!n(e),s=o.has(Te)?Te:void 0;r?1===t.style.length&&t.style.display===Ne?t.style.removeProperty(Se):t.style.setProperty(Se,"",s):t.style.setProperty(Se,Ne,s)}))}},Le="once",Me="half",Ae="full",$e={prefix:"intersects",description:"Run expression when element intersects with viewport",allowedModifiers:new Set([Le,Me,Ae]),mustHaveEmptyKey:!0,onLoad:e=>{const{modifiers:t}=e,o={threshold:0};t.has(Ae)?o.threshold=1:t.has(Me)&&(o.threshold=.5);const n=new IntersectionObserver((o=>{o.forEach((o=>{o.isIntersecting&&(e.expressionFn(e),t.has(Le)&&n.disconnect())}))}),o);return n.observe(e.el),()=>n.disconnect()}},He="prepend",Ce="append",Oe=new Error("Target element must have a parent if using prepend or append"),Re=[ke,$e,{prefix:"teleport",description:"Teleports the element to another element",allowedModifiers:new Set([He,Ce]),allowedTags:new Set(["template"]),bypassExpressionFunctionCreation:!0,onLoad:t=>{const{el:o,modifiers:n,expression:r}=t;if(!(o instanceof HTMLTemplateElement))throw new Error;const s=document.querySelector(r);if(!s)throw new Error(`Target element not found: ${r}`);if(!o.content)throw new Error("Template element must have content");const i=o.content.cloneNode(!0);if(e(i)?.firstElementChild)throw new Error("Empty template");if(n.has(He)){if(!s.parentNode)throw Oe;s.parentNode.insertBefore(i,s)}else if(n.has(Ce)){if(!s.parentNode)throw Oe;s.parentNode.insertBefore(i,s.nextSibling)}else s.appendChild(i)}},{prefix:"scrollIntoView",description:"Scrolls the element into view",onLoad:e=>{const{el:t}=e;t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}];function Pe(e={},...t){const o=performance.now(),n=new P(e,...t);n.run();const r=performance.now();return console.log(`Datastar loaded and attached to all DOM elements in ${r-o}ms`),n}function Fe(e={},...t){return Pe(Object.assign({},de,e),...[...Ee,...Re,...D,...t])}export{P as Datastar,Pe as runDatastarWith,Fe as runDatastarWithAllPlugins,e as toHTMLorSVGElement};export default null;
//# sourceMappingURL=/sm/090ca91622ad50bd4fc2e2f4ad9a76bbb73a0a157fabaf05ed921a8ab7ad239b.map