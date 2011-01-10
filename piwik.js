/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
var _paq=_paq||[],Piwik=Piwik||(function(){var l,v={},d=document,j=navigator,u=screen,D=window,h=false,z=[],e=D.encodeURIComponent,E=D.decodeURIComponent,C,A;function b(i){return typeof i!=="undefined"}function a(i){return typeof i==="function"}function n(i){return typeof i==="object"}function q(i){return typeof i==="string"}function x(F){var i=F.shift();if(q(i)){C[i].apply(this,F)}else{i.apply(this,F)}}function s(H,G,F,i){if(H.addEventListener){H.addEventListener(G,F,i);return true}if(H.attachEvent){return H.attachEvent("on"+G,F)}H["on"+G]=F}function g(G,J){var F="",I,H;for(I in v){H=v[I][G];if(a(H)){F+=H(J)}}return F}function y(){g("unload");if(b(l)){var i;do{i=new Date()}while(i.getTime()<l)}}function k(){var F;if(!h){h=true;g("load");for(F=0;F<z.length;
F++){z[F]()}}return true}function w(){if(d.addEventListener){s(d,"DOMContentLoaded",function i(){d.removeEventListener("DOMContentLoaded",i,false);k()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function i(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",i);k()}});if(d.documentElement.doScroll&&D===D.top){(function i(){if(!h){try{d.documentElement.doScroll("left")}catch(F){setTimeout(i,0);return}k()}}())}}}s(D,"load",k,false)}function f(){var i="";try{i=top.document.referrer}catch(G){if(parent){try{i=parent.document.referrer}catch(F){i=""}}}if(i===""){i=d.referrer}return i}function m(i){var G=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),F=G.exec(i);return F?F[1]:i}function p(F,J){var I=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),H=I.exec(F),G=new RegExp("(?:^|&)"+J+"=([^&]*)"),i=H?G.exec(H[1]):0;return i?E(i[1]):""}function o(F,i,G){if(F==="webcache.googleusercontent.com"||F==="cc.bingj.com"||F.substr(0,5)==="74.6."){i=d.links[0].href;
F=m(i)}else{if(F==="translate.googleusercontent.com"){if(G===""){G=i}i=p(i,"u");F=m(i)}}return[F,i,G]}function r(i){return unescape(e(i))}function t(U){var H=function(W,i){return(W<<i)|(W>>>(32-i))},V=function(ac){var ab="",aa,W;for(aa=7;aa>=0;aa--){W=(ac>>>(aa*4))&15;ab+=W.toString(16)}return ab},K,Y,X,G=[],O=1732584193,M=4023233417,L=2562383102,J=271733878,I=3285377520,T,S,R,Q,P,Z,F,N=[];U=r(U);F=U.length;for(Y=0;Y<F-3;Y+=4){X=U.charCodeAt(Y)<<24|U.charCodeAt(Y+1)<<16|U.charCodeAt(Y+2)<<8|U.charCodeAt(Y+3);N.push(X)}switch(F&3){case 0:Y=2147483648;break;case 1:Y=U.charCodeAt(F-1)<<24|8388608;break;case 2:Y=U.charCodeAt(F-2)<<24|U.charCodeAt(F-1)<<16|32768;break;case 3:Y=U.charCodeAt(F-3)<<24|U.charCodeAt(F-2)<<16|U.charCodeAt(F-1)<<8|128;break}N.push(Y);while((N.length&15)!==14){N.push(0)}N.push(F>>>29);N.push((F<<3)&4294967295);for(K=0;K<N.length;K+=16){for(Y=0;Y<16;Y++){G[Y]=N[K+Y]}for(Y=16;Y<=79;Y++){G[Y]=H(G[Y-3]^G[Y-8]^G[Y-14]^G[Y-16],1)}T=O;S=M;R=L;Q=J;P=I;for(Y=0;Y<=19;Y++){Z=(H(T,5)+((S&R)|(~S&Q))+P+G[Y]+1518500249)&4294967295;
P=Q;Q=R;R=H(S,30);S=T;T=Z}for(Y=20;Y<=39;Y++){Z=(H(T,5)+(S^R^Q)+P+G[Y]+1859775393)&4294967295;P=Q;Q=R;R=H(S,30);S=T;T=Z}for(Y=40;Y<=59;Y++){Z=(H(T,5)+((S&R)|(S&Q)|(R&Q))+P+G[Y]+2400959708)&4294967295;P=Q;Q=R;R=H(S,30);S=T;T=Z}for(Y=60;Y<=79;Y++){Z=(H(T,5)+(S^R^Q)+P+G[Y]+3395469782)&4294967295;P=Q;Q=R;R=H(S,30);S=T;T=Z}O=(O+T)&4294967295;M=(M+S)&4294967295;L=(L+R)&4294967295;J=(J+Q)&4294967295;I=(I+P)&4294967295}Z=V(O)+V(M)+V(L)+V(J)+V(I);return Z.toLowerCase()}function B(ah,ag){var Y=o(D.location.hostname,D.location.href,f()),J=Y[0],P=Y[1],ai=Y[2],G="GET",T=ah||"",aw=ag||"",ap,av=d.title,W="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aj=[J],I=[],ak=[],am=[],S=500,X,af,K="_pk_id",al=730,L,M="0",Q={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},ac=false,ao=t,ax=function(aA){var aD=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),aB={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function ay(aE){aD.lastIndex=0;return aD.test(aE)?'"'+aE.replace(aD,function(aF){var aG=aB[aF];return q(aG)?aG:"\\u"+("0000"+aF.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+aE+'"'}function az(aE){return aE<10?"0"+aE:aE}function aC(aJ,aI){var aH,aG,aF,aE,aK=aI[aJ];if(aK===null){return"null"}if(aK&&n(aK)&&a(aK.toJSON)){aK=aK.toJSON(aJ)}switch(typeof aK){case"string":return ay(aK);case"number":return isFinite(aK)?String(aK):"null";case"boolean":case"null":return String(aK);case"object":aE=[];if(aK instanceof Array){for(aH=0;aH<aK.length;aH++){aE[aH]=aC(aH,aK)||"null"}aF=aE.length===0?"[]":"["+aE.join(",")+"]";return aF}if(aK instanceof Date){return ay(aK.getUTCFullYear()+"-"+az(aK.getUTCMonth()+1)+"-"+az(aK.getUTCDate())+"T"+az(aK.getUTCHours())+":"+az(aK.getUTCMinutes())+":"+az(aK.getUTCSeconds())+"Z")}for(aG in aK){aF=aC(aG,aK);if(aF){aE.push(ay(aG)+":"+aF)}}aF=aE.length===0?"{}":"{"+aE.join(",")+"}";return aF}}return aC("",{"":aA})};function N(aE,aB,az,aD,aA,aC){var ay;if(az){ay=new Date();
ay.setTime(ay.getTime()+az*86400000)}d.cookie=aE+"="+e(aB)+(az?";expires="+ay.toGMTString():"")+";path="+(aD?aD:"/")+(aA?";domain="+aA:"")+(aC?";secure":"")}function H(aA){var ay=new RegExp("(^|;)[ ]*"+aA+"=([^;]*)"),az=ay.exec(d.cookie);return az?E(az[2]):0}function aq(az){var ay;if(X){ay=new RegExp("#.*");return az.replace(ay,"")}return az}function i(ay){var az=new Image(1,1);az.onLoad=function(){};az.src=T+"?"+ay}function R(ay){try{var aA=D.XMLHttpRequest?new D.XMLHttpRequest():D.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;aA.open("POST",T,true);aA.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");aA.setRequestHeader("Content-Length",ay.length);aA.setRequestHeader("Connection","close");aA.send(ay)}catch(az){i(ay)}}function at(aA,az){var ay=new Date();l=ay.getTime()+az;if(G==="POST"){R(aA)}else{i(aA)}}function O(){var ay,az;if(typeof navigator.javaEnabled!=="unknown"&&b(j.javaEnabled)&&j.javaEnabled()){Q.java[2]="1"}if(a(D.GearsFactory)){Q.gears[2]="1"
}if(j.mimeTypes&&j.mimeTypes.length){for(ay in Q){az=j.mimeTypes[Q[ay][1]];if(az&&az.enabledPlugin){Q[ay][2]="1"}}}}function ae(){var ay="_pk_testcookie";if(!b(j.cookieEnabled)){N(ay,"1");return H(ay)==="1"?"1":"0"}return j.cookieEnabled?"1":"0"}function Z(aD,aA){var aB,az=new Date(),ay=H(K),aC="&res="+u.width+"x"+u.height+"&cookie="+M;for(aB in Q){aC+="&"+Q[aB][0]+"="+Q[aB][2]}if(!ay){ay=ao((b(j.userAgent)?j.userAgent:"")+(b(j.platform)?j.platform:"")+aC)}N(K,ay,al,"/",L);aC="idsite="+aw+"&rec=1&rand="+Math.random()+"&h="+az.getHours()+"&m="+az.getMinutes()+"&s="+az.getSeconds()+"&url="+e(aq(b(ap)?ap:P))+"&urlref="+e(aq(ai))+"&fpc="+ay+aC;if(b(aD)){if(aD!==null){aC+="&data="+e(ax(aD))}}else{if(b(af)){aC+="&data="+e(ax(af))}}aC+=g(aA);return aC}function F(az,aA){var ay=Z(aA,"log")+"&action_name="+e(b(az)?az:av);at(ay,S)}function ar(ay,aB,aA){var az=Z(aA,"goal")+"&idgoal="+ay;if(b(aB)&&aB!==null){az+="&revenue="+aB}at(az,S)}function V(az,ay,aB){var aA=Z(aB,"click")+"&"+ay+"="+e(aq(az))+"&redirect=0";
at(aA,S)}function ab(aB){var az,ay,aA;for(az=0;az<aj.length;az++){ay=aj[az].toLowerCase();if(aB===ay){return true}if(ay.substr(0,2)==="*."){if((aB)===ay.substr(2)){return true}aA=aB.length-ay.length+1;if((aA>0)&&(aB.substr(aA)===ay.substr(1))){return true}}}return false}function ad(aA,az){var aB,ay="(^| )(piwik[_-]"+az;if(b(aA)){for(aB=0;aB<aA.length;aB++){ay+="|"+aA[aB]}}ay+=")( |$)";return new RegExp(ay)}function au(aB,ay,aC){if(!aC){return"link"}var aA=ad(ak,"download"),az=ad(am,"link"),aD=new RegExp("\\.("+W+")([?&#]|$)","i");return az.test(aB)?"link":(aA.test(aB)||aD.test(ay)?"download":0)}function U(aF){var az,aE,aG,ay;if(!b(aF)){aF=D.event}if(b(aF.target)){az=aF.target}else{if(b(aF.srcElement)){az=aF.srcElement}else{return}}while((aE=az.parentNode)&&((aG=az.tagName)!=="A"&&aG!=="AREA")){az=aE}if(b(az.href)){var aD=az.hostname,aB=aD.toLowerCase(),aA=az.href.replace(aD,aB),aC=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!aC.test(aA)){ay=au(az.className,aA,ab(aB));
if(ay){V(aA,ay)}}}}function an(ay){s(ay,"click",U,false)}function aa(){if(!ac){ac=true;var az,ay=ad(I,"ignore"),aA=d.links;if(aA){for(az=0;az<aA.length;az++){if(!ay.test(aA[az].className)){an(aA[az])}}}}}M=ae();O();return{setTrackerUrl:function(ay){T=ay},setSiteId:function(ay){aw=ay},setCustomData:function(ay){af=ay},setLinkTrackingTimer:function(ay){S=ay},setDownloadExtensions:function(ay){W=ay},addDownloadExtensions:function(ay){W+="|"+ay},setDomains:function(ay){aj=q(ay)?[ay]:ay;aj.push(J)},setIgnoreClasses:function(ay){I=q(ay)?[ay]:ay},setRequestMethod:function(ay){G=ay||"GET"},setReferrerUrl:function(ay){ai=ay},setCustomUrl:function(ay){ap=ay},setDocumentTitle:function(ay){av=ay},setDownloadClasses:function(ay){ak=q(ay)?[ay]:ay},setDownloadClass:function(ay){ak=[ay]},setLinkClasses:function(ay){am=q(ay)?[ay]:ay},setLinkClass:function(ay){am=[ay]},discardHashTag:function(ay){X=ay},setCookieName:function(ay){K=ay},setCookieExpire:function(ay){al=ay},setCookieDomain:function(ay){L=ay},addListener:function(ay){an(ay)
},enableLinkTracking:function(){if(h){aa()}else{z[z.length]=function(){aa()}}},trackGoal:function(ay,aA,az){ar(ay,aA,az)},trackLink:function(az,ay,aA){V(az,ay,aA)},trackPageView:function(ay,az){F(ay,az)}}}function c(){return{push:x}}s(D,"beforeunload",y,false);w();C=new B();for(A=0;A<_paq.length;A++){x(_paq[A])}_paq=new c();return{addPlugin:function(i,F){v[i]=F},getTracker:function(i,F){return new B(i,F)}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);if((c=a("tracker_pause"))){e.setLinkTrackingTimer(c)}if((c=a("download_extensions"))){e.setDownloadExtensions(c)}if((c=a("hosts_alias"))){e.setDomains(c)}if((c=a("ignore_classes"))){e.setIgnoreClasses(c)}e.trackPageView();if((a("install_tracker"))){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};