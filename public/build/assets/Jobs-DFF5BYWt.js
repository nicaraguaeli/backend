import{r as le,j as i,H as cn}from"./app-DiuiBw7V.js";import{c as zt,m as St,a as dn,M as fn,d as mn,n as pn,o as un,w as hn}from"./MainLayout-DpH6wnKW.js";import{B as Ve}from"./briefcase-CsIj0CeC.js";/* empty css            */import"./index-BsxvijQw.js";/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Nt=zt("building",gn);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],bn=zt("funnel",_n);/*! @license DOMPurify 3.4.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.4/LICENSE */function wt(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,l=Array(o);a<o;a++)l[a]=t[a];return l}function Tn(t){if(Array.isArray(t))return t}function En(t,o){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var l,d,m,O,M=[],P=!0,j=!1;try{if(m=(a=a.call(t)).next,o!==0)for(;!(P=(l=m.call(a)).done)&&(M.push(l.value),M.length!==o);P=!0);}catch(p){j=!0,d=p}finally{try{if(!P&&a.return!=null&&(O=a.return(),Object(O)!==O))return}finally{if(j)throw d}}return M}}function yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xn(t,o){return Tn(t)||En(t,o)||An(t,o)||yn()}function An(t,o){if(t){if(typeof t=="string")return wt(t,o);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?wt(t,o):void 0}}const Ut=Object.entries,Rt=Object.setPrototypeOf,Sn=Object.isFrozen,Nn=Object.getPrototypeOf,wn=Object.getOwnPropertyDescriptor;let R=Object.freeze,L=Object.seal,te=Object.create,Ht=typeof Reflect<"u"&&Reflect,Xe=Ht.apply,qe=Ht.construct;R||(R=function(o){return o});L||(L=function(o){return o});Xe||(Xe=function(o,a){for(var l=arguments.length,d=new Array(l>2?l-2:0),m=2;m<l;m++)d[m-2]=arguments[m];return o.apply(a,d)});qe||(qe=function(o){for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];return new o(...l)});const Z=b(Array.prototype.forEach),Rn=b(Array.prototype.lastIndexOf),Ot=b(Array.prototype.pop),J=b(Array.prototype.push),On=b(Array.prototype.splice),w=Array.isArray,de=b(String.prototype.toLowerCase),Be=b(String.prototype.toString),jt=b(String.prototype.match),Q=b(String.prototype.replace),Dt=b(String.prototype.indexOf),jn=b(String.prototype.trim),Dn=b(Number.prototype.toString),In=b(Boolean.prototype.toString),It=typeof BigInt>"u"?null:b(BigInt.prototype.toString),Lt=typeof Symbol>"u"?null:b(Symbol.prototype.toString),u=b(Object.prototype.hasOwnProperty),ce=b(Object.prototype.toString),A=b(RegExp.prototype.test),Se=Ln(TypeError);function b(t){return function(o){o instanceof RegExp&&(o.lastIndex=0);for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];return Xe(t,o,l)}}function Ln(t){return function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return qe(t,a)}}function c(t,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:de;if(Rt&&Rt(t,null),!w(o))return t;let l=o.length;for(;l--;){let d=o[l];if(typeof d=="string"){const m=a(d);m!==d&&(Sn(o)||(o[l]=m),d=m)}t[d]=!0}return t}function Cn(t){for(let o=0;o<t.length;o++)u(t,o)||(t[o]=null);return t}function I(t){const o=te(null);for(const l of Ut(t)){var a=xn(l,2);const d=a[0],m=a[1];u(t,d)&&(w(m)?o[d]=Cn(m):m&&typeof m=="object"&&m.constructor===Object?o[d]=I(m):o[d]=m)}return o}function Mn(t){switch(typeof t){case"string":return t;case"number":return Dn(t);case"boolean":return In(t);case"bigint":return It?It(t):"0";case"symbol":return Lt?Lt(t):"Symbol()";case"undefined":return ce(t);case"function":case"object":{if(t===null)return ce(t);const o=t,a=$(o,"toString");if(typeof a=="function"){const l=a(o);return typeof l=="string"?l:ce(l)}return ce(t)}default:return ce(t)}}function $(t,o){for(;t!==null;){const l=wn(t,o);if(l){if(l.get)return b(l.get);if(typeof l.value=="function")return b(l.value)}t=Nn(t)}function a(){return null}return a}function vn(t){try{return A(t,""),!0}catch{return!1}}const Ct=R(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","selectedcontent","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ge=R(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),We=R(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),kn=R(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ye=R(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Pn=R(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mt=R(["#text"]),vt=R(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),$e=R(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),kt=R(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ne=R(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fn=L(/{{[\w\W]*|^[\w\W]*}}/g),zn=L(/<%[\w\W]*|^[\w\W]*%>/g),Un=L(/\${[\w\W]*/g),Hn=L(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bn=L(/^aria-[\-\w]+$/),Pt=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Gn=L(/^(?:\w+script|data):/i),Wn=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Yn=L(/^html$/i),$n=L(/^[a-z][.\w]*(-[.\w]+)+$/i),ee={element:1,text:3,progressingInstruction:7,comment:8,document:9},Vn=function(){return typeof window>"u"?null:window},Xn=function(o,a){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let l=null;const d="data-tt-policy-suffix";a&&a.hasAttribute(d)&&(l=a.getAttribute(d));const m="dompurify"+(l?"#"+l:"");try{return o.createPolicy(m,{createHTML(O){return O},createScriptURL(O){return O}})}catch{return console.warn("TrustedTypes policy "+m+" could not be created."),null}},Ft=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Bt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vn();const o=s=>Bt(s);if(o.version="3.4.4",o.removed=[],!t||!t.document||t.document.nodeType!==ee.document||!t.Element)return o.isSupported=!1,o;let a=t.document;const l=a,d=l.currentScript,m=t.DocumentFragment,O=t.HTMLTemplateElement,M=t.Node,P=t.Element,j=t.NodeFilter,p=t.NamedNodeMap,G=p===void 0?t.NamedNodeMap||t.MozNamedAttrMap:p,we=t.HTMLFormElement,Gt=t.DOMParser,fe=t.trustedTypes,ne=P.prototype,Wt=$(ne,"cloneNode"),Yt=$(ne,"remove"),$t=$(ne,"nextSibling"),Vt=$(ne,"childNodes"),me=$(ne,"parentNode"),Ze=M&&M.prototype?$(M.prototype,"nodeType"):null;if(typeof O=="function"){const s=a.createElement("template");s.content&&s.content.ownerDocument&&(a=s.content.ownerDocument)}let S,oe="";const pe=a,Re=pe.implementation,Je=pe.createNodeIterator,Xt=pe.createDocumentFragment,qt=pe.getElementsByTagName,Kt=l.importNode;let N=Ft();o.isSupported=typeof Ut=="function"&&typeof me=="function"&&Re&&Re.createHTMLDocument!==void 0;const ue=Fn,he=zn,ge=Un,Zt=Hn,Jt=Bn,Qt=Gn,Qe=Wn,en=$n;let et=Pt,E=null;const tt=c({},[...Ct,...Ge,...We,...Ye,...Mt]);let x=null;const nt=c({},[...vt,...$e,...kt,...Ne]);let h=Object.seal(te(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),re=null,_e=null;const U=Object.seal(te(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ot=!0,Oe=!0,rt=!1,it=!0,H=!1,ie=!0,W=!1,je=!1,De=!1,V=!1,be=!1,Te=!1,at=!0,st=!1;const lt="user-content-";let Ie=!0,ae=!1,X={},v=null;const Le=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ct=null;const dt=c({},["audio","video","img","source","image","track"]);let Ce=null;const ft=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ee="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",k="http://www.w3.org/1999/xhtml";let q=k,Me=!1,ve=null;const tn=c({},[Ee,ye,k],Be);let ke=c({},["mi","mo","mn","ms","mtext"]),Pe=c({},["annotation-xml"]);const nn=c({},["title","style","font","a","script"]);let se=null;const on=["application/xhtml+xml","text/html"],rn="text/html";let T=null,K=null;const an=a.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(K&&K===e)return;(!e||typeof e!="object")&&(e={}),e=I(e),se=on.indexOf(e.PARSER_MEDIA_TYPE)===-1?rn:e.PARSER_MEDIA_TYPE,T=se==="application/xhtml+xml"?Be:de,E=u(e,"ALLOWED_TAGS")&&w(e.ALLOWED_TAGS)?c({},e.ALLOWED_TAGS,T):tt,x=u(e,"ALLOWED_ATTR")&&w(e.ALLOWED_ATTR)?c({},e.ALLOWED_ATTR,T):nt,ve=u(e,"ALLOWED_NAMESPACES")&&w(e.ALLOWED_NAMESPACES)?c({},e.ALLOWED_NAMESPACES,Be):tn,Ce=u(e,"ADD_URI_SAFE_ATTR")&&w(e.ADD_URI_SAFE_ATTR)?c(I(ft),e.ADD_URI_SAFE_ATTR,T):ft,ct=u(e,"ADD_DATA_URI_TAGS")&&w(e.ADD_DATA_URI_TAGS)?c(I(dt),e.ADD_DATA_URI_TAGS,T):dt,v=u(e,"FORBID_CONTENTS")&&w(e.FORBID_CONTENTS)?c({},e.FORBID_CONTENTS,T):Le,re=u(e,"FORBID_TAGS")&&w(e.FORBID_TAGS)?c({},e.FORBID_TAGS,T):I({}),_e=u(e,"FORBID_ATTR")&&w(e.FORBID_ATTR)?c({},e.FORBID_ATTR,T):I({}),X=u(e,"USE_PROFILES")?e.USE_PROFILES&&typeof e.USE_PROFILES=="object"?I(e.USE_PROFILES):e.USE_PROFILES:!1,ot=e.ALLOW_ARIA_ATTR!==!1,Oe=e.ALLOW_DATA_ATTR!==!1,rt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,it=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,H=e.SAFE_FOR_TEMPLATES||!1,ie=e.SAFE_FOR_XML!==!1,W=e.WHOLE_DOCUMENT||!1,V=e.RETURN_DOM||!1,be=e.RETURN_DOM_FRAGMENT||!1,Te=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,at=e.SANITIZE_DOM!==!1,st=e.SANITIZE_NAMED_PROPS||!1,Ie=e.KEEP_CONTENT!==!1,ae=e.IN_PLACE||!1,et=vn(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Pt,q=typeof e.NAMESPACE=="string"?e.NAMESPACE:k,ke=u(e,"MATHML_TEXT_INTEGRATION_POINTS")&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS=="object"?I(e.MATHML_TEXT_INTEGRATION_POINTS):c({},["mi","mo","mn","ms","mtext"]),Pe=u(e,"HTML_INTEGRATION_POINTS")&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS=="object"?I(e.HTML_INTEGRATION_POINTS):c({},["annotation-xml"]);const n=u(e,"CUSTOM_ELEMENT_HANDLING")&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING=="object"?I(e.CUSTOM_ELEMENT_HANDLING):te(null);if(h=te(null),u(n,"tagNameCheck")&&mt(n.tagNameCheck)&&(h.tagNameCheck=n.tagNameCheck),u(n,"attributeNameCheck")&&mt(n.attributeNameCheck)&&(h.attributeNameCheck=n.attributeNameCheck),u(n,"allowCustomizedBuiltInElements")&&typeof n.allowCustomizedBuiltInElements=="boolean"&&(h.allowCustomizedBuiltInElements=n.allowCustomizedBuiltInElements),H&&(Oe=!1),be&&(V=!0),X&&(E=c({},Mt),x=te(null),X.html===!0&&(c(E,Ct),c(x,vt)),X.svg===!0&&(c(E,Ge),c(x,$e),c(x,Ne)),X.svgFilters===!0&&(c(E,We),c(x,$e),c(x,Ne)),X.mathMl===!0&&(c(E,Ye),c(x,kt),c(x,Ne))),U.tagCheck=null,U.attributeCheck=null,u(e,"ADD_TAGS")&&(typeof e.ADD_TAGS=="function"?U.tagCheck=e.ADD_TAGS:w(e.ADD_TAGS)&&(E===tt&&(E=I(E)),c(E,e.ADD_TAGS,T))),u(e,"ADD_ATTR")&&(typeof e.ADD_ATTR=="function"?U.attributeCheck=e.ADD_ATTR:w(e.ADD_ATTR)&&(x===nt&&(x=I(x)),c(x,e.ADD_ATTR,T))),u(e,"ADD_URI_SAFE_ATTR")&&w(e.ADD_URI_SAFE_ATTR)&&c(Ce,e.ADD_URI_SAFE_ATTR,T),u(e,"FORBID_CONTENTS")&&w(e.FORBID_CONTENTS)&&(v===Le&&(v=I(v)),c(v,e.FORBID_CONTENTS,T)),u(e,"ADD_FORBID_CONTENTS")&&w(e.ADD_FORBID_CONTENTS)&&(v===Le&&(v=I(v)),c(v,e.ADD_FORBID_CONTENTS,T)),Ie&&(E["#text"]=!0),W&&c(E,["html","head","body"]),E.table&&(c(E,["tbody"]),delete re.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw Se('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Se('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=e.TRUSTED_TYPES_POLICY,oe=S.createHTML("")}else S===void 0&&(S=Xn(fe,d)),S!==null&&typeof oe=="string"&&(oe=S.createHTML(""));R&&R(e),K=e},pt=c({},[...Ge,...We,...kn]),ut=c({},[...Ye,...Pn]),sn=function(e){let n=me(e);(!n||!n.tagName)&&(n={namespaceURI:q,tagName:"template"});const r=de(e.tagName),f=de(n.tagName);return ve[e.namespaceURI]?e.namespaceURI===ye?n.namespaceURI===k?r==="svg":n.namespaceURI===Ee?r==="svg"&&(f==="annotation-xml"||ke[f]):!!pt[r]:e.namespaceURI===Ee?n.namespaceURI===k?r==="math":n.namespaceURI===ye?r==="math"&&Pe[f]:!!ut[r]:e.namespaceURI===k?n.namespaceURI===ye&&!Pe[f]||n.namespaceURI===Ee&&!ke[f]?!1:!ut[r]&&(nn[r]||!pt[r]):!!(se==="application/xhtml+xml"&&ve[e.namespaceURI]):!1},C=function(e){J(o.removed,{element:e});try{me(e).removeChild(e)}catch{Yt(e)}},Y=function(e,n){try{J(o.removed,{attribute:n.getAttributeNode(e),from:n})}catch{J(o.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e==="is")if(V||be)try{C(n)}catch{}else try{n.setAttribute(e,"")}catch{}},ht=function(e){let n=null,r=null;if(De)e="<remove></remove>"+e;else{const _=jt(e,/^[\r\n\t ]+/);r=_&&_[0]}se==="application/xhtml+xml"&&q===k&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const f=S?S.createHTML(e):e;if(q===k)try{n=new Gt().parseFromString(f,se)}catch{}if(!n||!n.documentElement){n=Re.createDocument(q,"template",null);try{n.documentElement.innerHTML=Me?oe:f}catch{}}const g=n.body||n.documentElement;return e&&r&&g.insertBefore(a.createTextNode(r),g.childNodes[0]||null),q===k?qt.call(n,W?"html":"body")[0]:W?n.documentElement:g},gt=function(e){return Je.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT|j.SHOW_PROCESSING_INSTRUCTION|j.SHOW_CDATA_SECTION,null)},_t=function(e){e.normalize();const n=Je.call(e.ownerDocument||e,e,j.SHOW_TEXT|j.SHOW_COMMENT|j.SHOW_CDATA_SECTION|j.SHOW_PROCESSING_INSTRUCTION,null);let r=n.nextNode();for(;r;){let f=r.data;Z([ue,he,ge],g=>{f=Q(f,g," ")}),r.data=f,r=n.nextNode()}},ze=function(e){return e instanceof we&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof G)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},xe=function(e){if(!Ze||typeof e!="object"||e===null)return!1;try{return typeof Ze(e)=="number"}catch{return!1}};function F(s,e,n){Z(s,r=>{r.call(o,e,n,K)})}const bt=function(e){let n=null;if(F(N.beforeSanitizeElements,e,null),ze(e))return C(e),!0;const r=T(e.nodeName);if(F(N.uponSanitizeElement,e,{tagName:r,allowedTags:E}),ie&&e.hasChildNodes()&&!xe(e.firstElementChild)&&A(/<[/\w!]/g,e.innerHTML)&&A(/<[/\w!]/g,e.textContent)||ie&&e.namespaceURI===k&&r==="style"&&xe(e.firstElementChild)||e.nodeType===ee.progressingInstruction||ie&&e.nodeType===ee.comment&&A(/<[/\w]/g,e.data))return C(e),!0;if(re[r]||!(U.tagCheck instanceof Function&&U.tagCheck(r))&&!E[r]){if(!re[r]&&Et(r)&&(h.tagNameCheck instanceof RegExp&&A(h.tagNameCheck,r)||h.tagNameCheck instanceof Function&&h.tagNameCheck(r)))return!1;if(Ie&&!v[r]){const f=me(e)||e.parentNode,g=Vt(e)||e.childNodes;if(g&&f){const _=g.length;for(let D=_-1;D>=0;--D){const B=Wt(g[D],!0);f.insertBefore(B,$t(e))}}}return C(e),!0}return e instanceof P&&!sn(e)||(r==="noscript"||r==="noembed"||r==="noframes")&&A(/<\/no(script|embed|frames)/i,e.innerHTML)?(C(e),!0):(H&&e.nodeType===ee.text&&(n=e.textContent,Z([ue,he,ge],f=>{n=Q(n,f," ")}),e.textContent!==n&&(J(o.removed,{element:e.cloneNode()}),e.textContent=n)),F(N.afterSanitizeElements,e,null),!1)},Tt=function(e,n,r){if(_e[n]||at&&(n==="id"||n==="name")&&(r in a||r in an))return!1;const f=x[n]||U.attributeCheck instanceof Function&&U.attributeCheck(n,e);if(!(Oe&&!_e[n]&&A(Zt,n))){if(!(ot&&A(Jt,n))){if(!f||_e[n]){if(!(Et(e)&&(h.tagNameCheck instanceof RegExp&&A(h.tagNameCheck,e)||h.tagNameCheck instanceof Function&&h.tagNameCheck(e))&&(h.attributeNameCheck instanceof RegExp&&A(h.attributeNameCheck,n)||h.attributeNameCheck instanceof Function&&h.attributeNameCheck(n,e))||n==="is"&&h.allowCustomizedBuiltInElements&&(h.tagNameCheck instanceof RegExp&&A(h.tagNameCheck,r)||h.tagNameCheck instanceof Function&&h.tagNameCheck(r))))return!1}else if(!Ce[n]){if(!A(et,Q(r,Qe,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&Dt(r,"data:")===0&&ct[e])){if(!(rt&&!A(Qt,Q(r,Qe,"")))){if(r)return!1}}}}}}return!0},ln=c({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Et=function(e){return!ln[de(e)]&&A(en,e)},yt=function(e){F(N.beforeSanitizeAttributes,e,null);const n=e.attributes;if(!n||ze(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:x,forceKeepAttr:void 0};let f=n.length;for(;f--;){const g=n[f],_=g.name,D=g.namespaceURI,B=g.value,z=T(_),He=B;let y=_==="value"?He:jn(He);if(r.attrName=z,r.attrValue=y,r.keepAttr=!0,r.forceKeepAttr=void 0,F(N.uponSanitizeAttribute,e,r),y=r.attrValue,st&&(z==="id"||z==="name")&&Dt(y,lt)!==0&&(Y(_,e),y=lt+y),ie&&A(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,y)){Y(_,e);continue}if(z==="attributename"&&jt(y,"href")){Y(_,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Y(_,e);continue}if(!it&&A(/\/>/i,y)){Y(_,e);continue}H&&Z([ue,he,ge],At=>{y=Q(y,At," ")});const xt=T(e.nodeName);if(!Tt(xt,z,y)){Y(_,e);continue}if(S&&typeof fe=="object"&&typeof fe.getAttributeType=="function"&&!D)switch(fe.getAttributeType(xt,z)){case"TrustedHTML":{y=S.createHTML(y);break}case"TrustedScriptURL":{y=S.createScriptURL(y);break}}if(y!==He)try{D?e.setAttributeNS(D,_,y):e.setAttribute(_,y),ze(e)?C(e):Ot(o.removed)}catch{Y(_,e)}}F(N.afterSanitizeAttributes,e,null)},Ue=function(e){let n=null;const r=gt(e);for(F(N.beforeSanitizeShadowDOM,e,null);n=r.nextNode();)F(N.uponSanitizeShadowNode,n,null),bt(n),yt(n),n.content instanceof m&&Ue(n.content);F(N.afterSanitizeShadowDOM,e,null)},Ae=function(e){if(e.nodeType===ee.element&&e.shadowRoot instanceof m){const f=e.shadowRoot;Ae(f),Ue(f)}const n=e.childNodes;if(!n)return;const r=[];Z(n,f=>{J(r,f)});for(const f of r)Ae(f)};return o.sanitize=function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=null,f=null,g=null;if(Me=!s,Me&&(s="<!-->"),typeof s!="string"&&!xe(s)&&(s=Mn(s),typeof s!="string"))throw Se("dirty is not a string, aborting");if(!o.isSupported)return s;if(je||Fe(e),o.removed=[],typeof s=="string"&&(ae=!1),ae){const B=s.nodeName;if(typeof B=="string"){const z=T(B);if(!E[z]||re[z])throw Se("root node is forbidden and cannot be sanitized in-place")}Ae(s)}else if(xe(s))n=ht("<!---->"),r=n.ownerDocument.importNode(s,!0),r.nodeType===ee.element&&r.nodeName==="BODY"||r.nodeName==="HTML"?n=r:n.appendChild(r),Ae(r);else{if(!V&&!H&&!W&&s.indexOf("<")===-1)return S&&Te?S.createHTML(s):s;if(n=ht(s),!n)return V?null:Te?oe:""}n&&De&&C(n.firstChild);const _=gt(ae?s:n);for(;f=_.nextNode();)bt(f),yt(f),f.content instanceof m&&Ue(f.content);if(ae)return H&&_t(s),s;if(V){if(H&&_t(n),be)for(g=Xt.call(n.ownerDocument);n.firstChild;)g.appendChild(n.firstChild);else g=n;return(x.shadowroot||x.shadowrootmode)&&(g=Kt.call(l,g,!0)),g}let D=W?n.outerHTML:n.innerHTML;return W&&E["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&A(Yn,n.ownerDocument.doctype.name)&&(D="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+D),H&&Z([ue,he,ge],B=>{D=Q(D,B," ")}),S&&Te?S.createHTML(D):D},o.setConfig=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fe(s),je=!0},o.clearConfig=function(){K=null,je=!1},o.isValidAttribute=function(s,e,n){K||Fe({});const r=T(s),f=T(e);return Tt(r,f,n)},o.addHook=function(s,e){typeof e=="function"&&J(N[s],e)},o.removeHook=function(s,e){if(e!==void 0){const n=Rn(N[s],e);return n===-1?void 0:On(N[s],n,1)[0]}return Ot(N[s])},o.removeHooks=function(s){N[s]=[]},o.removeAllHooks=function(){N=Ft()},o}var qn=Bt();const Kn={con_experiencia:"Con Experiencia",sin_experiencia:"Sin Experiencia",con_sin_experiencia:"Con y Sin Experiencia",disponibilidad_inmediata:"Disponibilidad Inmediata"};function Ke(t){return t?Kn[t]??t:"Tiempo Completo"}function Zn(t){return new Date(t).toLocaleDateString("es-NI",{day:"numeric",month:"long",year:"numeric"})}function Jn(t){const o=new Date;o.setHours(0,0,0,0);const a=new Date(t);return a.setHours(0,0,0,0),Math.ceil((a.getTime()-o.getTime())/(1e3*60*60*24))}function Qn({vacancy:t,isExpanded:o,onToggle:a}){const l=Jn(t.expires_at),d=l<=5,m=qn.sanitize(t.description??"");return i.jsx("article",{className:"jobs-card animate-fade-in","aria-label":`Vacante: ${t.title}`,children:i.jsxs("div",{className:"jobs-card__inner",children:[i.jsx("div",{className:"jobs-card__logo-col",children:t.file_path?i.jsx("img",{src:dn(`storage/${t.file_path}`),alt:`Logo de ${t.company||"empresa"}`,className:"jobs-card__logo"}):i.jsx("div",{className:"jobs-card__logo-placeholder","aria-hidden":"true",children:i.jsx(Nt,{size:28,strokeWidth:1.5})})}),i.jsxs("div",{className:"jobs-card__body",children:[i.jsxs("div",{className:"jobs-card__header",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"jobs-card__title",children:t.title}),i.jsxs("div",{className:"jobs-card__meta",children:[t.company&&i.jsxs("span",{className:"jobs-card__meta-item",children:[i.jsx(Nt,{size:14,"aria-hidden":"true"}),t.company]}),t.city&&i.jsxs("span",{className:"jobs-card__meta-item",children:[i.jsx(fn,{size:14,"aria-hidden":"true"}),t.city]}),i.jsxs("span",{className:"jobs-card__meta-item",children:[i.jsx(Ve,{size:14,"aria-hidden":"true"}),Ke(t.employment_type)]}),i.jsxs("span",{className:`jobs-card__meta-item ${d?"jobs-card__meta-item--urgent":""}`,children:[i.jsx(mn,{size:14,"aria-hidden":"true"}),"Expiración: ",Zn(t.expires_at),d&&i.jsxs("strong",{children:[" · ¡",l,"d!"]})]})]})]}),i.jsx("span",{className:"jobs-card__type-badge",children:Ke(t.employment_type)})]}),i.jsx("div",{className:`jobs-card__description ${o?"jobs-card__description--expanded":""}`,children:i.jsx("div",{dangerouslySetInnerHTML:{__html:m}})}),i.jsx("button",{type:"button",className:"jobs-card__toggle",onClick:a,"aria-expanded":o,"aria-controls":`vacancy-desc-${t.id}`,id:`vacancy-toggle-${t.id}`,children:o?i.jsxs(i.Fragment,{children:["Ver menos ",i.jsx(pn,{size:16,"aria-hidden":"true"})]}):i.jsxs(i.Fragment,{children:["Ver descripción completa ",i.jsx(un,{size:16,"aria-hidden":"true"})]})})]})]})})}const eo=({vacancies:t})=>{const[o,a]=le.useState(null),[l,d]=le.useState(""),[m,O]=le.useState(""),M=le.useMemo(()=>{const p=new Set(t.map(G=>G.employment_type).filter(Boolean));return Array.from(p)},[t]),P=le.useMemo(()=>t.filter(p=>{const G=l===""||p.title.toLowerCase().includes(l.toLowerCase())||(p.company??"").toLowerCase().includes(l.toLowerCase())||(p.city??"").toLowerCase().includes(l.toLowerCase()),we=m===""||p.employment_type===m;return G&&we}),[t,l,m]),j=p=>{a(G=>G===p?null:p)};return i.jsxs(i.Fragment,{children:[i.jsx(cn,{title:"Empleos | Radio ABC Stereo",children:i.jsx("meta",{name:"description",content:"Explora las oportunidades de empleo publicadas en Radio ABC Stereo. Encuentra vacantes en Nicaragua y postúlate hoy."})}),i.jsx("div",{className:"jobs-hero",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"jobs-hero__content",children:[i.jsx("div",{className:"jobs-hero__icon","aria-hidden":"true",children:i.jsx(Ve,{size:32,strokeWidth:1.5})}),i.jsx("h1",{className:"jobs-hero__title",children:"Oportunidades de Empleo"}),i.jsx("p",{className:"jobs-hero__subtitle",children:"Encuentra tu próximo trabajo entre los empleos activos publicados en ABC Stereo."}),i.jsxs("span",{className:"jobs-hero__count",children:[t.length," ",t.length===1?"empleo disponible":"empleos disponibles"]})]})})}),i.jsx("div",{className:"container py-5",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-lg-10",children:[t.length>0&&i.jsxs("div",{className:"jobs-filters mb-4",role:"search","aria-label":"Filtros de búsqueda de empleo",children:[i.jsxs("div",{className:"jobs-filters__search",children:[i.jsx(St,{size:18,className:"jobs-filters__search-icon","aria-hidden":"true"}),i.jsx("input",{id:"jobs-search-input",type:"search",className:"jobs-filters__input",placeholder:"Buscar por título…",value:l,onChange:p=>d(p.target.value),"aria-label":"Buscar vacantes"})]}),M.length>1&&i.jsxs("div",{className:"jobs-filters__select-wrapper",children:[i.jsx(bn,{size:16,className:"jobs-filters__filter-icon","aria-hidden":"true"}),i.jsxs("select",{id:"jobs-type-filter",className:"jobs-filters__select",value:m,onChange:p=>O(p.target.value),"aria-label":"Filtrar por tipo de empleo",children:[i.jsx("option",{value:"",children:"Todos los tipos"}),M.map(p=>i.jsx("option",{value:p,children:Ke(p)},p))]})]})]}),P.length>0?i.jsx("div",{className:"jobs-list",role:"list","aria-label":"Lista de vacantes",children:P.map(p=>i.jsx(Qn,{vacancy:p,isExpanded:o===p.id,onToggle:()=>j(p.id)},p.id))}):t.length===0?i.jsxs("div",{className:"jobs-empty",role:"status",children:[i.jsx("div",{className:"jobs-empty__icon","aria-hidden":"true",children:i.jsx(Ve,{size:52,strokeWidth:1})}),i.jsx("h2",{className:"jobs-empty__title",children:"No hay empleos disponibles"}),i.jsx("p",{className:"jobs-empty__text",children:"Por el momento no hay vacantes activas. Vuelve pronto para nuevas oportunidades."}),i.jsx("a",{href:"/",className:"btn btn-abc-blue rounded-pill px-4 py-2 mt-2",children:"Volver al inicio"})]}):i.jsxs("div",{className:"jobs-empty",role:"status",children:[i.jsx("div",{className:"jobs-empty__icon","aria-hidden":"true",children:i.jsx(St,{size:48,strokeWidth:1})}),i.jsx("h2",{className:"jobs-empty__title",children:"Sin resultados"}),i.jsxs("p",{className:"jobs-empty__text",children:['No encontramos vacantes que coincidan con "',l,'". Intenta con otros términos o quita el filtro.']}),i.jsx("button",{type:"button",className:"btn btn-abc-blue rounded-pill px-4 py-2 mt-2",onClick:()=>{d(""),O("")},children:"Limpiar búsqueda"})]})]})})}),i.jsx("style",{children:`
                /* ── Hero ── */
                .jobs-hero {
                    background: linear-gradient(135deg, var(--abc-blue) 0%, #001444 60%, #002a7a 100%);
                    padding: 3.5rem 0 3rem;
                    color: #fff;
                    position: relative;
                    overflow: hidden;
                }
                .jobs-hero::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E");
                }
                .jobs-hero__content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto;
                }
                .jobs-hero__icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    margin-bottom: 1.25rem;
                    backdrop-filter: blur(4px);
                }
                .jobs-hero__title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.75rem, 4vw, 2.75rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin-bottom: 0.75rem;
                    color: #fff;
                }
                .jobs-hero__subtitle {
                    font-family: var(--font-body);
                    color: rgba(255,255,255,0.78);
                    font-size: 1.05rem;
                    margin-bottom: 1.25rem;
                }
                .jobs-hero__count {
                    display: inline-block;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.25);
                    border-radius: 100px;
                    padding: 0.35rem 1.1rem;
                    font-size: 0.85rem;
                    font-family: var(--font-ui);
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    backdrop-filter: blur(4px);
                }

                /* ── Filtros ── */
                .jobs-filters {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .jobs-filters__search {
                    position: relative;
                    flex: 1;
                    min-width: 220px;
                }
                .jobs-filters__search-icon {
                    position: absolute;
                    left: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6c757d;
                    pointer-events: none;
                }
                .jobs-filters__input {
                    width: 100%;
                    padding: 0.65rem 1rem 0.65rem 2.6rem;
                    border: 1.5px solid #dee2e6;
                    border-radius: 10px;
                    font-family: var(--font-ui);
                    font-size: 0.9rem;
                    background: #fff;
                    color: #212529;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .jobs-filters__input:focus {
                    outline: none;
                    border-color: var(--abc-blue);
                    box-shadow: 0 0 0 3px rgba(0, 32, 96, 0.08);
                }
                .jobs-filters__select-wrapper {
                    position: relative;
                    min-width: 190px;
                }
                .jobs-filters__filter-icon {
                    position: absolute;
                    left: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6c757d;
                    pointer-events: none;
                }
                .jobs-filters__select {
                    width: 100%;
                    appearance: none;
                    padding: 0.65rem 2.5rem 0.65rem 2.4rem;
                    border: 1.5px solid #dee2e6;
                    border-radius: 10px;
                    font-family: var(--font-ui);
                    font-size: 0.9rem;
                    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236c757d' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") right 0.9rem center no-repeat;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .jobs-filters__select:focus {
                    outline: none;
                    border-color: var(--abc-blue);
                    box-shadow: 0 0 0 3px rgba(0, 32, 96, 0.08);
                }

                /* ── Lista ── */
                .jobs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                /* ── Card ── */
                .jobs-card {
                    background: #fff;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    overflow: hidden;
                    transition: box-shadow 0.25s ease, transform 0.25s ease;
                }
                .jobs-card:hover {
                    box-shadow: 0 8px 24px rgba(0, 32, 96, 0.12);
                    transform: translateY(-2px);
                }
                .jobs-card__inner {
                    display: flex;
                    gap: 0;
                }

                /* Logo column */
                .jobs-card__logo-col {
                    flex-shrink: 0;
                    width: 88px;
                    background: #f8f9fc;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 1.25rem 0.5rem;
                    border-right: 1px solid #eef0f4;
                }
                .jobs-card__logo {
                    width: 56px;
                    height: 56px;
                    object-fit: contain;
                    border-radius: 8px;
                    border: 1px solid #e9ecef;
                    background: #fff;
                    padding: 4px;
                }
                .jobs-card__logo-placeholder {
                    width: 56px;
                    height: 56px;
                    border-radius: 8px;
                    border: 1.5px dashed #d1d5db;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9ca3af;
                    background: #fff;
                }

                /* Body */
                .jobs-card__body {
                    flex: 1;
                    padding: 1.25rem 1.5rem;
                    min-width: 0;
                }
                .jobs-card__header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 0.75rem;
                }
                .jobs-card__title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--abc-blue);
                    margin: 0 0 0.4rem 0;
                    line-height: 1.3;
                }
                .jobs-card__meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem 1.1rem;
                    font-size: 0.82rem;
                    color: #6c757d;
                    font-family: var(--font-ui);
                }
                .jobs-card__meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }
                .jobs-card__meta-item--urgent {
                    color: #d9534f;
                    font-weight: 600;
                }
                .jobs-card__type-badge {
                    flex-shrink: 0;
                    font-size: 0.73rem;
                    font-family: var(--font-ui);
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--abc-blue);
                    background: rgba(0, 32, 96, 0.07);
                    border: 1px solid rgba(0, 32, 96, 0.15);
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    white-space: nowrap;
                }

                /* Description accordion */
                .jobs-card__description {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    color: #495057;
                    line-height: 1.7;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, opacity 0.3s ease;
                    opacity: 0;
                }
                .jobs-card__description--expanded {
                    max-height: 9999px; /* large enough */
                    opacity: 1;
                    padding-top: 0.75rem;
                    border-top: 1px solid #f0f2f5;
                    margin-top: 0.75rem;
                }
                .jobs-card__description ul,
                .jobs-card__description ol {
                    padding-left: 1.4rem;
                    margin-bottom: 0.5rem;
                }
                .jobs-card__description p:last-child { margin-bottom: 0; }

                /* Toggle button */
                .jobs-card__toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    margin-top: 0.85rem;
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    font-family: var(--font-ui);
                    font-size: 0.83rem;
                    font-weight: 600;
                    color: var(--abc-blue);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    transition: opacity 0.2s;
                }
                .jobs-card__toggle:hover { opacity: 0.7; }

                /* ── Empty state ── */
                .jobs-empty {
                    text-align: center;
                    padding: 4rem 1.5rem;
                    background: #fff;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                }
                .jobs-empty__icon {
                    color: #ced4da;
                    margin-bottom: 1.25rem;
                }
                .jobs-empty__title {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    color: #343a40;
                    margin-bottom: 0.5rem;
                }
                .jobs-empty__text {
                    font-family: var(--font-body);
                    color: #6c757d;
                    font-size: 0.95rem;
                    max-width: 400px;
                    margin: 0 auto;
                }

                /* ── Responsive ── */
                @media (max-width: 576px) {
                    .jobs-card__logo-col {
                        width: 64px;
                        padding: 1rem 0.4rem;
                    }
                    .jobs-card__logo,
                    .jobs-card__logo-placeholder {
                        width: 44px;
                        height: 44px;
                    }
                    .jobs-card__body {
                        padding: 1rem 1rem;
                    }
                    .jobs-card__type-badge {
                        display: none;
                    }
                    .jobs-hero {
                        padding: 2.5rem 0 2rem;
                    }
                }
            `})]})};eo.layout=hn;export{eo as default};
