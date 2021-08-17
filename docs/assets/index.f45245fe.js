import{p as e,a,r as s,o as t,b as n,c as l,d as i,e as r,f as c,w as d,g as o,h as u,i as v,v as m,F as p,j as h,t as b,k as g,l as k,m as y,n as f,q as w}from"./vendor.c39388eb.js";const x={setup(){const e=s(!1),a=s(null),l="has-navbar-fixed-top";t((()=>{const e=document.querySelector("html");e.classList.contains(l)||e.classList.add(l)})),n((()=>{document.querySelector("html").classList.remove(l)}));const i=s=>{a.value.contains(s.target)||(e.value=!1,window.removeEventListener("click",i))};return{visibleSideMenu:e,sideMenuRef:a,showSideMenu:a=>{e.value||(e.value=!0,window.addEventListener("click",i),a.stopPropagation())}}}},S=d("data-v-5ad369f2");e("data-v-5ad369f2");const D={class:"navbar is-primary is-fixed-top has-shadow"},M={class:"navbar-brand"},j=r("span",{"aria-hidden":"true"},null,-1),U=r("span",{"aria-hidden":"true"},null,-1),C=r("span",{"aria-hidden":"true"},null,-1),J=o("Home"),Y=r("div",{class:"navbar-menu"},[r("div",{class:"navbar-start"}),r("div",{class:"navbar-end"})],-1),V={class:"menu-label"},_=o(" メニュー "),F={class:"menu-list"},L=o("Sandbox01"),O=o("Sandbox02"),$=o("高さ確認"),z={class:"menu-label"},N=o(" 日付 "),T={class:"menu-list"},H=o("西暦→和暦"),P=o("和暦→西暦"),W={key:0,class:"appOverlay is-hidden-tablet"};a();const q=S(((e,a,s,t,n,d)=>{const o=u("router-link"),v=u("router-view");return l(),i("div",null,[r("nav",D,[r("div",M,[r("a",{role:"button",class:["navbar-burger is-always ml-0",{"is-active":t.visibleSideMenu}],onClick:a[1]||(a[1]=(...e)=>t.showSideMenu&&t.showSideMenu(...e))},[j,U,C],2),r(o,{class:"navbar-item",to:"/"},{default:S((()=>[J])),_:1})]),Y]),r("aside",{class:["appSideMenu menu px-2",{"is-shown":t.visibleSideMenu}],ref:"sideMenuRef"},[r("p",V,[_,r("ul",F,[r("li",null,[r(o,{to:"/n/sandbox01","active-class":"is-active"},{default:S((()=>[L])),_:1})]),r("li",null,[r(o,{to:"/n/sandbox02","active-class":"is-active"},{default:S((()=>[O])),_:1})]),r("li",null,[r(o,{to:"/n/heightsandbox","active-class":"is-active"},{default:S((()=>[$])),_:1})])])]),r("p",z,[N,r("ul",T,[r("li",null,[r(o,{to:"/n/seirekiwareki","active-class":"is-active"},{default:S((()=>[H])),_:1})]),r("li",null,[r(o,{to:"/n/warekiseireki","active-class":"is-active"},{default:S((()=>[P])),_:1})])])])],2),t.visibleSideMenu?(l(),i("div",W)):c("",!0),r(v)])}));x.render=q,x.__scopeId="data-v-5ad369f2";const I=Object.freeze({mode:"production",baseUrl:"/ghpage-sandbox/",prod:!0,dev:!1}),E={name:"Home",setup:()=>({})};E.render=function(e,a,s,t,n,r){return l(),i("div",null,"home")};const R={};R.render=function(e,a){return l(),i("div",null," sandbox01 ")};const A={};A.render=function(e,a){return l(),i("div",null," sandbox02 ")};const B={name:"HeightSandbox",setup(){const e=s(100),a=s(e.value);return{inputCount:e,decidedCount:a,decide:()=>{a.value=e.value}}}},G={class:"heightSandbox px-2"},K={class:"card"},Q=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"数を入力")],-1),X={class:"card-content"},Z={class:"columns is-vcentered is-multiline"},ee={class:"column is-12"},ae={class:"field"},se=r("label",{class:"label"},"数",-1),te={class:"is-flex is-align-items-center"},ne={class:"column is-12"},le={class:"card mt-4"},ie=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"結果")],-1),re={class:"card-content"};B.render=function(e,a,s,t,n,c){return l(),i("div",G,[r("div",K,[Q,r("div",X,[r("div",Z,[r("div",ee,[r("div",ae,[se,r("div",te,[v(r("input",{class:"input has-text-right",type:"number",min:"1",max:"150",style:{width:"5em"},"onUpdate:modelValue":a[1]||(a[1]=e=>t.inputCount=e)},null,512),[[m,t.inputCount,void 0,{number:!0}]])])])]),r("div",ne,[r("button",{class:"button is-primary",onClick:a[2]||(a[2]=(...e)=>t.decide&&t.decide(...e))},"決定")])])])]),r("div",le,[ie,r("div",re,[r("ul",null,[(l(!0),i(p,null,h(t.decidedCount,(e=>(l(),i("li",{key:e},b(e),1)))),128))])])])])};const ce=Object.freeze({key:"reiwa",name:"令和",startJsDate:new Date(2019,4,1)}),de=Object.freeze({key:"heise",name:"平成",startJsDate:new Date(1989,0,8)}),oe=Object.freeze({key:"showa",name:"昭和",startJsDate:new Date(1926,11,25)}),ue=Object.freeze({key:"taisho",name:"大正",startJsDate:new Date(1912,6,30)}),ve=Object.freeze({key:"meiji",name:"明治",startJsDate:new Date(1868,0,25)}),me={name:"SeirekiWareki",setup(){const e=new Date,a=s(e.getFullYear().toString()),t=s(e.getMonth().toString()),n=s(e.getDate().toString()),l=s([]),i=g((()=>{const e=Number(a.value),s=Number(t.value),l=Number(n.value);return new Date(e,s,l)}));return{year:a,month:t,date:n,warekiTexts:l,resolve:()=>{const e=[ce,de,oe,ue,ve];l.value=[];for(const a of e){if(i.value.getTime()<a.startJsDate.getTime())continue;const e=i.value.getFullYear()-a.startJsDate.getFullYear()+1;l.value.push(`${a.name}:${e}年${i.value.getMonth()+1}月${i.value.getDate()}日`)}},jsDate:i}}},pe={class:"seirekiWareki px-2"},he={class:"card"},be=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"西暦を入力")],-1),ge={class:"card-content"},ke={class:"columns is-vcentered is-multiline"},ye={class:"column is-12"},fe={class:"field"},we=r("label",{class:"label"},"西暦",-1),xe={class:"is-flex is-align-items-center"},Se=o(" 年 "),De={class:"select"},Me=o(" 月 "),je={class:"select"},Ue=o(" 日 "),Ce={class:"column is-12"},Je={class:"card mt-4"},Ye=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"結果")],-1),Ve={class:"card-content"};me.render=function(e,a,s,t,n,c){return l(),i("div",pe,[r("div",he,[be,r("div",ge,[r("div",ke,[r("div",ye,[r("div",fe,[we,r("div",xe,[v(r("input",{class:"input has-text-right",type:"number",style:{width:"5em"},"onUpdate:modelValue":a[1]||(a[1]=e=>t.year=e)},null,512),[[m,t.year]]),Se,r("div",De,[v(r("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>t.month=e)},[(l(),i(p,null,h(12,(e=>r("option",{key:e,value:e-1},b(e),9,["value"]))),64))],512),[[k,t.month]])]),Me,r("div",je,[v(r("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>t.date=e)},[(l(),i(p,null,h(31,(e=>r("option",{key:e,value:e},b(e),9,["value"]))),64))],512),[[k,t.date]])]),Ue])])]),r("div",Ce,[r("button",{class:"button is-primary",onClick:a[4]||(a[4]=(...e)=>t.resolve&&t.resolve(...e))},"決定")])])])]),r("div",Je,[Ye,r("div",Ve,[o(b(t.jsDate.toLocaleDateString())+" ",1),r("ul",null,[(l(!0),i(p,null,h(t.warekiTexts,((e,a)=>(l(),i("li",{key:a},b(e),1)))),128))])])])])};const _e={name:"WarekiSeireki",setup(){const e=new Date,a=s([ce,de,oe,ue,ve]),t=s(a.value[0].key),n=s((e.getFullYear()-ce.startJsDate.getFullYear()+1).toString()),l=s(e.getMonth().toString()),i=s(e.getDate().toString()),r=s("");return{gengos:a,gengo:t,gengoYear:n,month:l,date:i,resolve:()=>{const e=a.value.find((e=>e.key===t.value));r.value=`西暦：${e.startJsDate.getFullYear()+Number(n.value)-1}年${Number(l.value)+1}月${i.value}日`},seirekiText:r}}},Fe={class:"warekiSeireki px-2"},Le={class:"card"},Oe=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"和暦を入力")],-1),$e={class:"card-content"},ze={class:"columns is-vcentered is-multiline"},Ne={class:"column is-12"},Te={class:"field"},He=r("label",{class:"label"},"和暦",-1),Pe={class:"is-flex is-align-items-center"},We={class:"select"},qe=o(" 年 "),Ie={class:"select"},Ee=o(" 月 "),Re={class:"select"},Ae=o(" 日 "),Be={class:"column is-12"},Ge={class:"card mt-4"},Ke=r("header",{class:"card-header is-primary"},[r("p",{class:"card-header-title"},"結果")],-1),Qe={class:"card-content"};_e.render=function(e,a,s,t,n,c){return l(),i("div",Fe,[r("div",Le,[Oe,r("div",$e,[r("div",ze,[r("div",Ne,[r("div",Te,[He,r("div",Pe,[r("div",We,[v(r("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>t.gengo=e)},[(l(!0),i(p,null,h(t.gengos,(e=>(l(),i("option",{key:e.key,value:e.key},b(e.name),9,["value"])))),128))],512),[[k,t.gengo]])]),v(r("input",{class:"input has-text-right",type:"number",style:{width:"3em"},"onUpdate:modelValue":a[2]||(a[2]=e=>t.gengoYear=e)},null,512),[[m,t.gengoYear]]),qe,r("div",Ie,[v(r("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>t.month=e)},[(l(),i(p,null,h(12,(e=>r("option",{key:e,value:e-1},b(e),9,["value"]))),64))],512),[[k,t.month]])]),Ee,r("div",Re,[v(r("select",{"onUpdate:modelValue":a[4]||(a[4]=e=>t.date=e)},[(l(),i(p,null,h(31,(e=>r("option",{key:e,value:e},b(e),9,["value"]))),64))],512),[[k,t.date]])]),Ae])])]),r("div",Be,[r("button",{class:"button is-primary",onClick:a[5]||(a[5]=(...e)=>t.resolve&&t.resolve(...e))},"決定")])])])]),r("div",Ge,[Ke,r("div",Qe,b(t.seirekiText),1)])])};const Xe=[{path:"",redirect:"/n"},{path:"/n",name:"NormalLayout",component:x,children:[{path:"",name:"Home",component:E},{path:"sandbox01",name:"Sandbox01",component:R},{path:"sandbox02",name:"Sandbox02",component:A},{path:"heightsandbox",name:"HeightSandbox",component:B},{path:"seirekiwareki",name:"SeirekiWareki",component:me},{path:"warekiseireki",name:"WarekiSeireki",component:_e}]}],Ze=y({history:f(I.baseUrl),routes:Xe}),ea={name:"App",setup:()=>({})};ea.render=function(e,a,s,t,n,c){const d=u("router-view");return l(),i("div",null,[r(d)])};const aa=w(ea);aa.use(Ze),aa.mount("#app");const sa=sessionStorage.getItem("ghPagePath");sa&&(sessionStorage.removeItem("ghPagePath"),Ze.push(sa.replace(I.baseUrl,"/")));
