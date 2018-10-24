/*! @license

(c) 2000-2018 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

Includes parts of:

- crypto-js <https://github.com/brix/crypto-js/>
  Copyright (c) 2009-2013 Jeff Mott
  Copyright (c) 2013-2016 Evan Vosberg
  MIT license, http://www.opensource.org/licenses/mit-license.php

*/
(function(){
var $=_musictheory_net_("_"),t=(_musictheory_net_("namespace"),_musictheory_net_("require")),o=_musictheory_net_("oj"),j=_musictheory_net_("$oj_oj");
!function(){
"use strict";
j._registerClass({
$oj$q7:1
},null,function($,t){
function o(){
this.$oj$R7=this.$oj$U7=null;
this.$oj$z7=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$W7=function(){
return this.$oj$U7;
};
t.$oj$X7=function(){
return this.$oj$R7;
};
t.$oj$xn=function(){
return this.$oj$z7;
};
function i($){
var t=[[15,0],[25,1],[35,1],[45,0],[55,0],[65,1],[75,2],[65,4],[75,4],[15,4],[25,4],[35,4],[16,7],[26,7],[35,7],[46,7],[56,7],[16,8],[26,8],[35,8],[46,8],[56,8],[15,1],[25,2],[34,0],[45,1],[55,1],[55,0],[64,0],[74,0],[75,2],[74,4],[15,4],[25,4],[34,4],[45,4],[25,7],[35,7],[46,7],[55,7],[65,7],[25,8],[35,8],[46,8],[55,8],[65,8],[45,13],[64,9],[64,10],[64,11],[64,12],[34,3],[0,0],[0,0],[0,0],[26,7],[66,7],[35,0],[34,0],[34,1],[65,0],[64,0],[64,1],[34,1],[35,1],[35,0],[64,1],[65,1],[65,0],[15,5],[25,6],[35,6],[45,5],[55,4],[65,6],[75,8],[15,6],[25,8],[34,5],[34,16],[45,6],[55,6],[55,4],[64,5],[74,4],[75,7],[65,0],[75,0],[15,0],[25,0],[35,0],[74,0],[15,0],[25,0],[34,0],[45,0],[16,2],[26,2],[35,2],[46,2],[56,2],[25,2],[35,2],[46,2],[55,2],[65,2],[55,3],[55,15],[55,3],[55,15],[64,0]][$];
if(!t)return null;
return{
interval:t[0],
chord:t[1]
};
}
$.$oj$V7=function($){
var t,o,n,s=i($);
if(!s)return null;
var r=s.interval,e=s.chord;
if(r>=0&&e>=0){
var c=(t=new j._cls.$oj$K7())&&t.$oj$J7(r),u=(o=new j._cls.$oj$Q7())&&o.$oj$J7(e);
return(n=this.alloc())&&n.$oj$G7($,c,u);
}
return null;
};
t.$oj$G7=function($,t,j){
var i=this;
if(i=o.$oj_super.prototype.init.call(this)){
i.$oj$z7=$;
i.$oj$U7=t;
i.$oj$R7=j;
}
return i;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Q7:1
},null,function($,t){
function o(){
this.$oj$Y7=null;
this.$oj$Z7=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$e2=function(){
return this.$oj$Y7;
};
t.$oj$xn=function(){
return this.$oj$Z7;
};
$.$oj$t2=function($){
var t=$>=0&&3>=$;
if(t||10==$||13==$)return 3;
return 4;
};
$.$oj$n2=function($){
var t;
return(t=this.alloc())&&t.$oj$J7($);
};
t.$oj$r2=function($,t){
var j=this;
if(j=o.$oj_super.prototype.init.call(this)){
j.$oj$Z7=$;
j.$oj$Y7=t.sort(function($,t){
return($&&$.$oj$bn())-(t&&t.$oj$bn());
});
}
return j;
};
t.$oj$J7=function($){
var t=this,o=[];
function i($,t){
var i,n=(i=new j._cls.$oj$K7())&&i.$oj$i2($,t);
o.push(n);
}
switch($){
case 0:
i(0,3);
i(0,5);
break;

case 1:
i(-1,3);
i(0,5);
break;

case 2:
i(-1,3);
i(-2,5);
break;

case 3:
i(0,3);
i(1,5);
break;

case 4:
i(0,3);
i(0,5);
i(-1,7);
break;

case 5:
i(0,3);
i(0,5);
i(0,7);
break;

case 6:
i(-1,3);
i(0,5);
i(-1,7);
break;

case 7:
i(-1,3);
i(-2,5);
i(-2,7);
break;

case 8:
i(-1,3);
i(-2,5);
i(-1,7);
break;

case 9:
i(0,3);
i(0,5);
i(1,6);
break;

case 10:
i(0,3);
i(1,6);
break;

case 11:
i(0,3);
i(1,4);
i(1,6);
break;

case 12:
i(0,3);
i(2,4);
i(1,6);
break;

case 13:
i(-1,3);
i(-1,6);
break;

case 14:
i(-1,3);
i(0,5);
i(0,7);
break;

case 15:
i(0,3);
i(1,5);
i(-1,7);
break;

case 16:
i(0,3);
i(1,5);
i(0,7);
break;

case 17:
i(0,2);
i(0,5);
break;

case 18:
i(0,4);
i(0,5);
break;

case 19:
i(0,4);
i(0,5);
i(-1,7);
break;

case-1:
case 20:}
return t.$oj$r2($,o);
};
t.$oj$s2=function($){
return this.$oj$r2(-1,$);
};
t.copy=function(){
var $,t;
return-1==this.$oj$Z7?($=new j._cls.$oj$Q7())&&$.$oj$s2(this.$oj$Y7):(t=new j._cls.$oj$Q7())&&t.$oj$J7(this.$oj$Z7);
};
t.isEqual_=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$Q7))return!1;
if(-1!=this.$oj$Z7&&($&&$.$oj$xn())==this.$oj$Z7)return!0;
var t=this.$oj$Y7.length,o=$&&$.$oj$e2();
if(t==o.length){
for(var i=!0,n=0;t>n;n++){
var s=this.$oj$Y7[n],r=o[n];
if(!s||!s.isEqual_(r)){
i=!1;
break;
}
}
return i;
}
return!1;
};
t.$oj$o2=function($){
var t=this.$oj$Z7,o=$&&$.$oj$xn();
if(t==o)return!0;
var j=!1;
function i($,i){
t==$&&o==i&&(j=!0);
t==i&&o==$&&(j=!0);
}
i(17,18);
return j;
};
t.$oj$un=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$Q7))return!1;
if(-1!=this.$oj$Z7&&($&&$.$oj$xn())==this.$oj$Z7)return!0;
var t=this.$oj$Y7.length,o=$&&$.$oj$e2();
if(t==o.length){
for(var i=!0,n=0;t>n;n++){
var s=this.$oj$Y7[n],r=o[n];
if(!s||!s.$oj$un(r)){
i=!1;
break;
}
}
return i;
}
return!1;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$u2:1
},null,function(t,o){
function i(){
this.$oj$a2=this.$oj$f2=null;
this.$oj$l2=this.$oj$c2=0;
this.$oj$h2=this.$oj$p2=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$d2=function(){
return this.$oj$l2;
};
o.$oj$v2=function(){
return this.$oj$f2;
};
o.$oj$m2=function(){
return this.$oj$a2;
};
o.$oj$g2=function(){
return this.$oj$p2;
};
o.$oj$y2=function(){
return this.$oj$h2;
};
o.$oj$b2=function(){
return this.$oj$c2;
};
t.$oj$w2=function(){
return[0,3,1,4,7,5,8,9,2];
};
t.$oj$E2=function($){
var t;
return(t=this.alloc())&&t.$oj$S2($);
};
o.$oj$S2=function($){
var t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$l2=$;
t.$oj$x2($);
if(!t.$oj$f2){
t=null;
return null;
}
}
return t;
};
o.$oj$x2=function($){
var t,o=this;
function i($){
return 12*($+1);
}
function n($){
return 0+i($);
}
function s($){
return 2+i($);
}
function r($){
return 4+i($);
}
function e($){
return 7+i($);
}
function c($){
return 9+i($);
}
function u($){
return 11+i($);
}
function h($,t,o){
var i;
return(i=new j._cls.$oj$N2())&&i.$oj$T2($,t,o,0);
}
function a($,t){
var o;
return(o=new j._cls.$oj$k2())&&o.$oj$C2($,t);
}
if(0==$){
o.$oj$f2=[h(r(4),1,0),h(u(3),2,.1),h(e(3),3,.25),h(s(3),4,.5),h(c(2),5,.75),h(r(2),6,1)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(9,!1),a(12,!0),a(15,!1),a(17,!1)];
}else if(1==$){
o.$oj$f2=[h(e(2),5,.4),h(s(2),6,.6),h(c(1),7,.8),h(r(1),8,1)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(9,!1),a(12,!0),a(15,!1),a(17,!1)];
}else if(2==$){
o.$oj$f2=[h(r(5),1,0),h(c(4),1,0),h(s(4),2,.25),h(e(3),2,.5)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(10,!1),a(12,!0),a(15,!1),a(17,!1)];
o.$oj$p2=!0;
}else if(3==$){
o.$oj$f2=[h(r(4),1,0),h(u(3),2,.1),h(e(3),3,.25),h(s(3),4,.5),h(c(2),5,.75),h(r(2),6,1),h(u(1),7,1)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(9,!1),a(12,!0),a(15,!1),a(17,!1)];
}else if(4==$){
o.$oj$f2=[h(e(2),5,.4),h(s(2),6,.6),h(c(1),7,.8),h(r(1),8,1),h(u(0),9,1)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(9,!1),a(12,!0),a(15,!1),a(17,!1)];
}else if(5==$){
o.$oj$f2=[h(e(4),2,.3),h(n(4),2,.2),h(r(4),1,.1),h(c(4),1,0)];
o.$oj$a2=[a(5,!1),a(7,!1),a(10,!1),a(12,!0),a(15,!1)];
}else if(7==$){
o.$oj$f2=[h(n(3),4,.2),h(e(2),5,.4),h(s(2),6,.6),h(c(1),7,.8),h(r(1),8,1),h(u(0),9,1)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(9,!1),a(12,!0)];
}else if(8==$){
o.$oj$f2=[h(c(4),1,0),h(r(4),1,.1),h(n(4),2,.2),h(e(4),1,.3)];
o.$oj$a2=[a(5,!1),a(7,!1),a(10,!1),a(12,!0),a(15,!1)];
}else if(9==$){
o.$oj$f2=[h(s(4),1,0),h(u(3),2,.1),h(e(3),3,.25),h(s(3),4,.5),(t=new j._cls.$oj$N2())&&t.$oj$T2(e(4),1,0,5)];
o.$oj$a2=[a(3,!1),a(5,!1),a(7,!1),a(10,!1),a(12,!0),a(15,!1),a(17,!1)];
o.$oj$h2=!0;
o.$oj$c2=4;
}
};
function n($,t,o){
var j;
if(t>=0&&t<$.length){
var i=$[t];
return(j=i)&&j.$oj$L2(o);
}
return 0;
}
o.$oj$A2=function($){
return n(this.$oj$f2,$&&$.$oj$O2(),$&&$.$oj$M2());
};
o.$oj$D2=function($,t){
return n(this.$oj$f2,$,t);
};
o.$oj$P2=function($){
for(var t,o=0,j=Math.min(this.$oj$f2.length,$.length);j>o;o++)(t=this.$oj$f2[o])&&t.$oj$P2($[o]);
};
o.$oj$H2=function(){
return $.map(this.$oj$f2,function($){
return $&&$.$oj$H2();
});
};
o.$oj$B2=function($){
for(var t=0,o=Math.min(this.$oj$f2.length,$.length);o>t;t++){
var j=$[t],i=this.$oj$f2[t],n=j-(i&&i.$oj$j2());
i&&i.$oj$P2(n);
}
};
o.$oj$F2=function(){
return $.map(this.$oj$f2,function($){
return($&&$.$oj$j2())+($&&$.$oj$H2());
});
};
o.$oj$I2=function(t){
var o=this;
$.each(this.$oj$f2,function($){
$&&$.$oj$q2(!1);
});
$.each(t,function($){
var t;
(t=o.$oj$f2[$])&&t.$oj$q2(!0);
});
};
o.$oj$R2=function(){
var t=[],o=0;
$.each(this.$oj$f2,function($){
$&&$.$oj$U2()&&t.push(o);
o++;
});
return t;
};
o.$oj$z2=function($,t){
if(0>$||$>=this.$oj$f2.length)return!1;
var o=this.$oj$f2[$];
if(!o||!o.$oj$U2())return!1;
if(this.$oj$h2)return t>=(o&&o.$oj$W2());
return!0;
};
o.$oj$X2=function($){
return this.$oj$z2($&&$.$oj$O2(),$&&$.$oj$M2());
};
o.$oj$V2=function(t,o){
var i,n=this,s=(i=new j._cls.$oj$K2())&&i.$oj$J2(o);
$.each(this.$oj$R2(),function(o){
var i=n.$oj$f2[o],r=i&&i.$oj$W2();
$.each(t,function($){
if($>=r){
var t=j._cls.$oj$G2.$oj$Q2(o,$),n=i&&i.$oj$L2($);
s&&s.$oj$Y2(t,n);
}
});
});
return s;
};
return i;
});
j._registerClass({
$oj$N2:1
},null,function($,t){
function o(){
this.$oj$Z2=this.$oj$e9=this.$oj$t9=this.$oj$n9=this.$oj$r9=0;
this.$oj$i9=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$P2=function($){
this.$oj$r9=$;
};
t.$oj$H2=function(){
return this.$oj$r9;
};
t.$oj$q2=function($){
this.$oj$i9=$;
};
t.$oj$U2=function(){
return this.$oj$i9;
};
t.$oj$j2=function(){
return this.$oj$t9;
};
t.$oj$s9=function(){
return this.$oj$n9;
};
t.$oj$o9=function(){
return this.$oj$e9;
};
t.$oj$W2=function(){
return this.$oj$Z2;
};
t.$oj$T2=function($,t,j,i){
var n=this;
if(n=o.$oj_super.prototype.init.call(this)){
n.$oj$t9=$;
n.$oj$n9=t;
n.$oj$e9=j;
n.$oj$Z2=i;
n.$oj$i9=!0;
}
return n;
};
t.$oj$L2=function($){
return this.$oj$t9+$-this.$oj$Z2+this.$oj$r9;
};
t.$oj$u9=function(){
return this.$oj$t9+this.$oj$r9;
};
return o;
});
j._registerClass({
$oj$k2:1
},null,function($,t){
function o(){
this.$oj$a9=0;
this.$oj$f9=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$M2=function(){
return this.$oj$a9;
};
t.$oj$l9=function(){
return this.$oj$f9;
};
t.$oj$C2=function($,t){
var j=this;
if(j=o.$oj_super.prototype.init.call(this)){
j.$oj$a9=$;
j.$oj$f9=t;
}
return j;
};
return o;
});
j._registerClass({
$oj$G2:1
},null,function(t,o){
function i(){
this.$oj$c9=this.$oj$h9=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$O2=function(){
return this.$oj$h9;
};
o.$oj$M2=function(){
return this.$oj$c9;
};
t.$oj$p9=function(t){
return $.map(t,function($){
return j._cls.$oj$G2.$oj$Q2($[0],$[1]);
});
};
t.$oj$d9=function(t){
return $.map(t,function($){
return[$&&$.$oj$O2(),$&&$.$oj$M2()];
});
};
t.$oj$Q2=function($,t){
var o;
return(o=this.alloc())&&o.$oj$v9($,t);
};
o.$oj$v9=function($,t){
var o=this;
if(o=i.$oj_super.prototype.init.call(this)){
o.$oj$h9=$;
o.$oj$c9=t;
}
return o;
};
o.isEqual_=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$G2))return!1;
return this.$oj$h9==($&&$.$oj$O2())&&this.$oj$c9==($&&$.$oj$M2());
};
o.$oj$m9=function($){
var t=$&&$.$oj$O2();
if(this.$oj$h9==t)return this.$oj$c9-($&&$.$oj$M2());
return this.$oj$h9-t;
};
return i;
});
j._registerClass({
$oj$K2:1
},null,function($,t){
function o(){
this.$oj$g9=this.$oj$y9=this.$oj$b9=null;
this.$oj$w9=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$E9=function($){
this.$oj$b9=$;
};
t.$oj$S9=function(){
return this.$oj$b9;
};
t.$oj$x9=function(){
return this.$oj$w9;
};
t.$oj$J2=function($){
var t=this;
if(t=o.$oj_super.prototype.init.call(this)){
t.$oj$g9={};
t.$oj$y9={};
t.$oj$b9=[];
t.$oj$w9=$;
}
return t;
};
t.$oj$Y2=function($,t){
this.$oj$w9||(t%=12);
var o=this.$oj$g9[t];
o||(o=this.$oj$g9[t]=[]);
o.push($);
if(!this.$oj$y9[t]){
this.$oj$y9[t]=t;
this.$oj$b9.push(t);
this.$oj$b9.sort();
}
};
t.$oj$T9=function($){
this.$oj$w9||($%=12);
return this.$oj$g9[$]||[];
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$K7:1
},null,function(t,o){
function i(){
this.$oj$N9=this.$oj$C9=this.$oj$k9=this.$oj$L9=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$jt=function(){
return this.$oj$k9;
};
o.$oj$Jr=function(){
return this.$oj$L9;
};
o.$oj$yn=function(){
return this.$oj$C9;
};
o.$oj$bn=function(){
return this.$oj$N9;
};
function n($){
var t=$%7;
return 1==t||4==t||5==t;
}
t.$oj$A9=function($){
return this.$oj$O9($+70);
};
t.$oj$M9=function($,t){
var o;
return(o=this.alloc())&&o.$oj$D9($,t);
};
t.$oj$O9=function($){
var t;
return(t=this.alloc())&&t.$oj$J7($);
};
t.$oj$P9=function($,t){
var o;
return(o=this.alloc())&&o.$oj$i2($,t);
};
o.$oj$D9=function($,t){
var o=(t&&t.$oj$Tn())-($&&$.$oj$Tn()),j=(t&&t.$oj$Nn())-($&&$.$oj$Nn());
if(0>j){
o=-o;
j=-j;
}
var i=12*Math.floor(j/7),s=[0,2,4,5,7,9,11][j%7],r=i+s,e=o-r,c=j+1;
-1>=e&&n(c)&&e--;
return this.$oj$i2(e,c);
};
o.$oj$J7=function($){
var t=Math.floor($/10),o=$%10-5;
n(t)&&0>o&&o--;
return this.$oj$i2(o,t);
};
o.$oj$i2=function($,t){
var o=this;
if(o=i.$oj_super.prototype.init.call(this)){
o.$oj$k9=$;
o.$oj$L9=t;
o.$oj$C9=t-1;
o.$oj$N9=0;
var j=[0,2,4,5,7,9,11];
o.$oj$N9+=j[o.$oj$C9%7];
o.$oj$N9+=12*Math.floor(o.$oj$C9/7);
o.$oj$N9+=$;
-2>=$&&n(t)&&o.$oj$N9++;
}
return o;
};
o.isEqual_=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$K7))return!1;
return this.$oj$C9==($&&$.$oj$yn())&&this.$oj$N9==($&&$.$oj$bn());
};
o.description=function(){
return"<"+this.className()+" "+this.$oj$H9()+">";
};
o.$oj$un=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$K7))return!1;
return this.$oj$N9==($&&$.$oj$bn());
};
o.$oj$B9=function(){
return $.includes([15,16,24,25,26,34,35,45,46,54,55,56,64,65,66,74,75,0],this.$oj$xn());
};
o.$oj$H9=function(){
var $="";
if(n(this.$oj$L9)&&0==this.$oj$k9)$+="P";else if(0==this.$oj$k9)$+="M";else if(-1==this.$oj$k9)$+="m";else if(this.$oj$k9<=-2)for(var t=this.$oj$k9;-2>=t;t++)$+="d";else if(this.$oj$k9>=1)for(var o=1;o<=this.$oj$k9;o++)$+="A";
$+=this.$oj$L9;
return $;
};
o.$oj$xn=function(){
var $=10*this.$oj$L9+5+this.$oj$k9;
n(this.$oj$L9)&&this.$oj$k9<=-2&&$++;
return $;
};
return i;
});
}();
!function(){
"use strict";
var t=[3,0,4,1,5,2,6];
function o($){
var t=0==$||20==$,o=1==$||10==$||11==$||12==$||25==$;
if(t)return 0;
if(o)return 3;
if(21==$)return 2;
if(22==$)return 4;
if(23==$)return-1;
if(24==$)return 1;
if(26==$)return 5;
return 0;
}
function i(i,n){
var s,r=o(i);
if(!$.isNumber(r))return null;
var e=n+(r+1),c=t[j._g.$oj$e(e,7)],u=Math.floor(e/7);
return(s=j._cls.$oj$Mt)&&s.$oj$Ut(c,u);
}
function n(j,i,n){
var s=o(j);
if(!$.isNumber(s))return 0;
var r=t.indexOf(i)+7*n;
return r-(s+1);
}
j._registerClass({
$oj$j9:1
},null,function(t,o){
function s(){
this.$oj$F9=this.$oj$I9=null;
this.$oj$q9=0;
this.constructor=s;
this.$oj_id=++j._id;
}
o.$oj$xn=function(){
return this.$oj$q9;
};
t.$oj$R9=function($,t){
return i($,t);
};
t.$oj$U9=function($,t,o){
return j._cls.$oj$Mt.$oj$Jt(i($,t),o);
};
t.$oj$z9=function($,t){
return n($,t&&t.$oj$Bt(),t&&t.$oj$jt());
};
t.$oj$W9=function($){
return this.$oj$X9($,0,!1);
};
t.$oj$X9=function($,t,o){
o&&(12==$||11==$)&&($=10);
return 12==$&&1==t?10:25==$?10:20==$?0:$;
};
t.$oj$V9=function($,t){
return this.$oj$J9($,t,0,!1);
};
t.$oj$J9=function($,t,o,j){
return this.$oj$X9($,o,j)==this.$oj$X9(t,o,j);
};
t.$oj$K9=function($){
if($>=0&&26>=$)return 6;
if(30==$)return 4;
if(31==$||32==$)return 5;
if(33==$)return 11;
return 0;
};
t.$oj$Q9=function(t,o){
var i,n=(i=new j._cls.$oj$j9())&&i.$oj$J7(t),s=j._cls.$oj$Mt.$oj$Xt(0);
return $.map(n&&n.$oj$G9(s,o),function($){
return $&&$.$oj$an();
});
};
o.$oj$J7=function($){
var t=this,o=void 0,j=void 0;
if(0==$||20==$)o=[25,35,45,55,65,75];else if(1==$||10==$||25==$)o=[25,34,45,55,64,74];else if(11==$)o=[25,34,45,55,64,75];else if(12==$){
o=[25,34,45,55,65,75];
j=[25,34,45,55,64,74];
}else 21==$?o=[25,34,45,55,65,74]:22==$?o=[24,34,45,55,64,74]:23==$?o=[25,35,46,55,65,75]:24==$?o=[25,35,45,55,65,74]:26==$?o=[24,34,45,54,64,74]:30==$?o=[25,35,55,65]:31==$?o=[34,45,46,55,74]:32==$?o=[25,35,46,56,66]:33==$&&(o=[24,25,34,35,45,54,55,64,65,74,75]);
if(!o)return null;
if(t=s.$oj_super.prototype.init.call(this)){
t.$oj$q9=$;
t.$oj$F9=o;
t.$oj$I9=j;
}
return t;
};
o.$oj$G9=function(t,o){
var i=this,n=[],s=t&&t.$oj$wn(1);
0==o||2==o?n.push(t):1==o&&n.push(s);
if(0==o||2==o){
$.each(this.$oj$F9,function($){
var o=j._cls.$oj$K7.$oj$O9($);
n.push(t&&t.$oj$pn(o,!0));
});
n.push(s);
}
if(1==o||2==o){
var r=i.$oj$I9||i.$oj$F9.slice(0);
r.reverse();
$.each(r,function($){
var o=j._cls.$oj$K7.$oj$O9($);
n.push(t&&t.$oj$pn(o,!0));
});
n.push(t);
}
return n;
};
o.$oj$Y9=function($,t){
return j._cls.$oj$j9.$oj$U9(this.$oj$q9,$,t);
};
o.$oj$Z9=function($){
return n(this.$oj$q9,$&&$.$oj$Bt(),$&&$.$oj$jt());
};
return s;
});
}();
!function(){
"use strict";
}();
!function(){
"use strict";
j._registerClass({
$oj$e8:1
},null,function(t,o){
function i(){
this.$oj$t8=this.$oj$n8=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$r8=function(){
return this.$oj$n8;
};
o.$oj$i8=function(){
return this.$oj$t8;
};
t.$oj$s8=function(t,o){
return $.map(t,function($,t){
return j._cls.$oj$e8.$oj$o8($,o[t]);
});
};
t.$oj$o8=function($,t){
var o;
return(o=new j._cls.$oj$e8())&&o.$oj$u8($,t);
};
o.$oj$u8=function($,t){
var o=this;
if(o=i.$oj_super.prototype.init.call(this)){
o.$oj$n8=$;
o.$oj$t8=t;
}
return o;
};
return i;
});
}();
!function(){
"use strict";
var $=["{b}{b}{b}{b}","{b}{b}{b}","{bb}","{b}","{n}","{#}","{x}","{#}{#}{#}","{#}{#}{#}{#}"],t=["Quadruple Flat","Triple Flat","Double Flat","Flat","Natural","Sharp","Double Sharp","Triple Sharp","Quadruple Sharp"];
function o($,t){
return(t?t[$]:"")||"";
}
function i($,t){
return(t?t[$- -4]:"")||"";
}
function n($,t){
var o=[5,t?6:14,15,t?16:24,25,35,t?36:44,45,t?46:54,55,t?56:64,65];
return o[$%12];
}
function s($){
var t,n,s=(t=j._cls.$oj$Mt)&&t.$oj$qt($),r=(n=j._cls.$oj$Mt)&&n.$oj$Rt($),e=o(s,["C","D","E","F","G","A","H"]);
if(64==$)return"B";
if(0==r)return e;
var c=i(r,["eseseses","eseses","eses","es","","is","isis","isisis","isisisis"]);
return-1>=r&&(2==s||5==s)?e+c.substr(1):e+c;
}
function r($){
var n,s,r=(n=j._cls.$oj$Mt)&&n.$oj$qt($),e=(s=j._cls.$oj$Mt)&&s.$oj$Rt($),c=o(r,["C","D","E","F","G","A","B"]);
return 0==e?c:c+" "+i(e,t);
}
function e($){
var t,n,s=(t=j._cls.$oj$Mt)&&t.$oj$qt($),r=(n=j._cls.$oj$Mt)&&n.$oj$Rt($),e=o(s,["C","D","E","F","G","A","_B"]),c=i(r,["bbbb","bbb","bb","b","","#","x","###","####"]);
return"{"+e+c+"}";
}
function c(t,n){
var s,r;
if(13==n){
if(6==t)return"Di";
if(14==t)return"Ra";
if(16==t)return"Ri";
if(24==t)return"Me";
if(36==t)return"Fi";
if(44==t)return"Se";
if(46==t)return"Si";
if(54==t)return"Le";
if(56==t)return"Li";
if(64==t)return"Te";
}
var e=3==n||4==n,c=3==n||1==n,u=(s=j._cls.$oj$Mt)&&s.$oj$qt(t),h=(r=j._cls.$oj$Mt)&&r.$oj$Rt(t),a=o(u,[e?"Ut":"Do","Re","Mi","Fa","Sol","La",c?"Si":"Ti"]);
return 0==h?a:a+i(h,$);
}
function u($){
var n,s,r=(n=j._cls.$oj$Mt)&&n.$oj$qt($),e=(s=j._cls.$oj$Mt)&&s.$oj$Rt($),c=o(r,["C","D","E","F","G","eh","B"]);
return 0==e?c.toLowerCase():c+" "+i(e,t);
}
function h($,n){
var s,r,e=3==n||4==n,c=3==n||1==n,u=(s=j._cls.$oj$Mt)&&s.$oj$qt($),h=(r=j._cls.$oj$Mt)&&r.$oj$Rt($),a=o(u,[e?"Oot":"Doe","Ray","Mee","Fäh","Sol","La",c?"See":"Tea"]);
return 0==h?a:a+" "+i(h,t);
}
function a($,t){
var o;
return 14==t?s($):15==t?r($):(o=j._cls.$oj$f8)&&o.$oj$a8(t)?c($,t):e($);
}
function l($,t){
var o;
return 14==t?s($):(o=j._cls.$oj$f8)&&o.$oj$a8(t)?h($,t):u($);
}
function f($,t,o,i){
var s,r=n($,o),e=Math.floor($/12)-1,c=a(r,t);
i&&(c=(s=j._cls.$oj$f8)&&s.$oj$a8(t)?c+"^"+(e-1)+"^":14==t?c+"^"+e+"^":c.replace("}",e+"}"));
return c;
}
function v($,t,o,i){
var s,r=n($,o),e=Math.floor($/12-1),c=l(r,t);
i&&(c=(s=j._cls.$oj$f8)&&s.$oj$a8(t)?c+" "+(e-1):c+" "+e);
return c;
}
function d($,t,o){
var j="";
3==t||4==t||5==t?j=5==t?""+($+1):3==t?""+($-1):""+$:1==t&&(j=o[""+$]);
return j;
}
function _($,t){
return d($,t,{
"1":"Contra",
"2":"Great",
"3":"Small",
"4":"One-line",
"5":"Two-line",
"6":"Three-line",
"7":"Four-line",
"8":"Five-line"
});
}
function g($){
switch($){
case 16:
return"A1";

case 15:
return"P1";

case 14:
return"d1";

case 26:
return"A2";

case 25:
return"M2";

case 24:
return"m2";

case 23:
return"d2";

case 36:
return"A3";

case 35:
return"M3";

case 34:
return"m3";

case 33:
return"d3";

case 46:
return"A4";

case 45:
return"P4";

case 44:
return"d4";

case 56:
return"A5";

case 55:
return"P5";

case 54:
return"d5";

case 66:
return"A6";

case 65:
return"M6";

case 64:
return"m6";

case 63:
return"d6";

case 76:
return"A7";

case 75:
return"M7";

case 74:
return"m7";

case 73:
return"d7";

case 86:
return"A8";

case 85:
return"P8";

case 84:
return"d8";

case 96:
return"A9";

case 95:
return"M9";

case 94:
return"m9";

case 93:
return"d9";

case 106:
return"A10";

case 105:
return"M10";

case 104:
return"m10";

case 103:
return"d10";

case 116:
return"A11";

case 115:
return"P11";

case 114:
return"d11";

case 126:
return"A12";

case 125:
return"P12";

case 124:
return"d12";

case 136:
return"A13";

case 135:
return"M13";

case 134:
return"m13";

case 133:
return"d13";

case 146:
return"A14";

case 145:
return"M14";

case 144:
return"m14";

case 143:
return"d14";

case 156:
return"A15";

case 155:
return"P15";

case 154:
return"d15";

case-1:
return"";
}
return"";
}
function p($){
switch($){
case 16:
return"Augmented 1st";

case 15:
return"Perfect 1st";

case 14:
return"Diminished 1st";

case 26:
return"Augmented 2nd";

case 25:
return"Major 2nd";

case 24:
return"Minor 2nd";

case 23:
return"Diminished 2nd";

case 36:
return"Augmented 3rd";

case 35:
return"Major 3rd";

case 34:
return"Minor 3rd";

case 33:
return"Diminished 3rd";

case 46:
return"Augmented 4th";

case 45:
return"Perfect 4th";

case 44:
return"Diminished 4th";

case 56:
return"Augmented 5th";

case 55:
return"Perfect 5th";

case 54:
return"Diminished 5th";

case 66:
return"Augmented 6th";

case 65:
return"Major 6th";

case 64:
return"Minor 6th";

case 63:
return"Diminished 6th";

case 76:
return"Augmented 7th";

case 75:
return"Major 7th";

case 74:
return"Minor 7th";

case 73:
return"Diminished 7th";

case 86:
return"Augmented 8th";

case 85:
return"Perfect 8th";

case 84:
return"Diminished 8th";

case 96:
return"Augmented 9th";

case 95:
return"Major 9th";

case 94:
return"Minor 9th";

case 93:
return"Diminished 9th";

case 106:
return"Augmented 10th";

case 105:
return"Major 10th";

case 104:
return"Minor 10th";

case 103:
return"Diminished 10th";

case 116:
return"Augmented 11th";

case 115:
return"Perfect 11th";

case 114:
return"Diminished 11th";

case 126:
return"Augmented 12th";

case 125:
return"Perfect 12th";

case 124:
return"Diminished 12th";

case 136:
return"Augmented 13th";

case 135:
return"Major 13th";

case 134:
return"Minor 13th";

case 133:
return"Diminished 13th";

case 146:
return"Augmented 14th";

case 145:
return"Major 14th";

case 144:
return"Minor 14th";

case 143:
return"Diminished 14th";

case 156:
return"Augmented 15th";

case 155:
return"Perfect 15th";

case 154:
return"Diminished 15th";

case-1:
return"";
}
return"";
}
function y($){
switch($){
case 16:
return"Augmented First";

case 15:
return"Perfect First";

case 14:
return"Diminished First";

case 26:
return"Augmented Second";

case 25:
return"Major Second";

case 24:
return"Minor Second";

case 23:
return"Diminished Second";

case 36:
return"Augmented Third";

case 35:
return"Major Third";

case 34:
return"Minor Third";

case 33:
return"Diminished Third";

case 46:
return"Augmented Fourth";

case 45:
return"Perfect Fourth";

case 44:
return"Diminished Fourth";

case 56:
return"Augmented Fifth";

case 55:
return"Perfect Fifth";

case 54:
return"Diminished Fifth";

case 66:
return"Augmented Sixth";

case 65:
return"Major Sixth";

case 64:
return"Minor Sixth";

case 63:
return"Diminished Sixth";

case 76:
return"Augmented Seventh";

case 75:
return"Major Seventh";

case 74:
return"Minor Seventh";

case 73:
return"Diminished Seventh";

case 86:
return"Augmented Eighth";

case 85:
return"Perfect Eighth";

case 84:
return"Diminished Eighth";

case 96:
return"Augmented Ninth";

case 95:
return"Major Ninth";

case 94:
return"Minor Ninth";

case 93:
return"Diminished Ninth";

case 106:
return"Augmented Tenth";

case 105:
return"Major Tenth";

case 104:
return"Minor Tenth";

case 103:
return"Diminished Tenth";

case 116:
return"Augmented Eleventh";

case 115:
return"Perfect Eleventh";

case 114:
return"Diminished Eleventh";

case 126:
return"Augmented Twelfth";

case 125:
return"Perfect Twelfth";

case 124:
return"Diminished Twelfth";

case 136:
return"Augmented Thirteenth";

case 135:
return"Major Thirteenth";

case 134:
return"Minor Thirteenth";

case 133:
return"Diminished Thirteenth";

case 146:
return"Augmented Fourteenth";

case 145:
return"Major Fourteenth";

case 144:
return"Minor Fourteenth";

case 143:
return"Diminished Fourteenth";

case 156:
return"Augmented Fifteenth";

case 155:
return"Perfect Fifteenth";

case 154:
return"Diminished Fifteenth";

case-1:
return"";
}
return"";
}
function m($,t,o){
var j=0;
switch($){
case 0:
j=15;
break;

case 1:
j=24;
break;

case 2:
j=25;
break;

case 3:
j=34;
break;

case 4:
j=35;
break;

case 5:
j=45;
break;

case 6:
j=54;
break;

case 7:
j=55;
break;

case 8:
j=64;
break;

case 9:
j=65;
break;

case 10:
j=74;
break;

case 11:
j=75;
break;

case 12:
j=85;
break;

case 13:
j=94;
break;

case 14:
j=95;
break;

case 15:
j=104;
break;

case 16:
j=105;
break;

case 17:
j=115;
break;

case 18:
j=124;
break;

case 19:
j=125;
break;

case 20:
j=134;
break;

case 21:
j=135;
break;

case 22:
j=144;
break;

case 23:
j=145;
break;

case 24:
j=155;
}
var i=t==g,n=t==y,s=0===$||6==$||12==$||24==$;
if(o&&i)return t(j);
if(o&&s){
if(0===$)return"Unison";
if(6==$)return n?"Tri-tone":"Tritone";
if(12==$)return"Octave";
if(24==$)return"Double Octave";
if(j)return t(j);
}else if(j)return t(j);
return"";
}
j._registerClass({
$oj$l8:1
},null,function(o){
function n(){
this.constructor=n;
this.$oj_id=++j._id;
}
o.$oj$c8=function($,t){
switch($){
case 34:
return t?"Treble Clef":"Treble";

case 22:
return t?"Bass Clef":"Bass";

case 28:
return t?"Alto Clef":"Alto";

case 26:
return t?"Tenor Clef":"Tenor";

case 32:
return t?"Soprano Clef":"Soprano";

case 30:
return t?"Mezzo-soprano Clef":"Mezzo-soprano";

case 24:
return t?"Baritone Clef":"Baritone";

case 36:
return t?"French Violin Clef":"French Violin";

case 20:
return t?"Sub-bass Clef":"Sub-bass";

case-2:
return"Grand Staff";

case-1:
case 0:
return"";
}
return"";
};
o.$oj$h8=function($){
switch($){
case 7:
return"Seven Sharps";

case 6:
return"Six Sharps";

case 5:
return"Five Sharps";

case 4:
return"Four Sharps";

case 3:
return"Three Sharps";

case 2:
return"Two Sharps";

case 1:
return"One Sharp";

case 0:
return"No Key Signature";

case-1:
return"One Flat";

case-2:
return"Two Flats";

case-3:
return"Three Flats";

case-4:
return"Four Flats";

case-5:
return"Five Flats";

case-6:
return"Six Flats";

case-7:
return"Seven Flats";
}
return"";
};
o.$oj$p8=function($,t){
var o=8==t;
if(o&&$>9){
if(10==$)return"t";
if(11==$)return"e";
}
return""+$;
};
o.$oj$d8=function($,t){
return a($,t);
};
o.$oj$v8=function($,t){
return l($,t);
};
o.$oj$m8=function($,t){
var o=j._cls.$oj$Mt.$oj$Rt($),i=this.$oj$d8($,0);
Math.abs(o)>=t&&(i=i.replace("{","{!"));
return i;
};
o.$oj$g8=function($,t){
var o=a($,t);
o=o.replace("_B","B");
o=o.replace("{b}","-b");
o=o.replace("{","");
o=o.replace("}","");
return o;
};
o.$oj$y8=function($,t,o,j){
var i=this.$oj$d8($,o),n=d(t,j,{
"0":"„",
"1":"‚",
"2":"",
"3":"",
"4":"′",
"5":"″",
"6":"‴",
"7":"⁗",
"8":"⁗′"
});
return 1==j?t>=3?i.toLowerCase()+n:i+n:o>=1&&4>=o?i+"^"+n+"^":i.replace("}",n+"}");
};
o.$oj$b8=function($,t,o,j){
var i=this.$oj$v8($,o),n=_(t,j);
return 1==j?n+" "+i:i+" "+n;
};
o.$oj$w8=function($,t,o,i){
var n="B";
if(14==o){
o=0;
n="H";
}else 11==o||16==o||17==o||18==o?o=0:13==o&&(o=4);
if(o>=0&&4>=o){
var s=void 0;
s=i?[["C","D","E","F","G","eh",n],["Doe","Ray","Mee","Fäh","Sol","La","See"],["Doe","Ray","Mee","Fäh","Sol","La","Tea"],["Oot","Ray","Mee","Fäh","Sol","La","See"],["Oot","Ray","Mee","Fäh","Sol","La","Tea"]]:[["C","D","E","F","G","A",n],["Do","Re","Mi","Fa","Sol","La","Si"],["Do","Re","Mi","Fa","Sol","La","Ti"],["Ut","Re","Mi","Fa","Sol","La","Si"],["Ut","Re","Mi","Fa","Sol","La","Ti"]];
var r=j._cls.$oj$Mt.$oj$It($,t);
return s[o][j._g.$oj$e(r,7)];
}
return null;
};
o.$oj$E8=function($,t){
var o=_($,t);
return 1==t?o+" Octave":"Octave "+o;
};
o.$oj$S8=function($,t){
var o=null;
if(-2==t)if($>=0){
$-=6;
o="treble staff";
}else{
$+=6;
o="bass staff";
}
var i=j._g.$oj$e($,2)>0;
if($>=-4&&4>=$){
var n=Math.floor(($+4)/2)+1;
return(i?"space":"line")+" "+n+(o?" on "+o:"");
}
var s=Math.floor((Math.abs($)-5)/2)+1,r=0>$?"below":"above",e=void 0;
e=1==s?i?"space":"line":i?"spaces":"lines";
o||(o="staff");
return s+" "+e+" "+r+" "+o;
};
o.$oj$x8=function($,t){
return this.$oj$S8($&&$.$oj$Bn(),t)+" to "+this.$oj$S8($&&$.$oj$Hn(),t);
};
o.$oj$T8=function($,t,o){
var j=this.$oj$d8(t,o),i=this.$oj$N8($);
return j+" "+i;
};
o.$oj$C8=function($,t,o){
return 0==$?this.$oj$d8(t,o):1==$||10==$?this.$oj$d8(t,o).toLowerCase():this.$oj$T8($,t,o);
};
o.$oj$k8=function($,t,o){
var j=this.$oj$v8(t,o),i=this.$oj$N8($);
return j+" "+i;
};
o.$oj$L8=function($,t,o,j){
if(1==o)return f($,t,!0,j);
if(2==o)return f($,t,!1,j);
var i=f($,t,!0,j),n=f($,t,!1,j);
return i==n?i:i+" -- "+n;
};
o.$oj$A8=function($,t,o,j){
var i=this.$oj$L8($,t,o,j);
i=i.replace(/\{_B/g,"{B");
i=i.replace("{b}","-b");
i=i.replace(/[\{\}\^]/g,"");
i=i.replace(" -- "," - ");
return i;
};
o.$oj$O8=function($,t,o,j){
if(1==o)return v($,t,!0,j);
if(2==o)return v($,t,!1,j);
var i=v($,t,!0,j),n=v($,t,!1,j);
return i==n?i:i+" or "+n;
};
o.$oj$M8=function($){
switch($){
case 0:
return"C";

case 1:
return"D";

case 2:
return"E";

case 3:
return"F";

case 4:
return"G";

case 5:
return"A";

case 6:
return"B";

case 7:
return"";
}
return"";
};
o.$oj$D8=function(t){
return i(t,$);
};
o.$oj$P8=function($){
return i($,t);
};
o.$oj$H8=function($,t){
if(t)switch($){
case 15:
return"La";

case 16:
return"Li";

case 24:
return"Te";

case 25:
return"Ti";

case 34:
return"Do";

case 35:
return"Di";

case 45:
return"Re";

case 46:
return"Ri";

case 54:
return"Me";

case 55:
return"Mi";

case 64:
return"Fa";

case 65:
return"Fi";

case 74:
return"Sol";

case 75:
return"Si";

default:
return"";
}else switch($){
case 14:
return"De";

case 15:
return"Do";

case 16:
return"Di";

case 24:
return"Ra";

case 25:
return"Re";

case 26:
return"Ri";

case 34:
return"Me";

case 35:
return"Mi";

case 36:
return"Ma";

case 44:
return"Fe";

case 45:
return"Fa";

case 46:
return"Fi";

case 54:
return"Se";

case 55:
return"Sol";

case 56:
return"Si";

case 64:
return"Le";

case 65:
return"La";

case 66:
return"Li";

case 74:
return"Te";

case 75:
return"Ti";

case 76:
return"To";

default:
return"";
}
};
o.$oj$B8=function($){
switch($){
case 14:
return"De";

case 15:
return"Doe";

case 16:
return"Dee";

case 24:
return"Ra";

case 25:
return"Ray";

case 26:
return"Ree";

case 34:
return"May";

case 35:
return"Mee";

case 44:
return"Fay";

case 45:
return"Fa";

case 46:
return"Fee";

case 54:
return"Say";

case 55:
return"Sol";

case 56:
return"See";

case 64:
return"Lay";

case 65:
return"Lah";

case 66:
return"Lee";

case 74:
return"Tay";

case 75:
return"Tea";

default:
return"";
}
};
o.$oj$j8=function($){
return g($);
};
o.$oj$F8=function($){
return p($);
};
o.$oj$I8=function($){
return y($);
};
o.$oj$q8=function($,t){
switch($){
case 15:
return"1";

case 16:
return"#1";

case 24:
return"b2";

case 25:
return"2";

case 26:
return"#2";

case 45:
return"4";

case 46:
return"#4";

case 54:
return"b5";

case 55:
return"5";

case 56:
return"#5";
}
if(0==t)switch($){
case 34:
return"b3";

case 35:
return"3";

case 64:
return"b6";

case 65:
return"6";

case 66:
return"#6";

case 74:
return"b7";

case 75:
return"7";
}else switch($){
case 34:
return"3";

case 35:
return"#3";

case 64:
return"6";

case 65:
return"#6";

case 74:
return"7";

case 75:
return"#7";
}
return"";
};
o.$oj$R8=function($,t){
switch($){
case 15:
return"{^1}";

case 16:
return"{#^1}";

case 24:
return"{b^2}";

case 25:
return"{^2}";

case 26:
return"{#^2}";

case 45:
return"{^4}";

case 46:
return"{#^4}";

case 54:
return"{b^5}";

case 55:
return"{^5}";

case 56:
return"{#^5}";
}
if(0==t)switch($){
case 34:
return"{b^3}";

case 35:
return"{^3}";

case 64:
return"{b^6}";

case 65:
return"{^6}";

case 66:
return"{#^6}";

case 74:
return"{b^7}";

case 75:
return"{^7}";
}else switch($){
case 34:
return"{^3}";

case 35:
return"{#^3}";

case 64:
return"{^6}";

case 65:
return"{#^6}";

case 74:
return"{^7}";

case 75:
return"{#^7}";
}
return"";
};
o.$oj$U8=function($,t){
switch($){
case 15:
return"1";

case 16:
return"Sharp 1";

case 24:
return"Flat 2";

case 25:
return"2";

case 26:
return"Sharp 2";

case 45:
return"4";

case 46:
return"Sharp 4";

case 54:
return"Flat 5";

case 55:
return"5";

case 56:
return"Sharp 5";
}
if(0==t)switch($){
case 34:
return"Flat 3";

case 35:
return"3";

case 64:
return"Flat 6";

case 65:
return"6";

case 66:
return"Sharp 6";

case 74:
return"Flat 7";

case 75:
return"7";
}else switch($){
case 34:
return"3";

case 35:
return"Sharp 3";

case 64:
return"6";

case 65:
return"Sharp 6";

case 74:
return"7";

case 75:
return"Sharp 7";
}
return"";
};
o.$oj$z8=function($){
switch($){
case 1:
return"1st";

case 2:
return"2nd";

case 3:
return"3rd";

case 4:
return"4th";

case 5:
return"5th";

case 6:
return"6th";

case 7:
return"7th";

case 8:
return"8th";

case 9:
return"9th";

case 10:
return"10th";

case 11:
return"11th";

case 12:
return"12th";

case 13:
return"13th";

case 14:
return"14th";

case 15:
return"15th";
}
return"";
};
o.$oj$W8=function($){
switch($){
case 1:
return"First";

case 2:
return"Second";

case 3:
return"Third";

case 4:
return"Fourth";

case 5:
return"Fifth";

case 6:
return"Sixth";

case 7:
return"Seventh";

case 8:
return"Eighth";

case 9:
return"Ninth";

case 10:
return"Tenth";

case 11:
return"Eleventh";

case 12:
return"Twelfth";

case 13:
return"Thirteenth";

case 14:
return"Fourteenth";

case 15:
return"Fifteenth";
}
return"";
};
o.$oj$X8=function($){
return m($,g,!0);
};
o.$oj$V8=function($){
return m($,g,!1);
};
o.$oj$J8=function($){
return m($,p,!0);
};
o.$oj$K8=function($){
return m($,y,!0);
};
o.$oj$Q8=function($){
switch($){
case 0:
return"Maj. Triad";

case 1:
return"Min. Triad";

case 2:
return"Dim. Triad";

case 3:
return"Aug. Triad";

case 4:
return"Dom. 7th";

case 5:
return"Maj. 7th";

case 6:
return"Min. 7th";

case 7:
return"Dim. 7th";

case 8:
return"Half-dim. 7th";

case 14:
return"Min-maj. 7th";

case 15:
return"Aug. 7th";

case 16:
return"Aug-maj. 7th";

case 17:
return"Sus. 2nd";

case 18:
return"Sus. 4th";

case 19:
return"Dom. 7th, Sus. 4th";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
o.$oj$G8=function($){
switch($){
case 0:
return"Major Triad";

case 1:
return"Minor Triad";

case 2:
return"Diminished Triad";

case 3:
return"Augmented Triad";

case 4:
return"Dominant 7th";

case 5:
return"Major 7th";

case 6:
return"Minor 7th";

case 7:
return"Diminished 7th";

case 8:
return"Half-diminished 7th";

case 14:
return"Minor-major 7th";

case 15:
return"Augmented 7th";

case 16:
return"Augmented-major 7th";

case 17:
return"Suspended 2nd";

case 18:
return"Suspended 4th";

case 19:
return"Dominant 7th, Sus. 4th";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
o.$oj$Y8=function($){
switch($){
case 0:
return"Major Triad";

case 1:
return"Minor Triad";

case 2:
return"Diminished Triad";

case 3:
return"Augmented Triad";

case 4:
return"Dominant Seventh";

case 5:
return"Major Seventh";

case 6:
return"Minor Seventh";

case 7:
return"Diminished Seventh";

case 8:
return"Half-diminished Seventh";

case 14:
return"Minor-major Seventh";

case 15:
return"Augmented Seventh";

case 16:
return"Augmented-major Seventh";

case 17:
return"Suspended Second";

case 18:
return"Suspended Fourth";

case 19:
return"Dominant Seventh, Suspended Fourth";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
o.$oj$Z8=function($){
switch($){
case 0:
return"M";

case 1:
return"m";

case 2:
return"d";

case 3:
return"A";

case 4:
return"7";

case 5:
return"M7";

case 6:
return"m7";

case 7:
return"{o7}";

case 8:
return"{h7}";

case 14:
return"mM7";

case 15:
return"+7";

case 16:
return"+M7";

case 17:
return"sus2";

case 18:
return"sus4";

case 19:
return"7sus4";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
o.$oj$e4=function($,t){
function o(){
switch(t){
case 0:
return"";

case 1:
return"m";

case 2:
return"^{o}^";

case 3:
return"+";

case 4:
return"7";

case 5:
return"M7";

case 6:
return"m7";

case 7:
return"^{o}^7";

case 8:
return"^{h}^7";

case 14:
return"m^M7^";

case 15:
return"+7";

case 16:
return"+M7";

case 17:
return"sus2";

case 18:
return"sus4";

case 19:
return"7sus4";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
}
return e($)+o();
};
o.$oj$N8=function($){
switch($){
case 0:
return"Major";

case 1:
return"Minor";

case 10:
return"Natural Minor";

case 11:
return"Harmonic Minor";

case 12:
return"Melodic Minor";

case 20:
return"Ionian";

case 21:
return"Dorian";

case 22:
return"Phrygian";

case 23:
return"Lydian";

case 24:
return"Mixolydian";

case 25:
return"Aeolian";

case 26:
return"Locrian";

case 30:
return"Pentatonic";

case 31:
return"Blues";

case 32:
return"Whole Tone";

case 33:
return"Chromatic";
}
return"";
};
o.$oj$t4=function($){
return this.$oj$N8($);
};
o.$oj$n4=function($){
switch($){
case 0:
return"{I}";

case 1:
return"{ii}";

case 2:
return"{iii}";

case 3:
return"{IV}";

case 4:
return"{V}";

case 5:
return"{vi}";

case 6:
return"{viio}";

case 7:
return"{V7}/{ii}";

case 8:
return"{V7}/{iii}";

case 9:
return"{V7}/{IV}";

case 10:
return"{V7}/{V}";

case 11:
return"{V7}/{vi}";

case 12:
return"{viio7}/{ii}";

case 13:
return"{viio7}/{iii}";

case 14:
return"{viio7}/{IV}";

case 15:
return"{viio7}/{V}";

case 16:
return"{viio7}/{vi}";

case 17:
return"{viih7}/{ii}";

case 18:
return"{viih7}/{iii}";

case 19:
return"{viih7}/{IV}";

case 20:
return"{viih7}/{V}";

case 21:
return"{viih7}/{vi}";

case 22:
return"{i}";

case 23:
return"{iio}";

case 24:
return"{III}";

case 25:
return"{iv}";

case 26:
return"{v}";

case 27:
return"{V}";

case 28:
return"{VI}";

case 29:
return"{VII}";

case 30:
return"{viio}";

case 31:
return"{V7}/{III}";

case 32:
return"{V7}/{iv}";

case 33:
return"{V7}/{V}";

case 34:
return"{V7}/{VI}";

case 35:
return"{V7}/{VII}";

case 36:
return"{viio7}/{III}";

case 37:
return"{viio7}/{iv}";

case 38:
return"{viio7}/{V}";

case 39:
return"{viio7}/{VI}";

case 40:
return"{viio7}/{VII}";

case 41:
return"{viih7}/{III}";

case 42:
return"{viih7}/{iv}";

case 43:
return"{viih7}/{V}";

case 44:
return"{viih7}/{VI}";

case 45:
return"{viih7}/{VII}";

case 46:
return"{N6}";

case 47:
return"{Gr6}";

case 48:
return"{It6}";

case 49:
return"{Fr6}";

case 50:
return"{Sw6}";

case 51:
return"{III+}";

case 55:
return"{#iio7}";

case 56:
return"{#vio7}";

case 57:
return"{III}";

case 58:
return"{bIII}";

case 59:
return"{biii}";

case 60:
return"{VI}";

case 61:
return"{bVI}";

case 62:
return"{bvi}";

case 63:
return"{iii}";

case 64:
return"{#iii}";

case 65:
return"{#III}";

case 66:
return"{vi}";

case 67:
return"{#vi}";

case 68:
return"{#VI}";

case 69:
return"{I7}";

case 70:
return"{ii7}";

case 71:
return"{iii7}";

case 72:
return"{IV7}";

case 73:
return"{V7}";

case 74:
return"{vi7}";

case 75:
return"{viih7}";

case 76:
return"{i7}";

case 77:
return"{iih7}";

case 78:
return"{III7}";

case 79:
return"{III+7}";

case 80:
return"{iv7}";

case 81:
return"{v7}";

case 82:
return"{V7}";

case 83:
return"{VI7}";

case 84:
return"{VII7}";

case 85:
return"{viio7}";

case 86:
return"{V}/{ii}";

case 87:
return"{V}/{iii}";

case 88:
return"{V}/{IV}";

case 89:
return"{V}/{V}";

case 90:
return"{V}/{vi}";

case 91:
return"{V}/{III}";

case 92:
return"{V}/{iv}";

case 93:
return"{V}/{V}";

case 94:
return"{V}/{VI}";

case 95:
return"{V}/{VII}";

case 96:
return"{viio}/{ii}";

case 97:
return"{viio}/{iii}";

case 98:
return"{viio}/{IV}";

case 99:
return"{viio}/{V}";

case 100:
return"{viio}/{vi}";

case 101:
return"{viio}/{III}";

case 102:
return"{viio}/{iv}";

case 103:
return"{viio}/{V}";

case 104:
return"{viio}/{VI}";

case 105:
return"{viio}/{VII}";

case 106:
return"{V+}";

case 107:
return"{V+7}";

case 108:
return"{V+}";

case 109:
return"{V+7}";

case 110:
return"{bVI}";

case-1:
return"";
}
return"";
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$f8:1
},null,function(t){
function o(){
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$r4=function($){
return 0==$||11==$||15==$||16==$||17==$||18==$||13==$||1==$||2==$||3==$||4==$||14==$;
};
t.$oj$a8=function($){
return 13==$||1==$||2==$||3==$||4==$;
};
t.$oj$i4=function($){
return 7==$||8==$;
};
t.$oj$s4=function($){
return 5==$||6==$||12==$||9==$||10==$;
};
t.$oj$o4=function($){
return 9==$||10==$;
};
t.$oj$u4=function($){
var t=5==$||9==$;
return t?0:1;
};
t.$oj$a4=function($,t,o){
var i=j._cls.$oj$f8.$oj$u4(o),n=t&&t.$oj$xn(),s=t&&t.$oj$Ft(),r=j._cls.$oj$j9.$oj$R9(i,$),e=s;
j._cls.$oj$Mt.$oj$qt(n)<j._cls.$oj$Mt.$oj$qt(r)&&e--;
return j._cls.$oj$K7.$oj$M9(j._cls.$oj$Mt.$oj$Jt(r,e),t);
};
t.$oj$f4=function($,t){
if(!t)return 5==$||9==$?[15,25,35,45,55,65,75]:[15,25,34,45,55,64,74];
if(5==$||9==$)return[15,16,24,25,26,34,35,45,46,54,55,56,64,65,66,74,75];
if(6==$||10==$)return[15,16,24,25,26,34,35,45,46,54,55,56,64,65,74,75];
if(12==$)return[15,16,24,25,34,35,45,46,54,55,64,65,74,75];
return null;
};
t.$oj$l4=function(t,o,j){
var i=this.$oj$f4(o,j);
return $.includes(i,t);
};
t.$oj$c4=function($,t){
return $<j._cls.$oj$Q7.$oj$t2(t);
};
return o;
});
j._g.$oj$j7=function($,t){
var o;
return $==t||(o=$)&&o.isEqual_(t);
};
}();
!function(){
"use strict";
function t($){
if(20==$)return"Quadruple Flat";
if(21==$)return"Triple Flat";
if(22==$)return"Double Flat";
if(23==$)return"Flat";
if(24==$)return"Natural";
if(25==$)return"Sharp";
if(26==$)return"Double Sharp";
if(27==$)return"Triple Sharp";
if(28==$)return"Quadruple Sharp";
return null;
}
j._registerClass({
$oj$h4:1
},null,function(o,i){
function n(){
this.$oj$p4=this.$oj$d4=this.$oj$v4=null;
this.$oj$m4=this.$oj$g4=this.$oj$y4=0;
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$b4=function($,t){
this.$oj$v4=[];
this.$oj$m4=$&&$.$oj$w4();
this.$oj$y4=$&&$.$oj$E4();
this.$oj$g4=$&&$.$oj$S4();
for(var o=0;t>o;o++)this.$oj$v4[o]={
cf:null,
cg:0,
kf:null,
n:{},
h:null
};
};
i.$oj$x4=function($,t,o,i){
var n=i&&i.$oj$T4(),s=i&&i.$oj$N4(),r=this.$oj$v4[t];
if(!r)return;
var e=$&&$.$oj$C4();
if(1==s){
r.cf=e;
r.cg=$&&$.$oj$k4();
}else if(2==s)r.kf=j._g.$oj$M(r.kf,e);else if(3==s||4==s){
var c=r.n[n];
c||(c=r.n[n]={});
var u=c[o];
u||(u=c[o]={
r:null,
a:0,
s:0
});
u.r=j._g.$oj$M(u.r,e);
3==s?u.a=$&&$.$oj$k4():u.s=$&&$.$oj$L4();
}
};
i.$oj$A4=function($,t){
this.$oj$d4={
r:$&&$.$oj$C4(),
s:"Highlighted Range, "+j._cls.$oj$l8.$oj$x8(t,this.$oj$m4)
};
};
i.$oj$O4=function($,t,o,i){
var n=this.$oj$v4[t],s=n.h;
n.h||(s=n.h={
r:null,
s:{}
});
s.r=j._g.$oj$M(s.r,$&&$.$oj$C4());
s.s[o]=i;
};
i.$oj$M4=function($,t){
this.$oj$p4||(this.$oj$p4=[]);
this.$oj$p4.push({
r:$&&$.$oj$C4(),
s:t
});
};
i.$oj$D4=function(o){
var i=this,n=0;
function s(t){
return $.nsort($.map($.keys(t),function($){
return parseInt($,10);
}));
}
function r($,t,i,s,r){
var e,c=j._g.$oj$y($);
c.width<48&&(c.width=48);
c.height<48&&(c.height=48);
j._g.$oj$U(c,$);
o.push((e=new j._cls.$oj$H4())&&e.$oj$P4(c,t,i,4,"AX,"+n++,0,s,r));
}
function e($,t){
r($,93,0,t,0);
}
for(var c,u=function(o,n,u){
o=n[u];
var h=o.cf;
if(h){
var a=i.$oj$m4;
-2==a&&(a=12==o.cg?34:22);
e(h,j._cls.$oj$l8.$oj$c8(a,!0));
}
var l=o.kf;
if(l){
var f=j._cls.$oj$l8.$oj$h8(i.$oj$y4)+" in Key Signature";
e(l,f);
}else{
var v="No Accidentals in Key Signature";
l=j._g.$oj$y(h);
j._g.$oj$bt(l,h);
e(l,v);
}
var d=(o.n,s(o.n));
$.each(d,function(n){
var c=o.n[n],u=s(c);
$.each(u,function($){
var o=c[$],n="Note",s=t(o.a),u=j._cls.$oj$l8.$oj$S8($,0);
s&&(n=s+" "+n);
u&&(n+=" "+u);
3==i.$oj$g4||4==i.$oj$g4?r(o.r,94,o.s,n,$):1==i.$oj$g4||2==i.$oj$g4&&3==o.s?e(o.r,"Movable "+n):e(o.r,n);
});
});
if(o.h&&o.h.r){
var _=["Helpers"];
$.each(s(o.h.s),function($){
_.push(o.h.s[$]+" "+j._cls.$oj$l8.$oj$S8($,0));
});
e(o.h.r,_.join(", "));
}
c=o;
},h=i.$oj$v4,a=0,l=h?h.length:0;l>a;a++)u(c,h,a,l);
i.$oj$d4&&e(i.$oj$d4.r,i.$oj$d4.s);
for(var f,v=i.$oj$p4,d=0,_=v?v.length:0;_>d;d++){
f=v[d];
e(f.r,f.s);
}
};
return n;
});
}();
!function(){
"use strict";
function $($){
if(25==$)return 5;
return 0;
}
j._registerClass({
$oj$B4:1
},null,function(t,o){
function i(){
this.$oj$j4=this.$oj$F4=this.$oj$I4=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$q4=function($){
this.$oj$F4=$;
};
o.$oj$R4=function(){
return this.$oj$F4;
};
o.$oj$U4=function($){
this.$oj$I4=$;
};
o.$oj$z4=function(){
return this.$oj$I4;
};
o.$oj$W4=function($){
this.$oj$j4=$;
};
o.$oj$X4=function(){
return this.$oj$j4;
};
t.$oj$V4=function($){
var t=[0,0,0,0],o=$;
3==o?t=[0,0,.5,0]:12==o?t=[2.645,6.95,.615,0]:13==o?t=[2.85,3.2,.312,0]:14==o?t=[2.74,4,.5,1]:20==o?t=[2,2.016,.744,0]:21==o?t=[1.725,2.016,.744,0]:22==o?t=[1.579,2.688,.744,0]:23==o?t=[.855,2.688,.744,0]:24==o?t=[.666,2.755,.5,1]:25==o?t=[.828,3,.5,1]:26==o?t=[1,1,.5,1]:27==o?t=[1.9,3,.5,1]:28==o?t=[2,1,.5,1]:30==o?t=[1.6,1,.5,1]:31==o?t=[1.1353,1.013,.5,1]:32==o&&(t=[1.1353,1.013,.5,1]);
return{
widthInUnits:t[0],
heightInUnits:t[1],
centerInUnits:t[2],
centerOffset:t[3]
};
};
t.$oj$J4=function($,t,o){
var j=[-1,2,-2,1,-3,0,-4,-2,1,-3,0,-4,-1,-5,4,0,3,-1,2,-2,1,3,-1,2,-2,1,-3,0,2,-2,1,-3,0,-4,-1,1,4,0,3,-1,2,-2,0,3,-1,2,-2,1,-3],i=[3,0,4,1,-2,2,-1,2,-1,3,0,-3,1,-2,1,-2,2,-1,3,0,4,0,-3,1,-2,2,-1,3,-1,-4,0,-3,1,-2,2,-2,2,-1,3,0,4,1,4,1,5,2,-1,3,0],n=$%7*7;
return 0>t?j[n+o]:i[n+o];
};
t.$oj$K4=function($){
if(34==$||36==$)return 12;
if(22==$||24==$||20==$)return 13;
if(32==$||30==$||28==$||26==$)return 14;
return 0;
};
function n($,t){
if(-2==$)return 0==t?-6:6;
return 0;
}
t.$oj$Q4=function($,t,o){
if(-100==$)return-100;
return $+n(t,o);
};
t.$oj$G4=function($,t,o){
if(-100==$)return-100;
return $-n(t,o);
};
t.$oj$Y4=function($){
if(34==$)return-2;
if(22==$)return 2;
if(28==$)return 0;
if(26==$)return 2;
if(32==$)return-4;
if(30==$)return-2;
if(24==$)return 0;
if(20==$)return 4;
if(36==$)return-4;
return 0;
};
o.$oj$Z4=function($){
return this.$oj$I4+Math.round($*((this.$oj$j4-1)/-2));
};
o.$oj$eet=function($){
return Math.round(($-this.$oj$I4)/((this.$oj$j4-1)/-2));
};
o.$oj$tet=function($){
return Math.round((this.$oj$j4-1)*$);
};
o.$oj$net=function(t){
var o=j._cls.$oj$B4.$oj$V4(t),i=Math.round((this.$oj$j4-1)*o.widthInUnits),n=$(t);
return n>i?n:i;
};
o.$oj$ret=function($){
var t=4*(this.$oj$j4-1);
return j._g.$oj$m(this.$oj$F4,this.$oj$I4-Math.round(t/2),$,t+1);
};
o.$oj$iet=function($,t){
var o=4*(this.$oj$j4-1);
return j._g.$oj$m(this.$oj$F4,this.$oj$Z4(t)-Math.round(o/2),$,o+1);
};
o.$oj$set=function(t,o,i){
var n=j._cls.$oj$B4.$oj$V4(t),s=this.$oj$j4-1,r=s*n.heightInUnits,e=s*n.widthInUnits,c=r+n.centerOffset;
if(this.$oj$j4<10){
e=Math.ceil(e);
c=Math.ceil(c);
}else{
e=Math.round(e);
c=Math.round(c);
}
var u=$(t);
u>e&&(e=u);
return j._g.$oj$m(this.$oj$F4+o,this.$oj$Z4(i)-Math.round(r*n.centerInUnits),e,c);
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$oet:1
},null,function($,t){
function o(){
this.$oj$uet=null;
this.$oj$aet=this.$oj$fet=this.$oj$let=this.$oj$cet=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$het=function(){
return this.$oj$uet;
};
t.$oj$N4=function(){
return this.$oj$cet;
};
t.$oj$T4=function(){
return this.$oj$aet;
};
$.$oj$pet=function($,t,o){
var j;
return(j=this.alloc())&&j.$oj$det($,t,o);
};
t.$oj$det=function($,t,j){
var i=this;
if(i=o.$oj_super.prototype.init.call(this)){
i.$oj$uet=$;
i.$oj$cet=t;
i.$oj$aet=j;
}
return i;
};
t.$oj$vet=function($){
this.$oj$let=$;
};
t.$oj$met=function(){
return this.$oj$let;
};
t.$oj$get=function($){
this.$oj$fet=$;
};
t.$oj$yet=function(){
return this.$oj$fet;
};
t.$oj$bet=function($,t){
this.$oj$let=$;
this.$oj$fet=t;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$wet:1
},null,function($,t){
function o(){
this.$oj$Eet=this.$oj$Set=this.$oj$xet=this.$oj$Tet=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Net=function(){
return this.$oj$Set;
};
t.$oj$Cet=function(){
return this.$oj$Eet;
};
t.$oj$ket=function(){
return this.$oj$Tet;
};
t.$oj$Let=function($){
var t,i,n,s=this;
if(s=o.$oj_super.prototype.init.call(this)){
s.$oj$Set=$;
s.$oj$xet=-2==($&&$.$oj$w4())?[(t=new j._cls.$oj$Oet())&&t.$oj$Aet(s.$oj$Set,34,0),(i=new j._cls.$oj$Oet())&&i.$oj$Aet(s.$oj$Set,22,1)]:[(n=new j._cls.$oj$Oet())&&n.$oj$Aet(s.$oj$Set,s.$oj$Set&&s.$oj$Set.$oj$w4(),0)];
s.$oj$Met();
}
return s;
};
t.$oj$Det=function($){
for(var t,o,i=(t=$[0])&&t.$oj$N4(),n=(o=$[0])&&o.$oj$T4(),s=0,r=$.length,e=0;r>e;e++){
var c=$[e];
s=Math.max(c&&c.$oj$Pet(),s);
}
var u=[];
if(s)for(var h=0;s>h;h++){
for(var a=[],l=0;r>l;l++){
var f=$[l],v=h;
1==(f&&f.$oj$Het())&&(v=s-1-h);
Array.prototype.push.apply(a,f&&f.$oj$Bet(v));
}
u.push(j._cls.$oj$oet.$oj$pet(a,i,n));
}else u.push(j._cls.$oj$oet.$oj$pet([],i,n));
return u;
};
t.$oj$Met=function(){
for(var $,t=0,o=[],j=[],i=this.$oj$xet,n=0,s=i?i.length:0;s>n;n++){
$=i[n];
var r=$&&$.$oj$jet(),e=r.length;
e>t&&(t=e);
j.push(r);
}
for(var c=0;t>c;c++){
for(var u=[],h=0;h<j.length;h++){
var a=j[h];
a[c]&&u.push(a[c]);
}
Array.prototype.push.apply(o,this.$oj$Det(u,c));
}
this.$oj$Eet=o;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$H4:1
},null,function($,t){
function o(){
this.$oj$Fet=this.$oj$Iet=this.$oj$qet=null;
this.$oj$Ret=this.$oj$Uet=this.$oj$zet=this.$oj$Wet=this.$oj$Xet=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$C4=function(){
return this.$oj$Fet;
};
t.$oj$k4=function(){
return this.$oj$zet;
};
t.$oj$L4=function(){
return this.$oj$Xet;
};
t.$oj$Vet=function(){
return this.$oj$Wet;
};
t.$oj$Jet=function(){
return this.$oj$Iet;
};
t.$oj$Ket=function(){
return this.$oj$Uet;
};
t.$oj$Qet=function(){
return this.$oj$qet;
};
t.$oj$Get=function(){
return this.$oj$Ret;
};
t.$oj$P4=function($,t,j,i,n,s,r,e){
var c=this;
if(c=o.$oj_super.prototype.init.call(this)){
c.$oj$zet=t;
c.$oj$Iet=n;
c.$oj$Uet=s;
c.$oj$Xet=j;
c.$oj$Wet=i;
c.$oj$Fet=$;
c.$oj$qet=r;
c.$oj$Ret=e;
}
return c;
};
return o;
});
}();
!function(){
"use strict";
var t=9,o=33,i="M",n="S",s="H",r="L,K",e="L,C",c="L,G",u="TA",h="TW",a="LZ";
function l($){
return 3==$||4==$||92==$?0:80==$?1:2;
}
function f($,t){
var o,j,i,n,s,r,e=l((o=$)&&o.$oj$k4())-l((j=t)&&j.$oj$k4());
if(0!=e)return e;
var c=((i=$)&&i.$oj$L4())-((n=t)&&n.$oj$L4());
if(0!=c)return c;
var u=(s=$)&&s.$oj$C4(),h=(r=t)&&r.$oj$C4(),a=h.x-u.x;
if(0!=a)return a;
return 0;
}
j._registerClass({
$oj$Yet:1
},null,function(l,v){
function d(){
this.$oj$Zet=this.$oj$ett=this.$oj$ttt=this.$oj$ntt=this.$oj$rtt=this.$oj$itt=this.$oj$stt=this.$oj$ott=null;
this.$oj$utt=this.$oj$att=this.$oj$ftt=this.$oj$ltt=this.$oj$ctt=0;
this.constructor=d;
this.$oj_id=++j._id;
}
v.$oj$htt=function($){
if($&&$.$oj$ptt()||$&&$.$oj$dtt())return!0;
for(var t,o=$&&$.$oj$vtt(),j=0,i=o?o.length:0;i>j;j++){
t=o[j];
if(t&&t.$oj$mtt())return!0;
}
return!1;
};
v.$oj$gtt=function(){
var $=this.$oj$itt&&this.$oj$itt.$oj$ytt(),t=.5;
if(0!=$){
var o=Math.abs(this.$oj$itt&&this.$oj$itt.$oj$E4());
o>=7?t=.4:o>=6&&(t=.45);
}
return Math.round(this.$oj$ltt*t);
};
v.$oj$btt=function(t){
var o=this,j=0,i=0,n=0,s=0,r=[],e=[],c=!1,u=Math.round(.25*this.$oj$ltt),h=Math.round(.5*this.$oj$ltt),a=Math.round(.9*(this.$oj$Zet&&this.$oj$Zet.$oj$net(30))),l=Math.round(.8*(this.$oj$Zet&&this.$oj$Zet.$oj$net(22))),f=Math.round(.9*(this.$oj$Zet&&this.$oj$Zet.$oj$net(26))),v=this.$oj$Zet&&this.$oj$Zet.$oj$net(25),d=0,_=$.map(t,function($){
var t,_=$&&$.$oj$N4(),g={
x:0,
w:0
},p=(t=($&&$.$oj$het())[0])&&t.$oj$k4();
if(1==_){
g.w=o.$oj$Zet&&o.$oj$Zet.$oj$net(p);
d+=g.w+h;
}else if(2==_){
if(p){
c=!0;
g.x=d;
if(22==p){
g.w=l;
d+=g.w+1;
}else if(26==p){
g.w=f;
g.x-=Math.round((g.w-v)/2);
d+=v+u;
}else{
g.w=v;
d+=g.w+u;
}
}
}else if(3==_){
r.push(g);
if(p){
g.w=22==p?l:26==p?f:v;
i+=g.w;
s++;
}
}else if(4==_){
e.push(g);
g.w=a;
j+=a;
n++;
}
return g;
});
d+=r[0].w?4*u:3*u;
if(!c){
i=0;
s=0;
}
var g=o.$oj$ctt-(d+h+j+i),p=g/(3*(n-1)+s),y=0;
function m($){
var t=p*$,o=Math.round(t+y);
y+=t-o;
return o;
}
for(var w=0;w<e.length;w++){
var b=r[w],S=e[w];
if(b.w)if(c){
b.x=d;
d+=b.w+m(1);
}else{
b.x=d-b.w;
S.x+=u;
}
S.x+=d;
d+=S.w+m(3);
}
return _;
};
v.$oj$wtt=function(t){
var o=this,j=this.$oj$gtt(),i=0,n=this.$oj$ctt-this.$oj$att,s=[],r=[],e=$.map(t,function($){
var t,n=$&&$.$oj$N4(),e=(t=($&&$.$oj$het())[0])&&t.$oj$k4(),c=o.$oj$Zet&&o.$oj$Zet.$oj$net(e),u={
x:i,
w:c
};
1==n?i+=c+2*j:2==n?i+=c+j:3==n?s.push(u):4==n&&r.push(u);
return u;
});
i-=j;
for(var c=1.25,u=(n-i)/(2*c+(r.length-1)),h=0;h<r.length;h++){
var a=s[h],l=r[h];
if(!a||!l)continue;
var f=i+u*(c+h);
l.x=Math.round(f-l.w/2);
a.x=l.x-(a.w+j);
}
return e;
};
v.$oj$Ett=function(t){
var o=this,j=[];
function i(t){
var o=$.first(t&&t.$oj$het());
return o&&o.$oj$r8();
}
function n(){
for(var $,n=0,s=void 0,r=void 0,e=2,c=o.$oj$gtt(),u=0,h=t?t.length:0;h>u;u++){
$=t[u];
for(var a,l=$&&$.$oj$N4(),f=0,v=$&&$.$oj$het(),d=0,_=v?v.length:0;_>d;d++){
a=v[d];
var g=o.$oj$Zet&&o.$oj$Zet.$oj$net(a&&a.$oj$k4());
g>f&&(f=g);
}
var p={
x:0,
c:$,
w:f,
lPad:0,
lFlex:0,
rPad:0,
rFlex:0
};
if(1==l)p.rPad=2*c;else if(2==l)p.rPad=c;else if(4==l){
p.rPad=2*o.$oj$ltt;
p.rFlex=1;
if(4==n)if(i(s.c)==i($)){
s.rPad=0;
s.rFlex=0;
}else{
s.rPad=Math.round(-.176777*o.$oj$ltt);
s.rFlex=0;
}
r=p;
}else if(3==l){
if(2==n){
p.lPad=2*o.$oj$ltt;
p.lFlex=e;
}
p.rPad=p.w>0?c:0;
}
2==n&&2!=l&&(s.rPad=0);
1==n&&0==p.w&&(s.rPad=0);
j.push(p);
s=p;
n=l;
}
r.rFlex=e;
}
var s=0,r=0,e=0,c=0;
function u(){
for(var $,t=0,o=j?j.length:0;o>t;t++){
$=j[t];
var i=$.lPad,n=$.rPad;
s+=i+n;
$.lFlex?c+=$.lFlex:r+=i;
$.rFlex?c+=$.rFlex:r+=n;
e+=$.w;
}
}
function h(){
var $=e+s-(o.$oj$ctt-o.$oj$att),t=0,i=0;
function n(o){
if(!o)return 0;
var j=$*(o/s),n=Math.floor(j+t);
t=j-n;
i+=n;
return o-n;
}
for(var r,c=0,u=j?j.length:0;u>c;c++){
r=j[c];
r.lPad=n(r.lPad);
r.rPad=n(r.rPad);
}
}
function a(){
var $=o.$oj$ctt-o.$oj$att-(e+r),t=$/c,i=0;
function n($){
var o=t*$,j=Math.floor(o+i);
i=o-j;
return j;
}
for(var s,u=0,h=j?j.length:0;h>u;u++){
s=j[u];
if(s.lFlex){
s.lPad=n(s.lFlex);
s.lFlex=0;
}
if(s.rFlex){
s.rPad=n(s.rFlex);
s.rFlex=0;
}
}
}
function l(){
for(var $,t=0,o=0,i=j?j.length:0;i>o;o++){
$=j[o];
t+=$.lPad;
$.x=t;
t+=$.w+$.rPad;
}
}
n();
u();
e+s>=o.$oj$ctt?h():a();
l();
return j;
};
v.$oj$Stt=function($){
for(var t,o=0,j=1/0,i=1/0,n=0,s=[],r=0,e=$?$.length:0;e>r;r++){
t=$[r];
var c=t.c,u=c&&c.$oj$N4();
if(2==u||1==u)o=Math.max(o,t.x+t.w);else if(3==u){
j=Math.min(j,t.x);
s.push(t);
}else if(4==u){
i=Math.min(i,t.x);
n=Math.max(n,t.x+t.w);
s.push(t);
}
}
var h=i+Math.round((n-i)/2),a=o+Math.round(this.$oj$ctt-this.$oj$att-o)/2,l=h-a,f=Math.min(j,i)-o-this.$oj$ltt;
l>f&&(l=f);
for(var v,d=0,_=s?s.length:0;_>d;d++){
v=s[d];
v.x-=l;
}
};
v.$oj$xtt=function($){
var t;
if(!$)return;
var o=this.$oj$itt&&this.$oj$itt.$oj$ytt(),j=null;
if(1==o)j=this.$oj$btt($);else if(3==o)j=this.$oj$wtt($);else if(2==o){
j=this.$oj$Ett($);
this.$oj$Stt(j);
}else j=this.$oj$Ett($);
for(var i=0;i<j.length;i++){
var n=j[i];
(t=$[i])&&t.$oj$bet(n.x,n.w);
}
};
v.$oj$Ttt=function(){
for(var $,t=0;t<this.$oj$stt.length;t++){
this.$oj$Zet&&this.$oj$Zet.$oj$U4(this.$oj$ott[t]);
var o=($=new j._cls.$oj$H4())&&$.$oj$P4(this.$oj$Zet&&this.$oj$Zet.$oj$ret(this.$oj$ctt),3,0,1,n+","+t,0,null,0);
this.$oj$ntt.push(o);
}
};
v.$oj$Ntt=function(t){
var o=this,n=(Math.round(.5*this.$oj$ltt),void 0),s=void 0;
if(1==(this.$oj$itt&&this.$oj$itt.$oj$ytt())){
n=Math.round(.9*(this.$oj$Zet&&this.$oj$Zet.$oj$net(30)));
s=Math.round(1.5*n);
}else{
n=this.$oj$Zet&&this.$oj$Zet.$oj$net(30);
s=Math.round(1.6*n);
}
Math.floor(s)%2!=Math.floor(n)%2&&(s+=1);
for(var r,e=(4&(this.$oj$itt&&this.$oj$itt.$oj$Vet()))>0,c={},u=function(u,h){
u=t[h];
var a=u&&u.$oj$met(),l=u&&u.$oj$yet();
$.each(u&&u.$oj$het(),function($){
var t,r=$&&$.$oj$Ctt();
o.$oj$Zet&&o.$oj$Zet.$oj$U4(o.$oj$ott[r]);
var h=u&&u.$oj$N4(),f=$&&$.$oj$k4(),v=$&&$.$oj$r8(),d=4==f,_=void 0;
if(d){
var g=a-(s-n)/2;
_=j._g.$oj$m(g,o.$oj$Zet&&o.$oj$Zet.$oj$Z4(v),s,1);
}else{
_=o.$oj$Zet&&o.$oj$Zet.$oj$set(f,a,$&&$.$oj$r8());
_.width>l&&(_.width=l);
_.x+=Math.round((l-_.width)/2);
}
var p=i+(u&&u.$oj$T4())+","+h+","+r+","+f+","+v,y=c[p]||0;
y++;
c[p]=y;
p+=","+y;
var m=0;
1==h?m|=1:e&&2==h?m|=2:d||4!=h&&3!=h||(m|=2);
var w=0;
30==f&&(w=j._cls.$oj$B4.$oj$G4(v,o.$oj$itt&&o.$oj$itt.$oj$w4(),r));
var b=(t=new j._cls.$oj$H4())&&t.$oj$P4(_,f,$&&$.$oj$L4(),m,p,u&&u.$oj$T4(),null,w);
d||o.$oj$ett&&o.$oj$ett.$oj$x4(b,r,v,u);
4!=h&&3!=h||d?(1==h||2==h)&&(o.$oj$ttt=j._g.$oj$M(o.$oj$ttt,_)):o.$oj$rtt=j._g.$oj$M(o.$oj$rtt,_);
o.$oj$ntt.push(b);
});
r=u;
},h=0,a=t?t.length:0;a>h;h++)u(r,h,a);
};
v.$oj$ktt=function(){
var $=this,t=this.$oj$itt&&this.$oj$itt.$oj$Ltt(),o=t&&t.$oj$Att(),i=t&&t.$oj$Ott(),n=!i||1==i,r=!i||2==i,e=this.$oj$Zet&&this.$oj$Zet.$oj$ret(this.$oj$ctt),c=j._g.$oj$L(e),u=this.$oj$Zet&&this.$oj$Zet.$oj$X4(),h=Math.round(this.$oj$Zet&&this.$oj$Zet.$oj$tet(.75));
j._g.$oj$e(h,2)==j._g.$oj$e(u,2)&&h++;
j._cls.$oj$f8.$oj$a8(o)&&this.$oj$att<24&&h>13&&(h=13);
function a(t,o,i,n,r){
var e,c=$.$oj$Zet&&$.$oj$Zet.$oj$Z4(o),u=s+",91,"+i+","+o,a=(e=new j._cls.$oj$H4())&&e.$oj$P4(j._g.$oj$m(t,c,0,0),91,0,0,u,0,r,h);
n&&$.$oj$ett&&$.$oj$ett.$oj$O4(a,i,o,n);
$.$oj$ntt.push(a);
}
function l(t,o){
var i,n=c-$.$oj$att,r=$.$oj$Zet&&$.$oj$Zet.$oj$Z4(t),e=s+",92,"+o+","+t,u=(i=new j._cls.$oj$H4())&&i.$oj$P4(j._g.$oj$m(n,r,$.$oj$att,1),92,0,0,e,0,null,0);
$.$oj$ntt.push(u);
}
function f(){
for(var t=Math.floor($.$oj$att/2),i=c-t,s=c+t,e=0;e<$.$oj$stt.length;e++){
$.$oj$Zet&&$.$oj$Zet.$oj$U4($.$oj$ott[e]);
for(var u=!0,h=-4;4>=h;h++){
u=!u;
if(u&&!r)continue;
if(!u&&!n)continue;
var l=j._cls.$oj$l8.$oj$w8($.$oj$stt[e],h,o,!1),f=j._cls.$oj$l8.$oj$w8($.$oj$stt[e],h,o,!0);
a(u?i:s,h,e,f,l);
}
}
}
function v(){
var t=void 0,i=void 0;
if(9==o||10==o)t=i="1";else if(12==o)t=i="La";else{
t="Do";
i="Doe";
}
for(var n=$.$oj$itt&&$.$oj$itt.$oj$E4(),s=j._cls.$oj$f8.$oj$u4(o),r=j._cls.$oj$j9.$oj$U9(s,n,4),e=0;e<$.$oj$stt.length;e++){
var c=$.$oj$stt[e];
$.$oj$Zet&&$.$oj$Zet.$oj$U4($.$oj$ott[e]);
var u=j._g.$oj$e(r&&r.$oj$fn($.$oj$stt[e]),7),h=$.$oj$Zet&&$.$oj$Zet.$oj$ret($.$oj$ctt),f=j._g.$oj$L(h),v=-4,d=4;
34==c&&(v=-6);
22==c&&(d=e>0?5:6);
34==c&&2==u&&l(-6,e);
22==c&&5==u&&l(6,e);
for(var _=v;d>=_;_++){
var g=j._g.$oj$e(_,7);
if(g==u){
0==j._g.$oj$e(_,2)&&l(_,e);
a(f-$.$oj$att/2,_,e,i,t);
}
}
}
}
j._cls.$oj$f8.$oj$s4(t&&t.$oj$Att())?v():f();
};
v.$oj$Mtt=function(){
var $,t,o=this,i=j._g.$oj$y(this.$oj$rtt);
if(!i)return;
function n($){
var t,i=o.$oj$Zet&&o.$oj$Zet.$oj$set(82,0,$),n=(t=new j._cls.$oj$H4())&&t.$oj$P4(i,82,0,4,h+","+$,0,null,$);
o.$oj$ntt.push(n);
}
var s=o.$oj$itt&&o.$oj$itt.$oj$Dtt(),r=-2==(o.$oj$itt&&o.$oj$itt.$oj$w4()),e=r?-12:-6,c=r?12:6;
e=Math.min(s&&s.$oj$Bn(),e);
c=Math.max(s&&s.$oj$Hn(),c);
o.$oj$Zet&&o.$oj$Zet.$oj$U4(o.$oj$ftt);
n(e);
n(c);
var a=o.$oj$itt&&o.$oj$itt.$oj$S4(),l=($=j._cls.$oj$Htt.$oj$ti())&&$.$oj$Ptt(),f=!1,v=!1;
if(4==a){
v=!0;
f=!0;
}else(1==a||2==a)&&(v=!l);
if(f){
i.x=j._g.$oj$L(o.$oj$ttt);
i.width=o.$oj$ctt-o.$oj$att-i.x;
}
if(v){
i.y=o.$oj$Zet&&o.$oj$Zet.$oj$Z4(c);
i.height=(o.$oj$Zet&&o.$oj$Zet.$oj$Z4(e))-i.y;
}
if(i){
var d=o.$oj$Zet&&o.$oj$Zet.$oj$X4();
i=j._g.$oj$E(i,-d,-d);
if(i.width<64){
i.x+=Math.round((i.width-64)/2);
i.width=64;
}
if(i.height<64){
i.y+=Math.round((i.height-64)/2);
i.height=64;
}
var _=0;
4==(o.$oj$itt&&o.$oj$itt.$oj$S4())&&(_=1);
var g=(t=new j._cls.$oj$H4())&&t.$oj$P4(i,81,0,4,u,0,null,_);
o.$oj$ntt.push(g);
}
};
v.$oj$Btt=function(t){
var o=this,i=this.$oj$itt,n=!1,s=this.$oj$ctt-this.$oj$att,u=s,h=0,l=0,f=0,v=[],d=[],_=100,g=this.$oj$stt.length-1,p=Math.round(j._g.$oj$i(this.$oj$Zet&&this.$oj$Zet.$oj$X4(),[13,13,24,30]));
function y(){
for(var $,j=0,i=t?t.length:0;i>j;j++){
$=t[j];
var r=$&&$.$oj$N4(),e=$&&$.$oj$T4(),c=$&&$.$oj$met(),a=c+($&&$.$oj$yet());
if(1==r)l=a;else if(2==r){
u>c&&(u=c);
a>h&&(h=a);
n=!0;
}else if(4==r){
var f=v[e]||o.$oj$ctt,p=d[e]||0;
v[e]=f>c?c:f;
d[e]=a>p?a:p;
for(var y,m=$&&$.$oj$het(),w=0,b=m?m.length:0;b>w;w++){
y=m[w];
var S=y&&y.$oj$Ctt();
if(S==g){
var M=y&&y.$oj$r8();
_>M&&(_=M);
}
}
}
}
if(1==v.length){
var F=Math.round(Math.min(v[0]-h,s-d[0]));
v[0]-=F;
d[0]+=F;
}
}
function m(){
for(var $,t=o.$oj$ntt,i=0,n=t?t.length:0;n>i;i++){
$=t[i];
var s=$&&$.$oj$k4();
(3==s||30==s)&&(f=Math.max(j._g.$oj$A($&&$.$oj$C4()),f));
}
}
function w($,t,i,n){
var s,r=Math.min(o.$oj$Zet&&o.$oj$Zet.$oj$Z4(Math.min(-9,_-4)),f+Math.round((o.$oj$utt-f)/2)),e=(s=new j._cls.$oj$H4())&&s.$oj$P4(j._g.$oj$m(t,r,i-t,0),90,0,0,$,0,n&&n.$oj$jtt(),p);
o.$oj$ett&&o.$oj$ett.$oj$M4(e,n&&n.$oj$Ftt());
o.$oj$ntt.push(e);
}
function b(){
var $=i&&i.$oj$ptt();
if(!$)return;
var t=u,j=h;
if(!n){
t=l+o.$oj$ltt/2;
j=l+o.$oj$ltt;
}
w(r,t,j,$);
}
function S(){
var $=o.$oj$itt&&o.$oj$itt.$oj$dtt();
if(!$)return;
if(1&(i&&i.$oj$Vet()))w(e,0,o.$oj$ctt,$);else{
var t=Math.max(l,h);
w(e,t,o.$oj$ctt,$);
}
}
function M(){
for(var $,t=0,j=o.$oj$itt&&o.$oj$itt.$oj$vtt(),i=0,n=j?j.length:0;n>i;i++){
$=j[i];
var s=$&&$.$oj$mtt();
if(s){
var r=c+","+t;
w(r,v[t],d[t],s);
}
t++;
}
}
function F(){
var $,t=i&&i.$oj$Itt();
if(!t)return;
var s=o.$oj$Zet&&o.$oj$Zet.$oj$Z4((t&&t.$oj$Hn())+1),r=(o.$oj$Zet&&o.$oj$Zet.$oj$Z4((t&&t.$oj$Bn())-1))+1,e=n?h:l,c=j._g.$oj$m(e,s,o.$oj$ctt-o.$oj$att-e,r-s),u=j._g.$oj$y(c);
u.width=8*Math.round(o.$oj$ltt);
j._g.$oj$U(u,c);
var f=($=new j._cls.$oj$H4())&&$.$oj$P4(u,80,0,0,a,0,null,0);
o.$oj$ett&&o.$oj$ett.$oj$A4(f,t);
o.$oj$ntt.unshift(f);
}
o.$oj$Zet&&o.$oj$Zet.$oj$U4($.last(o.$oj$ott));
y();
m();
b();
S();
M();
o.$oj$Zet&&o.$oj$Zet.$oj$U4(o.$oj$ftt);
F();
};
v.$oj$qtt=function($,i,n,s,r){
var e,c=o,u=Math.round(n/2),h=(e=new j._cls.$oj$B4())&&e.init();
h&&h.$oj$U4(u);
if(r&&n>=1){
var a=void 0,l=0,f=6,v=-6;
if(-2==$){
a=12;
l=4;
f=10;
v=-10;
}else{
a=j._cls.$oj$B4.$oj$K4($);
l=j._cls.$oj$B4.$oj$Y4($);
}
for(var d=Math.max(r&&r.$oj$Hn(),f),_=Math.min(r&&r.$oj$Bn(),v),g=1,p=n-1;c>=t;){
h&&h.$oj$W4(c);
var y=h&&h.$oj$set(23,0,d),m=h&&h.$oj$set(25,0,_),w=h&&h.$oj$set(a,0,l),b=j._g.$oj$N(y)>=g,S=j._g.$oj$A(m)<=p,M=j._g.$oj$N(w)>=g&&j._g.$oj$A(w)<=p;
if(b&&S&&M)break;
c-=2;
}
}
if(s&&n>=1)for(var F=c;c>=t;){
h&&h.$oj$W4(c);
var E=h&&h.$oj$set(30,0,0),x=i/E.width;
if(x>s){
c=F;
break;
}
F=c;
c-=2;
}
return c;
};
v.$oj$Rtt=function($,t,o,i){
var n,s,r,e,c=$&&$.$oj$w4(),u=($&&$.$oj$E4(),$&&$.$oj$Itt()),h=$&&$.$oj$Ltt(),a=$&&$.$oj$S4(),l=this.$oj$htt($),v=this.$oj$qtt(c,t,o,$&&$.$oj$Utt(),$&&$.$oj$Dtt());
this.$oj$itt=$;
this.$oj$ltt=v;
this.$oj$ctt=t;
this.$oj$utt=o;
this.$oj$ftt=Math.round(o/2);
this.$oj$Zet=(n=new j._cls.$oj$B4())&&n.init();
this.$oj$Zet&&this.$oj$Zet.$oj$W4(v);
this.$oj$Zet&&this.$oj$Zet.$oj$U4(this.$oj$ftt);
if(-2==c){
this.$oj$stt=[34,22];
this.$oj$ott=[this.$oj$Zet&&this.$oj$Zet.$oj$Z4(6),this.$oj$Zet&&this.$oj$Zet.$oj$Z4(-6)];
}else{
this.$oj$stt=[c];
this.$oj$ott=[this.$oj$ftt];
}
if(h){
var d=Math.round(.75*(this.$oj$Zet&&this.$oj$Zet.$oj$net(30)));
this.$oj$att=Math.min(d,i);
}else this.$oj$att=0;
this.$oj$ett=(s=new j._cls.$oj$h4())&&s.init();
this.$oj$ett&&this.$oj$ett.$oj$b4(this.$oj$itt,this.$oj$stt.length);
var _=(r=new j._cls.$oj$wet())&&r.$oj$Let(this.$oj$itt),g=_&&_.$oj$Cet();
this.$oj$xtt(g,this.$oj$itt&&this.$oj$itt.$oj$ytt());
this.$oj$ntt=[];
this.$oj$Ttt();
this.$oj$Ntt(g);
h&&this.$oj$ktt();
(u||l)&&this.$oj$Btt(g);
0!=a&&this.$oj$Mtt();
this.$oj$ntt.sort(f);
this.$oj$ett&&this.$oj$ett.$oj$D4(this.$oj$ntt);
var p=(e=new j._cls.$oj$ztt())&&e.init();
p&&p.$oj$Wtt(this.$oj$ntt);
this.$oj$Zet=null;
this.$oj$itt=null;
this.$oj$ntt=null;
this.$oj$ett=null;
this.$oj$rtt=null;
this.$oj$ttt=null;
return p;
};
return d;
});
j._registerClass({
$oj$ztt:1
},null,function($,t){
function o(){
this.$oj$Xtt=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Wtt=function($){
this.$oj$Xtt=$;
};
t.$oj$Vtt=function(){
return this.$oj$Xtt;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Jtt:1
},null,function($,t){
function o(){
this.$oj$Ktt=this.$oj$Qtt=this.$oj$Gtt=this.$oj$Ytt=this.$oj$Ztt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$k4=function(){
return this.$oj$Qtt;
};
t.$oj$r8=function(){
return this.$oj$Gtt;
};
t.$oj$Ctt=function(){
return this.$oj$Ytt;
};
t.$oj$ent=function(){
return this.$oj$Ktt;
};
t.$oj$L4=function(){
return this.$oj$Ztt;
};
t.$oj$tnt=function($,t,j,i,n){
var s=this;
if(s=o.$oj_super.prototype.init.call(this)){
s.$oj$Qtt=$;
s.$oj$Gtt=t;
s.$oj$Ytt=j;
s.$oj$Ktt=i;
s.$oj$Ztt=n;
if(null===s.$oj$Gtt||void 0===s.$oj$Gtt)throw new Error("position is null");
}
return s;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$nnt:1
},null,function($,t){
function o(){
this.$oj$rnt=this.$oj$int=this.$oj$snt=this.$oj$ont=this.$oj$unt=this.$oj$ant=null;
this.$oj$fnt=this.$oj$lnt=this.$oj$cnt=this.$oj$hnt=this.$oj$pnt=this.$oj$dnt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$vnt=function($){
this.$oj$fnt=$;
};
t.$oj$w4=function(){
return this.$oj$fnt;
};
t.$oj$mnt=function($){
this.$oj$cnt=$;
};
t.$oj$E4=function(){
return this.$oj$cnt;
};
t.$oj$gnt=function($){
this.$oj$ont=$;
};
t.$oj$ptt=function(){
return this.$oj$ont;
};
t.$oj$ynt=function($){
this.$oj$rnt=$;
};
t.$oj$dtt=function(){
return this.$oj$rnt;
};
t.$oj$bnt=function($){
this.$oj$unt=$;
};
t.$oj$Itt=function(){
return this.$oj$unt;
};
t.$oj$wnt=function($){
this.$oj$int=$;
};
t.$oj$vtt=function(){
return this.$oj$int;
};
t.$oj$Ent=function($){
this.$oj$snt=$;
};
t.$oj$Ltt=function(){
return this.$oj$snt;
};
t.$oj$Snt=function($){
this.$oj$pnt=$;
};
t.$oj$Vet=function(){
return this.$oj$pnt;
};
t.$oj$xnt=function($){
this.$oj$dnt=$;
};
t.$oj$Utt=function(){
return this.$oj$dnt;
};
t.$oj$Tnt=function($){
this.$oj$ant=$;
};
t.$oj$Dtt=function(){
return this.$oj$ant;
};
t.$oj$Nnt=function($){
this.$oj$lnt=$;
};
t.$oj$S4=function(){
return this.$oj$lnt;
};
t.$oj$Cnt=function($){
this.$oj$hnt=$;
};
t.$oj$ytt=function(){
return this.$oj$hnt;
};
t.$oj$knt=function($){
this.$oj$Lnt(j._cls.$oj$Ont.$oj$Ant($));
};
t.$oj$Lnt=function($){
this.$oj$int||(this.$oj$int=[]);
this.$oj$int.push($);
};
return o;
});
j._registerClass({
$oj$Ont:1
},null,function($,t){
function o(){
this.$oj$Mnt=this.$oj$Dnt=this.$oj$Pnt=null;
this.$oj$Hnt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Cr=function(){
return this.$oj$Dnt;
};
t.$oj$Bnt=function(){
return this.$oj$Pnt;
};
t.$oj$jnt=function($){
this.$oj$Mnt=$;
};
t.$oj$mtt=function(){
return this.$oj$Mnt;
};
t.$oj$Fnt=function($){
this.$oj$Hnt=$;
};
t.$oj$Int=function(){
return this.$oj$Hnt;
};
$.$oj$Ant=function($){
var t;
return(t=this.alloc())&&t.$oj$qnt($);
};
$.$oj$Rnt=function($){
var t;
return(t=this.alloc())&&t.$oj$Unt($);
};
t.$oj$qnt=function($){
var t=this;
if(t=o.$oj_super.prototype.init.call(this)){
t.$oj$Dnt=$;
t.$oj$Hnt=-1;
}
return t;
};
t.$oj$Unt=function($){
var t=this;
if(t=o.$oj_super.prototype.init.call(this)){
t.$oj$Pnt=$;
t.$oj$Hnt=-1;
}
return t;
};
t.$oj$znt=function(){
return null!=this.$oj$Dnt;
};
return o;
});
j._registerClass({
$oj$Wnt:1
},null,function($,t){
function o(){
this.$oj$Xnt=this.$oj$Vnt=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Jnt=function($){
this.$oj$Xnt=$;
};
t.$oj$jtt=function(){
return this.$oj$Xnt;
};
t.$oj$Knt=function($){
this.$oj$Vnt=$;
};
t.$oj$Ftt=function(){
return this.$oj$Vnt;
};
return o;
});
j._registerClass({
$oj$Qnt:1
},null,function($,t){
function o(){
this.$oj$Gnt=this.$oj$Ynt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Znt=function($){
this.$oj$Gnt=$;
};
t.$oj$Att=function(){
return this.$oj$Gnt;
};
t.$oj$ert=function($){
this.$oj$Ynt=$;
};
t.$oj$Ott=function(){
return this.$oj$Ynt;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$trt:1
},null,function($,t){
function o(){
this.$oj$nrt=null;
this.$oj$rrt=this.$oj$irt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$het=function(){
return this.$oj$nrt;
};
t.$oj$N4=function(){
return this.$oj$irt;
};
t.$oj$T4=function(){
return this.$oj$rrt;
};
t.$oj$srt=function($,t,j){
var i=this;
if(i=o.$oj_super.prototype.init.call(this)){
i.$oj$nrt=j;
i.$oj$irt=$;
i.$oj$rrt=t;
}
return i;
};
t.$oj$Bet=function($){
for(var t,o=[],j=this.$oj$nrt,i=0,n=j?j.length:0;n>i;i++){
t=j[i];
(t&&t.$oj$ent())==$&&o.push(t);
}
return o;
};
t.$oj$Pet=function(){
for(var $,t=-1,o=this.$oj$nrt,j=0,i=o?o.length:0;i>j;j++){
$=o[j];
var n=$&&$.$oj$ent();
n>t&&(t=n);
}
return t+1;
};
t.$oj$Het=function(){
return 3==this.$oj$irt?1:0;
};
return o;
});
}();
!function(){
"use strict";
function t(t){
var o,j=0;
$.each((o=t)&&o.$oj$vtt(),function(o){
var i,n,s,r,e=!1,c=!1,u=0;
function h($){
u>$&&(u=$);
0==$?e=!0:-1==$&&(c=!0);
}
if((i=o)&&i.$oj$znt()){
var a=(n=t)&&n.$oj$w4();
$.each((s=o)&&s.$oj$Cr(),function($){
var t;
h((t=$)&&t.$oj$fn(a));
});
}else $.each((r=o)&&r.$oj$Bnt(),function($){
var t;
h((t=$)&&t.$oj$r8());
});
e&&c&&(j=u);
});
return j;
}
j._registerClass({
$oj$Oet:1
},null,function(o,i){
function n(){
this.$oj$ort=this.$oj$urt=null;
this.$oj$art=this.$oj$frt=this.$oj$lrt=0;
this.$oj$crt=!1;
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$Net=function(){
return this.$oj$ort;
};
i.$oj$jet=function(){
return this.$oj$urt;
};
i.$oj$w4=function(){
return this.$oj$art;
};
i.$oj$E4=function(){
return this.$oj$frt;
};
i.$oj$Ctt=function(){
return this.$oj$lrt;
};
i.$oj$hrt=function(){
return this.$oj$crt;
};
i.$oj$Aet=function($,t,o){
var j=this;
if(j=n.$oj_super.prototype.init.call(this)){
j.$oj$art=t;
j.$oj$lrt=o;
j.$oj$urt=[];
j.$oj$ort=$;
j.$oj$frt=$&&$.$oj$E4();
j.$oj$prt();
j.$oj$drt();
j.$oj$vrt();
}
return j;
};
i.$oj$prt=function(){
var $,t,o=($=new j._cls.$oj$Jtt())&&$.$oj$tnt(j._cls.$oj$B4.$oj$K4(this.$oj$art),j._cls.$oj$B4.$oj$Y4(this.$oj$art),this.$oj$lrt,0,0);
this.$oj$urt.push((t=new j._cls.$oj$trt())&&t.$oj$srt(1,0,[o]));
};
i.$oj$drt=function(){
for(var $,t,o=[],i=(this.$oj$ort&&this.$oj$ort.$oj$E4(),Math.abs(this.$oj$frt)),n=this.$oj$frt<0?23:25,s=this.$oj$frt<0?-1:1,r=[],e=0;i>e;e++){
var c=e%7;
c<r.length?r[c]+=s:r.push(n);
}
for(var u=0;u<r.length;u++){
var h=j._cls.$oj$B4.$oj$J4(this.$oj$art,this.$oj$frt,u),a=r[u],l=0;
a!=n&&(l=1);
var f=($=new j._cls.$oj$Jtt())&&$.$oj$tnt(r[u],h,this.$oj$lrt,u,l);
o.push(f);
}
this.$oj$urt.push((t=new j._cls.$oj$trt())&&t.$oj$srt(2,0,o));
};
i.$oj$vrt=function(){
var o=this,i=function(){
return!0;
},n=o.$oj$ort&&o.$oj$ort.$oj$w4(),s=o.$oj$lrt,r=0;
if(-2==n){
var e=t(o.$oj$ort);
if(34==o.$oj$art){
i=function($){
return $>=e;
};
r=-6;
}else if(22==o.$oj$art){
i=function($){
return e>$;
};
r=6;
}
}
for(var c,u=(2&(o.$oj$ort&&o.$oj$ort.$oj$Vet()))>0,h=0,a=function(t,r,e){
t=r[e];
var a=t&&t.$oj$Int(),l=[];
t&&t.$oj$znt()?$.each(t&&t.$oj$Cr(),function($,t){
var j=$&&$.$oj$fn(n),s=$&&$.$oj$jt();
i(j)&&l.push({
p:$&&$.$oj$fn(o.$oj$art),
a:$&&$.$oj$ln(o.$oj$frt),
i:Math.abs(s)>=(u?2:3),
s:a==t
});
}):$.each(t&&t.$oj$Bnt(),function($,t){
var o=$&&$.$oj$r8(),r=$&&$.$oj$i8(),e=-100==r?0:r;
i(o)&&l.push({
p:j._cls.$oj$B4.$oj$Q4(o,n,s),
a:r,
i:Math.abs(e)>=(u?2:3),
s:a==t
});
});
o.$oj$mrt(t,h,l);
h++;
c=t;
},l=o.$oj$ort&&o.$oj$ort.$oj$vtt(),f=0,v=l?l.length:0;v>f;f++)a(c,l,f,v);
};
i.$oj$mrt=function(t,o,i){
var n,s,r=this;
i||(i=[]);
var e=[],c=this.$oj$ort&&this.$oj$ort.$oj$Itt();
if(c){
var u=c&&c.$oj$On(),h=c&&c.$oj$Dn();
u=j._cls.$oj$B4.$oj$Q4(u,this.$oj$ort&&this.$oj$ort.$oj$w4(),this.$oj$lrt);
h=j._cls.$oj$B4.$oj$Q4(h,this.$oj$ort&&this.$oj$ort.$oj$w4(),this.$oj$lrt);
c=j._cls.$oj$Cn.$oj$jn(u,h);
}
var a=[],l=[],f=[],v=[],d=0;
function _(t,o,i){
var n,s=o.p,u=0;
!c||c&&c.$oj$qn(s)||(u=2);
i&&(o.s?u=3:$.includes(e,s)&&(u=1));
var h=(n=new j._cls.$oj$Jtt())&&n.$oj$tnt(o.g,s,r.$oj$lrt,o.o,u);
t.push(h);
}
function g($,t){
var o=0>$?-1:1;
$*=o;
$%2&&$--;
for(;$>4;){
var j=$*o;
_(l,{
g:4,
p:j,
o:t,
s:!1
},!1);
$-=2;
}
}
i.sort(function($,t){
return $.p-t.p;
});
$.each(i,function($){
var t=$.p,o=$.a,j=$.i,i=$.s;
f.push({
p:t,
g:30,
o:0,
s:i
});
-100!=o&&v.push({
p:t,
g:o+24,
o:0,
s:i
});
d+=t;
j&&e.push(t);
});
{
var p=0,y=0,m=v.length;
(2&(r.$oj$ort&&r.$oj$ort.$oj$Vet()))>0;
}
if(m>1){
var w=v[0],b=v[m-1];
b.o=p;
var S=Math.abs(b.p-w.p),M=w.g>=20&&w.g<=23,F=b.g>=20&&b.g<=24,E=M&&!F;
if(S>6||S>5&&!E){
w.o=p;
y++;
}
p++;
m--;
}
for(;m>y;y++)v[y].o=p++;
v=v.sort(function($,t){
return t.o-$.o;
});
for(var x=0,q=v.length;q>x;x++)_(a,v[x],!0);
for(var C=Number.MAX_VALUE,T=Number.MIN_VALUE,D=Number.MAX_VALUE,O=Number.MIN_VALUE,P=f.length,A=[!1],N=!1,I=1;P>I;I++){
var L=f[I].p-f[I-1].p<2;
A[I]=L;
L&&(N=!0);
}
if(N){
var B=d>=0;
if(B)for(var H=P-1;H>=0;H--){
f[H].o=B?1:0;
B=A[H]?!B:!0;
}else for(var K=1;P>K;K++){
B=A[K]?!B:!1;
f[K].o=B?1:0;
}
}
for(var z=0;P>z;z++){
var J=f[z],Z=J.p,k=J.o;
if(k>0){
D>Z&&(D=Z);
Z>O&&(O=Z);
}else{
C>Z&&(C=Z);
Z>T&&(T=Z);
}
_(l,J,!0);
}
-5>C&&g(C,0);
-5>D&&g(D,1);
T>5&&g(T,0);
O>5&&g(O,1);
r.$oj$urt.push((n=new j._cls.$oj$trt())&&n.$oj$srt(3,o,a));
r.$oj$urt.push((s=new j._cls.$oj$trt())&&s.$oj$srt(4,o,l));
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$grt:1
},null,function($,t){
function o(){
this.$oj$yrt=this.$oj$brt=this.$oj$wrt=null;
this.$oj$Ert=this.$oj$Srt=this.$oj$xrt=this.$oj$Trt=this.$oj$Nrt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Jr=function(){
return this.$oj$Nrt;
};
t.$oj$C4=function(){
return j.makeCopy(this.$oj$brt);
};
t.$oj$Vet=function(){
return this.$oj$Trt;
};
t.$oj$Ket=function(){
return this.$oj$xrt;
};
t.$oj$an=function(){
return this.$oj$Ert;
};
t.$oj$Crt=function(){
return this.$oj$yrt;
};
t.$oj$Qet=function(){
return this.$oj$wrt;
};
t.$oj$Get=function(){
return this.$oj$Srt;
};
t.$oj$krt=function($,t,j,i,n,s,r,e){
var c=this;
if(c=o.$oj_super.prototype.init.call(this)){
c.$oj$Nrt=t;
c.$oj$brt=$;
c.$oj$Trt=j;
c.$oj$Ert=i;
c.$oj$xrt=n;
c.$oj$yrt=s;
c.$oj$wrt=r;
c.$oj$Srt=e;
}
return c;
};
return o;
});
}();
!function(){
"use strict";
var t=[1,0,1,0,1,1,0,1,0,1,0,1];
j._registerClass({
$oj$Lrt:1
},null,function($,t){
function o(){
this.$oj$Art=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Vtt=function(){
return this.$oj$Art;
};
t.$oj$Ort=function($){
var t=this;
(t=o.$oj_super.prototype.init.call(this))&&(t.$oj$Art=$);
return t;
};
return o;
});
j._registerClass({
$oj$Mrt:1
},null,function(o,i){
function n(){
this.$oj$Drt=this.$oj$Prt=this.$oj$Hrt=this.$oj$Brt=null;
this.$oj$jrt=this.$oj$Frt=this.$oj$Irt=this.$oj$qrt=this.$oj$Rrt=this.$oj$Urt=0;
this.constructor=n;
this.$oj_id=++j._id;
}
o.$oj$zrt=function($){
var o=0;
if($)for(var j=$&&$.$oj$Hn(),i=$&&$.$oj$Bn();j>=i;i++)o+=t[i%12];
return o;
};
i.$oj$Wrt=function(o,i,n,s,r,e,c){
var u=this,h=4&e?-1:1,a=(1&e)>0,l=(2&e)>0,f=[],v=[],d=0,_=0,g={},p={},y=null;
if(8>=s)o||(o=j._cls.$oj$Cn.$oj$jn(0,12));else if(11>=s){
o||(o=j._cls.$oj$Cn.$oj$jn(0,17));
s=11;
}else{
var m=Math.floor((s-1)/7);
s=7*m+1;
o||(o=j._cls.$oj$Cn.$oj$jn(0,12*m));
}
var w=o&&o.$oj$Bn(),b=o&&o.$oj$Hn();
if(8&e){
w-=12;
s+=7;
}
if(c){
d=Math.round(16&e?j._g.$oj$i(i,[24,320,32,768]):j._g.$oj$i(i,[32,320,48,768]));
_=Math.round(j._g.$oj$i(i,[13,320,18,768]));
}
for(var S=w;b>=S;S++)t[S%12]?f.push(S):v.push(S);
var M=(f.length,0),F=i+h;
F/=s;
F-=h;
var E=0;
if(a)E=n-2*d;else{
E=Math.min(n,Math.round(F/.1618));
2*d>n-E&&(E=n-2*d);
}
var x=Math.round(.66*F),q=Math.round(E*(l?.6:.66)),C=0,T=Math.ceil((n-E)/2);
$.each(f,function($){
var t=F+C,o=j._g.$oj$t(t,r);
C=t-o;
var i=j._g.$oj$t(M,r),n=j._g.$oj$m(i,T,o,E);
y=j._g.$oj$M(y,n);
g[$]=n;
M+=o+h;
});
var D=x/2*.25;
$.each(v,function($){
var t=j._g.$oj$m(0,T,x,q);
M=j._g.$oj$L(g[$-1]);
M-=t.width/2;
var o=$%12;
1==o?M=j._g.$oj$n(M-D,r):3==o?M=j._g.$oj$r(M+D,r):6==o?M=j._g.$oj$n(M-D,r):8==o?M=j._g.$oj$t(M,r):10==o&&(M=j._g.$oj$r(M+D,r));
t.x=M;
p[$]=t;
});
var O=Math.floor(F/6),P=Math.floor(x/8);
u.$oj$Hrt=y;
u.$oj$Brt=g;
u.$oj$Drt=p;
u.$oj$Urt=j._g.$oj$t(F-2*O,r);
u.$oj$Frt=j._g.$oj$t(x-2*P,r);
u.$oj$Rrt=Math.round(1.5*O);
u.$oj$jrt=Math.round(3*P);
u.$oj$qrt=d;
u.$oj$Irt=_;
};
i.$oj$Xrt=function(t,o,i){
var n=this,s=this.$oj$Prt;
function r(n,r){
$.each(n,function($,n){
var e,c=parseInt(n,10),u=0,h=0,a=i&&void 0!==i[c],l=null;
if(1==r){
l="White Key";
if(1==o||2==o){
l+=", "+["C","","D","","E","F","","G","","A","","B"][c%12];
2==o&&(l+=Math.floor(c/12)-1);
}
}else 2==r&&(l="Black Key");
if(a){
h=i[c];
l="Highlighted "+l;
0==t&&(u=1);
}
s.push((e=new j._cls.$oj$grt())&&e.$oj$krt($,r,u,c,h,l,null,0));
});
}
r(n.$oj$Brt,1);
r(n.$oj$Drt,2);
};
i.$oj$Vrt=function(o){
var i=this,n=this.$oj$Prt,s=this.$oj$Urt,r=this.$oj$Frt,e=this.$oj$Rrt,c=this.$oj$jrt;
function u($,t,i){
var s;
n.push((s=new j._cls.$oj$grt())&&s.$oj$krt($,t,0,i,o[i]||0,null,null,0));
}
$.each(o,function($,o){
var n=parseInt(o,10);
if(t[n%12]){
var h=i.$oj$Brt[n],a=j._g.$oj$m(0,0,s,s);
j._g.$oj$gt(a,h);
j._g.$oj$z(a,h);
j._g.$oj$ht(a,e);
u(a,3,n);
}else{
var l=i.$oj$Drt[n],f=j._g.$oj$m(0,0,r,r);
j._g.$oj$gt(f,l);
j._g.$oj$z(f,l);
j._g.$oj$ht(f,c);
u(f,4,n);
}
});
};
i.$oj$Jrt=function($,t,o){
var i,n=$&&$.$oj$Qet(),s=$&&$.$oj$Crt()||n;
this.$oj$Prt.push((i=new j._cls.$oj$grt())&&i.$oj$krt(o,t,0,0,0,s,n,this.$oj$Irt));
};
i.$oj$Krt=function($,t,o,i,n,s){
var r;
this.$oj$Prt=[];
this.$oj$Wrt($,t,o,i,n,s,!1);
var e=$?2:1;
this.$oj$Xrt(-1,e,null);
return(r=new j._cls.$oj$Lrt())&&r.$oj$Ort(this.$oj$Prt);
};
i.$oj$Qrt=function(t,o,i,n,s){
var r,e=this,c=t&&t.$oj$Grt(),u=(t&&t.$oj$Yrt(),t&&t.$oj$Zrt()),h={},a=(t&&t.$oj$Yrt()||[]).sort(function($,t){
return($&&$.$oj$an())-(t&&t.$oj$an());
});
$.each(a,function($){
var t=$&&$.$oj$an();
h[t]=$&&$.$oj$Ket();
});
var l=t&&t.$oj$eit(),f=t&&t.$oj$tit(),v=!!l||!!f,d=j._cls.$oj$Mrt.$oj$zrt(c);
e.$oj$Prt=[];
e.$oj$Wrt(c,o,i,d,n,s,v);
e.$oj$Xrt(u,0,h);
1==u&&e.$oj$Vrt(h);
if(l){
var _=j._g.$oj$y(e.$oj$Hrt);
_.height=e.$oj$qrt;
j._g.$oj$wt(_,e.$oj$Hrt);
e.$oj$Jrt(l,5,_);
}
if(f){
var g=j._g.$oj$y(e.$oj$Hrt);
g.height=e.$oj$qrt;
j._g.$oj$Et(g,e.$oj$Hrt);
e.$oj$Jrt(f,6,g);
}
return(r=new j._cls.$oj$Lrt())&&r.$oj$Ort(e.$oj$Prt);
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$nit:1
},null,function($,t){
function o(){
this.$oj$rit=this.$oj$iit=this.$oj$sit=this.$oj$oit=null;
this.$oj$uit=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$ait=function($){
this.$oj$sit=$;
};
t.$oj$Grt=function(){
return this.$oj$sit;
};
t.$oj$fit=function($){
this.$oj$uit=$;
};
t.$oj$Zrt=function(){
return this.$oj$uit;
};
t.$oj$Yrt=function(){
return this.$oj$iit;
};
t.$oj$lit=function($){
this.$oj$oit=$;
};
t.$oj$eit=function(){
return this.$oj$oit;
};
t.$oj$cit=function($){
this.$oj$rit=$;
};
t.$oj$tit=function(){
return this.$oj$rit;
};
t.$oj$hit=function($,t){
var o,i=(o=new j._cls.$oj$pit())&&o.init();
i&&i.$oj$dit($);
i&&i.$oj$vit(t);
this.$oj$mit(i);
};
t.$oj$mit=function($){
this.$oj$iit||(this.$oj$iit=[]);
this.$oj$iit.push($);
};
return o;
});
j._registerClass({
$oj$git:1
},null,function($,t){
function o(){
this.$oj$yit=this.$oj$bit=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$wit=function($){
this.$oj$bit=$;
};
t.$oj$Qet=function(){
return this.$oj$bit;
};
t.$oj$Eit=function($){
this.$oj$yit=$;
};
t.$oj$Crt=function(){
return this.$oj$yit;
};
return o;
});
j._registerClass({
$oj$pit:1
},null,function($,t){
function o(){
this.$oj$Sit=this.$oj$xit=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$dit=function($){
this.$oj$Sit=$;
};
t.$oj$an=function(){
return this.$oj$Sit;
};
t.$oj$vit=function($){
this.$oj$xit=$;
};
t.$oj$Ket=function(){
return this.$oj$xit;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Tit:1
},null,function($,t){
function o(){
this.$oj$Nit=this.$oj$Cit=null;
this.$oj$kit=this.$oj$Lit=this.$oj$Ait=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Jr=function(){
return this.$oj$Ait;
};
t.$oj$C4=function(){
return j.makeCopy(this.$oj$Nit);
};
t.$oj$Ket=function(){
return this.$oj$Lit;
};
t.$oj$Qet=function(){
return this.$oj$Cit;
};
t.$oj$Get=function(){
return this.$oj$kit;
};
t.$oj$Oit=function($,t,j,i,n){
var s=this;
if(s=o.$oj_super.prototype.init.call(this)){
s.$oj$Ait=t;
s.$oj$Nit=$;
s.$oj$Lit=j;
s.$oj$Cit=i;
s.$oj$kit=n;
}
return s;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Mit:1
},null,function($,t){
function o(){
this.$oj$Dit=null;
this.$oj$Pit=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Vtt=function(){
return this.$oj$Dit;
};
t.$oj$Hit=function(){
return this.$oj$Pit;
};
t.$oj$Bit=function($,t){
var j=this;
if(j=o.$oj_super.prototype.init.call(this)){
j.$oj$Dit=$;
j.$oj$Pit=t;
}
return j;
};
return o;
});
function t(t,o,j){
var i=$.clamp(t-1,0,8);
return 190>j?o>=3?[2,3,4,5,6,7,8,9,10][i]/3:o>=2?[1,2,3,3,4,4,4,5,5][i]/2:[1,1,1,2,2,3,3,4,4][i]:[1,2,3,3,4,4,4,5,5][i];
}
j._registerClass({
$oj$jit:1
},null,function(o,i){
function n(){
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$Fit=function(o,i,n,s,r,e){
var c,u,h=o&&o.$oj$Iit(),a=o&&o.$oj$qit(),l=(2&a)>0,f=(1&a)>0,v=(4&a)>0,d=[],_=(h&&h.$oj$v2()).length;
if(!_)return null;
var g=null;
function p($,t,o){
var n=j._g.$oj$i(i,[$,320,t,768]);
return o?j._g.$oj$t(n,s):n;
}
var y=$.max(o&&o.$oj$Rit()),m=0;
if(y>15){
y=17;
m=p(.75,0,!1);
}else if(y>12){
y=15;
m=p(.5,0,!1);
}else y=12;
var w=p(20,60,!0),b=p(7,13,!0),S=p(8,16,!0),M=p(2,3,!0),F=p(24,32,!0),E=p(96,192,!0),x=n-E,q=Math.floor(n/4),C=p(9,12,!0),T=Math.round(2*C);
q>x&&(E+=x-q);
var D=Math.ceil((n-E)/2);
D>T&&(D=T);
if(r){
M=2;
S=4;
b=7;
F=0;
}
l&&(w+=F);
var O=h&&h.$oj$b2(),P=Math.round((n-E)/2),A=j._g.$oj$m(0,P,i,E),N=[],I=[],L=[],B=[],H=[],K=void 0,z=[],J=E;
function Z($,t,n,s,r){
var e;
if(!t)return;
var c=j._g.$oj$y(t);
c&&o&&o.$oj$Hit()&&(c.x=i-(c.x+c.width));
d.push((e=new j._cls.$oj$Tit())&&e.$oj$Oit(c,$,n,s,r));
}
for(var k=E/_,R=P+Math.round(k/2),W=0;_>W;W++){
z[W]=j._g.$oj$t(R,s);
R+=k;
}
if(O){
var Q=z[_-1],U=z[_-2];
J=U-P+j._g.$oj$t((Q-U)/2,s);
}
for(var V=0,X=0;y>X;X++)V+=1/Math.pow(2,X/12);
var G=w,Y=i;
Y-=w;
Y+=M/2;
for(var $t=0;y>$t;$t++){
var tt=1/Math.pow(2,$t/12)/V*Y,ot=Y/y,jt=j._g.$oj$t(ot*m+tt*(1-m),s),it=M;
0==$t&&(it=j._g.$oj$t(S*(1-m),s));
N[$t]=j._g.$oj$m(j._g.$oj$t(G-it/2,s),P,it,O>=$t?J:E);
G+=jt;
}
K=j._g.$oj$m(0,P,N[0].x,N[0].height);
var nt=h&&h.$oj$g2(),st=0;
$.each(h&&h.$oj$v2(),function($){
var o=$&&$.$oj$o9(),n=r?1:t($&&$.$oj$s9(),s,E),e=z[st]-j._g.$oj$t(n/2,s);
if(nt){
I.push(j._g.$oj$m(0,e-2,i,n));
I.push(j._g.$oj$m(0,e+2,i,n));
L.push(o);
L.push(o);
}else{
I.push(j._g.$oj$m(0,e,i,n));
L.push(o);
}
st++;
});
$.each(h&&h.$oj$m2(),function($){
function t($){
var t=N[o-1],n=N[o],r=t?j._g.$oj$L(t):0,e=n?j._g.$oj$T(n):i,c=r+(e-r)/2;
c-=b/2;
$-=b/2;
c=j._g.$oj$t(c,s);
$=j._g.$oj$t($,s);
B.push(j._g.$oj$m(c,$,b,b));
}
var o=$&&$.$oj$M2(),n=$&&$.$oj$l9();
if(o>y)return;
if(n||O){
var r=Math.floor((_-1)/2),e=Math.floor(_/2);
if(7==_){
r--;
e++;
}
var c=j._g.$oj$n((z[r-1]+z[r])/2,s),u=j._g.$oj$r((z[e+1]+z[e])/2,s);
t(c);
n&&t(u);
}else t(P+E/2);
});
var rt=0;
z.length>1&&(rt=Math.floor(.75*(z[1]-z[0])));
var et=l?F:0,ct=j._g.$oj$T(N[y-1])-j._g.$oj$L(N[y-2])-2,ut=r?17:Math.min(rt,ct);
$.each(o&&o.$oj$Yrt(),function($){
var t=$&&$.$oj$r8(),o=t&&t.$oj$O2(),n=t&&t.$oj$M2(),r=n?j._g.$oj$L(N[n-1]):et,e=n==y?i:j._g.$oj$T(N[n]),c=j._g.$oj$m(r+(e-r)/2,z[o],ut,ut);
c.x=j._g.$oj$t(c.x-ut/2,s);
c.y=j._g.$oj$t(c.y-ut/2,s);
H.push(c);
});
var ht=void 0,at=void 0,lt=void 0,ft=void 0,vt=void 0;
if(O){
var dt=$.last(I),_t=N[O],gt=N[O+1],pt=r?.5:.55,yt=j._g.$oj$r(_t.x+(gt.x-_t.x)*pt,s);
ht=j._g.$oj$m(yt-1,dt.y-1,dt.height,dt.height);
ht.width+=2;
ht.height+=2;
var mt=.5*E,wt=mt*(172/286);
at=j._g.$oj$m(j._g.$oj$t(j._g.$oj$C(_t)-wt/2,s),j._g.$oj$t(j._g.$oj$k(dt)-mt/2,s),j._g.$oj$t(wt,s),j._g.$oj$t(mt,s));
var bt=j._g.$oj$t(28/108*wt,s);
lt=j._g.$oj$m(j._g.$oj$t(_t.x+(_t.width-bt)/2,s),at.y,j._g.$oj$t(bt,s),j._g.$oj$t(at.height/2,s));
ft=j._g.$oj$m(_t.x,P+J,gt.x-_t.x,E-J);
if(r||f){
dt.x=yt;
dt.width-=dt.x;
vt=j._g.$oj$y(dt);
vt.width=gt.x-vt.x;
}else{
vt=j._g.$oj$y(dt);
vt.x=j._g.$oj$L(lt);
vt.width=j._g.$oj$T(ht)-vt.x;
dt.x=j._g.$oj$L(lt);
dt.width-=dt.x;
}
if(r||f){
lt=null;
at=null;
}
}
Z(1,lt,0,null,0);
Z(2,A,0,null,0);
Z(4,ft,0,null,0);
Z(3,K,0,null,0);
Z(5,N[0],0,null,0);
for(var St=1;St<N.length;St++)Z(6,N[St],0,null,0);
for(var Mt=0;Mt<B.length;Mt++)Z(7,B[Mt],0,null,0);
for(var Ft=0;Ft<I.length;Ft++)Z(8,I[Ft],0,null,L[Ft]);
l&&Z(9,K,0,null,0);
var Et=0;
$.each(o&&o.$oj$Yrt(),function($){
var t=H[Et++],o=$&&$.$oj$Ket();
Z(10,t,o,null,0);
if(v){
var j=$&&$.$oj$Qet();
j&&Z(13,t,o,j,Math.round(.8*t.height));
}
});
Z(14,at,0,null,0);
Z(16,vt,0,null,0);
Z(15,ht,0,null,0);
if(l){
var xt=2*C,qt=z.slice(0);
O&&qt.pop();
var Ct=j._g.$oj$m(0,P+E-Math.round(xt/2),F,xt);
if(r){
Ct.x=-e;
Ct.width=e;
}
var Tt=h&&h.$oj$v2(),Dt=o&&o.$oj$Att();
g=[];
for(var Ot=0;Ot<qt.length;Ot++){
var Pt=(c=Tt[Ot])&&c.$oj$u9(),At=j._cls.$oj$l8.$oj$L8(Pt,Dt,1,!1),Nt=j._cls.$oj$l8.$oj$O8(Pt,Dt,1,!1);
g[Ot]=Nt+" String";
Z(11,j._g.$oj$m(Ct.x,qt[Ot]-Math.round(xt/2),Ct.width,Ct.height),0,At,C);
}
}
if(f)for(var It=l?F:0,Lt=1;y>=Lt;Lt++){
var Bt=Lt?j._g.$oj$L(N[Lt-1]):It,Ht=Lt==y?i:j._g.$oj$T(N[Lt]),Kt=j._g.$oj$m(Bt,0,Ht-Bt,D);
Kt.y=O&&O>=Lt?P+J:P+E;
Z(12,Kt,0,String(Lt),C);
}
if(!g){
g=[];
for(var zt=0;_>zt;zt++)g[zt]="String "+(zt+1);
}
var Jt=0;
$.each(o&&o.$oj$Yrt(),function($){
var t=$&&$.$oj$r8(),o=t&&t.$oj$O2(),j=t&&t.$oj$M2(),i="Open";
j&&(i="Fret "+j);
Z(17,H[Jt++],0,g[o]+", "+i,0);
});
return(u=new j._cls.$oj$Mit())&&u.$oj$Bit(d,o&&o.$oj$Hit());
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Uit:1
},null,function($,t){
function o(){
this.$oj$zit=this.$oj$Wit=this.$oj$Xit=null;
this.$oj$Vit=this.$oj$Jit=0;
this.$oj$Kit=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Qit=function($){
this.$oj$Wit=$;
};
t.$oj$Iit=function(){
return this.$oj$Wit;
};
t.$oj$Git=function($){
this.$oj$zit=$;
};
t.$oj$Rit=function(){
return this.$oj$zit;
};
t.$oj$Yit=function($){
this.$oj$Kit=$;
};
t.$oj$Hit=function(){
return this.$oj$Kit;
};
t.$oj$Znt=function($){
this.$oj$Jit=$;
};
t.$oj$Att=function(){
return this.$oj$Jit;
};
t.$oj$Zit=function($){
this.$oj$Vit=$;
};
t.$oj$qit=function(){
return this.$oj$Vit;
};
t.$oj$est=function($){
this.$oj$Xit=$;
};
t.$oj$Yrt=function(){
return this.$oj$Xit;
};
t.$oj$tst=function($){
var t,o=(t=new j._cls.$oj$nst())&&t.init();
o&&o.$oj$rst($);
this.$oj$mit(o);
};
t.$oj$mit=function($){
this.$oj$Xit||(this.$oj$Xit=[]);
this.$oj$Xit.push($);
};
return o;
});
j._registerClass({
$oj$nst:1
},null,function($,t){
function o(){
this.$oj$ist=this.$oj$sst=this.$oj$ost=null;
this.$oj$ust=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$rst=function($){
this.$oj$sst=$;
};
t.$oj$r8=function(){
return this.$oj$sst;
};
t.$oj$vit=function($){
this.$oj$ust=$;
};
t.$oj$Ket=function(){
return this.$oj$ust;
};
t.$oj$wit=function($){
this.$oj$ost=$;
};
t.$oj$Qet=function(){
return this.$oj$ost;
};
t.$oj$Eit=function($){
this.$oj$ist=$;
};
t.$oj$Crt=function(){
return this.$oj$ist;
};
return o;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
j._registerClass({
$oj$ast:1
},null,function(t,o){
function n(){
this.$oj$fst=this.$oj$lst=this.$oj$cst=this.$oj$hst=this.$oj$pst=this.$oj$dst=this.$oj$vst=this.$oj$mst=this.$oj$gst=this.$oj$yst=this.$oj$bst=this.$oj$wst=this.$oj$Est=null;
this.$oj$Sst=this.$oj$xst=this.$oj$Tst=this.$oj$Nst=this.$oj$Cst=this.$oj$kst=this.$oj$Lst=this.$oj$Ast=0;
this.$oj$Ost=this.$oj$Mst=this.$oj$Dst=!1;
this.constructor=n;
this.$oj_id=++j._id;
}
o.$oj$Pst=function(){
return this.$oj$bst;
};
o.$oj$Hst=function(){
return this.$oj$vst;
};
o.$oj$Bst=function($){
this.$oj$hst=$;
};
o.$oj$jst=function(){
return this.$oj$Nst;
};
o.$oj$Fst=function(){
return this.$oj$Ast;
};
o.$oj$Ist=function(){
return this.$oj$Lst;
};
o.$oj$qst=function(){
return this.$oj$kst;
};
o.$oj$Rst=function(){
return this.$oj$Est;
};
o.$oj$Ust=function($){
this.$oj$fst=$;
};
o.$oj$zst=function(){
return this.$oj$fst;
};
var s="reports",r="build",e="q",c="ips",u="challenge",h="last-score",a="high-score";
t.$oj$Wst=function(){
return null;
};
o.init=function(){
var $,t,o,i,s,r,e,c,u,h=this;
if(h=n.$oj_super.prototype.init.call(this)){
var a=($=h.constructor)&&$.$oj$Wst();
h.$oj$bst=(t=a&&a.alloc())&&t.init();
h.$oj$vst=(o=new j._cls.$oj$Xst())&&o.init();
h.$oj$vst&&h.$oj$vst.$oj$Vst(h);
h.$oj$gst=(i=new j._cls.$oj$Jst())&&i.init();
h.$oj$yst=(s=new j._cls.$oj$Kst())&&s.init();
h.$oj$cst=(r=new j._cls.$oj$Kst())&&r.init();
h.$oj$lst=(e=new j._cls.$oj$Kst())&&e.init();
h.$oj$Est=(c=new j._cls.$oj$Gst())&&c.$oj$Qst(function(){
h.$oj$Yst();
});
(u=j._cls.$oj$eot.$oj$ti())&&u.$oj$Zst(h);
}
return h;
};
o.$oj$tot=function($){
var t,o,i,n,l,f=$["state"],v=$["remembers"],d=$["path"],_=!1;
if(d){
var g=j._cls.$oj$rot.$oj$not(d,!1),p=g.prefix,y=g.options;
if(p&&y){
if(y.match(/[A-Zl02v]/)){
var m=y.toLowerCase().replace("l","1").replace("0","o").replace("2","z").replace("v","u");
this.$oj$iot("O",y+" -> "+m);
}
_=this.$oj$bst&&this.$oj$bst.$oj$sot(p,y);
if(!_||this.$oj$bst&&this.$oj$bst.$oj$oot()){
this.$oj$Cst=2;
this.$oj$uot(2);
return;
}
this.$oj$Cst=1;
}
}
_||this.$oj$bst&&this.$oj$bst.$oj$aot({});
var w=void 0,b=void 0;
void 0===v&&(v=!0);
if(v){
w=f[s];
b=f[u];
}
w&&this.$oj$yst&&this.$oj$yst.$oj$fot(w);
if(b){
this.$oj$lst&&this.$oj$lst.$oj$fot(b[a]);
this.$oj$cst&&this.$oj$cst.$oj$fot(b[h]);
}
var S=this.$oj$yst&&this.$oj$yst.$oj$lot();
!_&&S.length>0&&this.$oj$bst&&this.$oj$bst.$oj$aot((t=(o=S[0])&&o.$oj$Pst())&&t.$oj$cot());
if(0==S.length)this.$oj$hot();else{
var M=this.$oj$yst&&this.$oj$yst.$oj$pot();
this.$oj$Nst=M&&M.$oj$jst();
this.$oj$Ast=M&&M.$oj$Fst();
this.$oj$Lst=M&&M.$oj$Ist();
this.$oj$Est&&this.$oj$Est.$oj$dot(1e3*(M&&M.$oj$vot()));
this.$oj$yst&&this.$oj$yst.$oj$mot(this.$oj$bst);
(i=this.$oj$yst&&this.$oj$yst.$oj$yot())&&i.$oj$got(this.$oj$Est&&this.$oj$Est.$oj$bot());
}
if(S.length||f[c]){
var F=f[r],E=f[e],x=(n=j._cls.$oj$Htt.$oj$ti())&&n.$oj$wot();
if(E&&x==F){
this.$oj$pst=E;
if(b){
this.$oj$xst=(l=this.$oj$yst&&this.$oj$yst.$oj$yot())&&l.$oj$Eot();
this.$oj$Sst=-1;
}
}
}
};
o.$oj$Sot=function(){
var $,t;
($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$xot(this.$oj$Est&&this.$oj$Est.$oj$bot());
var o=(t=j._cls.$oj$Htt.$oj$ti())&&t.$oj$wot(),i={};
i[s]=this.$oj$yst&&this.$oj$yst.$oj$cot();
i[r]=o;
if(this.$oj$bst&&this.$oj$bst.$oj$Tot()){
var n={};
n[a]=this.$oj$lst&&this.$oj$lst.$oj$cot();
n[h]=this.$oj$cst&&this.$oj$cst.$oj$cot();
i[u]=n;
}
0==this.$oj$kst&&(i[e]=this.$oj$pst);
return i;
};
o.$oj$Not=function($){
var t,o=$["format"],i=$["identifier"],n=this.$oj$yst;
"last"==i?n=this.$oj$cst:"high"==i&&(n=this.$oj$lst);
return(t=j._cls.$oj$kot.$oj$ti())&&t.$oj$Cot(n,o);
};
o.$oj$uot=function($){
j._g.$oj$F7("-[$oj$ast $oj$uot] "+[$]);
this.$oj$Lot(2004,{
status:$
});
};
o.$oj$Aot=function($){
var t;
j._g.$oj$F7("-[$oj$ast $oj$Aot] "+[$]);
this.$oj$Tst=$;
var o=this.$oj$bst&&this.$oj$bst.$oj$Tot(),i=(6==$?(t=this.$oj$yst&&this.$oj$yst.$oj$yot())&&t.$oj$Oot():0,
o?this.$oj$bst&&this.$oj$bst.$oj$Mot():0,{});
i["status"]=$;
if(o){
i["question-limit"]=this.$oj$bst&&this.$oj$bst.$oj$Mot();
i["time-limit"]=this.$oj$bst&&this.$oj$bst.$oj$Dot();
}
this.$oj$Lot(2019,i);
};
o.$oj$Pot=function($,t){
j._g.$oj$F7("-[$oj$ast $oj$Pot] "+[$,t]);
this.$oj$kst=$;
this.$oj$Lot(2001,{
status:$,
duration:t
});
};
o.$oj$Hot=function($,t){
var o,i;
j._g.$oj$F7("-[$oj$ast $oj$Hot] "+[$,t]);
var n=$;
if(7==this.$oj$Tst)return;
if(0==this.$oj$kst){
this.$oj$Ast++;
if($){
this.$oj$Nst++;
(o=this.$oj$yst&&this.$oj$yst.$oj$yot())&&o.$oj$Bot(this.$oj$Est&&this.$oj$Est.$oj$bot());
}else(i=this.$oj$yst&&this.$oj$yst.$oj$yot())&&i.$oj$jot(this.$oj$Est&&this.$oj$Est.$oj$bot());
}
$||!this.$oj$bst||!this.$oj$bst.$oj$Tot()||this.$oj$bst&&this.$oj$bst.$oj$Fot()||(n=!0);
n&&(0==t?this.$oj$Iot():this.$oj$Pot(1,t));
this.$oj$qot();
};
o.$oj$Rot=function(){
var $,t=!0,o=($=this.$oj$lst&&this.$oj$lst.$oj$yot())&&$.$oj$Pst();
o&&this.$oj$bst&&this.$oj$bst.isEqual_(o)&&(t=!1);
return t;
};
o.$oj$Uot=function(){
var $;
if(this.$oj$vst&&this.$oj$vst.$oj$zot())if(($=this.$oj$Pst())&&$.$oj$Tot()){
var t=3;
if(this.$oj$Rot())t=2;else{
var o=this.$oj$cst&&this.$oj$cst.$oj$yot(),j=this.$oj$lst&&this.$oj$lst.$oj$yot(),i=o&&o.$oj$jst()||0,n=j&&j.$oj$jst()||0,s=o&&o.$oj$vot()||0,r=j&&j.$oj$vot()||0;
i||n||s||r||(t=1);
}
this.$oj$uot(0);
this.$oj$Aot(t);
this.$oj$Pot(3,1/0);
}else{
this.$oj$uot(0);
this.$oj$Aot(0);
this.$oj$Iot();
}else{
this.$oj$iot("Invalid Settings",null);
this.$oj$uot(1);
this.$oj$Aot(0);
this.$oj$Pot(4,1/0);
}
};
o.$oj$Iot=function(){
var $,t;
if(!this.$oj$vst||!this.$oj$vst.$oj$zot())return;
if(this.$oj$bst&&this.$oj$bst.$oj$Tot()){
var o=this.$oj$bst&&this.$oj$bst.$oj$Mot();
if(o&&(($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$Oot())>=o){
this.$oj$Wot();
return;
}
}
this.$oj$Pot(0,1/0);
var i=this.$oj$Xot(),n=this.$oj$pst;
this.$oj$pst=this.$oj$vst&&this.$oj$vst.$oj$Vot(n,i);
this.$oj$hst=null;
j._g.$oj$I7(["$D$48$"+JSON.stringify(this.$oj$pst),"$D$58$"+(this.$oj$vst&&this.$oj$vst.$oj$Jot()),"$D$68$"+i]);
(t=this.$oj$yst&&this.$oj$yst.$oj$yot())&&t.$oj$Kot();
this.$oj$Qot(this.$oj$pst);
this.$oj$qot();
this.$oj$Lot(2e3,null);
};
o.$oj$Wot=function(){
var $,t;
7==this.$oj$Tst?($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$Got(60*(this.$oj$bst&&this.$oj$bst.$oj$Dot())):(t=this.$oj$yst&&this.$oj$yst.$oj$yot())&&t.$oj$xot(this.$oj$Est&&this.$oj$Est.$oj$bot());
this.$oj$cst&&this.$oj$cst.$oj$Yot(this.$oj$yst);
var o=this.$oj$cst&&this.$oj$cst.$oj$yot(),j=this.$oj$lst&&this.$oj$lst.$oj$yot(),i=o&&o.$oj$jst()||0,n=j&&j.$oj$jst()||0,s=o&&o.$oj$Fst()||0,r=j&&j.$oj$Fst()||0,e=o&&o.$oj$vot()||0,c=j&&j.$oj$vot()||0,u=s?Math.round(1e3*i/s):0,h=r?Math.round(1e3*n/r):0,a=!1,l=5;
j?i>n?a=!0:i==n&&(u>h?a=!0:u==h&&c>e&&(a=!0)):a=!0;
if(a){
l=4;
this.$oj$lst&&this.$oj$lst.$oj$Yot(this.$oj$yst);
}
this.$oj$Aot(l);
this.$oj$Pot(3,1/0);
this.$oj$hot();
};
o.$oj$hot=function(){
this.$oj$Nst=0;
this.$oj$Ast=0;
this.$oj$Lst=0;
this.$oj$Est&&this.$oj$Est.$oj$Zot();
this.$oj$yst&&this.$oj$yst.$oj$eut(this.$oj$bst);
this.$oj$qot();
this.$oj$Lot(2e3,null);
};
o.$oj$tut=function(){
this.$oj$cst&&this.$oj$cst.$oj$eut(this.$oj$bst);
this.$oj$lst&&this.$oj$lst.$oj$eut(this.$oj$bst);
};
o.$oj$qot=function(){
var $,t={};
t["correct"]=this.$oj$Nst;
t["total"]=this.$oj$Ast;
t["skipped"]=this.$oj$Lst;
if(this.$oj$bst&&this.$oj$bst.$oj$Tot()){
t["question-count"]=($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$Oot();
t["question-limit"]=this.$oj$bst&&this.$oj$bst.$oj$Mot();
}
this.$oj$Lot(2002,t);
this.$oj$Dst&&this.$oj$Lot(2e3,null);
};
o.$oj$nut=function(){
var $;
if(1==this.$oj$kst){
this.$oj$Iot();
return;
}
if(0!=this.$oj$Tst)return;
if(2!=this.$oj$kst){
this.$oj$Lst++;
($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$rut(this.$oj$Est&&this.$oj$Est.$oj$bot());
}
this.$oj$Iot();
};
o.$oj$iut=function(){
var $;
if(0!=this.$oj$Tst)return;
if(2==this.$oj$kst)return;
this.$oj$Lst++;
($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$rut(this.$oj$Est&&this.$oj$Est.$oj$bot());
this.$oj$Pot(2,1/0);
this.$oj$sut();
this.$oj$qot();
this.$oj$Lot(2e3,null);
};
o.$oj$out=function(){
1==this.$oj$kst?this.$oj$Iot():2==this.$oj$kst?this.$oj$nut():0==this.$oj$kst&&this.$oj$iut();
};
o.$oj$uut=function($){
var t,o=this.$oj$wst;
if(!o)return null;
var i=(t=new j._cls.$oj$Yet())&&t.init(),n=i&&i.$oj$Rtt(o,$["width"],$["height"],$["helper-width"]);
return n&&n.$oj$aut();
};
o.$oj$fut=function($){
var t,o=this.$oj$mst;
if(!o)return null;
var i=(t=new j._cls.$oj$Mrt())&&t.init(),n=i&&i.$oj$Qrt(o,$["width"],$["height"],$["scale"],$["options"]);
return n&&n.$oj$aut();
};
o.$oj$lut=function($){
var t,o=$["range"],i=o?j._cls.$oj$Cn.$oj$cut(o):null,n=(t=new j._cls.$oj$Mrt())&&t.init(),s=n&&n.$oj$Krt(i,$["visible-width"],$["visible-height"],$["visible-white-key-count"],$["scale"],$["options"]);
return s&&s.$oj$aut();
};
o.$oj$hut=function($){
var t,o=this.$oj$dst;
if(!o)return null;
var i=(t=new j._cls.$oj$jit())&&t.init(),n=i&&i.$oj$Fit(o,$["width"],$["height"],$["scale"],$["simple"],$["helper-width"]);
return n&&n.$oj$aut();
};
o.$oj$put=function(){
if(this.$oj$bst&&this.$oj$bst.$oj$dut()){
this.$oj$Mst=!0;
this.$oj$Ost=!0;
this.$oj$bst&&this.$oj$bst.$oj$vut(!1);
}
};
o.$oj$mut=function(){
if(!this.$oj$Mst)return;
this.$oj$Mst=!1;
this.$oj$bst&&this.$oj$bst.$oj$gut(null);
this.$oj$yut();
var t=0==$.size(this.$oj$bst&&this.$oj$bst.$oj$but()),o=Math.min(1024,this.$oj$Xot()/2);
!t||this.$oj$vst&&this.$oj$vst.$oj$wut(o)||this.$oj$bst&&this.$oj$bst.$oj$gut([j._cls.$oj$Sut.$oj$Eut(1)]);
};
o.$oj$xut=function(){
if(!this.$oj$Ost)return;
this.$oj$Ost=!1;
this.$oj$Tut();
var $=this.$oj$Xot();
this.$oj$vst&&this.$oj$vst.$oj$wut($);
};
o.$oj$Nut=function(){
this.$oj$bst&&this.$oj$bst.$oj$vut(!1);
this.$oj$bst&&this.$oj$bst.$oj$aot({});
this.$oj$bst&&this.$oj$bst.$oj$Cut();
this.$oj$Mst=!0;
this.$oj$mut();
this.$oj$Ost=!0;
this.$oj$xut();
this.$oj$yst&&this.$oj$yst.$oj$eut(this.$oj$bst);
this.$oj$lst&&this.$oj$lst.$oj$eut(this.$oj$bst);
this.$oj$Uot();
};
o.$oj$kut=function(){
this.$oj$put();
this.$oj$bst&&this.$oj$bst.$oj$Cut();
this.$oj$mut();
};
o.$oj$Lut=function(){
var $;
this.$oj$put();
this.$oj$bst&&this.$oj$bst.$oj$Cut();
this.$oj$mut();
if(this.$oj$Ost){
this.$oj$xut();
this.$oj$yst&&this.$oj$yst.$oj$mot(this.$oj$bst);
($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$got(this.$oj$Est&&this.$oj$Est.$oj$bot());
this.$oj$Uot();
if(this.$oj$bst&&this.$oj$bst.$oj$Aut()){
this.$oj$hot();
this.$oj$bst&&this.$oj$bst.$oj$Out(!1);
}
}
};
o.$oj$Mut=function(){
this.$oj$Est&&this.$oj$Est.$oj$Dut();
if(!this.$oj$bst||!this.$oj$bst.$oj$Put()){
this.$oj$fst.nextTick=this.$oj$Est&&this.$oj$Est.$oj$But();
return;
}
var $=Math.floor((Date.now()-this.$oj$xst)/1e3);
if(this.$oj$Sst!=$){
this.$oj$Sst=$;
6==this.$oj$Tst&&this.$oj$Hut();
}
if(6==this.$oj$Tst){
this.$oj$fst.nextTick=this.$oj$xst+1e3*(this.$oj$Sst+1);
return;
}
this.$oj$fst.nextTick=Date.now()+1e3;
};
o.$oj$Hut=function(){
if(!this.$oj$bst||!this.$oj$bst.$oj$Put())return;
var $=!1,t=!1,o=0,j=this.$oj$bst&&this.$oj$bst.$oj$Dot();
if(j){
o=60*j-this.$oj$Sst;
if(0>=o){
o=0;
$=!0;
}
}else o=this.$oj$Sst;
this.$oj$Lot(2003,{
seconds:o,
countdown:t
});
$&&this.$oj$Aot(7);
};
o.$oj$Yst=function(){
this.$oj$bst&&this.$oj$bst.$oj$Put()||this.$oj$Lot(2003,{
seconds:this.$oj$Est&&this.$oj$Est.$oj$bot(),
countdown:!1
});
};
o.$oj$jut=function($){
var t,o,j=$["name"],i=$["identifier"];
if("last"==i||"high"==i){
var n=(t=this.$oj$cst&&this.$oj$cst.$oj$yot())&&t.$oj$Fut(),s=(o=this.$oj$lst&&this.$oj$lst.$oj$yot())&&o.$oj$Fut();
if(n==s){
this.$oj$cst&&this.$oj$cst.$oj$Iut(j);
this.$oj$lst&&this.$oj$lst.$oj$Iut(j);
}else"last"==i?this.$oj$cst&&this.$oj$cst.$oj$Iut(j):"high"==i&&this.$oj$lst&&this.$oj$lst.$oj$Iut(j);
}else this.$oj$yst&&this.$oj$yst.$oj$Iut(j);
this.$oj$qot();
};
o.$oj$qut=function($){
var t=$&&$["tag"];
void 0==t?this.$oj$Rut():this.$oj$Uut(t);
};
o.$oj$zut=function($){
var t=$["pause"],o=$["name"];
t?this.$oj$Est&&this.$oj$Est.$oj$Wut(o):this.$oj$Est&&this.$oj$Est.$oj$Xut(o);
};
o.$oj$Vut=function(){
var $;
if(!this.$oj$bst||!this.$oj$bst.$oj$Tot())return;
this.$oj$hot();
this.$oj$Rot()&&this.$oj$tut();
this.$oj$xst=($=this.$oj$yst&&this.$oj$yst.$oj$yot())&&$.$oj$Eot();
this.$oj$Sst=-1;
this.$oj$Aot(6);
this.$oj$Mut();
this.$oj$Iot();
};
o.$oj$Jut=function(){
var $;
if(!($=this.$oj$Pst())||!$.$oj$Tot())return;
this.$oj$Wot();
};
o.$oj$iot=function($,t){
var o,j;
$||($="No Title");
t||(t="");
$=$+": "+((o=(j=this.constructor)&&j.$oj$Wst())&&o.$oj$Kut());
this.$oj$Lot(2022,{
title:$,
message:t
});
};
o.$oj$Qut=function(){
var $,t="$D$78$"+(this.$oj$bst&&this.$oj$bst.$oj$Gut())+"/"+(this.$oj$bst&&this.$oj$bst.$oj$Yut());
return $={},i($,"$D$88$",this.$oj$Sst),i($,"$D$98$",this.$oj$kst),i($,"$D$A8$",this.$oj$pst),
i($,"$D$B8$",this.$oj$bst&&this.$oj$bst.$oj$cot()),i($,"$D$C8$",t),$;
};
o.$oj$Lot=function($,t){
this.$oj$fst._sendCommand($,t);
};
o.$oj$Zut=function($,t){
var o,j;
return 1008==$?this.$oj$gst&&this.$oj$gst.$oj$eat(t):1e3==$?(o=(j=this.constructor)&&j.$oj$Wst())&&o.$oj$Kut():1006==$?this.$oj$tat():1007==$?this.$oj$nat():1002==$?this.$oj$Not(t):1003==$?this.$oj$Sot():1009==$?this.$oj$uut(t):1011==$?this.$oj$fut(t):1012==$?this.$oj$lut(t):1010==$?this.$oj$hut(t):1013==$?!!this.$oj$pst:1005==$?this.$oj$Est&&this.$oj$Est.$oj$rat():1203==$?this.$oj$bst&&this.$oj$bst.$oj$dut()||this.$oj$Ost:1004==$?this.$oj$Cst:this.$oj$bst&&this.$oj$bst.$oj$Zut($,t);
};
o.$oj$iat=function($,t){
if(3e3==$){
if(2==this.$oj$Cst)return;
this.$oj$Dst=!0;
this.$oj$Est&&this.$oj$Est.$oj$sat();
this.$oj$Mst=!0;
this.$oj$mut();
this.$oj$Ost=!0;
this.$oj$xut();
this.$oj$pst&&(this.$oj$oat(this.$oj$pst)||(this.$oj$pst=null));
if(this.$oj$pst){
j._g.$oj$F7("$D$D8$"+JSON.stringify(this.$oj$pst));
this.$oj$Qot(this.$oj$pst);
if(this.$oj$bst&&this.$oj$bst.$oj$Tot()){
this.$oj$Aot(6);
this.$oj$Mut();
}
}else this.$oj$Uot();
this.$oj$qot();
}else if(3001==$)this.$oj$tot(t);else if(3002==$)this.$oj$Nut();else if(3018==$)this.$oj$kut();else if(3003==$)this.$oj$Lut();else if(3004==$){
this.$oj$tut();
this.$oj$hot();
if(0!=this.$oj$Tst){
this.$oj$Aot(1);
this.$oj$Pot(3,1/0);
}
}else 3005==$?this.$oj$nut():3006==$?this.$oj$iut():3008==$?this.$oj$qut(t):3010==$?this.$oj$zut(t):3007==$?this.$oj$out():3009==$?this.$oj$jut(t):3012==$?this.$oj$Vut(t):3013==$?this.$oj$Jut(t):this.$oj$bst&&this.$oj$bst.$oj$iat($,t);
};
o.$oj$uat=function($){
this.$oj$vst&&this.$oj$vst.$oj$aat($);
};
o.$oj$fat=function(){
return this.$oj$vst&&this.$oj$vst.$oj$lat();
};
o.$oj$cat=function(){
this.$oj$hst||(this.$oj$hst=this.$oj$hat(this.$oj$pst));
return this.$oj$hst;
};
o.$oj$pat=function($,t,o){
if(0!=this.$oj$kst)return;
var j=this.$oj$bst&&this.$oj$bst.$oj$Tot()&&!(this.$oj$bst&&this.$oj$bst.$oj$Fot());
if($||j){
j&&!$&&2==t&&(t=0);
if(0==t){
this.$oj$dat(1);
this.$oj$Lot(2014,{
correct:$,
object:o,
intent:1
});
this.$oj$Hot($,0);
}else if(1==t){
this.$oj$dat(2);
this.$oj$Lot(2014,{
correct:$,
object:o,
intent:2
});
this.$oj$Hot($,1/0);
}else if(2==t){
var i=this.$oj$cat(),n=i&&i.$oj$Nr()||0;
this.$oj$dat(1);
this.$oj$Lot(2014,{
correct:$,
object:o,
"has-audio":!0,
duration:n,
intent:1
});
i&&this.$oj$vat(i);
this.$oj$Hot($,n);
}else if(3==t){
this.$oj$dat(1);
this.$oj$Lot(2014,{
correct:$,
object:o,
duration:.5,
intent:1
});
this.$oj$Hot($,.5);
}
}else{
this.$oj$dat(0);
this.$oj$Lot(2014,{
correct:!1,
object:o,
intent:0
});
this.$oj$Hot(!1,0);
}
this.$oj$qot();
};
o.$oj$mat=function(){
this.$oj$Lot(2015,null);
};
o.$oj$gat=function($){
this.$oj$Lot(2017,{
instrument:$
});
};
o.$oj$yat=function($,t,o){
this.$oj$Lot(2005,{
buttons:$,
layouts:o,
options:t
});
};
o.$oj$bat=function($){
this.$oj$Lot(2007,{
range:$&&$.$oj$aut()
});
};
o.$oj$wat=function($){
this.$oj$Lot(2016,{
object:$
});
};
o.$oj$Eat=function($){
this.$oj$Lot(2016,{
object:$
});
};
o.$oj$Sat=function($){
this.$oj$wst=$;
this.$oj$Lot(2010,{});
};
o.$oj$xat=function($){
this.$oj$mst=$;
this.$oj$Lot(2011,{});
};
o.$oj$Tat=function($){
this.$oj$dst=$;
this.$oj$Lot(2012,{});
};
o.$oj$vat=function($){
this.$oj$Lot(2018,{
sequence:$&&$.$oj$aut()
});
};
o.$oj$tat=function(){
return 0;
};
o.$oj$nat=function(){
return 0;
};
o.$oj$Xot=function(){
return 8192;
};
o.$oj$Uut=function(){};
o.$oj$Rut=function(){};
o.$oj$sut=function(){};
o.$oj$dat=function(){};
o.$oj$yut=function(){};
o.$oj$Tut=function(){};
o.$oj$Qot=function(){};
o.$oj$Nat=function(){
return!1;
};
o.$oj$oat=function(){
return!0;
};
o.$oj$hat=function(){
return null;
};
return n;
});
}();
!function(){
"use strict";
function t($,t,o,i,n){
var s=o?j._g.$oj$F(o):j._g.$oj$j(),r=!1;
if(i){
var e=$-(s.left+s.right)-i;
if(e>0){
var c=Math.floor(e/2);
s.left+=c;
s.right+=e-c;
r=!0;
}
}
if(n){
var u=t-(s.top+s.bottom)-n;
if(u>0){
var h=Math.floor(u/2);
s.top+=h;
s.bottom+=u-h;
r=!0;
}
}
return r?s:o;
}
j._registerClass({
$oj$Jst:1
},null,function(o,i){
function n(){
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$Cat=function($,t,o,i,n){
var s=$.height<=420;
function r(t,o,i,n,s){
return Math.ceil(j._g.$oj$i($.height,[t,320,o,480,i,568,n,768,s,1024]));
}
function e(t,o,i){
var n=Math.round(j._g.$oj$i($.height,[t,667,o,768,i,1024])),s=Math.round(j._g.$oj$i($.width,[0,667,32,768,96,1024]));
return j._g.$oj$B(n,s,n,s);
}
var c=0,u=void 0;
if(4==t){
c=r(216,344,424,576,820);
u=e(8,16,64);
}else if(5==t){
c=r(216,248,328,432,632);
u=e(8,16,16);
}else if(!s||2!=o||2!=t&&3!=t)if(3>=o){
c=r(146,180,224,264,288);
u=e(8,16,16);
var h=$.height>$.width&&$.height>700&&$.width<420;
h&&(c=Math.round(1.2*c));
}else{
c=r(146,220,232,280,376);
u=e(8,16,16);
}else{
c=120;
u=j._g.$oj$B(8,0,8,0);
}
$.height<=320?u=j._g.$oj$B(4,0,0,0):$.height<=480&&(u=j._g.$oj$B(8,0,0,0));
i||(u=n?j._g.$oj$B(0,22,11,22):j._g.$oj$B(0,22,22,22));
return{
w:$.width,
h:c,
i:u
};
};
i.$oj$kat=function($,t,o,i){
var n=$.width,s=0,r=4==t||5==t;
if(o){
n=$.width-44;
var e=n/o;
e>32?n=32*o:16>e&&(n=16*o);
600>n&&(n=600);
s=Math.ceil(n/o/.1618);
!r&&s>160&&(s=160);
}else{
n=600;
o=15;
s=r?Math.ceil(n/o/.1618):i?180:200;
}
return{
w:n,
h:s,
i:j._g.$oj$B(0,22,i?11:22,22),
r:{
"visible-white-key-count":o
}
};
};
i.$oj$Lat=function($,t,o,i){
var n=$.width,s=0,r=j._g.$oj$j(),e=4==t||5==t,c=$.height-o,u=Math.ceil(e?c/1.25:c/2),h=void 0;
if($.height<=420){
s=u;
h=$.width<=480?11:15;
}else if($.width<=420){
s=Math.ceil(j._g.$oj$i($.height,[e?244:164,320,e?224:176,480,e?244:226,568,310,768]));
h=8;
}else{
if($.width<=420)h=8;else if($.width<=480)h=11;else if($.width<=1024||!i){
h=15;
e||(u=Math.ceil(c/2.4));
}else{
h=$.width/48;
s=Math.ceil($.width/h/.1618);
h=7*Math.floor((h-1)/7)+1;
}
i&&h>i&&(h=i);
}
s||(s=Math.ceil($.width/h/.1618));
s>u&&(s=u);
return{
w:n,
h:s,
i:r,
r:{
"visible-white-key-count":h
}
};
};
i.$oj$Aat=function($,o){
var i=void 0,n=void 0;
if(o){
i=$.height<420?138:$.height<481?192:222;
n=j._g.$oj$B(8,0,0,0);
}else{
i=118;
n=j._g.$oj$B(0,22,22,22);
}
return{
w:$.width,
h:i,
i:t($.width,i,n,640,0)
};
};
i.$oj$Oat=function($,o){
var i=$.width,n=void 0,s=void 0;
if(o){
n=$.height<420?138:$.height<481?192:222;
s=j._g.$oj$B(8,0,0,0);
}else{
n=220;
s=j._g.$oj$B(0,22,22,22);
}
return{
w:i,
h:n,
i:t(i,n,s,640,0)
};
};
i.$oj$Mat=function($,t,o,i){
var n=0,s=void 0;
if(2==t||3==t){
n=i?200:240;
s=i?j._g.$oj$B(11,22,11,22):j._g.$oj$B(22,22,22,22);
}else if(o==o){
n=i?200:240;
if(i)s=j._g.$oj$B(11,22,11,22);else{
var r=1==t?0:22;
s=j._g.$oj$B(r,22,22,22);
}
}
return{
w:$.width,
h:n,
i:s
};
};
i.$oj$eat=function(t){
var o=t["is-tenuto"],i=t["wants-bottom-area"],n=t["input-frame"],s=t["top-length"],r=t["content-module-type"],e=t["dashboard-module-type"],c=n.height<420||n.width<420,u=c&&n.height<n.width,h=1==r,a=2==r,l=3==r,f=4==r||5==r,v={},d=null,_=void 0,g=void 0,p=void 0,y=0,m=0,w=0,b=!(o&&c),S=!0,M=void 0,F=void 0,E=void 0;
if(o){
M=j._g.$oj$h(n);
F=n.width;
E=n.height;
}else{
F=600;
E=534;
M=2==e?j._g.$oj$l(Math.max(n.width,F),534):j._g.$oj$l(F,534);
}
var x=55;
i&&(M.height-=x);
if(o||!a&&!l)if(1==e){
var q=t["dashboard-button-layouts"]||{},C="default";
u&&q["landscape"]&&(C="landscape");
var T=q[C],D=T?T.length:0;
v["button-layout-name"]=C;
d=this.$oj$Cat(M,r,D,o,i);
}else if(2==e){
var O=t["dashboard-keyboard-range"],P=O?j._cls.$oj$Cn.$oj$cut(O):null,A=j._cls.$oj$Mrt.$oj$zrt(P);
d=o?this.$oj$Lat(M,r,s,A):this.$oj$kat(M,r,A,i);
}else 3==e?d=this.$oj$Aat(M,o):4==e&&(d=this.$oj$Oat(M,o));else d=this.$oj$Mat(M,r,e,i);
var N=d.h,I=d.w;
g=j._g.$oj$m(n.x,n.y+(M.height-N),I,N);
var L=M.height-N;
L-=s;
p=j._g.$oj$m(n.x+Math.round((I-F)/2),s,F,L);
if(!S){
var B=j._g.$oj$y(p);
B.height=44;
if(B.width>320){
B.width=320;
j._g.$oj$z(B,p);
}
v["score-frame"]=B;
p.height-=44;
p.y+=44;
}
v["content-corner-radius"]=Math.round(j._g.$oj$i(M.width,[12,320,16,768]));
$.merge(v,d.r);
d.i&&(g=j._g.$oj$q(g,d.i));
_=j._g.$oj$l(I,E);
if(h)if(o){
y=u?128:Math.round(j._g.$oj$i(M.width,[16,320,16,414,48,768,128,1024]));
m=y;
}else{
y=22;
m=22;
}else if(a)o||(y=22);else if(l){
if(!o){
y=22;
m=22;
}
}else if(f){
var H=1;
if(5==r)if(u){
H=3;
w=2;
}else H=2;
if(o)y=b?112:64;else{
p=j._g.$oj$E(p,22,22);
y=80;
}
v["audio-player-plan"]=H;
}
if(i){
var K=j._g.$oj$y(g);
K.height=55;
j._g.$oj$Et(K,j._g.$oj$d(M));
v["bottom-area"]=K;
}
v["output-size"]=_;
v["top-bar-has-customize"]=b;
v["top-bar-has-score"]=S;
v["content-inset-width"]=y;
v["content-helper-width"]=m;
g&&(v["dashboard-frame"]=g);
p&&(v["content-frame"]=p);
w&&(v["content-column-count"]=w);
return v;
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Xst:1
},null,function(t,o){
function i(){
this.$oj$Dat=this.$oj$Pat=this.$oj$Hat=this.$oj$Bat=this.$oj$jat=this.$oj$Fat=this.$oj$Iat=this.$oj$qat=null;
this.$oj$Rat=this.$oj$Uat=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$lat=function(){
return this.$oj$qat;
};
o.$oj$Vst=function($){
this.$oj$Dat=$;
};
o.$oj$zat=function(){
return this.$oj$Dat;
};
o.$oj$Jot=function(){
return this.$oj$Rat;
};
o.$oj$Wat=function($,t){
var o=!1,j=0,i=this.$oj$Fat,n=this.$oj$Iat,s=this.$oj$Bat,r=this.$oj$jat;
this.$oj$Rat=-1;
for(;j++<t&&!o;){
for(var e={},c=0,u=i.length;u>c;c++){
var h=i[c],a=n[c];
e[h]=Math.floor(Math.random()*a);
}
for(var l=0,f=s.length;f>l;l++){
var v=s[l],d=r[l],_=Math.floor(Math.random()*d.length);
e[v]=d[_];
}
var g=j/t;
if(this.$oj$Dat&&this.$oj$Dat.$oj$Nat(e,$,g)&&this.$oj$Dat&&this.$oj$Dat.$oj$oat(e)){
this.$oj$Rat=j;
return e;
}
}
return null;
};
o.$oj$wut=function($){
if(this.$oj$Pat)return!0;
if(!this.$oj$qat)return!1;
var t=this.$oj$Wat(null,$);
if(!t)return!1;
var o=this.$oj$Wat(t,$);
if(!o)return!1;
this.$oj$Pat=[t,o];
this.$oj$Hat=o;
return!0;
};
o.$oj$Vot=function($,t){
var o=void 0;
if(this.$oj$Hat){
o=this.$oj$Hat;
this.$oj$Hat=null;
}
o||(o=this.$oj$Wat($,t));
o||(o=this.$oj$Pat[this.$oj$Uat++]);
return o;
};
o.$oj$zot=function(){
return!!this.$oj$Pat;
};
o.$oj$aat=function(t){
var o=this;
if(this.$oj$qat!=t){
this.$oj$qat=t;
this.$oj$Uat=0;
this.$oj$Pat=null;
var j=[],i=[],n=[],s=[],r=$.keys(t).sort();
$.each(r,function(o){
var r=t[o];
if($.isArray(r)){
n.push(o);
s.push(r);
}else if($.isNumber(r)){
j.push(o);
i.push(r);
}
});
o.$oj$Fat=j;
o.$oj$Iat=i;
o.$oj$Bat=n;
o.$oj$jat=s;
}
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Xat:1
},null,function(t){
function o(){
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$Vat=function(){
return[4,5,6,14,15,16,24,25,26,34,35,36,44,45,46,54,55,56,64,65,66];
};
t.$oj$Jat=function(t,o){
var j=void 0;
if(16==t){
j=[[26,66,null,null,null,null,null],[25,65,36,6,46,16,56],[24,64,35,5,45,15,55],[null,null,34,4,44,14,54]];
$.includes(o,26)||$.includes(o,66)||j.shift();
}else if(17==t){
j=[[6,46,16,56,26,66,null],[5,45,15,55,25,65,36],[4,44,14,54,24,64,35],[null,null,null,null,null,null,34]];
$.includes(o,34)||j.pop();
}else j=18==t?[[36,6,46,16,56,26,66],[35,5,45,15,55,25,65],[34,4,44,14,54,24,64]]:11==t?[[56,66,6,16,26,36,46],[55,65,5,15,25,35,45],[54,64,4,14,24,34,44]]:[[6,16,26,36,46,56,66],[5,15,25,35,45,55,65],[4,14,24,34,44,54,64]];
return j;
};
t.$oj$Kat=function($,t,o){
for(var j=0,i=$.length;i>j;j++){
var n=$[j],s=n&&n.$oj$ln(t);
if(-100==s)continue;
0==s&&(s=1);
if(Math.abs(s)>o)return!1;
}
return!0;
};
t.$oj$Qat=function($,t,o){
for(var j=0,i=$.length;i>j;j++){
var n=$[j],s=n&&n.$oj$jt();
if(s>2||-2>s)return!1;
var r=n&&n.$oj$fn(t);
if(!o||!o.$oj$qn(r))return!1;
}
return!0;
};
t.$oj$Gat=function(t,o,i,n){
var s,r,e=(s=new j._cls.$oj$Mt())&&s.$oj$Vt(t),c=(r=new j._cls.$oj$Q7())&&r.$oj$J7(o),u=e&&e.$oj$vn(c&&c.$oj$e2(),!0,i),h=0;
!function(){
var t=n&&n.$oj$Hn(),o=n&&n.$oj$Bn(),j=0,i=128;
$.each(u,function($){
var t=$&&$.$oj$an();
t>j&&(j=t);
i>t&&(i=t);
});
for(;j+h>t;)h-=12;
for(;o>i+h;)h+=12;
}();
return $.map(u,function($){
return($&&$.$oj$an())+h;
});
};
t.$oj$Yat=function($,t){
var o=j._cls.$oj$Mr.$oj$Or($),i=o&&o.$oj$Qr(),n=o&&o.$oj$Kr(),s=t&&t.$oj$Bn(),r=t&&t.$oj$Hn();
n&&n.$oj$qn(s)||(s=i&&i.$oj$Bn());
n&&n.$oj$qn(r)||(r=i&&i.$oj$Hn());
return j._cls.$oj$Cn.$oj$jn(s,r);
};
t.$oj$Zat=function($){
$=Math.floor($);
var t=Math.floor($/3600),o=Math.floor($/60)%60,j=$%60,i="";
t>0&&(i+=t+":");
t>0&&10>o&&(i+="0");
i+=o+":";
10>j&&(i+="0");
i+=j;
return i;
};
t.$oj$eft=function($){
if(6==$)return"Up C";
if(16==$)return"Up D";
if(26==$)return"Up E";
if(36==$)return"Up F";
if(46==$)return"Up G";
if(56==$)return"Up A";
if(66==$)return"Up B";
if(5==$)return"C";
if(15==$)return"D";
if(25==$)return"E";
if(35==$)return"F";
if(45==$)return"G";
if(55==$)return"A";
if(65==$)return"B";
if(4==$)return"Down C";
if(14==$)return"Down D";
if(24==$)return"Down E";
if(34==$)return"Down F";
if(44==$)return"Down G";
if(54==$)return"Down A";
if(64==$)return"Down B";
return null;
};
t.$oj$tft=function($){
if(26==$)return"Up 2";
if(36==$)return"Up 3";
if(46==$)return"Up 4";
if(56==$)return"Up 5";
if(66==$)return"Up 6";
if(76==$)return"Up 7";
if(86==$)return"Up 8";
if(25==$)return"2";
if(35==$)return"3";
if(45==$)return"4";
if(55==$)return"5";
if(65==$)return"6";
if(75==$)return"7";
if(85==$)return"8";
if(24==$)return"Down 2";
if(34==$)return"Down 3";
if(64==$)return"Down 6";
if(74==$)return"Down 7";
if(23==$)return"Left 2";
if(33==$)return"Left 3";
if(44==$)return"Left 4";
if(54==$)return"Left 5";
if(63==$)return"Left 6";
if(73==$)return"Left 7";
if(84==$)return"Left 8";
return null;
};
t.$oj$nft=function($){
return["1","Down 2","2","Down 3","3","4","Down 5","5","Down 6","6","Down 7","7","8"][$]||null;
};
t.$oj$rft=function($,t,o){
if(0==o)return!1;
var i=j._cls.$oj$Mt.$oj$It($,t),n=i%7;
return 1==o&&(2==n||6==n)||-1==o&&(0==n||3==n);
};
t.$oj$ift=function($,t,o){
var i=$&&$.$oj$Bn(),n=$&&$.$oj$Hn();
if(7>n-i){
n%2==0&&n++;
i%2==0&&i--;
return j._cls.$oj$Cn.$oj$jn(i,n);
}
n%2==0&&n==t&&(n+=2);
i%2==0&&i==t&&(i-=2);
var s=[],r=void 0;
if(t%2==0){
t--;
r=t-4;
}else r=t-6;
for(;t>=r;){
var e=r+6;
r>=i&&n>=r&&e>=i&&n>=e&&s.push(j._cls.$oj$Cn.$oj$jn(r,e));
r+=2;
}
return s.length>0?s[o%s.length]:null;
};
t.$oj$sft=function($){
var t,o=$&&$.$oj$Bn(),i=$&&$.$oj$Hn();
function n($,t,o){
for(;;){
var j=$%12;
if(0===j||o&&5==j)break;
$+=t;
}
return $;
}
var s=i-o>36;
o=n(o,-1,s);
i=n(i,1,s);
o>60&&(o=60);
60>i&&(i=60);
for(;24>i-o;)Math.abs(i-60)>Math.abs(o-60)?o=n(o-1,-1,s):i=n(i+1,1,s);
return(t=new j._cls.$oj$Cn())&&t.$oj$Fn(o,i);
};
t.$oj$oft=function(t,o,i){
var n=[],s=!o||1==o,r=!o||2==o,e=null;
if(i){
e=[!1,!1,!1,!1,!1,!1,!1];
$.each(i,function($){
var t=j._cls.$oj$Mt.$oj$qt($);
e[t]=!0;
});
}
$.each(t&&t.$oj$uft(),function($){
var o=t&&t.$oj$aft($);
o||(o=t&&t.$oj$aft(0));
for(var i=o&&o.$oj$Bn();i<=(o&&o.$oj$Hn());i++){
var c=(0>i?-i:i)%2===0,u=s&&c||r&&!c;
if(!u)continue;
var h=j._cls.$oj$Mt.$oj$It($,i),a=h%7,l=!e||e[a];
if(!l)continue;
n.push({
clef:$,
position:i
});
}
});
return n;
};
t.$oj$fft=function(t,o,i,n){
var s=[];
0==o?$.each(t,function(t){
$.each(i,function($){
var o=j._cls.$oj$j9.$oj$R9(t,$);
s.push({
scale:t,
tonic:o
});
});
}):1==o&&!function(){
var o={};
$.each(n,function($){
o[$]=!0;
});
for(var i=function(i){
$.each(t,function($){
var t=j._cls.$oj$j9.$oj$R9($,i);
o[t]&&s.push({
scale:$,
tonic:t
});
});
},r=-7;7>=r;r++)i(r);
}();
return s;
};
t.$oj$lft=function($,t,o,i,n){
var s=$&&$.$oj$i8(),r=t&&t.$oj$i8(),e=$&&$.$oj$r8(),c=t&&t.$oj$r8(),u=!1;
2==n?u=!0:1==n&&(u=0==s);
if(u){
var h=j._cls.$oj$Mt.$oj$nn(o,i,s,e),a=j._cls.$oj$Mt.$oj$nn(o,i,r,c);
return h&&h.isEqual_(a);
}
return s==r&&e==c;
};
t.$oj$cft=function($,t,o,j,i){
var n=$.length,s=t.length;
if(n!=s)return!1;
for(var r=0;n>r;r++){
var e=$[r],c=t[r];
if(!this.$oj$lft(e,c,o,j,i))return!1;
}
return!0;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$hft:1
},null,function(t,o){
function i(){
this.$oj$pft=this.$oj$dft=this.$oj$vft=null;
this.$oj$mft=this.$oj$gft=this.$oj$yft=this.$oj$bft=this.$oj$wft=this.$oj$Eft=this.$oj$Sft=this.$oj$xft=this.$oj$Tft=0;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$Nft=function(){
return this.$oj$wft;
};
o.$oj$Pst=function(){
return this.$oj$vft;
};
o.$oj$Cft=function(){
return this.$oj$dft;
};
o.$oj$jst=function(){
return this.$oj$yft;
};
o.$oj$Fst=function(){
return this.$oj$Tft;
};
o.$oj$Ist=function(){
return this.$oj$xft;
};
o.$oj$kft=function(){
return this.$oj$Eft;
};
o.$oj$Oot=function(){
return this.$oj$Sft;
};
o.$oj$Eot=function(){
return this.$oj$gft;
};
o.$oj$Fut=function(){
return this.$oj$pft;
};
o.$oj$Lft=function(t,o,n,s,r,e,c,u,h){
var a=this;
if(a=i.$oj_super.prototype.init.call(this)){
a.$oj$wft=j._cls.$oj$rot.$oj$Aft(t&&t.$oj$Gut());
a.$oj$dft=o;
a.$oj$vft=t;
a.$oj$yft=n;
a.$oj$Tft=s;
a.$oj$xft=r;
a.$oj$Sft=c||0;
a.$oj$bft=e;
a.$oj$gft=u||Date.now();
a.$oj$pft=h||$.uuid();
a.$oj$mft=0;
a.$oj$Eft=0;
}
return a;
};
o.$oj$Oft=function($,t,o,j,i,n){
return this.$oj$Lft($,t,o,j,i,n,0,0,null);
};
o.$oj$Mft=function($,t){
return this.$oj$Lft($,t,0,0,0,0,0,0,null);
};
o.$oj$Dft=function($){
var t,o;
if(!$)return null;
var i=$.b,n=$.c,s=$.e,r=$.h,e=$.n,c=$.o,u=$.p,h=$.q,a=$.s,l=$.t,f=$.u,v=j._cls.$oj$Hft.$oj$Pft([f,i,c||"",e||"",u||"",s,a,n,l,h]);
if(v.join(",")!=r.join(","))return null;
var d=j._cls.$oj$rot.$oj$Bft(u),_=(t=(o=d&&d.$oj$Wst())&&o.alloc())&&t.init();
if(!_)return null;
if(!_||!_.$oj$sot(u,c))return null;
return this.$oj$Lft(_,e,n,l,a,s,h,i,f);
};
o.$oj$cot=function(){
var $=this.$oj$vft&&this.$oj$vft.$oj$Gut(),t=this.$oj$vft&&this.$oj$vft.$oj$Yut(),o=this.$oj$vot(),i=j._cls.$oj$Hft.$oj$Pft([this.$oj$pft,this.$oj$gft,t||"",this.$oj$dft||"",$||"",o,this.$oj$xft,this.$oj$yft,this.$oj$Tft,this.$oj$Sft]);
return{
b:this.$oj$gft,
c:this.$oj$yft,
e:o,
h:i,
n:this.$oj$dft,
o:t,
p:$,
q:this.$oj$Sft,
s:this.$oj$xft,
t:this.$oj$Tft,
u:this.$oj$pft
};
};
o.$oj$Kot=function(){
this.$oj$Sft++;
};
o.$oj$Bot=function($){
this.$oj$yft++;
this.$oj$Tft++;
this.$oj$xot($);
};
o.$oj$jot=function($){
this.$oj$Tft++;
this.$oj$xot($);
};
o.$oj$rut=function($){
this.$oj$xft++;
this.$oj$xot($);
};
o.$oj$Iut=function($){
this.$oj$dft||(this.$oj$dft=$);
};
o.$oj$got=function($){
this.$oj$bft+=this.$oj$Eft-this.$oj$mft;
this.$oj$Eft=this.$oj$mft=$;
};
o.$oj$xot=function($){
isNaN($)||(this.$oj$Eft=$);
};
o.$oj$Got=function($){
this.$oj$bft=$;
this.$oj$mft=this.$oj$Eft=0;
};
o.$oj$vot=function(){
return this.$oj$bft+(this.$oj$Eft-this.$oj$mft);
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$kot:1
},null,function(t,o){
function i(){
this.constructor=i;
this.$oj_id=++j._id;
}
var n=void 0;
t.$oj$ti=function(){
var $;
n||(n=($=this.alloc())&&$.init());
return n;
};
o.$oj$jft=function($){
var t=$&&$.$oj$vot(),o=Math.floor(t/3600),j=Math.floor(t/60)%60,i=t%60,n="";
o>0&&(n+=o+":");
o>0&&10>j&&(n+="0");
n+=j+":";
10>i&&(n+="0");
n+=i;
return n;
};
o.$oj$Fft=function($){
var t=$&&$.$oj$Fst(),o=$&&$.$oj$jst(),j=$&&$.$oj$Ist(),i="";
i+=o+"/"+t+", ";
i+=(t>0?Math.round(o/t*100):0)+"%";
j>0&&(i+=", "+j+" skipped");
return i;
};
o.$oj$Ift=function(t){
function o(t){
var o="";
$.each(t,function($,t){
o+=t+": "+$+";";
});
return o;
}
var j={};
j["title-td"]=o({
"text-align":"center",
"font-weight":"bold",
color:"#202020",
"padding-top":"1em",
"padding-bottom":"1em",
"font-size":"1.25em"
});
j["code-td"]=o({
"padding-top":"0.5em",
"text-align":"center",
color:"#202020"
});
j["verify-td"]=o({
"padding-top":"0.5em",
"padding-bottom":"0.5em",
"text-align":"center"
});
j["td-left"]=j["td-range-left"]=o({
"font-weight":"bold",
"padding-right":"8px",
"white-space":"nowrap"
});
j["td-right"]=o({
"padding-left":"8px"
});
j["header-td"]=o({
"text-align":"center",
"font-weight":"bold",
color:"#606060",
"padding-top":"1em",
"border-bottom":"1px solid #404040"
});
j["vline-td"]=o({
"border-left":"1px dashed #404040"
});
if(!t){
j["body"]=o({
"font-family":"Helvetica",
margin:"0.5in 0.5in 0 0.5in"
});
j["verify-a"]=o({
"text-decoration":"none"
});
}
return j;
};
o.$oj$qft=function(t,o){
var i=this,n=[],s=t&&t.$oj$Pst();
function r($,t,o){
var j=["C","D","E","F","G","A","B"],i="",n="";
if(34==t){
n="B4";
i="(Treble)";
}else if(22==t){
n="D3";
i="(Bass)";
}else if(28==t){
n="C4";
i="(Alto)";
}else if(26==t){
n="A3";
i="(Tenor)";
}else if(32==t){
n="G4";
i="(Soprano)";
}else if(30==t){
n="E4";
i="(Mezzo-soprano)";
}else if(24==t){
n="F3";
i="(Baritone Range";
}else if(-2==t){
n="C4";
i="(Grand Staff)";
}
var s=7*parseInt(n.slice(1),10)+j.indexOf(n.slice(0,1)),r=s+($&&$.$oj$Bn()),e=s+($&&$.$oj$Hn()),c=j[r%7]+(""+Math.floor(r/7)),u=j[e%7]+(""+Math.floor(e/7)),h=c+" - "+u;
o&&(h+=" "+i);
return h;
}
function e($,t){
var o=s&&s.$oj$Att();
return j._cls.$oj$l8.$oj$A8($,o,1,t);
}
function c($){
var t=$&&$.$oj$Rft();
t||(t=$&&$.$oj$Qet());
t||(t=$&&$.$oj$Uft());
return t;
}
function u($,t){
var o={};
o["name"]=$;
o["value"]=t;
o["string"]=t;
n.push(o);
}
function h($){
var o,j=$&&$.$oj$zft(),i=$&&$.$oj$Wft(),s=$&&$.$oj$xn(),e=!1;
if(0==s){
s=((o=t&&t.$oj$Pst())&&o.$oj$uft())[0];
e=!0;
}
var c={};
c["name"]=j;
c["value"]=i&&i.$oj$aut();
c["string"]=r(i,s,e);
c["clef"]=s;
n.push(c);
}
function a(t){
var o,j=t&&t.$oj$zft(),i=t&&t.$oj$Jr(),n=t&&t.$oj$Wft(),r=t&&t.$oj$Xft(),h=void 0;
if(5==r){
var a=t&&t.$oj$Vft();
a&&(h=a(!1));
}
if(!h)if(0==i){
h=c(t&&t.$oj$Jft(n));
h||(3==r?h=n?"On":"Off":4==r&&(h=n?"Off":"On"));
}else if(1==i){
var l=[];
$.each(t&&t.$oj$Kft(),function(t){
$.includes(n,t&&t.$oj$xn())&&l.push(c(t));
});
h=l.join(", ");
}else if(3==i)h=e(n&&n.$oj$Bn(),!0)+" - "+e(n&&n.$oj$Hn(),!0);else if(4==i)h=e(n,!0);else if(5==i){
for(var f=(o=s&&s.$oj$Iit())&&o.$oj$v2(),v=[],d=f.length-1;d>=0;d--){
var _=f[d];
v.push(e(_&&_.$oj$u9(),!1));
}
h=v.join(" ");
}
u(j,h);
}
var l=[];
if(o){
u("Score",i.$oj$Fft(t));
u("Time",i.$oj$jft(t));
}
$.each(s&&s.$oj$Qft(),function(t){
$.each(t&&t.$oj$Gft(),function($){
$&&$.$oj$Yft()||(2==($&&$.$oj$Jr())?l.push($):a($));
});
});
$.each(l,function($){
h($);
});
if(s&&s.$oj$Tot()){
u("Challenge Mode","On");
a(s&&s.$oj$Zft("ChallengeTimeLimit"));
a(s&&s.$oj$Zft("ChallengeQuestionLimit"));
a(s&&s.$oj$Zft("ChallengeMultipleAttempts"));
}else u("Challenge Mode","Off");
return n;
};
o.$oj$elt=function($,t){
var o=this,j={},i=[];
function n(){
var t=$&&$.$oj$Cft();
if(t){
j["name"]=t;
j["code"]=$&&$.$oj$tlt();
j["url"]=$&&$.$oj$nlt();
}
var o=$&&$.$oj$rlt(),i=$&&$.$oj$pot();
if(o.length>0){
var n=o[o.length-1];
j["uuid"]=n&&n.$oj$Fut();
}
j["correct"]=i&&i.$oj$jst();
j["total"]=i&&i.$oj$Fst();
j["elapsed"]=i&&i.$oj$vot();
}
function s($,t){
var o={};
o["name"]=$;
o["value"]=t;
o["string"]=t;
return o;
}
function r($,t){
var o={};
o["title"]=$;
o["rows"]=t;
i.push(o);
}
function e(){
var t=$&&$.$oj$rlt(),j=t.length>1,i=$&&$.$oj$pot();
r("Exercise Information",[s("Name",$&&$.$oj$Kut()),s(j?"Total Score":"Score",o.$oj$Fft(i)),s(j?"Total Time":"Time",o.$oj$jft(i))]);
for(var n=0,e=t.length;e>n;n++){
var c="Customized Settings";
j&&(c+=" ("+(n+1)+" of "+t.length+")");
r(c,o.$oj$qft(t[n],j));
}
}
n();
t||e();
i.length&&(j["sections"]=i);
return j;
};
o.$oj$ilt=function(t,o){
var i,n=this.$oj$Ift(o),s=(i=new j._cls.$oj$slt())&&i.init(),r=t&&t.$oj$rlt();
if(!r||!r.length)return null;
var e=(t&&t.$oj$pot(),this.$oj$elt(t,!1)),c=t&&t.$oj$tlt(),u=t&&t.$oj$nlt(),h=o?"musictheory.net":"www.musictheory.net/verify";
s&&s.$oj$olt(t&&t.$oj$Cft());
s&&s.$oj$ult(c,u,h);
$.each(e["sections"],function(t){
var o=t["title"],j=t["rows"];
s&&s.$oj$alt(o);
$.each(j,function($){
var t=$["name"],o=$["string"];
s&&s.$oj$flt(t,o);
});
s&&s.$oj$llt();
});
return s&&s.$oj$clt(n);
};
o.$oj$Cot=function(t,o){
if(0==o)return this.$oj$elt(t,!1);
if(9==o)return this.$oj$elt(t,!0);
if(1==o)return $.format("%1 Progress Report",t&&t.$oj$Kut());
if(2==o)return this.$oj$ilt(t,!0);
if(3==o)return this.$oj$ilt(t,!1);
if(4==o)return t&&t.$oj$hlt();
return null;
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Kst:1
},null,function(o,i){
function n(){
this.$oj$plt=this.$oj$dlt=this.$oj$vlt=this.$oj$mlt=null;
this.$oj$glt=0;
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$yot=function(){
return this.$oj$plt;
};
i.$oj$Cft=function(){
return this.$oj$vlt;
};
i.$oj$lot=function(){
return this.$oj$mlt;
};
i.init=function(){
var $=this;
if($=n.$oj_super.prototype.init.call(this)){
$.$oj$mlt=[];
$.$oj$plt=null;
}
return $;
};
i.$oj$Yot=function($){
var t,o,i=(t=$&&$.$oj$yot())&&t.$oj$cot();
this.$oj$vlt=$&&$.$oj$Cft();
this.$oj$plt=(o=new j._cls.$oj$hft())&&o.$oj$Dft(i);
this.$oj$mlt=[this.$oj$plt];
};
i.$oj$eut=function($){
this.$oj$vlt=null;
this.$oj$mlt=[];
this.$oj$plt=null;
this.$oj$mot($);
};
i.$oj$mot=function($){
for(var t,o,i,n,s,r=$&&$.$oj$Gut(),e=$&&$.$oj$Yut(),c=void 0,u=void 0,h=void 0,a=void 0,l=0,f=this.$oj$mlt.length;f>l;l++){
h=this.$oj$mlt[l];
c=(t=h&&h.$oj$Pst())&&t.$oj$Gut();
u=(o=h&&h.$oj$Pst())&&o.$oj$Yut();
if(c==r&&u==e){
a=h;
break;
}
}
if(a){
var v=this.$oj$mlt.indexOf(a);
v>=0&&this.$oj$mlt.splice(v,1);
}else{
var d={};
$&&$.$oj$ylt(d);
var _=(i=(n=$?$["class"]():null)&&n.alloc())&&i.init();
_&&_.$oj$aot(d);
a=(s=new j._cls.$oj$hft())&&s.$oj$Mft(_,this.$oj$vlt);
}
this.$oj$mlt.unshift(a);
this.$oj$plt=a;
};
i.$oj$Iut=function(t){
if(!this.$oj$vlt){
this.$oj$vlt=t;
$.each(this.$oj$mlt,function($){
$&&$.$oj$Iut(t);
});
}
};
i.$oj$nlt=function(){
var $=this.$oj$tlt(),t=$?$.replace(/\-/g,""):"";
return"https://www.musictheory.net/verify/#"+t;
};
i.$oj$hlt=function(){
var $=this.$oj$tlt(),t=$?$.replace(/\-/g,""):"";
return"https://www.musictheory.net/report/#"+t;
};
i.$oj$blt=function($){
var t=this,o=0,i=!0,n=void 0;
this.$oj$mlt=[];
j._cls.$oj$Hft.$oj$wlt(function(i){
var s,r,e;
if(n){
n.push(i);
if(7==n.length){
var c=n[0],u=n[1],h=n[2],a=n[3],l=n[4],f=n[6],v=j._cls.$oj$rot.$oj$Elt(u),d=j._cls.$oj$rot.$oj$Bft(v),_=(s=(r=d&&d.$oj$Wst())&&r.alloc())&&s.init();
_&&_.$oj$sot(v,c);
var g=(e=new j._cls.$oj$hft())&&e.$oj$Oft(_,t.$oj$vlt,h,a,l,f);
t.$oj$mlt.push(g);
t.$oj$mot(_);
n=[];
}
}else if(2==o){
n=[];
t.$oj$glt=i;
}else 1==o&&t.$oj$Iut(i);
o++;
return $;
})||(i=!1);
return i;
};
i.$oj$tlt=function(){
var $;
if(!this.$oj$vlt)return null;
for(var o=[this.$oj$vlt,this.$oj$glt],i=this.$oj$rlt(),n=i.length-1;n>=0;n--){
var s=i[n];
o.push(($=s&&s.$oj$Pst())&&$.$oj$Yut(),s&&s.$oj$Nft(),s&&s.$oj$jst(),s&&s.$oj$Fst(),s&&s.$oj$Ist(),0,s&&s.$oj$vot());
}
var r=void 0,e=0;
j._cls.$oj$Hft.$oj$Slt(function($){
if(e<o.length)return o[e++];
r=$;
});
!function(){
var $=void 0,i=j._cls.$oj$Hft.$oj$wlt(function(t){
if(!$){
$=[];
return r;
}
$.push(t);
}),n=$.pop(),s=o.shift(),e=$.shift(),c=s.toUpperCase().replace(/[^A-Z0-9]/g,"")==e.toUpperCase().replace(/[^A-Z0-9]/g,""),u=o.join(",").toUpperCase()==$.join(",").toUpperCase();
if(!i||!c||!u){
o.unshift(s);
$.unshift(e);
var h=t("trace",!0);
h&&h.trace({
title:"Code Mismatch",
message:["Code Mismatch",r,n,o.join(","),$.join(",")].join("\n")
});
}
}();
return r;
};
i.$oj$pot=function(){
for(var $,t=0,o=0,i=0,n=0,s=this.$oj$rlt(),r=0,e=s.length;e>r;r++){
var c=s[r];
t+=c&&c.$oj$jst();
o+=c&&c.$oj$Fst();
i+=c&&c.$oj$Ist();
n+=c&&c.$oj$vot();
}
return($=new j._cls.$oj$hft())&&$.$oj$Oft(null,null,t,o,i,n);
};
i.$oj$rlt=function(){
if(1==this.$oj$mlt.length)return this.$oj$mlt;
for(var $=[],t=0,o=this.$oj$mlt.length;o>t;t++){
var j=this.$oj$mlt[t];
(j&&j.$oj$jst()||j&&j.$oj$Fst()||j&&j.$oj$Ist()||j==this.$oj$plt)&&$.push(j);
}
return $;
};
i.$oj$xlt=function($){
this.$oj$mlt=$;
this.$oj$plt=$.length>0?$[0]:null;
};
i.$oj$fot=function($){
for(var t,o=$.n,i=$.r,n=[],s=0,r=i.length;r>s;s++){
var e=(t=new j._cls.$oj$hft())&&t.$oj$Dft(i[s]);
e&&(e&&e.$oj$Cft())==o&&n.push(e);
}
this.$oj$xlt(n);
this.$oj$vlt=o;
};
i.$oj$cot=function(){
for(var $,t=[],o=0,j=this.$oj$mlt.length;j>o;o++)t.push(($=this.$oj$mlt[o])&&$.$oj$cot());
return{
r:t,
n:this.$oj$vlt
};
};
i.$oj$Kut=function(){
var $,t;
if(!this.$oj$dlt){
var o=this.$oj$mlt.length>0?this.$oj$mlt[0]:null;
o&&(this.$oj$dlt=($=(t=o&&o.$oj$Pst())&&t["class"]())&&$.$oj$Kut());
}
return this.$oj$dlt;
};
return n;
});
}();
!function(){
"use strict";
var t=void 0,o=!1;
o&&$.log&&(t=$.log);
var i=" -  .'ABCDEFGHIJKLMNOPQRSTUVWXYZ",n="ybndrfg8ejkmcpqxot1uwisza345h769",s="093E7W8FXGKJTRBPN4ZHCD6SQ21MY5AV";
j._registerClass({
$oj$Hft:1
},null,function(t){
function o(){
this.constructor=o;
this.$oj_id=++j._id;
}
function r($){
function t($){
for(var t=[],o=0,j=0,i=$.length;i>o;o++,j+=8)t[j>>>5]|=(255&$[o])<<24-j%32;
return t;
}
function o($){
for(var t=[],o=0,j=32*$.length;j>o;o+=8)t.push($[o>>>5]>>>24-o%32&255);
return t;
}
function j($){
var o=t($),j=8*$.length,i=1732584193,n=-271733879,s=-1732584194,r=271733878,e=-1009589776,c=[];
o[j>>5]|=128<<24-j%32;
o[(j+64>>>9<<4)+15]=j;
for(var u=0;u<o.length;u+=16){
for(var h=i,a=n,l=s,f=r,v=e,d=0;80>d;d++){
if(16>d)c[d]=o[u+d];else{
var _=c[d-3]^c[d-8]^c[d-14]^c[d-16];
c[d]=_<<1|_>>>31;
}
var g=(i<<5|i>>>27)+e+(c[d]>>>0)+(20>d?(n&s|~n&r)+1518500249:40>d?(n^s^r)+1859775393:60>d?(n&s|n&r|s&r)-1894007588:(n^s^r)-899497514);
e=r;
r=s;
s=n<<30|n>>>2;
n=i;
i=g;
}
i+=h;
n+=a;
s+=l;
r+=f;
e+=v;
}
return[i,n,s,r,e];
}
return o(j($));
}
function e($){
return String.fromCharCode($);
}
function c($){
return String.fromCharCode.apply(null,$);
}
function u($,t){
for(var o=[],j=0,i=$.length;i>j;j++){
var n=$.charAt(j),s=t.indexOf(n);
s>=0&&o.push(s);
}
return o;
}
function h($,t){
for(var o=[],j=0,i=$.length;i>j;j++)o.push(t.charCodeAt($[j]));
return c(o);
}
function a($){
var t=[];
$=unescape(encodeURIComponent($));
for(var o=0,j=$.length;j>o;o++)t[o]=$.charCodeAt(o);
return t;
}
function l($){
if($)try{
return decodeURIComponent(escape(c($)));
}catch(t){}
return null;
}
function f($){
for(var t=a($),o=[0,0,0,0,0],j=r(t),i=0,n=j.length;n>i;i++)o[i%5]^=j[i];
return o;
}
function v($,t){
for(var o=0,j=t.length;j>o;o++){
var i=t[o];
$.push((1&i)>0,(2&i)>0,(4&i)>0,(8&i)>0,(16&i)>0);
}
}
function d($,t){
for(var o=0,j=0;t>j;j++)$.shift()&&(o+=1<<j);
return o;
}
function _($){
return d($,1)>0;
}
function g($){
for(var t=0,o=0;;){
o|=d($,7)<<t;
if(0===d($,1))break;
t+=7;
}
return o;
}
function p($,t,o){
for(var j=[],i=0;t>i&&$.length>0;i++)j.push(d($,o));
return j;
}
function y($,t,o){
for(var j=0;o>j;j++){
$.push(!!(1&t));
t=Math.floor(t/2);
}
}
function m($,t){
y($,t?1:0,1);
}
function w($,t,o){
for(var j=0,i=t.length;i>j;j++)y($,t[j],o);
}
function b($,t){
for(;;){
var o=t>>>7;
y($,127&t,7);
y($,o>0?1:0,1);
if(!(t=o))break;
}
}
function S($){
for(var t=[];$.length%25!==0;)$.push(!1);
for(var o=0;o<$.length;)t.push(($[o++]?1:0)+($[o++]?2:0)+($[o++]?4:0)+($[o++]?8:0)+($[o++]?16:0));
return t;
}
function M($){
$=$.slice(0);
for(var t=1,o=$.length;o>t;t++)$[t]=31&($[t]^$[t-1]^31&t);
return $;
}
function F($){
for(var t=[$[0]],o=1,j=$.length;j>o;o++)t[o]=31&($[o]^$[o-1]^31&o);
return t;
}
function E($){
for(var t=[],o=0,j=$.length;j>o;o++)t.push(i.charCodeAt($[o]));
return c(t);
}
function x($){
var t=[];
$=$.toUpperCase().trim();
for(var o=0,j=$.length;j>o;o++){
var i=$.charCodeAt(o);
if(9==i||32==i)i=0;else if(45==i)i=1;else if(46==i)i=4;else if(i>=65&&90>=i)i-=59;else{
if(39!=i&&96!=i){
if(i>=48&&57>=i||i>=128)return null;
continue;
}
i=5;
}
t.push(i);
}
return t;
}
function q($){
for(var t=[],o=0,j=$.length;j>o;o+=5)t.push($.substr(o,5));
t.unshift(e(65));
t.push(e(90));
return t.join(e(45));
}
function C($){
return f($.join(e(0)));
}
function T($,t){
for(var o=$.toUpperCase(),j=[],i=o.length-1,n=0;i>=n;n++){
var s=o.charCodeAt(n);
if(79==s)s=48;else if(73==s||76==s)s=49;else if(t&&(65==s&&0==n||90==s&&n==i))continue;
j.push(s);
}
return c(j);
}
function D($,t){
var o=u(t,s),j=F(o),i=[];
v(i,j);
var r=d(i,3),e=[],c=p(i,5,8),a=_(i),f=1,y=0,m=void 0,w=void 0;
if(2==r){
m=g(i);
w=p(i,m,a?5:8);
f=g(i);
y=g(i);
}
for(var b=0;f>b;b++){
var S=_(i),x=d(i,6),T=g(i),D=g(i),O=g(i),P=S?g(i):0,A=g(i);
1==r&&(m=g(i));
var N=g(i),I=p(i,N,5);
1==r&&(w=p(i,m,a?5:8));
w||(w=[]);
I||(I=[]);
var L=T+P,B=D+L,H=I.length>0?h(I,n):"";
e.push(H,x,L,B,O,P,A);
}
var K=void 0;
K=w?a?E(w):l(w):"";
e.unshift(K);
for(var z=C(e),J=!0,Z=0,k=c.length;k>Z;Z++)if(c[Z]!==z[Z]){
J=!1;
break;
}
var R=M(j),W=h(R,s),Q=q(W),U=Q;
if(a){
for(var V=K.split(/\s+/),X=0,G=V.length;G>X;X++)V[X]=V[X].charAt(0).toUpperCase()+V[X].substring(1).toLowerCase();
K=V.join(" ");
}
var Y=e;
Y.splice(0,1,K,y);
Y.push(U);
for(var $t=0,tt=Y.length;tt>$t;$t++)$(J?Y[$t]:null);
return J;
}
function O($){
for(var t=$(),o=$(),j=[t],i=[];;){
var r=[];
r[0]=$();
if(void 0===r[0])break;
j.push(r[0]);
j.push(r[1]=$());
j.push(r[2]=$());
j.push(r[3]=$());
j.push(r[4]=$());
j.push(r[5]=$());
j.push(r[6]=$());
i.push(r);
}
var e=x(t),c=!!e;
if(e){
c=!0;
t=E(e);
j[0]=t;
}else{
c=!1;
e=a(t);
}
var l=C(j),f=void 0,v=[];
if(1==i.length&&0===o){
y(v,1,3);
w(v,l,8);
m(v,c);
f=1;
}else{
y(v,2,3);
w(v,l,8);
m(v,c);
b(v,e.length);
w(v,e,c?5:8);
b(v,i.length);
b(v,o);
f=2;
}
for(var d=0,_=i.length;_>d;d++){
var g=i[d],p=g[0],F=g[1],T=g[2],D=g[3],O=g[4],P=(g[5],g[6]),A=u(p,n);
m(v,!1);
y(v,F,6);
b(v,T);
b(v,D-T);
b(v,O);
b(v,P);
1==f&&b(v,e.length);
b(v,A.length);
w(v,A,5);
1==f&&w(v,e,c?5:8);
}
var N=S(v),I=M(N),L=h(I,s),B=q(L);
$(B);
}
t.$oj$wlt=function(t){
if($.isFunction(t)){
var o=t();
return D(t,T(o,!0))||D(t,T(o,!1));
}
return!1;
};
t.$oj$Slt=function($){
O($);
};
t.$oj$Pft=function($){
return C($);
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Tlt:1
},null,function(t,o){
function i(){
this.$oj$Nlt=this.$oj$Clt=this.$oj$klt=this.$oj$Llt=this.$oj$Alt=this.$oj$Olt=this.$oj$Mlt=this.$oj$Dlt=this.$oj$Plt=this.$oj$Hlt=this.$oj$Blt=this.$oj$jlt=this.$oj$Flt=this.$oj$Ilt=this.$oj$qlt=this.$oj$Rlt=this.$oj$Ult=this.$oj$zlt=this.$oj$Wlt=this.$oj$Xlt=this.$oj$Vlt=this.$oj$Jlt=this.$oj$Klt=null;
this.$oj$Qlt=this.$oj$Glt=this.$oj$Ylt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$Zlt=function($){
this.$oj$Jlt=$;
};
o.$oj$Qft=function(){
return this.$oj$Jlt;
};
o.$oj$ect=function(){
return this.$oj$Hlt;
};
o.$oj$tct=function($){
this.$oj$Vlt=$;
};
o.$oj$Gft=function(){
return this.$oj$Vlt;
};
o.$oj$vut=function($){
this.$oj$Glt=$;
};
o.$oj$dut=function(){
return this.$oj$Glt;
};
o.$oj$Out=function($){
this.$oj$Ylt=$;
};
o.$oj$Aut=function(){
return this.$oj$Ylt;
};
o.$oj$gut=function($){
this.$oj$Rlt=$;
};
o.$oj$but=function(){
return this.$oj$Rlt;
};
t.$oj$Kut=function(){
return"";
};
t.$oj$nct=function($){
return"AudioRange-"+$;
};
o.init=function(){
var $,t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$rct();
t.$oj$ict();
t.$oj$sct();
t.$oj$Blt=($=t.constructor)&&$.$oj$oct();
}
return t;
};
o.$oj$uct=function($){
var t=this.$oj$act(),o=t[$];
return o&&o.$oj$Wft();
};
o.isEqual_=function($){
if(!$||!$.isKindOfClass_(j._cls.$oj$Tlt))return!1;
var t=this.$oj$Gut(),o=$&&$.$oj$Gut();
if(t!=o)return!1;
var i=this.$oj$Yut(),n=$&&$.$oj$Yut();
return i==n;
};
t.$oj$oct=function(){
return null;
};
o.$oj$sot=function($,t){
var o=this.$oj$Blt&&this.$oj$Blt.$oj$fct($,t),j=this.$oj$Blt&&this.$oj$Blt.$oj$lct();
if(0!=j)return!1;
this.$oj$Blt&&this.$oj$Blt.$oj$Iit();
o&&this.$oj$aot(o);
return!0;
};
o.$oj$Yut=function(){
var $=null;
try{
$=this.$oj$Blt&&this.$oj$Blt.$oj$cct(this.$oj$Gut(),this);
}catch(t){}
return $;
};
o.$oj$hct=function(){
return"https://www.musictheory.net/exercises/"+this.$oj$Gut()+"/"+this.$oj$Yut();
};
o.$oj$pct=function(){
return"/exercises/"+this.$oj$Gut()+"/"+this.$oj$Yut();
};
o.$oj$dct=function(){
return"x-tenuto:/"+this.$oj$pct();
};
o.$oj$Gut=function(){
return null;
};
o.$oj$rct=function(){};
o.$oj$vct=function(){};
o.$oj$mct=function(t){
var o=this;
if(!this.$oj$qlt){
var i={},n=j._cls.$oj$u2.$oj$w2();
$.each(n,function($){
var t=j._cls.$oj$u2.$oj$E2($);
i[$]=t;
});
o.$oj$qlt=i;
}
return o.$oj$qlt[t];
};
o.$oj$act=function(){
var t=this;
if(!this.$oj$zlt){
var o={};
$.each(this.$oj$Vlt,function($){
var t=$&&$.$oj$gct();
o[t]=$;
});
t.$oj$zlt=o;
}
return t.$oj$zlt;
};
o.$oj$yct=function(){
var t=this;
if(!this.$oj$Dlt)return;
var o=null,j=this.$oj$Dlt&&this.$oj$Dlt.$oj$Jr();
1==j?o=this.$oj$Dlt&&this.$oj$Dlt.$oj$Wft():0==j&&(o=[this.$oj$Dlt&&this.$oj$Dlt.$oj$Wft()]);
o&&$.each(this.$oj$Klt,function(j){
var i=j&&j.$oj$xn();
if(0==i){
var n=$.includes(t.$oj$uft(),-2);
t.$oj$bct(j,n);
}else{
var s=!$.includes(o,i);
t.$oj$bct(j,s);
}
});
};
o.$oj$wct=function(){
var t=this;
if(!this.$oj$Clt)return;
if(!this.$oj$klt)return;
var o=this.$oj$Ect();
$.each(this.$oj$klt,function($){
t.$oj$bct($,o!=($&&$.$oj$xn()));
});
};
o.$oj$Sct=function(){
if(!this.$oj$Xlt)return;
var t=this.$oj$Wlt?this.$oj$Att():0;
$.each(this.$oj$Xlt&&this.$oj$Xlt.$oj$Kft(),function($){
var o=$&&$.$oj$xn(),i=j._cls.$oj$l8.$oj$d8(o,t),n=j._cls.$oj$l8.$oj$g8(o,t);
$&&$.$oj$xct("musictype:"+i);
$&&$.$oj$Tct(n);
});
};
o.$oj$Nct=function(){
var t,o=this;
if(!this.$oj$jlt)return;
var j=(t=this.$oj$Iit())&&t.$oj$d2();
$.each(this.$oj$Flt,function(t){
$.each(t&&t.$oj$Kft(),function($){
$&&$.$oj$xct(null);
});
o.$oj$bct(t,j!=(t&&t.$oj$xn()));
o.$oj$Cct(t);
});
$.each(o.$oj$Ilt,function($){
o.$oj$bct($,j!=($&&$.$oj$xn()));
});
};
o.$oj$Cct=function(t){
var o=this.$oj$mct(t&&t.$oj$xn()),j=t&&t.$oj$Wft(),i=0;
$.each(o&&o.$oj$v2(),function(t){
var o=$.includes(j,i);
t&&t.$oj$q2(o);
i++;
});
};
o.$oj$kct=function(t,o,j){
if(t==this.$oj$Dlt){
var i=$.includes(j,-2),n=$.includes(o,-2);
if(n&&!i)return[-2];
if(i&&o.length>1)return $.without(o,-2);
}
return o;
};
o.$oj$Lct=function(t,o){
if(t==this.$oj$Dlt)this.$oj$yct();else if(t==this.$oj$Wlt){
this.$oj$Sct();
this.$oj$Nct();
this.$oj$wct();
}else t==this.$oj$Clt?this.$oj$wct():t==this.$oj$jlt?this.$oj$Nct():$.includes(this.$oj$Flt,t)&&this.$oj$Cct(t);
this.$oj$vct(t,o);
this.$oj$Glt=!0;
};
o.$oj$Act=function(t){
var o,i=this,n={};
$.each(t,function($){
n[$]=!0;
});
var s=(o=new j._cls.$oj$Mct())&&o.$oj$Oct("NoteNameStyle");
s&&s.$oj$Dct("Note Names");
s&&s.$oj$Pct(0);
s&&s.$oj$Hct(0);
s&&s.$oj$Bct(0);
function r($,t,o){
if(!n[o])return null;
var i=j._cls.$oj$Fct.$oj$jct($,o);
i&&i.$oj$Ict(t);
s&&s.$oj$qct(i);
return i;
}
r("Letters","Letters",0);
r("Letters (Alphabetical)","Alphabetical",11);
r("Letters (Accidental Words)","Letters (Words)",15);
if(n[16]||n[17]||n[18]){
s&&s.$oj$ict();
r("Letters (Fifths, C in Center)","Fifths (C)",16);
r("Letters (Fifths, A in Center)","Fifths (A)",17);
r("Letters (Fifths, Symmetric)","Fifths (Sym.)",18);
}
s&&s.$oj$ict();
var e=r("Solf&egrave;ge (Fixed, Do-Si)","Fixed Do-Si",1),c=r("Solf&egrave;ge (Fixed, Do-Ti)","Fixed Do-Ti",2),u=r("Solf&egrave;ge (Fixed, Ut-Si)","Fixed Ut-Si",3),h=r("Solf&egrave;ge (Fixed, Ut-Ti)","Fixed Ut-Ti",4);
e&&e.$oj$Eit("Soulfedge Fixed Doe See");
c&&c.$oj$Eit("Soulfedge Fixed Doe Tea");
u&&u.$oj$Eit("Soulfedge Fixed Oot See");
h&&h.$oj$Eit("Soulfedge Fixed Oot Tea");
e&&e.$oj$Rct("Fixed Doe See");
c&&c.$oj$Rct("Fixed Doe Tea");
u&&u.$oj$Rct("Fixed Oot See");
h&&h.$oj$Rct("Fixed Oot Tea");
var a=r("Solf&egrave;ge (Fixed, Chromatic)","Fixed Chromatic",13);
a&&a.$oj$Eit("Soulfedge Fixed Chromatic");
s&&s.$oj$ict();
r("German","German",14);
if(n[7]||n[8]){
s&&s.$oj$ict();
r("Pitch-class Integer","Integer",7);
r("Pitch-class Integer (t, e)","Integer (t, e)",8);
}
if(n[5]||n[6]||n[12]){
s&&s.$oj$Uct(1);
var l=r("Solf&egrave;ge (Movable Do)","Movable Do",5);
l&&l.$oj$Rct("Movable Doe");
l&&l.$oj$Eit("Soulfedge, Movable Doe");
var f=r("Solf&egrave;ge (Movable Minor-Do)","Minor-Do",6);
f&&f.$oj$Eit("Soulfedge, Movable Minor Doe");
f&&f.$oj$Rct("Minor Doe");
var v=r("Solf&egrave;ge (Movable Minor-La)","Minor-La",12);
v&&v.$oj$Eit("Soulfedge, Movable Minor La");
v&&v.$oj$Rct("Minor La");
}
if(n[9]||n[10]){
s&&s.$oj$Uct(1);
r("Scale Degrees","Degrees",9);
r("Scale Degrees (Minor)","Degrees (Minor)",10);
}
i.$oj$zct(s);
return s;
};
o.$oj$Wct=function($,t){
var o,i=this,n=(o=new j._cls.$oj$Mct())&&o.$oj$Oct($);
n&&n.$oj$Dct("Clefs");
n&&n.$oj$Hct(1);
n&&n.$oj$Bct([34]);
n&&n.$oj$Pct(2);
n&&n.$oj$Xct(!0);
n&&n.$oj$Vct(4);
function s($){
var t=j._cls.$oj$l8.$oj$c8($,!0),o=j._cls.$oj$l8.$oj$c8($,!1),i="clef:"+$,s=0;
s=-2==$?99:61;
var r=j._cls.$oj$Fct.$oj$Jct(t,i,$);
r&&r.$oj$Kct(s);
r&&r.$oj$Rct(o);
n&&n.$oj$qct(r);
}
if(t){
s(-2);
n&&n.$oj$ict();
}
s(34);
s(22);
s(28);
s(26);
n&&n.$oj$ict();
s(32);
s(30);
s(24);
i.$oj$zct(n);
return n;
};
o.$oj$Qct=function($,t){
var o,i=(o=new j._cls.$oj$Mct())&&o.$oj$Oct($);
i&&i.$oj$Hct(2);
i&&i.$oj$Gct(t);
i&&i.$oj$Pct(2);
var n=-8,s=8;
if(34==t)i&&i.$oj$Dct("Treble Range");else if(22==t)i&&i.$oj$Dct("Bass Range");else if(28==t)i&&i.$oj$Dct("Alto Range");else if(26==t)i&&i.$oj$Dct("Tenor Range");else if(32==t)i&&i.$oj$Dct("Soprano Range");else if(30==t)i&&i.$oj$Dct("Mezzo-sop. Range");else if(24==t)i&&i.$oj$Dct("Baritone Range");else{
i&&i.$oj$Dct("Range");
if(-2==t){
n=-12;
s=12;
}
}
i&&i.$oj$Bct(j._cls.$oj$Cn.$oj$jn(n,s));
this.$oj$zct(i);
return i;
};
o.$oj$Yct=function(){
var $,t=($=new j._cls.$oj$Mct())&&$.$oj$Oct("Instrument");
t&&t.$oj$Dct("Instrument");
t&&t.$oj$Pct(0);
t&&t.$oj$Hct(0);
t&&t.$oj$Bct(2);
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Modern Piano",2));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Grand Piano",1));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Classic Piano",0));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Acoustic Guitar",5));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Synth Guitar",6));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Piccolo",15));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Flute",10));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Oboe",11));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Clarinet",12));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Bass Clarinet",14));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Bassoon",13));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Soprano Sax",16));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Alto Sax",17));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Tenor Sax",18));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Bari. Sax",19));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Trumpet",20));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Trombone",21));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("French Horn",22));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Tuba",23));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Violin",24));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Viola",25));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Cello",26));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Double Bass",27));
t&&t.$oj$ict();
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Marimba",28));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Vibraphone",29));
this.$oj$zct(t);
return t;
};
o.$oj$Zct=function($){
var t,o=j._cls.$oj$Tlt.$oj$nct($),i=j._cls.$oj$Mr.$oj$Or($),n=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(o);
n&&n.$oj$Hct(3);
n&&n.$oj$Gct($);
n&&n.$oj$Pct(2);
n&&n.$oj$Dct("Range");
n&&n.$oj$Bct(i&&i.$oj$Qr());
n&&n.$oj$eht(i&&i.$oj$Kr());
this.$oj$zct(n);
return n;
};
o.$oj$tht=function(){
var $,t=this,o=($=new j._cls.$oj$Mct())&&$.$oj$Oct("FretboardInstrument");
function i($,t){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
o&&o.$oj$qct(i);
}
o&&o.$oj$Dct("Instrument");
o&&o.$oj$Hct(0);
o&&o.$oj$Pct(0);
o&&o.$oj$Bct(0);
i(0,"Guitar");
i(3,"Guitar (7-string)");
o&&o.$oj$ict();
i(1,"Bass Guitar");
i(4,"Bass Guitar (5-string)");
i(7,"Bass Guitar (6-string)");
o&&o.$oj$ict();
i(2,"Mandolin");
i(9,"Banjo");
i(8,"Ukulele");
t.$oj$zct(o);
return o;
};
o.$oj$nht=function($){
var t,o="FretboardTuning-"+$,i=this.$oj$mct($),n=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(o);
n&&n.$oj$Dct("Tuning");
n&&n.$oj$Hct(5);
n&&n.$oj$Pct(2);
n&&n.$oj$rht(i);
n&&n.$oj$Gct(i&&i.$oj$d2());
this.$oj$zct(n);
return n;
};
o.$oj$iht=function(t){
var o,i=this,n="FretboardString-"+t,s=this.$oj$mct(t),r=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(n);
r&&r.$oj$Dct("Strings");
r&&r.$oj$Hct(1);
r&&r.$oj$Pct(1);
r&&r.$oj$Gct(s&&s.$oj$d2());
var e=[],c=0;
$.each(s&&s.$oj$v2(),function($){
var t=j._cls.$oj$Fct.$oj$jct("",c),o=c+1;
t&&t.$oj$sht(function(){
var t=j._cls.$oj$Mt.$oj$Xt($&&$.$oj$u9()),n=j._cls.$oj$l8.$oj$d8(t&&t.$oj$xn(),i.$oj$Att());
return"musictype:"+o+" -- "+n;
});
t&&t.$oj$oht(function(){
var t=j._cls.$oj$Mt.$oj$Xt($&&$.$oj$u9()),n=j._cls.$oj$l8.$oj$v8(t&&t.$oj$xn(),i.$oj$Att());
return o+" - "+n;
});
t&&t.$oj$Tct(""+o);
e.push(c);
r&&r.$oj$qct(t);
c++;
});
r&&r.$oj$Bct(e);
i.$oj$zct(r);
return r;
};
o.$oj$uht=function($){
var t,o,i,n=(t=new j._cls.$oj$Mct())&&t.$oj$Oct("CorrectAnswerStyle"),s=13==$?3:2;
n&&n.$oj$Dct("Next Question");
n&&n.$oj$Pct(0);
n&&n.$oj$Hct(0);
n&&n.$oj$Bct(s);
var r=[],e=j._cls.$oj$Fct.$oj$jct("Immediately",0);
r.push("proceed to the next question immediately");
n&&n.$oj$qct(e);
var c=(o=j._cls.$oj$Htt.$oj$ti())&&o.$oj$Ptt(),u=c?"After Tap":"After Click/Tap";
r.push(c?"wait for a tap":"wait for a click/tap");
var h=j._cls.$oj$Fct.$oj$jct(u,1);
n&&n.$oj$qct(h);
if(12==$){
var a=j._cls.$oj$Fct.$oj$jct("After Replay",2);
r.push("or replay the question");
n&&n.$oj$qct(a);
}else if(13==$){
var l=j._cls.$oj$Fct.$oj$jct("After Animation",3);
r.push("or show a brief animation");
n&&n.$oj$qct(l);
}else{
var f=j._cls.$oj$Fct.$oj$jct("After Audio",2);
r.push("play an audio example");
n&&n.$oj$qct(f);
var v=j._cls.$oj$Fct.$oj$jct("After Animation",3);
r.push("or show a brief animation");
n&&n.$oj$qct(v);
}
(i=n&&n.$oj$ect())&&i.$oj$aht("Upon a correct answer: "+r.join(", ")+".");
this.$oj$zct(n);
return n;
};
o.$oj$fht=function(){
var $,t,o=this,i=($=new j._cls.$oj$Mct())&&$.$oj$Oct("KeySignature");
i&&i.$oj$Dct("Key Signatures");
i&&i.$oj$Pct(1);
i&&i.$oj$Hct(1);
function n($){
var t="keysig:"+$,o=void 0;
o=$>0?$+"#":0>$?-$+"b":"None";
var n=j._cls.$oj$Fct.$oj$Jft($);
n&&n.$oj$xct(t);
n&&n.$oj$Tct(o);
n&&n.$oj$Eit(j._cls.$oj$l8.$oj$h8($));
n&&n.$oj$Kct(48);
i&&i.$oj$qct(n);
return $;
}
i&&i.$oj$ict();
n(0);
i&&i.$oj$ict();
(t=i&&i.$oj$ect())&&t.$oj$lht([[n(-1),n(1)],[n(-2),n(2)],[n(-3),n(3)],[n(-4),n(4)],[n(-5),n(5)],[n(-6),n(6)],[n(-7),n(7)]]);
i&&i.$oj$Bct([-2,-1,0,1,2]);
o.$oj$zct(i);
return i;
};
o.$oj$cht=function(){
var $,t=this,o=($=new j._cls.$oj$Mct())&&$.$oj$Oct("Difficulty");
function i($,t,o){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
o&&i&&i.$oj$hht(o);
i&&i.$oj$Kct(o?55:49);
return i;
}
o&&o.$oj$Dct("Difficulty");
o&&o.$oj$Pct(0);
o&&o.$oj$Hct(0);
o&&o.$oj$Bct(2);
o&&o.$oj$qct(i(1,"Level 1","No accidentals"));
o&&o.$oj$qct(i(2,"Level 2",null));
o&&o.$oj$qct(i(3,"Level 3",null));
o&&o.$oj$qct(i(4,"Level 4",null));
o&&o.$oj$qct(i(5,"Level 5","Accidentals of doom"));
t.$oj$zct(o);
return o;
};
o.$oj$pht=function(){
var $,t=($=new j._cls.$oj$Mct())&&$.$oj$Oct("Speed");
t&&t.$oj$Dct("Speed");
t&&t.$oj$Pct(0);
t&&t.$oj$Hct(0);
t&&t.$oj$Bct(1e3);
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Slower",1e3));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Slow",750));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Normal",500));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Fast",333));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Faster",250));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Fastest",125));
this.$oj$zct(t);
return t;
};
o.$oj$dht=function(){
var $,t,o=this,i=($=new j._cls.$oj$Mct())&&$.$oj$Oct("Note");
function n($){
var t=j._cls.$oj$l8.$oj$v8($,0),o=j._cls.$oj$Fct.$oj$Jct("","",$);
o&&o.$oj$Eit(t);
o&&o.$oj$Kct(60);
i&&i.$oj$qct(o);
return $;
}
i&&i.$oj$Dct("Notes");
i&&i.$oj$Hct(1);
i&&i.$oj$Pct(1);
i&&i.$oj$Bct([5,15,25,35,45,55,65]);
i&&i.$oj$ict();
(t=i&&i.$oj$ect())&&t.$oj$lht([[n(4),n(5),n(6)],[n(14),n(15),n(16)],[n(24),n(25),n(26)],[n(34),n(35),n(36)],[n(44),n(45),n(46)],[n(54),n(55),n(56)],[n(64),n(65),n(66)]]);
o.$oj$zct(i);
return i;
};
o.$oj$vht=function(){
var t,o=this,i=(t=new j._cls.$oj$Mct())&&t.$oj$Oct("ChallengeTimeLimit");
i&&i.$oj$Dct("Time Limit");
i&&i.$oj$Hct(0);
i&&i.$oj$Pct(6);
i&&i.$oj$Bct(0);
$.each([0,1,2,3,4,5,6,7,8,9,10,15,20,25,30],function($){
var t=$?$+" min":"Off",o=null;
$>1?o=$+" minutes":1==$&&(o="1 minute");
var n=j._cls.$oj$Fct.$oj$Jct(t,null,$);
n&&n.$oj$Tct(o);
n&&n.$oj$Eit(o);
i&&i.$oj$qct(n);
});
o.$oj$zct(i);
return i;
};
o.$oj$mht=function(){
var t,o=this,i=(t=new j._cls.$oj$Mct())&&t.$oj$Oct("ChallengeQuestionLimit");
i&&i.$oj$Dct("Question Limit");
i&&i.$oj$Hct(0);
i&&i.$oj$Pct(6);
i&&i.$oj$Bct(0);
$.each([0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],function($){
var t=$?String($):"Off",o=j._cls.$oj$Fct.$oj$Jct(t,null,$);
i&&i.$oj$qct(o);
});
o.$oj$zct(i);
return i;
};
o.$oj$ght=function(){
var $,t=($=new j._cls.$oj$Mct())&&$.$oj$Oct("ChallengeMultipleAttempts");
t&&t.$oj$Dct("Multiple Attempts");
t&&t.$oj$Pct(3);
t&&t.$oj$Hct(0);
t&&t.$oj$Bct(0);
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(t);
return t;
};
o.$oj$yht=function($){
this.$oj$bht($,null);
};
o.$oj$bht=function(t,o){
var i=this;
if(1==t){
this.$oj$Dlt=this.$oj$Wct("Clef",!1);
this.$oj$Dlt&&this.$oj$Dlt.$oj$wht(t);
}else if(2==t){
this.$oj$Dlt=this.$oj$Wct("Clef",!0);
this.$oj$Dlt&&this.$oj$Dlt.$oj$wht(t);
this.$oj$Qlt=!0;
}else if(3==t){
var n=this.$oj$Qct("Range",0);
n&&n.$oj$wht(t);
this.$oj$Klt=[n];
if(this.$oj$Qlt){
var s=this.$oj$Qct("GrandRange",-2);
s&&s.$oj$wht(t);
this.$oj$Klt=[n,s];
}
}else if(4==t){
this.$oj$Klt=[this.$oj$Qct("TrebleRange",34),this.$oj$Qct("BassRange",22),this.$oj$Qct("AltoRange",28),this.$oj$Qct("TenorRange",26),this.$oj$Qct("SopranoRange",32),this.$oj$Qct("MezzoSopranoRange",30),this.$oj$Qct("BaritoneRange",24)];
if(this.$oj$Qlt){
var r=this.$oj$Qct("GrandRange",-2);
this.$oj$Klt.push(r);
}
$.each(this.$oj$Klt,function($){
$&&$.$oj$wht(t);
});
}else if(5==t){
o||(o=[0,11,1,2,3,4,13,14]);
i.$oj$Wlt=i.$oj$Act(o);
i.$oj$Wlt&&i.$oj$Wlt.$oj$wht(t);
}else if(6==t){
i.$oj$Clt=i.$oj$Yct();
i.$oj$Clt&&i.$oj$Clt.$oj$wht(t);
}else if(7==t){
var e=[];
$.each(j._cls.$oj$Mr.$oj$Yr(),function($){
var o=i.$oj$Zct($);
o&&o.$oj$wht(t);
e.push(o);
});
i.$oj$klt=e;
}else if(8==t){
i.$oj$jlt=i.$oj$tht();
i.$oj$jlt&&i.$oj$jlt.$oj$wht(t);
}else if(9==t){
var c=[];
$.each(j._cls.$oj$u2.$oj$w2(),function($){
var o=i.$oj$nht($);
o&&o.$oj$wht(t);
c.push(o);
});
i.$oj$Ilt=c;
}else if(10==t){
var u=[];
$.each(j._cls.$oj$u2.$oj$w2(),function($){
var o=i.$oj$iht($);
o&&o.$oj$wht(t);
u.push(o);
i.$oj$Cct(o);
});
i.$oj$Flt=u;
}else if(11==t||12==t||13==t){
i.$oj$Plt=i.$oj$uht(t);
i.$oj$Plt&&i.$oj$Plt.$oj$wht(t);
}else if(14==t){
i.$oj$Ult=i.$oj$fht();
i.$oj$Ult&&i.$oj$Ult.$oj$wht(t);
}else if(15==t){
i.$oj$Nlt=i.$oj$cht();
i.$oj$Nlt&&i.$oj$Nlt.$oj$wht(t);
}else if(16==t){
i.$oj$Llt=i.$oj$pht();
i.$oj$Llt&&i.$oj$Llt.$oj$wht(t);
}else if(17==t){
i.$oj$Xlt=i.$oj$dht();
i.$oj$Xlt&&i.$oj$Xlt.$oj$wht(t);
}
};
o.$oj$sct=function(){
var $=this.$oj$vht();
$&&$.$oj$Eht(!0);
this.$oj$Mlt=$;
var t=this.$oj$mht();
t&&t.$oj$Eht(!0);
this.$oj$Olt=t;
var o=this.$oj$ght();
o&&o.$oj$Eht(!0);
this.$oj$Alt=o;
};
o.$oj$Sht=function($){
for(var t=0,o=this.$oj$Vlt.length;o>t;t++){
var j=this.$oj$Vlt[t];
if((j&&j.$oj$xht())==$)return j;
}
return null;
};
o.$oj$Tht=function(t){
var o=[];
$.each(this.$oj$Vlt,function($){
($&&$.$oj$xht())==t&&o.push($);
});
return o;
};
o.$oj$Nht=function(t){
var o,i=this,n=t["key"],s=t["value"];
function r(){
if($.isArray(s)&&2==s.length)return j._cls.$oj$Cn.$oj$jn(s[0],s[1]);
if(s instanceof j._cls.$oj$Cn)return s;
return null;
}
var e=i.$oj$Zft(n),c=e&&e.$oj$Jr(),u=e&&e.$oj$Xft();
if(3==u||4==u){
4==u&&(s=!s);
for(var h=e&&e.$oj$Kft(),a=void 0,l=0,f=h.length;f>l;l++){
var v=h[l];
if(0===(v&&v.$oj$xn())&&!s){
a=v;
break;
}
if(0!==(v&&v.$oj$xn())&&s){
a=v;
break;
}
}
a&&e&&e.$oj$Cht(a,!0);
}else if(0==c)e&&e.$oj$kht(s,!0);else if(1==c||7==c){
var d=e&&e.$oj$Jft(s),_=!(e&&e.$oj$Lht(d));
e&&e.$oj$Cht(d,_);
}else if(5==c){
(o=i.$oj$Iit())&&o.$oj$B2(s);
e&&e.$oj$Aht();
}else if(3==c||2==c){
s=r();
if(!s)return;
e&&e.$oj$Oht(s);
}else if(4==c){
s=s.pop();
e&&e.$oj$Oht(s);
}
};
o.$oj$Mht=function($){
var t=$["dictionary"],o=$["reset"];
this.$oj$aot(t);
this.$oj$vut(!0);
this.$oj$Out(o);
};
o.$oj$Zut=function(t,o){
var i;
if(1200==t)return this.$oj$pct();
if(1201==t)return this.$oj$hct();
if(1210==t)return this.$oj$dct();
if(1202==t)return this.$oj$oot()||$.size(this.$oj$but())>0;
if(1204==t){
var n=o["id"];
return(i=j._cls.$oj$Pht.$oj$ti())&&i.$oj$Dht(this,n);
}
if(1208==t)return this.$oj$cot();
};
o.$oj$iat=function($,t){
3201==$?this.$oj$Nht(t):3202==$?this.$oj$Mht(t):3200==$&&this.$oj$Cut();
};
o.$oj$aot=function(t){
var o=this;
t=t||{};
$.each(this.$oj$Vlt,function($){
$&&$.$oj$aot(t);
});
o.$oj$Cut();
o.$oj$yct();
o.$oj$Sct();
o.$oj$wct();
o.$oj$Nct();
o.$oj$vut(!1);
};
o.$oj$ylt=function(t){
$.each(this.$oj$Vlt,function($){
$&&$.$oj$ylt(t);
});
};
o.$oj$cot=function(){
var $={};
this.$oj$ylt($);
return $;
};
o.$oj$ict=function(){
var $;
this.$oj$Jlt||(this.$oj$Jlt=[]);
var t=($=new j._cls.$oj$Hht())&&$.init();
this.$oj$Jlt.push(t);
this.$oj$Hlt=t;
};
o.$oj$zct=function($){
this.$oj$Hlt||this.$oj$ict();
this.$oj$Vlt||(this.$oj$Vlt=[]);
$&&$.$oj$Bht(this);
this.$oj$Hlt&&this.$oj$Hlt.$oj$zct($);
this.$oj$Vlt.push($);
this.$oj$zlt=null;
};
o.$oj$oot=function(){
return $.some(this.$oj$Vlt,function($){
if(1==($&&$.$oj$Jr())){
var t=$&&$.$oj$Wft();
return!t||!t.length;
}
return!1;
});
};
o.$oj$Cut=function(){
$.each(this.$oj$Vlt,function($){
if(1==($&&$.$oj$Jr())){
var t=$&&$.$oj$Wft();
t&&t.length||$&&$.$oj$jht();
}
});
};
o.$oj$Zft=function($){
var t=this.$oj$act();
return t[$];
};
o.$oj$bct=function($,t){
$&&$.$oj$Eht(t);
};
o.$oj$Ect=function(){
return this.$oj$Clt&&this.$oj$Clt.$oj$Wft();
};
o.$oj$Att=function(){
return this.$oj$Wlt&&this.$oj$Wlt.$oj$Wft();
};
o.$oj$Fht=function(){
for(var $=this.$oj$Clt&&this.$oj$Clt.$oj$Wft(),t=0,o=this.$oj$klt.length;o>t;t++){
var j=this.$oj$klt[t];
if($==(j&&j.$oj$xn()))return j&&j.$oj$Wft();
}
return null;
};
o.$oj$uft=function(){
return this.$oj$Dlt&&this.$oj$Dlt.$oj$Wft();
};
o.$oj$Grt=function(){
var t=this.$oj$uft();
if(this.$oj$Qlt&&$.includes(t,-2))return this.$oj$aft(-2);
var o=[];
$.each(this.$oj$Klt,function(j){
var i=j&&j.$oj$xn();
-2==i||0!=i&&!$.includes(t,i)||o.push(j&&j.$oj$Wft());
});
return j._cls.$oj$Cn.$oj$Pn(o);
};
o.$oj$aft=function($){
for(var t=null,o=0,j=this.$oj$Klt.length;j>o;o++){
var i=this.$oj$Klt[o];
if((i&&i.$oj$xn())==$){
t=i&&i.$oj$Wft();
break;
}
}
return t;
};
o.$oj$Iit=function(){
var $=this.$oj$jlt&&this.$oj$jlt.$oj$Wft();
return this.$oj$qlt&&this.$oj$qlt[$];
};
o.$oj$Iht=function(){
return this.$oj$Plt&&this.$oj$Plt.$oj$Wft();
};
o.$oj$qht=function(){
return this.$oj$Ult&&this.$oj$Ult.$oj$Wft();
};
o.$oj$Rht=function(){
return this.$oj$Nlt&&this.$oj$Nlt.$oj$Wft();
};
o.$oj$Uht=function(){
return(this.$oj$Llt&&this.$oj$Llt.$oj$Wft())/1e3;
};
o.$oj$zht=function(){
return this.$oj$Xlt&&this.$oj$Xlt.$oj$Wft();
};
o.$oj$Dot=function(){
return this.$oj$Mlt&&this.$oj$Mlt.$oj$Wft();
};
o.$oj$Mot=function(){
return this.$oj$Olt&&this.$oj$Olt.$oj$Wft();
};
o.$oj$Fot=function(){
return(this.$oj$Alt&&this.$oj$Alt.$oj$Wft())>0;
};
o.$oj$Tot=function(){
return this.$oj$Dot()>0||this.$oj$Mot()>0;
};
o.$oj$Put=function(){
return this.$oj$Dot()>0;
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Fct:1
},null,function($,t){
function o(){
this.$oj$Wht=this.$oj$Xht=this.$oj$Vht=this.$oj$Jht=this.$oj$Kht=this.$oj$Qht=this.$oj$Ght=this.$oj$Yht=this.$oj$Zht=this.$oj$ept=null;
this.$oj$tpt=this.$oj$npt=0;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$rpt=function($){
this.$oj$Ght=$;
};
t.$oj$ipt=function(){
return this.$oj$Ght;
};
t.$oj$wit=function($){
this.$oj$ept=$;
};
t.$oj$Qet=function(){
return this.$oj$ept;
};
t.$oj$hht=function($){
this.$oj$Zht=$;
};
t.$oj$spt=function(){
return this.$oj$Zht;
};
t.$oj$Eit=function($){
this.$oj$Wht=$;
};
t.$oj$xct=function($){
this.$oj$Vht=$;
};
t.$oj$sht=function($){
this.$oj$Jht=$;
};
t.$oj$opt=function(){
return this.$oj$Jht;
};
t.$oj$oht=function($){
this.$oj$Xht=$;
};
t.$oj$upt=function(){
return this.$oj$Xht;
};
t.$oj$Ict=function($){
this.$oj$Qht=$;
};
t.$oj$Uft=function(){
return this.$oj$Qht;
};
t.$oj$Rct=function($){
this.$oj$Kht=$;
};
t.$oj$apt=function(){
return this.$oj$Kht;
};
t.$oj$Tct=function($){
this.$oj$Yht=$;
};
t.$oj$Rft=function(){
return this.$oj$Yht;
};
t.$oj$Kct=function($){
this.$oj$tpt=$;
};
t.$oj$fpt=function(){
return this.$oj$tpt;
};
t.$oj$xn=function(){
return this.$oj$npt;
};
$.$oj$Jft=function($){
return this.$oj$Jct(null,null,$);
};
$.$oj$jct=function($,t){
return this.$oj$Jct($,null,t);
};
$.$oj$lpt=function($,t,o){
var j,i=(j=this.alloc())&&j.$oj$J7(o);
i&&i.$oj$wit($);
i&&i.$oj$Ict(t);
return i;
};
$.$oj$Jct=function($,t,o){
var j,i=(j=this.alloc())&&j.$oj$J7(o);
i&&i.$oj$wit($);
i&&i.$oj$xct(t);
return i;
};
t.$oj$J7=function($){
var t=this;
if(t=o.$oj_super.prototype.init.call(this)){
t.$oj$npt=$;
t.$oj$tpt=49;
}
return t;
};
t.$oj$cpt=function(){
!this.$oj$Vht&&this.$oj$Jht&&(this.$oj$Vht=this.$oj$Jht());
return this.$oj$Vht;
};
t.$oj$Crt=function(){
!this.$oj$Wht&&this.$oj$Xht&&(this.$oj$Wht=this.$oj$Xht());
return this.$oj$Wht;
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$hpt:1
},null,function(t,o){
function i(){
this.$oj$ppt=this.$oj$dpt=this.$oj$vpt=this.$oj$mpt=this.$oj$gpt=this.$oj$ypt=null;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$bpt=function($){
this.$oj$mpt=$;
};
o.$oj$wpt=function(){
return this.$oj$mpt;
};
o.$oj$aht=function($){
this.$oj$dpt=$;
};
o.$oj$Ept=function(){
return this.$oj$dpt;
};
o.$oj$Spt=function(){
return this.$oj$vpt;
};
o.$oj$Kft=function(){
return this.$oj$ppt;
};
o.$oj$qct=function($){
this.$oj$ppt||(this.$oj$ppt=[]);
this.$oj$ppt.push($);
var t=$&&$.$oj$xn();
this.$oj$ypt||(this.$oj$ypt={});
this.$oj$ypt[t]=$;
this.$oj$gpt=null;
};
o.$oj$xpt=function(){
var t=this;
this.$oj$gpt||(this.$oj$vpt?this.$oj$gpt=$.map(this.$oj$vpt,function(o){
return $.map(o,function($){
return null===$?null:t.$oj$ypt[$];
});
}):t.$oj$gpt=$.map(t.$oj$ppt,function($){
return[$];
}));
return t.$oj$gpt;
};
o.$oj$lht=function($){
if(this.$oj$vpt!=$){
this.$oj$vpt=$;
this.$oj$gpt=null;
}
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Tpt:1
},null,function(t,o){
function i(){
this.$oj$Npt=this.$oj$Cpt=this.$oj$kpt=this.$oj$Lpt=this.$oj$Apt=this.$oj$Opt=null;
this.$oj$Mpt=0;
this.$oj$Dpt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$Ppt=function($){
this.$oj$Mpt=$;
};
o.$oj$lct=function(){
return this.$oj$Mpt;
};
o.$oj$Hpt=function($){
this.$oj$Dpt=$;
};
o.$oj$Bpt=function(){
return this.$oj$Dpt;
};
o.$oj$Qit=function($){
this.$oj$Cpt=$;
};
o.$oj$Iit=function(){
return this.$oj$Cpt;
};
o.$oj$jpt=function($){
this.$oj$kpt=$;
};
o.$oj$Fpt=function(){
return this.$oj$kpt;
};
o.$oj$Ipt=function($){
this.$oj$Apt=$;
};
o.$oj$qpt=function(){
return this.$oj$Apt;
};
o.$oj$Rpt=function($){
this.$oj$Lpt=$;
};
o.$oj$Upt=function(){
return this.$oj$Lpt;
};
o.$oj$fct=function(t,o){
var i,n,s=this;
this.$oj$Mpt=0;
var r={},e={};
try{
var c=j._cls.$oj$Wpt.$oj$zpt(o);
this.$oj$kpt&&this.$oj$kpt(t,c);
var u=(i=j._cls.$oj$Htt.$oj$ti())&&i.$oj$Xpt(),h=(n=new j._cls.$oj$Wpt())&&n.$oj$Vpt(c),a=this.$oj$Opt[t];
$.each(a,function($){
if(!u&&$&&$.$oj$Jpt())return;
$&&$.$oj$Kpt(t,r,e,h,s);
});
s.$oj$Lpt&&s.$oj$Lpt(t,r);
h&&h.$oj$Qpt()||(s.$oj$Mpt=1);
}catch(l){
s.$oj$Mpt=2;
}
return r;
};
o.$oj$cct=function(t,o){
var i,n,s=this,r=this.$oj$Opt[t],e=(i=new j._cls.$oj$Gpt())&&i.init(),c=o&&o.$oj$cot();
this.$oj$Qit(o&&o.$oj$Iit());
this.$oj$Apt&&this.$oj$Apt(t,o,c,e);
var u=(n=j._cls.$oj$Htt.$oj$ti())&&n.$oj$Xpt();
$.each(r,function($){
if(!u&&$&&$.$oj$Jpt())return;
$&&$.$oj$Ypt(t,c,e,s);
});
return e&&e.$oj$Zpt();
};
o.$oj$edt=function($){
this.$oj$Opt||(this.$oj$Opt={});
this.$oj$Npt=[];
this.$oj$Opt[$]=this.$oj$Npt;
};
o.$oj$tdt=function(){
var $=j._cls.$oj$rdt.$oj$ndt("Clef",0,null);
this.$oj$Npt.push($);
};
o.$oj$idt=function(){
var $=j._cls.$oj$rdt.$oj$ndt("Range",1,null);
this.$oj$Npt.push($);
};
o.$oj$sdt=function(){
var $=j._cls.$oj$rdt.$oj$ndt(null,2,null);
this.$oj$Npt.push($);
};
o.$oj$odt=function(){
var $=j._cls.$oj$rdt.$oj$ndt("FretboardInstrument",6,null);
this.$oj$Npt.push($);
};
o.$oj$udt=function(){
var $=j._cls.$oj$rdt.$oj$ndt(null,7,null);
this.$oj$Npt.push($);
};
o.$oj$adt=function(){
var $=j._cls.$oj$rdt.$oj$ndt(null,8,null);
this.$oj$Npt.push($);
};
o.$oj$fdt=function($){
var t=j._cls.$oj$rdt.$oj$ndt($,3,[0,1]);
this.$oj$Npt.push(t);
};
o.$oj$ldt=function($){
var t,o=(t=j._cls.$oj$Cn.$oj$jn(0,31))&&t.$oj$Rn(),i=j._cls.$oj$rdt.$oj$ndt($,3,o);
this.$oj$Npt.push(i);
};
o.$oj$cdt=function(){
this.$oj$ldt("Instrument");
};
o.$oj$hdt=function(){
var $=j._cls.$oj$rdt.$oj$ndt(null,5,null);
this.$oj$Npt.push($);
};
o.$oj$pdt=function($,t){
var o=j._cls.$oj$rdt.$oj$ndt($,9,null);
o&&o.$oj$ddt(t);
this.$oj$Npt.push(o);
};
o.$oj$vdt=function($,t){
var o=j._cls.$oj$rdt.$oj$ndt(t,4,$);
this.$oj$Npt.push(o);
};
o.$oj$mdt=function($,t){
var o=j._cls.$oj$rdt.$oj$ndt(t,3,$);
this.$oj$Npt.push(o);
};
o.$oj$gdt=function(){
var $=j._cls.$oj$rdt.$oj$ndt("ChallengeTimeLimit",10,null);
this.$oj$Npt.push($);
};
o.$oj$ydt=function(){
var $=j._cls.$oj$rdt.$oj$ndt("ChallengeQuestionLimit",11,null);
this.$oj$Npt.push($);
};
o.$oj$bdt=function(){
this.$oj$fdt("ChallengeMultipleAttempts");
};
o.$oj$wdt=function($,t){
var o=j._cls.$oj$rdt.$oj$ndt(null,100,null);
o&&o.$oj$Edt($);
o&&o.$oj$Sdt(t);
this.$oj$Npt.push(o);
};
o.$oj$xdt=function(){
var t;
(t=$.last(this.$oj$Npt))&&t.$oj$Tdt(!0);
};
return i;
});
j._registerClass({
$oj$rdt:1
},null,function(t,o){
function i(){
this.$oj$Ndt=this.$oj$Cdt=this.$oj$kdt=this.$oj$Ldt=this.$oj$Adt=null;
this.$oj$Odt=0;
this.$oj$Mdt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$Ddt=function($){
this.$oj$Adt=$;
};
o.$oj$gct=function(){
return this.$oj$Adt;
};
o.$oj$Hct=function($){
this.$oj$Odt=$;
};
o.$oj$Jr=function(){
return this.$oj$Odt;
};
o.$oj$Pdt=function($){
this.$oj$Ndt=$;
};
o.$oj$Kft=function(){
return this.$oj$Ndt;
};
o.$oj$ddt=function($){
this.$oj$kdt=$;
};
o.$oj$Hdt=function(){
return this.$oj$kdt;
};
o.$oj$Edt=function($){
this.$oj$Ldt=$;
};
o.$oj$Bdt=function(){
return this.$oj$Ldt;
};
o.$oj$Sdt=function($){
this.$oj$Cdt=$;
};
o.$oj$jdt=function(){
return this.$oj$Cdt;
};
o.$oj$Tdt=function($){
this.$oj$Mdt=$;
};
o.$oj$Jpt=function(){
return this.$oj$Mdt;
};
t.$oj$ndt=function($,t,o){
var j;
return(j=this.alloc())&&j.$oj$Fdt($,t,o);
};
o.$oj$Fdt=function($,t,o){
var j=this;
if(j=i.$oj_super.prototype.init.call(this)){
j.$oj$Adt=$;
j.$oj$Odt=t;
j.$oj$Ndt=o;
}
return j;
};
function n($){
return"AudioRange-"+$;
}
function s(t,o){
$.includes(t,34)&&o("TrebleRange");
$.includes(t,22)&&o("BassRange");
$.includes(t,28)&&o("AltoRange");
$.includes(t,26)&&o("TenorRange");
$.includes(t,32)&&o("SopranoRange");
$.includes(t,30)&&o("MezzoSopranoRange");
$.includes(t,24)&&o("BaritoneRange");
$.includes(t,-2)&&o("GrandRange");
}
o.$oj$Kpt=function(t,o,i,r,e){
var c=this;
function u($,t){
o[t+"Left"]=$&&$.$oj$On();
o[t+"Right"]=$&&$.$oj$Dn();
}
if(0==c.$oj$Odt){
var h=r&&r.$oj$Idt();
h&&(o[c.$oj$Adt]=h);
}else if(1==c.$oj$Odt){
var a=r&&r.$oj$qdt();
a&&u(a,c.$oj$Adt);
}else if(5==c.$oj$Odt){
var l=o["Instrument"],f=r&&r.$oj$Rdt();
f&&u(f,n(l));
}else if(2==c.$oj$Odt)if(e&&e.$oj$Bpt()){
var v=r&&r.$oj$qdt();
s(o["Clef"],function($){
v&&u(v,$);
});
}else s(o["Clef"],function($){
var t=r&&r.$oj$qdt();
t&&u(t,$);
});else if(3==c.$oj$Odt){
var d=r&&r.$oj$Udt(c.$oj$Ndt);
$.isNumber(d)&&(o[c.$oj$Adt]=d);
}else if(4==c.$oj$Odt){
var _=r&&r.$oj$zdt(c.$oj$Ndt),g=o[c.$oj$Adt];
g&&(_=$.uniq(g.concat(_)));
o[c.$oj$Adt]=_;
}else if(6==c.$oj$Odt){
var p=r&&r.$oj$Wdt();
$.isNumber(p)&&(o[c.$oj$Adt]=p);
var y=j._cls.$oj$u2.$oj$E2(p);
e&&e.$oj$Qit(y);
}else if(7==c.$oj$Odt){
var m=e&&e.$oj$Iit(),w=[];
$.each(m&&m.$oj$v2(),function(){
var $=r&&r.$oj$Wdt();
void 0===$&&($=0);
16&$&&($=-(15&$));
w.push($);
});
o["FretboardTuning-"+(m&&m.$oj$d2())]=w;
}else if(8==c.$oj$Odt){
var b=e&&e.$oj$Iit(),S=r&&r.$oj$Xdt((b&&b.$oj$v2()).length),M=[],F=0;
$.each(b&&b.$oj$v2(),function(){
S&&S[F]===!1||M.push(F);
F++;
});
o["FretboardString-"+(b&&b.$oj$d2())]=M;
}else if(9==c.$oj$Odt){
var E=r&&r.$oj$Vdt();
if($.isNumber(E)){
c.$oj$kdt&&(o[c.$oj$kdt]=E>0);
o[c.$oj$Adt]=E;
}
}else if(10==c.$oj$Odt||11==c.$oj$Odt){
var x=r&&r.$oj$Wdt();
11==c.$oj$Odt&&(x*=5);
o[c.$oj$Adt]=x;
}else 100==c.$oj$Odt&&c.$oj$Cdt&&c.$oj$Cdt(t,o,r,i);
};
o.$oj$Ypt=function($,t,o,i){
var r,e=this;
function c($){
var o=t[$+"Left"],i=t[$+"Right"];
return j._cls.$oj$Cn.$oj$jn(o,i);
}
if(0==e.$oj$Odt)o&&o.$oj$Jdt(t[e.$oj$Adt]);else if(1==e.$oj$Odt)o&&o.$oj$Kdt(c(e.$oj$Adt));else if(5==e.$oj$Odt){
var u=t["Instrument"],h=c(n(u));
o&&o.$oj$Qdt(h);
}else if(2==e.$oj$Odt)s(t["Clef"],function($){
o&&o.$oj$Kdt(c($));
});else if(3==e.$oj$Odt)o&&o.$oj$Gdt(e.$oj$Ndt,t[e.$oj$Adt]);else if(4==e.$oj$Odt)o&&o.$oj$Ydt(e.$oj$Ndt,t[e.$oj$Adt]);else if(6==e.$oj$Odt){
var a=(r=i&&i.$oj$Iit())&&r.$oj$d2();
o&&o.$oj$Zdt(a);
}else if(7==e.$oj$Odt){
var l=i&&i.$oj$Iit(),f=t["FretboardTuning-"+(l&&l.$oj$d2())];
f||(f=[]);
for(var v=0,d=(l&&l.$oj$v2()).length;d>v;v++){
var _=f[v]?f[v]:0;
_=(0>_?16:0)|Math.abs(_);
o&&o.$oj$Zdt(_);
}
}else if(8==e.$oj$Odt){
for(var g=i&&i.$oj$Iit(),p=t["FretboardString-"+(g&&g.$oj$d2())],y=[],m=0,w=(g&&g.$oj$v2()).length;w>m;m++)y[m]=p?!1:!0;
for(var b=0,S=p?p.length:0;S>b;b++)y[p[b]]=!0;
o&&o.$oj$evt(y);
}else if(9==e.$oj$Odt){
var M=t[e.$oj$Adt];
e.$oj$kdt&&!t[e.$oj$kdt]&&(M=0);
o&&o.$oj$tvt(M);
}else if(10==e.$oj$Odt||11==e.$oj$Odt){
var F=t[e.$oj$Adt];
11==e.$oj$Odt&&(F=Math.floor(F/5));
F>30?F=30:0>F&&(F=0);
o&&o.$oj$Zdt(F);
}else 100==e.$oj$Odt&&e.$oj$Ldt&&e.$oj$Ldt($,t,o);
};
return i;
});
}();
!function(){
"use strict";
function t($){
var t=null;
if(1==$||2==$){
var o=null;
2==$&&(o="Try adding more scales, changing the filter, adding more strings, or adding more frets.");
t=["No Questions","This customization generates no valid questions.",o];
}else if(4==$||5==$||6==$||7==$||9==$||8==$||10==$||11==$||12==$){
var j=null;
4==$?j="Try increasing the range, adding more clefs, or adding more key signatures.":5==$?j="Try increasing the range or adding more notes.":6==$?j="Try increasing the range or adding more intervals.":7==$?j="Try increasing the range or adding more chords.":9==$?j="Try increasing the range or adding more scales.":8==$?j="Try adding more key signatures or scales.":10==$?j="Try adding more scales or changing the filter.":11==$?j="Try adding more scales, changing the filter, adding more strings, or adding more frets.":12==$&&(j="Try adding more strings or frets.");
t=["Lone Question","This customization generates only one valid question.",j];
}else 13==$?t=["Range Too Small","The specified range is too small when combined with the other customizations.",null]:14==$?t=["Range Too Small","The specified range is too small when combined with the other customizations. It will be automatically increased.",null]:15==$?t=["Range Too Small","The specified range is too small when combined with the other customizations.","To include all scales, increase the range to one octave or larger."]:16==$?t=["Range Too Small","The specified range is too small when combined with the other customizations.","To include all scales, increase the range to two octaves or larger."]:17==$?t=["Scales and Tonics","When combined, the customized Scales and Tonics result in no valid questions.","Try adding additional scales or tonics."]:18==$&&(t=["Range and Positions","When combined, the customized Range and Positions result in no valid questions.","Try increasing the range or enabling more positions."]);
return t;
}
j._registerClass({
$oj$Sut:1
},null,function(o,i){
function n(){
this.$oj$nvt=this.$oj$rvt=this.$oj$ivt=null;
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$Dct=function($){
this.$oj$ivt=$;
};
i.$oj$zft=function(){
return this.$oj$ivt;
};
i.$oj$svt=function($){
this.$oj$nvt=$;
};
i.$oj$ovt=function(){
return this.$oj$nvt;
};
i.$oj$uvt=function($){
this.$oj$rvt=$;
};
i.$oj$avt=function(){
return this.$oj$rvt;
};
o.$oj$fvt=function(t){
var o=this;
return $.map(t,function($){
return o.$oj$Eut($);
});
};
o.$oj$Eut=function($){
var o,j=t($);
return(o=this.alloc())&&o.$oj$lvt(j[0],j[1],j[2]);
};
i.$oj$lvt=function($,t,o){
var j=this;
if(j=n.$oj_super.prototype.init.call(this)){
j.$oj$ivt=$;
j.$oj$nvt=t;
j.$oj$rvt=o;
}
return j;
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Mct:1
},null,function(t,o){
function i(){
this.$oj$cvt=this.$oj$hvt=this.$oj$pvt=this.$oj$dvt=this.$oj$vvt=this.$oj$mvt=this.$oj$gvt=this.$oj$yvt=this.$oj$bvt=this.$oj$wvt=this.$oj$Evt=this.$oj$Svt=this.$oj$xvt=this.$oj$Tvt=this.$oj$Nvt=null;
this.$oj$Cvt=this.$oj$kvt=this.$oj$Lvt=this.$oj$Avt=this.$oj$Ovt=0;
this.$oj$Mvt=this.$oj$Dvt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$rht=function($){
this.$oj$hvt=$;
};
o.$oj$Pvt=function(){
return this.$oj$hvt;
};
o.$oj$Hct=function($){
this.$oj$Ovt=$;
};
o.$oj$Jr=function(){
return this.$oj$Ovt;
};
o.$oj$Wft=function(){
return this.$oj$Nvt;
};
o.$oj$Bct=function($){
this.$oj$mvt=$;
};
o.$oj$Hvt=function(){
return this.$oj$mvt;
};
o.$oj$gct=function(){
return this.$oj$yvt;
};
o.$oj$Bvt=function(){
return this.$oj$cvt;
};
o.$oj$Gct=function($){
this.$oj$Avt=$;
};
o.$oj$xn=function(){
return this.$oj$Avt;
};
o.$oj$Vct=function($){
this.$oj$kvt=$;
};
o.$oj$jvt=function(){
return this.$oj$kvt;
};
o.$oj$Qft=function(){
return this.$oj$wvt;
};
o.$oj$Kft=function(){
return this.$oj$pvt;
};
o.$oj$Bht=function($){
this.$oj$Svt=$;
};
o.$oj$Pst=function(){
return this.$oj$Svt;
};
o.$oj$Dct=function($){
this.$oj$Tvt=$;
};
o.$oj$zft=function(){
return this.$oj$Tvt;
};
o.$oj$Pct=function($){
this.$oj$Lvt=$;
};
o.$oj$Fvt=function($){
this.$oj$bvt=$;
};
o.$oj$Vft=function(){
return this.$oj$bvt;
};
o.$oj$Eht=function($){
this.$oj$Dvt=$;
};
o.$oj$Yft=function(){
return this.$oj$Dvt;
};
o.$oj$Xct=function($){
this.$oj$Mvt=$;
};
o.$oj$Ivt=function(){
return this.$oj$Mvt;
};
o.$oj$wht=function($){
this.$oj$Cvt=$;
};
o.$oj$xht=function(){
return this.$oj$Cvt;
};
o.$oj$qvt=function($){
this.$oj$gvt=$;
};
o.$oj$Rvt=function(){
return this.$oj$gvt;
};
o.$oj$eht=function($){
this.$oj$Evt=$;
};
o.$oj$Kr=function(){
return this.$oj$Evt;
};
o.$oj$Uvt=function($){
this.$oj$vvt=$;
};
o.$oj$Qr=function(){
return this.$oj$vvt;
};
var n=0;
o.$oj$Oct=function($){
var t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$yvt=$;
t.$oj$cvt=""+n++;
}
return t;
};
o.$oj$aot=function(t){
var o,i=this.$oj$gct();
this.$oj$jht();
if(0==this.$oj$Ovt||4==this.$oj$Ovt||7==this.$oj$Ovt){
var n=t[i];
($.isNumber(n)||$.isBoolean(n))&&this.$oj$Oht(n);
}else if(1==this.$oj$Ovt){
var s=t[i];
$.isArray(s)&&this.$oj$Oht(s);
}else if(2==this.$oj$Ovt||3==this.$oj$Ovt){
var r=t[i+"Left"],e=t[i+"Right"];
$.isString(r)&&(r=parseInt(r,10));
$.isString(e)&&(e=parseInt(e,10));
if($.isNumber(r)&&$.isNumber(e)){
var c=(o=new j._cls.$oj$Cn())&&o.init();
c&&c.$oj$An(r);
c&&c.$oj$Mn(e);
this.$oj$Oht(c);
}
}else if(5==this.$oj$Ovt){
var u=t[i];
if(this.$oj$hvt instanceof j._cls.$oj$u2)for(var h=this.$oj$hvt,a=0,l=(h&&h.$oj$v2()).length;l>a;a++){
var f=(h&&h.$oj$v2())[a];
f&&f.$oj$P2(u?u[a]:0);
}
}
};
o.$oj$ylt=function(t){
var o=this.$oj$gct(),i=this.$oj$Wft();
if(0==this.$oj$Ovt||4==this.$oj$Ovt||7==this.$oj$Ovt)t[o]=i;else if(1==this.$oj$Ovt)t[o]=i;else if(2==this.$oj$Ovt||3==this.$oj$Ovt){
if(i instanceof j._cls.$oj$Cn){
t[o+"Left"]=i&&i.$oj$On();
t[o+"Right"]=i&&i.$oj$Dn();
}
}else if(5==this.$oj$Ovt&&this.$oj$hvt instanceof j._cls.$oj$u2){
var n=this.$oj$hvt,s=[];
$.each(n&&n.$oj$v2(),function($){
s.push($&&$.$oj$H2());
});
t[o]=s;
}
};
o.$oj$jht=function(){
var t=this.$oj$Hvt();
if(0==this.$oj$Ovt||4==this.$oj$Ovt||7==this.$oj$Ovt)($.isNumber(t)||$.isBoolean(t))&&this.$oj$Oht(t);else if(1==this.$oj$Ovt)$.isArray(t)?this.$oj$Oht(t.slice(0)):($.isNumber(t)||$.isBoolean(t))&&this.$oj$Oht([t]);else if(2==this.$oj$Ovt||3==this.$oj$Ovt)t instanceof j._cls.$oj$Cn&&this.$oj$Oht(t&&t.copy());else if(5==this.$oj$Ovt&&this.$oj$hvt instanceof j._cls.$oj$u2){
var o=this.$oj$hvt;
$.each(o&&o.$oj$v2(),function($){
$&&$.$oj$P2(0);
});
}
};
o.$oj$ect=function(){
this.$oj$dvt||this.$oj$ict();
return this.$oj$dvt;
};
o.$oj$qct=function($){
this.$oj$dvt||this.$oj$ict();
this.$oj$pvt||(this.$oj$pvt=[]);
this.$oj$dvt&&this.$oj$dvt.$oj$qct($);
this.$oj$pvt.push($);
$&&$.$oj$rpt(this);
this.$oj$xvt=null;
};
o.$oj$ict=function(){
var $;
this.$oj$wvt||(this.$oj$wvt=[]);
this.$oj$dvt=($=new j._cls.$oj$hpt())&&$.init();
this.$oj$wvt.push(this.$oj$dvt);
};
o.$oj$Uct=function($){
this.$oj$ict();
this.$oj$wvt.splice($,0,this.$oj$wvt.pop());
};
o.$oj$Jft=function(t){
var o=this;
if(!this.$oj$xvt){
var j={};
$.each(this.$oj$pvt,function($){
var t=$&&$.$oj$xn();
j[t]=$;
});
o.$oj$xvt=j;
}
return o.$oj$xvt[t];
};
o.$oj$Aht=function(){
this.$oj$Svt&&this.$oj$Svt.$oj$Lct(this,this.$oj$Nvt,null);
};
o.$oj$Cht=function(t,o){
var j=t&&t.$oj$xn();
if(0==this.$oj$Ovt)this.$oj$Oht(j);else if(7==this.$oj$Ovt){
var i=o?this.$oj$Nvt|j:this.$oj$Nvt&~j;
this.$oj$Oht(i);
}else if(1==this.$oj$Ovt){
var n=void 0;
if(o){
n=this.$oj$Nvt?this.$oj$Nvt.slice(0):[];
n.push(j);
}else n=$.without(this.$oj$Nvt||[],j);
this.$oj$Oht(n);
}
};
o.$oj$kht=function($,t){
var o=this.$oj$Jft($);
o&&this.$oj$Cht(o,t);
};
o.$oj$Lht=function(t){
var o=t&&t.$oj$xn(),j=!1;
j=0==this.$oj$Ovt?this.$oj$Nvt==o:7==this.$oj$Ovt?(this.$oj$Nvt&o)>0:$.includes(this.$oj$Nvt,o);
return j;
};
o.$oj$Xft=function(){
var $=2==this.$oj$Lvt,t=1==this.$oj$Ovt;
if(t&&$&&this.$oj$kvt>0&&this.$oj$Nvt.length>this.$oj$kvt)return 1;
return this.$oj$Lvt;
};
o.$oj$Oht=function(t){
if(this.$oj$Nvt!=t){
var o=this.$oj$Nvt;
t=this.$oj$Svt&&this.$oj$Svt.$oj$kct(this,t,o);
t&&(Array.isArray(t)?t=$.nsort(t.slice(0)):t instanceof j._cls.$oj$Cn&&(t=t&&t.copy()));
this.$oj$Nvt=t;
this.$oj$Svt&&this.$oj$Svt.$oj$Lct(this,this.$oj$Nvt,o);
}
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Hht:1
},null,function($,t){
function o(){
this.$oj$zvt=this.$oj$Wvt=this.$oj$Xvt=null;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$bpt=function($){
this.$oj$Wvt=$;
};
t.$oj$wpt=function(){
return this.$oj$Wvt;
};
t.$oj$aht=function($){
this.$oj$zvt=$;
};
t.$oj$Ept=function(){
return this.$oj$zvt;
};
t.$oj$Gft=function(){
return this.$oj$Xvt;
};
t.$oj$zct=function($){
this.$oj$Xvt||(this.$oj$Xvt=[]);
this.$oj$Xvt.push($);
};
return o;
});
}();
!function(){
"use strict";
var t=45;
j._registerClass({
$oj$Pht:1
},null,function(o,i){
function n(){
this.constructor=n;
this.$oj_id=++j._id;
}
var s=void 0;
o.$oj$ti=function(){
var $;
s||(s=($=this.alloc())&&$.init());
return s;
};
i.$oj$Vvt=function($,t){
var o,i=$&&$.$oj$Jr(),n=" ",s=[];
function r(o,i){
var n,r,e=void 0;
e=t?j._cls.$oj$l8.$oj$O8(o,(n=$&&$.$oj$Pst())&&n.$oj$Att(),1,i):j._cls.$oj$l8.$oj$L8(o,(r=$&&$.$oj$Pst())&&r.$oj$Att(),1,i);
s.push(e);
}
if(3==i){
var e=$&&$.$oj$Wft();
r(e&&e.$oj$On(),!0);
r(e&&e.$oj$Dn(),!0);
n=" - ";
}else if(4==i)r($&&$.$oj$Wft(),!0);else if(5==i)for(var c=(o=$&&$.$oj$Pst())&&o.$oj$Iit(),u=c&&c.$oj$v2(),h=u.length-1;h>=0;h--){
var a=u[h];
r(a&&a.$oj$u9(),!1);
}
return s.join(n);
};
i.$oj$Jvt=function($){
return this.$oj$Vvt($,!0);
};
i.$oj$Kvt=function($){
return this.$oj$Vvt($,!1);
};
i.$oj$Qvt=function(t,o){
var i=this,n="",s=t&&t.$oj$Jr(),r=t&&t.$oj$Wft(),e=t&&t.$oj$Xft();
if(5==e){
var c=t&&t.$oj$Vft();
if(c)return c(o);
}
if(0==s){
var u=t&&t.$oj$Jft(r);
if(o){
n=u&&u.$oj$apt();
n||(n=u&&u.$oj$Crt());
}else{
n=u&&u.$oj$Uft();
n||(n=u&&u.$oj$Qet());
}
}else if(1==s||7==s){
var h=t&&t.$oj$Kft();
if(7==s){
r=[];
$.each(h,function($){
t&&t.$oj$Lht($)&&r.push($&&$.$oj$xn());
});
}
if(r.length==h.length)n="All";else if(1==e)n=""+r.length;else if(r.length>1)n="Multiple";else if(1==r.length){
var a=r[0],l=t&&t.$oj$Jft(a);
if(o){
n=l&&l.$oj$apt();
n||(n=l&&l.$oj$Crt());
}else{
n=l&&l.$oj$Uft();
n||(n=l&&l.$oj$Qet());
}
}else n="";
}else if(o)if(2==s){
var f=t&&t.$oj$xn();
n=j._cls.$oj$l8.$oj$x8(r,f);
}else(3==s||4==s||5==s)&&(n=i.$oj$Jvt(t));
return n?n:"";
};
i.$oj$Gvt=function(t){
var o,j=this,i=t&&t.$oj$Jr(),n=t&&t.$oj$Wft(),s=[];
0==i?s.push((o=t&&t.$oj$Jft(n))&&o.$oj$cpt()):1==i?$.each(t&&t.$oj$Kft(),function($){
t&&t.$oj$Lht($)&&s.push($&&$.$oj$cpt());
}):2==i?s=["range:"+(t&&t.$oj$xn())+","+(n&&n.$oj$On())+","+(n&&n.$oj$Dn())]:(3==i||4==i||5==i)&&(s=["musictype:"+j.$oj$Kvt(t)]);
return s;
};
i.$oj$Yvt=function(t){
var o,i,n,s=t&&t.$oj$Jr(),r=[],e={},c=!0,u=!0;
function h($,t,o){
$=o&&o.$oj$zn($);
t=o&&o.$oj$zn(t);
for(var j=o&&o.$oj$Bn(),i=o&&o.$oj$Hn();i>=j;j++)e[j]=j;
r.push({
value:$,
"default-value":t,
"valid-range":o&&o.$oj$aut()
});
}
if(5==s){
{
var a=(o=t&&t.$oj$Pst())&&o.$oj$Iit();
a&&a.$oj$v2();
}
$.each(a&&a.$oj$v2(),function($){
var t=$&&$.$oj$j2(),o=t+($&&$.$oj$H2()),i=j._cls.$oj$Cn.$oj$jn(t-11,t+11);
h(o,t,i);
});
}else if(3==s){
var l=t&&t.$oj$xn(),f=j._cls.$oj$Mr.$oj$Or(l),v=t&&t.$oj$Wft(),d=t&&t.$oj$Kr();
d||(d=f&&f.$oj$Kr());
var _=t&&t.$oj$Qr();
_||(_=f&&f.$oj$Qr());
h(v&&v.$oj$On(),_&&_.$oj$On(),d);
h(v&&v.$oj$Dn(),_&&_.$oj$Dn(),d);
c=!1;
}else if(4==s){
var g=(i=j._cls.$oj$Mr.$oj$Or(t&&t.$oj$xn()))&&i.$oj$Kr();
h(t&&t.$oj$Wft(),0,g);
c=!1;
u=!1;
}
var p={},y={},m=(n=t&&t.$oj$Pst())&&n.$oj$Att();
$.each($.values(e),function($){
p[$]=j._cls.$oj$l8.$oj$L8($,m,1,!0);
y[$]=j._cls.$oj$l8.$oj$O8($,m,1,!0);
});
return{
"shows-reset-button":u,
"shows-side-labels":c,
"musictype-map":p,
"voiceover-map":y,
"explanatory-text":t&&t.$oj$Rvt(),
rows:r
};
};
i.$oj$Zvt=function($){
for(var t=$&&$.$oj$xn(),o=$&&$.$oj$Wft(),i=-2==t?-18:-12,n=18,s={},r=i;n>=r;r++)s[r]=j._cls.$oj$l8.$oj$S8(r,t);
return{
clef:t,
range:o&&o.$oj$aut(),
"valid-range":[i,n],
"voiceover-map":s
};
};
i.$oj$emt=function(t){
var o=t&&t.$oj$gct(),j=t&&t.$oj$Qft(),i=t&&t.$oj$Jr(),n=t&&t.$oj$Wft(),s=1==i||7==i,r=[],e=0;
$.each(j,function(t){
var j=[],c=!1;
$.each(t&&t.$oj$xpt(),function($){
$.length>2&&(c=!0);
});
$.each(t&&t.$oj$xpt(),function(t){
var r=[];
$.each(t,function(t){
var j=o+"."+e++;
if(t){
var u=t&&t.$oj$xn(),h=void 0;
1==i?h=$.includes(n,u):7==i?h=(n&u)>0:0==i&&(h=n==u);
r.push({
id:j,
type:2,
"ax-label":t&&t.$oj$Crt(),
"minimum-height":t&&t.$oj$fpt(),
"modify-target":o,
"modify-value":u,
title:t&&t.$oj$Qet(),
subtitle:t&&t.$oj$spt(),
"image-identifier":t&&t.$oj$cpt(),
"allows-multiple":s,
checked:h,
smaller:c
});
}else r.push({
id:j,
type:0
});
});
r.length&&j.push(r);
});
j.length&&r.push({
header:t&&t.$oj$wpt(),
footer:t&&t.$oj$Ept(),
rows:j
});
});
return r;
};
i.$oj$tmt=function(o){
var j=this,i=o&&o.$oj$gct(),n=(o&&o.$oj$Jr(),o&&o.$oj$Xft()),s={};
if(3==n||4==n){
var r=!(!o||!o.$oj$Wft());
4==n&&(r=!r);
s["type"]=3;
s["id"]=i;
s["modify-target"]=i;
s["title"]=o&&o.$oj$zft();
s["on"]=r;
s["minimum-height"]=t;
}else if(6==n){
var e=o&&o.$oj$Wft(),c=o&&o.$oj$Jft(e),u=$.map(o&&o.$oj$Kft(),function($){
return $&&$.$oj$xn();
}),h=c&&c.$oj$Crt();
h&&(s["ax-value"]=h);
s["type"]=5;
s["id"]=i;
s["modify-target"]=i;
s["title"]=c&&c.$oj$Qet();
s["current-value"]=e;
s["all-values"]=u;
s["minimum-height"]=64;
}else{
s["type"]=1;
s["id"]=i;
s["target-table-id"]=i;
s["title"]=o&&o.$oj$zft();
s["minimum-height"]=t;
}
if(5==n){
var a=o&&o.$oj$Vft();
if(a){
s["preview-text"]=a(!1);
var l=a(!0);
l&&(s["ax-value"]=l);
}
}else if(0==n||1==n){
s["preview-text"]=j.$oj$Qvt(o,!1);
var f=j.$oj$Qvt(o,!0);
f&&(s["ax-value"]=f);
}else{
s["image-identifiers"]=j.$oj$Gvt(o);
var v=j.$oj$Qvt(o,!0);
v&&(s["ax-value"]=v);
}
return s;
};
i.$oj$nmt=function(o){
var j,i=this,n=[],s=!1,r=o&&o.$oj$but();
if(r&&r.length){
var e=void 0;
e=1==r.length?(j=r[0])&&j.$oj$zft():""+r.length;
s=!0;
n.push({
rows:[[{
id:"Issues",
type:1,
"target-table-id":"Issues",
title:r.length>1?"Issues":"Issue",
"uses-red-color":!0,
"preview-text":e,
"minimum-height":t
}]]
});
}
$.each(o&&o.$oj$Qft(),function(t){
var o=[],j=!0;
$.each(t&&t.$oj$Gft(),function($){
if(!$||!$.$oj$Yft()){
j=!1;
o.push([i.$oj$tmt($)]);
}
});
j||n.push({
header:t&&t.$oj$wpt(),
footer:t&&t.$oj$Ept(),
rows:o
});
});
n.push({
rows:[[{
type:1,
id:"ChallengeMode",
"target-table-id":"ChallengeMode",
title:"Challenge Mode",
"preview-text":o&&o.$oj$Tot()?"On":"Off",
"minimum-height":t
}]]
});
return{
"has-issue":s,
sections:n
};
};
i.$oj$rmt=function(t){
var o=t&&t.$oj$but(),j=0,i=$.map(o,function($){
return{
rows:[[{
id:"issue"+j++,
type:4,
title:$&&$.$oj$zft(),
explanation:$&&$.$oj$ovt(),
remedy:$&&$.$oj$avt()
}]]
};
});
return{
title:o.length>1?"Issues":"Issue",
sections:i
};
};
i.$oj$imt=function($){
var t=$&&$.$oj$Zft("ChallengeTimeLimit"),o=$&&$.$oj$Zft("ChallengeQuestionLimit"),j=$&&$.$oj$Zft("ChallengeMultipleAttempts"),i=this.$oj$tmt(t),n=this.$oj$tmt(o),s=this.$oj$tmt(j);
return{
title:"Challenge Mode",
sections:[{
header:"Time Limit",
rows:[[i]]
},{
header:"Question Limit",
rows:[[n]]
},{
header:"Options",
rows:[[s]],
footer:"Allow multiple attempts to answer a question."
}]
};
};
i.$oj$smt=function($,t){
var o={};
o["title"]=t&&t.$oj$zft();
var j=t&&t.$oj$Jr();
3==j||5==j||4==j?o["pitch-picker"]=this.$oj$Yvt(t):2==j?o["range-picker"]=this.$oj$Zvt(t):o["sections"]=this.$oj$emt(t);
return o;
};
i.$oj$Dht=function($,t){
if(t){
if("Issues"==t)return this.$oj$rmt($);
if("ChallengeMode"==t)return this.$oj$imt($);
var o=$&&$.$oj$Zft(t);
return o?this.$oj$smt($,o):null;
}
return this.$oj$nmt($);
};
return n;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Gst:1
},null,function(t,o){
function i(){
this.$oj$omt=this.$oj$umt=null;
this.$oj$amt=this.$oj$fmt=this.$oj$lmt=0;
this.$oj$cmt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$hmt=function(){
return this.$oj$omt;
};
o.$oj$Qst=function($){
var t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$omt=$;
t.$oj$fmt=0;
t.$oj$lmt=Date.now();
t.$oj$umt={};
}
return t;
};
o.$oj$Zot=function(){
var $=this.$oj$cmt;
this.$oj$pmt();
this.$oj$fmt=0;
$&&this.$oj$sat();
};
o.$oj$dot=function($){
this.$oj$fmt=$;
};
o.$oj$sat=function(){
if(!this.$oj$cmt){
this.$oj$lmt=Date.now();
this.$oj$amt=-1;
this.$oj$cmt=!0;
this.$oj$omt();
}
};
o.$oj$Dut=function(){
if(this.$oj$cmt){
var $=this.$oj$bot();
if($!=this.$oj$amt){
this.$oj$omt&&this.$oj$omt();
this.$oj$amt=$;
}
}
};
o.$oj$pmt=function(){
if(this.$oj$cmt){
this.$oj$fmt=this.$oj$dmt();
this.$oj$cmt=!1;
}
};
o.$oj$bot=function(){
return Math.floor(this.$oj$cmt?(Date.now()-this.$oj$lmt+this.$oj$fmt)/1e3:this.$oj$fmt/1e3);
};
o.$oj$But=function(){
return this.$oj$cmt?1e3*(Math.floor((Date.now()-this.$oj$lmt+this.$oj$fmt)/1e3)+1)-this.$oj$fmt+this.$oj$lmt:Date.now()+1e3;
};
o.$oj$dmt=function(){
return this.$oj$cmt?Date.now()-this.$oj$lmt+this.$oj$fmt:this.$oj$fmt;
};
o.$oj$vmt=function(){
this.$oj$umt={};
this.$oj$cmt||this.$oj$sat();
};
o.$oj$Wut=function($){
var t=this.$oj$umt[$]||0;
this.$oj$umt[$]=t+1;
this.$oj$cmt&&this.$oj$pmt();
};
o.$oj$Xut=function(t){
var o=this.$oj$umt[t]||0;
0>=o-1&&delete this.$oj$umt[t];
0==$.keys(this.$oj$umt).length&&this.$oj$vmt();
};
o.$oj$rat=function(){
return this.$oj$umt?$.keys(this.$oj$umt):[];
};
return i;
});
}();
!function(){
"use strict";
function t(o,j){
var i=o.tag,n=o.attributes;
j.push("<",i,n?" "+n:"",">");
o.innerHTML?j.push(o.innerHTML):o.innerText?j.push(o.innerText.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")):$.each(o.children,function($){
t($,j);
});
j.push("</",i,">");
}
function o(t,o,j){
var i=o?$.without($.map(o,function($,t){
return $?t+'="'+$+'"':null;
}),null):[],n={
tag:t,
children:[],
innerHTML:null,
innerText:null,
attributes:i.join("")
};
$.isArray(j)||(j=[j]);
$.each(j,function($){
if("undefined"==typeof $||null===$)return;
"string"==typeof $?n.innerHTML=$:n.children.push($);
});
return n;
}
j._registerClass({
$oj$slt:1
},null,function($,i){
function n(){
this.$oj$mmt=this.$oj$gmt=this.$oj$ymt=this.$oj$bmt=this.$oj$wmt=this.$oj$Emt=this.$oj$Smt=null;
this.constructor=n;
this.$oj_id=++j._id;
}
i.$oj$xmt=function(){
return this.$oj$mmt;
};
i.init=function(){
var $=this;
($=n.$oj_super.prototype.init.call(this))&&($.$oj$mmt=[]);
return $;
};
i.$oj$clt=function($){
var j=this;
function i(t){
return t?$[t]:null;
}
var n=void 0,s=void 0,r=void 0,e=void 0,c=void 0,u=void 0,h=void 0,a=void 0;
n=o("html",{},s=o("body",{
style:i("body")
},r=o("table",{
style:i("main-table")
},e=o("tbody",{},null))));
for(var l=0,f=0,v=j.$oj$ymt.length;v>f;f++){
for(var d=j.$oj$ymt[f].rows,_=j.$oj$ymt[f].vline,g=0,p=d.length;p>g;g++){
var y=d[g];
y.length>l&&(l=y.length);
}
_&&l++;
}
var m=String(l);
if(j.$oj$bmt){
c=o("tr",{
valign:"top"
},null);
e.children.push(c=o("tr",{
valign:"top"
},u=o("td",{
style:i("title-td"),
colSpan:m
},h=o("span",{
style:i("title-span")
},null))));
h.innerText="Progress Report for "+j.$oj$bmt;
}
if(j.$oj$wmt){
c=o("tr",{
valign:"top"
},null);
e.children.push(c=o("tr",{
valign:"top"
},u=o("td",{
style:i("header-td"),
colSpan:m
},h=o("span",{
style:i("header-span")
},null))));
h.innerHTML="Verification Code";
e.children.push(c=o("tr",{
valign:"top"
},u=o("td",{
style:i("code-td"),
colSpan:m
},h=o("span",{
style:i("code-span")
},null))));
h.innerHTML=j.$oj$wmt;
e.children.push(c=o("tr",{
valign:"top"
},u=o("td",{
style:i("verify-td"),
colSpan:m
},[h=o("span",{
style:i("verify-span")
},null),a=o("a",{
style:i("verify-a"),
href:j.$oj$Emt
},null)])));
h.innerText="Verify online at ";
a.innerText=j.$oj$Smt?j.$oj$Smt:j.$oj$Emt;
}
for(var w=0,b=j.$oj$ymt.length;b>w;w++){
var S=j.$oj$ymt[w].rows,M=j.$oj$ymt[w].vline;
if(j.$oj$ymt[w].name){
e.children.push(c=o("tr",{
valign:"top",
style:i("header-tr")
},u=o("td",{
style:i("header-td"),
colSpan:m
},h=o("span",{
style:i("header-span")
},null))));
h.innerHTML=j.$oj$ymt[w].name;
}
for(var F=0,E=S.length;E>F;F++){
var x=S[F];
c=o("tr",{
valign:"top",
style:i("normal-tr")
},null);
e.children.push(c);
for(var q=0,C=x.length;C>q;q++){
var T=x[q];
c.children.push(u=o("td",{
style:i(T[1])
},T[0]));
if(M){
c.children.push(u=o("td",{
rowSpan:S.length,
style:i("vline-td")
},null));
M=!1;
}
}
}
}
var D=[];
t(n,D);
return D.join("");
};
i.$oj$olt=function($){
this.$oj$bmt=$;
};
i.$oj$ult=function($,t,o){
this.$oj$wmt=$;
this.$oj$Emt=t;
this.$oj$Smt=o;
};
i.$oj$alt=function($){
this.$oj$mmt=[];
this.$oj$gmt={
rows:this.$oj$mmt,
name:$
};
};
i.$oj$flt=function($,t){
this.$oj$Tmt($,t,null,null);
};
i.$oj$Tmt=function($,t,o,j){
(void 0===o||null===o)&&(o="td-left");
(void 0===j||null===j)&&(j="td-right");
this.$oj$mmt.push([[$,o],[t,j]]);
};
i.$oj$Nmt=function(){
this.$oj$gmt.vline=!0;
};
i.$oj$llt=function(){
this.$oj$ymt||(this.$oj$ymt=[]);
this.$oj$ymt.push(this.$oj$gmt);
this.$oj$mmt=null;
this.$oj$gmt=null;
};
return n;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="KeySignature",n="StaffPosition",s="Chord",r="Inversion",e="Accidental",c="Chords",u="Inversions",h="QuestionMode",a="Difficulty",l="Leniency";
j._registerClass({
$oj$Cmt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Chord Construction";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("chord-construction");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
t&&t.$oj$vdt([0,1,3,2,4,5,6,7,8,14,15,16,17,18,19],c);
t&&t.$oj$fdt(u);
t&&t.$oj$mdt([0,1,2],h);
t&&t.$oj$mdt([1,2,3,4],a);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$mdt([0,1,2],l);
return t;
};
t.$oj$Gut=function(){
return"chord-construction";
};
t.$oj$rct=function(){
var $,t,o,i,n,s,r,e,f,v,d=this;
this.$oj$yht(1);
this.$oj$ict();
this.$oj$yht(3);
this.$oj$ict();
this.$oj$yht(14);
var _=($=new j._cls.$oj$Mct())&&$.$oj$Oct(c);
_&&_.$oj$Dct("Chords");
_&&_.$oj$Hct(1);
_&&_.$oj$Pct(1);
var g=function($){
var t=j._cls.$oj$l8.$oj$G8($),o=j._cls.$oj$l8.$oj$Y8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
19==$&&i&&i.$oj$Tct("Dominant 7th (Sus. 4th)");
_&&_.$oj$qct(i);
};
g(0);
g(1);
g(3);
g(2);
_&&_.$oj$ict();
g(4);
g(5);
g(6);
g(14);
g(8);
g(7);
_&&_.$oj$ict();
g(15);
g(16);
_&&_.$oj$ict();
g(17);
g(18);
g(19);
_&&_.$oj$Bct([0,1,3,2,4,5,6,7,8]);
d.$oj$ict();
d.$oj$zct(_);
var p=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(u);
p&&p.$oj$Dct("Inversions");
p&&p.$oj$Pct(3);
p&&p.$oj$Hct(0);
p&&p.$oj$Bct(0);
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
d.$oj$zct(p);
d.$oj$ict();
var y=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(h);
y&&y.$oj$Dct("Question Mode");
y&&y.$oj$Hct(0);
y&&y.$oj$Pct(0);
y&&y.$oj$Bct(0);
y&&y.$oj$ict();
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("Quality Only",0));
(i=y&&y.$oj$ect())&&i.$oj$aht("Select the correct accidentals for the specified quality.  The lowest note may not be modified.");
y&&y.$oj$ict();
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("Root and Quality",1));
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("Root and Symbol",2));
(n=y&&y.$oj$ect())&&n.$oj$aht("Select the correct accidentals for the specified chord.  All notes may be modified.");
d.$oj$zct(y);
var m=(s=new j._cls.$oj$Mct())&&s.$oj$Oct(a);
m&&m.$oj$Dct("Difficulty");
m&&m.$oj$Hct(0);
m&&m.$oj$Pct(0);
m&&m.$oj$Bct(1);
m&&m.$oj$qct(j._cls.$oj$Fct.$oj$jct("Level 1",1));
m&&m.$oj$qct(j._cls.$oj$Fct.$oj$jct("Level 2",2));
m&&m.$oj$qct(j._cls.$oj$Fct.$oj$jct("Level 3",3));
m&&m.$oj$qct(j._cls.$oj$Fct.$oj$jct("Level 4",4));
d.$oj$ict();
d.$oj$zct(m);
var w=(r=new j._cls.$oj$Mct())&&r.$oj$Oct(l);
w&&w.$oj$Dct("Leniency");
w&&w.$oj$Pct(0);
w&&w.$oj$Hct(0);
w&&w.$oj$Bct(0);
w&&w.$oj$ict();
w&&w.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lenient",2));
(e=w&&w.$oj$ect())&&e.$oj$aht("Allow answers with unneeded or duplicated accidentals.");
w&&w.$oj$ict();
w&&w.$oj$qct(j._cls.$oj$Fct.$oj$jct("Naturals Only",1));
(f=w&&w.$oj$ect())&&f.$oj$aht("Only allow unneeded naturals.");
w&&w.$oj$ict();
w&&w.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strict",0));
(v=w&&w.$oj$ect())&&v.$oj$aht("Disallow answers with unneeded or duplicated accidentals.");
d.$oj$zct(w);
d.$oj$ict();
d.$oj$yht(11);
};
return o;
});
function f($,t,o,i){
var n,s,r,e;
return-100==o?(n=(s=j._cls.$oj$Mt)&&s.alloc())&&n.$oj$rn($,i,t):(r=(e=j._cls.$oj$Mt)&&e.alloc())&&r.$oj$tn($,i,o);
}
function v($,t,o,i,n,s){
var r,e,c,u,h=(r=(e=j._cls.$oj$Q7)&&e.alloc())&&r.$oj$J7(n),a=f($,t,o,i);
return(c=a)&&c.$oj$vn((u=h)&&u.$oj$e2(),!0,s);
}
j._registerClass({
$oj$kmt:1
},{
$oj$ast:1
},function(d,_){
function g(){
j._cls.$oj$ast.call(this);
this.$oj$Lmt=this.$oj$Amt=this.$oj$Omt=this.$oj$Mmt=this.$oj$Dmt=null;
this.$oj$Pmt=this.$oj$Hmt=this.$oj$Bmt=this.$oj$jmt=this.$oj$Fmt=this.$oj$Imt=0;
this.$oj$qmt=this.$oj$Rmt=this.$oj$Umt=this.$oj$zmt=!1;
this.constructor=g;
this.$oj_id=++j._id;
}
d.$oj$Wst=function(){
return j._cls.$oj$Cmt;
};
_.$oj$tat=function(){
return 1;
};
_.$oj$nat=function(){
return 3;
};
_.$oj$Rut=function(){
var $,t=j._cls.$oj$e8.$oj$s8(this.$oj$Mmt,this.$oj$Lmt),o=j._cls.$oj$e8.$oj$s8(this.$oj$Mmt,this.$oj$Amt),i=($=this.$oj$Pst())&&$.$oj$uct(l),n=j._cls.$oj$Xat.$oj$cft(o,t,this.$oj$Hmt,this.$oj$jmt,i);
this.$oj$pat(n,this.$oj$Bmt,null);
};
_.$oj$dat=function($){
if(0!=$){
this.$oj$Umt=!0;
this.$oj$Wmt();
}
};
_.$oj$sut=function(){
this.$oj$Amt=this.$oj$Lmt.slice(0);
this.$oj$Wmt();
};
_.$oj$yut=function(){
var l,f=this,v=this.$oj$Pst(),d=v&&v.$oj$uft(),_=v&&v.$oj$Grt(),g=v&&v.$oj$qht(),p=v&&v.$oj$uct(c),y=v&&v.$oj$uct(u),m=v&&v.$oj$uct(a),w=v&&v.$oj$uct(h),b=0,S=void 0,M=void 0,F=[],E=$.some(p,function($){
return 4==j._cls.$oj$Q7.$oj$t2($);
});
S=y&&E?[0,1,2,3]:y?[0,1,2]:[0];
if(1==m){
M=[-100];
b=1;
}else if(2==m){
M=[-1,0,1];
b=1;
}else if(3==m){
M=[-1,0,1];
b=2;
}else if(4==m){
M=[-2,-1,0,1,2];
b=2;
}
var x=E?6:y?5:4;
_&&_.$oj$Wn(x,12)&&F.push(14);
var q=_&&_.$oj$Rn();
f.$oj$uat((l={},i(l,t,d),i(l,n,q),i(l,o,g),i(l,s,p),i(l,r,S),i(l,e,M),l));
f.$oj$Fmt=w;
f.$oj$Pmt=b;
f.$oj$Dmt=_;
f.$oj$zmt=y;
f.$oj$qmt=!1;
v&&v.$oj$gut(j._cls.$oj$Sut.$oj$fvt(F));
};
_.$oj$Tut=function(){
var $=this.$oj$Pst();
this.$oj$Bmt=$&&$.$oj$Iht();
2==this.$oj$Bmt&&this.$oj$gat(2);
};
_.$oj$Nat=function(i,c,u){
var h=i[t],a=i[o],l=i[e],f=i[n],d=i[s],_=i[r],g=c?c[n]:0,p=c?c[s]:0;
if(c&&f==g&&d==p){
if(u>.5){
var y=this.$oj$Pst();
this.$oj$qmt=!0;
0==$.size(y&&y.$oj$but())&&y&&y.$oj$gut([j._cls.$oj$Sut.$oj$Eut(7)]);
}
if(!this.$oj$qmt)return!1;
}
if(!j._cls.$oj$f8.$oj$c4(_,d))return!1;
var m=v(h,a,l,f,d,_),w=!0;
w&&!j._cls.$oj$Xat.$oj$Kat(m,a,this.$oj$Pmt)&&(w=!1);
w&&!j._cls.$oj$Xat.$oj$Qat(m,h,this.$oj$Dmt)&&(w=!1);
return w;
};
_.$oj$Wmt=function(){
var $,t,o=0==this.$oj$qst();
this.$oj$Umt&&(o=!1);
var i=($=new j._cls.$oj$nnt())&&$.init();
i&&i.$oj$vnt(this.$oj$Hmt);
i&&i.$oj$mnt(this.$oj$jmt);
i&&i.$oj$Tnt(this.$oj$Dmt);
i&&i.$oj$Cnt(2);
i&&i.$oj$xnt(16);
o&&i&&i.$oj$Nnt(3);
for(var n=[],s=0;s<this.$oj$Mmt.length;s++){
var r=this.$oj$Mmt[s],e=this.$oj$Amt[s];
n.push((t=new j._cls.$oj$e8())&&t.$oj$u8(r,e));
}
var c=this.$oj$Imt,u=this.$oj$Mmt[this.$oj$Imt],h=this.$oj$Amt[this.$oj$Imt],a=0==this.$oj$Imt&&0==this.$oj$Fmt,l=null;
a&&(l=this.$oj$Rmt?"This note cannot\nbe modified.":"Select a note to modify.");
var f=j._cls.$oj$Ont.$oj$Rnt(n);
f&&f.$oj$jnt(this.$oj$Omt);
f&&f.$oj$Fnt(o?c:-1);
i&&i.$oj$Lnt(f);
var v=j._cls.$oj$l8.$oj$S8(u,this.$oj$Hmt),d=void 0;
d=0==this.$oj$Pmt?0:1==this.$oj$Pmt?1:2;
this.$oj$Lot(2020,{
"accidental-type":h,
"accidental-layout":d,
position:u,
"immutable-label":l,
"ax-label":"Selected Note",
"ax-value":v
});
this.$oj$Sat(i);
};
_.$oj$Qot=function(i){
var c,u=this,h=i[t],a=i[o],l=i[e],d=i[n],_=i[s],g=i[r],p=f(h,a,l,d),y=v(h,a,l,d,_,g),m=[],w=[],b=[];
$.each(y,function($,t){
var o=$&&$.$oj$fn(h),j=$&&$.$oj$ln(a);
m.push(o);
w.push(j);
b.push(0==t?j:-100);
});
var S=null,M=null;
if(2==u.$oj$Fmt){
S=j._cls.$oj$l8.$oj$e4(p&&p.$oj$xn(),_);
M=j._cls.$oj$l8.$oj$v8(p&&p.$oj$xn(),0)+" "+j._cls.$oj$l8.$oj$Y8(_);
}else if(1==u.$oj$Fmt){
S=j._cls.$oj$l8.$oj$d8(p&&p.$oj$xn(),0)+" "+j._cls.$oj$l8.$oj$G8(_);
M=j._cls.$oj$l8.$oj$v8(p&&p.$oj$xn(),0)+" "+j._cls.$oj$l8.$oj$Y8(_);
}else{
S=j._cls.$oj$l8.$oj$G8(_);
M=j._cls.$oj$l8.$oj$Y8(_);
}
var F=(c=new j._cls.$oj$Wnt())&&c.init();
F&&F.$oj$Jnt(S);
F&&F.$oj$Knt(M);
u.$oj$Hmt=h;
u.$oj$jmt=a;
u.$oj$Mmt=m;
u.$oj$Lmt=w;
u.$oj$Amt=b;
u.$oj$Omt=F;
u.$oj$Imt=0;
u.$oj$Rmt=!1;
u.$oj$Umt=!1;
u.$oj$mat();
u.$oj$Wmt();
};
_.$oj$Xmt=function($){
var t=$["accidental-type"],o=$["delta"],j=$["position"];
if(void 0!==t){
var i=0==this.$oj$Imt&&0==this.$oj$Fmt;
if(i)return;
this.$oj$Amt[this.$oj$Imt]=t;
}else if(void 0!==o){
this.$oj$Imt+=o;
this.$oj$Imt<0?this.$oj$Imt=0:this.$oj$Imt>=this.$oj$Mmt.length&&(this.$oj$Imt=this.$oj$Mmt.length-1);
0!=this.$oj$Imt&&(this.$oj$Rmt=!0);
}else if(void 0!==j){
var n=this.$oj$Mmt.indexOf(j);
n>=0&&(this.$oj$Imt=n);
n>0&&(this.$oj$Rmt=!0);
}
this.$oj$Wmt();
};
_.$oj$Vmt=function($){
var t=$["position"];
if(void 0!==t){
for(var o=1/0,j=this.$oj$Imt,i=0,n=this.$oj$Mmt.length;n>i;i++){
var s=Math.abs(this.$oj$Mmt[i]-t);
if(o>s){
o=s;
j=i;
}
}
if(j!=this.$oj$Imt){
this.$oj$Imt=j;
this.$oj$Wmt();
}
}
};
_.$oj$iat=function($,t){
3015==$?this.$oj$Xmt(t):3016==$?this.$oj$Vmt(t):g.$oj_super.prototype.$oj$iat.call(this,$,t);
};
_.$oj$hat=function(i){
var c,u=i[t],h=i[o],a=i[e],l=i[n],f=i[s],d=i[r],_=v(u,h,a,l,f,d),g=(c=new j._cls.$oj$mr())&&c.$oj$Lr(2);
$.each(_,function($){
g&&g.$oj$jr($&&$.$oj$an(),0,1);
});
return g;
};
return g;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Root",o="Chord",n="PlayMode",s="Inversion",r="Chords",e="Inversions",c="PlayMode";
j._registerClass({
$oj$Jmt:1
},{
$oj$Tlt:1
},function(t,o){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Chord Ear Training";
};
t.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("ear-chord");
t&&t.$oj$vdt([0,1,2,3,4,5,6,7,8,14,15,16,17,18,19],r);
t&&t.$oj$fdt(e);
t&&t.$oj$vdt([0,1,2,3,4],c);
t&&t.$oj$mdt([1e3,750,500,333,250,125],"Speed");
t&&t.$oj$fdt("AllowChange");
t&&t.$oj$cdt();
t&&t.$oj$hdt();
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$jpt(function($,t){
t.length<=7&&t.splice(2,0,0);
});
return t;
};
o.$oj$Gut=function(){
return"ear-chord";
};
o.$oj$rct=function(){
var t,o,i,n,s=this,u=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r);
u&&u.$oj$Dct("Chords");
u&&u.$oj$Hct(1);
u&&u.$oj$Pct(1);
var h=[],a=function($,t){
var o=j._cls.$oj$l8.$oj$G8($),i=j._cls.$oj$l8.$oj$Y8($),n=j._cls.$oj$Fct.$oj$jct(o,$);
n&&n.$oj$Eit(i);
19==$&&n&&n.$oj$Tct("Dominant 7th (Sus. 4th)");
t&&h.push($);
u&&u.$oj$qct(n);
};
a(0,!0);
a(1,!0);
a(3,!0);
a(2,!0);
u&&u.$oj$ict();
a(4,!0);
a(5,!0);
a(6,!0);
a(14,!1);
a(8,!0);
a(7,!0);
u&&u.$oj$ict();
a(15,!1);
a(16,!1);
u&&u.$oj$ict();
a(17,!1);
a(18,!1);
a(19,!1);
u&&u.$oj$Bct(h);
s.$oj$zct(u);
var l=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(e);
l&&l.$oj$Dct("Inversions");
l&&l.$oj$Pct(3);
l&&l.$oj$Hct(0);
l&&l.$oj$Bct(0);
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
s.$oj$zct(l);
var f=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(c);
f&&f.$oj$Dct("Play Mode");
f&&f.$oj$Hct(1);
f&&f.$oj$Bct([0]);
var v=function($,t,o){
var i=j._cls.$oj$Fct.$oj$Jct(null,"chord-playmode:"+$,$);
i&&i.$oj$Eit(t);
i&&i.$oj$Ict(o?o:t);
i&&i.$oj$Kct(61);
f&&f.$oj$qct(i);
};
v(0,"Harmonic",null);
v(1,"Ascending",null);
v(2,"Descending",null);
v(3,"Ascending Harmonic","Asc. Harmonic");
v(4,"Descending Harmonic","Desc. Harmonic");
s.$oj$ict();
s.$oj$zct(f);
s.$oj$yht(16);
s.$oj$ict();
s.$oj$yht(6);
s.$oj$yht(7);
s.$oj$ict();
s.$oj$yht(12);
(n=s.$oj$Sht(12))&&n.$oj$Bct(0);
$.each(s.$oj$Tht(7),function($){
$&&$.$oj$qvt("Range determines the available pitches for all notes of the chord.");
});
};
return i;
});
j._registerClass({
$oj$Kmt:1
},{
$oj$ast:1
},function(u,h){
function a(){
j._cls.$oj$ast.call(this);
this.$oj$Qmt=null;
this.$oj$Gmt=this.$oj$Ymt=0;
this.$oj$Zmt=!1;
this.constructor=a;
this.$oj_id=++j._id;
}
u.$oj$Wst=function(){
return j._cls.$oj$Jmt;
};
h.$oj$egt=function($){
if(this.$oj$Zmt){
var t=j._cls.$oj$Q7.$oj$n2(this.$oj$Ymt),o=j._cls.$oj$Q7.$oj$n2($);
if(t&&t.$oj$o2(o))return!0;
}
return $==this.$oj$Ymt;
};
h.$oj$hat=function($){
var i,r=$[t],e=$[o],c=$[s],u=$[n],h=this.$oj$Pst(),a=j._cls.$oj$Xat.$oj$Gat(r,e,c,this.$oj$Qmt),l=(a.length,
0),f=(i=new j._cls.$oj$mr())&&i.$oj$Lr(h&&h.$oj$Ect()),v=h&&h.$oj$Uht();
function d($){
var t=(a.length-1,a.slice(0));
1==$&&t.reverse();
for(var o=0,j=t.length;j>o;o++){
f&&f.$oj$jr(t[o],l,v);
2!=$&&(l+=v);
}
}
if(0===u)d(2);else if(1==u)d(0);else if(2==u)d(1);else if(3==u){
d(0);
d(2);
}else if(4==u){
d(1);
d(2);
}
return f;
};
h.$oj$tat=function(){
return 4;
};
h.$oj$nat=function(){
return 1;
};
h.$oj$Uut=function($){
var t=this.$oj$egt($);
this.$oj$pat(t,this.$oj$Gmt,[$]);
};
h.$oj$sut=function(){
this.$oj$wat([this.$oj$Ymt]);
};
h.$oj$yut=function(){
var $,u=this.$oj$Pst(),h=u&&u.$oj$Ect(),a=u&&u.$oj$uct(c),l=u&&u.$oj$uct(r),f=u&&u.$oj$uct(e),v=f?[0,1,2,3]:[0],d=j._cls.$oj$Xat.$oj$Yat(h,u&&u.$oj$Fht()),_=j._cls.$oj$Cn.$oj$jn(d&&d.$oj$On(),(d&&d.$oj$Dn())-7),g=_&&_.$oj$Rn();
this.$oj$uat(($={},i($,t,g),i($,o,l),i($,n,a),i($,s,v),$));
this.$oj$Qmt=_;
this.$oj$Zmt=f;
};
h.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(r),n=o&&o.$oj$Ect();
this.$oj$Gmt=o&&o.$oj$Iht();
this.$oj$gat(n);
var s=[],e=$.includes(i,17),c=$.includes(i,18),u=$.includes(i,19);
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(t){
var o=j._cls.$oj$l8.$oj$G8(t),n=j._cls.$oj$l8.$oj$Q8(t),r=j._cls.$oj$l8.$oj$Z8(t),c=j._cls.$oj$l8.$oj$Y8(t);
18!=t||e||u||(o=c="Suspended");
s.push({
title:o,
"short":n,
symbol:r,
ax:c,
tag:t,
active:$.includes(i,t)
});
});
var h=[[0,1],[3,2],[4,5],[6,14],[8,7],[15,16]],a=[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]];
if(e||c||u){
var l=[17,18];
u&&l.push(19);
h.push(l);
}
t.$oj$yat(s,0,{
"default":h,
landscape:a
});
};
h.$oj$Nat=function($,i){
var n=$[t],r=$[o],e=$[s];
if(i){
var c=i[t],u=i[o];
if(n==c&&r==u)return!1;
}
if(!j._cls.$oj$f8.$oj$c4(e,r))return!1;
return!0;
};
h.$oj$Qot=function($){
this.$oj$Ymt=$[o];
this.$oj$mat();
this.$oj$vat(this.$oj$cat());
};
return a;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="KeySignature",n="StaffPosition",s="Chord",r="Inversion",e="Accidental",c="Chords",u="Inversions";
j._registerClass({
$oj$tgt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Chord Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("chord");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
t&&t.$oj$vdt([0,1,3,2,4,5,6,7,8,14],c);
t&&t.$oj$fdt(u);
t&&t.$oj$mdt([1,2,3,4,5],"Difficulty");
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$vdt([15,16,17,18,19],c);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
t.$oj$Gut=function(){
return"chord";
};
t.$oj$rct=function(){
var $,t,o=this;
this.$oj$yht(1);
this.$oj$ict();
this.$oj$yht(3);
this.$oj$ict();
this.$oj$yht(14);
var i=($=new j._cls.$oj$Mct())&&$.$oj$Oct(c);
i&&i.$oj$Dct("Chords");
i&&i.$oj$Hct(1);
i&&i.$oj$Pct(1);
var n=function($){
var t=j._cls.$oj$l8.$oj$G8($),o=j._cls.$oj$l8.$oj$Y8($),n=j._cls.$oj$Fct.$oj$jct(t,$);
n&&n.$oj$Eit(o);
19==$&&n&&n.$oj$Tct("Dominant 7th (Sus. 4th)");
i&&i.$oj$qct(n);
};
n(0);
n(1);
n(3);
n(2);
i&&i.$oj$ict();
n(4);
n(5);
n(6);
n(14);
n(8);
n(7);
i&&i.$oj$ict();
n(15);
n(16);
i&&i.$oj$ict();
n(17);
n(18);
n(19);
i&&i.$oj$Bct([0,1,3,2,4,5,6,7,8]);
o.$oj$ict();
o.$oj$zct(i);
var s=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(u);
s&&s.$oj$Dct("Inversions");
s&&s.$oj$Pct(3);
s&&s.$oj$Hct(0);
s&&s.$oj$Bct(0);
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
o.$oj$zct(s);
o.$oj$ict();
o.$oj$yht(15);
o.$oj$ict();
o.$oj$yht(11);
};
return o;
});
function h($,t,o,i,n,s){
var r,e,c,u,h,a,l,f,v=(r=(e=j._cls.$oj$Q7)&&e.alloc())&&r.$oj$J7(n),d=null;
d=-100==o?(c=(u=j._cls.$oj$Mt)&&u.alloc())&&c.$oj$rn($,i,t):(h=(a=j._cls.$oj$Mt)&&a.alloc())&&h.$oj$tn($,i,o);
return(l=d)&&l.$oj$vn((f=v)&&f.$oj$e2(),!0,s);
}
j._registerClass({
$oj$ngt:1
},{
$oj$ast:1
},function(a,l){
function f(){
j._cls.$oj$ast.call(this);
this.$oj$rgt=null;
this.$oj$igt=this.$oj$sgt=this.$oj$ogt=0;
this.$oj$ugt=this.$oj$agt=!1;
this.constructor=f;
this.$oj_id=++j._id;
}
a.$oj$Wst=function(){
return j._cls.$oj$tgt;
};
l.$oj$egt=function($){
if(this.$oj$agt){
var t=j._cls.$oj$Q7.$oj$n2(this.$oj$ogt),o=j._cls.$oj$Q7.$oj$n2($);
if(t&&t.$oj$o2(o))return!0;
}
return $==this.$oj$ogt;
};
l.$oj$tat=function(){
return 1;
};
l.$oj$nat=function(){
return 1;
};
l.$oj$Uut=function($){
var t=this.$oj$egt($);
this.$oj$pat(t,this.$oj$sgt,[$]);
};
l.$oj$sut=function(){
this.$oj$wat([this.$oj$ogt]);
};
l.$oj$yut=function(){
var h,a=this,l=this.$oj$Pst(),f=l&&l.$oj$uft(),v=l&&l.$oj$Grt(),d=l&&l.$oj$qht(),_=l&&l.$oj$uct(c),g=l&&l.$oj$uct(u),p=l&&l.$oj$Rht(),y=0,m=void 0,w=void 0,b=[],S=$.some(_,function($){
return 4==j._cls.$oj$Q7.$oj$t2($);
});
m=g&&S?[0,1,2,3]:g?[0,1,2]:[0];
if(1==p){
w=[-100];
y=0;
}else if(2==p){
w=[-100];
y=1;
}else if(3==p){
w=[-1,0,1];
y=1;
}else if(4==p){
w=[-1,0,1];
y=2;
}else{
w=[-2,-1,0,1,2];
y=2;
}
var M=S?6:g?5:4;
v&&v.$oj$Wn(M,12)&&b.push(14);
var F=v&&v.$oj$Rn();
a.$oj$uat((h={},i(h,t,f),i(h,n,F),i(h,o,d),i(h,s,_),i(h,r,m),i(h,e,w),h));
a.$oj$igt=y;
a.$oj$rgt=v;
a.$oj$agt=g;
a.$oj$ugt=!1;
l&&l.$oj$gut(j._cls.$oj$Sut.$oj$fvt(b));
};
l.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(c);
this.$oj$sgt=o&&o.$oj$Iht();
2==this.$oj$sgt&&this.$oj$gat(2);
var n=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(t){
var o=j._cls.$oj$l8.$oj$G8(t),s=j._cls.$oj$l8.$oj$Q8(t),r=j._cls.$oj$l8.$oj$Y8(t),e=j._cls.$oj$l8.$oj$Z8(t);
n.push({
title:o,
"short":s,
symbol:e,
ax:r,
tag:t,
active:$.includes(i,t)
});
});
var s=$.includes(i,17)||$.includes(i,18)||$.includes(i,19)||$.includes(i,14)||$.includes(i,15)||$.includes(i,16),r=s?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],e=s?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
t.$oj$yat(n,1,{
"default":r,
landscape:e
});
};
l.$oj$Nat=function(i,c,u){
var a=i[t],l=i[o],f=i[e],v=i[n],d=i[s],_=i[r],g=c?c[n]:0,p=c?c[s]:0;
if(c&&v==g&&d==p){
if(u>.5){
var y=this.$oj$Pst();
this.$oj$ugt=!0;
0==$.size(y&&y.$oj$but())&&y&&y.$oj$gut([j._cls.$oj$Sut.$oj$Eut(7)]);
}
if(!this.$oj$ugt)return!1;
}
if(!j._cls.$oj$f8.$oj$c4(_,d))return!1;
var m=h(a,l,f,v,d,_),w=!0;
w&&!j._cls.$oj$Xat.$oj$Kat(m,l,this.$oj$igt)&&(w=!1);
w&&!j._cls.$oj$Xat.$oj$Qat(m,a,this.$oj$rgt)&&(w=!1);
return w;
};
l.$oj$Qot=function($){
var i,c=$[t],u=$[o],a=$[e],l=$[n],f=$[s],v=$[r],d=(i=new j._cls.$oj$nnt())&&i.init();
d&&d.$oj$vnt(c);
d&&d.$oj$mnt(u);
d&&d.$oj$knt(h(c,u,a,l,f,v));
d&&d.$oj$xnt(15.5);
d&&d.$oj$Tnt(this.$oj$rgt);
this.$oj$ogt=f;
this.$oj$mat();
this.$oj$Sat(d);
};
l.$oj$hat=function(i){
var c,u=i[t],a=i[o],l=i[e],f=i[n],v=i[s],d=i[r],_=h(u,a,l,f,v,d),g=(c=new j._cls.$oj$mr())&&c.$oj$Lr(2);
$.each(_,function($){
g&&g.$oj$jr($&&$.$oj$an(),0,1);
});
return g;
};
return f;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Root",o="Chord",n="Positions",s="LeftHand",r="Fret",e="Chords",c="Difficulty",u="Labels";
j._registerClass({
$oj$fgt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Fretboard Chord Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("fretboard-chord");
t&&t.$oj$odt();
t&&t.$oj$udt();
t&&t.$oj$adt();
t&&t.$oj$fdt(s);
t&&t.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11,12],r);
t&&t.$oj$vdt([0,1,2,3,4,5,6,7,8,14,15,16,17,18,19],e);
t&&t.$oj$mdt([1,2,3],c);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$mdt([0,1,2,3,4,5,6,7],u);
t&&t.$oj$vdt([13,14,15,16,17],r);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
t.$oj$Gut=function(){
return"fretboard-chord";
};
t.$oj$rct=function(){
var $,t,o,i,n,h=this;
this.$oj$yht(8);
this.$oj$yht(9);
var a=($=new j._cls.$oj$Mct())&&$.$oj$Oct(s);
a&&a.$oj$Dct("Left Hand");
a&&a.$oj$Pct(3);
a&&a.$oj$Hct(0);
a&&a.$oj$Bct(0);
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(a);
var l=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r),f=function($,t,o){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Tct(o);
l&&l.$oj$qct(i);
};
l&&l.$oj$Dct("Fret Positions");
l&&l.$oj$Hct(1);
l&&l.$oj$Pct(1);
f(0,"Open","Open");
f(1,"Fret 1","1");
f(2,"Fret 2","2");
f(3,"Fret 3","3");
f(4,"Fret 4","4");
f(5,"Fret 5","5");
f(6,"Fret 6","6");
f(7,"Fret 7","7");
f(8,"Fret 8","8");
f(9,"Fret 9","9");
f(10,"Fret 10","10");
f(11,"Fret 11","11");
f(12,"Fret 12","12");
f(13,"Fret 13","13");
f(14,"Fret 14","14");
f(15,"Fret 15","15");
f(16,"Fret 16","16");
f(17,"Fret 17","17");
l&&l.$oj$Bct([0,1,2,3,4,5]);
h.$oj$ict();
h.$oj$zct(l);
h.$oj$yht(10);
var v=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(u);
v&&v.$oj$Dct("Labels");
v&&v.$oj$Hct(7);
v&&v.$oj$Bct(3);
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("Frets",1));
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strings",2));
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("Markers",4));
v&&v.$oj$Pct(5);
v&&v.$oj$Fvt(function(){
var $=v&&v.$oj$Wft();
return["None","Frets","Strings","Frets & Strings","Markers","Frets & Markers","Strings & Markers","All"][$]||"";
});
h.$oj$zct(v);
var d=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(e);
d&&d.$oj$Dct("Chords");
d&&d.$oj$Hct(1);
d&&d.$oj$Pct(1);
var _=function($){
var t=j._cls.$oj$l8.$oj$G8($),o=j._cls.$oj$l8.$oj$Y8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
19==$&&i&&i.$oj$Tct("Dominant 7th (Sus. 4th)");
d&&d.$oj$qct(i);
};
_(0);
_(1);
_(3);
_(2);
d&&d.$oj$ict();
_(4);
_(5);
_(6);
_(14);
_(8);
_(7);
d&&d.$oj$ict();
_(15);
_(16);
d&&d.$oj$ict();
_(18);
_(19);
d&&d.$oj$Bct([0,1,3,2,4,5,6,7,8]);
h.$oj$ict();
h.$oj$zct(d);
var g=(n=new j._cls.$oj$Mct())&&n.$oj$Oct(c);
g&&g.$oj$Dct("Difficulty");
g&&g.$oj$Hct(0);
g&&g.$oj$Pct(0);
var p=j._cls.$oj$Fct.$oj$jct("Level 1",1),y=j._cls.$oj$Fct.$oj$jct("Level 2",2),m=j._cls.$oj$Fct.$oj$jct("Level 3",3);
p&&p.$oj$hht("All positions");
y&&y.$oj$hht("Nearby positions");
m&&m.$oj$hht("Random");
g&&g.$oj$qct(p);
g&&g.$oj$qct(y);
g&&g.$oj$qct(m);
g&&g.$oj$Bct(2);
h.$oj$ict();
h.$oj$zct(g);
h.$oj$ict();
h.$oj$yht(11);
};
return o;
});
j._registerClass({
$oj$lgt:1
},{
$oj$ast:1
},function(h,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$cgt=null;
this.$oj$hgt=this.$oj$pgt=this.$oj$dgt=0;
this.constructor=l;
this.$oj_id=++j._id;
}
h.$oj$Wst=function(){
return j._cls.$oj$fgt;
};
a.$oj$egt=function($){
var t=j._cls.$oj$Q7.$oj$n2(this.$oj$pgt),o=j._cls.$oj$Q7.$oj$n2($);
return t&&t.$oj$o2(o);
};
a.$oj$vgt=function(t){
var o=void 0,j=$.sample(t);
o=$.sample(j);
t=$.without(t,j);
for(var i=void 0,n=o&&o.$oj$O2(),s=o&&o.$oj$M2(),r=1/0,e=1,c=0,u=t.length;u>c;c++)e*=t[c].length;
for(var h=0;e>h;h++){
var a=[],l=h,f=0,v=[];
v[n]=!0;
for(var d=0,_=t.length;_>d;d++){
var g=t[d],p=g.length,y=l%p,m=g[y],w=m&&m.$oj$O2();
if(v[w]){
f=1/0;
break;
}
v[w]=!0;
var b=n-w,S=s-(m&&m.$oj$M2());
f+=Math.sqrt(b*b+S*S);
a.push(m);
l=(l-y)/p;
}
if(r>f){
r=f;
i=a;
}
}
i&&i.push(o);
return i;
};
a.$oj$mgt=function(t){
return $.map(t,function(t){
return t[$.random(t.length-1)];
});
};
a.$oj$ggt=function(){
var $,t=this.$oj$Pst(),o=t&&t.$oj$uct(r),i=t&&t.$oj$uct(s),n=t&&t.$oj$uct(u),e=($=new j._cls.$oj$Uit())&&$.init();
e&&e.$oj$Qit(t&&t.$oj$Iit());
e&&e.$oj$Git(o);
e&&e.$oj$Yit(i);
e&&e.$oj$Znt(0);
e&&e.$oj$Zit(n);
return e;
};
a.$oj$ygt=function(i,n){
var s,r=i&&i.$oj$Iit(),e=n[t]%12,c=n[o],u=(s=j._cls.$oj$Q7.$oj$n2(c))&&s.$oj$e2(),h={},a={};
h[e]="1";
a[e]="Root";
$.each(u,function($){
var t=($&&$.$oj$yn())+1,o=$&&$.$oj$bn(),i=(e+o)%12;
h[i]=String(t);
a[i]=j._cls.$oj$l8.$oj$W8(t);
});
$.each(i&&i.$oj$Yrt(),function($){
var t=$&&$.$oj$r8(),o=(r&&r.$oj$A2(t))%12;
$&&$.$oj$wit(h[o]);
$&&$.$oj$Eit(a[o]);
});
};
a.$oj$bgt=function(i,s){
for(var r,e,c=this,u=i[t],h=i[o],a=j._cls.$oj$Q7.$oj$n2(h),l=(r=j._cls.$oj$Mt.$oj$Xt(u))&&r.$oj$dn(a&&a.$oj$e2()),f=this.$oj$cgt,v=$.map(l,function($){
return f&&f.$oj$T9($&&$.$oj$an());
}),d=0,_=v?v.length:0;_>d;d++){
e=v[d];
if($.isEmpty(e))return!1;
}
var g=void 0;
g=3==c.$oj$dgt?c.$oj$mgt(v):2==c.$oj$dgt?c.$oj$vgt(v):$.flattenDeep(v);
if(!g)return!1;
g.sort(function($,t){
return $&&$.$oj$m9(t);
});
if(s&&$.isEqual(g,j._cls.$oj$G2.$oj$p9(s[n])))return!1;
i[n]=j._cls.$oj$G2.$oj$d9(g);
return!0;
};
a.$oj$tat=function(){
return 3;
};
a.$oj$nat=function(){
return 1;
};
a.$oj$Uut=function($){
var t=this.$oj$egt($);
this.$oj$pat(t,this.$oj$hgt,[$]);
};
a.$oj$sut=function(){
this.$oj$wat([this.$oj$pgt]);
};
a.$oj$yut=function(){
{
var $,j,n=this.$oj$Pst(),s=n&&n.$oj$uct(e),u=n&&n.$oj$uct(c),h=n&&n.$oj$uct(r);
n&&n.$oj$Iit();
}
this.$oj$cgt=(j=n&&n.$oj$Iit())&&j.$oj$V2(h,!1);
this.$oj$uat(($={},i($,t,12),i($,o,s),$));
this.$oj$dgt=u;
};
a.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(e),n=o&&o.$oj$Iht();
this.$oj$hgt=n;
2==n&&this.$oj$gat(5);
var s=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(t){
var o=j._cls.$oj$l8.$oj$G8(t),n=j._cls.$oj$l8.$oj$Q8(t),r=j._cls.$oj$l8.$oj$Y8(t),e=j._cls.$oj$l8.$oj$Z8(t);
s.push({
title:o,
"short":n,
symbol:e,
ax:r,
tag:t,
active:$.includes(i,t)
});
});
var r=$.includes(i,17)||$.includes(i,18)||$.includes(i,19)||$.includes(i,14)||$.includes(i,15)||$.includes(i,16),c=r?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],u=r?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
t.$oj$yat(s,1,{
"default":c,
landscape:u
});
};
a.$oj$Nat=function($,j){
var i=$[t],n=$[o];
if(j){
var s=j[t],r=j[o];
if(i==s&&n==r)return!1;
}
return this.$oj$bgt($,j);
};
a.$oj$Qot=function(t){
var i=this,s=t[n],r=j._cls.$oj$G2.$oj$p9(s);
this.$oj$pgt=t[o];
var e=this.$oj$ggt();
$.each(r,function($){
e&&e.$oj$tst($);
});
4&(e&&e.$oj$qit())&&i.$oj$ygt(e,t);
i.$oj$mat();
i.$oj$Tat(e);
};
a.$oj$Xot=function(){
return 512;
};
a.$oj$hat=function(t){
var o,i,s=(o=this.$oj$Pst())&&o.$oj$Iit(),r=j._cls.$oj$G2.$oj$p9(t[n]),e=(i=new j._cls.$oj$mr())&&i.$oj$Lr(5),c=[];
$.each(r,function(t){
var o=s&&s.$oj$A2(t);
if(!$.includes(c,o)){
e&&e.$oj$jr(o,0,1);
c.push(o);
}
});
return e;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="LeftHand",o="Fret",n="Intervals",s="Placement",r="DistanceLimit",e="Labels",c="ButtonLayout",u="QuestionIndex";
j._registerClass({
$oj$wgt:1
},{
$oj$Tlt:1
},function(i,u){
function h(){
j._cls.$oj$Tlt.call(this);
this.constructor=h;
this.$oj_id=++j._id;
}
i.$oj$Kut=function(){
return"Fretboard Interval Identification";
};
i.$oj$oct=function(){
var i,u=(i=new j._cls.$oj$Tpt())&&i.init();
u&&u.$oj$edt("fretboard-interval");
u&&u.$oj$odt();
u&&u.$oj$udt();
u&&u.$oj$adt();
u&&u.$oj$fdt(t);
u&&u.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11,12],o);
u&&u.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11,12],n);
u&&u.$oj$wdt(function(t,o,j){
var i=0;
$.each(o[s],function($){
0==$?i|=4:1==$?i|=8:2==$&&(i|=16);
});
4==i?i=0:8==i?i=1:28==i&&(i=2);
j&&j.$oj$Zdt(i);
},function($,t,o){
var j=o&&o.$oj$Wdt(),i=[];
(4&j||0==j||2==j)&&i.push(0);
(8&j||1==j||2==j)&&i.push(1);
(16&j||2==j)&&i.push(2);
t[s]=i;
});
u&&u.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
u&&u.$oj$mdt([0,1,2,3],e);
u&&u.$oj$vdt([13,14,15,16,17],o);
u&&u.$oj$gdt();
u&&u.$oj$ydt();
u&&u.$oj$bdt();
u&&u.$oj$fdt(c);
u&&u.$oj$ldt(r);
return u;
};
u.$oj$Gut=function(){
return"fretboard-interval";
};
u.$oj$rct=function(){
var $,i,u,h,a,l,f,v,d,_,g=this;
this.$oj$yht(8);
this.$oj$yht(9);
var p=($=new j._cls.$oj$Mct())&&$.$oj$Oct(t);
p&&p.$oj$Dct("Left Hand");
p&&p.$oj$Pct(3);
p&&p.$oj$Hct(0);
p&&p.$oj$Bct(0);
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(p);
var y=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(o),m=function($,t,o){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Tct(o);
y&&y.$oj$qct(i);
};
y&&y.$oj$Dct("Fret Positions");
y&&y.$oj$Hct(1);
y&&y.$oj$Pct(1);
m(0,"Open","Open");
m(1,"Fret 1","1");
m(2,"Fret 2","2");
m(3,"Fret 3","3");
m(4,"Fret 4","4");
m(5,"Fret 5","5");
m(6,"Fret 6","6");
m(7,"Fret 7","7");
m(8,"Fret 8","8");
m(9,"Fret 9","9");
m(10,"Fret 10","10");
m(11,"Fret 11","11");
m(12,"Fret 12","12");
m(13,"Fret 13","13");
m(14,"Fret 14","14");
m(15,"Fret 15","15");
m(16,"Fret 16","16");
m(17,"Fret 17","17");
y&&y.$oj$Bct([0,1,2,3,4,5]);
g.$oj$ict();
g.$oj$zct(y);
g.$oj$yht(10);
var w=(u=new j._cls.$oj$Mct())&&u.$oj$Oct(e);
w&&w.$oj$Dct("Labels");
w&&w.$oj$Hct(7);
w&&w.$oj$Bct(3);
w&&w.$oj$qct(j._cls.$oj$Fct.$oj$jct("Frets",1));
w&&w.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strings",2));
w&&w.$oj$Pct(5);
w&&w.$oj$Fvt(function(){
var $=w&&w.$oj$Wft();
return["None","Frets","Strings","Frets & Strings"][$]||"";
});
g.$oj$zct(w);
var b=(h=new j._cls.$oj$Mct())&&h.$oj$Oct(n),S=[],M=function($){
var t=j._cls.$oj$l8.$oj$J8($),o=j._cls.$oj$l8.$oj$K8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
b&&b.$oj$qct(i);
S.push($);
};
b&&b.$oj$Dct("Intervals");
b&&b.$oj$Hct(1);
b&&b.$oj$Pct(1);
M(0);
M(1);
M(2);
M(3);
M(4);
M(5);
M(6);
M(7);
M(8);
M(9);
M(10);
M(11);
M(12);
b&&b.$oj$Bct(S);
g.$oj$ict();
g.$oj$zct(b);
var F=(a=new j._cls.$oj$Mct())&&a.$oj$Oct(c);
F&&F.$oj$Dct("Button Layout");
F&&F.$oj$Hct(0);
F&&F.$oj$Bct(0);
F&&F.$oj$Pct(0);
F&&F.$oj$ict();
F&&F.$oj$qct(j._cls.$oj$Fct.$oj$jct("Default",0));
(l=F&&F.$oj$ect())&&l.$oj$aht("Use more rows with wider buttons.");
F&&F.$oj$ict();
F&&F.$oj$qct(j._cls.$oj$Fct.$oj$jct("Alternate",1));
(f=F&&F.$oj$ect())&&f.$oj$aht("Use fewer rows grouped by interval quality.");
g.$oj$zct(F);
g.$oj$ict();
var E=(v=new j._cls.$oj$Mct())&&v.$oj$Oct(s);
E&&E.$oj$Dct("Placement");
E&&E.$oj$Hct(1);
E&&E.$oj$Pct(0);
E&&E.$oj$Bct([2]);
var x=j._cls.$oj$Fct.$oj$jct("Same String",0),q=j._cls.$oj$Fct.$oj$jct("Neighboring Strings",1),C=j._cls.$oj$Fct.$oj$jct("Distant Strings",2);
E&&E.$oj$ict();
E&&E.$oj$qct(x);
E&&E.$oj$qct(q);
E&&E.$oj$qct(C);
(d=E&&E.$oj$ect())&&d.$oj$aht("Allow intervals to be placed on the same string, neighboring strings, or distant (nonadjacent) strings.");
g.$oj$zct(E);
var T=(_=new j._cls.$oj$Mct())&&_.$oj$Oct(r);
T&&T.$oj$Dct("Distance Limit");
T&&T.$oj$Hct(0);
T&&T.$oj$Pct(0);
T&&T.$oj$Bct(3);
T&&T.$oj$ict();
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("Same Fret",0));
T&&T.$oj$ict();
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("1 Fret",1));
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("2 Frets",2));
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("3 Frets",3));
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("4 Frets",4));
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("5 Frets",5));
T&&T.$oj$ict();
T&&T.$oj$qct(j._cls.$oj$Fct.$oj$jct("Off",31));
g.$oj$zct(T);
g.$oj$ict();
g.$oj$yht(11);
};
return h;
});
j._registerClass({
$oj$Egt:1
},{
$oj$ast:1
},function(h,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$Sgt=this.$oj$xgt=null;
this.$oj$Tgt=this.$oj$Ngt=0;
this.$oj$Cgt=!1;
this.constructor=l;
this.$oj_id=++j._id;
}
h.$oj$Wst=function(){
return j._cls.$oj$wgt;
};
a.$oj$kgt=function($){
var t=(this.$oj$xgt,4*$[u]),o=this.$oj$xgt[t+0],i=this.$oj$xgt[t+1],n=this.$oj$xgt[t+2],s=this.$oj$xgt[t+3];
return[j._cls.$oj$G2.$oj$Q2(o,i),j._cls.$oj$G2.$oj$Q2(n,s)];
};
a.$oj$ggt=function(){
var $,i=this.$oj$Pst(),n=i&&i.$oj$uct(o),s=i&&i.$oj$uct(t),r=i&&i.$oj$uct(e),c=($=new j._cls.$oj$Uit())&&$.init();
c&&c.$oj$Qit(this.$oj$Sgt);
c&&c.$oj$Git(n);
c&&c.$oj$Yit(s);
c&&c.$oj$Znt(0);
c&&c.$oj$Zit(r);
return c;
};
a.$oj$tat=function(){
return 3;
};
a.$oj$nat=function(){
return 1;
};
a.$oj$Uut=function($){
this.$oj$pat($==this.$oj$Ngt,this.$oj$Tgt,[$]);
};
a.$oj$sut=function(){
this.$oj$wat([this.$oj$Ngt]);
};
a.$oj$yut=function(){
for(var t=this,j=this.$oj$Pst(),e=j&&j.$oj$uct(s),c=j&&j.$oj$uct(r),h=j&&j.$oj$uct(n),a=$.includes(e,0),l=$.includes(e,1),f=$.includes(e,2),v=j&&j.$oj$Iit(),d=v&&v.$oj$R2(),_=v&&v.$oj$v2(),g=j&&j.$oj$uct(o),p=d.length,y=g.length,m=[],w=p*y,b=w*(w+1)/2-w,S=new Uint8Array(4*b),M=0,F=[],E=function(t){
var o=d[t],j=_[o];
F[t]=$.map(g,function($){
return v&&v.$oj$z2(o,$)?j&&j.$oj$L2($):255;
});
},x=0;p>x;x++)E(x);
for(var x=0;p>x;x++)for(var q=d[x],C=F[x],T=x;p>T;T++){
var D=d[T],O=F[T],P=D-q;
if(!(0==P&&a||1==P&&l||P>=2&&f))continue;
for(var A=0;y>A;A++)for(var N=g[A],I=0==P?A+1:0;y>I;I++){
if(x==T&&A==I)continue;
var L=g[I],B=L-N;
if(B>c)continue;
var H=C[A],K=O[I],z=Math.abs(H-K);
if($.includes(h,z)){
S[M++]=q;
S[M++]=N;
S[M++]=D;
S[M++]=L;
}
}
}
var J=Math.floor(M/4),Z=1==J;
J?Z&&m.push(12):m.push(1);
t.$oj$uat(i({},u,J));
t.$oj$xgt=S;
t.$oj$Sgt=v;
t.$oj$Cgt=Z;
};
a.$oj$Tut=function(){
var t=this.$oj$Pst(),o=t&&t.$oj$uct(n),i=(t&&t.$oj$uct(c))>0,s=t&&t.$oj$Iht();
this.$oj$Tgt=s;
2==s&&this.$oj$gat(5);
for(var r=[],e=0;13>=e;e++){
var u=j._cls.$oj$l8.$oj$X8(e),h=j._cls.$oj$l8.$oj$V8(e),a=j._cls.$oj$l8.$oj$K8(e),l=j._cls.$oj$Xat.$oj$nft(e);
i||(0===e||6==e||12==e)&&(h=j._cls.$oj$l8.$oj$J8(e));
r.push({
title:h,
ax:a,
symbol:u,
tag:e,
active:$.includes(o,e),
shortcut:l
});
}
var f=void 0,v=void 0,d=$.includes(o,0),_=$.includes(o,12);
if(i){
var g=[2,4,5,7,9,11],p=[1,3,null,6,8,10];
if(d){
g.unshift(0);
p.unshift(null);
}
if(_){
g.push(12);
p.push(null);
}
f=v=[g,p];
}else{
f=[[1,2,3,4],[5,6,7],[8,9,10,11]];
(_||d)&&f.push([0,12]);
v=[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13]];
}
this.$oj$yat(r,1,{
"default":f,
landscape:v
});
};
a.$oj$Nat=function($,t){
var o=this.$oj$kgt($),j=o[0],i=o[1];
if(j&&j.isEqual_(i))return!1;
if(!this.$oj$Sgt||!this.$oj$Sgt.$oj$X2(j))return!1;
if(!this.$oj$Sgt||!this.$oj$Sgt.$oj$X2(i))return!1;
if(t){
var n=this.$oj$kgt(t),s=n[0],r=n[1];
if(j&&j.isEqual_(s)&&i&&i.isEqual_(r)||j&&j.isEqual_(r)&&i&&i.isEqual_(s))return!1;
}
return!0;
};
a.$oj$Qot=function($){
var t=this.$oj$kgt($),o=t[0],j=t[1],i=this.$oj$Sgt&&this.$oj$Sgt.$oj$A2(o),n=this.$oj$Sgt&&this.$oj$Sgt.$oj$A2(j);
this.$oj$Ngt=Math.abs(i-n);
this.$oj$mat();
var s=this.$oj$ggt();
s&&s.$oj$tst(o);
s&&s.$oj$tst(j);
this.$oj$Tat(s);
};
a.$oj$hat=function($){
var t,o=this.$oj$kgt($),i=this.$oj$Sgt&&this.$oj$Sgt.$oj$A2(o[0]),n=this.$oj$Sgt&&this.$oj$Sgt.$oj$A2(o[1]),s=(t=new j._cls.$oj$mr())&&t.$oj$Lr(5);
s&&s.$oj$jr(i,0,1);
s&&s.$oj$jr(n,0,1);
return s;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="LeftHand",o="Labels",n="Fret",s="UsesNoteFilter",r="QuestionIndex";
j._registerClass({
$oj$Lgt:1
},{
$oj$Tlt:1
},function(i,r){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
i.$oj$Kut=function(){
return"Fretboard Note Identification";
};
i.$oj$oct=function(){
var i,r=(i=new j._cls.$oj$Tpt())&&i.init(),e=$.without(j._cls.$oj$Xat.$oj$Vat(),66);
r&&r.$oj$edt("fretboard");
r&&r.$oj$odt();
r&&r.$oj$udt();
r&&r.$oj$adt();
r&&r.$oj$fdt(t);
r&&r.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11,12],n);
r&&r.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
r&&r.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
r&&r.$oj$mdt([0,1,2,3],o);
r&&r.$oj$vdt([13,14,15,16,17],n);
r&&r.$oj$gdt();
r&&r.$oj$ydt();
r&&r.$oj$bdt();
r&&r.$oj$wdt(function(t,o,j){
var i=o[s],n=o["Note"],r=i&&$.includes(n,66);
j&&j.$oj$Zdt((i?16:0)|(r?8:0));
i&&j&&j.$oj$Ydt(e,n);
},function($,t,o){
var j=o&&o.$oj$Wdt(),i=(16&j)>0,n=(8&j)>0,r=[];
if(i){
r=o&&o.$oj$zdt(e);
n&&r.push(66);
}
t[s]=i?1:0;
t["Note"]=r;
});
r&&r.$oj$jpt(function($,t){
if(t.length<=6){
var o=t[0];
3==o?t.splice(1,0,0,0,0,0,0,0,0,31,3):0===o||7==o?t.splice(1,0,0,0,0,0,0,0,31,1):6==o?t.splice(0,1,0,0,0,0,0,0,18,31,1):4==o||9==o?t.splice(1,0,0,0,0,0,0,31):(1==o||2==o||5==o||8==o)&&t.splice(1,0,0,0,0,0,15);
}
});
return r;
};
r.$oj$Gut=function(){
return"fretboard";
};
r.$oj$rct=function(){
var $,i,r,e,c,u=this;
this.$oj$yht(8);
this.$oj$yht(9);
var h=($=new j._cls.$oj$Mct())&&$.$oj$Oct(t);
h&&h.$oj$Dct("Left Hand");
h&&h.$oj$Pct(3);
h&&h.$oj$Hct(0);
h&&h.$oj$Bct(0);
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(h);
var a=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(n),l=function($,t,o){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Tct(o);
a&&a.$oj$qct(i);
};
a&&a.$oj$Dct("Fret Positions");
a&&a.$oj$Hct(1);
a&&a.$oj$Pct(1);
l(0,"Open","Open");
l(1,"Fret 1","1");
l(2,"Fret 2","2");
l(3,"Fret 3","3");
l(4,"Fret 4","4");
l(5,"Fret 5","5");
l(6,"Fret 6","6");
l(7,"Fret 7","7");
l(8,"Fret 8","8");
l(9,"Fret 9","9");
l(10,"Fret 10","10");
l(11,"Fret 11","11");
l(12,"Fret 12","12");
l(13,"Fret 13","13");
l(14,"Fret 14","14");
l(15,"Fret 15","15");
l(16,"Fret 16","16");
l(17,"Fret 17","17");
a&&a.$oj$Bct([0,1,2,3,4,5]);
u.$oj$ict();
u.$oj$zct(a);
u.$oj$yht(10);
var f=(r=new j._cls.$oj$Mct())&&r.$oj$Oct(o);
f&&f.$oj$Dct("Labels");
f&&f.$oj$Hct(7);
f&&f.$oj$Bct(3);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Frets",1));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strings",2));
f&&f.$oj$Pct(5);
f&&f.$oj$Fvt(function(){
var $=f&&f.$oj$Wft();
return["None","Frets","Strings","Frets & Strings"][$]||"";
});
u.$oj$zct(f);
u.$oj$ict();
u.$oj$yht(5);
var v=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(s);
v&&v.$oj$Dct("Note Filter");
v&&v.$oj$Pct(3);
v&&v.$oj$Hct(0);
v&&v.$oj$Bct(0);
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
u.$oj$ict();
u.$oj$zct(v);
u.$oj$yht(17);
(c=u.$oj$Sht(17))&&c.$oj$Bct(j._cls.$oj$Xat.$oj$Vat());
u.$oj$ict();
u.$oj$yht(11);
};
r.$oj$Agt=function(){
var $=this.$oj$Zft("Note"),t=this.$oj$uct(s);
this.$oj$bct($,!t);
};
r.$oj$vct=function($){
($&&$.$oj$gct())==s&&this.$oj$Agt();
};
return e;
});
j._registerClass({
$oj$Ogt:1
},{
$oj$ast:1
},function(e,c){
function u(){
j._cls.$oj$ast.call(this);
this.$oj$Mgt=this.$oj$Dgt=this.$oj$Pgt=null;
this.$oj$Hgt=this.$oj$Bgt=this.$oj$jgt=0;
this.$oj$Fgt=!1;
this.constructor=u;
this.$oj_id=++j._id;
}
e.$oj$Wst=function(){
return j._cls.$oj$Lgt;
};
c.$oj$ggt=function(){
var $,i=this.$oj$Pst(),s=i&&i.$oj$uct(n),r=i&&i.$oj$uct(t),e=i&&i.$oj$uct(o),c=($=new j._cls.$oj$Uit())&&$.init();
c&&c.$oj$Qit(this.$oj$Dgt);
c&&c.$oj$Git(s);
c&&c.$oj$Yit(r);
c&&c.$oj$Znt(this.$oj$jgt);
c&&c.$oj$Zit(e);
return c;
};
c.$oj$tat=function(){
return 3;
};
c.$oj$nat=function(){
return 1;
};
c.$oj$Uut=function($){
var t,o=(t=new j._cls.$oj$Mt())&&t.$oj$Kt($,4),i=(o&&o.$oj$an())%12==this.$oj$Bgt;
this.$oj$pat(i,this.$oj$Hgt,[$]);
};
c.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Mgt,function($){
var i=j._cls.$oj$Mt.$oj$Jt($,4);
(i&&i.$oj$an())%12==t.$oj$Bgt&&o.push($);
});
t.$oj$wat(o);
};
c.$oj$yut=function(){
for(var t,o=this,e=this.$oj$Pst(),c=e&&e.$oj$Iit(),u=e&&e.$oj$uct(n),h=c&&c.$oj$R2(),a=c&&c.$oj$v2(),l=e&&e.$oj$uct(s)?e&&e.$oj$uct("Note"):$.without(j._cls.$oj$Xat.$oj$Vat(),26,66,4,34),f=$.map(l,function($){
var t;
return((t=j._cls.$oj$Mt.$oj$Jt($,4))&&t.$oj$an())%12;
}),v=[],d=0;12>d;d++)v[d]=$.includes(f,d);
for(var _,g=[],p=new Uint8Array(h.length*u.length*2),y=0,m=0,w=h?h.length:0;w>m;m++){
_=h[m];
for(var b,S=(t=a[_])&&t.$oj$W2(),M=0,F=u?u.length:0;F>M;M++){
b=u[M];
var E=c&&c.$oj$D2(_,b);
if(b>=S&&v[E%12]){
p[y++]=_;
p[y++]=b;
}
}
}
var x=Math.floor(y/2),q=1==x;
x?q&&g.push(12):g.push(1);
o.$oj$uat(i({},r,x));
o.$oj$Pgt=p;
o.$oj$Dgt=c;
o.$oj$Mgt=l;
o.$oj$Fgt=q;
e&&e.$oj$gut(j._cls.$oj$Sut.$oj$fvt(g));
};
c.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$Att(),n=o&&o.$oj$Iht();
this.$oj$Hgt=n;
this.$oj$jgt=i;
2==n&&this.$oj$gat(5);
var s=$.map(j._cls.$oj$Xat.$oj$Vat(),function(o){
return{
title:j._cls.$oj$l8.$oj$d8(o,i),
ax:j._cls.$oj$l8.$oj$v8(o,i),
tag:o,
active:$.includes(t.$oj$Mgt,o),
shortcut:j._cls.$oj$Xat.$oj$eft(o)
};
}),r=j._cls.$oj$Xat.$oj$Jat(i,t.$oj$Mgt);
t.$oj$yat(s,0,{
"default":r
});
};
c.$oj$Nat=function($,t){
var o=$[r];
if(t){
var j=t[r];
if(o==j&&!this.$oj$Fgt)return!1;
}
return!0;
};
c.$oj$Qot=function($){
var t=2*$[r],o=this.$oj$Pgt[t+0],i=this.$oj$Pgt[t+1],n=j._cls.$oj$G2.$oj$Q2(o,i),s=this.$oj$Dgt&&this.$oj$Dgt.$oj$D2(o,i);
this.$oj$Bgt=s%12;
this.$oj$mat();
var e=this.$oj$ggt();
e&&e.$oj$tst(n);
this.$oj$Tat(e);
};
c.$oj$hat=function($){
var t,o=2*$[r],i=this.$oj$Pgt[o+0],n=this.$oj$Pgt[o+1],s=this.$oj$Dgt&&this.$oj$Dgt.$oj$D2(i,n),e=(t=new j._cls.$oj$mr())&&t.$oj$Lr(5);
e&&e.$oj$jr(s,0,1);
return e;
};
return u;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="LeftHand",o="Labels",n="Fret",s="Scale",r="Filter",e="PairIndex",c="Positions",u={};
function h($){
var t,o=u[$];
if(!o){
o=(t=j._cls.$oj$j9)&&t.$oj$Q9($,0);
u[$]=o;
}
return o;
}
j._registerClass({
$oj$Igt:1
},{
$oj$Tlt:1
},function($,i){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Fretboard Scale Identification";
};
$.$oj$oct=function(){
var $,i=($=new j._cls.$oj$Tpt())&&$.init(),e=j._cls.$oj$Xat.$oj$Vat(),c=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
i&&i.$oj$edt("fretboard-scale");
i&&i.$oj$odt();
i&&i.$oj$udt();
i&&i.$oj$adt();
i&&i.$oj$fdt(t);
i&&i.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],n);
i&&i.$oj$vdt([0,10,11,12,20,21,22,23,24,25,26],s);
i&&i.$oj$wdt(function($,t,o){
if(1==t[r]){
o&&o.$oj$qgt(!0);
o&&o.$oj$Ydt(e,t["Note"]);
}else{
o&&o.$oj$qgt(!1);
o&&o.$oj$Ydt(c,t["KeySignature"]);
}
},function($,t,o){
if(o&&o.$oj$Rgt()){
t[r]=1;
t["Note"]=o&&o.$oj$zdt(e);
}else{
t[r]=0;
t["KeySignature"]=o&&o.$oj$zdt(c);
}
});
i&&i.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
i&&i.$oj$mdt([0,1,2,3,4,5,6,7],o);
i&&i.$oj$gdt();
i&&i.$oj$ydt();
i&&i.$oj$bdt();
return i;
};
i.$oj$Gut=function(){
return"fretboard-scale";
};
i.$oj$rct=function(){
var $,i,e,c,u,h,a,l=this;
this.$oj$yht(8);
this.$oj$yht(9);
var f=($=new j._cls.$oj$Mct())&&$.$oj$Oct(t);
f&&f.$oj$Dct("Left Hand");
f&&f.$oj$Pct(3);
f&&f.$oj$Hct(0);
f&&f.$oj$Bct(0);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(f);
var v=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(n),d=function($,t,o){
var i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Tct(o);
v&&v.$oj$qct(i);
};
v&&v.$oj$Dct("Fret Positions");
v&&v.$oj$Hct(1);
v&&v.$oj$Pct(1);
d(0,"Open","Open");
d(1,"Fret 1","1");
d(2,"Fret 2","2");
d(3,"Fret 3","3");
d(4,"Fret 4","4");
d(5,"Fret 5","5");
d(6,"Fret 6","6");
d(7,"Fret 7","7");
d(8,"Fret 8","8");
d(9,"Fret 9","9");
d(10,"Fret 10","10");
d(11,"Fret 11","11");
d(12,"Fret 12","12");
d(13,"Fret 13","13");
d(14,"Fret 14","14");
d(15,"Fret 15","15");
d(16,"Fret 16","16");
d(17,"Fret 17","17");
v&&v.$oj$Bct([0,1,2,3,4,5]);
l.$oj$ict();
l.$oj$zct(v);
l.$oj$yht(10);
var _=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(o);
_&&_.$oj$Dct("Labels");
_&&_.$oj$Hct(7);
_&&_.$oj$Bct(3);
_&&_.$oj$qct(j._cls.$oj$Fct.$oj$jct("Frets",1));
_&&_.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strings",2));
_&&_.$oj$qct(j._cls.$oj$Fct.$oj$jct("Markers",4));
_&&_.$oj$Pct(5);
_&&_.$oj$Fvt(function(){
var $=_&&_.$oj$Wft();
return["None","Frets","Strings","Frets & Strings","Markers","Frets & Markers","Strings & Markers","All"][$]||"";
});
l.$oj$zct(_);
function g($){
var t=j._cls.$oj$l8.$oj$N8($);
return j._cls.$oj$Fct.$oj$jct(t,$);
}
var p=(c=new j._cls.$oj$Mct())&&c.$oj$Oct(s);
p&&p.$oj$Dct("Scales");
p&&p.$oj$Hct(1);
p&&p.$oj$Pct(1);
p&&p.$oj$Bct([0,10,11,12]);
p&&p.$oj$qct(g(0));
p&&p.$oj$qct(g(10));
p&&p.$oj$qct(g(11));
p&&p.$oj$qct(g(12));
p&&p.$oj$ict();
p&&p.$oj$qct(g(20));
p&&p.$oj$qct(g(21));
p&&p.$oj$qct(g(22));
p&&p.$oj$qct(g(23));
p&&p.$oj$qct(g(24));
p&&p.$oj$qct(g(25));
p&&p.$oj$qct(g(26));
l.$oj$ict();
l.$oj$zct(p);
var y=(u=new j._cls.$oj$Mct())&&u.$oj$Oct(r);
y&&y.$oj$Dct("Filter");
y&&y.$oj$Hct(0);
y&&y.$oj$Pct(0);
y&&y.$oj$Bct(0);
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Key Signature",0));
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Tonic",1));
l.$oj$ict();
l.$oj$zct(y);
l.$oj$yht(14);
(h=l.$oj$Sht(14))&&h.$oj$Bct([-3,-2,-1,0,1,2,3]);
l.$oj$yht(17);
(a=l.$oj$Sht(17))&&a.$oj$Dct("Tonics");
l.$oj$ict();
l.$oj$yht(11);
};
i.$oj$vct=function($){
var t=$&&$.$oj$gct();
if(t==r){
var o=0==this.$oj$uct(r);
this.$oj$bct(this.$oj$Zft("KeySignature"),!o);
this.$oj$bct(this.$oj$Zft("Note"),o);
}
};
return e;
});
j._registerClass({
$oj$Ugt:1
},{
$oj$ast:1
},function(u,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$zgt=this.$oj$Wgt=null;
this.$oj$Xgt=this.$oj$Vgt=0;
this.constructor=l;
this.$oj_id=++j._id;
}
u.$oj$Wst=function(){
return j._cls.$oj$Igt;
};
a.$oj$Jgt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
a.$oj$ggt=function(){
var $,i=this.$oj$Pst(),s=i&&i.$oj$uct(n),r=i&&i.$oj$uct(t),e=i&&i.$oj$uct(o),c=($=new j._cls.$oj$Uit())&&$.init();
c&&c.$oj$Qit(i&&i.$oj$Iit());
c&&c.$oj$Git(s);
c&&c.$oj$Yit(r);
c&&c.$oj$Znt(0);
c&&c.$oj$Zit(e);
return c;
};
a.$oj$Kgt=function(t){
var o=t[e],j=this.$oj$Wgt[o],i=j.m,n=j.s;
return $.map(h(n),function($){
return i+$;
});
};
a.$oj$bgt=function(t){
var o=this;
function i(t,o,j){
var i=j[0]-o[0],n=j[1]-o[1],s=$.clamp(((t[0]-o[0])*i+(t[1]-o[1])*n)/(i*i+n*n),0,1);
return Math.hypot(t[0]-o[0]+s*i,t[1]-o[1]+s*n);
}
var n=o.$oj$zgt,s=$.map(o.$oj$Kgt(t),function($){
var t=n&&n.$oj$T9($);
return j._cls.$oj$G2.$oj$d9(t);
}),r=$.sample($.first(s)),e=$.sample($.last(s));
t[c]=$.map(s,function($){
for(var t,o=1/0,j=null,n=0,s=$?$.length:0;s>n;n++){
t=$[n];
var c=i(t,r,e);
if(o>c){
o=c;
j=t;
}
}
return j;
});
return!0;
};
a.$oj$tat=function(){
return 3;
};
a.$oj$nat=function(){
return 1;
};
a.$oj$Uut=function($){
var t=j._cls.$oj$j9.$oj$V9($,this.$oj$Vgt);
this.$oj$pat(t,this.$oj$Xgt,[$]);
};
a.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Jgt(),function($){
j._cls.$oj$j9.$oj$V9($,t.$oj$Vgt)&&o.push($);
});
t.$oj$wat(o);
};
a.$oj$yut=function(){
var t,o=this,c=this.$oj$Pst(),u=c&&c.$oj$uct(n),a=c&&c.$oj$uct(s),l=(t=c&&c.$oj$Iit())&&t.$oj$V2(u,!0),f=null,v=[],d=[],_=c&&c.$oj$qht(),g=c&&c.$oj$zht(),p=c&&c.$oj$uct(r),y=j._cls.$oj$Xat.$oj$fft(a,p,_,g),m={};
$.each(y,function($){
var t,o=j._cls.$oj$j9.$oj$W9($.scale),i=((t=j._cls.$oj$Mt.$oj$Jt($.tonic,0))&&t.$oj$an())%12;
m[i+","+o]={
s:o,
m:i
};
});
f=$.values(m);
var w=l&&l.$oj$S9(),b=$.last(w),S=$.filter(w,function($){
return b-12>=$;
});
S=$.filter(S,function(t){
return $.includes(w,t+12);
});
$.each(S,function(t){
$.each(f,function(o){
var j=o.m,i=o.s;
j==t%12&&$.every(h(i),function(o){
return $.includes(w,t+o);
})&&v.push({
m:t,
s:i
});
});
});
1==v.length?d.push(11):0==v.length&&d.push(2);
o.$oj$zgt=l;
o.$oj$Wgt=v;
o.$oj$uat(i({},e,v.length));
c&&c.$oj$gut(j._cls.$oj$Sut.$oj$fvt(d));
};
a.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(s),n=o&&o.$oj$Iht();
2==n&&this.$oj$gat(5);
this.$oj$Xgt=n;
var r=[],e=!1,c=!1,u=!1;
$.each(i,function($){
0==$||10==$?e=!0:11==$||12==$?c=!0:u=!0;
});
$.each(t.$oj$Jgt(),function(t){
var o=j._cls.$oj$l8.$oj$N8(t);
r.push({
title:o,
tag:t,
active:$.includes(i,t)
});
});
var h=null,a=null;
if(!e||c||u){
var l=[];
e&&l.push([0,10]);
c&&l.push([11,12]);
if(u){
l.push([20,21,22,23]);
l.push([24,25,26]);
}
h=l;
}else{
h=[[0],[10]];
a=[[0,10]];
}
t.$oj$yat(r,0,{
"default":h,
landscape:a
});
};
a.$oj$Nat=function($,t){
var o=$[e];
if(t){
var j=t[e];
if(o==j)return!1;
}
return this.$oj$bgt($,t);
};
a.$oj$Qot=function(t){
var o,i=this,n=((o=this.$oj$Pst())&&o.$oj$Iit(),t[e]),s=this.$oj$Wgt[n],r=s.s,u=j._cls.$oj$G2.$oj$p9(t[c]),h=this.$oj$ggt(),a=0;
$.each(u,function($){
var t,o=(t=new j._cls.$oj$nst())&&t.init(),i=String(a+1);
o&&o.$oj$rst($);
o&&o.$oj$vit(a);
o&&o.$oj$wit(i);
o&&o.$oj$Eit("Degree "+i);
h&&h.$oj$mit(o);
a++;
});
i.$oj$Vgt=r;
i.$oj$mat();
i.$oj$Tat(h);
};
a.$oj$hat=function(t){
var o,i,n=(o=this.$oj$Pst())&&o.$oj$Iit(),s=j._cls.$oj$G2.$oj$p9(t[c]),r=(i=new j._cls.$oj$mr())&&i.$oj$Lr(5);
$.each(s,function($){
var t=n&&n.$oj$A2($);
r&&r.$oj$Br(t,.33);
});
return r;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="KeySignature",n="StaffPosition",s="AnswerTag",r="Accidental",e="DisplayMode",c="Direction",u="RequireQuality",h="Intervals",a="DisplayMode",l="DirectionMode",f="CompoundMode",v="GenericIntervals",d="ResetAnswer",_="Leniency";
j._registerClass({
$oj$Qgt:1
},{
$oj$Tlt:1
},function(t,o){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Interval Construction";
};
t.$oj$oct=function(){
var t,o=(t=new j._cls.$oj$Tpt())&&t.init(),i=[26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],n=[2,3,4,5,6,7,8,9,10,11,12,13,14,15],s=[1,2,3,4,5];
o&&o.$oj$edt("interval-construction");
o&&o.$oj$tdt();
o&&o.$oj$idt();
o&&o.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
o&&o.$oj$wdt(function($,t,o){
if(t[u]){
var j=t[h],r=t[f],e=t["Difficulty"];
o&&o.$oj$qgt(!0);
o&&o.$oj$Ydt(i,j);
o&&o.$oj$qgt(r);
o&&o.$oj$Gdt(s,e);
}else{
var c=t[v];
o&&o.$oj$qgt(!1);
o&&o.$oj$Ydt(n,c);
}
},function(t,o,j){
if(j&&j.$oj$Rgt()){
o[u]=!0;
o[h]=j&&j.$oj$zdt(i);
o[f]=j&&j.$oj$Rgt();
var r=j&&j.$oj$Udt(s);
$.isNumber(r)&&(o["Difficulty"]=r);
}else{
o[u]=!1;
o[v]=j&&j.$oj$zdt(n);
}
});
o&&o.$oj$wdt(function($,t,o){
var j=t[a],i=t[l];
o&&o.$oj$Zdt((j<<2)+i);
},function($,t,o){
var j=o&&o.$oj$Wdt();
t[a]=j>>2&3;
t[l]=3&j;
});
o&&o.$oj$fdt(d);
o&&o.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
o&&o.$oj$gdt();
o&&o.$oj$ydt();
o&&o.$oj$bdt();
o&&o.$oj$mdt([0,1,2],_);
return o;
};
o.$oj$Gut=function(){
return"interval-construction";
};
o.$oj$rct=function(){
var t,o,i,n,s,r,c,a,g,p,y,m,w,b,S,M=this;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(3);
this.$oj$ict();
this.$oj$yht(14);
this.$oj$ict();
var F=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(e);
F&&F.$oj$Dct("Display Mode");
F&&F.$oj$Hct(0);
F&&F.$oj$Bct(0);
F&&F.$oj$qct(j._cls.$oj$Fct.$oj$jct("Harmonic",0));
F&&F.$oj$qct(j._cls.$oj$Fct.$oj$jct("Melodic",1));
F&&F.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both",2));
this.$oj$zct(F);
var E=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(l);
E&&E.$oj$Dct("Direction");
E&&E.$oj$Hct(0);
E&&E.$oj$Bct(0);
var x=j._cls.$oj$Fct.$oj$jct("Ascending Only",0);
x&&x.$oj$Ict("Ascending");
E&&E.$oj$qct(x);
var q=j._cls.$oj$Fct.$oj$jct("Descending Only",1);
q&&q.$oj$Ict("Descending");
E&&E.$oj$qct(q);
E&&E.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both",2));
(i=E&&E.$oj$ect())&&i.$oj$aht("Direction is applicable to melodic intervals.");
this.$oj$zct(E);
var C=(n=new j._cls.$oj$Mct())&&n.$oj$Oct(u);
C&&C.$oj$Dct("Require Quality");
C&&C.$oj$Pct(3);
C&&C.$oj$Hct(0);
C&&C.$oj$Bct(1);
C&&C.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
C&&C.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(C);
(s=this.$oj$ect())&&s.$oj$aht("Require both the interval quality and type.");
this.$oj$ict();
var T=[[2,9],[3,10],[4,11],[5,12],[6,13],[7,14],[8,15]],D=(r=new j._cls.$oj$Mct())&&r.$oj$Oct(v);
D&&D.$oj$Dct("Intervals");
D&&D.$oj$Hct(1);
D&&D.$oj$Pct(1);
$.each($.flatten(T),function($){
var t=j._cls.$oj$l8.$oj$z8($),o=j._cls.$oj$l8.$oj$W8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
i&&i.$oj$Kct(61);
D&&D.$oj$qct(i);
});
(c=D&&D.$oj$ect())&&c.$oj$lht(T);
D&&D.$oj$Bct([2,3,4,5,6,7,8]);
M.$oj$zct(D);
var O=[[23,24,25,26],[33,34,35,36],[44,null,45,46],[54,null,55,56],[63,64,65,66],[73,74,75,76],[84,null,85,86]],P=(a=new j._cls.$oj$Mct())&&a.$oj$Oct(h),A=[];
P&&P.$oj$Dct("Intervals");
P&&P.$oj$Hct(1);
P&&P.$oj$Pct(1);
$.each($.flatten(O),function($){
if(null===$)return;
var t=j._cls.$oj$l8.$oj$j8($),o=j._cls.$oj$l8.$oj$I8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
i&&i.$oj$Kct(61);
P&&P.$oj$qct(i);
A.push($);
});
(g=P&&P.$oj$ect())&&g.$oj$lht(O);
P&&P.$oj$Bct(A);
M.$oj$zct(P);
var N=(p=new j._cls.$oj$Mct())&&p.$oj$Oct(f);
N&&N.$oj$Dct("Compound Mode");
N&&N.$oj$Hct(0);
N&&N.$oj$Pct(3);
N&&N.$oj$Bct(0);
N&&N.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
N&&N.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
M.$oj$zct(N);
M.$oj$ict();
M.$oj$yht(15);
var I=(y=new j._cls.$oj$Mct())&&y.$oj$Oct(_);
I&&I.$oj$Dct("Leniency");
I&&I.$oj$Pct(0);
I&&I.$oj$Hct(0);
I&&I.$oj$Bct(0);
I&&I.$oj$ict();
I&&I.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lenient",2));
(m=I&&I.$oj$ect())&&m.$oj$aht("Allow answers with unneeded or duplicated accidentals.");
I&&I.$oj$ict();
I&&I.$oj$qct(j._cls.$oj$Fct.$oj$jct("Naturals Only",1));
(w=I&&I.$oj$ect())&&w.$oj$aht("Only allow unneeded naturals.");
I&&I.$oj$ict();
I&&I.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strict",0));
(b=I&&I.$oj$ect())&&b.$oj$aht("Disallow answers with unneeded or duplicated accidentals.");
M.$oj$zct(I);
M.$oj$ict();
M.$oj$yht(11);
var L=(S=new j._cls.$oj$Mct())&&S.$oj$Oct(d);
L&&L.$oj$Dct("Reset Answer");
L&&L.$oj$Pct(3);
L&&L.$oj$Hct(0);
L&&L.$oj$Bct(1);
L&&L.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
L&&L.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
M.$oj$zct(L);
};
o.$oj$Agt=function(){
var $=this.$oj$Zft(h),t=this.$oj$Zft(v),o=this.$oj$Zft(_),j=this.$oj$Sht(15),i=this.$oj$Zft(f),n=this.$oj$uct(u);
this.$oj$bct($,!n);
this.$oj$bct(j,!n);
this.$oj$bct(o,!n);
this.$oj$bct(i,!n);
this.$oj$bct(t,n);
};
o.$oj$Ggt=function(){
var t=this.$oj$Zft(h),o=this.$oj$uct(f);
$.each(t&&t.$oj$Kft(),function($){
var t=$&&$.$oj$xn(),i=t;
if(o){
var n=j._cls.$oj$K7.$oj$A9(t);
i=n&&n.$oj$xn();
}
$&&$.$oj$wit(j._cls.$oj$l8.$oj$j8(i));
$&&$.$oj$Eit(j._cls.$oj$l8.$oj$I8(i));
$&&$.$oj$Tct(j._cls.$oj$l8.$oj$j8(i));
});
};
o.$oj$vct=function($){
var t=$&&$.$oj$gct();
t==u?this.$oj$Agt():t==f&&this.$oj$Ggt();
};
return i;
});
j._registerClass({
$oj$Ygt:1
},{
$oj$ast:1
},function(g,p){
function y(){
j._cls.$oj$ast.call(this);
this.$oj$Zgt=this.$oj$eyt=this.$oj$tyt=this.$oj$nyt=null;
this.$oj$ryt=this.$oj$iyt=this.$oj$syt=this.$oj$oyt=this.$oj$uyt=this.$oj$ayt=this.$oj$fyt=this.$oj$lyt=0;
this.$oj$cyt=this.$oj$hyt=this.$oj$pyt=this.$oj$dyt=this.$oj$vyt=!1;
this.constructor=y;
this.$oj_id=++j._id;
}
g.$oj$Wst=function(){
return j._cls.$oj$Qgt;
};
p.$oj$myt=function(t){
return $.map(t,function($){
var t=j._cls.$oj$K7.$oj$A9($);
return t&&t.$oj$xn();
});
};
p.$oj$gyt=function($){
var i,e,u,h,a=$[t],l=$[o],f=$[r],v=$[n],d=$[c],_=$[s],g=0==d,p=void 0,y=void 0;
p=-100==f?(i=new j._cls.$oj$Mt())&&i.$oj$rn(a,v,l):(e=new j._cls.$oj$Mt())&&e.$oj$tn(a,v,f);
if(this.$oj$dyt){
var m=(u=new j._cls.$oj$K7())&&u.$oj$J7(_);
y=p&&p.$oj$hn(m,g);
}else{
var w=void 0;
w=g?v+(_-1):v-(_-1);
y=(h=new j._cls.$oj$Mt())&&h.$oj$rn(a,w,l);
}
return[p,y];
};
p.$oj$tat=function(){
return 1;
};
p.$oj$nat=function(){
return 3;
};
p.$oj$Rut=function(){
var $,t=j._cls.$oj$e8.$oj$o8(this.$oj$ayt,this.$oj$uyt),o=($=this.$oj$Pst())&&$.$oj$uct(_),i=j._cls.$oj$Xat.$oj$lft(t,this.$oj$eyt,this.$oj$iyt,this.$oj$lyt,o);
this.$oj$pat(i,this.$oj$syt,null);
};
p.$oj$dat=function($){
if(0!=$){
this.$oj$hyt=!0;
this.$oj$Wmt();
}
};
p.$oj$sut=function(){
this.$oj$ayt=this.$oj$eyt&&this.$oj$eyt.$oj$r8();
this.$oj$uyt=this.$oj$eyt&&this.$oj$eyt.$oj$i8();
this.$oj$Wmt();
};
p.$oj$yut=function(){
var d,_=this,g=this.$oj$Pst(),p=g&&g.$oj$uft(),y=g&&g.$oj$Grt(),m=g&&g.$oj$Rht(),w=g&&g.$oj$qht(),b=g&&g.$oj$uct(u),S=g&&g.$oj$uct(f),M=g&&g.$oj$uct(l),F=g&&g.$oj$uct(a),E=0,x=0,q=void 0,C=void 0,T=[];
if(b){
q=g&&g.$oj$uct(h);
S&&(q=this.$oj$myt(q));
if(1==m){
C=[-100];
x=0;
}else if(2==m){
C=[-100];
x=1;
}else if(3==m){
C=[-1,0,1];
x=1;
}else if(4==m){
C=[-1,0,1];
x=2;
}else{
C=[-2,-1,0,1,2];
x=2;
}
$.each(q,function($){
var t,o=(t=new j._cls.$oj$K7())&&t.$oj$J7($),i=o&&o.$oj$Jr();
i>E&&(E=i);
});
}else{
q=g&&g.$oj$uct(v);
$.each(q,function($){
$>E&&(E=$);
});
C=[-100];
_.$oj$uyt=-100;
}
y&&y.$oj$Wn(E-1,12)&&T.push(14);
var D=y&&y.$oj$Rn(),O=2==M?[0,1]:[M||0],P=2==F?[0,1]:[F||0];
_.$oj$uat((d={},i(d,s,q),i(d,t,p),i(d,o,w),i(d,n,D),i(d,c,O),i(d,e,P),i(d,r,C),d));
_.$oj$dyt=b;
_.$oj$ryt=x;
_.$oj$nyt=y;
_.$oj$pyt=0!=M;
_.$oj$cyt=D.length==E&&1==q.length;
_.$oj$cyt&&T.push(6);
g&&g.$oj$gut(j._cls.$oj$Sut.$oj$fvt(T));
};
p.$oj$Tut=function(){
var $=this.$oj$Pst();
this.$oj$syt=$&&$.$oj$Iht();
2==this.$oj$syt&&this.$oj$gat(2);
};
p.$oj$Wmt=function(){
var $,t,o,i,n=0==this.$oj$qst();
this.$oj$hyt&&(n=!1);
var s=($=new j._cls.$oj$nnt())&&$.init();
s&&s.$oj$vnt(this.$oj$iyt);
s&&s.$oj$mnt(this.$oj$lyt);
s&&s.$oj$Tnt(this.$oj$nyt);
s&&s.$oj$xnt(15.5);
n&&s&&s.$oj$Nnt(2);
var r=!1,e=this.$oj$Zgt,c=e&&e.$oj$r8(),u=this.$oj$ayt,h=this.$oj$uyt;
u!=c&&(this.$oj$vyt=!0);
if(0==this.$oj$fyt){
var a=[e];
if(u==c){
this.$oj$vyt&&a.push((t=new j._cls.$oj$e8())&&t.$oj$u8(u,-100));
r=!0;
}else a.push((o=new j._cls.$oj$e8())&&o.$oj$u8(u,h));
var l=j._cls.$oj$Ont.$oj$Rnt(a);
l&&l.$oj$jnt(this.$oj$tyt);
n&&l&&l.$oj$Fnt(1);
s&&s.$oj$Lnt(l);
s&&s.$oj$Cnt(2);
}else{
var f=(i=new j._cls.$oj$e8())&&i.$oj$u8(u,h),v=j._cls.$oj$Ont.$oj$Rnt([e]),d=j._cls.$oj$Ont.$oj$Rnt([f]);
s&&s.$oj$Lnt(v);
s&&s.$oj$Lnt(d);
s&&s.$oj$Cnt(3);
s&&s.$oj$ynt(this.$oj$tyt);
}
var _=j._cls.$oj$l8.$oj$S8(u,this.$oj$iyt),g=void 0;
g=0==this.$oj$ryt?0:1==this.$oj$ryt?1:2;
this.$oj$Lot(2020,{
"accidental-type":h,
"accidental-layout":g,
position:u,
"immutable-label":r?" ":null,
"ax-label":"Position",
"ax-value":_
});
this.$oj$Sat(s);
};
p.$oj$Nat=function(i,r,e){
var c,u,h=i[t],a=i[o],l=i[n],f=r?r[n]:0;
if(r&&l==f&&!this.$oj$cyt){
if(e>.5){
this.$oj$cyt=!0;
0==$.size((c=this.$oj$Pst())&&c.$oj$but())&&(u=this.$oj$Pst())&&u.$oj$gut([j._cls.$oj$Sut.$oj$Eut(6)]);
}
if(r[s]==i[s])return!1;
}
var v=this.$oj$gyt(i),d=!0;
d&&this.$oj$dyt&&!j._cls.$oj$Xat.$oj$Kat(v,a,this.$oj$ryt)&&(d=!1);
d&&!j._cls.$oj$Xat.$oj$Qat(v,h,this.$oj$nyt)&&(d=!1);
return d;
};
p.$oj$Qot=function(i){
var n,r=this,u=i[s],h=i[t],l=i[o],f=i[c],v=i[e],_=null,g=null;
if(this.$oj$dyt){
_=j._cls.$oj$l8.$oj$j8(u);
g=j._cls.$oj$l8.$oj$I8(u);
}else{
_=j._cls.$oj$l8.$oj$z8(u);
g=j._cls.$oj$l8.$oj$W8(u);
}
var p=this.$oj$gyt(i);
if(this.$oj$pyt)if(0==f){
_="{{up}} "+_;
g="Ascending "+g;
}else if(1==f){
_="{{down}} "+_;
g="Descending "+g;
}
var y=$.map(p,function($){
var t;
return(t=new j._cls.$oj$e8())&&t.$oj$u8($&&$.$oj$fn(h),$&&$.$oj$ln(l));
}),m=(n=new j._cls.$oj$Wnt())&&n.init();
m&&m.$oj$Jnt(_);
m&&m.$oj$Knt(g);
r.$oj$iyt=h;
r.$oj$lyt=l;
r.$oj$tyt=m;
r.$oj$fyt=v;
r.$oj$Zgt=$.first(y);
r.$oj$eyt=$.last(y);
r.$oj$oyt=u;
r.$oj$hyt=!1;
var w=r.$oj$Pst(),b=w&&w.$oj$uct(a);
r.$oj$vyt=0!=b;
if(w&&w.$oj$uct(d)){
r.$oj$ayt=r.$oj$Zgt&&r.$oj$Zgt.$oj$r8();
r.$oj$uyt=-100;
}
r.$oj$mat();
r.$oj$Wmt();
};
p.$oj$Xmt=function($){
var t=$["accidental-type"],o=$["delta"],j=$["position"];
if(void 0!==t)this.$oj$uyt=t;else if(void 0!==o){
var i=this.$oj$ayt+o;
this.$oj$ayt=this.$oj$nyt&&this.$oj$nyt.$oj$zn(i);
}else void 0!==j&&(this.$oj$ayt=this.$oj$nyt&&this.$oj$nyt.$oj$zn(j));
this.$oj$Wmt();
};
p.$oj$Vmt=function($){
var t=$["position"];
if(void 0!==t){
var o=Math.round(t);
this.$oj$ayt=this.$oj$nyt&&this.$oj$nyt.$oj$zn(o);
}
this.$oj$Wmt();
};
p.$oj$iat=function($,t){
3015==$?this.$oj$Xmt(t):3016==$?this.$oj$Vmt(t):y.$oj_super.prototype.$oj$iat.call(this,$,t);
};
p.$oj$hat=function(t){
var o,i=t[e],n=this.$oj$gyt(t),s=(o=new j._cls.$oj$mr())&&o.$oj$Lr(2);
0==i?$.each(n,function($){
s&&s.$oj$jr($&&$.$oj$an(),0,1);
}):1==i&&$.each(n,function($){
s&&s.$oj$Br($&&$.$oj$an(),.5);
});
return s;
};
return y;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Intervals",o="PlayMode",n="RangeMode",s="QuestionIndex";
function r($){
return 2==$?"Range determines the available pitches for the starting note of the interval.":"Range determines the available pitches for both notes of the interval.";
}
j._registerClass({
$oj$yyt:1
},{
$oj$Tlt:1
},function(i,s){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
i.$oj$Kut=function(){
return"Interval Ear Training";
};
i.$oj$oct=function(){
var $,i=($=new j._cls.$oj$Tpt())&&$.init();
function s($,t){
var o;
return(o=j._cls.$oj$Cn.$oj$jn($,t))&&o.$oj$Rn();
}
i&&i.$oj$edt("ear-interval");
i&&i.$oj$vdt(s(0,14),t);
i&&i.$oj$vdt(s(0,4),o);
i&&i.$oj$mdt([1e3,750,500,333,250,125],"Speed");
i&&i.$oj$mdt([0,1,2],n);
i&&i.$oj$cdt();
i&&i.$oj$hdt();
i&&i.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
i&&i.$oj$vdt(s(15,24),t);
i&&i.$oj$gdt();
i&&i.$oj$ydt();
i&&i.$oj$bdt();
return i;
};
s.$oj$Gut=function(){
return"ear-interval";
};
s.$oj$rct=function(){
var $,i,s,e,c,u,h=this,a=($=new j._cls.$oj$Mct())&&$.$oj$Oct(t);
a&&a.$oj$Dct("Intervals");
a&&a.$oj$Hct(1);
a&&a.$oj$Pct(1);
var l=[],f=function($){
var t=j._cls.$oj$l8.$oj$J8($),o=j._cls.$oj$l8.$oj$K8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
13>$&&l.push($);
a&&a.$oj$qct(i);
};
f(0);
f(1);
f(2);
f(3);
f(4);
f(5);
f(6);
f(7);
f(8);
f(9);
f(10);
f(11);
f(12);
a&&a.$oj$ict();
f(13);
f(14);
f(15);
f(16);
f(17);
f(18);
f(19);
f(20);
f(21);
f(22);
f(23);
f(24);
a&&a.$oj$Bct(l);
h.$oj$zct(a);
var v=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(o);
v&&v.$oj$Dct("Play Mode");
v&&v.$oj$Hct(1);
v&&v.$oj$Bct([0]);
var d=function($,t,o){
var i=j._cls.$oj$Fct.$oj$Jct(null,"interval-playmode:"+$,$);
i&&i.$oj$Eit(t);
i&&i.$oj$Ict(o?o:t);
i&&i.$oj$Kct(61);
v&&v.$oj$qct(i);
};
d(0,"Ascending",null);
d(1,"Descending",null);
d(2,"Harmonic",null);
d(3,"Ascending Harmonic","Asc. Harmonic");
d(4,"Descending Harmonic","Desc. Harmonic");
h.$oj$ict();
h.$oj$zct(v);
h.$oj$yht(16);
h.$oj$ict();
h.$oj$yht(6);
h.$oj$yht(7);
var _=(s=new j._cls.$oj$Mct())&&s.$oj$Oct(n);
_&&_.$oj$Dct("Range Mode");
_&&_.$oj$Hct(0);
_&&_.$oj$Bct(0);
_&&_.$oj$ict();
_&&_.$oj$qct(j._cls.$oj$Fct.$oj$jct("Starting Note",2));
(e=_&&_.$oj$ect())&&e.$oj$aht(r(2));
_&&_.$oj$ict();
_&&_.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both Notes",0));
(c=_&&_.$oj$ect())&&c.$oj$aht(r(0));
h.$oj$zct(_);
h.$oj$ict();
h.$oj$yht(12);
(u=h.$oj$Sht(12))&&u.$oj$Bct(0);
h.$oj$byt();
};
s.$oj$byt=function(){
var t=this.$oj$uct(n),o=r(t);
$.each(this.$oj$Tht(7),function($){
$&&$.$oj$qvt(o);
});
};
s.$oj$vct=function($){
($&&$.$oj$gct())==n&&this.$oj$byt();
};
return e;
});
j._registerClass({
$oj$wyt:1
},{
$oj$ast:1
},function(r,e){
function c(){
j._cls.$oj$ast.call(this);
this.$oj$Eyt=null;
this.$oj$Syt=this.$oj$xyt=0;
this.$oj$Tyt=!1;
this.constructor=c;
this.$oj_id=++j._id;
}
r.$oj$Wst=function(){
return j._cls.$oj$yyt;
};
e.$oj$tat=function(){
return 4;
};
e.$oj$nat=function(){
return 1;
};
e.$oj$Uut=function($){
this.$oj$pat($==this.$oj$xyt,this.$oj$Syt,[$]);
};
e.$oj$sut=function(){
this.$oj$wat([this.$oj$xyt]);
};
e.$oj$yut=function(){
var r=this,e=this.$oj$Pst(),c=e&&e.$oj$Ect(),u=e&&e.$oj$uct(o),h=e&&e.$oj$uct(t),a=e&&e.$oj$uct(n),l=[],f=$.includes(u,0),v=$.includes(u,1),d=$.includes(u,3),_=$.includes(u,4),g=$.includes(u,2),p=j._cls.$oj$Xat.$oj$Yat(c,e&&e.$oj$Fht()),y=p&&p.$oj$Bn(),m=p&&p.$oj$Hn(),w=p&&p.$oj$Un(),b=new Uint8Array(w*h.length*u.length*3),S=0;
function M($,t,o){
b[S++]=$;
b[S++]=t;
b[S++]=o;
}
if(2==a){
var F=$.max(h),E=j._cls.$oj$Cn.$oj$jn((p&&p.$oj$Bn())-F,(p&&p.$oj$Hn())+F),x=j._cls.$oj$Xat.$oj$Yat(c,E),q=x&&x.$oj$Bn(),C=x&&x.$oj$Hn();
$.each(h,function($){
for(var t=y;m>=t;t++){
var o=t+$;
if(o>C)continue;
f&&M(t,o,0);
if(t!=o){
d&&M(t,o,3);
g&&M(t,o,2);
}
}
for(var j=m;j>=y;j--){
var i=j-$;
if(q>i)continue;
v&&M(j,i,1);
j!=i&&_&&M(j,i,4);
}
});
}else $.each(h,function($){
for(var t=y;m-$>=t;t++){
var o=t+$;
f&&M(t,o,0);
v&&M(o,t,1);
if(t!=o){
d&&M(t,o,3);
_&&M(o,t,4);
g&&M(t,o,2);
}
}
});
var T=Math.floor(S/3),D=1==T;
T?D&&l.push(6):l.push(1);
r.$oj$uat(i({},s,T));
r.$oj$Eyt=b;
r.$oj$Tyt=D;
e&&e.$oj$gut(j._cls.$oj$Sut.$oj$fvt(l));
};
e.$oj$Tut=function(){
var o=this,i=this.$oj$Pst(),n=i&&i.$oj$uct(t),s=i&&i.$oj$Ect();
this.$oj$Syt=i&&i.$oj$Iht();
this.$oj$gat(s);
var r=$.some(n,function($){
return 12>$;
}),e=$.some(n,function($){
return $>12;
});
e||r||(r=!0);
for(var c=[],u=["1","Down 2","2","Down 3","3","4","Down 5","5","Down 6","6","Down 7","7","8","Down 9","9","Down 0","0","1","Down 2","2","Down 3","3","Down 4","4","5"],h=r?0:12,a=e?24:12,l=h;a>=l;l++){
var f=j._cls.$oj$l8.$oj$J8(l),v=j._cls.$oj$l8.$oj$V8(l),d=j._cls.$oj$l8.$oj$K8(l),_=u[l];
r&&e&&(_=null);
c.push({
title:f,
ax:d,
symbol:v,
tag:l,
active:$.includes(n,l),
shortcut:_
});
}
var g=null,p=null;
if(r&&e){
g=[[null,0,null,null],[1,2,13,14],[3,4,15,16],[null,5,null,17],[6,7,18,19],[8,9,20,21],[10,11,22,23],[null,12,null,24]];
p=[[1,2,3,4,13,14,15,16],[5,6,7,17,18,19],[8,9,10,11,20,21,22,23],[0,12,24]];
}else if(r){
g=[[null,0],[1,2],[3,4],[null,5],[6,7],[8,9],[10,11],[null,12]];
p=[[1,2,3,4],[5,6,7],[8,9,10,11],[0,12]];
}else if(e){
g=[[null,12],[13,14],[15,16],[null,17],[18,19],[20,21],[22,23],[null,24]];
p=[[13,14,15,16],[17,18,19],[20,21,22,23],[12,24]];
}
o.$oj$yat(c,0,{
"default":g,
landscape:p
});
};
e.$oj$Nat=function($,t){
var o=$[s];
if(t){
var j=t[s];
if(!this.$oj$Tyt&&o==j)return!1;
}
return!0;
};
e.$oj$hat=function($){
var t,o=3*$[s],i=this.$oj$Eyt[o+0],n=this.$oj$Eyt[o+1],r=this.$oj$Eyt[o+2],e=this.$oj$Pst(),c=e&&e.$oj$Ect(),u=e&&e.$oj$Uht(),h=0,a=u,l=2*u,f=(t=new j._cls.$oj$mr())&&t.$oj$Lr(c);
if(0==r||1==r){
f&&f.$oj$jr(i,h,u);
f&&f.$oj$jr(n,a,u);
}else if(2==r){
f&&f.$oj$jr(i,h,u);
f&&f.$oj$jr(n,h,u);
}else if(3==r||4==r){
f&&f.$oj$jr(i,h,u);
f&&f.$oj$jr(n,a,u);
f&&f.$oj$jr(i,l,u);
f&&f.$oj$jr(n,l,u);
}
return f;
};
e.$oj$Qot=function($){
var t=3*$[s],o=this.$oj$Eyt[t+0],j=this.$oj$Eyt[t+1];
this.$oj$mat();
this.$oj$vat(this.$oj$cat());
this.$oj$xyt=Math.abs(o-j);
};
return c;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="KeySignature",n="StaffPosition",s="AnswerTag",r="Accidental",e="DisplayMode",c="Direction",u="RequireQuality",h="Intervals",a="CompoundMode",l="GenericIntervals";
j._registerClass({
$oj$Nyt:1
},{
$oj$Tlt:1
},function(t,o){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Interval Identification";
};
t.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
function o($,t,o){
var j=t[e],i=t[c];
o&&o.$oj$Zdt((j<<2)+i);
}
function i($,t,o){
var j=o&&o.$oj$Wdt();
t[e]=j>>2&3;
t[c]=3&j;
}
t&&t.$oj$edt("interval");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
t&&t.$oj$vdt([26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],h);
t&&t.$oj$mdt([1,2,3,4,5],"Difficulty");
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$fdt(a);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$wdt(o,i);
t&&t.$oj$edt("generic-interval");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
t&&t.$oj$vdt([2,3,4,5,6,7,8,9,10,11],l);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$vdt([12,13,14,15],l);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$wdt(o,i);
t&&t.$oj$jpt(function($,t){
if("generic-interval"==$&&t.length<=4){
t.splice(0,0,1);
t.splice(3,0,0,4,0);
}
});
t&&t.$oj$Rpt(function($,t){
var o="generic-interval"!=$;
t[u]=o;
});
return t;
};
o.$oj$Gut=function(){
return this.$oj$uct(u)?"interval":"generic-interval";
};
o.$oj$rct=function(){
var t,o,i,n,s,r,f,v,d,_,g=this;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(3);
this.$oj$ict();
this.$oj$yht(14);
this.$oj$ict();
var p=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(e);
p&&p.$oj$Dct("Display Mode");
p&&p.$oj$Hct(0);
p&&p.$oj$Bct(0);
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$jct("Harmonic",0));
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$jct("Melodic",1));
p&&p.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both",2));
this.$oj$zct(p);
var y=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(c);
y&&y.$oj$Dct("Direction");
y&&y.$oj$Hct(0);
y&&y.$oj$Bct(0);
var m=j._cls.$oj$Fct.$oj$jct("Ascending Only",0);
m&&m.$oj$Ict("Ascending");
y&&y.$oj$qct(m);
var w=j._cls.$oj$Fct.$oj$jct("Descending Only",1);
w&&w.$oj$Ict("Descending");
y&&y.$oj$qct(w);
y&&y.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both",2));
(i=y&&y.$oj$ect())&&i.$oj$aht("Direction is applicable to melodic intervals.");
this.$oj$zct(y);
var b=(n=new j._cls.$oj$Mct())&&n.$oj$Oct(u);
b&&b.$oj$Dct("Require Quality");
b&&b.$oj$Pct(3);
b&&b.$oj$Hct(0);
b&&b.$oj$Bct(1);
b&&b.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
b&&b.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(b);
(s=this.$oj$ect())&&s.$oj$aht("Require both the interval quality and type.");
var S=[[2,9],[3,10],[4,11],[5,12],[6,13],[7,14],[8,15]],M=(r=new j._cls.$oj$Mct())&&r.$oj$Oct(l);
M&&M.$oj$Dct("Intervals");
M&&M.$oj$Hct(1);
M&&M.$oj$Pct(1);
$.each($.flatten(S),function($){
var t=j._cls.$oj$l8.$oj$z8($),o=j._cls.$oj$l8.$oj$W8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
i&&i.$oj$Kct(61);
M&&M.$oj$qct(i);
});
(f=M&&M.$oj$ect())&&f.$oj$lht(S);
M&&M.$oj$Bct([2,3,4,5,6,7,8]);
g.$oj$ict();
g.$oj$zct(M);
var F=[[23,24,25,26],[33,34,35,36],[44,null,45,46],[54,null,55,56],[63,64,65,66],[73,74,75,76],[84,null,85,86]],E=(v=new j._cls.$oj$Mct())&&v.$oj$Oct(h),x=[];
E&&E.$oj$Dct("Intervals");
E&&E.$oj$Hct(1);
E&&E.$oj$Pct(1);
$.each($.flatten(F),function($){
if(null===$)return;
var t=j._cls.$oj$l8.$oj$j8($),o=j._cls.$oj$l8.$oj$I8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
i&&i.$oj$Kct(61);
E&&E.$oj$qct(i);
x.push($);
});
(d=E&&E.$oj$ect())&&d.$oj$lht(F);
E&&E.$oj$Bct(x);
g.$oj$ict();
g.$oj$zct(E);
var q=(_=new j._cls.$oj$Mct())&&_.$oj$Oct(a);
q&&q.$oj$Dct("Compound Mode");
q&&q.$oj$Hct(0);
q&&q.$oj$Pct(3);
q&&q.$oj$Bct(0);
q&&q.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
q&&q.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
g.$oj$zct(q);
g.$oj$ict();
g.$oj$yht(15);
g.$oj$ict();
g.$oj$yht(11);
};
o.$oj$Agt=function(){
var $=this.$oj$Zft(h),t=this.$oj$Zft(l),o=this.$oj$Sht(15),j=this.$oj$Zft(a),i=this.$oj$uct(u);
this.$oj$bct($,!i);
this.$oj$bct(o,!i);
this.$oj$bct(j,!i);
this.$oj$bct(t,i);
var n=this.$oj$Zft(c),s=this.$oj$uct(e);
this.$oj$bct(n,0==s);
};
o.$oj$Ggt=function(){
var t=this.$oj$Zft(h),o=this.$oj$uct(a);
$.each(t&&t.$oj$Kft(),function($){
var t=$&&$.$oj$xn(),i=t;
if(o){
var n=j._cls.$oj$K7.$oj$A9(t);
i=n&&n.$oj$xn();
}
$&&$.$oj$wit(j._cls.$oj$l8.$oj$j8(i));
$&&$.$oj$Eit(j._cls.$oj$l8.$oj$I8(i));
$&&$.$oj$Tct(j._cls.$oj$l8.$oj$j8(i));
});
};
o.$oj$vct=function($){
var t=$&&$.$oj$gct();
t==u||t==e?this.$oj$Agt():t==a&&this.$oj$Ggt();
};
return i;
});
j._registerClass({
$oj$Cyt:1
},{
$oj$ast:1
},function(f,v){
function d(){
j._cls.$oj$ast.call(this);
this.$oj$kyt=this.$oj$Lyt=null;
this.$oj$Ayt=this.$oj$Oyt=this.$oj$Myt=0;
this.$oj$Dyt=this.$oj$Pyt=this.$oj$Hyt=this.$oj$Byt=!1;
this.constructor=d;
this.$oj_id=++j._id;
}
f.$oj$Wst=function(){
return j._cls.$oj$Nyt;
};
v.$oj$myt=function(t){
return $.map(t,function($){
var t=j._cls.$oj$K7.$oj$A9($);
return t&&t.$oj$xn();
});
};
v.$oj$gyt=function(i){
var u,h,a,l,f=i[t],v=i[o],d=i[r],_=i[n],g=i[s],p=i[c],y=i[e],m=null,w=null;
m=-100==d?(u=new j._cls.$oj$Mt())&&u.$oj$rn(f,_,v):(h=new j._cls.$oj$Mt())&&h.$oj$tn(f,_,d);
(void 0===g||null===g)&&this.$oj$iot("!aT",$.inspect(i));
if(this.$oj$Byt){
var b=(a=new j._cls.$oj$K7())&&a.$oj$J7(g);
w=m&&m.$oj$gn(b);
}else{
var S=_+(g-1);
w=(l=new j._cls.$oj$Mt())&&l.$oj$rn(f,S,v);
}
return 1==y&&1==p?[w,m]:[m,w];
};
v.$oj$tat=function(){
return 1;
};
v.$oj$nat=function(){
return 1;
};
v.$oj$Uut=function($){
var t=$==this.$oj$Myt;
this.$oj$pat(t,this.$oj$Oyt,[$]);
};
v.$oj$iat=function($,t){
if(3008==$){
var o=t["tag"],j=o==this.$oj$Myt;
this.$oj$pat(j,this.$oj$Oyt,[o]);
}else d.$oj_super.prototype.$oj$iat.call(this,$,t);
};
v.$oj$sut=function(){
this.$oj$wat([this.$oj$Myt]);
};
v.$oj$yut=function(){
var f,v=this,d=this.$oj$Pst(),_=d&&d.$oj$uft(),g=d&&d.$oj$Grt(),p=d&&d.$oj$Rht(),y=d&&d.$oj$qht(),m=d&&d.$oj$uct(u),w=d&&d.$oj$uct(a),b=d&&d.$oj$uct(c),S=d&&d.$oj$uct(e),M=0,F=0,E=!1,x=!1,q=void 0,C=void 0,T=[];
if(m){
q=d&&d.$oj$uct(h);
w&&(q=this.$oj$myt(q));
if(1==p){
C=[-100];
M=0;
}else if(2==p){
C=[-100];
M=1;
}else if(3==p){
C=[-1,0,1];
M=1;
}else if(4==p){
C=[-1,0,1];
M=2;
}else{
C=[-2,-1,0,1,2];
M=2;
}
$.each(q,function($){
var t,o=(t=new j._cls.$oj$K7())&&t.$oj$J7($),i=o&&o.$oj$Jr();
i>F&&(F=i);
});
}else{
q=d&&d.$oj$uct(l);
$.each(q,function($){
$>F&&(F=$);
$>8?x=!0:E=!0;
});
C=[-100];
}
g&&g.$oj$Wn(F-1,12)&&T.push(14);
var D=g&&g.$oj$Rn(),O=2==b?[0,1]:[b||0],P=2==S?[0,1]:[S||0];
v.$oj$uat((f={},i(f,s,q),i(f,t,_),i(f,o,y),i(f,n,D),i(f,r,C),i(f,e,P),i(f,c,O),f));
v.$oj$kyt=q;
v.$oj$Byt=m;
v.$oj$Ayt=M;
v.$oj$Lyt=g;
v.$oj$Hyt=E;
v.$oj$Pyt=x;
v.$oj$Dyt=D.length==F&&1==q.length;
v.$oj$Dyt&&T.push(6);
d&&d.$oj$gut(j._cls.$oj$Sut.$oj$fvt(T));
};
v.$oj$Tut=function(){
var t=this,o=this.$oj$Pst();
this.$oj$Oyt=o&&o.$oj$Iht();
2==this.$oj$Oyt&&this.$oj$gat(2);
for(var i,n=[],s=null,r=null,e={},c=this.$oj$kyt,u=0,h=c?c.length:0;h>u;u++){
i=c[u];
e[i]=!0;
}
function l($){
for(var t,o=0,j=$?$.length:0;j>o;o++){
t=$[o];
if(e[t])return!0;
}
return!1;
}
function f($){
if(null===$)return null;
var t=j._cls.$oj$l8.$oj$j8($),o=j._cls.$oj$l8.$oj$I8($),i=j._cls.$oj$Xat.$oj$tft($);
n.push({
title:t,
ax:o,
tag:$,
active:!!e[$],
shortcut:i
});
return $;
}
function v(o){
var i=j._cls.$oj$l8.$oj$z8(o),s=(j._cls.$oj$l8.$oj$W8(o),[null,"1","2","3","4","5","6","7","8","9","0","Up 1","Up 2","Up 3","Up 4","Up 5"][o]);
n.push({
title:i,
tag:o,
active:$.includes(t.$oj$kyt,o),
shortcut:s
});
return o;
}
if(t.$oj$Byt){
var d=o&&o.$oj$uct(a),_=[d?96:26,d?106:36,d?116:46,d?126:56,d?136:66,d?146:76,d?156:86],g=[d?95:25,d?105:35,d?115:45,d?125:55,d?135:65,d?145:75,d?155:85],p=[d?94:24,d?104:34,null,null,d?134:64,d?144:74,null],y=[d?93:23,d?103:33,d?114:44,d?124:54,d?133:63,d?143:73,d?154:84],m=$.map(_,function($){
return f($);
}),w=$.map(g,function($){
return f($);
}),b=$.map(p,function($){
return f($);
}),S=$.map(y,function($){
return f($);
});
s=[m,w,b,S];
r=[];
l(_)&&r.push(m);
l(g)&&r.push(w);
l(p)&&r.push(b);
l(y)&&r.push(S);
}else if(t.$oj$Hyt&&t.$oj$Pyt){
s=[[v(2),v(3),v(4),v(5)],[v(6),v(7),null,v(8)],[v(9),v(10),v(11),v(12)],[v(13),v(14),null,v(15)]];
r=[[v(2),v(3),v(4),v(5),v(6),v(7),v(8)],[v(9),v(10),v(11),v(12),v(13),v(14),v(15)]];
}else{
var M=t.$oj$Pyt?7:0;
s=[[v(M+2),v(M+3)],[v(M+4),v(M+5)],[v(M+6),v(M+7)],[null,v(M+8)]];
r=[[v(M+2),v(M+3),v(M+4),v(M+5)],[v(M+6),v(M+7),v(M+8)]];
}
t.$oj$yat(n,0,{
"default":s,
landscape:r
});
};
v.$oj$Nat=function(i,r,e){
var c,u,h=i[t],a=i[o],l=i[n],f=r?r[n]:0;
if(r&&l==f&&!this.$oj$Dyt){
if(e>.5){
this.$oj$Dyt=!0;
0==$.size((c=this.$oj$Pst())&&c.$oj$but())&&(u=this.$oj$Pst())&&u.$oj$gut([j._cls.$oj$Sut.$oj$Eut(6)]);
}
if(i[s]==r[s])return!1;
}
var v=this.$oj$gyt(i),d=!0;
d&&this.$oj$Byt&&!j._cls.$oj$Xat.$oj$Kat(v,a,this.$oj$Ayt)&&(d=!1);
d&&!j._cls.$oj$Xat.$oj$Qat(v,h,this.$oj$Lyt)&&(d=!1);
return d;
};
v.$oj$Qot=function(i){
{
var n,r=this,u=i[t],h=i[o],a=i[e];
i[c];
}
this.$oj$Myt=i[s];
var l=(n=new j._cls.$oj$nnt())&&n.init();
l&&l.$oj$vnt(u);
l&&l.$oj$mnt(h);
l&&l.$oj$xnt(15.5);
l&&l.$oj$Tnt(this.$oj$Lyt);
var f=this.$oj$gyt(i);
0==a?l&&l.$oj$knt(f):$.each(f,function($){
l&&l.$oj$Lnt(j._cls.$oj$Ont.$oj$Ant([$]));
});
r.$oj$mat();
r.$oj$Sat(l);
};
v.$oj$hat=function(t){
var o,i=t[e],n=this.$oj$gyt(t),s=(o=new j._cls.$oj$mr())&&o.$oj$Lr(2);
0==i?$.each(n,function($){
s&&s.$oj$jr($&&$.$oj$an(),0,1);
}):1==i&&$.each(n,function($){
s&&s.$oj$Br($&&$.$oj$an(),.5);
});
return s;
};
return d;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var $="Clef",t="KeySignature",o="Scales",n="ResetAnswer";
j._registerClass({
$oj$jyt:1
},{
$oj$Tlt:1
},function($,i){
function s(){
j._cls.$oj$Tlt.call(this);
this.constructor=s;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Key Signature Construction";
};
$.$oj$oct=function(){
var $,i=($=new j._cls.$oj$Tpt())&&$.init();
i&&i.$oj$edt("keysig-construction");
i&&i.$oj$tdt();
i&&i.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],t);
i&&i.$oj$vdt([0,1,20,21,22,23,24,25,26],o);
i&&i.$oj$fdt(n);
i&&i.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
i&&i.$oj$gdt();
i&&i.$oj$ydt();
i&&i.$oj$bdt();
i&&i.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
return i;
};
i.$oj$Gut=function(){
return"keysig-construction";
};
i.$oj$rct=function(){
var $,t,i;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(14);
($=this.$oj$Sht(14))&&$.$oj$Bct([-1,0,1,2,3,4,5]);
var s=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(o);
s&&s.$oj$Dct("Scales");
s&&s.$oj$Pct(1);
s&&s.$oj$Hct(1);
s&&s.$oj$Bct([0]);
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Major",0));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Minor",1));
s&&s.$oj$ict();
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Ionian",20));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Dorian",21));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Phrygian",22));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lydian",23));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Mixolydian",24));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Aeolian",25));
s&&s.$oj$qct(j._cls.$oj$Fct.$oj$jct("Locrian",26));
this.$oj$ict();
this.$oj$zct(s);
this.$oj$ict();
this.$oj$bht(5,[0,1,2,3,4,13,14]);
this.$oj$ict();
this.$oj$yht(13);
var r=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(n);
r&&r.$oj$Dct("Reset Answer");
r&&r.$oj$Pct(3);
r&&r.$oj$Hct(0);
r&&r.$oj$Bct(1);
r&&r.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
r&&r.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(r);
};
return s;
});
j._registerClass({
$oj$Fyt:1
},{
$oj$ast:1
},function(s,r){
function e(){
j._cls.$oj$ast.call(this);
this.$oj$Iyt=this.$oj$qyt=null;
this.$oj$Ryt=this.$oj$Uyt=this.$oj$zyt=this.$oj$Wyt=this.$oj$Xyt=this.$oj$Vyt=0;
this.$oj$Jyt=!1;
this.constructor=e;
this.$oj_id=++j._id;
}
s.$oj$Wst=function(){
return j._cls.$oj$jyt;
};
r.$oj$Wmt=function(){
var $,t=(0==this.$oj$qst(),($=new j._cls.$oj$nnt())&&$.init());
t&&t.$oj$vnt(this.$oj$Ryt);
t&&t.$oj$mnt(this.$oj$Wyt);
t&&t.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(-6,6));
t&&t.$oj$xnt(12);
t&&t.$oj$ynt(this.$oj$qyt);
t&&t.$oj$Snt(5);
t&&t.$oj$Lnt(j._cls.$oj$Ont.$oj$Ant([]));
this.$oj$Lot(2021,{
tag:this.$oj$Wyt
});
this.$oj$Sat(t);
};
r.$oj$Kyt=function($){
this.$oj$Wyt=$["tag"];
this.$oj$Wmt();
};
r.$oj$tat=function(){
return 1;
};
r.$oj$nat=function(){
return 4;
};
r.$oj$Rut=function(){
var $=this.$oj$Wyt==this.$oj$zyt;
this.$oj$pat($,this.$oj$Uyt,null);
};
r.$oj$sut=function(){
this.$oj$Wyt=this.$oj$zyt;
this.$oj$Wmt();
};
r.$oj$yut=function(){
var n,s=this.$oj$Pst(),r=s&&s.$oj$qht(),e=s&&s.$oj$uft(),c=s&&s.$oj$uct(o),u=s&&s.$oj$Att();
this.$oj$uat((n={},i(n,$,e),i(n,t,r),i(n,o,c),n));
this.$oj$Jyt=1==r.length&&1==c.length;
this.$oj$Jyt&&s&&s.$oj$gut([j._cls.$oj$Sut.$oj$Eut(8)]);
this.$oj$Uyt=s&&s.$oj$Iht();
this.$oj$Xyt=u;
this.$oj$Iyt=r;
};
r.$oj$Nat=function($,j){
var i=$[t],n=$[o];
if(j){
var s=j[t],r=j[o];
if(i==s&&n==r&&!this.$oj$Jyt)return!1;
}
return!0;
};
r.$oj$Qot=function(i){
var s,r,e=i[$],c=i[t],u=i[o];
this.$oj$Ryt=e;
this.$oj$Vyt=u;
this.$oj$zyt=c;
var h=j._cls.$oj$j9.$oj$U9(u,c,0);
(s=this.$oj$Pst())&&s.$oj$uct(n)&&(this.$oj$Wyt=0);
this.$oj$qyt=(r=new j._cls.$oj$Wnt())&&r.init();
this.$oj$qyt&&this.$oj$qyt.$oj$Jnt(j._cls.$oj$l8.$oj$T8(u,h&&h.$oj$xn(),this.$oj$Xyt));
this.$oj$qyt&&this.$oj$qyt.$oj$Knt(j._cls.$oj$l8.$oj$k8(u,h&&h.$oj$xn(),this.$oj$Xyt));
this.$oj$mat();
this.$oj$Wmt();
};
r.$oj$iat=function($,t){
3017==$?this.$oj$Kyt(t):e.$oj_super.prototype.$oj$iat.call(this,$,t);
};
return e;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="KeySignature",n="Scales";
j._registerClass({
$oj$Qyt:1
},{
$oj$Tlt:1
},function(t,i){
function s(){
j._cls.$oj$Tlt.call(this);
this.constructor=s;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Key Signature Identification";
};
t.$oj$oct=function(){
var t,i=(t=new j._cls.$oj$Tpt())&&t.init();
i&&i.$oj$edt("keysig");
i&&i.$oj$tdt();
i&&i.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],o);
i&&i.$oj$vdt([1,0],n);
i&&i.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],"NoteNameStyle");
i&&i.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
i&&i.$oj$gdt();
i&&i.$oj$ydt();
i&&i.$oj$bdt();
i&&i.$oj$vdt([20,21,22,23,24,25,26],n);
i&&i.$oj$Ipt(function(t,o,j){
$.isEqual(j[n],[0])&&(j[n]=[]);
});
return i;
};
i.$oj$Gut=function(){
return"keysig";
};
i.$oj$rct=function(){
var $,t,o=this;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(14);
this.$oj$ict();
this.$oj$bht(5,[0,11,16,17,18,1,2,3,4,13,14]);
($=this.$oj$Sht(14))&&$.$oj$Bct([-1,0,1,2,3,4,5]);
var i=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(n);
i&&i.$oj$Dct("Scales");
i&&i.$oj$Hct(1);
i&&i.$oj$Pct(1);
i&&i.$oj$Bct([0]);
var s=function($){
var t=j._cls.$oj$l8.$oj$N8($),o=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$qct(o);
};
s(0);
s(1);
i&&i.$oj$ict();
s(20);
s(21);
s(22);
s(23);
s(24);
s(25);
s(26);
o.$oj$ict();
o.$oj$zct(i);
o.$oj$ict();
o.$oj$yht(13);
};
return s;
});
j._registerClass({
$oj$Gyt:1
},{
$oj$ast:1
},function(s,r){
function e(){
j._cls.$oj$ast.call(this);
this.$oj$Yyt=this.$oj$Zyt=null;
this.$oj$ebt=this.$oj$tbt=this.$oj$nbt=0;
this.$oj$rbt=!1;
this.constructor=e;
this.$oj_id=++j._id;
}
s.$oj$Wst=function(){
return j._cls.$oj$Qyt;
};
r.$oj$tat=function(){
return 1;
};
r.$oj$nat=function(){
return 1;
};
r.$oj$Uut=function($){
var t=$==this.$oj$tbt;
this.$oj$pat(t,this.$oj$ebt,[$]);
};
r.$oj$sut=function(){
this.$oj$wat([this.$oj$tbt]);
};
r.$oj$yut=function(){
var s,r=this,e=this.$oj$Pst(),c=e&&e.$oj$qht(),u=e&&e.$oj$uft(),h=e&&e.$oj$uct(n);
this.$oj$uat((s={},i(s,t,u),i(s,o,c),i(s,n,h),s));
var a={};
$.each(c,function(t){
$.each(h,function($){
var o,i=(o=j._cls.$oj$j9.$oj$U9($,t,0))&&o.$oj$xn();
a[i]=i;
});
});
r.$oj$rbt=1==c.length&&1==h.length;
r.$oj$rbt&&e&&e.$oj$gut([j._cls.$oj$Sut.$oj$Eut(8)]);
r.$oj$ebt=e&&e.$oj$Iht();
r.$oj$nbt=e&&e.$oj$Att();
r.$oj$Zyt=h;
r.$oj$Yyt=$.values(a);
};
r.$oj$Tut=function(){
var t=this,o=[],i=this.$oj$nbt,n=$.isEqual(this.$oj$Zyt,[1]);
$.each(j._cls.$oj$Xat.$oj$Vat(),function(s){
var r=j._cls.$oj$l8.$oj$d8(s,i),e=j._cls.$oj$l8.$oj$v8(s,i);
n&&(r=r.toLowerCase());
o.push({
title:r,
ax:e,
tag:s,
active:$.includes(t.$oj$Yyt,s),
shortcut:j._cls.$oj$Xat.$oj$eft(s)
});
});
var s=j._cls.$oj$Xat.$oj$Jat(i,t.$oj$Yyt);
t.$oj$yat(o,0,{
"default":s
});
};
r.$oj$Nat=function($,t){
var j=$[o],i=$[n];
if(t){
var s=t[o],r=t[n];
if(j==s&&i==r&&!this.$oj$rbt)return!1;
}
return!0;
};
r.$oj$Qot=function($){
var i,s,r,e=$[t],c=$[o],u=$[n];
this.$oj$tbt=(i=j._cls.$oj$j9.$oj$U9(u,c,0))&&i.$oj$xn();
var h=j._cls.$oj$l8.$oj$N8(u);
1==u&&(h=h.toLowerCase());
var a=(s=new j._cls.$oj$Wnt())&&s.init();
a&&a.$oj$Jnt("{{blank}} "+h);
a&&a.$oj$Knt("Blank "+j._cls.$oj$l8.$oj$t4(u)+"?");
var l=(r=new j._cls.$oj$nnt())&&r.init();
l&&l.$oj$vnt(e);
l&&l.$oj$mnt(c);
l&&l.$oj$xnt(13);
l&&l.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(-6,6));
l&&l.$oj$ynt(a);
l&&l.$oj$Snt(5);
l&&l.$oj$knt([]);
this.$oj$mat();
this.$oj$Sat(l);
};
return e;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="MIDI",o="Chord",n="Inversion",s="Chords",r="Inversions",e="HighlightStyle",c=0,u=24;
j._registerClass({
$oj$ibt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Keyboard Chord Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("keyboard-chord");
t&&t.$oj$vdt([0,1,3,2,4,5,6,7,8,14],s);
t&&t.$oj$fdt(r);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$vdt([15,16,17,18,19],s);
t&&t.$oj$mdt([0,1],e);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
t.$oj$Gut=function(){
return"keyboard-chord";
};
t.$oj$rct=function(){
var $,t,o,i=this,n=($=new j._cls.$oj$Mct())&&$.$oj$Oct(s);
n&&n.$oj$Dct("Chords");
n&&n.$oj$Hct(1);
n&&n.$oj$Pct(1);
var c=function($){
var t=j._cls.$oj$l8.$oj$G8($),o=j._cls.$oj$l8.$oj$Y8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
19==$&&i&&i.$oj$Tct("Dominant 7th (Sus. 4th)");
n&&n.$oj$qct(i);
};
c(0);
c(1);
c(3);
c(2);
n&&n.$oj$ict();
c(4);
c(5);
c(6);
c(14);
c(8);
c(7);
n&&n.$oj$ict();
c(15);
c(16);
n&&n.$oj$ict();
c(17);
c(18);
c(19);
n&&n.$oj$Bct([0,1,3,2,4,5,6,7,8]);
i.$oj$ict();
i.$oj$zct(n);
var u=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r);
u&&u.$oj$Dct("Inversions");
u&&u.$oj$Pct(3);
u&&u.$oj$Hct(0);
u&&u.$oj$Bct(0);
u&&u.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
u&&u.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
i.$oj$zct(u);
i.$oj$ict();
var h=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(e);
h&&h.$oj$Dct("Highlight Style");
h&&h.$oj$Pct(0);
h&&h.$oj$Hct(0);
h&&h.$oj$Bct(1);
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$jct("Dot",1));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$jct("Entire Key",0));
i.$oj$zct(h);
i.$oj$ict();
i.$oj$yht(11);
};
return o;
});
j._registerClass({
$oj$sbt:1
},{
$oj$ast:1
},function(h,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$obt=this.$oj$ubt=0;
this.$oj$abt=!1;
this.constructor=l;
this.$oj_id=++j._id;
}
h.$oj$Wst=function(){
return j._cls.$oj$ibt;
};
a.$oj$egt=function($){
if(this.$oj$abt){
var t=j._cls.$oj$Q7.$oj$n2(this.$oj$ubt),o=j._cls.$oj$Q7.$oj$n2($);
if(t&&t.$oj$o2(o))return!0;
}
return $==this.$oj$ubt;
};
a.$oj$fbt=function($){
var i=$[t],s=$[o],r=$[n],e=j._cls.$oj$Cn.$oj$jn(0,u);
return j._cls.$oj$Xat.$oj$Gat(i,s,r,e);
};
a.$oj$tat=function(){
return 2;
};
a.$oj$nat=function(){
return 1;
};
a.$oj$Uut=function($){
var t=this.$oj$egt($);
this.$oj$pat(t,this.$oj$obt,[$]);
};
a.$oj$sut=function(){
this.$oj$wat([this.$oj$ubt]);
};
a.$oj$yut=function(){
var $,e,h=this.$oj$Pst(),a=h&&h.$oj$uct(s),l=h&&h.$oj$uct(r),f=(e=j._cls.$oj$Cn.$oj$jn(c,u))&&e.$oj$Rn(),v=l?[0,1,2,3]:[0];
this.$oj$uat(($={},i($,n,v),i($,o,a),i($,t,f),$));
this.$oj$abt=l;
};
a.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(s),n=o&&o.$oj$Iht();
2==n&&this.$oj$gat(2);
this.$oj$obt=n;
var r=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(t){
var o=j._cls.$oj$l8.$oj$G8(t),n=j._cls.$oj$l8.$oj$Q8(t),s=j._cls.$oj$l8.$oj$Y8(t),e=j._cls.$oj$l8.$oj$Z8(t);
r.push({
title:o,
"short":n,
symbol:e,
ax:s,
tag:t,
active:$.includes(i,t)
});
});
var e=$.includes(i,17)||$.includes(i,18)||$.includes(i,19)||$.includes(i,14)||$.includes(i,15)||$.includes(i,16),c=e?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],u=e?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
t.$oj$yat(r,1,{
"default":c,
landscape:u
});
};
a.$oj$Nat=function($,i){
var s=$[t],r=$[o],e=$[n];
if(i){
var c=i[t],u=i[o],h=i[n];
if(s==c&&r==u&&e==h)return!1;
}
if(!j._cls.$oj$f8.$oj$c4(e,r))return!1;
return!0;
};
a.$oj$Qot=function(t){
var i,n,s=this;
this.$oj$mat();
var r=(i=this.$oj$Pst())&&i.$oj$uct(e),h=(n=new j._cls.$oj$nit())&&n.init();
h&&h.$oj$ait(j._cls.$oj$Cn.$oj$jn(c,u));
h&&h.$oj$fit(r);
$.each(this.$oj$fbt(t),function($){
h&&h.$oj$hit($,0);
});
s.$oj$xat(h);
s.$oj$ubt=t[o];
};
a.$oj$hat=function(t){
var o,i=(o=new j._cls.$oj$mr())&&o.$oj$Lr(2);
$.each(this.$oj$fbt(t),function($){
i&&i.$oj$jr($+48,0,1);
});
return i;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Pitch",o="ActiveTags",n="UseReference",s="ReferenceNote",r="AnyOctave";
j._registerClass({
$oj$lbt:1
},{
$oj$Tlt:1
},function(t,i){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Keyboard Ear Training";
};
i.$oj$Gut=function(){
return"ear-keyboard";
};
t.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("ear-keyboard");
t&&t.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11],o);
t&&t.$oj$pdt(s,n);
t&&t.$oj$mdt([1e3,750,500,333,250,125],"Speed");
t&&t.$oj$cdt();
t&&t.$oj$hdt();
t&&t.$oj$fdt(r);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
i.$oj$rct=function(){
var t,i,e,c,u,h=this,a=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(o);
a&&a.$oj$Dct("Keys");
a&&a.$oj$Hct(1);
a&&a.$oj$Bct([0,2,4,5,7,9,11]);
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(2));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(3));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(4));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(5));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(6));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(7));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(8));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(9));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(10));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(11));
$.each(a&&a.$oj$Kft(),function($){
var t=$&&$.$oj$xn(),o=j._cls.$oj$l8.$oj$O8(t,0,0,!1),i=j._cls.$oj$l8.$oj$L8(t,0,0,!1),n=j._cls.$oj$l8.$oj$A8(t,0,0,!1);
$&&$.$oj$Tct(n);
$&&$.$oj$xct("musictype:"+i);
$&&$.$oj$Eit(o);
});
h.$oj$zct(a);
h.$oj$ict();
var l=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(n);
l&&l.$oj$Dct("Reference Note");
l&&l.$oj$Hct(0);
l&&l.$oj$Pct(3);
l&&l.$oj$Bct(!0);
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
h.$oj$zct(l);
var f=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(s);
f&&f.$oj$Dct("Pitch");
f&&f.$oj$Hct(4);
f&&f.$oj$Pct(2);
f&&f.$oj$Bct(60);
h.$oj$zct(f);
h.$oj$ict();
h.$oj$yht(16);
h.$oj$ict();
h.$oj$yht(6);
h.$oj$yht(7);
var v=j._cls.$oj$Tlt.$oj$nct(2);
(c=h.$oj$Zft(v))&&c.$oj$Bct(j._cls.$oj$Cn.$oj$jn(60,72));
var d=(u=new j._cls.$oj$Mct())&&u.$oj$Oct(r);
d&&d.$oj$Dct("Require Octave");
d&&d.$oj$Pct(4);
d&&d.$oj$Hct(0);
d&&d.$oj$Bct(1);
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
h.$oj$ict();
h.$oj$zct(d);
h.$oj$ict();
h.$oj$yht(12);
$.each(h.$oj$Tht(7),function($){
$&&$.$oj$qvt("Range determines the available pitches for the question note.");
});
};
i.$oj$cbt=function($,t){
var o=$;
if(!t||!t.$oj$qn($))for(var j=$,i=$,n=0;10>n;n++){
j+=12;
i-=12;
if(t&&t.$oj$qn(i)){
o=i;
break;
}
if(t&&t.$oj$qn(j)){
o=j;
break;
}
}
return o;
};
i.$oj$hbt=function(){
var $=this.$oj$Ect(),t=j._cls.$oj$Mr.$oj$Or($),o=this.$oj$Zft(s),i=o&&o.$oj$Wft(),n=t&&t.$oj$Kr();
if(!n||!n.$oj$qn(i)){
var r=this.$oj$cbt(i,t&&t.$oj$Kr());
o&&o.$oj$Bct(r);
o&&o.$oj$jht();
}
o&&o.$oj$Gct($);
};
i.$oj$Agt=function(){
var $=this.$oj$Zft(n),t=this.$oj$Zft(s),o=$&&$.$oj$Wft();
this.$oj$bct(t,!o);
};
i.$oj$vct=function($){
var t=$&&$.$oj$xht(),o=$&&$.$oj$gct();
6==t?this.$oj$hbt():o==n&&this.$oj$Agt();
};
return e;
});
j._registerClass({
$oj$pbt:1
},{
$oj$ast:1
},function(e,c){
function u(){
j._cls.$oj$ast.call(this);
this.$oj$dbt=this.$oj$vbt=this.$oj$mbt=this.$oj$gbt=null;
this.$oj$ybt=this.$oj$bbt=this.$oj$wbt=this.$oj$Ebt=0;
this.$oj$Sbt=this.$oj$xbt=this.$oj$Tbt=!1;
this.constructor=u;
this.$oj_id=++j._id;
}
e.$oj$Wst=function(){
return j._cls.$oj$lbt;
};
c.$oj$Nbt=function($){
var t,o,i=(t=new j._cls.$oj$mr())&&t.$oj$Lr((o=this.$oj$Pst())&&o.$oj$Ect());
i&&i.$oj$jr($,0,this.$oj$Ebt);
return i;
};
c.$oj$Cbt=function($,t){
var o=[];
if(t)for(var j=0;128>=j;j++)j%12==$%12&&o.push(j);else o.push($);
return o;
};
c.$oj$kbt=function(){
var $;
this.$oj$Lot(2009,{
"question-sequence":($=this.$oj$cat())&&$.$oj$aut(),
"reference-sequence":this.$oj$gbt&&this.$oj$gbt.$oj$aut(),
"reference-label":this.$oj$mbt,
"reference-ax-label":this.$oj$vbt
});
};
c.$oj$tat=function(){
return 5;
};
c.$oj$nat=function(){
return 2;
};
c.$oj$Uut=function($){
var t=void 0;
t=this.$oj$xbt?$%12==this.$oj$bbt%12:$==this.$oj$bbt;
this.$oj$pat(t,this.$oj$ybt,[$]);
};
c.$oj$sut=function(){
var $=this.$oj$Cbt(this.$oj$bbt,this.$oj$xbt);
this.$oj$wat($);
};
c.$oj$iat=function($,t){
if(3011==$){
var o=t["playing"],j=t["sequence-id"];
if(j==(this.$oj$gbt&&this.$oj$gbt.$oj$Tr()))if(o){
var i=this.$oj$Cbt(this.$oj$wbt,this.$oj$xbt),n=this.$oj$gbt&&this.$oj$gbt.$oj$Nr();
this.$oj$Lot(2014,{
reference:!0,
duration:n,
object:i
});
}else if(this.$oj$Tbt){
this.$oj$Tbt=!1;
this.$oj$vat(this.$oj$cat());
}
}else u.$oj_super.prototype.$oj$iat.call(this,$,t);
};
c.$oj$yut=function(){
var n,s=this,r=this.$oj$Pst(),e=r&&r.$oj$Ect(),c=r&&r.$oj$Fht(),u=r&&r.$oj$uct(o),h=(n=j._cls.$oj$Xat.$oj$Yat(e,c))&&n.$oj$Rn(),a=$.filter(h,function(t){
return $.includes(u,t%12);
}),l=[];
s.$oj$Sbt=1==a.length;
s.$oj$dbt=a;
s.$oj$Sbt?l.push(5):0==a.length&&l.push(1);
s.$oj$uat(i({},t,a));
r&&r.$oj$gut(j._cls.$oj$Sut.$oj$fvt(l));
};
c.$oj$Tut=function(){
var t=this.$oj$Pst(),i=t&&t.$oj$Ect(),e=(t&&t.$oj$Att(),t&&t.$oj$uct(n)),c=(t&&t.$oj$uct(o),
t&&t.$oj$uct(r)),u=t&&t.$oj$Uht(),h=t&&t.$oj$Iht();
this.$oj$gat(i);
this.$oj$Ebt=u;
this.$oj$xbt=c;
this.$oj$ybt=h;
if(e){
this.$oj$wbt=t&&t.$oj$uct(s);
this.$oj$Tbt=!0;
this.$oj$gbt=this.$oj$Nbt(this.$oj$wbt);
this.$oj$mbt=j._cls.$oj$l8.$oj$L8(this.$oj$wbt,0,0,!this.$oj$xbt);
this.$oj$vbt=j._cls.$oj$l8.$oj$O8(this.$oj$wbt,0,0,!this.$oj$xbt);
}else{
this.$oj$wbt=0;
this.$oj$Tbt=!1;
this.$oj$gbt=null;
this.$oj$mbt=null;
this.$oj$vbt=null;
}
this.$oj$gat(i);
if(this.$oj$xbt)this.$oj$bat(null);else{
var a=this.$oj$dbt.slice(0);
e&&a.push(this.$oj$wbt);
var l=j._cls.$oj$Cn.$oj$jn($.min(a),$.max(a)),f=j._cls.$oj$Xat.$oj$sft(l);
this.$oj$bat(f);
}
};
c.$oj$Nat=function($,o){
var j=$[t];
if(o){
var i=o[t];
if(j==i)return this.$oj$Sbt;
}
return!0;
};
c.$oj$hat=function($){
return this.$oj$Nbt($[t]);
};
c.$oj$Qot=function($){
this.$oj$kbt();
this.$oj$bbt=$[t];
this.$oj$mat();
this.$oj$vat(this.$oj$Tbt?this.$oj$gbt:this.$oj$cat());
};
return u;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="MIDI",o="Interval",n="Intervals",s="HighlightStyle",r="ButtonLayout",e=0,c=24;
j._registerClass({
$oj$Lbt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Keyboard Interval Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("keyboard-interval");
t&&t.$oj$vdt([1,2,3,4,5,6,7,8,9,10,11,12],n);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$mdt([0,1],s);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$fdt(r);
return t;
};
t.$oj$Gut=function(){
return"keyboard-interval";
};
t.$oj$rct=function(){
var $,t,o,i,e,c=this,u=($=new j._cls.$oj$Mct())&&$.$oj$Oct(n),h=[],a=function($){
var t=j._cls.$oj$l8.$oj$J8($),o=j._cls.$oj$l8.$oj$K8($),i=j._cls.$oj$Fct.$oj$jct(t,$);
i&&i.$oj$Eit(o);
u&&u.$oj$qct(i);
h.push($);
};
u&&u.$oj$Dct("Intervals");
u&&u.$oj$Hct(1);
u&&u.$oj$Pct(1);
a(1);
a(2);
a(3);
a(4);
a(5);
a(6);
a(7);
a(8);
a(9);
a(10);
a(11);
a(12);
u&&u.$oj$Bct(h);
c.$oj$ict();
c.$oj$zct(u);
var l=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r);
l&&l.$oj$Dct("Button Layout");
l&&l.$oj$Hct(0);
l&&l.$oj$Bct(0);
l&&l.$oj$Pct(0);
l&&l.$oj$ict();
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Default",0));
(o=l&&l.$oj$ect())&&o.$oj$aht("Use more rows with wider buttons.");
l&&l.$oj$ict();
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Alternate",1));
(i=l&&l.$oj$ect())&&i.$oj$aht("Use fewer rows grouped by interval quality.");
c.$oj$zct(l);
c.$oj$ict();
var f=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(s);
f&&f.$oj$Dct("Highlight Style");
f&&f.$oj$Pct(0);
f&&f.$oj$Hct(0);
f&&f.$oj$Bct(1);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Dot",1));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Entire Key",0));
c.$oj$zct(f);
c.$oj$ict();
c.$oj$yht(11);
};
return o;
});
j._registerClass({
$oj$Abt:1
},{
$oj$ast:1
},function(u,h){
function a(){
j._cls.$oj$ast.call(this);
this.$oj$Obt=null;
this.$oj$Mbt=this.$oj$Dbt=0;
this.constructor=a;
this.$oj_id=++j._id;
}
u.$oj$Wst=function(){
return j._cls.$oj$Lbt;
};
h.$oj$fbt=function($){
var j=$[t],i=$[o];
j+i>c&&(j-=12);
return[j,j+i];
};
h.$oj$tat=function(){
return 2;
};
h.$oj$nat=function(){
return 1;
};
h.$oj$Uut=function($){
this.$oj$pat($==this.$oj$Dbt,this.$oj$Mbt,[$]);
};
h.$oj$sut=function(){
this.$oj$wat([this.$oj$Dbt]);
};
h.$oj$yut=function(){
var $,s,r=this.$oj$Pst(),u=r&&r.$oj$uct(n),h=(s=j._cls.$oj$Cn.$oj$jn(e,c))&&s.$oj$Rn();
this.$oj$uat(($={},i($,t,h),i($,o,u),$));
this.$oj$Obt=u;
};
h.$oj$Tut=function(){
var t=this.$oj$Pst(),o=(t&&t.$oj$uct(r))>0,i=[];
this.$oj$Mbt=t&&t.$oj$Iht();
2==this.$oj$Mbt&&this.$oj$gat(2);
for(var n=0;13>=n;n++){
var s=j._cls.$oj$l8.$oj$X8(n),e=j._cls.$oj$l8.$oj$V8(n),c=j._cls.$oj$l8.$oj$K8(n),u=j._cls.$oj$Xat.$oj$nft(n);
o||(0===n||6==n||12==n)&&(e=j._cls.$oj$l8.$oj$J8(n));
i.push({
title:e,
ax:c,
symbol:s,
tag:n,
active:$.includes(this.$oj$Obt,n),
shortcut:u
});
}
var h=void 0,a=void 0,l=$.includes(this.$oj$Obt,12);
if(o){
var f=[2,4,5,7,9,11],v=[1,3,null,6,8,10];
if(l){
f.push(12);
v.push(null);
}
h=a=[f,v];
}else{
h=[[1,2,3,4],[5,6,7],[8,9,10,11]];
l&&h.push([null,12,null]);
a=[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13]];
}
this.$oj$yat(i,1,{
"default":h,
landscape:a
});
};
h.$oj$Nat=function($,j){
var i=$[t],n=$[o];
if(j){
var s=j[t],r=j[o];
if(i==s&&n==r)return!1;
}
return!0;
};
h.$oj$Qot=function(t){
var i,n,r=this;
this.$oj$mat();
var u=(i=this.$oj$Pst())&&i.$oj$uct(s),h=(n=new j._cls.$oj$nit())&&n.init();
h&&h.$oj$ait(j._cls.$oj$Cn.$oj$jn(e,c));
h&&h.$oj$fit(u);
$.each(this.$oj$fbt(t),function($){
h&&h.$oj$hit($,0);
});
r.$oj$xat(h);
r.$oj$Dbt=t[o];
};
h.$oj$hat=function(t){
var o,i=(o=new j._cls.$oj$mr())&&o.$oj$Lr(2);
$.each(this.$oj$fbt(t),function($){
i&&i.$oj$jr($+48,0,1);
});
return i;
};
return a;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="MIDI",o="HighlightStyle",n=24;
j._registerClass({
$oj$Pbt:1
},{
$oj$Tlt:1
},function($,t){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Keyboard Note Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("keyboard");
t&&t.$oj$vdt([6,16,36,46,56,5,15,25,35,45,55,65,14,24,44,54,64,26,66,4,34],"Note");
t&&t.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$mdt([0,1],o);
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
t&&t.$oj$jpt(function($,t){
t.length<=7&&t.splice(4,0,0);
});
return t;
};
t.$oj$Gut=function(){
return"keyboard";
};
t.$oj$rct=function(){
var $;
this.$oj$yht(17);
this.$oj$ict();
var t=($=new j._cls.$oj$Mct())&&$.$oj$Oct(o);
t&&t.$oj$Dct("Highlight Style");
t&&t.$oj$Pct(0);
t&&t.$oj$Hct(0);
t&&t.$oj$Bct(1);
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Dot",1));
t&&t.$oj$qct(j._cls.$oj$Fct.$oj$jct("Entire Key",0));
this.$oj$zct(t);
this.$oj$ict();
this.$oj$yht(5);
this.$oj$ict();
this.$oj$yht(11);
};
return i;
});
j._registerClass({
$oj$Hbt:1
},{
$oj$ast:1
},function(s,r){
function e(){
j._cls.$oj$ast.call(this);
this.$oj$Bbt=null;
this.$oj$jbt=this.$oj$Fbt=this.$oj$Ibt=0;
this.constructor=e;
this.$oj_id=++j._id;
}
s.$oj$Wst=function(){
return j._cls.$oj$Pbt;
};
r.$oj$tat=function(){
return 2;
};
r.$oj$nat=function(){
return 1;
};
r.$oj$Uut=function($){
var t,o=(t=new j._cls.$oj$Mt())&&t.$oj$Kt($,4),i=(o&&o.$oj$an())%12==this.$oj$Fbt;
this.$oj$pat(i,this.$oj$jbt,[$]);
};
r.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Bbt,function($){
var i=j._cls.$oj$Mt.$oj$Jt($,4);
(i&&i.$oj$an())%12==t.$oj$Fbt&&o.push($);
});
t.$oj$wat(o);
};
r.$oj$yut=function(){
var o=this,s=this.$oj$Pst(),r=s&&s.$oj$zht(),e=[],c=[];
$.each(r,function($){
var t,o=(t=new j._cls.$oj$Mt())&&t.$oj$Kt($,4),i=o&&o.$oj$an();
c[i%12]=!0;
});
for(var u=0;12>u;u++)if(c[u])for(var h=u;n>=h;h+=12)e.push(h);
o.$oj$uat(i({},t,e));
o.$oj$Bbt=r;
};
r.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$Att(),n=o&&o.$oj$Iht();
this.$oj$jbt=n;
this.$oj$Ibt=i;
2==n&&this.$oj$gat(2);
var s=$.map(j._cls.$oj$Xat.$oj$Vat(),function(o){
var n=j._cls.$oj$l8.$oj$d8(o,i),s=j._cls.$oj$l8.$oj$v8(o,i),r=j._cls.$oj$Xat.$oj$eft(o);
return{
title:n,
ax:s,
tag:o,
active:$.includes(t.$oj$Bbt,o),
shortcut:r
};
}),r=j._cls.$oj$Xat.$oj$Jat(i,t.$oj$Bbt);
t.$oj$yat(s,0,{
"default":r
});
};
r.$oj$Nat=function($,o){
var j=$[t];
if(o&&j==o[t])return!1;
return!0;
};
r.$oj$Qot=function($){
var i,s,r=$[t];
this.$oj$mat();
var e=(i=this.$oj$Pst())&&i.$oj$uct(o),c=(s=new j._cls.$oj$nit())&&s.init();
c&&c.$oj$ait(j._cls.$oj$Cn.$oj$jn(0,n));
c&&c.$oj$fit(e);
c&&c.$oj$hit(r,0);
this.$oj$xat(c);
this.$oj$Fbt=r%12;
};
r.$oj$hat=function($){
var o,i=$[t],n=(o=new j._cls.$oj$mr())&&o.$oj$Lr(2);
n&&n.$oj$jr(i+48,0,1);
return n;
};
return e;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Accidentals",o="AnyOctave",n="Helpers",s="Positions",r="UsesNoteFilter",e="PairIndex",c="KeySignature",u="NoteQuality";
j._registerClass({
$oj$qbt:1
},{
$oj$Tlt:1
},function(i,e){
function c(){
j._cls.$oj$Tlt.call(this);
this.constructor=c;
this.$oj_id=++j._id;
}
i.$oj$Kut=function(){
return"Keyboard Reverse Identification";
};
i.$oj$oct=function(){
var i,e=(i=new j._cls.$oj$Tpt())&&i.init(),c=$.without(j._cls.$oj$Xat.$oj$Vat(),66);
e&&e.$oj$edt("keyboard-reverse");
e&&e.$oj$tdt();
e&&e.$oj$sdt();
e&&e.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
e&&e.$oj$wdt(function(o,j,i){
var n=j[t],s=j[r],e=j["Note"],u=s&&$.includes(e,66);
i&&i.$oj$Zdt((n?1:0)|(s?16:0)|(u?8:0));
s&&i&&i.$oj$Ydt(c,e);
},function($,o,j){
var i=j&&j.$oj$Wdt(),n=(1&i)>0,s=(16&i)>0,e=(8&i)>0,u=[];
if(s){
u=j&&j.$oj$zdt(c);
e&&u.push(66);
}
o[t]=n?1:0;
o[r]=s?1:0;
o["Note"]=u;
});
e&&e.$oj$fdt(o);
e&&e.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
e&&e.$oj$gdt();
e&&e.$oj$ydt();
e&&e.$oj$bdt();
e&&e.$oj$mdt([0,1,2],s);
e&&e.$oj$wdt(function($,t,o){
var j=t[n];
if(j>0){
o&&o.$oj$qgt(!0);
o&&o.$oj$Zdt(j-1);
}else{
o&&o.$oj$qgt(!1);
o&&o.$oj$Zdt(0);
}
},function($,t,o){
var j=o&&o.$oj$Rgt(),i=o&&o.$oj$Wdt();
j&&(t[n]=i+1);
});
e&&e.$oj$jpt(function($,t){
if(t.length<=8){
var o=t[0];
0===o?t.splice(0,1,1):1==o?t.splice(0,1,2):2==o?t.splice(0,1,4):3==o?t.splice(0,1,8):4==o?t.splice(0,1,16,1):5==o?t.splice(0,1,16,2):6==o&&t.splice(0,1,16,4);
}
});
return e;
};
e.$oj$Gut=function(){
return"keyboard-reverse";
};
e.$oj$rct=function(){
var $,i,e,c,u,h,a;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(4);
var l=($=new j._cls.$oj$Mct())&&$.$oj$Oct(s);
l&&l.$oj$Dct("Positions");
l&&l.$oj$Pct(0);
l&&l.$oj$Hct(0);
l&&l.$oj$Bct(0);
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines and Spaces",0));
l&&l.$oj$ict();
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines Only",1));
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Spaces Only",2));
this.$oj$zct(l);
this.$oj$ict();
this.$oj$yht(14);
(i=this.$oj$Sht(14))&&i.$oj$Bct([0]);
var f=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(o);
f&&f.$oj$Dct("Require Octave");
f&&f.$oj$Pct(4);
f&&f.$oj$Hct(0);
f&&f.$oj$Bct(1);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(f);
var v=(c=new j._cls.$oj$Mct())&&c.$oj$Oct(n);
v&&v.$oj$Dct("Helpers");
v&&v.$oj$Pct(0);
v&&v.$oj$Hct(0);
v&&v.$oj$Bct(0);
var d=j._cls.$oj$Fct.$oj$jct("Off",0),_=j._cls.$oj$Fct.$oj$jct("Letters",1),g=j._cls.$oj$Fct.$oj$lpt("Solf&egrave;ge (Fixed, Do-Si)","Fixed Do-Si",2),p=j._cls.$oj$Fct.$oj$lpt("Solf&egrave;ge (Fixed, Do-Ti)","Fixed Do-Ti",3),y=j._cls.$oj$Fct.$oj$lpt("Solf&egrave;ge (Fixed, Ut-Si)","Fixed Ut-Si",4),m=j._cls.$oj$Fct.$oj$lpt("Solf&egrave;ge (Fixed, Ut-Ti)","Fixed Ut-Ti",5),w=j._cls.$oj$Fct.$oj$jct("German",15);
g&&g.$oj$Eit("Soulfedge Fixed Doe See");
p&&p.$oj$Eit("Soulfedge Fixed Doe Tea");
y&&y.$oj$Eit("Soulfedge Fixed Oot See");
m&&m.$oj$Eit("Soulfedge Fixed Oot Tea");
g&&g.$oj$Rct("Fixed Doe See");
p&&p.$oj$Rct("Fixed Doe Tea");
y&&y.$oj$Rct("Fixed Oot See");
m&&m.$oj$Rct("Fixed Oot Tea");
v&&v.$oj$qct(d);
v&&v.$oj$ict();
v&&v.$oj$qct(_);
v&&v.$oj$ict();
v&&v.$oj$qct(g);
v&&v.$oj$qct(p);
v&&v.$oj$qct(y);
v&&v.$oj$qct(m);
v&&v.$oj$ict();
v&&v.$oj$qct(w);
this.$oj$ict();
this.$oj$zct(v);
this.$oj$ict();
var b=(u=new j._cls.$oj$Mct())&&u.$oj$Oct(t);
b&&b.$oj$Dct("Accidentals");
b&&b.$oj$Pct(3);
b&&b.$oj$Hct(0);
b&&b.$oj$Bct(1);
b&&b.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
b&&b.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(b);
var S=(h=new j._cls.$oj$Mct())&&h.$oj$Oct(r);
S&&S.$oj$Dct("Note Filter");
S&&S.$oj$Pct(3);
S&&S.$oj$Hct(0);
S&&S.$oj$Bct(0);
S&&S.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
S&&S.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(S);
this.$oj$yht(17);
(a=this.$oj$Sht(17))&&a.$oj$Bct(j._cls.$oj$Xat.$oj$Vat());
this.$oj$ict();
this.$oj$yht(11);
};
e.$oj$Agt=function(){
var $=this.$oj$Zft("Note"),t=this.$oj$uct(r);
this.$oj$bct($,!t);
};
e.$oj$vct=function($){
($&&$.$oj$gct())==r&&this.$oj$Agt();
};
return c;
});
j._registerClass({
$oj$Rbt:1
},{
$oj$ast:1
},function(h,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$Ubt=this.$oj$zbt=this.$oj$Wbt=this.$oj$Xbt=this.$oj$Vbt=null;
this.$oj$Jbt=this.$oj$Kbt=0;
this.$oj$Qbt=this.$oj$Gbt=!1;
this.constructor=l;
this.$oj_id=++j._id;
}
h.$oj$Wst=function(){
return j._cls.$oj$qbt;
};
a.$oj$Ybt=function($){
var t,o,i=$[e],n=$[c],s=$[u],r=this.$oj$zbt[i],h=r.clef,a=r.position;
return void 0!==s?(t=new j._cls.$oj$Mt())&&t.$oj$tn(h,a,s):(o=new j._cls.$oj$Mt())&&o.$oj$rn(h,a,n);
};
a.$oj$tat=function(){
return 1;
};
a.$oj$nat=function(){
return 2;
};
a.$oj$Uut=function($){
var t=void 0;
t=this.$oj$Gbt?$%12==this.$oj$Kbt%12:$==this.$oj$Kbt;
this.$oj$pat(t,this.$oj$Jbt,[$]);
};
a.$oj$sut=function(){
var $=[];
if(this.$oj$Gbt)for(var t=0;128>=t;t++)t%12==this.$oj$Kbt%12&&$.push(t);else $.push(this.$oj$Kbt);
this.$oj$wat($);
};
a.$oj$yut=function(){
var h,a,l,f=this,v=this.$oj$Pst(),d=(v&&v.$oj$uft(),v&&v.$oj$qht()),_=v&&v.$oj$uct(t),g=v&&v.$oj$uct(s),p=[],y=v&&v.$oj$uct(r)?v&&v.$oj$uct("Note"):null,m=[],w=j._cls.$oj$Xat.$oj$oft(v,g,null);
if(_>0){
m.push(-1);
m.push(0);
m.push(1);
}
(a=this.$oj$Hst())&&a.$oj$aat(w.length?(h={},i(h,e,w.length),i(h,c,d),i(h,u,m),h):null);
this.$oj$zbt=w;
this.$oj$Jbt=v&&v.$oj$Iht();
this.$oj$Qbt=1==w.length&&1==d.length&&m.length<2;
0==w.length?p.push(18):this.$oj$Qbt&&p.push(4);
this.$oj$Vbt=v&&v.$oj$Grt();
var b=v&&v.$oj$uct(n);
if(b){
this.$oj$Wbt=(l=new j._cls.$oj$Qnt())&&l.init();
this.$oj$Wbt&&this.$oj$Wbt.$oj$Znt(b-1);
this.$oj$Wbt&&this.$oj$Wbt.$oj$ert(g);
}else this.$oj$Wbt=null;
this.$oj$Gbt=v&&v.$oj$uct(o);
this.$oj$Ubt=y;
if(this.$oj$Gbt)this.$oj$Xbt=null;else{
var S=[];
$.each(v&&v.$oj$uft(),function($){
var t=v&&v.$oj$aft($),o=j._cls.$oj$Mt.$oj$in($,t&&t.$oj$Bn(),0),i=j._cls.$oj$Mt.$oj$in($,t&&t.$oj$Hn(),0),n=j._cls.$oj$Cn.$oj$jn(o&&o.$oj$an(),i&&i.$oj$an());
S.push(n);
});
var M=j._cls.$oj$Cn.$oj$Pn(S);
f.$oj$Xbt=j._cls.$oj$Xat.$oj$sft(M);
}
v&&v.$oj$gut(j._cls.$oj$Sut.$oj$fvt(p));
};
a.$oj$Tut=function(){
this.$oj$Pst();
2==this.$oj$Jbt&&this.$oj$gat(2);
this.$oj$bat(this.$oj$Xbt);
};
a.$oj$Nat=function(t,o,i){
var n,s,r=t[e],h=t[c],a=t[u];
if(o){
var l=o[e],f=o[c],v=o[u];
if(r==l&&h==f&&a==v){
if(i>.5){
this.$oj$Qbt=!0;
0==$.size((n=this.$oj$Pst())&&n.$oj$but())&&(s=this.$oj$Pst())&&s.$oj$gut([j._cls.$oj$Sut.$oj$Eut(4)]);
}
if(!this.$oj$Qbt)return!1;
}
}
if(!this.$oj$Gbt||this.$oj$Ubt){
var d=this.$oj$Ybt(t);
if(!(this.$oj$Gbt||this.$oj$Xbt&&this.$oj$Xbt.$oj$qn(d&&d.$oj$an())))return!1;
if(this.$oj$Ubt&&!$.includes(this.$oj$Ubt,d&&d.$oj$xn()))return!1;
}
return!0;
};
a.$oj$Qot=function($){
var t,o=$[e],i=$[c],n=this.$oj$zbt[o],s=this.$oj$Ybt($);
this.$oj$Kbt=s&&s.$oj$an();
var r=(t=new j._cls.$oj$nnt())&&t.init();
r&&r.$oj$vnt(n.clef);
r&&r.$oj$mnt(i);
r&&r.$oj$Ent(this.$oj$Wbt);
r&&r.$oj$xnt(15.5);
r&&r.$oj$Tnt(this.$oj$Vbt);
r&&r.$oj$knt([s]);
this.$oj$mat();
this.$oj$Sat(r);
};
a.$oj$hat=function($){
var t,o=this.$oj$Ybt($),i=(t=new j._cls.$oj$mr())&&t.$oj$Lr(2);
i&&i.$oj$jr(o&&o.$oj$an(),0,1);
return i;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Scale",o="Filter",n="HighlightStyle",s="PairIndexKey",r=0,e=24;
j._registerClass({
$oj$Zbt:1
},{
$oj$Tlt:1
},function($,i){
function s(){
j._cls.$oj$Tlt.call(this);
this.constructor=s;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Keyboard Scale Identification";
};
$.$oj$oct=function(){
var $,i=($=new j._cls.$oj$Tpt())&&$.init(),s=j._cls.$oj$Xat.$oj$Vat(),r=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
i&&i.$oj$edt("keyboard-scale");
i&&i.$oj$vdt([0,10,11,12,20,21,22,23,24,25,26],t);
i&&i.$oj$wdt(function($,t,j){
if(1==t[o]){
j&&j.$oj$qgt(!0);
j&&j.$oj$Ydt(s,t["Note"]);
}else{
j&&j.$oj$qgt(!1);
j&&j.$oj$Ydt(r,t["KeySignature"]);
}
},function($,t,j){
if(j&&j.$oj$Rgt()){
t[o]=1;
t["Note"]=j&&j.$oj$zdt(s);
}else{
t[o]=0;
t["KeySignature"]=j&&j.$oj$zdt(r);
}
});
i&&i.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
i&&i.$oj$mdt([0,1],n);
i&&i.$oj$gdt();
i&&i.$oj$ydt();
i&&i.$oj$bdt();
return i;
};
i.$oj$Gut=function(){
return"keyboard-scale";
};
i.$oj$rct=function(){
var $,i,s,r,e,c=this;
function u($){
var t=j._cls.$oj$l8.$oj$N8($);
return j._cls.$oj$Fct.$oj$jct(t,$);
}
var h=($=new j._cls.$oj$Mct())&&$.$oj$Oct(t);
h&&h.$oj$Dct("Scales");
h&&h.$oj$Hct(1);
h&&h.$oj$Pct(1);
h&&h.$oj$Bct([0,10,11,12]);
h&&h.$oj$qct(u(0));
h&&h.$oj$qct(u(10));
h&&h.$oj$qct(u(11));
h&&h.$oj$qct(u(12));
h&&h.$oj$ict();
h&&h.$oj$qct(u(20));
h&&h.$oj$qct(u(21));
h&&h.$oj$qct(u(22));
h&&h.$oj$qct(u(23));
h&&h.$oj$qct(u(24));
h&&h.$oj$qct(u(25));
h&&h.$oj$qct(u(26));
c.$oj$ict();
c.$oj$zct(h);
var a=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(o);
a&&a.$oj$Dct("Filter");
a&&a.$oj$Hct(0);
a&&a.$oj$Pct(0);
a&&a.$oj$Bct(0);
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Key Signature",0));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Tonic",1));
c.$oj$ict();
c.$oj$zct(a);
c.$oj$yht(14);
(s=c.$oj$Sht(14))&&s.$oj$Bct([-3,-2,-1,0,1,2,3]);
c.$oj$yht(17);
(r=c.$oj$Sht(17))&&r.$oj$Dct("Tonics");
c.$oj$ict();
var l=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(n);
l&&l.$oj$Dct("Highlight Style");
l&&l.$oj$Pct(0);
l&&l.$oj$Hct(0);
l&&l.$oj$Bct(1);
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Dot",1));
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$jct("Entire Key",0));
c.$oj$zct(l);
c.$oj$ict();
c.$oj$yht(11);
};
i.$oj$vct=function($){
var t=$&&$.$oj$gct();
if(t==o){
var j=0==this.$oj$uct(o);
this.$oj$bct(this.$oj$Zft("KeySignature"),!j);
this.$oj$bct(this.$oj$Zft("Note"),j);
}
};
return s;
});
j._registerClass({
$oj$ewt:1
},{
$oj$ast:1
},function(c,u){
function h(){
j._cls.$oj$ast.call(this);
this.$oj$twt=this.$oj$nwt=null;
this.$oj$rwt=this.$oj$iwt=0;
this.constructor=h;
this.$oj_id=++j._id;
}
c.$oj$Wst=function(){
return j._cls.$oj$Zbt;
};
u.$oj$Jgt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
u.$oj$tat=function(){
return 2;
};
u.$oj$nat=function(){
return 1;
};
u.$oj$Uut=function($){
var t=j._cls.$oj$j9.$oj$V9($,this.$oj$iwt);
this.$oj$pat(t,this.$oj$rwt,[$]);
};
u.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Jgt(),function($){
j._cls.$oj$j9.$oj$V9($,t.$oj$iwt)&&o.push($);
});
t.$oj$wat(o);
};
u.$oj$yut=function(){
var n=this,r=this.$oj$Pst(),e=r&&r.$oj$qht(),c=r&&r.$oj$zht(),u=r&&r.$oj$uct(t),h=r&&r.$oj$uct(o),a=[],l=j._cls.$oj$Xat.$oj$fft(u,h,e,c),f={};
$.each(l,function($){
var t,o=j._cls.$oj$j9.$oj$W9($.scale),i=((t=j._cls.$oj$Mt.$oj$Jt($.tonic,0))&&t.$oj$an())%12;
f[i+","+o]={
s:o,
m:i
};
});
1==h&&0==l.length&&a.push(17);
var v=$.values(f);
1==v.length?a.push(10):0==v.length&&a.push(1);
n.$oj$nwt=v;
n.$oj$uat(i({},s,v.length));
r&&r.$oj$gut(j._cls.$oj$Sut.$oj$fvt(a));
};
u.$oj$Tut=function(){
var o=this,i=this.$oj$Pst(),n=i&&i.$oj$uct(t),s=i&&i.$oj$Iht();
2==s&&this.$oj$gat(2);
this.$oj$rwt=s;
var r=[],e=!1,c=!1,u=!1;
$.each(n,function($){
0==$||10==$?e=!0:11==$||12==$?c=!0:u=!0;
});
$.each(o.$oj$Jgt(),function(t){
var o=j._cls.$oj$l8.$oj$N8(t);
r.push({
title:o,
tag:t,
active:$.includes(n,t)
});
});
var h=null,a=null;
if(!e||c||u){
var l=[];
e&&l.push([0,10]);
c&&l.push([11,12]);
if(u){
l.push([20,21,22,23]);
l.push([24,25,26]);
}
h=l;
}else{
h=[[0],[10]];
a=[[0,10]];
}
o.$oj$yat(r,0,{
"default":h,
landscape:a
});
};
u.$oj$Nat=function($,t){
var o=$[s];
if(t){
var j=t[s];
if(o==j)return!1;
}
return!0;
};
u.$oj$Qot=function(t){
var o,i,c,u,h=this;
this.$oj$mat();
var a=(o=this.$oj$Pst())&&o.$oj$uct(n),l=t[s],f=this.$oj$nwt[l],v=f.s,d=(i=new j._cls.$oj$Mt())&&i.$oj$Vt(f.m),_=(c=new j._cls.$oj$j9())&&c.$oj$J7(v),g=$.map(_&&_.$oj$G9(d,0),function($){
return $&&$.$oj$an();
}),p=(u=new j._cls.$oj$nit())&&u.init();
p&&p.$oj$ait(j._cls.$oj$Cn.$oj$jn(r,e));
p&&p.$oj$fit(a);
var y=0;
$.each(g,function($){
p&&p.$oj$hit($,y++);
});
h.$oj$xat(p);
h.$oj$iwt=v;
h.$oj$twt=g;
};
u.$oj$hat=function(){
var t,o=(t=new j._cls.$oj$mr())&&t.$oj$Lr(2);
$.each(this.$oj$twt,function($){
o&&o.$oj$Br($+48,.33);
});
return o;
};
return h;
});
}();
!function(){
"use strict";
var t="PairIndex",o="KeySignature",i="NoteQuality",n="RangeSeed",s="QuestionMode",r="Positions",e="AccidentalMode",c="UsesNoteFilter",u="OctaveStyle",h="Helpers",a="ResetAnswer",l="Leniency";
j._registerClass({
$oj$swt:1
},{
$oj$Tlt:1
},function(t,o){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Note Construction";
};
t.$oj$oct=function(){
var t,o=(t=new j._cls.$oj$Tpt())&&t.init(),i=$.without(j._cls.$oj$Xat.$oj$Vat(),66);
o&&o.$oj$edt("note-construction");
o&&o.$oj$tdt();
o&&o.$oj$sdt();
o&&o.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
o&&o.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"NoteNameStyle");
o&&o.$oj$wdt(function($,t,o){
var j=t[s];
2==j?o&&o.$oj$Zdt(t[u]+10):o&&o.$oj$Zdt(j);
},function($,t,o){
var j=o&&o.$oj$Wdt(),i=void 0,n=void 0;
if(j>=10){
i=2;
n=j-10;
}else i=j;
0!=i&&1!=i&&2!=i&&(i=0);
1!=n&&3!=n&&4!=n&&5!=n&&(n=4);
t[u]=n;
t[s]=i;
});
o&&o.$oj$mdt([0,1,2],r);
o&&o.$oj$fdt(h);
o&&o.$oj$wdt(function(t,o,j){
var n=o[e],s=o[c],r=o["Note"];
2==n&&(s=!1);
var u=s&&$.includes(r,66);
j&&j.$oj$Zdt(n|(s?16:0)|(u?8:0));
s&&j&&j.$oj$Ydt(i,r);
},function($,t,o){
var j=o&&o.$oj$Wdt(),n=3&j,s=(16&j)>0,r=(8&j)>0,u=[];
if(s){
u=o&&o.$oj$zdt(i);
r&&u.push(66);
}
t[e]=n;
t[c]=s?1:0;
t["Note"]=u;
});
o&&o.$oj$fdt(a);
o&&o.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
o&&o.$oj$gdt();
o&&o.$oj$ydt();
o&&o.$oj$bdt();
o&&o.$oj$mdt([0,1,2],l);
return o;
};
o.$oj$Gut=function(){
return"note-construction";
};
o.$oj$rct=function(){
var $,t,o,i,n,f,v,d,_,g,p,y,m,w,b,S,M,F;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(4);
var E=($=new j._cls.$oj$Mct())&&$.$oj$Oct(r);
E&&E.$oj$Dct("Positions");
E&&E.$oj$Pct(0);
E&&E.$oj$Hct(0);
E&&E.$oj$Bct(0);
E&&E.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines and Spaces",0));
E&&E.$oj$ict();
E&&E.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines Only",1));
E&&E.$oj$qct(j._cls.$oj$Fct.$oj$jct("Spaces Only",2));
this.$oj$zct(E);
this.$oj$ict();
this.$oj$yht(14);
(t=this.$oj$Sht(14))&&t.$oj$Bct([0]);
this.$oj$ict();
this.$oj$bht(5,[0,15,1,2,3,4,13,5,12,9,10,14]);
var x=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(h);
x&&x.$oj$Dct("Helpers");
x&&x.$oj$Pct(3);
x&&x.$oj$Hct(0);
x&&x.$oj$Bct(0);
x&&x.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
x&&x.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(x);
this.$oj$ict();
var q=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(s);
q&&q.$oj$Dct("Question Mode");
q&&q.$oj$Hct(0);
q&&q.$oj$Pct(0);
q&&q.$oj$Bct(0);
q&&q.$oj$ict();
q&&q.$oj$qct(j._cls.$oj$Fct.$oj$jct("Any Octave",0));
(n=q&&q.$oj$ect())&&n.$oj$aht("Select the staff position and accidentals for the specified note.  Any octave is acceptable.");
q&&q.$oj$ict();
q&&q.$oj$qct(j._cls.$oj$Fct.$oj$jct("Highlighted Range",1));
(f=q&&q.$oj$ect())&&f.$oj$aht("Select the staff position and accidentals for the specified note and highlighted range.");
q&&q.$oj$ict();
q&&q.$oj$qct(j._cls.$oj$Fct.$oj$jct("Specific Octave",2));
(v=q&&q.$oj$ect())&&v.$oj$aht("Select the staff position and accidentals for the specified note and octave.");
this.$oj$zct(q);
var C=(d=new j._cls.$oj$Mct())&&d.$oj$Oct(u);
C&&C.$oj$Dct("Octave Labels");
C&&C.$oj$Hct(0);
C&&C.$oj$Pct(0);
C&&C.$oj$Bct(4);
C&&C.$oj$ict();
(_=C&&C.$oj$ect())&&_.$oj$bpt("Scientific Pitch Notation");
var T=j._cls.$oj$Fct.$oj$jct("Middle C is C4",4);
T&&T.$oj$Ict("Middle C4");
C&&C.$oj$qct(T);
C&&C.$oj$ict();
(g=C&&C.$oj$ect())&&g.$oj$bpt("Alternate Notations");
var D=j._cls.$oj$Fct.$oj$jct("Middle C is C3",3);
D&&D.$oj$Ict("Middle C3");
C&&C.$oj$qct(D);
var O=j._cls.$oj$Fct.$oj$jct("Middle C is C5",5);
O&&O.$oj$Ict("Middle C5");
C&&C.$oj$qct(O);
var P=j._cls.$oj$Fct.$oj$jct("C„ C‚ C c c′ c″",1);
P&&P.$oj$Ict("C„ c″");
C&&C.$oj$qct(P);
this.$oj$zct(C);
this.$oj$ict();
var A=(p=new j._cls.$oj$Mct())&&p.$oj$Oct(e);
A&&A.$oj$Dct("Difficulty");
A&&A.$oj$Pct(0);
A&&A.$oj$Hct(0);
A&&A.$oj$Bct(1);
var N=j._cls.$oj$Fct.$oj$jct("Level 1",0);
N&&N.$oj$hht("No accidentals, diatonic notes only");
A&&A.$oj$qct(N);
var I=j._cls.$oj$Fct.$oj$jct("Level 2",1);
I&&I.$oj$hht("Flats, sharps, and naturals allowed");
A&&A.$oj$qct(I);
var L=j._cls.$oj$Fct.$oj$jct("Level 3",2);
L&&L.$oj$hht("All accidentals allowed");
A&&A.$oj$qct(L);
this.$oj$zct(A);
var B=(y=new j._cls.$oj$Mct())&&y.$oj$Oct(l);
B&&B.$oj$Dct("Leniency");
B&&B.$oj$Pct(0);
B&&B.$oj$Hct(0);
B&&B.$oj$Bct(0);
B&&B.$oj$ict();
B&&B.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lenient",2));
(m=B&&B.$oj$ect())&&m.$oj$aht("Allow answers with unneeded or duplicated accidentals.");
B&&B.$oj$ict();
B&&B.$oj$qct(j._cls.$oj$Fct.$oj$jct("Naturals Only",1));
(w=B&&B.$oj$ect())&&w.$oj$aht("Only allow unneeded naturals.");
B&&B.$oj$ict();
B&&B.$oj$qct(j._cls.$oj$Fct.$oj$jct("Strict",0));
(b=B&&B.$oj$ect())&&b.$oj$aht("Disallow answers with unneeded or duplicated accidentals.");
this.$oj$zct(B);
var H=(S=new j._cls.$oj$Mct())&&S.$oj$Oct(c);
H&&H.$oj$Dct("Note Filter");
H&&H.$oj$Pct(3);
H&&H.$oj$Hct(0);
H&&H.$oj$Bct(0);
H&&H.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
H&&H.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(H);
this.$oj$yht(17);
(M=this.$oj$Sht(17))&&M.$oj$Bct(j._cls.$oj$Xat.$oj$Vat());
this.$oj$ict();
this.$oj$yht(11);
var K=(F=new j._cls.$oj$Mct())&&F.$oj$Oct(a);
K&&K.$oj$Dct("Reset Answer");
K&&K.$oj$Pct(3);
K&&K.$oj$Hct(0);
K&&K.$oj$Bct(0);
K&&K.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
K&&K.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(K);
};
o.$oj$Agt=function(){
var $=this.$oj$Zft(h),t=this.$oj$Zft(u),o=this.$oj$Zft(c),i=this.$oj$Zft("Note"),n=this.$oj$Att(),r=this.$oj$uct(s),a=2==r,l=j._cls.$oj$f8.$oj$i4(n),f=j._cls.$oj$f8.$oj$s4(n);
j._cls.$oj$f8.$oj$s4(n)&&(a=!1);
this.$oj$bct(t,!a);
this.$oj$bct($,l);
l&&$&&$.$oj$Oht(!1);
var v=2==this.$oj$uct(e)||l||f;
this.$oj$bct(o,v);
v&&o&&o.$oj$Oht(!1);
var d=this.$oj$uct(c);
this.$oj$bct(i,!d);
};
o.$oj$vct=function($){
var t=$&&$.$oj$gct();
(t==s||t==e||t==c||"NoteNameStyle"==t)&&this.$oj$Agt();
};
return i;
});
j._registerClass({
$oj$owt:1
},{
$oj$ast:1
},function(f,v){
function d(){
j._cls.$oj$ast.call(this);
this.$oj$uwt=this.$oj$awt=this.$oj$fwt=this.$oj$lwt=this.$oj$cwt=this.$oj$hwt=this.$oj$pwt=null;
this.$oj$dwt=this.$oj$vwt=this.$oj$mwt=this.$oj$gwt=this.$oj$ywt=this.$oj$bwt=this.$oj$wwt=this.$oj$Ewt=this.$oj$Swt=0;
this.$oj$xwt=!1;
this.constructor=d;
this.$oj_id=++j._id;
}
f.$oj$Wst=function(){
return j._cls.$oj$swt;
};
v.$oj$Wmt=function(){
var $,t,o=0==this.$oj$qst(),i=($=new j._cls.$oj$nnt())&&$.init();
i&&i.$oj$vnt(this.$oj$vwt);
i&&i.$oj$mnt(this.$oj$bwt);
i&&i.$oj$Tnt(this.$oj$pwt);
i&&i.$oj$Cnt(2);
i&&i.$oj$xnt(15.5);
i&&i.$oj$bnt(this.$oj$hwt);
i&&i.$oj$Ent(this.$oj$lwt);
o&&i&&i.$oj$Nnt(1);
var n=[(t=new j._cls.$oj$e8())&&t.$oj$u8(this.$oj$ywt,this.$oj$gwt)],s=j._cls.$oj$Ont.$oj$Rnt(n);
s&&s.$oj$jnt(this.$oj$cwt);
i&&i.$oj$Lnt(s);
var r=j._cls.$oj$l8.$oj$S8(this.$oj$ywt,this.$oj$vwt),e=void 0;
e=0==this.$oj$dwt?0:1==this.$oj$dwt?1:2;
this.$oj$Lot(2020,{
"accidental-type":this.$oj$gwt,
"accidental-layout":e,
position:this.$oj$ywt,
"ax-label":"Position",
"ax-value":r
});
this.$oj$Sat(i);
};
v.$oj$Twt=function($,t){
return j._cls.$oj$f8.$oj$a4($[o],t,this.$oj$wwt);
};
v.$oj$Nwt=function($){
var o=$[n];
if(void 0===o)return null;
var i=$[t],s=this.$oj$awt[i],r=s.position,e=j._cls.$oj$Xat.$oj$ift(this.$oj$pwt,r,o);
e||this.$oj$iot("!lzR",null);
return e;
};
v.$oj$Ybt=function($){
var n,s,r=$[t],e=$[o],c=$[i],u=this.$oj$awt[r],h=u.clef,a=u.position,l=null;
l=void 0!==c?(n=new j._cls.$oj$Mt())&&n.$oj$tn(h,a,c):(s=new j._cls.$oj$Mt())&&s.$oj$rn(h,a,e);
return l;
};
v.$oj$tat=function(){
return 1;
};
v.$oj$nat=function(){
return 3;
};
v.$oj$Rut=function(){
var $,t=this.$oj$ywt,o=this.$oj$fwt;
if(0==this.$oj$Swt){
t=j._g.$oj$e(t,7);
o=j._cls.$oj$e8.$oj$o8(j._g.$oj$e(o&&o.$oj$r8(),7),o&&o.$oj$i8());
}
var i=j._cls.$oj$e8.$oj$o8(t,this.$oj$gwt),n=($=this.$oj$Pst())&&$.$oj$uct(l),s=j._cls.$oj$Xat.$oj$lft(i,o,this.$oj$vwt,this.$oj$bwt,n);
this.$oj$pat(s,this.$oj$mwt,null);
};
v.$oj$sut=function(){
this.$oj$ywt=this.$oj$fwt&&this.$oj$fwt.$oj$r8();
this.$oj$gwt=this.$oj$fwt&&this.$oj$fwt.$oj$i8();
this.$oj$Wmt();
};
v.$oj$yut=function(){
var $,a=this.$oj$Pst(),l=(a&&a.$oj$uft(),a&&a.$oj$qht()),f=a&&a.$oj$Grt(),v=a&&a.$oj$Att(),d=a&&a.$oj$uct(e),_=a&&a.$oj$uct(s),g=a&&a.$oj$uct(r),p=a&&a.$oj$uct(u),y=[],m=a&&a.$oj$uct(c)?a&&a.$oj$uct("Note"):null,w=[];
if(d>0){
w.push(-1);
w.push(0);
w.push(1);
if(d>1){
w.push(-2);
w.push(2);
m=null;
}
}else this.$oj$gwt=-100;
var b=j._cls.$oj$Xat.$oj$oft(a,g,m);
console.log(b);
2!=_&&(p=0);
var S={};
S[t]=b.length;
S[o]=l;
S[i]=w;
1==_&&(S[n]=12);
this.$oj$uat(b.length?S:null);
this.$oj$awt=b;
this.$oj$dwt=d;
this.$oj$Swt=_;
this.$oj$wwt=v;
this.$oj$Ewt=p;
this.$oj$mwt=a&&a.$oj$Iht();
this.$oj$uwt=m;
this.$oj$pwt=f;
this.$oj$xwt=1==b.length&&1==l.length&&w.length<2;
0==b.length?y.push(18):this.$oj$xwt&&y.push(4);
var M=a&&a.$oj$uct(h);
if(M){
this.$oj$lwt=($=new j._cls.$oj$Qnt())&&$.init();
this.$oj$lwt&&this.$oj$lwt.$oj$Znt(v);
this.$oj$lwt&&this.$oj$lwt.$oj$ert(g);
}else this.$oj$lwt=null;
a&&a.$oj$gut(j._cls.$oj$Sut.$oj$fvt(y));
};
v.$oj$Tut=function(){
2==this.$oj$mwt&&this.$oj$gat(2);
};
v.$oj$Nat=function(n,s,r){
var e,c,u=n[t],h=n[o],a=n[i];
if(s){
var l=s[t],f=s[o],v=s[i];
if(u==l&&h==f&&a==v){
if(r>.5){
this.$oj$xwt=!0;
0==$.size((e=this.$oj$Pst())&&e.$oj$but())&&(c=this.$oj$Pst())&&c.$oj$gut([j._cls.$oj$Sut.$oj$Eut(4)]);
}
if(!this.$oj$xwt)return!1;
}
}
var d=this.$oj$Ybt(n);
if(this.$oj$uwt&&!$.includes(this.$oj$uwt,d&&d.$oj$xn()))return!1;
if(j._cls.$oj$f8.$oj$s4(this.$oj$wwt)){
var _=this.$oj$Twt(n,d);
return j._cls.$oj$f8.$oj$l4(_&&_.$oj$xn(),this.$oj$wwt,!0);
}
return!0;
};
v.$oj$Qot=function($){
var i,n,s,r,e=$[t],c=$[o],u=this.$oj$Ybt($),h=this.$oj$awt[e],l=h.clef,f=void 0,v=this.$oj$wwt,d=null,_=null;
if(j._cls.$oj$f8.$oj$s4(this.$oj$wwt)){
var g=(i=this.$oj$Twt($,u))&&i.$oj$xn();
if(9==v){
d=j._cls.$oj$l8.$oj$R8(g,0);
_=j._cls.$oj$l8.$oj$U8(g,0);
}else if(10==v){
d=j._cls.$oj$l8.$oj$R8(g,1);
_=j._cls.$oj$l8.$oj$U8(g,1);
}else if(12==v){
d=j._cls.$oj$l8.$oj$H8(g,!0);
_=j._cls.$oj$l8.$oj$B8(g,!0);
}else{
d=j._cls.$oj$l8.$oj$H8(g,!1);
_=j._cls.$oj$l8.$oj$B8(g,!1);
}
if(0!=this.$oj$Ewt){
var p=j._cls.$oj$Mt.$oj$Xt(12*Math.floor((u&&u.$oj$an())/12)),y=j._cls.$oj$Mt.$oj$Xt((p&&p.$oj$an())+11),m=this.$oj$pwt&&this.$oj$pwt.$oj$zn(p&&p.$oj$fn(l)),w=this.$oj$pwt&&this.$oj$pwt.$oj$zn(y&&y.$oj$fn(l));
f=j._cls.$oj$Cn.$oj$jn(m,w);
}else f=this.$oj$Nwt($);
}else{
d=j._cls.$oj$l8.$oj$y8(u&&u.$oj$xn(),u&&u.$oj$Ft(),this.$oj$wwt,this.$oj$Ewt);
_=j._cls.$oj$l8.$oj$b8(u&&u.$oj$xn(),u&&u.$oj$Ft(),this.$oj$wwt,this.$oj$Ewt);
f=this.$oj$Nwt($);
}
if((n=this.$oj$Pst())&&n.$oj$uct(a)){
this.$oj$gwt=-100;
this.$oj$ywt=0;
}
this.$oj$fwt=(s=new j._cls.$oj$e8())&&s.$oj$u8(u&&u.$oj$fn(l),u&&u.$oj$ln(c));
var b=(r=new j._cls.$oj$Wnt())&&r.init();
b&&b.$oj$Jnt(d);
b&&b.$oj$Knt(_);
this.$oj$vwt=l;
this.$oj$bwt=c;
this.$oj$cwt=b;
this.$oj$hwt=f;
this.$oj$mat();
this.$oj$Wmt();
};
v.$oj$Xmt=function($){
var t=$["accidental-type"],o=$["delta"],j=$["position"];
void 0!==t?this.$oj$gwt=t:void 0!==o?this.$oj$ywt=this.$oj$pwt&&this.$oj$pwt.$oj$zn(this.$oj$ywt+o):void 0!==j&&(this.$oj$ywt=this.$oj$pwt&&this.$oj$pwt.$oj$zn(j));
this.$oj$Wmt();
};
v.$oj$Vmt=function($){
var t=$["position"];
if(void 0!==t){
var o=Math.round(t);
this.$oj$ywt=this.$oj$pwt&&this.$oj$pwt.$oj$zn(o);
}
this.$oj$Wmt();
};
v.$oj$iat=function($,t){
3015==$?this.$oj$Xmt(t):3016==$?this.$oj$Vmt(t):d.$oj_super.prototype.$oj$iat.call(this,$,t);
};
v.$oj$hat=function($){
var n,s,r,e=$[t],c=$[o],u=$[i],h=this.$oj$awt[e],a=h.clef,l=void 0;
l=void 0!==u?(n=new j._cls.$oj$Mt())&&n.$oj$tn(a,this.$oj$ywt,u):(s=new j._cls.$oj$Mt())&&s.$oj$rn(a,this.$oj$ywt,c);
var f=(r=new j._cls.$oj$mr())&&r.$oj$Lr(2);
f&&f.$oj$jr(l&&l.$oj$an(),0,1);
return f;
};
return d;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Pitch",o="AccidentalNameStyle",n="ActiveTags",s="UseReference",r="ReferenceNote";
j._registerClass({
$oj$Cwt:1
},{
$oj$Tlt:1
},function(t,i){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Note Ear Training";
};
i.$oj$Gut=function(){
return"ear-note";
};
t.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("ear-note");
t&&t.$oj$vdt([0,1,2,3,4,5,6,7,8,9,10,11],n);
t&&t.$oj$pdt(r,s);
t&&t.$oj$mdt([1e3,750,500,333,250,125],"Speed");
t&&t.$oj$cdt();
t&&t.$oj$hdt();
t&&t.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
t&&t.$oj$mdt([0,1,2],o);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
i.$oj$rct=function(){
var t,i,e,c,u,h=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(n);
h&&h.$oj$Dct("Notes");
h&&h.$oj$Hct(1);
h&&h.$oj$Bct([0,2,4,5,7,9,11]);
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(2));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(3));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(4));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(5));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(6));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(7));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(8));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(9));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(10));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$Jft(11));
this.$oj$zct(h);
this.$oj$ict();
this.$oj$kwt();
var a=(i=new j._cls.$oj$Mct())&&i.$oj$Oct(s);
a&&a.$oj$Dct("Reference Note");
a&&a.$oj$Hct(0);
a&&a.$oj$Pct(3);
a&&a.$oj$Bct(!0);
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(a);
var l=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(r);
l&&l.$oj$Dct("Pitch");
l&&l.$oj$Hct(4);
l&&l.$oj$Pct(2);
l&&l.$oj$Bct(60);
this.$oj$zct(l);
this.$oj$ict();
this.$oj$yht(16);
this.$oj$ict();
this.$oj$yht(6);
this.$oj$yht(7);
this.$oj$ict();
this.$oj$bht(5,[0,11,1,2,3,4,13,5,6,12,7,8,9,10,14]);
var f=(c=new j._cls.$oj$Mct())&&c.$oj$Oct(o);
f&&f.$oj$Dct("Accidental Names");
f&&f.$oj$Bct(0);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Both",0));
f&&f.$oj$ict();
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Sharps Only",1));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$jct("Flats Only",2));
this.$oj$zct(f);
this.$oj$ict();
this.$oj$yht(12);
(u=this.$oj$Sht(12))&&u.$oj$Bct(0);
$.each(this.$oj$Tht(7),function($){
$&&$.$oj$qvt("Range determines the available pitches for the question note.");
});
};
i.$oj$cbt=function($,t){
var o=$;
if(!t||!t.$oj$qn($))for(var j=$,i=$,n=0;10>n;n++){
j+=12;
i-=12;
if(t&&t.$oj$qn(i)){
o=i;
break;
}
if(t&&t.$oj$qn(j)){
o=j;
break;
}
}
return o;
};
i.$oj$kwt=function(){
var t=this,o=this.$oj$Zft(n);
$.each(o&&o.$oj$Kft(),function($){
var o=$&&$.$oj$xn(),j=t.$oj$Lwt(o,!0);
$&&$.$oj$wit(null);
$&&$.$oj$Eit(j);
$&&$.$oj$sht(function(){
var $=void 0;
$=t.$oj$Awt()?t.$oj$Owt(o,!1):t.$oj$Lwt(o,!1);
return"musictype:"+$;
});
});
};
i.$oj$hbt=function(){
var $=this.$oj$Ect(),t=j._cls.$oj$Mr.$oj$Or($),o=this.$oj$Zft(r),i=o&&o.$oj$Wft(),n=t&&t.$oj$Kr();
if(!n||!n.$oj$qn(i)){
var s=this.$oj$cbt(i,t&&t.$oj$Kr());
o&&o.$oj$Bct(s);
o&&o.$oj$jht();
}
o&&o.$oj$Gct($);
};
i.$oj$Agt=function(){
var t=this,o=this.$oj$Att(),i=this.$oj$Zft(n),e=this.$oj$Zft(s),c=this.$oj$Zft(r),u=j._cls.$oj$f8.$oj$s4(o),h=e&&e.$oj$Wft(),a=9==o||10==o;
$.each(i&&i.$oj$Kft(),function($){
var o=void 0,j=void 0;
if(u){
o=t.$oj$Owt($&&$.$oj$xn(),!0);
j=t.$oj$Mwt($&&$.$oj$xn());
}else{
o=t.$oj$Lwt($&&$.$oj$xn(),!0);
j=t.$oj$Dwt($&&$.$oj$xn());
}
$&&$.$oj$xct(null);
$&&$.$oj$Eit(o);
$&&$.$oj$Tct(j);
});
a?i&&i.$oj$Dct("Scale Degrees"):i&&i.$oj$Dct("Notes");
u?c&&c.$oj$Dct("Reference Note"):c&&c.$oj$Dct("Pitch");
t.$oj$bct(e,u);
t.$oj$bct(c,!u&&!h);
};
i.$oj$vct=function($){
var t=$&&$.$oj$xht(),j=$&&$.$oj$gct();
6==t?this.$oj$hbt():5==t?this.$oj$Agt():(j==s||j==o)&&this.$oj$Agt();
};
i.$oj$Pwt=function($){
var t=[15,16,25,26,35,45,46,55,56,65,66,75],o=this.$oj$Att(),j=t[$%12];
(10==o||12==o)&&(3==$?j=34:8==$?j=64:10==$&&(j=74));
return j;
};
i.$oj$Hwt=function($){
var t=[15,24,25,34,35,45,54,55,64,65,74,75],o=t[$%12];
10==this.$oj$Att()&&(3==$?o=34:8==$?o=64:10==$&&(o=74));
return o;
};
i.$oj$Bwt=function($,t,j,i){
var n=this.$oj$uct(o);
if(0==n)return i?$:$+"/"+t;
if(1==n)return $;
if(2==n)return t;
return"";
};
i.$oj$Awt=function(){
return j._cls.$oj$f8.$oj$s4(this.$oj$Att());
};
i.$oj$Dwt=function($){
var t=this.$oj$Att(),i=this.$oj$uct(o);
return j._cls.$oj$l8.$oj$A8($,t,i,!1);
};
i.$oj$Mwt=function($){
var t=this.$oj$Att(),o=this.$oj$Pwt($),i=this.$oj$Hwt($),n=12==t,s=void 0,r=void 0;
if(9==t||10==t){
var e=j._cls.$oj$f8.$oj$u4(t);
s=j._cls.$oj$l8.$oj$q8(o,e);
r=j._cls.$oj$l8.$oj$q8(i,e);
}else{
s=j._cls.$oj$l8.$oj$H8(o,n);
r=j._cls.$oj$l8.$oj$H8(i,n);
}
return this.$oj$Bwt(s,r,"/",i==o);
};
i.$oj$Lwt=function($,t){
var i=this.$oj$Att(),n=this.$oj$uct(o);
return t?j._cls.$oj$l8.$oj$O8($,i,n,!1):j._cls.$oj$l8.$oj$L8($,i,n,!1);
};
i.$oj$Owt=function($,t){
var i=this.$oj$Att(),n=(this.$oj$uct(o),this.$oj$Pwt($)),s=this.$oj$Hwt($),r=12==i,e=void 0,c=void 0;
if(9==i||10==i){
var u=j._cls.$oj$f8.$oj$u4(i);
if(t){
e=j._cls.$oj$l8.$oj$U8(n,u);
c=j._cls.$oj$l8.$oj$U8(s,u);
}else{
e=j._cls.$oj$l8.$oj$R8(n,u);
c=j._cls.$oj$l8.$oj$R8(s,u);
}
}else{
e=j._cls.$oj$l8.$oj$H8(n,r);
c=j._cls.$oj$l8.$oj$H8(s,r);
}
return this.$oj$Bwt(e,c,t?" or ":" -- ",s==n);
};
return e;
});
j._registerClass({
$oj$jwt:1
},{
$oj$ast:1
},function(e,c){
function u(){
j._cls.$oj$ast.call(this);
this.$oj$Fwt=this.$oj$Iwt=this.$oj$qwt=null;
this.$oj$Rwt=this.$oj$Uwt=this.$oj$zwt=this.$oj$Wwt=0;
this.$oj$Xwt=this.$oj$Vwt=!1;
this.constructor=u;
this.$oj_id=++j._id;
}
e.$oj$Wst=function(){
return j._cls.$oj$Cwt;
};
c.$oj$Nbt=function($){
var t,o,i=(t=new j._cls.$oj$mr())&&t.$oj$Lr((o=this.$oj$Pst())&&o.$oj$Ect());
i&&i.$oj$jr($,0,this.$oj$Wwt);
return i;
};
c.$oj$Jwt=function($){
var t=this;
function o($,t){
if(0===t)return 0;
for(;0>$;)$+=t;
return $%t;
}
var j=t.$oj$Pst();
if(j&&j.$oj$Awt()){
var i=j&&j.$oj$uct(r);
return o($-i,12);
}
return o($,12);
};
c.$oj$kbt=function(){
var $;
this.$oj$Lot(2009,{
"question-sequence":($=this.$oj$cat())&&$.$oj$aut(),
"reference-sequence":this.$oj$qwt&&this.$oj$qwt.$oj$aut(),
"reference-label":this.$oj$Iwt,
"reference-ax-label":this.$oj$Fwt
});
};
c.$oj$tat=function(){
return 5;
};
c.$oj$nat=function(){
return 1;
};
c.$oj$Uut=function($){
this.$oj$pat($==this.$oj$Uwt,this.$oj$Rwt,[$]);
};
c.$oj$sut=function(){
this.$oj$wat([this.$oj$Uwt]);
};
c.$oj$iat=function(t,o){
var j;
if(3011==t){
var i=o["playing"],s=o["sequence-id"];
if(s==(this.$oj$qwt&&this.$oj$qwt.$oj$Tr()))if(i){
var r=(j=this.$oj$Pst())&&j.$oj$uct(n),e=this.$oj$Jwt(this.$oj$zwt),c=this.$oj$qwt&&this.$oj$qwt.$oj$Nr();
$.includes(r,e)&&this.$oj$Lot(2014,{
reference:!0,
duration:c,
object:[e]
});
}else if(this.$oj$Vwt){
this.$oj$Vwt=!1;
this.$oj$vat(this.$oj$cat());
}
}else u.$oj_super.prototype.$oj$iat.call(this,t,o);
};
c.$oj$yut=function(){
var o,s=this,r=this.$oj$Pst(),e=r&&r.$oj$Ect(),c=r&&r.$oj$Fht(),u=r&&r.$oj$uct(n),h=(o=j._cls.$oj$Xat.$oj$Yat(e,c))&&o.$oj$Rn(),a=$.filter(h,function(t){
var o=s.$oj$Jwt(t);
return $.includes(u,o);
}),l=[];
s.$oj$Xwt=1==a.length;
s.$oj$Xwt?l.push(5):0==a.length&&l.push(1);
s.$oj$uat(i({},t,a));
r&&r.$oj$gut(j._cls.$oj$Sut.$oj$fvt(l));
};
c.$oj$Tut=function(){
var t=this.$oj$Pst(),i=t&&t.$oj$Ect(),e=t&&t.$oj$Att(),c=(t&&t.$oj$uct(o),t&&t.$oj$uct(s)),u=t&&t.$oj$uct(n),h=t&&t.$oj$Uht(),a=t&&t.$oj$Iht();
this.$oj$gat(i);
var l=[];
j._cls.$oj$f8.$oj$s4(e)&&(c=!0);
this.$oj$Wwt=h;
this.$oj$Rwt=a;
if(c){
this.$oj$zwt=t&&t.$oj$uct(r);
this.$oj$Vwt=!0;
this.$oj$qwt=this.$oj$Nbt(this.$oj$zwt);
this.$oj$Iwt=t&&t.$oj$Lwt(this.$oj$zwt,!1);
this.$oj$Fwt=t&&t.$oj$Lwt(this.$oj$zwt,!0);
}else{
this.$oj$zwt=0;
this.$oj$Vwt=!1;
this.$oj$qwt=null;
this.$oj$Iwt=null;
this.$oj$Fwt=null;
}
for(var f=0;12>f;f++){
var v=void 0,d=void 0,_=void 0;
if(j._cls.$oj$f8.$oj$s4(e)){
v=t&&t.$oj$Owt(f,!1);
d=t&&t.$oj$Owt(f,!0);
}else if(7==e||8==e){
v=j._cls.$oj$l8.$oj$p8(f,e);
d=v;
}else{
v=t&&t.$oj$Lwt(f,!1);
d=t&&t.$oj$Lwt(f,!0);
_=j._cls.$oj$Xat.$oj$eft(f);
}
l.push({
title:v,
ax:d,
tag:f,
active:$.includes(u,f),
shortcut:_
});
}
var g=void 0;
g=11==e?[[9,10,11],[0,1,2],[3,4,5],[6,7,8]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]];
this.$oj$yat(l,0,{
"default":g
});
};
c.$oj$Nat=function($,o){
var j=$[t];
if(o){
var i=o[t];
if(j==i)return this.$oj$Xwt;
}
return!0;
};
c.$oj$hat=function($){
var o=$[t];
return this.$oj$Nbt(o);
};
c.$oj$Qot=function($){
this.$oj$kbt();
var o=$[t];
this.$oj$Uwt=this.$oj$Jwt(o);
this.$oj$mat();
this.$oj$vat(this.$oj$Vwt?this.$oj$qwt:this.$oj$cat());
};
return u;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Helpers",o="Positions",n="Accidentals",s="UsesNoteFilter",r="PairIndex",e="KeySignature",c="NoteQuality";
function u(t){
var o;
t||(t=(o=j._cls.$oj$Xat)&&o.$oj$Vat());
return $.without(t,4,34,26,66);
}
j._registerClass({
$oj$Kwt:1
},{
$oj$Tlt:1
},function(i,r){
function e(){
j._cls.$oj$Tlt.call(this);
this.constructor=e;
this.$oj_id=++j._id;
}
i.$oj$Kut=function(){
return"Note Identification";
};
i.$oj$oct=function(){
var i,r=(i=new j._cls.$oj$Tpt())&&i.init(),e=$.without(j._cls.$oj$Xat.$oj$Vat(),66);
r&&r.$oj$edt("note");
r&&r.$oj$tdt();
r&&r.$oj$sdt();
r&&r.$oj$vdt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
r&&r.$oj$wdt(function(t,o,j){
var i=o[n],r=o[s],c=o["Note"],u=r&&$.includes(c,66);
j&&j.$oj$Zdt((i?1:0)|(r?16:0)|(u?8:0));
r&&j&&j.$oj$Ydt(e,c);
},function($,t,o){
var j=o&&o.$oj$Wdt(),i=!1,r=!1,c=[];
if(2==j){
i=!0;
r=!0;
c=u(null);
}else{
i=(1&j)>0;
r=(16&j)>0;
if(r){
c=o&&o.$oj$zdt(e);
(8&j)>0&&c.push(66);
}
}
t[n]=i?1:0;
t[s]=r?1:0;
t["Note"]=c;
});
r&&r.$oj$mdt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
r&&r.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
r&&r.$oj$mdt([0,1,2],o);
r&&r.$oj$fdt(t);
r&&r.$oj$gdt();
r&&r.$oj$ydt();
r&&r.$oj$bdt();
r&&r.$oj$jpt(function($,t){
r&&r.$oj$Hpt(t.length<=6);
});
return r;
};
r.$oj$Gut=function(){
return"note";
};
r.$oj$rct=function(){
var $,i,r,e,c,u;
this.$oj$yht(2);
this.$oj$ict();
this.$oj$yht(4);
var h=($=new j._cls.$oj$Mct())&&$.$oj$Oct(o);
h&&h.$oj$Dct("Positions");
h&&h.$oj$Pct(0);
h&&h.$oj$Hct(0);
h&&h.$oj$Bct(0);
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines and Spaces",0));
h&&h.$oj$ict();
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$jct("Lines Only",1));
h&&h.$oj$qct(j._cls.$oj$Fct.$oj$jct("Spaces Only",2));
this.$oj$zct(h);
this.$oj$ict();
this.$oj$yht(14);
(i=this.$oj$Sht(14))&&i.$oj$Bct([0]);
this.$oj$ict();
this.$oj$bht(5,[0,11,1,2,3,4,13,5,6,12,7,8,9,10,14]);
var a=(r=new j._cls.$oj$Mct())&&r.$oj$Oct(t);
a&&a.$oj$Dct("Helpers");
a&&a.$oj$Pct(3);
a&&a.$oj$Hct(0);
a&&a.$oj$Bct(0);
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
a&&a.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(a);
this.$oj$ict();
var l=(e=new j._cls.$oj$Mct())&&e.$oj$Oct(n);
l&&l.$oj$Dct("Accidentals");
l&&l.$oj$Pct(3);
l&&l.$oj$Hct(0);
l&&l.$oj$Bct(1);
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
l&&l.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$zct(l);
var f=(c=new j._cls.$oj$Mct())&&c.$oj$Oct(s);
f&&f.$oj$Dct("Note Filter");
f&&f.$oj$Pct(3);
f&&f.$oj$Hct(0);
f&&f.$oj$Bct(0);
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(0));
f&&f.$oj$qct(j._cls.$oj$Fct.$oj$Jft(1));
this.$oj$ict();
this.$oj$zct(f);
this.$oj$yht(17);
(u=this.$oj$Sht(17))&&u.$oj$Bct(j._cls.$oj$Xat.$oj$Vat());
this.$oj$ict();
this.$oj$yht(11);
};
r.$oj$Agt=function(){
var $=this.$oj$Att(),o=j._cls.$oj$f8.$oj$i4($),i=j._cls.$oj$f8.$oj$s4($),n=this.$oj$Zft(t),r=this.$oj$Zft(s),e=this.$oj$Zft("Note");
this.$oj$bct(r,o||i);
(o||i)&&r&&r.$oj$Oht(!1);
this.$oj$bct(n,o);
o&&n&&n.$oj$Oht(!1);
var c=this.$oj$uct(s);
this.$oj$bct(e,!c);
};
r.$oj$vct=function($){
5==($&&$.$oj$xht())?this.$oj$Agt():($&&$.$oj$gct())==s&&this.$oj$Agt();
};
return e;
});
j._registerClass({
$oj$Qwt:1
},{
$oj$ast:1
},function(h,a){
function l(){
j._cls.$oj$ast.call(this);
this.$oj$Gwt=this.$oj$Ywt=this.$oj$Zwt=this.$oj$eEt=null;
this.$oj$tEt=this.$oj$nEt=this.$oj$rEt=0;
this.$oj$iEt=this.$oj$sEt=!1;
this.constructor=l;
this.$oj_id=++j._id;
}
h.$oj$Wst=function(){
return j._cls.$oj$Kwt;
};
a.$oj$Ybt=function($){
var t,o,i=$[r],n=$[e],s=$[c],u=this.$oj$Ywt[i],h=u.clef,a=u.position;
return void 0!==s?(t=new j._cls.$oj$Mt())&&t.$oj$tn(h,a,s):(o=new j._cls.$oj$Mt())&&o.$oj$rn(h,a,n);
};
a.$oj$Twt=function($,t){
return j._cls.$oj$f8.$oj$a4($[e],t,this.$oj$rEt);
};
a.$oj$tat=function(){
return 1;
};
a.$oj$nat=function(){
return 1;
};
a.$oj$Uut=function($){
var t=$==this.$oj$nEt;
this.$oj$pat(t,this.$oj$tEt,[$]);
};
a.$oj$sut=function(){
this.$oj$wat([this.$oj$nEt]);
};
a.$oj$yut=function(){
var $,h,a,l=this.$oj$Pst(),f=(l&&l.$oj$uft(),l&&l.$oj$qht()),v=l&&l.$oj$Att(),d=l&&l.$oj$uct(o),_=(l&&l.$oj$uct(n))>0,g=[],p=l&&l.$oj$uct(s)?l&&l.$oj$uct("Note"):null;
13==v&&(p=u(p));
var y=[];
if(_){
y.push(-1);
y.push(0);
y.push(1);
if(7==v||8==v){
y.push(-2);
y.push(2);
}
}
var m=j._cls.$oj$Xat.$oj$oft(l,d,p);
(h=this.$oj$Hst())&&h.$oj$aat(m.length?($={},i($,r,m.length),i($,e,f),i($,c,y),$):null);
this.$oj$Ywt=m;
this.$oj$tEt=l&&l.$oj$Iht();
this.$oj$iEt=1==m.length&&1==f.length&&y.length<2;
0==m.length?g.push(18):this.$oj$iEt&&g.push(4);
this.$oj$eEt=l&&l.$oj$Grt();
var w=l&&l.$oj$uct(t);
if(w){
this.$oj$Zwt=(a=new j._cls.$oj$Qnt())&&a.init();
this.$oj$Zwt&&this.$oj$Zwt.$oj$Znt(v);
this.$oj$Zwt&&this.$oj$Zwt.$oj$ert(d);
}else this.$oj$Zwt=null;
this.$oj$rEt=v;
this.$oj$sEt=_;
this.$oj$Gwt=p;
l&&l.$oj$gut(j._cls.$oj$Sut.$oj$fvt(g));
};
a.$oj$Tut=function(){
var t=this,o=[],i=void 0;
function n($,i){
var n=j._cls.$oj$l8.$oj$p8($,t.$oj$rEt);
o.push({
title:n,
tag:$,
active:!0,
shortcut:i
});
}
if(j._cls.$oj$f8.$oj$i4(t.$oj$rEt)){
n(0,"0");
n(1,"1");
n(2,"2");
n(3,"3");
n(4,"4");
n(5,"5");
n(6,"6");
n(7,"7");
n(8,"8");
n(9,"9");
n(10,"T");
n(11,"E");
i=[[0,1,2,3],[4,5,6,7],[8,9,10,11]];
}else if(j._cls.$oj$f8.$oj$s4(t.$oj$rEt)){
var s=j._cls.$oj$f8.$oj$u4(t.$oj$rEt),r=j._cls.$oj$f8.$oj$o4(t.$oj$rEt),e=0==s,c=12==t.$oj$rEt,u=t.$oj$sEt;
$.each(j._cls.$oj$f8.$oj$f4(t.$oj$rEt,u),function($){
var t=void 0,i=void 0;
if(r){
t=j._cls.$oj$l8.$oj$R8($,s);
i=j._cls.$oj$l8.$oj$U8($,s);
}else{
t=j._cls.$oj$l8.$oj$H8($,c);
i=j._cls.$oj$l8.$oj$B8($,c);
}
o.push({
title:t,
ax:i,
tag:$,
active:!0
});
});
if(e)i=[[16,26,null,46,56,66,null],[15,25,35,45,55,65,75],[null,24,34,null,54,64,74]];else{
o.push({
title:"Minor",
"short":"m",
tag:1e3,
textOnly:!0
});
i=[[16,26,35,46,56,65,75],[15,25,34,45,55,64,74],[null,24,null,null,54,null,1e3]];
}
if(!u){
i[0]=[null,null,null,null,null,null,null];
i[2]=[null,null,null,null,null,null,1e3];
}
}else{
var h=t.$oj$rEt,a=t.$oj$Gwt;
$.each(j._cls.$oj$Xat.$oj$Vat(),function(t){
o.push({
title:j._cls.$oj$l8.$oj$d8(t,h),
ax:j._cls.$oj$l8.$oj$v8(t,h),
tag:t,
active:!a||$.includes(a,t),
shortcut:j._cls.$oj$Xat.$oj$eft(t)
});
});
i=j._cls.$oj$Xat.$oj$Jat(t.$oj$rEt,a);
}
t.$oj$yat(o,0,{
"default":i
});
2==t.$oj$tEt&&t.$oj$gat(2);
};
a.$oj$Nat=function(t,o,i){
var n,s,u=t[r],h=t[e],a=t[c];
if(o){
var l=o[r],f=o[e],v=o[c];
if(u==l&&h==f&&a==v){
if(i>.5){
this.$oj$iEt=!0;
0==$.size((n=this.$oj$Pst())&&n.$oj$but())&&(s=this.$oj$Pst())&&s.$oj$gut([j._cls.$oj$Sut.$oj$Eut(4)]);
}
if(!this.$oj$iEt)return!1;
}
}
var d=this.$oj$Ybt(t);
if(this.$oj$Gwt&&!$.includes(this.$oj$Gwt,d&&d.$oj$xn()))return!1;
if(j._cls.$oj$f8.$oj$s4(this.$oj$rEt)){
var _=this.$oj$Twt(t,d);
return j._cls.$oj$f8.$oj$l4(_&&_.$oj$xn(),this.$oj$rEt,this.$oj$sEt);
}
return!0;
};
a.$oj$Qot=function($){
var t,o,i=$[r],n=$[e],s=this.$oj$Ywt[i],c=this.$oj$Ybt($),u=(t=new j._cls.$oj$nnt())&&t.init();
u&&u.$oj$vnt(s.clef);
u&&u.$oj$mnt(n);
u&&u.$oj$Ent(this.$oj$Zwt);
u&&u.$oj$xnt(15.5);
u&&u.$oj$Tnt(this.$oj$eEt);
var h=[c];
u&&u.$oj$knt(h);
this.$oj$nEt=7==this.$oj$rEt||8==this.$oj$rEt?(c&&c.$oj$an())%12:j._cls.$oj$f8.$oj$s4(this.$oj$rEt)?(o=this.$oj$Twt($,c))&&o.$oj$xn():c&&c.$oj$xn();
this.$oj$mat();
this.$oj$Sat(u);
};
a.$oj$hat=function($){
var t,o=this.$oj$Ybt($),i=(t=new j._cls.$oj$mr())&&t.$oj$Lr(2);
i&&i.$oj$jr(o&&o.$oj$an(),0,1);
return i;
};
return l;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="TagIndexKey",n="Scale",s="Octave",r="Filter",e="QuestionMode",c="Landing",u="ComputedNoteTag",h="ComputedScaleTag",a="ComputedOctave";
j._registerClass({
$oj$oEt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Scale Construction";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init(),o=j._cls.$oj$Xat.$oj$Vat(),i=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
t&&t.$oj$edt("scale-construction");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([0,10,11,12,20,21,22,23,24,25,26],n);
t&&t.$oj$wdt(function($,t,j){
if(1==t[r]){
j&&j.$oj$qgt(!0);
j&&j.$oj$Ydt(o,t["Note"]);
}else{
j&&j.$oj$qgt(!1);
j&&j.$oj$Ydt(i,t["KeySignature"]);
}
},function($,t,j){
if(j&&j.$oj$Rgt()){
t[r]=1;
t["Note"]=j&&j.$oj$zdt(o);
}else{
t[r]=0;
t["KeySignature"]=j&&j.$oj$zdt(i);
}
});
t&&t.$oj$mdt([0,2,1],e);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
t.$oj$Gut=function(){
return"scale-construction";
};
t.$oj$rct=function(){
var $,t,o,i,s,c,u,h,a=this;
function l($){
var t=j._cls.$oj$l8.$oj$N8($);
return j._cls.$oj$Fct.$oj$jct(t,$);
}
a.$oj$yht(2);
a.$oj$ict();
a.$oj$yht(3);
var f=($=new j._cls.$oj$Mct())&&$.$oj$Oct(n);
f&&f.$oj$Dct("Scales");
f&&f.$oj$Hct(1);
f&&f.$oj$Pct(1);
f&&f.$oj$Bct([0,10,11,12]);
f&&f.$oj$qct(l(0));
f&&f.$oj$qct(l(10));
f&&f.$oj$qct(l(11));
f&&f.$oj$qct(l(12));
f&&f.$oj$ict();
f&&f.$oj$qct(l(20));
f&&f.$oj$qct(l(21));
f&&f.$oj$qct(l(22));
f&&f.$oj$qct(l(23));
f&&f.$oj$qct(l(24));
f&&f.$oj$qct(l(25));
f&&f.$oj$qct(l(26));
a.$oj$ict();
a.$oj$zct(f);
var v=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r);
v&&v.$oj$Dct("Filter");
v&&v.$oj$Hct(0);
v&&v.$oj$Pct(0);
v&&v.$oj$Bct(0);
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Key Signature",0));
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Tonic",1));
a.$oj$ict();
a.$oj$zct(v);
a.$oj$yht(14);
(o=a.$oj$Sht(14))&&o.$oj$Bct([-3,-2,-1,0,1,2,3]);
a.$oj$yht(17);
(i=a.$oj$Sht(17))&&i.$oj$Dct("Tonics");
a.$oj$ict();
var d=(s=new j._cls.$oj$Mct())&&s.$oj$Oct(e);
d&&d.$oj$Dct("Question Mode");
d&&d.$oj$Hct(0);
d&&d.$oj$Pct(0);
d&&d.$oj$Bct(0);
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Accidentals","Accidentals",0));
(c=d&&d.$oj$ect())&&c.$oj$aht("Select the correct accidentals for the specified scale.");
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Tonic (Any Octave)","Any Octave",2));
(u=d&&d.$oj$ect())&&u.$oj$aht("Select the staff position for the tonic of the specified scale. Any octave is acceptable.");
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Tonic (Highlighted Range)","Highlighted Range",1));
(h=d&&d.$oj$ect())&&h.$oj$aht("Select the staff position for the tonic of the specified scale and highlighted range.");
a.$oj$zct(d);
a.$oj$ict();
a.$oj$yht(11);
};
t.$oj$vct=function($){
var t=$&&$.$oj$gct();
if(t==r){
var o=0==this.$oj$uct(r);
this.$oj$bct(this.$oj$Zft("KeySignature"),!o);
this.$oj$bct(this.$oj$Zft("Note"),o);
}
};
return o;
});
j._registerClass({
$oj$uEt:1
},{
$oj$ast:1
},function(l,f){
function v(){
j._cls.$oj$ast.call(this);
this.$oj$aEt=this.$oj$fEt=this.$oj$lEt=this.$oj$cEt=this.$oj$hEt=this.$oj$pEt=this.$oj$dEt=this.$oj$vEt=this.$oj$mEt=null;
this.$oj$gEt=this.$oj$yEt=this.$oj$bEt=this.$oj$wEt=this.$oj$EEt=this.$oj$SEt=this.$oj$xEt=this.$oj$TEt=0;
this.$oj$NEt=this.$oj$CEt=!1;
this.constructor=v;
this.$oj_id=++j._id;
}
l.$oj$Wst=function(){
return j._cls.$oj$oEt;
};
f.$oj$Wmt=function(){
var t,o,i,n=this,s=0==this.$oj$qst();
this.$oj$CEt&&(s=!1);
var r=(t=new j._cls.$oj$nnt())&&t.init(),e=null,c=null,u=null,h=void 0,a=void 0;
r&&r.$oj$vnt(this.$oj$yEt);
r&&r.$oj$Tnt(this.$oj$vEt);
r&&r.$oj$Cnt(2);
r&&r.$oj$bnt(this.$oj$hEt);
if(0==this.$oj$xEt){
r&&r.$oj$ynt(this.$oj$cEt);
r&&r.$oj$Snt(1);
r&&r.$oj$xnt(20);
r&&r.$oj$mnt(0);
r&&r.$oj$Cnt(1);
for(var l=[],f=0;f<this.$oj$dEt.length;f++){
var v=this.$oj$dEt[f],d=this.$oj$fEt[f];
l.push((o=new j._cls.$oj$e8())&&o.$oj$u8(v,d));
}
h=this.$oj$dEt[this.$oj$TEt];
a=this.$oj$fEt[this.$oj$TEt];
this.$oj$kEt()&&(e=this.$oj$NEt?"This note cannot\nbe modified.":"Select a note to modify.");
$.each(l,function($,t){
var o=j._cls.$oj$Ont.$oj$Rnt([$]);
s&&t==n.$oj$TEt&&o&&o.$oj$Fnt(0);
r&&r.$oj$Lnt(o);
});
u="Selected Note";
c=j._cls.$oj$l8.$oj$S8(h,n.$oj$yEt);
}else{
r&&r.$oj$xnt(15.5);
r&&r.$oj$mnt(n.$oj$SEt);
var _=(i=new j._cls.$oj$e8())&&i.$oj$u8(n.$oj$EEt,-100),g=j._cls.$oj$Ont.$oj$Rnt([_]);
g&&g.$oj$jnt(n.$oj$cEt);
r&&r.$oj$Lnt(g);
h=n.$oj$EEt;
a=-100;
u="Position";
c=j._cls.$oj$l8.$oj$S8(n.$oj$EEt,n.$oj$yEt);
}
s&&r&&r.$oj$Nnt(4);
n.$oj$Lot(2020,{
"accidental-type":a,
"accidental-layout":n.$oj$gEt,
position:h,
"immutable-label":e,
"ax-label":u,
"ax-value":c
});
n.$oj$Sat(r);
};
f.$oj$kEt=function(){
return 0==this.$oj$xEt?0==this.$oj$TEt||this.$oj$TEt==this.$oj$dEt.length-1:!1;
};
f.$oj$tat=function(){
return 1;
};
f.$oj$nat=function(){
return 3;
};
f.$oj$Rut=function(){
var $=void 0;
if(0==this.$oj$xEt){
var t=j._cls.$oj$e8.$oj$s8(this.$oj$dEt,this.$oj$aEt),o=j._cls.$oj$e8.$oj$s8(this.$oj$dEt,this.$oj$fEt);
$=j._cls.$oj$Xat.$oj$cft(o,t,this.$oj$yEt,this.$oj$SEt,2);
}else 1==this.$oj$xEt?$=this.$oj$EEt==this.$oj$wEt:2==this.$oj$xEt&&($=j._g.$oj$e(this.$oj$EEt,7)==j._g.$oj$e(this.$oj$wEt,7));
this.$oj$pat($,this.$oj$bEt,null);
};
f.$oj$dat=function($){
if(0!=$){
this.$oj$CEt=!0;
this.$oj$Wmt();
}
};
f.$oj$sut=function(){
0==this.$oj$xEt?this.$oj$fEt=this.$oj$aEt.slice(0):this.$oj$EEt=this.$oj$wEt;
this.$oj$Wmt();
};
f.$oj$yut=function(){
var u,h=this,a=this.$oj$Pst(),l=a&&a.$oj$uft(),f=a&&a.$oj$Grt(),v=a&&a.$oj$qht(),d=a&&a.$oj$zht(),_=a&&a.$oj$uct(e),g=a&&a.$oj$uct(n),p=a&&a.$oj$uct(r),y=f&&f.$oj$Bn(),m=f&&f.$oj$Hn(),w=[];
0==_&&(m-=7);
function b($,t){
var o=t%7,j=Math.floor(t/7);
return o>$?j+1:j;
}
var S={},M=!1;
$.each(l,function($){
for(var t=j._cls.$oj$Mt.$oj$It($,y),o=j._cls.$oj$Mt.$oj$It($,m),i=0;7>i;i++){
var n=b(i,t),s=b(i,o+1)-n;
S[$+","+i]={
base:n,
count:s
};
s&&(M=!0);
}
});
var F=!1,E=j._cls.$oj$Xat.$oj$fft(g,p,v,d),x=$.filter(E,function(t){
var o=t.tonic,i=t.scale,n=j._cls.$oj$Mt.$oj$qt(o);
11!=i&&12!=i||46!=o&&16!=o&&56!=o||(F=!0);
return $.some(l,function($){
var t=S[$+","+n];
return t&&t.count>0;
});
}),q=0;
0==_&&(q=F?4:3);
1==p&&0==E.length?w.push(17):x.length<E.length&&w.push(0==_?16:15);
h.$oj$vEt=a&&a.$oj$Grt();
h.$oj$pEt=S;
h.$oj$mEt=x;
h.$oj$xEt=_;
h.$oj$gEt=q;
h.$oj$uat(x.length?(u={},i(u,t,l),i(u,o,x.length),i(u,s,120),i(u,c,12),u):null);
a&&a.$oj$gut(j._cls.$oj$Sut.$oj$fvt(w));
};
f.$oj$Tut=function(){
var $=this.$oj$Pst();
this.$oj$bEt=$&&$.$oj$Iht();
2==this.$oj$bEt&&this.$oj$gat(2);
};
f.$oj$Nat=function($,t){
var j=$[o];
if(t){
var i=t[o];
if(j==i&&this.$oj$mEt.length>1)return!1;
}
return!0;
};
f.$oj$oat=function($){
var i=$[t],n=$[o],r=$[s],e=this.$oj$mEt&&this.$oj$mEt[n];
if(!e)return!1;
var c=e.tonic,l=j._cls.$oj$Mt.$oj$qt(c),f=this.$oj$pEt&&this.$oj$pEt[i+","+l];
if(!f||!f.count)return!1;
{
var v=f.base+r%f.count;
j._cls.$oj$Mt.$oj$Jt(c,v);
}
$[u]=c;
$[h]=e.scale;
$[a]=v;
return!0;
};
f.$oj$Qot=function(o){
var i,n,s=this,r=o[t],e=o[c],l=o[u],f=o[h],v=o[a],d=j._cls.$oj$Mt.$oj$Jt(l,v),_=(i=new j._cls.$oj$j9())&&i.$oj$J7(f),g=null,p=[],y=[],m=[],w=void 0,b=void 0,S=(n=new j._cls.$oj$Wnt())&&n.init(),M=null;
if(0==this.$oj$xEt){
w=0;
M=_&&_.$oj$G9(d,0);
var F=M.length-1;
$.each(M,function($,t){
var o=$&&$.$oj$fn(r),j=$&&$.$oj$ln(0);
p.push(o);
y.push(j);
m.push(0==t||t==F?j:-100);
});
S&&S.$oj$Jnt(j._cls.$oj$l8.$oj$T8(f,l,0));
S&&S.$oj$Knt(j._cls.$oj$l8.$oj$k8(f,l,0));
}else{
b=d&&d.$oj$fn(r);
w=_&&_.$oj$Z9(d);
M=[d];
1==s.$oj$xEt&&(g=j._cls.$oj$Xat.$oj$ift(s.$oj$vEt,b,e));
S&&S.$oj$Jnt(j._cls.$oj$l8.$oj$N8(f));
S&&S.$oj$Knt(j._cls.$oj$l8.$oj$t4(f)+"?");
}
s.$oj$yEt=r;
s.$oj$SEt=w;
s.$oj$dEt=p;
s.$oj$aEt=y;
s.$oj$fEt=m;
s.$oj$wEt=b;
s.$oj$hEt=g;
s.$oj$lEt=M;
s.$oj$cEt=S;
s.$oj$TEt=0;
s.$oj$NEt=!1;
s.$oj$CEt=!1;
s.$oj$mat();
s.$oj$Wmt();
};
f.$oj$hat=function(){
for(var $,t,o=($=new j._cls.$oj$mr())&&$.$oj$Lr(2),i=0==this.$oj$xEt?.33:1,n=this.$oj$lEt,s=0,r=n?n.length:0;r>s;s++){
t=n[s];
o&&o.$oj$Br(t&&t.$oj$an(),i);
}
return o;
};
f.$oj$Xmt=function($){
var t=$["accidental-type"],o=$["delta"],j=$["position"];
if(0==this.$oj$xEt){
if(void 0!==t){
if(this.$oj$kEt())return;
this.$oj$fEt[this.$oj$TEt]=t;
}else if(void 0!==o){
this.$oj$TEt+=o;
this.$oj$TEt<0?this.$oj$TEt=0:this.$oj$TEt>=this.$oj$dEt.length&&(this.$oj$TEt=this.$oj$dEt.length-1);
0!=this.$oj$TEt&&(this.$oj$NEt=!0);
}else if(void 0!==j){
var i=this.$oj$dEt.indexOf(j);
i>=0&&(this.$oj$TEt=i);
i>0&&(this.$oj$NEt=!0);
}
}else void 0!==o?this.$oj$EEt=this.$oj$vEt&&this.$oj$vEt.$oj$zn(this.$oj$EEt+o):void 0!==j&&(this.$oj$EEt=this.$oj$vEt&&this.$oj$vEt.$oj$zn(j));
this.$oj$Wmt();
};
f.$oj$Vmt=function($){
var t=$["position"];
if(void 0!==t){
for(var o=1/0,j=this.$oj$TEt,i=0,n=this.$oj$dEt.length;n>i;i++){
var s=Math.abs(this.$oj$dEt[i]-t);
if(o>s){
o=s;
j=i;
}
}
if(j!=this.$oj$TEt){
this.$oj$TEt=j;
this.$oj$Wmt();
}
}
};
f.$oj$iat=function($,t){
3015==$?this.$oj$Xmt(t):3016==$?this.$oj$Vmt(t):v.$oj_super.prototype.$oj$iat.call(this,$,t);
};
return v;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="StartingPitch",o="Scale",n="PlayMode",s="Scales",r="PlayMode";
j._registerClass({
$oj$LEt:1
},{
$oj$Tlt:1
},function(t,o){
function i(){
j._cls.$oj$Tlt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Kut=function(){
return"Scale Ear Training";
};
t.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init();
t&&t.$oj$edt("ear-scale");
t&&t.$oj$vdt([0,10,11,12,20,21,22,23,24,25,26,30,31,32,33],s);
t&&t.$oj$vdt([0,1,2],r);
t&&t.$oj$mdt([1e3,750,500,333,250,125],"Speed");
t&&t.$oj$fdt("AllowChange");
t&&t.$oj$cdt();
t&&t.$oj$hdt();
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
o.$oj$Gut=function(){
return"ear-scale";
};
o.$oj$rct=function(){
var t,o,i,n=this,e=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(s);
e&&e.$oj$Dct("Scales");
e&&e.$oj$Hct(1);
e&&e.$oj$Pct(1);
var c=[],u=function($,t){
var o=j._cls.$oj$l8.$oj$N8($),i=j._cls.$oj$Fct.$oj$jct(o,$);
i&&i.$oj$Eit(o);
t&&c.push($);
e&&e.$oj$qct(i);
};
u(0,!0);
u(10,!0);
u(11,!0);
u(12,!0);
e&&e.$oj$ict();
u(20,!0);
u(21,!0);
u(22,!0);
u(23,!0);
u(24,!0);
u(25,!0);
u(26,!0);
e&&e.$oj$ict();
u(30,!1);
u(31,!1);
u(32,!1);
u(33,!1);
e&&e.$oj$Bct(c);
n.$oj$zct(e);
var h=(o=new j._cls.$oj$Mct())&&o.$oj$Oct(r);
h&&h.$oj$Dct("Play Mode");
h&&h.$oj$Hct(1);
h&&h.$oj$Bct([0]);
var a=function($,t,o){
var i=j._cls.$oj$Fct.$oj$Jct(null,"scale-playmode:"+$,$);
i&&i.$oj$Eit(t);
i&&i.$oj$Ict(o?o:t);
i&&i.$oj$Kct(61);
h&&h.$oj$qct(i);
};
a(0,"Ascending",null);
a(1,"Descending",null);
a(2,"Asc./Desc.",null);
n.$oj$ict();
n.$oj$zct(h);
n.$oj$yht(16);
n.$oj$ict();
n.$oj$yht(6);
n.$oj$yht(7);
n.$oj$ict();
n.$oj$yht(12);
(i=n.$oj$Sht(12))&&i.$oj$Bct(0);
$.each(n.$oj$Tht(7),function($){
var t,o=j._cls.$oj$Mr.$oj$Or($&&$.$oj$xn()),i=(t=o&&o.$oj$Kr())&&t.copy();
i&&i.$oj$Mn((i&&i.$oj$Dn())-12);
$&&$.$oj$eht(i);
$&&$.$oj$qvt("Range determines the available pitches for the lowest note of the scale.");
var n=$&&$.$oj$Qr();
48==(n&&n.$oj$On())&&72==(n&&n.$oj$Dn())&&$&&$.$oj$Uvt(j._cls.$oj$Cn.$oj$jn(48,60));
});
};
return i;
});
j._registerClass({
$oj$AEt:1
},{
$oj$ast:1
},function(e,c){
function u(){
j._cls.$oj$ast.call(this);
this.$oj$OEt=this.$oj$MEt=this.$oj$DEt=0;
this.$oj$PEt=!1;
this.constructor=u;
this.$oj_id=++j._id;
}
e.$oj$Wst=function(){
return j._cls.$oj$LEt;
};
c.$oj$egt=function($){
var t=this;
function o($){
var t=10==$||12==$||25==$;
return t;
}
if(1==t.$oj$DEt&&o(t.$oj$MEt)&&o($))return!0;
if(20==t.$oj$MEt&&0==$||0==t.$oj$MEt&&20==$||25==t.$oj$MEt&&10==$||10==t.$oj$MEt&&25==$)return!0;
return $==t.$oj$MEt;
};
c.$oj$Jgt=function(){
return[0,10,11,12,20,21,22,23,24,25,26,30,31,32,33];
};
c.$oj$tat=function(){
return 4;
};
c.$oj$nat=function(){
return 1;
};
c.$oj$Uut=function($){
var t=this.$oj$egt($);
this.$oj$pat(t,this.$oj$OEt,[$]);
};
c.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Jgt(),function($){
t.$oj$egt($)&&o.push($);
});
t.$oj$wat(o);
};
c.$oj$yut=function(){
var $,e=this.$oj$Pst(),c=e&&e.$oj$uct(r),u=e&&e.$oj$uct(s),h=e&&e.$oj$Ect(),a=e&&e.$oj$Fht(),l=[],f=j._cls.$oj$Xat.$oj$Yat(h,a),v=f&&f.$oj$Rn();
this.$oj$uat(($={},i($,t,f&&f.$oj$Rn()),i($,o,u),i($,n,c),$));
this.$oj$PEt=1==u.length&&1==v.length;
this.$oj$PEt&&l.push(9);
e&&e.$oj$gut(j._cls.$oj$Sut.$oj$fvt(l));
};
c.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(s),n=o&&o.$oj$Ect();
this.$oj$gat(n);
this.$oj$OEt=o&&o.$oj$Iht();
var r=[];
$.each(this.$oj$Jgt(),function(t){
var o=j._cls.$oj$l8.$oj$N8(t);
r.push({
title:o,
tag:t,
active:$.includes(i,t)
});
});
var e=!1,c=!1,u=!1,h=!1,a=!1;
$.each(i,function($){
30==$?e=!0:31==$?c=!0:32==$?u=!0:33==$?h=!0:$>=20&&26>=$&&(a=!0);
});
var l=[[0,10],[11,12],[20,21],[22,23],[null,24],[25,26]],f=[[0,10],[11,12]];
(e||c)&&l.push([30,31]);
(u||h)&&l.push([32,33]);
a&&f.push([20,21,22,23],[24,25,26]);
if(e||c||u||h){
var v=[];
(e||c)&&v.push(30,31);
(u||h)&&v.push(32,33);
f.push(v);
}
t.$oj$yat(r,0,{
"default":l,
landscape:f
});
};
c.$oj$Nat=function($,j){
var i=$[t],n=$[o];
if(j){
var s=j[t],r=j[o];
if(i==s&&n==r&&!this.$oj$PEt)return!1;
}
return!0;
};
c.$oj$hat=function(i){
var s,r,e,c=this.$oj$Pst(),u=(s=new j._cls.$oj$Mt())&&s.$oj$Vt(i[t]),h=(r=new j._cls.$oj$j9())&&r.$oj$J7(i[o]),a=i[n],l=$.map(h&&h.$oj$G9(u,a),function($){
return $&&$.$oj$an();
}),f=(e=new j._cls.$oj$mr())&&e.$oj$Lr(c&&c.$oj$Ect());
f&&f.$oj$Fr(l,c&&c.$oj$Uht());
return f;
};
c.$oj$Qot=function($){
this.$oj$MEt=$[o];
this.$oj$DEt=$[n];
this.$oj$mat();
this.$oj$vat(this.$oj$cat());
};
return u;
});
}();
function i($,t,o){
t in $?Object.defineProperty($,t,{
value:o,
enumerable:!0,
configurable:!0,
writable:!0
}):$[t]=o;
return $;
}
!function(){
"use strict";
var t="Clef",o="TagIndexKey",n="Scale",s="Octave",r="Filter",e="QuestionMode",c="ComputedNoteTag",u="ComputedScaleTag",h="ComputedOctave";
j._registerClass({
$oj$HEt:1
},{
$oj$Tlt:1
},function($,t){
function o(){
j._cls.$oj$Tlt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$Kut=function(){
return"Scale Identification";
};
$.$oj$oct=function(){
var $,t=($=new j._cls.$oj$Tpt())&&$.init(),o=j._cls.$oj$Xat.$oj$Vat(),i=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
t&&t.$oj$edt("scale");
t&&t.$oj$tdt();
t&&t.$oj$idt();
t&&t.$oj$vdt([0,10,11,12,20,21,22,23,24,25,26],n);
t&&t.$oj$wdt(function($,t,j){
if(1==t[r]){
j&&j.$oj$qgt(!0);
j&&j.$oj$Ydt(o,t["Note"]);
}else{
j&&j.$oj$qgt(!1);
j&&j.$oj$Ydt(i,t["KeySignature"]);
}
},function($,t,j){
if(j&&j.$oj$Rgt()){
t[r]=1;
t["Note"]=j&&j.$oj$zdt(o);
}else{
t[r]=0;
t["KeySignature"]=j&&j.$oj$zdt(i);
}
});
t&&t.$oj$mdt([0,1,2],e);
t&&t.$oj$mdt([0,1,2,3],"CorrectAnswerStyle");
t&&t.$oj$gdt();
t&&t.$oj$ydt();
t&&t.$oj$bdt();
return t;
};
t.$oj$Gut=function(){
return"scale";
};
t.$oj$rct=function(){
var $,t,o,i,s,c,u,h,a=this;
function l($){
var t=j._cls.$oj$l8.$oj$N8($);
return j._cls.$oj$Fct.$oj$jct(t,$);
}
a.$oj$yht(2);
a.$oj$ict();
a.$oj$yht(3);
var f=($=new j._cls.$oj$Mct())&&$.$oj$Oct(n);
f&&f.$oj$Dct("Scales");
f&&f.$oj$Hct(1);
f&&f.$oj$Pct(1);
f&&f.$oj$Bct([0,10,11,12]);
f&&f.$oj$qct(l(0));
f&&f.$oj$qct(l(10));
f&&f.$oj$qct(l(11));
f&&f.$oj$qct(l(12));
f&&f.$oj$ict();
f&&f.$oj$qct(l(20));
f&&f.$oj$qct(l(21));
f&&f.$oj$qct(l(22));
f&&f.$oj$qct(l(23));
f&&f.$oj$qct(l(24));
f&&f.$oj$qct(l(25));
f&&f.$oj$qct(l(26));
a.$oj$ict();
a.$oj$zct(f);
var v=(t=new j._cls.$oj$Mct())&&t.$oj$Oct(r);
v&&v.$oj$Dct("Filter");
v&&v.$oj$Hct(0);
v&&v.$oj$Pct(0);
v&&v.$oj$Bct(0);
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Key Signature",0));
v&&v.$oj$qct(j._cls.$oj$Fct.$oj$jct("By Tonic",1));
a.$oj$ict();
a.$oj$zct(v);
a.$oj$yht(14);
(o=a.$oj$Sht(14))&&o.$oj$Bct([-3,-2,-1,0,1,2,3]);
a.$oj$yht(17);
(i=a.$oj$Sht(17))&&i.$oj$Dct("Tonics");
a.$oj$ict();
var d=(s=new j._cls.$oj$Mct())&&s.$oj$Oct(e);
d&&d.$oj$Dct("Question Mode");
d&&d.$oj$Hct(0);
d&&d.$oj$Pct(0);
d&&d.$oj$Bct(0);
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Use Accidentals","Use Accidentals",0));
(c=d&&d.$oj$ect())&&c.$oj$aht("Use accidentals instead of a key signature.");
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Key Signature and Notes","Key Sig. and Notes",1));
(u=d&&d.$oj$ect())&&u.$oj$aht("Use a key signature and show the full scale.");
d&&d.$oj$ict();
d&&d.$oj$qct(j._cls.$oj$Fct.$oj$lpt("Key Signature and Tonic","Key Sig. and Tonic",2));
(h=d&&d.$oj$ect())&&h.$oj$aht("Use a key signature and show only the tonic.");
a.$oj$zct(d);
a.$oj$ict();
a.$oj$yht(11);
};
t.$oj$vct=function($){
var t=$&&$.$oj$gct();
if(t==r){
var o=0==this.$oj$uct(r);
this.$oj$bct(this.$oj$Zft("KeySignature"),!o);
this.$oj$bct(this.$oj$Zft("Note"),o);
}
};
return o;
});
j._registerClass({
$oj$BEt:1
},{
$oj$ast:1
},function(a,l){
function f(){
j._cls.$oj$ast.call(this);
this.$oj$jEt=this.$oj$FEt=this.$oj$IEt=this.$oj$qEt=null;
this.$oj$REt=this.$oj$UEt=0;
this.constructor=f;
this.$oj_id=++j._id;
}
a.$oj$Wst=function(){
return j._cls.$oj$HEt;
};
l.$oj$Pst=function(){
return f.$oj_super.prototype.$oj$Pst.call(this);
};
l.$oj$Jgt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
l.$oj$zEt=function($){
var t,o=(t=this.$oj$Pst())&&t.$oj$uct(e),i=2==o;
return j._cls.$oj$j9.$oj$J9($,this.$oj$UEt,0,i);
};
l.$oj$tat=function(){
return 1;
};
l.$oj$nat=function(){
return 1;
};
l.$oj$Uut=function($){
var t=this.$oj$zEt($);
this.$oj$pat(t,this.$oj$REt,[$]);
};
l.$oj$sut=function(){
var t=this,o=[];
$.each(this.$oj$Jgt(),function($){
t.$oj$zEt($)&&o.push($);
});
t.$oj$wat(o);
};
l.$oj$yut=function(){
var c,u=this,h=this.$oj$Pst(),a=h&&h.$oj$uft(),l=h&&h.$oj$Grt(),f=h&&h.$oj$qht(),v=h&&h.$oj$zht(),d=h&&h.$oj$uct(e),_=h&&h.$oj$uct(n),g=h&&h.$oj$uct(r),p=l&&l.$oj$Bn(),y=l&&l.$oj$Hn(),m=[];
2!=d&&(y-=7);
function w($,t){
var o=t%7,j=Math.floor(t/7);
return o>$?j+1:j;
}
var b={},S=!1;
$.each(a,function($){
for(var t=j._cls.$oj$Mt.$oj$It($,p),o=j._cls.$oj$Mt.$oj$It($,y),i=0;7>i;i++){
var n=w(i,t),s=w(i,o+1)-n;
b[$+","+i]={
base:n,
count:s
};
s&&(S=!0);
}
});
var M=j._cls.$oj$Xat.$oj$fft(_,g,f,v),F=$.filter(M,function(t){
var o=t.tonic,i=j._cls.$oj$Mt.$oj$qt(o);
return $.some(a,function($){
var t=b[$+","+i];
return t&&t.count>0;
});
});
1==g&&0==M.length?m.push(17):F.length<M.length&&m.push(2==d?15:16);
u.$oj$IEt=h&&h.$oj$Grt();
u.$oj$FEt=b;
u.$oj$qEt=F;
u.$oj$uat(F.length?(c={},i(c,t,a),i(c,o,F.length),i(c,s,120),c):null);
h&&h.$oj$gut(j._cls.$oj$Sut.$oj$fvt(m));
};
l.$oj$Tut=function(){
var t=this,o=this.$oj$Pst(),i=o&&o.$oj$uct(n),s=o&&o.$oj$Iht();
2==s&&this.$oj$gat(2);
this.$oj$REt=s;
var r=[],e=!1,c=!1,u=!1;
$.each(i,function($){
0==$||10==$?e=!0:11==$||12==$?c=!0:u=!0;
});
$.each(t.$oj$Jgt(),function(t){
var o=j._cls.$oj$l8.$oj$N8(t);
r.push({
title:o,
tag:t,
active:$.includes(i,t)
});
});
var h=null,a=null;
if(!e||c||u){
var l=[];
e&&l.push([0,10]);
c&&l.push([11,12]);
if(u){
l.push([20,21,22,23]);
l.push([24,25,26]);
}
h=l;
}else{
h=[[0],[10]];
a=[[0,10]];
}
t.$oj$yat(r,0,{
"default":h,
landscape:a
});
};
l.$oj$Nat=function($,t){
var j=$[o];
if(t){
var i=t[o];
if(j==i&&this.$oj$qEt.length>1)return!1;
}
return!0;
};
l.$oj$oat=function($){
var i=$[t],n=$[o],r=$[s],e=this.$oj$qEt&&this.$oj$qEt[n];
if(!e)return!1;
var a=e.tonic,l=j._cls.$oj$Mt.$oj$qt(a),f=this.$oj$FEt&&this.$oj$FEt[i+","+l];
if(!f||!f.count)return!1;
{
var v=f.base+r%f.count;
j._cls.$oj$Mt.$oj$Jt(a,v);
}
$[c]=a;
$[u]=e.scale;
$[h]=v;
return!0;
};
l.$oj$Qot=function(i){
var n,s,r,a=this,l=i[t],f=(i[o],i[c]),v=i[h],d=i[u];
this.$oj$mat();
var _=j._cls.$oj$Mt.$oj$Jt(f,v),g=(n=new j._cls.$oj$j9())&&n.$oj$J7(d);
this.$oj$UEt=d;
this.$oj$jEt=g&&g.$oj$G9(_,0);
var p=(s=new j._cls.$oj$nnt())&&s.init(),y=(r=this.$oj$Pst())&&r.$oj$uct(e),m=0;
if(1==y||0==y){
p&&p.$oj$Cnt(1);
p&&p.$oj$xnt(20);
}else p&&p.$oj$xnt(15.5);
(2==y||1==y)&&(m=g&&g.$oj$Z9(_));
p&&p.$oj$vnt(l);
p&&p.$oj$mnt(m);
p&&p.$oj$Tnt(this.$oj$IEt);
if(2==y){
var w=j._cls.$oj$Ont.$oj$Ant([$.first(this.$oj$jEt)]);
p&&p.$oj$Lnt(w);
}else $.each(this.$oj$jEt,function($){
var t=j._cls.$oj$Ont.$oj$Ant([$]);
p&&p.$oj$Lnt(t);
});
a.$oj$Sat(p);
};
l.$oj$hat=function(){
for(var $,t,o=($=new j._cls.$oj$mr())&&$.$oj$Lr(2),i=this.$oj$jEt,n=0,s=i?i.length:0;s>n;n++){
t=i[n];
o&&o.$oj$Br(t&&t.$oj$an(),.33);
}
return o;
};
return f;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$WEt:1
},{
$oj$XEt:1
},function($,t){
function o(){
j._cls.$oj$XEt.call(this);
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$VEt=function($,t){
t["Clef"]=$&&$.$oj$JEt();
t["KeySignature"]=$&&$.$oj$KEt();
t["NoteLetter"]=$&&$.$oj$KEt();
t["NoteQuality"]=$&&$.$oj$KEt();
};
t.$oj$QEt=function($,t){
t&&t.$oj$GEt($["Clef"]);
t&&t.$oj$YEt($["KeySignature"]);
t&&t.$oj$YEt($["NoteLetter"]);
t&&t.$oj$YEt($["NoteQuality"]);
};
t.$oj$ZEt=function(){
var $={},t={},o={};
$["Clef"]=34;
$["KeySignature"]=0;
$["NoteLetter"]=0;
$["NoteQuality"]=0;
this.$oj$eSt(t);
this.$oj$tSt(t);
this.$oj$nSt(t);
o["prefix"]="accidental";
o["defaults"]=$;
o["choices"]=t;
return o;
};
t.$oj$rSt=function($){
var t,o=$["Clef"],i=$["KeySignature"],n=$["NoteLetter"],s=$["NoteQuality"],r=22==o||26==o||24==o?3:4,e=j._cls.$oj$Mt.$oj$Qt(n,s,r),c=[e];
if(-1==o){
c=this.$oj$iSt(c);
var u=this.$oj$sSt(c,null,null,3);
this.$oj$xat(u);
}else{
var h=(t=new j._cls.$oj$nnt())&&t.init();
h&&h.$oj$vnt(o);
h&&h.$oj$mnt(i);
h&&h.$oj$xnt(16);
h&&h.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(6,-6));
h&&h.$oj$knt(c);
this.$oj$Sat(h);
}
this.$oj$Bst(this.$oj$oSt(c));
};
return o;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$uSt:1
},{
$oj$XEt:1
},function(t,o){
function i(){
j._cls.$oj$XEt.call(this);
this.$oj$aSt=null;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Gut=function(){
return"analysis";
};
o.$oj$VEt=function($,t){
t["Clef"]=$&&$.$oj$JEt();
t["KeySignature"]=$&&$.$oj$KEt();
var o=$&&$.$oj$Rgt(),j=$&&$.$oj$Vdt();
if(o){
t["ScaleType"]=1;
t["MajorSymbol"]=0;
t["MinorSymbol"]=j;
}else{
t["ScaleType"]=0;
t["MajorSymbol"]=j;
t["MinorSymbol"]=22;
}
};
o.$oj$QEt=function($,t){
t&&t.$oj$GEt($["Clef"]);
t&&t.$oj$YEt($["KeySignature"]);
var o=1==$["ScaleType"],j=$["MajorSymbol"],i=$["MinorSymbol"];
t&&t.$oj$qgt(o);
t&&t.$oj$tvt(o?i:j);
};
o.$oj$ZEt=function(){
var t=this,o={},i={},n={},s={};
o["Clef"]=34;
o["KeySignature"]=0;
o["ScaleType"]=0;
o["ChordType"]=0;
o["MajorSymbol"]=0;
o["MajorTriadSymbol"]=0;
o["MajorSeventhSymbol"]=69;
o["MinorSymbol"]=22;
o["MinorTriadSymbol"]=22;
o["MinorSeventhSymbol"]=76;
this.$oj$eSt(i);
this.$oj$tSt(i);
var r=[0,1,2,3,4,5,6,46,47,48,49,50,23,25,106,110,57,58,59,60,61,62,86,87,88,89,90,96,97,98,99,100],e=[69,70,71,72,73,74,75,46,47,48,49,50,77,80,85,107,57,58,59,60,61,62,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,55,56],c=[22,23,24,25,26,28,29,46,47,48,49,50,0,51,27,30,108,63,64,65,66,67,68,91,92,93,94,95,101,102,103,104,105],u=[76,77,78,80,81,83,84,46,47,48,49,50,79,82,85,109,63,64,65,66,67,68,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],h=r.concat(e),a=c.concat(u);
i["ScaleType"]=[0,1];
i["ChordType"]=[0,1,2];
var l={};
$.each(h.concat(a),function($){
l[$]=j._cls.$oj$l8.$oj$n4($);
});
s["title"]=l;
i["MajorTriadSymbol"]=r;
i["MajorSeventhSymbol"]=e;
i["MinorTriadSymbol"]=c;
i["MinorSeventhSymbol"]=u;
i["MajorSymbol"]=h;
i["MinorSymbol"]=a;
n["prefix"]="analysis";
n["defaults"]=o;
n["choices"]=i;
n["strings"]=s;
t.$oj$aSt=i;
return n;
};
o.$oj$fSt=function($,t){
return 0==$?t?"MinorTriadSymbol":"MajorTriadSymbol":1==$?t?"MinorSeventhSymbol":"MajorSeventhSymbol":t?"MinorSymbol":"MajorSymbol";
};
o.$oj$lSt=function(t,o,j){
var i=-1,n=this.$oj$fSt(0,j),s=this.$oj$fSt(1,j),r=this.$oj$fSt(2,j),e=[0,69,1,70,2,71,3,72,4,73,5,74,6,75,86,7,87,8,88,9,89,10,90,11,96,12,97,13,98,14,99,15,100,16,96,17,97,18,98,19,99,20,100,21,22,76,23,77,24,78,51,79,25,80,26,81,27,82,28,83,29,84,30,85,91,31,92,32,93,33,94,34,95,35,101,36,102,37,103,38,104,39,105,40,101,41,102,42,103,43,104,44,105,45,i,55,i,56,106,107,108,109,i,i],c=void 0,u=0,h=void 0,a=void 0;
do{
h=e[u++];
a=e[u++];
h==t&&(c=[a,h,a]);
a==t&&(c=[h,h,a]);
}while(!c&&(h>=0||a>=0));
c&&$.includes(this.$oj$aSt[n],c[1])?o[n]=c[1]:$.includes(this.$oj$aSt[n],t)&&(o[n]=t);
c&&$.includes(this.$oj$aSt[s],c[2])?o[s]=c[2]:$.includes(this.$oj$aSt[s],t)&&(o[s]=t);
$.includes(this.$oj$aSt[r],t)&&(o[r]=t);
};
o.$oj$rSt=function(t){
var o,i,n,s,r=this,e=t["Clef"],c=t["KeySignature"],u=t["ScaleType"],h=1==u,a=j._cls.$oj$j9.$oj$U9(u,c,4),l=a&&a.$oj$Bt();
l>=0&&2>=l&&(a=j._cls.$oj$j9.$oj$U9(u,c,5));
var f=t["ChordType"],v=this.$oj$fSt(f,h),d=t[v];
this.$oj$lSt(d,t,h);
t[v]=d;
var _=j._cls.$oj$q7.$oj$V7(d),g=a&&a.$oj$cn(_&&_.$oj$W7()),p=g&&g.$oj$dn((o=_&&_.$oj$X7())&&o.$oj$e2()),y=j._cls.$oj$l8.$oj$d8(a&&a.$oj$xn(),0),m=j._cls.$oj$l8.$oj$v8(a&&a.$oj$xn(),0),w=j._cls.$oj$l8.$oj$n4(d),b=w;
if(-1==e){
var S=$.min($.map(p,function($){
return $&&$.$oj$an();
})),M=Math.ceil((S-71)/12);
M>0&&(p=r.$oj$cSt(-M,p));
var F=y+" "+(h?"minor":"Major")+": "+w,E=m+" "+(h?"minor":"Major")+", "+b,x=r.$oj$sSt(p,F,E,3);
r.$oj$xat(x);
}else{
p=r.$oj$hSt(p,e);
var q=(i=new j._cls.$oj$nnt())&&i.init();
q&&q.$oj$vnt(e);
q&&q.$oj$mnt(c);
q&&q.$oj$xnt(16);
q&&q.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(6,-6));
var C=j._cls.$oj$Ont.$oj$Ant(p);
q&&q.$oj$Lnt(C);
var T=(n=new j._cls.$oj$Wnt())&&n.init();
T&&T.$oj$Jnt(y+":");
T&&T.$oj$Knt(m+":");
q&&q.$oj$gnt(T);
var D=(s=new j._cls.$oj$Wnt())&&s.init();
D&&D.$oj$Jnt(w);
C&&C.$oj$jnt(D);
r.$oj$Sat(q);
}
r.$oj$Bst(r.$oj$oSt(p));
};
return i;
});
}();
!function(){
"use strict";
var t="Groups",o="Additional";
j._registerClass({
$oj$XEt:1
},null,function(i,n){
function s(){
this.$oj$pSt=this.$oj$dSt=this.$oj$vSt=this.$oj$mSt=this.$oj$gSt=this.$oj$ySt=null;
this.constructor=s;
this.$oj_id=++j._id;
}
n.$oj$Ust=function($){
this.$oj$pSt=$;
};
n.$oj$zst=function(){
return this.$oj$pSt;
};
n.$oj$Bst=function($){
this.$oj$dSt=$;
};
n.$oj$cat=function(){
return this.$oj$dSt;
};
n.$oj$bSt=function(){
this.$oj$mSt||(this.$oj$mSt=this.$oj$ZEt());
return this.$oj$mSt;
};
n.$oj$wSt=function(){
this.$oj$Lot(2401,{
groups:this.$oj$vSt,
"enabled-triggers":this.$oj$ESt()
});
};
n.$oj$SSt=function(){
this.$oj$Lot(2400,{});
};
n.$oj$oSt=function($){
for(var t,o,i=(t=new j._cls.$oj$mr())&&t.$oj$Lr(2),n=0,s=$?$.length:0;s>n;n++){
o=$[n];
i&&i.$oj$jr(o&&o.$oj$an(),0,1);
}
return i;
};
n.$oj$cSt=function(t,o){
return $.map(o,function($){
return $&&$.$oj$wn(t);
});
};
n.$oj$iSt=function($){
for(var t,o=0,j=$?$.length:0;j>o;o++){
t=$[o];
if((t&&t.$oj$an())<60)return this.$oj$cSt(1,$);
}
return $;
};
n.$oj$hSt=function(t,o){
var j=this,i=void 0,n=void 0,s=void 0,r=void 0;
function e(){
s=-99;
r=99;
$.each(t,function($){
var t=$&&$.$oj$fn(o);
if(t>s){
i=$;
s=t;
}
if(r>t){
n=$;
r=t;
}
});
}
e();
for(;s>6;){
t=j.$oj$cSt(-1,t);
e();
}
for(;-6>r;){
t=j.$oj$cSt(1,t);
e();
}
return t;
};
n.$oj$eSt=function($){
$["KeySignature"]=[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7];
};
n.$oj$tSt=function($){
$["Clef"]=[34,22,28,26,32,30,24,-1];
};
n.$oj$nSt=function($){
$["NoteLetter"]=[0,1,2,3,4,5,6];
$["NoteQuality"]=[-2,-1,0,1,2];
};
n.$oj$Sat=function($){
this.$oj$ySt=$;
this.$oj$Lot(2402,{});
};
n.$oj$sSt=function(t,o,i,n){
var s,r,e,c=(s=new j._cls.$oj$nit())&&s.init(),u=[],h=[];
c&&c.$oj$fit(1);
$.each(t,function($){
{
var t,o=(t=new j._cls.$oj$pit())&&t.init(),i=$&&$.$oj$xn(),s=j._cls.$oj$l8.$oj$m8(i,n),r=j._cls.$oj$l8.$oj$v8(i,0);
j._cls.$oj$Mt.$oj$Rt(i);
}
o&&o.$oj$dit($&&$.$oj$an());
o&&o.$oj$vit(0);
c&&c.$oj$mit(o);
u.push(s);
h.push(r);
});
c&&c.$oj$ait(j._cls.$oj$Cn.$oj$jn(60,84));
if(o){
var a=(r=new j._cls.$oj$git())&&r.init();
a&&a.$oj$wit(o);
a&&a.$oj$Eit(i);
c&&c.$oj$lit(a);
}
if(u.length){
var l=(e=new j._cls.$oj$git())&&e.init();
l&&l.$oj$wit(u.join(" -- "));
l&&l.$oj$Eit(h.join(", "));
c&&c.$oj$cit(l);
}
return c;
};
n.$oj$xat=function($){
this.$oj$gSt=$;
this.$oj$Lot(2403,{});
};
n.$oj$ZEt=function(){
return{};
};
n.$oj$ESt=function(){
return[];
};
n.$oj$xSt=function(){};
n.$oj$TSt=function(){
return null;
};
n.$oj$rSt=function(){};
n.$oj$NSt=function(){};
n.$oj$VEt=function(){};
n.$oj$QEt=function(){};
n.$oj$Lot=function($,t){
this.$oj$pSt._sendCommand($,t);
};
n.$oj$Sot=function(){
var $={};
$[t]=this.$oj$vSt||{};
var j=this.$oj$TSt();
j&&($[o]=j);
return $;
};
n.$oj$uut=function($){
var t,o=(t=new j._cls.$oj$Yet())&&t.init(),i=o&&o.$oj$Rtt(this.$oj$ySt,$["width"],$["height"],0);
return i&&i.$oj$aut();
};
n.$oj$fut=function($){
var t,o=(t=new j._cls.$oj$Mrt())&&t.init(),i=o&&o.$oj$Qrt(this.$oj$gSt,$["width"],$["height"],$["scale"],$["options"]);
return i&&i.$oj$aut();
};
n.$oj$Zut=function($,t){
var o;
if(1400==$)return this.$oj$bSt();
if(1401==$)return this.$oj$Sot();
if(1403==$)return this.$oj$uut(t);
if(1404==$)return this.$oj$fut(t);
if(1402==$)return(o=this.$oj$cat())&&o.$oj$aut();
};
n.$oj$CSt=function(){
this.$oj$rSt(this.$oj$vSt);
this.$oj$wSt();
};
n.$oj$kSt=function(j){
var i=this,n=j["state"],s=this.$oj$bSt(),r=s["defaults"],e=s["choices"],c=n[t]||{},u=n[o]||{},h={};
$.each(r,function(t,o){
var j=c[o],i=r[o];
void 0!==j&&$.includes(e[o],j)&&(i=j);
h[o]=i;
});
i.$oj$vSt=h;
i.$oj$xSt(u);
};
n.$oj$LSt=function($){
var t=$["value"],o=$["group"];
this.$oj$vSt[o]=t;
this.$oj$rSt(this.$oj$vSt);
this.$oj$wSt();
this.$oj$SSt();
};
n.$oj$ASt=function($){
var t=$["name"];
this.$oj$NSt(t);
this.$oj$wSt();
this.$oj$SSt();
};
n.$oj$iat=function($,t){
3400==$?this.$oj$CSt():3401==$?this.$oj$kSt(t):3402==$?this.$oj$wSt():3403==$?this.$oj$LSt(t):3404==$&&this.$oj$ASt(t);
};
return s;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$OSt:1
},{
$oj$XEt:1
},function(t,o){
function i(){
j._cls.$oj$XEt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$VEt=function($,t){
t["Clef"]=$&&$.$oj$JEt();
t["KeySignature"]=$&&$.$oj$KEt();
t["NoteLetter"]=$&&$.$oj$KEt();
t["NoteQuality"]=$&&$.$oj$KEt();
t["Chord"]=$&&$.$oj$Vdt();
};
o.$oj$QEt=function($,t){
t&&t.$oj$GEt($["Clef"]);
t&&t.$oj$YEt($["KeySignature"]);
t&&t.$oj$YEt($["NoteLetter"]);
t&&t.$oj$YEt($["NoteQuality"]);
t&&t.$oj$tvt($["Chord"]);
};
o.$oj$ZEt=function(){
var t={},o={},i={},n={};
t["Clef"]=34;
t["KeySignature"]=0;
t["NoteLetter"]=0;
t["NoteQuality"]=0;
t["Chord"]=0;
this.$oj$eSt(o);
this.$oj$tSt(o);
this.$oj$nSt(o);
var s={},r={},e={},c={},u=[0,1,3,2,4,5,6,7,15,16,14,8,17,18,19];
$.each(u,function($){
e[$]=j._cls.$oj$l8.$oj$Z8($);
s[$]=j._cls.$oj$l8.$oj$Q8($);
r[$]=j._cls.$oj$l8.$oj$G8($);
c[$]=j._cls.$oj$l8.$oj$Y8($);
});
n["symbol"]=e;
n["short"]=s;
n["title"]=r;
n["ax"]=c;
o["Chord"]=u;
i["prefix"]="chord";
i["defaults"]=t;
i["choices"]=o;
i["strings"]=n;
return i;
};
o.$oj$rSt=function($){
var t,o,i=$["Clef"],n=$["KeySignature"],s=$["NoteLetter"],r=$["NoteQuality"],e=$["Chord"],c=j._cls.$oj$Mt.$oj$Qt(s,r,4),u=j._cls.$oj$Q7.$oj$n2(e),h=u&&u.$oj$e2(),a=c&&c.$oj$dn(h);
if(-1==i){
a=this.$oj$iSt(a);
var l=j._cls.$oj$l8.$oj$Y8(e),f=this.$oj$sSt(a,l,null,3);
this.$oj$xat(f);
}else{
a=this.$oj$hSt(a,i);
var v=(t=new j._cls.$oj$nnt())&&t.init();
v&&v.$oj$vnt(i);
v&&v.$oj$mnt(n);
v&&v.$oj$xnt(16);
v&&v.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(6,-6));
var d=j._cls.$oj$Ont.$oj$Ant(a);
v&&v.$oj$Lnt(d);
var _=(o=new j._cls.$oj$Wnt())&&o.init();
_&&_.$oj$Jnt(j._cls.$oj$l8.$oj$Z8(e));
_&&_.$oj$Knt(j._cls.$oj$l8.$oj$Y8(e));
d&&d.$oj$jnt(_);
this.$oj$Sat(v);
}
this.$oj$Bst(this.$oj$oSt(a));
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$MSt:1
},{
$oj$XEt:1
},function(t,o){
function i(){
j._cls.$oj$XEt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$VEt=function($,t){
t["Clef"]=$&&$.$oj$JEt();
t["KeySignature"]=$&&$.$oj$KEt();
t["NoteLetter"]=$&&$.$oj$KEt();
t["NoteQuality"]=$&&$.$oj$KEt();
t["Interval"]=$&&$.$oj$Vdt();
t["Ascending"]=$&&$.$oj$Rgt()?1:0;
};
o.$oj$QEt=function($,t){
t&&t.$oj$GEt($["Clef"]);
t&&t.$oj$YEt($["KeySignature"]);
t&&t.$oj$YEt($["NoteLetter"]);
t&&t.$oj$YEt($["NoteQuality"]);
t&&t.$oj$tvt($["Interval"]);
t&&t.$oj$qgt($["Ascending"]>0);
};
o.$oj$ZEt=function(){
var t={},o={},i={},n={};
t["Clef"]=34;
t["KeySignature"]=0;
t["NoteLetter"]=0;
t["NoteQuality"]=0;
t["Interval"]=85;
t["Ascending"]=1;
this.$oj$eSt(o);
this.$oj$tSt(o);
this.$oj$nSt(o);
var s=[26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],r={},e={};
$.each(s,function($){
r[$]=j._cls.$oj$l8.$oj$j8($);
e[$]=j._cls.$oj$l8.$oj$I8($);
});
n["title"]=r;
n["ax"]=e;
o["Ascending"]=[0,1];
o["Interval"]=s;
i["prefix"]="interval";
i["defaults"]=t;
i["choices"]=o;
i["strings"]=n;
return i;
};
o.$oj$rSt=function($){
var t,o,i,n=$["Clef"],s=$["KeySignature"],r=$["NoteLetter"],e=$["NoteQuality"],c=$["Interval"],u=!!$["Ascending"],h=j._cls.$oj$Mt.$oj$Qt(r,e,4),a=(t=new j._cls.$oj$K7())&&t.$oj$J7(c),l=[h,h&&h.$oj$pn(a,u)];
if(-1==n){
l=this.$oj$iSt(l);
var f=j._cls.$oj$l8.$oj$I8(c),v=this.$oj$sSt(l,f,null,3);
this.$oj$xat(v);
}else{
l=this.$oj$hSt(l,n);
var d=(o=new j._cls.$oj$nnt())&&o.init();
d&&d.$oj$vnt(n);
d&&d.$oj$mnt(s);
d&&d.$oj$xnt(16);
d&&d.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(6,-6));
var _=j._cls.$oj$Ont.$oj$Ant(l);
d&&d.$oj$Lnt(_);
var g=(i=new j._cls.$oj$Wnt())&&i.init();
g&&g.$oj$Jnt(j._cls.$oj$l8.$oj$j8(c));
g&&g.$oj$Knt(j._cls.$oj$l8.$oj$I8(c));
_&&_.$oj$jnt(g);
this.$oj$Sat(d);
}
this.$oj$Bst(this.$oj$oSt(l));
};
return i;
});
}();
!function(){
"use strict";
var $="Tones";
j._registerClass({
$oj$DSt:1
},{
$oj$XEt:1
},function(t,o){
function i(){
j._cls.$oj$XEt.call(this);
this.$oj$PSt=this.$oj$HSt=null;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$Gut=function(){
return"matrix";
};
o.$oj$xSt=function(t){
t||(t={});
this.$oj$HSt=t[$];
this.$oj$HSt||(this.$oj$HSt=[]);
this.$oj$BSt();
};
o.$oj$TSt=function(){
var t={};
t[$]=this.$oj$HSt;
return t;
};
o.$oj$VEt=function(){};
o.$oj$QEt=function(){};
o.$oj$ZEt=function(){
var $={},t={},o={},j=["0","1","2","3","4","5","6","7","8","9","10","11","reset","delete"];
t["ToneStyle"]=0;
o["ToneStyle"]=[0,1,2,3];
$["prefix"]="matrix";
$["defaults"]=t;
$["choices"]=o;
$["triggers"]=j;
return $;
};
o.$oj$BSt=function(){
var $=[];
if(this.$oj$HSt.length>0){
$.push("delete");
$.push("reset");
}
for(var t=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],o=0;o<this.$oj$HSt.length;o++)t[this.$oj$HSt[o]]=!1;
for(var j=0;12>j;j++)t[j]&&$.push(""+j);
this.$oj$PSt=$;
};
o.$oj$jSt=function(){
for(var $=this.$oj$HSt,t=$.length,o=[],j=[],i=[],n=0;t>n;n++){
o[n]=[];
for(var s=0;n>=s;s++){
o[n][s]=(12+($[0]+($[s]-$[n])))%12;
o[s][n]=(12+($[0]+($[n]-$[s])))%12;
}
j[n]=(12+($[0]-$[n]))%12;
i[n]=(12+($[n]-$[0]))%12;
}
this.$oj$Lot(2404,{
tones:o,
"h-labels":i,
"v-labels":j
});
};
o.$oj$FSt=function($){
for(var t={},o=[],i=[],n=void 0,s=void 0,r=0;12>r;r++){
if(2==$)n=s=j._cls.$oj$l8.$oj$p8(r,7);else if(3==$)n=s=j._cls.$oj$l8.$oj$p8(r,8);else if(1==$){
n=j._cls.$oj$l8.$oj$L8(r,0,1,!1);
s=j._cls.$oj$l8.$oj$O8(r,0,1,!1);
}else{
n=j._cls.$oj$l8.$oj$L8(r,0,2,!1);
s=j._cls.$oj$l8.$oj$O8(r,0,2,!1);
}
o.push(n);
i.push(s);
}
t["tone-title"]=o;
t["tone-ax"]=i;
this.$oj$Lot(2405,{
strings:t
});
};
o.$oj$ESt=function(){
return this.$oj$PSt;
};
o.$oj$NSt=function($){
"delete"==$?this.$oj$HSt.pop():"reset"==$?this.$oj$HSt=[]:this.$oj$HSt.push(parseInt($,10));
this.$oj$jSt();
this.$oj$BSt();
};
o.$oj$rSt=function($){
this.$oj$FSt($["ToneStyle"]);
this.$oj$jSt();
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$ISt:1
},{
$oj$XEt:1
},function(t,o){
function i(){
j._cls.$oj$XEt.call(this);
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$VEt=function($,t){
t["Clef"]=$&&$.$oj$JEt();
t["NoteLetter"]=$&&$.$oj$KEt();
t["NoteQuality"]=$&&$.$oj$KEt();
t["Scale"]=$&&$.$oj$Vdt();
t["DisplayMode"]=$&&$.$oj$KEt();
};
o.$oj$QEt=function($,t){
t&&t.$oj$GEt($["Clef"]);
t&&t.$oj$YEt($["NoteLetter"]);
t&&t.$oj$YEt($["NoteQuality"]);
t&&t.$oj$tvt($["Scale"]);
t&&t.$oj$YEt($["DisplayMode"]);
};
o.$oj$ZEt=function(){
var t={},o={},i={},n={};
t["Clef"]=34;
t["NoteLetter"]=0;
t["NoteQuality"]=0;
t["Scale"]=0;
t["DisplayMode"]=0;
this.$oj$tSt(o);
this.$oj$nSt(o);
var s=[0,10,11,12,20,21,22,23,24,25,26],r={};
$.each(s,function($){
r[$]=j._cls.$oj$l8.$oj$N8($);
});
n["title"]=r;
o["Scale"]=s;
o["DisplayMode"]=[0,1];
i["prefix"]="scale";
i["defaults"]=t;
i["choices"]=o;
i["strings"]=n;
return i;
};
o.$oj$rSt=function(t){
var o,i,n,s=this,r=t["Clef"],e=t["NoteLetter"],c=t["NoteQuality"],u=t["Scale"],h=t["DisplayMode"],a=j._cls.$oj$Mt.$oj$Qt(e,c,4),l=(o=new j._cls.$oj$j9())&&o.$oj$J7(u),f=0;
0==h&&(f=l&&l.$oj$Z9(a));
var v=l&&l.$oj$G9(a,0);
if(-1==r){
v=this.$oj$iSt(v);
var d=j._cls.$oj$l8.$oj$T8(u,a&&a.$oj$xn(),0),_=null,g=this.$oj$sSt(v,d,_,2),p=0;
$.each(g&&g.$oj$Yrt(),function($){
$&&$.$oj$vit(p++);
});
s.$oj$xat(g);
}else{
v=s.$oj$hSt(v,r);
var y=(i=new j._cls.$oj$nnt())&&i.init();
y&&y.$oj$vnt(r);
y&&y.$oj$mnt(f);
y&&y.$oj$xnt(20);
y&&y.$oj$Cnt(1);
y&&y.$oj$Snt(2);
y&&y.$oj$Tnt(j._cls.$oj$Cn.$oj$jn(6,-6));
$.each(v,function($){
var t=j._cls.$oj$Ont.$oj$Ant([$]);
y&&y.$oj$Lnt(t);
});
s.$oj$Sat(y);
}
for(var m,w=(n=new j._cls.$oj$mr())&&n.$oj$Lr(2),b=0,S=v?v.length:0;S>b;b++){
m=v[b];
w&&w.$oj$Br(m&&m.$oj$an(),.33);
}
s.$oj$Bst(w);
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$qSt:1
},null,function(t,o){
function i(){
this.$oj$RSt=null;
this.$oj$USt=0;
this.$oj$zSt=!1;
this.constructor=i;
this.$oj_id=++j._id;
}
o.$oj$WSt=function(){
return this.$oj$zSt;
};
t.$oj$XSt=function(t){
var o;
if(!$.isArray(t))return null;
return(o=this.alloc())&&o.$oj$VSt(t);
};
o.$oj$VSt=function($){
var t=this;
if(t=i.$oj_super.prototype.init.call(this)){
t.$oj$RSt=$;
t.$oj$USt=0;
t.$oj$zSt=!0;
}
return t;
};
o.$oj$Rgt=function(){
var t=this.$oj$RSt[this.$oj$USt++];
if($.isBoolean(t))return!!t;
if($.isNumber(t))return 0!=t;
this.$oj$JSt();
return!1;
};
o.$oj$KSt=function(){
var t=this.$oj$RSt[this.$oj$USt++];
if($.isNumber(t))return t;
this.$oj$JSt();
return 0;
};
o.$oj$QSt=function(){
var t=this.$oj$RSt[this.$oj$USt++];
if($.isNumber(t))return t;
this.$oj$JSt();
return 0;
};
o.$oj$GSt=function(){
var $=this.$oj$QSt(),t=this.$oj$QSt(),o=this.$oj$QSt(),j=this.$oj$QSt();
return{
x:$,
y:t,
width:o,
height:j
};
};
o.$oj$YSt=function(){
var t=this.$oj$RSt[this.$oj$USt++];
if($.isString(t))return t;
if(null===t)return null;
this.$oj$JSt();
return null;
};
o.$oj$ZSt=function(){
var t=this.$oj$RSt[this.$oj$USt++];
if($.isArray(t))return t;
if(null===t)return null;
this.$oj$JSt();
return null;
};
o.$oj$ext=function(){
var t=this,o=this.$oj$RSt[this.$oj$USt++];
if($.isObject(o)&&$.every(o,function(t){
return $.isNumber(t);
}))return o;
if(o){
t.$oj$JSt();
return null;
}
return null;
};
o.$oj$txt=function(){
return j._cls.$oj$qSt.$oj$XSt(this.$oj$ZSt());
};
o.$oj$nxt=function($){
for(var t=[],o=this.$oj$RSt.length;this.$oj$USt<o;){
var j=$(this.$oj$RSt[this.$oj$USt++]);
j&&t.push(j);
}
return t;
};
o.$oj$JSt=function(){
this.$oj$zSt=!1;
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$rxt:1
},null,function($){
function t(){
this.constructor=t;
this.$oj_id=++j._id;
}
function i($,t){
var j;
if($==t)return!0;
if(o.isObject($)&&o.isObject(t))return(j=$)&&j.isEqual_(t);
return!1;
}
$.$oj$ixt=function($,t){
Array.prototype.push.apply($,t);
};
$.$oj$sxt=function($,t,o){
$.splice(o,0,t);
};
$.$oj$oxt=function($,t){
$.splice(t,1);
};
$.$oj$uxt=function($,t){
if($===t)return!0;
var o=$.length;
if(o!=t.length)return!1;
for(var j=0;o>j;j++)if(!i($[j],t[j]))return!1;
return!0;
};
$.$oj$axt=function($,t){
return j._cls.$oj$rxt.$oj$fxt($,t)>=0;
};
$.$oj$fxt=function($,t){
for(var o=0,j=$.length;j>o;o++)if(i($[o],t))return o;
return-1;
};
return t;
});
}();
!function(){
"use strict";
j._registerCategory({
$oj$Cn:1
},function($,t){
function o(){
this.$oj$kn=this.$oj$Ln=0;
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$cut=function($){
var t,o=j._cls.$oj$qSt.$oj$XSt($),i=o&&o.$oj$KSt(),n=o&&o.$oj$KSt();
return o&&o.$oj$WSt()?(t=this.alloc())&&t.$oj$Fn(i,n):null;
};
t.$oj$aut=function(){
return[this.$oj$On(),this.$oj$Dn()];
};
return o;
});
j._registerCategory({
$oj$mr:1
},function(t,o){
function i(){
this.$oj$gr=this.$oj$yr=null;
this.$oj$br=this.$oj$wr=this.$oj$Er=this.$oj$Sr=0;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$cxt=function($){
var t,o,i,n=this,s=j._cls.$oj$qSt.$oj$XSt($),r=s&&s.$oj$KSt(),e=s&&s.$oj$KSt(),c=s&&s.$oj$QSt(),u=(t=s&&s.$oj$txt())&&t.$oj$nxt(function($){
var t,o=null,i=j._cls.$oj$qSt.$oj$XSt($),n=i&&i.$oj$KSt(),s=i&&i.$oj$QSt(),r=i&&i.$oj$QSt();
i&&i.$oj$WSt()&&(o=(t=new j._cls.$oj$fr())&&t.$oj$vr(n,s,r));
return o;
}),h=(o=s&&s.$oj$txt())&&o.$oj$nxt(function($){
var t,o=null,i=j._cls.$oj$qSt.$oj$XSt($),n=i&&i.$oj$KSt(),r=i&&i.$oj$QSt(),e=i&&i.$oj$QSt(),c=i&&i.$oj$QSt(),u=i&&i.$oj$KSt(),h=i&&i.$oj$QSt(),a=i&&i.$oj$KSt(),l=i&&i.$oj$QSt();
i&&i.$oj$WSt()?o=(t=new j._cls.$oj$Xn())&&t.$oj$ar(n,r,e,c,u,h,a,l):s&&s.$oj$JSt();
return o;
});
return(i=n.alloc())&&i.$oj$kr(r,e,c,u,h);
};
o.$oj$aut=function(){
var t=this;
return[this.$oj$Er,this.$oj$br,this.$oj$Sr,$.map(this.$oj$yr,function($){
return[$&&$.$oj$an(),$&&$.$oj$pr(),$&&$.$oj$dr()];
}),$.map(t.$oj$Ir(),function($){
return[$&&$.$oj$an(),$&&$.$oj$tr(),$&&$.$oj$nr(),$&&$.$oj$rr(),$&&$.$oj$ir(),$&&$.$oj$sr(),$&&$.$oj$or(),$&&$.$oj$ur()];
})];
};
return i;
});
j._registerCategory({
$oj$H4:1
},function(t,o){
function i(){
this.$oj$Fet=this.$oj$Iet=this.$oj$qet=null;
this.$oj$Ret=this.$oj$Uet=this.$oj$zet=this.$oj$Wet=this.$oj$Xet=0;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$hxt=function($){
var t;
return(t=j._cls.$oj$qSt.$oj$XSt($))&&t.$oj$nxt(function($){
var t,o=void 0,i=j._cls.$oj$qSt.$oj$XSt($),n=i&&i.$oj$GSt(),s=i&&i.$oj$KSt(),r=i&&i.$oj$KSt(),e=i&&i.$oj$KSt(),c=i&&i.$oj$YSt(),u=i&&i.$oj$YSt(),h=i&&i.$oj$KSt(),a=i&&i.$oj$KSt();
i&&i.$oj$WSt()&&(o=(t=new j._cls.$oj$H4())&&t.$oj$P4(n,s,r,e,c,a,u,h));
return o;
});
};
t.$oj$pxt=function(t){
return $.map(t,function($){
return $&&$.$oj$aut();
});
};
o.$oj$aut=function(){
return[this.$oj$Fet.x,this.$oj$Fet.y,this.$oj$Fet.width,this.$oj$Fet.height,this.$oj$zet,this.$oj$Xet,this.$oj$Wet,this.$oj$Iet,this.$oj$qet,this.$oj$Ret,this.$oj$Uet];
};
return i;
});
j._registerCategory({
$oj$ztt:1
},function($,t){
function o(){
this.$oj$Xtt=null;
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$dxt=function($){
var t,o=j._cls.$oj$qSt.$oj$XSt($),i=o&&o.$oj$ZSt(),n=(t=this.alloc())&&t.init();
n&&n.$oj$Wtt(j._cls.$oj$H4.$oj$hxt(i));
return o&&o.$oj$WSt()?n:null;
};
t.$oj$aut=function(){
return[j._cls.$oj$H4.$oj$pxt(this.$oj$Xtt)];
};
return o;
});
j._registerCategory({
$oj$grt:1
},function(t,o){
function i(){
this.$oj$yrt=this.$oj$brt=this.$oj$wrt=null;
this.$oj$Ert=this.$oj$Srt=this.$oj$xrt=this.$oj$Trt=this.$oj$Nrt=0;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$hxt=function($){
var t;
return(t=j._cls.$oj$qSt.$oj$XSt($))&&t.$oj$nxt(function($){
var t,o=null,i=j._cls.$oj$qSt.$oj$XSt($),n=i&&i.$oj$GSt(),s=i&&i.$oj$KSt(),r=i&&i.$oj$KSt(),e=i&&i.$oj$KSt(),c=i&&i.$oj$KSt(),u=i&&i.$oj$YSt(),h=i&&i.$oj$YSt(),a=i&&i.$oj$KSt();
i&&i.$oj$WSt()&&(o=(t=new j._cls.$oj$grt())&&t.$oj$krt(n,s,r,e,c,u,h,a));
return o;
});
};
t.$oj$pxt=function(t){
return $.map(t,function($){
return $&&$.$oj$aut();
});
};
o.$oj$aut=function(){
return[this.$oj$brt.x,this.$oj$brt.y,this.$oj$brt.width,this.$oj$brt.height,this.$oj$Nrt,this.$oj$Trt,this.$oj$Ert,this.$oj$xrt,this.$oj$yrt,this.$oj$wrt,this.$oj$Srt];
};
return i;
});
j._registerCategory({
$oj$Lrt:1
},function($,t){
function o(){
this.$oj$Art=null;
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$dxt=function($){
var t,o=j._cls.$oj$qSt.$oj$XSt($),i=o&&o.$oj$ZSt(),n=j._cls.$oj$grt.$oj$hxt(i);
return o&&o.$oj$WSt()?(t=this.alloc())&&t.$oj$Ort(n):null;
};
t.$oj$aut=function(){
return[j._cls.$oj$grt.$oj$pxt(this.$oj$Art)];
};
return o;
});
j._registerCategory({
$oj$Tit:1
},function(t,o){
function i(){
this.$oj$Nit=this.$oj$Cit=null;
this.$oj$kit=this.$oj$Lit=this.$oj$Ait=0;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$hxt=function($){
var t;
return(t=j._cls.$oj$qSt.$oj$XSt($))&&t.$oj$nxt(function($){
var t,o=void 0,i=j._cls.$oj$qSt.$oj$XSt($),n=i&&i.$oj$GSt(),s=i&&i.$oj$KSt(),r=i&&i.$oj$KSt(),e=i&&i.$oj$YSt(),c=i&&i.$oj$KSt();
i&&i.$oj$WSt()&&(o=(t=new j._cls.$oj$Tit())&&t.$oj$Oit(n,s,r,e,c));
return o;
});
};
t.$oj$pxt=function(t){
return $.map(t,function($){
return $&&$.$oj$aut();
});
};
o.$oj$aut=function(){
return[this.$oj$Nit.x,this.$oj$Nit.y,this.$oj$Nit.width,this.$oj$Nit.height,this.$oj$Ait,this.$oj$Lit,this.$oj$Cit,this.$oj$kit];
};
return i;
});
j._registerCategory({
$oj$Mit:1
},function($,t){
function o(){
this.$oj$Dit=null;
this.$oj$Pit=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
$.$oj$dxt=function($){
var t,o=j._cls.$oj$qSt.$oj$XSt($),i=o&&o.$oj$Rgt(),n=o&&o.$oj$ZSt(),s=j._cls.$oj$Tit.$oj$hxt(n);
return o&&o.$oj$WSt()?(t=this.alloc())&&t.$oj$Bit(s,i):null;
};
t.$oj$aut=function(){
return[this.$oj$Pit,j._cls.$oj$Tit.$oj$pxt(this.$oj$Dit)];
};
return o;
});
}();
!function(){
"use strict";
var t=null;
j._g.$oj$F7=function($){
var o,i,n;
t||(t=(o=(i=j._cls.$oj$St)&&i.alloc())&&o.init());
(n=t)&&n.$oj$At($);
};
j._g.$oj$I7=function($){
j._g.$oj$F7($.join("\n    "));
};
j._registerClass({
$oj$eot:1
},null,function(i,n){
function s(){
this.$oj$vxt=null;
this.constructor=s;
this.$oj_id=++j._id;
}
var r=void 0;
i.$oj$ti=function(){
var $;
r||(r=($=this.alloc())&&$.init());
return r;
};
n.init=function(){
var $=this;
($=s.$oj_super.prototype.init.call(this))&&($.$oj$vxt=[]);
return $;
};
n.$oj$Zst=function(t){
$.includes(this.$oj$vxt,t)||this.$oj$vxt.push(t);
};
n.$oj$mxt=function(){
var j=[],i={};
$.each(this.$oj$vxt,function($){
Object.assign(i,$&&$.$oj$Qut());
});
function n($){
if(o.isObject($))return $&&$.description();
try{
return JSON.stringify($);
}catch(t){
return"???";
}
}
$.each($.keys(i).sort(),function($){
var t=i[$];
j.push($+":");
j.push(n(t));
j.push("");
});
return{
h:j.join("\n"),
l:t&&t.$oj$Ot()
};
};
return s;
});
}();
!function($){
var t,o;
function i($){
return JSON.stringify($,function($,t){
return"n"==$&&t?"<redacted>":t;
});
}
function n($,t,o){
var n=$+" "+t;
if(o){
var s="";
try{
s=3001==t||1003==t?i(o,"n"):3009==t||1002==t?"<redacted>":JSON.stringify(o);
}catch(r){
s="???";
}
j._g.$oj$F7(n+s);
}else j._g.$oj$F7(n);
}
j._registerClass({
$oj$Htt:1
},null,function($,t){
function o(){
this.$oj$gxt=null;
this.$oj$yxt=this.$oj$bxt=!1;
this.constructor=o;
this.$oj_id=++j._id;
}
t.$oj$wxt=function($){
this.$oj$bxt=$;
};
t.$oj$Ptt=function(){
return this.$oj$bxt;
};
t.$oj$Ext=function($){
this.$oj$yxt=$;
};
t.$oj$Xpt=function(){
return this.$oj$yxt;
};
var i=void 0;
$.$oj$ti=function(){
var $;
i||(i=($=this.alloc())&&$.init());
return i;
};
t.$oj$Sxt=function($){
var t=null;
t||(t=j._cls.$oj$rot.$oj$not($,!0));
t||(t=j._cls.$oj$rot.$oj$not(unescape($),!0));
return t;
};
t.$oj$xxt=function($){
return new s($);
};
t.$oj$Txt=function($){
var t,o=j._cls.$oj$rot.$oj$Nxt($);
if(o){
var i=(t=o&&o.alloc())&&t.init();
return this.$oj$xxt(i);
}
return null;
};
t.$oj$wot=function(){
return"90003b1dfc024c5abd944a4349c32110";
};
t.$oj$Qut=function(){
var $;
return($=j._cls.$oj$eot.$oj$ti())&&$.$oj$mxt();
};
t.$oj$Cxt=function($){
var t={},o=t[$];
o||(o=$);
return o;
};
t.$oj$kxt=function($){
this.$oj$gxt=$;
};
t.$oj$Lxt=function(){
return this.$oj$gxt;
};
return o;
});
function s($){
var t,o=this;
(t=$)&&t.$oj$Ust(o);
o._wrapped=$;
o.nextTick=0;
}
s.prototype._sendCommand=function($,t){
2003!=$&&n("<-C",$,t);
this.handleCommand($,t);
};
s.prototype.sendRequest=function($,t){
var o,j=this._wrapped;
n("R->",$,t);
var i=(o=j)&&o.$oj$Zut($,t);
n("<-R",$,i);
return i;
};
s.prototype.sendAction=function($,t){
var o;
n("A->",$,t);
var j=this._wrapped;
(o=j)&&o.$oj$iat($,t);
};
s.prototype.sendTick=function(){
var $,t=this._wrapped;
return($=t)&&$.$oj$Mut();
};
s.prototype.handleCommand=function(){};
var r=(t=j._cls.$oj$Htt)&&t.$oj$ti();
(o=r)&&o.$oj$kxt($);
$.TenutoBridge={
getRegistryInfo:function($){
var t;
return(t=r)&&t.$oj$Sxt($);
},
makeBridgedObject:function($){
var t;
return(t=r)&&t.$oj$Txt($);
},
getMappedVersion:function($){
var t;
return(t=r)&&t.$oj$Cxt($);
},
setPrefersTouchEvents:function($){
var t;
(t=r)&&t.$oj$wxt($);
},
getPrefersTouchEvents:function(){
var $;
return($=r)&&$.$oj$Ptt();
},
getBuildUUIDString:function(){
var $;
return($=r)&&$.$oj$wot();
},
getDebugReportObject:function(){
var $;
return($=r)&&$.$oj$Qut();
},
setBetaEnabled:function($){
var t;
(t=r)&&t.$oj$Ext($);
},
getBetaEnabled:function(){
var $;
return($=r)&&$.$oj$Xpt();
}
};
}(this);
!function(){
"use strict";
var t=null,o=null,i=null,n=null,s=null;
function r(){
var r,e,c,u,h,a,l,f,v,d,_,g,p,y,m,w,b,S,M,F,E,x,q,C,T,D,O,P,A,N,I;
t={};
o={};
i={};
n={};
s={
"exercise:generic-interval":"exercise:interval"
};
$.each([{
n:1,
p:"note",
c:(r=j._cls.$oj$Qwt)&&r["class"]()
},{
n:2,
p:"keysig",
c:(e=j._cls.$oj$Gyt)&&e["class"]()
},{
n:3,
p:"interval",
c:(c=j._cls.$oj$Cyt)&&c["class"]()
},{
n:4,
p:"generic-interval",
c:(u=j._cls.$oj$Cyt)&&u["class"]()
},{
n:23,
p:"scale",
c:(h=j._cls.$oj$BEt)&&h["class"]()
},{
n:5,
p:"chord",
c:(a=j._cls.$oj$ngt)&&a["class"]()
},{
n:17,
p:"note-construction",
c:(l=j._cls.$oj$owt)&&l["class"]()
},{
n:21,
p:"keysig-construction",
c:(f=j._cls.$oj$Fyt)&&f["class"]()
},{
n:18,
p:"interval-construction",
c:(v=j._cls.$oj$Ygt)&&v["class"]()
},{
n:22,
p:"scale-construction",
c:(d=j._cls.$oj$uEt)&&d["class"]()
},{
n:19,
p:"chord-construction",
c:(_=j._cls.$oj$kmt)&&_["class"]()
},{
n:6,
p:"keyboard",
c:(g=j._cls.$oj$Hbt)&&g["class"]()
},{
n:7,
p:"keyboard-reverse",
c:(p=j._cls.$oj$Rbt)&&p["class"]()
},{
n:8,
p:"keyboard-interval",
c:(y=j._cls.$oj$Abt)&&y["class"]()
},{
n:24,
p:"keyboard-scale",
c:(m=j._cls.$oj$ewt)&&m["class"]()
},{
n:9,
p:"keyboard-chord",
c:(w=j._cls.$oj$sbt)&&w["class"]()
},{
n:10,
p:"fretboard",
c:(b=j._cls.$oj$Ogt)&&b["class"]()
},{
n:14,
p:"fretboard-interval",
c:(S=j._cls.$oj$Egt)&&S["class"]()
},{
n:25,
p:"fretboard-scale",
c:(M=j._cls.$oj$Ugt)&&M["class"]()
},{
n:16,
p:"fretboard-chord",
c:(F=j._cls.$oj$lgt)&&F["class"]()
},{
n:20,
p:"ear-keyboard",
c:(E=j._cls.$oj$pbt)&&E["class"]()
},{
n:15,
p:"ear-note",
c:(x=j._cls.$oj$jwt)&&x["class"]()
},{
n:11,
p:"ear-interval",
c:(q=j._cls.$oj$wyt)&&q["class"]()
},{
n:12,
p:"ear-scale",
c:(C=j._cls.$oj$AEt)&&C["class"]()
},{
n:13,
p:"ear-chord",
c:(T=j._cls.$oj$Kmt)&&T["class"]()
}],function($){
var j=$.p,r=$.n,e=$.c,c="exercise:"+j;
t[c]=e;
i[r]=j;
n[j]=r;
o[j]=e;
s[c]||(s[c]=c);
});
$.each([{
p:"accidental",
c:(D=j._cls.$oj$WEt)&&D["class"]()
},{
p:"interval",
c:(O=j._cls.$oj$MSt)&&O["class"]()
},{
p:"scale",
c:(P=j._cls.$oj$ISt)&&P["class"]()
},{
p:"chord",
c:(A=j._cls.$oj$OSt)&&A["class"]()
},{
p:"analysis",
c:(N=j._cls.$oj$uSt)&&N["class"]()
},{
p:"matrix",
c:(I=j._cls.$oj$DSt)&&I["class"]()
}],function($){
var o="calculator:"+$.p;
t[o]=$.c;
s[o]=o;
});
}
j._registerClass({
$oj$rot:1
},null,function(e){
function c(){
this.constructor=c;
this.$oj_id=++j._id;
}
e.$oj$not=function(o,j){
var i,n="exercise",e="calculator",c={
exercises:n,
calculators:e
},u=o;
if(!u)return null;
var h=u.indexOf("#");
h>=0&&(u=u.substring(0,h));
var a=u.indexOf("?");
a>=0&&(u=u.substring(0,a));
var l=null,f=null,v=null,d=null;
$.each(u.split("/"),function($){
if(!$&&!l)return;
var t=$.toLowerCase();
if(l)if(f)v||(v=$);else{
f=t;
d+="/"+t;
}else{
l=c[t];
l&&(d="/"+t);
}
});
if(v){
v=v.replace(/[^A-Za-z0-9].*?$/,"");
d+="/"+v;
}
t||r();
var _=s[l+":"+f],g=t[_],p=!!g;
if(p&&f&&v&&j&&l==n){
var y=g&&g.$oj$Wst(),m=(i=y&&y.alloc())&&i.init(),w=m&&m.$oj$sot(f,v);
p=w&&!(m&&m.$oj$oot());
}
return{
identifier:_,
type:l,
prefix:f,
options:v,
path:d,
valid:p
};
};
e.$oj$Nxt=function($){
t||r();
return t[$];
};
e.$oj$Bft=function($){
o||r();
return o[$];
};
e.$oj$Elt=function($){
i||r();
return i[$]||null;
};
e.$oj$Aft=function($){
n||r();
return n[$]||0;
};
return c;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Wpt:1
},null,function(t,o){
function i(){
this.$oj$Axt=null;
this.constructor=i;
this.$oj_id=++j._id;
}
t.$oj$zpt=function($){
$||($="");
$=$.toLowerCase();
$=$.replace("l","1");
$=$.replace("0","o");
$=$.replace("2","z");
$=$.replace("v","u");
for(var t=[],o=0,j=$.length;j>o;o++){
var i=$.charAt(o),n="ybndrfg8ejkmcpqxot1uwisza345h769".indexOf(i);
n>=0&&t.push(n);
}
return t;
};
t.$oj$Oxt=function(){
return[0,-1,-2,34,22,28,26,32,30,24,20,36];
};
o.$oj$Vpt=function($){
var t=this;
(t=i.$oj_super.prototype.init.call(this))&&(t.$oj$Axt=$);
return t;
};
o.$oj$Zt=function($){
var t,o=(t=this.constructor)&&t.$oj$zpt($);
return this.$oj$Vpt(o);
};
o.$oj$Mxt=function(){
return this.$oj$Axt.length>0?this.$oj$Axt.shift():void 0;
};
o.$oj$Dxt=function(){
var $=this.$oj$Mxt(),t=void 0;
void 0!==$&&(t=$<<27>>27);
return t;
};
o.$oj$Pxt=function(){
var $=this.$oj$Mxt(),t=this.$oj$Mxt(),o=void 0;
void 0!==$&&void 0!==t&&(o=($<<5|t)<<22>>22);
return o;
};
o.$oj$Wdt=function(){
var $=this.$oj$Mxt();
return $;
};
o.$oj$Rgt=function(){
var $=this.$oj$KEt()>0;
return $;
};
o.$oj$KEt=function(){
var $=this.$oj$Dxt();
return $;
};
o.$oj$Vdt=function(){
var $=this.$oj$Pxt();
return $;
};
o.$oj$JEt=function(){
var $,t=this.$oj$Mxt(),o=($=this.constructor)&&$.$oj$Oxt(),j=o[t];
return j;
};
o.$oj$Idt=function(){
var $=this.$oj$Mxt(),t=[$],o=[];
if(void 0!==$){
1&$&&o.push(34);
2&$&&o.push(22);
4&$&&o.push(28);
8&$&&o.push(26);
if(16&$){
var j=this.$oj$Mxt();
t.push(j);
if(0===j&&0===o.length)o.push(-2);else{
1&j&&o.push(32);
2&j&&o.push(30);
4&j&&o.push(24);
8&j&&o.push(20);
}
}
}
0===o.length&&o.push(34);
return o;
};
o.$oj$Xdt=function($){
for(var t=!0,o=[],j=0;$>j;j+=5){
var i=this.$oj$Mxt();
if(void 0===i)return void 0;
for(var n=0;5>n&&$>j+n;n++){
var s=(i&1<<n)>0;
o.push(s);
s&&(t=!1);
}
}
t&&(o=void 0);
return o;
};
o.$oj$Udt=function(t){
var o=this.$oj$Wdt();
if($.isNumber(o))return t[o];
return null;
};
o.$oj$zdt=function($){
var t=this.$oj$Xdt($.length),o=[];
if(t)for(var j=0,i=$.length;i>j;j++)t[j]&&o.push($[j]);
return o;
};
o.$oj$qdt=function(){
var $=this.$oj$Mxt(),t=void 0,o=void 0;
if(31==$){
t=this.$oj$Pxt();
o=this.$oj$Pxt();
if(void 0===t||void 0===o)return j._cls.$oj$Cn.$oj$jn(-8,8);
}else{
t=$;
o=this.$oj$Mxt();
if(void 0===t||void 0===o)return j._cls.$oj$Cn.$oj$jn(-8,8);
t-=12;
o-=12;
t>18&&(t=18);
-12>t&&(t=-12);
o>18&&(o=18);
-12>o&&(o=-12);
}
return t>o?j._cls.$oj$Cn.$oj$jn(o,t):j._cls.$oj$Cn.$oj$jn(t,o);
};
o.$oj$Rdt=function(){
var $=this.$oj$Mxt(),t=this.$oj$Mxt(),o=this.$oj$Mxt();
if(void 0===$||void 0===t||void 0===o)return void 0;
var i=$<<3|t>>2,n=(3&t)<<5|o;
return i>n?j._cls.$oj$Cn.$oj$jn(n,i):j._cls.$oj$Cn.$oj$jn(i,n);
};
o.$oj$Qpt=function(){
return 0===this.$oj$Axt.length;
};
return i;
});
}();
!function(){
"use strict";
j._registerClass({
$oj$Gpt:1
},null,function(t,o){
function i(){
this.$oj$Hxt=null;
this.constructor=i;
this.$oj_id=++j._id;
}
o.init=function(){
var $=this;
($=i.$oj_super.prototype.init.call(this))&&($.$oj$Hxt=[]);
return $;
};
o.$oj$Zdt=function($){
this.$oj$Hxt.push($>=0?$:0);
};
o.$oj$qgt=function($){
this.$oj$YEt($?1:0);
};
o.$oj$YEt=function($){
this.$oj$Zdt(31&$);
};
o.$oj$tvt=function($){
this.$oj$Zdt($>>5&31);
this.$oj$Zdt(31&$);
};
o.$oj$Bxt=function($,t){
if($>=-12&&18>=$&&t>=-12&&18>=t){
this.$oj$Zdt($+12);
this.$oj$Zdt(t+12);
}else{
this.$oj$Zdt(31);
this.$oj$tvt($);
this.$oj$tvt(t);
}
};
o.$oj$Kdt=function($){
var t=void 0,o=void 0;
if($)if($ instanceof j._cls.$oj$Cn){
t=$&&$.$oj$Bn();
o=$&&$.$oj$Hn();
}else{
t=$[0];
o=$[1];
}else{
t=-10;
o=10;
}
this.$oj$Bxt(t,o);
};
o.$oj$Qdt=function($){
var t=void 0,o=void 0;
if($)if($ instanceof j._cls.$oj$Cn){
t=$&&$.$oj$Bn();
o=$&&$.$oj$Hn();
}else{
t=$[0];
o=$[1];
}else{
t=0;
o=0;
}
this.$oj$Zdt(t>>>3);
this.$oj$Zdt((7&t)<<2|o>>>5);
this.$oj$Zdt(31&o);
};
o.$oj$GEt=function($){
var t=j._cls.$oj$Wpt.$oj$Oxt(),o=t.indexOf($);
0>o&&(o=0);
this.$oj$Zdt(o);
};
o.$oj$Jdt=function($){
for(var t={},o=0,j=$.length;j>o;o++)t[$[o]]=!0;
var i=(t[34]?1:0)+(t[22]?2:0)+(t[28]?4:0)+(t[26]?8:0),n=(t[32]?1:0)+(t[30]?2:0)+(t[24]?4:0)+(t[20]?8:0);
if(t[-2]){
this.$oj$Hxt.push(16);
this.$oj$Hxt.push(0);
}else if(n>0){
this.$oj$Hxt.push(i+16);
this.$oj$Hxt.push(n);
}else this.$oj$Hxt.push(i);
};
o.$oj$evt=function($){
for(var t=[],o=0,j=$.length;j>o;o++){
var i=Math.floor(o/5);
t[i]||(t[i]=0);
t[i]+=$[o]?1<<o%5:0;
}
this.$oj$Hxt=this.$oj$Hxt.concat(t);
};
o.$oj$Gdt=function(t,o){
o===!0?o=1:o||(o=0);
this.$oj$Zdt($.indexOf(t,o));
};
o.$oj$Ydt=function(t,o){
for(var j=[],i=0,n=t.length;n>i;i++)j[i]=$.includes(o,t[i]);
this.$oj$evt(j);
};
o.$oj$Zpt=function(){
for(var $=[],t=0,o=this.$oj$Hxt.length;o>t;t++){
var j=this.$oj$Hxt[t];
$[t]="ybndrfg8ejkmcpqxot1uwisza345h769".charCodeAt(j);
}
return String.fromCharCode.apply($,$);
};
return i;
});
}();
}).call(this);