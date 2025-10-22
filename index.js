import{a as u,S as f,i as p}from"./assets/vendor-EBklf52_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="52822111-b1008b71650d3ce195bc41da7",m="https://pixabay.com/api/";function y(r){return u(m,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>{if(o.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.data}).catch(o=>{throw o})}const s=document.querySelector(".gallery"),c=document.querySelector(".loader");document.querySelector(".spinner");document.querySelector(".spinner-btn");new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(r=[]){s.innerHTML=r.map(({previewURL:o,tags:i,largeImageURL:l,likes:e,views:t,comments:a,downloads:n})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img  class="gallery-image" src="${o}" alt="${i}" loading="lazy" 
                title="Title: ${i.split(",")[0].trim()}  |  
                Likes: ${e.toLocaleString()}  |  
                View: ${t.toLocaleString()}  |  
                Comments: ${a.toLocaleString()}  |  
                Downloads: ${n.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${a.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${n.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),lightbox.refresh()}function h(){s.innerHTML=""}function L(){c.hidden=!1}function b(){c.hidden=!0}const S=document.querySelector(".form");S.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();h(),L(),y(o).then(i=>{g(i.hits)}).catch(i=>{p.error({message:i.message,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}).finally(()=>{r.target.elements.query.value="",b()})});
//# sourceMappingURL=index.js.map
