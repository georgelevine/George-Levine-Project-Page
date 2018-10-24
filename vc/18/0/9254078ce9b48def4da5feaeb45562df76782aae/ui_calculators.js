/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var $=_musictheory_net_("_"),o=(_musictheory_net_("namespace"),_musictheory_net_("require")),j=(_musictheory_net_("oj"),
_musictheory_net_("$oj_oj")),t=_musictheory_net_("$");
!function(){
"use strict";
var $=o("common");
$.addReadyHandler(function(o){
var t,h,i,F,s,n,r,e,u,c,v,a,l,f,d,g,_=o.split(":"),p=null,b=null;
if("calculator"!=_[0])return;
var w=navigator.userAgent,m=/(iPad|iPhone|iPod).*Apple.*Safari/.test(w)||/(iPad|iPhone|iPod).*AppleWebKit/.test(w);
(t=(h=j._cls.$oj$Htt)&&h.$oj$ti())&&t.$oj$wxt(m);
(i=(F=j._cls.$oj$Htt)&&F.$oj$ti())&&i.$oj$Ext($.isBetaEnabled());
b=window.TenutoBridge.makeBridgedObject(o);
"calculator:accidental"==o?p=(s=j._cls.$oj$IpF)&&s["class"]():"calculator:analysis"==o?p=(n=j._cls.$oj$qpF)&&n["class"]():"calculator:chord"==o?p=(r=j._cls.$oj$RpF)&&r["class"]():"calculator:scale"==o?p=(e=j._cls.$oj$UpF)&&e["class"]():"calculator:interval"==o?p=(u=j._cls.$oj$zpF)&&u["class"]():"calculator:matrix"==o&&(p=(c=j._cls.$oj$WpF)&&c["class"]());
var y=void 0;
p&&b?y=(v=(a=p)&&a.alloc())&&v.$oj$xkW(b):p&&(y=(l=(f=p)&&f.alloc())&&l.init());
(d=(g=j._cls.$oj$lkh)&&g.$oj$Akh())&&d.$oj$Ykh(y);
});
}();
!function(){
"use strict";
var $=0,o=1,t=2;
j._registerClass({
$oj$IpF:1
},{
$oj$XpF:1
},function(h,i){
function F(){
j._cls.$oj$XpF.call(this);
this.constructor=F;
this.$oj_id=++j._id;
}
i.$oj$zft=function(){
return"Accidental Calculator";
};
i.$oj$uqh=function(){
F.$oj_super.prototype.$oj$uqh.call(this);
var j=this.$oj$VpF();
j&&j.$oj$JpF("Clef",28,o);
j&&j.$oj$JpF("Key",25,$);
j&&j.$oj$JpF("Note",21,t);
};
i.$oj$KpF=function(h){
F.$oj_super.prototype.$oj$KpF.call(this,h);
var i=this.$oj$QpF(),s=this.$oj$GpF();
i&&i.$oj$YpF();
if(j._g.$oj$FpF(h)){
s&&s.$oj$bCh(i);
i&&i.$oj$ZpF(this.$oj$edF(),o);
i&&i.$oj$ZpF(this.$oj$tdF(),$);
i&&i.$oj$ZpF(this.$oj$ndF(),t);
}else{
i&&i.$oj$Qkh();
s&&s.$oj$bCh(this.$oj$edF());
s&&s.$oj$bCh(this.$oj$tdF());
s&&s.$oj$bCh(this.$oj$ndF());
}
};
i.$oj$rdF=function($){
return j._g.$oj$jpF($)?184:3==$?165:4==$?320:212;
};
i.$oj$idF=function($,o){
if(j._g.$oj$jpF($))return j._g.$oj$B(11,0,11,0);
if(3==$)return j._g.$oj$B(11,0,0,0);
if(4==$){
var t=j._g.$oj$i(o.width,[0,512,110,768]);
return j._g.$oj$B(16,t,16,t);
}
return 6==$?j._g.$oj$B(16,16,16,16):j._g.$oj$B(44,72,44,72);
};
i.$oj$sdF=function(){
return j._g.$oj$l(980,108);
};
i.$oj$odF=function($){
var o=this.$oj$GpF(),t=this.$oj$edF(),h=this.$oj$tdF(),i=this.$oj$ndF(),s=o&&o.$oj$hBh();
F.$oj_super.prototype.$oj$odF.call(this,$);
var n=j._g.$oj$g(),r=j._g.$oj$g();
if(6==$){
var e=j._g.$oj$g(),u=j._g.$oj$g();
j._g.$oj$J(e,u,s,16);
j._g.$oj$J(n,r,e,16);
t&&t.$oj$aLh(n);
h&&h.$oj$aLh(r);
i&&i.$oj$aLh(u);
}else if(4==$){
var c=j._g.$oj$g(),v=j._g.$oj$g();
j._g.$oj$K(c,v,s,16);
j._g.$oj$J(n,r,c,16);
t&&t.$oj$aLh(n);
h&&h.$oj$aLh(r);
i&&i.$oj$aLh(v);
}else if(5==$){
var a=j._g.$oj$g(),l=j._g.$oj$g();
j._g.$oj$J(a,l,s,16);
j._g.$oj$J(n,r,a,16);
t&&t.$oj$aLh(n);
h&&h.$oj$aLh(r);
i&&i.$oj$aLh(l);
}
};
i.$oj$udF=function(){
return t;
};
i.$oj$adF=function(){
return $;
};
return F;
});
}();
!function(){
"use strict";
var $=0,o=1,t=2,h=3;
j._registerClass({
$oj$qpF:1
},{
$oj$XpF:1
},function(i,F){
function s(){
j._cls.$oj$XpF.call(this);
this.$oj$fdF=this.$oj$ldF=this.$oj$cdF=this.$oj$hdF=this.$oj$pdF=this.$oj$ddF=this.$oj$vdF=this.$oj$mdF=this.$oj$gdF=this.$oj$ydF=this.$oj$bdF=this.$oj$wdF=null;
this.$oj$EdF=this.$oj$SdF=this.$oj$xdF=0;
this.$oj$TdF=!1;
this.constructor=s;
this.$oj_id=++j._id;
}
F.$oj$zft=function(){
return"Analysis Calculator";
};
F.$oj$uqh=function(){
var i,F,n,r,e,u,c,v,a;
s.$oj_super.prototype.$oj$uqh.call(this);
this.$oj$xdF=0;
this.$oj$hdF=this.$oj$NdF("ScaleType");
(i=this.$oj$hdF&&this.$oj$hdF.$oj$CdF())&&i.$oj$Dct("Major");
(F=this.$oj$hdF&&this.$oj$hdF.$oj$CdF())&&F.$oj$Gct(0);
(n=this.$oj$hdF&&this.$oj$hdF.$oj$kdF())&&n.$oj$Dct("Minor");
(r=this.$oj$hdF&&this.$oj$hdF.$oj$kdF())&&r.$oj$Gct(1);
this.$oj$wdF=this.$oj$NdF("ChordType");
(e=this.$oj$wdF&&this.$oj$wdF.$oj$CdF())&&e.$oj$Dct("Triads");
(u=this.$oj$wdF&&this.$oj$wdF.$oj$CdF())&&u.$oj$Gct(0);
(c=this.$oj$wdF&&this.$oj$wdF.$oj$kdF())&&c.$oj$Dct("7ths");
(v=this.$oj$wdF&&this.$oj$wdF.$oj$kdF())&&v.$oj$Gct(1);
this.$oj$ddF=this.$oj$LdF("MajorTriadSymbol");
this.$oj$pdF=this.$oj$LdF("MajorSeventhSymbol");
this.$oj$gdF=this.$oj$LdF("MinorTriadSymbol");
this.$oj$mdF=this.$oj$LdF("MinorSeventhSymbol");
this.$oj$ldF=this.$oj$LdF("MajorSymbol");
this.$oj$vdF=this.$oj$LdF("MinorSymbol");
this.$oj$AdF(this.$oj$ddF,"title",null);
this.$oj$AdF(this.$oj$pdF,"title",null);
this.$oj$AdF(this.$oj$gdF,"title",null);
this.$oj$AdF(this.$oj$mdF,"title",null);
this.$oj$AdF(this.$oj$ldF,"title",null);
this.$oj$AdF(this.$oj$vdF,"title",null);
this.$oj$cdF=(a=new j._cls.$oj$RCh())&&a.init();
this.$oj$cdF&&this.$oj$cdF.$oj$bCh(this.$oj$hdF);
var l=this.$oj$VpF();
l&&l.$oj$JpF("Clef",28,o);
l&&l.$oj$JpF("Key",25,$);
l&&l.$oj$JpF("Scale",29,t);
l&&l.$oj$JpF("Symbol",0,h);
};
F.$oj$KpF=function(i){
s.$oj_super.prototype.$oj$KpF.call(this,i);
var F=this.$oj$QpF(),n=this.$oj$GpF();
this.$oj$OdF(i);
if(j._g.$oj$FpF(i)){
this.$oj$MdF(2,"ChordType");
n&&n.$oj$bCh(F);
this.$oj$wdF&&this.$oj$wdF.$oj$Qkh();
F&&F.$oj$ZpF(this.$oj$edF(),o);
F&&F.$oj$ZpF(this.$oj$tdF(),$);
F&&F.$oj$ZpF(this.$oj$cdF,t);
F&&F.$oj$ZpF(this.$oj$ydF,h);
}else{
this.$oj$MdF(this.$oj$xdF,"ChordType");
F&&F.$oj$Qkh();
n&&n.$oj$bCh(this.$oj$tdF());
n&&n.$oj$bCh(this.$oj$edF());
n&&n.$oj$bCh(this.$oj$cdF);
n&&n.$oj$bCh(this.$oj$wdF);
}
};
F.$oj$DdF=function($){
var o=s.$oj_super.prototype.$oj$DdF.call(this,$);
4==o&&$.width<512&&(o=1);
return o;
};
F.$oj$rdF=function($){
return 1==$?204:2==$?184:3==$?165:4==$?450:6==$?278:336;
};
F.$oj$odF=function($){
var o,t,h,i=this.$oj$QpF(),F=this.$oj$GpF(),n=F&&F.$oj$hBh();
s.$oj_super.prototype.$oj$odF.call(this,$);
if(j._g.$oj$FpF($)){
var r=(o=this.$oj$QpF())&&o.$oj$hBh(),e=r;
e.height=64;
j._g.$oj$W(e,r);
this.$oj$hdF&&this.$oj$hdF.$oj$aLh(e);
}else{
i&&i.$oj$Qkh();
var u=j._g.$oj$m(0,0,220,0),c=j._g.$oj$g(),v=j._g.$oj$g(),a=j._g.$oj$g(),l=j._g.$oj$g(),f=j._g.$oj$g();
if(6==$){
var d=j._g.$oj$g(),g=j._g.$oj$g();
j._g.$oj$X(d,g,n,120,11);
var _=(n.height-5)/7;
a.height=Math.round(6*_);
var p=j._g.$oj$y(g);
p.height=Math.floor(_);
j._g.$oj$gt(p,g);
j._g.$oj$J(l,f,p,5);
a=j._g.$oj$y(g);
a.height=j._g.$oj$N(p)-5;
var b=Math.floor((n.height-11)/2);
u.height=v.height=b;
u.width=v.width=d.width;
j._g.$oj$gt(v,p);
}else if(4==$){
j._g.$oj$X(u,a,n,200,16);
v=j._g.$oj$y(u);
l=j._g.$oj$y(u);
f=j._g.$oj$y(u);
this.$oj$fdF&&this.$oj$fdF.$oj$aLh(a);
this.$oj$fdF&&this.$oj$fdF.$oj$bFh();
var w=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(0),m=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(1),y=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(2),C=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(3),L=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(4),B=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(5);
j._g.$oj$mt(u,w);
j._g.$oj$st(u,m);
j._g.$oj$ft(u,-2);
j._g.$oj$mt(v,y);
j._g.$oj$st(v,C);
j._g.$oj$ft(v,-2);
j._g.$oj$mt(l,L);
j._g.$oj$st(l,L);
j._g.$oj$mt(f,B);
j._g.$oj$st(f,B);
}else{
c.width=Math.round(.3*(n.width-(u.width+16+2)));
a.width=n.width-(u.width+c.width+16+2);
j._g.$oj$bt(a,u);
j._g.$oj$ct(a,16);
j._g.$oj$bt(c,a);
j._g.$oj$ct(c,2);
v=j._g.$oj$y(u);
l=j._g.$oj$y(u);
f=j._g.$oj$y(c);
a.height=n.height;
c.height=n.height;
this.$oj$fdF&&this.$oj$fdF.$oj$aLh(a);
this.$oj$bdF&&this.$oj$bdF.$oj$aLh(a);
this.$oj$fdF&&this.$oj$fdF.$oj$bFh();
this.$oj$bdF&&this.$oj$bdF.$oj$bFh();
var S=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(0),x=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(1),O=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(2),R=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(3),A=this.$oj$fdF&&this.$oj$fdF.$oj$PdF(4);
j._g.$oj$mt(u,S);
j._g.$oj$st(u,x);
j._g.$oj$ft(u,-2);
j._g.$oj$mt(v,O);
j._g.$oj$st(v,R);
j._g.$oj$mt(l,A);
j._g.$oj$st(l,A);
j._g.$oj$at(l,2);
j._g.$oj$mt(f,A);
j._g.$oj$st(f,A);
j._g.$oj$at(f,2);
j._g.$oj$ot(f,4);
}
F&&F.$oj$bCh(this.$oj$edF());
F&&F.$oj$bCh(this.$oj$tdF());
F&&F.$oj$bCh(this.$oj$cdF);
F&&F.$oj$bCh(this.$oj$wdF);
(t=this.$oj$edF())&&t.$oj$aLh(u);
(h=this.$oj$tdF())&&h.$oj$aLh(v);
this.$oj$fdF&&this.$oj$fdF.$oj$aLh(a);
this.$oj$bdF&&this.$oj$bdF.$oj$aLh(c);
this.$oj$cdF&&this.$oj$cdF.$oj$aLh(l);
this.$oj$wdF&&this.$oj$wdF.$oj$aLh(f);
this.$oj$hdF&&this.$oj$hdF.$oj$aLh(this.$oj$cdF&&this.$oj$cdF.$oj$hBh());
}
};
F.$oj$HdF=function(){
var $=this.$oj$BdF("ChordType"),o=1==this.$oj$BdF("ScaleType");
return 2==$?o?this.$oj$vdF:this.$oj$ldF:1==$?o?this.$oj$mdF:this.$oj$pdF:o?this.$oj$gdF:this.$oj$ddF;
};
F.$oj$jdF=function(){
var $=this,o=0,t=[this.$oj$FdF([]),this.$oj$FdF([]),this.$oj$FdF([]),this.$oj$FdF([])],h=1==this.$oj$BdF("ScaleType"),i=!h,F=this.$oj$HdF(),s=null,n=null;
function r(){
s=t[o++];
}
function e(){
var $;
n=($=new j._cls.$oj$IdF())&&$.init();
s&&s.$oj$qdF(n);
}
function u(){
var $;
n&&n.$oj$RdF(($=new j._cls.$oj$RCh())&&$.init());
}
function c($,o){
var j;
(j=F&&F.$oj$Sjh($))&&j.$oj$VBh(o);
}
function v($){
var o=F&&F.$oj$Sjh($);
if(!o)return;
n&&n.$oj$RdF(o);
o&&o.$oj$VBh(0);
}
if(i){
r();
e();
v(0);
v(1);
v(2);
v(3);
v(4);
v(5);
v(6);
e();
v(69);
v(70);
v(71);
v(72);
v(73);
v(74);
v(75);
e();
v(23);
v(77);
v(25);
v(80);
v(28);
v(85);
r();
e();
v(86);
v(87);
v(88);
v(89);
v(90);
e();
v(7);
v(8);
v(9);
v(10);
v(11);
e();
v(46);
v(47);
v(48);
v(49);
v(50);
r();
e();
v(96);
v(97);
v(98);
v(99);
v(100);
e();
v(12);
v(13);
v(14);
v(15);
v(16);
e();
v(17);
v(18);
v(19);
v(20);
v(21);
r();
e();
v(55);
v(57);
v(58);
v(59);
e();
v(56);
v(60);
v(61);
v(62);
e();
u();
v(106);
v(107);
u();
c(0,1);
c(6,2);
c(23,4);
c(85,8);
c(86,1);
c(90,2);
c(46,4);
c(50,8);
c(96,1);
c(100,2);
c(17,4);
c(21,8);
c(55,1);
c(59,2);
c(56,4);
c(62,8);
c(106,4);
c(107,8);
}else{
r();
e();
v(22);
v(23);
v(24);
v(25);
v(26);
v(28);
v(29);
e();
v(76);
v(77);
v(78);
v(80);
v(81);
v(83);
v(84);
e();
v(51);
v(79);
v(27);
v(82);
v(30);
v(85);
r();
e();
v(91);
v(92);
v(93);
v(94);
v(95);
e();
v(31);
v(32);
v(33);
v(34);
v(35);
e();
v(46);
v(47);
v(48);
v(49);
v(50);
r();
e();
v(101);
v(102);
v(103);
v(104);
v(105);
e();
v(36);
v(37);
v(38);
v(39);
v(40);
e();
v(41);
v(42);
v(43);
v(44);
v(45);
r();
e();
v(63);
v(64);
v(65);
e();
v(66);
v(67);
v(68);
e();
v(0);
v(108);
v(109);
c(22,1);
c(29,2);
c(76,4);
c(84,8);
c(51,5);
c(79,10);
c(27,5);
c(82,10);
c(30,5);
c(85,10);
c(91,1);
c(95,2);
c(31,4);
c(35,8);
c(46,15);
c(47,5);
c(50,10);
c(101,1);
c(105,2);
c(41,4);
c(45,8);
c(63,1);
c(65,2);
c(66,4);
c(68,8);
c(0,15);
c(108,5);
c(109,10);
}
$.$oj$ydF=$.$oj$UdF();
$.$oj$ydF&&$.$oj$ydF.$oj$zdF(t);
};
F.$oj$WdF=function(){
var $=this,o=this.$oj$BdF("ChordType"),t=0==o,h=1==this.$oj$BdF("ScaleType"),i=!h,F=-1,s=this.$oj$XdF([]),n=this.$oj$HdF(),r=null;
function e(){
var $;
r=($=new j._cls.$oj$IdF())&&$.init();
s&&s.$oj$qdF(r);
}
function u(){
var $;
r&&r.$oj$RdF(($=new j._cls.$oj$RCh())&&$.init());
}
function c($){
if($==F){
u();
return;
}
var o=n&&n.$oj$Sjh($);
if(!o)return;
r&&r.$oj$RdF(o);
o&&o.$oj$VBh(0);
}
function v($,o){
var j;
(j=n&&n.$oj$Sjh($))&&j.$oj$VBh(o);
}
if(i){
e();
c(t?0:69);
c(t?1:70);
c(t?2:71);
c(t?3:72);
c(t?4:73);
c(t?5:74);
c(t?6:75);
e();
c(t?23:77);
c(t?106:107);
c(47);
c(48);
c(57);
c(58);
c(59);
e();
c(46);
u();
c(49);
c(50);
c(60);
c(61);
c(62);
e();
c(t?86:7);
c(t?87:8);
c(t?88:9);
c(t?89:10);
c(t?90:11);
t||c(55);
e();
c(t?96:12);
c(t?97:13);
c(t?98:14);
c(t?99:15);
c(t?100:16);
t||c(56);
e();
if(!t){
c(17);
c(18);
c(19);
c(20);
c(21);
u();
}
v(0,1);
v(69,1);
v(6,2);
v(75,2);
v(96,4);
v(17,4);
v(100,8);
v(21,8);
v(56,8);
}
if(h){
e();
c(t?22:76);
c(t?23:77);
c(t?24:78);
c(t?25:80);
c(t?26:81);
c(t?27:82);
c(t?28:83);
c(t?29:84);
c(t?30:85);
e();
c(t?51:79);
c(t?108:109);
c(47);
c(48);
c(63);
c(64);
c(65);
e();
c(46);
c(t?0:F);
c(49);
c(50);
c(66);
c(67);
c(68);
e();
c(t?91:31);
c(t?92:32);
c(t?93:33);
c(t?94:34);
c(t?95:35);
e();
c(t?101:36);
c(t?102:37);
c(t?103:38);
c(t?104:39);
c(t?105:40);
e();
if(!t){
c(41);
c(42);
c(43);
c(44);
c(45);
}
v(22,1);
v(76,1);
v(30,2);
v(85,2);
v(101,4);
v(41,4);
v(105,8);
v(45,8);
}
$.$oj$fdF=s;
$.$oj$bdF=null;
};
F.$oj$VdF=function(){
var $,o=this,t=this.$oj$BdF("ChordType"),h=0==t,i=1==this.$oj$BdF("ScaleType"),F=!i,s=-1,n=this.$oj$XdF([]),r=this.$oj$HdF(),e=null;
function u(){
var $;
e=($=new j._cls.$oj$IdF())&&$.init();
n&&n.$oj$qdF(e);
}
function c(){
var $;
e&&e.$oj$RdF(($=new j._cls.$oj$RCh())&&$.init());
}
function v($){
if($==s){
c();
return;
}
var o=r&&r.$oj$Sjh($);
if(!o)return;
e&&e.$oj$RdF(o);
o&&o.$oj$VBh(0);
}
function a($,o){
var j;
(j=r&&r.$oj$Sjh($))&&j.$oj$VBh(o);
}
if(F){
u();
v(h?0:69);
v(h?1:70);
v(h?2:71);
v(h?3:72);
v(h?4:73);
v(h?5:74);
v(h?6:75);
u();
c();
v(h?23:77);
c();
v(h?80:25);
c();
v(h?28:s);
v(h?s:85);
u();
v(46);
v(47);
v(48);
v(49);
v(50);
v(h?106:107);
u();
v(57);
v(58);
v(59);
v(60);
v(61);
v(62);
u();
v(h?86:7);
v(h?87:8);
v(h?88:9);
v(h?89:10);
v(h?90:11);
h||v(55);
u();
v(h?96:12);
v(h?97:13);
v(h?98:14);
v(h?99:15);
v(h?100:16);
h||v(56);
u();
if(!h){
v(17);
v(18);
v(19);
v(20);
v(21);
c();
}
a(0,5);
a(69,5);
a(6,10);
a(75,2);
a(46,1);
a(106,2);
a(96,4);
a(100,8);
a(56,8);
a(17,4);
a(21,8);
}
if(i){
u();
v(h?22:76);
v(h?23:77);
v(h?24:78);
v(h?25:80);
v(h?26:81);
v(h?28:83);
v(h?29:84);
u();
v(h?0:s);
c();
v(h?51:79);
c();
v(h?27:82);
c();
v(h?30:85);
u();
v(46);
v(47);
v(48);
v(49);
v(50);
v(h?108:109);
u();
v(63);
v(64);
v(65);
v(66);
v(67);
v(68);
u();
v(h?91:31);
v(h?92:32);
v(h?93:33);
v(h?94:34);
v(h?95:35);
u();
v(h?101:36);
v(h?102:37);
v(h?103:38);
v(h?104:39);
v(h?105:40);
u();
if(!h){
v(41);
v(42);
v(43);
v(44);
v(45);
}
a(22,1);
a(76,5);
a(29,2);
a(84,2);
a(101,4);
a(105,8);
a(41,4);
a(45,8);
($=r&&r.$oj$Sjh(46))&&$.$oj$VBh(h?0:1);
}
o.$oj$fdF=n;
o.$oj$bdF=null;
};
F.$oj$JdF=function(){
var $=this,o=this.$oj$BdF("ChordType"),t=0==o,h=1==this.$oj$BdF("ScaleType"),i=!h,F=-1,s=this.$oj$XdF([]),n=this.$oj$XdF([]),r=this.$oj$HdF(),e=null;
function u($){
var o;
e=(o=new j._cls.$oj$IdF())&&o.init();
$&&$.$oj$qdF(e);
}
function c(){
var $;
e&&e.$oj$RdF(($=new j._cls.$oj$RCh())&&$.init());
}
function v($){
var o=r&&r.$oj$Sjh($);
if(!o)return;
e&&e.$oj$RdF(o);
o&&o.$oj$VBh(0);
}
function a($,o){
var j;
(j=r&&r.$oj$Sjh($))&&j.$oj$VBh(o);
}
if(i){
u(s);
v(t?0:69);
v(t?1:70);
v(t?2:71);
v(t?3:72);
v(t?4:73);
v(t?5:74);
v(t?6:75);
u(s);
c();
v(t?23:77);
c();
v(t?25:80);
c();
v(t?28:F);
v(t?F:85);
u(s);
v(t?86:7);
v(t?87:8);
v(t?88:9);
v(t?89:10);
v(t?90:11);
t||v(55);
u(s);
v(t?96:12);
v(t?97:13);
v(t?98:14);
v(t?99:15);
v(t?100:16);
t||v(56);
u(s);
if(!t){
v(17);
v(18);
v(19);
v(20);
v(21);
c();
}
if(t){
a(0,5);
a(86,1);
a(96,4);
}else{
a(69,5);
a(7,1);
a(17,4);
a(21,8);
}
}
if(i){
u(n);
v(46);
v(47);
v(48);
u(n);
c();
v(49);
v(50);
u(n);
v(57);
v(58);
v(59);
u(n);
v(60);
v(61);
v(62);
u(n);
a(48,2);
a(62,8);
}
if(h){
u(s);
v(t?22:76);
v(t?23:77);
v(t?24:78);
v(t?25:80);
v(t?26:81);
v(t?28:83);
v(t?29:84);
u(s);
v(t?0:F);
c();
v(t?51:79);
c();
v(t?27:82);
c();
v(t?30:85);
u(s);
v(t?91:31);
v(t?92:32);
v(t?93:33);
v(t?94:34);
v(t?95:35);
u(s);
v(t?101:36);
v(t?102:37);
v(t?103:38);
v(t?104:39);
v(t?105:40);
u(s);
if(!t){
v(41);
v(42);
v(43);
v(44);
v(45);
}
if(t){
a(22,1);
a(101,4);
}else{
a(76,5);
a(31,1);
a(41,4);
a(45,8);
}
}
if(!i){
u(n);
v(46);
v(47);
v(48);
u(n);
v(t?106:107);
v(49);
v(50);
u(n);
v(63);
v(64);
v(65);
u(n);
v(66);
v(67);
v(68);
u(n);
a(48,2);
a(68,8);
}
$.$oj$fdF=s;
$.$oj$bdF=n;
};
F.$oj$OdF=function($){
var o,t,i=this.$oj$BdF("ChordType"),F=1==this.$oj$BdF("ScaleType");
if(this.$oj$SdF!=$||this.$oj$EdF!=i||this.$oj$TdF!=F){
this.$oj$ydF&&this.$oj$ydF.$oj$Qkh();
this.$oj$ydF=null;
this.$oj$fdF&&this.$oj$fdF.$oj$Qkh();
this.$oj$fdF=null;
this.$oj$bdF&&this.$oj$bdF.$oj$Qkh();
this.$oj$bdF=null;
j._g.$oj$FpF($)?this.$oj$jdF():6==$?this.$oj$WdF():4==$?this.$oj$VdF():5==$&&this.$oj$JdF();
if(j._g.$oj$FpF($))(o=this.$oj$QpF())&&o.$oj$ZpF(this.$oj$ydF,h);else{
var s=this.$oj$GpF();
this.$oj$fdF&&s&&s.$oj$bCh(this.$oj$fdF);
this.$oj$bdF&&s&&s.$oj$bCh(this.$oj$bdF);
s&&s.$oj$bCh(this.$oj$cdF);
s&&s.$oj$bCh(this.$oj$wdF);
}
(t=this.$oj$rLh())&&t.$oj$Ijh();
this.$oj$SdF=$;
this.$oj$EdF=i;
this.$oj$TdF=F;
}
};
F.$oj$KdF=function($){
s.$oj_super.prototype.$oj$KdF.call(this,$);
var o=$["ChordType"];
2!=o&&(this.$oj$xdF=o);
this.$oj$OdF(this.$oj$QdF());
};
F.$oj$GdF=function(){
return 0;
};
F.$oj$YdF=function(){
return!0;
};
return s;
});
}();
!function(){
"use strict";
var o=0,t=1,h=2,i=3;
j._registerClass({
$oj$RpF:1
},{
$oj$XpF:1
},function(F,s){
function n(){
j._cls.$oj$XpF.call(this);
this.$oj$ZdF=this.$oj$evF=this.$oj$tvF=null;
this.$oj$nvF=0;
this.constructor=n;
this.$oj_id=++j._id;
}
s.$oj$zft=function(){
return"Chord Calculator";
};
s.$oj$uqh=function(){
var $=this;
n.$oj_super.prototype.$oj$uqh.call(this);
this.$oj$evF=this.$oj$LdF("Chord");
function j(o){
$.$oj$evF&&$.$oj$evF.$oj$Ejh(null,o);
}
j(0);
j(1);
j(3);
j(2);
j(4);
j(5);
j(6);
j(7);
j(8);
j(15);
j(16);
j(14);
j(17);
j(18);
j(19);
var F=$.$oj$VpF();
F&&F.$oj$JpF("Clef",28,t);
F&&F.$oj$JpF("Key",25,o);
F&&F.$oj$JpF("Root",21,h);
F&&F.$oj$JpF("Chord",23,i);
};
s.$oj$KpF=function(F){
var s=this;
n.$oj_super.prototype.$oj$KpF.call(this,F);
var r=this.$oj$QpF(),e=this.$oj$GpF();
this.$oj$tvF&&this.$oj$tvF.$oj$Qkh();
this.$oj$tvF=null;
this.$oj$ZdF&&this.$oj$ZdF.$oj$Qkh();
this.$oj$ZdF=null;
$.each(this.$oj$evF&&this.$oj$evF.$oj$pjh(),function($){
$&&$.$oj$VBh(0);
});
if(j._g.$oj$FpF(F)){
e&&e.$oj$bCh(r);
var u=s.$oj$FdF([[s.$oj$evF&&s.$oj$evF.$oj$Sjh(0),s.$oj$evF&&s.$oj$evF.$oj$Sjh(1)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(3),s.$oj$evF&&s.$oj$evF.$oj$Sjh(2)]]),c=s.$oj$FdF([[s.$oj$evF&&s.$oj$evF.$oj$Sjh(4),s.$oj$evF&&s.$oj$evF.$oj$Sjh(5),s.$oj$evF&&s.$oj$evF.$oj$Sjh(6)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(7),s.$oj$evF&&s.$oj$evF.$oj$Sjh(8)]]),v=s.$oj$FdF([[s.$oj$evF&&s.$oj$evF.$oj$Sjh(15),s.$oj$evF&&s.$oj$evF.$oj$Sjh(16),s.$oj$evF&&s.$oj$evF.$oj$Sjh(14)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(17),s.$oj$evF&&s.$oj$evF.$oj$Sjh(18),s.$oj$evF&&s.$oj$evF.$oj$Sjh(19)]]);
s.$oj$tvF=s.$oj$UdF();
s.$oj$tvF&&s.$oj$tvF.$oj$zdF([u,c,v]);
r&&r.$oj$ZpF(s.$oj$edF(),t);
r&&r.$oj$ZpF(s.$oj$tdF(),o);
r&&r.$oj$ZpF(s.$oj$ndF(),h);
r&&r.$oj$ZpF(s.$oj$tvF,i);
}else{
r&&r.$oj$Qkh();
s.$oj$ZdF=s.$oj$FdF([[s.$oj$evF&&s.$oj$evF.$oj$Sjh(0),s.$oj$evF&&s.$oj$evF.$oj$Sjh(1),s.$oj$evF&&s.$oj$evF.$oj$Sjh(3),s.$oj$evF&&s.$oj$evF.$oj$Sjh(2)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(4),s.$oj$evF&&s.$oj$evF.$oj$Sjh(5),s.$oj$evF&&s.$oj$evF.$oj$Sjh(6),s.$oj$evF&&s.$oj$evF.$oj$Sjh(14)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(8),s.$oj$evF&&s.$oj$evF.$oj$Sjh(7),s.$oj$evF&&s.$oj$evF.$oj$Sjh(15),s.$oj$evF&&s.$oj$evF.$oj$Sjh(16)],[s.$oj$evF&&s.$oj$evF.$oj$Sjh(17),s.$oj$evF&&s.$oj$evF.$oj$Sjh(18),s.$oj$evF&&s.$oj$evF.$oj$Sjh(19)]]);
e&&e.$oj$bCh(s.$oj$tdF());
e&&e.$oj$bCh(s.$oj$edF());
e&&e.$oj$bCh(s.$oj$ndF());
e&&e.$oj$bCh(s.$oj$ZdF);
}
};
s.$oj$rdF=function($){
return j._g.$oj$jpF($)?184:3==$?165:4==$?416:6==$?278:294;
};
s.$oj$odF=function($){
var o,t,h,i=this.$oj$GpF(),F=i&&i.$oj$hBh();
n.$oj_super.prototype.$oj$odF.call(this,$);
if(!j._g.$oj$FpF($)){
var s=16,r=j._g.$oj$m(0,0,200,0),e=j._g.$oj$y(r),u=j._g.$oj$g(),c=j._g.$oj$g();
if(6==$){
r.width=e.width=116;
s=11;
c.x=j._g.$oj$L(r)+s;
c.width=F.width-c.x;
u=j._g.$oj$y(c);
var v=(F.height-(s-2))/6;
c.height=Math.round(2*v);
var a=Math.floor((F.height-s)/2);
r.height=e.height=a;
j._g.$oj$gt(e,F);
u.y=j._g.$oj$A(c)+s;
u.height=F.height-j._g.$oj$N(u);
}else if(4==$){
c.x=j._g.$oj$L(r)+s;
c.width=F.width-c.x;
u=j._g.$oj$y(c);
e=j._g.$oj$y(r);
var l=(F.height-(s-2))/6;
c.height=Math.round(2*l);
r.height=c.height;
u.y=j._g.$oj$A(c)+s;
u.height=F.height-j._g.$oj$N(u);
e.y=u.y;
e.height=r.height;
}else{
j._g.$oj$bt(e,r);
j._g.$oj$ct(e,s);
c.width=j._g.$oj$L(e);
u.x=j._g.$oj$L(e)+s;
u.width=F.width-u.x;
u.height=F.height;
this.$oj$ZdF&&this.$oj$ZdF.$oj$aLh(u);
this.$oj$ZdF&&this.$oj$ZdF.$oj$Ijh();
this.$oj$ZdF&&this.$oj$ZdF.$oj$bFh();
var f=this.$oj$ZdF&&this.$oj$ZdF.$oj$PdF(1),d=this.$oj$ZdF&&this.$oj$ZdF.$oj$PdF(2);
e.height=j._g.$oj$A(f)-8;
r.height=e.height;
c.y=d.y;
c.height=F.height-j._g.$oj$N(c);
}
(o=this.$oj$edF())&&o.$oj$aLh(r);
(t=this.$oj$tdF())&&t.$oj$aLh(e);
(h=this.$oj$ndF())&&h.$oj$aLh(c);
this.$oj$ZdF&&this.$oj$ZdF.$oj$aLh(u);
}
this.$oj$rvF($,F);
};
s.$oj$rvF=function($,o){
var t=this,h=3;
j._g.$oj$FpF($)?h=1:6==$?h=3:o.width<700&&(h=2);
function i($,o){
var j=void 0,i=t.$oj$ivF($,"ax");
j=2==h?t.$oj$ivF($,"symbol"):o?t.$oj$ivF($,"short"):t.$oj$ivF($,"title");
if(1==h){
(17==$||18==$||19==$)&&(j=t.$oj$ivF($,"symbol"));
4==$&&(j=t.$oj$ivF($,"short"));
}
var F=t.$oj$evF&&t.$oj$evF.$oj$Sjh($);
F&&F.$oj$Eit(i);
F&&F.$oj$Dct(j);
}
if(h!=t.$oj$nvF){
i(0,!1);
i(1,!1);
i(3,!0);
i(2,!0);
i(4,!1);
i(5,!1);
i(6,!1);
i(7,!1);
i(8,!0);
i(15,!0);
i(16,!0);
i(14,!0);
i(17,!1);
i(18,!1);
i(19,!0);
t.$oj$nvF=h;
}
};
s.$oj$udF=function(){
return i;
};
s.$oj$adF=function(){
return o;
};
return n;
});
}();
!function(){
"use strict";
var o=0,t=1,h=2,i=3,F=4;
j._registerClass({
$oj$zpF:1
},{
$oj$XpF:1
},function(s,n){
function r(){
j._cls.$oj$XpF.call(this);
this.$oj$svF=this.$oj$ovF=this.$oj$uvF=this.$oj$avF=this.$oj$fvF=this.$oj$lvF=this.$oj$cvF=this.$oj$hvF=this.$oj$pvF=this.$oj$dvF=this.$oj$vvF=this.$oj$mvF=null;
this.$oj$gvF=0;
this.constructor=r;
this.$oj_id=++j._id;
}
n.$oj$zft=function(){
return"Interval Calculator";
};
n.$oj$uqh=function(){
var $,s=this;
r.$oj_super.prototype.$oj$uqh.call(this);
this.$oj$gvF=-1;
this.$oj$pvF=this.$oj$LdF("Interval");
this.$oj$lvF=this.$oj$LdF("Ascending");
function n($){
var o=s.$oj$ivF($,"title"),j=s.$oj$ivF($,"ax"),t=s.$oj$pvF&&s.$oj$pvF.$oj$Ejh(o,$);
t&&t.$oj$Eit(j);
return t;
}
s.$oj$vvF=[n(25),n(35),n(45),n(55),n(65),n(75),n(85)];
s.$oj$mvF=[n(24),n(34),null,null,n(64),n(74),null];
s.$oj$ovF=[n(26),n(36),n(46),n(56),n(66),n(76),n(86)];
s.$oj$avF=[n(23),n(33),n(44),n(54),n(63),n(73),n(84)];
s.$oj$svF=s.$oj$lvF&&s.$oj$lvF.$oj$Ejh(null,1);
s.$oj$uvF=s.$oj$lvF&&s.$oj$lvF.$oj$Ejh(null,0);
s.$oj$svF&&s.$oj$svF.$oj$rjh(26);
s.$oj$uvF&&s.$oj$uvF.$oj$rjh(27);
s.$oj$fvF=($=new j._cls.$oj$RCh())&&$.init();
s.$oj$fvF&&s.$oj$fvF.$oj$bCh(s.$oj$svF);
s.$oj$fvF&&s.$oj$fvF.$oj$bCh(s.$oj$uvF);
var e=s.$oj$VpF();
e&&e.$oj$JpF("Clef",28,t);
e&&e.$oj$JpF("Key",25,o);
e&&e.$oj$JpF("Direction",0,F);
e&&e.$oj$JpF("Note",21,h);
e&&e.$oj$JpF("Interval",22,i);
};
n.$oj$KpF=function(s){
var n,e,u,c=this;
r.$oj_super.prototype.$oj$KpF.call(this,s);
var v=this.$oj$QpF(),a=this.$oj$GpF();
this.$oj$dvF&&this.$oj$dvF.$oj$Qkh();
this.$oj$dvF=null;
this.$oj$cvF&&this.$oj$cvF.$oj$Qkh();
this.$oj$cvF=null;
this.$oj$hvF&&this.$oj$hvF.$oj$Qkh();
this.$oj$hvF=null;
$.each(this.$oj$pvF&&this.$oj$pvF.$oj$pjh(),function($){
$&&$.$oj$VBh(0);
});
if(j._g.$oj$FpF(s)){
a&&a.$oj$bCh(v);
c.$oj$cvF=c.$oj$FdF([c.$oj$vvF,c.$oj$mvF]);
c.$oj$hvF=c.$oj$FdF([c.$oj$ovF,c.$oj$avF]);
c.$oj$dvF=c.$oj$UdF();
c.$oj$dvF&&c.$oj$dvF.$oj$zdF([c.$oj$cvF,c.$oj$hvF]);
v&&v.$oj$ZpF(c.$oj$edF(),t);
v&&v.$oj$ZpF(c.$oj$tdF(),o);
v&&v.$oj$ZpF(c.$oj$fvF,F);
v&&v.$oj$ZpF(c.$oj$ndF(),h);
v&&v.$oj$ZpF(c.$oj$dvF,i);
(n=c.$oj$pvF&&c.$oj$pvF.$oj$Sjh(85))&&n.$oj$tjh(8);
}else{
v&&v.$oj$Qkh();
c.$oj$cvF=c.$oj$FdF([c.$oj$ovF,c.$oj$vvF,c.$oj$mvF,c.$oj$avF]);
a&&a.$oj$bCh(c.$oj$edF());
a&&a.$oj$bCh(c.$oj$tdF());
a&&a.$oj$bCh(c.$oj$fvF);
a&&a.$oj$bCh(c.$oj$ndF());
a&&a.$oj$bCh(c.$oj$cvF);
(e=c.$oj$pvF&&c.$oj$pvF.$oj$Sjh(85))&&e.$oj$tjh(8);
(u=c.$oj$pvF&&c.$oj$pvF.$oj$Sjh(84))&&u.$oj$tjh(2);
}
};
n.$oj$rdF=function($){
return j._g.$oj$jpF($)?184:3==$?165:4==$?416:6==$?278:294;
};
n.$oj$odF=function($){
var o,t,h,i,F=this.$oj$GpF(),s=this.$oj$ndF(),n=j._g.$oj$hNh(),e=F&&F.$oj$hBh();
r.$oj_super.prototype.$oj$odF.call(this,$);
if(j._g.$oj$FpF($)){
var u=(o=this.$oj$QpF())&&o.$oj$hBh();
this.$oj$fvF&&this.$oj$fvF.$oj$aLh(u);
var c=this.$oj$fvF&&this.$oj$fvF.$oj$hBh(),v=j._g.$oj$g(),a=j._g.$oj$g();
j._g.$oj$K(v,a,c,2);
v.width=a.width=96;
j._g.$oj$z(v,c);
j._g.$oj$z(a,c);
this.$oj$svF&&this.$oj$svF.$oj$aLh(v);
this.$oj$uvF&&this.$oj$uvF.$oj$aLh(a);
this.$oj$svF&&this.$oj$svF.$oj$VBh(3);
this.$oj$uvF&&this.$oj$uvF.$oj$VBh(12);
}else{
var l=16,f=j._g.$oj$m(0,0,200,0),d=j._g.$oj$y(f),g=j._g.$oj$g(),_=j._g.$oj$g(),p=j._g.$oj$g(),b=j._g.$oj$g(),w=j._g.$oj$g();
if(6==$){
f.width=116;
l=11;
_.x=j._g.$oj$L(f)+l;
_.width=e.width-_.x;
g.x=_.x;
g.width=_.width;
d.x=f.x;
d.width=f.width;
var m=(e.height-(l-2))/6;
_.height=Math.round(2*m);
var y=Math.floor((e.height-l)/2);
f.height=d.height=y;
j._g.$oj$gt(d,e);
g.y=j._g.$oj$A(_)+l;
g.height=e.height-j._g.$oj$N(g);
this.$oj$cvF&&this.$oj$cvF.$oj$aLh(g);
this.$oj$cvF&&this.$oj$cvF.$oj$Ijh();
this.$oj$cvF&&this.$oj$cvF.$oj$bFh();
_.width*=6/7;
_.width=Math.round(_.width);
s&&s.$oj$aLh(_);
s&&s.$oj$Ijh();
s&&s.$oj$bFh();
w.x=j._g.$oj$L(_)+11;
w.width=j._g.$oj$L(g)-w.x;
w.height=_.height;
j._g.$oj$K(p,b,w,-1);
p.x=b.x=0;
this.$oj$svF&&this.$oj$svF.$oj$VBh(3);
this.$oj$uvF&&this.$oj$uvF.$oj$VBh(12);
}else if(4==$){
_.x=j._g.$oj$L(f)+l;
_.width=e.width-_.x;
g.x=_.x;
g.width=_.width;
d.x=f.x;
d.width=f.width;
w.x=f.x;
w.width=f.width;
var C=(e.height-(l-2))/6;
_.height=Math.round(2*C);
f.height=_.height;
g.y=j._g.$oj$A(_)+l;
g.height=e.height-j._g.$oj$N(g);
d.y=g.y;
d.height=f.height;
this.$oj$cvF&&this.$oj$cvF.$oj$aLh(g);
this.$oj$cvF&&this.$oj$cvF.$oj$Ijh();
this.$oj$cvF&&this.$oj$cvF.$oj$bFh();
var L=this.$oj$cvF&&this.$oj$cvF.$oj$PdF(3);
w.y=L.y+g.y;
w.height=L.height;
var B=j._g.$oj$w(w);
j._g.$oj$J(b,p,B,n?2:-1);
this.$oj$svF&&this.$oj$svF.$oj$VBh(10);
this.$oj$uvF&&this.$oj$uvF.$oj$VBh(5);
}else{
j._g.$oj$bt(d,f);
j._g.$oj$ct(d,l);
_.width=j._g.$oj$L(d);
var S=e.width-(j._g.$oj$L(d)+l+l);
w.width=Math.round(S/8);
j._g.$oj$bt(w,d);
j._g.$oj$ct(w,l);
g.x=j._g.$oj$L(w)+l;
g.width=e.width-g.x;
g.height=e.height;
this.$oj$cvF&&this.$oj$cvF.$oj$aLh(g);
this.$oj$cvF&&this.$oj$cvF.$oj$Ijh();
this.$oj$cvF&&this.$oj$cvF.$oj$bFh();
var x=this.$oj$cvF&&this.$oj$cvF.$oj$PdF(1),O=this.$oj$cvF&&this.$oj$cvF.$oj$PdF(2);
w.y=x.y;
w.height=j._g.$oj$A(O)-j._g.$oj$N(x);
var R=j._g.$oj$w(w);
j._g.$oj$K(p,b,R,2);
d.height=j._g.$oj$A(x)-8;
f.height=d.height;
_.y=O.y;
_.height=e.height-j._g.$oj$N(_);
this.$oj$svF&&this.$oj$svF.$oj$VBh(3);
this.$oj$uvF&&this.$oj$uvF.$oj$VBh(12);
}
(t=this.$oj$edF())&&t.$oj$aLh(f);
(h=this.$oj$tdF())&&h.$oj$aLh(d);
(i=this.$oj$ndF())&&i.$oj$aLh(_);
this.$oj$cvF&&this.$oj$cvF.$oj$aLh(g);
this.$oj$fvF&&this.$oj$fvF.$oj$aLh(w);
this.$oj$svF&&this.$oj$svF.$oj$aLh(p);
this.$oj$uvF&&this.$oj$uvF.$oj$aLh(b);
}
};
n.$oj$KdF=function($){
r.$oj_super.prototype.$oj$KdF.call(this,$);
};
n.$oj$udF=function(){
return i;
};
n.$oj$adF=function(){
return o;
};
return r;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$WpF:1
},{
$oj$yvF:1
},function(o,t){
function h(){
j._cls.$oj$yvF.call(this);
this.$oj$bvF=this.$oj$wvF=this.$oj$EvF=this.$oj$SvF=this.$oj$xvF=this.$oj$TvF=this.$oj$NvF=this.$oj$CvF=this.$oj$kvF=this.$oj$LvF=this.$oj$AvF=this.$oj$OvF=this.$oj$MvF=this.$oj$DvF=this.$oj$PvF=null;
this.$oj$HvF=0;
this.constructor=h;
this.$oj_id=++j._id;
}
t.$oj$zft=function(){
return"Matrix Calculator";
};
t.$oj$hqh=function(){
h.$oj_super.prototype.$oj$hqh.call(this);
this.$oj$BvF();
};
t.$oj$uqh=function(){
var $,o,t,i,F,s,n,r=this;
h.$oj_super.prototype.$oj$uqh.call(this);
var e=[];
this.$oj$TvF=this.$oj$LdF("ToneStyle");
this.$oj$DvF=($=new j._cls.$oj$jvF())&&$.init();
this.$oj$DvF&&this.$oj$DvF.$oj$nCh(this);
this.$oj$EvF=(o=new j._cls.$oj$RCh())&&o.init();
this.$oj$NvF=(t=new j._cls.$oj$RCh())&&t.init();
function u(){
var $,o=($=new j._cls.$oj$NBh())&&$.init();
o&&o.$oj$OCh(r,{
$oj$FvF:1
});
o&&o.$oj$VBh(15);
r.$oj$NvF&&r.$oj$NvF.$oj$bCh(o);
return o;
}
function c($){
var o,t=(o=new j._cls.$oj$NBh())&&o.init();
t&&t.$oj$Gct($);
t&&t.$oj$OCh(r,{
$oj$IvF:1
});
t&&t.$oj$VBh(15);
e[$]=t;
return t;
}
var v="Use flats",a="Use sharps",l="Use pitch-class integers",f="Use pitch-class integers (t, e)";
r.$oj$OvF=(i=new j._cls.$oj$qvF())&&i.init();
r.$oj$OvF&&r.$oj$OvF.$oj$nCh(r);
var d=r.$oj$TvF&&r.$oj$TvF.$oj$bjh(null,v,0),g=r.$oj$TvF&&r.$oj$TvF.$oj$bjh(null,a,1),_=r.$oj$TvF&&r.$oj$TvF.$oj$bjh("0",l,2),p=r.$oj$TvF&&r.$oj$TvF.$oj$bjh("t",f,3);
d&&d.$oj$rjh(2);
g&&g.$oj$rjh(4);
d&&d.$oj$DOh(v);
g&&g.$oj$DOh(a);
_&&_.$oj$DOh(l);
p&&p.$oj$DOh(f);
d&&d.$oj$VBh(5);
g&&g.$oj$VBh(0);
_&&_.$oj$VBh(0);
p&&p.$oj$VBh(10);
r.$oj$PvF=j._cls.$oj$UvF.$oj$RvF([[c(1),c(3),(F=new j._cls.$oj$RCh())&&F.init(),c(6),c(8),c(10)]]);
r.$oj$wvF=j._cls.$oj$UvF.$oj$RvF([[c(0),c(2),c(4),c(5),c(7),c(9),c(11)]]);
r.$oj$PvF&&r.$oj$PvF.$oj$ROh(j._g.$oj$l(2,2));
r.$oj$wvF&&r.$oj$wvF.$oj$ROh(j._g.$oj$l(2,2));
r.$oj$MvF=e;
r.$oj$SvF=(s=new j._cls.$oj$NBh())&&s.init();
r.$oj$SvF&&r.$oj$SvF.$oj$OCh(r,{
$oj$zvF:1
});
r.$oj$SvF&&r.$oj$SvF.$oj$VBh(15);
r.$oj$SvF&&r.$oj$SvF.$oj$DOh("Press and hold to reset");
r.$oj$SvF&&r.$oj$SvF.$oj$zBh(function(){
r.$oj$NSt("reset");
});
var b=r.$oj$oDh();
b&&b.$oj$bCh(r.$oj$EvF);
r.$oj$kvF=u();
r.$oj$AvF=u();
r.$oj$CvF=u();
r.$oj$LvF=u();
var w=r.$oj$GpF();
w&&w.$oj$bCh(r.$oj$PvF);
w&&w.$oj$bCh(r.$oj$wvF);
w&&w.$oj$bCh(r.$oj$xvF);
w&&w.$oj$bCh(r.$oj$NvF);
r.$oj$EvF&&r.$oj$EvF.$oj$bCh(r.$oj$DvF);
r.$oj$bvF=(n=new j._cls.$oj$qLh())&&n.init();
r.$oj$bvF&&r.$oj$bvF.$oj$vAh(r);
r.$oj$bvF&&r.$oj$bvF.$oj$pAh(2);
r.$oj$BvF();
};
t.$oj$idF=function($){
return 1==$?j._g.$oj$B(11,0,0,0):2==$?j._g.$oj$B(4,0,0,0):3==$?j._g.$oj$B(4,0,0,0):4==$?j._g.$oj$B(16,40,16,40):6==$?j._g.$oj$B(0,22,22,22):j._g.$oj$B(16,132,16,132);
};
t.$oj$rdF=function($){
return 1==$?212:2==$?165:3==$?84:4==$?288:6==$?108:195;
};
t.$oj$KpF=function($){
var o,t,i,F,s;
h.$oj_super.prototype.$oj$KpF.call(this,$);
var n=this.$oj$TvF&&this.$oj$TvF.$oj$Sjh(0),r=this.$oj$TvF&&this.$oj$TvF.$oj$Sjh(1),e=this.$oj$TvF&&this.$oj$TvF.$oj$Sjh(2),u=this.$oj$TvF&&this.$oj$TvF.$oj$Sjh(3);
this.$oj$xvF&&this.$oj$xvF.$oj$Qkh();
this.$oj$OvF&&this.$oj$OvF.$oj$Qkh();
if(3==$){
this.$oj$xvF=j._cls.$oj$UvF.$oj$RvF([[]]);
(o=this.$oj$GpF())&&o.$oj$bCh(this.$oj$SvF);
(t=this.$oj$rLh())&&t.$oj$bCh(this.$oj$OvF);
}else if(4==$||j._g.$oj$FpF($)){
var c=(i=new j._cls.$oj$RCh())&&i.init();
this.$oj$xvF=j._cls.$oj$UvF.$oj$RvF([[n,r,e,u,c,this.$oj$SvF]]);
this.$oj$xvF&&this.$oj$xvF.$oj$ROh(j._g.$oj$l(2,2));
(F=this.$oj$xvF&&this.$oj$xvF.$oj$XvF(0))&&F.$oj$WvF(2,5);
}else{
this.$oj$xvF=j._cls.$oj$UvF.$oj$RvF([[n,r,e,u],[this.$oj$SvF]]);
this.$oj$xvF&&this.$oj$xvF.$oj$ROh(j._g.$oj$l(2,2));
}
if(6==$){
this.$oj$SvF&&this.$oj$SvF.$oj$Dct("Delete");
this.$oj$xvF&&this.$oj$xvF.$oj$ROh(j._g.$oj$l(-1,2));
}else{
this.$oj$SvF&&this.$oj$SvF.$oj$rjh(37);
this.$oj$xvF&&this.$oj$xvF.$oj$ROh(j._g.$oj$l(2,2));
}
(s=this.$oj$GpF())&&s.$oj$bCh(this.$oj$xvF);
};
t.$oj$odF=function($){
var o=this.$oj$GpF(),t=o&&o.$oj$hBh(),i=j._g.$oj$g(),F=j._g.$oj$g(),s=j._g.$oj$g(),n=!1;
h.$oj_super.prototype.$oj$odF.call(this,$);
if(j._g.$oj$jpF($)){
var r=j._g.$oj$i(t.height,[4,165,11,212]);
j._g.$oj$Q([i,F,s],t,[2,r]);
i.width=Math.round(t.width*(6/7));
j._g.$oj$z(i,t);
}else if(3==$);else if(4==$){
j._g.$oj$Q([i,F,s],t,[2,16]);
i.width=Math.round(t.width*(6/7));
j._g.$oj$z(i,t);
}else{
var e=j._g.$oj$g(),u=Math.round((t.width-16)*(2/7));
j._g.$oj$X(e,s,t,-u,16);
j._g.$oj$K(i,F,e,2);
i.width=Math.round(e.width*(6/7));
j._g.$oj$z(i,e);
}
this.$oj$NvF&&this.$oj$NvF.$oj$aLh(j._g.$oj$M(i,F));
var c=j._g.$oj$g(),v=j._g.$oj$g(),a=j._g.$oj$g(),l=j._g.$oj$g(),f=this.$oj$NvF&&this.$oj$NvF.$oj$hBh();
j._g.$oj$Q([c,v,l],f,[2,2]);
j._g.$oj$G([v,a],v,[2]);
c.height=v.height;
l.height=v.height;
j._g.$oj$W(c,f);
j._g.$oj$W(l,f);
this.$oj$kvF&&this.$oj$kvF.$oj$aLh(c);
this.$oj$CvF&&this.$oj$CvF.$oj$aLh(v);
this.$oj$AvF&&this.$oj$AvF.$oj$aLh(l);
this.$oj$LvF&&this.$oj$LvF.$oj$aLh(a);
this.$oj$PvF&&this.$oj$PvF.$oj$aLh(i);
this.$oj$wvF&&this.$oj$wvF.$oj$aLh(F);
this.$oj$xvF&&this.$oj$xvF.$oj$aLh(s);
this.$oj$xvF&&this.$oj$xvF.$oj$Eht(n);
this.$oj$OvF&&this.$oj$OvF.$oj$Eht(!n);
};
t.$oj$VvF=function($,o){
var t;
h.$oj_super.prototype.$oj$VvF.call(this,$,o);
var i=(t=this.$oj$oDh())&&t.$oj$hBh(),F=j._g.$oj$y(i);
j._g.$oj$at(F,o);
this.$oj$EvF&&this.$oj$EvF.$oj$aLh(F);
var s=!j._g.$oj$FpF($),n=j._g.$oj$hNh()?40:22,r=F.height;
s&&(r-=2*n);
r=Math.floor(r/14);
var e=F.width;
s&&(e-=2*n);
e=Math.floor(e/14);
e>54&&(e=54);
r>e&&(r=e);
var u=18;
18>r?u=12:24>e?u=13:28>e||22>r?u=14:(30>r||30>e)&&(u=16);
{
var c=j._g.$oj$l(e,r);
j._g.$oj$l(14*c.width,14*c.height);
}
this.$oj$DvF&&this.$oj$DvF.$oj$JvF(u);
this.$oj$DvF&&this.$oj$DvF.$oj$KvF(j._g.$oj$B(22,22,22,22));
this.$oj$DvF&&this.$oj$DvF.$oj$aLh(this.$oj$EvF&&this.$oj$EvF.$oj$hBh());
};
t.$oj$QvF=function(o,j){
var t=this,h=0;
$.each(this.$oj$MvF,function($){
var t=o[h],i=j[h];
t&&$&&$.$oj$Dct(t);
i&&$&&$.$oj$Eit(i);
h++;
});
t.$oj$DvF&&t.$oj$DvF.$oj$GvF(o,j);
};
t.$oj$BvF=function(){
{
var $=this,o=this.$oj$DvF&&this.$oj$DvF.$oj$YvF(),j=this.$oj$DvF&&this.$oj$DvF.$oj$ZvF();
this.$oj$QdF();
}
function t(o){
var j=$.$oj$DvF&&$.$oj$DvF.$oj$emF(o);
return j?"Play "+j:null;
}
var h=o||j;
if(h){
$.$oj$kvF&&$.$oj$kvF.$oj$Dct(t(1));
$.$oj$AvF&&$.$oj$AvF.$oj$Dct(t(2));
$.$oj$CvF&&$.$oj$CvF.$oj$Dct(t(3));
$.$oj$LvF&&$.$oj$LvF.$oj$Dct(t(4));
}
$.$oj$kvF&&$.$oj$kvF.$oj$q2(o);
$.$oj$AvF&&$.$oj$AvF.$oj$q2(o);
$.$oj$CvF&&$.$oj$CvF.$oj$q2(j);
$.$oj$LvF&&$.$oj$LvF.$oj$q2(j);
$.$oj$PvF&&$.$oj$PvF.$oj$Eht(h);
$.$oj$wvF&&$.$oj$wvF.$oj$Eht(h);
$.$oj$NvF&&$.$oj$NvF.$oj$Eht(!h);
};
t.$oj$IvF=function($){
var o=$&&$.$oj$xn();
this.$oj$NSt(String(o));
};
t.$oj$zvF=function(){
this.$oj$NSt("delete");
};
t.$oj$FvF=function(o){
var t,h=this,i=void 0;
if(o==this.$oj$kvF)i=1;else if(o==this.$oj$AvF)i=2;else if(o==this.$oj$CvF)i=3;else{
if(o!=this.$oj$LvF)return;
i=4;
}
var F=this.$oj$DvF&&this.$oj$DvF.$oj$tmF(i);
this.$oj$HvF=i;
var s=(t=new j._cls.$oj$mr())&&t.$oj$Lr(2),n=$.map(F,function($){
return 60+$;
});
s&&s.$oj$Fr(n,.75);
h.$oj$DvF&&h.$oj$DvF.$oj$pmt();
h.$oj$bvF&&h.$oj$bvF.$oj$dAh(s);
};
t.$oj$nmF=function($,o){
$==this.$oj$OvF&&this.$oj$MdF(o,"ToneStyle");
};
t.$oj$rmF=function(){
this.$oj$bvF&&this.$oj$bvF.$oj$pmt();
this.$oj$DvF&&this.$oj$DvF.$oj$pmt();
this.$oj$BvF();
};
t.$oj$fAh=function($,o,j){
this.$oj$DvF&&this.$oj$DvF.$oj$imF(this.$oj$HvF,o,j);
};
t.$oj$KdF=function($){
h.$oj_super.prototype.$oj$KdF.call(this,$);
var o=$["ToneStyle"];
this.$oj$OvF&&this.$oj$OvF.$oj$smF(o);
};
t.$oj$omF=function($,o){
h.$oj_super.prototype.$oj$omF.call(this,$,o);
if("delete"==$)this.$oj$SvF&&this.$oj$SvF.$oj$q2(o);else{
var j=parseInt($,10),t=this.$oj$MvF[j];
t&&t.$oj$q2(o);
}
};
t.$oj$umF=function($,o){
if(2404==$){
var j=o["tones"],t=o["h-labels"],i=o["v-labels"];
this.$oj$DvF&&this.$oj$DvF.$oj$amF(j,t,i);
}else if(2405==$){
var F=o["strings"];
this.$oj$QvF(F["tone-title"],F["tone-ax"]);
}else h.$oj_super.prototype.$oj$umF.call(this,$,o);
};
return h;
});
}();
!function(){
"use strict";
var o=1,t=2,h=3,i=4;
j._registerClass({
$oj$UpF:1
},{
$oj$XpF:1
},function(F,s){
function n(){
j._cls.$oj$XpF.call(this);
this.$oj$fmF=this.$oj$lmF=this.$oj$cmF=this.$oj$hmF=this.$oj$pmF=this.$oj$dmF=this.$oj$vmF=this.$oj$mmF=null;
this.constructor=n;
this.$oj_id=++j._id;
}
s.$oj$zft=function(){
return"Scale Calculator";
};
s.$oj$uqh=function(){
var $,F=this;
n.$oj_super.prototype.$oj$uqh.call(this);
this.$oj$vmF=this.$oj$LdF("Scale");
this.$oj$cmF=this.$oj$LdF("DisplayMode");
function s($){
var o=F.$oj$ivF($,"title");
return F.$oj$vmF&&F.$oj$vmF.$oj$Ejh(o,$);
}
s(0);
s(10);
s(11);
s(12);
s(20),s(21),s(22),s(23),s(24),s(25),s(26);
F.$oj$hmF=F.$oj$cmF&&F.$oj$cmF.$oj$Ejh("Key Signatures",0);
F.$oj$fmF=F.$oj$cmF&&F.$oj$cmF.$oj$Ejh("Accidentals",1);
F.$oj$hmF&&F.$oj$hmF.$oj$rjh(48);
F.$oj$fmF&&F.$oj$fmF.$oj$rjh(49);
F.$oj$lmF=($=new j._cls.$oj$RCh())&&$.init();
F.$oj$lmF&&F.$oj$lmF.$oj$bCh(F.$oj$hmF);
F.$oj$lmF&&F.$oj$lmF.$oj$bCh(F.$oj$fmF);
var r=F.$oj$VpF();
r&&r.$oj$JpF("Clef",28,o);
r&&r.$oj$JpF("Display",25,i);
r&&r.$oj$JpF("Note",21,t);
r&&r.$oj$JpF("Scale",24,h);
};
s.$oj$KpF=function(F){
var s=this;
n.$oj_super.prototype.$oj$KpF.call(this,F);
var r=this.$oj$QpF(),e=this.$oj$GpF(),u=this.$oj$vmF;
this.$oj$mmF&&this.$oj$mmF.$oj$Qkh();
this.$oj$mmF=null;
this.$oj$pmF&&this.$oj$pmF.$oj$Qkh();
this.$oj$pmF=null;
this.$oj$dmF&&this.$oj$dmF.$oj$Qkh();
this.$oj$dmF=null;
$.each(this.$oj$vmF&&this.$oj$vmF.$oj$pjh(),function($){
$&&$.$oj$VBh(0);
});
if(j._g.$oj$FpF(F)){
e&&e.$oj$bCh(r);
s.$oj$pmF=s.$oj$FdF([[u&&u.$oj$Sjh(0),u&&u.$oj$Sjh(10)],[u&&u.$oj$Sjh(11),u&&u.$oj$Sjh(12)]]);
s.$oj$dmF=s.$oj$FdF([[u&&u.$oj$Sjh(20),u&&u.$oj$Sjh(21),u&&u.$oj$Sjh(22),u&&u.$oj$Sjh(23)],[u&&u.$oj$Sjh(24),u&&u.$oj$Sjh(25),u&&u.$oj$Sjh(26)]]);
s.$oj$mmF=s.$oj$UdF();
s.$oj$mmF&&s.$oj$mmF.$oj$zdF([s.$oj$pmF,s.$oj$dmF]);
r&&r.$oj$ZpF(s.$oj$edF(),o);
r&&r.$oj$ZpF(s.$oj$lmF,i);
r&&r.$oj$ZpF(s.$oj$ndF(),t);
r&&r.$oj$ZpF(s.$oj$mmF,h);
}else{
r&&r.$oj$Qkh();
var c=s.$oj$vmF;
s.$oj$pmF=s.$oj$FdF([[c&&c.$oj$Sjh(0),c&&c.$oj$Sjh(10)],[c&&c.$oj$Sjh(11),c&&c.$oj$Sjh(12)],[c&&c.$oj$Sjh(20),c&&c.$oj$Sjh(21),c&&c.$oj$Sjh(22),c&&c.$oj$Sjh(23)],[c&&c.$oj$Sjh(24),c&&c.$oj$Sjh(25),c&&c.$oj$Sjh(26)]]);
e&&e.$oj$bCh(s.$oj$edF());
e&&e.$oj$bCh(s.$oj$lmF);
e&&e.$oj$bCh(s.$oj$ndF());
e&&e.$oj$bCh(s.$oj$pmF);
}
};
s.$oj$rdF=function($){
return j._g.$oj$jpF($)?184:3==$?165:4==$?416:6==$?278:294;
};
s.$oj$odF=function($){
var o,t,h,i=this.$oj$GpF(),F=this.$oj$ndF(),s=j._g.$oj$hNh(),r=i&&i.$oj$hBh();
n.$oj_super.prototype.$oj$odF.call(this,$);
if(j._g.$oj$FpF($)){
var e=(o=this.$oj$QpF())&&o.$oj$hBh();
this.$oj$lmF&&this.$oj$lmF.$oj$aLh(e);
var u=this.$oj$lmF&&this.$oj$lmF.$oj$hBh(),c=j._g.$oj$g(),v=j._g.$oj$g();
j._g.$oj$K(c,v,u,2);
c.width=v.width=96;
j._g.$oj$z(c,u);
j._g.$oj$z(v,u);
this.$oj$hmF&&this.$oj$hmF.$oj$aLh(c);
this.$oj$fmF&&this.$oj$fmF.$oj$aLh(v);
this.$oj$hmF&&this.$oj$hmF.$oj$VBh(3);
this.$oj$fmF&&this.$oj$fmF.$oj$VBh(12);
}else{
var a=16,l=j._g.$oj$m(0,0,200,0),f=j._g.$oj$g(),d=j._g.$oj$g(),g=j._g.$oj$g(),_=j._g.$oj$g(),p=j._g.$oj$g();
if(6==$){
l.width=116;
a=11;
d.x=j._g.$oj$L(l)+a;
d.width=r.width-d.x;
f.x=d.x;
f.width=d.width;
var b=(r.height-(a-2))/6;
d.height=Math.round(2*b);
var w=Math.floor((r.height-a)/2);
l.height=w;
f.y=j._g.$oj$A(d)+a;
f.height=r.height-j._g.$oj$N(f);
this.$oj$pmF&&this.$oj$pmF.$oj$aLh(f);
this.$oj$pmF&&this.$oj$pmF.$oj$Ijh();
this.$oj$pmF&&this.$oj$pmF.$oj$bFh();
F&&F.$oj$aLh(d);
F&&F.$oj$Ijh();
F&&F.$oj$bFh();
var m=this.$oj$pmF&&this.$oj$pmF.$oj$PdF(1),y=this.$oj$pmF&&this.$oj$pmF.$oj$PdF(2);
g=j._g.$oj$m(l.x,f.y+m.y,l.width,j._g.$oj$A(y)-j._g.$oj$N(m));
p=j._g.$oj$m(0,0,g.width,m.height);
_=j._g.$oj$m(0,y.y-m.y,g.width,y.height);
this.$oj$hmF&&this.$oj$hmF.$oj$VBh(3);
this.$oj$fmF&&this.$oj$fmF.$oj$VBh(12);
}else if(4==$){
var C=j._g.$oj$g();
l.width=Math.round(j._g.$oj$i(r.width,[148,500,200,768]));
d.x=j._g.$oj$L(l)+a;
d.width=r.width-d.x;
f.x=d.x;
f.width=d.width;
C.x=l.x;
C.width=l.width;
g.x=l.x;
g.width=l.width;
var L=(r.height-(a-2))/6;
d.height=Math.round(2*L);
l.height=d.height;
f.y=j._g.$oj$A(d)+a;
f.height=r.height-j._g.$oj$N(f);
C.y=f.y;
C.height=l.height;
this.$oj$pmF&&this.$oj$pmF.$oj$aLh(f);
this.$oj$pmF&&this.$oj$pmF.$oj$Ijh();
this.$oj$pmF&&this.$oj$pmF.$oj$bFh();
var B=this.$oj$pmF&&this.$oj$pmF.$oj$PdF(3);
g.y=B.y+f.y;
g.height=B.height;
var S=j._g.$oj$w(g);
j._g.$oj$J(_,p,S,s?2:-1);
this.$oj$hmF&&this.$oj$hmF.$oj$VBh(10);
this.$oj$fmF&&this.$oj$fmF.$oj$VBh(5);
}else{
var x=j._g.$oj$g();
j._g.$oj$bt(x,l);
j._g.$oj$ct(x,a);
d.width=j._g.$oj$L(x);
var O=r.width-(j._g.$oj$L(x)+a+a);
g.width=Math.round(O/8);
j._g.$oj$bt(g,x);
j._g.$oj$ct(g,a);
f.x=j._g.$oj$L(g)+a;
f.width=r.width-f.x;
f.height=r.height;
this.$oj$pmF&&this.$oj$pmF.$oj$aLh(f);
this.$oj$pmF&&this.$oj$pmF.$oj$Ijh();
this.$oj$pmF&&this.$oj$pmF.$oj$bFh();
var R=this.$oj$pmF&&this.$oj$pmF.$oj$PdF(1),A=this.$oj$pmF&&this.$oj$pmF.$oj$PdF(2);
g.y=R.y;
g.height=j._g.$oj$A(A)-j._g.$oj$N(R);
var N=j._g.$oj$w(g);
j._g.$oj$K(p,_,N,2);
x.height=j._g.$oj$A(R)-8;
l.height=x.height;
d.y=A.y;
d.height=r.height-j._g.$oj$N(d);
this.$oj$hmF&&this.$oj$hmF.$oj$VBh(3);
this.$oj$fmF&&this.$oj$fmF.$oj$VBh(12);
}
(t=this.$oj$edF())&&t.$oj$aLh(l);
(h=this.$oj$ndF())&&h.$oj$aLh(d);
this.$oj$pmF&&this.$oj$pmF.$oj$aLh(f);
this.$oj$lmF&&this.$oj$lmF.$oj$aLh(g);
this.$oj$hmF&&this.$oj$hmF.$oj$aLh(p);
this.$oj$fmF&&this.$oj$fmF.$oj$aLh(_);
}
};
s.$oj$GdF=function(){
return 2;
};
s.$oj$udF=function(){
return h;
};
s.$oj$adF=function(){
return i;
};
s.$oj$gmF=function($,o){
return 3==$?24:n.$oj_super.prototype.$oj$gmF.call(this,$,o);
};
return n;
});
}();
!function(){
"use strict";
var o="Tab";
j._registerClass({
$oj$XpF:1
},{
$oj$yvF:1
},function(t,h){
function i(){
j._cls.$oj$yvF.call(this);
this.$oj$ymF=this.$oj$bmF=this.$oj$wmF=this.$oj$EmF=this.$oj$SmF=this.$oj$xmF=this.$oj$TmF=this.$oj$NmF=this.$oj$CmF=this.$oj$kmF=this.$oj$LmF=null;
this.$oj$AmF=0;
this.$oj$OmF=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
h.$oj$MmF=function(){
return this.$oj$kmF;
};
h.$oj$DmF=function(){
return this.$oj$xmF;
};
h.$oj$QpF=function(){
return this.$oj$LmF;
};
h.$oj$edF=function(){
return this.$oj$bmF;
};
h.$oj$tdF=function(){
return this.$oj$SmF;
};
h.$oj$PmF=function(){
return this.$oj$NmF;
};
h.$oj$HmF=function(){
return this.$oj$CmF;
};
h.$oj$ndF=function(){
return this.$oj$TmF;
};
h.$oj$uqh=function(){
var $,o,t,h,F,s,n,r=this;
i.$oj_super.prototype.$oj$uqh.call(this);
this.$oj$LmF=($=new j._cls.$oj$BmF())&&$.init();
this.$oj$wmF=(o=new j._cls.$oj$RCh())&&o.init();
this.$oj$kmF=(t=new j._cls.$oj$gUy())&&t.init();
this.$oj$wmF&&this.$oj$wmF.$oj$bCh(this.$oj$kmF);
this.$oj$bmF=(h=new j._cls.$oj$FmF())&&h.$oj$jmF(1);
this.$oj$bmF&&this.$oj$bmF.$oj$OCh(this,{
$oj$ImF:1
});
this.$oj$SmF=(F=new j._cls.$oj$FmF())&&F.$oj$jmF(2);
this.$oj$SmF&&this.$oj$SmF.$oj$OCh(this,{
$oj$qmF:1
});
this.$oj$xmF=(s=new j._cls.$oj$oRy())&&s.$oj$Mqy(0);
this.$oj$wmF&&this.$oj$wmF.$oj$bCh(this.$oj$xmF);
0!=this.$oj$GdF()&&this.$oj$RmF();
var e=this.$oj$oDh();
e&&e.$oj$bCh(this.$oj$wmF);
this.$oj$EmF=j._cls.$oj$YCh.$oj$QCh("_a2t");
(this.$oj$EmF&&this.$oj$EmF.$oj$L4()).zIndex=String(10);
this.$oj$EmF&&this.$oj$EmF.$oj$MOh(function(){
r.$oj$UmF();
});
e&&e.$oj$bCh(r.$oj$EmF);
r.$oj$ymF=(n=new j._cls.$oj$qLh())&&n.init();
r.$oj$ymF&&r.$oj$ymF.$oj$vAh(r);
r.$oj$ymF&&r.$oj$ymF.$oj$pAh(2);
};
h.$oj$aot=function($){
var j,t;
i.$oj_super.prototype.$oj$aot.call(this,$);
var h=$[o];
void 0===h&&(h=this.$oj$udF());
(j=this.$oj$VpF())&&j.$oj$smF(h);
(t=this.$oj$QpF())&&t.$oj$smF(h);
};
h.$oj$ylt=function($){
var j;
i.$oj_super.prototype.$oj$ylt.call(this,$);
var t=(j=this.$oj$VpF())&&j.$oj$djh();
$[o]=t;
};
h.$oj$odF=function($){
var o,t;
i.$oj_super.prototype.$oj$odF.call(this,$);
var h=(o=this.$oj$GpF())&&o.$oj$hBh();
j._g.$oj$FpF($)&&(t=this.$oj$QpF())&&t.$oj$aLh(h);
};
h.$oj$VvF=function($,o){
var t;
i.$oj_super.prototype.$oj$VvF.call(this,$,o);
var h=(t=this.$oj$oDh())&&t.$oj$hBh();
j._g.$oj$at(h,o);
this.$oj$wmF&&this.$oj$wmF.$oj$aLh(h);
this.$oj$EmF&&this.$oj$EmF.$oj$aLh(h);
var F=this.$oj$gmF($,h.width),s=j._g.$oj$E(this.$oj$wmF&&this.$oj$wmF.$oj$hBh(),F,0);
if(this.$oj$OmF){
var n=4;
j._g.$oj$hNh()||(n|=8);
3==$&&(n|=16);
this.$oj$AmF=n;
this.$oj$xmF&&this.$oj$xmF.$oj$aLh(s);
this.$oj$zmF();
}else{
this.$oj$kmF&&this.$oj$kmF.$oj$aLh(s);
this.$oj$WmF();
}
};
h.$oj$idF=function($,o){
if(j._g.$oj$jpF($))return j._g.$oj$B(11,0,11,0);
if(3==$)return j._g.$oj$B(11,0,0,0);
if(6==$)return j._g.$oj$B(0,22,22,22);
if(4==$){
var t=Math.round(j._g.$oj$i(o.width,[0,700,16,768]));
return j._g.$oj$B(16,t,16,t);
}
return j._g.$oj$B(16,16,16,16);
};
h.$oj$XmF=function(){
var $=!1;
$||($=this.$oj$bmF&&this.$oj$bmF.$oj$XmF());
$||($=this.$oj$SmF&&this.$oj$SmF.$oj$XmF());
return $;
};
h.$oj$RmF=function(){
var o,t,h,i,F=this,s=2!=this.$oj$GdF(),n=[],r=[];
this.$oj$NmF=this.$oj$LdF("NoteLetter");
this.$oj$CmF=this.$oj$LdF("NoteQuality");
function e($){
var o=j._cls.$oj$l8.$oj$M8($),t=F.$oj$NmF&&F.$oj$NmF.$oj$Ejh(o,$);
n.push(t);
}
function u($,o){
var t=j._cls.$oj$l8.$oj$P8($),h=F.$oj$CmF&&F.$oj$CmF.$oj$bjh(null,t,$);
h&&h.$oj$rjh(o);
r.push(h);
}
e(0);
e(1);
e(2);
e(3);
e(4);
e(5);
e(6);
s&&u(-2,1);
u(-1,2);
u(0,3);
u(1,4);
s&&u(2,5);
(o=$.first(n))&&o.$oj$VBh(5);
(t=$.last(n))&&t.$oj$VBh(10);
(h=$.first(r))&&h.$oj$VBh(5);
(i=$.last(r))&&i.$oj$VBh(10);
F.$oj$TmF=F.$oj$XdF([j._cls.$oj$IdF.$oj$VmF(n),j._cls.$oj$IdF.$oj$VmF(r)]);
j._g.$oj$hNh()||F.$oj$TmF&&F.$oj$TmF.$oj$ROh(j._g.$oj$l(-1,3));
};
h.$oj$WmF=function(){
var $=this.$oj$kmF&&this.$oj$kmF.$oj$hBh();
if(!$||!$.width||!$.height)return;
var o=this.$oj$JmF(),t=o.sendRequest(1403,{
width:$.width,
height:$.height
}),h=j._cls.$oj$ztt.$oj$dxt(t);
this.$oj$kmF&&this.$oj$kmF.$oj$FIy(h);
};
h.$oj$zmF=function(){
var $=this.$oj$xmF&&this.$oj$xmF.$oj$hBh();
if(!$||!$.width||!$.height)return;
var o=this.$oj$JmF(),t=o.sendRequest(1404,{
width:$.width,
height:$.height,
scale:j._g.$oj$ANh(),
options:this.$oj$AmF
}),h=j._cls.$oj$Lrt.$oj$dxt(t);
this.$oj$xmF&&this.$oj$xmF.$oj$FIy(h);
};
h.$oj$KmF=function($){
var o,j,t,h,i,F;
if($&&!this.$oj$OmF){
this.$oj$wmF&&this.$oj$wmF.$oj$bCh(this.$oj$xmF);
this.$oj$kmF&&this.$oj$kmF.$oj$Qkh();
(o=this.$oj$rLh())&&o.$oj$Ijh();
this.$oj$OmF=!0;
if(!this.$oj$YdF()){
var s=this.$oj$adF();
(j=(t=this.$oj$VpF())&&t.$oj$Sjh(s))&&j.$oj$q2(!1);
this.$oj$SmF&&this.$oj$SmF.$oj$QmF(!1,!0);
}
}else if(!$&&this.$oj$OmF){
this.$oj$wmF&&this.$oj$wmF.$oj$bCh(this.$oj$kmF);
this.$oj$xmF&&this.$oj$xmF.$oj$Qkh();
(h=this.$oj$rLh())&&h.$oj$Ijh();
if(!this.$oj$YdF()){
var n=this.$oj$adF();
(i=(F=this.$oj$VpF())&&F.$oj$Sjh(n))&&i.$oj$q2(!0);
this.$oj$SmF&&this.$oj$SmF.$oj$QmF(!0,!0);
}
this.$oj$OmF=!1;
}
};
h.$oj$UmF=function(){
var $=this.$oj$JmF(),o=$.sendRequest(1402),t=j._cls.$oj$mr.$oj$cxt(o);
this.$oj$ymF&&this.$oj$ymF.$oj$dAh(t);
};
h.$oj$fAh=function($,o,j){
this.$oj$OmF?this.$oj$xmF&&this.$oj$xmF.$oj$PIy(3,j,o):this.$oj$kmF&&this.$oj$kmF.$oj$PIy(3,j,o);
};
h.$oj$ImF=function(){
var $=this.$oj$bmF&&this.$oj$bmF.$oj$w4();
this.$oj$MdF($,"Clef");
this.$oj$GmF($,"Clef");
};
h.$oj$qmF=function(){
var $=this.$oj$SmF&&this.$oj$SmF.$oj$E4();
this.$oj$MdF($,"KeySignature");
this.$oj$GmF($,"KeySignature");
};
h.$oj$FdF=function($){
var o=j._cls.$oj$IdF.$oj$YmF($);
return this.$oj$XdF(o);
};
h.$oj$XdF=function(o){
var t=j._cls.$oj$UvF.$oj$ZmF(o),h=j._g.$oj$hNh();
t&&t.$oj$ROh(h?j._g.$oj$l(2,2):j._g.$oj$l(-1,-1));
function i(o,t,h){
for(var i=o&&o.$oj$egF(),F=i?i.length:0,s=null,n=$.first(i),r=!1,e=!1,u=n&&n.isKindOfClass_(j._cls.$oj$NBh),c=0;F>c;c++){
s=n;
n=i[c+1];
r=e;
e=u;
u=n&&n.isKindOfClass_(j._cls.$oj$NBh);
if(e){
var v=s;
r||v&&v.$oj$tjh(t);
u||v&&v.$oj$tjh(h);
}
}
}
i($.first(o),1,2);
i($.last(o),4,8);
return t;
};
h.$oj$UdF=function(){
var $,o=($=new j._cls.$oj$tgF())&&$.init();
o&&o.$oj$ROh(2);
return o;
};
h.$oj$ngF=function($){
var o,j,t;
(o=this.$oj$QpF())&&o.$oj$smF($);
(j=this.$oj$edF())&&j.$oj$pmt();
(t=this.$oj$tdF())&&t.$oj$pmt();
this.$oj$pqh();
};
h.$oj$KdF=function($){
i.$oj_super.prototype.$oj$KdF.call(this,$);
var o=$["Clef"],j=$["KeySignature"],t=$["ScaleType"],h=0;
0===t?h=1:1===t&&(h=2);
this.$oj$bmF&&this.$oj$bmF.$oj$rgF(o,j,h);
this.$oj$SmF&&this.$oj$SmF.$oj$rgF(o,j,h);
};
h.$oj$GdF=function(){
return 1;
};
h.$oj$YdF=function(){
return!1;
};
h.$oj$udF=function(){
return 0;
};
h.$oj$adF=function(){
return 0;
};
h.$oj$igF=function(){
return!0;
};
h.$oj$gmF=function($,o){
var t=j._g.$oj$i(o,[11,320,16,414,32,512,64,768,96,1024]);
3==$&&(t*=2);
6==$&&(t=22);
return t;
};
h.$oj$sgF=function(){
this.$oj$KmF(!1);
this.$oj$WmF();
};
h.$oj$ogF=function(){
this.$oj$KmF(!0);
this.$oj$zmF();
};
h.$oj$umF=function($,o){
2402==$?this.$oj$sgF(o):2403==$?this.$oj$ogF(o):i.$oj_super.prototype.$oj$umF.call(this,$,o);
};
return i;
});
}();
!function(){
"use strict";
var o=48,h=64;
j._g.$oj$jpF=function($){
return 1==$||2==$;
};
j._g.$oj$FpF=function($){
return 1==$||2==$||3==$;
};
j._registerClass({
$oj$yvF:1
},{
$oj$hPh:1
},function(i,F){
function s(){
j._cls.$oj$hPh.call(this);
this.$oj$ugF=this.$oj$agF=this.$oj$fgF=this.$oj$lgF=this.$oj$cgF=this.$oj$hgF=this.$oj$pgF=this.$oj$dgF=this.$oj$vgF=this.$oj$mgF=this.$oj$ggF=this.$oj$ygF=this.$oj$bgF=this.$oj$wgF=this.$oj$EgF=null;
this.$oj$SgF=this.$oj$xgF=0;
this.constructor=s;
this.$oj_id=++j._id;
}
F.$oj$oDh=function(){
return this.$oj$fgF;
};
F.$oj$GpF=function(){
return this.$oj$lgF;
};
F.$oj$VpF=function(){
return this.$oj$wgF;
};
F.$oj$Gut=function(){
return this.$oj$ggF;
};
F.$oj$JmF=function(){
return this.$oj$ugF;
};
i.$oj$VCh=function(){
return"_f2t";
};
F.$oj$nLh=function(){
return j._g.$oj$hNh();
};
F.$oj$iLh=function(){
return!0;
};
F.$oj$sLh=function(){
return"calculator";
};
F.$oj$xkW=function($){
var o=this;
if(o=s.$oj_super.prototype.init.call(this)){
o.$oj$ugF=$;
$.handleCommand=function($,j){
o.$oj$umF($,j);
};
o.$oj$pgF={};
o.$oj$mgF={};
o.$oj$dgF={};
o.$oj$vgF={};
o.$oj$hgF={};
var j=o.$oj$ugF.sendRequest(1400);
o.$oj$ggF=j["prefix"];
o.$oj$cgF=j["defaults"];
o.$oj$EgF=j["triggers"];
o.$oj$agF=j["choices"];
o.$oj$bgF=j["strings"];
}
return o;
};
F.$oj$aqh=function(){
return"calculators."+this.$oj$ggF;
};
F.$oj$aot=function($){
s.$oj_super.prototype.$oj$aot.call(this,$);
this.$oj$ugF.sendAction(3401,{
state:$||{}
});
};
F.$oj$ylt=function(o){
s.$oj_super.prototype.$oj$ylt.call(this,o);
var j=this.$oj$ugF.sendRequest(1401);
$.each(j,function($,t){
o[t]=j[t];
});
};
F.$oj$uqh=function(){
var $,o,h,i,F,n=this;
s.$oj_super.prototype.$oj$uqh.call(this);
var r=this.$oj$rLh(),e=($=j._cls.$oj$lkh.$oj$Akh())&&$.$oj$xkh();
e&&e.$oj$xIh(0);
e&&e.$oj$kIh("/tools");
var u=(o=j._cls.$oj$lkh.$oj$Akh())&&o.$oj$hLh();
2==u?j._cls.$oj$dLh.$oj$LAh():1==u&&j._cls.$oj$dLh.$oj$kAh(j._cls.$oj$LFh.$oj$PFh()?"width=616,user-scalable=no":"width=616");
j._cls.$oj$LFh.$oj$PFh()&&(h=new j._cls.$oj$LFh())&&h.$oj$HFh("Open Calculator in Tenuto","/calculators/"+this.$oj$ggF,function(){
1==u&&j._cls.$oj$dLh.$oj$kAh("width=616");
});
n.$oj$wgF=(i=new j._cls.$oj$qvF())&&i.init();
n.$oj$wgF&&n.$oj$wgF.$oj$nCh(n);
n.$oj$fgF=j._cls.$oj$RCh.$oj$QCh("_l2t");
n.$oj$lgF=j._cls.$oj$RCh.$oj$QCh("_c2t");
r&&r.$oj$bCh(n.$oj$fgF);
r&&r.$oj$bCh(n.$oj$lgF);
(F=j._cls.$oj$lkh.$oj$Akh())&&F.$oj$cLh(n);
r&&r.$oj$aLh(j._g.$oj$g());
r&&r.$oj$Ijh();
t.listen(document,"keydown",function($){
n.$oj$TgF($,!0);
});
t.listen(document,"keyup",function($){
n.$oj$TgF($,!1);
});
t.listen(window,"unload",function(){
n.$oj$pqh();
});
};
F.$oj$fLh=function(){
var $;
($=this.$oj$rLh())&&$.$oj$Ijh();
};
F.$oj$hqh=function(){
var $,t,i;
s.$oj_super.prototype.$oj$hqh.call(this);
var F=j._g.$oj$hNh(),n=F?44:0,r=this.$oj$rLh(),e=this.$oj$NgF(),u=e.width,c=0;
if(F){
var v=Math.round(j._g.$oj$i(e.width,[12,320,16,768]));
(this.$oj$fgF&&this.$oj$fgF.$oj$L4()).borderRadius=v+"px";
c=n;
}
var a=this.$oj$DdF(e);
if(F)r&&r.$oj$aLh(j._g.$oj$d(e));else{
r&&r.$oj$aLh(j._g.$oj$d(e));
(r&&r.$oj$L4()).position="relative";
}
if(this.$oj$SgF!=a){
this.$oj$KpF(a);
this.$oj$SgF=a;
}
var l=this.$oj$rdF(a,e),f=void 0,d=void 0,g=void 0;
f=j._g.$oj$m(0,e.height-l,u,l);
var _=e.height-l;
_-=c;
d=j._g.$oj$m(0,c,u,_);
if(j._g.$oj$jpF(a)&&this.$oj$igF()){
d.height-=o;
g=j._g.$oj$y(f);
g.height=o;
j._g.$oj$Et(f,d);
j._g.$oj$Et(g,f);
}else if(3==a){
d.width-=h;
d.x+=h;
f.width-=h;
f.x+=h;
g=j._g.$oj$d(e);
g.width=h;
g=j._g.$oj$E(g,6,40);
}
var p=this.$oj$idF(a,e),b=this.$oj$sdF();
f=j._g.$oj$q(f,p);
if(b.width&&b.height){
if(f.width>b.width){
f.x+=Math.round((f.width-b.width)/2);
f.width=b.width;
}
if(f.height>b.height){
f.y+=Math.round((f.height-b.height)/2);
f.height=b.height;
}
}
this.$oj$fgF&&this.$oj$fgF.$oj$aLh(d);
this.$oj$lgF&&this.$oj$lgF.$oj$aLh(f);
if(g){
($=this.$oj$rLh())&&$.$oj$bCh(this.$oj$wgF);
this.$oj$wgF&&this.$oj$wgF.$oj$aLh(g);
}else this.$oj$wgF&&this.$oj$wgF.$oj$Qkh();
this.$oj$odF(a);
this.$oj$VvF(a,n);
F||(t=j._cls.$oj$lkh.$oj$Akh())&&t.$oj$vLh();
((i=this.$oj$rLh())&&i.$oj$NCh()).getBoundingClientRect();
};
F.$oj$wPh=function(){
s.$oj_super.prototype.$oj$wPh.call(this);
this.$oj$ugF.sendAction(3400);
};
F.$oj$NgF=function(){
return j._g.$oj$hNh()?j._g.$oj$l(Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientHeight,window.innerHeight||0)):j._g.$oj$l(600,534);
};
F.$oj$QdF=function(){
return this.$oj$DdF(this.$oj$NgF());
};
F.$oj$DdF=function($){
if(j._g.$oj$hNh()){
var o=$.height<420||$.width<420;
return o?$.height<420?3:$.height<481?2:1:$.width<444?1:$.height>$.width?4:5;
}
return 6;
};
F.$oj$KpF=function(){};
F.$oj$VvF=function(){};
F.$oj$CgF=function(){};
F.$oj$odF=function(){};
F.$oj$rdF=function(){
return 0;
};
F.$oj$idF=function(){
return j._g.$oj$j();
};
F.$oj$sdF=function(){
return j._g.$oj$c();
};
F.$oj$XmF=function(){
return!1;
};
F.$oj$TgF=function($,o){
if($.ctrlKey||$.metaKey||$.altKey)return;
var t=j._cls.$oj$EOh.$oj$wOh($.keyCode),h=!1;
!h&&o&&"Escape"==t&&(h=this.$oj$XmF());
if(h){
$.stopPropagation();
$.preventDefault();
}
};
F.$oj$kgF=function($){
var o=$&&$.$oj$gjh(),j=$&&$.$oj$djh();
this.$oj$MdF(j,o);
this.$oj$GmF(j,o);
};
F.$oj$LgF=function($){
var o=$&&$.$oj$AgF()?$&&$.$oj$kdF():$&&$.$oj$CdF(),j=$&&$.$oj$gjh(),t=o&&o.$oj$xn();
this.$oj$MdF(t,j);
this.$oj$GmF(t,j);
};
F.$oj$nmF=function($,o){
this.$oj$ngF(o);
};
F.$oj$NdF=function($){
var o,t,h,i=this.$oj$mgF[$];
if(!i){
i=(o=new j._cls.$oj$OgF())&&o.init();
i&&i.$oj$mjh($);
(t=i&&i.$oj$CdF())&&t.$oj$Gct(0);
(h=i&&i.$oj$kdF())&&h.$oj$Gct(1);
this.$oj$mgF[$]=i;
i&&i.$oj$OCh(this,{
$oj$LgF:1
});
}
return i;
};
F.$oj$LdF=function($){
var o,t=this.$oj$pgF[$];
if(!t){
t=(o=new j._cls.$oj$sjh())&&o.$oj$yjh(this,{
$oj$kgF:1
});
this.$oj$pgF[$]=t;
t&&t.$oj$mjh($);
}
return t;
};
F.$oj$AdF=function(o,j,t){
var h=o&&o.$oj$gjh(),i=this.$oj$agF[h],F=this.$oj$bgF[j],s=this.$oj$bgF[t];
$.each(i,function($){
var j=F?F[$]:null,t=s?s[$]:null;
o&&o.$oj$bjh(j,t,$);
});
};
F.$oj$ivF=function($,o){
var j=this.$oj$bgF[o];
return j?j[$]:null;
};
F.$oj$BdF=function($){
return this.$oj$ygF?this.$oj$ygF[$]:0;
};
F.$oj$MdF=function($,o){
this.$oj$ugF.sendAction(3403,{
value:$,
group:o
});
};
F.$oj$NSt=function($){
this.$oj$ugF.sendAction(3404,{
name:$
});
};
F.$oj$igF=function(){
return!1;
};
F.$oj$ngF=function(){};
F.$oj$KdF=function(){};
F.$oj$omF=function(){};
F.$oj$GmF=function(){};
F.$oj$MgF=function(){
var $=this;
this.$oj$xgF&&clearTimeout(this.$oj$xgF);
this.$oj$xgF=setTimeout(function(){
$.$oj$pqh();
$.$oj$xgF=0;
},0);
};
F.$oj$DgF=function(o){
var j=this,t=o["groups"],h=o["enabled-triggers"];
this.$oj$ygF=t;
$.each(this.$oj$pgF,function($,o){
var j=t[o];
void 0!==j&&$&&$.$oj$Tjh(j);
});
$.each(j.$oj$mgF,function($,o){
var j,h,i=t[o];
void 0!==i&&(((j=$&&$.$oj$kdF())&&j.$oj$xn())==i?$&&$.$oj$PgF(!0):((h=$&&$.$oj$CdF())&&h.$oj$xn())==i&&$&&$.$oj$PgF(!1));
});
j.$oj$KdF(t);
$.each(j.$oj$EgF,function(o){
var t=$.includes(h,o);
j.$oj$omF(o,t);
});
};
F.$oj$umF=function($,o){
2400==$?this.$oj$MgF():2401==$&&this.$oj$DgF(o);
};
return s;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$UvF:1
},{
$oj$RCh:1
},function(o,t){
function h(){
j._cls.$oj$RCh.call(this);
this.$oj$HgF=this.$oj$BgF=null;
this.constructor=h;
this.$oj_id=++j._id;
}
t.$oj$jgF=function(){
return this.$oj$BgF;
};
t.$oj$UOh=function(){
return j.makeCopy(this.$oj$HgF);
};
o.$oj$VCh=function(){
return"_h2t";
};
o.$oj$RvF=function($){
var o=j._cls.$oj$IdF.$oj$YmF($);
return this.$oj$ZmF(o);
};
o.$oj$ZmF=function($){
var o;
return(o=this.alloc())&&o.$oj$FgF($);
};
t.$oj$FgF=function(o){
var j=this;
if(j=h.$oj_super.prototype.init.call(this)){
j.$oj$BgF=$.clone(o)||[];
$.each(o,function($){
j.$oj$bCh($);
});
}
return j;
};
t.init=function(){
return this.$oj$FgF(null);
};
t.$oj$jjh=function(){
h.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh(),o=this.$oj$BgF?this.$oj$BgF.length:0,t=0,i=$.height;
i-=(o-1)*this.$oj$HgF.height;
i/=o;
for(var F,s=$.y,n=this.$oj$BgF,r=0,e=n?n.length:0;e>r;r++){
F=n[r];
var u=i+t,c=Math.round(u);
t=u-c;
F&&F.$oj$aLh(j._g.$oj$m(0,s,$.width,c));
s+=c+this.$oj$HgF.height;
}
};
t.$oj$qdF=function(o){
if(!$.includes(this.$oj$BgF,o)){
this.$oj$BgF.push(o);
this.$oj$bCh(o);
o&&o.$oj$IgF(this.$oj$HgF.width);
this.$oj$Ijh();
}
};
t.$oj$XvF=function($){
return this.$oj$BgF[$]||null;
};
t.$oj$PdF=function($){
var o=this.$oj$XvF($);
return o&&o.$oj$C4();
};
t.$oj$fLh=function(){
this.$oj$Ijh();
this.$oj$bFh();
};
t.$oj$qgF=function($,o){
var j;
return(j=this.$oj$XvF($))&&j.$oj$RgF(o);
};
t.$oj$ROh=function(o){
var t=this;
if(!j._g.$oj$v(this.$oj$HgF,o)){
this.$oj$HgF=j._g.$oj$h(o);
$.each(this.$oj$BgF,function($){
$&&$.$oj$IgF(o?o.width:0);
});
t.$oj$Ijh();
}
};
return h;
});
j._registerClass({
$oj$IdF:1
},{
$oj$RCh:1
},function(o,t){
function h(){
j._cls.$oj$RCh.call(this);
this.$oj$UgF=this.$oj$zgF=null;
this.$oj$WgF=0;
this.constructor=h;
this.$oj_id=++j._id;
}
t.$oj$egF=function(){
return this.$oj$zgF;
};
o.$oj$YmF=function(o){
return $.map(o,function($){
var o;
return(o=new j._cls.$oj$IdF())&&o.$oj$XgF($);
});
};
o.$oj$VmF=function($){
var o;
return(o=this.alloc())&&o.$oj$XgF($);
};
t.$oj$XgF=function(o){
var j=this;
if(j=h.$oj_super.prototype.init.call(this)){
j.$oj$zgF=$.clone(o)||[];
$.each(o,function($){
j.$oj$bCh($);
});
}
return j;
};
t.init=function(){
return this.$oj$XgF(null);
};
t.$oj$jjh=function(){
var o=this;
h.$oj_super.prototype.$oj$jjh.call(this);
var t=this.$oj$hBh(),i=this.$oj$zgF?this.$oj$zgF.length:0;
if(this.$oj$UgF){
i=0;
$.each(this.$oj$UgF,function($){
i+=$;
});
}
var F=0,s=t.width;
s-=(i-1)*o.$oj$WgF;
s/=i;
for(var n=t.x,r=0;i>r;r++){
var e=o.$oj$zgF[r],u=o.$oj$UgF&&o.$oj$UgF[r];
u||(u=1);
for(var c=j._g.$oj$m(n,0,0,t.height),v=0;u>v;v++){
var a=s+F,l=Math.round(a);
F=a-l;
c.width+=l;
v>0&&(c.width+=o.$oj$WgF);
n+=l+o.$oj$WgF;
}
e&&e.$oj$aLh(c);
}
};
t.$oj$RdF=function(o){
if(!$.includes(this.$oj$zgF,o)){
this.$oj$zgF.push(o);
this.$oj$UgF&&this.$oj$UgF.push(1);
this.$oj$bCh(o);
this.$oj$Ijh();
}
};
t.$oj$IgF=function($){
if(this.$oj$WgF!=$){
this.$oj$WgF=$;
this.$oj$Ijh();
}
};
t.$oj$WvF=function(o,j){
var t=this;
if(!this.$oj$UgF){
this.$oj$UgF=[];
$.each(this.$oj$zgF,function(){
t.$oj$UgF.push(1);
});
}
t.$oj$UgF[j]=o;
};
t.$oj$VgF=function($){
var o=this.$oj$UgF&&this.$oj$UgF[$];
void 0===o&&(o=1);
return o;
};
t.$oj$RgF=function($){
return this.$oj$zgF[$]||null;
};
return h;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$JgF:1
},null,function(){
function $(){
this.constructor=$;
this.$oj_id=++j._id;
}
return $;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$tgF:1
},{
$oj$RCh:1
},function(o,h){
function i(){
j._cls.$oj$RCh.call(this);
this.$oj$KgF=this.$oj$QgF=this.$oj$GgF=this.$oj$YgF=null;
this.$oj$ZgF=this.$oj$eyF=this.$oj$tyF=this.$oj$nyF=this.$oj$ryF=this.$oj$iyF=this.$oj$syF=0;
this.constructor=i;
this.$oj_id=++j._id;
}
h.$oj$oyF=function(){
return this.$oj$KgF;
};
h.$oj$UOh=function(){
return this.$oj$iyF;
};
o.$oj$VCh=function(){
return"_p2t";
};
h.$oj$JCh=function(){
var $,o=i.$oj_super.prototype.$oj$JCh.call(this),h=t.create("div",{
"class":"_d2t"
}),F=t.create("div",{
"class":"_v2t"
});
o.appendChild(h);
o.appendChild(F);
this.$oj$QgF=F;
this.$oj$GgF=($=new j._cls.$oj$iOh())&&$.$oj$rOh(o,3,this);
return h;
};
h.$oj$jjh=function(){
var o=this;
i.$oj_super.prototype.$oj$jjh.call(this);
var t=this.$oj$hBh(),h=this.$oj$KgF?this.$oj$KgF.length:0,F=j._g.$oj$O(t);
F.width=F.width*h+(h?this.$oj$iyF*(h-1):0);
this.$oj$ryF=-(F.width-t.width);
var s=this.$oj$dMh();
s.style.width=F.width+"px";
s.style.height=F.height+"px";
var n=j._g.$oj$y(t);
$.each(this.$oj$KgF,function($){
$&&$.$oj$aLh(n);
n.x+=n.width+o.$oj$iyF;
});
};
h.$oj$fOh=function($){
var o;
this.$oj$uyF(this.$oj$eyF,0);
var t=($&&$.$oj$cOh()).x;
this.$oj$YgF=(o=new j._cls.$oj$WIh())&&o.init();
this.$oj$YgF&&this.$oj$YgF.$oj$JIh(t);
this.$oj$nyF=t;
this.$oj$syF=this.$oj$eyF;
return!0;
};
h.$oj$dOh=function($){
var o=($&&$.$oj$cOh()).x,j=o-this.$oj$nyF;
this.$oj$YgF&&this.$oj$YgF.$oj$JIh(o);
this.$oj$ayF(this.$oj$syF+j);
};
h.$oj$vOh=function(){
var $=this.$oj$YgF&&this.$oj$YgF.$oj$KIh(),o=Math.abs($),j=0;
j=150>o?Math.round(-this.$oj$eyF/(this.$oj$hBh().width+this.$oj$iyF)):$>0?this.$oj$tyF+1:this.$oj$tyF-1;
this.$oj$fyF(j,Math.abs($));
};
h.$oj$ayF=function($){
var o=this.$oj$dMh(),j=$;
$>0?j=0:$<this.$oj$ryF&&(j=this.$oj$ryF);
o.style.left=j+"px";
this.$oj$eyF=$;
};
h.$oj$uyF=function($,o){
var j=this,h=this.$oj$eyF;
if(this.$oj$ZgF){
t.stop(this.$oj$ZgF);
this.$oj$ZgF=0;
}
if(o>0){
var i=$-h;
o>2500&&(o=2500);
var F=3*Math.round(1e3*Math.abs(i/o));
F>600&&(F=600);
this.$oj$ZgF=t.animate(F,function(o){
o-=1;
o=o*o*o+1;
var i=Math.round(t.lerp(h,$,o));
j.$oj$ayF(i);
});
}else j.$oj$ayF($);
};
h.$oj$fyF=function($,o){
var j=this.$oj$KgF?this.$oj$KgF.length-1:0;
$>j&&($=j);
0>$&&($=0);
var t=-($*(this.$oj$hBh().width+this.$oj$iyF));
this.$oj$uyF(t,o);
};
h.$oj$ROh=function($){
if(this.$oj$iyF!=$){
this.$oj$iyF=$;
this.$oj$Ijh();
}
};
h.$oj$zdF=function($){
if(this.$oj$KgF!=$){
this.$oj$KgF=$;
this.$oj$Lzh();
this.$oj$ECh($);
}
};
h.$oj$lyF=function($){
if(!this.$oj$KgF||$>=this.$oj$KgF.length||0>$)return;
this.$oj$tyF=$;
this.$oj$fyF($,0);
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$FmF:1
},{
$oj$UAh:1
},function($,o){
function t(){
j._cls.$oj$UAh.call(this);
this.$oj$cyF=this.$oj$hyF=this.$oj$pyF=this.$oj$dyF=null;
this.$oj$vyF=this.$oj$myF=this.$oj$gyF=this.$oj$yyF=0;
this.constructor=t;
this.$oj_id=++j._id;
}
o.$oj$byF=function(){
return this.$oj$vyF;
};
o.$oj$gjh=function(){
return this.$oj$cyF;
};
o.$oj$w4=function(){
return this.$oj$myF;
};
o.$oj$E4=function(){
return this.$oj$gyF;
};
o.$oj$wyF=function(){
return this.$oj$yyF;
};
o.$oj$EyF=function($){
this.$oj$hyF=$;
};
o.$oj$SyF=function(){
return this.$oj$hyF;
};
o.$oj$jmF=function($){
var o,h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$vyF=$;
h.$oj$pyF=(o=new j._cls.$oj$TyF())&&o.$oj$xyF(h);
h.$oj$dyF=null;
}
return h;
};
o.$oj$jjh=function(){
var $;
t.$oj_super.prototype.$oj$jjh.call(this);
($=this.$oj$pyF||this.$oj$dyF)&&$.$oj$aLh(this.$oj$hBh());
};
o.$oj$KCh=function(){
t.$oj_super.prototype.$oj$KCh.call(this);
var $=this.$oj$pyF||this.$oj$dyF;
this.$oj$bCh($);
};
o.$oj$rgF=function($,o,j){
var t;
this.$oj$myF=$;
this.$oj$gyF=o;
this.$oj$yyF=j;
(t=this.$oj$pyF||this.$oj$dyF)&&t.$oj$rgF($,o,j);
};
o.$oj$NyF=function($){
1==this.$oj$vyF?this.$oj$myF=$:2==this.$oj$vyF&&(this.$oj$gyF=$);
this.$oj$SOh();
};
o.$oj$CyF=function($,o){
if(34==$)return"Treble Clef";
if(22==$)return"Bass Clef";
if(28==$)return"Alto Clef";
if(26==$)return"Tenor Clef";
if(32==$)return"Soprano Clef";
if(30==$)return o?"Mezzo-Soprano":"Mezzo-Soprano Clef";
if(24==$)return"Baritone Clef";
if(-1==$)return"Keyboard";
return null;
};
o.$oj$kyF=function($){
var o=this.$oj$LyF($),j=this.$oj$AyF($);
return o+" -- "+j;
};
o.$oj$LyF=function($){
var o=j._cls.$oj$j9.$oj$R9(0,$);
return j._cls.$oj$l8.$oj$T8(0,o,0);
};
o.$oj$AyF=function($){
var o=j._cls.$oj$j9.$oj$R9(1,$);
return j._cls.$oj$l8.$oj$T8(1,o,0);
};
o.$oj$OyF=function(){
return this.$oj$pyF&&this.$oj$pyF.$oj$OyF();
};
o.$oj$QmF=function($){
var o;
(o=this.$oj$pyF||this.$oj$dyF)&&o.$oj$q2($);
};
o.$oj$pmt=function(){
var $;
($=this.$oj$pyF||this.$oj$dyF)&&$.$oj$pmt();
};
o.$oj$XmF=function(){
if(this.$oj$pyF)return this.$oj$pyF&&this.$oj$pyF.$oj$XmF();
return!1;
};
return t;
});
}();
!function(){
"use strict";
var o={};
function t($){
var t,h,i,F,s,n=o[$];
if(!n){
for(var r=Math.round($/6);r>0;){
var e=(t=(h=j._cls.$oj$B4)&&h.alloc())&&t.init();
(i=e)&&i.$oj$W4(r);
(F=e)&&F.$oj$U4(Math.floor($/2));
var u=(s=e)&&s.$oj$set(12,0,-2);
if(Math.ceil(j._g.$oj$A(u))<$-1)break;
r--;
}
n=o[$]=r;
}
return n;
}
j._registerClass({
$oj$MyF:1
},{
$oj$RCh:1
},function(o,h){
function i(){
j._cls.$oj$RCh.call(this);
this.$oj$DyF=this.$oj$PyF=null;
this.$oj$HyF=this.$oj$ByF=this.$oj$jyF=this.$oj$FyF=this.$oj$IyF=0;
this.constructor=i;
this.$oj_id=++j._id;
}
h.$oj$byF=function(){
return this.$oj$HyF;
};
h.$oj$vnt=function($){
var o=this.$oj$ByF;
if(o!==$){
this.$oj$ByF=$;
this.$oj$qyF(o);
}
};
h.$oj$w4=function(){
return this.$oj$ByF;
};
h.$oj$mnt=function($){
var o=this.$oj$jyF;
if(o!==$){
this.$oj$jyF=$;
this.$oj$qyF(o);
}
};
h.$oj$E4=function(){
return this.$oj$jyF;
};
h.$oj$RyF=function($){
var o=this.$oj$PyF;
if(o!==$){
this.$oj$PyF=$;
this.$oj$qyF(o);
}
};
h.$oj$UyF=function(){
return this.$oj$PyF;
};
h.$oj$zyF=function($){
var o=this.$oj$FyF;
if(o!==$){
this.$oj$FyF=$;
this.$oj$qyF(o);
}
};
h.$oj$WyF=function(){
return this.$oj$FyF;
};
h.$oj$XyF=function($){
var o=this.$oj$IyF;
if(o!==$){
this.$oj$IyF=$;
this.$oj$qyF(o);
}
};
h.$oj$VyF=function(){
return this.$oj$IyF;
};
o.$oj$VCh=function(){
return"_m2t";
};
h.$oj$jmF=function($){
var o=this;
if(o=i.$oj_super.prototype.init.call(this)){
o.$oj$HyF=$;
o.$oj$DyF=j._cls.$oj$uBh.$oj$oBh(function($){
o.$oj$aBh($);
});
o.$oj$fBh(o.$oj$DyF);
}
return o;
};
h.$oj$aBh=function(o){
var h,i=this,F=this.$oj$hBh();
if(!F)return;
var s=F.height;
$.each(this.$oj$PyF,function($){
var o=$&&$.$oj$hBh();
s=Math.min(s,o.height);
});
var n=(h=new j._cls.$oj$B4())&&h.init(),r=t(s);
i.$oj$FyF&&r>i.$oj$FyF&&(r=i.$oj$FyF);
var e=F.width;
i.$oj$IyF&&(e=Math.min(i.$oj$IyF,e));
n&&n.$oj$W4(r);
n&&n.$oj$q4(Math.floor((F.width-e)/2));
j._g.$oj$ANh();
n&&n.$oj$U4(F.y+Math.floor(F.height/2));
1==i.$oj$HyF?-1==i.$oj$ByF?i.$oj$JyF(n,F.width,o):i.$oj$KyF(i.$oj$ByF,n,e,"rgba(0,0,0,0.5)",o):2==i.$oj$HyF&&i.$oj$QyF(i.$oj$jyF,i.$oj$ByF,n,e,"rgba(0,0,0,0.5)",o);
};
h.$oj$qyF=function(){
this.$oj$DyF&&this.$oj$DyF.$oj$cBh();
};
h.$oj$JyF=function($,o,j){
var t=$&&$.$oj$ret(o);
j&&j.$oj$pBh();
j&&j.$oj$Hjh(t);
j&&j.$oj$vBh("red");
};
h.$oj$KyF=function($,o,t,h,i){
var F=j._g.$oj$ANh(),s=this.$oj$hBh();
function n($,h,i){
var n=o&&o.$oj$set(h,0,i);
n.x+=Math.round((t-n.width)/2);
if(14==h)for(;j._g.$oj$A(n)>=s.height-1;)n=j._g.$oj$E(n,1,2);
j._cls.$oj$vUy.$oj$mUy($,F,h,n);
}
if(-2==$){
var r=o&&o.$oj$iet(t,6),e=o&&o.$oj$iet(t,-6);
i&&i.$oj$aUh(function($){
$.fillStyle=h;
j._cls.$oj$vUy.$oj$mUy($,F,3,r);
j._cls.$oj$vUy.$oj$mUy($,F,3,e);
$.fillStyle=j._g.$oj$ONh(0,1);
n($,12,4);
n($,13,-4);
});
}else{
if(32==$)for(;;){
var u=o&&o.$oj$set(14,0,-4);
if(j._g.$oj$A(u)<s.height-1)break;
o&&o.$oj$W4((o&&o.$oj$X4())-1);
}
var c=o&&o.$oj$ret(t);
i&&i.$oj$aUh(function(o){
o.fillStyle=h;
j._cls.$oj$vUy.$oj$mUy(o,F,3,c);
o.fillStyle=j._g.$oj$ONh(0,1);
var t=j._cls.$oj$B4.$oj$K4($),i=j._cls.$oj$B4.$oj$Y4($);
0!=t&&n(o,t,i);
});
}
};
h.$oj$QyF=function($,o,t,h,i,F){
-1==o&&(o=34);
var s=Math.abs($),n=t&&t.$oj$ret(h),r=j._g.$oj$ANh();
F&&F.$oj$aUh(function(h){
h.fillStyle=i;
j._cls.$oj$vUy.$oj$mUy(h,r,3,n);
h.fillStyle=j._g.$oj$ONh(0,1);
var F=0>$?23:25,e=0,u=t&&t.$oj$net(F),c=0>$?2:3,v=s*u+(s-1)*c;
e=Math.round((n.width-v)/2);
for(var a=0;s>a;a++){
var l=j._cls.$oj$B4.$oj$J4(o,$,a%7),f=t&&t.$oj$set(F,e,l);
j._cls.$oj$vUy.$oj$mUy(h,r,F,f);
e+=f.width+c;
}
});
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$TyF:1
},{
$oj$UAh:1
},function(o,h){
function i(){
j._cls.$oj$UAh.call(this);
this.$oj$GyF=this.$oj$YyF=this.$oj$ZyF=this.$oj$ebF=this.$oj$tbF=this.$oj$nbF=this.$oj$rbF=this.$oj$ibF=this.$oj$sbF=this.$oj$obF=this.$oj$ubF=this.$oj$abF=this.$oj$fbF=this.$oj$lbF=this.$oj$cbF=null;
this.$oj$hbF=this.$oj$pbF=this.$oj$dbF=this.$oj$vbF=this.$oj$mbF=this.$oj$gbF=0;
this.$oj$ybF=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
h.$oj$bbF=function(){
return this.$oj$abF;
};
h.$oj$OyF=function(){
return this.$oj$ebF;
};
h.$oj$byF=function(){
return this.$oj$dbF;
};
h.$oj$w4=function(){
return this.$oj$vbF;
};
h.$oj$E4=function(){
return this.$oj$mbF;
};
h.$oj$wyF=function(){
return this.$oj$gbF;
};
o.$oj$VCh=function(){
return"_g2t";
};
h.$oj$xyF=function($){
var o,t,h=this;
if(h=i.$oj_super.prototype.init.call(this)){
var F=$&&$.$oj$byF();
h.$oj$abF=$;
h.$oj$dbF=F;
h.$oj$fbF={};
h.$oj$GyF=[];
h.$oj$ebF=(o=new j._cls.$oj$MyF())&&o.$oj$jmF(F);
h.$oj$ebF&&h.$oj$ebF.$oj$zyF(10);
1==F&&(h.$oj$rbF=(t=new j._cls.$oj$OAh())&&t.$oj$IAh(45));
}
return h;
};
h.$oj$jjh=function(){
i.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
this.$oj$ebF&&this.$oj$ebF.$oj$aLh(j._g.$oj$E($,16,16));
};
h.$oj$JCh=function(){
var $,o=i.$oj_super.prototype.$oj$JCh.call(this);
o.setAttribute("role","button");
this.$oj$cbF=($=new j._cls.$oj$iOh())&&$.$oj$rOh(o,1,this);
this.$oj$lbF=t.create("div",{
"class":"_y2t"
});
this.$oj$YyF=t.create("div",{
"class":"_b2t"
});
this.$oj$tbF=t.create("div",{
"class":"_w2t"
});
o.appendChild(this.$oj$lbF);
o.appendChild(this.$oj$YyF);
o.appendChild(this.$oj$tbF);
return o;
};
h.$oj$KCh=function(){
var o,t,h,F,s=this;
i.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$bCh(this.$oj$ebF);
var n=this.$oj$fbF,r=void 0,e=void 0;
function u($,o){
var t,h,i=(t=new j._cls.$oj$wbF())&&t.$oj$iUy(s);
i&&i.$oj$Gct($);
i&&i.$oj$EbF(!0);
i&&i.$oj$SbF(!0);
i&&i.$oj$OCh(s,{
$oj$xbF:1
});
var F=(h=new j._cls.$oj$OAh())&&h.$oj$IAh(o);
i&&i.$oj$bCh(F);
n[$]=i;
return i;
}
function c($){
var o=j._cls.$oj$OAh.$oj$jAh($);
-1==$&&(o=46);
return u($,o);
}
function v($){
var o=j._cls.$oj$OAh.$oj$FAh($);
return u($,o);
}
s.$oj$ibF=j._cls.$oj$RCh.$oj$QCh("_x2t");
s.$oj$obF=j._cls.$oj$RCh.$oj$QCh("_k2t");
s.$oj$sbF=j._cls.$oj$RCh.$oj$QCh("_j2t");
if(1==s.$oj$dbF){
s.$oj$nbF=j._cls.$oj$UvF.$oj$RvF([[c(34),c(28),c(30),c(32)],[c(22),c(-1),c(26),c(24)]]);
(o=s.$oj$nbF&&s.$oj$nbF.$oj$XvF(2))&&o.$oj$WvF(2,0);
s.$oj$nbF&&s.$oj$nbF.$oj$ROh(j._g.$oj$l(-1,-1));
s.$oj$obF&&s.$oj$obF.$oj$bCh(s.$oj$nbF);
r=[34,22];
e=[32,24];
}else if(2==s.$oj$dbF){
var a=v(0),l=(t=new j._cls.$oj$RCh())&&t.init(),f=(h=new j._cls.$oj$RCh())&&h.init();
l&&l.$oj$Eht(!0);
f&&f.$oj$Eht(!0);
s.$oj$nbF=j._cls.$oj$UvF.$oj$RvF([[v(5),v(6),v(7)],[l,v(1),v(2),v(3),v(4)],[f,v(-1),v(-2),v(-3),v(-4)],[v(-5),v(-6),v(-7)]]);
r=[5,-5];
e=[7,4,-4,-7];
s.$oj$nbF&&s.$oj$nbF.$oj$ROh(j._g.$oj$l(-1,-1));
s.$oj$obF&&s.$oj$obF.$oj$bCh(s.$oj$nbF);
s.$oj$obF&&s.$oj$obF.$oj$bCh(a);
}
$.each(r,function($){
var o;
(o=n[$])&&o.$oj$EbF(!1);
});
$.each(e,function($){
var o;
(o=n[$])&&o.$oj$SbF(!1);
});
s.$oj$obF&&s.$oj$obF.$oj$bCh(s.$oj$sbF);
s.$oj$obF&&s.$oj$obF.$oj$bCh(s.$oj$ibF);
s.$oj$ZyF=j._cls.$oj$RCh.$oj$QCh("_q2t");
var d=(F=new j._cls.$oj$OAh())&&F.$oj$IAh(47);
s.$oj$ZyF&&s.$oj$ZyF.$oj$bCh(d);
s.$oj$bCh(s.$oj$ZyF);
s.$oj$pOh();
};
h.$oj$pOh=function(){
i.$oj_super.prototype.$oj$pOh.call(this);
this.$oj$fkh("_z2t",this.$oj$ybF);
this.$oj$fkh("pressed",this.$oj$U2()&&this.$oj$cbF&&this.$oj$cbF.$oj$uOh());
this.$oj$TbF();
};
h.$oj$TbF=function(){
var $=this;
if(!this.$oj$lbF)return;
var o=this.$oj$U2();
function h($,h){
t.empty($);
h&&o&&$.appendChild(j._g.$oj$vNh(h));
}
if(1==$.$oj$dbF){
var i=$.$oj$vbF;
if(-1==i){
$.$oj$ebF&&$.$oj$ebF.$oj$Qkh();
$.$oj$bCh($.$oj$rbF);
}else{
$.$oj$rbF&&$.$oj$rbF.$oj$Qkh();
$.$oj$bCh($.$oj$ebF);
$.$oj$ebF&&$.$oj$ebF.$oj$vnt(i);
}
h($.$oj$lbF,$.$oj$abF&&$.$oj$abF.$oj$CyF(i,!0));
}else if(2==$.$oj$dbF){
var F=$.$oj$mbF;
$.$oj$ebF&&$.$oj$ebF.$oj$vnt($.$oj$vbF);
$.$oj$ebF&&$.$oj$ebF.$oj$mnt(F);
var s=$.$oj$abF&&$.$oj$abF.$oj$LyF(F),n=$.$oj$abF&&$.$oj$abF.$oj$AyF(F);
if(0==$.$oj$gbF){
h($.$oj$lbF,s);
h($.$oj$YyF,n);
}else 1==$.$oj$gbF?h($.$oj$lbF,s):2==$.$oj$gbF&&h($.$oj$lbF,n);
}
$.$oj$ebF&&$.$oj$ebF.$oj$Eht(!o);
$.$oj$rbF&&$.$oj$rbF.$oj$Eht(!o);
$.$oj$ZyF&&$.$oj$ZyF.$oj$Eht(!o);
};
h.$oj$xbF=function($){
this.$oj$NbF(!0);
this.$oj$abF&&this.$oj$abF.$oj$NyF($&&$.$oj$xn());
};
h.$oj$NbF=function($){
var o=this;
if(!this.$oj$ybF)return;
this.$oj$ybF=!1;
var j=this.$oj$ubF;
this.$oj$ubF=null;
function h(){
j&&j.$oj$HCh();
}
var i=o.$oj$obF&&o.$oj$obF.$oj$NCh(),F=o.$oj$obF&&o.$oj$obF.$oj$NCh();
t.stop(o.$oj$hbF);
$?o.$oj$hbF=t.animate(250,function($){
var o=t.lerp(1,0,t.easeOut($));
t.transform(i,0,0,1,1,o);
t.transform(F,0,0,1,1,o);
},h):h&&h();
o.$oj$pOh();
};
h.$oj$CbF=function(){
var $,o=this.$oj$NCh(),t=o.getBoundingClientRect(),h=j._g.$oj$c();
1==this.$oj$dbF?h=j._g.$oj$l(300,188):2==this.$oj$dbF&&(h=j._g.$oj$l(240,220));
this.$oj$obF&&this.$oj$obF.$oj$aLh(j._g.$oj$m(t.left+t.width+2,t.top+Math.round((t.height-h.height)/2),h.width,h.height));
var i=this.$oj$obF&&this.$oj$obF.$oj$hBh(),F=j._g.$oj$y(i),s=j._g.$oj$y(i);
F.height-=44;
s.height=22;
j._g.$oj$mt(s,i);
j._g.$oj$U(F,i);
this.$oj$sbF&&this.$oj$sbF.$oj$aLh(s);
this.$oj$nbF&&this.$oj$nbF.$oj$aLh(F);
var n=Math.round((h.height-34)/2);
this.$oj$ibF&&this.$oj$ibF.$oj$aLh(j._g.$oj$m(-16,n,16,34));
if(2==this.$oj$dbF){
this.$oj$nbF&&this.$oj$nbF.$oj$bFh();
var r=($=this.$oj$nbF&&this.$oj$nbF.$oj$qgF(1,0))&&$.$oj$C4(),e=r?r.width:0,u=this.$oj$nbF&&this.$oj$nbF.$oj$PdF(1),c=this.$oj$nbF&&this.$oj$nbF.$oj$PdF(2),v=j._g.$oj$M(u,c);
v.y+=22;
v.width=e;
var a=this.$oj$fbF[0];
a&&a.$oj$aLh(v);
a&&a.$oj$EbF(!1);
}
};
h.$oj$kbF=function(o,h){
h?this.$oj$GyF.push(o):this.$oj$GyF=$.without(this.$oj$GyF,o);
var i=null;
if(this.$oj$GyF.length){
var F=$.last(this.$oj$GyF);
1==this.$oj$dbF?i=this.$oj$abF&&this.$oj$abF.$oj$CyF(F,!1):2==this.$oj$dbF&&(i=this.$oj$abF&&this.$oj$abF.$oj$kyF(F));
}
var s=this.$oj$sbF&&this.$oj$sbF.$oj$dMh();
t.empty(s);
i&&s.appendChild(j._g.$oj$vNh(i));
};
h.$oj$fOh=function(){
var $=this;
if(!this.$oj$U2())return!1;
this.$oj$pbF=Date.now();
function o(){
$.$oj$NbF(!0);
}
if($.$oj$hbF){
t.stop($.$oj$hbF);
$.$oj$hbF=0;
}
$.$oj$ubF=j._cls.$oj$vCh.$oj$dCh($.$oj$obF,o);
$.$oj$CbF();
t.transform($.$oj$obF&&$.$oj$obF.$oj$NCh(),0,0,1,1,1);
($.$oj$ubF&&$.$oj$ubF.$oj$TCh()).opacity=String(0);
$.$oj$ybF=!0;
$.$oj$pOh();
return!0;
};
h.$oj$dOh=function(){
this.$oj$pOh();
};
h.$oj$vOh=function(){
var o=Date.now()-this.$oj$pbF;
if(o>250&&(!this.$oj$cbF||!this.$oj$cbF.$oj$KUh())){
this.$oj$GyF.length&&this.$oj$abF&&this.$oj$abF.$oj$NyF($.last(this.$oj$GyF));
this.$oj$NbF(!0);
}
};
h.$oj$rgF=function($,o,j){
if(this.$oj$vbF==$&&this.$oj$mbF==o&&this.$oj$gbF==j)return;
this.$oj$vbF=$;
this.$oj$mbF=o;
this.$oj$gbF=j;
this.$oj$TbF();
};
h.$oj$XmF=function(){
if(this.$oj$ybF){
this.$oj$NbF(!0);
return!0;
}
return!1;
};
h.$oj$pmt=function(){};
return i;
});
j._registerClass({
$oj$wbF:1
},{
$oj$YCh:1
},function($,o){
function h(){
j._cls.$oj$YCh.call(this);
this.$oj$LbF=null;
this.$oj$AbF=0;
this.$oj$ObF=this.$oj$MbF=!1;
this.constructor=h;
this.$oj_id=++j._id;
}
o.$oj$KFh=function(){
return this.$oj$LbF;
};
o.$oj$EbF=function($){
var o=this.$oj$ObF;
if(o!==$){
this.$oj$ObF=$;
this.$oj$DbF(o);
}
};
o.$oj$PbF=function(){
return this.$oj$ObF;
};
o.$oj$SbF=function($){
var o=this.$oj$MbF;
if(o!==$){
this.$oj$MbF=$;
this.$oj$DbF(o);
}
};
o.$oj$HbF=function(){
return this.$oj$MbF;
};
o.$oj$Gct=function($){
this.$oj$AbF=$;
};
o.$oj$xn=function(){
return this.$oj$AbF;
};
$.$oj$VCh=function(){
return"_e3t";
};
o.$oj$iUy=function($){
var o=this;
(o=h.$oj_super.prototype.init.call(this))&&(o.$oj$LbF=$);
return o;
};
o.$oj$DbF=function(){
var $=this.$oj$dMh().style;
$.borderLeftWidth=this.$oj$ObF?"1px":"0";
$.borderRightWidth=this.$oj$MbF?"1px":"0";
};
o.$oj$SOh=function(){
this.$oj$PIh("hover");
h.$oj_super.prototype.$oj$SOh.call(this);
};
o.$oj$JCh=function(){
var $=this,o=h.$oj_super.prototype.$oj$JCh.call(this),j=t.create("div",{
"class":"_t3t"
});
t.listen(o,"mouseenter",function(){
$.$oj$hCh("hover");
$.$oj$LbF&&$.$oj$LbF.$oj$kbF($.$oj$AbF,!0);
});
t.listen(o,"mouseleave",function(){
$.$oj$PIh("hover");
$.$oj$LbF&&$.$oj$LbF.$oj$kbF($.$oj$AbF,!1);
});
o.appendChild(j);
return j;
};
return h;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$BbF:1
},{
$oj$RCh:1
},function($,o){
function t(){
j._cls.$oj$RCh.call(this);
this.constructor=t;
this.$oj_id=++j._id;
}
o.$oj$rgF=function(){};
o.$oj$q2=function(){};
o.$oj$pmt=function(){};
return t;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$OgF:1
},{
$oj$UAh:1
},function($,o){
function t(){
j._cls.$oj$UAh.call(this);
this.$oj$jbF=this.$oj$FbF=this.$oj$IbF=this.$oj$qbF=null;
this.$oj$RbF=!1;
this.constructor=t;
this.$oj_id=++j._id;
}
o.$oj$CdF=function(){
return this.$oj$IbF;
};
o.$oj$kdF=function(){
return this.$oj$qbF;
};
o.$oj$AgF=function(){
return this.$oj$RbF;
};
o.$oj$mjh=function($){
this.$oj$FbF=$;
};
o.$oj$gjh=function(){
return this.$oj$FbF;
};
$.$oj$VCh=function(){
return"_n3t";
};
o.init=function(){
var $,o,h=this;
if(h=t.$oj_super.prototype.init.call(this)){
h.$oj$qbF=($=new j._cls.$oj$NBh())&&$.init();
h.$oj$IbF=(o=new j._cls.$oj$NBh())&&o.init();
h.$oj$qbF&&h.$oj$qbF.$oj$OCh(h,{
$oj$MCh:1
});
h.$oj$qbF&&h.$oj$qbF.$oj$VBh(10);
h.$oj$qbF&&h.$oj$qbF.$oj$qBh(!1);
h.$oj$IbF&&h.$oj$IbF.$oj$OCh(h,{
$oj$MCh:1
});
h.$oj$IbF&&h.$oj$IbF.$oj$VBh(5);
h.$oj$IbF&&h.$oj$IbF.$oj$qBh(!0);
h.$oj$jbF=j._cls.$oj$UvF.$oj$RvF([[h.$oj$IbF,h.$oj$qbF]]);
h.$oj$jbF&&h.$oj$jbF.$oj$ROh(j._g.$oj$hNh()?j._g.$oj$l(2,2):j._g.$oj$l(-1,-1));
h.$oj$bCh(h.$oj$jbF);
}
return h;
};
o.$oj$jjh=function(){
t.$oj_super.prototype.$oj$jjh.call(this);
this.$oj$jbF&&this.$oj$jbF.$oj$aLh(this.$oj$hBh());
};
o.$oj$UbF=function($,o){
if(this.$oj$RbF!=$){
this.$oj$RbF=$;
this.$oj$IbF&&this.$oj$IbF.$oj$qBh(!$);
this.$oj$qbF&&this.$oj$qbF.$oj$qBh($);
o&&this.$oj$SOh();
}
};
o.$oj$MCh=function($){
$==this.$oj$qbF?this.$oj$UbF(!0,!0):this.$oj$UbF(!1,!0);
};
o.$oj$PgF=function($){
this.$oj$UbF($,!1);
};
return t;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$qvF:1
},{
$oj$RCh:1
},function($,o){
function t(){
j._cls.$oj$RCh.call(this);
this.$oj$zbF=this.$oj$WbF=null;
this.$oj$XbF=0;
this.constructor=t;
this.$oj_id=++j._id;
}
o.$oj$nCh=function($){
this.$oj$WbF=$;
};
o.$oj$rCh=function(){
return this.$oj$WbF;
};
o.$oj$djh=function(){
return this.$oj$XbF;
};
$.$oj$VCh=function(){
return"_r3t";
};
o.$oj$jjh=function(){
t.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$zbF?this.$oj$zbF.length:0;
if(!$)return;
for(var o=this.$oj$hBh(),h=o.height>o.width,i=[],F=0;$>F;F++)i[F]=j._g.$oj$g();
h?j._g.$oj$G(i,o,null):j._g.$oj$Q(i,o,null);
for(var s=0;$>s;s++){
var n=this.$oj$zbF[s];
n&&n.$oj$aLh(i[s]);
n&&n.$oj$VbF(h);
}
};
o.$oj$JbF=function($,o){
if(this.$oj$XbF!=$){
for(var j,t=this.$oj$zbF,h=0,i=t?t.length:0;i>h;h++){
j=t[h];
j&&j.$oj$qBh((j&&j.$oj$xn())==$);
}
this.$oj$XbF=$;
o&&this.$oj$WbF&&this.$oj$WbF.$oj$nmF(this,$);
}
};
o.$oj$KbF=function($){
this.$oj$JbF($&&$.$oj$xn(),!0);
};
o.$oj$JpF=function($,o,t){
var h,i=(h=new j._cls.$oj$GbF())&&h.$oj$QbF($,t);
i&&i.$oj$rjh(o);
i&&i.$oj$OCh(this,{
$oj$KbF:1
});
this.$oj$zbF||(this.$oj$zbF=[]);
this.$oj$zbF.push(i);
this.$oj$bCh(i);
};
o.$oj$Sjh=function($){
for(var o,j=this.$oj$zbF,t=0,h=j?j.length:0;h>t;t++){
o=j[t];
if((o&&o.$oj$xn())==$)return o;
}
return null;
};
o.$oj$smF=function($){
this.$oj$XbF=0/0;
this.$oj$JbF($,!1);
};
return t;
});
j._registerClass({
$oj$GbF:1
},{
$oj$YCh:1
},function($,o){
function h(){
j._cls.$oj$YCh.call(this);
this.$oj$YbF=this.$oj$ZbF=this.$oj$ewF=this.$oj$twF=this.$oj$nwF=null;
this.$oj$rwF=this.$oj$iwF=0;
this.$oj$swF=this.$oj$owF=!1;
this.constructor=h;
this.$oj_id=++j._id;
}
o.$oj$zft=function(){
return this.$oj$twF;
};
o.$oj$xn=function(){
return this.$oj$iwF;
};
o.$oj$HAh=function(){
return this.$oj$rwF;
};
o.$oj$uwF=function(){
return this.$oj$owF;
};
o.$oj$qBh=function($){
var o=this.$oj$swF;
if(o!==$){
this.$oj$swF=$;
this.$oj$pOh(o);
}
};
o.$oj$RBh=function(){
return this.$oj$swF;
};
$.$oj$VCh=function(){
return"_i3t";
};
o.$oj$QbF=function($,o){
var j=this;
if(j=h.$oj_super.prototype.init.call(this)){
j.$oj$twF=$;
j.$oj$iwF=o;
}
return j;
};
o.$oj$pOh=function(){
h.$oj_super.prototype.$oj$pOh.call(this);
this.$oj$fkh("selected",this.$oj$RBh());
this.$oj$ZBh();
};
o.$oj$JCh=function(){
var $=h.$oj_super.prototype.$oj$JCh.call(this),o=t.create("div",{
"class":"_s3t"
}),j=t.create("div",{
"class":"_o3t"
}),i=t.create("div",{
"class":"_u3t"
});
$.setAttribute("role","button");
$.appendChild(i);
i.appendChild(j);
i.appendChild(o);
this.$oj$YbF=i;
this.$oj$nwF=j;
this.$oj$ZbF=o;
this.$oj$nwF.textContent=this.$oj$twF;
return o;
};
o.$oj$ZBh=function(){
var $=!1;
$=j._g.$oj$hNh()?!0:this.$oj$RBh()&&this.$oj$U2();
this.$oj$ewF&&this.$oj$ewF.$oj$RAh($);
this.$oj$ewF&&this.$oj$ewF.$oj$q2(this.$oj$U2());
};
o.$oj$rjh=function($){
var o;
if(this.$oj$rwF!=$){
this.$oj$rwF=$;
this.$oj$ewF&&this.$oj$ewF.$oj$Qkh();
this.$oj$ewF=(o=new j._cls.$oj$OAh())&&o.$oj$IAh($);
this.$oj$bCh(this.$oj$ewF);
this.$oj$ZBh();
}
};
o.$oj$VbF=function($){
this.$oj$owF!=$&&(this.$oj$owF=$);
};
return h;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$BmF:1
},{
$oj$RCh:1
},function($,o){
function t(){
j._cls.$oj$RCh.call(this);
this.$oj$awF=this.$oj$fwF=null;
this.$oj$lwF=0;
this.constructor=t;
this.$oj_id=++j._id;
}
o.$oj$djh=function(){
return this.$oj$lwF;
};
$.$oj$VCh=function(){
return"_a3t";
};
o.$oj$jjh=function(){
t.$oj_super.prototype.$oj$jjh.call(this);
this.$oj$awF&&this.$oj$awF.$oj$aLh(this.$oj$hBh());
};
o.$oj$cwF=function($){
if(!this.$oj$Kkh())return;
if(this.$oj$awF==$&&(this.$oj$awF&&this.$oj$awF.$oj$Kkh())==this)return;
this.$oj$awF&&this.$oj$awF.$oj$Qkh();
this.$oj$awF=null;
if(!$)return;
this.$oj$awF=$;
this.$oj$bCh($);
$&&$.$oj$aLh(this.$oj$hBh());
};
o.$oj$ZpF=function($,o){
this.$oj$fwF||(this.$oj$fwF={});
if($){
$!=this.$oj$awF&&$&&$.$oj$Qkh();
this.$oj$fwF[o]=$;
o==this.$oj$lwF&&this.$oj$cwF($);
}else this.$oj$fwF[o]=null;
};
o.$oj$YpF=function(){
this.$oj$cwF(null);
this.$oj$fwF={};
};
o.$oj$smF=function($){
if(this.$oj$lwF!=$){
this.$oj$lwF=$;
var o=this.$oj$fwF?this.$oj$fwF[$]:null;
o&&this.$oj$cwF(o);
}
};
return t;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$jvF:1
},{
$oj$RCh:1
},function(o,t){
function h(){
j._cls.$oj$RCh.call(this);
this.$oj$hwF=this.$oj$pwF=this.$oj$dwF=this.$oj$vwF=this.$oj$mwF=this.$oj$gwF=this.$oj$ywF=this.$oj$bwF=this.$oj$wwF=this.$oj$EwF=this.$oj$SwF=null;
this.$oj$xwF=this.$oj$TwF=this.$oj$NwF=0;
this.$oj$CwF=!1;
this.constructor=h;
this.$oj_id=++j._id;
}
t.$oj$kwF=function(){
return this.$oj$xwF;
};
t.$oj$LwF=function(){
return j.makeCopy(this.$oj$ywF);
};
t.$oj$nCh=function($){
this.$oj$vwF=$;
};
t.$oj$rCh=function(){
return this.$oj$vwF;
};
t.init=function(){
var $,o,j,t,i=this;
if(i=h.$oj_super.prototype.init.call(this)){
i.$oj$hwF=[];
for(var F=0;14>F;F++)i.$oj$hwF[F]=[];
for(var s=1;12>=s;s++){
($=i.$oj$hwF[s][0])&&$.$oj$AwF(1);
(o=i.$oj$hwF[0][s])&&o.$oj$AwF(3);
(j=i.$oj$hwF[s][13])&&j.$oj$AwF(2);
(t=i.$oj$hwF[13][s])&&t.$oj$AwF(4);
}
i.$oj$NwF=-1;
i.$oj$TwF=-1;
}
return i;
};
t.$oj$KCh=function(){
var o,t,i,F,s,n,r,e=this;
h.$oj_super.prototype.$oj$KCh.call(this);
this.$oj$EwF=(o=new j._cls.$oj$iOh())&&o.$oj$rOh(this.$oj$NCh(),2,this);
this.$oj$dwF=(t=new j._cls.$oj$RCh())&&t.init();
this.$oj$mwF=j._cls.$oj$RCh.$oj$QCh("_f3t");
this.$oj$dwF&&this.$oj$dwF.$oj$bCh(this.$oj$mwF);
this.$oj$bCh(this.$oj$dwF);
for(var u=0;14>u;u++){
var c=j._cls.$oj$RCh.$oj$QCh("_l3t"),v=1+(u+1)%2;
(0==u||1==u)&&(v=1);
this.$oj$mwF&&this.$oj$mwF.$oj$bCh(c);
for(var a=0;14>a;a++){
var l=(i=new j._cls.$oj$OwF())&&i.init(),f=(a+1)%2;
(0==a||1==a)&&(f=0);
l&&l.$oj$MwF(v+f);
c&&c.$oj$bCh(l);
this.$oj$hwF[u][a]=l;
}
}
for(var d=this.$oj$hwF,g=1;12>=g;g++){
(F=d[g][0])&&F.$oj$AwF(1);
(s=d[0][g])&&s.$oj$AwF(3);
(n=d[g][13])&&n.$oj$AwF(2);
(r=d[13][g])&&r.$oj$AwF(4);
}
$.each([d[0][0],d[0][13],d[13][13],d[13][0]],function($){
$&&$.$oj$Gct(-1);
$&&$.$oj$MwF(0);
});
e.$oj$DwF();
};
t.$oj$jjh=function(){
h.$oj_super.prototype.$oj$jjh.call(this);
var $=this.$oj$hBh();
this.$oj$mwF&&this.$oj$mwF.$oj$aLh(j._g.$oj$q($,this.$oj$ywF));
};
t.$oj$DwF=function(){
var $,o=this,j=this.$oj$NwF,t=this.$oj$TwF;
function h($,o){
if(o>=0){
if($==o)return 2;
if($==o-1)return 3;
if($==o+1)return 1;
}
return 0;
}
for(var i=0;14>i;i++)for(var F=0;14>F;F++){
var s=h(i,j),n=h(F,t);
($=o.$oj$hwF[i][F])&&$.$oj$PwF(s,n);
}
};
t.$oj$HwF=function($,o){
if(this.$oj$TwF!=o||this.$oj$NwF!=$){
this.$oj$TwF=o;
this.$oj$NwF=$;
this.$oj$DwF();
this.$oj$vwF&&this.$oj$vwF.$oj$rmF(this);
}
};
t.$oj$BwF=function(){
if(!this.$oj$CwF)return;
for(var $=[],o=[],j=0;14>j;j++){
var t=this.$oj$hwF[j][j],h=(t&&t.$oj$NCh()).getBoundingClientRect();
$.push(h.top);
o.push(h.left);
}
this.$oj$bwF=$;
this.$oj$pwF=o;
};
t.$oj$jwF=function($){
var o=$.x,j=$.y,t=-1,h=-1,i=this.$oj$bwF.length,F=this.$oj$pwF.length;
for(t=0;i>t;t++)if(j<this.$oj$bwF[t]){
t--;
break;
}
for(h=0;F>h;h++)if(o<this.$oj$pwF[h]){
h--;
break;
}
(0==t||t>=13)&&(t=-1);
(0==h||h>=13)&&(h=-1);
this.$oj$HwF(t,h);
};
t.$oj$FwF=function(){
for(var $=0;14>$;$++)for(var o=0;14>o;o++){
var j=this.$oj$hwF[$][o],t=j&&j.$oj$xn(),h=j&&j.$oj$IwF(),i=null;
t>=0&&(i=h?this.$oj$qwF(h,t):this.$oj$RwF(t));
j&&j.$oj$wit(i);
}
};
t.$oj$UwF=function($,o){
if($>=0&&14>$&&o>=0&&14>o)return this.$oj$hwF[$][o];
return null;
};
t.$oj$zwF=function($,o){
if(0>o||o>=12)return null;
if(1==$)return this.$oj$UwF(this.$oj$NwF,o+1);
if(2==$)return this.$oj$UwF(this.$oj$NwF,12-o);
if(3==$)return this.$oj$UwF(o+1,this.$oj$TwF);
if(4==$)return this.$oj$UwF(12-o,this.$oj$TwF);
return null;
};
t.$oj$fOh=function($){
if(this.$oj$CwF){
this.$oj$BwF();
this.$oj$jwF($&&$.$oj$cOh());
}
return this.$oj$CwF;
};
t.$oj$dOh=function($){
if(!this.$oj$CwF)return;
this.$oj$jwF($&&$.$oj$cOh());
};
t.$oj$amF=function(o,j,t){
var h,i,F,s;
this.$oj$CwF=12==o.length;
this.$oj$fkh("_c3t",this.$oj$CwF);
this.$oj$CwF||this.$oj$HwF(-1,-1);
this.$oj$gwF=j;
this.$oj$SwF=t;
for(var n=0;12>n;n++)for(var r=o[n]||[],e=0;12>e;e++){
var u=this.$oj$hwF[n+1][e+1],c=r[e];
$.isNumber(c)?u&&u.$oj$Gct(c):u&&u.$oj$Gct(-1);
}
for(var v=0;12>v;v++){
var a=j[v],l=$.isNumber(a)?a:-1;
(h=this.$oj$hwF[0][v+1])&&h.$oj$Gct(l);
(i=this.$oj$hwF[13][v+1])&&i.$oj$Gct(l);
}
for(var f=0;12>f;f++){
var d=t[f],g=$.isNumber(d)?d:-1;
(F=this.$oj$hwF[f+1][0])&&F.$oj$Gct(g);
(s=this.$oj$hwF[f+1][13])&&s.$oj$Gct(g);
}
this.$oj$FwF();
};
t.$oj$GvF=function($){
this.$oj$wwF=$;
this.$oj$FwF();
};
t.$oj$qwF=function($,o){
var j=null;
1==$?j="P":2==$?j="R":3==$?j="I":4==$&&(j="RI");
return j?"*"+j+"*,,"+o+",,":null;
};
t.$oj$pmt=function(){
for(var $,o=0;14>o;o++)for(var j=0;14>j;j++)($=this.$oj$hwF[o][j])&&$.$oj$pmt();
};
t.$oj$RwF=function($){
return this.$oj$wwF[$]||null;
};
t.$oj$imF=function($,o,j){
var t=this.$oj$zwF($,o);
t&&t.$oj$WwF(j);
};
t.$oj$tmF=function($){
for(var o,j=[],t=0;12>t;t++){
var h=(o=this.$oj$zwF($,t))&&o.$oj$xn();
j.push(h);
}
return j;
};
t.$oj$emF=function($){
if(1==$||2==$){
if(this.$oj$NwF>0){
var o=this.$oj$SwF[this.$oj$NwF-1];
return this.$oj$qwF($,o);
}
}else if((3==$||4==$)&&this.$oj$TwF>0){
var j=this.$oj$gwF[this.$oj$TwF-1];
return this.$oj$qwF($,j);
}
return null;
};
t.$oj$JvF=function($){
if(this.$oj$xwF!=$){
this.$oj$xwF=$;
this.$oj$L4().fontSize=this.$oj$xwF+"px";
}
};
t.$oj$YvF=function(){
return this.$oj$NwF>=0;
};
t.$oj$ZvF=function(){
return this.$oj$TwF>=0;
};
t.$oj$KvF=function($){
if(!j._g.$oj$I(this.$oj$ywF,$)){
this.$oj$ywF=$;
this.$oj$Ijh();
}
};
return h;
});
j._registerClass({
$oj$OwF:1
},{
$oj$RCh:1
},function($,o){
function h(){
j._cls.$oj$RCh.call(this);
this.$oj$XwF=null;
this.$oj$VwF=this.$oj$JwF=this.$oj$KwF=this.$oj$QwF=this.$oj$GwF=0;
this.constructor=h;
this.$oj_id=++j._id;
}
o.$oj$Qet=function(){
return this.$oj$XwF;
};
o.$oj$AwF=function($){
this.$oj$KwF=$;
};
o.$oj$IwF=function(){
return this.$oj$KwF;
};
o.$oj$Gct=function($){
this.$oj$GwF=$;
};
o.$oj$xn=function(){
return this.$oj$GwF;
};
o.$oj$MwF=function($){
this.$oj$QwF=$;
};
o.$oj$YwF=function(){
return this.$oj$QwF;
};
o.$oj$VBh=function($){
this.$oj$JwF=$;
};
o.$oj$JBh=function(){
return this.$oj$JwF;
};
$.$oj$VCh=function(){
return"_h3t";
};
o.$oj$JCh=function(){
var $=h.$oj_super.prototype.$oj$JCh.call(this),o=t.create("div",{
"class":"_p3t"
});
$.appendChild(o);
return o;
};
o.$oj$wit=function($){
if(this.$oj$XwF!=$){
var o=this.$oj$dMh();
t.empty(o);
$?o.appendChild(j._g.$oj$vNh($)):o.innerHTML="&nbsp;";
this.$oj$XwF=$;
}
};
o.$oj$pmt=function(){
this.$oj$VwF&&clearTimeout(this.$oj$VwF);
this.$oj$VwF=0;
this.$oj$fkh("_d3t",!1);
};
o.$oj$WwF=function($){
var o=this;
this.$oj$fkh("_d3t",!0);
this.$oj$dMh();
this.$oj$VwF&&clearTimeout(this.$oj$VwF);
this.$oj$VwF=setTimeout(function(){
o.$oj$fkh("_d3t",!1);
},1e3*$);
};
o.$oj$PwF=function($,o){
var t=this.$oj$L4(),h=this.$oj$QwF,i=j._g.$oj$ONh(12566415,1),F=h>0?j._g.$oj$ONh(12632256,1):null,s=h>1?j._g.$oj$ONh(0,.025*(h-1)):null,n=2==$||2==o;
function r($){
return $?i:F;
}
(2==$||2==o)&&(s=3==h?j._g.$oj$ONh(14671616,72/255):2==h?j._g.$oj$ONh(15790080,67/255):j._g.$oj$ONh(16776960,63/255));
t.border=F?"1px solid "+F:"";
t.borderTopColor=r(n||1==$);
t.borderBottomColor=r(n||3==$);
t.borderLeftColor=r(n||1==o);
t.borderRightColor=r(n||3==o);
t.backgroundColor=s;
};
return h;
});
}();
}).call(this);