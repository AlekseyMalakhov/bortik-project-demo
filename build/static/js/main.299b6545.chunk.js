(this["webpackJsonpbortik-project"]=this["webpackJsonpbortik-project"]||[]).push([[0],{277:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(27),a=n.n(c),o=n(4),l={primaryColor:"#3d5afe",primaryLightColor:"#8187ff",primaryDarkColor:"#0031ca",primaryTextColor:"#ffffff",greyBackground:"#E1E2E1",lightGreyBackground:"#F5F5F6"},s=n(8),d=n(14),u=n(102),j=n.n(u),b=n(135),p=n(67),x=n(136),h="https://bortik-project.herokuapp.com/api",m=n.n(x).a.create({baseURL:h}),f={getItems:function(){return m.post("/getItems").then((function(e){if(200===e.status)return e.data;console.log("error")})).catch((function(e){console.log(e.message)}))},sendCart:function(e){return m.post("/sendCart",e).then((function(e){return e})).catch((function(e){console.log(e.message)}))}},O=Object(p.b)("manage/getItems",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getItems();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(p.c)({name:"manage",initialState:{sideBarOpened:!0,screenWidth:0,mobileScreen:!0,items:null,categories:[],loading:!0,selectedCategory:null,cart:[],priceType:null,cartSum:0},reducers:{changeSideBarOpened:function(e,t){e.sideBarOpened=t.payload},setScreenWidth:function(e,t){e.screenWidth=t.payload},setMobileScreen:function(e,t){e.mobileScreen=t.payload},setItems:function(e,t){e.items=t.payload},setCategories:function(e,t){e.categories=t.payload},setSelectedCategory:function(e,t){e.selectedCategory=t.payload},addItemToCart:function(e,t){var n=Object(d.a)(e.cart),r=n.findIndex((function(e){return e.id===t.payload.id}));-1!==r?n[r]=t.payload:n.push(t.payload),e.cart=n},removeItemFromCart:function(e,t){var n=Object(d.a)(e.cart);if(-1!==n.findIndex((function(e){return e.id===t.payload.id}))){var r=n.filter((function(e){return e.id!==t.payload.id}));e.cart=r}},cleanCart:function(e){e.cart=[],e.cartSum=0},setPriceType:function(e,t){e.priceType=t.payload},setCartSum:function(e,t){e.cartSum=t.payload},setLoading:function(e,t){e.loading=t.payload}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0})).addCase(O.fulfilled,(function(e,t){e.loading=!1,t.payload&&(e.items=t.payload.items,e.categories=t.payload.categories,e.selectedCategory=t.payload.categories[0].name),console.log(t.payload)}))}}),v=g.actions,y=v.changeSideBarOpened,w=v.setScreenWidth,C=v.setMobileScreen,k=v.setSelectedCategory,S=v.addItemToCart,B=v.removeItemFromCart,z=v.setPriceType,I=v.setCartSum,T=v.setLoading,A=v.cleanCart,F=g.reducer,E=n(1),L=o.a.div({marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",width:"42px",height:"42px",cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"20px"}});var M=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.manage.sideBarOpened}));return Object(E.jsx)(L,{onClick:function(){e(y(!t))},children:Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",viewBox:"0 0 16 16",children:Object(E.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})})},R=n(9),W=o.a.div({marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",width:"42px",height:"42px",cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"20px"}});var D=function(){var e=Object(R.f)();return Object(E.jsx)(W,{onClick:function(){return e("/")},children:Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",viewBox:"0 0 16 16",children:Object(E.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})})},H=o.a.div({display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:l.primaryColor,height:"50px"}),_=o.a.div({color:"white",marginRight:"20px",fontSize:"20px"});var V=function(){var e=Object(R.e)();return Object(E.jsxs)(H,{children:["/"===e.pathname?Object(E.jsx)(M,{}):Object(E.jsx)(D,{}),Object(E.jsx)(_,{children:"Bortik Project"})]})},K=Object(p.a)({reducer:{manage:F}}),q=function(){var e=function(){return window.screen.width<window.innerWidth?window.screen.width:window.innerWidth},t=e();K.dispatch(w(t));var n=function(){e()<650?K.dispatch(C(!0)):K.dispatch(C(!1))};n(),window.onresize=function(){n();var t=e();K.dispatch(w(t))}},G=n(5),N=o.a.div({height:"14px",width:"14px",borderRadius:"7px",backgroundColor:"yellow",position:"absolute",top:"5px",right:"0px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10px"});var P=function(e){var t=e.numberInCart;return Object(E.jsx)(N,{children:t})},J=o.a.div((function(e){var t=e.selected;return{position:"relative",width:"100%",padding:"10px 10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",backgroundColor:t?"rgba(0, 0, 0, 0.2)":"",borderRadius:t?"5px":"","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"5px"}}})),X=o.a.div({textAlign:"center",fontSize:"14px",fontWeight:"500"});var U=function(e){var t=e.category,n=Object(s.b)(),i=(Object(s.c)((function(e){return e.manage.mobileScreen})),Object(s.c)((function(e){return e.manage.selectedCategory}))),c=Object(s.c)((function(e){return e.manage.cart})),a=Object(r.useState)(0),o=Object(G.a)(a,2),l=o[0],d=o[1];return Object(r.useEffect)((function(){var e=c.filter((function(e){return e.category===t.name}));d(e.length)}),[c]),Object(E.jsxs)(J,{selected:t.name===i,onClick:function(){return e=t.name,void n(k(e));var e},children:[Object(E.jsx)(X,{children:t.name}),l>0?Object(E.jsx)(P,{numberInCart:l}):null]})},Y=o.a.div((function(e){return{backgroundColor:l.greyBackground,width:"170px",minWidth:"170px",marginLeft:e.sideBarOpened?"0px":"-170px",transition:"margin-left 0.5s",overflow:"auto",overflowX:"hidden"}})),Q=o.a.div({marginTop:"10px",textAlign:"center",fontSize:"20px",fontWeight:"500"}),Z=o.a.div({margin:"10px 10px",display:"flex",flexDirection:"column",alignItems:"center"});var $,ee=function(){var e=Object(s.c)((function(e){return e.manage.sideBarOpened})),t=Object(s.c)((function(e){return e.manage.categories}));return Object(E.jsxs)(Y,{sideBarOpened:e,children:[Object(E.jsx)(Q,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(E.jsx)(Z,{children:t?t.map((function(e){return Object(E.jsx)(U,{category:e},e.id)})):null})]})},te=n(29),ne=n(2),re=n(22),ie=Object(o.a)(re.a)($||($=Object(te.a)(["\n    width: 36px;\n    height: 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    &:focus {\n        outline: none;\n        box-shadow: none;\n    }\n"])));var ce,ae=function(e){var t=e.icon,n=e.onClick;return"plus"===t?Object(E.jsx)(ie,{variant:"primary",onClick:n,children:Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 16 16",children:[Object(E.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(E.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]})}):"minus"===t?Object(E.jsx)(ie,{variant:"primary",onClick:n,children:Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 16 16",children:[Object(E.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(E.jsx)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})]})}):void 0},oe=n(26),le=o.a.div({display:"flex",justifyContent:"center",marginRight:"10px",marginLeft:"10px"}),se=Object(o.a)(oe.a.Control)(ce||(ce=Object(te.a)(["\n    width: 70px;\n    margin: auto 10px;\n"])));var de=function(e){var t=e.item,n=e.inCart,i=Object(s.b)(),c=Object(r.useState)(0),a=Object(G.a)(c,2),o=a[0],l=a[1];Object(r.useEffect)((function(){n&&l(n.number)}),[n]);var d=function(e){var n=Object(ne.a)(Object(ne.a)({},t),{},{number:e});i(S(n))};return Object(E.jsxs)(le,{children:[Object(E.jsx)(ae,{icon:"minus",onClick:function(){return o-1>0?(l(o-1),void d(o-1)):o-1===0?(l(0),void i(B(t))):void 0}}),Object(E.jsx)(se,{onChange:function(e){var n=function(e){var t=e.replace(/[^\d]/g,"");return Number.parseInt(t)}(e.target.value);if(n>=0&&(l(n),d(n)),""!==e.target.value)return 0===n?(l(0),void i(B(t))):void 0;l("")},value:o,onFocus:function(e){return e.target.select()},onKeyDown:function(e){"Enter"===e.key&&e.target.blur()},inputMode:"numeric",onBlur:function(){""===o&&(l(0),i(B(t)))}}),Object(E.jsx)(ae,{icon:"plus",onClick:function(){l(o+1),d(o+1)}})]})},ue=n(137),je=n(138),be=n(58),pe=o.a.div({position:"absolute",right:"20px"});var xe,he,me,fe,Oe=function(){return Object(E.jsx)(pe,{children:Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#54cc91",viewBox:"0 0 16 16",children:Object(E.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})})},ge=Object(o.a)(ue.a)(xe||(xe=Object(te.a)(["\n    position: relative;\n    background-color: white;\n    margin: 10px 10px;\n    padding: 10px 10px;\n    max-width: 1200px;\n"]))),ve=Object(o.a)(je.a)(he||(he=Object(te.a)(["\n    justify-content: center;\n    align-items: center;\n"]))),ye=Object(o.a)(be.a)(me||(me=Object(te.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    padding: 10px 10px;\n    text-align: center;\n"]))),we=Object(o.a)(be.a)(fe||(fe=Object(te.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    padding: 10px 10px;\n    text-align: center;\n    min-width: 250px;\n"]))),Ce=o.a.div((function(e){var t=e.sideBarOpened,n=e.mobileScreen;return{display:t&&n?"none":"flex",justifyContent:"center"}})),ke=o.a.div({backgroundColor:"#69F0AE",padding:"2px 5px",borderRadius:"3px"}),Se=o.a.div({fontSize:"12px"});var Be,ze=function(e){var t=e.item,n=Object(s.b)(),i=Object(s.c)((function(e){return e.manage.sideBarOpened})),c=Object(s.c)((function(e){return e.manage.mobileScreen})),a=Object(s.c)((function(e){return e.manage.cart})),o=Object(r.useState)(!1),l=Object(G.a)(o,2),d=l[0],u=l[1];return Object(r.useEffect)((function(){if(a.length>0){var e=a.find((function(e){return e.id===t.id}));u(e||!1)}else u(!1)}),[a]),Object(E.jsxs)(ge,{onClick:function(){c&&n(y(!1))},children:[d?Object(E.jsx)(Oe,{}):null,Object(E.jsxs)(ve,{children:[t.img?Object(E.jsx)(be.a,{xs:"auto",children:Object(E.jsx)("img",{src:t.img,alt:"",width:"100",height:"100"})}):null,Object(E.jsx)(ye,{style:{fontWeight:"500"},xs:12,sm:12,md:5,children:t.title}),Object(E.jsxs)(we,{sm:12,md:3,children:[Object(E.jsxs)(ke,{children:["\u0426\u0435\u043d\u0430 \u0441 \u041d\u0414\u0421 ",t.price," \u0440\u0443\u0431"]}),i&&c?null:Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:["\u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u041d\u0414\u0421 ",t.priceopt," \u0440\u0443\u0431"]}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:["\u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u041d\u0414\u0421 ",t.pricemegaopt," \u0440\u0443\u0431*"]}),Object(E.jsx)(Se,{children:"*(\u043f\u0440\u0438 \u043e\u0431\u0449\u0435\u0439 \u0441\u0443\u043c\u043c\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043e\u0442 250 \u0440\u0443\u0431)"})]})]})]}),Object(E.jsx)(Ce,{sideBarOpened:i,mobileScreen:c,children:Object(E.jsx)(ye,{xs:"auto",sm:2,children:Object(E.jsx)(de,{item:t,inCart:d})})})]})]})},Ie=o.a.div((function(e){e.sideBarOpened;var t=e.mobileScreen;return{display:"flex",width:"100%",marginBottom:t?"40px":"80px",overflow:"auto",overflowX:"hidden",flexDirection:"column",alignItems:"center",backgroundColor:l.lightGreyBackground,padding:"10px 10px"}})),Te=o.a.div({margin:"30px 10px"}),Ae=Object(o.a)(re.a)(Be||(Be=Object(te.a)(["\n    margin-top: 20px;\n    margin-bottom: 20px;\n    &:focus {\n        outline: none;\n        box-shadow: none;\n    }\n"])));var Fe=function(){var e=Object(r.useState)(20),t=Object(G.a)(e,2),n=t[0],i=t[1],c=Object(s.c)((function(e){return e.manage.items})),a=Object(s.c)((function(e){return e.manage.sideBarOpened})),o=Object(s.c)((function(e){return e.manage.selectedCategory})),l=Object(s.c)((function(e){return e.manage.mobileScreen}));return Object(r.useEffect)((function(){i(20)}),[c,o]),c&&o?Object(E.jsxs)(Ie,{sideBarOpened:a,mobileScreen:l,children:[c[o].length>0?c[o].map((function(e,t){return t<=n?Object(E.jsx)(ze,{item:e},e.id):null})):Object(E.jsx)(Te,{children:"\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),n<c[o].length?Object(E.jsx)(Ae,{variant:"primary",size:l?"sm":"",onClick:function(){i(n+20)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"}):null]}):null},Ee=n(92),Le=n(139),Me=o.a.div({}),Re=["\u0441 \u041d\u0414\u0421","\u0431\u0435\u0437 \u041d\u0414\u0421","\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"];var We=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.manage.priceType}));return Object(r.useEffect)((function(){t||e(z(Re[0]))}),[t]),Object(E.jsx)(Me,{children:Object(E.jsx)(Le.a,{id:"dropdown",drop:"up",variant:"outline-secondary",title:t||"",size:"sm",children:Re.map((function(t){return Object(E.jsx)(Ee.a.Item,{eventKey:t,onClick:function(){return function(t){e(z(t))}(t)},children:t},t)}))})})},De=o.a.div((function(e){var t=e.sideBarOpened,n=e.mobileScreen;return{position:"absolute",bottom:"0",height:n?"40px":"80px",backgroundColor:"#ededed",left:n?"0":t?"170px":"0",transition:"left 0.5s",right:"0",display:"flex",justifyContent:"space-between",alignItems:"center"}})),He=Object(o.a)(re.a)({"&:focus":{outline:"none",boxShadow:"none"}}),_e=o.a.div((function(e){return{textAlign:"center",fontSize:e.mobileScreen?"18px":"25px",fontWeight:"600",marginRight:"30px",marginLeft:"10px"}})),Ve=o.a.div({display:"flex",justifyContent:"center"});var Ke=function(){var e=Object(s.b)(),t=Object(R.f)(),n=Object(s.c)((function(e){return e.manage.sideBarOpened})),i=Object(s.c)((function(e){return e.manage.mobileScreen})),c=Object(s.c)((function(e){return e.manage.priceType})),a=Object(s.c)((function(e){return e.manage.cart})),o=Object(s.c)((function(e){return e.manage.cartSum}));return Object(r.useEffect)((function(){if(a.length>0){var t=function(e){for(var t=0,n=0;n<e.length;n++){var r=void 0;"\u0441 \u041d\u0414\u0421"===c&&(r=e[n].price),"\u0431\u0435\u0437 \u041d\u0414\u0421"===c&&(r=e[n].priceopt),"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===c&&(r=e[n].pricemegaopt),t+=r*e[n].number}return t}(a);e(I(t))}0===a.length&&e(I(0))}),[a,c]),Object(E.jsxs)(De,{sideBarOpened:n,mobileScreen:i,children:[Object(E.jsx)(He,{disabled:0===a.length,variant:"primary",size:i?"sm":"",style:{marginLeft:i?"15px":"50px"},onClick:function(){return t("/cart")},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"}),Object(E.jsxs)(Ve,{children:[Object(E.jsx)(We,{}),Object(E.jsxs)(_e,{mobileScreen:i,children:[o.toFixed(2)," \u0440\u0443\u0431"]})]})]})},qe=o.a.div({position:"absolute",top:"50px",bottom:"0px",display:"flex",width:"100%"}),Ge=function(){return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsxs)(qe,{children:[Object(E.jsx)(ee,{}),Object(E.jsx)(Fe,{})]}),Object(E.jsx)(Ke,{})]})},Ne=n(142);var Pe=function(e){var t=e.item,n=e.priceType;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t.title}),Object(E.jsx)("td",{children:t.number}),Object(E.jsx)("td",{children:"\u0441 \u041d\u0414\u0421"===n?t.price:"\u0431\u0435\u0437 \u041d\u0414\u0421"===n?t.priceopt:"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n?t.pricemegaopt:void 0})]})},Je=o.a.div({}),Xe=o.a.div({textAlign:"center",fontSize:"20px",fontWeight:"500"});var Ue=function(e){var t=e.cart,n=e.priceType,r=e.sum;return t.length>0?Object(E.jsxs)(Je,{children:[Object(E.jsxs)(Ne.a,{striped:!0,bordered:!0,hover:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(E.jsx)("th",{children:"\u041a\u043e\u043b."}),Object(E.jsx)("th",{children:"\u0426\u0435\u043d\u0430"})]})}),Object(E.jsxs)("tbody",{children:[t.map((function(e){return Object(E.jsx)(Pe,{item:e,priceType:n},e.id)})),Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{colSpan:"2",children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430"}),Object(E.jsx)("th",{children:r.toFixed(2)})]})]})]}),"\u0426\u0435\u043d\u0430: ",n]}):Object(E.jsx)(Xe,{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})},Ye=n(57),Qe=n(70),Ze=n(3),$e=["name","label"];var et=function(e){var t=e.name,n=e.label,r=Object(Ze.a)(e,$e),i=Object(Ye.b)(),c=i.setFieldTouched,a=i.setFieldValue,o=i.errors,l=i.touched,s=i.values;return Object(E.jsxs)(oe.a.Group,{className:"mb-3",controlId:"cart_form_"+[t],children:[Object(E.jsx)(oe.a.Label,{children:n}),Object(E.jsx)(oe.a.Control,Object(ne.a)({type:"text",name:t,value:s[t],onChange:function(e){return a(t,e.target.value)},onBlur:function(){return c(t)},isValid:l[t]&&!o[t],isInvalid:l[t]?o[t]:null},r)),Object(E.jsx)(oe.a.Control.Feedback,{type:"invalid",children:o[t]})]})},tt=["name","label","value"];var nt=function(e){var t=e.name,n=e.label,r=e.value,i=(Object(Ze.a)(e,tt),Object(Ye.b)()),c=i.setFieldValue,a=i.values;return Object(E.jsx)(oe.a.Check,{name:t,label:n,type:"radio",id:"payment_"+r,value:r,checked:a[t]===r,onChange:function(e){return c(t,r)}})},rt=n(47),it=["onHide","email","showDone"],ct=o.a.div({});var at=function(e){var t=e.onHide,n=e.email,r=e.showDone,i=Object(Ze.a)(e,it),c=Object(R.f)(),a=Object(s.b)();return Object(E.jsxs)(ct,{children:["OK"===r?Object(E.jsxs)(rt.a,Object(ne.a)(Object(ne.a)({},i),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(E.jsxs)(rt.a.Body,{children:[Object(E.jsx)("h5",{style:{textAlign:"center"},children:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!"}),Object(E.jsxs)("p",{children:["\u041d\u043e\u043c\u0435\u0440 \u0412\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 ",Object(E.jsx)("b",{children:"12345"}),". \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0412\u0430\u0448 email: ",Object(E.jsx)("b",{children:n})]}),Object(E.jsx)("p",{children:"\u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0434\u043b\u044f \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438."})]}),Object(E.jsx)(rt.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(re.a,{onClick:function(){t(),a(A()),c("/")},children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})):null,"Error"===r?Object(E.jsxs)(rt.a,Object(ne.a)(Object(ne.a)({},i),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(E.jsxs)(rt.a.Body,{children:[Object(E.jsx)("h5",{style:{textAlign:"center"},children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"}),Object(E.jsx)("p",{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d."}),Object(E.jsx)("p",{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."})]}),Object(E.jsx)(rt.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(re.a,{onClick:function(){return t()},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})):null]})},ot=o.a.div({marginTop:"30px"}),lt=o.a.div({marginTop:"30px"}),st=o.a.div({display:"flex",justifyContent:"space-evenly",marginTop:"30px"}),dt=[{id:1,label:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)",value:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)"},{id:2,label:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438",value:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438"},{id:3,label:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0435)",value:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0435)"},{id:4,label:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u043e \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c",value:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u043e \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c"}],ut=[{id:1,label:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443",value:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443"},{id:2,label:"\u043f\u043e \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438",value:"\u043f\u043e \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438"},{id:3,label:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437",value:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"}],jt=Qe.a().shape({name_user:Qe.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f"),email:Qe.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email").email("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email"),phone:Qe.b().required("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d")});var bt=function(e){var t=e.cart,n=e.priceType,i=e.sum,c=Object(r.useState)("hide"),a=Object(G.a)(c,2),o=a[0],l=a[1],d=Object(r.useState)(""),u=Object(G.a)(d,2),j=u[0],b=u[1],p=Object(s.b)(),x=Object(R.f)(),h=function(e){var t;return"\u0441 \u041d\u0414\u0421"===n&&(t=e.price*e.number),"\u0431\u0435\u0437 \u041d\u0414\u0421"===n&&(t=e.priceopt*e.number),"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n&&(t=e.pricemegaopt*e.number),t.toFixed(2)},m=function(e){return"\u0441 \u041d\u0414\u0421"===n?e.price:"\u0431\u0435\u0437 \u041d\u0414\u0421"===n?e.priceopt:"\u0431\u0435\u0437 \u041d\u0414\u0421 (\u043e\u0442 250\u0440)"===n?e.pricemegaopt:void 0},O=function(){x("/")};return Object(E.jsxs)(ot,{children:[Object(E.jsx)(Ye.a,{initialValues:{name_user:"",email:"",phone:"",payment_method:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 (\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446)",delivery:"\u043f\u043e \u041c\u0438\u043d\u0441\u043a\u0443",address:"",comment:""},validationSchema:jt,onSubmit:function(e){b(e.email),console.log(e),console.log(t);for(var r=[],c=0;c<t.length;c++){var a={title:t[c].title,article:t[c].article,number:t[c].number,price:m(t[c]),sum:h(t[c])};r.push(a)}var o={cart:r,customer:e,priceType:n,sum:i.toFixed(2)};console.log(o),p(T(!0)),f.sendCart(o).then((function(e){p(T(!1)),200===e.status?l("OK"):(l("Error"),console.log("error"))})).catch((function(e){p(T(!1)),l("Error"),console.log(e)}))},children:function(e){var t=e.handleSubmit;return Object(E.jsxs)(oe.a,{noValidate:!0,onSubmit:t,children:[Object(E.jsx)(et,{name:"name_user",label:"\u0424\u0418\u041e*"}),Object(E.jsx)(et,{name:"phone",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*",inputMode:"tel",placeholder:"+375xxxxxxxxx"}),Object(E.jsx)(et,{name:"email",label:"Email*",inputMode:"email"}),Object(E.jsx)(et,{name:"address",label:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(E.jsx)(et,{name:"comment",label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",as:"textarea"}),Object(E.jsxs)(lt,{children:[Object(E.jsx)(oe.a.Label,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b:"}),dt.map((function(e){return Object(E.jsx)(nt,{name:"payment_method",label:e.label,value:e.value},e.id)}))]}),Object(E.jsxs)(lt,{children:[Object(E.jsx)(oe.a.Label,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430:"}),ut.map((function(e){return Object(E.jsx)(nt,{name:"delivery",label:e.label,value:e.value},e.id)}))]}),Object(E.jsxs)(st,{children:[Object(E.jsx)(re.a,{variant:"outline-primary",onClick:O,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(E.jsx)(re.a,{variant:"primary",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}}),Object(E.jsx)(at,{show:"hide"!==o,onHide:function(){return l("hide")},backdrop:"static",keyboard:!1,email:j,showDone:o})]})},pt=o.a.div({textAlign:"center",margin:"20px 10px",fontSize:"20px",fontWeight:"500"}),xt=o.a.div({margin:"10px 10px"});var ht=function(){var e=Object(s.c)((function(e){return e.manage.cart})),t=Object(s.c)((function(e){return e.manage.priceType})),n=Object(s.c)((function(e){return e.manage.cartSum}));return Object(E.jsxs)(xt,{children:[Object(E.jsx)(pt,{children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(E.jsx)(Ue,{cart:e,priceType:t,sum:n}),Object(E.jsx)(bt,{cart:e,priceType:t,sum:n})]})},mt=n(50),ft=o.a.div({display:"flex",flexDirection:"column",alignItems:"center",fontSize:"20px",marginTop:"30px"});var Ot=function(){return Object(E.jsxs)(ft,{children:["\u0410\u0439 \u0430\u0439 \u0430\u0439! \u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u0443\u0442\u0438!",Object(E.jsx)(mt.b,{to:"/",children:" \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},gt=o.a.div({position:"fixed",top:"0px",bottom:"0px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.1)"});var vt=function(){return Object(E.jsx)(gt,{children:Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",background:"rgba(0, 0, 0, 0) none repeat scroll 0% 0%",display:"block",shapeRendering:"auto"},width:"60px",height:"60px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(E.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#3be8b0",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:Object(E.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})})})},yt=o.a.div({height:"100%"});var wt=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.manage.loading}));return Object(r.useEffect)((function(){q(),e(O())}),[]),Object(E.jsxs)(yt,{children:[Object(E.jsx)(V,{}),Object(E.jsxs)(R.c,{children:[Object(E.jsx)(R.a,{path:"/",element:Object(E.jsx)(Ge,{})}),Object(E.jsx)(R.a,{path:"/cart",element:Object(E.jsx)(ht,{})}),Object(E.jsx)(R.a,{path:"*",element:Object(E.jsx)(Ot,{})})]}),t?Object(E.jsx)(vt,{}):null]})};a.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(s.a,{store:K,children:Object(E.jsx)(mt.a,{children:Object(E.jsx)(wt,{})})})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.299b6545.chunk.js.map