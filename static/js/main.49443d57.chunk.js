(this.webpackJsonpreact2020=this.webpackJsonpreact2020||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/logo.3482f0a5.png"},43:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),m=a(11),i=a(2);var o=function(e,t){return e+t};var u=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),a=Object(i.a)(t,2),c=(a[0],a[1]);return setInterval((function(){var e=(new Date).toLocaleTimeString();c(e)}),1e3),l.a.createElement("div",null,l.a.createElement("h1",null,"Time = ",e))},s=function(){var e=Object(n.useState)("#125758"),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("Click Me Event"),m=Object(i.a)(r,2),o=m[0],u=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"evnt",style:{backgroundColor:a}},l.a.createElement("button",{className:"evnthnd",onMouseEnter:function(){c("#789548"),u("Hardik Devani \ud83e\udd2c ")},onMouseLeave:function(){c("#656987"),u("Double Click \ud83d\ude20")}},o)))},E=function(e){var t=e.x,a=e.y,n=e.z;return t===a&&a===n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"slot"},l.a.createElement("h1",null,t," ",a," ",n),l.a.createElement("h2",null,"This is Matching"),l.a.createElement("hr",null))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"slot"},l.a.createElement("h1",null,t," ",a," ",n),l.a.createElement("h2",null,"This is not Matching"),l.a.createElement("hr",null)))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"heading_style"}," Welcome to ",l.a.createElement("span",{style:{fontWeight:"bold"}},"Slot Machine"),"  "),l.a.createElement("div",{className:"slotmachine"},l.a.createElement(E,{x:"\ud83e\udddd\u200d\u2642\ufe0f",y:"\ud83e\udd11",z:"\ud83e\udd11"}),l.a.createElement(E,{x:"\ud83d\ude0f",y:"\ud83d\ude0f",z:"\ud83d\ude0f"}),l.a.createElement(E,{x:"\ud83d\ude0f",y:"\ud83d\ude0f",z:"\ud83d\ude27"}),l.a.createElement(E,{x:"\ud83d\ude27",y:"\ud83d\ude27",z:"\ud83d\ude27"})))},f=a(5),v=a(18),g=function(){var e=Object(n.useState)({fname:"",lname:"",email:"",phone:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){console.log(e.target.value),console.log(e.target.name);var t=e.target,a=t.value,n=t.name;c((function(e){return console.log(e),Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n,a))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("Form Submit")}},l.a.createElement("h1",null,"Hellooo ",a.fname," ",a.lname," ",a.email," ",a.phone),l.a.createElement("input",{type:"text",placeholder:"Enter Your Name",name:"fname",onChange:r,value:a.fname}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Enter Your Last Name",name:"lname",onChange:r,value:a.lname}),l.a.createElement("input",{type:"email",placeholder:"Enter Email",name:"email",onChange:r,value:a.email}),l.a.createElement("input",{type:"number",placeholder:"Enter Phone",name:"phone",onChange:r,value:a.phone}),l.a.createElement("button",{type:"submit"},"Click Me"))))},h=function(){Object(n.useState)();var e=Object(n.useState)(500),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,a),l.a.createElement("button",{onClick:function(){c(a+5)}},"Click Me"))},p=a(17),b=a.n(p),N=a(36),O=a.n(N),j=a(74),S=a(73),k=a(33),w=a.n(k),C=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div_num"},l.a.createElement("div",{className:"center_div_num"},l.a.createElement("h1",null," ",a," ",l.a.createElement(w.a,null)),l.a.createElement("div",{className:"btn_div"},l.a.createElement(S.a,{title:"Add"},l.a.createElement(j.a,{onClick:function(){c(a+1)},className:"btn_green"},l.a.createElement(b.a,null)," ")),l.a.createElement(S.a,{title:"Delete"},l.a.createElement(j.a,{onClick:function(){a>0?c(a-1):(alert("0 Limit Reached."),c(0))},className:"btn_red"},l.a.createElement(O.a,null)," "))))))},y=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Time - ",c),l.a.createElement("button",{onClick:function(){var e=(new Date).toLocaleTimeString();r(e)}},"Get Time"))},x=a(28),_=a.n(x),T=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"todo_style_map"},l.a.createElement("span",{onClick:function(){r(!0)}},l.a.createElement(_.a,{className:"deleteIcon"})),l.a.createElement("li",{style:{textDecoration:c?"line-through":"none"}},e.text))},D=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),u=o[0],s=o[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"main_div_mate"},l.a.createElement("div",{className:"center_div_mate"},l.a.createElement("br",null),l.a.createElement("h1",null,"ToDo List New"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"",id:"",placeholder:"Add an Item",onChange:function(e){c(e.target.value)},value:a}),l.a.createElement(j.a,{className:"newBtn",onClick:function(){s((function(e){return[].concat(Object(m.a)(e),[a])})),c("")}},l.a.createElement(b.a,null)),l.a.createElement("br",null),l.a.createElement("ol",null,u.map((function(e,t){return l.a.createElement(T,{text:e,id:"",key:t})}))))))},A=a(37),L=a.n(A),F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todo_style"},l.a.createElement(L.a,{className:"fa fa-times",onClick:function(){e.onSelect(e.id)}}),l.a.createElement("li",null," ",e.text," ")))},I=function(){return l.a.createElement("div",null,l.a.createElement(G.Consumer,null,(function(e){return l.a.createElement(U.Consumer,null,(function(t){return l.a.createElement("h1",null,e," ",t)}))})))},M=function(){return l.a.createElement("div",null,l.a.createElement(I,null))},P=function(){return l.a.createElement("div",null,l.a.createElement(M,null))},H=a(38),W=a.n(H),z=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:W.a,alt:"logo",width:"150",height:"70"}),l.a.createElement("h5",null,"Aureate Labs"))},J=function(){var e=(new Date).getFullYear();return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \xa9 ",e)))},Y=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)({title:"",content:""}),o=Object(i.a)(m,2),u=o[0],s=o[1],E=function(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},a,n))})),console.log(u)};return l.a.createElement("div",null,l.a.createElement("div",{className:"main_note",onDoubleClick:function(){r(!0)}},l.a.createElement("form",{className:"noteform"},c?l.a.createElement("input",{type:"text",name:"title",value:u.title,onChange:E,placeholder:"Title"}):null,l.a.createElement("textarea",{name:"content",value:u.content,onChange:E,placeholder:"Write a note...",cols:"",rows:"",onClick:function(){r(!0)}}),c?l.a.createElement(j.a,{onClick:function(){e.passNote(u),s({title:"",content:""})},className:"addbtnNote"},l.a.createElement(b.a,{className:"plu_sign"})):null)))},B=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("br",null),l.a.createElement("p",null,e.content),l.a.createElement(j.a,{color:"primary"},l.a.createElement(_.a,{className:"deleteIcon",onClick:function(){e.deleteItem(e.id)}}))))},K=function(e){var t="https://source.unsplash.com/450x400?".concat(e.name);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:t,alt:"logo"})))},R=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"searchbar"},l.a.createElement("h1",null,"Hello Search"),l.a.createElement("input",{type:"text",placeholder:"Search Anything",onChange:function(e){var t=e.target.value;console.log(t),c(t)},value:a}),""===a?null:l.a.createElement(K,{name:a})))},Z=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"setStyle2"},l.a.createElement("h1",null,"404 Error Page"),l.a.createElement("p",null,"Welcome to Unknown World")))},G=Object(n.createContext)(),U=Object(n.createContext)();var q=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],E=Object(n.useState)([]),f=Object(i.a)(E,2),v=f[0],p=f[1],b=function(e){console.log("dddddd"),p((function(t){return t.filter((function(t,a){return a!==e}))}))},N=Object(n.useState)([]),O=Object(i.a)(N,2),j=O[0],S=O[1],k=function(e){S((function(t){return t.filter((function(t,a){return a!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z,null),l.a.createElement(R,null),l.a.createElement(z,null),l.a.createElement(Y,{passNote:function(e){S((function(t){return[].concat(Object(m.a)(t),[e])})),console.log(e)}}),j.map((function(e,t){return l.a.createElement(B,{key:t,id:t,title:e.title,content:e.content,deleteItem:k})})),l.a.createElement(J,null),l.a.createElement(G.Provider,{value:"Hardik Context API | "},l.a.createElement(U.Provider,{value:"Lname Hardik Context API"},l.a.createElement(P,null))),l.a.createElement(D,null),l.a.createElement(C,null),l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"center_div"},l.a.createElement("br",null),l.a.createElement("h1",null,"ToDO List"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"add a item",onChange:function(e){r(e.target.value)},value:c}),l.a.createElement("button",{onClick:function(){p((function(e){return[].concat(Object(m.a)(e),[c])})),r("")}}," + "),l.a.createElement("ol",null,v.map((function(e,t){return l.a.createElement(F,{key:t,id:t,text:e,onSelect:b})}))))),l.a.createElement(u,null),l.a.createElement(y,null),l.a.createElement(d,null),l.a.createElement(s,null),l.a.createElement(g,null),l.a.createElement(h,null),l.a.createElement("ul",null,l.a.createElement("li",null,"Hello ",e.myname),l.a.createElement("li",null,"now time is ",(new Date).toLocaleDateString),l.a.createElement("li",null,"Sum of Two No is ",o(45,40)),l.a.createElement("li",null,"Sub of Two No is ",30-40),l.a.createElement("li",null,"Div of Two No is ",function(e,t){return e/t}(22,40)),l.a.createElement("li",null,"Multi of Two No is ",function(e,t){return e*t}(45,40))))};var Q=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.imgsrc,alt:"ALPIC",className:"card__img"}),l.a.createElement("div",{className:"card__info"},l.a.createElement("span",{className:"card__category"},e.title),l.a.createElement("h3",{className:"card__title"}," ",e.sname," "),l.a.createElement("a",{href:e.link,target:"_blank"},l.a.createElement("button",null,"Watch Now"))))))},V=(a(54),[{imgsrc:"https://picsum.photos/500/300",sname:"DARK",title:" A Netflix Original Series",link:"https://www.google.com/"},{imgsrc:"https://picsum.photos/500/330",sname:"Extra Carricular",title:" A Netflix Original Series",link:"https://www.google.com/"},{imgsrc:"https://picsum.photos/500/340",sname:"MasterCard",title:" A Netflix Original Series",link:"https://www.google.com/"},{imgsrc:"https://picsum.photos/500/335",sname:"TrueLove",title:" A ZEE  Series",link:"https://www.google.com/"},{imgsrc:"https://picsum.photos/500/345",sname:"Khul JA Sim Sim",title:" A ZEE5  Series",link:"https://www.google.com/"},{imgsrc:"https://picsum.photos/500/339",sname:"Extra Carricular",title:" A Netflix Original Series",link:"https://www.google.com/"}]);r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{myname:"ffffff"}),l.a.createElement("h1",{className:"heading_style"},"List of TOP 5 Netflix Series in 2020"),V.map((function(e,t){return console.log(t),l.a.createElement(l.a.Fragment,{key:e.imgsrc},l.a.createElement(Q,{imgsrc:e.imgsrc,sname:e.sname,title:e.title,link:e.link}))})),";"),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.49443d57.chunk.js.map