import{S as l,N as b,K as h,a as B,b as I,i as E,A as O}from"./assets/vendor-36598f4e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const x=document.querySelector(".projects__button--prev-js"),P=document.querySelector(".projects__button--next-js"),L=document.querySelector(".reviews-swiper-wrapper"),S=document.querySelector(".reviews-prev-btn"),q=document.querySelector(".reviews-next-btn"),A=document.querySelector("#covers"),C=document.querySelector(".covers-background"),f=document.querySelector(".covers-wrapper"),N=document.querySelector(".mobile-menu-btn"),p=document.querySelector(".modal"),T=document.querySelector(".close-menu-btn"),V=document.querySelector(".menu-btn"),v=document.querySelector(".menu-list"),k=document.body,w=document.querySelector(".footer-form-feedback"),i=document.querySelector(".footer-input-email"),c=document.querySelector(".footer-input-comment"),a=document.querySelector(".footer-btn"),d=document.querySelector(".wrongEmail"),m=document.querySelector(".wrongComment"),g=document.querySelector(".btnToTop"),D=document.querySelector(".aboutme-accordion-container"),M=document.querySelector(".btn-aboutswiper-next"),$=document.querySelectorAll(".faq-list-ul .list-faq");l.use([b,h]);new l(".projects__swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:P,prevEl:x}});async function _(){try{return(await B.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error(e),null}}async function j(){try{const e=await _();if(!e){L.innerHTML="<li>Not Found</li>";return}const o=e.map(s=>`
        
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${s.avatar_url}" 
          loading="lazy" alt="${s.author}" 
          class="reviews-img" 
          width="48" height="48">
          <div class = "reviews-desc">
          <h3 class="reviews-item-subtitle">${s.author}</h3>
        <div class="reviews-text">${s.review}</div>
        </div>
      </li>
    `).join("");L.innerHTML=o}catch(e){console.error(e)}}async function U(){await j(),new l(".reviews-section .swiper-reviews",{modules:[b,h],spaceBetween:16,pageUpDown:!0,mousewheel:!0,navigation:{prevEl:S||void 0,nextEl:q||void 0},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0}})}U();f.addEventListener("click",R);function z(e){e.forEach(o=>{o.isIntersecting?(C.classList.add("animated"),f.classList.add("animated")):(C.classList.remove("animated"),f.classList.remove("animated"))})}const F=new IntersectionObserver(z,{root:null,threshold:0});F.observe(A);function R(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const o=e.target.currentSrc,s=I.create(`<img
      src="${o}"
      alt="${e.target.alt}"
      class="covers-full-image"
    />`,{onShow:t=>{window.addEventListener("keydown",n)},onClose:t=>{window.removeEventListener("keydown",n)}});s.show();function n(t){t.code==="Escape"&&s.close()}}N.addEventListener("click",()=>{p.classList.toggle("is-open"),k.classList.toggle("no-scroll")});T.addEventListener("click",()=>{p.classList.remove("is-open"),k.classList.toggle("no-scroll")});p.addEventListener("click",e=>{e.target.nodeName==="A"&&p.classList.remove("is-open")});V.addEventListener("click",()=>{v.classList.toggle("is-open")});v.addEventListener("click",e=>{e.target.nodeName==="A"&&v.classList.remove("is-open")});const J="https://portfolio-js.b.goit.study/api";async function K(e){try{return(await B.post(`${J}/requests`,e)).data}catch(o){throw o}}document.addEventListener("DOMContentLoaded",()=>{if(i&&c&&w&&a){i.addEventListener("input",G),c.addEventListener("input",H),w.addEventListener("submit",Y);const e=JSON.parse(localStorage.getItem("savedUserInput"));e&&(i.value=e.email,c.value=e.comment),y()}else console.error("One or more elements are not found in the DOM.")});function G(){!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)||i.value.trim().length<=0?(i.style.borderBottomColor="#E74A3B",d.style.color="#E74A3B",d.textContent="Invalid email, try again"):(i.style.borderBottomColor="#3CBC81",d.style.color="#3CBC81",d.textContent="Success!"),y()}function H(){c.value.trim().length<=0?(c.style.borderBottomColor="#E74A3B",m.style.color="#E74A3B",m.textContent="Please, fill the field"):(c.style.borderBottomColor="#3CBC81",m.style.color="#3CBC81",m.textContent="Success!"),y()}function y(){const o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)&&i.value.trim().length>0,s=c.value.trim().length>0;o&&s?(a.disabled=!1,a.style.backgroundColor=""):(a.disabled=!0,a.style.backgroundColor="#3B3B3B"),W()}function W(){const e={email:i.value.trim(),comment:c.value.trim()};localStorage.setItem("savedUserInput",JSON.stringify(e))}async function Y(e){e.preventDefault();const o=JSON.parse(localStorage.getItem("savedUserInput"));try{await K(o),E.show({theme:"dark",class:"toastStyle",title:"Thank you for your interest in cooperation!",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",position:"center",timeout:0,close:!0,backgroundColor:"rgba(28,29,32,1)",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.6)",progressBar:!1,closeOnEscape:!0,closeOnClick:!1,overlayClose:!0}),w.reset(),localStorage.removeItem("savedUserInput"),y()}catch(s){E.show({class:"izi",title:"Error",message:`Error: ${s.message}`,position:"center",progressBar:!1,closeOnEscape:!0,closeOnClick:!0,timeout:0})}}window.addEventListener("scroll",()=>{window.scrollY>100?g.classList.add("show"):g.classList.remove("show")});g.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function Q({containerClass:e,elementClass:o,triggerClass:s,panelClass:n,openOnInit:t=[],duration:r=400}){return new O(e,{elementClass:o,triggerClass:s,panelClass:n,showMultiple:!0,openOnInit:t,duration:r})}function X(e,{btnClass:o,iconClass:s}){const n=e.currentTarget.querySelector(o)||e.target.closest(o),t=e.currentTarget.querySelector(s);if(!n)return;n.classList.contains("rotated")?(t.style.transform="rotate(0deg)",n.classList.remove("rotated")):(t.style.transform="rotate(180deg)",n.classList.add("rotated"))}const Z={containerClass:".aboutme-accordion-container",elementClass:"aboutme-accordion-list",triggerClass:"about-me-subtitle",panelClass:"aboutme-accordion-text",openOnInit:[0]},ee={btnClass:".aboutme-accordion-btn",iconClass:".aboutme-item-icon"},te=D.querySelectorAll(".about-me-subtitle");te.forEach(e=>{e.addEventListener("click",o=>{X(o,ee)})});Q(Z);l.use([b,h]);const oe=new l(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,direction:"horizontal",navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});M.addEventListener("click",e=>{oe.slideNext()});document.addEventListener("DOMContentLoaded",()=>{$.forEach(e=>{const o=e.querySelector(".title-list"),s=e.querySelector(".toggle-btn"),n=e.querySelector(".text-faq"),t=s.querySelector(".icon-open"),r=s.querySelector(".icon-close");n.style.display="none",e.setAttribute("aria-expanded","false"),t.style.display="block",r.style.display="none",o.addEventListener("click",()=>{n.style.display==="block"?(n.style.display="none",e.setAttribute("aria-expanded","false"),t.style.display="block",r.style.display="none"):(n.style.display="block",e.setAttribute("aria-expanded","true"),t.style.display="none",r.style.display="block")})})});
//# sourceMappingURL=commonHelpers.js.map
