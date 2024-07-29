import{S as a,N as w,K as v,a as f,b as m}from"./assets/vendor-130f5de6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y=document.querySelector(".projects__button--prev-js"),g=document.querySelector(".projects__button--next-js"),l=document.querySelector(".reviews-swiper-wrapper"),u=document.querySelector(".reviews-prev-btn"),d=document.querySelector(".reviews-next-btn"),h=document.querySelector("#covers"),p=document.querySelector(".covers-background"),c=document.querySelector(".covers-wrapper");a.use([w,v]);new a(".projects__swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:g,prevEl:y}});async function b(){try{return(await f.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(t){return console.error(t),null}}async function E(){try{const t=await b();if(!t){l.innerHTML="<li>Not Found</li>";return}const s=t.map(o=>`
        
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${o.avatar_url}" 
          loading="lazy" alt="${o.author}" 
          class="reviews-img" 
          width="48" height="48">
          <div class = "reviews-desc">
          <h3 class="reviews-item-subtitle">${o.author}</h3>
        <div class="reviews-text">${o.review}</div>
        </div>
      </li>
    `).join("");l.innerHTML=s}catch(t){console.error(t)}}async function L(){await E(),new a(".reviews-section .swiper-reviews",{modules:[w,v],spaceBetween:16,pageUpDown:!0,mousewheel:!0,navigation:{prevEl:u||void 0,nextEl:d||void 0},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0}})}L();c.addEventListener("click",q);function S(t){t.forEach(s=>{s.isIntersecting?(p.classList.add("animated"),c.classList.add("animated")):(p.classList.remove("animated"),c.classList.remove("animated"))})}const x=new IntersectionObserver(S,{root:null,threshold:0});x.observe(h);function q(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const s=t.target.currentSrc,o=m.create(`<img
      src="${s}"
      alt="${t.target.alt}"
      class="covers-full-image"
    />`,{onShow:e=>{window.addEventListener("keydown",n)},onClose:e=>{window.removeEventListener("keydown",n)}});o.show();function n(e){e.code==="Escape"&&o.close()}}
//# sourceMappingURL=commonHelpers.js.map
