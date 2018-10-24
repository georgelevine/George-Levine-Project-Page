/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var e=_musictheory_net_("_");
!function(){
"use strict";
var e=function(){};
"undefined"==typeof window.console&&(window.console={
log:e,
debug:e,
info:e,
warn:e,
error:e,
assert:e,
clear:e,
dir:e,
dirxml:e,
trace:e,
group:e,
groupCollapsed:e,
groupEnd:e,
time:e,
timeEnd:e,
profile:e,
profileEnd:e,
count:e,
exception:e,
table:e,
create:function(){
window.console={
log:function(e){
alert("log: "+e);
}
};
}
});
"document"in self&&!function(){
var e=document.createElement("_");
e.classList.add("c1","c2");
if(!e.classList.contains("c2")){
var t=function(e){
var t=DOMTokenList.prototype[e];
DOMTokenList.prototype[e]=function(e){
var n,i=arguments.length;
for(n=0;i>n;n++){
e=arguments[n];
t.call(this,e);
}
};
};
t("add");
t("remove");
}
e.classList.toggle("c3",!1);
if(e.classList.contains("c3")){
var n=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(e,t){
return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e);
};
}
e=null;
}();
}();
(function(t){
"use strict";
var n,i,o,r=1,a=1,s=[],c={},u={};
function l(e){
return e instanceof Node;
}
function d(e){
return e instanceof Window;
}
function f(e){
if(e._eiko_uid)return e._eiko_uid;
var t=s.pop();
t||(t=""+r++);
e._eiko_uid=t;
return t;
}
function h(e){
var t=e[0].toUpperCase()+e.substr(1),n=document.createElement("div"),i=n.style,o=e;
if(void 0!==i[o])return o;
o="webkit"+t;
if(void 0!==i[o])return o;
o="Moz"+t;
if(void 0!==i[o])return o;
o="ms"+t;
if(void 0!==i[o])return o;
return e;
}
function p(t,n){
return e.isString(t)?(n||document).querySelector(t):null;
}
function m(e,t){
return p(e,t);
}
p.query=m;
function v(t,n){
var i=[];
if(e.isString(t))for(var o=(n||document).querySelectorAll(t),r=0,a=o.length;a>r;r++)i.push(o[r]);else(l(t)||d(t))&&i.push(t);
return i;
}
p.queryAll=v;
function g(t,n,i,o){
var r=document.createElement(t);
if(e.isArray(n)){
i=n;
n=null;
}
n&&A(r,n);
i&&w(r,i,o);
return r;
}
p.create=g;
function y(t,n,i,o){
if(!t)return;
if(e.isString(n))if(o){
var r=document.createElement("div");
r.innerHTML=n;
y(t,r.childNodes,i);
}else y(t,(t.ownerDocument||document).createTextNode(n),i);else l(n)?i?t.appendChild(n):t.insertBefore(n,t.firstChild):n.length&&e.each(e.toArray(n),function(e){
y(t,e,i,o);
});
}
function w(e,t,n){
y(e,t,!0,n);
}
p.append=w;
function b(e,t,n){
y(e,t,!1,n);
}
p.prepend=b;
function _(e){
if(!e)return;
for(;e.lastChild;)e.removeChild(e.lastChild);
}
p.empty=_;
p.fetch=function(t,n,i){
if(!t)return;
if(e.isFunction(n)){
i=n;
n={};
}
n||(n={});
var o=n.method?n.method.toUpperCase():"GET",r=n.headers||{},a="GET"==o,s=new XMLHttpRequest();
s.open(o,t,n.async!==!1);
n.type&&(s.responseType=n.type);
e.each(n,function(e,t){
try{
s[t]=e;
}catch(n){
console.error(n);
}
});
a||r["Content-type"]||r["Content-Type"]||s.setRequestHeader("Content-type","application/x-www-form-urlencoded");
e.each(r,function(e,t){
s.setRequestHeader(t,e);
});
s.onload=function(){
var e=s.status;
0==e||304==e||e>=200&&300>e?i&&i(null,s.response||s.responseText):i&&i(new Error(s.statusText),null);
};
s.onerror=function(){
i&&i(new Error("onerror"),null);
};
s.send(a?null:n.data);
};
function k(t){
e.isArray(t)?e.each(t,function(e){
e&&e.remove&&e.remove();
}):t&&t.remove&&t.remove();
}
p.remove=k;
function A(t,n){
if(!t)return;
e.each(n,function(e,n){
t.setAttribute(n,e);
});
}
p.setAttributes=A;
function S(t,i,o,r){
if(!t||!i||!o)return;
var a,s=e.isFunction(o)?function(e){
var t=null;
try{
o(e);
}catch(i){
t=i;
}
if(n)n(t);else if(t)throw t;
}:o,c=u[a=f(t)],l={
T:i,
W:s,
L:o,
C:!!r
};
t.addEventListener(l.T,l.W,l.C);
if(c)c.push(l);else{
c=[l];
u[a]=c;
}
}
p.listen=S;
function C(t,n,i,o){
if(!t)return;
var r,a=u[r=f(t)],c=null;
o=!!o;
e.each(a,function(e){
if(n&&n!=e.T||i&&i!=e.L||o!=e.C){
c||(c=[]);
c.push(e);
}else t.removeEventListener(e.T,e.W,e.C);
});
u[r]=c;
if(!c){
t._eiko_uid=0;
s.push(r);
}
}
p.unlisten=C;
function q(e,t){
x(e,null,t);
}
p.delay=q;
function x(t,i,o,r){
if(!e.isNumber(i)){
r=o;
o=i;
i=0;
}
var s=Date.now()+i,u=a++;
function l(){
if(c[u])try{
var e=(Date.now()-s)/t;
if(e>=1)P(u);else{
e>0&&o&&o(e);
requestAnimationFrame(l);
}
}catch(i){
n&&n(i);
P(u);
}
}
c[u]=[o,r];
requestAnimationFrame(l);
o&&o(0);
return u;
}
p.animate=x;
function P(t){
var n=c[t];
if(!n)return;
var i=n[0],o=n[1];
i&&i(1);
c[t]=null;
o&&o();
e.every(c,function(e){
return null===e;
})&&(c={});
}
p.stop=P;
function L(e,t,n){
return e+(t-e)*n;
}
p.lerp=L;
function M(e){
e*=5;
if(1>e)return.3*(-.9*Math.cos(e*(Math.PI/2))+.9+.1*e);
e=(e-1)/4;
var t=e-1;
return.7*(.9*(t*t*t+1)+.1*e)+.3;
}
p.ease=M;
function T(e){
return-.9*Math.cos(e*(Math.PI/2))+.9+.1*e;
}
p.easeIn=T;
function H(e){
return.9*Math.sin(e*(Math.PI/2))+.1*e;
}
p.easeOut=H;
function O(e){
return-.5*(Math.cos(Math.PI*e)-1);
}
p.easeInOut=O;
p.transform=function(t,n,o,r,a,s){
if(!t)return;
var c;
void 0!==r&&void 0!==a&&(c=(r?r+",":"0,")+(a?a:"0"));
if(n||o||!c){
e.isNumber(n)&&(n+="px");
e.isNumber(o)&&(o+="px");
var u=(n||"0")+","+(o||"0");
}
u=u?"translate3d("+u+",0)":"";
c=c?"scale3d("+c+",1)":"";
i||(i=h("transform"));
t.style[i]=u+" "+c;
void 0!==s&&(t.style.opacity=String(s));
};
p.setTransformOrigin=function(e,t,n){
o||(o=h("transformOrigin"));
e.style[o]=t+" "+n;
};
function E(e){
n=e;
}
p.setEventHandler=E;
function N(e){
if("loading"!=document.readyState)setTimeout(e,0);else{
var t=function(){
document.removeEventListener("DOMContentLoaded",t,!1);
e();
};
document.addEventListener("DOMContentLoaded",t,!1);
}
}
p.ready=N;
t.eiko=t.$=p;
}).call(null,this);
(function(t){
"use strict";
var n="_musictheory_net_",i=window.localStorage,o=!1;
function r(e){
i.removeItem(e);
}
function a(e,t){
if(void 0===t){
r(e);
return;
}
i.setItem(e,JSON.stringify(t));
return t;
}
function s(t){
var n=i.getItem(t);
if(!e.isString(n))return void 0;
try{
return JSON.parse(n);
}catch(o){
return n||void 0;
}
}
try{
a(n,n);
s(n)!=n&&(o=!0);
r(n);
}catch(c){
o=!0;
}
t.eiko.store={
enabled:!o,
set:a,
get:s,
remove:r
};
}).call(null,this);
_musictheory_net_("$",$);
}).call(this);

