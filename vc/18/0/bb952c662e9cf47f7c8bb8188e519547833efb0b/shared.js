/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

Includes parts of:

- lodash.js <http://lodash.com>
  Copyright jQuery Foundation and other contributors <https://jquery.org/>
  Released under MIT license <https://lodash.com/license>
  Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

*/
(function(){
var t=function(){
function t(t,n){
return t.set(n[0],n[1]),t;
}
function n(t,n){
return t.add(n),t;
}
function r(t,n,r){
switch(r.length){
case 0:
return t.call(n);

case 1:
return t.call(n,r[0]);

case 2:
return t.call(n,r[0],r[1]);

case 3:
return t.call(n,r[0],r[1],r[2]);
}
return t.apply(n,r);
}
function e(t,n){
for(var r=-1,e=null==t?0:t.length;++r<e&&n(t[r],r,t)!==!1;);
return t;
}
function o(t,n){
for(var r=-1,e=null==t?0:t.length;++r<e;)if(!n(t[r],r,t))return!1;
return!0;
}
function i(t,n){
for(var r=-1,e=null==t?0:t.length,o=0,i=[];++r<e;){
var u=t[r];
n(u,r,t)&&(i[o++]=u);
}
return i;
}
function u(t,n){
return!!(null==t?0:t.length)&&j(t,n,0)>-1;
}
function f(t,n,r){
for(var e=-1,o=null==t?0:t.length;++e<o;)if(r(n,t[e]))return!0;
return!1;
}
function c(t,n){
for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);
return o;
}
function $(t,n){
for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];
return t;
}
function s(t,n,r,e){
var o=-1,i=null==t?0:t.length;
for(e&&i&&(r=t[++o]);++o<i;)r=n(r,t[o],o,t);
return r;
}
function a(t,n){
for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;
return!1;
}
function h(t){
return t.split("");
}
function l(t,n,r,e){
for(var o=t.length,i=r+(e?1:-1);e?i--:++i<o;)if(n(t[i],i,t))return i;
return-1;
}
function j(t,n,r){
return n===n?A(t,n,r):l(t,_,r);
}
function _(t){
return t!==t;
}
function g(t){
return function(n){
return null==n?yo:n[t];
};
}
function p(t,n){
for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);
return e;
}
function v(t){
return function(n){
return t(n);
};
}
function y(t,n){
return c(n,function(n){
return t[n];
});
}
function d(t,n){
return t.has(n);
}
function b(t,n){
return null==t?yo:t[n];
}
function m(t){
return Zi.test(t);
}
function w(t){
for(var n,r=[];!(n=t.next()).done;)r.push(n.value);
return r;
}
function x(t){
var n=-1,r=Array(t.size);
return t.forEach(function(t,e){
r[++n]=[e,t];
}),r;
}
function O(t,n){
return function(r){
return t(n(r));
};
}
function M(t){
var n=-1,r=Array(t.size);
return t.forEach(function(t){
r[++n]=t;
}),r;
}
function A(t,n,r){
for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;
return-1;
}
function S(t){
return m(t)?k(t):au(t);
}
function C(t){
return m(t)?L(t):h(t);
}
function k(t){
for(var n=Wi.lastIndex=0;Wi.test(t);)++n;
return n;
}
function L(t){
return t.match(Wi)||[];
}
function E(t){
if(Fe(t)&&!pf(t)&&!(t instanceof D)){
if(t instanceof N)return t;
if(pu.call(t,"__wrapped__"))return re(t);
}
return new N(t);
}
function z(){}
function N(t,n){
this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=yo;
}
function D(t){
this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],
this.__takeCount__=Fo,this.__views__=[];
}
function P(t){
var n=-1,r=null==t?0:t.length;
for(this.clear();++n<r;){
var e=t[n];
this.set(e[0],e[1]);
}
}
function F(){
this.__data__=Wu?Wu(null):{},this.size=0;
}
function T(t){
var n=this.has(t)&&delete this.__data__[t];
return this.size-=n?1:0,n;
}
function I(t){
var n=this.__data__;
if(Wu){
var r=n[t];
return r===xo?yo:r;
}
return pu.call(n,t)?n[t]:yo;
}
function B(t){
var n=this.__data__;
return Wu?n[t]!==yo:pu.call(n,t);
}
function H(t,n){
var r=this.__data__;
return this.size+=this.has(t)?0:1,r[t]=Wu&&n===yo?xo:n,this;
}
function q(t){
var n=-1,r=null==t?0:t.length;
for(this.clear();++n<r;){
var e=t[n];
this.set(e[0],e[1]);
}
}
function R(){
this.__data__=[],this.size=0;
}
function U(t){
var n=this.__data__,r=gn(n,t);
return!(0>r||(r==n.length-1?n.pop():Cu.call(n,r,1),--this.size,0));
}
function G(t){
var n=this.__data__,r=gn(n,t);
return 0>r?yo:n[r][1];
}
function V(t){
return gn(this.__data__,t)>-1;
}
function K(t,n){
var r=this.__data__,e=gn(r,t);
return 0>e?(++this.size,r.push([t,n])):r[e][1]=n,this;
}
function W(t){
var n=-1,r=null==t?0:t.length;
for(this.clear();++n<r;){
var e=t[n];
this.set(e[0],e[1]);
}
}
function Z(){
this.size=0,this.__data__={
hash:new P(),
map:new(Uu||q)(),
string:new P()
};
}
function X(t){
var n=Lr(this,t)["delete"](t);
return this.size-=n?1:0,n;
}
function J(t){
return Lr(this,t).get(t);
}
function Q(t){
return Lr(this,t).has(t);
}
function Y(t,n){
var r=Lr(this,t),e=r.size;
return r.set(t,n),this.size+=r.size==e?0:1,this;
}
function tn(t){
var n=-1,r=null==t?0:t.length;
for(this.__data__=new W();++n<r;)this.add(t[n]);
}
function nn(t){
return this.__data__.set(t,xo),this;
}
function rn(t){
return this.__data__.has(t);
}
function en(t){
this.size=(this.__data__=new q(t)).size;
}
function on(){
this.__data__=new q(),this.size=0;
}
function un(t){
var n=this.__data__,r=n["delete"](t);
return this.size=n.size,r;
}
function fn(t){
return this.__data__.get(t);
}
function cn(t){
return this.__data__.has(t);
}
function $n(t,n){
var r=this.__data__;
if(r instanceof q){
var e=r.__data__;
if(!Uu||e.length<mo-1)return e.push([t,n]),this.size=++r.size,this;
r=this.__data__=new W(e);
}
return r.set(t,n),this.size=r.size,this;
}
function sn(t,n){
var r=pf(t),e=!r&&gf(t),o=!r&&!e&&vf(t),i=!r&&!e&&!o&&bf(t),u=r||e||o||i,f=u?p(t.length,String):[],c=f.length;
for(var $ in t)!n&&!pu.call(t,$)||u&&("length"==$||o&&("offset"==$||"parent"==$)||i&&("buffer"==$||"byteLength"==$||"byteOffset"==$)||Br($,c))||f.push($);
return f;
}
function an(t){
var n=t.length;
return n?t[tr(0,n-1)]:yo;
}
function hn(t,n){
return Yr(pr(t),dn(n,0,t.length));
}
function ln(t){
return Yr(pr(t));
}
function jn(t,n,r){
(r===yo||Oe(t[n],r))&&(r!==yo||n in t)||yn(t,n,r);
}
function _n(t,n,r){
var e=t[n];
pu.call(t,n)&&Oe(e,r)&&(r!==yo||n in t)||yn(t,n,r);
}
function gn(t,n){
for(var r=t.length;r--;)if(Oe(t[r][0],n))return r;
return-1;
}
function pn(t,n){
return t&&vr(n,no(n),t);
}
function vn(t,n){
return t&&vr(n,ro(n),t);
}
function yn(t,n,r){
"__proto__"==n&&zu?zu(t,n,{
configurable:!0,
enumerable:!0,
value:r,
writable:!0
}):t[n]=r;
}
function dn(t,n,r){
return t===t&&(r!==yo&&(t=r>=t?t:r),n!==yo&&(t=t>=n?t:n)),t;
}
function bn(t,n,r,o,i,u){
var f,c=n&Mo,$=n&Ao,s=n&So;
if(r&&(f=i?r(t,o,i,u):r(t)),f!==yo)return f;
if(!Pe(t))return t;
var a=pf(t);
if(a){
if(f=Pr(t),!c)return pr(t,f);
}else{
var h=af(t),l=h==Go||h==Vo;
if(vf(t))return $r(t,c);
if(h==Xo||h==To||l&&!i){
if(f=$||l?{}:Fr(t),!c)return $?dr(t,vn(f,t)):yr(t,pn(f,t));
}else{
if(!Ji[h])return i?t:{};
f=Tr(t,h,bn,c);
}
}
u||(u=new en());
var j=u.get(t);
if(j)return j;
u.set(t,f);
var _=s?$?Cr:Sr:$?ro:no,g=a?yo:_(t);
return e(g||t,function(e,o){
g&&(o=e,e=t[o]),_n(f,o,bn(e,n,r,o,t,u));
}),f;
}
function mn(t,n,r,e){
var o=-1,i=u,$=!0,s=t.length,a=[],h=n.length;
if(!s)return a;
r&&(n=c(n,v(r))),e?(i=f,$=!1):n.length>=mo&&(i=d,$=!1,n=new tn(n));
t:for(;++o<s;){
var l=t[o],j=null==r?l:r(l);
if(l=e||0!==l?l:0,$&&j===j){
for(var _=h;_--;)if(n[_]===j)continue t;
a.push(l);
}else i(n,j,e)||a.push(l);
}
return a;
}
function wn(t,n){
var r=!0;
return of(t,function(t,e,o){
return r=!!n(t,e,o);
}),r;
}
function xn(t,n,r){
for(var e=-1,o=t.length;++e<o;){
var i=t[e],u=n(i);
if(null!=u&&(f===yo?u===u&&!Ue(u):r(u,f)))var f=u,c=i;
}
return c;
}
function On(t,n){
var r=[];
return of(t,function(t,e,o){
n(t,e,o)&&r.push(t);
}),r;
}
function Mn(t,n,r,e,o){
var i=-1,u=t.length;
for(r||(r=Ir),o||(o=[]);++i<u;){
var f=t[i];
n>0&&r(f)?n>1?Mn(f,n-1,r,e,o):$(o,f):e||(o[o.length]=f);
}
return o;
}
function An(t,n){
return t&&uf(t,n,no);
}
function Sn(t,n){
return i(n,function(n){
return Ne(t[n]);
});
}
function Cn(t,n){
n=cr(n,t);
for(var r=0,e=n.length;null!=t&&e>r;)t=t[te(n[r++])];
return r&&r==e?t:yo;
}
function kn(t,n,r){
var e=n(t);
return pf(t)?e:$(e,r(t));
}
function Ln(t){
return null==t?t===yo?ei:Zo:Eu&&Eu in Object(t)?Nr(t):Xr(t);
}
function En(t,n){
return t>n;
}
function zn(t,n){
return null!=t&&pu.call(t,n);
}
function Nn(t,n){
return null!=t&&n in Object(t);
}
function Dn(t,n,r){
return t>=Bu(n,r)&&t<Iu(n,r);
}
function Pn(t){
return Fe(t)&&Ln(t)==To;
}
function Fn(t){
return Fe(t)&&Ln(t)==qo;
}
function Tn(t,n,r,e,o){
return t===n||(null==t||null==n||!Fe(t)&&!Fe(n)?t!==t&&n!==n:In(t,n,r,e,Tn,o));
}
function In(t,n,r,e,o,i){
var u=pf(t),f=pf(n),c=u?Io:af(t),$=f?Io:af(n);
c=c==To?Xo:c,$=$==To?Xo:$;
var s=c==Xo,a=$==Xo,h=c==$;
if(h&&vf(t)){
if(!vf(n))return!1;
u=!0,s=!1;
}
if(h&&!s)return i||(i=new en()),u||bf(t)?Or(t,n,r,e,o,i):Mr(t,n,c,r,e,o,i);
if(!(r&Co)){
var l=s&&pu.call(t,"__wrapped__"),j=a&&pu.call(n,"__wrapped__");
if(l||j){
var _=l?t.value():t,g=j?n.value():n;
return i||(i=new en()),o(_,g,r,e,i);
}
}
return!!h&&(i||(i=new en()),Ar(t,n,r,e,o,i));
}
function Bn(t,n,r,e){
var o=r.length,i=o,u=!e;
if(null==t)return!i;
for(t=Object(t);o--;){
var f=r[o];
if(u&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1;
}
for(;++o<i;){
f=r[o];
var c=f[0],$=t[c],s=f[1];
if(u&&f[2]){
if($===yo&&!(c in t))return!1;
}else{
var a=new en();
if(e)var h=e($,s,c,t,n,a);
if(!(h===yo?Tn(s,$,Co|ko,e,a):h))return!1;
}
}
return!0;
}
function Hn(t){
return!(!Pe(t)||Ur(t))&&(Ne(t)?bu:Mi).test(ne(t));
}
function qn(t){
return Fe(t)&&Ln(t)==Yo;
}
function Rn(t){
return Fe(t)&&De(t.length)&&!!Xi[Ln(t)];
}
function Un(t){
return"function"==typeof t?t:null==t?so:"object"==typeof t?pf(t)?Xn(t[0],t[1]):Zn(t):jo(t);
}
function Gn(t){
if(!Gr(t))return Tu(t);
var n=[];
for(var r in Object(t))pu.call(t,r)&&"constructor"!=r&&n.push(r);
return n;
}
function Vn(t){
if(!Pe(t))return Zr(t);
var n=Gr(t),r=[];
for(var e in t)("constructor"!=e||!n&&pu.call(t,e))&&r.push(e);
return r;
}
function Kn(t,n){
return n>t;
}
function Wn(t,n){
var r=-1,e=Me(t)?Array(t.length):[];
return of(t,function(t,o,i){
e[++r]=n(t,o,i);
}),e;
}
function Zn(t){
var n=Er(t);
return 1==n.length&&n[0][2]?Kr(n[0][0],n[0][1]):function(r){
return r===t||Bn(r,t,n);
};
}
function Xn(t,n){
return qr(t)&&Vr(n)?Kr(te(t),n):function(r){
var e=Qe(r,t);
return e===yo&&e===n?to(r,t):Tn(n,e,Co|ko);
};
}
function Jn(t,n,r,e,o){
t!==n&&uf(n,function(i,u){
if(Pe(i))o||(o=new en()),Qn(t,n,u,r,Jn,e,o);else{
var f=e?e(t[u],i,u+"",t,n,o):yo;
f===yo&&(f=i),jn(t,u,f);
}
},ro);
}
function Qn(t,n,r,e,o,i,u){
var f=t[r],c=n[r],$=u.get(c);
if($)return jn(t,r,$),yo;
var s=i?i(f,c,r+"",t,n,u):yo,a=s===yo;
if(a){
var h=pf(c),l=!h&&vf(c),j=!h&&!l&&bf(c);
s=c,h||l||j?pf(f)?s=f:Ae(f)?s=pr(f):l?(a=!1,s=$r(c,!0)):j?(a=!1,s=gr(c,!0)):s=[]:qe(c)||gf(c)?(s=f,
gf(f)?s=Xe(f):(!Pe(f)||e&&Ne(f))&&(s=Fr(c))):a=!1;
}
a&&(u.set(c,s),o(s,c,e,i,u),u["delete"](c)),jn(t,r,s);
}
function Yn(t){
return function(n){
return Cn(n,t);
};
}
function tr(t,n){
return t+Nu(qu()*(n-t+1));
}
function nr(t,n){
return hf(Jr(t,n,so),t+"");
}
function rr(t){
return an(eo(t));
}
function er(t,n){
var r=eo(t);
return Yr(r,dn(n,0,r.length));
}
function or(t){
return Yr(eo(t));
}
function ir(t,n){
var r;
return of(t,function(t,e,o){
return r=n(t,e,o),!r;
}),!!r;
}
function ur(t){
if("string"==typeof t)return t;
if(pf(t))return c(t,ur)+"";
if(Ue(t))return rf?rf.call(t):"";
var n=t+"";
return"0"==n&&1/t==-zo?"-0":n;
}
function fr(t,n,r){
var e=-1,o=u,i=t.length,c=!0,$=[],s=$;
if(r)c=!1,o=f;else if(i>=mo){
var a=n?null:cf(t);
if(a)return M(a);
c=!1,o=d,s=new tn();
}else s=n?[]:$;
t:for(;++e<i;){
var h=t[e],l=n?n(h):h;
if(h=r||0!==h?h:0,c&&l===l){
for(var j=s.length;j--;)if(s[j]===l)continue t;
n&&s.push(l),$.push(h);
}else o(s,l,r)||(s!==$&&s.push(l),$.push(h));
}
return $;
}
function cr(t,n){
return pf(t)?t:qr(t,n)?[t]:lf(Je(t));
}
function $r(t,n){
if(n)return t.slice();
var r=t.length,e=Ou?Ou(r):new t.constructor(r);
return t.copy(e),e;
}
function sr(t){
var n=new t.constructor(t.byteLength);
return new xu(n).set(new xu(t)),n;
}
function ar(t,n){
return new t.constructor(n?sr(t.buffer):t.buffer,t.byteOffset,t.byteLength);
}
function hr(n,r,e){
return s(r?e(x(n),Mo):x(n),t,new n.constructor());
}
function lr(t){
var n=new t.constructor(t.source,wi.exec(t));
return n.lastIndex=t.lastIndex,n;
}
function jr(t,r,e){
return s(r?e(M(t),Mo):M(t),n,new t.constructor());
}
function _r(t){
return nf?Object(nf.call(t)):{};
}
function gr(t,n){
return new t.constructor(n?sr(t.buffer):t.buffer,t.byteOffset,t.length);
}
function pr(t,n){
var r=-1,e=t.length;
for(n||(n=Array(e));++r<e;)n[r]=t[r];
return n;
}
function vr(t,n,r,e){
var o=!r;
r||(r={});
for(var i=-1,u=n.length;++i<u;){
var f=n[i],c=e?e(r[f],t[f],f,r,t):yo;
c===yo&&(c=t[f]),o?yn(r,f,c):_n(r,f,c);
}
return r;
}
function yr(t,n){
return vr(t,$f(t),n);
}
function dr(t,n){
return vr(t,sf(t),n);
}
function br(t){
return nr(function(n,r){
var e=-1,o=r.length,i=o>1?r[o-1]:yo,u=o>2?r[2]:yo;
for(i=t.length>3&&"function"==typeof i?(o--,i):yo,u&&Hr(r[0],r[1],u)&&(i=3>o?yo:i,
o=1),n=Object(n);++e<o;){
var f=r[e];
f&&t(n,f,e,i);
}
return n;
});
}
function mr(t,n){
return function(r,e){
if(null==r)return r;
if(!Me(r))return t(r,e);
for(var o=r.length,i=n?o:-1,u=Object(r);(n?i--:++i<o)&&e(u[i],i,u)!==!1;);
return r;
};
}
function wr(t){
return function(n,r,e){
for(var o=-1,i=Object(n),u=e(n),f=u.length;f--;){
var c=u[t?f:++o];
if(r(i[c],c,i)===!1)break;
}
return n;
};
}
function xr(t){
return function(n,r,e){
var o=Object(n);
if(!Me(n)){
var i=kr(r,3);
n=no(n),r=function(t){
return i(o[t],t,o);
};
}
var u=t(n,r,e);
return u>-1?o[i?n[u]:u]:yo;
};
}
function Or(t,n,r,e,o,i){
var u=r&Co,f=t.length,c=n.length;
if(f!=c&&!(u&&c>f))return!1;
var $=i.get(t);
if($&&i.get(n))return $==n;
var s=-1,h=!0,l=r&ko?new tn():yo;
for(i.set(t,n),i.set(n,t);++s<f;){
var j=t[s],_=n[s];
if(e)var g=u?e(_,j,s,n,t,i):e(j,_,s,t,n,i);
if(g!==yo){
if(g)continue;
h=!1;
break;
}
if(l){
if(!a(n,function(t,n){
if(!d(l,n)&&(j===t||o(j,t,r,e,i)))return l.push(n);
})){
h=!1;
break;
}
}else if(j!==_&&!o(j,_,r,e,i)){
h=!1;
break;
}
}
return i["delete"](t),i["delete"](n),h;
}
function Mr(t,n,r,e,o,i,u){
switch(r){
case ui:
if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;
t=t.buffer,n=n.buffer;

case ii:
return!(t.byteLength!=n.byteLength||!i(new xu(t),new xu(n)));

case Ho:
case qo:
case Wo:
return Oe(+t,+n);

case Uo:
return t.name==n.name&&t.message==n.message;

case Yo:
case ni:
return t==n+"";

case Ko:
var f=x;

case ti:
var c=e&Co;
if(f||(f=M),t.size!=n.size&&!c)return!1;
var $=u.get(t);
if($)return $==n;
e|=ko,u.set(t,n);
var s=Or(f(t),f(n),e,o,i,u);
return u["delete"](t),s;

case ri:
if(nf)return nf.call(t)==nf.call(n);
}
return!1;
}
function Ar(t,n,r,e,o,i){
var u=r&Co,f=Sr(t),c=f.length;
if(c!=Sr(n).length&&!u)return!1;
for(var $=c;$--;){
var s=f[$];
if(!(u?s in n:pu.call(n,s)))return!1;
}
var a=i.get(t);
if(a&&i.get(n))return a==n;
var h=!0;
i.set(t,n),i.set(n,t);
for(var l=u;++$<c;){
s=f[$];
var j=t[s],_=n[s];
if(e)var g=u?e(_,j,s,n,t,i):e(j,_,s,t,n,i);
if(!(g===yo?j===_||o(j,_,r,e,i):g)){
h=!1;
break;
}
l||(l="constructor"==s);
}
if(h&&!l){
var p=t.constructor,v=n.constructor;
p!=v&&"constructor"in t&&"constructor"in n&&!("function"==typeof p&&p instanceof p&&"function"==typeof v&&v instanceof v)&&(h=!1);
}
return i["delete"](t),i["delete"](n),h;
}
function Sr(t){
return kn(t,no,$f);
}
function Cr(t){
return kn(t,ro,sf);
}
function kr(){
var t=E.iteratee||ao;
return t=t===ao?Un:t,arguments.length?t(arguments[0],arguments[1]):t;
}
function Lr(t,n){
var r=t.__data__;
return Rr(n)?r["string"==typeof n?"string":"hash"]:r.map;
}
function Er(t){
for(var n=no(t),r=n.length;r--;){
var e=n[r],o=t[e];
n[r]=[e,o,Vr(o)];
}
return n;
}
function zr(t,n){
var r=b(t,n);
return Hn(r)?r:yo;
}
function Nr(t){
var n=pu.call(t,Eu),r=t[Eu];
try{
t[Eu]=yo;
var e=!0;
}catch(t){}
var o=yu.call(t);
return e&&(n?t[Eu]=r:delete t[Eu]),o;
}
function Dr(t,n,r){
n=cr(n,t);
for(var e=-1,o=n.length,i=!1;++e<o;){
var u=te(n[e]);
if(!(i=null!=t&&r(t,u)))break;
t=t[u];
}
return i||++e!=o?i:(o=null==t?0:t.length,!!o&&De(o)&&Br(u,o)&&(pf(t)||gf(t)));
}
function Pr(t){
var n=t.length,r=t.constructor(n);
return n&&"string"==typeof t[0]&&pu.call(t,"index")&&(r.index=t.index,r.input=t.input),
r;
}
function Fr(t){
return"function"!=typeof t.constructor||Gr(t)?{}:ef(Mu(t));
}
function Tr(t,n,r,e){
var o=t.constructor;
switch(n){
case ii:
return sr(t);

case Ho:
case qo:
return new o(+t);

case ui:
return ar(t,e);

case fi:
case ci:
case $i:
case si:
case ai:
case hi:
case li:
case ji:
case _i:
return gr(t,e);

case Ko:
return hr(t,e,r);

case Wo:
case ni:
return new o(t);

case Yo:
return lr(t);

case ti:
return jr(t,e,r);

case ri:
return _r(t);
}
}
function Ir(t){
return pf(t)||gf(t)||!!(ku&&t&&t[ku]);
}
function Br(t,n){
return n=null==n?No:n,!!n&&("number"==typeof t||Si.test(t))&&t>-1&&t%1==0&&n>t;
}
function Hr(t,n,r){
if(!Pe(r))return!1;
var e=typeof n;
return!!("number"==e?Me(r)&&Br(n,r.length):"string"==e&&n in r)&&Oe(r[n],t);
}
function qr(t,n){
if(pf(t))return!1;
var r=typeof t;
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Ue(t))||pi.test(t)||!gi.test(t)||null!=n&&t in Object(n);
}
function Rr(t){
var n=typeof t;
return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t;
}
function Ur(t){
return!!vu&&vu in t;
}
function Gr(t){
var n=t&&t.constructor;
return t===("function"==typeof n&&n.prototype||ju);
}
function Vr(t){
return t===t&&!Pe(t);
}
function Kr(t,n){
return function(r){
return null!=r&&r[t]===n&&(n!==yo||t in Object(r));
};
}
function Wr(t){
var n=be(t,function(t){
return r.size===Oo&&r.clear(),t;
}),r=n.cache;
return n;
}
function Zr(t){
var n=[];
if(null!=t)for(var r in Object(t))n.push(r);
return n;
}
function Xr(t){
return yu.call(t);
}
function Jr(t,n,e){
return n=Iu(n===yo?t.length-1:n,0),function(){
for(var o=arguments,i=-1,u=Iu(o.length-n,0),f=Array(u);++i<u;)f[i]=o[n+i];
i=-1;
for(var c=Array(n+1);++i<n;)c[i]=o[i];
return c[n]=e(f),r(t,this,c);
};
}
function Qr(t){
var n=0,r=0;
return function(){
var e=Hu(),o=Eo-(e-r);
if(r=e,o>0){
if(++n>=Lo)return arguments[0];
}else n=0;
return t.apply(yo,arguments);
};
}
function Yr(t,n){
var r=-1,e=t.length,o=e-1;
for(n=n===yo?e:n;++r<n;){
var i=tr(r,o),u=t[i];
t[i]=t[r],t[r]=u;
}
return t.length=n,t;
}
function te(t){
if("string"==typeof t||Ue(t))return t;
var n=t+"";
return"0"==n&&1/t==-zo?"-0":n;
}
function ne(t){
if(null!=t){
try{
return gu.call(t);
}catch(t){}
try{
return t+"";
}catch(t){}
}
return"";
}
function re(t){
if(t instanceof D)return t.clone();
var n=new N(t.__wrapped__,t.__chain__);
return n.__actions__=pr(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,
n;
}
function ee(t,n,r){
var e=null==t?0:t.length;
if(!e)return-1;
var o=null==r?0:We(r);
return 0>o&&(o=Iu(e+o,0)),l(t,kr(n,3),o);
}
function oe(t){
return(null==t?0:t.length)?Mn(t,1):[];
}
function ie(t){
return(null==t?0:t.length)?Mn(t,zo):[];
}
function ue(t){
return t&&t.length?t[0]:yo;
}
function fe(t,n,r){
var e=null==t?0:t.length;
if(!e)return-1;
var o=null==r?0:We(r);
return 0>o&&(o=Iu(e+o,0)),j(t,n,o);
}
function ce(t){
var n=null==t?0:t.length;
return n?t[n-1]:yo;
}
function $e(t){
return t&&t.length?fr(t):[];
}
function se(t,n,r){
var e=pf(t)?o:wn;
return r&&Hr(t,n,r)&&(n=yo),e(t,kr(n,3));
}
function ae(t,n){
return(pf(t)?i:On)(t,kr(n,3));
}
function he(t,n){
return(pf(t)?e:of)(t,kr(n,3));
}
function le(t,n,r,e){
t=Me(t)?t:eo(t),r=r&&!e?We(r):0;
var o=t.length;
return 0>r&&(r=Iu(o+r,0)),Re(t)?o>=r&&t.indexOf(n,r)>-1:!!o&&j(t,n,r)>-1;
}
function je(t,n){
return(pf(t)?c:Wn)(t,kr(n,3));
}
function _e(t){
return(pf(t)?an:rr)(t);
}
function ge(t,n,r){
return n=(r?Hr(t,n,r):n===yo)?1:We(n),(pf(t)?hn:er)(t,n);
}
function pe(t){
return(pf(t)?ln:or)(t);
}
function ve(t){
if(null==t)return 0;
if(Me(t))return Re(t)?S(t):t.length;
var n=af(t);
return n==Ko||n==ti?t.size:Gn(t).length;
}
function ye(t,n,r){
var e=pf(t)?a:ir;
return r&&Hr(t,n,r)&&(n=yo),e(t,kr(n,3));
}
function de(t,n){
var r;
if("function"!=typeof n)throw new TypeError(wo);
return t=We(t),function(){
return--t>0&&(r=n.apply(this,arguments)),1>=t&&(n=yo),r;
};
}
function be(t,n){
if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(wo);
var r=function(){
var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;
if(i.has(o))return i.get(o);
var u=t.apply(this,e);
return r.cache=i.set(o,u)||i,u;
};
return r.cache=new(be.Cache||W)(),r;
}
function me(t){
return de(2,t);
}
function we(t){
return bn(t,So);
}
function xe(t){
return bn(t,Mo|So);
}
function Oe(t,n){
return t===n||t!==t&&n!==n;
}
function Me(t){
return null!=t&&De(t.length)&&!Ne(t);
}
function Ae(t){
return Fe(t)&&Me(t);
}
function Se(t){
return t===!0||t===!1||Fe(t)&&Ln(t)==Ho;
}
function Ce(t){
return Fe(t)&&1===t.nodeType&&!qe(t);
}
function ke(t){
if(null==t)return!0;
if(Me(t)&&(pf(t)||"string"==typeof t||"function"==typeof t.splice||vf(t)||bf(t)||gf(t)))return!t.length;
var n=af(t);
if(n==Ko||n==ti)return!t.size;
if(Gr(t))return!Gn(t).length;
for(var r in t)if(pu.call(t,r))return!1;
return!0;
}
function Le(t,n){
return Tn(t,n);
}
function Ee(t){
if(!Fe(t))return!1;
var n=Ln(t);
return n==Uo||n==Ro||"string"==typeof t.message&&"string"==typeof t.name&&!qe(t);
}
function ze(t){
return"number"==typeof t&&Fu(t);
}
function Ne(t){
if(!Pe(t))return!1;
var n=Ln(t);
return n==Go||n==Vo||n==Bo||n==Qo;
}
function De(t){
return"number"==typeof t&&t>-1&&t%1==0&&No>=t;
}
function Pe(t){
var n=typeof t;
return null!=t&&("object"==n||"function"==n);
}
function Fe(t){
return null!=t&&"object"==typeof t;
}
function Te(t,n){
return t===n||Bn(t,n,Er(n));
}
function Ie(t){
return He(t)&&t!=+t;
}
function Be(t){
return null===t;
}
function He(t){
return"number"==typeof t||Fe(t)&&Ln(t)==Wo;
}
function qe(t){
if(!Fe(t)||Ln(t)!=Xo)return!1;
var n=Mu(t);
if(null===n)return!0;
var r=pu.call(n,"constructor")&&n.constructor;
return"function"==typeof r&&r instanceof r&&gu.call(r)==du;
}
function Re(t){
return"string"==typeof t||!pf(t)&&Fe(t)&&Ln(t)==ni;
}
function Ue(t){
return"symbol"==typeof t||Fe(t)&&Ln(t)==ri;
}
function Ge(t){
return t===yo;
}
function Ve(t){
if(!t)return[];
if(Me(t))return Re(t)?C(t):pr(t);
if(Lu&&t[Lu])return w(t[Lu]());
var n=af(t);
return(n==Ko?x:n==ti?M:eo)(t);
}
function Ke(t){
if(!t)return 0===t?t:0;
if(t=Ze(t),t===zo||t===-zo)return(0>t?-1:1)*Do;
return t===t?t:0;
}
function We(t){
var n=Ke(t),r=n%1;
return n===n?r?n-r:n:0;
}
function Ze(t){
if("number"==typeof t)return t;
if(Ue(t))return Po;
if(Pe(t)){
var n="function"==typeof t.valueOf?t.valueOf():t;
t=Pe(n)?n+"":n;
}
if("string"!=typeof t)return 0===t?t:+t;
t=t.replace(bi,"");
var r=Oi.test(t);
return r||Ai.test(t)?Yi(t.slice(2),r?2:8):xi.test(t)?Po:+t;
}
function Xe(t){
return vr(t,ro(t));
}
function Je(t){
return null==t?"":ur(t);
}
function Qe(t,n,r){
var e=null==t?yo:Cn(t,n);
return e===yo?r:e;
}
function Ye(t,n){
return null!=t&&Dr(t,n,zn);
}
function to(t,n){
return null!=t&&Dr(t,n,Nn);
}
function no(t){
return Me(t)?sn(t):Gn(t);
}
function ro(t){
return Me(t)?sn(t,!0):Vn(t);
}
function eo(t){
return null==t?[]:y(t,no(t));
}
function oo(t,n,r){
return r===yo&&(r=n,n=yo),r!==yo&&(r=Ze(r),r=r===r?r:0),n!==yo&&(n=Ze(n),n=n===n?n:0),
dn(Ze(t),n,r);
}
function io(t,n,r){
return n=Ke(n),r===yo?(r=n,n=0):r=Ke(r),t=Ze(t),Dn(t,n,r);
}
function uo(t,n,r){
if(r&&"boolean"!=typeof r&&Hr(t,n,r)&&(n=r=yo),r===yo&&("boolean"==typeof n?(r=n,
n=yo):"boolean"==typeof t&&(r=t,t=yo)),t===yo&&n===yo?(t=0,n=1):(t=Ke(t),n===yo?(n=t,
t=0):n=Ke(n)),t>n){
var e=t;
t=n,n=e;
}
if(r||t%1||n%1){
var o=qu();
return Bu(t+o*(n-t+Qi("1e-"+((o+"").length-1))),n);
}
return tr(t,n);
}
function fo(t,n,r){
t=Je(t),n=ur(n);
var e=t.length;
r=r===yo?e:dn(We(r),0,e);
var o=r;
return r-=n.length,r>=0&&t.slice(r,o)==n;
}
function co(t,n,r){
return t=Je(t),r=null==r?0:dn(We(r),0,t.length),n=ur(n),t.slice(r,r+n.length)==n;
}
function $o(t){
return function(){
return t;
};
}
function so(t){
return t;
}
function ao(t){
return Un("function"==typeof t?t:bn(t,Mo));
}
function ho(t,n,r){
var o=no(n),i=Sn(n,o);
null!=r||Pe(n)&&(i.length||!o.length)||(r=n,n=t,t=this,i=Sn(n,no(n)));
var u=!(Pe(r)&&"chain"in r&&!r.chain),f=Ne(t);
return e(i,function(r){
var e=n[r];
t[r]=e,f&&(t.prototype[r]=function(){
var n=this.__chain__;
if(u||n){
var r=t(this.__wrapped__);
return(r.__actions__=pr(this.__actions__)).push({
func:e,
args:arguments,
thisArg:t
}),r.__chain__=n,r;
}
return e.apply(t,$([this.value()],arguments));
});
}),t;
}
function lo(){}
function jo(t){
return qr(t)?g(te(t)):Yn(t);
}
function _o(){
return[];
}
function go(){
return!1;
}
function po(t){
return t&&t.length?xn(t,so,En):yo;
}
function vo(t){
return t&&t.length?xn(t,so,Kn):yo;
}
var yo,bo="4.17.4",mo=200,wo="Expected a function",xo="__lodash_hash_undefined__",Oo=500,Mo=1,Ao=2,So=4,Co=1,ko=2,Lo=800,Eo=16,zo=1/0,No=9007199254740991,Do=1.7976931348623157e308,Po=0/0,Fo=4294967295,To="[object Arguments]",Io="[object Array]",Bo="[object AsyncFunction]",Ho="[object Boolean]",qo="[object Date]",Ro="[object DOMException]",Uo="[object Error]",Go="[object Function]",Vo="[object GeneratorFunction]",Ko="[object Map]",Wo="[object Number]",Zo="[object Null]",Xo="[object Object]",Jo="[object Promise]",Qo="[object Proxy]",Yo="[object RegExp]",ti="[object Set]",ni="[object String]",ri="[object Symbol]",ei="[object Undefined]",oi="[object WeakMap]",ii="[object ArrayBuffer]",ui="[object DataView]",fi="[object Float32Array]",ci="[object Float64Array]",$i="[object Int8Array]",si="[object Int16Array]",ai="[object Int32Array]",hi="[object Uint8Array]",li="[object Uint8ClampedArray]",ji="[object Uint16Array]",_i="[object Uint32Array]",gi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pi=/^\w*$/,vi=/^\./,yi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,di=/[\\^$.*+?()[\]{}|]/g,bi=/^\s+|\s+$/g,mi=/\\(\\)?/g,wi=/\w*$/,xi=/^[-+]0x[0-9a-f]+$/i,Oi=/^0b[01]+$/i,Mi=/^\[object .+?Constructor\]$/,Ai=/^0o[0-7]+$/i,Si=/^(?:0|[1-9]\d*)$/,Ci="\\ud800-\\udfff",ki="\\u0300-\\u036f",Li="\\ufe20-\\ufe2f",Ei="\\u20d0-\\u20ff",zi=ki+Li+Ei,Ni="\\ufe0e\\ufe0f",Di="["+Ci+"]",Pi="["+zi+"]",Fi="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+Pi+"|"+Fi+")",Ii="[^"+Ci+"]",Bi="(?:\\ud83c[\\udde6-\\uddff]){2}",Hi="[\\ud800-\\udbff][\\udc00-\\udfff]",qi="\\u200d",Ri=Ti+"?",Ui="["+Ni+"]?",Gi="(?:"+qi+"(?:"+[Ii,Bi,Hi].join("|")+")"+Ui+Ri+")*",Vi=Ui+Ri+Gi,Ki="(?:"+[Ii+Pi+"?",Pi,Bi,Hi,Di].join("|")+")",Wi=RegExp(Fi+"(?="+Fi+")|"+Ki+Vi,"g"),Zi=RegExp("["+qi+Ci+zi+Ni+"]"),Xi={};
Xi[fi]=Xi[ci]=Xi[$i]=Xi[si]=Xi[ai]=Xi[hi]=Xi[li]=Xi[ji]=Xi[_i]=!0,Xi[To]=Xi[Io]=Xi[ii]=Xi[Ho]=Xi[ui]=Xi[qo]=Xi[Uo]=Xi[Go]=Xi[Ko]=Xi[Wo]=Xi[Xo]=Xi[Yo]=Xi[ti]=Xi[ni]=Xi[oi]=!1;
var Ji={};
Ji[To]=Ji[Io]=Ji[ii]=Ji[ui]=Ji[Ho]=Ji[qo]=Ji[fi]=Ji[ci]=Ji[$i]=Ji[si]=Ji[ai]=Ji[Ko]=Ji[Wo]=Ji[Xo]=Ji[Yo]=Ji[ti]=Ji[ni]=Ji[ri]=Ji[hi]=Ji[li]=Ji[ji]=Ji[_i]=!0,
Ji[Uo]=Ji[Go]=Ji[oi]=!1;
var Qi=parseFloat,Yi=parseInt,tu="object"==typeof global&&global&&global.Object===Object&&global,nu="object"==typeof self&&self&&self.Object===Object&&self,ru=tu||nu||Function("return this")(),eu="object"==typeof exports&&exports&&!exports.nodeType&&exports,ou=eu&&"object"==typeof module&&module&&!module.nodeType&&module,iu=ou&&ou.exports===eu,uu=iu&&tu.process,fu=function(){
try{
return uu&&uu.binding&&uu.binding("util");
}catch(t){}
}(),cu=fu&&fu.isDate,$u=fu&&fu.isRegExp,su=fu&&fu.isTypedArray,au=g("length"),hu=Array.prototype,lu=Function.prototype,ju=Object.prototype,_u=ru["__core-js_shared__"],gu=lu.toString,pu=ju.hasOwnProperty,vu=function(){
var t=/[^.]+$/.exec(_u&&_u.keys&&_u.keys.IE_PROTO||"");
return t?"Symbol(src)_1."+t:"";
}(),yu=ju.toString,du=gu.call(Object),bu=RegExp("^"+gu.call(pu).replace(di,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mu=iu?ru.Buffer:yo,wu=ru.Symbol,xu=ru.Uint8Array,Ou=mu?mu.allocUnsafe:yo,Mu=O(Object.getPrototypeOf,Object),Au=Object.create,Su=ju.propertyIsEnumerable,Cu=hu.splice,ku=wu?wu.isConcatSpreadable:yo,Lu=wu?wu.iterator:yo,Eu=wu?wu.toStringTag:yo,zu=function(){
try{
var t=zr(Object,"defineProperty");
return t({},"",{}),t;
}catch(t){}
}(),Nu=Math.floor,Du=Object.getOwnPropertySymbols,Pu=mu?mu.isBuffer:yo,Fu=ru.isFinite,Tu=O(Object.keys,Object),Iu=Math.max,Bu=Math.min,Hu=Date.now,qu=Math.random,Ru=zr(ru,"DataView"),Uu=zr(ru,"Map"),Gu=zr(ru,"Promise"),Vu=zr(ru,"Set"),Ku=zr(ru,"WeakMap"),Wu=zr(Object,"create"),Zu=ne(Ru),Xu=ne(Uu),Ju=ne(Gu),Qu=ne(Vu),Yu=ne(Ku),tf=wu?wu.prototype:yo,nf=tf?tf.valueOf:yo,rf=tf?tf.toString:yo,ef=function(){
function t(){}
return function(n){
if(!Pe(n))return{};
if(Au)return Au(n);
t.prototype=n;
var r=new t();
return t.prototype=yo,r;
};
}();
E.prototype=z.prototype,E.prototype.constructor=E,N.prototype=ef(z.prototype),N.prototype.constructor=N,
D.prototype=ef(z.prototype),D.prototype.constructor=D,P.prototype.clear=F,P.prototype["delete"]=T,
P.prototype.get=I,P.prototype.has=B,P.prototype.set=H,q.prototype.clear=R,q.prototype["delete"]=U,
q.prototype.get=G,q.prototype.has=V,q.prototype.set=K,W.prototype.clear=Z,W.prototype["delete"]=X,
W.prototype.get=J,W.prototype.has=Q,W.prototype.set=Y,tn.prototype.add=tn.prototype.push=nn,
tn.prototype.has=rn,en.prototype.clear=on,en.prototype["delete"]=un,en.prototype.get=fn,
en.prototype.has=cn,en.prototype.set=$n;
var of=mr(An),uf=wr(),ff=zu?function(t,n){
return zu(t,"toString",{
configurable:!0,
enumerable:!1,
value:$o(n),
writable:!0
});
}:so,cf=Vu&&1/M(new Vu([,-0]))[1]==zo?function(t){
return new Vu(t);
}:lo,$f=Du?function(t){
return null==t?[]:(t=Object(t),i(Du(t),function(n){
return Su.call(t,n);
}));
}:_o,sf=Du?function(t){
for(var n=[];t;)$(n,$f(t)),t=Mu(t);
return n;
}:_o,af=Ln;
(Ru&&af(new Ru(new ArrayBuffer(1)))!=ui||Uu&&af(new Uu())!=Ko||Gu&&af(Gu.resolve())!=Jo||Vu&&af(new Vu())!=ti||Ku&&af(new Ku())!=oi)&&(af=function(t){
var n=Ln(t),r=n==Xo?t.constructor:yo,e=r?ne(r):"";
if(e)switch(e){
case Zu:
return ui;

case Xu:
return Ko;

case Ju:
return Jo;

case Qu:
return ti;

case Yu:
return oi;
}
return n;
});
var hf=Qr(ff),lf=Wr(function(t){
var n=[];
return vi.test(t)&&n.push(""),t.replace(yi,function(t,r,e,o){
n.push(e?o.replace(mi,"$1"):r||t);
}),n;
}),jf=nr(function(t,n){
return Ae(t)?mn(t,n):[];
}),_f=xr(ee);
be.Cache=W;
var gf=Pn(function(){
return arguments;
}())?Pn:function(t){
return Fe(t)&&pu.call(t,"callee")&&!Su.call(t,"callee");
},pf=Array.isArray,vf=Pu||go,yf=cu?v(cu):Fn,df=$u?v($u):qn,bf=su?v(su):Rn,mf=br(function(t,n){
vr(n,ro(n),t);
}),wf=br(function(t,n,r){
Jn(t,n,r);
});
return E.assignIn=mf,E.before=de,E.constant=$o,E.filter=ae,E.flatten=oe,E.flattenDeep=ie,
E.iteratee=ao,E.keys=no,E.keysIn=ro,E.map=je,E.memoize=be,E.merge=wf,E.mixin=ho,
E.once=me,E.property=jo,E.sampleSize=ge,E.shuffle=pe,E.toArray=Ve,E.toPlainObject=Xe,
E.uniq=$e,E.values=eo,E.without=jf,E.extend=mf,E.clamp=oo,E.clone=we,E.cloneDeep=xe,
E.endsWith=fo,E.eq=Oe,E.every=se,E.find=_f,E.findIndex=ee,E.forEach=he,E.get=Qe,
E.has=Ye,E.hasIn=to,E.head=ue,E.identity=so,E.includes=le,E.indexOf=fe,E.inRange=io,
E.isArguments=gf,E.isArray=pf,E.isArrayLike=Me,E.isArrayLikeObject=Ae,E.isBoolean=Se,
E.isBuffer=vf,E.isDate=yf,E.isElement=Ce,E.isEmpty=ke,E.isEqual=Le,E.isError=Ee,
E.isFinite=ze,E.isFunction=Ne,E.isLength=De,E.isMatch=Te,E.isNaN=Ie,E.isNull=Be,
E.isNumber=He,E.isObject=Pe,E.isObjectLike=Fe,E.isPlainObject=qe,E.isRegExp=df,E.isString=Re,
E.isSymbol=Ue,E.isTypedArray=bf,E.isUndefined=Ge,E.last=ce,E.max=po,E.min=vo,E.stubArray=_o,
E.stubFalse=go,E.noop=lo,E.random=uo,E.sample=_e,E.size=ve,E.some=ye,E.startsWith=co,
E.toFinite=Ke,E.toInteger=We,E.toNumber=Ze,E.toString=Je,E.each=he,E.first=ue,E.VERSION=bo,
E;
}();
!function(n){
"use strict";
function r(t){
for(var n=arguments,r=1,e=n.length;e>r;r++)t=t.replace(new RegExp("%"+r,"g"),n[r]);
return t;
}
function e(r){
var o=[];
function i(r){
var i="";
if(n&&n.HTMLElement&&r instanceof n.HTMLElement||r===n.document||r===n||r&&r.respondsToSelector_)return r.toString();
if(o.indexOf(r)>=0)return r.toString();
if(t.isArray(r)){
i+="[ ";
for(var u=0,f=r.length;f>u;u++){
u&&(i+=", ");
o.push(r);
i+=e(r[u]);
o.pop();
}
i+=" ]";
}else if(t.isString(r))i+='"'+r+'"';else if(t.isNumber(r)||t.isBoolean(r))i+=""+r;else if(null===r)i+="null";else if(void 0===r)i+="undefined";else{
i+="{ ";
var c=!1;
for(var $ in r)if(Object.prototype.hasOwnProperty.call(r,$)){
c&&(i+=", ");
o.push(r);
var s;
try{
s=e(r[$]);
}catch(a){
s="<threw during inspect>";
}
i+=$+": "+s;
o.pop();
c=!0;
}
i+=" }";
}
return i;
}
return i(r);
}
function o(){
var r=require("native");
if(r&&r.uuid)return r.uuid();
var e=n.crypto||n.msCrypto,o=null;
if(e&&t.isFunction(e.getRandomValues)){
o=new Uint8Array(16);
e.getRandomValues(o);
}
for(var i="",u=0;16>u;u++){
var f=o?o[u]:256*Math.random()|0;
(4==u||6==u||8==u||10==u)&&(i+="-");
6==u?f=64|15&f:8==u&&(f=128|63&f);
var c=f.toString(16);
i+=1==c.length?"0"+c:c;
}
return i;
}
function i(){
var t=Array.prototype.join.apply(arguments,[" "]);
if(n.console&&n.console.log)n.console.log(t);else try{
console.log(t);
}catch(r){}
}
function u(t){
return t?t.sort(function(t,n){
return t-n;
}):null;
}
t.mixin({
format:r,
inspect:e,
log:i,
uuid:o,
nsort:u
});
n["callback_Log"]=t.log;
}(this);
!function(t){
"use strict";
var n={},r={},e={
"native":r
};
t._musictheory_net_=function(t,r){
r&&(n[t]=r);
return n[t];
};
t._musictheory_net_._native_=r;
t.require=function(t){
if(!e[t])throw"Unknown namespace: "+t;
return e[t];
},t.namespace=function(t,n){
var r;
r=e[t]?e[t]:e[t]={};
var o=n(r);
for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i)){
var u=o[i];
"function"==typeof u&&(u.displayname=t+"."+i);
r[i]=u;
}
};
}(this);
(function(){
"use strict";
var t=this,n=t.oj,r=function(){},e={},o={},i={
BaseObject:r
};
function u(){
function t(t){
for(var n in t)t[n]=void 0;
}
t(e);
t(i);
t(o);
i["BaseObject"]=r;
}
function f(t,n){
return Object.prototype.hasOwnProperty.call(t,n);
}
function c(t){
for(var n=Object.keys(t),r={},e=0,o=n.length;o>e;e++){
var i=n[e];
r[i]=t[i];
}
return r;
}
function $(t,n,r,e){
for(var o in t)if(f(t,o)&&(r||!f(n,o))){
var i=t[o];
e&&e(o,i);
n[o]=i;
}
}
function s(t,n,r){
0!=t.indexOf("$oj$")&&(t=b(t));
if(0!=n.indexOf("$oj$")){
n=b(n);
n=n.replace(/([A-Za-z0-9])_/g,"$1:");
}
return[r,"[",t," ",n,"]"].join("");
}
function a(t,n){
if(i[t])n();else{
var r=e[t];
r?r.push(n):e[t]=[n];
}
}
function h(t,n){
throw new Error("Unrecognized selector: "+m(n)+" sent to instance "+t);
}
function l(t,n){
var r=d(t);
a(r,function(){
var t=i[r],e={},o={};
n(o,e);
$(o,t,!0,function(t,n){
n.displayName=s(r,t,"+");
});
$(e,t.prototype,!0,function(t,n){
n.displayName=s(r,t,"-");
});
});
}
function j(t,n,u){
var f=!1;
if(!n){
n={
BaseObject:1
};
f=!0;
}
var c,h=d(t),l=d(n);
o[h]=l;
a(l,function(){
var t=f?r:i[l];
if(!t)return;
var n={},o={};
c=u(o,n);
c.displayName=h;
c["$oj_name"]=h;
c["$oj_super"]=t;
c.prototype=new t();
$(t,c);
$(o,c,!0,function(t,n){
n.displayName=s(h,t,"+");
});
$(n,c.prototype,!0,function(t,n){
n.displayName=s(h,t,"-");
});
i[h]=c;
var a=e[h];
if(a)for(var j=0,_=a.length;_>j;j++)a[j]();
});
}
function _(){
t.oj=n;
}
function g(t){
if(y(t))return t.copy();
if(Array.isArray(t))return t.slice(0);
var n=typeof t;
return!t||"object"!=n&&"function"!=n?t:c(t);
}
function p(){
var t=[];
for(var n in i)f(i,n)&&t.push(i[n]);
return t;
}
function v(t){
if(!t)return null;
var n=[],r=t["$oj_name"];
for(var e in o)if(f(o,e)){
var u=o[e];
u==r&&n.push(i[e]);
}
return n;
}
function y(t){
return!(!t||!t.constructor["$oj_name"]);
}
function d(t){
return t&&Object.keys&&Object.keys(t)[0];
}
function b(t){
if(0!=t.indexOf("$oj$"))return t.substr(6);
return t;
}
function m(t){
if(!t)return null;
var n=d(t);
n&&(n=n.substr(6));
return n;
}
function w(t,n){
return d(t)==d(n);
}
function x(t){
if(t&&t["$oj_name"])return b(t["$oj_name"]);
return null;
}
function O(t){
return t["$oj_super"];
}
function M(t,n){
for(;t;){
if(t===n)return!0;
t=O(t);
}
return!1;
}
function A(t){
return t.constructor;
}
function S(t,n){
return!!t.prototype[d(n)];
}
function C(t,n){
return t?(t[Object.keys(n)[0]]||h(t,n)).apply(t,Array.prototype.slice.call(arguments,2)):t;
}
var k={
_id:0,
_registerClass:j,
_registerCategory:l,
_cls:i,
_g:{},
_reset:u,
noConflict:_,
makeCopy:g,
getClassList:p,
getSubclassesOfClass:v,
getSuperclass:O,
isObject:y,
sel_getName:m,
sel_isEqual:w,
class_getName:x,
class_getSuperclass:O,
class_isSubclassOf:M,
class_respondsToSelector:S,
object_getClass:A,
msgSend:C
};
r.alloc=function(){
return new this();
};
r["class"]=function(){
return this;
};
r.superclass=function(){
return O(this);
};
r.className=function(){
return x(this);
};
r.respondsToSelector_=function(t){
return!!this[d(t)];
};
r.instancesRespondToSelector_=function(t){
return S(this,t);
};
r.isKindOfClass_=function(t){
return M(this,t);
};
r.isMemberOfClass_=function(t){
return this===t;
};
r.isSubclassOfClass_=function(t){
return M(this,t);
};
r.isEqual_=function(t){
return this===t;
};
r.prototype.init=function(){
return this;
};
r.prototype.copy=function(){
return A(this).alloc().init();
};
r.prototype.superclass=function(){
return O(A(this));
};
r.prototype["class"]=function(){
return A(this);
};
r.prototype.className=function(){
return x(A(this));
};
r.prototype.respondsToSelector_=function(t){
return S(A(this),t);
};
r.prototype.performSelector_=function(t){
return k.msgSend(this,t);
};
r.prototype.performSelector_withObject_=function(t,n){
return k.msgSend(this,t,n);
};
r.prototype.performSelector_withObject_withObject_=function(t,n,r){
return k.msgSend(this,t,n,r);
};
r.prototype.description=function(){
return"<"+this.className()+" "+this["$oj_id"]+">";
};
r.prototype.toString=function(){
return this.description();
};
r.prototype.isKindOfClass_=function(t){
return M(A(this),t);
};
r.prototype.isMemberOfClass_=function(t){
return A(this)===t;
};
r.prototype.isEqual_=function(t){
return this===t;
};
if("undefined"!=typeof module&&"function"!=typeof module){
module.exports=k;
"undefined"!=typeof global&&"function"!=typeof global&&(global["$oj_oj"]=k);
}else"function"==typeof define&&define.amd?define(k):t.oj=t["$oj_oj"]=k;
}).call(this);
_musictheory_net_("_",t);
_musictheory_net_("namespace",namespace);
_musictheory_net_("require",require);
_musictheory_net_("oj",oj);
_musictheory_net_("$oj_oj",$oj_oj);
}).call(this);

