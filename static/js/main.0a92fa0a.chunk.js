(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(33)},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),i=n(7),c=n(11),s=n(6),u=n(8),m=n.n(u),f=n(12),d=n(1),b=n(2),h=n(4),p=n(3),g=n(5),v=(n(21),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),y=n(13),E=(n(23),function(e){var t=e.important,n=e.done,a=e.label,r=e.onToggleImportant,l=e.onToggleDone,i=e.onDelete,c="todo-list-item";return t&&(c+=" important"),n&&(c+=" done"),o.a.createElement("span",{className:c},o.a.createElement("span",{className:"todo-list-item-label",onClick:l},a),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:i},o.a.createElement("i",{className:"fa fa-trash-o"})))}),O=(n(25),function(e){var t=e.items,n=e.onToggleImportant,a=e.onToggleDone,r=e.onDelete,l=t.map(function(e){var t=e.id,l=Object(y.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(E,Object.assign({},l,{onToggleImportant:function(){return n(t)},onToggleDone:function(){return a(t)},onDelete:function(){return r(t)}})))});return o.a.createElement("ul",{className:"todo-list list-group"},l)}),j=(n(27),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onTermChange=function(e){var t=n.props.onSearchChange,a=void 0===t?function(){}:t;n.setState({term:e.target.value}),a(e.target.value)},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onTermChange})}}]),t}(a.Component)),C=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],I=function(e){var t=e.filter,n=e.onFilterChange,a=void 0===n?function(){}:n,r=C.map(function(e){var n=e.name,r=e.label,l="btn "+(n===t?"btn-info":"btn-outline-secondary");return o.a.createElement("button",{key:n,type:"button",onClick:function(){return a(n)},className:l},r)});return o.a.createElement("div",{className:"btn-group"},r)},k=(n(29),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault();var t=n.state.label;n.setState({label:""}),(n.props.onItemAdded||function(){})(t)},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control new-todo-label",value:this.state.label,onChange:this.onLabelChange,placeholder:"What needs to be done?"}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),w=(n(31),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={login:"",password:"",items:[{id:1,label:"Drink Coffee",important:!1,done:!1},{id:2,label:"Learn React",important:!0,done:!1},{id:3,label:"Make Awesome App",important:!1,done:!1}],filter:"all",search:""},n.addUser=function(){var e=Object(f.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({login:t,password:a});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.onItemAdded=function(e){n.setState(function(t){var a=n.createItem(e);return{items:Object(s.a)(t.items).concat([a])}})},n.toggleProperty=function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=!e[a][n],r=Object(c.a)({},e[a],Object(i.a)({},n,o));return Object(s.a)(e.slice(0,a)).concat([r],Object(s.a)(e.slice(a+1)))},n.onToggleDone=function(e){n.setState(function(t){return{items:n.toggleProperty(t.items,e,"done")}})},n.onToggleImportant=function(e){n.setState(function(t){return{items:n.toggleProperty(t.items,e,"important")}})},n.onDelete=function(e){n.setState(function(t){var n=t.items.findIndex(function(t){return t.id===e});return{items:Object(s.a)(t.items.slice(0,n)).concat(Object(s.a)(t.items.slice(n+1)))}})},n.onFilterChange=function(e){n.setState({filter:e})},n.onSearchChange=function(e){n.setState({search:e})},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"createItem",value:function(e){return{id:this.state.items[this.state.items.length-1].id+1,label:e,important:!1,done:!1}}},{key:"filterItems",value:function(e,t){return"all"===t?e:"active"===t?e.filter(function(e){return!e.done}):"done"===t?e.filter(function(e){return e.done}):void 0}},{key:"searchItems",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.filter,a=e.search,r=t.filter(function(e){return e.done}).length,l=t.length-r,i=this.searchItems(this.filterItems(t,n),a);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(v,{toDo:l,done:r}),o.a.createElement("div",{className:"search-panel d-flex"},o.a.createElement(j,{onSearchChange:this.onSearchChange}),o.a.createElement(I,{filter:n,onFilterChange:this.onFilterChange})),o.a.createElement(O,{items:i,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone,onDelete:this.onDelete}),o.a.createElement(k,{onItemAdded:this.onItemAdded}))}}]),t}(a.Component));l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.0a92fa0a.chunk.js.map