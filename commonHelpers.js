import{S as m,N as b,K as h,a as B,b as k,i as E,A as I}from"./assets/vendor-6cc0d0f2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const A=document.querySelector(".projects__button--prev-js"),O=document.querySelector(".projects__button--next-js"),L=document.querySelector(".reviews-swiper-wrapper"),S=document.querySelector(".reviews-prev-btn"),C=document.querySelector(".reviews-next-btn"),P=document.querySelector("#covers"),q=document.querySelector(".covers-background"),f=document.querySelector(".covers-wrapper"),N=document.querySelector(".mobile-menu-btn"),p=document.querySelector(".modal"),V=document.querySelector(".close-menu-btn"),T=document.querySelector(".menu-btn"),w=document.querySelector(".menu-list"),x=document.body,v=document.querySelector(".footer-form-feedback"),i=document.querySelector(".footer-input-email"),a=document.querySelector(".footer-input-comment"),d=document.querySelector(".footer-btn"),l=document.querySelector(".wrongEmail"),u=document.querySelector(".wrongComment"),g=document.querySelector(".btnToTop"),D=document.querySelector(".aboutme-accordion-container"),M=document.querySelector(".btn-aboutswiper-next");document.querySelectorAll(".faq-list-ul");m.use([b,h]);new m(".projects__swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:O,prevEl:A}});async function _(){try{return(await B.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error(e),null}}async function $(){try{const e=await _();if(!e){L.innerHTML="<li>Not Found</li>";return}const t=e.map(r=>`
        
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${r.avatar_url}" 
          loading="lazy" alt="${r.author}" 
          class="reviews-img" 
          width="48" height="48">
          <div class = "reviews-desc">
          <h3 class="reviews-item-subtitle">${r.author}</h3>
        <div class="reviews-text">${r.review}</div>
        </div>
      </li>
    `).join("");L.innerHTML=t}catch(e){console.error(e)}}async function z(){await $(),new m(".reviews-section .swiper-reviews",{modules:[b,h],spaceBetween:16,pageUpDown:!0,mousewheel:!0,navigation:{prevEl:S||void 0,nextEl:C||void 0},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0}})}z();f.addEventListener("click",F);function j(e){e.forEach(t=>{t.isIntersecting?(q.classList.add("animated"),f.classList.add("animated")):(q.classList.remove("animated"),f.classList.remove("animated"))})}const U=new IntersectionObserver(j,{root:null,threshold:0});U.observe(P);function F(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.currentSrc,r=k.create(`<img
      src="${t}"
      alt="${e.target.alt}"
      class="covers-full-image"
    />`,{onShow:o=>{window.addEventListener("keydown",n)},onClose:o=>{window.removeEventListener("keydown",n)}});r.show();function n(o){o.code==="Escape"&&r.close()}}N.addEventListener("click",()=>{p.classList.toggle("is-open"),x.classList.toggle("no-scroll")});V.addEventListener("click",()=>{p.classList.remove("is-open"),x.classList.toggle("no-scroll")});p.addEventListener("click",e=>{e.target.nodeName==="A"&&p.classList.remove("is-open")});T.addEventListener("click",()=>{w.classList.toggle("is-open")});w.addEventListener("click",e=>{e.target.nodeName==="A"&&w.classList.remove("is-open")});const H="https://portfolio-js.b.goit.study/api";async function R(e){try{return(await B.post(`${H}/requests`,e)).data}catch(t){throw t}}document.addEventListener("DOMContentLoaded",()=>{if(i&&a&&v&&d){i.addEventListener("input",Z),a.addEventListener("input",J),v.addEventListener("submit",G);const e=JSON.parse(localStorage.getItem("savedUserInput"));e&&(i.value=e.email,a.value=e.comment),y()}else console.error("One or more elements are not found in the DOM.")});function Z(){!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i.value)||i.value.trim().length<=0?(l.classList.add("error-message"),i.style.borderBottomColor="#E74A3B",l.style.color="#E74A3B",l.textContent="Invalid email, try again"):(i.style.borderBottomColor="#3CBC81",l.style.color="#3CBC81",l.textContent="Success!"),y()}function J(){a.value.trim().length<=0?(a.style.borderBottomColor="#E74A3B",u.style.color="#E74A3B",u.textContent="Please, fill the field"):(a.style.borderBottomColor="#3CBC81",u.style.color="#3CBC81",u.textContent="Success!"),y()}function y(){const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i.value)&&i.value.trim().length>0,r=a.value.trim().length>0;t&&r?(d.disabled=!1,d.style.backgroundColor=""):(d.disabled=!0,d.style.backgroundColor="#3B3B3B"),K()}function K(){const e={email:i.value.trim(),comment:a.value.trim()};localStorage.setItem("savedUserInput",JSON.stringify(e))}async function G(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("savedUserInput"));try{await R(t),E.show({theme:"dark",class:"toastStyle",title:"Thank you for your interest in cooperation!",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",position:"center",timeout:0,close:!0,backgroundColor:"rgba(28,29,32,1)",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.6)",progressBar:!1,closeOnEscape:!0,closeOnClick:!1,overlayClose:!0}),v.reset(),i.style.borderBottomColor="",l.textContent="",l.style.color="",a.style.borderBottomColor="",u.textContent="",u.style.color="",localStorage.removeItem("savedUserInput"),y()}catch(r){E.show({class:"izi",title:"Error",message:`Error: ${r.message}`,position:"center",progressBar:!1,closeOnEscape:!0,closeOnClick:!0,timeout:0})}}window.addEventListener("scroll",()=>{window.scrollY>100?g.classList.add("show"):g.classList.remove("show")});g.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function W({containerClass:e,elementClass:t,triggerClass:r,panelClass:n,openOnInit:o=[],duration:s=400}){return new I(e,{elementClass:t,triggerClass:r,panelClass:n,showMultiple:!0,openOnInit:o,duration:s})}function Y(e,{btnClass:t,iconClass:r}){const n=e.currentTarget.querySelector(t)||e.target.closest(t),o=e.currentTarget.querySelector(r);if(!n)return;n.classList.contains("rotated")?(o.style.transform="rotate(0deg)",n.classList.remove("rotated")):(o.style.transform="rotate(180deg)",n.classList.add("rotated"))}const Q={containerClass:".aboutme-accordion-container",elementClass:"aboutme-accordion-list",triggerClass:"about-me-subtitle",panelClass:"aboutme-accordion-text",openOnInit:[0]},X={btnClass:".aboutme-accordion-btn",iconClass:".aboutme-item-icon"},ee=D.querySelectorAll(".about-me-subtitle");ee.forEach(e=>{e.addEventListener("click",t=>{Y(t,X)})});W(Q);m.use([b,h]);const te=new m(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,direction:"horizontal",navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});M.addEventListener("click",e=>{te.slideNext()});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".list-faq").forEach(t=>{const r=t.querySelector(".title-list"),n=t.querySelector(".toggle-btn"),o=t.querySelector(".text-faq"),s=n.querySelector(".icon-open"),c=n.querySelector(".icon-close");t.setAttribute("aria-expanded","false"),s.style.display="block",c.style.display="none",r.addEventListener("click",()=>{t.getAttribute("aria-expanded")==="true"?(t.setAttribute("aria-expanded","false"),s.style.display="block",c.style.display="none",o.style.maxHeight="0",o.style.opacity="0"):(t.setAttribute("aria-expanded","true"),s.style.display="none",c.style.display="block",o.style.maxHeight=o.scrollHeight+"px",o.style.opacity="1")})})});
//# sourceMappingURL=commonHelpers.js.map