(function(){
var e=_musictheory_net_("_"),t=_musictheory_net_("namespace"),n=_musictheory_net_("require"),i=(_musictheory_net_("oj"),
_musictheory_net_("$oj_oj"),_musictheory_net_("$"));
t("browser",function(e){
"use strict";
var t,n,o,r,a,s,c,u,l,d,f,h;
function p(){
if(n)return;
n=!0;
var e=navigator.userAgent,t=/WebKit/.test(e),i=/Chrome\//.test(e),p=t&&/Apple.*Mobile.*Safari/.test(e);
o=t;
r=p&&/iPad.*Apple.*Safari/.test(e)||/iPad.*AppleWebKit/.test(e);
a=!r&&(p&&/(iPhone|iPod).*Apple.*Safari/.test(e)||/(iPhone|iPod).*AppleWebKit/.test(e));
s=e.indexOf("Gecko")>-1&&!t;
c=e.indexOf("OPR/")>-1;
u=t&&!!/Safari\//.test(e)&&!i;
d=/OS X/.test(e);
f=p||r||a;
l=t&&i&&/Mobile /.test(e);
if(a||r){
var m=e.match(/OS ([0-9]+)_([0-9]+)/);
h=m?100*parseInt(m[1],10)+parseInt(m[2],10):0;
}
}
e.isApplePad=function(){
p();
return r;
};
e.isApplePhone=function(){
p();
return a;
};
e.isMobileChrome=function(){
p();
return l;
};
e.isGecko=function(){
p();
return s;
};
e.isOpera=function(){
p();
return c;
};
e.isSafari=function(){
p();
return u;
};
e.isWebKit=function(){
p();
return o;
};
e.isOSX=function(){
p();
return d;
};
e.getOSVersion=function(){
p();
return h;
};
e.isMobile=function(){
p();
return l||f;
};
e.addClassNamesToBody=function(){
var e=document.body.classList;
p();
f&&e.add("mobile-webkit");
o&&e.add("webkit");
};
i.ready(e.addClassNamesToBody);
e.setViewport=function(e){
if(!t){
t=i.create("meta",{
name:"viewport"
});
i.query("head").appendChild(t);
}
t.setAttribute("content",e);
};
e.isInFrame=function(){
return window.top!=window;
};
e.useNativeResolution=function(){
e.setViewport("width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no");
};
e.prefersTouchEvents=function(){
var t=navigator.userAgent,n=/(iPad|iPhone|iPod).*Apple.*Safari/.test(t);
n||(n=/(iPad|iPhone|iPod).*AppleWebKit/.test(t));
if(!n){
var i=t.match(/Android\s+([0-9.]+)/);
n=!!i&&parseFloat(i[1])>=1.5;
}
n&&(n="ontouchstart"in document.documentElement);
e.prefersTouchEvents=function(){
return n;
};
return n;
};
return e;
});
t("common",function(t){
"use strict";
var o="beta",r="4.1",a=void 0,s=void 0;
t.addReadyHandler=function(e){
a||(a=[]);
a.push(e);
};
t.addHotSwapHandler=function(e,t){
s||(s={});
s[e]=t;
};
t.invokeHotSwapHandler=function(e,t){
if(!s)return;
var n=s[e];
n&&n(t);
};
t.getPath=function(e,t){
var n=window["_path_map"],i=n&&n[t];
if(i)return i;
return["/","v18","/",e,"/",t].join("");
};
t.isBetaEnabled=function(){
return i.store.enabled&&i.store.get(o)===r;
};
t.setBetaEnabled=function(e){
if(i.store.enabled)try{
e?i.store.set(o,r):i.store.remove(o);
}catch(t){}
};
t.installBeacon=function(){
for(var e=document.cookie.split(";"),t=0,n=e.length;n>t;t++)if(e[t].match(/B=/))return;
i.fetch("/s/b");
};
var c=window.open;
t.popUpPiano=function(){
try{
c("/piano","PopUpPiano","width=829,height=256,menubar=0,location=0,toolbar=0,status=0,resizable=0,scrollbars=0");
}catch(e){
window.location.href="//www.musictheory.net/piano";
}
};
i.ready(function(){
var o=n("trace"),r=document.body.getAttribute("data-musictheory-id"),s=document.location.hash;
i.setEventHandler(function(e){
e&&o.trace({
error:e,
where:"v"
});
});
o.enable();
try{
e.each(a,function(e){
e(r);
});
}catch(c){
o.trace({
error:c,
where:"r"
});
try{
e.log(c);
}catch(u){}
}
t.invokeHotSwapHandler(r,s);
});
});
t("trace",function(){
"use strict";
var t=!1;
function n(){
var e=null;
try{
e=document&&document.location&&document.location.href;
}catch(t){}
return e;
}
function i(){
var e=null;
try{
e=navigator&&navigator.userAgent;
}catch(t){}
return e;
}
function o(){
var e=null;
try{
window.parent&&window.parent.location&&window.parent.location!=window.location&&(e=window.parent.location.href);
}catch(t){}
return e;
}
function r(){
function e(e){
var t=document.createElement("img");
t.src=e;
var n=t.src;
t.src=null;
return n;
}
function t(n,i){
if(!n)return;
if(n.getAttribute){
var o=n.getAttribute("src")||n.getAttribute("href");
o&&(o=0==o.indexOf("data:")?null:e(o));
o&&n.nodeName&&"A"!=n.nodeName.toUpperCase()&&-1==o.search("musictheory.net")&&-1==o.search("musictheory.local")&&i.push(o);
}
if(n.hasChildNodes())for(var r=n.childNodes,a=0,s=r.length;s>a;a++)t(r[a],i);
}
var n=[];
t(document.documentElement,n);
return n;
}
function a(t){
var a=null;
try{
a=window.localStorage.getItem("t");
if(!a){
a=e.uuid().replace(/-/g,"");
window.localStorage.setItem("t",a);
}
}catch(s){}
var c={
build:{
name:"Site",
bundle:"net.musictheory.Site",
version:"2230",
uuids:["90003b1dfc024c5abd944a4349c32110",a]
},
request:{
url:n(),
parent:o(),
ua:i(),
externals:r()
}
};
t.title&&(c.title=t.title);
t.message&&(c.message=t.message);
t.where&&(c.where=t.where);
t.log&&(c.log=t.log);
if(t.error){
var u=t.error;
c.error={
name:u.name,
message:u.message,
string:u.toString()
};
if(u.stack){
var l=[];
try{
e.each(u.stack.split("\n"),function(e){
var t=e.trim();
t&&l.push(t);
});
}catch(s){}
c.error.stack=l;
}
}
function d(){
if(!c.fallback){
c.details=null;
c.fallback=!0;
var e=new XMLHttpRequest();
e.open("POST","/s/trace",!0);
e.send(JSON.stringify(c));
}
}
try{
var f=new Worker("/vc/18/0/8c726972212011b016736de04eb3d1f2cddaeef8/traceworker.js");
f.onerror=function(e){
d(e.error);
f.terminate();
};
f.postMessage(JSON.stringify(c));
}catch(s){
d(s);
}
}
return{
trace:function(e){
t&&setTimeout(function(){
a(e);
},1);
},
enable:function(){
t=!0;
}
};
});
}).call(this);

