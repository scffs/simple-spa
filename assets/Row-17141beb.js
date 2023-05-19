var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,c=(r,a,s)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,l=(e,r)=>{for(var a in r||(r={}))o.call(r,a)&&c(e,a,r[a]);if(s)for(var a of s(r))t.call(r,a)&&c(e,a,r[a]);return e},n=(e,s)=>r(e,a(s)),i=(e,r)=>{var a={};for(var c in e)o.call(e,c)&&r.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&s)for(var c of s(e))r.indexOf(c)<0&&t.call(e,c)&&(a[c]=e[c]);return a};import{u as d,c as f,a as m,b}from"./ThemeProvider-d92d51b7.js";import{r as p,j as x}from"./index-b9385345.js";import{c as u,d as v}from"./createWithBsPrefix-c975525d.js";import{C as N}from"./CardHeaderContext-b58cc7f1.js";const j=p.forwardRef(((e,r)=>{var a=e,{bsPrefix:s,className:o,variant:t,as:c="img"}=a,n=i(a,["bsPrefix","className","variant","as"]);const m=d(s,"card-img");return x.jsx(c,l({ref:r,className:f(t?`${m}-${t}`:m,o)},n))}));j.displayName="CardImg";const y=j,P=p.forwardRef(((e,r)=>{var a=e,{bsPrefix:s,className:o,as:t="div"}=a,c=i(a,["bsPrefix","className","as"]);const m=d(s,"card-header"),b=p.useMemo((()=>({cardHeaderBsPrefix:m})),[m]);return x.jsx(N.Provider,{value:b,children:x.jsx(t,n(l({ref:r},c),{className:f(o,m)}))})}));P.displayName="CardHeader";const $=P,h=v("h5"),g=v("h6"),O=u("card-body"),C=u("card-title",{Component:h}),w=u("card-subtitle",{Component:g}),R=u("card-link",{Component:"a"}),H=u("card-text",{Component:"p"}),I=u("card-footer"),B=u("card-img-overlay"),E=p.forwardRef(((e,r)=>{var a=e,{bsPrefix:s,className:o,bg:t,text:c,border:m,body:b=!1,children:p,as:u="div"}=a,v=i(a,["bsPrefix","className","bg","text","border","body","children","as"]);const N=d(s,"card");return x.jsx(u,n(l({ref:r},v),{className:f(o,N,t&&`bg-${t}`,c&&`text-${c}`,m&&`border-${m}`),children:b?x.jsx(O,{children:p}):p}))}));E.displayName="Card";const T=Object.assign(E,{Img:y,Title:C,Subtitle:w,Body:O,Link:R,Text:H,Header:$,Footer:I,ImgOverlay:B});const k=p.forwardRef(((e,r)=>{const[a,...s]=function(e){var r=e,{as:a,bsPrefix:s,className:o}=r,t=i(r,["as","bsPrefix","className"]);s=d(s,"col");const c=m(),p=b(),x=[],u=[];return c.forEach((e=>{const r=t[e];let a,o,c;delete t[e],"object"==typeof r&&null!=r?({span:a,offset:o,order:c}=r):a=r;const l=e!==p?`-${e}`:"";a&&x.push(!0===a?`${s}${l}`:`${s}${l}-${a}`),null!=c&&u.push(`order${l}-${c}`),null!=o&&u.push(`offset${l}-${o}`)})),[n(l({},t),{className:f(o,...x,...u)}),{as:a,bsPrefix:s,spans:x}]}(e),o=a,{className:t}=o,c=i(o,["className"]),[{as:p="div",bsPrefix:u,spans:v}]=s;return x.jsx(p,n(l({},c),{ref:r,className:f(t,!v.length&&u)}))}));k.displayName="Col";const S=k,D=p.forwardRef(((e,r)=>{var a=e,{bsPrefix:s,className:o,as:t="div"}=a,c=i(a,["bsPrefix","className","as"]);const p=d(s,"row"),u=m(),v=b(),N=`${p}-cols`,j=[];return u.forEach((e=>{const r=c[e];let a;delete c[e],null!=r&&"object"==typeof r?({cols:a}=r):a=r;const s=e!==v?`-${e}`:"";null!=a&&j.push(`${N}${s}-${a}`)})),x.jsx(t,n(l({ref:r},c),{className:f(o,p,...j)}))}));D.displayName="Row";const F=D;export{T as C,F as R,S as a};
