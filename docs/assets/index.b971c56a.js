import{p as e,a,r as s,o as t,b as n,c as l,d as r,e as i,f as o,w as c,g as d,h as u,i as v,j as m,v as p,k as b,F as h,l as f,t as k,m as w,n as g,q as y}from"./vendor.bd0226ff.js";const S={setup(){const e=s(!1),a=s(null),l="has-navbar-fixed-top";t((()=>{const e=document.querySelector("html");e.classList.contains(l)||e.classList.add(l)})),n((()=>{document.querySelector("html").classList.remove(l)}));const r=s=>{console.log("_clickedOutsideMenu");a.value.contains(s.target)||(e.value=!1,window.removeEventListener("click",r))};return{visibleSideMenu:e,sideMenuRef:a,showSideMenu:a=>{e.value||(e.value=!0,window.addEventListener("click",r),a.stopPropagation())}}}},x=c("data-v-43ce76fc");e("data-v-43ce76fc");const D={class:"navbar is-primary is-fixed-top has-shadow"},M={class:"navbar-brand"},j=i("span",{"aria-hidden":"true"},null,-1),J=i("span",{"aria-hidden":"true"},null,-1),L=i("span",{"aria-hidden":"true"},null,-1),_=d("Home"),O=i("div",{class:"navbar-menu"},[i("div",{class:"navbar-start"}),i("div",{class:"navbar-end"})],-1),z={key:0,class:"appSideMenu menu",ref:"sideMenuRef"},F={class:"menu-label"},N=d(" メニュー "),T={class:"menu-list"},$=d("Sandbox01"),q=d("Sandbox02"),H={class:"menu-label"},U=d(" 日付 "),V={class:"menu-list"},W=d("西暦→和暦"),Y={key:1,class:"is-overlay is-hidden-tablet",style:{"background-color":"rgba(0, 0, 0, 0.2)"}};a();const C=x(((e,a,s,t,n,c)=>{const d=u("router-link"),v=u("router-view");return l(),r("div",null,[i("nav",D,[i("div",M,[i("a",{role:"button",class:["navbar-burger is-always ml-0",{"is-active":t.visibleSideMenu}],onClick:a[1]||(a[1]=(...e)=>t.showSideMenu&&t.showSideMenu(...e))},[j,J,L],2),i(d,{class:"navbar-item",to:"/"},{default:x((()=>[_])),_:1})]),O]),t.visibleSideMenu?(l(),r("aside",z,[i("p",F,[N,i("ul",T,[i("li",null,[i(d,{to:"/n/sandbox01"},{default:x((()=>[$])),_:1})]),i("li",null,[i(d,{to:"/n/sandbox02"},{default:x((()=>[q])),_:1})])])]),i("p",H,[U,i("ul",V,[i("li",null,[i(d,{to:"/n/seirekiwareki"},{default:x((()=>[W])),_:1})])])])],512)):o("",!0),t.visibleSideMenu?(l(),r("div",Y)):o("",!0),i(v)])}));S.render=C,S.__scopeId="data-v-43ce76fc";const E={name:"Home",setup:()=>({})};E.render=function(e,a,s,t,n,i){return l(),r("div",null,"home")};const R={};R.render=function(e,a){return l(),r("div",null," sandbox01 ")};const A={};A.render=function(e,a){return l(),r("div",null," sandbox02 ")};const I=Object.freeze({order:1,name:"明治",startJsDate:new Date(1868,0,25)}),P=Object.freeze({order:2,name:"大正",startJsDate:new Date(1912,6,30)}),B=Object.freeze({order:3,name:"昭和",startJsDate:new Date(1926,11,25)}),G=Object.freeze({order:4,name:"平成",startJsDate:new Date(1989,0,8)}),K=Object.freeze({reiwa:5,name:"令和",startJsDate:new Date(2019,4,1)}),Q={name:"SeirekiWareki",setup(){const e=new Date,a=s(e.getFullYear().toString()),t=s(e.getMonth().toString()),n=s(e.getDate().toString()),l=s([]),r=v((()=>{const e=Number(a.value),s=Number(t.value),l=Number(n.value);return new Date(e,s,l)}));return{year:a,month:t,date:n,warekiTexts:l,resolve:()=>{const e=[I,P,B,G,K].reverse();l.value=[];for(const a of e){if(r.value.getTime()<a.startJsDate.getTime())continue;const e=r.value.getFullYear()-a.startJsDate.getFullYear()+1;l.value.push(`${a.name}:${e}年${r.value.getMonth()+1}月${r.value.getDate()}日`)}},jsDate:r}}},X={class:"seirekiWareki px-2"},Z={class:"card"},ee=i("header",{class:"card-header is-primary"},[i("p",{class:"card-header-title"},"求めたい西暦")],-1),ae={class:"card-content"},se={class:"columns is-vcentered is-multiline"},te={class:"column is-12"},ne={class:"field"},le=i("label",{class:"label"},"西暦",-1),re={class:"is-flex is-align-items-center"},ie=d(" 年 "),oe={class:"select"},ce=d(" 月 "),de={class:"select"},ue=d(" 日 "),ve={class:"column is-12"},me={class:"card mt-4"},pe=i("header",{class:"card-header is-primary"},[i("p",{class:"card-header-title"},"結果")],-1),be={class:"card-content"};Q.render=function(e,a,s,t,n,o){return l(),r("div",X,[i("div",Z,[ee,i("div",ae,[i("div",se,[i("div",te,[i("div",ne,[le,i("div",re,[m(i("input",{class:"input has-text-right",type:"text",style:{width:"5em"},"onUpdate:modelValue":a[1]||(a[1]=e=>t.year=e)},null,512),[[p,t.year]]),ie,i("div",oe,[m(i("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>t.month=e)},[(l(),r(h,null,f(12,(e=>i("option",{key:e,value:e-1},k(e),9,["value"]))),64))],512),[[b,t.month]])]),ce,i("div",de,[m(i("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>t.date=e)},[(l(),r(h,null,f(31,(e=>i("option",{key:e,value:e},k(e),9,["value"]))),64))],512),[[b,t.date]])]),ue])])]),i("div",ve,[i("button",{class:"button is-primary",onClick:a[4]||(a[4]=(...e)=>t.resolve&&t.resolve(...e))},"決定")])])])]),i("div",me,[pe,i("div",be,[d(k(t.jsDate.toLocaleDateString())+" ",1),i("ul",null,[(l(!0),r(h,null,f(t.warekiTexts,((e,a)=>(l(),r("li",{key:a},k(e),1)))),128))])])])])};const he=[{path:"",redirect:"/n"},{path:"/n",name:"NormalLayout",component:S,children:[{path:"",name:"Home",component:E},{path:"sandbox01",name:"Sandbox01",component:R},{path:"sandbox02",name:"Sandbox02",component:A},{path:"seirekiwareki",name:"SeirekiWareki",component:Q}]}],fe=w({history:g("/ghpage-sandbox"),routes:he}),ke={name:"App",setup:()=>({})};ke.render=function(e,a,s,t,n,o){const c=u("router-view");return l(),r("div",null,[i(c)])};const we=y(ke);we.use(fe),we.mount("#app");
