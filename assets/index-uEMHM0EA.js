(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const b of i.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const t=document.querySelector(".displayNumber--heading"),p=document.querySelector(".displaySwitch--switchInput"),m=document.querySelectorAll(".userOptions-row--number"),x=document.querySelector(".userOptions-row--clear"),u=document.querySelector(".userOptions-row--dot"),g=document.querySelector(".userOptions-row--pos-neg"),a=document.querySelectorAll(".userOptions-row--operator");let n=[];const d=[];if(!t||!m||!x||!u||!g||!a||!p)throw new Error("Issue with selector!");let f=()=>{t.innerText="0",u.disabled=!1,a.forEach(l=>{l.disabled=!1}),n.length=0,console.log("This has been clicked!",t)};const T=l=>{const e=l.target;t.innerText==="0"&&(t.innerText=""),t.innerText.length<15?t.innerText+=e.value:(alert("ERROR!"),t.style.fontSize="30px",t.innerText="0"),console.log(e.value)},y=l=>{const e=l.target;e.value==="+"?(A(),console.log("add has been run")):e.value==="-"?(S(),console.log("The - sign has been added")):e.value==="x"?(v(),console.log("The * sign has been added")):e.value==="÷"?(I(),console.log("The / sign has been added")):e.value==="%"?(k(),console.log("The % sign has been added")):e.value==="="?E():console.log("No operator has been selected!")},h=l=>{const e=l.target;t.innerText+=e.value,t.innerText.endsWith(".")&&(u.disabled=!0)},N=()=>{parseInt(t.innerText)>0?t.innerText="-"+t.innerText:t.innerText=t.innerText.replace("-","")},A=()=>{let l=0;if(n.length<1){a.forEach(r=>{(r.value=="%"||r.value=="÷"||r.value=="x"||r.value=="-")&&(r.disabled=!0)}),n.push(Number(t.innerText)),t.innerText=t.innerText+"+";let e=t.innerText.split("+");n.push(Number(e[1])),console.log(`number Array length ${n.length}`),console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("IF IS FIRING")}else{let e=t.innerText.split("+");n[1]=Number(e[1]),l=n[0]+n[1],n[0]=l,t.innerText=l.toString(),t.innerText=t.innerText+"+",console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("total is = "+l),console.log("ELSE IS FIRING")}},S=()=>{let l=0;if(n.length<1){a.forEach(r=>{(r.value=="%"||r.value=="÷"||r.value=="x"||r.value=="+")&&(r.disabled=!0)}),n.push(Number(t.innerText)),t.innerText=t.innerText+"-";let e=t.innerText.split("-");n.push(Number(e[1])),console.log(`number Array length ${n.length}`),console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("IF IS FIRING")}else{let e=t.innerText.split("-");n[1]=Number(e[1]),l=n[0]-n[1],n[0]=l,t.innerText=l.toString(),t.innerText=t.innerText+"-",console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("total is = "+l),console.log("ELSE IS FIRING")}},v=()=>{let l=0;if(a.forEach(e=>{(e.value=="%"||e.value=="÷"||e.value=="+"||e.value=="-")&&(e.disabled=!0)}),n.length<1){n.push(Number(t.innerText)),t.innerText=t.innerText+"x";let e=t.innerText.split("x");n.push(Number(e[1])),console.log(`number Array length ${n.length}`),console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("IF IS FIRING")}else{let e=t.innerText.split("x");n[1]=Number(e[1]),l=n[0]*n[1],n[0]=l,t.innerText=l.toString(),t.innerText=t.innerText+"x",console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("total is = "+l),console.log("ELSE IS FIRING")}},I=()=>{let l=0;if(a.forEach(e=>{(e.value=="%"||e.value=="+"||e.value=="x"||e.value=="-")&&(e.disabled=!0)}),n.length<1){n.push(Number(t.innerText)),t.innerText=t.innerText+"÷";let e=t.innerText.split("÷");n.push(Number(e[1])),console.log(`number Array length ${n.length}`),console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("IF IS FIRING")}else{let e=t.innerText.split("÷");n[1]=Number(e[1]),l=n[0]/n[1],n[0]=l,t.innerText=l.toString(),t.innerText=t.innerText+"÷",console.log(`number Array ${n}`),console.log(`split operator Array ${e}`),console.log("total is = "+l),console.log("ELSE IS FIRING")}},E=()=>{let l=0,e="";for(let r=0;r<d.length;r++)t.innerText.includes(d[r])&&(e=d[r],console.log(e));if(console.log(e),t.innerText.endsWith("%")){console.log("percentage total is expected");let r=t.innerText.split("%");l=Number(r[0])/100,t.innerText=l.toString(),n.length=0,a.forEach(s=>{s.disabled=!1})}else if(t.innerText.endsWith(e))alert("CANNOT DO CALCULATION!"),t.innerText="0",n.length=0,a.forEach(r=>{r.disabled=!1});else{switch(e){case"+":console.log("add total is expected");let r=t.innerText.split("+");l=Number(r[0])+Number(r[1]),t.innerText=l.toString(),console.log(l),n.length=0;break;case"-":console.log("minus total is expected");let s=t.innerText.split("-");l=Number(s[0])-Number(s[1]),t.innerText=l.toString(),console.log(l),n.length=0;break;case"x":console.log("times total is expected");let o=t.innerText.split("x");l=Number(o[0])*Number(o[1]),t.innerText=l.toString(),console.log(l),n.length=0;break;case"÷":console.log("divide total is expected");let i=t.innerText.split("÷");l=Number(i[0])/Number(i[1]),t.innerText=l.toString(),console.log(l),n.length=0;break;default:console.log("nothing is expected");break}a.forEach(r=>{r.disabled=!1})}},k=()=>{t.innerText.endsWith("%")?(alert("CANNOT ADD ANOTHER PERCENTAGE!"),t.innerText="0"):(t.innerText=t.innerText+"%",a.forEach(l=>{l.value!="="&&(l.disabled=!0)}),u.disabled=!0)},w=()=>{const l=document.querySelector(".displayNumber"),e=document.querySelector(".userOptions"),r=document.querySelector(".offswitch"),s=document.querySelector(".onswitch");p.checked?(c==null||c.setAttribute("style","height: 100%; width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);"),l==null||l.setAttribute("style","display: block;"),e==null||e.setAttribute("style","display: block;"),r==null||r.setAttribute("style","color: black;"),s==null||s.setAttribute("style","color: black;"),console.log("IS WORKING")):(c==null||c.setAttribute("style","background-color: black;"),l==null||l.setAttribute("style","display: block; opacity: 0.1;"),e==null||e.setAttribute("style","display: block; opacity: 0.1;"),r==null||r.setAttribute("style","color: white;"),s==null||s.setAttribute("style","color: white;"),console.log("IS NOT WORKING"))};p.addEventListener("change",w);x.addEventListener("click",f);u==null||u.addEventListener("click",h);g==null||g.addEventListener("click",N);m.forEach(l=>{l.addEventListener("click",T)});a.forEach(l=>{l.addEventListener("click",y),d.push(l.value),console.log(d)});const c=document.querySelector("body"),$=()=>{c==null||c.setAttribute("style","background-color: #99ccff;"),setTimeout(q,6500)},q=()=>{const l=document.querySelector("#loadingSection"),e=document.querySelector(".displayNumber"),r=document.querySelector(".userOptions"),s=document.querySelector(".displaySwitch"),o=document.querySelector(".calculator-body");c==null||c.setAttribute("style","height: 100%; width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);"),l==null||l.setAttribute("style","display: none;"),e==null||e.setAttribute("style","display: block;"),r==null||r.setAttribute("style","display: block;"),s==null||s.setAttribute("style","display: grid;"),o==null||o.setAttribute("style","display: block;")};window.onload=()=>{$()};
