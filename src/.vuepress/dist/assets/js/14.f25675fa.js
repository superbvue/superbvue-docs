(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{306:function(e,t,n){},307:function(e,t,n){"use strict";n(306)},370:function(e,t,n){"use strict";n.r(t);var s=n(0).a.extend({name:"SBFormSelect",data:function(){return{state:{selected:"",options:[{text:"Toggle",value:"first"},{text:"toggle other",value:"second"},{text:"I am  Disabled",value:"third",disabled:!0},{text:"Another text with radio",value:{fourth:4}}]}}},methods:{handleSetSelected:function(e){this.state.selected=e.target.value}}}),a=(n(307),n(43)),l=Object(a.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container border"},[n("br"),e._v(" "),n("select",{staticClass:"form-select",on:{change:e.handleSetSelected}},[n("option",{attrs:{selected:""}},[e._v("Open this select menu")]),e._v(" "),e._l(e.state.options,(function(t){return n("option",{key:t.text},[e._v(e._s(t.text))])}))],2),e._v(" "),n("br"),e._v(" "),n("span",[e._v("Selected: "+e._s(e.state.selected))])])}),[],!1,null,null,null);t.default=l.exports}}]);