(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[12],{127:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),l=n(12),s=n(11),c=n(0),o=n.n(c),i=n(57),u=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e.getDetails=function(){var t=e.props.details,n=t.name,a=t.college;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("h3",null,o.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb"))),o.a.createElement("div",{className:"ann-info text-left my-auto"},o.a.createElement("h3",null,"Name: ",o.a.createElement("strong",null,n)),o.a.createElement("h3",null,"College: ",o.a.createElement("strong",null,a))))},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},o.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),n}(c.Component),d=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},o.a.createElement("div",{className:"up mx-auto"},o.a.createElement("div",{className:"ann-preview"},o.a.createElement("ul",{style:{listStyle:"none"}},this.props.class.subjects.map((function(e){return o.a.createElement("h4",{key:e.code+e.name},o.a.createElement("li",null,e.name))})))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("h4",null,o.a.createElement("strong",null,"Course: "),this.props.class.details.course),o.a.createElement("h4",null,o.a.createElement("strong",null,"Branch: "),this.props.class.details.branch),o.a.createElement("h4",null,o.a.createElement("strong",null,"Semester: "),this.props.class.details.sem),o.a.createElement("h4",null,o.a.createElement("strong",null,"CR: "),this.props.class.details.crName),o.a.createElement("span",{className:"btn link-btn btn-primary mt-2 float-right",onClick:this.props.onShow}," ","More Info"," "))))}}]),n}(c.Component),m=n(71),f=n.n(m),p=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e.renderLecture=function(){var t=e.props.lecture,n=t.subject,a=t.startTime,r=t.endTime,l=t.link,s=t.text,c=t.branch,i=t.sem,u=t.group,d=a.toDate().getHours(),m=a.toDate().getMinutes(),p="am";12===d&&(p="pm"),d>12&&(d-=12,p="pm");var h=m<10?"0"+String(m):String(m),b=r.toDate().getHours(),y=r.toDate().getMinutes(),g="am";12===b&&(g="pm"),b>12&&(b-=12,g="pm");var v=y<10?"0"+String(y):String(y);return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"lec lec-hover",id:a+l},o.a.createElement("div",{className:"lec-preview"},o.a.createElement("div",{className:"time",style:{height:"148px"}},o.a.createElement("h3",null,d," : ",h," ",p),o.a.createElement("div",{className:"mb-2",style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("span",{className:"vertical-line",style:{height:"20px"}})),o.a.createElement("h3",null,b," : ",v," ",g)),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("a",{className:"lec-btn btn-primary mt-2",href:l,target:"_blank",rel:"noopener noreferrer"},"Join now")),o.a.createElement("div",{className:"lec-info text-left"},o.a.createElement("div",{className:"main-data",style:{height:"148px"}},o.a.createElement("h2",null,o.a.createElement("strong",null,n)),o.a.createElement("h4",null,"Branch: ",c),o.a.createElement("h4",null,"Semester: ",i),o.a.createElement("h4",null,"Group: ",u||"All")),o.a.createElement("hr",null),o.a.createElement("h5",null,o.a.createElement("strong",null,"Description: "),o.a.createElement(f.a,{lines:1,more:"More",less:"Less",anchorClass:"",onClick:function(){return document.getElementById(a+l).classList.toggle("lec-hover")},expanded:!1},s||"No Info Provided")),o.a.createElement("div",{style:{position:"absolute",top:"5%",right:"5%"}},o.a.createElement("button",{className:"btn",onClick:function(){return e.props.onDelete(e.props.lecture)}},o.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c"))))))},e}return Object(r.a)(n,[{key:"render",value:function(){return this.renderLecture()}}]),n}(c.Component),h=n(46),b=n(45),y=n(49),g=n(47),v=n.n(g),E=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).isMount=!1,e.state={show:!1,link:"",branch:"",semester:"",subjectName:"",subjectCode:"",classId:"",text:"",group:""},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.getForm=function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"m-2",onSubmit:e.callAddLecture},o.a.createElement("div",{className:"col-sm-7",style:{margin:"auto"}},o.a.createElement("label",null,"Branch: "),o.a.createElement("select",{className:"add-lec-subject form-control text-center",name:"branch",onChange:e.handleChange,required:!0},o.a.createElement("option",{className:"add-lec-opns",value:""},"--Choose Branch---"),e.props.classesTeaching.map((function(e){return o.a.createElement("option",{className:"add-lec-opns",key:e.details.classId+e.details.subject,value:e.details.branch},e.details.branch)})))),o.a.createElement("div",{className:"col-sm-7",style:{margin:"auto"}},o.a.createElement("label",null,"Semester: "),o.a.createElement("select",{className:"add-lec-subject form-control text-center",name:"semester",onChange:e.handleSemChange,required:!0},o.a.createElement("option",{className:"add-lec-opns",value:""},"--Choose Semester---"),e.props.classesTeaching.filter((function(t){return t.details.branch===e.state.branch})).map((function(e){return o.a.createElement("option",{className:"add-lec-opns",key:e.details.classId,value:e.details.classId},e.details.sem)})))),o.a.createElement("div",{className:"col-sm-7",style:{margin:"auto"}},o.a.createElement("label",null,"Subject: "),o.a.createElement("select",{className:"add-lec-subject form-control text-center",name:"subject",onChange:e.handleSubChange,required:!0},o.a.createElement("option",{className:"add-lec-opns",value:""},"--Choose Subject---"),e.state.classId&&e.props.classesTeaching.find((function(t){return t.details.classId===e.state.classId})).subjects.map((function(e){return o.a.createElement("option",{className:"add-lec-opns",key:e.code+e.name,value:e.code},e.name)})))),o.a.createElement("div",{className:"col-md-7 mb-3",style:{margin:"auto"}},o.a.createElement("label",null,"Link:"),o.a.createElement("input",{type:"url",className:"form-control",id:"link",name:"link",value:e.state.link,onChange:e.handleChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("label",null,"Start Time"),o.a.createElement("input",{className:"form-control",type:"datetime-local",name:"startTime",min:(new Date).toJSON().split(":")[0]+":"+(new Date).toJSON().split(":")[1],id:"startTime",onChange:e.handleChange,required:!0})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("label",null,"End Time"),o.a.createElement("input",{className:"form-control",type:"datetime-local",name:"endTime",min:(new Date).toJSON().split(":")[0]+":"+(new Date).toJSON().split(":")[1],id:"endTime",onChange:e.handleChange,required:!0})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("label",null,"Group"),o.a.createElement("input",{className:"form-control",type:"text",name:"group",id:"group",onChange:e.handleChange,placeholder:"leave blank for whole class!"}))),o.a.createElement("label",null,"Description:"),o.a.createElement("textarea",{className:"form-control col-sm-10",id:"text",style:{margin:"auto"},value:e.state.text,name:"text",onChange:e.handleChange,placeholder:"no info provided"})),o.a.createElement("button",{className:"btn btn-success",type:"submit"},"Add Lecture")))},e.handleSubChange=function(t){var n=t.target.value,a=e.props.classesTeaching.find((function(t){return t.details.classId===e.state.classId})).subjects.find((function(e){return e.code===n})).name;e.setState({subjectName:a,subjectCode:n})},e.handleSemChange=function(t){var n=t.target.value,a={};e.props.classesTeaching.forEach((function(e){e.details.classId===n&&(a=e.details)})),e.setState({semester:a.sem,classId:a.classId})},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(h.a)({},n,a))},e.callAddLecture=function(t){t.preventDefault();var n=Date.parse(e.state.startTime),a=Date.parse(e.state.endTime),r=new Date(n),l=new Date(a);if(n<Date.now()-6e4||a<=n)v.a.toast({html:"Enter Valid Class Timings",classes:"toast error-toast"});else{var s={subjectName:e.state.subjectName,subjectCode:e.state.subjectCode,classId:e.state.classId,startTime:b.a.firestore.Timestamp.fromDate(r),endTime:b.a.firestore.Timestamp.fromDate(l),link:e.state.link,text:e.state.text,group:e.state.group};e.setState({show:!1}),e.props.addLecture(s),e.setState({link:"",subject:"",subjectCode:"",startTime:new Date(0),endTime:new Date(0),text:"",group:""})}},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"btn-info btn-lg mb-4",onClick:this.showModal},"Add Lecture +"),o.a.createElement(y.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,o.a.createElement("h3",null,"Add Lecture Details:"))),o.a.createElement(y.a.Body,null,this.getForm())))}}]),n}(c.Component),w=n(56),j=n(16),O=n(107),T=b.a.firestore(),N=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).isMount=!1,e.state={classesTeaching:[],details:[],lecturesToday:[],user:b.a.auth().currentUser,loading:!0,showDetails:!1,classId:null},e.claRef=T.collection("classes"),e.teachRef=T.collection("teachers").doc(e.state.user.email),e.teachClassRef=e.teachRef.collection("classes"),e.handleSignOut=function(){b.a.auth().signOut().then((function(){v.a.toast({html:"Signed Out",classes:"toast success-toast"}),window.location.reload()})).catch((function(e){v.a.toast({html:e.message,classes:"toast error-toast"})}))},e.addLecture=function(t){var n={subject:t.subjectName,subjectCode:t.subjectCode,teacher:e.state.details.name,link:t.link,startTime:t.startTime,endTime:t.endTime,group:t.group,text:t.text};e.claRef.doc(t.classId).collection("lectures").doc("lecturesToday").update({lectures:b.a.firestore.FieldValue.arrayUnion(n)}),e.setState({lecturesToday:[]}),setTimeout((function(){window.location.reload()}),200)},e.handleDetailsEdit=function(){},e.deleteLecture=function(t){var n={subject:t.subject,subjectCode:t.subjectCode,teacher:t.teacher,group:t.group,link:t.link,startTime:t.startTime,endTime:t.endTime,text:t.text};e.claRef.doc(t.classId).collection("lectures").doc("lecturesToday").update({lectures:b.a.firestore.FieldValue.arrayRemove(n)}),e.setState({lecturesToday:[]}),setTimeout((function(){window.location.reload()}),200)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,this.teachRef.onSnapshot((function(t){e.isMount&&e.setState({details:t.data().details,loading:!1})})),this.teachClassRef.onSnapshot((function(t){t.docs.forEach((function(t){var n=e.state.classesTeaching;n.push(t.data()),e.isMount&&e.setState({classesTeaching:n}),e.claRef.doc(t.id).collection("lectures").doc("lecturesToday").onSnapshot((function(n){var a=e.state.lecturesToday;n.data()&&n.data().lectures.forEach((function(e){t.data().subjects.forEach((function(n){e.subjectCode===n.code&&a.push(Object(i.a)(Object(i.a)({},e),{},{branch:t.data().details.branch,sem:t.data().details.sem,classId:t.data().details.classId}))}))})),e.isMount&&e.setState({lecturesToday:a})}))}))}))}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"code-head-btn"},o.a.createElement(j.a,null),o.a.createElement("h1",{className:"mainPageHeading mx-auto"},"Teacher Control Center!"),o.a.createElement("i",{style:{fontSize:"30px",cursor:"pointer"},onClick:this.handleSignOut,className:"float-md-right mb-2 fa fa-sign-out"})),o.a.createElement("h2",{id:"Details",className:"subHeading"},"Your Details:"," "),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement(u,{details:this.state.details,onEdit:this.handleDetailsEdit}),o.a.createElement("h2",{id:"Lectures",className:"subHeading"},"Lectures Today:"),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement(E,{addLecture:this.addLecture,classesTeaching:this.state.classesTeaching}),o.a.createElement("div",{className:"lectures-row"},0===this.state.lecturesToday.length?o.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"There are no lectures for the day yet!"):this.state.lecturesToday.map((function(t){return o.a.createElement(p,{lecture:t,key:t.startTime+t.classId,onDelete:e.deleteLecture})}))),o.a.createElement("h2",{id:"Classes",className:"subHeading"},"Classes You Teach:"),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement("div",{className:"my-flex-container"},0===this.state.classesTeaching.length?o.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No classes are assigned to you yet! Please contact the CR of respective class"):this.state.classesTeaching.map((function(t){return o.a.createElement(d,{key:t.details.classId,class:t,onShow:function(){return e.setState({showDetails:!0,classId:t.details.classId})}})}))),o.a.createElement(w.a,{paths:["Details","Lectures","Classes"]}));return this.state.showDetails?o.a.createElement(O.default,{classCode:this.state.classId,onHide:function(){return e.setState({showDetails:!1,classId:null})}}):t}}]),n}(c.Component),k=n(17),C=n(1),S=n(68),x=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).isMount=!1,e.state={user:null,verified:!1,loading:!0},e.authListener=function(){b.a.auth().onAuthStateChanged((function(t){t&&"teacher"===t.displayName&&e.isMount&&e.setState({verified:!0}),e.isMount&&e.setState({user:t})}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.isMount=!0,this.authListener()}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e,t=this;if(this.state.loading&&(e=o.a.createElement(k.a,null)),!this.state.loading){if(!this.state.user)return o.a.createElement(C.a,{to:"/teacher/login"});e=this.state.verified?o.a.createElement(N,null):o.a.createElement(S.a,null)}return setTimeout((function(){t.isMount&&t.setState({loading:!1})}),2e3),e}}]),n}(c.Component);t.default=x},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(46);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},68:function(e,t,n){"use strict";var a=n(9),r=n(10),l=n(12),s=n(11),c=n(0),o=n.n(c),i=n(6),u=n(47),d=n.n(u),m=n(45),f=(n(69),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).handleSignOut=function(){m.a.auth().signOut().then((function(){window.location.reload()})).catch((function(e){d.a.toast({html:e.message,classes:"toast error-toast"})}))},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"403"},o.a.createElement("section",{className:"page_403"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 "},o.a.createElement("div",{className:"col-sm-offset-1  text-center"},o.a.createElement("h1",{className:"text-center"},"403"),o.a.createElement("div",{className:"four_zero_three_bg"}),o.a.createElement("div",{className:"contant_box_403"},o.a.createElement("h3",{className:"h2"},"Access Denied"),o.a.createElement("h5",null,o.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.handleSignOut},"Sign In"),"to gain access / go",o.a.createElement(i.b,{className:"btn btn-success mx-2",to:"/"},"Home")))))))))}}]),n}(c.Component));t.a=f},69:function(e,t,n){},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=n(8),s=(a=n(80))&&a.__esModule?a:{default:a};function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,a,l=d(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),h(f(t=l.call(this,e)),"_isMounted",!1),h(f(t),"handleTruncate",(function(e){t._isMounted&&e!==t.state.truncated&&(t.setState({truncated:e}),e&&t.truncateRef.onResize())})),h(f(t),"toggleLines",(function(e){e.preventDefault();var n=f(t);t._isMounted&&t.setState({expanded:!t.state.expanded},(function(){n.props.onClick&&n.props.onClick(n.state.expanded)}))})),t.state={expanded:!1,truncated:!1},t}return t=c,(n=[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.setState({expanded:this.props.expanded})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.more,l=t.less,c=t.lines,o=t.anchorClass,i=t.width,u=t.keepNewLines,d=this.state,m=d.expanded,f=d.truncated;return r.default.createElement("div",null,r.default.createElement(s.default,{width:i,lines:!m&&c,ellipsis:r.default.createElement("span",null,"..."," ",r.default.createElement("a",{href:"#",className:o,onClick:this.toggleLines},a)),onTruncate:this.handleTruncate,ref:function(t){return e.truncateRef=t}},u?n.split("\n").map((function(e,t,n){return e=r.default.createElement("span",{key:t},e),t===n.length-1?e:[e,r.default.createElement("br",{key:t+"br"})]})):n),!f&&m&&r.default.createElement("span",null," ",r.default.createElement("a",{href:"#",className:o,onClick:this.toggleLines},l)))}}])&&i(t.prototype,n),a&&i(t,a),c}(r.Component);h(b,"defaultProps",{lines:3,more:"Show more",less:"Show less",anchorClass:"",onClick:void 0,expanded:!1,width:0,keepNewLines:!1}),h(b,"propTypes",{children:l.PropTypes.node,lines:l.PropTypes.number,more:l.PropTypes.node,less:l.PropTypes.node,anchorClass:l.PropTypes.string,onClick:l.PropTypes.func,expanded:l.PropTypes.bool,width:l.PropTypes.number,keepNewLines:l.PropTypes.bool});var y=b;t.default=y},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(8));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,n,r,l=m(s);function s(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return i(this,s),b(p(e=l.call.apply(l,[this].concat(n))),"state",{}),b(p(e),"extractReplaceLinksKeys",(function(t){var n=p(e),a=0;return e.replacedLinks=[],t.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g,(function(){var e=Array.prototype.slice.call(arguments,1,4);e.key="["+"@".repeat(e[2].length-1)+"="+a+++"]",n.replacedLinks.push(e),t=t.replace(e[0],e.key)})),t})),b(p(e),"restoreReplacedLinks",(function(t){return e.replacedLinks.forEach((function(e){t=t.replace(e.key,e[0])})),e.createMarkup(t)})),b(p(e),"innerText",(function(t){var n=document.createElement("div"),a="innerText"in window.HTMLElement.prototype?"innerText":"textContent",r=t.innerHTML.replace(/\r\n|\r|\n/g," ");n.innerHTML=e.extractReplaceLinksKeys(r);var l=n[a],s=document.createElement("div");return s.innerHTML="foo<br/>bar","foo\nbar"!==s[a].replace(/\r\n|\r/g,"\n")&&(n.innerHTML=n.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),l=n[a]),l})),b(p(e),"onResize",(function(){e.calcTargetWidth()})),b(p(e),"onTruncate",(function(t){var n=e.props.onTruncate;"function"===typeof n&&(e.timeout=window.requestAnimationFrame((function(){n(t)})))})),b(p(e),"calcTargetWidth",(function(t){var n=p(e),a=n.elements.target,r=n.calcTargetWidth,l=n.canvasContext,s=n.props.width;if(a){var c=s||Math.floor(a.parentNode.getBoundingClientRect().width);if(!c)return window.requestAnimationFrame((function(){return r(t)}));var o=window.getComputedStyle(a),i=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");l.font=i,e.setState({targetWidth:c},t)}})),b(p(e),"measureWidth",(function(t){return e.canvasContext.measureText(t).width})),b(p(e),"ellipsisWidth",(function(e){return e.offsetWidth})),b(p(e),"trimRight",(function(e){return e.replace(/\s+$/,"")})),b(p(e),"createMarkup",(function(e){return a.default.createElement("span",{dangerouslySetInnerHTML:{__html:e}})})),b(p(e),"getLines",(function(){for(var t=p(e),n=t.elements,r=t.props,l=r.lines,s=r.ellipsis,c=r.trimWhitespace,o=t.state.targetWidth,i=t.innerText,u=t.measureWidth,d=t.onTruncate,m=t.trimRight,f=t.renderLine,h=t.restoreReplacedLinks,b=[],y=i(n.text).split("\n").map((function(e){return e.split(" ")})),g=!0,v=e.ellipsisWidth(e.elements.ellipsis),E=1;E<=l;E++){var w=y[0];if(0!==w.length){var j=w.join(" ");if(u(j)<=o&&1===y.length){g=!1,j=h(j),b.push(j);break}if(E===l){for(var O=w.join(" "),T=0,N=O.length-1;T<=N;){var k=Math.floor((T+N)/2);u(O.slice(0,k+1))+v<=o?T=k+1:N=k-1}var C=O.slice(0,T);if(c)for(C=m(C);!C.length&&b.length;){C=m(b.pop())}"]["===C.substr(C.length-2)&&(C=C.substring(0,C.length-1)),C=h(C),j=a.default.createElement("span",null,C,s)}else{for(var S=0,x=w.length-1;S<=x;){var M=Math.floor((S+x)/2);u(w.slice(0,M+1).join(" "))<=o?S=M+1:x=M-1}if(0===S){E=l-1;continue}j=h(j=w.slice(0,S).join(" ")),y[0].splice(0,S)}b.push(j)}else b.push(),y.shift(),E--}return d(g),b.map(f)})),b(p(e),"renderLine",(function(e,t,n){if(t===n.length-1)return a.default.createElement("span",{key:t},e);var r=a.default.createElement("br",{key:t+"br"});return e?[a.default.createElement("span",{key:t},e),r]:r})),b(p(e),"styles",{ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}}),e.elements={},e.replacedLinks=[],e}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"render",value:function(){var e,t=this,n=this.elements.target,r=this.props,l=r.children,s=r.ellipsis,i=r.lines,u=o(r,["children","ellipsis","lines"]),d=this.state.targetWidth,m=this.getLines,f=this.onTruncate;return"undefined"!==typeof window&&!(!n||!d)&&(i>0?e=m():(e=l,f(!1))),delete u.onTruncate,delete u.trimWhitespace,a.default.createElement("span",c({},u,{ref:function(e){t.elements.target=e}}),a.default.createElement("span",null,e),a.default.createElement("span",{ref:function(e){t.elements.text=e}},l),a.default.createElement("span",{ref:function(e){t.elements.ellipsis=e},style:this.styles.ellipsis},s))}}])&&u(t.prototype,n),r&&u(t,r),s}(a.default.Component);t.default=y,b(y,"propTypes",{children:r.default.node,ellipsis:r.default.node,lines:r.default.oneOfType([r.default.oneOf([!1]),r.default.number]),trimWhitespace:r.default.bool,width:r.default.number,onTruncate:r.default.func}),b(y,"defaultProps",{children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0})}}]);
//# sourceMappingURL=12.21d0cd70.chunk.js.map