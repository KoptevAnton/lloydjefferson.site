import{S as d,N as b,K as h,a as B,b as x,i as E,A as I}from"./assets/vendor-36598f4e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const O=document.querySelector(".projects__button--prev-js"),A=document.querySelector(".projects__button--next-js"),L=document.querySelector(".reviews-swiper-wrapper"),S=document.querySelector(".reviews-prev-btn"),C=document.querySelector(".reviews-next-btn"),P=document.querySelector("#covers"),q=document.querySelector(".covers-background"),f=document.querySelector(".covers-wrapper"),N=document.querySelector(".mobile-menu-btn"),p=document.querySelector(".modal"),T=document.querySelector(".close-menu-btn"),V=document.querySelector(".menu-btn"),w=document.querySelector(".menu-list"),k=document.body,v=document.querySelector(".footer-form-feedback"),i=document.querySelector(".footer-input-email"),a=document.querySelector(".footer-input-comment"),u=document.querySelector(".footer-btn"),c=document.querySelector(".wrongEmail"),l=document.querySelector(".wrongComment"),g=document.querySelector(".btnToTop"),D=document.querySelector(".aboutme-accordion-container"),M=document.querySelector(".btn-aboutswiper-next"),_=document.querySelectorAll(".faq-list-ul .list-faq");d.use([b,h]);new d(".projects__swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:A,prevEl:O}});async function $(){try{return(await B.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error(e),null}}async function z(){try{const e=await $();if(!e){L.innerHTML="<li>Not Found</li>";return}const o=e.map(r=>`
        
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
    `).join("");L.innerHTML=o}catch(e){console.error(e)}}async function j(){await z(),new d(".reviews-section .swiper-reviews",{modules:[b,h],spaceBetween:16,pageUpDown:!0,mousewheel:!0,navigation:{prevEl:S||void 0,nextEl:C||void 0},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0}})}j();f.addEventListener("click",R);function U(e){e.forEach(o=>{o.isIntersecting?(q.classList.add("animated"),f.classList.add("animated")):(q.classList.remove("animated"),f.classList.remove("animated"))})}const F=new IntersectionObserver(U,{root:null,threshold:0});F.observe(P);function R(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const o=e.target.currentSrc,r=x.create(`<img
      src="${o}"
      alt="${e.target.alt}"
      class="covers-full-image"
    />`,{onShow:t=>{window.addEventListener("keydown",n)},onClose:t=>{window.removeEventListener("keydown",n)}});r.show();function n(t){t.code==="Escape"&&r.close()}}N.addEventListener("click",()=>{p.classList.toggle("is-open"),k.classList.toggle("no-scroll")});T.addEventListener("click",()=>{p.classList.remove("is-open"),k.classList.toggle("no-scroll")});p.addEventListener("click",e=>{e.target.nodeName==="A"&&p.classList.remove("is-open")});V.addEventListener("click",()=>{w.classList.toggle("is-open")});w.addEventListener("click",e=>{e.target.nodeName==="A"&&w.classList.remove("is-open")});const Z="https://portfolio-js.b.goit.study/api";async function J(e){try{return(await B.post(`${Z}/requests`,e)).data}catch(o){throw o}}document.addEventListener("DOMContentLoaded",()=>{if(i&&a&&v&&u){i.addEventListener("input",K),a.addEventListener("input",G),v.addEventListener("submit",W);const e=JSON.parse(localStorage.getItem("savedUserInput"));e&&(i.value=e.email,a.value=e.comment),y()}else console.error("One or more elements are not found in the DOM.")});function K(){!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i.value)||i.value.trim().length<=0?(c.classList.add("error-message"),i.style.borderBottomColor="#E74A3B",c.style.color="#E74A3B",c.textContent="Invalid email, try again"):(i.style.borderBottomColor="#3CBC81",c.style.color="#3CBC81",c.textContent="Success!"),y()}function G(){a.value.trim().length<=0?(a.style.borderBottomColor="#E74A3B",l.style.color="#E74A3B",l.textContent="Please, fill the field"):(a.style.borderBottomColor="#3CBC81",l.style.color="#3CBC81",l.textContent="Success!"),y()}function y(){const o=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i.value)&&i.value.trim().length>0,r=a.value.trim().length>0;o&&r?(u.disabled=!1,u.style.backgroundColor=""):(u.disabled=!0,u.style.backgroundColor="#3B3B3B"),H()}function H(){const e={email:i.value.trim(),comment:a.value.trim()};localStorage.setItem("savedUserInput",JSON.stringify(e))}async function W(e){e.preventDefault();const o=JSON.parse(localStorage.getItem("savedUserInput"));try{await J(o),E.show({theme:"dark",class:"toastStyle",title:"Thank you for your interest in cooperation!",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",position:"center",timeout:0,close:!0,backgroundColor:"rgba(28,29,32,1)",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.6)",progressBar:!1,closeOnEscape:!0,closeOnClick:!1,overlayClose:!0}),v.reset(),i.style.borderBottomColor="",c.textContent="",c.style.color="",a.style.borderBottomColor="",l.textContent="",l.style.color="",localStorage.removeItem("savedUserInput"),y()}catch(r){E.show({class:"izi",title:"Error",message:`Error: ${r.message}`,position:"center",progressBar:!1,closeOnEscape:!0,closeOnClick:!0,timeout:0})}}window.addEventListener("scroll",()=>{window.scrollY>100?g.classList.add("show"):g.classList.remove("show")});g.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function Y({containerClass:e,elementClass:o,triggerClass:r,panelClass:n,openOnInit:t=[],duration:s=400}){return new I(e,{elementClass:o,triggerClass:r,panelClass:n,showMultiple:!0,openOnInit:t,duration:s})}function Q(e,{btnClass:o,iconClass:r}){const n=e.currentTarget.querySelector(o)||e.target.closest(o),t=e.currentTarget.querySelector(r);if(!n)return;n.classList.contains("rotated")?(t.style.transform="rotate(0deg)",n.classList.remove("rotated")):(t.style.transform="rotate(180deg)",n.classList.add("rotated"))}const X={containerClass:".aboutme-accordion-container",elementClass:"aboutme-accordion-list",triggerClass:"about-me-subtitle",panelClass:"aboutme-accordion-text",openOnInit:[0]},ee={btnClass:".aboutme-accordion-btn",iconClass:".aboutme-item-icon"},te=D.querySelectorAll(".about-me-subtitle");te.forEach(e=>{e.addEventListener("click",o=>{Q(o,ee)})});Y(X);d.use([b,h]);const oe=new d(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,direction:"horizontal",navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});M.addEventListener("click",e=>{oe.slideNext()});document.addEventListener("DOMContentLoaded",()=>{_.forEach(e=>{const o=e.querySelector(".title-list"),r=e.querySelector(".toggle-btn"),n=e.querySelector(".text-faq"),t=r.querySelector(".icon-open"),s=r.querySelector(".icon-close");n.style.display="none",e.setAttribute("aria-expanded","false"),t.style.display="block",s.style.display="none",o.addEventListener("click",()=>{n.style.display==="block"?(n.style.display="none",e.setAttribute("aria-expanded","false"),t.style.display="block",s.style.display="none"):(n.style.display="block",e.setAttribute("aria-expanded","true"),t.style.display="none",s.style.display="block")})})});
//# sourceMappingURL=commonHelpers.js.map
