(()=>{"use strict";const t=document.querySelectorAll("[data-scroll='section']");window.addEventListener("scroll",(function(){t.forEach((t=>{const e=.6*window.innerHeight;t.getBoundingClientRect().top-e<0?t.classList.add("active"):t.classList.remove("active")}))})),function(){const t=document.querySelector('[data-button="menu"]'),e=document.querySelector('[data-button="lista"]');if(t){function o(o){e.classList.add("active"),t.classList.add("active"),function(o,n,c){const s=document.documentElement,i="data-oustide",r=n=>{o.contains(n.target)||(console.log("test"),e.classList.remove("active"),t.classList.remove("active"),a())},a=()=>{n.forEach((t=>{s.removeEventListener(t,r)})),o.removeAttribute(i)};o.hasAttribute(i)||(n.forEach((t=>{setTimeout((()=>{s.addEventListener(t,r)}))})),o.setAttribute(i,""))}(e,["click","touchstart"])}t.addEventListener("click",o)}}(),function(){const t=document.querySelectorAll('a[href^="#"]');if(t.length){function e(t){t.preventDefault();const e=this.getAttribute("href"),o=document.querySelector(e).offsetTop;window.scrollTo({top:o,behavior:"smooth"})}t.forEach((t=>{t.addEventListener("click",e)}))}}(),function(){const t=document.querySelector("[data-scrolling]");function e(){window.scrollY>0?t.classList.add("scrolling"):t.classList.remove("scrolling")}window.addEventListener("scroll",e),window.addEventListener("unload",(()=>{window.removeEventListener("scroll",e)}))}()})();