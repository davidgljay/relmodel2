(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(67)},52:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=(n(52),n(7)),l=n(9),c=n(12),h=n(10),m=n(11),d=n(13),u=function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;Object(s.a)(this,e),this.nodes=[],this.bits=[],this.dice=[],this.diceIndex=0,this.maxEntropy=Math.log1p(1/t)*t^2,this.minEntropy=Math.log1p(1)*t;for(var l=0;l<t;l++)this.nodes[l]={stability:0,color:360*Math.random(),targets:Array.from({length:t},function(){return 1/t}),sum:.1*t,max:.1,entropy:[],entropyDeltas:[]};for(var c=0;c<r;c++)this.dice[c]=Math.random();this.normalize=function(e){var n=0;e.max=0;var a=0;e.targets.forEach(function(e){return n+=e});for(var r=0;r<t;r++)e.targets[r]=e.targets[r]/n,a+=Math.abs(Math.log1p(e.targets[r])),e.targets[r]>e.max&&(e.max=e.targets[r]);e.entropy=e.entropy.concat(a).reverse().slice(0,200).reverse(),e.entropyDeltas=e.entropy.map(function(t,n){return n>4?t-e.entropy[n-4]:0}).slice(4,200)},this.step=function(e){var a=n.nodes[e];a||console.error("Node not found");var r,i=n.diceIndex>=n.dice.length?Math.random():n.dice[n.diceIndex];n.diceIndex++;var o=0;for(r=0;r<t-1&&!((o+=a.targets[r])>i&&e!==r);r++);e===r&&(r=0),n.bits.push({source:e,target:r,color:a.color,complete:0}),n.normalize(n.nodes[e])},this.bitStep=function(){n.bits=n.bits.filter(function(e){return e.complete<100});for(var e=0;e<n.bits.length;e++){var t=n.bits[e];if(t.complete+=1,100===t.complete){var r=t.color,s=n.nodes[t.target].color,l=(360-Math.abs(r-s))*a;n.nodes[t.target].targets[t.source]+=l/700*i,n.normalize(n.nodes[t.target]);var c=(Math.abs(r-s)+360)%360/2*(r>s?1:-1)/30;n.nodes[t.target].color=(n.nodes[t.target].color+c*o)%360}}}},p=n(2),f=n.n(p),v=(f.a.func,f.a.shape,f.a.object,f.a.string,f.a.number,f.a.arrayOf,function(e){var t=e.width,n=e.height,a=e.bits,i=e.relModel,o=e.getPosition;e.entropy;return r.a.createElement("svg",{id:"visualization",width:t,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.map(function(e,t){var n=o(e.source),a=o(e.target),i={x:n.x+(a.x-n.x)*e.complete/100,y:n.y+(a.y-n.y)*e.complete/100};return r.a.createElement("circle",{key:"bit"+t,style:{fill:"hsl(".concat(e.color,", 100%, 50%)")},cx:i.x,cy:i.y,r:"2"})}),i.nodes.map(function(e,t){var n=e.color,a=(e.max,o(t)),i=a.x,s=a.y;return r.a.createElement("circle",{key:t,style:{fill:"hsl(".concat(n,", 100%, 50%)"),zIndex:10},cx:i,cy:s,r:"10"})}))}),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={relModel:e.relModel?e.relModel:new u(e.numNodes),relIndex:0,stepTimer:null,bitTimer:null,restartTimer:null,bits:[]},n.getPosition=e.getPosition?e.getPosition.bind(Object(d.a)(n)):function(e){var t=n.props,a=t.height,r=t.width,i=t.radius,o=t.numNodes,s=r/2,l=a/2;return{x:Math.sin(2*Math.PI*e/o)*i+s,y:Math.cos(2*Math.PI*e/o)*i+l}},n.runStep=function(){var e=n.props.numNodes,t=n.state,a=t.relModel,r=t.relIndex;a.step(r),n.setState({relIndex:(r+1)%e})},n.runBits=function(){var e=n.state.relModel;e.bitStep(),n.setState({bits:e.bits})},n.restart=function(e){var t=Object(d.a)(n),a=t.runStep,r=t.runBits;clearInterval(n.state.stepTimer),clearInterval(n.state.bitTimer);var i=setInterval(a,40),o=setInterval(r,20);n.setState({relModel:new u(n.props.numNodes),stepTimer:i,bitTimer:o,relIndex:0,bits:[]})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.numNodes,a=t.restartInterval;if(this.restart(this.props.numNodes),a){var r=setInterval(function(){return e.restart(n)},a);this.setState({restartTimer:r})}}},{key:"componentDidUpdate",value:function(e,t){e.numNodes!==this.props.numNodes&&this.restart(this.props.numNodes)}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.stepTimer,n=e.bitTimer,a=e.restartTimer;clearInterval(t),clearInterval(n),clearInterval(a)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=this.state,i=a.relModel,o=a.bits;return r.a.createElement("div",{style:b.container},r.a.createElement(v,{width:n,height:t,relModel:i,bits:o,getPosition:this.getPosition}))}}]),t}(a.Component),b={container:{padding:20}},y=n(83),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={numNodes:10},n.handleSlider=function(e,t){n.setState({numNodes:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.numNodes;return r.a.createElement("div",null,r.a.createElement(g,{height:350,width:300,numNodes:e,radius:120}),r.a.createElement("div",{style:x.sliderContainer},r.a.createElement(y.a,{className:"slider",value:e,"aria-labelledby":"Number of Nodes",onChange:this.handleSlider,min:2,max:50,step:1})))}}]),t}(a.Component),x={sliderContainer:{width:300,margin:30}},M=(f.a.func,f.a.shape,f.a.object,f.a.string,f.a.number,f.a.arrayOf,function(e){var t=e.width,n=e.height,a=e.nodes;return r.a.createElement("svg",{id:"probabilities",width:t,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.map(function(e,n){var a=e.color,i=e.targets,o=i.length;return i.map(function(e,i){return r.a.createElement("rect",{key:"".concat(n,"-").concat(i),style:{fill:"hsl(".concat(a,", 100%, 50%)")},x:i*t/o,y:50*n+55-50*e,width:t/(3*o)-2,height:50*e})})}))}),E=(f.a.func,f.a.shape,f.a.object,f.a.string,f.a.number,f.a.arrayOf,function(e){var t=e.width,n=e.height,a=e.nodes;return r.a.createElement("svg",{id:"probabilities",width:t,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.map(function(e,n){var a=e.color,i=e.targets,o=i.length,s=i.reduce(function(e,t){return e+Math.log1p(t)},0),l=o*Math.log1p(1/o),c=Math.log1p(1);return r.a.createElement("rect",{key:"".concat(n),style:{fill:"hsl(".concat(a,", 100%, 50%)")},x:0,y:25*n,width:(1-(s-c)/(l-c))*t,height:20})}))}),I=(f.a.func,f.a.shape,f.a.object,f.a.string,f.a.number,f.a.arrayOf,function(e){var t=e.width,n=e.height,a=(e.entropy,e.nodes),i=e.numNodes;return r.a.createElement("svg",{id:"probabilities",width:t,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.map(function(e,n){var a=e.color,o=e.entropyDeltas,s=i*Math.log1p(1/i)-Math.log1p(1);return r.a.createElement("svg",null,r.a.createElement("polyline",{key:"".concat(n),style:{stroke:"hsl(".concat(a,", 100%, 50%)"),strokeWidth:1,fill:"none"},x:0,y:25*n,points:o.map(function(e,a){return"".concat(a*t/200,",").concat(e/s*80+10+25*n)}).join(" ")}),r.a.createElement("line",{key:"base".concat(n),style:{stroke:"lightgrey",strokeWidth:1,fill:"none"},x1:0,y1:25*(n+.45),x2:t-5,y2:25*(n+.45)}))}))}),k=n(84),T=n(33),O=n.n(T),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={relModel:new u(e.numNodes),relIndex:0,stepTimer:null,bitTimer:null,restartTimer:null,bits:[],entropy:[]},n.getPosition=function(e){var t=n.props,a=t.height,r=t.width,i=t.numNodes,o=r/2,s=a/2;return e===i/4?{x:r/3,y:a/2}:e===3*i/4?{x:2*r/3,y:a/2}:{x:Math.sin(2*Math.PI*e/i)*r+o,y:Math.cos(2*Math.PI*e/i)*r+s}},n.runStep=function(){var e=n.props,t=e.numNodes,a=(e.width,n.state),r=a.relModel;a.relIndex;r.step(t/4),r.step(3*t/4)},n.runBits=e.runBits?e.runBits.bind(Object(d.a)(n)):function(){var e=n.state.relModel;e.bitStep(),n.setState({bits:e.bits})},n.restart=function(){var e=Object(d.a)(n),t=e.runStep,a=e.runBits;clearInterval(n.state.stepTimer),clearInterval(n.state.bitTimer);var r=setInterval(t,250),i=setInterval(a,20);n.setState({relModel:new u(n.props.numNodes),stepTimer:r,bitTimer:i,relIndex:0,bits:[]})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.numNodes;this.restart(this.props.numNodes)}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.stepTimer,n=e.bitTimer,a=e.restartTimer;clearInterval(t),clearInterval(n),clearInterval(a)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=e.showProbabilities,i=e.numNodes,o=this.state,s=o.relModel,l=o.bits,c=o.entropy;return r.a.createElement("div",{style:S.container},r.a.createElement(v,{width:n,height:t,relModel:s,bits:l,getPosition:this.getPosition,entropy:c}),r.a.createElement(k.a,{"aria-label":"Restart",onClick:this.restart},r.a.createElement(O.a,{fontSize:"medium"})),a&&r.a.createElement("div",null,r.a.createElement("div",{style:S.text},"As relationships form, the probability distributions within a system become more stable."),r.a.createElement(M,{width:n,height:110,nodes:[s.nodes[i/4],s.nodes[3*i/4]]}),r.a.createElement("div",{style:S.text},"A variable called ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Entropy"},"entropy")," measures the randomness of these probability distrubutions, by inverting it we get a nice number that goes up as nodes in the system become more stable."),r.a.createElement(E,{width:n,height:50,nodes:[s.nodes[i/4],s.nodes[3*i/4]]}),r.a.createElement("div",{style:S.text},'It can also be helpful to examine how quickly a system forms stable relationships. This "speed of relationship" is what we will call "relationality."'),r.a.createElement(I,{width:n,height:50,nodes:[s.nodes[i/4],s.nodes[3*i/4]],numNodes:s.nodes.length}),r.a.createElement("div",{style:S.text},'Examining the relationality of a system can give insight into how it will behave. Some systems are more relational than others (they have a greater) "speed of relationship". With enough knowledge, one can intervene in systems to make them more or less relational. But there are limits.')))}}]),t}(a.Component),S={container:{padding:20,display:"flex",flexDirection:"column",alignItems:"center"},text:{marginTop:20,marginBottom:10}},N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={temperature:.25,relModel:e.relModel?e.relModel:new u(e.numNodes),relIndex:0,stepTimer:null,bitTimer:null,restartTimer:null,bits:[]},n.handleSlider=function(e,t){n.setState({temperature:t}),console.log(t)},n.getPosition=function(e){var t=n.props,a=t.height,r=t.width,i=t.numNodes,o=r/2,s=a/2;return e===i/4?{x:r/3,y:a/2}:e===3*i/4?{x:2*r/3,y:a/2}:{x:Math.sin(2*Math.PI*e/i)*r+o,y:Math.cos(2*Math.PI*e/i)*r+s}},n.runStep=function(){var e=n.props.numNodes,t=n.state,a=t.relModel,r=t.relIndex,i=t.temperature;if(Math.random()<i||r===e/4||r===3*e/4){a.step(r);for(var o=0;o<a.nodes.length;o++)o!==e/4&&o!==3*e/4&&(a.nodes[o].targets=Array(e).fill(1/e),a.nodes[o].targets[e/4]=3/e,a.nodes[o].targets[3*e/4]=3/e,a.normalize(a.nodes[o]),a.nodes[o].color=360*Math.random())}n.setState({relIndex:(r+1)%e})},n.runBits=function(){var e=n.state.relModel;e.bitStep(),n.setState({bits:e.bits})},n.restart=function(){var e=Object(d.a)(n),t=e.runStep,a=e.runBits;clearInterval(n.state.stepTimer),clearInterval(n.state.bitTimer);var r=setInterval(t,30),i=setInterval(a,20);n.setState({relModel:new u(n.props.numNodes),stepTimer:r,bitTimer:i,relIndex:0,bits:[]})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.numNodes;this.restart(e)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.temperature;n.stepTimer;if(t.temperature!==a){clearInterval(this.state.stepTimer);var r=setInterval(this.runStep,30);this.setState({stepTimer:r})}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.stepTimer,n=e.bitTimer;e.restartTimer;clearInterval(t),clearInterval(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,a=this.state,i=a.temperature,o=a.bits,s=a.relModel;return r.a.createElement("div",null,r.a.createElement(v,{width:t,height:n,relModel:s,bits:o,getPosition:this.getPosition}),r.a.createElement(y.a,{className:"temperatureSlider",value:i,"aria-labelledby":"Relational Temperature",onChange:this.handleSlider,min:0,max:1}))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={relModel:new u(4,1),relIndex:0,stepTimer:null,bitTimer:null,restartTimer:null,bits:[]},n.getPosition=function(e){var t=n.props,a=t.height,r=t.width,i=t.radius,o=r/2,s=a/2;return{x:Math.sin(2*Math.PI*e/4)*i+o,y:Math.cos(2*Math.PI*e/4)*i+s}},n.runStep=function(){var e=n.state,t=e.relModel,a=e.relIndex;t.step(a),n.setState({relIndex:(a+1)%4})},n.runBits=function(){var e=n.state.relModel;e.bitStep(),n.setState({bits:e.bits})},n.restart=function(){var e=Object(d.a)(n),t=e.runStep,a=e.runBits;clearInterval(n.state.stepTimer),clearInterval(n.state.bitTimer);var r=setInterval(t,100),i=setInterval(a,20);n.setState(function(){var e=new u(4,.1,1,1,.1);return e.nodes[0].color=100,e.nodes[1].color=100,e.nodes[2].color=300,e.nodes[3].color=300,{relModel:e,stepTimer:r,bitTimer:i,relIndex:0,bits:[]}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.restartInterval;if(this.restart(),t){var n=setInterval(function(){return e.restart()},t);this.setState({restartTimer:n})}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.stepTimer,n=e.bitTimer,a=e.restartTimer;clearInterval(t),clearInterval(n),clearInterval(a)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=this.state,i=a.relModel,o=a.bits;return r.a.createElement("div",{style:B.container},r.a.createElement(v,{width:n,height:t,relModel:i,bits:o,getPosition:this.getPosition}),r.a.createElement(k.a,{"aria-label":"Restart",onClick:this.restart},r.a.createElement(O.a,{fontSize:"medium"})))}}]),t}(a.Component),B={container:{padding:20,display:"flex",flexDirection:"column",alignItems:"center"}},C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:D.pageContainer},r.a.createElement("div",{className:"App",style:D.container},r.a.createElement("h1",null,"Relationality"),r.a.createElement("h3",null,"A mathematical framework for the measurement and prediction of relationship formation."),r.a.createElement(w,null),r.a.createElement("div",{style:D.explainer},"An example of a mathematical model in which flows of information move from randomness to stability.",r.a.createElement("br",null),"Color illustrates how relational dynamics alter the state of a system over time."),r.a.createElement("h3",null,"Why Measure and Predict Relationships?"),r.a.createElement("div",{style:D.paragraph},"In 1949 a landmark scientific paper described a mathematical framework for measuring information in bits. This framework allowed scientists and engineers to precisely understand how information would behave regardless of what kind of information it was. By figuring out how to send, store and processing bits, scientists could send, store and process any kind of information."),r.a.createElement("div",{style:D.paragraph},"This project seeks to create a similar mathematical framework for relationships, one that will allow precise and meaningful predictions to be made about relationships regardless of the kind of relationships involved. The goal is not to control the outcome of relationships (in fact there are hard mathematical limits to such control), but to enable richer conversation about how to create environments in which relationships thrive."),r.a.createElement("h3",null,"What is a Relationship?"),r.a.createElement("div",{style:D.paragraph},"While relationships between humans are very different from relationships between bacteria or relationships between atoms, all involve",r.a.createElement("b",null," dynamic flows of information with the ability to stabilize over time. "),"By examining the fundamental properties of such flows of information it is possible to map out universal dynamics which all relationships share."),r.a.createElement("h4",null,"Relationships Move From Chaos To Stability"),r.a.createElement(j,{height:150,width:300,numNodes:20}),r.a.createElement("div",{style:D.paragraph},"Relationships form when information being randomly transmitted across a system finds a self-reinforcing feedback loop. These stable flows of information go on to reshape the entities sending and receiving them."),r.a.createElement("h4",null,"Some Relationships Are More Likely To Form Than Others"),r.a.createElement(P,{height:200,width:200,radius:70}),r.a.createElement("div",{style:D.paragraph},"Different kinds of information will have different impacts on a system. Information which changes how something behaves (that is, changes how it sends its own information out to the world) is more likely to result in a relationship than information which doesn't."),r.a.createElement("h4",null,"Relationship Often Form In A Noisy Environment"),r.a.createElement(N,{height:150,width:300,numNodes:20}),r.a.createElement("div",{style:D.paragraph},"Most relationships do not happen in a vacuum. New information from the surrounding environment constantly disrupts stable relational states. To persist, relationships must not only establish a stable flow of information, but continuously re-establish that flow in response to external stress."),r.a.createElement("h3",null,"How Can We Measure Relationships?"),r.a.createElement("div",{style:D.paragraph},"A metric can never capture the full complexity of a relationship the way that a series of bits can never fully capture a the experience of listening to music. But relational measurement can help us to make sense of relationships and facilitate their growth."),r.a.createElement("h4",null,"We Measure Relationships By Measuring How Order Emerges From Disorder"),r.a.createElement(j,{height:150,width:300,numNodes:20,showProbabilities:!0})))}}]),t}(a.Component),D={pageContainer:{width:"calc(100%-40px)",padding:20,display:"flex",alignItems:"center",flexDirection:"column",paddingBottom:80,fontFamily:"Montserrat"},container:{display:"flex",alignItems:"center",flexDirection:"column",maxWidth:900,textAlign:"center"},explainer:{fontStyle:"italic",color:"grey"},paragraph:{fontSize:14,textAlign:"left",padding:10}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.26384dcd.chunk.js.map