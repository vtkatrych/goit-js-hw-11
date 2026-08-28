import{a as l,i as u}from"./assets/vendor-B3uM8yke.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(i){const r="https://pixabay.com/api/",o={key:"57290092-a2317ab3b0fbf392f64df49e7",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return l.get(r,{params:o}).then(s=>s.data)}const a=document.querySelector(".gallery"),d=document.querySelector(".loader");function m(i){const r=i.map(({webformatURL:o,tags:s,likes:e,views:t,comments:n,downloads:c})=>`<li class="gallery-item">
      <img class="gallery-image" src="${o}" alt="${s}" />
      <div class="info">
      <div class="info-item"
      <p>Likes: ${e}</p>
      </div>
      <div class="info-item"
      <p>Views: ${t}</p>
      </div>
      <div class="info-item"
      <p>Comments: ${n}</p>
      </div>
      <div class="info-item"
      <p>Downloads: ${c}</p>
      </div>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",r)}function p(){a.innerHTML=""}function y(){d.classList.remove("is-active")}const g=document.querySelector(".form"),h=document.querySelector('input[name="search-text"]');g.addEventListener("submit",i=>{i.preventDefault();const r=h.value.trim();r!==""&&(p(),f(r).then(o=>{if(o.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{y()}))});
//# sourceMappingURL=index.js.map
