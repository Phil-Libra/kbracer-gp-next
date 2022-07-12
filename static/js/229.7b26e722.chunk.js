"use strict";(self.webpackChunkkbracer_gp_next=self.webpackChunkkbracer_gp_next||[]).push([[229,398],{5325:function(t,e,n){var a=n(6871),r=n(184);e.Z=function(t){var e=t.styles,n=t.path_1,c=t.switchText1,i=t.path_2,o=t.switchText2,s=t.handleClick,l=t.pagination,d=(0,a.s0)();return(0,r.jsxs)("div",{className:e.switchBox,children:[(0,r.jsxs)("div",{className:e.switchButton,children:[(0,r.jsx)("button",{className:e.switch1,onClick:function(){return d(n)},children:c}),(0,r.jsx)("button",{className:e.switch2,onClick:function(){return d(i)},children:o})]}),(0,r.jsx)("button",{className:e.pagination,onClick:function(){return s()},children:l?"\u5173\u95ed\u5206\u9875":"\u5f00\u542f\u5206\u9875"})]})}},8412:function(t,e,n){var a=n(9439),r=n(2791),c=n(4831),i=n(7575),o=n(732),s=(n(5713),n(184));e.Z=function(t){var e=t.styles,n=t.rankData,l=t.pagination,d=t.title,h=t.mod,u=c.Z.Column,x=c.Z.ColumnGroup,p=(0,r.useState)(50),_=(0,a.Z)(p,2),f=_[0],w=_[1];return(0,s.jsxs)(c.Z,{title:function(){return d},bordered:!0,dataSource:n,size:"small",sticky:!0,scroll:{x:"max-content"},pagination:!!l&&{position:["topRight"],pageSize:f,pageSizeOptions:[10,20,25,50,100],onChange:function(t,e){return w(e)}},onRow:function(t){return{className:t.speed<70?"".concat(e.kbracer," ").concat(e.kbracer1):t.speed<73?"".concat(e.kbracer," ").concat(e.kbracer2):t.speed<76?"".concat(e.kbracer," ").concat(e.kbracer3):t.speed<79?"".concat(e.kbracer," ").concat(e.kbracer4):t.speed<82?"".concat(e.kbracer," ").concat(e.kbracer5):"".concat(e.kbracer," ").concat(e.kbracer6)}},children:[(0,s.jsx)(u,{title:"\u6392\u540d",dataIndex:"key",align:"center",width:"3%"},"key"),(0,s.jsx)(u,{title:"\u8f66\u578b",dataIndex:"car",width:"10%"},"car"),(0,s.jsx)(u,{className:e.highlight,title:"\u5708\u901f",dataIndex:"speed",align:"center",width:"8%",render:function(t){return function(t){var e=Math.floor(t/60),n=Math.round(100*(t-60*e))/100;return t<120?t%1===0?n<10?"".concat(e,":0").concat(n,".00"):"".concat(e,":").concat(n,".00"):n<10?100*n%10===0?"".concat(e,":0").concat(n,"0"):"".concat(e,":0").concat(n):100*n%10===0?"".concat(e,":").concat(n,"0"):"".concat(e,":").concat(n):"\u65f6\u95f4\u592a\u957f\uff0c\u6559\u4e3b\u7684\u8eab\u4f53\u5403\u4e0d\u6d88\u4e86!"}(t)}},"speed"),h&&(0,s.jsx)(u,{title:"\u6539\u88c5",dataIndex:"mod",align:"center",width:"5%",render:function(t){return t?(0,s.jsx)(i.Z,{}):(0,s.jsx)(o.Z,{})}},"mod"),(0,s.jsx)(u,{title:"\u6c14\u6e29 (\u2103)",dataIndex:"temperature",align:"center",width:"5%"},"temperature"),(0,s.jsx)(u,{className:e.highlight,title:"\u5c3e\u901f(km/h)",dataIndex:"limit",align:"center",width:"5%"},"limit"),(0,s.jsx)(u,{title:"0-100(s)",dataIndex:"accelerate",align:"center",width:"5%"},"accelerate"),(0,s.jsx)(u,{title:"\u9a6c\u529b (Ps)",dataIndex:"hp_content",align:"center",width:"5%"},"hp_content"),(0,s.jsx)(u,{title:"\u52a8\u529b\u603b\u6210",dataIndex:"Powertrain",width:"10%"},"Powertrain"),(0,s.jsxs)(x,{title:function(){return"\u8f6e\u80ce"},children:[(0,s.jsx)(u,{title:"\u524d\u8f6e",dataIndex:"tyre_type_f",width:"6%",onCell:function(t){if(t.tyre_type_f===t.tyre_type_r)return{colSpan:2}}},"tyre_type_f"),(0,s.jsx)(u,{title:"\u540e\u8f6e",dataIndex:"tyre_type_r",width:"6%",onCell:function(t){if(t.tyre_type_f===t.tyre_type_r)return{colSpan:0}}},"tyre_type_r"),(0,s.jsx)(u,{title:"\u524d\u5bbd",dataIndex:"tyre_width_f",align:"center",width:"5%",onCell:function(t){if(t.tyre_width_f===t.tyre_width_r)return{colSpan:2}}},"tyre_width_f"),(0,s.jsx)(u,{title:"\u540e\u5bbd",dataIndex:"tyre_width_r",align:"center",width:"5%",onCell:function(t){if(t.tyre_width_f===t.tyre_width_r)return{colSpan:0}}},"tyre_width_r")]}),(0,s.jsx)(u,{title:"\u5708\u901f\u89c6\u9891",dataIndex:"Btitle",render:function(t,e){return e.BURL?(0,s.jsx)("a",{href:e.BURL,children:t}):(0,s.jsx)("span",{children:t})}},"Btitle")]})}},1100:function(t,e,n){n.r(e);var a=n(9439),r=n(2791),c=n(5631),i=n(8412),o=n(5325),s=(n(5713),n(6009)),l=n(184);e.default=function(){var t=(0,c.useData)().totalData,e=(0,r.useState)(!1),n=(0,a.Z)(e,2),d=n[0],h=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{styles:s.Z,path_1:"/original",switchText1:"\u5207\u6362\u5230\u539f\u5382\u699c",path_2:"/mod",switchText2:"\u5207\u6362\u5230\u6539\u88c5\u699c",handleClick:function(){return h((function(t){return!t}))},pagination:d}),(0,l.jsx)(i.Z,{styles:s.Z,rankData:t,title:(0,l.jsx)("span",{children:"\u603b\u699c"}),pagination:d,mod:!0})]})}}}]);
//# sourceMappingURL=229.7b26e722.chunk.js.map