function htmlFormat(){let a={elements:"darkblue",props:"blue",balises:"gray",texts:"black",strings:"darkgoldenrod",notes:"lightskyblue",propsIncludesEgals:"false"},e=document.querySelector('meta[name="htmlFormatOptions"]');if(e)for(var t in e=e.getAttribute("content").toString().split(";"),e){var s=e[t].split("=")[0].replace(" ",""),l=e[t].split("=")[1].replace(" ","");a[s]&&(a[s]=l)}else console.warn("There're not any htmlFormatOptions's meta. Default options taked !");function i(e,t){return"notes"==e?"<span data-type='"+e+"' style='font-style: italic; color:"+a[e]+";'>"+t+"</span>":"<span data-type='"+e+"' style='color:"+a[e]+";'>"+t+"</span>"}let o=document.querySelectorAll(".format");o.forEach(e=>{var s=e.innerHTML;let l=[];var t=s.length;let o=0,r=!1;for(;o!=t;){let t=s[o];if("<"==t){if("!"==s[o+1]){o++;let e="&lt;";for(;">"!=s[o];)e+=s[o],o++;e+=">",l.push(i("notes",e))}else if(r=!0,l.push(i("balises",t))," "!=s[o+1]&&"/"!=s[o+1]){o++;let e="";for(;" "!=s[o]&&">"!=s[o];)e+=s[o],o++;l.push(i("elements",e)),o--}}else if("/"==t){if(l.push(i("balises",t)),">"!=s[o+1]){o++;let e="";for(;">"!=s[o];)e+=s[o],o++;l.push(i("elements",e)),o--}}else if(">"==t)r=!1,l.push(i("balises",t));else if('"'==t||"'"==t){var n=t;let e=t.toString();for(o++;s[o]!=n;)e+=s[o],o++;e+=t.toString(),l.push(i("strings",e))}else if("="==t){let e="";for(;" "!=s[o];)o--;for(;"="!=s[o];)e+=s[o],o++;"true"==a.propsIncludesEgals?(e+="=",l.push(i("props",e))):(l.push(i("props",e)),l.push(i("balises","=")))}else if("&"==t&&";"==s[o+3]){let e="";for(;";"!=s[o];)e+=s[o],o++;l.push(i("texts",e))}else r||l.push(i("texts",t));o++}e.innerHTML=l.join("")})}htmlFormat(),console.info("%c[htmlFormat]>","color: purple; font-weight: 900; text-transform: uppercase","formatting finished !"),console.log("This document was formatted with the help of htmlFormat. For more information, go on https://flylibs.netlify.app !");
