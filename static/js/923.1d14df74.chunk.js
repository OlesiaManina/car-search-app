"use strict";(self.webpackChunkcar_search_app=self.webpackChunkcar_search_app||[]).push([[923],{8735:function(e,s,t){t.d(s,{Z:function(){return te}});var n=t(6410),i=t(9439),a=t(2791),r=t(9434),l="AdvertsItem_container__jxRp-",c="AdvertsItem_wrapper__pvT1T",d="AdvertsItem_img__rLmgK",o="AdvertsItem_fav_btn__UlKB5",_="AdvertsItem_bottom_container__IG93K",m="AdvertsItem_mainInfo_container__JJiFW",u="AdvertsItem_model_list__HzIxy",v="AdvertsItem_model_list_item__e8Crm",h="AdvertsItem_accent__Gq6aF",x="AdvertsItem_aditionalInfo_container__z5tLE",f="AdvertsItem_aditionalInfo_item__eHeHF",j="AdvertsItem_learn_btn__tOF6f global_button__hLC30",p="AdvertsItem_heart__KwZWI",N="AdvertsItem_favoriteHeart__1IG+e",g=t(4164),A=t(2928),y=t(8037),C="Modal_overlay__r63M6",I="Modal_modalWrapper__ncah9",M="Modal_crossBtn__kIT-U",b="Modal_exit__wKCHn",L=t(184),w=document.querySelector("#modal-root"),k=function(e){var s=e.children,t=e.isOpen,n=e.onClose;(0,a.useEffect)((function(){return t&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[t]),(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var i=(0,A.Yz)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:1},config:{duration:500}}),r=(0,A.q_)({opacity:t?1:0,transform:"translate(-100%,-100%)",config:{duration:500}});return i((function(e,t){return t&&(0,g.createPortal)((0,L.jsx)("div",{className:C,as:A.q.div,styler:e,onClick:function(){return n()},children:(0,L.jsxs)("div",{className:I,as:A.q.div,style:r,onClick:function(e){return e.stopPropagation()},children:[(0,L.jsx)("button",{type:"button",className:M,onClick:n,children:(0,L.jsx)(y.Z,{className:b,size:"140",color:"#121417"})}),s]})}),w)}))},F=t(3433),Z=t(1087);function z(e){var s=e.split(", ");return s.length>=3?{city:s[s.length-2],country:s[s.length-1]}:{city:"",country:""}}var E="AdvertsModal_container__+x4Ea",J="AdvertsModal_photo__MsEmJ",H="AdvertsModal_model_list__qJJk3",P="AdvertsModal_model_list_item__7YTYN",S="AdvertsModal_accent__VBtto",q="AdvertsModal_aditionalInfo_container__ttLCw",G="AdvertsModal_list_item__-O+nG",K="AdvertsModal_description__D4X1M",T="AdvertsModal_title__cvFX0",W="AdvertsModal_accessAndFuncArr_container__iIkYg",Y="AdvertsModal_condition_list__1-ybJ",B="AdvertsModal_condition_item__ziV1Y",O="AdvertsModal_value__GJsuv",U="AdvertsModal_call_btn__vujzd global_button__hLC30";function R(e){var s=e.item;if(s){var t=s.id,n=s.year,a=s.make,r=s.model,l=s.type,c=s.img,d=s.description,o=s.fuelConsumption,_=s.engineSize,m=s.accessories,u=s.functionalities,v=s.rentalPrice,h=s.address,x=s.rentalConditions,f=s.mileage,j=z(h),p=j.city,N=j.country,g=[].concat((0,F.Z)(m),(0,F.Z)(u)),A=x.split("\n").map((function(e,s){if(e.includes("Minimum age:")){var t=e.split(": "),n=(0,i.Z)(t,2),a=n[0],r=n[1];return(0,L.jsxs)("li",{className:B,children:[a,": ",(0,L.jsx)("p",{className:O,children:r})]},s)}return(0,L.jsx)("li",{className:B,children:e},s)})),y=[f,v].map((function(e,s){return(0,L.jsxs)("li",{className:B,children:[0===s?"Mileage: ":"Price: ","number"===typeof e?(0,L.jsx)("p",{className:O,children:e.toLocaleString("en-US")}):(0,L.jsxs)("p",{className:O,children:[parseFloat(e.substring(1)),"$"]})]},s)}));return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{className:E,children:[(0,L.jsx)("img",{alt:r,className:J,src:c}),(0,L.jsxs)("ul",{className:H,children:[(0,L.jsxs)("li",{className:P,children:[a,","]}),(0,L.jsxs)("li",{className:S,children:[r,","]}),(0,L.jsx)("li",{className:P,children:n})]}),(0,L.jsxs)("ul",{className:q,children:[(0,L.jsx)("li",{className:G,children:p}),(0,L.jsx)("li",{className:G,children:N}),(0,L.jsxs)("li",{className:G,children:["id: ",t]}),(0,L.jsxs)("li",{className:G,children:["year: ",n]}),(0,L.jsxs)("li",{className:G,children:["type: ",l]}),(0,L.jsxs)("li",{className:G,children:["fuelConsumption: ",o]}),(0,L.jsxs)("li",{className:G,children:["engineSize: ",_]})]}),(0,L.jsx)("p",{className:K,children:d}),(0,L.jsx)("h2",{className:T,children:"Accessories and functionalities:"}),(0,L.jsx)("ul",{className:W,children:g.length>0&&g.map((function(e,s){return(0,L.jsx)("li",{className:G,children:e},s)}))}),(0,L.jsx)("h2",{className:T,children:"Rental Conditions:"}),(0,L.jsxs)("ul",{className:Y,children:[A,y]}),(0,L.jsx)(Z.rU,{className:U,to:"tel:+380730000000",children:"Rental Car"})]})})}}var V=t(6497);function X(e){var s,t=e.item,n=e.isFavorite,g=(0,a.useState)(!1),A=(0,i.Z)(g,2),y=A[0],C=A[1],I=t.id,M=t.year,b=t.make,w=t.model,F=t.type,Z=t.img,E=t.functionalities,J=t.rentalPrice,H=t.rentalCompany,P=t.address,S=(0,r.I0)(),q=z(P),G=q.city,K=q.country,T=(s=E,Array.isArray(s)&&0!==s.length?s.reduce((function(e,s){return s.split(" ").length>2&&(s=s.split(" ").slice(0,2).join(" ")+"..."),s.length<e.length?s:e}),s[0]):null);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("li",{className:l,children:[(0,L.jsxs)("div",{className:c,children:[(0,L.jsx)("img",{className:d,src:Z,alt:b,width:"274"}),(0,L.jsx)("div",{children:(0,L.jsx)("button",{className:o,type:"button",onClick:function(){return function(e){S(n?(0,V.zm)({id:e.id}):(0,V._p)(e))}(t)},children:(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",className:"".concat(p," ").concat(n?N:""),children:(0,L.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"})})})})]}),(0,L.jsxs)("div",{className:_,children:[(0,L.jsxs)("div",{className:m,children:[(0,L.jsxs)("ul",{className:u,children:[(0,L.jsxs)("li",{className:v,children:[b,","]}),(0,L.jsxs)("li",{className:h,children:[w.split("-").slice(0,1),","]}),(0,L.jsx)("li",{className:v,children:M})]}),(0,L.jsx)("p",{className:v,children:J})]}),(0,L.jsxs)("ul",{className:x,children:[(0,L.jsx)("li",{className:f,children:G}),(0,L.jsx)("li",{className:f,children:K}),(0,L.jsx)("li",{className:f,children:H}),(0,L.jsx)("li",{className:f,children:F}),(0,L.jsx)("li",{className:f,children:w}),(0,L.jsx)("li",{className:f,children:I}),(0,L.jsx)("li",{className:f,children:T})]})]}),y&&(0,L.jsx)(k,{isOpen:y,onClose:function(){return C(!1)},children:(0,L.jsx)(R,{item:t})}),(0,L.jsx)("button",{className:j,type:"button",onClick:function(){return C(!0)},children:"Learn More"})]})})}var D=t.p+"static/media/man-surprised.a5e819df87619a49c623.jpg",Q="AdvertsList_list__vknfo",$="AdvertsList_imgNoAdv__dSHx1",ee="AdvertsList_noAdvWrapper__kPLJQ",se="AdvertsList_title__IZmJH";function te(e){var s=e.items,t=(0,n.Z)().favorites;return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("ul",{className:Q,children:s.length>0?s.map((function(e){var s=t.some((function(s){return s.id===e.id}));return(0,L.jsx)(X,{item:e,isFavorite:s},e.id)})):(0,L.jsxs)("div",{className:ee,children:[(0,L.jsx)("p",{className:se,children:"There's no car yet..."}),(0,L.jsx)("img",{src:D,alt:"sad cat",className:$})]})})})}},6410:function(e,s,t){t.d(s,{Z:function(){return c}});var n=t(9434),i=function(e){return e.adverts.adverts},a=function(e){return e.adverts.favorites},r=function(e){return e.adverts.isLoading},l=function(e){return e.adverts.filterCriteria};function c(){return{adverts:(0,n.v9)(i),favorites:(0,n.v9)(a),isLoading:(0,n.v9)(r),filterCriteria:(0,n.v9)(l)}}},2715:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var n=t(8735),i=t(6410),a="FavouritesPage_container__7EWMb",r=t(184);function l(){var e=(0,i.Z)().favorites;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)(n.Z,{items:e})})}}}]);
//# sourceMappingURL=923.1d14df74.chunk.js.map