/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var $=_musictheory_net_("_"),o=(_musictheory_net_("namespace"),_musictheory_net_("require"),
_musictheory_net_("oj"),_musictheory_net_("$oj_oj")),j=_musictheory_net_("$");
!function(){
"use strict";
var h=null,t=null,i=null,y=null,s=1,n=1,r=2;
function e($,o){
var j,h=(j=$)&&j.$oj$sUh();
h&&(h.style.zIndex=""+o);
}
function c(){
var $,j,s,n;
if(h)return;
h=($=o._cls.$oj$fUh)&&$.$oj$hUh([o._g.$oj$ONh(0,0),o._g.$oj$ONh(0,.66),o._g.$oj$ONh(0,0)]);
t=(j=o._cls.$oj$fUh)&&j.$oj$hUh([o._g.$oj$ONh(13684944,1),o._g.$oj$ONh(10526880,1)]);
i=(s=o._cls.$oj$fUh)&&s.$oj$dUh([o._g.$oj$ONh(0,.2),o._g.$oj$ONh(16777215,.6),o._g.$oj$ONh(0,.2)],[0,.45,1]);
y=(n=o._cls.$oj$fUh)&&n.$oj$dUh([o._g.$oj$ONh(10066329,1),o._g.$oj$ONh(16777215,1),o._g.$oj$ONh(6710886,1)],[0,.4,1]);
}
o._registerClass({
$oj$XFy:1
},{
$oj$RCh:1
},function(u,a){
function f(){
o._cls.$oj$RCh.call(this);
this.$oj$VFy=this.$oj$JFy=this.$oj$KFy=this.$oj$QFy=this.$oj$GFy=this.$oj$YFy=this.$oj$ZFy=this.$oj$eIy=this.$oj$tIy=this.$oj$nIy=this.$oj$rIy=this.$oj$iIy=this.$oj$sIy=this.$oj$oIy=this.$oj$uIy=this.$oj$aIy=this.$oj$fIy=null;
this.$oj$lIy=this.$oj$cIy=this.$oj$hIy=this.$oj$pIy=this.$oj$dIy=0;
this.$oj$vIy=!1;
this.constructor=f;
this.$oj_id=++o._id;
}
a.$oj$mIy=function(){
return this.$oj$cIy;
};
a.$oj$gIy=function(){
return this.$oj$vIy;
};
u.$oj$VCh=function(){
return"_h8d";
};
a.$oj$KCh=function(){
var $=this;
f.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$JFy=o._cls.$oj$RCh.$oj$QCh("_p8d");
this.$oj$GFy=o._cls.$oj$RCh.$oj$QCh("_d8d");
this.$oj$rIy=o._cls.$oj$uBh.$oj$oBh(function(o){
$.$oj$yIy(o);
});
var h=j.create("img",{
src:"/vc/18/0/e0eebe724c1e49f14f0572d95cf8fb9a6285509d/texture_fretboard.png"
});
h.addEventListener("load",function(){
$.$oj$tIy=h;
$.$oj$rIy&&$.$oj$rIy.$oj$cBh();
});
$.$oj$bCh($.$oj$JFy);
$.$oj$bCh($.$oj$GFy);
$.$oj$GFy&&$.$oj$GFy.$oj$Pjh(!1);
$.$oj$GFy&&$.$oj$GFy.$oj$fBh($.$oj$rIy);
c();
};
a.$oj$jjh=function(){
f.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
this.$oj$JFy&&this.$oj$JFy.$oj$aLh($);
this.$oj$GFy&&this.$oj$GFy.$oj$aLh($);
if(!this.$oj$VFy)return;
var j=this.$oj$VFy&&this.$oj$VFy.$oj$C4();
j.y=Math.round(($.height-j.height)/2);
var h=Math.ceil(j.height/8);
this.$oj$rIy&&this.$oj$rIy.$oj$zUh(o._g.$oj$B(-h,0,-h,0));
this.$oj$rIy&&this.$oj$rIy.$oj$aLh(j);
};
a.$oj$bIy=function($){
var j=this;
$&&$.$oj$LRh();
var h=this.$oj$VFy&&this.$oj$VFy.$oj$C4(),t=this.$oj$QFy&&this.$oj$QFy.$oj$C4(),i=this.$oj$KFy&&this.$oj$KFy.$oj$C4(),y=h.height/8,s=o._g.$oj$s(0,Math.round(y/8));
$&&$.$oj$nUh("rgba(0, 0, 0, 0.5)",s,y);
$&&$.$oj$pBh();
if(t){
var n=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(0,1),o._g.$oj$ONh(2105376,1),o._g.$oj$ONh(0,1)]);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(t);
$&&$.$oj$tUh(n,t,0);
}
$&&$.$oj$pBh();
if(i){
var r=this.$oj$ZFy&&this.$oj$ZFy.$oj$Hit(),e=o._g.$oj$T(h),c=o._g.$oj$L(h),u=o._g.$oj$N(h),a=o._g.$oj$A(h),f=o._g.$oj$T(i),l=o._g.$oj$C(i),_=o._g.$oj$L(i),g=o._g.$oj$N(i),v=r?g:a,R=r?a:g;
$&&$.$oj$jRh(o._g.$oj$s(e,u));
$&&$.$oj$FRh(o._g.$oj$s(c,u));
$&&$.$oj$FRh(o._g.$oj$s(c,v));
$&&$.$oj$FRh(o._g.$oj$s(_,v));
$&&$.$oj$IRh(o._g.$oj$s(f,R),o._g.$oj$s(l,v),o._g.$oj$s(l,R));
$&&$.$oj$FRh(o._g.$oj$s(e,R));
$&&$.$oj$BRh();
}else $&&$.$oj$Hjh(h);
this.$oj$tIy?$&&$.$oj$aUh(function($){
var o=$.createPattern(j.$oj$tIy,"repeat");
$.setTransform(1,0,0,1,0,0);
$.fillStyle=o;
$.fill();
}):$&&$.$oj$vBh("#2c1612");
$&&$.$oj$rUh();
$&&$.$oj$ARh();
};
a.$oj$wIy=function($,o){
$&&$.$oj$pBh();
$&&$.$oj$Hjh(o);
$&&$.$oj$vBh("rgba(0, 0, 0, 0.85)");
};
a.$oj$EIy=function($,j){
var h=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(0,0),o._g.$oj$ONh(0,.75)]);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(j);
$&&$.$oj$tUh(h,j,this.$oj$ZFy&&this.$oj$ZFy.$oj$Hit()?180:0);
};
a.$oj$SIy=function($,j){
var t=o._g.$oj$y(j);
t.x-=t.width;
t.width*=3;
$&&$.$oj$pBh();
$&&$.$oj$Hjh(t);
$&&$.$oj$tUh(h,t,0);
var i=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(15786192,1),o._g.$oj$ONh(14733504,1)]);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(j);
$&&$.$oj$YRh(i,j);
};
a.$oj$xIy=function($,j){
var y=o._g.$oj$y(j);
y.x-=y.width;
y.width*=3;
$&&$.$oj$pBh();
$&&$.$oj$Hjh(y);
$&&$.$oj$tUh(h,y,0);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(j);
$&&$.$oj$tUh(t,j,-90);
$&&$.$oj$tUh(i,j,0);
};
a.$oj$TIy=function($,j,t){
var i=o._g.$oj$y(j);
i.y-=1;
i.height+=2;
$&&$.$oj$pBh();
$&&$.$oj$Hjh(i);
$&&$.$oj$tUh(h,i,-90);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(j);
$&&$.$oj$tUh(y,j,-90);
if(t>0){
var s=o._g.$oj$y(j);
s.width=.5;
$&&$.$oj$pBh();
for(var n=j.x;n<j.width;n+=2){
s.x=n;
$&&$.$oj$Hjh(s);
}
$&&$.$oj$vBh(o._g.$oj$ONh(0,.4*t));
$&&$.$oj$pBh();
for(var r=j.x+.5;r<j.width;r+=2){
s.x=r;
$&&$.$oj$Hjh(s);
}
$&&$.$oj$vBh(o._g.$oj$ONh(0,.35*t));
}
};
a.$oj$NIy=function($,j){
var h=1/o._g.$oj$ANh(),t=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(8421504,1),o._g.$oj$ONh(13684944,1)]);
$&&$.$oj$pBh();
$&&$.$oj$RRh(j);
$&&$.$oj$YRh(t,j);
$&&$.$oj$pBh();
$&&$.$oj$RRh(o._g.$oj$E(j,h,h));
$&&$.$oj$vBh(o._g.$oj$ONh(11842740,1));
};
a.$oj$CIy=function($,o,j){
$&&$.$oj$pBh();
$&&$.$oj$RRh(o);
$&&$.$oj$vBh(j);
};
a.$oj$kIy=function($,o,j){
$&&$.$oj$pBh();
$&&$.$oj$Hjh(o);
$&&$.$oj$vBh(j);
};
a.$oj$LIy=function($,j){
var h=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(16183014,1),o._g.$oj$ONh(14733504,1)]);
$&&$.$oj$pBh();
$&&$.$oj$RRh(j);
$&&$.$oj$tUh(h,j,-90);
};
a.$oj$AIy=function($,j){
var h=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(0,0),o._g.$oj$ONh(0,.33)]);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(j);
$&&$.$oj$tUh(h,j,0);
};
a.$oj$yIy=function($){
if(!this.$oj$VFy)return;
var j=o._g.$oj$hNh(),h=this.$oj$hBh(),t=this.$oj$VFy&&this.$oj$VFy.$oj$C4();
t.y=Math.round((h.height-t.height)/2);
$&&$.$oj$MRh(0,-t.y);
j&&this.$oj$bIy($);
for(var i,y=this.$oj$YFy,n=0,r=y?y.length:0;r>n;n++){
i=y[n];
var e=i&&i.$oj$Jr(),c=i&&i.$oj$C4();
if(3==e)j&&this.$oj$wIy($,c);else if(5==e)j?this.$oj$SIy($,c):this.$oj$kIy($,c,"black");else if(6==e)j?this.$oj$xIy($,c):this.$oj$kIy($,c,"black");else if(8==e)if(j){
var u=i&&i.$oj$Get();
this.$oj$TIy($,c,u);
}else this.$oj$kIy($,c,"black");else 9==e?j&&this.$oj$EIy($,c):7==e?j?this.$oj$NIy($,c):this.$oj$CIy($,c,"#d8d8d8"):15==e?j?this.$oj$LIy($,c):this.$oj$CIy($,c,"#d8d8d8"):16==e&&(j?this.$oj$AIy($,c):this.$oj$kIy($,c,"#d8d8d8"));
}
if(!this.$oj$nIy||this.$oj$hIy>=0)for(var a,f=this.$oj$hIy,l=this.$oj$iIy,_=0,g=l?l.length:0;g>_;_++){
a=l[_];
var v=a&&a.$oj$Ket(),R=this.$oj$pIy;
f>=0&&v>f&&(R=this.$oj$dIy);
if(this.$oj$hIy<(a&&a.$oj$Ket())){
var I=o._g.$oj$E(a&&a.$oj$C4(),-s,-s),q=this.$oj$OIy(I,R);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(I);
$&&$.$oj$oUh(q,I);
}
}
};
a.$oj$OIy=function($,j){
var h=this;
if(!j)return null;
this.$oj$sIy||(this.$oj$sIy={});
var t=this.$oj$sIy[j];
if(t&&o._g.$oj$v(t&&t.$oj$uUh(),$))return t;
var i=[null,16737894,15084845,57344,57344][j],y=[null,16711680,13369344,40960,40960][j],n=o._g.$oj$d($),r=o._g.$oj$E(n,s,s),e=o._g.$oj$HNh($,o._g.$oj$ANh(),function($){
$&&$.$oj$nUh(o._g.$oj$ONh(0,.5),null,s);
$&&$.$oj$pBh();
$&&$.$oj$RRh(r);
$&&$.$oj$vBh(o._g.$oj$ONh(i,1));
$&&$.$oj$rUh();
var j=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(i,1),o._g.$oj$ONh(y,1)]);
$&&$.$oj$YRh(j,r);
if(o._g.$oj$hNh()){
var h=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(16777215,.25),o._g.$oj$ONh(16777215,.35)]),t=o._g.$oj$E(r,1,1);
$&&$.$oj$pBh();
$&&$.$oj$RRh(r);
$&&$.$oj$RRh(t);
$&&$.$oj$eUh(h,r,-90,"evenodd");
}
});
h.$oj$sIy[j]=e;
return e;
};
a.$oj$MIy=function(){
var o=this;
j.stop(this.$oj$lIy);
this.$oj$lIy=0;
this.$oj$rIy&&this.$oj$rIy.$oj$cBh();
$.each(this.$oj$uIy,function($){
$&&$.$oj$IUh();
});
o.$oj$uIy=null;
o.$oj$nIy&&o.$oj$nIy.$oj$IUh();
o.$oj$nIy=null;
o.$oj$pIy=$.size(o.$oj$oIy)>0?2:1;
o.$oj$hIy=-1;
};
a.$oj$DIy=function($,o){
this.$oj$PIy($,o,-1);
};
a.$oj$PIy=function(h,t,i){
var y,c=this;
this.$oj$MIy();
var u=(y=new o._cls.$oj$RCh())&&y.init();
u&&u.$oj$Pjh(!1);
var a=[],f=[],l=$.size(this.$oj$oIy)>0;
if(1==h){
this.$oj$pIy=0;
this.$oj$dIy=l?2:1;
}else{
if(2!=h)return;
this.$oj$pIy=4;
this.$oj$dIy=4;
}
function _($,j){
var h=o._g.$oj$E($&&$.$oj$C4(),-s,-s),t=o._g.$oj$w(h),i=o._cls.$oj$uBh.$oj$oBh(function($){
var o=c.$oj$OIy(h,j);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(t);
$&&$.$oj$oUh(o,t);
});
i&&i.$oj$aLh(h);
return i;
}
var g=0;
$.each(c.$oj$iIy,function($){
var j,t,y=c.$oj$oIy?(j=c.$oj$oIy[g++])&&j.$oj$NCh():null;
if(0>i||($&&$.$oj$Ket())==i){
var s=_($,3),l=_($,4),v=1==h,R=(t=new o._cls.$oj$BIy())&&t.$oj$HIy(s,l,y,v);
if(s){
e(s,r);
f.push(s);
u&&u.$oj$fBh(s);
}
if(l){
e(l,n);
f.push(l);
u&&u.$oj$fBh(l);
}
a||(a=[]);
a.push(R);
}
});
c.$oj$lIy=j.animate(1e3*t,function(o){
$.each(a,function($){
return $&&$.$oj$jIy(o);
});
},function(){
c.$oj$MIy();
});
c.$oj$nIy=u;
c.$oj$uIy=f;
c.$oj$hIy=i;
c.$oj$bCh(c.$oj$nIy);
c.$oj$rIy&&c.$oj$rIy.$oj$cBh();
};
a.$oj$FIy=function(j){
var h=this;
if(this.$oj$ZFy==j)return;
this.$oj$MIy();
this.$oj$ZFy=j;
$.each(this.$oj$aIy,function($){
$&&$.$oj$Qkh();
});
$.each(h.$oj$eIy,function($){
$&&$.$oj$Qkh();
});
$.each(h.$oj$oIy,function($){
$&&$.$oj$Qkh();
});
for(var t,i=[],y=[],s=[],n=[],r=[],e=[],c=null,u=null,a=null,f=null,l=j&&j.$oj$Vtt(),_=0,g=l?l.length:0;g>_;_++){
t=l[_];
var v=t&&t.$oj$Jr();
if(11==v){
var R=o._cls.$oj$RCh.$oj$QCh("_v8d"),I=R&&R.$oj$L4(),q=t&&t.$oj$Get();
I.fontSize=q+"px";
I.borderRadius=Math.round(q)+"px";
(R&&R.$oj$dMh()).appendChild(o._g.$oj$vNh(t&&t.$oj$Qet()));
R&&R.$oj$aLh(t&&t.$oj$C4());
s.push(R);
h.$oj$GFy&&h.$oj$GFy.$oj$bCh(R);
}else if(12==v){
var d=o._cls.$oj$RCh.$oj$QCh("_m8d");
(d&&d.$oj$L4()).fontSize=(t&&t.$oj$Get())+"px";
d&&d.$oj$ZFh(t&&t.$oj$Qet());
d&&d.$oj$aLh(t&&t.$oj$C4());
n.push(d);
h.$oj$GFy&&h.$oj$GFy.$oj$bCh(d);
}else if(13==v){
var U=o._cls.$oj$RCh.$oj$QCh("_g8d");
U&&U.$oj$ZFh(t&&t.$oj$Qet());
(U&&U.$oj$L4()).fontSize=(t&&t.$oj$Get())+"px";
U&&U.$oj$aLh(t&&t.$oj$C4());
r.push(U);
h.$oj$GFy&&h.$oj$GFy.$oj$bCh(U);
}else 2==v?c=t:4==v?u=t:1==v?f=t:14==v?a=t:10==v?y.push(t):17==v?e.push(t):i.push(t);
}
if(a&&!h.$oj$fIy){
var C=o._cls.$oj$RCh.$oj$Tzh("div","_y8d");
h.$oj$fIy=C;
h.$oj$GFy&&h.$oj$GFy.$oj$bCh(C);
}else if(!a&&h.$oj$fIy){
h.$oj$fIy&&h.$oj$fIy.$oj$Qkh();
h.$oj$fIy=null;
}
h.$oj$fIy&&h.$oj$fIy.$oj$aLh(a&&a.$oj$C4());
h.$oj$aIy=s;
h.$oj$eIy=n;
h.$oj$oIy=r;
h.$oj$YFy=i;
h.$oj$iIy=y;
h.$oj$VFy=c;
h.$oj$QFy=f;
h.$oj$KFy=u;
h.$oj$pIy=$.size(r)>0?2:1;
h.$oj$Ijh();
h.$oj$rIy&&h.$oj$rIy.$oj$cBh();
};
a.$oj$IIy=function($){
if(this.$oj$vIy!=$){
this.$oj$vIy=$;
this.$oj$rIy&&this.$oj$rIy.$oj$cBh();
this.$oj$Ijh();
}
};
a.$oj$qIy=function($){
if(this.$oj$cIy!=$){
this.$oj$cIy=$;
(this.$oj$JFy&&this.$oj$JFy.$oj$L4()).borderRadius=$+"px";
}
};
return f;
});
}();
!function(){
"use strict";
o._registerClass({
$oj$RIy:1
},{
$oj$UAh:1
},function($,j){
function h(){
o._cls.$oj$UAh.call(this);
this.$oj$UIy=this.$oj$zIy=this.$oj$WIy=this.$oj$XIy=this.$oj$VIy=this.$oj$JIy=this.$oj$KIy=this.$oj$QIy=this.$oj$GIy=this.$oj$YIy=null;
this.$oj$ZIy=this.$oj$eqy=0;
this.$oj$tqy=!1;
this.constructor=h;
this.$oj_id=++o._id;
}
$.$oj$VCh=function(){
return"_b8d";
};
j.$oj$KCh=function(){
var $,j=this;
h.$oj_super.prototype.$oj$KCh.call(this);
var t=o._cls.$oj$RCh.$oj$QCh("_w8d"),i=o._cls.$oj$RCh.$oj$QCh("_x8d"),y=o._g.$oj$hNh();
function s($){
var j,h=(j=new o._cls.$oj$OAh())&&j.$oj$IAh($),t=o._cls.$oj$RCh.$oj$QCh("_k8d");
y&&h&&h.$oj$RAh(!0);
t&&t.$oj$bCh(h);
return t;
}
j.$oj$JIy=o._cls.$oj$uBh.$oj$oBh(function($){
j.$oj$aBh($);
});
j.$oj$QIy=s(4);
j.$oj$WIy=s(2);
j.$oj$KIy=s(3);
for(var n=[],r=0;7>r;r++){
var e=o._cls.$oj$RCh.$oj$QCh("_j8d");
e&&e.$oj$ZFh(String(r+1));
n.push(e);
t&&t.$oj$bCh(e);
}
j.$oj$bCh(j.$oj$QIy);
j.$oj$bCh(j.$oj$WIy);
j.$oj$bCh(j.$oj$KIy);
t&&t.$oj$fBh(j.$oj$JIy);
t&&t.$oj$bCh(i);
j.$oj$bCh(t);
j.$oj$GIy=($=new o._cls.$oj$iOh())&&$.$oj$rOh(t&&t.$oj$NCh(),2,j);
j.$oj$VIy=n;
j.$oj$UIy=t;
j.$oj$XIy=i;
j.$oj$XIy&&j.$oj$XIy.$oj$bOh("slider","role");
j.$oj$nqy();
};
j.$oj$jjh=function(){
var $;
h.$oj_super.prototype.$oj$jjh.call(this);
var j=this.$oj$hBh(),t=Math.floor((j.width-16)/16),i=Math.floor(j.height/4);
this.$oj$YIy=o._g.$oj$l(t,i);
var y=o._g.$oj$m(0,0,16*t,4*i);
o._g.$oj$U(y,j);
this.$oj$UIy&&this.$oj$UIy.$oj$aLh(y);
for(var s=0;7>s;s++){
var n=this.$oj$rqy(s+1,.5);
($=this.$oj$VIy[s])&&$.$oj$aLh(o._g.$oj$m(n.x-i,n.y-i,2*i,2*i));
}
var r=o._g.$oj$m(0,y.y+(i-8),8,16);
o._g.$oj$vt(r,j);
this.$oj$QIy&&this.$oj$QIy.$oj$aLh(r);
var e=o._g.$oj$m(0,y.y+(3*i-8),8,16);
o._g.$oj$vt(e,j);
this.$oj$WIy&&this.$oj$WIy.$oj$aLh(e);
var c=o._g.$oj$m(0,y.y+(2*i-8),8,16);
this.$oj$KIy&&this.$oj$KIy.$oj$aLh(c);
var u=this.$oj$ZIy,a=this.$oj$eqy;
0==this.$oj$ZIy&&(a=.5);
var f=this.$oj$rqy(u,a);
this.$oj$XIy&&this.$oj$XIy.$oj$aLh(o._g.$oj$m(f.x-16,f.y-16,32,32));
};
j.$oj$rqy=function($,j){
return o._g.$oj$s(this.$oj$YIy.width+$*this.$oj$YIy.width*2,this.$oj$YIy.height+j*this.$oj$YIy.height*2);
};
j.$oj$nqy=function(){
for(var $,o=.5,j=.5,h=0;7>h;h++){
var t=h+1==this.$oj$ZIy?j:o;
(($=this.$oj$VIy[h])&&$.$oj$L4()).opacity=String(t);
}
(this.$oj$KIy&&this.$oj$KIy.$oj$L4()).opacity=String(0==this.$oj$eqy&&0==this.$oj$ZIy?j:o);
(this.$oj$WIy&&this.$oj$WIy.$oj$L4()).opacity=String(1==this.$oj$eqy&&this.$oj$ZIy>=1?j:o);
(this.$oj$QIy&&this.$oj$QIy.$oj$L4()).opacity=String(0==this.$oj$eqy&&this.$oj$ZIy>=1?j:o);
};
j.$oj$pOh=function(){
h.$oj_super.prototype.$oj$pOh.call(this);
this.$oj$JIy&&this.$oj$JIy.$oj$cBh();
};
j.$oj$aBh=function($){
var j=this,h=(this.$oj$hBh(),this.$oj$YIy),t=o._g.$oj$hNh(),i=t?"#a0a0a0":"#808080",y=t?"#606060":"#cccccc",s=t?"#000000":"rgba(204, 204, 204, 0.15)";
function n($){
var o=0,h=.5;
if($>=1){
h=0;
o=$;
}else if(-1>=$){
h=1;
o=-$;
}
return j.$oj$rqy(o,h);
}
function r(h,t,i,y){
var s=j.$oj$rqy(h,i),n=j.$oj$rqy(t,i);
$&&$.$oj$pBh();
$&&$.$oj$Hjh(o._g.$oj$m(s.x,s.y-1,n.x-s.x,2));
$&&$.$oj$vBh(y);
}
function e(o,t){
var i=Math.PI,n=j.$oj$rqy(0,0),r=j.$oj$rqy(1,1),e=j.$oj$rqy(.5,.5),c=j.$oj$rqy(.25,.25),u=j.$oj$rqy(.75,.75);
$&&$.$oj$aUh(function($){
$.beginPath();
$.moveTo(n.x,e.y);
$.lineTo(e.x,e.y);
var j=Math.min(h.width,h.height)/2;
if(o){
$.arc(e.x+j,n.y+j,j,i,1.5*i,!1);
$.lineTo(u.x,n.y);
$.lineTo(r.x,n.y);
}else{
$.arc(e.x+j,r.y-j,j,i,.5*i,!0);
$.lineTo(u.x,r.y);
$.lineTo(r.x,r.y);
}
if(t)$.strokeStyle=y;else{
var a=$.createLinearGradient(n.x,e.y,n.x,o?c.y:u.y);
a.addColorStop(0,s);
a.addColorStop(.5,y);
$.strokeStyle=a;
}
$.lineWidth=2;
$.stroke();
});
}
r(1,7,1,y);
r(1,7,0,y);
if(0==j.$oj$eqy){
e(!1,!1);
e(!0,!0);
}else{
e(!0,!1);
e(!1,!0);
}
for(var c=-7;7>=c;c++){
var u=n(c);
$&&$.$oj$pBh();
$&&$.$oj$RRh(o._g.$oj$m(u.x-2,u.y-2,4,4));
$&&$.$oj$vBh(i);
}
};
j.$oj$iqy=function(){
var $=!this.$oj$U2();
this.$oj$fkh("active",!$&&this.$oj$tqy);
document.body.classList.toggle("_q8d",!$&&this.$oj$tqy);
};
j.$oj$fOh=function($){
if(!this.$oj$U2())return!1;
var j=$&&$.$oj$cOh(),h=(j.x-window.pageXOffset,j.y-window.pageYOffset,(this.$oj$UIy&&this.$oj$UIy.$oj$NCh()).getBoundingClientRect());
this.$oj$zIy=o._g.$oj$s(h.left,h.top);
this.$oj$tqy||(this.$oj$tqy=!0);
this.$oj$iqy();
return!0;
};
j.$oj$sqy=function($,o,j){
0>o&&(o=0);
o>7&&(o=7);
0>$&&($=0);
$>1&&($=1);
this.$oj$eqy!=$&&this.$oj$JIy&&this.$oj$JIy.$oj$cBh();
if(this.$oj$ZIy!=o||this.$oj$eqy!=$){
this.$oj$ZIy=o;
this.$oj$eqy=$;
this.$oj$nqy();
this.$oj$Ijh();
j&&this.$oj$SOh();
}
};
j.$oj$dOh=function($){
var o=$&&$.$oj$cOh(),j=o.x-window.pageXOffset,h=o.y-window.pageYOffset,t=Math.floor((j-this.$oj$zIy.x)/(2*this.$oj$YIy.width)),i=Math.floor((h-this.$oj$zIy.y)/(2*this.$oj$YIy.height));
0==t&&(i=this.$oj$eqy);
this.$oj$sqy(i,t,!0);
};
j.$oj$vOh=function(){
if(this.$oj$tqy){
this.$oj$tqy=!1;
this.$oj$iqy();
}
};
j.$oj$oqy=function($){
var j=$.keyCode,h=this.$oj$eqy,t=this.$oj$ZIy;
if(o._cls.$oj$EOh.$oj$WMh($.keyCode)){
var i=o._cls.$oj$EOh.$oj$wOh($.keyCode);
if("Left"==i)if($.shiftKey)t=0;else{
t--;
0>t&&(t=0);
}else if("Right"==i)if($.shiftKey)t=7;else{
t++;
t>7&&(t=7);
}else"Up"==i?h=0:"Down"==i&&(h=1);
}else o._cls.$oj$EOh.$oj$XMh(j)&&(t=o._cls.$oj$EOh.$oj$VMh(j));
this.$oj$sqy(h,t,!0);
return!0;
};
j.$oj$mnt=function($){
var o=void 0,j=void 0;
if(0>$){
o=1;
j=Math.abs($);
}else if($>0){
o=0;
j=$;
}else{
o=this.$oj$eqy;
j=0;
}
this.$oj$sqy(o,j,!1);
};
j.$oj$E4=function(){
return 0==this.$oj$eqy?this.$oj$ZIy:this.$oj$ZIy>0?-this.$oj$ZIy:0;
};
return h;
});
}();
!function(){
"use strict";
var h="1",t="2",i="3",y="4";
o._registerClass({
$oj$uqy:1
},{
$oj$RCh:1
},function(s,n){
function r(){
o._cls.$oj$RCh.call(this);
this.$oj$aqy=this.$oj$fqy=this.$oj$lqy=this.$oj$cqy=this.$oj$hqy=this.$oj$pqy=this.$oj$dqy=this.$oj$vqy=this.$oj$mqy=this.$oj$gqy=this.$oj$yqy=this.$oj$bqy=this.$oj$wqy=this.$oj$Eqy=this.$oj$Sqy=null;
this.$oj$xqy=this.$oj$Tqy=this.$oj$Nqy=this.$oj$Cqy=0;
this.$oj$kqy=this.$oj$Lqy=!1;
this.constructor=r;
this.$oj_id=++o._id;
}
n.$oj$nCh=function($){
this.$oj$pqy=$;
};
n.$oj$rCh=function(){
return this.$oj$pqy;
};
n.$oj$bIh=function(){
return this.$oj$Cqy;
};
n.$oj$Aqy=function(){
return this.$oj$kqy;
};
n.$oj$Oqy=function(){
return this.$oj$hqy;
};
s.$oj$VCh=function(){
return"_z8d";
};
n.$oj$Mqy=function($){
var o=this;
if(o=r.$oj_super.prototype.init.call(this)){
o.$oj$Pjh(!1);
o.$oj$wqy={};
o.$oj$Cqy=$;
}
return o;
};
n.$oj$KCh=function(){
var $,j=this;
r.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$bqy=o._cls.$oj$uBh.$oj$oBh(function($){
j.$oj$Dqy($,j.$oj$wqy);
});
(j.$oj$bqy&&j.$oj$bqy.$oj$sUh()).style.zIndex=h;
j.$oj$fBh(j.$oj$bqy);
j.$oj$cqy=($=new o._cls.$oj$Pqy())&&$.init();
j.$oj$cqy&&j.$oj$cqy.$oj$jUh(j);
j.$oj$cqy&&j.$oj$cqy.$oj$OCh(j,{
$oj$Hqy:1
});
(j.$oj$cqy&&j.$oj$cqy.$oj$L4()).zIndex=y;
j.$oj$bCh(j.$oj$cqy);
};
n.$oj$jjh=function(){
r.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
if(!$)return;
this.$oj$Bqy();
if(!this.$oj$mqy)return;
this.$oj$bqy&&this.$oj$bqy.$oj$aLh(this.$oj$mqy);
this.$oj$vqy&&this.$oj$vqy.$oj$aLh(this.$oj$mqy);
this.$oj$gqy&&this.$oj$gqy.$oj$aLh(this.$oj$mqy);
this.$oj$cqy&&this.$oj$cqy.$oj$aLh(this.$oj$mqy);
};
n.$oj$jqy=function(){
var j=this;
this.$oj$gqy&&this.$oj$gqy.$oj$Lzh();
this.$oj$gqy&&this.$oj$gqy.$oj$Qkh();
var h={};
if(this.$oj$kqy&&this.$oj$Tqy){
$.each(this.$oj$Eqy,function($){
var t=$&&$.$oj$an();
if(t%12!=0)return;
var i=j.$oj$yqy[t];
if(!i){
i=o._cls.$oj$RCh.$oj$QCh("_e9d");
var y=Math.floor(t/12)-1;
i&&i.$oj$ZFh("C"+y);
}
(i&&i.$oj$L4()).fontSize=j.$oj$Tqy+"px";
j.$oj$gqy&&j.$oj$gqy.$oj$bCh(i);
var s=$&&$.$oj$C4(),n=o._g.$oj$y(s);
n.height=2*j.$oj$Tqy;
o._g.$oj$gt(n,s);
i&&i.$oj$aLh(n);
h[t]=i;
});
if(!j.$oj$gqy){
j.$oj$gqy=o._cls.$oj$RCh.$oj$QCh("_t9d");
(j.$oj$gqy&&j.$oj$gqy.$oj$L4()).zIndex=i;
}
j.$oj$bCh(j.$oj$gqy);
}
j.$oj$yqy=h;
};
n.$oj$MIy=function(){
this.$oj$bqy&&this.$oj$bqy.$oj$cBh();
this.$oj$vqy&&this.$oj$vqy.$oj$IUh();
this.$oj$vqy=null;
j.stop(this.$oj$xqy);
this.$oj$xqy=0;
};
n.$oj$Bqy=function(){
var j=this,h=this.$oj$dqy;
if(!h)return;
var t=[],i=[],y=[],s=null;
$.each(h&&h.$oj$Vtt(),function($){
var h=$&&$.$oj$Jr(),n=$&&$.$oj$C4(),r=($&&$.$oj$Vet(),$&&$.$oj$an());
if(1==h){
t.push($);
s=o._g.$oj$M(s,n);
j.$oj$Sqy=o._g.$oj$O(n);
}else if(2==h){
i.push($);
if(!o._g.$oj$v(j.$oj$fqy,n)){
j.$oj$lqy={};
j.$oj$fqy=o._g.$oj$O(n);
}
}
y.push(r);
});
j.$oj$Tqy=j.$oj$Sqy?Math.round(o._g.$oj$i(j.$oj$Sqy.width,[9,16,13,20,18,70])):0;
j.$oj$mqy=s;
j.$oj$Eqy=t;
j.$oj$aqy=i;
j.$oj$hqy=y;
j.$oj$jqy();
j.$oj$bqy&&j.$oj$bqy.$oj$cBh();
j.$oj$Ijh();
};
n.$oj$Dqy=function(j,h){
var t=this,i=(this.$oj$hBh(),this.$oj$Cqy);
function y($){
var o=$&&$.$oj$an(),j=h[o]||0;
t.$oj$Nqy==o&&t.$oj$Lqy&&0==j&&(j=1);
return j;
}
j&&j.$oj$LRh();
$.each(t.$oj$Eqy,function($){
var h=y($);
0==h&&o._cls.$oj$Iqy.$oj$Fqy(j,$&&$.$oj$C4(),h,i);
});
$.each(t.$oj$Eqy,function($){
var h=y($),s=$&&$.$oj$C4();
0!=h&&o._cls.$oj$Iqy.$oj$Fqy(j,s,h,i);
o._g.$oj$ANh();
if(60==($&&$.$oj$an())&&t.$oj$kqy){
var n=Math.floor(o._g.$oj$i(s.width,[2,20,5,70])),r=o._g.$oj$y(s);
r.width=r.height=n;
o._g.$oj$z(r,s);
o._g.$oj$gt(r,s);
o._g.$oj$ht(r,Math.round((.65*t.$oj$Tqy-n)/2));
j&&j.$oj$pBh();
j&&j.$oj$RRh(r);
j&&j.$oj$vBh(o._g.$oj$ONh(0,.5));
}
});
j&&j.$oj$ARh();
$.each(t.$oj$aqy,function($){
var h=$&&$.$oj$C4(),s=y($),n=t.$oj$lqy[s];
if(!n){
n=o._cls.$oj$Iqy.$oj$qqy(h,s,i);
t.$oj$lqy[s]=n;
}
j&&j.$oj$iUh(n,o._g.$oj$s(h.x,h.y));
});
};
n.$oj$Rqy=function(j){
var h,t=this;
if(!this.$oj$Sqy||!this.$oj$fqy)return null;
{
var i=this.$oj$Sqy.width,y=0;
this.$oj$fqy;
}
((h=o._cls.$oj$Htt.$oj$ti())&&h.$oj$Ptt()||40>i)&&(y=Math.ceil(i/2));
var s=null;
s||(s=$.find(this.$oj$aqy,function($){
var h=o._g.$oj$E($&&$.$oj$C4(),-y,0);
return o._g.$oj$x(h,j);
}));
s||(s=$.find(t.$oj$Eqy,function($){
return o._g.$oj$x($&&$.$oj$C4(),j);
}));
return s;
};
n.$oj$Uqy=function($){
var o=this.$oj$Rqy($);
if(!o)return;
var j=o&&o.$oj$an();
this.$oj$Nqy=j;
this.$oj$Lqy=!0;
this.$oj$bqy&&this.$oj$bqy.$oj$cBh();
};
n.$oj$VUh=function(){
this.$oj$Nqy=0;
this.$oj$Lqy=!1;
this.$oj$bqy&&this.$oj$bqy.$oj$cBh();
};
n.$oj$Hqy=function(){
this.$oj$Lqy&&this.$oj$pqy&&this.$oj$pqy.$oj$zqy(this,this.$oj$Nqy);
};
n.$oj$FIy=function($){
if(this.$oj$dqy!=$){
this.$oj$MIy();
this.$oj$dqy=$;
this.$oj$Bqy();
}
};
n.$oj$Wqy=function($,o){
var j=this.$oj$Xqy(o);
if(j!==$){
this.$oj$wqy[o]=$;
this.$oj$bqy&&this.$oj$bqy.$oj$cBh();
}
};
n.$oj$Xqy=function($){
return this.$oj$wqy[$]||0;
};
n.$oj$Vqy=function(o){
var j=this;
$.each(o,function($){
j.$oj$Wqy(2,$);
});
};
n.$oj$Jqy=function(){
var o=[];
$.each(this.$oj$wqy,function($,j){
(2==$||4==$)&&o.push(parseInt(j,10));
});
return o;
};
n.$oj$Kqy=function(){
return o._g.$oj$g();
};
n.$oj$Zot=function(){
this.$oj$wqy={};
this.$oj$bqy&&this.$oj$bqy.$oj$cBh();
};
n.$oj$Qqy=function(h){
var i=this;
this.$oj$MIy();
var y=$.clone(this.$oj$wqy),s=o._cls.$oj$uBh.$oj$oBh(function($){
i.$oj$Dqy($,y);
}),n=s&&s.$oj$sUh();
i.$oj$fBh(s);
n.style.zIndex=t;
i.$oj$vqy=s;
i.$oj$xqy=j.animate(1e3*h,function($){
var o=j.lerp(1,0,j.easeOut($));
j.transform(n,0,0,1,1,o);
},function(){
i.$oj$MIy();
});
i.$oj$Ijh();
};
n.$oj$Gqy=function(){
return o._g.$oj$O(this.$oj$mqy);
};
n.$oj$Yqy=function($){
if(this.$oj$kqy!=$){
this.$oj$kqy=$;
this.$oj$jqy();
}
};
return r;
});
o._registerClass({
$oj$Pqy:1
},{
$oj$YCh:1
},function($,j){
function h(){
o._cls.$oj$YCh.call(this);
this.$oj$Zqy=null;
this.constructor=h;
this.$oj_id=++o._id;
}
j.$oj$jUh=function($){
this.$oj$Zqy=$;
};
j.$oj$HUh=function(){
return this.$oj$Zqy;
};
$.$oj$VCh=function(){
return"_n9d";
};
j.$oj$hOh=function($){
this.$oj$Zqy&&this.$oj$Zqy.$oj$Uqy($);
};
j.$oj$mOh=function(){
this.$oj$Zqy&&this.$oj$Zqy.$oj$VUh();
};
return h;
});
}();
!function(){
"use strict";
var $=[[1184275,2368550,3224119,2368550,3816253,4934994],[1579033,3158066,4276809,3158066,5066321,6579821],[2359296,4718592,6422528,4718592,7602176,9830400],[143874,287492,428550,287492,500231,644106],[4718592,9437184,12845056,9437184,15204352,16711680],[18432,36864,51200,36864,60416,65280],[76,152,220,152,244,255]],j=[[10066330,15790320,16053492,14869220],[8553091,13487566,14277081,12632258],[10046797,15825273,16744576,14840178],[2067743,3202608,3402547,48897],[10027008,15794176,16711680,14811136],[39168,61696,65280,58880],[154,242,255,228],[10036775,15809597,16728128,14825785]];
o._registerClass({
$oj$Iqy:1
},null,function(h){
function t(){
this.constructor=t;
this.$oj_id=++o._id;
}
h.$oj$Fqy=function($,h,t,i){
var y=j[t];
if(!y)return;
var s=(y[0],y[1]),n=y[2],r=y[3],e=12,c=Math.round(h.width/6);
$&&$.$oj$pBh();
$&&$.$oj$VRh(h,e,o._g.$oj$l(c,c));
if(0==i){
if(0==t&&!o._g.$oj$hNh()){
s=15856114;
n=16777215;
}
$&&$.$oj$vBh(o._g.$oj$ONh(y[0],1));
var u=c-1;
0>u&&(u=0);
var a=o._g.$oj$E(h,1,1),f=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(s,1),o._g.$oj$ONh(n,1)]);
$&&$.$oj$pBh();
$&&$.$oj$VRh(a,e,o._g.$oj$l(u,u));
$&&$.$oj$YRh(f,a);
}else $&&$.$oj$vBh(o._g.$oj$ONh(r,1));
};
h.$oj$eRy=function(j,h,t){
var i=12,y=$[t];
if(!y)return null;
var s=y[0],n=y[1],r=y[2],e=y[3],c=y[4],u=y[5];
function a($,h,t,i,y){
j&&j.$oj$pBh();
j&&j.$oj$VRh($,h,t);
var s=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(i,1),o._g.$oj$ONh(y,1)]);
j&&j.$oj$YRh(s,$);
}
var f=Math.round(h.width/8),l=Math.round(h.height/8),_=h.width/4,g=o._g.$oj$l(_,_),v=(h.width/3,
_-f);
0>v&&(v=0);
a(h,i,g,c,s);
var R=o._g.$oj$E(h,f,0);
R.height-=f;
g.width-=f;
g.height-=f;
a(R,i,g,n,n);
var I=o._g.$oj$y(R);
I.y=o._g.$oj$A(R)-l;
I.height=l;
a(I,15,g,r,e);
var q=o._g.$oj$y(R);
q.height=I.y-q.y;
var d=q.width/2,U=o._g.$oj$l(d,d);
a(q,i,U,c,u);
};
h.$oj$qqy=function($,j,h){
var t=this;
return o._cls.$oj$vUh.$oj$wUh($,0,function(i){
t.$oj$eRy(i,o._g.$oj$d($),j,h);
});
};
h.$oj$tRy=function($,j,h,t,i,y){
var s=null,n=null;
if(2==h||4==h){
s=o._g.$oj$ONh(16737894,1);
n=o._g.$oj$ONh(16711680,1);
}else if(6==h){
s=o._g.$oj$ONh(3373055,1);
n=o._g.$oj$ONh(22015,1);
}else if(5==h){
s=o._g.$oj$ONh(57344,1);
n=o._g.$oj$ONh(40960,1);
}else if(3==h){
s=o._g.$oj$ONh(49152,1);
n=o._g.$oj$ONh(36864,1);
}
if(!s||!n)return;
$&&$.$oj$LRh();
y&&$&&$.$oj$nUh("black",o._g.$oj$s(0,0),1);
var r=o._cls.$oj$fUh.$oj$hUh([s,n]);
$&&$.$oj$pBh();
$&&$.$oj$RRh(j);
$&&$.$oj$YRh(r,j);
$&&$.$oj$ARh();
var e=o._g.$oj$E(j,1,1);
$&&$.$oj$pBh();
$&&$.$oj$RRh(j);
$&&$.$oj$RRh(e);
var c=o._cls.$oj$fUh.$oj$hUh([t,i]);
$&&$.$oj$ZRh(c,j,"evenodd");
};
h.$oj$nRy=function($,j,h){
this.$oj$tRy($,j,h,o._g.$oj$ONh(0,.2),o._g.$oj$ONh(0,.1),!1);
};
h.$oj$rRy=function($,j,h){
this.$oj$tRy($,j,h,o._g.$oj$ONh(16777215,.35),o._g.$oj$ONh(16777215,.5),!0);
};
h.$oj$iRy=function($){
var h=j[$];
return h?o._g.$oj$ONh(h[3],1):null;
};
h.$oj$sRy=function(j){
var h=$[j];
return h?o._g.$oj$ONh(h[4],1):null;
};
return t;
});
}();
!function(){
"use strict";
var h=1,t=2,i=3,y=4,s=5,n=6,r=7,e=8;
function c($,o){
var j,h=(j=$)&&j.$oj$sUh();
h&&(h.style.zIndex=""+o);
}
o._registerClass({
$oj$oRy:1
},{
$oj$RCh:1
},function(u,a){
function f(){
o._cls.$oj$RCh.call(this);
this.$oj$uRy=this.$oj$aRy=this.$oj$fRy=this.$oj$lRy=this.$oj$cRy=this.$oj$hRy=this.$oj$pRy=this.$oj$dRy=this.$oj$vRy=this.$oj$mRy=this.$oj$gRy=this.$oj$yRy=this.$oj$bRy=this.$oj$wRy=this.$oj$ERy=null;
this.$oj$SRy=this.$oj$xRy=this.$oj$TRy=this.$oj$NRy=this.$oj$CRy=this.$oj$kRy=this.$oj$LRy=this.$oj$ARy=0;
this.$oj$ORy=this.$oj$MRy=!1;
this.constructor=f;
this.$oj_id=++o._id;
}
a.$oj$bIh=function(){
return this.$oj$ARy;
};
a.$oj$IIy=function($){
this.$oj$ORy=$;
};
a.$oj$gIy=function(){
return this.$oj$ORy;
};
u.$oj$VCh=function(){
return"_r9d";
};
a.$oj$Mqy=function($){
var j=this;
if(j=f.$oj_super.prototype.init.call(this)){
j.$oj$Pjh(!1);
var t=o._cls.$oj$uBh.$oj$oBh(function($){
j.$oj$DRy($,!1);
});
j.$oj$ARy=$;
j.$oj$fRy={};
j.$oj$gRy=[];
c(t,i);
j.$oj$yRy=t;
if(1==$){
var y=o._cls.$oj$uBh.$oj$oBh(function($){
j.$oj$PRy($,!1);
});
c(y,h);
j.$oj$bRy=y;
}
j.$oj$MIy();
}
return j;
};
a.$oj$KCh=function(){
f.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$fBh(this.$oj$yRy);
this.$oj$fBh(this.$oj$bRy);
if(this.$oj$bRy){
this.$oj$pRy=o._cls.$oj$RCh.$oj$QCh("_i9d");
this.$oj$bCh(this.$oj$pRy);
(this.$oj$pRy&&this.$oj$pRy.$oj$L4()).zIndex=""+s;
}
};
a.$oj$jjh=function(){
var $=this;
f.$oj_super.prototype.$oj$jjh.call(this);
var j=this.$oj$hBh();
if(!j)return;
this.$oj$Bqy();
var h=this.$oj$mRy;
if(!h)return;
this.$oj$yRy&&this.$oj$yRy.$oj$aLh(h);
this.$oj$dRy&&this.$oj$dRy.$oj$aLh(h);
function t($,o){
var j=$&&$.$oj$sUh(),h=j.style;
h.webkitFilter="blur("+o+"px)";
h.filter="blur("+o+"px)";
}
if(1==$.$oj$ARy&&h){
var i=Math.round(o._g.$oj$i(j.width,[2,420,4,768,6,1536])),y=o._g.$oj$y(h);
y.height=$.$oj$LRy;
y.y=h.y-$.$oj$LRy;
$.$oj$xRy=i;
$.$oj$bRy&&$.$oj$bRy.$oj$aLh(y);
var s=o._g.$oj$y(h);
s.height=i;
s.y=h.y-s.height;
$.$oj$pRy&&$.$oj$pRy.$oj$aLh(s);
var n=Math.round(j.width/100);
if($.$oj$bRy){
t($.$oj$bRy,n);
$.$oj$bRy&&$.$oj$bRy.$oj$aLh(y);
}
if($.$oj$vRy){
t($.$oj$vRy,n);
$.$oj$vRy&&$.$oj$vRy.$oj$aLh(y);
}
}
};
a.$oj$MIy=function(){
var o=this;
this.$oj$yRy&&this.$oj$yRy.$oj$cBh();
this.$oj$bRy&&this.$oj$bRy.$oj$cBh();
this.$oj$dRy&&this.$oj$dRy.$oj$IUh();
this.$oj$vRy&&this.$oj$vRy.$oj$IUh();
$.each(this.$oj$cRy,function($){
return $&&$.$oj$IUh();
});
o.$oj$cRy=[];
j.stop(o.$oj$SRy);
o.$oj$SRy=0;
o.$oj$NRy=4;
o.$oj$TRy=-1;
};
a.$oj$Bqy=function(){
var j=this,h=this.$oj$hRy;
if(!h)return;
var t=h&&h.$oj$Vtt(),i=[],y=[],s=[],n=[],r=null,c=0,u=!1;
function a($){
var h,t,i=o._cls.$oj$RCh.$oj$QCh("_s9d"),y=(h=new o._cls.$oj$gDh())&&h.init();
y&&y.$oj$gi($&&$.$oj$Qet());
(t=o._cls.$oj$ei.$oj$ti())&&t.$oj$ni(y);
var s=i&&i.$oj$dMh();
s.appendChild(y&&y.$oj$yDh());
s.style.zIndex=""+e;
i&&i.$oj$aLh($&&$.$oj$C4());
j.$oj$bCh(i);
j.$oj$gRy.push(i);
}
$.each(j.$oj$gRy,function($){
return $&&$.$oj$Qkh();
});
$.each(t,function($){
var h=$&&$.$oj$Jr(),t=$&&$.$oj$C4(),e=$&&$.$oj$Vet();
1&e&&(u=!0);
if(1==h){
i.push($);
r=o._g.$oj$M(r,$&&$.$oj$C4());
}else if(2==h){
y.push($);
if(!o._g.$oj$v(j.$oj$lRy,t)){
j.$oj$fRy={};
j.$oj$lRy=o._g.$oj$O(t);
}
c=t.height;
}else 3==h?s.push($):4==h?n.push($):5==h?$&&$.$oj$Qet()&&a($):6==h&&$&&$.$oj$Qet()&&a($);
});
j.$oj$mRy=r;
j.$oj$LRy=c;
j.$oj$MRy=u;
j.$oj$ERy=i;
j.$oj$aRy=y;
j.$oj$wRy=s;
j.$oj$uRy=n;
j.$oj$Ijh();
j.$oj$yRy&&j.$oj$yRy.$oj$cBh();
j.$oj$bRy&&j.$oj$bRy.$oj$cBh();
};
a.$oj$HRy=function($,o){
var j=this.$oj$TRy,h=0>j||j==$;
if(h)return o?this.$oj$NRy:this.$oj$CRy;
if(j>$)return this.$oj$CRy;
if($>j)return this.$oj$kRy;
return 0;
};
a.$oj$BRy=function($,o){
return this.$oj$HRy($&&$.$oj$Ket(),o);
};
a.$oj$jRy=function($,o){
var j=(1&($&&$.$oj$Vet()))>0;
if(!j)return 0;
return this.$oj$HRy($&&$.$oj$Ket(),o);
};
a.$oj$DRy=function(j,h){
var t=this,i=this.$oj$ARy,y=this.$oj$mRy;
if(!y)return;
j&&j.$oj$MRh(-y.x,-y.y);
function s($){
return(1&($&&$.$oj$Vet()))>0;
}
function n($){
var y=$&&$.$oj$C4(),s=t.$oj$jRy($,h);
o._cls.$oj$Iqy.$oj$Fqy(j,y,s,i);
}
$.each(t.$oj$ERy,function($){
s($)||n($);
});
$.each(t.$oj$ERy,function($){
s($)&&n($);
});
$.each(t.$oj$aRy,function($){
var y=$&&$.$oj$C4(),s=t.$oj$jRy($,h),n=t.$oj$fRy[s];
if(!n){
n=o._cls.$oj$Iqy.$oj$qqy(y,s,i);
t.$oj$fRy[s]=n;
}
j&&j.$oj$iUh(n,o._g.$oj$s(y.x,y.y));
});
$.each(t.$oj$wRy,function($){
if(t.$oj$SRy&&($&&$.$oj$Ket())==t.$oj$TRy)return;
var i=t.$oj$BRy($,h);
o._cls.$oj$Iqy.$oj$nRy(j,$&&$.$oj$C4(),i);
});
$.each(t.$oj$uRy,function($){
if(t.$oj$SRy&&($&&$.$oj$Ket())==t.$oj$TRy)return;
var i=t.$oj$BRy($,h);
o._cls.$oj$Iqy.$oj$rRy(j,$&&$.$oj$C4(),i);
});
};
a.$oj$PRy=function(j,h){
var t=this,i=this.$oj$mRy;
if(!i)return;
var y=this.$oj$LRy;
j&&j.$oj$MRh(-i.x,0);
var s=o._g.$oj$m(0,0,i.width,y);
function n($){
var i=$&&$.$oj$C4(),s=t.$oj$jRy($,h);
i.y=0;
i.height=y;
var n=1==($&&$.$oj$Jr())?o._cls.$oj$Iqy.$oj$iRy(s):o._cls.$oj$Iqy.$oj$sRy(s);
j&&j.$oj$pBh();
j&&j.$oj$Hjh(i);
j&&j.$oj$vBh(n);
}
$.each(t.$oj$ERy,function($){
return n($);
});
$.each(t.$oj$aRy,function($){
return n($);
});
var r=2*t.$oj$xRy,e=o._g.$oj$y(i);
e.height=r;
e.y=y-r;
j&&j.$oj$pBh();
j&&j.$oj$Hjh(e);
j&&j.$oj$vBh(o._g.$oj$ONh(16711680,1));
var c=o._cls.$oj$fUh.$oj$hUh([o._g.$oj$ONh(0,1),o._g.$oj$ONh(2105376,.85)]);
j&&j.$oj$pBh();
j&&j.$oj$Hjh(s);
j&&j.$oj$YRh(c,s);
};
a.$oj$DIy=function($,o){
this.$oj$PIy($,o,-1);
};
a.$oj$PIy=function(h,i,s){
var e=this;
this.$oj$MIy();
function u($,j){
if(0==j)return null;
var h=$&&$.$oj$C4(),t=o._g.$oj$w(h),i=o._cls.$oj$uBh.$oj$oBh(function(h){
3==($&&$.$oj$Jr())?o._cls.$oj$Iqy.$oj$nRy(h,t,j):o._cls.$oj$Iqy.$oj$rRy(h,t,j);
});
i&&i.$oj$zUh(o._g.$oj$B(-2,-2,-2,-2));
i&&i.$oj$aLh($&&$.$oj$C4());
return i;
}
if(1==h){
e.$oj$NRy=5;
e.$oj$CRy=0;
e.$oj$kRy=4;
}else if(3==h){
e.$oj$NRy=6;
e.$oj$CRy=4;
e.$oj$kRy=4;
}else{
if(2!=h)return;
e.$oj$NRy=5;
e.$oj$CRy=3;
e.$oj$kRy=3;
}
e.$oj$TRy=s;
var a=null,f=null;
if(e.$oj$MRy){
if(e.$oj$yRy){
var l=o._cls.$oj$uBh.$oj$oBh(function($){
e.$oj$DRy($,!0);
});
c(l,y);
a=l&&l.$oj$sUh();
e.$oj$dRy=l;
e.$oj$fBh(l);
}
if(e.$oj$bRy){
var _=o._cls.$oj$uBh.$oj$oBh(function($){
e.$oj$PRy($,!0);
});
c(_,t);
f=_&&_.$oj$sUh();
e.$oj$vRy=_;
e.$oj$fBh(_);
}
}
var g=(e.$oj$wRy||[]).concat(e.$oj$uRy||[]),v=null;
$.each(g,function($){
var j,t=e.$oj$NRy,i=e.$oj$CRy,y=!1;
if(1==h){
i=3;
y=!0;
}
if(0>s||($&&$.$oj$Ket())==s){
var a=u($,t),f=u($,i),l=(j=new o._cls.$oj$BIy())&&j.$oj$HIy(a,f,null,y);
if(a){
c(a,r);
e.$oj$cRy.push(a);
e.$oj$fBh(a);
}
if(f){
c(f,n);
e.$oj$cRy.push(f);
e.$oj$fBh(f);
}
v||(v=[]);
v.push(l);
}
});
e.$oj$SRy=j.animate(1e3*i,function(o){
var h=j.lerp(1,0,j.easeOut(o));
j.transform(a,0,0,1,1,h);
j.transform(f,0,0,1,1,h);
$.each(v,function($){
return $&&$.$oj$jIy(o);
});
},function(){
e.$oj$MIy();
});
e.$oj$Ijh();
e.$oj$yRy&&e.$oj$yRy.$oj$cBh();
e.$oj$bRy&&e.$oj$bRy.$oj$cBh();
};
a.$oj$FIy=function($){
if(this.$oj$hRy!=$){
this.$oj$MIy();
this.$oj$CRy=4;
this.$oj$hRy=$;
this.$oj$Bqy();
}
};
return f;
});
}();
!function(){
"use strict";
o._registerClass({
$oj$BIy:1
},null,function($,h){
function t(){
this.$oj$FRy=this.$oj$IRy=this.$oj$qRy=null;
this.$oj$RRy=!1;
this.constructor=t;
this.$oj_id=++o._id;
}
h.$oj$URy=function(){
return this.$oj$qRy;
};
h.$oj$zRy=function(){
return this.$oj$FRy;
};
h.$oj$WRy=function(){
return this.$oj$IRy;
};
h.$oj$XRy=function(){
return this.$oj$RRy;
};
h.$oj$HIy=function($,o,j,h){
var i=this;
if(i=t.$oj_super.prototype.init.call(this)){
i.$oj$qRy=$;
i.$oj$FRy=o;
i.$oj$IRy=j;
i.$oj$RRy=h;
}
return i;
};
h.$oj$jIy=function($){
var o=3*$,h=2*$,t=1,i=1,y=1,s=1;
if(h>1){
s=this.$oj$RRy?j.lerp(1.1,.1,j.easeIn(h-1)):j.lerp(1.1,1,j.easeInOut(h-1));
this.$oj$FRy&&(i*=j.lerp(1,0,h-1));
}else s=j.lerp(1,1.1,j.easeInOut(h));
if(this.$oj$RRy&&o>2){
var n=this.$oj$RRy?j.lerp(1,0,o-2):1;
i*=n;
y*=n;
t*=n;
}
j.transform(this.$oj$qRy&&this.$oj$qRy.$oj$sUh(),0,0,s,s,i);
j.transform(this.$oj$FRy&&this.$oj$FRy.$oj$sUh(),0,0,s,s,y);
j.transform(this.$oj$IRy,0,0,s,s,t);
};
return t;
});
}();
!function(){
"use strict";
o._registerClass({
$oj$VRy:1
},{
$oj$RCh:1
},function(j,h){
function t(){
o._cls.$oj$RCh.call(this);
this.$oj$JRy=this.$oj$KRy=this.$oj$QRy=this.$oj$GRy=this.$oj$YRy=null;
this.$oj$ZRy=!1;
this.constructor=t;
this.$oj_id=++o._id;
}
h.$oj$eUy=function($){
this.$oj$GRy=$;
};
h.$oj$tUy=function(){
return this.$oj$GRy;
};
h.$oj$nUy=function($){
this.$oj$ZRy=$;
};
h.$oj$rUy=function(){
return this.$oj$ZRy;
};
j.$oj$VCh=function(){
return"_o9d";
};
h.$oj$iUy=function($){
var o=this;
(o=t.$oj_super.prototype.init.call(this))&&(o.$oj$KRy=$);
return o;
};
h.$oj$KCh=function(){
var $;
t.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$QRy=($=new o._cls.$oj$iOh())&&$.$oj$rOh(this.$oj$NCh(),2,this);
};
h.$oj$sUy=function(){
var j=this;
if(this.$oj$YRy)return this.$oj$YRy;
var h=1/0,t=1/0,i=-1/0,y=-1/0;
$.each(this.$oj$GRy,function($){
var j=$&&$.$oj$C4(),s=o._g.$oj$N(j),n=o._g.$oj$A(j),r=$&&$.$oj$Get();
if(h>s){
h=s;
t=r;
}
if(n>i){
i=n;
y=r;
}
});
var s=[t,h,y,i];
j.$oj$YRy=s;
return s;
};
h.$oj$oUy=function($){
var j=$.x-window.pageXOffset,h=$.y-window.pageYOffset,t=this.$oj$NCh().getBoundingClientRect(),i=j-t.left,y=h-t.top,s=this.$oj$C4();
i+=s.x;
y+=s.y;
if(this.$oj$ZRy){
for(var n,r=1/0,e=0,c=this.$oj$JRy,u=0,a=c?c.length:0;a>u;u++){
n=c[u];
var f=n&&n.$oj$C4(),l=o._g.$oj$C(f),_=o._g.$oj$k(f),g=Math.hypot(l-i,_-y);
if(r>g){
r=g;
e=n&&n.$oj$Get();
}
}
return e;
}
for(var v,R=o._g.$oj$s(i,y),I=this.$oj$JRy,q=0,d=I?I.length:0;d>q;q++){
v=I[q];
if(o._g.$oj$x(v&&v.$oj$C4(),R))return v&&v.$oj$Get();
}
return o._g.$oj$i(y,this.$oj$sUy());
};
h.$oj$fOh=function($){
var o=this.$oj$KRy&&this.$oj$KRy.$oj$rCh();
if(o&&o.respondsToSelector_({
$oj$uUy:1
})){
var j=this.$oj$oUy($&&$.$oj$cOh());
o&&o.$oj$uUy(this.$oj$KRy,j);
}
return!0;
};
h.$oj$dOh=function($){
var o=this.$oj$KRy&&this.$oj$KRy.$oj$rCh();
if($&&$.$oj$uOh()){
if(o&&o.respondsToSelector_({
$oj$aUy:1
})){
var j=this.$oj$oUy($&&$.$oj$cOh());
o&&o.$oj$aUy(this.$oj$KRy,j);
}
}else o&&o.respondsToSelector_({
$oj$fUy:1
})&&o&&o.$oj$fUy(this.$oj$KRy);
};
h.$oj$lUy=function($,o){
if(this.$oj$GRy!=$){
this.$oj$GRy=$;
this.$oj$YRy=null;
}
this.$oj$JRy!=o&&(this.$oj$JRy=o);
};
return t;
});
}();
!function(){
"use strict";
o._registerClass({
$oj$cUy:1
},{
$oj$RCh:1
},function($,h){
function t(){
o._cls.$oj$RCh.call(this);
this.$oj$hUy=this.$oj$pUy=null;
this.constructor=t;
this.$oj_id=++o._id;
}
h.$oj$Qet=function(){
return this.$oj$pUy;
};
h.$oj$dUy=function($,h,t){
var i=this.$oj$NCh();
if(this.$oj$pUy!=$){
this.$oj$hUy&&i.removeChild(this.$oj$hUy);
if($){
this.$oj$hUy=o._g.$oj$vNh($);
this.$oj$hUy.classList.add("_u9d");
this.$oj$hUy.style.position="absolute";
this.$oj$NCh().appendChild(this.$oj$hUy);
j.transform(this.$oj$hUy,"-50%","-50%");
i.appendChild(this.$oj$hUy);
}else this.$oj$hUy=null;
this.$oj$pUy=$;
}
if(this.$oj$hUy){
this.$oj$hUy.style.fontSize=h+"px";
this.$oj$hUy.style.color=t;
}
};
return t;
});
}();
!function(){
"use strict";
function $($){
if(12==$)return"M76.774,16.782c0,11.343-16.565,18.273-25.756,21.097l4.41,8.792c27.07-1.983,44.57,5.767,44.57,15.329c0,9.062-19.75,12.5-29.874,13.52l6.084,13.026c0.235,0.53,0.364,1.056,0.353,1.569C76.459,94.666,65.375,100,48.428,100c-15.386,0-24.917-5.541-24.917-9.029c0-4.012,9.197-6.429,17.22-6.42c10.561,0,15.728,3.408,15.747,5.676c-0.019,4.815-10.686,6.607-17.846,6.152c4.567,1.669,9.329,2.415,14.271,2.237c3.033-0.106,6.697-0.746,10.992-1.919c6.394-1.741,9.584-3.95,9.584-6.633c0-0.551-0.141-1.11-0.42-1.68l-5.877-12.387c-2.983,0.25-7.959,0.409-14.91,0.48C23.374,76.479,0,67.562,0,56.34c0-10.152,42.691-25.786,43.667-25.892C41.708,28.655,37.51,21.312,37.51,18c0-6.75,8.989-18,22.329-18C66.874,0,76.774,9,76.774,16.782z M48.289,38.918c-1.589,0.446-35.133,11.52-35.133,21.525c0,8.619,22.03,14.438,41.43,14.438c3.548-0.053,7.327-0.346,11.337-0.879l-11.337-21.42C40,53.25,32.938,58.625,32.749,62.414c-0.041,5.753,20.043,9.087,23.936,9.27v0.56c-4.338-0.159-29.893-3.326-30.094-12.785c-0.174-8.206,16.597-11.708,25.682-12.546L48.289,38.918z M61.308,6.873c-8.809,0-23.308,11.002-14.699,22.694c0,0,24.074-7.254,24.074-15.503C70.683,13.461,70.437,6.812,61.308,6.873z M69.076,73.361c6.388-0.586,21.423-3.611,21.36-10.111C90.387,58.025,78.528,51.229,58,52.375L69.076,73.361z";
if(13==$)return"M36.247,22.615c6.936,0,10.026,3.624,10.026,10.551c0,4.822-6.294,9.822-20.052,9.822c-8.138,0-20.564-2.998-20.564-12.916C5.656,10.084,26.227,0,48.757,0C87.775,0,100,21.432,100,34.499c0,25.519-54.299,49.677-71.894,56.873c-15.539,6.306-24.65,9.155-27.335,8.548L0,97.556c9.654-2.385,73.349-19.515,73.349-66.937c0-12.257-9.738-25.828-29.904-25.828c-14.814,0-22.536,6.629-22.536,10.732C20.909,22.234,31.033,22.615,36.247,22.615z";
if(14==$)return"M0,100c7.625-4.375,11.587-7.851,16.261-13.257c6.301-7.364,10.244-15.561,11.814-24.587c1.246,6.933,3.22,11.851,5.917,14.732c3.674,4.055,9.683,5.954,18.029,5.714c8.606-0.248,14.872-4.789,18.819-13.632c3.148-7.062,4.557-15.865,4.232-26.433C74.223,16.944,66.34,4.141,51.432,4.141c-7.098,0-19.606,4.275-19.606,8.749c0,0.982,1.008,1.198,3.049,1.198C47.084,14.087,50,20.833,50,26.583c0,6.583-7.917,10.983-15.126,10.983c-6.457,0-15.96-4.066-15.96-13.256C18.915,16.498,29.334,0,55.272,0C77.584,0,100,15.333,100,44.661c0,35.755-43.583,53.088-67.194,42.082C29.833,94.833,20.39,100,20.39,100";
if(30==$)return"M0.003,49.989c0.15-16.652,5.436-29.486,15.856-38.502C24.726,3.85,35.758,0,48.957,0c13.108,0,24.452,4.011,34.021,12.032c11.032,9.273,16.699,21.915,17.01,37.957c0.311,17.166-5.175,30.224-16.438,39.24c-9.488,7.54-21.021,11.102-34.592,10.749c-12.888-0.385-23.92-4.46-33.098-12.225C5.128,78.48-0.147,65.903,0.003,49.989z M45.597,6.128c-1.775,0-3.55,0.353-5.326,1.091c-7.793,3.112-11.685,13.412-11.685,30.93c0,7.026,0.652,14.31,1.966,21.85c1.695,9.626,4.594,17.583,8.676,23.872c4.403,6.898,9.297,10.363,14.703,10.363c1.926,0,3.852-0.514,5.787-1.476c8.636-4.203,12.958-15.434,12.958-33.689c0-12.963-2.427-24.738-7.291-35.358C59.979,11.968,53.39,6.128,45.597,6.128z";
if(31==$)return"M20.002,20.001c-22.091,22.09-26.567,53.431-10,69.997C26.569,106.565,57.909,102.088,80,79.997c22.09-22.09,26.564-53.427,9.998-69.994C73.431-6.564,42.092-2.089,20.002,20.001z M65.715,65.714c-19.726,19.724-42.75,28.677-51.427,19.998c-8.679-8.678,0.274-31.701,19.999-51.426C54.01,14.563,77.032,5.609,85.712,14.289C94.39,22.966,85.437,45.99,65.715,65.714z";
if(32==$)return"M20.002,20.001c-22.091,22.09-26.567,53.431-10,69.997C26.569,106.565,57.909,102.088,80,79.997c22.09-22.09,26.564-53.427,9.998-69.994C73.431-6.564,42.092-2.089,20.002,20.001z";
if(23==$)return"M0,100c0.865-0.389,7.141-4.329,18.83-11.824C29.797,81.168,100,56.25,100,25.548C100,9,84.334,0,64.719,0C41.751,0,19.044,9.024,0,17v11C12.839,20.8,29,9.489,46.104,9.489c13.312,0,22.079,8.677,22.079,16.351C68.184,50.75,4.875,90.046,0,90.046";
return"";
}
var j={};
o._registerClass({
$oj$vUy:1
},null,function(h){
function t(){
this.constructor=t;
this.$oj_id=++o._id;
}
function i($,j,h){
var t,i=h/((t=o._cls.$oj$B4)&&t.$oj$V4($)).heightInUnits*.1;
1>i&&(i=1);
return o._g.$oj$t(i,j);
}
function y($){
for(var o=$.split(/(?=[a-z])/i),j=0,h=0,t=[],i=0,y=o.length;y>i;i++){
var s=o[i],n=s.match(/[a-z]/i);
if(!n)return[];
var r=s.match(/[+\-]?\d+(\.\d+(e\d+(\.\d+)?)?)?/gi),e=[];
if(r)for(var c=0,u=r.length;u>c;c++)e[c]=parseFloat(r[c])/100;
switch(n[0]){
case"M":
j=e[0];
h=e[1];
t.push(1,j,h);
break;

case"m":
j+=e[0];
h+=e[1];
t.push(1,j,h);
break;

case"L":
j=e[0];
h=e[1];
t.push(2,j,h);
break;

case"l":
j+=e[0];
h+=e[1];
t.push(2,j,h);
break;

case"H":
j=e[0];
t.push(2,j,h);
break;

case"h":
j+=e[0];
t.push(2,j,h);
break;

case"V":
h=e[0];
t.push(2,j,h);
break;

case"v":
h+=e[0];
t.push(2,j,h);
break;

case"C":
j=e[4];
h=e[5];
t.push(3,e[0],e[1],e[2],e[3],j,h);
break;

case"c":
t.push(3,e[0]+j,e[1]+h,e[2]+j,e[3]+h,e[4]+j,e[5]+h);
j+=e[4];
h+=e[5];
break;

case"Q":
j=e[2];
h=e[3];
t.push(4,e[0],e[1],e[2],e[3]);
break;

case"q":
t.push(4,e[0]+j,e[1]+h,e[2]+j,e[3]+h);
j+=e[2];
h+=e[3];
break;

case"Z":
case"z":
t.push(5);
}
}
return t;
}
function s(o,h,t,i){
o.save();
o.translate(t.x,t.y);
o.scale(t.width,t.height);
var s=void 0,n=void 0,r=void 0,e=void 0,c=void 0,u=void 0,a=void 0,f=j[i];
if(!f){
f=y($(i));
j[i]=f;
}
for(var l=0,_=f.length;_>l;){
s=f[l++];
if(1==s){
n=f[l++];
r=f[l++];
o.moveTo(n,r);
}else if(2==s){
n=f[l++];
r=f[l++];
o.lineTo(n,r);
}else if(3==s){
n=f[l++];
r=f[l++];
e=f[l++];
c=f[l++];
u=f[l++];
a=f[l++];
o.bezierCurveTo(n,r,e,c,u,a);
}else if(4==s){
n=f[l++];
r=f[l++];
e=f[l++];
c=f[l++];
o.quadraticCurveTo(n,r,e,c);
}else 5==s&&o.closePath();
}
o.restore();
}
function n($,o,j){
$.rect(j.x,j.y,j.width,j.height);
}
function r($,o,j){
var h=4*((Math.sqrt(2)-1)/3),t=j.width/2,i=j.height/2,y=h*t,s=h*i,n=j.x+t,r=j.y+i;
$.moveTo(n,r-i);
$.bezierCurveTo(n+y,r-i,n+t,r-s,n+t,r);
$.bezierCurveTo(n+t,r+s,n+y,r+i,n,r+i);
$.bezierCurveTo(n-y,r+i,n-t,r+s,n-t,r);
$.bezierCurveTo(n-t,r-s,n-y,r-i,n,r-i);
}
function e($,o,j,h){
var t=j.x,i=j.y,y=j.width,s=j.height;
$.beginPath();
$.moveTo(t+h,i);
$.lineTo(t+y-h,i);
$.quadraticCurveTo(t+y,i,t+y,i+h);
$.lineTo(t+y,i+s-h);
$.quadraticCurveTo(t+y,i+s,t+y-h,i+s);
$.lineTo(t+h,i+s);
$.quadraticCurveTo(t,i+s,t,i+s-h);
$.lineTo(t,i+h);
$.quadraticCurveTo(t,i,t+h,i);
$.closePath();
}
function c($,o,j){
var h=j.x,t=j.y,i=j.width,y=j.height-1,s=t+Math.round(y/4),n=t+Math.round(y/2),r=t+Math.round(y/(4/3)),e=t+Math.round(y);
$.rect(h,t,i,1);
$.rect(h,s,i,1);
$.rect(h,n,i,1);
$.rect(h,r,i,1);
$.rect(h,e,i,1);
}
function u($,j,h){
var t,i=(t=o._cls.$oj$B4)&&t.$oj$V4(13),y=h.height/i.heightInUnits,n=Math.ceil(.77*h.width),e=Math.floor(.5*y);
s($,j,o._g.$oj$m(h.x,h.y,n,h.height),13);
e%2===0&&e--;
y=Math.round(y);
h.x+=h.width-e;
h.y+=(y-1-e)/2+1;
r($,j,o._g.$oj$m(h.x,h.y,e,e));
r($,j,o._g.$oj$m(h.x,h.y+y,e,e));
}
function a($,j,h){
var t=Math.round(.14*h.width),i=Math.round(.2*h.width);
2>t&&(t=2);
t+1>i&&(i=t+1);
var y=i+i-t,r=o._g.$oj$y(h);
r.width=t;
n($,j,r);
var e=o._g.$oj$y(h);
e.x+=i;
e.width=y-i;
n($,j,e);
y-=1;
h.width-=y;
h.x+=y;
var c=o._g.$oj$y(h);
c.height*=.5;
s($,j,c,14);
var u=o._g.$oj$y(h);
u.y+=u.height;
u.height*=-.5;
s($,j,u,14);
}
function f($,j,h){
var t=i(23,j,h.height),y=.52822*h.height,n=o._g.$oj$y(h);
n.y+=y;
n.height-=y;
s($,j,n,23);
var r=h.y+h.height;
$.moveTo(h.x,h.y);
$.lineTo(h.x,r-.05*y);
$.lineTo(h.x+t,r-.1*y);
$.lineTo(h.x+t,h.y);
}
function l($,j,h){
var t=Math.floor(.53*h.width);
2*t<h.width&&(t+=1);
var i=o._g.$oj$y(h);
i.width=t;
f($,j,i);
var y=o._g.$oj$y(h);
y.x+=h.width-t;
y.width=t;
f($,j,y);
}
function _($,o,j){
var h=j.height,t=i(24,o,h),y=.73*h,s=.665*h,n=.555*h,r=.61*h,e=function(){
$.moveTo(0,0);
$.lineTo(0,y);
$.lineTo(j.width,s);
$.lineTo(j.width,n);
$.lineTo(t,r);
$.lineTo(t,0);
};
$.save();
$.translate(j.x,j.y);
e();
$.translate(j.width,j.height);
$.scale(-1,-1);
e();
$.restore();
}
function g($,j,h){
var t=i(25,j,h.height),y=Math.round(.05555*h.height),s=.13889*h.height,n=o._g.$oj$t(.2*h.width,j),r=(h.height-2*s)/3,e=n+t,c=r+y,u=r-y,a=function(){
$.moveTo(n,y);
$.lineTo(n,h.height);
$.lineTo(e,h.height);
$.lineTo(e,y);
$.moveTo(0,c);
$.lineTo(0,c+s);
$.lineTo(h.width,u+s);
$.lineTo(h.width,u);
};
$.save();
$.translate(h.x,h.y);
a();
$.translate(h.width,h.height);
$.scale(-1,-1);
a();
$.restore();
}
function v($,o,j){
var h=Math.round(.33519*j.width),t=Math.round(.33519*j.height),i=j.width/2,y=j.height/2,s=Math.round(.1*j.width),n=Math.round(.1*j.height),r=function(){
$.moveTo(0,0);
$.lineTo(h,0);
$.quadraticCurveTo(h,t,i,y-n);
$.lineTo(i,y);
$.lineTo(i-s,y);
$.quadraticCurveTo(h,t,0,t);
};
$.save();
$.translate(j.x,j.y);
r();
$.translate(0,j.height);
$.scale(1,-1);
r();
$.translate(j.width,0);
$.scale(-1,1);
r();
$.translate(0,j.height);
$.scale(1,-1);
r();
$.restore();
}
function R($,j,h){
var t,i,y,s=(t=o._cls.$oj$B4)&&t.$oj$V4(25),n=(i=o._cls.$oj$B4)&&i.$oj$V4(26),r=(y=o._cls.$oj$B4)&&y.$oj$V4(27),e=o._g.$oj$y(h),c=o._g.$oj$y(h);
e.width=Math.round(h.width/r.widthInUnits*s.widthInUnits*.95)-1;
e.height=Math.round(h.height/r.heightInUnits*s.heightInUnits*.9);
e.y=h.y+Math.round((h.height-e.height)/2);
c.width=Math.round(h.width/r.widthInUnits)*n.widthInUnits;
c.height=Math.round(h.height/r.heightInUnits)*n.heightInUnits;
c.x=h.x+h.width-c.width;
c.y=h.y+Math.round((h.height-c.height)/2);
v($,j,c);
g($,j,e);
}
function I($,j,h){
var t,i,y=(t=o._cls.$oj$B4)&&t.$oj$V4(26),s=(i=o._cls.$oj$B4)&&i.$oj$V4(28),n=o._g.$oj$y(h),r=o._g.$oj$y(h),e=Math.round(h.width/s.widthInUnits*y.widthInUnits*.95)-1;
n.width=e;
r.width=e;
r.x=o._g.$oj$L(h)-r.width;
v($,j,n);
v($,j,r);
}
function q($,j,h,t){
var i=h.width/t,y=1.05*i;
i=Math.floor(i-(y-i)/(t-1));
for(var s=0;t>s;s++){
var n=o._g.$oj$y(h);
n.x+=s*i;
n.width=y;
f($,j,n);
}
}
function d($,j,h){
e($,j,h,8);
$.fillStyle="rgba(0, 120, 255, 0.15)";
$.fill();
e($,j,o._g.$oj$E(h,.5,.5),8);
$.strokeStyle="rgba(0, 120, 255, 0.33)";
$.lineWidth=1;
$.stroke();
}
function U($,o,j){
c($,o,j);
$.strokeStyle="rgba(255, 255, 255, 0.01)";
$.stroke();
}
function C($,o,j){
var h=j.x,t=j.y,i=j.width;
$.save();
$.moveTo(h,t+.5);
$.lineTo(h+i,t+.5);
$.lineWidth=1;
$.strokeStyle="rgb(1, 1, 1)";
$.stroke();
$.fillStyle="rgb(2,2,2)";
$.fillRect(h,t,i,1);
$.restore();
$.beginPath();
$.rect(h,t,i,1);
$.fill();
}
h.$oj$mUy=function($,j,h,t){
$.save();
$.beginPath();
t=o._g.$oj$y(t);
1==h?n($,j,t):2==h?r($,j,t):3==h?c($,j,t):4==h?n($,j,t):12==h?s($,j,t,h):13==h?u($,j,t):14==h?a($,j,t):20==h?q($,j,t,4):21==h?q($,j,t,3):22==h?l($,j,t):23==h?f($,j,t):24==h?_($,j,t):25==h?g($,j,t):26==h?v($,j,t):27==h?R($,j,t):28==h?I($,j,t):30==h?s($,j,t,h):31==h?s($,j,t,h):32==h?s($,j,t,h):92==h&&n($,j,t);
80==h?d($,j,t):100==h?U($,j,t):101==h?C($,j,t):$.fill();
$.restore();
};
return t;
});
}();
!function(){
"use strict";
o._registerClass({
$oj$gUy:1
},{
$oj$RCh:1
},function(h,t){
function i(){
o._cls.$oj$RCh.call(this);
this.$oj$yUy=this.$oj$bUy=this.$oj$wUy=this.$oj$EUy=this.$oj$SUy=this.$oj$xUy=this.$oj$TUy=this.$oj$NUy=null;
this.$oj$CUy=0;
this.$oj$kUy=!1;
this.constructor=i;
this.$oj_id=++o._id;
}
t.$oj$LUy=function(){
return this.$oj$kUy;
};
t.$oj$nCh=function($){
this.$oj$bUy=$;
};
t.$oj$rCh=function(){
return this.$oj$bUy;
};
h.$oj$VCh=function(){
return"_a9d";
};
t.$oj$KCh=function(){
var $=this;
this.$oj$Pjh(!1);
this.$oj$NUy=o._cls.$oj$uBh.$oj$oBh(function(o){
$.$oj$yIy(o);
});
$.$oj$fBh($.$oj$NUy);
};
t.$oj$jjh=function(){
i.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
this.$oj$NUy&&this.$oj$NUy.$oj$aLh($);
this.$oj$Bqy();
};
t.$oj$yIy=function(o){
var j=this,h=this.$oj$wUy,t=this.$oj$SUy;
$.each(h,function(h){
var i=!0;
j.$oj$yUy&&$.includes(j.$oj$yUy,h)&&(i=!1);
if(i){
var y=h&&h.$oj$Jet();
j.$oj$AUy(h,t[y],o);
}
});
};
t.$oj$AUy=function($,j,h){
var t=$&&$.$oj$k4(),i=$&&$.$oj$C4(),y=null,s=null,n=8;
if(1==j)s=o._g.$oj$ONh(0,1);else if(2==j)s=o._g.$oj$ONh(16711680,1);else if(3==j)s=o._g.$oj$ONh(0,.25);else if(5==j){
y=o._g.$oj$ONh(8388608,1);
s=o._g.$oj$ONh(16711680,1);
n=2;
}else if(6==j){
y=o._g.$oj$ONh(65280,.5);
s=o._g.$oj$ONh(32768,1);
}else if(7==j){
y=o._g.$oj$ONh(22015,.66);
s=o._g.$oj$ONh(16576,1);
}else if(4==j){
y=o._g.$oj$ONh(22015,.25);
s=o._g.$oj$ONh(22015,1);
n=4;
}
h&&h.$oj$aUh(function($){
if(y){
$.shadowColor=y;
$.shadowBlur=n;
}
if(s){
$.fillStyle=s;
o._cls.$oj$vUy.$oj$mUy($,o._g.$oj$ANh(),t,i);
4==t&&3!=j&&o._cls.$oj$vUy.$oj$mUy($,o._g.$oj$ANh(),101,i);
}
});
};
t.$oj$OUy=function(){};
t.$oj$Bqy=function(){
var j,h=this,t=this.$oj$EUy;
if(!t)return;
var i=t&&t.$oj$Vtt(),y=[],s=[],n=null;
$.each(i,function($){
var o=$&&$.$oj$k4();
82==o?y.push($):81==o?n=$:30==o&&s.push($);
});
h.$oj$wUy=i;
var r=!!n;
if(r&&!h.$oj$xUy){
h.$oj$xUy=(j=new o._cls.$oj$VRy())&&j.$oj$iUy(h);
h.$oj$bCh(h.$oj$xUy);
}else if(!r&&h.$oj$xUy){
h.$oj$xUy&&h.$oj$xUy.$oj$Qkh();
h.$oj$xUy=null;
}
if(r){
h.$oj$xUy&&h.$oj$xUy.$oj$lUy(y,s);
h.$oj$xUy&&h.$oj$xUy.$oj$nUy((n&&n.$oj$Get())>0);
h.$oj$xUy&&h.$oj$xUy.$oj$aLh(n&&n.$oj$C4());
}
h.$oj$MUy();
h.$oj$nqy();
h.$oj$NUy&&h.$oj$NUy.$oj$cBh();
};
t.$oj$MUy=function(){
var o=this,j=this.$oj$wUy,h={};
$.each(j,function($){
var o=$&&$.$oj$L4(),j=1;
1==o?j=2:3==o?j=4:2==o&&(j=3);
if(j){
var t=$&&$.$oj$Jet();
h[t]=j;
}
});
o.$oj$SUy=h;
};
t.$oj$nqy=function(){
var j=this,h=(this.$oj$wUy,this.$oj$TUy||{}),t={};
$.each(this.$oj$wUy,function($){
var i,y=$&&$.$oj$k4(),s=91==y;
if(90!=y&&!s)return;
var n=$&&$.$oj$Jet(),r=h[n];
if(r)h[n]=null;else{
r=(i=new o._cls.$oj$cUy())&&i.init();
j.$oj$bCh(r);
}
r&&r.$oj$dUy($&&$.$oj$Qet(),$&&$.$oj$Get(),s?"#0070FF":"#000");
r&&r.$oj$aLh($&&$.$oj$C4());
t[n]=r;
});
$.each(h,function($){
$&&$.$oj$Qkh();
});
j.$oj$TUy=t;
};
t.$oj$DUy=function(h,t,i){
var y=this;
this.$oj$CUy&&j.stop(this.$oj$CUy);
this.$oj$CUy=0;
var s=0;
1==h?s=5:2==h?s=6:3==h&&(s=7);
var n=[],r=[],e=[],c=this.$oj$SUy,u=[];
$.each(this.$oj$wUy,function($){
(2&($&&$.$oj$Vet()))>0&&(0>i||($&&$.$oj$Ket())==i)&&u.push($);
});
$.each(u,function($){
var j=$&&$.$oj$C4(),h=$&&$.$oj$Jet(),t=c[h],i=o._cls.$oj$uBh.$oj$oBh(function(o){
o&&o.$oj$MRh(-j.x,-j.y);
y.$oj$AUy($,t,o);
}),u=o._cls.$oj$uBh.$oj$oBh(function(o){
o&&o.$oj$MRh(-j.x,-j.y);
y.$oj$AUy($,s,o);
});
u&&u.$oj$zUh(o._g.$oj$B(-8,-8,-8,-8));
i&&i.$oj$aLh(j);
u&&u.$oj$aLh(j);
y.$oj$fBh(i);
y.$oj$fBh(u);
n.push(i,u);
r.push(i&&i.$oj$sUh());
e.push(u&&u.$oj$sUh());
});
y.$oj$CUy=j.animate(1e3*t,function(o){
o=j.easeInOut(o);
var h=1-o;
$.each(r,function($){
j.transform($,0,0,1,1,1);
});
$.each(e,function($){
j.transform($,0,0,1,1,h);
});
},function(){
y.$oj$yUy=null;
y.$oj$NUy&&y.$oj$NUy.$oj$cBh();
$.each(n,function($){
$&&$.$oj$IUh();
});
});
y.$oj$yUy=u;
y.$oj$NUy&&y.$oj$NUy.$oj$cBh();
};
t.$oj$PIy=function($,o,j){
this.$oj$DUy($,o,j);
};
t.$oj$DIy=function($,o){
this.$oj$DUy($,o,-1);
};
t.$oj$FIy=function($){
if(this.$oj$EUy!=$){
j.stop(this.$oj$CUy);
this.$oj$CUy=0;
this.$oj$EUy=$;
this.$oj$Bqy();
}
};
t.$oj$IIy=function($){
if(this.$oj$kUy!=$){
this.$oj$kUy=$;
j.stop(this.$oj$CUy);
this.$oj$CUy=0;
this.$oj$NUy&&this.$oj$NUy.$oj$cBh();
}
};
t.$oj$O8T=function(){
return!!this.$oj$xUy;
};
return i;
});
}();
}).call(this);