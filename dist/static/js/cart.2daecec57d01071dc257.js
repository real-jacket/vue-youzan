webpackJsonp([4],{0:function(e,t,n){"use strict";var i={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/sublist",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in i)i.hasOwnProperty(o)&&(i[o]="http://rap2api.taobao.org/app/mock/7058"+i[o]);t.a=i},10:function(e,t){},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(72),o=(n.n(i),n(74)),s=(n.n(o),n(73)),r=(n.n(s),n(1)),c=n(7),a=n(3),d=n.n(a),u=n(0),h=n(28),f=n.n(h),l=n(68),v=n(21);new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return!0===e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(e.push(n),t+=n.price*n.number)})}),this.total=t,e}return[]},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},removeLists:function(){if(this.editingShop){var e=[];return this.lists.forEach(function(t){t.goodsList.forEach(function(t){t.removeChecked&&e.push(t)})}),e}return[]}},watch:{removePopup:function(e){document.body.style.overflow=e?"hidden":"auto",document.querySelector("html").style.overflow=e?"hidden":"auto"}},created:function(){this.getLists()},methods:{getLists:function(){var e=this;d.a.post(u.a.cartLists).then(function(t){var n=t.data.cartList;n.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=n})},selectGood:function(e,t){var n=this.editingShop?"removeChecked":"checked";t[n]=!t[n],e[n]=e.goodsList.every(function(e){return e[n]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(n){n[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},edit:function(e,t){var n=this;e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(i,o){i.goodsList.forEach(function(e,s){o===t&&!0===i.editing&&(n.$refs["good-"+t+"-"+s][0].style.left="0px")}),o!==t&&(i.editing=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&l.a.reduce(e.id).then(function(t){e.number--})},add:function(e){l.a.add(e.id).then(function(t){e.number++})},remove:function(e,t,n,i){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:n,goodIndex:i},this.removeMsg="确定要删除该商品么？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定要删除这"+this.removeLists.length+"个商品么？"},removeConfirm:function(){var e=this;if("确定要删除该商品么？"===this.removeMsg){var t=this.removeData,i=t.shop,o=t.shopIndex,s=t.good,r=t.goodIndex;n.i(v.a)(u.a.cartRemove,{id:s.id}).then(function(t){i.goodsList.splice(r,1),i.goodsList.length||(e.lists.splice(o,1),e.removeShop())})}else{var c=[];this.removeLists.forEach(function(e){c.push(e.id)}),d.a.post(u.a.cartRemove,{ids:c}).then(function(t){var n=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id===t.id})&&n.push(t)}),n.length?e.editingShop.goodsList=n:(e.lists.splice(e.editingShopIndex,1),e.removeShop())})}this.removePopup=!1},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,n,i,o){if(!0!==t.editing){var s=e.changedTouches[0].clientX,r="0";i.startX-s>100&&(r="-60px"),s-i.startX>100&&(r="0px");for(var c in this.$refs)c==="good-"+n+"-"+o?f()(this.$refs[c],{left:r}):f()(this.$refs[c],{left:"0px"})}}},mixins:[c.a]})},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,i){return n("li",{class:{active:i===e.curIndex},on:{click:function(n){e.changeNav(t,i)}}},[n("a",[n("i",{class:t.icon}),e._v(" "),n("div",[e._v("有赞")])])])}))])},staticRenderFns:[]}},21:function(e,t,n){"use strict";function i(e,t){return new s.a(function(n,i){c.a.post(e,t).then(function(e){n(e)}).catch(function(e){i(e)})})}var o=n(47),s=n.n(o),r=n(3),c=n.n(r);t.a=i},68:function(e,t,n){"use strict";var i=n(48),o=n.n(i),s=n(49),r=n.n(s),c=n(21),a=n(0),d=function(){function e(){o()(this,e)}return r()(e,null,[{key:"add",value:function(e){return n.i(c.a)(a.a.cartAdd,{id:e,number:1})}},{key:"reduce",value:function(e){return n.i(c.a)(a.a.cartReduce,{id:e,number:1})}},{key:"remove",value:function(e){e.forEach(function(e){ids.push(e.id)})}}]),e}();t.a=d},7:function(e,t,n){"use strict";var i=n(8),o=n.n(i),s={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var n=t.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return t+".00"}},components:{FootNav:o.a}};t.a=s},72:function(e,t){},73:function(e,t){},74:function(e,t){},8:function(e,t,n){function i(e){n(10)}var o=n(6)(n(9),n(11),i,null,null);e.exports=o.exports},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),o=n.n(i),s=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}];t.default={data:function(){return{navConfig:s,curIndex:parseInt(o.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[104]);
//# sourceMappingURL=cart.2daecec57d01071dc257.js.map