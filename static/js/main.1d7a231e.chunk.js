(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(6),i=n.n(s),c=n(1),r=n(2),d=n(4),l=n(3),u=n(5),p=(n(13),n(14),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("article",{id:"{this.props.id}",className:"todo"},o.a.createElement("h2",null,o.a.createElement("button",{className:"finish"}," ")," "),o.a.createElement("p",null,this.props.text))}}]),t}(a.Component)),m=(n(15),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"newtodo",onSubmit:this.props.addTodo},o.a.createElement("h2",null,o.a.createElement("button",{className:"finish"}," ")," Sort"))}}]),t}(a.Component)),h=new XMLHttpRequest;var f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={todos:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"updateTodo",value:function(){this.setState({todos:new m})}},{key:"render",value:function(){return o.a.createElement("section",{id:"todos"},o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"Adam Oubaita ToDo App"),o.a.createElement("input",{type:"text",onClick:"componentWillUpdate()",onKeyDown:this.handleKeyDown,id:"new-task",placeholder:"Complete"}),o.a.createElement("input",{type:"button",onClick:"componentDidMount()",onKeyDown:this.handleKeyDown,id:"add-item-button",class:"add-item-button",value:"Add"}),o.a.createElement("section",{id:"newtodos"}," "),o.a.createElement(m,{createItem:this.createItem}),this.state.todos.map(function(e){return o.a.createElement(p,{key:e.id,text:e.text})}),o.a.createElement("script",{src:"NewTodo.js"}),o.a.createElement("ul",{id:"tasks-list"})))}},{key:"apiCall",value:function(){var e=this;fetch("https://cse204.work/todos/",{method:"GET",headers:new Headers({"Content-Type":"application/json","x-api-key":"ea8ab2-ab5cb1-9254fd-35e967-531f0c"})}).then(function(e){return e.json()}).then(function(t){e.setState=t}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.apiCall(),console.log("componentDidMount() lifecycle"),this.componentWillUpdate.bind(this)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",k)}},{key:"componentWillUpdate",value:function(){var e=this.state.todos;e.sort(function(e,t){return e.localeCompare(t,"fr",{ignorePunctions:!0})}),this.setState({todos:e})}}]),t}(o.a.Component);function y(){var e={text:document.getElementById("new-task").value},t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status?b(JSON.parse(this.responseText)):4==this.readyState&&console.log(this.responseText)},t.open("POST","https://cse204.work/todos",!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key","ea8ab2-ab5cb1-9254fd-35e967-531f0c"),t.send(JSON.stringify(e))}function b(e){var t=e.id,n=e.text,a=document.createElement("li"),o=document.createElement("button");o.innerText="Mark as Complete",o.addEventListener("click",E);var s=document.createTextNode(n),i=document.createElement("button");i.innerText="Delete",i.addEventListener("click",k),a.id=t,document.getElementById("tasks-list").appendChild(a),1==e.completed&&a.classList.add("completed"),a.appendChild(s),a.appendChild(o),a.appendChild(i)}function E(){var e=this.parentNode.id,t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status?document.getElementById(e).style.textDecoration="line-through":4==this.readyState&&console.log(this.responseText)},t.open("PUT","https://cse204.work/todos/"+e,!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key","ea8ab2-ab5cb1-9254fd-35e967-531f0c"),t.send(JSON.stringify({completed:!0}))}function k(){var e=this.parentNode.id,t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status?document.getElementById(e).remove():4==this.readyState&&console.log(this.responseText)},t.open("DELETE","https://cse204.work/todos/"+e,!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key","ea8ab2-ab5cb1-9254fd-35e967-531f0c"),t.send()}document.addEventListener("DOMContentLoaded",function(e){h.onreadystatechange=function(){if(4==this.readyState&&200==this.status)for(var e=JSON.parse(this.responseText),t=0;t<e.length;t++)b(e[t])},h.open("GET","https://cse204.work/todos",!0),h.setRequestHeader("x-api-key","ea8ab2-ab5cb1-9254fd-35e967-531f0c"),h.send(),document.getElementById("add-item-button").addEventListener("click",y)});var v=f;i.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.1d7a231e.chunk.js.map