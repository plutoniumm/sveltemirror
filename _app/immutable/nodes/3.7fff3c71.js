import{s as Ee,f as s,a as l,l as fe,B as qe,g as o,C as m,d as N,c as a,h as Pe,m as ue,j as Se,k as je,x as n,i as Re,y as Ie}from"../chunks/scheduler.d5f951d9.js";import{S as ze,i as Be,b as C,d as _,m as y,a as b,t as H,e as M}from"../chunks/index.852cda47.js";import{C as A,d as F,h as U,R as Ne}from"../chunks/tomorrow.caa7b518.js";function Ae(i){let d,ce=`body {
      background: #eef;
    }`,G,e,T,ve="Sveltemirror 📚",V,w,ge=`This is a collection of Svelte components that use
    <a href="https://codemirror.net/">CodeMirror</a> to provide code editing functionality.`,W,k,$e="Getting Started",Y,L,xe="To get started, install the package from npm:",K,p,Ce='<code class="language-bash">npm install sveltemirror</code>',Q,P,_e="Usage",X,S,ye="Basic",Z,f,ee,u,te,j,be="Styling",ne,R,He=`The editor can accept props to be passed as styles to the editor and also
    custom themes`,re,c,le,v,ae,E,Me="Renderer",se,q,Te=`For ease of use a barebones iframe renderer is provided. The renderer
    accepts an optional string preprocess function that can be used to modify
    the code before it is rendered.`,oe,g,ie,h,$,me,x,de,I,we="<br/>",he,z,ke="<br/>",pe,B,Le="<br/>",J;return f=new A({props:{readonly:!0,class:"rx10 m10",theme:F,value:`<script>
    import CodeMirror from "sveltemirror";
    import { html } from "@codemirror/lang-html";

    let value = "${i[0].html}";
<\/script>

<CodeMirror bind:value lang={html()} />`}}),u=new A({props:{lang:U(),value:i[0].html}}),c=new A({props:{readonly:!0,class:"rx10 m10",theme:F,value:`<script>
    import CodeMirror from "sveltemirror";
    import { html } from "@codemirror/lang-html";
    import { dracula } from "@codemirror/theme-one-dark";

    let value = "${i[0].html}";
<\/script>

  <CodeMirror
    bind:value
    lang={html()}
    theme={dracula}
    styles={${JSON.stringify(i[0].style,null,2).split(`
`).map(De).join(`
`).trim()}}
  />`}}),v=new A({props:{lang:U(),theme:F,styles:i[0].style,value:i[0].html}}),g=new A({props:{readonly:!0,class:"rx10 m10",theme:F,value:`<script>
    import CodeMirror, { Renderer } from "sveltemirror";
    import { html } from "@codemirror/lang-html";
    import { dracula } from "@codemirror/theme-one-dark";

    let value = "${i[0].html}";
  <\/script>

    <div style="display:flex;"
      <CodeMirror
        bind:value
        theme={dracula}
        styles={{
          "&": {
            height: "150px",
          },
        }}
        lang={html()}
      />

      <Renderer
        bind:value
        preprocess={(v) => "Hiiiii" + v}
      />
    </div>`}}),$=new A({props:{lang:U(),theme:F,value:i[0].html,styles:{"&":{height:"150px"}}}}),x=new Ne({props:{lang:U(),value:i[0].html,preprocess:Fe}}),{c(){d=s("style"),d.textContent=ce,G=l(),e=s("main"),T=s("h1"),T.textContent=ve,V=l(),w=s("p"),w.innerHTML=ge,W=l(),k=s("h2"),k.textContent=$e,Y=l(),L=s("p"),L.textContent=xe,K=l(),p=s("pre"),p.innerHTML=Ce,Q=l(),P=s("h2"),P.textContent=_e,X=l(),S=s("h3"),S.textContent=ye,Z=fe(`
  The most basic usage for just the editor is as follows:

  
  `),C(f.$$.fragment),ee=fe(`

  It should create an editor that looks like this:

  `),C(u.$$.fragment),te=l(),j=s("h3"),j.textContent=be,ne=l(),R=s("p"),R.textContent=He,re=l(),C(c.$$.fragment),le=fe(`

  this will create an editor that looks like this:
  `),C(v.$$.fragment),ae=l(),E=s("h2"),E.textContent=Me,se=l(),q=s("p"),q.textContent=Te,oe=l(),C(g.$$.fragment),ie=l(),h=s("div"),C($.$$.fragment),me=l(),C(x.$$.fragment),de=l(),I=s("p"),I.innerHTML=we,he=l(),z=s("p"),z.innerHTML=ke,pe=l(),B=s("p"),B.innerHTML=Le,this.h()},l(r){const D=qe("svelte-zpasi5",document.head);d=o(D,"STYLE",{"data-svelte-h":!0}),m(d)!=="svelte-1geob70"&&(d.textContent=ce),D.forEach(N),G=a(r),e=o(r,"MAIN",{class:!0,style:!0});var t=Pe(e);T=o(t,"H1",{"data-svelte-h":!0}),m(T)!=="svelte-1gc0q03"&&(T.textContent=ve),V=a(t),w=o(t,"P",{"data-svelte-h":!0}),m(w)!=="svelte-11e6mmd"&&(w.innerHTML=ge),W=a(t),k=o(t,"H2",{"data-svelte-h":!0}),m(k)!=="svelte-1ris1ql"&&(k.textContent=$e),Y=a(t),L=o(t,"P",{"data-svelte-h":!0}),m(L)!=="svelte-13gf789"&&(L.textContent=xe),K=a(t),p=o(t,"PRE",{class:!0,"data-svelte-h":!0}),m(p)!=="svelte-ptdm6x"&&(p.innerHTML=Ce),Q=a(t),P=o(t,"H2",{"data-svelte-h":!0}),m(P)!=="svelte-dnbfhr"&&(P.textContent=_e),X=a(t),S=o(t,"H3",{"data-svelte-h":!0}),m(S)!=="svelte-g9rhso"&&(S.textContent=ye),Z=ue(t,`
  The most basic usage for just the editor is as follows:

  
  `),_(f.$$.fragment,t),ee=ue(t,`

  It should create an editor that looks like this:

  `),_(u.$$.fragment,t),te=a(t),j=o(t,"H3",{"data-svelte-h":!0}),m(j)!=="svelte-qoco7w"&&(j.textContent=be),ne=a(t),R=o(t,"P",{"data-svelte-h":!0}),m(R)!=="svelte-1cu6me4"&&(R.textContent=He),re=a(t),_(c.$$.fragment,t),le=ue(t,`

  this will create an editor that looks like this:
  `),_(v.$$.fragment,t),ae=a(t),E=o(t,"H2",{"data-svelte-h":!0}),m(E)!=="svelte-9l2j21"&&(E.textContent=Me),se=a(t),q=o(t,"P",{"data-svelte-h":!0}),m(q)!=="svelte-1mz6swx"&&(q.textContent=Te),oe=a(t),_(g.$$.fragment,t),ie=a(t),h=o(t,"DIV",{style:!0});var O=Pe(h);_($.$$.fragment,O),me=a(O),_(x.$$.fragment,O),O.forEach(N),de=a(t),I=o(t,"P",{"data-svelte-h":!0}),m(I)!=="svelte-pntvnr"&&(I.innerHTML=we),he=a(t),z=o(t,"P",{"data-svelte-h":!0}),m(z)!=="svelte-pntvnr"&&(z.innerHTML=ke),pe=a(t),B=o(t,"P",{"data-svelte-h":!0}),m(B)!=="svelte-pntvnr"&&(B.innerHTML=Le),t.forEach(N),this.h()},h(){Se(p,"class","svelte-98j2lk"),je(h,"display","flex"),Se(e,"class","mx-a"),je(e,"width","min(100%, 600px)")},m(r,D){n(document.head,d),Re(r,G,D),Re(r,e,D),n(e,T),n(e,V),n(e,w),n(e,W),n(e,k),n(e,Y),n(e,L),n(e,K),n(e,p),n(e,Q),n(e,P),n(e,X),n(e,S),n(e,Z),y(f,e,null),n(e,ee),y(u,e,null),n(e,te),n(e,j),n(e,ne),n(e,R),n(e,re),y(c,e,null),n(e,le),y(v,e,null),n(e,ae),n(e,E),n(e,se),n(e,q),n(e,oe),y(g,e,null),n(e,ie),n(e,h),y($,h,null),n(h,me),y(x,h,null),n(e,de),n(e,I),n(e,he),n(e,z),n(e,pe),n(e,B),J=!0},p:Ie,i(r){J||(b(f.$$.fragment,r),b(u.$$.fragment,r),b(c.$$.fragment,r),b(v.$$.fragment,r),b(g.$$.fragment,r),b($.$$.fragment,r),b(x.$$.fragment,r),J=!0)},o(r){H(f.$$.fragment,r),H(u.$$.fragment,r),H(c.$$.fragment,r),H(v.$$.fragment,r),H(g.$$.fragment,r),H($.$$.fragment,r),H(x.$$.fragment,r),J=!1},d(r){r&&(N(G),N(e)),N(d),M(f),M(u),M(c),M(v),M(g),M($),M(x)}}}const De=i=>"	"+i,Fe=i=>"Hiiiii"+i;function Ge(i){return[{html:"<h1> Hi there! </h1>",style:{"&":{width:"500px",maxWidth:"100%",height:"100px"}}}]}class Ve extends ze{constructor(d){super(),Be(this,d,Ge,Ae,Ee,{})}}export{Ve as component};
