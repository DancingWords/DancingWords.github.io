(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3097:function(e,t,s){"use strict";var a=s("53d6"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"53d6":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=s("f23d"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("div",{staticClass:"content-wrapper"},[s("a-anchor",{attrs:{wrapperClass:"wrapperClass",affix:!0}},[s("a-anchor-link",{attrs:{href:"#intro-anchor",title:"Introduction"}}),s("a-anchor-link",{attrs:{href:"#designspace-anchor",title:"Design Space"}}),s("a-anchor-link",{attrs:{href:"#gallery-anchor",title:"Examples"}})],1),s("div",{staticClass:"header-wrapper-holder"}),s("router-view")],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"title1"},[e._v("\n                DancingWords\n            ")]),s("div",{staticClass:"title2"},[e._v("\n                Exploring the Possibilities of Animated Word Clouds for Expressive Storytelling\n            ")])])])}],o=(s("5c0b"),s("2877")),c={},l=Object(o["a"])(c,r,i,!1,null,null,null),d=l.exports,u=(s("202f"),s("8c4f")),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("Introduction"),s("Design"),s("Gallery")],1)},h=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",attrs:{id:"intro"}},[s("div",{staticStyle:{position:"relative",top:"-100px",height:"0",width:"0"},attrs:{id:"intro-anchor"}}),s("a-divider",{staticClass:"section-title",attrs:{orientation:"left"}},[s("b",[e._v("Introduction")])]),s("div",{staticClass:"section-content video-container"},[s("video",{attrs:{width:"100%",height:"480",controls:""}},[s("source",{attrs:{src:"./source/video/system_overview.mp4"}})])]),e._m(0)],1)},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section-content"},[s("p",{staticClass:"text-container"},[e._v("\n            Word clouds have recently shown the potential as a storytelling medium. By encoding semantic relationships with relative distances between words, word clouds can deliver richer messages than purely visualizing word frequencies. However, current word cloud techniques are still inadequate to tell a proper story due to the lack of means to convey complex information. For example, relative positions of words cannot illustrate multiple character conflicts and complex impacts in the story. In addition, static representations pose challenges to track content evolution over time. In this paper, we explore a storytelling strategy inspired by animation, which takes advantage of both prominent impressions provided by word clouds and expressive visual representations of animation. We first create several exemplars of animated word clouds with designers through a structured iterative design process. These exemplars lead to a preliminary design space that distills essential narrative elements with their design solutions, as well as implications for authoring animated word clouds. Based on the design space, we develop DancingWords, an authoring tool that enables users to interactively generate animated word clouds with automatic layouts. We evaluate the expressiveness and usefulness of our system through several example animated stories and a usability study with general users. The results demonstrate that DancingWords allows users to produce appealing storytelling videos easily and quickly for presentation and communication.\n        ")])])}],b={name:"Introduction"},v=b,m=(s("3097"),Object(o["a"])(v,p,j,!1,null,"7f61eb7a",null)),g=m.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",attrs:{id:"designspace"}},[s("div",{staticStyle:{position:"relative",top:"-100px",height:"0",width:"1px"},attrs:{id:"designspace-anchor"}}),s("a-divider",{staticClass:"section-title",attrs:{orientation:"left"}},[s("b",[e._v("Design Space")])]),s("section",[s("h2",[e._v("1. Display of Contexts")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:"./source/image/context.png",alt:"context",width:"60%",height:"60%"}})]),s("h2",[e._v("2. Cast of Roles")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:"./source/image/role.png",alt:"role",width:"60%",height:"60%"}})]),s("h2",[e._v("3. Event Representations")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:"./source/image/event.png",alt:"event",width:"60%",height:"60%"}})])])],1)},w=[],x={name:"Design"},_=x,k=(s("6a4f"),Object(o["a"])(_,y,w,!1,null,"34266f6c",null)),C=k.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",attrs:{id:"gallery"}},[s("div",{staticStyle:{position:"relative",top:"-100px",height:"0",width:"0"},attrs:{id:"gallery-anchor"}}),s("a-divider",{staticClass:"section-title",attrs:{orientation:"left"}},[s("b",{staticStyle:{"font-size":"28px"}},[e._v("Examples")])]),s("a-carousel",{attrs:{beforeChange:e.beforeChange,afterChange:e.afterChange},scopedSlots:e._u([{key:"customPaging",fn:function(t){return s("a",{},[s("div",{staticClass:"story-title",class:t.i===e.focus?"active":""},[e._v("\n                "+e._s(e.stories[t.i].title)+"\n            ")])])}}])},e._l(e.stories,function(e){return s("Story",{key:e.title,attrs:{story:e}})}),1)],1)},O=[],S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-popover",{staticClass:"story-area",attrs:{title:this.$props.story.title,trigger:"hover",placement:"left"}},[s("div",{staticClass:"story",attrs:{slot:"content"},slot:"content"},[e._v("\n        "+e._s(e.text)+"\n    ")]),s("div",{staticClass:"story-container"},[s("div",{staticClass:"container"},[s("video",{staticClass:"video",attrs:{src:this.$props.story.video,controls:""}})])])])},E=[],$={name:"Story",props:["story"],data(){return{text:""}},mounted(){fetch(this.$props.story.text).then(e=>e.text()).then(e=>this.text=e)}},D=$,P=(s("6ca8"),Object(o["a"])(D,S,E,!1,null,"4b925c0e",null)),I=P.exports,W={name:"gallery",components:{Story:I},data(){return{focus:0,stories:[]}},methods:{beforeChange(){this.focus=-1},afterChange(e){console.log(e),this.focus=e}},mounted(){fetch("./source/demoList.json").then(e=>e.json()).then(e=>e.forEach(e=>this.stories.push(e)))}},q=W,T=(s("aef0"),Object(o["a"])(q,z,O,!1,null,null,null)),M=T.exports,G={name:"home",components:{Gallery:M,Design:C,Introduction:g}},B=G,F=(s("cccb"),Object(o["a"])(B,f,h,!1,null,null,null)),J=F.exports;a["a"].use(u["a"]);var L=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:J}]});a["a"].config.productionTip=!1,a["a"].use(n["a"]),new a["a"]({router:L,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(e,t,s){},"6a4f":function(e,t,s){"use strict";var a=s("90bd"),n=s.n(a);n.a},"6ca8":function(e,t,s){"use strict";var a=s("f615"),n=s.n(a);n.a},"90bd":function(e,t,s){},abcc:function(e,t,s){},aef0:function(e,t,s){"use strict";var a=s("abcc"),n=s.n(a);n.a},cccb:function(e,t,s){"use strict";var a=s("d563"),n=s.n(a);n.a},d563:function(e,t,s){},f615:function(e,t,s){}});
//# sourceMappingURL=app.5089bf31.js.map