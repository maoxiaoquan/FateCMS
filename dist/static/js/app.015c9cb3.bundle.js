webpackJsonp([2],{108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=n(0),u=r(l),a=n(9),o=r(a),f=n(65),i=n(145);n(150);var c=n(152),d=r(c),s=n(285),p=r(s),m=window.store=(0,p.default)();!function(e){o.default.render(u.default.createElement(i.AppContainer,null,u.default.createElement(f.Provider,{store:m},u.default.createElement(e,null))),document.getElementById("app"))}(d.default)},150:function(e,t){},152:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),i=r(f),c=n(153),d=n(179),s=r(d),p=n(281),m=r(p),y=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return i.default.createElement(c.BrowserRouter,null,i.default.createElement("div",null,i.default.createElement(c.Switch,null,i.default.createElement(c.Route,{exact:!0,path:"/",component:s.default}),i.default.createElement(c.Route,{path:"/list",component:m.default}))))}}]),t}(i.default.Component);t.default=y},179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(180),f=r(o),i=n(96),c=r(i),d=n(221),s=r(d),p=n(224),m=r(p),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(271),n(273),n(274),n(276);var b=n(0),h=r(b),v=n(65);n(280);var E=m.default.SubMenu,_=s.default.Header,w=s.default.Content,O=s.default.Sider,g=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={one:"刷啊11111111"},n}return a(t,e),y(t,[{key:"render",value:function(){var e=this.props.title;return h.default.createElement(s.default,null,h.default.createElement(_,{className:"header"},h.default.createElement("div",{className:"logo"}),h.default.createElement(m.default,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},h.default.createElement(m.default.Item,{key:"1"},"nav 1"),h.default.createElement(m.default.Item,{key:"2"},"nav 2"),h.default.createElement(m.default.Item,{key:"3"},"nav 3"))),h.default.createElement(s.default,null,h.default.createElement(O,{width:200,style:{background:"#fff"}},h.default.createElement(m.default,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},h.default.createElement(E,{key:"sub1",title:h.default.createElement("span",null,h.default.createElement(c.default,{type:"user"}),"subnav 1")},h.default.createElement(m.default.Item,{key:"1"},"option1"),h.default.createElement(m.default.Item,{key:"2"},"option2"),h.default.createElement(m.default.Item,{key:"3"},"option3"),h.default.createElement(m.default.Item,{key:"4"},"option4")),h.default.createElement(E,{key:"sub2",title:h.default.createElement("span",null,h.default.createElement(c.default,{type:"laptop"}),"subnav 2")},h.default.createElement(m.default.Item,{key:"5"},"option5"),h.default.createElement(m.default.Item,{key:"6"},"option6"),h.default.createElement(m.default.Item,{key:"7"},"option7"),h.default.createElement(m.default.Item,{key:"8"},"option8")),h.default.createElement(E,{key:"sub3",title:h.default.createElement("span",null,h.default.createElement(c.default,{type:"notification"}),"subnav 3")},h.default.createElement(m.default.Item,{key:"9"},"option9"),h.default.createElement(m.default.Item,{key:"10"},"option10"),h.default.createElement(m.default.Item,{key:"11"},"option11"),h.default.createElement(m.default.Item,{key:"12"},"option12")))),h.default.createElement(s.default,{style:{padding:"0 24px 24px"}},h.default.createElement(f.default,{style:{margin:"16px 0"}},h.default.createElement(f.default.Item,null,"Home"),h.default.createElement(f.default.Item,null,"List"),h.default.createElement(f.default.Item,null,"App")),h.default.createElement(w,{style:{background:"#fff",padding:24,margin:0,minHeight:280},className:"demo"},"Content5666",h.default.createElement("div",null,this.state.one),h.default.createElement("div",null,e.title)))))}}]),t}(h.default.Component);t.default=(0,v.connect)(function(e){return{title:e.title}})(g)},272:function(e,t){},275:function(e,t){},277:function(e,t){},279:function(e,t){},280:function(e,t){},281:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=r(l),a=n(33),o=n(282),f=r(o);t.default=function(e){if(!window.rootCombineReducer.list){window.rootCombineReducer.list=n(283).default;var t=(0,a.combineReducers)(window.rootCombineReducer);window.store.replaceReducer(t)}return u.default.createElement(f.default,{load:n(284)},function(t){return u.default.createElement(t,e)})}},282:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),f=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(f),c=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={mod:null},n}return u(t,e),a(t,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.state.mod?this.props.children(this.state.mod):null}}]),t}(o.Component);c.propTypes={load:i.default.func.isRequired,children:i.default.func.isRequired},t.default=c},283:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case"GET_LIST_DATA":return l({},e,{data:t.data});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={list:[1,6,8,88,6],data:{}};t.default=r},284:function(e,t,n){e.exports=function(e){n.e(0).then(function(t){e(n(293))}.bind(null,n)).catch(n.oe)}},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return(0,f.compose)(f.applyMiddleware.apply(void 0,d))(f.createStore)(c.default,e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=(r(u),n(286)),o=r(a),f=n(33),i=(n(287),n(288)),c=r(i),d=[o.default];t.default=l},288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(33),u=n(289),a=r(u),o=n(290),f=r(o),i=window.rootCombineReducer={title:a.default,loading:f.default},c=(0,l.combineReducers)(i);t.default=c},289:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case"TITLE":return Object.assign({},e,{title:t.title});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l={title:"首页"};t.default=r},29:function(e,t){},290:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case"LOADING":return l({},e,t.payload);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={isLoading:!1,isAppLogin:!1};t.default=r}},[108]);