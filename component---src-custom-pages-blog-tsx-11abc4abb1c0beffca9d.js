(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"030e":function(e,t,r){"use strict";r.r(t);r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r.n(n),i=r("PIHY"),o=r("Ac47"),u=(r("91GP"),r("qlZn"),r("9eSz")),s=r.n(u),l=r("Wbzz"),c=r("wEEd");var d=Object(n.memo)((function(e){var t=Object(c.b)({opacity:1,from:{opacity:0}}),r=e.date,n=e.fluid,i=e.excerpt,o=e.slug,u=e.title,d=e.words,f=Math.ceil(d/200);return a.a.createElement(c.a.div,{className:"blog-content-post-container",style:t},a.a.createElement("div",{className:"blog-content-post-article-container"},a.a.createElement(l.Link,{to:o,className:"blog-content-heading"},u),a.a.createElement("p",{className:"blog-content-excerpt-sub-heading"},i),a.a.createElement("div",{className:"blog-content-action-section"},a.a.createElement("div",{className:"blog-content-author-and-date"},a.a.createElement("p",{className:"blog-content-author-sub-heading"},"Jordan Wu"),a.a.createElement("div",{className:"blog-content-date-heading"},a.a.createElement("time",null,r),a.a.createElement("span",{className:"blog-content-dot"}),a.a.createElement("span",null,f," min read")))),a.a.createElement(l.Link,{to:o,className:"blog-content-more-link"},"...")),a.a.createElement("div",{className:"blog-content-image-container"},a.a.createElement(l.Link,{to:o},a.a.createElement(s.a,{className:"blog-content-image",fluid:n}))))}));var f=Object(n.memo)((function(e){var t=e.blogPosts.map((function(e){return a.a.createElement(d,Object.assign({key:e.slug},e))}));return a.a.createElement("section",{className:"blog-content-container"},t)}));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"blogPostsQuery",(function(){return b}));t.default=function(e){var t=e.data,r=t.blogs.edges,n=t.images.edges.map(g),u=r.map(m).map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},n[t])}));return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"My Blogs",description:"This is my blogs."}),a.a.createElement(f,{blogPosts:u}))};function g(e){return{fluid:e.node.childImageSharp.fluid}}function m(e){var t=e.node,r=t.childMarkdownRemark,n=t.childMdx,a=r||n,i=a.frontmatter,o=i.date,u=i.title,s=a.fields.slug;return{date:o,excerpt:a.excerpt,slug:s,title:u,words:a.wordCount.words}}var b="884048390"},"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),u=n(r("8OQS")),s=n(r("pVnL")),l=n(r("q1tI")),c=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=h(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,O=new WeakMap;function j(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function k(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var V=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+o+u+r+n+t+i+a+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,i=e.ariaHidden,o=l.default.createElement(I,(0,s.default)({src:t},a,{ariaHidden:i}));return r.length>1?l.default.createElement("picture",null,n(r),o):o},I=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":h,sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=h(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,u=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,O=e.itemProp,w=e.loading,S=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:V?1:0,transition:R?"opacity "+v+"ms":"none"},u),L="boolean"==typeof b?"lightgray":b,q={transitionDelay:v+"ms"},A=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&q,{},u,{},f),T={title:t,alt:this.state.isVisible?"":r,style:A,className:h,itemProp:O};if(g){var F=g,N=p(g);return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),L&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&q)}),N.base64&&l.default.createElement(P,{ariaHidden:!0,src:N.base64,spreadProps:T,imageVariants:F,generateSources:E}),N.tracedSVG&&l.default.createElement(P,{ariaHidden:!0,src:N.tracedSVG,spreadProps:T,imageVariants:F,generateSources:k}),this.state.isVisible&&l.default.createElement("picture",null,j(F),l.default.createElement(I,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:r,title:t,loading:w},N,{imageVariants:F}))}}))}if(m){var z=m,M=p(m),G=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete G.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},L&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&q)}),M.base64&&l.default.createElement(P,{ariaHidden:!0,src:M.base64,spreadProps:T,imageVariants:z,generateSources:E}),M.tracedSVG&&l.default.createElement(P,{ariaHidden:!0,src:M.tracedSVG,spreadProps:T,imageVariants:z,generateSources:k}),this.state.isVisible&&l.default.createElement("picture",null,j(z),l.default.createElement(I,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:r,title:t,loading:w},M,{imageVariants:z}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:C,sizes:L,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var q=R;t.default=q},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,u=function(e,t,r,n){var a=String(i(e)),u="<"+t;return""!==r&&(u+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),u+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(u),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},bHtr:function(e,t,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},hhXQ:function(e,t,r){var n=r("XKFU"),a=r("UExd")(!1);n(n.S,"Object",{values:function(e){return a(e)}})},wEEd:function(e,t,r){"use strict";r("Tze0"),r("SRfc"),r("pIFo"),r("Oyvg"),r("INYr"),r("dRSK"),r("0l/t"),r("HEwt"),r("bHtr"),r("dZ+Y"),r("9VmF"),r("Vd3H"),r("/8Fb"),r("VRzm");var n=r("KQm4"),a=(r("bWfx"),r("f3/d"),r("rE2o"),r("ioFf"),r("DW2E"),r("eM6i"),r("hhXQ"),r("8+KV"),r("md7G")),i=r("foSv"),o=r("JX7q"),u=r("Ji7U"),s=(r("V+eJ"),r("1OyB"));function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var d=r("rePB"),f=(r("DNiP"),r("RW0V"),r("9AAn"),r("rGqo"),r("yt8O"),r("XfO3"),r("T39b"),r("a1Th"),r("h7Nl"),r("Btvt"),r("LK8F"),r("wx14")),h=r("zLVn"),p=r("q1tI"),g=r.n(p);r.d(t,"a",(function(){return Se})),r.d(t,"b",(function(){return Q}));var m={arr:Array.isArray,obj:function(e){return"[object Object]"===Object.prototype.toString.call(e)},fun:function(e){return"function"==typeof e},str:function(e){return"string"==typeof e},num:function(e){return"number"==typeof e},und:function(e){return void 0===e},nul:function(e){return null===e},set:function(e){return e instanceof Set},map:function(e){return e instanceof Map},equ:function(e,t){if(typeof e!=typeof t)return!1;if(m.str(e)||m.num(e))return e===t;if(m.obj(e)&&m.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;var r;for(r in e)if(!(r in t))return!1;for(r in t)if(e[r]!==t[r])return!1;return!m.und(r)||e===t}};function b(){var e=Object(p.useState)(!1)[1];return Object(p.useCallback)((function(){return e((function(e){return!e}))}),[])}function v(e,t){return m.und(e)||m.nul(e)?t:e}function y(e){return m.und(e)?[]:m.arr(e)?e:[e]}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return m.fun(e)?e.apply(void 0,r):e}function j(e){var t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,Object(h.a)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(m.und(t))return Object(f.a)({to:t},e);var r=Object.keys(e).reduce((function(r,n){return m.und(t[n])?Object(f.a)({},r,Object(d.a)({},n,e[n])):r}),{});return Object(f.a)({to:t},r)}var w,k,E=function(){function e(){Object(s.a)(this,e),this.payload=void 0,this.children=[]}return c(e,[{key:"getAnimatedValue",value:function(){return this.getValue()}},{key:"getPayload",value:function(){return this.payload||this}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"getChildren",value:function(){return this.children}},{key:"addChild",value:function(e){0===this.children.length&&this.attach(),this.children.push(e)}},{key:"removeChild",value:function(e){var t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}]),e}(),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(a.a)(this,Object(i.a)(t).apply(this,arguments))).payload=[],e.attach=function(){return e.payload.forEach((function(t){return t instanceof E&&t.addChild(Object(o.a)(e))}))},e.detach=function(){return e.payload.forEach((function(t){return t instanceof E&&t.removeChild(Object(o.a)(e))}))},e}return Object(u.a)(t,e),t}(E),V=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(a.a)(this,Object(i.a)(t).apply(this,arguments))).payload={},e.attach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof E&&t.addChild(Object(o.a)(e))}))},e.detach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof E&&t.removeChild(Object(o.a)(e))}))},e}return Object(u.a)(t,e),c(t,[{key:"getValue",value:function(e){void 0===e&&(e=!1);var t={};for(var r in this.payload){var n=this.payload[r];(!e||n instanceof E)&&(t[r]=n instanceof E?n[e?"getAnimatedValue":"getValue"]():n)}return t}},{key:"getAnimatedValue",value:function(){return this.getValue(!0)}}]),t}(E);function x(e,t){w={fn:e,transform:t}}function P(e){k=e}var I,R=function(e){return"undefined"!=typeof window?window.requestAnimationFrame(e):-1};function C(e){I=e}var L=function(){return Date.now()};function q(e){e}var A,T,F=function(e){return e.current};function N(e){A=e}var z=function(e){function t(e,r){var n;return Object(s.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this))).update=void 0,n.payload=e.style?Object(f.a)({},e,{style:A(e.style)}):e,n.update=r,n.attach(),n}return Object(u.a)(t,e),t}(V),M=!1,G=new Set,H=function e(){if(!M)return!1;var t=L(),r=!0,n=!1,a=void 0;try{for(var i,o=G[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){for(var u=i.value,s=!1,l=0;l<u.configs.length;l++){for(var c=u.configs[l],d=void 0,f=void 0,h=0;h<c.animatedValues.length;h++){var p=c.animatedValues[h];if(!p.done){var g=c.fromValues[h],m=c.toValues[h],b=p.lastPosition,v=m instanceof E,y=Array.isArray(c.initialVelocity)?c.initialVelocity[h]:c.initialVelocity;if(v&&(m=m.getValue()),c.immediate)p.setValue(m),p.done=!0;else if("string"!=typeof g&&"string"!=typeof m){if(void 0!==c.duration)b=g+c.easing((t-p.startTime)/c.duration)*(m-g),d=t>=p.startTime+c.duration;else if(c.decay)b=g+y/(1-.998)*(1-Math.exp(-(1-.998)*(t-p.startTime))),(d=Math.abs(p.lastPosition-b)<.1)&&(m=b);else{f=void 0!==p.lastTime?p.lastTime:t,y=void 0!==p.lastVelocity?p.lastVelocity:c.initialVelocity,t>f+64&&(f=t);for(var O=Math.floor(t-f),j=0;j<O;++j){b+=1*(y+=1*((-c.tension*(b-m)+-c.friction*y)/c.mass)/1e3)/1e3}var w=!(!c.clamp||0===c.tension)&&(g<m?b>m:b<m),k=Math.abs(y)<=c.precision,S=0===c.tension||Math.abs(m-b)<=c.precision;d=w||k&&S,p.lastVelocity=y,p.lastTime=t}v&&!c.toValues[h].done&&(d=!1),d?(p.value!==m&&(b=m),p.done=!0):s=!0,p.setValue(b),p.lastPosition=b}else p.setValue(m),p.done=!0}}u.props.onFrame&&(u.values[c.name]=c.interpolation.getValue())}u.props.onFrame&&u.props.onFrame(u.values),s||(G.delete(u),u.stop(!0))}}catch(V){n=!0,a=V}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return G.size?T?T():R(e):M=!1,M};function W(e,t,r){if("function"==typeof e)return e;if(Array.isArray(e))return W({range:e,output:t,extrapolate:r});if(I&&"string"==typeof e.output[0])return I(e);var n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",u=n.extrapolateRight||n.extrapolate||"extend",s=n.easing||function(e){return e};return function(e){var t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,u,s){var l=s?s(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>r){if("identity"===u)return l;"clamp"===u&&(l=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t);l=i(l),n===-1/0?l=-l:a===1/0?l+=n:l=l*(a-n)+n;return l}(e,i[t],i[t+1],a[t],a[t+1],s,o,u,n.map)}}var U=function(e){function t(e,r,n,o){var u;return Object(s.a)(this,t),(u=Object(a.a)(this,Object(i.a)(t).call(this))).calc=void 0,u.payload=e instanceof S&&!(e instanceof t)?e.getPayload():Array.isArray(e)?e:[e],u.calc=W(r,n,o),u}return Object(u.a)(t,e),c(t,[{key:"getValue",value:function(){return this.calc.apply(this,Object(n.a)(this.payload.map((function(e){return e.getValue()}))))}},{key:"updateConfig",value:function(e,t,r){this.calc=W(e,t,r)}},{key:"interpolate",value:function(e,r,n){return new t(this,e,r,n)}}]),t}(S);var D=function(e){function t(e){var r,n;return Object(s.a)(this,t),r=Object(a.a)(this,Object(i.a)(t).call(this)),n=Object(o.a)(r),r.animatedStyles=new Set,r.value=void 0,r.startPosition=void 0,r.lastPosition=void 0,r.lastVelocity=void 0,r.startTime=void 0,r.lastTime=void 0,r.done=!1,r.setValue=function(e,t){void 0===t&&(t=!0),n.value=e,t&&n.flush()},r.value=e,r.startPosition=e,r.lastPosition=e,r}return Object(u.a)(t,e),c(t,[{key:"flush",value:function(){0===this.animatedStyles.size&&function e(t,r){"update"in t?r.add(t):t.getChildren().forEach((function(t){return e(t,r)}))}(this,this.animatedStyles),this.animatedStyles.forEach((function(e){return e.update()}))}},{key:"clearStyles",value:function(){this.animatedStyles.clear()}},{key:"getValue",value:function(){return this.value}},{key:"interpolate",value:function(e,t,r){return new U(this,e,t,r)}}]),t}(E),B=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(a.a)(this,Object(i.a)(t).call(this))).payload=e.map((function(e){return new D(e)})),r}return Object(u.a)(t,e),c(t,[{key:"setValue",value:function(e,t){var r=this;void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach((function(e,n){return r.payload[n].setValue(e,t)})):this.payload.forEach((function(r){return r.setValue(e,t)}))}},{key:"getValue",value:function(){return this.payload.map((function(e){return e.getValue()}))}},{key:"interpolate",value:function(e,t){return new U(this,e,t)}}]),t}(S),X=0,J=function(){function e(){var t=this;Object(s.a)(this,e),this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=function(){return t.interpolations},this.id=X++}return c(e,[{key:"update",value:function(e){if(!e)return this;var t=j(e),r=t.delay,n=void 0===r?0:r,a=t.to,i=Object(h.a)(t,["delay","to"]);if(m.arr(a)||m.fun(a))this.queue.push(Object(f.a)({},i,{delay:n,to:a}));else if(a){var o={};Object.entries(a).forEach((function(e){var t=e[0],r=e[1],a=Object(f.a)({to:Object(d.a)({},t,r),delay:O(n,t)},i),u=o[a.delay]&&o[a.delay].to;o[a.delay]=Object(f.a)({},o[a.delay],a,{to:Object(f.a)({},u,a.to)})})),this.queue=Object.values(o)}return this.queue=this.queue.sort((function(e,t){return e.delay-t.delay})),this.diff(i),this}},{key:"start",value:function(e){var t,r=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((function(e){var t=e.from,n=void 0===t?{}:t,a=e.to,i=void 0===a?{}:a;m.obj(n)&&(r.merged=Object(f.a)({},n,r.merged)),m.obj(i)&&(r.merged=Object(f.a)({},r.merged,i))}));var n=this.local=++this.guid,a=this.localQueue=this.queue;this.queue=[],a.forEach((function(t,i){var o=t.delay,u=Object(h.a)(t,["delay"]),s=function(t){i===a.length-1&&n===r.guid&&t&&(r.idle=!0,r.props.onRest&&r.props.onRest(r.merged)),e&&e()},l=m.arr(u.to)||m.fun(u.to);o?setTimeout((function(){n===r.guid&&(l?r.runAsync(u,s):r.diff(u).start(s))}),o):l?r.runAsync(u,s):r.diff(u).start(s)}))}else m.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,G.has(t)||G.add(t),M||(M=!0,R(T||H));return this}},{key:"stop",value:function(e){return this.listeners.forEach((function(t){return t(e)})),this.listeners=[],this}},{key:"pause",value:function(e){var t;return this.stop(!0),e&&(t=this,G.has(t)&&G.delete(t)),this}},{key:"runAsync",value:function(e,t){var r=this,n=this,a=(e.delay,Object(h.a)(e,["delay"])),i=this.local,o=Promise.resolve(void 0);if(m.arr(a.to))for(var u=function(e){var t=e,n=Object(f.a)({},a,j(a.to[t]));m.arr(n.config)&&(n.config=n.config[t]),o=o.then((function(){if(i===r.guid)return new Promise((function(e){return r.diff(n).start(e)}))}))},s=0;s<a.to.length;s++)u(s);else if(m.fun(a.to)){var l,c=0;o=o.then((function(){return a.to((function(e){var t=Object(f.a)({},a,j(e));if(m.arr(t.config)&&(t.config=t.config[c]),c++,i===r.guid)return l=new Promise((function(e){return r.diff(t).start(e)}))}),(function(e){return void 0===e&&(e=!0),n.stop(e)})).then((function(){return l}))}))}o.then(t)}},{key:"diff",value:function(e){var t=this;this.props=Object(f.a)({},this.props,e);var r=this.props,n=r.from,a=void 0===n?{}:n,i=r.to,o=void 0===i?{}:i,u=r.config,s=void 0===u?{}:u,l=r.reverse,c=r.attach,h=r.reset,p=r.immediate;if(l){var g=[o,a];a=g[0],o=g[1]}this.merged=Object(f.a)({},a,this.merged,o),this.hasChanged=!1;var b=c&&c(this);if(this.animations=Object.entries(this.merged).reduce((function(e,r){var n=r[0],i=r[1],o=e[n]||{},u=m.num(i),l=m.str(i)&&!i.startsWith("#")&&!/\d/.test(i)&&!k[i],c=m.arr(i),g=!u&&!c&&!l,j=m.und(a[n])?i:a[n],w=u||c||l?i:1,E=O(s,n);b&&(w=b.animations[n].parent);var S,V=o.parent,x=o.interpolation,P=y(b?w.getPayload():w),R=i;g&&(R=I({range:[0,1],output:[i,i]})(1));var C=x&&x.getValue(),q=!m.und(V)&&o.animatedValues.some((function(e){return!e.done})),A=!m.equ(R,C),T=!m.equ(R,o.previous),F=!m.equ(E,o.config);if(h||T&&A||F){if(u||l)V=x=o.parent||new D(j);else if(c)V=x=o.parent||new B(j);else if(g){var N=o.interpolation&&o.interpolation.calc(o.parent.value);N=void 0===N||h?j:N,o.parent?(V=o.parent).setValue(0,!1):V=new D(0);var z={output:[N,i]};o.interpolation?(x=o.interpolation,o.interpolation.updateConfig(z)):x=V.interpolate(z)}return P=y(b?w.getPayload():w),S=y(V.getPayload()),h&&!g&&V.setValue(j,!1),t.hasChanged=!0,S.forEach((function(e){e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=q?e.lastVelocity:void 0,e.lastTime=q?e.lastTime:void 0,e.startTime=L(),e.done=!1,e.animatedStyles.clear()})),O(p,n)&&V.setValue(g?w:i,!1),Object(f.a)({},e,Object(d.a)({},n,Object(f.a)({},o,{name:n,parent:V,interpolation:x,animatedValues:S,toValues:P,previous:R,config:E,fromValues:y(V.getValue()),immediate:O(p,n),initialVelocity:v(E.velocity,0),clamp:v(E.clamp,!1),precision:v(E.precision,.01),tension:v(E.tension,170),friction:v(E.friction,26),mass:v(E.mass,1),duration:E.duration,easing:v(E.easing,(function(e){return e})),decay:E.decay})))}return A?e:(g&&(V.setValue(1,!1),x.updateConfig({output:[R,R]})),V.done=!0,t.hasChanged=!0,Object(f.a)({},e,Object(d.a)({},n,Object(f.a)({},e[n],{previous:R}))))}),this.animations),this.hasChanged)for(var j in this.configs=Object.values(this.animations),this.values={},this.interpolations={},this.animations)this.interpolations[j]=this.animations[j].interpolation,this.values[j]=this.animations[j].interpolation.getValue();return this}},{key:"destroy",value:function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}]),e}(),K=function(e,t){var r=Object(p.useRef)(!1),n=Object(p.useRef)(),a=m.fun(t),i=Object(p.useMemo)((function(){var r;return n.current&&(n.current.map((function(e){return e.destroy()})),n.current=void 0),[new Array(e).fill().map((function(e,n){var i=new J,o=a?O(t,n,i):t[n];return 0===n&&(r=o.ref),i.update(o),r||i.start(),i})),r]}),[e]),o=i[0],u=i[1];n.current=o;Object(p.useImperativeHandle)(u,(function(){return{start:function(){return Promise.all(n.current.map((function(e){return new Promise((function(t){return e.start(t)}))})))},stop:function(e){return n.current.forEach((function(t){return t.stop(e)}))},get controllers(){return n.current}}}));var s=Object(p.useMemo)((function(){return function(e){return n.current.map((function(t,r){t.update(a?O(e,r,t):e[r]),u||t.start()}))}}),[e]);Object(p.useEffect)((function(){r.current?a||s(t):u||n.current.forEach((function(e){return e.start()}))})),Object(p.useEffect)((function(){return r.current=!0,function(){return n.current.forEach((function(e){return e.destroy()}))}}),[]);var l=n.current.map((function(e){return e.getValues()}));return a?[l,s,function(e){return n.current.forEach((function(t){return t.pause(e)}))}]:l},Q=function(e){var t=m.fun(e),r=K(1,t?e:[e]),n=r[0],a=r[1],i=r[2];return t?[n[0],a,i]:n};var Y=function(e){function t(e){var r;return Object(s.a)(this,t),void 0===e&&(e={}),r=Object(a.a)(this,Object(i.a)(t).call(this)),!e.transform||e.transform instanceof E||(e=w.transform(e)),r.payload=e,r}return Object(u.a)(t,e),t}(V),_={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Z="[-+]?\\d*\\.?\\d+",$=Z+"%";function ee(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var te=new RegExp("rgb"+ee(Z,Z,Z)),re=new RegExp("rgba"+ee(Z,Z,Z,Z)),ne=new RegExp("hsl"+ee(Z,$,$)),ae=new RegExp("hsla"+ee(Z,$,$,Z)),ie=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oe=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ue=/^#([0-9a-fA-F]{6})$/,se=/^#([0-9a-fA-F]{8})$/;function le(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ce(e,t,r){var n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=le(a,n,e+1/3),o=le(a,n,e),u=le(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*u)<<8}function de(e){var t=parseInt(e,10);return t<0?0:t>255?255:t}function fe(e){return(parseFloat(e)%360+360)%360/360}function he(e){var t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function pe(e){var t=parseFloat(e);return t<0?0:t>100?1:t/100}function ge(e){var t,r,n="number"==typeof(t=e)?t>>>0===t&&t>=0&&t<=4294967295?t:null:(r=ue.exec(t))?parseInt(r[1]+"ff",16)>>>0:_.hasOwnProperty(t)?_[t]:(r=te.exec(t))?(de(r[1])<<24|de(r[2])<<16|de(r[3])<<8|255)>>>0:(r=re.exec(t))?(de(r[1])<<24|de(r[2])<<16|de(r[3])<<8|he(r[4]))>>>0:(r=ie.exec(t))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=se.exec(t))?parseInt(r[1],16)>>>0:(r=oe.exec(t))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=ne.exec(t))?(255|ce(fe(r[1]),pe(r[2]),pe(r[3])))>>>0:(r=ae.exec(t))?(ce(fe(r[1]),pe(r[2]),pe(r[3]))|he(r[4]))>>>0:null;if(null===n)return e;var a=(16711680&(n=n||0))>>>16,i=(65280&n)>>>8,o=(255&n)/255;return"rgba(".concat((4278190080&n)>>>24,", ").concat(a,", ").concat(i,", ").concat(o,")")}var me=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,be=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ve=new RegExp("(".concat(Object.keys(_).join("|"),")"),"g"),ye={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","Ms","Moz","O"];function je(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||ye.hasOwnProperty(e)&&ye[e]?(""+t).trim():t+"px"}ye=Object.keys(ye).reduce((function(e,t){return Oe.forEach((function(r){return e[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(r,t)]=e[t]})),e}),ye);var we={};N((function(e){return new Y(e)})),q("div"),C((function(e){var t=e.output.map((function(e){return e.replace(be,ge)})).map((function(e){return e.replace(ve,ge)})),r=t[0].match(me).map((function(){return[]}));t.forEach((function(e){e.match(me).forEach((function(e,t){return r[t].push(+e)}))}));var n=t[0].match(me).map((function(t,n){return W(Object(f.a)({},e,{output:r[n]}))}));return function(e){var r=0;return t[0].replace(me,(function(){return n[r++](e)})).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(function(e,t,r,n,a){return"rgba(".concat(Math.round(t),", ").concat(Math.round(r),", ").concat(Math.round(n),", ").concat(a,")")}))}})),P(_),x((function(e,t){if(!e.nodeType||void 0===e.setAttribute)return!1;var r=t.style,n=t.children,a=t.scrollTop,i=t.scrollLeft,o=Object(h.a)(t,["style","children","scrollTop","scrollLeft"]),u="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;for(var s in void 0!==a&&(e.scrollTop=a),void 0!==i&&(e.scrollLeft=i),void 0!==n&&(e.textContent=n),r)if(r.hasOwnProperty(s)){var l=0===s.indexOf("--"),c=je(s,r[s],l);"float"===s&&(s="cssFloat"),l?e.style.setProperty(s,c):e.style[s]=c}for(var d in o){var f=u?d:we[d]||(we[d]=d.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()})));void 0!==e.getAttribute(f)&&e.setAttribute(f,o[d])}}),(function(e){return e}));var ke,Ee,Se=(ke=function(e){return Object(p.forwardRef)((function(t,r){var n=b(),a=Object(p.useRef)(!0),i=Object(p.useRef)(null),o=Object(p.useRef)(null),u=Object(p.useCallback)((function(e){var t=i.current;i.current=new z(e,(function(){var e=!1;o.current&&(e=w.fn(o.current,i.current.getAnimatedValue())),o.current&&!1!==e||n()})),t&&t.detach()}),[]);Object(p.useEffect)((function(){return function(){a.current=!1,i.current&&i.current.detach()}}),[]),Object(p.useImperativeHandle)(r,(function(){return F(o,a,n)})),u(t);var s,l=i.current.getValue(),c=(l.scrollTop,l.scrollLeft,Object(h.a)(l,["scrollTop","scrollLeft"])),d=(s=e,!m.fun(s)||s.prototype instanceof g.a.Component?function(e){return o.current=function(e,t){return t&&(m.fun(t)?t(e):m.obj(t)&&(t.current=e)),e}(e,r)}:void 0);return g.a.createElement(e,Object(f.a)({},c,{ref:d}))}))},void 0===(Ee=!1)&&(Ee=!0),function(e){return(m.arr(e)?e:Object.keys(e)).reduce((function(e,t){var r=Ee?t[0].toLowerCase()+t.substring(1):t;return e[r]=ke(r),e}),ke)})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);
//# sourceMappingURL=component---src-custom-pages-blog-tsx-11abc4abb1c0beffca9d.js.map