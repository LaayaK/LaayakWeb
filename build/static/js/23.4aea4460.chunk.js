(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[23],{123:function(e,t,a){"use strict";a.r(t);var n=a(68),s=a(0),l=a.n(s),o=a(6),r=a(45),c=a.n(r),i=a(43),u=a(56),m=a(106),d=i.a.firestore();t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],p=Object(s.useState)(""),h=Object(n.a)(p,2),f=h[0],b=h[1],g=Object(s.useState)(""),v=Object(n.a)(g,2),E=v[0],y=v[1],N=Object(s.useState)(null),w=Object(n.a)(N,2),j=w[0],O=w[1],k=Object(s.useState)(""),C=Object(n.a)(k,2),L=C[0],I=C[1],S=function(e){Object(m.auth)().createUserWithEmailAndPassword(f,L).then((function(t){t.user.updateProfile({displayName:"student"}).then((function(){U(e)}))})).catch((function(t){e.remove("loading"),c.a.toast({html:t.message,classes:"toast error-toast"})}))},U=function(e){d.collection("classes").doc(a).get().then((function(t){t.exists?t.ref.collection("details").doc("stuList").get().then((function(t){if(function(e,t){var a;for(a=0;a<t.length;a++)if(t[a].rollNo===e)return!0;if(a===t.length)return!1}(j,t.data().studentsList))return Object(m.auth)().currentUser.delete(),e.remove("loading"),void c.a.toast({html:"Roll No- ".concat(j," already exists"),classes:"toast error-toast"});A(),F(),e.remove("loading"),c.a.toast({html:"Registered Successfully",classes:"toast success-toast"})})):(Object(m.auth)().currentUser.delete(),e.remove("loading"),c.a.toast({html:"Wrong class code was entered, please recheck the entry!",classes:"toast error-toast"}))})).catch((function(t){Object(m.auth)().currentUser.delete(),e.remove("loading"),c.a.toast({html:t.message,classes:"toast error-toast"})}))},x={classCode:a,email:f,name:E,rollNo:j,verified:!1},A=function(){d.collection("students").doc(f).set(x).catch((function(e){Object(m.auth)().currentUser.delete(),c.a.toast({html:e.message,classes:"toast error-toast"})}))},F=function(){var e,t=d.collection("classes").doc(a).collection("details").doc("stuList"),n={rollNo:x.rollNo,name:x.name,email:x.email};"student"===(null===(e=Object(m.auth)().currentUser)||void 0===e?void 0:e.displayName)&&t.update({studentsList:i.a.firestore.FieldValue.arrayUnion(n)}).then((function(){window.location.pathname="/student"})).catch((function(e){Object(m.auth)().currentUser.delete(),c.a.toast({html:e.message,classes:"toast error-toast"})}))};return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"container-login mx-auto"},l.a.createElement("div",{className:"con-login"},l.a.createElement("h1",null,"Join Your Classmates"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.classList;t.add("loading"),S(t)},style:{width:"100%"}},l.a.createElement("div",{className:"con-inputs mt-4"},l.a.createElement("div",{className:"con-input"},l.a.createElement("label",{htmlFor:"code"},"Class Code"),l.a.createElement("input",{placeholder:"Code provided by CR",id:"code",type:"text",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("div",{className:"con-input"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",placeholder:"Name",id:"name",required:!0,onChange:function(e){return y(e.target.value)}})),l.a.createElement("div",{className:"con-input"},l.a.createElement("label",{htmlFor:"rollno"},"Roll Number"),l.a.createElement("input",{placeholder:"Roll Number",id:"rollno",type:"text",required:!0,onChange:function(e){O(e.target.value)}})),l.a.createElement("div",{className:"con-input"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{placeholder:"Email",id:"email",type:"email",required:!0,onChange:function(e){return b(e.target.value)}})),l.a.createElement("div",{className:"con-input"},l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{placeholder:"Password",id:"password",type:"password",value:L,onChange:function(e){return I(e.target.value)},required:!0}),l.a.createElement(u.a,null)),l.a.createElement("div",{className:"con-new"},"Already Joined? ",l.a.createElement(o.b,{to:"/student/login"},"Log In")),l.a.createElement("footer",null,l.a.createElement("button",{type:"submit",className:"btn-login"},"Log In")))))))}},43:function(e,t,a){"use strict";var n=a(49),s=a.n(n);a(52),a(53),a(54);s.a.initializeApp({apiKey:"AIzaSyAmIvOPjQnup4mQ5aG39T5baEpulNmWv4k",authDomain:"laayak-web-app.firebaseapp.com",databaseURL:"https://laayak-web-app.firebaseio.com",projectId:"laayak-web-app",storageBucket:"laayak-web-app.appspot.com",messagingSenderId:"308936714271",appId:"1:308936714271:web:002f9b74b345181da7cd2a",measurementId:"G-YHF3LDWKKG"}),t.a=s.a},56:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(){return s.a.createElement("i",{className:"fa fa-eye",onClick:function(e){var t=document.getElementById("password"),a="password"===t.getAttribute("type")?"text":"password";t.setAttribute("type",a),e.target.classList.toggle("fa-eye-slash")}})}}}]);
//# sourceMappingURL=23.4aea4460.chunk.js.map