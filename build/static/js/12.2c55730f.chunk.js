(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[12],{43:function(e,t,a){"use strict";var n=a(50);a(51),a(53),a(52);n.a.initializeApp({apiKey:"AIzaSyBtqTsT1XUqRQUREtKJ0QSnmHd5YvExHw8",authDomain:"layaak-web.firebaseapp.com",projectId:"layaak-web",storageBucket:"layaak-web.appspot.com",messagingSenderId:"1093914758055",appId:"1:1093914758055:web:b614caead750078d920482"}),t.a=n.a},44:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},49:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),r=a(14),o=a(0),c=a.n(o),i=(a(56),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={mode:document.getElementsByTagName("Body")[0].classList[0]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"float-md-left w-auto mb-2 input-group custom-control custom-switch"},c.a.createElement("label",{id:"switch",className:"switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){"dark"===e.state.mode?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"),document.getElementsByTagName("Body")[0].classList.replace(e.state.mode,localStorage.getItem("mode")),e.setState({mode:localStorage.getItem("mode")})},checked:"dark"===this.state.mode,id:"dark"}),c.a.createElement("span",{className:"slider round"})))}}]),a}(o.Component));t.a=i},55:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),r=a(14),o=a(0),c=a.n(o),i=(a(59),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"b-nav"},c.a.createElement("ul",{className:"b-nav-links"},this.props.paths.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{href:"#"+e,className:"b-nav-link"},e))}))))}}]),a}(o.Component));t.a=i},56:function(e,t,a){},59:function(e,t,a){},74:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),r=a(14),o=a(0),c=a.n(o),i=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.getDetails=function(){var t=e.props.details,a=t.branch,n=t.college,l=t.course,s=t.sem,r=t.crName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},c.a.createElement("img",{alt:"details",src:"https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png"})),c.a.createElement("div",{className:"ann-info text-left"},c.a.createElement("p",null,"Branch: ",c.a.createElement("strong",null,a)),c.a.createElement("p",null,"College: ",c.a.createElement("strong",null,n)),c.a.createElement("p",null,"Course: ",c.a.createElement("strong",null,l)),c.a.createElement("p",null,"Semester: ",c.a.createElement("strong",null,s)),c.a.createElement("p",null,"Class Representative: ",c.a.createElement("strong",null,r))))},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},c.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),a}(o.Component);t.a=i},98:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),s=a(15),r=a(14),o=a(0),c=a.n(o),i=a(74),m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.displayUpdate=function(){switch(e.props.announcement.type){case"announcement":return e.displayAnnouncement();case"poll":return e.displayPoll();case"link":return e.displayLink();default:return}},e.displayAnnouncement=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=a.toDate(),s=l.getDate(),r=m[l.getMonth()-1],o=l.getFullYear(),i=l.getHours(),u="00",d=l.getMinutes();return u=d<10?"0"+String(d):String(d),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ann-preview"},c.a.createElement("h3",null,c.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udce2"))),c.a.createElement("div",{className:"ann-info text-left"},c.a.createElement("h6",{style:{width:"fit-content"},className:"mb-3"},r," ",s,", ",o," at ",i,":",u),c.a.createElement("div",{style:{minHeight:"50%",display:"flex",alignItems:"center"}},c.a.createElement("h4",null,n)),c.a.createElement("div",{style:{position:"absolute",top:"5%",right:"1%"}},e.createButtons())))},e.displayLink=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=t.link,s=a.toDate(),r=s.getDate(),o=m[s.getMonth()-1],i=s.getFullYear(),u=s.getHours(),d="00",p=s.getMinutes();return d=p<10?"0"+String(p):String(p),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ann-preview"},c.a.createElement("h3",null,c.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udd17"))),c.a.createElement("div",{className:"ann-info text-left"},c.a.createElement("h6",{style:{width:"fit-content"},className:"mb-3"},o," ",r,", ",i," at ",u,":",d),c.a.createElement("h4",null,n),c.a.createElement("a",{className:"btn link-btn btn-primary mt-2 float-right",href:l,target:"_blank",rel:"noopener noreferrer"},"Visit Link"),c.a.createElement("div",{style:{position:"absolute",top:"5%",right:"1%"}},e.createButtons())))},e.displayPoll=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=t.yesCount,s=t.yesOption,r=t.noCount,o=t.noOption,i=a.toDate(),u=i.getDate(),d=m[i.getMonth()-1],p=i.getFullYear(),f=i.getHours(),h="00",g=i.getMinutes();h=g<10?"0"+String(g):String(g);var E=100*l/(r+l);Number.isNaN(E)&&(E=0);var b=100*r/(r+l);return Number.isNaN(b)&&(b=0),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ann-preview"},c.a.createElement("h3",null,c.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"))),c.a.createElement("div",{className:"ann-info text-left"},c.a.createElement("h6",{style:{width:"fit-content"},className:"mb-3"},d," ",u,", ",p," at ",f,":",h),c.a.createElement("h4",null,n),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,s),c.a.createElement("td",null,o)),c.a.createElement("tr",null,c.a.createElement("td",null,l),c.a.createElement("td",null,r)))))),c.a.createElement("div",{style:{position:"absolute",top:"5%",right:"1%"}},e.createButtons())))},e.getClass=function(){var t="text-left p-4 mb-4 ";switch(e.props.announcement.type){case"announcement":t+="announcement-card ";break;case"poll":t+="poll-card";break;case"link":t+="link-card";break;default:return}return t},e.createButtons=function(){return c.a.createElement("button",{className:"btn",onClick:function(){return e.props.onDelete(e.props.announcement)}},c.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c"))},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},c.a.createElement("div",{className:"up mx-auto"},this.displayUpdate()))}}]),a}(o.Component),d=a(44),p=a(43),f=a(47),h=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,text:""},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.showHideClassName=function(){return e.state.show?"":"d-none"},e.styles={position:"fixed",background:"pink",color:"black",width:"80%",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:1,boxShadow:"2px 2px 10px 10px rgba(255, 31, 255, 0.226)"},e.getForm=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("label",{className:"m-2 mb-0",style:{fontSize:"18px"}},"Announcement:")),c.a.createElement("input",{type:"text",className:"form-control mr-2",placeholder:"Enter your main text here...",value:e.state.text,name:"text",required:!0,onChange:e.handleChange})),c.a.createElement("button",{className:"btn btn-success m-2",type:"submit"},"Add"))},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.callAddAnnouncement=function(t){t.preventDefault();var a={dateAndTime:p.a.firestore.Timestamp.fromDate(new Date),type:"announcement",text:e.state.text,isOfficial:!0};e.hideModal(),e.props.AddAnnouncement(a),e.setState({text:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn-lg btn-info m-1",onClick:this.showModal},"Add Announcement"),c.a.createElement(f.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,c.a.createElement("h3",{className:"mt-2"},"Add Announcement Details:"))),c.a.createElement(f.a.Body,null,c.a.createElement("form",{onSubmit:this.callAddAnnouncement},this.getForm()))))}}]),a}(o.Component),g=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,yesOption:"",noOption:"",text:""},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.showHideClassName=function(){return e.state.show?"":"d-none"},e.styles={position:"fixed",background:"pink",color:"black",width:"60%",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:1,boxShadow:"2px 2px 10px 10px rgba(255, 31, 255, 0.226)"},e.getForm=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Poll Text:"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Poll Details",name:"text",required:!0,value:e.state.text,onChange:e.handleChange}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"First Option:"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"First option",name:"yesOption",required:!0,value:e.state.yesOption,onChange:e.handleChange}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Second Option:"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Second option",name:"noOption",required:!0,value:e.state.noOption,onChange:e.handleChange}))),c.a.createElement("button",{className:"btn btn-success m-2",onClick:e.hideModal},"Add poll"))},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.callAddPoll=function(t){t.preventDefault();var a={dateAndTime:p.a.firestore.Timestamp.fromDate(new Date),type:"poll",text:e.state.text,yesOption:e.state.yesOption,noOption:e.state.noOption,yesCount:0,noCount:0,isOfficial:!0};e.props.addPoll(a),e.setState({text:"",yesOption:"",noOption:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn-lg btn-info m-1",onClick:this.showModal},"Add Poll"),c.a.createElement(f.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,c.a.createElement("h3",{className:"mt-2"},"Add Poll Details:"))),c.a.createElement(f.a.Body,null,c.a.createElement("form",{onSubmit:this.callAddPoll},this.getForm()))))}}]),a}(o.Component),E=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,link:"",text:""},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.showHideClassName=function(){return e.state.show?"":"d-none"},e.styles={position:"fixed",background:"pink",color:"black",width:"60%",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:1,boxShadow:"2px 2px 10px 10px rgba(255, 31, 255, 0.226)"},e.getForm=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Link:"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"url",className:"form-control",placeholder:"https://link.com",name:"link",value:e.state.link,required:!0,onChange:e.handleChange}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Description:"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"about the link",name:"text",value:e.state.text,required:!0,onChange:e.handleChange}))))},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.callAddAnnouncement=function(t){t.preventDefault();var a={dateAndTime:p.a.firestore.Timestamp.fromDate(new Date),type:"link",text:e.state.text,link:e.state.link,isOfficial:!0};e.props.addLink(a),e.setState({text:"",link:""}),e.hideModal()},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn-lg btn-info m-1",onClick:this.showModal},"Add Link"),c.a.createElement(f.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,c.a.createElement("h3",{className:"mt-2"},"Add Link Details:"))),c.a.createElement(f.a.Body,null,c.a.createElement("form",{onSubmit:this.callAddAnnouncement},this.getForm(),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-success m-2",type:"submit"},"Add Link"))))))}}]),a}(o.Component),b=a(55),v=a(49),y=a(45),N=a.n(y),w=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,url:"",title:"",fileName:"",progress:0,assign:{}},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.showHideClassName=function(){return e.state.show?"":"d-none"},e.browseFile=function(t){var a=t.target.files[0];a&&e.setState({assign:a})},e.uploadAssign=function(){var t=e.state.assign;if(t.name){document.getElementById("progress").classList.remove("hide");var a=p.a.storage().ref("assignment/".concat(e.props.classCode,"/").concat(t.name));a.put(t).on("state_changed",(function(t){var a=t.bytesTransferred/t.totalBytes*100;!function(t){t&&e.setState({progress:t})}(a)}),(function(e){}),(function(){N.a.toast({html:"Uploaded Successfully",classes:"toast success-toast"}),a.getDownloadURL().then((function(a){!function(t,a){t&&a&&e.setState({url:t,fileName:a})}(a,t.name)})).catch((function(e){return console.log(e)}))}))}},e.getForm=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-default"},"Title")),c.a.createElement("input",{type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"Title / Subject",onChange:function(t){e.setState({title:t.target.value})},name:"title",required:!0})),c.a.createElement("div",{className:"custom-file"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile02",onChange:e.browseFile,required:!0}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile02","aria-describedby":"inputGroupFileAddon02"},e.state.assign.name?e.state.assign.name:"Choose File")),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text",id:"inputGroupFileAddon02",onClick:e.uploadAssign,style:{cursor:"pointer"}},"Upload")),c.a.createElement("div",{className:"input-group"},c.a.createElement("progress",{id:"progress",className:"custom-progress-bar hide",value:e.state.progress,max:"100"}," "))),c.a.createElement("button",{className:"btn btn-success m-2",type:"submit"},"Add Assignment"))},e.callAddAssign=function(t){if(t.preventDefault(),e.state.fileName){var a=e.state,n=a.url,l=a.title,s=a.fileName,r={dateAndTime:p.a.firestore.Timestamp.fromDate(new Date),url:n,title:l,fileName:s,isOfficial:!0};e.props.addAssign(r),e.setState({url:"",title:"",fileName:"",assign:{},show:!1}),e.hideModal()}else N.a.toast({html:"Please upload file first",classes:"toast error-toast"})},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn-lg btn-info m-1",onClick:this.showModal},"Upload Assignment"),c.a.createElement(f.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,c.a.createElement("h3",{className:"mt-2"},"Add Assignment Details:"))),c.a.createElement(f.a.Body,null,c.a.createElement("form",{onSubmit:this.callAddAssign},this.getForm()))))}}]),a}(o.Component),A=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.download=function(e){var t=e.substring(e.lastIndexOf("/")+1).split("?")[0].split("%2F")[2];t=decodeURIComponent(t);var a=new XMLHttpRequest;a.responseType="blob",a.onload=function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(a.response),e.download=t,e.style.display="none",document.body.appendChild(e),e.click()},a.open("GET",e),a.send()},e.displayAssignment=function(){var t=e.props.details,a=t.dateAndTime,n=t.title,l=t.url,s=a.toDate(),r=s.getDate(),o=m[s.getMonth()-1],i=s.getFullYear(),u=s.getHours(),d="00",p=s.getMinutes();return d=p<10?"0"+String(p):String(p),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ann-preview"},c.a.createElement("h3",null,c.a.createElement("span",{role:"img",className:"emoji","aria-label":"assignment"},"\ud83d\udcdd"))),c.a.createElement("div",{className:"ann-info text-left"},c.a.createElement("h6",{style:{width:"fit-content"},className:"mb-3"},o," ",r,", ",i," at ",u,":",d),c.a.createElement("h4",null,n),c.a.createElement("span",{onClick:function(){return e.download(l)},className:"btn link-btn btn-primary mt-2 float-right"},"Download File"),c.a.createElement("div",{style:{position:"absolute",top:"5%",right:"1%"}},c.a.createElement("button",{className:"btn",onClick:function(){return e.props.onDelete(e.props.details)}},c.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c")))))},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},c.a.createElement("div",{className:"up mx-auto"},this.displayAssignment()))}}]),a}(o.Component),x=p.a.firestore(),k=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).isMount=!1,e.state={details:[],announcements:[],assignments:[],classId:e.props.classCode},e.collRef=x.collection("classes"),e.docRef=e.collRef.doc(e.state.classId),e.collRefUp=e.docRef.collection("updates"),e.docRefUp=e.collRefUp.doc("announcements"),e.sortAnnouncements=function(){for(var t=e.state.announcements,a=0;a<t.length;a++)for(var n=a+1;n<t.length;n++)if(t[a].dateAndTime<t[n].dateAndTime){var l=t[a];t[a]=t[n],t[n]=l}e.setState({announcements:t})},e.sortAssignments=function(){for(var t=e.state.assignments,a=0;a<t.length;a++)for(var n=a+1;n<t.length;n++)if(t[a].dateAndTime<t[n].dateAndTime){var l=t[a];t[a]=t[n],t[n]=l}e.setState({assignments:t})},e.AddAnnouncement=function(t){e.docRefUp.update({announcements:p.a.firestore.FieldValue.arrayUnion(t)}),e.setState({announcements:[]})},e.deleteAnnouncement=function(t){e.docRefUp.update({announcements:p.a.firestore.FieldValue.arrayRemove(t)}),e.setState({announcements:[]})},e.addAssignment=function(t){e.docRefUp.update({assignments:p.a.firestore.FieldValue.arrayUnion(t)})},e.deleteAssignment=function(t){p.a.storage().ref("assignment/".concat(e.state.classId,"/").concat(t.fileName)).delete().then((function(){alert("Deleted Successfully")})),e.docRefUp.update({assignments:p.a.firestore.FieldValue.arrayRemove(t)})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,this.docRef.onSnapshot((function(t){t.data()&&e.isMount&&e.setState({details:t.data().details})})),this.docRefUp.onSnapshot((function(t){t.data()&&(e.isMount&&e.setState({assignments:t.data().assignments}),t.data().announcements.forEach((function(t){t.isOfficial&&e.isMount&&e.setState({announcements:e.state.announcements.concat(t)})})),e.sortAnnouncements(),e.sortAssignments())}))}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"code-head-btn"},c.a.createElement(v.a,null),c.a.createElement("h1",{className:"mainPageHeading",style:{marginTop:"-3vh"}},"Class Details"),c.a.createElement("i",{onClick:this.props.onHide,className:"fa fa-home float-md-right mb-2 mr-2",style:{cursor:"pointer",fontSize:"30px",color:"#000"}})),c.a.createElement("h2",{id:"Details",className:"subHeading"},"Info:"," "),c.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),c.a.createElement(i.a,{details:this.state.details,onEdit:this.handleDetailsEdit}),c.a.createElement("div",{id:"Assignments"},c.a.createElement("h2",{className:"subHeading"},"Assignments",c.a.createElement("span",{role:"img","aria-label":"assignments"},"\ud83d\udcdd")),c.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),c.a.createElement(w,{addAssign:this.addAssignment,classCode:this.state.classId}),this.state.assignments.length?this.state.assignments.map((function(t){return c.a.createElement(A,{key:t.url,onDelete:e.deleteAssignment,details:t})})):c.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No Assignments pending for the class")),c.a.createElement("div",{id:"Announcements"},c.a.createElement("div",{className:"d-inline container-fluid"},c.a.createElement("h2",{className:"subHeading"},"Manage Announcements"," ",c.a.createElement("span",{role:"img","aria-label":"announcement"},"\ud83d\udce2")),c.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}})),c.a.createElement("div",{className:"d-flex justify-content-center mb-4"},c.a.createElement(h,{AddAnnouncement:this.AddAnnouncement}),c.a.createElement(g,{addPoll:this.AddAnnouncement}),c.a.createElement(E,{addLink:this.AddAnnouncement})),c.a.createElement("div",{className:"key-container"},c.a.createElement("h5",{className:"m-2",style:{textDecoration:"underline"}},"Key"),c.a.createElement("div",{className:"poll-card m-2",style:{width:"150px"}},c.a.createElement("span",{className:"p-2"},c.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udce2"," ")," ","Announcements")),c.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},c.a.createElement("span",{className:"p-2"},c.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udd17"),"Links")),c.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},c.a.createElement("span",{className:"p-2"},c.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"),"Polls")))),c.a.createElement("div",{className:"m-4 mx-n3 ann-container"},this.state.announcements.map((function(t){return c.a.createElement(u,{key:t.dateAndTime,announcement:t,onDelete:e.deleteAnnouncement})}))),c.a.createElement(b.a,{paths:["Details","Assignments","Announcements"]}))}}]),a}(o.Component);t.default=k}}]);
//# sourceMappingURL=12.2c55730f.chunk.js.map