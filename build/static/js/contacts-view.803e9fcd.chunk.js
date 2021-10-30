(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{211:function(t,e,n){t.exports={list:"ContactList_list__COOk3"}},214:function(t,e,n){t.exports={form:"ContactForm_form__3CYMJ",textField:"ContactForm_textField__3lLjO",input:"ContactForm_input__3sZqE",btn:"ContactForm_btn__1xj1H"}},215:function(t,e,n){t.exports={wrapper:"ContactsView_wrapper__1KSWS",title:"ContactsView_title__1dV4u",add:"ContactsView_add__2e5JL"}},216:function(t,e,n){t.exports={Modal__backdrop:"Modal_Modal__backdrop__1i9Yt",Modal__content:"Modal_Modal__content__2THrF"}},237:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return $}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return b})),n.d(r,"addContact",(function(){return j})),n.d(r,"deleteContact",(function(){return f}));var c={};n.r(c),n.d(c,"getContacts",(function(){return O})),n.d(c,"getLoading",(function(){return m})),n.d(c,"getError",(function(){return p})),n.d(c,"getFilter",(function(){return C})),n.d(c,"getVisibleContacts",(function(){return _}));var a=n(40),o=n(0),i=n(21),s=n(35),u=n.n(s),l=n(13),d=n(27),b=function(){return function(t){t(Object(l.fetchContactsRequest)()),u.a.get("/contacts").then((function(e){var n=e.data;return t(Object(l.fetchContactsSuccess)(n))})).catch((function(e){t(Object(l.fetchContactsError)(e)),404===e.response.status?d.b.info("There is no such user's collection!"):500===e.response.status?d.b.error("Oops! Server error! Please try later!"):d.b.error("Something went wrong! Please reload the page!")}))}},j=function(t,e){return function(n){var r={name:t,number:e};n(Object(l.addContactRequest)()),u.a.post("/contacts",r).then((function(t){var e=t.data;return n(Object(l.addContactSuccess)(e))})).catch((function(t){n(Object(l.addContactError)(t)),400===t.response.status?d.b.error("Contact creation error!"):d.b.error("Something went wrong! Please reload the page!")}))}},f=function(t){return function(e){e(Object(l.deleteContactRequest)()),u.a.delete("/contacts/".concat(t)).then((function(){return e(Object(l.deleteContactSuccess)(t))})).catch((function(t){e(Object(l.deleteContactError)(t)),404===t.response.status?d.b.info("There is no such user's collection!"):500===t.response.status?d.b.error("Oops! Server error! Please try later!"):d.b.error("Something went wrong! Please reload the page!")}))}},h=n(53),O=function(t){return t.contacts.items},m=function(t){return t.contacts.isLoading},p=function(t){return t.contacts.error},C=function(t){return t.contacts.filter},_=Object(h.a)([O,C],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),x=n(194),g=n(212),v=n.n(g),w=n(190),y=n(211),k=n.n(y),S=n(195),F=n(160),L=n(233),E=n(232),N=n(242),M=n(234),P=n(78),V=n.n(P),W=n(3);var q=function(){var t=Object(i.b)(),e=Object(i.c)(c.getVisibleContacts),n=Object(i.c)(c.getContacts);return Object(W.jsxs)(W.Fragment,{children:[n.length>0&&Object(W.jsx)(S.a,{className:k.a.list,children:e.map((function(e){var n=e.name,c=e.number,a=e.id;return Object(W.jsxs)(F.a,{children:[Object(W.jsx)(E.a,{children:Object(W.jsx)(N.a,{children:Object(W.jsx)(V.a,{"aria-label":"person"})})}),Object(W.jsx)(L.a,{primary:n}),Object(W.jsx)(L.a,{color:"primary",primary:c}),Object(W.jsx)(M.a,{children:Object(W.jsx)(x.a,{id:a,onClick:function(){return t(r.deleteContact(a))},edge:"end","aria-label":"delete",children:Object(W.jsx)(v.a,{})})})]},a)}))}),0===n.length&&Object(W.jsx)(w.a,{color:"primary",variant:"h5",children:"There are no contacts in the phone book now"})]})},T=(n(213),n(231)),J=(n(65),n(214)),R=n.n(J),H=n(236);var Y=function(t){var e=t.onClose,n=Object(i.b)(),s=Object(i.c)(c.getContacts),u=(Object(i.c)(c.getLoading),Object(o.useState)("")),l=Object(a.a)(u,2),b=l[0],j=l[1],f=Object(o.useState)(""),h=Object(a.a)(f,2),O=h[0],m=h[1],p=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":j(r);break;case"number":m(r);break;default:return}},C=function(){j(""),m(""),e()};return Object(W.jsxs)("form",{className:R.a.form,onSubmit:function(t){return t.preventDefault(),function(t){return s.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(b)?Object(d.b)("".concat(b," is already in the phonebook.")):function(t){return s.find((function(e){return e.number===t}))}(O)?Object(d.b)("\ud83e\udd14 ".concat(O," is already in the phonebook.")):function(t,e){return""===t.trim()||""===e.trim()}(b,O)?d.b.info("Enter the contact's"):(n(r.addContact(b,O)),void C())},children:[Object(W.jsx)(H.a,{label:"Name",variant:"outlined",color:"primary",type:"text",name:"name",fullWidth:!0,value:b,onChange:p,className:R.a.textField}),Object(W.jsx)(H.a,{label:"Number",variant:"outlined",color:"primary",type:"phone",name:"number",fullWidth:!0,value:O,onChange:p,className:R.a.textField}),Object(W.jsx)(T.a,{variant:"contained",color:"primary",size:"large",fullWidth:!0,type:"submit",children:"Add contact"})]})};var z=function(){var t=Object(i.b)(),e=Object(i.c)(c.getFilter),n=Object(i.c)(c.getContacts);return Object(W.jsx)(W.Fragment,{children:n.length>0&&Object(W.jsx)(H.a,{label:"Filter",variant:"outlined",type:"text",value:e,fullWidth:!0,color:"primary",onChange:function(e){return t(l.filterContact(e.target.value))}})})},A=n(215),D=n.n(A),K=n(235),Z=n(217),B=n.n(Z),G=n(9),I=n(216),Q=n.n(I),U=document.querySelector("#modal-root");function X(t){var e=t.onClose,n=t.children;Object(o.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]);var r=function(t){"Escape"===t.code&&e()};return Object(G.createPortal)(Object(W.jsx)("div",{className:Q.a.Modal__backdrop,onClick:function(t){t.currentTarget===t.target&&e()},children:Object(W.jsx)("div",{className:Q.a.Modal__content,children:n})}),U)}function $(){var t=Object(i.b)(),e=Object(o.useState)(!1),n=Object(a.a)(e,2),c=n[0],s=n[1];Object(o.useEffect)((function(){return t(r.fetchContacts())}),[t]);var u=function(){s(!c)};return Object(W.jsxs)(K.a,{className:D.a.wrapper,maxWidth:"xs",children:[Object(W.jsx)(w.a,{className:D.a.title,color:"primary",variant:"h3",children:"Contacts"}),Object(W.jsx)(z,{}),Object(W.jsx)(q,{}),Object(W.jsx)(x.a,{onClick:u,className:D.a.add,color:"primary","aria-label":"add contact",children:Object(W.jsx)(B.a,{})}),c&&Object(W.jsx)(X,{onClose:u,children:Object(W.jsx)(Y,{onClose:u})})]})}}}]);
//# sourceMappingURL=contacts-view.803e9fcd.chunk.js.map