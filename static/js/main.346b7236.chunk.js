(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Calculator});var C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Buttons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Formula__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_Output__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),initialState={currentVal:"0",formula:""},checkForDecimal=/[.]+/,checkForOperator=/([\/+\-*])/,Calculator=function(_Component){function Calculator(props){var _this;return Object(C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this.handleNumbers=function(e){var t=_this.state,_=t.currentVal,a=t.formula;checkForDecimal.test(_)&&"."===e.target.value?console.log("Ignored"):"0"===_[0]&&_.length>0?_this.setState({currentVal:e.target.value,formula:a.concat(e.target.value.toString())}):_this.setState({currentVal:_.concat(e.target.value),formula:a.concat(e.target.value.toString())})},_this.handleOperators=function(e){var t=_this.state.formula;checkForOperator.test(e.target.value)&&""===t||(_this.setState({currentVal:e.target.value,formula:t.concat(e.target.value.toString())}),checkForOperator.test(t[t.length-1])&&_this.setState({currentVal:e.target.value,formula:t.slice(0,t.length-3).concat(e.target.value)}))},_this.calculate=function(e){var formula=_this.state.formula,expression=formula,lastElement=expression[expression.length-1];(checkForOperator.test(lastElement)||checkForDecimal.test(lastElement))&&(expression=expression.slice(0,-1));var result=eval(expression);_this.setState({currentVal:result.toString(),formula:result.toString()})},_this.reset=function(){_this.setState(initialState)},_this.state=initialState,_this}return Object(C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(C_Users_elisei_danciu_Desktop_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.currentVal,_=e.formula;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"displays",className:"display"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Formula__WEBPACK_IMPORTED_MODULE_7__.a,{formula:_}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Output__WEBPACK_IMPORTED_MODULE_8__.a,{currentVal:t})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_6__.a,{handleNumbers:this.handleNumbers,handleOperators:this.handleOperators,calculate:this.calculate,reset:this.reset}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component)},function(e,t,_){"use strict";_.d(t,"a",function(){return i});var a=_(1),r=_(2),n=_(4),l=_(3),c=_(5),o=_(0),u=_.n(o),i=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleNumbers,_=e.handleOperators,a=e.calculate,r=e.reset;return u.a.createElement("div",null,u.a.createElement("button",{id:"clear",value:"clear",onClick:r,style:{width:"75%"}},"AC"),u.a.createElement("button",{id:"subtract",value:"-",onClick:_},"-"),u.a.createElement("button",{id:"seven",value:"7",onClick:t},"7"),u.a.createElement("button",{id:"eight",value:"8",onClick:t},"8"),u.a.createElement("button",{id:"nine",value:"9",onClick:t},"9"),u.a.createElement("button",{id:"add",value:"+",onClick:_},"+"),u.a.createElement("button",{id:"four",value:"4",onClick:t},"4"),u.a.createElement("button",{id:"five",value:"5",onClick:t},"5"),u.a.createElement("button",{id:"six",value:"6",onClick:t},"6"),u.a.createElement("button",{id:"divide",value:"/",onClick:_},"/"),u.a.createElement("button",{id:"one",value:"1",onClick:t},"1"),u.a.createElement("button",{id:"two",value:"2",onClick:t},"2"),u.a.createElement("button",{id:"three",value:"3",onClick:t},"3"),u.a.createElement("button",{id:"multiply",value:"*",onClick:_},"*"),u.a.createElement("button",{id:"zero",value:"0",onClick:t},"0"),u.a.createElement("button",{id:"decimal",value:".",onClick:t},"."),u.a.createElement("button",{id:"equals",value:"=",onClick:a,style:{width:"50%"}},"="))}}]),t}(o.Component)},function(e,t,_){"use strict";var a=_(1),r=_(2),n=_(4),l=_(3),c=_(5),o=_(0),u=_.n(o),i=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.formula;return u.a.createElement("div",{className:"formulaScreen"},u.a.createElement("p",null,e))}}]),t}(u.a.Component);t.a=i},function(e,t,_){"use strict";var a=_(1),r=_(2),n=_(4),l=_(3),c=_(5),o=_(0),u=_.n(o),i=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.currentVal;return u.a.createElement("div",{id:"display",className:"outputScreen"},u.a.createElement("p",null,e))}}]),t}(o.Component);t.a=i},function(e,t,_){e.exports=_(20)},,,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),r=_.n(a),n=_(7),l=_.n(n),c=(_(18),_(1)),o=_(2),u=_(4),i=_(3),s=_(5),m=(_(19),_(8)),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container calculator"},r.a.createElement(m.a,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.346b7236.chunk.js.map