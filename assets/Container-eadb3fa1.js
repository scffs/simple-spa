var r=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;import{u as i,c as f}from"./ThemeProvider-d92d51b7.js";import{r as l,j as c}from"./index-b9385345.js";function p(){return p=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},p.apply(this,arguments)}function u(r,e){if(null==r)return{};var t,a,n={},o=Object.keys(r);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=r[t]);return n}const b=l.forwardRef(((r,l)=>{var p=r,{bsPrefix:u,fluid:b=!1,as:O="div",className:v}=p,d=((r,e)=>{var t={};for(var s in r)n.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(null!=r&&a)for(var s of a(r))e.indexOf(s)<0&&o.call(r,s)&&(t[s]=r[s]);return t})(p,["bsPrefix","fluid","as","className"]);const j=i(u,"container"),y="string"==typeof b?`-${b}`:"-fluid";return c.jsx(O,(m=((r,e)=>{for(var t in e||(e={}))n.call(e,t)&&s(r,t,e[t]);if(a)for(var t of a(e))o.call(e,t)&&s(r,t,e[t]);return r})({ref:l},d),P={className:f(v,b?`${j}${y}`:j)},e(m,t(P))));var m,P}));b.displayName="Container";const O=b;export{O as C,p as _,u as a};