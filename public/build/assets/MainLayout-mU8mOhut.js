import{r as c,b as de,G as se,j as e,L as $,a as U}from"./app-Co3sZ-ds.js";import{s as S}from"./index-BsxvijQw.js";const q=t=>{const n=t.startsWith("/")?t.slice(1):t;let r=window.APP_URL||"";return r||(r="/build/".replace(/\/build\/?$/,"")),r.endsWith("/")&&(r=r.slice(0,-1)),n?`${r}/${n}`:""},O=(t="")=>{const n=t.startsWith("/")?t.slice(1):t;let r=window.APP_URL||"";return!r&&typeof window<"u"&&(r=window.location.origin),r.endsWith("/")&&(r=r.slice(0,-1)),n?`${r}/${n}`:r};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),je=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,r,s)=>s?s.toUpperCase():r.toLowerCase()),re=t=>{const n=je(t);return n.charAt(0).toUpperCase()+n.slice(1)},pe=(...t)=>t.filter((n,r,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===r).join(" ").trim(),ke=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ne={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=c.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:m="",children:l,iconNode:h,...b},N)=>c.createElement("svg",{ref:N,...Ne,width:n,height:n,stroke:t,strokeWidth:s?Number(r)*24/Number(n):r,className:pe("lucide",m),...!l&&!ke(b)&&{"aria-hidden":"true"},...b},[...h.map(([u,w])=>c.createElement(u,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,n)=>{const r=c.forwardRef(({className:s,...m},l)=>c.createElement(Me,{ref:l,iconNode:n,className:pe(`lucide-${ve(re(t))}`,`lucide-${t}`,s),...m}));return r.displayName=re(t),r};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],me=f("arrow-left",Ce);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],oe=f("calendar",ze);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],He=f("check",Se);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ne=f("chevron-down",Le);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ie=f("chevron-left",Ee);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],F=f("chevron-right",Ae);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_e=f("chevron-up",Pe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],W=f("clock",$e);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],le=f("eye",Ie);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],ae=f("facebook",Te);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],he=f("file-text",Re);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],De=f("grid-3x3",Ue);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],ue=f("headphones",Be);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Oe=f("heart",qe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],xe=f("instagram",Ve);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Fe=f("link",Ye);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Qe=f("list",We);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Xe=f("mail",Ge);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Je=f("map-pin",Ke);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],et=f("menu",Ze);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],be=f("message-circle",tt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],st=f("minimize-2",at);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ge=f("pause",rt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],nt=f("phone",ot);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],B=f("play",it);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ct=f("radio",lt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Q=f("search",dt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],mt=f("send",pt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],G=f("share-2",ht);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],xt=f("skip-back",ut);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],gt=f("skip-forward",bt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],wt=f("twitter",ft);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ce=f("video",yt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],jt=f("volume-2",vt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Nt=f("volume-x",kt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],X=f("x",Mt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],fe=f("youtube",Ct),we=async()=>{try{return(await de.get("/api/categories")).data}catch(t){return console.error("Error fetching categories:",t),[]}},Zt=async t=>{try{const n=await de.get(`/api/news?category=${t}`);return(n.data.data||n.data).map(s=>({id:s.id.toString(),slug:s.slug,title:s.title,excerpt:s.summary||s.excerpt||"",content:s.content,author:s.author?.name||"Redacción",date:s.published_at||s.created_at,category:s.categories?.[0]?.name||"General",imageUrl:s.image_path?q(`storage/${s.image_path}`):"",imageCaption:"",views:s.views||0}))}catch(n){return console.error("Error fetching news by category:",n),[]}},D={facebook:"https://www.facebook.com/radioabcesteli",tiktok:"https://www.tiktok.com/@radioabcesteli",instagram:"https://www.instagram.com/radioabcesteli/",youtube:"https://www.youtube.com/channel/UC4jgoYzXPyiQ-JejLctLtlA"},zt=({size:t=24,fill:n="currentColor",className:r})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:n,className:r,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.31 6.13-1.48 1.83-3.79 3.01-6.19 3.04-2.58.07-5.26-.78-7.14-2.6-1.84-1.74-2.92-4.26-3-6.85-.09-2.73 1.05-5.56 3.08-7.48 1.9-1.83 4.58-2.86 7.18-2.64v4.06c-1.28-.21-2.61-.1-3.8.44-1.11.51-2.03 1.43-2.5 2.54-.48 1.15-.56 2.45-.25 3.65.3 1.17 1.08 2.22 2.11 2.84 1.05.62 2.34.84 3.53.64 1.18-.18 2.29-.81 3.02-1.72.76-.92 1.15-2.12 1.15-3.3V0h3.58z"})}),St=["A tu salud","Deportivas ABC","Aquí entre nos","Una historia, una canción"];function Ht({audioState:t,onPlayLive:n,onNavigate:r,onCategoryClick:s}){const[m,l]=c.useState(!1),[h,b]=c.useState([]),[N,u]=c.useState({}),[w,j]=c.useState(""),[y,x]=c.useState([]),[d,k]=c.useState(!1),[M,g]=c.useState(null),I=se.useRef(null),L=t.type==="live"&&t.isPlaying;c.useEffect(()=>{(async()=>{try{const p=(await we()).filter(i=>{const v=!!Number(i.is_active),H=!!Number(i.show_in_menu);return v&&H});p.sort((i,v)=>(Number(i.menu_order)||0)-(Number(v.menu_order)||0));const C=p.map(i=>{const v=(i.children||[]).filter(_=>!!Number(_.is_active)&&!!Number(_.show_in_menu)).sort((_,ye)=>(Number(_.menu_order)||0)-(Number(ye.menu_order)||0)),H={label:i.name,href:S("category.show",{slug:i.slug})};return v.length>0&&(H.subItems=v.map(_=>({label:_.name,href:S("category.show",{slug:_.slug})}))),H});C.push({label:"Audioreportajes",href:"#",target:"podcastview"}),b(C)}catch(a){console.error("Error loading menu categories:",a),b([])}})()},[]),c.useEffect(()=>{const o=()=>{window.innerWidth>=992&&l(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const z=(o,a,p=!1,C,i)=>{if(o.preventDefault(),i&&i.startsWith(S("home"))){r&&r("home"),U.visit(i),l(!1);return}if(C&&r){r(C),l(!1);return}if(!p){if(a==="Reportajes ABC"&&r){r("videos"),l(!1);return}s&&(r&&r("home"),s(a),l(!1))}},E=o=>{u(a=>({...a,[o]:!a[o]}))},A=o=>{o.preventDefault();const a=w.trim();a&&(x([]),k(!1),g(null),j(""),l(!1),U.visit(S("search",{q:a})))};se.useEffect(()=>{if(w.trim().length<2){x([]),k(!1),g(null);return}const o=new AbortController,a=setTimeout(()=>{fetch(O(`api/news/suggestions?q=${encodeURIComponent(w.trim())}`),{signal:o.signal}).then(p=>p.ok?p.json():[]).then(p=>{x(Array.isArray(p)?p:[]),k(!0),g(null)}).catch(p=>{p.name!=="AbortError"&&console.error("Suggestion fetch error",p)})},250);return()=>{clearTimeout(a),o.abort()}},[w]);const P=o=>{if(!(!d||!y.length))if(o.key==="ArrowDown")o.preventDefault(),g(a=>a===null?0:Math.min(y.length-1,a+1));else if(o.key==="ArrowUp")o.preventDefault(),g(a=>a===null?y.length-1:Math.max(0,a-1));else if(o.key==="Enter"){if(M!==null&&y[M]){o.preventDefault();const a=y[M];U.visit(S("news.show",{slug:a.slug})),j(""),k(!1),x([]),g(null)}}else o.key==="Escape"&&(k(!1),g(null))},R=o=>{o.preventDefault(),r?r("podcastview"):U.visit("/podcast"),l(!1)},T=o=>{o.preventDefault(),U.visit(S("jobs.index")),l(!1)};return e.jsxs("header",{className:"fixed-top bg-white shadow-sm",children:[e.jsx("div",{className:"bg-black text-white py-2 d-none d-lg-block",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("ul",{className:"nav align-items-center",children:[e.jsx("li",{className:"nav-item",children:e.jsx($,{href:S("corporate.about"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"QUIÉNES SOMOS"})}),e.jsx("li",{className:"nav-item",children:e.jsx($,{href:S("corporate.advertise"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"ANUNCIATE"})}),e.jsx("li",{className:"nav-item",children:e.jsx($,{href:S("corporate.contact"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"CONTÁCTANOS"})}),e.jsx("li",{className:"nav-item",children:e.jsx($,{href:S("corporate.programming"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"PROGRAMACIÓN"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:"#",onClick:T,className:"nav-link text-light px-2 py-0 hover-white cursor-pointer",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"EMPLEOS"})})]}),e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx("span",{className:"text-light me-2",style:{fontSize:"11px"},children:"Síguenos:"}),e.jsx("a",{href:D.facebook,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(ae,{size:16,fill:"currentColor"})}),e.jsx("a",{href:D.tiktok,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(zt,{size:16,fill:"currentColor"})}),e.jsx("a",{href:D.instagram,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(xe,{size:16})}),e.jsx("a",{href:D.youtube,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(fe,{size:16,fill:"currentColor"})})]})]})})}),e.jsx("div",{className:"container position-relative",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between py-3",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{className:"btn btn-link p-0 text-abc-blue d-lg-none",onClick:()=>l(!m),children:m?e.jsx(X,{size:28}):e.jsx(et,{size:28})}),e.jsx("a",{href:S("home"),onClick:o=>{o.preventDefault(),r&&r("home"),U.visit(S("home"))},className:"navbar-brand m-0 brand-logo-wrapper",children:e.jsx("img",{src:q("storage/logotipo.png"),alt:"Radio ABC Stereo",className:"brand-logo"})})]}),e.jsxs("div",{className:"d-none d-xl-block flex-grow-1 mx-5 search-container position-relative",children:[e.jsxs("form",{onSubmit:A,className:"input-group",role:"search","aria-label":"Buscar noticias",children:[e.jsx("input",{ref:I,type:"text",className:"form-control bg-light border-end-0 rounded-start-pill ps-4",placeholder:"Buscar noticias...","aria-label":"Buscar noticias",value:w,onChange:o=>j(o.target.value),onKeyDown:P,onBlur:()=>setTimeout(()=>k(!1),150),onFocus:()=>{y.length&&k(!0)}}),e.jsx("button",{type:"submit",className:"btn btn-light border-start-0 rounded-end-pill pe-3",children:e.jsx(Q,{size:18,className:"text-primary"})})]}),d&&y.length>0&&e.jsx("div",{className:"search-suggestions dropdown-menu show mt-1 w-100 shadow-sm",role:"listbox","aria-label":"Sugerencias de búsqueda",children:y.map((o,a)=>e.jsxs("button",{type:"button",role:"option","aria-selected":M===a,className:`dropdown-item text-truncate ${M===a?"active":""}`,onMouseDown:p=>{p.preventDefault(),U.visit(S("news.show",{slug:o.slug})),k(!1),x([]),j("")},children:[e.jsx("strong",{className:"d-block",children:o.title}),o.excerpt&&e.jsx("small",{className:"text-muted d-block",children:o.excerpt})]},o.id))})]}),e.jsx("div",{className:"d-flex align-items-center gap-3",children:e.jsxs("button",{onClick:n,className:`btn ${L?"btn-outline-danger":"btn-abc-red"} rounded-pill d-flex align-items-center gap-2 px-3 py-2 shadow-sm border-0`,children:[e.jsxs("div",{className:"position-relative d-flex align-items-center justify-content-center",style:{width:"20px",height:"20px"},children:[L&&e.jsx("span",{className:"position-absolute w-100 h-100 bg-danger rounded-circle opacity-25 spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),e.jsx("div",{className:`rounded-circle p-1 d-flex justify-content-center align-items-center ${L?"bg-danger text-white":"bg-white text-danger"}`,style:{width:"16px",height:"16px"},children:L?e.jsx(ge,{size:8,fill:"currentColor"}):e.jsx(B,{size:8,fill:"currentColor"})})]}),e.jsxs("div",{className:"d-flex flex-column align-items-start lh-1",children:[e.jsx("span",{className:`text-uppercase fw-bold ${L?"text-danger":"text-white-50"}`,style:{fontSize:"9px"},children:"Radio"}),e.jsx("span",{className:`fw-bolder text-uppercase text-nowrap ${L?"text-dark":"text-white"}`,style:{fontSize:"12px"},children:L?"Sonando...":"Escúchanos en vivo"})]})]})})]})}),e.jsx("div",{className:"bg-abc-blue d-none d-lg-block",children:e.jsx("div",{className:"container",children:e.jsx("nav",{className:"d-flex justify-content-center",children:e.jsx("ul",{className:"nav justify-content-center w-100 flex-nowrap",children:h.length===0?e.jsx("div",{className:"d-flex justify-content-center w-100 py-2",children:e.jsx("div",{className:"spinner-border spinner-border-sm text-light",role:"status"})}):h.map(o=>{const a=!!o.subItems;return o.label,e.jsxs("li",{className:`nav-item ${a?"dropdown-hover position-relative":""}`,children:[e.jsxs("a",{href:o.href,className:"nav-link nav-link-custom d-flex align-items-center gap-1 text-white text-uppercase fw-bold px-3 py-3",style:{fontSize:"0.75rem"},onClick:p=>z(p,o.label,a,o.target,o.href),children:[o.label,a&&e.jsx(ne,{size:12})]}),a&&e.jsx("div",{className:"nav-dropdown-panel",children:o.subItems?.map((p,C)=>e.jsxs("a",{href:p.href,className:"nav-dropdown-item",onClick:i=>z(i,p.label,!1,p.target,p.href),children:[e.jsx("span",{className:"nav-dropdown-num",children:String(C+1).padStart(2,"0")}),e.jsx("span",{className:"nav-dropdown-text",children:p.label})]},p.label))})]},o.label)})})})})}),m&&e.jsxs("div",{className:"d-lg-none",children:[e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 animate-fade-in-overlay",style:{zIndex:1040},onClick:()=>l(!1)}),e.jsxs("div",{className:"position-fixed top-0 start-0 h-100 bg-white shadow animate-slide-right",style:{zIndex:1050,width:"320px",overflowY:"auto"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between p-3 bg-abc-blue text-white",children:[e.jsx("h5",{className:"m-0",children:"Menú"}),e.jsx("button",{className:"btn btn-link text-white p-0",onClick:()=>l(!1),children:e.jsx(X,{size:24})})]}),e.jsxs("div",{className:"p-3 bg-light border-bottom position-relative",children:[e.jsxs("form",{onSubmit:A,className:"input-group input-group-sm",role:"search","aria-label":"Buscar",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Buscar...","aria-label":"Buscar",value:w,onChange:o=>j(o.target.value),onKeyDown:P,onBlur:()=>setTimeout(()=>k(!1),150),onFocus:()=>{y.length&&k(!0)}}),e.jsx("button",{className:"btn btn-outline-secondary",type:"submit",children:e.jsx(Q,{size:16})})]}),d&&y.length>0&&e.jsx("div",{className:"search-suggestions dropdown-menu show mt-1 w-100 shadow-sm",style:{left:0},role:"listbox","aria-label":"Sugerencias de búsqueda",children:y.map((o,a)=>e.jsxs("button",{type:"button",role:"option","aria-selected":M===a,className:`dropdown-item text-truncate ${M===a?"active":""}`,onMouseDown:p=>{p.preventDefault(),U.visit(S("news.show",{slug:o.slug})),k(!1),x([]),j(""),l(!1)},children:[e.jsx("strong",{className:"d-block",children:o.title}),o.excerpt&&e.jsx("small",{className:"text-muted d-block",children:o.excerpt})]},o.id))})]}),e.jsxs("div",{className:"list-group list-group-flush",children:[h.map(o=>{if(o.subItems){const a=o.subItems;return e.jsxs("div",{className:"list-group-item bg-light p-0 border-bottom",children:[e.jsxs("button",{className:"p-3 fw-bold text-abc-blue d-flex align-items-center justify-content-between w-100 btn btn-link",onClick:()=>E(o.label),children:[e.jsx("span",{className:"text-start",children:o.label}),e.jsx(ne,{size:16,className:N[o.label]?"rotate-180":""})]}),N[o.label]&&e.jsx("div",{className:"bg-white ps-3",children:a.map(p=>{const C=St.includes(p.label);return e.jsx("a",{href:p.href,className:`list-group-item list-group-item-action border-0 ps-3 py-2 ${C?"text-gray fw-bold":"text-secondary"}`,onClick:i=>z(i,p.label,!1,p.target,p.href),children:p.label},p.label)})})]},o.label)}return e.jsx("a",{href:o.href,className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:a=>z(a,o.label,!1,void 0,o.href),children:o.label},o.label)}),e.jsx("a",{href:"#",className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:R,children:"AUDIOREPORTAJES"}),e.jsx("a",{href:"#",className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:T,children:"Empleos"}),e.jsx($,{href:S("corporate.about"),className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:()=>l(!1),children:"Quiénes Somos"}),e.jsx($,{href:S("corporate.advertise"),className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:()=>l(!1),children:"Anúnciate"}),e.jsx($,{href:S("corporate.contact"),className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:()=>l(!1),children:"Contáctanos"}),e.jsx($,{href:S("corporate.programming"),className:"list-group-item list-group-item-action fw-bold text-secondary",onClick:()=>l(!1),children:"Programación"})]})]})]}),e.jsx("style",{children:`
        /* Logo Positioning & Styling */
        @media (min-width: 992px) {
          .brand-logo-wrapper {
            position: absolute;
            top: -5px;
            left: 12px;
            z-index: 1050;
            display: block;
          }
          .brand-logo {
            height: 115px;
            width: auto;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
            transition: transform 0.3s ease;
            padding-top: 10px;
          }
          .brand-logo:hover {
            transform: scale(1.02);
          }
          .search-container {
            margin-left: 180px !important;
          }
        }
        
        @media (max-width: 991.98px) {
          .brand-logo {
            height: 45px;
          }
        }

        .dropdown-hover:hover .dropdown-menu { display: block; margin-top: 0; animation: fadeIn 0.2s ease-in; }
        .dropdown-item:hover { background-color: #f8f9fa; color: var(--abc-blue); }
        .item-card:hover { background-color: #f8f9fa; }
        .item-card:hover h6 { color: var(--abc-blue) !important; }
        .hover-opacity:hover { opacity: 0.8; }
        
        /* Mobile Menu Animations */
        .animate-slide-right {
          animation: slideRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fade-in-overlay {
          animation: fadeInOverlay 0.3s ease-out forwards;
        }
        
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .rotate-180 { transform: rotate(180deg); transition: transform 0.2s ease; }
        /* Search suggestions */
        .search-suggestions { position: absolute; z-index: 2050; max-height: 280px; overflow-y: auto; }
        .search-suggestions .dropdown-item { white-space: normal; }
        .search-suggestions .dropdown-item small { display: block; }

        /* +Contenido — dark panel design */
        .nav-dropdown-panel {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          min-width: 240px;
          background: #0f1f3d;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
          border-radius: 0 0 8px 8px;
          padding: 6px 0 10px;
          z-index: 1000;
          overflow: hidden;
          animation: dropFadeIn 0.18s ease-out;
        }
        .dropdown-hover:hover .nav-dropdown-panel { display: block; }
        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 20px;
          text-decoration: none;
          color: rgba(255,255,255,0.75);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          border-left: 2px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          white-space: nowrap;
        }
        .nav-dropdown-item + .nav-dropdown-item {
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .nav-dropdown-item:hover {
          background: rgba(255,255,255,0.05);
          color: #ffffff;
          border-left-color: var(--abc-red, #c0392b);
        }
        .nav-dropdown-num {
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255,255,255,0.2);
          font-variant-numeric: tabular-nums;
          min-width: 18px;
          transition: color 0.15s ease;
        }
        .nav-dropdown-item:hover .nav-dropdown-num {
          color: var(--abc-red, #c0392b);
        }
        .nav-dropdown-text {
          flex: 1;
          text-transform: capitalize;
        }
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}const Lt=({size:t=24,fill:n="currentColor",className:r})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:n,className:r,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.31 6.13-1.48 1.83-3.79 3.01-6.19 3.04-2.58.07-5.26-.78-7.14-2.6-1.84-1.74-2.92-4.26-3-6.85-.09-2.73 1.05-5.56 3.08-7.48 1.9-1.83 4.58-2.86 7.18-2.64v4.06c-1.28-.21-2.61-.1-3.8.44-1.11.51-2.03 1.43-2.5 2.54-.48 1.15-.56 2.45-.25 3.65.3 1.17 1.08 2.22 2.11 2.84 1.05.62 2.34.84 3.53.64 1.18-.18 2.29-.81 3.02-1.72.76-.92 1.15-2.12 1.15-3.3V0h3.58z"})});function Et(){const t=new Date().getFullYear(),[n,r]=c.useState([]);return c.useEffect(()=>{we().then(s=>{const m=s.filter(l=>!!Number(l.is_active)&&!!Number(l.show_in_menu)).sort((l,h)=>(Number(l.menu_order)||0)-(Number(h.menu_order)||0)).slice(0,5).map(l=>({label:l.name,href:S("category.show",{slug:l.slug})}));r(m)}).catch(()=>{})},[]),e.jsxs("footer",{className:"bg-abc-blue text-white pt-5 pb-3 border-top border-4 border-abc-red overflow-hidden position-relative",children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)",pointerEvents:"none",zIndex:0}}),e.jsxs("div",{className:"container position-relative",style:{zIndex:1},children:[e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:q("storage/logotipo.png"),alt:"ABC Stereo",className:"bg-white p-2 rounded video-card-hover",style:{height:"52px",width:"auto"}})}),e.jsx("p",{className:"small text-white-50 mb-4 lh-lg",children:"Radio ABC Stereo, la emisora de las mejores calificaciones. Tu portal informativo completo."}),e.jsx("div",{className:"d-flex gap-2",children:[{Icon:ae,href:D.facebook},{Icon:Lt,href:D.tiktok},{Icon:xe,href:D.instagram},{Icon:fe,href:D.youtube}].map((s,m)=>e.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 text-white-50 border-secondary hover-scale",style:{width:"36px",height:"36px",transition:"all 0.3s ease"},children:e.jsx(s.Icon,{size:18})},m))})]}),e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"Noticias"}),e.jsx("ul",{className:"list-unstyled small space-y-2",children:n.length>0?n.map(s=>e.jsx("li",{className:"mb-2",children:e.jsx($,{href:s.href,className:"text-white-50 text-decoration-none footer-link",children:s.label})},s.href)):[1,2,3,4,5].map(s=>e.jsx("li",{className:"mb-2",children:e.jsx("span",{className:"d-inline-block bg-secondary rounded",style:{width:"90px",height:"12px",opacity:.3}})},s))})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"La Radio"}),e.jsxs("ul",{className:"list-unstyled small space-y-2",children:[e.jsx("li",{className:"mb-2",children:e.jsx($,{href:S("corporate.about"),className:"text-white-50 text-decoration-none footer-link",children:"Quiénes Somos"})}),e.jsx("li",{className:"mb-2",children:e.jsx($,{href:S("corporate.programming"),className:"text-white-50 text-decoration-none footer-link",children:"Programación"})}),e.jsx("li",{className:"mb-2",children:e.jsx($,{href:S("corporate.advertise"),className:"text-white-50 text-decoration-none footer-link",children:"Anúnciate"})}),e.jsx("li",{className:"mb-2",children:e.jsx($,{href:S("corporate.contact"),className:"text-white-50 text-decoration-none footer-link",children:"Contáctanos"})})]})]})]})}),e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"Contáctanos"}),e.jsxs("ul",{className:"list-unstyled small text-white-50",children:[e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(nt,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"Cabina"}),e.jsx("a",{href:"tel:+50527133043",className:"text-white-50 text-decoration-none footer-link",children:"+505 2713-3043"})]})]}),e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(be,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"WhatsApp"}),e.jsx("a",{href:"https://wa.me/50588450415",target:"_blank",rel:"noreferrer",className:"text-white-50 text-decoration-none footer-link",children:"+505 8845-0415"})]})]}),e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(Je,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"Ubicación"}),e.jsx("p",{className:"mb-0 text-white-50",children:"Parque Infantil 2c y media al oeste. Bo. El Calvario, Estelí, Nicaragua."})]})]})]})]}),e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-3",children:"App Oficial"}),e.jsx("div",{className:"mb-4",children:e.jsx("a",{href:"https://play.google.com/store/apps",target:"_blank",rel:"noreferrer",className:"d-inline-block hover-opacity transition-transform",children:e.jsx("img",{src:"https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png",alt:"Disponible en Google Play",style:{height:"55px",width:"auto",marginLeft:"-10px"}})})}),e.jsx("h4",{className:"text-white h6 fw-bold mb-3",children:"Boletín"}),e.jsxs("div",{className:"newsletter-box mt-3",children:[e.jsx("p",{className:"small text-white-50 mb-2",children:"Suscríbete para recibir noticias."}),e.jsxs("form",{className:"position-relative",children:[e.jsx("input",{type:"email",placeholder:"Tu correo",className:"form-control bg-dark border-secondary text-white small pe-5 rounded-pill",style:{paddingRight:"40px"}}),e.jsx("button",{className:"btn btn-sm btn-abc-red position-absolute top-50 end-0 translate-middle-y rounded-circle me-1 d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},children:e.jsx(mt,{size:14})})]})]})]})]}),e.jsx("div",{className:"border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50",children:e.jsxs("p",{className:"mb-2 mb-md-0",children:["© ",t," Radio ABC Stereo. Todos los derechos reservados.",e.jsxs("span",{className:"d-none d-md-inline ms-2 border-start border-secondary ps-2",children:["Desarrollado por ",e.jsx("a",{href:"https://www.facebook.com/Galeanoejose",target:"_blank",rel:"noreferrer",className:"text-white-50 text-decoration-none footer-link fw-bold",children:"Eli Moncada"})]})]})})]}),e.jsx("style",{children:`
        .footer-link { transition: color 0.2s ease; }
        .footer-link:hover { color: white !important; text-decoration: underline !important; }
        .hover-scale:hover { transform: scale(1.1); background-color: #dc2626 !important; border-color: #dc2626 !important; color: white !important; }
        .hover-opacity:hover { opacity: 0.9; }
        .transition-transform { transition: transform 0.2s; }
        .transition-transform:hover { transform: translateY(-2px); }
        .text-abc-red { color: #dc2626; }
        .border-abc-red { border-color: #dc2626 !important; }
      `})]})}function K(t,n){return t*60+n}const V={Lunes:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:6,endM:0,timeLabel:"05:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"Aquí entre nos",slogan:"Para estar más cerca de vos",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:14,endM:15,timeLabel:"02:00pm – 02:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:14,startM:15,endH:17,endM:0,timeLabel:"02:15pm – 05:00pm",title:"Tardes Románticas",slogan:"La FM de tus sentimientos",type:"music"},{startH:17,startM:0,endH:19,endM:0,timeLabel:"05:00pm – 07:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Espacio Ranchero y más",slogan:"Más de tu música favorita",type:"music"},{startH:21,startM:0,endH:21,endM:15,timeLabel:"09:00pm – 09:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:21,startM:15,endH:22,endM:30,timeLabel:"09:15pm – 10:30pm",title:"Ligaditas a tu recuerdo",slogan:"Canciones inolvidables",type:"music"},{startH:22,startM:30,endH:24,endM:0,timeLabel:"10:30pm – 12:00am",title:"Clásicos en inglés",slogan:"Para usted",type:"music"}],Martes:[{startH:0,startM:0,endH:4,endM:0,timeLabel:"12:00am – 04:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:4,startM:0,endH:6,endM:0,timeLabel:"04:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"Aquí entre nos",slogan:"Para estar más cerca de vos",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:17,endM:0,timeLabel:"02:00pm – 05:00pm",title:"Tardes Románticas",slogan:"La FM de tus sentimientos",type:"music"},{startH:17,startM:0,endH:19,endM:0,timeLabel:"05:00pm – 07:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Espacio Ranchero y más",slogan:"Más de tu música favorita",type:"music"},{startH:21,startM:0,endH:22,endM:30,timeLabel:"09:00pm – 10:30pm",title:"Ligaditas a tu recuerdo",slogan:"Canciones inolvidables",type:"music"},{startH:22,startM:30,endH:24,endM:0,timeLabel:"10:30pm – 12:00am",title:"Clásicos en inglés",slogan:"Para usted",type:"music"}],Viernes:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:6,endM:0,timeLabel:"05:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"El arte de saber vivir",slogan:"Con su amiga Hirtcia Parrilla",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:14,endM:15,timeLabel:"02:00pm – 02:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:14,startM:15,endH:17,endM:0,timeLabel:"02:15pm – 05:00pm",title:"Tardes Románticas",slogan:"La FM de tus sentimientos",type:"music"},{startH:17,startM:0,endH:18,endM:0,timeLabel:"05:00pm – 06:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:18,startM:0,endH:19,endM:0,timeLabel:"06:00pm – 07:00pm",title:"Viernes de bandas",slogan:"Especial de bandas",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Pedímela cantando",slogan:"Si le hacés a la cantada, pedímela cantando",type:"show"},{startH:21,startM:0,endH:21,endM:15,timeLabel:"09:00pm – 09:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:21,startM:15,endH:24,endM:0,timeLabel:"09:15pm – 12:00am",title:"Clásicos en inglés",slogan:"Por fin es viernes – Especial de clásicos en inglés",type:"music"}],Sábado:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:8,endM:0,timeLabel:"05:00am – 08:00am",title:"Sábado en blanco y negro",slogan:"Para que le pongás color a tu día",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Sábado 7",slogan:"Tu día diferente",type:"show"},{startH:12,startM:0,endH:16,endM:0,timeLabel:"12:00md – 04:00pm",title:"Ponele ganas a tu fin de semana",slogan:"Programación sabatina",type:"show"},{startH:16,startM:0,endH:17,endM:0,timeLabel:"04:00pm – 05:00pm",title:"La Ruta 997",slogan:"Conduciendo con vos",type:"music"},{startH:17,startM:0,endH:18,endM:0,timeLabel:"05:00pm – 06:00pm",title:"El sonidito caliente",slogan:"Música continua",type:"music"},{startH:18,startM:0,endH:21,endM:0,timeLabel:"06:00pm – 09:00pm",title:"Antesala de Haga su fiesta en casa",slogan:"Música y saludos",type:"show"},{startH:21,startM:0,endH:24,endM:0,timeLabel:"09:00pm – 05:30am",title:"Haga su fiesta en casa",slogan:"Nosotros ponemos la música",type:"show"}],Domingo:[{startH:5,startM:30,endH:6,endM:45,timeLabel:"05:30am – 06:45am",title:"Los Alegres de San José",slogan:"El programa con mayor tradición",type:"show"},{startH:6,startM:45,endH:7,endM:0,timeLabel:"06:45am – 07:00am",title:"Jesús te ama",slogan:"Un espacio de fe y reflexión",type:"show"},{startH:7,startM:0,endH:8,endM:30,timeLabel:"07:00am – 08:30am",title:"Épocas de oro",slogan:"Donde el tiempo y la nostalgia se detienen",type:"music"},{startH:8,startM:30,endH:9,endM:0,timeLabel:"08:30am – 09:00am",title:"Recordando con los conjuntos nicaragüenses",slogan:"Con Martín García",type:"show"},{startH:9,startM:0,endH:12,endM:0,timeLabel:"09:00am – 12:00md",title:"Programación dominical",slogan:"Música y saludos",type:"show"},{startH:12,startM:0,endH:13,endM:0,timeLabel:"12:00md – 01:00pm",title:"Música del recuerdo a la carta",slogan:"Buen provecho",type:"music"},{startH:13,startM:0,endH:14,endM:0,timeLabel:"01:00pm – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:17,endM:0,timeLabel:"02:00pm – 05:00pm",title:"Espacio dominguero",slogan:"Está como lo quiero",type:"show"},{startH:17,startM:0,endH:17,endM:30,timeLabel:"05:00pm – 05:30pm",title:"Las rancheras de siempre",slogan:"Inolvidables",type:"music"},{startH:17,startM:30,endH:18,endM:0,timeLabel:"05:30pm – 06:00pm",title:"De dos en dos",slogan:"Dos canciones con un mismo artista",type:"music"},{startH:18,startM:0,endH:19,endM:0,timeLabel:"06:00pm – 07:00pm",title:"El especial de tu artista favorito",slogan:"Una hora con la música de tu artista, dúo o grupo favorito",type:"music"},{startH:19,startM:0,endH:24,endM:0,timeLabel:"07:00pm – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"}]};V.Miércoles=V.Lunes;V.Jueves=V.Martes;const At=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function Pt(){return At[new Date().getDay()]}function _t(t){const n=new Date,r=K(n.getHours(),n.getMinutes());return t.find(s=>{const m=K(s.startH,s.startM),l=s.endH===24?1440:K(s.endH,s.endM);return r>=m&&r<l})??null}function $t({audioState:t,onTogglePlay:n,onToggleInfo:r}){const s=c.useRef(null),[m,l]=c.useState(.8),[h,b]=c.useState(!1),[N,u]=c.useState(!1),[w,j]=c.useState("Cargando..."),[y,x]=c.useState(0),[d,k]=c.useState(0),M="https://hoth.alonhosting.com:4205/stream",g=()=>{const o=Pt(),a=V[o]??V.Lunes,p=_t(a);return p?p.title:"La radio que nunca duerme"};c.useEffect(()=>{j(g());const o=setInterval(()=>j(g()),6e4);return()=>clearInterval(o)},[]),c.useEffect(()=>{if(s.current){const o=t.type==="live"?M:t.data?.audioUrl||"";s.current.src!==o&&(s.current.src=o,s.current.load(),u(!1)),t.isPlaying?s.current.play().catch(a=>{console.error("Error playing:",a),u(!0)}):s.current.pause()}},[t.type,t.data?.audioUrl,t.isPlaying]),c.useEffect(()=>{s.current&&(s.current.volume=h?0:m)},[m,h]);const I=()=>{if(s.current&&t.type==="podcast"){const o=s.current.currentTime,a=s.current.duration;a&&(k(a),x(o/a*100))}},L=o=>{if(s.current&&t.type==="podcast"){const a=parseFloat(o.target.value)/100*d;s.current.currentTime=a,x(parseFloat(o.target.value))}},z=t.type==="podcast",E=z&&t.data?.imageUrl||q("storage/logotipo.png"),A=z?t.data?.title:w,P=z?t.data?.subtitle:"ABC Stereo 99.7 FM",R=z?"PODCAST":N?"OFF":"ON AIR",T=z?"bg-abc-blue":N?"bg-secondary":"bg-danger";return e.jsxs("div",{className:`fixed-bottom bg-abc-blue border-top border-4 border-abc-red shadow-lg text-white transition-player ${t.isPlaying?"player-visible":"player-hidden"}`,style:{zIndex:1060},children:[e.jsx("audio",{ref:s,onTimeUpdate:I,onError:()=>u(!0)}),z&&e.jsxs("div",{className:"w-100 bg-white bg-opacity-10 position-absolute top-0 start-0",style:{height:"4px",marginTop:"-4px"},children:[e.jsx("input",{type:"range",min:"0",max:"100",value:y,onChange:L,className:"position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer",style:{zIndex:10}}),e.jsx("div",{className:"h-100 bg-abc-red transition-all",style:{width:`${y}%`}})]}),e.jsx("div",{className:"container py-2",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-7 col-md-4 d-flex align-items-center gap-3",children:[e.jsx("div",{className:`d-flex align-items-center justify-content-center bg-white rounded overflow-hidden flex-shrink-0 ${!z&&t.isPlaying?"pulse-animation":""}`,style:{width:"45px",height:"45px"},children:e.jsx("img",{src:E,alt:"Cover",className:"w-100 h-100 object-fit-cover",onError:o=>o.target.src=q("storage/logotipo.png")})}),e.jsxs("div",{className:"d-flex flex-column justify-content-center overflow-hidden flex-grow-1",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[e.jsx("span",{className:`badge rounded-pill ${T} px-1`,style:{fontSize:"0.55rem",padding:"2px 4px"},children:R}),e.jsx("span",{className:"text-white-50 small text-truncate",style:{fontSize:"0.7rem"},children:P})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h6",{className:"m-0 fw-bold text-abc-gold text-truncate",style:{fontSize:"0.85rem"},children:A}),z&&r&&e.jsxs("button",{onClick:r,className:"btn btn-sm btn-outline-light border-0 py-0 px-2 d-flex align-items-center gap-1 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition",style:{fontSize:"0.65rem",height:"18px"},title:"Leer transcripción",children:[e.jsx(he,{size:10})," ",e.jsx("span",{children:"LEER"})," ",e.jsx(_e,{size:10})]})]})]})]}),e.jsxs("div",{className:"col-3 col-md-4 d-flex justify-content-center align-items-center gap-3",children:[z&&e.jsx("button",{onClick:()=>{s.current&&(s.current.currentTime-=10)},className:"btn btn-link text-white-50 p-0 d-none d-md-block hover-white",children:e.jsx(xt,{size:20})}),e.jsx("button",{onClick:n,className:"btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center hover-scale shadow-sm flex-shrink-0",style:{width:"45px",height:"45px"},children:t.isPlaying?e.jsx(ge,{size:20,className:"text-abc-blue",fill:"currentColor"}):e.jsx(B,{size:20,className:"text-abc-blue ps-1",fill:"currentColor"})}),z&&e.jsx("button",{onClick:()=>{s.current&&(s.current.currentTime+=10)},className:"btn btn-link text-white-50 p-0 d-none d-md-block hover-white",children:e.jsx(gt,{size:20})})]}),e.jsxs("div",{className:"col-2 col-md-4 d-flex justify-content-end align-items-center gap-2",children:[e.jsx("button",{onClick:()=>b(!h),className:"btn btn-link text-white-50 p-0 hover-white",children:h||m===0?e.jsx(Nt,{size:18}):e.jsx(jt,{size:18})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:h?0:m,onChange:o=>{l(parseFloat(o.target.value)),parseFloat(o.target.value)>0&&b(!1)},className:"form-range d-none d-md-block",style:{width:"80px"}})]})]})}),e.jsx("style",{children:`
        .transition-player {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }
        .player-visible {
          transform: translateY(0);
          opacity: 1;
        }
        .player-hidden {
          transform: translateY(100%);
          opacity: 0;
          pointer-events: none;
        }
        .pulse-animation {
          animation: pulse-border 2s infinite;
        }
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { box-shadow: 0 0 0 5px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:active { transform: scale(0.95); }
        .hover-bg-opacity-20:hover { background-color: rgba(255,255,255,0.2) !important; }
        .cursor-pointer { cursor: pointer; }
      `})]})}const J="/api/audioreportajes",Z=window.APP_URL||(window?.location?.origin?`${window.location.origin}`:"/"),It=t=>{try{const n=t?t.replace(" ","T"):"",r=new Date(n);if(isNaN(r.getTime()))return t;const s=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];return`${r.getDate()} ${s[r.getMonth()]} ${r.getFullYear()}`}catch{return t}},Tt=async()=>{try{const t=J.startsWith("/")?`${Z}${J}`:J,n=await fetch(t);if(!n.ok)throw new Error("API Response not ok");const r=await n.json(),s=n.url;return r.map(m=>{let l=m.imagen||"";if(l&&!l.startsWith("http")){const b=l.startsWith("/")?l.substring(1):l;l=`${Z}/${b}`}else l||(l="https://via.placeholder.com/800x600?text=Audio");let h=m.url||"";if(h&&!h.startsWith("http")){const b=h.startsWith("/")?h.substring(1):h;h=`${Z}/${b}`}return{id:String(m.id),slug:m.slug||`audio-${m.id}`,title:m.titulo,excerpt:m.entrada,content:m.contenido,date:It(m.created_at),duration:"Audio",audioUrl:h,image:l,category:m.categoria||"Reportajes",author:m.autor||"ABC Stereo"}})}catch(t){return console.warn("Error fetching podcasts API, returning fallback data:",t),[{id:"p1",slug:"error-loading",title:"Error cargando datos",excerpt:"No se pudieron cargar los audioreportajes.",content:"",date:"",duration:"",audioUrl:"#",image:"https://via.placeholder.com/800x600?text=Error",category:"Error",author:"Sistema"}]}},Rt=(t,n)=>{const r=Array.from({length:n},()=>[]);return t.forEach((s,m)=>{r[m%n].push(s)}),r},Ut=t=>`hsl(${t*47%360} 70% 48%)`;function Dt({episodes:t,onPlay:n}){const r=Rt(t,3),s=c.useRef({}),m=b=>{try{const N=document.createElement("canvas"),u=N.getContext("2d");if(!u)return null;const w=20,j=20;N.width=w,N.height=j,u.drawImage(b,0,0,w,j);const y=u.getImageData(0,0,w,j).data;let x=0,d=0,k=0,M=0;for(let g=0;g<y.length;g+=4){if(y[g+3]<128)continue;const L=y[g],z=y[g+1],E=y[g+2];L>240&&z>240&&E>240||(x+=L,d+=z,k+=E,M++)}return M===0?null:(x=Math.round(x/M),d=Math.round(d/M),k=Math.round(k/M),{r:x,g:d,b:k})}catch{return null}},l=c.useCallback((b,N)=>{let u=m(N);const w=s.current[b];if(!w)return;if(!u){const d=N.currentSrc||N.src||b,k=Array.from(d).reduce((z,E)=>z*31+E.charCodeAt(0)|0,0),M=Math.abs(k)%360,g=Math.round(200+Math.sin(M)*30),I=Math.round(180+Math.cos(M)*30),L=Math.round(170+Math.sin(M*.7)*30);u={r:g,g:I,b:L}}const{r:j,g:y,b:x}=u;w.style.background=`linear-gradient(180deg, rgba(${j},${y},${x},0.08), rgba(${j},${y},${x},0.03))`,w.style.border=`1px solid rgba(${j},${y},${x},0.06)`,w.style.color="#0b1220"},[]),h=b=>{window.location.href=O(`audioreportaje/${b.slug}`)};return e.jsxs("section",{className:"top-episodes-section container py-4",children:[e.jsxs("div",{className:"d-flex align-items-end justify-content-between mb-3",children:[e.jsx("h3",{className:"h4 fw-bold mb-0",children:"Lo más escuchado"}),e.jsxs("small",{className:"text-muted d-flex align-items-center gap-1",children:[e.jsx(ue,{size:14})," Audioreportajes populares"]})]}),e.jsx("div",{className:"te-grid-columns",children:r.map((b,N)=>e.jsx("div",{className:"te-column",children:b.map((u,w)=>{const y=N+w*3+1,x=Ut(y);return e.jsxs("div",{className:"te-episode",ref:d=>{s.current[String(u.id)]=d},onClick:()=>h(u),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"te-thumb-area",style:{flex:"0 0 80px"},children:[e.jsxs("div",{className:"te-thumb-wrapper",children:[e.jsx("img",{src:u.image,alt:u.title,className:"te-thumb",onError:d=>d.currentTarget.src="https://via.placeholder.com/200?text=Audio",onLoad:d=>l(String(u.id),d.currentTarget)}),e.jsx("span",{className:"te-rank-badge",style:{background:x},children:y})]}),e.jsx("button",{type:"button",className:"te-play-btn","aria-label":`Escuchar ${u.title}`,style:{background:x},onClick:d=>{d.stopPropagation(),window.location.href=O(`audioreportaje/${u.slug}`)},children:e.jsx(B,{size:14,className:"text-white",fill:"white"})})]}),e.jsxs("div",{className:"te-meta flex-grow-1",children:[e.jsx("h4",{className:"te-title mb-1",children:u.title}),e.jsx("p",{className:"te-desc mb-1 text-muted",title:u.excerpt,children:u.excerpt}),e.jsxs("div",{className:"te-meta-row text-muted small d-flex justify-content-between",children:[e.jsx("span",{children:u.date}),e.jsx("span",{children:u.duration})]})]})]},u.id)})},N))}),e.jsx("style",{children:`
        .top-episodes-section { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }

        .te-grid-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          width: 100%;
          box-sizing: border-box;
        }

        .te-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 0;
        }

        .te-episode {
          padding: 0.65rem;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(12,18,26,0.04);
          transition: transform .18s ease, box-shadow .18s ease;
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .te-episode:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(12,18,26,0.10);
        }

        /* Thumb area: image + play button stacked */
        .te-thumb-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 0 0 80px;
        }

        .te-thumb-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .te-thumb {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          transition: transform .28s cubic-bezier(.2,.9,.2,1);
        }

        .te-episode:hover .te-thumb {
          transform: scale(1.05);
        }

        /* Small rank badge on top-left corner of the image */
        .te-rank-badge {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
          z-index: 2;
        }

        /* Play button placed BELOW the image */
        .te-play-btn {
          width: 100%;
          height: 28px;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform .2s ease, filter .2s ease;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .te-play-btn:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .te-play-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.35);
        }

        /* Meta text */
        .te-meta { min-width: 0; }

        .te-title {
          font-size: .95rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #0b1220;
          transition: color .2s ease;
        }

        .te-episode:hover .te-title { color: #667eea; }

        .te-desc {
          font-size: .82rem;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #5b6671;
        }

        .te-meta-row { opacity: .8; }

        /* Responsive */
        @media (max-width: 991px) { .te-grid-columns { grid-template-columns: repeat(2, 1fr); } }

        /* ── MOBILE: una sola fila horizontal, 2 cards visibles + 3ª asomada ── */
        @media (max-width: 575px) {
          .te-grid-columns {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: visible;
            gap: 0.65rem;
            padding-bottom: 10px;
            padding-right: 16px;   /* espacio para que la 3ª se asome */
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .te-grid-columns::-webkit-scrollbar { display: none; }
          .te-grid-columns { -ms-overflow-style: none; scrollbar-width: none; }

          /* "Desenvuelve" las columnas: todos los episodes quedan en la misma fila */
          .te-column {
            display: contents;
          }

          /* Cada card ocupa 46vw → caben 2 completas + ~8vw de la 3ª asomada */
          .te-episode {
            flex: 0 0 46vw;
            min-width: 0;
            scroll-snap-align: start;
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }

          .te-thumb-area {
            flex: none;
            width: 100%;
          }

          .te-thumb-wrapper {
            width: 100%;
            height: 100px;
            border-radius: 8px;
          }

          .te-thumb {
            width: 100%;
            height: 100px;
            border-radius: 8px;
          }

          .te-title {
            font-size: 0.8rem;
            -webkit-line-clamp: 2;
          }

          .te-desc { display: none; }

          .te-meta-row { font-size: 0.72rem; }
        }

        .top-episodes-section h3 { letter-spacing: -0.02em; }
      `})]})}function Bt({onBack:t,onPlayPodcast:n,onOpenPodcastInfo:r}){const[s,m]=c.useState("Todos"),[l,h]=c.useState(""),[b,N]=c.useState(0),[u,w]=c.useState(!1),[j,y]=c.useState(!1),[x,d]=c.useState([]),[k,M]=c.useState(!0),[g,I]=c.useState(1),L=6;c.useEffect(()=>{(async()=>{M(!0);const v=await Tt();d(v),M(!1)})()},[]),c.useEffect(()=>{I(1)},[s,l]),c.useEffect(()=>{const i=()=>{const v=document.querySelector("header.fixed-top");v&&N(v.offsetHeight)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),c.useEffect(()=>{const i=()=>{const v=window.scrollY;w(v>60),y(v>300)};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]);const z=c.useMemo(()=>{const i={};x.forEach(H=>{H.category&&(i[H.category]=(i[H.category]||0)+1)});const v=Object.keys(i).sort();return[{name:"Todos",count:x.length},...v.map(H=>({name:H,count:i[H]}))]},[x]),E=x.filter(i=>{const v=i.title.toLowerCase().includes(l.toLowerCase()),H=s==="Todos"||i.category===s;return v&&H}),A=Math.ceil(E.length/L),P=g*L,R=P-L,T=E.slice(R,P),o=i=>{I(i),window.scrollTo({top:0,behavior:"smooth"})},a=(i,v)=>{i.stopPropagation(),window.location.href=O(`audioreportaje/${v.slug}`)},p=i=>{window.location.href=O(`audioreportaje/${i.slug}`)},C=(i,v)=>{i.stopPropagation();const H=O(`audioreportaje/${v.slug}`);navigator.share?navigator.share({title:v.title,text:v.excerpt,url:H}).catch(_=>console.log("Error sharing:",_)):navigator.clipboard.writeText(H).then(()=>{alert("¡Link copiado al portapapeles!")})};return e.jsxs("div",{className:"bg-gradient-page min-vh-100 animate-fade-in pb-5 position-relative",children:[e.jsxs("div",{className:"header-gradient shadow-lg border-0",style:{position:"sticky",top:b,zIndex:1020,transition:"padding 0.3s ease"},children:[e.jsx("div",{className:"animated-header-bg"}),e.jsxs("div",{className:"container position-relative",style:{zIndex:2,paddingTop:u?"10px":"24px",paddingBottom:u?"10px":"24px",transition:"padding 0.3s ease"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("button",{onClick:t,className:"btn btn-glass rounded-circle p-2 text-white hover-scale transition",children:e.jsx(me,{size:22})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-center mb-1",children:[e.jsx(ct,{size:18,className:"text-warning animate-pulse"}),e.jsx("h1",{className:"h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow",children:"AUDIO REPORTAJES"}),e.jsx(ue,{size:18,className:"text-warning animate-pulse"})]}),!u&&e.jsx("p",{className:"text-white-75 small mb-0",children:"Escucha historias, reportes especiales y mucho más."})]}),e.jsx("div",{style:{width:"42px",height:"42px",flexShrink:0}})]}),e.jsx("div",{className:"podcast-search-wrap mb-2",children:e.jsxs("div",{className:"input-group podcast-search-group",children:[e.jsx("span",{className:"input-group-text podcast-search-icon",children:e.jsx(Q,{size:16})}),e.jsx("input",{type:"text",className:"form-control podcast-search-input",placeholder:"Buscar audioreportajes...",value:l,onChange:i=>h(i.target.value)}),l&&e.jsx("button",{className:"btn podcast-search-clear",onClick:()=>h(""),children:e.jsx(X,{size:14})})]})}),e.jsx("div",{className:"d-flex gap-2 overflow-auto pb-1 scrollbar-hide",children:z.map(i=>e.jsxs("button",{onClick:()=>m(i.name),className:`btn category-pill rounded-pill px-3 py-1 small fw-bold text-nowrap transition border-0 ${s===i.name?"category-active":"category-inactive"}`,children:[e.jsx("span",{children:i.name}),e.jsx("span",{className:"badge bg-white bg-opacity-25 ms-2",children:i.count})]},i.name))})]})]}),e.jsx("button",{className:"scroll-top-btn",style:{opacity:j?1:0,pointerEvents:j?"auto":"none",transform:j?"translateY(0)":"translateY(20px)"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Volver arriba",children:"↑"}),e.jsxs("div",{className:"container py-4",children:[x.length>0&&s==="Todos"&&e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3 px-2",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:"🎙️ Todos los Audioreportajes"})]}),e.jsx(Dt,{episodes:x.slice(0,9)})]}),k?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"spinner-border text-abc-blue",role:"status"}),e.jsx("p",{className:"text-muted mt-2",children:"Cargando audioreportajes..."})]}):e.jsxs(e.Fragment,{children:[s==="Todos"&&!l&&x.length>0&&e.jsxs("div",{className:"mb-5 px-2",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:"✨ Destacado"})]}),e.jsxs("div",{className:"card border-0 rounded-4 shadow-xl overflow-hidden position-relative text-white cursor-pointer featured-card",onClick:()=>p(x[0]),style:{minHeight:"380px"},children:[e.jsx("img",{src:x[0].image,className:"w-100 h-100 object-fit-cover position-absolute top-0 start-0",alt:"Featured",onError:i=>{const v=i.target;v.dataset.errorHandled||(v.dataset.errorHandled="true",v.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e0e0e0" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAudio%3C/text%3E%3C/svg%3E')}}),e.jsx("div",{className:"featured-overlay"}),e.jsxs("div",{className:"card-body position-relative z-1 d-flex flex-column justify-content-end p-4 h-100",children:[e.jsxs("span",{className:"badge badge-featured align-self-start mb-3",children:[e.jsx("span",{className:"pulse-dot"}),"NUEVO AUDIOREPORTAJE"]}),e.jsx("h3",{className:"fw-bold font-serif display-6 mb-2 lh-sm text-shadow-strong",children:x[0].title}),e.jsx("p",{className:"text-white-75 line-clamp-2 mb-4",children:x[0].excerpt}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{onClick:i=>a(i,x[0]),className:"btn btn-play-featured rounded-circle p-3 shadow-lg hover-scale",children:e.jsx(B,{size:28,fill:"currentColor"})}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold",children:x[0].duration}),e.jsx("div",{className:"small text-white-75",children:x[0].date})]})]})]})]})]}),e.jsxs("div",{className:"px-2",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:s==="Todos"?"📻 Todos los Audioreportajes":`📂 ${s}`})]}),e.jsxs("span",{className:"badge bg-light text-secondary px-3 py-2",children:[E.length," audioreportajes"]})]}),E.length===0?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"text-muted mb-2",style:{fontSize:"3rem"},children:"🔍"}),e.jsx("h4",{className:"text-secondary",children:"No se encontraron audioreportajes"}),e.jsx("p",{className:"text-muted",children:"Intenta con otra categoría o término de búsqueda"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4",children:T.map((i,v)=>e.jsx("div",{className:"col",style:{animationDelay:`${v%6*.08}s`,opacity:0,animation:"fadeInUp 0.55s ease forwards"},children:e.jsxs("div",{className:"ar-card h-100 cursor-pointer",onClick:()=>p(i),children:[e.jsxs("div",{className:"ar-img-wrap",children:[e.jsx("img",{src:i.image,alt:i.title,className:"ar-img",onError:H=>{const _=H.target;_.dataset.errorHandled||(_.dataset.errorHandled="true",_.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%231e1e2e" width="800" height="450"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="28" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E🎙 Audioreportaje%3C/text%3E%3C/svg%3E')}}),e.jsx("div",{className:"ar-img-scrim"}),e.jsx("span",{className:"ar-cat-badge",children:i.category}),e.jsxs("span",{className:"ar-duration-badge",children:[e.jsx(W,{size:11}),i.duration]}),e.jsx("button",{className:"ar-play-btn",onClick:H=>a(H,i),"aria-label":`Reproducir ${i.title}`,children:e.jsx(B,{size:22,fill:"white",className:"text-white"})})]}),e.jsxs("div",{className:"ar-body",children:[e.jsx("p",{className:"ar-date",children:i.date}),e.jsx("h5",{className:"ar-title",children:i.title}),e.jsx("p",{className:"ar-excerpt",children:i.excerpt}),e.jsxs("div",{className:"ar-footer",children:[e.jsxs("span",{className:"ar-read-more",children:["Escuchar ",e.jsx(F,{size:15})]}),e.jsx("button",{className:"ar-share-btn",onClick:H=>C(H,i),title:"Compartir",children:e.jsx(G,{size:14})})]})]})]})},i.id))}),A>1&&e.jsx("div",{className:"mt-5",children:e.jsxs("nav",{"aria-label":"Paginación de audioreportajes",children:[e.jsxs("div",{className:"d-flex d-sm-none align-items-center justify-content-between gap-2 px-1",children:[e.jsxs("button",{className:"btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm",onClick:()=>o(g-1),disabled:g===1,style:{minWidth:"90px"},children:[e.jsx(ie,{size:16,className:"me-1"}),"Anterior"]}),e.jsxs("span",{className:"text-muted small fw-semibold",children:[g," / ",A]}),e.jsxs("button",{className:"btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm",onClick:()=>o(g+1),disabled:g===A,style:{minWidth:"90px"},children:["Siguiente",e.jsx(F,{size:16,className:"ms-1"})]})]}),e.jsxs("ul",{className:"pagination justify-content-center gap-2 d-none d-sm-flex",children:[e.jsx("li",{className:`page-item ${g===1?"disabled":""}`,children:e.jsxs("button",{className:"page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm",onClick:()=>o(g-1),disabled:g===1,children:[e.jsx(ie,{size:18,className:"me-1"}),"Anterior"]})}),Array.from({length:A},(i,v)=>v+1).map(i=>e.jsx("li",{className:`page-item ${g===i?"active":""}`,children:e.jsx("button",{className:`page-link rounded-circle border-2 ${g===i?"bg-abc-red text-white border-abc-red shadow":"bg-white text-abc-blue border-abc-blue"}`,onClick:()=>o(i),style:{width:"40px",height:"40px",fontWeight:"bold"},children:i})},i)),e.jsx("li",{className:`page-item ${g===A?"disabled":""}`,children:e.jsxs("button",{className:"page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm",onClick:()=>o(g+1),disabled:g===A,children:["Siguiente",e.jsx(F,{size:18,className:"ms-1"})]})})]})]})}),E.length>0&&A<=1&&e.jsx("div",{className:"text-center text-muted mt-4",children:e.jsx("p",{className:"small",children:"✨ Has visto todos los audioreportajes"})})]})]})]})]}),e.jsx("style",{children:`
        /* Page Background */
        .bg-gradient-page {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* Header Gradient */
        .header-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-header-bg {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .text-shadow-strong {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        }
        .text-white-75 {
          color: rgba(255, 255, 255, 0.75);
        }

        /* Glass Effect */
        .btn-glass {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Category Pills */
        .category-pill {
          font-size: 0.82rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .category-active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          transform: translateY(-2px);
        }
        .category-inactive {
          background: rgba(255, 255, 255, 0.9);
          color: #64748b;
        }
        .category-inactive:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Badge Glow */
        .badge-glow {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }

        /* Featured Card */
        .featured-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
        }
        .featured-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }

        .badge-featured {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 8px 16px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .pulse-dot {
          width: 8px; height: 8px;
          background: white;
          border-radius: 50%;
          animation: pulse-animation 2s infinite;
        }
        @keyframes pulse-animation {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.2); }
        }

        .btn-play-featured {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: 3px solid white;
          transition: all 0.3s ease;
        }
        .btn-play-featured:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(245, 87, 108, 0.5);
        }

        /* ═══════════════════════════════════════
           PODCAST SEARCH BAR
           ═══════════════════════════════════════ */
        .podcast-search-wrap {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }
        .podcast-search-group {
          background: rgba(255,255,255,0.18);
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
        }
        .podcast-search-icon {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.8);
          padding-left: 14px;
        }
        .podcast-search-input {
          background: transparent;
          border: none;
          color: white;
          padding: 8px 4px;
          font-size: 0.88rem;
        }
        .podcast-search-input::placeholder {
          color: rgba(255,255,255,0.6);
        }
        .podcast-search-input:focus {
          background: transparent;
          box-shadow: none;
          color: white;
        }
        .podcast-search-clear {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          padding-right: 12px;
        }
        .podcast-search-clear:hover {
          color: white;
        }

        /* ═══════════════════════════════════════
           AUDIOREPORTAJE CARDS
           ═══════════════════════════════════════ */
        .ar-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
          transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.32s ease;
          display: flex;
          flex-direction: column;
        }
        .ar-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 48px rgba(102, 126, 234, 0.18) !important;
        }

        .ar-img-wrap {
          position: relative;
          overflow: hidden;
          height: 210px;
          flex-shrink: 0;
        }
        .ar-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .ar-card:hover .ar-img { transform: scale(1.07); }

        .ar-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,30,0.75) 0%, rgba(10,10,30,0.15) 45%, transparent 70%);
          pointer-events: none;
        }

        .ar-cat-badge {
          position: absolute;
          top: 12px; left: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 20px;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.35);
          backdrop-filter: blur(4px);
        }

        .ar-duration-badge {
          position: absolute;
          bottom: 10px; left: 12px;
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 0.72rem; font-weight: 600;
          padding: 4px 9px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .ar-play-btn {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0;
          width: 54px; height: 54px;
          border-radius: 50%;
          border: 2.5px solid rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          z-index: 4;
        }
        .ar-card:hover .ar-play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .ar-play-btn:hover {
          background: rgba(102, 126, 234, 0.85);
          border-color: transparent;
        }

        .ar-body {
          padding: 16px 18px 14px;
          display: flex; flex-direction: column; flex: 1;
        }
        .ar-date {
          font-size: 0.7rem; color: #94a3b8; font-weight: 600;
          letter-spacing: 0.04em; text-transform: uppercase;
          margin: 0 0 6px;
        }
        .ar-title {
          font-size: 0.98rem; font-weight: 700; line-height: 1.35;
          color: #0f172a; margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .ar-card:hover .ar-title { color: #667eea; }

        .ar-excerpt {
          font-size: 0.82rem; color: #64748b; line-height: 1.5;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden; flex: 1;
        }

        .ar-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 11px; margin-top: auto;
        }
        .ar-read-more {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: 0.78rem; font-weight: 700; color: #667eea;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .ar-card:hover .ar-read-more { gap: 6px; color: #764ba2; }

        .ar-share-btn {
          width: 30px; height: 30px; border-radius: 50%;
          border: 1.5px solid #e2e8f0; background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8; cursor: pointer;
          transition: all 0.2s ease;
        }
        .ar-share-btn:hover {
          border-color: #667eea; color: #667eea;
          background: rgba(102, 126, 234, 0.06);
          transform: scale(1.1);
        }

        /* ═══════════════════════════════════════
           SCROLL-TO-TOP BUTTON
           ═══════════════════════════════════════ */
        .scroll-top-btn {
          position: fixed;
          bottom: 28px; right: 24px;
          z-index: 2000;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          font-size: 1.1rem; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.45);
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scroll-top-btn:hover {
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.65);
          transform: translateY(-3px) !important;
        }

        /* Animations */
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cursor-pointer { cursor: pointer; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Pagination */
        .pagination .page-link {
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .pagination .page-link:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        @media (max-width: 768px) {
          .featured-card { min-height: 320px !important; }
          /* Always show search bar on mobile */
          .podcast-search-wrap { max-width: 100%; }
        }
      `})]})}function qt({episode:t,isOpen:n,onClose:r,onPlay:s}){const m=c.useRef(null);return c.useEffect(()=>{const l=h=>{h.key==="Escape"&&r()};return n&&(window.addEventListener("keydown",l),setTimeout(()=>m.current?.focus(),50)),()=>window.removeEventListener("keydown",l)},[n,r]),!t||!n?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed-top w-100 h-100 backdrop-modern",style:{zIndex:1075},onClick:r}),e.jsx("div",{ref:m,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":t.title,className:"fixed-bottom w-100 bg-white shadow-lg info-sheet-container",style:{borderTopLeftRadius:"24px",borderTopRightRadius:"24px",zIndex:1080},children:e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsxs("div",{className:"px-4 pt-3 pb-2 border-bottom sticky-top bg-white rounded-top-4",children:[e.jsx("div",{className:"w-100 d-flex justify-content-center mb-2",onClick:r,children:e.jsx("div",{className:"bg-secondary bg-opacity-25 rounded-pill cursor-pointer hover-darker transition",style:{width:"40px",height:"5px"}})}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx("img",{src:t.image,className:"rounded shadow-sm object-fit-cover",style:{width:"50px",height:"50px"},alt:t.title,onError:l=>l.target.src="https://via.placeholder.com/400?text=Audio"}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("span",{className:"badge bg-abc-blue align-self-start",style:{fontSize:"0.6rem"},children:t.category}),e.jsx("h6",{className:"fw-bold m-0 line-clamp-1",children:t.title})]})]}),e.jsx("div",{className:"d-flex gap-2",children:e.jsx("button",{onClick:r,className:"btn btn-light rounded-circle p-2 text-secondary hover-bg-gray transition",title:"Minimizar / Cerrar",children:e.jsx(st,{size:20})})})]})]}),e.jsx("div",{className:"p-4 pt-2 overflow-auto custom-scroll",style:{flexGrow:1},children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-lg-10",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 my-4 bg-light p-3 rounded-4 border border-light",children:[e.jsxs("div",{className:"d-flex flex-column flex-grow-1",children:[e.jsx("small",{className:"text-muted text-uppercase fw-bold mb-1",style:{fontSize:"0.7rem",letterSpacing:"0.5px"},children:"Escuchar Ahora"}),e.jsxs("div",{className:"d-flex align-items-center gap-2 small text-secondary",children:[e.jsx(W,{size:14})," ",e.jsx("span",{className:"fw-medium",children:t.duration}),e.jsx("span",{className:"text-black-50",children:"•"}),e.jsx("span",{children:t.date})]})]}),e.jsxs("button",{onClick:()=>s(t),className:"btn btn-abc-red text-white fw-bold rounded-pill px-4 py-3 d-flex align-items-center gap-2 shadow-sm hover-scale transition-all",children:[e.jsx(B,{size:20,fill:"currentColor"})," ",e.jsx("span",{className:"d-none d-sm-inline",children:"Reproducir"})]})]}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("h5",{className:"fw-bold mb-4 font-serif text-secondary d-flex align-items-center gap-2 border-bottom pb-2",children:[e.jsx(he,{size:20,className:"text-abc-blue"})," Detalles del Episodio"]}),e.jsx("div",{className:"text-secondary lh-lg fs-6 article-content",dangerouslySetInnerHTML:{__html:String(t.content||"")}})]}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 mt-5 pt-4 border-top",children:[e.jsx("button",{className:"btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition",children:e.jsx(Oe,{size:22})}),e.jsx("button",{className:"btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition",children:e.jsx(G,{size:22})})]}),e.jsx("div",{className:"text-center mt-3 mb-5 pb-5",children:e.jsx("small",{className:"text-muted opacity-50",children:"Radio ABC Stereo Podcast"})})]})})})]})}),e.jsx("style",{children:`
        .cursor-pointer { cursor: pointer; }
        .hover-scale:hover { transform: scale(1.03); }
        .hover-darker:hover { background-color: rgba(0,0,0,0.4) !important; }
        .hover-bg-gray:hover { background-color: #f1f5f9; color: var(--abc-blue) !important; border-color: var(--abc-blue) !important; }
        .transition { transition: all 0.2s ease; }
        .transition-all { transition: all 0.3s ease; }

        .backdrop-modern {
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            animation: fadeInBackdrop 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
        }

        @keyframes fadeInBackdrop {
            from { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
        }

        .info-sheet-container {
            height: 85vh;
            animation: slideUpSheet 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            /* Force hardware acceleration */
            transform: translate3d(0, 100%, 0);
        }

        @keyframes slideUpSheet {
            from { transform: translate3d(0, 100%, 0); }
            to { transform: translate3d(0, 0, 0); }
        }
        
        /* Responsive Modal width for Desktop Expanded */
        @media (min-width: 992px) {
           .info-sheet-container {
              width: 650px !important;
              left: 50%;
              transform: translateX(-50%) translate3d(0, 100%, 0); /* Initial state for animation */
              bottom: 24px !important;
              border-radius: 24px !important;
              max-height: 85vh !important;
              animation: slideUpSheetDesktop 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
           }

           @keyframes slideUpSheetDesktop {
              from { transform: translateX(-50%) translate3d(0, 100%, 0); }
              to { transform: translateX(-50%) translate3d(0, 0, 0); }
           }
        }
        
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        .article-content p { margin-bottom: 1.25rem; color: #334155; }
        .article-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .article-content li { margin-bottom: 0.5rem; }
      `})]})}const Y=t=>{const n=window.location.origin;let r="";return t.type==="video"?r="video-reportajes":t.type==="audio"?r="audio-reportajes":t.type==="article"&&(r="nota"),`${n}/${r}/${t.slug}`},Ot=async t=>{try{return await navigator.clipboard.writeText(t),!0}catch{const r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.left="-999999px",document.body.appendChild(r),r.select();try{return document.execCommand("copy"),document.body.removeChild(r),!0}catch{return document.body.removeChild(r),!1}}},Vt=async t=>{if(!navigator.share)return!1;try{const n=Y(t);return await navigator.share({title:t.title,text:`Mira este ${t.type==="video"?"video reportaje":"audio reportaje"}: ${t.title}`,url:n}),!0}catch{return!1}},Yt=t=>{const n=Y(t),r=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`;window.open(r,"_blank","width=600,height=400")},Ft=t=>{const n=Y(t),r=`${t.title} - ABC Stereo`,s=`https://twitter.com/intent/tweet?url=${encodeURIComponent(n)}&text=${encodeURIComponent(r)}`;window.open(s,"_blank","width=600,height=400")},Wt=t=>{const n=Y(t),r=`${t.title} - ${n}`,s=`https://wa.me/?text=${encodeURIComponent(r)}`;window.open(s,"_blank")},Qt=t=>{const n=Y(t),r=encodeURIComponent(`${t.title} - ABC Stereo`),s=encodeURIComponent(`Te comparto este ${t.type==="video"?"video reportaje":"audio reportaje"}:

${t.title}

${n}`);window.location.href=`mailto:?subject=${r}&body=${s}`};function ee({content:t,variant:n="icon",className:r=""}){const[s,m]=c.useState(!1),[l,h]=c.useState(!1),b=async()=>{const w=Y(t);await Ot(w)&&(h(!0),setTimeout(()=>h(!1),2e3))},N=async()=>{await Vt(t)&&m(!1)},u=w=>{switch(w){case"facebook":Yt(t);break;case"twitter":Ft(t);break;case"whatsapp":Wt(t);break;case"email":Qt(t);break}m(!1)};return e.jsxs("div",{className:"share-button-container position-relative",children:[e.jsxs("button",{className:`share-trigger-btn ${n==="button"?"btn-share":"btn-share-icon"} ${r}`,onClick:w=>{w.stopPropagation(),m(!s)},title:"Compartir",children:[e.jsx(G,{size:n==="button"?18:20}),n==="button"&&e.jsx("span",{className:"ms-2",children:"Compartir"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"share-menu-backdrop",onClick:()=>m(!1)}),e.jsxs("div",{className:"share-menu",children:[e.jsxs("div",{className:"share-menu-header",children:[e.jsx("h6",{className:"mb-0 fw-bold",children:"Compartir"}),e.jsx("button",{className:"btn-close-menu",onClick:()=>m(!1),children:"✕"})]}),e.jsxs("div",{className:"share-menu-body",children:["share"in navigator&&e.jsxs("button",{className:"share-option",onClick:N,children:[e.jsx("div",{className:"share-icon bg-primary",children:e.jsx(G,{size:18})}),e.jsx("span",{children:"Compartir..."})]}),e.jsxs("button",{className:"share-option",onClick:b,children:[e.jsx("div",{className:`share-icon ${l?"bg-success":"bg-secondary"}`,children:l?e.jsx(He,{size:18}):e.jsx(Fe,{size:18})}),e.jsx("span",{children:l?"¡Copiado!":"Copiar enlace"})]}),e.jsxs("button",{className:"share-option",onClick:()=>u("facebook"),children:[e.jsx("div",{className:"share-icon bg-facebook",children:e.jsx(ae,{size:18})}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("button",{className:"share-option",onClick:()=>u("twitter"),children:[e.jsx("div",{className:"share-icon bg-twitter",children:e.jsx(wt,{size:18})}),e.jsx("span",{children:"Twitter"})]}),e.jsxs("button",{className:"share-option",onClick:()=>u("whatsapp"),children:[e.jsx("div",{className:"share-icon bg-whatsapp",children:e.jsx(be,{size:18})}),e.jsx("span",{children:"WhatsApp"})]}),e.jsxs("button",{className:"share-option",onClick:()=>u("email"),children:[e.jsx("div",{className:"share-icon bg-email",children:e.jsx(Xe,{size:18})}),e.jsx("span",{children:"Email"})]})]})]})]}),e.jsx("style",{children:`
        .share-button-container {
          display: inline-block;
        }

        .share-trigger-btn {
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .btn-share-icon {
          padding: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          color: #6b7280;
        }

        .btn-share-icon:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #1f2937;
          transform: scale(1.1);
        }

        .btn-share {
          padding: 8px 16px;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .btn-share:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .share-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1040;
        }

        .share-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          z-index: 1050;
          min-width: 240px;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .share-menu-header {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .share-menu-header h6 {
          font-size: 0.9rem;
          color: #1f2937;
        }

        .btn-close-menu {
          background: none;
          border: none;
          font-size: 20px;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .btn-close-menu:hover {
          background: #f3f4f6;
          color: #1f2937;
        }

        .share-menu-body {
          padding: 8px;
        }

        .share-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          color: #374151;
        }

        .share-option:hover {
          background: #f3f4f6;
        }

        .share-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .bg-facebook {
          background: #1877f2;
        }

        .bg-twitter {
          background: #1da1f2;
        }

        .bg-whatsapp {
          background: #25d366;
        }

        .bg-email {
          background: #ea4335;
        }

        .bg-primary {
          background: #667eea;
        }

        .bg-secondary {
          background: #6b7280;
        }

        .bg-success {
          background: #10b981;
        }

        @media (max-width: 768px) {
          .share-menu {
            position: fixed;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 16px 16px 0 0;
            animation: slideUp 0.3s ease;
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
        }
      `})]})}const te=[{id:1,slug:"crisis-politica-nicaragua-analisis-completo",title:"Especial: Crisis Política en Nicaragua - Análisis Completo",description:"Un análisis profundo sobre la situación política actual del país y sus implicaciones para el futuro.",thumbnail:"https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Política",date:"3 Feb 2026",duration:"15:30",views:"45.2K",featured:!0},{id:2,slug:"economia-nacional-inflacion-perspectivas-2026",title:"Economía Nacional: Inflación y Perspectivas 2026",description:"Expertos analizan el comportamiento de la economía nacional y las proyecciones para este año.",thumbnail:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Economía",date:"2 Feb 2026",duration:"12:45",views:"32.1K"},{id:3,slug:"investigacion-corrupcion-obras-publicas",title:"Investigación Especial: Corrupción en Obras Públicas",description:"Revelamos irregularidades en la construcción de infraestructura pública en varias ciudades.",thumbnail:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Investigación",date:"1 Feb 2026",duration:"22:15",views:"78.5K",featured:!0},{id:4,slug:"deportes-resumen-jornada-futbolistica",title:"Deportes: Resumen de la Jornada Futbolística",description:"Lo mejor del fútbol nacional e internacional en un solo reportaje.",thumbnail:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Deportes",date:"31 Ene 2026",duration:"18:20",views:"56.3K"},{id:5,slug:"salud-nuevos-tratamientos-enfermedades-cronicas",title:"Salud: Nuevos Tratamientos para Enfermedades Crónicas",description:"Avances médicos que están cambiando la vida de miles de pacientes en el país.",thumbnail:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Salud",date:"30 Ene 2026",duration:"14:50",views:"41.7K"},{id:6,slug:"cultura-festival-arte-contemporaneo",title:"Cultura: Festival Internacional de Arte Contemporáneo",description:"Cobertura completa del evento cultural más importante del año.",thumbnail:"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Cultura",date:"29 Ene 2026",duration:"16:35",views:"28.9K"},{id:7,slug:"tecnologia-inteligencia-artificial-nicaragua",title:"Tecnología: Inteligencia Artificial en Nicaragua",description:"Cómo la IA está transformando diferentes sectores de la economía nacional.",thumbnail:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Tecnología",date:"28 Ene 2026",duration:"13:25",views:"52.4K"},{id:8,slug:"medio-ambiente-crisis-lago-nicaragua",title:"Medio Ambiente: Crisis del Lago de Nicaragua",description:"Reportaje sobre la contaminación y las medidas urgentes que se necesitan.",thumbnail:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Medio Ambiente",date:"27 Ene 2026",duration:"19:40",views:"64.2K",featured:!0},{id:9,slug:"educacion-reforma-sistema-educativo",title:"Educación: Reforma del Sistema Educativo Nacional",description:"Análisis de los cambios propuestos y su impacto en estudiantes y maestros.",thumbnail:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Educación",date:"26 Ene 2026",duration:"17:15",views:"38.6K"}];function Gt({onBack:t}){const[n,r]=c.useState("Todos"),[s,m]=c.useState(""),[l,h]=c.useState("grid"),[b,N]=c.useState(null),[u,w]=c.useState(6),[j,y]=c.useState(!1),[x,d]=c.useState(0),[k,M]=c.useState(!1),[g,I]=c.useState(!1),L=c.useRef(null),z=c.useMemo(()=>{const a={};te.forEach(C=>{a[C.category]=(a[C.category]||0)+1});const p=Object.keys(a).sort();return[{name:"Todos",count:te.length},...p.map(C=>({name:C,count:a[C]}))]},[]),E=c.useMemo(()=>te.filter(a=>{const p=a.title.toLowerCase().includes(s.toLowerCase())||a.description.toLowerCase().includes(s.toLowerCase()),C=n==="Todos"||a.category===n;return p&&C}),[n,s]),A=E.slice(0,u),P=u<E.length;c.useEffect(()=>{w(6)},[n,s]),c.useEffect(()=>{const a=()=>{const p=document.querySelector("header.fixed-top");p&&d(p.offsetHeight)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),c.useEffect(()=>{const a=()=>{const p=window.scrollY;M(p>60),I(p>300)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const R=c.useCallback(()=>{j||!P||(y(!0),setTimeout(()=>{w(a=>a+6),y(!1)},500))},[j,P]);c.useEffect(()=>{const a=new IntersectionObserver(C=>{C[0].isIntersecting&&P&&!j&&R()},{threshold:.1}),p=L.current;return p&&a.observe(p),()=>{p&&a.unobserve(p)}},[P,j,R]);const T=a=>{N(a)},o=()=>{N(null)};return e.jsxs("div",{className:"video-reportajes-container min-vh-100 pb-5",children:[b&&e.jsx("div",{className:"video-player-modal",onClick:o,children:e.jsxs("div",{className:"video-player-content",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{className:"close-player-btn",onClick:o,children:"✕"}),e.jsx("div",{className:"ratio ratio-16x9 mb-3",children:e.jsx("iframe",{src:`${b.videoUrl}?autoplay=1&rel=0`,title:b.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx("span",{className:"badge bg-abc-red",children:b.category}),e.jsx("span",{className:"text-muted small",children:b.date}),e.jsxs("span",{className:"text-muted small",children:["• ",b.duration]}),e.jsxs("span",{className:"text-muted small",children:["• ",b.views," vistas"]}),e.jsx("div",{className:"ms-auto",children:b.slug&&e.jsx(ee,{content:{title:b.title,slug:b.slug,type:"video"},variant:"button"})})]}),e.jsx("h3",{className:"h4 fw-bold mb-2",children:b.title}),e.jsx("p",{className:"text-muted",children:b.description})]})]})}),e.jsxs("div",{className:"header-gradient shadow-lg border-0",style:{position:"sticky",top:x,zIndex:1020,transition:"padding 0.3s ease"},children:[e.jsx("div",{className:"animated-header-bg"}),e.jsxs("div",{className:"container position-relative",style:{zIndex:2,paddingTop:k?"10px":"24px",paddingBottom:k?"10px":"24px",transition:"padding 0.3s ease"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("button",{onClick:t,className:"btn btn-glass rounded-circle p-2 text-white hover-scale transition",children:e.jsx(me,{size:22})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-center mb-1",children:[e.jsx(ce,{size:18,className:"text-warning animate-pulse"}),e.jsx("h1",{className:"h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow",children:"VIDEO REPORTAJES"}),e.jsx(ce,{size:18,className:"text-warning animate-pulse"})]}),!k&&e.jsx("p",{className:"text-white-75 small mb-0",children:"Mira nuestros trabajos audiovisuales: noticias, reportajes especiales y más."})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{className:`btn btn-glass rounded-circle p-2 text-white hover-scale${l==="grid"?" active":""}`,onClick:()=>h("grid"),title:"Vista cuadrícula",children:e.jsx(De,{size:20})}),e.jsx("button",{className:`btn btn-glass rounded-circle p-2 text-white hover-scale${l==="list"?" active":""}`,onClick:()=>h("list"),title:"Vista lista",children:e.jsx(Qe,{size:20})})]})]}),e.jsx("div",{className:"podcast-search-wrap mb-2",children:e.jsxs("div",{className:"input-group podcast-search-group",children:[e.jsx("span",{className:"input-group-text podcast-search-icon",children:e.jsx(Q,{size:16})}),e.jsx("input",{type:"text",className:"form-control podcast-search-input",placeholder:"Buscar reportajes...",value:s,onChange:a=>m(a.target.value)}),s&&e.jsx("button",{className:"btn podcast-search-clear",onClick:()=>m(""),children:e.jsx(X,{size:14})})]})}),e.jsx("div",{className:"d-flex gap-2 overflow-auto pb-1 scrollbar-hide",children:z.map(a=>e.jsxs("button",{onClick:()=>r(a.name),className:`btn category-pill rounded-pill px-3 py-1 small fw-bold text-nowrap transition border-0 ${n===a.name?"category-active":"category-inactive"}`,children:[e.jsx("span",{children:a.name}),e.jsx("span",{className:"badge bg-white bg-opacity-25 ms-2",children:a.count})]},a.name))})]})]}),e.jsx("button",{className:"scroll-top-btn",style:{opacity:g?1:0,pointerEvents:g?"auto":"none",transform:g?"translateY(0)":"translateY(20px)"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Volver arriba",children:"↑"}),e.jsxs("div",{className:"container py-4",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4 px-2",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"stat-badge"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:n==="Todos"?"🎬 Todos los Videos":`📂 ${n}`})]}),e.jsxs("span",{className:"badge bg-light text-secondary px-3 py-2",children:[E.length," videos"]})]}),E.length===0?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"text-muted mb-2",style:{fontSize:"3rem"},children:"🔍"}),e.jsx("h4",{className:"text-secondary",children:"No se encontraron videos"}),e.jsx("p",{className:"text-muted",children:"Intenta con otra categoría o búsqueda"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:l==="grid"?"row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4":"d-flex flex-column gap-3",children:A.map((a,p)=>e.jsx("div",{className:l==="grid"?"col":"",style:{animationDelay:`${p%6*.1}s`,opacity:0,animation:"fadeInUp 0.6s ease forwards"},children:l==="grid"?e.jsxs("div",{className:"video-card",onClick:()=>T(a),children:[e.jsxs("div",{className:"video-thumbnail",children:[e.jsx("img",{src:a.thumbnail,alt:a.title}),e.jsx("div",{className:"video-overlay",children:e.jsx("div",{className:"play-button",children:e.jsx(B,{size:40,fill:"white"})})}),e.jsx("span",{className:"duration-badge",children:a.duration}),a.featured&&e.jsx("span",{className:"featured-badge",children:"⭐ Destacado"}),a.slug&&e.jsx("div",{className:"share-btn-overlay",onClick:C=>C.stopPropagation(),children:e.jsx(ee,{content:{title:a.title,slug:a.slug,type:"video"},variant:"icon"})})]}),e.jsxs("div",{className:"video-info",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("span",{className:"category-badge",children:a.category}),e.jsxs("span",{className:"views-count",children:[e.jsx(le,{size:14})," ",a.views]})]}),e.jsx("h5",{className:"video-title",children:a.title}),e.jsx("p",{className:"video-description",children:a.description}),e.jsxs("div",{className:"video-meta",children:[e.jsxs("span",{children:[e.jsx(oe,{size:14})," ",a.date]}),e.jsxs("span",{children:[e.jsx(W,{size:14})," ",a.duration]})]})]})]}):e.jsxs("div",{className:"video-card-list",onClick:()=>T(a),children:[e.jsxs("div",{className:"video-thumbnail-list",children:[e.jsx("img",{src:a.thumbnail,alt:a.title}),e.jsx("div",{className:"video-overlay",children:e.jsx(B,{size:32,fill:"white"})}),e.jsx("span",{className:"duration-badge",children:a.duration})]}),e.jsxs("div",{className:"video-info-list",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx("span",{className:"category-badge",children:a.category}),a.featured&&e.jsx("span",{className:"featured-badge-small",children:"⭐"})]}),e.jsx("h5",{className:"video-title-list",children:a.title}),e.jsx("p",{className:"video-description-list",children:a.description}),e.jsxs("div",{className:"d-flex align-items-center gap-3 text-muted small",children:[e.jsxs("span",{children:[e.jsx(oe,{size:14})," ",a.date]}),e.jsxs("span",{children:[e.jsx(le,{size:14})," ",a.views]}),e.jsxs("span",{children:[e.jsx(W,{size:14})," ",a.duration]})]})]}),a.slug&&e.jsx("div",{onClick:C=>C.stopPropagation(),children:e.jsx(ee,{content:{title:a.title,slug:a.slug,type:"video"},variant:"icon"})}),e.jsx(F,{size:24,className:"text-muted"})]})},a.id))}),e.jsxs("div",{ref:L,className:"py-4",children:[j&&e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"spinner-border text-abc-red",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Cargando más..."})}),e.jsx("p",{className:"text-muted mt-2 small",children:"Cargando más videos..."})]}),!P&&A.length>0&&e.jsx("div",{className:"text-center text-muted",children:e.jsx("p",{className:"small",children:"✨ Has visto todos los videos"})})]})]})]}),e.jsx("style",{children:`
        .video-reportajes-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* ── Header (matches PodcastView exactly) ── */
        .header-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-header-bg {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .text-shadow      { text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
        .text-white-75    { color: rgba(255,255,255,0.75); }

        /* Glass button */
        .btn-glass {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .btn-glass:hover    { background: rgba(255,255,255,0.3); }
        .btn-glass.active   { background: rgba(255,255,255,0.35); border-color: rgba(255,255,255,0.5); }

        .hover-scale               { transition: transform 0.3s ease; }
        .hover-scale:hover         { transform: scale(1.05); }

        /* Pulse animation */
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        /* Search bar (identical to PodcastView) */
        .podcast-search-wrap {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          display: flex;
        }
        .podcast-search-group {
          background: rgba(255,255,255,0.18);
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          flex: 1;
        }
        .podcast-search-icon {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.8);
          padding-left: 14px;
        }
        .podcast-search-input {
          background: transparent;
          border: none;
          color: white;
          padding: 8px 4px;
          font-size: 0.88rem;
        }
        .podcast-search-input::placeholder { color: rgba(255,255,255,0.6); }
        .podcast-search-input:focus {
          background: transparent;
          box-shadow: none;
          color: white;
        }
        .podcast-search-clear {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          padding-right: 12px;
        }
        .podcast-search-clear:hover { color: white; }

        /* Category pills (identical to PodcastView) */
        .category-pill {
          font-size: 0.82rem;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .category-active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102,126,234,0.4);
          transform: translateY(-2px);
        }
        .category-inactive {
          background: rgba(255,255,255,0.9);
          color: #64748b;
        }
        .category-inactive:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Scroll-to-top (identical to PodcastView) */
        .scroll-top-btn {
          position: fixed;
          bottom: 28px; right: 24px;
          z-index: 2000;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          font-size: 1.1rem; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.45);
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scroll-top-btn:hover {
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.65);
          transform: translateY(-3px) !important;
        }

        /* Stat Badge */
        .stat-badge {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        /* Video Card - Grid View */
        .video-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .video-thumbnail {
          position: relative;
          padding-top: 56.25%; /* 16:9 */
          overflow: hidden;
          background: #000;
        }

        .video-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .video-card:hover .video-thumbnail img {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .video-card:hover .video-overlay {
          opacity: 1;
        }

        .play-button {
          background: rgba(220, 38, 38, 0.9);
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .video-card:hover .play-button {
          transform: scale(1);
        }

        .duration-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
        }

        .share-btn-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 5;
        }

        .video-card:hover .share-btn-overlay {
          opacity: 1;
        }

        .video-info {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .category-badge {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-block;
        }

        .views-count {
          color: #6b7280;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .video-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .video-card:hover .video-title {
          color: #dc2626;
        }

        .video-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 12px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .video-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .video-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* List View */
        .video-card-list {
          background: white;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .video-card-list:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .video-thumbnail-list {
          position: relative;
          width: 240px;
          min-width: 240px;
          height: 135px;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
        }

        .video-thumbnail-list img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-info-list {
          flex: 1;
        }

        .featured-badge-small {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .video-title-list {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .video-description-list {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 12px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Video Player Modal */
        .video-player-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .video-player-content {
          background: white;
          border-radius: 16px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-player-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .close-player-btn:hover {
          background: rgba(220, 38, 38, 0.9);
          transform: scale(1.1);
        }

        /* Fade In Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .video-thumbnail-list {
            width: 160px;
            min-width: 160px;
            height: 90px;
          }

          .video-card-list {
            flex-direction: column;
            align-items: flex-start;
          }

          .video-thumbnail-list {
            width: 100%;
          }
        }

        /* Botón flotante volver arriba */
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: white;
          font-size: 1.3rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(220,38,38,0.5);
          z-index: 9999;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: fadeInScroll 0.3s ease;
        }
        .scroll-top-btn:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 24px rgba(220,38,38,0.65);
        }
        @keyframes fadeInScroll {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Xt({children:t}){const[n,r]=c.useState({isPlaying:!1,type:"live",data:{title:"Radio ABC",audioUrl:""}}),s=()=>{r(d=>({...d,isPlaying:!d.isPlaying,type:"live"}))},m=()=>{r(d=>({...d,isPlaying:!d.isPlaying}))},[l,h]=c.useState("default");c.useEffect(()=>{const d=window.location.hash;d==="#audioreportajes"?h("podcastview"):d==="#videos"&&h("videoreportajes");const k=()=>{const M=window.location.hash;h(M==="#audioreportajes"?"podcastview":M==="#videos"?"videoreportajes":"default")};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),c.useEffect(()=>{const d=()=>{r(k=>({...k,isPlaying:!1}))};return window.addEventListener("abc:stop-audio",d),()=>window.removeEventListener("abc:stop-audio",d)},[]);const[b,N]=c.useState(null),[u,w]=c.useState(!1),j=d=>{if(d==="podcast"||d==="podcastview"){h("podcastview"),window.history.pushState(null,"","#audioreportajes");return}if(d==="videos"||d==="videoreportajes"){h("videoreportajes"),window.history.pushState(null,"","#videos");return}h("default"),window.history.pushState(null,"",window.location.pathname)},y=d=>{N(d),w(!0)},x=d=>{r({type:"podcast",isPlaying:!0,data:{id:d.id,title:d.title,subtitle:d.author||d.subtitle,imageUrl:d.image||d.imageUrl,audioUrl:d.audioUrl||d.audio}})};return e.jsxs("div",{className:"d-flex flex-column min-vh-100 bg-light",children:[e.jsx(Ht,{audioState:n,onPlayLive:s,onNavigate:j}),e.jsx("main",{className:"flex-grow-1 main-content-offset",style:{paddingBottom:"100px"},children:l==="podcastview"?e.jsx(Bt,{onBack:()=>h("default"),onOpenPodcastInfo:d=>y(d),onPlayPodcast:d=>x(d)}):l==="videoreportajes"?e.jsx(Gt,{onBack:()=>h("default")}):t}),e.jsx(qt,{episode:b,isOpen:u,onClose:()=>w(!1),onPlay:d=>x(d)}),e.jsx(Et,{}),e.jsx($t,{audioState:n,onTogglePlay:m})]})}function ea(t){return e.jsx(Xt,{children:t})}export{me as A,oe as C,le as E,ae as F,De as G,Oe as H,Qe as L,Je as M,ge as P,ct as R,G as S,wt as T,jt as V,X,q as a,He as b,f as c,W as d,F as e,B as f,Nt as g,ie as h,Zt as i,nt as j,Xe as k,mt as l,Yt as m,Q as n,Pt as o,_t as p,V as q,be as r,Vt as s,K as t,ue as u,ea as w};
