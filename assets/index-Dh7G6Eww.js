(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const b of c.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function l(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=l(o);fetch(o.href,c)}})();const n=document.querySelector(".displayNumber--heading"),i=document.querySelector("body"),p=document.querySelector(".displaySwitch--switchInput"),m=document.querySelectorAll(".userOptions-row--number"),x=document.querySelector(".userOptions-row--clear"),u=document.querySelector(".userOptions-row--dot"),g=document.querySelector(".userOptions-row--pos-neg"),a=document.querySelectorAll(".userOptions-row--operator");let r=[];const d=[];if(!n||!m||!x||!u||!g||!a||!p)throw new Error("Issue with selector!");let T=()=>{n.innerText="0",u.disabled=!1,a.forEach(e=>{e.disabled=!1}),r.length=0,console.log("This has been clicked!",n)};const y=e=>{const t=e.target;n.innerText==="0"&&(n.innerText=""),n.innerText.length<15?n.innerText+=t.value:(alert("ERROR!"),n.style.fontSize="30px",n.innerText="0")},h=e=>{const t=e.target;t.value==="+"?(A(),console.log("add has been run")):t.value==="-"?(f(),console.log("The - sign has been added")):t.value==="x"?(v(),console.log("The * sign has been added")):t.value==="÷"?(I(),console.log("The / sign has been added")):t.value==="%"?(k(),console.log("The % sign has been added")):t.value==="="?E():console.log("No operator has been selected!")},N=e=>{const t=e.target;console.log(r.length),r.length<3&&(n.innerText+=t.value,t.disabled=!0,console.log("poinnt added in if"))},S=()=>{parseInt(n.innerText)>0?n.innerText="-"+n.innerText:n.innerText=n.innerText.replace("-","")},A=()=>{let e=0;if(u.disabled=!1,r.length<1){a.forEach(l=>{(l.value=="%"||l.value=="÷"||l.value=="x"||l.value=="-")&&(l.disabled=!0)}),r.push(Number(n.innerText)),n.innerText=n.innerText+"+";let t=n.innerText.split("+");r.push(Number(t[1])),console.log(`number Array length ${r.length}`),console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("IF IS FIRING")}else{let t=n.innerText.split("+");r[1]=Number(t[1]),e=r[0]+r[1],e=Number(e.toFixed(2)),r[0]=e,n.innerText=e.toString(),n.innerText=n.innerText+"+",console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("total is = "+e),console.log("ELSE IS FIRING")}},f=()=>{let e=0;if(u.disabled=!1,r.length<1){a.forEach(l=>{(l.value=="%"||l.value=="÷"||l.value=="x"||l.value=="+")&&(l.disabled=!0)}),r.push(Number(n.innerText)),n.innerText=n.innerText+"-";let t=n.innerText.split("-");r.push(Number(t[1])),r[1]=0,t[1]=String(0),console.log(`number Array length ${r.length}`),console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("IF IS FIRING")}else{let t=n.innerText.split("-");t.length>2&&t.shift(),r[1]=Number(t[1]),e=r[0]-r[1],e=Number(e.toFixed(2)),r[0]=e,n.innerText=e.toString(),n.innerText=n.innerText+"-",console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("total is = "+e),console.log("ELSE IS FIRING")}},v=()=>{let e=0;if(u.disabled=!1,a.forEach(t=>{(t.value=="%"||t.value=="÷"||t.value=="+"||t.value=="-")&&(t.disabled=!0)}),r.length<1){r.push(Number(n.innerText)),n.innerText=n.innerText+"x";let t=n.innerText.split("x");r.push(Number(t[1])),console.log(`number Array length ${r.length}`),console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("IF IS FIRING")}else{let t=n.innerText.split("x");r[1]=Number(t[1]),e=r[0]*r[1],e=Number(e.toFixed(2)),r[0]=e,n.innerText=e.toString(),n.innerText=n.innerText+"x",console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("total is = "+e),console.log("ELSE IS FIRING")}},I=()=>{let e=0;if(u.disabled=!1,a.forEach(t=>{(t.value=="%"||t.value=="+"||t.value=="x"||t.value=="-")&&(t.disabled=!0)}),r.length<1){r.push(Number(n.innerText)),n.innerText=n.innerText+"÷";let t=n.innerText.split("÷");r.push(Number(t[1])),console.log(`number Array length ${r.length}`),console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("IF IS FIRING")}else{let t=n.innerText.split("÷");r[1]=Number(t[1]),e=r[0]/r[1],e=Number(e.toFixed(2)),r[0]=e,n.innerText=e.toString(),n.innerText=n.innerText+"÷",console.log(`number Array ${r}`),console.log(`split operator Array ${t}`),console.log("total is = "+e),console.log("ELSE IS FIRING")}},E=()=>{let e=0,t="";for(let l=0;l<d.length;l++)n.innerText.includes(d[l])&&(t=d[l],console.log(t));if(console.log(t),n.innerText.endsWith("%")){console.log("percentage total is expected");let l=n.innerText.split("%");e=Number(l[0])/100,n.innerText=e.toString(),r.length=0}else if(n.innerText.endsWith(t))alert("CANNOT DO CALCULATION!"),n.innerText="0",r.length=0;else switch(t){case"x":let l=n.innerText.split("x");e=Number(l[0])*Number(l[1]),e=Number(e.toFixed(2)),n.innerText=e.toString(),console.log(e),r.length=0;break;case"+":let s=n.innerText.split("+");e=Number(s[0])+Number(s[1]),e=Number(e.toFixed(2)),n.innerText=e.toString(),console.log(e),r.length=0;break;case"÷":let o=n.innerText.split("÷");e=Number(o[0])/Number(o[1]),e=Number(e.toFixed(2)),n.innerText=e.toString(),console.log(e),r.length=0;break;case"-":f(),n.innerText.endsWith("-")&&(n.innerText=n.innerText.substring(0,n.innerText.length-1)),r.length=0;break;default:console.log("nothing is expected");break}a.forEach(l=>{l.disabled=!1})},k=()=>{n.innerText.endsWith("%")?(alert("CANNOT ADD ANOTHER PERCENTAGE!"),n.innerText="0"):(n.innerText=n.innerText+"%",a.forEach(e=>{e.value!="="&&(e.disabled=!0,u.disabled=!0)}))},w=()=>{const e=document.querySelector(".displayNumber"),t=document.querySelector(".userOptions"),l=document.querySelector(".offswitch"),s=document.querySelector(".onswitch");p.checked?(i==null||i.setAttribute("style","width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);"),e==null||e.setAttribute("style","display: block;"),t==null||t.setAttribute("style","display: block;"),l==null||l.setAttribute("style","color: black;"),s==null||s.setAttribute("style","color: black;"),console.log("IS WORKING")):(i==null||i.setAttribute("style","background-color: black;"),e==null||e.setAttribute("style","display: block; opacity: 0.1;"),t==null||t.setAttribute("style","display: block; opacity: 0.1;"),l==null||l.setAttribute("style","color: white;"),s==null||s.setAttribute("style","color: white;"),console.log("IS NOT WORKING"))};p.addEventListener("change",w);x.addEventListener("click",T);u==null||u.addEventListener("click",N);g==null||g.addEventListener("click",S);m.forEach(e=>{e.addEventListener("click",y)});a.forEach(e=>{e.addEventListener("click",h),d.push(e.value),console.log(d)});const $=()=>{i==null||i.setAttribute("style","background-color: #99ccff;"),setTimeout(q,6500)},q=()=>{const e=document.querySelector("#loadingSection"),t=document.querySelector(".displayNumber"),l=document.querySelector(".userOptions"),s=document.querySelector(".displaySwitch"),o=document.querySelector(".calculator-body");i==null||i.setAttribute("style","width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);"),e==null||e.setAttribute("style","display: none;"),t==null||t.setAttribute("style","display: block;"),l==null||l.setAttribute("style","display: block;"),s==null||s.setAttribute("style","display: grid;"),o==null||o.setAttribute("style","display: block;")};window.onload=()=>{$()};