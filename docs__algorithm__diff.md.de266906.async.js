(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{GwIj:function(e,n,t){e.exports=t.p+"static/traverse2.a5a39d1b.png"},JjdP:function(e,n,t){"use strict";t.r(n);var r=t("HaE+"),l=t("o0o1"),a=t.n(l),c=t("LtsZ");n["default"]={"dfs-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,l,c,i,o,u,d,s;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t("TqRt"),e.t0=r,e.next=4,t.e(5).then(t.bind(null,"1OyB"));case 4:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=r,e.next=9,t.e(6).then(t.bind(null,"vuIU"));case 9:return e.t3=e.sent,c=(0,e.t2)(e.t3),e.t4=r,e.next=14,t.e(7).then(t.bind(null,"Ji7U"));case 14:return e.t5=e.sent,i=(0,e.t4)(e.t5),e.t6=r,e.next=19,t.e(4).then(t.bind(null,"LK+K"));case 19:return e.t7=e.sent,o=(0,e.t6)(e.t7),u=function(e){(0,i["default"])(r,e);var t=(0,o["default"])(r);function r(){return(0,l["default"])(this,r),t.apply(this,arguments)}return(0,c["default"])(r,[{key:"render",value:function(){return n.createElement("div",{className:"app"},n.createElement("header",null,"header"),n.createElement(d,null),n.createElement("footer",null,"footer"))}}]),r}(n.Component),d=function(e){(0,i["default"])(r,e);var t=(0,o["default"])(r);function r(){return(0,l["default"])(this,r),t.apply(this,arguments)}return(0,c["default"])(r,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("p",null,"1"),n.createElement("p",null,"2"),n.createElement("p",null,"3"))}}]),r}(n.Component),s=u,e.abrupt("return",s);case 25:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:'class App extends React.Component {\n  render() {\n    return (\n      <div className="app">\n        <header>header</header>\n        <Content />\n        <footer>footer</footer>\n      </div>\n    );\n  }\n}\n\nclass Content extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default App;'}},dependencies:{},identifier:"dfs-demo"}},"01-setstate-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,l,c,i,o,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("TqRt"),e.t0=n,e.next=4,t.e(5).then(t.bind(null,"1OyB"));case 4:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=9,t.e(6).then(t.bind(null,"vuIU"));case 9:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.t4=n,e.next=14,t.e(7).then(t.bind(null,"Ji7U"));case 14:return e.t5=e.sent,c=(0,e.t4)(e.t5),e.t6=n,e.next=19,t.e(4).then(t.bind(null,"LK+K"));case 19:return e.t7=e.sent,i=(0,e.t6)(e.t7),e.t8=n,e.next=24,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 24:return e.t9=e.sent,o=(0,e.t8)(e.t9),u=function(e){(0,c["default"])(t,e);var n=(0,i["default"])(t);function t(){var e;(0,r["default"])(this,t);for(var l=arguments.length,a=new Array(l),c=0;c<l;c++)a[c]=arguments[c];return e=n.call.apply(n,[this].concat(a)),e.state={count:0},e.changeState=function(){var n=e.state.count+1;e.setState({count:e.state.count+1}),n===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")},e.changeState2=function(){var n=e.state.count+1;Promise.resolve().then((function(){e.setState({count:e.state.count+1}),n===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")}))},e}return(0,l["default"])(t,[{key:"render",value:function(){return o["default"].createElement("div",null,o["default"].createElement("p",null,"\u5f53\u524dcount=",this.state.count),o["default"].createElement("button",{onClick:this.changeState},"\u5f02\u6b65+1"),o["default"].createElement("button",{onClick:this.changeState2},"\u540c\u6b65+1"))}}]),t}(o["default"].Component),e.abrupt("return",u);case 28:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default class App extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  changeState = () => {\n    const newCount = this.state.count + 1;\n    this.setState({\n      count: this.state.count + 1,\n    });\n    if (newCount === this.state.count) {\n      console.log('\u540c\u6b65\u6267\u884crender');\n    } else {\n      console.log('\u5f02\u6b65\u6267\u884crender');\n    }\n  };\n\n  changeState2 = () => {\n    const newCount = this.state.count + 1;\n    Promise.resolve().then(() => {\n      this.setState({\n        count: this.state.count + 1,\n      });\n      if (newCount === this.state.count) {\n        console.log('\u540c\u6b65\u6267\u884crender');\n      } else {\n        console.log('\u5f02\u6b65\u6267\u884crender');\n      }\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\u5f53\u524dcount={this.state.count}</p>\n        <button onClick={this.changeState}>\u5f02\u6b65+1</button>\n        <button onClick={this.changeState2}>\u540c\u6b65+1</button>\n      </div>\n    );\n  }\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"01-setstate-demo"}},"hook-state-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,l,c,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=function(){var e=(0,l.useState)(0),n=(0,r["default"])(e,2),t=n[0],a=n[1];return l["default"].createElement("button",{onClick:function(){a(1),a(3),a(2)}},t)},i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r["default"]=e,t&&t.set(e,r),r},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=i,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState } from 'react';\nexport default function App() {\n  const [count, dispatch] = useState(0);\n  return (\n    <button\n      onClick={() => {\n        dispatch(1);\n        dispatch(3);\n        dispatch(2);\n      }}\n    >\n      {count}\n    </button>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-state-demo"}},"hook-summary-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,l,c,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=function(){var e=(0,l.useState)(1),n=(0,r["default"])(e,2),t=n[0],a=n[1];(0,l.useEffect)((function(){console.log("effect 1 created")}));var c=(0,l.useState)(2),i=(0,r["default"])(c,1),o=i[0];return(0,l.useEffect)((function(){console.log("effect 2 created")})),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("button",{onClick:function(){return a(t+1)}},t),l["default"].createElement("button",null,o))},i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r["default"]=e,t&&t.set(e,r),r},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=i,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-summary-demo"}},"hook-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,l,c,i,o,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=function(){Promise.resolve().then((function(){console.log("\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c")}));var e=(0,l.useState)(0),n=(0,r["default"])(e,2),t=n[0],a=n[1];return(0,l.useEffect)((function(){return console.log("\u7b2c1\u4e2aeffect.create dps: []"),function(){console.log("\u7b2c1\u4e2aeffect.destory")}}),[]),(0,l.useEffect)((function(){return console.log("effect.create dps: [count]",t),function(){console.log("\u7b2c2\u4e2aeffect.destory dps: [count]",t)}}),[t]),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("p",null,"You clicked ",t," times"),l["default"].createElement("button",{onClick:function(){return a(t+1)}},"Click me"))},i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r["default"]=e,t&&t.set(e,r),r},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=i,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),u=o,e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  Promise.resolve().then(() => {\n    console.log(\n      '\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c',\n    );\n  });\n  // \u7b2c1\u4e2ahook(useState)\n  const [count, setCount] = useState(0);\n  // \u7b2c2\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('\u7b2c1\u4e2aeffect.create dps: []');\n    return () => {\n      console.log('\u7b2c1\u4e2aeffect.destory');\n    };\n  }, []);\n  // \u7b2c3\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('effect.create dps: [count]', count);\n    return () => {\n      console.log('\u7b2c2\u4e2aeffect.destory dps: [count]', count);\n    };\n  }, [count]);\n  return (\n    <>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n}\nexport default Example;"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo"}}}},Pptb:function(e,n,t){e.exports=t.p+"static/before-traverse.71633a39.png"},Zs1V:function(e){e.exports=JSON.parse("{}")},o6gT:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),l=t.n(r),a=t("dEAq"),c=t("H1Ra");t("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u7b97\u6cd5\u4e4b\u8c03\u548c\u7b97\u6cd5"},l.a.createElement(a["AnchorLink"],{to:"#react-\u7b97\u6cd5\u4e4b\u8c03\u548c\u7b97\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u7b97\u6cd5\u4e4b\u8c03\u548c\u7b97\u6cd5"),l.a.createElement("h2",{id:"\u6982\u5ff5"},l.a.createElement(a["AnchorLink"],{to:"#\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6982\u5ff5"),l.a.createElement("p",null,"\u8c03\u548c\u51fd\u6570(",l.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1274-L1410"},"\u6e90\u7801"),")\u7684\u4f5c\u7528:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7ed9\u65b0\u589e,\u79fb\u52a8,\u548c\u5220\u9664\u8282\u70b9\u8bbe\u7f6e",l.a.createElement("code",null,"fiber.falgs"),"(\u65b0\u589e, \u79fb\u52a8: ",l.a.createElement("code",null,"Placement"),", \u5220\u9664: ",l.a.createElement("code",null,"Deletion"),")"),l.a.createElement("li",null,"\u5982\u679c\u662f\u9700\u8981\u5220\u9664\u7684",l.a.createElement("code",null,"fiber"),", ",l.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L275-L294"},"\u9664\u4e86\u81ea\u8eab\u6253\u4e0a",l.a.createElement("code",null,"Deletion"),"\u4e4b\u5916, \u8fd8\u8981\u5c06\u5176\u6dfb\u52a0\u5230\u7236\u8282\u70b9\u7684",l.a.createElement("code",null,"effects"),"\u94fe\u8868\u4e2d"),"(\u6b63\u5e38\u526f\u4f5c\u7528\u961f\u5217\u7684\u5904\u7406\u662f\u5728",l.a.createElement("code",null,"completeWork"),"\u51fd\u6570, \u4f46\u662f\u8be5\u8282\u70b9(\u88ab\u5220\u9664)\u4f1a\u8131\u79bb",l.a.createElement("code",null,"fiber"),"\u6811, \u4e0d\u4f1a\u518d\u8fdb\u5165",l.a.createElement("code",null,"completeWork"),"\u9636\u6bb5, \u6240\u4ee5\u5728",l.a.createElement("code",null,"beginWork"),"\u9636\u6bb5\u63d0\u524d\u52a0\u5165\u526f\u4f5c\u7528\u961f\u5217).")),l.a.createElement("h2",{id:"\u7279\u6027"},l.a.createElement(a["AnchorLink"],{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6027"),l.a.createElement("p",null,"\u7b97\u6cd5\u590d\u6742\u5ea6\u4f4e, \u4ece\u4e0a\u81f3\u4e0b\u6bd4\u8f83\u6574\u4e2a\u6811\u5f62\u7ed3\u6784, \u65f6\u95f4\u590d\u6742\u5ea6\u88ab\u7f29\u77ed\u5230 O(n)"),l.a.createElement("h2",{id:"\u57fa\u672c\u539f\u7406"},l.a.createElement(a["AnchorLink"],{to:"#\u57fa\u672c\u539f\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u539f\u7406"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6bd4\u8f83\u5bf9\u8c61: ",l.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u4e0e",l.a.createElement("code",null,"ReactElement"),"\u5bf9\u8c61\u76f8\u6bd4\u8f83.",l.a.createElement("ul",null,l.a.createElement("li",null,"\u6ce8\u610f: \u6b64\u5904\u6709\u4e00\u4e2a\u8bef\u533a, \u5e76\u4e0d\u662f\u4e24\u68f5 fiber \u6811\u76f8\u6bd4\u8f83, \u800c\u662f",l.a.createElement("code",null,"\u65e7fiber"),"\u5bf9\u8c61\u4e0e",l.a.createElement("code",null,"\u65b0ReactElement"),"\u5bf9\u8c61\u5411\u6bd4\u8f83, \u7ed3\u679c\u751f\u6210\u65b0\u7684",l.a.createElement("code",null,"fiber\u5b50\u8282\u70b9"),"."),l.a.createElement("li",null,"\u53ef\u4ee5\u7406\u89e3\u4e3a\u8f93\u5165",l.a.createElement("code",null,"ReactElement"),", \u7ecf\u8fc7",l.a.createElement("code",null,"reconcilerChildren()"),"\u4e4b\u540e, \u8f93\u51fa",l.a.createElement("code",null,"fiber"),"."))),l.a.createElement("li",null,"\u6bd4\u8f83\u65b9\u6848:",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5355\u8282\u70b9\u6bd4\u8f83"),l.a.createElement("li",null,"\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83")))),l.a.createElement("h3",{id:"\u5355\u8282\u70b9\u6bd4\u8f83"},l.a.createElement(a["AnchorLink"],{to:"#\u5355\u8282\u70b9\u6bd4\u8f83","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5355\u8282\u70b9\u6bd4\u8f83"),l.a.createElement("p",null,"\u5355\u8282\u70b9\u7684\u903b\u8f91\u6bd4\u8f83\u7b80\u660e, \u5148\u76f4\u63a5\u770b",l.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1135-L1233"},"\u6e90\u7801"),":"),l.a.createElement(c["a"],{code:"// \u53ea\u4fdd\u7559\u4e3b\u5e72\u903b\u8f91\nfunction reconcileSingleElement(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  element: ReactElement,\n  lanes: Lanes,\n): Fiber {\n  const key = element.key;\n  let child = currentFirstChild;\n\n  while (child !== null) {\n    // currentFirstChild !== null, \u8868\u660e\u662f\u5bf9\u6bd4\u66f4\u65b0\u9636\u6bb5\n    if (child.key === key) {\n      // 1. key\u76f8\u540c, \u8fdb\u4e00\u6b65\u5224\u65ad child.elementType === element.type\n      switch (child.tag) {\n        // \u53ea\u770b\u6838\u5fc3\u903b\u8f91\n        default: {\n          if (child.elementType === element.type) {\n            // 1.1 \u5df2\u7ecf\u5339\u914d\u4e0a\u4e86, \u5982\u679c\u6709\u5144\u5f1f\u8282\u70b9, \u9700\u8981\u7ed9\u5144\u5f1f\u8282\u70b9\u6253\u4e0aDeletion\u6807\u8bb0\n            deleteRemainingChildren(returnFiber, child.sibling);\n            // 1.2 \u6784\u9020fiber\u8282\u70b9, \u65b0\u7684fiber\u5bf9\u8c61\u4f1a\u590d\u7528current.stateNode, \u5373\u53ef\u590d\u7528DOM\u5bf9\u8c61\n            const existing = useFiber(child, element.props);\n            existing.ref = coerceRef(returnFiber, child, element);\n            existing.return = returnFiber;\n            return existing;\n          }\n          break;\n        }\n      }\n      // Didn't match. \u7ed9\u5f53\u524d\u8282\u70b9\u70b9\u6253\u4e0aDeletion\u6807\u8bb0\n      deleteRemainingChildren(returnFiber, child);\n      break;\n    } else {\n      // 2. key\u4e0d\u76f8\u540c, \u5339\u914d\u5931\u8d25, \u7ed9\u5f53\u524d\u8282\u70b9\u6253\u4e0aDeletion\u6807\u8bb0\n      deleteChild(returnFiber, child);\n    }\n    child = child.sibling;\n  }\n\n  {\n    // ...\u7701\u7565\u90e8\u5206\u4ee3\u7801, \u53ea\u770b\u6838\u5fc3\u903b\u8f91\n  }\n\n  // \u65b0\u5efa\u8282\u70b9\n  const created = createFiberFromElement(element, returnFiber.mode, lanes);\n  created.ref = coerceRef(returnFiber, currentFirstChild, element);\n  created.return = returnFiber;\n  return created;\n}",lang:"js"}),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5982\u679c\u662f\u65b0\u589e\u8282\u70b9, \u76f4\u63a5\u65b0\u5efa fiber, \u6ca1\u6709\u591a\u4f59\u7684\u903b\u8f91"),l.a.createElement("li",null,"\u5982\u679c\u662f\u5bf9\u6bd4\u66f4\u65b0",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c",l.a.createElement("code",null,"key"),"\u548c",l.a.createElement("code",null,"type"),"\u90fd\u76f8\u540c(\u5373: ",l.a.createElement("code",null,"ReactElement.key")," === ",l.a.createElement("code",null,"Fiber.key")," \u4e14 ",l.a.createElement("code",null,"Fiber.elementType === ReactElement.type"),"), \u5219\u590d\u7528"),l.a.createElement("li",null,"\u5426\u5219\u65b0\u5efa")))),l.a.createElement("p",null,"\u6ce8\u610f: \u590d\u7528\u8fc7\u7a0b\u662f\u8c03\u7528",l.a.createElement("code",null,"useFiber(child, element.props)"),"\u521b\u5efa",l.a.createElement("code",null,"\u65b0\u7684fiber"),"\u5bf9\u8c61, \u8fd9\u4e2a",l.a.createElement("code",null,"\u65b0fiber\u5bf9\u8c61.stateNode = currentFirstChild.stateNode"),", \u5373",l.a.createElement("code",null,"stateNode"),"\u5c5e\u6027\u5f97\u5230\u4e86\u590d\u7528, \u6545 DOM \u8282\u70b9\u5f97\u5230\u4e86\u590d\u7528."),l.a.createElement("h3",{id:"\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83\u6570\u7ec4\u7c7b\u578b-symboliteratorfniteratorfn"},l.a.createElement(a["AnchorLink"],{to:"#\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83\u6570\u7ec4\u7c7b\u578b-symboliteratorfniteratorfn","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83(\u6570\u7ec4\u7c7b\u578b, [Symbol.iterator]=fn,[@@iterator]=fn)"),l.a.createElement("p",null,"\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83, \u5728",l.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1346-L1362"},"\u6e90\u7801\u4e2d"),"\u88ab\u5206\u4e3a\u4e86 2 \u4e2a\u90e8\u5206:"),l.a.createElement(c["a"],{code:"function reconcileChildFibers(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  newChild: any,\n  lanes: Lanes,\n): Fiber | null {\n  if (isArray(newChild)) {\n    return reconcileChildrenArray(\n      returnFiber,\n      currentFirstChild,\n      newChild,\n      lanes,\n    );\n  }\n  if (getIteratorFn(newChild)) {\n    return reconcileChildrenIterator(\n      returnFiber,\n      currentFirstChild,\n      newChild,\n      lanes,\n    );\n  }\n}",lang:"js"}),l.a.createElement("p",null,"\u5176\u4e2d",l.a.createElement("code",null,"reconcileChildrenArray\u51fd\u6570"),"(\u9488\u5bf9\u6570\u7ec4\u7c7b\u578b)\u548c",l.a.createElement("code",null,"reconcileChildrenIterator"),"(\u9488\u5bf9\u53ef\u8fed\u4ee3\u7c7b\u578b)\u7684\u6838\u5fc3\u903b\u8f91\u51e0\u4e4e\u4e00\u81f4, \u4e0b\u6587\u5c06\u5206\u6790",l.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L771-L924"},l.a.createElement("code",null,"reconcileChildrenArray()"),"\u51fd\u6570"),". \u5982\u679c\u662f\u65b0\u589e\u8282\u70b9, \u6240\u6709\u7684\u6bd4\u8f83\u903b\u8f91\u90fd\u65e0\u6cd5\u547d\u4e2d, \u53ea\u6709",l.a.createElement("code",null,"\u5bf9\u6bd4\u66f4\u65b0"),"\u8fc7\u7a0b, \u624d\u6709\u5b9e\u9645\u4f5c\u7528, \u6240\u4ee5\u4e0b\u6587\u91cd\u70b9\u5206\u6790",l.a.createElement("code",null,"\u5bf9\u6bd4\u66f4\u65b0"),"\u7684\u60c5\u51b5."),l.a.createElement(c["a"],{code:"function reconcileChildrenArray(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  newChildren: Array<*>,\n  lanes: Lanes,\n): Fiber | null {\n  let resultingFirstChild: Fiber | null = null;\n  let previousNewFiber: Fiber | null = null;\n\n  let oldFiber = currentFirstChild;\n  let lastPlacedIndex = 0;\n  let newIdx = 0;\n  let nextOldFiber = null;\n  // 1. \u7b2c\u4e00\u6b21\u5faa\u73af: \u904d\u5386\u6700\u957f\u516c\u5171\u5e8f\u5217(key\u76f8\u540c), \u516c\u5171\u5e8f\u5217\u7684\u8282\u70b9\u90fd\u89c6\u4e3a\u53ef\u590d\u7528\n  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {\n    // \u540e\u6587\u5206\u6790\n  }\n\n  if (newIdx === newChildren.length) {\n    // \u5982\u679cnewChildren\u5e8f\u5217\u88ab\u904d\u5386\u5b8c, \u90a3\u4e48oldFiber\u5e8f\u5217\u4e2d\u5269\u4f59\u8282\u70b9\u90fd\u89c6\u4e3a\u5220\u9664(\u6253\u4e0aDeletion\u6807\u8bb0)\n    deleteRemainingChildren(returnFiber, oldFiber);\n    return resultingFirstChild;\n  }\n\n  if (oldFiber === null) {\n    // \u5982\u679coldFiber\u5e8f\u5217\u88ab\u904d\u5386\u5b8c, \u90a3\u4e48newChildren\u5e8f\u5217\u4e2d\u5269\u4f59\u8282\u70b9\u90fd\u89c6\u4e3a\u65b0\u589e(\u6253\u4e0aPlacement\u6807\u8bb0)\n    for (; newIdx < newChildren.length; newIdx++) {\n      // \u540e\u6587\u5206\u6790\n    }\n    return resultingFirstChild;\n  }\n\n  // ==================\u5206\u5272\u7ebf==================\n  const existingChildren = mapRemainingChildren(returnFiber, oldFiber);\n\n  // 2. \u7b2c\u4e8c\u6b21\u5faa\u73af: \u904d\u5386\u5269\u4f59\u975e\u516c\u5171\u5e8f\u5217, \u4f18\u5148\u590d\u7528oldFiber\u5e8f\u5217\u4e2d\u7684\u8282\u70b9\n  for (; newIdx < newChildren.length; newIdx++) {}\n\n  if (shouldTrackSideEffects) {\n    // newChildren\u5df2\u7ecf\u904d\u5386\u5b8c, \u90a3\u4e48oldFiber\u5e8f\u5217\u4e2d\u5269\u4f59\u8282\u70b9\u90fd\u89c6\u4e3a\u5220\u9664(\u6253\u4e0aDeletion\u6807\u8bb0)\n    existingChildren.forEach(child => deleteChild(returnFiber, child));\n  }\n\n  return resultingFirstChild;\n}",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"reconcileChildrenArray"),"\u51fd\u6570\u6e90\u7801\u770b\u4f3c\u5f88\u957f, \u68b3\u7406\u5176\u4e3b\u5e72\u4e4b\u540e, \u5176\u5b9e\u975e\u5e38\u6e05\u6670."),l.a.createElement("p",null,"\u901a\u8fc7\u5f62\u53c2, \u9996\u5148\u660e\u786e\u6bd4\u8f83\u5bf9\u8c61\u662f",l.a.createElement("code",null,"currentFirstChild: Fiber | null"),"\u548c",l.a.createElement("code",null,"newChildren: Array<*>"),":"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"currentFirstChild"),": \u662f\u4e00\u4e2a",l.a.createElement("code",null,"fiber"),"\u8282\u70b9, \u901a\u8fc7",l.a.createElement("code",null,"fiber.sibling"),"\u53ef\u4ee5\u5c06\u5144\u5f1f\u8282\u70b9\u5168\u90e8\u904d\u5386\u51fa\u6765. \u6240\u4ee5\u53ef\u4ee5\u5c06",l.a.createElement("code",null,"currentFirstChild"),"\u7406\u89e3\u4e3a\u94fe\u8868\u5934\u90e8, \u5b83\u4ee3\u8868\u4e00\u4e2a\u5e8f\u5217, \u6e90\u7801\u4e2d\u88ab\u8bb0\u4e3a",l.a.createElement("code",null,"oldFiber"),"."),l.a.createElement("li",null,l.a.createElement("code",null,"newChildren"),": \u662f\u4e00\u4e2a\u6570\u7ec4, \u5176\u4e2d\u5305\u542b\u4e86\u82e5\u5e72\u4e2a",l.a.createElement("code",null,"ReactElement"),"\u5bf9\u8c61. \u6240\u4ee5",l.a.createElement("code",null,"newChildren"),"\u4e5f\u4ee3\u8868\u4e00\u4e2a\u5e8f\u5217.")),l.a.createElement("p",null,"\u6240\u4ee5",l.a.createElement("code",null,"reconcileChildrenArray"),"\u5b9e\u9645\u5c31\u662f 2 \u4e2a\u5e8f\u5217\u4e4b\u95f4\u7684\u6bd4\u8f83(",l.a.createElement("code",null,"\u94fe\u8868oldFiber"),"\u548c",l.a.createElement("code",null,"\u6570\u7ec4newChildren"),"), \u6700\u540e\u8fd4\u56de\u5408\u7406\u7684",l.a.createElement("code",null,"fiber"),"\u5e8f\u5217."),l.a.createElement("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d, \u4ee5\u6ce8\u91ca\u5206\u5272\u7ebf\u4e3a\u754c\u9650, \u6574\u4e2a\u6838\u5fc3\u903b\u8f91\u5206\u4e3a 2 \u6b65\u9aa4:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7b2c\u4e00\u6b21\u5faa\u73af: \u904d\u5386\u6700\u957f",l.a.createElement("code",null,"\u516c\u5171"),"\u5e8f\u5217(key \u76f8\u540c), \u516c\u5171\u5e8f\u5217\u7684\u8282\u70b9\u90fd\u89c6\u4e3a\u53ef\u590d\u7528",l.a.createElement("ol",null,l.a.createElement("li",null,"\u5982\u679c",l.a.createElement("code",null,"newChildren\u5e8f\u5217"),"\u88ab\u904d\u5386\u5b8c, \u90a3\u4e48",l.a.createElement("code",null,"oldFiber\u5e8f\u5217"),"\u4e2d\u5269\u4f59\u8282\u70b9\u90fd\u89c6\u4e3a\u5220\u9664(\u6253\u4e0a",l.a.createElement("code",null,"Deletion"),"\u6807\u8bb0)"),l.a.createElement("li",null,"\u5982\u679c",l.a.createElement("code",null,"oldFiber\u5e8f\u5217"),"\u88ab\u904d\u5386\u5b8c, \u90a3\u4e48",l.a.createElement("code",null,"newChildren\u5e8f\u5217"),"\u4e2d\u5269\u4f59\u8282\u70b9\u90fd\u89c6\u4e3a\u65b0\u589e(\u6253\u4e0a",l.a.createElement("code",null,"Placement"),"\u6807\u8bb0)"))),l.a.createElement("li",null,"\u7b2c\u4e8c\u6b21\u5faa\u73af: \u904d\u5386\u5269\u4f59",l.a.createElement("code",null,"\u975e\u516c\u5171"),"\u5e8f\u5217, \u4f18\u5148\u590d\u7528 oldFiber \u5e8f\u5217\u4e2d\u7684\u8282\u70b9")),l.a.createElement("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u56fe\u6240\u793a 2 \u4e2a\u521d\u59cb\u5316\u5e8f\u5217:"),l.a.createElement("p",null,l.a.createElement("img",{src:t("Pptb"),alt:""})),l.a.createElement("p",null,"\u63a5\u4e0b\u6765\u7b2c\u4e00\u6b21\u5faa\u73af, \u4f1a\u904d\u5386\u516c\u5171\u5e8f\u5217",l.a.createElement("code",null,"A,B"),", \u751f\u6210\u7684 fiber \u8282\u70b9",l.a.createElement("code",null,"fiber(A), fiber(B)"),"\u53ef\u4ee5\u590d\u7528."),l.a.createElement("p",null,l.a.createElement("img",{src:t("zwEL"),alt:""})),l.a.createElement("p",null,"\u6700\u540e\u7b2c\u4e8c\u6b21\u5faa\u73af, \u4f1a\u904d\u5386\u5269\u4f59\u5e8f\u5217",l.a.createElement("code",null,"E,C,X,Y"),":"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u751f\u6210\u7684 fiber \u8282\u70b9",l.a.createElement("code",null,"fiber(E), fiber(C)"),"\u53ef\u4ee5\u590d\u7528. \u5176\u4e2d",l.a.createElement("code",null,"fiber(C)"),"\u8282\u70b9\u53d1\u751f\u4e86\u4f4d\u79fb(\u6253\u4e0a",l.a.createElement("code",null,"Placement"),"\u6807\u8bb0)."),l.a.createElement("li",null,l.a.createElement("code",null,"fiber(X), fiber(Y)"),"\u662f\u65b0\u589e(\u6253\u4e0a",l.a.createElement("code",null,"Placement"),"\u6807\u8bb0)."),l.a.createElement("li",null,"\u540c\u65f6",l.a.createElement("code",null,"oldFiber"),"\u5e8f\u5217\u4e2d\u7684",l.a.createElement("code",null,"fiber(D)"),"\u8282\u70b9\u786e\u5b9a\u88ab\u5220\u9664(\u6253\u4e0a",l.a.createElement("code",null,"Deletion"),"\u6807\u8bb0).")),l.a.createElement("p",null,l.a.createElement("img",{src:t("GwIj"),alt:""})),l.a.createElement("p",null,"\u6574\u4e2a\u4e3b\u5e72\u903b\u8f91\u5c31\u4ecb\u7ecd\u5b8c\u4e86, \u63a5\u4e0b\u6765\u8d34\u4e0a\u5b8c\u6574\u6e90\u7801"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u7b2c\u4e00\u6b21\u5faa\u73af")),l.a.createElement(c["a"],{code:"// 1. \u7b2c\u4e00\u6b21\u5faa\u73af: \u904d\u5386\u6700\u957f\u516c\u5171\u5e8f\u5217(key\u76f8\u540c), \u516c\u5171\u5e8f\u5217\u7684\u8282\u70b9\u90fd\u89c6\u4e3a\u53ef\u590d\u7528\nfor (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {\n  if (oldFiber.index > newIdx) {\n    nextOldFiber = oldFiber;\n    oldFiber = null;\n  } else {\n    nextOldFiber = oldFiber.sibling;\n  }\n  // new\u69fd\u4f4d\u548cold\u69fd\u4f4d\u8fdb\u884c\u6bd4\u8f83, \u5982\u679ckey\u4e0d\u540c, \u8fd4\u56denull\n  // key\u76f8\u540c, \u6bd4\u8f83type\u662f\u5426\u4e00\u81f4. type\u4e00\u81f4\u5219\u6267\u884cuseFiber(update\u903b\u8f91), type\u4e0d\u4e00\u81f4\u5219\u8fd0\u884ccreateXXX(insert\u903b\u8f91)\n  const newFiber = updateSlot(\n    returnFiber,\n    oldFiber,\n    newChildren[newIdx],\n    lanes,\n  );\n\n  if (newFiber === null) {\n    // \u5982\u679c\u8fd4\u56denull, \u8868\u660ekey\u4e0d\u540c. \u65e0\u6cd5\u6ee1\u8db3\u516c\u5171\u5e8f\u5217\u6761\u4ef6, \u9000\u51fa\u5faa\u73af\n    if (oldFiber === null) {\n      oldFiber = nextOldFiber;\n    }\n    break;\n  }\n  if (shouldTrackSideEffects) {\n    // \u82e5\u662f\u65b0\u589e\u8282\u70b9, \u5219\u7ed9\u8001\u8282\u70b9\u6253\u4e0aDeletion\u6807\u8bb0\n    if (oldFiber && newFiber.alternate === null) {\n      deleteChild(returnFiber, oldFiber);\n    }\n  }\n\n  // lastPlacedIndex \u8bb0\u5f55\u88ab\u79fb\u52a8\u7684\u8282\u70b9\u7d22\u5f15\n  // \u5982\u679c\u5f53\u524d\u8282\u70b9\u53ef\u590d\u7528, \u5219\u8981\u5224\u65ad\u4f4d\u7f6e\u662f\u5426\u79fb\u52a8.\n  lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);\n\n  // \u66f4\u65b0resultingFirstChild\u7ed3\u679c\u5e8f\u5217\n  if (previousNewFiber === null) {\n    resultingFirstChild = newFiber;\n  } else {\n    previousNewFiber.sibling = newFiber;\n  }\n  previousNewFiber = newFiber;\n  oldFiber = nextOldFiber;\n}",lang:"js"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u7b2c\u4e8c\u6b21\u5faa\u73af")),l.a.createElement(c["a"],{code:"// 1. \u5c06\u7b2c\u4e00\u6b21\u5faa\u73af\u540e, oldFiber\u5269\u4f59\u5e8f\u5217\u52a0\u5165\u5230\u4e00\u4e2amap\u4e2d. \u76ee\u7684\u662f\u4e3a\u4e86\u7b2c\u4e8c\u6b21\u5faa\u73af\u80fd\u987a\u5229\u7684\u627e\u5230\u53ef\u590d\u7528\u8282\u70b9\nconst existingChildren = mapRemainingChildren(returnFiber, oldFiber);\n\n// 2. \u7b2c\u4e8c\u6b21\u5faa\u73af: \u904d\u5386\u5269\u4f59\u975e\u516c\u5171\u5e8f\u5217, \u4f18\u5148\u590d\u7528oldFiber\u5e8f\u5217\u4e2d\u7684\u8282\u70b9\nfor (; newIdx < newChildren.length; newIdx++) {\n  const newFiber = updateFromMap(\n    existingChildren,\n    returnFiber,\n    newIdx,\n    newChildren[newIdx],\n    lanes,\n  );\n  if (newFiber !== null) {\n    if (shouldTrackSideEffects) {\n      if (newFiber.alternate !== null) {\n        // \u5982\u679cnewFiber\u662f\u901a\u8fc7\u590d\u7528\u521b\u5efa\u7684, \u5219\u6e05\u7406map\u4e2d\u5bf9\u5e94\u7684\u8001\u8282\u70b9\n        existingChildren.delete(newFiber.key === null ? newIdx : newFiber.key);\n      }\n    }\n    lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);\n    // \u66f4\u65b0resultingFirstChild\u7ed3\u679c\u5e8f\u5217\n    if (previousNewFiber === null) {\n      resultingFirstChild = newFiber;\n    } else {\n      previousNewFiber.sibling = newFiber;\n    }\n    previousNewFiber = newFiber;\n  }\n}",lang:"js"}),l.a.createElement("h3",{id:"\u7ed3\u679c"},l.a.createElement(a["AnchorLink"],{to:"#\u7ed3\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ed3\u679c"),l.a.createElement("p",null,"\u65e0\u8bba\u662f\u5355\u8282\u70b9\u8fd8\u662f\u53ef\u8fed\u4ee3\u8282\u70b9\u7684\u6bd4\u8f83, \u6700\u7ec8\u7684\u76ee\u7684\u90fd\u662f\u751f\u6210\u4e0b\u7ea7\u5b50\u8282\u70b9. \u5e76\u5728",l.a.createElement("code",null,"reconcilerChildren"),"\u8fc7\u7a0b\u4e2d, \u7ed9\u4e00\u4e9b\u6709\u526f\u4f5c\u7528\u7684\u8282\u70b9(\u65b0\u589e, \u5220\u9664, \u79fb\u52a8\u4f4d\u7f6e\u7b49)\u6253\u4e0a\u526f\u4f5c\u7528\u6807\u8bb0, \u7b49\u5f85 commit \u9636\u6bb5(\u53c2\u8003",l.a.createElement(a["Link"],{to:"../main/commit"},"fiber \u6811\u6e32\u67d3"),")\u7684\u5904\u7406."),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(a["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86 React \u6e90\u7801\u4e2d, ",l.a.createElement("code",null,"fiber\u6784\u9020\u5faa\u73af"),"\u9636\u6bb5\u7528\u4e8e\u751f\u6210\u4e0b\u7ea7\u5b50\u8282\u70b9\u7684",l.a.createElement("code",null,"reconcilerChildren"),"\u51fd\u6570(\u51fd\u6570\u4e2d\u7684\u7b97\u6cd5\u88ab\u79f0\u4e3a\u8c03\u548c\u7b97\u6cd5), \u5e76\u6f14\u793a\u4e86",l.a.createElement("code",null,"\u53ef\u8fed\u4ee3\u8282\u70b9\u6bd4\u8f83"),"\u7684\u56fe\u89e3\u793a\u4f8b. \u8be5\u7b97\u6cd5\u5341\u5206\u5de7\u5999, \u5176\u6838\u5fc3\u903b\u8f91\u628a",l.a.createElement("code",null,"newChildren\u5e8f\u5217"),"\u5206\u4e3a 2 \u6b65\u904d\u5386, \u5148\u904d\u5386\u516c\u5171\u5e8f\u5217, \u518d\u904d\u5386\u975e\u516c\u5171\u90e8\u5206, \u540c\u65f6\u590d\u7528",l.a.createElement("code",null,"oldFiber"),"\u5e8f\u5217\u4e2d\u7684\u8282\u70b9."))))},zwEL:function(e,n,t){e.exports=t.p+"static/traverse1.a0313cc2.png"}}]);