(function(e){function n(n){for(var t,o,u=n[0],c=n[1],h=n[2],l=0,s=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);p&&p(n);while(s.length)s.shift()();return r.push.apply(r,h||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],t=!0,o=1;o<a.length;o++){var u=a[o];0!==i[u]&&(t=!1)}t&&(r.splice(n--,1),e=c(c.s=a[0]))}return e}var t={},o={app:0},i={app:0},r=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-7fc83f64":"b9e445eb","chunk-0943ce22":"d87e7e5e","chunk-130bcd81":"b291db15","chunk-41883a9e":"e72670ba","chunk-59bef27d":"601ab007","chunk-3f2c558b":"1f0a5100","chunk-592bd4cc":"afb95b42","chunk-7716c992":"a861027c","chunk-242aa065":"e1960915","chunk-77a1d69a":"b2a65d66"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var n=[],a={"chunk-7fc83f64":1,"chunk-0943ce22":1,"chunk-130bcd81":1,"chunk-41883a9e":1,"chunk-59bef27d":1,"chunk-3f2c558b":1,"chunk-592bd4cc":1,"chunk-7716c992":1,"chunk-242aa065":1,"chunk-77a1d69a":1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-7fc83f64":"fa10b878","chunk-0943ce22":"1fd92f14","chunk-130bcd81":"c130c76b","chunk-41883a9e":"bd431dd4","chunk-59bef27d":"65c7232d","chunk-3f2c558b":"10f55632","chunk-592bd4cc":"e3884748","chunk-7716c992":"a097910f","chunk-242aa065":"d2de4f61","chunk-77a1d69a":"ce138006"}[e]+".css",i=c.p+t,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var h=r[u],l=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(l===t||l===i))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){h=s[u],l=h.getAttribute("data-href");if(l===t||l===i)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var t=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete o[e],p.parentNode.removeChild(p),a(r)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var t=i[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,a){t=i[e]=[n,a]}));n.push(t[2]=r);var h,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var s=new Error;h=function(n){l.onerror=l.onload=null,clearTimeout(p);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",s.name="ChunkLoadError",s.type=t,s.request=o,a[1](s)}i[e]=void 0}};var p=setTimeout((function(){h({type:"timeout",target:l})}),12e4);l.onerror=l.onload=h,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,a){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(a,t,function(n){return e[n]}.bind(null,t));return a},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],l=h.push.bind(h);h.push=n,h=h.slice();for(var s=0;s<h.length;s++)n(h[s]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"1f55":function(e,n,a){},"56d7":function(e,n,a){"use strict";a.r(n);var t=a("2b0e"),o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-app",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}]},[a("confirm-dialog"),a("router-view")],1)},i=[],r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("transition",{attrs:{name:"fade"}},[e.isShow?a("div",{staticClass:"vc-overlay",attrs:{id:"vueConfirm"},on:{click:e.handleClickOverlay}},[a("transition",{attrs:{name:"zoom"}},[e.isShow?a("div",{ref:"vueConfirmDialog",staticClass:"vc-container"},[a("span",{staticClass:"vc-text-grid"},[e.dialog.title?a("h4",{staticClass:"vc-title",domProps:{innerHTML:e._s(e.dialog.title)}}):e._e(),e.dialog.message?a("p",{staticClass:"vc-text",domProps:{innerHTML:e._s(e.dialog.message)}}):e._e(),e.dialog.auth?a("span",[a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"vc-input",attrs:{type:"password",name:"vc-password",placeholder:"Password",autocomplete:"off"},domProps:{value:e.password},on:{keyup:function(n){return n.type.indexOf("key")||13===n.keyCode?function(n){return e.handleClickButton(n,!0)}.apply(null,arguments):null},input:function(n){n.target.composing||(e.password=n.target.value)}}})]):e._e()]),a("div",{staticClass:"vc-btn-grid",class:{isMono:!e.dialog.button.no||!e.dialog.button.yes}},[e.dialog.button.no?a("button",{staticClass:"vc-btn left",attrs:{type:"button"},on:{click:function(n){return n.stopPropagation(),function(n){return e.handleClickButton(n,!1)}.apply(null,arguments)}}},[e._v(" "+e._s(e.dialog.button.no)+" ")]):e._e(),e.dialog.button.yes?a("button",{staticClass:"vc-btn",attrs:{disabled:!!e.dialog.auth&&!e.password,type:"button"},on:{click:function(n){return n.stopPropagation(),function(n){return e.handleClickButton(n,!0)}.apply(null,arguments)}}},[e._v(" "+e._s(e.dialog.button.yes)+" ")]):e._e()])]):e._e()])],1):e._e()])},u=[];const c={name:"VueConfirmDialog",data(){return{password:null}},props:{params:{type:Object,default(){return{}}}},methods:{handleClickButton({target:e},n){n?this.dialog.callback():this.$store.commit("SET_CONFIG_CONFIRM_DIALOG",{auth:!1,title:"",message:"",button:{},callback:()=>{}}),this.$store.commit("SET_SHOWCONFIRM",!1)},handleClickOverlay({target:e}){}},computed:{isShow(){return this.$store.getters.getIsShowConfirm},dialog(){return this.$store.getters.getDialogConfirm}},mounted(){},beforeDestroy(){}};var h=c,l=h,s=(a("880d"),a("2877")),p=Object(s["a"])(l,r,u,!1,null,null,null),d=p.exports,m={name:"App",components:{"confirm-dialog":d},data:()=>({}),created(){this.$cookies.get("Token")||window.location.href.indexOf("/dang-ky")||window.location.href.indexOf("/dang-nhap")||this.$router.push({path:"/"})},computed:{},methods:{onResize:function(){let e=this.$vuetify.breakpoint.name;this.$store.commit("SET_BREAKPOINTNAME",e)}}},g=m,f=a("6544"),T=a.n(f),y=a("7496"),C=a("269a"),b=a.n(C),v=a("dc22"),k=Object(s["a"])(g,o,i,!1,null,null,null),_=k.exports;T()(k,{VApp:y["a"]}),b()(k,{Resize:v["a"]});var S=a("f309");a("1f55");t["a"].use(S["a"]);var D=new S["a"]({theme:{themes:{light:{primary:"#2161B1"}}}}),B=a("8c4f");t["a"].use(B["a"]);var N=new B["a"]({mode:"hash",base:"/",routes:[{path:"/",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-0943ce22"),a.e("chunk-130bcd81")]).then(a.bind(null,"bb51")),children:[{path:"/",name:"DashBoard",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-41883a9e"),a.e("chunk-0943ce22"),a.e("chunk-59bef27d"),a.e("chunk-3f2c558b")]).then(a.bind(null,"7277")),props:!0},{path:"/cuoc-thi/:id",name:"ChiTietCuocThi",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-41883a9e"),a.e("chunk-0943ce22"),a.e("chunk-59bef27d"),a.e("chunk-592bd4cc")]).then(a.bind(null,"4dd0")),props:!0},{path:"/dang-ky/:id",name:"DangKyThi",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-41883a9e"),a.e("chunk-0943ce22"),a.e("chunk-59bef27d"),a.e("chunk-7716c992")]).then(a.bind(null,"f40c")),props:!0}]},{name:"Login",path:"/dang-nhap",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-41883a9e"),a.e("chunk-242aa065")]).then(a.bind(null,"a55b"))},{name:"DangKy",path:"/dang-ky",component:()=>Promise.all([a.e("chunk-7fc83f64"),a.e("chunk-41883a9e"),a.e("chunk-77a1d69a")]).then(a.bind(null,"cea3"))}]}),P=a("2f62"),M=a("bc3a"),E=a.n(M),w=a("1157"),x=a.n(w);t["a"].use(P["a"]);var A=new P["a"].Store({state:{indexTab:0,apiSso:"http://103.9.211.82:8080",drawer:!1,breakpointName:"lg",isShowConfirm:!1,dialogConfirm:{auth:!1,title:"",message:"",button:{},callback:()=>{}},formData:"",formThongKe:""},getters:{getIndexTab:e=>e.indexTab,getIsSigned:e=>e.isSigned,getBreakpointName:e=>e.breakpointName,getIsShowConfirm:e=>e.isShowConfirm,getDialogConfirm:e=>e.dialogConfirm,getFormData:e=>e.formData,getFormThongKe:e=>e.formThongKe},mutations:{SET_INDEXTAB(e,n){e.indexTab=n},SET_ISSIGNED(e,n){e.isSigned=n},SET_DRAWER(e,n){e.drawer=n},SET_BREAKPOINTNAME(e,n){e.breakpointName=n},SET_SHOWCONFIRM(e,n){e.isShowConfirm=n},SET_CONFIG_CONFIRM_DIALOG(e,n){e.dialogConfirm=n},SET_FORM_DATA(e,n){e.formData=n},SET_FORM_THONGKE(e,n){e.formThongKe=n}},actions:{collectionCreate({commit:e,state:n},a){return new Promise((e,n)=>{let t=JSON.stringify(a.data),o={method:"post",url:"/api/"+a.collectionName,headers:{Accept:"application/json","Content-Type":"application/json"},data:t};E()(o).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e.response)}))})},collectionCreateChild({commit:e,state:n},a){return new Promise((e,n)=>{let t=JSON.stringify(a.data),o={method:"post",url:"/api/"+a.collectionName+"/"+a.collectionId+"/"+a.collectionChildName,headers:{Accept:"application/json","Content-Type":"application/json"},data:t};E()(o).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e.response)}))})},collectionUpdate({commit:e,state:n},a){return new Promise((e,n)=>{let t=JSON.stringify(a.data),o={method:"put",url:"/api/"+a.collectionName+"/"+a.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:t};E()(o).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},collectionDelete({commit:e,state:n},a){return new Promise((e,n)=>{let t={method:"delete",url:"/api/"+a.collectionName+"/"+a.id,headers:{Accept:"application/json","Content-Type":"application/json"},data:{}};E()(t).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},collectionFilter({commit:e,state:n},a){return new Promise((e,n)=>{let t={method:"get",url:"/api/"+a.collectionName,headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:a.data};E()(t).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},collectionFilterLevel2({commit:e,state:n},a){return new Promise((e,n)=>{let t={method:"get",url:"/api/"+a.collectionName+"/"+a.collectionId+"/"+a.collectionNameChild,headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:a.data};E()(t).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},collectionDetail({commit:e,state:n},a){return new Promise((e,n)=>{let t={method:"get",url:"/api/"+a.collectionName+"/"+a.id,data:{},headers:{Accept:"application/json","Content-Type":"application/json"}};E()(t).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},collectionDetailSearch({commit:e,state:n},a){return new Promise((e,n)=>{let t={method:"get",url:"/api/"+a.collectionName+"/"+a.keySearch+"/"+a.id,data:{},headers:{Accept:"application/json","Content-Type":"application/json"}};E()(t).then((function(n){let a=n.data;e(a)})).catch((function(e){n(e)}))})},login({commit:e,state:n},a){return new Promise((e,t)=>{let o={url:n.apiSso+"/api/authenticate",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify(a.data)};x.a.ajax(o).done((function(n){let a=n;e(a)})).fail((function(e){t(e)}))})},getThongTinUserDangNhap({commit:e,state:n},a){return new Promise((e,t)=>{let o={method:"get",url:n.apiSso+"/api/taikhoans/"+a.email,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a.token},data:{},params:{}};x.a.ajax(o).done((function(n){let a=n;e(a)})).fail((function(e){t(e)}))})},signUp({commit:e,state:n},a){return new Promise((e,t)=>{let o={url:n.apiSso+"/api/auth/register",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify(a.data)};x.a.ajax(o).done((function(n){let a=n;e(a)})).fail((function(e){t(e)}))})},activeTaiKhoan({commit:e,state:n},a){return new Promise((e,t)=>{let o={url:n.apiSso+"/api/auth/"+a.email+"/verify-email?maKichHoat="+a.maKichHoat,method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify({})};x.a.ajax(o).done((function(n){let a=n;e(a)})).fail((function(e){t(e)}))})}}}),L=a("2b27"),O=a.n(L),I=a("854a"),j=a.n(I),H=(a("d304"),a("f962")),V=a("cacf"),Q=a.n(V);j.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"},t["a"].use(O.a),t["a"].use(Q.a),t["a"].config.productionTip=!1;const G="http://103.9.211.82:8080";"undefined"!==typeof G&&(E.a.defaults.baseURL=G),E.a.interceptors.response.use(e=>e,e=>{if(401==e.response.status&&(A.commit("SET_ISSIGNED",""),t["a"].$cookies.set("Token",""),t["a"].$cookies.get("RefreshToken"))){let e={code:t["a"].$cookies.get("RefreshToken"),redirect_uri:Object({NODE_ENV:"production",VUE_APP_BASE_COLOR:"#2161B1",VUE_APP_BASE_TITLE:"Hệ thống thông tin - IODEV",VUE_APP_IMG_BANNER:"/images/bg-banner.png",VUE_APP_IMG_BG_LOGIN:"/images/bg-login.png",VUE_APP_PATH_API:"http://103.9.211.82:8080",VUE_APP_PATH_API_SSO:"http://103.9.211.82:8080",VUE_APP_PULIC_PATH:"",VUE_APP_TITLE_LOGIN:"",BASE_URL:"/"}).VUE_APP_PATH_REDIRECT_SSO};A.dispatch("getRefreshTokenKeyCloak",e).then(e=>{t["a"].$cookies.set("Token",e.accessToken,e.expires_in),t["a"].$cookies.set("RefreshToken",e.refreshToken,e.refresh_expires_in),E.a.defaults.headers["Authorization"]="Bearer "+e.accessToken,j.a.remove(),j.a.error("Thao tác thất bại. Vui lòng thử lại.")}).catch((function(){}))}return e.response?parseError(e.response.data):Promise.reject(e)}),t["a"].$cookies.get("Token")?(A.commit("SET_ISSIGNED",!0),E.a.defaults.headers["Authorization"]="Bearer "+t["a"].$cookies.get("Token")):(A.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null)),t["a"].mixin({data:()=>({dataLocal:H}),methods:{checkRole(e){let n=this,a=n.$cookies.get("Roles","");if(!e||!a)return!1;let t=a.split(","),o=t.find((function(n){return n==e}));return!!o}},computed:{groupId(){return this.$cookies.get("groupId","")},userId(){return this.$cookies.get("userId","")},isAdmin(){return this.$cookies.get("admin","")},userLogin(){let e="";try{e=JSON.parse(localStorage.getItem("user"))}catch(n){}return e},isMobile(){let e=this.$store.getters.getBreakpointName;return"xs"===e||"sm"===e}}}),new t["a"]({vuetify:D,router:N,store:A,render:e=>e(_)}).$mount("#app")},"880d":function(e,n,a){"use strict";a("eb19")},eb19:function(e,n,a){},f962:function(e){e.exports=JSON.parse('{"danhSachBaoCao":[{"maDinhDanh":"231241233","maBaoCao":"BC-983123","tenBaoCao":"Số lượng văn bản quy phạm pháp luật liên quan đến thích ứng biển đổi khí hậu được xây dựng và ban hành","quyTrinh":{"@type":"T_QuyTrinh","maQuyTrinh":"QT-001"},"mauBaoCao":{"@type":"T_MauBaoCao","maDinhDanh":"","maMauBaoCao":"MAU_001","nhapNhieuThanhPhan":1},"kyBaoCao":{"@type":"C_KyBaoCao","maMuc":"1","tenMuc":"Theo tháng"},"hanXuLy":"02-09-2022","coQuanThucHien":{"@type":"T_CoQuanDonVi","maHanhChinh":"STNMT","tenGoi":"Sở Tài nguyên và môi trường"},"tinhTrang":{"@type":"C_TrangThaiXuLy","tenMuc":"Đang xử lý","maMuc":"1"},"thoiGianTao":"12-08-2022","thoiGianCapNhat":"","nguoiTaoLap":{"@type":"T_DanhTinhDienTu","tenDinhDanh":"","maSoID":""}},{"maDinhDanh":"23123","maBaoCao":"BC-154312","tenBaoCao":"Số lượng văn bản quy phạm pháp luật liên quan đến thích ứng biển đổi khí hậu được xây dựng và ban hành","quyTrinh":{"@type":"T_QuyTrinh","maQuyTrinh":"QT-002"},"mauBaoCao":{"@type":"T_MauBaoCao","maDinhDanh":"","maMauBaoCao":"MAU_002","nhapNhieuThanhPhan":1},"kyBaoCao":{"@type":"C_KyBaoCao","maMuc":"1","tenMuc":"Theo tuần"},"hanXuLy":"08-08-2022","coQuanThucHien":{"@type":"T_CoQuanDonVi","maHanhChinh":"STTTT","tenGoi":"Sở Thông tin và truyền thông"},"tinhTrang":{"@type":"C_TrangThaiXuLy","tenMuc":"Chờ duyệt","maMuc":"2"},"thoiGianTao":"01-08-2022","thoiGianCapNhat":"","nguoiTaoLap":{"@type":"T_DanhTinhDienTu","tenDinhDanh":"","maSoID":""}}],"danhSachThanhPhan":[{"maDinhDanh":"231241233","maBaoCao":"BC-983123","tenBaoCao":"Số lượng văn bản quy phạm pháp luật liên quan đến thích ứng biển đổi khí hậu được xây dựng và ban hành","quyTrinh":{"@type":"T_QuyTrinh","maQuyTrinh":"QT-001"},"noiDung":{"loaiVanBan":{"name":"Quyết định","value":"1"},"hienTrang":[{"name":"Dự thảo","value":"1"},{"name":"Đã ban hành","value":"2"}],"coQuanBanHanh":[{"name":"Sở thông tin và truyền thông","value":"1"}],"ngayBanHanh":"2022-11-11T00:00:00.000Z","tenVanBan":"Tôi là tên văn bản","tomTatNoiDung":"Tôi là tên tóm tắt nội dung","tinhTrang":{"tenMuc":"Đang xử lý","maMuc":"1"}},"mauBaoCao":{"@type":"T_MauBaoCao","maDinhDanh":"","maMauBaoCao":"MAU_001","nhapNhieuThanhPhan":1},"kyBaoCao":{"@type":"C_KyBaoCao","maMuc":"1","tenMuc":"Theo tháng"},"hanXuLy":"02-09-2022","coQuanThucHien":{"@type":"T_CoQuanDonVi","maHanhChinh":"STNMT","tenGoi":"Sở Tài nguyên và môi trường"},"tinhTrang":{"@type":"C_TrangThaiXuLy","tenMuc":"Đang xử lý","maMuc":"1"},"thoiGianTao":"12-08-2022","thoiGianCapNhat":"","nguoiTaoLap":{"@type":"T_DanhTinhDienTu","tenDinhDanh":"","maSoID":""}},{"maDinhDanh":"23123","maBaoCao":"BC-154312","tenBaoCao":"Số lượng văn bản quy phạm pháp luật liên quan đến thích ứng biển đổi khí hậu được xây dựng và ban hành","quyTrinh":{"@type":"T_QuyTrinh","maQuyTrinh":"QT-002"},"mauBaoCao":{"@type":"T_MauBaoCao","maDinhDanh":"","maMauBaoCao":"MAU_002","nhapNhieuThanhPhan":1},"noiDung":{"loaiVanBan":{"name":"Quyết định","value":"1"},"hienTrang":[{"name":"Dự thảo","value":"1"},{"name":"Đã ban hành","value":"2"}],"coQuanBanHanh":[{"name":"Sở thông tin và truyền thông","value":"1"}],"ngayBanHanh":"2022-11-11T00:00:00.000Z","tenVanBan":"Tôi là tên văn bản","tomTatNoiDung":"Tôi là tên tóm tắt nội dung","tinhTrang":{"tenMuc":"Đang xử lý","maMuc":"1"}},"kyBaoCao":{"@type":"C_KyBaoCao","maMuc":"1","tenMuc":"Theo tuần"},"hanXuLy":"08-08-2022","coQuanThucHien":{"@type":"T_CoQuanDonVi","maHanhChinh":"STTTT","tenGoi":"Sở Thông tin và truyền thông"},"tinhTrang":{"@type":"C_TrangThaiXuLy","tenMuc":"Chờ duyệt","maMuc":"2"},"thoiGianTao":"01-08-2022","thoiGianCapNhat":"","nguoiTaoLap":{"@type":"T_DanhTinhDienTu","tenDinhDanh":"","maSoID":""}}],"chiTietBaoCao":{"maDinhDanh":"231241233","maBaoCao":"BC-983123","tenBaoCao":"Số lượng văn bản quy phạm pháp luật liên quan đến thích ứng biển đổi khí hậu được xây dựng và ban hành","quyTrinh":{"@type":"T_QuyTrinh","maQuyTrinh":"QT-001"},"mauBaoCao":{"@type":"T_MauBaoCao","maDinhDanh":"","maMauBaoCao":"MAU_001","nhapNhieuThanhPhan":1},"kyBaoCao":{"@type":"C_KyBaoCao","maMuc":"1","tenMuc":"Theo tháng"},"hanXuLy":"02-09-2022","coQuanThucHien":{"@type":"T_CoQuanDonVi","maHanhChinh":"STNMT","tenGoi":"Sở Tài nguyên và môi trường"},"tinhTrang":{"@type":"C_TrangThaiXuLy","tenMuc":"Đang xử lý","maMuc":"1"},"thoiGianTao":"12-08-2022","thoiGianCapNhat":"","nguoiTaoLap":{"@type":"T_DanhTinhDienTu","tenDinhDanh":"","maSoID":""}},"mauBaoCao":{"maDinhDanh":"","tenGoi":"","trangThai":{"@type":"C_TrangThaiDuLieu","maMuc":"","tenMuc":""},"maMauBaoCao":"","mauTaoMaBaoCao":"","quyTrinhXuLy":{"@type":"T_QuyTrinh","maQuyTrinh":""},"nhapNhieuThanhPhan":true,"mauNhap":[{"name":"loaiVanBan","title":"Loại văn bản","type":"select","multiple":false,"itemText":"name","itemValue":"value","minLength":0,"maxLength":0,"required":true,"rules":[],"fieldClass":"col-6","placeHolder":"","defaultValue":"","dataType":"","dataSource":[{"name":"Quyết định","value":"1"},{"name":"Công văn","value":"2"}],"autoEvent":""},{"name":"hienTrang","title":"Hiện trạng","type":"select","multiple":true,"itemText":"name","itemValue":"value","minLength":0,"maxLength":0,"required":false,"rules":"","fieldClass":"col-6","placeHolder":"","defaultValue":"","dataType":"","dataSource":[],"autoEvent":"","api":"http://10.3.16.185:8080/api/danhmuc/1","responseDataApi":"content"},{"name":"coQuanBanHanh","title":"Cơ quan ban hành","type":"select","multiple":true,"itemText":"name","itemValue":"value","minLength":0,"maxLength":0,"required":true,"rules":"","fieldClass":"col-6","placeHolder":"","defaultValue":"","dataType":"","dataSource":[{"name":"Sở thông tin và truyền thông","value":"1"},{"name":"Sở tài nguyên và môi trường","value":"2"}],"autoEvent":""},{"name":"ngayBanHanh","title":"Ngày ban hành","type":"date","minLength":0,"maxLength":0,"required":true,"rules":"","fieldClass":"col-6","placeHolder":"ddmmyyyy, dd/mm/yyyy","defaultValue":"20221108","dataType":"","dataSource":"","autoEvent":""},{"name":"tenVanBan","title":"Tên văn bản","type":"textfield","minLength":0,"maxLength":0,"required":true,"rules":"","fieldClass":"col-12","placeHolder":"","defaultValue":"","dataType":"","dataSource":"","autoEvent":""},{"name":"tomTatNoiDung","title":"Tóm tắt nội dung","type":"textarea","minLength":0,"maxLength":0,"required":true,"rules":"","fieldClass":"col-12","placeHolder":"","defaultValue":"","dataType":"","dataSource":"","autoEvent":""},{"name":"files","title":"Giấy tờ đính kèm","type":"attack","multiple":true,"minLength":0,"maxLength":0,"required":true,"rules":"","fieldClass":"col-12","placeHolder":"","defaultValue":"","dataType":"","dataSource":"","autoEvent":""}],"mauThongKe":{"maMau":"","tenMau":"","groupBy":[{"name":"","title":""}],"orderBy":[{"name":"","type":["asc","desc"]}],"limit":"","query":"","searchHidden":{"@type":"S_Query","where":""},"searchForm":[{"operator":["=","!=",">=","<=","like"],"keySearch":"","keyUrl":{"@type":"S_TruongDuLieu","name":"","title":"","type":{"@type":"C_KieuDuLieu","maMuc":"","tenMuc":""},"minLength":0,"maxLength":0,"required":false,"fieldClass":"","placeHolder":"","defaultValue":"","dataType":"","dataSource":""}}],"listView":[{"@type":"S_DanhSach","title":"","name":"","fieldClass":""}]},"mauHienThi":{"headers":[{"sortable":false,"text":"STT","value":"index","type":"index","class":"td-center","width":"50"},{"sortable":false,"text":"Tên văn bản","value":"tenVanBan","class":"th-center"},{"sortable":false,"text":"Loại văn bản","value":"loaiVanBan","class":"th-center td-center","type":"object","mapping":"name"},{"sortable":false,"text":"Đơn vị thực hiện","value":"coQuanBanHanh","type":"array","mapping":"name","class":"th-center"},{"sortable":false,"text":"Ngày ban hành","value":"ngayBanHanh","class":"th-center td-center","type":"date"},{"sortable":false,"width":"120","text":"Tình trạng","value":"tinhTrang","type":"calculator","calculator":"dataInput[\'tinhTrang\'][\'tenMuc\']","class":"th-center td-center"},{"sortable":false,"text":"Thao tác","value":"action","type":"action","class":"th-center td-center","width":"150"}],"itemsPerPage":15}}}')}});