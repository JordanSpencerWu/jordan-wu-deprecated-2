(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),c=a(r("pVnL")),d=a(r("q1tI")),l=a(r("17x9")),u=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=u(e),r=h(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function k(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var _=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+s+r+a+t+n+i+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,n=e.ariaHidden,o=d.default.createElement(x,(0,c.default)({src:t},i,{ariaHidden:n}));return r.length>1?d.default.createElement("picture",null,a(r),o):o},x=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,c.default)({"aria-hidden":h,sizes:r,srcSet:a,src:i},p,{onLoad:o,onError:l,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=h(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,h=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,I=e.draggable,_=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,c.default)({opacity:_?1:0,transition:j?"opacity "+y+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},j&&R,{},s,{},f),C={title:t,alt:this.state.isVisible?"":r,style:V,className:h,itemProp:S};if(g){var P=g,M=p(g);return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),M.base64&&d.default.createElement(L,{ariaHidden:!0,src:M.base64,spreadProps:C,imageVariants:P,generateSources:O}),M.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,src:M.tracedSVG,spreadProps:C,imageVariants:P,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,k(P),d.default.createElement(x,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,c.default)({alt:r,title:t,loading:E},M,{imageVariants:P}))}}))}if(m){var D=m,q=p(m),F=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},j&&R)}),q.base64&&d.default.createElement(L,{ariaHidden:!0,src:q.base64,spreadProps:C,imageVariants:D,generateSources:O}),q.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,src:q.tracedSVG,spreadProps:C,imageVariants:D,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,k(D),d.default.createElement(x,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,c.default)({alt:r,title:t,loading:E},q,{imageVariants:D}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),T=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});j.propTypes={resolutions:N,sizes:T,fixed:l.default.oneOfType([N,l.default.arrayOf(N)]),fluid:l.default.oneOfType([T,l.default.arrayOf(T)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var R=j;t.default=R},KvMI:function(e,t,r){"use strict";r.r(t);r("f3/d");var a=r("q1tI"),i=r.n(a),n=(r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("OG14"),r("9eSz")),o=r.n(n),s=r("Wbzz"),c=(r("V+eJ"),r("hHhE"),r("a1Th"),r("h7Nl"),r("HAE/"),r("bWfx"),r("KKXr"),r("0l/t"),r("Vd3H"),r("Tze0"),function(){function e(){}return e.prototype.expandToken=function(e){for(var t=[],r="",a=0,i=e.length;a<i;++a)r+=e.charAt(a),t.push(r);return t},e}()),d=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function l(e,t){t=t||[];for(var r=e=e||{},a=0;a<t.length;a++)if(null==(r=r[t[a]]))return null;return r}var u=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var t=e.prototype;return t.indexDocument=function(e,t,r){this._tokenToIdfCache={};var a,i=this._tokenMap;"object"!=typeof i[e]?i[e]=a={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(a=i[e]).$totalNumOccurrences++;var n=a.$uidMap;"object"!=typeof n[t]?(a.$numDocumentOccurrences++,n[t]={$document:r,$numTokenOccurrences:1}):n[t].$numTokenOccurrences++},t.search=function(e,t){for(var r={},a=0,i=e.length;a<i;a++){var n=e[a],o=this._tokenMap[n];if(!o)return[];if(0===a)for(var s=0,c=(d=Object.keys(o.$uidMap)).length;s<c;s++){r[l=d[s]]=o.$uidMap[l].$document}else{var d;for(s=0,c=(d=Object.keys(r)).length;s<c;s++){var l=d[s];"object"!=typeof o.$uidMap[l]&&delete r[l]}}}var u=[];for(var l in r)u.push(r[l]);var f=this._createCalculateTfIdf();return u.sort((function(r,a){return f(e,a,t)-f(e,r,t)}))},t._createCalculateIdf=function(){var e=this._tokenMap,t=this._tokenToIdfCache;return function(r,a){if(!t[r]){var i=void 0!==e[r]?e[r].$numDocumentOccurrences:0;t[r]=1+Math.log(a.length/(1+i))}return t[r]}},t._createCalculateTfIdf=function(){var e=this._tokenMap,t=this._uidFieldName,r=this._createCalculateIdf();return function(a,i,n){for(var o=0,s=0,c=a.length;s<c;++s){var d,u=a[s],f=r(u,n);f===1/0&&(f=0),d=t instanceof Array?i&&l(i,t):i&&i[t],o+=(void 0!==e[u]&&void 0!==e[u].$uidMap[d]?e[u].$uidMap[d].$numTokenOccurrences:0)*f}return o}},e}(),f=/[^a-zа-яё0-9\-']+/i,h=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(f).filter((function(e){return e}))},e}();function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var g=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new c,this._searchIndex=new u(e),this._sanitizer=new d,this._tokenizer=new h,this._documents=[],this._searchableFields=[]}var t,r,a,i=e.prototype;return i.addDocument=function(e){this.addDocuments([e])},i.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},i.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},i.search=function(e){var t=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(t,this._documents)},i.indexDocuments_=function(e,t){this._initialized=!0;for(var r=this._indexStrategy,a=this._sanitizer,i=this._searchIndex,n=this._tokenizer,o=this._uidFieldName,s=0,c=e.length;s<c;s++){var d,u=e[s];d=o instanceof Array?l(u,o):u[o];for(var f=0,h=t.length;f<h;f++){var p,g=t[f];if(null!=(p=g instanceof Array?l(u,g):u[g])&&"string"!=typeof p&&p.toString&&(p=p.toString()),"string"==typeof p)for(var m=n.tokenize(a.sanitize(p)),b=0,y=m.length;b<y;b++)for(var v=m[b],S=r.expandToken(v),k=0,E=S.length;k<E;k++){var w=S[k];i.indexDocument(w,d,u)}}}},t=e,(r=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&p(t.prototype,r),a&&p(t,a),e}(),m=r("wEEd"),b=r("ydnR");r("qi5D");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=Object(a.memo)((function(e){var t=Object(a.useState)(b.a),r=t[0],n=t[1],c=Object(m.b)({opacity:1,from:{opacity:0}}),d=e.books,l=new g("slug");l.addIndex("title"),l.addIndex(["authorName"]),d.forEach((function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{authorName:e.author.join(b.b)});l.addDocument(t)}));var u=l.search(r),f=(r===b.a?d:u).map((function(e){var t=e.author,r=e.description,a=e.fluid,n=e.slug,d=e.title,l=t.join(", ");return i.a.createElement(m.a.div,{key:n,style:c,className:"book-content-book-container"},i.a.createElement(s.Link,{to:n,className:"book-content-book-image-link"},i.a.createElement(o.a,{className:"book-content-image",fluid:a})),i.a.createElement("div",{className:"book-content-info-container"},i.a.createElement(s.Link,{to:n},i.a.createElement("h4",{className:"book-content-title"},d)),i.a.createElement("small",null,"By ",l),i.a.createElement("p",{className:"book-content-description"},r),i.a.createElement(s.Link,{className:"book-content-link",to:n},"...")))}));return i.a.createElement("section",{className:"book-content-container"},i.a.createElement("div",{className:"book-content-search-container"},i.a.createElement("label",null,"Search Books by Title or Author"),i.a.createElement("input",{type:"text",value:r,onChange:function(e){return t=e.target.value,void n(t);var t},onKeyPress:function(e){var t;"Enter"===(t=e).key&&t.target.blur()}})),f.length>0?f:i.a.createElement("div",null,i.a.createElement("p",null,"Sorry could not find the book with title or author of "+r+".")))})),k=r("Ac47"),E=r("PIHY");r.d(t,"BookListQuery",(function(){return w}));t.default=function(e){var t=e.data,r=t.imageFiles.edges,a=t.bookFiles.edges,n=r.reduce((function(e,t){var r=t.node,a=r.childImageSharp.fluid;return e[r.name]=a,e}),{}),o=a.map((function(e){var t=e.node,r=t.childMarkdownRemark,a=r.fields.slug,i=r.frontmatter,o=i.author,s=i.title,c=i.description,d=t.name;return{author:o,description:c,slug:a,title:s,fluid:n[d]}}));return i.a.createElement(k.a,null,i.a.createElement(E.a,{title:"My Book List",description:"This is my book list."}),i.a.createElement(S,{books:o}))};var w="4021744006"},OGtf:function(e,t,r){var a=r("XKFU"),i=r("eeVq"),n=r("vhPU"),o=/"/g,s=function(e,t,r,a){var i=String(n(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);
//# sourceMappingURL=component---src-custom-pages-book-list-tsx-b822a4e2ee8ddf57bf5a.js.map