(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0ff45be"],{"22ef":function(t,e,n){"use strict";var r=n("efe2");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"38eb":function(t,e,n){"use strict";var r=n("f62c").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},5047:function(t,e,n){"use strict";var r=n("d78d"),o=n.n(r);o.a},5139:function(t,e,n){"use strict";var r=n("99ad"),o=n("22ef"),a=RegExp.prototype.exec,c=String.prototype.replace,i=a,u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(i=function(t){var e,n,o,i,f=this,d=s&&f.sticky,p=r.call(f),v=f.source,h=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",p)),l&&(n=new RegExp("^"+v+"$(?!\\s)",p)),u&&(e=f.lastIndex),o=a.call(d?n:f,g),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&c.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=i},"59da":function(t,e,n){var r=n("2118"),o=n("5139");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"5e9f":function(t,e,n){"use strict";var r=n("b2a2"),o=n("857c"),a=n("3553"),c=n("d88d"),i=n("3da3"),u=n("2732"),s=n("38eb"),l=n("59da"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,x=b?"$":"$0";return[function(n,r){var o=u(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!b&&m||"string"===typeof r&&-1===r.indexOf(x)){var a=n(e,t,this,r);if(a.done)return a.value}var u=o(t),p=String(this),v="function"===typeof r;v||(r=String(r));var h=u.global;if(h){var $=u.unicode;u.lastIndex=0}var _=[];while(1){var S=l(u,p);if(null===S)break;if(_.push(S),!h)break;var T=String(S[0]);""===T&&(u.lastIndex=s(p,c(u.lastIndex),$))}for(var O="",k=0,R=0;R<_.length;R++){S=_[R];for(var w=String(S[0]),j=f(d(i(S.index),p.length),0),y=[],C=1;C<S.length;C++)y.push(g(S[C]));var I=S.groups;if(v){var P=[w].concat(y,j,p);void 0!==I&&P.push(I);var A=String(r.apply(void 0,P))}else A=E(w,p,j,y,I,r);j>=k&&(O+=p.slice(k,j)+A,k=j+w.length)}return O+p.slice(k)}];function E(t,n,r,o,c,i){var u=r+t.length,s=o.length,l=h;return void 0!==c&&(c=a(c),l=v),e.call(i,l,(function(e,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":i=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):e}i=o[l-1]}return void 0===i?"":i}))}}))},"9ed6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("van-nav-bar",{staticClass:"page-navbar",attrs:{title:"注册/登录"}},[n("van-icon",{attrs:{slot:"left",name:"cross"},on:{click:function(e){return t.$router.back()}},slot:"left"})],1),n("van-field",{ref:"mobile",attrs:{type:"tel",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.user.mobile,callback:function(e){t.$set(t.user,"mobile",e)},expression:"user.mobile"}},[n("van-icon",{staticClass:"icon-mobile",attrs:{slot:"left-icon","class-prefix":"iconfont",size:"0.7rem"},slot:"left-icon"})],1),n("van-field",{ref:"code",attrs:{placeholder:"请输入验证码",type:"tel",maxlength:"6"},model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[n("van-icon",{staticClass:"icon-password",attrs:{slot:"left-icon","class-prefix":"iconfont",size:"0.7rem"},slot:"left-icon"}),n("van-button",{attrs:{slot:"button",size:"small",type:t.isSending?"defult":"primary",disabled:t.isSending},on:{click:t.onSendCode},slot:"button"},[t.isSending?n("van-count-down",{ref:"countDown",attrs:{time:6e4,format:"ss s","auto-start":!1}}):n("span",[t._v("获取验证码")])],1)],1),n("div",{staticClass:"login-btn-box"},[n("van-button",{attrs:{type:"info"},on:{click:t.onLogin}},[t._v("登录")])],1)],1)},o=[],a=(n("e35a"),n("5e9f"),n("b449"),n("9666")),c=n("c24f"),i={name:"LoginPage",components:{},props:{},data:function(){return{user:{mobile:"",code:""},isSending:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLogin:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.checkMobile()&&t.checkCode()){e.next=2;break}return e.abrupt("return");case 2:return t.$toast.loading({duration:0,forbidClick:!0,message:"登录中..."}),e.prev=3,e.next=6,Object(c["k"])(t.user);case 6:n=e.sent,r=n.data,console.log("登录成功",r.data),t.$store.commit("setUser",r.data),t.$toast.success("登录成功"),o=t.$route.query.redirect||"/",t.$router.replace(o),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](3),console.log("登录失败",e.t0),t.$toast.fail("登录失败，手机号或验证码错误");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))()},onSendCode:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.user.mobile,t.checkMobile){e.next=3;break}return e.abrupt("return");case 3:return t.isSending=!0,t.$refs.code.focus(),t.$nextTick((function(){t.$refs.countDown.start()})),e.prev=6,e.next=9,Object(c["l"])(n);case 9:e.next=18;break;case 11:e.prev=11,e.t0=e["catch"](6),console.log(e.t0),r="发送失败，请稍后重试",429===e.t0.response.status&&(r="1分钟内只能发送一次，请稍后重试"),t.$toast({message:r,position:"top"}),t.isSending=!1;case 18:case"end":return e.stop()}}),e,null,[[6,11]])})))()},checkMobile:function(){var t=this.user.mobile;return t?!!/^1[3578]\d{9}$/.test(t)||(this.$toast({message:"手机号码格式错误",position:"top"}),this.$refs.mobile.focus(),!1):(this.$toast({message:"手机号码不能为空",position:"top"}),this.$refs.mobile.focus(),!1)},checkCode:function(){var t=this.user.code;return t?!!/^\d{6}$/.test(t)||(this.$toast({message:"验证码格式错误",position:"top"}),this.$refs.code.focus(),!1):(this.$toast({message:"验证码不能为空",position:"top"}),this.$refs.code.focus(),!1)}}},u=i,s=(n("5047"),n("9ca4")),l=Object(s["a"])(u,r,o,!1,null,"79eab39c",null);e["default"]=l.exports},b2a2:function(t,e,n){"use strict";n("e35a");var r=n("1944"),o=n("efe2"),a=n("90fb"),c=n("5139"),i=n("0fc1"),u=a("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),h=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!s||!l||d)||"split"===t&&!p){var b=/./[v],m=n(v,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=m[0],E=m[1];r(String.prototype,t,x),r(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&i(RegExp.prototype[v],"sham",!0)}},c24f:function(t,e,n){"use strict";n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"m",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return p})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return h})),n.d(e,"i",(function(){return g})),n.d(e,"j",(function(){return b})),n.d(e,"f",(function(){return m}));n("e18c"),n("1c2e");var r=n("b775"),o=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})};function a(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})}function c(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function i(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})}function u(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})}function s(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})}function l(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})}function f(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}var d=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})},p=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},v=function(t,e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followings",params:e,data:{target:t.toString()}})},h=function(t,e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followers",params:e,data:{target:t.toString()}})},g=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},b=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})},m=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})}},d78d:function(t,e,n){},e35a:function(t,e,n){"use strict";var r=n("1c8b"),o=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})}}]);
//# sourceMappingURL=chunk-c0ff45be.92bca506.js.map