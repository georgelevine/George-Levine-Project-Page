/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var o=_musictheory_net_("_");
!function(){
"use strict";
var $=function(){};
"undefined"==typeof window.console&&(window.console={
log:$,
debug:$,
info:$,
warn:$,
error:$,
assert:$,
clear:$,
dir:$,
dirxml:$,
trace:$,
group:$,
groupCollapsed:$,
groupEnd:$,
time:$,
timeEnd:$,
profile:$,
profileEnd:$,
count:$,
exception:$,
table:$,
create:function(){
window.console={
log:function($){
alert("log: "+$);
}
};
}
});
"document"in self&&!function(){
var $=document.createElement("_");
$.classList.add("c1","c2");
if(!$.classList.contains("c2")){
var o=function($){
var o=DOMTokenList.prototype[$];
DOMTokenList.prototype[$]=function($){
var t,h=arguments.length;
for(t=0;h>t;t++){
$=arguments[t];
o.call(this,$);
}
};
};
o("add");
o("remove");
}
$.classList.toggle("c3",!1);
if($.classList.contains("c3")){
var t=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function($,o){
return 1 in arguments&&!this.contains($)==!o?o:t.call(this,$);
};
}
$=null;
}();
}();
(function($){
"use strict";
var t,h,i,n=1,j=1,s=[],r={},e={};
function u($){
return $ instanceof Node;
}
function c($){
return $ instanceof Window;
}
function a($){
if($._eiko_uid)return $._eiko_uid;
var o=s.pop();
o||(o=""+n++);
$._eiko_uid=o;
return o;
}
function f($){
var o=$[0].toUpperCase()+$.substr(1),t=document.createElement("div"),h=t.style,i=$;
if(void 0!==h[i])return i;
i="webkit"+o;
if(void 0!==h[i])return i;
i="Moz"+o;
if(void 0!==h[i])return i;
i="ms"+o;
if(void 0!==h[i])return i;
return $;
}
function l($,t){
return o.isString($)?(t||document).querySelector($):null;
}
function d($,o){
return l($,o);
}
l.query=d;
function v($,t){
var h=[];
if(o.isString($))for(var i=(t||document).querySelectorAll($),n=0,j=i.length;j>n;n++)h.push(i[n]);else(u($)||c($))&&h.push($);
return h;
}
l.queryAll=v;
function p($,t,h,i){
var n=document.createElement($);
if(o.isArray(t)){
h=t;
t=null;
}
t&&y(n,t);
h&&g(n,h,i);
return n;
}
l.create=p;
function _($,t,h,i){
if(!$)return;
if(o.isString(t))if(i){
var n=document.createElement("div");
n.innerHTML=t;
_($,n.childNodes,h);
}else _($,($.ownerDocument||document).createTextNode(t),h);else u(t)?h?$.appendChild(t):$.insertBefore(t,$.firstChild):t.length&&o.each(o.toArray(t),function(o){
_($,o,h,i);
});
}
function g($,o,t){
_($,o,!0,t);
}
l.append=g;
function C($,o,t){
_($,o,!1,t);
}
l.prepend=C;
function m($){
if(!$)return;
for(;$.lastChild;)$.removeChild($.lastChild);
}
l.empty=m;
l.fetch=function($,t,h){
if(!$)return;
if(o.isFunction(t)){
h=t;
t={};
}
t||(t={});
var i=t.method?t.method.toUpperCase():"GET",n=t.headers||{},j="GET"==i,s=new XMLHttpRequest();
s.open(i,$,t.async!==!1);
t.type&&(s.responseType=t.type);
o.each(t,function($,o){
try{
s[o]=$;
}catch(t){
console.error(t);
}
});
j||n["Content-type"]||n["Content-Type"]||s.setRequestHeader("Content-type","application/x-www-form-urlencoded");
o.each(n,function($,o){
s.setRequestHeader(o,$);
});
s.onload=function(){
var $=s.status;
0==$||304==$||$>=200&&300>$?h&&h(null,s.response||s.responseText):h&&h(new Error(s.statusText),null);
};
s.onerror=function(){
h&&h(new Error("onerror"),null);
};
s.send(j?null:t.data);
};
function L($){
o.isArray($)?o.each($,function($){
$&&$.remove&&$.remove();
}):$&&$.remove&&$.remove();
}
l.remove=L;
function y($,t){
if(!$)return;
o.each(t,function(o,t){
$.setAttribute(t,o);
});
}
l.setAttributes=y;
function b($,h,i,n){
if(!$||!h||!i)return;
var j,s=o.isFunction(i)?function($){
var o=null;
try{
i($);
}catch(h){
o=h;
}
if(t)t(o);else if(o)throw o;
}:i,r=e[j=a($)],u={
T:h,
W:s,
L:i,
C:!!n
};
$.addEventListener(u.T,u.W,u.C);
if(r)r.push(u);else{
r=[u];
e[j]=r;
}
}
l.listen=b;
function w($,t,h,i){
if(!$)return;
var n,j=e[n=a($)],r=null;
i=!!i;
o.each(j,function(o){
if(t&&t!=o.T||h&&h!=o.L||i!=o.C){
r||(r=[]);
r.push(o);
}else $.removeEventListener(o.T,o.W,o.C);
});
e[n]=r;
if(!r){
$._eiko_uid=0;
s.push(n);
}
}
l.unlisten=w;
function D($,o){
N($,null,o);
}
l.delay=D;
function N($,h,i,n){
if(!o.isNumber(h)){
n=i;
i=h;
h=0;
}
var s=Date.now()+h,e=j++;
function u(){
if(r[e])try{
var o=(Date.now()-s)/$;
if(o>=1)R(e);else{
o>0&&i&&i(o);
requestAnimationFrame(u);
}
}catch(h){
t&&t(h);
R(e);
}
}
r[e]=[i,n];
requestAnimationFrame(u);
i&&i(0);
return e;
}
l.animate=N;
function R($){
var t=r[$];
if(!t)return;
var h=t[0],i=t[1];
h&&h(1);
r[$]=null;
i&&i();
o.every(r,function($){
return null===$;
})&&(r={});
}
l.stop=R;
function k($,o,t){
return $+(o-$)*t;
}
l.lerp=k;
function O($){
$*=5;
if(1>$)return.3*(-.9*Math.cos($*(Math.PI/2))+.9+.1*$);
$=($-1)/4;
var o=$-1;
return.7*(.9*(o*o*o+1)+.1*$)+.3;
}
l.ease=O;
function x($){
return-.9*Math.cos($*(Math.PI/2))+.9+.1*$;
}
l.easeIn=x;
function M($){
return.9*Math.sin($*(Math.PI/2))+.1*$;
}
l.easeOut=M;
function I($){
return-.5*(Math.cos(Math.PI*$)-1);
}
l.easeInOut=I;
l.transform=function($,t,i,n,j,s){
if(!$)return;
var r;
void 0!==n&&void 0!==j&&(r=(n?n+",":"0,")+(j?j:"0"));
if(t||i||!r){
o.isNumber(t)&&(t+="px");
o.isNumber(i)&&(i+="px");
var e=(t||"0")+","+(i||"0");
}
e=e?"translate3d("+e+",0)":"";
r=r?"scale3d("+r+",1)":"";
h||(h=f("transform"));
$.style[h]=e+" "+r;
void 0!==s&&($.style.opacity=String(s));
};
l.setTransformOrigin=function($,o,t){
i||(i=f("transformOrigin"));
$.style[i]=o+" "+t;
};
function A($){
t=$;
}
l.setEventHandler=A;
function P($){
if("loading"!=document.readyState)setTimeout($,0);else{
var o=function(){
document.removeEventListener("DOMContentLoaded",o,!1);
$();
};
document.addEventListener("DOMContentLoaded",o,!1);
}
}
l.ready=P;
$.eiko=$.$=l;
}).call(null,this);
(function($){
"use strict";
var t="_musictheory_net_",h=window.localStorage,i=!1;
function n($){
h.removeItem($);
}
function j($,o){
if(void 0===o){
n($);
return;
}
h.setItem($,JSON.stringify(o));
return o;
}
function s($){
var t=h.getItem($);
if(!o.isString(t))return void 0;
try{
return JSON.parse(t);
}catch(i){
return t||void 0;
}
}
try{
j(t,t);
s(t)!=t&&(i=!0);
n(t);
}catch(r){
i=!0;
}
$.eiko.store={
enabled:!i,
set:j,
get:s,
remove:n
};
}).call(null,this);
_musictheory_net_("$",$);
}).call(this);

(function(){
var $=_musictheory_net_("_"),o=_musictheory_net_("namespace"),t=_musictheory_net_("require"),h=(_musictheory_net_("oj"),
_musictheory_net_("$oj_oj"),_musictheory_net_("$"));
o("browser",function($){
"use strict";
var o,t,i,n,j,s,r,e,u,c,a,f;
function l(){
if(t)return;
t=!0;
var $=navigator.userAgent,o=/WebKit/.test($),h=/Chrome\//.test($),l=o&&/Apple.*Mobile.*Safari/.test($);
i=o;
n=l&&/iPad.*Apple.*Safari/.test($)||/iPad.*AppleWebKit/.test($);
j=!n&&(l&&/(iPhone|iPod).*Apple.*Safari/.test($)||/(iPhone|iPod).*AppleWebKit/.test($));
s=$.indexOf("Gecko")>-1&&!o;
r=$.indexOf("OPR/")>-1;
e=o&&!!/Safari\//.test($)&&!h;
c=/OS X/.test($);
a=l||n||j;
u=o&&h&&/Mobile /.test($);
if(j||n){
var d=$.match(/OS ([0-9]+)_([0-9]+)/);
f=d?100*parseInt(d[1],10)+parseInt(d[2],10):0;
}
}
$.isApplePad=function(){
l();
return n;
};
$.isApplePhone=function(){
l();
return j;
};
$.isMobileChrome=function(){
l();
return u;
};
$.isGecko=function(){
l();
return s;
};
$.isOpera=function(){
l();
return r;
};
$.isSafari=function(){
l();
return e;
};
$.isWebKit=function(){
l();
return i;
};
$.isOSX=function(){
l();
return c;
};
$.getOSVersion=function(){
l();
return f;
};
$.isMobile=function(){
l();
return u||a;
};
$.addClassNamesToBody=function(){
var $=document.body.classList;
l();
a&&$.add("mobile-webkit");
i&&$.add("webkit");
};
h.ready($.addClassNamesToBody);
$.setViewport=function($){
if(!o){
o=h.create("meta",{
name:"viewport"
});
h.query("head").appendChild(o);
}
o.setAttribute("content",$);
};
$.isInFrame=function(){
return window.top!=window;
};
$.useNativeResolution=function(){
$.setViewport("width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no");
};
$.prefersTouchEvents=function(){
var o=navigator.userAgent,t=/(iPad|iPhone|iPod).*Apple.*Safari/.test(o);
t||(t=/(iPad|iPhone|iPod).*AppleWebKit/.test(o));
if(!t){
var h=o.match(/Android\s+([0-9.]+)/);
t=!!h&&parseFloat(h[1])>=1.5;
}
t&&(t="ontouchstart"in document.documentElement);
$.prefersTouchEvents=function(){
return t;
};
return t;
};
return $;
});
o("common",function(o){
"use strict";
var i="beta",n="4.1",j=void 0,s=void 0;
o.addReadyHandler=function($){
j||(j=[]);
j.push($);
};
o.addHotSwapHandler=function($,o){
s||(s={});
s[$]=o;
};
o.invokeHotSwapHandler=function($,o){
if(!s)return;
var t=s[$];
t&&t(o);
};
o.getPath=function($,o){
var t=window["_path_map"],h=t&&t[o];
if(h)return h;
return["/","v18","/",$,"/",o].join("");
};
o.isBetaEnabled=function(){
return h.store.enabled&&h.store.get(i)===n;
};
o.setBetaEnabled=function($){
if(h.store.enabled)try{
$?h.store.set(i,n):h.store.remove(i);
}catch(o){}
};
o.installBeacon=function(){
for(var $=document.cookie.split(";"),o=0,t=$.length;t>o;o++)if($[o].match(/B=/))return;
h.fetch("/s/b");
};
var r=window.open;
o.popUpPiano=function(){
try{
r("/piano","PopUpPiano","width=829,height=256,menubar=0,location=0,toolbar=0,status=0,resizable=0,scrollbars=0");
}catch($){
window.location.href="//www.musictheory.net/piano";
}
};
h.ready(function(){
var i=t("trace"),n=document.body.getAttribute("data-musictheory-id"),s=document.location.hash;
h.setEventHandler(function($){
$&&i.trace({
error:$,
where:"v"
});
});
i.enable();
try{
$.each(j,function($){
$(n);
});
}catch(r){
i.trace({
error:r,
where:"r"
});
try{
$.log(r);
}catch(e){}
}
o.invokeHotSwapHandler(n,s);
});
});
o("trace",function(){
"use strict";
var o=!1;
function t(){
var $=null;
try{
$=document&&document.location&&document.location.href;
}catch(o){}
return $;
}
function h(){
var $=null;
try{
$=navigator&&navigator.userAgent;
}catch(o){}
return $;
}
function i(){
var $=null;
try{
window.parent&&window.parent.location&&window.parent.location!=window.location&&($=window.parent.location.href);
}catch(o){}
return $;
}
function n(){
function $($){
var o=document.createElement("img");
o.src=$;
var t=o.src;
o.src=null;
return t;
}
function o(t,h){
if(!t)return;
if(t.getAttribute){
var i=t.getAttribute("src")||t.getAttribute("href");
i&&(i=0==i.indexOf("data:")?null:$(i));
i&&t.nodeName&&"A"!=t.nodeName.toUpperCase()&&-1==i.search("musictheory.net")&&-1==i.search("musictheory.local")&&h.push(i);
}
if(t.hasChildNodes())for(var n=t.childNodes,j=0,s=n.length;s>j;j++)o(n[j],h);
}
var t=[];
o(document.documentElement,t);
return t;
}
function j(o){
var j=null;
try{
j=window.localStorage.getItem("t");
if(!j){
j=$.uuid().replace(/-/g,"");
window.localStorage.setItem("t",j);
}
}catch(s){}
var r={
build:{
name:"Site",
bundle:"net.musictheory.Site",
version:"2230",
uuids:["90003b1dfc024c5abd944a4349c32110",j]
},
request:{
url:t(),
parent:i(),
ua:h(),
externals:n()
}
};
o.title&&(r.title=o.title);
o.message&&(r.message=o.message);
o.where&&(r.where=o.where);
o.log&&(r.log=o.log);
if(o.error){
var e=o.error;
r.error={
name:e.name,
message:e.message,
string:e.toString()
};
if(e.stack){
var u=[];
try{
$.each(e.stack.split("\n"),function($){
var o=$.trim();
o&&u.push(o);
});
}catch(s){}
r.error.stack=u;
}
}
function c(){
if(!r.fallback){
r.details=null;
r.fallback=!0;
var $=new XMLHttpRequest();
$.open("POST","/s/trace",!0);
$.send(JSON.stringify(r));
}
}
try{
var a=new Worker("/vc/18/0/8c726972212011b016736de04eb3d1f2cddaeef8/traceworker.js");
a.onerror=function($){
c($.error);
a.terminate();
};
a.postMessage(JSON.stringify(r));
}catch(s){
c(s);
}
}
return{
trace:function($){
o&&setTimeout(function(){
j($);
},1);
},
enable:function(){
o=!0;
}
};
});
}).call(this);

