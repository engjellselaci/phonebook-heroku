(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),u=n.n(r),l=n(16),o=n(2),m=function(e){return c.a.createElement("div",null,e.name," ",e.number,c.a.createElement("button",{onClick:e.handleDelete},"delete"))},i=function(e){var t=e.persons,n=e.search,a=e.handleDelete,r=[];return""===n?r=t.concat():t.forEach((function(e){e.name.toLowerCase().includes(n.toLowerCase())&&r.push(e)})),c.a.createElement(c.a.Fragment,null,r.map((function(e,t){return c.a.createElement(m,{key:t,name:e.name,number:e.number,handleDelete:function(){return a(e.id,e.name)}})})))},s=function(e){var t=e.search,n=e.handleSearchChange;return c.a.createElement("div",null,c.a.createElement("form",null,"filter shown with ",c.a.createElement("input",{value:t,onChange:n})))},d=function(e){var t=e.text;return c.a.createElement("h1",null,t)},f=function(e){var t=e.newName,n=e.newNumber,a=e.addName,r=e.handleNewName,u=e.handleNewNumber;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:a},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:t,onChange:r})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:n,onChange:u})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add"))))},h=n(4),b=n.n(h),E="/api/persons",p=function(){return b.a.get(E).then((function(e){return e.data}))},v=function(e){return b.a.post(E,e)},g=function(e){return b.a.delete("".concat(E,"/").concat(e))},N=function(e,t){return b.a.put("".concat(E,"/").concat(e),t)},w=function(e){var t=e.message,n=e.className;return null===t?null:c.a.createElement("div",{className:n},t)},j=(n(39),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),h=m[0],b=m[1],E=Object(a.useState)(""),j=Object(o.a)(E,2),O=j[0],S=j[1],k=Object(a.useState)(""),y=Object(o.a)(k,2),C=y[0],D=y[1],x=Object(a.useState)(null),T=Object(o.a)(x,2),F=T[0],A=T[1],I=Object(a.useState)("message"),J=Object(o.a)(I,2),L=J[0],B=J[1];Object(a.useEffect)((function(){console.log("effect"),p().then((function(e){console.log("promise fulfilled"),r(e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{text:"Phonebook"}),c.a.createElement(w,{message:F,className:L}),c.a.createElement(s,{search:C,handleSearchChange:function(e){D(e.target.value)}}),c.a.createElement(d,{text:"Add a new"}),c.a.createElement(f,{addName:function(e){e.preventDefault();var t={name:h,number:O},a=n.filter((function(e){return e.name===h}));if(a.length>0)return window.alert("".concat(h," is already on the phonebook! update the number?")),N(a[0].id,t).then((function(e){r([].concat(Object(l.a)(n.filter((function(t){return t.id!==e.data.id}))),[e.data]))})).catch((function(e){B("error"),A("Name '".concat(h,"' was already removed from the server")),setTimeout((function(){A(null)}),5e3)})),B("message"),A("Name '".concat(h,"' successfully updated.")),setTimeout((function(){A(null)}),5e3),void S("");v(t).then((function(e){r(n.concat(e.data)),B("message"),A("Name '".concat(h,"' successfully added")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){B("error"),A(e.response.data),console.log(e.response.data)})),b(""),S("")},newName:h,newNumber:O,handleNewNumber:function(e){return S(e.target.value)},handleNewName:function(e){return b(e.target.value)}}),c.a.createElement(d,{text:"Numbers"}),c.a.createElement(i,{persons:n,search:C,handleDelete:function(e,t){if(window.confirm("Delete ".concat(t," ?"))){var a=n.filter((function(t){return t.id!==e}));g(e).then(r(a)).catch((function(e){B("error"),A("Name '".concat(h,"' was not deleted.")),setTimeout((function(){A(null)}),5e3)})),B("message"),A("Name was successfully deleted"),setTimeout((function(){A(null)}),5e3)}console.log("Id is: ".concat(e))}}))});u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b900fa8a.chunk.js.map