(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cac6f6d8"],{"50f8":function(t,n,r){"use strict";var e=r("0261");new e["a"]},9639:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"my-container"},[t.$store.state.user?r("div",{staticClass:"user-info-wrap"},[r("div",{staticClass:"base-info-wrap"},[r("div",{staticClass:"avatar-title-wrap",on:{click:function(n){return t.$router.push({name:"user",params:{userId:t.user.id}})}}},[r("van-image",{staticClass:"avatar",attrs:{src:t.user.photo,round:"",fit:"cover"}}),r("span",[t._v(t._s(t.user.name))])],1),r("van-button",{attrs:{size:"mini",round:""},on:{click:function(n){return t.$router.push("/user/profile")}}},[t._v("编辑资料")])],1),r("van-grid",{staticClass:"data-info",attrs:{border:!1}},[r("van-grid-item",[r("span",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),r("span",{staticClass:"text"},[t._v("头条")])]),r("van-grid-item",{attrs:{to:"/user/"+t.user.id+"/following"}},[r("span",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),r("span",{staticClass:"text"},[t._v("关注")])]),r("van-grid-item",{attrs:{to:"/user/"+t.user.id+"/follower"}},[r("span",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),r("span",{staticClass:"text"},[t._v("粉丝")])]),r("van-grid-item",[r("span",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),r("span",{staticClass:"text"},[t._v("获赞")])])],1)],1):r("div",{staticClass:"not-login"},[r("div",{staticClass:"mobile",on:{click:function(n){return t.$router.push({name:"login",query:{redirect:"/my"}})}}}),r("div",{staticClass:"text"},[t._v("未登录")])]),r("van-grid",{attrs:{"column-num":3,clickable:""}},[r("van-grid-item",{attrs:{text:"收藏",to:"/my-article/collect"}},[r("van-icon",{attrs:{slot:"icon",name:"star-o",color:"#eb5253"},slot:"icon"})],1),r("van-grid-item",{attrs:{text:"历史",to:"/my-article/history"}},[r("van-icon",{attrs:{slot:"icon",name:"browsing-history-o",color:"#ffa023"},slot:"icon"})],1),r("van-grid-item",{attrs:{text:"作品",to:"/my-article"}},[r("van-icon",{attrs:{slot:"icon",name:"edit",color:"#3196fa"},slot:"icon"})],1)],1),r("van-cell-group",{attrs:{border:!1}},[r("van-cell",{attrs:{title:"小智同学","is-link":"",to:"/user/chat"}})],1),t.$store.state.user?r("van-cell-group",[r("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"退出登录",clickable:""},on:{click:t.onLogout}})],1):t._e()],1)},a=[],s=(r("b449"),r("9666")),o=r("c24f"),c=(r("50f8"),{name:"MyPage",components:{},props:{},data:function(){return{user:{}}},computed:{},watch:{"$store.state.user":function(){this.$store.state.user&&this.loadUser()}},activated:function(){this.$store.state.user&&this.loadUser()},mounted:function(){},methods:{loadUser:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["e"])();case 2:r=n.sent,e=r.data,t.user=e.data;case 5:case"end":return n.stop()}}),n)})))()},onLogout:function(){var t=this;this.$dialog.confirm({title:"退户确认",message:"退出当前头条账号，将不能同步收藏，发布评论和云端分享"}).then((function(){t.$store.commit("setUser",null)})).catch((function(){}))}}}),u=c,i=(r("d9f0"),r("9ca4")),l=Object(i["a"])(u,e,a,!1,null,"ded63160",null);n["default"]=l.exports},c24f:function(t,n,r){"use strict";r.d(n,"k",(function(){return a})),r.d(n,"l",(function(){return s})),r.d(n,"h",(function(){return o})),r.d(n,"a",(function(){return c})),r.d(n,"m",(function(){return u})),r.d(n,"e",(function(){return i})),r.d(n,"g",(function(){return l})),r.d(n,"d",(function(){return d})),r.d(n,"n",(function(){return f})),r.d(n,"o",(function(){return p})),r.d(n,"c",(function(){return v})),r.d(n,"b",(function(){return m})),r.d(n,"i",(function(){return h})),r.d(n,"j",(function(){return _})),r.d(n,"f",(function(){return g}));r("e18c"),r("1c2e");var e=r("b775"),a=function(t){return Object(e["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})};function s(t){return Object(e["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})}function o(){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function c(t){return Object(e["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})}function u(t){return Object(e["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})}function i(){return Object(e["a"])({method:"GET",url:"/app/v1_0/user"})}function l(t){return Object(e["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})}function d(){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/profile"})}var f=function(t){return Object(e["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})},p=function(t){return Object(e["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},v=function(t,n){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/followings",params:n,data:{target:t.toString()}})},m=function(t,n){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/followers",params:n,data:{target:t.toString()}})},h=function(t){return Object(e["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},_=function(t){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})},g=function(t){return Object(e["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})}},d9f0:function(t,n,r){"use strict";var e=r("efca"),a=r.n(e);a.a},efca:function(t,n,r){}}]);
//# sourceMappingURL=chunk-cac6f6d8.5a316264.js.map