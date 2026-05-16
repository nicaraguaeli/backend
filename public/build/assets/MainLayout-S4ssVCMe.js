import{r as i,G as we,c as _e,j as e,L as R,a as X,b as ze}from"./app-CSlbsTpN.js";import{s as E}from"./index-BsxvijQw.js";const ee=t=>{const r=t.startsWith("/")?t.slice(1):t;let a=window.APP_URL||"";return a||(a="/build/".replace(/\/build\/?$/,"")),a.endsWith("/")&&(a=a.slice(0,-1)),r?`${a}/${r}`:""},te=(t="")=>{const r=t.startsWith("/")?t.slice(1):t;let a=window.APP_URL||"";return!a&&typeof window<"u"&&(a=window.location.origin),a.endsWith("/")&&(a=a.slice(0,-1)),r?`${a}/${r}`:a};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Re=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,n)=>n?n.toUpperCase():a.toLowerCase()),ye=t=>{const r=Re(t);return r.charAt(0).toUpperCase()+r.slice(1)},Se=(...t)=>t.filter((r,a,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===a).join(" ").trim(),De=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=i.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:h="",children:l,iconNode:x,...w},z)=>i.createElement("svg",{ref:z,...Ue,width:r,height:r,stroke:t,strokeWidth:n?Number(a)*24/Number(r):a,className:Se("lucide",h),...!l&&!De(w)&&{"aria-hidden":"true"},...w},[...x.map(([g,b])=>i.createElement(g,b)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(t,r)=>{const a=i.forwardRef(({className:n,...h},l)=>i.createElement(Be,{ref:l,iconNode:r,className:Se(`lucide-${Te(ye(t))}`,`lucide-${t}`,n),...h}));return a.displayName=ye(t),a};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Le=M("arrow-left",Oe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ve=M("calendar",Ve);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qe=M("check",Ye);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],je=M("chevron-down",Fe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ke=M("chevron-left",We);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xe=M("chevron-right",Ge);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ke=M("chevron-up",Je);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ue=M("clock",Xe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ne=M("eye",Qe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],ie=M("facebook",Ze);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],He=M("file-text",et);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],at=M("grid-3x3",tt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Ee=M("headphones",st);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ot=M("heart",rt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],ge=M("instagram",nt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],lt=M("link",it);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],dt=M("list",ct);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mt=M("mail",pt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bt=M("map-pin",ht);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ut=M("menu",xt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Ae=M("message-circle",gt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],wt=M("minimize-2",ft);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Pe=M("pause",yt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],jt=M("phone",vt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],F=M("play",kt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Mt=M("radio",Nt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],le=M("search",Ct);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],St=M("send",zt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],ce=M("share-2",Lt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],Et=M("skip-back",Ht);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Pt=M("skip-forward",At);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],It=M("twitter",$t);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Me=M("video",_t);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Rt=M("volume-2",Tt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ut=M("volume-x",Dt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],de=M("x",Bt);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],fe=M("youtube",Ot),D={facebook:"https://www.facebook.com/radioabcesteli",tiktok:"https://www.tiktok.com/@radioabcesteli",instagram:"https://www.instagram.com/radioabcesteli/",youtube:"https://www.youtube.com/channel/UC4jgoYzXPyiQ-JejLctLtlA"},Ce=({size:t=24,fill:r="currentColor",className:a})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:r,className:a,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.31 6.13-1.48 1.83-3.79 3.01-6.19 3.04-2.58.07-5.26-.78-7.14-2.6-1.84-1.74-2.92-4.26-3-6.85-.09-2.73 1.05-5.56 3.08-7.48 1.9-1.83 4.58-2.86 7.18-2.64v4.06c-1.28-.21-2.61-.1-3.8.44-1.11.51-2.03 1.43-2.5 2.54-.48 1.15-.56 2.45-.25 3.65.3 1.17 1.08 2.22 2.11 2.84 1.05.62 2.34.84 3.53.64 1.18-.18 2.29-.81 3.02-1.72.76-.92 1.15-2.12 1.15-3.3V0h3.58z"})});function Vt({audioState:t,onPlayLive:r,onNavigate:a,onCategoryClick:n}){const[h,l]=i.useState(!1),[x,w]=i.useState([]),[z,g]=i.useState({}),[b,v]=i.useState(""),[y,f]=i.useState([]),[d,C]=i.useState(!1),[j,k]=i.useState(null),U=we.useRef(null),{navCategories:A=[]}=_e().props,S=t.type==="live"&&t.isPlaying;i.useEffect(()=>{try{const s=A.filter(u=>{const L=!!Number(u.is_active),P=!!Number(u.show_in_menu);return L&&P});s.sort((u,L)=>(Number(u.menu_order)||0)-(Number(L.menu_order)||0));const m=s.map(u=>{const L=(u.children||[]).filter(_=>!!Number(_.is_active)&&!!Number(_.show_in_menu)).sort((_,Q)=>(Number(_.menu_order)||0)-(Number(Q.menu_order)||0)),P={label:u.name,href:u.custom_url?u.custom_url:E("category.show",{slug:u.slug})};return L.length>0&&(P.subItems=L.map(_=>({label:_.name,href:_.custom_url?_.custom_url:E("category.show",{slug:_.slug})}))),P});m.push({label:"Audioreportajes",href:"#",target:"podcastview"}),m.push({label:"ABC TV",href:"#",target:"videos"}),w(m)}catch(s){console.error("Error building nav from shared prop:",s),w([])}},[A]),i.useEffect(()=>{const s=()=>{window.innerWidth>=992&&l(!1)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const I=(s,m,u=!1,L,P)=>{if(s.preventDefault(),P&&(P.startsWith(E("home"))||P.startsWith("/")||P.startsWith("http"))){if(P.startsWith("http")&&!P.startsWith(E("home"))){window.location.href=P;return}a&&a("home"),X.visit(P),l(!1);return}if(L&&a){a(L),l(!1);return}if(!u){if(m==="Reportajes ABC"&&a){a("videos"),l(!1);return}n&&(a&&a("home"),n(m),l(!1))}},B=s=>{g(m=>({...m,[s]:!m[s]}))},T=s=>{s.preventDefault();const m=b.trim();m&&(f([]),C(!1),k(null),v(""),l(!1),X.visit(E("search",{q:m})))};we.useEffect(()=>{if(b.trim().length<2){f([]),C(!1),k(null);return}const s=new AbortController,m=setTimeout(()=>{fetch(te(`api/news/suggestions?q=${encodeURIComponent(b.trim())}`),{signal:s.signal}).then(u=>u.ok?u.json():[]).then(u=>{f(Array.isArray(u)?u:[]),C(!0),k(null)}).catch(u=>{u.name!=="AbortError"&&console.error("Suggestion fetch error",u)})},250);return()=>{clearTimeout(m),s.abort()}},[b]);const V=s=>{if(!(!d||!y.length))if(s.key==="ArrowDown")s.preventDefault(),k(m=>m===null?0:Math.min(y.length-1,m+1));else if(s.key==="ArrowUp")s.preventDefault(),k(m=>m===null?y.length-1:Math.max(0,m-1));else if(s.key==="Enter"){if(j!==null&&y[j]){s.preventDefault();const m=y[j];X.visit(E("news.show",{slug:m.slug})),v(""),C(!1),f([]),k(null)}}else s.key==="Escape"&&(C(!1),k(null))},Y=s=>{s.preventDefault(),X.visit(E("jobs.index")),l(!1)};return e.jsxs("header",{className:"fixed-top bg-white shadow-sm",children:[e.jsx("div",{className:"bg-black text-white py-2 d-none d-lg-block",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("ul",{className:"nav align-items-center",children:[e.jsx("li",{className:"nav-item",children:e.jsx(R,{href:E("corporate.about"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"QUIÉNES SOMOS"})}),e.jsx("li",{className:"nav-item",children:e.jsx(R,{href:E("corporate.advertise"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"ANUNCIATE"})}),e.jsx("li",{className:"nav-item",children:e.jsx(R,{href:E("corporate.contact"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"CONTÁCTANOS"})}),e.jsx("li",{className:"nav-item",children:e.jsx(R,{href:E("corporate.programming"),className:"nav-link text-light px-2 py-0 hover-white",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"PROGRAMACIÓN"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:"#",onClick:Y,className:"nav-link text-light px-2 py-0 hover-white cursor-pointer",style:{fontSize:"11px",letterSpacing:"0.5px"},children:"EMPLEOS"})})]}),e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx("span",{className:"text-light me-2",style:{fontSize:"11px"},children:"Síguenos:"}),e.jsx("a",{href:D.facebook,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(ie,{size:16,fill:"currentColor"})}),e.jsx("a",{href:D.tiktok,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(Ce,{size:16,fill:"currentColor"})}),e.jsx("a",{href:D.instagram,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(ge,{size:16})}),e.jsx("a",{href:D.youtube,target:"_blank",rel:"noreferrer",className:"text-white hover-opacity",children:e.jsx(fe,{size:16,fill:"currentColor"})})]})]})})}),e.jsx("div",{className:"container position-relative",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between py-3",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{className:"btn btn-link p-0 text-abc-blue d-lg-none",onClick:()=>l(!h),children:h?e.jsx(de,{size:28}):e.jsx(ut,{size:28})}),e.jsx("a",{href:E("home"),onClick:s=>{s.preventDefault(),a&&a("home"),X.visit(E("home"))},className:"navbar-brand m-0 brand-logo-wrapper",children:e.jsx("img",{src:ee("storage/logotipo.png"),alt:"Radio ABC Stereo",className:"brand-logo"})})]}),e.jsxs("div",{className:"d-none d-xl-block flex-grow-1 mx-5 search-container position-relative",children:[e.jsxs("form",{onSubmit:T,className:"input-group",role:"search","aria-label":"Buscar noticias",children:[e.jsx("input",{ref:U,type:"text",className:"form-control bg-light border-end-0 rounded-start-pill ps-4",placeholder:"Buscar noticias...","aria-label":"Buscar noticias",value:b,onChange:s=>v(s.target.value),onKeyDown:V,onBlur:()=>setTimeout(()=>C(!1),150),onFocus:()=>{y.length&&C(!0)}}),e.jsx("button",{type:"submit",className:"btn btn-light border-start-0 rounded-end-pill pe-3",children:e.jsx(le,{size:18,className:"text-primary"})})]}),d&&y.length>0&&e.jsx("div",{className:"search-suggestions dropdown-menu show mt-1 w-100 shadow-sm",role:"listbox","aria-label":"Sugerencias de búsqueda",children:y.map((s,m)=>e.jsxs("button",{type:"button",role:"option","aria-selected":j===m,className:`dropdown-item text-truncate ${j===m?"active":""}`,onMouseDown:u=>{u.preventDefault(),X.visit(E("news.show",{slug:s.slug})),C(!1),f([]),v("")},children:[e.jsx("strong",{className:"d-block",children:s.title}),s.excerpt&&e.jsx("small",{className:"text-muted d-block",children:s.excerpt})]},s.id))})]}),e.jsx("div",{className:"d-flex align-items-center gap-3",children:e.jsxs("button",{onClick:r,className:`btn ${S?"btn-outline-danger":"btn-abc-red"} rounded-pill d-flex align-items-center gap-2 px-3 py-2 shadow-sm border-0`,children:[e.jsxs("div",{className:"position-relative d-flex align-items-center justify-content-center",style:{width:"20px",height:"20px"},children:[S&&e.jsx("span",{className:"position-absolute w-100 h-100 bg-danger rounded-circle opacity-25 spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),e.jsx("div",{className:`rounded-circle p-1 d-flex justify-content-center align-items-center ${S?"bg-danger text-white":"bg-white text-danger"}`,style:{width:"16px",height:"16px"},children:S?e.jsx(Pe,{size:8,fill:"currentColor"}):e.jsx(F,{size:8,fill:"currentColor"})})]}),e.jsxs("div",{className:"d-flex flex-column align-items-start lh-1",children:[e.jsx("span",{className:`text-uppercase fw-bold ${S?"text-danger":"text-white-50"}`,style:{fontSize:"9px"},children:"Radio"}),e.jsx("span",{className:`fw-bolder text-uppercase text-nowrap ${S?"text-dark":"text-white"}`,style:{fontSize:"12px"},children:S?"Sonando...":"Escúchanos en vivo"})]})]})})]})}),e.jsx("div",{className:"bg-abc-blue d-none d-lg-block",children:e.jsx("div",{className:"container",children:e.jsx("nav",{className:"d-flex justify-content-center",children:e.jsx("ul",{className:"nav justify-content-center w-100 flex-nowrap",children:x.length===0?e.jsx("div",{className:"d-flex justify-content-center w-100 py-2",children:e.jsx("div",{className:"spinner-border spinner-border-sm text-light",role:"status"})}):x.map(s=>{const m=!!s.subItems;return s.label,e.jsxs("li",{className:`nav-item ${m?"dropdown-hover position-relative":""}`,children:[e.jsxs("a",{href:s.href,className:"nav-link nav-link-custom d-flex align-items-center gap-1 text-white text-uppercase fw-bold px-3 py-3",style:{fontSize:"0.75rem"},onClick:u=>I(u,s.label,m,s.target,s.href),children:[s.label,m&&e.jsx(je,{size:12})]}),m&&e.jsx("div",{className:"nav-dropdown-panel",children:s.subItems?.map((u,L)=>e.jsxs("a",{href:u.href,className:"nav-dropdown-item",onClick:P=>I(P,u.label,!1,u.target,u.href),children:[e.jsx("span",{className:"nav-dropdown-num",children:String(L+1).padStart(2,"0")}),e.jsx("span",{className:"nav-dropdown-text",children:u.label})]},u.label))})]},s.label)})})})})}),h&&e.jsxs("div",{className:"d-lg-none",children:[e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100 animate-fade-in-overlay",style:{zIndex:1040,background:"rgba(5,15,40,0.72)",backdropFilter:"blur(4px)"},onClick:()=>l(!1)}),e.jsxs("div",{className:"position-fixed top-0 start-0 h-100 animate-slide-right mobile-drawer",style:{zIndex:1050,width:"300px",overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{className:"mobile-drawer-header d-flex align-items-center justify-content-between",children:[e.jsx("img",{src:ee("storage/logowhite.png"),alt:"Radio ABC Stereo",style:{height:"55px",width:"auto",maxWidth:"200px",objectFit:"contain"}}),e.jsx("button",{className:"mobile-drawer-close",onClick:()=>l(!1),"aria-label":"Cerrar menú",children:e.jsx(de,{size:20})})]}),e.jsxs("div",{className:"mobile-drawer-search position-relative",children:[e.jsxs("form",{onSubmit:T,className:"d-flex gap-2",role:"search","aria-label":"Buscar",children:[e.jsxs("div",{className:"flex-grow-1 position-relative",children:[e.jsx(le,{size:15,className:"mobile-search-icon"}),e.jsx("input",{type:"text",className:"mobile-search-input",placeholder:"Buscar noticias...","aria-label":"Buscar",value:b,onChange:s=>v(s.target.value),onKeyDown:V,onBlur:()=>setTimeout(()=>C(!1),150),onFocus:()=>{y.length&&C(!0)}})]}),e.jsx("button",{className:"mobile-search-btn",type:"submit",children:"IR"})]}),d&&y.length>0&&e.jsx("div",{className:"search-suggestions dropdown-menu show mt-1 w-100 shadow",style:{left:0},role:"listbox",children:y.map((s,m)=>e.jsxs("button",{type:"button",role:"option","aria-selected":j===m,className:`dropdown-item text-truncate ${j===m?"active":""}`,onMouseDown:u=>{u.preventDefault(),X.visit(E("news.show",{slug:s.slug})),C(!1),f([]),v(""),l(!1)},children:[e.jsx("strong",{className:"d-block",children:s.title}),s.excerpt&&e.jsx("small",{className:"text-muted d-block",children:s.excerpt})]},s.id))})]}),e.jsxs("nav",{className:"mobile-drawer-nav flex-grow-1",children:[e.jsx("p",{className:"mobile-nav-section-label",children:"SECCIONES"}),x.map(s=>{if(s.subItems){const m=s.subItems,u=z[s.label];return e.jsxs("div",{className:"mobile-nav-group",children:[e.jsxs("button",{className:`mobile-nav-item mobile-nav-parent ${u?"open":""}`,onClick:()=>B(s.label),children:[e.jsx("span",{children:s.label}),e.jsx(je,{size:15,className:`mobile-chevron ${u?"rotated":""}`})]}),u&&e.jsx("div",{className:"mobile-nav-children",children:m.map(L=>e.jsxs("a",{href:L.href,className:"mobile-nav-child",onClick:P=>I(P,L.label,!1,L.target,L.href),children:[e.jsx("span",{className:"mobile-child-dot"}),L.label]},L.label))})]},s.label)}return e.jsx("a",{href:s.href,className:"mobile-nav-item",onClick:m=>I(m,s.label,!1,s.target,s.href),children:s.label},s.label)}),e.jsx("div",{className:"mobile-nav-divider"}),e.jsx("p",{className:"mobile-nav-section-label",children:"RADIO ABC"}),e.jsx("a",{href:"#",className:"mobile-nav-item",onClick:Y,children:"Empleos"}),e.jsx(R,{href:E("corporate.programming"),className:"mobile-nav-item",onClick:()=>l(!1),children:"Programación"}),e.jsx(R,{href:E("corporate.about"),className:"mobile-nav-item",onClick:()=>l(!1),children:"Quiénes Somos"}),e.jsx(R,{href:E("corporate.advertise"),className:"mobile-nav-item",onClick:()=>l(!1),children:"Anúnciate"}),e.jsx(R,{href:E("corporate.contact"),className:"mobile-nav-item",onClick:()=>l(!1),children:"Contáctanos"})]}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsx("p",{className:"mobile-footer-label",children:"Síguenos"}),e.jsxs("div",{className:"d-flex gap-3",children:[e.jsx("a",{href:D.facebook,target:"_blank",rel:"noreferrer",className:"mobile-social-link","aria-label":"Facebook",children:e.jsx(ie,{size:18,fill:"currentColor"})}),e.jsx("a",{href:D.tiktok,target:"_blank",rel:"noreferrer",className:"mobile-social-link","aria-label":"TikTok",children:e.jsx(Ce,{size:18})}),e.jsx("a",{href:D.instagram,target:"_blank",rel:"noreferrer",className:"mobile-social-link","aria-label":"Instagram",children:e.jsx(ge,{size:18})}),e.jsx("a",{href:D.youtube,target:"_blank",rel:"noreferrer",className:"mobile-social-link","aria-label":"YouTube",children:e.jsx(fe,{size:18,fill:"currentColor"})})]})]})]})]}),e.jsx("style",{children:`
        /* ===== LOGO ===== */
        @media (min-width: 992px) {
          .brand-logo-wrapper {
            position: absolute; top: -5px; left: 12px;
            z-index: 1050; display: block;
          }
          .brand-logo {
            height: 115px; width: auto;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
            transition: transform 0.3s ease;
            padding-top: 10px;
          }
          .brand-logo:hover { transform: scale(1.02); }
          .search-container { margin-left: 180px !important; }
        }
        @media (max-width: 991.98px) { .brand-logo { height: 45px; } }

        /* ===== DESKTOP NAV ===== */
        .dropdown-hover:hover .dropdown-menu { display: block; margin-top: 0; animation: fadeIn 0.2s ease-in; }
        .dropdown-item:hover { background-color: #f8f9fa; color: var(--abc-blue); }
        .hover-opacity:hover { opacity: 0.8; }

        /* ===== DESKTOP DROPDOWN PANEL ===== */
        .nav-dropdown-panel {
          display: none; position: absolute; top: 100%; right: 0;
          min-width: 240px; background: #0f1f3d;
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
          border-radius: 0 0 8px 8px; padding: 6px 0 10px;
          z-index: 1000; overflow: hidden;
          animation: dropFadeIn 0.18s ease-out;
        }
        .dropdown-hover:hover .nav-dropdown-panel { display: block; }
        .nav-dropdown-item {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 20px; text-decoration: none;
          color: rgba(255,255,255,0.75); font-size: 0.78rem;
          font-weight: 500; letter-spacing: 0.3px;
          border-left: 2px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          white-space: nowrap;
        }
        .nav-dropdown-item + .nav-dropdown-item { border-top: 1px solid rgba(255,255,255,0.06); }
        .nav-dropdown-item:hover { background: rgba(255,255,255,0.05); color: #ffffff; border-left-color: var(--abc-red, #c0392b); }
        .nav-dropdown-num { font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.2); min-width: 18px; transition: color 0.15s ease; }
        .nav-dropdown-item:hover .nav-dropdown-num { color: var(--abc-red, #c0392b); }
        .nav-dropdown-text { flex: 1; text-transform: capitalize; }
        @keyframes dropFadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

        /* ===== MOBILE OVERLAY ANIMATIONS ===== */
        .animate-slide-right { animation: slideRight 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .animate-fade-in-overlay { animation: fadeInOverlay 0.3s ease-out forwards; }
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }

        /* ===== MOBILE DRAWER ===== */
        .mobile-drawer {
          background: #0b1c3a;
          box-shadow: 4px 0 40px rgba(0,0,0,0.45);
        }

        /* Drawer Header */
        .mobile-drawer-header {
          padding: 16px 18px;
          background: linear-gradient(135deg, #0b1c3a 0%, #142d5e 100%);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
        }
        .mobile-drawer-close {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          color: rgba(255,255,255,0.8);
          padding: 6px 8px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          display: flex; align-items: center;
        }
        .mobile-drawer-close:hover { background: rgba(192,57,43,0.7); color: #fff; border-color: transparent; }

        /* Search */
        .mobile-drawer-search {
          padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .mobile-search-input {
          width: 100%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 9px 12px 9px 36px;
          color: #fff;
          font-size: 0.82rem;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .mobile-search-input::placeholder { color: rgba(255,255,255,0.35); }
        .mobile-search-input:focus { border-color: rgba(192,57,43,0.7); background: rgba(255,255,255,0.1); }
        .mobile-search-icon {
          position: absolute; left: 11px; top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.35);
          pointer-events: none;
        }
        .mobile-search-btn {
          background: var(--abc-red, #c0392b);
          border: none; border-radius: 8px;
          color: #fff; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.8px;
          padding: 0 14px; cursor: pointer;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .mobile-search-btn:hover { background: #a93226; }

        /* Nav Section Label */
        .mobile-nav-section-label {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: rgba(255,255,255,0.3);
          margin: 0;
          padding: 14px 18px 6px;
        }

        /* Nav */
        .mobile-drawer-nav { padding-bottom: 8px; }

        /* Nav Item (leaf) */
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 18px;
          text-decoration: none;
          color: rgba(255,255,255,0.78);
          font-size: 0.83rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          border-left: 2px solid transparent;
          transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
          background: transparent;
          border-top: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .mobile-nav-item:first-of-type { border-top: none; }
        .mobile-nav-item:hover, .mobile-nav-item:focus {
          background: rgba(255,255,255,0.05);
          color: #ffffff;
          border-left-color: var(--abc-red, #c0392b);
          outline: none;
        }

        /* Parent with subItems */
        .mobile-nav-parent.open {
          color: #ffffff;
          background: rgba(192,57,43,0.12);
          border-left-color: var(--abc-red, #c0392b);
        }

        /* Chevron */
        .mobile-chevron {
          color: rgba(255,255,255,0.4);
          transition: transform 0.25s ease;
        }
        .mobile-chevron.rotated { transform: rotate(180deg); color: var(--abc-red, #c0392b); }

        /* Children container */
        .mobile-nav-children {
          background: rgba(0,0,0,0.25);
          border-left: 2px solid var(--abc-red, #c0392b);
          margin-left: 18px;
          border-radius: 0 0 4px 4px;
          animation: childFadeIn 0.2s ease;
        }
        @keyframes childFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-child {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 16px;
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 0.79rem;
          font-weight: 500;
          border-top: 1px solid rgba(255,255,255,0.04);
          transition: color 0.15s ease, background 0.15s ease;
        }
        .mobile-nav-child:first-of-type { border-top: none; }
        .mobile-nav-child:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .mobile-child-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--abc-red, #c0392b);
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Divider */
        .mobile-nav-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 10px 18px;
        }

        /* Footer */
        .mobile-drawer-footer {
          padding: 16px 18px;
          background: rgba(0,0,0,0.3);
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .mobile-footer-label {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: rgba(255,255,255,0.3);
          margin: 0 0 10px;
        }
        .mobile-social-link {
          color: rgba(255,255,255,0.5);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
        }
        .mobile-social-link:hover { color: #fff; transform: translateY(-2px); }

        /* ===== SHARED ===== */
        .search-suggestions { position: absolute; z-index: 2050; max-height: 280px; overflow-y: auto; }
        .search-suggestions .dropdown-item { white-space: normal; }
        .search-suggestions .dropdown-item small { display: block; }
        .rotate-180 { transform: rotate(180deg); transition: transform 0.2s ease; }
      `})]})}const Yt=async()=>{try{return(await ze.get("/api/categories")).data}catch(t){return console.error("Error fetching categories:",t),[]}},qt=({size:t=24,fill:r="currentColor",className:a})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:r,className:a,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.31 6.13-1.48 1.83-3.79 3.01-6.19 3.04-2.58.07-5.26-.78-7.14-2.6-1.84-1.74-2.92-4.26-3-6.85-.09-2.73 1.05-5.56 3.08-7.48 1.9-1.83 4.58-2.86 7.18-2.64v4.06c-1.28-.21-2.61-.1-3.8.44-1.11.51-2.03 1.43-2.5 2.54-.48 1.15-.56 2.45-.25 3.65.3 1.17 1.08 2.22 2.11 2.84 1.05.62 2.34.84 3.53.64 1.18-.18 2.29-.81 3.02-1.72.76-.92 1.15-2.12 1.15-3.3V0h3.58z"})});function Ft(){const t=new Date().getFullYear(),[r,a]=i.useState([]),[n,h]=i.useState(""),[l,x]=i.useState("idle"),[w,z]=i.useState("");i.useEffect(()=>{Yt().then(b=>{const v=b.filter(y=>!!Number(y.is_active)&&!!Number(y.show_in_menu)).sort((y,f)=>(Number(y.menu_order)||0)-(Number(f.menu_order)||0)).slice(0,5).map(y=>({label:y.name,href:E("category.show",{slug:y.slug})}));a(v)}).catch(()=>{})},[]);const g=async b=>{if(b.preventDefault(),!!n){x("loading");try{const{data:v}=await ze.post("/boletin/suscribirse",{email:n});x("success"),z(v.message??"¡Suscrito correctamente!"),h("")}catch(v){x("error");const y=v?.response?.data?.message||v?.response?.data?.errors?.email?.[0]||"Hubo un error. Intenta de nuevo.";z(y)}}};return e.jsxs("footer",{className:"bg-abc-blue text-white pt-5 pb-3 border-top border-4 border-abc-red overflow-hidden position-relative",children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)",pointerEvents:"none",zIndex:0}}),e.jsxs("div",{className:"container position-relative",style:{zIndex:1},children:[e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:ee("storage/logotipo.png"),alt:"ABC Stereo",className:"bg-white p-2 rounded video-card-hover",style:{height:"52px",width:"auto"}})}),e.jsx("p",{className:"small text-white-50 mb-4 lh-lg",children:"Radio ABC Stereo, la emisora de las mejores calificaciones. Tu portal informativo completo."}),e.jsx("div",{className:"d-flex gap-2",children:[{Icon:ie,href:D.facebook},{Icon:qt,href:D.tiktok},{Icon:ge,href:D.instagram},{Icon:fe,href:D.youtube}].map((b,v)=>e.jsx("a",{href:b.href,target:"_blank",rel:"noreferrer",className:"btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 text-white-50 border-secondary hover-scale",style:{width:"36px",height:"36px",transition:"all 0.3s ease"},children:e.jsx(b.Icon,{size:18})},v))})]}),e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"Noticias"}),e.jsx("ul",{className:"list-unstyled small space-y-2",children:r.length>0?r.map(b=>e.jsx("li",{className:"mb-2",children:e.jsx(R,{href:b.href,className:"text-white-50 text-decoration-none footer-link",children:b.label})},b.href)):[1,2,3,4,5].map(b=>e.jsx("li",{className:"mb-2",children:e.jsx("span",{className:"d-inline-block bg-secondary rounded",style:{width:"90px",height:"12px",opacity:.3}})},b))})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"La Radio"}),e.jsxs("ul",{className:"list-unstyled small space-y-2",children:[e.jsx("li",{className:"mb-2",children:e.jsx(R,{href:E("corporate.about"),className:"text-white-50 text-decoration-none footer-link",children:"Quiénes Somos"})}),e.jsx("li",{className:"mb-2",children:e.jsx(R,{href:E("corporate.programming"),className:"text-white-50 text-decoration-none footer-link",children:"Programación"})}),e.jsx("li",{className:"mb-2",children:e.jsx(R,{href:E("corporate.advertise"),className:"text-white-50 text-decoration-none footer-link",children:"Anúnciate"})}),e.jsx("li",{className:"mb-2",children:e.jsx(R,{href:E("corporate.contact"),className:"text-white-50 text-decoration-none footer-link",children:"Contáctanos"})})]})]})]})}),e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1",children:"Contáctanos"}),e.jsxs("ul",{className:"list-unstyled small text-white-50",children:[e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(jt,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"Cabina"}),e.jsx("a",{href:"tel:+50527133043",className:"text-white-50 text-decoration-none footer-link",children:"+505 2713-3043"})]})]}),e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(Ae,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"WhatsApp"}),e.jsx("a",{href:"https://wa.me/50588450415",target:"_blank",rel:"noreferrer",className:"text-white-50 text-decoration-none footer-link",children:"+505 8845-0415"})]})]}),e.jsxs("li",{className:"d-flex align-items-start gap-3 mb-3",children:[e.jsx("div",{className:"p-1 rounded text-abc-red",children:e.jsx(bt,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-bold text-white",children:"Ubicación"}),e.jsx("p",{className:"mb-0 text-white-50",children:"Parque Infantil 2c y media al oeste. Bo. El Calvario, Estelí, Nicaragua."})]})]})]})]}),e.jsxs("div",{className:"col-md-6 col-lg-3",children:[e.jsx("h4",{className:"text-white h6 fw-bold mb-3",children:"Boletín"}),e.jsxs("div",{className:"newsletter-box mt-3",children:[e.jsx("p",{className:"small text-white-50 mb-2",children:"Suscríbete para recibir noticias semanales."}),l==="success"?e.jsxs("div",{className:"small text-success fw-bold d-flex align-items-center gap-2",children:[e.jsx("span",{children:"✅"})," ",w]}):e.jsxs("form",{className:"position-relative",onSubmit:g,children:[e.jsx("input",{type:"email",placeholder:"Tu correo",className:"form-control bg-dark border-secondary text-white small pe-5 rounded-pill",style:{paddingRight:"40px"},value:n,onChange:b=>h(b.target.value),required:!0,disabled:l==="loading"}),e.jsx("button",{type:"submit",disabled:l==="loading",className:"btn btn-sm btn-abc-red position-absolute top-50 end-0 translate-middle-y rounded-circle me-1 d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},children:l==="loading"?e.jsx("span",{className:"spinner-border spinner-border-sm"}):e.jsx(St,{size:14})}),l==="error"&&e.jsx("small",{className:"text-danger d-block mt-1",children:w})]})]})]})]}),e.jsx("div",{className:"border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50",children:e.jsxs("p",{className:"mb-2 mb-md-0",children:["© ",t," Radio ABC Stereo. Todos los derechos reservados.",e.jsxs("span",{className:"d-none d-md-inline ms-2 border-start border-secondary ps-2",children:["Desarrollado por ",e.jsx("a",{href:"https://www.facebook.com/Galeanoejose",target:"_blank",rel:"noreferrer",className:"text-white-50 text-decoration-none footer-link fw-bold",children:"Eli M."})]})]})})]}),e.jsx("style",{children:`
        .footer-link { transition: color 0.2s ease; }
        .footer-link:hover { color: white !important; text-decoration: underline !important; }
        .hover-scale:hover { transform: scale(1.1); background-color: #dc2626 !important; border-color: #dc2626 !important; color: white !important; }
        .hover-opacity:hover { opacity: 0.9; }
        .transition-transform { transition: transform 0.2s; }
        .transition-transform:hover { transform: translateY(-2px); }
        .text-abc-red { color: #dc2626; }
        .border-abc-red { border-color: #dc2626 !important; }
      `})]})}function pe(t,r){return t*60+r}const ae={Lunes:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:6,endM:0,timeLabel:"05:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"Aquí entre nos",slogan:"Para estar más cerca de vos",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:14,endM:15,timeLabel:"02:00pm – 02:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:14,startM:15,endH:17,endM:0,timeLabel:"02:15pm – 05:00pm",title:"Tardes Románticas",slogan:"La FM de tus sentimientos",type:"music"},{startH:17,startM:0,endH:19,endM:0,timeLabel:"05:00pm – 07:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Espacio Ranchero y más",slogan:"Más de tu música favorita",type:"music"},{startH:21,startM:0,endH:21,endM:15,timeLabel:"09:00pm – 09:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:21,startM:15,endH:22,endM:30,timeLabel:"09:15pm – 10:30pm",title:"Ligaditas a tu recuerdo",slogan:"Canciones inolvidables",type:"music"},{startH:22,startM:30,endH:24,endM:0,timeLabel:"10:30pm – 12:00am",title:"Clásicos en inglés",slogan:"Para usted",type:"music"}],Martes:[{startH:0,startM:0,endH:4,endM:0,timeLabel:"12:00am – 04:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:4,startM:0,endH:6,endM:0,timeLabel:"04:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"Aquí entre nos",slogan:"Para estar más cerca de vos",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:17,endM:0,timeLabel:"02:00pm – 05:00pm",title:"Tardes Románticas",slogan:"La FM de tus sentimientos",type:"music"},{startH:17,startM:0,endH:19,endM:0,timeLabel:"05:00pm – 07:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Espacio Ranchero y más",slogan:"Más de tu música favorita",type:"music"},{startH:21,startM:0,endH:22,endM:30,timeLabel:"09:00pm – 10:30pm",title:"Ligaditas a tu recuerdo",slogan:"Canciones inolvidables",type:"music"},{startH:22,startM:30,endH:24,endM:0,timeLabel:"10:30pm – 12:00am",title:"Clásicos en inglés",slogan:"Para usted",type:"music"}],Viernes:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:6,endM:0,timeLabel:"05:00am – 06:00am",title:"El Tempranero",slogan:"Donde vos sos el primero",type:"show"},{startH:6,startM:0,endH:7,endM:0,timeLabel:"06:00am – 07:00am",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:7,startM:0,endH:8,endM:0,timeLabel:"07:00am – 08:00am",title:"El arte de saber vivir",slogan:"Con su amiga Hirtcia Parrilla",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Cada mañana",slogan:"La mañana de tu radio",type:"show"},{startH:12,startM:0,endH:12,endM:40,timeLabel:"12:00md – 12:40md",title:"Noticias ABC",slogan:"El radio informativo completo",type:"news"},{startH:12,startM:40,endH:13,endM:10,timeLabel:"12:40md – 01:10md",title:"Deportivas ABC",slogan:"Siempre en la jugada",type:"sports"},{startH:13,startM:10,endH:14,endM:0,timeLabel:"01:10md – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:14,endM:15,timeLabel:"02:00pm – 02:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:14,startM:15,endH:17,endM:0,timeLabel:"02:15pm – 05:00pm",title:"Viernes Romántico",slogan:"La llamada del amor",type:"show"},{startH:17,startM:0,endH:18,endM:0,timeLabel:"05:00pm – 06:00pm",title:"Doble Hora Grupera",slogan:"Hecha a tu manera",type:"music"},{startH:18,startM:0,endH:19,endM:0,timeLabel:"06:00pm – 07:00pm",title:"Viernes de bandas",slogan:"Especial de bandas",type:"music"},{startH:19,startM:0,endH:21,endM:0,timeLabel:"07:00pm – 09:00pm",title:"Pedímela cantando",slogan:"Si le hacés a la cantada, pedímela cantando",type:"show"},{startH:21,startM:0,endH:21,endM:15,timeLabel:"09:00pm – 09:15pm",title:"Una historia, una canción",slogan:"Porque siempre hay una historia que nos llega directo al corazón",type:"show"},{startH:21,startM:15,endH:24,endM:0,timeLabel:"09:15pm – 12:00am",title:"Clásicos en inglés",slogan:"Por fin es viernes – Especial de clásicos en inglés",type:"music"}],Sábado:[{startH:0,startM:0,endH:5,endM:0,timeLabel:"12:00am – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"},{startH:5,startM:0,endH:8,endM:0,timeLabel:"05:00am – 08:00am",title:"Sábado en blanco y negro",slogan:"Para que le pongás color a tu día",type:"show"},{startH:8,startM:0,endH:12,endM:0,timeLabel:"08:00am – 12:00md",title:"Sábado 7",slogan:"Tu día diferente",type:"show"},{startH:12,startM:0,endH:16,endM:0,timeLabel:"12:00md – 04:00pm",title:"Ponele ganas a tu fin de semana",slogan:"Programación sabatina",type:"show"},{startH:16,startM:0,endH:17,endM:0,timeLabel:"04:00pm – 05:00pm",title:"La Ruta 997",slogan:"Conduciendo con vos",type:"music"},{startH:17,startM:0,endH:18,endM:0,timeLabel:"05:00pm – 06:00pm",title:"El sonidito caliente",slogan:"Música continua",type:"music"},{startH:18,startM:0,endH:21,endM:0,timeLabel:"06:00pm – 09:00pm",title:"Antesala de Haga su fiesta en casa",slogan:"Música y saludos",type:"show"},{startH:21,startM:0,endH:24,endM:0,timeLabel:"09:00pm – 05:30am",title:"Haga su fiesta en casa",slogan:"Nosotros ponemos la música",type:"show"}],Domingo:[{startH:5,startM:30,endH:6,endM:45,timeLabel:"05:30am – 06:45am",title:"Los Alegres de San José",slogan:"El programa con mayor tradición",type:"show"},{startH:6,startM:45,endH:7,endM:0,timeLabel:"06:45am – 07:00am",title:"Jesús te ama",slogan:"Un espacio de fe y reflexión",type:"show"},{startH:7,startM:0,endH:8,endM:30,timeLabel:"07:00am – 08:30am",title:"Épocas de oro",slogan:"Donde el tiempo y la nostalgia se detienen",type:"music"},{startH:8,startM:30,endH:9,endM:0,timeLabel:"08:30am – 09:00am",title:"Recordando con los conjuntos nicaragüenses",slogan:"Con Martín García",type:"show"},{startH:9,startM:0,endH:12,endM:0,timeLabel:"09:00am – 12:00md",title:"Programación dominical",slogan:"Música y saludos",type:"show"},{startH:12,startM:0,endH:13,endM:0,timeLabel:"12:00md – 01:00pm",title:"Música del recuerdo a la carta",slogan:"Buen provecho",type:"music"},{startH:13,startM:0,endH:14,endM:0,timeLabel:"01:00pm – 02:00pm",title:"Clásicos en inglés",slogan:"Para usted",type:"music"},{startH:14,startM:0,endH:17,endM:0,timeLabel:"02:00pm – 05:00pm",title:"Espacio dominguero",slogan:"Está como lo quiero",type:"show"},{startH:17,startM:0,endH:17,endM:30,timeLabel:"05:00pm – 05:30pm",title:"Las rancheras de siempre",slogan:"Inolvidables",type:"music"},{startH:17,startM:30,endH:18,endM:0,timeLabel:"05:30pm – 06:00pm",title:"De dos en dos",slogan:"Dos canciones con un mismo artista",type:"music"},{startH:18,startM:0,endH:19,endM:0,timeLabel:"06:00pm – 07:00pm",title:"El especial de tu artista favorito",slogan:"Una hora con la música de tu artista, dúo o grupo favorito",type:"music"},{startH:19,startM:0,endH:24,endM:0,timeLabel:"07:00pm – 05:00am",title:"La radio que nunca duerme",slogan:"Música continua",type:"music"}]};ae.Miércoles=ae.Lunes;ae.Jueves=ae.Martes;const Wt=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function Gt(){return Wt[new Date().getDay()]}function Jt(t){const r=new Date,a=pe(r.getHours(),r.getMinutes());return t.find(n=>{const h=pe(n.startH,n.startM),l=n.endH===24?1440:pe(n.endH,n.endM);return a>=h&&a<l})??null}function Kt({audioState:t,onTogglePlay:r,onToggleInfo:a}){const n=i.useRef(null),[h,l]=i.useState(.8),[x,w]=i.useState(!1),[z,g]=i.useState(!1),[b,v]=i.useState("Cargando..."),[y,f]=i.useState(0),[d,C]=i.useState(0),j="https://hoth.alonhosting.com:4205/stream",k=()=>{const s=Gt(),m=ae[s]??ae.Lunes,u=Jt(m);return u?u.title:"La radio que nunca duerme"};i.useEffect(()=>{v(k());const s=setInterval(()=>v(k()),6e4);return()=>clearInterval(s)},[]),i.useEffect(()=>{if(n.current){const s=t.type==="live"?j:t.data?.audioUrl||"";n.current.src!==s&&(n.current.src=s,n.current.load(),g(!1)),t.isPlaying?n.current.play().catch(m=>{console.error("Error playing:",m),g(!0)}):n.current.pause()}},[t.type,t.data?.audioUrl,t.isPlaying]),i.useEffect(()=>{n.current&&(n.current.volume=x?0:h)},[h,x]);const U=()=>{if(n.current&&t.type==="podcast"){const s=n.current.currentTime,m=n.current.duration;m&&(C(m),f(s/m*100))}},A=s=>{if(n.current&&t.type==="podcast"){const m=parseFloat(s.target.value)/100*d;n.current.currentTime=m,f(parseFloat(s.target.value))}},S=t.type==="podcast",I=S&&t.data?.imageUrl||ee("storage/logotipo.png"),B=S?t.data?.title:b,T=S?t.data?.subtitle:"ABC Stereo 99.7 FM",V=S?"AUDIOREPORTAJE":z?"OFF":"ON AIR",Y=S?"bg-abc-blue":z?"bg-secondary":"bg-danger";return e.jsxs("div",{className:`fixed-bottom bg-abc-blue border-top border-4 border-abc-red shadow-lg text-white transition-player ${t.isPlaying?"player-visible":"player-hidden"}`,style:{zIndex:1060},children:[e.jsx("audio",{ref:n,onTimeUpdate:U,onError:()=>g(!0)}),S&&e.jsxs("div",{className:"w-100 bg-white bg-opacity-10 position-absolute top-0 start-0",style:{height:"4px",marginTop:"-4px"},children:[e.jsx("input",{type:"range",min:"0",max:"100",value:y,onChange:A,className:"position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer",style:{zIndex:10}}),e.jsx("div",{className:"h-100 bg-abc-red transition-all",style:{width:`${y}%`}})]}),e.jsx("div",{className:"container py-2",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-7 col-md-4 d-flex align-items-center gap-3",children:[e.jsx("div",{className:`d-flex align-items-center justify-content-center bg-white rounded overflow-hidden flex-shrink-0 ${!S&&t.isPlaying?"pulse-animation":""}`,style:{width:"45px",height:"45px"},children:e.jsx("img",{src:I,alt:"Cover",className:"w-100 h-100 object-fit-cover",onError:s=>s.target.src=ee("storage/logotipo.png")})}),e.jsxs("div",{className:"d-flex flex-column justify-content-center overflow-hidden flex-grow-1",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[e.jsx("span",{className:`badge rounded-pill ${Y} px-1`,style:{fontSize:"0.55rem",padding:"2px 4px"},children:V}),e.jsx("span",{className:"text-white-50 small text-truncate",style:{fontSize:"0.7rem"},children:T})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h6",{className:"m-0 fw-bold text-abc-gold text-truncate",style:{fontSize:"0.85rem"},children:B}),S&&a&&e.jsxs("button",{onClick:a,className:"btn btn-sm btn-outline-light border-0 py-0 px-2 d-flex align-items-center gap-1 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition",style:{fontSize:"0.65rem",height:"18px"},title:"Leer transcripción",children:[e.jsx(He,{size:10})," ",e.jsx("span",{children:"LEER"})," ",e.jsx(Ke,{size:10})]})]})]})]}),e.jsxs("div",{className:"col-3 col-md-4 d-flex justify-content-center align-items-center gap-3",children:[S&&e.jsx("button",{onClick:()=>{n.current&&(n.current.currentTime-=10)},className:"btn btn-link text-white-50 p-0 d-none d-md-block hover-white",children:e.jsx(Et,{size:20})}),e.jsx("button",{onClick:r,className:"btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center hover-scale shadow-sm flex-shrink-0",style:{width:"45px",height:"45px"},children:t.isPlaying?e.jsx(Pe,{size:20,className:"text-abc-blue",fill:"currentColor"}):e.jsx(F,{size:20,className:"text-abc-blue ps-1",fill:"currentColor"})}),S&&e.jsx("button",{onClick:()=>{n.current&&(n.current.currentTime+=10)},className:"btn btn-link text-white-50 p-0 d-none d-md-block hover-white",children:e.jsx(Pt,{size:20})})]}),e.jsxs("div",{className:"col-2 col-md-4 d-flex justify-content-end align-items-center gap-2",children:[e.jsx("button",{onClick:()=>w(!x),className:"btn btn-link text-white-50 p-0 hover-white",children:x||h===0?e.jsx(Ut,{size:18}):e.jsx(Rt,{size:18})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:x?0:h,onChange:s=>{l(parseFloat(s.target.value)),parseFloat(s.target.value)>0&&w(!1)},className:"form-range d-none d-md-block",style:{width:"80px"}})]})]})}),e.jsx("style",{children:`
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
      `})]})}const me="/api/audioreportajes",he=window.APP_URL||(window?.location?.origin?`${window.location.origin}`:"/"),Xt=t=>{try{const r=t?t.replace(" ","T"):"",a=new Date(r);if(isNaN(a.getTime()))return t;const n=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];return`${a.getDate()} ${n[a.getMonth()]} ${a.getFullYear()}`}catch{return t}},Qt=async()=>{try{const t=me.startsWith("/")?`${he}${me}`:me,r=await fetch(t);if(!r.ok)throw new Error("API Response not ok");const a=await r.json(),n=r.url;return a.map(h=>{let l=h.imagen||"";if(l&&!l.startsWith("http")){const w=l.startsWith("/")?l.substring(1):l;l=`${he}/${w}`}else l||(l="https://via.placeholder.com/800x600?text=Audio");let x=h.url||"";if(x&&!x.startsWith("http")){const w=x.startsWith("/")?x.substring(1):x;x=`${he}/${w}`}return{id:String(h.id),slug:h.slug||`audio-${h.id}`,title:h.titulo,excerpt:h.entrada,content:h.contenido,date:Xt(h.created_at),duration:"Audio",audioUrl:x,image:l,category:h.categoria||"Reportajes",author:h.autor||"ABC Stereo"}})}catch(t){return console.warn("Error fetching podcasts API, returning fallback data:",t),[{id:"p1",slug:"error-loading",title:"Error cargando datos",excerpt:"No se pudieron cargar los audioreportajes.",content:"",date:"",duration:"",audioUrl:"#",image:"https://via.placeholder.com/800x600?text=Error",category:"Error",author:"Sistema"}]}},Zt=(t,r)=>{const a=Array.from({length:r},()=>[]);return t.forEach((n,h)=>{a[h%r].push(n)}),a},ea=t=>`hsl(${t*47%360} 70% 48%)`;function ta({episodes:t,onPlay:r}){const a=Zt(t,3),n=i.useRef({}),h=w=>{try{const z=document.createElement("canvas"),g=z.getContext("2d");if(!g)return null;const b=20,v=20;z.width=b,z.height=v,g.drawImage(w,0,0,b,v);const y=g.getImageData(0,0,b,v).data;let f=0,d=0,C=0,j=0;for(let k=0;k<y.length;k+=4){if(y[k+3]<128)continue;const A=y[k],S=y[k+1],I=y[k+2];A>240&&S>240&&I>240||(f+=A,d+=S,C+=I,j++)}return j===0?null:(f=Math.round(f/j),d=Math.round(d/j),C=Math.round(C/j),{r:f,g:d,b:C})}catch{return null}},l=i.useCallback((w,z)=>{let g=h(z);const b=n.current[w];if(!b)return;if(!g){const d=z.currentSrc||z.src||w,C=Array.from(d).reduce((S,I)=>S*31+I.charCodeAt(0)|0,0),j=Math.abs(C)%360,k=Math.round(200+Math.sin(j)*30),U=Math.round(180+Math.cos(j)*30),A=Math.round(170+Math.sin(j*.7)*30);g={r:k,g:U,b:A}}const{r:v,g:y,b:f}=g;b.style.background=`linear-gradient(180deg, rgba(${v},${y},${f},0.08), rgba(${v},${y},${f},0.03))`,b.style.border=`1px solid rgba(${v},${y},${f},0.06)`,b.style.color="#0b1220"},[]),x=w=>{window.location.href=te(`audioreportaje/${w.slug}`)};return e.jsxs("section",{className:"top-episodes-section container py-4",children:[e.jsxs("div",{className:"d-flex align-items-end justify-content-between mb-3",children:[e.jsx("h3",{className:"h4 fw-bold mb-0",children:"Lo más escuchado"}),e.jsxs("small",{className:"text-muted d-flex align-items-center gap-1",children:[e.jsx(Ee,{size:14})," Audioreportajes populares"]})]}),e.jsx("div",{className:"te-grid-columns",children:a.map((w,z)=>e.jsx("div",{className:"te-column",children:w.map((g,b)=>{const y=z+b*3+1,f=ea(y);return e.jsxs("div",{className:"te-episode",ref:d=>{n.current[String(g.id)]=d},onClick:()=>x(g),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"te-thumb-area",style:{flex:"0 0 80px"},children:[e.jsx("div",{className:"te-thumb-wrapper",children:e.jsx("img",{src:g.image,alt:g.title,className:"te-thumb",onError:d=>d.currentTarget.src="https://via.placeholder.com/200?text=Audio",onLoad:d=>l(String(g.id),d.currentTarget)})}),e.jsx("button",{type:"button",className:"te-play-btn","aria-label":`Escuchar ${g.title}`,style:{background:f},onClick:d=>{d.stopPropagation(),window.location.href=te(`audioreportaje/${g.slug}`)},children:e.jsx(F,{size:14,className:"text-white",fill:"white"})})]}),e.jsxs("div",{className:"te-meta flex-grow-1",children:[e.jsx("h4",{className:"te-title mb-1",children:g.title}),e.jsx("p",{className:"te-desc mb-1 text-muted",title:g.excerpt,children:g.excerpt}),e.jsxs("div",{className:"te-meta-row text-muted small d-flex justify-content-between",children:[e.jsx("span",{children:g.date}),e.jsx("span",{children:g.duration})]})]})]},g.id)})},z))}),e.jsx("style",{children:`
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
      `})]})}function aa({onBack:t,onPlayPodcast:r,onOpenPodcastInfo:a}){const[n,h]=i.useState("Todos"),[l,x]=i.useState(""),[w,z]=i.useState(0),[g,b]=i.useState(!1),[v,y]=i.useState(!1),[f,d]=i.useState([]),[C,j]=i.useState(!0),[k,U]=i.useState(1),A=8;i.useEffect(()=>{(async()=>{j(!0);const p=await Qt();d(p),j(!1)})()},[]),i.useEffect(()=>{U(1)},[n,l]),i.useEffect(()=>{const o=()=>{const p=document.querySelector("header.fixed-top");p&&z(p.offsetHeight)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),i.useEffect(()=>{const o=()=>{const p=window.scrollY;b(p>60),y(p>300)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const S=i.useMemo(()=>{const o={};f.forEach(N=>{N.category&&(o[N.category]=(o[N.category]||0)+1)});const p=Object.keys(o).sort();return[{name:"Todos",count:f.length},...p.map(N=>({name:N,count:o[N]}))]},[f]),I=i.useMemo(()=>{const o={};return f.forEach(p=>{const N=p.category||"Otros";o[N]||(o[N]=[]),o[N].push(p)}),o},[f]),B=f.filter(o=>{const p=o.title.toLowerCase().includes(l.toLowerCase()),N=n==="Todos"||o.category===n;return p&&N}),T=Math.ceil(B.length/A),V=k*A,Y=V-A,s=B.slice(Y,V),m=o=>{U(o),window.scrollTo({top:0,behavior:"smooth"})},u=(o,p)=>{o.stopPropagation(),window.location.href=te(`audioreportaje/${p.slug}`)},L=o=>{window.location.href=te(`audioreportaje/${o.slug}`)},P=(o,p)=>{o.stopPropagation();const N=te(`audioreportaje/${p.slug}`);navigator.share?navigator.share({title:p.title,text:p.excerpt,url:N}).catch($=>console.log("Error sharing:",$)):navigator.clipboard.writeText(N).then(()=>{alert("¡Link copiado al portapapeles!")})},_=i.useRef({}),Q=o=>{try{const p=document.createElement("canvas"),N=p.getContext("2d");if(!N)return null;const $=24;p.width=$,p.height=$,N.drawImage(o,0,0,$,$);const O=N.getImageData(0,0,$,$).data;let W=0,G=0,q=0,K=0;for(let J=0;J<O.length;J+=4){if(O[J+3]<128)continue;const ne=O[J],re=O[J+1],oe=O[J+2],Z=(ne+re+oe)/3;Z>225||Z<15||(W+=ne,G+=re,q+=oe,K++)}return K===0?null:{r:Math.round(W/K),g:Math.round(G/K),b:Math.round(q/K)}}catch{return null}},c=i.useCallback((o,p)=>{const N=_.current[String(o)];if(!N)return;let $=Q(p);if(!$){const oe=Array.from(p.src).reduce(($e,Ie)=>$e*31+Ie.charCodeAt(0)|0,0),Z=Math.abs(oe)%360;$={r:Math.round(80+Math.sin(Z*.017)*50),g:Math.round(60+Math.cos(Z*.017)*40),b:Math.round(120+Math.sin(Z*.025)*60)}}const{r:O,g:W,b:G}=$,q=.45,K=Math.round(O*q),J=Math.round(W*q),ne=Math.round(G*q);N.style.background=`rgb(${K}, ${J}, ${ne})`,N.style.borderColor=`rgba(${O}, ${W}, ${G}, 0.12)`,N.style.boxShadow=`0 4px 15px rgba(${O}, ${W}, ${G}, 0.12)`;const re=N.querySelector(".ar-body");re&&(re.style.background=`linear-gradient(180deg,
        rgb(${Math.round(O*q)},${Math.round(W*q)},${Math.round(G*q)}) 0%,
        rgb(${Math.round(O*.32)},${Math.round(W*.32)},${Math.round(G*.32)}) 100%)`)},[]),H=o=>e.jsxs("div",{className:"ar-card h-100 cursor-pointer",onClick:()=>L(o),ref:p=>{_.current[String(o.id)]=p},children:[e.jsxs("div",{className:"ar-img-wrap",children:[e.jsx("img",{src:o.image,alt:o.title,className:"ar-img",crossOrigin:"anonymous",onLoad:p=>c(o.id,p.currentTarget),onError:p=>{const N=p.target;N.dataset.errorHandled||(N.dataset.errorHandled="true",N.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%231e1e2e" width="800" height="450"/%3E%3C/svg%3E')}}),e.jsx("div",{className:"ar-img-scrim"})]}),e.jsxs("div",{className:"ar-body",children:[e.jsx("p",{className:"ar-date",children:o.date}),e.jsx("h5",{className:"ar-title",children:o.title}),e.jsx("p",{className:"ar-excerpt",children:o.excerpt}),e.jsxs("div",{className:"ar-footer",children:[e.jsxs("button",{className:"btn btn-sm rounded-pill px-4 py-1 fw-bold border-0 hover-scale d-flex align-items-center gap-1 shadow-sm",onClick:p=>{p.stopPropagation(),u(p,o)},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},children:[e.jsx(F,{size:14,fill:"currentColor"})," Play"]}),e.jsx("button",{className:"ar-share-btn",onClick:p=>{p.stopPropagation(),P(p,o)},title:"Compartir",children:e.jsx(ce,{size:14})})]})]})]});return e.jsxs("div",{className:"bg-gradient-page min-vh-100 animate-fade-in pb-5 position-relative",children:[e.jsxs("div",{className:"header-gradient shadow-lg border-0",style:{position:"sticky",top:w,zIndex:1020,transition:"padding 0.3s ease"},children:[e.jsx("div",{className:"animated-header-bg"}),e.jsxs("div",{className:"container position-relative",style:{zIndex:2,paddingTop:g?"10px":"24px",paddingBottom:g?"10px":"24px",transition:"padding 0.3s ease"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("button",{onClick:t,className:"btn btn-glass rounded-circle p-2 text-white hover-scale transition",children:e.jsx(Le,{size:22})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-center mb-1",children:[e.jsx(Mt,{size:18,className:"text-warning animate-pulse"}),e.jsx("h1",{className:"h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow",children:"AUDIO REPORTAJES"}),e.jsx(Ee,{size:18,className:"text-warning animate-pulse"})]}),!g&&e.jsx("p",{className:"text-white-75 small mb-0",children:"Escucha historias, reportes especiales y mucho más."})]}),e.jsx("div",{style:{width:"42px",height:"42px",flexShrink:0}})]}),e.jsx("div",{className:"podcast-search-wrap mb-2",children:e.jsxs("div",{className:"input-group podcast-search-group",children:[e.jsx("span",{className:"input-group-text podcast-search-icon",children:e.jsx(le,{size:16})}),e.jsx("input",{type:"text",className:"form-control podcast-search-input",placeholder:"Buscar audioreportajes...",value:l,onChange:o=>x(o.target.value)}),l&&e.jsx("button",{className:"btn podcast-search-clear",onClick:()=>x(""),children:e.jsx(de,{size:14})})]})}),e.jsx("div",{className:"d-flex gap-2 overflow-auto pb-1 scrollbar-hide",children:S.map(o=>e.jsxs("button",{onClick:()=>h(o.name),className:`btn category-pill rounded-pill px-3 py-1 small fw-bold text-nowrap transition border-0 ${n===o.name?"category-active":"category-inactive"}`,children:[e.jsx("span",{children:o.name}),e.jsx("span",{className:"badge bg-white bg-opacity-25 ms-2",children:o.count})]},o.name))})]})]}),e.jsx("button",{className:"scroll-top-btn",style:{opacity:v?1:0,pointerEvents:v?"auto":"none",transform:v?"translateY(0)":"translateY(20px)"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Volver arriba",children:"↑"}),e.jsxs("div",{className:"container py-4",children:[f.length>0&&n==="Todos"&&e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3 px-2",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:"🎙️ Todos los Audioreportajes"})]}),e.jsx(ta,{episodes:f.slice(0,9)})]}),C?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"spinner-border text-abc-blue",role:"status"}),e.jsx("p",{className:"text-muted mt-2",children:"Cargando audioreportajes..."})]}):e.jsxs(e.Fragment,{children:[n==="Todos"&&!l&&f.length>0&&e.jsxs("div",{className:"mb-5 px-2",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:"✨ "})]}),e.jsxs("div",{className:"card border-0 rounded-4 shadow-xl overflow-hidden position-relative text-white cursor-pointer featured-card",onClick:()=>L(f[0]),style:{minHeight:"380px"},children:[e.jsx("img",{src:f[0].image,className:"w-100 h-100 object-fit-cover position-absolute top-0 start-0",alt:"Featured",onError:o=>{const p=o.target;p.dataset.errorHandled||(p.dataset.errorHandled="true",p.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e0e0e0" width="800" height="600"/%3E%3C/svg%3E')}}),e.jsx("div",{className:"featured-overlay"}),e.jsxs("div",{className:"card-body position-relative z-1 d-flex flex-column justify-content-end p-4 h-100",children:[e.jsx("h3",{className:"fw-bold font-serif display-6 mb-2 lh-sm text-shadow-strong",children:f[0].title}),e.jsx("p",{className:"text-white-75 line-clamp-2 mb-4",children:f[0].excerpt}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{onClick:o=>u(o,f[0]),className:"btn btn-play-featured rounded-circle p-3 shadow-lg hover-scale",children:e.jsx(F,{size:28,fill:"currentColor"})}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold",children:f[0].duration}),e.jsx("div",{className:"small text-white-75",children:f[0].date})]})]})]})]})]}),e.jsxs("div",{className:"px-2",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"badge-glow"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:n==="Todos"?"📻 Todos los Audioreportajes":`📂 ${n}`})]}),e.jsxs("span",{className:"badge bg-light text-secondary px-3 py-2",children:[B.length," audioreportajes"]})]}),B.length===0?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"text-muted mb-2",style:{fontSize:"3rem"},children:"🔍"}),e.jsx("h4",{className:"text-secondary",children:"No se encontraron audioreportajes"}),e.jsx("p",{className:"text-muted",children:"Intenta con otra categoría o término de búsqueda"})]}):e.jsxs(e.Fragment,{children:[n==="Todos"&&!l?e.jsx("div",{className:"d-flex flex-column gap-5",children:Object.entries(I).map(([o,p])=>e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3 px-2",children:[e.jsxs("h4",{className:"fw-bold mb-0 text-dark d-flex align-items-center gap-2",children:[e.jsx("div",{className:"badge-glow",style:{height:"18px"}}),o]}),e.jsx("button",{onClick:()=>{h(o),window.scrollTo({top:300,behavior:"smooth"})},className:"btn btn-sm btn-link text-decoration-none fw-bold text-abc-blue",children:"Ver más"})]}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 episode-row",children:p.slice(0,8).map((N,$)=>e.jsx("div",{className:"col episode-col",style:{animationDelay:`${$%6*.08}s`,opacity:0,animation:"fadeInUp 0.55s ease forwards"},children:H(N)},N.id))})]},o))}):e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 episode-row",children:s.map((o,p)=>e.jsx("div",{className:"col episode-col",style:{animationDelay:`${p%6*.08}s`,opacity:0,animation:"fadeInUp 0.55s ease forwards"},children:H(o)},o.id))}),T>1&&e.jsx("div",{className:"mt-5",children:e.jsxs("nav",{"aria-label":"Paginación de audioreportajes",children:[e.jsxs("div",{className:"d-flex d-sm-none align-items-center justify-content-between gap-2 px-1",children:[e.jsxs("button",{className:"btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm",onClick:()=>m(k-1),disabled:k===1,style:{minWidth:"90px"},children:[e.jsx(ke,{size:16,className:"me-1"}),"Anterior"]}),e.jsxs("span",{className:"text-muted small fw-semibold",children:[k," / ",T]}),e.jsxs("button",{className:"btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm",onClick:()=>m(k+1),disabled:k===T,style:{minWidth:"90px"},children:["Siguiente",e.jsx(xe,{size:16,className:"ms-1"})]})]}),e.jsxs("ul",{className:"pagination justify-content-center gap-2 d-none d-sm-flex",children:[e.jsx("li",{className:`page-item ${k===1?"disabled":""}`,children:e.jsxs("button",{className:"page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm",onClick:()=>m(k-1),disabled:k===1,children:[e.jsx(ke,{size:18,className:"me-1"}),"Anterior"]})}),Array.from({length:T},(o,p)=>p+1).map(o=>e.jsx("li",{className:`page-item ${k===o?"active":""}`,children:e.jsx("button",{className:`page-link rounded-circle border-2 ${k===o?"bg-abc-red text-white border-abc-red shadow":"bg-white text-abc-blue border-abc-blue"}`,onClick:()=>m(o),style:{width:"40px",height:"40px",fontWeight:"bold"},children:o})},o)),e.jsx("li",{className:`page-item ${k===T?"disabled":""}`,children:e.jsxs("button",{className:"page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm",onClick:()=>m(k+1),disabled:k===T,children:["Siguiente",e.jsx(xe,{size:18,className:"ms-1"})]})})]})]})}),B.length>0&&T<=1&&e.jsx("div",{className:"text-center text-muted mt-4",children:e.jsx("p",{className:"small",children:"✨ Has visto todos los audioreportajes"})})]})]})]})]}),e.jsx("style",{children:`
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
           AUDIOREPORTAJE CARDS — Streaming style
           ═══════════════════════════════════════ */
        .ar-card {
          background: #1e2245;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Sombra sutil inicial */
          border: 1px solid rgba(255,255,255,0.05); /* Borde sutil inicial */
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .ar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12) !important; /* Levitar con sombra suave, usando important para sobreescribir inline JS */
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        /* ── Image area ── */
        .ar-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          flex-shrink: 0;
        }
        .ar-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      filter 0.4s ease;
          display: block;
        }
        .ar-card:hover .ar-img {
          transform: scale(1.08);
          filter: brightness(0.95);
        }

        /* Cinematic gradient scrim */
        .ar-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.1) 30%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* Category badge — glassmorphism */
        .ar-cat-badge {
          position: absolute;
          top: 11px; left: 11px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fff;
          font-size: 0.58rem; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 9px; border-radius: 5px;
        }

        /* Duration — bottom-left, clean pill */
        .ar-duration-badge {
          position: absolute;
          bottom: 10px; left: 11px;
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.9);
          font-size: 0.68rem; font-weight: 700;
          padding: 4px 9px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* ── Play button — always visible, bottom-right of image ── */
        .ar-play-btn {
          position: absolute;
          bottom: 10px; right: 12px;
          top: auto; left: auto;
          transform: scale(0.85);
          opacity: 1;
          width: 42px; height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.25s ease;
          box-shadow: 0 4px 18px rgba(102, 126, 234, 0.55);
          z-index: 4;
        }
        .ar-card:hover .ar-play-btn {
          transform: scale(1);
          box-shadow: 0 8px 28px rgba(102, 126, 234, 0.7);
        }
        .ar-play-btn:hover {
          background: linear-gradient(135deg, #7c91f9 0%, #9b6fcc 100%);
        }

        /* ── Content body ── */
        .ar-body {
          padding: 14px 16px 13px;
          display: flex; flex-direction: column; flex: 1;
          background: #1a2040;
        }

        /* Date — accent colored */
        .ar-date {
          font-size: 0.63rem; color: #818cf8; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin: 0 0 6px;
        }

        /* Title — lighter for dark bg */
        .ar-title {
          font-size: 0.96rem; font-weight: 700; line-height: 1.35;
          color: #f1f5f9; margin: 0 0 7px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
          font-family: Inter, 'Segoe UI', system-ui, sans-serif;
        }
        .ar-card:hover .ar-title { color: #a5b4fc; }

        /* Excerpt */
        .ar-excerpt {
          font-size: 0.8rem; color: rgba(148,163,184,0.85); line-height: 1.5;
          margin: 0 0 13px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden; flex: 1;
        }

        /* Footer */
        .ar-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 10px; margin-top: auto;
        }

        /* "Escuchar" CTA */
        .ar-read-more {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.75rem; font-weight: 700; color: #818cf8;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .ar-card:hover .ar-read-more { gap: 7px; color: #a5b4fc; }

        /* Share button */
        .ar-share-btn {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12); background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: rgba(148,163,184,0.7); cursor: pointer;
          transition: all 0.2s ease;
        }
        .ar-share-btn:hover {
          border-color: #818cf8; color: #818cf8;
          background: rgba(129, 140, 248, 0.1);
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

        @media (max-width: 575px) {
          .episode-row {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 20px; 
            margin-right: -10px;
            margin-left: -10px;
          }
          .episode-col {
            flex: 0 0 66vw;
            max-width: 66vw;
            scroll-snap-align: start;
            padding-right: 8px;
            padding-left: 8px;
          }
          .episode-row::-webkit-scrollbar {
            display: none;
          }
        }
      `})]})}function sa({episode:t,isOpen:r,onClose:a,onPlay:n}){const h=i.useRef(null);return i.useEffect(()=>{const l=x=>{x.key==="Escape"&&a()};return r&&(window.addEventListener("keydown",l),setTimeout(()=>h.current?.focus(),50)),()=>window.removeEventListener("keydown",l)},[r,a]),!t||!r?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed-top w-100 h-100 backdrop-modern",style:{zIndex:1075},onClick:a}),e.jsx("div",{ref:h,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":t.title,className:"fixed-bottom w-100 bg-white shadow-lg info-sheet-container",style:{borderTopLeftRadius:"24px",borderTopRightRadius:"24px",zIndex:1080},children:e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsxs("div",{className:"px-4 pt-3 pb-2 border-bottom sticky-top bg-white rounded-top-4",children:[e.jsx("div",{className:"w-100 d-flex justify-content-center mb-2",onClick:a,children:e.jsx("div",{className:"bg-secondary bg-opacity-25 rounded-pill cursor-pointer hover-darker transition",style:{width:"40px",height:"5px"}})}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx("img",{src:t.image,className:"rounded shadow-sm object-fit-cover",style:{width:"50px",height:"50px"},alt:t.title,onError:l=>l.target.src="https://via.placeholder.com/400?text=Audio"}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("span",{className:"badge bg-abc-blue align-self-start",style:{fontSize:"0.6rem"},children:t.category}),e.jsx("h6",{className:"fw-bold m-0 line-clamp-1",children:t.title})]})]}),e.jsx("div",{className:"d-flex gap-2",children:e.jsx("button",{onClick:a,className:"btn btn-light rounded-circle p-2 text-secondary hover-bg-gray transition",title:"Minimizar / Cerrar",children:e.jsx(wt,{size:20})})})]})]}),e.jsx("div",{className:"p-4 pt-2 overflow-auto custom-scroll",style:{flexGrow:1},children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-lg-10",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 my-4 bg-light p-3 rounded-4 border border-light",children:[e.jsxs("div",{className:"d-flex flex-column flex-grow-1",children:[e.jsx("small",{className:"text-muted text-uppercase fw-bold mb-1",style:{fontSize:"0.7rem",letterSpacing:"0.5px"},children:"Escuchar Ahora"}),e.jsxs("div",{className:"d-flex align-items-center gap-2 small text-secondary",children:[e.jsx(ue,{size:14})," ",e.jsx("span",{className:"fw-medium",children:t.duration}),e.jsx("span",{className:"text-black-50",children:"•"}),e.jsx("span",{children:t.date})]})]}),e.jsxs("button",{onClick:()=>n(t),className:"btn btn-abc-red text-white fw-bold rounded-pill px-4 py-3 d-flex align-items-center gap-2 shadow-sm hover-scale transition-all",children:[e.jsx(F,{size:20,fill:"currentColor"})," ",e.jsx("span",{className:"d-none d-sm-inline",children:"Reproducir"})]})]}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("h5",{className:"fw-bold mb-4 font-serif text-secondary d-flex align-items-center gap-2 border-bottom pb-2",children:[e.jsx(He,{size:20,className:"text-abc-blue"})," Detalles del Episodio"]}),e.jsx("div",{className:"text-secondary lh-lg fs-6 article-content",dangerouslySetInnerHTML:{__html:String(t.content||"")}})]}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 mt-5 pt-4 border-top",children:[e.jsx("button",{className:"btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition",children:e.jsx(ot,{size:22})}),e.jsx("button",{className:"btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition",children:e.jsx(ce,{size:22})})]}),e.jsx("div",{className:"text-center mt-3 mb-5 pb-5",children:e.jsx("small",{className:"text-muted opacity-50",children:"Radio ABC Stereo Podcast"})})]})})})]})}),e.jsx("style",{children:`
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
      `})]})}const se=t=>{const r=window.location.origin;let a="";return t.type==="video"?a="video-reportajes":t.type==="audio"?a="audio-reportajes":t.type==="article"&&(a="nota"),`${r}/${a}/${t.slug}`},ra=async t=>{try{return await navigator.clipboard.writeText(t),!0}catch{const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.left="-999999px",document.body.appendChild(a),a.select();try{return document.execCommand("copy"),document.body.removeChild(a),!0}catch{return document.body.removeChild(a),!1}}},oa=async t=>{if(!navigator.share)return!1;try{const r=se(t);return await navigator.share({title:t.title,text:`Mira este ${t.type==="video"?"video reportaje":"audio reportaje"}: ${t.title}`,url:r}),!0}catch{return!1}},na=t=>{const r=se(t),a=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r)}`;window.open(a,"_blank","width=600,height=400")},ia=t=>{const r=se(t),a=`${t.title} - ABC Stereo`,n=`https://twitter.com/intent/tweet?url=${encodeURIComponent(r)}&text=${encodeURIComponent(a)}`;window.open(n,"_blank","width=600,height=400")},la=t=>{const r=se(t),a=`${t.title} - ${r}`,n=`https://wa.me/?text=${encodeURIComponent(a)}`;window.open(n,"_blank")},ca=t=>{const r=se(t),a=encodeURIComponent(`${t.title} - ABC Stereo`),n=encodeURIComponent(`Te comparto este ${t.type==="video"?"video reportaje":"audio reportaje"}:

${t.title}

${r}`);window.location.href=`mailto:?subject=${a}&body=${n}`};function be({content:t,variant:r="icon",className:a=""}){const[n,h]=i.useState(!1),[l,x]=i.useState(!1),w=async()=>{const b=se(t);await ra(b)&&(x(!0),setTimeout(()=>x(!1),2e3))},z=async()=>{await oa(t)&&h(!1)},g=b=>{switch(b){case"facebook":na(t);break;case"twitter":ia(t);break;case"whatsapp":la(t);break;case"email":ca(t);break}h(!1)};return e.jsxs("div",{className:"share-button-container position-relative",children:[e.jsxs("button",{className:`share-trigger-btn ${r==="button"?"btn-share":"btn-share-icon"} ${a}`,onClick:b=>{b.stopPropagation(),h(!n)},title:"Compartir",children:[e.jsx(ce,{size:r==="button"?18:20}),r==="button"&&e.jsx("span",{className:"ms-2",children:"Compartir"})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"share-menu-backdrop",onClick:()=>h(!1)}),e.jsxs("div",{className:"share-menu",children:[e.jsxs("div",{className:"share-menu-header",children:[e.jsx("h6",{className:"mb-0 fw-bold",children:"Compartir"}),e.jsx("button",{className:"btn-close-menu",onClick:()=>h(!1),children:"✕"})]}),e.jsxs("div",{className:"share-menu-body",children:["share"in navigator&&e.jsxs("button",{className:"share-option",onClick:z,children:[e.jsx("div",{className:"share-icon bg-primary",children:e.jsx(ce,{size:18})}),e.jsx("span",{children:"Compartir..."})]}),e.jsxs("button",{className:"share-option",onClick:w,children:[e.jsx("div",{className:`share-icon ${l?"bg-success":"bg-secondary"}`,children:l?e.jsx(qe,{size:18}):e.jsx(lt,{size:18})}),e.jsx("span",{children:l?"¡Copiado!":"Copiar enlace"})]}),e.jsxs("button",{className:"share-option",onClick:()=>g("facebook"),children:[e.jsx("div",{className:"share-icon bg-facebook",children:e.jsx(ie,{size:18})}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("button",{className:"share-option",onClick:()=>g("twitter"),children:[e.jsx("div",{className:"share-icon bg-twitter",children:e.jsx(It,{size:18})}),e.jsx("span",{children:"Twitter"})]}),e.jsxs("button",{className:"share-option",onClick:()=>g("whatsapp"),children:[e.jsx("div",{className:"share-icon bg-whatsapp",children:e.jsx(Ae,{size:18})}),e.jsx("span",{children:"WhatsApp"})]}),e.jsxs("button",{className:"share-option",onClick:()=>g("email"),children:[e.jsx("div",{className:"share-icon bg-email",children:e.jsx(mt,{size:18})}),e.jsx("span",{children:"Email"})]})]})]})]}),e.jsx("style",{children:`
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
      `})]})}const da=t=>{if(!t)return"";try{return new Date(t).toLocaleDateString("es-NI",{day:"2-digit",month:"short",year:"numeric"})}catch{return t}},pa=t=>({id:String(t.id??""),title:t.title??"",description:t.description??"",thumbnail:t.thumbnail??"",videoUrl:t.videoUrl??"",date:da(t.date??""),location:"Nicaragua",duration:t.duration??"",category:t.category??"ABC TV"}),ma=async(t="",r=10)=>{try{const a=new URLSearchParams({maxResults:String(r)});t&&a.set("q",t);const n=await fetch(`/youtube?${a.toString()}`);if(!n.ok)throw new Error(`Error fetching videos: ${n.status}`);const h=await n.json();return Array.isArray(h)?h.map(pa):[]}catch(a){return console.error("[youtubeService]",a),[]}};function ha({onBack:t}){const[r,a]=i.useState("Todos"),[n,h]=i.useState(""),[l,x]=i.useState("grid"),[w,z]=i.useState(null),[g,b]=i.useState(6),[v,y]=i.useState(!1),[f,d]=i.useState(0),[C,j]=i.useState(!1),[k,U]=i.useState(!1),[A,S]=i.useState(null),[I,B]=i.useState([]),[T,V]=i.useState(!0),Y=i.useRef(null);i.useEffect(()=>{(async()=>{V(!0);try{const o=(await ma("",50)).map((p,N)=>({id:p.id,slug:p.id,title:p.title,description:p.description,thumbnail:p.thumbnail,videoUrl:p.videoUrl,category:"Reportajes",date:new Date(p.date).toLocaleDateString(),duration:"",views:"",featured:N===0}));B(o)}catch(H){console.error("Error loading videos:",H)}finally{V(!1)}})()},[]),i.useEffect(()=>{(async()=>{try{const p=await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UC4jgoYzXPyiQ-JejLctLtlA&key=tAIzaSyA4toPjybYLOGNdMlbFpURBByEy6DWdCUY");if(!p.ok)return;const N=await p.json();if(N.items&&N.items.length>0){const $=N.items[0];S({title:$.snippet.title,subscribers:$.statistics.subscriberCount,views:$.statistics.viewCount,videos:$.statistics.videoCount,thumbnail:$.snippet.thumbnails?.default?.url||""})}}catch(H){console.error("Error fetching channel info:",H)}})()},[]);const s=i.useMemo(()=>{const c={};I.forEach(o=>{c[o.category]=(c[o.category]||0)+1});const H=Object.keys(c).sort();return[{name:"Todos",count:I.length},...H.map(o=>({name:o,count:c[o]}))]},[I]),m=i.useMemo(()=>I.filter(c=>{const H=c.title.toLowerCase().includes(n.toLowerCase())||c.description.toLowerCase().includes(n.toLowerCase()),o=r==="Todos"||c.category===r;return H&&o}),[r,n,I]),u=m.slice(0,g),L=g<m.length;i.useEffect(()=>{b(6)},[r,n]),i.useEffect(()=>{const c=()=>{const H=document.querySelector("header.fixed-top");H&&d(H.offsetHeight)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),i.useEffect(()=>{const c=()=>{const H=window.scrollY;j(H>60),U(H>300)};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]);const P=i.useCallback(()=>{v||!L||(y(!0),setTimeout(()=>{b(c=>c+6),y(!1)},500))},[v,L]);i.useEffect(()=>{const c=new IntersectionObserver(o=>{o[0].isIntersecting&&L&&!v&&P()},{threshold:.1}),H=Y.current;return H&&c.observe(H),()=>{H&&c.unobserve(H)}},[L,v,P]);const _=c=>{z(c)},Q=()=>{z(null)};return e.jsxs("div",{className:"video-reportajes-container min-vh-100 pb-5",children:[w&&e.jsx("div",{className:"video-player-modal",onClick:Q,children:e.jsxs("div",{className:"video-player-content",onClick:c=>c.stopPropagation(),children:[e.jsx("button",{className:"close-player-btn",onClick:Q,children:"✕"}),e.jsx("div",{className:"ratio ratio-16x9 mb-3",children:e.jsx("iframe",{src:`${w.videoUrl}?autoplay=1&rel=0`,title:w.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx("span",{className:"badge bg-abc-red",children:w.category}),e.jsx("span",{className:"text-muted small",children:w.date}),e.jsxs("span",{className:"text-muted small",children:["• ",w.duration]}),e.jsxs("span",{className:"text-muted small",children:["• ",w.views," vistas"]}),e.jsx("div",{className:"ms-auto",children:w.slug&&e.jsx(be,{content:{title:w.title,slug:w.slug,type:"video"},variant:"button"})})]}),e.jsx("h3",{className:"h4 fw-bold mb-2",children:w.title}),e.jsx("p",{className:"text-muted",children:w.description})]})]})}),e.jsxs("div",{className:"header-gradient shadow-lg border-0",style:{position:"sticky",top:f,zIndex:1020,transition:"padding 0.3s ease"},children:[e.jsx("div",{className:"animated-header-bg"}),e.jsxs("div",{className:"container position-relative",style:{zIndex:2,paddingTop:C?"10px":"24px",paddingBottom:C?"10px":"24px",transition:"padding 0.3s ease"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("button",{onClick:t,className:"btn btn-glass rounded-circle p-2 text-white hover-scale transition",children:e.jsx(Le,{size:22})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 justify-content-center mb-1",children:[e.jsx(Me,{size:18,className:"text-warning animate-pulse"}),e.jsx("h1",{className:"h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow",children:"VIDEO REPORTAJES"}),e.jsx(Me,{size:18,className:"text-warning animate-pulse"})]}),!C&&!A&&e.jsx("p",{className:"text-white-75 small mb-0",children:"Mira nuestros trabajos audiovisuales: noticias, reportajes especiales y más."}),!C&&A&&e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-3 mt-3 bg-black bg-opacity-25 rounded-pill p-2 px-4 shadow-sm border border-white border-opacity-10 d-inline-flex mx-auto",children:[e.jsx("img",{src:A.thumbnail,className:"rounded-circle shadow",style:{width:44,height:44},alt:A.title}),e.jsxs("div",{className:"text-start",children:[e.jsx("div",{className:"fw-bold text-white fs-6 lh-1",children:A.title}),e.jsxs("div",{className:"text-white-50 small mt-1",style:{fontSize:"0.75rem"},children:[Number(A.subscribers).toLocaleString("es")," subs • ",Number(A.videos).toLocaleString("es")," videos • ",Number(A.views).toLocaleString("es")," vistas"]})]}),e.jsxs("a",{href:"https://www.youtube.com/channel/UC4jgoYzXPyiQ-JejLctLtlA?sub_confirmation=1",target:"_blank",rel:"noreferrer",className:"btn btn-sm btn-danger rounded-pill fw-bold ms-3 px-3 shadow-sm hover-scale text-uppercase d-flex align-items-center gap-1",style:{fontSize:"0.7rem"},children:[e.jsx(F,{size:10,fill:"currentColor"})," Suscribirse"]})]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{className:`btn btn-glass rounded-circle p-2 text-white hover-scale${l==="grid"?" active":""}`,onClick:()=>x("grid"),title:"Vista cuadrícula",children:e.jsx(at,{size:20})}),e.jsx("button",{className:`btn btn-glass rounded-circle p-2 text-white hover-scale${l==="list"?" active":""}`,onClick:()=>x("list"),title:"Vista lista",children:e.jsx(dt,{size:20})})]})]}),e.jsx("div",{className:"podcast-search-wrap mb-2",children:e.jsxs("div",{className:"input-group podcast-search-group",children:[e.jsx("span",{className:"input-group-text podcast-search-icon",children:e.jsx(le,{size:16})}),e.jsx("input",{type:"text",className:"form-control podcast-search-input",placeholder:"Buscar reportajes...",value:n,onChange:c=>h(c.target.value)}),n&&e.jsx("button",{className:"btn podcast-search-clear",onClick:()=>h(""),children:e.jsx(de,{size:14})})]})}),e.jsx("div",{className:"d-flex gap-2 overflow-auto pb-1 scrollbar-hide",children:s.map(c=>e.jsxs("button",{onClick:()=>a(c.name),className:`btn category-pill rounded-pill px-3 py-1 small fw-bold text-nowrap transition border-0 ${r===c.name?"category-active":"category-inactive"}`,children:[e.jsx("span",{children:c.name}),e.jsx("span",{className:"badge bg-white bg-opacity-25 ms-2",children:c.count})]},c.name))})]})]}),e.jsx("button",{className:"scroll-top-btn",style:{opacity:k?1:0,pointerEvents:k?"auto":"none",transform:k?"translateY(0)":"translateY(20px)"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Volver arriba",children:"↑"}),e.jsxs("div",{className:"container py-4",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4 px-2",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"stat-badge"}),e.jsx("h3",{className:"h5 fw-bold text-dark mb-0",children:r==="Todos"?"🎬 Todos los Videos":`📂 ${r}`})]}),e.jsxs("span",{className:"badge bg-light text-secondary px-3 py-2",children:[m.length," videos"]})]}),T?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"spinner-border text-abc-red mb-3",role:"status"}),e.jsx("p",{className:"text-muted",children:"Cargando videos..."})]}):m.length===0?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("div",{className:"text-muted mb-2",style:{fontSize:"3rem"},children:"🔍"}),e.jsx("h4",{className:"text-secondary",children:"No se encontraron videos"}),e.jsx("p",{className:"text-muted",children:"Intenta con otra categoría o búsqueda"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:l==="grid"?"row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4":"d-flex flex-column gap-3",children:u.map((c,H)=>e.jsx("div",{className:l==="grid"?"col":"",style:{animationDelay:`${H%6*.1}s`,opacity:0,animation:"fadeInUp 0.6s ease forwards"},children:l==="grid"?e.jsxs("div",{className:"video-card",onClick:()=>_(c),children:[e.jsxs("div",{className:"video-thumbnail",children:[e.jsx("img",{src:c.thumbnail,alt:c.title}),e.jsx("div",{className:"video-overlay",children:e.jsx("div",{className:"play-button",children:e.jsx(F,{size:40,fill:"white"})})}),e.jsx("span",{className:"duration-badge",children:c.duration}),c.featured&&e.jsx("span",{className:"featured-badge",children:"⭐ Destacado"}),c.slug&&e.jsx("div",{className:"share-btn-overlay",onClick:o=>o.stopPropagation(),children:e.jsx(be,{content:{title:c.title,slug:c.slug,type:"video"},variant:"icon"})})]}),e.jsxs("div",{className:"video-info",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[e.jsx("span",{className:"category-badge",children:c.category}),e.jsxs("span",{className:"views-count",children:[e.jsx(Ne,{size:14})," ",c.views]})]}),e.jsx("h5",{className:"video-title",children:c.title}),e.jsx("p",{className:"video-description",children:c.description}),e.jsxs("div",{className:"video-meta",children:[e.jsxs("span",{children:[e.jsx(ve,{size:14})," ",c.date]}),e.jsxs("span",{children:[e.jsx(ue,{size:14})," ",c.duration]})]})]})]}):e.jsxs("div",{className:"video-card-list",onClick:()=>_(c),children:[e.jsxs("div",{className:"video-thumbnail-list",children:[e.jsx("img",{src:c.thumbnail,alt:c.title}),e.jsx("div",{className:"video-overlay",children:e.jsx(F,{size:32,fill:"white"})}),e.jsx("span",{className:"duration-badge",children:c.duration})]}),e.jsxs("div",{className:"video-info-list",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx("span",{className:"category-badge",children:c.category}),c.featured&&e.jsx("span",{className:"featured-badge-small",children:"⭐"})]}),e.jsx("h5",{className:"video-title-list",children:c.title}),e.jsx("p",{className:"video-description-list",children:c.description}),e.jsxs("div",{className:"d-flex align-items-center gap-3 text-muted small",children:[e.jsxs("span",{children:[e.jsx(ve,{size:14})," ",c.date]}),e.jsxs("span",{children:[e.jsx(Ne,{size:14})," ",c.views]}),e.jsxs("span",{children:[e.jsx(ue,{size:14})," ",c.duration]})]})]}),c.slug&&e.jsx("div",{onClick:o=>o.stopPropagation(),children:e.jsx(be,{content:{title:c.title,slug:c.slug,type:"video"},variant:"icon"})}),e.jsx(xe,{size:24,className:"text-muted"})]})},c.id))}),e.jsxs("div",{ref:Y,className:"py-4",children:[v&&e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"spinner-border text-abc-red",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Cargando más..."})}),e.jsx("p",{className:"text-muted mt-2 small",children:"Cargando más videos..."})]}),!L&&u.length>0&&e.jsx("div",{className:"text-center text-muted",children:e.jsx("p",{className:"small",children:"✨ Has visto todos los videos"})})]})]})]}),e.jsx("style",{children:`
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
      `})]})}function ba({children:t}){const[r,a]=i.useState({isPlaying:!1,type:"live",data:{title:"Radio ABC",audioUrl:""}}),n=()=>{a(d=>({...d,isPlaying:!d.isPlaying,type:"live"}))},h=()=>{a(d=>({...d,isPlaying:!d.isPlaying}))},[l,x]=i.useState("default");i.useEffect(()=>{const d=window.location.hash;d==="#audioreportajes"?x("podcastview"):d==="#videos"&&x("videoreportajes");const C=()=>{const j=window.location.hash;x(j==="#audioreportajes"?"podcastview":j==="#videos"?"videoreportajes":"default")};return window.addEventListener("popstate",C),()=>window.removeEventListener("popstate",C)},[]),i.useEffect(()=>{const d=()=>{a(C=>({...C,isPlaying:!1}))};return window.addEventListener("abc:stop-audio",d),()=>window.removeEventListener("abc:stop-audio",d)},[]),i.useEffect(()=>{const d=C=>{const j=C.detail;j&&a({type:"podcast",isPlaying:!0,data:{id:j.id,title:j.title||j.titulo,subtitle:j.author||j.autor||"ABC Stereo",imageUrl:j.imageUrl||j.image||j.imagen,audioUrl:j.audioUrl||j.url||j.audio}})};return window.addEventListener("abc:play-podcast",d),()=>window.removeEventListener("abc:play-podcast",d)},[]);const[w,z]=i.useState(null),[g,b]=i.useState(!1),v=d=>{if(d==="podcast"||d==="podcastview"){x("podcastview"),window.history.pushState(null,"","#audioreportajes");return}if(d==="videos"||d==="videoreportajes"){x("videoreportajes"),window.history.pushState(null,"","#videos");return}x("default"),window.history.pushState(null,"",window.location.pathname)},y=d=>{z(d),b(!0)},f=d=>{a({type:"podcast",isPlaying:!0,data:{id:d.id,title:d.title,subtitle:d.author||d.subtitle,imageUrl:d.image||d.imageUrl,audioUrl:d.audioUrl||d.audio}})};return e.jsxs("div",{className:"d-flex flex-column min-vh-100 bg-light",children:[e.jsx(Vt,{audioState:r,onPlayLive:n,onNavigate:v}),e.jsx("main",{className:"flex-grow-1 main-content-offset",style:{paddingBottom:"100px"},children:l==="podcastview"?e.jsx(aa,{onBack:()=>x("default"),onOpenPodcastInfo:d=>y(d),onPlayPodcast:d=>f(d)}):l==="videoreportajes"?e.jsx(ha,{onBack:()=>x("default")}):t}),e.jsx(sa,{episode:w,isOpen:g,onClose:()=>b(!1),onPlay:d=>f(d)}),e.jsx(Ft,{}),e.jsx(Kt,{audioState:r,onTogglePlay:h})]})}function ga(t){return e.jsx(ba,{children:t})}export{Le as A,ve as C,Wt as D,Ne as E,ie as F,at as G,ot as H,dt as L,bt as M,F as P,Mt as R,ce as S,It as T,Rt as V,de as X,ee as a,qe as b,M as c,ue as d,xe as e,ke as f,jt as g,mt as h,St as i,ae as j,Jt as k,na as l,le as m,Gt as n,Ae as o,Ee as p,oa as s,pe as t,ga as w};