(function(){
var $=_musictheory_net_("_"),o=(_musictheory_net_("namespace"),_musictheory_net_("require")),t=_musictheory_net_("oj"),h=_musictheory_net_("$oj_oj"),i=_musictheory_net_("$");
!function(){
"use strict";
h._registerClass({
$oj$BNh:1
},null,function(o,t){
function n(){
this.$oj$jNh=this.$oj$FNh=this.$oj$INh=this.$oj$qNh=this.$oj$RNh=this.$oj$UNh=this.$oj$zNh=null;
this.$oj$WNh=this.$oj$XNh=this.$oj$VNh=this.$oj$JNh=this.$oj$KNh=0;
this.$oj$QNh=!1;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$GNh=function(){
return this.$oj$VNh;
};
t.$oj$YNh=function(){
return this.$oj$JNh;
};
t.$oj$ZNh=function(){
return this.$oj$XNh;
};
t.$oj$zft=function(){
return this.$oj$zNh;
};
t.$oj$eCh=function(){
return this.$oj$qNh;
};
t.$oj$tCh=function(){
return this.$oj$QNh;
};
t.$oj$nCh=function($){
this.$oj$INh=$;
};
t.$oj$rCh=function(){
return this.$oj$INh;
};
t.$oj$iCh=function($){
this.$oj$KNh=$;
};
t.$oj$sCh=function(){
return this.$oj$KNh;
};
t.$oj$oCh=function(o,t,h,i,j,s){
var r=this;
if(r=n.$oj_super.prototype.init.call(this)){
r.$oj$JNh=-1;
r.$oj$VNh=-1;
r.$oj$XNh=-1;
r.$oj$zNh=t;
r.$oj$qNh=h;
r.$oj$INh=o;
$.each(s,function($){
r.$oj$uCh($);
});
if(j){
var e=r.$oj$uCh(j);
r.$oj$aCh(e);
}
if(i){
var u=r.$oj$uCh(i);
r.$oj$fCh(u);
}
}
return r;
};
t.$oj$lCh=function($){
var o,t,i,n,j=this;
if(this.$oj$QNh)return;
this.$oj$QNh=!0;
var s=(o=new h._cls.$oj$cCh())&&o.init();
s&&s.$oj$hCh("_t0a");
function r(){
j.$oj$pCh(!0);
}
j.$oj$UNh=h._cls.$oj$vCh.$oj$dCh(s,r);
j.$oj$RNh=(t=new h._cls.$oj$mCh())&&t.init();
j.$oj$jNh=(i=new h._cls.$oj$yCh())&&i.$oj$gCh(j.$oj$zNh,j.$oj$qNh);
j.$oj$RNh&&j.$oj$RNh.$oj$bCh(j.$oj$jNh);
s&&s.$oj$bCh(j.$oj$RNh);
j.$oj$FNh.length>2&&(n=j.$oj$FNh[j.$oj$FNh.length-1])&&n.$oj$wCh(!0);
j.$oj$jNh&&j.$oj$jNh.$oj$ECh(j.$oj$FNh);
j.$oj$SCh(!0,$,null);
};
t.$oj$pCh=function($){
this.$oj$xCh($,this.$oj$VNh);
};
t.$oj$SCh=function($,o,t){
var h=$?0:1,n=$?1:0,j=this.$oj$UNh&&this.$oj$UNh.$oj$TCh(),s=((this.$oj$RNh&&this.$oj$RNh.$oj$NCh()).offsetHeight,
this.$oj$RNh&&this.$oj$RNh.$oj$NCh());
i.stop(this.$oj$WNh);
if(o){
var r=$?.85:1,e=$?1:.85;
this.$oj$WNh=i.animate(250,function($){
$=i.ease($);
var o=i.lerp(r,e,$),t=i.lerp(h,n,$);
i.transform(s,0,0,o,o,t);
j.opacity=String(t);
},t);
}else t&&t();
};
t.$oj$uCh=function($){
var o,t=this.$oj$CCh(),i=(o=new h._cls.$oj$kCh())&&o.init();
i&&i.$oj$Dct($);
this.$oj$FNh||(this.$oj$FNh=[]);
this.$oj$FNh.push(i);
t==this.$oj$JNh&&i&&i.$oj$LCh(!0);
t==this.$oj$VNh&&i&&i.$oj$ACh(!0);
i&&i.$oj$OCh(this,{
$oj$MCh:1
});
return t;
};
t.$oj$xCh=function($,o){
var t=this;
if(!this.$oj$QNh)return;
this.$oj$QNh=!1;
o==this.$oj$VNh&&this.$oj$INh&&this.$oj$INh.respondsToSelector_({
$oj$DCh:1
})&&this.$oj$INh&&this.$oj$INh.$oj$DCh(this);
this.$oj$INh&&this.$oj$INh.respondsToSelector_({
$oj$PCh:1
})&&this.$oj$INh&&this.$oj$INh.$oj$PCh(this,o);
{
var h=this.$oj$UNh;
this.$oj$RNh;
}
this.$oj$SCh(!1,$,function(){
h&&h.$oj$HCh();
});
t.$oj$UNh=null;
t.$oj$RNh=null;
t.$oj$jNh=null;
setTimeout(function(){
t.$oj$INh&&t.$oj$INh.respondsToSelector_({
$oj$BCh:1
})&&t.$oj$INh&&t.$oj$INh.$oj$BCh(t,o);
},500);
};
t.$oj$MCh=function($){
var o=this.$oj$FNh.indexOf($);
if(0>o)return;
this.$oj$xCh(!0,o);
};
t.$oj$jCh=function($){
if(!this.$oj$FNh||0>$||$>=this.$oj$FNh.length)return null;
return this.$oj$FNh[$];
};
t.$oj$FCh=function($){
var o;
return(o=this.$oj$jCh($))&&o.$oj$zft();
};
t.$oj$aCh=function($){
var o,t;
if(this.$oj$JNh!=$){
(o=this.$oj$jCh(this.$oj$JNh))&&o.$oj$LCh(!1);
this.$oj$JNh=$;
(t=this.$oj$jCh(this.$oj$JNh))&&t.$oj$LCh(!0);
}
};
t.$oj$ICh=function($){
var o,t;
if(this.$oj$XNh!=$){
(o=this.$oj$jCh(this.$oj$XNh))&&o.$oj$qCh(!1);
this.$oj$XNh=$;
(t=this.$oj$jCh(this.$oj$XNh))&&t.$oj$qCh(!0);
}
};
t.$oj$fCh=function($){
var o,t;
if(this.$oj$VNh!=$){
(o=this.$oj$jCh(this.$oj$VNh))&&o.$oj$ACh(!1);
this.$oj$VNh=$;
(t=this.$oj$jCh(this.$oj$VNh))&&t.$oj$ACh(!0);
}
};
t.$oj$CCh=function(){
return this.$oj$FNh?this.$oj$FNh.length:0;
};
return n;
});
h._registerClass({
$oj$yCh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$UCh=this.$oj$zCh=this.$oj$WCh=this.$oj$XCh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$zft=function(){
return this.$oj$WCh;
};
o.$oj$eCh=function(){
return this.$oj$UCh;
};
$.$oj$VCh=function(){
return"_n0a";
};
o.$oj$gCh=function($,o){
var h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$WCh=$;
h.$oj$UCh=o;
}
return h;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this),o=i.create("div",{
"class":"_r0a"
});
$.appendChild(o);
return o;
};
o.$oj$KCh=function(){
t.$oj_super.prototype.$oj$KCh.call(this);
if(this.$oj$WCh){
this.$oj$XCh=h._cls.$oj$RCh.$oj$QCh("_i0a");
this.$oj$bCh(this.$oj$XCh);
this.$oj$XCh&&this.$oj$XCh.$oj$GCh(this.$oj$WCh);
}
if(this.$oj$UCh){
this.$oj$zCh=h._cls.$oj$RCh.$oj$QCh("_s0a");
this.$oj$bCh(this.$oj$zCh);
this.$oj$zCh&&this.$oj$zCh.$oj$GCh(this.$oj$UCh);
}
};
return t;
});
h._registerClass({
$oj$kCh:1
},{
$oj$YCh:1
},function($,o){
function t(){
h._cls.$oj$YCh.call(this);
this.$oj$ZCh=null;
this.$oj$ekh=this.$oj$tkh=this.$oj$nkh=this.$oj$rkh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$Dct=function($){
this.$oj$ZCh=$;
};
o.$oj$zft=function(){
return this.$oj$ZCh;
};
o.$oj$ikh=function(){
return this.$oj$nkh;
};
o.$oj$skh=function(){
return this.$oj$tkh;
};
o.$oj$okh=function(){
return this.$oj$ekh;
};
o.$oj$ukh=function(){
return this.$oj$rkh;
};
$.$oj$VCh=function(){
return"_o0a";
};
o.$oj$akh=function($){
var o=this;
(o=t.$oj_super.prototype.init.call(this))&&(o.$oj$ZCh=$);
return o;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this);
$.textContent=this.$oj$ZCh;
return $;
};
o.$oj$LCh=function($){
if(this.$oj$nkh!=$){
this.$oj$nkh=$;
this.$oj$fkh("destructive",$);
}
};
o.$oj$ACh=function($){
if(this.$oj$tkh!=$){
this.$oj$tkh=$;
this.$oj$fkh("cancel",$);
}
};
o.$oj$qCh=function($){
if(this.$oj$ekh!=$){
this.$oj$ekh=$;
this.$oj$fkh("bold",$);
}
};
o.$oj$wCh=function($){
if(this.$oj$rkh!=$){
this.$oj$rkh=$;
this.$oj$fkh("top-margin",$);
}
};
return t;
});
}();
!function(){
"use strict";
var t=o("common"),n=null;
h._registerClass({
$oj$lkh:1
},null,function(o,j){
function s(){
this.$oj$ckh=this.$oj$hkh=this.$oj$pkh=this.$oj$dkh=this.$oj$vkh=this.$oj$mkh=this.$oj$gkh=this.$oj$ykh=null;
this.$oj$bkh=this.$oj$wkh=0;
this.constructor=s;
this.$oj_id=++h._id;
}
j.$oj$Ekh=function(){
return this.$oj$vkh;
};
j.$oj$Skh=function(){
return this.$oj$dkh;
};
j.$oj$xkh=function(){
return this.$oj$gkh;
};
j.$oj$Tkh=function(){
return this.$oj$hkh;
};
j.$oj$Nkh=function(){
return this.$oj$mkh;
};
j.$oj$Ckh=function(){
return this.$oj$bkh;
};
j.$oj$kkh=function($){
this.$oj$ckh=$;
};
j.$oj$Lkh=function(){
return this.$oj$ckh;
};
var r=void 0;
o.$oj$Akh=function(){
var $;
r||(r=($=this.alloc())&&$.init());
return r;
};
j.$oj$Okh=function($){
var o;
this.$oj$wkh||(this.$oj$wkh=window.top!=window?32:44);
var t=(o=new h._cls.$oj$Dkh())&&o.$oj$Mkh($,!1);
t&&t.$oj$Pkh(this.$oj$wkh);
this.$oj$mkh||(this.$oj$mkh=[]);
this.$oj$mkh.push(t);
this.$oj$vkh&&this.$oj$vkh.$oj$bCh(t);
return t;
};
j.$oj$Hkh=function($){
location.href=$;
};
j.$oj$Bkh=function($,o){
return t.getPath($,o);
};
j.$oj$jkh=function($,o,t){
var i;
h._g.$oj$pNh("-[$oj$lkh $oj$jkh] "+[$,o,t]);
var j=window.TenutoBridge.getDebugReportObject();
j.h&&(o=o?o+"\n\n"+j.h:j.h);
var s=(i=new h._cls.$oj$Ikh())&&i.$oj$Fkh($,o,t);
s&&s.$oj$qkh(j.l);
s&&s.$oj$qkh(n&&n.$oj$Ot());
s&&s.$oj$Rkh();
};
j.$oj$Ukh=function(){
t.popUpPiano();
};
j.$oj$zkh=function(){
var o=this;
this.$oj$mkh=$.map(this.$oj$mkh||[],function($){
var t,i;
if($&&$.$oj$Wkh()){
var n=(t=new h._cls.$oj$Dkh())&&t.$oj$Mkh($&&$.$oj$Xkh(),$&&$.$oj$Vkh());
n&&n.$oj$Pkh(o.$oj$wkh);
(i=$&&$.$oj$Kkh())&&i.$oj$Jkh(n,$);
$&&$.$oj$Qkh();
return n;
}
$&&$.$oj$Gkh();
$&&$.$oj$Pkh(o.$oj$wkh);
return $;
});
};
j.$oj$Ykh=function(o){
var n,j,s=this;
h._g.$oj$LNh(function($){
h._g.$oj$pNh("$D$8G$");
s.$oj$jkh(null,null,$);
});
i.setEventHandler(function($){
if($){
h._g.$oj$pNh("$D$9G$");
s.$oj$jkh(null,null,$);
}
h._g.$oj$kNh();
});
window.addEventListener("error",function(o){
var t=o.message,i=o.error;
if(t.match(/^Script error\.?$/))return;
var n=["$D$AG$"+t,"$D$BG$"+o.filename+":"+(o.lineno||0)+":"+(o.colno||0)];
if(i&&i.stack){
n.push("","$D$CG$");
try{
$.each(i.stack.split("\n"),function($){
var o=$.trim();
o&&n.push(o);
});
}catch(j){}
}
h._g.$oj$dNh(n);
});
var r=!0,e=o;
e&&e.respondsToSelector_({
$oj$Zkh:1
})&&(r=e&&e.$oj$Zkh());
s.$oj$dkh=o;
s.$oj$vkh=(n=new h._cls.$oj$eLh())&&n.init();
s.$oj$vkh&&s.$oj$vkh.$oj$hCh("_u0a");
if(r){
s.$oj$gkh=(j=new h._cls.$oj$tLh())&&j.init();
s.$oj$gkh&&s.$oj$gkh.$oj$hCh("_a0a");
s.$oj$gkh&&s.$oj$gkh.$oj$Dct(o&&o.$oj$zft());
s.$oj$ykh=h._cls.$oj$RCh.$oj$QCh("_f0a");
s.$oj$ykh&&s.$oj$ykh.$oj$bCh(s.$oj$gkh);
s.$oj$vkh&&s.$oj$vkh.$oj$bCh(s.$oj$ykh);
}
var u=document.body.classList,c=e&&e.respondsToSelector_({
$oj$nLh:1
})&&e&&e.$oj$nLh();
if(c){
u.add("_l0a");
var a=h._cls.$oj$RCh.$oj$QCh("_c0a");
a&&a.$oj$bCh(o&&o.$oj$rLh());
s.$oj$vkh&&s.$oj$vkh.$oj$bCh(a);
}else{
u.add("_h0a");
u.add(window.top!=window?"_p0a":"_d0a");
var f=o&&o.$oj$rLh();
f&&f.$oj$hCh("_c0a");
s.$oj$vkh&&s.$oj$vkh.$oj$bCh(f);
}
if(e&&e.respondsToSelector_({
$oj$iLh:1
})&&e&&e.respondsToSelector_({
$oj$sLh:1
})&&e&&e.$oj$iLh()){
var l=e&&e.$oj$sLh(),d=s.$oj$Okh(l);
s.$oj$vkh&&s.$oj$vkh.$oj$bCh(d);
}
s.$oj$vkh&&s.$oj$vkh.$oj$oLh();
u.add("_v0a");
u.add("_m0a");
u.add("_g0a");
t.installBeacon();
s.$oj$uLh();
i.listen(window,"resize",function(){
s.$oj$uLh();
});
};
j.$oj$uLh=function(){
var o=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=44,i=h._g.$oj$m(0,0,o,t);
this.$oj$gkh&&this.$oj$gkh.$oj$aLh(i);
$.each(this.$oj$pkh,function($){
$&&$.$oj$fLh();
});
h._cls.$oj$RCh.$oj$lLh();
};
j.$oj$cLh=function($){
this.$oj$pkh||(this.$oj$pkh=[]);
this.$oj$pkh.push($);
};
j.$oj$hLh=function(){
if(h._cls.$oj$dLh.$oj$pLh())return screen.width>=600&&screen.height>=600?2:1;
return 0;
};
j.$oj$vLh=function(){
var $=this,o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),t=644-o;
1>t&&(t=0);
var h=function($){
var o=0;
if($>t){
o=t;
t=0;
}else{
o=$;
t-=$;
}
return o;
},i=0,n=0;
i+=h(12);
n+=h(12);
i+=h(20);
var j=66-i,s=44-n;
document.body.style.paddingTop=j+"px";
if($.$oj$wkh!=s){
$.$oj$wkh=s;
$.$oj$zkh();
}
};
j.$oj$mLh=function($){
};
j.$oj$Lot=function($,o){};
return s;
});
h._g.$oj$hNh=function(){
return!1;
};
h._g.$oj$pNh=function($){
var o,t,i;
n||(n=(o=(t=h._cls.$oj$St)&&t.alloc())&&o.init());
(i=n)&&i.$oj$At($);
};
h._g.$oj$dNh=function($){
h._g.$oj$pNh($.join("\n    "));
};
}();
!function(){
"use strict";
var o={};
h._registerClass({
$oj$gLh:1
},null,function(i,n){
function j(){
this.$oj$yLh=this.$oj$bLh=null;
this.constructor=j;
this.$oj_id=++h._id;
}
n.$oj$wLh=function($){
this.$oj$yLh=$;
};
n.$oj$ELh=function(){
return this.$oj$yLh;
};
i.$oj$ti=function(){
var $,h=t.class_getName(this),i=o[h];
i||(i=o[h]=($=this.alloc())&&$.init());
return i;
};
n.$oj$SLh=function(o,t){
$.each(this.$oj$bLh,function($){
$&&$.performSelector_withObject_(o,t);
});
};
n.$oj$xLh=function(){
h._g.$oj$pNh("-[$oj$gLh $oj$xLh] "+[]);
this.$oj$SLh({
$oj$TLh:1
},null);
};
n.$oj$NLh=function(){
h._g.$oj$pNh("-[$oj$gLh $oj$NLh] "+[]);
this.$oj$SLh({
$oj$CLh:1
},null);
};
n.$oj$kLh=function(){
h._g.$oj$pNh("-[$oj$gLh $oj$kLh] "+[]);
this.$oj$SLh({
$oj$LLh:1
},null);
};
n.$oj$ALh=function(){
h._g.$oj$pNh("-[$oj$gLh $oj$ALh] "+[]);
this.$oj$SLh({
$oj$OLh:1
},null);
};
n.$oj$MLh=function($){
h._g.$oj$pNh("-[$oj$gLh $oj$MLh] "+[$]);
this.$oj$SLh({
$oj$DLh:1
},$);
};
n.$oj$PLh=function($){
h._g.$oj$pNh("-[$oj$gLh $oj$PLh] "+[$]);
this.$oj$SLh({
$oj$HLh:1
},$);
};
n.$oj$BLh=function(o){
this.$oj$bLh||(this.$oj$bLh=[]);
this.$oj$bLh.push(o);
this.$oj$bLh=$.uniq(this.$oj$bLh);
};
n.$oj$jLh=function(o){
this.$oj$bLh=$.without(this.$oj$bLh,o);
};
n.$oj$FLh=function(){};
n.$oj$ILh=function(){};
n.$oj$pmt=function(){};
return j;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$qLh:1
},null,function(o,t){
function i(){
this.$oj$RLh=this.$oj$ULh=this.$oj$zLh=this.$oj$WLh=this.$oj$XLh=null;
this.$oj$VLh=this.$oj$JLh=this.$oj$KLh=this.$oj$QLh=this.$oj$GLh=this.$oj$YLh=0;
this.constructor=i;
this.$oj_id=++h._id;
}
t.$oj$ZLh=function($){
this.$oj$zLh=$;
};
t.$oj$d2=function(){
return this.$oj$zLh;
};
t.$oj$eAh=function(){
return this.$oj$VLh;
};
t.$oj$tAh=function(){
return this.$oj$YLh;
};
t.$oj$nAh=function(){
return this.$oj$JLh;
};
t.init=function(){
var $=this;
if($=i.$oj_super.prototype.init.call(this))if(h._cls.$oj$dLh.$oj$rAh()){
$.$oj$XLh=h._cls.$oj$iAh.$oj$ti();
$.$oj$XLh&&$.$oj$XLh.$oj$BLh($);
}else setTimeout(function(){
$.$oj$DLh(5);
},0);
return $;
};
t.$oj$sAh=function(){
var $,o=this.$oj$zLh&&this.$oj$zLh.$oj$Jr(),t={
0:["/vc/18/0/ab7f3fa3ff988db7f7a7fb941879761ccf104439/i0.ins","/vc/18/0/ab7f3fa3ff988db7f7a7fb941879761ccf104439/i0.xins","/vc/18/0/16a9dbaa1343ec7919ffb8ee516c452ba2c29835/i0.js"],
1:["/vc/18/0/0daa9bf48a2438747332e86af81f5fcc02ead47f/i1.ins","/vc/18/0/0daa9bf48a2438747332e86af81f5fcc02ead47f/i1.xins","/vc/18/0/6af84ba79b98682c49f7a8056d5e90ce5a8d0d7c/i1.js"],
2:["/vc/18/0/b61116e1955d75c5cf646a8e8176d6e75d4c1e09/i2.ins","/vc/18/0/b61116e1955d75c5cf646a8e8176d6e75d4c1e09/i2.xins","/vc/18/0/7b41ece39233cae392a1192cf72c1c143a1d1445/i2.js"],
5:["/vc/18/0/34351d4576c8f9cc222a12f5029561ba1a9c5071/i5.ins","/vc/18/0/34351d4576c8f9cc222a12f5029561ba1a9c5071/i5.xins","/vc/18/0/e9e3df759768a05dc93bbf99a0b70ef77281ddfc/i5.js"],
6:["/vc/18/0/619e77feae3fbccd15247471c9d5c03091769861/i6.ins","/vc/18/0/619e77feae3fbccd15247471c9d5c03091769861/i6.xins","/vc/18/0/178309652b35ec08c72cb6d0bb25f77cc8cdab89/i6.js"],
10:["/vc/18/0/b0cfdeb4797ac951104dcf209861c062e34fb925/i10.ins","/vc/18/0/b0cfdeb4797ac951104dcf209861c062e34fb925/i10.xins","/vc/18/0/c0354d77f3fe3d36c3d8fb9c19eca0b3578a9c0d/i10.js"],
11:["/vc/18/0/8a7b29699ead26d2dd8bb1169ae86113e7a142d9/i11.ins","/vc/18/0/8a7b29699ead26d2dd8bb1169ae86113e7a142d9/i11.xins","/vc/18/0/e1b0d3195e5fffd5d7698fce9606216b65b8a1b8/i11.js"],
12:["/vc/18/0/2514aea7e6cf8523920fd68f5c4de85e56689308/i12.ins","/vc/18/0/2514aea7e6cf8523920fd68f5c4de85e56689308/i12.xins","/vc/18/0/dd9f94b8e03a7ec64d75ae486b7ddb5c1acd4a3d/i12.js"],
13:["/vc/18/0/1ea3770dc636bb5ea046d00047dee8b32e73cd66/i13.ins","/vc/18/0/1ea3770dc636bb5ea046d00047dee8b32e73cd66/i13.xins","/vc/18/0/14fa6d9a049a888eed8b696a1c8f7b1717bd4c2a/i13.js"],
14:["/vc/18/0/135965fa760eea960d5ff35d900d465ac128d3cc/i14.ins","/vc/18/0/135965fa760eea960d5ff35d900d465ac128d3cc/i14.xins","/vc/18/0/a57512e2503e6841a3c533b638a4269e38a7d274/i14.js"],
15:["/vc/18/0/7ae32025b187e4ac87fecc973846e3adc37a8bfe/i15.ins","/vc/18/0/7ae32025b187e4ac87fecc973846e3adc37a8bfe/i15.xins","/vc/18/0/e1df57741f1f7b90bb8d6eed5e5094fd659bc2fa/i15.js"],
16:["/vc/18/0/8abf08ad51d42781ad97939cf3f9f1d2ea7b428f/i16.ins","/vc/18/0/8abf08ad51d42781ad97939cf3f9f1d2ea7b428f/i16.xins","/vc/18/0/75e43a7d7ae92f51eeeaebcf723be93830a4c6f3/i16.js"],
17:["/vc/18/0/e041dfe1bb63fcd84f1d27a1b3725f7aea2dc646/i17.ins","/vc/18/0/e041dfe1bb63fcd84f1d27a1b3725f7aea2dc646/i17.xins","/vc/18/0/effcf499b04460f90a95c0a0358e66f7600fff83/i17.js"],
18:["/vc/18/0/286a1355d04f4ccae3dafc9dfe29017d8b04c1b9/i18.ins","/vc/18/0/286a1355d04f4ccae3dafc9dfe29017d8b04c1b9/i18.xins","/vc/18/0/6ecb722d70b80022a998e990fa144e5e36f92c59/i18.js"],
19:["/vc/18/0/75fd6907ecbccdf3c312c6d8030881adc42bbf09/i19.ins","/vc/18/0/75fd6907ecbccdf3c312c6d8030881adc42bbf09/i19.xins","/vc/18/0/f6412744301c6e97739a205105dd027480f86102/i19.js"],
20:["/vc/18/0/7912bff79a10db90eadc4662e2755db380eba283/i20.ins","/vc/18/0/7912bff79a10db90eadc4662e2755db380eba283/i20.xins","/vc/18/0/ea757d0c44105e3b3d72eec033055341a1b182b8/i20.js"],
21:["/vc/18/0/19ddcba97f0beca975f09238b914e9dcf644c312/i21.ins","/vc/18/0/19ddcba97f0beca975f09238b914e9dcf644c312/i21.xins","/vc/18/0/4bbc9f1f35ed87c021d3410cea49c8eb6030194d/i21.js"],
22:["/vc/18/0/2618dd2a1e964de1fe8174c8182870b88a870391/i22.ins","/vc/18/0/2618dd2a1e964de1fe8174c8182870b88a870391/i22.xins","/vc/18/0/283a102c4ba3bb54407ea693dc16e3c09012ac08/i22.js"],
23:["/vc/18/0/84e5842964c2d0115001e3b26794e7704f26b0d5/i23.ins","/vc/18/0/84e5842964c2d0115001e3b26794e7704f26b0d5/i23.xins","/vc/18/0/33b8d52ba4bc579b9c045bfa3129486f677fcab3/i23.js"],
24:["/vc/18/0/5aebef5b5a61238f5975b1c6554179ae1d4cf9ae/i24.ins","/vc/18/0/5aebef5b5a61238f5975b1c6554179ae1d4cf9ae/i24.xins","/vc/18/0/56c0bbff2f78ec46c42e00a09a83c89e6e01995a/i24.js"],
25:["/vc/18/0/ced607aaa32994399f06454695823c475b79b493/i25.ins","/vc/18/0/ced607aaa32994399f06454695823c475b79b493/i25.xins","/vc/18/0/b04bb3636b0dfd44467278b2fd700bb9236cc9f0/i25.js"],
26:["/vc/18/0/5068adb2711fc701d5ee5d09a95dcbe76026a743/i26.ins","/vc/18/0/5068adb2711fc701d5ee5d09a95dcbe76026a743/i26.xins","/vc/18/0/e7db2ec7152ea2d2eed8cadaded5066dcb0ebaeb/i26.js"],
27:["/vc/18/0/0f969e9bae0a467b45ffbeb5803da28d05b9d97e/i27.ins","/vc/18/0/0f969e9bae0a467b45ffbeb5803da28d05b9d97e/i27.xins","/vc/18/0/dc9660b399d81661f9c29d1ed86a73166e093b20/i27.js"],
28:["/vc/18/0/1fe084f2c42ad57c90bc9068f95cf4399dee0c7e/i28.ins","/vc/18/0/1fe084f2c42ad57c90bc9068f95cf4399dee0c7e/i28.xins","/vc/18/0/a79c7c4c50f48744c794afe83feb414e1f54ed0d/i28.js"],
29:["/vc/18/0/e4537de4893aa0bd9224580dc9ec79058536390f/i29.ins","/vc/18/0/e4537de4893aa0bd9224580dc9ec79058536390f/i29.xins","/vc/18/0/f49ac9ff681f6a9083c0666bf956a70a9f3fe8cf/i29.js"],
100:["/vc/18/0/da65296b4ffbb7d7476cc009396ec09be6d9cca5/i100.ins","/vc/18/0/da65296b4ffbb7d7476cc009396ec09be6d9cca5/i100.xins","/vc/18/0/a2cdc898108ba25381be16d83e401fab6e199172/i100.js"],
102:["/vc/18/0/e19bc1e1685287d10b9fae62312d9f192e335253/i102.ins","/vc/18/0/e19bc1e1685287d10b9fae62312d9f192e335253/i102.xins","/vc/18/0/63b583d8a9d21ed575a939a58a6e6aa6ebc69319/i102.js"]
},i=t[o];
try{
var n=i[0];
i[0]=i[1];
i[1]=n;
}catch(j){
($=h._cls.$oj$lkh.$oj$Akh())&&$.$oj$jkh("Unknown instrument: "+this.$oj$zLh+", "+o,null,null);
}
this.$oj$XLh&&this.$oj$XLh.$oj$FLh(this.$oj$zLh,i);
};
t.$oj$oAh=function(o,t,i,n){
var j=this;
h._g.$oj$pNh("-[$oj$qLh $oj$oAh] "+[o,t,i,n]);
var s=o!=this.$oj$YLh||n;
this.$oj$YLh=o;
this.$oj$VLh=t;
this.$oj$JLh=i;
s&&$.each(this.$oj$WLh,function($){
$&&$.respondsToSelector_({
$oj$uAh:1
})&&$&&$.$oj$uAh(j);
});
};
t.$oj$aAh=function(){
var o=this,t=(Date.now()-this.$oj$GLh)/1e3;
if(this.$oj$KLh<this.$oj$RLh.length){
var h=this.$oj$RLh[this.$oj$KLh];
if(t>=h.o){
$.each(this.$oj$WLh,function($){
$&&$.respondsToSelector_({
$oj$fAh:1
})&&$&&$.$oj$fAh(o,o.$oj$KLh,h.d);
});
o.$oj$KLh++;
}
}
};
t.$oj$TLh=function(){
h._g.$oj$pNh("-[$oj$qLh $oj$TLh] "+[]);
this.$oj$YLh<2&&this.$oj$oAh(2,0,0,!1);
this.$oj$zLh&&this.$oj$sAh();
};
t.$oj$DLh=function($){
var o;
h._g.$oj$pNh("-[$oj$qLh $oj$DLh] "+[$]);
this.$oj$oAh(1,$,0,this.$oj$VLh!=$);
this.$oj$WLh&&0!==this.$oj$WLh.length||(o=h._cls.$oj$cAh.$oj$ti())&&o.$oj$lAh($);
};
t.$oj$HLh=function($){
h._g.$oj$pNh("-[$oj$qLh $oj$HLh] "+[$]);
this.$oj$oAh(3,0,$,!0);
};
t.$oj$CLh=function(){
h._g.$oj$pNh("-[$oj$qLh $oj$CLh] "+[]);
this.$oj$oAh(4,0,1,!0);
this.$oj$ULh&&this.$oj$ILh(this.$oj$ULh,!0);
};
t.$oj$LLh=function(){
var $=this;
h._g.$oj$pNh("-[$oj$qLh $oj$LLh] "+[]);
if((this.$oj$XLh&&this.$oj$XLh.$oj$ELh())==this.$oj$ULh){
this.$oj$GLh=Date.now();
this.$oj$KLh=0;
this.$oj$QLh&&clearInterval(this.$oj$QLh);
this.$oj$QLh=setInterval(function(){
$.$oj$aAh();
});
$.$oj$oAh(5,0,1,!1);
}
};
t.$oj$OLh=function(){
h._g.$oj$pNh("-[$oj$qLh $oj$OLh] "+[]);
if(this.$oj$QLh){
clearInterval(this.$oj$QLh);
this.$oj$QLh=0;
}
this.$oj$oAh(4,0,1,!1);
};
t.$oj$hAh=function(){
h._g.$oj$pNh("-[$oj$qLh $oj$hAh] "+[]);
if(this.$oj$YLh<4)return;
if(!this.$oj$ULh)return;
this.$oj$oAh(4,0,1,!1);
this.$oj$XLh&&this.$oj$XLh.$oj$ILh(this.$oj$ULh,!0);
};
t.$oj$pAh=function($){
h._g.$oj$pNh("-[$oj$qLh $oj$pAh] "+[$]);
if(!this.$oj$zLh||(this.$oj$zLh&&this.$oj$zLh.$oj$Jr())!=$){
this.$oj$ULh=null;
this.$oj$zLh=h._cls.$oj$Mr.$oj$Or($);
this.$oj$YLh>=2&&this.$oj$sAh();
}
};
t.$oj$dAh=function($){
this.$oj$ILh($,!1);
};
t.$oj$ILh=function(o,t){
var i=this;
h._g.$oj$pNh("-[$oj$qLh $oj$ILh] "+[o,t]);
if(this.$oj$ULh!=o){
var n={};
$.each(o&&o.$oj$Cr(),function($){
var o=$&&$.$oj$pr(),t=$&&$.$oj$dr(),h=Math.floor(1e3*o),i=n[h];
n[h]={
o:h/1e3,
d:i?Math.max(t,i.d):t
};
});
i.$oj$RLh=$.values(n).sort(function($,o){
return $.o-o.o;
});
}
i.$oj$ULh=o;
if(!i.$oj$ULh)return;
if(i.$oj$YLh<4)return;
i.$oj$oAh(4,0,1,!1);
i.$oj$XLh&&i.$oj$XLh.$oj$ILh(o,t);
};
t.$oj$pmt=function(){
h._g.$oj$pNh("-[$oj$qLh $oj$pmt] "+[]);
this.$oj$XLh&&this.$oj$XLh.$oj$pmt();
this.$oj$QLh&&clearInterval(this.$oj$QLh);
this.$oj$QLh=0;
};
t.$oj$vAh=function($){
this.$oj$WLh||(this.$oj$WLh=[]);
this.$oj$WLh.push($);
};
t.$oj$mAh=function(o){
this.$oj$WLh.length&&(this.$oj$WLh=$.without(this.$oj$WLh||[],o));
};
t.$oj$dr=function(){
return this.$oj$ULh&&this.$oj$ULh.$oj$Nr();
};
t.$oj$Tr=function(){
return this.$oj$ULh&&this.$oj$ULh.$oj$Tr();
};
return i;
});
h._registerClass({
$oj$cAh:1
},null,function($,o){
function t(){
this.$oj$gAh=this.$oj$yAh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
var i=void 0;
$.$oj$ti=function(){
var $;
i||(i=($=this.alloc())&&$.init());
return i;
};
o.$oj$lAh=function($){
var o;
if(this.$oj$gAh)return;
var t=void 0;
this.$oj$yAh="/faq#exercise-audio";
2==$?t="The audio examples could not load because a firewall or filter blocked the audio file.":3==$?t="The audio examples could not load because the audio file download was interrupted.":5==$?t="The audio examples could not load because a newer version of your web browser is required.":6==$?t="The audio examples could not load because your web browser could not decode the audio file.":7==$?t="The audio examples could not load because the audio file download was corrupted.":$&&(t="The audio examples could not load because the audio system encountered an error.");
if(!t)return;
this.$oj$gAh=(o=new h._cls.$oj$BNh())&&o.$oj$oCh(this,"Unable to Play Audio",t,"OK",null,this.$oj$yAh?["View Help"]:null);
this.$oj$gAh&&this.$oj$gAh.$oj$lCh(!0);
};
o.$oj$PCh=function($,o){
var t;
if($==this.$oj$gAh){
o!=($&&$.$oj$GNh())&&(t=h._cls.$oj$lkh.$oj$Akh())&&t.$oj$Hkh(this.$oj$yAh);
this.$oj$gAh&&this.$oj$gAh.$oj$nCh(null);
this.$oj$gAh=null;
}
};
return t;
});
}();
!function(){
"use strict";
var t=o("browser"),i=null;
h._registerClass({
$oj$dLh:1
},null,function(o){
function n(){
this.constructor=n;
this.$oj_id=++h._id;
}
o.$oj$bAh=function(){
return t.isApplePad();
};
o.$oj$wAh=function(){
return t.isApplePhone();
};
o.$oj$EAh=function(){
return t.isMobileChrome();
};
o.$oj$SAh=function(){
return t.isGecko();
};
o.$oj$xAh=function(){
return t.isOpera();
};
o.$oj$TAh=function(){
return t.isSafari();
};
o.$oj$NAh=function(){
return t.isWebKit();
};
o.$oj$CAh=function(){
return t.isOSX();
};
o.$oj$pLh=function(){
return t.isMobile();
};
o.$oj$kAh=function($){
t.setViewport($);
};
o.$oj$LAh=function(){
t.useNativeResolution();
};
o.$oj$Ptt=function(){
return t.prefersTouchEvents();
};
o.$oj$rAh=function(){
try{
var o=this.$oj$AAh();
if(!o||!$.isFunction(o.createDynamicsCompressor))return!1;
var t=o.createBufferSource();
if(!(t&&t.playbackRate&&$.isFunction(t.start)&&$.isFunction(t.stop)&&$.isFunction(t.connect)))return!1;
var h=o.createDynamicsCompressor();
if(!(h&&h.threshold&&h.knee&&h.ratio&&h.attack&&$.isFunction(h.connect)))return!1;
var i=o.createGain();
if(!i||!$.isFunction(i.connect))return!1;
if(!o.destination)return!1;
var n=document.createElement("audio");
if(n&&$.isFunction(n.canPlayType)&&!n.canPlayType("audio/mpeg;"))return!1;
}catch(j){
return!1;
}
return!0;
};
o.$oj$AAh=function(){
if(!i)try{
var $=window.AudioContext;
$||($=window.webkitAudioContext);
i=$?new $():null;
}catch(o){}
return i;
};
return n;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$OAh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$MAh=0;
this.$oj$DAh=this.$oj$PAh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$HAh=function(){
return this.$oj$MAh;
};
o.$oj$BAh=function(){
return this.$oj$PAh;
};
o.$oj$U2=function(){
return this.$oj$DAh;
};
$.$oj$VCh=function(){
return"_j0a";
};
$.$oj$jAh=function($){
var o=0;
34==$?o=38:22==$?o=39:28==$?o=40:26==$?o=41:32==$?o=42:30==$?o=43:24==$?o=44:-1==$&&(o=45);
return o;
};
$.$oj$FAh=function($){
var o=0;
$>=-7&&7>=$&&(o=[13,12,11,10,9,8,7,6,14,15,16,17,18,19,20][$+7]);
return o;
};
o.$oj$IAh=function($){
var o=this;
if(o=t.$oj_super.prototype.init.call(this)){
o.$oj$MAh=$;
o.$oj$DAh=!0;
o.$oj$qAh();
}
return o;
};
o.$oj$qAh=function(){
var $=1,o=[0,0,0,0],t=this.$oj$MAh;
1==t?o=[120,0,13,20]:2==t?o=[135,0,7,20]:3==t?o=[144,0,5,20]:4==t?o=[151,0,6,20]:5==t?o=[159,0,10,10]:6==t?o=[175,0,13,1]:7==t?o=[60,0,6,18]:8==t?o=[60,0,14,26]:9==t?o=[60,0,22,26]:10==t?o=[60,0,30,26]:11==t?o=[60,0,38,26]:12==t?o=[60,0,46,26]:13==t?o=[60,0,54,26]:14==t?o=[0,0,6,20]:15==t?o=[0,0,14,30]:16==t?o=[0,0,22,30]:17==t?o=[0,0,30,30]:18==t?o=[0,0,38,30]:19==t?o=[0,0,46,30]:20==t?o=[0,0,54,30]:21==t?o=[0,64,23,14]:22==t?o=[24,64,16,24]:23==t?o=[42,64,15,27]:24==t?o=[58,64,45,24]:25==t?o=[104,64,26,30]:26==t?o=[131,64,18,22]:27==t?o=[150,64,18,22]:28==t?o=[169,64,24,26]:29==t?o=[195,64,12,26]:30==t?o=[209,64,30,20]:31==t?o=[240,64,22,20]:32==t?o=[0,202,20,20]:33==t?o=[20,202,20,20]:34==t?o=[40,202,20,20]:35==t?o=[60,202,20,20]:36==t?o=[80,202,20,20]:37==t?o=[102,202,30,20]:38==t?o=[0,135,43,65]:39==t?o=[43,135,43,65]:40==t?o=[86,135,43,65]:41==t?o=[129,135,43,65]:42==t?o=[172,135,43,65]:43==t?o=[215,135,43,65]:44==t?o=[258,135,43,65]:45==t?o=[172,204,73,41]:46==t?o=[254,204,46,37]:47==t?o=[266,0,8,10]:48==t?o=[172,248,79,32]:49==t&&(o=[254,248,79,32]);
h._g.$oj$hNh()||(1==t?o=[220,0,11,18]:2==t?o=[232,0,6,18]:3==t?o=[240,0,5,18]:4==t?o=[246,0,6,20]:5==t?o=[254,0,9,9]:26==t?o=[190,0,12,16]:27==t&&(o=[204,0,12,16]));
this.$oj$PAh&&(this.$oj$MAh>=1&&this.$oj$MAh<=37?o[1]+=32:this.$oj$MAh>=48&&this.$oj$MAh<=49&&(o[1]+=36));
this.$oj$DAh||($*=.35);
6==this.$oj$MAh&&($*=.35);
var i=this.$oj$L4();
i.opacity=String($);
i.backgroundPosition="-"+o[0]+"px -"+o[1]+"px";
i.width=o[2]+"px";
i.height=o[3]+"px";
};
o.$oj$q2=function($){
if(this.$oj$DAh!=$){
this.$oj$DAh=$;
this.$oj$qAh();
}
};
o.$oj$RAh=function($){
if(this.$oj$PAh!=$){
this.$oj$PAh=$;
this.$oj$qAh();
}
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$cCh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.constructor=t;
this.$oj_id=++h._id;
}
$.$oj$VCh=function(){
return"_q0a";
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this),o=void 0;
$.appendChild(i.create("div",{
"class":"_z0a"
},o=i.create("div",{
"class":"_e1a"
})));
return o;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$YCh:1
},{
$oj$UAh:1
},function($,o){
function t(){
h._cls.$oj$UAh.call(this);
this.$oj$zAh=null;
this.$oj$WAh=this.$oj$XAh=this.$oj$VAh=this.$oj$JAh=0;
this.$oj$KAh=this.$oj$QAh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$GAh=function($){
this.$oj$WAh=$;
};
o.$oj$YAh=function(){
return this.$oj$WAh;
};
o.$oj$ZAh=function($){
this.$oj$XAh=$;
};
o.$oj$eOh=function(){
return this.$oj$XAh;
};
o.$oj$tOh=function($){
this.$oj$VAh=$;
};
o.$oj$nOh=function(){
return this.$oj$VAh;
};
$.$oj$VCh=function(){
return"_t1a";
};
o.$oj$JCh=function(){
var $,o=t.$oj_super.prototype.$oj$JCh.call(this);
o.setAttribute("role","button");
this.$oj$zAh=($=new h._cls.$oj$iOh())&&$.$oj$rOh(o,1,this);
return o;
};
o.$oj$sOh=function(){
if(this.$oj$JAh){
clearTimeout(this.$oj$JAh);
this.$oj$JAh=0;
}
};
o.$oj$oOh=function(){
var $=this;
this.$oj$sOh();
this.$oj$zAh&&this.$oj$zAh.$oj$uOh()&&this.$oj$aOh();
this.$oj$VAh&&(this.$oj$JAh=setTimeout(function(){
$.$oj$oOh();
},$.$oj$VAh));
};
o.$oj$fOh=function(){
var $=this;
if(!this.$oj$U2())return!1;
if(!this.$oj$lOh())return!1;
this.$oj$sOh();
var o=this.$oj$WAh,t=this.$oj$XAh||this.$oj$VAh;
if(2==o&&t){
this.$oj$JAh=setTimeout(function(){
$.$oj$oOh();
},t);
$.$oj$aOh();
}else 1==o&&$.$oj$aOh();
var i=$.$oj$zAh&&$.$oj$zAh.$oj$cOh(),n=i.x-window.pageXOffset,j=i.y-window.pageYOffset,s=$.$oj$NCh().getBoundingClientRect();
$.$oj$hOh(h._g.$oj$s(n-s.left,j-s.top));
$.$oj$pOh();
return!0;
};
o.$oj$dOh=function(){
this.$oj$pOh();
};
o.$oj$vOh=function($){
this.$oj$sOh();
0==this.$oj$WAh&&$&&$.$oj$uOh()&&this.$oj$aOh();
this.$oj$mOh();
this.$oj$pOh();
};
o.$oj$pOh=function(){
t.$oj_super.prototype.$oj$pOh.call(this);
this.$oj$fkh("pressed",this.$oj$gOh());
};
o.$oj$gOh=function(){
return this.$oj$U2()&&(this.$oj$KAh||this.$oj$zAh&&this.$oj$zAh.$oj$uOh());
};
o.$oj$yOh=function(){
var $=this;
if(this.$oj$QAh)return;
this.$oj$bOh("0","tabindex");
i.listen(this.$oj$NCh(),"keydown",function(o){
var t=h._cls.$oj$EOh.$oj$wOh(o.keyCode);
if($.$oj$U2()){
if("Return"==t||"Enter"==t){
$.$oj$SOh();
o.preventDefault();
}
o.stopPropagation();
}
});
$.$oj$QAh=!0;
};
o.$oj$xOh=function(){
var $=this;
if(this.$oj$U2()){
this.$oj$KAh=!0;
this.$oj$pOh();
setTimeout(function(){
$.$oj$KAh=!1;
$.$oj$pOh();
$.$oj$aOh();
},100);
}
};
o.$oj$hOh=function(){};
o.$oj$mOh=function(){};
o.$oj$aOh=function(){
this.$oj$SOh();
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$UAh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$TOh=this.$oj$NOh=this.$oj$COh=this.$oj$kOh=null;
this.$oj$LOh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$AOh=function(){
return this.$oj$COh;
};
o.$oj$OOh=function(){
return this.$oj$TOh;
};
o.$oj$MOh=function($){
var o=this.$oj$NOh;
if(o!==$){
this.$oj$NOh=$;
this.$oj$pOh(o);
}
};
o.$oj$lOh=function(){
return this.$oj$NOh;
};
o.$oj$DOh=function($){
var o=this.$oj$kOh;
if(o!==$){
this.$oj$kOh=$;
this.$oj$pOh(o);
}
};
o.$oj$POh=function(){
return this.$oj$kOh;
};
o.$oj$q2=function($){
var o=this.$oj$LOh;
if(o!==$){
this.$oj$LOh=$;
this.$oj$pOh(o);
}
};
o.$oj$U2=function(){
return this.$oj$LOh;
};
o.init=function(){
var $=this;
($=t.$oj_super.prototype.init.call(this))&&($.$oj$LOh=!0);
return $;
};
o.$oj$pOh=function(){
var $=!this.$oj$U2(),o=this.$oj$kOh,t=this.$oj$NOh&&!$;
this.$oj$fkh("actionable",t);
this.$oj$fkh("disabled",$);
o&&!$?this.$oj$bOh(o,"title"):this.$oj$HOh("title");
};
o.$oj$SOh=function(){
this.$oj$NOh&&this.$oj$NOh();
};
o.$oj$OCh=function($,o){
var t=this;
if(this.$oj$COh!=$||this.$oj$TOh!=o){
this.$oj$COh=$;
this.$oj$TOh=o;
$&&o?this.$oj$NOh=function(){
$&&$.performSelector_withObject_(o,t);
}:t.$oj$NOh=null;
t.$oj$pOh();
}
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$BOh:1
},null,function($,o){
function t(){
this.$oj$jOh=this.$oj$FOh=null;
this.$oj$IOh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$qOh=function($){
this.$oj$FOh=$;
};
o.$oj$xmt=function(){
return this.$oj$FOh;
};
o.$oj$ROh=function($){
this.$oj$IOh=$;
};
o.$oj$UOh=function(){
return this.$oj$IOh;
};
o.$oj$zOh=function($){
var o,t,i;
if(!this.$oj$FOh)return;
for(var n=this.$oj$FOh.length,j=[],s=[],r=0;n>r;r++){
j[r]=h._g.$oj$g();
s[r]=this.$oj$IOh;
}
h._g.$oj$G(j,$,s);
for(var e=0;n>e;e++){
var u=(o=this.$oj$FOh[e])&&o.$oj$Cet();
if(!u)continue;
for(var c=u.length,a=[],f=[],l=0;c>l;l++){
a[l]=h._g.$oj$g();
f[l]=this.$oj$IOh;
}
h._g.$oj$Q(a,j[e],f);
for(var d=0;c>d;d++)(t=(i=u[d])&&i.$oj$rLh())&&t.$oj$aLh(a[d]);
}
};
o.$oj$WOh=function(){
this.$oj$FOh=null;
this.$oj$jOh=null;
};
o.$oj$XOh=function(){
var $,o=($=new h._cls.$oj$VOh())&&$.init();
this.$oj$FOh||(this.$oj$FOh=[]);
this.$oj$FOh.push(o);
this.$oj$jOh=o;
return o;
};
o.$oj$JOh=function(){
this.$oj$jOh||this.$oj$XOh();
return this.$oj$jOh&&this.$oj$jOh.$oj$JOh();
};
return t;
});
h._registerClass({
$oj$VOh:1
},null,function($,o){
function t(){
this.$oj$KOh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$QOh=function($){
this.$oj$KOh=$;
};
o.$oj$Cet=function(){
return this.$oj$KOh;
};
o.$oj$JOh=function(){
var $,o=($=new h._cls.$oj$GOh())&&$.init();
this.$oj$KOh||(this.$oj$KOh=[]);
this.$oj$KOh.push(o);
return o;
};
return t;
});
h._registerClass({
$oj$GOh:1
},null,function($,o){
function t(){
this.$oj$YOh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$ZOh=function($){
this.$oj$YOh=$;
};
o.$oj$rLh=function(){
return this.$oj$YOh;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$eMh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$tMh=this.$oj$nMh=this.$oj$rMh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$AOh=function(){
return this.$oj$rMh;
};
o.$oj$iMh=function(){
return this.$oj$tMh;
};
o.$oj$MOh=function($){
this.$oj$nMh=$;
};
o.$oj$lOh=function(){
return this.$oj$nMh;
};
o.init=function(){
var $=this;
($=t.$oj_super.prototype.init.call(this))&&($.$oj$tMh="#");
return $;
};
$.$oj$sMh=function(){
return"a";
};
o.$oj$JCh=function(){
var $=this,o=t.$oj_super.prototype.$oj$JCh.call(this);
o.setAttribute("href",this.$oj$tMh);
o.addEventListener("click",function(o){
if($.$oj$nMh){
$.$oj$nMh($,o);
o.preventDefault();
}
});
o.addEventListener("contextmenu",function($){
$.stopPropagation();
});
return o;
};
o.$oj$oMh=function($){
if(this.$oj$tMh!=$){
this.$oj$tMh=$;
this.$oj$bOh($,"href");
}
};
o.$oj$uMh=function($){
if(this.$oj$rMh!=$){
this.$oj$rMh=$;
this.$oj$bOh($,"target");
}
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$aMh:1
},{
$oj$RCh:1
},function(o,t){
function n(){
h._cls.$oj$RCh.call(this);
this.$oj$fMh=this.$oj$lMh=this.$oj$cMh=null;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$xmt=function(){
return this.$oj$cMh;
};
o.$oj$sMh=function(){
return"table";
};
t.$oj$fLh=function(){
var o=this,t=0;
function h($,o){
if(!$)return;
var h=$&&$.$oj$yet();
h||(h=o/t);
$&&$.$oj$bOh(String(o),"colSpan");
($&&$.$oj$NCh()).style.width=-1==h?"":100*h+"%";
}
$.each(o.$oj$cMh,function(o){
var h=0;
$.each(o&&o.$oj$hMh(),function($){
var o=$&&$.$oj$pMh();
o||(o=1);
h+=o;
});
h>t&&(t=h);
});
o.$oj$lMh&&o.$oj$lMh.remove();
var n=i.create("tr");
n.style.padding="0";
n.style.margin="0";
n.style.border="none";
for(var j=0;t>j;j++){
var s=i.create("td");
s.style.padding="0";
s.style.margin="0";
s.style.width=100/t+"%";
n.appendChild(s);
}
i.prepend(o.$oj$dMh(),n);
o.$oj$lMh=n;
$.each(o.$oj$cMh,function(o){
var i=0,n=void 0;
$.each(o&&o.$oj$hMh(),function($){
var o=$&&$.$oj$pMh();
o||(o=1);
i+=o;
h($,o);
n=$;
});
i!=t&&h(n,1+(t-i));
});
};
t.$oj$JCh=function(){
var $=n.$oj_super.prototype.$oj$JCh.call(this),o=i.create("tbody");
$.appendChild(o);
return o;
};
t.$oj$WOh=function(){
this.$oj$lMh&&this.$oj$lMh.remove();
this.$oj$cMh=this.$oj$fMh=this.$oj$lMh=null;
var o=this.$oj$vMh().slice(0);
$.each(o,function($){
$&&$.$oj$Qkh();
});
};
t.$oj$XOh=function(){
var $,o=($=new h._cls.$oj$mMh())&&$.init();
this.$oj$bCh(o);
this.$oj$cMh||(this.$oj$cMh=[]);
this.$oj$cMh.push(o);
this.$oj$fMh=o;
return o;
};
t.$oj$gMh=function($){
this.$oj$fMh||this.$oj$XOh();
var o=h._cls.$oj$bMh.$oj$yMh($);
this.$oj$fMh&&this.$oj$fMh.$oj$wMh(o);
return o;
};
t.$oj$EMh=function(){
return this.$oj$gMh("th");
};
t.$oj$JOh=function(){
return this.$oj$gMh("td");
};
return n;
});
h._registerClass({
$oj$mMh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$SMh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$xMh=function($){
this.$oj$SMh=$;
};
o.$oj$hMh=function(){
return this.$oj$SMh;
};
$.$oj$sMh=function(){
return"tr";
};
o.$oj$wMh=function($){
this.$oj$SMh||(this.$oj$SMh=[]);
this.$oj$SMh.push($);
this.$oj$bCh($);
};
return t;
});
h._registerClass({
$oj$bMh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$TMh=this.$oj$NMh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$CMh=function($){
this.$oj$TMh=$;
};
o.$oj$pMh=function(){
return this.$oj$TMh;
};
o.$oj$get=function($){
this.$oj$NMh=$;
};
o.$oj$yet=function(){
return this.$oj$NMh;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$kMh:1
},null,function($,o){
function t(){
this.$oj$LMh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$AMh=function($){
this.$oj$LMh=$;
};
o.$oj$OMh=function(){
return this.$oj$LMh;
};
$.$oj$MMh=function($){
var o;
return(o=this.alloc())&&o.$oj$DMh([$]);
};
$.$oj$PMh=function($){
var o;
return(o=this.alloc())&&o.$oj$DMh($);
};
$.$oj$HMh=function($,o){
var t;
return(t=this.alloc())&&t.$oj$DMh([o,$]);
};
o.$oj$BMh=function($){
return this.$oj$DMh([$]);
};
o.$oj$DMh=function($){
var o=this;
(o=t.$oj_super.prototype.init.call(this))&&(o.$oj$LMh=$);
return o;
};
o.description=function(){
return"<"+this.className()+" "+this.$oj$LMh.join(",")+">";
};
o.$oj$jMh=function($){
var o,t,h=this.$oj$LMh.slice(0);
h.push($);
return(o=(t=this.constructor)&&t.alloc())&&o.$oj$DMh(h);
};
o.$oj$FMh=function(){
var $,o,t=this.$oj$LMh.slice(0);
t.pop();
return($=(o=this.constructor)&&o.alloc())&&$.$oj$DMh(t);
};
o.$oj$IMh=function($){
if($>=this.$oj$LMh.length||0>$)throw new Error("Invalid position "+$);
return this.$oj$LMh[$];
};
o.$oj$qMh=function(){
return this.$oj$LMh.length;
};
o.$oj$RMh=function(){
return this.$oj$IMh(0);
};
o.$oj$UMh=function(){
return this.$oj$IMh(1);
};
return t;
});
}();
!function(){
"use strict";
var o={
Return:10,
Enter:13,
Escape:27,
Space:32,
Left:37,
Up:38,
Right:39,
Down:40,
Delete:46,
Backspace:8
},t=null,i=!1;
function n(){
if(i)return;
for(var h=48;90>=h;h++)o[String.fromCharCode(h)]=h;
t={};
$.each(o,function($,o){
t[$]=o;
});
i=!0;
}
h._registerClass({
$oj$EOh:1
},null,function(j){
function s(){
this.constructor=s;
this.$oj_id=++h._id;
}
j.$oj$wOh=function($){
i||n();
return t[$];
};
j.$oj$zMh=function(t){
i||n();
var h=$.last(t.split(" "));
return o[h]||0;
};
j.$oj$WMh=function($){
return $>=37&&40>=$;
};
j.$oj$XMh=function($){
return $>=48&&57>=$;
};
j.$oj$VMh=function($){
return $-48;
};
return s;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$JMh:1
},null,function(o,t){
function i(){
this.$oj$KMh=null;
this.constructor=i;
this.$oj_id=++h._id;
}
var n=null;
o.$oj$ti=function(){
var $;
n||(n=($=this.alloc())&&$.init());
return n;
};
t.init=function(){
var $=this;
if($=i.$oj_super.prototype.init.call(this)){
$.$oj$KMh=[];
navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(function(o){
o.inputs.forEach(function(o){
o.onmidimessage=function(o){
if(o.data&&o.data.length){
var t=o.data;
$.$oj$QMh(t);
}
};
});
});
}
return $;
};
t.$oj$vAh=function($){
this.$oj$KMh.push($);
};
t.$oj$mAh=function(o){
this.$oj$KMh=$.without(this.$oj$KMh,o);
};
t.$oj$QMh=function(o){
if(144==(240&o[0])){
var t=o[1]||0,h=o[2]||0;
t&&h&&$.each(this.$oj$KMh,function($){
$&&$.$oj$GMh(t);
});
}
};
return i;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$mCh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$YMh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
$.$oj$VCh=function(){
return"_n1a";
};
o.$oj$JCh=function(){
var $,o=t.$oj_super.prototype.$oj$JCh.call(this);
o.setAttribute("role","dialog");
this.$oj$YMh=($=new h._cls.$oj$iOh())&&$.$oj$rOh(o,1,this);
return o;
};
o.$oj$fOh=function(){
return!0;
};
o.$oj$dOh=function(){};
return t;
});
}();
!function(){
"use strict";
var o=[];
h._registerClass({
$oj$vCh:1
},null,function(t,i){
function n(){
this.$oj$ZMh=this.$oj$eDh=this.$oj$tDh=this.$oj$nDh=this.$oj$rDh=this.$oj$iDh=null;
this.$oj$sDh=!1;
this.constructor=n;
this.$oj_id=++h._id;
}
i.$oj$oDh=function(){
return this.$oj$nDh;
};
i.$oj$uDh=function(){
return this.$oj$ZMh;
};
i.$oj$aDh=function(){
return this.$oj$sDh;
};
t.$oj$fDh=function(){
return o.length>0;
};
t.$oj$dCh=function($,o){
var t;
return(t=this.alloc())&&t.$oj$lDh($,o);
};
i.$oj$lDh=function($,t){
var i,j,s,r=this;
if(r=n.$oj_super.prototype.init.call(this)){
var e=h._cls.$oj$RCh.$oj$QCh("_r1a"),u=h._cls.$oj$RCh.$oj$QCh("_i1a");
r.$oj$nDh=$;
r.$oj$ZMh=t;
1!=((i=h._cls.$oj$lkh.$oj$Akh())&&i.$oj$hLh())&&e&&e.$oj$hCh("_s1a");
var c=u&&u.$oj$NCh(),a=e&&e.$oj$NCh();
document.body.appendChild(c);
document.body.appendChild(a);
r.$oj$iDh=(j=new h._cls.$oj$iOh())&&j.$oj$rOh(c,1,r);
r.$oj$tDh=(s=new h._cls.$oj$iOh())&&s.$oj$rOh(a,1,r);
var f=h._cls.$oj$cDh.$oj$ti();
f&&f.$oj$hDh(c);
f&&f.$oj$hDh(a);
r.$oj$rDh=u;
r.$oj$eDh=e;
o.push(r);
document.body.classList.add("_o1a");
r.$oj$eDh&&r.$oj$eDh.$oj$bCh(r.$oj$nDh);
}
return r;
};
i.$oj$pDh=function($){
this.$oj$sDh=$;
var o="_u1a";
this.$oj$eDh&&this.$oj$eDh.$oj$fkh(o,$);
this.$oj$rDh&&this.$oj$rDh.$oj$fkh(o,$);
};
i.$oj$TCh=function(){
return this.$oj$rDh&&this.$oj$rDh.$oj$L4();
};
i.$oj$fOh=function(){
return!0;
};
i.$oj$dOh=function(){};
i.$oj$vOh=function($){
$&&$.$oj$uOh()&&this.$oj$ZMh&&this.$oj$ZMh(this);
};
i.$oj$HCh=function(){
var t,i=this.$oj$rDh&&this.$oj$rDh.$oj$NCh(),n=this.$oj$eDh&&this.$oj$eDh.$oj$NCh();
i&&i.parentNode&&i.parentNode.removeChild(i);
n&&n.parentNode&&n.parentNode.removeChild(n);
o=$.without(o,this);
0==o.length&&document.body.classList.remove("_o1a");
(t=h._cls.$oj$mDh.$oj$vDh())&&t.$oj$dDh("ModalSessionDidEndNotification",this);
};
return n;
});
}();
!function(){
"use strict";
h._g.$oj$vNh=function($){
var o,t,i,n,j,s,r=(o=(t=h._cls.$oj$gDh)&&t.alloc())&&o.init();
(i=r)&&i.$oj$gi($);
(n=(j=h._cls.$oj$ei)&&j.$oj$ti())&&n.$oj$ni(r);
return(s=r)&&s.$oj$yDh();
};
h._registerClass({
$oj$gDh:1
},{
$oj$vi:1
},function(o,t){
function n(){
h._cls.$oj$vi.call(this);
this.$oj$bDh=this.$oj$wDh=this.$oj$EDh=null;
this.$oj$SDh=this.$oj$xDh=0;
this.$oj$TDh=!1;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$NDh=function($){
this.$oj$TDh=$;
};
t.$oj$CDh=function(){
return this.$oj$TDh;
};
t.$oj$kDh=function($){
this.$oj$SDh=$;
};
t.$oj$LDh=function(){
return this.$oj$SDh;
};
t.$oj$ADh=function(){
if(!this.$oj$EDh)return;
var o=i.create("span",null,this.$oj$EDh),t=this.$oj$xDh;
1&t&&(o.style.fontWeight="bold");
2&t&&(o.style.fontStyle="italic");
4&t&&(o=i.create("sup",null,[o]));
8&t&&(o=i.create("sub",null,[o]));
32768&t&&o.classList.add("use-theory-font");
65536&t&&o.classList.add("invalid");
var h=$.last(this.$oj$bDh);
h&&h.appendChild(o);
this.$oj$EDh=null;
};
t.$oj$ODh=function($,o){
var t=i.create("span",{
"class":$
});
this.$oj$bDh.push(t);
o();
this.$oj$ADh();
var h=this.$oj$bDh.pop();
h&&this.$oj$wDh.appendChild(h);
};
t.$oj$MDh=function($,o){
o!=this.$oj$xDh&&this.$oj$ADh();
this.$oj$EDh?this.$oj$EDh+=$:this.$oj$EDh=$;
this.$oj$xDh=o;
};
t.$oj$DDh=function($){
if(-4==$)return"bbbb";
if(-3==$)return"bbb";
if(-2==$)return"bb";
if(-1==$)return"b";
if(0==$)return"n";
if(1==$)return"#";
if(2==$)return"x";
if(3==$)return"#x";
if(4==$)return"xx";
var o="";
if(-4>$||$>4){
for(var t=$;t-->0;)o+="#";
t=$;
for(;t++<0;)o+="b";
}
return o;
};
t.$oj$pi=function(){
this.$oj$wDh=i.create("span",{
"class":"MusicType"
});
this.$oj$bDh=[this.$oj$wDh];
};
t.$oj$ai=function($){
this.$oj$MDh(this.$oj$DDh($),32768);
};
t.$oj$ii=function($,o){
this.$oj$MDh($,o);
};
t.$oj$hi=function($,o,t,h){
this.$oj$ci($,o,t,h,void 0);
};
t.$oj$ci=function($,o,t,h,i){
var n=this;
this.$oj$ODh("MusicType-note",function(){
var o=h?65536:0,j=n.$oj$TDh?32768:0;
n.$oj$MDh($,j|o);
0!=t&&n.$oj$MDh(n.$oj$DDh(t),32768|o);
void 0!==i&&null!==i&&n.$oj$MDh(""+i,4|o);
});
};
t.$oj$oi=function($,o){
var t=this;
this.$oj$ODh("MusicType-lone-quality-and-number",function(){
"h"==$&&($=String.fromCharCode(248));
t.$oj$MDh($,32768);
t.$oj$MDh(""+o,0);
});
};
t.$oj$ui=function($,o){
"h"==$&&($=String.fromCharCode(248));
this.$oj$MDh($,32768|o);
};
t.$oj$fi=function($,o){
var t=this;
this.$oj$ODh("MusicType-scale-degree",function(){
var h="";
(1==o||-1==o)&&(h+=t.$oj$DDh(o));
h+="^"+$;
t.$oj$MDh(h,32768);
});
};
t.$oj$si=function($){
"up"==$?this.$oj$MDh(String.fromCharCode(8593),32768):"down"==$?this.$oj$MDh(String.fromCharCode(8595),32768):"blank"==$&&this.$oj$MDh("__",32768);
};
t.$oj$li=function($,o,t,h,i){
var n=this;
this.$oj$ODh("MusicType-roman-numeral",function(){
-100!=o&&n.$oj$MDh(n.$oj$DDh(o),32768);
var j=n.$oj$TDh?32768:0;
n.$oj$MDh($,j);
if(t){
"h"==t&&(t=String.fromCharCode(248));
n.$oj$MDh(t,32772);
}
i&&n.$oj$MDh(""+i,32776);
h&&n.$oj$MDh(""+h,32772);
});
};
t.$oj$yDh=function(){
this.$oj$EDh&&this.$oj$ADh();
return this.$oj$wDh;
};
return n;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$PDh:1
},{
$oj$RCh:1
},function(o,t){
function n(){
h._cls.$oj$RCh.call(this);
this.$oj$HDh=this.$oj$BDh=this.$oj$jDh=this.$oj$FDh=this.$oj$IDh=null;
this.$oj$qDh=0;
this.$oj$RDh=!1;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$UDh=function(){
return this.$oj$IDh;
};
t.$oj$zDh=function($){
this.$oj$RDh=$;
};
t.$oj$WDh=function(){
return this.$oj$RDh;
};
o.$oj$VCh=function(){
return"_a1a";
};
t.$oj$XDh=function($){
var o=this;
if(o=n.$oj_super.prototype.init.call(this)){
o.$oj$IDh=$;
o.$oj$FDh=[];
}
return o;
};
t.$oj$JCh=function(){
var $=n.$oj_super.prototype.$oj$JCh.call(this),o=i.create("div",{
"class":"_f1a"
});
$.appendChild(o);
return o;
};
t.$oj$VDh=function(){
var $=h._cls.$oj$YCh.$oj$QCh("_l1a"),o=h._cls.$oj$RCh.$oj$QCh("_c1a");
$&&$.$oj$Eit("Back");
$&&$.$oj$OCh(this,{
$oj$JDh:1
});
$&&$.$oj$bCh(o);
this.$oj$bCh($);
return $;
};
t.$oj$KDh=function(){
var $=i.create("div",{
"class":"_h1a"
});
this.$oj$NCh().appendChild($);
return $;
};
t.$oj$JDh=function(){
this.$oj$IDh&&this.$oj$IDh.$oj$QDh(!0);
};
t.$oj$GDh=function($){
if($&&$.$oj$YDh())return 44;
var o=$&&$.$oj$zft(),t=i.create("span",{
"class":"_p1a"
});
t.innerHTML=o;
document.body.appendChild(t);
var h=t.offsetWidth;
t.remove();
return h;
};
t.$oj$ZDh=function(){
return this.$oj$NCh().clientWidth;
};
t.$oj$ePh=function($,o,t){
var n,j=(this.$oj$GDh($),this.$oj$GDh(o),this.$oj$jDh),s=(n=new h._cls.$oj$nPh())&&n.$oj$tPh(o);
this.$oj$bCh(s);
var r=this.$oj$HDh,e=this.$oj$FDh.length>1?this.$oj$HDh||this.$oj$VDh():null,u=r!=e,c=this.$oj$BDh,a=o&&o.$oj$YDh()?this.$oj$BDh||this.$oj$KDh():null,f=c!=a;
this.$oj$jDh=s;
this.$oj$HDh=e;
this.$oj$BDh=a;
var l=j&&j.$oj$rPh(),d=s&&s.$oj$rPh(),v=this.$oj$NCh().getBoundingClientRect().width,p=18,_=0,g=0,C=0,m=0;
if(t){
g=-(l-p);
C=v-d;
}else{
g=v-l;
C=-(d-p);
}
var L=j&&j.$oj$L4(),y=s&&s.$oj$L4(),b=e&&e.$oj$L4(),w=r&&r.$oj$L4(),D=a?a.style:null,N=c?c.style:null;
i.stop(this.$oj$qDh);
this.$oj$qDh=i.animate(300,function($){
$=i.ease($);
var o=String($),t=String(1-$);
if(L){
L.opacity=t;
L.left=i.lerp(_,g,$)+"px";
}
if(y){
y.opacity=o;
y.left=i.lerp(C,m,$)+"px";
}
if(u){
b&&(b.opacity=o);
w&&(w.opacity=t);
}
if(f){
D&&(D.opacity=o);
N&&(N.opacity=t);
}
},function(){
j&&j.$oj$Qkh();
e||r&&r.$oj$Qkh();
a||i.remove(c);
});
};
t.$oj$iPh=function(o){
o==$.last(this.$oj$FDh)&&this.$oj$sPh();
};
t.$oj$sPh=function(){
var o,t=$.last(this.$oj$FDh);
this.$oj$HDh&&this.$oj$HDh.$oj$Qkh();
this.$oj$jDh&&this.$oj$jDh.$oj$Qkh();
i.remove(this.$oj$BDh);
this.$oj$jDh=(o=new h._cls.$oj$nPh())&&o.$oj$tPh(t);
this.$oj$bCh(this.$oj$jDh);
this.$oj$HDh=this.$oj$FDh.length>1?this.$oj$VDh():null;
this.$oj$BDh=t&&t.$oj$YDh()?this.$oj$KDh():null;
};
t.$oj$oPh=function(o,t){
var h=$.last(this.$oj$FDh);
this.$oj$FDh.push(o);
h&&h.$oj$uPh(null);
o&&o.$oj$uPh(this);
t?this.$oj$ePh(h,o,!0):this.$oj$sPh();
};
t.$oj$aPh=function(o){
var t=this.$oj$FDh.pop(),h=$.last(this.$oj$FDh);
t&&t.$oj$uPh(null);
h&&h.$oj$uPh(this);
o?this.$oj$ePh(t,h,!1):this.$oj$sPh();
};
return n;
});
h._registerClass({
$oj$nPh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$fPh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$lPh=function(){
return this.$oj$fPh;
};
$.$oj$VCh=function(){
return"_d1a";
};
o.$oj$tPh=function($){
var o=this;
(o=t.$oj_super.prototype.init.call(this))&&(o.$oj$fPh=$);
return o;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this),o=void 0;
if(this.$oj$fPh&&this.$oj$fPh.$oj$YDh())o=i.create("div",{
"class":"_v1a"
});else{
o=i.create("div",{
"class":"_m1a"
});
o.innerHTML=this.$oj$fPh&&this.$oj$fPh.$oj$zft();
}
$.appendChild(o);
return o;
};
o.$oj$rPh=function(){
var $=this.$oj$NCh().getBoundingClientRect(),o=this.$oj$dMh().getBoundingClientRect();
return o.left-$.left;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$cPh:1
},{
$oj$hPh:1
},function(o,t){
function n(){
h._cls.$oj$hPh.call(this);
this.$oj$pPh=this.$oj$dPh=this.$oj$vPh=null;
this.$oj$mPh=0;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$gPh=function(){
return this.$oj$vPh;
};
t.$oj$nCh=function($){
this.$oj$pPh=$;
};
t.$oj$rCh=function(){
return this.$oj$pPh;
};
t.$oj$uPh=function($){
this.$oj$dPh=$;
};
t.$oj$yPh=function(){
return this.$oj$dPh;
};
o.$oj$VCh=function(){
return"_g1a";
};
t.$oj$bPh=function($){
var o,t=this;
if(t=n.$oj_super.prototype.init.call(this)){
t.$oj$vPh=[$];
t.$oj$dPh=(o=new h._cls.$oj$PDh())&&o.$oj$XDh(t);
}
return t;
};
t.$oj$wPh=function(){
n.$oj_super.prototype.$oj$wPh.call(this);
this.$oj$EPh(null,this.$oj$SPh(),!1,!0);
};
t.$oj$xPh=function($){
var o;
this.$oj$TPh($);
(o=this.$oj$SPh())&&o.$oj$xPh($);
};
t.$oj$NPh=function($){
var o;
this.$oj$CPh($);
(o=this.$oj$SPh())&&o.$oj$NPh($);
};
t.$oj$kPh=function($){
var o;
this.$oj$LPh($);
(o=this.$oj$SPh())&&o.$oj$kPh($);
};
t.$oj$APh=function($){
var o;
this.$oj$OPh($);
(o=this.$oj$SPh())&&o.$oj$APh($);
};
t.$oj$EPh=function($,o,t,h){
var n,j,s=this;
if(this.$oj$mPh){
i.stop(this.$oj$mPh);
this.$oj$mPh=0;
}
var r=h?$:o,e=h?o:$,u=r&&r.$oj$rLh(),c=e&&e.$oj$rLh(),a=u&&u.$oj$NCh(),f=c&&c.$oj$NCh();
function l($){
var o=i.lerp(v,p,i.ease($)),t=o+320;
a&&(a.style.transform="translate3d("+o+"px, 0, 0)");
f&&(f.style.transform="translate3d("+t+"px, 0, 0)");
}
function d(){
var t,h;
(t=s.$oj$rLh())&&t.$oj$bCh(o&&o.$oj$rLh());
(h=$&&$.$oj$rLh())&&h.$oj$Qkh();
o&&o.$oj$MPh(s);
$&&$.$oj$DPh();
$&&$.$oj$OPh(!0);
o&&o.$oj$CPh(!0);
s.$oj$pPh&&s.$oj$pPh.respondsToSelector_({
$oj$PPh:1
})&&s.$oj$pPh&&s.$oj$pPh.$oj$PPh(s,o,!1);
}
var v=h?0:-320,p=h?-320:0;
s.$oj$pPh&&s.$oj$pPh.respondsToSelector_({
$oj$HPh:1
})&&s.$oj$pPh&&s.$oj$pPh.$oj$HPh(s,o,!0);
o&&o.$oj$rLh();
$&&$.$oj$kPh(t);
o&&o.$oj$xPh(t);
l(0);
(n=s.$oj$rLh())&&n.$oj$bCh(u);
(j=s.$oj$rLh())&&j.$oj$bCh(c);
s.$oj$BPh(o);
$&&$.$oj$jPh(null);
if(t)s.$oj$mPh=i.animate(300,l,d);else{
l(1);
d();
}
h?s.$oj$dPh&&s.$oj$dPh.$oj$oPh(o&&o.$oj$FPh(),t):s.$oj$dPh&&s.$oj$dPh.$oj$aPh(t);
};
t.$oj$IPh=function($,o){
var t=this.$oj$SPh();
this.$oj$vPh.push($);
this.$oj$EPh(t,$,o,!0);
};
t.$oj$QDh=function($){
if(this.$oj$vPh.length<=1)return;
var o=this.$oj$vPh.pop(),t=this.$oj$SPh();
this.$oj$EPh(o,t,$,!1);
};
t.$oj$qPh=function(o,t){
var h=$.indexOf(this.$oj$vPh,o),i=this.$oj$SPh(),n=(this.$oj$vPh.splice(h+1,this.$oj$vPh.length-(h+1)),
this.$oj$SPh());
this.$oj$EPh(i,n,t,!1);
};
t.$oj$RPh=function($){
if(this.$oj$vPh.length<=1)return;
this.$oj$qPh(this.$oj$vPh[0],$);
};
t.$oj$SPh=function(){
var $=this.$oj$vPh?this.$oj$vPh.length:0;
return $?this.$oj$vPh[$-1]:null;
};
t.$oj$UPh=function(){
return this.$oj$SPh();
};
t.$oj$zPh=function($,o){
if(this.$oj$vPh!=$){
var t=this.$oj$SPh();
this.$oj$vPh=$;
var h=this.$oj$SPh();
this.$oj$EPh(t,h,o,!0);
}
};
t.$oj$WPh=function($){
this.$oj$zPh($,!1);
};
return n;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$XPh:1
},null,function($,o){
function t(){
this.$oj$VPh=this.$oj$JPh=this.$oj$KPh=null;
this.$oj$QPh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$GPh=function($){
this.$oj$KPh=$;
};
o.$oj$YPh=function(){
return this.$oj$KPh;
};
o.$oj$uPh=function($){
this.$oj$VPh=$;
};
o.$oj$yPh=function(){
return this.$oj$VPh;
};
o.$oj$Dct=function($){
var o=this.$oj$JPh;
if(o!==$){
this.$oj$JPh=$;
this.$oj$ZPh(o);
}
};
o.$oj$zft=function(){
return this.$oj$JPh;
};
o.$oj$eHh=function($){
var o=this.$oj$QPh;
if(o!==$){
this.$oj$QPh=$;
this.$oj$ZPh(o);
}
};
o.$oj$YDh=function(){
return this.$oj$QPh;
};
o.$oj$ZPh=function(){
this.$oj$VPh&&this.$oj$VPh.$oj$iPh(this);
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$tHh:1
},null,function($,o){
function t(){
this.$oj$nHh=this.$oj$rHh=this.$oj$iHh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$Cft=function(){
return this.$oj$nHh;
};
o.$oj$sHh=function(){
return this.$oj$rHh;
};
o.$oj$oHh=function(){
return this.$oj$iHh;
};
$.$oj$uHh=function($,o){
var t;
return(t=this.alloc())&&t.$oj$aHh($,o,null);
};
$.$oj$fHh=function($,o,t){
var h;
return(h=this.alloc())&&h.$oj$aHh($,o,t);
};
o.$oj$aHh=function($,o,h){
var i=this;
if(i=t.$oj_super.prototype.init.call(this)){
i.$oj$nHh=$;
i.$oj$rHh=o;
i.$oj$iHh=h;
}
return i;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$mDh:1
},null,function(o,t){
function i(){
this.$oj$lHh=null;
this.constructor=i;
this.$oj_id=++h._id;
}
var n=void 0;
o.$oj$vDh=function(){
var $;
n||(n=($=this.alloc())&&$.init());
return n;
};
t.$oj$cHh=function($,o,t,h){
this.$oj$lHh||(this.$oj$lHh=[]);
this.$oj$lHh.push({
observer:$,
selector:o,
name:t,
object:h
});
};
t.$oj$hHh=function($){
this.$oj$pHh($,null,null);
};
t.$oj$pHh=function(o,t,h){
this.$oj$lHh=$.filter(this.$oj$lHh,function($){
var i=!1;
$.observer==o&&(t&&t!=$.name||h&&h!=$.object||(i=!0));
return!i;
});
};
t.$oj$dHh=function(o){
var t=o&&o.$oj$Cft(),h=o&&o.$oj$sHh();
$.each(this.$oj$lHh,function($){
var i;
$.name==t&&(h&&$.object&&h!=$.object||(i=$.observer)&&i.performSelector_withObject_($.selector,o));
});
};
t.$oj$dDh=function($,o){
this.$oj$vHh($,o,null);
};
t.$oj$vHh=function($,o,t){
this.$oj$dHh(h._cls.$oj$tHh.$oj$fHh($,o,t));
};
return i;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$Dkh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$mHh=this.$oj$gHh=this.$oj$yHh=null;
this.$oj$bHh=0;
this.$oj$wHh=this.$oj$EHh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$Xkh=function(){
return this.$oj$gHh;
};
o.$oj$Vkh=function(){
return this.$oj$EHh;
};
o.$oj$SHh=function(){
return this.$oj$wHh;
};
o.$oj$Pkh=function($){
var o=this.$oj$bHh;
if(o!==$){
this.$oj$bHh=$;
this.$oj$xHh(o);
}
};
o.$oj$THh=function(){
return this.$oj$bHh;
};
o.$oj$Mkh=function($,o){
var h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$gHh=$;
h.$oj$EHh=o;
}
return h;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this);
this.$oj$Gkh();
return $;
};
o.$oj$Wkh=function(){
return!this.$oj$NCh().parentElement;
};
o.$oj$xHh=function(){
var $=this.$oj$NCh();
$.style.height=$.style.lineHeight=this.$oj$bHh+"px";
};
o.$oj$Gkh=function(){
var $=this,o=this.$oj$NCh(),t=o.style;
t.textAlign="center";
t.fontSize="13px";
t.fontFamily="-apple-system, Helvetica, Arial, sans";
t.color="#808080";
t.overflow="hidden";
t.setProperty("display","block","important");
t.setProperty("visibility","visible","important");
if(window.top!=window){
t.position="fixed";
t.width="100%";
t.zIndex="500";
t.bottom="0px";
t.backgroundColor="#fcfcfc";
}
this.$oj$xHh();
if(!(this.$oj$yHh&&this.$oj$yHh.parentElement&&this.$oj$mHh&&this.$oj$mHh.parentElement)){
i.empty(o);
this.$oj$yHh=null;
this.$oj$mHh=null;
}
if(!this.$oj$yHh||!this.$oj$mHh){
var h=i.create("span"),n=h.style;
n.display="inline-block";
n.userSelect="none";
n.MozUserSelect="-moz-none";
n.msUserSelect="none";
n.webkitUserSelect="none";
n.webkitFontSmoothing="subpixel-antialiased";
n.setProperty("display","inline-block","important");
n.setProperty("visibility","visible","important");
var j=i.create("a",{
href:"/products"
}),s=j.style;
s.color="#202020";
s.fontWeight="bold";
s.textDecoration="none";
s.cursor="pointer";
s.setProperty("display","inline","important");
s.setProperty("visibility","visible","important");
i.listen(j,"mouseover",function(){
s.textDecoration="underline";
});
i.listen(j,"mouseout",function(){
s.textDecoration="none";
});
// i.append(h,["George this "+$.$oj$gHh+" helps you, please ",j,$.$oj$EHh?".":" to support our site."]);
$.$oj$yHh=h;
$.$oj$mHh=j;
o.appendChild($.$oj$yHh);
}
};
return t;
});
}();
!function(){
"use strict";
var $=null,o=null,t=0,n=!1;
function j(){
if(t){
clearTimeout(t);
t=0;
}
$=null;
}
function s($,h){
j();
o&&(t=setTimeout(function(){
o($,h);
},500));
}
function r($){
j();
o(h._g.$oj$s($.pageX,$.pageY),!1);
$.stopPropagation();
$.preventDefault();
}
function e(o){
if(o==$)return;
var t=o.touches.length>0?o.touches[0]:null;
if(!t)return;
s(h._g.$oj$s(t.pageX,t.pageY),!0);
}
function u(o){
if(o==$)return;
s(h._g.$oj$s(o.pageX,o.pageY),!1);
}
h._registerClass({
$oj$cDh:1
},null,function(t,s){
function c(){
this.constructor=c;
this.$oj_id=++h._id;
}
var a=void 0;
t.$oj$ti=function(){
var $;
a||(a=($=this.alloc())&&$.init());
return a;
};
s.$oj$hDh=function(o){
i.listen(o,"contextmenu",function($){
$.stopPropagation();
$.preventDefault();
});
i.listen(o,"touchstart",function(o){
$=o;
});
i.listen(o,"mousedown",function(o){
$=o;
});
};
s.$oj$NHh=function($){
var t=document.documentElement;
if(o){
t.removeEventListener("contextmenu",r,!1);
t.removeEventListener("touchstart",e,!1);
t.removeEventListener("mousedown",u,!1);
}
o=$;
if(o){
if(!n){
t.addEventListener("contextmenu",j,!0);
t.addEventListener("touchstart",j,!0);
t.addEventListener("touchcancel",j,!0);
t.addEventListener("touchend",j,!0);
t.addEventListener("mousedown",j,!0);
t.addEventListener("mouseup",j,!0);
n=!0;
}
t.addEventListener("contextmenu",r,!1);
t.addEventListener("touchstart",e,!1);
t.addEventListener("mousedown",u,!1);
}
};
return c;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$CHh:1
},null,function($,o){
function t(){
this.$oj$kHh=this.$oj$LHh=this.$oj$AHh=this.$oj$OHh=this.$oj$MHh=this.$oj$DHh=null;
this.$oj$PHh=0;
this.$oj$HHh=this.$oj$BHh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$jHh=function(){
return this.$oj$AHh;
};
o.$oj$FHh=function(){
return this.$oj$DHh;
};
o.$oj$IHh=function(){
return this.$oj$HHh;
};
o.$oj$tCh=function(){
return this.$oj$BHh;
};
o.$oj$nCh=function($){
this.$oj$OHh=$;
};
o.$oj$rCh=function(){
return this.$oj$OHh;
};
o.$oj$qHh=function($){
this.$oj$LHh=$;
};
o.$oj$RHh=function(){
return this.$oj$LHh;
};
o.$oj$UHh=function($,o,h){
var i=this;
if(i=t.$oj_super.prototype.init.call(this)){
i.$oj$OHh=$;
i.$oj$AHh=o;
i.$oj$DHh=h;
}
return i;
};
o.$oj$lCh=function($){
var o,t=this;
if(this.$oj$BHh)return;
this.$oj$BHh=!0;
function n(){
t.$oj$pCh(!0);
t.$oj$OHh&&t.$oj$OHh.respondsToSelector_({
$oj$zHh:1
})&&t.$oj$OHh&&t.$oj$OHh.$oj$zHh(t);
}
t.$oj$kHh=(o=new h._cls.$oj$XHh())&&o.$oj$WHh(t.$oj$AHh,!0);
t.$oj$kHh&&t.$oj$kHh.$oj$fkh("_y1a",t.$oj$HHh);
t.$oj$MHh=h._cls.$oj$vCh.$oj$dCh(t.$oj$kHh,n);
t.$oj$MHh&&t.$oj$MHh.$oj$pDh(!0);
t.$oj$OHh&&t.$oj$OHh.respondsToSelector_({
$oj$VHh:1
})&&t.$oj$OHh&&t.$oj$OHh.$oj$VHh(t);
t.$oj$kHh&&t.$oj$kHh.$oj$JHh(t.$oj$LHh,t.$oj$DHh);
var j=t.$oj$kHh&&t.$oj$kHh.$oj$NCh();
i.stop(t.$oj$PHh);
if($){
var s=t.$oj$MHh&&t.$oj$MHh.$oj$TCh();
t.$oj$PHh=i.animate(250,function($){
$=i.ease($);
var o=i.lerp(.85,1,$);
i.transform(j,0,0,o,o,$);
s.opacity=String($);
});
}
};
o.$oj$pCh=function($){
if(!this.$oj$BHh)return;
this.$oj$BHh=!1;
var o=this.$oj$MHh,t=this.$oj$kHh,h=t&&t.$oj$NCh();
this.$oj$MHh=null;
this.$oj$kHh=null;
i.stop(this.$oj$PHh);
if($){
var n=o&&o.$oj$TCh();
this.$oj$PHh=i.animate(250,function($){
$=i.ease($);
var o=i.lerp(1,.85,$),t=i.lerp(1,0,$);
i.transform(h,0,0,o,o,t);
n.opacity=String(t);
},function(){
o&&o.$oj$HCh();
});
}else o&&o.$oj$HCh();
};
o.$oj$KHh=function($){
if(this.$oj$HHh!=$){
this.$oj$HHh=$;
this.$oj$kHh&&this.$oj$kHh.$oj$QHh("_y1a");
}
};
return t;
});
h._registerClass({
$oj$XHh:1
},{
$oj$mCh:1
},function($,o){
function t(){
h._cls.$oj$mCh.call(this);
this.$oj$GHh=this.$oj$YHh=null;
this.$oj$ZHh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$jHh=function(){
return this.$oj$YHh;
};
o.$oj$eBh=function(){
return this.$oj$ZHh;
};
$.$oj$VCh=function(){
return"_b1a";
};
o.$oj$WHh=function($,o){
var h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$YHh=$;
h.$oj$ZHh=o;
}
return h;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this),o=i.create("div",{
"class":"_w1a"
});
$.appendChild(o);
if(this.$oj$ZHh){
var h=i.create("div",{
"class":"_x1a"
});
$.appendChild(h);
this.$oj$GHh=h;
}
return o;
};
o.$oj$KCh=function(){
t.$oj_super.prototype.$oj$KCh.call(this);
if(this.$oj$YHh&&this.$oj$YHh.isKindOfClass_(h._cls.$oj$cPh)){
var $=this.$oj$YHh;
this.$oj$hCh("_k1a");
this.$oj$bCh($&&$.$oj$yPh());
}
this.$oj$bCh(this.$oj$YHh&&this.$oj$YHh.$oj$rLh());
};
o.$oj$JHh=function($,o){
var t=this.$oj$NCh(),h=this.$oj$L4();
$&&$.width&&(h.width=$.width+"px");
$&&$.height&&(h.height=$.height+"px");
var i=(o&&o.$oj$NCh()).getBoundingClientRect(),n=t.getBoundingClientRect(),j=this.$oj$GHh.getBoundingClientRect(),s=j.width/2,r=Math.round(i.width/2-(n.left-i.left)-s);
this.$oj$GHh.style.left=r+"px";
h.transformOrigin=Math.round(100*(r+s)/n.width)+"% 0%";
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$tBh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$nBh=null;
this.$oj$rBh=this.$oj$iBh=this.$oj$sBh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.init=function(){
var $=this;
if($=t.$oj_super.prototype.init.call(this)){
$.$oj$nBh=h._cls.$oj$uBh.$oj$oBh(function(o){
$.$oj$aBh(o);
});
$.$oj$fBh($.$oj$nBh);
}
return $;
};
o.$oj$lBh=function($,o,t){
if(this.$oj$iBh!=$||this.$oj$rBh!=o||this.$oj$sBh!=t){
this.$oj$iBh=$;
this.$oj$rBh=o;
this.$oj$sBh=t;
this.$oj$nBh&&this.$oj$nBh.$oj$cBh();
}
};
o.$oj$aBh=function($){
var o=h._g.$oj$E(this.$oj$hBh(),0,3),t=h._g.$oj$y(o),i=h._g.$oj$y(o),n=t.height/2;
i.x=Math.ceil(i.width*(this.$oj$iBh/this.$oj$rBh));
i.width=Math.floor(i.width*(this.$oj$sBh/this.$oj$rBh));
if(i.x<0){
i.width+=i.x;
i.x=0;
}else h._g.$oj$L(i)>o.width&&(i.width=o.width-i.x);
$&&$.$oj$pBh();
$&&$.$oj$dBh(t,n);
$&&$.$oj$vBh(h._g.$oj$ONh(4934994,1));
$&&$.$oj$pBh();
$&&$.$oj$dBh(i,n);
$&&$.$oj$vBh(h._g.$oj$ONh(14869220,1));
};
return t;
});
}();
!function(){
"use strict";
function $($){
var o=0;
do{
o+=$.offsetTop||0;
$=$.offsetParent;
}while($);
return o;
}
h._registerClass({
$oj$mBh:1
},{
$oj$RCh:1
},function(o,t){
function n(){
h._cls.$oj$RCh.call(this);
this.$oj$gBh=this.$oj$yBh=null;
this.$oj$bBh=0;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$rCh=function(){
return this.$oj$gBh;
};
o.$oj$VCh=function(){
return"_j1a";
};
t.$oj$JCh=function(){
var $=n.$oj_super.prototype.$oj$JCh.call(this),o=i.create("div",{
"class":"_q1a"
});
$.appendChild(o);
$.style.overflowY="scroll";
void 0!==$.style.webkitOverflowScrolling&&($.style.webkitOverflowScrolling="touch");
return o;
};
t.$oj$wBh=function(o){
var t=this.$oj$NCh(),h=o&&o.$oj$NCh(),n=$(t),j=$(h),s=t.clientHeight,r=h.clientHeight,e=j-n+Math.round((s+r)/2)-s,u=t.scrollTop,c=e;
i.stop(this.$oj$bBh);
this.$oj$bBh=i.animate(100,function($){
t.scrollTop=i.lerp(u,c,i.easeInOut($));
});
};
t.$oj$EBh=function(o){
var t=this.$oj$NCh(),h=o&&o.$oj$NCh(),n=t.clientHeight,j=t.scrollTop,s=$(t),r=$(h),e=r+h.clientHeight,u=r-s,c=e-s,a=void 0;
c>j+n?a=c+1-n:j>u&&(a=u);
if(void 0!==a){
i.stop(this.$oj$bBh);
this.$oj$bBh=i.animate(100,function($){
t.scrollTop=i.lerp(j,a,i.easeInOut($));
});
}
};
t.$oj$nCh=function($){
var o=this;
if(this.$oj$gBh!=$){
this.$oj$gBh=$;
if(this.$oj$yBh){
i.unlisten(this.$oj$NCh(),"scroll",this.$oj$yBh);
this.$oj$yBh=null;
}
if(this.$oj$gBh&&this.$oj$gBh.respondsToSelector_({
$oj$SBh:1
})){
this.$oj$yBh=function(){
$&&$.$oj$SBh(o);
};
i.listen(o.$oj$NCh(),"scroll",o.$oj$yBh);
}
}
};
t.$oj$xBh=function(){
var $=this.$oj$NCh();
return h._g.$oj$s($.scrollLeft,$.scrollTop);
};
t.$oj$TBh=function($){
var o=this.$oj$NCh();
o.scrollLeft=$.x;
o.scrollTop=$.y;
};
return n;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$NBh:1
},{
$oj$YCh:1
},function($,o){
function t(){
h._cls.$oj$YCh.call(this);
this.$oj$CBh=this.$oj$kBh=this.$oj$LBh=this.$oj$ABh=this.$oj$OBh=null;
this.$oj$MBh=this.$oj$DBh=this.$oj$PBh=this.$oj$HBh=this.$oj$BBh=this.$oj$jBh=0;
this.$oj$FBh=this.$oj$IBh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$Gct=function($){
this.$oj$jBh=$;
};
o.$oj$xn=function(){
return this.$oj$jBh;
};
o.$oj$zft=function(){
return this.$oj$OBh;
};
o.$oj$HAh=function(){
return this.$oj$DBh;
};
o.$oj$qBh=function($){
var o=this.$oj$FBh;
if(o!==$){
this.$oj$FBh=$;
this.$oj$pOh(o);
}
};
o.$oj$RBh=function(){
return this.$oj$FBh;
};
o.$oj$UBh=function(){
return this.$oj$IBh;
};
o.$oj$zBh=function($){
this.$oj$ABh=$;
};
o.$oj$WBh=function(){
return this.$oj$ABh;
};
o.$oj$VBh=function($){
var o=this.$oj$MBh;
if(o!==$){
this.$oj$MBh=$;
this.$oj$XBh(o);
}
};
o.$oj$JBh=function(){
return this.$oj$MBh;
};
o.$oj$KBh=function($){
var o=this.$oj$BBh;
if(o!==$){
this.$oj$BBh=$;
this.$oj$XBh(o);
}
};
o.$oj$QBh=function(){
return this.$oj$BBh;
};
o.$oj$GBh=function($){
var o=this.$oj$HBh;
if(o!==$){
this.$oj$HBh=$;
this.$oj$XBh(o);
}
};
o.$oj$YBh=function(){
return this.$oj$HBh;
};
$.$oj$VCh=function(){
return"_z1a";
};
o.init=function(){
var $=this;
if($=t.$oj_super.prototype.init.call(this)){
var o=h._g.$oj$hNh();
$.$oj$BBh=o?12:11;
$.$oj$HBh=o?2:0;
}
return $;
};
o.$oj$JCh=function(){
var $=t.$oj_super.prototype.$oj$JCh.call(this),o=i.create("div",{
"class":"_e2a"
}),h=i.create("div",{
"class":"_t2a"
});
$.setAttribute("role","button");
$.appendChild(h);
h.appendChild(o);
this.$oj$CBh=h;
this.$oj$kBh=o;
this.$oj$XBh();
return o;
};
o.$oj$pOh=function(){
t.$oj_super.prototype.$oj$pOh.call(this);
this.$oj$fkh("selected",this.$oj$RBh());
this.$oj$ZBh();
};
o.$oj$ZBh=function(){
var $=!1;
$=h._g.$oj$hNh()?!0:this.$oj$RBh()&&this.$oj$U2();
this.$oj$LBh&&this.$oj$LBh.$oj$RAh($);
this.$oj$LBh&&this.$oj$LBh.$oj$q2(this.$oj$U2());
};
o.$oj$ejh=function(){
if(this.$oj$PBh){
clearTimeout(this.$oj$PBh);
this.$oj$PBh=0;
}
};
o.$oj$XBh=function(){
if(!this.$oj$CBh)return;
var $=this.$oj$CBh.style,o=this.$oj$MBh,t=this.$oj$BBh+"px",h=this.$oj$HBh+"px";
$.borderTopLeftRadius=1&o?t:h;
$.borderTopRightRadius=2&o?t:h;
$.borderBottomLeftRadius=4&o?t:h;
$.borderBottomRightRadius=8&o?t:h;
};
o.$oj$hOh=function(){
var $=this;
this.$oj$ABh&&(this.$oj$PBh=setTimeout(function(){
$.$oj$ejh();
$.$oj$ABh($);
},500));
};
o.$oj$mOh=function(){
t.$oj_super.prototype.$oj$mOh.call(this);
this.$oj$ejh();
};
o.$oj$tjh=function($){
var o=this.$oj$MBh,t=o|$;
this.$oj$VBh(t);
};
o.$oj$njh=function($){
var o=this.$oj$MBh,t=o&~$;
this.$oj$VBh(t);
};
o.$oj$Dct=function($){
if(this.$oj$OBh!=$){
this.$oj$rjh(0);
this.$oj$OBh=$;
var o=this.$oj$dMh();
i.empty(o);
$&&i.append(o,h._g.$oj$vNh($));
}
};
o.$oj$rjh=function($){
var o;
if(this.$oj$DBh!=$){
this.$oj$Dct(null);
this.$oj$DBh=$;
this.$oj$LBh&&this.$oj$LBh.$oj$Qkh();
this.$oj$LBh=(o=new h._cls.$oj$OAh())&&o.$oj$IAh($);
this.$oj$bCh(this.$oj$LBh);
this.$oj$ZBh();
}
};
o.$oj$ijh=function($){
if(this.$oj$IBh!=$){
this.$oj$IBh=$;
this.$oj$fkh("_n2a",this.$oj$IBh);
}
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$sjh:1
},null,function(o,t){
function i(){
this.$oj$ojh=this.$oj$ujh=this.$oj$ajh=this.$oj$fjh=this.$oj$ljh=null;
this.$oj$cjh=0;
this.constructor=i;
this.$oj_id=++h._id;
}
t.$oj$hjh=function(){
return this.$oj$fjh;
};
t.$oj$pjh=function(){
return this.$oj$ujh;
};
t.$oj$djh=function(){
return this.$oj$cjh;
};
t.$oj$uMh=function($){
this.$oj$ljh=$;
};
t.$oj$AOh=function(){
return this.$oj$ljh;
};
t.$oj$vjh=function($){
this.$oj$ojh=$;
};
t.$oj$OOh=function(){
return this.$oj$ojh;
};
t.$oj$mjh=function($){
this.$oj$ajh=$;
};
t.$oj$gjh=function(){
return this.$oj$ajh;
};
t.$oj$yjh=function($,o){
var t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$ujh=[];
t.$oj$ljh=$;
t.$oj$ojh=o;
}
return t;
};
t.init=function(){
return this.$oj$yjh(null,null);
};
t.$oj$bjh=function($,o,t){
var i,n=(i=new h._cls.$oj$NBh())&&i.init();
n&&n.$oj$Gct(t);
n&&n.$oj$Dct($);
n&&n.$oj$OCh(this,{
$oj$wjh:1
});
n&&n.$oj$Eit(o);
this.$oj$ujh.push(n);
return n;
};
t.$oj$Ejh=function($,o){
return this.$oj$bjh($,null,o);
};
t.$oj$Sjh=function($){
for(var o,t=this.$oj$ujh,h=0,i=t?t.length:0;i>h;h++){
o=t[h];
if((o&&o.$oj$xn())==$)return o;
}
return null;
};
t.$oj$wjh=function($){
this.$oj$xjh($);
this.$oj$ojh&&this.$oj$ljh&&this.$oj$ljh.performSelector_withObject_(this.$oj$ojh,this);
};
t.$oj$xjh=function(o){
var t=this;
$.each(this.$oj$ujh,function($){
$&&$.$oj$qBh(!1);
});
o&&o.$oj$qBh(!0);
t.$oj$fjh=o;
t.$oj$cjh=o&&o.$oj$xn();
};
t.$oj$Tjh=function($){
var o=this.$oj$Sjh($);
o&&this.$oj$xjh(o);
};
return i;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$Njh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$Cjh=this.$oj$kjh=null;
this.$oj$Ljh=this.$oj$Ajh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$Ojh=function(){
return this.$oj$Ljh;
};
o.$oj$Mjh=function(){
return this.$oj$Cjh;
};
o.$oj$Djh=function(){
return this.$oj$Ajh;
};
o.init=function(){
var $=this;
if($=t.$oj_super.prototype.init.call(this)){
$.$oj$Pjh(!1);
$.$oj$kjh=h._cls.$oj$uBh.$oj$oBh(function(o){
$.$oj$aBh(o);
});
$.$oj$fBh($.$oj$kjh);
}
return $;
};
o.$oj$aBh=function($){
var o=1==this.$oj$Ljh||4==this.$oj$Ljh,t=1==this.$oj$Ljh||2==this.$oj$Ljh,i=h._g.$oj$m(o?0:-this.$oj$Ajh,t?0:-this.$oj$Ajh,2*this.$oj$Ajh,2*this.$oj$Ajh);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(i);
$&&$.$oj$dBh(i,this.$oj$Ajh);
$&&$.$oj$Bjh(this.$oj$Cjh,"evenodd");
};
o.$oj$jjh=function(){
t.$oj_super.prototype.$oj$jjh.call(this);
var $=1==this.$oj$Ljh||4==this.$oj$Ljh,o=1==this.$oj$Ljh||2==this.$oj$Ljh;
this.$oj$kjh&&this.$oj$kjh.$oj$aLh(h._g.$oj$m($?0:-this.$oj$Ajh,o?0:-this.$oj$Ajh,this.$oj$Ajh,this.$oj$Ajh));
};
o.$oj$Fjh=function($){
if(this.$oj$Ljh!=$){
this.$oj$Ljh=$;
this.$oj$kjh&&this.$oj$kjh.$oj$cBh();
this.$oj$Ijh();
}
};
o.$oj$qjh=function($){
if(this.$oj$Cjh!=$){
this.$oj$Cjh=$;
this.$oj$kjh&&this.$oj$kjh.$oj$cBh();
this.$oj$Ijh();
}
};
o.$oj$Rjh=function($){
if(this.$oj$Ajh!=$){
this.$oj$Ajh=$;
this.$oj$kjh&&this.$oj$kjh.$oj$cBh();
this.$oj$Ijh();
}
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$Ujh:1
},{
$oj$zjh:1
},function(o,t){
function i(){
h._cls.$oj$zjh.call(this);
this.$oj$Wjh=this.$oj$Xjh=this.$oj$Vjh=this.$oj$Jjh=this.$oj$Kjh=this.$oj$Qjh=this.$oj$Gjh=null;
this.$oj$Yjh=this.$oj$Zjh=this.$oj$eFh=this.$oj$tFh=this.$oj$nFh=this.$oj$rFh=this.$oj$iFh=0;
this.constructor=i;
this.$oj_id=++h._id;
}
t.$oj$Oht=function($){
var o=this.$oj$iFh;
if(o!==$){
this.$oj$iFh=$;
this.$oj$Ijh(o);
}
};
t.$oj$Wft=function(){
return this.$oj$iFh;
};
t.$oj$sFh=function(){
return this.$oj$nFh;
};
t.$oj$oFh=function($){
var o=this.$oj$Wjh;
if(o!==$){
this.$oj$Wjh=$;
this.$oj$Ijh(o);
}
};
t.$oj$uFh=function(){
return this.$oj$Wjh;
};
t.$oj$aFh=function(){
return this.$oj$Xjh;
};
t.$oj$fFh=function($){
var o=this.$oj$Zjh;
if(o!==$){
this.$oj$Zjh=$;
this.$oj$Ijh(o);
}
};
t.$oj$lFh=function(){
return this.$oj$Zjh;
};
t.$oj$cFh=function($){
var o=this.$oj$rFh;
if(o!==$){
this.$oj$rFh=$;
this.$oj$Ijh(o);
}
};
t.$oj$hFh=function(){
return this.$oj$rFh;
};
t.$oj$pFh=function(){
return this.$oj$Qjh;
};
t.$oj$dFh=function(){
return this.$oj$Jjh;
};
o.$oj$VCh=function(){
return"_r2a";
};
t.init=function(){
var $=this;
if($=i.$oj_super.prototype.init.call(this)){
$.$oj$Xjh=h._g.$oj$l(28,28);
$.$oj$Qjh="rgba(0, 0, 0, 0.5)";
$.$oj$Jjh="rgba(0, 0, 0, 0.2)";
}
return $;
};
t.$oj$KCh=function(){
i.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$Gjh=h._cls.$oj$RCh.$oj$QCh("_i2a");
this.$oj$Kjh=h._cls.$oj$RCh.$oj$QCh("_s2a");
this.$oj$Vjh=h._cls.$oj$RCh.$oj$QCh("_o2a");
this.$oj$Vjh&&this.$oj$Vjh.$oj$bOh("slider","role");
this.$oj$ECh([this.$oj$Gjh,this.$oj$Kjh,this.$oj$Vjh]);
this.$oj$vFh();
};
t.$oj$jjh=function(){
i.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
if(!$)return;
var o=this.$oj$Xjh?this.$oj$Xjh.width:28,t=this.$oj$Xjh?this.$oj$Xjh.height:28,n=this.$oj$Vjh&&this.$oj$Vjh.$oj$L4();
if(!n)return;
this.$oj$tFh=this.$oj$Zjh;
this.$oj$eFh=this.$oj$tFh+($.width-(o+this.$oj$rFh+this.$oj$Zjh));
n.width=o+"px";
n.height=t+"px";
n.top=Math.round(($.height-t)/2)+"px";
n.borderRadius=Math.round(o/2)+"px";
var j=this.$oj$nFh?this.$oj$nFh-1:1,s=this.$oj$Zjh,r=$.width-(this.$oj$Zjh+this.$oj$rFh+this.$oj$Xjh.width),e=this.$oj$iFh/j,u=s+e*r;
this.$oj$tFh=s;
this.$oj$eFh=r;
var c=h._g.$oj$m(u,0,o,t),a=h._g.$oj$m($.x+this.$oj$Zjh,0,$.width-(this.$oj$Zjh+this.$oj$rFh),2),f=h._g.$oj$g(),l=h._g.$oj$g();
h._g.$oj$W(a,$);
h._g.$oj$X(f,l,a,Math.round(a.width*e),0);
h._g.$oj$W(c,$);
this.$oj$Vjh&&this.$oj$Vjh.$oj$aLh(c);
this.$oj$Gjh&&this.$oj$Gjh.$oj$aLh(f);
this.$oj$Kjh&&this.$oj$Kjh.$oj$aLh(l);
this.$oj$Vjh&&this.$oj$Vjh.$oj$bOh("0","aria-valuemin");
this.$oj$Vjh&&this.$oj$Vjh.$oj$bOh(""+j,"aria-valuemax");
this.$oj$Vjh&&this.$oj$Vjh.$oj$bOh(""+this.$oj$iFh,"aria-valuenow");
this.$oj$Vjh&&this.$oj$Vjh.$oj$bOh(this.$oj$Wjh,"aria-valuetext");
};
t.$oj$mFh=function(o){
var t=this.$oj$nFh?this.$oj$nFh-1:1,h=Math.round($.clamp((o-this.$oj$tFh)/this.$oj$eFh,0,1)*t),i=this.$oj$Wft();
if(i!=h){
this.$oj$Oht(h);
this.$oj$SOh();
}
};
t.$oj$vFh=function(){
this.$oj$Gjh&&((this.$oj$Gjh&&this.$oj$Gjh.$oj$L4()).backgroundColor=this.$oj$Qjh);
this.$oj$Kjh&&((this.$oj$Kjh&&this.$oj$Kjh.$oj$L4()).backgroundColor=this.$oj$Jjh);
};
t.$oj$gFh=function(){
return this.$oj$Vjh;
};
t.$oj$yFh=function($){
this.$oj$mFh($.x-Math.round(this.$oj$Xjh.width/2));
this.$oj$bFh();
};
t.$oj$wFh=function(){
var $=this.$oj$NCh().getBoundingClientRect(),o=(this.$oj$Vjh&&this.$oj$Vjh.$oj$NCh()).getBoundingClientRect();
this.$oj$Yjh=o.left-$.left;
};
t.$oj$EFh=function($){
this.$oj$mFh(this.$oj$Yjh+$);
};
t.$oj$SFh=function(){
this.$oj$SOh();
};
t.$oj$xFh=function(o){
if(this.$oj$nFh!=o){
this.$oj$nFh=o;
this.$oj$iFh=$.clamp(this.$oj$iFh,0,o-1);
this.$oj$Ijh();
}
};
t.$oj$TFh=function(o){
if(!$.isEqual(this.$oj$Xjh,o)){
this.$oj$Xjh=o;
this.$oj$Ijh();
}
};
t.$oj$NFh=function($){
if(this.$oj$Qjh!=$){
this.$oj$Qjh=$;
this.$oj$vFh();
}
};
t.$oj$CFh=function($){
if(this.$oj$Jjh!=$){
this.$oj$Jjh=$;
this.$oj$vFh();
}
};
return i;
});
}();
!function(){
"use strict";
var $=null;
function o(o){
$=o;
window.addEventListener("orientationchange",n,!1);
document.body.addEventListener("touchmove",j,!1);
}
function t(){
$=null;
window.removeEventListener("orientationchange",n,!1);
document.body.removeEventListener("touchmove",j,!1);
}
function n(){
var o;
(o=$)&&o.$oj$kFh();
}
function j($){
$.preventDefault();
$.stopPropagation();
}
function s($,o){
var t=$.match(o);
if(t&&t[1])return parseInt(t[1],10);
return 0;
}
function r(){
var $=navigator.userAgent,o=s($,/Safari\/([0-9]+)/),t=s($,/AppleWebKit\/([0-9]+)/),h=s($,/Mobile\/([0-9]+)([A-Za-z])/);
if(o>=601&&t>=601&&h>=13)return-1==$.indexOf("Chrome/")&&-1==$.indexOf("Puffin/")&&-1==$.indexOf("CriOS/")&&-1==$.indexOf("Android");
return!1;
}
function e($){
return r()?"//tenuto.link"+$:"x-tenuto:/"+$;
}
h._registerClass({
$oj$LFh:1
},null,function($,o){
function t(){
this.$oj$AFh=this.$oj$OFh=this.$oj$MFh=this.$oj$DFh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
$.$oj$PFh=function(){
return(h._cls.$oj$dLh.$oj$wAh()||h._cls.$oj$dLh.$oj$bAh())&&!h._g.$oj$hNh();
};
o.$oj$HFh=function($,o,i){
var n,j,s=this;
if(s=t.$oj_super.prototype.init.call(this)){
s.$oj$OFh=i;
s.$oj$DFh=e(o);
if(h._cls.$oj$dLh.$oj$wAh()){
s.$oj$MFh=(n=new h._cls.$oj$jFh())&&n.$oj$BFh(s,$,s.$oj$DFh);
s.$oj$MFh&&s.$oj$MFh.$oj$kFh();
}else{
s.$oj$AFh=(j=new h._cls.$oj$BNh())&&j.$oj$oCh(s,null,null,"Use Web Version",null,[$,"Download on the App Store"]);
s.$oj$AFh&&s.$oj$AFh.$oj$ICh(0);
setTimeout(function(){
s.$oj$AFh&&s.$oj$AFh.$oj$lCh(!0);
},0);
}
}
return s;
};
o.$oj$PCh=function($,o){
var t,i;
0===o?(t=h._cls.$oj$lkh.$oj$Akh())&&t.$oj$Hkh(this.$oj$DFh):1==o&&(i=h._cls.$oj$lkh.$oj$Akh())&&i.$oj$Hkh("/buy/tenuto");
};
o.$oj$BCh=function(){
this.$oj$OFh();
};
return t;
});
h._registerClass({
$oj$jFh:1
},{
$oj$RCh:1
},function($,n){
function j(){
h._cls.$oj$RCh.call(this);
this.$oj$FFh=this.$oj$IFh=this.$oj$qFh=this.$oj$RFh=this.$oj$UFh=this.$oj$zFh=this.$oj$WFh=this.$oj$XFh=null;
this.$oj$VFh=0;
this.$oj$JFh=!1;
this.constructor=j;
this.$oj_id=++h._id;
}
n.$oj$KFh=function(){
return this.$oj$RFh;
};
n.$oj$QFh=function(){
return this.$oj$IFh;
};
n.$oj$GFh=function(){
return this.$oj$qFh;
};
$.$oj$VCh=function(){
return"_u2a";
};
n.$oj$BFh=function($,h,i){
var n=this;
if(n=j.$oj_super.prototype.init.call(this)){
n.$oj$RFh=$;
n.$oj$IFh=h;
n.$oj$qFh=i;
t();
o(n);
n.$oj$dMh();
document.body.appendChild(n.$oj$NCh());
}
return n;
};
n.$oj$JCh=function(){
var $=this,o=j.$oj_super.prototype.$oj$JCh.call(this);
i.listen(o,"click",function(o){
o.stopPropagation();
$.$oj$YFh();
});
i.listen(o,"contextmenu",function($){
$.stopPropagation();
$.preventDefault();
});
return o;
};
n.$oj$KCh=function(){
var $=this;
j.$oj_super.prototype.$oj$KCh.call(this);
var o=h._cls.$oj$RCh.$oj$QCh("_a2a"),t=h._cls.$oj$RCh.$oj$QCh("_f2a"),i=h._cls.$oj$YCh.$oj$QCh("_l2a"),n=h._cls.$oj$YCh.$oj$QCh("_c2a"),s=h._cls.$oj$YCh.$oj$QCh("_h2a");
i&&i.$oj$MOh(function(){
var o;
$.$oj$JFh||(o=h._cls.$oj$lkh.$oj$Akh())&&o.$oj$Hkh($.$oj$qFh);
});
n&&n.$oj$MOh(function(){
var o;
$.$oj$JFh||(o=h._cls.$oj$lkh.$oj$Akh())&&o.$oj$Hkh("/buy/tenuto");
});
s&&s.$oj$MOh(function(){
$.$oj$JFh||$.$oj$YFh();
s&&s.$oj$hCh("_p2a");
});
i&&i.$oj$ZFh($.$oj$IFh);
n&&n.$oj$ZFh("Download on the App Store");
s&&s.$oj$ZFh("Use Web Version");
t&&t.$oj$bCh(i);
t&&t.$oj$bCh(n);
t&&t.$oj$bCh(s);
$.$oj$bCh(o);
$.$oj$bCh(t);
$.$oj$UFh=o;
$.$oj$FFh=t;
$.$oj$WFh=i;
$.$oj$zFh=n;
$.$oj$XFh=s;
};
n.$oj$kFh=function(){
var $=this.$oj$NCh().getBoundingClientRect(),o=void 0;
o=$.width>$.height?screen.height/$.width:screen.width/$.width;
var t=13/o+"px",h=$.width-20/o+"px",i=58/o+"px",n=this.$oj$WFh&&this.$oj$WFh.$oj$L4(),j=this.$oj$zFh&&this.$oj$zFh.$oj$L4(),s=this.$oj$XFh&&this.$oj$XFh.$oj$L4(),r=this.$oj$FFh&&this.$oj$FFh.$oj$L4();
r.fontSize=20/o+"px";
r.width=h;
n.height=i;
n.borderTopLeftRadius=t;
n.borderTopRightRadius=t;
n.marginBottom=1/o+"px";
j.height=i;
j.borderBottomLeftRadius=t;
j.borderBottomRightRadius=t;
j.marginBottom=8/o+"px";
s.height=i;
s.borderRadius=t;
s.marginBottom=8/o+"px";
};
n.$oj$YFh=function(){
var $=this;
i.stop(this.$oj$VFh);
this.$oj$VFh=0;
if(!this.$oj$JFh){
this.$oj$JFh=!0;
t();
var o=this.$oj$UFh&&this.$oj$UFh.$oj$NCh(),h=this.$oj$FFh&&this.$oj$FFh.$oj$NCh(),n=h.getBoundingClientRect().height;
this.$oj$VFh=i.animate(250,function($){
var t=i.lerp(1,0,$),j=i.lerp(0,n+32,i.easeIn($));
i.transform(o,0,0,1,1,t);
i.transform(h,0,j,1,1);
},function(){
document.body.removeChild($.$oj$NCh());
$.$oj$RFh&&$.$oj$RFh.$oj$BCh(null,0/0);
});
}
};
return j;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$eIh:1
},{
$oj$UAh:1
},function($,o){
function t(){
h._cls.$oj$UAh.call(this);
this.$oj$tIh=this.$oj$nIh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
$.$oj$sMh=function(){
return"input";
};
$.$oj$VCh=function(){
return"_d2a";
};
o.$oj$JCh=function(){
var $,o=this,n=t.$oj_super.prototype.$oj$JCh.call(this);
n.setAttribute("type","text");
i.listen(n,"keydown",function($){
var t=h._cls.$oj$EOh.$oj$wOh($.keyCode);
if(o.$oj$uOh()){
if("Escape"==t){
o.$oj$rIh();
$.preventDefault();
}else if("Return"==t||"Enter"==t){
o.$oj$SOh();
$.preventDefault();
}
$.stopPropagation();
}
});
i.listen(n,"keyup",function($){
o.$oj$uOh()&&$.stopPropagation();
});
o.$oj$nIh=($=new h._cls.$oj$iOh())&&$.$oj$rOh(n,0,null);
o.$oj$tIh=n;
return n;
};
o.$oj$uOh=function(){
return document.activeElement==this.$oj$tIh;
};
o.$oj$rIh=function(){
this.$oj$tIh.blur();
};
o.$oj$iIh=function($){
$?this.$oj$bOh($,"placeholder"):this.$oj$HOh("placeholder");
};
o.$oj$sIh=function(){
return this.$oj$oIh("placeholder");
};
o.$oj$q2=function($){
t.$oj_super.prototype.$oj$q2.call(this,$);
$?this.$oj$tIh.removeAttribute("disabled"):this.$oj$tIh.setAttribute("disabled","disabled");
};
o.$oj$wit=function($){
this.$oj$tIh.value=$;
};
o.$oj$Qet=function(){
return this.$oj$tIh.value;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$tLh:1
},{
$oj$RCh:1
},function(o,t){
function i(){
h._cls.$oj$RCh.call(this);
this.$oj$uIh=this.$oj$aIh=this.$oj$fIh=this.$oj$lIh=this.$oj$cIh=this.$oj$hIh=null;
this.$oj$pIh=this.$oj$dIh=0;
this.$oj$vIh=this.$oj$mIh=!1;
this.constructor=i;
this.$oj_id=++h._id;
}
t.$oj$gIh=function($){
this.$oj$vIh=$;
};
t.$oj$yIh=function(){
return this.$oj$vIh;
};
t.$oj$zft=function(){
return this.$oj$cIh;
};
t.$oj$bIh=function(){
return this.$oj$dIh;
};
t.$oj$wIh=function(){
return this.$oj$uIh;
};
t.$oj$EIh=function(){
return this.$oj$pIh;
};
t.$oj$SIh=function(){
return this.$oj$mIh;
};
o.$oj$sMh=function(){
return"nav";
};
o.$oj$VCh=function(){
return"_v2a";
};
t.init=function(){
var $=this;
if($=i.$oj_super.prototype.init.call(this)){
$.$oj$dIh=-1;
$.$oj$fIh=[];
$.$oj$lIh=[];
$.$oj$xIh(1);
}
return $;
};
t.$oj$jjh=function(){
var o=this;
i.$oj_super.prototype.$oj$jjh.call(this);
var t=this.$oj$hBh(),n=0,j=0,s=52,r=t.height,e=h._g.$oj$m(0,0,s,r),u=h._g.$oj$m(0,0,s,r);
h._g.$oj$dt(e,t);
h._g.$oj$W(e,t);
h._g.$oj$ct(e,n+j);
$.each(this.$oj$fIh,function($){
if(!$||!$.$oj$Yft()){
$&&$.$oj$aLh(e);
h._g.$oj$bt(e,e);
h._g.$oj$ct(e,j);
}
});
h._g.$oj$vt(u,t);
h._g.$oj$W(u,t);
h._g.$oj$lt(u,j);
$.each(o.$oj$lIh,function($){
if(!$||!$.$oj$Yft()){
$&&$.$oj$aLh(u);
h._g.$oj$yt(u,u);
h._g.$oj$lt(u,j);
}
});
var c=Math.max(h._g.$oj$T(e),t.width-h._g.$oj$L(u)),a=h._g.$oj$E(t,c,0);
o.$oj$hIh&&o.$oj$hIh.$oj$aLh(a);
if(o.$oj$uIh){
o.$oj$pIh&&o.$oj$pIh<a.width&&(a.width=o.$oj$pIh);
h._g.$oj$z(a,t);
o.$oj$uIh&&o.$oj$uIh.$oj$aLh(a);
}
};
t.$oj$KCh=function(){
i.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$hIh=h._cls.$oj$RCh.$oj$QCh("_m2a");
this.$oj$bCh(this.$oj$hIh);
this.$oj$TIh();
};
t.$oj$NIh=function(){
return window.top!=window;
};
t.$oj$TIh=function(){
var $=this.$oj$NIh();
this.$oj$fkh("_g2a",$);
$?this.$oj$hIh&&this.$oj$hIh.$oj$GCh("<span>&ldquo;"+this.$oj$cIh+"&rdquo; by <a target='_top' href='https://www.musictheory.net/'>musictheory.net</a></span>"):this.$oj$hIh&&this.$oj$hIh.$oj$ZFh(this.$oj$cIh);
};
t.$oj$CIh=function($){
return this.$oj$aIh&&this.$oj$aIh[$];
};
t.$oj$kIh=function($){
var o=this.$oj$aIh&&this.$oj$aIh[0];
o||this.$oj$LIh(0,function(){
var o;
(o=h._cls.$oj$lkh.$oj$Akh())&&o.$oj$Hkh($);
});
};
t.$oj$LIh=function($,o){
var t=this.$oj$aIh&&this.$oj$aIh[$];
if(t)return;
var i=h._cls.$oj$RCh.$oj$QCh("_y2a"),n=!1;
t=h._cls.$oj$YCh.$oj$QCh("_b2a");
if(0==$){
i&&i.$oj$hCh("_w2a");
t&&t.$oj$Eit("Back");
n=!0;
}else if(1==$){
i&&i.$oj$hCh("_x2a");
t&&t.$oj$Eit("Settings");
}else if(2==$){
i&&i.$oj$hCh("_k2a");
t&&t.$oj$Eit("Piano");
}else if(4==$){
i&&i.$oj$hCh("_x2a");
t&&t.$oj$Eit("Customize");
}else if(3==$){
i&&i.$oj$hCh("_j2a");
t&&t.$oj$Eit("Actions");
}
t&&t.$oj$bCh(i);
t&&t.$oj$MOh(o);
this.$oj$bCh(t);
n?this.$oj$fIh.push(t):this.$oj$lIh.unshift(t);
this.$oj$aIh||(this.$oj$aIh={});
this.$oj$aIh[$]=t;
};
t.$oj$AIh=function($,o){
var t=this.$oj$CIh($);
t&&t.$oj$Eht(o);
this.$oj$Ijh();
};
t.$oj$Dct=function($){
if(this.$oj$cIh!=$){
this.$oj$cIh=$;
this.$oj$TIh();
}
};
t.$oj$OIh=function($){
this.$oj$mIh=$;
this.$oj$fkh("_q2a",this.$oj$uIh&&this.$oj$mIh);
};
t.$oj$MIh=function($){
if(this.$oj$pIh!=$){
this.$oj$pIh=$;
this.$oj$Ijh();
}
};
t.$oj$DIh=function($){
if(this.$oj$uIh!=$){
this.$oj$uIh&&this.$oj$uIh.$oj$PIh("_z2a");
this.$oj$uIh&&this.$oj$uIh.$oj$Qkh();
this.$oj$uIh=$;
$&&$.$oj$hCh("_z2a");
this.$oj$bCh($);
}
this.$oj$fkh("_q2a",this.$oj$uIh&&this.$oj$mIh);
};
t.$oj$xIh=function($){
if(this.$oj$dIh!=$){
this.$oj$dIh=$;
this.$oj$fkh("_e3a",0==$);
this.$oj$fkh("_t3a",1==$);
}
};
return i;
});
}();
!function(){
"use strict";
var t=o("trace");
h._registerClass({
$oj$Ikh:1
},null,function(o,i){
function n(){
this.$oj$HIh=this.$oj$BIh=this.$oj$jIh=this.$oj$FIh=null;
this.constructor=n;
this.$oj_id=++h._id;
}
i.$oj$zft=function(){
return this.$oj$FIh;
};
i.$oj$eCh=function(){
return this.$oj$jIh;
};
i.$oj$eAh=function(){
return this.$oj$BIh;
};
i.$oj$Fkh=function($,o,t){
var h=this;
if(h=n.$oj_super.prototype.init.call(this)){
h.$oj$FIh=$;
h.$oj$jIh=o;
h.$oj$BIh=t;
h.$oj$HIh=[];
}
return h;
};
i.$oj$qkh=function($){
$&&$.length&&(this.$oj$HIh=this.$oj$HIh.concat($));
};
i.$oj$IIh=function(){
var o=1/0,t=this.$oj$HIh;
t.sort(function($,o){
return $.t==o.t?$.i-o.i:$.t-o.t;
});
$.each(t,function($){
var t=$.t;
o>t&&(o=t);
});
var h=$.map(t,function($){
var t=$.t-o,h=Math.floor(t/6e4),i=t%6e4/1e3;
return"+"+h+":"+(10>i?"0":"")+i.toFixed(2)+" "+$.s;
}).join("\n");
return h;
};
i.$oj$Rkh=function(){
var $=["Log:",this.$oj$IIh(),""].join("\n");
t.trace({
title:this.$oj$FIh,
message:this.$oj$jIh,
error:this.$oj$BIh,
log:$,
where:"a"
});
};
return n;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$zjh:1
},{
$oj$UAh:1
},function($,o){
function t(){
h._cls.$oj$UAh.call(this);
this.$oj$qIh=this.$oj$RIh=null;
this.$oj$UIh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
$.$oj$VCh=function(){
return"_n3a";
};
o.$oj$JCh=function(){
var $,o=t.$oj_super.prototype.$oj$JCh.call(this);
o.setAttribute("role","button");
this.$oj$RIh=($=new h._cls.$oj$iOh())&&$.$oj$rOh(o,2,this);
return o;
};
o.$oj$zIh=function(){
var $;
t.$oj_super.prototype.$oj$zIh.call(this);
($=this.$oj$gFh())&&$.$oj$hCh("_r3a");
};
o.$oj$pOh=function(){
t.$oj_super.prototype.$oj$pOh.call(this);
var $=!this.$oj$U2();
this.$oj$fkh("active",!$&&this.$oj$UIh);
document.body.classList.toggle("_i3a",!$&&this.$oj$UIh);
};
o.$oj$fOh=function($){
if(!this.$oj$U2())return!1;
if(!this.$oj$lOh())return!1;
var o=this.$oj$gFh(),t=$&&$.$oj$cOh(),i=t.x-window.pageXOffset,n=t.y-window.pageYOffset;
this.$oj$qIh=t;
if(o){
var j=(o&&o.$oj$NCh()).getBoundingClientRect();
if(i<j.left||i>j.right||n<j.top||n>j.bottom){
var s=this.$oj$NCh().getBoundingClientRect();
this.$oj$yFh(h._g.$oj$s(i-s.left,n-s.top));
}
}
this.$oj$pOh();
if(!this.$oj$UIh){
this.$oj$wFh();
this.$oj$UIh=!0;
}
this.$oj$pOh();
return!0;
};
o.$oj$dOh=function($){
var o=$&&$.$oj$cOh(),t=o.x-this.$oj$qIh.x,h=o.y-this.$oj$qIh.y;
this.$oj$UIh&&this.$oj$EFh(t,h);
};
o.$oj$vOh=function(){
if(this.$oj$UIh){
this.$oj$UIh=!1;
this.$oj$SFh();
}
this.$oj$pOh();
};
o.$oj$yFh=function(){};
o.$oj$wFh=function(){};
o.$oj$EFh=function(){};
o.$oj$SFh=function(){};
o.$oj$gFh=function(){
return null;
};
o.$oj$q2=function($){
t.$oj_super.prototype.$oj$q2.call(this,$);
this.$oj$pOh();
};
return t;
});
}();
!function(){
"use strict";
function $($,o){
for(var t=$.length,h=0,i=0,n=0;t--;)n+=$[h++]*o[i++];
return n;
}
function o($){
for(var o=0,t=0;t<$.length;t++){
var h=$[t];
o+=h*h;
}
return Math.sqrt(o);
}
function t($,o){
for(var t=[],h=0;$>h;h++){
for(var i=[],n=0;o>n;n++)i[n]=0;
t[h]=i;
}
return t;
}
function i(h,i,n){
for(var j=[],s=h.length,r=t(n,s),e=0;s>e;e++){
r[0][e]=1;
for(var u=1;n>u;u++)r[u][e]=r[u-1][e]*h[e];
}
for(var c=t(n,s),a=t(n,n),f=0;n>f;f++){
for(var l=0;s>l;l++)c[f][l]=r[f][l];
for(var d=0;f>d;d++)for(var v=$(c[f],c[d]),p=0;s>p;p++)c[f][p]-=v*c[d][p];
var _=o(c[f]);
if(1e-6>_)return null;
for(var g=1/_,C=0;s>C;C++)c[f][C]*=g;
for(var m=0;n>m;m++)a[f][m]=f>m?0:$(c[f],r[m]);
}
for(var L=n;0!=L--;){
j[L]=$(c[L],i);
for(var y=n-1;y>L;y--)j[L]-=a[L][y]*j[y];
j[L]/=a[L][L];
}
return j;
}
h._registerClass({
$oj$WIh:1
},null,function($,o){
function t(){
this.$oj$XIh=null;
this.$oj$VIh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$JIh=function($){
this.$oj$XIh||(this.$oj$XIh=[]);
this.$oj$XIh[this.$oj$VIh++]=[Date.now(),$];
this.$oj$VIh>20&&(this.$oj$VIh=0);
};
o.$oj$KIh=function(){
var $=this;
if(!this.$oj$XIh)return 0;
Date.now();
this.$oj$XIh.sort(function($,o){
return o[0]-$[0];
});
for(var o=[],t=[],h=$.$oj$XIh[0][0],n=0;n<$.$oj$XIh.length;n++){
var j=h-$.$oj$XIh[n][0];
if(200>j){
o.push(.001*j);
t.push($.$oj$XIh[n][1]);
}
}
if(o.length<3)return 0;
var s=i(o,t,3);
return s?s[1]:0;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$hPh:1
},null,function(o,t){
function n(){
this.$oj$QIh=this.$oj$GIh=this.$oj$YIh=this.$oj$ZIh=null;
this.$oj$eqh=!1;
this.constructor=n;
this.$oj_id=++h._id;
}
t.$oj$tqh=function(){
return this.$oj$YIh;
};
t.$oj$nqh=function(){
return this.$oj$QIh;
};
t.$oj$FPh=function(){
return this.$oj$GIh;
};
o.$oj$VCh=function(){
return"_s3a";
};
t.init=function(){
var $,o=this;
if(o=n.$oj_super.prototype.init.call(this)){
o.$oj$QIh=[];
o.$oj$GIh=($=new h._cls.$oj$XPh())&&$.init();
o.$oj$GIh&&o.$oj$GIh.$oj$GPh(o);
}
return o;
};
t.$oj$rLh=function(){
var $;
if(!this.$oj$ZIh){
for(var o=($=new h._cls.$oj$rqh())&&$.init(),t=h._cls.$oj$hPh,i=this.constructor;i!=t;){
o&&o.$oj$hCh(i&&i.$oj$VCh());
i=i&&i.superclass();
}
o&&o.$oj$hCh("_s3a");
o&&o.$oj$GPh(this);
this.$oj$ZIh=o;
this.$oj$wPh();
}
return this.$oj$ZIh;
};
t.$oj$iqh=function(){
return!!this.$oj$ZIh;
};
t.$oj$xPh=function(o){
this.$oj$TPh(o);
$.each(this.$oj$QIh,function($){
$&&$.$oj$xPh(o);
});
};
t.$oj$NPh=function(o){
this.$oj$CPh(o);
$.each(this.$oj$QIh,function($){
$&&$.$oj$NPh(o);
});
};
t.$oj$kPh=function(o){
this.$oj$LPh(o);
$.each(this.$oj$QIh,function($){
$&&$.$oj$kPh(o);
});
};
t.$oj$APh=function(o){
this.$oj$OPh(o);
$.each(this.$oj$QIh,function($){
$&&$.$oj$APh(o);
});
};
t.$oj$TPh=function(){};
t.$oj$CPh=function(){};
t.$oj$LPh=function(){};
t.$oj$OPh=function(){};
t.$oj$UDh=function(){
for(var $=this.$oj$tqh();$;){
if($&&$.isKindOfClass_(h._cls.$oj$cPh))return $;
$=$&&$.$oj$tqh();
}
return null;
};
t.$oj$BPh=function($){
this.$oj$QIh||(this.$oj$QIh=[]);
$&&$.$oj$jPh(this);
this.$oj$QIh.push($);
$&&$.$oj$sqh(this);
};
t.$oj$oqh=function(o){
(o&&o.$oj$tqh())==this&&o&&o.$oj$sqh(null);
o&&o.$oj$MPh(null);
this.$oj$QIh=$.without(this.$oj$QIh,o);
};
t.$oj$sqh=function($){
this.$oj$YIh=$;
};
t.$oj$DPh=function(){
this.$oj$YIh&&this.$oj$YIh.$oj$oqh(this);
};
t.$oj$jPh=function(){};
t.$oj$MPh=function(){};
t.$oj$wPh=function(){
this.$oj$uqh();
var o=this.$oj$aqh();
if(!o)return;
var t=void 0,h=void 0;
if(this.$oj$fqh()){
try{
if(window.sessionStorage){
var n=window.sessionStorage.getItem(o);
$.isString(n)&&(t=JSON.parse(n));
}
}catch(j){}
t||(t={});
}
if(i.store.enabled){
var s=i.store.get(o);
$.isString(s)&&(h=JSON.parse(s));
}
h||(h={});
var r=this.$oj$eqh;
this.$oj$eqh=!0;
t&&this.$oj$lqh(t);
h&&this.$oj$aot(h);
this.$oj$eqh=r;
};
t.$oj$cqh=function(){};
t.$oj$hqh=function(){};
t.$oj$pqh=function(){
if(this.$oj$eqh)return;
var $=this.$oj$aqh();
if(!$)return;
try{
if(this.$oj$fqh()&&window.sessionStorage){
var o={};
this.$oj$dqh(o);
window.sessionStorage.setItem($,JSON.stringify(o));
}
}catch(t){}
if(i.store.enabled)try{
var h={};
this.$oj$ylt(h);
i.store.set($,JSON.stringify(h));
}catch(t){}
};
t.$oj$aqh=function(){
return null;
};
t.$oj$fqh=function(){
return!1;
};
t.$oj$uqh=function(){};
t.$oj$ylt=function(){};
t.$oj$aot=function(){};
t.$oj$dqh=function(){};
t.$oj$lqh=function(){};
t.$oj$Dct=function($){
this.$oj$GIh&&this.$oj$GIh.$oj$Dct($);
};
t.$oj$zft=function(){
return this.$oj$GIh&&this.$oj$GIh.$oj$zft();
};
return n;
});
h._registerClass({
$oj$rqh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$vqh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$GPh=function($){
this.$oj$vqh=$;
};
o.$oj$YPh=function(){
return this.$oj$vqh;
};
o.$oj$mqh=function(){
return!0;
};
o.$oj$jjh=function(){
this.$oj$vqh&&this.$oj$vqh.$oj$cqh();
t.$oj_super.prototype.$oj$jjh.call(this);
this.$oj$vqh&&this.$oj$vqh.$oj$hqh();
};
return t;
});
}();
!function(){
"use strict";
function o($){
if(!$)return"null";
return[$.sampleRate,$.length,$.duration,$.numberOfChannels].join(", ");
}
h._registerClass({
$oj$gqh:1
},null,function(t,i){
function n(){
this.$oj$yqh=this.$oj$bqh=this.$oj$wqh=this.$oj$Eqh=this.$oj$Sqh=this.$oj$xqh=this.$oj$Tqh=null;
this.$oj$Nqh=this.$oj$Cqh=0;
this.constructor=n;
this.$oj_id=++h._id;
}
i.$oj$kqh=function(){
return this.$oj$Eqh;
};
i.$oj$Lqh=function(){
return this.$oj$wqh;
};
i.$oj$Aqh=function(){
return this.$oj$yqh;
};
i.$oj$Oqh=function(){
return this.$oj$xqh;
};
i.$oj$nCh=function($){
this.$oj$bqh=$;
};
i.$oj$rCh=function(){
return this.$oj$bqh;
};
i.$oj$Mqh=function($,o){
var t=this;
if(t=n.$oj_super.prototype.init.call(this)){
t.$oj$Eqh=$;
t.$oj$yqh=o;
h._g.$oj$pNh(t.description()+"$D$DG$"+t.$oj$Eqh);
}
return t;
};
i.$oj$Dqh=function($,o){
for(var t=$.getChannelData(0),i=0,n=t.length;n>i;i++)if(t[i]>.5){
var j=i/$.sampleRate,s=26/44100;
h._g.$oj$pNh("$D$EG$"+j);
return o+(j-s);
}
h._g.$oj$pNh("$D$FG$");
return 0;
};
i.$oj$Pqh=function($,o,t){
var h=this;
function i(){
t(6);
}
h.$oj$yqh.decodeAudioData($,function($){
$?o($):t(6);
},i);
};
i.$oj$Hqh=function($){
var o=new Uint8Array($);
function t($){
if($>=97&&102>=$)return $-87;
if($>=48&&58>$)return $-48;
return 0;
}
for(var h=0,i=1;i<o.length&&34!=o[i++];)h++;
h/=2;
for(var n=new ArrayBuffer(h),j=new Uint8Array(n),s=0,r=1;r<o.length-1;){
var e=o[r++],u=o[r++];
if(34==e||34==u)break;
j[s++]=(t(e)<<4)+t(u);
}
return n;
};
i.$oj$Bqh=function($,o,t){
var h=new DataView($);
if(34==h.getUint8(0)){
var i=this.$oj$Hqh($);
if(i){
$=i;
h=new DataView($);
}
}
var n=[18766,1,0,0,65500,32768,170],j=0;
function s($){
return h.getUint8($);
}
function r($){
return h.getUint16($);
}
function e($){
return h.getUint32($);
}
function u($,o){
return h.setUint8($,o);
}
function c($,o){
return h.setUint16($,o);
}
function a(){
function $(){
var $=r(j);
j+=2;
return $;
}
function i(){
return s(j++);
}
function a(){
var $=e(j);
j+=4;
return $;
}
function f($,o){
for(var t=1,i=0,n=new Uint8Array(h.buffer),j=$;o>j;j++){
t=(t+n[j])%65521;
i=(i+t)%65521;
}
return[i,t];
}
function l(){
var o=$(),t=a(),i=[$(),$()],e=j,l=j+t;
if(o<=n[4]||t>h.buffer.byteLength-e)return null;
for(;l>j;){
var d=r(j);
c(j,o);
if(d&n[5]){
d&=n[5]-1;
for(var v=j+2,p=j+d;p>v;v++)u(v,s(v)^n[6]);
}
j+=d;
}
var _=f(e,l);
if(i[0]==_[0]&&i[1]==_[1])return h.buffer.slice(e,l);
return null;
}
var d=!0;
d=d&&$()==n[0];
d=d&&i()==n[1];
if(!d){
t(7);
return;
}
i();
var v=i(),p=i(),_=i(),g=i();
a();
var C=a(),m=3==g||4==g;
if(!d){
t();
return;
}
var L=l(),y=m&&L&&l();
!L||m&&!y?t(7):o(v,p,_,C,L,y);
}
a();
};
i.$oj$jqh=function(){
var $=this,t=!1,i=!1;
function n(){
t&&i&&$.$oj$bqh&&$.$oj$bqh.$oj$Fqh($);
}
var j=$.$oj$Sqh&&$.$oj$Sqh.response,s=j&&j.byteLength<8192;
h._g.$oj$pNh("$D$GG$"+(j?j.byteLength:0));
if(!j||s){
$.$oj$bqh&&$.$oj$bqh.$oj$Iqh($,2);
return;
}
$.$oj$Bqh(j,function(j,s,r,e,u,c){
var a=null,f=null;
h._g.$oj$pNh("$D$HG$"+[j,s,r,e,u?u.toString():"?",u?u.byteLength:"?",c?c.toString():"?",c?c.byteLength:"?"].join(", "));
function l(){
try{
for(var o=a,i=$.$oj$Dqh(o,.05),n=Math.floor(i*o.sampleRate),j=$.$oj$yqh.createBuffer(f.numberOfChannels,o.length-n,o.sampleRate),s=0;s<f.numberOfChannels;s++)for(var r=o.getChannelData(0),e=j.getChannelData(s),u=n,c=0,l=o.length;l>u;u++)e[c++]=r[u];
$.$oj$xqh=j;
}catch(d){
h._g.$oj$pNh("$D$IG$"+d.toString());
}
t=!0;
}
function d(){
var o,t=$.$oj$Dqh(f,.1),n=0;
$.$oj$Cqh=j;
$.$oj$Nqh=s;
$.$oj$Tqh={};
for(var u=j;s>=u;u+=r){
var c=t+n/44100;
$.$oj$Tqh[u]=(o=new h._cls.$oj$Rqh())&&o.$oj$qqh(u,f,c,1);
n+=e;
}
i=!0;
}
function v(){
if(!f)return;
if(!a&&!t)return;
a&&l();
d();
n();
}
c?$.$oj$Pqh(c,function($){
h._g.$oj$pNh("$D$JG$"+o($));
a=$;
v();
},function(o){
h._g.$oj$pNh("$D$KG$"+o);
$.$oj$bqh&&$.$oj$bqh.$oj$Iqh($,o);
}):t=!0;
$.$oj$Pqh(u,function($){
h._g.$oj$pNh("$D$LG$"+o($));
f=$;
v();
},function(o){
h._g.$oj$pNh("$D$MG$"+o);
$.$oj$bqh&&$.$oj$bqh.$oj$Iqh($,o);
});
},function(o){
$.$oj$bqh&&$.$oj$bqh.$oj$Iqh($,o);
});
};
i.load=function(){
var o=this;
if(this.$oj$Sqh)return;
var t=new XMLHttpRequest(),i=this.$oj$Eqh?$.last(this.$oj$Eqh.split("/")):"";
function n(){
h._g.$oj$pNh("$D$NG$");
o.$oj$jqh();
e();
}
function j($){
h._g.$oj$pNh(i+"$D$OG$"+$.loaded/$.total);
o.$oj$bqh&&o.$oj$bqh.$oj$Uqh(o,$.loaded/$.total);
}
function s(){
h._g.$oj$pNh(i+"$D$PG$"+$.inspect(t));
o.$oj$bqh&&o.$oj$bqh.$oj$Iqh(o,3);
}
function r(){
h._g.$oj$pNh(i+"$D$QG$"+$.inspect(t));
o.$oj$bqh&&o.$oj$bqh.$oj$Iqh(o,2);
}
var e=function(){
h._g.$oj$pNh(i+"$D$RG$");
t.removeEventListener("load",n);
t.removeEventListener("progress",j);
t.removeEventListener("abort",s);
t.removeEventListener("error",r);
o.$oj$Sqh=null;
};
t.addEventListener("load",n,!1);
t.addEventListener("progress",j,!1);
t.addEventListener("abort",s,!1);
t.addEventListener("error",r,!1);
h._g.$oj$pNh(i+"$D$SG$"+o.$oj$Eqh);
t.open("GET",o.$oj$Eqh,!0);
t.responseType="arraybuffer";
t.send();
o.$oj$Sqh=t;
};
i.$oj$zqh=function($){
var o=this;
function t($){
return 440*Math.pow(2,($-69)/12);
}
function i(i){
var n,j=o.$oj$Tqh[i];
if(!j)return null;
var s=t(i),r=t($),e=j&&j.$oj$Wqh(),u=j&&j.$oj$Xqh(),c=r/s,a=(n=new h._cls.$oj$Rqh())&&n.$oj$qqh($,e,u,c);
return a;
}
if($<o.$oj$Cqh)return i(o.$oj$Cqh);
if($>o.$oj$Nqh)return i(o.$oj$Nqh);
return o.$oj$Tqh[$]||i($-1)||i($+1)||i($-2)||i($+2);
};
return n;
});
}();
!function(){
"use strict";
function o($){
var o,t,i="Web Audio: "+$;
(o=(t=h._cls.$oj$lkh)&&t.$oj$Akh())&&o.$oj$jkh(i,null,null);
}
function t($){
var o,t,i="Web Audio Error";
(o=(t=h._cls.$oj$lkh)&&t.$oj$Akh())&&o.$oj$jkh(i,null,$);
}
h._registerClass({
$oj$iAh:1
},{
$oj$gLh:1
},function(i,n){
function j(){
h._cls.$oj$gLh.call(this);
this.$oj$Vqh=this.$oj$Jqh=this.$oj$Kqh=this.$oj$Qqh=this.$oj$Gqh=this.$oj$Yqh=this.$oj$Zqh=this.$oj$eRh=this.$oj$tRh=this.$oj$nRh=null;
this.$oj$rRh=this.$oj$iRh=0;
this.constructor=j;
this.$oj_id=++h._id;
}
n.init=function(){
var $=this;
if($=j.$oj_super.prototype.init.call(this)){
$.$oj$Vqh=h._cls.$oj$dLh.$oj$AAh();
$.$oj$eRh=new Array(128);
$.$oj$Kqh={};
h._g.$oj$pNh($.description()+"$D$TG$");
setTimeout(function(){
$.$oj$xLh();
},0);
}
return $;
};
n.$oj$Uqh=function($,o){
this.$oj$PLh(o);
};
n.$oj$Fqh=function(o){
var t=!(!this.$oj$Yqh||!this.$oj$Yqh.$oj$Oqh());
this.$oj$sRh(t);
for(var i=0;128>i;i++)this.$oj$eRh[i]=o&&o.$oj$zqh(i);
this.$oj$NLh();
if(this.$oj$Qqh&&this.$oj$Qqh.length){
var n=this.$oj$Yqh&&this.$oj$Yqh.$oj$kqh(),j=$.last(n.split(".")),s=this.$oj$Qqh.slice(0);
s.push(j);
h._g.$oj$pNh("$D$UG$"+s.join(" -> "));
}
this.$oj$Yqh=null;
this.$oj$Qqh=null;
this.$oj$Zqh=null;
};
n.$oj$Iqh=function(o,t){
h._g.$oj$pNh("-[$oj$iAh $oj$Iqh] "+[o,t]);
var i=o&&o.$oj$kqh(),n=$.last(i.split("."));
this.$oj$Qqh||(this.$oj$Qqh=[]);
this.$oj$Qqh.push(n);
if(this.$oj$oRh())return;
this.$oj$MLh(t);
};
n.$oj$FLh=function($,o){
h._g.$oj$pNh("-[$oj$iAh $oj$FLh] "+[$,o]);
this.$oj$PLh(0);
this.$oj$eRh=new Array(128);
this.$oj$Gqh=$;
this.$oj$Zqh=o?o.slice(0):null;
this.$oj$oRh();
};
n.$oj$oRh=function(){
var $,o=this.$oj$Zqh.shift();
if(!o)return!1;
this.$oj$Yqh&&this.$oj$Yqh.$oj$nCh(null);
this.$oj$Yqh=null;
this.$oj$Yqh=($=new h._cls.$oj$gqh())&&$.$oj$Mqh(o,this.$oj$Vqh);
this.$oj$Yqh&&this.$oj$Yqh.$oj$nCh(this);
this.$oj$Yqh&&this.$oj$Yqh.load();
return!0;
};
n.$oj$sRh=function(o){
var t=this;
h._g.$oj$pNh("-[$oj$iAh $oj$sRh] "+[o]);
$.each(this.$oj$nRh,function($){
$&&$.disconnect();
});
var i=[],n=t.$oj$Vqh,j=n.createGain(),s=n.createDynamicsCompressor(),r=n.createDynamicsCompressor(),e=null,u=null;
s.threshold.value=-3;
s.knee.value=0;
s.ratio.value=2;
s.attack.value=0;
s.release.value=1;
r.threshold.value=-.25;
r.knee.value=0;
r.ratio.value=20;
r.attack.value=0;
r.release.value=.5;
j.connect(s);
s.connect(r);
r.connect(t.$oj$Vqh.destination);
if(o){
e=n.createConvolver();
u=n.createGain();
e.normalize=!1;
u.gain.value=.25;
j.connect(u);
u.connect(e);
e.connect(s);
i.push(e,u);
}
t.$oj$nRh=i;
t.$oj$tRh=j;
};
n.$oj$uRh=function(){
h._g.$oj$pNh("-[$oj$iAh $oj$uRh] "+[]);
var $=this.$oj$Jqh;
this.$oj$Jqh=null;
h._g.$oj$pNh("$D$VG$"+$);
if($)if($.gain&&$.gain.cancelScheduledValues&&$.gain.setValueAtTime&&$.gain.linearRampToValueAtTime){
var o=this.$oj$Vqh.currentTime;
$.gain.setValueAtTime(1,o);
$.gain.linearRampToValueAtTime(0,o+.05);
h._g.$oj$pNh("$D$WG$"+[o,o+.05]);
setTimeout(function(){
h._g.$oj$pNh("$D$XG$"+$);
$.disconnect();
},250);
}else{
h._g.$oj$pNh("$D$XG$"+$);
$.disconnect();
}
};
n.$oj$ILh=function(i,n){
var j=this;
h._g.$oj$pNh("-[$oj$iAh $oj$ILh] "+[i,n]);
var s=this.$oj$Vqh,r=this.$oj$Kqh,e=s.currentTime,u=s.sampleRate,c=0;
function a(){
if(s.currentTime>=j.$oj$iRh){
h._g.$oj$pNh("$D$YG$"+s.currentTime+", "+j.$oj$iRh);
j.$oj$ALh();
clearInterval(j.$oj$rRh);
j.$oj$rRh=0;
}
}
function f(o,i){
var n=null,j=o&&o.$oj$Xqh(),r=o&&o.$oj$aRh(),u=i&&i.$oj$rr(),a=i&&i.$oj$nr();
j+=(i&&i.$oj$tr())*r;
var f=e+u,l=f+a+.1;
h._g.$oj$dNh(["$D$ZG$"+i,"$D$aG$"+r,"$D$bG$"+f,"$D$cG$"+j,"$D$dG$"+l]);
try{
n=s.createBufferSource();
n.buffer=o&&o.$oj$Wqh();
n.playbackRate.value=r;
n.start(f,j);
n.stop(l);
}catch(d){
h._g.$oj$pNh("$D$eG$"+$.inspect(o));
h._g.$oj$pNh("$D$fG$"+$.inspect(o&&o.$oj$Wqh()));
t(d);
}
var v=e+u+a+.1;
v>c&&(c=v);
return n;
}
function l($,o,t){
var h=$+","+o+","+(t?1:0),i=r[h];
if(!i){
i=new Float32Array($);
var n=1;
4==o?n=2:3==o&&(n=3);
if(t)for(var j=0;$>j;j++)i[j]=Math.pow(j/$,n);else for(var s=0;$>s;s++)i[s]=Math.pow(1-s/$,n);
r[h]=i;
}
return i;
}
function d($){
var o=s.createGain(),t=$&&$.$oj$rr(),i=$&&$.$oj$ir(),n=$&&$.$oj$sr(),j=$&&$.$oj$or(),r=$&&$.$oj$ur(),c=e+t,a=c+($&&$.$oj$nr()),f=c+n,d=a-r;
h._g.$oj$dNh(["$D$gG$"+$,"$D$hG$"+i,"$D$iG$"+n,"$D$jG$"+j,"$D$kG$"+r,"$D$lG$"+c,"$D$mG$"+a,"$D$nG$"+f,"$D$oG$"+d]);
if(1==i){
o.gain.setValueAtTime(0,c);
o.gain.linearRampToValueAtTime(1,f);
}else if(2==i){
o.gain.setValueAtTime(1/32768,c);
o.gain.exponentialRampToValueAtTime(1,f);
}else if(o.gain.setValueCurveAtTime&&0!=i){
var v=Math.floor(n*u),p=l(v,i,!0);
o.gain.setValueCurveAtTime(p,c,v/u);
}else o.gain.setValueAtTime(1,c);
h._cls.$oj$dLh.$oj$SAh()&&2==j&&(j=1);
if(1==j){
o.gain.setValueAtTime(1,d);
o.gain.linearRampToValueAtTime(0,a);
}else if(2==j){
o.gain.setValueAtTime(1,d);
o.gain.exponentialRampToValueAtTime(1/32768,a-.001);
o.gain.linearRampToValueAtTime(0,a);
}else if(o.gain.setValueCurveAtTime&&0!=j){
var _=Math.floor(r*u),g=l(_,j,!1);
o.gain.setValueCurveAtTime(g,d,_/u);
}
return o;
}
j.$oj$wLh(i);
j.$oj$uRh();
var v=void 0;
try{
v=s.createGain();
v.connect(j.$oj$tRh);
$.each(i&&i.$oj$Ir(),function($){
var o=$&&$.$oj$an(),t=j.$oj$eRh[o];
if(!t)throw new Error("$D$pG$"+o);
var h=f(t,$);
if(!h)throw new Error("$D$qG$"+o);
var i=d($);
h.connect(i);
i.connect(v);
});
}catch(p){
t(p);
}
a();
j.$oj$rRh&&clearInterval(j.$oj$rRh);
if("closed"==s.state){
h._g.$oj$pNh("$D$rG$");
o("closed");
}else if("suspended"==s.state){
h._g.$oj$pNh("$D$sG$");
s.resume().then(function(){
h._g.$oj$pNh("$D$tG$");
j.$oj$kLh();
})["catch"](function($){
h._g.$oj$pNh("$D$uG$"+$);
});
}else j.$oj$kLh();
h._g.$oj$dNh(["$D$vG$","$D$wG$"+e,"$D$xG$"+c,"$D$yG$"+u]);
j.$oj$iRh=c;
j.$oj$rRh=setInterval(a,0);
j.$oj$Jqh=v;
};
n.$oj$pmt=function(){
h._g.$oj$pNh("-[$oj$iAh $oj$pmt] "+[]);
this.$oj$uRh();
};
return j;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$Rqh:1
},null,function($,o){
function t(){
this.$oj$fRh=null;
this.$oj$lRh=this.$oj$cRh=this.$oj$hRh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$an=function(){
return this.$oj$lRh;
};
o.$oj$Wqh=function(){
return this.$oj$fRh;
};
o.$oj$Xqh=function(){
return this.$oj$cRh;
};
o.$oj$aRh=function(){
return this.$oj$hRh;
};
o.$oj$qqh=function($,o,h,i){
var n=this;
if(n=t.$oj_super.prototype.init.call(this)){
n.$oj$lRh=$;
n.$oj$fRh=o;
n.$oj$cRh=h;
n.$oj$hRh=i;
}
return n;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$eLh:1
},{
$oj$RCh:1
},function($,o){
function t(){
h._cls.$oj$RCh.call(this);
this.$oj$pRh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$dRh=function(){
return this.$oj$pRh;
};
$.$oj$VCh=function(){
return"_o3a";
};
o.init=function(){
var $=this;
($=t.$oj_super.prototype.init.call(this))&&document.body.appendChild($.$oj$NCh());
return $;
};
o.$oj$vRh=function($){
var o;
if(this.$oj$pRh!=$){
(o=this.$oj$pRh&&this.$oj$pRh.$oj$rLh())&&o.$oj$Qkh();
this.$oj$pRh=$;
this.$oj$bCh(this.$oj$pRh&&this.$oj$pRh.$oj$rLh());
}
};
o.$oj$Qkh=function(){
this.$oj$NCh().remove();
};
o.$oj$oLh=function(){
this.$oj$pRh&&this.$oj$pRh.$oj$xPh(!1);
this.$oj$pRh&&this.$oj$pRh.$oj$NPh(!1);
};
o.$oj$mRh=function(){
return this;
};
return t;
});
}();
!function(){
"use strict";
h._g.$oj$mNh=function($,o,t,h,i,n){
return{
a:$,
b:o,
c:t,
d:h,
tx:i,
ty:n
};
};
h._g.$oj$gNh=function($){
return $?{
a:$.a,
b:$.b,
c:$.c,
d:$.d,
tx:$.tx,
ty:$.ty
}:null;
};
h._g.$oj$yNh=function($,o){
return $==o?!0:$&&o?$.a===o.a&&$.b===o.b&&$.c===o.c&&$.d===o.d&&$.tx===o.tx&&$.ty===o.ty:!1;
};
h._g.$oj$bNh=function($,o,t){
if(!$)return null;
return{
a:$.a*o,
b:$.b*o,
c:$.c*t,
d:$.d*t,
tx:$.tx,
ty:$.ty
};
};
h._g.$oj$wNh=function($,o,t){
if(!$)return null;
return{
a:$.a,
b:$.b,
c:$.c,
d:$.d,
tx:$.tx+$.a*o+$.c*t,
ty:$.ty+$.b*o+$.d*t
};
};
h._g.$oj$ENh=function($,o){
if(!$)return null;
var t=Math.sin(o),h=Math.cos(o);
return{
a:$.a*h+$.c*t,
b:$.b*h+$.d*t,
c:$.c*h-$.a*t,
d:$.d*h-$.b*t,
tx:$.tx,
ty:$.ty
};
};
h._g.$oj$SNh=function($,o){
if(!$)return h._g.$oj$gNh(o);
if(!o)return h._g.$oj$gNh($);
return{
a:$.a*o.a+$.b*o.c,
b:$.a*o.b+$.b*o.d,
c:$.c*o.a+$.d*o.c,
d:$.c*o.b+$.d*o.d,
tx:$.tx*o.a+$.ty*o.c+o.tx,
ty:$.tx*o.b+$.ty*o.d+o.ty
};
};
h._g.$oj$xNh=function($,o){
if(!o)return h._g.$oj$u($);
return{
x:$.x*o.a+$.y*o.c+o.tx,
y:$.x*o.b+$.y*o.d+o.ty
};
};
h._g.$oj$TNh=function($,o){
if(!o)return h._g.$oj$h($);
return{
width:$.width*o.a+$.height*o.c,
height:$.width*o.b+$.height*o.d
};
};
h._g.$oj$NNh=function($,o){
function t($,t){
return{
x:o.a*$+o.c*t+o.tx,
y:o.b*$+o.d*t+o.ty
};
}
if(!$)return null;
if(!o)return h._g.$oj$y($);
var i=$.x,n=$.y,j=$.x+$.width,s=$.y+$.height,r=t(i,n),e=t(j,n),u=t(i,s),c=t(j,s);
i=Math.min(r.x,e.x,u.x,c.x),j=Math.max(r.x,e.x,u.x,c.x),n=Math.min(r.y,e.y,u.y,c.y),
s=Math.max(r.y,e.y,u.y,c.y);
return{
x:i,
y:n,
width:j-i,
height:s-n
};
};
}();
!function(){
"use strict";
var $=null,o={},t=4*((Math.SQRT2-1)/3);
h._registerClass({
$oj$gRh:1
},null,function(i,n){
function j(){
this.$oj$yRh=this.$oj$bRh=this.$oj$wRh=this.$oj$ERh=null;
this.constructor=j;
this.$oj_id=++h._id;
}
n.$oj$SRh=function($){
this.$oj$wRh=$;
};
n.$oj$xRh=function(){
return this.$oj$wRh;
};
i.$oj$TRh=function(){
o={};
};
i.$oj$NRh=function(){
return $;
};
n.$oj$CRh=function($){
var o=this;
if(o=j.$oj_super.prototype.init.call(this)){
o.$oj$bRh=$;
o.$oj$wRh=h._g.$oj$mNh(1,0,0,1,0,0);
o.$oj$ERh=[];
}
return o;
};
n.$oj$kRh=function(o){
if(!o)return;
var t=$;
$=this;
o(this);
if(0!=this.$oj$ERh.length)throw new Error("$D$zG$"+this.$oj$ERh.length);
$=t;
};
n.$oj$LRh=function(){
this.$oj$ERh.push({
c:this.$oj$yRh,
t:this.$oj$wRh
});
this.$oj$bRh.save();
};
n.$oj$ARh=function(){
var $=this.$oj$ERh.pop();
$||($={
t:null,
c:null
});
this.$oj$wRh=$.t;
this.$oj$yRh=$.c;
this.$oj$bRh.restore();
};
n.$oj$ORh=function($,o){
this.$oj$wRh=h._g.$oj$bNh(this.$oj$wRh,$,o);
this.$oj$bRh.scale($,o);
};
n.$oj$MRh=function($,o){
this.$oj$wRh=h._g.$oj$wNh(this.$oj$wRh,$,o);
this.$oj$bRh.translate($,o);
};
n.$oj$DRh=function($){
this.$oj$wRh=h._g.$oj$ENh(this.$oj$wRh,$);
this.$oj$bRh.rotate($);
};
n.$oj$PRh=function($){
this.$oj$bRh.fillRect($.x,$.y,$.width,$.height);
};
n.$oj$HRh=function($){
this.$oj$bRh.clearRect($.x,$.y,$.width,$.height);
};
function s($,o,t,h,i,n,j,s,r,e){
var u=$.x,c=$.y,a=u+$.width,f=c+$.height,l=1.2,d=.761,v=.291,p=.207,_=v+p,g=v-p;
o.moveTo(u+l*t,c);
o.lineTo(a-l*i,c);
o.bezierCurveTo(a-d*i,c,a-_*i,c+g*n,a-v*i,c+v*n);
o.bezierCurveTo(a-g*i,c+_*n,a,c+d*n,a,c+l*n);
o.lineTo(a,f-l*e);
o.bezierCurveTo(a,f-d*e,a-g*r,f-_*e,a-v*r,f-v*e);
o.bezierCurveTo(a-_*r,f-g*e,a-d*r,f,a-l*r,f);
o.lineTo(u+l*j,f);
o.bezierCurveTo(u+d*j,f,u+_*j,f-g*s,u+v*j,f-v*s);
o.bezierCurveTo(u+g*j,f-_*s,u,f-d*s,u,f-l*s);
o.lineTo(u,c+l*h);
o.bezierCurveTo(u,c+d*h,u+g*t,c+_*h,u+v*t,c+v*h);
o.bezierCurveTo(u+_*t,c+g*h,u+d*t,c,u+l*t,c);
o.closePath();
}
function r($,o,h,i,n,j,s,r,e,u){
var c=$.x,a=$.y,f=c+$.width,l=a+$.height,d=$.width/2,v=$.height/2;
h=Math.min(h,d);
n=Math.min(n,d);
s=Math.min(s,d);
e=Math.min(e,d);
i=Math.min(i,v);
j=Math.min(j,v);
r=Math.min(r,v);
u=Math.min(u,v);
var p=1-t;
o.moveTo(c+h,a);
o.lineTo(f-n,a);
o.bezierCurveTo(f-p*n,a,f,a+p*j,f,a+j);
o.lineTo(f,l-u);
o.bezierCurveTo(f,l-p*u,f-p*e,l,f-e,l);
o.lineTo(c+s,l);
o.bezierCurveTo(c+p*s,l,c,l-p*r,c,l-r);
o.lineTo(c,a+i);
o.bezierCurveTo(c,a+p*i,c+p*h,a,c+h,a);
o.closePath();
}
n.$oj$pBh=function(){
this.$oj$bRh.beginPath();
};
n.$oj$BRh=function(){
this.$oj$bRh.closePath();
};
n.$oj$jRh=function($){
this.$oj$bRh.moveTo($.x,$.y);
};
n.$oj$FRh=function($){
this.$oj$bRh.lineTo($.x,$.y);
};
n.$oj$IRh=function($,o,t){
this.$oj$bRh.bezierCurveTo(o.x,o.y,t.x,t.y,$.x,$.y);
};
n.$oj$qRh=function($,o){
this.$oj$bRh.quadraticCurveTo(o.x,o.y,$.x,$.y);
};
n.$oj$Hjh=function($){
this.$oj$bRh.rect($.x,$.y,$.width,$.height);
};
n.$oj$RRh=function($){
var o=$.x,h=$.y,i=o+$.width,n=h+$.height,j=$.width/2,s=$.height/2,r=(1-t)*j,e=(1-t)*s,u=this.$oj$bRh;
u.moveTo(o+j,h);
u.bezierCurveTo(i-r,h,i,h+e,i,h+s);
u.bezierCurveTo(i,n-e,i-r,n,i-j,n);
u.bezierCurveTo(o+r,n,o,n-e,o,n-s);
u.bezierCurveTo(o,h+e,o+r,h,o+j,h);
u.closePath();
};
n.$oj$URh=function($,o,t,h,i){
r($,this.$oj$bRh,o,o,t,t,h,h,i,i);
};
n.$oj$dBh=function($,o){
r($,this.$oj$bRh,o,o,o,o,o,o,o,o);
};
n.$oj$zRh=function($,o,t,h){
var i=1&o?t:h,n=2&o?t:h,j=4&o?t:h,s=8&o?t:h;
r($,this.$oj$bRh,i,i,n,n,j,j,s,s);
};
n.$oj$WRh=function($,o,t){
var h=1&o?t:0,i=2&o?t:0,n=4&o?t:0,j=8&o?t:0;
r($,this.$oj$bRh,h,h,i,i,n,n,j,j);
};
n.$oj$XRh=function($,o,t){
var h=1&o,i=2&o,n=4&o,j=8&o,s=t.width,e=t.height;
r($,this.$oj$bRh,h?s:0,h?e:0,i?s:0,i?e:0,n?s:0,n?e:0,j?s:0,j?e:0);
};
n.$oj$VRh=function($,o,t){
var h=1&o,i=2&o,n=4&o,j=8&o,r=t.width,e=t.height;
s($,this.$oj$bRh,h?r:0,h?e:0,i?r:0,i?e:0,n?r:0,n?e:0,j?r:0,j?e:0);
};
n.$oj$JRh=function($){
if(this.$oj$yRh){
this.$oj$yRh=h._g.$oj$D(this.$oj$yRh,$);
this.$oj$yRh||(this.$oj$yRh=h._g.$oj$g());
}else this.$oj$yRh=$;
if(this.$oj$yRh){
this.$oj$bRh.beginPath();
this.$oj$bRh.rect(this.$oj$yRh.x,this.$oj$yRh.y,this.$oj$yRh.width,this.$oj$yRh.height);
this.$oj$bRh.clip();
}
};
n.$oj$KRh=function($,t){
var i=$&&$.$oj$QRh(),n=$&&$.$oj$GRh();
if(2!=i.length||2!=n.length||0!=n[0]||1!=n[1])return null;
var j=i[0],s=i[1],r=h._g.$oj$PNh(j),e=h._g.$oj$PNh(s);
t=4*Math.ceil(t/4);
var u=j+"|"+s+"|"+t,c=u?o[u]:null;
if(c)return c;
if(!r||!e)return null;
c=document.createElement("canvas");
c.width=4;
c.height=t;
for(var a=c.getContext("2d"),f=a.createImageData(4,t),l=f.data,d=t-1,v=r[0],p=r[1],_=r[2],g=Math.round(255*r[3]),C=e[0]-v,m=e[1]-p,L=e[2]-_,y=Math.round(255*e[3])-g,b=[1/17,9/17,3/17,11/17,13/17,5/17,15/17,7/17,4/17,12/17,2/17,10/17,16/17,8/17,14/17,6/17],w=0;t>w;w++)for(var D=w/d,N=4*f.width*w,R=v+C*D,k=p+m*D,O=_+L*D,x=g+y*D,M=0;4>M;M++){
var I=b[w%4*4+M%4];
l[N++]=R+I;
l[N++]=k+I;
l[N++]=O+I;
l[N++]=x+I;
}
a.putImageData(f,0,0);
o[u]=c;
return c;
};
n.$oj$vBh=function($){
this.$oj$bRh.fillStyle=$;
this.$oj$bRh.fill();
};
n.$oj$Bjh=function($,o){
this.$oj$bRh.fillStyle=$;
this.$oj$bRh.fill(o);
};
n.$oj$YRh=function($,o){
this.$oj$ZRh($,o,"nonzero");
};
n.$oj$ZRh=function($,o,t){
var i=h._g.$oj$NNh(o,this.$oj$wRh),n=this.$oj$KRh($,i.height);
if(n){
this.$oj$bRh.save();
this.$oj$bRh.setTransform(1,0,0,1,0,i.y);
this.$oj$bRh.fillStyle=this.$oj$bRh.createPattern(n,"repeat");
this.$oj$bRh.fill(t);
this.$oj$bRh.restore();
}else this.$oj$eUh($,o,-90,t);
};
n.$oj$tUh=function($,o,t){
this.$oj$eUh($,o,t,"nonzero");
};
n.$oj$eUh=function($,o,t,h){
var i=Math.PI,n=i/2,j=t-360*Math.floor(t/360)-180,s=j*i/180,r=o.width,e=o.height,u=o.x,c=o.y,a=o.x+r,f=o.y+e,l=Math.atan2(e,r),d=Math.sqrt(r*r+e*e),v=void 0;
if(s>=0&&n>s){
var p=d*Math.sin(s-l);
v=this.$oj$bRh.createLinearGradient(u,c,a-Math.cos(n-s)*p,f+Math.sin(n-s)*p);
}else if(s>=n){
s=3*n-s;
var _=d*Math.sin(s-l-n);
v=this.$oj$bRh.createLinearGradient(a,c,u-Math.sin(n-s)*_,f+Math.cos(n-s)*_);
}else if(-n>=s){
var g=d*Math.sin(s-l-i);
v=this.$oj$bRh.createLinearGradient(a,f,u-Math.cos(n-s)*g,c+Math.sin(n-s)*g);
}else if(s>=-n&&0>s){
s=3*n-s;
var C=d*Math.sin(s-l+n);
v=this.$oj$bRh.createLinearGradient(u,f,a-Math.sin(n-s)*C,c+Math.cos(n-s)*C);
}
if(!v)return;
for(var m=$&&$.$oj$QRh(),L=$&&$.$oj$GRh(),y=0,b=m.length;b>y;y++)v.addColorStop(L[y],m[y]);
this.$oj$bRh.fillStyle=v;
this.$oj$bRh.fill(h);
};
n.$oj$nUh=function($,o,t){
this.$oj$bRh.shadowBlur=t;
this.$oj$bRh.shadowOffsetX=o?o.x:0;
this.$oj$bRh.shadowOffsetY=o?o.y:0;
this.$oj$bRh.shadowColor=$;
};
n.$oj$rUh=function(){
this.$oj$nUh(null,null,0);
};
n.$oj$iUh=function($,o){
this.$oj$bRh.save();
o=h._g.$oj$xNh(o,this.$oj$wRh);
this.$oj$bRh.setTransform(1,0,0,1,0,0);
this.$oj$bRh.drawImage($&&$.$oj$sUh(),o.x,o.y);
this.$oj$bRh.restore();
};
n.$oj$oUh=function($,o){
var t=$&&$.$oj$uUh(),i=h._g.$oj$d(t);
h._g.$oj$U(i,o);
this.$oj$iUh($,i);
};
n.$oj$aUh=function($){
this.$oj$bRh.save();
$&&$(this.$oj$bRh);
this.$oj$bRh.restore();
};
return j;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$fUh:1
},null,function($,o){
function t(){
this.$oj$lUh=this.$oj$cUh=null;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$QRh=function(){
return this.$oj$lUh;
};
o.$oj$GRh=function(){
return this.$oj$cUh;
};
$.$oj$hUh=function($){
for(var o,t=[],h=0,i=$.length;i>h;h++)t.push(h/(i-1));
return(o=this.alloc())&&o.$oj$pUh($,t);
};
$.$oj$dUh=function($,o){
var t;
return(t=this.alloc())&&t.$oj$pUh($,o);
};
o.$oj$pUh=function($,o){
var h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$lUh=$;
h.$oj$cUh=o;
}
return h;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$vUh:1
},null,function($,o){
function t(){
this.$oj$mUh=this.$oj$gUh=null;
this.$oj$yUh=0;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$uUh=function(){
return this.$oj$gUh;
};
o.$oj$bUh=function(){
return this.$oj$yUh;
};
o.$oj$sUh=function(){
return this.$oj$mUh;
};
$.$oj$wUh=function($,o,t){
var h;
return(h=this.alloc())&&h.$oj$EUh($,o,t);
};
o.$oj$EUh=function($,o,i){
var n=this;
if(n=t.$oj_super.prototype.init.call(this)){
var j=h._cls.$oj$uBh.$oj$oBh(i);
j&&j.$oj$aLh(h._g.$oj$d($));
j&&j.$oj$SUh(o);
n.$oj$gUh=$;
n.$oj$yUh=j&&j.$oj$bUh();
j&&j.$oj$xUh();
n.$oj$mUh=j&&j.$oj$sUh();
}
return n;
};
return t;
});
}();
!function(){
"use strict";
h._registerClass({
$oj$uBh:1
},null,function($,o){
function t(){
this.$oj$TUh=this.$oj$NUh=this.$oj$CUh=this.$oj$kUh=this.$oj$LUh=null;
this.$oj$AUh=this.$oj$OUh=this.$oj$MUh=0;
this.$oj$DUh=!1;
this.constructor=t;
this.$oj_id=++h._id;
}
o.$oj$C4=function(){
return h.makeCopy(this.$oj$kUh);
};
o.$oj$PUh=function(){
return h.makeCopy(this.$oj$CUh);
};
o.$oj$bUh=function(){
return this.$oj$MUh;
};
o.$oj$HUh=function(){
return this.$oj$LUh;
};
o.$oj$hmt=function(){
return this.$oj$TUh;
};
o.$oj$sUh=function(){
return this.$oj$NUh;
};
$.$oj$oBh=function($){
var o;
return(o=new h._cls.$oj$uBh())&&o.$oj$Qst($);
};
o.$oj$Qst=function($){
var o=this;
if(o=t.$oj_super.prototype.init.call(this)){
o.$oj$TUh=$;
o.$oj$NUh=document.createElement("canvas");
o.$oj$MUh=h._g.$oj$ANh();
var i=o.$oj$NUh.style;
i.position="absolute";
i.top="0";
i.left="0";
}
return o;
};
o.$oj$BUh=function(){
var $=h._g.$oj$m(this.$oj$kUh?this.$oj$kUh.x:0,this.$oj$kUh?this.$oj$kUh.y:0,this.$oj$kUh?this.$oj$kUh.width:0,this.$oj$kUh?this.$oj$kUh.height:0);
this.$oj$CUh&&($=h._g.$oj$q($,this.$oj$CUh));
var o=this.$oj$NUh.style;
o.left=$.x+"px";
o.top=$.y+"px";
o.width=$.width+"px";
o.height=$.height+"px";
var t=Math.floor($.height*this.$oj$MUh),i=Math.floor($.width*this.$oj$MUh);
if(this.$oj$AUh!=t||this.$oj$OUh!=i){
this.$oj$OUh=i;
this.$oj$AUh=t;
}
};
o.$oj$jUh=function($){
this.$oj$LUh=$;
};
o.$oj$cBh=function(){
if(!this.$oj$DUh){
this.$oj$DUh=!0;
h._cls.$oj$RCh.$oj$FUh(this);
}
};
o.$oj$xUh=function(){
var $;
if(this.$oj$DUh){
var o=this.$oj$OUh,t=this.$oj$AUh,i=this.$oj$NUh,n=i.getContext("2d"),j=($=new h._cls.$oj$gRh())&&$.$oj$CRh(n);
i.width=o;
i.height=t;
n.setTransform(1,0,0,1,0,0);
var s=Math.floor(o/2);
n.clearRect(0,0,s,t);
n.clearRect(s,0,o-s,t);
n.beginPath();
n.save();
if(this.$oj$TUh){
j&&j.$oj$ORh(this.$oj$MUh,this.$oj$MUh);
this.$oj$CUh&&j&&j.$oj$MRh(-this.$oj$CUh.left,-this.$oj$CUh.top);
j&&j.$oj$kRh(this.$oj$TUh);
}
n.restore();
this.$oj$DUh=!1;
}
};
o.$oj$IUh=function(){
h._cls.$oj$RCh.$oj$qUh(this);
};
o.$oj$RUh=function(){
this.$oj$LUh&&this.$oj$LUh.$oj$UUh(this);
};
o.$oj$hBh=function(){
return h._g.$oj$w(this.$oj$kUh);
};
o.$oj$aLh=function($){
if(!h._g.$oj$S(this.$oj$kUh,$)){
this.$oj$kUh=h._g.$oj$y($);
this.$oj$BUh();
this.$oj$cBh();
}
};
o.$oj$NHh=function($){
if(this.$oj$TUh!=$){
this.$oj$TUh=$;
this.$oj$cBh();
}
};
o.$oj$zUh=function($){
if(!h._g.$oj$I(this.$oj$CUh,$)){
this.$oj$CUh=$;
this.$oj$BUh();
this.$oj$cBh();
}
};
o.$oj$SUh=function($){
$||($=h._g.$oj$ANh());
if(this.$oj$MUh!=$){
this.$oj$MUh=$;
this.$oj$BUh();
this.$oj$cBh();
}
};
return t;
});
}();
!function(){
"use strict";
var o=null,t=null,i=null,n=!1,j=0,s=0;
function r(){
if(n)return;
document.addEventListener("touchstart",function($){
j>0&&$.preventDefault();
},!0);
$.each(["mousedown","mouseup","mousemove","click"],function($){
document.addEventListener($,function($){
if(s>0){
$.stopPropagation();
$.preventDefault();
}
},!0);
});
n=!0;
}
function e(){
var $;
document.removeEventListener("touchstart",f,!1);
document.removeEventListener("touchend",a,!1);
document.removeEventListener("touchmove",l,!1);
document.removeEventListener("touchcancel",d,!1);
document.removeEventListener("mouseup",v,!1);
document.removeEventListener("mousemove",p,!1);
document.removeEventListener("contextmenu",_,!0);
if(i){
var o=($=i)&&$.$oj$WUh();
o.removeEventListener("mouseover",g,!1);
o.removeEventListener("mouseout",C,!1);
}
i=null;
}
function u($,o){
var t;
e();
if(o){
document.addEventListener("touchstart",f,!1);
document.addEventListener("touchend",a,!1);
document.addEventListener("touchmove",l,!1);
document.addEventListener("touchcancel",d,!1);
}else{
document.addEventListener("mouseup",v,!1);
document.addEventListener("mousemove",p,!1);
document.addEventListener("contextmenu",_,!0);
}
if(!o){
var h=(t=$)&&t.$oj$WUh();
h.addEventListener("mouseover",g,!1);
h.addEventListener("mouseout",C,!1);
}
i=$;
}
function c(){
var $,h,n,j,s,r=o,u=null;
i!=r||($=r)&&$.$oj$XUh()||(u=t);
(h=i)&&h.$oj$VUh();
e();
o=t=null;
if(u){
var c=(n=r)&&n.$oj$cOh();
(j=u)&&j.$oj$JUh(c.x,c.y,(s=r)&&s.$oj$KUh());
setTimeout(function(){
var $;
($=u)&&$.$oj$VUh();
},0);
e();
}
}
function a($){
h._g.$oj$CNh(function(){
$.stopPropagation();
$.preventDefault();
c();
s++;
j++;
setTimeout(function(){
j--;
},500);
setTimeout(function(){
s--;
},1e3);
});
}
function f($){
h._g.$oj$CNh(function(){
var o;
$.touches.length>1&&(o=i)&&o.$oj$QUh(!1);
});
}
function l($){
h._g.$oj$CNh(function(){
var o,t=$.touches.length>0?$.touches[0]:null;
if(!t)return;
(o=i)&&o.$oj$GUh(t.pageX,t.pageY,!0);
});
}
function d(){
h._g.$oj$CNh(function(){
var $;
($=i)&&$.$oj$QUh(!1);
});
}
function v(){
h._g.$oj$CNh(function(){
c();
});
}
function p($){
h._g.$oj$CNh(function(){
var o;
(o=i)&&o.$oj$GUh($.pageX,$.pageY,!1);
});
}
function _(){
h._g.$oj$CNh(function(){
var $,h;
($=i)&&$.$oj$QUh(!1);
(h=i)&&h.$oj$VUh();
e();
o=t=null;
});
}
function g(){
h._g.$oj$CNh(function(){
var $;
($=i)&&$.$oj$QUh(!0);
});
}
function C(){
h._g.$oj$CNh(function(){
var $;
($=i)&&$.$oj$QUh(!1);
});
}
h._registerClass({
$oj$iOh:1
},null,function($,n){
function j(){
this.$oj$YUh=this.$oj$ZUh=this.$oj$ezh=this.$oj$tzh=null;
this.$oj$nzh=0;
this.$oj$rzh=this.$oj$izh=this.$oj$szh=!1;
this.constructor=j;
this.$oj_id=++h._id;
}
n.$oj$KUh=function(){
return this.$oj$szh;
};
n.$oj$uOh=function(){
return this.$oj$rzh;
};
n.$oj$XUh=function(){
return this.$oj$izh;
};
n.$oj$cOh=function(){
return this.$oj$tzh;
};
n.$oj$ozh=function(){
return this.$oj$nzh;
};
n.$oj$WUh=function(){
return this.$oj$ezh;
};
n.$oj$rCh=function(){
return this.$oj$YUh;
};
n.$oj$rOh=function($,o,t){
var i=this;
if(i=j.$oj_super.prototype.init.call(this)){
i.$oj$YUh=t;
i.$oj$nzh=o;
i.$oj$ezh=$;
i.$oj$tzh=h._g.$oj$o();
r();
i.$oj$uzh();
}
return i;
};
n.$oj$uzh=function(){
var $=this,i=this.$oj$ezh,n=this.$oj$nzh;
function j(){
3==n?o=$:1==n&&(t=$);
}
i.addEventListener("touchstart",j,!0);
i.addEventListener("mousedown",j,!0);
i.addEventListener("touchstart",function(i){
h._g.$oj$CNh(function(){
if(o&&t==$)return;
(2==n||3==n)&&i.preventDefault();
if(0!=n)if(i.touches.length>1)$.$oj$QUh(!1);else{
var h=i.touches[0];
$.$oj$JUh(h.pageX,h.pageY,!0);
}
i.stopPropagation();
});
},!1);
i.addEventListener("mousedown",function(i){
h._g.$oj$CNh(function(){
if(o&&t==$)return;
i.stopPropagation();
0!=n&&$.$oj$JUh(i.pageX,i.pageY,!1);
});
},!1);
};
n.$oj$JUh=function($,o,t){
this.$oj$tzh=h._g.$oj$s($,o);
this.$oj$ZUh=this.$oj$tzh;
this.$oj$szh=t;
this.$oj$izh=!1;
if(this.$oj$YUh&&this.$oj$YUh.$oj$fOh(this)){
u(this,t);
this.$oj$QUh(!0);
}
};
n.$oj$GUh=function($,o,t){
this.$oj$tzh=h._g.$oj$s($,o);
if(t){
var n=$-this.$oj$ZUh.x,j=o-this.$oj$ZUh.y;
if(Math.abs(n)>10||Math.abs(j)>10){
this.$oj$izh=!0;
1==this.$oj$nzh&&i&&i.$oj$QUh(!1);
}
}
this.$oj$YUh&&this.$oj$YUh.respondsToSelector_({
$oj$dOh:1
})&&this.$oj$YUh&&this.$oj$YUh.$oj$dOh(this);
};
n.$oj$QUh=function($){
if(this.$oj$rzh!=$){
this.$oj$rzh=$;
this.$oj$YUh&&this.$oj$YUh.respondsToSelector_({
$oj$dOh:1
})&&this.$oj$YUh&&this.$oj$YUh.$oj$dOh(this);
}
};
n.$oj$VUh=function(){
this.$oj$YUh&&this.$oj$YUh.respondsToSelector_({
$oj$vOh:1
})&&this.$oj$YUh&&this.$oj$YUh.$oj$vOh(this);
this.$oj$QUh(!1);
this.$oj$tzh=this.$oj$ZUh=h._g.$oj$o();
};
return j;
});
}();
!function(){
"use strict";
var $=null,o=0;
h._g.$oj$CNh=function(o){
try{
o();
}catch(t){
$&&$(t);
}
h._g.$oj$kNh();
};
h._g.$oj$kNh=function(){
var $;
($=h._cls.$oj$RCh)&&$.$oj$lLh();
};
h._g.$oj$LNh=function(o){
$=o;
};
h._g.$oj$ANh=function(){
return Math.ceil(window.devicePixelRatio||1);
};
h._g.$oj$ONh=function($,o){
var t=(16711680&$)>>16,h=(65280&$)>>8,i=255&$;
return"rgba("+t+","+h+","+i+","+o+")";
};
h._g.$oj$MNh=function($){
return"rgba("+$[0]+","+$[1]+","+$[2]+","+$[3]+")";
};
h._g.$oj$DNh=function(){
return["rgba(255,0  ,0  ,0.5)","rgba(0  ,255,0  ,0.5)","rgba(0  ,0  ,255,0.5)","rgba(0  ,255,255,0.5)","rgba(255,255,0  ,0.5)","rgba(255,0  ,255,0.5)"][o++%6];
};
h._g.$oj$PNh=function($){
var o=!1,t=void 0,h=void 0,i=void 0,n=void 0;
if(!o){
var j=$.match(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i);
if(j){
t=parseInt(j[1],16);
h=parseInt(j[2],16);
i=parseInt(j[3],16);
n=1;
o=!0;
}
}
if(!o){
var s=$.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
if(s){
t=parseInt(s[1],10);
h=parseInt(s[2],10);
i=parseInt(s[3],10);
n=1;
o=!0;
}
}
if(!o){
var r=$.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]+\.?[0-9]*)\s*\)/);
if(r){
t=parseInt(r[1],10);
h=parseInt(r[2],10);
i=parseInt(r[3],10);
n=parseFloat(r[4]);
o=!0;
}
}
return o?[t,h,i,n]:null;
};
h._g.$oj$HNh=function($,o,t){
var i,n;
return(i=(n=h._cls.$oj$vUh)&&n.alloc())&&i.$oj$EUh($,o,t);
};
}();
!function(){
"use strict";
var o=1,t=0,i=!1,n=[],j=[],s=[],r=[];
h._registerClass({
$oj$RCh:1
},null,function(e,u){
function c(){
this.$oj$azh=this.$oj$fzh=this.$oj$lzh=this.$oj$czh=this.$oj$hzh=this.$oj$pzh=this.$oj$dzh=null;
this.$oj$vzh=this.$oj$mzh=this.$oj$gzh=this.$oj$yzh=!1;
this.constructor=c;
this.$oj_id=++h._id;
}
u.$oj$Kkh=function(){
return this.$oj$dzh;
};
u.$oj$vMh=function(){
return this.$oj$hzh;
};
u.$oj$Pjh=function($){
this.$oj$vzh=$;
};
u.$oj$bzh=function(){
return this.$oj$vzh;
};
u.$oj$C4=function(){
return h.makeCopy(this.$oj$azh);
};
u.$oj$Yft=function(){
return this.$oj$mzh;
};
e.$oj$FUh=function($){
j.push($);
this.$oj$wzh();
};
e.$oj$qUh=function($){
s.push($);
this.$oj$wzh();
};
u.description=function(){
return"<"+this.className()+" "+this.$oj$Ezh()+">";
};
e.$oj$wzh=function(){
if(!i){
window.requestAnimationFrame(function(){
h._g.$oj$CNh(function(){
h._cls.$oj$RCh.$oj$lLh();
});
});
i=!0;
}
};
e.$oj$lLh=function(){
t++;
for(;n.length;){
var $=n.slice(0);
n=[];
for(var o,e=0,u=$?$.length:0;u>e;e++){
o=$[e];
o&&o.$oj$Szh();
}
}
for(;j.length;){
var c=j.slice(0);
j=[];
for(var a,f=0,l=c?c.length:0;l>f;f++){
a=c[f];
a&&a.$oj$xUh();
}
}
for(var d,v=0,p=s?s.length:0;p>v;v++){
d=s[v];
d&&d.$oj$RUh();
}
s=[];
for(var _,g=0,C=r?r.length:0;C>g;g++){
_=r[g];
_&&_.$oj$Qkh();
}
r=[];
h._cls.$oj$gRh.$oj$TRh();
t--;
i=!1;
};
e.$oj$sMh=function(){
return"div";
};
e.$oj$VCh=function(){
return null;
};
e.$oj$yMh=function($){
var o;
return(o=this.alloc())&&o.$oj$xzh($);
};
e.$oj$Tzh=function($,o){
var t,h=(t=this.alloc())&&t.$oj$xzh($);
h&&h.$oj$hCh(o);
return h;
};
e.$oj$QCh=function($){
var o,t=(o=this.alloc())&&o.init();
t&&t.$oj$hCh($);
return t;
};
u.$oj$xzh=function($){
var o=this;
if(o=c.$oj_super.prototype.init.call(this)){
for(var t=document.createElement($),i=h._cls.$oj$RCh,n=o.constructor;n!=i;){
var j=n&&n.$oj$VCh();
j&&t.classList.add(j);
n=n&&n.superclass();
}
o.$oj$Ijh();
o.$oj$vzh=!0;
o.$oj$czh=t;
o.$oj$hzh=[];
}
return o;
};
u.init=function(){
var $;
return this.$oj$xzh(($=this.constructor)&&$.$oj$sMh());
};
u.$oj$Nzh=function($,o){
var t;
o>0&&$(this);
for(var h=o+1,i=0,n=this.$oj$hzh.length;n>i;i++)(t=this.$oj$hzh[i])&&t.$oj$Nzh($,h);
};
u.$oj$Czh=function($){
this.$oj$dzh=$;
};
u.$oj$kzh=function(o){
this.$oj$Ijh();
this.$oj$hzh=$.without(this.$oj$hzh,o);
};
u.$oj$bCh=function($){
if(!$)return;
if(this.$oj$gzh){
this.$oj$pzh||(this.$oj$pzh=[]);
this.$oj$pzh.push($);
return;
}
if(($&&$.$oj$Kkh())!=this){
$&&$.$oj$Czh(this);
this.$oj$dMh().appendChild($&&$.$oj$NCh());
this.$oj$hzh.push($);
this.$oj$Ijh();
}
};
u.$oj$ECh=function(o){
var t=this;
$.each(o,function($){
t.$oj$bCh($);
});
};
u.$oj$Lzh=function(){
$.each(this.$oj$hzh.slice(0),function($){
$&&$.$oj$Qkh();
});
};
u.$oj$IUh=function(){
r.push(this);
h._cls.$oj$RCh.$oj$wzh();
};
u.$oj$Qkh=function(){
var $=this.$oj$Kkh();
if(!$)return;
$&&$.$oj$kzh(this);
this.$oj$Czh(null);
var o=this.$oj$NCh();
o&&o.parentNode&&o.parentNode.removeChild(o);
};
u.$oj$Azh=function(o,t){
var h=this.$oj$hzh[t];
this.$oj$bCh(o);
if(h){
this.$oj$hzh=$.without(this.$oj$hzh,o);
this.$oj$hzh.splice(t,0,o);
this.$oj$NCh().insertBefore(o&&o.$oj$NCh(),h&&h.$oj$NCh());
}
};
u.$oj$Ozh=function(o,t){
var h=$.indexOf(this.$oj$hzh,t);
this.$oj$Azh(o,h);
};
u.$oj$Jkh=function(o,t){
var h=$.indexOf(this.$oj$hzh,t);
this.$oj$Azh(o,h+1);
};
u.$oj$Mzh=function($){
var o=this;
if($)for(;o;){
if(o==$)return!0;
o=o&&o.$oj$Kkh();
}
return!1;
};
u.$oj$Eht=function($){
if(this.$oj$mzh!=$){
this.$oj$mzh=$;
var o=this.$oj$L4();
this.$oj$mzh?o.display="none":o.removeProperty("display");
}
};
u.$oj$Dzh=function(){
var o=this;
if(this.$oj$gzh)return;
this.$oj$gzh=!0;
this.$oj$fzh=this.$oj$JCh();
this.$oj$gzh=!1;
$.each(this.$oj$pzh,function($){
o.$oj$bCh($);
});
o.$oj$pzh=null;
o.$oj$KCh();
o.$oj$zIh();
};
u.$oj$NCh=function(){
this.$oj$fzh||this.$oj$Dzh();
return this.$oj$czh;
};
u.$oj$dMh=function(){
this.$oj$fzh||this.$oj$Dzh();
return this.$oj$fzh;
};
u.$oj$hCh=function($){
$&&this.$oj$czh.classList.add($);
};
u.$oj$PIh=function($){
$&&this.$oj$czh.classList.remove($);
};
u.$oj$QHh=function($){
$&&this.$oj$czh.classList.toggle($);
};
u.$oj$fkh=function($,o){
$&&this.$oj$czh.classList.toggle($,!!o);
};
u.$oj$bOh=function($,o){
this.$oj$czh.setAttribute(o,$);
};
u.$oj$oIh=function($){
return this.$oj$czh.getAttribute($);
};
u.$oj$HOh=function($){
this.$oj$czh.removeAttribute($);
};
u.$oj$ZFh=function($){
var o=this.$oj$dMh();
o.textContent=$;
};
u.$oj$Pzh=function(){
var $=this.$oj$dMh();
return $.textContent;
};
u.$oj$GCh=function($){
var o=this.$oj$dMh();
o.innerHTML=$;
};
u.$oj$Hzh=function(){
var $=this.$oj$dMh();
return $.innerHTML;
};
u.$oj$L4=function(){
return this.$oj$czh.style;
};
u.$oj$fBh=function($){
if(!$)return;
this.$oj$lzh||(this.$oj$lzh=[]);
this.$oj$lzh.push($);
this.$oj$Ijh();
$&&$.$oj$jUh(this);
this.$oj$czh.appendChild($&&$.$oj$sUh());
};
u.$oj$UUh=function(o){
if(!o)return;
var t=o&&o.$oj$sUh();
t&&t.parentNode==this.$oj$czh&&t.parentNode.removeChild(t);
this.$oj$lzh=$.without(this.$oj$lzh,o);
o&&o.$oj$jUh(null);
};
u.$oj$Ijh=function(){
if(!this.$oj$yzh){
this.$oj$yzh=!0;
n.push(this);
h._cls.$oj$RCh.$oj$wzh();
}
};
u.$oj$Szh=function(){
var o=this;
if(this.$oj$yzh){
this.$oj$fzh||this.$oj$Dzh();
if(this.$oj$vzh){
var t=this.$oj$hBh();
$.each(this.$oj$lzh,function($){
$&&$.$oj$aLh(t);
});
}
(o.$oj$azh||o.$oj$mqh())&&o.$oj$jjh();
o.$oj$yzh=!1;
}
};
u.$oj$bFh=function(){
if(this.$oj$yzh){
t++;
this.$oj$Szh();
t--;
}
};
u.$oj$jjh=function(){};
u.$oj$aLh=function($){
if(!this.$oj$azh&&!$)return;
var o=this.$oj$azh?this.$oj$azh:h._g.$oj$m(Number.NaN,Number.NaN,0,0),i=this.$oj$czh.style;
this.$oj$azh=h._g.$oj$y($);
if($){
if(o.x!=$.x||o.y!=$.y){
i.position="absolute";
i.top=$.y+"px";
i.left=$.x+"px";
}
if(o.width!=$.width||o.height!=$.height){
i.width=$.width+"px";
i.height=$.height+"px";
this.$oj$Ijh();
t>0&&this.$oj$Szh();
}
}else{
i.removeProperty("position");
i.removeProperty("top");
i.removeProperty("left");
i.removeProperty("width");
i.removeProperty("height");
}
};
u.$oj$Bzh=function($,o){
this.$oj$aLh(h._g.$oj$d($));
o&&(this.$oj$czh.style.position="relative");
};
u.$oj$mqh=function(){
return!1;
};
u.$oj$hBh=function(){
return this.$oj$azh?h._g.$oj$w(this.$oj$azh):null;
};
u.$oj$Ezh=function(){
var $=this.$oj$oIh("id");
if(!$){
$="ax-"+o++;
this.$oj$bOh($,"id");
}
return $;
};
u.$oj$Eit=function($){
$?this.$oj$bOh($,"aria-label"):this.$oj$HOh("aria-label");
};
u.$oj$Crt=function(){
return this.$oj$oIh("aria-label");
};
u.$oj$jzh=function($){
this.$oj$bOh($&&$.$oj$Ezh(),"aria-labelledby");
};
u.$oj$JCh=function(){
return this.$oj$czh;
};
u.$oj$KCh=function(){};
u.$oj$zIh=function(){};
return c;
});
}();
}).call(this);
