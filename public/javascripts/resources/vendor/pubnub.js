// Version: 3.5.4
(function(){
var m=null,t=!1;function u(){return function(){}}
window.JSON&&window.JSON.stringify||function(){function a(){try{return this.valueOf()}catch(a){return m}}function c(a){d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var b=E[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function b(d,g){var p,l,q,r,i,j=e,h=g[d];h&&"object"===typeof h&&(h=a.call(h));"function"===typeof f&&(h=f.call(g,d,h));switch(typeof h){case "string":return c(h);case "number":return isFinite(h)?String(h):"null";case "boolean":case "null":return String(h);
case "object":if(!h)return"null";e+=s;i=[];if("[object Array]"===Object.prototype.toString.apply(h)){r=h.length;for(p=0;p<r;p+=1)i[p]=b(p,h)||"null";q=0===i.length?"[]":e?"[\n"+e+i.join(",\n"+e)+"\n"+j+"]":"["+i.join(",")+"]";e=j;return q}if(f&&"object"===typeof f){r=f.length;for(p=0;p<r;p+=1)l=f[p],"string"===typeof l&&(q=b(l,h))&&i.push(c(l)+(e?": ":":")+q)}else for(l in h)Object.hasOwnProperty.call(h,l)&&(q=b(l,h))&&i.push(c(l)+(e?": ":":")+q);q=0===i.length?"{}":e?"{\n"+e+i.join(",\n"+e)+"\n"+
j+"}":"{"+i.join(",")+"}";e=j;return q}}window.JSON||(window.JSON={});var d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,s,E={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},f;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,c,d){var l;s=e="";if("number"===typeof d)for(l=0;l<d;l+=1)s+=" ";else"string"===typeof d&&(s=d);if((f=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==
typeof c.length))throw Error("JSON.stringify");return b("",{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a){return eval("("+a+")")})}();var aa=1,v=t,ba=[],z="-pnpres",D=1E3,da="/",ea="&",fa=/{([\w\-]+)}/g;function ga(){return"x"+ ++aa+""+ +new Date}function F(){return+new Date}var G,ha=Math.floor(20*Math.random());G=function(a,c){return 0<a.indexOf("pubsub.")&&a.replace("pubsub","ps"+(c?ja().split("-")[0]:20>++ha?ha:ha=1))||a};
function ka(a,c){var b=a.join(da),d=[];if(!c)return b;P(c,function(a,b){"undefined"!=typeof b&&(b!=m&&0<la(b,".!~*'()").length)&&d.push(a+"="+la(b,".!~*'()"))});return b+="?"+d.join(ea)}function na(a,c){function b(){e+c>F()?(clearTimeout(d),d=setTimeout(b,c)):(e=F(),a())}var d,e=0;return b}function oa(a,c){var b=[];P(a||[],function(a){c(a)&&b.push(a)});return b}function pa(a,c){return a.replace(fa,function(a,d){return c[d]||a})}
function ja(a){var c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=16*Math.random()|0;return("x"==a?c:c&3|8).toString(16)});a&&a(c);return c}function P(a,c){if(a&&c)if("undefined"!=typeof a[0])for(var b=0,d=a.length;b<d;)c.call(a[b],a[b],b++);else for(b in a)a.hasOwnProperty&&a.hasOwnProperty(b)&&c.call(a[b],b,a[b])}function Q(a,c){var b=[];P(a||[],function(a,e){b.push(c(a,e))});return b}
function la(a,c){return Q(encodeURIComponent(a).split(""),function(a){return 0>c.indexOf(a)?a:"%"+a.charCodeAt(0).toString(16).toUpperCase()}).join("")}function U(a){return la(a,"-_.!~*'()")}function qa(a){var c=[];P(a,function(a,d){d.j&&c.push(a)});return c.sort()}function ra(){setTimeout(function(){v||(v=1,P(ba,function(a){a()}))},D)}
if(!window.PUBNUB){var sa=function(a,c){return CryptoJS.HmacSHA256(a,c).toString(CryptoJS.enc.Base64)},ta=function(a){return document.getElementById(a)},ua=function(a){console.error(a)},va=function(a,c){var b=[];P(a.split(/\s+/),function(a){P((c||document).getElementsByTagName(a),function(a){b.push(a)})});return b},V=function(a,c,b){P(a.split(","),function(a){function e(a){a||(a=window.event);b(a)||(a.cancelBubble=!0,a.returnValue=t,a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation())}
c.addEventListener?c.addEventListener(a,e,t):c.attachEvent?c.attachEvent("on"+a,e):c["on"+a]=e})},xa=function(){return va("head")[0]},W=function(a,c,b){if(b)a.setAttribute(c,b);else return a&&a.getAttribute&&a.getAttribute(c)},ya=function(a,c){for(var b in c)if(c.hasOwnProperty(b))try{a.style[b]=c[b]+(0<"|width|height|top|left|".indexOf(b)&&"number"==typeof c[b]?"px":"")}catch(d){}},Ba=function(a){return document.createElement(a)},Da=function(){return Ca||X()?0:ga()},Fa=function(a){function c(a,b){K||
(K=1,h.onerror=m,clearTimeout(L),a||!b||M(b),setTimeout(function(){a&&ca();var b=ta(A),c=b&&b.parentNode;c&&c.removeChild(b)},D))}if(Ca||X()){a:{var b,d,e=function(){if(!E){E=1;clearTimeout(O);try{d=JSON.parse(b.responseText)}catch(a){return r(1)}s=1;l(d)}},s=0,E=0,f=a.timeout||1E4,O=setTimeout(function(){r(1)},f),g=a.b||u(),p=a.data||{},l=a.c||u(),q="undefined"===typeof a.g,r=function(a,c){s||(s=1,clearTimeout(O),b&&(b.onerror=b.onload=m,b.abort&&b.abort(),b=m),a&&g(c))};try{b=X()||window.XDomainRequest&&
new XDomainRequest||new XMLHttpRequest;b.onerror=b.onabort=function(){r(1,b.responseText||{error:"Network Connection Error"})};b.onload=b.onloadend=e;b.onreadystatechange=function(){if(4==b.readyState)switch(b.status){case 401:case 402:case 403:try{d=JSON.parse(b.responseText),r(1,d)}catch(a){return r(1,b.responseText)}}};q&&(b.timeout=f);p.pnsdk=Ea;var i=ka(a.url,p);b.open("GET",i,q);b.send()}catch(j){r(0);Ca=0;a=Fa(a);break a}a=r}return a}var h=Ba("script"),e=a.a,A=ga(),K=0,L=setTimeout(function(){c(1)},
a.timeout||1E4),ca=a.b||u(),f=a.data||{},M=a.c||u();window[e]=function(a){c(0,a)};a.g||(h[Ga]=Ga);h.onerror=function(){c(1)};f.pnsdk=Ea;h.src=ka(a.url,f);W(h,"id",A);xa().appendChild(h);return c},Ha=function(){return!("onLine"in navigator)?1:navigator.onLine},X=function(){if(!Ia||!Ia.get)return 0;var a={id:X.id++,send:u(),abort:function(){a.id={}},open:function(c,b){X[a.id]=a;Ia.get(a.id,b)}};return a},Ga="async",Ea="PubNub-JS-Web/3.5.4",Ca=-1==navigator.userAgent.indexOf("MSIE 6");window.console||
(window.console=window.console||{});console.log||(console.log=console.error=(window.opera||{}).postError||u());var Ja,Ka=window.localStorage;Ja={get:function(a){try{return Ka?Ka.getItem(a):-1==document.cookie.indexOf(a)?m:((document.cookie||"").match(RegExp(a+"=([^;]+)"))||[])[1]||m}catch(c){}},set:function(a,c){try{if(Ka)return Ka.setItem(a,c)&&0;document.cookie=a+"="+c+"; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/"}catch(b){}}};var Y={list:{},unbind:function(a){Y.list[a]=[]},bind:function(a,c){(Y.list[a]=
Y.list[a]||[]).push(c)},fire:function(a,c){P(Y.list[a]||[],function(a){a(c)})}},Z=ta("pubnub")||0,La=function(a){function c(){}function b(a,b){function c(b){b&&(ia=F()-(b/1E4+(F()-d)/2),a&&a(ia))}var d=F();b&&c(b)||w.time(c)}function d(a,b){R&&R(a,b);R=m}function e(){w.time(function(a){b(u(),a);a||d(1,{error:"Heartbeat failed to connect to Pubnub Servers. Please check your network settings."});setTimeout(e,q)})}function s(){Na()||d(1,{error:"Offline. Please check your network settings. "});setTimeout(s,
D)}function E(a){var b=0;P(qa(I),function(c){if(c=I[c])b++,(a||u())(c)});return b}function f(a){a&&(B.h=0);!B.h&&B.length&&(B.h=1,x(B.shift()))}a.jsonp&&(Ca=0);var O=a.subscribe_key||"";a.uuid||Ja.get(O+"uuid");a.xdr=Fa;a.db=Ja;a.error=ua;a._is_online=Ha;a.jsonp_cb=Da;a.PNSDK=Ea;a.hmac_SHA256=sa;var g,p=+a.windowing||10,l=(+a.timeout||310)*D,q=(+a.keepalive||60)*D,r=a.noleave||0,i=a.publish_key||"",j=a.subscribe_key||"",h=a.auth_key||"",A=a.secret_key||"",K=a.PNSDK||"",L=a.hmac_SHA256,ca=a.ssl?"s":
"",M="http"+ca+"://"+(a.origin||"pubsub.pubnub.com"),H=G(M),wa=G(M),B=[],ia=0,za=0,Aa=0,R=0,ma=0,S=0,I={},x=a.xdr,k=a.error||u(),Na=a._is_online||function(){return 1},C=a.jsonp_cb||function(){return 0},T=a.db||{get:u(),set:u()},J=a.uuid||T&&T.get(j+"uuid")||"",w={LEAVE:function(a,b){var c={uuid:J,auth:h},d=G(M),e=C();!(0<a.indexOf(z))&&!r&&("0"!=e&&(c.callback=e),x({g:b||ca,timeout:2E3,a:e,data:c,url:[d,"v2","presence","sub_key",j,"channel",U(a),"leave"]}))},history:function(a,b){var b=a.callback||
b,c=a.count||a.limit||100,d=a.reverse||"false",e=a.error||u(),Oa=a.auth_key||h,y=a.channel,N=a.start,g=a.end,n={},i=C();if(!y)return k("Missing Channel");if(!b)return k("Missing Callback");if(!j)return k("Missing Subscribe Key");n.stringtoken="true";n.count=c;n.reverse=d;n.auth=Oa;i&&(n.callback=i);N&&(n.start=N);g&&(n.end=g);x({a:i,data:n,c:function(a){"object"==typeof a&&a.error?e(a):b(a)},b:e,url:[H,"v2","history","sub-key",j,"channel",U(y)]})},replay:function(a){var b=b||a.callback||u(),c=a.auth_key||
h,d=a.source,e=a.destination,g=a.stop,y=a.start,N=a.end,l=a.reverse,a=a.limit,n=C(),f={};if(!d)return k("Missing Source Channel");if(!e)return k("Missing Destination Channel");if(!i)return k("Missing Publish Key");if(!j)return k("Missing Subscribe Key");"0"!=n&&(f.callback=n);g&&(f.stop="all");l&&(f.reverse="true");y&&(f.start=y);N&&(f.end=N);a&&(f.count=a);f.auth=c;x({a:n,c:function(a){"object"==typeof a&&a.error?err(a):b(a)},b:function(){b([0,"Disconnected"])},url:[H,"v1","replay",i,j,d,e],data:f})},
auth:function(a){h=a;c()},time:function(a){var b=C();x({a:b,data:{uuid:J,auth:h},timeout:5*D,url:[H,"time",b],c:function(b){a(b[0])},b:function(){a(0)}})},publish:function(a,b){var b=b||a.callback||u(),c=a.message,d=a.channel,e=a.auth_key||h,g=a.error||u(),y=C();if(!c)return k("Missing Message");if(!d)return k("Missing Channel");if(!i)return k("Missing Publish Key");if(!j)return k("Missing Subscribe Key");c=JSON.stringify(c);c=[H,"publish",i,j,0,U(d),y,U(c)];B.push({a:y,timeout:5*D,url:c,data:{uuid:J,
auth:e},c:function(a){"object"==typeof a&&a.error?g(a):b(a);f(1)},b:function(a){g(a);f(1)}});f()},unsubscribe:function(a){a=a.channel;S=0;ma=1;a=Q((a.join?a.join(","):""+a).split(","),function(a){return a+","+a+z}).join(",");P(a.split(","),function(a){v&&w.LEAVE(a,0);I[a]=0});c()},subscribe:function(a,b){function e(a){a?setTimeout(c,D):(H=G(M,1),wa=G(M,1),setTimeout(function(){w.time(e)},D));E(function(b){if(a&&b.d)return b.d=0,b.m(b.name);!a&&!b.d&&(b.d=1,b.l(b.name))})}function g(){var a=C(),b=
qa(I).join(",");b&&(d(),R=x({timeout:O,a:a,b:function(a){n(a);R=m;w.time(e)},data:{uuid:J,auth:i},url:[wa,"subscribe",j,U(b),a,S],c:function(a){R=m;if(!a||"object"==typeof a&&"error"in a&&a.error)return n(a),setTimeout(c,D);r(a[1]);S=!S&&ma&&T.get(j)||a[1];E(function(a){a.f||(a.f=1,a.k(a.name))});B&&(S=1E4,B=0);T.set(j,a[1]);var b,d=(2<a.length?a[2]:Q(I,function(b){return Q(Array(a[0].length).join(",").split(","),function(){return b})}).join(",")).split(",");b=function(){var a=d.shift()||Aa;return[(I[a]||
{}).a||za,a.split(z)[0]]};var e=F()-ia-+a[1]/1E4;P(a[0],function(c){var d=b();d[0](c,a,d[1],e)});setTimeout(g,L)}}))}var f=a.channel,b=(b=b||a.callback)||a.message,i=a.auth_key||h,y=a.connect||u(),N=a.reconnect||u(),q=a.disconnect||u(),n=a.error||u(),r=a.idle||u(),s=a.presence||0,A=a.noheresync||0,B=a.backfill||0,K=a.timetoken||0,O=a.timeout||l,L=a.windowing||p;ma=a.restore;S=K;if(!f)return k("Missing Channel");if(!b)return k("Missing Callback");if(!j)return k("Missing Subscribe Key");P((f.join?f.join(","):
""+f).split(","),function(a){var c=I[a]||{};I[Aa=a]={name:a,f:c.f,d:c.d,j:1,a:za=b,k:y,l:q,m:N};s&&(w.subscribe({channel:a+z,callback:s}),!c.j&&!A&&w.here_now({channel:a,callback:function(b){P("uuids"in b?b.uuids:[],function(c){s({action:"join",uuid:c,timestamp:F(),occupancy:b.occupancy||1},b,a)})}}))});c=function(){d();setTimeout(g,L)};if(!v)return ba.push(c);c()},here_now:function(a,b){var b=a.callback||b,c=a.error||u(),d=a.auth_key||h,e=a.channel,g=C(),d={uuid:J,auth:d};if(!e)return k("Missing Channel");
if(!b)return k("Missing Callback");if(!j)return k("Missing Subscribe Key");"0"!=g&&(d.callback=g);x({a:g,data:d,c:function(a){"object"==typeof a&&a.error?c(a):b(a)},b:c,url:[H,"v2","presence","sub_key",j,"channel",U(e)]})},grant:function(a,b){var b=a.callback||b,c=a.error||u(),d=a.channel,e=C(),g=a.ttl||-1,h=a.read?"1":"0",f=a.write?"1":"0",l=a.auth_key;if(!d)return k("Missing Channel");if(!b)return k("Missing Callback");if(!j)return k("Missing Subscribe Key");if(!i)return k("Missing Publish Key");
if(!A)return k("Missing Secret Key");"0"!=e&&(n.callback=e);var n=Math.floor((new Date).getTime()/1E3),p=L(j+"\n"+i+"\ngrant\n"+(l&&0<encodeURIComponent(l).length?"auth="+encodeURIComponent(l)+"&":"")+"channel="+encodeURIComponent(d)+"&pnsdk="+encodeURIComponent(K)+"&r="+h+"&timestamp="+encodeURIComponent(n)+(-1<g?"&ttl="+g:"")+"&w="+f,A),p=p.replace(RegExp("\\+","g"),"-"),p=p.replace(RegExp("\\/","g"),"_"),n={w:f,r:h,signature:p,channel:encodeURIComponent(d),timestamp:n};-1<g&&(n.ttl=g);l&&(n.auth=
encodeURIComponent(l));x({a:e,data:n,c:function(a){b(a)},b:c,url:[H,"v1","auth","grant","sub-key",j]})},audit:function(a,b){var b=a.callback||b,c=a.error||u(),d=a.channel,e=C(),g=a.auth_key;if(!b)return k("Missing Callback");if(!j)return k("Missing Subscribe Key");if(!i)return k("Missing Publish Key");if(!A)return k("Missing Secret Key");"0"!=e&&(h.callback=e);var h=Math.floor((new Date).getTime()/1E3),f=j+"\n"+i+"\naudit\n";g&&(f+="auth="+encodeURIComponent(g)+"&");d&&(f+="channel="+encodeURIComponent(d)+
"&");var f=f+("pnsdk="+encodeURIComponent(K)+"&timestamp="+h),f=L(f,A),f=f.replace(RegExp("\\+","g"),"-"),f=f.replace(RegExp("\\/","g"),"_"),h={signature:f,timestamp:h};d&&(h.channel=encodeURIComponent(d));g&&(h.auth=encodeURIComponent(g));x({a:e,data:h,c:function(a){b(a)},b:c,url:[H,"v1","auth","audit","sub-key",j]})},revoke:function(a,b){a.read=t;a.write=t;w.grant(a,b)},xdr:x,ready:ra,db:T,uuid:ja,map:Q,each:P,"each-channel":E,grep:oa,offline:function(){d(1)},supplant:pa,now:F,unique:ga,updater:na};
J||(J=w.uuid());T.set(j+"uuid",J);setTimeout(s,D);setTimeout(e,q);b();g=w;g.css=ya;g.$=ta;g.create=Ba;g.bind=V;g.head=xa;g.search=va;g.attr=W;g.events=Y;g.init=La;V("beforeunload",window,function(){g["each-channel"](function(a){g.LEAVE(a.name,0)});return!0});if(a.notest)return g;V("offline",window,g.offline);V("offline",document,g.offline);return g};V("load",window,function(){setTimeout(ra,0)});var $=Z||{};PUBNUB=La({notest:1,publish_key:W($,"pub-key"),subscribe_key:W($,"sub-key"),ssl:!document.location.href.indexOf("https")||
"on"==W($,"ssl"),origin:W($,"origin"),uuid:W($,"uuid")});window.jQuery&&(window.jQuery.PUBNUB=PUBNUB);"undefined"!==typeof module&&(module.exports=PUBNUB)&&ra();var Ia=ta("pubnubs")||0;if(Z){ya(Z,{position:"absolute",top:-D});if("opera"in window||W(Z,"flash"))Z.innerHTML="<object id=pubnubs data=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=movie value=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=allowscriptaccess value=always></object>";PUBNUB.rdx=function(a,c){if(!c)return X[a].onerror();
X[a].responseText=unescape(c);X[a].onload()};X.id=D}}
var Ma=PUBNUB.ws=function(a,c){if(!(this instanceof Ma))return new Ma(a,c);var b=this,a=b.url=a||"";b.protocol=c||"Sec-WebSocket-Protocol";var d=a.split("/"),d={ssl:"wss:"===d[0],origin:d[2],publish_key:d[3],subscribe_key:d[4],channel:d[5]};b.CONNECTING=0;b.OPEN=1;b.CLOSING=2;b.CLOSED=3;b.CLOSE_NORMAL=1E3;b.CLOSE_GOING_AWAY=1001;b.CLOSE_PROTOCOL_ERROR=1002;b.CLOSE_UNSUPPORTED=1003;b.CLOSE_TOO_LARGE=1004;b.CLOSE_NO_STATUS=1005;b.CLOSE_ABNORMAL=1006;b.onclose=b.onerror=b.onmessage=b.onopen=b.onsend=
u();b.binaryType="";b.extensions="";b.bufferedAmount=0;b.trasnmitting=t;b.buffer=[];b.readyState=b.CONNECTING;if(!a)return b.readyState=b.CLOSED,b.onclose({code:b.CLOSE_ABNORMAL,reason:"Missing URL",wasClean:!0}),b;b.e=PUBNUB.init(d);b.e.i=d;b.i=d;b.e.subscribe({restore:t,channel:d.channel,disconnect:b.onerror,reconnect:b.onopen,error:function(){b.onclose({code:b.CLOSE_ABNORMAL,reason:"Missing URL",wasClean:t})},callback:function(a){b.onmessage({data:a})},connect:function(){b.readyState=b.OPEN;b.onopen()}})};
Ma.prototype.send=function(a){var c=this;c.e.publish({channel:c.e.i.channel,message:a,callback:function(a){c.onsend({data:a})}})};
})();