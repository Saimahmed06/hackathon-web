(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{172:function(e,a,r){},173:function(e,a,r){},299:function(e,a,r){"use strict";r.r(a);var n=r(0),i=r.n(n),t=r(38),o=r.n(t),s=(r(172),r(173),r(174),r(1));var l=function(){var e=localStorage.getItem("user");return(e=JSON.parse(e))?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:e.name}),Object(s.jsx)("h1",{children:e.email})]}):Object(s.jsx)("div",{children:"You need to Login first"})},c=r(84),d=r.n(c),u=r(92),h=r(339),m=r(334),j=r(337),b=r(49),p="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",g=b.a({name:b.b("Enter your name").required("Name is required"),email:b.b("Enter your email").email("Enter a valid email").required("Email is required"),password:b.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var x=function(){var e=Object(u.a)({validationSchema:g,initialValues:{name:"",email:"",password:""},onSubmit:function(e){d.a.post("".concat(p,"/api/v1/signup"),{name:e.name,email:e.email,password:e.password}).then((function(e){console.log("res: ",e.data),alert("Signup Successfully")})).catch((function(e){console.log(e)}))}});return Object(s.jsxs)("div",{style:{margin:"2rem"},children:[Object(s.jsx)("h1",{children:"Signup page"}),Object(s.jsx)("form",{onSubmit:e.handleSubmit,children:Object(s.jsxs)(h.a,{spacing:2,children:[Object(s.jsx)(m.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Full Name",variant:"outlined",name:"name",value:e.values.name,onChange:e.handleChange,error:e.touched.name&&Boolean(e.errors.name),helperText:e.touched.name&&e.errors.name}),Object(s.jsx)(m.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(s.jsx)(m.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(s.jsx)(j.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Signup"})]})})]})},O=r(23),v=b.a({email:b.b("Enter your email").email("Enter a valid email").required("Email is required"),password:b.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var f=function(){var e=Object(O.f)(),a=Object(u.a)({validationSchema:v,initialValues:{email:"",password:""},onSubmit:function(a){console.log("values: ",a),d.a.post("".concat(p,"/api/v1/login"),{email:a.email,password:a.password}).then((function(a){console.log("res: ",a.data),a.data.email?(localStorage.setItem("user",JSON.stringify(a.data)),alert("Signin Successfully"),e.push("/")):alert(a.data)}))}});return Object(s.jsxs)("div",{style:{margin:"2rem"},children:[Object(s.jsx)("h1",{children:"Login page"}),Object(s.jsx)("form",{onSubmit:a.handleSubmit,children:Object(s.jsxs)(h.a,{spacing:2,children:[Object(s.jsx)(m.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(s.jsx)(m.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(s.jsx)(j.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Login"})]})})]})},w=r(335),y=r(333),S=r(336);var C=function(){var e=Object(O.f)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w.a,{bg:"primary",variant:"dark",children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(w.a.Brand,{onClick:function(){e.push("/")},children:"Database"}),Object(s.jsxs)(S.a,{className:"me-auto",children:[Object(s.jsx)(S.a.Link,{onClick:function(){e.push("/")},children:"Dashboard"}),Object(s.jsx)(S.a.Link,{onClick:function(){e.push("/Sign")},children:"Signup"}),Object(s.jsx)(S.a.Link,{onClick:function(){e.push("/Log")},children:"Login"})]})]})}),Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/Log",children:Object(s.jsx)(f,{})}),Object(s.jsx)(O.a,{path:"/Sign",children:Object(s.jsx)(x,{})}),Object(s.jsx)(O.a,{exact:!0,path:"/",children:Object(s.jsx)(l,{})})]})]})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,340)).then((function(a){var r=a.getCLS,n=a.getFID,i=a.getFCP,t=a.getLCP,o=a.getTTFB;r(e),n(e),i(e),t(e),o(e)}))},L=r(68);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(L.a,{children:Object(s.jsx)(C,{})})}),document.getElementById("root")),E()}},[[299,1,2]]]);
//# sourceMappingURL=main.ddfa5d4a.chunk.js.map