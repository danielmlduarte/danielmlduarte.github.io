(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{43:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(12),r=c.n(n),s=c(11),o=c(16),i=(c(43),c(5)),l=c(7),u=c.n(l),j=c(10),d=(c(45),c.p+"static/media/frontend.6f68868a.png"),b=c(1);var m=function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t,c,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/danielmlduarte/danielmlduarte/master/Daniel%20M%C3%BAcio%20Lima%20Duarte.pdf");case 3:return t=e.sent,e.next=6,t.blob();case 6:c=e.sent,a=window.URL.createObjectURL(c),(n=document.createElement("a")).href=a,n.download="Daniel M\xfacio Lima Duarte.pdf",n.click(),e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"home-main",children:[Object(b.jsx)("img",{className:"home-image",src:d,alt:""}),Object(b.jsxs)("div",{className:"home-main-content",children:[Object(b.jsx)("img",{className:"home-avatar",src:"https://avatars2.githubusercontent.com/u/69773207?s=460&u=3c1497fe8cc953d0419c15955dcaf4b683fc4d70&v=4",alt:"Daniel Profile"}),Object(b.jsxs)("div",{className:"home-text-content",children:[Object(b.jsx)("p",{className:"home-text",children:"Nesse site, voc\xea ir\xe1 encontrar os meus projetos desenvolvidos durante minha forma\xe7\xe3o na Trybe e com quais stacks eu trabalho atualmente."}),Object(b.jsx)("button",{className:"home-button",type:"button",onClick:e,children:"Fa\xe7a o download do meu curr\xedculo"})]})]})]})},p=c(59),h=(c(47),c.p+"static/media/SlackLine.f3f1e1b7.png"),O=c.p+"static/media/FotoPraiaCostas.61e5c69b.jpg",x=c.p+"static/media/FotoMuseuVideoGame1.c98fdb0b.jpg",f=c.p+"static/media/FotoMuseuVideoGame2.02fdcea0.jpg",v=c.p+"static/media/htmlcssjs-nobg.419b59df.png",g=c.p+"static/media/reactredux-nobg.38d5f2c8.png",N=c.p+"static/media/githubvscode-nobg.a6a432b9.png";var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"about-container",children:Object(b.jsxs)("div",{className:"about-container-text",children:[Object(b.jsx)("h3",{children:"Sobre mim."}),Object(b.jsx)("h5",{children:"Eu sou o Daniel, um desenvolvedor front-end e estudante de desenvolvimento web full stack de BH, Minas Gerais."}),Object(b.jsx)("p",{children:"Gosto de transformar problemas complexos em c\xf3digos simples, bonitos e intuitivos. Quando n\xe3o estou codando, voc\xea me ver\xe1 cozinhando, passeando na natureza ou praticando esportes ao ar livre."}),Object(b.jsx)("p",{children:"Desde de pequeno, sempre muito curioso, me apaixonei por tecnologia e pela computa\xe7\xe3o, que pra mim, n\xe3o \xe9 s\xf3 um trabalho, mas um estilo de vida."}),Object(b.jsxs)("div",{className:"about-container-stacks",children:[Object(b.jsx)("img",{src:v,alt:""}),Object(b.jsx)("img",{src:g,alt:""}),Object(b.jsx)("img",{src:N,alt:""})]})]})}),Object(b.jsxs)("div",{className:"about-photo-container",children:[Object(b.jsx)("img",{className:"about-photo",src:h,alt:""}),Object(b.jsx)("img",{className:"about-photo",src:x,alt:""}),Object(b.jsx)("img",{className:"about-photo",src:O,alt:""}),Object(b.jsx)("img",{className:"about-photo",src:f,alt:""})]}),Object(b.jsx)("div",{className:"carousel-photo",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("img",{className:"d-block w-100",src:h,alt:"First slide"})}),Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("img",{className:"d-block w-100",src:x,alt:"Second slide"})}),Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("img",{className:"d-block w-100",src:O,alt:"Third slide"})}),Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("img",{className:"d-block w-100",src:f,alt:"Four slide"})})]})})]})},w=c(18),E="REQUEST_PROJECTS",D="REQUEST_FAILED",R="LIST_PROJECTS",S=function(e){return e.filter((function(e){return"dir"===e.type})).map((function(e){return{name:e.name,files:e.url,url:e.html_url,git:e.git_url}}))},T=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.blob();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t=e.find((function(e){return"description.txt"===e.name})),c="";return t&&(c=T(t.download_url)),c},M=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,n=y(a),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),F=c.p+"static/media/github-brands.e2f07326.svg",P=c.p+"static/media/bg-project.9f8a153a.jpg";var _=function(e){var t=e.project,c=Object(a.useState)(""),n=Object(w.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(w.a)(o,2),l=i[0],d=i[1],m=Object(a.useState)(""),p=Object(w.a)(m,2),h=p[0],O=p[1],x=function(e){if(e)return new Promise((function(t){var c=new FileReader;c.onload=function(){return t(c.result)},c.readAsText(e)}))},f=function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(u.a.mark((function e(){var c,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.files,e.next=3,M(c);case 3:if(""===(a=e.sent)){e.next=12;break}return e.next=7,f(a);case 7:n=(n=e.sent).split("\n"),s(n[0]),d(n[1]),O(n[2]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}));var g=t.url,N=t.name.replaceAll("-"," ").toUpperCase();return Object(b.jsxs)("div",{className:"project-card",children:[Object(b.jsx)("div",{className:"project-image",children:Object(b.jsx)("img",{src:P,alt:""})}),Object(b.jsxs)("div",{className:"project-info",children:[Object(b.jsx)("h3",{children:N}),Object(b.jsx)("p",{children:"".concat(h)}),Object(b.jsx)("p",{children:"Neste projeto usei ".concat(r)}),Object(b.jsx)("p",{children:"Prazo de ".concat(l)}),Object(b.jsxs)("a",{className:"project-button",target:"_blank",rel:"noreferrer",href:g,children:[Object(b.jsx)("img",{src:F,alt:""}),"Visite o reposit\xf3rio"]})]})]})};c(48);var L=Object(o.b)((function(e){return{projectsList:e.projectsReducer.list}}))((function(e){var t=e.projectsList;return Object(b.jsxs)("div",{className:"projects-container",children:[Object(b.jsxs)("div",{className:"projects-text",children:[Object(b.jsx)("h3",{children:"Meus projetos."}),Object(b.jsxs)("p",{children:["Aqui voc\xea ver\xe1 todos os projetos que desenvolvi durante o curso da",Object(b.jsx)("span",{children:" TRYBE. "}),"V\xe3o desde projetos bem simples, feitos somente com",Object(b.jsx)("span",{children:" HTML "}),"e",Object(b.jsx)("span",{children:" CSS, "}),"at\xe9 projetos feitos com",Object(b.jsx)("span",{children:" REACT "}),"usando",Object(b.jsx)("span",{children:" REDUX. "}),"Alguns projetos foram feitos aplicando",Object(b.jsx)("span",{children:" M\xc9TODOS \xc1GEIS "}),", com a colabora\xe7\xe3o de outros colegas."]})]}),Object(b.jsx)("div",{className:"projects-section",children:t.map((function(e,t){return Object(b.jsx)(_,{project:e},t)}))})]})}));c(49);function C(){return Object(b.jsxs)("div",{className:"navbar-content",children:[Object(b.jsx)(s.b,{className:"navbar-header",to:"/",children:Object(b.jsx)("p",{className:"navbar-title",children:"Daniel Duarte - Desenvolvedor Front-End Jr."})}),Object(b.jsxs)("div",{className:"navbar-links",children:[Object(b.jsx)(s.b,{className:"navbar-link",to:"/",children:"HOME"}),Object(b.jsx)(s.b,{className:"navbar-link",to:"/about",children:"SOBRE MIM"}),Object(b.jsx)(s.b,{className:"navbar-link",to:"/projects",children:"PROJETOS"}),Object(b.jsx)(s.b,{className:"navbar-link-button",to:"/contact",children:"ENTRE EM CONTATO COMIGO"})]})]})}c(53);function I(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsx)("p",{children:"\xa9 Daniel Duarte"}),Object(b.jsx)("p",{children:"P\xe1gina feita e constantemente atualizada por mim, Daniel Duarte, com React, Redux e Bootstrap!"})]})}c(54);var A=c.p+"static/media/GitHub-contact.5e5b93a2.png",G=c.p+"static/media/Linkedin-contact.c5f78655.png",B=c.p+"static/media/Outlook-contact.92bfdf00.png",J=c.p+"static/media/Whatsapp-contact.28823176.png";var U=function(){return Object(b.jsxs)("div",{className:"contact-container",children:[Object(b.jsx)("h3",{children:"Entre em contato comigo:"}),Object(b.jsxs)("div",{className:"contact-div",children:[Object(b.jsx)("img",{className:"image-contact",src:B,alt:"logo outlook"}),Object(b.jsx)("a",{href:"mailto:daniel_mld@hotmail.com",className:"contact-link",children:"daniel_mld@hotmail.com"})]}),Object(b.jsxs)("div",{className:"contact-div",children:[Object(b.jsx)("img",{className:"image-contact",src:G,alt:"logo linkedin"}),Object(b.jsx)("a",{href:"http://linkedin.com/in/danielmlduarte",target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"linkedin.com/in/danielmlduarte"})]}),Object(b.jsxs)("div",{className:"contact-div",children:[Object(b.jsx)("img",{className:"image-contact",src:A,alt:"logo github"}),Object(b.jsx)("a",{href:"http://github.com/danielmlduarte",target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"github.com/danielmlduarte"})]}),Object(b.jsxs)("div",{className:"contact-div",children:[Object(b.jsx)("img",{className:"image-contact",src:J,alt:"logo whatsapp"}),Object(b.jsx)("a",{href:"https://wa.me/5531997706994",target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"(31) 9977-06994"})]})]})};var q=function(e){var t=e.match.params.name;return Object(b.jsx)("div",{children:"P\xe1gina de detalhes do projeto ".concat(t)})};c(55);var z=Object(o.b)(null,(function(e){return{fetchProjects:function(t){return e(function(e){var t=e.owner,c=e.repoName,a="https://api.github.com/repos/".concat(t,"/").concat(c,"/contents/");return function(){var e=Object(j.a)(u.a.mark((function e(t){var c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E}),e.prev=1,e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,r=S(n),t({type:R,list:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t((s=e.t0,{type:D,error:s}));case 15:case"end":return e.stop()}var s}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.fetchProjects;return Object(a.useEffect)((function(){t({owner:"danielmlduarte",repoName:"trybe-projects",optionalPath:""})})),Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(i.a,{path:"/about",component:k}),Object(b.jsx)(i.a,{path:"/projects/:name",component:q}),Object(b.jsx)(i.a,{path:"/projects",component:L}),Object(b.jsx)(i.a,{path:"/contact",component:U})]}),Object(b.jsx)(I,{})]})})),H=c(14),V=c(31),Q=c(32),W=c(15),X={isFetching:!1,list:"",error:""};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(W.a)(Object(W.a)({},e),{},{list:t.list,isFetching:!1});case D:return Object(W.a)(Object(W.a)({},e),{},{error:t.error});case E:return Object(W.a)(Object(W.a)({},e),{},{isFetching:!0});default:return e}},K=Object(H.combineReducers)({projectsReducer:Y}),Z=Object(H.createStore)(K,Object(Q.composeWithDevTools)(Object(H.applyMiddleware)(V.a)));r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(o.a,{store:Z,children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.e7e2b667.chunk.js.map