(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=({webformatURL:a,largeImageURL:l,tags:t,likes:s,views:e,comments:r,downloads:o})=>`
    <li class="gallery-card">
        <img class="gallery-images" src="${a}" alt="${t}">
        <img class="gallery-images" src="${l}" alt="${t}">
        <ul class="gallery-info">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${s}</p>
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
            <p class="gallery-info-value">${o}</p>
          </li>
        </ul>
      </li>
    `,n=a=>fetch(`https://pixabay.com/api/?key=49359014-7397220ae93b07f148b4c236e&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()});console.log(n);const i={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery")},u=a=>{a.preventDefault();const l=a.currentTarget.elements.search_text.value.trim();if(l===""){alert("Enter text in the search field");return}n(l).then(({hits:t})=>{if(t.length===0){alert("Add box"),i.searchForm.reset(),i.gallery.innerHTML="";return}const s=t.map(e=>c(e)).join("");i.gallery.innerHTML=s}).catch(t=>{console.log(t)})};i.searchForm.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
