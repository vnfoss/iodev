(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d46b7a2"],{"82ee":function(t,e,a){},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var i=a("e8f2"),o=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let n;const{attrs:s}=a;return s&&(a.attrs={},n=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(o["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},a55b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-login"},[a("v-container",{staticClass:"px-0 pt-0",attrs:{id:"login-page",fluid:"",tag:"section"}},[a("div",{staticClass:"container-wrap"},[a("div",{staticClass:"wrap-title"},[a("v-flex",{staticClass:"mb-5",staticStyle:{"text-align":"center"}},[a("img",{staticClass:"img-login-logo",attrs:{src:t.publicPath+"/images/logo-olp.jpg?t=93111413"}})]),a("v-flex",{staticClass:"wrap-title pt-1 mb-2 mt-3"},[a("div",{staticClass:"text-1"},[t._v("Hệ thống thông tin quản lý các cuộc thi tin học")])])],1),t.signed?t._e():a("div",{staticClass:"wrap-form px-4 py-3"},[a("div",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-flex",{staticClass:"action-title mb-5",staticStyle:{"text-align":"center","font-size":"22px","font-family":"'Roboto Slab'",color:"#fff","font-weight":"700"},attrs:{xs12:""}},[a("div",[t._v("ĐĂNG NHẬP")])]),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Tên đăng nhập",rules:[function(t){return!!t||"Tên đăng nhập là bắt buộc"}],required:"","prepend-inner-icon":"mdi-account","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("v-flex",{staticStyle:{"margin-top":"30px"},attrs:{xs12:""}},[a("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Mật khẩu",type:"password",rules:[function(t){return!!t||"Mật khẩu là bắt buộc"}],required:"","prepend-inner-icon":"mdi-key","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-flex",{staticClass:"wrap-btn-login",staticStyle:{"margin-top":"30px","margin-bottom":"20px",position:"relative"},attrs:{xs12:""}},[a("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.login}},[a("v-icon",{attrs:{size:"20"}},[t._v("mdi-login")]),t._v("  Đăng nhập ")],1),a("a",{staticStyle:{position:"absolute",right:"0",bottom:"0",color:"#fff"},attrs:{href:"javascript:;"},on:{click:function(e){return t.forgotPassWord()}}},[a("span",[t._v(" Quên mật khẩu ?")])])],1)],1)],1)]),t.signed?a("div",{staticClass:"wrap-form px-3 py-3"},[a("div",{staticClass:"text-login"},[t._v("TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG")]),a("v-flex",{staticStyle:{margin:"20px 0","text-align":"center"},attrs:{xs12:""}},[a("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.submitLogout}},[a("div",{staticClass:"v-btn__content"},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-logout-variant")]),t._v("  "),a("span",[t._v("Đăng xuất")])],1)]),a("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.goToHome}},[a("v-icon",{attrs:{size:"20"}},[t._v("mdi-home-circle-outline")]),t._v("  "),a("span",[t._v("Trang chủ")])],1)],1)],1):t._e()])]),a("div",{staticClass:"text-center"},[a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1),a("v-dialog",{attrs:{"max-width":"450",persistent:""},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Xác nhận cấp lại mật khẩu")]),a("v-spacer")],1),a("v-card-text",{staticClass:"mt-5 px-2"},[a("v-form",{ref:"formActive",attrs:{"lazy-validation":""},model:{value:t.validFormConfirm,callback:function(e){t.validFormConfirm=e},expression:"validFormConfirm"}},[a("v-layout",{attrs:{wrap:""}},[a("v-col",{staticClass:"py-0 mb-2",attrs:{cols:"12"}},[a("label",[t._v("Mã bí mật "),a("span",{staticClass:"red--text"},[t._v("(*)")])]),a("i",[t._v("Vui lòng kiểm tra email để lấy mã bí mật.")]),a("v-text-field",{staticClass:"flex input-form",attrs:{solo:"",dense:"",rules:[function(t){return!!t||"Mã bí mật là bắt buộc"}],required:"","hide-details":"auto",placeholder:"Nhập mã bí mật",clearable:""},model:{value:t.maBiMat,callback:function(e){t.maBiMat=e},expression:"maBiMat"}})],1)],1)],1)],1),a("v-card-actions",{staticClass:"justify-end pb-3"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.confirmForgotPassWord}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save ")]),a("span",[t._v("Xác nhận")])],1)],1)],1)],1)],1)},o=[],n=a("2b0e"),s=a("bc3a"),r=a.n(s),l=a("854a"),c=a.n(l);c.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"};var d={name:"Login",data:()=>({publicPath:"",apiSso:"http://103.9.211.82:8080",overlay:!1,loading:!1,valid:!0,userName:"",password:"",client_secret:"",code:"",signed:!1,validFormConfirm:!1,dialogConfirm:!1,maBiMat:""}),created(){let t=this;n["a"].$cookies.get("Token")?t.signed=!0:t.signed=!1},computed:{},methods:{login(){let t=this;if(t.loading||!t.userName||!t.password)return;t.loading=!0;let e={data:{username:t.userName,password:t.password}};t.$store.dispatch("login",e).then((function(e){if(t.loading=!1,e.expires_in||(e["expires_in"]=864e5),e&&e.accessToken)try{let a=String(e.accessToken.split(".")[1]).replace(/_/g,"/"),i=JSON.parse(atob(a)),o=i&&i.hasOwnProperty("vaiTros")&&i.vaiTros?i.vaiTros:"";!!o&&o.find((function(t){return"VAITRO_QUANTRIHETHONG"===t}));if(o&&o.length){t.$cookies.set("Token",e.accessToken,e.expires_in),t.$cookies.set("RefreshToken",e.refreshToken?e.refreshToken:"",e.refresh_expires_in),r.a.defaults.headers["Authorization"]="Bearer "+e.accessToken,t.$store.commit("SET_ISSIGNED",!0);let a={token:"Bearer "+e.accessToken,email:t.userName};t.$store.dispatch("getThongTinUserDangNhap",a).then((function(e){let a="",i=e;if(e.vaiTros&&e.vaiTros.length){a=[],a=Array.from(e.vaiTros,(function(t){return t.ten})).toString(),i.vaiTroSuDung=a;let o=e.vaiTros.find((function(t){return"VAITRO_QUANTRIHETHONG"==t.ten}));o?t.$cookies.set("admin",!0,e.expires_in):t.$cookies.set("admin","",e.expires_in),t.$cookies.set("UserInfo",i,e.expires_in),t.$cookies.set("Roles",a,e.expires_in)}else t.$cookies.set("admin","",e.expires_in),t.$cookies.set("UserInfo",i,e.expires_in),t.$cookies.set("Roles",a,e.expires_in);setTimeout((function(){t.goToPage()}),200)})).catch((function(){t.loading=!1,setTimeout((function(){let a={hoVaTen:"",viTriChucDanh:"",vaiTroSuDung:"",email:t.userName};t.$cookies.set("UserInfo",a,e.expires_in),t.$cookies.set("Roles","",e.expires_in),t.goToPage()}),200)}))}else t.loading=!1,t.overlay=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}catch(a){t.loading=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}else c.a.remove(),c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")})).catch((function(e){t.loading=!1,c.a.remove(),c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")}))},submitLogout(){let t=this;t.signed=!1,t.$store.commit("SET_ISSIGNED",!1),t.$cookies.set("Token",""),t.$cookies.set("UserInfo",""),t.$cookies.set("RefreshToken",""),t.$cookies.set("Roles","");try{localStorage.setItem("thongTinTaiKhoan","")}catch(e){}},forgotPassWord(){let t=this;if(t.loading)return;if(""==String(t.userName).trim())return c.a.remove(),void c.a.error("Vui lòng nhập email đăng nhập");let e={email:String(t.userName).trim()};t.loading=!0,t.$store.dispatch("forgotPassWord",e).then((function(){t.loading=!1,setTimeout((function(){t.dialogConfirm=!0}),300)})).catch((function(){t.loading=!1}))},confirmForgotPassWord(){let t=this;if(!String(t.maBiMat).trim())return;let e={maBiMat:String(t.maBiMat).trim()};t.loading=!0,t.$store.dispatch("verifyForgotPassWord",e).then((function(){t.loading=!1,c.a.remove(),c.a.success("Xác minh thành công. Đăng nhập để sử dụng hệ thống."),setTimeout((function(){t.$router.push({path:"/dang-nhap"})}),300)})).catch((function(){t.loading=!1,c.a.remove(),c.a.error("Xác minh không thành công. Mã bí mật không chính xác.")}))},goToPage(){let t=this,e=t.$router.history.current.query;e.hasOwnProperty("redirect")&&e.redirect?t.$router.push({path:e.redirect}):t.$router.push({path:"/"})},goToHome(){let t=this;t.$router.push({path:"/"})},goToSignUp(){let t=this;t.$router.push({path:"/dang-ky"})}}},u=d,p=(a("f833"),a("2877")),g=a("6544"),m=a.n(g),f=a("8336"),h=a("b0af"),v=a("99d9"),x=a("62ad"),b=a("a523"),k=a("169a"),T=a("0e8f"),y=a("4bd4"),C=a("132d"),_=a("a722"),N=a("a797"),S=a("490a"),w=a("2fa4"),$=a("8654"),V=a("71d9"),H=a("2a7f"),P=Object(p["a"])(u,i,o,!1,null,null,null);e["default"]=P.exports;m()(P,{VBtn:f["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCol:x["a"],VContainer:b["a"],VDialog:k["a"],VFlex:T["a"],VForm:y["a"],VIcon:C["a"],VLayout:_["a"],VOverlay:N["a"],VProgressCircular:S["a"],VSpacer:w["a"],VTextField:$["a"],VToolbar:V["a"],VToolbarTitle:H["b"]})},f833:function(t,e,a){"use strict";a("82ee")}}]);