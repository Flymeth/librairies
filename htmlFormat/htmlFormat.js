function htmlFormat(){if(!document.body.classList.contains("htmlFormated")){let n={elements:"darkblue",props:"blue",balises:"gray",texts:"black",strings:"darkgoldenrod",notes:"lightskyblue",propsIncludesEgals:"false"},t=document.querySelector('meta[name="htmlFormatOptions"]');if(t)for(var s in t=t.getAttribute("content").toString().split(";"),t){var o=t[s].split("=")[0].replace(" ",""),l=t[s].split("=")[1].replace(" ","");n[o]&&(n[o]=l)}else console.warn("%c[htmlformat]>","color: purple; font-weight: 900; text-transform: uppercase","There're not any htmlFormatOptions's meta. Default options taked !");let e=document.querySelectorAll(".format");e.forEach(t=>{var s=t.innerHTML;let o=[];var e=s.length;let l=0,r=!1;for(;l!=e;){let e=s[l];if("<"==e){if("!"==s[l+1]){l++;let t="&lt;";for(;!t.endsWith("--\x3e");)"<"==s[l]?t+="&lt;":t+=s[l],l++;o.push(i("notes",t)),l--}else if(r=!0,o.push(i("balises",e))," "!=s[l+1]&&"/"!=s[l+1]){l++;let t="";for(;" "!=s[l]&&">"!=s[l];)t+=s[l],l++;o.push(i("elements",t)),l--}}else if("/"==e){if(o.push(i("balises",e)),">"!=s[l+1]){l++;let t="";for(;">"!=s[l];)t+=s[l],l++;o.push(i("elements",t)),l--}}else if(">"==e)r=!1,o.push(i("balises",e));else if('"'==e||"'"==e){var a=e;let t=e.toString();for(l++;s[l]!=a;)t+=s[l],l++;t+=e.toString(),o.push(i("strings",t))}else if("="==e){let t="";for(;" "!=s[l];)l--;for(;"="!=s[l];)t+=s[l],l++;"true"==n.propsIncludesEgals?(t+="=",o.push(i("props",t))):(o.push(i("props",t)),o.push(i("balises","=")))}else if("&"==e&&";"==s[l+3]){let t="";for(;";"!=s[l];)t+=s[l],l++;o.push(i("texts",t))}else r||o.push(i("texts",e));l++}t.innerHTML=o.join("")})}function i(t,e){return"notes"==t?"<span data-type='"+t+"' style='font-style: italic; color:"+a[t]+";'>"+e+"</span>":"<span data-type='"+t+"' style='color:"+a[t]+";'>"+e+"</span>"}}htmlFormat(),document.body.classList.add("htmlFormated"),console.info("%c[htmlFormat]>","color: purple; font-weight: 900; text-transform: uppercase","formatting finished !"),console.log("%cThis document was formatted with the help of the htmlFormat library. For more informations, go on https://flylibs.netlify.app#htmlformat !","font-style: italic; font-size: 10pt; margin: 15pt; color: cyan");
