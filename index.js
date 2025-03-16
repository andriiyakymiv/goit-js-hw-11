import{i as n}from"./assets/vendor-iVKk4foX.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=({webformatURL:a,largeImageURL:l,tags:t,likes:o,views:e,comments:r,downloads:s})=>`
    <li class="gallery-card">
        <img class="gallery-images" src="${a}" alt="${t}">
        
        <ul class="gallery-info">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${o}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${e}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${r}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${s}</p>
          </li>
        </ul>
      </li>
    `,f=a=>{const l=new URLSearchParams({key:"49359014-7397220ae93b07f148b4c236e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},i={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery")},u=a=>{a.preventDefault();const l=a.currentTarget.elements.search_text.value.trim();if(l===""){alert("Enter text in the search field");return}f(l).then(({hits:t})=>{if(t.length===0){n.error({title:"Error",message:"Illegal operation"}),i.searchForm.reset(),i.gallery.innerHTML="";return}const o=t.map(e=>c(e)).join("");i.gallery.innerHTML=o}).catch(t=>{console.log(t)})};i.searchForm.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