(function(){
var t=_musictheory_net_("_"),n=(_musictheory_net_("namespace"),_musictheory_net_("require"),
_musictheory_net_("oj"),_musictheory_net_("$oj_oj"));
!function(){
"use strict";
n._registerClass({
$oj$St:1
},null,function(t,r){
function e(){
this.$oj$xt=null;
this.$oj$Tt=this.$oj$Nt=0;
this.constructor=e;
this.$oj_id=++n._id;
}
r.$oj$Ct=function(){
return this.$oj$Tt;
};
r.init=function(){
return this.$oj$kt(512);
};
r.$oj$kt=function(t){
var n=this;
if(n=e.$oj_super.prototype.init.call(this)){
n.$oj$Nt=0;
n.$oj$xt=[];
n.$oj$Tt=t;
}
return n;
};
r.$oj$Lt=function(){
var t=this.$oj$xt.length-this.$oj$Tt;
t>0&&(this.$oj$xt=this.$oj$xt.slice(t));
};
r.$oj$At=function(t){
this.$oj$xt.push({
i:this.$oj$Nt++,
s:t,
t:Date.now()
});
var n=Math.max(1.25*this.$oj$Tt,4);
this.$oj$xt.length>n&&this.$oj$Lt();
};
r.$oj$Ot=function(){
this.$oj$Lt();
return this.$oj$xt;
};
return e;
});
}();
!function(){
"use strict";
n._g.$oj$e=function(t,n){
return t-n*Math.floor(t/n);
};
}();
!function(){
"use strict";
n._registerClass({
$oj$Mt:1
},null,function(r,e){
function o(){
this.$oj$Dt=this.$oj$Pt=this.$oj$Ht=0;
this.constructor=o;
this.$oj_id=++n._id;
}
e.$oj$Bt=function(){
return this.$oj$Dt;
};
e.$oj$jt=function(){
return this.$oj$Ht;
};
e.$oj$Ft=function(){
return this.$oj$Pt;
};
function i(t,n,r){
var e=[12,14,16,17,19,21,23],o=e[t%7];
o+=12*r;
o+=n;
return o;
}
function u(t,n){
if(0==n)return 0;
var r=Math.abs(n),e=Math.floor(r/7)+1;
return 0>n?[6,4,2,7,5,3,1][t%7]<=r%7?-e:-e+1:[2,4,6,1,3,5,7][t%7]<=r%7?e:e-1;
}
function f(t,n,r){
var e=u(t,r);
return n==e?-100:n;
}
r.$oj$It=function(t,n){
-2==t&&(t=28);
return t+n;
};
r.$oj$qt=function(t){
return Math.floor(t/10);
};
r.$oj$Rt=function(t){
return t%10-5;
};
r.$oj$Ut=function(t,n){
return 10*t+5+n;
};
r.$oj$zt=function(t,n){
var r;
return(r=this.alloc())&&r.$oj$Wt(t,n);
};
r.$oj$Xt=function(t){
var n;
return(n=this.alloc())&&n.$oj$Vt(t);
};
r.$oj$Jt=function(t,n){
var r;
return(r=this.alloc())&&r.$oj$Kt(t,n);
};
r.$oj$Qt=function(t,n,r){
var e;
return(e=this.alloc())&&e.$oj$Gt(t,n,r);
};
r.$oj$Yt=function(t){
var n;
return(n=this.alloc())&&n.$oj$Zt(t);
};
r.$oj$en=function(t,n,r){
var e;
return(e=this.alloc())&&e.$oj$tn(t,n,r);
};
r.$oj$nn=function(t,r,e,o){
var i,u;
return-100==e?(i=new n._cls.$oj$Mt())&&i.$oj$rn(t,o,r):(u=new n._cls.$oj$Mt())&&u.$oj$tn(t,o,e);
};
r.$oj$in=function(t,n,r){
var e;
return(e=this.alloc())&&e.$oj$rn(t,n,r);
};
e.$oj$Wt=function(t,n){
var r=void 0,e=void 0;
if(n){
r=[5,6,15,16,25,35,36,45,46,55,56,65];
e=r[t%12];
}else{
r=[5,14,15,24,25,35,44,45,54,55,64,65];
e=r[t%12];
}
var o=Math.floor(t/12)-1;
return this.$oj$Kt(e,o);
};
e.$oj$Vt=function(t){
return this.$oj$Wt(t,!0);
};
e.$oj$Kt=function(t,n){
var r=Math.floor(t/10),e=t%10-5;
return this.$oj$Gt(r,e,n);
};
e.$oj$Gt=function(t,n,r){
var e=this;
if(e=o.$oj_super.prototype.init.call(this)){
e.$oj$Dt=t;
e.$oj$Ht=n;
e.$oj$Pt=r;
}
return e;
};
e.$oj$sn=function(t,r,e,o,i){
var u=n._cls.$oj$Mt.$oj$It(t,r),c=u%7,$=Math.floor(u/7),s=e;
if(i){
var a=f(c,0,o);
s=0==a?0>o?-1:1:-100==a?0:a;
}
return this.$oj$Gt(c,s,$);
};
e.$oj$Zt=function(t){
for(var n=0,r=0,e=4,o=0,i=t.length;i>o;o++){
var u=t.charAt(o);
if("C"==u)n=0;else if("D"==u)n=1;else if("E"==u)n=2;else if("F"==u)n=3;else if("G"==u)n=4;else if("A"==u)n=5;else if("B"==u)n=6;else if("b"==u)r--;else if("#"==u)r++;else if("x"==u)r+=2;else{
var f=parseInt(u,10);
isNaN(o)||(e=f);
}
}
return this.$oj$Gt(n,r,e);
};
e.$oj$tn=function(t,n,r){
r||(r=0);
return this.$oj$sn(t,n,r,0,!1);
};
e.$oj$rn=function(t,n,r){
return this.$oj$sn(t,n,0,r,!0);
};
e.description=function(){
return"<"+this.className()+" "+this.$oj$on()+this.$oj$Pt+">";
};
e.isEqual_=function(t){
if(!t||!t.isKindOfClass_(n._cls.$oj$Mt))return!1;
return this.$oj$Dt==(t&&t.$oj$Bt())&&this.$oj$Pt==(t&&t.$oj$Ft())&&this.$oj$Ht==(t&&t.$oj$jt());
};
e.$oj$un=function(t){
if(!t||!t.isKindOfClass_(n._cls.$oj$Mt))return!1;
return this.$oj$an()==(t&&t.$oj$an());
};
e.$oj$fn=function(t){
-2==t&&(t=28);
return 7*this.$oj$Pt+this.$oj$Dt-t;
};
e.$oj$ln=function(t){
return f(this.$oj$Dt,this.$oj$Ht,t);
};
e.$oj$on=function(){
var t=["C","D","E","F","G","A","B"][this.$oj$Dt%7];
if(this.$oj$Ht<0)for(var n=0;n>this.$oj$Ht;n--)t+="b";else if(this.$oj$Ht>0)for(var r=0;r<this.$oj$Ht;r++)t+="#";
return t;
};
e.$oj$cn=function(t){
return this.$oj$hn(t,!0);
};
e.$oj$pn=function(t,n){
return this.$oj$hn(t,n);
};
e.$oj$dn=function(t){
return this.$oj$vn(t,!0,0);
};
e.$oj$mn=function(t,n,r){
return this.$oj$vn(t,n,r);
};
e.$oj$gn=function(t){
return this.$oj$hn(t,!0);
};
e.$oj$hn=function(t,r){
var e,o=r?1:-1,u=this.$oj$Dt+o*(t&&t.$oj$yn()),f=this.$oj$Pt,c=Math.floor(u/7);
f+=c;
0>u&&(u+=-7*c);
u%=7;
var $=i(u,0,f),s=this.$oj$an()+o*(t&&t.$oj$bn())-$;
return(e=new n._cls.$oj$Mt())&&e.$oj$Gt(u,s,f);
};
e.$oj$wn=function(t){
var r;
return(r=new n._cls.$oj$Mt())&&r.$oj$Gt(this.$oj$Dt,this.$oj$Ht,this.$oj$Pt+t);
};
e.$oj$En=function(t){
return this.$oj$vn(t,!0,0);
};
e.$oj$vn=function(n,r,e){
for(var o=this,i=[this].concat(t.map(n,function(t){
return o&&o.$oj$hn(t,r);
}));e;){
var u=i[0];
if(u){
u&&u.$oj$Sn((u&&u.$oj$Ft())+1);
i.shift();
i.push(u);
}
--e;
}
return i;
};
e.$oj$Sn=function(t){
this.$oj$Pt=t;
};
e.$oj$an=function(){
return i(this.$oj$Dt,this.$oj$Ht,this.$oj$Pt);
};
e.$oj$xn=function(){
return 10*this.$oj$Dt+5+this.$oj$Ht;
};
e.$oj$Tn=function(){
return i(this.$oj$Dt,this.$oj$Ht,this.$oj$Pt)-12;
};
e.$oj$Nn=function(){
return 7*this.$oj$Pt+this.$oj$Dt;
};
return o;
});
}();
!function(){
"use strict";
n._registerClass({
$oj$Cn:1
},null,function(r,e){
function o(){
this.$oj$kn=this.$oj$Ln=0;
this.constructor=o;
this.$oj_id=++n._id;
}
e.$oj$An=function(t){
this.$oj$kn=t;
};
e.$oj$On=function(){
return this.$oj$kn;
};
e.$oj$Mn=function(t){
this.$oj$Ln=t;
};
e.$oj$Dn=function(){
return this.$oj$Ln;
};
r.$oj$Pn=function(r){
var e=-1/0,o=1/0;
r.length?t.each(r,function(t){
var n=t&&t.$oj$Hn(),r=t&&t.$oj$Bn();
n>e&&(e=n);
o>r&&(o=r);
}):e=o=0;
return n._cls.$oj$Cn.$oj$jn(o,e);
};
r.$oj$jn=function(t,n){
var r;
return(r=this.alloc())&&r.$oj$Fn(t,n);
};
e.$oj$Fn=function(t,n){
var r=this;
if(r=o.$oj_super.prototype.init.call(this)){
r.$oj$kn=t;
r.$oj$Ln=n;
}
return r;
};
e.$oj$In=function(t){
if(!t||t.length<2)return null;
return this.$oj$Fn(t[0],t[1]);
};
e.isEqual_=function(t){
return t&&this.$oj$kn==(t&&t.$oj$On())&&this.$oj$Ln==(t&&t.$oj$Dn());
};
e.copy=function(){
var t;
return(t=new n._cls.$oj$Cn())&&t.$oj$Fn(this.$oj$kn,this.$oj$Ln);
};
e.$oj$qn=function(t){
var n=Math.min(this.$oj$kn,this.$oj$Ln),r=Math.max(this.$oj$kn,this.$oj$Ln);
return t>=n&&r>=t;
};
e.description=function(){
return"<"+this.className()+" "+this.$oj$kn+","+this.$oj$Ln+">";
};
e.$oj$Bn=function(){
return Math.min(this.$oj$kn,this.$oj$Ln);
};
e.$oj$Hn=function(){
return Math.max(this.$oj$kn,this.$oj$Ln);
};
e.$oj$Rn=function(){
for(var t=Math.min(this.$oj$kn,this.$oj$Ln),n=Math.max(this.$oj$kn,this.$oj$Ln),r=[],e=t;n>=e;e++)r.push(e);
return r;
};
e.$oj$Un=function(){
var t=Math.min(this.$oj$kn,this.$oj$Ln),n=Math.max(this.$oj$kn,this.$oj$Ln);
return n-t+1;
};
e.$oj$zn=function(t){
var n=Math.min(this.$oj$kn,this.$oj$Ln),r=Math.max(this.$oj$kn,this.$oj$Ln);
return n>t?n:t>r?r:t;
};
e.$oj$Wn=function(t,n){
var r=this.$oj$Bn(),e=!1;
if(this.$oj$Hn()-r<t){
if(r+t>n){
this.$oj$Ln=n;
this.$oj$kn=n-t;
}else{
this.$oj$kn=r;
this.$oj$Ln=r+t;
}
e=!0;
}
return e;
};
return o;
});
}();
!function(){
"use strict";
var r=1;
n._registerClass({
$oj$Xn:1
},null,function(t,r){
function e(){
this.$oj$Vn=this.$oj$Jn=this.$oj$Kn=this.$oj$Qn=this.$oj$Gn=this.$oj$Yn=this.$oj$Zn=this.$oj$er=0;
this.constructor=e;
this.$oj_id=++n._id;
}
r.$oj$an=function(){
return this.$oj$Vn;
};
r.$oj$tr=function(){
return this.$oj$Zn;
};
r.$oj$nr=function(){
return this.$oj$Yn;
};
r.$oj$rr=function(){
return this.$oj$er;
};
r.$oj$ir=function(){
return this.$oj$Kn;
};
r.$oj$sr=function(){
return this.$oj$Jn;
};
r.$oj$or=function(){
return this.$oj$Gn;
};
r.$oj$ur=function(){
return this.$oj$Qn;
};
r.$oj$ar=function(t,n,r,o,i,u,f,c){
var $=this;
if($=e.$oj_super.prototype.init.call(this)){
$.$oj$Vn=t;
$.$oj$Zn=n;
$.$oj$Yn=r;
$.$oj$er=o;
$.$oj$Kn=i;
$.$oj$Jn=u;
$.$oj$Gn=f;
$.$oj$Qn=c;
}
return $;
};
return e;
});
n._registerClass({
$oj$fr:1
},null,function(t,r){
function e(){
this.$oj$lr=this.$oj$cr=this.$oj$hr=0;
this.constructor=e;
this.$oj_id=++n._id;
}
r.$oj$an=function(){
return this.$oj$lr;
};
r.$oj$pr=function(){
return this.$oj$hr;
};
r.$oj$dr=function(){
return this.$oj$cr;
};
r.$oj$vr=function(t,n,r){
var o=this;
if(o=e.$oj_super.prototype.init.call(this)){
o.$oj$lr=t;
o.$oj$hr=n;
o.$oj$cr=r;
}
return o;
};
return e;
});
n._registerClass({
$oj$mr:1
},null,function(e,o){
function i(){
this.$oj$gr=this.$oj$yr=null;
this.$oj$br=this.$oj$wr=this.$oj$Er=this.$oj$Sr=0;
this.constructor=i;
this.$oj_id=++n._id;
}
o.$oj$xr=function(){
return this.$oj$br;
};
o.$oj$Tr=function(){
return this.$oj$Er;
};
o.$oj$Nr=function(){
return this.$oj$Sr;
};
o.$oj$Cr=function(){
return this.$oj$yr;
};
o.$oj$kr=function(t,n,r,e,o){
var u=this;
if(u=i.$oj_super.prototype.init.call(this)){
u.$oj$Er=t;
u.$oj$br=n;
u.$oj$Sr=r;
u.$oj$yr=e;
u.$oj$gr=o;
}
return u;
};
o.$oj$Lr=function(t){
return this.$oj$kr(r++,t,0,null,null);
};
o.$oj$Ar=function(){
var t,r=this;
function e(t){
return Math.round(100*t)/100;
}
for(var o,i=1/0,u=-1/0,f=[],c=n._cls.$oj$Mr.$oj$Or(r.$oj$br),$=c&&c.$oj$Dr(),s=c&&c.$oj$Pr(),a=c&&c.$oj$Hr(),h=$?$[0]:0,l=$?$[1]:0,j=$?$[2]:0,_=$?$[3]:0,g=r.$oj$yr,p=0,v=g?g.length:0;v>p;p++){
o=g[p];
var y=o&&o.$oj$pr(),d=y+(o&&o.$oj$dr());
i=Math.min(i,y);
u=Math.max(u,d);
}
for(var b,m=r.$oj$yr,w=0,x=m?m.length:0;x>w;w++){
b=m[w];
var O=b&&b.$oj$an(),M=b&&b.$oj$pr(),A=b&&b.$oj$dr(),S=0,C=0,k=0,L=0,E=0,z=b&&b.$oj$pr(),N=z+(b&&b.$oj$dr());
if($){
if(z==i){
if(h>A){
S=h-l;
k=2;
C=l;
}
}else{
S=h;
k=1;
C=j;
}
if(N==u){
A+=a;
E=4;
L=a;
}else{
A+=_;
E=1;
L=_;
}
A+S>s&&(S=s-A);
}else{
A+=a;
E=4;
L=a;
}
f.push((t=new n._cls.$oj$Xn())&&t.$oj$ar(O,e(S),e(A),e(M),k,e(C),E,e(L)));
}
r.$oj$gr=f;
};
o.$oj$Br=function(t,n){
this.$oj$jr(t,this.$oj$wr,n);
this.$oj$wr+=n;
this.$oj$gr=null;
};
o.$oj$Fr=function(n,r){
var e=this;
t.each(n,function(t){
e.$oj$Br(t,r);
});
};
o.$oj$jr=function(t,r,e){
var o;
this.$oj$yr||(this.$oj$yr=[]);
var i=r+e;
i>this.$oj$Sr&&(this.$oj$Sr=i);
var u=(o=new n._cls.$oj$fr())&&o.$oj$vr(t,r,e);
this.$oj$yr.push(u);
this.$oj$gr=null;
};
o.$oj$Ir=function(){
this.$oj$gr||this.$oj$Ar();
return this.$oj$gr;
};
return i;
});
}();
!function(){
"use strict";
n._registerClass({
$oj$Mr:1
},null,function(t,r){
function e(){
this.$oj$qr=this.$oj$Rr=this.$oj$Ur=null;
this.$oj$zr=this.$oj$Wr=this.$oj$Xr=0;
this.$oj$Vr=!1;
this.constructor=e;
this.$oj_id=++n._id;
}
r.$oj$Jr=function(){
return this.$oj$Xr;
};
r.$oj$Kr=function(){
return this.$oj$Ur;
};
r.$oj$Qr=function(){
return this.$oj$qr;
};
r.$oj$Pr=function(){
return this.$oj$Wr;
};
r.$oj$Hr=function(){
return this.$oj$zr;
};
r.$oj$Gr=function(){
return this.$oj$Vr;
};
r.$oj$Dr=function(){
return this.$oj$Rr;
};
t.$oj$Yr=function(){
return[0,1,2,5,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
};
t.$oj$Or=function(t){
var n,r=(n=this.alloc())&&n.init();
r&&r.$oj$Zr(t);
return r;
};
r.$oj$Zr=function(t){
var r=this;
function e(t,e,o,i,u,f){
r.$oj$Ur=n._cls.$oj$Cn.$oj$jn(t,e);
r.$oj$qr=n._cls.$oj$Cn.$oj$jn(o,i);
r.$oj$zr=u;
r.$oj$Rr=f;
}
r.$oj$Xr=t;
r.$oj$Wr=1.25;
r.$oj$Vr=1==t||2==t;
if(1==t)e(36,86,48,72,.25,null);else if(2==t)e(36,86,48,72,.25,null);else if(5==t)e(36,86,48,72,.15,null);else if(6==t)e(36,86,48,72,.15,null);else if(28==t)e(45,96,48,72,.1,null);else if(29==t)e(53,89,60,84,.1,null);else if(15==t)e(72,108,79,103,.1,[.3,.1,.02,.02]);else if(10==t)e(58,98,60,91,.1,[.3,.1,.02,.02]);else if(11==t)e(58,93,58,82,.1,[.3,.1,.02,.02]);else if(12==t)e(50,94,53,77,.1,[.3,.1,.02,.02]);else if(14==t)e(37,77,41,65,.1,[.3,.1,.02,.02]);else if(13==t)e(34,76,34,62,.1,[.3,.1,.02,.02]);else if(16==t)e(56,87,60,87,.1,[.3,.1,.02,.02]);else if(17==t)e(49,80,53,80,.1,[.3,.1,.02,.02]);else if(18==t)e(44,75,48,75,.1,[.3,.1,.02,.02]);else if(19==t)e(36,69,40,67,.1,[.3,.1,.02,.02]);else if(20==t)e(54,88,58,82,.1,[.3,.1,.02,.02]);else if(21==t)e(40,77,41,70,.1,[.3,.1,.04,.02]);else if(22==t)e(35,77,48,72,.1,[.5,.1,.02,.02]);else if(23==t)e(24,64,28,60,.1,[.5,.1,.02,.02]);else if(24==t)e(55,91,55,79,.1,[.2,.1,.03,.03]);else if(25==t)e(48,84,48,72,.1,[.2,.1,.03,.03]);else if(26==t)e(36,79,36,60,.1,[.2,.1,.03,.03]);else if(27==t)e(28,55,31,55,.1,[.3,.1,.02,.02]);else if(100==t)e(36,86,48,72,.1,null);else if(102==t)e(36,86,48,72,.1,null);else{
r.$oj$Xr=0;
e(36,86,48,72,.25,null);
}
};
return e;
});
}();
!function(){
"use strict";
n._registerClass({
$oj$ei:1
},null,function(t,r){
function e(){
this.constructor=e;
this.$oj_id=++n._id;
}
var o=void 0;
t.$oj$ti=function(){
var t;
o||(o=(t=this.alloc())&&t.init());
return o;
};
r.$oj$ni=function(t){
var n=void 0,r=void 0,e=void 0,o=0,i=void 0,u=void 0,f=void 0,c=!1,$=!1,s=!1,a=!1,h=!1;
if(!t)return;
var l=t&&t.$oj$ri();
e=l.length;
n=l.split("");
for(var j=0;4>j;j++)n.push(null);
r=[];
i=n[0];
u=n[1];
f=n[2];
function _(t){
r.push(t);
}
function g(t,n){
r.push(t);
d(n);
}
function p(){
var t=null;
if(r.length){
t=r.join("");
r=[];
}
return t;
}
function v(){
var t=0;
c&&(t|=1);
$&&(t|=2);
a&&(t|=4);
h&&(t|=8);
return t;
}
function y(){
var n=p();
n&&t&&t.$oj$ii(n,v());
}
function d(t){
var r=o;
r+=t;
if(1==t){
i=u;
u=f;
f=n[r+2];
}else if(2==t){
i=f;
u=n[r+1];
f=n[r+2];
}else if(3==t){
i=n[r];
u=n[r+1];
f=n[r+2];
}
o=r;
}
function b(){
for(var n=e,r="",f=!1;!f&&n>o;){
if("}"==i&&"}"==u){
d(1);
f=!0;
}else r+=i;
d(1);
}
r&&t&&t.$oj$si(r);
return;
}
function m(){
for(var n=e,r=-1,u=0,f=0,c=0,$=0,s="",a=!1,h=!1,l=!1,j=!1,g=!1,y=!1,b=!1,m=void 0;!j&&n>o;){
var w=i;
if("b"!=w||g)if("#"==w)u+=1;else if("x"==w)u+=2;else if("n"==w)l=!0;else if("+"==w||"h"==w||"o"==w)s=w;else if("!"==w)b=!0;else if("_"==w)g=!0;else if("^"==w)a=!0;else if(isNaN(m=parseInt(w,10)))if("}"==w)j=!0;else{
if("i"==w||"I"==w||"v"==w||"V"==w||"N"==w||"S"==w)h=!0;else if("r"!=w||4!=r&&3!=r){
if("C"==w||"c"==w)r=0;else if("D"==w||"d"==w)r=1;else if("E"==w||"e"==w)r=2;else if("F"==w||"f"==w)r=3;else if("G"==w||"g"==w)r=4;else if("A"==w||"a"==w)r=5;else if("B"==w||"b"==w){
r=6;
g=!1;
}
}else{
h=!0;
r=-1;
}
_(w);
}else if(r>=0){
$=m;
y=!0;
}else 0===f?f=m:c=m;else u+=-1;
d(1);
}
var x=p();
if(x||l||a)if(a)t&&t.$oj$fi(f,u);else if(h){
0!=u||l||(u=-100);
t&&t.$oj$li(x,u,s,f,c);
}else y?t&&t.$oj$ci(x,r,u,b,$):t&&t.$oj$hi(x,r,u,b);else s&&f?t&&t.$oj$oi(s,f):s?t&&t.$oj$ui(s,v()):t&&t.$oj$ai(u);
}
function w(){
for(;e>o;){
var t=i,n=u,r=f;
if("*"==t){
y();
d(1);
c=!c;
}else if("_"==t){
y();
d(1);
$=!$;
}else if("^"==t){
y();
d(1);
a=!a;
}else if(","==t&&","==n){
y();
d(2);
h=!h;
}else if("'"==t&&"'"==n){
g(String.fromCharCode(s?8221:8220),2);
s=!s;
}else if("-"==t&&"-"==n&&"-"==r)g(String.fromCharCode(8212),3);else if("-"==t&&"-"==n)g(String.fromCharCode(8202)+String.fromCharCode(8211)+String.fromCharCode(8202),2);else if("-"==t&&">"==n)g(String.fromCharCode(8594),2);else if("{"==t&&"{"==n){
d(2);
y();
b();
}else if("{"==t){
d(1);
y();
m();
}else g(t,1);
}
y();
}
t&&t.$oj$pi();
w();
t&&t.$oj$di();
};
return e;
});
n._registerClass({
$oj$vi:1
},null,function(t,r){
function e(){
this.$oj$mi=null;
this.constructor=e;
this.$oj_id=++n._id;
}
r.$oj$gi=function(t){
this.$oj$mi=n.makeCopy(t);
};
r.$oj$ri=function(){
return this.$oj$mi;
};
r.$oj$pi=function(){};
r.$oj$di=function(){};
r.$oj$ai=function(){};
r.$oj$ii=function(){};
r.$oj$hi=function(){};
r.$oj$ci=function(){};
r.$oj$oi=function(){};
r.$oj$ui=function(){};
r.$oj$fi=function(){};
r.$oj$si=function(){};
r.$oj$li=function(){};
return e;
});
}();
!function(){
"use strict";
n._g.$oj$t=function(t,n){
return Math.round(t*n)/n;
};
n._g.$oj$n=function(t,n){
return Math.floor(t*n)/n;
};
n._g.$oj$r=function(t,n){
return Math.ceil(t*n)/n;
};
n._g.$oj$i=function(t,n){
var r=n[0],e=n[1],o=void 0,i=void 0,u=2,f=n.length-1;
if(e>=t)return r;
for(;f>u;){
o=n[u++];
i=n[u++];
if(t>e&&i>=t)return r+(o-r)*(t-e)/(i-e);
r=o;
e=i;
}
return o;
};
n._g.$oj$s=function(t,n){
return{
x:t,
y:n
};
};
n._g.$oj$o=function(){
return{
x:0,
y:0
};
};
n._g.$oj$u=function(t){
return t?{
x:t.x,
y:t.y
}:null;
};
n._g.$oj$a=function(t,n){
if(t&&n){
t.x=n.x;
t.y=n.y;
}
};
n._g.$oj$f=function(t,n){
return(t?t.x:0)===(n?n.x:0)&&(t?t.y:0)===(n?n.y:0);
};
n._g.$oj$l=function(t,n){
return{
width:t,
height:n
};
};
n._g.$oj$c=function(){
return{
width:0,
height:0
};
};
n._g.$oj$h=function(t){
return t?{
width:t.width,
height:t.height
}:null;
};
n._g.$oj$p=function(t,n){
if(t&&n){
t.width=n.width;
t.height=n.height;
}
};
n._g.$oj$d=function(t){
return t?{
x:0,
y:0,
width:t.width,
height:t.height
}:null;
};
n._g.$oj$v=function(t,n){
return(t?t.width:0)===(n?n.width:0)&&(t?t.height:0)===(n?n.height:0);
};
n._g.$oj$m=function(t,n,r,e){
return{
x:t,
y:n,
width:r,
height:e
};
};
n._g.$oj$g=function(){
return{
x:0,
y:0,
width:0,
height:0
};
};
n._g.$oj$y=function(t){
return t?{
x:t.x,
y:t.y,
width:t.width,
height:t.height
}:null;
};
n._g.$oj$b=function(t,n){
if(t&&n){
t.x=n.x;
t.y=n.y;
t.width=n.width;
t.height=n.height;
}
};
n._g.$oj$w=function(t){
return t?{
x:0,
y:0,
width:t.width,
height:t.height
}:null;
};
n._g.$oj$E=function(t,r,e){
t||(t=n._g.$oj$g());
return{
x:t.x+r,
y:t.y+e,
width:t.width-2*r,
height:t.height-2*e
};
};
n._g.$oj$S=function(t,n){
return(t?t.x:0)===(n?n.x:0)&&(t?t.y:0)===(n?n.y:0)&&(t?t.width:0)===(n?n.width:0)&&(t?t.height:0)===(n?n.height:0);
};
n._g.$oj$x=function(t,n){
return n.x>=t.x&&n.x<=t.x+t.width&&n.y>=t.y&&n.y<=t.y+t.height;
};
n._g.$oj$T=function(t){
return t?t.x:0;
};
n._g.$oj$N=function(t){
return t?t.y:0;
};
n._g.$oj$C=function(t){
return t?t.x+Math.round(t.width/2):0;
};
n._g.$oj$k=function(t){
return t?t.y+Math.round(t.height/2):0;
};
n._g.$oj$L=function(t){
return t?t.x+t.width:0;
};
n._g.$oj$A=function(t){
return t?t.y+t.height:0;
};
n._g.$oj$O=function(t){
return t?{
width:t.width,
height:t.height
}:null;
};
n._g.$oj$M=function(t,n){
if(!t)return n;
if(!n)return t;
var r=Math.min(t.x,n.x),e=Math.min(t.y,n.y),o=Math.max(t.x+t.width,n.x+n.width),i=Math.max(t.y+t.height,n.y+n.height);
return{
x:r,
y:e,
width:o-r,
height:i-e
};
};
n._g.$oj$D=function(t,n){
if(!t||!n)return null;
var r=Math.max(t.x,n.x),e=Math.max(t.y,n.y),o=Math.min(t.x+t.width,n.x+n.width)-r,i=Math.min(t.y+t.height,n.y+n.height)-e;
if(0>o||0>i)return null;
return{
x:r,
y:e,
width:o,
height:i
};
};
n._g.$oj$P=function(t){
return!t||t.width<=0||t.height<=0;
};
n._g.$oj$H=function(t,n){
if(!t)return!1;
if(!n)return!1;
return Math.min(t.x+t.width,n.x+n.width)-Math.max(t.x,n.x)>=0&&Math.min(t.y+t.height,n.y+n.height)-Math.max(t.y,n.y)>=0;
};
n._g.$oj$B=function(t,n,r,e){
return{
top:t,
left:n,
bottom:r,
right:e
};
};
n._g.$oj$j=function(){
return{
top:0,
left:0,
bottom:0,
right:0
};
};
n._g.$oj$F=function(t){
return t?{
top:t.top,
left:t.left,
bottom:t.bottom,
right:t.right
}:null;
};
n._g.$oj$I=function(t,n){
return(t?t.left:0)===(n?n.left:0)&&(t?t.top:0)===(n?n.top:0)&&(t?t.right:0)===(n?n.right:0)&&(t?t.bottom:0)===(n?n.bottom:0);
};
n._g.$oj$q=function(t,r){
if(!t)return null;
if(!r)return n._g.$oj$y(t);
return{
x:t.x+r.left,
y:t.y+r.top,
width:t.width-(r.left+r.right),
height:t.height-(r.top+r.bottom)
};
};
}();
!function(){
"use strict";
n._g.$oj$R=function(t){
for(var r=[],e=0;t>e;e++)r.push(n._g.$oj$g());
return r;
};
n._g.$oj$U=function(t,n){
if(!t||!n)return;
t.x=n.x+Math.round((n.width-t.width)/2);
t.y=n.y+Math.round((n.height-t.height)/2);
};
n._g.$oj$z=function(t,n){
if(!t||!n)return;
t.x=n.x+Math.round((n.width-t.width)/2);
};
n._g.$oj$W=function(t,n){
if(!t||!n)return;
t.y=n.y+Math.round((n.height-t.height)/2);
};
n._g.$oj$X=function(t,r,e,o,i){
if(!e)return;
t||(t=n._g.$oj$g());
r||(r=n._g.$oj$g());
n._g.$oj$b(t,e);
n._g.$oj$b(r,e);
if(o>=0){
t.width=o;
r.x=n._g.$oj$L(t)+i;
r.width=n._g.$oj$L(e)-r.x;
}else{
r.width=-o;
r.x=e.width-r.width;
t.width=r.x-t.x-i;
}
};
n._g.$oj$V=function(t,r,e,o,i){
if(!e)return;
t||(t=n._g.$oj$g());
r||(r=n._g.$oj$g());
n._g.$oj$b(t,e);
n._g.$oj$b(r,e);
if(o>=0){
t.height=o;
r.y=n._g.$oj$A(t)+i;
r.height=n._g.$oj$A(e)-r.y;
}else{
r.height=-o;
r.y=e.height-r.height;
t.height=r.y-t.y-i;
}
};
n._g.$oj$J=function(t,r,e,o){
if(!e)return;
t||(t=n._g.$oj$g());
r||(r=n._g.$oj$g());
n._g.$oj$b(t,e);
n._g.$oj$b(r,e);
t.width=Math.round((e.width-o)/2);
r.x=n._g.$oj$L(t)+o;
r.width=n._g.$oj$L(e)-r.x;
};
n._g.$oj$K=function(t,r,e,o){
if(!e)return;
t||(t=n._g.$oj$g());
r||(r=n._g.$oj$g());
n._g.$oj$b(t,e);
n._g.$oj$b(r,e);
t.height=Math.round((e.height-o)/2);
r.y=n._g.$oj$A(t)+o;
r.height=n._g.$oj$A(e)-r.y;
};
n._g.$oj$Q=function(t,r,e){
var o=t.length-1,i=0;
if(e)for(var u=0;o>u;u++)i+=e[u]||0;
for(var f=(r.width-i)/t.length,c=0,$=n._g.$oj$y(r),s=0;o>=s;s++){
var a=f+c,h=Math.round(a);
c=a-h;
$.width=h;
n._g.$oj$b(t[s],$);
o>s&&($.x=n._g.$oj$L($)+(e?e[s]||0:0));
}
};
n._g.$oj$G=function(t,r,e){
var o=t.length-1,i=0;
if(e)for(var u=0;o>u;u++)i+=e[u]||0;
for(var f=(r.height-i)/t.length,c=0,$=n._g.$oj$y(r),s=0;o>=s;s++){
var a=f+c,h=Math.round(a);
c=a-h;
$.height=h;
n._g.$oj$b(t[s],$);
o>s&&($.y=n._g.$oj$A($)+(e?e[s]||0:0));
}
};
n._g.$oj$Y=function(t,r){
if(!t||!r)return;
t.x=Math.round(n._g.$oj$C(r));
};
n._g.$oj$Z=function(t,r){
if(!t||!r)return;
t.x=Math.round(n._g.$oj$C(r))-t.width;
};
n._g.$oj$et=function(t,r){
if(!t||!r)return;
t.y=Math.round(n._g.$oj$k(r));
};
n._g.$oj$tt=function(t,r){
if(!t||!r)return;
t.y=Math.round(n._g.$oj$k(r))-t.height;
};
n._g.$oj$nt=function(t,r){
if(!t||!r)return;
var e=n._g.$oj$L(t)-n._g.$oj$T(r);
0>e&&(e=0);
t.x=r.x;
t.width=e;
};
n._g.$oj$rt=function(t,r){
if(!t||!r)return;
var e=t.width+(n._g.$oj$L(r)-n._g.$oj$L(t));
0>e&&(e=0);
t.width=e;
};
n._g.$oj$it=function(t,r){
if(!t||!r)return;
var e=n._g.$oj$A(t)-n._g.$oj$N(r);
0>e&&(e=0);
t.y=r.y;
t.height=e;
};
n._g.$oj$st=function(t,r){
if(!t||!r)return;
var e=t.height+(n._g.$oj$A(r)-n._g.$oj$A(t));
0>e&&(e=0);
t.height=e;
};
n._g.$oj$ot=function(t,n){
if(t){
t.width-=n;
t.x+=n;
}
};
n._g.$oj$ut=function(t,n){
t&&(t.width+=n);
};
n._g.$oj$at=function(t,n){
if(t){
t.height-=n;
t.y+=n;
}
};
n._g.$oj$ft=function(t,n){
t&&(t.height+=n);
};
n._g.$oj$lt=function(t,n){
t&&(t.x-=n);
};
n._g.$oj$ct=function(t,n){
t&&(t.x+=n);
};
n._g.$oj$ht=function(t,n){
t&&(t.y-=n);
};
n._g.$oj$pt=function(t,n){
t&&(t.y+=n);
};
n._g.$oj$dt=function(t,n){
t&&n&&(t.x=n.x);
};
n._g.$oj$vt=function(t,r){
t&&r&&(t.x=n._g.$oj$L(r)-t.width);
};
n._g.$oj$mt=function(t,n){
t&&n&&(t.y=n.y);
};
n._g.$oj$gt=function(t,r){
t&&r&&(t.y=n._g.$oj$A(r)-t.height);
};
n._g.$oj$yt=function(t,r){
t&&r&&(t.x=n._g.$oj$T(r)-t.width);
};
n._g.$oj$bt=function(t,r){
t&&r&&(t.x=n._g.$oj$L(r));
};
n._g.$oj$wt=function(t,r){
t&&r&&(t.y=n._g.$oj$N(r)-t.height);
};
n._g.$oj$Et=function(t,r){
t&&r&&(t.y=n._g.$oj$A(r));
};
}();
}).call(this);