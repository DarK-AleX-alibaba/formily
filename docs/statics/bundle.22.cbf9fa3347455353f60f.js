(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{156:function(e,t,a){var r={"./bash":142,"./bash.js":142,"./css":143,"./css.js":143,"./htmlbars":144,"./htmlbars.js":144,"./javascript":145,"./javascript.js":145,"./scss":146,"./scss.js":146,"./typescript":147,"./typescript.js":147};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=156},558:function(e,t,a){"use strict";var r=a(151),n=(a(152),a(153)),c=(a(154),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"createvirtualbox",className:"react-demo-h1"},"createVirtualBox"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"创建一个虚拟盒子组件，就是说这个组件可以作为schema节点描述，但是它并不占数据节点，我们可以使用该API来创建一些布局相关的组件。"),r.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),r.createElement(n,{code:"type createVirtualBox(name : String,component : Function)\n",justCode:!0,lang:"typescript"}),r.createElement("blockquote",{className:"react-demo-blockquote"},r.createElement("p",{className:"react-demo-p"},"为什么需要传name，是因为如果要在json-schema对象中描述，需要可存储，就必须要有一个Key")),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(n,{code:"import {createVirtualBox} from '@alife/rs-uform'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(n,{code:'import {createVirtualBox,SchemaForm} from \'@alife/rs-uform\'\n\nconst Card = createVirtualBox(\'card\',(props)=>{\n   return <div>这是一个卡片{props.children}</div>\n})\n\n//jsx描述\n<SchemaForm>\n   <Card>\n     <Field name="aa" type="string"/>\n   </Card>\n</SchemaForm>\n\n//json-schema描述\n{\n  type:"object",\n  properties:{\n    card:{\n      type:"object",\n      "x-component":"card",\n      properties:{\n         aa:{\n           type:"string"\n         }\n      }\n    }\n  }\n}\n',justCode:!0,lang:"javascript"}))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);
//# sourceMappingURL=bundle.22.cbf9fa3347455353f60f.js.map