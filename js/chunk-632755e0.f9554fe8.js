(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-632755e0"],{"053b":function(t,e,n){var a=n("1e2c"),r=n("d910").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";a&&!(o in i)&&r(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},"10a1":function(t,e,n){"use strict";var a=n("25b6"),r=n.n(a);r.a},"1de2":function(t,e,n){"use strict";var a=n("e099"),r=n.n(a);r.a},2423:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return u}));var a=n("b775");function r(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})}function i(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})}function c(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})}function s(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})}function o(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})}function l(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}function u(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles")})}},"25b6":function(t,e,n){},4194:function(t,e,n){"use strict";var a=n("1c8b"),r=n("5dfd").find,i=n("258f"),c=n("ff9c"),s="find",o=!0,l=c(s);s in[]&&Array(1)[s]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"513c":function(t,e,n){"use strict";var a=n("1e2c"),r=n("d890"),i=n("e8d6"),c=n("1944"),s=n("faa8"),o=n("2118"),l=n("7063"),u=n("9f67"),f=n("efe2"),d=n("6d60"),h=n("b338").f,p=n("aa6b").f,v=n("d910").f,m=n("c10f").trim,b="Number",g=r[b],_=g.prototype,C=o(d(_))==b,O=function(t){var e,n,a,r,i,c,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,a)}return+l};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(C?f((function(){_.valueOf.call(n)})):o(n)!=b)?l(new g(O(e)),n,w):O(e)},j=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;j.length>y;y++)s(g,E=j[y])&&!s(w,E)&&v(w,E,p(g,E));w.prototype=_,_.constructor=w,c(r,b,w)}},7063:function(t,e,n){var a=n("a719"),r=n("50fb");t.exports=function(t,e,n){var i,c;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(c=i.prototype)&&c!==n.prototype&&r(t,c),t}},"71e3":function(t,e,n){"use strict";var a=n("b8db"),r=n.n(a);r.a},"77ad":function(t,e,n){"use strict";var a=n("1c8b"),r=n("a719"),i=n("74e7"),c=n("e1d6"),s=n("d88d"),o=n("da10"),l=n("1bbd"),u=n("90fb"),f=n("1ea7"),d=n("ff9c"),h=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var n,a,u,f=o(this),d=s(f.length),h=c(t,d),p=c(void 0===e?d:e,d);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,h,p);for(a=new(void 0===n?Array:n)(b(p-h,0)),u=0;h<p;h++,u++)h in f&&l(a,u,f[h]);return a.length=u,a}})},"7abe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page-container"},[n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"logo"}),n("van-button",{staticClass:"search-btn",attrs:{round:"",type:"info",size:"small",icon:"search"},on:{click:function(e){return t.$router.push("/search")}}},[t._v("搜索")])],1),t.channels.length?n("van-tabs",{ref:"tabs",staticClass:"fixed-tabs",attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),n("div",{staticClass:"van-tab",staticStyle:{flex:"0 0 8%"},attrs:{slot:"nav-right"},slot:"nav-right"}),n("van-icon",{staticClass:"wap-nav",attrs:{slot:"nav-right",name:"wap-nav"},on:{click:function(e){t.isChannelEditShow=!0}},slot:"nav-right"})],2):t._e(),n("van-popup",{staticClass:"channel-edit-popup",style:{height:"100%"},attrs:{round:"",position:"bottom",overlay:!1},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("van-nav-bar",{attrs:{title:"编辑频道"}},[n("van-icon",{attrs:{slot:"left",name:"cross",size:"20"},on:{click:function(e){t.isChannelEditShow=!1}},slot:"left"})],1),n("channel-edit",{attrs:{"user-channels":t.channels},on:{close:function(e){t.isChannelEditShow=!1}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)],1)},r=[],i=(n("b449"),n("9666")),c=n("2ba1"),s=n("c24f"),o=n("5d2d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshLoading,callback:function(e){t.refreshLoading=e},expression:"refreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)],1)},u=[],f=n("a7c7"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0===t.article.cover.type?n("div",{staticClass:"article-item article-item-0",on:{click:t.onItemClick}},[n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):3===t.article.cover.type?n("div",{staticClass:"article-item article-item-3",on:{click:t.onItemClick}},[n("div",{staticClass:"title van-multi-ellipsis--12"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"cover"},t._l(t.article.cover.images,(function(t,e){return n("van-image",{key:e,staticClass:"cover-item",attrs:{fit:"cover",src:t}})})),1),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):n("div",{staticClass:"article-item article-item-1",on:{click:t.onItemClick}},[n("div",{staticClass:"title-label"},[n("div",{staticClass:"title van-multi-ellipsis--13"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),n("van-image",{staticClass:"cover",attrs:{fit:"cover",src:t.article.cover.images[0]}})],1)},h=[],p=(n("e18c"),n("1c2e"),{name:"ArticleInfo",components:{},props:{article:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onItemClick:function(){this.$router.push({name:"article",params:{articleId:this.article.art_id.toString()}})}}}),v=p,m=(n("71e3"),n("9ca4")),b=Object(m["a"])(v,d,h,!1,null,"4121af7e",null),g=b.exports,_=n("2423"),C={name:"",components:{ArticleItem:g},props:{channel:{type:Object,required:!0}},data:function(){return{refreshLoading:!1,loading:!1,finished:!1,list:[],timestamp:null}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_["g"])({channel_id:t.channel.id,timestamp:t.timestamp||Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.list).push.apply(n,Object(f["a"])(i)),t.loading=!1,i.length?t.timestamp=r.data.pre_timestamp:t.finished=!0;case 8:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_["g"])({channel_id:t.channel.id,timestamp:Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.list).push.apply(n,Object(f["a"])(i)),t.refreshLoading=!1,c=i.length?"更新了".concat(i.length,"条数据"):"暂无数据更新",t.$toast(c);case 9:case"end":return e.stop()}}),e)})))()}}},O=C,E=(n("1de2"),Object(m["a"])(O,l,u,!1,null,"360f8120",null)),w=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-container"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("我的频道")]),n("span",{staticClass:"tip"},[t._v("点击进入频道")])]),n("van-button",{attrs:{type:"danger",plain:"",size:"mini",round:"",color:"#e5615b"},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.userChannels,(function(e,a){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelActiveOrDelete(e,a)}}},[n("span",{staticClass:"text",class:{active:t.value===a}},[t._v(t._s(e.name))]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&"推荐"!==e.name,expression:"isEdit && channel.name !== '推荐'"}],staticClass:"close-icon",attrs:{name:"close"}})],1)})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("推荐频道")]),n("span",{staticClass:"tip"},[t._v("点击进入频道")])])]),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.recommendChannels,(function(e){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelAdd(e)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.name))])])})),1)],1)},y=[],x=(n("b4fb"),n("dbb3"),n("4194"),n("ea69"),n("053b"),n("513c"),n("b775"));function k(){return Object(x["a"])({method:"GET",url:"/app/v1_0/channels"})}var A=function(t){return Object(x["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},T=function(t){return Object(x["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:{channels:[t]}})},S=n("9f3a"),I={name:"channelEdit",components:{},props:{userChannels:{type:Array,required:!0},value:{type:Number,default:0}},data:function(){return{isEdit:!1,allChannels:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(S["b"])(["user"])),{},{recommendChannels:function(){var t=this;return this.allChannels.filter((function(e){return!t.userChannels.find((function(t){return t.id===e.id}))}))}}),watch:{},created:function(){this.loadAllChannels()},mounted:function(){},methods:{onChannelActiveOrDelete:function(t,e){this.isEdit&&"推荐"!==t.name?this.deleteChannel(t,e):(this.$emit("input",e),this.$emit("close"))},deleteChannel:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!n.user){a.next=7;break}return a.next=4,A(t.id);case 4:n.userChannels.splice(e,1),a.next=9;break;case 7:n.userChannels.splice(e,1),Object(o["b"])("channels",n.userChannels);case 9:e<=n.value&&n.$emit("input",n.value-1),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),n.$toast("操作失败， 请稍后重试");case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},onChannelAdd:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,!e.user){n.next=6;break}return n.next=4,T({id:t.id,seq:e.userChannels.length});case 4:n.next=7;break;case 6:Object(o["b"])("channels",[].concat(Object(f["a"])(e.userChannels),[t]));case 7:e.userChannels.push(t),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0),e.$toast("添加失败，请稍后重试");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},loadAllChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:n=e.sent,a=n.data,t.allChannels=a.data.channels;case 5:case"end":return e.stop()}}),e)})))()}}},N=I,R=(n("10a1"),Object(m["a"])(N,j,y,!1,null,"25406484",null)),G=R.exports,L={name:"HomePage",components:{ArticleList:w,ChannelEdit:G},props:{},data:function(){return{active:0,channels:[],isChannelEditShow:!1}},computed:Object(c["a"])({},Object(S["b"])(["user"])),watch:{user:function(){this.channels=[],this.active=0}},activated:function(){this.channels.length||this.loadUserChannels()},created:function(){this.loadUserChannels()},mounted:function(){},methods:{loadUserChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],!t.user){e.next=9;break}return e.next=4,Object(s["h"])();case 4:a=e.sent,r=a.data,n=r.data.channels,e.next=19;break;case 9:if(i=Object(o["a"])("channels"),!i){e.next=14;break}n=i,e.next=19;break;case 14:return e.next=16,Object(s["h"])();case 16:c=e.sent,l=c.data,n=l.data.channels;case 19:t.channels=n;case 20:case"end":return e.stop()}}),e)})))()}}},$=L,P=(n("d462"),Object(m["a"])($,a,r,!1,null,"1b997cba",null));e["default"]=P.exports},"958c":function(t,e,n){},"98e0":function(t,e,n){var a=n("1c8b"),r=n("e62b"),i=n("f471"),c=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:r})},a7c7:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function r(t){if(Array.isArray(t))return a(t)}n.d(e,"a",(function(){return o}));n("f3dd"),n("0a51"),n("9b11"),n("98e0"),n("e18c"),n("96db"),n("af86");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("77ad"),n("053b"),n("1c2e");function c(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return r(t)||i(t)||c(t)||s()}},b4fb:function(t,e,n){"use strict";var a=n("1c8b"),r=n("efe2"),i=n("74e7"),c=n("a719"),s=n("3553"),o=n("d88d"),l=n("1bbd"),u=n("1ca1"),f=n("1ea7"),d=n("90fb"),h=n("f594"),p=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),_=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},C=!b||!g;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,a,r,i,c=s(this),f=u(c,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?c:arguments[e],_(i)){if(r=o(i.length),d+r>v)throw TypeError(m);for(n=0;n<r;n++,d++)n in i&&l(f,d,i[n])}else{if(d>=v)throw TypeError(m);l(f,d++,i)}return f.length=d,f}})},b8db:function(t,e,n){},c10f:function(t,e,n){var a=n("2732"),r=n("fc8c"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},c24f:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"m",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return v})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"f",(function(){return g}));n("e18c"),n("1c2e");var a=n("b775"),r=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})};function i(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})}function c(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function s(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})}function o(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})}function l(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user"})}function u(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})}function f(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/profile"})}var d=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})},h=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},p=function(t,e){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/followings",params:e,data:{target:t.toString()}})},v=function(t,e){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/followers",params:e,data:{target:t.toString()}})},m=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},b=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})},g=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})}},d462:function(t,e,n){"use strict";var a=n("958c"),r=n.n(a);r.a},e099:function(t,e,n){},e62b:function(t,e,n){"use strict";var a=n("e349"),r=n("3553"),i=n("69c5"),c=n("98a9"),s=n("d88d"),o=n("1bbd"),l=n("b60f");t.exports=function(t){var e,n,u,f,d,h,p=r(t),v="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,g=void 0!==b,_=l(p),C=0;if(g&&(b=a(b,m>2?arguments[2]:void 0,2)),void 0==_||v==Array&&c(_))for(e=s(p.length),n=new v(e);e>C;C++)h=g?b(p[C],C):p[C],o(n,C,h);else for(f=_.call(p),d=f.next,n=new v;!(u=d.call(f)).done;C++)h=g?i(f,b,[u.value,C],!0):u.value,o(n,C,h);return n.length=C,n}},fc8c:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-632755e0.f9554fe8.js.map