(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/devmapLogoLarge.13121dac.png"},function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),l=n.n(i),s=(n(18),n(1)),o=n(2),c=n(4),m=n(3),p=n(5),u=(n(19),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Devmap!"))}),d=n(6),h=n(7),f=n.n(h),E=n(10),v=(n(21),function(e){return r.a.createElement("div",{className:"property"},r.a.createElement("p",null,e.name),r.a.createElement("p",{className:"type"},e.type),r.a.createElement("button",{onClick:e.deleteProperty,className:"delete"},"X"))}),g=(n(22),function(e){return r.a.createElement("div",{className:"method"},r.a.createElement("p",null,e.name),r.a.createElement("p",{className:"returns"},"\u2192 ",e.returns),r.a.createElement("button",{className:"delete"},"X"))}),y=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isEditing:!1,title:n.props.title,tempTitle:n.props.title,properties:[{name:"property1",type:"string"},{name:"property2",type:"int"},{name:"property3",type:"{}"}]},n.toggleEditTitle=Object(E.a)(f.a.mark(function e(){var t,a=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(a.length>0&&void 0!==a[0])||a[0],n.state.isEditing||!t){e.next=4;break}return e.next=4,n.setState({tempTitle:n.state.title});case 4:return e.next=6,n.setState({isEditing:t});case 6:n.state.isEditing&&n.titleInput.focus();case 7:case"end":return e.stop()}},e)})),n.updateTitle=function(e){e.preventDefault(),""!==n.state.tempTitle&&n.setState({title:n.state.tempTitle}),n.toggleEditTitle(!1)},n.updateTempTitle=function(e){n.setState({tempTitle:e.target.value})},n.deleteComponent=function(e){e.preventDefault(),e.stopPropagation(),n.props.delete()},n.addItem=function(e){e.preventDefault(),e.stopPropagation()},n.deleteProperty=function(e){var t=Object(d.a)(n.state.properties);t.splice(e,1),n.setState({properties:t})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isEditing?r.a.createElement("form",{onSubmit:this.updateTitle,onClick:this.toggleEditTitle,className:"title"},r.a.createElement("input",{ref:function(t){e.titleInput=t},className:"titleText",placeholder:"TITLE",onChange:this.updateTempTitle,value:this.state.tempTitle,onBlur:this.toggleEditTitle.bind(this,!1)}),r.a.createElement("button",{type:"submit",className:"submit"},"\u2713")):r.a.createElement("div",{onClick:this.toggleEditTitle,className:"title notEditing"},r.a.createElement("h2",{className:"titleText"},this.state.title),r.a.createElement("button",{onClick:this.addItem,className:"far add"},"+"),r.a.createElement("button",{onClick:this.deleteComponent,className:"far fa-trash-alt delete"})),n=this.state.properties.length>0?this.state.properties.map(function(t,n){return r.a.createElement(v,{name:t.name,type:t.type,deleteProperty:function(){return e.deleteProperty(n)},key:t.name})}):r.a.createElement("p",{className:"emptyContainerWarning"},"This component has no properties");return r.a.createElement("div",{className:"component"},t,r.a.createElement("div",{className:"properties"},n),r.a.createElement("div",{className:"methods"},r.a.createElement(g,{name:"method1",returns:"int"}),r.a.createElement(g,{name:"method2",returns:"string"}),r.a.createElement(g,{name:"method3",returns:"[{}]"})))}}]),t}(a.Component)),b=(n(24),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={components:[{title:"Component 1"},{title:"Component 2"}]},n.deleteComponent=function(e){var t=Object(d.a)(n.state.components);t.splice(e,1),n.setState({components:t})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.components.length>0?this.state.components.map(function(t){return r.a.createElement(y,{delete:e.deleteComponent,title:t.title,key:t.title})}):r.a.createElement("p",{className:"emptyContainerWarning"},"This module has no components");return r.a.createElement("div",{className:"module"},t)}}]),t}(a.Component)),j=n(11),O=n.n(j),T=(n(25),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={modules:[{title:"Module 1"},{title:"Module 2"},{title:"Module 3"}]},n.deleteModule=function(e){var t=Object(d.a)(n.state.modules);t.splice(e,1),n.setState({modules:t})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.modules.length>0?this.state.modules.map(function(t){return r.a.createElement(b,{delete:e.deleteModule,title:t.title,key:t.title})}):r.a.createElement("p",{className:"emptyContainerWarning"},"This map has no modules");return r.a.createElement("div",{className:"map"},t,r.a.createElement("img",{src:O.a,className:"bg-img",alt:""}))}}]),t}(a.Component)),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"devmaps",maps:[{name:"devmap1",author:"devmaps"},{name:"devmap2",author:"mohammadtourj"}]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.username?r.a.createElement(T,null):r.a.createElement(u,null),r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.e55673e0.chunk.js.map