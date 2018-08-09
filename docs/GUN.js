!function(){function t(n){function o(t){return t.split("/").slice(-1).toString().replace(".js","")}return n.slice?t[o(n)]:function(e,i){n(e={exports:{}}),t[o(i)]=e.exports}}var n;"undefined"!=typeof window&&(n=window),"undefined"!=typeof global&&(n=global),n=n||{};var o=n.console||{log:function(){}};if("undefined"!=typeof module)var e=module;t(function(t){var n={};n.fns=n.fn={is:function(t){return!!t&&"function"==typeof t}},n.bi={is:function(t){return t instanceof Boolean||"boolean"==typeof t}},n.num={is:function(t){return!e(t)&&(t-parseFloat(t)+1>=0||1/0===t||-(1/0)===t)}},n.text={is:function(t){return"string"==typeof t}},n.text.ify=function(t){return n.text.is(t)?t:"undefined"!=typeof JSON?JSON.stringify(t):t&&t.toString?t.toString():t},n.text.random=function(t,n){var o="";for(t=t||24,n=n||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";t>0;)o+=n.charAt(Math.floor(Math.random()*n.length)),t--;return o},n.text.match=function(t,o){function e(t,n){for(var o,e=-1,i=0;o=n[i++];)if(!~(e=t.indexOf(o,e+1)))return!1;return!0}var i=!1;if(t=t||"",o=n.text.is(o)?{"=":o}:o||{},n.obj.has(o,"~")&&(t=t.toLowerCase(),o["="]=(o["="]||o["~"]).toLowerCase()),n.obj.has(o,"="))return t===o["="];if(n.obj.has(o,"*")){if(t.slice(0,o["*"].length)!==o["*"])return!1;i=!0,t=t.slice(o["*"].length)}if(n.obj.has(o,"!")){if(t.slice(-o["!"].length)!==o["!"])return!1;i=!0}if(n.obj.has(o,"+")&&n.list.map(n.list.is(o["+"])?o["+"]:[o["+"]],function(n){return t.indexOf(n)>=0?void(i=!0):!0}))return!1;if(n.obj.has(o,"-")&&n.list.map(n.list.is(o["-"])?o["-"]:[o["-"]],function(n){return t.indexOf(n)<0?void(i=!0):!0}))return!1;if(n.obj.has(o,">")){if(!(t>o[">"]))return!1;i=!0}if(n.obj.has(o,"<")){if(!(t<o["<"]))return!1;i=!0}if(n.obj.has(o,"?")){if(!e(t,o["?"]))return!1;i=!0}return i},n.list={is:function(t){return t instanceof Array}},n.list.slit=Array.prototype.slice,n.list.sort=function(t){return function(n,o){return n&&o?(n=n[t],o=o[t],o>n?-1:n>o?1:0):0}},n.list.map=function(t,n,o){return a(t,n,o)},n.list.index=1,n.obj={is:function(t){return t?t instanceof Object&&t.constructor===Object||"Object"===Object.prototype.toString.call(t).match(/^\[object (\w+)\]$/)[1]:!1}},n.obj.put=function(t,n,o){return(t||{})[n]=o,t},n.obj.has=function(t,n){return t&&Object.prototype.hasOwnProperty.call(t,n)},n.obj.del=function(t,n){return t?(t[n]=null,delete t[n],t):void 0},n.obj.as=function(t,n,o,e){return t[n]=t[n]||(e===o?{}:o)},n.obj.ify=function(t){if(r(t))return t;try{t=JSON.parse(t)}catch(n){t={}}return t},function(){function t(t,n){u(this,n)&&o!==this[n]||(this[n]=t)}var o;n.obj.to=function(n,o){return o=o||{},a(n,t,o),o}}(),n.obj.copy=function(t){return t?JSON.parse(JSON.stringify(t)):t},function(){function t(t,n){var o=this.n;if(!o||!(n===o||r(o)&&u(o,n)))return n?!0:void 0}n.obj.empty=function(n,o){return n&&a(n,t,{n:o})?!1:!0}}(),function(){function t(n,o){return 2===arguments.length?(t.r=t.r||{},void(t.r[n]=o)):(t.r=t.r||[],void t.r.push(n))}var i=Object.keys;n.obj.map=function(a,s,f){var c,l,p,d,h,g=0,v=o(s);if(t.r=null,i&&r(a)&&(d=Object.keys(a),h=!0),e(a)||d)for(l=(d||a).length;l>g;g++){var b=g+n.list.index;if(v){if(p=h?s.call(f||this,a[d[g]],d[g],t):s.call(f||this,a[g],b,t),p!==c)return p}else if(s===a[h?d[g]:g])return d?d[g]:b}else for(g in a)if(v){if(u(a,g)&&(p=f?s.call(f,a[g],g,t):s(a[g],g,t),p!==c))return p}else if(s===a[g])return g;return v?t.r:n.list.index?0:-1}}(),n.time={},n.time.is=function(t){return t?t instanceof Date:+(new Date).getTime()};var o=n.fn.is,e=n.list.is,i=n.obj,r=i.is,u=i.has,a=i.map;t.exports=n})(t,"./type"),t(function(t){t.exports=function n(t,o,e){if(!t)return{to:n};var t=(this.tag||(this.tag={}))[t]||(this.tag[t]={tag:t,to:n._={next:function(){}}});if(o instanceof Function){var i={off:n.off||(n.off=function(){return this.next===n._.next?!0:(this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=n._.next,void(this.back.to=this.to))}),to:n._,next:o,the:t,on:this,as:e};return(i.back=t.last||t).to=i,t.last=i}return(t=t.to).next(o),t}})(t,"./onto"),t(function(n){function o(t,n){n=n||{},n.id=n.id||"#",n.rid=n.rid||"@",n.uuid=n.uuid||function(){return+new Date+Math.random()};var o=e;return o.stun=function(t){var n=function(t){return n.off&&n===this.stun?(this.stun=null,!1):o.stun.skip?!1:(t&&(t.cb=t.fn,t.off(),e.queue.push(t)),!0)},e=n.res=function(t,r){if(!n.off){if(t instanceof Function)return o.stun.skip=!0,t.call(r),void(o.stun.skip=!1);n.off=!0;var u,a=0,s=e.queue,f=s.length;for(e.queue=[],n===i.stun&&(i.stun=null),a;f>a;a++)u=s[a],u.fn=u.cb,u.cb=null,o.stun.skip=!0,u.ctx.on(u.tag,u.fn,u),o.stun.skip=!1}},i=t._;return e.back=i.stun||(i.back||{_:{}})._.stun,e.back&&(e.back.next=n),e.queue=[],i.stun=n,e},o}var e=t("./onto");n.exports=o})(t,"./onify"),t(function(n){function o(t,n,e){o.time=e||Gun.time.is,o.waiting.push({when:t,event:n||function(){}}),o.soonest<t||o.set(t)}var e=t("./type");o.waiting=[],o.soonest=1/0,o.sort=e.list.sort("when"),o.set=function(t){if(!(1/0<=(o.soonest=t))){var n=o.time();t=n>=t?0:t-n,clearTimeout(o.id),o.id=setTimeout(o.check,t)}},o.each=function(t,n,o){var e=this;t&&(t.when<=e.now?t.event instanceof Function&&setTimeout(function(){t.event()},0):(e.soonest=e.soonest<t.when?e.soonest:t.when,o(t)))},o.check=function(){var t={now:o.time(),soonest:1/0};o.waiting.sort(o.sort),o.waiting=e.list.map(o.waiting,o.each,t)||[],o.set(t.soonest)},n.exports=o})(t,"./schedule"),t(function(t){function n(t,n,e,i,r){if(n>t)return{defer:!0};if(e>n)return{historical:!0};if(n>e)return{converge:!0,incoming:!0};if(n===e){if(o(i)===o(r))return{state:!0};if(o(i)<o(r))return{converge:!0,current:!0};if(o(r)<o(i))return{converge:!0,incoming:!0}}return{err:"you have not properly handled recursion through your data or filtered it as JSON"}}if("undefined"==typeof JSON)throw new Error("JSON is not included in this browser. Please load it first: ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js");var o=JSON.stringify;t.exports=n})(t,"./HAM"),t(function(n){var o=t("./type"),e={};e.is=function(t){return t===i?!1:null===t?!0:t===1/0?!1:s(t)||u(t)||a(t)?!0:e.rel.is(t)||!1},e.rel={_:"#"},function(){function t(t,n){var o=this;return o.id?o.id=!1:n==r&&s(t)?void(o.id=t):o.id=!1}e.rel.is=function(n){if(n&&n[r]&&!n._&&c(n)){var o={};if(p(n,t,o),o.id)return o.id}return!1}}(),e.rel.ify=function(t){return l({},r,t)};var i,r=e.rel._,u=o.bi.is,a=o.num.is,s=o.text.is,f=o.obj,c=f.is,l=f.put,p=f.map;n.exports=e})(t,"./val"),t(function(n){var o=t("./type"),e=t("./val"),i={_:"_"};i.soul=function(t,n){return t&&t._&&t._[n||p]},i.soul.ify=function(t,n){return n="string"==typeof n?{soul:n}:n||{},t=t||{},t._=t._||{},t._[p]=n.soul||t._[p]||l(),t},function(){function t(t,n){return n!==i._?e.is(t)?void(this.cb&&this.cb.call(this.as,t,n,this.n,this.s)):!0:void 0}i.is=function(n,o,e){var r;return a(n)&&(r=i.soul(n))?!f(n,t,{as:e,cb:o,s:r,n:n}):!1}}(),function(){function t(t,n){var o,i,r=this.o;return r.map?(o=r.map.call(this.as,t,""+n,r.node),void(i===o?s(r.node,n):r.node&&(r.node[n]=o))):void(e.is(t)&&(r.node[n]=t))}i.ify=function(n,o,e){return o?"string"==typeof o?o={soul:o}:o instanceof Function&&(o={map:o}):o={},o.map&&(o.node=o.map.call(e,n,r,o.node||{})),(o.node=i.soul.ify(o.node||{},o))&&f(n,t,{o:o,as:e}),o.node}}();var r,u=o.obj,a=u.is,s=u.del,f=u.map,c=o.text,l=c.random,p=e.rel._;n.exports=i})(t,"./node"),t(function(n){function o(){var t=r();return t>u?(a=0,u=t):u=t+(a+=1)/s}var e=t("./type"),i=t("./node"),r=e.time.is,u=-(1/0),a=0,s=1e3;o._=">",o.ify=function(t,n,e,r,u){if(!t||!t[m]){if(!u)return;t=i.soul.ify(t,u)}var a=l(t[m],o._);return f!==n&&n!==m&&(v(e)&&(a[n]=e),f!==r&&(t[n]=r)),t},o.is=function(t,n,e){var i=n&&t&&t[m]&&t[m][o._]||e;if(i)return v(i[n])?i[n]:-(1/0)},function(){function t(t,n){m!==n&&o.ify(this.o,n,this.s)}o.map=function(n,e,i){var r,u=d(u=n||e)?u:null;return n=y(n=n||e)?n:null,u&&!n?(e=v(e)?e:o(),u[m]=u[m]||{},h(u,t,{o:u,s:e}),u):(i=i||d(e)?e:r,e=v(e)?e:o(),function(o,u,a,s){return n?(n.call(i||this||{},o,u,a,s),void(p(a,u)&&r===a[u]||t.call({o:a,s:e},o,u))):(t.call({o:a,s:e},o,u),o)})}}();var f,c=e.obj,l=c.as,p=c.has,d=c.is,h=c.map,g=e.num,v=g.is,b=e.fn,y=b.is,m=i._;n.exports=o})(t,"./state"),t(function(n){var o=t("./type"),e=t("./val"),i=t("./node"),r={};!function(){function t(t,o){return t&&o===i.soul(t)&&i.is(t,this.fn)?void(this.cb&&(n.n=t,n.as=this.as,this.cb.call(n.as,t,o,n))):!0}function n(t){t&&i.is(n.n,t,n.as)}r.is=function(n,o,e,i){return n&&s(n)&&!l(n)?!d(n,t,{cb:o,fn:e,as:i}):!1}}(),function(){function t(t,r){var u;return(u=l(t,r))?u:(r.env=t,r.soul=o,i.ify(r.obj,n,r)&&(t.graph[e.rel.is(r.rel)]=r.node),r)}function n(n,o,r){var s,l,p=this,d=p.env;if(i._===o&&c(n,e.rel._))return r._;if(s=a(n,o,r,p,d)){if(o||(p.node=p.node||r||{},c(n,i._)&&(p.node._=h(n._)),p.node=i.soul.ify(p.node,e.rel.is(p.rel)),p.rel=p.rel||e.rel.ify(i.soul(p.node))),(l=d.map)&&(l.call(d.as||{},n,o,r,p),c(r,o))){if(n=r[o],u===n)return void f(r,o);if(!(s=a(n,o,r,p,d)))return}if(!o)return p.node;if(!0===s)return n;if(l=t(d,{obj:n,path:p.path.concat(o)}),l.node)return l.rel}}function o(t){var n=this,o=e.rel.is(n.rel),r=n.env.graph;n.rel=n.rel||e.rel.ify(t),n.rel[e.rel._]=t,n.node&&n.node[i._]&&(n.node[i._][e.rel._]=t),c(r,o)&&(r[t]=r[o],f(r,o))}function a(t,n,o,i,r){var u;return e.is(t)?!0:s(t)?1:(u=r.invalid)?(t=u.call(r.as||{},t,n,o),a(t,n,o,i,r)):void(r.err="Invalid value at '"+i.path.concat(n).join(".")+"'!")}function l(t,n){for(var o,e=t.seen,i=e.length;i--;)if(o=e[i],n.obj===o.obj)return o;e.push(n)}r.ify=function(n,o,i){var r={path:[],obj:n};return o?"string"==typeof o?o={soul:o}:o instanceof Function&&(o.map=o):o={},o.soul&&(r.rel=e.rel.ify(o.soul)),o.graph=o.graph||{},o.seen=o.seen||[],o.as=o.as||i,t(o,r),o.root=r.node,o.graph}}(),r.node=function(t){var n=i.soul(t);if(n)return p({},n,t)},function(){function t(t,n){var o,u;if(i._===n){if(l(t,e.rel._))return;return void(this.obj[n]=h(t))}return(o=e.rel.is(t))?(u=this.opt.seen[o])?void(this.obj[n]=u):void(this.obj[n]=this.opt.seen[o]=r.to(this.graph,o,this.opt)):void(this.obj[n]=t)}r.to=function(n,o,e){if(n){var i={};return e=e||{seen:{}},d(n[o],t,{obj:i,graph:n,opt:e}),i}}}();var u,a=(o.fn.is,o.obj),s=a.is,f=a.del,c=a.has,l=a.empty,p=a.put,d=a.map,h=a.copy;n.exports=r})(t,"./graph"),t(function(n){function o(){this.cache={}}var e=t("./type");o.prototype.track=function(t){return this.cache[t]=e.time.is(),this.to||this.gc(),t},o.prototype.check=function(t){return e.obj.has(this.cache,t)?this.track(t):!1},o.prototype.gc=function(){var t=this,n=e.time.is(),o=n,i=3e5;e.obj.map(t.cache,function(r,u){o=Math.min(n,r),i>n-r||e.obj.del(t.cache,u)});var r=e.obj.empty(t.cache);if(r)return void(t.to=null);var u=n-o,a=i-u;t.to=setTimeout(function(){t.gc()},a)},n.exports=o})(t,"./dup"),t(function(n){function i(t){return t instanceof i?(this._={gun:this}).gun:this instanceof i?i.create(this._={gun:this,opt:t}):new i(t)}i.is=function(t){return t instanceof i},i.version=.6,i.chain=i.prototype,i.chain.toJSON=function(){};var r=t("./type");r.obj.to(r,i),i.HAM=t("./HAM"),i.val=t("./val"),i.node=t("./node"),i.state=t("./state"),i.graph=t("./graph"),i.dup=t("./dup"),i.on=t("./onify")(),i._={node:i.node._,soul:i.val.rel._,state:i.state._,field:".",value:"="},function(){function t(t){var o=this.as,e=o.gun;t.get&&n(t,o)||(o.on("in",l(t,{gun:o.gun})),t["#"]&&o.dup.track(t["#"]),t.gun||(t=l(t,{gun:e})),i.on("out",t))}function n(t,n){var o,e=t.get[d],r=n.graph[e],u=t.get[h],a=n.next||(n.next={}),s=(a[e]||(a[e]=n.gun.get(e)))._;if(r){if(u){if(!c(r,u))return;o=i.obj.put(i.node.soul.ify({},e),u,r[u]),r=i.state.ify(o,u,i.state.is(r,u))}return s.on("in",{put:r,get:s.soul,gun:s.gun}),0<s.ack?!0:void 0}}function o(t){var n=this,o=n.as;if(t.gun||(t.gun=o.gun),!t["#"]&&t["@"]){if(t["#"]=i.text.random(),i.on.ack(t["@"],t))return;return o.dup.track(t["#"]),void o.on("out",t)}t["#"]&&o.dup.check(t["#"])||(o.dup.track(t["#"]),i.on.ack(t["@"],t)||(t.put&&(i.HAM.synth(t,n,o.gun),i.on("put",t)),t.get&&i.on("get",t),i.on("out",t)))}i.create=function(n){n.on=n.on||i.on,n.root=n.root||n.gun,n.graph=n.graph||{},n.dup=n.dup||new i.dup;var e=n.gun.opt(n.opt);return n.once||(n.on("in",o,n),n.on("out",t,n)),n.once=1,e}}(),function(){var t=i.on.ask=function(n,o){var e=i.text.random();return n&&t.on(e,n,o),e};t.on=i.on,i.on.ack=function(n,o){if(n&&o&&t.on){var e=n["#"]||n;if(t.tag&&t.tag[e])return t.on(e,o),!0}}}(),function(){i.chain.opt=function(t){t=t||{};var n=this,o=n._,e=t.peers||t;return f(t)||(t={}),f(o.opt)||(o.opt=t),u(e)&&(e=[e]),a(e)&&(e=p(e,function(t,n,o){o(t,{url:t})}),f(o.opt.peers)||(o.opt.peers={}),o.opt.peers=l(e,o.opt.peers)),o.opt.peers=o.opt.peers||{},l(t,o.opt),i.on("opt",o),n}}();var u=i.text.is,a=i.list.is,s=i.obj,f=s.is,c=s.has,l=s.to,p=s.map,d=i._.soul,h=i._.field;o.debug=function(t,n){return o.debug.i&&t===o.debug.i&&o.debug.i++&&(o.log.apply(o,arguments)||n)},i.log=function(){return!i.log.off&&o.log.apply(o,arguments),[].slice.call(arguments).join(" ")},i.log.once=function(t,n,o){return(o=i.log.once)[t]=o[t]||0,o[t]++||i.log(n)},i.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, feel free to ask for help on https://gitter.im/amark/gun and ask StackOverflow questions tagged with 'gun'!"),"undefined"!=typeof window&&(window.Gun=i),"undefined"!=typeof e&&(e.exports=i),n.exports=i})(t,"./root"),t(function(){var n=t("./root");n.chain.back=function(t,n){var i;if(-1===t||1/0===t)return this._.root;if(1===t)return this._.back||this;var r=this,u=r._;if("string"==typeof t&&(t=t.split(".")),t instanceof Array){var a=0,s=t.length,i=u;for(a;s>a;a++)i=(i||e)[t[a]];if(o!==i)return n?r:i;if(i=u.back)return i.back(t,n)}else if(t instanceof Function){for(var f,i={back:r};(i=i.back)&&(i=i._)&&!(f=t(i,n)););return f}};var o,e={}})(t,"./back"),t(function(){function o(t){{var n,o=this.as,e=o.gun;e.back(-1)}if(t.gun||(t.gun=e),(n=t.get)&&!n[m])if(h(n,_)){n=n[_];var i=n?e.get(n)._:o;if(h(i,"put"))return void i.on("in",i);if(h(o,"put")){var r,u=o.put;if((r=c.node.soul(u))&&(u=c.val.rel.ify(r)),r=c.val.rel.is(u)){if(!t.gun._)return;return void t.gun._.on("out",{get:{"#":r,".":n},"#":c.on.ask(c.HAM.synth,t.gun),gun:t.gun})}if(l===u||c.val.is(u)){if(!t.gun._)return;return void t.gun._.on("in",{get:n,gun:t.gun})}}else o.map&&y(o.map,function(t){t.at.on("in",t.at)});if(o.soul){if(!t.gun._)return;return void t.gun._.on("out",{get:{"#":o.soul,".":n},"#":c.on.ask(c.HAM.synth,t.gun),gun:t.gun})}if(o.get){if(!o.back._)return;return void o.back._.on("out",{get:g({},_,o.get),gun:e})}t=b(t,{get:{}})}else{if(h(o,"put")?o.on("in",o):o.map&&y(o.map,function(t){t.at.on("in",t.at)}),o.ack&&!h(o,"put"))return;if(o.ack=-1,o.soul)return void o.on("out",{get:{"#":o.soul},"#":c.on.ask(c.HAM.synth,o.gun)});if(o.get){if(!o.back._)return;return void o.back._.on("out",{get:g({},_,o.get),gun:o.gun})}}o.back._.on("out",t)}function e(t){t=t._||t;{var n,o=this,e=this.as,u=t.gun,f=u._,d=t.put;e.back._||p}if(0>e.ack&&t.via&&!c.val.rel.is(d)&&(e.ack=1),e.get&&t.get!==e.get&&(t=b(t,{get:e.get})),e.field&&f!==e&&(t=b(t,{gun:e.gun}),f.ack&&(e.ack=e.ack||f.ack)),l===d){if(o.to.next(t),e.soul)return;return r(e,t,o),e.field&&s(e,t),v(f.echo,e.id),void v(e.map,f.id)}return e.soul?(o.to.next(t),r(e,t,o),void y(d,a,{at:t,cat:e})):(n=c.val.rel.is(d))?(i(e,t,f,n),o.to.next(t),void r(e,t,o)):c.val.is(d)?(e.field||e.soul?s(e,t):(f.field||f.soul)&&((f.echo||(f.echo={}))[e.id]=e,(e.map||(e.map={}))[f.id]=e.map[f.id]||{at:f}),o.to.next(t),void r(e,t,o)):(e.field&&f!==e&&h(f,"put")&&(e.put=f.put),(n=c.node.soul(d))&&f.field&&(f.put=e.root.get(n)._.put),o.to.next(t),r(e,t,o),i(e,t,f,n),void y(d,a,{at:t,cat:e}))}function i(t,n,o,e){if(e&&k!==t.get){var r=t.root.get(e)._;t.field?o=r:o.field&&i(o,n,o,e),o!==t&&((o.echo||(o.echo={}))[t.id]=t,t.field&&!(t.map||p)[o.id]&&s(t,n),r=(t.map||(t.map={}))[o.id]=t.map[o.id]||{at:o},e!==r.rel&&f(t,r.rel=e))}}function r(t,n,o){t.echo&&(t.field&&(n=b(n,{event:o})),y(t.echo,u,n))}function u(t){t.on("in",this)}function a(t,n){var o,e,i,r=this.cat,u=r.next||p,a=this.at;(k!==n||u[n])&&(o=u[n])&&(i=o._,i.field?(t&&t[m]&&c.val.rel.is(t)===c.node.soul(i.put)||(i.put=t),e=o):e=a.gun.get(n),i.on("in",{put:t,get:n,gun:e,via:a}))}function s(t){if(t.field||t.soul){var n=t.map;t.map=null,null!==n&&(l!==n||t.put===l)&&(y(n,function(n){(n=n.at)&&v(n.echo,t.id)}),y(t.next,function(t,n){var o=t._;o.put=l,o.ack&&(o.ack=-1),o.on("in",{get:n,gun:t,put:l})}))}}function f(t,n){var o=t.root.get(n)._;return t.ack?(o.ack=o.ack||-1,void o.on("out",{get:{"#":n},"#":c.on.ask(c.HAM.synth,o.gun),gun:o.gun})):void y(t.next,function(t,e){t._.on("out",{get:{"#":n,".":e},"#":c.on.ask(c.HAM.synth,o.gun),gun:t})})}var c=t("./root");c.chain.chain=function(){var t=this._,i=new this.constructor(this),r=i._;return r.root=n=t.root,r.id=++n._.once,r.back=this,r.on=c.on,c.on("chain",r),r.on("in",e,r),r.on("out",o,r),i},c.chain.chain.input=e;var l,p={},d=c.obj,h=d.has,g=d.put,v=d.del,b=d.to,y=d.map,m=c._.soul,_=c._.field,k=c.node._})(t,"./chain"),t(function(){function n(t,n){var o=n._,e=o.next,i=n.chain(),r=i._;return e||(e=o.next={}),e[r.get=t]=i,o.root===n?r.soul=t:(o.soul||o.field)&&(r.field=t),i}function o(t){var n,o=this,e=o.as,r=t.gun,a=r._,f=t.put;i===f&&(f=a.put),(n=f)&&n[s._]&&(n=s.is(n))&&(n=a.root.get(n)._,i!==n.put&&(t=u(t,{put:n.put}))),e.use(t,t.event||o),o.to.next(t)}var e=t("./root");e.chain.get=function(t,i,r){if("string"!=typeof t){if(t instanceof Function){var u=this,s=u._;return r=i||{},r.use=t,r.out=r.out||{},r.out.get=r.out.get||{},s.root._.now=!0,s.on("in",o,r),s.on("out",r.out),s.root._.now=!1,u}return a(t)?this.get(""+t,i,r):((r=this.chain())._.err={err:e.log("Invalid get request!",t)},i&&i.call(r,r._.err),r)}var u,c,l=l||this,p=l._,d=p.next||f;return(u=d[t])||(u=n(t,l)),(c=p.stun)&&(u._.stun=u._.stun||c),i&&i instanceof Function&&u.get(i,r),u};var i,r=e.obj,u=(r.has,e.obj.to),a=e.num.is,s=e.val.rel,f=(e.node._,{})})(t,"./get"),t(function(){function n(t){t.batch=e;var n=t.opt||{},o=t.env=s.state.map(r,n.state);return o.soul=t.soul,t.graph=s.graph.ify(t.data,o,t),o.err?((t.ack||g).call(n.as||t.gun,t.out={err:s.log(o.err)}),void(t.res&&t.res())):void t.batch()}function e(){var t=this;t.graph&&!d(t.stun,i)&&((t.res||v)(function(){t.ref._.on("out",{gun:t.ref,put:t.out=t.env.graph,opt:t.opt,"#":s.on.ask(function(n){this.off(),t.ack&&t.ack(n,this)},t.opt)})},t),t.res&&t.res())}function i(t){return t?!0:void 0}function r(t,n,o,e){var i=this;!n&&e.path.length&&(i.res||v)(function(){var t=e.path,n=i.ref,o=(i.opt,0),r=t.length;for(o;r>o;o++)n=n.get(t[o]);return i.not||s.node.soul(e.obj)?void e.soul(s.node.soul(e.obj)||((i.opt||{}).uuid||i.gun.back("opt.uuid")||s.text.random)()):((i.stun=i.stun||{})[t]=!0,void n.get("_").get(u,{as:{at:e,as:i}}))},{as:i,at:e})}function u(t,n){var o=this.as,e=o.at;o=o.as,t.gun&&t.gun._.back&&(n.off(),t=t.gun._.back._,e.soul(s.node.soul(e.obj)||s.node.soul(t.put)||s.val.rel.is(t.put)||((o.opt||{}).uuid||o.gun.back("opt.uuid")||s.text.random)()),o.stun[e.path]=!1,o.batch())}function a(t,n){var e=this.as;if(t.gun&&t.gun._){if(t.err)return void o.log("Please report this as an issue! Put.any.err");var i,r=t.gun._.back._,u=r.put,a=e.opt||{};if(n.off(),e.ref!==e.gun){if(i=e.gun._.get,!i)return void o.log("Please report this as an issue! Put.no.get");e.data=p({},i,e.data),i=null}if(f===u){if(!r.get)return;r.soul||(i=r.gun.back(function(t){return t.soul?t.soul:void(e.data=p({},t.get,e.data))})),i=i||r.get,r=r.root.get(i)._,e.not=e.soul=i,u=e.data}e.not||(e.soul=s.node.soul(u))||(e.soul=e.path&&l(e.data)?(a.uuid||e.gun.back("opt.uuid")||s.text.random)():t.soul),e.ref.put(e.data,e.soul,e)}}var s=t("./root");s.chain.put=function(t,o,e){var i,r=this,u=r._.root;return e=e||{},e.data=t,e.gun=e.gun||r,"string"==typeof o?e.soul=o:e.ack=o,e.soul||u===r?l(e.data)?(e.gun=r=u.get(e.soul=e.soul||(e.not=s.node.soul(e.data)||(u._.opt.uuid||s.text.random)())),e.ref=e.gun,n(e),r):((opt.any||g).call(opt.as||r,e.out={err:s.log("No field to put",typeof e.data,'"'+e.data+'" on!')}),e.res&&e.res(),r):s.is(t)?(t.get(function(t,n){n.off();var i=s.node.soul(t.put);return i?void r.put(s.val.rel.ify(i),o,e):void s.log("Can only save a node, not a property.")}),r):(e.ref=e.ref||u===(i=r._.back)?r:i,e.ref.get("_").get(a,{as:e}),e.out||(e.res=e.res||s.on.stun(e.ref),e.gun._.stun=e.ref._.stun),r)};var f,c=s.obj,l=c.is,p=c.put,d=c.map,h={},g=function(){},v=function(t,n){t.call(n||h)}})(t,"./put"),t(function(n){var e=t("./root");n.exports=e,function(){function t(t,n){if(e._.node!==n){var r=this.node,u=this.vertex,a=this.union,s=this.machine,f=h(r,n),c=h(u,n);if(i===f||i===c)return!0;var l=t,p=u[n];if(!b(l)&&i!==l)return!0;if(!b(p)&&i!==p)return!0;var d=e.HAM(s,f,c,l,p);if(d.err)return void o.log(".!HYPOTHETICAL AMNESIA MACHINE ERR!.",d.err);if(!(d.state||d.historical||d.current))return d.incoming?(a[n]=t,void g(a,n,f)):d.defer?(a[n]=t,void g(a,n,f)):void 0}}function n(t,n){var o=this;if(e._.node!==n&&b(t)){var i=o.node,r=o.vertex,u=h(i,n,!0),a=h(r,n,!0),s=o.delta,f=e.HAM(o.machine,u,a,t,r[n]);f.incoming&&(s[n]=t,g(s,n,u))}}e.HAM.union=function(n,o,i){return o&&o._&&(n=n||e.node.soul.ify({_:{">":{}}},e.node.soul(o)),n&&n._&&(i=a(i)?{machine:i}:{machine:e.state()},i.union=n||e.obj.copy(n),i.vertex=n,i.node=o,!l(o,t,i)))?i.union:void 0},e.HAM.delta=function(t,o,i){return i=a(i)?{machine:i}:{machine:e.state()},t?(i.soul=e.node.soul(i.vertex=t),i.soul?(i.delta=e.node.soul.ify({},i.soul),l(i.node=o,n,i),i.delta):void 0):e.obj.copy(o)},e.HAM.synth=function(t,n,o){var r=this.as||o,u=r._,a=u.root._,s={};if(!t.put){if(u.put!==i)return;return void u.on("in",{get:u.get,put:u.put=i,gun:r,via:t})}l(t.put,function(t,n){var o=this.graph;s[n]=e.HAM.delta(o[n],t,{graph:o}),o[n]=e.HAM.union(o[n],t)||o[n]},a),l(s,function(o,r){var a=this,s=a.next||(a.next={}),l=s[r]||(s[r]=a.gun.get(r)),p=l._;return p.put=a.graph[r],u.field&&!f(o,u.field)?((t=c(t,{})).put=i,void e.HAM.synth(t,n,u.gun)):void p.on("in",{put:o,get:r,gun:l,via:t})},a)}}();{var i,r=e,u=r.num,a=u.is,s=r.obj,f=s.has,c=(s.put,s.to),l=s.map,p=e.node,d=(p.soul,p.is,p.ify,e.state),h=d.is,g=d.ify,v=e.val,b=v.is;v.rel.is}})(t,"./index"),t(function(n){var o=t("./root");t("./index"),t("./opt"),t("./chain"),t("./back"),t("./put"),t("./get"),n.exports=o})(t,"./core"),t(function(){{var n=t("./core"),e=n.obj,i=(e.is,e.put),r=(e.map,e.empty,n.num);r.is,n.val.rel._}!function(){function t(t,o){var u=this;return o.off(),u.soul=n.node.soul(t.put),u.soul&&u.key!==u.soul?(u.data=i({},r._,n.node.ify(i({},u.soul,n.val.rel.ify(u.soul)),"#"+u.key+"#")),(u.res||e)(function(){u.ref.put(u.data,u.any,{soul:u.key,key:u.key})},u),void(u.res&&u.res())):u.data={}}function e(t,n){t.call(n||{})}function r(t){if(t&&"#"===t[0]&&"#"===t[t.length-1]){var n=t.slice(1,-1);if(n)return n}}function u(t){var o=this;if(!t.put)return void(t.get&&a.call(t.gun?t.gun._:o,t));if(!t.opt||!t.opt.key){var e=t.put,i=o.gun.back(-1)._.graph;n.graph.is(e,function(t,o){n.node.is(i["#"+o+"#"],function r(o,u){return u===n.val.rel.is(o)?(o=i["#"+u+"#"])?void n.node.is(o,r):void n.node.soul.ify(o=e[u]=n.obj.copy(t),u):void 0})&&n.obj.del(e,o)})}}function a(t){function o(u,a){var s=(u.put,t.get);if(!i.pseudo||u.via)return n.on.ack(e,u);if(u.put){if(!s["."])return a.off(),n.on.ack(e,u);if(c(u.put[s["#"]],s["."]))return a.off(),n.on.ack(e,u)}n.obj.map(i.seen,function(i,a){return r[a]?n.on.ack(e,u):(r[a]=!0,void i.on("out",{gun:i,get:a={"#":a,".":t.get["."]},"#":n.on.ask(o)}))})}var e,i=this;if(n.obj.is(e=t.get)&&n.obj.has(e,"#")){if((e=t.get)&&null===e["."])return void(e["."]="##");(e=t.get)&&n.obj.has(e,".")&&(e["#"]&&(i=i.root.gun.get(e["#"])._),e=t["#"],t["#"]=n.on.ask(o));var r={}}}function s(t,o){function e(t){n.node.is(t,i)}function i(t,o){o===n.val.rel.is(t)&&(p[o]||(p[o]=l.get(o).on(u,!0)))}function u(t){t&&(a.pseudo=n.HAM.union(a.pseudo,t)||a.pseudo,a.change=a.changed=t,a.put=a.pseudo,c({gun:a.gun,put:a.pseudo,get:f}))}var a=this;if(a.pseudo){if(a.pseudo===t.put)return;return o.stun(),a.change=a.changed||a.pseudo,void a.on("in",n.obj.to(t,{put:a.put=a.pseudo}))}if(t.put){var s=n.val.rel.is(t.put[r._]);if(s){var f=n.node.soul(t.put),c=o.stun(c),l=a.gun.back(-1),p=a.seen={};a.pseudo=a.put=n.state.ify(n.node.ify({},f)),l.get(s).on(e,{change:!0})}}}n.chain.key=function(e,i,r){if(!e)return i&&i.call(this,{err:n.log("No key!")}),this;var u=this;return"string"==typeof r?(o.log("Please report this as an issue! key.opt.string"),u):u===u._.root?(i&&i({err:n.log("Can't do that on root instance.")}),u):(r=r||{},r.key=e,r.any=i||function(){},r.ref=u.back(-1).get(r.key),r.gun=r.gun||u,u.on(t,{as:r}),r.data||(r.res=n.on.stun(r.ref)),u)},r._="##",n.on("next",function(t){var n=t.gun;n.back(-1)===t.back&&(n.on("in",s,n._),n.on("out",u,n._))});var f=n.obj,c=f.has}()})(t,"./key"),t(function(){var n=t("./core");n.chain.path=function(t,o,e){var i,r=this,u=r;if(e=e||{},e.path=!0,u===u._.root)return o&&o({err:n.log("Can't do that on root instance.")}),u;if("string"==typeof t){if(i=t.split(e.split||"."),1===i.length)return u=r.get(t,o,e),u._.opt=e,u;t=i}if(t instanceof Array){if(t.length>1){u=r;var a=0,s=t.length;for(a;s>a;a++)u=u.get(t[a],a+1===s?o:null,e)}else u=r.get(t[0],o,e);return u._.opt=e,u}return t||0==t?(u=r.get(""+t,o,e),u._.opt=e,u):r}})(t,"./path"),t(function(){function n(t,n){var o,r=this,u=t.gun,s=u._,f=s.put||t.put,o=r.last,c=s.id+t.get;if(i!==f){if(f&&f[a._]&&(o=a.is(f))){if(o=s.root.get(o)._,i===o.put)return;f=o.put}r.change&&(f=t.put),(o.put!==f||o.get!==c||e.node.soul(f))&&(o.put=f,o.get=c,s.last=f,r.as?r.ok.call(r.as,t,n):r.ok.call(u,f,t.get,t,n))}}function o(t,n,e){var r,u=this.as,s=u.cat,f=t.gun,c=f._,l=c.put||t.put;if(i!==l){if(l&&l[a._]&&(r=a.is(l))){if(r=s.root.get(r)._,i===r.put)return;l=r.put}if(n.wait&&clearTimeout(n.wait),!(e||0<c.ack&&(!0!==u.async||0===u.wait)))return void(n.wait=setTimeout(function(){o.call({as:u},t,n,n.wait||1)},u.wait||99));if(s.field||s.soul){if(n.off())return}else{if((u.seen=u.seen||{})[c.id])return;u.seen[c.id]=!0}u.ok.call(t.gun||u.gun,l,t.get)}}var e=t("./core");e.chain.on=function(t,o,e,i){var r,u,a=this,s=a._;if("string"==typeof t)return o?(r=s.on(t,o,e||s,i),e&&e.gun&&(e.subs||(e.subs=[])).push(r),u=function(){r&&r.off&&r.off(),u.off()},u.off=a.off.bind(a)||noop,a.off=u,a):s.on(t);var f=o;return f=!0===f?{change:!0}:f||{},f.ok=t,f.last={},a.get(n,f),a},e.chain.val=function(t,n){var r=this,u=r._,a=u.put;if(0<u.ack&&i!==a&&t)return t.call(r,a,u.get),r;if(!t){e.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");var s=r.chain();return s._.val=r.val(function(){s._.on("in",r._)}),s}return(n=n||{}).ok=t,n.cat=u,r.get(o,{as:n}),n.async=u.stun?1:!0,r},e.chain.off=function(){var t,n=this,o=n._,e=o.back||{},i=e._;return i?((t=i.next)&&(t[o.get]?u(t,o.get):obj_map(t,function(o,e){n===o&&u(t,e)})),(t=n.back(-1))===e&&u(t.graph,o.get),o.ons&&(t=o.ons["@$"])&&obj_map(t.s,function(t){t.off()}),n):void 0};var i,r=e.obj,u=(r.has,r.del),a=(r.to,e.val.rel)})(t,"./on"),t(function(){function n(t,n){n.off(),t.err||e!==t.put||this.not&&this.not.call(t.gun,t.get,function(){o.log("Please report this bug on https://gitter.im/amark/gun and in the issues."),need.to.implement})}var e,i=t("./core");i.chain.not=function(t){return this.get(n,{not:t})}})(t,"./not"),t(function(){function n(t){t.put&&!e.val.is(t.put)&&(this.as.val&&this.off(),r(t.put,o,{cat:this.as,gun:t.gun}),this.to.next(t))}function o(t,n){if(a!==n){var o=this.cat,e=this.gun.get(n),i=e._;(i.echo||(i.echo={}))[o.id]=o}}var e=t("./core");e.chain.map=function(t){var o,r=this,a=r._;return t?(e.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),o=r.chain(),r.map().on(function(n,r,a,s){var f=(t||u).call(this,n,r,a,s);if(i!==f)return e.is(f)?void o._.on("in",f._):void o._.on("in",{get:r,put:f,gun:o})}),o):(o=a.fields)?o:(o=a.fields=r.chain(),o._.val=r.back("val"),r.on("in",n,o._),o)};var i,r=e.obj.map,u=function(){},a=e.node._})(t,"./map"),t(function(){var n=t("./core");n.chain.init=function(){return(this._.opt=this._.opt||{}).init=!0,this.back(-1).put(n.node.ify({},this._.get),null,this._.get)}})(t,"./init"),t(function(){var n=t("./core");n.chain.set=function(t,o,e){var i,r=this;return o=o||function(){},(i=n.node.soul(t))?r.set(r.back(-1).get(i),o,e):n.obj.is(t)&&!n.is(t)?r.set(r._.root.put(t),o,e):t.get("_").get(function(t,i){!t.gun||!t.gun._.back,i.off(),t=t.gun._.back._;var u={},a=t.put,s=n.node.soul(a);return s?void r.put(n.obj.put(u,s,n.val.rel.ify(s)),o,e):o.call(r,{err:n.log('Only a node can be linked! Not "'+a+'"!')})},{wait:0})}})(t,"./set"),t(function(){if("undefined"!=typeof Gun){var t,n=function(){};"undefined"!=typeof window&&(t=window);var o=t.localStorage||{setItem:n,removeItem:n,getItem:n};Gun.on("put",function(t){{var n,e;t.gun._.root}this.to.next(t),(e={}).prefix=(t.opt||e).prefix||t.gun.back("opt.prefix")||"gun/",Gun.graph.is(t.put,function(t,i,r){var u=Gun.obj.ify(o.getItem(e.prefix+i+"_")||{});r(function(r,a){u[a]=1;var s=Gun.state.is(t,a);try{o.setItem(e.prefix+i+a,JSON.stringify([r,s]))}catch(f){n=f||"localStorage failure"}});try{o.setItem(e.prefix+i+"_",JSON.stringify(u))}catch(a){n=a||"localStorage failure"}}),Gun.obj.empty(t.gun.back("opt.peers"))&&Gun.on.ack(t,{err:n,ok:0})}),Gun.on("get",function(t){this.to.next(t);var n,e,i,r,u=t.gun,a=t.get;if((i=t.opt||{}).prefix=i.prefix||t.gun.back("opt.prefix")||"gun/",a&&(n=a[Gun._.soul])){var s=a["."];s?(e=Gun.obj.ify(o.getItem(i.prefix+n+s)||null)||r)&&(e=Gun.state.ify(r,s,e[1],e[0],n)):Gun.obj.map(Gun.obj.ify(o.getItem(i.prefix+n+"_")),function(t,r){t=Gun.obj.ify(o.getItem(i.prefix+n+r)||{}),e=Gun.state.ify(e,r,t[1],t[0],n)}),u.back(-1).on("in",{"@":t["#"],put:Gun.graph.node(e)})}})}})(t,"./adapters/localStorage"),t(function(n){function o(t,n,e){return this instanceof o?(this.url=o.formatURL(t),this.socket=null,this.queue=[],this.sid=i.text.random(10),this.on=i.on,this.options=n||{},this.options.wsc=e,void this.resetBackoff()):new o(t,n,e)}function e(t,n){o.isSupported&&o.broadcast(t,n)}var i=t("./core");if("undefined"==typeof JSON)throw new Error("Gun depends on JSON. Please load it first:\najax.cdnjs.com/ajax/libs/json2/20110223/json2.js");o.prototype={constructor:o,drainQueue:function(){var t=this.queue,n=this;return this.queue=[],t.forEach(function(t){n.send(t)}),t.length},connect:function(){var t=this,n=new o.WebSocket(this.url,this.options.wsc.protocols,this.options.wsc);return this.socket=n,n.addEventListener("message",function(n){t.on("message",n)}),n.addEventListener("close",function(){t.scheduleReconnect()}),this.ready(function(){t.drainQueue()}),n},resetBackoff:function(){var t=this.options;return this.backoff={time:t.time||100,max:t.max||2e3,factor:t.factor||2},this.backoff},nextBackoff:function(){var t=this.backoff,n=t.time*t.factor,o=t.max;return n>o&&(n=o),t.time=n},scheduleReconnect:function(){var t=this,n=this.backoff.time;this.nextBackoff(),setTimeout(function(){t.connect(),t.ready(function(){t.resetBackoff()})},n)},isClosed:function(){var t=this.socket;if(!t)return!0;var n=t.readyState;return n===t.CLOSING||n===t.CLOSED?!0:!1},ready:function(t){var n=this.socket,o=n.readyState;return o===n.OPEN?void t():void(o===n.CONNECTING&&n.addEventListener("open",t))},send:function(t){if(this.isClosed())return this.queue.push(t),this.connect(),!1;var n=this.socket;return this.ready(function(){n.send(t)}),!0}},"undefined"!=typeof window&&(o.WebSocket=window.WebSocket||window.webkitWebSocket||window.mozWebSocket||null),o.isSupported=!!o.WebSocket,o.isSupported&&(o.formatURL=function(t){return t.replace(/^http/,"ws")},o.broadcast=function(t,n){var e=o.pool;n.headers=n.headers||{},i.obj.map(t,function(t,r){var u=o.formatURL(r),a=e[u],s={headers:i.obj.to(n.headers,{"gun-sid":a.sid}),body:n.body},f=i.text.ify(s);a.send(f)})},o.pool={},"undefined"!=typeof window&&window.addEventListener("unload",function(){i.obj.map(o.pool,function(t){t.isClosed()||t.socket.close();

})}),i.on("opt",function(t){this.to.next(t);var n=t.gun,e=n.back("opt.peers")||{};i.obj.map(e,function(t,e){var r=o.formatURL(e);if(!o.pool.hasOwnProperty(r)){var u=new o(r,t.backoff,n.back("opt.wsc")||{protocols:null});o.pool[r]=u,u.on("message",function(t){var o;try{o=i.obj.ify(t.data)}catch(e){return}o&&o.body&&n.on("in",o.body)})}})}),i.on("out",function(t){this.to.next(t);var n=t.gun,o=n.back("opt.peers")||{},r=n.back("opt.headers")||{};i.obj.empty(o)||e(o,{body:t,headers:r})}),e.jsonp=function(t,n){e.jsonp.ify(t,function(o){o&&e.jsonp.send(o,function(o,i){n(o,i),e.jsonp.poll(t,i)},t.jsonp)})},e.jsonp.send=function(t,n,o){var e=document.createElement("script");return e.src=t,e.onerror=function(){(window[e.id]||function(){})(null,{err:"JSONP failed!"})},window[e.id=o]=function(t,o){n(o,t),n.id=e.id,e.parentNode.removeChild(e),delete window[n.id]},e.async=!0,document.getElementsByTagName("head")[0].appendChild(e),e},e.jsonp.poll=function(t,n){if(t&&t.base&&n&&n.headers&&n.headers.poll){var o=e.jsonp.poll.s=e.jsonp.poll.s||{};o[t.base]=o[t.base]||setTimeout(function(){var n={base:t.base,headers:{pull:1}};e.each(t.headers,function(t,o){n.headers[o]=t}),e.jsonp(n,function(n,i){delete o[t.base];for(var r=i.body||[];r.length&&r.shift;){var u=i.body.shift();u&&u.body&&e.createServer.ing(u,function(){e(t.base,null,null,u)})}})},n.headers.poll)}},e.jsonp.ify=function(t,n){var o=encodeURIComponent,i="?";if(t.url&&t.url.pathname&&(i=t.url.pathname+i),i=t.base+i,e.each((t.url||{}).query,function(t,n){i+=o(n)+"="+o(t)+"&"}),t.headers&&(i+=o("`")+"="+o(JSON.stringify(t.headers))+"&"),e.jsonp.max<i.length)return n();var r=Math.floor(65536*Math.random());if(i+=o("jsonp")+"="+o(t.jsonp="P"+r),t.body){i+="&";var u=t.body,a=function(t,n,e){return o("%")+"="+o(t+"-"+(n||t)+"/"+(e||t))+"&"+o("$")+"="};"string"!=typeof u&&(u=JSON.stringify(u),i+=o("^")+"="+o("json")+"&"),u=o(u);var s=0,f=u.length,c=e.jsonp.max-(i.length+a(f.toString()).length);if(0>c)return n();for(;u;)n(i+a(s,s+=c,f)+u.slice(0,s)),u=u.slice(s)}else n(i)},e.jsonp.max=2e3,e.each=function(t,n,o){if(t&&n)for(var e in t)t.hasOwnProperty(e)&&n.call(o,t[e],e)},n.exports=o)})(t,"./polyfill/request")}();