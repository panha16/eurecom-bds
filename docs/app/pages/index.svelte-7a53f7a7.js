import{S as z,i as B,s as D,e as m,t as y,k as P,c as d,a as j,h as R,d as i,m as S,b as _,g as u,F as k,j as C,l as F,I as H,N as G}from"../chunks/vendor-eb6f8690.js";function I(r,t,o){const e=r.slice();return e[1]=t[o],e}function x(r){let t,o,e=r[1].title+"",s,c,a,f,v=r[1].description+"",g,q,h,p,b,E;return{c(){t=m("a"),o=m("h2"),s=y(e),a=P(),f=m("p"),g=y(v),q=P(),h=m("p"),p=m("a"),b=y("Read More"),this.h()},l(l){t=d(l,"A",{class:!0,href:!0});var n=j(t);o=d(n,"H2",{class:!0});var w=j(o);s=R(w,e),w.forEach(i),n.forEach(i),a=S(l),f=d(l,"P",{class:!0});var A=j(f);g=R(A,v),A.forEach(i),q=S(l),h=d(l,"P",{class:!0});var M=j(h);p=d(M,"A",{href:!0,class:!0});var N=j(p);b=R(N,"Read More"),N.forEach(i),M.forEach(i),this.h()},h(){_(o,"class","svelte-1qclsjk"),_(t,"class","title svelte-1qclsjk"),_(t,"href",c="/posts/"+r[1].slug),_(f,"class","svelte-1qclsjk"),_(p,"href",E="/posts/"+r[1].slug),_(p,"class","svelte-1qclsjk"),_(h,"class","read-more svelte-1qclsjk")},m(l,n){u(l,t,n),k(t,o),k(o,s),u(l,a,n),u(l,f,n),k(f,g),u(l,q,n),u(l,h,n),k(h,p),k(p,b)},p(l,n){n&1&&e!==(e=l[1].title+"")&&C(s,e),n&1&&c!==(c="/posts/"+l[1].slug)&&_(t,"href",c),n&1&&v!==(v=l[1].description+"")&&C(g,v),n&1&&E!==(E="/posts/"+l[1].slug)&&_(p,"href",E)},d(l){l&&i(t),l&&i(a),l&&i(f),l&&i(q),l&&i(h)}}}function J(r){let t,o=r[0],e=[];for(let s=0;s<o.length;s+=1)e[s]=x(I(r,o,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=F()},l(s){for(let c=0;c<e.length;c+=1)e[c].l(s);t=F()},m(s,c){for(let a=0;a<e.length;a+=1)e[a].m(s,c);u(s,t,c)},p(s,[c]){if(c&1){o=s[0];let a;for(a=0;a<o.length;a+=1){const f=I(s,o,a);e[a]?e[a].p(f,c):(e[a]=x(f),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=o.length}},i:H,o:H,d(s){G(e,s),s&&i(t)}}}const O=async({fetch:r})=>({props:{posts:await(await r("/api/posts.json")).json()}});function K(r,t,o){let{posts:e}=t;return r.$$set=s=>{"posts"in s&&o(0,e=s.posts)},[e]}class Q extends z{constructor(t){super();B(this,t,K,J,D,{posts:0})}}export{Q as default,O as load};