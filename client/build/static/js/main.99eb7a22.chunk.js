(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{116:function(e,t,a){e.exports=a(147)},121:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=(a(121),a(16)),i=a(41),s=a(9),m=a(7),u=a(10),p=a(11),d=a(13),h=a(182),f=a(185),E=a(186),b=a(187),g=a(104),y=a(4),v=a(24),O=a.n(v),S=a(54),C=a.n(S),j=a(12),I=a(50),N=a.n(I),k=a(202),w=a(178),A=function(e){var t=e.children,a=e.onClick,n=e.tip,o=e.btnClassName,c=e.tipClassName;return r.a.createElement(k.a,{title:n,className:c},r.a.createElement(w.a,{onClick:a,className:o},t))},x=a(200),R=a(179),T=a(180),_=a(181),U=a(92),D=a.n(U),L=a(19),M=a.n(L),P=function(){return function(e){e({type:"CLEAR_ERRORS"})}},F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.deleteScream=function(){e.props.deleteScream(e.props.screamId),e.setState({open:!1})},e.state={open:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(A,{tip:"Delete Scream",onClick:this.handleOpen},r.a.createElement(D.a,{color:"primary"})),r.a.createElement(x.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(R.a,null,"Are you sure you want to delete ?"),r.a.createElement(T.a,null,r.a.createElement(_.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(_.a,{onClick:this.deleteScream,color:"secondary"},"Delete"))))}}]),t}(n.Component),W=Object(j.b)(null,{deleteScream:function(e){return function(t){console.log(e),M.a.delete("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams/".concat(e)).then((function(){t({type:"DELETE_SCREAM",payload:e})})).catch((function(e){return console.log(e)}))}}})(F),B=a(184),Y=a(95),G=a.n(Y),H=a(183),z=a(62),K=a.n(z),V=a(72),X=a.n(V),q=a(94),J=a.n(q),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).likedScream=function(){return!(!a.props.user.likes||!a.props.user.likes.find((function(e){return e.screamId===a.props.screamId})))},a.likeScream=function(){a.props.likeScream(a.props.screamId)},a.unlikeScream=function(){a.props.unlikeScream(a.props.screamId)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.user.authenticated?this.likedScream()?r.a.createElement(A,{tip:"unlike",onClick:this.unlikeScream},r.a.createElement(J.a,{color:"primary"})):r.a.createElement(A,{tip:"like",onClick:this.likeScream},r.a.createElement(X.a,{color:"primary"})):r.a.createElement(l.b,{to:"/login"},r.a.createElement(A,{tip:"Like"},r.a.createElement(X.a,{color:"primary"})))}}]),t}(n.Component),Q={likeScream:function(e){return function(t){M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams/".concat(e,"/like")).then((function(e){t({type:"LIKE_SCREAM",payload:e.data})})).catch((function(e){return console.log(e)}))}},unlikeScream:function(e){return function(t){M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams/".concat(e,"/unlike")).then((function(e){t({type:"UNLIKE_SCREAM",payload:e.data})})).catch((function(e){return console.log(e)}))}}},Z=Object(j.b)((function(e){return{user:e.user}}),Q)($),ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.comments;return r.a.createElement(h.a,{container:!0},a?a.map((function(e,o){var c=e.body,i=e.createdAt,s=e.userImage,m=e.userHandle;return r.a.createElement(n.Fragment,{key:i},r.a.createElement(h.a,{item:!0,sm:12},r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,sm:2},r.a.createElement("img",{src:s,alt:"user",className:t.commentImage})),r.a.createElement(h.a,{item:!0,sm:9},r.a.createElement("div",{className:t.commentData},r.a.createElement(g.a,{variant:"h5",component:l.b,to:"/user/".concat(m),color:"primary"},m),r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},O()(i).format("h: mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:t.invisibleSeperator}),r.a.createElement(g.a,{variant:"body1"},c))))),o!==a.length-1&&r.a.createElement("hr",{className:t.visibleSeperator}))})):null)}}]),t}(n.Component),te=Object(y.a)({commentImage:{maxWidth:100,objectFit:"cover",borderRadius:"50%",height:100},commentData:{marginLeft:60},visibleSeperator:{widith:"100%",marginBottom:20,borderBottom:"1px solid rgba(0,0,0,0.1)"},invisibleSeperator:{border:"none",margin:4}})(ee),ae=a(198),ne=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).componentWillReceiveProps=function(t){t.UI.errors&&e.setState({errors:t.UI.errors})},e.handleSubmit=function(t){t.preventDefault();var a={body:e.state.body};e.props.submitComment(a,e.props.screamId),e.setState({body:"",errors:{}})},e.handleChange=function(t){e.setState({body:t.target.value})},e.state={body:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.authenticated,n=this.state.errors;return a?r.a.createElement(h.a,{container:!0},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ae.a,{onChange:this.handleChange,type:"text",name:"body",multiline:!0,row:"3",error:!!n.comment,helperText:n.comment,value:this.state.body,lable:"Add comment",placeholder:"Enter your comment...",fullWidth:!0,className:t.textField}),r.a.createElement(_.a,{type:"submit",onClick:this.handleSubmit,color:"primary",variant:"contained",className:t.button},"Add comment"))):null}}]),t}(n.Component),re=Object(j.b)((function(e){return{UI:e.UI,authenticated:e.user.authenticated}}),{submitComment:function(e,t){return function(a){M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams/".concat(t,"/comment"),e).then((function(e){a({type:"SUBMIT_COMMENT",payload:e.data}),a((function(e){e({type:"CLEAR_ERRORS"})}))})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}})(Object(y.a)({button:{mariginTop:5}})(ne)),oe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleOpen=function(){var t=e.props,a=t.userHandle,n=t.screamId,r=window.location.pathname,o="/user/".concat(a,"/scream/").concat(n);r===o&&(r="/user/".concat(a)),window.history.pushState(null,null,o),e.setState({open:!0,oldPath:r,newPath:o}),e.props.getScream(e.props.screamId)},e.handleClose=function(){window.history.pushState(null,null,e.state.oldPath),e.setState({open:!1}),e.props.clearErrors()},e.state={open:!1,oldPath:"",newPath:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.openDialog&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.scream,o=a.screamId,c=a.body,i=a.createdAt,s=a.userHandle,m=a.likeCount,u=a.commentCount,p=a.userImage,d=a.comments,f=e.UI.loading?r.a.createElement("div",{className:t.spinnerDiv},r.a.createElement(H.a,{size:200,color:"primary",thickness:2})):r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{container:!0,spacing:6},r.a.createElement(h.a,{item:!0,sm:5},r.a.createElement("img",{src:p,alt:"Profile",className:t.profileImage})),r.a.createElement(h.a,{item:!0,sm:7},r.a.createElement(g.a,{variant:"h5",color:"primary",component:l.b,to:"/user/".concat(s)},"@",s),r.a.createElement("hr",{className:t.invisibleSeperator}),r.a.createElement(g.a,{color:"textSecondary",variant:"body2"},O()(i).format("h:mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:t.invisibleSeperator}),r.a.createElement(g.a,{variant:"body1"},c),r.a.createElement(Z,{screamId:o}),r.a.createElement("span",null,m," Likes"),r.a.createElement(A,{tip:"comments"},r.a.createElement(N.a,{color:"primary"})),r.a.createElement("span",null,u," comments"))),r.a.createElement("hr",{className:t.visibleSeperator}),r.a.createElement(te,{comments:d}),r.a.createElement(re,{screamId:o}));return r.a.createElement(n.Fragment,null,r.a.createElement(A,{onClick:this.handleOpen,tip:"Expand",className:t.expandButton},r.a.createElement(G.a,{color:"primary"})),r.a.createElement(x.a,{open:this.state.open,fullWidth:!0,onClose:this.handleClose,maxWidth:"sm"},r.a.createElement(A,{tip:"close",onClick:this.handleClose,tipClassName:t.closeButton},r.a.createElement(K.a,null)),r.a.createElement(B.a,{className:t.dialogContent},f)))}}]),t}(n.Component),ce={getScream:function(e){return function(t){t({type:"LOADING_UI"}),M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams/".concat(e)).then((function(e){t({type:"SET_SCREAM",payload:e.data}),t({type:"STOP_LOADING"})})).catch((function(e){return console.log(e)}))}},clearErrors:P},le=Object(j.b)((function(e){return{scream:e.data.scream,UI:e.UI}}),ce)(Object(y.a)({invisibleSeperator:{border:"none",margin:4},profileImage:{maxWidth:200,height:200,objectFit:"cover",borderRadius:"50%"},dialogContent:{padding:20},closeButton:{position:"absolute",left:"90%"},spinnerDiv:{textAlign:"center",marginBottom:50,marginTop:50},visibleSeperator:{widith:"100%",marginBottom:20,border:"1px solid rgba(0,0,0,0.1)"}})(oe)),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){O.a.extend(C.a);var e=this.props,t=e.classes,a=e.scream,n=a.body,o=a.createdAt,c=a.userImage,i=a.userHandle,s=a.screamId,m=a.likeCount,u=a.commentCount,p=e.user,d=p.authenticated,h=p.credentials.handle,y=d&&i===h?r.a.createElement(W,{screamId:s}):null;return r.a.createElement(f.a,{className:t.card},r.a.createElement(E.a,{image:c,title:"Profile Image",className:t.image}),r.a.createElement(b.a,{className:t.content},r.a.createElement(g.a,{variant:"h5",color:"primary",component:l.b,to:"/users/".concat(i)},i),r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},O()(o).fromNow()),y,r.a.createElement(g.a,{variant:"body1"},n),r.a.createElement(Z,{screamId:s}),r.a.createElement("span",null,m," Likes"),r.a.createElement(A,{tip:"comments"},r.a.createElement(N.a,{color:"primary"})),r.a.createElement("span",null,u," comments"),r.a.createElement(le,{screamId:s,userHandle:i,openDialog:this.props.openDialog})))}}]),t}(n.Component),se=Object(j.b)((function(e){return{user:e.user}}))(Object(y.a)({card:{display:"flex",marginBottom:20},image:{minWidth:200,objectFit:"cover"},content:{padding:25}})(ie)),me=a(14),ue=function(){return function(e){e({type:"LOADING_USER"}),M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){console.log(e)}))}},pe=function(){return function(e){localStorage.removeItem("FBIdToken"),delete M.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},de=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),M.a.defaults.headers.common.Authorization=t},he=a(188),fe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleOpen=function(){e.setState({open:!0}),e.mapUserCredentialsToSate(e.props.credentials)},e.handleSubmit=function(){var t={bio:e.state.bio,location:e.state.location,website:e.state.website};e.props.editUserDetails(t),e.handleClose()},e.handleClose=function(){e.setState({open:!1})},e.handleChange=function(t){e.setState(Object(me.a)({},t.target.name,t.target.value))},e.mapUserCredentialsToSate=function(t){e.setState({bio:t.bio?t.bio:"",location:t.location?t.location:"",website:t.website?t.website:""})},e.state={bio:"",website:"",location:"",open:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.credentials;this.mapUserCredentialsToSate(e)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{placement:"top",title:"Edit Profile"},r.a.createElement(w.a,{onClick:this.handleOpen,className:e.button},r.a.createElement(he.a,{color:"primary",className:e.button}))),r.a.createElement(x.a,{open:this.state.open,fullWidth:!0,onClose:this.handleClose,maxWidth:"sm"},r.a.createElement(R.a,null,"Edit your details"),r.a.createElement(B.a,null,r.a.createElement("form",null,r.a.createElement(ae.a,{name:"bio",type:"text",onChange:this.handleChange,label:"Bio",placeholder:"A short decription about yourself",className:e.textField,multiline:!0,row:"3",value:this.state.bio,fullWidth:!0}),r.a.createElement(ae.a,{name:"location",type:"text",onChange:this.handleChange,className:e.textField,label:"Location",placeholder:"Enter youtr location",value:this.state.location,fullWidth:!0}),r.a.createElement(ae.a,{name:"website",type:"text",onChange:this.handleChange,className:e.textField,label:"Website",placeholder:"Enter your website",fullWidth:!0,value:this.state.website}))),r.a.createElement(T.a,null,r.a.createElement(_.a,{onClick:this.handleClose,variant:"contained",color:"primary"},"Cancel"),r.a.createElement(_.a,{onClick:this.handleSubmit,variant:"contained",color:"primary"},"Submit"))))}}]),t}(n.Component),Ee={editUserDetails:function(e){return function(t){t({type:"LOADING_USER"}),M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/user",e).then((function(e){t(ue())})).catch((function(e){return console.log(e)}))}}},be=Object(j.b)((function(e){return{credentials:e.user.credentials}}),Ee)(Object(y.a)({button:{color:"primary",float:"right"}})(fe)),ge=a(103),ye=a(189),ve=a(190),Oe=a(191),Se=a(192),Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleInputChange=function(e){var t=e.target.files[0],n=new FormData;n.append("image",t,t.name),a.props.uploadImage(n)},a.handleEditPicture=function(){document.getElementById("imageInput").click()},a.handleLogoutClick=function(){a.props.logoutUser()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.user,o=a.credentials,c=o.handle,i=o.createdAt,s=o.bio,m=o.location,u=o.imgUrl,p=o.website,d=a.loading,h=a.authenticated;return d?r.a.createElement(n.Fragment,null,r.a.createElement(H.a,{color:"primary",size:30})):h?r.a.createElement(ge.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:u,className:"profile-image",alt:"Profile"}),r.a.createElement("input",{type:"file",id:"imageInput",onChange:this.handleInputChange,hidden:"hidden"}),r.a.createElement(k.a,{title:"Edit Profile Image",placement:"top"},r.a.createElement(w.a,{onClick:this.handleEditPicture},r.a.createElement(he.a,{color:"primary"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(ye.a,{component:l.b,to:"/user/".concat(c),variant:"body2",color:"primary"},"@",c),r.a.createElement("hr",null),s&&r.a.createElement(g.a,{variant:"body2"},s),m&&r.a.createElement(n.Fragment,null,r.a.createElement(ve.a,{color:"primary"}),r.a.createElement("span",null,m),r.a.createElement("hr",null)),p&&r.a.createElement(n.Fragment,null,r.a.createElement(Oe.a,{color:"primary"}),r.a.createElement("a",{href:p,ref:"noopener noreferrer",target:"_blank"}," ",p),r.a.createElement("hr",null)),r.a.createElement(Se.a,{color:"primary"}),r.a.createElement("span",null,O()(i).format("MMM YYYY")),r.a.createElement(_.a,{variant:"contained",onClick:this.handleLogoutClick,color:"primary"},"Logout")),r.a.createElement(be,null))):r.a.createElement(ge.a,{className:t.paper},r.a.createElement(g.a,{variant:"body2",align:"center"},"No profile found , please login"),r.a.createElement("div",{className:t.buttons},r.a.createElement(_.a,{variant:"contained",color:"primary",component:l.b,to:"/login"},"Login"),r.a.createElement(_.a,{variant:"contained",color:"secondary",component:l.b,to:"/signin"},"Signin")))}}]),t}(n.Component),je={logoutUser:pe,uploadImage:function(e){return function(t){t({type:"LOADING_USER"}),M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/user/image",e).then((function(){t(ue())})).catch((function(e){return console.log(e)}))}}},Ie=Object(j.b)((function(e){return{user:e.user}}),je)(Object(y.a)({paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}})(Ce)),Ne=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getScreams()}},{key:"render",value:function(){var e=this.props.data,t=e.screams,a=e.loading?r.a.createElement("p",null,"LOADING....."):t.map((function(e,t){return r.a.createElement(se,{key:t,scream:e})}));return r.a.createElement(h.a,{container:!0,spacing:10},r.a.createElement(h.a,{item:!0,sm:8,xs:12},a),r.a.createElement(h.a,{item:!0,sm:4,xs:12},r.a.createElement(Ie,null)))}}]),t}(n.Component),ke=Object(j.b)((function(e){return{data:e.data}}),{getScreams:function(){return function(e){e({type:"LOADING_DATA"}),M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams").then((function(t){e({type:"SET_SCREAMS",payload:t.data})})).catch((function(t){e({type:"SET_SCREAMS",payload:[]})}))}}})(Ne),we=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){e.setState(Object(me.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,handle:e.state.handle};e.props.signUpUser(a,e.props.history)},e.state={email:"",password:"",confirmPassword:"",handle:"",errors:{},loading:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.UI.loading,a=e.classes;console.log(t);var n=this.state.errors;return r.a.createElement(h.a,{container:!0,className:a.form},r.a.createElement(h.a,{item:!0,sm:!0}),r.a.createElement(h.a,{item:!0,m:!0},r.a.createElement(g.a,{variant:"h3",className:a.pageTitle},"Signup"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(ae.a,{name:"email",type:"email",onChange:this.handleChange,value:this.state.email,id:"email",label:"Email",helperText:n.email,error:!!n.email,className:a.textField,fullWidth:!0}),r.a.createElement(ae.a,{name:"password",type:"password",onChange:this.handleChange,value:this.state.password,id:"password",label:"Password",helperText:n.password,error:!!n.password,className:a.textField,fullWidth:!0}),r.a.createElement(ae.a,{name:"confirmPassword",type:"password",onChange:this.handleChange,value:this.state.confirmPassword,id:"confirmPassword",label:"Confirm Password",helperText:n.confirmPassword,error:!!n.confirmPassword,className:a.textField,fullWidth:!0}),r.a.createElement(ae.a,{name:"handle",type:"handle",onChange:this.handleChange,value:this.state.handle,id:"handle",label:"handle",helperText:n.handle,error:!!n.handle,className:a.textField,fullWidth:!0}),n.general&&r.a.createElement(g.a,{variant:"body2",className:a.customError},n.general),r.a.createElement(_.a,{type:"submit",variant:"contained",color:"primary",className:a.button,disabled:t},"Signup",t&&r.a.createElement(H.a,{className:a.progress,size:30})),r.a.createElement("br",null),r.a.createElement("small",null,"Aready have an account ? login  ",r.a.createElement(l.b,{to:"/login"},"here")))),r.a.createElement(h.a,{item:!0,sm:!0}))}}]),t}(n.Component),Ae={signUpUser:function(e,t){return function(a){a({type:"LOADING_UI"}),M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/signup",e).then((function(e){de(e.data.token),a(ue()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},xe=Object(j.b)((function(e){return{user:e.user,UI:e.UI}}),Ae)(Object(y.a)({form:{textAlign:"center"},textField:{margin:"10px auto 10px auto"},pageTitle:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}})(we)),Re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){e.setState(Object(me.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.state={email:"",password:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.props.classes,a=this.props.UI.loading;return r.a.createElement(h.a,{container:!0,className:t.form},r.a.createElement(h.a,{item:!0,sm:!0}),r.a.createElement(h.a,{item:!0,m:!0},r.a.createElement(g.a,{variant:"h3",className:t.pageTitle},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(ae.a,{name:"email",type:"email",onChange:this.handleChange,value:this.state.email,id:"email",label:"Email",helperText:e.email,error:!!e.email,className:t.textField,fullWidth:!0}),r.a.createElement(ae.a,{name:"password",type:"password",onChange:this.handleChange,value:this.state.password,id:"password",label:"Password",helperText:e.password,error:!!e.password,className:t.textField,fullWidth:!0}),e.general&&r.a.createElement(g.a,{variant:"body2",className:t.customError},e.general),r.a.createElement(_.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"Login",a&&r.a.createElement(H.a,{className:t.progress,size:30})),r.a.createElement("br",null),r.a.createElement("small",null,"don't have a account ? signup  ",r.a.createElement(l.b,{to:"/signup"},"here")))),r.a.createElement(h.a,{item:!0,sm:!0}))}}]),t}(n.Component),Te={loginUser:function(e,t){return function(a){a({type:"LOADING_UI"}),M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/login",e).then((function(e){de(e.data.token),a(ue()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},_e=Object(j.b)((function(e){return{user:e.user,UI:e.UI}}),Te)(Object(y.a)({form:{textAlign:"center"},textField:{margin:"10px auto 10px auto"},pageTitle:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}})(Re)),Ue=a(195),De=a(196),Le=a(97),Me=a.n(Le),Pe=a(5),Fe=a.n(Pe),We=a(193),Be=a(201),Ye=a(101),Ge=a(63),He=a.n(Ge),ze=a(194),Ke=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleOpen=function(t){e.setState({anchorEl:t.target})},e.handleClose=function(){e.setState({anchorEl:null})},e.onMenuOpened=function(){var t=e.props.notifications.filter((function(e){return 0==e.read})).map((function(e){return e.notificationId}));e.props.markNotificationsRead(t)},e.state={anchorEl:null},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this;O.a.extend(C.a);var a=this.props.notifications,o=this.state.anchorEl;e=a&&a.length>0&&a.filter((function(e){return 0==e.read})).length>0?r.a.createElement(We.a,{badgeContent:a.filter((function(e){return 0==e.read})).length,color:"secondary"},r.a.createElement(He.a,null)):r.a.createElement(He.a,null);var c=a&&a.length>0?a.map((function(e){var a="like"===e.type?"liked":"commented on",n=O()(e.createdAt).fromNow(),o=e.read?"primary":"secondary",c="like"===e.type?r.a.createElement(ze.a,{color:o,style:{marginTop:10}}):r.a.createElement(N.a,{color:o,style:{marginTop:10}});return r.a.createElement(Be.a,{onClick:t.handleClose,key:e.createdAt},c,r.a.createElement(g.a,{component:l.b,variant:"body1",to:"/user/".concat(e.recipient,"/scream/").concat(e.screamId)},"".concat(e.sender," ").concat(a," on your scream ").concat(n)))})):r.a.createElement(Be.a,{onClick:this.handleClose},"You have no notifications");return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{placement:"top",title:"notifications"},r.a.createElement(w.a,{"aria-owns":o?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleOpen},e)),r.a.createElement(Ye.a,{anchorEl:o,open:Boolean(o),onClose:this.handleClose,onEntered:this.onMenuOpened},c))}}]),t}(n.Component);Notification.propTypes={markNotificationsRead:Fe.a.object.isRequired,notifications:Fe.a.array.isRequired};var Ve=Object(j.b)((function(e){return{notifications:e.user.notifications}}),{markNotificationsRead:function(e){return function(t){M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/notifications",e).then((function(){t({type:"MARK_NOTIFICATIONS_READ"})})).catch((function(e){console.log(e)}))}}})(Ke),Xe=a(96),qe=a.n(Xe),Je=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1,errors:"",body:""}),console.log("state",e.state)},e.handleChange=function(t){e.setState({body:t.target.value})},e.handleSubmit=function(t){if(t.preventDefault(),""!=e.state.body.trim()){var a={body:e.state.body};e.props.postScream(a),e.setState({errors:{},open:!1,body:""})}else{e.setState({errors:{body:"body must not be empty"}})}},e.componentWillReceiveProps=function(t){t.UI.errors&&e.setState({errors:t.UI.errors})},e.state={open:!1,body:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.errors;console.log(e);var t=this.props,a=t.classes,o=t.UI.loading;return r.a.createElement(n.Fragment,null,r.a.createElement(A,{tip:"Post a scream",onClick:this.handleOpen},r.a.createElement(qe.a,{color:"primary"})),r.a.createElement(x.a,{open:this.state.open,fullWidth:!0,onClose:this.handleClose,maxWidth:"sm"},r.a.createElement(A,{tip:"close",onClick:this.handleClose,tipClassName:a.closeButton},r.a.createElement(K.a,null)),r.a.createElement(R.a,null,"Post a Scream"),r.a.createElement(B.a,null,r.a.createElement("form",null,r.a.createElement(ae.a,{fullWidth:!0,name:"body",onChange:this.handleChange,value:this.state.body,type:"text",multiline:!0,row:"3",placeholder:"Enter scream here",label:"Scream!!",error:!!e.body,helperText:e.body,id:"body"}),r.a.createElement(_.a,{type:"submit",onClick:this.handleSubmit,disabled:o,variant:"contained",color:"primary",className:a.submitButton},"submit",o&&r.a.createElement(H.a,{className:a.spinnerProgress,size:30}))))))}}]),t}(n.Component),$e=Object(j.b)((function(e){return{UI:e.UI}}),{postScream:function(e){return function(t){t({type:"LOADING_UI"}),M.a.post("https://us-central1-social-media-7f318.cloudfunctions.net/api/screams",e).then((function(e){t({type:"POST_SCREAM",payload:e.data}),t({type:"CLEAR_ERRORS"})})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}}})(Object(y.a)({submitButton:{position:"relative",marginTop:10,float:"right"},spinnerProgress:{position:"absolute"},closeButton:{position:"absolute",left:"91%",top:"6%"}})(Je)),Qe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handlePostScream=function(){console.log("post scream clicked")},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.authenticated;return r.a.createElement(Ue.a,{position:"fixed"},r.a.createElement(De.a,{className:"nav-container"},e?r.a.createElement(n.Fragment,null,r.a.createElement($e,null),r.a.createElement(Ve,null),r.a.createElement(k.a,{title:"Home",placement:"top"},r.a.createElement(w.a,{onClick:this.handlePostScream,component:l.b,to:"/"},r.a.createElement(Me.a,null)))):r.a.createElement(n.Fragment,null,r.a.createElement(_.a,{color:"inherit",component:l.b,to:"/"},"Home"),r.a.createElement(_.a,{color:"inherit",component:l.b,to:"/login"},"Login"),r.a.createElement(_.a,{color:"inherit",component:l.b,to:"/signup"},"Signup"))))}}]),t}(n.Component),Ze=Object(j.b)((function(e){return{authenticated:e.user.authenticated}}))(Qe),et=a(100),tt=a(197),at=a(98),nt=a.n(at),rt=a(2),ot=Object(j.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(rt.a)(e,["component","authenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(i.a,{to:"/"}):r.a.createElement(t,e)}}))})),ct=a(46),lt=a(99),it=a(28),st=a(21),mt={screams:[],loading:!1,scream:{}},ut={authenticated:!1,loading:!1,credentials:{},likes:[],notifications:[]},pt={loading:!1,errors:{}},dt=[lt.a],ht=Object(ct.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(st.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return ut;case"SET_USER":return Object(st.a)({loading:!1,authenticated:!0},t.payload);case"LOADING_USER":return Object(st.a)({},e,{loading:!0});case"LIKE_SCREAM":return Object(st.a)({},e,{likes:[].concat(Object(it.a)(e.likes),[{userHandle:e.credentials.handle,screamId:t.payload.screamId}])});case"UNLIKE_SCREAM":return Object(st.a)({},e,{likes:e.likes.filter((function(e){return e.screamId!==t.payload.screamId}))});case"MARK_NOTIFICATIONS_READ":return e.notifications.forEach((function(e){return e.read=!0})),Object(st.a)({},e);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCREAMS":return Object(st.a)({},e,{screams:t.payload,loading:!1});case"SET_SCREAM":return Object(st.a)({},e,{scream:t.payload});case"LOADING_DATA":return Object(st.a)({},e,{loading:!0});case"LIKE_SCREAM":case"UNLIKE_SCREAM":var a=e.screams.findIndex((function(e){return e.screamId===t.payload.screamId}));return e.screams[a]=t.payload,e.scream.screamId===t.payload.screamId&&(e.scream=t.payload),Object(st.a)({},e);case"DELETE_SCREAM":var n=e.screams.findIndex((function(e){return e.screamId===t.payload}));return e.screams.splice(n,1),Object(st.a)({},e);case"POST_SCREAM":return Object(st.a)({},e,{screams:[t.payload].concat(Object(it.a)(e.screams))});case"SUBMIT_COMMENT":var r=e.screams.findIndex((function(e){return e.screamId===t.payload.screamId}));return e.scream.comments.push(t.payload),e.scream.commentCount+=1,e.screams[r]=e.scream,e;default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(st.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(st.a)({},e,{loading:!1,errors:{}});case"LOADING_UI":return Object(st.a)({},e,{loading:!0,errors:{}});case"STOP_LOADING":return Object(st.a)({},e,{loading:!1});default:return e}}}),ft=Object(ct.e)(ht,{},Object(ct.d)(ct.a.apply(void 0,dt),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Et=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.profile,o=a.createdAt,c=a.handle,i=a.imgUrl,s=a.bio,m=a.website,u=a.location;return r.a.createElement(ge.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:i,className:"profile-image",alt:"Profile"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(ye.a,{component:l.b,to:"/user/".concat(c),variant:"body2",color:"primary"},"@",c),r.a.createElement("hr",null),s&&r.a.createElement(g.a,{variant:"body2"},s),u&&r.a.createElement(n.Fragment,null,r.a.createElement(ve.a,{color:"primary"}),r.a.createElement("span",null,u),r.a.createElement("hr",null)),m&&r.a.createElement(n.Fragment,null,r.a.createElement(Oe.a,{color:"primary"}),r.a.createElement("a",{href:m,ref:"noopener noreferrer",target:"_blank"}," ",m),r.a.createElement("hr",null)),r.a.createElement(Se.a,{color:"primary"}),r.a.createElement("span",null,O()(o).format("MMM YYYY")))))}}]),t}(n.Component),bt=Object(y.a)({paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative"},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}}})(Et),gt=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={profile:null,screamIdParam:null},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.handle,a=this.props.match.params.screamId;a&&this.setState({screamIdParam:a}),this.props.getUserDetails(t),M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/user/".concat(t)).then((function(t){e.setState({profile:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.data,t=e.screams,a=e.loading,n=this.state.screamIdParam,o=a?r.a.createElement("p",null,"Loading..."):null===t?r.a.createElement("p",null,"No Screams Posted by user"):n?t.map((function(e){return e.screamId!==n?r.a.createElement(se,{key:e.screamId,scream:e}):r.a.createElement(se,{key:e.screamId,scream:e,openDialog:!0})})):t.map((function(e){return r.a.createElement(se,{key:e.screamId,scream:e})}));return r.a.createElement(h.a,{container:!0,spacing:10},r.a.createElement(h.a,{item:!0,sm:8,xs:12},o),r.a.createElement(h.a,{item:!0,sm:4,xs:12},null==this.state.profile?r.a.createElement("p",null,"Loading Profile...."):r.a.createElement(bt,{profile:this.state.profile})))}}]),t}(n.Component),yt=Object(j.b)((function(e){return{data:e.data}}),{getUserDetails:function(e){return function(t){t({type:"LOADING_DATA"}),M.a.get("https://us-central1-social-media-7f318.cloudfunctions.net/api/user/".concat(e)).then((function(e){t({type:"SET_SCREAMS",payload:e.data.screams})})).catch((function(e){console.log(e),t({type:"SET_SCREAMS",payload:null})}))}}})(gt),vt=Object(et.a)({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"},typography:{useNextVariants:!0}}}),Ot=localStorage.FBIdToken;Ot&&(1e3*nt()(Ot).exp<Date.now()?(ft.dispatch(pe()),window.location.href="/login"):(ft.dispatch({type:"SET_AUTHENTICATED"}),M.a.defaults.headers.common.Authorization=Ot,ft.dispatch(ue())));var St=function(){return r.a.createElement(tt.a,{theme:vt},r.a.createElement(j.a,{store:ft},r.a.createElement(l.a,null,r.a.createElement(Ze,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:ke}),r.a.createElement(ot,{exact:!0,path:"/signup",component:xe}),r.a.createElement(ot,{exact:!0,path:"/login",component:_e}),r.a.createElement(i.b,{exact:!0,path:"/user/:handle",component:yt}),r.a.createElement(i.b,{exact:!0,path:"/user/:handle/scream/:screamId",component:yt}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(St,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[116,1,2]]]);
//# sourceMappingURL=main.99eb7a22.chunk.js.map