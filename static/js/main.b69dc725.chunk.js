(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a(312)},147:function(e,t,a){},148:function(e,t,a){},201:function(e,t){},203:function(e,t){},237:function(e,t){},238:function(e,t){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),l=(a(147),a(54)),s=a(26),c=a(27),m=a(29),u=a(28),p=a(30),d=(a(148),function(){return r.a.createElement("h1",{style:{textAlign:"center",fontSize:40}},"Jeux tour par tour")}),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"selectedAvatarStyle",value:function(e){return this.props.user.avatarSrc==="https://christophe13012.github.io/plateauReact/"+e?g.avatarSelected:g.avatars}},{key:"errorManagmentFrench",value:function(e){var t=this.props.competitor;return'"name" length must be at least 3 characters long'===e.error?"Le nom doit \xeatre de 3 caract\xe8res minimum":'"name" length must be less than or equal to 20 characters long'===e.error?"Le nom doit \xeatre de 20 caract\xe8res maximum":'"name" is not allowed to be empty'===e.error?"Le nom ne doit pas \xeatre vide":t.ready&&e.name===t.name?"Ce nom n'est pas disponible":t.ready&&e.avatarSrc===t.avatarSrc?"Avatar non disponible":e.error}},{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.onSubmit,n=e.onClick,o=e.user,i=this.errorManagmentFrench(o),l=o.ready?void 0:n;return r.a.createElement("form",{style:g.perso,name:o.id,onSubmit:a},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"user",className:"col-sm-4 col-form-label"},"Votre nom :"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{disabled:!!o.ready,value:o.name,onChange:t,type:"text",className:"form-control",id:"user",name:o.id,placeholder:""}),i&&"init"!==i&&r.a.createElement("div",{style:{fontSize:14},className:"alert alert-danger p-0 m-0"},i))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-form-label"},"Votre avatar :"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("img",{style:this.selectedAvatarStyle("avatars/001-girl.png"),src:"https://christophe13012.github.io/plateauReact/avatars/001-girl.png",alt:"girl",onClick:l,name:o.id}),r.a.createElement("img",{style:this.selectedAvatarStyle("avatars/006-child-3.png"),src:"https://christophe13012.github.io/plateauReact/avatars/006-child-3.png",alt:"child3",onClick:l,name:o.id}),r.a.createElement("img",{style:this.selectedAvatarStyle("avatars/005-girl.png"),src:"https://christophe13012.github.io/plateauReact/avatars/005-girl.png",alt:"girl5",onClick:l,name:o.id}),r.a.createElement("img",{style:this.selectedAvatarStyle("avatars/002-child.png"),src:"https://christophe13012.github.io/plateauReact/avatars/002-child.png",alt:"child2",onClick:l,name:o.id}),r.a.createElement("img",{style:this.selectedAvatarStyle("avatars/007-child-4.png"),src:"https://christophe13012.github.io/plateauReact/avatars/007-child-4.png",alt:"child4",onClick:l,name:o.id}))),o.ready?r.a.createElement("button",{className:"btn btn-success btn-lg btn-block"},"Attente second joueur ..."):r.a.createElement("button",{disabled:"init"===i||i,type:"submit",className:"btn btn-primary btn-lg btn-block"},"Pr\xeat"))}}]),t}(n.Component),g={perso:{border:"3px solid black",borderRadius:20,padding:15,marginTop:20},avatars:{height:50,borderRadius:"50%",marginBottom:5},avatarSelected:{height:50,borderRadius:"50%",marginBottom:5,border:"3px dashed black"}},v=h,y={titre:{fontSize:25,marginLeft:20,marginTop:25,fontWeight:"normal"}},b=function(e){var t=e.onSubmit,a=e.onChange,n=e.onClick,o=e.users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:y.titre},"Choisissez vos personnages :"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(v,{onSubmit:t,onChange:a,onClick:n,user:o[0],competitor:o[1]}),r.a.createElement(v,{onSubmit:t,onChange:a,onClick:n,user:o[1],competitor:o[0]})))},f=a(80),E=a.n(f),k=a(141),w=a(140),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"result",value:function(){var e=this.props,t=e.tour,a=e.player,n=e.competitor;return t%2===0?"d\xe9fend"===a.action&&"d\xe9fend"===n.action?"".concat(a.name," n'a pas perdu de points de vie"):"d\xe9fend"===a.action&&"attaque"===n.action?"".concat(a.name," a perdu ").concat(n.weapon.damage/2," points de vie"):"".concat(a.name," a perdu ").concat(n.weapon.damage," points de vie"):"..."}},{key:"action",value:function(){var e=this.props,t=e.playerInGame,a=e.players,n=e.player,r=e.tour;return a[t].name!==n.name||r%2===0?"".concat(n.name," ").concat(n.action):"Attente action"}},{key:"render",value:function(){var e=this.props,t=e.player,a=e.fight;return r.a.createElement("div",{style:C.perso},r.a.createElement("p",null,r.a.createElement("img",{alt:"avatar",src:t.avatarSrc,style:C.avatar}),r.a.createElement("span",null,t.name)),r.a.createElement("p",null,"Points de vie : ",r.a.createElement("span",null,t.points)),!a&&r.a.createElement("p",null,"Mouvements restants : ",r.a.createElement("span",null,t.move)),r.a.createElement("p",null,"Arme : ",r.a.createElement("img",{alt:"arme",src:t.weapon.src}),r.a.createElement("span",null,t.weapon.name," (D\xe9gats : ",t.weapon.damage,")")),a&&r.a.createElement(r.a.Fragment,null,t.action?r.a.createElement("div",null,r.a.createElement("p",null,this.action()),r.a.createElement("p",null,this.result())):r.a.createElement("div",null,r.a.createElement("p",null,"Ici s'affichera l'action d\xe9cid\xe9e par ",t.name," "),r.a.createElement("p",null,"Ici le resultat de cette action"))))}}]),t}(n.Component),C={perso:{border:"3px solid black",borderRadius:20,padding:"25px 50px",marginTop:20},avatar:{height:50,borderRadius:"50%",marginBottom:5}},j=S,O=a(35),A=a.n(O),R=a(36),x=a.n(R),I=function(e){var t=e.showStart,a=e.onHide,n=e.player;return r.a.createElement(x.a,{show:t,onHide:a},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Le combat va commencer !!!")),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,"Les deux joueurs se sont rencontr\xe9s, ils vont donc devoir combatre"),r.a.createElement("p",null,"Chacun choisit d'attaquer ou de defendre contre le prochain coup"),r.a.createElement("p",null,r.a.createElement("span",null,n)," commence le combat")),r.a.createElement(x.a.Footer,null,r.a.createElement(A.a,{variant:"success",size:"lg",onClick:a},"C'est parti !")))},N={plateau:{height:600,width:600,padding:0,margin:"0 auto",backgroundColor:"green",fontSize:0},brick:{display:"inline-block",width:60,height:60,margin:0,padding:0,backgroundColor:"white",border:"1px solid grey",verticalAlign:"top"},obstacle:{display:"inline-block",width:60,height:60,margin:0,padding:0,backgroundColor:"black",border:"1px solid grey"},image:{height:50,borderRadius:"50%",marginTop:3,marginLeft:3},playerinGame:{height:50,borderRadius:"50%",marginTop:3,marginLeft:3,backgroundColor:"blue"}},q=function(e){var t=e.bricks,a=e.players,n=e.playerInGame;return r.a.createElement("div",{style:N.plateau},t.length>0&&t.map(function(e){return r.a.createElement("p",{key:e.id,style:"obstacle"===e.content.type?N.obstacle:N.brick},"empty"!==e.content.type&&"obstacle"!==e.content.type&&r.a.createElement("img",{style:e.content.name===a[n].name?N.playerinGame:N.image,src:e.content.src,alt:"type"}))}))},G=function(e){var t=e.onPass,a=e.fight,n=e.onAction;return r.a.createElement("div",{className:"col-md-12 text-center",style:{marginBottom:30}},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement(A.a,{variant:"dark",size:"lg",disabled:a,onClick:t},"Passer son tour"),r.a.createElement(A.a,{variant:"danger",size:"lg",disabled:!a,onClick:function(){return n("attaque")}},"Attaquer"),r.a.createElement(A.a,{variant:"warning",size:"lg",disabled:!a,onClick:function(){return n("d\xe9fend")}},"D\xe9fendre")))},L=function(e){var t,a,n=e.players;return n[0].points>0&&n[1].points<=0?(t=n[0].name,a=n[0].avatarSrc):n[1].points>0&&n[0].points<=0?(t=n[1].name,a=n[1].avatarSrc):t=null,r.a.createElement("div",{className:"container",style:{backgroundColor:"white",padding:30,marginTop:30,borderRadius:25}},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"display-4"},"Le combat est fini !!!")),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t," a gagn\xe9 le combat"),r.a.createElement("p",null,"Bravo !",r.a.createElement("img",{alt:"vainqueur",src:a}),r.a.createElement("img",{alt:"coupe",src:"armes/cup.png"}))):r.a.createElement("p",null,"Pas de vainqueur, les deux joueurs sont morts suite \xe0 leur derniere attaque ..."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("button",{onClick:function(){return window.location.reload()},className:"btn btn-success btn-lg float-right"},"Rejouer"))))},P=a(81),T=a.n(P),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={players:[],bricks:[],playerInGame:0,showStart:!1,fight:!1,tour:0},a.weaponsList=[{src:"https://christophe13012.github.io/plateauReact/armes/shuriken.png",damage:10,name:"shuriken"},{src:"https://christophe13012.github.io/plateauReact/armes/sword.png",damage:15,name:"\xe9p\xe9e"},{src:"https://christophe13012.github.io/plateauReact/armes/nunchaku.png",damage:15,name:"nunchaku"},{src:"https://christophe13012.github.io/plateauReact/armes/arrow.png",damage:20,name:"arc"},{src:"https://christophe13012.github.io/plateauReact/armes/bomb.png",damage:25,name:"bombe"}],a.handlePass=function(){var e=a.state,t=e.playerInGame,n=e.players;n[t].move=3,a.togglePlayer(),a.setState({players:n})},a.handleAction=function(e){var t=a.state,n=t.players,r=t.playerInGame,o=t.tour;n[r].action=e,o++,a.togglePlayer(),a.setState({players:n,tour:o}),a.fight()},a.handleClose=function(){a.setState({showStart:!1})},a.handleShow=function(){a.setState({showStart:!0})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(E.a.mark(function e(){var t,a,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.addEventListener("keydown",this.handleKeyDown.bind(this)),t=this.props.users,a=this.weaponsList,n=[],t.forEach(function(e){var t={name:e.name,avatarSrc:e.avatarSrc,points:100,move:3,position:0,action:null,weapon:Object(k.a)({type:"weapon"},a[0])};n.push(t)}),e.next=7,this.brickLoop();case 7:r=e.sent,this.arrayOfItems(r,10).forEach(function(e){return r[e].content.type="obstacle"}),this.arrayOfItems(r,2).forEach(function(e,t){r[e].content={type:"player",name:n[t].name,src:n[t].avatarSrc},n[t].position=e}),this.arrayOfItems(r,7).forEach(function(e){var t=T.a.random(1,4);r[e].content=a[t],r[e].content.type="weapon"}),this.setState({bricks:r,players:n});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"brickLoop",value:function(){for(var e=[],t=0;t<=99;t++){var a={id:t,content:{type:"empty",name:""}};e.push(a)}return e}},{key:"mouvement",value:function(e,t,a,n){var r=t[n].position,o=e[r].content;if(e[r+a]&&"obstacle"!==e[r+a].content.type){if("weapon"===e[r+a].content.type){var i=e[r+a].content;e[r].content=t[n].weapon,t[n].weapon=i}else e[r].content={type:"empty"};e[r+a].content=o,t[n].position=r+a,t[n].move--}0===t[n].move&&(t[n].move=3,n=0===n?1:0),this.startFight(),this.setState({bricks:e,players:t,playerInGame:n})}},{key:"startFight",value:function(){var e=this.state.players;e[0].position!==e[1].position+1&&e[0].position!==e[1].position-1&&e[0].position!==e[1].position-10&&e[0].position!==e[1].position+10||(e[0].move=1,e[1].move=1,this.handleShow(),this.setState({fight:!0,players:e}))}},{key:"handleKeyDown",value:function(e){var t=this.state,a=t.players,n=t.bricks,r=t.playerInGame,o=t.fight;"ArrowRight"!==e.key||o?"ArrowLeft"!==e.key||o?"ArrowUp"!==e.key||o?"ArrowDown"!==e.key||o||this.mouvement(n,a,10,r):this.mouvement(n,a,-10,r):this.mouvement(n,a,-1,r):this.mouvement(n,a,1,r)}},{key:"arrayOfItems",value:function(e,t){for(var a=[];a.length<t;){var n=T.a.random(0,99);a.includes(n)||a.includes(n-1)||a.includes(n+1)||a.includes(n-10)||a.includes(n+10)||"empty"!==e[n].content.type||a.push(n)}return a}},{key:"fight",value:function(){var e=this.state,t=e.players,a=e.tour,n=e.fight;a%2===1&&("attaque"===t[0].action&&"attaque"===t[1].action?(t[0].points-=t[1].weapon.damage,t[1].points-=t[0].weapon.damage):"attaque"===t[0].action&&"d\xe9fend"===t[1].action?(t[0].points-=t[1].weapon.damage,t[1].points-=t[0].weapon.damage/2):"attaque"===t[1].action&&"d\xe9fend"===t[0].action&&(t[1].points-=t[0].weapon.damage,t[0].points-=t[1].weapon.damage/2)),(t[0].points<1||t[1].points<1)&&(n="over"),this.setState({players:t,fight:n})}},{key:"togglePlayer",value:function(){var e=this.state.playerInGame;e=0===e?1:0,this.setState({playerInGame:e})}},{key:"render",value:function(){var e=this.state,t=e.players,a=e.bricks,n=e.playerInGame,o=e.fight,i=e.tour;return r.a.createElement("div",null,"over"===o?r.a.createElement(L,{players:t}):r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:30}},t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{players:t,player:t[0],competitor:t[1],fight:o,tour:i,playerInGame:n}),r.a.createElement(j,{players:t,player:t[1],competitor:t[0],fight:o,tour:i,playerInGame:n}))),r.a.createElement(G,{onPass:this.handlePass,fight:o,onAction:this.handleAction}),t.length>0&&r.a.createElement(q,{players:t,bricks:a,playerInGame:n}),t.length>0&&r.a.createElement(I,{showStart:this.state.showStart,onHide:this.handleClose,player:t[n].name})))}}]),t}(n.Component),F=a(32),z=a.n(F),D={id:z.a.required(),name:z.a.string().min(3).max(20).required(),avatarSrc:z.a.string().allow(""),ready:z.a.required()},H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[{id:"user1",name:"",avatarSrc:"https://christophe13012.github.io/plateauReact/avatars/001-girl.png",error:"init",ready:!1},{id:"user2",name:"",avatarSrc:"https://christophe13012.github.io/plateauReact/avatars/001-girl.png",error:"init",ready:!1}]},a.handleSubmit=function(e){e.preventDefault();var t="user1"===e.currentTarget.name?0:1,n=Object(l.a)(a.state.users);n[t].ready=!0,a.setState({users:n})},a.validateProperty=function(e){delete e.error;var t=z.a.validate(e,D,{abortEarly:!1}).error;return t?t.details[0].message:t},a.handleChange=function(e){var t="user1"===e.currentTarget.name?0:1,n=Object(l.a)(a.state.users),r=e.currentTarget.value;n[t].name=r;var o=a.validateProperty(n[t]);n[t].error=o,a.setState({users:n})},a.handleClick=function(e){var t=e.currentTarget.name,n=e.currentTarget.src,r=Object(l.a)(a.state.users);r.map(function(e){return e.id===t?e.avatarSrc=n:e}),a.setState({users:r})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.users,t=!1;return e[0].ready&&e[1].ready&&(t=!0),r.a.createElement("div",{className:"App"},r.a.createElement(d,null),!t&&r.a.createElement(b,{users:e,onSubmit:this.handleSubmit,onChange:this.handleChange,onClick:this.handleClick}),t&&r.a.createElement(B,{users:e}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(311);i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.b69dc725.chunk.js.map