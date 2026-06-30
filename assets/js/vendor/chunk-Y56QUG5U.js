import{g as l,h as p}from"./chunk-D3CDZWZC.js";var g=t=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,r)}):customElements.define(t,r)};var f={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:p},h=(t=f,r,e)=>{let{kind:o,metadata:a}=e,i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(e.name,t),o==="accessor"){let{name:c}=e;return{set(n){let s=r.get.call(this);r.set.call(this,n),this.requestUpdate(c,s,t,!0,n)},init(n){return n!==void 0&&this.C(c,void 0,t,n),n}}}if(o==="setter"){let{name:c}=e;return function(n){let s=this[c];r.call(this,n),this.requestUpdate(c,s,t,!0,n)}}throw Error("Unsupported decorator location: "+o)};function d(t){return(r,e)=>typeof e=="object"?h(t,r,e):((o,a,i)=>{let c=a.hasOwnProperty(i);return a.constructor.createProperty(i,o),c?Object.getOwnPropertyDescriptor(a,i):void 0})(t,r,e)}function j(t){return d({...t,state:!0,attribute:!1})}function O(t){return(r,e)=>{let o=typeof r=="function"?r:r[e];Object.assign(o,t)}}var u=(t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e);function R(t,r){return(e,o,a)=>{let i=c=>c.renderRoot?.querySelector(t)??null;if(r){let{get:c,set:n}=typeof o=="object"?e:a??(()=>{let s=Symbol();return{get(){return this[s]},set(m){this[s]=m}}})();return u(e,o,{get(){let s=c.call(this);return s===void 0&&(s=i(this),(s!==null||this.hasUpdated)&&n.call(this,s)),s}})}return u(e,o,{get(){return i(this)}})}}var y;function U(t){return(r,e)=>u(r,e,{get(){return(this.renderRoot??(y??=document.createDocumentFragment())).querySelectorAll(t)}})}function N(t){return(r,e)=>u(r,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function k(t){return(r,e)=>{let{slot:o,selector:a}=t??{},i="slot"+(o?`[name=${o}]`:":not([name])");return u(r,e,{get(){let c=this.renderRoot?.querySelector(i),n=c?.assignedElements(t)??[];return a===void 0?n:n.filter(s=>s.matches(a))}})}}function I(t){return(r,e)=>{let{slot:o}=t??{},a="slot"+(o?`[name=${o}]`:":not([name])");return u(r,e,{get(){return this.renderRoot?.querySelector(a)?.assignedNodes(t)??[]}})}}export{g as a,h as b,d as c,j as d,O as e,R as f,U as g,N as h,k as i,I as j};
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
