var e,t,r,n,i,a,o,s,c,u,l,p,d,f,h,g,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},$={};$=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=$?S.bind(S):function(){return S.apply(S,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},M={},x={},T=Function.prototype,N=T.call,I=$&&T.bind.bind(N,N),q={},F=(x=$?I:function(e){return function(){return N.apply(e,arguments)}})({}.toString),H=x("".slice);q=function(e){return H(F(e),8,-1)};var C=Object,A=x("".split);M=k(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?A(e,""):C(e)}:C;var R={},D={};D=function(e){return null==e};var W=TypeError;R=function(e){if(D(e))throw new W("Can't call method on "+e);return e},P=function(e){return M(R(e))};var G={},U={},z={},B={},Y="object"==typeof document&&document.all;B=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:B(e)};var J={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var V={};V=x({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(a=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),Z=a;var ea=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;J=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&V(t.prototype,eo(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ep=TypeError;ec=function(e){if(B(e))return e;throw new ep(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return D(r)?void 0:ec(r)};var ed={},ef=TypeError;ed=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={};eg=!1;var ev={},em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__";ev=b[eb]||em(eb,{}),(eh=function(e,t){return ev[e]||(ev[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:eg?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var e_={},ew={},ek=Object;ew=function(e){return ek(R(e))};var eE=x({}.hasOwnProperty);e_=Object.hasOwn||function(e,t){return eE(ew(e),t)};var e$={},eS=0,ej=Math.random(),eO=x(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eO(++eS+ej,36)};var eL=b.Symbol,eP=eh("wks"),eM=K?eL.for||eL:eL&&eL.withoutSetter||e$,ex=TypeError,eT=(e_(eP,e="toPrimitive")||(eP[e]=X&&e_(eL,e)?eL[e]:eM("Symbol."+e)),eP[e]);U=function(e,t){if(!z(e)||J(e))return e;var r,n=es(e,eT);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||J(r))return r;throw new ex("Can't convert object to primitive value")}return void 0===t&&(t="number"),ed(e,t)},G=function(e){var t=U(e,"string");return J(t)?t:t+""};var eN={},eI={},eq=b.document,eF=z(eq)&&z(eq.createElement);eI=function(e){return eF?eq.createElement(e):{}},eN=!w&&!k(function(){return 7!==Object.defineProperty(eI("div"),"a",{get:function(){return 7}}).a});var eH=Object.getOwnPropertyDescriptor;r=w?eH:function(e,t){if(e=P(e),t=G(t),eN)try{return eH(e,t)}catch(e){}if(e_(e,t))return L(!E(n,e,t),e[t])};var eC={},eA={};eA=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eR={},eD=String,eW=TypeError;eR=function(e){if(z(e))return e;throw new eW(eD(e)+" is not an object")};var eG=TypeError,eU=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eB="enumerable",eY="configurable",eJ="writable";o=w?eA?function(e,t,r){if(eR(e),t=G(t),eR(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=ez(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eB in r?r[eB]:n[eB],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eR(e),t=G(t),eR(r),eN)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return o(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eQ={},eV={},eK=Function.prototype,eX=w&&Object.getOwnPropertyDescriptor,eZ=e_(eK,"name")&&(!w||w&&eX(eK,"name").configurable),e0={},e1=x(Function.toString);B(ev.inspectSource)||(ev.inspectSource=function(e){return e1(e)}),e0=ev.inspectSource;var e9={},e2={},e4=b.WeakMap;e2=B(e4)&&/native code/.test(String(e4));var e3={},e7=eh("keys");e3=function(e){return e7[e]||(e7[e]=e$(e))};var e5={};e5={};var e8="Object already initialized",e6=b.TypeError,te=b.WeakMap;if(e2||ev.state){var tt=ev.state||(ev.state=new te);tt.get=tt.get,tt.has=tt.has,tt.set=tt.set,s=function(e,t){if(tt.has(e))throw new e6(e8);return t.facade=e,tt.set(e,t),t},c=function(e){return tt.get(e)||{}},u=function(e){return tt.has(e)}}else{var tr=e3("state");e5[tr]=!0,s=function(e,t){if(e_(e,tr))throw new e6(e8);return t.facade=e,eC(e,tr,t),t},c=function(e){return e_(e,tr)?e[tr]:{}},u=function(e){return e_(e,tr)}}var tn=(e9={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new e6("Incompatible receiver, "+e+" required");return r}}}).enforce,ti=e9.get,ta=String,to=Object.defineProperty,ts=x("".slice),tc=x("".replace),tu=x([].join),tl=w&&!k(function(){return 8!==to(function(){},"length",{value:8}).length}),tp=String(String).split("String"),td=eV=function(e,t,r){"Symbol("===ts(ta(t),0,7)&&(t="["+tc(ta(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e_(e,"name")||eZ&&e.name!==t)&&(w?to(e,"name",{value:t,configurable:!0}):e.name=t),tl&&r&&e_(r,"arity")&&e.length!==r.arity&&to(e,"length",{value:r.arity});try{r&&e_(r,"constructor")&&r.constructor?w&&to(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tn(e);return e_(n,"source")||(n.source=tu(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=td(function(){return B(this)&&ti(this).source||e0(this)},"toString"),eQ=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(B(r)&&eV(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tf={},th={},tg={},tv={},tm={},ty={},tb=Math.ceil,t_=Math.floor;ty=Math.trunc||function(e){var t=+e;return(t>0?t_:tb)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:ty(t)};var tw=Math.max,tk=Math.min;tv=function(e,t){var r=tm(e);return r<0?tw(r+t,0):tk(r,t)};var tE={},t$={},tS=Math.min;t$=function(e){return e>0?tS(tm(e),9007199254740991):0},tE=function(e){return t$(e.length)};var tj=function(e){return function(t,r,n){var i,a=P(t),o=tE(a),s=tv(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tO={includes:tj(!0),indexOf:tj(!1)}.indexOf,tL=x([].push);tg=function(e,t){var r,n=P(e),i=0,a=[];for(r in n)!e_(e5,r)&&e_(n,r)&&tL(a,r);for(;t.length>i;)e_(n,r=t[i++])&&(~tO(a,r)||tL(a,r));return a};var tP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tg(e,tP)},p=Object.getOwnPropertySymbols;var tM=x([].concat);th=Q("Reflect","ownKeys")||function(e){var t=l(eR(e));return p?tM(t,p(e)):t},tf=function(e,t,n){for(var i=th(t),a=0;a<i.length;a++){var s=i[a];e_(e,s)||n&&e_(n,s)||o(e,s,r(t,s))}};var tx={},tT=/#|\.prototype\./,tN=function(e,t){var r=tq[tI(e)];return r===tH||r!==tF&&(B(t)?k(t):!!t)},tI=tN.normalize=function(e){return String(e).replace(tT,".").toLowerCase()},tq=tN.data={},tF=tN.NATIVE="N",tH=tN.POLYFILL="P";tx=tN,y=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||em(c,{}):(b[c]||{}).prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tx(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tf(o,a)}(e.sham||a&&a.sham)&&eC(o,"sham",!0),eQ(n,i,o,e)}};var tC={},tA={},tR=Function.prototype,tD=tR.apply,tW=tR.call;tA="object"==typeof Reflect&&Reflect.apply||($?tW.bind(tD):function(){return tW.apply(tD,arguments)});var tG={},tU={},tz=(tU=function(e){if("Function"===q(e))return x(e)})(tU.bind);tG=function(e,t){return ec(e),void 0===t?e:$?tz(e,t):function(){return e.apply(t,arguments)}};var tB={};tB=Q("document","documentElement");var tY={};tY=x([].slice);var tJ={},tQ=TypeError;tJ=function(e,t){if(e<t)throw new tQ("Not enough arguments");return e};var tV={};tV=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tK={};tK="process"===q(b.process);var tX=b.setImmediate,tZ=b.clearImmediate,t0=b.process,t1=b.Dispatch,t9=b.Function,t2=b.MessageChannel,t4=b.String,t3=0,t7={},t5="onreadystatechange";k(function(){d=b.location});var t8=function(e){if(e_(t7,e)){var t=t7[e];delete t7[e],t()}},t6=function(e){return function(){t8(e)}},re=function(e){t8(e.data)},rt=function(e){b.postMessage(t4(e),d.protocol+"//"+d.host)};tX&&tZ||(tX=function(e){tJ(arguments.length,1);var t=B(e)?e:t9(e),r=tY(arguments,1);return t7[++t3]=function(){tA(t,void 0,r)},f(t3),t3},tZ=function(e){delete t7[e]},tK?f=function(e){t0.nextTick(t6(e))}:t1&&t1.now?f=function(e){t1.now(t6(e))}:t2&&!tV?(g=(h=new t2).port2,h.port1.onmessage=re,f=tG(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&d&&"file:"!==d.protocol&&!k(rt)?(f=rt,b.addEventListener("message",re,!1)):f=t5 in eI("script")?function(e){tB.appendChild(eI("script"))[t5]=function(){tB.removeChild(this),t8(e)}}:function(e){setTimeout(t6(e),0)});var rr=(tC={set:tX,clear:tZ}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rr},{clearImmediate:rr});var rn=tC.set,ri={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ro=b.Function,rs=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ri=function(e,t){var r=t?2:1;return rs?function(n,i){var a=tJ(arguments.length,1)>r,o=B(n)?n:ro(n),s=a?tY(arguments,r):[],c=a?function(){tA(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rc=b.setImmediate?ri(rn,!1):rn;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rc},{setImmediate:rc});const ru="https://forkify-api.herokuapp.com/api/v2/recipes",rl="0d6ee7ee-90a1-4e30-bd90-f455ed70f5c4";function rp(e){return new Promise((t,r)=>{setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})}async function rd(e){try{let t=await Promise.race([fetch(e),rp(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}}async function rf(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rp(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}}const rh={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:12},bookmarks:[]};function rg(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}async function rv(e){try{let t=await rd(`${ru}/${e}?key=${rl}`);rh.recipe=rg(t),rh.bookmarks.some(t=>t.id==e)?rh.recipe.bookmarked=!0:rh.recipe.bookmarked=!1}catch(e){throw e}}async function rm(e){try{rh.search.query=e;let t=await rd(`${ru}?search=${e}&key=${rl}`);if(0===t.data.recipes.length)throw Error("No recipies found, Please try again!");rh.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),rh.search.page=1}catch(e){throw e}}function ry(e=rh.search.page){rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage,r=e*rh.search.resultsPerPage;return rh.search.results.slice(t,r)}function rb(){window.localStorage.setItem("bookmarks",JSON.stringify(rh.bookmarks))}function r_(e){rh.bookmarks.push(e),e.id===rh.recipe.id&&(rh.recipe.bookmarked=!0),rb()}async function rw(e){try{let t=Object.entries(e).filter(e=>e[0].includes("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",");if(3!==t.length)throw Error("Wrong ingredient format, Please use the correct format");let[r,n,i]=t;return{quantity:""===r?null:Number(r.trim()),unit:n.trim(),description:i.trim()}});e={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:Number(e.servings),cooking_time:Number(e.cookingTime),ingredients:t};let r=await rf(`${ru}?key=${rl}`,e);console.log(r),rh.recipe=rg(r),r_(rh.recipe)}catch(e){throw e}}!function(){let e=window.localStorage.getItem("bookmarks");e&&(rh.bookmarks=JSON.parse(e))}();var rk={};rk=new URL("icons.c14567a0.svg",import.meta.url).toString();class rE{_data;render(e){this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`
            <div class="spinner">
                <svg>
                    <use href="${m(rk)}#icon-loader"></use>
                </svg>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${m(rk)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`        
            <div class="message">
                <div>
                    <svg>
                        <use href="${m(rk)}#icon-smile"></use>
                    </svg>
                </div>
                <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var r$={};function rS(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,p=t;for(;u<=c.length;)l%c[u]==0&&p%c[u]==0?(c[u],l/=c[u],p/=c[u]):u++;return a=p,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}r$=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rS(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return rS(Math.round((o*s-o)*Math.pow(10,a)),(s-1)*Math.pow(10,a),n,i,!0)}(r,n,e,a,t)}};class rj extends rE{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--tiny");r&&e(Number(r.getAttribute("data"))>0?Number(r.getAttribute("data")):1)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
            <img src="${this._data.image}" alt="Recipe" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
        </figure>

        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${m(rk)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${m(rk)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--decrease-servings" data="${this._data.servings-1}">
                        <svg>
                            <use href="${m(rk)}#icon-minus-circle"></use>
                        </svg>
                    </button>
                    <button class="btn--tiny btn--increase-servings" data="${this._data.servings+1}">
                        <svg>
                            <use href="${m(rk)}#icon-plus-circle"></use>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${m(rk)}#icon-user"></use>
                </svg>
            </div>
            <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${m(rk)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
            </button>
        </div>

        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(this._generateMarkupIngredients).join("")}
            </ul>
        </div>

        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
            </p>
            <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
            >
                <span>Directions</span>
                <svg class="search__icon">
                <use href="${m(rk)}#icon-arrow-right"></use>
                </svg>
            </a>
        </div>
  `}_generateMarkupIngredients(e){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${m(rk)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?m(r$)(e.quantity):""}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
            ${e.description}
            </div>
        </li>`}}var rO=new rj;class rL{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector(".search__field").value}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",t=>{t.preventDefault(),e(),this.#t()})}}var rP=new rL;class rM extends rE{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(e=>{let t=window.location.hash.slice(1);return`<li class="preview">
                <a class="preview__link ${t===e.id?"preview__link--active":""}" href="#${e.id}">
                <figure class="preview__fig">
                    <img src="${e.image}" alt="${e.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${e.title}</h4>
                    <p class="preview__publisher">${e.publisher}</p>

                    <div class="preview__user-generated ${e.key?"":"hidden"}">
                        <svg>
                            <use href="${m(rk)}#icon-user"></use>
                        </svg>
                    </div>
                </div>
                </a>
            </li>`}).join("")}}var rx=new rM;class rT extends rE{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(Number(r.getAttribute("data-goto")))})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`
        <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
                <use href="${m(rk)}#icon-arrow-right"></use>
            </svg>
        </button>`:this._data.page===e&&e>1?`
            <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${m(rk)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page-1}</span>
            </button>`:this._data.page<e?`
            <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${m(rk)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page-1}</span>
            </button>
            <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page+1}</span>
                <svg class="search__icon">
                    <use href="${m(rk)}#icon-arrow-right"></use>
                </svg>
            </button>`:""}}var rN=new rT;class rI extends rE{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_generateMarkup(){return this._data.map(e=>{let t=window.location.hash.slice(1);return`<li class="preview">
                <a class="preview__link ${t===e.id?"preview__link--active":""}" href="#${e.id}">
                <figure class="preview__fig">
                    <img src="${e.image}" alt="${e.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${e.title}</h4>
                    <p class="preview__publisher">${e.publisher}</p>
                </div>
                </a>
            </li>`}).join("")}}var rq=new rI;class rF extends rE{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",e=>{this.toggleWindow()}),this._btnClose.addEventListener("click",e=>{this.toggleWindow()}),this._overlay.addEventListener("click",e=>{this._overlay.classList.add("hidden"),this._window.classList.add("hidden")})}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(Object.fromEntries([...new FormData(this._parentElement)]))})}_generateMarkup(){}}var rH=new rF,rC=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new O(a||[]),s=d,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=p(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===d)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=p(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=p(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),u($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rC}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rC:Function("r","regeneratorRuntime = r")(rC)}async function rA(){try{let e=window.location.hash.slice(1);if(!e)return;rO.renderSpinner(),rx.update(ry()),await rv(e),rO.render(rh.recipe),rh.bookmarks.length>0&&rq.render(rh.bookmarks)}catch(e){rO.renderError()}}async function rR(){try{let e=rP.getQuery();if(!e)return;rx.renderSpinner(),await rm(e),rx.render(ry()),rN.render(rh.search)}catch(e){rx.renderError(e.message)}}async function rD(e){try{rH.renderSpinner(),await rw(e),rO.render(rh.recipe),rH.renderMessage("Successfully uploaded the new recipe"),rq.render(rh.bookmarks),window.history.pushState(null,"",`#${rh.recipe.id}`),setTimeout(()=>{rH.toggleWindow(),window.location.reload()},1e3)}catch(e){rH.renderError(e.message)}}rO.addHandlerRender(rA),rO.addHandlerUpdateServings(function(e){rh.recipe?.ingredients.forEach(t=>{t.quantity=t.quantity*e/rh.recipe.servings}),rh.recipe.servings=e,rO.update(rh.recipe)}),rO.addHandlerBookmark(function(){if(rh.recipe.bookmarked){if(rh.recipe.bookmarked){var e;e=rh.recipe.id,rh.bookmarks=rh.bookmarks.filter(t=>t.id!==e),rh.recipe.id==e&&(rh.recipe.bookmarked=!1),rb()}}else r_(rh.recipe);rq.render(rh.bookmarks),rO.update(rh.recipe)}),rP.addHandlerSearch(rR),rN.addHandlerClick(function(e){rx.render(ry(e)),rN.render(rh.search)}),rH.addHandlerUpload(rD);
//# sourceMappingURL=index.400b0673.js.map