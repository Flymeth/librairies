function htmlFormat(){let e={elements:"darkblue",props:"blue",tags:"gray",texts:"black",strings:"darkgoldenrod","strings-txts":"inherit","strings-words":"inherit",notes:"lightskyblue","notes-txts":"inherit",propsIncludesEgals:"false",showLineNumbers:"false",separationWidth:"10px"},t=document.querySelector('meta[name="htmlFormatOptions"]');if(t){t=t.getAttribute("content").toString().split(";");for(let n in t){let s=t[n].split("=")[0].replace(" ",""),l=t[n].split("=")[1].replace(" ","");e[s]&&(e[s]=l)}}else console.warn("%c[htmlformat]>","color: purple; font-weight: 900; text-transform: uppercase","There're not any htmlFormatOptions's meta. Default options taked !");let n=document.createElement("style");function s(t,s){let l=document.createElement("span");return l.classList.add(t),s&&(l.innerText=s),n.innerText.includes(`.${t}`)||(n.innerText+=`.${t}{color:${e[t]}}`),l}n.classList.add("htmlFormat","defaultCSS"),n.innerText+=".code::-webkit-scrollbar{display:none}",document.querySelectorAll(".format").forEach(t=>{let n=t.innerHTML,l=[],r=!1,i=n.split("\n"),o=0;for(;" "==i[0][o];)o++;let a=[],d="";i.forEach(e=>{d="";for(let t in e)o<=parseInt(t)&&(d+=e[t]);a.push(d)});let p=(n=a.join("\n").toString()).length,c=0;for(;c<p&&!(c>p);){let t=n[c];if("<"==t){if("!"==n[c+1]){c+=5;let e="\x3c!--";for(;!(e.endsWith("--\x3e")||c>p);)"<"==n[c]?e+="<":e+=n[c],c++;let t=s("notes-txts",e.split("\x3c!--").join("").split("--\x3e").join("")),r=t.innerText.split(" ");r.splice(r.length-1),t.innerText=r.join(" ");let i=s("notes","\x3c!-- ");i.appendChild(t),i.innerHTML+=" --\x3e",l.push(i),c--}else if(r=!0,l.push(s("tags",t))," "!=n[c+1]&&"/"!=n[c+1]){c++;let e="";for(;" "!=n[c]&&">"!=n[c]&&!(c>p);)e+=n[c],c++;l.push(s("elements",e)),c--}}else if("/"==t&&r){if(l.push(s("tags",t)),">"!=n[c+1]){c++;let e="";for(;">"!=n[c]&&!(c>p);)e+=n[c],c++;l.push(s("elements",e)),c--}}else if(">"==t&&r)r=!1,l.push(s("tags",t));else if('"'==t||"'"==t&&r){let e=t,r=t.toString();for(c++;n[c]!=e&&!(c>p);)r+=n[c],c++;let i=(r+=t.toString()).split(t.toString()).join("").split(" "),o=s("strings-txts");for(let e in i){var m=s("strings-words","");m.innerText=i[e],e>0&&(o.innerHTML+=" "),o.appendChild(m)}(r=s("strings","")).innerHTML=t.toString(),r.appendChild(o),r.innerHTML+=t.toString(),l.push(r)}else if("="==t&&r){let t="";for(;" "!=n[c]&&!(c>p);)c--;for(;"="!=n[c]&&!(c>p);)t+=n[c],c++;"true"==e.propsIncludesEgals?(t+="=",l.push(s("props",t))):(l.push(s("props",t)),l.push(s("tags","=")))}else if("&"==t&&";"==n[c+3]){let e="";for(;";"!=n[c]&&!(c>p);)e+=n[c],c++;l.push(s("texts",e))}else r||l.push(s("texts",t));c++}t.innerHTML="";let h=[],u=[];for(let e in l)if(u.push(l[e]),"<br>"==l[e].innerHTML||e==l.length-1){let e=document.createElement("div");e.classList.add("lines");for(let t in u)"<br>"!=u[t].innerHTML&&e.appendChild(u[t]);e.childElementCount>0&&h.push(e),u=[]}if("true"===e.showLineNumbers){let n=h.length,s=document.createElement("div");s.classList.add("line-numbers"),s.setAttribute("style","text-align:end;-moz-user-select: none;-webkit-user-select: none;user-select: none;margin-right:"+e.separationWidth);for(let e=0;e!=n;e++){let t=document.createElement("div");t.innerText=e+1,t.classList.add("number"),s.appendChild(t)}let l=document.createElement("div");l.classList.add("code"),l.style.paddingRight=e.separationWidth,h.forEach(e=>{l.appendChild(e)});let r=document.createElement("div");r.setAttribute("style","display: flex;align-items: center"),r.appendChild(s),r.appendChild(l),t.append(r)}else h.forEach(e=>{t.appendChild(e)});t.classList.replace("format","formated"),t.classList.add("htmlFormat")}),n.innerText&&!document.querySelector(".htmlFormat.defaultCSS")&&document.head.insertBefore(n,document.querySelector("head").firstChild)}window.onload=htmlFormat(),document.body.classList.contains("htmlFormated")||(document.body.classList.add("htmlFormated"),console.info("%c[htmlFormat]>","color: purple; font-weight: 900; text-transform: uppercase","formatting finished !"),console.log("%cThis document was formatted with the help of the htmlFormat library. For more informations, go on https://flylibs.netlify.app#htmlformat !","font-style: italic; font-size: 10pt; margin: 15pt; color: cyan"));