(function(){
var e=_musictheory_net_("_"),t=(_musictheory_net_("namespace"),_musictheory_net_("require")),n=(_musictheory_net_("oj"),
_musictheory_net_("$oj_oj"),_musictheory_net_("$"));
!function(){
"use strict";
var i,o,r,a,s,c,u,l,d,f,h,p=t("browser"),m=t("common");
function v(){
i=n("#contact-form");
o=n("#contact-form-n");
r=n("#contact-form-e");
a=n("#contact-form-s");
s=n("#contact-form-m");
c=n("#contact-send-button");
u=n("#contact-form-n-text");
l=n("#contact-form-e-text");
d=n("#contact-form-s-text");
f=n("#contact-form-m-text");
n("#contact-form-j").value="true";
p.isMobile()||y(o);
}
function g(t){
e.each([o,r,a,s,c],function(e){
t?e.removeAttribute("disabled"):e.setAttribute("disabled","disabled");
});
}
function y(e){
try{
e.focus();
e.select();
}catch(t){
console.log(t);
}
}
function w(){
var t=[];
e.each(i.elements,function(e){
if(!e.name)return;
t.push(e.name+"="+encodeURIComponent(e.value));
});
return t.join("&");
}
function b(){
n("#contact-submit-error").style.display="none";
n("#contact-submit-sending").style.display="inline";
g(!0);
h=w();
g(!1);
var e=o.value.trim(),t=r.value.trim(),i=(a.value.trim(),s.value.trim());
n("#contact-thank-you-hi").textContent="Hi "+e.split(/\s+/)[0]+",";
if(!(e.length>0)){
g(!0);
u.classList.toggle("contact-error",!0);
y(o);
return!1;
}
u.classList.toggle("contact-error",!1);
if(!t.match(/(.*?)\@(.*?)\.(.*?)/)){
g(!0);
l.classList.toggle("contact-error",!0);
y(r);
return!1;
}
l.classList.toggle("contact-error",!1);
if(!i.length){
g(!0);
y(s);
return!1;
}
return!0;
}
function _(){
var e=n("#contact-submit-error"),t=n("#contact-submit-sending");
t.classList.add("visible");
n.fetch("/s/contact",{
method:"POST",
data:h
},function(n,i){
if(i)document.body.classList.add("contact-sent");else{
g(!0);
e.textContent="An error occurred while sending your message.  Please try again.";
e.style.display="inline";
t.style.display="none";
t.classList.remove("visible");
}
});
}
m.addHotSwapHandler("site:contact",function(){
v();
i.onsubmit=function(e){
e.preventDefault();
b()&&_();
};
});
}();
!function(){
"use strict";
var i=t("common");
function o(t,i){
var o=t.classList;
t.setAttribute("aria-expanded","false");
if(o.contains("faq-question-active"))return;
o.remove("faq-answer-visible");
o.add("faq-question-active");
t.setAttribute("role","link");
e.each(n.queryAll(".faq-highlighted"),function(e){
e.classList.remove("faq-highlighted");
});
i&&i.stopPropagation();
}
function r(e,t){
var n=e.classList;
e.setAttribute("aria-expanded","true");
if(n.contains("faq-answer-visible"))return;
n.add("faq-answer-visible");
n.remove("faq-question-active");
var i=e.id;
if(0===i.indexOf("q-"))if(history.replaceState)try{
var o="/faq#"+i.substr(2);
history.replaceState({
url:o
},null,o);
}catch(t){}else document.location.hash="#"+i.substr(2);
t&&t.stopPropagation();
}
i.addHotSwapHandler("site:faq",function(t){
e.each(n.queryAll(".faq-question"),function(e){
e.classList.remove("faq-answer-visible");
e.classList.add("faq-question-active");
e.setAttribute("aria-expanded","false");
n.listen(e,"click",function(t){
r(e,t);
});
var t=n.query("h1",e);
t&&n.listen(t,"click",function(t){
o(e,t);
});
});
if(t){
var i=n("#q-"+t.substr(1));
if(i){
r(i);
var a=i.getBoundingClientRect(),s=a.top+document.body.scrollTop-43;
document.documentElement.scrollTop=s;
document.body.scrollTop=s;
i.classList.add("faq-highlighted");
}
}
});
}();
!function(){
"use strict";
var i=(t("browser"),t("common"));
function o(){
{
var t=n("#home-top-text"),i=n("#home-top-line"),o=n("#home-bottom-text"),r=n("#home-bottom-line"),a=n(".home-bottom-theory"),s=n(".home-bottom-tenuto"),c=n(".home-bottom-theory .home-bottom-screenshot"),u=n(".home-bottom-tenuto .home-bottom-screenshot"),l=n("#nav-span-lessons"),d=n("#nav-span-exercises"),f=n("#nav-span-tools");
n("#nav-span-products"),n("#nav-span-news"),n("#nav-span-contact");
}
if(!(t&&i&&o&&r&&a&&s&&c&&u&&l&&d&&f))return;
var h=[t,i,o,r,a,s,c,u,l,d,f];
e.each(h,function(e){
e.style.transition="none";
e.style.opacity=0;
});
function p(e){
e.style.transition="";
e.style.opacity="";
}
function m(e,t){
e.style.opacity=String(t);
}
function v(e,t){
var i=void 0,o=void 0;
if(.5>t){
t*=2;
i=n.lerp(-40,4,n.easeInOut(t));
o=n.lerp(0,.85,2*t);
}else{
t=2*t-1;
i=n.lerp(4,0,n.easeInOut(t));
o=n.lerp(.85,1,2*t);
}
n.transform(e,0,i,1,1,o);
}
n.animate(500,function(e){
m(t,e);
m(i,e);
v(l,e);
},function(){
p(t);
p(i);
p(l);
});
n.delay(150,function(){
n.animate(500,function(e){
v(d,e);
},function(){
p(d);
});
});
n.delay(300,function(){
n.animate(500,function(e){
v(f,e);
},function(){
p(f);
});
});
n.delay(1e3,function(){
n.animate(500,function(e){
m(o,e);
m(r,e);
},function(){
p(o);
p(r);
});
});
n.delay(1e3,function(){
n.animate(1250,function(e){
e=n.easeOut(e);
m(a,e);
m(s,e);
},function(){
p(a);
p(s);
});
});
n.delay(1500,function(){
n.animate(400,function(e){
var t=n.lerp(.5,1,n.easeOut(e));
n.transform(c,0,0,t,t,e);
n.transform(u,0,0,t,t,e);
},function(){
p(c);
p(u);
});
});
}
i.addReadyHandler(function(t){
if("site:home"!=t)return;
if(e.isFunction(window.requestAnimationFrame)){
var i=n(".home-content");
i&&i.classList.add("home-loading");
n.listen(window,"load",function(){
i&&i.classList.remove("home-loading");
o();
});
}
});
}();
!function(){
"use strict";
var i,o,r,a,s=(t("browser"),t("common")),c=-1,u={},l=null,d=null,f=null,h=null,p=null;
function m(t){
var n=[],r=[],s=[];
e.each(t,function(e){
n.push(e[0]);
r.push(e[1]);
s.push(e[2]);
});
i=[n,r,s];
o=[];
c=Math.floor(Math.random()*n.length);
c=g();
v(c,function(){
y(c);
a&&clearInterval(a);
a=setInterval(function(){
var e=g(),t=o[e];
t?w():v(e,w);
},5e3);
});
}
function v(e,t){
var r=n("#hero");
if(!r){
clearInterval(a);
a=0;
return;
}
var c=n.create("img",{
"class":"hero-background"
}),u=n.create("img",{
"class":"hero-foreground"
}),l=!1,d=!1;
o[e]=[u,c];
if(t){
n.listen(c,"load",function(){
l=!0;
l&&d&&t();
});
n.listen(u,"load",function(){
d=!0;
l&&d&&t();
});
}
u.style.visibility="hidden";
c.style.visibility="hidden";
n.append(r,[u,c]);
var f=i[2][e],h=((window.devicePixelRatio||1)>1?"@2x.":".")+f;
c.setAttribute("src",s.getPath("images",i[0][e]+h));
u.setAttribute("src",s.getPath("images",i[1][e]+h));
}
function g(){
var e=c+1;
e>=i[0].length&&(e=0);
return e;
}
function y(t){
var i=o[t],r=Date.now();
function a(){
var t=(Date.now()-r)/1e3;
t>1&&(t=1);
e.each(i,function(e){
e.style.opacity=t;
});
1>t&&requestAnimationFrame(a);
}
e.each(i,function(e){
e.style.visibility="visible";
n("#hero-images-container").appendChild(e);
});
a();
}
function w(){
var e=g();
if(o[e]&&o[e][0].complete&&o[e][1].complete){
y(e);
c=e;
}
}
function b(){
if(!r)return;
var e=u[r];
if(!e)return;
var t=4,n=2*t,i=4*t,o=l.getBoundingClientRect(),a=Math.min(e.width,o.width-(128+i)),s=Math.min(e.height,o.height-(32+i));
s=Math.min(s,Math.floor(a*(e.height/e.width)));
a=Math.min(a,Math.floor(s*(e.width/e.height)));
var c=Math.round((o.width-a)/2),m=Math.round((o.height-s)/2);
function v(e,t,n,i,o){
e.style.left=t+"px";
e.style.top=n+"px";
e.style.width=i+"px";
e.style.height=o+"px";
}
v(h,c-t,m-t,a+n,s+n);
v(p,c,m,a,s);
var g=m+Math.round((s-64)/2);
v(d,c+a+t,g,64,64);
v(f,c-(64+t),g,64,64);
}
function _(){
function e(){
l.classList.remove("visible");
r=null;
}
function t(e){
r&&u[r]&&u[r].next&&k(u[r].previous);
if(e){
e.stopPropagation();
e.preventDefault();
}
}
function i(e){
r&&u[r]&&u[r].previous&&k(u[r].next);
if(e){
e.stopPropagation();
e.preventDefault();
}
}
function o(e){
return n.create("div",{
"class":"screenshot-button "+e
},[n.create("div")]);
}
l=n.create("div",{
"class":"screenshot-overlay"
});
h=n.create("div",{
"class":"screenshot-border"
});
f=o("screenshot-previous");
d=o("screenshot-next");
n.listen(l,"click",e);
n.listen(d,"click",i);
n.listen(f,"click",t);
n.append(l,[f,d,h]);
n.prepend(n.query("#marketing-main"),l);
n.listen(window,"resize",function(){
b();
});
n.listen(document,"keydown",function(n){
if(n.ctrlKey||n.metaKey||n.altKey)return;
27==n.keyCode?e():37==n.keyCode?t():39==n.keyCode&&i();
n.preventDefault();
});
}
function k(e){
u[e].width,u[e].height;
l||_();
r=e;
if(p)p.setAttribute("src",s.getPath("screenshots",e));else{
p=n.create("img",{
src:s.getPath("screenshots",e),
alt:"screenshot"
});
l.appendChild(p);
}
l.style.display="block";
setTimeout(function(){
l.classList.add("visible");
b();
},0);
}
function A(t,i){
var o=[],r=[];
i.forEach(function(i){
var a=i[0],c=i[1],u="lessons"==t,l={
name:t+"_iphone_"+c+".jpg",
width:u?320:375,
height:u?568:667
},d={
name:t+"_ipad_"+c+".jpg",
width:1024,
height:768
};
o.push(l);
r.push(d);
e.each(n.queryAll(".screenshot-inner",n("#"+a)),function(e){
var i=(window.devicePixelRatio||1)>1?"@2x.jpg":".jpg",o=n.create("img",{
src:s.getPath("screenshots",t+"_iphone_"+c+"_thumb"+i),
width:"54",
height:"96"
}),r=n.create("img",{
src:s.getPath("screenshots",t+"_ipad_"+c+"_thumb"+i),
width:"128",
height:"96"
});
n.listen(o,"click",function(){
k(l.name);
});
n.listen(r,"click",function(){
k(d.name);
});
n.append(e,[o,r]);
});
});
function a(t){
var n,i;
e.each(t,function(e){
u[e.name]=e;
if(i){
e.previous=i.name;
i.next=e.name;
}
i=e;
n||(n=e);
});
n.previous=i.name;
i.next=n.name;
}
a(o);
a(r);
}
s.addHotSwapHandler("site:marketing-tenuto",function(){
m([["tenuto_hero_1_p","tenuto_hero_1_l","png"],["tenuto_hero_2_p","tenuto_hero_2_l","png"],["tenuto_hero_3_p","tenuto_hero_3_l","jpg"],["tenuto_hero_4_p","tenuto_hero_4_l","png"]]);
A("tenuto",[["ss_1","1"],["ss_2","2"],["ss_3","3"],["ss_4","4"],["ss_5","5"],["ss_6","6"]]);
});
s.addHotSwapHandler("site:marketing-lessons",function(){
m([["lessons_pad_hero1","lessons_phone_hero1","jpg"],["lessons_pad_hero2","lessons_phone_hero2","jpg"],["lessons_pad_hero3","lessons_phone_hero3","jpg"]]);
A("lessons",[["ss_11","11"],["ss_14","14"],["ss_21","21"],["ss_23","23"],["ss_33","33"],["ss_44","44"],["ss_57","57"],["ss_122","122"]]);
});
}();
!function(){
"use strict";
var i=t("common"),o=null,r=["January","February","March","April","May","June","July","August","September","October","November","December"];
function a(){
var t=n("#news-posts");
e.each(o.posts,function(e){
var i=e.photo,o=e.time,a=e.body,s=e.title,c=n.create("div",{
"class":"news-post"
}),u=n.create("div",{
"class":"news-header"
}),l=n.create("span",{
"class":"news-title"
}),d=n.create("span",{
"class":"news-date"
}),f=new Date(1e3*o);
d.textContent="Posted on "+r[f.getMonth()]+" "+f.getDate()+", "+f.getFullYear();
l.textContent=s;
u.appendChild(l);
u.appendChild(d);
c.appendChild(u);
if(i){
var h=e.width,p=e.height;
if(h>680){
p=680/h*p;
h=680;
}
var m=n.create("div",{
"class":"news-post-photo"
});
m.appendChild(n.create("img",{
src:i,
width:h,
height:p
}));
c.appendChild(m);
}
if(a){
var v=n.create("div",{
"class":"news-post-body"
});
v.innerHTML=a;
c.appendChild(v);
}
t.appendChild(c);
t.appendChild(n.create("hr",{
"class":"news-line"
}));
});
}
i.addHotSwapHandler("site:news",function(){
o?a():n.fetch("/news.json",function(e,t){
o=JSON.parse(t);
o&&a();
});
});
}();
!function(){
"use strict";
var e=t("common");
e.addHotSwapHandler("site:prefs",function(){
var t=n("#beta-form-radio-yes"),i=n("#beta-form-radio-no");
function o(){
e.setBetaEnabled(t.checked);
}
var r=e.isBetaEnabled();
t.checked=r;
i.checked=!r;
n.listen(t,"change",o);
n.listen(i,"change",o);
});
}();
!function(){
"use strict";
var i,o=t("browser"),r=t("common"),a=[{
id:"site:home",
url:"/"
},{
id:"site:lessons",
url:"/lessons"
},{
id:"site:exercises",
url:"/exercises"
},{
id:"site:tools",
url:"/tools"
},{
id:"site:products",
url:"/products"
},{
id:"site:news",
url:"/news"
},{
id:"site:contact",
url:"/contact"
}],s=[],c={},u=[];
function l(){
o.isSafari()&&(document.title=document.title.replace("musictheory.net","musictheory​.net"));
}
function d(t){
var o,r=window.history;
e.each(a,function(e){
s.push(e.url);
if(t==e.id){
o=e.url;
i=e.id;
}
});
if(o&&r&&r.pushState&&r.replaceState)try{
r.replaceState({
url:o
},null,o);
e.each(a,function(e){
n.fetch(e.url,function(t,n){
c[e.url]={
id:e.id,
contents:n
};
});
});
}catch(u){
c={};
}
}
function f(e,t){
var o,a=e.split("#");
if(2==a.length){
e=a[0];
o="#"+a[1];
}
var s=c[e];
if(s){
if(s.id==i)return;
var u=n.create("div");
u.innerHTML=s.contents;
var d=n("#main"),f=n("#main",u),p=n("title",u),m=p?p.textContent:null,v=(f.getAttribute("data-musictheory-id"),
f.getAttribute("data-musictheory-theme")),g=f.getAttribute("data-musictheory-logo");
n("title").textContent=m;
l();
d.parentNode.replaceChild(f,d);
var y=document.body.className;
if(y){
y=y.replace(/(^|\s)(theme|logo)-\S+/g,"");
y+=" theme-"+v;
y+=" logo-"+g;
document.body.className=y;
}
h(s.id);
r.invokeHotSwapHandler(s.id,o);
i=s.id;
t&&window.history.pushState({
url:e
},m,e);
window.scrollTo&&window.scrollTo(0,0);
}else location.href=e;
}
function h(t){
e.each(u,function(e){
n.unlisten(e);
});
u=[];
e.each(n.queryAll("a"),function(t){
var i=t.getAttribute("href");
if(!i)return;
var o=i.replace(/\#.*?$/,"");
if("/piano"==o){
n.listen(t,"click",function(e){
if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;
r.popUpPiano();
e.preventDefault();
});
u.push(t);
}
if(e.includes(s,o)){
n.listen(t,"click",function(e){
if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;
f(i,!0);
e.preventDefault();
});
u.push(t);
}
});
e.each(n.queryAll(".uplift-link"),function(e){
var t=n("a",e);
if(!t)return;
var i=t.getAttribute("href");
if(!i)return;
n.unlisten(e,"click");
n.listen(e,"click",function(e){
if(e.target&&e.target.href)return;
f(i,!0);
e.preventDefault();
});
n.append(t.parentNode,t.children);
t.remove();
});
e.each(n.queryAll(".nav-a-active"),function(e){
e.classList.remove("nav-a-active");
});
var i=n("#nav-a-"+t.replace("site:",""));
i&&i.classList.add("nav-a-active");
}
r.addReadyHandler(function(e){
function t(){
var e=window.orientation;
o.setViewport(screen.height>=540&&(90==e||-90==e)?"width=device-height, initial-scale=1":"width=540");
}
window.onpopstate=function(e){
e&&e.state&&e.state.url&&f(e.state.url,!1);
};
if(o.isApplePad())o.useNativeResolution();else if(o.isMobile()){
t();
n.listen(window,"orientationchange",function(){
t();
});
}
o.prefersTouchEvents()||document.body.classList.add("hover-mouse");
d(e);
h(e);
l();
r.installBeacon();
});
window["PopUpPiano"]=r.popUpPiano;
}();
}).call(this);