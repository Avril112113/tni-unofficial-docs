import{a as ca,c as M}from"./chunk-4CGHOHIL.js";import{a as S,c as l,d as T,e as vo,f as C,h as ha}from"./chunk-Y56QUG5U.js";import{d as k}from"./chunk-D3CDZWZC.js";import{a as D}from"./chunk-K5XJCTEY.js";import{a as Pt}from"./chunk-QI7WYJ2X.js";import{a as da,h as wo,i as yo,j as xo}from"./chunk-BFACGS52.js";import{a as b,b as na,c as la,d as go,e as ze}from"./chunk-NXW57STB.js";import{f as pa,g as ua}from"./chunk-UMUF4JBH.js";import{b as $l}from"./chunk-QH3SRDGB.js";var Jr="",Tl="",ti="";function ko(t){Jr=t}function mr(t=""){if(!Jr){let e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){let o=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;ko(o)}else{let r=[...document.getElementsByTagName("script")].find(a=>a.src.endsWith("webawesome.js")||a.src.endsWith("webawesome.loader.js")||a.src.endsWith("webawesome.ssr-loader.js"));if(r){let a=String(r.getAttribute("src"));ko(a.split("/").slice(0,-1).join("/"))}}}return Jr.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function fr(){return Tl.replace(/\/$/,"")}function ei(t){ti=t}function br(){if(!ti){let t=document.querySelector("[data-fa-kit-code]");t&&ei(t.getAttribute("data-fa-kit-code")||"")}return ti}var _l=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,ma=t=>{throw TypeError(t)},i=(t,e,o,r)=>{for(var a=r>1?void 0:r?Dl(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&_l(e,o,a),a},fa=(t,e,o)=>e.has(t)||ma("Cannot "+o),ba=(t,e,o)=>(fa(t,e,"read from private field"),o?o.call(t):e.get(t)),ga=(t,e,o)=>e.has(t)?ma("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),va=(t,e,o,r)=>(fa(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);var _p=new MutationObserver(t=>{for(let{addedNodes:e}of t)for(let o of e)o.nodeType===Node.ELEMENT_NODE&&wa(o)});async function wa(t){let e=t instanceof Element?t.tagName.toLowerCase():"",o=e?.startsWith("wa-"),r=[...t.querySelectorAll(":not(:defined)")].map(h=>h.tagName.toLowerCase()).filter(h=>h.startsWith("wa-"));o&&!customElements.get(e)&&r.push(e);let a=t.querySelectorAll("[data-wa-preload]"),s=t instanceof Element&&t.hasAttribute("data-wa-preload")?[t,...a]:a;for(let h of s)r.push(...h.getAttribute("data-wa-preload").split(/\s+/).filter(u=>u.startsWith("wa-")));let n=[...new Set(r)],c=await Promise.allSettled(n.map(h=>Rl(h)));for(let h of c)h.status==="rejected"&&console.warn(h.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Rl(t){if(customElements.get(t))return Promise.resolve();let e=t.replace(/^wa-/i,""),o=mr(`components/${e}/${e}.js`);return new Promise((r,a)=>{import(o).then(()=>r()).catch(()=>a(new Error(`Unable to autoload <${t}> from ${o}`)))})}var Co={};$l(Co,{backInDown:()=>Yl,backInLeft:()=>Xl,backInRight:()=>Gl,backInUp:()=>Zl,backOutDown:()=>Ql,backOutLeft:()=>Jl,backOutRight:()=>tc,backOutUp:()=>ec,bounce:()=>Pl,bounceIn:()=>oc,bounceInDown:()=>rc,bounceInLeft:()=>ic,bounceInRight:()=>ac,bounceInUp:()=>sc,bounceOut:()=>nc,bounceOutDown:()=>lc,bounceOutLeft:()=>cc,bounceOutRight:()=>hc,bounceOutUp:()=>dc,easings:()=>oi,fadeIn:()=>pc,fadeInBottomLeft:()=>uc,fadeInBottomRight:()=>mc,fadeInDown:()=>fc,fadeInDownBig:()=>bc,fadeInLeft:()=>gc,fadeInLeftBig:()=>vc,fadeInRight:()=>wc,fadeInRightBig:()=>yc,fadeInTopLeft:()=>xc,fadeInTopRight:()=>kc,fadeInUp:()=>Cc,fadeInUpBig:()=>Sc,fadeOut:()=>Ec,fadeOutBottomLeft:()=>zc,fadeOutBottomRight:()=>Lc,fadeOutDown:()=>Ac,fadeOutDownBig:()=>$c,fadeOutLeft:()=>Tc,fadeOutLeftBig:()=>_c,fadeOutRight:()=>Dc,fadeOutRightBig:()=>Ic,fadeOutTopLeft:()=>Rc,fadeOutTopRight:()=>Pc,fadeOutUp:()=>Oc,fadeOutUpBig:()=>Mc,flash:()=>Ol,flip:()=>Fc,flipInX:()=>Bc,flipInY:()=>Vc,flipOutX:()=>Wc,flipOutY:()=>qc,headShake:()=>Ml,heartBeat:()=>Fl,hinge:()=>dh,jackInTheBox:()=>ph,jello:()=>Bl,lightSpeedInLeft:()=>Hc,lightSpeedInRight:()=>Nc,lightSpeedOutLeft:()=>Uc,lightSpeedOutRight:()=>jc,pulse:()=>Vl,rollIn:()=>uh,rollOut:()=>mh,rotateIn:()=>Kc,rotateInDownLeft:()=>Yc,rotateInDownRight:()=>Xc,rotateInUpLeft:()=>Gc,rotateInUpRight:()=>Zc,rotateOut:()=>Qc,rotateOutDownLeft:()=>Jc,rotateOutDownRight:()=>th,rotateOutUpLeft:()=>eh,rotateOutUpRight:()=>oh,rubberBand:()=>Wl,shake:()=>ql,shakeX:()=>Hl,shakeY:()=>Nl,slideInDown:()=>rh,slideInLeft:()=>ih,slideInRight:()=>ah,slideInUp:()=>sh,slideOutDown:()=>nh,slideOutLeft:()=>lh,slideOutRight:()=>ch,slideOutUp:()=>hh,swing:()=>Ul,tada:()=>jl,wobble:()=>Kl,zoomIn:()=>fh,zoomInDown:()=>bh,zoomInLeft:()=>gh,zoomInRight:()=>vh,zoomInUp:()=>wh,zoomOut:()=>yh,zoomOutDown:()=>xh,zoomOutLeft:()=>kh,zoomOutRight:()=>Ch,zoomOutUp:()=>Sh});var Pl=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var Ol=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var Ml=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var Fl=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var Bl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Vl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Wl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var ql=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Hl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ul=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var jl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Kl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Yl=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Xl=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Gl=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Zl=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Ql=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var Jl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var tc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var ec=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var oc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var rc=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var ic=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var ac=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sc=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var nc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var lc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var cc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var hc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var dc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var pc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var uc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var mc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var fc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var bc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var gc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var vc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var wc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var yc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var xc=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var kc=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Cc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Sc=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Ec=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var zc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var Lc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var Ac=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var $c=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var Tc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var _c=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var Dc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var Ic=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var Rc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var Pc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var Oc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var Mc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var Fc=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var Bc=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Vc=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Wc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var qc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var Hc=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Nc=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Uc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var jc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var Kc=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Yc=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Xc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Gc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Zc=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Qc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var Jc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var th=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var eh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var oh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var rh=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var ih=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var ah=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sh=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var lh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var ch=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var hh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var dh=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var ph=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var uh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var mh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var fh=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var bh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var gh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var vh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var wh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var yh=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var xh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var kh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var Ch=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var Sh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var oi={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var ri=new Set,So=new Map,oo,ii="ltr",ai="en",ya=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ya){let t=new MutationObserver(xa);ii=document.documentElement.dir||"ltr",ai=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Eo(...t){t.map(e=>{let o=e.$code.toLowerCase();So.has(o)?So.set(o,Object.assign(Object.assign({},So.get(o)),e)):So.set(o,e),oo||(oo=e)}),xa()}function xa(){ya&&(ii=document.documentElement.dir||"ltr",ai=document.documentElement.lang||navigator.language),[...ri.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var gr=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ri.add(this.host)}hostDisconnected(){ri.delete(this.host)}dir(){return`${this.host.dir||ii}`.toLowerCase()}lang(){return`${this.host.lang||ai}`.toLowerCase()}getTranslationData(e){var o,r;let a;try{a=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let s=a.language.toLowerCase(),n=(r=(o=a.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",c=So.get(`${s}-${n}`),h=So.get(s);return{locale:a,language:s,region:n,primary:c,secondary:h}}exists(e,o){var r;let{primary:a,secondary:s}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(a&&a[e]||s&&s[e]||o.includeFallback&&oo&&oo[e])}term(e,...o){let{primary:r,secondary:a}=this.getTranslationData(this.lang()),s;if(r&&r[e])s=r[e];else if(a&&a[e])s=a[e];else if(oo&&oo[e])s=oo[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,o)}};var ka={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};Eo(ka);var Ca=ka;var I=class extends gr{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};Eo(Ca);var Sa="7.2.0";function si(t,e,o){let r="solid";return e==="chisel"&&(r="chisel-regular"),e==="etch"&&(r="etch-solid"),e==="graphite"&&(r="graphite-thin"),e==="jelly"&&(r="jelly-regular",o==="duo-regular"&&(r="jelly-duo-regular"),o==="fill-regular"&&(r="jelly-fill-regular")),e==="jelly-duo"&&(r="jelly-duo-regular"),e==="jelly-fill"&&(r="jelly-fill-regular"),e==="notdog"&&(o==="solid"&&(r="notdog-solid"),o==="duo-solid"&&(r="notdog-duo-solid")),e==="notdog-duo"&&(r="notdog-duo-solid"),e==="slab"&&((o==="solid"||o==="regular")&&(r="slab-regular"),o==="press-regular"&&(r="slab-press-regular")),e==="slab-press"&&(r="slab-press-regular"),e==="thumbprint"&&(r="thumbprint-light"),e==="utility"&&(r="utility-semibold"),e==="utility-duo"&&(r="utility-duo-semibold"),e==="utility-fill"&&(r="utility-fill-semibold"),e==="whiteboard"&&(r="whiteboard-semibold"),e==="classic"&&(o==="thin"&&(r="thin"),o==="light"&&(r="light"),o==="regular"&&(r="regular"),o==="solid"&&(r="solid")),e==="duotone"&&(o==="thin"&&(r="duotone-thin"),o==="light"&&(r="duotone-light"),o==="regular"&&(r="duotone-regular"),o==="solid"&&(r="duotone")),e==="sharp"&&(o==="thin"&&(r="sharp-thin"),o==="light"&&(r="sharp-light"),o==="regular"&&(r="sharp-regular"),o==="solid"&&(r="sharp-solid")),e==="sharp-duotone"&&(o==="thin"&&(r="sharp-duotone-thin"),o==="light"&&(r="sharp-duotone-light"),o==="regular"&&(r="sharp-duotone-regular"),o==="solid"&&(r="sharp-duotone-solid")),e==="brands"&&(r="brands"),r}function Eh(t,e,o){let r=si(t,e,o),a=fr();if(a)return`${a}/${r}/${t}.svg`;let s=br();return s.length>0?`https://ka-p.fontawesome.com/releases/v${Sa}/svgs/${r}/${t}.svg?token=${encodeURIComponent(s)}`:`https://ka-f.fontawesome.com/releases/v${Sa}/svgs/${r}/${t}.svg`}var zh={name:"default",resolver:(t,e="classic",o="solid")=>Eh(t,e,o),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:o,variant:r}=e;if(o==="duotone"||o==="sharp-duotone"||o==="notdog-duo"||o==="notdog"&&r==="duo-solid"||o==="jelly-duo"||o==="jelly"&&r==="duo-regular"||o==="utility-duo"||o==="thumbprint"){let a=[...t.querySelectorAll("path")],s=a.find(c=>!c.hasAttribute("opacity")),n=a.find(c=>c.hasAttribute("opacity"));if(!s||!n)return;if(s.setAttribute("data-duotone-primary",""),n.setAttribute("data-duotone-secondary",""),e.swapOpacity&&s&&n){let c=n.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",c),n.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},ni=zh;function Lh(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var vr={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Ah={name:"system",resolver:(t,e="classic",o="solid")=>{let a=vr[o][t]??vr.regular[t]??vr.regular["circle-question"];return a?Lh(a):""}},li=Ah;var $h="classic",Th=[ni,li],Ea=new Set;function ci(t){Ea.add(t)}function hi(t){Ea.delete(t)}function Wo(t){return Th.find(e=>e.name===t)}function wr(){return $h}var za=class extends Event{constructor(t){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var La=class extends Event{constructor(t){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Aa=class extends Event{constructor(t){super("wa-collapse",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var $a=class extends Event{constructor(t){super("wa-expand",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Ta=k`
  @layer wa-component {
    :host {
      display: block;
      border: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
      border-radius: var(--wa-panel-border-radius);
      overflow: hidden;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      background-color: var(--wa-color-surface-default);
      border-color: var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-border-quiet);
    }

    :host([appearance='plain']) {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
    }
  }
`;function x(t,e){let o={waitUntilFirstUpdate:!1,...e};return(r,a)=>{let{update:s}=r,n=Array.isArray(t)?t:[t];r.update=function(c){n.forEach(h=>{let u=h;if(c.has(u)){let p=c.get(u),g=this[u];p!==g&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[a](p,g)}}),s.call(this,c)}}}var di=k`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,Oh=/;\s+$/;function Mh(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _a(t){let{property:e,value:o,element:r}=t;if(o){let a=r.getAttribute("style")||"";a&&(a.match(Oh)||(a+=";"),a+=" ");let s=`${e}: ${o}`;return a.includes(s)?void 0:`${a}${s};`}return null}var yr,L=class extends ca{constructor(){super(),ga(this,yr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,o)=>{if(this.internals?.states)try{o?this.internals.states.add(e):this.internals.states.delete(e)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,o]of t.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${o.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[di,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,o){ba(this,yr)||(this.constructor.elementProperties.forEach((r,a)=>{r.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),va(this,yr,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=e,this.dispatchEvent(o)}throw e}}setStyle(t,e){if(!this.style){let o=_a({property:Mh(t),value:e,element:this});o&&this.setAttribute("style",o);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let o=_a({property:t,value:e,element:this});o&&this.setAttribute("style",o);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};yr=new WeakMap;i([l()],L.prototype,"dir",2);i([l()],L.prototype,"lang",2);i([l({type:Boolean,reflect:!0,attribute:"did-ssr"})],L.prototype,"didSSR",2);var le=class extends L{constructor(){super(...arguments),this.mode="multiple",this.iconPlacement="end",this.headingLevel="3",this.appearance="outlined"}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="wa-accordion-item")}getFocusableItems(){return this.getAllItems().filter(t=>!t.disabled)}ownsItem(t){return t.closest("wa-accordion")===this}initRovingTabIndex(){this.getFocusableItems().forEach((t,e)=>{t.isTabbable=e===0})}handleSlotChange(){if(this.didSSR){let t=[];if(this.getAllItems().forEach(e=>{e.didSSR&&!e.hasUpdated&&t.push(e.updateComplete)}),t.length>0){Promise.allSettled(t).then(()=>{this.handleSlotChange()});return}}this.syncIconPlacement(),this.syncHeadingLevel(),this.syncAppearance(),this.initRovingTabIndex()}handleFocusIn(t){let e=this.getFocusableItems(),r=t.composedPath().find(s=>s instanceof Element&&s.tagName.toLowerCase()==="wa-accordion-item");if(!r||!this.ownsItem(r))return;let a=e.find(s=>s===r);a&&e.forEach(s=>s.isTabbable=s===a)}handleKeyDown(t){let e=this.getFocusableItems();if(!e.length)return;let r=t.composedPath().find(n=>n instanceof Element&&n.tagName.toLowerCase()==="wa-accordion-item");if(!r||!this.ownsItem(r))return;let a=e.findIndex(n=>n.isTabbable),s=a;switch(t.key){case"ArrowDown":t.preventDefault(),s=(a+1)%e.length;break;case"ArrowUp":t.preventDefault(),s=(a-1+e.length)%e.length;break;case"Home":t.preventDefault(),s=0;break;case"End":t.preventDefault(),s=e.length-1;break;default:return}e.forEach((n,c)=>n.isTabbable=c===s),e[s].focus()}syncIconPlacement(){this.getAllItems().forEach(t=>t.iconPlacement=this.iconPlacement)}syncHeadingLevel(){this.getAllItems().forEach(t=>t.headingLevel=this.headingLevel)}syncAppearance(){this.getAllItems().forEach(t=>t.appearance=this.appearance)}async handleItemTrigger(t){let{item:e}=t.detail;if(this.ownsItem(e)&&(t.stopPropagation(),!e.disabled))if(e.expanded){if(this.mode==="single")return;let o=new Aa({item:e});if(this.dispatchEvent(o),o.defaultPrevented)return;await e.collapse(),this.dispatchEvent(new za({item:e}))}else{(this.mode==="single"||this.mode==="single-collapsible")&&this.getAllItems().filter(r=>r!==e&&r.expanded).forEach(r=>r.collapse());let o=new $a({item:e});if(this.dispatchEvent(o),o.defaultPrevented)return;await e.expand(),this.dispatchEvent(new La({item:e}))}}expandAll(){this.mode==="single"||this.mode==="single-collapsible"||this.getAllItems().filter(t=>!t.disabled&&!t.expanded).forEach(t=>t.expand())}collapseAll(){this.getAllItems().filter(t=>t.expanded).forEach(t=>t.collapse())}render(){return b`
      <slot
        @slotchange=${this.handleSlotChange}
        @wa-accordion-item-trigger=${this.handleItemTrigger}
        @focusin=${this.handleFocusIn}
        @keydown=${this.handleKeyDown}
      ></slot>
    `}};le.css=Ta;i([C("slot")],le.prototype,"defaultSlot",2);i([l({reflect:!0})],le.prototype,"mode",2);i([l({attribute:"icon-placement",reflect:!0})],le.prototype,"iconPlacement",2);i([l({attribute:"heading-level",reflect:!0})],le.prototype,"headingLevel",2);i([l({reflect:!0})],le.prototype,"appearance",2);i([x("iconPlacement",{waitUntilFirstUpdate:!0})],le.prototype,"syncIconPlacement",1);i([x("headingLevel",{waitUntilFirstUpdate:!0})],le.prototype,"syncHeadingLevel",1);i([x("appearance",{waitUntilFirstUpdate:!0})],le.prototype,"syncAppearance",1);le=i([S("wa-accordion")],le);var Da=class extends Event{constructor(){super("wa-accordion-item-expanded",{bubbles:!1,cancelable:!1,composed:!1})}};var Ia=class extends Event{constructor(t){super("wa-accordion-item-trigger",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Ra=class extends Event{constructor(){super("wa-accordion-item-collapsed",{bubbles:!1,cancelable:!1,composed:!1})}};function yt(t,e){return new Promise(o=>{function r(a){a.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}async function Pe(t,e,o){return t.animate(e,o).finished.catch(()=>{})}function J(t,e){return new Promise(o=>{let r=new AbortController,{signal:a}=r;if(t.classList.contains(e))return;t.classList.add(e);let s=!1,n=()=>{s||(s=!0,t.classList.remove(e),o(),r.abort())};t.addEventListener("animationend",n,{once:!0,signal:a}),t.addEventListener("animationcancel",n,{once:!0,signal:a}),requestAnimationFrame(()=>{!s&&t.getAnimations().length===0&&n()})})}function Oe(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function xr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var Pa=k`
  @layer wa-component {
    :host {
      --spacing: var(--wa-space-m);
      --show-duration: var(--wa-transition-normal);
      --hide-duration: var(--wa-transition-normal);
      --easing: var(--wa-transition-easing);

      display: block;
    }

    :host(:not(:first-child)) {
      border-top: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      background-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled']:not(:first-child)) {
      margin-block-start: var(--wa-panel-border-width);
      border-top: none;
    }

    [part~='heading'] {
      margin: 0;
      font: inherit;
    }

    [part~='button'] {
      display: flex;
      align-items: center;
      gap: var(--spacing);
      padding: var(--spacing);
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: start;
      color: var(--wa-color-text-normal);
      font: inherit;
      font-weight: var(--wa-font-weight-semibold);

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        /* Inset by the full ring width + offset so the parent's overflow:hidden doesn't clip it */
        outline-offset: calc(0px - var(--wa-focus-ring-width) - var(--wa-focus-ring-offset));
      }
    }

    /* Icon at end (default) */
    :host([icon-placement='end']) [part~='button'] {
      justify-content: space-between;
    }

    /* Icon at start */
    :host([icon-placement='start']) [part~='button'] {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([disabled]) [part~='button'] {
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:first-child) [part~='button'] {
      border-top-left-radius: var(--wa-panel-border-radius);
      border-top-right-radius: var(--wa-panel-border-radius);
    }

    :host(:last-child:not([expanded])) [part~='button'] {
      border-bottom-left-radius: var(--wa-panel-border-radius);
      border-bottom-right-radius: var(--wa-panel-border-radius);
    }

    [part~='icon'] {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      color: var(--wa-color-text-quiet);
      transition: rotate var(--hide-duration) var(--easing);
    }

    :host([expanded]) [part~='icon'] {
      rotate: 90deg;
      transition-duration: var(--show-duration);
    }

    :host([expanded]:dir(rtl)) [part~='icon'] {
      rotate: -90deg;
    }

    .body {
      overflow: hidden;
      color: var(--wa-color-text-quiet);
    }

    :host([expanded]) .body:not(.animating) {
      overflow: visible;
    }

    .content {
      display: block;
      padding: 0 var(--spacing) var(--spacing);
    }
  }
`;var _=yo(class extends xo{constructor(t){if(super(t),t.type!==wo.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let o=t.element.classList;for(let r of this.st)r in e||(o.remove(r),this.st.delete(r));for(let r in e){let a=!!e[r];a===this.st.has(r)||this.nt?.has(r)||(a?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return go}});var jt=class extends L{constructor(){super(...arguments),this.animationGeneration=0,this.localize=new I(this),this.isAnimating=!1,this.label="",this.expanded=!1,this.disabled=!1,this.headingLevel="3",this.isTabbable=!0,this.iconPlacement="end",this.appearance="outlined"}firstUpdated(){this.body.style.height=this.expanded?"auto":"0"}updated(){this.customStates.set("animating",this.isAnimating)}handleTriggerClick(){this.disabled||this.dispatchEvent(new Ia({item:this}))}handleTriggerKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.handleTriggerClick())}async handleExpandedChange(){this.animationGeneration++;let t=this.animationGeneration;if(this.expanded){this.isAnimating=!0;let e=Oe(getComputedStyle(this.body).getPropertyValue("--show-duration")||"200ms"),o=getComputedStyle(this.body).getPropertyValue("--easing")||"ease";if(await Pe(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:o}),this.animationGeneration!==t)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Da)}else{this.isAnimating=!0;let e=Oe(getComputedStyle(this.body).getPropertyValue("--hide-duration")||"200ms"),o=getComputedStyle(this.body).getPropertyValue("--easing")||"ease";if(await Pe(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:o}),this.animationGeneration!==t)return;this.body.style.height="0",this.isAnimating=!1,this.dispatchEvent(new Ra)}}async expand(){if(!(this.expanded||this.disabled))return this.expanded=!0,yt(this,"wa-accordion-item-expanded")}async collapse(){if(!(!this.expanded||this.disabled))return this.expanded=!1,yt(this,"wa-accordion-item-collapsed")}async toggle(){return this.expanded?this.collapse():this.expand()}focus(t){this.triggerButton?.focus(t)}renderHeadingWrapper(t){let e=parseInt(this.headingLevel,10);switch(e>=1&&e<=6?e:3){case 1:return b`<h1 part="heading">${t}</h1>`;case 2:return b`<h2 part="heading">${t}</h2>`;case 4:return b`<h4 part="heading">${t}</h4>`;case 5:return b`<h5 part="heading">${t}</h5>`;case 6:return b`<h6 part="heading">${t}</h6>`;default:return b`<h3 part="heading">${t}</h3>`}}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",e=b`
      <button
        part="button"
        type="button"
        id="trigger"
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls="panel"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled||!this.isTabbable?"-1":"0"}
        @click=${this.handleTriggerClick}
        @keydown=${this.handleTriggerKeyDown}
      >
        <slot name="label" part="label">${this.label}</slot>
        <span part="icon">
          <slot name="icon">
            <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
          </slot>
        </span>
      </button>
    `;return b`
      <div part="base">
        ${this.headingLevel==="none"?e:this.renderHeadingWrapper(e)}
        <div
          part="panel"
          id="panel"
          class=${_({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="trigger"
        >
          <slot part="content" class="content"></slot>
        </div>
      </div>
    `}};jt.css=Pa;i([C(".body")],jt.prototype,"body",2);i([C('[part~="button"]')],jt.prototype,"triggerButton",2);i([T()],jt.prototype,"isAnimating",2);i([l()],jt.prototype,"label",2);i([l({type:Boolean,reflect:!0})],jt.prototype,"expanded",2);i([l({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);i([l({attribute:"heading-level",reflect:!0})],jt.prototype,"headingLevel",2);i([l({type:Boolean,attribute:!1})],jt.prototype,"isTabbable",2);i([l({attribute:"icon-placement",reflect:!0})],jt.prototype,"iconPlacement",2);i([l({reflect:!0})],jt.prototype,"appearance",2);i([x("expanded",{waitUntilFirstUpdate:!0})],jt.prototype,"handleExpandedChange",1);jt=i([S("wa-accordion-item")],jt);var Le=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var zo=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Oa=k`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var qo=Symbol(),kr=Symbol(),pi,ui=new Map,Dt=class extends L{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let o;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=b`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let r=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(r,this),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?qo:kr}catch{return kr}try{let r=document.createElement("div");r.innerHTML=await o.text();let a=r.firstElementChild;if(a?.tagName?.toLowerCase()!=="svg")return qo;pi||(pi=new DOMParser);let n=pi.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):qo}catch{return qo}}}connectedCallback(){super.connectedCallback(),ci(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),hi(this)}async getIconSource(){let t=Wo(this.library),e=this.family||wr();if(this.name&&t){let o;try{o=await t.resolver(this.name,e,this.variant,this.autoWidth)}catch{o=void 0}return{url:o,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),o=e?Wo(this.library):void 0;if(!t){this.svg=null;return}let r=ui.get(t);r||(r=this.resolveIcon(t,o),ui.set(t,r));let a=await r;a===kr&&ui.delete(t);let s=await this.getIconSource();if(t===s.url){if(da(a)){this.svg=a;return}switch(a){case kr:case qo:this.svg=null,this.dispatchEvent(new Le);break;default:this.svg=a.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new zo)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=Wo(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let o=this.shadowRoot?.querySelector("svg");o&&e?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:b`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Dt.css=Oa;i([T()],Dt.prototype,"svg",2);i([l({reflect:!0})],Dt.prototype,"name",2);i([l({reflect:!0})],Dt.prototype,"family",2);i([l({reflect:!0})],Dt.prototype,"variant",2);i([l({attribute:"auto-width",type:Boolean,reflect:!0})],Dt.prototype,"autoWidth",2);i([l({attribute:"swap-opacity",type:Boolean,reflect:!0})],Dt.prototype,"swapOpacity",2);i([l()],Dt.prototype,"src",2);i([l()],Dt.prototype,"label",2);i([l({reflect:!0})],Dt.prototype,"library",2);i([l({type:Number,reflect:!0})],Dt.prototype,"rotate",2);i([l({type:String,reflect:!0})],Dt.prototype,"flip",2);i([l({type:String,reflect:!0})],Dt.prototype,"animation",2);i([x("label")],Dt.prototype,"handleLabelChange",1);i([x(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],Dt.prototype,"setIcon",1);Dt=i([S("wa-icon")],Dt);var Ma=k`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: calc(var(--icon-size) * 0.75);
    background: none;
    border: solid var(--wa-border-width-s) currentColor;
    background-color: rgb(0 0 0 / 50%);
    border-radius: var(--wa-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host([play]:hover) .control-box {
      opacity: 1;
    }
  }

  :where(:host([play]:not(:hover))) .control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }

  /* Show control box on keyboard focus */
  .animated-image {
    &:focus {
      outline: none;
    }

    &:focus-visible .control-box {
      opacity: 1;
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }
`;var Fa="important",Fh=" !"+Fa,lt=yo(class extends xo{constructor(t){if(super(t),t.type!==wo.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{let r=t[o];return r==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){let{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?o.removeProperty(r):o[r]=null);for(let r in e){let a=e[r];if(a!=null){this.ft.add(r);let s=typeof a=="string"&&a.endsWith(Fh);r.includes("-")||s?o.setProperty(r,s?a.slice(0,-11):a,s?Fa:""):o[r]=a}}return go}});var ce=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}firstUpdated(t){if(super.firstUpdated,this.didSSR){let e=this.animatedImage;e&&e.complete&&(e.naturalWidth>0?e.dispatchEvent(new Event("load")):e.dispatchEvent(new Event("error")))}super.firstUpdated(t)}handleLoad(){let t=document.createElement("canvas"),{width:e,height:o}=this.animatedImage;t.width=e,t.height=o,t.getContext("2d").drawImage(this.animatedImage,0,0,e,o),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new zo),this.isLoaded=!0)}handleError(){this.dispatchEvent(new Le)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){let e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`,o=this.didSSR&&!this.hasUpdated||this.play;return b`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${e}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${o?"false":"true"}
          style="visibility: hidden;"
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?b`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style=${lt({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};ce.css=Ma;i([C(".animated")],ce.prototype,"animatedImage",2);i([T()],ce.prototype,"frozenFrame",2);i([T()],ce.prototype,"isLoaded",2);i([l()],ce.prototype,"src",2);i([l()],ce.prototype,"alt",2);i([l({type:Boolean,reflect:!0})],ce.prototype,"play",2);i([x("play",{waitUntilFirstUpdate:!0})],ce.prototype,"handlePlayChange",1);i([x("src")],ce.prototype,"handleSrcChange",1);ce=i([S("wa-animated-image")],ce);var mi=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var Ba=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var Va=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var Wa=k`
  :host {
    display: contents;
  }
`;var Et=class extends L{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Ba)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Va)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),"animate"in this&&this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),"animate"in this&&this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let t=Co.easings[this.easing]??this.easing,e=this.keyframes??Co[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!e?!1:(this.destroyAnimation(),this.animation=r.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new mi)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new mi)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return b` <slot @slotchange=${this.handleSlotChange}></slot> `}};Et.css=Wa;i([ha("slot")],Et.prototype,"defaultSlot",2);i([l()],Et.prototype,"name",2);i([l({type:Boolean,reflect:!0})],Et.prototype,"play",2);i([l({type:Number})],Et.prototype,"delay",2);i([l()],Et.prototype,"direction",2);i([l({type:Number})],Et.prototype,"duration",2);i([l()],Et.prototype,"easing",2);i([l({attribute:"end-delay",type:Number})],Et.prototype,"endDelay",2);i([l()],Et.prototype,"fill",2);i([l({type:Number})],Et.prototype,"iterations",2);i([l({attribute:"iteration-start",type:Number})],Et.prototype,"iterationStart",2);i([l({attribute:!1})],Et.prototype,"keyframes",2);i([l({attribute:"playback-rate",type:Number})],Et.prototype,"playbackRate",2);i([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Et.prototype,"handleAnimationChange",1);i([x("play")],Et.prototype,"handlePlayChange",1);i([x("playbackRate")],Et.prototype,"handlePlaybackRateChange",1);Et=i([S("wa-animation")],Et);var qa=k`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`;var ye=class extends L{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new Le)}connectedCallback(){if(super.connectedCallback(),this.didSSR){let t=this.shadowRoot?.querySelector?.("img");t&&t.complete&&t.naturalWidth<=0&&this.updateComplete.then(()=>{this.handleImageLoadError()})}}render(){let t=b`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `,e=b``;return this.initials?e=b`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:e=b`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,b` ${this.image&&!this.hasError?t:e} `}};ye.css=qa;i([T()],ye.prototype,"hasError",2);i([l()],ye.prototype,"image",2);i([l()],ye.prototype,"label",2);i([l()],ye.prototype,"initials",2);i([l()],ye.prototype,"loading",2);i([l({reflect:!0})],ye.prototype,"shape",2);i([x("image")],ye.prototype,"handleImageChange",1);ye=i([S("wa-avatar")],ye);var Ne=k`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;var Ha=k`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-3xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;

    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Prevents vertical space when icons with vertical-align are slotted in - https://github.com/shoelace-style/webawesome/issues/2280 */
  [part='start'],
  [part='end'] {
    line-height: 0;
  }

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`;var Ue=class extends L{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return b`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};Ue.css=[Ne,Ha];i([l({reflect:!0})],Ue.prototype,"variant",2);i([l({reflect:!0})],Ue.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],Ue.prototype,"pill",2);i([l({reflect:!0})],Ue.prototype,"attention",2);Ue=i([S("wa-badge")],Ue);var Na=k`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var ro=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,o)=>{let r=e.querySelector('[slot="separator"]');r===null?e.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),b`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};ro.css=Na;i([C("slot")],ro.prototype,"defaultSlot",2);i([C('slot[name="separator"]')],ro.prototype,"separatorSlot",2);i([l()],ro.prototype,"label",2);ro=i([S("wa-breadcrumb")],ro);var Ua=k`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Ae=class extends L{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="wa-dropdown").length>0;if(typeof this.href=="string"){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return b`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?b`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${D(this.target?this.target:void 0)}"
              rel=${D(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?b`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?b`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:""}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};Ae.css=Ua;i([C("slot:not([name])")],Ae.prototype,"defaultSlot",2);i([T()],Ae.prototype,"renderType",2);i([l()],Ae.prototype,"href",2);i([l()],Ae.prototype,"target",2);i([l()],Ae.prototype,"rel",2);i([x("href",{waitUntilFirstUpdate:!0})],Ae.prototype,"hrefChanged",1);Ae=i([S("wa-breadcrumb-item")],Ae);var Gt=()=>({checkValidity(t){let e=t.input,o={message:"",isValid:!0,invalidKeys:[]};if(!e)return o;let r=!0;if("checkValidity"in e&&(r=e.checkValidity()),r)return o;if(o.isValid=!1,"validationMessage"in e&&(o.message=e.validationMessage),!("validity"in e))return o.invalidKeys.push("customError"),o;for(let a in e.validity){if(a==="valid")continue;let s=a;e.validity[s]&&o.invalidKeys.push(s)}return o}});var Lo=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var Bh=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),W=class extends L{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Lo))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Bh()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let o of e.observedAttributes)t.add(o);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let e=this.value;this.updateFormValue(e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let o of t)e.append(this.name,o);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],o=t[1],r=t[2];r||(r=this.validationTarget),this.internals.setValidity(e,o,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&o),this.customStates.set("user-valid",e&&o)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,o]=t;this.internals.setFormValue(e,o)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},o=this.validationTarget||this.input||void 0,r="";for(let a of t){let{isValid:s,message:n,invalidKeys:c}=a.checkValidity(this);s||(r||(r=n),c?.length>=0&&c.forEach(h=>e[h]=!0))}r||(r=this.validationMessage),this.setValidity(e,r,o)}};W.formAssociated=!0;i([l({reflect:!0})],W.prototype,"name",2);i([l({type:Boolean})],W.prototype,"disabled",2);i([l({state:!0,attribute:!1})],W.prototype,"valueHasChanged",2);i([l({state:!0,attribute:!1})],W.prototype,"hasInteracted",2);i([l({attribute:"custom-error",reflect:!0})],W.prototype,"customError",2);i([l({attribute:!1,state:!0,type:Object})],W.prototype,"validity",1);var ja={small:"s",medium:"m",large:"l"},Ka=new Set;function Y(t,e){e in ja&&!Ka.has(`${t}:${e}`)&&(Ka.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${ja[e]}" instead. The long-form value will be removed in the next major version.`))}var rt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};var X=k`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;var Ya=k`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var Ga=Symbol.for(""),Vh=t=>{if(t?.r===Ga)return t?._$litStatic$};var fi=(t,...e)=>({_$litStatic$:e.reduce((o,r,a)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[a+1],t[0]),r:Ga}),Xa=new Map,bi=t=>(e,...o)=>{let r=o.length,a,s,n=[],c=[],h,u=0,p=!1;for(;u<r;){for(h=e[u];u<r&&(s=o[u],(a=Vh(s))!==void 0);)h+=a+e[++u],p=!0;u!==r&&c.push(s),n.push(h),u++}if(u===r&&n.push(e[r]),p){let g=n.join("$$lit$$");(e=Xa.get(g))===void 0&&(n.raw=n,Xa.set(g,e=n)),o=c}return t(e,...o)},Cr=bi(b),$1=bi(na),T1=bi(la);var tt=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new rt(this,"[default]","start","end"),this.localize=new I(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Gt()]}handleSizeChange(){Y(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let o=this.constructLightDOMButton();this.parentElement?.append(o),o.click(),o.remove()}handleInvalid(){this.dispatchEvent(new Lo)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,o=!1,r=!1,a=!1;[...t].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let n=s;n.localName==="wa-icon"?(o=!0,e||(e=n.label!==void 0)):a=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=o&&!r&&!a,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?fi`a`:fi`button`;return Cr`
      <${e}
        part="base"
        class=${_({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${D(t?void 0:this.disabled)}
        type=${D(t?void 0:this.type)}
        title=${this.title}
        name=${D(t?void 0:this.name)}
        value=${D(t?void 0:this.value)}
        href=${D(t?this.href:void 0)}
        target=${D(t?this.target:void 0)}
        download=${D(t?this.download:void 0)}
        rel=${D(t&&this.rel?this.rel:void 0)}
        role=${D(t?void 0:"button")}
        aria-disabled=${D(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Cr`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Cr`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};tt.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};tt.css=[Ya,Ne,X];i([C(".button")],tt.prototype,"button",2);i([C("slot:not([name])")],tt.prototype,"labelSlot",2);i([T()],tt.prototype,"invalid",2);i([T()],tt.prototype,"isIconButton",2);i([l()],tt.prototype,"title",2);i([l({reflect:!0})],tt.prototype,"variant",2);i([l({reflect:!0})],tt.prototype,"appearance",2);i([l({reflect:!0})],tt.prototype,"size",2);i([x("size")],tt.prototype,"handleSizeChange",1);i([l({attribute:"with-caret",type:Boolean,reflect:!0})],tt.prototype,"withCaret",2);i([l({attribute:"with-start",type:Boolean})],tt.prototype,"withStart",2);i([l({attribute:"with-end",type:Boolean})],tt.prototype,"withEnd",2);i([l({type:Boolean})],tt.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],tt.prototype,"loading",2);i([l({type:Boolean,reflect:!0})],tt.prototype,"pill",2);i([l()],tt.prototype,"type",2);i([l({reflect:!0})],tt.prototype,"name",2);i([l({reflect:!0})],tt.prototype,"value",2);i([l({reflect:!0})],tt.prototype,"href",2);i([l()],tt.prototype,"target",2);i([l()],tt.prototype,"rel",2);i([l()],tt.prototype,"download",2);i([l({attribute:"formaction"})],tt.prototype,"formAction",2);i([l({attribute:"formenctype"})],tt.prototype,"formEnctype",2);i([l({attribute:"formmethod"})],tt.prototype,"formMethod",2);i([l({attribute:"formnovalidate",type:Boolean})],tt.prototype,"formNoValidate",2);i([l({attribute:"formtarget"})],tt.prototype,"formTarget",2);i([x("disabled",{waitUntilFirstUpdate:!0})],tt.prototype,"handleDisabledChange",1);i([x("href")],tt.prototype,"handleHrefChange",1);i([x("loading",{waitUntilFirstUpdate:!0})],tt.prototype,"handleLoadingChange",1);tt=i([S("wa-button")],tt);tt.disableWarning?.("change-in-update");var Za=k`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;var Sr=class extends L{constructor(){super(...arguments),this.localize=new I(this)}render(){return b`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};Sr.css=Za;Sr=i([S("wa-spinner")],Sr);var Qa=k`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`;var Me=class extends L{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){Er(t.target)?.classList.add("button-focus")}handleBlur(t){Er(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Er(t.target)?.classList.add("button-hover")}handleMouseOut(t){Er(t.target)?.classList.remove("button-hover")}render(){return b`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};Me.css=[Qa];i([C("slot")],Me.prototype,"defaultSlot",2);i([T()],Me.prototype,"disableRole",2);i([T()],Me.prototype,"hasOutlined",2);i([l()],Me.prototype,"label",2);i([l({reflect:!0})],Me.prototype,"orientation",2);Me=i([S("wa-button-group")],Me);function Er(t){let e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var Ja=k`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;var je=class extends L{constructor(){super(...arguments),this.variant="brand",this.size="m"}handleSizeChange(){Y(this.localName,this.size)}render(){return b`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};je.css=[Ja,Ne,X];i([l({reflect:!0})],je.prototype,"variant",2);i([l({reflect:!0})],je.prototype,"appearance",2);i([l({reflect:!0})],je.prototype,"size",2);i([x("size")],je.prototype,"handleSizeChange",1);je=i([S("wa-callout")],je);var ts=k`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) .body slot::slotted(*) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) slot[name='actions']::slotted(*) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`;var he=class extends L{constructor(){super(...arguments),this.hasSlotController=new rt(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.withHeaderActions=!1,this.withFooterActions=!1,this.orientation="vertical"}willUpdate(t){this.withHeader=this.hasSlotController.test("header","withHeader"),this.withMedia=this.hasSlotController.test("media","withMedia"),this.withFooter=this.hasSlotController.test("footer","withFooter"),super.willUpdate(t)}render(){if(this.orientation==="horizontal")return b`
        <slot name="media" part="media" class="media"></slot>
        <div part="body" class="body"><slot></slot></div>
        <slot name="actions" part="actions" class="actions"></slot>
      `;let t=this.hasSlotController.test("header-actions","withHeaderActions"),e=this.hasSlotController.test("footer-actions","withFooterActions");return b`
      <slot name="media" part="media" class="media"></slot>

      <header
        part="header"
        class=${_({header:!0,"has-actions":t})}
      >
        <slot name="header"></slot>
        <slot name="header-actions"></slot>
      </header>

      <div part="body" class="body"><slot></slot></div>

      <footer
        part="footer"
        class=${_({footer:!0,"has-actions":e})}
      >
        <slot name="footer"></slot>
        <slot name="footer-actions"></slot>
      </footer>
    `}};he.css=[X,ts];i([l({reflect:!0})],he.prototype,"appearance",2);i([l({attribute:"with-header",type:Boolean,reflect:!0})],he.prototype,"withHeader",2);i([l({attribute:"with-media",type:Boolean,reflect:!0})],he.prototype,"withMedia",2);i([l({attribute:"with-footer",type:Boolean,reflect:!0})],he.prototype,"withFooter",2);i([l({attribute:"with-header-actions",type:Boolean,reflect:!0})],he.prototype,"withHeaderActions",2);i([l({attribute:"with-footer-actions",type:Boolean,reflect:!0})],he.prototype,"withFooterActions",2);i([l({reflect:!0})],he.prototype,"orientation",2);he=i([S("wa-card")],he);he.disableWarning?.("change-in-update");var gi=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var es=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var os="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var rs=(t=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=os[o[t]&63];return e};function H(t,e,o){let r=a=>Object.is(a,-0)?0:a;return t<e?r(e):t>o?r(o):r(t)}function de(t=""){return`${t}${rs()}`}var is=k`
  :host {
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;
    --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--wa-space-m);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--wa-space-s);
  }

  .slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--wa-border-radius-m);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.slides) {
      scroll-behavior: auto;
    }
  }

  .slides-horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .slides-vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  :host([vertical]) ::slotted(wa-carousel-item) {
    height: 100%;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  .navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--wa-font-size-l);
  }

  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    font-size: inherit;
    color: var(--wa-color-text-quiet);
    padding: var(--wa-space-xs);
    cursor: pointer;
    transition: var(--wa-transition-normal) color;
    appearance: none;
  }

  .navigation-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navigation-button-disabled::part(base) {
    pointer-events: none;
  }

  .navigation-button-previous {
    grid-column: 1;
    grid-row: 1;
  }

  .navigation-button-next {
    grid-column: 3;
    grid-row: 1;
  }

  .pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--wa-border-radius-circle);
    width: var(--wa-space-s);
    height: var(--wa-space-s);
    background-color: var(--wa-color-neutral-fill-normal);
    padding: 0;
    margin: 0;
    transition: transform var(--wa-transition-slow);
  }

  .pagination-item-active {
    background-color: var(--wa-form-control-activated-color);
    transform: scale(1.25);
  }

  /* Focus styles */
  .slides:focus-visible,
  .navigation-button:focus-visible,
  .pagination-item:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;function*as(t,e){if(t!==void 0){let o=0;for(let r of t)yield e(r,o++)}}function*ss(t,e,o=1){let r=e===void 0?0:t;e??=t;for(let a=r;o>0?a<e:e<a;a+=o)yield a}(()=>{if(!1)return;let t=(r,a)=>{let s=0;return function(...n){window.clearTimeout(s),s=window.setTimeout(()=>{r.call(this,...n)},a)}},e=(r,a,s)=>{let n=r[a];r[a]=function(...c){n.call(this,...c),s.call(this,n,...c)}};if(!("onscrollend"in window)){let r=new Set,a=new WeakMap,s=c=>{r.add(c.pointerId)},n=c=>{r.delete(c.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",n),e(EventTarget.prototype,"addEventListener",function(c,h){if(h!=="scroll")return;let u=t(()=>{r.size?u():this.dispatchEvent(new Event("scrollend"))},100);c.call(this,"scroll",u,{passive:!0}),a.set(this,u)}),e(EventTarget.prototype,"removeEventListener",function(c,h){if(h!=="scroll")return;let u=a.get(this);u&&c.call(this,"scroll",u,{passive:!0})})}})();var vt=class extends L{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new gi(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new I(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let r=t.scrollLeft,a=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:o,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==r||o!==a)&&(t.scrollTo({left:r,top:a,behavior:xr()?"auto":"smooth"}),await yt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(o=>[...o.addedNodes,...o.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0}),this.resizeObserver=new ResizeObserver(()=>{(this.scrollContainer?.clientWidth||this.scrollContainer?.clientHeight)&&(this.synchronizeSlides(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0)}),this.resizeObserver.observe(this)}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:o,loop:r}=this,a=r?t/o:(t-e)/o+1;return Math.ceil(a)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),o=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+o*o)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,o=this.localize.dir()==="rtl",r=e.closest('[part~="pagination-item"]')!==null,a=t.key==="ArrowDown"||!o&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!o&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),a&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');n&&n.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{t.disconnect();for(let c of e){let h=c.target;h.toggleAttribute("inert",!c.isIntersecting),h.classList.toggle("--in-view",c.isIntersecting),h.setAttribute("aria-hidden",c.isIntersecting?"false":"true")}let o=e.find(c=>c.isIntersecting);if(!o)return;let r=this.getSlides({excludeClones:!1}),a=this.getSlides().length,s=r.indexOf(o.target),n=this.loop?s-this.slidesPerPage:s;if(o&&(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+a)%a,!this.scrolling&&this.loop&&o.target.hasAttribute("data-clone"))){let c=Number(o.target.getAttribute("data-clone"));this.goToSlide(c,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,o=t.slice(-e),r=t.slice(0,e);o.reverse().forEach((a,s)=>{let n=a.cloneNode(!0);n.setAttribute("data-clone",String(t.length-s-1)),this.prepend(n)}),r.forEach((a,s)=>{let n=a.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handleSlideChange(){let t=this.getSlides();t.forEach((e,o)=>{e.classList.toggle("--is-active",o===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new es({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((o,r)=>{(r+e)%e===0?o.style.removeProperty("scroll-snap-align"):o.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:o,loop:r}=this,a=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!a.length)return;let n=r?(t+a.length)%a.length:H(t,0,a.length-o);this.activeSlide=n;let c=this.localize.dir()==="rtl",h=H(t+(r?o:0)+(c?o-1:0),0,s.length-1),u=s[h];this.scrollToSlide(u,xr()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let o=this.scrollContainer,r=o.getBoundingClientRect(),a=t.getBoundingClientRect(),s=a.left-r.left,n=a.top-r.top;s||n?(this.pendingSlideChange=!0,o.scrollTo({left:s+o.scrollLeft,top:n+o.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:t,scrolling:e}=this,o=0,r=0,a=!1,s=!1;this.hasUpdated&&(o=this.getPageCount(),r=this.getCurrentPage(),a=this.canScrollPrev(),s=this.canScrollNext());let n=this.localize.dir()==="rtl";return b`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${_({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${lt({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?b`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${_({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!a})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${n?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${_({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${n?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?b`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${as(ss(o),c=>{let h=c===r;return b`
                    <button
                      part="pagination-item ${h?"pagination-item-active":""}"
                      class="${_({"pagination-item":!0,"pagination-item-active":h})}"
                      role="tab"
                      aria-selected="${h?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,o)}"
                      tabindex=${h?"0":"-1"}
                      @click=${()=>this.goToSlide(c*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:b``}
      </div>
    `}};vt.css=is;i([l({type:Boolean,reflect:!0})],vt.prototype,"loop",2);i([l({type:Number,reflect:!0})],vt.prototype,"slides",2);i([l({type:Number,reflect:!0})],vt.prototype,"currentSlide",2);i([l({type:Boolean,reflect:!0})],vt.prototype,"navigation",2);i([l({type:Boolean,reflect:!0})],vt.prototype,"pagination",2);i([l({type:Boolean,reflect:!0})],vt.prototype,"autoplay",2);i([l({type:Number,attribute:"autoplay-interval"})],vt.prototype,"autoplayInterval",2);i([l({type:Number,attribute:"slides-per-page"})],vt.prototype,"slidesPerPage",2);i([l({type:Number,attribute:"slides-per-move"})],vt.prototype,"slidesPerMove",2);i([l()],vt.prototype,"orientation",2);i([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],vt.prototype,"mouseDragging",2);i([C(".slides")],vt.prototype,"scrollContainer",2);i([C(".pagination")],vt.prototype,"paginationContainer",2);i([T()],vt.prototype,"activeSlide",2);i([T()],vt.prototype,"scrolling",2);i([T()],vt.prototype,"dragging",2);i([vo({passive:!0})],vt.prototype,"handleScroll",1);i([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],vt.prototype,"initializeSlides",1);i([x("activeSlide")],vt.prototype,"handleSlideChange",1);i([x("slidesPerMove")],vt.prototype,"updateSlidesSnap",1);i([x("autoplay")],vt.prototype,"handleAutoplayChange",1);vt=i([S("wa-carousel")],vt);var ns=k`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var zr=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return b` <slot></slot> `}};zr.css=ns;zr=i([S("wa-carousel-item")],zr);var ls=k`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;var pe=(t={})=>{let{validationElement:e,validationProperty:o}=t;e||typeof document<"u"&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),o||(o="value");let r={observedAttributes:["required"],message:e?.validationMessage,checkValidity(a){let s={message:"",isValid:!0,invalidKeys:[]};return(a.required??a.hasAttribute("required"))&&!a[o]&&(s.message=typeof r.message=="function"?r.message(a):r.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return r};var bt=k`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var Ct=class extends W{constructor(){super(...arguments),this.hasSlotController=new rt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){let t=[pe({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Y(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultCheckedChange()});return}this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){let t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,o=!this.checked&&this.indeterminate,r=o?"indeterminate":"check",a=o?"indeterminate":"check",s=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,n=this.didSSR&&!this.hasUpdated?null:Pt(this.checked);return b`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${D(this.name)}
            value=${D(this.value)}
            .indeterminate=${Pt(this.indeterminate)}
            .checked=${D(n)}
            ?checked=${s}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${a}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${_({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Ct.css=[bt,X,ls];Ct.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C('input[type="checkbox"]')],Ct.prototype,"input",2);i([l()],Ct.prototype,"title",2);i([l({reflect:!0})],Ct.prototype,"name",2);i([l({reflect:!0})],Ct.prototype,"value",1);i([l({reflect:!0})],Ct.prototype,"size",2);i([x("size")],Ct.prototype,"handleSizeChange",1);i([l({type:Boolean})],Ct.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],Ct.prototype,"indeterminate",2);i([l({type:Boolean,attribute:!1})],Ct.prototype,"checked",1);i([l({type:Boolean,reflect:!0,attribute:"checked"})],Ct.prototype,"defaultChecked",2);i([l({type:Boolean,reflect:!0})],Ct.prototype,"required",2);i([l()],Ct.prototype,"hint",2);i([x(["checked","defaultChecked"])],Ct.prototype,"handleDefaultCheckedChange",1);i([x(["checked","indeterminate"])],Ct.prototype,"handleStateChange",1);i([x("disabled")],Ct.prototype,"handleDisabledChange",1);Ct=i([S("wa-checkbox")],Ct);Ct.disableWarning?.("change-in-update");var cs=k`
  :host {
    --gap: 0.5em;

    display: block;
  }

  :host([orientation='horizontal']) {
    --gap: 1em;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .checkbox-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  /* The group of checkboxes */
  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    /* Keep items sized to their content so the clickable label doesn't span the full width */
    align-items: start;
    gap: var(--gap);
    margin-block-start: 0.5em;
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  /* Hint */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Hide the required asterisk on individual controls; the group's label carries the indicator instead. */
  ::slotted(wa-checkbox[required]),
  ::slotted(wa-switch[required]) {
    --wa-form-control-required-content: '';
  }
`;var ee=class extends L{constructor(){super(...arguments),this.hasSlotController=new rt(this,"hint","label"),this.label="",this.hint="",this.orientation="vertical",this.required=!1,this.withLabel=!1,this.withHint=!1,this.syncCheckboxElements=()=>{if(this.size)for(let t of this.getAllCheckboxes())t.setAttribute("size",this.size)}}handleSizeChange(){Y(this.localName,this.size)}updated(t){t.has("size")&&this.syncCheckboxElements()}getAllCheckboxes(){return[...this.querySelectorAll(":is(wa-checkbox, wa-switch)")]}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e;return b`
      <fieldset
        part="form-control"
        class=${_({"form-control":!0,"checkbox-group-required":this.required,"form-control-has-label":o})}
      >
        <label
          part="form-control-label"
          id="label"
          class=${_({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" role="group" aria-labelledby="label" aria-describedby="hint">
          <slot @slotchange=${this.syncCheckboxElements}></slot>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${_({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};ee.css=[X,bt,cs];i([l()],ee.prototype,"label",2);i([l({attribute:"hint"})],ee.prototype,"hint",2);i([l({reflect:!0})],ee.prototype,"orientation",2);i([l({reflect:!0})],ee.prototype,"size",2);i([x("size")],ee.prototype,"handleSizeChange",1);i([l({type:Boolean,reflect:!0})],ee.prototype,"required",2);i([l({type:Boolean,attribute:"with-label"})],ee.prototype,"withLabel",2);i([l({type:Boolean,attribute:"with-hint"})],ee.prototype,"withHint",2);ee=i([S("wa-checkbox-group")],ee);ee.disableWarning?.("change-in-update");function Ke(t,e){function o(a){let s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,c=s.left+n.pageXOffset,h=s.top+n.pageYOffset,u=a.pageX-c,p=a.pageY-h;e?.onMove&&e.onMove(u,p)}function r(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",r),e?.onStop&&e.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",r),e?.initialEvent instanceof PointerEvent&&o(e.initialEvent)}var vi=typeof window<"u"&&"ontouchstart"in window,Ho=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=o=>{let r="touches"in o?o.touches[0].clientX:o.clientX,a="touches"in o?o.touches[0].clientY:o.clientY;this.isDragging||!vi&&o.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(r,a))},this.handleDragStop=o=>{let r="changedTouches"in o?o.changedTouches[0].clientX:o.clientX,a="changedTouches"in o?o.changedTouches[0].clientY:o.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(r,a)},this.handleDragMove=o=>{let r="touches"in o?o.touches[0].clientX:o.clientX,a="touches"in o?o.touches[0].clientY:o.clientY;window.getSelection()?.removeAllRanges(),this.options.move(r,a)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),vi&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),vi&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var Ye=k`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var io=[];function Ft(t){io.push(t)}function Lt(t){for(let e=io.length-1;e>=0;e--)if(io[e]===t){io.splice(e,1);break}}function At(t){return io.length>0&&io[io.length-1]===t}var hs=k`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;function $t(t,e){Wh(t)&&(t="100%");let o=qh(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),o&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function No(t){return Math.min(1,Math.max(0,t))}function Wh(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function qh(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Lr(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Uo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Xe(t){return t.length===1?"0"+t:String(t)}function ds(t,e,o){return{r:$t(t,255)*255,g:$t(e,255)*255,b:$t(o,255)*255}}function yi(t,e,o){t=$t(t,255),e=$t(e,255),o=$t(o,255);let r=Math.max(t,e,o),a=Math.min(t,e,o),s=0,n=0,c=(r+a)/2;if(r===a)n=0,s=0;else{let h=r-a;switch(n=c>.5?h/(2-r-a):h/(r+a),r){case t:s=(e-o)/h+(e<o?6:0);break;case e:s=(o-t)/h+2;break;case o:s=(t-e)/h+4;break;default:break}s/=6}return{h:s,s:n,l:c}}function wi(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(e-t)*(6*o):o<1/2?e:o<2/3?t+(e-t)*(2/3-o)*6:t}function ps(t,e,o){let r,a,s;if(t=$t(t,360),e=$t(e,100),o=$t(o,100),e===0)a=o,s=o,r=o;else{let n=o<.5?o*(1+e):o+e-o*e,c=2*o-n;r=wi(c,n,t+1/3),a=wi(c,n,t),s=wi(c,n,t-1/3)}return{r:r*255,g:a*255,b:s*255}}function xi(t,e,o){t=$t(t,255),e=$t(e,255),o=$t(o,255);let r=Math.max(t,e,o),a=Math.min(t,e,o),s=0,n=r,c=r-a,h=r===0?0:c/r;if(r===a)s=0;else{switch(r){case t:s=(e-o)/c+(e<o?6:0);break;case e:s=(o-t)/c+2;break;case o:s=(t-e)/c+4;break;default:break}s/=6}return{h:s,s:h,v:n}}function us(t,e,o){t=$t(t,360)*6,e=$t(e,100),o=$t(o,100);let r=Math.floor(t),a=t-r,s=o*(1-e),n=o*(1-a*e),c=o*(1-(1-a)*e),h=r%6,u=[o,n,s,s,c,o][h],p=[c,o,o,n,s,s][h],g=[s,s,c,o,o,n][h];return{r:u*255,g:p*255,b:g*255}}function ki(t,e,o,r){let a=[Xe(Math.round(t).toString(16)),Xe(Math.round(e).toString(16)),Xe(Math.round(o).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ms(t,e,o,r,a){let s=[Xe(Math.round(t).toString(16)),Xe(Math.round(e).toString(16)),Xe(Math.round(o).toString(16)),Xe(Hh(r))];return a&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function fs(t,e,o,r){let a=t/100,s=e/100,n=o/100,c=r/100,h=255*(1-a)*(1-c),u=255*(1-s)*(1-c),p=255*(1-n)*(1-c);return{r:h,g:u,b:p}}function Ci(t,e,o){let r=1-t/255,a=1-e/255,s=1-o/255,n=Math.min(r,a,s);return n===1?(r=0,a=0,s=0):(r=(r-n)/(1-n)*100,a=(a-n)/(1-n)*100,s=(s-n)/(1-n)*100),n*=100,{c:Math.round(r),m:Math.round(a),y:Math.round(s),k:Math.round(n)}}function Hh(t){return Math.round(parseFloat(t)*255).toString(16)}function Si(t){return Zt(t)/255}function Zt(t){return parseInt(t,16)}function bs(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var jo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function gs(t){let e={r:0,g:0,b:0},o=1,r=null,a=null,s=null,n=!1,c=!1;return typeof t=="string"&&(t=jh(t)),typeof t=="object"&&(oe(t.r)&&oe(t.g)&&oe(t.b)?(e=ds(t.r,t.g,t.b),n=!0,c=String(t.r).substr(-1)==="%"?"prgb":"rgb"):oe(t.h)&&oe(t.s)&&oe(t.v)?(r=Uo(t.s),a=Uo(t.v),e=us(t.h,r,a),n=!0,c="hsv"):oe(t.h)&&oe(t.s)&&oe(t.l)?(r=Uo(t.s),s=Uo(t.l),e=ps(t.h,r,s),n=!0,c="hsl"):oe(t.c)&&oe(t.m)&&oe(t.y)&&oe(t.k)&&(e=fs(t.c,t.m,t.y,t.k),n=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(o=t.a)),o=Lr(o),{ok:n,format:t.format||c,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:o}}var Nh="[-\\+]?\\d+%?",Uh="[-\\+]?\\d*\\.\\d+%?",Ge="(?:"+Uh+")|(?:"+Nh+")",Ei="[\\s|\\(]+("+Ge+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")\\s*\\)?",Ar="[\\s|\\(]+("+Ge+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")\\s*\\)?",ue={CSS_UNIT:new RegExp(Ge),rgb:new RegExp("rgb"+Ei),rgba:new RegExp("rgba"+Ar),hsl:new RegExp("hsl"+Ei),hsla:new RegExp("hsla"+Ar),hsv:new RegExp("hsv"+Ei),hsva:new RegExp("hsva"+Ar),cmyk:new RegExp("cmyk"+Ar),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function jh(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(jo[t])t=jo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let o=ue.rgb.exec(t);return o?{r:o[1],g:o[2],b:o[3]}:(o=ue.rgba.exec(t),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=ue.hsl.exec(t),o?{h:o[1],s:o[2],l:o[3]}:(o=ue.hsla.exec(t),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=ue.hsv.exec(t),o?{h:o[1],s:o[2],v:o[3]}:(o=ue.hsva.exec(t),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=ue.cmyk.exec(t),o?{c:o[1],m:o[2],y:o[3],k:o[4]}:(o=ue.hex8.exec(t),o?{r:Zt(o[1]),g:Zt(o[2]),b:Zt(o[3]),a:Si(o[4]),format:e?"name":"hex8"}:(o=ue.hex6.exec(t),o?{r:Zt(o[1]),g:Zt(o[2]),b:Zt(o[3]),format:e?"name":"hex"}:(o=ue.hex4.exec(t),o?{r:Zt(o[1]+o[1]),g:Zt(o[2]+o[2]),b:Zt(o[3]+o[3]),a:Si(o[4]+o[4]),format:e?"name":"hex8"}:(o=ue.hex3.exec(t),o?{r:Zt(o[1]+o[1]),g:Zt(o[2]+o[2]),b:Zt(o[3]+o[3]),format:e?"name":"hex"}:!1))))))))))}function oe(t){return typeof t=="number"?!Number.isNaN(t):ue.CSS_UNIT.test(t)}var Ko=class t{constructor(e="",o={}){if(e instanceof t)return e;typeof e=="number"&&(e=bs(e)),this.originalInput=e;let r=gs(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=o.format??r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),o,r,a,s=e.r/255,n=e.g/255,c=e.b/255;return s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),c<=.03928?a=c/12.92:a=Math.pow((c+.055)/1.055,2.4),.2126*o+.7152*r+.0722*a}getAlpha(){return this.a}setAlpha(e){return this.a=Lr(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=xi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=xi(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?`hsv(${o}, ${r}%, ${a}%)`:`hsva(${o}, ${r}%, ${a}%, ${this.roundA})`}toHsl(){let e=yi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=yi(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?`hsl(${o}, ${r}%, ${a}%)`:`hsla(${o}, ${r}%, ${a}%, ${this.roundA})`}toHex(e=!1){return ki(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return ms(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),o=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${e}, ${o}, ${r})`:`rgba(${e}, ${o}, ${r}, ${this.roundA})`}toPercentageRgb(){let e=o=>`${Math.round($t(o,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=o=>Math.round($t(o,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ci(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:o,y:r,k:a}=Ci(this.r,this.g,this.b);return`cmyk(${e}, ${o}, ${r}, ${a})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+ki(this.r,this.g,this.b,!1);for(let[o,r]of Object.entries(jo))if(e===r)return o;return!1}toString(e){let o=!!e;e=e??this.format;let r=!1,a=this.a<1&&this.a>=0;return!o&&a&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),e==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let o=this.toHsl();return o.l+=e/100,o.l=No(o.l),new t(o)}brighten(e=10){let o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(e/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(e/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(e/100)))),new t(o)}darken(e=10){let o=this.toHsl();return o.l-=e/100,o.l=No(o.l),new t(o)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let o=this.toHsl();return o.s-=e/100,o.s=No(o.s),new t(o)}saturate(e=10){let o=this.toHsl();return o.s+=e/100,o.s=No(o.s),new t(o)}greyscale(){return this.desaturate(100)}spin(e){let o=this.toHsl(),r=(o.h+e)%360;return o.h=r<0?360+r:r,new t(o)}mix(e,o=50){let r=this.toRgb(),a=new t(e).toRgb(),s=o/100,n={r:(a.r-r.r)*s+r.r,g:(a.g-r.g)*s+r.g,b:(a.b-r.b)*s+r.b,a:(a.a-r.a)*s+r.a};return new t(n)}analogous(e=6,o=30){let r=this.toHsl(),a=360/o,s=[this];for(r.h=(r.h-(a*e>>1)+720)%360;--e;)r.h=(r.h+a)%360,s.push(new t(r));return s}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let o=this.toHsv(),{h:r}=o,{s:a}=o,{v:s}=o,n=[],c=1/e;for(;e--;)n.push(new t({h:r,s:a,v:s})),s=(s+c)%1;return n}splitcomplement(){let e=this.toHsl(),{h:o}=e;return[this,new t({h:(o+72)%360,s:e.s,l:e.l}),new t({h:(o+216)%360,s:e.s,l:e.l})]}onBackground(e){let o=this.toRgb(),r=new t(e).toRgb(),a=o.a+r.a*(1-o.a);return new t({r:(o.r*o.a+r.r*r.a*(1-o.a))/a,g:(o.g*o.a+r.g*r.a*(1-o.a))/a,b:(o.b*o.a+r.b*r.a*(1-o.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let o=this.toHsl(),{h:r}=o,a=[this],s=360/e;for(let n=1;n<e;n++)a.push(new t({h:(r+n*s)%360,s:o.s,l:o.l}));return a}equals(e){let o=new t(e);return this.format==="cmyk"||o.format==="cmyk"?this.toCmykString()===o.toCmykString():this.toRgbString()===o.toRgbString()}};var q=class extends W{constructor(){super(),this.hasSlotController=new rt(this,"hint","label"),this.isSafeValue=!1,this.localize=new I(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&At(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&At(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{let o=t.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!o&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.handleValueChange("",this.value||"")}static get validators(){let t=[pe()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Y(this.localName,this.size)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".slider.alpha"),o=e.querySelector(".slider-handle"),{width:r}=e.getBoundingClientRect(),a=this.value,s=this.value;o.focus(),t.preventDefault(),Ke(e,{onMove:n=>{this.alpha=H(n/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".slider.hue"),o=e.querySelector(".slider-handle"),{width:r}=e.getBoundingClientRect(),a=this.value,s=this.value;o.focus(),t.preventDefault(),Ke(e,{onMove:n=>{this.hue=H(n/r*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".grid"),o=e.querySelector(".grid-handle"),{width:r,height:a}=e.getBoundingClientRect(),s=this.value,n=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Ke(e,{onMove:(c,h)=>{this.saturation=H(c/r*100,0,100),this.brightness=H(100-h/a*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=H(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=H(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=H(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=H(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=H(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=H(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=H(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=H(this.brightness-e,0,100),this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){let e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;let e=new Ko(t);if(!e.isValid)return null;let o=e.toHsl(),r=e.toRgb(),a=e.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let s={h:o.h||0,s:(o.s||0)*100,l:(o.l||0)*100,a:o.a||0},n=e.toHexString(),c=e.toHex8String(),h={h:a.h||0,s:(a.s||0)*100,v:(a.v||0)*100,a:a.a||0};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(c)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{let o=this.value;this.setColor(e.sRGBHex),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,o,r=100){let a=new Ko(`hsva(${t}, ${e}%, ${o}%, ${r/100})`);return a.isValid?a.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){(t.has("value")||t.has("defaultValue"))&&this.handleValueChange(t.get("value")||"",this.value||""),super.willUpdate(t)}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let o=this.parseColor(e);o!==null?(this.inputValue=this.value||"",this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){let t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Lo),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){let t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,yt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ft(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Lt(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await J(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){let t=this.isEmpty,e=this.hasSlotController.test("label","withLabel"),o=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!e,a=this.hint?!0:!!o,s=this.saturation,n=100-this.brightness,c=Array.isArray(this.swatches)?this.swatches.map(u=>typeof u=="string"?{color:u,label:u}:u):this.swatches.split(";").filter(u=>u.trim()!=="").map(u=>({color:u.trim(),label:u.trim()})),h=b`
      <div
        part="base"
        class=${_({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${lt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${_({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${lt({top:`${n}%`,left:`${s}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${D(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${lt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${D(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?b`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${lt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${lt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${D(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${lt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${t?"":this.inputValue}
            value=${t?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":b`
                  <wa-button
                    part="format-button"
                    size="s"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?b`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${c.length>0?b`
              <div part="swatches" class="swatches">
                ${c.map(u=>{let p=this.parseColor(u.color);return p?b`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${D(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${u.label}
                      @click=${()=>this.selectSwatch(u.color)}
                      @keydown=${g=>!this.disabled&&g.key==="Enter"&&this.setColor(p.hexa)}
                    >
                      <div class="swatch-color" style=${lt({backgroundColor:p.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return b`
      <div
        class=${_({container:!0,"form-control":!0,"form-control-has-label":r})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${_({label:!0,"has-label":r})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${_({trigger:!0,"trigger-empty":t,"transparent-bg":!0,"form-control-input":!0})}
          style=${lt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${_({"has-slotted":a})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${h}
      </wa-popup>
    `}};q.css=[Ye,X,bt,hs];q.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C('[part~="base"]')],q.prototype,"base",2);i([C('[part~="input"]')],q.prototype,"input",2);i([C('[part~="form-control-label"]')],q.prototype,"triggerLabel",2);i([C('[part~="form-control-input"]')],q.prototype,"triggerButton",2);i([C(".color-popup")],q.prototype,"popup",2);i([C('[part~="preview"]')],q.prototype,"previewButton",2);i([C('[part~="trigger"]')],q.prototype,"trigger",2);i([T()],q.prototype,"hasFocus",2);i([T()],q.prototype,"isDraggingGridHandle",2);i([T()],q.prototype,"inputValue",2);i([T()],q.prototype,"hue",2);i([T()],q.prototype,"isEmpty",2);i([T()],q.prototype,"saturation",2);i([T()],q.prototype,"brightness",2);i([T()],q.prototype,"alpha",2);i([T()],q.prototype,"value",1);i([l({attribute:"value",reflect:!0})],q.prototype,"defaultValue",2);i([l({attribute:"with-label",reflect:!0,type:Boolean})],q.prototype,"withLabel",2);i([l({attribute:"with-hint",reflect:!0,type:Boolean})],q.prototype,"withHint",2);i([T()],q.prototype,"hasEyeDropper",2);i([l()],q.prototype,"label",2);i([l({attribute:"hint"})],q.prototype,"hint",2);i([l()],q.prototype,"format",2);i([l({reflect:!0})],q.prototype,"size",2);i([x("size")],q.prototype,"handleSizeChange",1);i([l({reflect:!0})],q.prototype,"placement",2);i([l({attribute:"without-format-toggle",type:Boolean})],q.prototype,"withoutFormatToggle",2);i([l({reflect:!0})],q.prototype,"name",2);i([l({type:Boolean})],q.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],q.prototype,"open",2);i([l({type:Boolean})],q.prototype,"opacity",2);i([l({type:Boolean})],q.prototype,"uppercase",2);i([l()],q.prototype,"swatches",2);i([l({type:Boolean,reflect:!0})],q.prototype,"required",2);i([vo({passive:!1})],q.prototype,"handleTouchMove",1);i([x("format",{waitUntilFirstUpdate:!0})],q.prototype,"handleFormatChange",1);i([x("opacity")],q.prototype,"handleOpacityChange",1);i([x("value")],q.prototype,"handleValueChange",1);i([x("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);q=i([S("wa-color-picker")],q);q.disableWarning?.("change-in-update");var Ao=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function $o(t,e){let o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Kh(e)})}function Kh(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let o=[...e.elements];if(o.length===1){e.requestSubmit(null);return}let r=o.find(a=>a.type==="submit"&&!a.matches(":disabled"));r&&(["input","button"].includes(r.localName)?e.requestSubmit(r):r.click())}var vs=k`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var K=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new rt(this,"hint","label"),this.localize=new I(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Gt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleSizeChange(){Y(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Ao),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){$o(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){if(super.updated(t),t.has("value")||t.has("defaultValue")||t.has("type")){let e=["number","date","time","datetime-local"];this.input&&e.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){let a=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,a,s,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e,a=this.withClear&&!this.disabled&&!this.readonly,s=(!this.didSSR||this.hasUpdated)&&a&&(typeof this.value=="number"||this.value&&this.value.length>0);return b`
      <label
        part="form-control-label label"
        class=${_({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${D(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${D(this.placeholder)}
          minlength=${D(this.minlength)}
          maxlength=${D(this.maxlength)}
          min=${D(this.min)}
          max=${D(this.max)}
          step=${D(this.step)}
          .value=${Pt(this.value??"")}
          autocapitalize=${D(this.autocapitalize)}
          autocomplete=${D(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${D(this.pattern)}
          enterkeyhint=${D(this.enterkeyhint)}
          inputmode=${D(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?b`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?b`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?b`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:b`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${_({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};K.css=[X,bt,vs];K.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C("input")],K.prototype,"input",2);i([l()],K.prototype,"title",2);i([l({reflect:!0})],K.prototype,"type",2);i([T()],K.prototype,"value",1);i([l({attribute:"value",reflect:!0})],K.prototype,"defaultValue",2);i([l({reflect:!0})],K.prototype,"size",2);i([x("size")],K.prototype,"handleSizeChange",1);i([l({reflect:!0})],K.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],K.prototype,"pill",2);i([l()],K.prototype,"label",2);i([l({attribute:"hint"})],K.prototype,"hint",2);i([l({attribute:"with-clear",type:Boolean})],K.prototype,"withClear",2);i([l()],K.prototype,"placeholder",2);i([l({type:Boolean,reflect:!0})],K.prototype,"readonly",2);i([l({attribute:"password-toggle",type:Boolean})],K.prototype,"passwordToggle",2);i([l({attribute:"password-visible",type:Boolean})],K.prototype,"passwordVisible",2);i([l({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],K.prototype,"withoutSpinButtons",2);i([l({type:Boolean,reflect:!0})],K.prototype,"required",2);i([l()],K.prototype,"pattern",2);i([l({type:Number})],K.prototype,"minlength",2);i([l({type:Number})],K.prototype,"maxlength",2);i([l()],K.prototype,"min",2);i([l()],K.prototype,"max",2);i([l()],K.prototype,"step",2);i([l()],K.prototype,"autocapitalize",2);i([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],K.prototype,"autocorrect",2);i([l()],K.prototype,"autocomplete",2);i([l({type:Boolean})],K.prototype,"autofocus",2);i([l()],K.prototype,"enterkeyhint",2);i([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],K.prototype,"spellcheck",2);i([l()],K.prototype,"inputmode",2);i([l({attribute:"with-label",type:Boolean})],K.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],K.prototype,"withHint",2);i([x("step",{waitUntilFirstUpdate:!0})],K.prototype,"handleStepChange",1);K=i([S("wa-input")],K);K.disableWarning?.("change-in-update");var $r=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var ws=k`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var $e=Math.min,Kt=Math.max,Xo=Math.round,Go=Math.floor,xe=t=>({x:t,y:t}),Yh={left:"right",right:"left",bottom:"top",top:"bottom"};function _r(t,e,o){return Kt(t,$e(e,o))}function ao(t,e){return typeof t=="function"?t(e):t}function Fe(t){return t.split("-")[0]}function so(t){return t.split("-")[1]}function zi(t){return t==="x"?"y":"x"}function Dr(t){return t==="y"?"height":"width"}function Te(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function Ir(t){return zi(Te(t))}function ks(t,e,o){o===void 0&&(o=!1);let r=so(t),a=Ir(t),s=Dr(a),n=a==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=Yo(n)),[n,Yo(n)]}function Cs(t){let e=Yo(t);return[Tr(t),e,Tr(e)]}function Tr(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var ys=["left","right"],xs=["right","left"],Xh=["top","bottom"],Gh=["bottom","top"];function Zh(t,e,o){switch(t){case"top":case"bottom":return o?e?xs:ys:e?ys:xs;case"left":case"right":return e?Xh:Gh;default:return[]}}function Ss(t,e,o,r){let a=so(t),s=Zh(Fe(t),o==="start",r);return a&&(s=s.map(n=>n+"-"+a),e&&(s=s.concat(s.map(Tr)))),s}function Yo(t){let e=Fe(t);return Yh[e]+t.slice(e.length)}function Qh(t){return{top:0,right:0,bottom:0,left:0,...t}}function Li(t){return typeof t!="number"?Qh(t):{top:t,right:t,bottom:t,left:t}}function no(t){let{x:e,y:o,width:r,height:a}=t;return{width:r,height:a,top:o,left:e,right:e+r,bottom:o+a,x:e,y:o}}function Es(t,e,o){let{reference:r,floating:a}=t,s=Te(e),n=Ir(e),c=Dr(n),h=Fe(e),u=s==="y",p=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,f=r[c]/2-a[c]/2,m;switch(h){case"top":m={x:p,y:r.y-a.height};break;case"bottom":m={x:p,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:g};break;case"left":m={x:r.x-a.width,y:g};break;default:m={x:r.x,y:r.y}}switch(so(e)){case"start":m[n]-=f*(o&&u?-1:1);break;case"end":m[n]+=f*(o&&u?-1:1);break}return m}async function zs(t,e){var o;e===void 0&&(e={});let{x:r,y:a,platform:s,rects:n,elements:c,strategy:h}=t,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=ao(e,t),y=Li(m),E=c[f?g==="floating"?"reference":"floating":g],v=no(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(E)))==null||o?E:E.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:u,rootBoundary:p,strategy:h})),w=g==="floating"?{x:r,y:a,width:n.floating.width,height:n.floating.height}:n.reference,A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),z=await(s.isElement==null?void 0:s.isElement(A))?await(s.getScale==null?void 0:s.getScale(A))||{x:1,y:1}:{x:1,y:1},$=no(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:A,strategy:h}):w);return{top:(v.top-$.top+y.top)/z.y,bottom:($.bottom-v.bottom+y.bottom)/z.y,left:(v.left-$.left+y.left)/z.x,right:($.right-v.right+y.right)/z.x}}var Jh=50,Ls=async(t,e,o)=>{let{placement:r="bottom",strategy:a="absolute",middleware:s=[],platform:n}=o,c=n.detectOverflow?n:{...n,detectOverflow:zs},h=await(n.isRTL==null?void 0:n.isRTL(e)),u=await n.getElementRects({reference:t,floating:e,strategy:a}),{x:p,y:g}=Es(u,r,h),f=r,m=0,y={};for(let d=0;d<s.length;d++){let E=s[d];if(!E)continue;let{name:v,fn:w}=E,{x:A,y:z,data:$,reset:V}=await w({x:p,y:g,initialPlacement:r,placement:f,strategy:a,middlewareData:y,rects:u,platform:c,elements:{reference:t,floating:e}});p=A??p,g=z??g,y[v]={...y[v],...$},V&&m<Jh&&(m++,typeof V=="object"&&(V.placement&&(f=V.placement),V.rects&&(u=V.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:a}):V.rects),{x:p,y:g}=Es(u,f,h)),d=-1)}return{x:p,y:g,placement:f,strategy:a,middlewareData:y}},As=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:r,placement:a,rects:s,platform:n,elements:c,middlewareData:h}=e,{element:u,padding:p=0}=ao(t,e)||{};if(u==null)return{};let g=Li(p),f={x:o,y:r},m=Ir(a),y=Dr(m),d=await n.getDimensions(u),E=m==="y",v=E?"top":"left",w=E?"bottom":"right",A=E?"clientHeight":"clientWidth",z=s.reference[y]+s.reference[m]-f[m]-s.floating[y],$=f[m]-s.reference[m],V=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u)),N=V?V[A]:0;(!N||!await(n.isElement==null?void 0:n.isElement(V)))&&(N=c.floating[A]||s.floating[y]);let U=z/2-$/2,st=N/2-d[y]/2-1,nt=$e(g[v],st),mt=$e(g[w],st),ht=nt,_t=N-d[y]-mt,ft=N/2-d[y]/2+U,te=_r(ht,ft,_t),O=!h.arrow&&so(a)!=null&&ft!==te&&s.reference[y]/2-(ft<ht?nt:mt)-d[y]/2<0,P=O?ft<ht?ft-ht:ft-_t:0;return{[m]:f[m]+P,data:{[m]:te,centerOffset:ft-te-P,...O&&{alignmentOffset:P}},reset:O}}});var $s=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;let{placement:a,middlewareData:s,rects:n,initialPlacement:c,platform:h,elements:u}=e,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:d=!0,...E}=ao(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};let v=Fe(a),w=Te(c),A=Fe(c)===c,z=await(h.isRTL==null?void 0:h.isRTL(u.floating)),$=f||(A||!d?[Yo(c)]:Cs(c)),V=y!=="none";!f&&V&&$.push(...Ss(c,d,y,z));let N=[c,...$],U=await h.detectOverflow(e,E),st=[],nt=((r=s.flip)==null?void 0:r.overflows)||[];if(p&&st.push(U[v]),g){let ft=ks(a,n,z);st.push(U[ft[0]],U[ft[1]])}if(nt=[...nt,{placement:a,overflows:st}],!st.every(ft=>ft<=0)){var mt,ht;let ft=(((mt=s.flip)==null?void 0:mt.index)||0)+1,te=N[ft];if(te&&(!(g==="alignment"?w!==Te(te):!1)||nt.every(R=>Te(R.placement)===w?R.overflows[0]>0:!0)))return{data:{index:ft,overflows:nt},reset:{placement:te}};let O=(ht=nt.filter(P=>P.overflows[0]<=0).sort((P,R)=>P.overflows[1]-R.overflows[1])[0])==null?void 0:ht.placement;if(!O)switch(m){case"bestFit":{var _t;let P=(_t=nt.filter(R=>{if(V){let F=Te(R.placement);return F===w||F==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(F=>F>0).reduce((F,B)=>F+B,0)]).sort((R,F)=>R[1]-F[1])[0])==null?void 0:_t[0];P&&(O=P);break}case"initialPlacement":O=c;break}if(a!==O)return{reset:{placement:O}}}return{}}}};var td=new Set(["left","top"]);async function ed(t,e){let{placement:o,platform:r,elements:a}=t,s=await(r.isRTL==null?void 0:r.isRTL(a.floating)),n=Fe(o),c=so(o),h=Te(o)==="y",u=td.has(n)?-1:1,p=s&&h?-1:1,g=ao(e,t),{mainAxis:f,crossAxis:m,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof y=="number"&&(m=c==="end"?y*-1:y),h?{x:m*p,y:f*u}:{x:f*u,y:m*p}}var Ts=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;let{x:a,y:s,placement:n,middlewareData:c}=e,h=await ed(e,t);return n===((o=c.offset)==null?void 0:o.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:a+h.x,y:s+h.y,data:{...h,placement:n}}}}},_s=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:r,placement:a,platform:s}=e,{mainAxis:n=!0,crossAxis:c=!1,limiter:h={fn:v=>{let{x:w,y:A}=v;return{x:w,y:A}}},...u}=ao(t,e),p={x:o,y:r},g=await s.detectOverflow(e,u),f=Te(Fe(a)),m=zi(f),y=p[m],d=p[f];if(n){let v=m==="y"?"top":"left",w=m==="y"?"bottom":"right",A=y+g[v],z=y-g[w];y=_r(A,y,z)}if(c){let v=f==="y"?"top":"left",w=f==="y"?"bottom":"right",A=d+g[v],z=d-g[w];d=_r(A,d,z)}let E=h.fn({...e,[m]:y,[f]:d});return{...E,data:{x:E.x-o,y:E.y-r,enabled:{[m]:n,[f]:c}}}}}};var Ds=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,r;let{placement:a,rects:s,platform:n,elements:c}=e,{apply:h=()=>{},...u}=ao(t,e),p=await n.detectOverflow(e,u),g=Fe(a),f=so(a),m=Te(a)==="y",{width:y,height:d}=s.floating,E,v;g==="top"||g==="bottom"?(E=g,v=f===(await(n.isRTL==null?void 0:n.isRTL(c.floating))?"start":"end")?"left":"right"):(v=g,E=f==="end"?"top":"bottom");let w=d-p.top-p.bottom,A=y-p.left-p.right,z=$e(d-p[E],w),$=$e(y-p[v],A),V=!e.middlewareData.shift,N=z,U=$;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(U=A),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(N=w),V&&!f){let nt=Kt(p.left,0),mt=Kt(p.right,0),ht=Kt(p.top,0),_t=Kt(p.bottom,0);m?U=y-2*(nt!==0||mt!==0?nt+mt:Kt(p.left,p.right)):N=d-2*(ht!==0||_t!==0?ht+_t:Kt(p.top,p.bottom))}await h({...e,availableWidth:U,availableHeight:N});let st=await n.getDimensions(c.floating);return y!==st.width||d!==st.height?{reset:{rects:!0}}:{}}}};function Rr(){return typeof window<"u"}function co(t){return Rs(t)?(t.nodeName||"").toLowerCase():"#document"}function Qt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ke(t){var e;return(e=(Rs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Rs(t){return Rr()?t instanceof Node||t instanceof Qt(t).Node:!1}function me(t){return Rr()?t instanceof Element||t instanceof Qt(t).Element:!1}function _e(t){return Rr()?t instanceof HTMLElement||t instanceof Qt(t).HTMLElement:!1}function Is(t){return!Rr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qt(t).ShadowRoot}function To(t){let{overflow:e,overflowX:o,overflowY:r,display:a}=fe(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&a!=="inline"&&a!=="contents"}function Ps(t){return/^(table|td|th)$/.test(co(t))}function Zo(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var od=/transform|translate|scale|rotate|perspective|filter/,rd=/paint|layout|strict|content/,lo=t=>!!t&&t!=="none",Ai;function _o(t){let e=me(t)?fe(t):t;return lo(e.transform)||lo(e.translate)||lo(e.scale)||lo(e.rotate)||lo(e.perspective)||!Pr()&&(lo(e.backdropFilter)||lo(e.filter))||od.test(e.willChange||"")||rd.test(e.contain||"")}function Os(t){let e=Be(t);for(;_e(e)&&!ho(e);){if(_o(e))return e;if(Zo(e))return null;e=Be(e)}return null}function Pr(){return Ai==null&&(Ai=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Ai}function ho(t){return/^(html|body|#document)$/.test(co(t))}function fe(t){return Qt(t).getComputedStyle(t)}function Qo(t){return me(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Be(t){if(co(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Is(t)&&t.host||ke(t);return Is(e)?e.host:e}function Ms(t){let e=Be(t);return ho(e)?t.ownerDocument?t.ownerDocument.body:t.body:_e(e)&&To(e)?e:Ms(e)}function Ve(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);let a=Ms(t),s=a===((r=t.ownerDocument)==null?void 0:r.body),n=Qt(a);if(s){let c=Or(n);return e.concat(n,n.visualViewport||[],To(a)?a:[],c&&o?Ve(c):[])}else return e.concat(a,Ve(a,[],o))}function Or(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ws(t){let e=fe(t),o=parseFloat(e.width)||0,r=parseFloat(e.height)||0,a=_e(t),s=a?t.offsetWidth:o,n=a?t.offsetHeight:r,c=Xo(o)!==s||Xo(r)!==n;return c&&(o=s,r=n),{width:o,height:r,$:c}}function Ti(t){return me(t)?t:t.contextElement}function Do(t){let e=Ti(t);if(!_e(e))return xe(1);let o=e.getBoundingClientRect(),{width:r,height:a,$:s}=Ws(e),n=(s?Xo(o.width):o.width)/r,c=(s?Xo(o.height):o.height)/a;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}var id=xe(0);function qs(t){let e=Qt(t);return!Pr()||!e.visualViewport?id:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ad(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==Qt(t)?!1:e}function po(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);let a=t.getBoundingClientRect(),s=Ti(t),n=xe(1);e&&(r?me(r)&&(n=Do(r)):n=Do(t));let c=ad(s,o,r)?qs(s):xe(0),h=(a.left+c.x)/n.x,u=(a.top+c.y)/n.y,p=a.width/n.x,g=a.height/n.y;if(s){let f=Qt(s),m=r&&me(r)?Qt(r):r,y=f,d=Or(y);for(;d&&r&&m!==y;){let E=Do(d),v=d.getBoundingClientRect(),w=fe(d),A=v.left+(d.clientLeft+parseFloat(w.paddingLeft))*E.x,z=v.top+(d.clientTop+parseFloat(w.paddingTop))*E.y;h*=E.x,u*=E.y,p*=E.x,g*=E.y,h+=A,u+=z,y=Qt(d),d=Or(y)}}return no({width:p,height:g,x:h,y:u})}function Mr(t,e){let o=Qo(t).scrollLeft;return e?e.left+o:po(ke(t)).left+o}function Hs(t,e){let o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-Mr(t,o),a=o.top+e.scrollTop;return{x:r,y:a}}function sd(t){let{elements:e,rect:o,offsetParent:r,strategy:a}=t,s=a==="fixed",n=ke(r),c=e?Zo(e.floating):!1;if(r===n||c&&s)return o;let h={scrollLeft:0,scrollTop:0},u=xe(1),p=xe(0),g=_e(r);if((g||!g&&!s)&&((co(r)!=="body"||To(n))&&(h=Qo(r)),g)){let m=po(r);u=Do(r),p.x=m.x+r.clientLeft,p.y=m.y+r.clientTop}let f=n&&!g&&!s?Hs(n,h):xe(0);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-h.scrollLeft*u.x+p.x+f.x,y:o.y*u.y-h.scrollTop*u.y+p.y+f.y}}function nd(t){return Array.from(t.getClientRects())}function ld(t){let e=ke(t),o=Qo(t),r=t.ownerDocument.body,a=Kt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Kt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),n=-o.scrollLeft+Mr(t),c=-o.scrollTop;return fe(r).direction==="rtl"&&(n+=Kt(e.clientWidth,r.clientWidth)-a),{width:a,height:s,x:n,y:c}}var Fs=25;function cd(t,e){let o=Qt(t),r=ke(t),a=o.visualViewport,s=r.clientWidth,n=r.clientHeight,c=0,h=0;if(a){s=a.width,n=a.height;let p=Pr();(!p||p&&e==="fixed")&&(c=a.offsetLeft,h=a.offsetTop)}let u=Mr(r);if(u<=0){let p=r.ownerDocument,g=p.body,f=getComputedStyle(g),m=p.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,y=Math.abs(r.clientWidth-g.clientWidth-m);y<=Fs&&(s-=y)}else u<=Fs&&(s+=u);return{width:s,height:n,x:c,y:h}}function hd(t,e){let o=po(t,!0,e==="fixed"),r=o.top+t.clientTop,a=o.left+t.clientLeft,s=_e(t)?Do(t):xe(1),n=t.clientWidth*s.x,c=t.clientHeight*s.y,h=a*s.x,u=r*s.y;return{width:n,height:c,x:h,y:u}}function Bs(t,e,o){let r;if(e==="viewport")r=cd(t,o);else if(e==="document")r=ld(ke(t));else if(me(e))r=hd(e,o);else{let a=qs(t);r={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return no(r)}function Ns(t,e){let o=Be(t);return o===e||!me(o)||ho(o)?!1:fe(o).position==="fixed"||Ns(o,e)}function dd(t,e){let o=e.get(t);if(o)return o;let r=Ve(t,[],!1).filter(c=>me(c)&&co(c)!=="body"),a=null,s=fe(t).position==="fixed",n=s?Be(t):t;for(;me(n)&&!ho(n);){let c=fe(n),h=_o(n);!h&&c.position==="fixed"&&(a=null),(s?!h&&!a:!h&&c.position==="static"&&!!a&&(a.position==="absolute"||a.position==="fixed")||To(n)&&!h&&Ns(t,n))?r=r.filter(p=>p!==n):a=c,n=Be(n)}return e.set(t,r),r}function pd(t){let{element:e,boundary:o,rootBoundary:r,strategy:a}=t,n=[...o==="clippingAncestors"?Zo(e)?[]:dd(e,this._c):[].concat(o),r],c=Bs(e,n[0],a),h=c.top,u=c.right,p=c.bottom,g=c.left;for(let f=1;f<n.length;f++){let m=Bs(e,n[f],a);h=Kt(m.top,h),u=$e(m.right,u),p=$e(m.bottom,p),g=Kt(m.left,g)}return{width:u-g,height:p-h,x:g,y:h}}function ud(t){let{width:e,height:o}=Ws(t);return{width:e,height:o}}function md(t,e,o){let r=_e(e),a=ke(e),s=o==="fixed",n=po(t,!0,s,e),c={scrollLeft:0,scrollTop:0},h=xe(0);function u(){h.x=Mr(a)}if(r||!r&&!s)if((co(e)!=="body"||To(a))&&(c=Qo(e)),r){let m=po(e,!0,s,e);h.x=m.x+e.clientLeft,h.y=m.y+e.clientTop}else a&&u();s&&!r&&a&&u();let p=a&&!r&&!s?Hs(a,c):xe(0),g=n.left+c.scrollLeft-h.x-p.x,f=n.top+c.scrollTop-h.y-p.y;return{x:g,y:f,width:n.width,height:n.height}}function $i(t){return fe(t).position==="static"}function Vs(t,e){if(!_e(t)||fe(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return ke(t)===o&&(o=o.ownerDocument.body),o}function Us(t,e){let o=Qt(t);if(Zo(t))return o;if(!_e(t)){let a=Be(t);for(;a&&!ho(a);){if(me(a)&&!$i(a))return a;a=Be(a)}return o}let r=Vs(t,e);for(;r&&Ps(r)&&$i(r);)r=Vs(r,e);return r&&ho(r)&&$i(r)&&!_o(r)?o:r||Os(t)||o}var fd=async function(t){let e=this.getOffsetParent||Us,o=this.getDimensions,r=await o(t.floating);return{reference:md(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function bd(t){return fe(t).direction==="rtl"}var Jo={convertOffsetParentRelativeRectToViewportRelativeRect:sd,getDocumentElement:ke,getClippingRect:pd,getOffsetParent:Us,getElementRects:fd,getClientRects:nd,getDimensions:ud,getScale:Do,isElement:me,isRTL:bd};function js(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function gd(t,e){let o=null,r,a=ke(t);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function n(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),s();let u=t.getBoundingClientRect(),{left:p,top:g,width:f,height:m}=u;if(c||e(),!f||!m)return;let y=Go(g),d=Go(a.clientWidth-(p+f)),E=Go(a.clientHeight-(g+m)),v=Go(p),A={rootMargin:-y+"px "+-d+"px "+-E+"px "+-v+"px",threshold:Kt(0,$e(1,h))||1},z=!0;function $(V){let N=V[0].intersectionRatio;if(N!==h){if(!z)return n();N?n(!1,N):r=setTimeout(()=>{n(!1,1e-7)},1e3)}N===1&&!js(u,t.getBoundingClientRect())&&n(),z=!1}try{o=new IntersectionObserver($,{...A,root:a.ownerDocument})}catch{o=new IntersectionObserver($,A)}o.observe(t)}return n(!0),s}function Fr(t,e,o,r){r===void 0&&(r={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=r,u=Ti(t),p=a||s?[...u?Ve(u):[],...e?Ve(e):[]]:[];p.forEach(v=>{a&&v.addEventListener("scroll",o,{passive:!0}),s&&v.addEventListener("resize",o)});let g=u&&c?gd(u,o):null,f=-1,m=null;n&&(m=new ResizeObserver(v=>{let[w]=v;w&&w.target===u&&m&&e&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var A;(A=m)==null||A.observe(e)})),o()}),u&&!h&&m.observe(u),e&&m.observe(e));let y,d=h?po(t):null;h&&E();function E(){let v=po(t);d&&!js(d,v)&&o(),d=v,y=requestAnimationFrame(E)}return o(),()=>{var v;p.forEach(w=>{a&&w.removeEventListener("scroll",o),s&&w.removeEventListener("resize",o)}),g?.(),(v=m)==null||v.disconnect(),m=null,h&&cancelAnimationFrame(y)}}var Br=Ts;var Vr=_s,Wr=$s,_i=Ds;var Ks=As;var qr=(t,e,o)=>{let r=new Map,a={platform:Jo,...o},s={...a.platform,_c:r};return Ls(t,e,{...a,platform:s})};function Ys(t){return vd(t)}function Di(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function vd(t){for(let e=t;e;e=Di(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Di(t);e;e=Di(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||_o(o)||e.tagName==="BODY"))return e}return null}function Xs(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var wd=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),at=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,a=0,s=0,n=0,c=0,h=0,u=0,p=0;o?t.top<e.top?(r=t.left,a=t.bottom,s=t.right,n=t.bottom,c=e.left,h=e.top,u=e.right,p=e.top):(r=e.left,a=e.bottom,s=e.right,n=e.bottom,c=t.left,h=t.top,u=t.right,p=t.top):t.left<e.left?(r=t.right,a=t.top,s=e.left,n=e.top,c=t.right,h=t.bottom,u=e.left,p=e.bottom):(r=e.right,a=e.top,s=t.left,n=t.top,c=e.right,h=e.bottom,u=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${a}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=wd,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Xs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Fr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[Br({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(_i({apply:({rects:r})=>{let a=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${r.reference.width}px`:"",this.popup.style.height=s?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!Xs(this.anchor)&&this.boundary==="scroll"&&(e=Ve(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&t.push(Wr({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Vr({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(_i({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ks({element:this.arrowEl,padding:this.arrowPadding}));let o=this.SUPPORTS_POPOVER?r=>Jo.getOffsetParent(r,Ys):Jo.getOffsetParent;qr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...Jo,getOffsetParent:o}}).then(({x:r,y:a,middlewareData:s,placement:n})=>{let c=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${a}px`}),this.arrow){let u=s.arrow.x,p=s.arrow.y,g="",f="",m="",y="";if(this.arrowPlacement==="start"){let d=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=c?d:"",y=c?"":d}else if(this.arrowPlacement==="end"){let d=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=c?"":d,y=c?d:"",m=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",g=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof u=="number"?`${u}px`:"",g=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:g,right:f,bottom:m,left:y,[h]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new $r)}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${_({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${_({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};at.css=ws;i([C(".popup")],at.prototype,"popup",2);i([C(".arrow")],at.prototype,"arrowEl",2);i([l({attribute:!1,type:Boolean})],at.prototype,"SUPPORTS_POPOVER",2);i([l()],at.prototype,"anchor",2);i([l({type:Boolean,reflect:!0})],at.prototype,"active",2);i([l({reflect:!0})],at.prototype,"placement",2);i([l()],at.prototype,"boundary",2);i([l({type:Number})],at.prototype,"distance",2);i([l({type:Number})],at.prototype,"skidding",2);i([l({type:Boolean})],at.prototype,"arrow",2);i([l({attribute:"arrow-placement"})],at.prototype,"arrowPlacement",2);i([l({attribute:"arrow-padding",type:Number})],at.prototype,"arrowPadding",2);i([l({type:Boolean})],at.prototype,"flip",2);i([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],at.prototype,"flipFallbackPlacements",2);i([l({attribute:"flip-fallback-strategy"})],at.prototype,"flipFallbackStrategy",2);i([l({type:Object})],at.prototype,"flipBoundary",2);i([l({attribute:"flip-padding",type:Number})],at.prototype,"flipPadding",2);i([l({type:Boolean})],at.prototype,"shift",2);i([l({type:Object})],at.prototype,"shiftBoundary",2);i([l({attribute:"shift-padding",type:Number})],at.prototype,"shiftPadding",2);i([l({attribute:"auto-size"})],at.prototype,"autoSize",2);i([l()],at.prototype,"sync",2);i([l({type:Object})],at.prototype,"autoSizeBoundary",2);i([l({attribute:"auto-size-padding",type:Number})],at.prototype,"autoSizePadding",2);i([l({attribute:"hover-bridge",type:Boolean})],at.prototype,"hoverBridge",2);at=i([S("wa-popup")],at);var Gs=k`
  :host {
    --divider-width: 0.125rem;
    --handle-size: 2.5rem;

    display: block;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .before,
  .after {
    display: block;

    &::slotted(img),
    &::slotted(svg) {
      display: block;
      max-width: 100% !important;
      height: auto;
    }

    &::slotted(:not(img, svg)) {
      isolation: isolate;
    }
  }

  .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  /* Disable pointer-events while dragging. This is especially important for iframes. */
  :host(:state(dragging)) {
    .before,
    .after {
      pointer-events: none;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--wa-color-surface-default);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.4);
    color: var(--wa-color-neutral-on-quiet);
    cursor: inherit;
    z-index: 10;
  }

  .handle:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;var uo=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.position=50}handleDrag(t){let{width:e}=this.getBoundingClientRect(),o=this.localize.dir()==="rtl";t.preventDefault(),Ke(this,{onMove:r=>{this.customStates.set("dragging",!0),this.position=parseFloat(H(r/e*100,0,100).toFixed(2)),o&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){let e=this.matches(":dir(ltr)"),o=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let r=t.shiftKey?10:1,a=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight")&&(a-=r),(e&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft")&&(a+=r),t.key==="Home"&&(a=0),t.key==="End"&&(a=100),a=H(a,0,100),this.position=a}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return b`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${lt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${lt({left:t?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};uo.css=Gs;i([C(".handle")],uo.prototype,"handle",2);i([l({type:Number,reflect:!0})],uo.prototype,"position",2);i([x("position",{waitUntilFirstUpdate:!0})],uo.prototype,"handlePositionChange",1);uo=i([S("wa-comparison")],uo);var Zs=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Qs=k`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`;var Js="wa-internal-tooltip",Ii="__waCopyButtonAssignedId",gt=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.isCopying=!1,this.status="rest",this.hasCustomTrigger=!1,this.liveAnnouncement="",this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.tooltip="full",this.handleDefaultSlotChange=()=>{let e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find(o=>o instanceof HTMLElement)??null;e!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=e),this.hasCustomTrigger=e!==null,e&&this.tooltip!=="none"?(e.id||(e.id=de("wa-copy-button-trigger-"),e[Ii]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}firstUpdated(){this.didSSR?this.updateComplete.then(()=>{this.handleDefaultSlotChange()}):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set("success",this.status==="success"),this.customStates.set("error",this.status==="error"),this.syncTooltipText(),this.status==="success"||this.status==="error"?this.liveAnnouncement=this.currentLabel:this.liveAnnouncement=""}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(t){this.tooltip==="none"?this.removeLightTooltip():t==="none"?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute("trigger",this.tooltip==="copy"?"manual":"hover focus")}releaseAssignedId(t){t&&t[Ii]&&(t.removeAttribute("id"),delete t[Ii])}ensureLightTooltip(){if(!this.customTriggerEl)return;let t=this.tooltip==="copy"?"manual":"hover focus";if(this.lightTooltip)this.lightTooltip.setAttribute("for",this.customTriggerEl.id),this.lightTooltip.setAttribute("trigger",t),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{let e=document.createElement("wa-tooltip");e.setAttribute("slot",Js),e.setAttribute("part","feedback"),e.setAttribute("trigger",t),e.dataset.copyButtonTooltip="",e.setAttribute("for",this.customTriggerEl.id),e.placement=this.tooltipPlacement,e.disabled=this.disabled,e.textContent=this.currentLabel,this.appendChild(e),this.lightTooltip=e}}removeLightTooltip(){this.lightTooltip&&(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),this.lightTooltip=null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),o=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]"),a=this.from,s="";o?[a,s]=this.from.trim().split("."):r&&([a,s]=this.from.trim().replace(/\]$/,"").split("["));let n="getElementById"in e?e.getElementById(a):null;n?r?t=n.getAttribute(s)||"":o?t=n[s]||"":t=n.textContent||"":(this.showStatus("error"),this.dispatchEvent(new Le))}if(!t)this.showStatus("error"),this.dispatchEvent(new Le);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Zs({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new Le)}}async showStatus(t){if(this.status=t,this.copyIcon){let r=t==="success"?this.successIcon:this.errorIcon;await J(this.copyIcon,"hide"),this.copyIcon.hidden=!0,r.hidden=!1,await J(r,"show")}await this.updateComplete;let e=this.tooltip==="none"?null:this.activeTooltip,o=null;e&&(e.show(),o=new Promise(r=>{e.addEventListener("wa-after-hide",()=>{this.feedbackTimeout!==null&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),r()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await e.hide()},this.feedbackDuration)),setTimeout(async()=>{if(o&&await o,this.copyIcon){let r=t==="success"?this.successIcon:this.errorIcon;await J(r,"hide"),r.hidden=!0,this.copyIcon.hidden=!1,await J(this.copyIcon,"show")}this.status="rest",this.isCopying=!1},this.feedbackDuration)}render(){let e=!this.hasCustomTrigger&&this.tooltip!=="none",o=this.tooltip==="copy"?"manual":"hover focus";return this.didSSR&&!this.hasUpdated&&(e=!1),b`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${e?b`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${o}
                class=${_({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status==="success","copy-button-tooltip-error":this.status==="error"})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:""}
        <slot name="${Js}"></slot>
        <div class="wa-visually-hidden" role="status" aria-live="polite">${this.liveAnnouncement}</div>
      </div>
    `}};gt.css=[di,Ye,Qs];i([C('slot[name="copy-icon"]')],gt.prototype,"copyIcon",2);i([C('slot[name="success-icon"]')],gt.prototype,"successIcon",2);i([C('slot[name="error-icon"]')],gt.prototype,"errorIcon",2);i([C("slot:not([name])")],gt.prototype,"defaultSlot",2);i([C('wa-tooltip[part="feedback"]')],gt.prototype,"shadowTooltip",2);i([T()],gt.prototype,"isCopying",2);i([T()],gt.prototype,"status",2);i([T()],gt.prototype,"hasCustomTrigger",2);i([T()],gt.prototype,"liveAnnouncement",2);i([l()],gt.prototype,"value",2);i([l()],gt.prototype,"from",2);i([l({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);i([l({attribute:"copy-label"})],gt.prototype,"copyLabel",2);i([l({attribute:"success-label"})],gt.prototype,"successLabel",2);i([l({attribute:"error-label"})],gt.prototype,"errorLabel",2);i([l({attribute:"feedback-duration",type:Number})],gt.prototype,"feedbackDuration",2);i([l({attribute:"tooltip-placement",reflect:!0})],gt.prototype,"tooltipPlacement",2);i([l({reflect:!0})],gt.prototype,"tooltip",2);i([x("status")],gt.prototype,"handleStatusChange",1);i([x(["copyLabel","successLabel","errorLabel"])],gt.prototype,"handleLabelChange",1);i([x(["tooltipPlacement","disabled"],{waitUntilFirstUpdate:!0})],gt.prototype,"handleTooltipOptionsChange",1);i([x("tooltip",{waitUntilFirstUpdate:!0})],gt.prototype,"handleTooltipModeChange",1);gt=i([S("wa-copy-button")],gt);var tn=k`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`;var Bt=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Vt=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Wt=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var qt=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var kt=class extends L{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&At(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){let e=t.relatedTarget,o=!!(e&&this.anchor?.contains(e)),r=!!(e&&this.contains(e));if(o||r)return;clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)}}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=de("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Lt(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){let r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(e)||(r.push(e),t.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(t,e){let a=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==e);a.length>0?t.setAttribute("aria-labelledby",a.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),Ft(this),this.body.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new qt)}else{let t=new Vt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),Lt(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Wt)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let e=this.for?t.getElementById?.(this.for):null,o=this.anchor;if(e===o)return;let{signal:r}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),e.addEventListener("click",this.handleClick,{signal:r}),e.addEventListener("mouseover",this.handleMouseOver,{signal:r}),e.addEventListener("mouseout",this.handleMouseOut,{signal:r})),o&&(this.removeFromAriaLabelledBy(o,this.id),o.removeEventListener("blur",this.handleBlur,{capture:!0}),o.removeEventListener("focus",this.handleFocus,{capture:!0}),o.removeEventListener("click",this.handleClick),o.removeEventListener("mouseover",this.handleMouseOver),o.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,yt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"wa-after-hide")}render(){return b`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};kt.css=tn;kt.dependencies={"wa-popup":at};i([C("slot:not([name])")],kt.prototype,"defaultSlot",2);i([C(".body")],kt.prototype,"body",2);i([C("wa-popup")],kt.prototype,"popup",2);i([l()],kt.prototype,"placement",2);i([l({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);i([l({type:Number})],kt.prototype,"distance",2);i([l({type:Boolean,reflect:!0})],kt.prototype,"open",2);i([l({type:Number})],kt.prototype,"skidding",2);i([l({attribute:"show-delay",type:Number})],kt.prototype,"showDelay",2);i([l({attribute:"hide-delay",type:Number})],kt.prototype,"hideDelay",2);i([l()],kt.prototype,"trigger",2);i([l({attribute:"without-arrow",type:Boolean,reflect:!0})],kt.prototype,"withoutArrow",2);i([l()],kt.prototype,"for",2);i([T()],kt.prototype,"anchor",2);i([x("open",{waitUntilFirstUpdate:!0})],kt.prototype,"handleOpenChange",1);i([x("for")],kt.prototype,"handleForChange",1);i([x(["distance","placement","skidding"])],kt.prototype,"handleOptionsChange",1);i([x("disabled")],kt.prototype,"handleDisabledChange",1);kt=i([S("wa-tooltip")],kt);var en=k`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    box-sizing: border-box; /* Ensure contents don't overflow */
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;var Ht=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.animationGeneration=0,this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(a)?!0:r instanceof W?!("disabled"in r)||!r.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(o=>{o!==this&&o.open&&(o.open=!1)})}async handleOpenChange(){this.animationGeneration++;let t=this.animationGeneration;if(this.open){this.details.open=!0;let e=new Bt;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;let o=Oe(getComputedStyle(this.body).getPropertyValue("--show-duration"));if(await Pe(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:o,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new qt)}else{let e=new Vt;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;let o=Oe(getComputedStyle(this.body).getPropertyValue("--hide-duration"));if(await Pe(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:o,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="0",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Wt)}}async show(){if(!(this.open||this.disabled))return this.open=!0,yt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,yt(this,"wa-after-hide")}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return b`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${_({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Ht.css=en;i([C("details")],Ht.prototype,"details",2);i([C("summary")],Ht.prototype,"header",2);i([C(".body")],Ht.prototype,"body",2);i([C(".expand-icon-slot")],Ht.prototype,"expandIconSlot",2);i([T()],Ht.prototype,"isAnimating",2);i([l({type:Boolean,reflect:!0})],Ht.prototype,"open",2);i([l()],Ht.prototype,"summary",2);i([l({reflect:!0})],Ht.prototype,"name",2);i([l({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);i([l({reflect:!0})],Ht.prototype,"appearance",2);i([l({attribute:"icon-placement",reflect:!0})],Ht.prototype,"iconPlacement",2);i([x("open",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleOpenChange",1);Ht=i([S("wa-details")],Ht);function yd(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ri=new Set;function xd(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function kd(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Io(t){if(Ri.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){let e=xd()+kd(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",o),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function Ro(t){Ri.delete(t),Ri.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function tr(t,e,o="vertical",r="smooth"){let a=yd(t,e),s=a.top+e.scrollTop,n=a.left+e.scrollLeft,c=e.scrollLeft,h=e.scrollLeft+e.offsetWidth,u=e.scrollTop,p=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(n<c?e.scrollTo({left:n,behavior:r}):n+t.clientWidth>h&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(s<u?e.scrollTo({top:s,behavior:r}):s+t.clientHeight>p&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:r}))}function Ze(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var on=k`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;var Ce=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.hasSlotController=new rt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&At(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Io(this))}disconnectedCallback(){super.disconnectedCallback(),Ro(this),this.removeOpenListeners()}async requestClose(t){let e=new Vt({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,J(this.dialog,"pulse");return}this.removeOpenListeners(),await J(this.dialog,"hide"),this.open=!1,this.dialog.close(),Ro(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.dispatchEvent(new Wt)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ft(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Lt(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&At(this)&&this.requestClose(this.dialog)}handleDialogClick(t){let o=t.target.closest('[data-dialog="close"]');o&&(t.stopPropagation(),this.requestClose(o))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await J(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Io(this),requestAnimationFrame(()=>{let e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await J(this.dialog,"show"),this.dispatchEvent(new qt)}render(){let t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return b`
      <dialog
        part="dialog"
        class=${_({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?b`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${o=>this.requestClose(o.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <footer part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};Ce.css=on;i([C(".dialog")],Ce.prototype,"dialog",2);i([l({type:Boolean,reflect:!0})],Ce.prototype,"open",2);i([l({reflect:!0})],Ce.prototype,"label",2);i([l({attribute:"without-header",type:Boolean,reflect:!0})],Ce.prototype,"withoutHeader",2);i([l({attribute:"light-dismiss",type:Boolean})],Ce.prototype,"lightDismiss",2);i([l({attribute:"with-footer",type:Boolean})],Ce.prototype,"withFooter",2);i([x("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);Ce=i([S("wa-dialog")],Ce);document.addEventListener("click",t=>{let e=t.target.closest("[data-dialog]");if(e instanceof Element){let[o,r]=Ze(e.getAttribute("data-dialog")||"");if(o==="open"&&r?.length){let s=e.getRootNode().getElementById(r);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${r}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var rn=k`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`;var Po=class extends L{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};Po.css=rn;i([l({reflect:!0})],Po.prototype,"orientation",2);i([x("orientation")],Po.prototype,"handleVerticalChange",1);Po=i([S("wa-divider")],Po);var an=k`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;var be=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.hasSlotController=new rt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&At(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),Io(this))}disconnectedCallback(){super.disconnectedCallback(),Ro(this),this.removeOpenListeners()}async requestClose(t){let e=new Vt({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,J(this.drawer,"pulse");return}this.removeOpenListeners(),await J(this.drawer,"hide"),this.open=!1,this.drawer.close(),Ro(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.dispatchEvent(new Wt)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ft(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Lt(this)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&At(this)&&this.requestClose(this.drawer)}handleDialogClick(t){let o=t.target.closest('[data-drawer="close"]');o&&(t.stopPropagation(),this.requestClose(o))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await J(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Io(this),requestAnimationFrame(()=>{let e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await J(this.drawer,"show"),this.dispatchEvent(new qt)}render(){let t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return b`
      <dialog
        part="dialog"
        class=${_({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?b`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${o=>this.requestClose(o.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <footer part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};be.css=an;i([C(".drawer")],be.prototype,"drawer",2);i([l({type:Boolean,reflect:!0})],be.prototype,"open",2);i([l({reflect:!0})],be.prototype,"label",2);i([l({reflect:!0})],be.prototype,"placement",2);i([l({attribute:"without-header",type:Boolean,reflect:!0})],be.prototype,"withoutHeader",2);i([l({attribute:"light-dismiss",type:Boolean})],be.prototype,"lightDismiss",2);i([l({attribute:"with-footer",type:Boolean})],be.prototype,"withFooter",2);i([x("open",{waitUntilFirstUpdate:!0})],be.prototype,"handleOpenChange",1);be=i([S("wa-drawer")],be);document.addEventListener("click",t=>{let e=t.target.closest("[data-drawer]");if(e instanceof Element){let[o,r]=Ze(e.getAttribute("data-drawer")||"");if(o==="open"&&r?.length){let s=e.getRootNode().getElementById(r);s?.localName==="wa-drawer"?s.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var sn=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};function*er(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*er(t.shadowRoot.activeElement)))}var nn=k`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var Pi=new Set,Nt=class extends L{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new I(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="m",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{let e=this.localize.dir()==="rtl";if(t.key==="Escape"&&this.open&&At(this)){let p=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,p?.focus({preventScroll:!0});return}let o=[...er()].find(p=>p.localName==="wa-dropdown-item"),r=o?.localName==="wa-dropdown-item",a=this.getCurrentSubmenuItem(),s=!!a,n,c,h;s?(n=this.getSubmenuItems(a),c=n.find(p=>p.active||p===o),h=c?n.indexOf(c):-1):(n=this.getItems(),c=n.find(p=>p.active||p===o),h=c?n.indexOf(c):-1);let u;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),h>0?u=n[h-1]:u=n[n.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),h!==-1&&h<n.length-1?u=n[h+1]:u=n[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&r&&c&&c.hasSubmenu){t.preventDefault(),t.stopPropagation(),c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{let p=this.getSubmenuItems(c);p.length>0&&(p.forEach((g,f)=>g.active=f===0),p[0].focus({preventScroll:!0}))},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&s){t.preventDefault(),t.stopPropagation();let p=this.removeFromSubmenuStack();p&&(p.submenuOpen=!1,setTimeout(()=>{p.focus({preventScroll:!0}),p.active=!0,(p.slot==="submenu"?this.getSubmenuItems(p.parentElement):this.getItems()).forEach(f=>{f!==p&&(f.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),u=t.key==="Home"?n[0]:n[n.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,n.some(p=>{let g=(p.textContent||"").trim().toLowerCase(),f=this.userTypedQuery.trim().toLowerCase();return g.startsWith(f)?(u=p,!0):!1})),u){t.preventDefault(),t.stopPropagation(),n.forEach(p=>p.active=p===u),u.focus({preventScroll:!0}),u.scrollIntoView({block:"nearest"});return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&r&&c&&(t.preventDefault(),t.stopPropagation(),c.hasSubmenu?(c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{let p=this.getSubmenuItems(c);p.length>0&&(p.forEach((g,f)=>g.active=f===0),p[0].focus({preventScroll:!0}))},0)):this.makeSelection(c))},this.handleDocumentPointerDown=t=>{t.composedPath().some(r=>r instanceof HTMLElement?r===this||r.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{let e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;let o=e.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl",a=r?o.right:o.left,s=r?Math.max(t.clientX,a):Math.min(t.clientX,a),n=Math.max(o.top,Math.min(t.clientY,o.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${s}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${n}px`);let c=t.composedPath(),h=e.matches(":hover"),u=!!e.submenuElement?.matches(":hover"),p=h||!!c.find(f=>f===e),g=u||!!c.find(f=>f instanceof HTMLElement&&f.closest('[part="submenu"]')===e.submenuElement);!p&&!g&&setTimeout(()=>{!h&&!u&&(e.submenuOpen=!1)},100)}}handleSizeChange(){Y(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),Lt(this)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){let e=t.get("open");if(e===this.open||e===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){let e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(o=>o.localName==="wa-dropdown-item");return t?e:e.filter(o=>!o.disabled)}getSubmenuItems(t,e=!1){let o=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!o)return[];let r=o.assignedElements({flatten:!0}).filter(a=>a.localName==="wa-dropdown-item");return e?r:r.filter(a=>!a.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){let e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){let e=t.closest('wa-dropdown-item:not([slot="submenu"])'),o;e?o=this.getSubmenuItems(e,!0):o=this.getItems(!0),o.forEach(r=>{r!==t&&r.submenuOpen&&(r.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new Bt;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Pi.forEach(r=>r.open=!1),this.popup.active=!0,this.open=!0,Pi.add(this),Ft(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await J(this.menu,"show");let o=this.getItems();o.length>0&&(o.forEach((r,a)=>r.active=a===0),o[0].focus({preventScroll:!0})),this.dispatchEvent(new qt)}async hideMenu(){if(!this.popup||!this.menu)return;let t=new Vt({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,Pi.delete(this),Lt(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await J(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Wt)}handleMenuClick(t){let e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){let t=this.getItems(!0);await Promise.all(t.map(r=>r.updateComplete)),this.syncItemSizes();let e=t.some(r=>r.type==="checkbox"),o=t.some(r=>r.hasSubmenu);t.forEach((r,a)=>{r.active=a===0,r.checkboxAdjacent=e,r.submenuAdjacent=o})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){let e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);let e=Fr(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);let o=t.submenuElement.querySelector('slot[name="submenu"]');o&&(o.removeEventListener("slotchange",Nt.handleSubmenuSlotChange),o.addEventListener("slotchange",Nt.handleSubmenuSlotChange),Nt.handleSubmenuSlotChange({target:o}))}static handleSubmenuSlotChange(t){let e=t.target;if(!e)return;let o=e.assignedElements().filter(s=>s.localName==="wa-dropdown-item");if(o.length===0)return;let r=o.some(s=>s.hasSubmenu),a=o.some(s=>s.type==="checkbox");o.forEach(s=>{s.submenuAdjacent=r,s.checkboxAdjacent=a})}processSubmenuItems(t){if(!t.submenuElement)return;let e=this.getSubmenuItems(t,!0),o=e.some(r=>r.hasSubmenu);e.forEach(r=>{r.submenuAdjacent=o})}cleanupSubmenuPosition(t){let e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;let o=this.localize.dir()==="rtl"?"left-start":"right-start";qr(t,t.submenuElement,{placement:o,middleware:[Br({mainAxis:0,crossAxis:-5}),Wr({fallbackStrategy:"bestFit"}),Vr({padding:8})]}).then(({x:r,y:a,placement:s})=>{t.submenuElement.setAttribute("data-placement",s),Object.assign(t.submenuElement.style,{left:`${r}px`,top:`${a}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");let o=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${r?o.right:o.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${o.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${r?o.right:o.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${o.bottom}px`)}makeSelection(t){let e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);let o=new sn({item:t});this.dispatchEvent(o),o.defaultPrevented||(this.open=!1,e?.focus({preventScroll:!0}))}async syncAriaAttributes(){let t=this.getTrigger(),e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",de("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let t=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return b`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${t}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Nt.css=[X,nn];i([C("slot:not([name])")],Nt.prototype,"defaultSlot",2);i([C("#menu")],Nt.prototype,"menu",2);i([C("wa-popup")],Nt.prototype,"popup",2);i([l({type:Boolean,reflect:!0})],Nt.prototype,"open",2);i([l({reflect:!0})],Nt.prototype,"size",2);i([x("size")],Nt.prototype,"handleSizeChange",1);i([l({reflect:!0})],Nt.prototype,"placement",2);i([l({type:Number})],Nt.prototype,"distance",2);i([l({type:Number})],Nt.prototype,"skidding",2);Nt=i([S("wa-dropdown")],Nt);var ln=k`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var Ot=class extends L{constructor(){super(...arguments),this.hasSlotController=new rt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="m",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.("click",this.handleHostClick),this.addEventListener?.("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot?.addEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.("click",this.handleHostClick),this.removeEventListener?.("mouseenter",this.handleMouseEnter),this.shadowRoot?.removeEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){let t=this.submenuElement;!this.hasSubmenu||!t||!this.isConnected||(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await J(t,"show"),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((o,r)=>o.active=r===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);let e=this.parentElement;e&&[...e.children].filter(r=>r!==this&&r.localName==="wa-dropdown-item"&&r.getAttribute("slot")===this.getAttribute("slot")&&r.submenuOpen).forEach(r=>{r.submenuOpen=!1})}async closeSubmenu(){let t=this.submenuElement;!this.hasSubmenu||!t||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await J(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return b`
      ${this.type==="checkbox"?b`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?b`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?b`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};Ot.css=ln;i([C("#submenu")],Ot.prototype,"submenuElement",2);i([l({type:Boolean})],Ot.prototype,"active",2);i([l({reflect:!0})],Ot.prototype,"variant",2);i([l({reflect:!0})],Ot.prototype,"size",2);i([x("size")],Ot.prototype,"handleSizeChange",1);i([l({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Ot.prototype,"checkboxAdjacent",2);i([l({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Ot.prototype,"submenuAdjacent",2);i([l()],Ot.prototype,"value",2);i([l({reflect:!0})],Ot.prototype,"type",2);i([l({type:Boolean})],Ot.prototype,"checked",2);i([l({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],Ot.prototype,"submenuOpen",2);i([T()],Ot.prototype,"hasSubmenu",2);Ot=i([S("wa-dropdown-item")],Ot);var Oo=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],o=this.unit==="bit"?t:e,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),o.length-1)),a=o[r]+this.unit,s=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:a,unitDisplay:this.display})}};i([l({type:Number})],Oo.prototype,"value",2);i([l()],Oo.prototype,"unit",2);i([l()],Oo.prototype,"display",2);Oo=i([S("wa-format-bytes")],Oo);var Yt=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){let t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;let o=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return b`<time datetime=${t.toISOString()}>${o}</time>`}};i([l()],Yt.prototype,"date",2);i([l()],Yt.prototype,"weekday",2);i([l()],Yt.prototype,"era",2);i([l()],Yt.prototype,"year",2);i([l()],Yt.prototype,"month",2);i([l()],Yt.prototype,"day",2);i([l()],Yt.prototype,"hour",2);i([l()],Yt.prototype,"minute",2);i([l()],Yt.prototype,"second",2);i([l({attribute:"time-zone-name"})],Yt.prototype,"timeZoneName",2);i([l({attribute:"time-zone"})],Yt.prototype,"timeZone",2);i([l({attribute:"hour-format"})],Yt.prototype,"hourFormat",2);Yt=i([S("wa-format-date")],Yt);var re=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};i([l({type:Number})],re.prototype,"value",2);i([l()],re.prototype,"type",2);i([l({attribute:"without-grouping",type:Boolean})],re.prototype,"withoutGrouping",2);i([l()],re.prototype,"currency",2);i([l({attribute:"currency-display"})],re.prototype,"currencyDisplay",2);i([l({attribute:"minimum-integer-digits",type:Number})],re.prototype,"minimumIntegerDigits",2);i([l({attribute:"minimum-fraction-digits",type:Number})],re.prototype,"minimumFractionDigits",2);i([l({attribute:"maximum-fraction-digits",type:Number})],re.prototype,"maximumFractionDigits",2);i([l({attribute:"minimum-significant-digits",type:Number})],re.prototype,"minimumSignificantDigits",2);i([l({attribute:"maximum-significant-digits",type:Number})],re.prototype,"maximumSignificantDigits",2);re=i([S("wa-format-number")],re);var Oi=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var cn=k`
  :host {
    display: block;
  }
`;var Mi=new Map;function Fi(t,e="cors"){let o=Mi.get(t);if(o!==void 0)return Promise.resolve(o);let r=fetch(t,{mode:e}).then(async a=>{let s={ok:a.ok,status:a.status,html:await a.text()};return Mi.set(t,s),s});return Mi.set(t,r),r}var Qe=class extends L{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(o=>e.setAttribute(o.name,o.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await Fi(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Oi({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(o=>this.executeScript(o)),this.dispatchEvent(new zo)}catch{this.dispatchEvent(new Oi({status:-1}))}}render(){return b`<slot></slot>`}};Qe.css=cn;i([l()],Qe.prototype,"src",2);i([l()],Qe.prototype,"mode",2);i([l({attribute:"allow-scripts",type:Boolean})],Qe.prototype,"allowScripts",2);i([x("src")],Qe.prototype,"handleSrcChange",1);Qe=i([S("wa-include")],Qe);var hn=class extends Event{constructor(t){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=t}};var dn=k`
  :host {
    display: contents;
  }
`;var ge=class extends L{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return Ze(this.threshold).map(e=>{let o=parseFloat(e);return isNaN(o)?0:H(o,0,1)})}resolveRoot(){if(!this.root)return null;try{let e=this.getRootNode().getElementById(this.root);return e||console.warn(`Root element with ID "${this.root}" could not be found.`,this),e}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;let t=this.parseThreshold(),e=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(r=>{r.forEach(a=>{let s=this.observedElements.get(a.target)??!1,n=a.isIntersecting;this.observedElements.set(a.target,n),this.intersectClass&&(n?a.target.classList.add(this.intersectClass):a.target.classList.remove(this.intersectClass));let c=new hn({entry:a});this.dispatchEvent(c),n&&!s&&this.once&&(this.intersectionObserver?.unobserve(a.target),this.observedElements.delete(a.target))})},{root:e,rootMargin:this.rootMargin,threshold:t});let o=this.shadowRoot.querySelector("slot");o!==null&&o.assignedElements({flatten:!0}).forEach(a=>{this.intersectionObserver?.observe(a),this.observedElements.set(a,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((t,e)=>{e.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return b` <slot @slotchange=${this.handleSlotChange}></slot> `}};ge.css=dn;i([l()],ge.prototype,"root",2);i([l({attribute:"root-margin"})],ge.prototype,"rootMargin",2);i([l()],ge.prototype,"threshold",2);i([l({attribute:"intersect-class"})],ge.prototype,"intersectClass",2);i([l({type:Boolean,reflect:!0})],ge.prototype,"once",2);i([l({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);i([x("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);i([x("root",{waitUntilFirstUpdate:!0}),x("rootMargin",{waitUntilFirstUpdate:!0}),x("threshold",{waitUntilFirstUpdate:!0})],ge.prototype,"handleOptionsChange",1);ge=i([S("wa-intersection-observer")],ge);var pn=()=>({checkValidity(t){let e=t,o=e.parts,r=o.day===""&&o.month===""&&o.year==="",a=o.day!==""&&o.month!==""&&o.year!=="";if(r)return{isValid:!0,invalidKeys:[],message:""};if(a){if(e.value===""){let n=e.localize?.term("incompleteDate")||"Enter a valid date.";return{isValid:!1,invalidKeys:["badInput"],message:n}}return{isValid:!0,invalidKeys:[],message:""}}let s=e.localize?.term("incompleteDate")||"Enter a complete date.";return{isValid:!1,invalidKeys:["valueMissing"],message:s}}});var Hr={day:"",month:"",year:""};function Cd(t){return t.day!==""&&t.month!==""&&t.year!==""}function Bi(t){if(!Cd(t))return"";let e=Number(t.year),o=Number(t.month),r=Number(t.day);if(!Number.isInteger(e)||e<1||e>9999||!Number.isInteger(o)||o<1||o>12||!Number.isInteger(r)||r<1||r>31)return"";let a=new Date(2e3,o-1,r);return a.setFullYear(e),a.getFullYear()!==e||a.getMonth()!==o-1||a.getDate()!==r?"":`${String(e).padStart(4,"0")}-${String(o).padStart(2,"0")}-${String(r).padStart(2,"0")}`}function Vi(t){if(!t)return{...Hr};let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);return e?{year:e[1],month:e[2],day:e[3]}:{...Hr}}var un=new Map;function mn(t){let e=t||"en",o=un.get(e);if(o)return o;let a=new Intl.DateTimeFormat(e,{year:"numeric",month:"2-digit",day:"2-digit",calendar:"gregory",numberingSystem:"latn"}).formatToParts(new Date(2026,0,23)),s=[];for(let c of a)(c.type==="year"||c.type==="month"||c.type==="day")&&s.push(c.type);let n=s.length===3?s:["month","day","year"];return un.set(e,n),n}var fn=k`
  :host {
    display: block;
    container-type: inline-size;
    container-name: known-date;
  }

  [part~='fieldset'],
  .fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-inline-size: 0;
  }

  legend[part~='legend'] {
    padding: 0;
    display: block;
  }

  /* The legend's inner span carries the form-control-label part so the existing form-control styles
     (including the required asterisk) apply consistently across browsers. */
  .label {
    display: inline-block;
  }

  [part~='fields'] {
    display: flex;
    gap: var(--wa-space-xs);
    align-items: start;
    inline-size: 100%;
    min-inline-size: 0;
  }

  [part~='field'] {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    min-inline-size: 0;
  }

  /* Day and month each hold two digits; year holds four. Bias the flex distribution so the year
     field gets roughly twice the share of the row but all three still grow and shrink together. */
  [part~='field-month'],
  [part~='field-day'] {
    min-inline-size: 2.5em;
  }

  [part~='field-year'] {
    flex-grow: 2;
    min-inline-size: 6em;
  }

  /* Per-field labels match the hint's typography and spacing exactly (the same 0.5em offset other
     form controls use between their input and hint) so the gap below each input reads as native. */
  [part~='field-label'] {
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    font-size: var(--wa-font-size-smaller);
    margin-block-start: 0.5em;
  }

  /* Each input is styled to match wa-input's .text-field wrapper directly — same border, height,
     padding, focus ring, and appearance variants. The host doesn't compose wa-input instances because
     we want three discrete native inputs (no clear/password slots, simpler DOM), but the visual contract
     is identical. */
  [part~='field-input'] {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    height: var(--wa-form-control-height);
    inline-size: 100%;
    min-inline-size: 0;
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    background-color: var(--wa-form-control-background-color);
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-size: var(--wa-form-control-value-font-size);
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  [part~='field-input']:focus {
    outline-color: var(--wa-color-focus);
  }

  /* When the fields row gets too narrow to comfortably hold three side-by-side inputs, stack them
     vertically. The threshold reflects the smallest width at which all three inputs still fit a
     four-digit year plus padding without truncation. */
  @container known-date (inline-size < 300px) {
    [part~='fields'] {
      flex-direction: column;
      align-items: stretch;
    }
  }

  /* Suppress the native number spin buttons so a paste that briefly looks like a number can't show them. */
  [part~='field-input']::-webkit-outer-spin-button,
  [part~='field-input']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [part~='error'] {
    color: var(--wa-color-danger-text-loud, var(--wa-color-text-loud));
    font-size: var(--wa-font-size-smaller);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block: 0.5em 0;
  }

  [part~='error'][hidden] {
    display: none;
  }

  /* Hide the mirror used for native form-data + constraint validation. */
  .value-input {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    opacity: 0;
    pointer-events: none;
    border: 0;
    padding: 0;
    margin: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  /* Appearances — mirror wa-input's .text-field appearance variants exactly. */
  :host([appearance='outlined']) [part~='field-input'] {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) [part~='field-input'] {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) [part~='field-input'] {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) [part~='field-input'] {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  /* Disabled — mirror wa-input's :has(:disabled) opacity treatment. */
  :host(:state(disabled)) [part~='field'],
  [part~='field-input']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var Sd=()=>de("wa-known-date-"),wt=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["input"],this.localize=new I(this),this.hasSlotController=new rt(this,"hint","label"),this.groupId=Sd(),this.hintId=`${this.groupId}-hint`,this.errorId=`${this.groupId}-error`,this.lastEmittedValue="",this.pendingValue=null,this.parts={...Hr},this.name="",this._value="",this.defaultValue=this.getAttribute("value")??"",this.disabled=!1,this.required=!1,this.readonly=!1,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.autocomplete="",this.min="",this.max="",this.locale="",this.withLabel=!1,this.withHint=!1,this.handleFieldInput=t=>{if(this.readonly)return;let e=t.currentTarget,o=e.dataset.field,r=o==="year"?4:2,a=e.value.replace(/\D/g,"").slice(0,r);a!==e.value&&(e.value=a),this.parts={...this.parts,[o]:a},this.recomputeValue(),this.requestUpdate()}}static get validators(){let t=[Gt(),pn()];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value||this.defaultValue||""}set value(t){let e=this.normalizeIncomingValue(t);if(e===this._value)return;let o=this._value;this._value=e,this.valueHasChanged=!0,this.hasUpdated?this.syncPartsFromCanonical():this.pendingValue=this._value,this.requestUpdate("value",o)}handleSizeChange(){Y(this.localName,this.size)}firstUpdated(){this.pendingValue!=null?(this._value=this.pendingValue,this.pendingValue=null):!this._value&&this.defaultValue&&(this._value=this.defaultValue),this.syncPartsFromCanonical(),this.input=this.valueInput,this.updateValidity(),this.lastEmittedValue=this._value}updated(t){super.updated?.(t),t.has("value")&&this.customStates.set("blank",!this._value)}focus(t){this.firstFocusableInput()?.focus(t)}blur(){this.shadowRoot?.activeElement?.blur()}get valueAsDate(){if(!this._value)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(this._value);return t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):null}get validationTarget(){if(!this.shadowRoot)return;let t=Array.from(this.shadowRoot.querySelectorAll('input[part~="field-input"]'));if(t.length!==0){for(let e of this.fieldOrder())if(this.parts[e]===""){let o=t.find(r=>r.dataset.field===e);if(o)return o}return t[0]}}formResetCallback(){this._value=this.defaultValue,this.valueHasChanged=!1,this.syncPartsFromCanonical(),super.formResetCallback(),this.lastEmittedValue=this._value,this.requestUpdate()}formStateRestoreCallback(t){typeof t=="string"&&(this.value=t),this.updateValidity()}get resolvedLocale(){return this.locale||this.localize.lang()||"en"}fieldOrder(){return mn(this.resolvedLocale)}normalizeIncomingValue(t){if(t==null)return"";if(t instanceof Date){let e=String(t.getFullYear()).padStart(4,"0"),o=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${o}-${r}`}if(typeof t=="string"){let e=Vi(t);return Bi(e)}return""}syncPartsFromCanonical(){this.parts=Vi(this._value),this.updateHiddenInput()}updateHiddenInput(){this.valueInput&&(this.valueInput.value=this._value),this.setValue(this._value||null)}recomputeValue(){let t=this._value,e=Bi(this.parts);e!==t&&(this._value=e,this.valueHasChanged=!0,this.updateHiddenInput(),this.updateValidity()),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),e!==this.lastEmittedValue&&(this.lastEmittedValue=e,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}firstFocusableInput(){if(!this.shadowRoot)return;let t=Array.from(this.shadowRoot.querySelectorAll('input[part~="field-input"]'));for(let e of this.fieldOrder())if(this.parts[e]===""){let o=t.find(r=>r.dataset.field===e);if(o)return o}return t[0]}autocompleteFor(t){let e=this.autocomplete.trim();if(e)return e==="bday"?t==="day"?"bday-day":t==="month"?"bday-month":"bday-year":e==="off"||e==="on"||t==="year"?e:void 0}render(){let t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=!!this.label||!!t,r=!!this.hint||!!e,a=this.label||this.localize.term("date")||"Date",s=!!1&&this.customStates.has("user-invalid"),n=s?this.validationMessage:"",c=s&&!!n,h=[r?this.hintId:null,c?this.errorId:null].filter(Boolean).join(" "),u=this.fieldOrder().map(g=>this.renderField(g,h,s)),p=b`
      <div part="base form-control-input fields" class="fields">${u}</div>

      <slot
        name="hint"
        part="hint"
        id=${this.hintId}
        class=${_({hint:!0,"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
      >
        ${this.hint}
      </slot>

      <div part="error" id=${this.errorId} class="error" role="alert" aria-live="polite" ?hidden=${!c}>
        ${n}
      </div>
    `;return b`
      <div
        part="form-control"
        class=${_({"form-control":!0,"form-control-has-label":o})}
      >
        ${o?b`<fieldset part="fieldset" class="fieldset">
              <legend part="legend">
                <span part="form-control-label label" class="label">
                  <slot name="label">${this.label}</slot>
                </span>
              </legend>
              ${p}
            </fieldset>`:b`<div part="fieldset" class="fieldset" role="group" aria-label=${a}>${p}</div>`}

        <input
          class="value-input"
          type="date"
          tabindex="-1"
          aria-hidden="true"
          .value=${this._value}
          min=${D(this.min||void 0)}
          max=${D(this.max||void 0)}
          ?disabled=${this.disabled}
          ?required=${this.required}
        />
      </div>
    `}renderField(t,e,o){let r=`${this.groupId}-${t}`,a=this.parts[t],s=this.autocompleteFor(t),n=o?"true":void 0,c=this.localize.term(t)||(t==="day"?"Day":t==="month"?"Month":"Year");return b`
      <div part="field field-${t}" class=${_({field:!0,[`field-${t}`]:!0})}>
        <input
          id=${r}
          part="field-input"
          class="field-input"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength=${t==="year"?4:2}
          data-field=${t}
          autocomplete=${D(s)}
          aria-describedby=${D(e||void 0)}
          aria-invalid=${D(n)}
          aria-required=${this.required?"true":"false"}
          .value=${Pt(a)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @input=${this.handleFieldInput}
        />
        <label part="field-label" class="field-label" for=${r}>${c}</label>
      </div>
    `}};wt.css=[X,bt,fn];wt.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C(".value-input")],wt.prototype,"valueInput",2);i([T()],wt.prototype,"parts",2);i([l({reflect:!0})],wt.prototype,"name",2);i([T()],wt.prototype,"value",1);i([l({attribute:"value",reflect:!0})],wt.prototype,"defaultValue",2);i([l({type:Boolean})],wt.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],wt.prototype,"required",2);i([l({type:Boolean,reflect:!0})],wt.prototype,"readonly",2);i([l({reflect:!0})],wt.prototype,"size",2);i([x("size")],wt.prototype,"handleSizeChange",1);i([l({reflect:!0})],wt.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],wt.prototype,"pill",2);i([l()],wt.prototype,"label",2);i([l({attribute:"hint"})],wt.prototype,"hint",2);i([l()],wt.prototype,"autocomplete",2);i([l({reflect:!0})],wt.prototype,"min",2);i([l({reflect:!0})],wt.prototype,"max",2);i([l({reflect:!0})],wt.prototype,"locale",2);i([l({attribute:"with-label",type:Boolean})],wt.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],wt.prototype,"withHint",2);wt=i([S("wa-known-date")],wt);var bn=k`
  :host {
    display: contents;
  }
`;function qi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var fo=qi();function kn(t){fo=t}var Cn=/[&<>"']/,Ed=new RegExp(Cn.source,"g"),Sn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,zd=new RegExp(Sn.source,"g"),Ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gn=t=>Ld[t];function ie(t,e){if(e){if(Cn.test(t))return t.replace(Ed,gn)}else if(Sn.test(t))return t.replace(zd,gn);return t}var Ad=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function $d(t){return t.replace(Ad,(e,o)=>(o=o.toLowerCase(),o==="colon"?":":o.charAt(0)==="#"?o.charAt(1)==="x"?String.fromCharCode(parseInt(o.substring(2),16)):String.fromCharCode(+o.substring(1)):""))}var Td=/(^|[^\[])\^/g;function ut(t,e){let o=typeof t=="string"?t:t.source;e=e||"";let r={replace:(a,s)=>{let n=typeof s=="string"?s:s.source;return n=n.replace(Td,"$1"),o=o.replace(a,n),r},getRegex:()=>new RegExp(o,e)};return r}function vn(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}var rr={exec:()=>null};function wn(t,e){let o=t.replace(/\|/g,(s,n,c)=>{let h=!1,u=n;for(;--u>=0&&c[u]==="\\";)h=!h;return h?"|":" |"}),r=o.split(/ \|/),a=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(/\\\|/g,"|");return r}function Nr(t,e,o){let r=t.length;if(r===0)return"";let a=0;for(;a<r;){let s=t.charAt(r-a-1);if(s===e&&!o)a++;else if(s!==e&&o)a++;else break}return t.slice(0,r-a)}function _d(t,e){if(t.indexOf(e[1])===-1)return-1;let o=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])o++;else if(t[r]===e[1]&&(o--,o<0))return r;return-1}function yn(t,e,o,r){let a=e.href,s=e.title?ie(e.title):null,n=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;let c={type:"link",raw:o,href:a,title:s,text:n,tokens:r.inlineTokens(n)};return r.state.inLink=!1,c}return{type:"image",raw:o,href:a,title:s,text:ie(n)}}function Dd(t,e){let o=t.match(/^(\s+)(?:```)/);if(o===null)return e;let r=o[1];return e.split(`
`).map(a=>{let s=a.match(/^\s+/);if(s===null)return a;let[n]=s;return n.length>=r.length?a.slice(r.length):a}).join(`
`)}var Fo=class{options;rules;lexer;constructor(e){this.options=e||fo}space(e){let o=this.rules.block.newline.exec(e);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(e){let o=this.rules.block.code.exec(e);if(o){let r=o[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Nr(r,`
`)}}}fences(e){let o=this.rules.block.fences.exec(e);if(o){let r=o[0],a=Dd(r,o[3]||"");return{type:"code",raw:r,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:a}}}heading(e){let o=this.rules.block.heading.exec(e);if(o){let r=o[2].trim();if(/#$/.test(r)){let a=Nr(r,"#");(this.options.pedantic||!a||/ $/.test(a))&&(r=a.trim())}return{type:"heading",raw:o[0],depth:o[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){let o=this.rules.block.hr.exec(e);if(o)return{type:"hr",raw:o[0]}}blockquote(e){let o=this.rules.block.blockquote.exec(e);if(o){let r=Nr(o[0].replace(/^ *>[ \t]?/gm,""),`
`),a=this.lexer.state.top;this.lexer.state.top=!0;let s=this.lexer.blockTokens(r);return this.lexer.state.top=a,{type:"blockquote",raw:o[0],tokens:s,text:r}}}list(e){let o=this.rules.block.list.exec(e);if(o){let r=o[1].trim(),a=r.length>1,s={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let n=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),c="",h="",u=!1;for(;e;){let p=!1;if(!(o=n.exec(e))||this.rules.block.hr.test(e))break;c=o[0],e=e.substring(c.length);let g=o[2].split(`
`,1)[0].replace(/^\t+/,v=>" ".repeat(3*v.length)),f=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,h=g.trimStart()):(m=o[2].search(/[^ ]/),m=m>4?1:m,h=g.slice(m),m+=o[1].length);let y=!1;if(!g&&/^ *$/.test(f)&&(c+=f+`
`,e=e.substring(f.length+1),p=!0),!p){let v=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),w=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),z=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){let $=e.split(`
`,1)[0];if(f=$,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),A.test(f)||z.test(f)||v.test(f)||w.test(e))break;if(f.search(/[^ ]/)>=m||!f.trim())h+=`
`+f.slice(m);else{if(y||g.search(/[^ ]/)>=4||A.test(g)||z.test(g)||w.test(g))break;h+=`
`+f}!y&&!f.trim()&&(y=!0),c+=$+`
`,e=e.substring($.length+1),g=f.slice(m)}}s.loose||(u?s.loose=!0:/\n *\n *$/.test(c)&&(u=!0));let d=null,E;this.options.gfm&&(d=/^\[[ xX]\] /.exec(h),d&&(E=d[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:c,task:!!d,checked:E,loose:!1,text:h,tokens:[]}),s.raw+=c}s.items[s.items.length-1].raw=c.trimEnd(),s.items[s.items.length-1].text=h.trimEnd(),s.raw=s.raw.trimEnd();for(let p=0;p<s.items.length;p++)if(this.lexer.state.top=!1,s.items[p].tokens=this.lexer.blockTokens(s.items[p].text,[]),!s.loose){let g=s.items[p].tokens.filter(m=>m.type==="space"),f=g.length>0&&g.some(m=>/\n.*\n/.test(m.raw));s.loose=f}if(s.loose)for(let p=0;p<s.items.length;p++)s.items[p].loose=!0;return s}}html(e){let o=this.rules.block.html.exec(e);if(o)return{type:"html",block:!0,raw:o[0],pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:o[0]}}def(e){let o=this.rules.block.def.exec(e);if(o){let r=o[1].toLowerCase().replace(/\s+/g," "),a=o[2]?o[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:r,raw:o[0],href:a,title:s}}}table(e){let o=this.rules.block.table.exec(e);if(!o||!/[:|]/.test(o[2]))return;let r=wn(o[1]),a=o[2].replace(/^\||\| *$/g,"").split("|"),s=o[3]&&o[3].trim()?o[3].replace(/\n[ \t]*$/,"").split(`
`):[],n={type:"table",raw:o[0],header:[],align:[],rows:[]};if(r.length===a.length){for(let c of a)/^ *-+: *$/.test(c)?n.align.push("right"):/^ *:-+: *$/.test(c)?n.align.push("center"):/^ *:-+ *$/.test(c)?n.align.push("left"):n.align.push(null);for(let c of r)n.header.push({text:c,tokens:this.lexer.inline(c)});for(let c of s)n.rows.push(wn(c,n.header.length).map(h=>({text:h,tokens:this.lexer.inline(h)})));return n}}lheading(e){let o=this.rules.block.lheading.exec(e);if(o)return{type:"heading",raw:o[0],depth:o[2].charAt(0)==="="?1:2,text:o[1],tokens:this.lexer.inline(o[1])}}paragraph(e){let o=this.rules.block.paragraph.exec(e);if(o){let r=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:r,tokens:this.lexer.inline(r)}}}text(e){let o=this.rules.block.text.exec(e);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(e){let o=this.rules.inline.escape.exec(e);if(o)return{type:"escape",raw:o[0],text:ie(o[1])}}tag(e){let o=this.rules.inline.tag.exec(e);if(o)return!this.lexer.state.inLink&&/^<a /i.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(e){let o=this.rules.inline.link.exec(e);if(o){let r=o[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;let n=Nr(r.slice(0,-1),"\\");if((r.length-n.length)%2===0)return}else{let n=_d(o[2],"()");if(n>-1){let h=(o[0].indexOf("!")===0?5:4)+o[1].length+n;o[2]=o[2].substring(0,n),o[0]=o[0].substring(0,h).trim(),o[3]=""}}let a=o[2],s="";if(this.options.pedantic){let n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);n&&(a=n[1],s=n[3])}else s=o[3]?o[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(r)?a=a.slice(1):a=a.slice(1,-1)),yn(o,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer)}}reflink(e,o){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let a=(r[2]||r[1]).replace(/\s+/g," "),s=o[a.toLowerCase()];if(!s){let n=r[0].charAt(0);return{type:"text",raw:n,text:n}}return yn(r,s,r[0],this.lexer)}}emStrong(e,o,r=""){let a=this.rules.inline.emStrongLDelim.exec(e);if(!a||a[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!r||this.rules.inline.punctuation.exec(r)){let n=[...a[0]].length-1,c,h,u=n,p=0,g=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,o=o.slice(-1*e.length+n);(a=g.exec(o))!=null;){if(c=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!c)continue;if(h=[...c].length,a[3]||a[4]){u+=h;continue}else if((a[5]||a[6])&&n%3&&!((n+h)%3)){p+=h;continue}if(u-=h,u>0)continue;h=Math.min(h,h+u+p);let f=[...a[0]][0].length,m=e.slice(0,n+a.index+f+h);if(Math.min(n,h)%2){let d=m.slice(1,-1);return{type:"em",raw:m,text:d,tokens:this.lexer.inlineTokens(d)}}let y=m.slice(2,-2);return{type:"strong",raw:m,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){let o=this.rules.inline.code.exec(e);if(o){let r=o[2].replace(/\n/g," "),a=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return a&&s&&(r=r.substring(1,r.length-1)),r=ie(r,!0),{type:"codespan",raw:o[0],text:r}}}br(e){let o=this.rules.inline.br.exec(e);if(o)return{type:"br",raw:o[0]}}del(e){let o=this.rules.inline.del.exec(e);if(o)return{type:"del",raw:o[0],text:o[2],tokens:this.lexer.inlineTokens(o[2])}}autolink(e){let o=this.rules.inline.autolink.exec(e);if(o){let r,a;return o[2]==="@"?(r=ie(o[1]),a="mailto:"+r):(r=ie(o[1]),a=r),{type:"link",raw:o[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(e){let o;if(o=this.rules.inline.url.exec(e)){let r,a;if(o[2]==="@")r=ie(o[0]),a="mailto:"+r;else{let s;do s=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])?.[0]??"";while(s!==o[0]);r=ie(o[0]),o[1]==="www."?a="http://"+o[0]:a=o[0]}return{type:"link",raw:o[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let o=this.rules.inline.text.exec(e);if(o){let r;return this.lexer.state.inRawBlock?r=o[0]:r=ie(o[0]),{type:"text",raw:o[0],text:r}}}},Id=/^(?: *(?:\n|$))+/,Rd=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Pd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,sr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Od=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,En=/(?:[*+-]|\d{1,9}[.)])/,zn=ut(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,En).getRegex(),Hi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Md=/^[^\n]+/,Ni=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Fd=ut(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Ni).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Bd=ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,En).getRegex(),Kr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ui=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Vd=ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ui).replace("tag",Kr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ln=ut(Hi).replace("hr",sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kr).getRegex(),Wd=ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ln).getRegex(),ji={blockquote:Wd,code:Rd,def:Fd,fences:Pd,heading:Od,hr:sr,html:Vd,lheading:zn,list:Bd,newline:Id,paragraph:Ln,table:rr,text:Md},xn=ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kr).getRegex(),qd={...ji,table:xn,paragraph:ut(Hi).replace("hr",sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kr).getRegex()},Hd={...ji,html:ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ui).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ut(Hi).replace("hr",sr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},An=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$n=/^( {2,}|\\)\n(?!\s*$)/,Ud=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,nr="\\p{P}$+<=>`^|~",jd=ut(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,nr).getRegex(),Kd=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Yd=ut(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,nr).getRegex(),Xd=ut("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,nr).getRegex(),Gd=ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,nr).getRegex(),Zd=ut(/\\([punct])/,"gu").replace(/punct/g,nr).getRegex(),Qd=ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Jd=ut(Ui).replace("(?:-->|$)","-->").getRegex(),tp=ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Jd).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ep=ut(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",jr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Tn=ut(/^!?\[(label)\]\[(ref)\]/).replace("label",jr).replace("ref",Ni).getRegex(),_n=ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ni).getRegex(),op=ut("reflink|nolink(?!\\()","g").replace("reflink",Tn).replace("nolink",_n).getRegex(),Ki={_backpedal:rr,anyPunctuation:Zd,autolink:Qd,blockSkip:Kd,br:$n,code:Nd,del:rr,emStrongLDelim:Yd,emStrongRDelimAst:Xd,emStrongRDelimUnd:Gd,escape:An,link:ep,nolink:_n,punctuation:jd,reflink:Tn,reflinkSearch:op,tag:tp,text:Ud,url:rr},rp={...Ki,link:ut(/^!?\[(label)\]\((.*?)\)/).replace("label",jr).getRegex(),reflink:ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jr).getRegex()},Wi={...Ki,escape:ut(An).replace("])","~|])").getRegex(),url:ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ip={...Wi,br:ut($n).replace("{2,}","*").getRegex(),text:ut(Wi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ur={normal:ji,gfm:qd,pedantic:Hd},or={normal:Ki,gfm:Wi,breaks:ip,pedantic:rp},We=class t{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fo,this.options.tokenizer=this.options.tokenizer||new Fo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let o={block:Ur.normal,inline:or.normal};this.options.pedantic?(o.block=Ur.pedantic,o.inline=or.pedantic):this.options.gfm&&(o.block=Ur.gfm,this.options.breaks?o.inline=or.breaks:o.inline=or.gfm),this.tokenizer.rules=o}static get rules(){return{block:Ur,inline:or}}static lex(e,o){return new t(o).lex(e)}static lexInline(e,o){return new t(o).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){let r=this.inlineQueue[o];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,o=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(c,h,u)=>h+"    ".repeat(u.length));let r,a,s,n;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(r=c.call({lexer:this},e,o))?(e=e.substring(r.raw.length),o.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&o.length>0?o[o.length-1].raw+=`
`:o.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),a=o[o.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):o.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),a=o[o.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+r.raw,a.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),o.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0,h=e.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},h),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){a=o[o.length-1],n&&a.type==="paragraph"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):o.push(r),n=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),a=o[o.length-1],a&&a.type==="text"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):o.push(r);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,o}inline(e,o=[]){return this.inlineQueue.push({src:e,tokens:o}),o}inlineTokens(e,o=[]){let r,a,s,n=e,c,h,u;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,c.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(h||(u=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(r=p.call({lexer:this},e,o))?(e=e.substring(r.raw.length),o.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),a=o[o.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):o.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),a=o[o.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):o.push(r);continue}if(r=this.tokenizer.emStrong(e,n,u)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),o.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),o.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0,g=e.slice(1),f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},g),typeof f=="number"&&f>=0&&(p=Math.min(p,f))}),p<1/0&&p>=0&&(s=e.substring(0,p+1))}if(r=this.tokenizer.inlineText(s)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),h=!0,a=o[o.length-1],a&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):o.push(r);continue}if(e){let p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return o}},Bo=class{options;constructor(e){this.options=e||fo}code(e,o,r){let a=(o||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+ie(a)+'">'+(r?e:ie(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:ie(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,o){return e}heading(e,o,r){return`<h${o}>${e}</h${o}>
`}hr(){return`<hr>
`}list(e,o,r){let a=o?"ol":"ul",s=o&&r!==1?' start="'+r+'"':"";return"<"+a+s+`>
`+e+"</"+a+`>
`}listitem(e,o,r){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,o){return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+o+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,o){let r=o.header?"th":"td";return(o.align?`<${r} align="${o.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,o,r){let a=vn(e);if(a===null)return r;e=a;let s='<a href="'+e+'"';return o&&(s+=' title="'+o+'"'),s+=">"+r+"</a>",s}image(e,o,r){let a=vn(e);if(a===null)return r;e=a;let s=`<img src="${e}" alt="${r}"`;return o&&(s+=` title="${o}"`),s+=">",s}text(e){return e}},ir=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,o,r){return""+r}image(e,o,r){return""+r}br(){return""}},qe=class t{options;renderer;textRenderer;constructor(e){this.options=e||fo,this.options.renderer=this.options.renderer||new Bo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ir}static parse(e,o){return new t(o).parse(e)}static parseInline(e,o){return new t(o).parseInline(e)}parse(e,o=!0){let r="";for(let a=0;a<e.length;a++){let s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let n=s,c=this.options.extensions.renderers[n.type].call({parser:this},n);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(n.type)){r+=c||"";continue}}switch(s.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{let n=s;r+=this.renderer.heading(this.parseInline(n.tokens),n.depth,$d(this.parseInline(n.tokens,this.textRenderer)));continue}case"code":{let n=s;r+=this.renderer.code(n.text,n.lang,!!n.escaped);continue}case"table":{let n=s,c="",h="";for(let p=0;p<n.header.length;p++)h+=this.renderer.tablecell(this.parseInline(n.header[p].tokens),{header:!0,align:n.align[p]});c+=this.renderer.tablerow(h);let u="";for(let p=0;p<n.rows.length;p++){let g=n.rows[p];h="";for(let f=0;f<g.length;f++)h+=this.renderer.tablecell(this.parseInline(g[f].tokens),{header:!1,align:n.align[f]});u+=this.renderer.tablerow(h)}r+=this.renderer.table(c,u);continue}case"blockquote":{let n=s,c=this.parse(n.tokens);r+=this.renderer.blockquote(c);continue}case"list":{let n=s,c=n.ordered,h=n.start,u=n.loose,p="";for(let g=0;g<n.items.length;g++){let f=n.items[g],m=f.checked,y=f.task,d="";if(f.task){let E=this.renderer.checkbox(!!m);u?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=E+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=E+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:E+" "}):d+=E+" "}d+=this.parse(f.tokens,u),p+=this.renderer.listitem(d,y,!!m)}r+=this.renderer.list(p,c,h);continue}case"html":{let n=s;r+=this.renderer.html(n.text,n.block);continue}case"paragraph":{let n=s;r+=this.renderer.paragraph(this.parseInline(n.tokens));continue}case"text":{let n=s,c=n.tokens?this.parseInline(n.tokens):n.text;for(;a+1<e.length&&e[a+1].type==="text";)n=e[++a],c+=`
`+(n.tokens?this.parseInline(n.tokens):n.text);r+=o?this.renderer.paragraph(c):c;continue}default:{let n='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(n),"";throw new Error(n)}}}return r}parseInline(e,o){o=o||this.renderer;let r="";for(let a=0;a<e.length;a++){let s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let n=this.options.extensions.renderers[s.type].call({parser:this},s);if(n!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=n||"";continue}}switch(s.type){case"escape":{let n=s;r+=o.text(n.text);break}case"html":{let n=s;r+=o.html(n.text);break}case"link":{let n=s;r+=o.link(n.href,n.title,this.parseInline(n.tokens,o));break}case"image":{let n=s;r+=o.image(n.href,n.title,n.text);break}case"strong":{let n=s;r+=o.strong(this.parseInline(n.tokens,o));break}case"em":{let n=s;r+=o.em(this.parseInline(n.tokens,o));break}case"codespan":{let n=s;r+=o.codespan(n.text);break}case"br":{r+=o.br();break}case"del":{let n=s;r+=o.del(this.parseInline(n.tokens,o));break}case"text":{let n=s;r+=o.text(n.text);break}default:{let n='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(n),"";throw new Error(n)}}}return r}},Mo=class{options;constructor(e){this.options=e||fo}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}},ar=class{defaults=qi();options=this.setOptions;parse=this.#t(We.lex,qe.parse);parseInline=this.#t(We.lexInline,qe.parseInline);Parser=qe;Renderer=Bo;TextRenderer=ir;Lexer=We;Tokenizer=Fo;Hooks=Mo;constructor(...e){this.use(...e)}walkTokens(e,o){let r=[];for(let a of e)switch(r=r.concat(o.call(this,a)),a.type){case"table":{let s=a;for(let n of s.header)r=r.concat(this.walkTokens(n.tokens,o));for(let n of s.rows)for(let c of n)r=r.concat(this.walkTokens(c.tokens,o));break}case"list":{let s=a;r=r.concat(this.walkTokens(s.items,o));break}default:{let s=a;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(n=>{let c=s[n].flat(1/0);r=r.concat(this.walkTokens(c,o))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,o)))}}return r}use(...e){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let n=o.renderers[s.name];n?o.renderers[s.name]=function(...c){let h=s.renderer.apply(this,c);return h===!1&&(h=n.apply(this,c)),h}:o.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=o[s.level];n?n.unshift(s.tokenizer):o[s.level]=[s.tokenizer],s.start&&(s.level==="block"?o.startBlock?o.startBlock.push(s.start):o.startBlock=[s.start]:s.level==="inline"&&(o.startInline?o.startInline.push(s.start):o.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(o.childTokens[s.name]=s.childTokens)}),a.extensions=o),r.renderer){let s=this.defaults.renderer||new Bo(this.defaults);for(let n in r.renderer){if(!(n in s))throw new Error(`renderer '${n}' does not exist`);if(n==="options")continue;let c=n,h=r.renderer[c],u=s[c];s[c]=(...p)=>{let g=h.apply(s,p);return g===!1&&(g=u.apply(s,p)),g||""}}a.renderer=s}if(r.tokenizer){let s=this.defaults.tokenizer||new Fo(this.defaults);for(let n in r.tokenizer){if(!(n in s))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let c=n,h=r.tokenizer[c],u=s[c];s[c]=(...p)=>{let g=h.apply(s,p);return g===!1&&(g=u.apply(s,p)),g}}a.tokenizer=s}if(r.hooks){let s=this.defaults.hooks||new Mo;for(let n in r.hooks){if(!(n in s))throw new Error(`hook '${n}' does not exist`);if(n==="options")continue;let c=n,h=r.hooks[c],u=s[c];Mo.passThroughHooks.has(n)?s[c]=p=>{if(this.defaults.async)return Promise.resolve(h.call(s,p)).then(f=>u.call(s,f));let g=h.call(s,p);return u.call(s,g)}:s[c]=(...p)=>{let g=h.apply(s,p);return g===!1&&(g=u.apply(s,p)),g}}a.hooks=s}if(r.walkTokens){let s=this.defaults.walkTokens,n=r.walkTokens;a.walkTokens=function(c){let h=[];return h.push(n.call(this,c)),s&&(h=h.concat(s.call(this,c))),h}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,o){return We.lex(e,o??this.defaults)}parser(e,o){return qe.parse(e,o??this.defaults)}#t(e,o){return(r,a)=>{let s={...a},n={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(n.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),n.async=!0);let c=this.#e(!!n.silent,!!n.async);if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(n.hooks&&(n.hooks.options=n),n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(r):r).then(h=>e(h,n)).then(h=>n.hooks?n.hooks.processAllTokens(h):h).then(h=>n.walkTokens?Promise.all(this.walkTokens(h,n.walkTokens)).then(()=>h):h).then(h=>o(h,n)).then(h=>n.hooks?n.hooks.postprocess(h):h).catch(c);try{n.hooks&&(r=n.hooks.preprocess(r));let h=e(r,n);n.hooks&&(h=n.hooks.processAllTokens(h)),n.walkTokens&&this.walkTokens(h,n.walkTokens);let u=o(h,n);return n.hooks&&(u=n.hooks.postprocess(u)),u}catch(h){return c(h)}}}#e(e,o){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let a="<p>An error occurred:</p><pre>"+ie(r.message+"",!0)+"</pre>";return o?Promise.resolve(a):a}if(o)return Promise.reject(r);throw r}}},mo=new ar;function pt(t,e){return mo.parse(t,e)}pt.options=pt.setOptions=function(t){return mo.setOptions(t),pt.defaults=mo.defaults,kn(pt.defaults),pt};pt.getDefaults=qi;pt.defaults=fo;pt.use=function(...t){return mo.use(...t),pt.defaults=mo.defaults,kn(pt.defaults),pt};pt.walkTokens=function(t,e){return mo.walkTokens(t,e)};pt.parseInline=mo.parseInline;pt.Parser=qe;pt.parser=qe.parse;pt.Renderer=Bo;pt.TextRenderer=ir;pt.Lexer=We;pt.lexer=We.lex;pt.Tokenizer=Fo;pt.Hooks=Mo;pt.parse=pt;var _T=pt.options,DT=pt.setOptions,IT=pt.use,RT=pt.walkTokens,PT=pt.parseInline;var OT=qe.parse,MT=We.lex;var Yi=new ar,Xi=new Set,lr=class extends L{constructor(){super(...arguments),this.renderGeneration=0,this.suppressSlotChange=!1,this.tabSize=4}static getMarked(){return Yi}static updateAll(){for(let t of Xi)t.renderMarkdown()}get marked(){return Yi}connectedCallback(){super.connectedCallback(),Xi.add(this)}disconnectedCallback(){Xi.delete(this),super.disconnectedCallback()}dedent(t){let o=t.replace(/\r\n/g,`
`).split(`
`).map(h=>{let u="",p=0;for(let g=0;g<h.length;g++){let f=h[g];if(f==="	"){let m=this.tabSize-p%this.tabSize;u+=" ".repeat(m),p+=m}else if(f===" ")u+=" ",p++;else{u+=h.slice(g);break}}return u}),r=0;for(;r<o.length&&o[r].trim()==="";)r++;let a=o.length-1;for(;a>=r&&o[a].trim()==="";)a--;let s=o.slice(r,a+1);if(s.length===0)return"";let n=1/0;for(let h of s){if(h.trim()==="")continue;let u=h.match(/^( *)/),p=u?u[1].length:0;n=Math.min(n,p)}return n===1/0&&(n=0),s.map(h=>h.trim()===""?"":h.slice(n)).join(`
`)}getSourceScript(){return this.querySelector('script[type="text/markdown"]')}renderMarkdown(){let t=this.getSourceScript();if(!t){console.warn('No <script type="text/markdown"> found. Provide markdown content inside a <script type="text/markdown"> element.',this);return}let e=++this.renderGeneration,o=t.textContent??"",r=this.dedent(o),a;try{a=Yi.parse(r)}catch(n){console.error("Failed to parse markdown content.",n,this);return}let s=n=>{if(e!==this.renderGeneration)return;this.suppressSlotChange=!0;for(let h of[...this.childNodes])h!==t&&h.remove();let c=document.createRange().createContextualFragment(n);this.appendChild(c),queueMicrotask(()=>{this.suppressSlotChange=!1})};typeof a=="string"?s(a):a.then(s).catch(n=>{console.error("Failed to parse markdown content.",n,this)})}handleSlotChange(){this.suppressSlotChange||this.didSSR&&!this.hasUpdated||this.renderMarkdown()}render(){return b`<slot @slotchange=${this.handleSlotChange}></slot>`}};lr.css=bn;i([l({type:Number,attribute:"tab-size"})],lr.prototype,"tabSize",2);lr=i([S("wa-markdown")],lr);var Dn=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var In=k`
  :host {
    display: contents;
  }
`;var ve=class extends L{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new Dn({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return b` <slot></slot> `}};ve.css=In;i([l({reflect:!0})],ve.prototype,"attr",2);i([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],ve.prototype,"attrOldValue",2);i([l({attribute:"char-data",type:Boolean,reflect:!0})],ve.prototype,"charData",2);i([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ve.prototype,"charDataOldValue",2);i([l({attribute:"child-list",type:Boolean,reflect:!0})],ve.prototype,"childList",2);i([l({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);i([x("disabled")],ve.prototype,"handleDisabledChange",1);i([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],ve.prototype,"handleChange",1);ve=i([S("wa-mutation-observer")],ve);var Rn=k`
  :host(:focus) {
    outline: none;
  }

  .number-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: inherit;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    padding: 0;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    .number-field {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-quiet);
          background-color: var(--wa-color-neutral-fill-quiet);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-quiet), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-quiet), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled-outlined']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([pill]) {
    .number-field,
    .stepper {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  .number-field {
    /* Show autofill styles over the entire number field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input {
      flex: auto;
      height: 100%;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 0 var(--wa-form-control-padding-inline);
      outline: none;
      box-shadow: none;
      border: none;
      background-color: transparent;
      font: inherit;
      transition: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /* Center-align and use tabular numbers for better alignment */
      text-align: center;
      font-variant-numeric: tabular-nums;

      /* Hide the number spinners in Firefox */
      -moz-appearance: textfield;

      /* Hide the number spinners in Chrome/Safari */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        display: none;
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 1;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start {
    justify-content: start;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .end {
    justify-content: end;
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  /*
   * Steppers - horizontal layout with minus on start, plus on end
   */

  .stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    height: calc(100% - var(--wa-form-control-border-width) * 2);
    flex: 0 0 auto;
    border: none;
    border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 2);
    background: transparent;
    cursor: pointer;
    margin: var(--wa-form-control-border-width);
    padding: 0;
    font-size: inherit;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  :host([without-steppers]) .stepper {
    display: none;
  }
`;var ct=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new rt(this,"hint","label"),this.localize=new I(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Gt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Y(this.localName,this.size)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}get isAtMin(){if(this.min===void 0)return!1;let t=parseFloat(this.value||"");return!isNaN(t)&&t<=this.min}get isAtMax(){if(this.max===void 0)return!1;let t=parseFloat(this.value||"");return!isNaN(t)&&t>=this.max}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(t){$o(t,this),(t.key==="ArrowUp"||t.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperPointerUp(t,e){if(this.disabled||this.readonly)return;let o=new InputEvent("beforeinput",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(o),!o.defaultPrevented&&(t==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e.pointerType!=="touch"&&this.input.focus())}handleStepperPointerDown(t){t.pointerType!=="touch"&&(t.preventDefault(),this.input.focus())}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue"))&&(this.input&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value))}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e;return b`
      <label
        part="form-control-label label"
        class=${_({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="number-field">
        ${this.withoutSteppers?"":b`
              <button
                part="stepper stepper-decrement"
                class="stepper stepper-decrement"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("decrement")}
                ?disabled=${this.disabled||this.readonly||this.isAtMin}
                @pointerdown=${this.handleStepperPointerDown}
                @pointerup=${a=>this.handleStepperPointerUp("down",a)}
              >
                <slot name="decrement-icon">
                  <wa-icon name="minus" library="system"></wa-icon>
                </slot>
              </button>
            `}

        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type="number"
          inputmode=${D(this.inputmode)}
          title=${this.title}
          name=${D(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${D(this.placeholder)}
          min=${D(this.min)}
          max=${D(this.max)}
          step=${D(this.step)}
          .value=${Pt(this.value??"")}
          autocomplete=${D(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${D(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${this.withoutSteppers?"":b`
              <button
                part="stepper stepper-increment"
                class="stepper stepper-increment"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("increment")}
                ?disabled=${this.disabled||this.readonly||this.isAtMax}
                @pointerdown=${this.handleStepperPointerDown}
                @pointerup=${a=>this.handleStepperPointerUp("up",a)}
              >
                <slot name="increment-icon">
                  <wa-icon name="plus" library="system"></wa-icon>
                </slot>
              </button>
            `}
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${_({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};ct.css=[X,bt,Rn];ct.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C("input")],ct.prototype,"input",2);i([l()],ct.prototype,"title",2);i([T()],ct.prototype,"value",1);i([l({attribute:"value",reflect:!0})],ct.prototype,"defaultValue",2);i([l({reflect:!0})],ct.prototype,"size",2);i([x("size")],ct.prototype,"handleSizeChange",1);i([l({reflect:!0})],ct.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],ct.prototype,"pill",2);i([l()],ct.prototype,"label",2);i([l({attribute:"hint"})],ct.prototype,"hint",2);i([l()],ct.prototype,"placeholder",2);i([l({type:Boolean,reflect:!0})],ct.prototype,"readonly",2);i([l({type:Boolean,reflect:!0})],ct.prototype,"required",2);i([l({type:Number})],ct.prototype,"min",2);i([l({type:Number})],ct.prototype,"max",2);i([l()],ct.prototype,"step",2);i([l({attribute:"without-steppers",type:Boolean})],ct.prototype,"withoutSteppers",2);i([l()],ct.prototype,"autocomplete",2);i([l({type:Boolean})],ct.prototype,"autofocus",2);i([l()],ct.prototype,"enterkeyhint",2);i([l()],ct.prototype,"inputmode",2);i([l({attribute:"with-label",type:Boolean})],ct.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],ct.prototype,"withHint",2);i([x("step",{waitUntilFirstUpdate:!0})],ct.prototype,"handleStepChange",1);ct=i([S("wa-number-input")],ct);ct.disableWarning?.("change-in-update");var Pn=k`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function cr(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(a=>cr(a,--e)).join("");let o=t;if(o.nodeType===Node.TEXT_NODE)return o.textContent??"";if(o.nodeType===Node.ELEMENT_NODE){let r=o;if(r.hasAttribute("slot")||r.matches("style, script"))return"";if(r instanceof HTMLSlotElement){let a=r.assignedNodes({flatten:!0});if(a.length>0)return cr(a,--e)}return e>-1?cr(r,--e):r.textContent??""}return o.hasChildNodes()?cr(o.childNodes,--e):""}var Se=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){let e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.isDefaultLabelDirty=!0,this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{let t=this.closest("wa-select");t&&t.handleDefaultSlotChange()}),customElements.whenDefined("wa-combobox").then(()=>{let t=this.closest("wa-combobox");t&&t.handleDefaultSlotChange()})):this.isInitialized=!0}willUpdate(t){t.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(t)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){let t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}}updated(t){t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current),super.updated(t)}async firstUpdated(t){if(super.firstUpdated(t),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let t=this.cachedDefaultLabel;this.cachedDefaultLabel=cr(this).trim(),this.isDefaultLabelDirty=!1;let e=this.cachedDefaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){let t=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),ze):b`
      ${t?b`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:b`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Se.css=Pn;i([C(".label")],Se.prototype,"defaultSlot",2);i([T()],Se.prototype,"current",2);i([l({reflect:!0})],Se.prototype,"value",2);i([l({type:Boolean})],Se.prototype,"disabled",2);i([l({type:Boolean,attribute:!1})],Se.prototype,"selected",2);i([l({type:Boolean,attribute:"selected"})],Se.prototype,"defaultSelected",2);i([l()],Se.prototype,"label",1);Se=i([S("wa-option")],Se);var On=(t="768px")=>`
  @media screen and (width < ${t}) {
    [part~='navigation'] {
      display: none;
    }

    :host(:not([disable-navigation-toggle])) slot[name~='navigation-toggle'] {
      display: contents;
    }
  }
`;var Mn=k`
  :host {
    display: block;
    background-color: var(--wa-color-surface-default);
    box-sizing: border-box;
    min-height: 100%;
    --menu-width: auto;
    --main-width: 1fr;
    --aside-width: auto;
    --banner-height: 0px;
    --header-height: 0px;
    --subheader-height: 0px;
    --scroll-margin-top: calc(var(--header-height, 0px) + var(--subheader-height, 0px) + 0.5em);

    --banner-top: var(--banner-height);
    --header-top: var(--header-height);
    --subheader-top: var(--subheader-height);
  }

  slot[name]:not([name='skip-to-content'], [name='navigation-toggle'])::slotted(*) {
    display: flex;
    background-color: var(--wa-color-surface-default);
  }

  ::slotted([slot='banner']) {
    align-items: center;
    justify-content: center;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot='header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
    flex: auto;
  }

  ::slotted([slot='subheader']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot*='navigation']),
  ::slotted([slot='menu']),
  ::slotted([slot='aside']) {
    flex-direction: column;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
  }

  ::slotted([slot='main-header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m) var(--wa-space-3xl);
  }

  slot:not([name]) {
    /* See #331 */
    &::slotted(main),
    &::slotted(section) {
      padding: var(--wa-space-3xl);
    }
  }

  ::slotted([slot='main-footer']),
  ::slotted([slot='footer']) {
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-3xl);
  }

  :host([disable-sticky~='banner']) {
    --banner-top: 0px;
  }
  :host([disable-sticky~='header']) {
    --header-top: 0px;
  }
  :host([disable-sticky~='subheader']) {
    --subheader-top: 0px;
  }

  /* Nothing else depends on subheader-height. */
  :host([disable-sticky~='subheader']) {
  }
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: unset;
    max-height: unset;
  }

  :host([disable-sticky~='banner']) [part~='banner'],
  :host([disable-sticky~='header']) [part~='header'],
  :host([disable-sticky~='subheader']) [part~='subheader'],
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    position: static;
    overflow: unset;
    z-index: unset;
  }

  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: auto;
    max-height: auto;
  }

  [part~='base'] {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, auto)) minmax(0, 1fr) minmax(0, auto);
    grid-template-columns: 100%;
    width: 100%;
    grid-template-areas:
      'banner'
      'header'
      'subheader'
      'body'
      'footer';
  }

  /* Grid areas */
  [part~='banner'] {
    grid-area: banner;
  }
  [part~='header'] {
    grid-area: header;
  }
  [part~='subheader'] {
    grid-area: subheader;
  }
  [part~='menu'] {
    grid-area: menu;
  }
  [part~='body'] {
    grid-area: body;
  }
  [part~='main'] {
    grid-area: main;
  }
  [part~='aside'] {
    grid-area: aside;
  }
  [part~='footer'] {
    grid-area: footer;
  }

  /* Z-indexes */
  [part~='banner'],
  [part~='header'],
  [part~='subheader'] {
    position: sticky;
    z-index: 5;
  }
  [part~='banner'] {
    top: 0px;
  }
  [part~='header'] {
    top: var(--banner-top);

    /** Make the header flex so that you don't unexpectedly have the default toggle button appearing above a slotted div because block elements are fun. */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  [part~='subheader'] {
    top: calc(var(--header-top) + var(--banner-top));
  }
  [part~='body'] {
    display: grid;
    min-height: 100%;
    align-items: flex-start;
    grid-template-columns: minmax(0, var(--menu-width)) minmax(0, var(--main-width)) minmax(0, var(--aside-width));
    grid-template-rows: minmax(0, 1fr);
    grid-template-areas: 'menu main aside';
  }
  [part~='main'] {
    display: grid;
    min-height: 100%;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
    grid-template-areas:
      'main-header'
      'main-content'
      'main-footer';
  }
  [part~='main-header'] {
    grid-area: main-header;
  }
  [part~='main-content'] {
    grid-area: main-content;
  }
  [part~='main-footer'] {
    grid-area: main-footer;
  }

  .skip-to-content {
    position: absolute;
    top: var(--wa-space-m);
    left: var(--wa-space-m);
    z-index: 6;
    border-radius: var(--wa-corners-1x);
    background-color: var(--wa-color-surface-default);
    color: var(--wa-color-text-link);
    text-decoration: none;
    padding: var(--wa-space-s) var(--wa-space-m);
    box-shadow: var(--wa-shadow-l);
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  [part~='menu'],
  [part~='aside'] {
    position: sticky;
    top: calc(var(--banner-top) + var(--header-top) + var(--subheader-top));
    z-index: 4;
    height: min(
      var(--main-height, 100dvh),
      calc(100dvh - var(--header-top) - var(--banner-top) - var(--subheader-top))
    );
    max-height: min(
      var(--main-height, 100dvh),
      calc(100dvh - var(--header-top) - var(--banner-top) - var(--subheader-top))
    );
    overflow: auto;
  }

  [part~='navigation'] {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  }

  [part~='drawer']::part(dialog) {
    background-color: var(--wa-color-surface-default);
  }

  /* Set these on the slot because we don't always control the navigation-toggle since that may be slotted. */
  slot[name~='navigation-toggle'],
  :host([disable-navigation-toggle]) slot[name~='navigation-toggle'] {
    display: none;
  }

  /* Sometimes the media query in the viewport is stubborn in iframes. This is an extra check to make it behave properly. */
  :host(:not([disable-navigation-toggle])[view='mobile']) slot[name~='navigation-toggle'] {
    display: contents;
  }

  [part~='navigation-toggle'] {
    /* Use only a margin-inline-start because the slotted header is expected to have default padding
        so it looks really awkward if this sets a margin-inline-end and the slotted header has a padding-inline-start. */
    margin-inline-start: var(--wa-space-m);
  }
`;var hr=class extends xo{constructor(e){if(super(e),this.it=ze,e.type!==wo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ze||e==null)return this._t=void 0,this.it=e;if(e===go)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}};hr.directiveName="unsafeHTML",hr.resultType=1;var Je=yo(hr);function ap(t,e=document.documentElement){if(!Number.isNaN(Number(t)))return Number(t);if(!window.CSS||!CSS.registerProperty)return typeof t=="string"&&t.endsWith("px")?parseFloat(t):Number(t)||0;let o="--wa-length-resolver";if(!CSS.registerProperty.toString().includes(o))try{CSS.registerProperty({name:o,syntax:"<length>",inherits:!1,initialValue:"0px"})}catch{}let r=e.style.getPropertyValue(o);e.style.setProperty(o,t);let a=getComputedStyle(e)?.getPropertyValue(o);return e.style.setProperty(o,r),a?.endsWith("px")?parseFloat(a):Number(a)||0}function sp(t){return Number.isNaN(Number(t))?t:`${t}px`}var It=class extends L{constructor(){super(),this.headerResizeObserver=this.slotResizeObserver("header"),this.subheaderResizeObserver=this.slotResizeObserver("subheader"),this.bannerResizeObserver=this.slotResizeObserver("banner"),this.footerResizeObserver=this.slotResizeObserver("footer"),this.handleNavigationToggle=t=>{if(this.view==="desktop"){this.hideNavigation();return}let e=t.composedPath(),o=this.navigationToggleSlot;e.find(r=>r.hasAttribute?.("data-toggle-nav")||r.assignedSlot===o||r===o)&&(t.preventDefault(),this.toggleNavigation())},this.view="desktop",this.navOpen=!1,this.mobileBreakpoint="768px",this.navigationPlacement="start",this.disableNavigationToggle=!1,this.pageResizeObserver=typeof ResizeObserver<"u"?new ResizeObserver(t=>{requestAnimationFrame(()=>{for(let e of t)if(e.contentBoxSize){let r=e.borderBoxSize[0].inlineSize,a=this.view;r>=ap(this.mobileBreakpoint)?this.view="desktop":this.view="mobile",this.requestUpdate("view",a)}t.length>0&&this.updateAsideAndMenuHeights()})}):null,this.updateNavigationToggleState=t=>{if(t){let r=t.target.name;if(!["navigation","navigation-header","navigation-footer"].includes(r))return}let e=!!this.querySelector(":not([slot='navigation-toggle']) [data-toggle-nav]"),o=!!this.querySelector('[slot="navigation"]')||!!this.querySelector('[slot="navigation-header"]')||!!this.querySelector('[slot="navigation-footer"]');this.disableNavigationToggle=e||!o},this.updateAsideAndMenuHeights=()=>{let t=this.visiblePixelsInViewport(this.main);t!=null&&(this.aside.style.setProperty("--main-height",`${Math.round(t)}px`),this.menu.style.setProperty("--main-height",`${Math.round(t)}px`))},this.addEventListener("click",this.handleNavigationToggle)}slotResizeObserver(t){return new ResizeObserver(e=>{requestAnimationFrame(()=>{for(let o of e)if(o.contentBoxSize){let r=o.borderBoxSize[0];this.style.setProperty(`--${t}-height`,`${Math.round(r.blockSize)}px`)}})})}updated(t){t.has("view")&&this.hideNavigation(),super.updated(t)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("scroll",this.updateAsideAndMenuHeights,{passive:!0}),requestAnimationFrame(()=>{this.updateAsideAndMenuHeights(),this.pageResizeObserver?.observe(this),this.headerResizeObserver?.observe(this.header),this.subheaderResizeObserver?.observe(this.subheader),this.bannerResizeObserver?.observe(this.banner),this.footerResizeObserver?.observe(this.footer)})})}visiblePixelsInViewport(t){if(!t)return null;let e=t.clientHeight,o=window.innerHeight,r=t.getBoundingClientRect?.();if(!r)return null;let{top:a,bottom:s}=r;return Math.max(0,a>0?Math.min(e,o-a):Math.min(s,o))}firstUpdated(){if(!document.getElementById("main-content")){let t=document.createElement("div");t.id="main-content",t.slot="skip-to-content-target",this.prepend(t)}this.shadowRoot.addEventListener("slotchange",this.updateNavigationToggleState),this.updateNavigationToggleState()}disconnectedCallback(){super.disconnectedCallback(),this.pageResizeObserver?.unobserve(this),this.headerResizeObserver?.unobserve(this.header),this.subheaderResizeObserver?.unobserve(this.subheader),this.footerResizeObserver?.unobserve(this.footer),this.bannerResizeObserver?.unobserve(this.banner),document.removeEventListener("scroll",this.updateAsideAndMenuHeights)}showNavigation(){this.navOpen=!0}hideNavigation(){this.navOpen=!1}toggleNavigation(){this.navOpen=!this.navOpen}render(){return b`
      <a href="#main-content" part="skip-to-content" class="wa-visually-hidden">
        <slot name="skip-to-content">Skip to content</slot>
      </a>

      <!-- unsafeHTML needed for SSR until this is solved: https://github.com/lit/lit/issues/4696 -->
      ${Je(`
        <style id="mobile-styles">
          ${On(sp(this.mobileBreakpoint))}
        </style>
      `)}

      <div class="base" part="base">
        <div class="banner" part="banner">
          <slot name="banner"></slot>
        </div>
        <div class="header" part="header">
          <slot name="navigation-toggle">
            <wa-button part="navigation-toggle" size="s" appearance="plain" variant="neutral">
              <slot name="navigation-toggle-icon">
                <wa-icon name="bars" part="navigation-toggle-icon" label="Toggle navigation drawer"></wa-icon>
              </slot>
            </wa-button>
          </slot>
          <slot name="header"></slot>
        </div>
        <div class="subheader" part="subheader">
          <slot name="subheader"></slot>
        </div>
        <div class="body" part="body">
          <div class="menu" part="menu">
            <slot name="menu">
              <nav name="navigation" class="navigation" part="navigation navigation-desktop">
                <!-- Add fallback divs so that CSS grid works properly. -->
                <slot name="desktop-navigation-header">
                  <slot name=${this.view==="desktop"?"navigation-header":"___"}><div></div></slot>
                </slot>
                <slot name="desktop-navigation">
                  <slot name=${this.view==="desktop"?"navigation":"____"}><div></div></slot>
                </slot>
                <slot name="desktop-navigation-footer">
                  <slot name=${this.view==="desktop"?"navigation-footer":"___"}><div></div></slot>
                </slot>
              </nav>
            </slot>
          </div>
          <div class="main" part="main">
            <div class="main-header" part="main-header">
              <slot name="main-header"></slot>
            </div>
            <div class="main-content" part="main-content">
              <slot name="skip-to-content-target"></slot>
              <slot></slot>
            </div>
            <div class="main-footer" part="main-footer">
              <slot name="main-footer"></slot>
            </div>
          </div>
          <div class="aside" part="aside">
            <slot name="aside"></slot>
          </div>
        </div>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <wa-drawer
        part="drawer"
        placement=${this.navigationPlacement}
        light-dismiss
        ?open=${Pt(this.navOpen)}
        @wa-after-show=${()=>this.navOpen=this.navigationDrawer.open}
        @wa-after-hide=${()=>this.navOpen=this.navigationDrawer.open}
        exportparts="
          dialog:drawer__dialog,
          overlay:drawer__overlay,
          panel:drawer__panel,
          header:drawer__header,
          header-actions:drawer__header-actions,
          title:drawer__title,
          close-button:drawer__close-button,
          close-button__base:drawer__close-button__base,
          body:drawer__body,
          footer:drawer__footer
        "
        class="navigation-drawer"
      >
        <slot slot="label" part="navigation-header" name="mobile-navigation-header">
          <slot name=${this.view==="mobile"?"navigation-header":"___"}></slot>
        </slot>
        <slot name="mobile-navigation">
          <slot name=${this.view==="mobile"?"navigation":"____"}></slot>
        </slot>

        <slot slot="footer" name="mobile-navigation-footer">
          <slot part="navigation-footer" name=${this.view==="mobile"?"navigation-footer":"___"}></slot>
        </slot>
      </wa-drawer>
    `}};It.css=[Ye,Mn];i([C("[part~='header']")],It.prototype,"header",2);i([C("[part~='menu']")],It.prototype,"menu",2);i([C("[part~='main']")],It.prototype,"main",2);i([C("[part~='aside']")],It.prototype,"aside",2);i([C("[part~='subheader']")],It.prototype,"subheader",2);i([C("[part~='footer']")],It.prototype,"footer",2);i([C("[part~='banner']")],It.prototype,"banner",2);i([C("[part~='drawer']")],It.prototype,"navigationDrawer",2);i([C("slot[name~='navigation-toggle']")],It.prototype,"navigationToggleSlot",2);i([l({attribute:"view",reflect:!0})],It.prototype,"view",2);i([l({attribute:"nav-open",reflect:!0,type:Boolean})],It.prototype,"navOpen",2);i([l({attribute:"mobile-breakpoint",type:String})],It.prototype,"mobileBreakpoint",2);i([l({attribute:"navigation-placement",reflect:!0})],It.prototype,"navigationPlacement",2);i([l({attribute:"disable-navigation-toggle",reflect:!0,type:Boolean})],It.prototype,"disableNavigationToggle",2);It=i([S("wa-page")],It);var Fn=k`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: min(var(--max-width), 100vw);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Gi=new Set,Rt=class extends L{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&At(this)&&(t.preventDefault(),t.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=de("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Lt(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}Gi.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Gi.add(this),Ft(this),requestAnimationFrame(()=>{let e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new qt)}else{let t=new Vt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Gi.delete(this),Lt(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Wt)}}handleForChange(){let t=this.getRootNode();if(!t)return;let e=this.for?t.getElementById(this.for):null,o=this.anchor;if(e===o)return;let{signal:r}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:r}),o&&o.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,yt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"wa-after-hide")}render(){return b`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${_({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          shift-padding="8"
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};Rt.css=Fn;Rt.dependencies={"wa-popup":at};i([C("dialog")],Rt.prototype,"dialog",2);i([C(".body")],Rt.prototype,"body",2);i([C("wa-popup")],Rt.prototype,"popup",2);i([T()],Rt.prototype,"anchor",2);i([l()],Rt.prototype,"placement",2);i([l({type:Boolean,reflect:!0})],Rt.prototype,"open",2);i([l({type:Number})],Rt.prototype,"distance",2);i([l({type:Number})],Rt.prototype,"skidding",2);i([l()],Rt.prototype,"for",2);i([l({attribute:"without-arrow",type:Boolean,reflect:!0})],Rt.prototype,"withoutArrow",2);i([x("open",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleOpenChange",1);i([x("for")],Rt.prototype,"handleForChange",1);i([x(["distance","placement","skidding"])],Rt.prototype,"handleOptionsChange",1);Rt=i([S("wa-popover")],Rt);var Bn=k`
  :host {
    --track-height: 1rem;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);

    display: flex;
  }

  .progress-bar {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    height: var(--track-height);
    border-radius: var(--wa-border-radius-pill);
    background-color: var(--track-color);
    color: var(--wa-color-brand-on-loud);
    font-size: var(--wa-font-size-s);
  }

  .indicator {
    width: var(--percentage);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--indicator-color);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1;
    font-weight: var(--wa-font-weight-semibold);
    transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  :host([indeterminate]) .indicator {
    position: absolute;
    inset-block: 0;
    inline-size: 50%;
    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--wa-color-surface-default);
    }

    .indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes wa-progress-indeterminate {
    0% {
      inset-inline-start: -50%;
    }

    75%,
    100% {
      inset-inline-start: 100%;
    }
  }
`;var bo=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.value=0,this.indeterminate=!1,this.label=""}willUpdate(t){this.style==null&&this.setStyleProperty("--percentage",`${H(this.value,0,100)}%`),super.willUpdate(t)}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${H(this.value,0,100)}%`)}),super.updated(t)}render(){return b`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${D(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":b` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};bo.css=Bn;i([l({type:Number,reflect:!0})],bo.prototype,"value",2);i([l({type:Boolean,reflect:!0})],bo.prototype,"indeterminate",2);i([l()],bo.prototype,"label",2);bo=i([S("wa-progress-bar")],bo);var Vn=k`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var He=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,r=o-this.value/100*o;this.indicatorOffset=`${r}px`}}render(){return b`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${lt({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${lt({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};He.css=Vn;i([C(".indicator")],He.prototype,"indicator",2);i([T()],He.prototype,"indicatorOffset",2);i([l({type:Number,reflect:!0})],He.prototype,"value",2);i([l()],He.prototype,"label",2);He=i([S("wa-progress-ring")],He);He.disableWarning?.("change-in-update");var Wn=k`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }

  span {
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`;var qn=function(t,e,o){},Yr=class{static render(e,o,r){qn(e,o,r)}};(function(t){function e(f,m,y,d){var E=t(y,m);E.addData(f),E.make(),d=d||0;var v=E.getModuleCount(),w=E.getModuleCount()+2*d;function A(z,$){return z-=d,$-=d,z<0||z>=v||$<0||$>=v?!1:E.isDark(z,$)}return{text:f,level:m,version:y,moduleCount:w,isDark:A}}function o(f,m,y,d,E){y=Math.max(1,y||1),d=Math.min(40,d||40);for(var v=y;v<=d;v+=1)try{return e(f,m,v,E)}catch{}}function r(f,m,y){y.background&&(m.fillStyle=y.background,m.fillRect(y.left,y.top,y.size,y.size))}function a(f,m,y,d,E,v,w,A,z,$){w?f.moveTo(m+v,y):f.moveTo(m,y);function V(N,U,st,nt,mt,ht,_t){N?(f.lineTo(U+ht,st+_t),f.arcTo(U,st,nt,mt,v)):f.lineTo(U,st)}V(A,d,y,d,E,-v,0),V(z,d,E,m,E,0,-v),V($,m,E,m,y,v,0),V(w,m,y,d,y,0,v)}function s(f,m,y,d,E,v,w,A,z,$){function V(N,U,st,nt){f.moveTo(N+st,U),f.lineTo(N,U),f.lineTo(N,U+nt),f.arcTo(N,U,N+st,U,v)}w&&V(m,y,v,v),A&&V(d,y,-v,v),z&&V(d,E,-v,-v),$&&V(m,E,v,-v)}function n(f,m,y,d,E,v,w,A){var z=f.isDark,$=d+v,V=E+v,N=w-1,U=w+1,st=A-1,nt=A+1,mt=Math.floor(Math.min(.5,Math.max(0,y.radius))*v),ht=z(w,A),_t=z(N,st),ft=z(N,A),te=z(N,nt),O=z(w,nt),P=z(U,nt),R=z(U,A),F=z(U,st),B=z(w,st);d=Math.round(d),E=Math.round(E),$=Math.round($),V=Math.round(V),ht?a(m,d,E,$,V,mt,!ft&&!B,!ft&&!O,!R&&!O,!R&&!B):s(m,d,E,$,V,mt,ft&&B&&_t,ft&&O&&te,R&&O&&P,R&&B&&F)}function c(f,m,y,d){var E=f.moduleCount,v=y.size/E,w=0,A=0;m.beginPath();let z=7+y.quiet;for(w=0;w<E;w+=1)for(A=0;A<E;A+=1)if((A<z&&w<z||A>=E-z&&w<z||A<z&&w>=E-z)===d){var $=y.left+A*v,V=y.top+w*v,N=v;n(f,m,y,$,V,N,w,A)}h(m,y,d),m.fill()}function h(f,m,y){let d=y&&m.cornerFill||m.fill;if(typeof d=="string"){f.fillStyle=d;return}let E=d.type,v=d.position,w=d.colorStops,A;if(E==="linear-gradient"){let z=v.slice(0,4).map($=>Math.round($*m.size));A=f.createLinearGradient.apply(f,z)}else if(E==="radial-gradient"){let z=v.slice(0,6).map($=>Math.round($*m.size));A=f.createRadialGradient.apply(f,z)}else throw new Error("Unsupported fill");w.forEach(([z,$])=>{A.addColorStop(z,$)}),f.fillStyle=A}function u(f,m,y){if(f=o(y.text,y.ecLevel,y.minVersion,y.maxVersion,y.quiet),!f)return null;var d=m.getContext("2d");return d&&(r(f,d,y),c(f,d,y,!0),c(f,d,y,!1)),m}function p(f,m){var y=document.createElement("canvas");return y.width=m.size,y.height=m.size,u(f,y,m)}var g={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",cornerFill:null,background:null,text:"no text",radius:.5,quiet:0,image:null,imageEcCover:.5};qn=function(f,m,y){var d=Object.assign({},g,f);d.minVersion=d.minVersion,d.maxVersion=d.maxVersion,d.ecLevel=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.radius=d.radius,d.quiet=d.quiet,d.cornerFill=d.cornerFill||d.fill,d.image=d.image,d.imageBackground=d.imageBackground,d.imageEcCover=d.imageEcCover,d.imagePadding=d.imagePadding;var E=o(d.text,d.ecLevel,d.minVersion,d.maxVersion,d.quiet);if(!E)return;y=y||function(){};let v=function(){var w=m;if(m instanceof HTMLCanvasElement){(m.width!==d.size||m.height!==d.size)&&(m.width=d.size,m.height=d.size);let A=m.getContext("2d");A&&A.clearRect(0,0,m.width,m.height),u(E,m,d)}else if(E){let A=p(E,d);A&&(w=A,m.appendChild(w))}return w};if(d.image){let w=new Image;w.onload=function(){if(!E)return;let A=d.imageEcCover??g.imageEcCover,z=E.moduleCount-d.quiet*2,$=d.size/z,V=w.naturalWidth/w.naturalHeight,N=d.size*A;N=Math.min(N,N*V);let U=d.size*A;U=Math.min(U,U/V);let st=z*z-172,nt={L:.07,M:.15,Q:.25,H:.3}[d.ecLevel]*A*st|0;var mt=Math.min(z,Math.sqrt(nt*V)|0,N),ht=mt/V|0;ht>z&&(ht=z,mt=ht*V|0),ht=Math.min(ht,U);let _t=E.moduleCount/2-mt/2|0,ft=E.moduleCount/2-ht/2|0,te=E.isDark;E.isDark=function(dt,eo){return _t<=eo&&eo<_t+mt&&ft<=dt&&dt<ft+ht?!1:te(dt,eo)};let O=Math.min(mt,ht*V)-d.quiet,P=Math.min(ht,mt/V)-d.quiet,R=_t+(mt-O)/2-d.quiet,F=ft+(ht-P)/2-d.quiet,B=R*$,ot=F*$,xt=O*$,j=P*$;var se=v();let ne=se.getContext("2d");ne&&(ne.fillStyle=d.imageBackground||"transparent",ne.fillRect(B-4,ot-4,xt+8,j+8),ne.drawImage(w,B,ot,xt,j)),y()},w.onerror=()=>{v(),y()},w.src=d.image}else v(),y()}})((function(){var t=(function(){function e(g,f){var m=236,y=17,d=g,E=r[f],v=null,w=0,A=null,z=new Array,$={},V=function(O,P){w=d*4+17,v=(function(R){for(var F=new Array(R),B=0;B<R;B+=1){F[B]=new Array(R);for(var ot=0;ot<R;ot+=1)F[B][ot]=null}return F})(w),N(0,0),N(w-7,0),N(0,w-7),nt(),st(),ht(O,P),d>=7&&mt(O),A==null&&(A=te(d,E,z)),_t(A,P)},N=function(O,P){if(v!=null){for(var R=-1;R<=7;R+=1)if(!(O+R<=-1||w<=O+R))for(var F=-1;F<=7;F+=1)P+F<=-1||w<=P+F||(0<=R&&R<=6&&(F==0||F==6)||0<=F&&F<=6&&(R==0||R==6)||2<=R&&R<=4&&2<=F&&F<=4?v[O+R][P+F]=!0:v[O+R][P+F]=!1)}},U=function(){for(var O=0,P=0,R=0;R<8;R+=1){V(!0,R);var F=s.getLostPoint($);(R==0||O>F)&&(O=F,P=R)}return P},st=function(){if(v){for(var O=8;O<w-8;O+=1)v[O][6]==null&&(v[O][6]=O%2==0);for(var P=8;P<w-8;P+=1)v[6][P]==null&&(v[6][P]=P%2==0)}},nt=function(){if(v)for(var O=s.getPatternPosition(d),P=0;P<O.length;P+=1)for(var R=0;R<O.length;R+=1){var F=O[P],B=O[R];if(v[F][B]==null)for(var ot=-2;ot<=2;ot+=1)for(var xt=-2;xt<=2;xt+=1)v[F+ot][B+xt]=ot==-2||ot==2||xt==-2||xt==2||ot==0&&xt==0}},mt=function(O){if(v){for(var P=s.getBCHTypeNumber(d),R=0;R<18;R+=1){var F=!O&&(P>>R&1)==1;v[Math.floor(R/3)][R%3+w-8-3]=F}for(var R=0;R<18;R+=1){var F=!O&&(P>>R&1)==1;v[R%3+w-8-3][Math.floor(R/3)]=F}}},ht=function(O,P){var R=E<<3|P,F=s.getBCHTypeInfo(R);if(v){for(var B=0;B<15;B+=1){let ot=!O&&(F>>B&1)==1;v[B<6?B:B<8?B+1:w-15+B][8]=ot,v[8][B<8?w-B-1:B<9?15-B:14-B]=ot}v[w-8][8]=!O}},_t=function(O,P){for(var R=-1,F=w-1,B=7,ot=0,xt=s.getMaskFunction(P),j=w-1;j>0;j-=2)for(j==6&&(j-=1);;){for(var se=0;se<2;se+=1)if(v&&v[F][j-se]==null){var ne=!1;ot<O.length&&(ne=(O[ot]>>>B&1)==1);var dt=xt(F,j-se);dt&&(ne=!ne),v[F][j-se]=ne,B-=1,B==-1&&(ot+=1,B=7)}if(F+=R,F<0||w<=F){F-=R,R=-R;break}}},ft=function(O,P){for(var R=0,F=0,B=0,ot=new Array(P.length),xt=new Array(P.length),j=0;j<P.length;j+=1){var se=P[j].dataCount,ne=P[j].totalCount-se;F=Math.max(F,se),B=Math.max(B,ne),ot[j]=new Array(se);for(var dt=0;dt<ot[j].length;dt+=1)ot[j][dt]=255&O.getBuffer()[dt+R];R+=se;var eo=s.getErrorCorrectPolynomial(ne),Al=c(ot[j],eo.getLength()-1),ia=Al.mod(eo);xt[j]=new Array(eo.getLength()-1);for(var dt=0;dt<xt[j].length;dt+=1){var aa=dt+ia.getLength()-xt[j].length;xt[j][dt]=aa>=0?ia.getAt(aa):0}}for(var sa=0,dt=0;dt<P.length;dt+=1)sa+=P[dt].totalCount;for(var Qr=new Array(sa),ur=0,dt=0;dt<F;dt+=1)for(var j=0;j<P.length;j+=1)dt<ot[j].length&&(Qr[ur]=ot[j][dt],ur+=1);for(var dt=0;dt<B;dt+=1)for(var j=0;j<P.length;j+=1)dt<xt[j].length&&(Qr[ur]=xt[j][dt],ur+=1);return Qr},te=function(O,P,R){for(var F=h.getRSBlocks(O,P),B=u(),ot=0;ot<R.length;ot+=1){var xt=R[ot];B.put(xt.getMode(),4),B.put(xt.getLength(),s.getLengthInBits(xt.getMode(),O)),xt.write(B)}for(var j=0,ot=0;ot<F.length;ot+=1)j+=F[ot].dataCount;if(B.getLengthInBits()>j*8)throw new Error("code length overflow. ("+B.getLengthInBits()+">"+j*8+")");for(B.getLengthInBits()+4<=j*8&&B.put(0,4);B.getLengthInBits()%8!=0;)B.putBit(!1);for(;!(B.getLengthInBits()>=j*8||(B.put(m,8),B.getLengthInBits()>=j*8));)B.put(y,8);return ft(B,F)};return $.addData=function(O){var P=p(O);z.push(P),A=null},$.isDark=function(O,P){if(!v)throw new Error("_modules is null");if(O<0||w<=O||P<0||w<=P)throw new Error(O+","+P);return v[O][P]},$.getModuleCount=function(){return w},$.make=function(){V(!1,U())},$}e.stringToBytes=function(g){return new TextEncoder().encode(g)};var o={MODE_8BIT_BYTE:4},r={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s=(function(){var g=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f=1335,m=7973,y=21522,d={},E=function(v){for(var w=0;v!=0;)w+=1,v>>>=1;return w};return d.getBCHTypeInfo=function(v){for(var w=v<<10;E(w)-E(f)>=0;)w^=f<<E(w)-E(f);return(v<<10|w)^y},d.getBCHTypeNumber=function(v){for(var w=v<<12;E(w)-E(m)>=0;)w^=m<<E(w)-E(m);return v<<12|w},d.getPatternPosition=function(v){return g[v-1]},d.getMaskFunction=function(v){switch(v){case a.PATTERN000:return function(w,A){return(w+A)%2==0};case a.PATTERN001:return function(w,A){return w%2==0};case a.PATTERN010:return function(w,A){return A%3==0};case a.PATTERN011:return function(w,A){return(w+A)%3==0};case a.PATTERN100:return function(w,A){return(Math.floor(w/2)+Math.floor(A/3))%2==0};case a.PATTERN101:return function(w,A){return w*A%2+w*A%3==0};case a.PATTERN110:return function(w,A){return(w*A%2+w*A%3)%2==0};case a.PATTERN111:return function(w,A){return(w*A%3+(w+A)%2)%2==0};default:throw new Error("bad maskPattern:"+v)}},d.getErrorCorrectPolynomial=function(v){for(var w=c([1],0),A=0;A<v;A+=1)w=w.multiply(c([1,n.gexp(A)],0));return w},d.getLengthInBits=function(v,w){if(v!=o.MODE_8BIT_BYTE||w<1||w>40)throw new Error("mode: "+v+"; type: "+w);return w<10?8:16},d.getLostPoint=function(v){for(var w=v.getModuleCount(),A=0,z=0;z<w;z+=1)for(var $=0;$<w;$+=1){for(var V=0,N=v.isDark(z,$),U=-1;U<=1;U+=1)if(!(z+U<0||w<=z+U))for(var st=-1;st<=1;st+=1)$+st<0||w<=$+st||U==0&&st==0||N==v.isDark(z+U,$+st)&&(V+=1);V>5&&(A+=3+V-5)}for(var z=0;z<w-1;z+=1)for(var $=0;$<w-1;$+=1){var nt=0;v.isDark(z,$)&&(nt+=1),v.isDark(z+1,$)&&(nt+=1),v.isDark(z,$+1)&&(nt+=1),v.isDark(z+1,$+1)&&(nt+=1),(nt==0||nt==4)&&(A+=3)}for(var z=0;z<w;z+=1)for(var $=0;$<w-6;$+=1)v.isDark(z,$)&&!v.isDark(z,$+1)&&v.isDark(z,$+2)&&v.isDark(z,$+3)&&v.isDark(z,$+4)&&!v.isDark(z,$+5)&&v.isDark(z,$+6)&&(A+=40);for(var $=0;$<w;$+=1)for(var z=0;z<w-6;z+=1)v.isDark(z,$)&&!v.isDark(z+1,$)&&v.isDark(z+2,$)&&v.isDark(z+3,$)&&v.isDark(z+4,$)&&!v.isDark(z+5,$)&&v.isDark(z+6,$)&&(A+=40);for(var mt=0,$=0;$<w;$+=1)for(var z=0;z<w;z+=1)v.isDark(z,$)&&(mt+=1);var ht=Math.abs(100*mt/w/w-50)/5;return A+=ht*10,A},d})(),n=(function(){for(var g=new Array(256),f=new Array(256),m=0;m<8;m+=1)f[m]=1<<m;for(var m=8;m<256;m+=1)f[m]=f[m-4]^f[m-5]^f[m-6]^f[m-8];for(var m=0;m<255;m+=1)g[f[m]]=m;var y={};return y.glog=function(d){if(d<1)throw new Error("glog("+d+")");return g[d]},y.gexp=function(d){for(;d<0;)d+=255;for(;d>=256;)d-=255;return f[d]},y})();function c(g,f){if(typeof g.length>"u")throw new Error(g.length+"/"+f);var m=(function(){for(var d=0;d<g.length&&g[d]==0;)d+=1;for(var E=new Array(g.length-d+f),v=0;v<g.length-d;v+=1)E[v]=g[v+d];return E})(),y={};return y.getAt=function(d){return m[d]},y.getLength=function(){return m.length},y.multiply=function(d){for(var E=new Array(y.getLength()+d.getLength()-1),v=0;v<y.getLength();v+=1)for(var w=0;w<d.getLength();w+=1)E[v+w]^=n.gexp(n.glog(y.getAt(v))+n.glog(d.getAt(w)));return c(E,0)},y.mod=function(d){if(y.getLength()-d.getLength()<0)return y;for(var E=n.glog(y.getAt(0))-n.glog(d.getAt(0)),v=new Array(y.getLength()),w=0;w<y.getLength();w+=1)v[w]=y.getAt(w);for(var w=0;w<d.getLength();w+=1)v[w]^=n.gexp(n.glog(d.getAt(w))+E);return c(v,0).mod(d)},y}var h=(function(){var g=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f=function(d,E){var v={};return v.totalCount=d,v.dataCount=E,v},m={},y=function(d,E){switch(E){case r.L:return g[(d-1)*4+0];case r.M:return g[(d-1)*4+1];case r.Q:return g[(d-1)*4+2];case r.H:return g[(d-1)*4+3];default:return}};return m.getRSBlocks=function(d,E){var v=y(d,E);if(typeof v>"u")throw new Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+E);for(var w=v.length/3,A=new Array,z=0;z<w;z+=1)for(var $=v[z*3+0],V=v[z*3+1],N=v[z*3+2],U=0;U<$;U+=1)A.push(f(V,N));return A},m})(),u=function(){var g=new Array,f=0,m={};return m.getBuffer=function(){return g},m.getAt=function(y){var d=Math.floor(y/8);return(g[d]>>>7-y%8&1)==1},m.put=function(y,d){for(var E=0;E<d;E+=1)m.putBit((y>>>d-E-1&1)==1)},m.getLengthInBits=function(){return f},m.putBit=function(y){var d=Math.floor(f/8);g.length<=d&&g.push(0),y&&(g[d]|=128>>>f%8),f+=1},m},p=function(g){var f=o.MODE_8BIT_BYTE,m=e.stringToBytes(g),y={};return y.getMode=function(){return f},y.getLength=function(d){return m.length},y.write=function(d){for(var E=0;E<m.length;E+=1)d.put(m[E],8)},y};return e})();return t})());var Ut=class extends L{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(t){super.updated(t),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||(this.computedStyle=getComputedStyle(this));let t=this.computedStyle,e=this.shadowRoot?.querySelector("span");e&&(this.spanComputedStyle||(this.spanComputedStyle=getComputedStyle(e))),Yr.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return b`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${lt({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};Ut.css=Wn;i([C("canvas")],Ut.prototype,"canvas",2);i([l()],Ut.prototype,"value",2);i([l()],Ut.prototype,"label",2);i([l({type:Number})],Ut.prototype,"size",2);i([l()],Ut.prototype,"fill",2);i([l()],Ut.prototype,"background",2);i([l({type:Number})],Ut.prototype,"radius",2);i([l({attribute:"error-correction"})],Ut.prototype,"errorCorrection",2);i([l()],Ut.prototype,"image",2);i([l({attribute:"image-background"})],Ut.prototype,"imageBackground",2);i([l({attribute:"image-coverage",type:Number})],Ut.prototype,"imageCoverage",2);i([l({attribute:"image-padding",type:Number})],Ut.prototype,"imagePadding",2);Ut=i([S("wa-qr-code")],Ut);var Hn=k`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;var we=class extends W{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){let e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return b`
      <span part="control" class="control">
        ${this.checked?b`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};we.css=[bt,X,Hn];i([T()],we.prototype,"checked",2);i([T()],we.prototype,"forceDisabled",2);i([l({reflect:!0})],we.prototype,"value",2);i([l({reflect:!0})],we.prototype,"appearance",2);i([l({reflect:!0})],we.prototype,"size",2);i([x("size")],we.prototype,"handleSizeChange",1);i([l({type:Boolean})],we.prototype,"disabled",2);we=i([S("wa-radio")],we);we.disableWarning?.("change-in-update");var Nn=k`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`;var Tt=class extends W{constructor(){super(),this.hasSlotController=new rt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{let e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;let o=this.value;this.value=e.value,e.checked=!0;let r=this.getAllRadios();for(let a of r)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){let t=[pe({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:de("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}handleSizeChange(){Y(this.localName,this.size)}get validationTarget(){if(!1)return;let t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){let t=this.getAllRadios();if(t.forEach((e,o)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",o===0),e.toggleAttribute("data-wa-radio-inner",o!==0&&o!==t.length-1),e.toggleAttribute("data-wa-radio-last",o===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{let e=t.filter(r=>!r.disabled),o=e.find(r=>r.checked);e.length>0&&(o?e.forEach(r=>{r.tabIndex=r.checked?0:-1}):e.forEach((r,a)=>{r.tabIndex=a===0?0:-1})),t.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;let e=this.getAllRadios().filter(c=>!c.disabled);if(e.length<=0)return;t.preventDefault();let o=this.value,r=e.find(c=>c.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=e.indexOf(r)+a;s||(s=0),s<0&&(s=e.length-1),s>e.length-1&&(s=0);let n=e.some(c=>c.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,n||c.setAttribute("tabindex","-1")}),this.value=e[s].value,e[s].checked=!0,n?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;let e=this.getAllRadios(),o=e.find(s=>s.checked),r=e.find(s=>!s.disabled),a=o||r;a&&a.focus(t)}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e;return b`
      <fieldset
        part="form-control"
        class=${_({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${_({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${_({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};Tt.css=[X,bt,Nn];Tt.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C("slot:not([name])")],Tt.prototype,"defaultSlot",2);i([l()],Tt.prototype,"label",2);i([l({attribute:"hint"})],Tt.prototype,"hint",2);i([l({reflect:!0})],Tt.prototype,"name",2);i([l({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);i([l({reflect:!0})],Tt.prototype,"orientation",2);i([T()],Tt.prototype,"value",1);i([l({attribute:"value",reflect:!0})],Tt.prototype,"defaultValue",2);i([l({reflect:!0})],Tt.prototype,"size",2);i([x("size")],Tt.prototype,"handleSizeChange",1);i([l({type:Boolean,reflect:!0})],Tt.prototype,"required",2);i([l({type:Boolean,attribute:"with-label"})],Tt.prototype,"withLabel",2);i([l({type:Boolean,attribute:"with-hint"})],Tt.prototype,"withHint",2);Tt=i([S("wa-radio-group")],Tt);Tt.disableWarning?.("change-in-update");var Zi=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Un=k`
  :host {
    --symbol-color: var(--wa-color-neutral-on-quiet);
    --symbol-color-active: var(--wa-color-yellow-70);
    --symbol-spacing: 0.125em;

    display: inline-flex;
    border-radius: var(--wa-border-radius-m);
    vertical-align: middle;
    touch-action: none;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .rating {
    position: relative;
    display: inline-flex;
  }

  .symbols {
    display: inline-flex;
    gap: 0.125em;
    position: relative;
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .symbols > * {
    padding: var(--symbol-spacing);
  }

  .symbol-active,
  .partial-filled {
    color: var(--symbol-color-active);
  }

  .partial-symbol-container {
    position: relative;
  }

  .partial-filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .symbol {
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
    pointer-events: none;
  }

  .symbol-hover {
    scale: 1.2;
  }

  .rating-readonly .symbols {
    cursor: default;
  }

  :host([disabled]) .symbol-hover,
  .rating-readonly .symbol-hover {
    scale: none;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  :host([disabled]) .symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .symbol-active {
      color: SelectedItem;
    }
  }
`;var St=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["change"],this.localize=new I(this),this.role="slider",this.hoverValue=0,this.isHovering=!1,this.name=null,this.label="",this.value=0,this.defaultValue=0,this.max=5,this.precision=1,this.readonly=!1,this.required=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="m",this.handleClick=t=>{this.disabled||(this.setRatingValue(this.getValueFromXCoordinate(t.clientX)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},this.handleKeyDown=t=>{let e=this.matches(":dir(ltr)"),o=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight"){let a=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-a),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft"){let a=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+a),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}},this.handlePointerEnter=t=>{this.isHovering=!0,this.hoverValue=this.getValueFromPointerPosition(t)},this.handlePointerMove=t=>{this.hoverValue=this.getValueFromPointerPosition(t)},this.handlePointerLeave=()=>{this.isHovering=!1},this.handlePointerDown=t=>{t.button===0&&(this.isHovering=!0,this.hoverValue=this.getValueFromPointerPosition(t),this.setPointerCapture(t.pointerId),t.preventDefault())},this.handlePointerUp=t=>{this.releasePointerCapture(t.pointerId),this.isHovering=!1}}static get validators(){return[...super.validators,pe()]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-valuenow",String(this.value)),this.setAttribute("aria-valuemin","0"),this.setAttribute("aria-valuemax",String(this.max)),this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.setAttribute("aria-readonly",this.readonly?"true":"false"),this.label&&this.setAttribute("aria-label",this.label),!this.disabled&&!this.readonly?this.tabIndex=0:this.tabIndex=-1,this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointermove",this.handlePointerMove),this.addEventListener("pointerleave",this.handlePointerLeave),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("pointerup",this.handlePointerUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointermove",this.handlePointerMove),this.removeEventListener("pointerleave",this.handlePointerLeave),this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("pointerup",this.handlePointerUp)}updated(t){super.updated(t),t.has("value")&&this.setAttribute("aria-valuenow",String(this.value)),t.has("max")&&this.setAttribute("aria-valuemax",String(this.max)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.tabIndex=this.disabled||this.readonly?-1:0),t.has("readonly")&&(this.setAttribute("aria-readonly",this.readonly?"true":"false"),this.tabIndex=this.disabled||this.readonly?-1:0),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}handleSizeChange(){Y(this.localName,this.size)}getValueFromPointerPosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromXCoordinate(t){let e=this.localize.dir()==="rtl",{left:o,right:r,width:a}=this.getBoundingClientRect(),s=e?this.roundToPrecision((r-t)/a*this.max,this.precision):this.roundToPrecision((t-o)/a*this.max,this.precision);return H(s,0,this.max)}setRatingValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}roundToPrecision(t,e=.5){let o=1/e;return Math.ceil(t*o)/o}handleHoverValueChange(){this.dispatchEvent(new Zi({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Zi({phase:this.isHovering?"start":"end",value:this.hoverValue}))}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let t=this.didSSR&&!this.hasUpdated?this.dir:this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys()),o=0;return this.disabled||this.readonly?o=this.value:o=this.isHovering?this.hoverValue:this.value,b`
      <div
        part="base"
        class=${_({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
      >
        <span class="symbols">
          ${e.map(r=>{let a=o>=r+1;return o>r&&o<r+1?b`
                <span
                  class=${_({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(o)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${lt({clipPath:t?`inset(0 ${(o-r)*100}% 0 0)`:`inset(0 0 0 ${(o-r)*100}%)`})}
                  >
                    ${Je(this.getSymbol(r+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${lt({clipPath:t?`inset(0 0 0 ${100-(o-r)*100}%)`:`inset(0 ${100-(o-r)*100}% 0 0)`})}
                  >
                    ${Je(this.getSymbol(r+1,!0))}
                  </div>
                </span>
              `:b`
              <span
                class=${_({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(o)===r+1,"symbol-active":o>=r+1})}
                role="presentation"
              >
                ${Je(this.getSymbol(r+1,a))}
              </span>
            `})}
        </span>
      </div>
    `}};St.css=[X,Un];i([l({reflect:!0})],St.prototype,"role",2);i([T()],St.prototype,"hoverValue",2);i([T()],St.prototype,"isHovering",2);i([l()],St.prototype,"name",2);i([l()],St.prototype,"label",2);i([l({type:Number})],St.prototype,"value",2);i([l({type:Number,attribute:"default-value"})],St.prototype,"defaultValue",2);i([l({type:Number})],St.prototype,"max",2);i([l({type:Number})],St.prototype,"precision",2);i([l({type:Boolean,reflect:!0})],St.prototype,"readonly",2);i([l({type:Boolean})],St.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],St.prototype,"required",2);i([l()],St.prototype,"getSymbol",2);i([l({reflect:!0})],St.prototype,"size",2);i([x("size")],St.prototype,"handleSizeChange",1);i([x("hoverValue")],St.prototype,"handleHoverValueChange",1);i([x("isHovering")],St.prototype,"handleIsHoveringChange",1);St=i([S("wa-rating")],St);var np=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],De=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1,this.referenceDate=null}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}willUpdate(t){let e=this.referenceDate||new Date,o=new Date(this.date);if(isNaN(o.getMilliseconds()))return this.relativeTime="",this.isoTime="",super.willUpdate(t);let r=o.getTime()-e.getTime(),{unit:a,value:s}=np.find(n=>Math.abs(r)<n.max);if(this.isoTime=o.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/s),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;a==="minute"?n=Xr("second"):a==="hour"?n=Xr("minute"):a==="day"?n=Xr("hour"):n=Xr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),n)}}render(){return this.relativeTime===""&&this.isoTime===""?"":b`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};i([T()],De.prototype,"isoTime",2);i([T()],De.prototype,"relativeTime",2);i([l()],De.prototype,"date",2);i([l()],De.prototype,"format",2);i([l()],De.prototype,"numeric",2);i([l({type:Boolean})],De.prototype,"sync",2);i([T()],De.prototype,"referenceDate",2);De=i([S("wa-relative-time")],De);function Xr(t){let o={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return o-Date.now()%o}var jn=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Kn=k`
  :host {
    display: contents;
  }
`;var Vo=class extends L{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new jn({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(o=>this.resizeObserver.unobserve(o)),this.observedElements=[],e.forEach(o=>{this.resizeObserver.observe(o),this.observedElements.push(o)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return b` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vo.css=Kn;i([l({type:Boolean,reflect:!0})],Vo.prototype,"disabled",2);i([x("disabled",{waitUntilFirstUpdate:!0})],Vo.prototype,"handleDisabledChange",1);Vo=i([S("wa-resize-observer")],Vo);var Yn=k`
  :host {
    --shadow-color: var(--wa-color-surface-default);
    --shadow-size: 2rem;

    /* private (defined dynamically) */
    --start-shadow-opacity: 0;
    --end-shadow-opacity: 0;

    display: block;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #content {
    z-index: 1; /* below shadows */
    border-radius: inherit;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
    -webkit-text-size-adjust: 100%;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  :host([without-scrollbar]) #content {
    scrollbar-width: none;
  }

  :host([orientation='horizontal']) #content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  :host([orientation='vertical']) #content {
    flex: 1 1 auto;
    min-height: 0; /* This is crucial for flex children to respect overflow */
    overflow-x: hidden;
    overflow-y: auto;
  }

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  /* Horizontal shadows */
  :host([orientation='horizontal']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      &:dir(ltr) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }
    }

    #end-shadow {
      &:dir(ltr) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }
    }
  }

  /* Vertical shadows */
  :host([orientation='vertical']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      top: 0;
      background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
    }

    #end-shadow {
      bottom: 0;
      background: linear-gradient(to top, var(--shadow-color), transparent 100%);
    }
  }
`;var Ie=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.resizeObserver=null,this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){let t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),r=Math.ceil(this.content.scrollWidth)-t;this.canScroll=r>0;let a=Math.min(1,e/(r*.05)),s=Math.min(1,(r-e)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}else{let t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),r=Math.ceil(this.content.scrollHeight)-t;this.canScroll=r>0;let a=Math.min(1,e/(r*.05)),s=Math.min(1,(r-e)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}}render(){return b`
      ${this.withoutShadow?"":b`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ie.css=[Yn];i([C("#content")],Ie.prototype,"content",2);i([T()],Ie.prototype,"canScroll",2);i([l({reflect:!0})],Ie.prototype,"orientation",2);i([l({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Ie.prototype,"withoutScrollbar",2);i([l({attribute:"without-shadow",type:Boolean,reflect:!0})],Ie.prototype,"withoutShadow",2);i([vo({passive:!0})],Ie.prototype,"updateScroll",1);Ie=i([S("wa-scroller")],Ie);var Xn=k`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;var et=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new rt(this,"hint","label"),this.localize=new I(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>b`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,o=e.closest('[part~="clear-button"]')!==null,r=e.closest("wa-button")!==null;if(!(o||r)){if(t.key==="Escape"&&this.open&&At(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let a=this.getAllOptions(),s=a.indexOf(this.currentOption),n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>a.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=a.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=a.length-1),this.setCurrentOption(a[n])}if(t.key?.length===1||t.key==="Backspace"){let a=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let s of a)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){let t=[pe({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(t,e){return t==null&&e==null?!0:t==null||e==null||t.length!==e.length?!1:t.every((o,r)=>o===e[r])}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]);let o=this._value;this._value=t??null,this.rawValuesEqual(o,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),this.optionValues=new Set(this.getAllOptions().filter(o=>!o.disabled).map(o=>o.value));let e=t;return t!=null&&(e=t.filter(o=>this.optionValues.has(o)),e=this.multiple?e:e[0],e=e??null),e}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(o=>o.hasAttribute("selected")||o.defaultSelected);if(e.length>0){let o=e.map(r=>r.value);this._defaultValue=this.multiple?o:o[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ft(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Lt(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){let o=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="wa-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Ao),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let o=t.target.closest("wa-option");o&&!o.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let t=this.getAllOptions();this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);let o=t.filter(r=>e.includes(r.value));this.setSelectedOptions(o)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let o=e;if(!o){let r=t.target.closest("wa-tag[data-value]");if(r){let a=r.dataset.value;o=this.selectedOptions.find(s=>s.value===a)}}o&&(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}))}setSelectedOptions(t){let e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(r=>{o.includes(r)||(r.selected=!1)}),o.length&&o.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){let c=this.defaultValue,h=Array.isArray(c)?c:[c];return n.hasAttribute("selected")||n.defaultSelected||n.selected||h?.includes(n.value)}return n.selected}),o=new Set(e.map(n=>n.value));for(let n of this.selectionOrder.keys())o.has(n)||this.selectionOrder.delete(n);let a=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let n of e)this.selectionOrder.has(n.value)||this.selectionOrder.set(n.value,a++);this.selectedOptions=e.sort((n,c)=>{let h=this.selectionOrder.get(n.value)??0,u=this.selectionOrder.get(c.value)??0;return h-u});let s=new Set(this.selectedOptions.map(n=>n.value));if(s.size>0||this._value){let n=this._value;if(this._value==null){let c=this.defaultValue??[];this._value=Array.isArray(c)?c:[c]}this._value=this._value?.filter(c=>!this.optionValues?.has(c))??null,this._value?.unshift(...s),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let o=this.getTag(t,e);return o?typeof o=="string"?Je(o):o:null}else if(e===this.maxOptionsVisible)return b`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `;return null})}updated(t){super.updated(t),(t.has("value")||t.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=t.filter(r=>e.includes(r.value));this.setSelectedOptions(o),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await J(this.popup.popup,"show"),this.currentOption&&tr(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new qt)}else{let t=new Vt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await J(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Wt)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,yt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,yt(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e,a=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return b`
      <div
        part="form-control"
        class=${_({"form-control":!0,"form-control-has-label":o})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${_({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${_({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?b`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${a?b`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${_({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};et.css=[Xn,bt,X];i([C(".select")],et.prototype,"popup",2);i([C(".combobox")],et.prototype,"combobox",2);i([C(".display-input")],et.prototype,"displayInput",2);i([C(".value-input")],et.prototype,"valueInput",2);i([C(".listbox")],et.prototype,"listbox",2);i([T()],et.prototype,"displayLabel",2);i([T()],et.prototype,"currentOption",2);i([T()],et.prototype,"selectedOptions",2);i([l({reflect:!0})],et.prototype,"name",2);i([l({attribute:!1})],et.prototype,"defaultValue",1);i([l({attribute:"value",reflect:!1})],et.prototype,"value",1);i([l({reflect:!0})],et.prototype,"size",2);i([x("size")],et.prototype,"handleSizeChange",1);i([l()],et.prototype,"placeholder",2);i([l({type:Boolean,reflect:!0})],et.prototype,"multiple",2);i([l({attribute:"max-options-visible",type:Number})],et.prototype,"maxOptionsVisible",2);i([l({type:Boolean})],et.prototype,"disabled",2);i([l({attribute:"with-clear",type:Boolean})],et.prototype,"withClear",2);i([l({type:Boolean,reflect:!0})],et.prototype,"open",2);i([l({reflect:!0})],et.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],et.prototype,"pill",2);i([l()],et.prototype,"label",2);i([l({reflect:!0})],et.prototype,"placement",2);i([l({attribute:"hint"})],et.prototype,"hint",2);i([l({attribute:"with-label",type:Boolean})],et.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],et.prototype,"withHint",2);i([l({type:Boolean,reflect:!0})],et.prototype,"required",2);i([l({attribute:!1})],et.prototype,"getTag",2);i([x("disabled",{waitUntilFirstUpdate:!0})],et.prototype,"handleDisabledChange",1);i([x("value",{waitUntilFirstUpdate:!0})],et.prototype,"handleValueChange",1);i([x("open",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpenChange",1);et=i([S("wa-select")],et);et.disableWarning?.("change-in-update");var Gn=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var Zn=k`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var Re=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){Y(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Gn)}render(){return b`
      <slot part="content" class="content"></slot>

      ${this.withRemove?b`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};Re.css=[Zn,Ne,X];i([l({reflect:!0})],Re.prototype,"variant",2);i([l({reflect:!0})],Re.prototype,"appearance",2);i([l({reflect:!0})],Re.prototype,"size",2);i([x("size")],Re.prototype,"handleSizeChange",1);i([l({type:Boolean,reflect:!0})],Re.prototype,"pill",2);i([l({attribute:"with-remove",type:Boolean})],Re.prototype,"withRemove",2);Re=i([S("wa-tag")],Re);var Qn=k`
  :host {
    --color: var(--wa-color-neutral-fill-normal);
    --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--wa-border-radius-pill);
  }

  :host([effect='sheen']) .indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  :host([effect='pulse']) .indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var dr=class extends L{constructor(){super(...arguments),this.effect="none"}render(){return b` <div part="indicator" class="indicator"></div> `}};dr.css=Qn;i([l({reflect:!0})],dr.prototype,"effect",2);dr=i([S("wa-skeleton")],dr);var Jn=k`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;var lp=()=>({observedAttributes:["min","max","step"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},o=(r,a,s,n)=>{if(typeof document>"u")return"";let c=document.createElement("input");return c.type="range",c.min=String(a),c.max=String(s),c.step=String(n),c.value=String(r),c.checkValidity(),c.validationMessage};if(t.isRange){let r=t.minValue,a=t.maxValue;if(r<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(r,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(a>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1){let s=(r-t.min)%t.step!==0,n=(a-t.min)%t.step!==0;if(s||n){e.isValid=!1,e.invalidKeys.push("stepMismatch");let c=s?r:a;return e.message=o(c,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}}}else{let r=t.value;if(r<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(r,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(r>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(r,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1&&(r-t.min)%t.step!==0)return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=o(r,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}return e}}),Q=class extends W{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new rt(this,"hint","label"),this.localize=new I(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,lp()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){let e=this._value??this.minValue??0;return H(e,this.min,this.max)}let t=this._value??this.defaultValue;return H(t,this.min,this.max)}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}handleSizeChange(){Y(this.localName,this.size)}firstUpdated(){this.isRange?(this.draggableThumbMin=new Ho(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Ho(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Ho(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{let o=this.getValueFromCoordinates(t,e),r=Math.abs(o-this.minValue),a=Math.abs(o-this.maxValue);if(r===a)if(o>this.maxValue)this.activeThumb="max";else if(o<this.minValue)this.activeThumb="min";else{let s=this.localize.dir()==="rtl",n=this.orientation==="vertical",c=n?e:t,h=this.lastTrackPosition||c;this.lastTrackPosition=c;let u=c>h!==s&&!n||c<h&&n;this.activeThumb=u?"max":"min"}else this.activeThumb=r<=a?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Ho(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(t){this.isRange&&(t.has("minValue")||t.has("maxValue")||t.has("min")||t.has("max"))&&(this.minValue=H(this.minValue,this.min,this.maxValue),this.maxValue=H(this.maxValue,this.minValue,this.max)),super.willUpdate(t)}updated(t){if(this.isRange&&(t.has("minValue")||t.has("maxValue"))&&this.updateFormValue(),t.has("disabled")||t.has("readonly")){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){let e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,o=Number(this.step),r=Number(this.min),a=Number(this.max);return t=Math.round(t/o)*o,t=H(t,r,a),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){let o=this.localize.dir()==="rtl",r=this.orientation==="vertical",{top:a,right:s,bottom:n,left:c,height:h,width:u}=this.trackBoundingClientRect,p=r?e:t,g=r?{start:a,end:n,size:h}:{start:c,end:s,size:u},m=(r||o?g.end-p:p-g.start)/g.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*m)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){let e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){let e=this.localize.dir()==="rtl",o=t.target;if(this.disabled||this.readonly||this.isRange&&(o===this.thumbMin?this.activeThumb="min":o===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;let r=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value,a=r;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),a=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),a=this.clampAndRoundToStep(r-this.step);break;case"Home":t.preventDefault(),a=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),a=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();let s=Math.max(r+(this.max-this.min)/10,r+this.step);a=this.clampAndRoundToStep(s);break;case"PageDown":t.preventDefault();let n=Math.min(r-(this.max-this.min)/10,r-this.step);a=this.clampAndRoundToStep(n);break;case"Enter":$o(t,this);return}a!==r&&(this.isRange?(this.activeThumb==="min"?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=H(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){let o=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,o){let r=this.getValueFromCoordinates(t,e),a=o==="min"?this.minValue:this.maxValue;o==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),a!==(o==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(t){if(this.isRange){let e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e,e);return}super.updateFormValue(t)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange){for(let t of er())if(t===this.thumbMin){this.thumbMin.blur();break}else if(t===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){let t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=H(t,this.min,this.maxValue),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){let t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=H(t,this.minValue,this.max),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e,a=this.hasSlotController.test("reference"),s=_({xs:this.size==="xs",s:this.size==="s"||this.size==="small",m:this.size==="m"||this.size==="medium",l:this.size==="l"||this.size==="large",xl:this.size==="xl",small:this.size==="small"||this.size==="s",medium:this.size==="medium"||this.size==="m",large:this.size==="large"||this.size==="l",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),n=[];if(this.withMarkers)for(let f=this.min;f<=this.max;f+=this.step)n.push(this.getPercentageFromValue(f));let c=b`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${_({vh:!o,"has-label":o})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,h=b`
      <div
        id="hint"
        part="hint"
        class=${_({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,u=this.withMarkers?b`
          <div id="markers" part="markers">
            ${n.map(f=>b`<span part="marker" class="marker" style=${lt({"--position":`${f}%`})}></span>`)}
          </div>
        `:"",p=a?b`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",g=(f,m)=>this.withTooltip?b`
            <wa-tooltip
              id=${`tooltip${f!=="thumb"?"-"+f:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${f}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(m):this.localize.number(m)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){let f=H(this.getPercentageFromValue(this.minValue),0,100),m=H(this.getPercentageFromValue(this.maxValue),0,100);return b`
        ${c}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${lt({"--start":`${Math.min(f,m)}%`,"--end":`${Math.max(f,m)}%`})}
            ></div>

            ${u}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${lt({"--position":`${f}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${lt({"--position":`${m}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${p} ${h}
        </div>

        ${g("thumb-min",this.minValue)} ${g("thumb-max",this.maxValue)}
      `}else{let f=H(this.getPercentageFromValue(this.value),0,100),m=H(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return b`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${s}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${lt({"--start":`${m}%`,"--end":`${f}%`})}
            ></div>

            ${u}
            <span id="thumb" part="thumb" style=${lt({"--position":`${f}%`})}></span>
          </div>

          ${p} ${h}
        </div>

        ${g("thumb",this.value)}
      `}}};Q.formAssociated=!0;Q.observeSlots=!0;Q.css=[X,bt,Jn];i([C("#slider")],Q.prototype,"slider",2);i([C("#thumb")],Q.prototype,"thumb",2);i([C("#thumb-min")],Q.prototype,"thumbMin",2);i([C("#thumb-max")],Q.prototype,"thumbMax",2);i([C("#track")],Q.prototype,"track",2);i([C("#tooltip")],Q.prototype,"tooltip",2);i([l()],Q.prototype,"label",2);i([l({attribute:"hint"})],Q.prototype,"hint",2);i([l({reflect:!0})],Q.prototype,"name",2);i([l({type:Number,attribute:"min-value"})],Q.prototype,"minValue",2);i([l({type:Number,attribute:"max-value"})],Q.prototype,"maxValue",2);i([l({attribute:"value",reflect:!0,type:Number})],Q.prototype,"defaultValue",2);i([T()],Q.prototype,"value",1);i([l({type:Boolean,reflect:!0})],Q.prototype,"range",2);i([l({type:Boolean})],Q.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);i([l({reflect:!0})],Q.prototype,"orientation",2);i([l({reflect:!0})],Q.prototype,"size",2);i([x("size")],Q.prototype,"handleSizeChange",1);i([l({attribute:"indicator-offset",type:Number})],Q.prototype,"indicatorOffset",2);i([l({type:Number})],Q.prototype,"min",2);i([l({type:Number})],Q.prototype,"max",2);i([l({type:Number})],Q.prototype,"step",2);i([l({type:Boolean})],Q.prototype,"autofocus",2);i([l({attribute:"tooltip-distance",type:Number})],Q.prototype,"tooltipDistance",2);i([l({attribute:"tooltip-placement",reflect:!0})],Q.prototype,"tooltipPlacement",2);i([l({attribute:"with-markers",type:Boolean})],Q.prototype,"withMarkers",2);i([l({attribute:"with-tooltip",type:Boolean})],Q.prototype,"withTooltip",2);i([l({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);i([l({attribute:!1})],Q.prototype,"valueFormatter",2);Q=i([S("wa-slider")],Q);var tl=k`
  :host {
    --divider-width: 0.25rem;
    --divider-hit-area: 0.75rem;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--wa-color-neutral-border-normal);
    color: var(--wa-color-neutral-on-normal);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    outline: var(--wa-focus-ring);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([orientation='vertical'], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([orientation='vertical'])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host([orientation='vertical']:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([orientation='vertical']) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var Xt=class extends L{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new I(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e=this.didSSR&&!this.hasUpdated?this.dir==="rtl":this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Ke(this,{onMove:(o,r)=>{let a=this.orientation==="vertical"?r:o;this.primary==="end"&&(a=this.size-a),this.snap&&this.snap.split(" ").forEach(n=>{let c;n.endsWith("%")?c=this.size*(parseFloat(n)/100):c=parseFloat(n),e&&this.orientation==="horizontal"&&(c=this.size-c),a>=c-this.snapThreshold&&a<=c+this.snapThreshold&&(a=c)}),this.position=H(this.pixelsToPercentage(a),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,o=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=o),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=o),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let r=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=H(e,0,100)}}handleResize(t){let{width:e,height:o}=t[0].contentRect;if(this.size=this.orientation==="vertical"?o:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary){let r=this.pixelsToPercentage(this.cachedPositionInPixels);this.position!==r&&(this.position=r)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position);let t=this.percentageToPixels(this.position);this.positionInPixels!==t&&(this.positionInPixels=t),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new $r)}handlePositionInPixelsChange(){let t=this.pixelsToPercentage(this.positionInPixels);this.position!==t&&(this.position=t)}handleVerticalChange(){this.detectSize()}updateStyles(){let t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",o=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,a="auto";this.primary==="end"?o&&this.orientation==="horizontal"?this.setStyle(t,`${r} var(--divider-width) ${a}`):this.setStyle(t,`${a} var(--divider-width) ${r}`):o&&this.orientation==="horizontal"?this.setStyle(t,`${a} var(--divider-width) ${r}`):this.setStyle(t,`${r} var(--divider-width) ${a}`),this.setStyle(e,"unset")}willUpdate(t){this.style||this.updateStyles(),super.willUpdate(t)}updated(t){super.updated(t)}render(){return this.style&&this.updateStyles(),b`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${D(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Xt.css=tl;i([C(".divider")],Xt.prototype,"divider",2);i([l({type:Number,reflect:!0})],Xt.prototype,"position",2);i([l({attribute:"position-in-pixels",type:Number})],Xt.prototype,"positionInPixels",2);i([l({reflect:!0})],Xt.prototype,"orientation",2);i([l({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);i([l()],Xt.prototype,"primary",2);i([l()],Xt.prototype,"snap",2);i([l({type:Number,attribute:"snap-threshold"})],Xt.prototype,"snapThreshold",2);i([x("position")],Xt.prototype,"handlePositionChange",1);i([x("positionInPixels")],Xt.prototype,"handlePositionInPixelsChange",1);i([x("vertical")],Xt.prototype,"handleVerticalChange",1);Xt=i([S("wa-split-panel")],Xt);var el=k`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ .switch .thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`;var zt=class extends W{constructor(){super(...arguments),this.hasSlotController=new rt(this,"hint"),this.localize=new I(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Gt()]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Y(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){let e=this.localize.dir()==="rtl";t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let t=this.hasSlotController.test("hint","withHint"),e=this.hint?!0:!!t,o=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,r=this.didSSR&&!this.hasUpdated?null:Pt(this.checked);return b`
      <label
        part="base"
        class=${_({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${D(this.name)}
          value=${D(this.value)}
          .checked=${D(r)}
          ?checked=${o}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${_({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};zt.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};zt.css=[bt,X,el];i([C('input[type="checkbox"]')],zt.prototype,"input",2);i([l()],zt.prototype,"title",2);i([l({reflect:!0})],zt.prototype,"name",2);i([l({reflect:!0})],zt.prototype,"value",1);i([l({reflect:!0})],zt.prototype,"size",2);i([x("size")],zt.prototype,"handleSizeChange",1);i([l({type:Boolean})],zt.prototype,"disabled",2);i([l({type:Boolean,attribute:!1})],zt.prototype,"checked",1);i([l({type:Boolean,attribute:"checked",reflect:!0})],zt.prototype,"defaultChecked",2);i([l({type:Boolean,reflect:!0})],zt.prototype,"required",2);i([l({attribute:"hint"})],zt.prototype,"hint",2);i([l({attribute:"with-hint",type:Boolean})],zt.prototype,"withHint",2);i([x(["checked","defaultChecked"])],zt.prototype,"handleStateChange",1);i([x("disabled",{waitUntilFirstUpdate:!0})],zt.prototype,"handleDisabledChange",1);zt=i([S("wa-switch")],zt);zt.disableWarning?.("change-in-update");var ol=k`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var cp=0,ae=class extends L{constructor(){super(...arguments),this.attrId=++cp,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot="nav",this.role="tab"}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,b`
      <div
        part="base"
        class=${_({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};ae.css=ol;i([C(".tab")],ae.prototype,"tab",2);i([l({reflect:!0})],ae.prototype,"panel",2);i([l({type:Boolean,reflect:!0})],ae.prototype,"active",2);i([l({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);i([l({type:Number,reflect:!0})],ae.prototype,"tabIndex",2);i([l({reflect:!0})],ae.prototype,"slot",2);i([l({reflect:!0})],ae.prototype,"role",2);i([x("active")],ae.prototype,"handleActiveChange",1);i([x("disabled")],ae.prototype,"handleDisabledChange",1);ae=i([S("wa-tab")],ae);var rl=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var il=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var al=k`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;var Jt=class extends L{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new I(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),!!1&&(this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels());let e=t.filter(o=>o.target.closest("wa-tab-group")===this);if(e.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(o=>o.attributeName==="active")){let r=e.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="wa-tab").map(a=>a.target).find(a=>a.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,o)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let r=this.tabs.find(a=>a.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});o.unobserve(e[0].target)}}).observe(this.tabGroup)}))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let o=t.target.closest("wa-tab");o?.closest("wa-tab-group")===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){let o=t.target.closest("wa-tab");if(o?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let a=this.tabs.find(c=>c.matches(":focus")),s=this.localize.dir()==="rtl",n=null;if(a?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let c=this.tabs.findIndex(h=>h===a);n=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let c=this.tabs.findIndex(h=>h===a);n=this.findNextFocusableTab(c,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===n?0:-1}),["top","bottom"].includes(this.placement)&&tr(n,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let o=null,r=e==="forward"?1:-1,a=t+r;for(;t<this.tabs.length;){if(o=this.tabs[a]||null,o===null){e==="forward"?o=this.focusableTabs[0]:o=this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;a+=r}return o}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){let o=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>r.active=r.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&tr(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.dispatchEvent(new rl({name:o.panel})),this.dispatchEvent(new il({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return b`
      <div
        part="base"
        class=${_({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?b`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${t?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?b`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${t?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <div part="body" class="body"><slot @slotchange=${this.syncTabsAndPanels}></slot></div>
      </div>
    `}};Jt.css=al;i([C(".tab-group")],Jt.prototype,"tabGroup",2);i([C(".body slot")],Jt.prototype,"defaultSlot",2);i([C(".nav")],Jt.prototype,"nav",2);i([T()],Jt.prototype,"hasScrollControls",2);i([l({reflect:!0})],Jt.prototype,"active",2);i([l()],Jt.prototype,"placement",2);i([l()],Jt.prototype,"activation",2);i([l({attribute:"without-scroll-controls",type:Boolean})],Jt.prototype,"withoutScrollControls",2);i([x("active")],Jt.prototype,"updateActiveTab",1);i([x("withoutScrollControls",{waitUntilFirstUpdate:!0})],Jt.prototype,"updateScrollControls",1);Jt=i([S("wa-tab-group")],Jt);var sl=k`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var hp=0,to=class extends L{constructor(){super(...arguments),this.attrId=++hp,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1,this.role="tabpanel"}connectedCallback(){super.connectedCallback(),this.id=(this.id||"").length>0?this.id:this.componentId}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return b`
      <slot
        part="base"
        class=${_({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};to.css=sl;i([l({reflect:!0})],to.prototype,"name",2);i([l({type:Boolean,reflect:!0})],to.prototype,"active",2);i([l({reflect:!0})],to.prototype,"role",2);i([x("active")],to.prototype,"handleActiveChange",1);to=i([S("wa-tab-panel")],to);var nl=k`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled textareas */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: inherit;
    scroll-padding-block: var(--wa-form-control-padding-block);
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /*
   * Footer (hint + character count)
   */

  .footer {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  .footer.has-count [part='hint'] {
    flex: 1 1 auto;
    min-width: 0;
  }

  .count {
    flex: 0 0 auto;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    margin-inline-start: auto;
  }
`;var G=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new rt(this,"hint","label"),this.localize=new I(this),this.announcedCountText="",this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="m",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,Gt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value){let t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}updateResizeObserver(){let t=this.resize!=="none";this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),t&&this.input&&(this.resize==="auto"?(this.resizeObserver=new ResizeObserver(e=>{let o=e[0]?.contentRect.width??0;o!==this.lastObservedWidth&&(this.lastObservedWidth=o,requestAnimationFrame(()=>this.setTextareaDimensions()))}),this.resizeObserver.observe(this)):(this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.resizeObserver.observe(this.input)))}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout(()=>{let t=(this.value??"").length;this.announcedCountText=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-t):this.localize.term("numCharacters",t)},1e3)}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto";let t=this.input.scrollHeight;this.input.style.height=`${t}px`,this.sizeAdjuster.style.height=`${t}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){let t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){let t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&(this.setTextareaDimensions(),this.updateResizeObserver()),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){let a=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,a,s,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e,a=(this.value??"").length,s=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-a):this.localize.term("numCharacters",a);return b`
      <label
        part="form-control-label label"
        class=${_({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${D(this.name)}
          .value=${Pt(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${D(this.placeholder)}
          rows=${D(this.rows)}
          minlength=${D(this.minlength)}
          maxlength=${D(this.maxlength)}
          autocapitalize=${D(this.autocapitalize)}
          autocorrect=${D(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${D(this.spellcheck)}
          enterkeyhint=${D(this.enterkeyhint)}
          inputmode=${D(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <div
        class=${_({footer:!0,"has-count":this.withCount})}
      >
        <slot
          id="hint"
          name="hint"
          part="hint"
          aria-hidden=${r?"false":"true"}
          class=${_({"has-slotted":r})}
          >${this.hint}</slot
        >

        ${this.withCount?b`
              <div part="count" class="count" aria-hidden="true">${s}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:""}
      </div>
    `}};G.css=[nl,bt,X,Ye];i([T()],G.prototype,"announcedCountText",2);i([C(".control")],G.prototype,"input",2);i([C('[part~="base"]')],G.prototype,"base",2);i([C(".size-adjuster")],G.prototype,"sizeAdjuster",2);i([l()],G.prototype,"title",2);i([l({reflect:!0})],G.prototype,"name",2);i([T()],G.prototype,"value",1);i([l({attribute:"value",reflect:!0})],G.prototype,"defaultValue",2);i([l({reflect:!0})],G.prototype,"size",2);i([x("size")],G.prototype,"handleSizeChange",1);i([l({reflect:!0})],G.prototype,"appearance",2);i([l()],G.prototype,"label",2);i([l({attribute:"hint"})],G.prototype,"hint",2);i([l()],G.prototype,"placeholder",2);i([l({type:Number})],G.prototype,"rows",2);i([l({reflect:!0})],G.prototype,"resize",2);i([l({type:Boolean})],G.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],G.prototype,"readonly",2);i([l({type:Boolean,reflect:!0})],G.prototype,"required",2);i([l({type:Number})],G.prototype,"minlength",2);i([l({type:Number})],G.prototype,"maxlength",2);i([l()],G.prototype,"autocapitalize",2);i([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],G.prototype,"autocorrect",2);i([l()],G.prototype,"autocomplete",2);i([l({type:Boolean})],G.prototype,"autofocus",2);i([l()],G.prototype,"enterkeyhint",2);i([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],G.prototype,"spellcheck",2);i([l()],G.prototype,"inputmode",2);i([l({attribute:"with-label",type:Boolean})],G.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],G.prototype,"withHint",2);i([l({attribute:"with-count",type:Boolean,reflect:!0})],G.prototype,"withCount",2);i([x("rows",{waitUntilFirstUpdate:!0})],G.prototype,"handleRowsChange",1);i([x("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);G=i([S("wa-textarea")],G);G.disableWarning?.("change-in-update");var Qi=new Map;function ll(t,e){let o=`${t||"en"}|${e.hour12?12:24}|${e.withSeconds?1:0}`,r=Qi.get(o);if(r)return r;let a=new Intl.DateTimeFormat(t||"en",{hour:"2-digit",minute:"2-digit",second:e.withSeconds?"2-digit":void 0,hour12:e.hour12,calendar:"gregory",numberingSystem:"latn"}),s=new Date(2026,0,1,13,45,30),n=a.formatToParts(s),c=[],h=[];for(let g of n)g.type==="hour"?(c.push({kind:"segment",field:"hour"}),h.push("hour")):g.type==="minute"?(c.push({kind:"segment",field:"minute"}),h.push("minute")):g.type==="second"?(c.push({kind:"segment",field:"second"}),h.push("second")):g.type==="dayPeriod"?(c.push({kind:"segment",field:"dayPeriod"}),h.push("dayPeriod")):g.type==="literal"&&c.push({kind:"literal",text:g.value});let u=2+(e.withSeconds?1:0)+(e.hour12?1:0);if(h.length!==u){let g=[{kind:"segment",field:"hour"},{kind:"literal",text:":"},{kind:"segment",field:"minute"}],f=["hour","minute"];e.withSeconds&&(g.push({kind:"literal",text:":"}),g.push({kind:"segment",field:"second"}),f.push("second")),e.hour12&&(g.push({kind:"literal",text:" "}),g.push({kind:"segment",field:"dayPeriod"}),f.push("dayPeriod"));let m={tokens:g,order:f};return Qi.set(o,m),m}let p={tokens:c,order:h};return Qi.set(o,p),p}function cl(t){try{return new Intl.DateTimeFormat(t||"en",{hour:"numeric"}).resolvedOptions().hour12??!1}catch{return!1}}function Zr(t,e){try{let o=new Intl.DateTimeFormat(t||"en",{hour:"numeric",hour12:!0}),r=new Date(2026,0,1,e===0?9:15);return o.formatToParts(r).find(n=>n.type==="dayPeriod")?.value||(e===0?"AM":"PM")}catch{return e===0?"AM":"PM"}}function hl(t,e){return t==="hour"?e?{min:1,max:12}:{min:0,max:23}:t==="minute"||t==="second"?{min:0,max:59}:{min:0,max:1}}function dp(t,e,o,r,a=new Date){let s={...t},n=t[e];if(e==="dayPeriod"){let g=n??(a.getHours()<12?0:1);return s.dayPeriod=g===0?1:0,s}let{min:c,max:h}=hl(e,r);if(n==null){if(e==="hour"){let g=a.getHours();s.hour=r?g%12||12:g}else e==="minute"?s.minute=a.getMinutes():s.second=a.getSeconds();return s}let u=h-c+1,p=((n-c+o)%u+u)%u+c;return e==="hour"?s.hour=p:e==="minute"?s.minute=p:s.second=p,s}function pp(t,e,o,r){return/^[0-9]$/.test(o)?t==="dayPeriod"?{value:Ji(e),buffer:e,advance:!1}:t==="hour"?r?Gr(e,o,1,12):Gr(e,o,0,23):Gr(e,o,0,59):{value:Ji(e),buffer:e,advance:!1}}function Gr(t,e,o,r){let a=Number(e);if(t==="")return a===0&&o===0?{value:0,buffer:"0",advance:!1}:a===0?{value:null,buffer:"0",advance:!1}:a*10>r?{value:up(a,o,r),buffer:"",advance:!0}:{value:a,buffer:e,advance:!1};let s=Number(t+e);return s>=o&&s<=r?{value:s,buffer:"",advance:!0}:t==="0"&&a===0?{value:o===0?0:null,buffer:"0",advance:!1}:Gr("",e,o,r)}function up(t,e,o){return Math.min(o,Math.max(e,t))}function Ji(t){if(!t)return null;let e=Number(t);return Number.isFinite(e)?e:null}function dl(t){return t==="a"||t==="A"?0:t==="p"||t==="P"?1:null}function pl(t,e,o,r,a){return t==="dayPeriod"?e==null?r:Zr(a,e):o?o.padStart(2,"0"):e==null?r:String(e).padStart(2,"0")}function mp(t,e){return!(t.hour==null||t.minute==null||e.withSeconds&&t.second==null||e.hour12&&t.dayPeriod==null)}function ul(t){return t.hour==null&&t.minute==null&&t.second==null&&t.dayPeriod==null}function ml(t,e){if(!mp(t,e))return"";let o=t.hour;if(e.hour12){let h=t.dayPeriod;o=o===12?h===0?0:12:h===1?o+12:o}if(o<0||o>23)return"";let r=t.minute;if(r<0||r>59)return"";let a=String(o).padStart(2,"0"),s=String(r).padStart(2,"0");if(!e.withSeconds)return`${a}:${s}`;let n=t.second;if(n<0||n>59)return"";let c=String(n).padStart(2,"0");return`${a}:${s}:${c}`}function ta(t,e){let o={hour:null,minute:null,second:null,dayPeriod:null};if(!t)return o;let r=/^(\d{1,2}):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/.exec(t);if(!r)return o;let a=Number(r[1]),s=Number(r[2]),n=r[3]!=null?Math.trunc(Number(r[3])):null;if(!Number.isFinite(a)||!Number.isFinite(s)||a<0||a>23||s<0||s>59||n!=null&&(n<0||n>59))return o;let c,h=null;return e.hour12?(h=a>=12?1:0,c=a%12||12):c=a,{hour:c,minute:s,second:e.withSeconds?n??0:null,dayPeriod:e.hour12?h:null}}function fl(t){return t==="any"?!0:!Number.isFinite(t)||t<=0?!1:t<60||t%60!==0}function bl(t){let e=t.now??(()=>new Date);return{typeDigit:(o,r,a,s)=>{let n=pp(r,a,s,t.hour12()),h={...t.getSegments(o),[r]:n.value};return t.setSegments(o,h),n},step:(o,r,a)=>{let s=dp(t.getSegments(o),r,a,t.hour12(),e());return t.setSegments(o,s),{value:s[r]}},bounds:(o,r)=>hl(r,t.hour12()),commitBuffer:(o,r,a)=>{let s=Ji(a),n=t.getSegments(o);return t.setSegments(o,{...n,[r]:s}),s},clear:(o,r)=>{let a=t.getSegments(o);return a[r]==null?!1:(t.setSegments(o,{...a,[r]:null}),!0)}}}var gl=k`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    --column-item-height: 2.25em;
    --column-width: 3em;
  }

  :host(:state(disabled)) {
    cursor: not-allowed;
  }

  /* Popup */
  .time-input-popup {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Popup body — bordered card with the column listboxes. */
  .popup-body {
    display: inline-flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    font-size: inherit;
    padding: var(--wa-space-2xs);
  }

  .columns {
    display: inline-flex;
    gap: var(--wa-space-2xs);
    align-items: stretch;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: var(--column-width);
    max-height: calc(var(--column-item-height) * 7);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    /* Don't let column scroll bubble to the page. */
    overscroll-behavior: contain;
    outline: none;
    border-radius: var(--wa-border-radius-s);
  }

  .column::-webkit-scrollbar {
    display: none;
  }

  .column:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  .column-item {
    flex: 0 0 var(--column-item-height);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    scroll-snap-align: center;
    border-radius: var(--wa-border-radius-s);
    color: var(--wa-color-text-normal);
    background: transparent;
    border: none;
    padding: 0;
    user-select: none;
    transition:
      background-color var(--wa-transition-fast),
      color var(--wa-transition-fast);
  }

  .column-item:hover:not([aria-disabled='true']):not([aria-selected='true']) {
    background-color: var(--wa-color-neutral-fill-quiet);
  }

  .column-item[aria-selected='true'] {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
  }

  .column-item[aria-disabled='true'] {
    color: var(--wa-color-text-quiet);
    cursor: not-allowed;
  }

  /* Footer / Now button */
  .popup-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--wa-space-xs);
    margin-top: var(--wa-space-xs);
    padding-top: var(--wa-space-xs);
    border-top: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  }

  .now-button {
    appearance: none;
    background: transparent;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-s);
    padding: var(--wa-space-2xs) var(--wa-space-s);
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);
  }

  .now-button:hover {
    background-color: var(--wa-color-neutral-fill-quiet);
  }

  .now-button:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  /* Input wrapper */
  .input-wrapper {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    gap: 0.25em;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: text;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([pill]) .input-wrapper {
    border-radius: var(--wa-border-radius-pill);
  }

  :host(:focus-within) .input-wrapper {
    outline-color: var(--wa-color-focus);
  }

  :host(:state(disabled)) .input-wrapper {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Appearance variants */
  :host([appearance='filled']) .input-wrapper,
  :host([appearance='filled-outlined']) .input-wrapper {
    background-color: var(--wa-color-surface-lowered);
  }

  :host([appearance='filled']) .input-wrapper {
    border-color: transparent;
  }

  /* Segmented input — same patterns as wa-date-input. */
  .segments {
    flex: 1;
    min-width: 0;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    color: inherit;
    font: inherit;
    font-variant-numeric: tabular-nums;
    caret-color: transparent;
  }

  .segment {
    display: inline-block;
    padding: 0 0.15em;
    margin: 0;
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    font: inherit;
    text-align: center;
    cursor: text;
    user-select: none;
    white-space: nowrap;
    border-radius: var(--wa-border-radius-s);
    transition:
      background-color var(--wa-transition-fast),
      color var(--wa-transition-fast);
  }

  .segment.empty {
    color: var(--wa-color-text-quiet);
  }

  /* Focus style — applies to keyboard *and* pointer focus so a click always shows the selection. Soft brand fill
     reads as "selected" without competing with the popup's loud selected items. */
  .segment:focus {
    background-color: var(--wa-color-brand-fill-quiet);
    color: var(--wa-color-brand-on-quiet);
    outline: none;
  }

  .segment.empty:focus {
    color: var(--wa-color-brand-on-quiet);
  }

  .segment-literal {
    display: inline-block;
    color: var(--wa-color-text-quiet);
    white-space: pre;
    user-select: none;
  }

  :host([disabled]) .segment,
  :host([readonly]) .segment {
    cursor: inherit;
  }

  /* Hidden form-value input (anchored under the wrapper for native validity tooltips). */
  .value-input {
    position: absolute;
    inset-inline-start: var(--wa-form-control-padding-inline);
    inset-block-start: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Buttons. font: inherit lifts the UA default button font-size so children that size with em
     (e.g. the expand icon) resolve against the host size-driven font-size instead of ~13px. */
  .clear-button,
  .expand-button {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--wa-color-text-quiet);
    font: inherit;
    padding: 0.25em;
    border-radius: var(--wa-border-radius-s);
    transition: color var(--wa-transition-fast);
  }

  .clear-button:hover,
  .expand-button:hover {
    color: var(--wa-color-text-loud);
  }

  .expand-button:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  /* Scale the clock icon with the host's font-size (which is set by the size attribute) so it grows
     and shrinks with the rest of the form control. Applies to both the default and any user-slotted icon. */
  .expand-icon {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
    font-size: 1.25em;
  }

  /* Animations */
  .time-input-popup::part(popup).show {
    animation: wa-time-input-show var(--show-duration) var(--wa-transition-easing);
  }

  .time-input-popup::part(popup).hide {
    animation: wa-time-input-hide var(--hide-duration) var(--wa-transition-easing);
  }

  @keyframes wa-time-input-show {
    from {
      opacity: 0;
      transform: scale(0.97);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes wa-time-input-hide {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.97);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --show-duration: 0ms;
      --hide-duration: 0ms;
    }
    .column {
      scroll-behavior: auto;
    }
  }

  /* Visually hidden helper */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Start / end slots */
  [part~='start'],
  [part~='end'] {
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
  }

  [part~='start']::slotted(*) {
    margin-inline-end: 0.25em;
  }

  [part~='end']::slotted(*) {
    margin-inline-start: 0.25em;
  }
`;var fp=["/",".","-",":",","," "],bp=class{constructor(t,e){this.buffers=new Map,this.active=null,this.handleFocus=o=>{let r=o.currentTarget,a=r.dataset.group,s=r.dataset.segment;this.active={group:a,field:s};for(let n of this.segmentElements())n.tabIndex=n===r?0:-1},this.handleBlur=o=>{let r=o.currentTarget,a=r.dataset.group,s=r.dataset.segment;this.getBuffer(a,s)&&this.flushBuffer(a,s)},this.handleKeyDown=o=>{let r=o.currentTarget??o.composedPath().find(c=>c instanceof HTMLElement&&c.dataset.group&&c.dataset.segment)??null;if(!r)return;let a=r.dataset.group,s=r.dataset.segment;if(!a||!s)return;if(o.key==="ArrowUp"||o.key==="ArrowDown"){if(o.preventDefault(),this.isReadonlyOrDisabled())return;this.getBuffer(a,s)&&this.flushBuffer(a,s);let c=o.key==="ArrowUp"?1:-1,h=this.config.rules.step(a,s,c);h&&this.config.onCommit?.(a,s,h.value);return}if(o.key==="ArrowLeft"||o.key==="ArrowRight"){o.preventDefault(),this.getBuffer(a,s)&&this.flushBuffer(a,s);let c=o.key==="ArrowLeft",h=this.config.isRtl()?!c:c;this.moveFocus(r,h?-1:1);return}if(o.key==="Home"){o.preventDefault(),this.segmentElements()[0]?.focus({preventScroll:!0});return}if(o.key==="End"){o.preventDefault();let c=this.segmentElements();c[c.length-1]?.focus({preventScroll:!0});return}if(o.key==="Tab"){this.getBuffer(a,s)&&this.flushBuffer(a,s);return}if(o.key==="Backspace"||o.key==="Delete"){if(o.preventDefault(),this.isReadonlyOrDisabled())return;this.getBuffer(a,s)?(this.setBuffer(a,s,""),this.config.onCommit?.(a,s,null)):this.config.rules.clear(a,s)?this.config.onCommit?.(a,s,null):o.key==="Backspace"&&this.moveFocus(r,-1);return}if(/^[0-9]$/.test(o.key)){if(o.preventDefault(),this.isReadonlyOrDisabled())return;let c=this.getBuffer(a,s),h=this.config.rules.typeDigit(a,s,c,o.key);this.setBuffer(a,s,h.buffer),this.config.onCommit?.(a,s,h.value),h.advance&&this.moveFocus(r,1);return}if((this.config.separatorKeys??fp).includes(o.key)){o.preventDefault(),this.getBuffer(a,s)&&this.flushBuffer(a,s),this.moveFocus(r,1);return}},this.host=t,this.config=e,t.addController(this)}hostConnected(){}hostDisconnected(){this.buffers.clear(),this.active=null}getBuffer(t,e){return this.buffers.get(this.key(t,e))??""}setBuffer(t,e,o){let r=this.key(t,e);o?this.buffers.set(r,o):this.buffers.delete(r)}clearBuffers(){this.buffers.clear()}getActiveSegment(){return this.active}setActiveSegment(t,e){this.active={group:t,field:e}}segmentElements(){let t=this.host.shadowRoot;return t?Array.from(t.querySelectorAll("[data-segment][data-group]")):[]}segmentElementFor(t,e){let o=this.host.shadowRoot;return o?o.querySelector(`[data-group="${t}"][data-segment="${e}"]`):null}findFocusableSegment(t){let e=this.segmentElements();return e.length===0?null:e.find(r=>{let a=r.dataset.group,s=r.dataset.segment;return t(a,s)&&!this.getBuffer(a,s)})??e[0]}focusActiveSegment(t){if(this.active){let e=this.segmentElementFor(this.active.group,this.active.field);if(e){e.focus({preventScroll:!0,...t});return}}this.segmentElements()[0]?.focus({preventScroll:!0,...t})}moveFocus(t,e,o){let r=this.segmentElements(),a=r.indexOf(t);if(a<0)return;let s=r[a+e];s&&s.focus({preventScroll:!0,...o})}flushBuffer(t,e){let o=this.getBuffer(t,e);if(!o)return!1;let r=this.config.rules.commitBuffer(t,e,o);return this.setBuffer(t,e,""),this.config.onCommit?.(t,e,r),!0}flushAllBuffers(){for(let[t,e]of this.buffers){if(!e)continue;let[o,r]=t.split(":"),a=this.config.rules.commitBuffer(o,r,e);this.config.onCommit?.(o,r,a)}this.buffers.clear()}eventHandlers(){return{keydown:this.handleKeyDown,focus:this.handleFocus,blur:this.handleBlur}}handleKeyDownEvent(t){let e=t.defaultPrevented;return this.handleKeyDown(t),t.defaultPrevented&&!e}key(t,e){return`${t}:${e}`}isReadonlyOrDisabled(){return!!(this.config.isReadonly?.()||this.config.isDisabled?.())}},gp=0,vp=()=>`wa-time-input-${++gp}`,pr="single",it=class extends W{constructor(){super(...arguments),this.assumeInteractionOn=["input"],this.hasSlotController=new rt(this,"hint","label","footer"),this.localize=new I(this),this.popupId=vp(),this.keyboardHelpId=`${this.popupId}-help`,this.pendingValue=null,this.moveFocusToColumnOnShow=!1,this.lastEmittedValue="",this.segments={hour:null,minute:null,second:null,dayPeriod:null},this.segmentsController=new bp(this,{getLayout:()=>this.getLayout(),isRtl:()=>this.isRtl,isReadonly:()=>this.readonly,isDisabled:()=>this.disabled,rules:bl({getSegments:()=>this.segments,setSegments:(t,e)=>{this.segments=e},hour12:()=>this.resolvedHour12}),onCommit:()=>{this.recomputeValue(),this.requestUpdate()}}),this.name="",this._value="",this.defaultValue=this.getAttribute("value")??"",this.disabled=!1,this.required=!1,this.readonly=!1,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.autocomplete="",this.withClear=!1,this.withNow=!1,this.withLabel=!1,this.withHint=!1,this.min="",this.max="",this.step=60,this.hourFormat="auto",this.open=!1,this.placement="bottom-start",this.distance=0,this.handleDocumentFocusIn=t=>{t.composedPath().includes(this)||this.hide()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&At(this)&&(t.stopPropagation(),t.preventDefault(),this.hide())},this.handleDocumentMouseDown=t=>{t.composedPath().includes(this)||this.hide()},this.handleSegmentFocus=t=>{this.segmentsController.eventHandlers().focus(t)},this.handleSegmentBlur=t=>{this.segmentsController.eventHandlers().blur(t)},this.handleInputWrapperPointerDown=t=>{if(!(this.disabled||this.readonly||this.open)){for(let e of t.composedPath()){if(e===this)break;if(!(e instanceof Element))continue;let o=e.tagName;if(o==="BUTTON"||o==="A"||e.getAttribute("role")==="button")return}this.show()}},this.handleSegmentKeyDown=t=>{let e=t.currentTarget,o=e.dataset.segment;if(t.altKey&&t.key==="ArrowDown"){t.preventDefault(),this.moveFocusToColumnOnShow=!0,this.open?this.focusFirstColumn():this.show();return}if(t.altKey&&t.key==="ArrowUp"){t.preventDefault(),this.hide();return}if(t.key==="Enter"){t.preventDefault(),this.segmentsController.getBuffer(pr,o)&&(this.segmentsController.flushBuffer(pr,o),this.recomputeValue()),this.open&&this.hide();return}if(o==="dayPeriod"){let r=dl(t.key);if(r!=null){if(t.preventDefault(),this.readonly)return;this.segments={...this.segments,dayPeriod:r},this.recomputeValue(),this.requestUpdate(),this.segmentsController.moveFocus(e,1);return}}this.segmentsController.eventHandlers().keydown(t)},this.handleExpandButtonClick=()=>{this.open?this.hide():(this.moveFocusToColumnOnShow=!0,this.show())},this.handleClearClick=t=>{t.stopPropagation(),!(!this._value&&ul(this.segments))&&(this._value="",this.valueHasChanged=!0,this.segmentsController.clearBuffers(),this.syncSegmentsFromCanonical(),this.updateValidity(),this.dispatchEvent(new Ao),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.lastEmittedValue="",this.focus())},this.handleClearMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.handleNowClick=()=>{let t=new Date;this.value=t,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.lastEmittedValue=this._value,this.hide()},this.handleColumnItemClick=t=>{let e=t.target.closest(".column-item");if(!e||e.getAttribute("aria-disabled")==="true")return;let o=e.dataset.field,r=Number(e.dataset.value);Number.isNaN(r)||(this.segments={...this.segments,[o]:r},this.recomputeValue(),this.requestUpdate())},this.handleColumnKeyDown=t=>{let e=t.currentTarget,o=e.dataset.field;if(t.key==="Escape"){t.preventDefault(),this.hide();return}if(t.key==="Enter"){t.preventDefault(),this.hide();return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let r=this.columnFields;if(r.length<2)return;let a=t.key==="ArrowLeft"?-1:1,n=((r.indexOf(o)+a)%r.length+r.length)%r.length,c=r[n];this.shadowRoot?.querySelector(`.column[data-field="${c}"]`)?.focus({preventScroll:!0});return}if(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key==="PageUp"||t.key==="PageDown"){t.preventDefault();let r=t.key==="ArrowUp"||t.key==="PageUp"?-1:1,a=t.key==="PageUp"||t.key==="PageDown"?5:1,s=this.columnItemsFor(o);if(s.length===0)return;let n=this.segments[o],h=(((n==null?0:Math.max(0,s.findIndex(p=>p.value===n)))+r*a)%s.length+s.length)%s.length,u=s[h];this.segments={...this.segments,[o]:u.value},this.recomputeValue(),this.requestUpdate(),requestAnimationFrame(()=>{let p=e.querySelector(`[data-value="${u.value}"]`);p&&this.keepItemInView(e,p)});return}if(t.key==="Home"){t.preventDefault();let r=this.columnItemsFor(o);if(r.length===0)return;this.segments={...this.segments,[o]:r[0].value},this.recomputeValue(),this.requestUpdate();return}if(t.key==="End"){t.preventDefault();let r=this.columnItemsFor(o);if(r.length===0)return;let a=r[r.length-1];this.segments={...this.segments,[o]:a.value},this.recomputeValue(),this.requestUpdate();return}}}static get validators(){let t=[pe({validationElement:Object.assign(document.createElement("input"),{required:!0})}),Gt()];return[...super.validators,...t]}term(t,e){return this.localize.term(t)||e}get validationTarget(){return this.valueInput}get value(){return this.valueHasChanged?this._value:this._value||this.defaultValue||""}set value(t){let e=this.normalizeIncomingValue(t);if(e===this._value)return;let o=this._value;this._value=e,this.valueHasChanged=!0,this.hasUpdated?this.syncSegmentsFromCanonical():this.pendingValue=this._value,this.requestUpdate("value",o)}handleSizeChange(){Y(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}firstUpdated(){this.pendingValue!=null?(this._value=this.pendingValue,this.pendingValue=null):!this._value&&this.defaultValue&&(this._value=this.defaultValue),this.syncSegmentsFromCanonical(),this.input=this.valueInput,this.updateValidity(),this.lastEmittedValue=this._value}updated(t){super.updated?.(t),t.has("value")&&this.customStates.set("blank",!this.value),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("open")&&this.customStates.set("open",this.open),(t.has("step")||t.has("hourFormat"))&&this.syncSegmentsFromCanonical(),(t.has("min")||t.has("max")||t.has("step"))&&this.updateValidity()}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}async handleOpenChange(){if(this.open&&!this.disabled){let t=new Bt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.popup.active=!0,await this.updateComplete,await J(this.popup.popup,"show"),this.scrollColumnsToCurrent(),this.moveFocusToColumnOnShow&&(this.moveFocusToColumnOnShow=!1,this.focusFirstColumn()),this.dispatchEvent(new qt)}else{let t=new Vt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.removeOpenListeners(),await J(this.popup.popup,"hide"),this.popup.active=!1,this.dispatchEvent(new Wt);let e=this.shadowRoot?.activeElement;e&&this.popup?.contains(e)&&this.focusActiveSegment()}}focus(t){this.segmentsController.findFocusableSegment((o,r)=>this.segments[r]==null)?.focus(t)}blur(){this.shadowRoot?.activeElement?.blur()}async show(){this.open||this.disabled||(this.open=!0,await yt(this,"wa-after-show"))}async hide(){!this.open||this.disabled||(this.open=!1,await yt(this,"wa-after-hide"))}get valueAsDate(){let t=this.value;if(!t)return null;let e=ta(t,{hour12:!1,withSeconds:this.resolvedWithSeconds});if(e.hour==null||e.minute==null)return null;let o=new Date;return o.setHours(e.hour,e.minute,e.second??0,0),o}get valueAsNumber(){let t=this.valueAsDate;return t?t.getHours()*36e5+t.getMinutes()*6e4+t.getSeconds()*1e3:Number.NaN}formResetCallback(){this._value=this.defaultValue,this.valueHasChanged=!1,this.segmentsController.clearBuffers(),this.syncSegmentsFromCanonical(),super.formResetCallback(),this.lastEmittedValue=this._value,this.requestUpdate()}formStateRestoreCallback(t){typeof t=="string"&&(this._value=t,this.hasUpdated?this.syncSegmentsFromCanonical():this.pendingValue=t,this.requestUpdate()),this.updateValidity()}get resolvedLocale(){return this.localize.lang()||"en"}get isRtl(){return this.localize.dir()==="rtl"}get resolvedHour12(){return this.hourFormat==="12"?!0:this.hourFormat==="24"?!1:cl(this.resolvedLocale)}get resolvedWithSeconds(){return fl(this.step)}getLayout(){return ll(this.resolvedLocale,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds})}normalizeIncomingValue(t){if(t==null)return"";if(typeof t=="string")return t;if(t instanceof Date){let e=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return this.resolvedWithSeconds?`${e}:${o}:${r}`:`${e}:${o}`}return""}syncSegmentsFromCanonical(){this.segmentsController.clearBuffers(),this.segments=ta(this._value,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds}),this.updateHiddenInput()}updateHiddenInput(){this.valueInput&&(this.valueInput.value=this._value),this.setValue(this._value||null)}recomputeValue(){let t=this._value,e=ml(this.segments,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds});e!==t&&(this._value=e,this.valueHasChanged=!0,this.updateHiddenInput(),this.updateValidity()),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),e!==this.lastEmittedValue&&(this.lastEmittedValue=e,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ft(this)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Lt(this)}focusActiveSegment(){let t=this.segmentsController.getActiveSegment();if(t){let e=this.segmentsController.segmentElementFor(t.group,t.field);if(e){e.focus({preventScroll:!0});return}}this.segmentsController.findFocusableSegment((e,o)=>this.segments[o]==null)?.focus({preventScroll:!0})}get columnFields(){return this.getLayout().order.filter(t=>t!==void 0)}columnItemsFor(t){if(t==="dayPeriod")return[{label:this.term("am",Zr(this.resolvedLocale,0)),value:0,disabled:!1},{label:this.term("pm",Zr(this.resolvedLocale,1)),value:1,disabled:!1}];if(t==="hour"){let a=[];if(this.resolvedHour12)for(let s=1;s<=12;s++)a.push({label:String(s).padStart(2,"0"),value:s,disabled:!1});else for(let s=0;s<=23;s++)a.push({label:String(s).padStart(2,"0"),value:s,disabled:!1});return a}let e=typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:1,o=t==="minute"?e<60?1:Math.max(1,Math.floor(e/60)):Math.max(1,Math.floor(e)),r=[];for(let a=0;a<60;a+=o)r.push({label:String(a).padStart(2,"0"),value:a,disabled:!1});return r}focusFirstColumn(){if(!this.shadowRoot)return;this.shadowRoot.querySelector(".column")?.focus({preventScroll:!0})}scrollColumnsToCurrent(){if(this.shadowRoot)for(let t of this.shadowRoot.querySelectorAll(".column")){let e=t.dataset.field,o=this.segments[e];if(o==null)continue;let r=t.querySelector(`[data-value="${o}"]`);r&&this.keepItemInView(t,r)}}keepItemInView(t,e){let o=t.getBoundingClientRect(),r=e.getBoundingClientRect();r.top<o.top?t.scrollTop+=r.top-o.top:r.bottom>o.bottom&&(t.scrollTop+=r.bottom-o.bottom)}placeholderFor(t){return"--"}fieldLabelFor(t){let e=t==="hour"?"Hour":t==="minute"?"Minute":t==="second"?"Second":"AM/PM";return this.term(t,e)}segmentAriaValueText(t){let e=this.segments[t],o=this.segmentsController.getBuffer(pr,t);return o||(e==null?this.term("empty","Empty"):t==="dayPeriod"?e===0?this.term("am","AM"):this.term("pm","PM"):String(e))}render(){let t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=this.hasUpdated?this.hasSlotController.test("footer"):!1,r=!!this.label||!!t,a=!!this.hint||!!e,s=!!this._value,n=this.getLayout(),c=this.label||this.term("time","Time");return b`
      <div
        part="form-control"
        class=${_({"form-control":!0,"form-control-has-label":r})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${_({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
          @click=${()=>this.focus()}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${_({"time-input-popup":!0,open:this.open})}
            placement=${this.placement}
            distance=${this.distance}
            ?active=${this.open}
            flip
            shift
          >
            <div
              part="base input-wrapper"
              class="input-wrapper"
              slot="anchor"
              @pointerdown=${this.handleInputWrapperPointerDown}
            >
              <slot name="start" part="start" class="start"></slot>

              <div
                part="input"
                class="segments"
                role="group"
                aria-labelledby=${r?"label":ze}
                aria-label=${r?ze:c}
              >
                ${this.renderSegmentGroup(n)}
              </div>

              <span id=${this.keyboardHelpId} class="visually-hidden">
                ${this.term("timeInputKeyboardHelp","Use arrow keys to change values; press Alt+Down Arrow to open the time picker.")}
              </span>

              <input
                class="value-input"
                type="time"
                tabindex="-1"
                aria-hidden="true"
                .value=${this._value}
                min=${D(this.min||void 0)}
                max=${D(this.max||void 0)}
                step=${D(this.step==="any"?"any":String(this.step))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                autocomplete=${D(this.autocomplete||void 0)}
              />

              ${this.withClear&&s?b`<button
                    part="clear-button"
                    type="button"
                    class="clear-button"
                    aria-label=${this.localize.term("clearEntry")}
                    tabindex="-1"
                    @mousedown=${this.handleClearMouseDown}
                    @click=${this.handleClearClick}
                  >
                    <slot name="clear-icon">
                      <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                    </slot>
                  </button>`:ze}

              <slot name="end" part="end" class="end"></slot>

              <button
                part="expand-button"
                type="button"
                class="expand-button"
                aria-label=${this.open?this.term("closeTimeInput","Close time picker"):this.term("chooseTime","Choose time")}
                aria-haspopup="dialog"
                aria-expanded=${this.open?"true":"false"}
                aria-controls=${this.popupId}
                ?disabled=${this.disabled}
                @click=${this.handleExpandButtonClick}
              >
                <slot name="expand-icon" part="expand-icon" class="expand-icon">
                  <wa-icon library="system" name="clock"></wa-icon>
                </slot>
              </button>
            </div>

            <div
              id=${this.popupId}
              part="popup"
              class="popup-body"
              role="dialog"
              aria-modal="true"
              aria-label=${this.term("chooseTime","Choose time")}
            >
              <div part="columns" class="columns">${this.columnFields.map(h=>this.renderColumn(h))}</div>
              ${o?b`<div class="popup-footer"><slot name="footer"></slot></div>`:this.withNow?b`<div class="popup-footer">
                      <button part="now-button" type="button" class="now-button" @click=${this.handleNowClick}>
                        ${this.term("now","Now")}
                      </button>
                    </div>`:ze}
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${_({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
        >
          ${this.hint}
        </slot>
      </div>
    `}renderSegmentGroup(t){let e=this.segmentsController.getActiveSegment(),o=!1,r=[];for(let a of t.tokens)if(a.kind==="literal")r.push(b`<span part="segment-literal" class="segment-literal" aria-hidden="true">${a.text}</span>`);else{let s=a.field,n=!o&&(e==null||e.field===s);n&&(o=!0),r.push(this.renderSegment(s,n))}return r}renderSegment(t,e){let o=this.segments[t],r=this.segmentsController.getBuffer(pr,t),a=this.placeholderFor(t),s=pl(t,o,r,a,this.resolvedLocale),n=o==null&&!r,c=t==="hour"?this.resolvedHour12?{min:1,max:12}:{min:0,max:23}:t==="minute"||t==="second"?{min:0,max:59}:{min:0,max:1},h=this.segmentAriaValueText(t);return b`<span
      part="segment"
      class=${_({segment:!0,empty:n,[`segment-${t}`]:!0})}
      data-group=${pr}
      data-segment=${t}
      role="spinbutton"
      tabindex=${this.disabled?-1:e?0:-1}
      aria-label=${this.fieldLabelFor(t)}
      aria-valuemin=${c.min}
      aria-valuemax=${c.max}
      aria-valuenow=${D(o??void 0)}
      aria-valuetext=${h}
      aria-readonly=${this.readonly?"true":"false"}
      aria-disabled=${this.disabled?"true":"false"}
      aria-describedby=${this.keyboardHelpId}
      inputmode=${t==="dayPeriod"?"text":"numeric"}
      @keydown=${this.handleSegmentKeyDown}
      @focus=${this.handleSegmentFocus}
      @blur=${this.handleSegmentBlur}
      >${s}</span
    >`}renderColumn(t){let e=this.columnItemsFor(t),o=this.segments[t],r=o!=null?`${this.popupId}-${t}-${o}`:void 0;return b`<div
      part="column column-${t}"
      class=${_({column:!0,[`column-${t}`]:!0})}
      data-field=${t}
      role="listbox"
      tabindex="0"
      aria-label=${this.fieldLabelFor(t)}
      aria-orientation="vertical"
      aria-activedescendant=${D(r)}
      @click=${this.handleColumnItemClick}
      @keydown=${this.handleColumnKeyDown}
    >
      ${e.map(a=>{let s=`${this.popupId}-${t}-${a.value}`,n=a.value===o;return b`<button
          id=${s}
          part="column-item ${n?"column-item-selected":""}"
          class="column-item"
          data-field=${t}
          data-value=${a.value}
          type="button"
          role="option"
          aria-selected=${n?"true":"false"}
          aria-disabled=${a.disabled?"true":"false"}
          tabindex="-1"
        >
          ${a.label}
        </button>`})}
    </div>`}};it.css=[X,bt,gl];it.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};i([C(".time-input-popup")],it.prototype,"popup",2);i([C(".value-input")],it.prototype,"valueInput",2);i([T()],it.prototype,"segments",2);i([l({reflect:!0})],it.prototype,"name",2);i([T()],it.prototype,"value",1);i([l({attribute:"value",reflect:!0})],it.prototype,"defaultValue",2);i([l({type:Boolean})],it.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],it.prototype,"required",2);i([l({type:Boolean,reflect:!0})],it.prototype,"readonly",2);i([l({reflect:!0})],it.prototype,"size",2);i([x("size")],it.prototype,"handleSizeChange",1);i([l({reflect:!0})],it.prototype,"appearance",2);i([l({type:Boolean,reflect:!0})],it.prototype,"pill",2);i([l()],it.prototype,"label",2);i([l({attribute:"hint"})],it.prototype,"hint",2);i([l()],it.prototype,"autocomplete",2);i([l({attribute:"with-clear",type:Boolean})],it.prototype,"withClear",2);i([l({attribute:"with-now",type:Boolean})],it.prototype,"withNow",2);i([l({attribute:"with-label",type:Boolean})],it.prototype,"withLabel",2);i([l({attribute:"with-hint",type:Boolean})],it.prototype,"withHint",2);i([l({reflect:!0})],it.prototype,"min",2);i([l({reflect:!0})],it.prototype,"max",2);i([l({converter:{fromAttribute:wp,toAttribute:yp}})],it.prototype,"step",2);i([l({attribute:"hour-format",reflect:!0})],it.prototype,"hourFormat",2);i([l({type:Boolean,reflect:!0})],it.prototype,"open",2);i([l({reflect:!0})],it.prototype,"placement",2);i([l({type:Number,reflect:!0})],it.prototype,"distance",2);i([x("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);i([x("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);it=i([S("wa-time-input")],it);function wp(t){if(t==null)return 60;if(t==="any")return"any";let e=Number(t);return Number.isFinite(e)&&e>0?e:60}function yp(t){return t==="any"?"any":String(t)}var vl=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var wl=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var yl=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var xl=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var kl=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Cl=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Sl=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var El=k`
  :host {
    /* Private - set by the component to control indentation depth */
    --indent: 0px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: 0.5em;
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: var(--indent);
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 0.1875em transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(0.1875em + var(--indent) + 1em - (var(--indent-guide-width) / 2));
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`;function ea(t,e,o){return t?e(t):o?.(t)}var oa="wa-tree-item",Z=class extends L{constructor(){super(...arguments),this.localize=new I(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role="treeitem"}static isTreeItem(t){let e=t;return e&&(e.role==="treeitem"||e.getAttribute?.("role")==="treeitem")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabIndex",this.tabIndex.toString()),this.isNestedItem()&&(this.setAttribute("slot","children"),this._parentTreeContext?.expanded||(this.expanded=!1)),this._parentTreeContext&&(this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded}),this.updateIndentation()}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(t){this.dispatchEvent(new xl);let e=Oe(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Pe(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.hidden=!0,this.dispatchEvent(new Cl))}isNestedItem(){if(this._parentTreeContext!==null)return!0;let t=this.parentElement;return!!t&&Z.isTreeItem(t)}updateIndentation(){let t=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty("--indent",`calc(${t} * var(--indent-size, 2em))`)}getDepth(){let t=0,e=this.parentElement;for(;e;)Z.isTreeItem(e)&&t++,e=e.parentElement;return t}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1),super.willUpdate(t)}async animateExpand(t){this.dispatchEvent(new kl),this.childrenContainer.hidden=!1;let e=Oe(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Pe(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.style.height="auto",this.dispatchEvent(new Sl))}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.animationGeneration++;let t=this.animationGeneration;this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new yl)):this.animateExpand(t):this.animateCollapse(t)}handleLazyChange(){this.dispatchEvent(new wl)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>Z.isTreeItem(e)&&(t||!e.disabled)):[]}render(){let t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return b`
      <div
        part="base"
        class="${_({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${_({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${ea(this.loading,()=>b` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>b`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${ea(this.selectable,()=>b`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Pt(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group" ?hidden=${!this.expanded&&!this.isConnected}>
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Z.css=El;i([T()],Z.prototype,"indeterminate",2);i([T()],Z.prototype,"isLeaf",2);i([T()],Z.prototype,"loading",2);i([T()],Z.prototype,"selectable",2);i([l({type:Boolean,reflect:!0})],Z.prototype,"expanded",2);i([l({type:Boolean,reflect:!0})],Z.prototype,"selected",2);i([l({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],Z.prototype,"lazy",2);i([pa({context:oa})],Z.prototype,"_treeItemContext",2);i([ua({context:oa,subscribe:!1})],Z.prototype,"_parentTreeContext",2);i([C("slot:not([name])")],Z.prototype,"defaultSlot",2);i([C("slot[name=children]")],Z.prototype,"childrenSlot",2);i([C(".item")],Z.prototype,"itemElement",2);i([C(".children")],Z.prototype,"childrenContainer",2);i([C(".expand-button slot")],Z.prototype,"expandButtonSlot",2);i([l({reflect:!0,type:Number,attribute:"tabindex"})],Z.prototype,"tabIndex",2);i([l({reflect:!0})],Z.prototype,"role",2);i([x("loading",{waitUntilFirstUpdate:!0})],Z.prototype,"handleLoadingChange",1);i([x("disabled")],Z.prototype,"handleDisabledChange",1);i([x("expanded")],Z.prototype,"handleExpandedState",1);i([x("indeterminate")],Z.prototype,"handleIndeterminateStateChange",1);i([x("selected")],Z.prototype,"handleSelectedChange",1);i([x("expanded",{waitUntilFirstUpdate:!0})],Z.prototype,"handleExpandedChange",1);i([x("expanded",{waitUntilFirstUpdate:!0})],Z.prototype,"handleExpandAnimation",1);i([x("lazy",{waitUntilFirstUpdate:!0})],Z.prototype,"handleLazyChange",1);Z=i([S("wa-tree-item")],Z);Z.disableWarning?.("change-in-update");var zl=k`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: 2em;

    display: block;
  }
`;function Ll(t,e=!1){function o(s){let n=s.getChildrenItems({includeDisabled:!1});if(n.length){let c=n.every(u=>u.selected),h=n.every(u=>!u.selected&&!u.indeterminate);s.selected=c,s.indeterminate=!c&&!h}}function r(s){let n=s.parentElement;Z.isTreeItem(n)&&(o(n),r(n))}function a(s){for(let n of s.getChildrenItems())n.selected=e?s.selected||n.selected:!n.disabled&&s.selected,a(n);e&&o(s)}a(t),r(t)}var Ee=class extends L{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new I(this),this.tabIndex=0,this.role="tree",this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple"||this.selection==="leaf-multiple"&&t.isLeaf,["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{let o=t.querySelector(`[slot="${e}-icon"]`),r=this.getExpandButtonIcon(e);r&&(o===null?t.append(r):o.hasAttribute("data-default")&&o.replaceWith(r))})})},this.handleTreeChanged=t=>{for(let e of t){let o=[...e.addedNodes].filter(Z.isTreeItem),r=[...e.removedNodes].filter(Z.isTreeItem);o.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Z.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},"addEventListener"in this&&(this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange))}async connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})),this.setAttribute("tabindex","0"),this.setAttribute("role","tree")}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){let o=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(o){let r=o.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(a=>a.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${t}-icon`,r}return null}selectItem(t){let e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ll(t);else if(this.selection==="leaf-multiple")t.isLeaf?t.selected=!t.selected:t.expanded=!t.expanded;else if(this.selection==="single"||t.isLeaf){let r=this.getAllTreeItems();for(let a of r)a.selected=a===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let o=this.selectedItems;(e.length!==o.length||o.some(r=>!e.includes(r)))&&Promise.all(o.map(r=>r.updateComplete)).then(()=>{this.dispatchEvent(new vl({selection:o}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(a=>["input","textarea"].includes(a?.tagName?.toLowerCase())))return;let e=this.getFocusableItems(),o=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();let a=e.findIndex(h=>h.matches(":focus")),s=e[a],n=h=>{let u=e[H(h,0,e.length-1)];this.focusItem(u)},c=h=>{s.expanded=h};t.key==="ArrowDown"?n(a+1):t.key==="ArrowUp"?n(a-1):o&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(a+1):c(!0):o&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(a-1):c(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){let e=t.target,o=e.closest("wa-tree-item"),r=t.composedPath().some(a=>a?.classList?.contains("expand-button"));!o||o.disabled||e!==this.clickTarget||(r?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",e=this.selection==="leaf-multiple",o=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t||e?"true":"false");for(let r of o)r.updateComplete.then(()=>{r.selectable=t||e&&r.isLeaf});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(r=>{r.updateComplete.then(()=>{Ll(r,!0)})}))}get selectedItems(){let t=this.getAllTreeItems(),e=o=>o.selected;return t.filter(e)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(o=>{if(o.disabled)return!1;let r=o.parentElement?.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(o),!e.has(o)})}render(){return b`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ee.css=zl;i([C("slot:not([name])")],Ee.prototype,"defaultSlot",2);i([C("slot[name=expand-icon]")],Ee.prototype,"expandedIconSlot",2);i([C("slot[name=collapse-icon]")],Ee.prototype,"collapsedIconSlot",2);i([l()],Ee.prototype,"selection",2);i([l({attribute:"tabindex",reflect:!0,type:Number})],Ee.prototype,"tabIndex",2);i([l({reflect:!0})],Ee.prototype,"role",2);i([x("selection")],Ee.prototype,"handleSelectionChange",1);Ee=i([S("wa-tree")],Ee);var ra=k`
  :host {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-m);
  }

  #frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / var(--zoom));
    height: calc(100% / var(--zoom));
    transform: scale(var(--zoom));
    transform-origin: 0 0;
  }

  #iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
    user-select: none;
    -webkit-user-select: none;
  }

  #controls {
    display: flex;
    position: absolute;
    bottom: 0.5em;
    align-items: center;
    font-weight: var(--wa-font-weight-semibold);
    padding: 0.25em 0.5em;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-s);
    background: #000b;
    color: white;
    font-size: min(12px, 0.75em);
    user-select: none;
    -webkit-user-select: none;

    &:dir(ltr) {
      right: 0.5em;
    }

    &:dir(rtl) {
      left: 0.5em;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.25em;
      border: none;
      background: none;
      color: inherit;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    span {
      min-width: 4.5ch; /* extra space so numbers don't shift */
      font-variant-numeric: tabular-nums;
      text-align: center;
    }
  }
`;var xp=class{constructor(t,e){this.handleTransitionEnd=()=>{this.onThemeChange()},(this.host=t).addController(this),this.onThemeChange=e,typeof document<"u"&&(this.hiddenElement=document.createElement("div"),this.hiddenElement.setAttribute("aria-hidden","true"),Object.assign(this.hiddenElement.style,{position:"absolute",width:"0",height:"0",overflow:"hidden",pointerEvents:"none",opacity:"0",color:"var(--wa-color-surface-default, transparent)",transition:"color 0.001ms"}))}hostConnected(){this.hiddenElement&&(this.host.appendChild(this.hiddenElement),this.hiddenElement.addEventListener("transitionend",this.handleTransitionEnd))}hostDisconnected(){this.hiddenElement&&(this.hiddenElement.removeEventListener("transitionend",this.handleTransitionEnd),this.hiddenElement.remove())}},Mt=class extends L{constructor(){super(),this.localize=new I(this),this.themeObserver=new MutationObserver(()=>this.syncTheme()),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1,this.withThemeSync=!1,new xp(this,()=>this.syncTheme())}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){let e=Ze(t),o=[];for(let r of e){let a;if(r.endsWith("%")){let s=parseFloat(r.slice(0,-1));if(!isNaN(s))a=Math.max(0,s/100);else continue}else if(a=parseFloat(r),!isNaN(a))a=Math.max(0,a);else continue;o.push(a)}return[...new Set(o)].sort((r,a)=>r-a)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let o=1;o<this.availableZoomLevels.length;o++){let r=Math.abs(this.availableZoomLevels[o]-this.zoom);r<e&&(e=r,t=o)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}willUpdate(t){t.has("zoom")&&this.setStyleProperty("--zoom",`${this.zoom}`),super.willUpdate(t)}updated(t){if(t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){let e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}t.has("withThemeSync")&&(this.withThemeSync?(this.themeObserver?.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.syncTheme()):this.themeObserver?.disconnect()),super.updated(t)}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}let t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}let t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}disconnectedCallback(){super.disconnectedCallback(),this.themeObserver?.disconnect()}syncTheme(){if(this.withThemeSync)try{let t=this.contentDocument?.documentElement;if(!t)return;let e=["wa-theme-","wa-brand-","wa-palette-"],o=new Set,r=new Set,a=this,s=!1;for(;a;){s||(a.classList.contains("wa-dark")?(o.add("wa-dark"),s=!0):a.classList.contains("wa-light")&&(o.add("wa-light"),s=!0));for(let c of a.classList)e.some(h=>c.startsWith(h))&&r.add(c);a=a.parentElement}t.classList.toggle("wa-dark",o.has("wa-dark")),t.classList.toggle("wa-light",o.has("wa-light"));let n=Array.from(t.classList).filter(c=>e.some(h=>c.startsWith(h)));t.classList.remove(...n),t.classList.add(...r)}catch{}}handleLoad(){this.withThemeSync&&this.syncTheme(),this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return b`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${D(this.sandbox??void 0)}
          src=${D(this.src??void 0)}
          srcdoc=${D(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":b`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};Mt.css=ra;i([T()],Mt.prototype,"availableZoomLevels",2);i([C("#iframe")],Mt.prototype,"iframe",2);i([l()],Mt.prototype,"src",2);i([l()],Mt.prototype,"srcdoc",2);i([l({type:Boolean})],Mt.prototype,"allowfullscreen",2);i([l()],Mt.prototype,"loading",2);i([l()],Mt.prototype,"referrerpolicy",2);i([l()],Mt.prototype,"sandbox",2);i([l({type:Number,reflect:!0})],Mt.prototype,"zoom",2);i([l({attribute:"zoom-levels"})],Mt.prototype,"zoomLevels",2);i([l({type:Boolean,attribute:"without-controls",reflect:!0})],Mt.prototype,"withoutControls",2);i([l({type:Boolean,attribute:"without-interaction",reflect:!0})],Mt.prototype,"withoutInteraction",2);i([l({type:Boolean,attribute:"with-theme-sync",reflect:!0})],Mt.prototype,"withThemeSync",2);Mt=i([S("wa-zoomable-frame")],Mt);ko("/assets/js/vendor");
/*! Bundled license information:

@awesome.me/webawesome/dist/chunks/chunk.HGBRCPUS.js:
@awesome.me/webawesome/dist/chunks/chunk.7VGCIHDG.js:
@awesome.me/webawesome/dist/utilities/base-path.js:
@awesome.me/webawesome/dist/chunks/chunk.D5YFE5NT.js:
@awesome.me/webawesome/dist/chunks/chunk.N2TXQSKF.js:
@awesome.me/webawesome/dist/chunks/chunk.LRYJ2M5H.js:
@awesome.me/webawesome/dist/chunks/chunk.KBS6YHTA.js:
@awesome.me/webawesome/dist/chunks/chunk.ZFSRFTCP.js:
@awesome.me/webawesome/dist/chunks/chunk.X55YNZ3B.js:
@awesome.me/webawesome/dist/chunks/chunk.46TQDRI6.js:
@awesome.me/webawesome/dist/chunks/chunk.HBKCENRD.js:
@awesome.me/webawesome/dist/chunks/chunk.TWDBLNQF.js:
@awesome.me/webawesome/dist/chunks/chunk.HCXBOJYW.js:
@awesome.me/webawesome/dist/chunks/chunk.XTA2JDH4.js:
@awesome.me/webawesome/dist/chunks/chunk.NF5JTFKH.js:
@awesome.me/webawesome/dist/webawesome.js:
@awesome.me/webawesome/dist/chunks/chunk.VO4OKF3D.js:
@awesome.me/webawesome/dist/chunks/chunk.MF234WAF.js:
@awesome.me/webawesome/dist/chunks/chunk.T6GGTYHD.js:
@awesome.me/webawesome/dist/chunks/chunk.ZZPJSMJ4.js:
@awesome.me/webawesome/dist/chunks/chunk.AFGZQYUZ.js:
@awesome.me/webawesome/dist/chunks/chunk.PZAN6FPN.js:
@awesome.me/webawesome/dist/chunks/chunk.AOKMSJXD.js:
@awesome.me/webawesome/dist/chunks/chunk.54LTOL47.js:
@awesome.me/webawesome/dist/chunks/chunk.M7O5VY4E.js:
@awesome.me/webawesome/dist/chunks/chunk.NSSMHWNA.js:
@awesome.me/webawesome/dist/chunks/chunk.4MQTK254.js:
@awesome.me/webawesome/dist/chunks/chunk.F25QOBDY.js:
@awesome.me/webawesome/dist/chunks/chunk.L6CIKOFQ.js:
@awesome.me/webawesome/dist/chunks/chunk.QAR32T43.js:
@awesome.me/webawesome/dist/chunks/chunk.VKKHOLVO.js:
@awesome.me/webawesome/dist/chunks/chunk.YDQCS2HK.js:
@awesome.me/webawesome/dist/chunks/chunk.WDIIGUNP.js:
@awesome.me/webawesome/dist/chunks/chunk.L5E22IYH.js:
@awesome.me/webawesome/dist/chunks/chunk.ITAFLY5Y.js:
@awesome.me/webawesome/dist/components/accordion/accordion.js:
@awesome.me/webawesome/dist/components/accordion-item/accordion-item.js:
@awesome.me/webawesome/dist/chunks/chunk.SJ4PCSIY.js:
@awesome.me/webawesome/dist/chunks/chunk.643GTO3J.js:
@awesome.me/webawesome/dist/components/animated-image/animated-image.js:
@awesome.me/webawesome/dist/chunks/chunk.BMO76VKZ.js:
@awesome.me/webawesome/dist/chunks/chunk.IIHGIRPB.js:
@awesome.me/webawesome/dist/chunks/chunk.ZT4OZS6F.js:
@awesome.me/webawesome/dist/chunks/chunk.Z4HIBJYN.js:
@awesome.me/webawesome/dist/chunks/chunk.K5FXMOLB.js:
@awesome.me/webawesome/dist/components/animation/animation.js:
@awesome.me/webawesome/dist/components/animation/animations.js:
@awesome.me/webawesome/dist/chunks/chunk.YUS4MAP3.js:
@awesome.me/webawesome/dist/chunks/chunk.NTVW7E2R.js:
@awesome.me/webawesome/dist/components/avatar/avatar.js:
@awesome.me/webawesome/dist/chunks/chunk.XNTP7DEQ.js:
@awesome.me/webawesome/dist/chunks/chunk.SUWP4C7R.js:
@awesome.me/webawesome/dist/chunks/chunk.RF55CH3F.js:
@awesome.me/webawesome/dist/components/badge/badge.js:
@awesome.me/webawesome/dist/chunks/chunk.2LJGR6KY.js:
@awesome.me/webawesome/dist/chunks/chunk.YVKAMD33.js:
@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js:
@awesome.me/webawesome/dist/chunks/chunk.OJKMQ4H5.js:
@awesome.me/webawesome/dist/chunks/chunk.OHAZ63I6.js:
@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js:
@awesome.me/webawesome/dist/chunks/chunk.R7QX4M6R.js:
@awesome.me/webawesome/dist/chunks/chunk.VC3BPUZJ.js:
@awesome.me/webawesome/dist/chunks/chunk.KBXNFZQL.js:
@awesome.me/webawesome/dist/chunks/chunk.RPQJAXXR.js:
@awesome.me/webawesome/dist/chunks/chunk.RWNXKUCF.js:
@awesome.me/webawesome/dist/chunks/chunk.G5ZZIGWB.js:
@awesome.me/webawesome/dist/chunks/chunk.3CFUTVFX.js:
@awesome.me/webawesome/dist/chunks/chunk.EBC7M6Z4.js:
@awesome.me/webawesome/dist/chunks/chunk.W7A2VLCT.js:
@awesome.me/webawesome/dist/chunks/chunk.AX24US5R.js:
@awesome.me/webawesome/dist/components/button/button.js:
@awesome.me/webawesome/dist/chunks/chunk.BBOO36QE.js:
@awesome.me/webawesome/dist/chunks/chunk.IB5IGK3H.js:
@awesome.me/webawesome/dist/components/button-group/button-group.js:
@awesome.me/webawesome/dist/chunks/chunk.LCEGCF5S.js:
@awesome.me/webawesome/dist/chunks/chunk.C6MKRB3S.js:
@awesome.me/webawesome/dist/components/callout/callout.js:
@awesome.me/webawesome/dist/chunks/chunk.ATI2KDM5.js:
@awesome.me/webawesome/dist/chunks/chunk.S37D42WK.js:
@awesome.me/webawesome/dist/components/card/card.js:
@awesome.me/webawesome/dist/chunks/chunk.6SNQOYNK.js:
@awesome.me/webawesome/dist/components/carousel/autoplay-controller.js:
@awesome.me/webawesome/dist/chunks/chunk.EF25YJJE.js:
@awesome.me/webawesome/dist/chunks/chunk.KNJT7KBU.js:
@awesome.me/webawesome/dist/chunks/chunk.YNIMM2NM.js:
@awesome.me/webawesome/dist/chunks/chunk.SZDB43TX.js:
@awesome.me/webawesome/dist/components/carousel/carousel.js:
@awesome.me/webawesome/dist/components/carousel/scroll-controller.js:
@awesome.me/webawesome/dist/chunks/chunk.QIYW4R5Z.js:
@awesome.me/webawesome/dist/chunks/chunk.IADD4USH.js:
@awesome.me/webawesome/dist/components/carousel-item/carousel-item.js:
@awesome.me/webawesome/dist/chunks/chunk.YB6263IP.js:
@awesome.me/webawesome/dist/chunks/chunk.GWSUX3V5.js:
@awesome.me/webawesome/dist/chunks/chunk.5LXXXELE.js:
@awesome.me/webawesome/dist/chunks/chunk.J32UEG6L.js:
@awesome.me/webawesome/dist/components/checkbox/checkbox.js:
@awesome.me/webawesome/dist/chunks/chunk.D4WM2KLE.js:
@awesome.me/webawesome/dist/chunks/chunk.JXIBJVJH.js:
@awesome.me/webawesome/dist/components/checkbox-group/checkbox-group.js:
@awesome.me/webawesome/dist/chunks/chunk.WYNTFJHW.js:
@awesome.me/webawesome/dist/chunks/chunk.2ZAJEMB4.js:
@awesome.me/webawesome/dist/chunks/chunk.52WA2DJO.js:
@awesome.me/webawesome/dist/chunks/chunk.XZOAK3IQ.js:
@awesome.me/webawesome/dist/chunks/chunk.74VBHNIB.js:
@awesome.me/webawesome/dist/chunks/chunk.JTOY5KP3.js:
@awesome.me/webawesome/dist/chunks/chunk.DOFHHKB4.js:
@awesome.me/webawesome/dist/chunks/chunk.ODECC6XW.js:
@awesome.me/webawesome/dist/chunks/chunk.SRXHLO73.js:
@awesome.me/webawesome/dist/chunks/chunk.ZWQCGLB5.js:
@awesome.me/webawesome/dist/chunks/chunk.HS5AYC6E.js:
@awesome.me/webawesome/dist/chunks/chunk.K442ELDU.js:
@awesome.me/webawesome/dist/components/color-picker/color-picker.js:
@awesome.me/webawesome/dist/chunks/chunk.X5P46BFE.js:
@awesome.me/webawesome/dist/chunks/chunk.SBVVUGYC.js:
@awesome.me/webawesome/dist/components/comparison/comparison.js:
@awesome.me/webawesome/dist/chunks/chunk.NY2PQ35L.js:
@awesome.me/webawesome/dist/chunks/chunk.YDWBRJAR.js:
@awesome.me/webawesome/dist/chunks/chunk.FDOKO2GP.js:
@awesome.me/webawesome/dist/chunks/chunk.TKL7YZKI.js:
@awesome.me/webawesome/dist/chunks/chunk.4ZAKP7NY.js:
@awesome.me/webawesome/dist/chunks/chunk.MQODJ75V.js:
@awesome.me/webawesome/dist/chunks/chunk.3NKIHICW.js:
@awesome.me/webawesome/dist/chunks/chunk.PX3HMKF7.js:
@awesome.me/webawesome/dist/chunks/chunk.JHKMGJRC.js:
@awesome.me/webawesome/dist/components/copy-button/copy-button.js:
@awesome.me/webawesome/dist/chunks/chunk.W62SLQ7P.js:
@awesome.me/webawesome/dist/chunks/chunk.EAX632CT.js:
@awesome.me/webawesome/dist/components/details/details.js:
@awesome.me/webawesome/dist/chunks/chunk.VQZ46MYI.js:
@awesome.me/webawesome/dist/chunks/chunk.RMZ7BVDM.js:
@awesome.me/webawesome/dist/chunks/chunk.XTG2LNFG.js:
@awesome.me/webawesome/dist/chunks/chunk.T25WW44Q.js:
@awesome.me/webawesome/dist/components/dialog/dialog.js:
@awesome.me/webawesome/dist/chunks/chunk.CZSN7KEZ.js:
@awesome.me/webawesome/dist/chunks/chunk.P6YH3RDQ.js:
@awesome.me/webawesome/dist/components/divider/divider.js:
@awesome.me/webawesome/dist/chunks/chunk.LVP7MDLV.js:
@awesome.me/webawesome/dist/chunks/chunk.CZT7O5GA.js:
@awesome.me/webawesome/dist/components/drawer/drawer.js:
@awesome.me/webawesome/dist/chunks/chunk.2LXKNNNE.js:
@awesome.me/webawesome/dist/chunks/chunk.TTJR7FH2.js:
@awesome.me/webawesome/dist/chunks/chunk.Z6IK7DP4.js:
@awesome.me/webawesome/dist/chunks/chunk.5SFAASOS.js:
@awesome.me/webawesome/dist/chunks/chunk.VCKA3KNZ.js:
@awesome.me/webawesome/dist/chunks/chunk.HUPDX6RW.js:
@awesome.me/webawesome/dist/components/dropdown/dropdown.js:
@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js:
@awesome.me/webawesome/dist/chunks/chunk.7UOMBT7P.js:
@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js:
@awesome.me/webawesome/dist/chunks/chunk.MZYZHZ2Z.js:
@awesome.me/webawesome/dist/components/format-date/format-date.js:
@awesome.me/webawesome/dist/chunks/chunk.KZQNOC3J.js:
@awesome.me/webawesome/dist/components/format-number/format-number.js:
@awesome.me/webawesome/dist/components/icon/icon.js:
@awesome.me/webawesome/dist/components/icon/library.default.js:
@awesome.me/webawesome/dist/components/icon/library.js:
@awesome.me/webawesome/dist/components/icon/library.system.js:
@awesome.me/webawesome/dist/chunks/chunk.H7TA73OO.js:
@awesome.me/webawesome/dist/chunks/chunk.2MLO7LVV.js:
@awesome.me/webawesome/dist/chunks/chunk.WGFDW2LC.js:
@awesome.me/webawesome/dist/chunks/chunk.AEEHXP6K.js:
@awesome.me/webawesome/dist/components/include/include.js:
@awesome.me/webawesome/dist/components/include/request.js:
@awesome.me/webawesome/dist/components/input/input.js:
@awesome.me/webawesome/dist/chunks/chunk.XZPLJ4VW.js:
@awesome.me/webawesome/dist/chunks/chunk.RZQFDTS2.js:
@awesome.me/webawesome/dist/chunks/chunk.D2LFBIUE.js:
@awesome.me/webawesome/dist/components/intersection-observer/intersection-observer.js:
@awesome.me/webawesome/dist/chunks/chunk.GJJXMOVT.js:
@awesome.me/webawesome/dist/chunks/chunk.6TNHHCAM.js:
@awesome.me/webawesome/dist/chunks/chunk.TDR7XG37.js:
@awesome.me/webawesome/dist/chunks/chunk.X4MGT3JH.js:
@awesome.me/webawesome/dist/chunks/chunk.4LZ3QWNU.js:
@awesome.me/webawesome/dist/components/known-date/known-date.js:
@awesome.me/webawesome/dist/chunks/chunk.SJQAU36I.js:
@awesome.me/webawesome/dist/chunks/chunk.HDPFPOLR.js:
@awesome.me/webawesome/dist/components/markdown/markdown.js:
@awesome.me/webawesome/dist/chunks/chunk.SUZGY3IK.js:
@awesome.me/webawesome/dist/chunks/chunk.HQ5QSGXH.js:
@awesome.me/webawesome/dist/chunks/chunk.VISTEVIJ.js:
@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer.js:
@awesome.me/webawesome/dist/chunks/chunk.5J72BVE2.js:
@awesome.me/webawesome/dist/chunks/chunk.GXH6L2I5.js:
@awesome.me/webawesome/dist/components/number-input/number-input.js:
@awesome.me/webawesome/dist/chunks/chunk.5IQM4X3Q.js:
@awesome.me/webawesome/dist/chunks/chunk.BLXNKAM6.js:
@awesome.me/webawesome/dist/components/option/option.js:
@awesome.me/webawesome/dist/chunks/chunk.WKX3BKNK.js:
@awesome.me/webawesome/dist/chunks/chunk.NEFE4S5J.js:
@awesome.me/webawesome/dist/chunks/chunk.IOTNNWTV.js:
@awesome.me/webawesome/dist/components/page/page.js:
@awesome.me/webawesome/dist/chunks/chunk.5GSAV6WQ.js:
@awesome.me/webawesome/dist/chunks/chunk.EIOFEH6G.js:
@awesome.me/webawesome/dist/components/popover/popover.js:
@awesome.me/webawesome/dist/components/popup/popup.js:
@awesome.me/webawesome/dist/chunks/chunk.VTVNMJUY.js:
@awesome.me/webawesome/dist/chunks/chunk.A55TGHRU.js:
@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js:
@awesome.me/webawesome/dist/chunks/chunk.3HIXNYAW.js:
@awesome.me/webawesome/dist/chunks/chunk.TM5G7DZ3.js:
@awesome.me/webawesome/dist/components/progress-ring/progress-ring.js:
@awesome.me/webawesome/dist/chunks/chunk.IQFC2JOL.js:
@awesome.me/webawesome/dist/chunks/chunk.BIZW3BJ7.js:
@awesome.me/webawesome/dist/components/qr-code/qr-code.js:
@awesome.me/webawesome/dist/chunks/chunk.BELHQIBT.js:
@awesome.me/webawesome/dist/chunks/chunk.B5X2I7WQ.js:
@awesome.me/webawesome/dist/components/radio/radio.js:
@awesome.me/webawesome/dist/chunks/chunk.GBDIGVZM.js:
@awesome.me/webawesome/dist/chunks/chunk.CE7HN7KT.js:
@awesome.me/webawesome/dist/components/radio-group/radio-group.js:
@awesome.me/webawesome/dist/chunks/chunk.XW6BKGGI.js:
@awesome.me/webawesome/dist/chunks/chunk.TL7XMOW4.js:
@awesome.me/webawesome/dist/chunks/chunk.EEQHWDRU.js:
@awesome.me/webawesome/dist/components/rating/rating.js:
@awesome.me/webawesome/dist/chunks/chunk.6V4K42YA.js:
@awesome.me/webawesome/dist/components/relative-time/relative-time.js:
@awesome.me/webawesome/dist/chunks/chunk.DP5YIFD7.js:
@awesome.me/webawesome/dist/chunks/chunk.DVCOR4TS.js:
@awesome.me/webawesome/dist/chunks/chunk.YQ2KR5FP.js:
@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js:
@awesome.me/webawesome/dist/chunks/chunk.KODRBJHJ.js:
@awesome.me/webawesome/dist/chunks/chunk.QYZN3M4A.js:
@awesome.me/webawesome/dist/components/scroller/scroller.js:
@awesome.me/webawesome/dist/chunks/chunk.YWA3VLUU.js:
@awesome.me/webawesome/dist/chunks/chunk.XDP6OHLP.js:
@awesome.me/webawesome/dist/chunks/chunk.HPULLNVR.js:
@awesome.me/webawesome/dist/chunks/chunk.4AHPL3WP.js:
@awesome.me/webawesome/dist/chunks/chunk.FIMRNSWX.js:
@awesome.me/webawesome/dist/components/select/select.js:
@awesome.me/webawesome/dist/chunks/chunk.JLCUD5BZ.js:
@awesome.me/webawesome/dist/chunks/chunk.XQCWQFLH.js:
@awesome.me/webawesome/dist/components/skeleton/skeleton.js:
@awesome.me/webawesome/dist/chunks/chunk.WKHSZB7X.js:
@awesome.me/webawesome/dist/chunks/chunk.SGRBXQKB.js:
@awesome.me/webawesome/dist/components/slider/slider.js:
@awesome.me/webawesome/dist/components/spinner/spinner.js:
@awesome.me/webawesome/dist/chunks/chunk.ZZ6XGOYX.js:
@awesome.me/webawesome/dist/chunks/chunk.L766RIJV.js:
@awesome.me/webawesome/dist/components/split-panel/split-panel.js:
@awesome.me/webawesome/dist/chunks/chunk.C6UR4IOH.js:
@awesome.me/webawesome/dist/chunks/chunk.N55QN2XQ.js:
@awesome.me/webawesome/dist/components/switch/switch.js:
@awesome.me/webawesome/dist/chunks/chunk.R2GHHEHL.js:
@awesome.me/webawesome/dist/chunks/chunk.IVYLTDB6.js:
@awesome.me/webawesome/dist/components/tab/tab.js:
@awesome.me/webawesome/dist/chunks/chunk.YBFCQDTA.js:
@awesome.me/webawesome/dist/chunks/chunk.SKLR37OM.js:
@awesome.me/webawesome/dist/chunks/chunk.NMA53WZH.js:
@awesome.me/webawesome/dist/chunks/chunk.XXWJGZAN.js:
@awesome.me/webawesome/dist/chunks/chunk.WRIHAZWX.js:
@awesome.me/webawesome/dist/chunks/chunk.KQ3Z6T2I.js:
@awesome.me/webawesome/dist/components/tab-group/tab-group.js:
@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js:
@awesome.me/webawesome/dist/components/tag/tag.js:
@awesome.me/webawesome/dist/chunks/chunk.WRLWYRIB.js:
@awesome.me/webawesome/dist/chunks/chunk.WQHVEIMV.js:
@awesome.me/webawesome/dist/components/textarea/textarea.js:
@awesome.me/webawesome/dist/chunks/chunk.6VPDWW2I.js:
@awesome.me/webawesome/dist/chunks/chunk.PCAAP75J.js:
@awesome.me/webawesome/dist/chunks/chunk.52DIAFOY.js:
@awesome.me/webawesome/dist/components/time-input/time-input.js:
@awesome.me/webawesome/dist/components/tooltip/tooltip.js:
@awesome.me/webawesome/dist/chunks/chunk.LCFSCRUJ.js:
@awesome.me/webawesome/dist/chunks/chunk.ZSEFTQAO.js:
@awesome.me/webawesome/dist/chunks/chunk.26QE47KB.js:
@awesome.me/webawesome/dist/chunks/chunk.U36KZLSQ.js:
@awesome.me/webawesome/dist/chunks/chunk.FYKN76UA.js:
@awesome.me/webawesome/dist/chunks/chunk.AG44H7MD.js:
@awesome.me/webawesome/dist/chunks/chunk.Q6XMGFWJ.js:
@awesome.me/webawesome/dist/chunks/chunk.VT2OVZ4B.js:
@awesome.me/webawesome/dist/chunks/chunk.HMSEFRQL.js:
@awesome.me/webawesome/dist/chunks/chunk.52PSTI2X.js:
@awesome.me/webawesome/dist/chunks/chunk.2YNYVFLS.js:
@awesome.me/webawesome/dist/components/tree/tree.js:
@awesome.me/webawesome/dist/components/tree-item/tree-item.js:
@awesome.me/webawesome/dist/chunks/chunk.GN6FNBVQ.js:
@awesome.me/webawesome/dist/chunks/chunk.K3QPKZNZ.js:
@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame.js:
@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame.styles.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)

lit-html/directives/class-map.js:
lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
lit-html/directives/range.js:
lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
