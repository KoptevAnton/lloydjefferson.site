import{S as n,N as d,K as p,a as w}from"./assets/vendor-f387a30e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=document.querySelector(".projects__button--prev-js"),v=document.querySelector(".projects__button--next-js"),l=document.querySelector(".reviews-swiper-wrapper"),a=document.querySelector(".reviews-prev-btn"),u=document.querySelector(".reviews-next-btn");n.use([d,p]);new n(".projects__swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:v,prevEl:f}});async function y(){try{return(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(r){return console.error(r),null}}async function m(){try{const r=await y();if(!r){l.innerHTML="<li>Not Found</li>";return}const o=r.map(s=>`
        
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
    `).join("");l.innerHTML=o}catch(r){console.error(r)}}async function h(){await m(),new n(".reviews-section .swiper-reviews",{modules:[d,p],spaceBetween:16,pageUpDown:!0,mousewheel:!0,navigation:{prevEl:a||void 0,nextEl:u||void 0},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0}})}h();
//# sourceMappingURL=commonHelpers.js.map
