let options={greyColor:"grey",yellowColor:"yellow",greenColor:"green",blueColor:"blue",blackColor:"black"},selector='meta[name="htmlFormatOptions"]',getOptions=document.querySelector(selector);if(getOptions)for(let t in getOptions=document.querySelector(selector).getAttribute("content").split(","),getOptions){if(isNaN(t))break;let e=getOptions[t].split("=")[0].replace(" ",""),o=getOptions[t].split("=")[1].replace(" ","");parseFloat(o)&&(o=parseFloat(o)),options[e]&&(options[e]=o)}else console.log("Can't get the htmlFormat's options. Default options taked !");let toFormat=document.querySelectorAll(".format");toFormat.forEach(e=>{var t=e.innerHTML.toString();let l=[],r=[["<",'<span style="color:'+options.greyColor+'">&lt;</span>'],[">",'<span style="color:'+options.greyColor+'">&gt;</span>'],["/",'<span style="color:'+options.greyColor+'">/</span>'],["@note",'<span style="color:'+options.greyColor+'; font-style: italic">{element}</span>'],["@txt",'<span style="color:'+options.blackColor+'">{element}</span>'],["@props",'<span style="color:'+options.greenColor+'">{element}</span>'],["@quotes",'<span style="color:'+options.yellowColor+'">{element}</span>'],["@dom",'<span style="color:'+options.blueColor+'">{element}</span data-color="blue">']],n=0,o=!1;for(;n<t.length;){let e=!1;for(var s in r){if(t[n-1]==r[0][0]){if("!"==t[n]){for(;t[n]!=r[1][0];)l.push(r[r.length-5][1].toString().replace("{element}",t[n])),n++;l.push(r[r.length-5][1].toString().replace("{element}",t[n])),n++;break}for(t[n]==r[2][0]&&(l.push(r[2][1]),n++);" "!=t[n]&&t[n]!=r[1][0];)l.push(r[r.length-1][1].toString().replace("{element}",t[n])),n++}else if('"'==t[n]||"'"==t[n]){l.push(r[r.length-2][1].toString().replace("{element}",t[n])),o=!0;var p=t[n];for(n++;o;)l.push(r[r.length-2][1].toString().replace("{element}",t[n])),t[n]==p&&(o=!1),n++}else if("="==t[n]){let e=[],o=n;for(;" "!=t[o];)e.push(t[o]),o--;for(o++;o!=n;)l.pop(),o++;for(var a in e)l.push(r[r.length-3][1].toString().replace("{element}",e[e.length-a-1])),a++;n++}t[n]==r[s][0]&&(l.push(r[s][1]),e=!0)}e||l.push(r[r.length-4][1].toString().replace("{element}",t[n])),n++}e.innerHTML=l.join("")}),document.querySelectorAll("script").forEach(e=>{let o=e.src.split("/");"htmlformat.js"==o[o.length-1].toLowerCase()&&e.parentNode.removeChild(e)});
