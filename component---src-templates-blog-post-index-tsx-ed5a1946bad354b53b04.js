(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8JVb":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("YwZP"),o=n("wEEd"),u=n("PIHY"),c=n("Ac47");n("wqy0");t.default=function(e){var t=Object(o.b)({opacity:1,from:{opacity:0}}),n=e.data.markdownRemark,r=n.frontmatter,l=r.title,s=r.seo_description,f=n.html;return a.a.createElement(c.a,null,a.a.createElement(u.a,{title:"Blog Post",description:s}),a.a.createElement("div",{className:"blog-post-container"},a.a.createElement(o.a.div,{style:t,className:"blog-post-content-container"},a.a.createElement("a",{onClick:function(){Object(i.navigate)(-1)},className:"blog-post-back-link"},"Go back"),a.a.createElement("h1",null,l),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}}))))};var l="2099960399"},INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},wEEd:function(e,t,n){"use strict";n("Tze0"),n("SRfc"),n("pIFo"),n("Oyvg"),n("INYr"),n("dRSK"),n("0l/t"),n("HEwt"),n("bHtr"),n("dZ+Y"),n("9VmF"),n("Vd3H"),n("/8Fb"),n("VRzm");var r=n("KQm4"),a=(n("bWfx"),n("f3/d"),n("rE2o"),n("ioFf"),n("DW2E"),n("eM6i"),n("hhXQ"),n("8+KV"),n("md7G")),i=n("foSv"),o=n("JX7q"),u=n("Ji7U"),c=(n("V+eJ"),n("1OyB"));function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var f=n("rePB"),d=(n("DNiP"),n("RW0V"),n("9AAn"),n("rGqo"),n("yt8O"),n("XfO3"),n("T39b"),n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),n("wx14")),h=n("zLVn"),p=n("q1tI"),v=n.n(p);n.d(t,"a",(function(){return Ee})),n.d(t,"b",(function(){return Y}));var m={arr:Array.isArray,obj:function(e){return"[object Object]"===Object.prototype.toString.call(e)},fun:function(e){return"function"==typeof e},str:function(e){return"string"==typeof e},num:function(e){return"number"==typeof e},und:function(e){return void 0===e},nul:function(e){return null===e},set:function(e){return e instanceof Set},map:function(e){return e instanceof Map},equ:function(e,t){if(typeof e!=typeof t)return!1;if(m.str(e)||m.num(e))return e===t;if(m.obj(e)&&m.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;var n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return!m.und(n)||e===t}};function y(){var e=Object(p.useState)(!1)[1];return Object(p.useCallback)((function(){return e((function(e){return!e}))}),[])}function g(e,t){return m.und(e)||m.nul(e)?t:e}function b(e){return m.und(e)?[]:m.arr(e)?e:[e]}function O(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return m.fun(e)?e.apply(void 0,n):e}function j(e){var t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,Object(h.a)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(m.und(t))return Object(d.a)({to:t},e);var n=Object.keys(e).reduce((function(n,r){return m.und(t[r])?Object(d.a)({},n,Object(f.a)({},r,e[r])):n}),{});return Object(d.a)({to:t},n)}var k,w,V=function(){function e(){Object(c.a)(this,e),this.payload=void 0,this.children=[]}return s(e,[{key:"getAnimatedValue",value:function(){return this.getValue()}},{key:"getPayload",value:function(){return this.payload||this}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"getChildren",value:function(){return this.children}},{key:"addChild",value:function(e){0===this.children.length&&this.attach(),this.children.push(e)}},{key:"removeChild",value:function(e){var t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}]),e}(),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(a.a)(this,Object(i.a)(t).apply(this,arguments))).payload=[],e.attach=function(){return e.payload.forEach((function(t){return t instanceof V&&t.addChild(Object(o.a)(e))}))},e.detach=function(){return e.payload.forEach((function(t){return t instanceof V&&t.removeChild(Object(o.a)(e))}))},e}return Object(u.a)(t,e),t}(V),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(a.a)(this,Object(i.a)(t).apply(this,arguments))).payload={},e.attach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof V&&t.addChild(Object(o.a)(e))}))},e.detach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof V&&t.removeChild(Object(o.a)(e))}))},e}return Object(u.a)(t,e),s(t,[{key:"getValue",value:function(e){void 0===e&&(e=!1);var t={};for(var n in this.payload){var r=this.payload[n];(!e||r instanceof V)&&(t[n]=r instanceof V?r[e?"getAnimatedValue":"getValue"]():r)}return t}},{key:"getAnimatedValue",value:function(){return this.getValue(!0)}}]),t}(V);function A(e,t){k={fn:e,transform:t}}function P(e){w=e}var C,q=function(e){return"undefined"!=typeof window?window.requestAnimationFrame(e):-1};function F(e){C=e}var S=function(){return Date.now()};function R(e){e}var T,I,M=function(e){return e.current};function N(e){T=e}var z=function(e){function t(e,n){var r;return Object(c.a)(this,t),(r=Object(a.a)(this,Object(i.a)(t).call(this))).update=void 0,r.payload=e.style?Object(d.a)({},e,{style:T(e.style)}):e,r.update=n,r.attach(),r}return Object(u.a)(t,e),t}(x),L=!1,G=new Set,H=function e(){if(!L)return!1;var t=S(),n=!0,r=!1,a=void 0;try{for(var i,o=G[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){for(var u=i.value,c=!1,l=0;l<u.configs.length;l++){for(var s=u.configs[l],f=void 0,d=void 0,h=0;h<s.animatedValues.length;h++){var p=s.animatedValues[h];if(!p.done){var v=s.fromValues[h],m=s.toValues[h],y=p.lastPosition,g=m instanceof V,b=Array.isArray(s.initialVelocity)?s.initialVelocity[h]:s.initialVelocity;if(g&&(m=m.getValue()),s.immediate)p.setValue(m),p.done=!0;else if("string"!=typeof v&&"string"!=typeof m){if(void 0!==s.duration)y=v+s.easing((t-p.startTime)/s.duration)*(m-v),f=t>=p.startTime+s.duration;else if(s.decay)y=v+b/(1-.998)*(1-Math.exp(-(1-.998)*(t-p.startTime))),(f=Math.abs(p.lastPosition-y)<.1)&&(m=y);else{d=void 0!==p.lastTime?p.lastTime:t,b=void 0!==p.lastVelocity?p.lastVelocity:s.initialVelocity,t>d+64&&(d=t);for(var O=Math.floor(t-d),j=0;j<O;++j){y+=1*(b+=1*((-s.tension*(y-m)+-s.friction*b)/s.mass)/1e3)/1e3}var k=!(!s.clamp||0===s.tension)&&(v<m?y>m:y<m),w=Math.abs(b)<=s.precision,E=0===s.tension||Math.abs(m-y)<=s.precision;f=k||w&&E,p.lastVelocity=b,p.lastTime=t}g&&!s.toValues[h].done&&(f=!1),f?(p.value!==m&&(y=m),p.done=!0):c=!0,p.setValue(y),p.lastPosition=y}else p.setValue(m),p.done=!0}}u.props.onFrame&&(u.values[s.name]=s.interpolation.getValue())}u.props.onFrame&&u.props.onFrame(u.values),c||(G.delete(u),u.stop(!0))}}catch(x){r=!0,a=x}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return G.size?I?I():q(e):L=!1,L};function W(e,t,n){if("function"==typeof e)return e;if(Array.isArray(e))return W({range:e,output:t,extrapolate:n});if(C&&"string"==typeof e.output[0])return C(e);var r=e,a=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",u=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||function(e){return e};return function(e){var t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,a,i,o,u,c){var l=c?c(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>n){if("identity"===u)return l;"clamp"===u&&(l=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?l=-l:n===1/0?l-=t:l=(l-t)/(n-t);l=i(l),r===-1/0?l=-l:a===1/0?l+=r:l=l*(a-r)+r;return l}(e,i[t],i[t+1],a[t],a[t+1],c,o,u,r.map)}}var K=function(e){function t(e,n,r,o){var u;return Object(c.a)(this,t),(u=Object(a.a)(this,Object(i.a)(t).call(this))).calc=void 0,u.payload=e instanceof E&&!(e instanceof t)?e.getPayload():Array.isArray(e)?e:[e],u.calc=W(n,r,o),u}return Object(u.a)(t,e),s(t,[{key:"getValue",value:function(){return this.calc.apply(this,Object(r.a)(this.payload.map((function(e){return e.getValue()}))))}},{key:"updateConfig",value:function(e,t,n){this.calc=W(e,t,n)}},{key:"interpolate",value:function(e,n,r){return new t(this,e,n,r)}}]),t}(E);var Q=function(e){function t(e){var n,r;return Object(c.a)(this,t),n=Object(a.a)(this,Object(i.a)(t).call(this)),r=Object(o.a)(n),n.animatedStyles=new Set,n.value=void 0,n.startPosition=void 0,n.lastPosition=void 0,n.lastVelocity=void 0,n.startTime=void 0,n.lastTime=void 0,n.done=!1,n.setValue=function(e,t){void 0===t&&(t=!0),r.value=e,t&&r.flush()},n.value=e,n.startPosition=e,n.lastPosition=e,n}return Object(u.a)(t,e),s(t,[{key:"flush",value:function(){0===this.animatedStyles.size&&function e(t,n){"update"in t?n.add(t):t.getChildren().forEach((function(t){return e(t,n)}))}(this,this.animatedStyles),this.animatedStyles.forEach((function(e){return e.update()}))}},{key:"clearStyles",value:function(){this.animatedStyles.clear()}},{key:"getValue",value:function(){return this.value}},{key:"interpolate",value:function(e,t,n){return new K(this,e,t,n)}}]),t}(V),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this))).payload=e.map((function(e){return new Q(e)})),n}return Object(u.a)(t,e),s(t,[{key:"setValue",value:function(e,t){var n=this;void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach((function(e,r){return n.payload[r].setValue(e,t)})):this.payload.forEach((function(n){return n.setValue(e,t)}))}},{key:"getValue",value:function(){return this.payload.map((function(e){return e.getValue()}))}},{key:"interpolate",value:function(e,t){return new K(this,e,t)}}]),t}(E),J=0,U=function(){function e(){var t=this;Object(c.a)(this,e),this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=function(){return t.interpolations},this.id=J++}return s(e,[{key:"update",value:function(e){if(!e)return this;var t=j(e),n=t.delay,r=void 0===n?0:n,a=t.to,i=Object(h.a)(t,["delay","to"]);if(m.arr(a)||m.fun(a))this.queue.push(Object(d.a)({},i,{delay:r,to:a}));else if(a){var o={};Object.entries(a).forEach((function(e){var t=e[0],n=e[1],a=Object(d.a)({to:Object(f.a)({},t,n),delay:O(r,t)},i),u=o[a.delay]&&o[a.delay].to;o[a.delay]=Object(d.a)({},o[a.delay],a,{to:Object(d.a)({},u,a.to)})})),this.queue=Object.values(o)}return this.queue=this.queue.sort((function(e,t){return e.delay-t.delay})),this.diff(i),this}},{key:"start",value:function(e){var t,n=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((function(e){var t=e.from,r=void 0===t?{}:t,a=e.to,i=void 0===a?{}:a;m.obj(r)&&(n.merged=Object(d.a)({},r,n.merged)),m.obj(i)&&(n.merged=Object(d.a)({},n.merged,i))}));var r=this.local=++this.guid,a=this.localQueue=this.queue;this.queue=[],a.forEach((function(t,i){var o=t.delay,u=Object(h.a)(t,["delay"]),c=function(t){i===a.length-1&&r===n.guid&&t&&(n.idle=!0,n.props.onRest&&n.props.onRest(n.merged)),e&&e()},l=m.arr(u.to)||m.fun(u.to);o?setTimeout((function(){r===n.guid&&(l?n.runAsync(u,c):n.diff(u).start(c))}),o):l?n.runAsync(u,c):n.diff(u).start(c)}))}else m.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,G.has(t)||G.add(t),L||(L=!0,q(I||H));return this}},{key:"stop",value:function(e){return this.listeners.forEach((function(t){return t(e)})),this.listeners=[],this}},{key:"pause",value:function(e){var t;return this.stop(!0),e&&(t=this,G.has(t)&&G.delete(t)),this}},{key:"runAsync",value:function(e,t){var n=this,r=this,a=(e.delay,Object(h.a)(e,["delay"])),i=this.local,o=Promise.resolve(void 0);if(m.arr(a.to))for(var u=function(e){var t=e,r=Object(d.a)({},a,j(a.to[t]));m.arr(r.config)&&(r.config=r.config[t]),o=o.then((function(){if(i===n.guid)return new Promise((function(e){return n.diff(r).start(e)}))}))},c=0;c<a.to.length;c++)u(c);else if(m.fun(a.to)){var l,s=0;o=o.then((function(){return a.to((function(e){var t=Object(d.a)({},a,j(e));if(m.arr(t.config)&&(t.config=t.config[s]),s++,i===n.guid)return l=new Promise((function(e){return n.diff(t).start(e)}))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((function(){return l}))}))}o.then(t)}},{key:"diff",value:function(e){var t=this;this.props=Object(d.a)({},this.props,e);var n=this.props,r=n.from,a=void 0===r?{}:r,i=n.to,o=void 0===i?{}:i,u=n.config,c=void 0===u?{}:u,l=n.reverse,s=n.attach,h=n.reset,p=n.immediate;if(l){var v=[o,a];a=v[0],o=v[1]}this.merged=Object(d.a)({},a,this.merged,o),this.hasChanged=!1;var y=s&&s(this);if(this.animations=Object.entries(this.merged).reduce((function(e,n){var r=n[0],i=n[1],o=e[r]||{},u=m.num(i),l=m.str(i)&&!i.startsWith("#")&&!/\d/.test(i)&&!w[i],s=m.arr(i),v=!u&&!s&&!l,j=m.und(a[r])?i:a[r],k=u||s||l?i:1,V=O(c,r);y&&(k=y.animations[r].parent);var E,x=o.parent,A=o.interpolation,P=b(y?k.getPayload():k),q=i;v&&(q=C({range:[0,1],output:[i,i]})(1));var F=A&&A.getValue(),R=!m.und(x)&&o.animatedValues.some((function(e){return!e.done})),T=!m.equ(q,F),I=!m.equ(q,o.previous),M=!m.equ(V,o.config);if(h||I&&T||M){if(u||l)x=A=o.parent||new Q(j);else if(s)x=A=o.parent||new X(j);else if(v){var N=o.interpolation&&o.interpolation.calc(o.parent.value);N=void 0===N||h?j:N,o.parent?(x=o.parent).setValue(0,!1):x=new Q(0);var z={output:[N,i]};o.interpolation?(A=o.interpolation,o.interpolation.updateConfig(z)):A=x.interpolate(z)}return P=b(y?k.getPayload():k),E=b(x.getPayload()),h&&!v&&x.setValue(j,!1),t.hasChanged=!0,E.forEach((function(e){e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=R?e.lastVelocity:void 0,e.lastTime=R?e.lastTime:void 0,e.startTime=S(),e.done=!1,e.animatedStyles.clear()})),O(p,r)&&x.setValue(v?k:i,!1),Object(d.a)({},e,Object(f.a)({},r,Object(d.a)({},o,{name:r,parent:x,interpolation:A,animatedValues:E,toValues:P,previous:q,config:V,fromValues:b(x.getValue()),immediate:O(p,r),initialVelocity:g(V.velocity,0),clamp:g(V.clamp,!1),precision:g(V.precision,.01),tension:g(V.tension,170),friction:g(V.friction,26),mass:g(V.mass,1),duration:V.duration,easing:g(V.easing,(function(e){return e})),decay:V.decay})))}return T?e:(v&&(x.setValue(1,!1),A.updateConfig({output:[q,q]})),x.done=!0,t.hasChanged=!0,Object(d.a)({},e,Object(f.a)({},r,Object(d.a)({},e[r],{previous:q}))))}),this.animations),this.hasChanged)for(var j in this.configs=Object.values(this.animations),this.values={},this.interpolations={},this.animations)this.interpolations[j]=this.animations[j].interpolation,this.values[j]=this.animations[j].interpolation.getValue();return this}},{key:"destroy",value:function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}]),e}(),D=function(e,t){var n=Object(p.useRef)(!1),r=Object(p.useRef)(),a=m.fun(t),i=Object(p.useMemo)((function(){var n;return r.current&&(r.current.map((function(e){return e.destroy()})),r.current=void 0),[new Array(e).fill().map((function(e,r){var i=new U,o=a?O(t,r,i):t[r];return 0===r&&(n=o.ref),i.update(o),n||i.start(),i})),n]}),[e]),o=i[0],u=i[1];r.current=o;Object(p.useImperativeHandle)(u,(function(){return{start:function(){return Promise.all(r.current.map((function(e){return new Promise((function(t){return e.start(t)}))})))},stop:function(e){return r.current.forEach((function(t){return t.stop(e)}))},get controllers(){return r.current}}}));var c=Object(p.useMemo)((function(){return function(e){return r.current.map((function(t,n){t.update(a?O(e,n,t):e[n]),u||t.start()}))}}),[e]);Object(p.useEffect)((function(){n.current?a||c(t):u||r.current.forEach((function(e){return e.start()}))})),Object(p.useEffect)((function(){return n.current=!0,function(){return r.current.forEach((function(e){return e.destroy()}))}}),[]);var l=r.current.map((function(e){return e.getValues()}));return a?[l,c,function(e){return r.current.forEach((function(t){return t.pause(e)}))}]:l},Y=function(e){var t=m.fun(e),n=D(1,t?e:[e]),r=n[0],a=n[1],i=n[2];return t?[r[0],a,i]:r};var B=function(e){function t(e){var n;return Object(c.a)(this,t),void 0===e&&(e={}),n=Object(a.a)(this,Object(i.a)(t).call(this)),!e.transform||e.transform instanceof V||(e=k.transform(e)),n.payload=e,n}return Object(u.a)(t,e),t}(x),$={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Z="[-+]?\\d*\\.?\\d+",_=Z+"%";function ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var te=new RegExp("rgb"+ee(Z,Z,Z)),ne=new RegExp("rgba"+ee(Z,Z,Z,Z)),re=new RegExp("hsl"+ee(Z,_,_)),ae=new RegExp("hsla"+ee(Z,_,_,Z)),ie=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oe=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ue=/^#([0-9a-fA-F]{6})$/,ce=/^#([0-9a-fA-F]{8})$/;function le(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function se(e,t,n){var r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,i=le(a,r,e+1/3),o=le(a,r,e),u=le(a,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*u)<<8}function fe(e){var t=parseInt(e,10);return t<0?0:t>255?255:t}function de(e){return(parseFloat(e)%360+360)%360/360}function he(e){var t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function pe(e){var t=parseFloat(e);return t<0?0:t>100?1:t/100}function ve(e){var t,n,r="number"==typeof(t=e)?t>>>0===t&&t>=0&&t<=4294967295?t:null:(n=ue.exec(t))?parseInt(n[1]+"ff",16)>>>0:$.hasOwnProperty(t)?$[t]:(n=te.exec(t))?(fe(n[1])<<24|fe(n[2])<<16|fe(n[3])<<8|255)>>>0:(n=ne.exec(t))?(fe(n[1])<<24|fe(n[2])<<16|fe(n[3])<<8|he(n[4]))>>>0:(n=ie.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0:(n=ce.exec(t))?parseInt(n[1],16)>>>0:(n=oe.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0:(n=re.exec(t))?(255|se(de(n[1]),pe(n[2]),pe(n[3])))>>>0:(n=ae.exec(t))?(se(de(n[1]),pe(n[2]),pe(n[3]))|he(n[4]))>>>0:null;if(null===r)return e;var a=(16711680&(r=r||0))>>>16,i=(65280&r)>>>8,o=(255&r)/255;return"rgba(".concat((4278190080&r)>>>24,", ").concat(a,", ").concat(i,", ").concat(o,")")}var me=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ye=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ge=new RegExp("(".concat(Object.keys($).join("|"),")"),"g"),be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","Ms","Moz","O"];function je(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}be=Object.keys(be).reduce((function(e,t){return Oe.forEach((function(n){return e[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(n,t)]=e[t]})),e}),be);var ke={};N((function(e){return new B(e)})),R("div"),F((function(e){var t=e.output.map((function(e){return e.replace(ye,ve)})).map((function(e){return e.replace(ge,ve)})),n=t[0].match(me).map((function(){return[]}));t.forEach((function(e){e.match(me).forEach((function(e,t){return n[t].push(+e)}))}));var r=t[0].match(me).map((function(t,r){return W(Object(d.a)({},e,{output:n[r]}))}));return function(e){var n=0;return t[0].replace(me,(function(){return r[n++](e)})).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(function(e,t,n,r,a){return"rgba(".concat(Math.round(t),", ").concat(Math.round(n),", ").concat(Math.round(r),", ").concat(a,")")}))}})),P($),A((function(e,t){if(!e.nodeType||void 0===e.setAttribute)return!1;var n=t.style,r=t.children,a=t.scrollTop,i=t.scrollLeft,o=Object(h.a)(t,["style","children","scrollTop","scrollLeft"]),u="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;for(var c in void 0!==a&&(e.scrollTop=a),void 0!==i&&(e.scrollLeft=i),void 0!==r&&(e.textContent=r),n)if(n.hasOwnProperty(c)){var l=0===c.indexOf("--"),s=je(c,n[c],l);"float"===c&&(c="cssFloat"),l?e.style.setProperty(c,s):e.style[c]=s}for(var f in o){var d=u?f:ke[f]||(ke[f]=f.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()})));void 0!==e.getAttribute(d)&&e.setAttribute(d,o[f])}}),(function(e){return e}));var we,Ve,Ee=(we=function(e){return Object(p.forwardRef)((function(t,n){var r=y(),a=Object(p.useRef)(!0),i=Object(p.useRef)(null),o=Object(p.useRef)(null),u=Object(p.useCallback)((function(e){var t=i.current;i.current=new z(e,(function(){var e=!1;o.current&&(e=k.fn(o.current,i.current.getAnimatedValue())),o.current&&!1!==e||r()})),t&&t.detach()}),[]);Object(p.useEffect)((function(){return function(){a.current=!1,i.current&&i.current.detach()}}),[]),Object(p.useImperativeHandle)(n,(function(){return M(o,a,r)})),u(t);var c,l=i.current.getValue(),s=(l.scrollTop,l.scrollLeft,Object(h.a)(l,["scrollTop","scrollLeft"])),f=(c=e,!m.fun(c)||c.prototype instanceof v.a.Component?function(e){return o.current=function(e,t){return t&&(m.fun(t)?t(e):m.obj(t)&&(t.current=e)),e}(e,n)}:void 0);return v.a.createElement(e,Object(d.a)({},s,{ref:f}))}))},void 0===(Ve=!1)&&(Ve=!0),function(e){return(m.arr(e)?e:Object.keys(e)).reduce((function(e,t){var n=Ve?t[0].toLowerCase()+t.substring(1):t;return e[n]=we(n),e}),we)})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-tsx-ed5a1946bad354b53b04.js.map