(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,a){e.exports={NotScrollable:"Layout_NotScrollable__1m24j"}},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},12:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1-DrF",LeftGroup:"Navbar_LeftGroup__15DbB",MiddleGroup:"Navbar_MiddleGroup__QnEsH",RightGroup:"Navbar_RightGroup__3oyrn",Cart:"Navbar_Cart__1XzFU",MobileCart:"Navbar_MobileCart__3X2Wa",Desktop:"Navbar_Desktop__2cx5j",MenuBtn:"Navbar_MenuBtn__2bKAO",MenuBtnBurger:"Navbar_MenuBtnBurger__3lf1H",NotVisible:"Navbar_NotVisible__1l7yI",Open:"Navbar_Open__2hEnh"}},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=a(2),l=a(21),s=a(4),u=a(3),m=a(39),d=a.n(m),p=d.a.create({baseURL:"https://mern-ecommerce-289019.firebaseio.com/"}),g=(a(113),a(12)),b=a.n(g),E=a(68),O=a.n(E),_=a(69),f=a.n(_),h=a(14);function S(e){return r.a.createElement(h.b,{to:"/ecommerce"},r.a.createElement("img",{className:e.className,id:f.a.KeoLogo,src:O.a,alt:"logo-img"}))}a(115);var C=a(44),v=a.n(C),L=a(133);function N(e){return r.a.createElement("li",null,r.a.createElement(h.c,{to:e.to},e.children))}var I=a(70),w=a.n(I);var j=Object(s.b)((function(e){return{isLoggedIn:e.isLoggedIn}}),(function(e){return{onLoginClicked:function(){return e({type:"LOGIN_CLICKED"})}}}))((function(e){return r.a.createElement(h.c,{to:"/signin",className:w.a.LoginBtn},"Welcome to KEO! ",r.a.createElement("br",null)," ",e.isLoggedIn?"Have a nice shopping!":"Login/Signup")}));var y=Object(s.b)((function(e){return{numberOfItems:e.cart.numberOfItems}}),(function(e){return{onLoginClicked:function(){return e({type:"LOGIN_CLICKED"})}}}))((function(e){return r.a.createElement("nav",{className:b.a.Navbar},r.a.createElement("div",{className:b.a.LeftGroup},r.a.createElement(S,{className:e.sidebarIsOpen?b.a.NotVisible:""}),r.a.createElement("div",{className:"".concat(b.a.Cart," ").concat(b.a.MobileCart," ").concat(e.sidebarIsOpen?b.a.NotVisible:"")},r.a.createElement(h.c,{to:"/cart"},r.a.createElement(v.a,{fontSize:"large"})),r.a.createElement("span",null,e.numberOfItems)),r.a.createElement("div",{onClick:e.btnClick,className:b.a.MenuBtn+" "+(e.sidebarIsOpen?b.a.Open:"")},r.a.createElement("div",{className:b.a.MenuBtnBurger}))),r.a.createElement("div",{className:b.a.Desktop},r.a.createElement("ul",{className:b.a.MiddleGroup},r.a.createElement(N,{to:"/ecommerce"},"PRODUCTS"),r.a.createElement(N,{to:"/about-us"},"ABOUT US"),r.a.createElement(N,{to:"/contact"},"CONTACT US")),r.a.createElement("div",{className:b.a.RightGroup},r.a.createElement("div",{className:b.a.Cart},r.a.createElement(L.a,null,r.a.createElement(h.c,{to:"/cart"},r.a.createElement(v.a,{fontSize:"large"})," ")),r.a.createElement("span",null,e.numberOfItems)),r.a.createElement(j,null))))})),T=a(8),D=a.n(T),k=a(74),A=a.n(k);function x(e){return r.a.createElement("li",null,e.children)}var R=Object(s.b)((function(e){return{state:e}}),(function(e){return{onSidebarToggled:function(){return window.scrollTo(0,0),console.log("sidebar toggled"),e({type:"SIDEBAR_TOGGLED"})},onLoginClicked:function(){return e({type:"LOGIN_CLICKED"})}}}))((function(e){return r.a.createElement("div",{className:D.a.Sidebar+" "+(e.sidebarIsOpen?D.a.Open:D.a.Close)},r.a.createElement(S,{className:D.a.Logo}),r.a.createElement(j,{className:"".concat(D.a.LoginBtn," ").concat(D.a.Mobile)}),r.a.createElement("nav",null,r.a.createElement("ul",{className:D.a.NavItems},r.a.createElement(x,null,"RANGO DE PRECIOS ",r.a.createElement("br",null),r.a.createElement("span",null,"de"),r.a.createElement("input",{onChange:e.minPriceSelected,className:D.a.RangeSearch,type:"number"}),r.a.createElement("br",null),r.a.createElement("span",null,"hasta"),r.a.createElement("input",{onChange:e.maxPriceSelected,className:D.a.RangeSearch,type:"number"})),r.a.createElement(x,null,r.a.createElement("div",{className:D.a.CategoriesFlex},"CATEGORIAS",r.a.createElement(A.a,{onClick:e.arrowClicked,fontSize:"large",className:"fas fa-chevron-down ".concat(D.a.Arrow," ").concat(e.showCategories?D.a.ArrowOpen:D.a.ArrowClose)})),e.showCategories?r.a.createElement("ul",{className:D.a.Categories},e.categories.map((function(t){return r.a.createElement("li",{className:"category-li",key:t+1,onClick:function(t){e.changeColor(t),e.categorySelected(t)}},t)}))):null),r.a.createElement(N,{className:D.a.NavLinkItem,to:"/ecommerce",onClick:function(){return console.log("clicked")}},"PRODUCTOS"),r.a.createElement(N,{className:D.a.NavLinkItem,to:"/about-us",onClick:function(){return console.log("clicked")}},"NOSOTROS"),r.a.createElement(N,{className:D.a.NavLinkItem,to:"/contact",onClick:function(){return console.log("clicked")}},"CONTACTANOS"))))})),P=a(75),G=a.n(P);function B(e){return e.show?r.a.createElement("div",{onClick:e.backdropClicked,className:G.a.Backdrop}):null}var U=a(27),M=a.n(U);function F(e){return r.a.createElement("button",{onClick:function(){return e.searchClicked()},className:M.a.SearchButton+" "+(e.sidebarIsOpen?M.a.Open:M.a.Close)+" "+(e.desktop?M.a.Desktop:M.a.Mobile)},"Buscar")}var q=Object(s.b)((function(e){return{onSearchOptions:Object(i.a)({},e.onSearchOptions),sidebarIsOpen:e.sidebarIsOpen}}),(function(e){return{onSidebarToggled:function(){return window.scrollTo(0,0),console.log("sidebar toggled"),e({type:"SIDEBAR_TOGGLED"})},onSearchClicked:function(){return e({type:"SEARCH_BUTTON_CLICKED"})},onCategorySelected:function(t){return e({type:"CATEGORY_SELECTED",payload:t.target.innerHTML.toLowerCase()})},onTalleSelected:function(t){return e({type:"TALLE_SELECTED",payload:t.target.value})},onMinPriceSelected:function(t){return e({type:"MIN_PRICE_SELECTED",payload:t.target.value})},onMaxPriceSelected:function(t){return e({type:"MAX_PRICE_SELECTED",payload:t.target.value})}}}))((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{show:e.sidebarIsOpen,backdropClicked:function(){return e.onSidebarToggled()}}),r.a.createElement(y,{sidebarIsOpen:e.sidebarIsOpen,btnClick:function(){return e.onSidebarToggled()}}),r.a.createElement(R,{sidebarToggled:function(){return console.log("sidebar toggled f"),e.onSidebarToggled()},sidebarIsOpen:e.sidebarIsOpen,arrowClicked:function(){return c(!o)},showCategories:o,categorySelected:function(t){return e.onCategorySelected(t)},talleSelected:function(t){return e.onTalleSelected(t)},minPriceSelected:function(t){return e.onMinPriceSelected(t)},maxPriceSelected:function(t){return e.onMaxPriceSelected(t)},categories:["Hoodies","Pantalones","Remeras","Todos"],changeColor:function(e){return function(e){Array.from(document.querySelectorAll(".category-li")).map((function(e){return e.style.color="white"})),e.target.style.color="#f6b646"}(e)}}),r.a.createElement(F,{sidebarIsOpen:e.sidebarIsOpen,searchClicked:function(){e.onSidebarToggled(),console.log("[Navigation] clicked"),e.searchClicked(),e.onSearchClicked()},desktop:!0}),r.a.createElement(F,{sidebarIsOpen:e.sidebarIsOpen,searchClicked:function(){e.onSidebarToggled(),console.log("[Navigation] clicked"),e.searchClicked(),e.onSearchClicked()},mobile:!0}))})),V=(a(117),a(34)),H=a.n(V),X=a(76),K=a.n(X),W=a(61),z=a.n(W),Y=a(62),Q=a.n(Y),J=a(63),Z=a.n(J),$=a(64),ee=a.n($),te=a(65),ae=a.n(te),ne=a(66),re=a.n(ne);var oe=Object(s.b)((function(e){return{isLoggedIn:e.isLoggedIn,cart:Object(i.a)({},e.cart)}}),(function(e){return{onShowingLogin:function(){return e({type:"LOGIN_OPENED"})},onNoResultsAvailable:function(){return e({type:"RESULTS_AVAILABLE_TOGGLED"})},onAddedToCart:function(t,a,n){return e({type:"PRODUCT_ADDED",payload:{item:{id:a,quantity:1},price:n}})}}}))((function(e){var t,a=Object(n.useState)(0),o=Object(l.a)(a,2),c=o[0],i=o[1];"1"===e.id&&(t=ae.a),"2"===e.id&&(t=z.a),"3"===e.id&&(t=Q.a),"4"===e.id&&(t=Z.a),"6"===e.id&&(t=ee.a),"7"===e.id&&(t=re.a);var s=function(){e.cart.items.forEach((function(t){if(t===e.id){i((function(e){return e+1}))}}))};return r.a.createElement("div",{id:e.id,className:H.a.ShopItem},r.a.createElement("div",{className:H.a.ImgDiv},r.a.createElement("img",{src:t,alt:e.alt})),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",{className:"".concat(H.a.Text," ").concat(H.a.Price)},"$",e.price),r.a.createElement("button",{onClick:function(t){return function(t,a,n){e.isLoggedIn?(0===c&&e.onAddedToCart(t,a,n),s()):e.onShowingLogin()}(t,e.id,e.price)}},"Add to cart",r.a.createElement(K.a,null))))})),ce=a(77),ie=a.n(ce),le=a(78),se=a.n(le);function ue(){return r.a.createElement("div",{className:se.a.Loader})}var me=Object(s.b)((function(e){return{config:Object(i.a)({},e.onSearchOptions),filterOptionsSelected:e.filterOptionsSelected}}),(function(e){return{onResultsAvailable:function(){return console.log("dispatched"),e({type:"RESULTS_AVAILABLE_TOGGLED"})}}}))((function(e){return r.a.createElement("div",{className:ie.a.Grid},e.loading?r.a.createElement(ue,null):e.itemsShown.map((function(t){return r.a.createElement(oe,{key:t.id,id:t.id,name:t.name,category:t.category,talles:t.talles,image:t.image,alt:t.alt,price:t.price,addedToCart:function(t,a,n){return e.addedToCart(t,a,n)}})})))}));var de=Object(s.b)((function(e){return{resultsAvailable:e.resultsAvailable,productsFound:e.productsFound}}))((function(e){return r.a.createElement("section",{id:"products"},!1===e.resultsAvailable?null:e.productsFound?"todos"===e.showing?r.a.createElement("h1",null,"TODOS LOS PRODUCTOS"):r.a.createElement("h1",null,e.showing.toUpperCase()):r.a.createElement("h1",null,"No products match that search."),r.a.createElement(me,{loading:e.loading,showing:e.showing,addedToCart:function(t,a,n){return e.addedToCart(t,a,n)},itemsShown:e.itemsShown}))})),pe=a(28),ge=a.n(pe),be=a(80),Ee=a.n(be),Oe=a(79),_e=a.n(Oe),fe=a(81),he=a.n(fe);function Se(){return r.a.createElement("section",null,r.a.createElement("main",null,r.a.createElement("h1",null,"We are KEO, an apparel retailer."),r.a.createElement("h3",null,"Our shop is located in Concordia, Entre R\xedos."),r.a.createElement("hr",null),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi vitae odio pretium porta ut vel lorem. Pellentesque hendrerit augue vitae est tincidunt dictum. Aenean viverra maximus nisl, non scelerisque enim porttitor in. Fusce ultricies fermentum tellus viverra pretium. Vivamus sit amet sapien quis mi dictum consequat. Suspendisse sed sagittis lectus. Phasellus sed neque tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu nunc mollis, venenatis erat eget, sodales dolor. In aliquam posuere consectetur. Nunc et odio ut nisl scelerisque semper vel id leo. Duis placerat, ante in eleifend interdum, ipsum ligula porttitor urna, in fermentum sem arcu et ex."),r.a.createElement("hr",null),r.a.createElement("h3",{className:ge.a.Flex},"Follow us on socials",r.a.createElement("i",{className:"fas fa-arrow-down fa-2x"})),r.a.createElement("div",{className:ge.a.Redes},r.a.createElement(L.a,null,r.a.createElement("a",{target:"blank",href:"https://www.instagram.com/",className:ge.a.Instagram},r.a.createElement(_e.a,{fontSize:"large"}))),r.a.createElement(L.a,null,r.a.createElement("a",{target:"blank",href:"https://www.facebook.com/",className:ge.a.Facebook},r.a.createElement(Ee.a,{fontSize:"large"}))),r.a.createElement(L.a,null,r.a.createElement("a",{target:"blank",href:"https://www.whatsapp.com/",className:ge.a.Whatsapp},r.a.createElement(he.a,{fontSize:"large"}))))))}var Ce=a(82),ve=a.n(Ce);function Le(){return r.a.createElement("section",null,r.a.createElement("main",null,r.a.createElement("h1",null,"Business inquiries"),r.a.createElement("i",{className:"fas fa-arrow-down"}),r.a.createElement("h3",null,r.a.createElement("a",{className:ve.a.MailTo,href:"mailto:business@keo.com"},"business@keo.com")),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi vitae odio pretium porta ut vel lorem. Pellentesque hendrerit augue vitae est tincidunt dictum. Aenean viverra maximus nisl, non scelerisque enim porttitor in. Fusce ultricies fermentum tellus viverra pretium. Vivamus sit amet sapien quis mi dictum consequat. Suspendisse sed sagittis lectus. Phasellus sed neque tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu nunc mollis, venenatis erat eget, sodales dolor. In aliquam posuere consectetur. Nunc et odio ut nisl scelerisque semper vel id leo. Duis placerat, ante in eleifend interdum, ipsum ligula porttitor urna, in fermentum sem arcu et ex.")))}var Ne=a(45),Ie=a.n(Ne),we=a(35),je=a.n(we),ye=a(46),Te=a(134),De=a(47),ke=a.n(De);var Ae=Object(s.b)((function(e){return{isLoggedIn:e.isLoggedIn}}),(function(e){return{onHandleLogin:function(){return e({type:"LOGGED_IN"})},onHandleLogout:function(){return e({type:"LOGGED_OUT"})}}}))((function(e){var t=function(){var t=Object(ye.a)(je.a.mark((function t(){return je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoggedIn?e.onHandleLogout():e.onHandleLogin(),t.next=3,p.get("http://localhost:5000/api/auth/google");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:ke.a.LoginForm},e.showText?e.isLoggedIn?r.a.createElement("h2",null,"You are logged in. ",r.a.createElement("br",null),"Have a nice shopping!"):r.a.createElement("h2",null,"Sign up or login to get extra functionality!"):null,r.a.createElement("div",{className:ke.a.LogoDiv},r.a.createElement(S,null)),r.a.createElement(Te.a,{onClick:function(){return t()},variant:"outlined",size:"large",color:"default"},e.isLoggedIn?"Log Out":"Sign in"))})),xe=a(48),Re=a.n(xe);var Pe=Object(s.b)((function(e){return{products:e.products,cartItems:e.cart.items}}),(function(e){return{}}))((function(e){return"1"===e.id&&ae.a,"2"===e.id&&z.a,"3"===e.id&&Q.a,"4"===e.id&&Z.a,"6"===e.id&&ee.a,"7"===e.id&&re.a,r.a.createElement("div",{id:e.id,className:Re.a.CartItem},r.a.createElement("div",{className:Re.a.ImgDiv},r.a.createElement("img",{src:e.image,alt:void 0})),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("h3",null,"x",e.quantity),r.a.createElement(Te.a,{variant:"outlined",size:"small"},"Remove")))}));var Ge=Object(s.b)((function(e){return{isLoggedIn:e.isLoggedIn,products:e.products,cart:Object(i.a)({},e.cart),itemsInCart:e.itemsInCart}}))((function(e){return r.a.createElement("section",null,e.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your cart"),r.a.createElement("div",{className:Ie.a.Cart},e.cart.items.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Total: $",e.cart.totalPrice),r.a.createElement("div",{className:Ie.a.Grid},e.cart.items.forEach((function(t){return e.products.map((function(e){if(t.id===e.id){e.id;var a=e.name;e.alt;return r.a.createElement(Pe,{key:t.id,id:t.id,name:a,quantity:t.quantity})}}))})))):r.a.createElement("h3",null,"You have no items in your cart."))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},"You need to sign in to add products to your cart!"),r.a.createElement(Ae,null)))})),Be=a(49),Ue=a.n(Be);var Me=Object(s.b)((function(e){return{showingLogin:e.showingLogin}}),(function(e){return{onNotShowingLogin:function(){return e({type:"LOGIN_MODAL_CLOSED"})}}}))((function(e){return r.a.createElement("div",{className:Ue.a.Modal},r.a.createElement(B,{show:e.showingLogin,backdropClicked:function(){return e.onNotShowingLogin()}}),r.a.createElement("div",{className:Ue.a.Modal,style:{transform:e.showingLogin?"translateY(0)":"translateY(-100vh)",opacity:e.showingLogin?"1":"0"}},e.children))}));var Fe=Object(s.b)((function(e){return{cart:Object(i.a)({},e.cart)}}))((function(e){return r.a.createElement("section",null,r.a.createElement(Ae,{showText:!0}))}));var qe=Object(s.b)((function(e){return{isLoggedIn:e.isLoggedIn,showingLogin:e.showingLogin,config:Object(i.a)({},e.onSearchOptions),cart:Object(i.a)({},e.cart),isSidebarOpen:e.sidebarIsOpen}}),(function(e){return{onNoProductsFound:function(){return e({type:"PRODUCTS_NOT_FOUND"})},onProductsFound:function(){return e({type:"PRODUCTS_FOUND"})},onSetProducts:function(t){return e({type:"PRODUCTS_OBTAINED",payload:t})},onCategorySelect:function(t){return e({type:"CATEGORY_SELECTED",payload:t})},onAddedToCart:function(t,a,n){return console.log(n),e({type:"PRODUCT_ADDED",payload:{item:a,price:n,quantity:1}})},onRemovedFromCart:function(){return e({type:"PRODUCT_REMOVED",payload:1})}}}))((function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),m=s[0],d=s[1],g=Object(n.useState)(!1),b=Object(l.a)(g,2),E=b[0],O=b[1],_=Object(n.useState)(null),f=Object(l.a)(_,2),h=(f[0],f[1]);e.isSidebarOpen||e.showingLogin?document.getElementsByTagName("html")[0].style.overflow="hidden":document.getElementsByTagName("html")[0].style.overflow="scroll",Object(n.useEffect)((function(){O(!0),p.get("/products.json").then((function(t){O(!1),c(S(t.data)),e.onSetProducts(S(t.data))})).catch((function(e){O(!1),h(e)}))}),[]),Object(n.useEffect)((function(){C()}),[o,e.config]);var S=function(e){var t=Object.keys(e);return t.map((function(a,n){var r=t[n],o=e[r];return t[n]=o}))},C=function(){var t=[];o.map((function(a){var n;(n=a).category.includes(e.config.selectedCategory)&&(n.talles.includes(" ".concat(e.config.talle)||!1)||"todos"===e.config.talle)&&n.price>=e.config.minPrice&&n.price<=e.config.maxPrice&&(!0,t.push(a))})),d(t)},v=null;return e.showingLogin&&(v=r.a.createElement(Me,null,r.a.createElement(Ae,{showText:!0}))),r.a.createElement(r.a.Fragment,null,v,r.a.createElement(q,{categorySelected:function(t){return e.onCategorySelect(t.target.innerText.toLowerCase())},showing:e.config.selectedCategory,searchClicked:function(){return C()}}),r.a.createElement(u.a,{path:"/about-us",exact:!0,component:Se}),r.a.createElement(u.a,{path:"/contact",exact:!0,component:Le}),r.a.createElement(u.a,{path:"/cart",exact:!0,component:Ge}),r.a.createElement(u.a,{path:"/signin",exact:!0,component:Fe}),r.a.createElement(u.a,{path:"/ecommerce",exact:!0,render:function(){return r.a.createElement(de,{loading:E,showing:e.config.selectedCategory,isSidebarOpen:e.isSidebarOpen,itemsShown:m})}}),r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(de,{loading:E,showing:e.config.selectedCategory,isSidebarOpen:e.isSidebarOpen,itemsShown:m})}}))}));a(119);var Ve=function(){return r.a.createElement(h.a,null,r.a.createElement(qe,null))},He=a(31),Xe=a(50),Ke={products:[],productsFound:!0,isLoggedIn:!0,sidebarIsOpen:!1,showingLogin:!1,cart:{numberOfItems:0,totalPrice:0,items:[]},browseOptions:{selectedCategory:"todos",minPrice:699,maxPrice:2199,talle:"todos"},onSearchOptions:{selectedCategory:"todos",minPrice:699,maxPrice:2199,talle:"todos"}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BUTTON_CLICKED":return Object(i.a)(Object(i.a)({},e),{},{filterOptionsSelected:!0,onSearchOptions:Object(i.a)({},e.browseOptions)});case"PRODUCTS_OBTAINED":return Object(i.a)(Object(i.a)({},e),{},{products:t.payload});case"PRODUCTS_NOT_FOUND":return Object(i.a)(Object(i.a)({},e),{},{productsFound:!1});case"PRODUCTS_FOUND":return Object(i.a)(Object(i.a)({},e),{},{productsFound:!0});case"LOGIN_OPENED":return Object(i.a)(Object(i.a)({},e),{},{showingLogin:!0});case"LOGIN_MODAL_CLOSED":return Object(i.a)(Object(i.a)({},e),{},{showingLogin:!1});case"LOGGED_IN":return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:!0});case"LOGGED_OUT":return Object(i.a)(Object(i.a)({},e),{},{cart:{totalPrice:0,numberOfItems:0,items:[]},isLoggedIn:!1});case"SEARCHBAR_USED":return Object(i.a)(Object(i.a)({},e),{},{browseOptions:Object(i.a)(Object(i.a)({},e.browseOptions),{},{searchBarInput:t.payload})});case"CATEGORY_SELECTED":return Object(i.a)(Object(i.a)({},e),{},{browseOptions:Object(i.a)(Object(i.a)({},e.browseOptions),{},{selectedCategory:t.payload})});case"MIN_PRICE_SELECTED":return Object(i.a)(Object(i.a)({},e),{},{browseOptions:Object(i.a)(Object(i.a)({},e.browseOptions),{},{minPrice:t.payload})});case"MAX_PRICE_SELECTED":return Object(i.a)(Object(i.a)({},e),{},{browseOptions:Object(i.a)(Object(i.a)({},e.browseOptions),{},{maxPrice:t.payload})});case"TALLE_SELECTED":return Object(i.a)(Object(i.a)({},e),{},{browseOptions:Object(i.a)(Object(i.a)({},e.browseOptions),{},{talle:t.payload})});case"RESULTS_AVAILABLE_TOGGLED":return Object(i.a)(Object(i.a)({},e),{},{resultsAvailable:!e.resultsAvailable});case"PRODUCT_ADDED":var a=e.cart.items.findIndex((function(e){return e.id===t.payload.item.id})),n=[];return-1!==a?(e.cart.items[a].quantity++,n=Object(Xe.a)(e.cart.items)):n=[].concat(Object(Xe.a)(e.cart.items),[t.payload.item]),Object(i.a)(Object(i.a)({},e),{},{cart:Object(i.a)(Object(i.a)({},e.cart),{},{numberOfItems:e.cart.numberOfItems+t.payload.item.quantity,totalPrice:e.cart.totalPrice+t.payload.price,items:n})});case"PRODUCT_REMOVED":return Object(i.a)(Object(i.a)({},e),{},{cart:Object(i.a)(Object(i.a)({},e.cart),{},{numberOfItems:e.cart.numberOfItems-t.payload.quantity,totalPrice:e.cart.totalPrice-t.payload.price})});case"SIDEBAR_TOGGLED":return Object(i.a)(Object(i.a)({},e),{},{sidebarIsOpen:!e.sidebarIsOpen});default:return e}};d.a.interceptors.request.use((function(e){return console.log(e),e}));var ze=Object(He.c)(We,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||He.b;c.a.render(r.a.createElement(s.a,{store:ze},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null))),document.getElementById("root"))},27:function(e,t,a){e.exports={SearchButton:"SearchButton_SearchButton__2EXcb",Desktop:"SearchButton_Desktop__2uw9U",Open:"SearchButton_Open__UX-iS",Mobile:"SearchButton_Mobile__qebRn",Close:"SearchButton_Close__2fkDQ"}},28:function(e,t,a){e.exports={Flex:"AboutUs_Flex__gi0R1",Redes:"AboutUs_Redes__3osYN",Instagram:"AboutUs_Instagram__SM__4",Facebook:"AboutUs_Facebook__2JBWA",Whatsapp:"AboutUs_Whatsapp__66d7b"}},34:function(e,t,a){e.exports={ShopItem:"ShopItem_ShopItem__13hWf",ImgDiv:"ShopItem_ImgDiv__2mO3h",Text:"ShopItem_Text__K-5Nq",Price:"ShopItem_Price__3UXkU"}},45:function(e,t,a){e.exports={Cart:"Cart_Cart__1pecw",Grid:"Cart_Grid__2XMdQ"}},47:function(e,t,a){e.exports={LoginForm:"LoginForm_LoginForm__16mrq",LogoDiv:"LoginForm_LogoDiv__3GuOI"}},48:function(e,t,a){e.exports={CartItem:"CartItem_CartItem__1IVVQ",ImgDiv:"CartItem_ImgDiv__3po3b"}},49:function(e,t,a){e.exports={Modal:"Modal_Modal__2F_nG"}},61:function(e,t,a){e.exports=a.p+"static/media/blue-hoodie-kotk.fa3c0e35.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/jean-negro.8252c003.jpeg"},63:function(e,t,a){e.exports=a.p+"static/media/remera-got1.fb78a3d6.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/remera-brba.282bb94c.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/got-hoodie.bf130acb.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/hoodie-pink-floyd.a17f6b83.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/keo-logo2.3580c0aa.jpeg"},69:function(e,t,a){e.exports={KeoLogo:"Logo_KeoLogo__1Q7rw",NotVisible:"Logo_NotVisible__2nwWc"}},70:function(e,t,a){e.exports={LoginBtn:"Welcome_LoginBtn__3ehzk",Sidebar:"Welcome_Sidebar__3RPx3"}},75:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1BqDj"}},77:function(e,t,a){e.exports={Grid:"ItemsWrapper_Grid__ziwLD"}},78:function(e,t,a){},8:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__1Nug4",Logo:"Sidebar_Logo__3139J",Arrow:"Sidebar_Arrow__K7Gao",ArrowClose:"Sidebar_ArrowClose__2DLFH",ArrowOpen:"Sidebar_ArrowOpen__2uxuw",NavItems:"Sidebar_NavItems__37LcI",CategoriesFlex:"Sidebar_CategoriesFlex__34N42",Categories:"Sidebar_Categories__6TrqZ",RangeSearch:"Sidebar_RangeSearch__3SOiW",Talles:"Sidebar_Talles__jVoaB",Open:"Sidebar_Open__2DL1_",Close:"Sidebar_Close__2ZFZy"}},82:function(e,t,a){e.exports={MailTo:"Contact_MailTo__Mi9ib"}},87:function(e,t,a){e.exports=a(120)}},[[87,1,2]]]);
//# sourceMappingURL=main.9ed52603.chunk.js.map