(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[18],{132:function(e,a,t){"use strict";t.r(a);var n=t(44),s=t(12),i=t(13),o=t(15),r=t(14),l=t(0),c=t.n(l),m=t(6),u=t(45),d=t.n(u),p=t(43),h=t(56),g=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).db=p.a.firestore(),e.isMount=!1,e.state={email:"",password:""},e.handleSubmit=function(a){a.preventDefault();var t=a.target.classList;t.add("loading"),p.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){"student"===e.user.displayName||"cr"===e.user.displayName?(t.remove("loading"),d.a.toast({html:"Logged In Successfully",classes:"toast success-toast"}),window.location.pathname="/student"):(t.remove("loading"),d.a.toast({html:"Invalid Email/Password",classes:"toast error-toast"}))})).catch((function(e){"The password is invalid or the user does not have a password."===e.message||"There is no user record corresponding to this identifier. The user may have been deleted."===e.message?(t.remove("loading"),d.a.toast({html:"Invalid Email/Password",classes:"toast error-toast"})):(t.remove("loading"),d.a.toast({html:e.message,classes:"toast error-toast"}))}))},e.handleChange=function(a){var t=a.target.name,s=a.target.value;e.isMount&&e.setState(Object(n.a)({},t,s))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.isMount=!0}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"container-login mx-auto"},c.a.createElement("div",{className:"con-login"},c.a.createElement("h1",null,"Login"),c.a.createElement("form",{onSubmit:this.handleSubmit,style:{width:"100%"}},c.a.createElement("div",{className:"con-inputs mt-4"},c.a.createElement("div",{className:"con-input"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{placeholder:"Email",id:"email",type:"email",value:this.state.email,name:"email",required:!0,onChange:this.handleChange})),c.a.createElement("div",{className:"con-input"},c.a.createElement("label",{htmlFor:"password"},"Password:"),c.a.createElement("input",{placeholder:"Password",id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),c.a.createElement(h.a,null)),c.a.createElement("div",{className:"con-new"},"New here? ",c.a.createElement(m.b,{to:"/student/signup"},"Sign Up")),c.a.createElement("footer",null,c.a.createElement("button",{type:"submit",className:"btn-login"},"Log In")))))))}}]),t}(l.Component);a.default=g},43:function(e,a,t){"use strict";var n=t(49),s=t.n(n);t(52),t(53),t(54);s.a.initializeApp({apiKey:"AIzaSyAmIvOPjQnup4mQ5aG39T5baEpulNmWv4k",authDomain:"laayak-web-app.firebaseapp.com",databaseURL:"https://laayak-web-app.firebaseio.com",projectId:"laayak-web-app",storageBucket:"laayak-web-app.appspot.com",messagingSenderId:"308936714271",appId:"1:308936714271:web:002f9b74b345181da7cd2a",measurementId:"G-YHF3LDWKKG"}),a.a=s.a},44:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},56:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(){return s.a.createElement("i",{className:"fa fa-eye",onClick:function(e){var a=document.getElementById("password"),t="password"===a.getAttribute("type")?"text":"password";a.setAttribute("type",t),e.target.classList.toggle("fa-eye-slash")}})}}}]);
//# sourceMappingURL=18.41293722.chunk.js.map