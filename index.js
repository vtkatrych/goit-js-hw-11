import{a as d,S as m,i as n}from"./assets/vendor-CjwZPKE9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api/",i={key:"57290092-a2317ab3b0fbf392f64df49e7",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(r,{params:i}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:f})=>`<li class="gallery-item">
        <a class="galerry-link" href=${s}>
      <img class="gallery-image" src="${i}" alt="${e}" />
      </a>
      <div class="info">
      <div class="info-item">
      <p>Likes: ${t}</p>
      </div>
      <div class="info-item">
      <p>Views: ${a}</p>
      </div>
      <div class="info-item">
      <p>Comments: ${u}</p>
      </div>
      <div class="info-item">
      <p>Downloads: ${f}</p>
      </div>
      </div>
    </li>`).join("");l.innerHTML=r,y.refresh()}function h(){l.innerHTML=""}function v(){c.classList.add("is-active")}function L(){c.classList.remove("is-active")}const b=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');b.addEventListener("submit",o=>{o.preventDefault();const r=S.value.trim();r!==""&&(v(),h(),p(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}).catch(i=>{console.log(i),n.error({title:"Error",message:"'Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
