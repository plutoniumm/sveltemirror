import{s as G,A as J,p as S,f as w,a as z,B as K,g as $,C as O,d as p,c as R,h as M,j as E,x as k,i as B,D as Q,E as j,o as U}from"../chunks/scheduler.d5f951d9.js";import{S as X,i as Z,f as T,b as L,d as V,m as Y,a as q,t as H,e as N}from"../chunks/index.852cda47.js";import{C as x,R as ee,h as ne,o as te}from"../chunks/index.67a2fe99.js";function se(n,d){const i={},a={},s={$$scope:1};let l=n.length;for(;l--;){const r=n[l],c=d[l];if(c){for(const o in r)o in c||(a[o]=1);for(const o in c)s[o]||(i[o]=c[o],s[o]=1);n[l]=c}else for(const o in r)s[o]=1}for(const r in a)r in i||(i[r]=void 0);return i}function re(n){return typeof n=="object"&&n!==null?n:{}}const ae=`<html lang="en">

<head>
  <title>This is Some Basic HTML Stuff</title>

  <link rel="stylesheet" href="https://manav.ch/atomic.css">
  <style>
    .card {
      background: linear-gradient(135deg, red, purple);
      color: #fff;
    }
  </style>
</head>

<body>
  <!-- card -->
  <div class="f rpm-20 j-bw card">
    <img src="./logo.svg" alt="sveltemirror logo" height="150px" width="150px" style="margin-right: 10px;">

    <div class="body">
      <h1 class="m0" style="margin-bottom: .25em;">
        Sveltemirror
      </h1>

      <p>
        A codemirror wrapper for svelte. It is easily customizable and and completely embeddable with postMessage.
      </p>

      <a href="https://github.com/plutoniumm/sveltemirror" class="btn">Read More</a>
    </div>
  </div>
</body>

</html>`;function oe(n){let d,i=`.cm-scroller {
            overflow: auto;
            min-height: 100vh;
        }`,a,s,l,r,c,o,v,f,t,h,y,C,A;const g=[{styles:{"&":{fontSize:"16px",height:"100%",width:"100%"}}},{delay:500},n[2]];function P(e){n[4](e)}function W(e){n[5](e)}let b={};for(let e=0;e<g.length;e+=1)b=J(b,g[e]);n[0]!==void 0&&(b.value=n[0]),n[1]!==void 0&&(b.view=n[1]),r=new x({props:b}),S.push(()=>T(r,"value",P)),S.push(()=>T(r,"view",W));function F(e){n[7](e)}let D={preprocess:n[6]};return n[0]!==void 0&&(D.value=n[0]),t=new ee({props:D}),S.push(()=>T(t,"value",F)),{c(){d=w("style"),d.textContent=i,a=z(),s=w("main"),l=w("div"),L(r.$$.fragment),v=z(),f=w("div"),L(t.$$.fragment),this.h()},l(e){const u=K("svelte-1c2th7a",document.head);d=$(u,"STYLE",{"data-svelte-h":!0}),O(d)!=="svelte-ffbykj"&&(d.textContent=i),u.forEach(p),a=R(e),s=$(e,"MAIN",{class:!0});var m=M(s);l=$(m,"DIV",{class:!0});var _=M(l);V(r.$$.fragment,_),_.forEach(p),v=R(m),f=$(m,"DIV",{class:!0});var I=M(f);V(t.$$.fragment,I),I.forEach(p),m.forEach(p),this.h()},h(){E(l,"class","editor svelte-12sv88i"),E(f,"class","frame svelte-12sv88i"),E(s,"class","f svelte-12sv88i")},m(e,u){k(document.head,d),B(e,a,u),B(e,s,u),k(s,l),Y(r,l,null),k(s,v),k(s,f),Y(t,f,null),y=!0,C||(A=Q(window,"message",n[3]),C=!0)},p(e,[u]){const m=u&4?se(g,[g[0],g[1],re(e[2])]):{};!c&&u&1&&(c=!0,m.value=e[0],j(()=>c=!1)),!o&&u&2&&(o=!0,m.view=e[1],j(()=>o=!1)),r.$set(m);const _={};u&2&&(_.preprocess=e[6]),!h&&u&1&&(h=!0,_.value=e[0],j(()=>h=!1)),t.$set(_)},i(e){y||(q(r.$$.fragment,e),q(t.$$.fragment,e),y=!0)},o(e){H(r.$$.fragment,e),H(t.$$.fragment,e),y=!1},d(e){e&&(p(a),p(s)),p(d),N(r),N(t),C=!1,A()}}}function ie(n,d,i){let a="",s,l={tabSize:2,placeholder:null,lang:ne(),theme:te,basic:!0,useTab:!0,editable:!0,lineWrapping:!0,readonly:!1};const r=({data:t})=>{if(t.type!=="code")return 0;const{code:h}=t;i(0,a=h)};U(()=>i(0,a=ae));function c(t){a=t,i(0,a)}function o(t){s=t,i(1,s)}const v=t=>t=`<div class='p20 m10'>
                    You can add modifiers also! Cursor At:
                    ${s.state.selection.main.head}
                </div>`+t;function f(t){a=t,i(0,a)}return[a,s,l,r,c,o,v,f]}class ue extends X{constructor(d){super(),Z(this,d,ie,oe,G,{})}}export{ue as component};
