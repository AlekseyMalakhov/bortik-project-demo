(this["webpackJsonpbortik-project"]=this["webpackJsonpbortik-project"]||[]).push([[0],{257:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(60),a=n.n(c),o=n(3),l={primaryColor:"#3d5afe",primaryLightColor:"#8187ff",primaryDarkColor:"#0031ca",primaryTextColor:"#ffffff",greyBackground:"#E1E2E1",lightGreyBackground:"#F5F5F6"},s=n(8),d=n(11),u=n(82),j=n.n(u),b=n(115),p=n(47),x=n(116),m="https://bortik-project.herokuapp.com/api",f=n.n(x).a.create({baseURL:m}),h={getItems:function(){return f.post("/getItems").then((function(e){if(200===e.status)return e.data;console.log("error")})).catch((function(e){console.log(e.message)}))},sendCart:function(e){return f.post("/sendCart",e).then((function(e){if(200===e.status)return e.data;console.log("error")})).catch((function(e){console.log(e.message)}))}},O=Object(p.b)("manage/getItems",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getItems();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(p.c)({name:"manage",initialState:{sideBarOpened:!0,screenWidth:0,mobileScreen:!0,items:null,categories:[],loading:!0,selectedCategory:null,cart:[],priceType:null,cartSum:0},reducers:{changeSideBarOpened:function(e,t){e.sideBarOpened=t.payload},setScreenWidth:function(e,t){e.screenWidth=t.payload},setMobileScreen:function(e,t){e.mobileScreen=t.payload},setItems:function(e,t){e.items=t.payload},setCategories:function(e,t){e.categories=t.payload},setSelectedCategory:function(e,t){e.selectedCategory=t.payload},addItemToCart:function(e,t){var n=Object(d.a)(e.cart),r=n.findIndex((function(e){return e.id===t.payload.id}));-1!==r?n[r]=t.payload:n.push(t.payload),e.cart=n},removeItemFromCart:function(e,t){var n=Object(d.a)(e.cart);if(-1!==n.findIndex((function(e){return e.id===t.payload.id}))){var r=n.filter((function(e){return e.id!==t.payload.id}));e.cart=r}},setPriceType:function(e,t){e.priceType=t.payload},setCartSum:function(e,t){e.cartSum=t.payload}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0})).addCase(O.fulfilled,(function(e,t){e.loading=!1,t.payload&&(e.items=t.payload.items,e.categories=t.payload.categories,e.selectedCategory=t.payload.categories[0].name),console.log(t.payload)}))}}),v=g.actions,y=v.changeSideBarOpened,w=v.setScreenWidth,C=v.setMobileScreen,S=v.setSelectedCategory,k=v.addItemToCart,B=v.removeItemFromCart,z=v.setPriceType,I=v.setCartSum,T=g.reducer,F=n(1),A=o.a.div({marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",width:"42px",height:"42px",cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"20px"}});var E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.manage.sideBarOpened}));return Object(F.jsx)(A,{onClick:function(){e(y(!t))},children:Object(F.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",viewBox:"0 0 16 16",children:Object(F.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})})},L=n(6),M=o.a.div({marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",width:"42px",height:"42px",cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"20px"}});var W=function(){var e=Object(L.f)();return Object(F.jsx)(M,{onClick:function(){return e("/")},children:Object(F.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",viewBox:"0 0 16 16",children:Object(F.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})})},R=o.a.div({display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:l.primaryColor,height:"50px"}),_=o.a.div({color:"white",marginRight:"20px",fontSize:"20px"});var D=function(){var e=Object(L.e)();return Object(F.jsxs)(R,{children:["/"===e.pathname?Object(F.jsx)(E,{}):Object(F.jsx)(W,{}),Object(F.jsx)(_,{children:"Bortik Project"})]})},H=Object(p.a)({reducer:{manage:T}}),V=function(){var e=function(){return window.screen.width<window.innerWidth?window.screen.width:window.innerWidth},t=e();H.dispatch(w(t));var n=function(){e()<650?H.dispatch(C(!0)):H.dispatch(C(!1))};n(),window.onresize=function(){n();var t=e();H.dispatch(w(t))}},q=n(5),G=o.a.div({height:"14px",width:"14px",borderRadius:"7px",backgroundColor:"yellow",position:"absolute",top:"5px",right:"0px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10px"});var P=function(e){var t=e.numberInCart;return Object(F.jsx)(G,{children:t})},J=o.a.div((function(e){var t=e.selected;return{position:"relative",width:"100%",padding:"10px 10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",backgroundColor:t?"rgba(0, 0, 0, 0.2)":"",borderRadius:t?"5px":"","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"5px"}}})),K=o.a.div({textAlign:"center",fontSize:"14px",fontWeight:"500"});var N=function(e){var t=e.category,n=Object(s.b)(),i=(Object(s.c)((function(e){return e.manage.mobileScreen})),Object(s.c)((function(e){return e.manage.selectedCategory}))),c=Object(s.c)((function(e){return e.manage.cart})),a=Object(r.useState)(0),o=Object(q.a)(a,2),l=o[0],d=o[1];return Object(r.useEffect)((function(){var e=c.filter((function(e){return e.category===t.name}));d(e.length)}),[c]),Object(F.jsxs)(J,{selected:t.name===i,onClick:function(){return e=t.name,void n(S(e));var e},children:[Object(F.jsx)(K,{children:t.name}),l>0?Object(F.jsx)(P,{numberInCart:l}):null]})},X=o.a.div((function(e){return{backgroundColor:l.greyBackground,width:"170px",minWidth:"170px",marginLeft:e.sideBarOpened?"0px":"-170px",transition:"margin-left 0.5s",overflow:"auto",overflowX:"hidden"}})),U=o.a.div({marginTop:"10px",textAlign:"center",fontSize:"20px",fontWeight:"500"}),Q=o.a.div({margin:"10px 10px",display:"flex",flexDirection:"column",alignItems:"center"});var Y,Z=function(){var e=Object(s.c)((function(e){return e.manage.sideBarOpened})),t=Object(s.c)((function(e){return e.manage.mobileScreen})),n=Object(s.c)((function(e){return e.manage.categories}));return Object(F.jsxs)(X,{sideBarOpened:e,mobileScreen:t,children:[Object(F.jsx)(U,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(F.jsx)(Q,{children:n?n.map((function(e){return Object(F.jsx)(N,{category:e},e.id)})):null})]})},$=n(20),ee=n(2),te=n(19),ne=Object(o.a)(te.a)(Y||(Y=Object($.a)(["\n    width: 36px;\n    height: 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    &:focus {\n        outline: none;\n        box-shadow: none;\n    }\n"])));var re,ie=function(e){var t=e.icon,n=e.onClick;return"plus"===t?Object(F.jsx)(ne,{variant:"primary",onClick:n,children:Object(F.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 16 16",children:[Object(F.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(F.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]})}):"minus"===t?Object(F.jsx)(ne,{variant:"primary",onClick:n,children:Object(F.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 16 16",children:[Object(F.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(F.jsx)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})]})}):void 0},ce=n(18),ae=o.a.div({display:"flex",justifyContent:"center",marginRight:"10px",marginLeft:"10px"}),oe=Object(o.a)(ce.a.Control)(re||(re=Object($.a)(["\n    width: 70px;\n    margin: auto 10px;\n"])));var le=function(e){var t=e.item,n=e.inCart,i=Object(s.b)(),c=Object(r.useState)(0),a=Object(q.a)(c,2),o=a[0],l=a[1];Object(r.useEffect)((function(){n&&l(n.number)}),[n]);var d=function(e){var n=Object(ee.a)(Object(ee.a)({},t),{},{number:e});i(k(n))};return Object(F.jsxs)(ae,{children:[Object(F.jsx)(ie,{icon:"minus",onClick:function(){return o-1>0?(l(o-1),void d(o-1)):o-1===0?(l(0),void i(B(t))):void 0}}),Object(F.jsx)(oe,{onChange:function(e){var n=function(e){var t=e.replace(/[^\d]/g,"");return Number.parseInt(t)}(e.target.value);if(n>=0&&(l(n),d(n)),""!==e.target.value)return 0===n?(l(0),void i(B(t))):void 0;l("")},value:o,onFocus:function(e){return e.target.select()},onKeyDown:function(e){"Enter"===e.key&&e.target.blur()},inputMode:"numeric",onBlur:function(){""===o&&(l(0),i(B(t)))}}),Object(F.jsx)(ie,{icon:"plus",onClick:function(){l(o+1),d(o+1)}})]})},se=n(117),de=n(118),ue=n(39),je=o.a.div({position:"absolute",right:"20px"});var be,pe,xe,me,fe=function(){return Object(F.jsx)(je,{children:Object(F.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#54cc91",viewBox:"0 0 16 16",children:Object(F.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})})},he=Object(o.a)(se.a)(be||(be=Object($.a)(["\n    position: relative;\n    background-color: white;\n    margin: 10px 10px;\n    padding: 10px 10px;\n    max-width: 1200px;\n"]))),Oe=Object(o.a)(de.a)(pe||(pe=Object($.a)(["\n    justify-content: center;\n    align-items: center;\n"]))),ge=Object(o.a)(ue.a)(xe||(xe=Object($.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    padding: 10px 10px;\n    text-align: center;\n"]))),ve=Object(o.a)(ue.a)(me||(me=Object($.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    padding: 10px 10px;\n    text-align: center;\n    min-width: 250px;\n"]))),ye=o.a.div((function(e){var t=e.sideBarOpened,n=e.mobileScreen;return{display:t&&n?"none":"flex",justifyContent:"center"}})),we=o.a.div({backgroundColor:"#69F0AE",padding:"2px 5px",borderRadius:"3px"}),Ce=o.a.div({fontSize:"12px"});var Se,ke=function(e){var t=e.item,n=Object(s.b)(),i=Object(s.c)((function(e){return e.manage.sideBarOpened})),c=Object(s.c)((function(e){return e.manage.mobileScreen})),a=Object(s.c)((function(e){return e.manage.cart})),o=Object(r.useState)(!1),l=Object(q.a)(o,2),d=l[0],u=l[1];return Object(r.useEffect)((function(){if(a.length>0){var e=a.find((function(e){return e.id===t.id}));u(e||!1)}else u(!1)}),[a]),Object(F.jsxs)(he,{onClick:function(){c&&n(y(!1))},children:[d?Object(F.jsx)(fe,{}):null,Object(F.jsxs)(Oe,{children:[t.img?Object(F.jsx)(ue.a,{xs:"auto",children:Object(F.jsx)("img",{src:t.img,alt:"",width:"100",height:"100"})}):null,Object(F.jsx)(ge,{style:{fontWeight:"500"},xs:12,sm:12,md:5,children:t.title}),Object(F.jsxs)(ve,{sm:12,md:3,children:[Object(F.jsxs)(we,{children:["\u0426\u0435\u043d\u0430 \u0441 \u041d\u0414\u0421 ",t.price," \u0440\u0443\u0431"]}),i&&c?null:Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{children:["\u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u041d\u0414\u0421 ",t.priceopt," \u0440\u0443\u0431"]}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{children:["\u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u041d\u0414\u0421 ",t.pricemegaopt," \u0440\u0443\u0431*"]}),Object(F.jsx)(Ce,{children:"*(\u043f\u0440\u0438 \u043e\u0431\u0449\u0435\u0439 \u0441\u0443\u043c\u043c\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043e\u0442 250 \u0440\u0443\u0431)"})]})]})]}),Object(F.jsx)(ye,{sideBarOpened:i,mobileScreen:c,children:Object(F.jsx)(ge,{xs:"auto",sm:2,children:Object(F.jsx)(le,{item:t,inCart:d})})})]})]})},Be=o.a.div((function(e){e.sideBarOpened,e.mobileScreen;return{display:"flex",width:"100%",overflow:"auto",overflowX:"hidden",flexDirection:"column",alignItems:"center",backgroundColor:l.lightGreyBackground,padding:"10px 10px"}})),ze=o.a.div({margin:"30px 10px"}),Ie=Object(o.a)(te.a)(Se||(Se=Object($.a)(["\n    margin-top: 20px;\n    margin-bottom: 50px;\n    &:focus {\n        outline: none;\n        box-shadow: none;\n    }\n"])));var Te=function(){var e=Object(r.useState)(20),t=Object(q.a)(e,2),n=t[0],i=t[1],c=Object(s.c)((function(e){return e.manage.items})),a=Object(s.c)((function(e){return e.manage.sideBarOpened})),o=Object(s.c)((function(e){return e.manage.mobileScreen})),l=Object(s.c)((function(e){return e.manage.selectedCategory}));return Object(r.useEffect)((function(){i(20)}),[c,l]),c&&l?Object(F.jsxs)(Be,{sideBarOpened:a,mobileScreen:o,children:[c[l].length>0?c[l].map((function(e,t){return t<=n?Object(F.jsx)(ke,{item:e},e.id):null})):Object(F.jsx)(ze,{children:"\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),n<c[l].length?Object(F.jsx)(Ie,{variant:"primary",size:o?"sm":"",onClick:function(){i(n+20)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"}):null]}):null},Fe=n(71),Ae=n(119),Ee=o.a.div({}),Le=["\u0441 \u041d\u0414\u0421","\u0431\u0435\u0437 \u041d\u0414\u0421","\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"];var Me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.manage.priceType}));return Object(r.useEffect)((function(){t||e(z(Le[0]))}),[t]),Object(F.jsx)(Ee,{children:Object(F.jsx)(Ae.a,{id:"dropdown",drop:"up",variant:"outline-secondary",title:t||"",size:"sm",children:Le.map((function(t){return Object(F.jsx)(Fe.a.Item,{eventKey:t,onClick:function(){return function(t){e(z(t))}(t)},children:t},t)}))})})},We=o.a.div((function(e){var t=e.sideBarOpened,n=e.mobileScreen;return{position:"absolute",bottom:"0",height:n?"40px":"80px",backgroundColor:"#ededed",left:n?"0":t?"170px":"0",transition:"left 0.5s",right:"0",display:"flex",justifyContent:"space-between",alignItems:"center"}})),Re=Object(o.a)(te.a)({"&:focus":{outline:"none",boxShadow:"none"}}),_e=o.a.div((function(e){return{textAlign:"center",fontSize:e.mobileScreen?"18px":"25px",fontWeight:"600",marginRight:"30px",marginLeft:"10px"}})),De=o.a.div({display:"flex",justifyContent:"center"});var He=function(){var e=Object(s.b)(),t=Object(L.f)(),n=Object(s.c)((function(e){return e.manage.sideBarOpened})),i=Object(s.c)((function(e){return e.manage.mobileScreen})),c=Object(s.c)((function(e){return e.manage.priceType})),a=Object(s.c)((function(e){return e.manage.cart})),o=Object(s.c)((function(e){return e.manage.cartSum}));return Object(r.useEffect)((function(){if(a.length>0){var t=function(e){for(var t=0,n=0;n<e.length;n++){var r=void 0;"\u0441 \u041d\u0414\u0421"===c&&(r=e[n].price),"\u0431\u0435\u0437 \u041d\u0414\u0421"===c&&(r=e[n].priceopt),"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===c&&(r=e[n].pricemegaopt),t+=r*e[n].number}return t}(a);e(I(t))}0===a.length&&e(I(0))}),[a,c]),Object(F.jsxs)(We,{sideBarOpened:n,mobileScreen:i,children:[Object(F.jsx)(Re,{disabled:0===a.length,variant:"primary",size:i?"sm":"",style:{marginLeft:i?"15px":"50px"},onClick:function(){return t("/cart")},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"}),Object(F.jsxs)(De,{children:[Object(F.jsx)(Me,{}),Object(F.jsxs)(_e,{mobileScreen:i,children:[o.toFixed(2)," \u0440\u0443\u0431"]})]})]})},Ve=o.a.div({position:"absolute",top:"50px",bottom:"0px",display:"flex",width:"100%"}),qe=function(){return Object(F.jsxs)(i.a.Fragment,{children:[Object(F.jsxs)(Ve,{children:[Object(F.jsx)(Z,{}),Object(F.jsx)(Te,{})]}),Object(F.jsx)(He,{})]})},Ge=n(122);var Pe=function(e){var t=e.item,n=e.priceType;return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:t.title}),Object(F.jsx)("td",{children:t.number}),Object(F.jsx)("td",{children:"\u0441 \u041d\u0414\u0421"===n?t.price:"\u0431\u0435\u0437 \u041d\u0414\u0421"===n?t.priceopt:"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n?t.pricemegaopt:void 0})]})},Je=o.a.div({}),Ke=o.a.div({textAlign:"center",fontSize:"20px",fontWeight:"500"});var Ne=function(e){var t=e.cart,n=e.priceType,r=e.sum;return t.length>0?Object(F.jsxs)(Je,{children:[Object(F.jsxs)(Ge.a,{striped:!0,bordered:!0,hover:!0,children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(F.jsx)("th",{children:"\u041a\u043e\u043b."}),Object(F.jsx)("th",{children:"\u0426\u0435\u043d\u0430"})]})}),Object(F.jsxs)("tbody",{children:[t.map((function(e){return Object(F.jsx)(Pe,{item:e,priceType:n},e.id)})),Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{colSpan:"2",children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430"}),Object(F.jsx)("th",{children:r.toFixed(2)})]})]})]}),"\u0426\u0435\u043d\u0430: ",n]}):Object(F.jsx)(Ke,{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})},Xe=n(38),Ue=n(50),Qe=n(4),Ye=["name","label"];var Ze=function(e){var t=e.name,n=e.label,r=Object(Qe.a)(e,Ye),i=Object(Xe.b)(),c=i.setFieldTouched,a=i.setFieldValue,o=i.errors,l=i.touched,s=i.values;return Object(F.jsxs)(ce.a.Group,{className:"mb-3",controlId:"cart_form_"+[t],children:[Object(F.jsx)(ce.a.Label,{children:n}),Object(F.jsx)(ce.a.Control,Object(ee.a)({type:"text",name:t,value:s[t],onChange:function(e){return a(t,e.target.value)},onBlur:function(){return c(t)},isValid:l[t]&&!o[t],isInvalid:l[t]?o[t]:null},r)),Object(F.jsx)(ce.a.Control.Feedback,{type:"invalid",children:o[t]})]})},$e=["name","label","value"];var et=function(e){var t=e.name,n=e.label,r=e.value,i=(Object(Qe.a)(e,$e),Object(Xe.b)()),c=i.setFieldValue,a=i.values;return Object(F.jsx)(ce.a.Check,{name:t,label:n,type:"radio",id:"payment_"+r,value:r,checked:a[t]===r,onChange:function(e){return c(t,r)}})},tt=o.a.div({marginTop:"30px"}),nt=o.a.div({marginTop:"30px"}),rt=o.a.div({display:"flex",justifyContent:"space-evenly",marginTop:"30px"}),it=[{id:1,label:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)",value:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)"},{id:2,label:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438",value:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438"},{id:3,label:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0435)",value:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0435)"},{id:4,label:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u043e \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c",value:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u043e \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c"}],ct=[{id:1,label:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443",value:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443"},{id:2,label:"\u043f\u043e \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438",value:"\u043f\u043e \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438"},{id:3,label:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437",value:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"}],at=Ue.a().shape({name_user:Ue.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f"),email:Ue.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email").email("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email"),phone:Ue.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d")});var ot=function(e){var t=e.cart,n=e.priceType,r=e.sum,i=Object(L.f)(),c=function(e){var t;return"\u0441 \u041d\u0414\u0421"===n&&(t=e.price*e.number),"\u0431\u0435\u0437 \u041d\u0414\u0421"===n&&(t=e.priceopt*e.number),"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n&&(t=e.pricemegaopt*e.number),t.toFixed(2)},a=function(e){return"\u0441 \u041d\u0414\u0421"===n?e.price:"\u0431\u0435\u0437 \u041d\u0414\u0421"===n?e.priceopt:"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n?e.pricemegaopt:void 0},o=function(){i("/")};return Object(F.jsx)(tt,{children:Object(F.jsx)(Xe.a,{initialValues:{name_user:"test",email:"test@test.com",phone:"+375111222333",payment_method:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)",delivery:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443",address:"",comment:""},validationSchema:at,onSubmit:function(e){console.log(e),console.log(t);for(var i=[],o=0;o<t.length;o++){var l={title:t[o].title,article:t[o].article,number:t[o].number,price:a(t[o]),sum:c(t[o])};i.push(l)}var s={cart:i,customer:e,priceType:n,sum:r.toFixed(2)};console.log(s),h.sendCart(s).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:function(e){var t=e.handleSubmit;return Object(F.jsxs)(ce.a,{noValidate:!0,onSubmit:t,children:[Object(F.jsx)(Ze,{name:"name_user",label:"\u0424\u0418\u041e*"}),Object(F.jsx)(Ze,{name:"phone",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*",inputMode:"tel",placeholder:"+375xxxxxxxxx"}),Object(F.jsx)(Ze,{name:"email",label:"Email*",inputMode:"email"}),Object(F.jsx)(Ze,{name:"address",label:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(F.jsx)(Ze,{name:"comment",label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",as:"textarea"}),Object(F.jsxs)(nt,{children:[Object(F.jsx)(ce.a.Label,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b:"}),it.map((function(e){return Object(F.jsx)(et,{name:"payment_method",label:e.label,value:e.value},e.id)}))]}),Object(F.jsxs)(nt,{children:[Object(F.jsx)(ce.a.Label,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430:"}),ct.map((function(e){return Object(F.jsx)(et,{name:"delivery",label:e.label,value:e.value},e.id)}))]}),Object(F.jsxs)(rt,{children:[Object(F.jsx)(te.a,{variant:"outline-primary",onClick:o,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(F.jsx)(te.a,{variant:"primary",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}})})},lt=o.a.div({textAlign:"center",margin:"20px 10px",fontSize:"20px",fontWeight:"500"}),st=o.a.div({margin:"10px 10px"});var dt=function(){var e=Object(s.c)((function(e){return e.manage.cart})),t=Object(s.c)((function(e){return e.manage.priceType})),n=Object(s.c)((function(e){return e.manage.cartSum}));return Object(F.jsxs)(st,{children:[Object(F.jsx)(lt,{children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(F.jsx)(Ne,{cart:e,priceType:t,sum:n}),Object(F.jsx)(ot,{cart:e,priceType:t,sum:n})]})},ut=n(32),jt=o.a.div({display:"flex",flexDirection:"column",alignItems:"center",fontSize:"20px",marginTop:"30px"});var bt=function(){return Object(F.jsxs)(jt,{children:["\u0410\u0439 \u0430\u0439 \u0430\u0439! \u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u0443\u0442\u0438!",Object(F.jsx)(ut.b,{to:"/",children:" \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},pt=o.a.div({height:"100%"});var xt=function(){var e=Object(s.b)();return Object(r.useEffect)((function(){V(),e(O())}),[]),Object(F.jsxs)(pt,{children:[Object(F.jsx)(D,{}),Object(F.jsxs)(L.c,{children:[Object(F.jsx)(L.a,{path:"/",element:Object(F.jsx)(qe,{})}),Object(F.jsx)(L.a,{path:"/cart",element:Object(F.jsx)(dt,{})}),Object(F.jsx)(L.a,{path:"*",element:Object(F.jsx)(bt,{})})]})]})};a.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(s.a,{store:H,children:Object(F.jsx)(ut.a,{children:Object(F.jsx)(xt,{})})})}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.0c8be845.chunk.js.map