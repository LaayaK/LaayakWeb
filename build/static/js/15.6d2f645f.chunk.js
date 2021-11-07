(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[15],{126:function(e,t,a){"use strict";a.r(t);var n=a(61),l=a(12),r=a(13),o=a(15),c=a(14),i=a(0),s=a.n(i),u=a(43),m=a(1),d=u.a.firestore(),p=u.a.auth(),h=d.collection("classes").doc(),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).isMount=!1,e.state={details:{branch:"",college:"",course:"",crName:"",sem:""},rollNo:"",redirect:!1},e.handleChange=function(t){var a=t.target.name,l=t.target.value,r=Object(n.a)({},e.state.details);r[a]=l,e.setState({details:r})},e.addDoc=function(){var t;"cr"===(null===(t=e.state.user)||void 0===t?void 0:t.displayName)&&d.collection("cr").doc(e.state.user.email).onSnapshot((function(t){t.data()&&d.collection("classes").doc(t.data().classId).get().then((function(t){t.exists&&e.isMount&&e.setState({redirect:!0})}))}))},e.handleSubmitDetails=function(t){var a;t.preventDefault();var n=t.target.classList;n.add("loading"),"cr"===(null===(a=e.state.user)||void 0===a?void 0:a.displayName)&&e.initAll(n)},e.getDetails=function(){return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-login mx-auto"},s.a.createElement("div",{className:"con-login"},s.a.createElement("h1",null,"Additional Details"),s.a.createElement("form",{onSubmit:e.handleSubmitDetails,style:{width:"100%"}},s.a.createElement("div",{className:"con-inputs mt-4"},s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"crName"},"Username"),s.a.createElement("input",{placeholder:"Username",id:"crName",name:"crName",value:e.state.details.crName,type:"text",onChange:e.handleChange,required:!0})),s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"rollno"},"Roll Number"),s.a.createElement("input",{placeholder:"Roll Number",id:"rollno",name:"rollNo",type:"text",value:e.state.rollNo,required:!0,onChange:function(t){return e.setState({rollNo:t.target.value})}})),s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"course"},"Course"),s.a.createElement("input",{placeholder:"Eg. BTech",id:"course",name:"course",value:e.state.details.course,type:"text",onChange:e.handleChange,required:!0})),s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"branch"},"Branch"),s.a.createElement("input",{placeholder:"Eg. CSE",id:"branch",name:"branch",value:e.state.details.branch,type:"text",onChange:e.handleChange,required:!0})),s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"sem"},"Semester"),s.a.createElement("input",{placeholder:"Semester",id:"sem",name:"sem",value:e.state.details.sem,type:"text",onChange:e.handleChange,required:!0})),s.a.createElement("div",{className:"con-input"},s.a.createElement("label",{htmlFor:"college"},"College Name"),s.a.createElement("input",{placeholder:"College Name",id:"college",name:"college",value:e.state.details.college,type:"text",onChange:e.handleChange,required:!0}))),s.a.createElement("footer",null,s.a.createElement("button",{type:"submit",className:"btn-login"},"Submit"))))))},e.initAll=function(t){var a;e.setState({redirect:!0});var n={details:e.state.details,subjects:[],crDetails:{name:e.state.details.crName,rollNo:e.state.rollNo,classId:h.id,email:null===(a=e.state.user)||void 0===a?void 0:a.email},timeTable:"https://www.softwaresuggest.com/blog/wp-content/uploads/2019/10/Advantages-of-Timetable-Management-System-in-Schools-1.png"};h.set(n).then((function(e){e.collection("updates").doc("announcements").set({announcements:[],assignments:[]}),e.collection("lectures").doc("lecturesToday").set({lectures:[]}),e.collection("fcmTokens").doc("fcmTokens").set({fcmTokens:[]}),e.collection("details").doc("stuList").set({studentsList:[{rollNo:n.crDetails.rollNo,name:n.crDetails.name,email:n.crDetails.email}]})})),t.remove("loading"),setTimeout((function(){window.location.reload()}),1e3)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,this.isMount&&p.onAuthStateChanged((function(t){e.isMount&&(t?e.setState({user:t,forgery:!1}):e.setState({forgery:!0}))}))}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){return this.state.forgery?s.a.createElement(m.a,{to:"/newcr"}):this.state.redirect?s.a.createElement(m.a,{to:"/cr"}):s.a.createElement("div",null,this.getDetails())}}]),a}(i.Component);t.default=b},43:function(e,t,a){"use strict";var n=a(49),l=a.n(n);a(52),a(53),a(54);l.a.initializeApp({apiKey:"AIzaSyAmIvOPjQnup4mQ5aG39T5baEpulNmWv4k",authDomain:"laayak-web-app.firebaseapp.com",databaseURL:"https://laayak-web-app.firebaseio.com",projectId:"laayak-web-app",storageBucket:"laayak-web-app.appspot.com",messagingSenderId:"308936714271",appId:"1:308936714271:web:002f9b74b345181da7cd2a",measurementId:"G-YHF3LDWKKG"}),t.a=l.a},44:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(44);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}}}]);
//# sourceMappingURL=15.6d2f645f.chunk.js.map