var twitterFetcher=function(){function v(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,f){return f}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function l(a,c){for(var f=[],g=new RegExp("(^| )"+c+"( |$)"),b=a.getElementsByTagName("*"),h=0,e=b.length;h<e;h++)g.test(b[h].className)&&f.push(b[h]);return f}var w="",k=20,x=!0,m=[],q=!1,n=!0,p=!0,r=null,s=!0,y=!0,t=null,z=!0;return{fetch:function(a){void 0===a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=
!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);if(q)m.push(a);else{q=!0;w=a.domId;k=a.maxTweets;x=a.enableLinks;p=a.showUser;n=a.showTime;y=a.showRetweet;r=a.dateFunction;t=a.customCallback;z=a.showInteraction;var c=document.createElement("script");c.type="text/javascript";
c.src="https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();document.getElementsByTagName("head")[0].appendChild(c)}},callback:function(a){var c=document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(s=!1);a=[];var f=[],g=[],b=[],h=[],e=0;if(s)for(c=c.getElementsByClassName("tweet");e<c.length;){0<c[e].getElementsByClassName("retweet-credit").length?
b.push(!0):b.push(!1);if(!b[e]||b[e]&&y)a.push(c[e].getElementsByClassName("e-entry-title")[0]),h.push(c[e].getAttribute("data-tweet-id")),f.push(c[e].getElementsByClassName("p-author")[0]),g.push(c[e].getElementsByClassName("dt-updated")[0]);e++}else for(c=l(c,"tweet");e<c.length;)a.push(l(c[e],"e-entry-title")[0]),h.push(c[e].getAttribute("data-tweet-id")),f.push(l(c[e],"p-author")[0]),g.push(l(c[e],"dt-updated")[0]),0<l(c[e],"retweet-credit").length?b.push(!0):b.push(!1),e++;a.length>k&&(a.splice(k,
a.length-k),f.splice(k,f.length-k),g.splice(k,g.length-k),b.splice(k,b.length-k));c=[];e=a.length;for(b=0;b<e;){if("string"!==typeof r){var d=new Date(g[b].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=r(d);g[b].setAttribute("aria-label",d);if(a[b].innerText)if(s)g[b].innerText=d;else{var u=document.createElement("p"),A=document.createTextNode(d);u.appendChild(A);u.setAttribute("aria-label",d);g[b]=u}else g[b].textContent=d}d="";x?(p&&(d+='<div class="user">'+v(f[b].innerHTML)+
"</div>"),d+='<p class="tweet">'+v(a[b].innerHTML)+"</p>",n&&(d+='<p class="timePosted">'+g[b].getAttribute("aria-label")+"</p>")):a[b].innerText?(p&&(d+='<p class="user">'+f[b].innerText+"</p>"),d+='<p class="tweet">'+a[b].innerText+"</p>",n&&(d+='<p class="timePosted">'+g[b].innerText+"</p>")):(p&&(d+='<p class="user">'+f[b].textContent+"</p>"),d+='<p class="tweet">'+a[b].textContent+"</p>",n&&(d+='<p class="timePosted">'+g[b].textContent+"</p>"));z&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+
h[b]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+h[b]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+h[b]+'" class="twitter_fav_icon">Favorite</a></p>');c.push(d);b++}if(null===t){a=c.length;f=0;g=document.getElementById(w);for(h="<ul>";f<a;)h+="<li>"+c[f]+"</li>",f++;g.innerHTML=h+"</ul>"}else t(c);q=!1;0<m.length&&(twitterFetcher.fetch(m[0]),m.splice(0,1))}}}();
